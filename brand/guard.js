/* © OG Bobby / OG FAN 99. All rights reserved. */
(function () {
  try { if (window.top !== window.self) window.top.location = window.self.location.href; } catch (e) { document.documentElement.style.display = "none"; }
  var block = function (e) { var t = e.target; if (t && (t.tagName === "IMG" || (t.closest && t.closest("svg")))) e.preventDefault(); };
  document.addEventListener("contextmenu", block);
  document.addEventListener("dragstart", block);
  var s = document.createElement("style");
  s.textContent = ".rk-name{font-family:\"Sedgwick Ave Display\",\"Permanent Marker\",cursive!important;font-size:clamp(2.7rem,13.5vw,3.8rem)!important;line-height:1.05!important;letter-spacing:.02em!important;font-weight:400!important;background:linear-gradient(180deg,#fff7d1 0%,#f7d774 28%,#e0aa25 52%,#9c6a0c 72%,#f4cf62 100%);-webkit-background-clip:text;background-clip:text;color:transparent!important;-webkit-text-stroke:2px #000;filter:drop-shadow(3px 4px 0 #000) drop-shadow(0 0 16px rgba(242,193,78,.55));transform:rotate(-3deg);padding:6px 4px 10px;text-shadow:none!important}"+"#pPlay:has(.opts){justify-content:flex-start;gap:6px;overflow-y:auto}"+"#pPlay:has(.opts) .screen{width:min(100%,calc(15vh * 16 / 9))}"+"#pPlay:has(.opts) .ep .k{display:none}"+"#pPlay:has(.opts) .qcard{gap:6px;padding:8px 10px}"+"#pPlay:has(.opts) .opt{padding:8px 11px}"+".dock.og2{grid-template-columns:auto 1fr 1fr!important;gap:8px}"+".dock.og2 .sig{display:none}"+".ogpill{display:flex!important;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-radius:12px!important;padding:8px 6px!important;font:800 13px/1 Helvetica,Arial,sans-serif!important;letter-spacing:.06em;text-decoration:none!important;text-transform:uppercase;box-shadow:0 3px 0 #000;border:2px solid #000!important;justify-self:stretch!important;cursor:pointer}"+".ogpill small{font-size:9px;font-weight:700;letter-spacing:.12em}"+".ogpill.gold{background:#f2c14e!important;color:#000!important}"+".ogpill.red{background:#d62828!important;color:#fff!important}"+"html,body,button,a,input,.opt{touch-action:manipulation}"+".trophy span{white-space:normal!important;width:min-content;max-width:100%;text-align:center;font:400 .64rem/1.08 var(--display,Anton),Impact,sans-serif!important;letter-spacing:.09em!important;color:#fff;padding-top:4px;margin-top:2px;border-top:1px solid rgba(242,193,78,.45)}"+".trophy.got span{color:var(--gold,#f2c14e)!important;text-shadow:0 0 6px rgba(242,193,78,.55)}"+".shelf.many .trophy span{font-size:.56rem!important;letter-spacing:.05em!important}"+".shelf{align-items:start}"+".doors:not(.open) .door,.doors:not(.open)>.door-btn{pointer-events:auto!important;cursor:pointer}"+".doors:not(.open)>.door-btn{background:var(--red,#d62828)!important;border:3px solid #fff!important;font-size:1.25rem!important;padding:12px 24px!important;box-shadow:0 5px 0 #000,0 0 18px rgba(214,40,40,.7);animation:ogPulse 1.4s ease-in-out infinite}"+"@keyframes ogPulse{50%{transform:translateX(-50%) scale(1.07)}}"+".rank{white-space:normal!important;overflow:visible!important;text-overflow:clip!important;line-height:1.05!important;border-radius:10px!important;padding:3px 4px!important;display:flex;align-items:center;justify-content:center;min-height:2.1em}"+".trophy span{overflow-wrap:normal;word-break:keep-all}"+"img,svg{-webkit-touch-callout:none;-webkit-user-drag:none;user-select:none}" +
    "#ogfanBack{position:fixed;z-index:9999;top:calc(env(safe-area-inset-top,0px) + 8px);left:8px;display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;border:0;border-top:3px solid #fff;border-radius:6px;padding:6px 10px 5px;font:700 11px/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;text-decoration:none;box-shadow:0 3px 0 #000}";
  document.head.appendChild(s);
  /* every OG FAN 99 artist game gets a way back to the app's map of all artists */
  var p = location.pathname;
  if (/-ogfan99-|nems-99deep-/.test(p) || (/from=ogfan99/.test(location.search) || /ogfan99-hub/.test(document.referrer)) && (p === "/" || p === "/index.html")) {
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
          /* explicit lyrics switch (18+): the same setting as the app; games with an explicit version swap their songs */
          var isEx = function () { try { return localStorage.getItem("ogfan99explicit") === "1"; } catch (e) { return false; } };
          var hasEx = !!(window.CFG && window.CFG.explicitSongs);
          var x2 = document.createElement("button"); x2.type = "button"; x2.id = "ogMenuEx";
          x2.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 8h6v2h-4v1.5h3.5v2H11V15h4v2H9z"/></svg>Explicit lyrics: ' + (isEx() ? "ON" : "OFF") + '<small style="margin-left:auto">' + (hasEx ? "18+ version" : "18+") + '</small>';
          x2.onclick = function () {
            if (isEx()) { try { localStorage.removeItem("ogfan99explicit"); } catch (e) {} location.reload(); return; }
            if (window.confirm("Explicit lyrics are for 18 and older. Some songs will have curse words in the music; the questions always stay clean. Turn it on?")) { try { localStorage.setItem("ogfan99explicit", "1"); } catch (e) {} location.reload(); }
          };
          a2.after(x2);
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

  /* the bottom pager: arrows and the BOARD / PLAY / SONGS / ... tabs are one connected bar, and each arrow says where it goes */
  var pager = function () {
    var pv = document.getElementById("prev"), nx = document.getElementById("next"), tb = document.getElementById("tabs");
    if (!pv || !nx || !tb || document.getElementById("ogPagerCss")) return;
    var st = document.createElement("style"); st.id = "ogPagerCss";
    st.textContent = ".pager{grid-template-columns:auto 1fr auto!important;align-items:stretch!important;background:#0d0f1a;border:2px solid var(--red,#d62828);border-radius:14px;overflow:hidden;padding:0!important;gap:0!important}" +
      ".pager .arrow{width:auto!important;min-width:62px;height:auto!important;border:0!important;border-radius:0!important;background:var(--red,#d62828)!important;color:#fff!important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;padding:5px 8px!important;font:800 9px/1.1 Helvetica,Arial,sans-serif!important;letter-spacing:.08em;cursor:pointer}" +
      ".pager .arrow b{font:400 22px/1 var(--display,Impact),sans-serif;letter-spacing:0}" +
      ".pager .arrow:disabled{opacity:1!important;background:#1d1f2e!important;color:#3a3f55!important}" +
      ".pager .tabs{align-items:center;gap:2px!important;padding:5px 4px}" +
      ".pager .tab{border-radius:9px;padding:7px 7px!important;border-bottom:0!important;color:#fff}" +
      ".pager .tab.on{background:#fff;color:#000}";
    document.head.appendChild(st);
    var names = function () { return Array.prototype.map.call(tb.querySelectorAll(".tab"), function (t) { return t.textContent.trim(); }); };
    var paint = function () { var n = names(), tabs = tb.querySelectorAll(".tab"), i = 0;
      Array.prototype.forEach.call(tabs, function (t, k) { if (t.classList.contains("on")) i = k; });
      pv.innerHTML = "<b>&#8249;</b>" + (i > 0 ? n[i - 1] : "");
      nx.innerHTML = "<b>&#8250;</b>" + (i < n.length - 1 ? n[i + 1] : "");
      pv.setAttribute("aria-label", i > 0 ? "Back to " + n[i - 1] : "Previous screen"); nx.setAttribute("aria-label", i < n.length - 1 ? "On to " + n[i + 1] : "Next screen"); };
    new MutationObserver(paint).observe(tb, { subtree: true, attributes: true, attributeFilter: ["class"] });
    paint();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pager); else pager();

  /* PLAY screen curtain: the PRESS PLAY button and the curtain itself both start the song */
  var curtain = function () { var dp = document.getElementById("doorPlay"); if (!dp || dp.__og) return; dp.__og = 1;
    dp.innerHTML = "&#9654; PRESS PLAY";
    Array.prototype.forEach.call(document.querySelectorAll(".doors .door"), function (d) { d.addEventListener("click", function () { if (!d.parentNode.classList.contains("open")) dp.click(); }); }); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", curtain); else curtain();

  /* trophy rank names: shrink any long word until it fits its own spot on the shelf, so names never run into each other */
  var fitShelf = function () { var sh = document.getElementById("shelf"); if (!sh) return;
    var fit = function () { Array.prototype.forEach.call(sh.querySelectorAll(".trophy"), function (t) { var s = t.querySelector("span"); if (!s) return;
      s.style.removeProperty("font-size"); s.style.width = "auto"; s.style.maxWidth = "100%"; var w = t.clientWidth, fs = parseFloat(getComputedStyle(s).fontSize), n = 0;
      while (s.scrollWidth > w + 1 && fs > 6 && n++ < 30) { fs -= 0.5; s.style.setProperty("font-size", fs + "px", "important"); } }); };
    new MutationObserver(function () { setTimeout(fit, 30); }).observe(sh, { childList: true });
    addEventListener("resize", fit); fit(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fitShelf); else fitShelf();
  /* the number 9 always has a straight stem (OG Bobby's own 9 from the album and site), on every page that uses the graffiti font */
  try { var n9 = document.createElement("style"); n9.id = "og9";
    n9.textContent = '@font-face{font-family:"Sedgwick Nine";src:url("/brand/sedgwick-nine.woff") format("woff");unicode-range:U+0039;font-display:swap}html:root{--tag:"Sedgwick Nine","Sedgwick Ave Display","Permanent Marker",cursive}';
    (document.head || document.documentElement).appendChild(n9); } catch (e) {}
  /* the board's record: show the WHOLE record (as big as the space allows), and scratching it never drags the page */
  var fitRec = function () {
    var r = document.getElementById("record"); if (!r) return;
    var go = function () { var d = r.closest(".deck") || r.parentNode; if (!d || !d.offsetParent) return;
      r.style.removeProperty("width"); var room = d.getBoundingClientRect().height - 14, w = r.getBoundingClientRect().width;
      if (room > 60 && w > room) r.style.setProperty("width", Math.max(110, Math.floor(room)) + "px", "important"); };
    addEventListener("resize", function () { setTimeout(go, 50); });
    new MutationObserver(function () { setTimeout(go, 60); }).observe(document.body, { attributes: true, subtree: true, attributeFilter: ["class", "hidden"] });
    setTimeout(go, 100); setTimeout(go, 800);
    var hold = function (e) { if (e.target && e.target.closest && e.target.closest("#record, .og-rec, .og-mini")) e.preventDefault(); };
    document.addEventListener("touchmove", hold, { passive: false });
    document.addEventListener("touchstart", function (e) { if (e.target && e.target.closest && e.target.closest("#record")) { document.documentElement.style.overscrollBehavior = "none"; document.body.style.overscrollBehavior = "none"; } }, { passive: true });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fitRec); else fitRec();
  /* phone turned sideways: the screen is too short for the fixed game layout, so let the page scroll and give the game box its normal height */
  try { if (!document.getElementById("ogShort")) { var sh = document.createElement("style"); sh.id = "ogShort"; sh.textContent = "@media (orientation:landscape) and (max-height:520px){html,body{height:auto!important;overflow-y:auto!important;overflow-x:hidden!important}.game{height:auto!important;min-height:100%}.game>.viewport{height:560px!important;min-height:560px}.screen{width:min(100%,420px)!important}}"; (document.head || document.documentElement).appendChild(sh); } } catch (e) {}
  try { if (!document.getElementById("nycSidesJs")) { var ns = document.createElement("script"); ns.id = "nycSidesJs"; ns.src = "/brand/nycsides.js?v=2"; document.head.appendChild(ns); } } catch (e) {}
})();
/* WINNER'S PLAYLIST: beat the 99 Challenge (all 99 right) and every song in that artist's game unlocks
   as a free-play playlist: full songs, no stops, no questions. The winner can still restart it as a game. */
(function () {
  if (!/-ogfan99-/.test(location.pathname)) return;
  var boot = function () {
  var C = window.CFG; if (!C || !C.saveKey || !C.songs || !C.songs.length) return;
  var won = function () { try { var s = JSON.parse(localStorage.getItem(C.saveKey) || "{}"); return s.chalBest != null && s.chalBest >= 99; } catch (e) { return false; } };
  var seenKey = C.saveKey + "_plSeen";
  var css = document.createElement("style");
  css.textContent = "#ogPlBtn{position:fixed;z-index:9998;right:10px;bottom:calc(env(safe-area-inset-bottom,0px) + 84px);background:linear-gradient(#ffd75e,#f2b92e);color:#000;border:2px solid #000;border-radius:999px;box-shadow:0 3px 0 #000;font:900 .78rem/1 Helvetica,Arial,sans-serif;letter-spacing:.08em;padding:10px 14px;cursor:pointer}" +
    "#ogPl{position:fixed;inset:0;z-index:10000;background:rgba(5,6,12,.96);color:#fff;display:flex;flex-direction:column;padding:calc(env(safe-area-inset-top,0px) + 12px) 14px calc(env(safe-area-inset-bottom,0px) + 12px);font-family:Helvetica,Arial,sans-serif}" +
    "#ogPl[hidden]{display:none}#ogPl .plh{display:flex;justify-content:space-between;align-items:center;gap:8px}#ogPl .plh b{font:900 1.05rem/1.1 Helvetica,Arial,sans-serif;letter-spacing:.08em;color:#ffd75e}" +
    "#ogPl .plx{background:#111;color:#fff;border:2px solid #fff;border-radius:10px;font-weight:900;padding:8px 12px;cursor:pointer}" +
    "#ogPl .plv{position:relative;width:100%;max-width:520px;margin:10px auto 8px;aspect-ratio:16/9;background:#000;border:2px solid #ffd75e;border-radius:12px;overflow:hidden}#ogPl .plv iframe,#ogPl .plv>div{position:absolute;inset:0;width:100%;height:100%}" +
    "#ogPl .plc{display:flex;gap:8px;justify-content:center;margin-bottom:8px}#ogPl .plc button{background:#ffd75e;color:#000;border:2px solid #000;border-radius:10px;font-weight:900;padding:9px 14px;cursor:pointer;letter-spacing:.06em}" +
    "#ogPl ol{list-style:none;margin:0 auto;padding:0;width:100%;max-width:520px;overflow-y:auto;flex:1 1 auto;display:grid;gap:6px;align-content:start}#ogPl li button{width:100%;text-align:left;background:#151726;color:#fff;border:2px solid #2c3050;border-radius:10px;padding:11px 12px;font-weight:800;cursor:pointer}" +
    "#ogPl li button.on{border-color:#ffd75e;color:#ffd75e}#ogPl .plg{margin:10px auto 0;width:100%;max-width:520px;background:#d62828;color:#fff;border:2px solid #000;border-radius:12px;font:900 .9rem/1 Helvetica,Arial,sans-serif;letter-spacing:.08em;padding:12px;cursor:pointer}" +
    "#ogPlWin{position:fixed;inset:0;z-index:10001;background:rgba(0,0,0,.75);display:grid;place-items:center;padding:16px}#ogPlWin .box{width:min(100%,380px);background:#151726;border:3px solid #ffd75e;border-radius:16px;padding:18px;text-align:center;color:#fff;font-family:Helvetica,Arial,sans-serif;display:grid;gap:10px}" +
    "#ogPlWin h3{margin:0;color:#ffd75e;font:900 1.2rem/1.15 Helvetica,Arial,sans-serif;letter-spacing:.06em}#ogPlWin p{margin:0;color:#fff}#ogPlWin button{border:2px solid #000;border-radius:12px;font:900 .9rem/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;padding:12px;cursor:pointer}";
  document.head.appendChild(css);
  var songs = C.songs.filter(function (s) { return s && s.id && !s.locked; });
  var i = 0, yt = null, box = null;
  var stopGame = function () { try { if (typeof player !== "undefined" && player && player.pauseVideo) player.pauseVideo(); } catch (e) {} try { if (typeof SFX !== "undefined" && SFX.stop) SFX.stop(); } catch (e) {} };
  var paint = function () { if (!box) return; box.querySelectorAll("li button").forEach(function (b, k) { b.classList.toggle("on", k === i); }); };
  var play = function (k) {
    i = (k + songs.length) % songs.length; paint();
    if (yt && yt.loadVideoById) { yt.loadVideoById(songs[i].id); return; }
    var mk = function () {
      yt = new YT.Player("ogPlYT", { videoId: songs[i].id, playerVars: { autoplay: 1, playsinline: 1, rel: 0 },
        events: { onStateChange: function (e) { if (e.data === 0) play(i + 1); } } });
    };
    if (window.YT && YT.Player) mk(); else { var t = setInterval(function () { if (window.YT && YT.Player) { clearInterval(t); mk(); } }, 200); }
  };
  var open = function () {
    stopGame();
    if (!box) {
      box = document.createElement("div"); box.id = "ogPl";
      box.innerHTML = '<div class="plh"><b>&#127911; ' + (C.nameUpper || C.name) + ' PLAYLIST</b><button type="button" class="plx">CLOSE</button></div>' +
        '<div class="plv"><div id="ogPlYT"></div></div>' +
        '<div class="plc"><button type="button" data-a="prev">&#9664;&#9664; BACK</button><button type="button" data-a="next">NEXT &#9654;&#9654;</button></div>' +
        '<ol>' + songs.map(function (s, k) { return '<li><button type="button" data-k="' + k + '">' + (k + 1) + '. ' + String(s.title).replace(/[<>&]/g, "") + '</button></li>'; }).join("") + '</ol>' +
        '<button type="button" class="plg">&#8634; PLAY IT AGAIN AS A GAME</button>';
      document.body.appendChild(box);
      box.querySelector(".plx").onclick = close;
      box.querySelector(".plg").onclick = function () { close(); var r = document.getElementById("restart"); if (r) r.click(); };
      box.addEventListener("click", function (e) { var b = e.target.closest("[data-k]"); if (b) return play(+b.dataset.k); var a = e.target.closest("[data-a]"); if (a) play(i + (a.dataset.a === "next" ? 1 : -1)); });
    }
    box.hidden = false; play(i);
  };
  var close = function () { if (box) box.hidden = true; try { if (yt && yt.pauseVideo) yt.pauseVideo(); } catch (e) {} };
  var addBtn = function () {
    if (document.getElementById("ogPlBtn")) return;
    var b = document.createElement("button"); b.type = "button"; b.id = "ogPlBtn"; b.innerHTML = "&#127911; PLAYLIST"; b.onclick = open; document.body.appendChild(b);
  };
  var prompt = function () {
    if (document.getElementById("ogPlWin")) return;
    try { localStorage.setItem(seenKey, "1"); } catch (e) {}
    var w = document.createElement("div"); w.id = "ogPlWin";
    w.innerHTML = '<div class="box"><h3>ALL 99. PLAYLIST UNLOCKED.</h3><p>You beat ' + String(C.name).replace(/[<>&]/g, "") + '\'s game. Every song is yours to play straight through, no stops, no questions.</p>' +
      '<button type="button" id="ogPlGo" style="background:linear-gradient(#ffd75e,#f2b92e);color:#000">&#127911; LISTEN TO THE PLAYLIST</button>' +
      '<button type="button" id="ogPlRe" style="background:#d62828;color:#fff">&#8634; PLAY IT AGAIN AS A GAME</button>' +
      '<button type="button" id="ogPlNo" style="background:#111;color:#fff;border-color:#fff">LATER</button></div>';
    document.body.appendChild(w);
    var shut = function () { w.remove(); };
    document.getElementById("ogPlGo").onclick = function () { shut(); open(); };
    document.getElementById("ogPlRe").onclick = function () { shut(); var r = document.getElementById("restart"); if (r) r.click(); };
    document.getElementById("ogPlNo").onclick = shut;
  };
  var check = function () {
    if (!won()) return;
    addBtn();
    var seen = false; try { seen = localStorage.getItem(seenKey) === "1"; } catch (e) {}
    if (!seen) setTimeout(prompt, 2500);
  };
  var go = function () { check(); var t = setInterval(function () { if (document.getElementById("ogPlBtn")) { clearInterval(t); return; } check(); }, 2000); };
  go();
  };
  if (document.readyState === "complete") boot(); else window.addEventListener("load", boot);
})();
