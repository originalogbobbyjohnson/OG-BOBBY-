/* NEMS · 99 DEEP — game logic.
   Same rules as the OG Bobby game: every song is an episode that STOPS at the end of a verse
   and asks about that verse. Right answer = the song keeps playing. Wrong answer = a different
   question from the same verse. Row 1 songs stop once, row 2 twice, row 3 three times (18 stops). */

/* ---------- the 9 episodes ----------
   cuts: the second each verse ends. qs: one pool per stop; every question in a pool is about
   the verse right before that stop. The first option is the right answer (shuffled on screen).
   An episode with no cuts yet is still being set up (its verse stops get marked by listening). */
const EPISODES = [
  { title: "Bing Bong (Remix)", id: "_3pF6_wqy7s", cuts: [58.9], qs: [[
      ["In the first verse, who's he like \"with the raw\"?", "Big Daddy Kane", "Kanye West", "Big Pun"],
      ["Who \"designed\" him in the first verse?", "Dapper Dan", "Versace", "Ralph Lauren"],
      ["He's been fresh since the class of what year?", "'93", "'03", "'83"],
      ["How much is on the watch?", "Four million", "Forty grand", "Four dollars"],
      ["How big is the mansion?", "Twenty thousand square feet", "Two thousand square feet", "Two hundred square feet"],
      ["Who does the whole first verse say \"knows\"?", "The whole Coney Island", "The whole Bronx", "The whole Internet"],
      ["Surfing in what makes it hard to breathe?", "Maybachs", "Minivans", "Taxis"],
      ["Where do they post it for the gods to see?", "The 'Gram", "The fridge", "The bulletin board"]
    ]] },
  { title: "Don't Ever Disrespect Me", id: "5JMt_oOQZBs", cuts: [56.0], qs: [[
      ["How does NEMS say to find out if he's really like that?", "Ask around the boroughs", "Google it", "Ask his barber"],
      ["What does NEMS hit 'em with across the head?", "A spiked bat", "A pillow", "A frying pan"],
      ["After the knockout, he tapped their pockets for what?", "The nightcap", "Bus fare", "The rent"],
      ["His chain has him calling what Sesame Street character?", "Snuffleupagus", "Big Bird", "Cookie Monster"],
      ["He walks around like the city is his because...", "It is", "He bought it", "He's the mayor"],
      ["What does he say he'll flame you with if you want smoke?", "The fifth", "A lighter", "A birthday candle"]
    ]] },
  { title: "Where You Know Me From", id: "xTWp-aeE794", cuts: [133.0], qs: [[
      ["What do guys fresh off parole eat for their first meal?", "Ramen noodles", "Steak", "Pizza"],
      ["Where's NEMS sipping Zimas with a Cuban cigar?", "Palm Beach", "Miami", "Las Vegas"],
      ["Where's the Coney Island legend's statue?", "In front of Nathan's", "On the boardwalk", "By the Cyclone"],
      ["It's FYL until when?", "The casket drops", "The sun comes up", "The party's over"],
      ["What car is the hater sitting in?", "A Wraith", "A Bentley", "A Honda"],
      ["Who did NEMS tell to \"get in your place\"?", "Gunther", "Gary", "Gus"]
    ]] },
  { title: "Bing Bong", id: "99Km36i5gJE", cuts: [], qs: [] },
  { title: "Nathan's", id: "zrJSy0sR5VE", cuts: [], qs: [] },
  { title: "Gahbage", id: "pIkDmgeUhXY", cuts: [], qs: [] },
  { title: "Timb Boots", id: "QoGD5baPwx4", cuts: [], qs: [] },
  { title: "Blicky", id: "A5uAk8gjAn8", cuts: [], qs: [] },
  { title: "Keep On", id: "nyvR95qocNY", cuts: [], qs: [] }
];
/* stops per row: 1, 2, 3 */
const STOPS = [1, 1, 1, 2, 2, 2, 3, 3, 3];
const ROWS = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const RANKS = ["New Fan", "Real Fan", "Day One"];
const TOTAL_STOPS = STOPS.reduce((a, b) => a + b, 0);   // 18
const JUICE_EACH = 550;                                  // 18 stops x 550 = 9,900
const ready = e => e.cuts.length > 0;

/* Social links (front page + menu) */
const SOCIALS = [
  { name: "Instagram", handle: "@nems_fyl", url: "https://www.instagram.com/nems_fyl/", icon: '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' },
  { name: "YouTube", handle: "@GorillaNEMS", url: "https://www.youtube.com/@GorillaNEMS", icon: '<path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z"/>' },
  { name: "TikTok", handle: "@nems_fyl", url: "https://www.tiktok.com/@nems_fyl", icon: '<path d="M16.6 3c.4 2 1.7 3.4 3.9 3.6v3a7 7 0 0 1-3.9-1.2v6.2a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.8 2.4V3z"/>' }
];

