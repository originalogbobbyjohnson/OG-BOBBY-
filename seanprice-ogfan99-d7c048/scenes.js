/* Sean Price game (NYC map, Brooklyn: Brownsville). The 3 on the elevated New Lots line at Sutter Av-Rutland Rd, the old Loew's Pitkin on Pitkin Ave,
   the monkey bars in Betsy Head Park (Monkey Barz), the Betsy Head Pool ("Betsy had pool"), and Livonia Ave & Rockaway Ave under the el. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.sw{transform-box:fill-box;transform-origin:50% 0%;animation:swing 1.4s ease-in-out infinite}.sw2{animation-delay:-.7s}' +
    '@keyframes kswing{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.kid{transform-box:view-box;animation:kswing 1.6s ease-in-out infinite}.kid2{animation-delay:-.8s}' +
    '@keyframes splash{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.sp{animation:splash 1.2s ease-in-out infinite}.sp2{animation-delay:.4s}.sp3{animation-delay:.8s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.wv{animation:wave 3s ease-in-out infinite}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.2}}.ch{animation:chase .8s linear infinite}.ch2{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const towers = (col, lit) => { let g = ""; [[10, 60], [70, 48], [300, 56], [352, 44]].forEach(([x, y]) => { g += '<rect x="' + x + '" y="' + y + '" width="46" height="' + (160 - y) + '" fill="' + col + '"/>';
    if (lit) for (let yy = y + 8; yy < 150; yy += 14) for (let xx = x + 6; xx < x + 42; xx += 12) g += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".8"/>'; }); return g; };
  const RED = "#ee352e", GOLD = "#ffd23f", ORANGE = "#e4572e", CREAM = "#f4ead8", GREEN = "#2e7d4f";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. Sutter Av-Rutland Rd, elevated over Livonia Ave: the platform canopy, the black station sign with the red 3, the train sliding in */
  function sutter() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(12) + towers("#2a2f45", true) +
      /* canopy and posts */
      '<path d="M0 46h400v10H0z" fill="#4b3a2c"/><rect x="0" y="56" width="400" height="4" fill="#7a6650"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="60" width="6" height="104" fill="#2f5a3c"/>').join("") +
      /* sign */
      '<rect x="70" y="66" width="250" height="30" rx="3" fill="#111"/><rect x="70" y="66" width="250" height="3" fill="#fff"/>' +
      '<text x="84" y="88" ' + font + ' font-size="14" fill="#fff">Sutter Av-Rutland Rd</text>' + bullet(300, 81, "3", RED) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "3", RED) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge and the el structure */
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="12" height="78" fill="#2f5a3c"/><path d="M' + (x + 12) + ' 186l60 0" stroke="#2f5a3c" stroke-width="4"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#4a4a4f"/>' +
      '<g class="car"><rect x="0" y="242" width="40" height="13" rx="4" fill="' + GOLD + '"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">LIVONIA AVE</text>',
      sky("s1", "#141a33", "#5a4d7a"));
  }

  /* 2. The Loew's Pitkin on Pitkin Ave: ornate cream terracotta facade, the arched window, the chasing marquee lights */
  function pitkin() {
    let orn = "";
    for (let x = 64; x < 336; x += 24) orn += '<circle cx="' + x + '" cy="58" r="5" fill="#d9b27a"/>';
    let bulbs = "";
    for (let x = 60; x < 340; x += 14) bulbs += '<circle class="ch' + (x % 28 ? "" : " ch2") + '" cx="' + x + '" cy="150" r="2.5" fill="#fff3a8"/><circle class="ch' + (x % 28 ? " ch2" : "") + '" cx="' + x + '" cy="184" r="2.5" fill="#fff3a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<rect x="0" y="80" width="50" height="120" fill="#5a3a2c"/><rect x="350" y="70" width="50" height="130" fill="#4d3226"/>' +
      /* facade */
      '<rect x="50" y="40" width="300" height="160" fill="' + CREAM + '" stroke="#c9a46a" stroke-width="3"/>' +
      '<rect x="50" y="40" width="300" height="12" fill="#d9b27a"/>' + orn +
      '<path d="M150 140V96q50-50 100 0v44z" fill="#2c3a55" stroke="#c9a46a" stroke-width="4"/>' +
      '<path d="M200 54v86M160 110h80" stroke="#c9a46a" stroke-width="2"/>' +
      '<rect x="70" y="72" width="40" height="64" fill="#e8d6b8" stroke="#c9a46a" stroke-width="2"/><rect x="290" y="72" width="40" height="64" fill="#e8d6b8" stroke="#c9a46a" stroke-width="2"/>' +
      '<path d="M76 80h28M76 96h28M76 112h28M296 80h28M296 96h28M296 112h28" stroke="#c9a46a" stroke-width="1.5"/>' +
      /* marquee */
      '<rect x="54" y="144" width="292" height="46" fill="#7a1f1a"/>' + bulbs +
      '<text class="flk" x="200" y="174" text-anchor="middle" ' + font + ' font-size="16" fill="' + GOLD + '" letter-spacing="2">PITKIN AVE</text>' +
      '<rect x="130" y="190" width="140" height="10" fill="#3a2a20"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="200" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="226" width="46" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="36" cy="240" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="232" width="40" height="13" rx="4" fill="#3b6fb6"/><circle cx="10" cy="245" r="4" fill="#111"/><circle cx="30" cy="245" r="4" fill="#111"/></g>',
      sky("s2", "#2b3a67", "#e59c5a"));
  }

  /* 3. Monkey bars in Betsy Head Park: the jungle gym, two silhouettes swinging, the projects behind (Monkey Barz) */
  function monkeybars() {
    let rungs = "";
    for (let x = 96; x <= 304; x += 16) rungs += '<rect x="' + (x - 2) + '" y="96" width="4" height="10" fill="#c9ced6"/>';
    const kid = (x, cls) => '<g class="kid ' + cls + '" style="transform-origin:' + x + 'px 104px"><circle cx="' + x + '" cy="128" r="8" fill="#141414"/><rect x="' + (x - 6) + '" y="136" width="12" height="26" rx="5" fill="#141414"/><path d="M' + (x - 5) + ' 138L' + (x - 4) + ' 104M' + (x + 5) + ' 138L' + (x + 4) + ' 104" stroke="#141414" stroke-width="4" stroke-linecap="round"/><path d="M' + (x - 3) + ' 160l-3 16M' + (x + 3) + ' 160l3 16" stroke="#141414" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + towers("#8b5a44", false) +
      '<rect x="0" y="160" width="400" height="100" fill="#3f7a46"/><rect x="0" y="196" width="400" height="64" fill="#d36a3a"/>' +
      /* the monkey bars frame */
      '<rect x="80" y="96" width="240" height="10" rx="3" fill="#2b6cb0"/>' + rungs +
      '<path d="M86 104L70 206M86 104L104 206M314 104L298 206M314 104L330 206" stroke="#2b6cb0" stroke-width="7" stroke-linecap="round"/>' +
      kid(140, "") + kid(250, "kid2") +
      '<rect x="0" y="236" width="400" height="24" fill="#b8573a"/>' +
      '<rect x="20" y="182" width="8" height="40" fill="#555"/><rect x="10" y="176" width="28" height="8" fill="' + GOLD + '"/>' +
      tag("MONKEY BARZ", 220, 236, 24, GOLD, -3),
      sky("s3", "#6fb7ff", "#cfe9ff"));
  }

  /* 4. The Betsy Head Pool: the big outdoor pool, the long red-brick bathhouse, splashing swimmers and a lifeguard chair */
  function pool() {
    let brick = "";
    for (let y = 70; y < 130; y += 8) for (let x = (y / 8) % 2 ? 24 : 16; x < 384; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#9b3d26"/>';
    let waves = "";
    for (let x = 0; x < 440; x += 40) waves += '<path d="M' + x + ' 0q10-5 20 0t20 0" stroke="#e6f8ff" stroke-width="2" fill="none" opacity=".7"/>';
    const head = (x, y, cls) => '<g class="sp ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="#1a1a1a"/><path d="M' + (x - 12) + ' ' + (y + 6) + 'q12 -6 24 0" stroke="#fff" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<circle cx="340" cy="34" r="18" fill="#ffe27a"/>' +
      '<rect x="10" y="64" width="380" height="72" fill="#b8492e"/>' + brick +
      '<rect x="10" y="58" width="380" height="8" fill="#e6d3b3"/>' +
      [60, 140, 220, 300].map(x => '<rect x="' + x + '" y="84" width="40" height="40" rx="20" fill="#2a3242"/>').join("") +
      '<text x="200" y="80" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '" letter-spacing="3">BETSY HEAD POOL</text>' +
      '<rect x="0" y="136" width="400" height="12" fill="#e9e3d4"/>' +
      '<rect x="0" y="148" width="400" height="112" fill="#2fa3d6"/>' +
      '<g transform="translate(0,176)"><g class="wv">' + waves + '</g></g><g transform="translate(0,222)"><g class="wv">' + waves + '</g></g>' +
      head(90, 190, "") + head(170, 214, "sp2") + head(250, 186, "sp3") + head(320, 230, "") +
      /* lifeguard chair */
      '<path d="M352 148l8-40h20l8 40" stroke="#f4f4f4" stroke-width="4" fill="none"/><rect x="356" y="100" width="28" height="10" fill="' + RED + '"/>' +
      tag("BETSY HAD POOL", 20, 252, 18, GOLD, -2),
      sky("s4", "#4aa8ff", "#bfe3ff"));
  }

  /* 5. Livonia Ave & Rockaway Ave under the el: green street signs, the wall tagged SEAN PRICE, the projects behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) + towers("#262b40", true) +
      /* el overhead */
      '<rect x="0" y="40" width="400" height="14" fill="#2f5a3c"/><rect x="0" y="54" width="400" height="5" fill="#244a31"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 5) + '" y="54" width="10" height="90" fill="#2f5a3c"/>').join("") +
      '<g class="anim-train"><rect x="40" y="22" width="220" height="18" rx="3" fill="#c9ced6"/>' + bullet(250, 31, "3", RED) + '</g>' +
      /* wall */
      '<rect x="0" y="130" width="400" height="96" fill="#5e3a2e"/>' +
      (() => { let b = ""; for (let y = 136; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#4a2c22" stroke-width="1"/>'; return b; })() +
      tag("SEAN PRICE", 16, 194, 40, GOLD, -5) + tag("BOOT CAMP", 206, 216, 20, CREAM, -4) + tag("P!", 300, 170, 30, ORANGE, -8) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="82" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Livonia Ave</text>' +
      '<rect x="290" y="92" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="108" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Rockaway Ave</text>' +
      '<circle class="flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("s5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { sutter: sutter, pitkin: pitkin, monkeybars: monkeybars, pool: pool, corner: corner };
})();
