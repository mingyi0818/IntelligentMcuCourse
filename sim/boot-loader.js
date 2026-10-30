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

  // 首屏等待反馈：核心程序约 1.6MB（含编辑器），慢网络下需要较长时间。
  // 给出已等待秒数并在超时后提供刷新入口，避免用户以为页面卡死。
  function startProgress() {
    var tip = document.querySelector('#static-boot span');
    if (!tip) return function () {};
    var t0 = Date.now();
    var warned = false;
    var timer = setInterval(function () {
      var s = Math.round((Date.now() - t0) / 1000);
      if (s >= 45 && !warned) {
        warned = true;
        tip.innerHTML = '仍在载入（已等待 ' + s + ' 秒）：当前网络较慢，可继续等待或'
          + '<a href="javascript:location.reload()" style="color:#1a73e8;margin-left:4px">刷新重试</a>';
        return;
      }
      if (warned) return;
      tip.textContent = s < 6
        ? '正在载入核心程序（约 1.6 MB）…'
        : '正在载入核心程序（约 1.6 MB），已等待 ' + s + ' 秒；首次访问较慢，之后会使用浏览器缓存';
    }, 1000);
    return function () { clearInterval(timer); };
  }
  var stopProgress = startProgress();

  function inject(base) {
    if (injected) return;
    injected = true;
    window.__MVL_ASSET_BASE__ = base;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = base + cssFile + (ver ? '?v=' + ver : '');
    document.head.appendChild(link);
    // 样式表看门狗：CDN 与 app.js 并发下载时，样式表偶发长时间挂起（页面会全裸奔）。
    // 4 秒还没挂上就补一份本站 CSS，谁先到用谁，重复加载无副作用。
    if (base !== './') {
      var cssOk = false;
      link.onload = function () { cssOk = true; };
      setTimeout(function () {
        if (cssOk || link.sheet) return;
        var local = document.createElement('link');
        local.rel = 'stylesheet';
        local.href = './' + cssFile + (ver ? '?v=' + ver : '');
        document.head.appendChild(local);
      }, 4000);
    }
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
    // 应用就绪后会移除 #static-boot，此时停止等待计时
    var watch = setInterval(function () {
      if (document.getElementById('static-boot')) return;
      stopProgress();
      clearInterval(watch);
    }, 400);
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
      .then(function (j) {
        if (settled) return;
        // 版本一致性校验：jsDelivr 对分支有缓存，若其版本与本次构建不一致，
        // 混用新旧 app.js/index.html 可能出错，此时宁可用本站资源。
        if (j && j.assets && j.assets.app && ver && j.assets.app !== ver) {
          throw new Error('cdn stale');
        }
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
