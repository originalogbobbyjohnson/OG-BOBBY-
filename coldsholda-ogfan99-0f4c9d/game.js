/* OG FAN 99 – Cold Sholda — game logic.
   Same rules as the OG Bobby game: every song is an episode that STOPS at the end of a verse
   and asks about that verse. Right answer = the song keeps playing. Wrong answer = a different
   question from the same verse. Row 1 songs stop once, row 2 twice, row 3 three times (18 stops). */

/* ---------- the 9 episodes ----------
   cuts: the second each verse ends. qs: one pool per stop; every question in a pool is about
   the verse right before that stop. The first option is the right answer (shuffled on screen).
   An episode with no cuts yet is still being set up (its verse stops get marked by listening). */
const EPISODES = [
  /* Timing comes from the captions on Cold Sholda's official YouTube uploads.
     First stop lands around 30 seconds into the rapping (songs with a skit up front start after it).
     Every question in a pool is about lines heard before that stop. */
  /* ---- Row 1: one stop each ---- */
  { title: "Welcome to Gravesend", id: "6pDWPwe_L78", cuts: [30.7], qs: [[
      ["Welcome to the what?", "Gravesend", "Bensonhurst", "Bay Ridge"],
      ["What do they break at the table?", "Bread", "Plates", "Records"],
      ["The table is full of who?", "Made men", "Rappers", "Cops"],
      ["\"Old Brooklyn\"... what comes next?", "New York", "New Jersey", "Long Island"],
      ["Bodies dropping as what ends?", "The day", "The song", "The summer"],
      ["\"Walk with me, listen to the stories of my...\" what?", "Pavement", "Childhood", "Notebook"]
    ]] },
  { title: "Welcome to Bensonhurst", id: "kVWT---Zq6Y", cuts: [32.6], qs: [[
      ["In what decade was his section of Brooklyn really bugging?", "The 90s", "The 70s", "The 2010s"],
      ["Every avenue had what?", "A crew", "A pizzeria", "A church"],
      ["Hustlers and what were bumping?", "Beepers", "Boom boxes", "Bikes"],
      ["Everybody's job was to build a rep and get noticed by who?", "The mob", "The cops", "The labels"],
      ["You were watching movies about what?", "What he grew up in", "Outer space", "Cowboys"],
      ["The crews were beefing, brawling, stabbing and what?", "Gunning", "Running", "Dancing"]
    ]] },
  { title: "I'm a Problem", id: "wIEBIDMzvAk", cuts: [37.1], qs: [[
      ["He crawled, he walked, then he hit the ground doing what?", "Running", "Crying", "Sleeping"],
      ["He's hardheaded and he puts in what?", "Hard work", "Overtime", "Earplugs"],
      ["What kind of hands does he have?", "Cement hands", "Butterfingers", "Golden hands"],
      ["They say it's written, so it's whose work?", "God's work", "His lawyer's work", "The label's work"],
      ["Money goes to what?", "Money", "The bank", "The IRS"],
      ["That's why y'all are what?", "Broke", "Famous", "Tired"]
    ]] },

  /* ---- Row 2: two stops each ---- */
  { title: "100 Zips", id: "mY4qlYMLQR8", cuts: [32.9, 67.3], qs: [[
      ["100 Zips and 100 what?", "Clips", "Chips", "Grips"],
      ["Let's start our own what?", "Government", "Record label", "Pizzeria"],
      ["The only thing we hand out is what?", "Punishment", "Flyers", "Candy"],
      ["He's trying to kill it, so he can't be what with it?", "Sloppy", "Shy", "Late"],
      ["He's from a borough that's the epitome of what?", "Greatness", "Traffic", "Patience"]
    ], [
      ["Which neighborhoods does he name?", "Brooklyn, Bensonhurst, Gravesend", "Astoria, Flushing, Jamaica", "Harlem, Inwood, the Bronx"],
      ["Where are they talking about 100 Zips?", "Inside a coffee shop", "On the train", "At the barbershop"],
      ["The Zips are coming off the what?", "Dock", "Plane", "Truck"],
      ["They call him cold, but his flow is what?", "Scorching hot", "Ice cold", "Lukewarm"],
      ["If you don't know the code, it's an open what?", "Case", "Door", "Mic"],
      ["He's the king who took your what?", "Queen", "Crown", "Castle"]
    ]] },
  { title: "Snakes", id: "e5rLIVdz9-Y", cuts: [31.1, 72.9], qs: [[
      ["His instincts are telling him you're all what?", "Fake", "Broke", "Scared"],
      ["Where are you smiling like it's all great?", "In his face", "On Instagram", "In the club"],
      ["You smile like it's all what?", "Great", "Love", "Funny"],
      ["When he turns around, it's all what?", "Hate", "Quiet", "Love"],
      ["He started from the bottom with all what?", "Snakes", "Rats", "Friends"]
    ], [
      ["Every bottom has a lot of what?", "Snakes", "Money", "Rappers"],
      ["Never tell them anything, because they get pinched and do what?", "Cooperate", "Run", "Cry"],
      ["He's in the cut thinking how to what?", "Operate", "Escape", "Retire"],
      ["His stomach is growling, so he's stacking what?", "Cake", "Plates", "Bricks"],
      ["We don't run, even if we're down to how many?", "One", "Ten", "Zero"],
      ["He's ready with his what?", "War paint", "Passport", "Lawyer"]
    ]] },
  { title: "Carlo Rossi", id: "-KHOu-tTbtM", start: 73.5, cuts: [100.3, 152.0], qs: [[
      ["Cross him and he'll put you under like a what?", "An Aussie", "A doctor", "A magician"],
      ["He made it out the mud, so he's what?", "Flossy", "Muddy", "Humble"],
      ["Cold heart, cold chain. You could call him what?", "Frosty", "Snowman", "Chilly"],
      ["Pour him a glass of what?", "Carlo Rossi", "Hennessy", "Prosecco"],
      ["\"This is Mike when he clipped...\" who, on the lake?", "Fredo", "Sonny", "Paulie"]
    ], [
      ["They blame it on God, but you eat what?", "What you make", "What you steal", "Pasta"],
      ["His bro is sick, so he feeds him what?", "Cannoli cream", "Chicken soup", "Espresso"],
      ["The whip is all black, but the pocket is what?", "Guacamole green", "Empty", "Gold"],
      ["Which team's year does he bring up?", "The '86 Mets", "The '27 Yankees", "The '55 Dodgers"],
      ["You'd be alive if you left the cannolis and took the what?", "Guns", "Car", "Cash"]
    ]] },

  /* ---- Row 3: three stops each (Episode 9 is the boss) ---- */
  { title: "New Rome", id: "b5hOrYgL2lg", start: 49, cuts: [80.9, 117.9, 171.5], qs: [[
      ["He grips the mic with the hand strength of who?", "Achilles", "Hercules", "Zeus"],
      ["He sends her up the street for some what?", "Phillies", "Pizza", "Coffee"],
      ["It's medieval, but he's fully what?", "Legal", "Loaded", "Lit"],
      ["He doesn't count days because he doesn't mess with the what?", "Weak", "Fake", "Calendar"],
      ["He just ate, but he's still what?", "Hungry", "Tired", "Broke"],
      ["He wrote these flames with what kind of feather?", "A griffin feather", "A peacock feather", "An eagle feather"]
    ], [
      ["He calls himself the minotaur of what?", "Literature", "Brooklyn", "The gym"],
      ["He sharpens his blade so the cut is what?", "Effortless", "Deep", "Crooked"],
      ["He crosses skulls when he hops off his what?", "Pegasus", "Chariot", "Vespa"],
      ["He's trying to build a new what?", "Rome", "Studio", "Empire State"],
      ["Your girl is on his what?", "Chariot", "Vespa", "Yacht"]
    ], [
      ["Cold streets is the reason we hold what?", "Heat", "Hands", "Grudges"],
      ["Your boy is cool, but the shoulder is what?", "Colder", "Wider", "Stronger"],
      ["Fake friends only roll with you to go half on a what?", "Blunt", "Pizza", "Cab"],
      ["If he's going to handle something, he does it how?", "Discreet", "Loud", "Online"],
      ["The OGs were bad news, but it was good that they what?", "Teach", "Left", "Paid"]
    ]] },
  { title: "Brooklyn", id: "KH5KLnfOyFs", start: 22, cuts: [57.3, 139.0, 201.6], qs: [[
      ["He's out of where, and he reps it in everything he ever wrote?", "Gravesend", "Bay Ridge", "Canarsie"],
      ["He was on the block with how many G's?", "50", "5", "500"],
      ["He was never home. He was always on that what?", "Cash route", "Train", "Phone"],
      ["He was first on the block and what?", "Last out", "First home", "Never seen"],
      ["What does he hate?", "Snakes", "Pigeons", "Mondays"]
    ], [
      ["He's cut from a what that they don't make no more?", "Cloth", "Mold", "Block"],
      ["Everybody's ratting, trying to save what?", "Some time", "Some money", "Face"],
      ["He walks with a cold what?", "Breeze", "Stare", "Drink"],
      ["He's bringing who back?", "Tommy", "Biggie", "Frankie"],
      ["He rode through dirt in a Caddy and a what?", "Pontiac", "Buick", "Bentley"],
      ["Talking behind his back is what?", "Counterproductive", "Funny", "Normal"]
    ], [
      ["Rats get laid flat in the back of where?", "Bensonhurst", "Bay Ridge", "Coney Island"],
      ["It's not who said it first. It's who gets it what?", "Worse", "Last", "Right"],
      ["His shoulder is colder than the worst what?", "Winter", "Breakup", "Freezer"],
      ["The fire inside him burns hotter than what?", "The earth's center", "The sun", "A pizza oven"],
      ["Nobody seen nothing, but everybody's what?", "Looking", "Talking", "Leaving"],
      ["He's from Brooklyn, that borough that's got you what?", "Shook", "Laughing", "Lost"]
    ]] },
  { title: "Caffe Sicily", id: "9QwlCHAMwJU", cuts: [37.2, 99.0, 165.3], qs: [[
      ["Where is he heading before the song starts?", "The coffee shop", "The bakery", "The bank"],
      ["What is he getting for himself?", "An espresso", "A latte", "A soda"],
      ["What does he offer to bring back?", "A cappuccino", "A cannoli", "A slice"],
      ["Which old boss's name does he drop first?", "Castellano", "Capone", "Luciano"],
      ["They rest still like who?", "Bufalino", "Pacino", "Bon Jovi"]
    ], [
      ["Undertaker, but no what?", "Wrestling", "Funeral", "Shovel"],
      ["Big Tuna got the tip on the what?", "Cargo", "Check", "Fishing boat"],
      ["Which artist does he study?", "Leonardo da Vinci", "Picasso", "Van Gogh"],
      ["You can't make a mafia sandwich without the what?", "Mayo", "Mozzarella", "Bread"],
      ["This that coffee shop what?", "Social club", "Open mic", "Card game"]
    ], [
      ["First warning: tone it down. No need for you to what?", "Floss", "Talk", "Rap"],
      ["Orders from the top for your top to get what?", "Lost", "Promoted", "Paid"],
      ["He made them strip just to prove they weren't what?", "Wired up", "Armed", "Cops"],
      ["It's a secret what?", "Society", "Menu", "Recipe"],
      ["He's from the hood, always up to no good, but he was what?", "Good", "Lucky", "Late"],
      ["Who's the meeting with?", "The boss", "The crew", "The DJ"]
    ]] }
];


