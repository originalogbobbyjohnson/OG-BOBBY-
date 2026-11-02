/* Queensbridge opening scenes for the Roxanne Shante game: the Queen of Rox, the Juice Crew, 1984. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:center;animation:spin 1.8s linear infinite}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.25}}' +
    '.blk{animation:blink 1.4s infinite}' +
    '@keyframes vu{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}' +
    '.vu{transform-box:fill-box;transform-origin:bottom;animation:vu .9s ease-in-out infinite}.vu2{animation-delay:-.3s}.vu3{animation-delay:-.6s}.vu4{animation-delay:-.15s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes rope{0%{transform:scaleY(1)}50%{transform:scaleY(-1)}100%{transform:scaleY(1)}}' +
    '.rope{transform-box:fill-box;transform-origin:center;animation:rope .9s linear infinite}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}' +
    '.hop{animation:hop .9s ease-in-out infinite}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.thump{transform-box:fill-box;transform-origin:center;animation:thump .45s ease-in-out infinite}' +
    '@keyframes turn{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}' +
    '.turn{transform-box:fill-box;transform-origin:center;animation:turn 5s ease-in-out infinite}' +
    '@keyframes boat{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '.boat{animation:boat 18s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const vinyl = (cx, cy, r, c, cls) =>
    '<g' + (cls ? ' class="' + cls + '"' : "") + '><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .74) + '" fill="none" stroke="#2c2c2c" stroke-width="1"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .36) + '" fill="' + c + '"/><rect x="' + (cx - r * .22) + '" y="' + (cy - r * .2) + '" width="' + (r * .16) + '" height="' + (r * .08) + '" fill="#fff" opacity=".7"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .06) + '" fill="#e8e0cc"/></g>';
  /* a person seen from behind / in silhouette, no face */
  const fig = (x, y, c, cls) =>
    '<g' + (cls ? ' class="' + cls + '"' : "") + '><circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="#1a1020"/><path d="M' + (x - 8) + ' ' + y + 'l2 -22q6 -4 12 0l2 22z" fill="' + c + '"/>' +
    '<rect x="' + (x - 6) + '" y="' + y + '" width="4" height="14" fill="#1a1020"/><rect x="' + (x + 2) + '" y="' + y + '" width="4" height="14" fill="#1a1020"/></g>';
  /* boom box */
  const boombox = (x, y, s) => {
    const k = s || 1;
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + k + ')">' +
      '<path d="M14 0q24 -14 48 0" stroke="#c9ced6" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="0" width="76" height="40" rx="5" fill="#2b2b33" stroke="#9aa3ad" stroke-width="1.5"/>' +
      '<g class="thump"><circle cx="16" cy="24" r="11" fill="#111" stroke="#9aa3ad"/><circle cx="16" cy="24" r="4" fill="#555"/></g>' +
      '<g class="thump"><circle cx="60" cy="24" r="11" fill="#111" stroke="#9aa3ad"/><circle cx="60" cy="24" r="4" fill="#555"/></g>' +
      '<rect x="30" y="14" width="16" height="14" rx="1" fill="#171a20" stroke="#9aa3ad"/><circle cx="34" cy="21" r="2.5" fill="#c9ced6" class="spin"/><circle cx="42" cy="21" r="2.5" fill="#c9ced6" class="spin"/>' +
      '<rect x="28" y="4" width="20" height="5" fill="' + GOLD + '"/><rect x="30" y="32" width="4" height="3" fill="' + PINK + '"/><rect x="36" y="32" width="4" height="3" fill="' + TEAL + '"/><rect x="42" y="32" width="4" height="3" fill="' + GOLD + '"/></g>';
  };
  const GOLD = "#f2c14e", PINK = "#e84a8a", TEAL = "#3fc1c9", PURPLE = "#b933ad", YELLOW = "#fccc0a", BRICK = "#9a4a34";

  /* 1. The 7 pulling into Queensboro Plaza at golden hour, high on the el, the Queensboro Bridge towers glowing behind */
  function train() {
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="20" rx="3" fill="#fff4d6" opacity=".9"/>';
    let truss = "";
    for (let x = 0; x <= W; x += 40) truss += '<path d="M' + x + ' 188L' + (x + 20) + ' 206L' + (x + 40) + ' 188" fill="none" stroke="#5b4a5e" stroke-width="3"/>';
    /* bridge: two spired towers and the cantilever truss in the distance */
    let br = '<path d="M0 104L60 96L120 104L180 96L240 104L300 96L360 104L400 100" stroke="#7d7488" stroke-width="3" fill="none"/>' +
      '<path d="M0 116H400" stroke="#7d7488" stroke-width="3"/>';
    for (let x = 0; x < 400; x += 12) br += '<path d="M' + x + ' 116L' + (x + 6) + ' 102L' + (x + 12) + ' 116" stroke="#7d7488" stroke-width="1" fill="none"/>';
    [110, 290].forEach(x => { br += '<rect x="' + (x - 6) + '" y="64" width="12" height="52" fill="#7d7488"/><path d="M' + (x - 6) + ' 64l6 -14 6 14z" fill="#7d7488"/><path d="M' + (x - 8) + ' 64h16" stroke="#7d7488" stroke-width="2"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<circle cx="360" cy="106" r="22" fill="#ffd27a" opacity=".85"/>' +
      '<g class="cld"><ellipse cx="0" cy="30" rx="44" ry="7" fill="#fff" opacity=".35"/></g><g class="cld cld2"><ellipse cx="0" cy="56" rx="30" ry="5" fill="#fff" opacity=".3"/></g>' +
      br +
      /* canopy and posts */
      '<path d="M0 20h400v9H0z" fill="#5b4a5e"/><rect x="18" y="29" width="5" height="148" fill="#5b4a5e"/><rect x="377" y="29" width="5" height="148" fill="#5b4a5e"/>' +
      /* station sign */
      '<rect x="62" y="42" width="276" height="36" rx="4" fill="#111"/><rect x="62" y="42" width="276" height="4" fill="#fff"/>' +
      '<text x="74" y="68" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Queensboro Plaza</text>' +
      bullet(258, 61, "7", PURPLE) + bullet(284, 61, "N", YELLOW, true) + bullet(310, 61, "W", YELLOW, true) +
      '<g class="anim-train">' +
        '<rect x="8" y="116" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="304" height="4" fill="#2b2f36"/>' + windows +
        '<circle cx="304" cy="168" r="4" fill="#fff6c2"/>' + bullet(292, 138, "7", PURPLE) +
      '</g>' +
      /* the 12-inch poster on the platform windscreen at the far end */
      '<rect x="318" y="100" width="56" height="76" fill="#2a1f3a" stroke="#5b4a5e" stroke-width="3"/>' + '<rect x="324" y="106" width="44" height="44" fill="' + PINK + '"/>' + vinyl(358, 128, 18, GOLD, "spin") + '<rect x="324" y="106" width="28" height="44" fill="' + PINK + '"/>' +
      '<text x="346" y="162" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#fff">ROXANNE\'S</text><text x="346" y="171" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="' + GOLD + '">REVENGE · 1984</text>' +
      '<rect x="0" y="178" width="400" height="10" fill="#eab308"/>' + truss +
      '<rect x="0" y="206" width="400" height="54" fill="#1c1420"/>' +
      tag("ROXANNE'S REVENGE", 22, 244, 24, GOLD, -4) + tag("SHANTE", 282, 248, 28, PINK, -8),
      sky("g1", "#3b2a5e", "#f29a6b"));
  }

  /* 2. On the air, 1984: the radio studio, the ON AIR light blinking, VU meters bouncing, the reels turning, her record on the platter */
  function radio() {
    let meters = "";
    [0, 1, 2, 3].forEach(i => { meters += '<rect class="vu vu' + (i + 1) + '" x="' + (232 + i * 16) + '" y="104" width="10" height="40" fill="' + [TEAL, GOLD, PINK, TEAL][i] + '"/>'; });
    let panels = "";
    for (let x = 0; x < 400; x += 20) panels += '<rect x="' + x + '" y="0" width="18" height="130" fill="#2a1f3a"/><circle cx="' + (x + 9) + '" cy="20" r="1.5" fill="#3e3054"/><circle cx="' + (x + 9) + '" cy="60" r="1.5" fill="#3e3054"/><circle cx="' + (x + 9) + '" cy="100" r="1.5" fill="#3e3054"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1428"/>' + panels +
      /* ON AIR light */
      '<rect x="150" y="14" width="100" height="30" rx="5" fill="#2a0c12" stroke="#555"/><g class="blk"><rect x="154" y="18" width="92" height="22" rx="3" fill="#ff3b4a"/>' +
      '<text x="200" y="35" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="#fff">ON AIR</text></g>' +
      /* reel-to-reel deck */
      '<rect x="24" y="56" width="110" height="88" rx="4" fill="#b9bec6" stroke="#555" stroke-width="2"/>' +
      '<g class="spin"><circle cx="52" cy="86" r="20" fill="#2b2b33"/><path d="M52 66v40M32 86h40" stroke="#777" stroke-width="3"/><circle cx="52" cy="86" r="5" fill="#ddd"/></g>' +
      '<g class="spin"><circle cx="106" cy="86" r="20" fill="#2b2b33"/><path d="M106 66v40M86 86h40" stroke="#777" stroke-width="3"/><circle cx="106" cy="86" r="5" fill="#ddd"/></g>' +
      '<path d="M52 106L79 126L106 106" stroke="#5a3a20" stroke-width="2" fill="none"/><rect x="40" y="128" width="78" height="10" rx="2" fill="#444"/>' +
      /* window to the bridge at night */
      '<rect x="146" y="56" width="74" height="88" fill="#0d1630" stroke="#555" stroke-width="3"/>' + '<path d="M146 116h74" stroke="#9aa3ad" stroke-width="1.5"/>' +
      '<path d="M150 112l10 -20 10 20 10 -20 10 20 10 -20 10 20" stroke="#c9ced6" stroke-width="1.2" fill="none"/><circle cx="198" cy="72" r="5" fill="#f7f3ea" opacity=".85"/>' +
      '<circle cx="160" cy="114" r="1.6" fill="' + GOLD + '"/><circle cx="180" cy="114" r="1.6" fill="' + GOLD + '"/><circle cx="200" cy="114" r="1.6" fill="' + GOLD + '"/>' +
      /* meter bridge */
      '<rect x="226" y="98" width="70" height="50" rx="3" fill="#111" stroke="#555"/>' + meters +
      /* the console desk */
      '<path d="M0 160L40 146H360L400 160V260H0z" fill="#3a2a4a"/><rect x="0" y="160" width="400" height="8" fill="#4a3a5e"/>' +
      (function () { let f = ""; for (let i = 0; i < 12; i++) { const x = 140 + i * 14; f += '<rect x="' + x + '" y="176" width="4" height="36" fill="#111"/><rect x="' + (x - 3) + '" y="' + (184 + (i * 7) % 20) + '" width="10" height="6" rx="1" fill="' + (i % 3 ? "#d0d4da" : PINK) + '"/>'; } return f; })() +
      /* turntable with the record spinning */
      '<rect x="20" y="172" width="104" height="70" rx="4" fill="#2b2b33" stroke="#555"/>' + vinyl(66, 207, 28, GOLD, "spin") +
      '<path d="M112 182v20l-24 10" stroke="#c9ced6" stroke-width="2.5" fill="none"/><circle cx="112" cy="182" r="3" fill="#c9ced6"/>' +
      /* the microphone on its boom */
      '<path d="M380 260V196L330 150" stroke="#777" stroke-width="4" fill="none"/>' +
      '<g class="turn"><rect x="312" y="120" width="20" height="38" rx="9" fill="#9aa3ad" stroke="#333" stroke-width="2"/><path d="M314 132h16M314 140h16M314 148h16" stroke="#555"/></g>' +
      /* notes rising from the record */
      '<g class="note"><text x="60" y="166" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="note note2"><text x="80" y="166" font-size="14" fill="' + PINK + '">&#9835;</text></g><g class="note note3"><text x="44" y="166" font-size="14" fill="' + TEAL + '">&#9834;</text></g>' +
      '<rect x="296" y="222" width="90" height="24" rx="3" fill="#111" stroke="' + GOLD + '"/><text x="341" y="239" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="' + GOLD + '">REQUEST LINE</text>');
  }

  /* 3. Album world, Roxanne's Revenge (1984): the answer record cut in Marley Marl's apartment studio in the Bridge, the reel-to-reel turning, a 14-year-old at the mic, the Houses out the window */
  function jam() {
    let houses = "";
    [[214, 46, 60], [282, 36, 70], [356, 52, 36]].forEach(b => { houses += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (110 - b[1]) + '" fill="' + BRICK + '"/>';
      for (let y = b[1] + 8; y < 104; y += 12) for (let x = b[0] + 6; x < b[0] + b[2] - 6; x += 12) houses += '<rect x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((x + y) % 4 ? "#3a2a2a" : GOLD) + '"/>'; });
    let paper = ""; for (let x = 0; x < 400; x += 24) paper += '<path d="M' + x + ' 0v150" stroke="#5a3a4a" stroke-width="10" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="#3a2440"/>' + paper +
      /* the window onto Queensbridge */
      '<rect x="206" y="24" width="186" height="96" fill="#1a2a50" stroke="#c9b28a" stroke-width="5"/>' + stars(6) + houses + '<path d="M299 24v96M206 72h186" stroke="#c9b28a" stroke-width="3"/>' +
      /* the 12-inch on the wall */
      vinyl(98, 60, 30, GOLD, "spin") + '<rect x="14" y="20" width="80" height="80" fill="' + PINK + '"/>' +
      '<text x="54" y="48" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" fill="#fff">ROXANNE\'S</text><text x="54" y="62" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" fill="#fff">REVENGE</text><text x="54" y="90" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">1984</text>' +
      /* the reel-to-reel on the desk */
      '<path d="M0 170h400v90H0z" fill="#4a3426"/><rect x="0" y="166" width="400" height="6" fill="#6a4a30"/>' +
      '<rect x="110" y="100" width="120" height="70" rx="4" fill="#b9bec6" stroke="#555" stroke-width="2"/>' +
      '<g class="spin"><circle cx="140" cy="130" r="22" fill="#2b2b33"/><path d="M140 108v44M118 130h44" stroke="#777" stroke-width="3"/><circle cx="140" cy="130" r="5" fill="#ddd"/></g>' +
      '<g class="spin"><circle cx="200" cy="130" r="22" fill="#2b2b33"/><path d="M200 108v44M178 130h44" stroke="#777" stroke-width="3"/><circle cx="200" cy="130" r="5" fill="#ddd"/></g>' +
      '<path d="M140 152L170 162L200 152" stroke="#5a3a20" stroke-width="2" fill="none"/><text x="170" y="167" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="6" fill="#333">MARLEY MARL</text>' +
      /* meters */
      '<rect x="20" y="120" width="70" height="46" rx="3" fill="#111" stroke="#555"/>' + [0, 1, 2, 3].map(i => '<rect class="vu vu' + (i + 1) + '" x="' + (28 + i * 15) + '" y="124" width="9" height="38" fill="' + [TEAL, GOLD, PINK, TEAL][i] + '"/>').join("") +
      /* the mic and the young MC from behind */
      '<path d="M320 260V150" stroke="#777" stroke-width="4"/><g class="turn"><rect x="312" y="122" width="16" height="30" rx="8" fill="#9aa3ad" stroke="#333" stroke-width="2"/></g>' +
      '<g class="hop" style="animation-duration:1.6s"><circle cx="352" cy="168" r="14" fill="#1a1020"/><path d="M340 160q-10-8-4-18" stroke="#1a1020" stroke-width="6" fill="none"/><path d="M334 260v-60q0-18 18-18t18 18v60z" fill="' + PINK + '"/>' +
      '<path d="M338 190q-14-6-18-18" stroke="' + PINK + '" stroke-width="7" fill="none"/></g>' +
      '<g class="note"><text x="300" y="120" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="note note2"><text x="280" y="126" font-size="14" fill="' + TEAL + '">&#9835;</text></g>' +
      tag("THE ANSWER", 20, 232, 28, GOLD, -4) + tag("QUEEN OF ROX", 130, 254, 20, TEAL, -3));
  }

  /* 4. Socrates Sculpture Park up Vernon Blvd: big painted steel sculptures on the lawn by the East River, a mobile turning in the wind */
  function sculpture() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* Manhattan across the river */
      '<g fill="#7a6f8f">' + '<rect x="0" y="100" width="30" height="40"/><rect x="34" y="84" width="22" height="56"/><rect x="60" y="94" width="30" height="46"/><rect x="94" y="70" width="16" height="70"/><rect x="114" y="96" width="34" height="44"/>' +
      '<rect x="230" y="90" width="26" height="50"/><rect x="260" y="76" width="18" height="64"/><rect x="282" y="98" width="38" height="42"/><rect x="324" y="86" width="22" height="54"/><rect x="350" y="102" width="50" height="38"/></g>' +
      '<rect x="0" y="140" width="400" height="30" fill="#4c6b8a"/><path d="M0 150h400M0 160h400" stroke="#6f8eaa" stroke-width="1" opacity=".6"/>' +
      '<g class="boat"><path d="M0 150h34l-6 8H6z" fill="#f7f3ea"/><rect x="10" y="142" width="12" height="8" fill="#f7f3ea"/></g>' +
      /* lawn */
      '<path d="M0 168Q200 158 400 168V260H0z" fill="#5f9a3e"/><path d="M0 200Q200 192 400 202" stroke="#4f8634" stroke-width="3" fill="none"/>' +
      /* sculpture 1: red steel arch */
      '<path d="M40 236V170Q80 120 120 170V236h-14V176Q80 144 54 176V236z" fill="#d8402e" stroke="#7a1f14" stroke-width="2"/>' +
      /* sculpture 2: a tall mobile, arms turning */
      '<rect x="196" y="110" width="6" height="126" fill="#222"/><g class="turn" style="transform-origin:199px 110px">' +
        '<path d="M150 110H250" stroke="#222" stroke-width="3"/><circle cx="150" cy="118" r="10" fill="' + GOLD + '"/><path d="M240 110v12" stroke="#222" stroke-width="2"/><rect x="232" y="122" width="18" height="18" fill="' + TEAL + '"/>' +
        '<path d="M170 110v20" stroke="#222" stroke-width="2"/><path d="M162 130l8 14 8 -14z" fill="' + PINK + '"/></g>' +
      /* sculpture 3: stacked painted cubes */
      '<rect x="292" y="206" width="40" height="30" fill="' + TEAL + '" stroke="#1f5f62" stroke-width="2"/><rect x="300" y="178" width="28" height="28" fill="' + GOLD + '" stroke="#8a6512" stroke-width="2" transform="rotate(8 314 192)"/>' +
      '<rect x="304" y="152" width="20" height="24" fill="' + PINK + '" stroke="#7a1f4a" stroke-width="2" transform="rotate(-10 314 164)"/>' +
      /* path, bench, a kid with a boombox on the shoulder (silhouette) */
      '<rect x="138" y="220" width="40" height="5" fill="#6b4a2a"/><rect x="142" y="225" width="3" height="10" fill="#6b4a2a"/><rect x="171" y="225" width="3" height="10" fill="#6b4a2a"/>' +
      fig(366, 232, PINK) + boombox(352, 192, .3) +
      '<g class="cld"><ellipse cx="0" cy="30" rx="44" ry="7" fill="#fff" opacity=".6"/></g>' +
      '<rect x="12" y="242" width="160" height="14" rx="2" fill="#111" opacity=".75"/><text x="92" y="253" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">SOCRATES SCULPTURE PARK</text>',
      sky("g4", "#f5b77a", "#fbe3c2"));
  }

  /* 5. 12th St and 40th Av inside Queensbridge: green street signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#8a4230"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(18) +
      /* the Queensboro Bridge head-on: the Queens tower portal, the tram gliding by */
      '<g><circle cx="186" cy="40" r="56" fill="#ff7ab0" opacity=".1"/><path d="M142 28V94M156 28V94" stroke="#a49ab8" stroke-width="3"/><path d="M142 28L156 38M156 28L142 38" stroke="#a49ab8" stroke-width="1.1"/><path d="M142 38L156 48M156 38L142 48" stroke="#a49ab8" stroke-width="1.1"/><path d="M142 48L156 58M156 48L142 58" stroke="#a49ab8" stroke-width="1.1"/><path d="M142 58L156 68M156 58L142 68" stroke="#a49ab8" stroke-width="1.1"/><path d="M142 68L156 78M156 68L142 78" stroke="#a49ab8" stroke-width="1.1"/><path d="M142 78L156 88M156 78L142 88" stroke="#a49ab8" stroke-width="1.1"/><path d="M142 88L156 98M156 88L142 98" stroke="#a49ab8" stroke-width="1.1"/><path d="M216 28V94M230 28V94" stroke="#a49ab8" stroke-width="3"/><path d="M216 28L230 38M230 28L216 38" stroke="#a49ab8" stroke-width="1.1"/><path d="M216 38L230 48M230 38L216 48" stroke="#a49ab8" stroke-width="1.1"/><path d="M216 48L230 58M230 48L216 58" stroke="#a49ab8" stroke-width="1.1"/><path d="M216 58L230 68M230 58L216 68" stroke="#a49ab8" stroke-width="1.1"/><path d="M216 68L230 78M230 68L216 78" stroke="#a49ab8" stroke-width="1.1"/><path d="M216 78L230 88M230 78L216 88" stroke="#a49ab8" stroke-width="1.1"/><path d="M216 88L230 98M230 88L216 98" stroke="#a49ab8" stroke-width="1.1"/><path d="M156 30H216M156 46H216M156 30L216 46M216 30L156 46" stroke="#a49ab8" stroke-width="2"/><path d="M156 62H216M156 54L186 62L216 54" stroke="#a49ab8" stroke-width="1.6" fill="none"/><rect x="138" y="83" width="96" height="6" fill="#a49ab8"/><path d="M139.4 28L142 8L144.6 28Z" fill="#a49ab8"/><circle cx="142" cy="7" r="1.8" fill="#a49ab8"/><path d="M153.4 28L156 8L158.6 28Z" fill="#a49ab8"/><circle cx="156" cy="7" r="1.8" fill="#a49ab8"/><path d="M213.4 28L216 8L218.6 28Z" fill="#a49ab8"/><circle cx="216" cy="7" r="1.8" fill="#a49ab8"/><path d="M227.4 28L230 8L232.6 28Z" fill="#a49ab8"/><circle cx="230" cy="7" r="1.8" fill="#a49ab8"/><path d="M142 32L11 76M142 86L11 90" stroke="#a49ab8" stroke-width="2.6"/><path d="M130 35V86.3L118 38M118 38V86.5M106 41.1V86.8L94 44.1M94 44.1V87.1M82 47.1V87.4L70 50.1M70 50.1V87.6M58 53.1V87.9L46 56.1M46 56.1V88.2M34 59.2V88.5L22 62.2M22 62.2V88.7M10 65.2V89L-2 68.2" stroke="#a49ab8" stroke-width="1" fill="none"/><path d="M230 32L361 76M230 86L361 90" stroke="#a49ab8" stroke-width="2.6"/><path d="M242 35V86.3L254 38M254 38V86.5M266 41.1V86.8L278 44.1M278 44.1V87.1M290 47.1V87.4L302 50.1M302 50.1V87.6M314 53.1V87.9L326 56.1M326 56.1V88.2M338 59.2V88.5L350 62.2M350 62.2V88.7M362 65.2V89L374 68.2" stroke="#a49ab8" stroke-width="1" fill="none"/><circle cx="178" cy="79" r="1.6" fill="#fff6c2"><animate attributeName="r" values="0.6;3.2;0.6" dur="3s" begin="0s" repeatCount="indefinite"/></circle><circle cx="194" cy="79" r="1.6" fill="#fff6c2"><animate attributeName="r" values="0.6;3.2;0.6" dur="3s" begin="-1.5s" repeatCount="indefinite"/></circle><path d="M400 6L262 92" stroke="#6a6080" stroke-width="1.2"/><g><path d="M0 0v-6" stroke="#6a6080" stroke-width="1.2"/><rect x="-9" y="0" width="18" height="11" rx="2" fill="#d23a3a"/><rect x="-6" y="2" width="12" height="4" fill="#ffd9a8"/><animateMotion dur="12s" repeatCount="indefinite" keyPoints="0;1;1;0;0" keyTimes="0;.42;.5;.92;1" calcMode="linear" path="M392 17L290 81"/></g></g>' + 
      '<rect x="0" y="90" width="400" height="126" fill="#6e3424"/>' + bricks +
      tag("JUICE CREW", 46, 134, 30, GOLD, -6) + tag("GO ON GIRL", 226, 164, 22, PINK, -4) + tag("ROXANNE SHANTE", 56, 202, 24, TEAL, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><rect x="0" y="214" width="400" height="5" fill="#8a8a8e"/>' +
      /* streetlight */
      '<rect x="356" y="74" width="5" height="142" fill="#2f3a33"/><path d="M358 74q-14 -12 -30 -6" stroke="#2f3a33" stroke-width="4" fill="none"/><ellipse cx="326" cy="70" rx="9" ry="4" fill="#ffe9a8" class="flk"/>' +
      /* sign pole */
      '<rect x="28" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(2, 34, 58, "12 St") + sign(2, 56, 58, "40 Av") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="#c23a2e"/><rect x="12" y="220" width="36" height="12" rx="4" fill="#c23a2e"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>' +
      boombox(250, 222, .4),
      sky("g5", "#140c26", "#3a2a5e"));
  }

  window.SCENES = { train, radio, jam, sculpture, corner };
})();
