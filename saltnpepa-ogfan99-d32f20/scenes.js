/* Jamaica, Queens opening scenes for the Salt-N-Pepa game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '.globe{transform-box:fill-box;transform-origin:50% 50%;animation:spin 40s linear infinite}' +
    '@keyframes jet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.8)}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.2s ease-in-out infinite}.jet2{animation-delay:-.6s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3.4s ease-in-out infinite}.beam2{animation-delay:-1.7s}' +
    '@keyframes twk{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.twk{animation:twk 1.4s infinite}.twk2{animation-delay:-.7s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-80px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bnc{animation:bounce .9s ease-in-out infinite}.bnc2{animation-delay:-.45s}' +
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
  const PINK = "#ff4fa3", TEAL = "#2ad1c9", GOLD = "#ffd23f";

  /* 1. Jamaica Center, the end of the E: the train easing up to the bumper, the tiled name band, the crew's pink and teal tags and a boombox on the bench */
  function train() {
    const { svg, tag, T, bullet } = LM1;
    let tiles = ""; for (let y = 10; y < 160; y += 9) tiles += '<path d="M0 ' + y + 'h400" stroke="#00000012"/>';
    for (let x = 0; x < 400; x += 18) tiles += '<path d="M' + x + ' 0v160" stroke="#00000008"/>';
    let mosaic = ""; for (let x = 0; x < 400; x += 10) mosaic += '<rect x="' + x + '" y="20" width="10" height="10" fill="' + ["#ff4fa3", "#2ad1c9", "#ffd23f"][(x / 10) % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#ece6d4"/>' + tiles + mosaic +
      '<rect x="0" y="30" width="400" height="3" fill="#333"/>' +
      '<rect x="110" y="40" width="180" height="26" rx="3" fill="#111"/><rect x="110" y="40" width="180" height="3" fill="#fff"/>' +
      T(122, 60, "Jamaica Center", 14, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) + bullet(272, 53, "E", "#0039a6", false, 9) +
      '<rect x="20" y="40" width="10" height="120" fill="#4a4a50"/><rect x="370" y="40" width="10" height="120" fill="#4a4a50"/>' +
      '<g class="anim-train">' + LM1.subCar(-40, 82, 330, "#0039a6", bullet(270, 122, "E", "#0039a6", false, 9)) + '</g>' +
      '<rect x="304" y="122" width="26" height="22" fill="#d7263d"/><path d="M304 122l26 22M330 122l-26 22" stroke="#ffd23f" stroke-width="3"/>' +
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/><rect x="0" y="152" width="400" height="108" fill="#8f8a80"/>' +
      /* bench, boombox bumping */
      '<rect x="290" y="210" width="96" height="10" rx="2" fill="#5a3a22"/><rect x="296" y="220" width="4" height="16" fill="#333"/><rect x="376" y="220" width="4" height="16" fill="#333"/>' +
      '<g class="lm-bob"><rect x="306" y="182" width="64" height="28" rx="4" fill="#222"/><circle cx="322" cy="196" r="9" fill="#555"/><circle cx="354" cy="196" r="9" fill="#555"/><circle cx="322" cy="196" r="4" fill="#ff4fa3"/><circle cx="354" cy="196" r="4" fill="#2ad1c9"/><rect x="328" y="174" width="20" height="4" fill="#222"/></g>' +
      tag("SALT &amp; PEPA", 14, 202, 34, "#ff4fa3", -5) + tag("SPINDERELLA", 30, 242, 24, "#2ad1c9", -3),
      "");
  }

  /* 2. Queensborough Community College in Bayside, where Salt and Pepa met as students: the modern brick buildings up on the hill, Little Neck Bay below */
  function unisphere() {
    const { svg, sky, tag, T, plaque, tree, cloud, fig, wins, brickLines } = LM1;
    const bldg = (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' + brickLines(x, y, w, h, "#00000022", 6) +
      '<rect x="' + x + '" y="' + (y + h * .35) + '" width="' + w + '" height="' + (h * .2) + '" fill="#2a3a4a"/>' + '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#e8e2d2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sp2)"/>' + cloud("lm-drift", 0, 26, 1) + cloud("lm-drift lm-d2", 0, 48, .8, .6) +
      /* Little Neck Bay off to the right */
      '<rect x="0" y="118" width="400" height="20" fill="#4a90b8"/><g class="lm-boat"><path d="M330 120q10 6 22 0l-3 5h-16z" fill="#fff"/><path d="M340 120v-14l8 12z" fill="#fff"/></g>' +
      '<path d="M0 130q140-40 260-10t140 20V260H0z" fill="#5a8a3a"/>' +
      bldg(30, 70, 110, 70, "#9c5a3e") + bldg(150, 54, 140, 86, "#a86a4a") + bldg(300, 86, 70, 54, "#8e4e36") +
      '<rect x="200" y="96" width="40" height="44" fill="#cfe6ff" opacity=".7"/>' +
      tree(16, 150, 14) + tree(384, 150, 14, "#3f7a3a", "lm-swayb lm-s2") + tree(140, 160, 12) +
      /* the walk and the students */
      '<path d="M0 200q200-24 400 0v20q-200-24-400 0z" fill="#d8ccb0"/>' +
      '<g class="lm-walk">' + fig(80, 210, "#2a2a3a", null, .7) + '</g><g class="lm-walk lm-w2">' + fig(150, 206, "#3a1a2a", null, .7) + '</g><g class="lm-walk">' + fig(260, 208, "#1a2a3a", null, .7) + '</g>' +
      plaque(8, 8, 200, "QUEENSBOROUGH COMMUNITY COLLEGE", "BAYSIDE, QUEENS", "#2a0a1a", "#ff4fa3") +
      tag("SHOWSTOPPER", 190, 252, 24, "#ff4fa3", -3),
      sky("sp2", "#7fb6e6", "#eef4f6"));
  }

  /* 3. The old Loew's Valencia on Jamaica Avenue: the ornate cream, red and blue terracotta Spanish Baroque front, marquee bulbs chasing */
  function valencia() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 12) bulbs += '<circle class="twk' + ((x / 12) % 2 ? " twk2" : "") + '" cx="' + x + '" cy="152" r="2.6" fill="' + GOLD + '"/>';
    let orn = "";
    for (let x = 108; x < 300; x += 24) orn += '<circle cx="' + x + '" cy="62" r="6" fill="#2a5aa8" stroke="#d9b25a" stroke-width="2"/>';
    let tiles = "";
    for (let x = 84; x < 316; x += 16) tiles += '<rect x="' + x + '" y="96" width="10" height="10" fill="#c0392b" transform="rotate(45 ' + (x + 5) + ' 101)"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gv)"/>' + stars(10) +
      '<rect x="0" y="80" width="70" height="140" fill="#3a2f3a"/><rect x="330" y="70" width="70" height="150" fill="#3a2f3a"/>' +
      /* facade */
      '<rect x="80" y="40" width="240" height="180" fill="#f1e2c4"/>' +
      '<path d="M80 40q120-44 240 0z" fill="#e9d3a8" stroke="#c9a05a" stroke-width="3"/>' +
      '<rect x="80" y="50" width="240" height="24" fill="#e3c88f"/>' + orn +
      '<rect x="80" y="88" width="240" height="26" fill="#efdcb6"/>' + tiles +
      '<path d="M120 140v-14a14 14 0 0 1 28 0v14zM186 140v-18a14 14 0 0 1 28 0v18zM252 140v-14a14 14 0 0 1 28 0v14z" fill="#2a5aa8" stroke="#c9a05a" stroke-width="2"/>' +
      '<path d="M80 40v180M320 40v180" stroke="#c0392b" stroke-width="6"/>' +
      /* marquee */
      '<rect x="88" y="146" width="224" height="30" fill="#1a1420" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="171" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" textLength="196" lengthAdjust="spacingAndGlyphs" fill="' + PINK + '">TONIGHT: HOT, COOL &amp; VICIOUS</text>' +
      '<path d="M150 220v-36h100v36z" fill="#5a2a1a"/><path d="M200 184v36" stroke="#3a1a10" stroke-width="2"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#24262c"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#ddd" letter-spacing="2">JAMAICA AVENUE · THE VALENCIA</text>',
      sky("gv", "#1c1438", "#6a3a6a"));
  }

  /* 4. The stage: Spinderella on the decks, two records spinning, spotlights sweeping, the gold gramophone for the first rap Grammy by women */
  function stage() {
    const deck = x => '<rect x="' + (x - 46) + '" y="146" width="92" height="44" rx="4" fill="#24242c" stroke="#555" stroke-width="2"/>' +
      '<g class="spin"><circle cx="' + x + '" cy="168" r="18" fill="#111"/><circle cx="' + x + '" cy="168" r="12" fill="none" stroke="#333" stroke-width="1.5"/>' +
      '<circle cx="' + x + '" cy="168" r="6" fill="' + PINK + '"/><rect x="' + (x - 1) + '" y="152" width="2" height="6" fill="#fff"/></g>' +
      '<path d="M' + (x + 34) + ' 152l-8 20" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="#120c1c"/>' +
      '<g class="beam"><path d="M80 0l-60 200h120z" fill="' + PINK + '" opacity=".18"/></g><g class="beam beam2"><path d="M320 0l-60 200h120z" fill="' + TEAL + '" opacity=".18"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2030"/><path d="M0 190h400" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* DJ table */
      '<rect x="60" y="140" width="280" height="54" rx="4" fill="#1a1a22" stroke="#444" stroke-width="2"/>' +
      deck(130) + deck(270) +
      '<rect x="182" y="150" width="36" height="36" rx="3" fill="#333"/><path d="M192 158v20M200 158v20M208 158v20" stroke="#888" stroke-width="2"/><rect x="188" y="164" width="8" height="4" fill="' + TEAL + '"/><rect x="204" y="170" width="8" height="4" fill="' + TEAL + '"/>' +
      /* gold gramophone */
      '<g class="bnc"><path d="M190 120l-26-44q14-14 36-8z" fill="' + GOLD + '" stroke="#8a6a12" stroke-width="2"/><rect x="192" y="112" width="16" height="10" fill="#c9a22a"/>' +
      '<rect x="186" y="122" width="28" height="12" rx="2" fill="' + GOLD + '" stroke="#8a6a12" stroke-width="2"/></g>' +
      '<text x="200" y="56" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" letter-spacing="3">SPIN, SPINDERELLA</text>' +
      '<text x="200" y="230" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + GOLD + '" letter-spacing="3">SALT · PEPA · SPINDERELLA</text>');
  }

  /* 5. Jamaica Ave and Parsons Blvd: a wall with their name tagged, the green street signs, cars going by */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#3e3a4e"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#4a4560"/>'; return b; })() +
      tag("SALT-N-PEPA", 30, 136, 30, PINK, -7) + tag("SHOWSTOPPER", 46, 194, 22, TEAL, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Jamaica Av</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Parsons Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="' + TEAL + '"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#178a84"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
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

  window.SCENES = { train, unisphere, valencia, stage, corner };
})();
