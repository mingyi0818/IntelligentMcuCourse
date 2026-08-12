<#
.SYNOPSIS
  全站 PlantUML 本地预编译脚本。
  扫描所有 HTML 文件中的 <div class="plantuml">@startuml...@enduml</div> 块，
  调用本地 plantuml.jar 生成 SVG，并替换 HTML 块为 <img> + <details>源码</details>。
.PARAMETER PlantUmlJar
  本地 plantuml.jar 路径，默认 D:\mytools\plantuml.jar
.PARAMETER RootDir
  站点根目录，默认 d:\IntelligentMcuCourse
.PARAMETER Force
  重新生成所有 SVG（默认仅生成缺失的）
.EXAMPLE
  .\scripts\build-plantuml.ps1
.EXAMPLE
  .\scripts\build-plantuml.ps1 -Force
#>
[CmdletBinding()]
param(
    [string]$PlantUmlJar = 'D:\mytools\plantuml.jar',
    [string]$RootDir     = 'd:\IntelligentMcuCourse',
    [switch]$Force
)

$ErrorActionPreference = 'Stop'
$diagramsDir = Join-Path $RootDir 'assets\diagrams'
if (-not (Test-Path $diagramsDir)) {
    New-Item -ItemType Directory -Path $diagramsDir -Force | Out-Null
}

if (-not (Test-Path $PlantUmlJar)) {
    Write-Error "未找到 plantuml.jar: $PlantUmlJar"
    exit 1
}

# ---------- 1. 扫描所有 HTML 文件 ----------
$htmlFiles = Get-ChildItem -Path $RootDir -Recurse -Filter *.html |
    Where-Object { $_.FullName -notmatch '\\assets\\' -and $_.FullName -notmatch '\\scripts\\' }

Write-Host ("[1/4] 扫描到 {0} 个 HTML 文件" -f $htmlFiles.Count) -ForegroundColor Cyan

# 正则：匹配 <div class="plantuml"> ... @enduml \s </div>
# DOTALL 模式：使 . 匹配换行
$blockPattern = '(?s)(<div\s+class="plantuml"\s*>)(.*?)(</div>)'

$totalBlocks  = 0
$generated    = 0
$skipped      = 0
$failed       = 0
$failedFiles  = @()

