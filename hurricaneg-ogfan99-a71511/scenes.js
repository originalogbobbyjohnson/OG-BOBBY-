/* Hurricane G game (NYC map, Brooklyn: Carroll Gardens, off Court Street, the block in her "Neva Give Up" family story).
   1. Carroll St station (F, G) underground, the F pulling in.
   2. The Court Street bakery window: hot loaves and custard cakes ("a hot loaf of bread from Court Street Bakery").
   3. The handball courts cookout: barbecue smoke, congas thumping, slow oldies on the box (Neva Give Up, verse 2).
   4. The Hit Squad tour stage: the Puerto Rican flag behind the decks, a storm-swirl light show (the "Hurricane" with Redman and EPMD's Hit Squad).
   5. Court St & Carroll St: green signs, HURRICANE G tagged on the wall, Carroll Park's iron fence and the brownstones behind.
   400 x 260 SVGs. All CSS classes prefixed "hg-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hgcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.hg-car{animation:hgcar 7s linear infinite}.hg-car2{animation-delay:-3.5s}' +
    '@keyframes hgblink{0%,100%{opacity:.25}50%{opacity:1}}.hg-bl{animation:hgblink 1.6s ease-in-out infinite}.hg-bl2{animation-delay:.5s}.hg-bl3{animation-delay:1s}' +
    '@keyframes hgflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.hg-flk{animation:hgflick 2.4s infinite}' +
    '@keyframes hgsteam{0%{transform:translateY(0);opacity:0}30%{opacity:.7}100%{transform:translateY(-34px);opacity:0}}.hg-stm{animation:hgsteam 2.6s ease-out infinite}.hg-stm2{animation-delay:-.9s}.hg-stm3{animation-delay:-1.7s}' +
    '@keyframes hgbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.hg-bob{animation:hgbob .5s ease-in-out infinite}.hg-bob2{animation-delay:.25s}' +
    '@keyframes hgball{0%{transform:translate(0,0)}50%{transform:translate(-120px,-40px)}100%{transform:translate(0,0)}}.hg-ball{animation:hgball 1.4s ease-in-out infinite}' +
    '@keyframes hgdrum{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.92)}}.hg-drum{transform-box:fill-box;transform-origin:50% 100%;animation:hgdrum .35s ease-in-out infinite}.hg-drum2{animation-delay:.17s}' +
    '@keyframes hgspin{to{transform:rotate(360deg)}}.hg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:hgspin 3s linear infinite}.hg-spin2{animation-duration:1.2s}' +
    '@keyframes hgwave{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}.hg-flag{transform-box:fill-box;transform-origin:0% 50%;animation:hgwave 1.6s ease-in-out infinite}' +
    '@keyframes hgnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-40px);opacity:0}}.hg-note{animation:hgnote 2.2s ease-out infinite}.hg-note2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", MAG = "#e84a8a", TEAL = "#2ec4b6", CREAM = "#f6ecd9", ORANGE = "#ff6319", GGREEN = "#6cbe45", PRRED = "#d6202b", PRBLUE = "#2d6fd1";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* Puerto Rican flag (5 stripes, blue triangle, white star) at x,y size w x h */
  const prflag = (x, y, w, h, cls) => {
    let g = '<g class="' + (cls || "") + '">';
    for (let i = 0; i < 5; i++) g += '<rect x="' + x + '" y="' + (y + i * h / 5) + '" width="' + w + '" height="' + (h / 5 + .2) + '" fill="' + (i % 2 ? "#fff" : PRRED) + '"/>';
    const cx = x + h * 0.29, cy = y + h / 2, r = h * 0.17;
    let pts = ""; for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.42 : r; pts += (cx + rr * Math.cos(a)).toFixed(1) + "," + (cy + rr * Math.sin(a)).toFixed(1) + " "; }
    return g + '<path d="M' + x + ' ' + y + 'L' + (x + h * 0.87) + ' ' + cy + 'L' + x + ' ' + (y + h) + 'z" fill="' + PRBLUE + '"/><polygon points="' + pts + '" fill="#fff"/></g>';
  };

  /* 1. Carroll St (F, G), underground: cream tile, the maroon-and-tan mosaic band, the black sign, the F sliding in */
  function carrollst() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe7d4"/>';
    let band = "";
    for (let x = 0; x < 400; x += 14) band += '<rect x="' + x + '" y="38" width="7" height="8" fill="' + (x % 28 ? "#c8a46a" : "#f3e3c0") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#dcd2bd"/>' + tiles +
      '<rect x="0" y="34" width="400" height="16" fill="#7a2a2a"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2a2d"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="hg-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="60" y="58" width="280" height="32" rx="3" fill="#111"/><rect x="60" y="58" width="280" height="3" fill="#fff"/>' +
      '<text x="76" y="80" ' + font + ' font-size="15" fill="#fff">Carroll St</text>' +
      bullet(286, 74, "F", ORANGE) + bullet(312, 74, "G", GGREEN) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#3d5f8c"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "F", ORANGE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + ORANGE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5a5752"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(330, 196, "#1b1b1b") + person(352, 200, "#2a2a2a") +
      txt("CARROLL GARDENS", 140, 236, 11, CREAM, 'letter-spacing="3"'));
  }

  /* 2. The Court Street bakery window at dawn: striped awning, bread loaves on the racks, custard cakes in the case, steam rising */
  function bakery() {
    let brick = "";
    for (let y = 40; y < 200; y += 8) for (let x = (y / 8) % 2 ? 0 : -8; x < 400; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#8a4a32"/>';
    let awn = "";
    for (let i = 0, x = 50; x < 350; x += 20, i++) awn += '<path d="M' + x + ' 64h20l-4 22h-12z" fill="' + (i % 2 ? "#fff" : "#2e7d4f") + '"/>';
    const loaf = (x, y) => '<ellipse cx="' + x + '" cy="' + y + '" rx="13" ry="6" fill="#c8843d"/><path d="M' + (x - 7) + ' ' + (y - 2) + 'l4 3M' + (x - 1) + ' ' + (y - 3) + 'l4 3M' + (x + 5) + ' ' + (y - 2) + 'l4 3" stroke="#f1c27d" stroke-width="1.5"/>';
    const cake = (x, y) => '<rect x="' + (x - 9) + '" y="' + (y - 6) + '" width="18" height="10" rx="2" fill="#f6d77a"/><rect x="' + (x - 9) + '" y="' + (y - 8) + '" width="18" height="3" rx="1" fill="#fff4cf"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hgb)"/>' +
      '<rect x="0" y="40" width="400" height="170" fill="#9b5538"/>' + brick +
      '<rect x="40" y="58" width="320" height="8" fill="#1f5a39"/>' + awn +
      /* sign board (no name, just what it is) */
      '<rect x="110" y="40" width="180" height="20" rx="2" fill="#1f5a39" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      txt("BAKERY · COURT ST", 200, 55, 11, GOLD, 'letter-spacing="2"') +
      /* window */
      '<rect x="56" y="92" width="200" height="98" fill="#ffe6b0" stroke="#3a2418" stroke-width="5"/>' +
      '<rect x="62" y="122" width="188" height="3" fill="#7a5a3a"/><rect x="62" y="152" width="188" height="3" fill="#7a5a3a"/>' +
      [84, 116, 148, 180, 212].map(x => loaf(x, 116)).join("") +
      [80, 108, 136, 164, 192, 220].map(x => cake(x, 146)).join("") +
      '<rect x="62" y="160" width="188" height="24" fill="#f3d6a0"/>' + txt("HOT BREAD · CUSTARD", 156, 177, 10, "#7a2a1a", 'letter-spacing="1"') +
      [100, 156, 212].map((x, i) => '<path class="hg-stm hg-stm' + (i + 1) + '" d="M' + x + ' 110q-4 -5 0 -10q4 -5 0 -10" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>').join("") +
      /* door */
      '<rect x="276" y="92" width="60" height="118" fill="#2a1a12" stroke="#3a2418" stroke-width="4"/><rect x="284" y="100" width="44" height="54" fill="#ffd98a" opacity=".85"/>' +
      '<circle cx="326" cy="170" r="3" fill="' + GOLD + '"/>' +
      '<rect class="hg-flk" x="290" y="112" width="32" height="14" rx="2" fill="#111"/>' + txt("OPEN", 306, 123, 9, MAG) +
      /* sidewalk */
      '<rect x="0" y="210" width="400" height="50" fill="#6b6b6e"/><rect x="0" y="210" width="400" height="4" fill="#9a9a9c"/>' +
      person(26, 192, "#1c1c22", "hg-bob") + person(46, 194, "#2a2433", "hg-bob hg-bob2") +
      '<g class="hg-car"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>',
      sky("hgb", "#2b3a67", "#f4a261"));
  }

  /* 3. The handball courts cookout: the big wall, the ball flying, grill smoke, congas, the boom box playing oldies */
  function handball() {
    let fence = "";
    for (let x = 0; x < 150; x += 10) fence += '<path d="M' + x + ' 150l10 -10M' + x + ' 140l10 10" stroke="#8a8f96" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hgh)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#ffe08a" opacity=".9"/>' +
      /* handball wall */
      '<rect x="150" y="50" width="240" height="140" fill="#c7c2b6"/><rect x="150" y="50" width="240" height="6" fill="#a59f92"/>' +
      '<path d="M150 150h240" stroke="#e84a8a" stroke-width="3"/>' +
      tag("NEVER GIVE UP", 176, 110, 24, MAG, -4) +
      '<circle class="hg-ball" cx="340" cy="170" r="5" fill="#2d6fd1"/>' +
      person(300, 170, "#1b1b22", "hg-bob") +
      /* fence */
      '<rect x="0" y="120" width="3" height="86" fill="#8a8f96"/><rect x="147" y="120" width="3" height="86" fill="#8a8f96"/><g opacity=".7">' + fence.replace(/ 150l10 -10/g, ' 150l10 -10').split('').join('') + '</g>' +
      /* grill with smoke */
      '<rect x="30" y="170" width="54" height="10" rx="3" fill="#222"/><path d="M36 180l-6 26M78 180l6 26" stroke="#222" stroke-width="3"/>' +
      '<rect x="36" y="164" width="12" height="6" rx="2" fill="#8b3a1a"/><rect x="54" y="164" width="12" height="6" rx="2" fill="#8b3a1a"/>' +
      [44, 58, 72].map((x, i) => '<path class="hg-stm hg-stm' + (i + 1) + '" d="M' + x + ' 160q-5 -8 0 -16q5 -8 0 -16" stroke="#e8e8e8" stroke-width="3" fill="none" opacity=".6"/>').join("") +
      /* congas */
      '<g class="hg-drum"><path d="M104 206l4 -40h20l4 40z" fill="#a0522d"/><ellipse cx="118" cy="166" rx="10" ry="3" fill="#f3e3c0"/></g>' +
      '<g class="hg-drum hg-drum2"><path d="M128 206l4 -34h18l4 34z" fill="#7b3f1d"/><ellipse cx="141" cy="172" rx="9" ry="3" fill="#f3e3c0"/></g>' +
      /* boom box with notes */
      '<rect x="190" y="194" width="56" height="26" rx="4" fill="#2a2a2e"/><circle cx="204" cy="207" r="8" fill="#555"/><circle cx="232" cy="207" r="8" fill="#555"/><rect x="212" y="198" width="12" height="5" fill="' + GOLD + '"/>' +
      '<text class="hg-note" x="214" y="190" font-size="14" fill="' + GOLD + '">&#9834;</text><text class="hg-note hg-note2" x="226" y="186" font-size="14" fill="' + CREAM + '">&#9835;</text>' +
      /* ground */
      '<rect x="0" y="206" width="400" height="54" fill="#4c5a4a"/><rect x="0" y="206" width="400" height="3" fill="#6d7d69"/>' +
      person(160, 214, "#141418", "hg-bob hg-bob2") + person(272, 220, "#22222a", "hg-bob") +
      txt("SUMMER ON THE COURTS", 110, 246, 10, CREAM, 'letter-spacing="2"'),
      sky("hgh", "#ff9a5a", "#ffd8a8"));
  }

  /* 4. The Hit Squad tour stage: a Puerto Rican flag backdrop, storm-swirl lights, the decks spinning, the crowd */
  function stage() {
    const crowd = [];
    for (let x = 10; x < 400; x += 22) crowd.push('<g class="hg-bob' + (x % 44 ? " hg-bob2" : "") + '"><circle cx="' + x + '" cy="236" r="8" fill="#0c0c12"/><rect x="' + (x - 9) + '" y="244" width="18" height="20" rx="6" fill="#0c0c12"/></g>');
    return svg(
      '<rect width="400" height="260" fill="url(#hgs)"/>' +
      /* storm swirl */
      '<g class="hg-spin"><circle cx="200" cy="76" r="74" fill="none" stroke="none"/><path d="M200 76m-66 0a66 66 0 0 1 66 -66a44 44 0 0 1 44 44a24 24 0 0 1 -24 24" stroke="' + TEAL + '" stroke-width="4" fill="none" opacity=".5"/>' +
        '<path d="M200 76m66 0a66 66 0 0 1 -66 66a44 44 0 0 1 -44 -44a24 24 0 0 1 24 -24" stroke="' + MAG + '" stroke-width="4" fill="none" opacity=".5"/></g>' +
      prflag(124, 40, 150, 66, "hg-flag") +
      '<rect x="20" y="20" width="360" height="10" fill="#3a3a44"/>' + [40, 90, 140, 200, 260, 310, 360].map((x, i) => '<circle class="hg-bl hg-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="34" r="5" fill="' + [GOLD, MAG, TEAL][i % 3] + '"/>').join("") +
      /* stage */
      '<rect x="20" y="150" width="360" height="24" fill="#24242c"/><rect x="20" y="146" width="360" height="6" fill="' + MAG + '"/>' +
      '<rect x="150" y="118" width="100" height="30" fill="#1a1a20" stroke="#555" stroke-width="2"/>' +
      '<g class="hg-spin hg-spin2"><circle cx="174" cy="126" r="10" fill="#111" stroke="#666"/><circle cx="174" cy="126" r="3" fill="' + GOLD + '"/><rect x="173" y="116" width="2" height="5" fill="#888"/></g>' +
      '<g class="hg-spin hg-spin2"><circle cx="226" cy="126" r="10" fill="#111" stroke="#666"/><circle cx="226" cy="126" r="3" fill="' + TEAL + '"/><rect x="225" y="116" width="2" height="5" fill="#888"/></g>' +
      /* MC silhouette with hoop earrings + mic, no face */
      '<g><circle cx="300" cy="106" r="9" fill="#0b0b0f"/><path d="M290 100q10-14 20 0v10h-20z" fill="#0b0b0f"/><circle cx="291" cy="112" r="3" fill="none" stroke="' + GOLD + '" stroke-width="1.5"/>' +
        '<rect x="290" y="116" width="20" height="30" rx="7" fill="#0b0b0f"/><path d="M290 122l-10 -12" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/><circle cx="279" cy="108" r="3" fill="#555"/></g>' +
      '<rect x="100" y="182" width="200" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/>' + txt("HIT SQUAD", 200, 198, 13, GOLD, 'letter-spacing="4"') +
      crowd.join(""),
      sky("hgs", "#090814", "#2a1240"));
  }

  /* 5. Court St & Carroll St: green signs, HURRICANE G on the wall, Carroll Park's fence and the brownstones behind */
  function corner() {
    const brown = (x, w, h) => { let g = '<rect x="' + x + '" y="' + (130 - h) + '" width="' + w + '" height="' + h + '" fill="#6b3f2a"/><rect x="' + x + '" y="' + (130 - h) + '" width="' + w + '" height="5" fill="#4a2a1c"/>';
      for (let yy = 136 - h; yy < 122; yy += 16) for (let xx = x + 6; xx < x + w - 8; xx += 14) g += '<rect class="hg-bl hg-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="7" height="10" fill="#ffd98a" opacity=".75"/>'; return g; };
    let fence = "";
    for (let x = 0; x < 400; x += 8) fence += '<rect x="' + x + '" y="112" width="2" height="20" fill="#1a1a1a"/><circle cx="' + (x + 1) + '" cy="111" r="2" fill="#1a1a1a"/>';
    const tree = x => '<rect x="' + (x - 3) + '" y="80" width="6" height="40" fill="#3a2a1a"/><circle cx="' + x + '" cy="74" r="20" fill="#244b2c"/><circle cx="' + (x - 12) + '" cy="82" r="13" fill="#2c5a34"/><circle cx="' + (x + 13) + '" cy="82" r="13" fill="#2c5a34"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hgc)"/>' + stars(16) +
      brown(0, 62, 86) + brown(64, 58, 86) + brown(124, 60, 86) + brown(186, 58, 86) + brown(246, 60, 86) + brown(308, 92, 86) +
      tree(60) + tree(170) + tree(280) +
      fence +
      txt("CARROLL PARK", 200, 30, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="132" width="400" height="94" fill="#3c3f47"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#32343b" stroke-width="1"/>'; return b; })() +
      tag("HURRICANE G", 14, 190, 42, GOLD, -5) + tag("HURRA", 220, 216, 22, MAG, -4) + tag("ALL WOMAN", 22, 218, 15, TEAL, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="hg-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + MAG + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Court St", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Carroll St", 348, 108, 12, "#fff") +
      '<circle class="hg-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("hgc", "#0a0c1a", "#2e2848"));
  }

  window.SCENES = { carrollst: carrollst, bakery: bakery, handball: handball, stage: stage, corner: corner };
})();
