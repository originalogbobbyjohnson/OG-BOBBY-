/* SA-ROC (Congress Heights, Southeast Washington D.C. — THE DMV region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed sr- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes srblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.sr-blk{animation:srblink 1s steps(1) infinite}.sr-blk2{animation-delay:.5s}' +
    '@keyframes srflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.sr-flk{animation:srflick 2.4s infinite}.sr-flk2{animation-delay:.9s}' +
    '@keyframes srdrift{from{transform:translateX(-80px)}to{transform:translateX(470px)}}.sr-cloud{animation:srdrift 30s linear infinite}.sr-cloud2{animation-delay:-15s}' +
    '@keyframes srbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.sr-bird{animation:srbird 10s linear infinite}.sr-bird2{animation-delay:-5s}' +
    '@keyframes srbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.sr-ball{animation:srbounce .8s ease-in infinite}' +
    '@keyframes srroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.sr-car{animation:srroll 7s linear infinite}.sr-car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes srrollb{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.sr-carb{animation:srrollb 8s linear infinite}' +
    '@keyframes srskate{0%{transform:translateX(0)}50%{transform:translateX(150px)}100%{transform:translateX(0)}}.sr-sk{animation:srskate 5s ease-in-out infinite}.sr-sk2{animation-duration:6.5s;animation-delay:-2s}.sr-sk3{animation-duration:4.2s;animation-delay:-3s}' +
    '@keyframes srglow{0%,100%{opacity:.35}50%{opacity:.9}}.sr-glow{animation:srglow 3s ease-in-out infinite}' +
    '@keyframes srflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.sr-flag{transform-box:fill-box;transform-origin:0 50%;animation:srflag 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const cloud = (x, y, cls) => '<g class="sr-cloud ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#fff" opacity=".8"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".8"/></g>';
  const bird = (x, y, cls) => '<g class="sr-bird ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q5-6 10 0q5-6 10 0" stroke="#2a2a33" stroke-width="1.6" fill="none"/></g>';
  /* WMATA line bullet */
  const bullet = (x, y, color, label, dark) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="' + (dark ? "#111" : "#fff") + '">' + label + '</text>';
  const GOLD = "#f2c14e", PURP = "#9b6cf0", TEAL = "#2fb39a";
  const GR = "#00b140";

  /* 1. Congress Heights station (Green Line), underground under Alabama Ave SE: coffered vault, the train pulling in, platform lights blinking */
  function srstation() {
    let coffers = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 12; c++) {
      const y = 8 + r * 22, w = 30 - r * 2, x = c * 34 + 2;
      coffers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#77706a" stroke="#524c46" stroke-width="2"/><rect x="' + (x + 6) + '" y="' + (y + 5) + '" width="' + (w - 12) + '" height="8" fill="#605a54"/>';
    }
    const car = (x) => '<rect x="' + x + '" y="128" width="168" height="62" rx="5" fill="#c9ced3" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="170" width="168" height="5" fill="' + GR + '"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="138" width="26" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + (x + 66) + '" y="136" width="16" height="44" fill="#a2a8ae"/><path d="M' + (x + 74) + ' 136v44" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 26) + '" cy="192" r="5" fill="#222"/><circle cx="' + (x + 142) + '" cy="192" r="5" fill="#222"/>';
    const cab = '<path d="M348 190v-58q0-4 4-4h30q12 4 16 22v40z" fill="#c9ced3" stroke="#6b7177" stroke-width="1.5"/><path d="M372 134h12q8 4 11 18h-23z" fill="#11161c"/>' +
      '<rect x="348" y="170" width="50" height="5" fill="' + GR + '"/><rect x="372" y="140" width="22" height="7" rx="1" fill="#000"/><text x="383" y="145.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="4.6" fill="#ffb03c">GREEN</text>' +
      '<circle cx="392" cy="180" r="3" fill="#fff6c2" class="sr-flk"/><circle cx="370" cy="192" r="5" fill="#222"/>';
    let edge = "";
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#ffd27a" class="sr-blk' + (x % 52 ? " sr-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#26221e"/>' +
      '<path d="M0 0h400v100q-200 40-400 0z" fill="#837a70"/>' + coffers +
      '<path d="M0 100q200 40 400 0v28H0z" fill="#3a342d"/>' +
      '<g class="sr-flk"><rect x="0" y="112" width="400" height="3" fill="#ffe6b0" opacity=".5"/></g>' +
      '<rect x="0" y="122" width="400" height="6" fill="#1e1a16"/>' +
      '<g class="anim-train">' + car(4) + car(176) + cab + '</g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#7c4436"/>' +
      '<rect x="18" y="140" width="14" height="64" fill="#4a3628"/><rect x="18" y="140" width="14" height="5" fill="' + GR + '"/>' +
      '<rect x="80" y="212" width="240" height="40" rx="3" fill="#2b2119" stroke="#fff" stroke-width="1.5"/>' +
      bullet(102, 232, GR, "GR") +
      '<text x="214" y="236" text-anchor="middle" ' + F + ' font-weight="700" font-size="17" fill="#fff">Congress Heights</text>' +
      '<text x="214" y="247" text-anchor="middle" ' + F + ' font-size="7" fill="#e8dccb">ALABAMA AVE · SOUTHEAST D.C.</text>');
  }

  /* 2. St. Elizabeths, Congress Heights: the red-brick Center Building with its tall battlemented tower, up on the hill over the river */
  function srsteliz() {
    let win = "";
    for (let f = 0; f < 3; f++) for (let i = 0; i < 7; i++) {
      win += '<rect x="' + (52 + i * 14) + '" y="' + (128 + f * 22) + '" width="7" height="13" rx="3.5" fill="#f4e6c0" opacity="' + (i % 3 ? .9 : .6) + '"/>';
      win += '<rect x="' + (262 + i * 14) + '" y="' + (128 + f * 22) + '" width="7" height="13" rx="3.5" fill="#f4e6c0" opacity="' + (i % 2 ? .9 : .6) + '"/>';
    }
    let crenel = "";
    for (let i = 0; i < 7; i++) crenel += '<rect x="' + (172 + i * 8.6) + '" y="44" width="5" height="8" fill="#8e3b2a"/>';
    let trees = "";
    [[18, 196], [38, 204], [362, 198], [384, 206], [150, 214], [252, 214]].forEach(([x, y]) => trees += '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="16" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="14" fill="#3d7a3a"/><circle cx="' + (x + 6) + '" cy="' + (y - 12) + '" r="9" fill="#4f9248"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#ss2)"/>' + cloud(60, 34) + cloud(250, 22, "sr-cloud2") +
      '<path d="M0 200q100-24 200-20t200 14v66H0z" fill="#6aa04e"/>' +
      /* wings */
      '<rect x="40" y="112" width="120" height="96" fill="#9e4632"/><path d="M36 114l64-22 64 22z" fill="#5a3a34"/>' +
      '<rect x="250" y="112" width="120" height="96" fill="#9e4632"/><path d="M246 114l64-22 64 22z" fill="#5a3a34"/>' +
      win +
      /* center block + tower */
      '<rect x="160" y="96" width="90" height="112" fill="#a84d36"/>' +
      '<rect x="176" y="52" width="58" height="60" fill="#a84d36"/>' + crenel +
      '<rect x="168" y="96" width="74" height="6" fill="#d9c8a8"/><rect x="176" y="52" width="58" height="4" fill="#d9c8a8"/>' +
      '<path d="M196 76v-12a9 9 0 0 1 18 0v12z" fill="#2b2420"/><path d="M188 150v-24a17 17 0 0 1 34 0v24z" fill="#2b2420"/>' +
      '<path d="M190 208v-34a15 15 0 0 1 30 0v34z" fill="#3a2a22"/>' +
      '<rect x="172" y="118" width="10" height="18" rx="5" fill="#f4e6c0"/><rect x="228" y="118" width="10" height="18" rx="5" fill="#f4e6c0"/>' +
      '<rect x="203" y="24" width="2" height="22" fill="#555"/><g class="sr-flag"><rect x="205" y="24" width="16" height="10" fill="#fff"/><rect x="205" y="29" width="16" height="2" fill="#d62828"/><rect x="205" y="32" width="16" height="1.6" fill="#d62828"/><circle cx="209" cy="26.4" r="1.1" fill="#d62828"/><circle cx="213" cy="26.4" r="1.1" fill="#d62828"/><circle cx="217" cy="26.4" r="1.1" fill="#d62828"/></g>' +
      trees + bird(80, 70) + bird(150, 60, "sr-bird2") +
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="#1b2a1a" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + A + ' font-size="12" fill="' + GOLD + '" textLength="168" lengthAdjust="spacingAndGlyphs">ST. ELIZABETHS · CONGRESS HEIGHTS</text>',
      sky("ss2", "#6fa8dc", "#f4d9a8"));
  }

  /* 3. The Entertainment & Sports Arena at St. Elizabeths East, Congress Heights: long low arena, curved silver roof, glass front, ball bouncing */
  function srarena() {
    let fins = "";
    for (let i = 0; i < 24; i++) fins += '<rect x="' + (40 + i * 13.4) + '" y="104" width="6" height="74" fill="' + (i % 2 ? "#b5793e" : "#c98d4e") + '"/>';
    let glass = "";
    for (let i = 0; i < 16; i++) glass += '<rect x="' + (44 + i * 20) + '" y="182" width="18" height="30" fill="#1f3a52" stroke="#9fb4c4" stroke-width=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ss3)"/>' + stars(26) +
      '<circle cx="340" cy="40" r="14" fill="#f6efd2" opacity=".9"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#3b3a40"/><rect x="0" y="212" width="400" height="3" fill="#6a6870"/>' +
      '<path d="M30 104q170-40 340 0v6H30z" fill="#c8ced6" stroke="#8a929c" stroke-width="1.5"/>' +
      '<path d="M40 110q160-34 320 0" stroke="#e6eaee" stroke-width="2" fill="none" class="sr-glow"/>' +
      '<rect x="36" y="104" width="328" height="110" fill="#5b4a3a"/>' + fins +
      '<rect x="36" y="178" width="328" height="36" fill="#203348"/>' + glass +
      '<g class="sr-glow"><rect x="36" y="178" width="328" height="36" fill="#ffe4a0" opacity=".18"/></g>' +
      '<rect x="120" y="124" width="160" height="28" rx="3" fill="#121826" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="137" text-anchor="middle" ' + A + ' font-size="11" fill="#fff" textLength="148" lengthAdjust="spacingAndGlyphs">ENTERTAINMENT &amp; SPORTS ARENA</text>' +
      '<text x="200" y="148" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" fill="' + GOLD + '" textLength="148" lengthAdjust="spacingAndGlyphs">ST. ELIZABETHS EAST · CONGRESS HEIGHTS</text>' +
      '<g class="sr-ball"><circle cx="70" cy="232" r="7" fill="#e06a1a"/><path d="M63 232h14M70 225v14" stroke="#4a2408" stroke-width="1"/></g>' +
      '<g class="sr-car"><rect x="0" y="238" width="58" height="16" rx="5" fill="' + PURP + '"/><circle cx="12" cy="255" r="4" fill="#111"/><circle cx="46" cy="255" r="4" fill="#111"/><circle cx="56" cy="244" r="2" fill="#fff6c2"/></g>' +
      '<g class="sr-carb"><rect x="0" y="222" width="54" height="14" rx="5" fill="' + TEAL + '"/><circle cx="10" cy="237" r="4" fill="#111"/><circle cx="44" cy="237" r="4" fill="#111"/></g>',
      sky("ss3", "#0d1230", "#3e2f5c"));
  }

  /* 4. Anacostia Park roller-skating pavilion, Southeast: the big open flat-roof pavilion by the river, skaters gliding around the rink */
  function srskate() {
    let cols = "";
    for (let i = 0; i < 9; i++) cols += '<rect x="' + (46 + i * 38.5) + '" y="112" width="6" height="80" fill="#d4d0c6"/>';
    const skater = (x, y, c, cls) => '<g class="sr-sk ' + cls + '"><circle cx="' + x + '" cy="' + (y - 24) + '" r="5" fill="#3a2a22"/><path d="M' + x + ' ' + (y - 19) + 'l-2 12l-6 10M' + (x - 2) + ' ' + (y - 7) + 'l6 8M' + x + ' ' + (y - 16) + 'l-9 4M' + x + ' ' + (y - 16) + 'l9-3" stroke="' + c + '" stroke-width="3.2" stroke-linecap="round" fill="none"/>' +
      '<rect x="' + (x - 11) + '" y="' + (y + 2) + '" width="9" height="3" rx="1.5" fill="#fff"/><rect x="' + (x + 1) + '" y="' + (y + 2) + '" width="9" height="3" rx="1.5" fill="#fff"/></g>';
    let trees = "";
    for (let i = 0; i < 12; i++) trees += '<circle cx="' + (i * 36 + 10) + '" cy="' + (96 + (i % 3) * 3) + '" r="16" fill="' + (i % 2 ? "#3f7a3c" : "#4c8c45") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ss4)"/>' + cloud(40, 30) + cloud(230, 46, "sr-cloud2") +
      '<rect x="0" y="92" width="400" height="18" fill="#5f8fae"/>' + trees +
      '<path d="M0 108h400v152H0z" fill="#7aa95a"/>' +
      '<rect x="30" y="100" width="340" height="14" fill="#efece4" stroke="#b9b3a6" stroke-width="1.5"/><rect x="30" y="112" width="340" height="4" fill="#a9a395"/>' +
      cols +
      '<rect x="36" y="190" width="328" height="26" fill="#9a9a96"/><rect x="36" y="188" width="328" height="3" fill="#c9c6bc"/>' +
      '<ellipse cx="200" cy="203" rx="150" ry="9" fill="none" stroke="#f2c14e" stroke-width="1.2" stroke-dasharray="6 5" opacity=".7"/>' +
      skater(70, 196, PURP, "") + skater(120, 194, GOLD, "sr-sk2") + skater(180, 198, TEAL, "sr-sk3") +
      bird(60, 60) +
      '<rect x="100" y="230" width="200" height="20" rx="3" fill="#1b2a1a" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + A + ' font-size="12" fill="' + GOLD + '" textLength="188" lengthAdjust="spacingAndGlyphs">ANACOSTIA PARK SKATING PAVILION</text>',
      sky("ss4", "#79b4e0", "#f6e2b8"));
  }

  /* 5. The corner: Alabama Ave SE & 13th St SE by the Congress Heights stop, SA-ROC tagged on the wall, the city skyline across the river from the hill */
  function srcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ss5)"/>' + stars(30) +
      /* skyline across the river: monument + dome, far off */
      '<path d="M0 100h400v12H0z" fill="#3c2f58"/>' +
      '<path d="M96 100v-52l3-6 3 6v52z" fill="#e9e2d2" opacity=".85"/>' +
      '<path d="M150 100v-10h44v10z" fill="#e9e2d2" opacity=".8"/><path d="M158 90q14-30 28 0z" fill="#e9e2d2" opacity=".85"/><rect x="170" y="54" width="4" height="8" fill="#e9e2d2" opacity=".85"/>' +
      '<rect x="0" y="94" width="60" height="6" fill="#4a3c66"/><rect x="220" y="92" width="80" height="8" fill="#4a3c66"/>' +
      '<g class="sr-glow"><rect x="0" y="99" width="400" height="2" fill="#ffd27a" opacity=".5"/></g>' +
      bricks(108, 214, "#6e3426") +
      '<rect x="0" y="104" width="400" height="6" fill="#4a2a20"/>' +
      tag("SA-ROC", 18, 170, 50, GOLD, -5) + tag("GODDESS GANG", 26, 206, 20, PURP, -3) + tag("HAND TO GOD", 196, 204, 18, TEAL, -4) +
      '<path d="M228 140l8-14 8 14z" fill="' + GOLD + '" stroke="#000" stroke-width="1.5"/><circle cx="236" cy="150" r="3" fill="' + PURP + '"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#8d8b85"/><rect x="0" y="212" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="sr-car sr-car2"><rect x="0" y="236" width="56" height="16" rx="5" fill="' + PURP + '"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="44" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="336" y="58" width="5" height="156" fill="#4a5058"/>' +
      '<rect x="270" y="56" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="333" y="71" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Alabama Ave SE</text>' +
      '<rect x="270" y="80" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="333" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">13th St SE</text>' +
      '<rect x="290" y="108" width="92" height="16" rx="2" fill="#5a2a7a" stroke="#fff" stroke-width="1"/><text x="336" y="119.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff">CONGRESS HEIGHTS</text>',
      sky("ss5", "#0b1030", "#5a3a6a"));
  }

  window.SCENES = { srstation, srsteliz, srarena, srskate, srcorner };
})();