# ---------- 2. 遍历每个 HTML，处理 plantuml 块 ----------
foreach ($file in $htmlFiles) {
    $relPath = $file.FullName.Substring($RootDir.Length).TrimStart('\','/')
    $html    = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)

    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)

    # 用 [regex]::Matches 收集所有匹配（从后往前替换避免索引偏移）
    $matches = [regex]::Matches($html, $blockPattern)
    if ($matches.Count -eq 0) { continue }

    $figIdx = 0
    $changed = $false

    # 倒序遍历，从最后一个开始替换，这样前面的索引不会受影响
    # idx 用 (i + 1) 保持文档顺序编号：第 1 个匹配 fig1，第 2 个 fig2...
    for ($i = $matches.Count - 1; $i -ge 0; $i--) {
        $m = $matches[$i]
        $idx = $i + 1

        $svgName = "{0}-fig{1}.svg" -f $baseName, $idx
        $svgAbs  = Join-Path $diagramsDir $svgName
        # 计算从 HTML 文件到站点根的相对路径，再拼接 assets/diagrams/svgName
        $fileRelDir = (Split-Path -Parent $file.FullName).Substring($RootDir.Length).TrimStart('\','/')
        if ($fileRelDir) {
            $depth = ($fileRelDir -split '[\\/]').Count
            $relPrefix = ("../" * $depth)
        } else {
            $relPrefix = ""
        }
        $svgRel  = "${relPrefix}assets/diagrams/$svgName"

        # 提取 PlantUML 源码：从 @startuml 到 @enduml
        $rawContent = $m.Groups[2].Value
        $srcMatch = [regex]::Match($rawContent, '(?s)(@startuml.*?@enduml)')
        if (-not $srcMatch.Success) {
            Write-Warning "  [$relPath] 块 $idx 未找到 @startuml...@enduml，跳过"
            continue
        }
        $source = $srcMatch.Groups[1].Value.Trim()

        # 判断是否需要重新生成
        $needGen = $Force -or -not (Test-Path $svgAbs)
        if ($needGen) {
            # 写临时 .puml 文件（UTF-8 with BOM 让 plantuml 识别中文）
            $tmpPuml = Join-Path $env:TEMP ("plantuml_{0}_{1}.puml" -f $baseName, $idx)
            [System.IO.File]::WriteAllText($tmpPuml, $source, (New-Object System.Text.UTF8Encoding $true))

            # 调用 plantuml.jar：输出到 temp 目录
            # 用 Start-Process 捕获 stderr 但不抛异常
            $workDir = $env:TEMP
            $stderrFile = Join-Path $env:TEMP ("plantuml_err_{0}_{1}.txt" -f $baseName, $idx)
            $proc = Start-Process -FilePath "java" `
                -ArgumentList "-jar", $PlantUmlJar, "-tsvg", "-charset", "UTF-8", "-o", $workDir, $tmpPuml `
                -NoNewWindow -Wait -PassThru `
                -RedirectStandardError $stderrFile `
                -RedirectStandardOutput "NUL"
            $errOut = ""
            if (Test-Path $stderrFile) { $errOut = [System.IO.File]::ReadAllText($stderrFile) }

            # plantuml 把 .puml 替换扩展名生成 .svg
            $genSvg = [System.IO.Path]::ChangeExtension($tmpPuml, '.svg')
            if (Test-Path $genSvg) {
                if (Test-Path $svgAbs) { Remove-Item $svgAbs -Force }
                Move-Item -Path $genSvg -Destination $svgAbs -Force
                Remove-Item $tmpPuml -Force -ErrorAction SilentlyContinue
                Remove-Item $stderrFile -Force -ErrorAction SilentlyContinue
                $generated++
                Write-Host ("  [生成] {0} -> {1}" -f $relPath, $svgName) -ForegroundColor Green
            } else {
                Write-Warning ("  [失败] {0} 块 {1}: plantuml.jar 未生成 SVG" -f $relPath, $idx)
                if ($errOut) { Write-Warning "    stderr: $errOut" }
                $failed++
                $failedFiles += "$relPath (块 $idx)"
                Remove-Item $tmpPuml -Force -ErrorAction SilentlyContinue
                Remove-Item $stderrFile -Force -ErrorAction SilentlyContinue
                continue  # 保留原块
            }
        } else {
            $skipped++
        }

        $totalBlocks++

        # 构造替换 HTML：图片 + 可折叠源码
        # 转义 HTML 特殊字符（< > &）用于在 <code> 中显示
        $escaped = $source -replace '&','&amp;' -replace '<','&lt;' -replace '>','&gt;'

        $replacement = @"
<div class="plantuml-figure">
  <img src="$svgRel" alt="PlantUML 图 $idx" class="plantuml-img" loading="lazy" />
  <details class="plantuml-source">
    <summary>查看 PlantUML 源码</summary>
    <pre><code class="language-plantuml">$escaped</code></pre>
  </details>
</div>
"@

        # 替换：用 Substring 拼接，避免正则反向引用问题
        $html = $html.Substring(0, $m.Index) + $replacement + $html.Substring($m.Index + $m.Length)
        $changed = $true
    }

    if ($changed) {
        # UTF-8 无 BOM 写回
        [System.IO.File]::WriteAllText($file.FullName, $html, (New-Object System.Text.UTF8Encoding $false))
        Write-Host ("[更新] {0}" -f $relPath) -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "================ 统计 ================" -ForegroundColor Cyan
Write-Host ("总块数:  {0}" -f $totalBlocks)
Write-Host ("已生成:  {0}" -f $generated)
Write-Host ("已存在:  {0}" -f $skipped)
Write-Host ("失败:    {0}" -f $failed)
if ($failedFiles.Count -gt 0) {
    Write-Host "失败文件:" -ForegroundColor Red
    $failedFiles | ForEach-Object { Write-Host "  $_" }
}
Write-Host "======================================" -ForegroundColor Cyan
