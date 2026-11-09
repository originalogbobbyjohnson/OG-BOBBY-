/* OG FAN 99 — ONE INDEX for everything: every game, searchable by name, place, region and genre.
   Opens from every SEARCH / FIND button. Built from the same data the rest of the app uses, so it grows on its own. */
(function () {
  "use strict";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var norm = function (s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim(); };
  var owner = function () { try { return localStorage.getItem("ogfan99owner") === "1"; } catch (e) { return false; } };
  var exOn = function () { try { return localStorage.getItem("ogfan99explicit") === "1"; } catch (e) { return false; } };

  function build() {
    var GO = window.OG_GENRE_OF || {}, RG = window.OG_REGION_GAMES || {}, out = [], seen = {};
    var A = (typeof ARTISTS !== "undefined" && ARTISTS) || [];
    A.forEach(function (a, i) {
      if (!a.url) return;
      seen[a.who] = 1;
      out.push({ n: a.who, where: (a.hood ? a.hood + ", " : "") + (a.boro || "New York"), region: "NEW YORK AREA", genre: GO[a.who] || "HIP-HOP + RAP", ex: a.ex || 0, nyc: i, url: a.url, open: a.status === "live" || owner() });
    });
    var R = (window.OGW && OGW.regions) ? OGW.regions() : [];
    R.forEach(function (r) {
      if (r.g || r.live) return;
      (r.coming || []).forEach(function (n) {
        var g = RG[n]; if (!g || seen[n]) return; seen[n] = 1;
        out.push({ n: n, where: r.d ? r.d.split(",")[0].replace(/\.$/, "") : r.n, region: r.n, genre: GO[n] || "HIP-HOP + RAP", ex: g.ex || 0, url: g.url, open: true });
      });
    });
    Object.keys(RG).forEach(function (n) { if (seen[n]) return; seen[n] = 1; var g = RG[n]; out.push({ n: n, where: "", region: "OTHER", genre: GO[n] || "HIP-HOP + RAP", ex: g.ex || 0, url: g.url, open: true }); });
    (window.PRODUCERS || []).forEach(function (p) { if (!p.url) return; out.push({ n: p.name, where: p.home || "", region: "PRODUCERS", genre: "PRODUCERS", ex: p.ex || 0, url: p.url, open: true }); });
    out.forEach(function (x) { x.key = norm(x.n + " " + x.where + " " + x.region + " " + x.genre); });
    out.sort(function (a, b) { return norm(a.n).localeCompare(norm(b.n)); });
    return out;
  }

  var css = document.createElement("style");
  css.textContent =
    "#ogIdx{position:fixed;inset:0;z-index:2600;background:#0b0c14;display:flex;flex-direction:column;color:#fff;font-family:Helvetica,Arial,sans-serif}" +
    "#ogIdx[hidden]{display:none}" +
    "#ogIdx .ih{flex:none;padding:max(10px,env(safe-area-inset-top)) 12px 10px;background:#10132a;border-bottom:2px solid #000;box-shadow:0 8px 12px -6px rgba(0,0,0,.8);display:grid;gap:8px;width:min(100%,460px);margin:0 auto;box-sizing:border-box}" +
    "#ogIdx .it{display:flex;align-items:center;justify-content:space-between;gap:8px}" +
    "#ogIdx .it b{font:900 1.05rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em}#ogIdx .it em{font-style:normal;font:900 .7rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;background:#e8b84a;color:#000;border:2px solid #000;border-radius:8px;padding:5px 8px}" +
    "#ogIdx .ix{background:#111;color:#fff;border:2px solid #fff;border-radius:10px;font:900 .8rem/1 Helvetica,Arial,sans-serif;padding:9px 12px;cursor:pointer}" +
    "#ogIdx input{width:100%;box-sizing:border-box;font:700 16px/1.2 Helvetica,Arial,sans-serif;padding:12px;border:2px solid #e8b84a;border-radius:12px;background:#0b0c14;color:#fff}" +
    "#ogIdx input::placeholder{color:#e8b84a;opacity:.9}" +
    "#ogIdx .if{display:grid;grid-template-columns:1fr 1fr;gap:8px}" +
    "#ogIdx select{width:100%;font:800 .8rem/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;padding:10px 8px;border:2px solid #000;border-radius:10px;background:#2f6fd6;color:#fff;box-shadow:0 3px 0 #000}" +
    "#ogIdx .near{border:2px solid #000;border-radius:10px;background:#2e9e58;color:#fff;font:900 .78rem/1 Helvetica,Arial,sans-serif;letter-spacing:.08em;padding:10px;box-shadow:0 3px 0 #000;cursor:pointer}" +
    "#ogIdx .il{flex:1 1 auto;overflow-y:auto;width:min(100%,460px);margin:0 auto;box-sizing:border-box;padding:10px 12px max(16px,env(safe-area-inset-bottom));display:grid;gap:6px;align-content:start}" +
    "#ogIdx .ir{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center;text-align:left;width:100%;background:#151726;border:2px solid #2c3050;border-radius:12px;padding:10px 12px;color:#fff;cursor:pointer}" +
    "#ogIdx .ir b{display:block;font:900 .95rem/1.15 Helvetica,Arial,sans-serif}#ogIdx .ir small{display:block;margin-top:4px;font:700 .68rem/1.2 Helvetica,Arial,sans-serif;letter-spacing:.06em;color:#e8b84a}" +
    "#ogIdx .ir i{font-style:normal;font:900 .62rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;padding:6px 8px;border-radius:7px;border:1.5px solid #000;background:#35b867;color:#031;white-space:nowrap}" +
    "#ogIdx .ir i.e{background:#d62828;color:#fff}#ogIdx .ir i.s{background:#e8b84a;color:#000}" +
    "#ogIdx .iletter{font:900 .8rem/1 Helvetica,Arial,sans-serif;letter-spacing:.2em;color:#e8b84a;margin:8px 2px 0}" +
    "#ogIdx .inone{text-align:center;color:#fff;padding:30px 10px;font-weight:800}";
  document.head.appendChild(css);

  var box = null, ALL = [];
  function opts(list, first) { return '<option value="">' + first + '</option>' + list.map(function (x) { return '<option value="' + esc(x) + '">' + esc(x) + '</option>'; }).join(""); }
  function open(preset) {
    ALL = build();
    if (!box) {
      box = document.createElement("div"); box.id = "ogIdx"; document.body.appendChild(box);
    }
    var regions = [], genres = [];
    ALL.forEach(function (x) { if (regions.indexOf(x.region) < 0 && x.region !== "PRODUCERS" && x.region !== "OTHER") regions.push(x.region); if (genres.indexOf(x.genre) < 0) genres.push(x.genre); });
    regions.sort(function (a, b) { return a === "NEW YORK AREA" ? -1 : b === "NEW YORK AREA" ? 1 : a.localeCompare(b); });
    genres.sort(function (a, b) { return a === "HIP-HOP + RAP" ? -1 : b === "HIP-HOP + RAP" ? 1 : a.localeCompare(b); });
    box.innerHTML = '<div class="ih"><div class="it"><b>&#128269; SEARCH EVERYTHING</b><em id="ixN">' + ALL.length + ' GAMES</em><button type="button" class="ix" id="ixX">CLOSE</button></div>' +
      '<input id="ixQ" type="search" placeholder="Artist, city, neighborhood, genre…" autocomplete="off">' +
      '<div class="if"><select id="ixR">' + opts(regions, "ALL PLACES") + '</select><select id="ixG">' + opts(genres, "ALL GENRES") + '</select></div>' +
      '<button type="button" class="near" id="ixNear">&#128205; NEW YORK: FIND ARTISTS NEAR ME</button></div><div class="il" id="ixL"></div>';
    box.hidden = false;
    var q = box.querySelector("#ixQ"), r = box.querySelector("#ixR"), g = box.querySelector("#ixG"), L = box.querySelector("#ixL");
    if (preset) { if (preset.region) r.value = preset.region; if (preset.genre) g.value = preset.genre; }
    function draw() {
      var words = norm(q.value).split(" ").filter(Boolean), rv = r.value, gv = g.value;
      var hits = ALL.filter(function (x) { return (!rv || x.region === rv) && (!gv || x.genre === gv) && words.every(function (w) { return x.key.indexOf(w) >= 0; }); });
      box.querySelector("#ixN").textContent = hits.length + (hits.length === 1 ? " GAME" : " GAMES");
      if (!hits.length) { L.innerHTML = '<div class="inone">Nothing found. Try another name or place.</div>'; return; }
      var last = "", h = "";
      hits.slice(0, 600).forEach(function (x, k) {
        var ch = norm(x.n).charAt(0).toUpperCase(); if (/[0-9]/.test(ch)) ch = "#";
        if (!words.length && ch !== last) { h += '<div class="iletter">' + ch + '</div>'; last = ch; }
        var tag = !x.open ? '<i class="s">SOON</i>' : x.ex === 2 ? '<i class="e">18+</i>' : '<i>PLAY</i>';
        h += '<button type="button" class="ir" data-k="' + ALL.indexOf(x) + '"><span><b>' + esc(x.n) + '</b><small>' + esc([x.where, x.region === "NEW YORK AREA" ? "" : x.region, x.genre].filter(Boolean).join(" · ")) + '</small></span>' + tag + '</button>';
      });
      L.innerHTML = h;
    }
    q.oninput = draw; r.onchange = draw; g.onchange = draw;
    box.querySelector("#ixX").onclick = function () { box.hidden = true; };
    box.querySelector("#ixNear").onclick = function () { box.hidden = true; try { if (typeof openFind === "function") openFind(); } catch (e) {} };
    L.onclick = function (e) {
      var b = e.target.closest("[data-k]"); if (!b) return; var x = ALL[+b.dataset.k]; if (!x) return;
      if (x.nyc != null && typeof goArtist === "function") { box.hidden = true; goArtist(x.nyc); return; }
      if (!x.open) return;
      if (x.ex === 2 && !exOn()) {
        if (!confirm(x.n + "'s game has explicit lyrics (18+). The questions stay clean. Are you 18 or older?")) return;
        try { localStorage.setItem("ogfan99explicit", "1"); } catch (er) {}
      }
      location.href = x.url + "?from=ogfan99";
    };
    draw();
    setTimeout(function () { try { q.focus({ preventScroll: true }); } catch (e) {} }, 60);
  }
  window.OGSearch = { open: open };
  /* every SEARCH / FIND button in the app opens the index */
  document.addEventListener("click", function (e) {
    var b = e.target.closest('#findBtn2,.hfind,[data-nr="__find"],[data-pb="__find"],[data-how="find"]');
    if (!b) return;
    e.preventDefault(); e.stopImmediatePropagation(); open();
  }, true);
})();
