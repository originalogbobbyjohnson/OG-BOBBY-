/* © OG Bobby / OG FAN 99. All rights reserved. */
(function () {
  try { if (window.top !== window.self) window.top.location = window.self.location.href; } catch (e) { document.documentElement.style.display = "none"; }
  var block = function (e) { var t = e.target; if (t && (t.tagName === "IMG" || (t.closest && t.closest("svg")))) e.preventDefault(); };
  document.addEventListener("contextmenu", block);
  document.addEventListener("dragstart", block);
  var s = document.createElement("style");
  s.textContent = "img,svg{-webkit-touch-callout:none;-webkit-user-drag:none;user-select:none}" +
    "#ogfanBack{position:fixed;z-index:9999;top:calc(env(safe-area-inset-top,0px) + 8px);left:8px;display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;border:0;border-top:3px solid #fff;border-radius:6px;padding:6px 10px 5px;font:700 11px/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;text-decoration:none;box-shadow:0 3px 0 #000}";
  document.head.appendChild(s);
  /* every OG FAN 99 artist game gets a way back to the app's map of all artists */
  var p = location.pathname;
  if (/-ogfan99-|nems-99deep-/.test(p)) {
    var add = function () {
      if (document.getElementById("ogfanBack")) return;
      var a = document.createElement("a"); a.id = "ogfanBack"; a.href = "/ogfan99-hub-5b81e2/"; a.textContent = "◀ ALL ARTISTS";
      a.addEventListener("click", function () { try { if (typeof SFX !== "undefined" && SFX.stop) SFX.stop(); } catch (e) {} try { if (typeof player !== "undefined" && player && player.stopVideo) player.stopVideo(); } catch (e) {} });
      document.body.appendChild(a);
    };
    if (document.body) add(); else document.addEventListener("DOMContentLoaded", add);
  }
  /* no sound keeps playing once the page is left or put in the background */
  var hush = function () {
    try { if (typeof SFX !== "undefined" && SFX.stop) SFX.stop(); } catch (e) {}
    try { if (typeof player !== "undefined" && player && player.pauseVideo) player.pauseVideo(); } catch (e) {}
    try { document.querySelectorAll("audio,video").forEach(function (m) { m.pause(); }); } catch (e) {}
  };
  document.addEventListener("visibilitychange", function () { if (document.hidden) hush(); });
  window.addEventListener("pagehide", hush);
})();
