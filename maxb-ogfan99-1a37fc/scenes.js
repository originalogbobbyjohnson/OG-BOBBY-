/* Harlem opening scenes for the Max B game: the Wave. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes surf{0%,100%{transform:translateX(0)}50%{transform:translateX(-20px)}}' +
    '.wv{animation:surf 3s ease-in-out infinite}.wv2{animation-delay:-1.5s}' +
    '@keyframes glide{0%,100%{transform:translate(0,0)}50%{transform:translate(70px,3px)}}' +
    '.glide{animation:glide 9s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}' +
    '.glow{animation:glow 2.6s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
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
  /* a rolling wave crest */
  const crest = (y, c, cls) => '<g class="' + cls + '"><path d="M-30 ' + y + (function () { let d = ""; for (let x = -30; x < 440; x += 40) d += 'q10 -12 20 0t20 0'; return d; })() + 'V260H-30z" fill="' + c + '"/></g>';
  const AQUA = "#9fe3ff", TEAL = "#2ec4b6", GOLD = "#f2c14e", SILVER = "#c9d3dc";

  /* 1. The 3 pulling into Harlem–148 St, the end of the line under Lenox Av: white tile, red tile band, black columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfcabc" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#cfcabc" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="30" width="8" height="8" fill="#a8322a"/><rect x="' + (x + 8) + '" y="30" width="8" height="8" fill="#e8dcc0"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1a1d22"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#2b3038"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#111317"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#24272c"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#ece6d6"/>' + tiles + band +
      '<rect x="64" y="54" width="272" height="36" rx="4" fill="#111"/>' +
      '<rect x="64" y="54" width="272" height="4" fill="#fff"/>' +
      '<text x="78" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Harlem–148 St</text>' +
      bullet(310, 73, "3", "#ee352e") +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#08090b"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="5" fill="#ee352e"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
        bullet(296, 142, "3", "#ee352e") +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#24272c"/>' +
      tag("WAVY", 24, 242, 34, AQUA, -5) + tag("BIGGAVELI", 214, 244, 28, GOLD, -7));
  }

  /* 2. The Madison Avenue Bridge over the Harlem River at E 138th: the steel swing span, the little towers over the pivot, the Bronx across */
  function theresa() {
    const lbl = (x, y, s, size, c) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" fill="' + c + '">' + s + '</text>';
    let truss = ""; for (let x = 60; x < 340; x += 20) truss += '<path d="M' + x + ' 150l10-34 10 34" stroke="#5f7f8a" stroke-width="2.5" fill="none"/>';
    const turret = x => '<rect x="' + (x - 7) + '" y="90" width="14" height="26" fill="#6f8f9a"/><path d="M' + (x - 9) + ' 90l9-14 9 14z" fill="#3f5a64"/><circle cx="' + x + '" cy="74" r="2" fill="' + GOLD + '"/>';
    const cab = (cls, c) => '<g class="' + cls + '"><rect x="0" y="140" width="40" height="12" rx="4" fill="' + c + '"/><path d="M8 140l6-7h14l6 7z" fill="' + c + '"/><circle cx="10" cy="152" r="4" fill="#111"/><circle cx="30" cy="152" r="4" fill="#111"/></g>';
    let bronx = ""; [[0, 70, 60], [64, 84, 50], [118, 60, 46], [250, 76, 52], [306, 64, 44], [354, 80, 46]].forEach(b => bronx += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (130 - b[1]) + '" fill="#5a4a5e"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + '<circle cx="330" cy="40" r="16" fill="#fff1c8"/>' +
      '<g class="cld"><ellipse cx="0" cy="34" rx="44" ry="8" fill="#fff" opacity=".5"/></g>' + bronx +
      '<rect x="0" y="116" width="400" height="6" fill="#6a6a70"/>' +
      /* the swing span: through truss, top chord, the turrets over the pivot */
      '<path d="M60 116h280" stroke="#5f7f8a" stroke-width="5"/>' + truss + '<rect x="0" y="148" width="400" height="8" fill="#4f6f7a"/>' +
      turret(176) + turret(224) + '<rect x="170" y="100" width="60" height="16" fill="#6f8f9a"/><rect x="186" y="104" width="28" height="8" fill="#ffe6a8" class="flk"/>' +
      cab("car", "#f2c200") + cab("car car2", "#2ec4b6") +
      /* the pier and the river */
      '<rect x="0" y="156" width="400" height="104" fill="#2a6f8f"/><rect x="186" y="156" width="28" height="30" fill="#8a847a"/>' +
      crest(206, "#3a86a8", "wv") + crest(228, "#2ec4b6", "wv wv2") +
      lbl(200, 22, "MADISON AV BRIDGE", 16, "#14243a") + lbl(200, 36, "HARLEM RIVER AT E 138TH", 9, "#14243a") +
      tag("WAVY", 22, 250, 30, AQUA, -5) + tag("MAX B", 290, 250, 26, GOLD, -4),
      sky("g2", "#8fc3ea", "#f6d8a8"));
  }

  /* 3. The Lincoln Houses, E 132nd to 135th between Fifth and Park: the red-brick towers, the benches and the trees, Metro-North rolling over the Park Av viaduct */
  function church() {
    const lbl = (x, y, s, size, c) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" fill="' + c + '">' + s + '</text>';
    const tower = (x, y, w) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (190 - y) + '" fill="#8a3e2c"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#5a2418"/>';
      for (let yy = y + 10; yy < 182; yy += 13) for (let xx = x + 6; xx < x + w - 8; xx += 13) s += '<rect' + ((xx + yy) % 9 === 0 ? ' class="flk"' : '') + ' x="' + xx + '" y="' + yy + '" width="7" height="8" fill="' + ((xx * 7 + yy) % 5 < 2 ? "#ffd98a" : "#2a1d17") + '"/>';
      return s; };
    const tree = x => '<rect x="' + (x - 2) + '" y="176" width="4" height="18" fill="#4a3220"/><circle cx="' + x + '" cy="172" r="14" fill="#3f7a3a"/>';
    let win = ""; for (let x = 16; x < 330; x += 40) win += '<rect x="' + x + '" y="210" width="26" height="12" rx="2" fill="#cfe6ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + '<circle cx="60" cy="40" r="16" fill="#fff1c8"/>' +
      tower(10, 60, 90) + tower(120, 40, 80) + tower(214, 54, 84) + tower(312, 70, 82) +
      '<rect x="0" y="190" width="400" height="10" fill="#9a958a"/>' + tree(110) + tree(206) + tree(306) +
      '<rect x="40" y="186" width="30" height="4" fill="#2f5a3a"/><rect x="260" y="186" width="30" height="4" fill="#2f5a3a"/>' +
      /* the Park Av viaduct and the train */
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a40"/><path d="M0 252h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/><rect x="0" y="228" width="400" height="8" fill="#5a5a60"/>' + [40, 140, 240, 340].map(x => '<rect x="' + (x - 4) + '" y="236" width="8" height="24" fill="#5a5a60"/>').join("") +
      '<g class="car" style="animation-duration:9s"><rect x="0" y="202" width="340" height="26" rx="5" fill="#d4d8de" stroke="#6b7280" stroke-width="1.5"/><rect x="0" y="222" width="340" height="4" fill="#0039a6"/>' + win + '</g>' +
      '<rect x="138" y="8" width="124" height="22" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' + lbl(200, 23, "E 135 St", 11, "#fff") +
      '<rect x="120" y="36" width="160" height="20" rx="3" fill="#14181d" opacity=".8"/>' + lbl(200, 50, "LINCOLN HOUSES · 5TH TO PARK", 9, "#fff") +
      tag("MAX B", 24, 180, 28, AQUA, -6) + tag("GAIN GREENE", 230, 178, 18, GOLD, -4),
      sky("g3", "#f2a96a", "#9fd0ea"));
  }

  /* 4. Harlem River Park at E 135th: the esplanade rail, the Drive behind it, the Harlem River rolling in waves, the Bronx across */
  function meer() {
    const lbl = (x, y, s, size, c) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" fill="' + c + '">' + s + '</text>';
    let rail = ""; for (let x = 0; x < 400; x += 16) rail += '<rect x="' + x + '" y="170" width="3" height="22" fill="#2b3038"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="320" cy="64" r="26" fill="#ffb15c" opacity=".9"/>' +
      '<g class="cld"><ellipse cx="0" cy="40" rx="44" ry="8" fill="#fff" opacity=".35"/></g>' +
      /* the Bronx shore */
      '<path d="M0 104h30v-26h36v14h40v-30h30v42h56v-20h44v20h30v-36h28v36h50v-18h56v18v14H0z" fill="#3a2a4a"/>' +
      '<rect x="0" y="116" width="400" height="54" fill="#2a6f8f"/>' +
      crest(132, "#3a86a8", "wv") + crest(150, "#2ec4b6", "wv wv2") +
      '<g class="glide"><path d="M40 128h40l-6 7h-28z" fill="#e9ecef"/></g>' +
      /* the esplanade */
      '<rect x="0" y="168" width="400" height="4" fill="#2b3038"/>' + rail + '<rect x="0" y="190" width="400" height="22" fill="#b9b2a2"/>' +
      '<path d="M0 200h400" stroke="#a49c8a" stroke-width="1"/>' + [80, 240].map(x => '<rect x="' + (x - 2) + '" y="140" width="4" height="50" fill="#2b3038"/><circle class="flk" cx="' + x + '" cy="138" r="5" fill="#fff1c8"/>').join("") +
      /* the Drive */
      '<rect x="0" y="212" width="400" height="48" fill="#1c1a1e"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="218" width="44" height="14" rx="4" fill="#f2c200"/><circle cx="10" cy="232" r="4" fill="#111"/><circle cx="34" cy="232" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="240" width="44" height="14" rx="4" fill="#d7263d"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="34" cy="254" r="4" fill="#111"/></g>' +
      lbl(200, 24, "HARLEM RIVER PARK", 16, "#fff") + lbl(200, 38, "THE ESPLANADE AT E 135TH", 9, "#ffe6c0") +
      tag("THE WAVE", 18, 206, 26, AQUA, -4) + tag("MAX B", 290, 204, 22, GOLD, -3),
      sky("g4", "#1a1240", "#e0794a"));
  }

  /* 5. Fifth Av and E 135 St by the Lincoln Houses: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      "<g id=\"landmark-bd\"><style>@keyframes apmaxb_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apmaxb_a{animation:apmaxb_ch .8s steps(1) infinite}.apmaxb_b{animation:apmaxb_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apmaxb_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apmaxb_g{animation:apmaxb_gl 2.6s ease-in-out infinite}@keyframes apmaxb_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apmaxb_s{transform-box:fill-box;transform-origin:50% 100%;animation:apmaxb_sw 6s ease-in-out infinite}.apmaxb_s2{animation-delay:-3s}@keyframes apmaxb_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apmaxb_d{animation:apmaxb_dr 22s linear infinite}.apmaxb_d2{animation-delay:-11s}@keyframes apmaxb_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apmaxb_r{animation:apmaxb_rn .7s linear infinite}@keyframes apmaxb_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apmaxb_m{animation:apmaxb_mv 9s linear infinite}@keyframes apmaxb_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apmaxb_ml{animation:apmaxb_mvl 7s linear infinite}@keyframes apmaxb_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apmaxb_f{animation:apmaxb_fl 3.1s infinite}</style><rect x=\"0\" y=\"58.3\" width=\"15\" height=\"11.7\" fill=\"#1a1f2a\"/><rect x=\"14\" y=\"54.2\" width=\"24\" height=\"15.8\" fill=\"#1a1f2a\"/><rect x=\"37\" y=\"45.1\" width=\"25\" height=\"24.9\" fill=\"#1a1f2a\"/><rect x=\"50\" y=\"55.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"55\" y=\"61.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"44\" y=\"32.1\" width=\"10\" height=\"9.5\" fill=\"#1a1f2a\"/><path d=\"M43 32.1l6 -5l6 5z\" fill=\"#1a1f2a\"/><path d=\"M45 41.6v3.5M53 41.6v3.5\" stroke=\"#1a1f2a\" stroke-width=\"1.2\"/><rect x=\"61\" y=\"54.2\" width=\"28\" height=\"15.8\" fill=\"#1a1f2a\"/><rect x=\"88\" y=\"59.6\" width=\"33\" height=\"10.4\" fill=\"#1a1f2a\"/><rect x=\"120\" y=\"49.6\" width=\"34\" height=\"20.4\" fill=\"#1a1f2a\"/><rect x=\"123\" y=\"53.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"148\" y=\"53.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"123\" y=\"59.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"123\" y=\"65.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"138\" y=\"65.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"143\" y=\"65.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"153\" y=\"55.9\" width=\"15\" height=\"14.1\" fill=\"#1a1f2a\"/><rect x=\"167\" y=\"55.1\" width=\"16\" height=\"14.9\" fill=\"#1a1f2a\"/><rect x=\"170\" y=\"59.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"182\" y=\"54.6\" width=\"17\" height=\"15.4\" fill=\"#1a1f2a\"/><rect x=\"185\" y=\"58.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"185\" y=\"64.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"185\" y=\"41.6\" width=\"10\" height=\"9.5\" fill=\"#1a1f2a\"/><path d=\"M184 41.6l6 -5l6 5z\" fill=\"#1a1f2a\"/><path d=\"M186 51.1v3.5M194 51.1v3.5\" stroke=\"#1a1f2a\" stroke-width=\"1.2\"/><rect x=\"198\" y=\"53.5\" width=\"34\" height=\"16.5\" fill=\"#1a1f2a\"/><rect x=\"221\" y=\"57.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"226\" y=\"63.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"231\" y=\"44.7\" width=\"25\" height=\"25.3\" fill=\"#1a1f2a\"/><rect x=\"239\" y=\"48.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"249\" y=\"48.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"239\" y=\"60.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"255\" y=\"58.8\" width=\"36\" height=\"11.2\" fill=\"#1a1f2a\"/><rect x=\"273\" y=\"62.8\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"70\" y=\"40\" width=\"50\" height=\"30\" fill=\"#5a4636\"/><rect x=\"69\" y=\"38\" width=\"52\" height=\"3\" fill=\"#5a4634\"/><rect x=\"72.8\" y=\"42.4\" width=\"6.9\" height=\"4.2\" fill=\"#ffd98a\" rx=\"2.8\"/><rect x=\"85.3\" y=\"42.4\" width=\"6.9\" height=\"4.2\" fill=\"#2a2028\" rx=\"2.8\"/><rect x=\"97.8\" y=\"42.4\" width=\"6.9\" height=\"4.2\" fill=\"#2a2028\" rx=\"2.8\"/><rect x=\"110.3\" y=\"42.4\" width=\"6.9\" height=\"4.2\" fill=\"#2a2028\" rx=\"2.8\"/><rect x=\"72.8\" y=\"49\" width=\"6.9\" height=\"4.2\" fill=\"#2a2028\" rx=\"2.8\"/><rect x=\"85.3\" y=\"49\" width=\"6.9\" height=\"4.2\" fill=\"#ffd98a\" rx=\"2.8\"/><rect x=\"97.8\" y=\"49\" width=\"6.9\" height=\"4.2\" fill=\"#2a2028\" rx=\"2.8\"/><rect x=\"110.3\" y=\"49\" width=\"6.9\" height=\"4.2\" fill=\"#2a2028\" rx=\"2.8\"/><g transform=\"translate(66 54) skewY(-8)\"><rect class=\"apmaxb_g\" x=\"-3.9\" y=\"-3.2\" width=\"65.8\" height=\"20.8\" rx=\"5.2\" fill=\"#ffd27a\" opacity=\".35\"/><rect x=\"0\" y=\"0\" width=\"58\" height=\"13\" fill=\"#b81a24\"/><rect x=\"1.3\" y=\"2.1\" width=\"55.4\" height=\"8.8\" fill=\"#f7f1e3\"/><text x=\"29\" y=\"6.5\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"4.7\" fill=\"#d3202b\" letter-spacing=\"0.8\">APOLLO</text><circle class=\"apmaxb_b\" cx=\"1.3\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"1.3\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"3.9\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"3.9\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"6.5\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"6.5\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"9.1\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"9.1\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"11.7\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"11.7\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"14.3\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"14.3\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"16.9\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"16.9\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"19.5\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"19.5\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"22.1\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"22.1\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"24.7\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"24.7\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"27.3\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"27.3\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"29.9\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"29.9\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"32.5\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"32.5\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"35.1\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"35.1\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"37.7\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"37.7\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"40.3\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"40.3\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"42.9\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"42.9\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"45.5\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"45.5\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"48.1\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"48.1\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"50.7\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"50.7\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"53.3\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"53.3\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"55.9\" cy=\"1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"55.9\" cy=\"12\" r=\"0.6\" fill=\"#ffe9a0\"/></g><g transform=\"translate(74 4) skewY(-8) scale(0.85 1)\"><rect class=\"apmaxb_g\" x=\"-3.8\" y=\"-3.3\" width=\"18.7\" height=\"52.6\" rx=\"5.5\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M2.2 0l3.3 -4.9l3.3 5z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"11\" height=\"46\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"0.8\"/><text x=\"5.5\" y=\"7.2\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">A</text><text x=\"5.5\" y=\"14.5\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">P</text><text x=\"5.5\" y=\"21.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">O</text><text x=\"5.5\" y=\"29.1\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">L</text><text x=\"5.5\" y=\"36.4\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">L</text><text x=\"5.5\" y=\"43.7\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">O</text><circle class=\"apmaxb_b\" cx=\"1.1\" cy=\"1.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"9.9\" cy=\"1.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"1.1\" cy=\"5.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"9.9\" cy=\"5.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"1.1\" cy=\"8.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"9.9\" cy=\"8.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"1.1\" cy=\"12.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"9.9\" cy=\"12.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"1.1\" cy=\"15.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"9.9\" cy=\"15.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"1.1\" cy=\"19.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"9.9\" cy=\"19.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"1.1\" cy=\"22.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"9.9\" cy=\"22.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"1.1\" cy=\"26.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"9.9\" cy=\"26.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"1.1\" cy=\"29.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"9.9\" cy=\"29.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"1.1\" cy=\"33.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"9.9\" cy=\"33.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"1.1\" cy=\"37\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"9.9\" cy=\"37\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"1.1\" cy=\"40.5\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_a\" cx=\"9.9\" cy=\"40.5\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"1.1\" cy=\"44\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apmaxb_b\" cx=\"9.9\" cy=\"44\" r=\"0.8\" fill=\"#ffe9a0\"/></g><g class=\"apmaxb_m\" style=\"animation-duration:14s\"><path d=\"M150 26q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/><path d=\"M160 21q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/><path d=\"M168 29q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/><path d=\"M141 32q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/><path d=\"M176 24q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/></g></g>" +
      /* red-brick tower block behind */
      '<rect x="270" y="24" width="120" height="196" fill="#6a3a2c"/>' +
      (function () { let w = ""; for (let y = 34; y < 210; y += 16) for (let x = 280; x < 384; x += 20) w += '<rect x="' + x + '" y="' + y + '" width="10" height="8" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      /* wall with the tag */
      '<rect x="14" y="70" width="236" height="150" fill="#2c3540"/>' +
      '<g clip-path="url(#cw)">' + crest(198, "#2ec4b6", "wv") + '</g>' +
      tag("MAX B", 34, 146, 50, AQUA, -7) + tag("GAIN GREENE", 30, 190, 24, GOLD, -3) +
      /* streetlight */
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M280 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      '<rect x="222" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="266" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">5 Av</text>' +
      '<rect x="226" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="266" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 135 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#06141f", "#1d3a4a") + '<clipPath id="cw"><rect x="14" y="70" width="236" height="150"/></clipPath>');
  }

  window.SCENES = { train, theresa, church, meer, corner };
})();