/* Graffiti-style 9 with a straight stem, no hook */
function nine() {
  const g = (c, d) => '<g transform="translate(' + d + ' ' + d + ')" fill="none" stroke="' + c + '" stroke-width="12" stroke-linecap="round"><ellipse cx="31" cy="29" rx="19" ry="21" transform="rotate(-8 31 29)"/><path d="M49 30 L42 86"/></g>';
  return '<svg class="nine" viewBox="-4 -4 72 100" aria-hidden="true">' + g("#000", 4) + g("#d62828", 0) + '</svg>';
}

const $ = id => document.getElementById(id);
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = {
  get() { try { return JSON.parse(localStorage.getItem("deep99nems2") || "{}"); } catch (e) { return {}; } },
  set(v) { try { localStorage.setItem("deep99nems2", JSON.stringify(v)); } catch (e) {} }
};
const FRESH = () => ({ seenHow: true, gates: {}, qv: {}, misses: {}, stars: {}, cleared: {}, juice: 0, streak: 0, best: 0, bongs: 0, daily: "", secrets: {}, chalBest: null });
let state = Object.assign(FRESH(), { seenHow: false }, store.get());
const save = () => store.set(state);

const gatesOf = k => state.gates[k] || 0;                      // stops passed in episode k
const isCleared = k => !!state.cleared[k];
const isOpen = k => k === 0 || isCleared(k - 1);               // song 1 free, each cleared episode opens the next
const stopsPassed = () => Object.keys(state.gates).reduce((n, k) => n + Math.min(state.gates[k], STOPS[k]), 0);
const rowsDone = () => ROWS.filter(r => r.every(isCleared)).length;
const allDone = () => EPISODES.every((e, k) => isCleared(k));
const rankName = () => allDone() ? "99 DEEP" : rowsDone() ? RANKS[rowsDone() - 1] : "New Face";
const fmt = t => Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0");

function toast(t) { const el = $("toast"); el.textContent = t; el.classList.add("on"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("on"), 2200); }

/* ---------- panels ---------- */
let pIdx = 0;
function goPanel(i) {
  pIdx = Math.max(0, Math.min(3, i));
  $("track").style.transform = "translateX(" + (-100 * pIdx) + "%)";
  document.querySelectorAll(".tab").forEach((t, k) => t.classList.toggle("on", k === pIdx));
  $("prev").disabled = pIdx === 0; $("next").disabled = pIdx === 3;
  if (pIdx === 3) renderTrophies();
}
$("prev").onclick = () => goPanel(pIdx - 1);
$("next").onclick = () => goPanel(pIdx + 1);
document.querySelectorAll(".tab").forEach(t => t.onclick = () => goPanel(+t.dataset.i));
(function swipe() {
  let x0 = null, y0 = null;
  const vp = $("viewport");
  vp.addEventListener("touchstart", e => { if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; } }, { passive: true });
  vp.addEventListener("touchend", e => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) goPanel(pIdx + (dx < 0 ? 1 : -1));
  }, { passive: true });
})();

/* ---------- board: 9 episodes in 3 rows; each row shows how many stops its songs have ---------- */
function renderMeter() {
  const m = $("meter"); m.innerHTML = "";
  ROWS.forEach((row, r) => {
    const el = document.createElement("div"); el.className = "row";
    const nextUp = EPISODES.findIndex((e, k) => !isCleared(k));
    el.innerHTML = '<div class="boxes">' + row.map(k => '<div class="lv' + (isCleared(k) ? " done" : k === nextUp ? " now" : "") + '">' + (k + 1) + '</div>').join("") + '</div>' +
      '<div class="rank' + (row.every(isCleared) ? " got" : "") + '">' + RANKS[r] + '</div>' +
      '<div class="per">' + (r + 1) + (r ? " stops" : " stop") + ' a song</div>';
    m.append(el);
  });
  $("topRank").classList.toggle("got", allDone());
  $("qCount").textContent = stopsPassed();
  $("juice").textContent = state.juice.toLocaleString();
}

