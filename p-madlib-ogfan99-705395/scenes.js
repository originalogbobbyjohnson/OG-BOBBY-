/* Madlib producer game: Oxnard, CA. Oxnard Transit Center, the record crates, the Bomb Shelter, Highland Park, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes reel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:reel 3s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-80px)}}.wv{animation:wave 2s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd23f", RED = "#e2483d", BLUE = "#4fb3d9", ORANGE = "#ff6319", BRICK = "#9a4a34", BRICK2 = "#7c3a29";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* Queensboro Bridge: cantilever towers + truss, light gray-tan steel */
  const MUST = "#f2b134", ORG = "#e4572e", TEAL = "#5fb3a1";
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q4-40 2-80" stroke="#2a2018" stroke-width="5" fill="none"/>' +
    '<path d="M2-80q-26-6-40 12M2-80q-18-20-36-16M2-80q4-24 22-30M2-80q24-10 38 6M2-80q22 4 30 24M2-80q-10 14-24 28" stroke="#1d2a1c" stroke-width="5" fill="none" stroke-linecap="round"/></g>';
  const mtns = (y, col) => '<path d="M0 ' + y + 'l40-28 30 14 46-40 38 30 30-18 52 34 40-26 46 22 40-30 38 36v40H0z" fill="' + col + '"/>';

  /* 1. Metrolink train pulling into Oxnard Transit Center at sunset, mountains behind */
  function station() {
    let win = ""; for (let x = 24; x < 290; x += 40) win += '<rect x="' + x + '" y="128" width="28" height="18" rx="3" fill="#cfe6f5"/>';
    return svg('<rect width="400" height="260" fill="url(#s1)"/>' + mtns(150, "#6b4a5e") +
      '<circle cx="320" cy="70" r="22" fill="#ffd58a" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="10" fill="#c7a77d"/><path d="M60 150v-46h280v46" fill="#d9b98c"/><path d="M50 106l150-30 150 30z" fill="#a64b2a"/>' +
      '<rect x="20" y="18" width="240" height="34" rx="4" fill="#111"/><rect x="20" y="18" width="240" height="4" fill="#fff"/><text x="34" y="42" ' + font + ' font-size="16" fill="#fff">Oxnard Transit Center</text>' +
      '<g class="anim-train"><rect x="8" y="118" width="300" height="56" rx="6" fill="#f2f2ee" stroke="#5a6470" stroke-width="2"/>' +
      '<rect x="8" y="150" width="300" height="6" fill="#1f4e8c"/><rect x="8" y="158" width="300" height="3" fill="' + ORG + '"/>' + win +
      '<circle cx="300" cy="166" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="174" width="400" height="8" fill="#eab308"/><rect x="0" y="182" width="400" height="78" fill="#3a3330"/>' +
      '<rect x="40" y="196" width="150" height="26" rx="3" fill="#111"/><text x="115" y="214" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">VENTURA COUNTY LINE</text>' +
      tag("MADLIB", 236, 240, 32, MUST, -5), sky("s1", "#2b1d3f", "#f08a4b"));
  }

  /* 2. Record shop: crates of dusty vinyl, a record spinning on the listening deck, prices flickering */
  function crates() {
    let cr = "";
    for (let c = 0; c < 4; c++) {
      const x = 20 + c * 92;
      cr += '<rect x="' + x + '" y="170" width="82" height="58" fill="#7a5530" stroke="#4a311a" stroke-width="2"/>';
      for (let i = 0; i < 7; i++) cr += '<rect x="' + (x + 6 + i * 10) + '" y="' + (150 + (i * 7 + c * 5) % 14) + '" width="8" height="30" fill="' + ["#e4572e", "#f2b134", "#5fb3a1", "#e8e0cc", "#2b2b2b", "#8c3b7a", "#3d6fb6"][(i + c) % 7] + '"/>';
    }
    return svg('<rect width="400" height="260" fill="#2a1f18"/><rect width="400" height="140" fill="#3b2b20"/>' +
      '<rect x="20" y="20" width="160" height="96" fill="#1b140f" stroke="#6b4c30" stroke-width="3"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (30 + i * 37) + '" y="30" width="32" height="32" fill="' + [ORG, TEAL, MUST, "#8c3b7a"][i] + '"/><circle cx="' + (46 + i * 37) + '" cy="46" r="9" fill="#111" opacity=".6"/>').join("") +
      [0, 1, 2, 3].map(i => '<rect x="' + (30 + i * 37) + '" y="72" width="32" height="32" fill="' + ["#3d6fb6", "#e8e0cc", ORG, TEAL][i] + '"/>').join("") +
      '<rect x="220" y="24" width="150" height="40" rx="4" fill="#111" stroke="' + MUST + '" stroke-width="2"/>' +
      '<text class="flk" x="295" y="51" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + MUST + '">DUSTY BREAKS</text>' +
      '<rect x="230" y="80" width="130" height="52" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
      '<g class="vn"><circle cx="280" cy="106" r="22" fill="#0b0b0b"/><circle cx="280" cy="106" r="15" fill="none" stroke="#2a2a2a"/><circle cx="280" cy="106" r="7" fill="' + ORG + '"/><rect x="278" y="99" width="4" height="4" fill="#fff"/></g>' +
      '<path d="M344 88l-12 22" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="0" y="140" width="400" height="10" fill="#4a3526"/>' + cr +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#e8e0cc" opacity=".8" letter-spacing="3">DIG DEEPER</text>');
  }

  /* 3. The Bomb Shelter: sampler pads flashing, meters bouncing, tape reel turning */
  function bombshelter() {
    let pads = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (52 + c * 24) + '" y="' + (186 + r * 22) + '" width="18" height="16" rx="3" fill="' + (r ? MUST : ORG) + '"/>';
    let eq = ""; for (let i = 0; i < 6; i++) eq += '<rect class="mt mt' + (i % 5 + 1) + '" x="' + (262 + i * 14) + '" y="70" width="9" height="46" fill="' + (i > 3 ? ORG : TEAL) + '"/>';
    return svg('<rect width="400" height="260" fill="#1c1914"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="0" y="' + (i * 24) + '" width="400" height="22" fill="#26221b"/>').join("") +
      '<rect x="24" y="22" width="190" height="34" rx="3" fill="#120f0b" stroke="' + MUST + '" stroke-width="2"/>' +
      '<text x="119" y="46" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + MUST + '">THE BOMB SHELTER</text>' +
      '<circle class="bl" cx="40" cy="80" r="6" fill="' + ORG + '"/><text x="54" y="85" ' + font + ' font-size="12" fill="#e8e0cc">REC</text>' +
      '<rect x="250" y="60" width="104" height="64" rx="3" fill="#111" stroke="#444"/>' + eq +
      '<g class="rl"><circle cx="150" cy="96" r="26" fill="#222" stroke="#999" stroke-width="2"/><path d="M150 72v48M126 96h48" stroke="#999" stroke-width="3"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#4b3a2a"/><rect x="0" y="150" width="400" height="6" fill="#5e4935"/>' +
      '<rect x="36" y="166" width="132" height="76" rx="5" fill="#3a3d42" stroke="#1f2124" stroke-width="2"/>' +
      '<rect x="46" y="172" width="64" height="10" fill="#1f3a26"/><circle cx="130" cy="177" r="4" fill="#ccc"/><circle cx="150" cy="177" r="4" fill="#ccc"/>' + pads +
      '<rect x="196" y="170" width="170" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
      '<g class="vn"><circle cx="252" cy="205" r="28" fill="#0b0b0b"/><circle cx="252" cy="205" r="19" fill="none" stroke="#2a2a2a"/><circle cx="252" cy="205" r="9" fill="' + TEAL + '"/><rect x="250" y="196" width="4" height="5" fill="#fff"/></g>' +
      '<path d="M340 178l-16 32" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/><rect x="300" y="222" width="54" height="6" fill="#111"/><rect x="318" y="219" width="10" height="12" rx="2" fill="#ddd"/>');
  }

  /* 4. Highland Park, LA: Figueroa St at night, the red neon theatre sign, palms, a car rolling by */
  function highlandpark() {
    const letters = "HIGHLAND".split("");
    let neon = ""; letters.forEach((l, i) => { neon += '<text class="flk' + (i % 3 ? "" : " flk2") + '" x="246" y="' + (40 + i * 17) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#ff3b3b">' + l + '</text>'; });
    return svg('<rect width="400" height="260" fill="url(#s4)"/>' + stars(14) + mtns(160, "#2c2440") +
      palm(40, 214, 1) + palm(372, 214, .9) +
      '<rect x="120" y="110" width="220" height="104" fill="#c9a77a"/><rect x="120" y="104" width="220" height="10" fill="#8c6a48"/>' +
      '<rect x="228" y="22" width="36" height="150" rx="3" fill="#1a1a1a" stroke="#555" stroke-width="2"/>' + neon +
      '<rect x="130" y="150" width="90" height="30" fill="#2b2b2b"/><text x="175" y="170" text-anchor="middle" ' + font + ' font-size="11" fill="' + MUST + '">FIGUEROA</text>' +
      '<rect x="276" y="140" width="54" height="74" fill="#3a2c22"/><rect x="284" y="150" width="38" height="30" fill="#ffd98a" opacity=".8"/>' +
      '<rect x="130" y="186" width="90" height="28" fill="#5a3a2a"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#2b2b2e"/><path d="M0 236h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="car"><rect x="0" y="220" width="44" height="12" rx="4" fill="' + TEAL + '"/><rect x="8" y="214" width="26" height="8" rx="3" fill="' + TEAL + '"/><circle cx="10" cy="233" r="4" fill="#111"/><circle cx="34" cy="233" r="4" fill="#111"/></g>',
      sky("s4", "#0e1030", "#4a2a5a"));
  }

  /* 5. The corner in Oxnard: green signs, MADLIB tag, palms, the Channel Islands out on the ocean */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' +
      '<rect x="0" y="96" width="400" height="40" fill="#2f6f8f"/><path d="M0 104q20-4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#bfe3f0" stroke-width="1.5" fill="none" class="wv"/>' +
      '<path d="M20 96q30-18 70-8 30-14 60 4zM230 96q40-22 90-6 30-8 60 6z" fill="#5a5470"/>' +
      '<circle cx="80" cy="54" r="18" fill="#ffd58a"/>' +
      '<rect x="0" y="124" width="400" height="100" fill="#e8d2a8"/>' +
      (() => { let b = ""; for (let y = 132; y < 224; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#d4bb8c" stroke-width="1"/>'; return b; })() +
      tag("MADLIB", 26, 196, 46, ORG, -5) + tag("LOOTPACK", 168, 216, 22, TEAL, -4) +
      palm(380, 224, .8) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="300" y="40" width="5" height="190" fill="#3d4b3f"/>' +
      '<rect x="238" y="44" width="128" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="302" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Oxnard Blvd</text>' +
      '<rect x="266" y="70" width="72" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="302" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">5th St</text>',
      sky("s5", "#f7b267", "#f4845f"));
  }

  window.SCENES = { station: station, crates: crates, bombshelter: bombshelter, highlandpark: highlandpark, corner: corner };
})();
