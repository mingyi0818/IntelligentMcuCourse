/* ==========================================================================
   《单片机原理及应用》在线教程 - 主脚本
   功能：侧边栏切换、代码一键复制、返回顶部、移动端导航
   ========================================================================== */
(function () {
  'use strict';

  // ---------- 移动端顶部导航菜单切换 ----------
  function initNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  }

  // ---------- 侧边栏切换（移动端） ----------
  function initSidebarToggle() {
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.querySelector('.overlay');
    if (!sidebar) return;

    // 创建遮罩（如不存在）
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'overlay';
      document.body.appendChild(overlay);
    }

    function openSidebar() {
      sidebar.classList.add('show');
      overlay.classList.add('show');
    }
    function closeSidebar() {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    }

    // 顶部导航汉堡按钮（移动端）也可触发侧边栏
    var navToggle = document.querySelector('.nav-toggle');
    if (navToggle && window.innerWidth <= 900) {
      navToggle.addEventListener('click', function () {
        if (!sidebar.classList.contains('show')) {
          openSidebar();
        }
      });
    }

    overlay.addEventListener('click', closeSidebar);

    var closeBtn = sidebar.querySelector('.sidebar-close');
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

    // 点击侧边栏链接后自动关闭（移动端）
    sidebar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 900) closeSidebar();
      });
    });
  }

  // ---------- 代码块一键复制 ----------
  function initCodeCopy() {
    var pres = document.querySelectorAll('pre[class*="language-"]');
    pres.forEach(function (pre) {
      // 避免重复包裹
      if (pre.parentElement.classList.contains('code-block-wrapper')) return;

      var wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = '复制';
      btn.setAttribute('aria-label', '复制代码');
      btn.addEventListener('click', function () {
        var code = pre.querySelector('code');
        var text = code ? code.textContent : pre.textContent;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            showCopied(btn);
          }).catch(function () {
            fallbackCopy(text, btn);
          });
        } else {
          fallbackCopy(text, btn);
        }
      });
      wrapper.appendChild(btn);
    });
  }

  function showCopied(btn) {
    btn.textContent = '已复制';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = '复制';
      btn.classList.remove('copied');
    }, 1800);
  }

  function fallbackCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showCopied(btn);
    } catch (e) {
      btn.textContent = '复制失败';
    }
    document.body.removeChild(ta);
  }

  // ---------- 返回顶部 ----------
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- 当前章节侧边栏高亮 ----------
  function highlightCurrentLink() {
    var path = window.location.pathname.split('/').pop();
    var links = document.querySelectorAll('.sidebar-link');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var linkFile = href.split('/').pop();
      if (linkFile === path) {
        link.classList.add('active');
      }
    });
  }

  // ---------- 侧边栏四级折叠结构（篇→章→节→小节） ----------
  // 思路：读取已有侧边栏的扁平结构（sidebar-part + sidebar-link），
  // 解析当前页面的 h2/h3 标题生成节/小节，重建为可折叠的多级结构。
  // 已有的 active 类会被保留到新结构中。
  function initSidebarNav() {
    var sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;

    // Step 1: 将扁平结构解析为「篇 → 章」层级
    var parts = [];
    var currentPart = null;
    Array.prototype.forEach.call(sidebarNav.children, function (el) {
      if (el.classList.contains('sidebar-part')) {
        currentPart = { title: el.textContent.trim(), chapters: [] };
        parts.push(currentPart);
      } else if (el.classList.contains('sidebar-link')) {
        if (!currentPart) {
          currentPart = { title: '', chapters: [] };
          parts.push(currentPart);
        }
        currentPart.chapters.push({
          title: el.textContent.trim(),
          href: el.getAttribute('href') || '#',
          active: el.classList.contains('active')
        });
      }
    });
    if (parts.length === 0) return;

    // Step 2: 收集所有 active 章节（ch00 有 5 个 active 链接指向同一页不同锚点）
    var currentPartIdx = -1;
    var activeChapters = [];
    parts.forEach(function (part, pIdx) {
      part.chapters.forEach(function (ch) {
        if (ch.active) {
          currentPartIdx = pIdx;
          activeChapters.push(ch);
        }
      });
    });

    // Step 3: 解析页面标题
    // 检测是否为多章节页面（ch00：h1 为 "1 模拟电路常识" 格式）
    var h1Elements = document.querySelectorAll('.content h1');
    var hasH1Chapters = false;
    Array.prototype.forEach.call(h1Elements, function (h) {
      var title = h.textContent.trim();
      if (title.match(/^§?\d+\s+/)) hasH1Chapters = true;
    });

    // 单章节模式：sections = [{title, id, subsections: []}]（h2=节, h3=小节）
    // 多章节模式：chapterSections = [{chapterTitle, id, sections: [{title, id}]}]（h1=章, h2=节）
    var sections = [];
    var chapterSections = [];

    if (hasH1Chapters) {
      // 多章节页面（ch00）：h1 = 章, h2 = 节
      var currentCh = null;
      var headings = document.querySelectorAll('.content h1, .content h2');
      Array.prototype.forEach.call(headings, function (h) {
        var title = h.textContent.trim();
        if (h.tagName === 'H1') {
          var m1 = title.match(/^§?(\d+)\s+/);
          if (m1) {
            if (!h.id) h.id = 'sec-' + m1[1];
            currentCh = { chapterTitle: title, id: h.id, sections: [] };
            chapterSections.push(currentCh);
          }
        } else if (h.tagName === 'H2') {
          var m2 = title.match(/^§?(\d+\.\d+(?:\.\d+)?)/);
          if (m2 && currentCh) {
            if (!h.id) h.id = 'sec-' + m2[1].replace(/\./g, '-');
            currentCh.sections.push({ title: title, id: h.id });
          }
        }
      });
    } else if (activeChapters.length > 0) {
      // 单章节页面：h2 = 节, h3 = 小节
      var currentSection = null;
      var headings = document.querySelectorAll('.content h2, .content h3');
      Array.prototype.forEach.call(headings, function (h) {
        var title = h.textContent.trim();
        // 兼容 "30.1 xxx" 与 "§34.1 xxx" 两种格式
        var match = title.match(/^§?(\d+\.\d+(?:\.\d+)?)/);
        if (!match) return;
        if (!h.id) {
          h.id = 'sec-' + match[1].replace(/\./g, '-');
        }
        if (h.tagName === 'H2') {
          currentSection = { title: title, id: h.id, subsections: [] };
          sections.push(currentSection);
        } else if (h.tagName === 'H3' && currentSection) {
          currentSection.subsections.push({ title: title, id: h.id });
        }
      });
    }

    // Step 4: 重建为可折叠的多级结构
    var html = '';
    parts.forEach(function (part, pIdx) {
      var isCurrent = (pIdx === currentPartIdx);
      var expanded = isCurrent;
      html += '<div class="nav-part' + (expanded ? ' expanded' : ' collapsed') + '">';
      html += '<button class="part-toggle" type="button" aria-expanded="' + expanded + '">';
      html += '<span class="caret">' + (expanded ? '▾' : '▸') + '</span>';
      html += '<span class="part-title">' + part.title + '</span>';
      html += '</button>';
      html += '<div class="part-children"' + (expanded ? '' : ' hidden') + '>';
      part.chapters.forEach(function (ch) {
        if (hasH1Chapters && ch.active) {
          // 多章节模式（ch00）：按编号前缀匹配找到该章的节列表
          // sidebar 链接文本 "4 ANSI C 语言基础" 需匹配 h1 "4 ANSI C 语言基础（C51 先修）"
          var chNumMatch = ch.title.match(/^§?(\d+)\s/);
          var matchCh = null;
          if (chNumMatch) {
            for (var i = 0; i < chapterSections.length; i++) {
              if (chapterSections[i].chapterTitle.indexOf(chNumMatch[1] + ' ') === 0 ||
                  chapterSections[i].chapterTitle.indexOf('§' + chNumMatch[1] + ' ') === 0) {
                matchCh = chapterSections[i];
                break;
              }
            }
          }
          var chSecs = matchCh ? matchCh.sections : [];
          if (chSecs.length > 0) {
            html += '<div class="nav-chapter current expanded">';
            html += '<div class="chapter-row">';
            html += '<a class="sidebar-link active" href="' + ch.href + '">' + ch.title + '</a>';
            html += '<button class="chapter-toggle" type="button" aria-expanded="true" title="展开/折叠本章目录">';
            html += '<span class="caret">▾</span>';
            html += '</button>';
            html += '</div>';
            html += '<div class="chapter-sections">';
            chSecs.forEach(function (sec) {
              html += '<a class="sidebar-section" href="#' + sec.id + '">' + sec.title + '</a>';
            });
            html += '</div>';
            html += '</div>';
          } else {
            html += '<a class="sidebar-link active" href="' + ch.href + '">' + ch.title + '</a>';
          }
        } else if (ch.active && sections.length > 0) {
          // 单章节模式：当前章节渲染节/小节可折叠子树
          html += '<div class="nav-chapter current expanded">';
          html += '<div class="chapter-row">';
          html += '<a class="sidebar-link active" href="' + ch.href + '">' + ch.title + '</a>';
          html += '<button class="chapter-toggle" type="button" aria-expanded="true" title="展开/折叠本章目录">';
          html += '<span class="caret">▾</span>';
          html += '</button>';
          html += '</div>';
          html += '<div class="chapter-sections">';
          sections.forEach(function (sec) {
            html += '<a class="sidebar-section" href="#' + sec.id + '">' + sec.title + '</a>';
            sec.subsections.forEach(function (sub) {
              html += '<a class="sidebar-subsection" href="#' + sub.id + '">' + sub.title + '</a>';
            });
          });
          html += '</div>';
          html += '</div>';
        } else {
          var cls = ch.active ? 'sidebar-link active' : 'sidebar-link';
          html += '<a class="' + cls + '" href="' + ch.href + '">' + ch.title + '</a>';
        }
      });
      html += '</div>'; // .part-children
      html += '</div>'; // .nav-part
    });

    sidebarNav.innerHTML = html;

    // Step 5: 绑定篇/章折叠按钮事件
    sidebarNav.querySelectorAll('.part-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wrapper = btn.parentElement;
        var childrenDiv = wrapper.querySelector('.part-children');
        var caret = btn.querySelector('.caret');
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          childrenDiv.setAttribute('hidden', '');
          caret.textContent = '▸';
          wrapper.classList.remove('expanded');
          wrapper.classList.add('collapsed');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          childrenDiv.removeAttribute('hidden');
          caret.textContent = '▾';
          wrapper.classList.remove('collapsed');
          wrapper.classList.add('expanded');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    sidebarNav.querySelectorAll('.chapter-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var wrapper = btn.closest('.nav-chapter');
        if (!wrapper) return;
        var sectionsDiv = wrapper.querySelector('.chapter-sections');
        var caret = btn.querySelector('.caret');
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          sectionsDiv.setAttribute('hidden', '');
          caret.textContent = '▸';
          wrapper.classList.remove('expanded');
          wrapper.classList.add('collapsed');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          sectionsDiv.removeAttribute('hidden');
          caret.textContent = '▾';
          wrapper.classList.remove('collapsed');
          wrapper.classList.add('expanded');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ---------- 侧边栏当前章节自动滚动到可见区 ----------
  function scrollSidebarToActive() {
    var active = document.querySelector('.sidebar-link.active');
    if (active) {
      active.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  }

  // ---------- 基于滚动位置动态切换 active 类 ----------
  // 监听页面滚动，根据当前可视区中部的标题动态切换侧边栏链接的 active 类。
  // 适用于多章节页面（ch00，5 个 h1）与单章节页面（其他章节的 h2/h3 节）
  function initScrollSpy() {
    var content = document.querySelector('.content');
    if (!content) return;

    // 收集所有可作为"当前位置锚点"的标题元素
    var headings = content.querySelectorAll('h1[id], h2[id], h3[id]');
    if (headings.length === 0) return;

    // 构建"侧边栏链接 -> 标题 id"的映射
    // 链接的 href 可能是 "#sec-1" 或 "ch00.html#sec-1"（带文件名）
    // 用 URL 解析提取 hash 部分作为映射 key
    var linkById = {};
    document.querySelectorAll('.sidebar-link, .sidebar-section, .sidebar-subsection').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      // 提取 # 后的锚点
      var hashIdx = href.indexOf('#');
      if (hashIdx < 0) return;
      var hash = href.slice(hashIdx + 1);
      if (hash) linkById[hash] = a;
    });
    if (Object.keys(linkById).length === 0) return;

    var TOP_OFFSET = 100;
    var scrollTicking = false;

    function updateActive() {
      scrollTicking = false;
      var scrollPos = window.scrollY + TOP_OFFSET;
      var currentId = null;

      // 找到最后一个"顶部坐标 ≤ scrollPos"的标题
      for (var i = 0; i < headings.length; i++) {
        var h = headings[i];
        if (h.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          currentId = h.id;
        } else {
          break;
        }
      }

      // 若未找到（页面顶部尚未滚到任何标题下方），默认高亮第一个标题
      if (!currentId && headings.length > 0) {
        currentId = headings[0].id;
      }
      if (!currentId) return;

      // 清除所有同族链接的 active 类
      Object.keys(linkById).forEach(function (id) {
        linkById[id].classList.remove('active');
      });

      // 给当前标题对应的链接加 active
      var activeLink = linkById[currentId];
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }

    function onScroll() {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(updateActive);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateActive();
  }

  // ---------- 初始化 ----------
  document.addEventListener('DOMContentLoaded', function () {
    initNavToggle();
    initSidebarNav();      // 先重建四级折叠侧边栏 DOM
    initSidebarToggle();   // 再绑定切换/点击关闭（这样能选中重建后的所有 <a>）
    initCodeCopy();
    initBackToTop();
    highlightCurrentLink();
    scrollSidebarToActive();
    initScrollSpy();       // 滚动监听，动态切换 active
  });
})();
