/**
 * 静态公开版资源启动器
 * ---------------------------------------------------------------------------
 * 背景：GitHub Pages 的静态资源在国内网络下可能只有几十 KB/s，8.4MB 的 app.js
 * 会让首屏等待过久。jsDelivr 提供同一 Git 仓库的镜像（国内通常快一个数量级），
 * 因此采用「CDN 优先 + 本地回退」：
 *   1. 先用 2.2 秒超时探测 CDN 的 version.json；
 *   2. 探测成功则从 CDN 加载 app.css / app.js，并设置 __MVL_ASSET_BASE__
 *      （Monaco Worker 亦跟随该基址）；
 *   3. 探测失败、或 CDN 脚本加载出错，自动回退到本站相对路径，功能不受影响。
 * 由 scripts/build-static.mjs 注入 __MVL_STATIC_BOOT__ 配置后加载。
 */
(function () {
  var cfg = window.__MVL_STATIC_BOOT__ || {};
  var cdn = typeof cfg.cdn === 'string' ? cfg.cdn : '';
  var ver = cfg.version || '';
  var cssFile = cfg.css || 'app.css';
  var appFile = cfg.app || 'app.js';
  var injected = false;

  function inject(base) {
    if (injected) return;
    injected = true;
    window.__MVL_ASSET_BASE__ = base;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = base + cssFile + (ver ? '?v=' + ver : '');
    document.head.appendChild(link);

    var script = document.createElement('script');
    script.type = 'module';
    script.src = base + appFile + (ver ? '?v=' + ver : '');
    script.onerror = function () {
      // CDN 可探测但取不到脚本（偶发限流/节点异常）→ 回退本站资源
      if (base === './') {
        var tip = document.querySelector('#static-boot span');
        if (tip) tip.textContent = '资源加载失败，请刷新页面重试';
        return;
      }
      injected = false;
      script.remove();
      link.remove();
      inject('./');
    };
    document.body.appendChild(script);
  }

  var remote = /^https?:$/.test(location.protocol) && cdn && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  if (!remote) { inject('./'); return; }

  var settled = false;
  var timer = setTimeout(function () {
    if (settled) return;
    settled = true;
    inject('./');
  }, 2200);

  try {
    var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    if (ctrl) setTimeout(function () { try { ctrl.abort(); } catch (e) { /* 已结束 */ } }, 2400);
    fetch(cdn + 'version.json?t=' + Date.now(), { cache: 'no-store', signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) {
        if (!r.ok) throw new Error('cdn probe ' + r.status);
        return r.json();
      })
      .then(function () {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        inject(cdn);
      })
      .catch(function () {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        inject('./');
      });
  } catch (e) {
    settled = true;
    clearTimeout(timer);
    inject('./');
  }
})();
