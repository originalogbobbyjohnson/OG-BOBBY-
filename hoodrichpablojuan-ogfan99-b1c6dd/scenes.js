/* hoodrichpablojuan scenes (Regions tab: Atlanta; Candler Road, South DeKalb). CSS classes and ids prefixed hp- (the page's own anim-train is kept).
   1 MARTA Route 15 (Clifton Rd / Candler Rd) pulling up at the Candler Rd / Rainbow Dr stop by South DeKalb Mall.
   2 South DeKalb Mall on Candler Rd: long tan-brick mall front, the arched glass entrance, the lot, shoppers' cars rolling by.
   3 The masjid of his childhood (he grew up Muslim; his father became a full-time minister): white walls, green dome, crescent, evening stars.
   4 The 1017 booth (he signed to Gucci Mane's 1017 Eskimo in 2017; "I'm so icy, an Eskimo"): a frosted vocal booth, icicles, the mic, meters jumping, snow falling.
   5 Candler Rd and Whites Mill Rd: green signs, HOODRICH PABLO JUAN tagged with MONY POWR RSPT, HOODRICH and BLO, the brick Candler Road apartments behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hpflk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.hp-flk{animation:hpflk 2.6s infinite}.hp-flk2{animation-delay:.9s}' +
    '@keyframes hptw{0%,100%{opacity:.25}50%{opacity:1}}.hp-tw{animation:hptw 2.2s ease-in-out infinite}.hp-tw2{animation-delay:-.7s}.hp-tw3{animation-delay:-1.4s}' +
    '@keyframes hpcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.hp-car{animation:hpcar 7s linear infinite}.hp-car2{animation-delay:-3.5s}' +
    '@keyframes hpm{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.hp-m{transform-box:fill-box;transform-origin:50% 100%;animation:hpm .9s ease-in-out infinite}.hp-m2{animation-delay:-.3s}.hp-m3{animation-delay:-.6s}' +
    '@keyframes hpsnow{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(240px);opacity:0}}.hp-sn{animation:hpsnow 5s linear infinite}.hp-sn2{animation-delay:-1.7s}.hp-sn3{animation-delay:-3.4s}' +
    '@keyframes hpbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-30px)}}.hp-bird{animation:hpbird 12s linear infinite}.hp-bird2{animation-delay:-6s}' +
    '@keyframes hpwin{0%,40%{fill:#2a3442}50%,90%{fill:#ffd77a}100%{fill:#2a3442}}.hp-win{animation:hpwin 4s infinite}.hp-win2{animation-delay:-1.3s}.hp-win3{animation-delay:-2.6s}' +
    '@keyframes hpsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.hp-sp{animation:hpsp 1.4s ease-out infinite}.hp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#f5c542", GREEN = "#3ddc84", ICE = "#8fe3ff", BUS = "#0072bc", ORANGE = "#e86a33";
  const car = (cls, color, y) => '<g class="hp-car ' + cls + '"><rect x="0" y="' + y + '" width="64" height="16" rx="5" fill="' + color + '"/><path d="M12 ' + y + 'l8 -10h22l10 10z" fill="' + color + '"/><path d="M22 ' + (y - 1) + 'l5 -7h14l6 7z" fill="#2a3442"/>' +
    '<circle cx="14" cy="' + (y + 16) + '" r="6" fill="#111"/><circle cx="50" cy="' + (y + 16) + '" r="6" fill="#111"/><circle cx="62" cy="' + (y + 6) + '" r="2.5" fill="#fff6c2"/></g>';

  /* 1. Route 15 at Candler Rd / Rainbow Dr: the white MARTA bus with blue + orange stripes pulls up, bus-stop sign, the mall's sign behind */
  function hpbus() {
    const bus = '<g class="anim-train"><rect x="40" y="122" width="250" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (82 + i * 40) + '" y="136" width="34" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="30" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="250" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="250" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="112" height="11" rx="2" fill="#111"/><text x="100" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">15 CANDLER RD</text>' +
      '<circle cx="90" cy="204" r="12" fill="#222"/><circle cx="90" cy="204" r="5" fill="#9aa1a8"/><circle cx="246" cy="204" r="12" fill="#222"/><circle cx="246" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hp1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#ffe2a0" opacity=".9"/>' +
      '<g fill="#3f6e3c"><ellipse cx="20" cy="104" rx="34" ry="24"/><ellipse cx="380" cy="108" rx="30" ry="20"/></g>' +
      /* the mall's long low front far back */
      '<rect x="30" y="88" width="300" height="54" fill="#c8a77a"/><rect x="30" y="88" width="300" height="6" fill="#8a6a46"/>' +
      Array.from({ length: 4 }, (_, r) => '<path d="M30 ' + (102 + r * 10) + 'h300" stroke="#b5946a" stroke-width="1"/>').join("") +
      '<rect x="150" y="64" width="80" height="26" rx="3" fill="#2b3a2e" stroke="' + GOLD + '" stroke-width="1.5"/><text x="190" y="75" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">SOUTH DEKALB</text><text x="190" y="85" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">MALL</text>' +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="342" y="84" width="5" height="80" fill="#6b7178"/><rect x="322" y="62" width="46" height="40" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="345" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="345" y="96" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">15</text>' +
      '<rect x="294" y="106" width="104" height="24" rx="2" fill="#111"/><text x="346" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">CANDLER RD</text><text x="346" y="126" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">@ RAINBOW DR</text>',
      sky("hp1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. South DeKalb Mall: tan-brick front, arched glass entrance, the big name sign, parking lot, cars rolling past on Candler Rd */
  function hpmall() {
    return svg(
      '<rect width="400" height="260" fill="url(#hp2)"/>' +
      '<g class="hp-bird"><path d="M10 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="hp-bird hp-bird2"><path d="M-40 60q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* wings */
      '<rect x="10" y="92" width="380" height="76" fill="#cfae80"/><rect x="10" y="92" width="380" height="8" fill="#8a6a46"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M10 ' + (108 + r * 10) + 'h380" stroke="#bb9a6e" stroke-width="1"/>').join("") +
      [30, 80, 290, 340].map(x => '<rect x="' + x + '" y="118" width="32" height="40" fill="#5a4a3a"/><rect x="' + (x + 3) + '" y="121" width="26" height="34" fill="#2a3442"/>').join("") +
      /* center entrance: tall block with arched glass */
      '<rect x="130" y="60" width="140" height="108" fill="#d8b98a"/><rect x="130" y="60" width="140" height="8" fill="#8a6a46"/>' +
      '<path d="M150 168v-56a50 50 0 0 1 100 0v56z" fill="#33485a" stroke="#e9dcc4" stroke-width="4"/>' +
      '<path d="M200 62v106M150 130h100M168 168v-60M232 168v-60" stroke="#e9dcc4" stroke-width="2.5"/>' +
      '<rect class="hp-flk" x="160" y="140" width="80" height="4" fill="#ffe7a0" opacity=".5"/>' +
      '<rect x="138" y="70" width="124" height="20" rx="3" fill="#1e3226"/><text x="200" y="84" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">SOUTH DEKALB MALL</text>' +
      /* lot */
      '<rect x="0" y="168" width="400" height="92" fill="#55555c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (12 + i * 34) + ' 176l-8 26" stroke="#e8e6df" stroke-width="2"/>').join("") +
      '<rect x="0" y="214" width="400" height="46" fill="#3e3e44"/><path d="M0 238h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      car("", "#c0392b", 212) + car("hp-car2", GREEN, 222) +
      '<rect x="6" y="40" width="4" height="54" fill="#6b7178"/><rect x="0" y="30" width="16" height="12" rx="2" fill="#0f6b3a"/>',
      sky("hp2", "#9fd3f2", "#f3e2c0"));
  }

  /* 3. The masjid: white walls, a green dome with a gold crescent, a slim minaret, warm windows, evening stars */
  function hpmasjid() {
    const stars = [[30, 30], [90, 18], [150, 44], [250, 22], [330, 40], [370, 16], [60, 70], [300, 74]].map((p, i) => '<circle class="hp-tw' + (i % 3 === 1 ? " hp-tw2" : i % 3 === 2 ? " hp-tw3" : "") + '" cx="' + p[0] + '" cy="' + p[1] + '" r="1.8" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#hp3)"/>' + stars +
      '<g fill="#1f3a2a"><ellipse cx="30" cy="190" rx="44" ry="34"/><ellipse cx="370" cy="188" rx="44" ry="32"/></g>' +
      /* minaret */
      '<rect x="300" y="70" width="20" height="126" fill="#f2efe6"/><rect x="294" y="98" width="32" height="6" fill="#d8d2c4"/><path d="M300 70l10 -24l10 24z" fill="#1f8a4c"/><path d="M310 46v-8" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* main hall */
      '<rect x="100" y="120" width="190" height="76" fill="#f2efe6"/><rect x="100" y="120" width="190" height="6" fill="#d8d2c4"/>' +
      '<path d="M140 120a55 50 0 0 1 110 0z" fill="#1f8a4c"/><rect x="186" y="58" width="18" height="12" fill="#1f8a4c"/>' +
      '<path d="M201 46a9 9 0 1 0 0 14a7 7 0 1 1 0 -14z" fill="' + GOLD + '"/>' +
      [118, 152, 222, 256].map((x, i) => '<path class="hp-win' + (i % 3 === 1 ? " hp-win2" : i % 3 === 2 ? " hp-win3" : "") + '" d="M' + x + ' 186v-30a8 8 0 0 1 16 0v30z" fill="#2a3442"/>').join("") +
      '<path d="M180 196v-40a15 15 0 0 1 30 0v40z" fill="#7a4a2a" stroke="#d8d2c4" stroke-width="3"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3d4a3f"/><rect x="0" y="196" width="400" height="6" fill="#c9c3b6"/>' +
      '<rect x="170" y="202" width="50" height="58" fill="#b9b2a2"/>',
      sky("hp3", "#16224a", "#c77a4a"));
  }

  /* 4. The icy booth: frosted glass, icicles, the mic with a pop filter, meters jumping on the console, snow drifting */
  function hpbooth() {
    const snow = Array.from({ length: 14 }, (_, i) => '<circle class="hp-sn' + (i % 3 === 1 ? " hp-sn2" : i % 3 === 2 ? " hp-sn3" : "") + '" cx="' + (14 + i * 28) + '" cy="' + (i % 4) * 10 + '" r="' + (1.5 + (i % 3)) + '" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#hp4)"/>' +
      /* booth glass */
      '<rect x="40" y="28" width="200" height="150" rx="6" fill="#bfe9f7" opacity=".35" stroke="#e8fbff" stroke-width="4"/>' +
      '<path d="M60 40l40 40M150 40l60 60M70 120l30 30" stroke="#ffffff" stroke-width="2" opacity=".45"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (46 + i * 20) + ' 28l6 ' + (10 + (i % 3) * 6) + 'l6 -' + (10 + (i % 3) * 6) + 'z" fill="#e8fbff"/>').join("") +
      /* mic */
      '<rect x="136" y="70" width="4" height="100" fill="#8a8f96"/><rect x="126" y="54" width="24" height="34" rx="12" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      '<circle cx="104" cy="74" r="16" fill="none" stroke="#333" stroke-width="2.5"/><circle cx="104" cy="74" r="13" fill="#222" opacity=".5"/><path d="M118 74h8" stroke="#333" stroke-width="2"/>' +
      /* console */
      '<rect x="250" y="120" width="140" height="70" rx="4" fill="#1e2430" stroke="' + ICE + '" stroke-width="2"/>' +
      [262, 282, 302, 322, 342, 362].map((x, i) => '<rect class="hp-m' + (i % 3 === 1 ? " hp-m2" : i % 3 === 2 ? " hp-m3" : "") + '" x="' + x + '" y="134" width="12" height="42" fill="' + (i % 2 ? GREEN : ICE) + '"/>').join("") +
      '<rect x="250" y="40" width="140" height="70" rx="4" fill="#0e1622" stroke="#3a4a5a" stroke-width="2"/>' +
      '<path d="M258 76q12 -20 24 0t24 0t24 0t24 0t24 0" stroke="' + ICE + '" stroke-width="2.5" fill="none" class="hp-flk"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#dff4fb"/><path d="M0 190q40 -10 80 0t80 0t80 0t80 0t80 0v8h-400z" fill="#ffffff"/>' +
      snow,
      sky("hp4", "#1b2a44", "#3e6a8a"));
  }

  /* 5. Candler Rd & Whites Mill Rd: green signs, a wall with his name tagged, the brick Candler Road apartments behind */
  function hpcorner() {
    const apt = (x) => '<g transform="translate(' + x + ' 0)"><rect x="0" y="66" width="110" height="74" fill="#8a4a36"/><path d="M-4 66h118l-8 -12h-102z" fill="#4a3a36"/>' +
      Array.from({ length: 2 }, (_, r) => Array.from({ length: 4 }, (_, c) => '<rect class="hp-win' + ((r + c) % 3 === 1 ? " hp-win2" : (r + c) % 3 === 2 ? " hp-win3" : "") + '" x="' + (10 + c * 25) + '" y="' + (76 + r * 30) + '" width="14" height="16" fill="#2a3442" stroke="#e9dcc4" stroke-width="2"/>').join("")).join("") +
      '<rect x="0" y="100" width="110" height="3" fill="#e9dcc4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hp5)"/>' +
      '<circle cx="60" cy="36" r="16" fill="#ffd9a0" opacity=".85"/>' +
      apt(10) + apt(140) + apt(270) +
      '<g fill="#2f5a2e"><ellipse cx="130" cy="132" rx="16" ry="14"/><ellipse cx="262" cy="134" rx="14" ry="12"/></g>' +
      /* wall */
      '<rect x="0" y="140" width="400" height="76" fill="#6a6e74"/>' + Array.from({ length: 7 }, (_, r) => '<path d="M0 ' + (150 + r * 10) + 'h400" stroke="#5a5e64" stroke-width="1"/>').join("") +
      tag("HOODRICH", 18, 176, 22, GOLD, -5) + tag("PABLO JUAN", 132, 196, 30, GREEN, -4) +
      tag("MONY POWR RSPT", 18, 206, 12, ICE, -3) + tag("BLO", 316, 182, 24, "#ff6b4a", -8) +
      '<g class="hp-sp"><circle cx="372" cy="160" r="3" fill="#ff6b4a"/></g><g class="hp-sp hp-sp2"><circle cx="380" cy="168" r="2" fill="#ff6b4a"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4e4e54"/><rect x="0" y="216" width="400" height="5" fill="#c9c3b6"/>' +
      '<rect x="384" y="40" width="5" height="176" fill="#6b7178"/>' + sign(290, 46, 96, "CANDLER RD") + sign(262, 72, 124, "WHITES MILL RD"),
      sky("hp5", "#f2a65a", "#f7e1b0"));
  }

  window.SCENES = { hpbus, hpmall, hpmasjid, hpbooth, hpcorner };
})();
