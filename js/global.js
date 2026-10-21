/* Global header and footer.
   Edit /partials/header.html or /partials/footer.html once and every page updates. */
(function () {
  function load(id, url) {
    var el = document.getElementById(id);
    if (!el) return Promise.resolve();
    return fetch(url)
      .then(function (r) { if (!r.ok) throw new Error(url); return r.text(); })
      .then(function (html) {
        var t = document.createElement('template');
        t.innerHTML = html.replace(/\[Year\]/g, new Date().getFullYear());
        el.replaceWith(t.content);
      })
      .catch(function (e) { console.warn('Could not load ' + url, e); });
  }
  function markCurrent() {
    var here = location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('header a[href], footer a[href]').forEach(function (a) {
      var u = new URL(a.href, location.origin);
      var p = u.pathname.replace(/\/$/, '') || '/';
      if (!u.hash && p === here) a.setAttribute('aria-current', 'page');
    });
  }
  Promise.all([load('site-header', '/partials/header.html'), load('site-footer', '/partials/footer.html')]).then(markCurrent);
})();
