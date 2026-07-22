/* ── Nav dropdown — click-to-toggle ──────────────────────────────── */
(function () {
  'use strict';

  function initDropdowns(root) {
    var items = (root || document).querySelectorAll('.nav-dropdown:not([data-dd-ready])');
    items.forEach(function (item) {
      item.setAttribute('data-dd-ready', '1');
      var trigger = item.querySelector(':scope > a');
      if (!trigger) return;

      trigger.addEventListener('click', function (e) {
        var isOpen = item.classList.contains('open');
        closeAll();
        if (!isOpen) {
          e.preventDefault();          // open the menu, don't navigate yet
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
        // second click: menu was open → closeAll already shut it → link navigates naturally
      });
    });
  }

  function closeAll() {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
      d.classList.remove('open');
      var a = d.querySelector(':scope > a');
      if (a) a.setAttribute('aria-expanded', 'false');
    });
  }

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) closeAll();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  // Initial bind
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initDropdowns(); });
  } else {
    initDropdowns();
  }

  // Re-bind after the bundler swaps the DOM (tri-design-system.html)
  var observer = new MutationObserver(function () { initDropdowns(); });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
