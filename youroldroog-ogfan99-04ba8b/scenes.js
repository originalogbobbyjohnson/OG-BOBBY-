/* Your Old Droog game (NYC map, Brooklyn: South Brooklyn, Coney Island / Brighton Beach). The F up on the Culver el at Neptune Av,
   Kyiv's blue-and-gold St. Michael's monastery (born in Ukraine: "From Ukraine to under the Q train"), the long green malls of
   Ocean Parkway with the benches and the chess boards, the ocean at Manhattan Beach ("we always had the ocean", "chill by the beach"),
   and Brighton Beach Av & Coney Island Av under the el, Little Odessa storefronts behind. 400 x 260 SVGs. CSS classes prefixed "yod-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes yodcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.yod-car{animation:yodcar 6s linear infinite}.yod-car2{animation-delay:-3s}' +
    '@keyframes yodcarl{from{transform:translateX(480px)}to{transform:translateX(-90px)}}.yod-carl{animation:yodcarl 7s linear infinite}' +
    '@keyframes yodblink{0%,100%{opacity:.3}50%{opacity:1}}.yod-bl{animation:yodblink 1.8s ease-in-out infinite}.yod-bl2{animation-delay:.6s}.yod-bl3{animation-delay:1.2s}' +
    '@keyframes yodflick{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.9}}.yod-flk{animation:yodflick 2.4s infinite}' +
    '@keyframes yodshine{0%,100%{opacity:.2}50%{opacity:1}}.yod-sh{animation:yodshine 2.2s ease-in-out infinite}.yod-sh2{animation-delay:.7s}.yod-sh3{animation-delay:1.4s}' +
    '@keyframes yodbird{0%{transform:translate(-30px,0)}50%{transform:translate(210px,-12px)}100%{transform:translate(440px,0)}}.yod-bird{animation:yodbird 10s linear infinite}.yod-bird2{animation-delay:-5s}' +
    '@keyframes yodwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.yod-wave{animation:yodwave 2.6s ease-in-out infinite}.yod-wave2{animation-delay:-1.3s}' +
    '@keyframes yodel{from{transform:translateX(430px)}to{transform:translateX(-340px)}}.yod-el{animation:yodel 6s linear infinite}' +
    '@keyframes yodleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.yod-tree{transform-box:fill-box;transform-origin:50% 100%;animation:yodleaf 3s ease-in-out infinite}.yod-tree2{animation-delay:-1.5s}' +
    '@keyframes yodbike{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.yod-bike{animation:yodbike 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff6319", YELLOW = "#fccc0a", CREAM = "#f4ead8", UBLUE = "#2f7fd0", GOLD = "#e8b931", AMBER = "#ffb347";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Neptune Av on the F, up on the el: sky, the platform canopy, the black sign with the orange F, the F sliding in, the street below */
  function neptune() {
    let win = "";
    for (let x = 34; x < 270; x += 36) win += '<rect x="' + x + '" y="98" width="24" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let towers = "";
    [[10, 60, 40], [60, 80, 34], [300, 54, 42], [350, 72, 40]].forEach(([x, y, w], i) => {
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#b98a6e" opacity=".75"/>';
      for (let yy = y + 6; yy < 84; yy += 10) for (let xx = x + 5; xx < x + w - 4; xx += 9) towers += '<rect x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#5d4a40" opacity=".7"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#yn)"/>' + towers +
      /* canopy */
      '<rect x="0" y="22" width="400" height="10" fill="#4a5a52"/><path d="M0 32h400" stroke="#2f3a34" stroke-width="2"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="32" width="6" height="110" fill="#4a5a52"/>').join("") +
      /* sign */
      '<rect x="96" y="40" width="208" height="30" rx="3" fill="#111"/><rect x="96" y="40" width="208" height="3" fill="#fff"/>' +
      '<text x="110" y="61" ' + font + ' font-size="15" fill="#fff">Neptune Av</text>' + bullet(282, 56, "F", ORANGE) +
      /* train */
      '<g class="anim-train">' +
        '<rect x="10" y="86" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="94" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 130, "F", ORANGE) +
        '<rect x="10" y="124" width="280" height="4" fill="' + ORANGE + '"/>' +
        '<circle cx="22" cy="134" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform + el structure */
      '<rect x="0" y="142" width="400" height="8" fill="#e8b40c"/><rect x="0" y="150" width="400" height="22" fill="#6b6a66"/>' +
      '<rect x="0" y="172" width="400" height="8" fill="#3d4a44"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 5) + '" y="180" width="10" height="60" fill="#3d4a44"/><path d="M' + (x - 30) + ' 180l30 18l30 -18" stroke="#3d4a44" stroke-width="3" fill="none"/>').join("") +
      person(340, 118, "#1b1b1b") + person(362, 120, "#2a2a2a") +
      /* street */
      '<rect x="0" y="240" width="400" height="20" fill="#4c4d52"/>' +
      '<g class="yod-car"><rect x="0" y="244" width="40" height="11" rx="3" fill="' + AMBER + '"/><circle cx="9" cy="256" r="3.5" fill="#111"/><circle cx="31" cy="256" r="3.5" fill="#111"/></g>' +
      txt("CULVER EL · CONEY ISLAND", 200, 166, 10, CREAM, 'letter-spacing="3"'),
      sky("yn", "#8fc6ea", "#f6e3c4"));
  }

  /* 2. Kyiv: St. Michael's Golden-Domed Monastery, sky-blue walls, white trim, gold domes glinting, bells swinging, birds */
  function kyiv() {
    const dome = (x, y, r, h) => '<path d="M' + (x - r) + ' ' + y + 'q0 -' + h + ' ' + r + ' -' + (h + r * .6) + 'q' + r + ' ' + (r * .6) + ' ' + r + ' ' + (h + r * .6) + 'z" fill="' + GOLD + '" stroke="#b8860b" stroke-width="1.5"/>' +
      '<rect x="' + (x - 1) + '" y="' + (y - h - r * .6 - 14) + '" width="2" height="14" fill="' + GOLD + '"/><rect x="' + (x - 5) + '" y="' + (y - h - r * .6 - 10) + '" width="10" height="2" fill="' + GOLD + '"/>' +
      '<ellipse class="yod-sh" cx="' + (x - r * .35) + '" cy="' + (y - h * .55) + '" rx="' + (r * .18) + '" ry="' + (h * .3) + '" fill="#fff6c8"/>';
    const drum = (x, y, w, h) => '<rect x="' + (x - w / 2) + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#5fa8e0"/>' + [0, 1, 2].map(i => '<rect x="' + (x - w / 2 + 4 + i * (w - 8) / 3) + '" y="' + (y + 5) + '" width="' + ((w - 8) / 3 - 4) + '" height="' + (h - 10) + '" rx="3" fill="#fdfbf4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yk)"/>' +
      '<g class="yod-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#2c3e50" stroke-width="1.8" fill="none"/></g>' +
      '<g class="yod-bird yod-bird2"><path d="M0 64q4 -4 8 0q4 -4 8 0" stroke="#2c3e50" stroke-width="1.6" fill="none"/></g>' +
      /* bell tower on the left */
      '<rect x="22" y="96" width="56" height="124" fill="#5fa8e0"/><rect x="22" y="96" width="56" height="4" fill="#fdfbf4"/>' +
      '<rect x="34" y="112" width="32" height="30" rx="14" fill="#2b4a66"/><path class="yod-tree" d="M44 118h12l3 14h-18z" fill="' + GOLD + '"/>' +
      '<rect x="34" y="156" width="32" height="40" rx="3" fill="#fdfbf4"/>' + drum(50, 76, 30, 20) + dome(50, 76, 16, 22) +
      /* main church */
      '<rect x="110" y="110" width="200" height="110" fill="#5fa8e0"/><rect x="110" y="106" width="200" height="6" fill="#fdfbf4"/>' +
      '<path d="M160 110q50 -36 100 0" fill="#5fa8e0" stroke="#fdfbf4" stroke-width="3"/>' +
      [130, 166, 238, 274].map(x => '<rect x="' + (x - 8) + '" y="130" width="16" height="34" rx="8" fill="#fdfbf4"/><rect x="' + (x - 5) + '" y="134" width="10" height="26" rx="5" fill="#2b4a66"/>').join("") +
      '<rect x="190" y="160" width="40" height="60" rx="20" fill="#fdfbf4"/><rect x="196" y="168" width="28" height="52" rx="14" fill="#7a5a2e"/>' +
      '<path d="M200 140h20l-10 -12z" fill="' + GOLD + '"/>' +
      drum(210, 74, 40, 24) + dome(210, 74, 22, 30) +
      drum(150, 92, 24, 16) + dome(150, 92, 13, 18) + drum(270, 92, 24, 16) + dome(270, 92, 13, 18) +
      drum(180, 98, 18, 12) + dome(180, 98, 9, 12) + drum(240, 98, 18, 12) + dome(240, 98, 9, 12) +
      /* wall + square */
      '<rect x="320" y="150" width="80" height="70" fill="#5fa8e0"/><rect x="320" y="146" width="80" height="6" fill="#fdfbf4"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#cbbfa8"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 20) p += '<path d="M' + x + ' 220v40" stroke="#b5a88f" stroke-width="1"/>'; return p; })() +
      person(96, 196, "#2c3e50") + person(344, 196, "#3a3a3a") +
      txt("KYIV · WHERE DROOG WAS BORN", 200, 248, 11, "#2b2b2b", 'letter-spacing="2"'),
      sky("yk", "#7fc0f0", "#e6f3fb"));
  }

  /* 3. Ocean Parkway: the long tree-lined mall, benches with chess boards, the bike path, cars on the main road */
  function oceanpkwy() {
    const tree = (x, cls) => '<g class="yod-tree ' + cls + '"><rect x="' + (x - 3) + '" y="120" width="6" height="40" fill="#5a4030"/><circle cx="' + x + '" cy="110" r="22" fill="#3f8a3a"/><circle cx="' + (x - 12) + '" cy="118" r="14" fill="#4b9c44"/><circle cx="' + (x + 12) + '" cy="116" r="15" fill="#357a31"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yo)"/>' +
      /* apartment buildings behind */
      [[0, 60, 70], [80, 80, 60], [150, 50, 80], [240, 74, 70], [320, 58, 80]].map(([x, y, w]) => {
        let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (130 - y) + '" fill="#c79a74"/>';
        for (let yy = y + 8; yy < 124; yy += 12) for (let xx = x + 6; xx < x + w - 6; xx += 12) b += '<rect x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#5a4a44"/>';
        return b;
      }).join("") +
      /* main road */
      '<rect x="0" y="126" width="400" height="30" fill="#4e4f55"/><path d="M0 141h400" stroke="#e7d36a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="yod-carl"><rect x="0" y="128" width="46" height="11" rx="3" fill="' + UBLUE + '"/><circle cx="10" cy="140" r="3.5" fill="#111"/><circle cx="36" cy="140" r="3.5" fill="#111"/></g>' +
      '<g class="yod-car"><rect x="0" y="144" width="42" height="11" rx="3" fill="' + AMBER + '"/><circle cx="9" cy="156" r="3.5" fill="#111"/><circle cx="33" cy="156" r="3.5" fill="#111"/></g>' +
      /* mall: grass strip, trees, path, benches */
      '<rect x="0" y="156" width="400" height="16" fill="#6aa04f"/>' +
      tree(40, "") + tree(140, "yod-tree2") + tree(250, "") + tree(360, "yod-tree2") +
      '<rect x="0" y="172" width="400" height="34" fill="#cfc5b0"/>' +
      (() => { let h = ""; for (let x = 0; x < 400; x += 16) h += '<rect x="' + x + '" y="176" width="14" height="12" fill="#bdb29a"/><rect x="' + (x + 8) + '" y="190" width="14" height="12" fill="#bdb29a"/>'; return h; })() +
      /* bench + chess table */
      '<rect x="60" y="180" width="80" height="6" fill="#2f5a3a"/><rect x="60" y="186" width="80" height="4" fill="#244a2e"/>' +
      '<rect x="190" y="184" width="40" height="14" fill="#8a8678"/>' +
      (() => { let c = ""; for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) c += '<rect x="' + (194 + i * 8) + '" y="' + (186 + j * 5) + '" width="4" height="4" fill="' + ((i + j) % 2 ? "#222" : "#eee") + '"/>'; return c; })() +
      person(180, 164, "#2a2a2a") + person(240, 164, "#3a3a3a") + person(88, 156, "#1f1f1f") +
      /* bike path */
      '<rect x="0" y="206" width="400" height="22" fill="#7f8a6a"/><path d="M0 217h400" stroke="#fff" stroke-width="1.5" stroke-dasharray="10 8"/>' +
      '<g class="yod-bike"><circle cx="0" cy="222" r="5" fill="none" stroke="#111" stroke-width="2"/><circle cx="16" cy="222" r="5" fill="none" stroke="#111" stroke-width="2"/><path d="M0 222l6 -8h8l2 8M6 214l-2 -4" stroke="#111" stroke-width="2" fill="none"/><circle cx="8" cy="200" r="4" fill="#111"/><path d="M8 204l2 10" stroke="#111" stroke-width="3"/></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#3f6b3a"/>' +
      txt("OCEAN PARKWAY", 200, 250, 12, CREAM, 'letter-spacing="4"'),
      sky("yo", "#9cc8e6", "#f3e2c8"));
  }

  /* 4. Manhattan Beach: the sand, the lifeguard chair, waves rolling in, gulls, the sun on the water */
  function beach() {
    return svg(
      '<rect width="400" height="260" fill="url(#yb)"/>' +
      '<circle cx="300" cy="70" r="26" fill="#ffe08a"/><circle class="yod-sh" cx="300" cy="70" r="34" fill="#ffe08a" opacity=".25"/>' +
      '<g class="yod-bird"><path d="M0 50q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<g class="yod-bird yod-bird2"><path d="M0 80q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="120" width="400" height="60" fill="#2f7fb0"/>' +
      '<path d="M270 124h60l-10 40h-40z" fill="#ffe08a" opacity=".25"/>' +
      '<g class="yod-wave"><path d="M-20 150q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d7eefb" stroke-width="2.5" fill="none" opacity=".75"/></g>' +
      '<g class="yod-wave yod-wave2"><path d="M-20 170q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#ffffff" stroke-width="3" fill="none"/></g>' +
      '<path d="M0 180q100 -8 200 0t200 0v80H0z" fill="#ead7a6"/>' +
      /* lifeguard chair */
      '<path d="M84 238l12 -60M124 238l-12 -60" stroke="#f4f4f4" stroke-width="5"/><path d="M90 214h28M94 196h20" stroke="#f4f4f4" stroke-width="4"/>' +
      '<rect x="88" y="170" width="32" height="8" fill="#f4f4f4"/><rect x="92" y="150" width="4" height="20" fill="#f4f4f4"/><rect x="112" y="150" width="4" height="20" fill="#f4f4f4"/>' +
      '<path d="M86 150q18 -14 36 0z" fill="#e63946"/>' +
      /* umbrella + towel */
      '<path d="M260 236v-44" stroke="#555" stroke-width="3"/><path d="M226 194q34 -30 68 0z" fill="' + YELLOW + '"/><path d="M226 194q34 -30 68 0" fill="none" stroke="' + UBLUE + '" stroke-width="2"/>' +
      '<rect x="226" y="226" width="70" height="14" rx="2" fill="' + UBLUE + '"/><rect x="226" y="231" width="70" height="4" fill="' + YELLOW + '"/>' +
      person(330, 206, "#5a3a2a") +
      txt("MANHATTAN BEACH", 200, 254, 12, "#5a4520", 'letter-spacing="4"'),
      sky("yb", "#6fb6e6", "#fbe7c2"));
  }

  /* 5. Brighton Beach Av & Coney Island Av: the el overhead with the Q rolling by, Little Odessa storefronts with Cyrillic signs, the wall tagged DROOG */
  function corner() {
    const shop = (x, w, sign, col) => '<rect x="' + x + '" y="96" width="' + w + '" height="70" fill="#7a5a4a"/><rect x="' + x + '" y="96" width="' + w + '" height="18" fill="' + col + '"/>' + txt(sign, x + w / 2, 109, 10, "#fff") +
      '<rect class="yod-bl yod-bl' + ((x / 10) % 3 + 1) + '" x="' + (x + 6) + '" y="120" width="' + (w - 12) + '" height="30" fill="#ffd98a" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yc)"/>' + stars(10) +
      '<rect x="0" y="60" width="400" height="40" fill="#a4785e"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (12 + i * 50) + '" y="70" width="14" height="16" fill="#3a3f4a"/><rect x="' + (32 + i * 50) + '" y="70" width="14" height="16" fill="' + (i % 3 ? "#3a3f4a" : "#ffd98a") + '"/>').join("") +
      shop(0, 90, "ПРОДУКТЫ", "#b23a2a") + shop(96, 80, "КНИГИ", "#2b5a8a") + shop(182, 80, "АПТЕКА", "#2f7a4a") + shop(268, 132, "КАФЕ", "#6a3a7a") +
      /* the el */
      '<rect x="0" y="20" width="400" height="10" fill="#3b4a45"/><rect x="0" y="40" width="400" height="6" fill="#3b4a45"/>' +
      (() => { let l = ""; for (let x = 0; x < 400; x += 20) l += '<path d="M' + x + ' 30l10 10l10 -10" stroke="#3b4a45" stroke-width="2" fill="none"/>'; return l; })() +
      [93, 179, 265].map(x => '<rect x="' + (x - 4) + '" y="46" width="8" height="120" fill="#3b4a45"/>').join("") +
      '<g class="yod-el"><rect x="0" y="0" width="300" height="20" rx="3" fill="#c9ced6"/>' +
        [20, 70, 120, 170, 220].map(x => '<rect x="' + x + '" y="4" width="26" height="8" rx="1" fill="#ffe9a8" opacity=".85"/>').join("") + bullet(282, 10, "Q", YELLOW, true) + '</g>' +
      /* the wall */
      '<rect x="0" y="166" width="400" height="60" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 176; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("DROOG", 16, 212, 44, AMBER, -5) + tag("Y.O.D.", 196, 196, 24, UBLUE, -4) + tag("LITTLE ODESSA", 150, 222, 13, YELLOW, -3) + tag("DROOGS", 290, 214, 16, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="yod-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="#e0e0e0"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="100" width="5" height="128" fill="#3d4b3f"/>' +
      '<rect x="270" y="112" width="126" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Brighton Beach Av", 333, 128, 11, "#fff") +
      '<rect x="270" y="138" width="126" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Coney Island Av", 333, 154, 11, "#fff") +
      '<circle class="yod-flk" cx="358" cy="98" r="4" fill="#fff6c2"/>',
      sky("yc", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { neptune: neptune, kyiv: kyiv, oceanpkwy: oceanpkwy, beach: beach, corner: corner };
})();
