(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}.blk{animation:blink 1.6s infinite}.blk2{animation:blink 1.6s infinite;animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1;transform:scaleY(1)}30%{opacity:.75;transform:scaleY(.85)}60%{opacity:.95;transform:scaleY(1.1)}}.flk{transform-box:fill-box;transform-origin:50% 100%;animation:flick .9s ease-in-out infinite}.flk2{animation-delay:.35s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:view-box;animation:spin 12s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-28deg)}50%{transform:rotate(28deg)}}.swp{animation:sweep 5s ease-in-out infinite}' +
    '@keyframes flutter{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flutter 1.4s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.lf{animation:fall 5s linear infinite}.lf2{animation-delay:1.7s}.lf3{animation-delay:3.3s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.dft{animation:drift 26s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.bt{animation:boat 18s linear infinite}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.swm{animation:swim 7s ease-in-out infinite}' +
    '@keyframes peek{0%,30%,100%{transform:translateY(14px)}45%,85%{transform:translateY(0)}}.pk{animation:peek 4s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cr1{animation:carR 6s linear infinite}.cr2{animation:carR 6s linear infinite;animation-delay:-3s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.6}100%{transform:translateY(-26px);opacity:0}}.stm{animation:steam 3s ease-out infinite}.stm2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="10"/><ellipse cx="-12" cy="-4" rx="11" ry="8"/></g>';
  /* SIR car (stainless, blue band), w long, at x,y top-left */
  const sirCar = (x, y, w) => {
    let win = ""; for (let i = x + 14; i < x + w - 40; i += 42) win += '<rect x="' + i + '" y="' + (y + 12) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<rect x="' + (x + w - 18) + '" y="' + (y + 12) + '" width="12" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>' +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 54) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 40, y + 54);
  };
  /* green NYC street sign blade */
  const blade = (x, y, w, txt, rot) =>
    '<g transform="rotate(' + (rot || 0) + ' ' + (x + w / 2) + ' ' + (y + 11) + ')"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f7a3d" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text></g>';
  const station = (name, x, y, w) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 14) + '" y="' + (y + 25) + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + name + '</text>' + sir(x + w - 28, y + 18);
  const RED = "#ff4b3e", GRN = "#2fb24c", GOLD = "#ffd34d";
  const gull = (x, y, s) => '<path d="M' + x + ' ' + y + 'q' + (5 * s) + ' ' + (-5 * s) + ' ' + (10 * s) + ' 0q' + (5 * s) + ' ' + (-5 * s) + ' ' + (10 * s) + ' 0" stroke="#f7f3ea" stroke-width="1.6" fill="none"/>';
  const waves = (y, col, op) => { let w = ""; for (let x = -40; x < 440; x += 40) w += '<path d="M' + x + ' ' + y + 'q10-4 20 0t20 0" stroke="' + col + '" stroke-width="1.5" fill="none" opacity="' + op + '"/>'; return '<g class="wv">' + w + '</g>'; };
  const bobCss = '<style>@keyframes bob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(2px) rotate(1.2deg)}}.bob{transform-box:fill-box;transform-origin:50% 100%;animation:bob 3s ease-in-out infinite}.bob2{animation-delay:-1.4s}</style>';
  /* moored sailboat: hull at x (center), waterline y, mast height m */
  const sailboat = (x, y, m, hull, cls) =>
    '<g class="bob ' + (cls || "") + '"><path d="M' + (x - 22) + ' ' + (y - 8) + 'h44l-7 10h-30z" fill="' + hull + '" stroke="#1a1a1a" stroke-width="1"/>' +
    '<rect x="' + (x - 8) + '" y="' + (y - 13) + '" width="14" height="5" rx="1" fill="#e9e4d8"/>' +
    '<line x1="' + x + '" y1="' + (y - 8) + '" x2="' + x + '" y2="' + (y - 8 - m) + '" stroke="#2a2a2a" stroke-width="1.6"/>' +
    '<line x1="' + x + '" y1="' + (y - 8 - m) + '" x2="' + (x - 20) + '" y2="' + (y - 8) + '" stroke="#2a2a2a" stroke-width=".6"/>' +
    '<line x1="' + x + '" y1="' + (y - 8 - m) + '" x2="' + (x + 20) + '" y2="' + (y - 8) + '" stroke="#2a2a2a" stroke-width=".6"/>' +
    '<rect x="' + x + '" y="' + (y - 18) + '" width="16" height="4" rx="2" fill="#1f3c88"/></g>';

  /* 1. Great Kills SIR station: open cut, the train pulling in under the canopy */
  function station1() {
    let posts = ""; for (let x = 20; x < 400; x += 60) posts += '<rect x="' + (x - 2) + '" y="64" width="4" height="112" fill="#56606b"/>';
    let shrubs = ""; for (let x = 0; x < 420; x += 26) shrubs += '<ellipse cx="' + x + '" cy="40" rx="16" ry="9" fill="' + (x % 52 ? "#3f7a2a" : "#4f8f34") + '"/>';
    let blocks = ""; for (let y = 48; y < 176; y += 14) for (let x = (y / 14) % 2 ? -20 : 0; x < 400; x += 40) blocks += '<rect x="' + x + '" y="' + y + '" width="39" height="13" fill="#a8a196"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + '<g class="dft">' + cloud(70, 16, .8) + cloud(260, 22, .6) + '</g>' +
      '<rect y="44" width="400" height="132" fill="#8e877c"/>' + blocks + shrubs +
      '<rect x="160" y="18" width="80" height="26" fill="#d9d2c4"/><path d="M156 18h88l-6-8h-76z" fill="#6b4a3a"/>' +
      /* canopy */
      '<path d="M0 58h400v8H0z" fill="#2f3a46"/><path d="M0 52h400l0 6H0z" fill="#46525f"/>' + posts +
      '<rect x="40" y="66" width="3" height="10" fill="#333"/><rect x="357" y="66" width="3" height="10" fill="#333"/>' +
      station("Great Kills", 90, 70, 220) +
      '<circle cx="40" cy="80" r="3.5" fill="#fff3c4" class="blk"/><circle cx="360" cy="80" r="3.5" fill="#fff3c4" class="blk2"/>' +
      '<g class="anim-train">' + sirCar(-10, 112, 330) + '</g>' +
      '<rect y="174" width="400" height="10" fill="#eab308"/>' +
      '<rect y="184" width="400" height="76" fill="#4a4d52"/>' +
      '<text x="200" y="206" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="#ffd38a">SIR  ·  GREAT KILLS  ·  STATEN ISLAND</text>' +
      tag("PELLE", 20, 246, 28, RED, -5) + tag("FOGEDABOUDID", 150, 248, 26, GRN, -5),
      sky("g1", "#5aa6e6", "#d7ecff"));
  }

  /* 2. Great Kills Harbor: docks, moored sailboats, the water at sunset */
  function harbor() {
    let refl = ""; for (let i = 0; i < 7; i++) refl += '<rect x="' + (300 - i * 3) + '" y="' + (128 + i * 9) + '" width="' + (40 + i * 6) + '" height="3" rx="1.5" fill="#ffcf6b" opacity="' + (0.8 - i * 0.09).toFixed(2) + '"/>';
    let piles = ""; for (let x = 18; x < 260; x += 34) piles += '<rect x="' + x + '" y="186" width="6" height="34" fill="#4a3424"/><rect x="' + (x - 1) + '" y="184" width="8" height="3" fill="#2a1d14"/>';
    return svg(bobCss +
      '<rect width="400" height="260" fill="url(#m1)"/>' +
      '<circle cx="322" cy="118" r="26" fill="#ffd36b"/>' +
      gull(80, 40, 1) + gull(112, 30, .8) + '<g class="dft">' + gull(0, 56, .9) + '</g>' +
      /* far shore treeline */
      '<path d="M0 120q30-10 60-4t60-2t70 2t80-6t70 4t60-2v12H0z" fill="#3a2a3a"/>' +
      '<rect y="128" width="400" height="132" fill="url(#m2)"/>' + refl +
      waves(150, "#ffd8a8", .5) + waves(176, "#ffd8a8", .35) +
      /* sailboat leaving the harbor */
      '<g class="bt"><path d="M0 150h34l-5 6H6z" fill="#f2efe6"/><path d="M16 149V112l16 36z" fill="#f7f3ea"/><path d="M15 149V118l-12 30z" fill="#e9d9c0"/></g>' +
      sailboat(70, 170, 70, "#f2efe6") + sailboat(150, 172, 84, "#1f3c88", "bob2") + sailboat(240, 170, 64, "#f2efe6") + sailboat(330, 176, 76, "#7a1e1e", "bob2") +
      /* main dock */
      '<rect x="0" y="194" width="270" height="8" fill="#9a7650"/><rect x="0" y="202" width="270" height="3" fill="#5c4330"/>' + piles +
      '<rect y="232" width="400" height="28" fill="#1d1824" opacity=".85"/>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#ffd38a">GREAT KILLS HARBOR · SUNSET</text>',
      sky("m1", "#3a2a5e", "#ff9a5a") + sky("m2", "#d9785a", "#2a2a4a"));
  }

  /* 3. Denino's Pizzeria Tavern on Port Richmond Av (since 1937): Staten Island's pizza landmark, the old tavern front with the neon sign glowing, a pie steaming in the window */
  function pizzeria() {
    let bricks = ""; for (let y = 34; y < 224; y += 9) for (let x = (y / 9) % 2 ? 56 : 64; x < 340; x += 16) bricks += '<rect x="' + x + '" y="' + y + '" width="13" height="6" fill="#8a3a24" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p1)"/>' + stars(12) +
      '<rect x="0" y="70" width="50" height="158" fill="#4a3e36"/><rect x="350" y="60" width="50" height="168" fill="#5a4a3e"/>' +
      '<rect x="0" y="90" width="12" height="16" fill="#ffd98a" opacity=".7"/><rect x="24" y="130" width="12" height="16" fill="#ffd98a" opacity=".7"/><rect x="364" y="84" width="12" height="16" fill="#ffd98a" opacity=".7"/>' +
      /* the old tavern building */
      '<rect x="50" y="30" width="300" height="198" fill="#a8482c"/>' + bricks + '<rect x="46" y="26" width="308" height="8" fill="#d8cdb4"/>' +
      [80, 150, 220, 290].map(x => '<rect x="' + x + '" y="44" width="30" height="34" fill="#ffd98a" opacity=".75" stroke="#d8cdb4" stroke-width="2"/>').join("") +
      /* the neon sign */
      '<rect x="80" y="88" width="240" height="44" rx="6" fill="#1a1414" stroke="#3a2a22" stroke-width="3"/>' +
      '<text x="200" y="120" text-anchor="middle" font-family="Brush Script MT, Georgia, serif" font-style="italic" font-weight="700" font-size="30" fill="#ff4b3e" class="blk" style="animation-duration:3s">Denino\'s</text>' +
      '<text x="200" y="120" text-anchor="middle" font-family="Brush Script MT, Georgia, serif" font-style="italic" font-weight="700" font-size="30" fill="none" stroke="#ffb0a8" stroke-width=".8">Denino\'s</text>' +
      '<rect x="90" y="136" width="220" height="16" fill="#1f5a2a"/>' +
      '<text x="200" y="148" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="1" fill="#f7f3ea">PIZZERIA · TAVERN · SINCE 1937</text>' +
      /* window with a pie steaming */
      '<rect x="72" y="160" width="130" height="58" fill="#ffcf7a" opacity=".85" stroke="#d8cdb4" stroke-width="3"/>' +
      '<ellipse cx="137" cy="204" rx="34" ry="9" fill="#c98a3a"/><ellipse cx="137" cy="202" rx="28" ry="6" fill="#e84a2a"/>' + [122, 136, 150].map(x => '<circle cx="' + x + '" cy="202" r="2.5" fill="#f7f3ea"/>').join("") +
      '<g class="stm"><path d="M128 190q-4-8 0-14" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g><g class="stm stm2"><path d="M146 190q4-8 0-14" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<rect x="222" y="158" width="44" height="70" fill="#3a2a1e" stroke="#d8cdb4" stroke-width="2"/><rect x="228" y="166" width="32" height="30" fill="#ffcf7a" opacity=".6"/>' +
      '<rect x="280" y="160" width="58" height="58" fill="#2a1a12" stroke="#d8cdb4" stroke-width="2"/>' +
      '<text x="309" y="194" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + GRN + '" class="blk2">OPEN</text>' +
      /* sidewalk + Port Richmond Av */
      '<rect y="228" width="400" height="8" fill="#9a9a9a"/><rect y="236" width="400" height="24" fill="#2c2c30"/>' +
      '<rect x="0" y="247" width="400" height="2" fill="#f2c200" opacity=".7"/>' +
      '<g class="cr1"><rect x="0" y="238" width="46" height="14" rx="4" fill="#3d6fb5"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="372" y="20" width="4" height="208" fill="#4a4a4a"/>' + blade(262, 6, 136, "Port Richmond Av", 0) +
      tag("PELLE", 6, 224, 18, GOLD, -6),
      sky("p1", "#141a34", "#4a3a5a"));
  }
  /* 4. Great Kills Park: the beach, dune grass, and Crooke's Point running out into the bay */
  function beach() {
    let grass = ""; for (let x = 4; x < 400; x += 9) grass += '<path d="M' + x + ' 206q2-12 6-18M' + (x + 3) + ' 206q-1-10-5-16" stroke="#7a8f3a" stroke-width="1.4" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b1)"/>' + '<circle cx="70" cy="44" r="18" fill="#fff4c2"/>' +
      '<g class="dft">' + cloud(150, 30, .8) + cloud(330, 50, .6) + '</g>' +
      gull(220, 60, 1) + gull(250, 52, .8) +
      /* bay */
      '<rect y="112" width="400" height="80" fill="url(#b2)"/>' + waves(130, "#ffffff", .4) + waves(154, "#ffffff", .3) +
      /* Crooke\'s Point spit with a channel marker */
      '<path d="M400 118q-60 2-110 10q-30 5-34 10q40 4 144 2z" fill="#e6d4a2"/><path d="M400 120q-50 2-92 9l8 2q40-6 84-6z" fill="#5f7a3a"/>' +
      '<rect x="268" y="118" width="3" height="16" fill="#3a3a3a"/><rect x="264" y="112" width="11" height="8" fill="#2fa34a"/><circle cx="269.5" cy="109" r="2.5" fill="#7dff8a" class="blk"/>' +
      /* fishing jetty */
      '<path d="M120 192l60-56h8l-56 56z" fill="#6b6b6b"/>' +
      '<line x1="178" y1="140" x2="190" y2="122" stroke="#222" stroke-width="1.2"/><path d="M190 122q6 10 4 20" stroke="#ddd" stroke-width=".6" fill="none"/>' +
      /* surf line + sand */
      '<path d="M0 186q100-8 200-2t200-4v12H0z" fill="#f4f1e8" opacity=".8"/>' +
      '<path d="M0 190q100-6 200-2t200-4v76H0z" fill="#e6d4a2"/>' +
      '<path d="M0 206q60-20 130-8t140-6t130 4v68H0z" fill="#d8c08a"/>' + grass +
      /* boardwalk path and sign */
      '<path d="M190 260l16-52h16l-6 52z" fill="#a07c52"/>' +
      '<rect x="40" y="214" width="120" height="30" rx="3" fill="#5a3b22" stroke="#efe6d2" stroke-width="1.5"/><rect x="58" y="244" width="5" height="14" fill="#5a3b22"/><rect x="137" y="244" width="5" height="14" fill="#5a3b22"/>' +
      '<text x="100" y="227" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" fill="#efe6d2">GREAT KILLS PARK</text>' +
      '<text x="100" y="239" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8" fill="#ffd38a">CROOKE\'S POINT →</text>' +
      '<g class="swm"><path d="M300 236h40l-20-8z" fill="#c4161c"/><line x1="320" y1="228" x2="320" y2="252" stroke="#444" stroke-width="1.5"/><path d="M300 236q20 6 40 0" fill="#f7f3ea"/></g>',
      sky("b1", "#4aa3e6", "#d9f0ff") + sky("b2", "#2d78a8", "#5fb0c8"));
  }

  /* 5. Hylan Blvd & Giffords Ln: the row of shops, the wall up top tagged */
  function corner() {
    let bricks = ""; for (let y = 40; y < 132; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#7a3a2c"/>';
    const shop = (x, w, word, awn) =>
      '<rect x="' + x + '" y="132" width="' + w + '" height="90" fill="#d9cdb4"/>' +
      '<rect x="' + (x + 4) + '" y="136" width="' + (w - 8) + '" height="18" fill="#1a1a1a"/>' +
      '<text x="' + (x + w / 2) + '" y="150" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="2" fill="#f7f3ea">' + word + '</text>' +
      '<path d="M' + (x + 2) + ' 156h' + (w - 4) + 'l6 14h-' + (w + 8) + 'z" fill="' + awn + '"/>' +
      '<rect x="' + (x + 8) + '" y="174" width="' + (w - 40) + '" height="40" fill="#2c3e57" opacity=".85"/>' +
      '<rect x="' + (x + w - 26) + '" y="176" width="18" height="46" fill="#3a2a1e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      '<rect y="38" width="400" height="94" fill="#5e2b20"/>' + bricks +
      tag("JOJO", 16, 96, 40, RED, -6) + tag("PELLEGRINO", 84, 122, 30, "#fff", -5) + tag("SHAOLIN", 112, 70, 24, GRN, -8) +
      '<g class="drp"><rect x="50" y="100" width="3" height="10" fill="' + RED + '"/></g><g class="drp" style="animation-delay:1s"><rect x="160" y="124" width="3" height="8" fill="#fff"/></g>' +
      shop(0, 96, "DELI", "#1f8a3a") + shop(96, 96, "BAKERY", "#c4161c") + shop(192, 96, "BARBER", "#1f3c88") + shop(288, 112, "PIZZERIA", "#d97a1a") +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr1"><rect x="0" y="236" width="44" height="14" rx="4" fill="#f2c200"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="286" y="10" width="6" height="214" fill="#4a4a4a"/>' +
      blade(226, 12, 126, "Hylan Blvd", 0) + blade(230, 38, 118, "Giffords Ln", 0),
      sky("c1", "#f08a4b", "#2a1d3d"));
  }

  window.SCENES = { station: station1, harbor, pizzeria, beach, corner };
})();