function renderSongs() {
  const ul = $("songs"); ul.innerHTML = "";
  EPISODES.forEach((e, k) => {
    const li = document.createElement("li"); li.className = "song" + (k === current ? " playing" : "");
    const open = isOpen(k);
    const stops = STOPS[k] + (STOPS[k] > 1 ? " stops" : " stop");
    li.innerHTML = '<span class="n">' + (k + 1) + '</span><span class="t"></span><span class="s' + (isCleared(k) ? " open" : "") + '">' +
      (isCleared(k) ? "Cleared" : open ? stops : "Locked") + '</span>';
    const t = li.querySelector(".t");
    if (open) { const b = document.createElement("button"); b.type = "button"; b.textContent = e.title; b.onclick = () => playSong(k); t.append(b); }
    else t.textContent = e.title;
    ul.append(li);
  });
}

/* ---------- the question card on the Play screen ---------- */
const poolOf = (k, g) => (EPISODES[k].qs[g] || []);
const curQ = (k, g) => { const p = poolOf(k, g), id = k + "|" + g; if (state.qv[id] == null) { state.qv[id] = Math.floor(Math.random() * p.length); save(); } return p[state.qv[id] % p.length]; };
let atStop = false;
function shuffle(a) { return a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]); }

function renderCard() {
  const body = $("qBody");
  if (current < 0) { $("qLevel").textContent = ""; $("qNum").textContent = ""; body.innerHTML = '<div class="listen">Tap the record to start Episode 1.</div>'; return; }
  const e = EPISODES[current], g = gatesOf(current), n = STOPS[current];
  const row = Math.floor(current / 3);
  $("qLevel").textContent = RANKS[row].toUpperCase() + " ROW";
  $("qNum").textContent = isCleared(current) ? "CLEARED" : "STOP " + Math.min(g + 1, n) + " OF " + n;
  document.querySelector("#pPlay .qcard").classList.toggle("boss", current === 8 && !isCleared(current));
  if (!ready(e)) {
    body.innerHTML = '<div class="listen">The verse stops for this episode are being set. Enjoy the song.</div>' +
      (isCleared(current) ? "" : '<button class="next" id="skipEp" type="button">Clear this episode (pitch preview)</button>');
    if ($("skipEp")) $("skipEp").onclick = () => { for (let i = gatesOf(current); i < STOPS[current]; i++) passStop(current, false); };
    return;
  }
  if (isCleared(current) || !atStop) {
    const next = e.cuts[g];
    body.innerHTML = '<div class="listen">' + (isCleared(current) ? "Episode cleared. The whole song is yours."
      : next != null ? "Listen close. The song stops at " + fmt(next) + " and asks about that verse." : "Keep listening.") + '</div>';
    return;
  }
  const q = curQ(current, g);
  body.innerHTML = '<div class="qtext"></div><div class="opts"></div>';
  body.querySelector(".qtext").textContent = q[0];
  const box = body.querySelector(".opts");
  shuffle([1, 2, 3]).forEach(i => {
    const b = document.createElement("button"); b.type = "button"; b.className = "opt"; b.textContent = q[i];
    b.onclick = () => {
      if (b.disabled) return;
      if (i === 1) {
        box.querySelectorAll("button").forEach(x => x.disabled = true); b.classList.add("right"); SFX.right(); gotRight();
        setTimeout(() => passStop(current, true), 500);
      } else {
        b.classList.add("wrong"); box.querySelectorAll("button").forEach(x => x.disabled = true); SFX.wrong(); gotWrong(current);
        toast("NOT QUITE. HERE'S ANOTHER ONE FROM THAT VERSE.");
        const id = current + "|" + g; state.qv[id] = (state.qv[id] || 0) + 1; save();
        setTimeout(renderCard, 1100);
      }
    };
    box.append(b);
  });
}

function gotRight() {
  state.streak++; state.best = Math.max(state.best, state.streak);
  if (state.streak % 5 === 0) { state.bongs += 1; SFX.streak(); toast("HOT STREAK x" + state.streak + " · +1 BING BONG"); }
  save(); renderStreak();
}
function gotWrong(k) { state.streak = 0; state.misses[k] = (state.misses[k] || 0) + 1; save(); renderStreak(); }
function renderStreak() { $("streakLine").innerHTML = state.streak >= 2 ? "HOT STREAK <b>x" + state.streak + "</b>" : ""; }
const starsFor = k => { const m = state.misses[k] || 0; return m === 0 ? 3 : m <= 2 ? 2 : 1; };
const starHTML = n => [0, 1, 2].map(i => i < n ? "<i>★</i>" : "★").join("");

