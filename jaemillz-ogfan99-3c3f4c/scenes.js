/* Central Harlem opening scenes for the Jae Millz game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes carR{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '@keyframes carL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}' +
    '.carR{animation:carR 7s linear infinite}.carL{animation:carL 9s linear infinite}' +
    '@keyframes ring{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:ring 1.6s ease-in-out infinite}' +
    '@keyframes duck{0%,100%{transform:translateX(0)}50%{transform:translateX(120px)}}' +
    '.duck{animation:duck 12s ease-in-out infinite}.dk2{animation-delay:-4s}' +
    '@keyframes ripple{0%{transform:scale(.3);opacity:.8}100%{transform:scale(1.6);opacity:0}}' +
    '.rip{transform-box:fill-box;transform-origin:50% 50%;animation:ripple 3s ease-out infinite}.rp2{animation-delay:1.5s}' +
    '@keyframes win{0%,100%{opacity:.25}50%{opacity:.95}}' +
    '.win{animation:win 4s ease-in-out infinite}.wn2{animation-delay:1.3s}.wn3{animation-delay:2.6s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GREEN = "#7cf29a", GOLD = "#ffd23f", RED = "#ee352e", ROSE = "#ff4f6d";
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="54" height="14" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 9) + '" width="30" height="11" rx="3" fill="' + c + '"/><rect x="14" y="' + (y - 7) + '" width="10" height="7" fill="#bfe3ff"/><rect x="27" y="' + (y - 7) + '" width="10" height="7" fill="#bfe3ff"/><circle cx="12" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="42" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';

  /* 1. The 2 pulling into Central Park North (110 St), underground under Lenox Av: white tile, green-and-cream band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d4cfc2" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d4cfc2" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 20) band += '<rect x="' + x + '" y="30" width="10" height="9" fill="#2f6b45"/><rect x="' + (x + 10) + '" y="30" width="10" height="9" fill="#e9dcc0"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efeadf"/>' + tiles + band +
      '<rect x="40" y="54" width="320" height="36" rx="4" fill="#111"/>' +
      '<rect x="40" y="54" width="320" height="4" fill="#fff"/>' +
      '<text x="52" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Central Park North (110 St)</text>' +
      bullet(312, 73, "2", RED) + bullet(338, 73, "3", RED) +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
        bullet(296, 142, "2", RED) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("JAE MILLZ", 24, 240, 30, GREEN, -4) + tag("POTENT", 290, 242, 28, GOLD, -8));
  }

  /* 2. The Duke Ellington Memorial at Frawley Circle (5th Av and 110th): the bronze figure at the grand piano up on its three tall columns, the traffic circle going round */
  function theresa() {
    const lbl = (x, y, s, size, c) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" fill="' + c + '">' + s + '</text>';
    const col = x => '<rect x="' + (x - 5) + '" y="72" width="10" height="120" fill="#6f5a3a"/><rect x="' + (x - 4) + '" y="72" width="3" height="120" fill="#9a7f52"/><rect x="' + (x - 7) + '" y="186" width="14" height="8" fill="#5a4a32"/>';
    let trees = ""; [20, 56, 344, 380].forEach((x, i) => trees += '<rect x="' + (x - 2) + '" y="150" width="4" height="40" fill="#4a3220"/><circle cx="' + x + '" cy="140" r="20" fill="' + (i % 2 ? "#3f7a3a" : "#4f8a44") + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + '<circle cx="70" cy="44" r="18" fill="#fff1c8"/>' +
      '<path d="M0 150h60v-50h40v30h200v-40h40v60h60v40H0z" fill="#8a6a5a" opacity=".5"/>' + trees +
      /* the circle's granite plaza and the columns */
      '<ellipse cx="200" cy="196" rx="120" ry="16" fill="#b8b0a2"/><ellipse cx="200" cy="192" rx="60" ry="8" fill="#9a9284"/>' +
      col(170) + col(200) + col(230) + '<rect x="160" y="66" width="80" height="8" fill="#6f5a3a"/>' +
      /* the piano and the figure, all bronze */
      '<path d="M168 66v-10h40q24 0 26 10z" fill="#4a3a22"/><path d="M170 56l30-12 6 12z" fill="#5a4a2a"/>' +
      '<circle cx="182" cy="40" r="5" fill="#4a3a22"/><path d="M176 58v-10q0-4 6-4t6 4v10z" fill="#4a3a22"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#1b1d21"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("carR", 236, "#c0392b") + car("carL", 214, "#f1c40f") +
      '<rect x="264" y="92" width="120" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/>' + lbl(324, 105, "Duke Ellington Cir", 10, "#fff") +
      lbl(300, 24, "DUKE ELLINGTON MEMORIAL", 12, "#14243a") + lbl(300, 38, "FRAWLEY CIRCLE · 5TH AV &amp; 110TH", 9, "#14243a") +
      tag("JAE MILLZ", 14, 128, 24, GREEN, -6),
      sky("g2", "#8fc3ea", "#f6dcb0"));
  }

  /* 3. The Conservatory Garden at 5th Av and 105th: through the black-and-gold Vanderbilt Gate to the fountain, the clipped hedges, the crabapples */
  function church() {
    const lbl = (x, y, s, size, c) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" fill="' + c + '">' + s + '</text>';
    let bars = ""; for (let x = 104; x <= 296; x += 8) bars += '<path d="M' + x + ' 196V' + (x > 150 && x < 250 ? 74 : 92) + '" stroke="#16181c" stroke-width="2.2"/><path d="M' + (x - 2) + ' ' + (x > 150 && x < 250 ? 74 : 92) + 'l2-6 2 6z" fill="' + GOLD + '"/>';
    let scroll = ""; for (let x = 158; x < 246; x += 16) scroll += '<circle cx="' + (x + 8) + '" cy="98" r="6" fill="none" stroke="' + GOLD + '" stroke-width="2"/>';
    let hedge = ""; [[20, 150], [300, 150]].forEach(([x, y]) => hedge += '<rect x="' + x + '" y="' + y + '" width="80" height="22" rx="6" fill="#2f6a2f"/>');
    let blossoms = ""; [[40, 120], [360, 118]].forEach(([x, y], i) => blossoms += '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="34" fill="#4a3220"/><circle class="win wn' + (i + 1) + '" cx="' + x + '" cy="' + (y - 6) + '" r="24" fill="#f6a8c0"/><circle cx="' + (x + 12) + '" cy="' + (y - 2) + '" r="14" fill="#f8c2d4"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* the garden beyond: lawn, fountain, the hedges */
      '<rect x="0" y="140" width="400" height="80" fill="#5f9a46"/>' + hedge + blossoms +
      '<ellipse cx="200" cy="170" rx="44" ry="10" fill="#7fbfe0"/><path d="M200 166v-24" stroke="#cfe6f8" stroke-width="3"/>' +
      '<circle class="rip" cx="200" cy="170" r="10" fill="none" stroke="#e6f6ff" stroke-width="1.5"/><circle class="rip rp2" cx="200" cy="170" r="10" fill="none" stroke="#e6f6ff" stroke-width="1.5"/>' +
      '<rect x="190" y="132" width="20" height="10" fill="#b8b0a2"/>' +
      /* the gate: limestone posts, black iron, gold tips */
      '<rect x="80" y="70" width="22" height="130" fill="#d8d0bc"/><rect x="298" y="70" width="22" height="130" fill="#d8d0bc"/><rect x="76" y="64" width="30" height="8" fill="#c8c0aa"/><rect x="294" y="64" width="30" height="8" fill="#c8c0aa"/>' +
      bars + '<path d="M150 74q50-34 100 0" stroke="#16181c" stroke-width="4" fill="none"/>' + scroll + '<circle cx="200" cy="54" r="7" fill="' + GOLD + '"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#b8b0a2"/><path d="M0 210h400" stroke="#9a9284"/>' +
      lbl(200, 228, "CONSERVATORY GARDEN", 14, "#1b1d21") + lbl(200, 242, "VANDERBILT GATE · 5TH AV AT 105TH", 9, "#1b1d21") +
      tag("JAE MILLZ", 14, 40, 26, GREEN, -5) + tag("POTENT", 300, 40, 20, GOLD, -4),
      sky("g3", "#8fc3ea", "#e6f2fa"));
  }

  /* 4. The Harlem Meer at 110th: the Dana Discovery Center's brick house with its slate roof and cupola on the water, ducks gliding, willows */
  function meer() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="320" cy="56" r="24" fill="#ffd27a" opacity=".85"/>' +
      /* Fifth Av towers far behind */
      '<rect x="0" y="86" width="40" height="60" fill="#4d4a6a"/><rect x="44" y="70" width="30" height="76" fill="#55527a"/><rect x="340" y="80" width="60" height="66" fill="#4d4a6a"/>' +
      '<path d="M0 146h400v12H0z" fill="#2f4a2a"/>' +
      /* the Discovery Center */
      '<rect x="150" y="108" width="120" height="44" fill="#9b4a32"/>' +
      '<path d="M140 110l70-34 70 34z" fill="#3c4650"/><path d="M140 110h140" stroke="#2a3138" stroke-width="3"/>' +
      '<rect x="202" y="56" width="16" height="22" fill="#e9e3d6"/><path d="M198 58l12-14 12 14z" fill="#3c4650"/>' +
      '<rect x="162" y="118" width="14" height="22" fill="#f0e6c8"/><rect x="186" y="118" width="14" height="22" fill="#f0e6c8"/><rect x="220" y="118" width="14" height="22" fill="#f0e6c8"/><rect x="244" y="118" width="14" height="22" fill="#f0e6c8"/>' +
      '<rect x="140" y="150" width="140" height="6" fill="#d8d1c2"/>' +
      /* the water */
      '<rect x="0" y="156" width="400" height="104" fill="#3d6f8a"/>' +
      '<path d="M150 166h120" stroke="#9b4a32" stroke-width="6" opacity=".35"/><path d="M175 176h70" stroke="#9b4a32" stroke-width="4" opacity=".25"/>' +
      '<path d="M0 190h400M0 214h400M0 238h400" stroke="#a9d3e8" stroke-width="1" opacity=".4" stroke-dasharray="16 22"/>' +
      '<ellipse class="rip" cx="90" cy="220" rx="14" ry="4" fill="none" stroke="#cfe9f5" stroke-width="1.5"/><ellipse class="rip rp2" cx="300" cy="200" rx="14" ry="4" fill="none" stroke="#cfe9f5" stroke-width="1.5"/>' +
      '<g class="duck"><g transform="translate(60 196)"><ellipse cx="10" cy="6" rx="10" ry="5" fill="#8b6b4a"/><circle cx="18" cy="0" r="4" fill="#1f6b3a"/><path d="M21 0l5 1-5 2z" fill="' + GOLD + '"/></g></g>' +
      '<g class="duck dk2"><g transform="translate(150 226)"><ellipse cx="10" cy="6" rx="10" ry="5" fill="#a08060"/><circle cx="18" cy="0" r="4" fill="#7a6040"/><path d="M21 0l5 1-5 2z" fill="' + GOLD + '"/></g></g>' +
      /* willow */
      '<path d="M372 160V96" stroke="#3b2a1c" stroke-width="6"/><path d="M340 150q10-60 32-60t32 60" fill="#5f8f3a" opacity=".9"/>' +
      '<path d="M346 150v-30M356 154v-40M366 156v-44M380 156v-44M392 152v-36" stroke="#7fae4a" stroke-width="2"/>' +
      '<rect x="20" y="164" width="104" height="22" rx="3" fill="#123d2a" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="72" y="179" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="2" fill="#fff">HARLEM MEER</text>',
      sky("g4", "#3a3a6e", "#f2a477"));
  }

  /* 5. Lenox Av and Central Park North: brownstone stoop, street signs, the tag wall, the park trees across the street */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      "<g id=\"landmark-bd\"><style>@keyframes apjaem_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apjaem_a{animation:apjaem_ch .8s steps(1) infinite}.apjaem_b{animation:apjaem_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apjaem_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apjaem_g{animation:apjaem_gl 2.6s ease-in-out infinite}@keyframes apjaem_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apjaem_s{transform-box:fill-box;transform-origin:50% 100%;animation:apjaem_sw 6s ease-in-out infinite}.apjaem_s2{animation-delay:-3s}@keyframes apjaem_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apjaem_d{animation:apjaem_dr 22s linear infinite}.apjaem_d2{animation-delay:-11s}@keyframes apjaem_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apjaem_r{animation:apjaem_rn .7s linear infinite}@keyframes apjaem_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apjaem_m{animation:apjaem_mv 9s linear infinite}@keyframes apjaem_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apjaem_ml{animation:apjaem_mvl 7s linear infinite}@keyframes apjaem_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apjaem_f{animation:apjaem_fl 3.1s infinite}</style><rect x=\"250\" y=\"74.2\" width=\"29\" height=\"25.8\" fill=\"#16251c\"/><rect x=\"273\" y=\"84.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"258\" y=\"90.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"263\" y=\"90.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"273\" y=\"90.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"278\" y=\"89.1\" width=\"19\" height=\"10.9\" fill=\"#16251c\"/><rect x=\"281\" y=\"93.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"296\" y=\"82\" width=\"23\" height=\"18\" fill=\"#16251c\"/><rect x=\"304\" y=\"86\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"318\" y=\"65.6\" width=\"32\" height=\"34.4\" fill=\"#16251c\"/><rect x=\"331\" y=\"75.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"336\" y=\"87.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"341\" y=\"87.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"326\" y=\"93.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"328.5\" y=\"52.6\" width=\"10\" height=\"9.5\" fill=\"#16251c\"/><path d=\"M327.5 52.6l6 -5l6 5z\" fill=\"#16251c\"/><path d=\"M329.5 62.1v3.5M337.5 62.1v3.5\" stroke=\"#16251c\" stroke-width=\"1.2\"/><rect x=\"349\" y=\"80.7\" width=\"24\" height=\"19.3\" fill=\"#16251c\"/><rect x=\"362\" y=\"90.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"367\" y=\"90.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"372\" y=\"72.7\" width=\"23\" height=\"27.3\" fill=\"#16251c\"/><rect x=\"394\" y=\"80.4\" width=\"36\" height=\"19.6\" fill=\"#16251c\"/><rect x=\"402\" y=\"90.4\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><g transform=\"translate(352 30)\"><rect class=\"apjaem_g\" x=\"-3.1\" y=\"-2.7\" width=\"15.3\" height=\"49.4\" rx=\"4.5\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M1.8 0l2.7 -4l2.7 4.1z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"9\" height=\"44\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"0.6\"/><text x=\"4.5\" y=\"6.9\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">A</text><text x=\"4.5\" y=\"13.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">P</text><text x=\"4.5\" y=\"20.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">O</text><text x=\"4.5\" y=\"27.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">L</text><text x=\"4.5\" y=\"34.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">L</text><text x=\"4.5\" y=\"41.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">O</text><circle class=\"apjaem_b\" cx=\"0.9\" cy=\"1.4\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"8.1\" cy=\"1.4\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"0.9\" cy=\"4.3\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"8.1\" cy=\"4.3\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"0.9\" cy=\"7.2\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"8.1\" cy=\"7.2\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"0.9\" cy=\"10.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"8.1\" cy=\"10.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"0.9\" cy=\"13\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"8.1\" cy=\"13\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"0.9\" cy=\"15.8\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"8.1\" cy=\"15.8\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"0.9\" cy=\"18.7\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"8.1\" cy=\"18.7\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"0.9\" cy=\"21.6\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"8.1\" cy=\"21.6\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"0.9\" cy=\"24.5\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"8.1\" cy=\"24.5\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"0.9\" cy=\"27.4\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"8.1\" cy=\"27.4\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"0.9\" cy=\"30.2\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"8.1\" cy=\"30.2\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"0.9\" cy=\"33.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"8.1\" cy=\"33.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"0.9\" cy=\"36\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"8.1\" cy=\"36\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"0.9\" cy=\"38.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_a\" cx=\"8.1\" cy=\"38.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"0.9\" cy=\"41.8\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apjaem_b\" cx=\"8.1\" cy=\"41.8\" r=\"0.6\" fill=\"#ffe9a0\"/></g><g class=\"apjaem_m\" style=\"animation-duration:16s\"><circle class=\"apjaem_a\" cx=\"260\" cy=\"18\" r=\"1.4\" fill=\"#ff5050\"/><circle cx=\"265\" cy=\"18\" r=\"1\" fill=\"#fff\"/></g><g class=\"apjaem_m\" style=\"animation-duration:16s\"><circle class=\"apjaem_a\" cx=\"120\" cy=\"34\" r=\"1.4\" fill=\"#ff5050\"/><circle cx=\"125\" cy=\"34\" r=\"1\" fill=\"#fff\"/></g></g>" +
      '<circle cx="380" cy="150" r="40" fill="#24452c"/><circle cx="340" cy="160" r="30" fill="#2c5434"/>' +
      '<rect x="14" y="60" width="236" height="160" fill="#4a3a33"/>' +
      (function () { let b = ""; for (let y = 72; y < 220; y += 12) b += '<path d="M14 ' + y + 'h236" stroke="#3a2c26" stroke-width="1.5"/>'; return b; })() +
      tag("JAE MILLZ", 26, 144, 40, GREEN, -7) + tag("HARLEM", 60, 196, 30, ROSE, -3) + tag("NO NO NO", 150, 86, 16, GOLD, -2) +
      /* streetlight */
      '<rect x="268" y="48" width="5" height="172" fill="#1d2329"/><path d="M270 50h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M286 54h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M286 62l26 0 34 158h-94z" fill="#ffe7a8"/></g>' +
      /* signs */
      '<rect x="300" y="70" width="5" height="150" fill="#1d2329"/>' +
      '<rect x="262" y="78" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="91" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Lenox Av</text>' +
      '<rect x="252" y="100" width="102" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="113" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Central Park N</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0c1a14", "#24443a"));
  }

  window.SCENES = { train, theresa, church, meer, corner };
})();
