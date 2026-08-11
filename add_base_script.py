"""
为所有 HTML 文件在 head 最前面添加 base 路径设置脚本。
该脚本只在 GitHub Pages 环境（hostname 以 github.io 结尾）下生效，
设置 <base href="/IntelligentMcuCourse/">，让 / 开头的绝对路径正确解析。
本地开发环境不受影响。
"""
import re
import os
from pathlib import Path

PROJECT_ROOT = Path(r"d:\IntelligentMcuCourse")
REPO_NAME = "IntelligentMcuCourse"

# base 路径设置脚本
BASE_SCRIPT = (
    '<script>'
    f"if(location.hostname.endsWith('github.io')){{document.write('<base href=\"/{REPO_NAME}/\">')}}"
    '</script>\n'
)

# 匹配 <head> 标签后紧跟的内容，在 head 第一个位置插入脚本
# 匹配 <head> 后可能有的空白和换行
head_pattern = re.compile(r'(<head>\s*\n)', re.IGNORECASE)

total_files = 0
modified_files = 0

for html_file in PROJECT_ROOT.rglob("*.html"):
    if ".git" in str(html_file):
        continue
    total_files += 1

    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 检查是否已存在 base 路径脚本（避免重复添加）
    if 'github.io' in content and '<base' in content:
        print(f"  跳过（已有 base 脚本）: {html_file.relative_to(PROJECT_ROOT)}")
        continue

    # 在 <head> 后插入 base 脚本
    new_content = head_pattern.sub(r'\1' + BASE_SCRIPT, content, count=1)

    if new_content != content:
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        modified_files += 1
        print(f"  已修改: {html_file.relative_to(PROJECT_ROOT)}")
    else:
        print(f"  未找到 <head>: {html_file.relative_to(PROJECT_ROOT)}")

print(f"\n完成。共扫描 {total_files} 个 HTML 文件，修改 {modified_files} 个。")
