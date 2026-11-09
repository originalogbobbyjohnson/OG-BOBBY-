/* OG FAN 99 — ARTIST VAULT (Phase 2 framework)
   Artists who own their music keep it here: exclusive songs, full videos, behind the scenes.
   Fans unlock by beating the artist's game, or support the artist directly. The artist keeps the money.
   One choice at a time, same spot for your finger, like the game. */
(function () {
  "use strict";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var owner = function () { try { return localStorage.getItem("ogfan99owner") === "1"; } catch (e) { return false; } };

  /* ---- the vaults. Each artist gets one entry; items fill in as artists send their music. ----
     lock: "win" = beat the artist's game (99) to open · "free" = open to everyone · "fan" = paid supporters (coming) */
  var VAULTS = window.OG_VAULTS = window.OG_VAULTS || [
    { who: "OG Bobby", where: "Bay Ridge, Brooklyn", c: "#e8b84a", game: "../", save: "",
      items: [
        { k: "&#127911;", t: "UNRELEASED SONG", d: "The next OG Bobby single, here before anywhere else.", lock: "win" },
        { k: "&#127909;", t: "FULL VIDEO: WHATEVER IT TAKES", d: "The whole reel, start to finish.", lock: "free", url: "../" },
        { k: "&#127916;", t: "BEHIND THE SCENES", d: "How the songs get made.", lock: "fan" }
      ] }
  ];

  var STEPS = [
    { t: "CLAIM YOUR DOOR", d: "Find your door on the map and claim it. OG Bobby approves every artist, so everyone in here is real.", go: "claim" },
    { t: "CONFIRM YOU OWN IT", d: "You confirm you own the recordings and the songwriting, including co-writers, producers' beats and any samples. You keep every right. We only host it.", soon: 1 },
    { t: "SEND YOUR MUSIC", d: "Upload songs and full videos. Exclusive drops, early releases and behind the scenes work best.", soon: 1 },
    { t: "SET HOW FANS SUPPORT YOU", d: "Choose tips, song sales or a monthly fan membership. Fans pay you directly.", soon: 1 }
  ];
  var MONEY = [
    { t: "YOU KEEP THE MONEY", d: "Fans pay the artist directly. The only thing taken out is the card processing fee (about 3%)." },
    { t: "ONE YEARLY FEE", d: "Artists pay one yearly fee that covers hosting, upkeep and fixes. No cut of your sales." },
    { t: "THE GAME BRINGS THE FANS", d: "Fans who beat your game are your real fans. They unlock your vault first, and they are the ones who pay." },
    { t: "KEEP YOUR STREAMING TOO", d: "You don't have to pull your music anywhere. Use the vault for what fans can only get here: unreleased songs, early drops and full videos." }
  ];
  /* owner build board: what Phase 2 still needs */
  var BUILD = [
    { t: "Vault tab in the app", s: "done" },
    { t: "Unlock by beating the artist's game", s: "done" },
    { t: "Vault list + artist steps + money page", s: "done" },
    { t: "Hosting for songs and full videos", s: "next" },
    { t: "Artist upload page", s: "next" },
    { t: "Fans pay artists directly (tips, songs, membership)", s: "next" },
    { t: "Ownership agreement for artists", s: "lawyer" },
    { t: "Takedown policy for music they don't own", s: "lawyer" },
    { t: "Songwriter royalty licensing check", s: "lawyer" },
    { t: "One OG FAN 99 player across all vaults", s: "later" }
  ];

  var css = document.createElement("style");
  css.textContent =
    ".vlt{display:grid;gap:10px}" +
    ".vlt .vb{position:relative;display:grid;gap:6px;justify-items:center;width:100%;min-height:78px;border:2px solid #000;border-radius:14px;background:linear-gradient(180deg,color-mix(in srgb,var(--bc,#e8b84a) 85%,#fff) 0%,var(--bc,#e8b84a) 55%,color-mix(in srgb,var(--bc,#e8b84a) 70%,#000) 100%);color:#fff;box-shadow:0 5px 0 #000,inset 0 2px 0 rgba(255,255,255,.28);padding:12px 34px 12px 12px;font:900 1rem/1.1 Helvetica,Arial,sans-serif;letter-spacing:.06em;text-shadow:0 2px 0 rgba(0,0,0,.45);cursor:pointer;text-align:center;transition:transform .06s,box-shadow .06s}" +
    ".vlt .vb:active{transform:translateY(4px);box-shadow:0 1px 0 #000}" +
    ".vlt .vb small{font:800 .62rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;background:rgba(0,0,0,.38);border:1.5px solid rgba(0,0,0,.6);border-radius:6px;padding:4px 7px;text-shadow:none}" +
    ".vlt .vb .chev{position:absolute;right:12px;top:50%;transform:translateY(-50%);font-style:normal;font-size:.9rem}" +
    ".vlt .vb.gold{--bc:#e8b84a;color:#000;text-shadow:none}.vlt .vb.gold small{color:#fff}" +
    ".vlt .vback{min-height:48px;--bc:#3a3f5c;font-size:.9rem}" +
    ".vlt .vrow{display:grid;grid-template-columns:34px 1fr auto;gap:10px;align-items:center;width:100%;text-align:left;background:#151726;border:2px solid #2c3050;border-radius:12px;padding:12px;color:#fff;cursor:pointer;font:900 .9rem/1.15 Helvetica,Arial,sans-serif;letter-spacing:.04em}" +
    ".vlt .vrow b{font-size:1.3rem;text-align:center}.vlt .vrow span small{display:block;margin-top:4px;font:700 .68rem/1.25 Helvetica,Arial,sans-serif;letter-spacing:.04em;color:#e8b84a}" +
    ".vlt .vrow .vfold{display:block;margin-top:8px;font:600 .82rem/1.35 Helvetica,Arial,sans-serif;letter-spacing:0;color:#fff}" +
    ".vlt .tag{font-style:normal;font:900 .6rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;padding:6px 8px;border-radius:7px;border:1.5px solid #000;white-space:nowrap;background:#e8b84a;color:#000}" +
    ".vlt .tag.ok{background:#35b867;color:#031}.vlt .tag.lk{background:#d62828;color:#fff}.vlt .tag.sn{background:#fff;color:#000}.vlt .tag.lw{background:#8a4fd6;color:#fff}" +
    ".vlt .vcap{text-align:center;font:900 .7rem/1.2 Helvetica,Arial,sans-serif;letter-spacing:.16em;color:#e8b84a;margin-top:4px}" +
    ".vlt .vhead{text-align:center;font:900 1.2rem/1.1 Helvetica,Arial,sans-serif;letter-spacing:.08em;color:#fff}";
  document.head.appendChild(css);

  var view = "home", vi = 0;
  function won(v) {
    if (!v.save) return false;
    try { var s = JSON.parse(localStorage.getItem(v.save) || "{}"); return (s.chalBest || 0) >= 99; } catch (e) { return false; }
  }
  function lockTag(it, v) {
    if (it.lock === "free") return '<i class="tag ok">OPEN</i>';
    if (it.lock === "win") return won(v) ? '<i class="tag ok">UNLOCKED</i>' : '<i class="tag lk">&#128274; BEAT THE GAME</i>';
    return '<i class="tag sn">SOON</i>';
  }
  var B = function (k, label, sub, cls, bc) { return '<button type="button" class="vb' + (cls ? " " + cls : "") + '" data-v="' + k + '"' + (bc ? ' style="--bc:' + bc + '"' : '') + '>' + label + (sub ? '<small>' + sub + '</small>' : '') + '<i class="chev">&#9654;</i></button>'; };
  var BACK = "";

  function draw(p) {
    var h = '<div class="wp-h"><div class="t">ARTIST VAULT</div><div class="s">OWN YOUR MUSIC. KEEP YOUR MONEY.</div></div><div class="vlt">';
    if (view === "home") {
      h += '<div class="vcap">PICK ONE</div>' +
        B("fans", "&#127911; I'M A FAN", "OPEN AN ARTIST'S VAULT", "", "#2f6fd6") +
        B("artist", "&#127908; I'M AN ARTIST", "OPEN YOUR OWN VAULT", "", "#d2462f") +
        B("money", "&#128176; HOW THE MONEY WORKS", "ARTISTS KEEP IT", "", "#2e9e58") +
        (owner() ? B("build", "&#128736; BUILD BOARD", "OWNER ONLY", "gold") : "");
    } else if (view === "fans") {
      h += BACK + '<div class="vcap">PICK A VAULT</div>' + VAULTS.map(function (v, i) { return B("v:" + i, esc(v.who), v.items.length + " DROPS &middot; " + esc(v.where), "", v.c); }).join("") +
        '<div class="vcap">MORE VAULTS OPEN AS ARTISTS JOIN</div>';
    } else if (view === "vault") {
      var v = VAULTS[vi];
      h += '<div class="vhead">' + esc(v.who) + '</div>' +
        B("play", "&#127918; PLAY THE GAME", "BEAT IT TO UNLOCK THE VAULT", "gold") +
        v.items.map(function (it, j) { return '<button type="button" class="vrow" ' + (it.lock === "free" && it.url ? 'data-go="' + esc(it.url) + '"' : 'data-it="' + j + '"') + '><b>' + it.k + '</b><span>' + it.t + '<small>&#9432; TAP FOR INFO</small><em class="vfold" hidden>' + esc(it.d) + '</em></span>' + lockTag(it, v) + '</button>'; }).join("") +
        '<div class="vcap">SUPPORT ' + esc(v.who.toUpperCase()) + '</div>' +
        ['&#128176; TIP', '&#127925; BUY SONGS', '&#11088; MONTHLY FAN'].map(function (t) { return '<button type="button" class="vrow" data-soon="1"><b>' + t.split(" ")[0] + '</b><span>' + t.split(" ").slice(1).join(" ") + '</span><i class="tag sn">SOON</i></button>'; }).join("");
    } else if (view === "artist") {
      h += BACK + '<div class="vcap">4 STEPS</div>' + STEPS.map(function (s, j) { return '<button type="button" class="vrow" data-st="' + j + '"><b>' + (j + 1) + '</b><span>' + s.t + '<small>&#9432; TAP FOR INFO</small><em class="vfold" hidden>' + esc(s.d) + '</em></span>' + (s.soon ? '<i class="tag sn">SOON</i>' : '<i class="tag ok">OPEN</i>') + '</button>'; }).join("") + B("claim", "&#128682; CLAIM YOUR DOOR NOW", "STEP 1 IS OPEN", "gold");
    } else if (view === "money") {
      h += BACK + MONEY.map(function (s) { return '<button type="button" class="vrow" data-fold="1"><b>&#9432;</b><span>' + s.t + '<em class="vfold" hidden>' + esc(s.d) + '</em></span><i class="tag">INFO</i></button>'; }).join("");
    } else if (view === "build") {
      var lab = { done: ["ok", "DONE"], next: ["sn", "NEXT"], lawyer: ["lk", "LAWYER"], later: ["lw", "LATER"] };
      h += BACK + '<div class="vcap">PHASE 2 · ' + BUILD.filter(function (x) { return x.s === "done"; }).length + ' OF ' + BUILD.length + ' DONE</div>' +
        BUILD.map(function (x) { var l = lab[x.s]; return '<div class="vrow" style="cursor:default"><b>' + (x.s === "done" ? "&#9989;" : "&#9634;") + '</b><span>' + esc(x.t) + '</span><i class="tag ' + l[0] + '">' + l[1] + '</i></div>'; }).join("");
    }
    p.innerHTML = h + '</div>';
    if (view !== "home" && window.OGNav) { var vv = view, ii = vi; OGNav.mark("vault:" + vv + ":" + ii, function () { if (window.OGW) OGW.go("vault"); view = vv; vi = ii; draw(p); }); }
    p.scrollTop = 0;
    p.onclick = function (e) {
      var g = e.target.closest("[data-go]"); if (g) { location.href = g.dataset.go; return; }
      var f = e.target.closest("[data-fold],[data-it],[data-st]");
      if (f) { var em = f.querySelector(".vfold"); if (em) em.hidden = !em.hidden; return; }
      var b = e.target.closest("[data-v]"); if (!b) return; var k = b.dataset.v;
      if (k === "play") { location.href = VAULTS[vi].game; return; }
      if (k === "claim") { try { window.OGW.go("lounge"); } catch (er) {} return; }
      if (k.indexOf("v:") === 0) { vi = +k.slice(2); view = "vault"; }
      else view = k;
      draw(p);
    };
  }
  window.OGVault = { draw: function (p) { view = "home"; draw(p); }, vaults: VAULTS };
})();
