/* © OG Bobby / OG FAN 99 — ARTIST ROOMS (modeled on Weverse + Discord).
   Every door on the map has a Room:
   THE WALL      posts from the artist only (text + an optional YouTube link); fans react 🔥 💯 👑 and reply
   THE PLATFORM  group chat for that artist's Certified Fans (perfect run, checked by the site); everyone can read
   FAN NOTES     one note a week from 18+ Certified Fans; the artist decides who to write back
   Before the database is switched on, the Room runs as a preview (OG Bobby's Room works on the owner's phone). */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var H = function () { return (window.OGW && OGW.h) || {}; };
  var live = function () { return !!(window.OGFB && OGFB.ready() && OGFB.social); };
  var owner = function () { try { return localStorage.getItem("ogfan99owner") === "1"; } catch (e) { return false; } };
  var LS = function (k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || "null"); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } };
  /* the room id matches the game's folder, the same id the site uses for Certified Fans */
  function roomId(a) { if (a.who === "OG Bobby") return "og-bobby"; var m = /([a-z0-9]+-ogfan99-[a-z0-9]+)/.exec(a.url || ""); return m ? m[1] : "door-" + a.who.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }
  var ytId = function (t) { var m = /(?:youtu\.be\/|v=|shorts\/)([A-Za-z0-9_-]{11})/.exec(t || ""); return m ? m[1] : ""; };
  var ago = function (t) { var ms = t && t.toMillis ? t.toMillis() : +t || Date.now(), s = Math.max(1, Math.round((Date.now() - ms) / 1000));
    return s < 60 ? "JUST NOW" : s < 3600 ? Math.round(s / 60) + "M AGO" : s < 86400 ? Math.round(s / 3600) + "H AGO" : Math.round(s / 86400) + "D AGO"; };
  var EMO = [["fire", "&#128293;"], ["100", "&#128175;"], ["crown", "&#128081;"]];

  var css = [
    ".room{position:fixed;inset:0;z-index:2550;background:#0b0c14;display:flex;flex-direction:column;max-width:460px;margin:0 auto}",
    ".room[hidden]{display:none}",
    ".rm-h{flex:none;display:grid;grid-template-columns:40px 50px 1fr;gap:9px;align-items:center;padding:max(10px,env(safe-area-inset-top)) 12px 10px;background:linear-gradient(135deg,#1d2550,#151726);border-bottom:3px solid #e8b84a}",
    ".rm-h button{border:0;background:none;color:#fff;font-size:24px;cursor:pointer}",
    ".rm-av{width:50px;height:50px;border-radius:50%;display:grid;place-items:center;font-family:var(--tag);font-size:1.3rem;color:#fff;-webkit-text-stroke:.6px #000;border:2.5px solid #fff;box-shadow:0 2px 0 #000}",
    ".rm-nm{font-family:var(--tag);font-size:1.5rem;line-height:1;color:#fff;-webkit-text-stroke:.6px #000}",
    ".rm-mt{font:800 .64rem/1.4 Helvetica,Arial,sans-serif;letter-spacing:.08em;color:#e8b84a}",
    ".rm-tabs{flex:none;display:grid;grid-template-columns:repeat(3,1fr);gap:5px;padding:8px 12px;background:#151726}",
    ".rm-tabs button{border:2px solid #000;border-radius:9px;background:#1d2033;color:#fff;font:900 10px/1 Helvetica,Arial,sans-serif;letter-spacing:.08em;padding:9px 2px;cursor:pointer}",
    ".rm-tabs button.on{background:#e8b84a;color:#000}",
    ".rm-body{flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:10px 12px;display:flex;flex-direction:column;gap:10px}",
    ".rm-body>*{flex:none}",
    ".rm-post{background:#151726;border:2px solid #2c3050;border-radius:14px;padding:11px;display:grid;gap:8px;color:#fff}",
    ".rm-post .by{display:flex;justify-content:space-between;align-items:center;font:900 .7rem/1 Helvetica,Arial,sans-serif;letter-spacing:.08em;color:#e8b84a}",
    ".rm-post .tx{font-size:.95rem;line-height:1.38;white-space:pre-wrap;word-wrap:break-word}",
    ".rm-post iframe,.rm-yt{width:100%;aspect-ratio:16/9;border:0;border-radius:10px;background:#000}",
    ".rm-yt{display:grid;place-items:center;color:#fff;font:900 .8rem Helvetica,Arial,sans-serif;letter-spacing:.1em;cursor:pointer;background-size:cover;background-position:center;border:2px solid #000}",
    ".rm-yt span{background:#d62828;padding:8px 14px;border-radius:99px;border:2px solid #000}",
    ".rm-acts{display:flex;gap:6px;flex-wrap:wrap}",
    ".rm-acts button{border:1.5px solid #2c3050;border-radius:99px;background:#0b0c14;color:#fff;font:800 .78rem/1 Helvetica,Arial,sans-serif;padding:6px 9px;cursor:pointer}",
    ".rm-acts button.on{border-color:#e8b84a;background:#2a2410}",
    ".rm-rep{display:grid;gap:5px;border-top:1px solid #2c3050;padding-top:7px}",
    ".rm-rep div{font-size:.84rem;line-height:1.3;color:#fff}.rm-rep b{color:#e8b84a;margin-right:5px}",
    ".rm-comp{flex:none;display:grid;grid-template-columns:1fr auto;gap:8px;padding:10px 12px max(12px,env(safe-area-inset-bottom));background:#151726;border-top:2px solid #2c3050}",
    ".rm-comp[hidden]{display:none}",
    ".rm-comp textarea,.rm-comp input{border:2px solid #e8b84a;border-radius:12px;background:#0b0c14;color:#fff;padding:10px;font:15px Helvetica,Arial,sans-serif;resize:none;min-width:0}",
    ".rm-comp textarea::placeholder,.rm-comp input::placeholder{color:#e8b84a;opacity:.85}",
    ".rm-comp .col{display:grid;gap:6px}",
    ".rm-comp button{border:2px solid #000;border-radius:12px;background:#e8b84a;color:#000;font-family:var(--display);letter-spacing:.1em;padding:0 16px;cursor:pointer}",
    ".rm-lock{flex:none;padding:10px 12px max(12px,env(safe-area-inset-bottom));background:#151726;border-top:2px solid #2c3050;color:#fff;font:700 .8rem/1.35 Helvetica,Arial,sans-serif;text-align:center}",
    ".rm-lock b{color:#e8b84a}",
    ".rm-msg{align-self:flex-start;max-width:85%;background:#2c3050;color:#fff;padding:8px 11px;border-radius:14px;border-bottom-left-radius:4px;font-size:.92rem;line-height:1.3;white-space:pre-wrap;word-wrap:break-word}",
    ".rm-msg.me{align-self:flex-end;background:#d62828;border-bottom-left-radius:14px;border-bottom-right-radius:4px}",
    ".rm-msg.art{background:#2a2410;border:1.5px solid #e8b84a}",
    ".rm-msg small{display:block;font:900 .6rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;color:#e8b84a;margin-bottom:4px}",
    ".rm-note{color:#fff;font:700 .8rem/1.35 Helvetica,Arial,sans-serif;text-align:center;padding:4px 6px}",
    ".rm-pv{align-self:center;background:#2c3050;color:#fff;font:900 .58rem/1.3 Helvetica,Arial,sans-serif;letter-spacing:.12em;padding:4px 8px;border-radius:5px;text-align:center}",
    ".roombtn{display:block;width:100%;margin-top:8px;border:2px solid #000;border-radius:12px;padding:11px;background:#1d2033;color:#e8b84a;border-color:#e8b84a;font-family:var(--display);letter-spacing:.1em;font-size:.95rem;cursor:pointer}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var el = document.createElement("div"); el.className = "room"; el.hidden = true; el.setAttribute("role", "dialog");
  el.innerHTML = '<div class="rm-h"><button type="button" id="rmX" aria-label="Back">&#8592;</button><div class="rm-av" id="rmAv"></div><div><div class="rm-nm" id="rmNm"></div><div class="rm-mt" id="rmMt"></div></div></div>' +
    '<div class="rm-tabs" id="rmTabs"><button type="button" data-t="wall">THE WALL</button><button type="button" data-t="platform">THE PLATFORM</button><button type="button" data-t="notes">FAN NOTES</button></div>' +
    '<div class="rm-body" id="rmBody"></div><div class="rm-comp" id="rmComp" hidden></div><div class="rm-lock" id="rmLock" hidden></div>';
  document.body.appendChild(el);

  var R = { a: null, id: "", tab: "wall", off: null, me: null, isArtist: false, cert: false };
  function stop() { if (R.off) { try { R.off(); } catch (e) {} R.off = null; } }
  $("rmX").onclick = function () { stop(); el.hidden = true; };
  $("rmTabs").onclick = function (e) { var b = e.target.closest("[data-t]"); if (!b) return; R.tab = b.dataset.t; draw(); };

  /* ---------- preview store (this phone only) ---------- */
  var PK = function () { return "ogfan99room_" + R.id; };
  function pv() { var s = LS(PK()); if (!s) { s = { posts: [], plat: [] };
      if (R.a.who === "OG Bobby") { s.posts.push({ id: "p0", name: "OG FAN 99", text: "Welcome to OG Bobby's Room. The Wall is where OG Bobby posts: new songs, shows, shoutouts and perks. React and reply. Get a perfect run on the game to talk on The Platform.", t: Date.now() - 36e5, r: { fire: 3, "100": 1, crown: 2 }, mine: "", rep: [] }); }
      LS(PK(), s); } return s; }
  function pvSave(s) { LS(PK(), s); }

  function open(i) {
    var a = ARTISTS[i]; if (!a) return; stop();
    R.a = a; R.id = roomId(a); R.tab = "wall"; R.me = null; R.isArtist = false; R.cert = false;
    var h = H(); $("rmAv").textContent = h.initials ? h.initials(a.who) : "OG"; $("rmAv").style.background = h.avColor ? h.avColor(a) : "#d62828";
    $("rmNm").textContent = a.who; $("rmMt").innerHTML = esc(h.meta ? h.meta(a) : (a.hood || "")) + (h.bul ? h.bul(a) : "") + "<br>" + esc(a.who.toUpperCase()) + "'S ROOM";
    el.hidden = false;
    if (!live()) { R.isArtist = owner() && a.who === "OG Bobby"; R.cert = H().cert ? H().cert(a).ok : false; return draw(); }
    $("rmBody").innerHTML = '<p class="rm-note">Loading...</p>';
    OGFB.social.me().then(function (m) { R.me = m && !m.none ? m : null;
      R.isArtist = !!(R.me && R.me.kind === "artist" && R.me.approved && R.me.room === R.id);
      if (!R.me) return draw();
      return OGFB.social.certsMine().then(function (c) { R.cert = c.some(function (x) { return x.slug === R.id || x.artist === a.who; }); draw(); });
    }).catch(function () { draw(); });
  }
  window.OGROOM = { open: open, id: roomId };

  function tabs() { Array.prototype.forEach.call($("rmTabs").children, function (b) { b.classList.toggle("on", b.dataset.t === R.tab); }); }
  function comp(html) { $("rmComp").innerHTML = html; $("rmComp").hidden = !html; }
  function lock(html) { $("rmLock").innerHTML = html; $("rmLock").hidden = !html; }
  function draw() {
    stop(); tabs(); comp(""); lock("");
    ({ wall: drawWall, platform: drawPlat, notes: drawNotes })[R.tab]();
  }

  /* ---------- THE WALL ---------- */
  function postHTML(p, rc, mine, reps) {
    var yt = p.yt ? '<div class="rm-yt" data-yt="' + esc(p.yt) + '" style="background-image:url(https://i.ytimg.com/vi/' + esc(p.yt) + '/hqdefault.jpg)"><span>&#9654; PLAY</span></div>' : "";
    return '<div class="rm-post" data-p="' + esc(p.id) + '"><div class="by"><span>' + esc(p.name || R.a.who).toUpperCase() + '</span><span>' + ago(p.t) + '</span></div>' +
      (p.text ? '<div class="tx">' + esc(p.text) + '</div>' : "") + yt +
      '<div class="rm-acts">' + EMO.map(function (e) { return '<button type="button" data-e="' + e[0] + '"' + (mine === e[0] ? ' class="on"' : "") + '>' + e[1] + ' ' + (rc[e[0]] || 0) + '</button>'; }).join("") + '<button type="button" data-rp="1">&#128172; ' + (reps ? reps.length : 0) + '</button></div>' +
      '<div class="rm-rep" data-reps="' + esc(p.id) + '" hidden>' + (reps || []).map(function (r) { return '<div><b>' + esc(r.name) + '</b>' + esc(r.text) + '</div>'; }).join("") +
      '<div style="display:grid;grid-template-columns:1fr auto;gap:6px"><input class="lsearch" data-ri="' + esc(p.id) + '" maxlength="280" placeholder="Reply"><button class="wbtn sm gold" type="button" data-rs="' + esc(p.id) + '">SEND</button></div></div></div>';
  }
  function drawWall() {
    var body = $("rmBody");
    if (R.isArtist) comp('<div class="col"><textarea id="rmTx" rows="2" maxlength="1000" placeholder="Post to your Wall"></textarea><input id="rmYt" placeholder="YouTube link (optional)" autocapitalize="off"></div><button type="button" id="rmPost">POST</button>');
    else lock("Only <b>" + esc(R.a.who) + "</b> posts on this Wall. React and reply to join in.");
    if (!live()) {
      var s = pv();
      body.innerHTML = '<span class="rm-pv">PREVIEW · ' + (R.a.who === "OG Bobby" ? "ONLY YOU SEE THESE POSTS" : "THIS WALL OPENS WHEN " + esc(R.a.who).toUpperCase() + " CLAIMS THEIR DOOR") + '</span>' +
        (s.posts.map(function (p) { return postHTML(p, p.r || {}, p.mine, p.rep); }).join("") || '<p class="rm-note">No posts yet.</p>');
      body.onclick = function (e) {
        var y = e.target.closest("[data-yt]"); if (y) { y.outerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + y.dataset.yt + '?autoplay=1&playsinline=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>'; return; }
        var card = e.target.closest("[data-p]"); if (!card) return; var p = s.posts.filter(function (x) { return x.id === card.dataset.p; })[0]; if (!p) return;
        var eb = e.target.closest("[data-e]"); if (eb) { p.r = p.r || {}; if (p.mine) p.r[p.mine] = Math.max(0, (p.r[p.mine] || 1) - 1); p.mine = p.mine === eb.dataset.e ? "" : eb.dataset.e; if (p.mine) p.r[p.mine] = (p.r[p.mine] || 0) + 1; pvSave(s); return drawWall(); }
        if (e.target.closest("[data-rp]")) { var rp = card.querySelector("[data-reps]"); rp.hidden = !rp.hidden; return; }
        var sb = e.target.closest("[data-rs]"); if (sb) { var inp = card.querySelector("[data-ri]"), t = inp.value.trim(); if (!t || /https?:|www\./i.test(t)) return; (p.rep = p.rep || []).push({ name: "You", text: t.slice(0, 280) }); pvSave(s); drawWall(); var rr = $("rmBody").querySelector('[data-reps="' + p.id + '"]'); if (rr) rr.hidden = false; }
      };
      if ($("rmPost")) $("rmPost").onclick = function () { var t = $("rmTx").value.trim(), yt = ytId($("rmYt").value); if (!t && !yt) return; s.posts.unshift({ id: "p" + Date.now(), name: R.a.who, text: t.slice(0, 1000), yt: yt, t: Date.now(), r: {}, mine: "", rep: [] }); pvSave(s); drawWall(); };
      return;
    }
    body.innerHTML = '<p class="rm-note">Loading...</p>';
    OGFB.social.wall(R.id, function (posts) {
      if (!posts.length) { body.innerHTML = '<p class="rm-note">' + (R.isArtist ? "Your Wall is empty. Post something for your fans." : esc(R.a.who) + " hasn't posted yet.") + '</p>'; return; }
      Promise.all(posts.map(function (p) { return Promise.all([OGFB.social.reacts(R.id, p.id), OGFB.social.replies(R.id, p.id)]); })).then(function (all) {
        var me = OGFB.social.uid();
        body.innerHTML = posts.map(function (p, k) { var rc = {}, mine = ""; all[k][0].forEach(function (r) { rc[r.e] = (rc[r.e] || 0) + 1; if (r.id === me) mine = r.e; }); return postHTML(p, rc, mine, all[k][1]); }).join("");
      });
    }).then(function (off) { R.off = off; });
    body.onclick = function (e) {
      var y = e.target.closest("[data-yt]"); if (y) { y.outerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + y.dataset.yt + '?autoplay=1&playsinline=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>'; return; }
      var card = e.target.closest("[data-p]"); if (!card) return; var pid = card.dataset.p;
      if (!R.me && (e.target.closest("[data-e]") || e.target.closest("[data-rs]"))) { lock('<b>Sign in</b> in the Fan Zone to react and reply.'); return; }
      var eb = e.target.closest("[data-e]"); if (eb) { OGFB.social.react(R.id, pid, eb.dataset.e).then(drawWall); return; }
      if (e.target.closest("[data-rp]")) { var rp = card.querySelector("[data-reps]"); rp.hidden = !rp.hidden; return; }
      var sb = e.target.closest("[data-rs]"); if (sb) { var inp = card.querySelector("[data-ri]"), t = inp.value.trim(); if (!t) return; if (/https?:|www\./i.test(t)) { inp.value = ""; inp.placeholder = "No links in replies"; return; } sb.disabled = true; OGFB.social.reply(R.id, pid, R.me.name, t).then(drawWall).catch(function () { sb.disabled = false; }); }
    };
    if ($("rmPost")) $("rmPost").onclick = function () { var t = $("rmTx").value.trim(), yt = ytId($("rmYt").value); if (!t && !yt) return; $("rmPost").disabled = true; OGFB.social.post(R.id, R.a.who, t, yt).then(function () { $("rmTx").value = ""; $("rmYt").value = ""; $("rmPost").disabled = false; }).catch(function () { $("rmPost").disabled = false; }); };
  }

  /* ---------- THE PLATFORM ---------- */
  function drawPlat() {
    var body = $("rmBody"), can = R.isArtist || R.cert;
    if (can) comp('<textarea id="rmSay" rows="1" maxlength="500" placeholder="Talk to the Platform"></textarea><button type="button" id="rmSend">SEND</button>');
    else lock('Only <b>Certified Fans</b> talk on the Platform. Get a perfect run on ' + esc(R.a.who) + "'s game to join in. Everyone can read.");
    var paint = function (msgs, me) {
      body.innerHTML = '<p class="rm-note">THE PLATFORM · ' + esc(R.a.who).toUpperCase() + "'S CERTIFIED FANS</p>" + (msgs.map(function (m) { var art = m.art || (R.isArtist && m.by === me && live()); return '<div class="rm-msg' + (m.by === me ? " me" : "") + (art ? " art" : "") + '"><small>' + esc(m.name).toUpperCase() + (art ? " · ARTIST" : " · &#9733; CERTIFIED") + '</small>' + esc(m.text) + '</div>'; }).join("") || '<p class="rm-note">Nobody\'s talking yet.</p>');
      body.scrollTop = 1e6;
    };
    if (!live()) {
      var s = pv(); paint(s.plat, "me");
      if (!s.plat.length) body.insertAdjacentHTML("afterbegin", '<span class="rm-pv">PREVIEW · GOES LIVE WITH FAN SIGN-IN</span>');
      if ($("rmSend")) $("rmSend").onclick = function () { var t = $("rmSay").value.trim(); if (!t || /https?:|www\./i.test(t)) return; s.plat.push({ by: "me", name: R.isArtist ? R.a.who : "You", text: t.slice(0, 500), art: R.isArtist }); pvSave(s); drawPlat(); };
      return;
    }
    body.innerHTML = '<p class="rm-note">Loading...</p>';
    OGFB.social.platform(R.id, function (msgs) { paint(msgs, OGFB.social.uid()); }).then(function (off) { R.off = off; });
    if ($("rmSend")) $("rmSend").onclick = function () { var t = $("rmSay").value.trim(); if (!t) return; if (/https?:|www\./i.test(t)) { $("rmSay").value = ""; $("rmSay").placeholder = "No links on the Platform"; return; } $("rmSay").value = ""; OGFB.social.say(R.id, R.isArtist ? R.a.who : R.me.name, t).catch(function () { $("rmSay").value = t; }); };
    if ($("rmSay")) $("rmSay").addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("rmSend").click(); } });
  }

  /* ---------- FAN NOTES ---------- */
  function drawNotes() {
    var body = $("rmBody");
    if (R.isArtist) {
      body.innerHTML = '<div class="wbox"><h4>YOUR FAN NOTES</h4><p>Notes from your 18+ Certified Fans land in your Lounge under <b>MY FANS</b>, along with your Certified Fans wall.</p><button class="wbtn gold" id="rmToLounge" type="button">OPEN MY FANS</button></div>';
      $("rmToLounge").onclick = function () { stop(); el.hidden = true; if (window.OGW) OGW.go("lounge"); };
      return;
    }
    body.innerHTML = '<div class="wbox"><h4>SEND ' + esc(R.a.who).toUpperCase() + ' A FAN NOTE</h4><ol class="wsteps"><li>Get a perfect run on ' + esc(R.a.who) + '\'s game</li><li>Be 18 or older and signed in as a fan</li><li>One short note a week. No links, phone numbers or addresses</li></ol>' +
      '<p>' + (R.cert ? "You're Certified. Send your note from the Fan Zone." : "You're not Certified on this game yet.") + '</p>' +
      '<button class="wbtn gold" id="rmToFans" type="button">' + (R.cert ? "OPEN THE FAN ZONE" : "PLAY " + esc(R.a.who).toUpperCase()) + '</button></div>';
    $("rmToFans").onclick = function () { stop(); el.hidden = true; if (R.cert) { if (window.OGW) OGW.go("fans"); } else { var i = ARTISTS.indexOf(R.a); if (window.OGW) OGW.go("map"); setTimeout(function () { try { goArtist(i); } catch (e) {} }, 60); } };
  }

  /* ---------- doors into the Room: every artist card gets an ENTER ROOM button ---------- */
  if (typeof openCard === "function") {
    var _oc = openCard;
    openCard = function (i) { var r = _oc.apply(this, arguments); try { var c = $("card"); if (c && !c.hidden && !c.querySelector(".roombtn") && ARTISTS[i]) { var b = document.createElement("button"); b.type = "button"; b.className = "roombtn"; b.innerHTML = "&#128682; ENTER " + esc(ARTISTS[i].who).toUpperCase() + "'S ROOM"; b.onclick = function () { try { closeCard(); } catch (e) {} open(i); }; c.appendChild(b); } } catch (e) {} return r; };
  }
})();