/* a stop is passed: count it, then keep the song going (or clear the episode) */
function passStop(k, scored) {
  const rowsBefore = rowsDone();
  state.gates[k] = gatesOf(k) + 1;
  if (scored) state.juice += JUICE_EACH;
  atStop = false;
  const done = gatesOf(k) >= STOPS[k];
  if (done) { state.cleared[k] = 1; state.stars[k] = starsFor(k); }
  save(); renderAll();
  if (done) {
    const rankUp = rowsDone() > rowsBefore ? RANKS[rowsDone() - 1] : null;
    episodeCleared(k, rankUp);
  } else if (player && ready(EPISODES[k])) { player.playVideo(); }
}

function episodeCleared(k, rankUp) {
  SFX.cleared();
  const finale = allDone();
  const next = EPISODES[k + 1];
  showModal(
    '<div class="k">' + (k === 8 ? "BOSS EPISODE BEATEN" : RANKS[Math.floor(k / 3)].toUpperCase() + " ROW") + '</div>' +
    '<h3>EPISODE ' + (k + 1) + ' CLEARED</h3>' +
    '<div class="stars">' + starHTML(state.stars[k]) + '</div>' +
    '<p style="margin:0">' + (finale ? "You went 99 DEEP. The 99 Challenge is open." : next ? "Episode " + (k + 2) + " unlocked: <b>" + esc(next.title) + "</b>" + (STOPS[k + 1] > STOPS[k] ? "<br>Heads up: songs in this row stop " + (STOPS[k + 1] === 2 ? "twice" : "three times") + "." : "") : "") + '</p>' +
    '<div style="display:grid;gap:8px"><button class="big-btn" id="mGo" type="button">' + (finale ? "TAKE THE 99 CHALLENGE" : "PLAY EPISODE " + (k + 2)) + '</button>' +
    (ready(EPISODES[k]) && !finale ? '<button class="next" id="mStay" type="button">Keep listening to this one</button>' : '') + '</div>',
    () => { if (rankUp) setTimeout(() => promote(rankUp), 250); });
  $("mGo").onclick = () => { closeModal(); if (finale) startChallenge(false); else playSong(k + 1); };
  if ($("mStay")) $("mStay").onclick = () => { closeModal(); if (player) player.playVideo(); };
}

let promoT = null;
function promote(name) {
  SFX.stamp();
  $("promoName").textContent = name.toUpperCase();
  $("promo").classList.add("on");
  clearTimeout(promoT); promoT = setTimeout(() => $("promo").classList.remove("on"), 5000);
}
$("promoX").onclick = () => { clearTimeout(promoT); $("promo").classList.remove("on"); };

