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
      '<text x="72" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Coney Island–Stillwell Av</text>' +
      bullet(266, 84, "D", "#ff6319") + bullet(290, 84, "F", "#ff6319") + bullet(314, 84, "N", "#fccc0a", true) + bullet(338, 84, "Q", "#fccc0a", true) +
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

  /* 2. The Cyclone: white wooden coaster, red car riding the hills */
  function cyclone() {
    const track = "M0 210 L40 210 L90 70 L140 190 L180 110 L220 190 L260 130 L300 190 L340 150 L400 190";
    let lattice = "";
    for (let x = 10; x < 400; x += 18) lattice += '<line x1="' + x + '" y1="210" x2="' + (x + 9) + '" y2="105" stroke="#f4efe6" stroke-width="1.4" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<clipPath id="c2"><path d="' + track + ' L400 260 L0 260Z"/></clipPath>' +
      '<g clip-path="url(#c2)">' + lattice + '</g>' +
      '<path d="' + track + '" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/>' +
      '<path d="' + track + '" fill="none" stroke="#d62828" stroke-width="2" stroke-linejoin="round"/>' +
      '<g><rect x="-14" y="-12" width="28" height="12" rx="3" fill="#d62828" stroke="#000" stroke-width="1.5"/>' +
        '<circle cx="-6" cy="-14" r="3" fill="#ffd9b0"/><circle cx="6" cy="-14" r="3" fill="#ffd9b0"/>' +
        '<animateMotion dur="5s" repeatCount="indefinite" rotate="auto" path="' + track + '"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#20242c"/>' +
      '<rect x="120" y="222" width="160" height="26" rx="4" fill="#d62828"/>' +
      '<text x="200" y="241" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="3" fill="#fff">CYCLONE</text>' +
      tag("NEMS", 300, 54, 34, "#fccc0a", -8),
      sky("s2", "#ff8a3d", "#ffd27a"));
  }

  /* 3. The Wonder Wheel: colored cars, slow spin, lights */
  function wheel() {
    const cx = 200, cy = 112, r = 86, colors = ["#ff3d7f", "#38e8ff", "#fccc0a", "#5ee27a", "#ff6319", "#b06bff"];
    let spokes = "", cars = "", lights = "";
    for (let i = 0; i < 16; i++) {
      const a = i * Math.PI / 8, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
      spokes += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="#f4efe6" stroke-width="1.5"/>';
      lights += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="2.4" fill="#fff6c2" class="blink" style="animation-delay:' + (i * 0.12).toFixed(2) + 's"/>';
      cars += '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')"><g class="car-level"><rect x="-8" y="-2" width="16" height="13" rx="3" fill="' + colors[i % colors.length] + '" stroke="#000" stroke-width="1.2"/></g></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<path d="M200 112 L130 232 M200 112 L270 232" stroke="#f4efe6" stroke-width="7"/>' +
      '<g class="spin-wheel" style="transform-origin:200px 112px">' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#f4efe6" stroke-width="4"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 30) + '" fill="none" stroke="#ff3d7f" stroke-width="2"/>' +
        spokes + lights + cars + '</g>' +
      '<circle cx="200" cy="112" r="10" fill="#d62828" stroke="#000" stroke-width="2"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#20242c"/>' +
      '<rect x="138" y="236" width="124" height="20" rx="4" fill="#38e8ff"/>' +
      '<text x="200" y="251" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="2" fill="#000">WONDER WHEEL</text>' +
      tag("FYL", 28, 70, 40, "#ff3d7f", -10) + tag("BING BONG", 280, 210, 26, "#5ee27a", -6),
      sky("s3", "#140f3a", "#5a2a8a"));
  }

  /* 4. The Parachute Jump: red tower, chute drops and rises, beach below */
  function parachute() {
    let ribs = "", lattice = "";
    for (let i = 0; i < 12; i++) {
      const a = Math.PI + i * Math.PI / 11, x = 200 + 70 * Math.cos(a), y = 52 + 26 * Math.sin(a) * -1;
      ribs += '<line x1="200" y1="40" x2="' + x.toFixed(1) + '" y2="' + (52 + Math.abs(y - 52) * 0.3).toFixed(1) + '" stroke="#e23b3b" stroke-width="2.4"/>';
    }
    for (let y = 60; y < 220; y += 16) {
      const half = 10 + (y - 60) * 0.16;
      lattice += '<line x1="' + (200 - half) + '" y1="' + y + '" x2="' + (200 + half + 3) + '" y2="' + (y + 16) + '" stroke="#e23b3b" stroke-width="1.5"/>' +
                 '<line x1="' + (200 + half) + '" y1="' + y + '" x2="' + (200 - half - 3) + '" y2="' + (y + 16) + '" stroke="#e23b3b" stroke-width="1.5"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="0" y="196" width="400" height="22" fill="#2a7fb8"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#f2d49b"/>' +
      '<path d="M190 52 L170 216 M210 52 L230 216" stroke="#e23b3b" stroke-width="5"/>' + lattice +
      '<path d="M130 54 Q200 30 270 54" fill="none" stroke="#e23b3b" stroke-width="4"/>' + ribs +
      '<rect x="196" y="28" width="8" height="14" fill="#e23b3b"/>' +
      '<g class="chute"><path d="M236 70 q16 -18 32 0 z" fill="#fff" stroke="#d62828" stroke-width="2"/>' +
        '<line x1="238" y1="70" x2="252" y2="86" stroke="#fff"/><line x1="266" y1="70" x2="252" y2="86" stroke="#fff"/>' +
        '<rect x="248" y="86" width="8" height="8" fill="#38e8ff" stroke="#000"/></g>' +
      tag("GORILLA NEMS", 18, 246, 30, "#fccc0a", -4),
      sky("s4", "#58c3ff", "#bfe9ff"));
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
      tag("NEMS", 60, 120, 76, "#38e8ff", -6) +
      tag("BING BONG", 40, 182, 40, "#ff3d7f", -3) +
      tag("FYL", 250, 92, 44, "#fccc0a", -12) +
      tag("GORILLA", 232, 190, 26, "#5ee27a", -5) +
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
