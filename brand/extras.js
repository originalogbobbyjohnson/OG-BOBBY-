/* © OG Bobby / OG FAN 99 — fan extras for every artist game:
   1) MY PLAYLIST: every song you clear goes on your own playlist (opens as one YouTube playlist)
   2) Share card: POST TO MY STORY (phone share sheet) + TEXT A FRIEND */
(function () {
  function $(id) { return document.getElementById(id); }
  function artistName() {
    try { if (window.CFG && CFG.name) return CFG.name; } catch (e) {}
    var t = document.title || ""; t = t.replace(/^OG FAN 99\s*[–-]\s*/, "").replace(/\s*·.*$/, "");
    return t || "this artist";
  }
  /* ---------- 3) street cred meter on the board ---------- */
  function streetCred() {
    var top = $("topRank"); if (!top || $("credBar")) return;
    var st = document.createElement("style");
    st.textContent = ".cred-wrap{display:grid;gap:3px}.cred-top{display:flex;justify-content:space-between;font-weight:800;font-size:.72rem;letter-spacing:.14em;color:#fff}.cred-top b{color:#e0a52c}" +
      ".cred-bar{height:10px;border-radius:99px;background:#0b0c14;border:1.5px solid #e0a52c;overflow:hidden}.cred-bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#d62828,#e0a52c,#35b867);transition:width .6s}";
    document.head.appendChild(st);
    var w = document.createElement("div"); w.className = "cred-wrap"; w.id = "credBar";
    w.innerHTML = '<div class="cred-top"><span>STREET CRED</span><b id="credPct">0%</b></div><div class="cred-bar"><i id="credFill"></i></div>';
    top.insertAdjacentElement("afterend", w);
    function upd() {
      try {
        var done = 0; for (var k = 0; k < NEP; k++) done += Math.min(gatesOf(k), STOPS[k]);
        var p = Math.round(done / TOTAL_STOPS * 90 + (state.chalBest ? Math.min(99, state.chalBest) / 99 * 10 : 0));
        $("credFill").style.width = p + "%"; $("credPct").textContent = p + "%";
      } catch (e) {}
    }
    upd(); setInterval(upd, 1500);
  }
  function init() {
    streetCred();
    var share = $("shareBtn");
    if (!share || $("plBtn")) return;
    var st = document.createElement("style");
    st.textContent = ".pl-btn{margin-top:8px;background:#e0a52c;color:#000;border:0;border-radius:10px;padding:11px;width:100%;font-family:var(--display,inherit);letter-spacing:.1em;font-size:1rem;box-shadow:0 3px 0 #000}" +
      ".pl-list{list-style:none;margin:0;padding:0;display:grid;gap:6px;text-align:left;max-height:40vh;overflow:auto}" +
      ".pl-list li{display:flex;gap:8px;align-items:center;background:var(--panel2,#1e2135);border-radius:9px;padding:8px 10px;font-weight:700}" +
      ".pl-list li.no{opacity:.55}.pl-list b{color:#e0a52c;min-width:1.4em}" +
      ".x-row{display:grid;gap:8px;margin-top:4px}.x-row .xb{border:0;border-radius:10px;padding:12px;font-family:var(--display,inherit);letter-spacing:.08em;font-size:1rem;box-shadow:0 3px 0 #000;width:100%}" +
      ".x-row .xb.gold{background:#e0a52c;color:#000}.x-row .xb.red{background:var(--red,#d62828);color:#fff}";
    document.head.appendChild(st);

    /* ---------- 1) my playlist ---------- */
    var pl = document.createElement("button");
    pl.type = "button"; pl.id = "plBtn"; pl.className = "pl-btn"; pl.textContent = "MY PLAYLIST";
    var duo = document.createElement("div"); duo.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:8px;align-items:stretch";
    share.parentNode.insertBefore(duo, share); duo.appendChild(share); duo.appendChild(pl); pl.style.marginTop = "0";
    function songs() {
      var out = [], seen = {};
      try {
        EPISODES.forEach(function (e, k) {
          if (!e || !e.id) return;
          var t = String(e.title || "").replace(/\s*\((verse|part)[^)]*\)\s*$/i, "");
          if (!seen[e.id]) { seen[e.id] = { id: e.id, title: t, got: false }; out.push(seen[e.id]); }
          if (isCleared(k)) seen[e.id].got = true;
        });
      } catch (er) {}
      return out;
    }
    pl.addEventListener("click", function () {
      var all = songs(), got = all.filter(function (s) { return s.got; });
      var name = artistName();
      var list = '<ul class="pl-list">' + all.map(function (s, i) {
        return '<li class="' + (s.got ? "" : "no") + '"><b>' + (s.got ? "♪" : "🔒") + '</b>' + s.title.replace(/</g, "&lt;") + '</li>';
      }).join("") + '</ul>';
      var btn = got.length
        ? '<div class="x-row"><button class="xb gold" id="plOpen" type="button">OPEN MY PLAYLIST (' + got.length + ')</button></div>'
        : '<p style="margin:0">Clear an episode to put its song on your playlist.</p>';
      showModal('<div class="k">MY ' + name.toUpperCase() + ' PLAYLIST</div><p style="margin:0;font-size:.9rem">Every song you clear is yours. ' + got.length + ' of ' + all.length + ' earned.</p>' + list + btn);
      var o = $("plOpen");
      if (o) o.onclick = function () {
        var url = "https://www.youtube.com/watch_videos?video_ids=" + got.map(function (s) { return s.id; }).join(",");
        window.open(url, "_blank", "noopener");
      };
    });

    /* ---------- 2) share card: story + text a friend ---------- */
    var mcard = $("mcard");
    if (!mcard) return;
    new MutationObserver(function () {
      if (mcard.querySelector(".x-row.sharex")) return;
      var k = mcard.querySelector(".k"), img = mcard.querySelector("img");
      if (!k || !img || !/SHARE MY RANK/i.test(k.textContent)) return;
      var row = document.createElement("div"); row.className = "x-row sharex";
      row.innerHTML = '<button class="xb gold" type="button" data-story>POST TO MY STORY</button><button class="xb red" type="button" data-text>TEXT A FRIEND</button>';
      mcard.appendChild(row);
      var name = artistName();
      var link = location.origin + location.pathname;
      var rank = ""; try { rank = rankName(); } catch (e) {}
      var msg = "I'm ranked " + rank + " in the " + name + " game on OG FAN 99. Think you know " + name + " better? " + link;
      row.querySelector("[data-story]").onclick = function () {
        fetch(img.src).then(function (r) { return r.blob(); }).then(function (b) {
          var f = new File([b], "og-fan-99-rank.png", { type: "image/png" });
          if (navigator.canShare && navigator.canShare({ files: [f] })) return navigator.share({ files: [f], text: msg });
          var a = document.createElement("a"); a.href = img.src; a.download = "og-fan-99-rank.png"; document.body.appendChild(a); a.click(); a.remove();
        }).catch(function () {});
      };
      row.querySelector("[data-text]").onclick = function () {
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) { location.href = "sms:&body=" + encodeURIComponent(msg); return; }
        if (/Android/.test(navigator.userAgent)) { location.href = "sms:?body=" + encodeURIComponent(msg); return; }
        if (navigator.share) { navigator.share({ text: msg }).catch(function () {}); return; }
        try { navigator.clipboard.writeText(msg); } catch (e) {}
      };
    }).observe(mcard, { childList: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
