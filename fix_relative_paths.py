"""
将所有 HTML 中以 / 开头的内部路径改为相对路径，使其在 GitHub Pages 子路径下正确工作。

策略：
- 根据当前 HTML 文件相对于项目根目录的深度，计算路径前缀
  - d:\IntelligentMcuCourse\index.html -> 深度 0，前缀 ""
  - d:\IntelligentMcuCourse\lab\index.html -> 深度 1，前缀 "../"
  - d:\IntelligentMcuCourse\chapters\part1-basics\ch01.html -> 深度 2，前缀 "../../"
- 把 href="/xxx" 改为 href="<prefix>xxx"
- 把 src="/xxx" 改为 src="<prefix>xxx"
- 不处理 // 开头（协议相对 URL）、http://、https://
- 同时移除之前添加的 base 路径脚本
"""
import re
from pathlib import Path

PROJECT_ROOT = Path(r"d:\IntelligentMcuCourse")

# 匹配以 / 开头但不是 // 开头的路径
# 支持 href="..."、src="..." 属性
# 不匹配 http://、https://、// 开头的
path_pattern = re.compile(
    r'((?:href|src)\s*=\s*["\'])\/(?!\/)([^"\']*)',
    re.IGNORECASE
)

# 之前添加的 base 脚本（完整行 + 换行）
base_script_pattern = re.compile(
    r'<script>if\(location\.hostname\.endsWith\(\'github\.io\'\)\)\{document\.write\(\'<base href="/IntelligentMcuCourse/">\'\)\}</script>\n?',
    re.IGNORECASE
)


def get_relative_prefix(filepath):
    """根据文件相对项目根目录的深度计算相对路径前缀"""
    rel = filepath.relative_to(PROJECT_ROOT)
    parts = rel.parts
    # 深度 = 路径中的目录数（去掉最后的文件名）
    depth = len(parts) - 1
    if depth == 0:
        return ''
    return '../' * depth


def fix_paths(content, prefix):
    """把 /xxx 改为 prefix + xxx"""
    def replace(m):
        attr = m.group(1)
        path = m.group(2)
        return f'{attr}{prefix}{path}'

    return path_pattern.sub(replace, content)


def remove_base_script(content):
    """移除之前添加的 base 路径脚本"""
    return base_script_pattern.sub('', content)


def main():
    total = 0
    modified = 0

    for html_file in PROJECT_ROOT.rglob("*.html"):
        if ".git" in str(html_file):
            continue
        total += 1

        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # 1. 移除之前添加的 base 脚本
        content = remove_base_script(content)

        # 2. 计算相对路径前缀
        prefix = get_relative_prefix(html_file)

        # 3. 修复所有 / 开头的路径
        content = fix_paths(content, prefix)

        if content != original:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
            modified += 1
            rel_path = html_file.relative_to(PROJECT_ROOT)
            print(f"  已修改: {rel_path} (prefix: '{prefix}')")

    print(f"\n完成。共扫描 {total} 个文件，修改 {modified} 个。")


if __name__ == '__main__':
    main()