/* stops per row: 1, 2, 3 */
const STOPS = [1, 1, 1, 2, 2, 2, 3, 3, 3];
const ROWS = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const RANKS = ["Corner Boy", "Made Man", "Boss"];   // Cold Sholda slang: start as a Fredo, top out as Caesar
const TOTAL_STOPS = STOPS.reduce((a, b) => a + b, 0);   // 18
const JUICE_EACH = 550;                                  // 18 stops x 550 = 9,900
const ready = e => e.cuts.length > 0;

/* Social links (front page + menu) */
const SOCIALS = [
  { name: "Instagram", handle: "@cold.sholda", url: "https://www.instagram.com/cold.sholda/", icon: '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' },
  { name: "YouTube", handle: "@coldsholda", url: "https://www.youtube.com/@coldsholda", icon: '<path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z"/>' }
];

/* Graffiti-style 9 with a straight stem, no hook */
function nine() {
  const g = (c, d) => '<g transform="translate(' + d + ' ' + d + ')" fill="none" stroke="' + c + '" stroke-width="12" stroke-linecap="round"><ellipse cx="31" cy="29" rx="19" ry="21" transform="rotate(-8 31 29)"/><path d="M49 30 L42 86"/></g>';
  return '<svg class="nine" viewBox="-4 -4 72 100" aria-hidden="true">' + g("#000", 4) + g("#d62828", 0) + '</svg>';
}

