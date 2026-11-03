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
    function sync() {
      var on = big.classList.contains("spin"), icon = document.getElementById("playIcon");
      mini.classList.toggle("spin", on);
      if (icon) mini.querySelector("svg").innerHTML = icon.innerHTML;
    }
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
    mini.addEventListener("click", toggle);
    tc.addEventListener("click", toggle);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
