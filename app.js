/* Explore Criminology — landing hub
   Theme toggle behavior mirrors the sibling dashboards
   (criminology-faculty-explorer, mentor-match, criminology-jobs). */

(function () {
  'use strict';

  const STORAGE_KEY = 'explore-criminology:theme';

  function preferredTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) { /* ignore */ }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    renderThemeIcon();
    try { localStorage.setItem(STORAGE_KEY, t); } catch (e) { /* ignore */ }
  }

  function renderThemeIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    btn.innerHTML = isDark
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });

  // Follow system theme changes if the user hasn't pinned one
  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (ev) {
        let saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
        if (saved !== 'light' && saved !== 'dark') {
          applyTheme(ev.matches ? 'dark' : 'light');
        }
      });
    } catch (e) { /* older Safari */ }
  }

  applyTheme(preferredTheme());

  // ---- Members grid ----
  function renderMembers(members) {
    const grid = document.getElementById('members-grid');
    if (!grid || !Array.isArray(members)) return;
    const html = members.map(function (m) {
      const safeName = String(m.name).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      const safeUrl = String(m.url);
      if (m.logo) {
        const safeLogo = String(m.logo).replace(/"/g,'%22');
        return '<a class="member-tile" href="' + safeUrl + '" target="_blank" rel="noopener" title="' + safeName + '" style="background-image:url(\'' + safeLogo + '\')"><span class="member-tile-name">' + safeName + '</span></a>';
      }
      return '<a class="member-tile no-logo" href="' + safeUrl + '" target="_blank" rel="noopener" title="' + safeName + '"><span class="member-tile-name">' + safeName + '</span></a>';
    }).join('');
    grid.innerHTML = html;
  }

  fetch('members.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(renderMembers)
    .catch(function () { /* fail silently */ });
})();