const $ = id => document.getElementById(id);
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = {
  get() { try { return JSON.parse(localStorage.getItem("ogfan99cold1") || "{}"); } catch (e) { return {}; } },
  set(v) { try { localStorage.setItem("ogfan99cold1", JSON.stringify(v)); } catch (e) {} }
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
const kong = () => state.chalBest != null && state.chalBest >= 99;
const rankName = () => kong() ? "Caesar" : rowsDone() ? RANKS[rowsDone() - 1] : "Fredo";
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
    el.innerHTML = '<div class="boxes">' + row.map(k => '<button type="button" data-ep="' + k + '" aria-label="Episode ' + (k + 1) + '" class="lv' + (isCleared(k) ? " done" : k === nextUp ? " now" : "") + (isOpen(k) ? "" : " locked") + '">' + (k + 1) + '</button>').join("") + '</div>' +
      '<div class="rank' + (row.every(isCleared) ? " got" : "") + '">' + RANKS[r] + '</div>' +
      '<div class="per">' + (r + 1) + (r ? " stops" : " stop") + ' a song</div>';
    m.append(el);
  });
  m.querySelectorAll(".lv").forEach(b => b.onclick = () => episodeInfo(+b.dataset.ep));
  $("topRank").textContent = kong() ? "CAESAR" : "YOU'RE A " + rankName().toUpperCase();
  $("topRank").classList.toggle("got", kong());
  $("qCount").textContent = stopsPassed();
  $("juice").textContent = state.juice.toLocaleString();
}

/* tap a number on the meter: song name, status, and a way in */
function episodeInfo(k) {
  const e = EPISODES[k], row = Math.floor(k / 3), open = isOpen(k), done = isCleared(k), n = STOPS[k];
  const status = done ? "Cleared · " + starHTML(state.stars[k])
    : gatesOf(k) ? "In progress · stop " + (gatesOf(k) + 1) + " of " + n
    : open ? "Ready to play" : "Locked · clear Episode " + k + " first";
  showModal('<div class="k">EPISODE ' + (k + 1) + ' · ROW ' + (row + 1) + ' · ' + RANKS[row].toUpperCase() + '</div>' +
    '<div class="ei-title"></div>' +
    '<div class="ei-stops">' + Array.from({ length: n }, (_, i) => '<i class="' + (i < gatesOf(k) || done ? "got" : "") + '">' + (i + 1) + '</i>').join("") + '<span>' + n + (n > 1 ? " verse stops" : " verse stop") + '</span></div>' +
    '<div class="ei-status' + (done ? " done" : open ? "" : " lock") + '">' + status + '</div>' +
    (open ? '<button class="big-btn" id="eiGo" type="button">' + (done ? "PLAY IT AGAIN" : gatesOf(k) ? "KEEP GOING" : "PLAY EPISODE " + (k + 1)) + '</button>' : ''));
  $("mcard").querySelector(".ei-title").textContent = e.title;
  if (open) $("eiGo").onclick = () => { closeModal(); if (k === current) playSong(k); else introEpisode(k); };
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
    if (open) { const b = document.createElement("button"); b.type = "button"; b.textContent = e.title; b.onclick = () => (k === current ? playSong(k) : introEpisode(k)); t.append(b); }
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
  try { renderMeterBar(player && player.getCurrentTime ? player.getCurrentTime() : null); } catch (e) {}
  const body = $("qBody");
  if (current < 0) { $("qLevel").textContent = ""; $("qNum").textContent = ""; body.innerHTML = '<div class="listen">Tap the record to start Episode 1.</div>'; return; }
  const e = EPISODES[current], g = gatesOf(current), n = STOPS[current];
  const row = Math.floor(current / 3);
  $("qLevel").textContent = "ROW " + (row + 1) + " · " + RANKS[row].toUpperCase();
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
  missRun = 0; state.streak++; state.best = Math.max(state.best, state.streak);
  if (state.streak % 5 === 0) { state.bongs += 1; SFX.streak(); toast("HOT STREAK x" + state.streak + " · +1 CANNOLI"); }
  save(); renderStreak();
}
let missRun = 0;
function gotWrong(k) {
  state.streak = 0; state.misses[k] = (state.misses[k] || 0) + 1; save(); renderStreak();
  if (++missRun === 3) { missRun = 0; setTimeout(() => { SFX.wrong(); toast("FREDO ALERT! LISTEN CLOSER"); }, 900); }
}
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

