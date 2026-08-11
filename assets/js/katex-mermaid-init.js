/* ==========================================================================
   KaTeX / Mermaid 初始化
   --------------------------------------------------------------------------
   - KaTeX: 数学公式自动渲染
   - Mermaid: 兼容保留，用于尚未迁移的旧块
   - PlantUML: 已改为构建期本地预编译为 SVG（见 scripts/build-plantuml.ps1）
     HTML 中保留 <details> 折叠的 PlantUML 源码供查看，运行期无需 JS 处理
   ========================================================================== */
(function () {
  'use strict';

  // ---------- KaTeX 自动渲染 ----------
  function initKatex() {
    if (typeof renderMathInElement === 'undefined') return;
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$',  right: '$$',  display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '$',   right: '$',   display: false },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false,
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
      ignoredClasses: ['no-katex']
    });
  }

  // ---------- Mermaid 初始化（兼容保留） ----------
  function initMermaid() {
    if (typeof mermaid === 'undefined') return;
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        primaryColor: '#d1fae5',
        primaryTextColor: '#1b4332',
        primaryBorderColor: '#2d6a4f',
        lineColor: '#52b788',
        secondaryColor: '#f1f3f5',
        tertiaryColor: '#f8f9fa',
        fontFamily: '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
        fontSize: '14px'
      },
      flowchart: { curve: 'basis', useMaxWidth: true },
      sequence: { useMaxWidth: true },
      gantt: { useMaxWidth: true }
    });

    var blocks = document.querySelectorAll('.mermaid');
    blocks.forEach(function (block, idx) {
      if (block.getAttribute('data-processed')) return;
      var id = 'mermaid-svg-' + idx;
      mermaid.render(id, block.textContent, function (svgCode) {
        block.innerHTML = svgCode;
        block.setAttribute('data-processed', 'true');
      }, function (err) {
        console.warn('Mermaid 渲染失败:', err);
        block.style.color = '#dc2626';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initKatex();
    initMermaid();

    if (typeof Prism !== 'undefined' && Prism.highlightAll) {
      Prism.highlightAll();
    }
  });
})();