let onModalClose = null;
function showModal(html, onClose) {
  $("mcard").innerHTML = '<button class="x" type="button" id="mX" aria-label="Close">✕</button>' + html;
  $("modal").hidden = false; onModalClose = onClose || null;
  $("mX").onclick = closeModal;
}
function closeModal() { $("modal").hidden = true; const f = onModalClose; onModalClose = null; if (f) f(); }
$("modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });

/* ---------- player: the record opens the cabinet, the video stops at each verse ---------- */
let current = -1, player = null, ytReady = false, pending = null, watch = null;
const setPlaying = on => {
  $("playIcon").innerHTML = on ? '<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>' : '<path d="M8 5v14l11-7z"/>';
  $("record").classList.toggle("spin", on);
  $("hint").textContent = on && current > -1 ? "Now playing: " + EPISODES[current].title : atStop ? "Answer the question to keep it going" : "Tap the record to play";
};
window.onYouTubeIframeAPIReady = () => { ytReady = true; if (pending != null) { const k = pending; pending = null; playSong(k); } };
(function () { const t = document.createElement("script"); t.src = "https://www.youtube.com/iframe_api"; document.head.append(t); })();

/* watch the clock: when the song reaches the next verse stop, pause and ask */
function startWatch() {
  clearInterval(watch);
  watch = setInterval(() => {
    if (!player || !player.getCurrentTime || current < 0 || atStop) return;
    const e = EPISODES[current];
    if (!ready(e) || isCleared(current)) return;
    const g = gatesOf(current), cut = e.cuts[g];
    if (cut == null) return;
    const t = player.getCurrentTime();
    if (t >= cut) {
      player.pauseVideo();
      atStop = true; SFX.chime(0); renderCard(); goPanel(1); setPlaying(false);
    } else if (t < cut - 0.3 && g > 0 && t < e.cuts[g - 1] - 1) {
      // they scrubbed back behind a stop they already passed: fine, just keep listening
    }
  }, 200);
}
/* no skipping ahead past a stop that hasn't been answered */
function guardSeek() {
  if (!player || current < 0 || isCleared(current)) return;
  const e = EPISODES[current], cut = e.cuts[gatesOf(current)];
  if (cut != null && player.getCurrentTime() > cut + 1.5) { player.seekTo(Math.max(0, cut - 0.5), true); }
}

function showEpisode(k) { $("epNum").textContent = "EPISODE " + (k + 1) + " · " + STOPS[k] + (STOPS[k] > 1 ? " STOPS" : " STOP"); $("epName").textContent = EPISODES[k].title; }
function playSong(k) {
  const e = EPISODES[k];
  if (!isOpen(k)) { toast("CLEAR EPISODE " + k + " FIRST"); return; }
  const same = k === current;
  current = k; atStop = false; renderSongs(); showEpisode(k); renderCard();
  goPanel(1);
  $("doors").classList.add("open");
  if (!ytReady) { pending = k; return; }
  /* start where the last passed stop left off */
  const from = isCleared(k) || !ready(e) ? 0 : (gatesOf(k) ? e.cuts[gatesOf(k) - 1] : 0);
  if (!player) {
    player = new YT.Player("yt", {
      videoId: e.id, playerVars: { playsinline: 1, rel: 0, modestbranding: 1, start: Math.floor(from) },
      events: {
        onReady: ev => { ev.target.playVideo(); startWatch(); },
        onStateChange: ev => { setPlaying(ev.data === YT.PlayerState.PLAYING); if (ev.data === YT.PlayerState.PLAYING) guardSeek(); },
        onError: () => { setPlaying(false); toast("THIS VIDEO WON'T PLAY HERE"); }
      }
    });
  } else if (same && !atStop) { player.playVideo(); }
  else player.loadVideoById({ videoId: e.id, startSeconds: from });
}
const newestOpen = () => { let k = 0; EPISODES.forEach((e, i) => { if (isOpen(i)) k = i; }); return k; };
$("record").onclick = () => {
  SFX.unlock();
  if (atStop) { goPanel(1); toast("ANSWER TO KEEP IT GOING"); return; }
  if (player && player.getPlayerState && player.getPlayerState() === YT.PlayerState.PLAYING) { player.pauseVideo(); return; }
  if (player && current > -1 && player.getPlayerState() === YT.PlayerState.PAUSED) { player.playVideo(); goPanel(1); return; }
  playSong(current > -1 ? current : newestOpen());
};
$("doorPlay").onclick = () => { SFX.unlock(); playSong(current > -1 ? current : newestOpen()); };

/* ---------- daily question: one a day from the verse pools, pays a Bing Bong ---------- */
const today = () => new Date().toISOString().slice(0, 10);
const ALLQ = EPISODES.flatMap(e => e.qs.flat());
function renderExtras() {
  const doneToday = state.daily === today();
  $("dailyBtn").classList.toggle("ready", !doneToday);
  $("dailySub").textContent = doneToday ? "Done today · come back tomorrow" : "1 free Bing Bong a day";
  $("chalBtn").classList.toggle("gold", allDone());
  $("chalSub").textContent = allDone() ? (state.chalBest != null ? "Best: " + state.chalBest + " right" : "Unlocked · go 99 deep") : "Clear all 9 to unlock";
}
function quizModal(kicker, q, onDone) {
  showModal('<div class="k">' + kicker + '</div><div class="qtext">' + esc(q[0]) + '</div><div class="opts" id="dOpts"></div>');
  shuffle([1, 2, 3]).forEach(i => {
    const b = document.createElement("button"); b.type = "button"; b.className = "opt"; b.textContent = q[i]; b.dataset.i = i;
    b.onclick = () => {
      $("dOpts").querySelectorAll("button").forEach(x => { x.disabled = true; if (x.dataset.i === "1") x.classList.add("right"); });
      if (i !== 1) b.classList.add("wrong");
      onDone(i === 1);
    };
    $("dOpts").append(b);
  });
}
$("dailyBtn").onclick = () => {
  if (state.daily === today()) { toast("COME BACK TOMORROW"); return; }
  const d = today(), seed = [...d].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  quizModal("DAILY QUESTION · " + d, ALLQ[seed % ALLQ.length], ok => {
    state.daily = d; if (ok) { state.bongs += 1; SFX.right(); toast("+1 BING BONG"); } else { SFX.wrong(); toast("TOMORROW'S ANOTHER SHOT"); }
    save(); renderExtras(); setTimeout(closeModal, 1400);
  });
};

/* ---------- secret spots: tap the tags up top ---------- */
["sec0", "sec1", "sec2"].forEach((id, i) => {
  $(id).style.cursor = "pointer";
  $(id).addEventListener("click", () => {
    if (state.secrets[i]) return;
    state.secrets[i] = 1; state.bongs += 2; save();
    if (i === 0) SFX.chime(0); else SFX.streak();
    toast("SECRET SPOT " + Object.keys(state.secrets).length + "/3 · +2 BING BONGS");
  });
});

/* ---------- trophy case + share card ---------- */
function renderTrophies() {
  $("starGrid").innerHTML = EPISODES.map((e, k) => '<div class="tcell">EP ' + (k + 1) + '<div class="st">' + (state.stars[k] ? starHTML(state.stars[k]) : "★★★") + '</div></div>').join("");
  $("tRank").textContent = rankName().toUpperCase();
  $("tBongs").textContent = state.bongs;
  $("tStreak").textContent = state.best;
  $("tSecrets").textContent = Object.keys(state.secrets).length + " / 3";
  $("tChal").textContent = state.chalBest != null ? state.chalBest + " right" : "—";
}
$("shareBtn").onclick = async () => {
  try { await Promise.all([document.fonts.load('120px "Sedgwick Ave Display"'), document.fonts.load("120px Anton")]); } catch (e) {}
  const c = document.createElement("canvas"); c.width = 1080; c.height = 1350; const g = c.getContext("2d");
  const grd = g.createRadialGradient(540, 300, 50, 540, 500, 1100); grd.addColorStop(0, "#3a1066"); grd.addColorStop(1, "#07070d");
  g.fillStyle = grd; g.fillRect(0, 0, 1080, 1350);
  g.strokeStyle = "#d62828"; g.lineWidth = 16; g.strokeRect(40, 40, 1000, 1270);
  g.textAlign = "center"; g.lineJoin = "round";
  const tagText = (t, y, size, color, rot) => { g.save(); g.translate(540, y); g.rotate(rot); g.font = size + 'px "Sedgwick Ave Display", cursive'; g.lineWidth = Math.max(6, size / 16); g.strokeStyle = "#000"; g.strokeText(t, 0, 0); g.fillStyle = color; g.fillText(t, 0, 0); g.restore(); };
  tagText("NEMS", 300, 200, "#38e8ff", -0.06);
  tagText("BING BONG", 440, 84, "#ff3d7f", -0.04);
  g.fillStyle = "#fff"; g.font = '64px Anton, Impact, sans-serif'; g.fillText("I'M RANKED", 540, 610);
  g.fillStyle = "#e0a52c"; g.font = '150px Anton, Impact, sans-serif'; g.fillText(rankName().toUpperCase(), 540, 780);
  g.fillStyle = "#fff"; g.font = '54px Barlow, sans-serif'; g.fillText(state.juice.toLocaleString() + " Juice · " + EPISODES.filter((e, k) => isCleared(k)).length + " of 9 episodes", 540, 880);
  g.fillStyle = "#e0a52c"; g.font = '70px sans-serif'; g.fillText(EPISODES.map((e, k) => state.stars[k] ? "★" : "☆").join(" "), 540, 990);
  g.fillStyle = "#fff"; g.font = '58px Anton, Impact, sans-serif'; g.fillText("CAN YOU GO 99 DEEP?", 540, 1150);
  tagText("FYL", 540, 1260, "#fccc0a", 0.05);
  showModal('<div class="k">SHARE MY RANK</div><img alt="Your NEMS rank card" src="' + c.toDataURL("image/png") + '"><p style="margin:0;font-size:.9rem">Press and hold the card to save it, then post it to your story.</p>');
};

/* ---------- the 99 Challenge: every verse question back to back ---------- */
let ch = null;
function confetti(n) {
  const colors = ["#ff3d7f", "#38e8ff", "#fccc0a", "#5ee27a", "#d62828", "#fff"];
  for (let i = 0; i < n; i++) {
    const d = document.createElement("i"); d.className = "conf";
    d.style.left = Math.random() * 100 + "%"; d.style.background = colors[i % colors.length];
    d.style.animationDuration = (1.8 + Math.random() * 1.8) + "s"; d.style.animationDelay = (Math.random() * .6) + "s";
    $("chal").append(d); setTimeout(() => d.remove(), 4200);
  }
}
function flying99() {
  for (let i = 0; i < 14; i++) {
    const f = document.createElement("div"); f.className = "flying";
    f.innerHTML = i % 3 ? nine() + nine() : "DEEP";
    f.style.left = "50%"; f.style.top = "40%"; f.style.fontSize = (20 + Math.random() * 30) + "px";
    const a = Math.random() * Math.PI * 2; f.style.setProperty("--dx", Math.cos(a) * 60 + "vw"); f.style.setProperty("--dy", Math.sin(a) * 60 + "vh");
    f.style.animationDelay = (i * 0.08) + "s";
    $("chal").append(f); setTimeout(() => f.remove(), 3200);
  }
}
function startChallenge(demo) {
  if (!demo && !allDone()) { toast("CLEAR ALL 9 EPISODES FIRST"); return; }
  if (player && player.pauseVideo) player.pauseVideo();
  ch = { order: shuffle(ALLQ.slice()), i: 0, right: 0, demo };
  $("chal").hidden = false;
  $("chalIn").innerHTML = '<div class="big99">' + nine() + nine() + '</div><h2>THE 99 CHALLENGE</h2><p>Every question from every verse, back to back. No song, no hints.</p>' +
    (ALLQ.length < 99 ? '<p style="font-size:.85rem">' + ALLQ.length + ' of 99 questions are written so far.</p>' : '') +
    '<button class="big-btn" id="chGo" type="button">GO 99 DEEP</button><button class="next" id="chQuit" type="button">Not now</button>';
  SFX.fanfare99(); flying99();
  $("chGo").onclick = chalQuestion; $("chQuit").onclick = endChallenge;
}
function chalQuestion() {
  if (ch.i >= ch.order.length) return chalDone();
  const q = ch.order[ch.i];
  $("chalIn").innerHTML = '<div class="qhead" style="display:flex;justify-content:space-between"><span>99 CHALLENGE</span><span>' + (ch.i + 1) + ' / ' + ch.order.length + ' · ' + ch.right + ' right</span></div>' +
    '<div class="chal-bar"><i style="width:' + (100 * ch.i / ch.order.length) + '%"></i></div>' +
    '<div class="qcard"><div class="qtext"></div><div class="opts" id="cOpts"></div></div><button class="next" id="chQuit" type="button">Quit challenge</button>';
  $("chalIn").querySelector(".qtext").textContent = q[0];
  shuffle([1, 2, 3]).forEach(i => {
    const b = document.createElement("button"); b.type = "button"; b.className = "opt"; b.textContent = q[i]; b.dataset.i = i;
    b.onclick = () => {
      $("cOpts").querySelectorAll("button").forEach(x => { x.disabled = true; if (x.dataset.i === "1") x.classList.add("right"); });
      if (i === 1) { SFX.right(); ch.right++; } else { b.classList.add("wrong"); SFX.wrong(); }
      ch.i++; setTimeout(chalQuestion, 650);
    };
    $("cOpts").append(b);
  });
  $("chQuit").onclick = endChallenge;
}
function chalDone() {
  if (!ch.demo) { state.chalBest = Math.max(state.chalBest || 0, ch.right); save(); renderExtras(); }
  $("chalIn").innerHTML = '<div class="big99">' + nine() + nine() + '</div><h2>' + ch.right + ' / ' + ch.order.length + '</h2><p>' + (ch.right === ch.order.length ? "PERFECT. You went all the way 99 DEEP." : "Run it back and go deeper.") + '</p>' +
    '<button class="big-btn" id="chAgain" type="button">RUN IT BACK</button><button class="next" id="chQuit" type="button">Back to the game</button>';
  SFX.fanfare99(); flying99(); confetti(70);
  $("chAgain").onclick = () => startChallenge(ch.demo); $("chQuit").onclick = endChallenge;
}
function endChallenge() { $("chal").hidden = true; ch = null; }
$("chalBtn").onclick = () => startChallenge(false);

/* ---------- menu ---------- */
const socialLink = s => '<a href="' + s.url + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true">' + s.icon + '</svg><span>' + s.name + '<small>' + s.handle + '</small></span></a>';
$("menuLinks").innerHTML = SOCIALS.map(socialLink).join("");
$("socialsW").innerHTML = SOCIALS.map(s => '<a class="soc" href="' + s.url + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true">' + s.icon + '</svg>' + s.handle + '</a>').join("");
const openMenu = on => { $("menu").hidden = !on; $("scrim").hidden = !on; };
$("menuBtn").onclick = () => openMenu(true);
$("menuX").onclick = () => openMenu(false);
$("scrim").onclick = () => openMenu(false);
$("chalDemo").onclick = () => { openMenu(false); startChallenge(true); };
const paintSound = () => { $("soundBtn").textContent = SFX.on ? "ON" : "OFF"; $("soundBtn").classList.toggle("off", !SFX.on); };
$("soundBtn").onclick = () => { SFX.set(!SFX.on); paintSound(); if (SFX.on) SFX.right(); };
paintSound();
$("replayHow").onclick = () => { openMenu(false); if (player && player.pauseVideo) player.pauseVideo(); howI = 0; showHow(); $("how").hidden = false; };

/* restart: same spot on every screen, tap twice to confirm */
$("restart").onclick = () => {
  const b = $("restart");
  if (!b.dataset.sure) { b.dataset.sure = "1"; b.textContent = "Tap again"; setTimeout(() => { delete b.dataset.sure; b.textContent = "Restart"; }, 3000); return; }
  delete b.dataset.sure; b.textContent = "Restart";
  if (player && player.stopVideo) player.stopVideo();
  state = FRESH(); save(); current = -1; atStop = false;
  $("doors").classList.remove("open"); showEpisode(0); goPanel(0); renderAll(); toast("NEW GAME");
};

/* ---------- welcome + how to play (Coney Island rooms) ---------- */
const SC = window.CONEY_SCENES;
const HOW = [
  { s: SC.train, t: "PRESS PLAY", x: "Last stop, Coney Island. Tap the record. Every song is an episode." },
  { s: SC.cyclone, t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going." },
  { s: SC.wheel, t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times." },
  { s: SC.parachute, t: "CLIMB THE RANKS", x: "Clear a row of 3 to rank up: New Fan, Real Fan, Day One. Clear all 9 to go 99 DEEP." },
  { s: SC.corner, t: "WELCOME TO THE BLOCK", x: "Mermaid Avenue and West 16th Street. This is NEMS's game." }
];
let howI = 0;
function showHow() {
  const h = HOW[howI];
  $("howScene").innerHTML = h.s();
  SFX.stop();
  ({ 0: SFX.train, 1: SFX.coaster, 2: SFX.organ, 3: SFX.parachute, 4: SFX.spray })[howI]();
  $("howTitle").textContent = h.t; $("howText").textContent = h.x;
  $("howDots").innerHTML = HOW.map((_, i) => '<i class="' + (i === howI ? "on" : "") + '"></i>').join("");
  $("howNext").textContent = howI === HOW.length - 1 ? "START PLAYING" : "NEXT";
}
$("howNext").onclick = () => {
  if (howI < HOW.length - 1) { howI++; showHow(); return; }
  SFX.stop(); state.seenHow = true; save(); $("how").hidden = true; $("game").hidden = false;
};
$("enter").onclick = () => {
  $("welcome").hidden = true;
  SFX.unlock();
  if (state.seenHow) {
    $("game").hidden = false;
    if (stopsPassed() > 0) {
      const c = EPISODES.filter((e, k) => isCleared(k)).length;
      showModal('<div class="k">WELCOME BACK</div><h3>PREVIOUSLY ON NEMS…</h3><p style="margin:0">' +
        (c ? "You cleared " + c + " episode" + (c > 1 ? "s" : "") + " and you're ranked <b>" + esc(rankName()) + "</b>." : "You were partway into Episode 1.") +
        ' Juice: <b>' + state.juice.toLocaleString() + '</b>.</p><button class="big-btn" id="mGo" type="button">PICK UP WHERE YOU LEFT OFF</button>');
      $("mGo").onclick = closeModal;
    }
    return;
  }
  howI = 0; showHow(); $("how").hidden = false;
};

/* small Cyclone silhouette behind the header */
(function () {
  const pts = [[0, 60], [40, 60], [80, 12], [96, 10], [118, 58], [150, 30], [180, 58], [212, 38], [244, 58], [276, 44], [306, 58], [340, 40], [372, 58], [400, 50]];
  let d = "M" + pts.map(p => p.join(" ")).join(" L"), posts = "";
  for (let x = 6; x < 400; x += 10) posts += '<line x1="' + x + '" y1="64" x2="' + x + '" y2="20"/>';
  $("coaster").innerHTML = '<clipPath id="cc"><path d="' + d + ' L400 64 L0 64Z"/></clipPath><g clip-path="url(#cc)" stroke="#f7f3ea" stroke-width="1">' + posts + '</g><path d="' + d + '" fill="none" stroke="#f7f3ea" stroke-width="2.5"/>';
})();

function renderAll() { renderMeter(); renderCard(); renderSongs(); renderExtras(); renderStreak(); if (pIdx === 3) renderTrophies(); }
$("logoW").innerHTML = nine() + nine() + '<span class="deep">DEEP</span>';
$("mini99").innerHTML = nine() + nine() + 'DEEP';
showEpisode(0); goPanel(0); renderAll();
