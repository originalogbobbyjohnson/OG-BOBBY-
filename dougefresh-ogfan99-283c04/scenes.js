/* Harlem opening scenes for the Doug E. Fresh game: the Human Beat Box, the Get Fresh Crew, "it started off on Eighth Avenue",
   the Apollo stage, Harlem block parties. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.15}}' +
    '.ch{animation:chase .8s steps(1) infinite}.ch2{animation-delay:-.4s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-56px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}' +
    '.hop{animation:hop .7s ease-in-out infinite}.hop2{animation-delay:-.35s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.thump{transform-box:fill-box;transform-origin:center;animation:thump .45s ease-in-out infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.6s ease-in-out infinite}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,120px) rotate(300deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:center;animation:leaf 5s linear infinite}.leaf2{animation-delay:-2.5s}' +
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
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffcc33", RED = "#e4002b", TEAL = "#00b2a9", ACE = "#0039a6", BDF = "#ff6319";
  const boombox = (x, y, s) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="0" y="0" width="90" height="46" rx="6" fill="#1b1b1b" stroke="#888" stroke-width="2"/>' +
    '<circle class="thump" cx="22" cy="26" r="14" fill="#333" stroke="#aaa" stroke-width="2"/><circle class="thump" cx="68" cy="26" r="14" fill="#333" stroke="#aaa" stroke-width="2"/>' +
    '<rect x="38" y="8" width="14" height="8" fill="' + GOLD + '"/><path d="M20 0 q25 -16 50 0" stroke="#888" stroke-width="3" fill="none"/></g>';

  /* 1. The A pulling into 125 St on the Eighth Avenue line, underground, A C B D bullets */
  function train() {
    let tiles = "";
    for (let y = 0; y < 118; y += 12) for (let x = (y / 12) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="11" fill="#eeeae0"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let cols = "";
    for (let x = 20; x < 400; x += 120) cols += '<rect x="' + x + '" y="0" width="10" height="118" fill="#2c3e50"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc9bb"/>' + tiles +
      '<rect x="0" y="62" width="400" height="10" fill="#c99a2e"/><rect x="0" y="72" width="400" height="3" fill="#6a4a12"/>' + cols +
      '<rect x="60" y="16" width="290" height="36" rx="4" fill="#111"/><rect x="60" y="16" width="290" height="4" fill="#fff"/>' +
      '<text x="72" y="41" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">125 St</text>' +
      bullet(240, 35, "A", ACE) + bullet(266, 35, "C", ACE) + bullet(292, 35, "B", BDF) + bullet(318, 35, "D", BDF) +
      '<rect x="0" y="110" width="400" height="80" fill="#1a1a1a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + ACE + '"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' + bullet(296, 136, "A", ACE) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4740"/>' +
      tag("GET FRESH", 24, 238, 30, GOLD, -4) + tag("I-IGHT", 290, 240, 30, TEAL, -8));
  }

  /* 2. The Apollo on 125th: red vertical blade sign, marquee with chasing bulbs, light-brick facade */
  function apollo() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 8) bulbs += '<circle cx="' + x + '" cy="132" r="2.2" fill="#fff3b0" class="ch' + ((x / 8) % 2 ? " ch2" : "") + '"/><circle cx="' + x + '" cy="176" r="2.2" fill="#fff3b0" class="ch' + ((x / 8) % 2 ? "" : " ch2") + '"/>';
    let blade = "";
    "APOLLO".split("").forEach((c, i) => blade += '<text x="200" y="' + (42 + i * 14) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#fff" class="flk' + (i % 2 ? " flk2" : "") + '">' + c + '</text>');
    let wins = "";
    for (let x = 70; x < 340; x += 34) wins += '<rect x="' + x + '" y="30" width="18" height="24" fill="#2a2440"/><rect x="' + x + '" y="72" width="18" height="24" fill="#2a2440"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(16) +
      '<rect x="50" y="14" width="300" height="200" fill="#d8c7a0"/>' + wins +
      /* blade sign */
      '<rect x="188" y="26" width="24" height="96" rx="3" fill="' + RED + '" stroke="#fff" stroke-width="2"/>' + blade +
      /* marquee */
      '<rect x="90" y="126" width="220" height="56" fill="' + RED + '" stroke="#7a0016" stroke-width="2"/>' + bulbs +
      '<rect x="104" y="138" width="192" height="30" fill="#fff8e0"/>' +
      '<text x="200" y="151" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#111">TONIGHT</text>' +
      '<text x="200" y="165" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="' + RED + '">THE HUMAN BEAT BOX</text>' +
      /* doors */
      '<rect x="120" y="186" width="160" height="28" fill="#3a2a1a"/><path d="M150 186v28M180 186v28M210 186v28M240 186v28" stroke="#c9a24a" stroke-width="2"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#4a4a4e"/><rect x="0" y="214" width="400" height="4" fill="#8a8a8e"/>' +
      /* line of fans hopping */
      (function () { let f = ""; const c = [GOLD, TEAL, RED, "#fff", "#7b4bd6"]; for (let i = 0; i < 9; i++) f += '<g class="hop' + (i % 2 ? " hop2" : "") + '"><circle cx="' + (140 + i * 14) + '" cy="226" r="4.5" fill="#3a2a22"/><rect x="' + (135.5 + i * 14) + '" y="231" width="9" height="14" rx="3" fill="' + c[i % 5] + '"/></g>'; return f; })() +
      '<g class="car"><rect x="0" y="240" width="64" height="16" rx="5" fill="' + GOLD + '"/><circle cx="14" cy="256" r="5" fill="#111"/><circle cx="52" cy="256" r="5" fill="#111"/></g>',
      sky("g2", "#0e0a24", "#3a2a5a"));
  }

  /* 3. The Lenox Lounge on Lenox Av at 125th: the Art Deco front in red and black, the neon script over the door, the zebra stripes of the Zebra Room through the window */
  function block() {
    const { svg, sky, tag, T, stars, wins, fig, plaque } = LM1;
    let zebra = ""; for (let x = 252; x < 352; x += 12) zebra += '<path d="M' + x + ' 150q6 20 0 46" stroke="#f6f2e6" stroke-width="5" fill="none"/>';
    let deco = ""; for (let k = 0; k < 7; k++) deco += '<path d="M' + (40 + k * 8) + ' 120V96" stroke="#d8b25a" stroke-width="2"/>' + '<path d="M' + (304 + k * 8) + ' 120V96" stroke="#d8b25a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#df3)"/>' + stars(16) +
      /* the brownstone upstairs */
      '<rect x="10" y="14" width="380" height="80" fill="#6a4a3a"/>' + wins(30, 26, 8, 2, 46, 32, 22, 22, "#2a1d17", "#ffd98a") +
      /* the lounge front */
      '<rect x="10" y="92" width="380" height="128" fill="#a81c24"/><rect x="10" y="92" width="380" height="6" fill="#d8b25a"/>' +
      '<rect x="22" y="104" width="356" height="2" fill="#111"/>' + deco +
      '<rect x="110" y="102" width="180" height="40" rx="4" fill="#111" stroke="#d8b25a" stroke-width="2"/>' +
      '<text class="lm-flk" x="200" y="132" text-anchor="middle" font-family="Brush Script MT, cursive" font-style="italic" font-size="26" fill="#ff4f6a">Lenox Lounge</text>' +
      '<rect x="22" y="150" width="96" height="70" fill="#111"/><rect x="26" y="154" width="88" height="40" fill="#ffd98a" opacity=".55"/>' +
      '<rect x="160" y="150" width="70" height="70" fill="#1a0a0a"/><rect x="166" y="156" width="58" height="64" fill="#3a1414"/><circle cx="216" cy="190" r="2.5" fill="#d8b25a"/>' +
      '<rect x="246" y="146" width="112" height="54" fill="#111"/>' + zebra + '<rect x="246" y="146" width="112" height="54" fill="none" stroke="#d8b25a" stroke-width="2"/>' +
      T(302, 212, "THE ZEBRA ROOM", 8, "#d8b25a", { f: "Barlow, Arial, sans-serif", w: 700, ls: 2 }) +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2a2e"/>' +
      '<g class="lm-walk">' + fig(60, 248, "#111", null, .85) + '</g><g class="lm-walk lm-w2">' + fig(120, 250, "#1a1a1a", null, .85) + '</g>' +
      plaque(236, 222, 156, "LENOX LOUNGE", "LENOX AV · W 125 ST", "#111", "#ffcc33") +
      tag("I-IGHT", 150, 254, 22, "#ffcc33", -4),
      sky("df3", "#0a0e22", "#2a2440"));
  }

  /* 4. The Latin Quarter on Broadway at W 48th: the 1980s Times Square club where the rap shows ran, the bulb marquee chasing and the line out front */
  function tower() {
    const { svg, sky, tag, T, stars, wins, fig } = LM1;
    let bulbs = ""; for (let x = 52; x <= 348; x += 12) bulbs += '<circle class="lm-blink' + (x % 24 ? " lm-k2" : "") + '" cx="' + x + '" cy="98" r="2.5" fill="#fff2b0"/><circle class="lm-blink' + (x % 24 ? "" : " lm-k2") + '" cx="' + x + '" cy="146" r="2.5" fill="#fff2b0"/>';
    let line = ""; for (let i = 0; i < 8; i++) line += '<g class="lm-bob' + (i % 3 ? " lm-b" + (i % 3 + 1) : "") + '">' + fig(30 + i * 30, 238, ["#111", "#2a1a3a", "#1a2a3a"][i % 3], null, .9) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#df4)"/>' + stars(12) +
      /* Times Square towers and signs behind */
      '<rect x="0" y="10" width="70" height="90" fill="#1a1a2e"/><rect x="330" y="0" width="70" height="100" fill="#1a1a2e"/>' +
      '<rect x="8" y="20" width="54" height="30" fill="#e4002b" class="lm-flk"/><rect x="338" y="14" width="54" height="22" fill="#00b2a9" class="lm-flk lm-f2"/>' +
      '<rect x="338" y="44" width="54" height="30" fill="#ffcc33" class="lm-flk"/><rect x="8" y="58" width="54" height="22" fill="#7a4aff" class="lm-flk lm-f2"/>' +
      '<rect x="70" y="20" width="260" height="190" fill="#3a2a2a"/>' + wins(84, 30, 10, 2, 24, 22, 14, 14, "#2a1d17", "#ffd98a") +
      /* the marquee */
      '<path d="M40 92h320l-14 60H54z" fill="#111"/><rect x="40" y="92" width="320" height="58" fill="#1a1414" stroke="#ffcc33" stroke-width="2"/>' + bulbs +
      T(200, 126, "LATIN QUARTER", 26, "#ffcc33") +
      T(200, 142, "TONIGHT: RAP SHOW · GET FRESH CREW", 9, "#00b2a9", { f: "Barlow, Arial, sans-serif", w: 700, ls: 1 }) +
      '<rect x="160" y="160" width="80" height="50" fill="#ffd98a" opacity=".7"/><path d="M200 160v50" stroke="#3a2a2a" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2a30"/><rect x="0" y="210" width="400" height="4" fill="#4a4a50"/>' +
      '<path d="M20 212h340" stroke="#e4002b" stroke-width="3"/>' + line +
      '<rect x="296" y="174" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff"/>' + T(344, 187, "Broadway", 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      '<rect x="296" y="194" width="96" height="16" rx="2" fill="#1f7a3a" stroke="#fff"/>' + T(344, 206, "W 48 St", 10, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      tag("BEATBOX", 250, 254, 24, "#ffcc33", -4),
      sky("df4", "#0a0a1e", "#3a1a3a"));
  }

  /* 5. W 125 St and Frederick Douglass Bl (Eighth Avenue, where it started): green signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#7a4632"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(18) +
      "<g id=\"landmark-bd\"><style>@keyframes apdoug_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apdoug_a{animation:apdoug_ch .8s steps(1) infinite}.apdoug_b{animation:apdoug_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apdoug_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apdoug_g{animation:apdoug_gl 2.6s ease-in-out infinite}@keyframes apdoug_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apdoug_s{transform-box:fill-box;transform-origin:50% 100%;animation:apdoug_sw 6s ease-in-out infinite}.apdoug_s2{animation-delay:-3s}@keyframes apdoug_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apdoug_d{animation:apdoug_dr 22s linear infinite}.apdoug_d2{animation-delay:-11s}@keyframes apdoug_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apdoug_r{animation:apdoug_rn .7s linear infinite}@keyframes apdoug_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apdoug_m{animation:apdoug_mv 9s linear infinite}@keyframes apdoug_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apdoug_ml{animation:apdoug_mvl 7s linear infinite}@keyframes apdoug_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apdoug_f{animation:apdoug_fl 3.1s infinite}</style><rect x=\"166\" y=\"0\" width=\"168\" height=\"90\" fill=\"#7a6248\"/><rect x=\"165\" y=\"-2\" width=\"170\" height=\"3\" fill=\"#5a4634\"/><rect x=\"172.2\" y=\"7.2\" width=\"15.6\" height=\"12.6\" fill=\"#ffd98a\" rx=\"6.2\"/><rect x=\"200.2\" y=\"7.2\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"228.2\" y=\"7.2\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"256.2\" y=\"7.2\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"284.2\" y=\"7.2\" width=\"15.6\" height=\"12.6\" fill=\"#ffd98a\" rx=\"6.2\"/><rect x=\"312.2\" y=\"7.2\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"172.2\" y=\"27\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"200.2\" y=\"27\" width=\"15.6\" height=\"12.6\" fill=\"#ffd98a\" rx=\"6.2\"/><rect x=\"228.2\" y=\"27\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"256.2\" y=\"27\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"284.2\" y=\"27\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"312.2\" y=\"27\" width=\"15.6\" height=\"12.6\" fill=\"#ffd98a\" rx=\"6.2\"/><rect x=\"172.2\" y=\"46.8\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"200.2\" y=\"46.8\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"228.2\" y=\"46.8\" width=\"15.6\" height=\"12.6\" fill=\"#ffd98a\" rx=\"6.2\"/><rect x=\"256.2\" y=\"46.8\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"284.2\" y=\"46.8\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><rect x=\"312.2\" y=\"46.8\" width=\"15.6\" height=\"12.6\" fill=\"#2a2028\" rx=\"6.2\"/><g transform=\"translate(160 50)\"><rect class=\"apdoug_g\" x=\"-10.2\" y=\"-8.5\" width=\"200.4\" height=\"54.4\" rx=\"13.6\" fill=\"#ffd27a\" opacity=\".35\"/><rect x=\"0\" y=\"0\" width=\"180\" height=\"34\" fill=\"#b81a24\"/><rect x=\"3.4\" y=\"5.4\" width=\"173.2\" height=\"23.1\" fill=\"#f7f1e3\"/><text x=\"90\" y=\"17\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"12.2\" fill=\"#d3202b\" letter-spacing=\"2\">APOLLO</text><text x=\"90\" y=\"25.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.8\" fill=\"#1a1a1a\" letter-spacing=\"0.7\">AMATEUR NIGHT</text><circle class=\"apdoug_b\" cx=\"3.4\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"3.4\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"10.2\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"10.2\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"17\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"17\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"23.8\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"23.8\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"30.6\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"30.6\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"37.4\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"37.4\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"44.2\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"44.2\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"51\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"51\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"57.8\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"57.8\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"64.6\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"64.6\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"71.4\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"71.4\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"78.2\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"78.2\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"85\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"85\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"91.8\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"91.8\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"98.6\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"98.6\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"105.4\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"105.4\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"112.2\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"112.2\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"119\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"119\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"125.8\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"125.8\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"132.6\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"132.6\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"139.4\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"139.4\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"146.2\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"146.2\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"153\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"153\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"159.8\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"159.8\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"166.6\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"166.6\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"173.4\" cy=\"2.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"173.4\" cy=\"31.3\" r=\"1.5\" fill=\"#ffe9a0\"/></g><g transform=\"translate(236 -6) scale(0.6 1)\"><path d=\"M4.4 0l6.6 -9.9l6.6 9.9z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"22\" height=\"54\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"1.5\"/><text x=\"11\" y=\"8.4\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.9\" fill=\"#fff\">A</text><text x=\"11\" y=\"17\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.9\" fill=\"#fff\">P</text><text x=\"11\" y=\"25.6\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.9\" fill=\"#fff\">O</text><text x=\"11\" y=\"34.1\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.9\" fill=\"#fff\">L</text><text x=\"11\" y=\"42.7\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.9\" fill=\"#fff\">L</text><text x=\"11\" y=\"51.3\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.9\" fill=\"#fff\">O</text><circle class=\"apdoug_b\" cx=\"2.2\" cy=\"3.5\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"19.8\" cy=\"3.5\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"2.2\" cy=\"10.6\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"19.8\" cy=\"10.6\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"2.2\" cy=\"17.6\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"19.8\" cy=\"17.6\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"2.2\" cy=\"24.6\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"19.8\" cy=\"24.6\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"2.2\" cy=\"31.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"19.8\" cy=\"31.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"2.2\" cy=\"38.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"19.8\" cy=\"38.7\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"2.2\" cy=\"45.8\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_b\" cx=\"19.8\" cy=\"45.8\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"2.2\" cy=\"52.8\" r=\"1.5\" fill=\"#ffe9a0\"/><circle class=\"apdoug_a\" cx=\"19.8\" cy=\"52.8\" r=\"1.5\" fill=\"#ffe9a0\"/></g></g>" +
      '<rect x="0" y="90" width="400" height="126" fill="#5e3426"/>' + bricks +
      tag("DOUG E. FRESH", 70, 144, 32, GOLD, -6) + tag("GET FRESH CREW", 56, 200, 20, RED, -3) + tag("I-IGHT", 268, 204, 26, TEAL, -8) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><rect x="0" y="214" width="400" height="5" fill="#8a8a8e"/>' +
      '<rect x="356" y="74" width="5" height="142" fill="#2f3a33"/><path d="M358 74q-14 -12 -30 -6" stroke="#2f3a33" stroke-width="4" fill="none"/><ellipse cx="326" cy="70" rx="9" ry="4" fill="#ffe9a8" class="flk"/>' +
      '<rect x="28" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(2, 12, 130, "W 125 St") + sign(2, 34, 130, "Frederick Douglass Bl") + sign(2, 56, 60, "8 Av") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="' + TEAL + '"/><rect x="12" y="220" width="36" height="12" rx="4" fill="' + TEAL + '"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>' +
      boombox(240, 222, .4),
      sky("g5", "#0c1622", "#2a3a4a"));
  }

  /* LM1 helpers for the redrawn landmark rooms: same svg / sky / tag / bullet style as above, with their own little animations */
  const LM1 = (function () {
    const css = '<style>' +
      '@keyframes lmDrift{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lm-drift{animation:lmDrift 24s linear infinite}.lm-d2{animation-delay:-12s}' +
      '@keyframes lmCar{from{transform:translateX(-110px)}to{transform:translateX(510px)}}.lm-car{animation:lmCar 6s linear infinite}.lm-c2{animation-delay:-3s}' +
      '@keyframes lmCarL{from{transform:translateX(510px)}to{transform:translateX(-110px)}}.lm-carL{animation:lmCarL 7.5s linear infinite}' +
      '@keyframes lmFlick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmFlick 2.2s infinite}.lm-f2{animation-delay:-.8s}' +
      '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{transform-box:fill-box;transform-origin:50% 0;animation:lmSway 3s ease-in-out infinite}' +
      '.lm-swayb{transform-box:fill-box;transform-origin:50% 100%;animation:lmSway 3.6s ease-in-out infinite}.lm-s2{animation-delay:-1.5s}' +
      '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lm-bob{animation:lmBob 1.4s ease-in-out infinite}.lm-b2{animation-delay:-.7s}.lm-b3{animation-delay:-.35s}' +
      '@keyframes lmRise{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(14px,-150px);opacity:0}}.lm-rise{animation:lmRise 6s ease-in infinite}' +
      '@keyframes lmBlink{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blink{animation:lmBlink 1s steps(1) infinite}.lm-k2{animation-delay:-.5s}' +
      '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lmSpin 14s linear infinite}' +
      '@keyframes lmFly{from{transform:translate(-80px,30px)}to{transform:translate(480px,-30px)}}.lm-fly{animation:lmFly 9s linear infinite}' +
      '@keyframes lmLand{from{transform:translate(460px,-40px)}to{transform:translate(-120px,40px)}}.lm-land{animation:lmLand 10s linear infinite}' +
      '@keyframes lmRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lm-rip{animation:lmRip 3s ease-in-out infinite}.lm-r2{animation-delay:-1.5s}' +
      '@keyframes lmBoat{0%,100%{transform:translateX(0)}50%{transform:translateX(-60px)}}.lm-boat{animation:lmBoat 12s ease-in-out infinite}' +
      '@keyframes lmWalk{from{transform:translateX(0)}to{transform:translateX(70px)}}.lm-walk{animation:lmWalk 5s ease-in-out infinite alternate}.lm-w2{animation-delay:-2.5s}' +
      '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,250px) rotate(300deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}.lm-l2{animation-delay:-2s}.lm-l3{animation-delay:-4s}' +
      '@keyframes lmDrop{0%{transform:translateY(0)}100%{transform:translateY(118px)}}.lm-drop{animation:lmDrop 2.6s cubic-bezier(.5,0,.9,.6) infinite}' +
      '@keyframes lmBall{0%{transform:translate(0,0)}50%{transform:translate(-90px,-26px)}100%{transform:translate(-180px,0)}}.lm-ball{animation:lmBall 2.4s linear infinite}' +
      '@keyframes lmSwim{0%,100%{transform:translateX(0)}50%{transform:translateX(90px)}}.lm-swim{animation:lmSwim 7s ease-in-out infinite}.lm-sw2{animation-delay:-3.5s}' +
      '</style>';
    const svg = (inner, defs) =>
      '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
    const sky = (id, top, bottom) =>
      '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
    const tag = (txt, x, y, size, fill, rot) =>
      '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
      '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
    const bullet = (x, y, letter, color, dark, r) => { r = r || 11;
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36).toFixed(1) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    const T = (x, y, txt, size, fill, o) => { o = o || {};
      return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-family="' + (o.f || "Anton, Impact, sans-serif") + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') +
        (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + ' font-size="' + size + '" fill="' + fill + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + '>' + txt + '</text>'; };
    /* a name plaque: dark box, title + subtitle */
    const plaque = (x, y, w, title, sub, bg, accent) => {
      const ts = Math.min(12, (w - 14) / (title.length * .66)), ss = sub ? Math.min(8, (w - 12) / (sub.length * .62 + sub.length * 1.5 / 8)) : 0;
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (sub ? 34 : 22) + '" rx="4" fill="' + bg + '" stroke="' + accent + '" stroke-width="2"/>' +
        T(x + w / 2, y + 16, title, ts.toFixed(1), "#fff") + (sub ? T(x + w / 2, y + 28, sub, ss.toFixed(1), accent, { f: "Barlow, Arial, sans-serif", w: 700, ls: (ss * 1.5 / 8).toFixed(2) }) : ""); };
    /* green NYC street sign blade */
    const blade = (x, y, w, txt) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      T(x + w / 2, y + 13, txt, 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 });
    const car = (cls, y, c, w) => { w = w || 44;
      return '<g class="' + cls + '"><rect x="0" y="' + y + '" width="' + w + '" height="12" rx="4" fill="' + c + '"/><rect x="' + (w * .22) + '" y="' + (y - 7) + '" width="' + (w * .5) + '" height="8" rx="3" fill="' + c + '"/>' +
        '<rect x="' + (w * .27) + '" y="' + (y - 5) + '" width="' + (w * .4) + '" height="5" fill="#cfe6ff" opacity=".8"/><circle cx="' + (w * .22) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/><circle cx="' + (w * .78) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/>' +
        '<rect x="' + (w - 3) + '" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>'; };
    /* faceless figure (silhouette), optional sign held up */
    const fig = (x, y, c, sign, sc) => { sc = sc || 1;
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><circle cx="0" cy="-30" r="5" fill="' + c + '"/><path d="M-6 -24h12l2 16h-4l-1 14h-6l-1-14h-4z" fill="' + c + '"/>' +
        (sign ? '<path d="M5 -22l6-14" stroke="' + c + '" stroke-width="2.5"/><rect x="' + (13 - Math.max(30, sign[0].length * 4.6 + 6) / 2) + '" y="-58" width="' + Math.max(30, sign[0].length * 4.6 + 6) + '" height="20" fill="' + sign[1] + '" stroke="#222" stroke-width="1"/>' +
          T(13, -44, sign[0], 7, sign[2] || "#111", { f: "Barlow, Arial, sans-serif", w: 700 }) : "") + '</g>'; };
    const wins = (x0, y0, cols, rows, dx, dy, w, h, c, lit) => { let s = "";
      for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += '<rect x="' + (x0 + k * dx) + '" y="' + (y0 + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + ((lit && (k * 7 + r * 3) % 4 === 0) ? lit : c) + '"/>';
      return s; };
    const brickLines = (x, y, w, h, c, step) => { let s = ""; for (let yy = y + (step || 7); yy < y + h; yy += (step || 7)) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".6"/>'; return s; };
    const cloud = (cls, x, y, s, op) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || .8) + '"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff"/><ellipse cx="12" cy="-6" rx="14" ry="9" fill="#fff"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff"/></g></g>';
    const tree = (x, y, r, c, cls) => '<g class="' + (cls || "lm-swayb") + '"><rect x="' + (x - 2.5) + '" y="' + (y - 4) + '" width="5" height="' + (r + 6) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - r * .6) + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/></g>';
    const bird = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" fill="none" stroke="#222" stroke-width="1.6"/></g>';
    /* subway car side (R-type), for the station rooms */
    const subCar = (x, y, w, stripe, letters) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="4" fill="' + stripe + '"/>';
      for (let k = x + 14; k < x + w - 40; k += 44) s += '<rect x="' + k + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
      return s + '<rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="22" rx="3" fill="#1d2a3a"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 50) + '" r="3.5" fill="#fff6c2"/>' + (letters || ""); };
    return { svg, sky, tag, bullet, stars, T, plaque, blade, car, fig, wins, brickLines, cloud, tree, bird, subCar };
  })();

  window.SCENES = { train, apollo, block, tower, corner };
})();
