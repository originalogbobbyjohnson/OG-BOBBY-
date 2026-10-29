/* Coney Island opening scenes for the NEMS game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';

  /* 1. Train pulling into Coney Island–Stillwell Av (elevated terminal) */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#2f6b4f"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#ffe7a8" opacity=".9"/>' +
      '<rect x="0" y="50" width="400" height="10" fill="#2f6b4f"/>' + girders +
      /* station sign */
      '<rect x="60" y="66" width="280" height="34" rx="4" fill="#111"/>' +
      '<rect x="60" y="66" width="280" height="4" fill="#fff"/>' +
      '<text x="72" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Coney Island–Stillwell Av</text>' +
      bullet(254, 84, "D", "#ff6319") + bullet(278, 84, "F", "#ff6319") + bullet(302, 84, "N", "#fccc0a", true) + bullet(326, 84, "Q", "#fccc0a", true) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#ff6319"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "D", "#ff6319") +
      '</g>' +
      /* platform edge + elevated structure */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1d2a24"/>' +
      tag("BING BONG", 24, 236, 30, "#ff3d7f", -4) + tag("FYL", 300, 238, 30, "#38e8ff", -8),
      sky("s1", "#1b1f4b", "#f0703a"));
  }

  /* Smooth curve helper: Catmull-Rom through key points, sampled every ~2px */
  function smooth(pts) {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
      const n = Math.max(4, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / 2));
      for (let k = 0; k < n; k++) {
        const t = k / n, t2 = t * t, t3 = t2 * t;
        out.push([0, 1].map(j => 0.5 * ((2 * p1[j]) + (-p0[j] + p2[j]) * t + (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * t2 + (-p0[j] + 3 * p1[j] - 3 * p2[j] + p3[j]) * t3)));
      }
    }
    out.push(pts[pts.length - 1]);
    return out;
  }
  const pathOf = pts => "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L");

  /* 2. The Cyclone: white wooden lattice, long lift hill, steep first drop, red train */
  function cyclone() {
    const GROUND = 214;
    const key = [[-10, 188], [28, 188], [118, 44], [128, 40], [138, 48], [170, 198], [184, 202], [206, 110], [222, 106], [246, 196], [258, 200], [280, 134], [294, 132], [312, 192], [324, 196], [342, 156], [356, 154], [372, 192], [410, 186]];
    const tr = smooth(key);
    const yAt = x => { for (let i = 1; i < tr.length; i++) if (tr[i][0] >= x && tr[i - 1][0] <= x) { const [x0, y0] = tr[i - 1], [x1, y1] = tr[i]; return x1 === x0 ? y0 : y0 + (y1 - y0) * (x - x0) / (x1 - x0); } return GROUND; };
    let bents = "";
    const step = 9, row = 16;
    for (let x = 4; x < 400; x += step) {
      const top = yAt(x) + 4;
      if (top >= GROUND - 2) continue;
      bents += '<line x1="' + x + '" y1="' + top.toFixed(1) + '" x2="' + x + '" y2="' + GROUND + '"/>';
      const tn = yAt(x + step) + 4;
      for (let y = GROUND; y - row > Math.max(top, tn); y -= row) {
        if (x + step < 400) bents += '<line x1="' + x + '" y1="' + y + '" x2="' + (x + step) + '" y2="' + (y - row) + '"/><line x1="' + x + '" y1="' + (y - row) + '" x2="' + (x + step) + '" y2="' + y + '"/>';
      }
    }
    const d = pathOf(tr);
    const car = (delay) =>
      '<g><path d="M-11 -11 h20 q4 0 4 4 v7 h-26 z" fill="#d62828" stroke="#1a1a1a" stroke-width="1.2"/>' +
      '<rect x="-11" y="-4" width="24" height="2" fill="#ffd34d"/>' +
      '<circle cx="-5" cy="-13" r="2.6" fill="#ffd9b0"/><circle cx="3" cy="-13" r="2.6" fill="#ffd9b0"/>' +
      '<animateMotion dur="6s" begin="' + delay + 's" repeatCount="indefinite" rotate="auto" path="' + d + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<g stroke="#f7f3ea" stroke-width="1.3" opacity=".92">' + bents + '</g>' +
      /* track: dark rails on a white deck, chain on the lift hill */
      '<path d="' + d + '" fill="none" stroke="#f7f3ea" stroke-width="7" stroke-linejoin="round"/>' +
      '<path d="' + d + '" fill="none" stroke="#3a2a20" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M30 186 L117 46" stroke="#555" stroke-width="1.2" stroke-dasharray="2 2"/>' +
      car(0) + car(-0.18) + car(-0.36) +
      /* station + sidewalk */
      '<rect x="0" y="176" width="44" height="38" fill="#c43b2e"/><rect x="0" y="172" width="48" height="6" fill="#f7f3ea"/>' +
      '<rect x="0" y="' + GROUND + '" width="400" height="46" fill="#2a2d35"/><rect x="0" y="' + GROUND + '" width="400" height="5" fill="#8a8f99"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="4" fill="#fff">CYCLONE · SINCE 1927</text>' +
      tag("NEMS", 300, 58, 34, "#fccc0a", -8),
      sky("s2", "#ff7a3d", "#ffd98a"));
  }

  /* 3. The Wonder Wheel: eccentric steel wheel, swinging cars on S-shaped tracks, lit rim, two A-frame legs */
  function wheel() {
    const cx = 200, cy = 104, R = 90, Ri = 34;
    const P = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    const f = n => n.toFixed(1);
    let rim = "", spokes = "", tracks = "", cars = "", bulbs = "";
    /* outer rim: double ring with zig-zag truss */
    let zig = "";
    for (let i = 0; i <= 48; i++) { const a = i * Math.PI / 24, [x, y] = P(i % 2 ? R : R - 8, a); zig += (i ? " L" : "M") + f(x) + " " + f(y); }
    rim = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (R - 8) + '"/><path d="' + zig + '" fill="none"/>' +
          '<circle cx="' + cx + '" cy="' + cy + '" r="' + Ri + '"/>';
    for (let i = 0; i < 16; i++) { const [x, y] = P(R - 8, i * Math.PI / 8); spokes += '<line x1="' + cx + '" y1="' + cy + '" x2="' + f(x) + '" y2="' + f(y) + '"/>'; }
    for (let i = 0; i < 8; i++) {
      /* S-curve track from the inner ring out to the rim */
      const a = i * Math.PI / 4 + 0.2, [x0, y0] = P(Ri, a), [x3, y3] = P(R - 8, a + 0.55);
      const [x1, y1] = P(Ri + 28, a - 0.45), [x2, y2] = P(R - 30, a + 0.95);
      tracks += '<path d="M' + f(x0) + ' ' + f(y0) + ' C' + f(x1) + ' ' + f(y1) + ' ' + f(x2) + ' ' + f(y2) + ' ' + f(x3) + ' ' + f(y3) + '"/>';
      /* a swinging car partway along each S-track */
      const t = 0.62, mt = 1 - t;
      const sx = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
      const sy = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
      cars += '<g transform="translate(' + f(sx) + ' ' + f(sy) + ')"><g class="car-level"><line x1="0" y1="0" x2="0" y2="5" stroke="#333"/><rect x="-7" y="4" width="14" height="11" rx="2.5" fill="' + (i % 2 ? "#1f6fd1" : "#d62828") + '" stroke="#111" stroke-width="1"/><rect x="-5" y="6" width="10" height="4" fill="#cfe6ff"/></g></g>';
      /* a fixed car on the rim between tracks */
      const [rx, ry] = P(R, a - 0.2 + Math.PI / 8);
      cars += '<g transform="translate(' + f(rx) + ' ' + f(ry) + ')"><g class="car-level"><line x1="0" y1="0" x2="0" y2="5" stroke="#333"/><rect x="-7" y="4" width="14" height="11" rx="2.5" fill="#f2f2f2" stroke="#111" stroke-width="1"/><rect x="-5" y="6" width="10" height="4" fill="#9fd3ff"/></g></g>';
    }
    for (let i = 0; i < 32; i++) { const [x, y] = P(R, i * Math.PI / 16); bulbs += '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="1.8" fill="#fff3b0" class="blink" style="animation-delay:' + (i * 0.07).toFixed(2) + 's"/>'; }
    /* A-frame legs with lattice */
    let legs = "";
    [[-1], [1]].forEach(([sgn]) => {
      const bx = cx + sgn * 74;
      legs += '<path d="M' + cx + ' ' + cy + ' L' + (bx - 8) + ' 232 M' + cx + ' ' + cy + ' L' + (bx + 8) + ' 232" stroke-width="4"/>';
      for (let y = cy + 18; y < 230; y += 14) {
        const k = (y - cy) / (232 - cy), xa = cx + (bx - 8 - cx) * k, xb = cx + (bx + 8 - cx) * k;
        legs += '<line x1="' + f(xa) + '" y1="' + y + '" x2="' + f(xb) + '" y2="' + (y + 14) + '" stroke-width="1.2"/>';
      }
    });
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<g stroke="#ede6d6" fill="none">' + legs + '</g>' +
      '<g class="spin-wheel" style="transform-origin:' + cx + 'px ' + cy + 'px">' +
        '<g stroke="#ede6d6" stroke-width="1.6" fill="none">' + spokes + '</g>' +
        '<g stroke="#ede6d6" stroke-width="2.6" fill="none">' + rim + '</g>' +
        '<g stroke="#f7d36a" stroke-width="2" fill="none">' + tracks + '</g>' +
        bulbs + cars + '</g>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="9" fill="#ede6d6" stroke="#111" stroke-width="1.5"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#2a2d35"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="3" fill="#fff">WONDER WHEEL · SINCE 1920</text>' +
      tag("FYL", 22, 70, 40, "#ff3d7f", -10) + tag("BING BONG", 300, 216, 24, "#5ee27a", -6),
      sky("s3", "#120e33", "#4b2580"));
  }

  /* 4. The Parachute Jump: tall red-orange open steel tower, 12-arm crown, boardwalk and beach below */
  function parachute() {
    const cx = 200, top = 66, base = 206, f = n => n.toFixed(1);
    const half = y => 9 + Math.pow((y - top) / (base - top), 1.6) * 34;   // slender column flaring at the base
    let frame = "";
    [-1, -0.45, 0.45, 1].forEach(k => { let d = ""; for (let y = top; y <= base; y += 4) d += (y === top ? "M" : " L") + f(cx + k * half(y)) + " " + y; frame += '<path d="' + d + '" stroke-width="' + (Math.abs(k) === 1 ? 2.6 : 1.4) + '"/>'; });
    for (let y = top; y < base; y += 10) {
      const h0 = half(y), h1 = half(y + 10);
      frame += '<line x1="' + f(cx - h0) + '" y1="' + y + '" x2="' + f(cx + h0) + '" y2="' + y + '" stroke-width="1"/>' +
               '<line x1="' + f(cx - h0) + '" y1="' + y + '" x2="' + f(cx + h1) + '" y2="' + (y + 10) + '" stroke-width=".9"/>' +
               '<line x1="' + f(cx + h0) + '" y1="' + y + '" x2="' + f(cx - h1) + '" y2="' + (y + 10) + '" stroke-width=".9"/>';
    }
    /* crown: 12 arms seen from the side as a flattened ring, with struts back to the column */
    let crown = "", cables = "";
    const ry = 9, rx = 92, ringY = 50;
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6, ex = cx + rx * Math.cos(a), ey = ringY + ry * Math.sin(a);
      crown += '<line x1="' + cx + '" y1="34" x2="' + f(ex) + '" y2="' + f(ey) + '" stroke-width="2"/>' +
               '<line x1="' + f(cx + 9 * Math.sign(Math.cos(a) || 1)) + '" y1="' + (top + 6) + '" x2="' + f(cx + (ex - cx) * 0.62) + '" y2="' + f(ringY + (ey - ringY) * 0.62) + '" stroke-width="1.2"/>';
      if (Math.sin(a) >= 0) cables += '<line x1="' + f(ex) + '" y1="' + f(ey) + '" x2="' + f(ex) + '" y2="' + f(ey + 18) + '" stroke="#f3e9d8" stroke-width=".8"/>';
    }
    crown += '<ellipse cx="' + cx + '" cy="' + ringY + '" rx="' + rx + '" ry="' + ry + '" fill="none" stroke-width="2.4"/>' +
             '<path d="M' + (cx - 9) + ' ' + top + ' L' + (cx - 4) + ' 34 L' + (cx + 4) + ' 34 L' + (cx + 9) + ' ' + top + '" stroke-width="2"/>' +
             '<rect x="' + (cx - 3) + '" y="24" width="6" height="10" fill="#d9472b"/>';
    /* boardwalk planks */
    let planks = "";
    for (let x = 0; x < 400; x += 12) planks += '<line x1="' + x + '" y1="206" x2="' + (x - 6) + '" y2="216" stroke="#7a5a3a" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="0" y="186" width="400" height="20" fill="#2f7fb7"/>' +
      '<g fill="none" stroke="#d9472b">' + frame + crown + '</g>' + cables +
      '<g class="chute"><path d="M' + (cx + 82) + ' 66 q14 -16 28 0 z" fill="#fff" stroke="#d62828" stroke-width="1.6"/>' +
        '<line x1="' + (cx + 84) + '" y1="66" x2="' + (cx + 96) + '" y2="80" stroke="#fff"/><line x1="' + (cx + 108) + '" y1="66" x2="' + (cx + 96) + '" y2="80" stroke="#fff"/>' +
        '<rect x="' + (cx + 92) + '" y="80" width="8" height="8" fill="#38e8ff" stroke="#000"/></g>' +
      '<rect x="0" y="206" width="400" height="12" fill="#a77b4f"/>' + planks +
      '<rect x="0" y="218" width="400" height="42" fill="#efd39a"/>' +
      tag("GORILLA NEMS", 14, 248, 30, "#fccc0a", -4),
      sky("s4", "#4fb8f5", "#c4ecff"));
  }

  /* 5. The corner: Mermaid Av & W 16 St, brick wall covered in tags */
  function corner() {
    let bricks = "";
    for (let y = 30; y < 210; y += 14) for (let x = (y / 14) % 2 ? -14 : 0; x < 400; x += 28)
      bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="12" fill="#8a3b2e"/>';
    const sign = (x, y, txt, w) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="24" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 17) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="#5e2a22"/>' + bricks +
      '<rect x="0" y="0" width="400" height="30" fill="#141a2e"/>' +
      tag("NEMS", 30, 112, 70, "#38e8ff", -6) +
      tag("BING BONG", 24, 192, 36, "#ff3d7f", -3) +
      tag("FYL", 222, 150, 44, "#fccc0a", -10) +
      tag("GORILLA", 222, 200, 22, "#5ee27a", -5) +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3d45"/>' +
      '<rect x="0" y="210" width="400" height="6" fill="#9aa0aa"/>' +
      /* sign pole */
      '<rect x="331" y="40" width="6" height="176" fill="#4b5563"/>' +
      sign(280, 44, "Mermaid Av", 108) + sign(290, 72, "W 16 St", 88),
      "");
  }

  window.CONEY_SCENES = { train, cyclone, wheel, parachute, corner };

  /* Two-tone "bing bong" chime, like the subway doors */
  window.bingBong = function () {
    try {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      const ctx = window._ac || (window._ac = new AC());
      [[659.3, 0], [523.3, 0.42]].forEach(([f, t]) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, ctx.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.6);
        o.connect(g).connect(ctx.destination); o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.65);
      });
    } catch (e) {}
  };
})();
