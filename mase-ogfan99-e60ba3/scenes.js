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

  /* 1. The 2 and 3 pulling into 135 St on the Lenox Av line, underground: white tile, the violet band, white terracotta cornice, green plaques, round cast-iron columns */
  function train() {
    let tiles = "";
    for (let y = 40; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#dcd8cf" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 40v78" stroke="#dcd8cf" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="40" width="6" height="6" fill="#6b3fa0"/><rect x="' + (x + 6) + '" y="40" width="6" height="6" fill="#8c63c2"/>';
    let cols = "";
    [22, 378].forEach(x => cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="186" fill="#2a2f36"/><rect x="' + (x - 9) + '" y="0" width="18" height="8" fill="#3a414a"/><rect x="' + (x - 9) + '" y="178" width="18" height="8" fill="#3a414a"/><rect x="' + (x - 2) + '" y="8" width="3" height="170" fill="#4a525c"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="10" fill="#f4f1ea"/><path d="M0 34h400" stroke="#d8d2c4" stroke-width="1"/>' +
      '<rect x="0" y="40" width="400" height="78" fill="#f2efe6"/>' + tiles + band +
      /* green terracotta plaque */
      '<rect x="44" y="60" width="38" height="38" rx="3" fill="#3f8a6a" stroke="#2a5f48" stroke-width="2"/><text x="63" y="85" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="13" fill="#e9f3ec">135</text>' +
      /* station sign */
      '<rect x="98" y="56" width="164" height="38" rx="4" fill="#111"/><rect x="98" y="56" width="164" height="4" fill="#fff"/>' +
      '<text x="110" y="83" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">135 St</text>' + bullet(214, 76, "2", RED) + bullet(240, 76, "3", RED) +
      /* a small mosaic panel: a gold trumpet, no faces */
      '<rect x="282" y="56" width="74" height="42" fill="#2a5aa0" stroke="#e9e3d2" stroke-width="3"/>' +
      '<path d="M292 78h36l12-9v20l-12-9h-36z" fill="' + GOLD + '"/><circle cx="346" cy="64" r="3" fill="#e8562b"/><circle cx="296" cy="64" r="2" fill="#fff"/>' +
      '<g class="flk"><rect x="80" y="12" width="90" height="5" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="240" y="12" width="90" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="' + RED + '"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 144, "2", RED) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("HARLEM WORLD", 30, 244, 28, PINK, -5) + tag("MA$E", 280, 242, 32, SILVER, -7));
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

  /* 3. Harlem World at 116th and Lenox, the club he named his crew and his album after: lighted dance floor, mirrored walls, gold carpet, the lightning-bolt bar */
  function club() {
    let floor = "";
    const cs = [PINK, "#7cf2ff", GOLD, "#9b6bff"];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) {
      const x = 60 + c * 28 - r * 10, y = 170 + r * 18;
      floor += '<path class="tl t' + (1 + (r + c) % 4) + '" d="M' + (x + r * 0) + ' ' + y + 'h' + (28 + r * 2) + 'l-4 18h-' + (28 + r * 2) + 'z" fill="' + cs[(r + c) % 4] + '" stroke="#111" stroke-width="1"/>';
    }
    let mirrors = "";
    for (let x = 0; x < 400; x += 40) mirrors += '<rect x="' + (x + 2) + '" y="56" width="36" height="104" fill="#3a3550" stroke="#5c5578" stroke-width="1"/><path d="M' + (x + 8) + ' 64l14 30" stroke="#8c86b0" stroke-width="2" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="#0e0a16"/>' + mirrors +
      /* neon sign */
      '<rect x="100" y="8" width="200" height="40" rx="6" fill="#1a1024" stroke="' + PINK + '" stroke-width="2"/>' +
      '<text class="flk" x="200" y="37" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" letter-spacing="2" textLength="176" lengthAdjust="spacingAndGlyphs" fill="' + PINK + '" stroke="#ffd0e6" stroke-width=".7">HARLEM WORLD</text>' +
      /* spotlight beams */
      '<g class="beam"><path d="M70 50l-26 120h52z" fill="#fff" opacity=".1"/></g><g class="beam bm2"><path d="M330 50l-26 120h52z" fill="#fff" opacity=".1"/></g>' +
      /* mirror ball */
      '<path d="M200 48v14" stroke="#aaa" stroke-width="1.5"/><circle cx="200" cy="76" r="15" fill="#c9ced6"/>' +
      '<g class="spin"><circle cx="200" cy="76" r="15" fill="none" stroke="#7b818a" stroke-width="1" stroke-dasharray="3 2"/><path d="M186 70h28M186 82h28M194 62v28M206 62v28" stroke="#7b818a" stroke-width=".8"/></g>' +
      spark(184, 66) + spark(214, 86, "tw2") +
      /* lightning-bolt bar on the left */
      
      /* neon lightning bolt on the mirror wall, like the bar */
      '<path class="flk flk2" d="M40 66h30l-14 30h20l-40 56 10-40h-18z" fill="none" stroke="' + GOLD + '" stroke-width="3" stroke-linejoin="round"/>' +
      /* gold carpet edge, then the floor */
      '<rect x="0" y="160" width="400" height="100" fill="#b8892a"/>' +
      (function () { let s = ""; for (let i = 0; i < 80; i++) s += '<path d="M' + ((i * 37) % 400) + ' ' + (164 + (i * 23) % 92) + 'l2-4" stroke="#8a6418" stroke-width="1.2"/>'; return s; })() + floor +
      tag("FEEL SO GOOD", 250, 252, 20, SILVER, -5));
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
