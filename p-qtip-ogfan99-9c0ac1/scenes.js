/* Q-Tip producer game: St. Albans, Queens. Sutphin Blvd-Archer Av (E/J/Z), Battery Studios, the Village Vanguard, the TWA Flight Center at JFK, and Merrick Blvd & Linden Blvd with the Unisphere. */
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
  const GOLD = "#f2c14e", TEAL = "#3fc1b0", RED = "#e2483d", CREAM = "#f3ead2";
  const X = '<style>@keyframes reel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:reel 2.4s linear infinite}' +
    '@keyframes plane{0%{transform:translate(-60px,40px) rotate(-12deg)}100%{transform:translate(460px,-90px) rotate(-12deg)}}.pl{animation:plane 7s linear infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:1}100%{transform:translate(26px,-46px);opacity:0}}.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:1.2s}' +
    '@keyframes pluck{0%,100%{transform:translateX(0)}50%{transform:translateX(1.2px)}}.pk{animation:pluck .18s linear infinite}' +
    '@keyframes rot{from{transform:rotate(0)}to{transform:rotate(360deg)}}.uni{transform-box:fill-box;transform-origin:50% 50%;animation:rot 30s linear infinite}</style>';

  /* 1. Sutphin Blvd–Archer Av–JFK Airport: underground E/J/Z platform, the Jamaica hub where the LIRR to St. Albans and the AirTrain meet */
  function station() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (14 + i * 56) + '" y="128" width="38" height="22" rx="3" fill="#dfe8f2"/>';
    let tiles = ""; for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 20v80" stroke="#cfc9b8" stroke-width="1"/>';
    return svg(X +
      '<rect width="400" height="260" fill="#efe9d8"/>' + tiles +
      '<rect x="0" y="0" width="400" height="20" fill="#3b3f46"/><rect x="0" y="100" width="400" height="8" fill="#8f2a2a"/>' +
      '<rect x="40" y="34" width="320" height="52" rx="3" fill="#111"/>' +
      '<text x="58" y="56" ' + font + ' font-size="15" fill="#fff">Sutphin Blvd</text><text x="58" y="76" ' + font + ' font-size="11" fill="#fff">Archer Av · JFK Airport</text>' +
      bullet(258, 60, "E", "#0039a6") + bullet(286, 60, "J", "#996633") + bullet(314, 60, "Z", "#996633") +
      '<rect x="0" y="108" width="400" height="10" fill="#26292e"/>' +
      '<g class="anim-train"><rect x="0" y="116" width="360" height="66" rx="5" fill="#b9bfc7" stroke="#6a6e74" stroke-width="2"/>' + win +
      '<rect x="0" y="160" width="360" height="5" fill="#0039a6"/><rect x="330" y="124" width="24" height="30" rx="2" fill="#2c3036"/>' + bullet(342, 172, "E", "#0039a6").replace('r="11"', 'r="8"').replace('font-size="15"', 'font-size="10"').replace('y="177.5"', 'y="175.5"') +
      '<circle cx="356" cy="170" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#f2d21c"/><rect x="0" y="192" width="400" height="68" fill="#9a958a"/>' +
      '<rect x="250" y="200" width="130" height="26" rx="2" fill="#111"/><text x="315" y="212" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">TO LIRR · AIRTRAIN JFK</text><text x="315" y="222" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">ST. ALBANS ▸</text>' +
      '<circle class="bl" cx="30" cy="212" r="5" fill="#7cf08a"/>');
  }

  /* 2. Battery Studios, Manhattan: the brick studio building where the Tribe cut Midnight Marauders, the control room glowing, tape reels turning */
  function battery() {
    let w = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) if (!(r === 2 && c > 1 && c < 4)) w += '<rect x="' + (62 + c * 48) + '" y="' + (40 + r * 40) + '" width="22" height="26" fill="' + (r === 1 && c > 1 && c < 4 ? "#f5d78a" : "#2a2c38") + '"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#b1)"/>' +
      brick(40, 24, 320, 196, "#8a3b2a", "#6e2c1f") + w +
      '<rect x="40" y="18" width="320" height="8" fill="#5e2418"/>' +
      '<rect x="150" y="122" width="110" height="64" fill="#1c1d26" stroke="#c9b48a" stroke-width="3"/>' +
      '<rect x="160" y="160" width="90" height="20" fill="#3a3c48"/>' + (() => { let f = ""; for (let i = 0; i < 9; i++) f += '<rect class="mt mt' + (i % 5 + 1) + '" x="' + (164 + i * 10) + '" y="150" width="5" height="10" fill="' + (i % 3 ? TEAL : GOLD) + '"/>'; return f; })() +
      '<g class="rl"><circle cx="178" cy="138" r="11" fill="#555" stroke="#999"/><path d="M178 127v22M167 138h22" stroke="#222" stroke-width="2"/></g>' +
      '<g class="rl"><circle cx="232" cy="138" r="11" fill="#555" stroke="#999"/><path d="M232 127v22M221 138h22" stroke="#222" stroke-width="2"/></g>' +
      '<rect x="168" y="194" width="74" height="26" fill="#2a1a14"/><rect x="150" y="190" width="110" height="6" fill="#c9b48a"/>' +
      '<rect x="270" y="196" width="80" height="16" rx="2" fill="#151515"/><text x="310" y="207.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">BATTERY STUDIOS</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45474c"/><rect x="0" y="218" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="228" width="60" height="16" rx="4" fill="#f2c200"/><path d="M12 228l8-9h22l8 9z" fill="#f2c200"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="48" cy="246" r="5" fill="#111"/></g>' +
      '<text x="200" y="14" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="3">MIDNIGHT MARAUDERS · 1993</text>',
      sky("b1", "#121634", "#3b2f5a"));
  }

  /* 3. The Village Vanguard, 7th Av South: the red awning down the stairs, the upright bass of The Low End Theory */
  function vanguard() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#v1)"/>' + stars(12) +
      '<rect x="0" y="40" width="400" height="180" fill="#5b4a3e"/>' + (() => { let w = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) w += '<rect x="' + (14 + c * 50) + '" y="' + (52 + r * 34) + '" width="18" height="22" fill="' + ((r + c) % 3 ? "#2b2730" : "#f5d78a") + '"/>'; return w; })() +
      '<path d="M96 150h218l14 26H82z" fill="#c8202f"/><rect x="82" y="176" width="246" height="8" fill="#9a1622"/>' +
      '<text x="205" y="170" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="14" fill="#fff" letter-spacing="1.5">VILLAGE VANGUARD</text>' +
      '<rect x="126" y="184" width="158" height="36" fill="#1a1416"/><path d="M140 220l10-28h110l10 28" fill="#2a2024"/>' +
      '<g transform="translate(340 110)"><path d="M14 0v40" stroke="#3b2414" stroke-width="3"/><ellipse cx="14" cy="64" rx="20" ry="28" fill="#a0522d" stroke="#5a2e14" stroke-width="2"/><path d="M4 64h20" stroke="#2a1608" stroke-width="3"/>' +
      '<g class="pk"><path d="M11 6v86M14 6v86M17 6v86" stroke="#e8e0c8" stroke-width=".8"/></g><rect x="10" y="-6" width="8" height="8" rx="2" fill="#3b2414"/></g>' +
      '<g class="nt"><text x="290" y="120" font-size="18" fill="' + GOLD + '">&#9835;</text></g><g class="nt nt2"><text x="70" y="140" font-size="16" fill="' + TEAL + '">&#9834;</text></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3f4045"/><rect x="0" y="218" width="400" height="4" fill="#8a8c90"/>' +
      '<text x="200" y="26" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="3">7TH AV SOUTH · THE LOW END</text>',
      sky("v1", "#0b0f24", "#2c2346"));
  }

  /* 4. JFK, Queens: the white wing roof of the TWA Flight Center, a jet climbing out on the Award Tour */
  function jfk() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#j1)"/>' +
      '<g class="pl"><path d="M0 0h54l10-4 6 4-6 4-10-4" fill="#eef1f5"/><path d="M0 0h60l8 0-6 6H4z" fill="#eef1f5" stroke="#9aa4b0"/><path d="M22 2l14 16h6L34 2z" fill="#c9d1db"/><path d="M4 0l-6-10h6l8 10z" fill="' + RED + '"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#5e6168"/><rect x="0" y="176" width="400" height="6" fill="#8d9097"/>' +
      '<path d="M40 176C70 120 130 96 200 112C270 96 330 120 360 176z" fill="#f4f2ec" stroke="#c9c5b8" stroke-width="2"/>' +
      '<path d="M120 176C140 140 170 128 200 132C230 128 260 140 280 176z" fill="#2f3e4e"/>' +
      (() => { let m = ""; for (let i = 0; i < 9; i++) m += '<path d="M' + (128 + i * 18) + ' 176V' + (150 - Math.abs(4 - i) * -3) + '" stroke="#c9c5b8" stroke-width="1.2"/>'; return m; })() +
      '<path d="M60 176l26-30M340 176l-26-30" stroke="#d8d4c8" stroke-width="5"/>' +
      '<rect x="0" y="214" width="400" height="4" fill="#f2d21c" opacity=".7"/>' +
      '<g class="car"><rect x="0" y="226" width="62" height="16" rx="4" fill="#f2c200"/><path d="M12 226l8-9h22l8 9z" fill="#f2c200"/><circle cx="14" cy="244" r="5" fill="#111"/><circle cx="50" cy="244" r="5" fill="#111"/></g>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">JFK · QUEENS · ON THE AWARD TOUR</text>',
      sky("j1", "#3d7fc4", "#f2c28a"));
  }

  /* 5. Merrick Blvd and Linden Blvd, St. Albans: green signs, a tagged gate, the Unisphere turning far off over Flushing Meadows */
  function corner() {
    let uni = '<g class="uni"><circle cx="0" cy="0" r="30" fill="none" stroke="#b9c3cc" stroke-width="2"/><ellipse cx="0" cy="0" rx="12" ry="30" fill="none" stroke="#b9c3cc" stroke-width="1.5"/><ellipse cx="0" cy="0" rx="24" ry="30" fill="none" stroke="#b9c3cc" stroke-width="1.2"/><path d="M-30 0h60M-26 -15h52M-26 15h52" stroke="#b9c3cc" stroke-width="1.2"/></g>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#c1)"/>' + stars(14) +
      '<g transform="translate(110 70)">' + uni + '<path d="M0 30v36" stroke="#b9c3cc" stroke-width="4"/><path d="M-6 66h12" stroke="#b9c3cc" stroke-width="4"/></g>' +
      '<rect x="0" y="120" width="400" height="104" fill="#6b6f78"/>' + (() => { let g = ""; for (let y = 124; y < 224; y += 7) g += '<path d="M0 ' + y + 'h400" stroke="#575b63" stroke-width="2"/>'; return g; })() +
      tag("Q-TIP", 30, 192, 46, GOLD, -6) + tag("THE ABSTRACT", 170, 214, 22, TEAL, -4) + tag("KAMAAL", 200, 160, 22, RED, -7) +
      '<rect x="0" y="224" width="400" height="36" fill="#3c3e44"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="346" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="256" y="44" width="140" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="326" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Merrick Blvd</text>' +
      '<rect x="264" y="70" width="128" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="328" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Linden Blvd</text>' +
      '<circle class="bl" cx="349" cy="36" r="5" fill="#fff6c2"/>' +
      '<g class="car"><rect x="0" y="232" width="58" height="16" rx="4" fill="' + RED + '"/><path d="M10 232l8-9h22l8 9z" fill="' + RED + '"/><circle cx="14" cy="250" r="5" fill="#111"/><circle cx="46" cy="250" r="5" fill="#111"/></g>',
      sky("c1", "#0b1030", "#3a2e5a"));
  }

  window.SCENES = { station: station, battery: battery, vanguard: vanguard, jfk: jfk, corner: corner };
})();
