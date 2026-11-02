/* Harlem, Manhattan opening scenes for the Skizzy Mars game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bulb{animation:chase .8s infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes rise{0%{transform:translate(0,0)}50%{transform:translate(14px,-40px)}100%{transform:translate(0,-80px);opacity:0}}' +
    '.bal{animation:rise 7s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.7}}' +
    '.glow{animation:glow 3s ease-in-out infinite}' +
    '@keyframes twk{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.twk{animation:twk 1.4s infinite}.twk2{animation-delay:-.7s}' +
    '@keyframes walk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.walk{animation:walk 12s linear infinite}.walk2{animation-delay:-6s}' +
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
  const bullet = (x, y, letter, color) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const MARS = "#ff5a36", SUN = "#ffd166", SKY = "#7ec8e3";

  /* 1. 135 St on the B and C: the train in, the exit stair pointing to W 132 St & Frederick Douglass Blvd, a red balloon floating up the stairwell */
  function train() {
    const { svg, tag, T, bullet } = LM1;
    let tiles = ""; for (let y = 34; y < 150; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#00000014"/>';
    let steps = ""; for (let i = 0; i < 9; i++) steps += '<rect x="' + (274 + i * 10) + '" y="' + (196 - i * 15) + '" width="' + (126 - i * 10) + '" height="15" fill="' + (i % 2 ? "#8a8a84" : "#9a9a94") + '"/><rect x="' + (274 + i * 10) + '" y="' + (196 - i * 15) + '" width="' + (126 - i * 10) + '" height="2" fill="#eab308"/>';
    return svg(
      '<rect width="400" height="260" fill="#e9e3d2"/>' + tiles +
      '<rect x="0" y="22" width="400" height="12" fill="#2e6aa0"/><rect x="0" y="34" width="400" height="3" fill="#ffd166"/>' +
      '<rect x="20" y="44" width="180" height="28" rx="3" fill="#111"/><rect x="20" y="44" width="180" height="3" fill="#fff"/>' +
      T(32, 65, "135 St", 16, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) +
      bullet(158, 58, "B", "#ff6319", false, 10) + bullet(182, 58, "C", "#0039a6", false, 10) +
      '<g class="anim-train">' + LM1.subCar(-20, 86, 280, "#0039a6", bullet(214, 126, "C", "#0039a6", false, 9)) + '</g>' +
      '<rect x="0" y="146" width="400" height="8" fill="#eab308"/><rect x="0" y="154" width="400" height="106" fill="#8f8a80"/>' +
      /* the stairwell up to the street */
      '<rect x="264" y="20" width="136" height="186" fill="#2b2b2e"/>' + steps +
      '<rect x="264" y="20" width="136" height="36" fill="#cfe6ff" opacity=".25"/>' +
      '<path d="M270 200L392 66" stroke="#c9c2b0" stroke-width="3"/>' +
      '<rect x="272" y="168" width="124" height="28" rx="2" fill="#111"/>' +
      T(334, 180, "EXIT ↑ W 132 St &amp;", 8.5, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      T(334, 191, "Frederick Douglass Blvd", 8.5, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* the red balloon rising */
      '<g class="lm-rise"><g transform="translate(300 150)"><ellipse cx="0" cy="0" rx="13" ry="16" fill="#e2231a"/><ellipse cx="-4" cy="-6" rx="3" ry="5" fill="#fff" opacity=".45"/><path d="M0 16q-4 10 2 20t-2 22" stroke="#555" stroke-width="1.2" fill="none"/></g></g>' +
      tag("SKIZZY MARS", 20, 214, 36, "#ff5a36", -5) + tag("RED BALLOON", 30, 248, 22, "#ffd166", -3),
      "");
  }

  /* 2. Minton's Playhouse on W 118 St, the birthplace of bebop: the neon over the door in the old Hotel Cecil front */
  function apollo() {
    const { svg, sky, tag, T, stars, wins, fig, brickLines, plaque } = LM1;
    let notes = ""; [[150, "lm-rise"], [206, "lm-rise lm-d2"]].forEach(([x, c]) => notes += '<g class="' + c + '" style="animation-duration:4s"><text x="' + x + '" y="196" font-size="16" fill="#ffd166">♪</text></g>');
    return svg(
      '<rect width="400" height="260" fill="url(#sk2)"/>' + stars(18) +
      /* Hotel Cecil: brick, stone trim, windows */
      '<rect x="20" y="20" width="360" height="200" fill="#8a4e36"/>' + brickLines(20, 20, 360, 200, "#6e3a28", 8) +
      '<rect x="20" y="20" width="360" height="8" fill="#d8cdb6"/><rect x="20" y="104" width="360" height="5" fill="#d8cdb6"/>' +
      wins(40, 36, 9, 2, 38, 34, 22, 24, "#2a1d17", "#ffd98a") +
      T(200, 100, "HOTEL CECIL", 9, "#e8dcc4", { ls: 4 }) +
      /* the ground floor and the neon */
      '<rect x="20" y="120" width="360" height="100" fill="#1a1414"/>' +
      '<rect x="130" y="122" width="140" height="44" rx="6" fill="#120a0a" stroke="#ff5a36" stroke-width="2"/>' +
      T(200, 146, "MINTON'S", 22, "#ff8a6a", { cls: "lm-flk" }) +
      T(200, 160, "PLAYHOUSE", 10, "#7ec8e3", { f: "Barlow, Arial, sans-serif", w: 700, ls: 3, cls: "lm-flk lm-f2" }) +
      '<rect x="176" y="172" width="48" height="48" fill="#3a1a12"/><rect x="182" y="178" width="36" height="20" fill="#ffd98a" opacity=".7"/>' +
      '<rect x="40" y="176" width="110" height="36" fill="#ffd98a" opacity=".55"/><rect x="250" y="176" width="110" height="36" fill="#ffd98a" opacity=".55"/>' +
      notes + '<g class="lm-walk lm-w2">' + fig(60, 244, "#111", null, .9) + '</g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2a2e"/>' +
      plaque(8, 223, 156, "BIRTHPLACE OF BEBOP", "W 118 ST · HARLEM", "#3a0e08", "#ffd166") +
      tag("MARS", 280, 252, 28, "#ff5a36", -4),
      sky("sk2", "#0a0e22", "#2a2a4a"));
  }

  /* 3. Frederick Douglass Blvd's restaurant row: sidewalk cafes and string lights along the boulevard his W 132 St corner sits on */
  function ccny() {
    const { svg, sky, tag, T, stars, wins, fig, brickLines, blade } = LM1;
    let bulbs = ""; for (let x = 0; x <= 400; x += 16) { const y = 50 + 14 * Math.sin(Math.PI * ((x % 200) / 200)); bulbs += '<circle class="lm-blink' + (x % 32 ? " lm-k2" : "") + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="3" fill="' + ["#ffd166", "#ff5a36", "#7ec8e3"][x / 16 % 3] + '"/>'; }
    const front = (x, c, aw) => '<rect x="' + x + '" y="40" width="96" height="140" fill="' + c + '"/>' + brickLines(x, 40, 96, 100, "#00000022", 8) +
      wins(x + 10, 48, 3, 2, 28, 26, 18, 18, "#2a1d17", "#ffd98a") + '<rect x="' + (x + 6) + '" y="140" width="84" height="40" fill="#ffe0a0" opacity=".85"/>' +
      '<path d="M' + x + ' 124h96l-8 16H' + (x + 8) + 'z" fill="' + aw + '"/><path d="M' + x + ' 124h96" stroke="#fff" stroke-width="2" stroke-dasharray="8 8"/>';
    const table = (x, cls) => '<ellipse cx="' + x + '" cy="200" rx="14" ry="4" fill="#e8e2d2"/><rect x="' + (x - 1.5) + '" y="200" width="3" height="16" fill="#333"/>' +
      '<g class="' + cls + '"><circle cx="' + (x - 18) + '" cy="186" r="4" fill="#3a2a22"/><rect x="' + (x - 22) + '" y="190" width="8" height="18" fill="#7ec8e3"/><circle cx="' + (x + 18) + '" cy="186" r="4" fill="#3a2a22"/><rect x="' + (x + 14) + '" y="190" width="8" height="18" fill="#ff5a36"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sk3)"/>' + stars(10) +
      front(4, "#8a4e36", "#2a7a4a") + front(104, "#a0705a", "#c0392b") + front(204, "#7a5a4a", "#2e4a8a") + front(304, "#8a4e36", "#d4a020") +
      '<path d="M0 50Q100 78 200 50T400 50" fill="none" stroke="#222" stroke-width="1"/>' + bulbs +
      '<rect x="0" y="180" width="400" height="40" fill="#8f8a80"/>' + table(70, "lm-bob") + table(190, "lm-bob lm-b2") + table(310, "lm-bob lm-b3") +
      '<rect x="0" y="220" width="400" height="40" fill="#22252a"/>' + LM1.car("lm-car", 238, "#ffd166") +
      '<rect x="356" y="96" width="4" height="124" fill="#2a2a2a"/>' + blade(270, 92, 128, "Frederick Douglass Blvd").replace('font-size="11"', 'font-size="8.5"') +
      T(200, 18, "RESTAURANT ROW · FREDERICK DOUGLASS BLVD", 9, "#ffd166", { f: "Barlow, Arial, sans-serif", w: 700, ls: 1.5 }) +
      tag("FREE SKIZZY", 20, 254, 24, "#ff5a36", -3),
      sky("sk3", "#141a3a", "#4a3a6a"));
  }

  /* 4. The Red Balloon Project: a Harlem brownstone rooftop at dusk, wooden water towers, Mars glowing red, a red balloon floating up */
  function balloon() {
    const tower = (x, y) => '<rect x="' + (x + 4) + '" y="' + (y + 36) + '" width="3" height="16" fill="#3a2a20"/><rect x="' + (x + 27) + '" y="' + (y + 36) + '" width="3" height="16" fill="#3a2a20"/>' +
      '<rect x="' + x + '" y="' + y + '" width="34" height="38" rx="3" fill="#7a5236"/><path d="M' + x + ' ' + (y + 12) + 'h34M' + x + ' ' + (y + 26) + 'h34" stroke="#4a2e1c" stroke-width="2"/><path d="M' + (x - 2) + ' ' + y + 'l19-14 19 14z" fill="#4a2e1c"/>';
    let row = "";
    [[0, 130, 80, "#8a4a36"], [80, 118, 70, "#7a3e2e"], [150, 136, 90, "#94523a"], [240, 122, 76, "#7a3e2e"], [316, 132, 84, "#8a4a36"]].forEach(b => {
      row += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (260 - b[1]) + '" fill="' + b[3] + '"/><rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="6" fill="#3a1f18"/>';
      for (let x = b[0] + 10; x < b[0] + b[2] - 14; x += 22) for (let y = b[1] + 18; y < 240; y += 34) row += '<rect x="' + x + '" y="' + y + '" width="12" height="20" fill="' + ((x + y) % 3 ? "#ffd98a" : "#2a1f2a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' + stars(10) +
      '<circle cx="80" cy="56" r="30" fill="' + MARS + '" class="glow"/><circle cx="80" cy="56" r="22" fill="#e04a28"/><circle cx="72" cy="50" r="5" fill="#b8381c"/><circle cx="88" cy="64" r="4" fill="#b8381c"/>' +
      tower(110, 66) + tower(276, 72) + row +
      '<g class="bal"><path d="M300 150q-6 30 4 60" stroke="#ddd" stroke-width="1.5" fill="none"/><ellipse cx="300" cy="132" rx="16" ry="20" fill="#e3242b"/><path d="M296 152l4 4 4-4z" fill="#e3242b"/><ellipse cx="294" cy="124" rx="4" ry="6" fill="#ff8a8a"/></g>' +
      '<text x="200" y="28" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff" letter-spacing="3">THE RED BALLOON PROJECT</text>',
      sky("gb", "#2a2a6a", "#f08a5a"));
  }

  /* 5. W 132nd St and Frederick Douglass Blvd, the block he grew up on: a wall with his name tagged, the street signs */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      "<g id=\"landmark-bd\"><style>@keyframes apskiz_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apskiz_a{animation:apskiz_ch .8s steps(1) infinite}.apskiz_b{animation:apskiz_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apskiz_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apskiz_g{animation:apskiz_gl 2.6s ease-in-out infinite}@keyframes apskiz_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apskiz_s{transform-box:fill-box;transform-origin:50% 100%;animation:apskiz_sw 6s ease-in-out infinite}.apskiz_s2{animation-delay:-3s}@keyframes apskiz_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apskiz_d{animation:apskiz_dr 22s linear infinite}.apskiz_d2{animation-delay:-11s}@keyframes apskiz_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apskiz_r{animation:apskiz_rn .7s linear infinite}@keyframes apskiz_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apskiz_m{animation:apskiz_mv 9s linear infinite}@keyframes apskiz_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apskiz_ml{animation:apskiz_mvl 7s linear infinite}@keyframes apskiz_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apskiz_f{animation:apskiz_fl 3.1s infinite}</style><circle cx=\"200\" cy=\"44\" r=\"34\" fill=\"#fff1d6\"/><circle cx=\"188\" cy=\"36\" r=\"6\" fill=\"#efe0c0\"/><circle cx=\"214\" cy=\"54\" r=\"4\" fill=\"#efe0c0\"/><g transform=\"translate(192 8)\"><rect class=\"apskiz_g\" x=\"-4.9\" y=\"-4.2\" width=\"23.8\" height=\"72.4\" rx=\"7\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M2.8 0l4.2 -6.3l4.2 6.3z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"14\" height=\"64\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"1\"/><text x=\"7\" y=\"10\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">A</text><text x=\"7\" y=\"20.1\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">P</text><text x=\"7\" y=\"30.3\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">O</text><text x=\"7\" y=\"40.4\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">L</text><text x=\"7\" y=\"50.6\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">L</text><text x=\"7\" y=\"60.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">O</text><circle class=\"apskiz_b\" cx=\"1.4\" cy=\"2.2\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"12.6\" cy=\"2.2\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"1.4\" cy=\"6.7\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"12.6\" cy=\"6.7\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"1.4\" cy=\"11.2\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"12.6\" cy=\"11.2\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"1.4\" cy=\"15.7\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"12.6\" cy=\"15.7\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"1.4\" cy=\"20.2\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"12.6\" cy=\"20.2\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"1.4\" cy=\"24.6\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"12.6\" cy=\"24.6\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"1.4\" cy=\"29.1\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"12.6\" cy=\"29.1\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"1.4\" cy=\"33.6\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"12.6\" cy=\"33.6\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"1.4\" cy=\"38.1\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"12.6\" cy=\"38.1\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"1.4\" cy=\"42.6\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"12.6\" cy=\"42.6\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"1.4\" cy=\"47\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"12.6\" cy=\"47\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"1.4\" cy=\"51.5\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"12.6\" cy=\"51.5\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"1.4\" cy=\"56\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_b\" cx=\"12.6\" cy=\"56\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"1.4\" cy=\"60.5\" r=\"1\" fill=\"#ffe9a0\"/><circle class=\"apskiz_a\" cx=\"12.6\" cy=\"60.5\" r=\"1\" fill=\"#ffe9a0\"/></g><rect x=\"70\" y=\"57.2\" width=\"27\" height=\"12.8\" fill=\"#1d1a24\"/><rect x=\"73\" y=\"61.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"78\" y=\"61.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"96\" y=\"58.1\" width=\"22\" height=\"11.9\" fill=\"#1d1a24\"/><rect x=\"99\" y=\"62.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"109\" y=\"62.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"117\" y=\"59.8\" width=\"30\" height=\"10.2\" fill=\"#1d1a24\"/><rect x=\"130\" y=\"63.8\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"126.5\" y=\"46.8\" width=\"10\" height=\"9.5\" fill=\"#1d1a24\"/><path d=\"M125.5 46.8l6 -5l6 5z\" fill=\"#1d1a24\"/><path d=\"M127.5 56.3v3.5M135.5 56.3v3.5\" stroke=\"#1d1a24\" stroke-width=\"1.2\"/><rect x=\"146\" y=\"62.4\" width=\"36\" height=\"7.6\" fill=\"#1d1a24\"/><rect x=\"181\" y=\"61.2\" width=\"17\" height=\"8.8\" fill=\"#1d1a24\"/><rect x=\"184\" y=\"48.2\" width=\"10\" height=\"9.5\" fill=\"#1d1a24\"/><path d=\"M183 48.2l6 -5l6 5z\" fill=\"#1d1a24\"/><path d=\"M185 57.7v3.5M193 57.7v3.5\" stroke=\"#1d1a24\" stroke-width=\"1.2\"/><rect x=\"197\" y=\"58.1\" width=\"22\" height=\"11.9\" fill=\"#1d1a24\"/><rect x=\"210\" y=\"62.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"202.5\" y=\"45.1\" width=\"10\" height=\"9.5\" fill=\"#1d1a24\"/><path d=\"M201.5 45.1l6 -5l6 5z\" fill=\"#1d1a24\"/><path d=\"M203.5 54.6v3.5M211.5 54.6v3.5\" stroke=\"#1d1a24\" stroke-width=\"1.2\"/><rect x=\"218\" y=\"63.6\" width=\"28\" height=\"6.4\" fill=\"#1d1a24\"/><rect x=\"245\" y=\"62.5\" width=\"19\" height=\"7.5\" fill=\"#1d1a24\"/><rect x=\"263\" y=\"58.8\" width=\"24\" height=\"11.2\" fill=\"#1d1a24\"/><rect x=\"276\" y=\"62.8\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"286\" y=\"57.5\" width=\"33\" height=\"12.5\" fill=\"#1d1a24\"/><rect x=\"289\" y=\"61.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"294\" y=\"61.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"318\" y=\"61.9\" width=\"20\" height=\"8.1\" fill=\"#1d1a24\"/></g>" +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#4a3a3e"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#56444a"/>'; return b; })() +
      tag("SKIZZY MARS", 30, 140, 30, MARS, -7) + tag("FREE SKIZZY", 44, 196, 24, SKY, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="248" y="88" width="108" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 132 St</text>' +
      '<rect x="248" y="110" width="108" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">Frederick Douglass Bl</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="#f2c200"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#c49a00"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
      sky("gc", "#140d1e", "#3a2a4a"));
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

  window.SCENES = { train, apollo, ccny, balloon, corner };
})();
