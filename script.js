/* ==========================================================
   Day 30 — Professional 404 Error Page
   Vanilla JavaScript · Go Back fallback · Requested-path display
   ========================================================== */

(function () {
  "use strict";

  var HOME_URL = "homepage.html";
  var FALLBACK_PATH_LABEL = "veda.tech/this-page-went-missing";

  /* ---------- Set the footer year (and any [data-year]) ---------- */
  function setYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = year;
    });
  }

  /* ---------- Show the requested path in the fake browser + chip ----------
     Uses location.pathname so the illustration feels real wherever
     the 404 page is served from (file, server 404 handler, etc.).

     Edge cases handled:
     - file:// protocol (double-clicked locally): pathname is a LONG
       local filesystem path (e.g. C:/Users/.../index.html). We NEVER
       display that — we keep the friendly placeholder instead.
     - http(s) (GitHub Pages / live server): show the real host +
       path, with any trailing "index.html" trimmed for cleanliness. */
  function setRequestedPath() {
    var label = FALLBACK_PATH_LABEL;

    if (/^https?:$/.test(window.location.protocol)) {
      var host = window.location.host || "veda.tech";
      var path = (window.location.pathname || "").replace(/^\//, "");
      path = path.replace(/index\.html$/i, "");
      label = host + "/" + path;
    }

    var urlBar = document.getElementById("urlBar");
    if (urlBar) {
      urlBar.textContent = label;
    }

    var chip = document.getElementById("requestedPath");
    if (chip) {
      chip.textContent = label;
    }
  }

  /* ---------- Go Back button ----------
     - If the user arrived from another page in this site/session,
       use browser history (history.back()).
     - If there is no previous page (direct visit, new tab, or
       history.length <= 1), fall back to the homepage instead of
       doing nothing or navigating away from the site. */
  function initGoBack() {
    var btn = document.getElementById("goBackBtn");
    if (!btn) {
      return;
    }

    btn.addEventListener("click", function () {
      var hasReferrer = document.referrer && document.referrer.length > 0;
      var canGoBack = hasReferrer && window.history.length > 1;

      if (canGoBack) {
        window.history.back();
      } else {
        window.location.href = HOME_URL;
      }
    });

    // Keyboard: Enter/Space on the button natively fires click; nothing
    // extra needed. Keep focus visible via CSS :focus-visible.
  }

  /* ---------- Focus the heading for screen readers / keyboard ----------
     A 404 page is a page the user lands on directly, so moving focus
     to the main heading keeps keyboard and screen-reader navigation
     predictable (without scrolling or stealing focus unexpectedly). */
  function focusHeading() {
    var title = document.getElementById("errorTitle");
    if (title && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Only focus on direct landing, not on in-page anchor jumps.
      if (!window.location.hash) {
        title.focus({ preventScroll: true });
      }
    } else if (title && window.location.hash) {
      // Respect anchor navigation — do not move focus.
    }
  }

  /* ---------- Init ---------- */
  setYear();
  setRequestedPath();
  initGoBack();
  focusHeading();

  window.addEventListener("pageshow", setRequestedPath);
})();
