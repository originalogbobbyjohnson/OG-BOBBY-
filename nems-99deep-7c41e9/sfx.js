/* Coney Island sound effects, all made in the browser (no audio files).
   Loud by default, run through a limiter so nothing distorts. */
(function () {
  const SFX = { on: true, ctx: null, master: null };
  try { SFX.on = localStorage.getItem("deep99sound") !== "off"; } catch (e) {}

  function ctx() {
    if (!SFX.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
      const c = new AC();
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -10; comp.knee.value = 6; comp.ratio.value = 8; comp.attack.value = 0.003; comp.release.value = 0.2;
      const master = c.createGain(); master.gain.value = 1.6;
      master.connect(comp).connect(c.destination);
      SFX.ctx = c; SFX.master = master;
      /* noise buffers */
      const len = c.sampleRate * 3;
      const white = c.createBuffer(1, len, c.sampleRate), w = white.getChannelData(0);
      const brown = c.createBuffer(1, len, c.sampleRate), b = brown.getChannelData(0);
      let last = 0;
      for (let i = 0; i < len; i++) { const r = Math.random() * 2 - 1; w[i] = r; last = (last + 0.02 * r) / 1.02; b[i] = last * 3.5; }
      SFX.white = white; SFX.brown = brown;
    }
    if (SFX.ctx.state === "suspended") SFX.ctx.resume();
    return SFX.ctx;
  }
  SFX.unlock = () => { ctx(); };

  /* helpers */
  const noise = (c, kind, t0, dur) => { const s = c.createBufferSource(); s.buffer = kind === "brown" ? SFX.brown : SFX.white; s.loop = true; s.start(t0, Math.random() * 2); s.stop(t0 + dur); return s; };
  const env = (c, t0, pts) => { const g = c.createGain(); g.gain.setValueAtTime(0.0001, t0); pts.forEach(([t, v]) => g.gain.linearRampToValueAtTime(Math.max(0.0001, v), t0 + t)); return g; };
  const filt = (c, type, f, q) => { const n = c.createBiquadFilter(); n.type = type; n.frequency.value = f; if (q != null) n.Q.value = q; return n; };
  const tone = (c, type, f, t0, dur, vol, out) => {
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t0);
    const g = env(c, t0, [[0.01, vol], [dur * 0.7, vol * 0.6], [dur, 0]]);
    o.connect(g).connect(out || SFX.master); o.start(t0); o.stop(t0 + dur + 0.05); return o;
  };
  const click = (c, t, f, vol, len) => {
    const s = noise(c, "white", t, len || 0.03), bp = filt(c, "bandpass", f, 3), g = env(c, t, [[0.002, vol], [len || 0.03, 0]]);
    s.connect(bp).connect(g).connect(SFX.master);
  };

  /* Bing-bong door chime */
  SFX.chime = (when) => {
    const c = ctx(); if (!c || !SFX.on) return;
    const t = c.currentTime + (when || 0);
    [[659.3, 0], [523.3, 0.45]].forEach(([f, d]) => { tone(c, "sine", f, t + d, 0.9, 0.7); tone(c, "sine", f * 2, t + d, 0.5, 0.12); });
  };

  /* Elevated train roaring into Stillwell Av: rumble builds, wheels clack over joints, brakes screech, then the chime */
  SFX.train = () => {
    const c = ctx(); if (!c || !SFX.on) return;
    const t = c.currentTime + 0.05;
    // deep rumble overhead
    const r = noise(c, "brown", t, 4.2), lp = filt(c, "lowpass", 380, 0.8);
    lp.frequency.setValueAtTime(220, t); lp.frequency.linearRampToValueAtTime(700, t + 1.6); lp.frequency.linearRampToValueAtTime(260, t + 3.6);
    r.connect(lp).connect(env(c, t, [[1.2, 1.1], [2.2, 1.3], [2.9, 0.9], [4.0, 0]])).connect(SFX.master);
    // steel structure roar (mid noise)
    const m = noise(c, "white", t, 3.6), bp = filt(c, "bandpass", 900, 0.6);
    m.connect(bp).connect(env(c, t, [[1.3, 0.35], [2.3, 0.4], [3.0, 0.15], [3.5, 0]])).connect(SFX.master);
    // low hum
    const o = c.createOscillator(); o.type = "sawtooth"; o.frequency.setValueAtTime(48, t); o.frequency.linearRampToValueAtTime(38, t + 3.5);
    o.connect(filt(c, "lowpass", 150)).connect(env(c, t, [[1.4, 0.5], [3.0, 0.4], [3.8, 0]])).connect(SFX.master); o.start(t); o.stop(t + 4);
    // clack-clack over the rail joints, slowing down
    let at = 0.25, gap = 0.16;
    while (at < 2.7) { click(c, t + at, 1300, 1.2, 0.035); click(c, t + at + 0.07, 1100, 1.0, 0.035); at += gap; gap *= 1.09; }
    // brake screech
    const s = noise(c, "white", t + 1.9, 1.2), sb = filt(c, "bandpass", 3200, 25);
    sb.frequency.setValueAtTime(3400, t + 1.9); sb.frequency.linearRampToValueAtTime(2700, t + 3.0);
    s.connect(sb).connect(env(c, t + 1.9, [[0.15, 1.6], [0.8, 1.4], [1.1, 0]])).connect(SFX.master);
    const sq = c.createOscillator(); sq.type = "triangle"; sq.frequency.setValueAtTime(2950, t + 2.0); sq.frequency.linearRampToValueAtTime(2500, t + 2.9);
    sq.connect(env(c, t + 2.0, [[0.1, 0.18], [0.75, 0.15], [0.95, 0]])).connect(SFX.master); sq.start(t + 2.0); sq.stop(t + 3.0);
    // air brakes hiss
    const h = noise(c, "white", t + 2.95, 0.7);
    h.connect(filt(c, "highpass", 3000)).connect(env(c, t + 2.95, [[0.03, 0.7], [0.6, 0]])).connect(SFX.master);
    SFX.chime(3.5);
  };

  /* Loop runner: plays one pass, repeats until stopped */
  let loopTimer = null, loopNodes = [];
  SFX.stop = () => { clearInterval(loopTimer); loopTimer = null; loopNodes.forEach(n => { try { n.stop(); } catch (e) {} }); loopNodes = []; };
  const loop = (pass, every) => { SFX.stop(); if (!SFX.on || !ctx()) return; pass(); loopTimer = setInterval(() => { if (SFX.on) pass(); }, every * 1000); };

  /* Cyclone: chain lift clank-clank, then the drop: wooden rumble, rattle, whoosh */
  SFX.coaster = () => loop(() => {
    const c = ctx(), t = c.currentTime + 0.05;
    for (let a = 0; a < 2.3; a += 0.11) click(c, t + a, 700 + Math.random() * 200, 0.9, 0.025);
    const r = noise(c, "brown", t + 2.4, 3.4), lp = filt(c, "lowpass", 500);
    r.connect(lp).connect(env(c, t + 2.4, [[0.3, 1.4], [2.4, 1.2], [3.3, 0]])).connect(SFX.master);
    const w = noise(c, "white", t + 2.4, 3.2), bp = filt(c, "bandpass", 500, 1.2);
    bp.frequency.setValueAtTime(400, t + 2.4); bp.frequency.linearRampToValueAtTime(1800, t + 3.0); bp.frequency.linearRampToValueAtTime(600, t + 3.8); bp.frequency.linearRampToValueAtTime(1500, t + 4.4); bp.frequency.linearRampToValueAtTime(500, t + 5.4);
    w.connect(bp).connect(env(c, t + 2.4, [[0.4, 0.9], [1.2, 0.6], [2.0, 0.9], [3.1, 0]])).connect(SFX.master);
    for (let a = 2.5; a < 5.4; a += 0.06 + Math.random() * 0.05) click(c, t + a, 250 + Math.random() * 150, 0.6, 0.02);
    // riders yelling "woo" on the drop
    const v = c.createOscillator(); v.type = "sawtooth"; v.frequency.setValueAtTime(520, t + 2.5); v.frequency.linearRampToValueAtTime(760, t + 2.9); v.frequency.linearRampToValueAtTime(480, t + 3.6);
    const f1 = filt(c, "bandpass", 900, 6); v.connect(f1).connect(env(c, t + 2.5, [[0.15, 0.22], [0.8, 0.18], [1.1, 0]])).connect(SFX.master); v.start(t + 2.5); v.stop(t + 3.7);
  }, 6);

  /* Wonder Wheel: carnival organ waltz (original tune) */
  SFX.organ = () => loop(() => {
    const c = ctx(), t = c.currentTime + 0.05, beat = 0.36;
    const mel = [67, 72, 76, 74, 72, 67, 69, 71, 72, 76, 79, 77, 76, 72, 74, 72];
    const bass = [48, 55, 55, 43, 50, 50, 48, 55, 55, 43, 50, 50, 48, 55, 55, 48];
    const hz = n => 440 * Math.pow(2, (n - 69) / 12);
    mel.forEach((n, i) => { tone(c, "square", hz(n), t + i * beat, beat * 0.9, 0.16); tone(c, "triangle", hz(n + 12), t + i * beat, beat * 0.8, 0.08); });
    bass.forEach((n, i) => tone(c, "triangle", hz(n), t + i * beat, beat * 0.5, i % 3 === 0 ? 0.35 : 0.2));
  }, 16 * 0.36);

  /* Parachute Jump: steady beach wind, cable zip on the drop and the winch back up */
  SFX.parachute = () => {
    loop(() => {
      const c = ctx(), t = c.currentTime + 0.05;
      const w = noise(c, "white", t, 4.6), bp = filt(c, "bandpass", 450, 0.9);
      const lfo = c.createOscillator(), lg = c.createGain(); lfo.frequency.value = 0.35; lg.gain.value = 220; lfo.connect(lg).connect(bp.frequency); lfo.start(t); lfo.stop(t + 4.6);
      w.connect(bp).connect(env(c, t, [[0.3, 0.55], [4.2, 0.55], [4.55, 0]])).connect(SFX.master);
      // zip down the cable (drop happens at 15%–55% of the 4.5s animation)
      const z = c.createOscillator(); z.type = "sawtooth"; z.frequency.setValueAtTime(1400, t + 0.68); z.frequency.exponentialRampToValueAtTime(380, t + 2.45);
      const zf = filt(c, "bandpass", 1200, 4); z.connect(zf).connect(env(c, t + 0.68, [[0.08, 0.5], [1.6, 0.45], [1.8, 0]])).connect(SFX.master); z.start(t + 0.68); z.stop(t + 2.55);
      const zn = noise(c, "white", t + 0.68, 1.8), zb = filt(c, "bandpass", 2500, 8);
      zb.frequency.setValueAtTime(3500, t + 0.68); zb.frequency.exponentialRampToValueAtTime(900, t + 2.45);
      zn.connect(zb).connect(env(c, t + 0.68, [[0.05, 0.9], [1.6, 0.7], [1.8, 0]])).connect(SFX.master);
      click(c, t + 2.47, 180, 1.5, 0.08);   // thud at the bottom
      // winch back up
      const u = c.createOscillator(); u.type = "square"; u.frequency.setValueAtTime(90, t + 2.95); u.frequency.linearRampToValueAtTime(140, t + 4.4);
      u.connect(filt(c, "lowpass", 600)).connect(env(c, t + 2.95, [[0.1, 0.18], [1.3, 0.15], [1.5, 0]])).connect(SFX.master); u.start(t + 2.95); u.stop(t + 4.5);
    }, 4.5);
  };

  /* The corner: spray cans rattling and hissing */
  SFX.spray = () => {
    const c = ctx(); if (!c || !SFX.on) return;
    const t = c.currentTime + 0.05;
    for (let a = 0; a < 0.9; a += 0.13) { click(c, t + a, 2600, 1.1, 0.03); click(c, t + a + 0.05, 2200, 0.8, 0.03); }
    [[1.1, 1.0], [2.4, 0.7]].forEach(([d, len]) => {
      const s = noise(c, "white", t + d, len), hp = filt(c, "highpass", 3500);
      s.connect(hp).connect(env(c, t + d, [[0.04, 0.9], [len - 0.1, 0.75], [len, 0]])).connect(SFX.master);
    });
  };

  /* Game sounds */
  SFX.right = () => { const c = ctx(); if (!c || !SFX.on) return; const t = c.currentTime; tone(c, "square", 880, t, 0.12, 0.25); tone(c, "square", 1318.5, t + 0.1, 0.22, 0.25); };
  SFX.wrong = () => { const c = ctx(); if (!c || !SFX.on) return; const t = c.currentTime; tone(c, "sawtooth", 130, t, 0.35, 0.35); tone(c, "sawtooth", 98, t + 0.12, 0.35, 0.3); };
  SFX.stamp = () => { const c = ctx(); if (!c || !SFX.on) return; const t = c.currentTime; click(c, t, 120, 2.2, 0.12); tone(c, "sine", 60, t, 0.3, 0.8); [523, 659, 784, 1047].forEach((f, i) => tone(c, "square", f, t + 0.15 + i * 0.09, 0.25, 0.2)); };
  SFX.cleared = () => { const c = ctx(); if (!c || !SFX.on) return; const t = c.currentTime; [392, 523, 659, 784, 659, 784, 1047].forEach((f, i) => { tone(c, "square", f, t + i * 0.11, 0.3, 0.22); tone(c, "triangle", f / 2, t + i * 0.11, 0.3, 0.2); }); for (let a = 0; a < 0.6; a += 0.04) click(c, t + 0.8 + a, 5000 + Math.random() * 3000, 0.4, 0.02); };
  SFX.streak = () => { const c = ctx(); if (!c || !SFX.on) return; const t = c.currentTime; const o = c.createOscillator(); o.type = "sawtooth"; o.frequency.setValueAtTime(300, t); o.frequency.exponentialRampToValueAtTime(1600, t + 0.5); o.connect(filt(c, "lowpass", 3000)).connect(env(c, t, [[0.05, 0.3], [0.5, 0]])).connect(SFX.master); o.start(t); o.stop(t + 0.55); };
  SFX.fanfare99 = () => {
    const c = ctx(); if (!c || !SFX.on) return; const t = c.currentTime;
    const r = noise(c, "brown", t, 1.2); r.connect(filt(c, "lowpass", 300)).connect(env(c, t, [[0.8, 1.4], [1.2, 0]])).connect(SFX.master);
    [[523, 0.9], [659, 1.05], [784, 1.2], [1047, 1.4], [784, 1.6], [1047, 1.75]].forEach(([f, d]) => { tone(c, "square", f, t + d, 0.45, 0.25); tone(c, "sawtooth", f / 2, t + d, 0.45, 0.15); });
    for (let a = 0; a < 1.2; a += 0.03) click(c, t + 1.9 + a, 4000 + Math.random() * 5000, 0.45, 0.02);
  };

  SFX.set = on => { SFX.on = on; try { localStorage.setItem("deep99sound", on ? "on" : "off"); } catch (e) {} if (!on) SFX.stop(); };
  window.SFX = SFX;
})();
