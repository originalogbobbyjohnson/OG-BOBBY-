/* Blu scenes (Inglewood, LA) */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const palm = (x, y, h) => '<g class="bob"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3b2c22" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 70, -70].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + PALM + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const rain = n => { let s = '<style>@keyframes rn{from{transform:translate(0,-40px)}to{transform:translate(-20px,280px)}}.rn{animation:rn 1.1s linear infinite}</style>'; for (let i = 0; i < n; i++) s += '<path class="rn" style="animation-delay:-' + ((i * 37) % 110) / 100 + 's" d="M' + ((i * 53) % 420) + ' ' + ((i * 29) % 60) + 'l-4 12" stroke="#bcd7ee" stroke-width="1.4" opacity=".7"/>'; return s; };
  const mbul = (x, y, L, c, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + r * 0.45) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.3) + '" fill="#fff">' + L + '</text>'; };
  const mtrain = (y, c) => { let w = ""; for (let x = 34; x < 300; x += 38) w += '<rect x="' + x + '" y="' + (y + 12) + '" width="26" height="20" rx="3" fill="#dff1ff" opacity=".92"/>';
    return '<g class="anim-train"><rect x="10" y="' + y + '" width="310" height="58" rx="12" fill="#e4e7ea" stroke="#7a8088" stroke-width="2"/>' +
      '<rect x="10" y="' + (y + 38) + '" width="310" height="7" fill="' + c + '"/>' + w +
      '<rect x="300" y="' + (y + 8) + '" width="18" height="26" rx="5" fill="#2a2f36"/><circle cx="310" cy="' + (y + 48) + '" r="4" fill="#fff6c2"/>' +
      '<rect x="40" y="' + (y + 58) + '" width="40" height="8" rx="3" fill="#333"/><rect x="250" y="' + (y + 58) + '" width="40" height="8" rx="3" fill="#333"/></g>'; };
  const msign = (x, y, w, name, L, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="40" rx="4" fill="#15171b"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="' + c + '"/>' +
    '<text x="' + (x + 12) + '" y="' + (y + 27) + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + name + '</text>' + mbul(x + w - 20, y + 21, L, c, 11);
  const cloud = (x, y, s, c) => '<g fill="' + (c || "#f2f4f8") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (26 * s) + '" ry="' + (11 * s) + '"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (y - 6 * s) + '" rx="' + (14 * s) + '" ry="' + (10 * s) + '"/><ellipse cx="' + (x + 10 * s) + '" cy="' + (y - 9 * s) + '" rx="' + (16 * s) + '" ry="' + (12 * s) + '"/></g>';
  const crowd = (x0, n, y, cols) => { let s = ""; for (let i = 0; i < n; i++) s += '<g class="bob" style="animation-delay:-' + (i * 0.17).toFixed(2) + 's"><rect x="' + (x0 + i * 22) + '" y="' + y + '" width="14" height="30" rx="6" fill="' + cols[i % cols.length] + '"/><circle cx="' + (x0 + 7 + i * 22) + '" cy="' + (y - 6) + '" r="7" fill="#1e1a18"/></g>'; return s; };
  const PALM = "#2f5a3a";
  const PINK = "#e96bb0", BLUE = "#4aa3ff", GOLD = "#f2b134", CORAL = "#e86a5a";
  const plane = (y, d) => '<g class="car" style="animation-duration:' + d + 's"><path d="M0 ' + y + 'l40 -2 8 -8h4l-3 9 14 1 5 -4h3l-2 5 2 5h-3l-5 -4 -14 1 3 9h-4l-8 -8z" fill="#e8ecf2"/></g>';
  const drift = '<style>@keyframes dr{from{transform:translateX(-60px)}to{transform:translateX(60px)}}.dr{animation:dr 9s ease-in-out infinite alternate}.dr2{animation-duration:12s;animation-delay:-4s}</style>';

  /* 1. Metro K Line pulling into Downtown Inglewood (street-level platform on Florence Ave) */
  function station() {
    return svg('<rect width="400" height="260" fill="url(#s1)"/>' + stars(8) +
      palm(30, 152, 92) + palm(372, 152, 80) +
      msign(70, 14, 260, "Downtown Inglewood", "K", PINK) +
      '<path d="M90 54v30M310 54v30" stroke="#55585e" stroke-width="4"/>' +
      mtrain(92, PINK) +
      '<rect x="0" y="158" width="400" height="8" fill="#eab308"/><rect x="0" y="166" width="400" height="30" fill="#9a9ca1"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a2c32"/>' +
      tag("BLU", 40, 242, 44, BLUE, -5) + tag("SOUL AMAZIN", 170, 240, 24, GOLD, -6),
      sky("s1", "#1a2350", "#e98a5e"));
  }

  /* 2. The Forum on Manchester: the ring of tall white columns, cars rolling past */
  function forum() {
    let cols = ""; for (let i = 0; i < 17; i++) { const x = 46 + i * 19, h = 96 - Math.abs(i - 8) * 3; cols += '<rect x="' + x + '" y="' + (176 - h) + '" width="9" height="' + h + '" fill="#f4f1ea"/>'; }
    return svg('<rect width="400" height="260" fill="url(#s2)"/>' +
      '<ellipse cx="200" cy="86" rx="176" ry="18" fill="#e9e3d6"/><ellipse cx="200" cy="82" rx="168" ry="13" fill="#cfd7e2"/>' +
      '<rect x="40" y="86" width="320" height="90" fill="#c9cfd8"/><rect x="40" y="150" width="320" height="26" fill="#a9b1bd"/>' + cols +
      '<rect x="0" y="176" width="400" height="14" fill="#7d8a5a"/>' + palm(20, 182, 90) + palm(382, 182, 96) +
      '<rect x="0" y="190" width="400" height="70" fill="#55575c"/><path d="M0 225h400" stroke="#e8e2c4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="car"><rect x="0" y="200" width="44" height="16" rx="5" fill="' + CORAL + '"/><circle cx="10" cy="216" r="5" fill="#111"/><circle cx="34" cy="216" r="5" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="232" width="44" height="16" rx="5" fill="' + BLUE + '"/><circle cx="10" cy="248" r="5" fill="#111"/><circle cx="34" cy="248" r="5" fill="#111"/></g>',
      sky("s2", "#3d7fc4", "#f6c27a"));
  }

  /* 3. The giant donut on the drive-in roof by the 405, jets dropping into LAX */
  function donut() {
    return svg('<rect width="400" height="260" fill="url(#s3)"/>' + plane(40, 9) + plane(70, 13) +
      '<rect x="150" y="128" width="12" height="40" fill="#8a8c90"/><rect x="238" y="128" width="12" height="40" fill="#8a8c90"/>' +
      '<g><circle cx="200" cy="88" r="62" fill="#c98a3c" stroke="#8a5a22" stroke-width="3"/><circle cx="200" cy="88" r="22" fill="url(#s3)" stroke="#8a5a22" stroke-width="3"/>' +
      '<path d="M150 70q50 -40 100 0" stroke="#e0a95a" stroke-width="8" fill="none" opacity=".7"/></g>' +
      '<rect x="110" y="166" width="180" height="44" fill="#f2efe6" stroke="#bbb" stroke-width="2"/><rect x="120" y="176" width="160" height="22" fill="#6aa9d8" opacity=".8"/>' +
      '<rect x="100" y="160" width="200" height="8" fill="#e3dccb"/>' + palm(60, 210, 100) + palm(350, 210, 86) +
      '<rect x="0" y="210" width="400" height="50" fill="#55575c"/><g class="carL"><rect x="0" y="226" width="40" height="14" rx="4" fill="' + GOLD + '"/><circle cx="8" cy="240" r="4" fill="#111"/><circle cx="32" cy="240" r="4" fill="#111"/></g>',
      sky("s3", "#58a9e8", "#cfe8f7"));
  }

  /* 4. Below the Heavens: Inglewood rooftops at dusk, light breaking through drifting clouds */
  function heavens() {
    let rays = ""; for (let i = 0; i < 7; i++) rays += '<path class="bl' + (i % 4 ? " bl" + (i % 4 + 1) : "") + '" d="M200 40L' + (40 + i * 54) + ' 200" stroke="#ffe7a6" stroke-width="10" opacity=".25"/>';
    let roofs = ""; [[0, 60, 150], [56, 70, 168], [122, 64, 156], [182, 80, 170], [258, 60, 150], [314, 86, 162]].forEach(r => roofs += '<path d="M' + r[0] + ' ' + (r[2] + 20) + 'l' + (r[1] / 2) + ' -20 ' + (r[1] / 2) + ' 20z" fill="#3b2a3a"/><rect x="' + r[0] + '" y="' + (r[2] + 20) + '" width="' + r[1] + '" height="' + (240 - r[2]) + '" fill="#2a2030"/><rect x="' + (r[0] + r[1] / 2 - 6) + '" y="' + (r[2] + 32) + '" width="12" height="12" fill="#ffd27a" class="flk"/>');
    return svg(drift + '<rect width="400" height="260" fill="url(#s4)"/>' + rays +
      '<circle cx="200" cy="40" r="20" fill="#fff3c4"/>' +
      '<g class="dr">' + cloud(110, 60, 1.6) + cloud(300, 80, 1.3) + '</g><g class="dr dr2">' + cloud(210, 100, 1.2, "#f6dce8") + '</g>' +
      roofs + palm(240, 200, 70) +
      '<text x="200" y="250" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff" letter-spacing="3">BELOW THE HEAVENS</text>',
      sky("s4", "#5a4a8a", "#f39a6b"));
  }

  /* 5. The corner: Manchester Blvd and La Brea Ave, BLU tag, the LAX Theme Building arches behind */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' + stars(8) +
      '<path d="M92 140Q170 -10 248 140" stroke="#f4f4f0" stroke-width="8" fill="none"/><path d="M122 140Q170 30 218 140" stroke="#dcdcd6" stroke-width="6" fill="none"/>' +
      '<rect x="162" y="96" width="16" height="44" fill="#e6e6e0"/><ellipse cx="170" cy="96" rx="40" ry="10" fill="#f4f4f0"/><rect x="134" y="88" width="72" height="6" rx="3" fill="#9fc6e0"/>' +
      '<circle class="bl" cx="170" cy="80" r="3" fill="#9fe0ff"/>' +
      palm(36, 140, 84) + palm(300, 140, 70) +
      brick(0, 140, 400, 84, "#4a5f8a", "#3b4d73") +
      tag("BLU", 30, 204, 54, BLUE, -5) + tag("DIRTY SCIENCE", 150, 210, 22, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + CORAL + '"/></g>' +
      '<rect x="346" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(268, 44, 128, "Manchester Blvd") + sign(292, 70, 100, "La Brea Ave") +
      '<circle class="bl" cx="349" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#141838", "#c76a5a"));
  }

  window.SCENES = { station: station, forum: forum, donut: donut, heavens: heavens, corner: corner };
})();
