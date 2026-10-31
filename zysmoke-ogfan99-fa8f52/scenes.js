/* North Shore, Staten Island opening scenes for Zy Smoke's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes sail{from{transform:translateX(-160px)}to{transform:translateX(440px)}}' +
    '.sail{animation:sail 18s linear infinite;animation-delay:-8s}' +
    '@keyframes ship{from{transform:translateX(420px)}to{transform:translateX(-260px)}}' +
    '.ship{animation:ship 22s linear infinite;animation-delay:-11s}' +
    '@keyframes carsR{from{transform:translateX(-40px)}to{transform:translateX(420px)}}' +
    '@keyframes carsL{from{transform:translateX(420px)}to{transform:translateX(-40px)}}' +
    '.carR{animation:carsR 4s linear infinite}.carL{animation:carsL 5s linear infinite}.d1{animation-delay:-1.3s}.d2{animation-delay:-2.6s}' +
    '@keyframes rain{from{transform:translate(0,-30px)}to{transform:translate(-10px,30px)}}' +
    '.rain{animation:rain .6s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes halo{0%,100%{opacity:.5}50%{opacity:1}}' +
    '.halo{animation:halo 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const ORANGE = "#ff7a1a", VIOLET = "#9b7bff", CYAN = "#38e8ff";
  /* the orange ferry, drawn facing right at 0,0 */
  const ferry = s => '<g transform="scale(' + s + ')">' +
    '<path d="M0 30h150l-10 16H10z" fill="' + ORANGE + '" stroke="#7a3a0a" stroke-width="1.5"/>' +
    '<rect x="16" y="14" width="118" height="16" fill="' + ORANGE + '" stroke="#7a3a0a" stroke-width="1.5"/>' +
    '<rect x="40" y="2" width="70" height="12" fill="' + ORANGE + '" stroke="#7a3a0a" stroke-width="1.5"/>' +
    (function () { let w = ""; for (let x = 22; x < 130; x += 10) w += '<rect x="' + x + '" y="18" width="6" height="7" fill="#1d2a38"/>'; for (let x = 46; x < 106; x += 10) w += '<rect x="' + x + '" y="5" width="6" height="5" fill="#1d2a38"/>'; return w; })() +
    '<rect x="72" y="-8" width="6" height="10" fill="#f2f2f2"/></g>';

  /* 1. St. George: the SIR pulling into the terminal, the ferry slips through the big windows */
  function train() {
    let windows = "";
    for (let x = 22; x < 260; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d2430"/>' +
      /* terminal glass wall onto the harbor */
      '<rect x="0" y="0" width="400" height="118" fill="url(#g1)"/>' +
      '<rect x="0" y="80" width="400" height="38" fill="#2c5878"/>' +
      '<g class="sail"><g transform="translate(0 74)">' + ferry(0.6) + '</g></g>' +
      '<path class="shim" d="M20 104h40M260 108h60" stroke="#ffcf6b" stroke-width="2"/>' +
      (function () { let m = ""; for (let x = 0; x <= 400; x += 50) m += '<rect x="' + (x - 2) + '" y="0" width="4" height="118" fill="#3a4450"/>'; return m; })() +
      '<rect x="0" y="0" width="400" height="10" fill="#3a4450"/><rect x="0" y="40" width="400" height="3" fill="#3a4450"/>' +
      /* black station sign */
      '<rect x="92" y="16" width="216" height="32" rx="4" fill="#111"/><rect x="92" y="16" width="216" height="4" fill="#fff"/>' +
      '<text x="104" y="40" ' + FONT + ' font-size="15" fill="#fff">St. George</text>' + sir(280, 33) +
      '<rect x="0" y="118" width="400" height="72" fill="#11161d"/>' +
      /* the SIR car: stainless with the blue band */
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="6" fill="#0039a6"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' + sir(270, 144) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c232c"/>' +
      tag("NORTH SHORE", 18, 240, 26, ORANGE, -4) + tag("ZY SMOKE", 240, 242, 28, VIOLET, -7),
      sky("g1", "#2a3a6a", "#e88a5b"));
  }

  /* 2. The Staten Island Ferry crossing the harbor at sunset, lower Manhattan behind, gulls */
  function boat() {
    let city = "";
    [[0, 14, 30], [16, 10, 44], [28, 16, 26], [46, 12, 58], [60, 18, 36], [80, 10, 50], [92, 14, 30], [108, 20, 40], [130, 12, 34], [144, 16, 48]].forEach(b =>
      city += '<rect x="' + (150 + b[0]) + '" y="' + (100 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="#3b3a5a"/>');
    city += '<rect x="206" y="12" width="14" height="88" fill="#3b3a5a"/><path d="M206 12l7-10 7 10z" fill="#3b3a5a"/><rect x="212" y="-8" width="2" height="12" fill="#3b3a5a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="80" cy="76" r="24" fill="#ffb35a"/>' + city +
      /* the statue far off on the left, green copper */
      '<path d="M36 100v-22l3-4v-8l2-6 2 6v8l3 4v22z" fill="#5fae9a"/><path d="M41 60l2-10" stroke="#5fae9a" stroke-width="2"/><rect x="30" y="98" width="22" height="4" fill="#5fae9a"/>' +
      '<rect x="0" y="100" width="400" height="160" fill="#2f5f86"/>' +
      '<path class="shim" d="M10 120h60M300 116h60M60 220h80M260 236h90" stroke="#ffd7a0" stroke-width="2"/>' +
      '<path class="shim shim2" d="M140 200h50M330 196h40" stroke="#ffd7a0" stroke-width="2"/>' +
      '<g class="sail"><g class="bob"><g transform="translate(0 132)">' + ferry(1) + '</g><path d="M10 180q70 6 140 0" stroke="#e6f2fa" stroke-width="3" fill="none" opacity=".7"/></g></g>' +
      '<path d="M300 50q6-6 12 0q6-6 12 0M340 70q5-5 10 0q5-5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>' +
      tag("FREE RIDE", 220, 248, 28, ORANGE, -4),
      sky("g2", "#4a3a7a", "#ffb07a"));
  }

  /* 3. The Bayonne Bridge: the long steel arch over the Kill Van Kull, a container ship sliding under */
  function bayonne() {
    let hangers = "";
    for (let x = 60; x <= 340; x += 14) { const y = 150 - Math.round(100 * (1 - Math.pow((x - 200) / 160, 2))); hangers += '<path d="M' + x + ' ' + (y + 8) + 'V150" stroke="#9aa4ae" stroke-width="1.2"/>'; }
    let boxes = "";
    const cols = ["#c0392b", "#2e86c1", "#27ae60", "#f39c12", "#8e44ad", "#d35400"];
    for (let i = 0; i < 12; i++) boxes += '<rect x="' + (30 + i * 13) + '" y="' + (i % 2 ? 176 : 170) + '" width="12" height="' + (i % 2 ? 10 : 16) + '" fill="' + cols[i % 6] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* the arch: steel gray truss */
      '<path d="M40 150Q200 -50 360 150" fill="none" stroke="#8b96a0" stroke-width="10"/>' +
      '<path d="M40 150Q200 -30 360 150" fill="none" stroke="#6f7a84" stroke-width="4"/>' + hangers +
      '<rect x="0" y="146" width="400" height="8" fill="#6f7a84"/><rect x="0" y="144" width="400" height="2" fill="#c9d1d8"/>' +
      '<rect x="30" y="150" width="14" height="40" fill="#6f7a84"/><rect x="356" y="150" width="14" height="40" fill="#6f7a84"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#2f5f7a"/>' +
      '<path class="shim" d="M20 206h60M260 220h70M120 240h60" stroke="#cfe8f6" stroke-width="2"/>' +
      /* the container ship */
      '<g class="ship"><path d="M20 186h200l-14 18H34z" fill="#1d2a38"/><rect x="20" y="186" width="200" height="4" fill="#c0392b"/>' + boxes +
      '<rect x="190" y="156" width="22" height="30" fill="#f2f2f2"/><rect x="194" y="160" width="14" height="5" fill="#1d2a38"/></g>' +
      /* the North Shore bank */
      '<path d="M0 230q200-12 400 0v30H0z" fill="#4a5a3a"/>' +
      tag("KILL VAN KULL", 18, 252, 24, CYAN, -3),
      sky("g3", "#7fb6de", "#f4e2c0"));
  }

  /* 4. The Goethals Bridge at night in the rain: the twin cable-stayed spans, headlights streaming, a halo glow */
  function goethals() {
    let cables = "";
    [120, 280].forEach(t => { for (let i = 1; i <= 6; i++) cables += '<path d="M' + t + ' ' + (40 + i * 6) + 'L' + (t - i * 16) + ' 140M' + t + ' ' + (40 + i * 6) + 'L' + (t + i * 16) + ' 140" stroke="#cfd6de" stroke-width="1"/>'; });
    let drops = "";
    for (let i = 0; i < 40; i++) drops += '<path d="M' + ((i * 53) % 400) + ' ' + ((i * 37) % 260) + 'l-3 10" stroke="#9fc4ff" stroke-width="1" opacity=".55"/>';
    const car = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="16" height="5" rx="2" fill="#2a2a34"/><circle cx="' + (cls.indexOf("carR") > -1 ? 16 : 0) + '" cy="' + (y + 2.5) + '" r="2.4" fill="' + col + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(10) +
      '<circle class="halo" cx="330" cy="44" r="22" fill="none" stroke="#fff1c2" stroke-width="3"/><circle cx="330" cy="44" r="12" fill="#fff1c2" opacity=".85"/>' +
      /* towers: pale concrete, tapered */
      '<path d="M114 140l4-104h4l4 104zM274 140l4-104h4l4 104z" fill="#d8dde3"/>' + cables +
      '<rect x="0" y="138" width="400" height="8" fill="#b9c0c8"/><rect x="0" y="146" width="400" height="3" fill="#7b8794"/>' +
      car("carR", 132, "#fff6c2") + car("carR d1", 132, "#fff6c2") + car("carL d2", 140, "#ff4040") + car("carL", 140, "#ff4040") +
      '<rect x="0" y="150" width="400" height="110" fill="#14223a"/>' +
      /* light reflections in the Arthur Kill */
      '<path class="shim" d="M110 170v30M280 172v24M60 190h40M300 210h50" stroke="#ffe7a8" stroke-width="2" opacity=".6"/>' +
      '<g class="rain">' + drops + '</g>' +
      tag("NIGHT SHIFT", 20, 240, 28, VIOLET, -4) + tag("HALO", 270, 244, 30, "#fff1c2", -6),
      sky("g4", "#0b0b22", "#2a2a5a"));
  }

  /* 5. Richmond Terrace and Union Av in Mariners Harbor: green signs, Zy Smoke's wall, the cranes across the water */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      /* container cranes across the Kill */
      '<path d="M330 90v-40h40v40M320 50h60M372 50l14 14" stroke="#4a5a7a" stroke-width="3" fill="none"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#2e3a44"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#36444f"/>'; return b; })() +
      tag("ZY SMOKE", 26, 126, 40, VIOLET, -7) + tag("UNDERDOG", 36, 172, 28, ORANGE, -3) + tag("10303", 60, 208, 24, CYAN, -2) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="254" y="88" width="98" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Richmond Ter</text>' +
      '<rect x="266" y="110" width="74" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Union Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a2a4a"));
  }

  window.SCENES = { train, boat, bayonne, goethals, corner };
})();
