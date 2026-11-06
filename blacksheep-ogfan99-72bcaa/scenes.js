/* Black Sheep game (NYC map, Queens: Astoria). Dres was raised in the Astoria Houses on Hallets Point.
   Rooms: the N/W at Astoria Blvd up on the el, the Astoria Houses on the East River, the Hell Gate Bridge from Astoria Park,
   the big Astoria Park Pool, and Astoria Blvd & 8 St with the Hell Gate arch behind. 400 x 260 SVGs. Classes prefixed bsh-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bshcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.bsh-car{animation:bshcar 6s linear infinite}.bsh-car2{animation-delay:-3s}' +
    '@keyframes bshcarL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.bsh-carl{animation:bshcarL 7s linear infinite}' +
    '@keyframes bshblink{0%,100%{opacity:.25}50%{opacity:1}}.bsh-bl{animation:bshblink 1.8s ease-in-out infinite}.bsh-bl2{animation-delay:.6s}.bsh-bl3{animation-delay:1.2s}' +
    '@keyframes bshwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.bsh-wv{animation:bshwave 3.2s ease-in-out infinite}.bsh-wv2{animation-delay:-1.6s}' +
    '@keyframes bshboat{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.bsh-boat{animation:bshboat 16s linear infinite}' +
    '@keyframes bshtrain{from{transform:translateX(-260px)}to{transform:translateX(420px)}}.bsh-xtrain{animation:bshtrain 7s linear infinite}' +
    '@keyframes bshbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bsh-bob{animation:bshbob 1.3s ease-in-out infinite}.bsh-bob2{animation-delay:.45s}.bsh-bob3{animation-delay:.9s}' +
    '@keyframes bshdive{0%{transform:translateY(0);opacity:1}60%{transform:translateY(62px);opacity:1}61%{opacity:0}100%{transform:translateY(0);opacity:0}}.bsh-dive{animation:bshdive 2.6s ease-in infinite}' +
    '@keyframes bshflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.25}55%{opacity:.9}}.bsh-flk{animation:bshflick 2.4s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const YEL = "#fccc0a", RED = "#a3252b", WOOL = "#f4efe2", GOLD = "#f2c14e", GREEN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* the Hell Gate Bridge: granite towers, crimson steel arch with the deck hung below it */
  const hellgate = (x0, x1, deckY, rise, col, op) => {
    const mid = (x0 + x1) / 2; let g = '<g opacity="' + (op || 1) + '">';
    g += '<path d="M' + x0 + ' ' + deckY + 'Q' + mid + ' ' + (deckY - rise * 2) + ' ' + x1 + ' ' + deckY + '" stroke="' + col + '" stroke-width="7" fill="none"/>';
    g += '<path d="M' + x0 + ' ' + (deckY - 12) + 'Q' + mid + ' ' + (deckY - rise * 2 - 22) + ' ' + x1 + ' ' + (deckY - 12) + '" stroke="' + col + '" stroke-width="5" fill="none"/>';
    for (let i = 1; i < 14; i++) { const t = i / 14, x = x0 + (x1 - x0) * t, yb = deckY - rise * 2 * 2 * t * (1 - t), yt = deckY - 12 - (rise * 2 + 10) * 2 * t * (1 - t);
      g += '<path d="M' + x.toFixed(1) + ' ' + yt.toFixed(1) + 'V' + deckY + '" stroke="' + col + '" stroke-width="2"/>';
      if (i % 2) g += '<path d="M' + x.toFixed(1) + ' ' + yb.toFixed(1) + 'L' + (x + (x1 - x0) / 14).toFixed(1) + ' ' + (deckY - 12 - (rise * 2 + 10) * 2 * (t + 1 / 14) * (1 - t - 1 / 14)).toFixed(1) + '" stroke="' + col + '" stroke-width="1.5"/>'; }
    g += '<rect x="' + x0 + '" y="' + deckY + '" width="' + (x1 - x0) + '" height="6" fill="' + col + '"/>';
    [x0, x1].forEach(x => { g += '<rect x="' + (x - 14) + '" y="' + (deckY - 46) + '" width="28" height="' + (46 + 60) + '" fill="#c9bfae"/><rect x="' + (x - 17) + '" y="' + (deckY - 50) + '" width="34" height="8" fill="#b3a893"/>' +
      '<rect x="' + (x - 6) + '" y="' + (deckY - 34) + '" width="12" height="22" rx="6" fill="#8d846f"/>'; });
    return g + '</g>';
  };

  /* 1. Astoria Blvd, up on the el over the Grand Central Pkwy: black sign with the yellow N and W, the train pulling in */
  function astoriablvd() {
    let win = "";
    for (let x = 22; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let lamps = "";
    for (let x = 14; x < 400; x += 46) lamps += '<rect class="bsh-bl bsh-bl' + (x % 3 + 1) + '" x="' + x + '" y="72" width="8" height="5" fill="#ffe7a3" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs1)"/>' + stars(12) +
      /* low Astoria rooftops behind */
      [[0, 70], [60, 84], [120, 66], [190, 80], [250, 62], [320, 78], [370, 70]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="64" height="' + (110 - y) + '" fill="#2b2f44"/>').join("") +
      /* canopy and posts */
      '<path d="M0 44h400v10H0z" fill="#3f4a3c"/><rect x="0" y="54" width="400" height="4" fill="#6b7a62"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="104" fill="#5a6b52"/>').join("") +
      /* sign */
      '<rect x="78" y="64" width="240" height="30" rx="3" fill="#111"/><rect x="78" y="64" width="240" height="3" fill="#fff"/>' +
      '<text x="92" y="86" ' + font + ' font-size="15" fill="#fff">Astoria Blvd</text>' + bullet(270, 79, "N", YEL, true) + bullet(296, 79, "W", YEL, true) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "N", YEL, true) +
        '<rect x="6" y="138" width="300" height="3" fill="' + YEL + '" opacity=".8"/><circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge and the el structure */
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="12" height="56" fill="#5a6b52"/>').join("") +
      /* the parkway under the el */
      '<rect x="0" y="222" width="400" height="38" fill="#45474d"/><path d="M0 240h400" stroke="#d9d4c3" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="bsh-car"><rect x="0" y="226" width="42" height="12" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="238" r="3.5" fill="#111"/><circle cx="32" cy="238" r="3.5" fill="#111"/></g>' +
      '<g class="bsh-carl"><rect x="0" y="244" width="40" height="12" rx="4" fill="#d1495b"/><circle cx="10" cy="256" r="3.5" fill="#111"/><circle cx="30" cy="256" r="3.5" fill="#111"/></g>' +
      '<text x="200" y="217" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">GRAND CENTRAL PKWY</text>',
      sky("bs1", "#151a33", "#6b5a86"));
  }

  /* 2. The Astoria Houses on Hallets Point: low red-brick buildings on the East River, Manhattan across the water, a tug going by */
  function houses() {
    let b = "";
    [[20, 84, 92], [116, 70, 104], [218, 90, 88], [306, 76, 86]].forEach(([x, y, w]) => {
      b += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (172 - y) + '" fill="#9c4a36"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#d8c9ad"/>';
      for (let yy = y + 12; yy < 162; yy += 13) for (let xx = x + 7; xx < x + w - 8; xx += 13) b += '<rect class="bsh-bl bsh-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".85"/>';
    });
    let city = "";
    [[0, 40], [30, 28], [56, 46], [84, 22], [110, 36], [150, 30], [180, 44], [214, 26], [250, 38], [290, 24], [330, 40], [362, 30]].forEach(([x, h]) => city += '<rect x="' + x + '" y="' + (62 - h) + '" width="26" height="' + (h + 10) + '" fill="#384063"/>');
    let waves = ""; for (let x = -20; x < 440; x += 24) waves += '<path d="M' + x + ' 0q6 -4 12 0t12 0" stroke="#9fc7e8" stroke-width="1.5" fill="none" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs2)"/>' + stars(10) +
      '<circle cx="356" cy="26" r="13" fill="#f6efd2"/>' + city +
      '<rect x="0" y="66" width="400" height="10" fill="#26304d"/>' +
      b +
      '<rect x="0" y="172" width="400" height="10" fill="#7d7f72"/>' +
      [30, 110, 190, 270, 350].map(x => '<rect x="' + x + '" y="166" width="3" height="10" fill="#333"/>').join("") + '<path d="M0 168h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#1f4f78"/>' +
      '<g transform="translate(0,198)"><g class="bsh-wv">' + waves + '</g></g><g transform="translate(0,222)"><g class="bsh-wv bsh-wv2">' + waves + '</g></g><g transform="translate(0,246)"><g class="bsh-wv">' + waves + '</g></g>' +
      '<g class="bsh-boat"><path d="M0 206h70l-8 12H8z" fill="#c23b22"/><rect x="18" y="194" width="30" height="12" fill="#f4efe2"/><rect x="38" y="184" width="8" height="10" fill="#222"/><rect x="22" y="197" width="8" height="5" fill="#7fb1d9"/></g>' +
      '<text x="200" y="60" text-anchor="middle" ' + font + ' font-size="10" fill="' + WOOL + '" letter-spacing="4" opacity=".85">HALLETS POINT</text>' +
      tag("ASTORIA HOUSES", 98, 160, 20, WOOL, -3),
      sky("bs2", "#141a36", "#4f4a7c"));
  }

  /* 3. The Hell Gate Bridge from Astoria Park: crimson steel arch between granite towers, a train crossing, the river below */
  function hellgateroom() {
    let waves = ""; for (let x = -20; x < 440; x += 24) waves += '<path d="M' + x + ' 0q6 -4 12 0t12 0" stroke="#bfe0f5" stroke-width="1.5" fill="none" opacity=".7"/>';
    let trees = ""; for (let x = -10; x < 420; x += 34) trees += '<circle cx="' + x + '" cy="214" r="20" fill="#2f6b3a"/><circle cx="' + (x + 16) + '" cy="208" r="16" fill="#3c7f45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs3)"/>' +
      '<circle cx="62" cy="40" r="16" fill="#ffe08a" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="60" fill="#2a6d9c"/>' +
      '<g transform="translate(0,166)"><g class="bsh-wv">' + waves + '</g></g><g transform="translate(0,186)"><g class="bsh-wv bsh-wv2">' + waves + '</g></g>' +
      /* approach viaducts on both sides, then the train on the deck (drawn first so the arch hangers sit in front) */
      '<rect x="0" y="124" width="400" height="6" fill="#8d846f"/>' + [14, 300 + 70, 330 - 300].map(x => '<rect x="' + x + '" y="130" width="8" height="30" fill="#8d846f"/>').join("") +
      '<g class="bsh-xtrain"><rect x="0" y="113" width="200" height="11" rx="2" fill="#d9dde3"/><rect x="0" y="117" width="200" height="2" fill="#2b5fa8"/></g>' +
      hellgate(52, 348, 124, 46, RED) +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="10" fill="' + WOOL + '" letter-spacing="4">HELL GATE BRIDGE</text>' +
      trees + '<rect x="0" y="222" width="400" height="38" fill="#3f8a4a"/>' +
      '<path d="M0 238h400" stroke="#c9b48a" stroke-width="6"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 2) + '" y="200" width="4" height="38" fill="#1f2a24"/><circle class="bsh-flk" cx="' + x + '" cy="198" r="5" fill="#fff3c4"/>').join("") +
      tag("ASTORIA PARK", 230, 254, 17, WOOL, -3),
      sky("bs3", "#f3a76b", "#7fb5dd"));
  }

  /* 4. The Astoria Park Pool: the huge blue pool, the tall cream diving tower, swimmers bobbing, the arch far behind */
  function pool() {
    let waves = ""; for (let x = -20; x < 440; x += 24) waves += '<path d="M' + x + ' 0q6 -4 12 0t12 0" stroke="#e6f6ff" stroke-width="1.5" fill="none" opacity=".75"/>';
    let lanes = ""; for (let y = 160; y < 250; y += 22) lanes += '<path d="M0 ' + y + 'h400" stroke="' + RED + '" stroke-width="2" stroke-dasharray="6 6" opacity=".8"/>';
    const head = (x, y, cls, cap) => '<g class="bsh-bob ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + cap + '"/><path d="M' + (x - 12) + ' ' + (y + 6) + 'q12 -6 24 0" stroke="#fff" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs4)"/>' +
      '<circle cx="56" cy="34" r="18" fill="#fff1a8"/>' +
      hellgate(120, 300, 92, 20, RED, .45) +
      /* the bleachers / bathhouse wall */
      '<rect x="0" y="100" width="400" height="34" fill="#e3d6bb"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="0" y="' + (104 + i * 6) + '" width="400" height="2" fill="#c7b796"/>').join("") +
      '<rect x="0" y="134" width="400" height="10" fill="#f4f0e6"/>' +
      '<rect x="0" y="144" width="400" height="116" fill="#2aa7dc"/>' + lanes +
      '<g transform="translate(0,170)"><g class="bsh-wv">' + waves + '</g></g><g transform="translate(0,214)"><g class="bsh-wv bsh-wv2">' + waves + '</g></g>' +
      head(120, 186, "", "#e4572e") + head(196, 222, "bsh-bob2", GOLD) + head(262, 178, "bsh-bob3", "#ffffff") +
      /* the diving tower */
      '<rect x="330" y="46" width="16" height="98" fill="#efe6d2"/><rect x="352" y="46" width="16" height="98" fill="#efe6d2"/>' +
      '<rect x="320" y="46" width="58" height="8" fill="#d9ccb0"/><rect x="326" y="82" width="46" height="6" fill="#d9ccb0"/><rect x="296" y="44" width="38" height="4" fill="#3a3a3a"/>' +
      '<g class="bsh-dive"><path d="M306 23v13M306 25l-5 -10M306 25l5 -10M306 36l-3 8M306 36l3 8" stroke="#1d1d1d" stroke-width="3" stroke-linecap="round" fill="none"/><circle cx="306" cy="19" r="3.5" fill="#1d1d1d"/></g>' +
      tag("ASTORIA POOL", 16, 252, 20, WOOL, -3),
      sky("bs4", "#4aa8ff", "#c8e8ff"));
  }

  /* 5. Astoria Blvd & 8 St: green street signs, a brick wall tagged BLACK SHEEP with a stencil sheep, the Hell Gate arch behind at night */
  function corner() {
    let brick = ""; for (let y = 116; y < 226; y += 8) brick += '<path d="M0 ' + y + 'h400" stroke="#4a2c22" stroke-width="1"/>';
    const sheep = (x, y) => '<g fill="#111"><ellipse cx="' + x + '" cy="' + y + '" rx="24" ry="15"/><circle cx="' + (x - 18) + '" cy="' + (y - 8) + '" r="9"/><circle cx="' + (x - 6) + '" cy="' + (y - 12) + '" r="9"/><circle cx="' + (x + 8) + '" cy="' + (y - 12) + '" r="9"/><circle cx="' + (x + 19) + '" cy="' + (y - 6) + '" r="8"/>' +
      '<ellipse cx="' + (x + 28) + '" cy="' + (y - 4) + '" rx="8" ry="6"/><rect x="' + (x - 14) + '" y="' + (y + 10) + '" width="4" height="14"/><rect x="' + (x + 10) + '" y="' + (y + 10) + '" width="4" height="14"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs5)"/>' + stars(16) +
      '<circle cx="372" cy="26" r="12" fill="#f6efd2"/>' +
      hellgate(60, 300, 86, 26, "#c0393f", .75) +
      '<rect x="0" y="106" width="400" height="120" fill="#6a3a2c"/>' + brick +
      tag("BLACK SHEEP", 14, 162, 40, WOOL, -5) + tag("THIS OR THAT", 16, 206, 18, GOLD, -3) + tag("NATIVE TONGUES", 150, 214, 15, "#7ed6a5", -4) +
      sheep(318, 182) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="bsh-car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + YEL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="290" y="66" width="106" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="343" y="82" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Astoria Blvd</text>' +
      '<rect x="310" y="92" width="86" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="353" y="108" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">8 St</text>' +
      '<circle class="bsh-flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("bs5", "#0a0c1a", "#2e2a50"));
  }

  window.SCENES = { astoriablvd: astoriablvd, houses: houses, hellgate: hellgateroom, pool: pool, corner: corner };
})();
