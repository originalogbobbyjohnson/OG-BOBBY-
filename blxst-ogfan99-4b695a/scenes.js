/* Blxst scenes (Regions tab: Los Angeles + SoCal; South Central LA, raised later out in the Inland Empire). CSS classes prefixed bx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bxflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bx-flk{animation:bxflick 2.4s infinite}.bx-flk2{animation-delay:.8s}' +
    '@keyframes bxglow{0%,100%{opacity:.45}50%{opacity:1}}.bx-glow{animation:bxglow 2.2s ease-in-out infinite}.bx-g2{animation-delay:-1.1s}' +
    '@keyframes bxclimb{0%{transform:translate(0,0)}100%{transform:translate(-128px,-82px)}}.bx-climb{animation:bxclimb 9s linear infinite}.bx-climb2{animation-delay:-4.5s}' +
    '@keyframes bxcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.bx-car{animation:bxcar 6s linear infinite}.bx-car2{animation-delay:-3s}' +
    '@keyframes bxcarL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.bx-carL{animation:bxcarL 7s linear infinite}' +
    '@keyframes bxsoar{0%{transform:translate(-30px,14px)}50%{transform:translate(120px,-8px)}100%{transform:translate(270px,14px)}}.bx-soar{animation:bxsoar 8s linear infinite;animation-delay:-3.5s}' +
    '@keyframes bxwv{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.bx-wv{transform-box:fill-box;transform-origin:50% 50%;animation:bxwv .7s ease-in-out infinite}' +
    '@keyframes bxsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bx-sp{animation:bxsp 1.4s ease-out infinite}.bx-sp2{animation-delay:.45s}' +
    '@keyframes bxsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.bx-sway{transform-box:fill-box;transform-origin:50% 100%;animation:bxsway 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bx-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, h, c) => '<g class="bx-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#2a201a" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#1f3a2a") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const eagle = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-18 -14 -40 -10q16 2 24 12q-14 -4 -30 2q18 2 28 8l18 2l18 -2q10 -6 28 -8q-16 -6 -30 -2q8 -10 24 -12q-22 -4 -40 10z" fill="' + c + '"/><path d="M-4 2l4 10l4 -10z" fill="' + c + '"/><circle cx="0" cy="-4" r="4" fill="' + c + '"/></g>';
  const GOLD = "#f2c14e", KLINE = "#e56db1", SKY = "#6fb7e9", INK = "#0c0a12";

  /* 1. Martin Luther King Jr. station on the Metro K Line, underground under Crenshaw Blvd: the pink K line band, black station sign with the K bullet, the silver light rail car sliding in */
  function bxstation() {
    let win = ""; for (let x = 30; x < 300; x += 40) win += '<rect x="' + x + '" y="112" width="28" height="24" rx="3" fill="#cfe7f7" opacity=".9"/>';
    let tiles = ""; for (let x = 0; x < 400; x += 24) for (let y = 16; y < 84; y += 12) tiles += '<rect x="' + (x + (y % 24 ? 12 : 0)) + '" y="' + y + '" width="23" height="11" fill="' + ((x + y) % 48 ? "#2c3440" : "#323b48") + '"/>';
    const train = '<g class="anim-train"><rect x="12" y="100" width="310" height="72" rx="16" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' + win +
      '<rect x="12" y="146" width="310" height="8" fill="' + KLINE + '"/><rect x="12" y="157" width="310" height="3" fill="#3a3e46"/>' +
      '<rect x="300" y="106" width="18" height="60" rx="5" fill="#b9bec5"/><circle cx="310" cy="160" r="4" fill="#fff6c2"/>' + bullet(280, 128, "K", KLINE) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#1c222b"/>' + tiles +
      '<rect x="0" y="0" width="400" height="16" fill="#14181e"/>' + [40, 170, 300].map((x, i) => '<rect class="bx-flk' + (i === 1 ? " bx-flk2" : "") + '" x="' + x + '" y="5" width="64" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="84" width="400" height="8" fill="' + KLINE + '"/><rect x="0" y="92" width="400" height="90" fill="#101318"/>' + train +
      '<rect x="0" y="182" width="400" height="8" fill="#eab308"/><rect x="0" y="190" width="400" height="70" fill="#8a8c90"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 190l-30 70" stroke="#7d7f83" stroke-width="1"/>').join("") +
      [24, 376].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="166" fill="#3d4a56"/>').join("") +
      '<rect x="50" y="26" width="300" height="40" rx="3" fill="#111"/><rect x="50" y="26" width="300" height="4" fill="' + KLINE + '"/>' +
      '<text x="64" y="54" ' + font + ' font-size="15" fill="#fff">Martin Luther King Jr</text>' + bullet(326, 47, "K", KLINE) +
      '<rect x="150" y="212" width="100" height="6" rx="3" fill="#fff6c2" opacity=".4" class="bx-flk"/>' +
      tag("SHEE", 286, 238, 22, GOLD, -6),
      "");
  }

  /* 2. Baldwin Hills Scenic Overlook, right above South Central: the long switchback stairway up the dry hill, joggers climbing, the city grid and downtown far below at golden hour */
  function bxoverlook() {
    let steps = ""; for (let i = 0; i < 13; i++) steps += '<rect x="' + (330 - i * 11) + '" y="' + (236 - i * 7) + '" width="16" height="4" fill="#d9c39a"/>';
    const runner = (cls) => '<g class="bx-climb ' + cls + '"><g transform="translate(330 214)"><circle cx="0" cy="-16" r="4" fill="#2a2a32"/><path d="M0 -12v12M0 -8l-6 5M0 -8l6 -3M0 0l-5 8M0 0l6 6" stroke="#2a2a32" stroke-width="3" stroke-linecap="round"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bx2)"/>' +
      '<circle cx="320" cy="58" r="26" fill="#ffd27a" opacity=".85"/>' +
      /* downtown far off */
      '<g fill="#6c6a80" opacity=".8"><rect x="34" y="86" width="10" height="30"/><rect x="48" y="74" width="12" height="42"/><rect x="62" y="80" width="9" height="36"/><path d="M76 62l6 -8l6 8v54h-12z"/><rect x="92" y="84" width="11" height="32"/></g>' +
      /* city grid */
      '<rect x="0" y="112" width="400" height="40" fill="#8f8aa0"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 36) + ' 112l-20 40" stroke="#a7a2b8" stroke-width="1"/>').join("") +
      [118, 128, 140].map(y => '<path d="M0 ' + y + 'h400" stroke="#a7a2b8" stroke-width="1"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<rect class="bx-glow' + (i % 2 ? " bx-g2" : "") + '" x="' + (10 + i * 25) + '" y="' + (116 + (i % 3) * 10) + '" width="3" height="2" fill="#ffe7a0"/>').join("") +
      /* the hill */
      '<path d="M0 260V176q80 -40 170 -36q90 -6 230 -70V260z" fill="#b78d5a"/><path d="M0 260V200q110 -30 220 -22q100 4 180 -40V260z" fill="#9b7446"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (30 + i * 44) + '" cy="' + (214 - (i % 3) * 6) + '" r="' + (5 + (i % 3)) + '" fill="#5b6b3a"/>').join("") +
      steps + '<path d="M344 238L196 144" stroke="#7a5a36" stroke-width="1.5" opacity=".5"/>' + runner("") + runner("bx-climb2"),
      sky("bx2", "#f2a65a", "#f6d9a8"));
  }

  /* 3. Euclid Avenue in Upland, the Inland Empire town his mom moved him to: the pale Madonna of the Trail pioneer monument on its tall base, the pepper trees, Mount Baldy with snow behind, cars rolling the avenue */
  function bxupland() {
    const tree = (x, s) => '<g transform="translate(' + x + ' 0)"><g class="bx-sway"><path d="M0 200v-40" stroke="#4a3626" stroke-width="5"/><ellipse cx="0" cy="150" rx="' + (26 * s) + '" ry="' + (20 * s) + '" fill="#5e7d46"/><ellipse cx="-10" cy="158" rx="' + (16 * s) + '" ry="' + (12 * s) + '" fill="#4f6e3a"/></g></g>';
    const car = (cls, c, y) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="5" fill="' + c + '"/><rect x="10" y="' + (y - 9) + '" width="28" height="10" rx="3" fill="' + c + '"/><circle cx="11" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="40" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bx3)"/>' +
      '<path d="M0 150L70 96l40 22l60 -58l50 34l40 -22l70 54l70 -30V150z" fill="#7d86a6"/><path d="M150 76l20 -16l22 24l-14 -6l-10 8zM250 88l12 -6l12 10l-10 -2z" fill="#f4f6fb"/>' +
      '<rect x="0" y="150" width="400" height="50" fill="#c9b892"/>' + tree(40, 1) + tree(110, .9) + tree(300, 1) + tree(368, .9) +
      /* the monument: stepped base, tall plinth, robed pioneer figure (stylized, no face) */
      '<rect x="160" y="186" width="80" height="14" fill="#d8c8b4"/><rect x="170" y="150" width="60" height="38" fill="#e3d4c0"/><rect x="166" y="146" width="68" height="6" fill="#cdbca6"/>' +
      '<text x="200" y="172" text-anchor="middle" ' + font + ' font-size="6" fill="#8a7a66">NATIONAL OLD TRAILS ROAD</text>' +
      '<path d="M184 146l6 -54q10 -8 20 0l8 54z" fill="#e8dac6"/><path d="M190 108q-12 4 -14 20l8 2q2 -12 8 -14z" fill="#e0d0bb"/><ellipse cx="218" cy="112" rx="8" ry="10" fill="#dccbb5"/>' +
      '<circle cx="200" cy="84" r="9" fill="#e8dac6"/><path d="M190 86q10 -14 20 0q-2 -10 -10 -12q-8 2 -10 12z" fill="#d6c4ac"/><path d="M178 146l-6 -22l8 -2l6 24z" fill="#ddccb6"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55545a"/><path d="M0 230h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      car("bx-car", "#6fb7e9", 210) + car("bx-car bx-car2", "#e56db1", 210) + car("bx-carL", "#f2c14e", 238) +
      sign(16, 18, 92, "N Euclid Ave", 12),
      sky("bx3", "#8cc6f0", "#e8eef4"));
  }

  /* 4. The Evgle studio night (his label, the eagle): an eagle soaring across the window, the vocal mic, the screen with the waveform, meters bouncing, gold plaque on the wall */
  function bxstudio() {
    return svg(
      '<rect width="400" height="260" fill="#120f1a"/>' +
      '<rect x="20" y="20" width="200" height="110" rx="4" fill="url(#bx4)" stroke="#2c2838" stroke-width="5"/>' + stars(8).replace(/cy="(\d+)"/g, (m, y) => 'cy="' + (28 + (+y) % 60) + '"').replace(/cx="(\d+)"/g, (m, x) => 'cx="' + (28 + (+x) % 186) + '"') +
      '<path d="M24 118q40 -14 80 -4t112 -10V126H24z" fill="#2a2440"/>' +
      '<g clip-path="url(#bxwin)"><g class="bx-soar">' + eagle(0, 70, 0.9, GOLD) + '</g></g>' +
      '<rect x="20" y="20" width="200" height="110" rx="4" fill="none" stroke="#2c2838" stroke-width="5"/>' +
      '<rect x="252" y="26" width="58" height="72" rx="3" fill="#2a2235" stroke="' + GOLD + '" stroke-width="3"/><circle cx="281" cy="56" r="18" fill="' + GOLD + '"/><circle cx="281" cy="56" r="6" fill="#2a2235"/><rect x="262" y="82" width="38" height="6" fill="#d7d2e0"/>' +
      '<rect x="320" y="34" width="62" height="18" rx="3" fill="' + KLINE + '" class="bx-glow"/><text x="351" y="47" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="1">ON AIR</text>' +
      /* desk + screen */
      '<rect x="0" y="190" width="400" height="70" fill="#2b2230"/><rect x="0" y="184" width="400" height="8" fill="#43364a"/>' +
      '<rect x="220" y="108" width="150" height="74" rx="4" fill="#07070b" stroke="#3a3446" stroke-width="3"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect class="bx-wv" style="animation-delay:-' + ((i * 0.13) % 0.7).toFixed(2) + 's" x="' + (230 + i * 5.6) + '" y="' + (126 + (i % 5) * 2) + '" width="3" height="' + (34 - (i % 5) * 4) + '" fill="' + SKY + '"/>').join("") +
      '<rect x="230" y="168" width="130" height="4" fill="#2a2f3a"/><rect class="bx-glow" x="230" y="168" width="54" height="4" fill="' + GOLD + '"/>' +
      '<rect x="230" y="200" width="150" height="16" rx="2" fill="#17141c"/>' + Array.from({ length: 13 }, (_, i) => '<rect x="' + (234 + i * 11) + '" y="203" width="7" height="10" fill="' + (i % 4 === 0 ? KLINE : "#5a5e66") + '"/>').join("") +
      /* mic */
      '<path d="M110 260v-96" stroke="#3a3e46" stroke-width="5"/><path d="M84 258h52" stroke="#3a3e46" stroke-width="5"/>' +
      '<rect x="98" y="128" width="24" height="42" rx="12" fill="#c9ced6" stroke="#555" stroke-width="2"/><path d="M102 140h16M102 148h16M102 156h16" stroke="#7a8088" stroke-width="1.5"/>' +
      '<circle cx="148" cy="150" r="20" fill="#222" opacity=".5" stroke="#555" stroke-width="2"/>',
      sky("bx4", "#1b2a55", "#5a3a6a") + '<clipPath id="bxwin"><rect x="22" y="22" width="196" height="106"/></clipPath>');
  }

  /* 5. Crenshaw Blvd and Martin Luther King Jr Blvd: green signs, BLXST tagged on the stucco wall, palms, the SoFi Stadium canopy glowing over Inglewood behind */
  function bxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bx5)"/>' + stars(16) +
      /* SoFi canopy: long low curved translucent roof */
      '<path d="M40 128q160 -64 330 -18v18z" fill="#cfd8e2" opacity=".85"/><path d="M40 128q160 -64 330 -18" stroke="#ffffff" stroke-width="2" fill="none" class="bx-glow"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (70 + i * 30) + ' ' + (118 - Math.sin((i + 1) / 11 * Math.PI) * 30) + 'v' + (12 + Math.sin((i + 1) / 11 * Math.PI) * 26) + '" stroke="#9fb0c2" stroke-width="1.5"/>').join("") +
      '<rect x="40" y="124" width="330" height="10" fill="#6b7890"/>' +
      palm(30, 140, 70) + palm(372, 142, 80) +
      '<rect x="0" y="134" width="400" height="92" fill="#d7b98a"/>' + '<rect x="0" y="134" width="400" height="6" fill="#b8956a"/>' +
      tag("BLXST", 22, 200, 62, GOLD, -6) + tag("EVGLE", 214, 176, 30, SKY, -4) + tag("SHEE", 230, 214, 26, KLINE, -5) + tag("NO LOVE LOST", 30, 220, 16, "#fff", -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#4e4e54"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(290, 98, 104, "Crenshaw Blvd", 12) + sign(286, 124, 112, "M L King Jr Blvd", 11) +
      '<g class="bx-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bx-sp bx-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("bx5", "#141a3a", "#d0764e"));
  }

  window.SCENES = { bxstation: bxstation, bxoverlook: bxoverlook, bxupland: bxupland, bxstudio: bxstudio, bxcorner: bxcorner };
})();
