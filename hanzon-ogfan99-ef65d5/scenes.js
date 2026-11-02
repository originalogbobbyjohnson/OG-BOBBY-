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
  const ORG = "#ff8a1e", GOLD = "#ffd34d", RED = "#e23b3b";

  /* 1. Clifton on the Staten Island Railway: the blue-and-white car pulling in, the platform wayfinding pointing up to Clove Lakes and the Barrett Park Zoo, his tag in Barca blue and garnet */
  function station1() {
    const { svg, sky, tag, T, cloud, tree } = LM1;
    let win = ""; for (let x = 20; x < 280; x += 40) win += '<rect x="' + x + '" y="102" width="26" height="20" rx="3" fill="#cfe6ff" opacity=".9"/>';
    let stripes = ""; for (let k = 0; k < 8; k++) stripes += '<rect x="' + (182 + k * 24) + '" y="184" width="12" height="66" fill="#a50044"/><rect x="' + (194 + k * 24) + '" y="184" width="12" height="66" fill="#004d98"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hz1)"/>' + cloud("lm-drift", 0, 24, 1) +
      /* the hill toward Clove Lakes, trees */
      '<path d="M0 90q120-40 240-20t160 0V150H0z" fill="#4a7a3a"/>' + tree(60, 84, 16) + tree(150, 72, 18, "#3f7a3a", "lm-swayb lm-s2") + tree(320, 70, 16) +
      /* the canopy + the station sign */
      '<rect x="0" y="22" width="400" height="8" fill="#2a3a5a"/>' +
      '<rect x="24" y="36" width="150" height="28" rx="3" fill="#111"/><rect x="24" y="36" width="150" height="3" fill="#fff"/>' +
      T(36, 57, "Clifton", 16, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) +
      '<rect x="128" y="43" width="36" height="15" rx="7" fill="#0039a6"/>' + T(146, 54, "SIR", 9, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* the R211S car */
      '<g class="anim-train"><rect x="-10" y="92" width="310" height="64" rx="8" fill="#e8ecf2" stroke="#4a5a7a" stroke-width="2"/>' +
      '<rect x="-10" y="128" width="310" height="10" fill="#0039a6"/>' + win +
      '<rect x="282" y="98" width="14" height="26" rx="3" fill="#1d2a3a"/><circle cx="294" cy="148" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="156" width="400" height="8" fill="#4a4e56"/><rect x="0" y="164" width="400" height="7" fill="#eab308"/><rect x="0" y="171" width="400" height="89" fill="#a49e94"/>' +
      /* wayfinding to his rooms */
      '<rect x="306" y="36" width="5" height="120" fill="#333"/>' +
      '<rect x="248" y="40" width="140" height="18" rx="2" fill="#1f7a3a" stroke="#fff"/>' + T(318, 53, "↑ Clove Lakes Park", 10, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      '<rect x="248" y="62" width="140" height="18" rx="2" fill="#1f7a3a" stroke="#fff"/>' + T(318, 75, "↑ Barrett Park Zoo", 10, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* Barca-stripe wall with his tag */
      stripes + tag("HANZ ON", 196, 230, 36, "#ffd34d", -5) +
      tag("BARCA", 30, 214, 28, "#a50044", -4) + tag("HANNIBAL", 24, 248, 24, "#ff8a1e", -3),
      sky("hz1", "#8fc3ea", "#f6d9a6"));
  }

  /* 2. Walker Park in Livingston: the Staten Island Cricket Club, America's oldest still playing, white-clad players on the green, the brick clubhouse */
  function parkhill() {
    const { svg, sky, tag, T, plaque, tree, cloud, wins, brickLines } = LM1;
    const player = (x, y, cls, bat) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="4.5" fill="#6a4a3a"/><path d="M' + (x - 5) + ' ' + (y - 25) + 'h10l2 14h-3l-1 11h-6l-1-11h-3z" fill="#f6f4ee"/>' +
      (bat ? '<path d="M' + (x + 5) + ' ' + (y - 18) + 'l12 10" stroke="#c8a060" stroke-width="3"/>' : "") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hz2)"/>' + cloud("lm-drift", 0, 28, 1) + cloud("lm-drift lm-d2", 0, 46, .7, .6) +
      tree(20, 120, 22, "#2f6a34") + tree(380, 118, 22, "#2f6a34", "lm-swayb lm-s2") + tree(340, 116, 16) +
      /* the clubhouse */
      '<rect x="40" y="82" width="140" height="56" fill="#9a4a32"/>' + brickLines(40, 82, 140, 56, "#7e3a26") +
      '<path d="M30 84L110 50L190 84z" fill="#4a3a3a"/>' + wins(54, 96, 5, 1, 24, 0, 14, 20, "#f6f0dc") +
      '<rect x="40" y="118" width="140" height="4" fill="#f6f0dc"/><rect x="100" y="118" width="20" height="20" fill="#3a2a22"/>' +
      '<rect x="160" y="40" width="2" height="44" fill="#ccc"/><g class="lm-sway" style="transform-origin:162px 42px"><rect x="162" y="42" width="20" height="12" fill="#ff8a1e"/></g>' +
      /* the green and the pitch */
      '<rect x="0" y="136" width="400" height="124" fill="#4a9a3a"/>' +
      '<path d="M0 136h400v6H0z" fill="#f6f4ee"/>' +
      '<rect x="170" y="170" width="200" height="22" fill="#c8b880"/>' +
      '<path d="M190 168v26M196 168v26M202 168v26M338 168v26M344 168v26M350 168v26" stroke="#f6f4ee" stroke-width="2"/>' +
      player(196, 200, "", true) + player(344, 198, "lm-bob") + player(270, 170, "lm-walk") + player(100, 220, "lm-bob lm-b2") + player(250, 240, "lm-bob lm-b3") +
      '<g class="lm-ball"><circle cx="336" cy="180" r="2.5" fill="#c0262d"/></g>' +
      plaque(208, 10, 186, "WALKER PARK", "STATEN ISLAND CRICKET CLUB · 1872", "#2a1a0a", "#ffd34d") +
      tag("HANZ ON", 20, 252, 26, "#ff8a1e", -4),
      sky("hz2", "#7fc0ec", "#eaf6fa"));
  }

  /* 3. Clove Lakes Park: the old stone arch bridge over the lake, fall leaves coming down, ducks */
  function clove() {
    let stones = ""; for (let i = 0; i < 40; i++) { const x = 60 + (i * 31) % 280, y = 104 + (i * 13) % 40; if (x > 90 && x < 296 && y > 104) continue; stones += '<rect x="' + x + '" y="' + y + '" width="14" height="8" rx="2" fill="' + (i % 2 ? "#8c8274" : "#a0968a") + '"/>'; }
    let ripples = ""; for (let x = 0; x < 460; x += 40) ripples += '<path d="M' + x + ' 0q10-3 20 0t20 0" stroke="#bfe3f7" stroke-width="1.2" fill="none" opacity=".45"/>';
    const tree = (x, c) => '<rect x="' + (x - 3) + '" y="90" width="6" height="60" fill="#4a3424"/><circle cx="' + x + '" cy="80" r="30" fill="' + c + '"/><circle cx="' + (x + 18) + '" cy="96" r="18" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k1)"/>' +
      tree(30, "#d9662b") + tree(370, "#e8a02b") + tree(330, "#b8442a") +
      /* bridge */
      '<path d="M40 150V100h320v50h-60a100 44 0 0 0-200 0z" fill="#978c7e"/>' + stones +
      '<path d="M100 150a100 44 0 0 1 200 0z" fill="#2a4a5a"/>' +
      '<rect x="36" y="92" width="328" height="8" fill="#7d7366"/>' +
      /* lake */
      '<rect y="150" width="400" height="110" fill="#3a7a9a"/>' +
      '<path d="M100 150a100 40 0 0 0 200 0z" fill="#5a5048" opacity=".35"/>' +
      '<g class="wv"><g transform="translate(0 176)">' + ripples + '</g><g transform="translate(-20 210)">' + ripples + '</g></g>' +
      '<g class="swm"><g transform="translate(150 194)"><ellipse cx="0" cy="0" rx="10" ry="5" fill="#7a5a3a"/><circle cx="9" cy="-5" r="4" fill="#2f6b3a"/><path d="M12 -5l5 1-5 1z" fill="#ff9a1a"/></g><g transform="translate(180 202)"><ellipse cx="0" cy="0" rx="8" ry="4" fill="#8a6a4a"/><circle cx="7" cy="-4" r="3.4" fill="#8a6a4a"/></g></g>' +
      '<g class="lf"><path d="M120 60q5-5 10 0q-5 5-10 0z" fill="#e8a02b"/></g><g class="lf lf2"><path d="M260 50q5-5 10 0q-5 5-10 0z" fill="#d9662b"/></g><g class="lf lf3"><path d="M200 40q5-5 10 0q-5 5-10 0z" fill="#b8442a"/></g>' +
      '<rect y="238" width="400" height="22" fill="#1f3f50" opacity=".8"/>' +
      '<text x="200" y="253" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">CLOVE LAKES PARK</text>',
      sky("k1", "#f2b46a", "#fbe6c4"));
  }

  /* 4. The Staten Island Zoo in Barrett Park: the brick gate, and the zoo's weather groundhog popping up */
  function zoo() {
    return svg(
      '<rect width="400" height="260" fill="url(#z1)"/>' + '<g class="dft">' + cloud(100, 40, 1) + cloud(280, 30, .7) + '</g>' +
      '<rect y="150" width="400" height="110" fill="#4f8f34"/>' +
      (function () { let t = ""; for (let x = 0; x < 400; x += 40) t += '<circle cx="' + x + '" cy="146" r="22" fill="#3f7a2a"/>'; return t; })() +
      /* brick gate pillars + arch sign */
      '<rect x="80" y="80" width="34" height="120" fill="#a8432f"/><rect x="286" y="80" width="34" height="120" fill="#a8432f"/>' +
      '<rect x="76" y="74" width="42" height="10" fill="#efe6d2"/><rect x="282" y="74" width="42" height="10" fill="#efe6d2"/>' +
      '<path d="M114 96q86-34 172 0v18q-86-34-172 0z" fill="#1b4a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="104" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" textLength="140" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">STATEN ISLAND ZOO</text>' +
      /* iron gate */
      (function () { let g = ""; for (let x = 120; x < 284; x += 10) g += '<rect x="' + x + '" y="124" width="3" height="76" fill="#222"/>'; return g; })() +
      '<rect x="114" y="140" width="172" height="3" fill="#222"/>' +
      /* path */
      '<path d="M150 260l30-60h40l30 60z" fill="#c9b28a"/>' +
      /* groundhog burrow */
      '<ellipse cx="340" cy="232" rx="30" ry="9" fill="#5a3a22"/>' +
      '<g class="pk"><path d="M326 232v-16a14 14 0 0 1 28 0v16z" fill="#8a5a32"/><circle cx="335" cy="214" r="2" fill="#111"/><circle cx="345" cy="214" r="2" fill="#111"/><ellipse cx="340" cy="220" rx="4" ry="3" fill="#5a3a22"/><circle cx="330" cy="204" r="3" fill="#8a5a32"/><circle cx="350" cy="204" r="3" fill="#8a5a32"/></g>' +
      '<ellipse cx="340" cy="234" rx="30" ry="5" fill="#3a2414"/>' +
      '<text x="20" y="250" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">BARRETT PARK</text>',
      sky("z1", "#5aa6e0", "#d6ecff"));
  }

  /* 5. Clove Rd & Victory Blvd, at the gate of Clove Lakes Park: street signs over the corner, the wall tagged up */
  function corner() {
    let bricks = ""; for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#7a4a30"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      '<rect y="68" width="400" height="154" fill="#5a3422"/>' + bricks +
      tag("HANZ ON", 24, 150, 50, ORG, -6) + tag("HANNIBAL", 40, 196, 30, GOLD, -4) + tag("BARCA", 196, 202, 28, "#fff", -7) +
      '<g class="drp"><rect x="90" y="156" width="3" height="10" fill="' + ORG + '"/></g>' +
      '<rect x="352" y="16" width="6" height="214" fill="#4a4a4a"/>' +
      '<path d="M328 222v-30h56v30" fill="none" stroke="#2a2a2a" stroke-width="4"/><rect x="318" y="176" width="76" height="16" rx="2" fill="#4a6a3a"/><text x="356" y="188" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">CLOVE LAKES PARK</text>' +
      blade(282, 40, 116, "Clove Rd", 0) + blade(266, 64, 132, "Victory Blvd", 0) +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr2"><rect x="0" y="236" width="44" height="14" rx="4" fill="#e23b3b"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#f5a04b", "#3a1d2d"));
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

  window.SCENES = { station: station1, parkhill, clove, zoo, corner };
})();
