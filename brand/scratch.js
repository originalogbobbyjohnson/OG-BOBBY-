/* © OG Bobby / OG FAN 99. Scratch the record: while a song plays, put a finger on the record and drag it
   around — clockwise fast-forwards, counter-clockwise rewinds, with a scratch sound. A plain tap still plays/pauses. */
(function () {
  const TURN = 3;                       // seconds of song per full turn of the record
  const yt = () => (typeof player !== "undefined" && player && player.getPlayerState) ? player : null;
  let A = null;                         // adapter for this page

  if (document.getElementById("audio") && document.querySelector(".og-bar")) {
    // OG Bobby's own game: <audio id="audio">, each stop is its own clip
    const au = document.getElementById("audio");
    A = {
      el: () => document.querySelector(".og-bar .og-rec"),
      spin: () => document.querySelector(".og-bar .og-rec .spin"),
      playing: () => !au.paused && !au.ended,
      getT: () => au.currentTime,
      setT: t => { try { au.currentTime = t; } catch (e) {} },
      bounds: () => [0, Math.max(0, (au.duration || 0) - 0.4)],
      mute: on => { au.muted = on; }
    };
  } else if (document.getElementById("record")) {
    // OG FAN 99 artist games: YouTube player, never scratch past the next verse stop
    A = {
      el: () => document.getElementById("record"),
      spin: () => document.getElementById("record"),
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
      mute: on => { try { on ? yt().mute() : yt().unMute(); } catch (e) {} }
    };
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
  function soundSpeed(v) {            // v = turns per second
    if (!src) return;
    const s = Math.min(1, Math.abs(v) / 2.5), t = ctx.currentTime;
    filt.frequency.setTargetAtTime(300 + s * 2600 + (v < 0 ? -120 : 0), t, 0.02);
    gain.gain.setTargetAtTime(s < 0.03 ? 0 : 0.12 + s * 0.45, t, 0.02);
  }
  function soundOff() {
    if (!src) return;
    try { const t = ctx.currentTime; gain.gain.setTargetAtTime(0, t, 0.03); src.stop(t + 0.15); } catch (e) {}
    src = null;
  }

  const angle = (x, y, cx, cy) => Math.atan2(y - cy, x - cx);
  let S = null, eatClick = 0;

  document.addEventListener("pointerdown", e => {
    const el = A.el(); if (!el || !A.playing()) return;
    const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    if (Math.hypot(e.clientX - cx, e.clientY - cy) > r.width / 2 + 6) return;
    S = { id: e.pointerId, cx, cy, x: e.clientX, y: e.clientY, a: angle(e.clientX, e.clientY, cx, cy), acc: 0, t0: A.getT(), moved: false, lastSeek: 0, lastT: performance.now(), base: 0 };
  }, true);

  document.addEventListener("pointermove", e => {
    if (!S || e.pointerId !== S.id) return;
    if (!S.moved) {
      if (Math.hypot(e.clientX - S.x, e.clientY - S.y) < 9) return;
      S.moved = true; A.mute(true); soundOn();
      const sp = A.spin();
      if (sp) { const m = getComputedStyle(sp).transform; let b = 0; if (m && m !== "none") { const v = m.match(/matrix\(([^)]+)\)/); if (v) { const p = v[1].split(",").map(Number); b = Math.atan2(p[1], p[0]); } } S.base = b; sp.style.animation = "none"; }
      try { document.getElementById("record") && document.getElementById("record").classList.add("scratching"); } catch (err) {}
    }
    e.preventDefault();
    const a = angle(e.clientX, e.clientY, S.cx, S.cy);
    let da = a - S.a; if (da > Math.PI) da -= 2 * Math.PI; if (da < -Math.PI) da += 2 * Math.PI;
    S.a = a; S.acc += da;
    const now = performance.now(), dt = Math.max(1, now - S.lastT) / 1000; S.lastT = now;
    soundSpeed(da / (2 * Math.PI) / dt);
    const sp = A.spin(); if (sp) sp.style.transform = "rotate(" + (S.base + S.acc) + "rad)";
    const [lo, hi] = A.bounds();
    S.target = Math.min(hi, Math.max(lo, S.t0 + S.acc / (2 * Math.PI) * TURN));
    if (now - S.lastSeek > 140) { S.lastSeek = now; A.setT(S.target); }
  }, { capture: true, passive: false });

  const end = e => {
    if (!S || (e && e.pointerId !== S.id)) return;
    const was = S; S = null;
    if (!was.moved) return;
    if (was.target != null) A.setT(was.target);
    soundOff(); A.mute(false);
    const sp = A.spin(); if (sp) { sp.style.transform = ""; sp.style.animation = ""; }
    try { document.getElementById("record") && document.getElementById("record").classList.remove("scratching"); } catch (err) {}
    eatClick = performance.now();           // the drag must not also count as a tap (pause)
  };
  document.addEventListener("pointerup", end, true);
  document.addEventListener("pointercancel", end, true);
  document.addEventListener("click", e => { if (performance.now() - eatClick < 450) { e.stopPropagation(); e.preventDefault(); } }, true);

  /* the page must not scroll when a finger drags across the spinning record */
  const st = document.createElement("style");
  st.textContent = "#record, .og-bar .og-rec, .og-bar .cab-play { touch-action: none; -webkit-user-select: none; user-select: none; }";
  document.head.appendChild(st);
})();
