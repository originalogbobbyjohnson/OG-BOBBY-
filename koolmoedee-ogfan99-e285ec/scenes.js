/* Harlem opening scenes for the Kool Moe Dee game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes glow{0%,100%{opacity:.3}50%{opacity:1}}' +
    '.bulb{animation:glow 1s infinite}.bulb2{animation-delay:-.5s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3s ease-in-out infinite}.beam2{animation-delay:-1.5s}' +
    '@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.jmp{animation:jump .6s ease-in-out infinite}.jmp2{animation-delay:-.3s}' +
    '@keyframes ball{0%{transform:translate(0,0)}25%{transform:translate(20px,-40px)}50%{transform:translate(40px,0)}75%{transform:translate(20px,-40px)}100%{transform:translate(0,0)}}' +
    '.ball{animation:ball 2s ease-in-out infinite}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-80px)}}' +
    '.car{animation:car 6s linear infinite}' +
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
  const GOLD = "#f2c14e", RED = "#e4572e", CYAN = "#3ec1d3";

  /* 1. The 2 pulling into 116 St on the Lenox Av line, underground: white tile, mosaic band, the exit to 116 St (Harlem World was right upstairs) */
  function train() {
    let tiles = "";
    for (let y = 24; y < 116; y += 7) tiles += '<path d="M0 ' + y + 'h400" stroke="#d7d2c4" stroke-width=".7"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 24v92" stroke="#d7d2c4" stroke-width=".5"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="28" width="8" height="6" fill="#2e6a4a"/><rect x="' + (x + 8) + '" y="28" width="8" height="6" fill="#b8892e"/>';
    let cols = "";
    [22, 250, 382].forEach(x => cols += '<rect x="' + (x - 6) + '" y="16" width="12" height="166" fill="#26303a"/><rect x="' + (x - 9) + '" y="16" width="18" height="5" fill="#26303a"/>');
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#101318"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#0a0c10"/>' +
      '<rect class="flk" x="50" y="9" width="100" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="250" y="9" width="100" height="4" rx="2" fill="#fff6d8"/>' +
      '<rect x="0" y="16" width="400" height="102" fill="#efeadc"/>' + tiles + band +
      '<rect x="0" y="16" width="400" height="8" fill="#3b4652"/>' +
      /* station sign */
      '<rect x="40" y="46" width="190" height="38" rx="4" fill="#111"/><rect x="40" y="46" width="190" height="4" fill="#fff"/>' +
      '<text x="54" y="74" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="18" fill="#fff">116 St</text>' +
      bullet(176, 68, "2", "#ee352e") + bullet(202, 68, "3", "#ee352e") +
      '<rect x="262" y="52" width="104" height="24" rx="3" fill="#111"/>' +
      '<text x="314" y="68" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9.5" fill="#fff">Exit  Lenox Av →</text>' +
      cols +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '<rect x="282" y="128" width="18" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(266, 140, "2", "#ee352e") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1d22"/>' +
      '<path d="M0 214h400M0 238h400" stroke="#262a31" stroke-width="2"/>' +
      tag("MOE DEE", 36, 242, 32, GOLD, -5) + tag("TREACHEROUS 3", 200, 238, 22, RED, -3));
  }

  /* 2. Bobby's Happy House on 125th St at Frederick Douglass Blvd: Bobby Robinson's record shop, home of Enjoy Records, the label that put out the Treacherous Three. Red sign, records in the window, the music spilling out */
  function apollo() {
    const rec = (x, y, col) => '<circle cx="' + x + '" cy="' + y + '" r="16" fill="#111"/><circle cx="' + x + '" cy="' + y + '" r="11" fill="none" stroke="#2a2a2a" stroke-width="1.5"/><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + col + '"/>';
    let bricks = "";
    for (let y = 30; y < 200; y += 8) bricks += '<path d="M0 ' + y + 'h400" stroke="#6e3a2a" stroke-width="1"/>';
    let notes = "";
    [[150, ""], [200, " n2"], [250, " n3"]].forEach(([x, c]) => notes += '<text class="nt' + c + '" x="' + x + '" y="216" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="' + GOLD + '">♪</text>');
    return svg(
      '<style>@keyframes nt{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-50px);opacity:0}}.nt{animation:nt 2.6s linear infinite}.n2{animation-delay:-.9s}.n3{animation-delay:-1.8s}' +
      '@keyframes spin{to{transform:rotate(360deg)}}.spn{transform-box:fill-box;transform-origin:center;animation:spin 1.6s linear infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="0" y="26" width="400" height="180" fill="#8a4632"/>' + bricks +
      '<rect x="40" y="40" width="40" height="40" fill="#2a2030"/><rect x="180" y="40" width="40" height="40" fill="#ffd98a" opacity=".7"/><rect x="320" y="40" width="40" height="40" fill="#2a2030"/>' +
      /* the red storefront sign */
      '<rect x="30" y="92" width="340" height="36" fill="#c4161c" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="117" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" letter-spacing="1">BOBBY\'S HAPPY HOUSE</text>' +
      /* the window full of records and 45s */
      '<rect x="30" y="134" width="210" height="72" fill="#1d2329"/><rect x="30" y="134" width="210" height="72" fill="#ffd98a" opacity=".22"/>' +
      '<g class="spn">' + rec(64, 168, RED) + '</g>' + rec(108, 168, GOLD) + '<g class="spn">' + rec(152, 168, CYAN) + '</g>' + rec(196, 168, "#fff") +
      '<rect x="44" y="188" width="80" height="14" fill="' + GOLD + '"/><text x="84" y="198.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#111">ENJOY RECORDS</text>' +
      '<rect x="252" y="134" width="40" height="72" fill="#2a1a12"/><rect x="258" y="140" width="28" height="40" fill="#ffd98a" opacity=".5"/>' +
      '<rect x="300" y="134" width="70" height="72" fill="#1d2329"/><rect x="306" y="140" width="58" height="60" fill="#ffd98a" opacity=".25"/>' +
      '<text x="335" y="166" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">RECORDS</text><text x="335" y="178" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">45s · LPs</text>' +
      notes +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a40"/><rect x="0" y="206" width="400" height="5" fill="#9a9a96"/>' +
      '<rect x="8" y="8" width="84" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="50" y="20" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">W 125 St</text>' +
      '<rect x="248" y="8" width="144" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="320" y="20" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Frederick Douglass Blvd</text>' +
      tag("TREACHEROUS 3", 20, 246, 24, GOLD, -4) + tag("MOE DEE", 270, 248, 24, RED, -6),
      sky("g2", "#7fb3e0", "#f6d9a6"));
  }

  /* 3. Harlem World, 116th & Lenox, Christmas 1981: the battle stage, two mics, spotlights sweeping, the crowd jumping */
  function battle() {
    let crowd = "";
    for (let i = 0; i < 22; i++) {
      const x = 8 + i * 18, h = 30 + (i * 13) % 14;
      crowd += '<g class="jmp' + (i % 2 ? " jmp2" : "") + '"><circle cx="' + x + '" cy="' + (238 - h) + '" r="7" fill="#2a2440"/><rect x="' + (x - 8) + '" y="' + (244 - h) + '" width="16" height="' + (h + 20) + '" rx="6" fill="#2a2440"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="#120a1c"/>' +
      '<g class="beam"><path d="M110 0l-40 170h80z" fill="' + GOLD + '" opacity=".18"/></g><g class="beam beam2"><path d="M290 0l-40 170h80z" fill="' + CYAN + '" opacity=".18"/></g>' +
      /* banner */
      '<rect x="90" y="22" width="220" height="40" rx="4" fill="' + RED + '" stroke="#000" stroke-width="2"/>' +
      '<text x="200" y="50" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#fff" letter-spacing="2">HARLEM WORLD</text>' +
      '<text x="200" y="78" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + GOLD + '" letter-spacing="3">THE BATTLE · CHRISTMAS 1981</text>' +
      /* turntables */
      '<rect x="150" y="128" width="100" height="22" rx="3" fill="#2b2b33"/><circle cx="174" cy="139" r="8" fill="#111" stroke="#555"/><circle cx="226" cy="139" r="8" fill="#111" stroke="#555"/>' +
      /* stage + two mic stands */
      '<rect x="20" y="150" width="360" height="22" fill="#3a2418"/><rect x="20" y="150" width="360" height="4" fill="' + GOLD + '"/>' +
      '<path d="M100 150v-46M300 150v-46" stroke="#c8ccd4" stroke-width="3"/><path d="M92 150h16M292 150h16" stroke="#c8ccd4" stroke-width="3"/>' +
      '<rect x="96" y="94" width="8" height="12" rx="4" fill="#555"/><rect x="296" y="94" width="8" height="12" rx="4" fill="#555"/>' +
      crowd,
      "");
  }

  /* 4. Album world, Knowledge Is King (1989): the gold throne and crown in front of the Harlem skyline, a white limo gliding past, spotlights sweeping */
  function rucker() {
    let city = "";
    [[0, 110, 44], [48, 80, 40], [92, 120, 36], [270, 100, 40], [314, 76, 46], [364, 116, 36]].forEach(b => {
      city += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (210 - b[1]) + '" fill="#1c1630"/>';
      for (let y = b[1] + 8; y < 200; y += 12) for (let x = b[0] + 6; x < b[0] + b[2] - 6; x += 10) city += '<rect x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((x + y) % 4 ? "#2a2440" : GOLD) + '"/>';
    });
    return svg(
      '<style>@keyframes limo{from{transform:translateX(-170px)}to{transform:translateX(480px)}}.limo{animation:limo 8s linear infinite}' +
      '@keyframes gl{0%,100%{opacity:.4}50%{opacity:1}}.gl{animation:gl 1.6s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(20) +
      '<path class="beam" d="M120 0l-20 200h40z" fill="#fff" opacity=".1"/><path class="beam beam2" d="M280 0l-20 200h40z" fill="#fff" opacity=".1"/>' + city +
      /* the throne */
      '<path d="M150 210V100q0 -34 50 -40q50 6 50 40v110z" fill="#7a1a2a" stroke="' + GOLD + '" stroke-width="5"/>' +
      '<path d="M140 210v-60h18v60zM242 210v-60h18v60z" fill="' + GOLD + '"/><rect x="158" y="160" width="84" height="24" fill="#5a1220" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<circle cx="150" cy="96" r="6" fill="' + GOLD + '"/><circle cx="250" cy="96" r="6" fill="' + GOLD + '"/>' +
      /* the crown resting on the seat */
      '<g class="jmp"><path d="M176 156l-4 -26 14 12 14 -20 14 20 14 -12 -4 26z" fill="' + GOLD + '" stroke="#8a6a10" stroke-width="2"/>' +
      '<circle class="gl" cx="200" cy="146" r="3" fill="' + RED + '"/><circle class="gl" cx="186" cy="150" r="2.5" fill="' + CYAN + '"/><circle class="gl" cx="214" cy="150" r="2.5" fill="' + CYAN + '"/></g>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11.5" fill="' + GOLD + '">KNOWLEDGE</text>' +
      '<text x="200" y="104" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="' + GOLD + '">IS KING</text>' +
      /* the street and the white limo */
      '<rect x="0" y="210" width="400" height="50" fill="#14111c"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="limo"><rect x="0" y="214" width="150" height="20" rx="6" fill="#f2f2f2"/><path d="M20 214l10 -10h90l10 10z" fill="#e6e6e6"/><rect x="34" y="206" width="80" height="8" fill="#2a3a52"/>' +
      '<circle cx="24" cy="236" r="6" fill="#111"/><circle cx="126" cy="236" r="6" fill="#111"/><circle cx="148" cy="222" r="2.5" fill="#fff6c2"/></g>' +
      tag("MOE DEE", 20, 196, 28, GOLD, -6) + tag("WILD WILD WEST", 262, 206, 15, CYAN, -4),
      sky("g4", "#0c0a1c", "#3a1a3a"));
  }

  /* 5. W 116 St and Lenox Av (Malcolm X Blvd): a brick wall with his name tagged, the street signs, the streetlight */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      "<g id=\"landmark-bd\"><style>@keyframes apkool_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apkool_a{animation:apkool_ch .8s steps(1) infinite}.apkool_b{animation:apkool_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apkool_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apkool_g{animation:apkool_gl 2.6s ease-in-out infinite}@keyframes apkool_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apkool_s{transform-box:fill-box;transform-origin:50% 100%;animation:apkool_sw 6s ease-in-out infinite}.apkool_s2{animation-delay:-3s}@keyframes apkool_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apkool_d{animation:apkool_dr 22s linear infinite}.apkool_d2{animation-delay:-11s}@keyframes apkool_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apkool_r{animation:apkool_rn .7s linear infinite}@keyframes apkool_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apkool_m{animation:apkool_mv 9s linear infinite}@keyframes apkool_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apkool_ml{animation:apkool_mvl 7s linear infinite}@keyframes apkool_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apkool_f{animation:apkool_fl 3.1s infinite}</style><rect x=\"70\" y=\"58.6\" width=\"33\" height=\"11.4\" fill=\"#1d1a24\"/><rect x=\"88\" y=\"62.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"81\" y=\"45.6\" width=\"10\" height=\"9.5\" fill=\"#1d1a24\"/><path d=\"M80 45.6l6 -5l6 5z\" fill=\"#1d1a24\"/><path d=\"M82 55.1v3.5M90 55.1v3.5\" stroke=\"#1d1a24\" stroke-width=\"1.2\"/><rect x=\"102\" y=\"63.5\" width=\"26\" height=\"6.5\" fill=\"#1d1a24\"/><rect x=\"127\" y=\"55.7\" width=\"29\" height=\"14.3\" fill=\"#1d1a24\"/><rect x=\"145\" y=\"65.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"136\" y=\"42.7\" width=\"10\" height=\"9.5\" fill=\"#1d1a24\"/><path d=\"M135 42.7l6 -5l6 5z\" fill=\"#1d1a24\"/><path d=\"M137 52.2v3.5M145 52.2v3.5\" stroke=\"#1d1a24\" stroke-width=\"1.2\"/><rect x=\"155\" y=\"64.8\" width=\"18\" height=\"5.2\" fill=\"#1d1a24\"/><rect x=\"172\" y=\"62.5\" width=\"17\" height=\"7.5\" fill=\"#1d1a24\"/><rect x=\"188\" y=\"65.5\" width=\"16\" height=\"4.5\" fill=\"#1d1a24\"/><rect x=\"203\" y=\"54.7\" width=\"27\" height=\"15.3\" fill=\"#1d1a24\"/><rect x=\"206\" y=\"64.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"221\" y=\"64.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"211\" y=\"41.7\" width=\"10\" height=\"9.5\" fill=\"#1d1a24\"/><path d=\"M210 41.7l6 -5l6 5z\" fill=\"#1d1a24\"/><path d=\"M212 51.2v3.5M220 51.2v3.5\" stroke=\"#1d1a24\" stroke-width=\"1.2\"/><rect x=\"229\" y=\"56.5\" width=\"32\" height=\"13.5\" fill=\"#1d1a24\"/><rect x=\"247\" y=\"60.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"260\" y=\"56.8\" width=\"26\" height=\"13.2\" fill=\"#1d1a24\"/><rect x=\"263\" y=\"60.8\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"273\" y=\"60.8\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"285\" y=\"56.1\" width=\"29\" height=\"13.9\" fill=\"#1d1a24\"/><rect x=\"288\" y=\"60.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"293\" y=\"60.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"298\" y=\"60.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"308\" y=\"60.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"313\" y=\"59.6\" width=\"29\" height=\"10.4\" fill=\"#1d1a24\"/><rect x=\"140\" y=\"22\" width=\"70\" height=\"48\" fill=\"#7a6248\"/><rect x=\"139\" y=\"20\" width=\"72\" height=\"3\" fill=\"#5a4634\"/><rect x=\"143.1\" y=\"25.8\" width=\"7.8\" height=\"6.7\" fill=\"#ffd98a\" rx=\"3.1\"/><rect x=\"157.1\" y=\"25.8\" width=\"7.8\" height=\"6.7\" fill=\"#2a2028\" rx=\"3.1\"/><rect x=\"171.1\" y=\"25.8\" width=\"7.8\" height=\"6.7\" fill=\"#2a2028\" rx=\"3.1\"/><rect x=\"185.1\" y=\"25.8\" width=\"7.8\" height=\"6.7\" fill=\"#2a2028\" rx=\"3.1\"/><rect x=\"199.1\" y=\"25.8\" width=\"7.8\" height=\"6.7\" fill=\"#ffd98a\" rx=\"3.1\"/><rect x=\"143.1\" y=\"36.4\" width=\"7.8\" height=\"6.7\" fill=\"#2a2028\" rx=\"3.1\"/><rect x=\"157.1\" y=\"36.4\" width=\"7.8\" height=\"6.7\" fill=\"#ffd98a\" rx=\"3.1\"/><rect x=\"171.1\" y=\"36.4\" width=\"7.8\" height=\"6.7\" fill=\"#2a2028\" rx=\"3.1\"/><rect x=\"185.1\" y=\"36.4\" width=\"7.8\" height=\"6.7\" fill=\"#2a2028\" rx=\"3.1\"/><rect x=\"199.1\" y=\"36.4\" width=\"7.8\" height=\"6.7\" fill=\"#2a2028\" rx=\"3.1\"/><g transform=\"translate(134 52)\"><rect class=\"apkool_g\" x=\"-4.2\" y=\"-3.5\" width=\"90.4\" height=\"22.4\" rx=\"5.6\" fill=\"#ffd27a\" opacity=\".35\"/><rect x=\"0\" y=\"0\" width=\"82\" height=\"14\" fill=\"#b81a24\"/><rect x=\"1.4\" y=\"2.2\" width=\"79.2\" height=\"9.5\" fill=\"#f7f1e3\"/><text x=\"41\" y=\"7\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"5\" fill=\"#d3202b\" letter-spacing=\"0.8\">APOLLO</text><circle class=\"apkool_b\" cx=\"1.4\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"1.4\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"4.2\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"4.2\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"7\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"7\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"9.8\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"9.8\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"12.6\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"12.6\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"15.4\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"15.4\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"18.2\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"18.2\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"21\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"21\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"23.8\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"23.8\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"26.6\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"26.6\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"29.4\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"29.4\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"32.2\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"32.2\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"35\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"35\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"37.8\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"37.8\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"40.6\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"40.6\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"43.4\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"43.4\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"46.2\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"46.2\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"49\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"49\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"51.8\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"51.8\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"54.6\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"54.6\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"57.4\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"57.4\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"60.2\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"60.2\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"63\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"63\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"65.8\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"65.8\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"68.6\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"68.6\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"71.4\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"71.4\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"74.2\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"74.2\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"77\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"77\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"79.8\" cy=\"1.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"79.8\" cy=\"12.9\" r=\"0.6\" fill=\"#ffe9a0\"/></g><g transform=\"translate(168 0)\"><rect class=\"apkool_g\" x=\"-4.2\" y=\"-3.6\" width=\"20.4\" height=\"59.2\" rx=\"6\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M2.4 0l3.6 -5.4l3.6 5.4z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"12\" height=\"52\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"0.8\"/><text x=\"6\" y=\"8.1\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.6\" fill=\"#fff\">A</text><text x=\"6\" y=\"16.4\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.6\" fill=\"#fff\">P</text><text x=\"6\" y=\"24.6\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.6\" fill=\"#fff\">O</text><text x=\"6\" y=\"32.9\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.6\" fill=\"#fff\">L</text><text x=\"6\" y=\"41.1\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.6\" fill=\"#fff\">L</text><text x=\"6\" y=\"49.4\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.6\" fill=\"#fff\">O</text><circle class=\"apkool_b\" cx=\"1.2\" cy=\"1.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"10.8\" cy=\"1.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"1.2\" cy=\"5.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"10.8\" cy=\"5.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"1.2\" cy=\"9.6\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"10.8\" cy=\"9.6\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"1.2\" cy=\"13.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"10.8\" cy=\"13.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"1.2\" cy=\"17.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"10.8\" cy=\"17.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"1.2\" cy=\"21.1\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"10.8\" cy=\"21.1\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"1.2\" cy=\"25\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"10.8\" cy=\"25\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"1.2\" cy=\"28.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"10.8\" cy=\"28.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"1.2\" cy=\"32.6\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"10.8\" cy=\"32.6\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"1.2\" cy=\"36.5\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"10.8\" cy=\"36.5\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"1.2\" cy=\"40.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"10.8\" cy=\"40.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"1.2\" cy=\"44.2\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"10.8\" cy=\"44.2\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"1.2\" cy=\"48\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_b\" cx=\"10.8\" cy=\"48\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"1.2\" cy=\"51.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apkool_a\" cx=\"10.8\" cy=\"51.8\" r=\"0.8\" fill=\"#ffe9a0\"/></g></g>" +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#5a3a30"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#6a463a"/>'; return b; })() +
      tag("KOOL MOE DEE", 30, 140, 27, GOLD, -7) + tag("KNOWLEDGE IS KING", 30, 196, 19, CYAN, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="86" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="99" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 116 St</text>' +
      '<rect x="256" y="108" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="121" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">Lenox Av</text>' +
      '<rect x="256" y="130" width="92" height="14" rx="2" fill="#7a4a1a" stroke="#fff" stroke-width="1"/>' +
      '<text x="302" y="140.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">Malcolm X Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("gc", "#140d1e", "#4a2a3a"));
  }

  window.SCENES = { train, apollo, battle, rucker, corner };
})();
