/* © OG Bobby / OG FAN 99 — the wider world around the map:
   LOUNGE (artists link up), FANS (fan side), REGIONS (cities beyond NYC), GENRES (sounds beyond rap).
   The map page itself is untouched; these are panes that swap in above the bottom bar. */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var owner = function () { try { return localStorage.getItem("ogfan99owner") === "1"; } catch (e) { return false; } };
  var LS = function (k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || "null"); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } };
  var live = function () { return !!(window.OGFB && OGFB.ready() && OGFB.social); };

  /* ---------- styles ---------- */
  var css = [
    ".wtabs{flex:none;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px;margin:-2px 0 0}",
    ".wtabs button{position:relative;border:2px solid #000;border-radius:10px;background:#1d2033;color:#fff;font:900 9.5px/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;padding:6px 1px 5px;box-shadow:0 2px 0 #000;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px}",
    ".wtabs button b{font-size:14px;line-height:1}",
    ".wtabs button.on{background:#e8b84a;color:#000}",
    ".wtabs button .uc{position:absolute;top:-5px;right:-3px;background:repeating-linear-gradient(-45deg,#f2c14e 0 4px,#000 4px 8px);width:14px;height:8px;border-radius:2px;border:1px solid #000}",
    ".wrap.app.paneon>.perkbar,.wrap.app.paneon>.metrorow,.wrap.app.paneon>.mapbox,.wrap.app.paneon>.boros,.wrap.app.paneon>.bhead,.wrap.app.paneon>.listwrap{display:none!important}",
    ".wpane{flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:flex;flex-direction:column;gap:10px;padding:2px 0 8px}",
    ".wpane[hidden]{display:none}",
    ".wpane>*{flex:none}",
    ".wp-h{text-align:center;display:grid;gap:3px}",
    ".wp-h .t{font-family:var(--tag);font-size:2rem;line-height:1;color:#fff;-webkit-text-stroke:1px #000;text-shadow:2px 2px 0 #000;transform:rotate(-2deg)}",
    ".wp-h .s{font:800 .7rem/1.3 Helvetica,Arial,sans-serif;letter-spacing:.14em;color:#e8b84a}",
    ".wbox{background:#151726;border:2px solid #2c3050;border-radius:14px;padding:12px;display:grid;gap:8px;color:#fff}",
    ".wbox h4{margin:0;font-family:var(--display);letter-spacing:.1em;font-size:1rem;color:#fff}",
    ".wbox p{margin:0;font-size:.86rem;line-height:1.35;color:#fff}",
    ".wsteps{display:grid;gap:6px;margin:0;padding:0;list-style:none;counter-reset:s}",
    ".wsteps li{counter-increment:s;display:grid;grid-template-columns:24px 1fr;gap:8px;align-items:center;font-size:.86rem;color:#fff}",
    ".wsteps li:before{content:counter(s);width:24px;height:24px;border-radius:50%;background:#e8b84a;color:#000;font:900 13px/24px Helvetica,Arial,sans-serif;text-align:center}",
    ".wbtn{display:block;width:100%;border:2px solid #000;border-radius:12px;padding:12px 10px;font-family:var(--display);letter-spacing:.1em;font-size:1rem;box-shadow:0 3px 0 #000;cursor:pointer;background:#d62828;color:#fff}",
    ".wbtn.gold{background:#e8b84a;color:#000}.wbtn.dark{background:#1d2033;color:#fff;border-color:#e8b84a}",
    ".wbtn.sm{display:inline-block;width:auto;padding:7px 10px;font-size:.78rem;box-shadow:0 2px 0 #000}",
    ".wmsg{font-size:.8rem;color:#e8b84a;text-align:center;min-height:1em}",
    ".tape{position:relative;overflow:hidden;border-radius:14px;border:2px solid #000;background:#151726;padding:22px 12px 12px;display:grid;gap:8px;color:#fff}",
    ".tape:before{content:'';position:absolute;left:0;right:0;top:0;height:12px;background:repeating-linear-gradient(-45deg,#f2c14e 0 12px,#000 12px 24px)}",
    ".tape .uc{justify-self:center;background:#f2c14e;color:#000;font:900 .72rem/1 Helvetica,Arial,sans-serif;letter-spacing:.14em;padding:6px 10px;border:2px solid #000;border-radius:6px;box-shadow:0 2px 0 #000}",
    ".tape h4{margin:0;font-family:var(--display);letter-spacing:.1em;font-size:1.05rem;text-align:center}",
    ".tape p{margin:0;font-size:.84rem;line-height:1.35;text-align:center}",
    ".wgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}",
    ".wtile{position:relative;border:2px solid #000;border-radius:12px;padding:12px 10px 10px;background:#1d2033;color:#fff;text-align:left;box-shadow:0 3px 0 #000;display:grid;gap:4px;cursor:pointer;font:inherit}",
    ".wtile .bar{position:absolute;left:0;right:0;top:0;height:6px;border-radius:10px 10px 0 0}",
    ".wtile b{font-family:var(--display);letter-spacing:.06em;font-size:1rem;line-height:1.05}",
    ".wtile small{font-size:.72rem;line-height:1.25;color:#fff}",
    ".wtile .st{justify-self:start;font:900 .6rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;padding:4px 6px;border-radius:5px;border:1.5px solid #000}",
    ".wtile .st.live{background:#35b867;color:#031}.wtile .st.uc{background:repeating-linear-gradient(-45deg,#f2c14e 0 6px,#e0a800 6px 12px);color:#000}",
    ".wtile.wide{grid-column:1/-1}",
    /* lounge */
    ".lsub{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:4px}",
    ".lsub button{border:2px solid #000;border-radius:9px;background:#1d2033;color:#fff;font:900 9.5px/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;padding:8px 2px;cursor:pointer;position:relative}",
    ".lsub button.on{background:#e8b84a;color:#000}",
    ".lsub button i{position:absolute;top:-6px;right:-4px;background:#d62828;color:#fff;font:900 9px/16px Helvetica,Arial,sans-serif;min-width:16px;height:16px;border-radius:8px;border:1.5px solid #000;font-style:normal}",
    ".prof{display:grid;grid-template-columns:54px 1fr;gap:10px;align-items:center;background:linear-gradient(135deg,#1d2550,#151726);border:2px solid #e8b84a;border-radius:14px;padding:10px}",
    ".prof .av{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-family:var(--tag);font-size:1.4rem;color:#fff;-webkit-text-stroke:.6px #000;border:2.5px solid #fff;box-shadow:0 2px 0 #000}",
    ".prof .nm{font-family:var(--tag);font-size:1.45rem;line-height:1;color:#fff;-webkit-text-stroke:.6px #000}",
    ".prof .mt{font:800 .66rem/1.35 Helvetica,Arial,sans-serif;letter-spacing:.08em;color:#e8b84a}",
    ".prow{display:grid;grid-template-columns:38px 1fr auto;gap:9px;align-items:center;background:#151726;border:1.5px solid #2c3050;border-radius:12px;padding:8px 9px}",
    ".prow .av{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font-family:var(--tag);font-size:1rem;color:#fff;-webkit-text-stroke:.5px #000;border:2px solid #fff}",
    ".prow .nm{font-family:var(--tag);font-size:1.1rem;line-height:1;color:#fff;-webkit-text-stroke:.5px #000}",
    ".prow .mt{font:700 .64rem/1.3 Helvetica,Arial,sans-serif;letter-spacing:.06em;color:#e8b84a}",
    ".prow .acts{display:flex;gap:5px}",
    ".lsearch{width:100%;box-sizing:border-box;border:2px solid #e8b84a;border-radius:10px;background:#0b0c14;color:#fff;padding:10px;font:600 15px Helvetica,Arial,sans-serif}",
    ".lsearch::placeholder{color:#e8b84a;opacity:.8}",
    ".sample{justify-self:start;max-width:100%;white-space:normal;line-height:1.3;background:#2c3050;color:#fff;font:900 .58rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;padding:4px 6px;border-radius:5px}",
    /* chat window */
    ".chat{position:fixed;inset:0;z-index:2600;background:#0b0c14;display:flex;flex-direction:column;max-width:460px;margin:0 auto}",
    ".chat[hidden]{display:none}",
    ".chat .ch{flex:none;display:grid;grid-template-columns:40px 38px 1fr 40px;gap:8px;align-items:center;padding:max(10px,env(safe-area-inset-top)) 10px 10px;background:#151726;border-bottom:3px solid #d62828}",
    ".chat .ch button{border:0;background:none;color:#fff;font-size:22px;cursor:pointer}",
    ".chat .msgs{flex:1 1 auto;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:6px;background:linear-gradient(#0b0c14,#121428)}",
    ".chat .bub{max-width:78%;padding:8px 11px;border-radius:16px;font-size:.92rem;line-height:1.3;color:#fff;background:#2c3050;align-self:flex-start;border-bottom-left-radius:4px;white-space:pre-wrap;word-wrap:break-word}",
    ".chat .bub.me{align-self:flex-end;background:#d62828;border-bottom-left-radius:16px;border-bottom-right-radius:4px}",
    ".chat .day{align-self:center;font:800 .62rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;color:#e8b84a;padding:4px 0}",
    ".chat .cf{flex:none;display:grid;grid-template-columns:1fr auto;gap:8px;padding:10px 10px max(12px,env(safe-area-inset-bottom));background:#151726;border-top:2px solid #2c3050}",
    ".chat .cf textarea{resize:none;height:42px;border:2px solid #e8b84a;border-radius:12px;background:#0b0c14;color:#fff;padding:10px;font:15px Helvetica,Arial,sans-serif}",
    ".chat .cf textarea::placeholder{color:#e8b84a;opacity:.85}",
    ".chat .cf button{border:2px solid #000;border-radius:12px;background:#e8b84a;color:#000;font-family:var(--display);letter-spacing:.1em;padding:0 16px;cursor:pointer}",
    ".chat .safe{flex:none;display:flex;justify-content:center;gap:14px;padding:6px;background:#151726}",
    ".chat .safe button{background:none;border:0;color:#e8b84a;font:800 .66rem Helvetica,Arial,sans-serif;letter-spacing:.12em;cursor:pointer;text-decoration:underline}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- helpers ---------- */
  var BORO_C = { Brooklyn: "#d62828", Queens: "#7b3fbf", Bronx: "#00933c", "the Bronx": "#00933c", Manhattan: "#0039a6", "Staten Island": "#ff6319" };
  var initials = function (n) { return String(n || "?").replace(/[^A-Za-z0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase() || "?"; };
  var boroOf = function (a) { return (a && a.boro) || "Brooklyn"; };
  var avColor = function (a) { return BORO_C[boroOf(a)] || "#e8b84a"; };
  var A = function () { try { return ARTISTS; } catch (e) { return []; } };
  var bobby = function () { var L = A(); for (var i = 0; i < L.length; i++) if (L[i].who === "OG Bobby") return L[i]; return { who: "OG Bobby", boro: "Brooklyn", hood: "Bay Ridge" }; };
  var meta = function (a) { return [a.hood, boroOf(a)].filter(function (v, i, r) { return v && r.indexOf(v) === i; }).join(", "); };
  var bul = function (a) { return (a.trains || []).slice(0, 4).map(function (t) { var n = Array.isArray(t) ? t[0] : t, c = Array.isArray(t) ? t[1] : "#e8b84a", y = /fccc0a/i.test(c); return '<span style="display:inline-grid;place-items:center;width:15px;height:15px;border-radius:50%;background:' + c + ';color:' + (y ? "#000" : "#fff") + ';font:900 9px/1 Helvetica,Arial,sans-serif;margin-left:3px;vertical-align:-3px">' + esc(n) + '</span>'; }).join(""); };

  /* ---------- tab bar ---------- */
  var TABS = [
    { id: "map", ic: "&#128647;", t: "MAP" },
    { id: "lounge", ic: "&#127908;", t: "LOUNGE" },
    { id: "fans", ic: "&#128293;", t: "FANS", uc: 1 },
    { id: "regions", ic: "&#127758;", t: "REGIONS", uc: 1 },
    { id: "genres", ic: "&#127926;", t: "GENRES", uc: 1 }
  ];
  var app = document.querySelector(".wrap.app"), bar = document.querySelector(".appbar");
  if (!app || !bar) return;
  var nav = document.createElement("nav"); nav.className = "wtabs"; nav.setAttribute("role", "tablist");
  nav.innerHTML = TABS.map(function (t) { return '<button type="button" role="tab" data-w="' + t.id + '"' + (t.id === "map" ? ' class="on"' : "") + '><b>' + t.ic + '</b>' + t.t + (t.uc ? '<span class="uc" aria-hidden="true"></span>' : "") + '</button>'; }).join("");
  bar.insertAdjacentElement("afterend", nav);
  var dock = document.querySelector(".dock2");
  var panes = {};
  TABS.forEach(function (t) { if (t.id === "map") return; var p = document.createElement("section"); p.className = "wpane"; p.id = "w-" + t.id; p.hidden = true; app.insertBefore(p, dock); panes[t.id] = p; });

  var cur = "map";
  function go(id) {
    cur = id; LS("ogfan99tab", id);
    Array.prototype.forEach.call(nav.children, function (b) { b.classList.toggle("on", b.dataset.w === id); });
    app.classList.toggle("paneon", id !== "map");
    Object.keys(panes).forEach(function (k) { panes[k].hidden = k !== id; });
    if (id === "map") { setTimeout(function () { try { window.__map && window.__map.invalidateSize({ pan: false }); } catch (e) {} }, 30); return; }
    ({ lounge: drawLounge, fans: drawFans, regions: drawRegions, genres: drawGenres })[id]();
    panes[id].scrollTop = 0;
  }
  nav.addEventListener("click", function (e) { var b = e.target.closest("button[data-w]"); if (b) go(b.dataset.w); });
  window.OGW = { go: go };

  /* ---------- LOUNGE: artist to artist ---------- */
  var L = { sub: "friends", q: "", preview: false };
  var sampleFriends = [{ who: "Sample Artist 1", boro: "Queens", hood: "Jamaica", trains: [["E", "#0039a6"]] }, { who: "Sample Artist 2", boro: "Bronx", hood: "Mott Haven", trains: [["6", "#00933c"]] }];
  var sampleReqs = [{ who: "Sample Artist 3", boro: "Manhattan", hood: "Harlem", trains: [["A", "#0039a6"]] }];
  function pstate() { return LS("ogfan99lounge") || { sent: {}, acc: {}, chats: {} }; }
  function psave(s) { LS("ogfan99lounge", s); }

  function drawLounge() {
    var p = panes.lounge;
    var head = '<div class="wp-h"><div class="t">ARTIST LOUNGE</div><div class="s">WHERE THE ARTISTS LINK UP</div></div>';
    if (L.preview && owner()) { p.innerHTML = head + loungeInside(); wireInside(); return; }
    if (live() && !L.gate) { p.innerHTML = head + '<p class="wmsg">Loading...</p>'; OGFB.social.me().then(function (m) {
        if (!m) { L.gate = 1; drawLounge(); L.gate = 0; return; }
        if (m.none) return pickDoor(true);
        if (!m.approved) { p.innerHTML = head + '<div class="wbox"><h4>YOU\'RE ON THE LIST</h4><p>Your door is <b>' + esc(m.door) + '</b>. OG Bobby checks every artist before they get in. You\'ll be able to add OG 99 friends as soon as he approves you.</p></div><button class="wbtn dark" id="lgOut" type="button">SIGN OUT</button>'; $("lgOut").onclick = function () { OGFB.social.signOut().then(drawLounge); }; return; }
        liveInside(m);
      }).catch(function () { L.gate = 1; drawLounge(); L.gate = 0; }); return; }
    p.innerHTML = head +
      '<div class="wbox"><h4>OG 99 FRIENDS</h4><p>Every artist on the map gets a door. Inside the Lounge, artists find each other, send friend requests and talk one-on-one.</p>' +
      '<ol class="wsteps"><li>Claim your door on the map</li><li>OG Bobby approves you, so every artist in here is real</li><li>Sign in, add OG 99 friends and start talking</li></ol></div>' +
      '<button class="wbtn" id="lgClaim" type="button">ARE YOU AN ARTIST? CLAIM YOUR DOOR</button>' +
      '<button class="wbtn dark" id="lgIn" type="button">ALREADY APPROVED? SIGN IN</button>' +
      '<div class="wmsg" id="lgMsg"></div>' +
      (owner() ? '<div class="wbox"><h4>OWNER PREVIEW</h4><p>See the Lounge the way an approved artist will, signed in as you. Sample artists stand in until real artists join.</p><button class="wbtn gold" id="lgPrev" type="button">PREVIEW THE LOUNGE AS OG BOBBY</button></div>' + '<div class="wbox"><h4>DOOR CLAIMS + APPROVALS</h4><p>Artists who claim their door land here. Approve the real ones to let them into the Lounge.</p><button class="wbtn dark" id="lgAdm" type="button">OPEN APPROVALS</button></div>' : "");
    $("lgClaim").onclick = pickDoor;
    $("lgIn").onclick = function () {
      if (live()) { OGFB.social.signIn().then(function () { drawLounge(); }).catch(function () { $("lgMsg").textContent = "Sign-in didn't go through. Try again."; }); return; }
      $("lgMsg").textContent = "Sign-in opens when the Lounge goes live.";
    };
    if ($("lgPrev")) $("lgPrev").onclick = function () { L.preview = true; drawLounge(); };
    if ($("lgAdm")) $("lgAdm").onclick = drawApprovals;
  }

  /* owner only: door claims and Lounge sign-ups waiting for OG Bobby's OK (the database rules only let his Google account do this) */
  function drawApprovals() {
    var p = panes.lounge;
    p.innerHTML = '<div class="wp-h"><div class="t">APPROVALS</div><div class="s">ONLY REAL ARTISTS GET IN</div></div><div id="apBody" style="display:grid;gap:8px"></div><button class="wbtn dark" id="apBack" type="button">BACK</button>';
    $("apBack").onclick = drawLounge;
    var body = $("apBody");
    if (!live()) { body.innerHTML = '<div class="tape"><span class="uc">OPENS WITH THE LOUNGE</span><h4>HOW IT WILL WORK</h4><p>1. An artist taps CLAIM YOUR DOOR and sends their name, Instagram and email.<br>2. Their claim shows up right here.<br>3. You check their Instagram, then tap APPROVE. They can sign in and start adding OG 99 friends.</p></div>'; return; }
    body.innerHTML = '<p class="wmsg">Loading...</p>';
    OGFB.social.me().then(function (m) {
      if (!m) { body.innerHTML = '<button class="wbtn gold" id="apIn" type="button">SIGN IN AS OG BOBBY</button>'; $("apIn").onclick = function () { OGFB.social.signIn().then(drawApprovals); }; return; }
      return Promise.all([OGFB.social.claims().catch(function () { return null; }), OGFB.social.pending().catch(function () { return null; })]).then(function (r) {
        var cl = r[0], pe = r[1];
        if (cl === null && pe === null) { body.innerHTML = '<p class="wmsg">This Google account can\'t open approvals. Sign in with your own.</p>'; return; }
        var h = '<h4 style="margin:0;font-family:var(--display);letter-spacing:.1em">DOOR CLAIMS (' + (cl || []).length + ')</h4>';
        h += (cl || []).map(function (c) { return '<div class="wbox"><p><b>' + esc(c.artist) + '</b> · ' + esc(c.role) + '</p><p>' + esc(c.name) + ' · ' + esc(c.ig) + '<br>' + esc(c.email) + (c.phone ? ' · ' + esc(c.phone) : '') + '</p>' + (c.note ? '<p>' + esc(c.note) + '</p>' : '') + '</div>'; }).join("") || '<p class="wmsg">No claims yet.</p>';
        h += '<h4 style="margin:6px 0 0;font-family:var(--display);letter-spacing:.1em">WAITING TO GET IN (' + (pe || []).length + ')</h4>';
        h += (pe || []).map(function (m2) { return row({ who: m2.name, hood: m2.door }, '<button class="wbtn sm gold" type="button" data-ok="' + esc(m2.id) + '">APPROVE</button>'); }).join("") || '<p class="wmsg">Nobody waiting.</p>';
        body.innerHTML = h;
        body.onclick = function (e) { var b2 = e.target.closest("[data-ok]"); if (!b2) return; b2.disabled = true; OGFB.social.approve(b2.dataset.ok, true).then(drawApprovals); };
      });
    }).catch(function () { body.innerHTML = '<p class="wmsg">Couldn\'t load approvals. Try again.</p>'; });
  }

  function pickDoor(join) {
    var p = panes.lounge;
    p.innerHTML = '<div class="wp-h"><div class="t">' + (join ? "WHICH DOOR IS YOURS?" : "CLAIM YOUR DOOR") + '</div><div class="s">FIND YOUR NAME ON THE MAP</div></div>' +
      '<input class="lsearch" id="pdQ" placeholder="Type your artist name" autocapitalize="off" autocomplete="off">' +
      '<div id="pdList" style="display:grid;gap:6px"></div><button class="wbtn dark" id="pdBack" type="button">BACK</button>';
    var draw = function () {
      var q = $("pdQ").value.trim().toLowerCase(), out = [];
      A().forEach(function (a, i) { if (a.who === "OG Bobby") return; if (!q || a.who.toLowerCase().indexOf(q) >= 0) out.push([a, i]); });
      $("pdList").innerHTML = out.slice(0, 30).map(function (x) { return row(x[0], '<button class="wbtn sm gold" type="button" data-i="' + x[1] + '">THAT\'S ME</button>'); }).join("") || '<p class="wmsg">Not on the map yet? Message OG Bobby on Instagram to get your door.</p>';
    };
    $("pdQ").oninput = draw; draw();
    $("pdList").onclick = function (e) { var b = e.target.closest("[data-i]"); if (!b) return;
      if (join) { b.disabled = true; var a = A()[+b.dataset.i]; OGFB.social.join("artist", a.who, a.who).then(drawLounge); return; }
      if (typeof openClaim === "function") openClaim(+b.dataset.i); };
    $("pdBack").onclick = join ? function () { OGFB.social.signOut().then(drawLounge); } : drawLounge;
  }

  function row(a, acts, tag) {
    return '<div class="prow"><div class="av" style="background:' + avColor(a) + '">' + esc(initials(a.who)) + '</div><div><div class="nm">' + esc(a.who) + '</div><div class="mt">' + esc(meta(a)) + bul(a) + (tag ? '<br>' + tag : '') + '</div></div><div class="acts">' + (acts || "") + '</div></div>';
  }

  function loungeInside() {
    var me = bobby(), s = pstate(), reqs = sampleReqs.filter(function (r) { return !s.acc[r.who]; });
    var friends = sampleFriends.concat(sampleReqs.filter(function (r) { return s.acc[r.who] === 1; }));
    var subs = [["friends", "FRIENDS", 0], ["requests", "REQUESTS", reqs.length], ["find", "FIND", 0], ["fans", "MY FANS", 1], ["messages", "MESSAGES", 0]];
    var h = '<div class="prof"><div class="av" style="background:' + avColor(me) + '">OG</div><div><div class="nm">' + esc(me.who) + '</div><div class="mt">' + esc(meta(me)) + bul(me) + '<br>&#129309; ' + friends.length + ' OG 99 FRIENDS</div></div></div>' +
      '<span class="sample">PREVIEW · SAMPLE ARTISTS UNTIL THE LOUNGE GOES LIVE</span>' +
      '<div class="lsub">' + subs.map(function (x) { return '<button type="button" data-s="' + x[0] + '"' + (L.sub === x[0] ? ' class="on"' : '') + '>' + x[1] + (x[2] ? '<i>' + x[2] + '</i>' : '') + '</button>'; }).join("") + '</div><div id="lgBody" style="display:grid;gap:6px"></div>' +
      '<button class="wbtn dark" id="lgExit" type="button">EXIT PREVIEW</button>';
    return h;
  }

  function wireInside() {
    var p = panes.lounge;
    p.querySelector(".lsub").onclick = function (e) { var b = e.target.closest("[data-s]"); if (!b) return; L.sub = b.dataset.s; drawLounge(); };
    $("lgExit").onclick = function () { L.preview = false; drawLounge(); };
    var body = $("lgBody"), s = pstate();
    if (L.sub === "friends") {
      var fr = sampleFriends.concat(sampleReqs.filter(function (r) { return s.acc[r.who] === 1; }));
      body.innerHTML = fr.map(function (a) { return row(a, '<button class="wbtn sm gold" type="button" data-chat="' + esc(a.who) + '">MESSAGE</button>', "&#129309; FRIENDS"); }).join("");
    } else if (L.sub === "requests") {
      var rq = sampleReqs.filter(function (r) { return !s.acc[r.who]; });
      body.innerHTML = rq.length ? rq.map(function (a) { return row(a, '<button class="wbtn sm gold" type="button" data-acc="' + esc(a.who) + '">ACCEPT</button><button class="wbtn sm dark" type="button" data-dec="' + esc(a.who) + '">&#10005;</button>', "WANTS TO LINK"); }).join("") : '<p class="wmsg">No new friend requests.</p>';
    } else if (L.sub === "fans") {
      var muted = s.muted || {};
      body.innerHTML = '<div class="wbox"><h4>CERTIFIED FANS</h4><p>Fans who got a perfect run on your game. They see your updates. You can mute or remove anyone.</p>' +
        sampleFans.filter(function (f) { return muted[f.who] !== 2; }).map(function (f) { return row(f, muted[f.who] ? '<button class="wbtn sm dark" type="button" disabled>MUTED</button>' : '<button class="wbtn sm dark" type="button" data-mute="' + esc(f.who) + '">MUTE</button><button class="wbtn sm" type="button" data-rm="' + esc(f.who) + '">&#10005;</button>', "&#9733; CERTIFIED · " + f.n + (f.n === 1 ? " ARTIST" : " ARTISTS")); }).join("") + '</div>' +
        '<div class="wbox"><h4>FAN NOTES</h4><p>One note per fan per week, 18+ only. You decide who you write back.</p>' +
        (muted["Sample Fan 2"] ? '' : '<div class="prow" style="grid-template-columns:38px 1fr"><div class="av" style="background:#7b3fbf">SF</div><div><div class="nm">Sample Fan 2</div><div style="color:#fff;font-size:.86rem;line-height:1.3;margin:4px 0 6px">Got a perfect run on your game. Your last song is my favorite. Keep them coming!</div><div class="acts"><button class="wbtn sm gold" type="button" data-chat="Sample Fan 2">REPLY</button><button class="wbtn sm dark" type="button" data-mute="Sample Fan 2">IGNORE</button></div></div></div>') + '</div>';
    } else if (L.sub === "find") {
      body.innerHTML = '<input class="lsearch" id="lgQ" placeholder="Search artists, hoods, boroughs" autocapitalize="off" autocomplete="off" value="' + esc(L.q) + '"><div id="lgFind" style="display:grid;gap:6px"></div>';
      var draw = function () {
        var q = $("lgQ").value.trim().toLowerCase(); L.q = $("lgQ").value; var out = [];
        A().forEach(function (a) { if (a.who === "OG Bobby") return; var hay = (a.who + " " + (a.hood || "") + " " + (a.boro || "")).toLowerCase(); if (!q || hay.indexOf(q) >= 0) out.push(a); });
        $("lgFind").innerHTML = out.slice(0, 40).map(function (a) { var sent = s.sent[a.who]; return row(a, sent ? '<button class="wbtn sm dark" type="button" disabled>SENT</button>' : '<button class="wbtn sm" type="button" data-add="' + esc(a.who) + '">+ ADD</button>'); }).join("");
      };
      $("lgQ").oninput = draw; draw();
    } else {
      var names = Object.keys(s.chats).concat(sampleFriends.map(function (a) { return a.who; })).filter(function (v, i, arr) { return arr.indexOf(v) === i; });
      body.innerHTML = names.map(function (n) { var c = s.chats[n] || []; var last = c.length ? c[c.length - 1].t : "Say what's up"; var a = find(n); return row(a, '<button class="wbtn sm gold" type="button" data-chat="' + esc(n) + '">OPEN</button>', esc(last.slice(0, 26))); }).join("");
    }
    body.onclick = function (e) {
      var b = e.target.closest("button"); if (!b) return; var st2 = pstate();
      if (b.dataset.chat) return openChat(b.dataset.chat);
      if (b.dataset.acc) { st2.acc[b.dataset.acc] = 1; psave(st2); L.sub = "friends"; return drawLounge(); }
      if (b.dataset.dec) { st2.acc[b.dataset.dec] = 2; psave(st2); return drawLounge(); }
      if (b.dataset.mute || b.dataset.rm) { st2.muted = st2.muted || {}; st2.muted[b.dataset.mute || b.dataset.rm] = b.dataset.rm ? 2 : 1; psave(st2); return drawLounge(); }
      if (b.dataset.add) { st2.sent[b.dataset.add] = 1; psave(st2); b.outerHTML = '<button class="wbtn sm dark" type="button" disabled>SENT</button>'; }
    };
  }
  /* LIVE lounge: real approved artists, friend requests and chats from the online database */
  function liveInside(m) {
    var p = panes.lounge, S = OGFB.social;
    Promise.all([S.members("artist"), S.incoming(), S.friends()]).then(function (r) {
      var mem = {}; r[0].forEach(function (x) { mem[x.id] = x; }); var inc = r[1], fr = r[2];
      var door = function (x) { var n = x && (x.door || x.name); return Object.assign({}, find(n), { who: (x && x.name) || n }); };
      var me = door(m), sent = LS("ogfan99sent") || {};
      var subs = [["friends", "FRIENDS", 0], ["requests", "REQUESTS", inc.length], ["find", "FIND", 0], ["fans", "MY FANS", 0], ["messages", "MESSAGES", 0]];
      p.innerHTML = '<div class="wp-h"><div class="t">ARTIST LOUNGE</div><div class="s">WHERE THE ARTISTS LINK UP</div></div>' +
        '<div class="prof"><div class="av" style="background:' + avColor(me) + '">' + esc(initials(me.who)) + '</div><div><div class="nm">' + esc(me.who) + '</div><div class="mt">' + esc(meta(me)) + bul(me) + '<br>&#129309; ' + fr.length + ' OG 99 FRIENDS</div></div></div>' +
        '<div class="lsub">' + subs.map(function (x) { return '<button type="button" data-s="' + x[0] + '"' + (L.sub === x[0] ? ' class="on"' : '') + '>' + x[1] + (x[2] ? '<i>' + x[2] + '</i>' : '') + '</button>'; }).join("") + '</div><div id="lgBody" style="display:grid;gap:6px"></div>' +
        '<button class="wbtn dark" id="lgOut" type="button">SIGN OUT</button>';
      p.querySelector(".lsub").onclick = function (e) { var b = e.target.closest("[data-s]"); if (!b) return; L.sub = b.dataset.s; liveInside(m); };
      $("lgOut").onclick = function () { S.signOut().then(drawLounge); };
      var body = $("lgBody");
      var chatBtn = function (u) { return '<button class="wbtn sm gold" type="button" data-cu="' + esc(u) + '">MESSAGE</button>'; };
      if (L.sub === "friends" || L.sub === "messages") {
        body.innerHTML = fr.map(function (u) { return row(door(mem[u] || { name: "Artist" }), chatBtn(u), "&#129309; FRIENDS"); }).join("") || '<p class="wmsg">No OG 99 friends yet. Tap FIND ARTISTS.</p>';
      } else if (L.sub === "fans") {
        body.innerHTML = uc("CERTIFIED FANS + FAN NOTES", "Your Certified Fans and their weekly notes show up here once fan sign-in goes live.");
      } else if (L.sub === "requests") {
        body.innerHTML = inc.map(function (q) { return row(door(mem[q.from] || { name: "Artist" }), '<button class="wbtn sm gold" type="button" data-acc="' + esc(q.id) + '">ACCEPT</button><button class="wbtn sm dark" type="button" data-dec="' + esc(q.id) + '">&#10005;</button>', "WANTS TO LINK"); }).join("") || '<p class="wmsg">No new friend requests.</p>';
      } else {
        var list = r[0].filter(function (x) { return x.id !== m.id && fr.indexOf(x.id) < 0; });
        body.innerHTML = list.map(function (x) { return row(door(x), sent[x.id] ? '<button class="wbtn sm dark" type="button" disabled>SENT</button>' : '<button class="wbtn sm" type="button" data-add="' + esc(x.id) + '">+ ADD</button>'); }).join("") || '<p class="wmsg">You\'re linked with every artist in the Lounge so far.</p>';
      }
      body.onclick = function (e) {
        var b = e.target.closest("button"); if (!b || b.disabled) return; b.disabled = true;
        if (b.dataset.cu) { b.disabled = false; return openChat(door(mem[b.dataset.cu]).who, b.dataset.cu); }
        if (b.dataset.acc) return S.respond(b.dataset.acc, true).then(function () { L.sub = "friends"; liveInside(m); });
        if (b.dataset.dec) return S.respond(b.dataset.dec, false).then(function () { liveInside(m); });
        if (b.dataset.add) return S.request(b.dataset.add).then(function () { sent[b.dataset.add] = 1; LS("ogfan99sent", sent); b.textContent = "SENT"; }).catch(function () { b.disabled = false; });
      };
    }).catch(function () { p.innerHTML = '<p class="wmsg">Couldn\'t load the Lounge. Check your connection and try again.</p>'; });
  }

  function find(n) { var all = A().concat(sampleFriends, sampleReqs, sampleFans); for (var i = 0; i < all.length; i++) if (all[i].who === n) return all[i]; return { who: n }; }

  /* chat window (preview keeps messages on this phone; live mode uses the online database) */
  var chat = document.createElement("div"); chat.className = "chat"; chat.hidden = true; chat.setAttribute("role", "dialog");
  chat.innerHTML = '<div class="ch"><button type="button" id="chX" aria-label="Back">&#8592;</button><div class="av" id="chAv" style="width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font-family:var(--tag);color:#fff;border:2px solid #fff"></div><div><div class="nm" id="chNm" style="font-family:var(--tag);font-size:1.2rem;color:#fff;line-height:1"></div><div id="chMt" style="font:700 .62rem Helvetica,Arial,sans-serif;letter-spacing:.08em;color:#e8b84a"></div></div><span></span></div>' +
    '<div class="msgs" id="chMsgs"></div><div class="safe"><button type="button" id="chBlock">BLOCK</button><button type="button" id="chReport">REPORT</button></div>' +
    '<div class="cf"><textarea id="chIn" maxlength="1000" placeholder="Message"></textarea><button type="button" id="chSend">SEND</button></div>';
  document.body.appendChild(chat);
  var chWith = null, chUid = null, chOff = null;
  function openChat(n, uid) {
    chWith = n; chUid = uid || null; var a = find(n);
    if (chOff) { try { chOff(); } catch (e) {} chOff = null; }
    if (chUid) { $("chMsgs").innerHTML = ""; OGFB.social.listen(chUid, function (msgs) { var me = firebase.auth().currentUser.uid; $("chMsgs").innerHTML = '<div class="day">YOU\'RE OG 99 FRIENDS · SAY WHAT\'S UP</div>' + msgs.map(function (x) { return '<div class="bub' + (x.from === me ? " me" : "") + '">' + esc(x.text) + '</div>'; }).join(""); $("chMsgs").scrollTop = 1e6; }).then(function (off) { chOff = off; }); }
    $("chAv").textContent = initials(n); $("chAv").style.background = avColor(a); $("chNm").textContent = n; $("chMt").innerHTML = esc(meta(a)) + bul(a);
    if (!chUid) paintChat(); chat.hidden = false; setTimeout(function () { $("chIn").focus(); }, 50);
  }
  function paintChat() {
    var c = (pstate().chats[chWith] || []);
    var first = '<div class="day">YOU\'RE OG 99 FRIENDS · SAY WHAT\'S UP</div>';
    $("chMsgs").innerHTML = first + c.map(function (m) { return '<div class="bub' + (m.me ? " me" : "") + '">' + esc(m.t) + '</div>'; }).join("");
    $("chMsgs").scrollTop = 1e6;
  }
  $("chX").onclick = function () { chat.hidden = true; if (chOff) { try { chOff(); } catch (e) {} chOff = null; } if (cur === "lounge") drawLounge(); };
  $("chSend").onclick = function () {
    var t = $("chIn").value.trim(); if (!t) return;
    if (chUid) { $("chIn").value = ""; OGFB.social.send(chUid, t).catch(function () { note("COULDN'T SEND. TRY AGAIN."); $("chIn").value = t; }); return; } var s = pstate(); (s.chats[chWith] = s.chats[chWith] || []).push({ me: 1, t: t.slice(0, 1000) }); psave(s); $("chIn").value = ""; paintChat();
  };
  $("chIn").addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("chSend").click(); } });
  var note = function (t) { var d = document.createElement("div"); d.className = "day"; d.textContent = t; $("chMsgs").appendChild(d); $("chMsgs").scrollTop = 1e6; };
  $("chBlock").onclick = function () { if (chUid) OGFB.social.block(chUid); note(chUid ? "BLOCKED. THEY CAN'T MESSAGE YOU." : "PREVIEW · BLOCK WORKS WHEN THE LOUNGE GOES LIVE"); };
  $("chReport").onclick = function () { if (chUid) OGFB.social.report(chUid + " " + chWith); note(chUid ? "REPORTED. OG BOBBY WILL TAKE A LOOK." : "PREVIEW · REPORTS GO TO OG BOBBY WHEN LIVE"); };

  /* ---------- OG CERTIFIED: a perfect game connects a fan to that artist ---------- */
  /* perfect = every one of the 9 boxes cleared with 3 stars (no misses); OG Bobby's own game = all 99 right on the 99 test */
  var CERT_LV = [[1, "OG CERTIFIED"], [5, "TRUE FAN"], [10, "DEEP CUT"], [25, "HALL OF FAMER"], [50, "OG LEGEND"]];
  function certInfo(a) {
    if (a.who === "OG Bobby") { var g = LS("ogb2") || {}; var b = g.t99best || 0; return { pct: Math.min(100, Math.round(b / 99 * 100)), ok: b >= 99, played: b > 0 }; }
    if (!a.save) return { pct: 0, ok: false, played: false };
    var best = { pct: 0, ok: false, played: false };
    [a.save, a.save + "x"].forEach(function (k) {
      var v = LS(k); if (!v) return; var st = v.stars || {}, n3 = 0, any = Object.keys(st).length || Object.keys(v.cleared || {}).length;
      Object.keys(st).forEach(function (x) { if (st[x] >= 3) n3++; });
      var pct = Math.min(100, Math.round(n3 / 9 * 100)), ok = n3 >= 9;
      if (ok || pct > best.pct) best = { pct: pct, ok: ok, played: best.played || !!any };
      if (any) best.played = true;
    });
    return best;
  }
  function certs() { var out = []; A().forEach(function (a, i) { var c = certInfo(a); if (c.played) out.push({ a: a, i: i, c: c }); }); return out; }
  function certLevel(n) { var r = null, nx = CERT_LV[0]; CERT_LV.forEach(function (x, k) { if (n >= x[0]) { r = x; nx = CERT_LV[k + 1] || null; } }); return { cur: r, next: nx }; }
  window.OGCERT = { info: certInfo, all: certs };

  /* ---------- FANS: the fan side ---------- */
  var F = { sub: "me" };
  var sampleFans = [{ who: "Sample Fan 1", boro: "Brooklyn", hood: "Bensonhurst", n: 4 }, { who: "Sample Fan 2", boro: "Queens", hood: "Astoria", n: 9 }, { who: "Sample Fan 3", boro: "the Bronx", hood: "Fordham", n: 1 }];
  var RULES = ["Respect every artist and every fan. No harassment, threats, hate or bullying.",
    "No stalking: never post or ask for an artist's home, location, schedule or family.",
    "No links, phone numbers or addresses in notes or messages.",
    "Fan notes to artists: 18+ only, one note per artist per week. The artist decides if a conversation starts.",
    "Artists can mute, block or remove any fan. Removing a fan takes back that Certified badge.",
    "Two reports from different artists locks your messages until OG Bobby reviews it. Serious cases are banned for good."];
  function drawFans() {
    var p = panes.fans, list = certs(), got = list.filter(function (x) { return x.c.ok; }), lv = certLevel(got.length);
    var subs = [["me", "MY CARD"], ["certified", "CERTIFIED"], ["friends", "FAN FRIENDS"], ["wall", "FAN WALL"]];
    var h = '<div class="wp-h"><div class="t">FAN ZONE</div><div class="s">WHERE THE TRUE FANS RIDE TOGETHER</div></div>' +
      '<div class="lsub">' + subs.map(function (x) { return '<button type="button" data-f="' + x[0] + '"' + (F.sub === x[0] ? ' class="on"' : '') + '>' + x[1] + (x[0] === "certified" && got.length ? '<i>' + got.length + '</i>' : '') + '</button>'; }).join("") + '</div><div id="fzBody" style="display:grid;gap:8px"></div>';
    p.innerHTML = h;
    p.querySelector(".lsub").onclick = function (e) { var b = e.target.closest("[data-f]"); if (!b) return; F.sub = b.dataset.f; drawFans(); };
    var body = $("fzBody");
    if (F.sub === "me") {
      var metro = $("metro") ? $("metro").innerHTML : "", r = LS("ogfan99rider") || {};
      body.innerHTML = '<div class="wbox"><h4>YOUR RIDER CARD</h4>' + (metro ? '<button class="metro" type="button" id="fzMetro" style="width:100%">' + metro + '</button>' : '') +
        '<p>' + (r.name ? "Riding as <b>" + esc(r.name) + "</b>." : "Play any game to start your rider card.") + '</p></div>' +
        '<div class="prof"><div class="av" style="background:#e8b84a;color:#000">&#9733;</div><div><div class="nm">' + (lv.cur ? lv.cur[1] : "NOT CERTIFIED YET") + '</div><div class="mt">' + got.length + ' ARTIST' + (got.length === 1 ? '' : 'S') + ' CERTIFIED' + (lv.next ? ' · ' + (lv.next[0] - got.length) + ' MORE FOR ' + lv.next[1] : '') + '</div></div></div>' +
        '<div class="wbox"><h4>CONNECT WITH THE ARTISTS</h4><ol class="wsteps"><li>Play an artist\'s full game</li><li>Get a perfect run: every box, 3 stars, no misses</li><li>You\'re OG Certified. You land on that artist\'s Certified Fans wall and get their updates</li><li>18+? Send that artist one fan note a week. They choose to write back</li></ol><p>The more perfect games you finish, the more artists you\'re connected to.</p></div>' +
        '<button class="wbtn gold" id="fzGo" type="button">SEE MY CERTIFIED ARTISTS</button>' +
        '<div class="wbox"><h4>FAN RULES</h4><ol class="wsteps">' + RULES.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ol></div>';
      if ($("fzMetro")) $("fzMetro").onclick = function () { go("map"); setTimeout(function () { $("metro").click(); }, 60); };
      $("fzGo").onclick = function () { F.sub = "certified"; drawFans(); };
    } else if (F.sub === "certified") {
      var near = list.filter(function (x) { return !x.c.ok; }).sort(function (x, y) { return y.c.pct - x.c.pct; }).slice(0, 8);
      body.innerHTML = '<div class="wbox"><h4>OG CERTIFIED (' + got.length + ')</h4>' + (got.length ? got.map(function (x) { return row(x.a, '<button class="wbtn sm gold" type="button" data-play="' + x.i + '">PLAY</button>', "&#9733; CERTIFIED FAN"); }).join("") : '<p>No perfect games yet. Clear every box of an artist\'s game with 3 stars to get certified.</p>') + '</div>' +
        '<div class="wbox"><h4>ALMOST THERE</h4>' + (near.length ? near.map(function (x) { return row(x.a, '<button class="wbtn sm" type="button" data-play="' + x.i + '">GO</button>', x.c.pct + '% PERFECT'); }).join("") : '<p>Start any game on the map and it shows up here.</p>') + '</div>';
      body.onclick = function (e) { var b = e.target.closest("[data-play]"); if (!b) return; go("map"); setTimeout(function () { try { openCard(+b.dataset.play); } catch (er) {} }, 80); };
    } else if (F.sub === "friends") {
      var fs = LS("ogfan99fans") || {};
      body.innerHTML = '<span class="sample">PREVIEW · SAMPLE FANS UNTIL FAN SIGN-IN GOES LIVE</span>' +
        sampleFans.map(function (f) { return row(f, fs[f.who] ? '<button class="wbtn sm dark" type="button" disabled>SENT</button>' : '<button class="wbtn sm" type="button" data-fan="' + esc(f.who) + '">+ ADD</button>', "&#9733; " + f.n + " CERTIFIED"); }).join("") +
        uc("FAN MESSAGES", "Fan-to-fan chat comes next, with the same block, report and 18+ rules as the Lounge.");
      body.onclick = function (e) { var b = e.target.closest("[data-fan]"); if (!b) return; fs[b.dataset.fan] = 1; LS("ogfan99fans", fs); b.outerHTML = '<button class="wbtn sm dark" type="button" disabled>SENT</button>'; };
    } else {
      body.innerHTML = uc("FAN WALL", "Post your scores, call out your favorite artist and show off your badges.") +
        uc("CREWS", "Start a crew with your block, your school or your borough and play as a team.") +
        uc("FAN LEADERBOARDS", "Top fans for every artist, every borough and every region.");
    }
  }
  function uc(t, d) { return '<div class="tape"><span class="uc">UNDER CONSTRUCTION</span><h4>' + t + '</h4><p>' + d + '</p></div>'; }

  /* ---------- REGIONS: beyond NYC ---------- */
  var REGIONS = [
    { n: "NEW YORK CITY + METRO", d: "The five boroughs and the metro area. Riding now.", c: "#d62828", live: 1, wide: 1 },
    { n: "LOS ANGELES + SOCAL", d: "LA, Long Beach, Compton, Inglewood, the IE and San Diego.", c: "#f2c14e" },
    { n: "THE BAY AREA", d: "Oakland, San Francisco, Vallejo, Richmond and San Jose.", c: "#0099d8" },
    { n: "CHICAGO + MIDWEST", d: "The Chi, plus Detroit, St. Louis and Milwaukee.", c: "#00a1de" },
    { n: "DOWN SOUTH", d: "Atlanta, Houston, Memphis, New Orleans and Miami.", c: "#35b867" }
  ];
  function drawRegions() {
    var p = panes.regions;
    p.innerHTML = '<div class="wp-h"><div class="t">REGIONS</div><div class="s">EVERY CITY GETS ITS OWN MAP</div></div>' +
      '<div class="wgrid">' + REGIONS.map(function (r, i) { return '<button class="wtile' + (r.wide ? " wide" : "") + '" type="button" data-r="' + i + '"><span class="bar" style="background:' + r.c + '"></span><b>' + r.n + '</b><small>' + r.d + '</small><span class="st ' + (r.live ? "live" : "uc") + '">' + (r.live ? "LIVE · TAP TO RIDE" : "UNDER CONSTRUCTION") + '</span></button>'; }).join("") + '</div>' +
      '<div class="wmsg" id="rgMsg"></div>';
    p.querySelector(".wgrid").onclick = function (e) { var b = e.target.closest("[data-r]"); if (!b) return; var r = REGIONS[+b.dataset.r]; if (r.live) return go("map"); $("rgMsg").textContent = r.n + " is under construction. Its map is coming."; };
  }

  /* ---------- GENRES: beyond rap ---------- */
  var GENRES = [
    { n: "HIP-HOP + RAP", d: "Every game on the map right now.", c: "#d62828", live: 1, wide: 1 },
    { n: "R&B", d: "Singers and songwriters.", c: "#7b3fbf" },
    { n: "LATIN + REGGAETON", d: "Reggaeton, Latin trap, salsa and bachata.", c: "#ff6319" },
    { n: "DANCEHALL + AFROBEATS", d: "Island and African sounds.", c: "#35b867" },
    { n: "POP", d: "The hits.", c: "#e84aa0" },
    { n: "ROCK", d: "Rock, punk and metal.", c: "#e04e1b" },
    { n: "COUNTRY", d: "Country and Americana.", c: "#b5651d" },
    { n: "GOSPEL", d: "Gospel and Christian.", c: "#f2c14e" },
    { n: "DANCE + HOUSE", d: "House, EDM and club.", c: "#0099d8" }
  ];
  function drawGenres() {
    var p = panes.genres;
    p.innerHTML = '<div class="wp-h"><div class="t">GENRES</div><div class="s">EVERY SOUND GETS ITS OWN GAMES</div></div>' +
      '<div class="wgrid">' + GENRES.map(function (r, i) { return '<button class="wtile' + (r.wide ? " wide" : "") + '" type="button" data-g="' + i + '"><span class="bar" style="background:' + r.c + '"></span><b>' + r.n + '</b><small>' + r.d + '</small><span class="st ' + (r.live ? "live" : "uc") + '">' + (r.live ? "LIVE · TAP TO PLAY" : "UNDER CONSTRUCTION") + '</span></button>'; }).join("") + '</div>' +
      '<div class="wmsg" id="gnMsg"></div>';
    p.querySelector(".wgrid").onclick = function (e) { var b = e.target.closest("[data-g]"); if (!b) return; var g = GENRES[+b.dataset.g]; if (g.live) return go("map"); $("gnMsg").textContent = g.n + " is under construction."; };
  }
})();
