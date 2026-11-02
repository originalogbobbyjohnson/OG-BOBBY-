/* Harlem (Lenox Av / 135th St) opening scenes for the Mase game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}' +
    '.glow{animation:glow 3s ease-in-out infinite}' +
    '@keyframes fly{0%{transform:translate(0,0)}25%{transform:translate(60px,-18px)}50%{transform:translate(120px,4px)}75%{transform:translate(60px,20px)}100%{transform:translate(0,0)}}' +
    '.fly{animation:fly 9s ease-in-out infinite}.fy2{animation-delay:-3s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.2)}}' +
    '.flap{transform-box:fill-box;transform-origin:50% 50%;animation:flap .35s linear infinite}' +
    '@keyframes tile{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.tl{animation:tile 1.2s steps(2) infinite}.t2{animation-delay:.3s}.t3{animation-delay:.6s}.t4{animation-delay:.9s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 4s linear infinite}' +
    '@keyframes beam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:beam 4s ease-in-out infinite}.bm2{animation-delay:-2s}' +
    '@keyframes shine{0%{transform:translateX(-80px)}60%,100%{transform:translateX(120px)}}' +
    '.shn{animation:shine 2.6s ease-in-out infinite}.sh2{animation-delay:.6s}.sh3{animation-delay:1.2s}' +
    '@keyframes twk{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}' +
    '.twk{transform-box:fill-box;transform-origin:50% 50%;animation:twk 1.6s ease-in-out infinite}.tw2{animation-delay:.5s}.tw3{animation-delay:1s}' +
    '@keyframes carr{from{transform:translateX(-120px)}to{transform:translateX(480px)}}' +
    '.carr{animation:carr 5.5s linear infinite}' +
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
  const bird = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><path class="flap" d="M-7 0q3.5-4 7 0q3.5-4 7 0" fill="none" stroke="' + (c || "#fff") + '" stroke-width="2"/></g>';
  const RED = "#ee352e", PINK = "#ff6fb5", GOLD = "#f2c14e", SILVER = "#e6e9f0";
  const spark = (x, y, cls) => '<path class="twk ' + (cls || "") + '" d="M' + x + ' ' + (y - 6) + 'l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5z" fill="#fff"/>';

  /* 1. 135 St (2/3) at the uptown end of the platform: the stair up to the W 137th St side toward Mother A.M.E. Zion, the violet tile band, a shiny-suit poster on the wall, the 3 sliding in */
  function train() {
    let tiles = "";
    for (let y = 40; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h250" stroke="#dcd8cf" stroke-width=".8"/>';
    let band = "";
    for (let x = 0; x < 250; x += 12) band += '<rect x="' + x + '" y="40" width="6" height="6" fill="#6b3fa0"/><rect x="' + (x + 6) + '" y="40" width="6" height="6" fill="#8c63c2"/>';
    let windows = "";
    for (let x = 18; x < 200; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    let steps = "";
    for (let i = 0; i < 10; i++) steps += '<rect x="' + (256 + i * 14) + '" y="' + (182 - i * 13) + '" width="14" height="' + (13 + i * 13) + '" fill="' + (i % 2 ? "#6a6c70" : "#7a7c80") + '"/><rect x="' + (256 + i * 14) + '" y="' + (182 - i * 13) + '" width="14" height="2" fill="#eab308"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="250" height="30" fill="#26282b"/><rect x="0" y="30" width="250" height="10" fill="#f4f1ea"/>' +
      '<rect x="0" y="40" width="250" height="78" fill="#f2efe6"/>' + tiles + band +
      /* the stairwell: daylight, the church tower glimpsed at the top */
      '<rect x="250" y="0" width="150" height="196" fill="#9ab8d0"/>' +
      '<rect x="340" y="10" width="36" height="70" fill="#8a8a86"/><path d="M336 10l22 -10 22 10z" fill="#6a6a66"/><path d="M350 40v-14a8 8 0 0 1 16 0v14z" fill="#3a3a4a"/>' +
      steps + '<path d="M256 172L396 42" stroke="#c9ced6" stroke-width="4"/>' +
      '<rect x="252" y="4" width="84" height="28" rx="3" fill="#111"/>' +
      '<text x="258" y="16" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#fff">EXIT ↑ W 137 St</text><text x="258" y="27" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="' + GOLD + '">Mother A.M.E. Zion</text>' +
      /* station sign */
      '<rect x="12" y="54" width="130" height="34" rx="4" fill="#111"/><rect x="12" y="54" width="130" height="4" fill="#fff"/>' +
      '<text x="22" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">135 St</text>' + bullet(96, 72, "2", RED) + bullet(122, 72, "3", RED) +
      /* the shiny-suit poster: a silver suit on a hanger, sparkles, no face */
      '<g transform="rotate(2 200 80)"><rect x="160" y="48" width="80" height="66" fill="#0c0a12" stroke="' + SILVER + '" stroke-width="2"/>' +
      '<path d="M200 58l-4 6h8z" fill="' + SILVER + '"/><path d="M178 66l22 -2 22 2 6 36h-56z" fill="#cfd4dc"/><path d="M200 64l-8 20 8 18 8 -18z" fill="#9aa2ad"/>' +
      '<rect class="shn" x="178" y="66" width="10" height="36" fill="#fff" opacity=".5"/>' +
      '<text x="200" y="110" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="' + GOLD + '">HARLEM WORLD</text></g>' +
      spark(168, 54, "") + spark(234, 60, "tw2") +
      '<g class="flk"><rect x="40" y="12" width="90" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="250" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="-60" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="-60" y="164" width="300" height="4" fill="' + RED + '"/>' + windows +
        '<circle cx="232" cy="176" r="4" fill="#fff6c2"/>' + bullet(226, 144, "3", RED) +
      '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("MA$E", 30, 244, 34, SILVER, -6) + tag("WELCOME BACK", 170, 246, 24, PINK, -4));
  }

  /* 2. Mother A.M.E. Zion Church on W 137th St (George W. Foster Jr., 1925): grey neo-Gothic stone, the big pointed window glowing, the square tower, birds circling */
  function zion() {
    let stone = "";
    for (let y = 70; y < 214; y += 9) stone += '<path d="M70 ' + y + 'h260" stroke="#8d8a82" stroke-width=".8"/>';
    let lights = "";
    for (let i = 0; i < 5; i++) lights += '<path d="M' + (176 + i * 12) + ' 112v58" stroke="#7a4e9a" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gz)"/>' + stars(14) +
      /* brownstone neighbors */
      '<rect x="0" y="96" width="70" height="120" fill="#5a3c30"/><rect x="330" y="104" width="70" height="112" fill="#5a3c30"/>' +
      '<rect x="12" y="112" width="14" height="20" fill="#ffd98a"/><rect x="40" y="112" width="14" height="20" fill="#2a2f3a"/><rect x="346" y="120" width="14" height="20" fill="#2a2f3a"/><rect x="374" y="120" width="14" height="20" fill="#ffd98a"/>' +
      /* church front */
      '<rect x="70" y="70" width="260" height="146" fill="#a9a59b"/>' + stone +
      '<path d="M130 70l70-40 70 40z" fill="#a9a59b"/><path d="M130 70l70-40 70 40" fill="none" stroke="#7d7a72" stroke-width="3"/>' +
      /* square tower with battlements */
      '<rect x="270" y="30" width="56" height="186" fill="#9d998f"/>' +
      (function () { let b = ""; for (let x = 270; x < 326; x += 12) b += '<rect x="' + x + '" y="22" width="8" height="10" fill="#9d998f"/>'; return b; })() +
      '<path d="M288 60v-10a10 10 0 0 1 20 0v10z" fill="#3a2f45"/><path d="M288 120v-24a10 10 0 0 1 20 0v24z" fill="#3a2f45"/>' +
      /* the big pointed window */
      '<path class="glow" d="M168 176v-60a32 40 0 0 1 64 0v60z" fill="#f2c14e"/>' +
      '<path d="M168 176v-60a32 40 0 0 1 64 0v60z" fill="none" stroke="#6e6a62" stroke-width="4"/>' + lights +
      '<circle cx="200" cy="100" r="9" fill="#d65a8a" opacity=".8"/>' +
      /* doors */
      '<path d="M182 216v-26a18 18 0 0 1 36 0v26z" fill="#4a2a1e" stroke="#6e6a62" stroke-width="3"/><path d="M200 190v26" stroke="#2a1810" stroke-width="2"/>' +
      '<path d="M92 216v-20a12 12 0 0 1 24 0v20z" fill="#4a2a1e"/><path d="M110 150v-26a10 10 0 0 1 20 0v26z" fill="#3a2f45"/>' +
      /* steps + sidewalk */
      '<rect x="160" y="216" width="80" height="6" fill="#bdb8ad"/><rect x="0" y="222" width="400" height="38" fill="#4a4d52"/>' +
      /* plaque */
      '<rect x="82" y="78" width="80" height="20" rx="2" fill="#2a2f3a" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<text x="122" y="88" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="6.5" fill="' + GOLD + '">MOTHER A.M.E. ZION</text>' +
      '<text x="122" y="95" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-size="5.5" fill="#fff">SINCE 1796</text>' +
      '<g class="fly">' + bird(60, 40) + bird(76, 32) + '</g><g class="fly fy2">' + bird(120, 24) + '</g>',
      sky("gz", "#1a1838", "#5a4a7a"));
  }

  /* 3. Manhattan Center for Science and Mathematics, E 116th St and Pleasant Av by the FDR: the big red-brick school with the white cupola, the river behind, the ball he made his name with going through the hoop */
  function club() {
    let wins = "";
    for (let x = 40; x < 370; x += 24) { if (x > 172 && x < 228) continue; [120, 148].forEach(y => wins += '<rect x="' + x + '" y="' + y + '" width="12" height="18" fill="#fffbe8" stroke="#f2efe6" stroke-width="1.5"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="8" height="14" fill="' + ((x + y) % 3 ? "#2a3a4a" : "#ffe6a8") + '"/>'); }
    return svg(
      '<style>@keyframes shot{0%{transform:translate(0,0)}50%{transform:translate(-22px,-46px)}100%{transform:translate(-40px,-6px);opacity:1}}.shot{animation:shot 1.8s ease-in infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="60" cy="38" r="16" fill="#fff4c8"/>' +
      /* the East River and Randalls Island behind */
      '<rect x="0" y="90" width="400" height="20" fill="#3a6a8a"/><path d="M0 92h400" stroke="#9ecae8" stroke-width="1"/>' +
      /* the school */
      '<rect x="24" y="108" width="352" height="80" fill="#a8483a"/><rect x="24" y="104" width="352" height="6" fill="#f2efe6"/>' + wins +
      '<rect x="172" y="88" width="56" height="100" fill="#b0503e"/><path d="M168 92l32 -16 32 16z" fill="#f2efe6"/>' +
      /* the white cupola with the clock */
      '<rect x="186" y="52" width="28" height="26" fill="#f2efe6"/><path d="M182 52l18 -18 18 18z" fill="#4a6a5a"/><path d="M200 34v-10" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<circle cx="200" cy="64" r="7" fill="#fff" stroke="#2a2a2a" stroke-width="1.5"/><path d="M200 64v-5M200 64h4" stroke="#2a2a2a" stroke-width="1.5"/>' +
      '<path d="M190 188v-30a10 10 0 0 1 20 0v30z" fill="#3a2418" stroke="#f2efe6" stroke-width="2"/>' +
      '<rect x="144" y="190" width="112" height="14" rx="2" fill="#111"/><text x="200" y="200.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#fff">MANHATTAN CENTER</text>' +
      /* the outdoor court out front: hoop + ball */
      '<rect x="0" y="204" width="400" height="56" fill="#3a5a8a"/><path d="M0 232h400" stroke="#fff" stroke-width="1.5" opacity=".6"/>' +
      '<rect x="338" y="150" width="4" height="70" fill="#666"/><rect x="314" y="146" width="40" height="26" fill="#fff" stroke="#c33" stroke-width="2"/><path d="M320 172h22l-3 12h-16z" fill="none" stroke="#fff" stroke-width="1.5"/>' +
      '<g class="shot"><circle cx="372" cy="196" r="6" fill="#e8742a"/><path d="M366 196h12M372 190v12" stroke="#7a3a10" stroke-width="1"/></g>' +
      /* FDR traffic */
      '<g class="carr"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + PINK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="8" y="8" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="50" y="21" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 116 St</text>' +
      '<rect x="292" y="8" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="342" y="21" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Pleasant Av</text>' +
      tag("MA$E", 20, 232, 28, SILVER, -5),
      sky("g3", "#7fb3e0", "#f6e6c0"));
  }

  /* 4. The shiny-suit era: a 125th St tailor window lit up at night, silver, red and gold suits on the forms, the shine sweeping across, cars going by */
  function suits() {
    const suit = (x, c, d) =>
      '<g transform="translate(' + x + ' 0)"><path d="M0 70h8v-8h16v8h8" fill="none" stroke="#777" stroke-width="2"/><path d="M-2 76q18-10 36 0l6 70h-48z" fill="' + c + '"/>' +
      '<path d="M16 72l-8 28 8 6 8-6z" fill="#fff"/><path d="M14 80h4l1 20h-6z" fill="#111"/><path d="M-2 76l-10 60h8l8-48M34 76l10 60h-8l-8-48" fill="' + d + '"/>' +
      '<path d="M8 72l8 30 8-30" fill="none" stroke="' + d + '" stroke-width="2"/><circle cx="16" cy="114" r="1.5" fill="#222"/><circle cx="16" cy="126" r="1.5" fill="#222"/>' +
      '<rect x="12" y="146" width="8" height="30" fill="#555"/><rect x="2" y="174" width="28" height="4" fill="#555"/></g>';
    const car = (c) => '<rect x="0" y="6" width="64" height="16" rx="5" fill="' + c + '"/><path d="M12 6l8-8h22l8 8z" fill="' + c + '"/><path d="M15 6l6-6h8v6zM32 6v-6h9l6 6z" fill="#cfe6ff"/><circle cx="14" cy="22" r="5" fill="#111"/><circle cx="50" cy="22" r="5" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#151018"/>' +
      '<rect x="0" y="0" width="400" height="44" fill="#4a3a35"/>' +
      (function () { let b = ""; for (let y = 2; y < 44; y += 10) for (let x = (y / 10) % 2 ? -10 : 4; x < 400; x += 28) b += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#5a463f"/>'; return b; })() +
      /* awning */
      (function () { let a = ""; for (let i = 0; i < 20; i++) a += '<path d="M' + (i * 20) + ' 44h20v18q-10 6-20 0z" fill="' + (i % 2 ? "#1a1a1a" : PINK) + '"/>'; return a; })() +
      '<text x="200" y="38" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="4" textLength="220" lengthAdjust="spacingAndGlyphs" fill="' + SILVER + '">125TH ST TAILOR</text>' +
      /* window */
      '<rect x="20" y="66" width="360" height="140" fill="#2a2235" stroke="#0e0a12" stroke-width="6"/>' +
      '<rect x="23" y="69" width="354" height="134" fill="#3a2f4a" class="glow"/>' +
      suit(64, "#cfd5de", "#a7afbb") + suit(184, "#d62e3a", "#9e1c26") + suit(304, GOLD, "#b88a1e") +
      /* the shine sweep */
      '<g class="shn"><path d="M40 70l20 0-40 134h-20z" fill="#fff" opacity=".18"/></g><g class="shn sh2"><path d="M160 70l20 0-40 134h-20z" fill="#fff" opacity=".18"/></g><g class="shn sh3"><path d="M280 70l20 0-40 134h-20z" fill="#fff" opacity=".18"/></g>' +
      spark(70, 100) + spark(214, 120, "tw2") + spark(330, 96, "tw3") + spark(120, 150, "tw3") + spark(280, 160) +
      /* sidewalk + street */
      '<rect x="0" y="206" width="400" height="16" fill="#6e6b66"/><rect x="0" y="222" width="400" height="38" fill="#1c1e22"/>' +
      '<g transform="translate(0 224)"><g class="carr">' + car("#111") + '</g></g>',
      "");
  }

  /* 5. Malcolm X Blvd (Lenox Av) and W 135 St, up the stairs from the 2 and 3: the green street signs, the subway globe, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      "<g id=\"landmark-bd\"><style>@keyframes apmase_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apmase_a{animation:apmase_ch .8s steps(1) infinite}.apmase_b{animation:apmase_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apmase_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apmase_g{animation:apmase_gl 2.6s ease-in-out infinite}@keyframes apmase_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apmase_s{transform-box:fill-box;transform-origin:50% 100%;animation:apmase_sw 6s ease-in-out infinite}.apmase_s2{animation-delay:-3s}@keyframes apmase_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apmase_d{animation:apmase_dr 22s linear infinite}.apmase_d2{animation-delay:-11s}@keyframes apmase_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apmase_r{animation:apmase_rn .7s linear infinite}@keyframes apmase_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apmase_m{animation:apmase_mv 9s linear infinite}@keyframes apmase_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apmase_ml{animation:apmase_mvl 7s linear infinite}@keyframes apmase_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apmase_f{animation:apmase_fl 3.1s infinite}</style><rect x=\"0\" y=\"44.9\" width=\"17\" height=\"25.1\" fill=\"#1b1e2c\"/><rect x=\"16\" y=\"47.6\" width=\"28\" height=\"22.4\" fill=\"#1b1e2c\"/><rect x=\"34\" y=\"57.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"43\" y=\"40.6\" width=\"20\" height=\"29.4\" fill=\"#1b1e2c\"/><rect x=\"51\" y=\"44.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"51\" y=\"56.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"62\" y=\"43.5\" width=\"23\" height=\"26.5\" fill=\"#1b1e2c\"/><rect x=\"75\" y=\"47.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"65\" y=\"59.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"70\" y=\"59.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"68\" y=\"30.5\" width=\"10\" height=\"9.5\" fill=\"#1b1e2c\"/><path d=\"M67 30.5l6 -5l6 5z\" fill=\"#1b1e2c\"/><path d=\"M69 40v3.5M77 40v3.5\" stroke=\"#1b1e2c\" stroke-width=\"1.2\"/><rect x=\"84\" y=\"41\" width=\"16\" height=\"29\" fill=\"#1b1e2c\"/><rect x=\"92\" y=\"57\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"99\" y=\"47.2\" width=\"19\" height=\"22.8\" fill=\"#1b1e2c\"/><rect x=\"112\" y=\"51.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"102\" y=\"57.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"107\" y=\"57.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"112\" y=\"57.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"117\" y=\"54\" width=\"25\" height=\"16\" fill=\"#1b1e2c\"/><rect x=\"124\" y=\"41\" width=\"10\" height=\"9.5\" fill=\"#1b1e2c\"/><path d=\"M123 41l6 -5l6 5z\" fill=\"#1b1e2c\"/><path d=\"M125 50.5v3.5M133 50.5v3.5\" stroke=\"#1b1e2c\" stroke-width=\"1.2\"/><rect x=\"141\" y=\"44.9\" width=\"20\" height=\"25.1\" fill=\"#1b1e2c\"/><rect x=\"160\" y=\"43.3\" width=\"24\" height=\"26.7\" fill=\"#1b1e2c\"/><rect x=\"168\" y=\"59.3\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"163\" y=\"65.3\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"168\" y=\"65.3\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"183\" y=\"59.6\" width=\"21\" height=\"10.4\" fill=\"#1b1e2c\"/><rect x=\"186\" y=\"63.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"203\" y=\"43.7\" width=\"33\" height=\"26.3\" fill=\"#1b1e2c\"/><rect x=\"211\" y=\"47.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"211\" y=\"53.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"221\" y=\"59.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"214\" y=\"30.7\" width=\"10\" height=\"9.5\" fill=\"#1b1e2c\"/><path d=\"M213 30.7l6 -5l6 5z\" fill=\"#1b1e2c\"/><path d=\"M215 40.2v3.5M223 40.2v3.5\" stroke=\"#1b1e2c\" stroke-width=\"1.2\"/><rect x=\"235\" y=\"60\" width=\"18\" height=\"10\" fill=\"#1b1e2c\"/><rect x=\"243\" y=\"64\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"238.5\" y=\"47\" width=\"10\" height=\"9.5\" fill=\"#1b1e2c\"/><path d=\"M237.5 47l6 -5l6 5z\" fill=\"#1b1e2c\"/><path d=\"M239.5 56.5v3.5M247.5 56.5v3.5\" stroke=\"#1b1e2c\" stroke-width=\"1.2\"/><rect x=\"252\" y=\"48.7\" width=\"30\" height=\"21.3\" fill=\"#1b1e2c\"/><rect x=\"275\" y=\"52.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"275\" y=\"58.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"275\" y=\"64.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"261.5\" y=\"35.7\" width=\"10\" height=\"9.5\" fill=\"#1b1e2c\"/><path d=\"M260.5 35.7l6 -5l6 5z\" fill=\"#1b1e2c\"/><path d=\"M262.5 45.2v3.5M270.5 45.2v3.5\" stroke=\"#1b1e2c\" stroke-width=\"1.2\"/><g transform=\"translate(150 2) scale(0.5 1)\"><rect class=\"apmase_g\" x=\"-6.3\" y=\"-5.4\" width=\"30.6\" height=\"74.8\" rx=\"9\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M3.6 0l5.4 -8.1l5.4 8.1z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"18\" height=\"64\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"1.3\"/><text x=\"9\" y=\"10\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">A</text><text x=\"9\" y=\"20.1\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">P</text><text x=\"9\" y=\"30.3\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">O</text><text x=\"9\" y=\"40.4\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">L</text><text x=\"9\" y=\"50.6\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">L</text><text x=\"9\" y=\"60.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9.3\" fill=\"#fff\">O</text><circle class=\"apmase_b\" cx=\"1.8\" cy=\"2.9\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"16.2\" cy=\"2.9\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"1.8\" cy=\"8.6\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"16.2\" cy=\"8.6\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"1.8\" cy=\"14.4\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"16.2\" cy=\"14.4\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"1.8\" cy=\"20.2\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"16.2\" cy=\"20.2\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"1.8\" cy=\"25.9\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"16.2\" cy=\"25.9\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"1.8\" cy=\"31.7\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"16.2\" cy=\"31.7\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"1.8\" cy=\"37.4\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"16.2\" cy=\"37.4\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"1.8\" cy=\"43.2\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"16.2\" cy=\"43.2\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"1.8\" cy=\"49\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"16.2\" cy=\"49\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"1.8\" cy=\"54.7\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_a\" cx=\"16.2\" cy=\"54.7\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"1.8\" cy=\"60.5\" r=\"1.3\" fill=\"#ffe9a0\"/><circle class=\"apmase_b\" cx=\"16.2\" cy=\"60.5\" r=\"1.3\" fill=\"#ffe9a0\"/></g></g>" +
      /* Lenox Terrace towers behind */
      '<rect x="270" y="20" width="60" height="200" fill="#5a3a30"/><rect x="340" y="40" width="60" height="180" fill="#4e332a"/>' +
      (function () { let w = ""; for (let y = 30; y < 210; y += 16) for (let x = 278; x < 400; x += 14) if (x < 326 || x > 344) w += '<rect x="' + x + '" y="' + (x > 340 && y < 46 ? 999 : y) + '" width="7" height="8" fill="' + ((x + y) % 3 ? "#2a2f3a" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3f47"/>' +
      tag("MA$E", 40, 146, 46, SILVER, -7) + tag("HARLEM WORLD", 36, 196, 24, PINK, -3) +
      /* subway globe + signs */
      '<rect x="262" y="120" width="5" height="100" fill="#1d2329"/><circle class="flk" cx="264.5" cy="114" r="9" fill="#3fbf5f"/>' +
      '<rect x="270" y="84" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="318" y="97" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">Malcolm X Blvd</text>' +
      '<rect x="280" y="106" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="318" y="119" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 135 St</text>' +
      '<rect x="306" y="124" width="4" height="96" fill="#1d2329"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1b2e", "#3a2a52"));
  }

  window.SCENES = { train, zion, club, suits, corner };
})();
