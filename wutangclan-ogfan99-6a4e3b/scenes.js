/* Wu-Tang Clan game (NYC map, Staten Island: Park Hill / Stapleton, "Shaolin").
   1. The S74 bus pulling up to Targee St / Osgood Av at the foot of Park Hill (no train up the hill, the bus is how you get there).
   2. The Golden Summit on the Wudang Mountains in China, where the Wu-Tang sword style comes from (the film "Shaolin and Wu Tang"), clouds drifting.
   3. The Shaolin Temple gate in Henan: red walls, grey tile roof, stone lions, monks training. The Clan renamed Staten Island after it.
   4. Firehouse Studio in Manhattan, the old firehouse where Enter the Wu-Tang (36 Chambers) was recorded: the bay door open, the console glowing.
   5. Targee St & Osgood Av, WU-TANG tagged on the wall, Todt Hill rising behind.
   400 x 260 SVGs. No logos, no faces. All animation classes are prefixed wc- so they never clash with the game's CSS. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wcflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.wc-flk{animation:wcflk 2.4s infinite}' +
    '@keyframes wcbl{0%,100%{opacity:.25}50%{opacity:1}}.wc-bl{animation:wcbl 1.6s ease-in-out infinite}.wc-bl2{animation-delay:.5s}.wc-bl3{animation-delay:1s}' +
    '@keyframes wccloud{from{transform:translateX(-140px)}to{transform:translateX(440px)}}.wc-cl{animation:wccloud 22s linear infinite}.wc-cl2{animation-duration:30s;animation-delay:-12s}.wc-cl3{animation-duration:26s;animation-delay:-20s}' +
    '@keyframes wckick{0%,100%{transform:rotate(0)}40%,60%{transform:rotate(-55deg)}}.wc-kick{transform-box:fill-box;transform-origin:0% 0%;animation:wckick 1.4s ease-in-out infinite}.wc-kick2{animation-delay:.7s}' +
    '@keyframes wcbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.wc-bob{animation:wcbob .7s ease-in-out infinite}.wc-bob2{animation-delay:.35s}' +
    '@keyframes wcspin{to{transform:rotate(360deg)}}.wc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:wcspin 1.6s linear infinite}' +
    '@keyframes wcmeter{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.wc-mt{transform-box:fill-box;transform-origin:50% 100%;animation:wcmeter .55s ease-in-out infinite}.wc-mt2{animation-delay:.18s}.wc-mt3{animation-delay:.36s}' +
    '@keyframes wcbird{0%{transform:translate(0,0)}50%{transform:translate(60px,-8px)}100%{transform:translate(120px,0)}}.wc-bird{animation:wcbird 9s linear infinite}' +
    '@keyframes wcmist{0%,100%{opacity:0}40%,60%{opacity:.8}}.wc-mist{animation:wcmist 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* a bus route bullet: rounded pill, MTA blue */
  const busBullet = (x, y, r) => '<rect x="' + (x - 20) + '" y="' + (y - 11) + '" width="40" height="22" rx="11" fill="#0039a6"/>' + txt(r, x, y + 5, 13, "#fff");
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="34" ry="10"/><ellipse cx="-14" cy="-6" rx="16" ry="10"/><ellipse cx="12" cy="-8" rx="18" ry="12"/></g></g>';
  const YEL = "#f7c600", RED = "#c8302a", CREAM = "#f3ead2";

  /* 1. Targee St / Osgood Av: the S74 pulling in, the black stop sign with the route pill, Park Hill's brick buildings up the slope */
  function busstop() {
    let homes = "";
    [[0, 70, 70, 96], [74, 52, 64, 114], [142, 80, 58, 86], [204, 60, 70, 106], [278, 76, 60, 90], [342, 58, 58, 108]].forEach(([x, y, w, h], i) => {
      homes += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (i % 2 ? "#8a4a34" : "#9a5a3e") + '"/>';
      for (let yy = y + 10; yy < y + h - 14; yy += 16) for (let xx = x + 8; xx < x + w - 10; xx += 16) homes += '<rect class="wc-bl wc-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="8" height="10" fill="#ffe2a0" opacity=".6"/>';
    });
    let win = "";
    for (let x = 34; x < 236; x += 30) win += '<rect x="' + x + '" y="150" width="22" height="20" rx="2" fill="#bcd6ee"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#wcs0)"/>' + homes +
      '<path d="M0 166 L400 150 L400 260 L0 260z" fill="#4a4c50"/>' +
      '<rect x="0" y="198" width="400" height="8" fill="#9a9a96"/><rect x="0" y="206" width="400" height="54" fill="#3e4044"/>' +
      '<path d="M0 236h40M70 236h40M140 236h40M210 236h40M280 236h40M350 236h40" stroke="#e8d36a" stroke-width="3"/>' +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="16" y="140" width="250" height="62" rx="8" fill="#f2f2ee" stroke="#8b9096" stroke-width="2"/>' + win +
        '<rect x="16" y="178" width="250" height="7" fill="#0039a6"/>' +
        '<rect x="244" y="146" width="18" height="34" rx="3" fill="#bcd6ee"/>' +
        '<rect x="30" y="142" width="150" height="6" rx="2" fill="#141414"/>' +
        '<text x="36" y="147.5" font-family="Courier New, monospace" font-weight="700" font-size="6" fill="#ffb21f">S74 ST GEORGE FERRY</text>' +
        '<circle cx="62" cy="203" r="11" fill="#151515"/><circle cx="62" cy="203" r="4" fill="#888"/><circle cx="214" cy="203" r="11" fill="#151515"/><circle cx="214" cy="203" r="4" fill="#888"/>' +
        '<circle cx="262" cy="190" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* the stop sign on its pole */
      '<rect x="332" y="70" width="5" height="132" fill="#5b6066"/>' +
      '<rect x="292" y="40" width="92" height="40" rx="3" fill="#111"/><rect x="292" y="40" width="92" height="3" fill="#fff"/>' +
      txt("Targee St /", 338, 56, 11, "#fff") + txt("Osgood Av", 338, 71, 11, "#fff") +
      busBullet(338, 96, "S74") +
      person(356, 170, "#1f1f22") + person(376, 174, "#2c2620") +
      txt("PARK HILL · STATEN ISLAND", 200, 24, 11, CREAM, 'letter-spacing="3"'),
      sky("wcs0", "#f2a65a", "#f7d9a0"));
  }

  /* 2. The Golden Summit of the Wudang Mountains: the gilded hall on the top peak, the red wall circling it, clouds sliding through the gorges */
  function wudang() {
    return svg(
      '<rect width="400" height="260" fill="url(#wcs1)"/>' +
      '<circle cx="320" cy="58" r="22" fill="#fff1c4" opacity=".9"/>' +
      '<path d="M0 200 L40 150 L80 176 L120 120 L160 168 L200 96 L240 160 L290 110 L340 170 L400 130 L400 260 L0 260z" fill="#8fa89a" opacity=".6"/>' +
      cloud(60, 150, 1.2, "wc-cl") + cloud(200, 176, 1.5, "wc-cl wc-cl2") +
      '<path d="M0 260 L0 210 L60 170 L110 200 L150 140 L176 120 L200 78 L224 120 L250 140 L300 196 L350 168 L400 206 L400 260z" fill="#3f6b55"/>' +
      '<path d="M150 140 L176 120 L200 78 L224 120 L250 140 L234 160 L200 150 L166 160z" fill="#4e7d63"/>' +
      /* the red wall ringing the summit */
      '<path d="M156 132 Q200 112 244 132 L244 140 Q200 120 156 140z" fill="#a8322b"/>' +
      '<path d="M156 132 Q200 112 244 132" stroke="#5a5a5a" stroke-width="3" fill="none"/>' +
      /* the golden hall */
      '<rect x="182" y="64" width="36" height="20" fill="#d9a520" stroke="#8a6a10" stroke-width="1"/>' +
      '<path d="M174 66 Q200 50 226 66 L218 60 Q200 48 182 60z" fill="#e8b830"/>' +
      '<path d="M170 66 L230 66 L222 58 L178 58z" fill="#f2c94c" stroke="#8a6a10" stroke-width="1"/>' +
      '<path d="M178 58 Q200 44 222 58 L214 52 Q200 42 186 52z" fill="#f2c94c" stroke="#8a6a10" stroke-width="1"/>' +
      '<rect x="190" y="70" width="6" height="14" fill="#7a5a0a"/><rect x="204" y="70" width="6" height="14" fill="#7a5a0a"/>' +
      '<path d="M182 84 L218 84 L222 90 L178 90z" fill="#c9c2b0"/>' +
      '<g class="wc-flk"><circle cx="200" cy="40" r="3" fill="#fff6c2"/></g>' +
      cloud(-20, 110, 1.1, "wc-cl wc-cl3") + cloud(120, 196, 1.8, "wc-cl wc-cl2") +
      txt("WUDANG MOUNTAINS", 200, 236, 15, CREAM, 'letter-spacing="4" stroke="#1d2f26" stroke-width="3" paint-order="stroke"') +
      txt("THE GOLDEN SUMMIT", 200, 252, 9, YEL, 'letter-spacing="3"'),
      sky("wcs1", "#e9c48a", "#c9d9cf"));
  }

  /* 3. The Shaolin Temple gate in Henan: red walls, the grey tile roof with upturned eaves, the black plaque, stone lions, monks training */
  function shaolin() {
    const monk = (x, cls) => '<g transform="translate(' + x + ' 196)"><circle cx="0" cy="-30" r="5" fill="#2a1d14"/><path d="M-7 -24 L7 -24 L9 0 L-9 0z" fill="#e0782a"/><rect x="-6" y="0" width="4" height="12" fill="#3a2a1a"/>' +
      '<g class="wc-kick ' + cls + '"><rect x="2" y="0" width="4" height="14" fill="#3a2a1a"/></g><path d="M-7 -20 L-16 -28" stroke="#e0782a" stroke-width="4" stroke-linecap="round"/></g>';
    let tiles = "";
    for (let x = 96; x < 304; x += 8) tiles += '<path d="M' + x + ' 70 L' + (x + 4) + ' 98" stroke="#4a4f55" stroke-width="2"/>';
    const lion = x => '<g transform="translate(' + x + ' 170)"><rect x="-10" y="18" width="20" height="10" fill="#9a958a"/><path d="M-8 18 Q-10 0 0 -4 Q10 0 8 18z" fill="#b8b2a4"/><circle cx="0" cy="-6" r="7" fill="#b8b2a4"/><circle cx="0" cy="-6" r="9" fill="none" stroke="#9a958a" stroke-width="3" stroke-dasharray="3 2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wcs2)"/>' +
      '<path d="M0 120 L60 70 L130 110 L210 50 L290 104 L350 66 L400 96 L400 160 L0 160z" fill="#7e9b86" opacity=".7"/>' +
      /* pines */
      [24, 52, 352, 380].map(x => '<path d="M' + x + ' 170 L' + (x - 16) + ' 170 L' + x + ' 118 L' + (x + 16) + ' 170z" fill="#2f5a3c"/><rect x="' + (x - 2) + '" y="170" width="4" height="14" fill="#4a3220"/>').join("") +
      /* walls */
      '<rect x="0" y="140" width="110" height="46" fill="#b0362c"/><rect x="290" y="140" width="110" height="46" fill="#b0362c"/>' +
      '<rect x="0" y="134" width="110" height="8" fill="#55595e"/><rect x="290" y="134" width="110" height="8" fill="#55595e"/>' +
      /* the gate hall */
      '<rect x="110" y="98" width="180" height="88" fill="#b8392e"/>' +
      '<path d="M84 102 Q90 92 96 70 L304 70 Q310 92 316 102 Q300 96 290 98 L110 98 Q100 96 84 102z" fill="#5a5f66"/>' + tiles +
      '<path d="M96 70 Q200 60 304 70" stroke="#3a3e44" stroke-width="4" fill="none"/>' +
      '<path d="M84 102 L76 94 M316 102 L324 94" stroke="#5a5f66" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="166" y="132" width="68" height="54" rx="2" fill="#5a1410"/><path d="M200 132v54" stroke="#3a0a08" stroke-width="2"/>' +
      [176, 190, 210, 224].map(x => '<circle cx="' + x + '" cy="150" r="2" fill="#e9b949"/><circle cx="' + x + '" cy="164" r="2" fill="#e9b949"/>').join("") +
      /* the black plaque with gold strokes */
      '<rect x="168" y="104" width="64" height="22" fill="#141414" stroke="#d9a520" stroke-width="2"/>' +
      '<path d="M178 110v10M174 115h8M190 109v12M186 112h8M187 118h6M206 109l-4 12M202 113h10M214 109v12M218 111v8M222 110v10" stroke="#e9b949" stroke-width="1.6"/>' +
      lion(146) + lion(254) +
      /* steps */
      '<rect x="120" y="186" width="160" height="8" fill="#a9a395"/><rect x="108" y="194" width="184" height="8" fill="#9a958a"/><rect x="96" y="202" width="208" height="58" fill="#8a8678"/>' +
      '<rect x="0" y="186" width="96" height="74" fill="#8f8a7c"/><rect x="304" y="186" width="96" height="74" fill="#8f8a7c"/>' +
      '<g transform="translate(0 28)">' + monk(40, "") + monk(76, "wc-kick2") + monk(330, "wc-kick2") + monk(366, "") + '</g>' +
      txt("SHAOLIN TEMPLE · HENAN", 200, 30, 13, "#3a1a10", 'letter-spacing="3"'),
      sky("wcs2", "#f4e1b8", "#e4c79a"));
  }

  /* 4. Firehouse Studio, Manhattan: the old red-brick firehouse, the big bay door rolled up, the console glowing, reels turning */
  function firehouse() {
    let brick = "";
    for (let y = 40; y < 216; y += 8) for (let x = (y / 8) % 2 ? 0 : -10; x < 400; x += 20) brick += '<rect x="' + x + '" y="' + y + '" width="19" height="7" fill="#9b3b2c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#wcs3)"/>' +
      '<rect x="40" y="36" width="320" height="180" fill="#7a2c20"/>' +
      '<clipPath id="wcfh"><rect x="40" y="36" width="320" height="180"/></clipPath><g clip-path="url(#wcfh)">' + brick + '</g>' +
      '<rect x="34" y="28" width="332" height="12" fill="#d8cdb4"/><rect x="40" y="76" width="320" height="6" fill="#d8cdb4"/>' +
      /* upper windows */
      [76, 156, 236, 316].map(x => '<rect x="' + (x - 14) + '" y="46" width="28" height="26" fill="#2a2420"/><rect class="wc-bl" x="' + (x - 12) + '" y="48" width="24" height="22" fill="#ffd27a" opacity=".5"/>').join("") +
      /* the bay door, open */
      '<path d="M120 216 L120 120 Q200 76 280 120 L280 216z" fill="#d8cdb4"/>' +
      '<path d="M128 216 L128 124 Q200 86 272 124 L272 216z" fill="#14100e"/>' +
      '<path d="M128 124 Q200 86 272 124 L272 132 Q200 96 128 132z" fill="#c9302a"/>' +
      /* console + meters + reels inside */
      '<rect x="146" y="170" width="108" height="30" rx="2" fill="#3a3a40"/><path d="M146 170 L158 160 L242 160 L254 170z" fill="#55565e"/>' +
      [154, 164, 174, 184, 194, 204, 214, 224, 234, 244].map((x, i) => '<rect x="' + x + '" y="176" width="3" height="16" fill="#222"/><rect x="' + (x - 2) + '" y="' + (178 + (i * 5) % 10) + '" width="7" height="3" fill="#ddd"/>').join("") +
      [160, 180, 200, 220, 240].map((x, i) => '<rect class="wc-mt wc-mt' + (i % 3 + 1) + '" x="' + (x - 3) + '" y="140" width="6" height="16" fill="' + (i % 2 ? YEL : "#6cd36c") + '"/>').join("") +
      '<g class="wc-spin"><circle cx="160" cy="120" r="12" fill="#222" stroke="#999" stroke-width="2"/><path d="M160 108v24M148 120h24" stroke="#999" stroke-width="2"/></g>' +
      '<g class="wc-spin"><circle cx="240" cy="120" r="12" fill="#222" stroke="#999" stroke-width="2"/><path d="M240 108v24M228 120h24" stroke="#999" stroke-width="2"/></g>' +
      '<path d="M160 132 L240 132" stroke="#6b4a2a" stroke-width="2"/>' +
      '<g class="wc-bl"><rect x="186" y="104" width="28" height="10" rx="2" fill="#c9302a"/>' + txt("REC", 200, 112, 8, "#fff") + '</g>' +
      /* sidewalk */
      '<rect x="0" y="216" width="400" height="44" fill="#56575b"/><rect x="0" y="216" width="400" height="4" fill="#8a8b8e"/>' +
      person(70, 196, "#1a1a1c", "wc-bob") + person(330, 196, "#26201c", "wc-bob wc-bob2") +
      txt("FIREHOUSE STUDIO", 200, 20, 14, CREAM, 'letter-spacing="4"') +
      txt("WHERE THE FIRST ALBUM GOT RECORDED", 200, 248, 9, YEL, 'letter-spacing="2"'),
      sky("wcs3", "#1a1a2a", "#3b3550"));
  }

  /* 5. Targee St & Osgood Av: green street signs, WU-TANG tagged on the wall, the wooded ridge of Todt Hill behind at dusk */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wcs4)"/>' +
      '<path d="M0 120 Q60 70 140 82 Q200 48 260 70 Q320 56 400 96 L400 150 L0 150z" fill="#2d4a36"/>' +
      [30, 60, 90, 122, 150, 184, 214, 246, 280, 312, 344, 376].map((x, i) => '<circle cx="' + x + '" cy="' + (98 - (i % 4) * 6 - (x > 150 && x < 300 ? 18 : 0)) + '" r="14" fill="#36583f"/>').join("") +
      '<rect x="228" y="16" width="3" height="48" fill="#6b6f76"/><path d="M229.5 16 L222 64 M229.5 16 L237 64" stroke="#6b6f76" stroke-width="1.2"/>' +
      '<circle class="wc-bl" cx="229.5" cy="14" r="2.5" fill="#ff4a3a"/>' +
      '<g class="wc-bird"><path d="M40 40 q4-4 8 0 q4-4 8 0" stroke="#2a2a2a" stroke-width="1.6" fill="none"/></g>' +
      txt("TODT HILL", 140, 30, 10, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#4a4740"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#3e3b35" stroke-width="1"/>'; return b; })() +
      tag("WU-TANG", 16, 200, 54, YEL, -5) + tag("FOREVER", 196, 218, 22, RED, -4) + tag("SHAOLIN", 30, 222, 15, CREAM, -3) +
      '<g class="wc-mist"><circle cx="180" cy="168" r="10" fill="' + YEL + '" opacity=".35"/><circle cx="188" cy="160" r="6" fill="' + YEL + '" opacity=".3"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      /* pole + green signs */
      '<rect x="356" y="60" width="5" height="168" fill="#3d4b3f"/>' +
      '<rect x="296" y="64" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Targee St", 346, 80, 12, "#fff") +
      '<rect x="296" y="90" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Osgood Av", 346, 106, 12, "#fff") +
      '<circle class="wc-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("wcs4", "#3a2a4a", "#e08a4a"));
  }

  window.SCENES = { busstop: busstop, wudang: wudang, shaolin: shaolin, firehouse: firehouse, corner: corner };
})();
