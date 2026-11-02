/* Harlem opening scenes for the YL game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes ripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.rip{animation:ripple 3s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}.slow{animation-duration:22s;animation-delay:-8s}' +
    '@keyframes fly{0%{transform:translate(-40px,20px)}100%{transform:translate(440px,-30px)}}' +
    '.bird{animation:fly 9s linear infinite}.bird2{animation-delay:3s}' +
    '@keyframes beam{0%,100%{opacity:.08}50%{opacity:.35}}' +
    '.beam{animation:beam 2s ease-in-out infinite}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-60px,260px) rotate(360deg)}}' +
    '.leaf{transform-box:fill-box;animation:leaf 7s linear infinite}.lf2{animation-delay:2.3s}.lf3{animation-delay:4.6s}' +
    '@keyframes heat{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.15)}}' +
    '.heat{transform-box:fill-box;transform-origin:50% 100%;animation:heat .8s ease-in-out infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-30px)}}' +
    '.ball{animation:bounce 1s ease-in infinite}' +
    '@keyframes car{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s;animation-direction:reverse}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#f58426", BLUE = "#1d6fd1", GOLD = "#ffd23f";
  const river = (y, color) => {
    let r = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + color + '"/><g class="rip">';
    for (let row = 0; row < 4; row++) for (let x = -20; x < 460; x += 40) r += '<path d="M' + (x + (row % 2) * 20) + ' ' + (y + 10 + row * 12) + 'q10 -4 20 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".25"/>';
    return r + '</g>';
  };

  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="44" height="14" rx="4" fill="' + c + '"/><rect x="8" y="' + (y - 8) + '" width="26" height="10" rx="3" fill="' + c + '"/><rect x="11" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff" opacity=".7"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="34" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="43" cy="' + (y + 5) + '" r="2" fill="#fff6c2"/></g>';
  const gsign = (cx, y, t) => { const w = t.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + cx + '" y="' + (y + 13) + '" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + t + '</text>'; };

  /* 1. 125 St on the 2/3, under Lenox Av: the old IRT mosaic, the uptown stair to the Lenox Av exit north toward Astor Row, IGH BET on the column */
  function train() {
    let tiles = "";
    for (let y = 0; y < 110; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe9da"/>';
    let windows = "";
    for (let x = 18; x < 230; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>';
    let mosaic = "";
    for (let i = 0; i < 14; i++) mosaic += '<rect x="' + (24 + i * 8) + '" y="34" width="6" height="6" fill="' + (i % 2 ? "#2f6d4a" : "#c8a24a") + '"/><rect x="' + (24 + i * 8) + '" y="70" width="6" height="6" fill="' + (i % 2 ? "#c8a24a" : "#2f6d4a") + '"/>';
    let steps = "";
    for (let i = 0; i < 9; i++) steps += '<rect x="' + (290 + i * 9) + '" y="' + (176 - i * 14) + '" width="' + (110 - i * 9) + '" height="6" fill="#8d8a84"/>';
    return svg(
      '<rect width="400" height="260" fill="#d8d0bc"/>' + tiles +
      '<rect x="0" y="100" width="400" height="8" fill="#2f6d4a"/>' +
      /* mosaic name tablet */
      '<rect x="18" y="28" width="122" height="54" fill="#7a2a1e"/>' + mosaic +
      '<rect x="26" y="44" width="106" height="22" fill="#f4eedd"/>' +
      '<text x="79" y="61" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="15" fill="#2a2a2a">125TH ST</text>' +
      /* station sign */
      '<rect x="150" y="38" width="128" height="30" rx="4" fill="#111"/><rect x="150" y="38" width="128" height="3" fill="#fff"/>' +
      '<text x="160" y="60" ' + FONT + ' font-size="15" fill="#fff">125 St</text>' +
      bullet(228, 54, "2", "#ee352e") + bullet(254, 54, "3", "#ee352e") +
      /* stair up to the street with daylight */
      '<rect x="288" y="20" width="112" height="162" fill="#f6e7b8"/>' + steps +
      '<path d="M290 182L400 56" stroke="#2a2a2a" stroke-width="3"/>' +
      '<rect x="296" y="22" width="98" height="40" rx="3" fill="#111"/>' +
      '<text x="345" y="37" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">EXIT ↑ Lenox Av</text>' +
      '<text x="345" y="52" text-anchor="middle" ' + FONT + ' font-size="8" fill="#ffd23f">north to Astor Row</text>' +
      '<rect x="0" y="108" width="288" height="74" fill="#1a1a1e"/>' +
      '<g class="anim-train">' +
        '<rect x="-40" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="-40" y="158" width="300" height="5" fill="#ee352e"/>' + windows +
        '<circle cx="252" cy="170" r="4" fill="#fff6c2"/>' + bullet(238, 139, "3", "#ee352e") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2724"/>' +
      '<rect x="150" y="190" width="16" height="70" fill="#3a3f4a"/>' +
      tag("IGH BET", 18, 236, 30, GOLD, -4) + tag("YL", 196, 244, 42, ORANGE, -8) +
      '<text x="330" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="2" fill="#e8e2d0">UPTOWN 2 · 3</text>');
  }

  /* 2. Red Rooster on Lenox Av between 125th and 126th: red lettering over the glass front, sidewalk tables, the Lenox Av night */
  function marquee() {
    let bulbs = "";
    for (let x = 64; x <= 300; x += 14) bulbs += '<circle class="flk' + (x % 3 ? " flk2" : "") + '" cx="' + x + '" cy="' + (150 + Math.sin(x / 22) * 3) + '" r="2.4" fill="#ffe7a0"/>';
    let panes = "";
    for (let x = 72; x < 300; x += 38) panes += '<rect x="' + x + '" y="98" width="32" height="56" fill="#ffcf7a" opacity=".9"/><rect x="' + x + '" y="98" width="32" height="56" fill="none" stroke="#3a1410" stroke-width="2"/>';
    const table = x => '<ellipse cx="' + x + '" cy="186" rx="16" ry="4" fill="#e8e2d0"/><rect x="' + (x - 1.5) + '" y="186" width="3" height="16" fill="#222"/><rect x="' + (x - 26) + '" y="182" width="8" height="20" fill="#3a2a22"/><rect x="' + (x + 18) + '" y="182" width="8" height="20" fill="#3a2a22"/><circle class="flk" cx="' + x + '" cy="181" r="2" fill="#ffb347"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(12) +
      /* neighbors */
      '<rect x="0" y="40" width="60" height="164" fill="#5a3a2c"/><rect x="310" y="30" width="90" height="174" fill="#6a4a3a"/>' +
      '<rect x="12" y="60" width="12" height="16" fill="#ffd98a" class="flk"/><rect x="34" y="96" width="12" height="16" fill="#ffd98a"/><rect x="326" y="52" width="12" height="16" fill="#ffd98a"/><rect x="360" y="90" width="12" height="16" fill="#ffd98a" class="flk flk2"/>' +
      /* the restaurant building */
      '<rect x="60" y="20" width="250" height="184" fill="#7a3a2a"/>' +
      '<rect x="74" y="30" width="20" height="26" fill="#ffd98a" opacity=".85"/><rect x="120" y="30" width="20" height="26" fill="#2a2030"/><rect x="166" y="30" width="20" height="26" fill="#ffd98a" opacity=".85"/><rect x="212" y="30" width="20" height="26" fill="#2a2030"/><rect x="258" y="30" width="20" height="26" fill="#ffd98a" opacity=".85"/>' +
      '<rect x="64" y="64" width="242" height="30" fill="#1a1414"/>' +
      '<text x="185" y="87" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="22" letter-spacing="3" fill="#e0262e">RED ROOSTER</text>' +
      panes +
      '<path d="M60 154c40 6 210 6 250 0" stroke="#3a2a22" stroke-width="1" fill="none"/>' + bulbs +
      /* sidewalk tables */
      '<rect x="0" y="202" width="400" height="10" fill="#8f8a84"/><rect x="0" y="180" width="400" height="22" fill="#a8a29a" opacity=".35"/>' +
      table(110) + table(200) + table(270) +
      '<rect x="0" y="212" width="400" height="48" fill="#25282d"/><path d="M0 236h400" stroke="#f4f1e8" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("car", 220, BLUE) + car("car car2", 242, ORANGE) +
      gsign(355, 146, "Lenox Av") + '<rect x="353" y="164" width="4" height="40" fill="#1d2329"/>' +
      '<text x="200" y="14" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="3" fill="' + GOLD + '">LENOX AV · 125TH–126TH ST</text>',
      sky("g2", "#0b0d1c", "#2b2a4a"));
  }

  /* 3. St. Nicholas Houses: the blacktop between the 14-story brick towers, W 127th–131st St, a ball bouncing */
  function rucker() {
    let towers = "";
    [[-10, 14, 92], [120, 26, 70], [250, 10, 100], [366, 30, 60]].forEach(t => {
      const x = t[0], y = t[1], w = t[2];
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#8e4a36"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#6a3426"/>';
      for (let r = 0; r < 14; r++) for (let c = x + 6; c < x + w - 8; c += 14) towers += '<rect x="' + c + '" y="' + (y + 10 + r * 9.4) + '" width="8" height="5" fill="' + ((r * 7 + c) % 5 ? "#e8d8b8" : "#ffd98a") + '" opacity=".75"/>';
    });
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 130l10 10M' + (x + 10) + ' 130l-10 10M' + x + ' 140l10 10M' + (x + 10) + ' 140l-10 10" stroke="#9aa3ab" stroke-width=".7" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + towers +
      '<rect x="0" y="128" width="400" height="2" fill="#9aa3ab"/>' + fence +
      '<rect x="0" y="150" width="400" height="110" fill="#2d2f33"/>' +
      '<rect x="30" y="160" width="340" height="92" fill="none" stroke="#f4f1e8" stroke-width="2"/>' +
      '<path d="M200 160v92" stroke="#f4f1e8" stroke-width="2"/><circle cx="200" cy="206" r="16" fill="none" stroke="#f4f1e8" stroke-width="2"/>' +
      '<path d="M370 182h-44v48h44" fill="none" stroke="#f4f1e8" stroke-width="2"/><path d="M326 182a24 24 0 0 0 0 48" fill="none" stroke="#f4f1e8" stroke-width="2"/>' +
      '<rect x="378" y="110" width="5" height="96" fill="#555"/><rect x="358" y="116" width="22" height="28" fill="#f4f1e8" stroke="#333"/><path d="M358 140h-10" stroke="' + ORANGE + '" stroke-width="3"/><path d="M348 140l2 10h-6l2-10" fill="none" stroke="#fff"/>' +
      '<g class="ball"><circle cx="300" cy="200" r="8" fill="' + ORANGE + '" stroke="#5a2a0a"/><path d="M292 200h16M300 192v16" stroke="#5a2a0a"/></g>' +
      tag("YL", 60, 238, 30, GOLD, -6) +
      '<rect x="40" y="2" width="320" height="22" rx="3" fill="#111" opacity=".75"/>' +
      '<text x="200" y="18" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="2" fill="' + GOLD + '">ST. NICHOLAS HOUSES · W 127–131</text>',
      sky("g3", "#f2994a", "#ffe0a0"));
  }

  /* 4. Astor Row, W 130th St between 5th and Lenox: the 1880s brick rowhouses with wooden front porches and yards */
  function brownstones() {
    let row = "";
    const porch = ["#f4f1e8", "#5f8f6a", "#e8c36a", "#f4f1e8", "#7a9ac0"];
    for (let i = 0; i < 5; i++) {
      const x = i * 80 + 4;
      row += '<rect x="' + x + '" y="40" width="72" height="140" fill="#9a4a34"/><rect x="' + x + '" y="34" width="72" height="8" fill="#5a2a1e"/>';
      row += '<rect x="' + (x + 10) + '" y="52" width="14" height="22" fill="#2a2030"/><rect x="' + (x + 30) + '" y="52" width="14" height="22" fill="#ffd98a" opacity=".8"/><rect x="' + (x + 50) + '" y="52" width="14" height="22" fill="#2a2030"/>';
      row += '<rect x="' + (x + 10) + '" y="90" width="14" height="22" fill="#2a2030"/><rect x="' + (x + 50) + '" y="90" width="14" height="22" fill="#2a2030"/>';
      row += '<path d="M' + (x + 30) + ' 150v-26h14v26z" fill="#3a2418"/>';
      /* the wooden porch across the front */
      row += '<path d="M' + (x - 2) + ' 118h76l-4 -8h-68z" fill="' + porch[i] + '"/>';
      row += '<rect x="' + x + '" y="118" width="72" height="4" fill="' + porch[i] + '"/>';
      for (let p = 0; p < 4; p++) row += '<rect x="' + (x + 2 + p * 22) + '" y="122" width="4" height="30" fill="' + porch[i] + '"/>';
      row += '<rect x="' + x + '" y="140" width="72" height="3" fill="' + porch[i] + '"/>';
      for (let b = 0; b < 12; b++) row += '<rect x="' + (x + 2 + b * 6) + '" y="143" width="2" height="9" fill="' + porch[i] + '"/>';
      row += '<rect x="' + x + '" y="152" width="72" height="6" fill="#6a5a4a"/>';
      row += '<path d="M' + (x + 30) + ' 158h14l4 16h-22z" fill="#8a7a6a"/>';
    }
    let yard = "";
    for (let x = 0; x < 400; x += 6) yard += '<rect x="' + x + '" y="186" width="2" height="16" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + row +
      '<rect x="0" y="174" width="400" height="22" fill="#4f7a3a"/>' +
      '<circle cx="40" cy="176" r="10" fill="#6a9a4a"/><circle cx="200" cy="178" r="9" fill="#6a9a4a"/><circle cx="330" cy="176" r="11" fill="#6a9a4a"/>' +
      '<rect x="0" y="184" width="400" height="2" fill="#111"/>' + yard +
      '<rect x="0" y="202" width="400" height="14" fill="#9b9690"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/>' +
      '<g class="bird"><path d="M0 26q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<g class="bird bird2"><path d="M0 44q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<rect x="90" y="224" width="220" height="26" rx="4" fill="#111" opacity=".75"/>' +
      '<text x="200" y="243" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="3" fill="' + GOLD + '">ASTOR ROW · W 130TH ST</text>',
      sky("g4", "#6a9ad0", "#f4d6a6"));
  }

  /* 5. Lenox Av and W 130 St, at the corner of Astor Row: green street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      "<g id=\"landmark-bd\"><style>@keyframes apyl_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apyl_a{animation:apyl_ch .8s steps(1) infinite}.apyl_b{animation:apyl_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apyl_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apyl_g{animation:apyl_gl 2.6s ease-in-out infinite}@keyframes apyl_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apyl_s{transform-box:fill-box;transform-origin:50% 100%;animation:apyl_sw 6s ease-in-out infinite}.apyl_s2{animation-delay:-3s}@keyframes apyl_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apyl_d{animation:apyl_dr 22s linear infinite}.apyl_d2{animation-delay:-11s}@keyframes apyl_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apyl_r{animation:apyl_rn .7s linear infinite}@keyframes apyl_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apyl_m{animation:apyl_mv 9s linear infinite}@keyframes apyl_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apyl_ml{animation:apyl_mvl 7s linear infinite}@keyframes apyl_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apyl_f{animation:apyl_fl 3.1s infinite}</style><g transform=\"translate(138 2)\"><rect class=\"apyl_g\" x=\"-5.2\" y=\"-4.5\" width=\"25.5\" height=\"71\" rx=\"7.5\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M3 0l4.5 -6.7l4.5 6.8z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"15\" height=\"62\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"1.1\"/><text x=\"7.5\" y=\"9.7\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.1\" fill=\"#fff\">A</text><text x=\"7.5\" y=\"19.5\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.1\" fill=\"#fff\">P</text><text x=\"7.5\" y=\"29.3\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.1\" fill=\"#fff\">O</text><text x=\"7.5\" y=\"39.2\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.1\" fill=\"#fff\">L</text><text x=\"7.5\" y=\"49\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.1\" fill=\"#fff\">L</text><text x=\"7.5\" y=\"58.9\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.1\" fill=\"#fff\">O</text><circle class=\"apyl_b\" cx=\"1.5\" cy=\"2.4\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"13.5\" cy=\"2.4\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"1.5\" cy=\"7.2\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"13.5\" cy=\"7.2\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"1.5\" cy=\"12\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"13.5\" cy=\"12\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"1.5\" cy=\"16.8\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"13.5\" cy=\"16.8\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"1.5\" cy=\"21.6\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"13.5\" cy=\"21.6\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"1.5\" cy=\"26.4\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"13.5\" cy=\"26.4\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"1.5\" cy=\"31.2\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"13.5\" cy=\"31.2\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"1.5\" cy=\"36\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"13.5\" cy=\"36\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"1.5\" cy=\"40.8\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"13.5\" cy=\"40.8\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"1.5\" cy=\"45.6\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"13.5\" cy=\"45.6\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"1.5\" cy=\"50.4\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"13.5\" cy=\"50.4\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"1.5\" cy=\"55.2\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_a\" cx=\"13.5\" cy=\"55.2\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"1.5\" cy=\"60\" r=\"1.1\" fill=\"#ffe9a0\"/><circle class=\"apyl_b\" cx=\"13.5\" cy=\"60\" r=\"1.1\" fill=\"#ffe9a0\"/></g><g class=\"apyl_d\"><path d=\"M40 40q12 -20 32 -8q16 -16 36 0q20 0 20 12z\" fill=\"#3a4660\"/></g><g class=\"apyl_d apyl_d2\"><path d=\"M150 20q9.600000000000001 -16 25.6 -6.4q12.8 -12.8 28.8 0q16 0 16 9.600000000000001z\" fill=\"#34405a\"/></g></g>" +
      '<rect x="20" y="70" width="230" height="150" fill="#8a4a36"/>' +
      '<path d="M20 70h230" stroke="#5a2a1e" stroke-width="6"/>' +
      tag("YL", 50, 150, 60, ORANGE, -7) + tag("IGH BET", 40, 204, 30, GOLD, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      gsign(302, 88, "Lenox Av") + gsign(302, 110, "W 130 St") +
      '<text x="302" y="142" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" letter-spacing="2" fill="' + GOLD + '">ASTOR ROW</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("car", 226, BLUE),
      sky("g5", "#0d1424", "#2a3a5a"));
  }
  window.SCENES = { train, marquee, rucker, brownstones, corner };
})();
