/* © OG Bobby / OG FAN 99 — the Play screen gets its own record player.
   Tapping the video or the little record plays and pauses the song from the game itself,
   so it works on phones where YouTube's own button inside the video doesn't respond. */
(function () {
  function init() {
    var scr = document.querySelector("#pPlay .screen"), ep = document.querySelector("#pPlay .ep"), big = document.getElementById("record");
    if (!scr || !ep || !big || document.getElementById("miniRec")) return;
    var st = document.createElement("style");
    st.textContent = "#pPlay .screen{position:relative}" +
      ".tapcatch{position:absolute;inset:0;z-index:2;background:transparent;border:0;padding:0;margin:0;cursor:pointer;-webkit-tap-highlight-color:transparent}" +
      "#pPlay .ep.withrec{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;text-align:center}" +
      "#pPlay .ep.withrec .eptxt{display:grid;gap:2px}" +
      "#pPlay .ep.withrec::after{content:'';width:54px}" +
      ".record.mini{width:54px !important;height:54px;flex:0 0 54px}" +
      ".record.mini .label .lt{display:none}" +
      ".record.mini .label svg{margin-top:0;width:56%;height:56%}";
    document.head.appendChild(st);
    /* little record beside the song name */
    var txt = document.createElement("div"); txt.className = "eptxt";
    while (ep.firstChild) txt.appendChild(ep.firstChild);
    var mini = document.createElement("button"); mini.type = "button"; mini.id = "miniRec"; mini.className = "record mini"; mini.setAttribute("aria-label", "Play or pause");
    mini.innerHTML = '<span class="label"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>';
    ep.appendChild(mini); ep.appendChild(txt); ep.classList.add("withrec");
    /* the video itself: a tap plays or pauses */
    var tc = document.createElement("button"); tc.type = "button"; tc.className = "tapcatch"; tc.setAttribute("aria-label", "Play or pause");
    scr.appendChild(tc);
    /* when the song isn't playing, cover YouTube's own play button and point to the record instead */
    var st2 = document.createElement("style");
    st2.textContent = ".playcue{position:absolute;inset:0;z-index:3;display:grid;place-items:center;align-content:center;gap:6px;background:rgba(8,9,16,.94);border:0;padding:10px;margin:0;color:#fff;font-family:var(--display,inherit);letter-spacing:.08em;text-align:center;cursor:pointer;-webkit-tap-highlight-color:transparent}" +
      ".playcue[hidden]{display:none}.playcue .arr{position:absolute;left:10px;top:4px;font-size:2.4rem;line-height:1;color:#f2c14e;animation:cuebob 1s ease-in-out infinite}" +
      ".playcue .big{font-size:1.35rem;line-height:1.15}.playcue .sm{font-size:.8rem;color:#f2c14e;letter-spacing:.12em}" +
      "@keyframes cuebob{0%,100%{transform:translate(0,0)}50%{transform:translate(-5px,-7px)}}" +
      ".record.mini.cue{animation:cueglow 1.1s ease-in-out infinite}@keyframes cueglow{0%,100%{box-shadow:0 0 0 3px #f2c14e,0 0 10px rgba(242,193,78,.6)}50%{box-shadow:0 0 0 5px #f2c14e,0 0 22px rgba(242,193,78,1)}}";
    document.head.appendChild(st2);
    var cue = document.createElement("button"); cue.type = "button"; cue.className = "playcue"; cue.setAttribute("aria-label", "Play");
    cue.innerHTML = '<span class="arr">&#8598;</span><span class="big" id="cueBig">TAP THE RECORD TO PLAY</span><span class="sm" id="cueSm">THE SONG STARTS RIGHT HERE</span>';
    scr.appendChild(cue);
    function sync() {
      var on = big.classList.contains("spin"), icon = document.getElementById("playIcon");
      mini.classList.toggle("spin", on);
      if (icon) mini.querySelector("svg").innerHTML = icon.innerHTML;
      var stop = false; try { stop = typeof atStop !== "undefined" && atStop; } catch (er) {}
      cue.hidden = on; mini.classList.toggle("cue", !on && !stop);
      cue.querySelector(".arr").style.display = stop ? "none" : "";
      document.getElementById("cueBig").textContent = stop ? "ANSWER THE QUESTION BELOW" : "TAP THE RECORD TO PLAY";
      document.getElementById("cueSm").textContent = stop ? "GET IT RIGHT TO KEEP THE SONG GOING" : "THE SONG STARTS RIGHT HERE";
    }
    setInterval(function () { sync(); try { if (scr.classList.contains("big") && ((typeof atStop !== "undefined" && atStop) || (track && track.style.transform && track.style.transform !== "none"))) { var fs = document.fullscreenElement || document.webkitFullscreenElement; if (fs) (document.exitFullscreen || document.webkitExitFullscreen).call(document); setBig(false); } } catch (e) {} }, 400);
    new MutationObserver(sync).observe(big, { attributes: true, attributeFilter: ["class"], subtree: true, childList: true, characterData: true });
    sync();
    function toggle(e) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      try { if (window.SFX && SFX.unlock) SFX.unlock(); } catch (er) {}
      try {
        if (typeof atStop !== "undefined" && atStop) { if (typeof toast === "function") toast("ANSWER TO KEEP IT GOING"); return; }
        if (typeof player !== "undefined" && player && player.getPlayerState) {
          var s = player.getPlayerState();
          if (s === 1 || s === 3) { player.pauseVideo(); return; }
          if (typeof current !== "undefined" && current > -1) { player.playVideo(); return; }
        }
      } catch (er) {}
      big.click();
    }
    /* our own big-screen button, bottom right (YouTube's own button sits under the tap layer) */
    var st3 = document.createElement("style");
    st3.textContent = ".bigbtn{position:absolute;right:6px;bottom:6px;z-index:5;width:46px;height:46px;border-radius:12px;border:2px solid #fff;background:rgba(0,0,0,.72);color:#fff;font-size:1.6rem;line-height:1;display:grid;place-items:center;padding:0;cursor:pointer;box-shadow:0 0 0 2px #000;-webkit-tap-highlight-color:transparent}" +
      "#pPlay .screen.big{position:fixed !important;left:0;top:0;width:100vw !important;height:100vh;height:100dvh;max-width:none;aspect-ratio:auto;z-index:9999;border-radius:0;border:0;box-shadow:none;margin:0;background:#000}" +
      "#pPlay .screen.big .bigbtn{right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));width:56px;height:56px;font-size:1.5rem}" +
      "#pPlay .screen.big .playcue .arr{display:none}";
    document.head.appendChild(st3);
    var bb = document.createElement("button"); bb.type = "button"; bb.className = "bigbtn"; bb.setAttribute("aria-label", "Full screen"); bb.innerHTML = "&#10530;";
    scr.appendChild(bb);
    var track = document.getElementById("track"), saved = null;
    function setBig(on) {
      if (on) {
        saved = { t: track ? track.style.transform : "", tr: track ? track.style.transition : "" };
        if (track) { var m = /translateX\((-?[\d.]+)%\)/.exec(track.style.transform || ""); track.style.transition = "none"; track.style.transform = "none"; track.style.marginLeft = (m ? m[1] : "-100") + "%"; }
        scr.classList.add("big"); bb.innerHTML = "&#10005;"; bb.setAttribute("aria-label", "Exit full screen");
        try { document.body.style.overflow = "hidden"; } catch (e) {}
      } else {
        scr.classList.remove("big"); bb.innerHTML = "&#10530;"; bb.setAttribute("aria-label", "Full screen");
        if (track && saved) { track.style.marginLeft = ""; if (!track.style.transform || track.style.transform === "none") track.style.transform = saved.t; setTimeout(function () { track.style.transition = saved.tr; }, 50); }
        try { document.body.style.overflow = ""; } catch (e) {}
      }
    }
    bb.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      var fsEl = document.fullscreenElement || document.webkitFullscreenElement;
      if (fsEl) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
      if (scr.classList.contains("big")) { setBig(false); return; }
      setBig(true);
      /* phones that allow real full screen get it too; iPhone stays in the big view */
      var rq = scr.requestFullscreen || scr.webkitRequestFullscreen;
      if (rq) { try { var p = rq.call(scr); if (p && p.catch) p.catch(function () {}); } catch (er) {} }
    });
    document.addEventListener("fullscreenchange", function () { if (!document.fullscreenElement && scr.classList.contains("big")) setBig(false); });
    document.addEventListener("webkitfullscreenchange", function () { if (!document.webkitFullscreenElement && scr.classList.contains("big")) setBig(false); });
    mini.addEventListener("click", toggle);
    tc.addEventListener("click", toggle);
    cue.addEventListener("click", toggle);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
