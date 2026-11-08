/* gunna scenes (Regions tab: Atlanta; College Park / South Fulton). CSS classes and ids prefixed gn- (the page's own anim-train is kept).
   1 MARTA Route 89 (Old National Highway) rolling up Old National out of College Park: white MARTA bus with blue + orange bands, the stop flag, pines and a low strip behind.
   2 Ronald E. McNair Middle School, 2800 Burdett Rd (his old school; red + blue, the Astros): brick front, the flag, the sign.
   3 Gunna's Drip Closet inside McNair (Sept 2021, free food, clothes and shoes for students, with Goodr): racks, sneaker wall, grocery shelves, free tags swinging.
   4 Gunna Day, Sept 16 (City of South Fulton proclamation, 2021): a plain city hall with columns, the banner, the scroll, confetti.
   5 Old National Hwy and Burdett Rd: green signs, GUNNA tagged with PUSHIN P, WUNNA and DS4EVER, pines and a big moon over South Fulton behind.
   400 x 260 SVGs. No logos, no faces. Every 9 is drawn by hand with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gnbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.gn-bus{animation:gnbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes gnglow{0%,100%{opacity:.45}50%{opacity:1}}.gn-glow{animation:gnglow 2.2s ease-in-out infinite}.gn-g2{animation-delay:-1.1s}' +
    '@keyframes gnflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(6deg) scaleX(.92)}}.gn-flag{transform-box:fill-box;transform-origin:0% 50%;animation:gnflag 1.6s ease-in-out infinite}' +
    '@keyframes gnswing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.gn-swing{transform-box:fill-box;transform-origin:50% 0%;animation:gnswing 1.8s ease-in-out infinite}.gn-s2{animation-delay:-.9s}' +
    '@keyframes gnfall{from{transform:translateY(-40px)}to{transform:translateY(260px)}}.gn-fall{animation:gnfall 4s linear infinite}.gn-fa2{animation-delay:-1.3s}.gn-fa3{animation-delay:-2.6s}' +
    '@keyframes gncar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.gn-car{animation:gncar 6s linear infinite}' +
    '@keyframes gnsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gn-sp{animation:gnsp 1.4s ease-out infinite}.gn-sp2{animation-delay:.45s}' +
    '@keyframes gntw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.gn-tw{transform-box:fill-box;transform-origin:50% 50%;animation:gntw 1.8s ease-in-out infinite}.gn-tw2{animation-delay:-.6s}.gn-tw3{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.04) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.04) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  /* "89" with the hand-drawn 9, centred on cx */
  const r89 = (cx, y, sz, c) => { const d = sz * 0.56, x0 = cx - d; return '<text x="' + (x0 + d / 2) + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + sz + '" fill="' + c + '">8</text>' + nine(x0 + d, y, sz, c); };
  const RED = "#d8322c", BLUE = "#1f4aa8", GREEN = "#7fe0a0", GOLD = "#f5c542", LILAC = "#b9a2ff", BUS = "#1f4e79", ORANGE = "#f7941d";
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-8" width="4" height="10" fill="#5a3e2a"/><path d="M0 -60l14 26h-6l12 22h-40l12 -22h-6z" fill="#2f5a34"/></g>';

  /* 1. MARTA Route 89 up Old National Hwy */
  function gnbus() {
    const bus = '<g class="gn-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">OLD NATIONAL HWY</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gn1)"/>' +
      '<circle cx="64" cy="40" r="17" fill="#ffe9a8" opacity=".85"/>' +
      pine(20, 120, 1) + pine(56, 118, .8) + pine(262, 120, .9) + pine(300, 122, 1.1) + pine(388, 120, .9) +
      '<rect x="96" y="92" width="150" height="50" fill="#e0d4c0"/><rect x="96" y="88" width="150" height="6" fill="' + RED + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (104 + i * 28) + '" y="104" width="20" height="26" fill="#2a3442"/>').join("") +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="316" y="62" width="46" height="40" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text>' + r89(339, 97, 16, "#fff") +
      '<rect x="270" y="106" width="126" height="14" rx="2" fill="#111"/><text x="333" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">OLD NATIONAL · COLLEGE PARK</text>',
      sky("gn1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. Ronald E. McNair Middle School: brick, red + blue, the flag, the sign */
  function gnschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#gn2)"/>' +
      '<rect x="30" y="80" width="340" height="110" fill="#a8553c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M30 ' + (88 + i * 10) + 'h340" stroke="#8f4630" stroke-width="1"/>').join("") +
      '<rect x="30" y="72" width="340" height="10" fill="#e9e4da"/>' +
      [46, 82, 118, 262, 298, 334].map(x => '<rect x="' + x + '" y="96" width="24" height="22" fill="#2a3442" stroke="#e9e4da" stroke-width="2"/><rect x="' + x + '" y="134" width="24" height="22" fill="#2a3442" stroke="#e9e4da" stroke-width="2"/>').join("") +
      /* entrance block in blue */
      '<rect x="160" y="60" width="80" height="130" fill="' + BLUE + '"/><rect x="160" y="56" width="80" height="6" fill="#e9e4da"/>' +
      '<rect x="176" y="142" width="48" height="48" fill="#2a3442"/><path d="M200 142v48" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="168" y="70" width="64" height="16" rx="2" fill="' + RED + '"/><text x="200" y="82" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">McNAIR</text>' +
      /* a little rocket for the Astros */
      '<g transform="translate(200 116)"><path d="M0 -20q8 10 6 26h-12q-2 -16 6 -26z" fill="#e9e4da"/><path d="M-6 6l-6 8h6zM6 6l6 8h-6z" fill="' + RED + '"/><circle cx="0" cy="-6" r="3" fill="' + BLUE + '" stroke="#fff"/><path class="gn-glow" d="M-4 8l4 10l4 -10z" fill="' + GOLD + '"/></g>' +
      /* flagpole */
      '<rect x="372" y="34" width="3" height="156" fill="#9aa1a8"/><g class="gn-flag"><rect x="375" y="36" width="22" height="14" fill="' + RED + '"/><rect x="375" y="42" width="22" height="3" fill="' + BLUE + '"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#6aa84f"/><path d="M200 190l-34 70h68z" fill="#c9c3b6"/>' +
      /* school sign out front */
      '<rect x="40" y="206" width="120" height="36" rx="3" fill="' + BLUE + '" stroke="' + RED + '" stroke-width="3"/>' +
      '<text x="100" y="220" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">RONALD E. McNAIR</text><text x="100" y="233" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">MIDDLE SCHOOL</text>' +
      '<rect x="60" y="242" width="6" height="12" fill="#666"/><rect x="134" y="242" width="6" height="12" fill="#666"/>',
      sky("gn2", "#8fc6ec", "#f2ead6"));
  }

  /* 3. The Drip Closet: racks, sneaker wall, grocery shelves, FREE tags */
  function gncloset() {
    const shirt = (x, y, c) => '<path d="M' + x + ' ' + y + 'h10l3 6l-3 2v22h-10v-22l-3 -2z" fill="' + c + '" stroke="#111" stroke-width=".6"/>';
    const sneaker = (x, y, c) => '<path d="M' + x + ' ' + y + 'q2 -9 11 -9l5 5q9 2 12 7v4h-28z" fill="' + c + '"/><rect x="' + x + '" y="' + (y + 5) + '" width="28" height="3" fill="#f2efe6"/>';
    const can = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="10" height="14" rx="1" fill="' + c + '"/><rect x="' + x + '" y="' + (y + 4) + '" width="10" height="5" fill="#f2efe6"/>';
    return svg(
      '<rect width="400" height="260" fill="#f1ece2"/><rect x="0" y="0" width="400" height="24" fill="' + BLUE + '"/>' +
      '<text x="200" y="17" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">DRIP CLOSET · EVERYTHING FREE</text>' +
      [80, 200, 320].map(x => '<rect x="' + (x - 18) + '" y="24" width="36" height="5" fill="#ddd"/><circle class="gn-glow' + (x === 200 ? " gn-g2" : "") + '" cx="' + x + '" cy="32" r="5" fill="#fff6c2"/>').join("") +
      /* sneaker wall */
      '<rect x="14" y="44" width="150" height="110" fill="#d9cfbf"/>' + [0, 1, 2, 3].map(r => '<rect x="14" y="' + (70 + r * 26) + '" width="150" height="4" fill="#9a8a72"/>' + [0, 1, 2, 3].map(c => sneaker(20 + c * 36, 66 + r * 26, [RED, "#f2efe6", BLUE, "#1f1f24", GREEN][(r + c) % 5])).join("")).join("") +
      /* clothes rack */
      '<path d="M186 60h110M190 60v96M292 60v96" stroke="#7a7a86" stroke-width="4"/>' + [0, 1, 2, 3, 4, 5, 6].map(i => shirt(194 + i * 14, 62, [RED, BLUE, GOLD, "#1f1f24", "#f2efe6", LILAC, GREEN][i])).join("") +
      '<g class="gn-swing"><path d="M224 92v8" stroke="#555"/><rect x="216" y="100" width="18" height="10" rx="2" fill="' + GOLD + '"/><text x="225" y="107.5" text-anchor="middle" ' + font + ' font-size="5.5" fill="#111">FREE</text></g>' +
      '<g class="gn-swing gn-s2"><path d="M268 92v8" stroke="#555"/><rect x="260" y="100" width="18" height="10" rx="2" fill="' + GOLD + '"/><text x="269" y="107.5" text-anchor="middle" ' + font + ' font-size="5.5" fill="#111">FREE</text></g>' +
      /* grocery shelves */
      '<rect x="312" y="44" width="76" height="112" fill="#c9bda8"/>' + [0, 1, 2].map(r => '<rect x="312" y="' + (78 + r * 34) + '" width="76" height="4" fill="#8a7a62"/>' + [0, 1, 2, 3, 4, 5].map(c => can(316 + c * 12, 64 + r * 34, [RED, GREEN, GOLD, BLUE, "#e06a3a", "#7a3b2e"][(r + c) % 6])).join("")).join("") +
      /* floor */
      '<rect x="0" y="156" width="400" height="104" fill="#b9b2a6"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 60) + ' 156l-40 104" stroke="#a49d91" stroke-width="2"/>').join("") +
      /* bag + box on a table */
      '<rect x="120" y="186" width="160" height="10" fill="#6e4a2a"/><rect x="128" y="196" width="6" height="40" fill="#5a3a20"/><rect x="266" y="196" width="6" height="40" fill="#5a3a20"/>' +
      '<path d="M140 186v-30h34v30z" fill="#e2c79a"/><path d="M148 156q9 -12 18 0" stroke="#a88a5a" stroke-width="3" fill="none"/>' +
      '<rect x="196" y="160" width="60" height="26" fill="#f2efe6" stroke="#bbb"/><rect x="196" y="166" width="60" height="4" fill="' + RED + '"/>',
      "");
  }

  /* 4. Gunna Day, Sept 16: a plain city hall, the banner, the scroll, confetti */
  function gnday() {
    const conf = (cls) => '<g class="gn-fall ' + cls + '">' + Array.from({ length: 22 }, (_, i) => '<rect x="' + ((i * 61 + (cls.length * 13)) % 400) + '" y="' + ((i * 37) % 120) + '" width="4" height="7" fill="' + [RED, GOLD, GREEN, LILAC, BLUE][i % 5] + '" transform="rotate(' + (i * 33) + ' ' + ((i * 61) % 400) + ' ' + ((i * 37) % 120) + ')"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gn4)"/>' +
      '<rect x="70" y="92" width="260" height="110" fill="#e9e4da"/><path d="M60 92l140 -44l140 44z" fill="#f2efe6"/><path d="M84 88l116 -34l116 34z" fill="#d9d4c6"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (92 + i * 44) + '" y="100" width="12" height="96" fill="#f6f4ee" stroke="#cfc8b8"/>').join("") +
      '<rect x="182" y="150" width="36" height="52" fill="#4a3a2a"/>' + conf("gn-fa1") + conf("gn-fa2") + conf("gn-fa3") +
      '<rect x="60" y="196" width="280" height="8" fill="#cfc8b8"/><rect x="50" y="204" width="300" height="8" fill="#bfb8a8"/>' +
      /* banner */
      '<rect x="96" y="112" width="208" height="30" rx="3" fill="' + BLUE + '" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="125" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CITY OF SOUTH FULTON</text><text x="200" y="137.5" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">GUNNA DAY · SEPT 16</text>' +
      /* proclamation scroll */
      '<g transform="translate(28 150)"><rect x="0" y="8" width="44" height="56" fill="#f8f0d8" stroke="#a88a5a"/><rect x="-4" y="2" width="52" height="8" rx="4" fill="#e2d2a8"/><rect x="-4" y="62" width="52" height="8" rx="4" fill="#e2d2a8"/>' +
      '<text x="22" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="6" fill="#4a3a2a">PROCLAMATION</text>' + [30, 36, 42, 48].map(y => '<path d="M6 ' + y + 'h32" stroke="#bba" stroke-width="1.5"/>').join("") + '<circle cx="34" cy="56" r="4" fill="' + RED + '"/></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#6aa84f"/>',
      sky("gn4", "#7fbff0", "#f4ead2"));
  }

  /* 5. Old National Hwy and Burdett Rd: signs, tags, pines, the moon */
  function gncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gn5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 3 ? "" : "gn-tw") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 29) % 50) + '" r="1.2" fill="#fff" opacity=".8"/>').join("") +
      '<circle cx="300" cy="62" r="34" fill="#f4f1e6"/><circle cx="288" cy="54" r="6" fill="#e2ddcc"/><circle cx="312" cy="72" r="8" fill="#e2ddcc"/><circle cx="304" cy="48" r="3" fill="#e2ddcc"/>' +
      '<g fill="#1c2a24">' + [0, 30, 58, 92, 128, 170, 214, 250, 290, 330, 368, 400].map((x, i) => '<path d="M' + x + ' ' + (134 - (i % 3) * 8) + 'l14 -' + (40 + (i % 4) * 8) + 'l14 ' + (40 + (i % 4) * 8) + 'z"/>').join("") + '<rect x="0" y="126" width="400" height="10"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#3e3a48"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#35313e" stroke-width="1"/>').join("") +
      tag("PUSHIN P", 16, 160, 20, GOLD, -4) + tag("GUNNA", 18, 210, 50, GREEN, -5) + tag("WUNNA", 196, 162, 20, LILAC, -6) + tag("DS4EVER", 198, 216, 18, "#fff", -3) +
      '<g class="gn-tw gn-tw2"><path d="M380 178l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + GREEN + '"/></g>' +
      '<g class="gn-sp"><circle cx="186" cy="200" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="gn-sp gn-sp2"><circle cx="192" cy="194" r="2" fill="' + GREEN + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="gn-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="#e9e9f2"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#c9c9d2"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="94" width="6" height="130" fill="#2f2f2f"/>' + sign(286, 96, 112, "Old National Hwy") + sign(304, 122, 84, "Burdett Rd"),
      sky("gn5", "#0e1230", "#5a3a7a"));
  }

  window.SCENES = { gnbus: gnbus, gnschool: gnschool, gncloset: gncloset, gnday: gnday, gncorner: gncorner };
})();
