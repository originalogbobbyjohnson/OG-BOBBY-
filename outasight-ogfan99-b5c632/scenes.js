/* Yonkers, Westchester opening scenes for the Outasight game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes sail{from{transform:translateX(-80px)}to{transform:translateX(440px)}}' +
    '.sail{animation:sail 16s linear infinite}' +
    '@keyframes trot{from{transform:translateX(-100px)}to{transform:translateX(440px)}}' +
    '.trot{animation:trot 7s linear infinite}.trot2{animation-delay:-2.2s}' +
    '@keyframes leg{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.leg{transform-box:fill-box;transform-origin:50% 0;animation:leg .35s ease-in-out infinite}.leg2{animation-delay:-.17s}' +
    '@keyframes boom{0%{transform:scale(.1);opacity:0}15%{opacity:1}70%{opacity:.9}100%{transform:scale(1);opacity:0}}' +
    '.fw{transform-box:fill-box;transform-origin:50% 50%;animation:boom 2.6s ease-out infinite}.fw2{animation-delay:-.9s}.fw3{animation-delay:-1.7s}' +
    '@keyframes twk{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.twk{animation:twk 1.4s infinite}.twk2{animation-delay:-.7s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-80px)}}' +
    '.car{animation:car 6s linear infinite}' +
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
  const GOLD = "#ffcf3f", PINK = "#ff4f8b", TEAL = "#3ec6e0";

  /* 1. Crestwood on the Metro-North Harlem Line: open-air platform by the Bronx River, the silver M7 train with its blue stripe pulling in */
  function train() {
    let windows = "";
    for (let x = 24; x < 270; x += 40) windows += '<rect x="' + x + '" y="128" width="26" height="22" rx="3" fill="#dfeefa" opacity=".9"/>';
    let trees = "";
    [[20, 92, 30], [80, 86, 34], [150, 94, 28], [330, 88, 34], [384, 96, 26]].forEach(t => trees += '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="' + t[2] + '" fill="#3f7a3c"/><circle cx="' + (t[0] + 12) + '" cy="' + (t[1] + 8) + '" r="' + t[2] * .7 + '" fill="#4f8f46"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' + trees +
      '<rect x="0" y="106" width="400" height="8" fill="#5a6b4a"/>' +
      /* platform canopy + sign */
      '<rect x="210" y="22" width="190" height="10" fill="#2f3a46"/><rect x="230" y="32" width="5" height="80" fill="#2f3a46"/><rect x="370" y="32" width="5" height="80" fill="#2f3a46"/>' +
      '<rect x="244" y="44" width="120" height="30" rx="4" fill="#111"/>' +
      '<text x="304" y="65" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Crestwood</text>' +
      '<rect x="262" y="80" width="84" height="18" rx="9" fill="#0039a6"/><text x="304" y="93" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">HARLEM LINE</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="116" width="300" height="60" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="300" height="7" fill="#0039a6"/>' + windows +
        '<rect x="286" y="128" width="16" height="22" rx="3" fill="#dfeefa"/><circle cx="300" cy="168" r="4" fill="#fff6c2"/>' +
        '<rect x="120" y="108" width="40" height="8" fill="#6b7280"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#5b5f66"/><path d="M0 210h400M0 236h400" stroke="#6b7078" stroke-width="2"/>' +
      tag("OUTASIGHT", 30, 242, 32, GOLD, -5) + tag("83 SOUND", 250, 238, 22, PINK, -3),
      sky("gs", "#7ec3ea", "#f7d9a8"));
  }

  /* 2. The Yonkers Pier at sunset: the pier pavilion on the Hudson, the Palisades cliffs across the river, a sailboat drifting by */
  function pier() {
    let rails = "";
    for (let x = 30; x < 380; x += 14) rails += '<rect x="' + x + '" y="176" width="2" height="14" fill="#2b2033"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gp)"/>' +
      '<circle cx="300" cy="96" r="30" fill="#ffd27a" opacity=".95"/>' +
      /* the Palisades: dark cliffs with a flat top */
      '<path d="M0 108l40-8h120l40 6h80l60-6h60v34H0z" fill="#5b4a6a"/><path d="M0 120h400v20H0z" fill="#4a3c58"/>' +
      '<rect x="0" y="138" width="400" height="122" fill="#3f6f9e"/><path d="M0 150h400M40 162h300M0 200h400" stroke="#ffd27a" stroke-width="1.5" opacity=".35"/>' +
      '<path d="M270 140h60l-6 40h-48z" fill="#ffd27a" opacity=".25"/>' +
      '<g class="sail"><path d="M0 146h36l-6 8H6z" fill="#fff"/><path d="M18 146V112l16 30z" fill="#fff"/><path d="M16 146V120l-12 24z" fill="' + PINK + '"/></g>' +
      /* the pier and its pavilion */
      '<rect x="20" y="188" width="360" height="10" fill="#3b2c3e"/>' + rails + '<rect x="20" y="174" width="360" height="3" fill="#2b2033"/>' +
      '<rect x="40" y="198" width="6" height="40" fill="#2b2033"/><rect x="200" y="198" width="6" height="40" fill="#2b2033"/><rect x="354" y="198" width="6" height="40" fill="#2b2033"/>' +
      '<rect x="80" y="140" width="110" height="36" fill="#e9e4d8"/><path d="M70 142l65-26 65 26z" fill="#4f7d8c"/>' +
      (function () { let s = ""; for (let x = 88; x < 186; x += 18) s += '<rect x="' + x + '" y="148" width="12" height="20" fill="#ffd27a" class="flk" style="animation-delay:-' + (x / 100).toFixed(1) + 's"/>'; return s; })() +
      '<text x="200" y="32" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#5a2a4a" letter-spacing="3">YONKERS PIER · HUDSON RIVER</text>',
      sky("gp", "#f58f6a", "#ffe0a3"));
  }

  /* 3. Cross County Shopping Center in Yonkers (1954), by his Crestwood stop: the open-air mall, the tall lit sign, the walkway full of shoppers */
  function raceway() {
    const { svg, sky, tag, T, stars, fig, tree } = LM1;
    const shop = (x, w, aw) => '<rect x="' + x + '" y="110" width="' + w + '" height="90" fill="#e8e0cc"/><rect x="' + (x + 6) + '" y="140" width="' + (w - 12) + '" height="50" fill="#ffe0a0" opacity=".85"/>' +
      '<path d="M' + x + ' 128h' + w + 'l-6 12H' + (x + 6) + 'z" fill="' + aw + '"/><rect x="' + x + '" y="110" width="' + w + '" height="14" fill="#3a3a44"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#os3)"/>' + stars(16) +
      /* the storefront row */
      shop(10, 86, "#ff4f8b") + shop(100, 70, "#3ec6e0") + shop(230, 76, "#ffcf3f") + shop(310, 80, "#7a5aff") +
      '<rect x="170" y="96" width="60" height="104" fill="#d8ccb0"/><rect x="176" y="150" width="48" height="50" fill="#2a2a34"/>' +
      /* the tall sign */
      '<rect x="196" y="20" width="8" height="80" fill="#4a4a54"/>' +
      '<rect x="146" y="14" width="108" height="60" rx="6" fill="#1a1a24" stroke="#ffcf3f" stroke-width="2"/>' +
      T(200, 40, "CROSS", 20, "#ffcf3f", { cls: "lm-flk" }) + T(200, 64, "COUNTY", 20, "#ff4f8b", { cls: "lm-flk lm-f2" }) +
      T(200, 112, "SHOPPING CENTER", 8, "#3ec6e0", { f: "Barlow, Arial, sans-serif", w: 700, ls: 1.5 }) +
      /* the plaza */
      '<rect x="0" y="200" width="400" height="60" fill="#b8b0a0"/>' + tree(90, 222, 12, "#3f7a3a") + tree(310, 222, 12, "#3f7a3a", "lm-swayb lm-s2") +
      '<g class="lm-walk">' + fig(130, 246, "#2a1a3a", null, .8) + '</g><g class="lm-walk lm-w2">' + fig(200, 250, "#1a2a3a", null, .8) + '</g><g class="lm-walk">' + fig(250, 244, "#3a1a1a", null, .8) + '</g>' +
      T(200, 8 + 0, "", 1, "#000") +
      '<rect x="6" y="20" width="120" height="30" rx="3" fill="#1a1a24" stroke="#3ec6e0" stroke-width="2"/>' + T(66, 33, "YONKERS, N.Y.", 10, "#fff") + T(66, 44, "SINCE 1954", 8, "#3ec6e0", { f: "Barlow, Arial, sans-serif", w: 700, ls: 1.5 }) +
      tag("STAY GOLD", 260, 254, 24, "#ffcf3f", -4),
      sky("os3", "#0e1430", "#4a3a6a"));
  }

  /* 4. Yonkers City Hall on its hill: pale granite, the clock tower lit up, fireworks overhead (tonight is the night) */
  function cityhall() {
    const fw = (x, y, c, cls) => { let s = '<g class="fw ' + cls + '">'; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; s += '<path d="M' + x + ' ' + y + 'L' + (x + 26 * Math.cos(a)).toFixed(1) + ' ' + (y + 26 * Math.sin(a)).toFixed(1) + '" stroke="' + c + '" stroke-width="2.5" stroke-linecap="round"/>'; } return s + '</g>'; };
    let cols = "";
    for (let x = 150; x <= 242; x += 16) cols += '<rect x="' + x + '" y="134" width="8" height="54" fill="#e7e1d1"/>';
    let wins = "";
    for (let x = 70; x < 340; x += 22) if (x < 140 || x > 254) { wins += '<rect x="' + x + '" y="140" width="10" height="16" fill="#ffd98a" class="flk" style="animation-delay:-' + (x / 90).toFixed(1) + 's"/><rect x="' + x + '" y="166" width="10" height="16" fill="#ffd98a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#gh)"/>' + stars(18) +
      fw(70, 56, PINK, "") + fw(330, 48, GOLD, "fw2") + fw(250, 30, TEAL, "fw3") +
      /* clock tower */
      '<rect x="176" y="50" width="48" height="76" fill="#d9d2c0"/><path d="M172 50l28-22 28 22z" fill="#6a8f86"/>' +
      '<circle cx="200" cy="80" r="14" fill="#fff6dc" stroke="#8a7a5a" stroke-width="2"/><path d="M200 80v-9M200 80l6 3" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      '<rect x="190" y="100" width="20" height="18" fill="#ffd98a" class="flk"/>' +
      /* main block */
      '<rect x="56" y="124" width="288" height="68" fill="#d9d2c0"/><rect x="56" y="124" width="288" height="8" fill="#bfb7a2"/>' +
      '<path d="M140 132l60-16 60 16z" fill="#cfc8b4"/>' + cols + wins +
      '<rect x="40" y="192" width="320" height="10" fill="#bfb7a2"/><rect x="150" y="202" width="100" height="14" fill="#cfc8b4"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2a34"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="256" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff" letter-spacing="2">TONIGHT IS THE NIGHT</text>',
      sky("gh", "#0b0f2a", "#3a2a5a"));
  }

  /* 5. Getty Square, downtown Yonkers: Main St and N Broadway, a brick wall with his name tagged, the street signs */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) + IC_BD +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a2a"/><rect x="330" y="60" width="70" height="160" fill="#1d1a2a"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#5a3a34"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#6a463e"/>'; return b; })() +
      tag("OUTASIGHT", 34, 140, 34, GOLD, -7) + tag("STAY GOLD", 50, 196, 26, TEAL, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">N Broadway</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="' + PINK + '"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#a02a5a"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
      sky("gc", "#140d22", "#3a2a50"));
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

  /* Iconic landmark behind the corner, shared with the other artists from this area but seen from this corner: the Yonkers Pier and the Palisades: from Getty Square, the long flat top of the cliffs over the rooftops with house lights on the ridge, a plane crossing, the pier in the gap */
  const IC_BD = "<g><style>@keyframes icsw{0%{transform:scaleX(1)}50%{transform:scaleX(-1)}100%{transform:scaleX(1)}}.icsw{animation:icsw 6s ease-in-out infinite}@keyframes icfl{0%,14%,36%,100%{opacity:0}25%{opacity:.85}}.icfl{animation:icfl 6s ease-in-out infinite}@keyframes icpl{0%,100%{opacity:.35}50%{opacity:1}}.icpl{animation:icpl 2.6s ease-in-out infinite}.icp2{animation-delay:-1.3s}@keyframes icbl{0%,49%{opacity:1}50%,100%{opacity:.12}}.icbl{animation:icbl 1.4s steps(1) infinite}.icb2{animation-delay:-.7s}@keyframes icsh{0%,100%{transform:translateX(0);opacity:.35}50%{transform:translateX(6px);opacity:.9}}.icsh{animation:icsh 3s ease-in-out infinite}.ics2{animation-delay:-1.5s}@keyframes icsm{0%{transform:translate(0,0) scale(.6);opacity:.75}100%{transform:translate(22px,-30px) scale(1.6);opacity:0}}.icsm{animation:icsm 4s linear infinite;transform-box:fill-box;transform-origin:center}.icm2{animation-delay:-1.3s}.icm3{animation-delay:-2.6s}@keyframes icsl{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.icsl{animation:icsl 5s ease-in-out infinite}.icl2{animation-delay:-2.5s}@keyframes icsg{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.icsg{animation:icsg 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}@keyframes icdr{from{transform:translateX(0)}to{transform:translateX(var(--d))}}.icdr{animation:icdr var(--t) linear infinite}</style><path d=\"M0 84L0 46.1L6 49.7L12 48.8L18 46.2L24 49.1L30 52.7L36 50.2L42 47.9L48 50.5L54 50.9L60 46.5L66 45.7L72 49.6L78 49.5L84 46.8L90 49.2L96 52.9L102 50.6L108 47.5L114 49.7L120 50.6L126 46.5L132 45.5L138 49.5L144 50.3L150 47.4L156 49.1L162 52.9L168 50.7L174 47.1L180 48.9L186 50.4L192 46.7L198 45.4L204 49.6L210 51L216 48.1L222 49L228 52.7L234 50.8L240 46.7L246 48L252 50.1L258 47.1L264 45.5L270 49.7L276 51.7L282 48.7L288 48.8L294 52.3L300 50.7L306 46.3L312 47.3L318 50L324 47.6L330 45.8L336 49.9L342 52.3L348 49.2L354 48.5L360 51.7L366 50.6L372 46L378 46.7L384 49.9L390 48.2L396 46.2L400 84z\" fill=\"#3e3a4c\"/><path d=\"M3 58V84\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M9 61V79\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M14 55V81\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M22 58V83\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M29 61V78\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M35 58V80\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M40 61V82\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M48 55V84\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M55 58V79\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M61 61V81\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M66 64V83\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M74 52V78\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M81 55V80\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M87 58V82\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M92 61V84\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M100 64V79\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M107 58V81\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M113 55V83\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M118 58V78\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M126 61V80\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M133 55V82\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M139 58V84\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M144 61V79\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M152 58V81\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M159 61V83\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M165 55V78\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M170 58V80\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M178 61V82\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M185 64V84\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M191 52V79\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M196 55V81\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M204 58V83\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M211 61V78\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M217 64V80\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M222 58V82\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M230 55V84\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M237 58V79\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M243 61V81\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M248 55V83\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M256 58V78\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M263 61V80\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M269 58V82\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M274 61V84\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M282 55V79\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M289 58V81\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M295 61V83\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M300 64V78\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M308 52V80\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M315 55V82\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M321 58V84\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M326 61V79\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M334 64V81\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M341 58V83\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M347 55V78\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M352 58V80\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M360 61V82\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M367 55V84\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M373 58V79\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M378 61V81\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M386 58V83\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M393 61V78\" stroke=\"#2e2a3a\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M399 55V80\" stroke=\"#2e2a3a\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M0 84q200 -10 400 0z\" fill=\"#2e2a3a\" opacity=\".6\"/><path d=\"M0 47.1Q-3 37.1 0 42.1Q3 40.7 6 45.7Q9 39.8 12 44.8Q15 37.2 18 42.2Q21 40.1 24 45.1Q27 43.7 30 48.7Q33 41.2 36 46.2Q39 38.9 42 43.9Q45 41.5 48 46.5Q51 41.9 54 46.9Q57 37.5 60 42.5Q63 36.7 66 41.7Q69 40.6 72 45.6Q75 40.5 78 45.5Q81 37.8 84 42.8Q87 40.2 90 45.2Q93 43.9 96 48.9Q99 41.6 102 46.6Q105 38.5 108 43.5Q111 40.7 114 45.7Q117 41.6 120 46.6Q123 37.5 126 42.5Q129 36.5 132 41.5Q135 40.5 138 45.5Q141 41.3 144 46.3Q147 38.4 150 43.4Q153 40.1 156 45.1Q159 43.9 162 48.9Q165 41.7 168 46.7Q171 38.1 174 43.1Q177 39.9 180 44.9Q183 41.4 186 46.4Q189 37.7 192 42.7Q195 36.4 198 41.4Q201 40.6 204 45.6Q207 42 210 47Q213 39.1 216 44.1Q219 40 222 45Q225 43.7 228 48.7Q231 41.8 234 46.8Q237 37.7 240 42.7Q243 39 246 44Q249 41.1 252 46.1Q255 38.1 258 43.1Q261 36.5 264 41.5Q267 40.7 270 45.7Q273 42.7 276 47.7Q279 39.7 282 44.7Q285 39.8 288 44.8Q291 43.3 294 48.3Q297 41.7 300 46.7Q303 37.3 306 42.3Q309 38.3 312 43.3Q315 41 318 46Q321 38.6 324 43.6Q327 36.8 330 41.8Q333 40.9 336 45.9Q339 43.3 342 48.3Q345 40.2 348 45.2Q351 39.5 354 44.5Q357 42.7 360 47.7Q363 41.6 366 46.6Q369 37 372 42Q375 37.7 378 42.7Q381 40.9 384 45.9Q387 39.2 390 44.2Q393 37.2 396 42.2L400 49.2L0 49.1z\" fill=\"#1a1a28\"/><circle class=\"icpl\" cx=\"80\" cy=\"47\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl icp2\" cx=\"103\" cy=\"48\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl\" cx=\"126\" cy=\"49\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl icp2\" cx=\"149\" cy=\"50\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl\" cx=\"172\" cy=\"47\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl icp2\" cx=\"195\" cy=\"48\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl\" cx=\"218\" cy=\"49\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl icp2\" cx=\"241\" cy=\"50\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl\" cx=\"264\" cy=\"47\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl icp2\" cx=\"287\" cy=\"48\" r=\"1.3\" fill=\"#ffd98a\"/><circle class=\"icpl\" cx=\"310\" cy=\"49\" r=\"1.3\" fill=\"#ffd98a\"/><rect x=\"0\" y=\"84\" width=\"400\" height=\"136\" fill=\"#1a2036\"/><path class=\"icsh\" d=\"M0 88h10\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh ics2\" d=\"M53 105h17\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh\" d=\"M106 122h10\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh ics2\" d=\"M159 139h17\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><rect x=\"268\" y=\"172\" width=\"72\" height=\"3.6\" fill=\"#6a5a48\"/><rect x=\"271\" y=\"175.6\" width=\"1.8\" height=\"6\" fill=\"#2a2420\"/><rect x=\"281.8\" y=\"175.6\" width=\"1.8\" height=\"6\" fill=\"#2a2420\"/><rect x=\"292.6\" y=\"175.6\" width=\"1.8\" height=\"6\" fill=\"#2a2420\"/><rect x=\"303.4\" y=\"175.6\" width=\"1.8\" height=\"6\" fill=\"#2a2420\"/><rect x=\"314.2\" y=\"175.6\" width=\"1.8\" height=\"6\" fill=\"#2a2420\"/><rect x=\"325\" y=\"175.6\" width=\"1.8\" height=\"6\" fill=\"#2a2420\"/><rect x=\"335.8\" y=\"175.6\" width=\"1.8\" height=\"6\" fill=\"#2a2420\"/><rect x=\"303\" y=\"163\" width=\"30\" height=\"9\" fill=\"#e8e0cc\"/><rect class=\"icpl\" x=\"305.4\" y=\"164.8\" width=\"3\" height=\"4.5\" fill=\"#ffd98a\"/><rect class=\"icpl icp2\" x=\"310.8\" y=\"164.8\" width=\"3\" height=\"4.5\" fill=\"#ffd98a\"/><rect class=\"icpl\" x=\"316.2\" y=\"164.8\" width=\"3\" height=\"4.5\" fill=\"#ffd98a\"/><rect class=\"icpl icp2\" x=\"321.6\" y=\"164.8\" width=\"3\" height=\"4.5\" fill=\"#ffd98a\"/><rect class=\"icpl\" x=\"327\" y=\"164.8\" width=\"3\" height=\"4.5\" fill=\"#ffd98a\"/><path d=\"M301 163L309 157L327 157L335 163z\" fill=\"#2f4a3c\"/><rect x=\"316\" y=\"153.5\" width=\"4\" height=\"3.5\" fill=\"#e8e0cc\"/><path d=\"M315 153.5l3 -3l3 3z\" fill=\"#2f4a3c\"/><g transform=\"translate(-30 0)\"><g class=\"icdr\" style=\"--d:440px;--t:14s;animation-delay:-3s\"><g><path d=\"M0 18h14l4-2h-6l-3-4h-3l2 4h-8z\" fill=\"#9aa0b0\"/><circle class=\"icbl\" cx=\"7\" cy=\"20\" r=\"1.4\" fill=\"#ff3b30\"/></g></g></g></g>";
  window.SCENES = { train, pier, raceway, cityhall, corner };
})();
