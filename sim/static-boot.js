/*
 * 公开静态练习版引导脚本（仅由 scripts/build-static.mjs 注入部署产物）
 * 作用：在 app.js 加载前接管 /api/*，把服务端能力降级为只读实验数据、本机进度和浏览器内检查。
 * 约束：不发送学生信息、不写入服务器、不伪造在线编译/AI/正式成绩。
 */
(function () {
  'use strict';

  window.__MVL_STATIC__ = true;

  var BASE = new URL('./', document.baseURI);
  var nativeFetch = window.fetch.bind(window);
  var manifestPromise = null;
  var refsPromise = null;

  function json(body, status) {
    return Promise.resolve(new Response(JSON.stringify(body), {
      status: status || 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }));
  }

  function loadJson(relative) {
    return nativeFetch(new URL(relative, BASE), { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + relative);
      return r.json();
    });
  }

  function loadManifest() {
    if (!manifestPromise) manifestPromise = loadJson('experiments/manifest.json');
    return manifestPromise;
  }

  function loadRefs() {
    if (!refsPromise) refsPromise = loadJson('refs.json').catch(function () { return { experiments: {} }; });
    return refsPromise;
  }

  function progressKey(id) { return 'mvl:static:progress:' + id; }

  function readProgress(id) {
    try {
      var raw = localStorage.getItem(progressKey(id));
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writeProgress(id, body) {
    try {
      var saved = {
        circuit: body.circuit,
        code: String(body.code || ''),
        files: Array.isArray(body.files) ? body.files : null,
        checklist: Array.isArray(body.checklist) ? body.checklist : null,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem(progressKey(id), JSON.stringify(saved));
      return true;
    } catch (e) {
      return false;
    }
  }

  function studentConnections(circuit) {
    var model = window.__MVL_CANVAS && window.__MVL_CANVAS.model;
    var nets = model && typeof model.computeNets === 'function' ? model.computeNets() : null;
    if (!nets) return {};
    var byNet = new Map();
    function add(net, key) {
      if (!net) return;
      if (!byNet.has(net)) byNet.set(net, []);
      var arr = byNet.get(net);
      if (arr.indexOf(key) < 0) arr.push(key);
    }
    Object.keys(nets.mcuNets || {}).forEach(function (pin) {
      add(nets.mcuNets[pin], 'mcu:' + pin);
    });
    var elementNets = nets.elementNets || {};
    if (typeof elementNets.forEach === 'function' && !Array.isArray(elementNets)) {
      elementNets.forEach(function (pins, id) {
        Object.keys(pins || {}).forEach(function (pin) { add(pins[pin], id + ':' + pin); });
      });
    } else {
      Object.keys(elementNets).forEach(function (id) {
        var pins = elementNets[id] || {};
        Object.keys(pins).forEach(function (pin) { add(pins[pin], id + ':' + pin); });
      });
    }
    var conns = {};
    byNet.forEach(function (keys, net) {
      var mcu = keys.filter(function (k) { return k.indexOf('mcu:') === 0; });
      var others = keys.filter(function (k) { return k.indexOf('mcu:') !== 0; });
      mcu.forEach(function (m) {
        var pin = m.slice(4);
        if (!conns[pin]) conns[pin] = [];
        others.forEach(function (o) { if (conns[pin].indexOf(o) < 0) conns[pin].push(o); });
        if (net === 'VCC' && conns[pin].indexOf('VCC') < 0) conns[pin].push('VCC');
        if (net === 'GND' && conns[pin].indexOf('GND') < 0) conns[pin].push('GND');
      });
    });
    return conns;
  }

  function checkWiring(expId, circuit) {
    return loadRefs().then(function (all) {
      var ref = all.experiments && all.experiments[expId];
      if (!ref || !ref.expected) return { ok: true, matched: 0, total: 0, issues: [], noTemplate: true };
      var actual = studentConnections(circuit);
      var labels = ref.labels || {};
      function readable(key) {
        if (key === 'VCC' || key === 'GND') return key;
        var i = key.indexOf(':');
        if (i < 0) return key;
        var id = key.slice(0, i);
        return (labels[id] || id) + '.' + key.slice(i + 1);
      }
      var issues = [];
      var matched = 0;
      var total = 0;
      Object.keys(ref.expected).forEach(function (pin) {
        var expected = ref.expected[pin] || [];
        if (!expected.length) return;
        total += 1;
        var got = actual[pin] || [];
        var missing = expected.filter(function (k) { return got.indexOf(k) < 0; });
        var extra = got.filter(function (k) { return expected.indexOf(k) < 0; });
        if (!missing.length && !extra.length) { matched += 1; return; }
        issues.push({
          pin: pin,
          missing: missing.map(readable),
          extra: extra.map(readable),
        });
      });
      return { ok: true, matched: matched, total: total, issues: issues };
    });
  }

  window.fetch = function (input, init) {
    var raw = typeof input === 'string' ? input : (input && input.url) || '';
    var url;
    try { url = new URL(raw, location.href); } catch (e) { return nativeFetch(input, init); }
    if (url.origin !== location.origin || url.pathname.indexOf('/api/') !== 0) {
      return nativeFetch(input, init);
    }

    var path = url.pathname;
    var method = String((init && init.method) || (input && input.method) || 'GET').toUpperCase();
    var body = null;
    try { body = init && init.body ? JSON.parse(String(init.body)) : null; } catch (e) { body = null; }

    if (path === '/api/info') {
      return json({ ok: true, mode: 'static', port: 0, ips: [], sdcc: null, mcu: 'STC89C52RC' });
    }
    if (path === '/api/me') {
      return json({ ok: true, account: { id: 0, studentNo: '', name: '访客', class: '', role: 'student' } });
    }
    if (path === '/api/consent') {
      if (method === 'POST') return json({ ok: true, agreed: !!(body && body.agreed) });
      return json({ ok: true, agreed: true, version: 'static', record: null });
    }
    if (path === '/api/experiments') {
      return loadManifest().then(function (m) {
        return json({ ok: true, experiments: m.experiments || [] });
      }).catch(function () { return json({ ok: true, experiments: [] }); });
    }
    var expMatch = path.match(/^\/api\/experiments\/([^/]+)$/);
    if (expMatch) {
      var id = decodeURIComponent(expMatch[1]);
      return loadJson('experiments/' + encodeURIComponent(id) + '.json')
        .then(function (exp) { return json({ ok: true, experiment: exp }); })
        .catch(function () { return json({ ok: false, message: '实验不存在' }, 404); });
    }
    var progressMatch = path.match(/^\/api\/progress\/([^/]+)$/);
    if (progressMatch) {
      var pid = decodeURIComponent(progressMatch[1]);
      if (method === 'PUT') {
        var ok = writeProgress(pid, body || {});
        return json(ok ? { ok: true, local: true } : { ok: false, message: '本机存储不可用' }, ok ? 200 : 500);
      }
      var saved = readProgress(pid);
      if (!saved) return json({ ok: true, saved: false });
      return json({ ok: true, saved: true, circuit: saved.circuit, code: saved.code, files: saved.files, checklist: saved.checklist, updatedAt: saved.updatedAt });
    }
    var checkMatch = path.match(/^\/api\/check\/([^/]+)$/);
    if (checkMatch) {
      return checkWiring(decodeURIComponent(checkMatch[1]), body && body.circuit)
        .then(function (result) { return json(result); })
        .catch(function () { return json({ ok: false, message: '接线参考数据不可用' }, 500); });
    }
    if (path === '/api/events') return json({ ok: true });
    if (path === '/api/assignments') return json({ ok: true, assignments: [] });
    if (path === '/api/my/grades') return json({ ok: true, grades: [] });
    if (path === '/api/compile') {
      return json({
        ok: false,
        errors: [{ line: 0, col: 0, message: '公开练习版不提供在线编译，请使用示例程序或下载工程包本地编译后导入 HEX' }],
        warnings: [],
      });
    }
    if (path.indexOf('/api/submissions') === 0 || path.indexOf('/api/snapshots') === 0) {
      return json({ ok: true, local: true });
    }
    return json({ ok: false, message: '公开练习版未提供此服务', static: true });
  };

  function lang() {
    try { return localStorage.getItem('mvl:lang') === 'en' ? 'en' : 'zh'; } catch (e) { return 'zh'; }
  }

  function addNotice() {
    if (document.getElementById('static-note')) return;
    var bar = document.createElement('div');
    bar.id = 'static-note';
    bar.style.cssText = 'flex:0 0 auto;display:flex;align-items:center;gap:10px;padding:4px 12px;background:#eef6ff;border-bottom:1px solid #cfe0f5;color:#36506b;font-size:12px;line-height:1.5';
    var text = document.createElement('span');
    text.style.cssText = 'flex:1';
    var link = document.createElement('a');
    link.href = '../resources.html';
    link.target = '_blank';
    link.rel = 'noopener';
    link.style.cssText = 'color:#1a73e8;text-decoration:none;white-space:nowrap';
    // 返回智慧课程首页（静态公开版必备：本页可能由课程站以外的方式打开）
    var back = document.createElement('a');
    back.id = 'btn-back-course';
    back.href = '../index.html';
    back.style.cssText = 'display:inline-flex;align-items:center;gap:4px;padding:2px 10px;border:1px solid #1a73e8;border-radius:4px;background:#fff;color:#1a73e8;text-decoration:none;white-space:nowrap;font-size:12px';
    var refresh = function () {
      if (lang() === 'en') {
        text.textContent = 'Public practice edition: simulation and progress stay in this browser. Online build, official grades and the AI assistant are provided by the campus edition.';
        link.textContent = 'Local build guide →';
        back.textContent = '🏠 Course home';
        back.title = 'Back to the Intelligent MCU course website';
      } else {
        text.textContent = '公开练习版：仿真与进度保存在本机；在线编译、正式成绩与 AI 助教由校内完整版提供。';
        link.textContent = '本地编译说明 →';
        back.textContent = '🏠 返回课程首页';
        back.title = '返回《单片机原理及应用》智慧课程首页';
      }
    };
    refresh();
    bar.appendChild(text);
    bar.appendChild(link);
    bar.appendChild(back);
    var topbar = document.getElementById('topbar');
    if (topbar && topbar.parentNode) topbar.parentNode.insertBefore(bar, topbar.nextSibling);
    window.addEventListener('mvl:langchange', refresh);
  }

  function boot() {
    addNotice();
    var overlay = document.getElementById('static-boot');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(function () { overlay.remove(); }, 180);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  window.addEventListener('load', boot);
})();
