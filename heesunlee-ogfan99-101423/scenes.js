/* Staten Island opening scenes for HeeSun Lee's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes koi{0%{transform:translate(0,0)}50%{transform:translate(60px,6px)}100%{transform:translate(0,0)}}' +
    '.koi{animation:koi 7s ease-in-out infinite}.koi2{animation-delay:-3.5s}' +
    '@keyframes petal{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(40px,240px) rotate(300deg);opacity:.9}}' +
    '.petal{animation:petal 7s linear infinite}.p2{animation-delay:-1.7s}.p3{animation-delay:-3.4s}.p4{animation-delay:-5.1s}' +
    '@keyframes sail{from{transform:translateX(-80px)}to{transform:translateX(460px)}}' +
    '.sail{animation:sail 16s linear infinite;animation-delay:-6s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bulb{animation:chase .8s steps(1) infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.6s ease-in-out infinite}' +
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
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#ffd166", PINK = "#ef476f", BLUE = "#4cc9f0";

  /* 1. St. George, at the Richmond Terrace end: the SIR pulling in below, the stair up to Hyatt St, the St. George Theatre's vertical sign lit up over the street */
  function train() {
    let windows = "";
    for (let x = 22; x < 200; x += 44) windows += '<rect x="' + x + '" y="160" width="28" height="18" rx="3" fill="#ffe9c2" opacity=".9"/>';
    let vb = "";
    for (let y = 26; y <= 104; y += 8) vb += '<circle class="bulb' + ((y / 8) % 2 ? " bulb2" : "") + '" cx="300" cy="' + y + '" r="1.8" fill="#fff1a8"/><circle class="bulb' + ((y / 8) % 2 ? "" : " bulb2") + '" cx="334" cy="' + y + '" r="1.8" fill="#fff1a8"/>';
    let vt = "";
    "STGEORGE".split("").forEach((l, i) => vt += '<text x="317" y="' + (34 + i * 10) + '" text-anchor="middle" ' + FONT + ' font-size="9" fill="' + GOLD + '">' + l + '</text>');
    let steps = "";
    for (let i = 0; i < 9; i++) steps += '<rect x="' + (232 + i * 13) + '" y="' + (196 - i * 12) + '" width="13" height="' + (12 + i * 12) + '" fill="' + (i % 2 ? "#8a919a" : "#9aa1aa") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(10) +
      /* Hyatt St up top: the theatre's brick front and its vertical sign */
      '<rect x="250" y="70" width="150" height="58" fill="#8a4a32"/><path d="M250 70h150" stroke="#e8d8b0" stroke-width="4"/>' +
      '<path d="M266 118v-24a10 10 0 0 1 20 0v24zM350 118v-24a10 10 0 0 1 20 0v24z" fill="#ffd9a0" opacity=".8"/>' +
      '<rect x="296" y="20" width="42" height="92" rx="4" fill="#1d1a2e" stroke="' + GOLD + '" stroke-width="2"/>' + vb + vt +
      '<rect x="250" y="128" width="150" height="6" fill="#5a5e66"/>' +
      /* the stair up to the street, with the exit sign */
      steps + '<path d="M232 196l117 -108" stroke="#c9ced6" stroke-width="3"/>' +
      '<rect x="236" y="138" width="88" height="26" rx="3" fill="#111"/>' +
      '<text x="244" y="149" ' + FONT + ' font-size="7.5" fill="#fff">EXIT ↑ Richmond Ter</text><text x="244" y="159" ' + FONT + ' font-size="7.5" fill="#fff">Hyatt St · Theatre</text>' +
      /* the canopy over the tracks and the black station sign */
      '<rect x="0" y="40" width="240" height="10" fill="#d8dde3"/><rect x="0" y="50" width="240" height="3" fill="#0039a6"/>' +
      '<rect x="20" y="53" width="5" height="90" fill="#7b8794"/><rect x="200" y="53" width="5" height="90" fill="#7b8794"/>' +
      '<rect x="36" y="64" width="160" height="30" rx="4" fill="#111"/><rect x="36" y="64" width="160" height="4" fill="#fff"/>' +
      '<text x="46" y="86" ' + FONT + ' font-size="14" fill="#fff">St. George</text>' + sir(168, 80) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="0" y="148" width="226" height="52" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="0" y="184" width="226" height="6" fill="#0039a6"/>' + windows +
        '<circle cx="218" cy="194" r="4" fill="#fff6c2"/>' + sir(196, 170) +
      '</g>' +
      '<rect x="0" y="200" width="400" height="10" fill="#eab308"/><rect x="0" y="210" width="400" height="50" fill="#1c232c"/>' +
      tag("HEESUN", 20, 246, 32, PINK, -6) + tag("IN MY CITY", 210, 248, 24, GOLD, -4),
      sky("g1", "#1c1a44", "#d97a8a"));
  }

  /* 2. The Chinese Scholar's Garden at Snug Harbor: white walls, the moon gate, gray tile roofs, red posts, koi in the pond */
  function garden() {
    let petals = "";
    ["", " p2", " p3", " p4"].forEach((c, i) => petals += '<ellipse class="petal' + c + '" cx="' + (40 + i * 90) + '" cy="0" rx="3" ry="2" fill="#ffc2d6"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* the whitewashed wall with its dark tile cap */
      '<rect x="0" y="70" width="400" height="100" fill="#f2efe6"/>' +
      '<path d="M-6 70h412l-8-12H2z" fill="#4a4e56"/>' +
      (function () { let t = ""; for (let x = 0; x < 400; x += 10) t += '<path d="M' + x + ' 60v10" stroke="#353840" stroke-width="2"/>'; return t; })() +
      /* moon gate */
      '<circle cx="110" cy="122" r="40" fill="#2f5a3a"/><circle cx="110" cy="122" r="40" fill="none" stroke="#9a9484" stroke-width="3"/>' +
      '<path d="M86 104q14-14 30-6q10 6 18 2v40H86z" fill="#4f8a46"/><rect x="104" y="128" width="6" height="34" fill="#5a3a22"/>' +
      /* the pavilion: upturned gray tile roof, red posts */
      '<path d="M220 74q60-30 140 0l12-6-6 14H214l-6-14z" fill="#3e424a"/><path d="M226 82h140" stroke="#2a2d33" stroke-width="3"/>' +
      '<rect x="234" y="84" width="7" height="70" fill="#a8322a"/><rect x="290" y="84" width="7" height="70" fill="#a8322a"/><rect x="346" y="84" width="7" height="70" fill="#a8322a"/>' +
      '<path d="M234 98h119" stroke="#a8322a" stroke-width="3"/><path d="M234 140h119" stroke="#5a3a22" stroke-width="3"/>' +
      (function () { let l = ""; for (let x = 238; x < 350; x += 8) l += '<path d="M' + x + ' 140v14" stroke="#5a3a22" stroke-width="1.5"/>'; return l; })() +
      /* a bamboo stand */
      '<path d="M170 170V80M180 170V70M188 170V90" stroke="#5e8f3a" stroke-width="4"/><path d="M170 100l-10-6M180 90l12-8M188 110l10-6" stroke="#6faa44" stroke-width="3"/>' +
      /* the pond with koi */
      '<rect x="0" y="170" width="400" height="90" fill="#2f6a6a"/>' +
      '<path class="shim" d="M40 186h50M240 196h70M120 236h60" stroke="#cfe8e6" stroke-width="2"/>' +
      '<g class="koi"><ellipse cx="80" cy="210" rx="12" ry="5" fill="#ff8a3a"/><path d="M68 210l-8-5v10z" fill="#ff8a3a"/><circle cx="86" cy="208" r="2" fill="#fff"/></g>' +
      '<g class="koi koi2"><ellipse cx="250" cy="224" rx="12" ry="5" fill="#f7f3ea"/><path d="M238 224l-8-5v10z" fill="#f7f3ea"/><circle cx="252" cy="222" r="2.5" fill="#e0402a"/></g>' +
      /* a lily pad and the rocks */
      '<ellipse cx="330" cy="240" rx="16" ry="5" fill="#4f8a46"/><path d="M0 172q30-10 60 0" fill="#7b7e86"/>' + petals +
      tag("SNUG HARBOR", 18, 252, 24, GOLD, -3),
      sky("g2", "#9cc6e8", "#f6e2d0"));
  }

  /* 3. Jacques Marchais Museum of Tibetan Art on Lighthouse Hill: little fieldstone monastery-style buildings, red doors, the terraced garden and lotus pond, prayer flags in the wind */
  function verrazzano() {
    const stone = (x, y, w, h) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#b59d7a"/>'; for (let yy = y + 4; yy < y + h - 4; yy += 9) for (let xx = x + ((yy / 9) % 2 ? 2 : 8); xx < x + w - 8; xx += 14) s += '<rect x="' + xx + '" y="' + yy + '" width="11" height="6" rx="2" fill="#a38a66"/>'; return s; };
    const flagCols = ["#3a7bd5", "#ffffff", "#d7263d", "#3fa34d", "#ffd166"];
    let flags = "";
    for (let i = 0; i < 12; i++) flags += '<rect class="flg' + (i % 2 ? " flg2" : "") + '" x="' + (40 + i * 26) + '" y="' + (40 + Math.abs(6 - i) * 2) + '" width="14" height="16" fill="' + flagCols[i % 5] + '"/>';
    return svg(
      '<style>@keyframes flap{0%,100%{transform:skewX(0)}50%{transform:skewX(-14deg)}}.flg{transform-box:fill-box;transform-origin:top center;animation:flap 1.4s ease-in-out infinite}.flg2{animation-delay:-.7s}</style>' +
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="340" cy="34" r="14" fill="#fff1a8"/>' +
      /* hillside trees */
      '<path d="M0 120q40 -40 90 -20q50 -30 100 -4q60 -30 110 0q50 -20 100 4v40H0z" fill="#3f6a3a"/>' +
      '<path d="M36 40Q200 62 364 40" stroke="#5a5a5a" stroke-width="1" fill="none"/>' + flags +
      /* the main temple building */
      stone(120, 90, 130, 80) + '<path d="M112 92l14 -18h118l14 18z" fill="#4a3a2a"/><rect x="112" y="88" width="146" height="5" fill="#d7263d"/>' +
      '<rect x="172" y="122" width="26" height="48" fill="#b0281e" stroke="#ffd166" stroke-width="2"/><circle cx="185" cy="146" r="2" fill="#ffd166"/>' +
      '<rect x="134" y="112" width="16" height="20" fill="#2a1e14" stroke="#ffd166" stroke-width="1.5"/><rect x="220" y="112" width="16" height="20" fill="#2a1e14" stroke="#ffd166" stroke-width="1.5"/>' +
      /* the small library building */
      stone(270, 112, 80, 58) + '<path d="M264 114l10 -12h72l10 12z" fill="#4a3a2a"/><rect x="264" y="112" width="92" height="4" fill="#d7263d"/>' +
      '<rect x="300" y="136" width="20" height="34" fill="#b0281e" stroke="#ffd166" stroke-width="1.5"/>' +
      /* terraces */
      '<rect x="0" y="170" width="400" height="16" fill="#8a9a5a"/>' + stone(0, 186, 400, 12) +
      '<rect x="0" y="198" width="400" height="62" fill="#5c8a46"/>' +
      /* lotus pond */
      '<ellipse cx="120" cy="228" rx="80" ry="18" fill="#2f6a6a"/><path class="shim" d="M70 224h40M130 232h40" stroke="#cfe8e6" stroke-width="2"/>' +
      '<ellipse cx="90" cy="228" rx="10" ry="3.5" fill="#4f8a46"/><path d="M86 226l4 -8 4 8z" fill="#ff9ac0"/>' +
      '<ellipse cx="150" cy="234" rx="10" ry="3.5" fill="#4f8a46"/><path d="M146 232l4 -8 4 8z" fill="#ff9ac0"/>' +
      '<rect x="218" y="210" width="176" height="18" rx="2" fill="#1d1a2e"/>' +
      '<text x="306" y="223" text-anchor="middle" ' + FONT + ' font-size="8" fill="#fff">TIBETAN MUSEUM · LIGHTHOUSE HILL</text>' +
      tag("HEESUN", 250, 252, 22, PINK, -4),
      sky("g3", "#86b8de", "#f6e2b8"));
  }

  /* 4. The St. George Theatre on Hyatt St: the brick front, the vertical sign and the marquee with chasing bulbs */
  function theatre() {
    let bulbs = "";
    for (let x = 70; x <= 330; x += 10) bulbs += '<circle class="bulb' + ((x / 10) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="132" r="2.4" fill="#fff1a8"/><circle class="bulb' + ((x / 10) % 2 ? "" : " bulb2") + '" cx="' + x + '" cy="178" r="2.4" fill="#fff1a8"/>';
    let vb = "";
    for (let y = 22; y <= 116; y += 8) vb += '<circle class="bulb' + ((y / 8) % 2 ? " bulb2" : "") + '" cx="190" cy="' + y + '" r="2" fill="#fff1a8"/><circle class="bulb' + ((y / 8) % 2 ? "" : " bulb2") + '" cx="230" cy="' + y + '" r="2" fill="#fff1a8"/>';
    const letters = "STGEORGE".split("");
    let vt = "";
    letters.forEach((l, i) => vt += '<text x="210" y="' + (32 + i * 11) + '" text-anchor="middle" ' + FONT + ' font-size="10" fill="' + GOLD + '">' + l + '</text>');
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(14) +
      /* brick facade with arched windows */
      '<rect x="40" y="40" width="320" height="180" fill="#8a4a32"/>' +
      (function () { let b = ""; for (let y = 44; y < 220; y += 8) b += '<path d="M40 ' + y + 'h320" stroke="#6e3826" stroke-width="1"/>'; return b; })() +
      '<path d="M70 110v-36a14 14 0 0 1 28 0v36zM302 110v-36a14 14 0 0 1 28 0v36z" fill="#ffd9a0" opacity=".8"/>' +
      '<path d="M40 40h320" stroke="#e8d8b0" stroke-width="6"/>' +
      /* vertical blade sign */
      '<rect x="186" y="16" width="48" height="104" rx="4" fill="#1d1a2e" stroke="' + GOLD + '" stroke-width="2"/>' + vb + vt +
      /* marquee */
      '<path d="M60 128h280l-10 54H70z" fill="#1d1a2e" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="84" y="140" width="232" height="30" fill="#f7f3ea"/>' +
      '<text x="200" y="152" text-anchor="middle" ' + FONT + ' font-size="10" fill="#1d1a2e">TONIGHT ONLY</text>' +
      '<text x="200" y="166" text-anchor="middle" ' + FONT + ' font-size="13" fill="' + PINK + '">HEESUN LEE</text>' + bulbs +
      /* doors and sidewalk */
      '<rect x="120" y="186" width="160" height="34" fill="#3a2418"/>' +
      (function () { let d = ""; for (let x = 124; x < 280; x += 32) d += '<rect x="' + x + '" y="190" width="26" height="30" fill="#ffd9a0" opacity=".55"/>'; return d; })() +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2a34"/>' +
      tag("HYATT ST", 16, 250, 22, BLUE, -3),
      sky("g4", "#100c26", "#3a2a5a"));
  }

  /* 5. Hyatt St and Stuyvesant Pl, in front of the St. George Theatre: green signs, the marquee glow, HeeSun's wall */
  function corner() {
    let bulbs = "";
    for (let x = 274; x <= 396; x += 10) bulbs += '<circle class="bulb' + ((x / 2) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="186" r="2.2" fill="#fff1a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      /* the theatre front across the street, marquee lit */
      '<rect x="266" y="130" width="134" height="90" fill="#8a4a32"/><path d="M266 182h134v22H266z" fill="#1d1a2e"/>' + bulbs +
      '<text x="333" y="198" text-anchor="middle" ' + FONT + ' font-size="8" fill="' + GOLD + '">ST. GEORGE THEATRE</text>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#2e3448"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#383f56"/>'; return b; })() +
      tag("HEESUN", 30, 128, 44, PINK, -7) + tag("IN MY CITY", 36, 172, 28, GOLD, -3) + tag("STEREOTYPES", 40, 208, 22, BLUE, -2) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="74" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="268" y="84" width="68" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="97" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Hyatt St</text>' +
      '<rect x="252" y="106" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="119" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Stuyvesant Pl</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a2a4a"));
  }

  window.SCENES = { train, garden, verrazzano, theatre, corner };
})();
