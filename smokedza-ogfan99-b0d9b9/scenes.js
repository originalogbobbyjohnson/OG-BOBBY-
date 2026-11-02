/* Harlem opening scenes for Smoke DZA's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes sail{from{transform:translateX(-90px)}to{transform:translateX(470px)}}' +
    '.sail{animation:sail 18s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob 1.4s ease-in-out infinite}.bob2{animation-delay:-.7s}' +
    '@keyframes spin{from{transform:translateX(0)}to{transform:translateX(-120px)}}' +
    '.ride{animation:spin 4s linear infinite}' +
    '@keyframes buzz{0%{transform:translate(0,0)}25%{transform:translate(14px,-10px)}50%{transform:translate(26px,4px)}75%{transform:translate(10px,12px)}100%{transform:translate(0,0)}}' +
    '.bee{animation:buzz 2.4s ease-in-out infinite}.b2{animation-delay:-.6s;animation-duration:2s}.b3{animation-delay:-1.2s;animation-duration:2.8s}.b4{animation-delay:-1.8s}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-12deg)}}' +
    '.flag{animation:wave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{animation:drip 3s ease-out infinite;transform-box:fill-box;transform-origin:top}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GREEN = "#7cf29a", PURPLE = "#b07cff", GOLD = "#ffd34d";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, t, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="14" fill="' + (tc || "#fff") + '">' + t + '</text>';
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + mortar + '"/>'; for (let yy = y + 1; yy < y + h - 2; yy += 8) for (let xx = x + (((yy - y) / 8) % 2 ? -6 : 0); xx < x + w; xx += 16) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(14, x + w - Math.max(x, xx)) + '" height="6" fill="' + base + '"/>'; return b; };

  /* 1. 145 St on the 3 at Lenox Av: up top the green globes, the Lenox Av sign pointing south to W 119 St, the 369th Regiment Armory down the avenue; below, the 3 pulling in */
  function station() {
    const { svg, sky, tag, T, bullet, wins, brickLines, stars } = LM1;
    let crenel = ""; for (let x = 246; x < 380; x += 8) crenel += '<rect x="' + x + '" y="40" width="5" height="6" fill="#8e3a26"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sd1)"/>' + stars(12) +
      /* the 369th Regiment Armory, Art Deco brick, down the avenue */
      '<rect x="246" y="46" width="134" height="72" fill="#9a4029"/>' + brickLines(246, 46, 134, 72, "#7e3220", 6) + crenel +
      '<rect x="294" y="24" width="38" height="94" fill="#a8452c"/>' + brickLines(294, 24, 38, 94, "#7e3220", 6) + '<rect x="290" y="24" width="46" height="4" fill="#d6c7a8"/>' +
      [256, 274, 340, 358].map(x => '<rect x="' + x + '" y="60" width="6" height="40" fill="#2a1410"/>').join("") +
      '<rect x="300" y="42" width="26" height="10" fill="#d6c7a8"/>' + T(313, 50, "369TH", 7, "#5a2a1a") +
      /* Lenox Av storefronts on the left */
      '<rect x="0" y="40" width="130" height="78" fill="#6a4a3a"/>' + wins(8, 48, 6, 3, 20, 20, 10, 12, "#2a1d17", "#ffd98a") +
      /* street level + the entrance */
      '<rect x="0" y="118" width="400" height="18" fill="#2c2c32"/>' +
      '<rect x="146" y="70" width="4" height="58" fill="#1a3a2a"/><circle class="lm-flk" cx="148" cy="66" r="7" fill="#7cf29a"/>' +
      '<rect x="226" y="70" width="4" height="58" fill="#1a3a2a"/><circle class="lm-flk lm-f2" cx="228" cy="66" r="7" fill="#7cf29a"/>' +
      '<rect x="146" y="88" width="84" height="22" rx="2" fill="#111"/>' + T(160, 104, "145 St", 12, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) + bullet(214, 99, "3", "#ee352e", false, 8) +
      '<rect x="150" y="110" width="76" height="8" fill="#1d1d22"/>' +
      '<rect x="20" y="96" width="5" height="22" fill="#4a4a4a"/><rect x="8" y="78" width="120" height="18" rx="2" fill="#1f7a3a" stroke="#fff"/>' + T(68, 91, "Lenox Av ↓ W 119 St", 9.5, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* the platform below */
      '<rect x="0" y="136" width="400" height="8" fill="#6a5a4a"/><rect x="0" y="144" width="400" height="116" fill="#e2dccb"/>' +
      '<rect x="0" y="150" width="400" height="8" fill="#ee352e"/>' +
      '<g class="anim-train">' + LM1.subCar(-20, 164, 320, "#ee352e", bullet(270, 204, "3", "#ee352e", false, 9)) + '</g>' +
      '<rect x="0" y="224" width="400" height="6" fill="#eab308"/><rect x="0" y="230" width="400" height="30" fill="#8f8a80"/>' +
      tag("RFC", 318, 206, 30, "#ffd34d", -6) + tag("SMOKE DZA", 14, 256, 26, "#7cf29a", -3) + tag("GEORGE KUSH", 220, 256, 20, "#b07cff", -3),
      sky("sd1", "#0c1430", "#3a3a5a"));
  }

  /* 2. The 369th Regiment Armory on Fifth Av at 142nd: dark red brick Art Deco, the tall center tower with its ribbed piers, a flag flying */
  function armory() {
    let piers = "";
    for (let x = 166; x <= 228; x += 12) piers += '<rect x="' + x + '" y="40" width="5" height="130" fill="#6a2418"/>';
    let side = "";
    [[30, 110], [260, 110]].forEach(s => { for (let x = s[0] + 10; x < s[0] + s[1] - 8; x += 20) side += '<rect x="' + x + '" y="112" width="8" height="40" fill="#3a1a14"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* the drill shed roof behind */
      '<path d="M20 100q180-50 360 0v12H20z" fill="#5a5a60"/>' +
      brick(30, 96, 110, 80, "#8a3424", "#5e2216") + brick(260, 96, 110, 80, "#8a3424", "#5e2216") + side +
      '<rect x="30" y="92" width="110" height="6" fill="#5e2216"/><rect x="260" y="92" width="110" height="6" fill="#5e2216"/>' +
      /* the tower */
      brick(150, 30, 100, 146, "#8a3424", "#5e2216") + piers +
      '<path d="M150 30l10-10h80l10 10z" fill="#5e2216"/><rect x="176" y="12" width="48" height="10" fill="#6a2418"/>' +
      '<path d="M182 176v-46a18 18 0 0 1 36 0v46z" fill="#2a1410" stroke="#c9b48a" stroke-width="3"/>' +
      '<rect x="178" y="92" width="44" height="14" fill="#5e2216"/><text x="200" y="103" text-anchor="middle" ' + FONT + ' font-size="9" fill="#e6dccb">369TH</text>' +
      '<path d="M200 12v-10" stroke="#ddd" stroke-width="2"/><path class="flag" d="M201 2h18v9h-18z" fill="#2a5aa8"/>' +
      '<rect x="0" y="176" width="400" height="12" fill="#bdb6a6"/><rect x="0" y="188" width="400" height="72" fill="#2a2a2e"/>' +
      '<g class="sail"><rect x="0" y="196" width="46" height="18" rx="4" fill="#ffd34d"/><circle cx="10" cy="216" r="5" fill="#111"/><circle cx="36" cy="216" r="5" fill="#111"/></g>' +
      tag("FIFTH AV", 18, 248, 26, GREEN, -3),
      sky("g2", "#7aa8d8", "#f2d9b0"));
  }

  /* 3. Ringside: a wrestling ring under the lights, the crowd flashing, a high-flyer coming off the top rope */
  function ringside() {
    let crowd = "";
    for (let x = 4; x < 400; x += 10) crowd += '<circle cx="' + x + '" cy="' + (96 + (x * 7) % 14) + '" r="4" fill="#2a2440"/>';
    let flashes = "";
    [[40, 92], [120, 100], [260, 94], [350, 102]].forEach((f, i) => flashes += '<circle class="flk' + (i % 2 ? " flk2" : "") + '" cx="' + f[0] + '" cy="' + f[1] + '" r="3" fill="#fff"/>');
    return svg(
      '<rect width="400" height="260" fill="#0c0a16"/>' +
      '<g opacity=".2"><path d="M120 0l-40 200h80z" fill="#fff8d6"/><path d="M280 0l-40 200h80z" fill="#fff8d6"/></g>' +
      crowd + flashes +
      /* ring apron and mat */
      '<path d="M60 150h280l30 40H30z" fill="#e8e4dc"/><rect x="30" y="190" width="340" height="40" fill="' + PURPLE + '"/>' +
      '<text x="200" y="216" text-anchor="middle" ' + FONT + ' font-size="14" fill="#fff">RINGSIDE</text>' +
      /* posts and ropes */
      '<rect x="56" y="106" width="8" height="48" fill="#cfcfcf"/><rect x="336" y="106" width="8" height="48" fill="#cfcfcf"/>' +
      '<rect x="26" y="140" width="8" height="54" fill="#cfcfcf"/><rect x="366" y="140" width="8" height="54" fill="#cfcfcf"/>' +
      '<path d="M60 112h280M60 124h280M60 136h280" stroke="#e0263a" stroke-width="3"/>' +
      '<path d="M30 148h340M30 162h340M30 176h340" stroke="#e0263a" stroke-width="3"/>' +
      /* the high-flyer */
      '<g class="bob"><g transform="translate(300 60) rotate(-20)"><circle cx="0" cy="0" r="7" fill="#7a4a2a"/><rect x="-6" y="7" width="12" height="20" rx="3" fill="#111"/>' +
      '<path d="M-6 12l-16-10M6 12l16-10" stroke="#7a4a2a" stroke-width="4" stroke-linecap="round"/><path d="M-3 27l-6 16M3 27l6 16" stroke="#111" stroke-width="5" stroke-linecap="round"/></g></g>' +
      tag("BELL TO BELL", 250, 254, 20, GREEN, -3),
      "");
  }

  /* 4. Homegrown: a Harlem community garden behind the iron fence, sunflowers and tomato vines, the little casita, a watering can going */
  function garden() {
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 196v-34l2-4 2 4v34" stroke="#1d1d1d" stroke-width="2" fill="none"/>';
    let sun = "";
    [[60, 104], [96, 92], [300, 98], [340, 110]].forEach((f, i) => sun += '<path d="M' + f[0] + ' 196V' + f[1] + '" stroke="#3d7a2c" stroke-width="3"/><g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + f[0] + '" cy="' + f[1] + '" r="12" fill="#ffcf2a"/><circle cx="' + f[0] + '" cy="' + f[1] + '" r="5" fill="#6a3a1a"/></g>');
    let drops = "";
    for (let i = 0; i < 4; i++) drops += '<circle class="flk' + (i % 2 ? " flk2" : "") + '" cx="' + (218 + i * 6) + '" cy="' + (150 + i * 8) + '" r="2" fill="#9ad8ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* brownstones behind */
      '<rect x="0" y="30" width="130" height="130" fill="#7a4a36"/><rect x="270" y="20" width="130" height="140" fill="#8a5a42"/>' +
      (function () { let w = ""; for (let y = 44; y < 150; y += 28) { [16, 50, 84].forEach(x => w += '<rect x="' + x + '" y="' + y + '" width="18" height="18" fill="#ffe7a8" opacity=".85"/>'); [286, 320, 354].forEach(x => w += '<rect x="' + x + '" y="' + (y - 8) + '" width="18" height="18" fill="#ffe7a8" opacity=".85"/>'); } return w; })() +
      /* a water tower up top */
      '<path d="M300 20v-14h24v14" fill="#6a4a2a"/><path d="M296 8l16-8 16 8z" fill="#4a3a2a"/>' +
      /* casita */
      '<rect x="150" y="120" width="70" height="56" fill="#e94b6a"/><path d="M144 122l41-26 41 26z" fill="#ffd34d"/><rect x="176" y="146" width="18" height="30" fill="#5a2a2a"/>' +
      '<rect x="160" y="132" width="12" height="10" fill="#9ad8ff"/><rect x="198" y="132" width="12" height="10" fill="#9ad8ff"/>' +
      /* beds */
      '<rect x="0" y="176" width="400" height="84" fill="#5a3a22"/>' +
      '<rect x="20" y="184" width="120" height="16" fill="#6a4a2a"/><rect x="250" y="184" width="130" height="16" fill="#6a4a2a"/>' +
      (function () { let t = ""; for (let x = 30; x < 140; x += 18) t += '<path d="M' + x + ' 184v-22" stroke="#3d7a2c" stroke-width="3"/><circle cx="' + (x + 4) + '" cy="170" r="4" fill="#e0402a"/>'; return t; })() +
      sun + '<path d="M222 140l-12-6v-10h18v10z" fill="#9aa3ad"/>' + drops + fence +
      tag("HOMEGROWN", 18, 246, 30, GREEN, -3),
      sky("g4", "#86c4f0", "#fde6c0"));
  }

  /* 5. Lenox Av and W 119 St, his block: green signs, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      "<g id=\"landmark-bd\"><style>@keyframes apsmok_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apsmok_a{animation:apsmok_ch .8s steps(1) infinite}.apsmok_b{animation:apsmok_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apsmok_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apsmok_g{animation:apsmok_gl 2.6s ease-in-out infinite}@keyframes apsmok_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apsmok_s{transform-box:fill-box;transform-origin:50% 100%;animation:apsmok_sw 6s ease-in-out infinite}.apsmok_s2{animation-delay:-3s}@keyframes apsmok_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apsmok_d{animation:apsmok_dr 22s linear infinite}.apsmok_d2{animation-delay:-11s}@keyframes apsmok_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apsmok_r{animation:apsmok_rn .7s linear infinite}@keyframes apsmok_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apsmok_m{animation:apsmok_mv 9s linear infinite}@keyframes apsmok_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apsmok_ml{animation:apsmok_mvl 7s linear infinite}@keyframes apsmok_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apsmok_f{animation:apsmok_fl 3.1s infinite}</style><g transform=\"translate(96 -2)\"><rect class=\"apsmok_g\" x=\"-4.5\" y=\"-3.9\" width=\"22.1\" height=\"57.8\" rx=\"6.5\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M2.6 0l3.9 -5.9l3.9 5.9z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"13\" height=\"50\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"0.9\"/><text x=\"6.5\" y=\"7.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.3\" fill=\"#fff\">A</text><text x=\"6.5\" y=\"15.7\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.3\" fill=\"#fff\">P</text><text x=\"6.5\" y=\"23.7\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.3\" fill=\"#fff\">O</text><text x=\"6.5\" y=\"31.6\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.3\" fill=\"#fff\">L</text><text x=\"6.5\" y=\"39.5\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.3\" fill=\"#fff\">L</text><text x=\"6.5\" y=\"47.5\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"7.3\" fill=\"#fff\">O</text><circle class=\"apsmok_b\" cx=\"1.3\" cy=\"2.1\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"11.7\" cy=\"2.1\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"1.3\" cy=\"6.2\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"11.7\" cy=\"6.2\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"1.3\" cy=\"10.4\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"11.7\" cy=\"10.4\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"1.3\" cy=\"14.6\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"11.7\" cy=\"14.6\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"1.3\" cy=\"18.7\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"11.7\" cy=\"18.7\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"1.3\" cy=\"22.9\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"11.7\" cy=\"22.9\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"1.3\" cy=\"27\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"11.7\" cy=\"27\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"1.3\" cy=\"31.2\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"11.7\" cy=\"31.2\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"1.3\" cy=\"35.4\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"11.7\" cy=\"35.4\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"1.3\" cy=\"39.5\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"11.7\" cy=\"39.5\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"1.3\" cy=\"43.7\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_b\" cx=\"11.7\" cy=\"43.7\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"1.3\" cy=\"47.8\" r=\"0.9\" fill=\"#ffe9a0\"/><circle class=\"apsmok_a\" cx=\"11.7\" cy=\"47.8\" r=\"0.9\" fill=\"#ffe9a0\"/></g><rect x=\"16\" y=\"50\" width=\"46\" height=\"10\" fill=\"#2a1e1a\"/><rect x=\"14\" y=\"48\" width=\"50\" height=\"3\" fill=\"#3a2a24\"/><rect x=\"64\" y=\"50\" width=\"46\" height=\"10\" fill=\"#2a1e1a\"/><rect x=\"62\" y=\"48\" width=\"50\" height=\"3\" fill=\"#3a2a24\"/><rect x=\"112\" y=\"50\" width=\"46\" height=\"10\" fill=\"#2a1e1a\"/><rect x=\"110\" y=\"48\" width=\"50\" height=\"3\" fill=\"#3a2a24\"/><rect x=\"160\" y=\"50\" width=\"46\" height=\"10\" fill=\"#2a1e1a\"/><rect x=\"158\" y=\"48\" width=\"50\" height=\"3\" fill=\"#3a2a24\"/><rect x=\"208\" y=\"50\" width=\"46\" height=\"10\" fill=\"#2a1e1a\"/><rect x=\"206\" y=\"48\" width=\"50\" height=\"3\" fill=\"#3a2a24\"/><g class=\"apsmok_r\" style=\"animation-duration:4s\"><circle cx=\"0\" cy=\"-20\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"41\" cy=\"9\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"82\" cy=\"38\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"123\" cy=\"67\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"164\" cy=\"96\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"205\" cy=\"125\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"246\" cy=\"154\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"287\" cy=\"183\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"328\" cy=\"212\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"369\" cy=\"1\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"10\" cy=\"30\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"51\" cy=\"59\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"92\" cy=\"88\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"133\" cy=\"117\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"174\" cy=\"146\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"215\" cy=\"175\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"256\" cy=\"204\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"297\" cy=\"-7\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"338\" cy=\"22\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"379\" cy=\"51\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"20\" cy=\"80\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"61\" cy=\"109\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"102\" cy=\"138\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"143\" cy=\"167\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"184\" cy=\"196\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"225\" cy=\"-15\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"266\" cy=\"14\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"307\" cy=\"43\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"348\" cy=\"72\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"389\" cy=\"101\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"30\" cy=\"130\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"71\" cy=\"159\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"112\" cy=\"188\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"153\" cy=\"217\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"194\" cy=\"6\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"235\" cy=\"35\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"276\" cy=\"64\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"317\" cy=\"93\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"358\" cy=\"122\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"399\" cy=\"151\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"40\" cy=\"180\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"81\" cy=\"209\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"122\" cy=\"-2\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"163\" cy=\"27\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"204\" cy=\"56\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"245\" cy=\"85\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"286\" cy=\"114\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"327\" cy=\"143\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"368\" cy=\"172\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"9\" cy=\"201\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"50\" cy=\"-10\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"91\" cy=\"19\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"132\" cy=\"48\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"173\" cy=\"77\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"214\" cy=\"106\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"255\" cy=\"135\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"296\" cy=\"164\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"337\" cy=\"193\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"378\" cy=\"-18\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"19\" cy=\"11\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"60\" cy=\"40\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"101\" cy=\"69\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"142\" cy=\"98\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"183\" cy=\"127\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"224\" cy=\"156\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"265\" cy=\"185\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"306\" cy=\"214\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"347\" cy=\"3\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"388\" cy=\"32\" r=\"1\" fill=\"#fff\" opacity=\".85\"/><circle cx=\"29\" cy=\"61\" r=\"1.6\" fill=\"#fff\" opacity=\".85\"/></g></g>" +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2420"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 16 : 26; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a2e28"/>'; return b; })() +
      tag("SMOKE DZA", 24, 124, 40, GREEN, -7) + tag("GEORGE KUSH", 36, 170, 28, GOLD, -3) + tag("RFC", 60, 208, 30, PURPLE, -2) +
      '<rect class="drip" x="56" y="126" width="3" height="16" fill="' + GREEN + '"/><rect class="drip" x="190" y="170" width="3" height="12" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="270" y="88" width="68" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Lenox Av</text>' +
      '<rect x="270" y="110" width="68" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">W 119 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a1a2a"));
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

  window.SCENES = { station, armory, ringside, garden, corner };
})();
