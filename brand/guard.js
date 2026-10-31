/* © OG Bobby / OG FAN 99. All rights reserved. */
(function () {
  try { if (window.top !== window.self) window.top.location = window.self.location.href; } catch (e) { document.documentElement.style.display = "none"; }
  var block = function (e) { var t = e.target; if (t && (t.tagName === "IMG" || (t.closest && t.closest("svg")))) e.preventDefault(); };
  document.addEventListener("contextmenu", block);
  document.addEventListener("dragstart", block);
  var s = document.createElement("style");
  s.textContent = "#pPlay:has(.opts){justify-content:flex-start;gap:6px;overflow-y:auto}"+"#pPlay:has(.opts) .screen{width:min(100%,calc(15vh * 16 / 9))}"+"#pPlay:has(.opts) .ep .k{display:none}"+"#pPlay:has(.opts) .qcard{gap:6px;padding:8px 10px}"+"#pPlay:has(.opts) .opt{padding:8px 11px}"+".dock.og2{grid-template-columns:auto 1fr 1fr!important;gap:8px}"+".dock.og2 .sig{display:none}"+".ogpill{display:flex!important;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-radius:12px!important;padding:8px 6px!important;font:800 13px/1 Helvetica,Arial,sans-serif!important;letter-spacing:.06em;text-decoration:none!important;text-transform:uppercase;box-shadow:0 3px 0 #000;border:2px solid #000!important;justify-self:stretch!important;cursor:pointer}"+".ogpill small{font-size:9px;font-weight:700;letter-spacing:.12em}"+".ogpill.gold{background:#f2c14e!important;color:#000!important}"+".ogpill.red{background:#d62828!important;color:#fff!important}"+"html,body,button,a,input,.opt{touch-action:manipulation}"+"img,svg{-webkit-touch-callout:none;-webkit-user-drag:none;user-select:none}" +
    "#ogfanBack{position:fixed;z-index:9999;top:calc(env(safe-area-inset-top,0px) + 8px);left:8px;display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;border:0;border-top:3px solid #fff;border-radius:6px;padding:6px 10px 5px;font:700 11px/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;text-decoration:none;box-shadow:0 3px 0 #000}";
  document.head.appendChild(s);
  /* every OG FAN 99 artist game gets a way back to the app's map of all artists */
  var p = location.pathname;
  if (/-ogfan99-|nems-99deep-/.test(p)) {
    var add = function () {
      if (document.getElementById("ogfanBack") || document.getElementById("ogfanBack2")) return;
      var a = document.createElement("a"); a.id = "ogfanBack"; a.href = "/ogfan99-hub-5b81e2/"; a.textContent = "◀ ALL ARTISTS";
      var dock = document.querySelector(".dock"), rs = document.getElementById("restart");
      if (dock && rs) { /* both "start over" buttons side by side in the bottom bar */
        dock.classList.add("og2"); a.id = "ogfanBack2"; a.className = "ogpill red"; a.innerHTML = "&#9664; ALL ARTISTS<small>PICK ANOTHER</small>";
        rs.className = "restart ogpill gold"; rs.innerHTML = "&#8634; START OVER<small>THIS ARTIST</small>";
        a.addEventListener("click", function () { try { if (typeof SFX !== "undefined" && SFX.stop) SFX.stop(); } catch (e) {} try { if (typeof player !== "undefined" && player && player.stopVideo) player.stopVideo(); } catch (e) {} });
        dock.appendChild(a);
        var lb = document.getElementById("lobbyBtn");
        if (lb && !document.getElementById("ogMenuRs")) { /* the menu gets both start-over choices too */
          var r2 = document.createElement("button"); r2.type = "button"; r2.id = "ogMenuRs";
          r2.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"/></svg>Start this artist over<small style="margin-left:auto">from song 1</small>';
          r2.onclick = function () { try { openMenu(false); } catch (e) {} rs.click(); };
          var a2 = document.createElement("button"); a2.type = "button"; a2.id = "ogMenuAll";
          a2.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>All artists<small style="margin-left:auto">back to the very beginning</small>';
          a2.onclick = function () { a.click(); };
          lb.after(r2, a2);
        }
        return;
      }
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
