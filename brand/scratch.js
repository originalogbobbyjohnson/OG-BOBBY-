/* © OG Bobby / OG FAN 99. Scratch the record: while a song plays, put a finger on the record and spin it —
   clockwise fast-forwards, counter-clockwise rewinds, with a scratch sound. On the artist games' video screen
   a small record sits in the corner, and sliding a finger across the video scrubs it too (like a Reel).
   A plain tap still plays/pauses. Never scrubs past the next verse stop. */
(function () {
  const TURN = 3;                       // seconds of song per full turn of a record
  const SWIPE = 8;                      // seconds of song per full width of the video screen
  const yt = () => (typeof player !== "undefined" && player && player.getPlayerState) ? player : null;
  const vis = el => { if (!el) return false; const r = el.getBoundingClientRect(); return r.width > 20 && r.right > 0 && r.left < innerWidth && r.bottom > 0 && r.top < innerHeight; };
  let A = null;

  if (document.getElementById("audio") && document.querySelector(".og-bar")) {
    /* OG Bobby's own game: <audio id="audio">, each stop is its own clip */
    const au = document.getElementById("audio");
    A = {
      targets: () => [{ el: document.querySelector(".og-bar .og-rec"), spin: document.querySelector(".og-bar .og-rec .spin"), kind: "disc" }],
      playing: () => !au.paused && !au.ended,
      getT: () => au.currentTime,
      setT: t => { try { au.currentTime = t; } catch (e) {} },
      bounds: () => [0, Math.max(0, (au.duration || 0) - 0.4)],
      mute: on => { au.muted = on; },
      toggle: null
    };
  } else if (document.getElementById("record")) {
    /* OG FAN 99 artist games: YouTube player */
    let mini = null, pad = null;
    const screen = () => document.querySelector("#pPlay .screen");
    const build = () => {
      const sc = screen(); if (!sc || sc.querySelector(".og-scrub")) return;
      sc.style.position = "relative";
      pad = document.createElement("div"); pad.className = "og-scrub"; pad.setAttribute("aria-hidden", "true");
      mini = document.createElement("div"); mini.className = "og-mini"; mini.innerHTML = "<i></i>";
      pad.appendChild(mini); sc.appendChild(pad);
    };
    build(); setTimeout(build, 1500);
    A = {
      targets: () => { build(); return [
        { el: mini, spin: mini, kind: "disc" },
        { el: pad, spin: mini, kind: "swipe" },
        { el: document.getElementById("record"), spin: document.getElementById("record"), kind: "disc" }
      ]; },
      playing: () => { const p = yt(); try { return !!p && p.getPlayerState() === 1; } catch (e) { return false; } },
      getT: () => { try { return yt().getCurrentTime(); } catch (e) { return 0; } },
      setT: t => { try { yt().seekTo(t, true); } catch (e) {} },
      bounds: () => {
        try {
          const e = EPISODES[current], g = gatesOf(current), lo = e.start || 0;
          const end = (yt().getDuration() || 0) - 1;
          const hi = (e.cuts && g < e.cuts.length) ? e.cuts[g] - 0.7 : end;
          return [lo, Math.max(lo, hi)];
        } catch (err) { return [0, 0]; }
      },
      mute: on => { try { on ? yt().mute() : yt().unMute(); } catch (e) {} },
      /* a tap on the video works like a tap on the record */
      toggle: () => { try { const p = yt(); if (typeof atStop !== "undefined" && atStop) return; if (p.getPlayerState() === 1) p.pauseVideo(); else if (p.getPlayerState() === 2) p.playVideo(); } catch (e) {} }
    };
    setInterval(() => { if (mini) mini.classList.toggle("on", A.playing()); }, 400);
  }
  if (!A) return;

  /* scratch sound: looping noise through a band-pass filter that follows the hand speed */
  let ctx = null, src = null, filt = null, gain = null;
  function soundOn() {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      const len = ctx.sampleRate, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (0.6 + 0.4 * Math.sin(i / 37));
      src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      filt = ctx.createBiquadFilter(); filt.type = "bandpass"; filt.Q.value = 2.5; filt.frequency.value = 600;
      gain = ctx.createGain(); gain.gain.value = 0;
      src.connect(filt); filt.connect(gain); gain.connect(ctx.destination); src.start();
    } catch (e) { src = null; }
  }
  function soundSpeed(v) {            // v = seconds of song per second of hand movement
    if (!src) return;
    const s = Math.min(1, Math.abs(v) / 7), t = ctx.currentTime;
    filt.frequency.setTargetAtTime(300 + s * 2600 + (v < 0 ? -120 : 0), t, 0.02);
    gain.gain.setTargetAtTime(s < 0.03 ? 0 : 0.12 + s * 0.45, t, 0.02);
  }
  function soundOff() {
    if (!src) return;
    try { const t = ctx.currentTime; gain.gain.setTargetAtTime(0, t, 0.03); src.stop(t + 0.15); } catch (e) {}
    src = null;
  }

  let S = null, eatClick = 0;
  const angleOf = (x, y, s) => Math.atan2(y - s.cy, x - s.cx);
  const hit = (e, t) => {
    if (!t.el || !vis(t.el)) return false;
    const r = t.el.getBoundingClientRect();
    if (t.kind === "disc") { const cx = r.left + r.width / 2, cy = r.top + r.height / 2; return Math.hypot(e.clientX - cx, e.clientY - cy) <= r.width / 2 + 8; }
    return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
  };

  document.addEventListener("pointerdown", e => {
    const t = A.targets().find(t => hit(e, t)); if (!t) return;
    const r = t.el.getBoundingClientRect();
    S = { id: e.pointerId, t, x: e.clientX, y: e.clientY, w: r.width, cx: r.left + r.width / 2, cy: r.top + r.height / 2, acc: 0, moved: false, lastSeek: 0, lastT: performance.now(), base: 0, playing: A.playing() };
    S.a = angleOf(e.clientX, e.clientY, S);
  }, true);

  document.addEventListener("pointermove", e => {
    if (!S || e.pointerId !== S.id) return;
    if (!S.moved) {
      if (!S.playing || Math.hypot(e.clientX - S.x, e.clientY - S.y) < 9) return;
      if (S.t.kind === "swipe" && Math.abs(e.clientX - S.x) < Math.abs(e.clientY - S.y)) { S = null; return; }   // up/down = let the page scroll
      S.moved = true; S.t0 = A.getT(); A.mute(true); soundOn();
      const sp = S.t.spin;
      if (sp) { const m = getComputedStyle(sp).transform; let b = 0; const v = m && m.match(/matrix\(([^)]+)\)/); if (v) { const p = v[1].split(",").map(Number); b = Math.atan2(p[1], p[0]); } S.base = b; sp.style.animation = "none"; }
      hideTip(); markDone();
    }
    e.preventDefault();
    let ds;                                                     // change in song seconds this move
    if (S.t.kind === "disc") {
      const a = angleOf(e.clientX, e.clientY, S);
      let da = a - S.a; if (da > Math.PI) da -= 2 * Math.PI; if (da < -Math.PI) da += 2 * Math.PI;
      S.a = a; S.acc += da; ds = da / (2 * Math.PI) * TURN;
      if (S.t.spin) S.t.spin.style.transform = "rotate(" + (S.base + S.acc) + "rad)";
    } else {
      const dx = e.clientX - S.x; S.x = e.clientX; ds = dx / S.w * SWIPE; S.acc += ds / TURN * 2 * Math.PI;
      if (S.t.spin) S.t.spin.style.transform = "rotate(" + (S.base + S.acc) + "rad)";
    }
    S.sec = (S.sec || 0) + ds;
    const now = performance.now(), dt = Math.max(1, now - S.lastT) / 1000; S.lastT = now;
    soundSpeed(ds / dt);
    const [lo, hi] = A.bounds();
    S.target = Math.min(hi, Math.max(lo, S.t0 + S.sec));
    if (now - S.lastSeek > 140) { S.lastSeek = now; A.setT(S.target); }
  }, { capture: true, passive: false });

  const end = e => {
    if (!S || (e && e.pointerId !== S.id)) return;
    const was = S; S = null;
    if (!was.moved) {                                          // a plain tap on the video = play/pause
      if (was.t.kind !== "disc" || was.t.el !== document.getElementById("record")) { if (A.toggle && e && e.type === "pointerup") { A.toggle(); eatClick = performance.now(); } }
      return;
    }
    if (was.target != null) A.setT(was.target);
    soundOff(); A.mute(false);
    const sp = was.t.spin; if (sp) { sp.style.transform = ""; sp.style.animation = ""; }
    eatClick = performance.now();                              // the drag must not also count as a tap
  };
  document.addEventListener("pointerup", end, true);
  document.addEventListener("pointercancel", end, true);
  document.addEventListener("click", e => { if (performance.now() - eatClick < 450) { e.stopPropagation(); e.preventDefault(); } }, true);

  /* a friendly heads-up the first few times a song plays (never again once they've scratched) */
  const KEY = "ogScratchHint";
  const seen = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{"n":0,"done":0}'); } catch (e) { return { n: 0, done: 0 }; } };
  const save = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} };
  const markDone = () => { const v = seen(); if (!v.done) { v.done = 1; save(v); } };
  let tip = null, tipT = 0, wasPlaying = false;
  function showTip() {
    const t = A.targets().find(t => t.kind === "disc" && vis(t.el)); if (!t) return;
    const v = seen(); if (v.done || v.n >= 3) return; v.n++; save(v);
    const r = t.el.getBoundingClientRect();
    tip = document.createElement("div"); tip.className = "og-scratch-tip";
    tip.innerHTML = '<b>&#8635; SCRATCH ME</b><span>Spin the record to rewind or fast-forward</span>';
    document.body.appendChild(tip);
    const w = tip.offsetWidth, h = tip.offsetHeight, below = r.bottom + h + 14 < innerHeight;
    const left = Math.max(8, Math.min(innerWidth - w - 8, r.left + r.width / 2 - w / 2));
    tip.style.left = left + "px"; tip.style.top = (below ? r.bottom + 10 : r.top - h - 10) + "px";
    tip.style.setProperty("--ax", (r.left + r.width / 2 - left) + "px");
    tip.classList.add(below ? "down" : "up");
    clearTimeout(tipT); tipT = setTimeout(hideTip, 5000);
  }
  function hideTip() { if (tip) { const t = tip; tip = null; t.classList.add("bye"); setTimeout(() => t.remove(), 400); } }
  setInterval(() => { const p = A.playing(); if (p && !wasPlaying) setTimeout(() => { if (A.playing() && !S) showTip(); }, 1500); wasPlaying = p; }, 600);
  addEventListener("scroll", hideTip, { passive: true });

  const st = document.createElement("style");
  st.textContent =
    "#record, .og-bar .og-rec, .og-bar .cab-play, .og-mini { touch-action: none; -webkit-user-select: none; user-select: none; }" +
    ".og-scrub{position:absolute;inset:0;z-index:5;touch-action:pan-y;cursor:pointer}" +
    ".og-mini{position:absolute;right:8px;bottom:8px;width:46px;height:46px;border-radius:50%;opacity:0;transition:opacity .3s;" +
    "background:radial-gradient(circle,#d62828 0 26%,#111 27% 31%,transparent 32%),repeating-radial-gradient(circle,#0d0d0f 0 1.6px,#1d1e22 1.6px 3px);" +
    "box-shadow:0 0 0 2px #000,0 0 10px rgba(255,255,255,.35);animation:ogMiniSpin 2.4s linear infinite;animation-play-state:paused}" +
    ".og-mini i{position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px;border-radius:50%;background:#000}" +
    ".og-mini:after{content:'';position:absolute;left:46%;top:6%;width:3px;height:22%;background:rgba(255,255,255,.55);border-radius:2px}" +
    ".og-mini.on{opacity:.95;animation-play-state:running}" +
    "@keyframes ogMiniSpin{to{transform:rotate(360deg)}}" +
    ".og-scratch-tip{position:fixed;z-index:99990;pointer-events:none;display:flex;flex-direction:column;align-items:center;gap:2px;background:#f2c14e;color:#000;border:2px solid #000;border-radius:12px;padding:7px 12px;box-shadow:0 3px 0 #000;font:700 11px/1.2 Helvetica,Arial,sans-serif;text-align:center;max-width:220px;animation:ogTipIn .35s cubic-bezier(.2,1.4,.4,1)}" +
    ".og-scratch-tip b{font:900 14px/1 Helvetica,Arial,sans-serif;letter-spacing:.08em}" +
    ".og-scratch-tip:after{content:'';position:absolute;left:var(--ax,50%);margin-left:-7px;border:7px solid transparent}" +
    ".og-scratch-tip.up:after{top:100%;border-top-color:#000}.og-scratch-tip.down:after{bottom:100%;border-bottom-color:#000}" +
    ".og-scratch-tip.bye{opacity:0;transition:opacity .35s}" +
    "@keyframes ogTipIn{from{opacity:0;transform:translateY(6px) scale(.9)}to{opacity:1;transform:none}}";
  document.head.appendChild(st);
})();