/* what each rank pays out */
const RANK_REWARDS = {
  "Corner Boy": { bongs: 5, line: "You're outside now. Welcome to the corner." },
  "Made Man": { bongs: 10, line: "You got a seat at the table full of made men." },
  "Boss": { bongs: 25, line: "You run all of Gravesend." }
};
function rankUpScreen(k, rank) {
  const r = RANK_REWARDS[rank], prev = RANKS.indexOf(rank) ? RANKS[RANKS.indexOf(rank) - 1] : "Fredo";
  state.bongs += r.bongs; save(); renderAll();
  SFX.cleared(); setTimeout(() => SFX.stamp(), 700);
  const finale = allDone(), next = EPISODES[k + 1];
  showModal(
    '<div class="k">ROW ' + (Math.floor(k / 3) + 1) + ' CLEARED · RANK UP</div>' +
    '<div class="rk-from">NO MORE ' + prev.toUpperCase() + '</div>' +
    '<div class="rk-name">' + rank.toUpperCase() + '</div>' +
    '<p style="margin:0">' + r.line + '</p>' +
    '<div class="rewards"><div class="rw-h">REWARDS UNLOCKED</div>' +
      '<div class="rw"><b>+' + r.bongs + '</b> Cannolis</div>' +
      '<div class="rw"><b>' + rank + '</b> rank card to share</div>' +
      '<div class="rw"><b>+' + JUICE_EACH.toLocaleString() + '</b> Juice · ' + starHTML(state.stars[k]) + '</div>' +
      (finale ? '<div class="rw"><b>99 Challenge</b> unlocked: beat it to become Caesar</div>'
              : '<div class="rw">Next row: songs stop <b>' + (STOPS[k + 1] === 2 ? "twice" : "three times") + '</b></div>') +
    '</div>' +
    '<div style="display:grid;gap:8px"><button class="big-btn" id="mGo" type="button">' + (finale ? "TAKE THE 99 CHALLENGE" : "PLAY EPISODE " + (k + 2)) + '</button>' +
    '<button class="next" id="mShare" type="button">Share my ' + rank + ' card</button></div>');
  rankConfetti();
  $("mGo").onclick = () => { closeModal(); if (finale) startChallenge(false); else introEpisode(k + 1); };
  $("mShare").onclick = () => { closeModal(); $("shareBtn").click(); };
}
function rankConfetti() {
  const colors = ["#ff3d7f", "#38e8ff", "#fccc0a", "#5ee27a", "#e0a52c", "#fff"];
  for (let i = 0; i < 60; i++) {
    const d = document.createElement("i"); d.className = "conf";
    d.style.cssText = "position:fixed;z-index:61;left:" + Math.random() * 100 + "%;background:" + colors[i % colors.length] + ";animation-duration:" + (1.8 + Math.random() * 1.8) + "s;animation-delay:" + Math.random() * .5 + "s";
    document.body.append(d); setTimeout(() => d.remove(), 4200);
  }
}

