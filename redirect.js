"use strict";
(() => {
  const canonical = "https://riftricky.github.io/billardcafe-merzig-rangliste/";
  const previous = "/billardafe-merzig-rangliste/";
  const current = new URL(location.href);
  if (current.origin !== "https://riftricky.github.io" || !(current.pathname === previous.slice(0, -1) || current.pathname.startsWith(previous))) return;
  const safeRoute = /^#(?:spielen(?:\/neu)?|beitreten|beitreten\/[A-Za-z0-9_-]{16,128}|partie\/[A-Za-z0-9_-]{16,128}|profil(?:\/hilfe)?|rangliste|regeln|installieren)$/;
  const isOldCallback = current.pathname === previous + "auth-callback.html";
  const hash = isOldCallback ? "#profil" : safeRoute.test(current.hash) ? current.hash : "#spielen";
  // Only known application routes survive. Never copy queries, login codes,
  // tokens, credentials or arbitrary destinations into the canonical URL.
  const target = canonical + hash;
  const link = document.getElementById("app-link");
  if (link) link.href = target;
  if (isOldCallback) {
    const status = document.getElementById("redirect-status");
    if (status) status.textContent = "Die frühere Anmeldung ist abgelaufen. Bitte melde dich auf der aktuellen App-Seite an.";
  }
  location.replace(target);
})();