function episodeCleared(k, rankUp) {
  if (rankUp) return rankUpScreen(k, rankUp);
  SFX.cleared();
  const finale = allDone();
  const next = EPISODES[k + 1];
  showModal(
    '<div class="k">' + (k === 8 ? "BOSS EPISODE BEATEN" : "ROW " + (Math.floor(k / 3) + 1) + " · " + RANKS[Math.floor(k / 3)].toUpperCase()) + '</div>' +
    '<h3>EPISODE ' + (k + 1) + ' CLEARED</h3>' +
    '<div class="stars">' + starHTML(state.stars[k]) + '</div>' +
    '<div class="rw-line">+' + JUICE_EACH.toLocaleString() + ' JUICE · ' + (2 - (k % 3)) + ' more to rank up to ' + RANKS[Math.floor(k / 3)].toUpperCase() + '</div>' +
    '<p style="margin:0">' + (finale ? "You're a Boss now. Beat the 99 Challenge to become Caesar." : next ? "Episode " + (k + 2) + " unlocked: <b>" + esc(next.title) + "</b>" + (STOPS[k + 1] > STOPS[k] ? "<br>Heads up: songs in this row stop " + (STOPS[k + 1] === 2 ? "twice" : "three times") + "." : "") : "") + '</p>' +
    '<div style="display:grid;gap:8px"><button class="big-btn" id="mGo" type="button">' + (finale ? "TAKE THE 99 CHALLENGE" : "PLAY EPISODE " + (k + 2)) + '</button>' +
    (ready(EPISODES[k]) && !finale ? '<button class="next" id="mStay" type="button">Keep listening to this one</button>' : '') + '</div>',
    null);
  $("mGo").onclick = () => { closeModal(); if (finale) startChallenge(false); else introEpisode(k + 1); };
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
let current = -1, player = null, ytReady = false, pending = null, watch = null, loadedId = null;
const setPlaying = on => {
  $("playIcon").innerHTML = on ? '<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>' : '<path d="M8 5v14l11-7z"/>';
  $("record").classList.toggle("spin", on);
  $("hint").textContent = on && current > -1 ? "Now playing: " + EPISODES[current].title : atStop ? "Answer the question to keep it going" : "Tap the record to play";
};
window.onYouTubeIframeAPIReady = () => { ytReady = true; if (pending != null) { const k = pending; pending = null; playSong(k); } };
(function () { const t = document.createElement("script"); t.src = "https://www.youtube.com/iframe_api"; document.head.append(t); })();

/* watch the clock: when the song reaches the next verse stop, pause and ask */
/* the stop meter under the video: fills up as the song gets to the next verse stop */
function renderMeterBar(t) {
  const fill = $("smFill"), lbl = $("smLbl");
  if (current < 0) { fill.style.width = "0%"; lbl.textContent = ""; $("stopMeter").classList.remove("hot", "done"); return; }
  const e = EPISODES[current], g = gatesOf(current), n = STOPS[current];
  $("stopMeter").classList.toggle("done", isCleared(current));
  if (isCleared(current)) { fill.style.width = "100%"; lbl.textContent = "EPISODE CLEARED · FULL SONG UNLOCKED"; return; }
  const cut = e.cuts[g], from = g ? e.cuts[g - 1] : (e.start || 0);
  if (cut == null) { fill.style.width = "0%"; lbl.textContent = ""; return; }
  if (atStop) { fill.style.width = "100%"; lbl.textContent = "STOP " + (g + 1) + " OF " + n + " · ANSWER TO KEEP IT GOING"; $("stopMeter").classList.add("hot"); return; }
  t = t == null ? from : t;
  const pct = Math.max(0, Math.min(100, 100 * (t - from) / (cut - from)));
  fill.style.width = pct + "%";
  const left = Math.max(0, Math.ceil(cut - t));
  $("stopMeter").classList.toggle("hot", left <= 5);
  lbl.textContent = "STOP " + (g + 1) + " OF " + n + " IN " + fmt(left) + "  ·  " + fmt(Math.max(0, t)) + " / " + fmt(cut);
}

function startWatch() {
  clearInterval(watch);
  watch = setInterval(() => {
    if (player && player.getCurrentTime && current > -1) { try { renderMeterBar(player.getCurrentTime()); } catch (e) {} }
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

/* title card before an episode starts: Episode N, the song, how many stops, then PLAY */
function introEpisode(k) {
  if (!isOpen(k)) { toast("CLEAR EPISODE " + k + " FIRST"); return; }
  if (player && player.pauseVideo) player.pauseVideo();
  $("doors").classList.remove("open");
  current = k; atStop = false; showEpisode(k); renderSongs(); renderCard(); goPanel(1);
  const n = STOPS[k];
  $("ecKick").textContent = "ROW " + (Math.floor(k / 3) + 1) + " · " + RANKS[Math.floor(k / 3)].toUpperCase() + (k === 8 ? " · BOSS EPISODE" : "");
  $("ecNum").textContent = "EPISODE " + (k + 1);
  $("ecTitle").textContent = EPISODES[k].title;
  $("ecStops").innerHTML = Array.from({ length: n }, (_, i) => "<i>" + (i + 1) + "</i>").join("") ;
  $("ecStops").setAttribute("aria-label", n + (n > 1 ? " stops" : " stop"));
  $("ecGo").textContent = "PLAY EPISODE " + (k + 1);
  $("epCard").hidden = false;
  /* restart the zoom-in animation each time */
  ["ecNum", "ecTitle"].forEach(id => { const el = $(id); el.style.animation = "none"; void el.offsetWidth; el.style.animation = ""; });
  SFX.chime(0);
  $("ecGo").onclick = () => { $("epCard").hidden = true; SFX.unlock(); playSong(k); };
}
function showEpisode(k) { $("epNum").textContent = "EPISODE " + (k + 1) + " · " + STOPS[k] + (STOPS[k] > 1 ? " STOPS" : " STOP"); $("epName").textContent = EPISODES[k].title; }
function playSong(k) {
  const e = EPISODES[k];
  if (!isOpen(k)) { toast("CLEAR EPISODE " + k + " FIRST"); return; }
  const same = player && loadedId === e.id;
  current = k; atStop = false; renderSongs(); showEpisode(k); renderCard();
  goPanel(1);
  $("doors").classList.add("open");
  if (!ytReady) { pending = k; return; }
  /* start where the last passed stop left off */
  const from = isCleared(k) || !ready(e) ? 0 : (gatesOf(k) ? e.cuts[gatesOf(k) - 1] : (e.start || 0));
  loadedId = e.id;
  if (!player) {
    player = new YT.Player("yt", {
      videoId: e.id, playerVars: { playsinline: 1, rel: 0, modestbranding: 1, start: Math.floor(from) },
      events: {
        onReady: ev => { ev.target.playVideo(); startWatch(); },
        onStateChange: ev => { setPlaying(ev.data === YT.PlayerState.PLAYING); if (ev.data === YT.PlayerState.PLAYING) guardSeek(); },
        onError: () => { setPlaying(false); toast("THIS VIDEO WON'T PLAY HERE"); }
      }
    });
  } else if (same) { player.playVideo(); }
  else player.loadVideoById({ videoId: e.id, startSeconds: from });
}
const newestOpen = () => { let k = 0; EPISODES.forEach((e, i) => { if (isOpen(i)) k = i; }); return k; };
$("record").onclick = () => {
  SFX.unlock();
  if (atStop) { goPanel(1); toast("ANSWER TO KEEP IT GOING"); return; }
  if (player && player.getPlayerState && player.getPlayerState() === YT.PlayerState.PLAYING) { player.pauseVideo(); return; }
  if (player && current > -1 && player.getPlayerState() === YT.PlayerState.PAUSED) { player.playVideo(); goPanel(1); return; }
  if (current < 0) introEpisode(newestOpen()); else playSong(current);
};
$("doorPlay").onclick = () => { SFX.unlock(); if (current < 0) introEpisode(newestOpen()); else playSong(current); };

/* ---------- daily question: one a day from the verse pools, pays a Cannoli ---------- */
const today = () => new Date().toISOString().slice(0, 10);
const ALLQ = EPISODES.flatMap(e => e.qs.flat());
function renderExtras() {
  const doneToday = state.daily === today();
  $("dailyBtn").classList.toggle("ready", !doneToday);
  $("dailySub").textContent = doneToday ? "Done today · come back tomorrow" : "1 free Cannoli a day";
  $("chalBtn").classList.toggle("gold", allDone());
  $("chalSub").textContent = allDone() ? (state.chalBest != null ? "Best: " + state.chalBest + " right" : "Unlocked · go for all 99") : "Clear all 9 to unlock";
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
    state.daily = d; if (ok) { state.bongs += 1; SFX.right(); toast("+1 CANNOLI"); } else { SFX.wrong(); toast("TOMORROW'S ANOTHER SHOT"); }
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
    toast("SECRET SPOT " + Object.keys(state.secrets).length + "/3 · +2 CANNOLIS");
  });
});

/* ---------- trophy case + share card ---------- */
/* the trophy shelf: one trophy per rank, earned ones glow */
const TROPHIES = [
  { name: "Fredo", how: "Everybody starts here.", got: () => true },
  { name: "Corner Boy", how: "Clear row 1 (Episodes 1–3).", got: () => rowsDone() >= 1 },
  { name: "Made Man", how: "Clear row 2 (Episodes 4–6).", got: () => rowsDone() >= 2 },
  { name: "Boss", how: "Clear all 9 episodes.", got: () => rowsDone() >= 3 },
  { name: "Caesar", how: "Get all 99 right in the 99 Challenge.", got: () => kong() }
];
function trophyArt(i) {
  const plinth = '<rect x="14" y="80" width="52" height="14" rx="2" fill="#3b2418"/><rect x="10" y="92" width="60" height="6" rx="2" fill="#2a170f"/><rect x="24" y="84" width="32" height="6" rx="1" fill="#c9a24a"/>';
  const face = (fill, mask) => '<ellipse cx="40" cy="44" rx="20" ry="22" fill="' + fill + '"/><path d="M22 36q18-12 36 0v4H22z" fill="' + mask + '"/>' +
    '<ellipse cx="40" cy="52" rx="13" ry="12" fill="' + mask + '"/><circle cx="33" cy="42" r="2.6" fill="#111"/><circle cx="47" cy="42" r="2.6" fill="#111"/>' +
    '<ellipse cx="37" cy="51" rx="2" ry="1.4" fill="#111"/><ellipse cx="43" cy="51" rx="2" ry="1.4" fill="#111"/><path d="M33 58q7 4 14 0" stroke="#111" stroke-width="2" fill="none" stroke-linecap="round"/>';
  const art = [
    /* Fredo: a cracked espresso cup */
    '<path d="M24 46h32v14q0 14-16 14t-16-14z" fill="#f4efe6" stroke="#8d939b" stroke-width="2"/><path d="M56 50q10 0 10 7t-11 7" fill="none" stroke="#f4efe6" stroke-width="4"/>' +
    '<ellipse cx="40" cy="46" rx="16" ry="4" fill="#3b2418"/><path d="M36 50l4 8-3 6 4 8" stroke="#5b6168" stroke-width="1.6" fill="none"/><ellipse cx="40" cy="76" rx="22" ry="3" fill="#cfd4dc"/>',
    /* Corner Boy: the Avenue U street sign */
    '<rect x="38" y="30" width="4" height="50" fill="#5b6168"/><rect x="12" y="24" width="56" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="40" y="36" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="9" fill="#fff">AVENUE U</text><rect x="16" y="44" width="48" height="12" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/>' +
    '<text x="40" y="53" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="7" fill="#fff">McDONALD AV</text>',
    /* Made Man: gold pinky ring with a red stone */
    '<ellipse cx="40" cy="58" rx="20" ry="18" fill="none" stroke="#e0a52c" stroke-width="7"/><ellipse cx="40" cy="58" rx="20" ry="18" fill="none" stroke="#7a5512" stroke-width="1"/>' +
    '<rect x="30" y="28" width="20" height="16" rx="4" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5"/><path d="M40 30l8 6-8 6-8-6z" fill="#d62828" stroke="#5a1717" stroke-width="1"/>',
    /* Boss: the cold chain, iced out */
    '<path d="M16 22q24 46 48 0" fill="none" stroke="#e0a52c" stroke-width="5" stroke-dasharray="5 3" stroke-linecap="round"/>' +
    '<circle cx="40" cy="60" r="15" fill="#e0a52c" stroke="#7a5512" stroke-width="2"/><text x="40" y="66" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="15" fill="#123a5c">CS</text>' +
    '<circle cx="31" cy="48" r="2" fill="#dff6ff"/><circle cx="51" cy="50" r="2" fill="#dff6ff"/><circle cx="44" cy="74" r="1.6" fill="#dff6ff"/>',
    /* Caesar: gold laurel crown */
    '<path d="M40 70q-24-4-26-34" fill="none" stroke="#c08a1c" stroke-width="2.5"/><path d="M40 70q24-4 26-34" fill="none" stroke="#c08a1c" stroke-width="2.5"/>' +
    [0, 1, 2, 3, 4].map(i => { const y = 64 - i * 7, dx = 4 + i * 3.4; return '<ellipse cx="' + (40 - dx - 6) + '" cy="' + y + '" rx="7" ry="3.2" transform="rotate(' + (-30 - i * 8) + ' ' + (40 - dx - 6) + ' ' + y + ')" fill="#ffd34d" stroke="#7a5512" stroke-width="1"/>' +
      '<ellipse cx="' + (40 + dx + 6) + '" cy="' + y + '" rx="7" ry="3.2" transform="rotate(' + (30 + i * 8) + ' ' + (40 + dx + 6) + ' ' + y + ')" fill="#ffd34d" stroke="#7a5512" stroke-width="1"/>'; }).join("") +
    '<text x="40" y="58" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#ffd34d" stroke="#000" stroke-width=".6">SPQR</text>'
  ][i];
  return '<svg viewBox="0 0 80 100" aria-hidden="true">' + art + plinth + '</svg>';
}
function trophyInfo(i) {
  const t = TROPHIES[i], got = t.got();
  showModal('<div class="k">THE SOCIAL CLUB · TROPHY ' + (i + 1) + ' OF 5</div><div class="tr-big' + (got ? " got" : "") + '">' + trophyArt(i) + '</div>' +
    '<h3>' + t.name.toUpperCase() + '</h3><p style="margin:0">' + (got ? "Earned. " : "Locked. ") + t.how + '</p>');
}
function renderTrophies() {
  $("shelf").innerHTML = TROPHIES.map((t, i) => '<button type="button" class="trophy' + (t.got() ? " got" : "") + '" data-i="' + i + '" aria-label="' + t.name + (t.got() ? " trophy, earned" : " trophy, locked") + '">' +
    trophyArt(i) + '<span>' + t.name + '</span>' + (t.got() ? "" : '<em aria-hidden="true">🔒</em>') + '</button>').join("");
  $("shelf").querySelectorAll(".trophy").forEach(b => b.onclick = () => trophyInfo(+b.dataset.i));
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
  const grd = g.createRadialGradient(540, 300, 50, 540, 500, 1100); grd.addColorStop(0, "#123a5c"); grd.addColorStop(1, "#07070d");
  g.fillStyle = grd; g.fillRect(0, 0, 1080, 1350);
  g.strokeStyle = "#d62828"; g.lineWidth = 16; g.strokeRect(40, 40, 1000, 1270);
  g.textAlign = "center"; g.lineJoin = "round";
  const tagText = (t, y, size, color, rot) => { g.save(); g.translate(540, y); g.rotate(rot); g.font = size + 'px "Sedgwick Ave Display", cursive'; g.lineWidth = Math.max(6, size / 16); g.strokeStyle = "#000"; g.strokeText(t, 0, 0); g.fillStyle = color; g.fillText(t, 0, 0); g.restore(); };
  tagText("COLD SHOLDA", 300, 130, "#9fe3ff", -0.06);
  tagText("NEW ROME", 440, 84, "#e8b84a", -0.04);
  g.fillStyle = "#fff"; g.font = '64px Anton, Impact, sans-serif'; g.fillText("I'M RANKED", 540, 610);
  g.fillStyle = "#e0a52c"; g.font = '150px Anton, Impact, sans-serif'; g.fillText(rankName().toUpperCase(), 540, 780);
  g.fillStyle = "#fff"; g.font = '54px Barlow, sans-serif'; g.fillText(state.juice.toLocaleString() + " Juice · " + EPISODES.filter((e, k) => isCleared(k)).length + " of 9 episodes", 540, 880);
  g.fillStyle = "#e0a52c"; g.font = '70px sans-serif'; g.fillText(EPISODES.map((e, k) => state.stars[k] ? "★" : "☆").join(" "), 540, 990);
  g.fillStyle = "#fff"; g.font = '58px Anton, Impact, sans-serif'; g.fillText("ARE YOU AN OG FAN?", 540, 1150);
  tagText("GRAVESEND", 540, 1260, "#ff5a4f", 0.05);
  showModal('<div class="k">SHARE MY RANK</div><img alt="Your Cold Sholda rank card" src="' + c.toDataURL("image/png") + '"><p style="margin:0;font-size:.9rem">Press and hold the card to save it, then post it to your story.</p>');
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
    f.innerHTML = i % 3 ? nine() + nine() : "OG";
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
    '<button class="big-btn" id="chGo" type="button">GO FOR ALL 99</button><button class="next" id="chQuit" type="button">Not now</button>';
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
  const wasKong = kong();
  if (!ch.demo) { state.chalBest = Math.max(state.chalBest || 0, ch.right); save(); renderExtras(); renderMeter(); }
  if (!ch.demo && !wasKong && kong()) setTimeout(() => promote("Caesar"), 1600);
  $("chalIn").innerHTML = '<div class="big99">' + nine() + nine() + '</div><h2>' + ch.right + ' / ' + ch.order.length + '</h2><p>' + (ch.right === ch.order.length ? "PERFECT. All 99. You're Caesar now." : "Run it back and go deeper.") + '</p>' +
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
$("replayHow").onclick = () => { openMenu(false); try { if (player && player.pauseVideo) player.pauseVideo(); } catch (e) {} howI = 0; showHow(); $("how").hidden = false; };

/* restart: same spot on every screen, tap twice to confirm */
/* everything that can be open on top of the game gets closed */
function closeOverlays() {
  $("modal").hidden = true; onModalClose = null;
  $("epCard").hidden = true; $("chal").hidden = true; ch = null;
  openMenu(false); $("promo").classList.remove("on");
}
function stopMusic() { try { if (player && player.stopVideo) player.stopVideo(); } catch (e) {} setPlaying(false); SFX.stop(); }
/* back to the lobby: progress is kept */
function toLobby() {
  stopMusic(); closeOverlays();
  current = -1; atStop = false; $("doors").classList.remove("open");
  $("game").hidden = true; $("how").hidden = true; $("welcome").hidden = false;
  showEpisode(0); goPanel(0); renderAll();
}
/* restart: asks first, then erases progress and goes back to the lobby */
$("restart").onclick = () => {
  showModal('<div class="k">RESTART</div><h3>START OVER?</h3><p style="margin:0">This erases your episodes, ranks, Juice and Cannolis, and takes you back to the lobby.</p>' +
    '<div style="display:grid;gap:8px"><button class="big-btn" id="rsYes" type="button">YES, START OVER</button><button class="next" id="rsNo" type="button">Cancel</button></div>');
  $("rsNo").onclick = closeModal;
  $("rsYes").onclick = () => { state = Object.assign(FRESH(), { seenHow: false }); save(); toLobby(); toast("NEW GAME"); };
};
$("lobbyBtn").onclick = () => { openMenu(false); toLobby(); };

/* ---------- welcome + how to play (Gravesend rooms) ---------- */
const SC = window.GRAVESEND_SCENES;
const HOW = [
  { s: SC.train, t: "PRESS PLAY", x: "Take the F to Avenue U. Tap the record. Every song is an episode." },
  { s: SC.club, t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going." },
  { s: SC.old, t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times." },
  { s: SC.rome, t: "CLIMB THE RANKS", x: "Everybody starts as a Fredo. Clear a row to rank up: Corner Boy, Made Man, Boss. Beat the 99 Challenge to become Caesar." },
  { s: SC.corner, t: "WELCOME TO GRAVESEND", x: "Avenue U and McDonald Avenue, under the F. This is Cold Sholda's game." }
];
let howI = 0;
function showHow() {
  const h = HOW[howI];
  $("howScene").innerHTML = h.s();
  SFX.stop();
  ({ 0: SFX.train, 1: SFX.espresso, 2: SFX.bell, 3: SFX.crowd, 4: SFX.spray })[howI]();
  $("howTitle").textContent = h.t; $("howText").textContent = h.x;
  $("howDots").innerHTML = HOW.map((_, i) => '<button type="button" aria-label="Page ' + (i + 1) + '" class="' + (i === howI ? "on" : "") + '" data-i="' + i + '"></button>').join("");
  $("howDots").querySelectorAll("button").forEach(d => d.onclick = () => { howI = +d.dataset.i; showHow(); });
  $("howNext").textContent = howI === HOW.length - 1 ? "START PLAYING" : "NEXT";
  $("howBack").textContent = howI === 0 ? "LOBBY" : "BACK";
  $("howSkip").hidden = !state.seenHow || howI === HOW.length - 1;
}
function leaveRooms() {
  SFX.stop(); const first = !state.seenHow; state.seenHow = true; save();
  $("how").hidden = true; $("game").hidden = false;
  if (!first) welcomeBack();
}
$("howBack").onclick = () => {
  if (howI > 0) { howI--; showHow(); return; }
  SFX.stop(); $("how").hidden = true; $("welcome").hidden = false;
};
$("howSkip").onclick = leaveRooms;
$("howNext").onclick = () => {
  if (howI < HOW.length - 1) { howI++; showHow(); return; }
  leaveRooms();
};
function welcomeBack() {
  if (stopsPassed() === 0) return;
  const c = EPISODES.filter((e, k) => isCleared(k)).length;
  showModal('<div class="k">WELCOME BACK</div><h3>PREVIOUSLY ON COLD SHOLDA…</h3><p style="margin:0">' +
    (c ? "You cleared " + c + " episode" + (c > 1 ? "s" : "") + " and you're ranked <b>" + esc(rankName()) + "</b>." : "You were partway into Episode 1.") +
    ' Juice: <b>' + state.juice.toLocaleString() + '</b>.</p><button class="big-btn" id="mGo" type="button">PICK UP WHERE YOU LEFT OFF</button>');
  $("mGo").onclick = closeModal;
}
/* LET'S GO always walks the Gravesend rooms; returning players can skip */
$("enter").onclick = () => {
  SFX.unlock();
  $("welcome").hidden = true;
  howI = 0; showHow(); $("how").hidden = false;
};

/* the F train el over McDonald Avenue, faint behind the header */
(function () {
  let s = '<rect x="0" y="22" width="400" height="5"/>';
  for (let x = 4; x < 400; x += 36) s += '<rect x="' + x + '" y="22" width="4" height="42"/><path d="M' + (x + 4) + ' 27 L' + (x + 32) + ' 50 M' + (x + 32) + ' 27 L' + (x + 4) + ' 50" stroke="#f7f3ea" stroke-width="1" fill="none"/>';
  s += '<rect x="230" y="6" width="150" height="16" rx="3"/><rect x="236" y="9" width="12" height="7" fill="#123a5c"/><rect x="254" y="9" width="12" height="7" fill="#123a5c"/><rect x="272" y="9" width="12" height="7" fill="#123a5c"/><rect x="290" y="9" width="12" height="7" fill="#123a5c"/><rect x="308" y="9" width="12" height="7" fill="#123a5c"/><rect x="326" y="9" width="12" height="7" fill="#123a5c"/><rect x="344" y="9" width="12" height="7" fill="#123a5c"/>';
  $("coaster").innerHTML = '<g fill="#f7f3ea">' + s + '</g>';
})();

function renderAll() { renderMeter(); renderCard(); renderSongs(); renderExtras(); renderStreak(); if (pIdx === 3) renderTrophies(); }
$("logoW").innerHTML = '<span class="deep">OG FAN</span>' + nine() + nine();
$("mini99").innerHTML = 'OG FAN ' + nine() + nine();
showEpisode(0); goPanel(0); renderAll();
