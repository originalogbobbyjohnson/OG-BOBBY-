/* East Harlem (El Barrio, Lexington Av / 110th St) opening scenes for the Bodega Bamz game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes mnr{from{transform:translateX(-260px)}to{transform:translateX(460px)}}' +
    '.mnr{animation:mnr 8s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}.fl2{animation-delay:.5s}' +
    '@keyframes rip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}' +
    '.rip{animation:rip 2.4s ease-in-out infinite}.rp2{animation-delay:1.2s}' +
    '@keyframes splash{0%{opacity:.9;transform:scale(.3)}100%{opacity:0;transform:scale(1.6)}}' +
    '.spl{transform-box:fill-box;transform-origin:50% 50%;animation:splash 1.6s ease-out infinite}.sp2{animation-delay:.8s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.sun{transform-box:fill-box;transform-origin:50% 50%;animation:spin 24s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.4s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{transform-box:fill-box;transform-origin:50% 0;animation:drip 3s ease-out infinite}' +
    '@keyframes spray{0%,100%{opacity:.1}50%{opacity:.9}}' +
    '.spr{animation:spray 1.2s ease-in-out infinite}' +
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
  /* Puerto Rican flag: five red/white stripes, blue triangle, white star */
  const prFlag = (x, y, w, cls) => {
    const h = w * 2 / 3, sh = h / 5; let s = '<g class="flag' + (cls || "") + '">';
    for (let i = 0; i < 5; i++) s += '<rect x="' + x + '" y="' + (y + i * sh) + '" width="' + w + '" height="' + sh + '" fill="' + (i % 2 ? "#fff" : "#ed0000") + '"/>';
    s += '<path d="M' + x + ' ' + y + 'l' + (w * 0.45) + ' ' + (h / 2) + 'l-' + (w * 0.45) + ' ' + (h / 2) + 'z" fill="#0050f0"/>';
    s += '<circle cx="' + (x + w * 0.15) + '" cy="' + (y + h / 2) + '" r="' + (h * 0.09) + '" fill="#fff"/></g>';
    return s;
  };
  /* a simple faceless painted figure for the mural */
  const fig = (x, y, s, shirt, skin) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><circle cx="0" cy="-30" r="7" fill="' + skin + '"/><path d="M-10 -22h20l3 24h-26z" fill="' + shirt + '"/><rect x="-8" y="2" width="6" height="16" fill="#2a2a3a"/><rect x="2" y="2" width="6" height="16" fill="#2a2a3a"/></g>';
  const GREEN = "#00933c", MINT = "#7cf29a", RED = "#ed2939", BLUE = "#3a6bff", GOLD = "#f2c14e";

  /* 1. The 6 pulling into 110 St on Lexington Av, underground: white tile, a blue-and-gold mosaic band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d4cfc2" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d4cfc2" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 18) band += '<rect x="' + x + '" y="30" width="9" height="9" fill="#2b4f8a"/><rect x="' + (x + 9) + '" y="30" width="9" height="9" fill="#d9b45a"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efeadf"/>' + tiles + band +
      '<rect x="70" y="54" width="260" height="36" rx="4" fill="#111"/><rect x="70" y="54" width="260" height="4" fill="#fff"/>' +
      '<text x="84" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">110 St</text>' +
      '<text x="148" y="79" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#ccc">Lexington Av</text>' + bullet(306, 73, "6", GREEN) +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 142, "6", GREEN) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("BAMZ", 24, 242, 34, MINT, -5) + tag("EL BARRIO", 236, 240, 26, RED, -7));
  }

  /* 2. "The Spirit of East Harlem" mural on the side of the tenement at Lexington Av and 104th: a whole wall of neighbors painted
        big — families, a domino table, the flag — over a sky-blue ground, a kid on a bike rolling past */
  function spirit() {
    let figs = "";
    const skins = ["#8a5a3a", "#c9905e", "#5a3a26", "#e0b48a", "#a8714a"];
    const shirts = [RED, "#f7f3ea", GOLD, "#2e8b57", BLUE, "#e07a3a", "#9b6bd8", "#f7f3ea"];
    for (let i = 0; i < 8; i++) figs += fig(118 + i * 24, 100, 1, shirts[i], skins[i % 5]);
    for (let i = 0; i < 7; i++) figs += fig(128 + i * 26, 174, 1.15, shirts[(i + 3) % 8], skins[(i + 2) % 5]);
    return svg(
      '<rect width="400" height="260" fill="url(#skyM)"/>' +
      /* neighbouring tenement with fire escapes */
      '<rect x="0" y="40" width="90" height="170" fill="#8a4a32"/>' +
      [60, 96, 132, 168].map(y => '<rect x="12" y="' + y + '" width="18" height="22" fill="#2a2a30"/><rect x="52" y="' + y + '" width="18" height="22" fill="#2a2a30"/><path d="M6 ' + (y + 24) + 'h74" stroke="#1a1a1a" stroke-width="3"/>').join("") +
      /* the mural wall */
      '<rect x="96" y="22" width="304" height="188" fill="#d8c8a8"/>' +
      '<rect x="104" y="30" width="288" height="172" fill="#8fc8e8"/>' +
      '<rect x="104" y="150" width="288" height="52" fill="#b98a5a"/>' +
      '<circle cx="360" cy="54" r="14" fill="' + GOLD + '"/>' + prFlag(124, 40, 44) +
      '<text x="250" y="58" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="13" fill="#1a3a6a">The Spirit of East Harlem</text>' +
      figs +
      /* domino table in front */
      '<rect x="216" y="184" width="70" height="8" fill="#5a3a20"/><rect x="222" y="192" width="4" height="10" fill="#5a3a20"/><rect x="276" y="192" width="4" height="10" fill="#5a3a20"/>' +
      [226, 238, 250, 262].map(x => '<rect x="' + x + '" y="179" width="8" height="5" fill="#f7f3ea" stroke="#222" stroke-width=".6"/>').join("") +
      '<rect x="0" y="210" width="400" height="12" fill="#a8a8a8"/><rect x="0" y="222" width="400" height="38" fill="#2b2d31"/>' +
      '<g class="mnr"><circle cx="20" cy="248" r="8" fill="none" stroke="#111" stroke-width="2.5"/><circle cx="50" cy="248" r="8" fill="none" stroke="#111" stroke-width="2.5"/>' +
        '<path d="M20 248l12-12h14l4 12M32 236l-4-6" stroke="' + RED + '" stroke-width="3" fill="none"/>' +
        '<circle cx="34" cy="216" r="5" fill="#8a5a3a"/><path d="M34 221l2 12" stroke="' + MINT + '" stroke-width="6"/></g>',
      sky("skyM", "#3d78c4", "#cfe6f5"));
  }

  /* 3. Thomas Jefferson Park pool at 112th and the FDR: the big 1936 outdoor pool, the red-brick bathhouse with its arches, swimmers splashing */
  function pool() {
    let arches = "";
    for (let x = 60; x < 350; x += 36) arches += '<path d="M' + x + ' 116v-22a10 10 0 0 1 20 0v22z" fill="#3a2a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#skyP)"/>' +
      '<g class="sun"><circle cx="352" cy="40" r="18" fill="' + GOLD + '"/>' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<rect x="350" y="12" width="4" height="10" fill="' + GOLD + '" transform="rotate(' + a + ' 352 40)"/>').join("") + '</g>' +
      /* trees */
      '<circle cx="18" cy="74" r="26" fill="#3f8a3a"/><circle cx="380" cy="86" r="24" fill="#3f8a3a"/>' +
      /* bathhouse */
      '<rect x="40" y="70" width="320" height="50" fill="#b04a30"/><rect x="36" y="64" width="328" height="8" fill="#e8dcc0"/>' +
      '<rect x="176" y="50" width="48" height="20" fill="#b04a30"/><rect x="172" y="46" width="56" height="6" fill="#e8dcc0"/>' + arches +
      '<rect x="40" y="116" width="320" height="6" fill="#e8dcc0"/>' +
      /* deck and pool */
      '<rect x="0" y="122" width="400" height="138" fill="#d9d4c8"/>' +
      '<rect x="24" y="138" width="352" height="104" rx="4" fill="#3fb6e0" stroke="#f7f3ea" stroke-width="4"/>' +
      [60, 110, 160, 210, 260, 310].map(x => '<path d="M' + x + ' 142v96" stroke="#2a8fbf" stroke-width="2" stroke-dasharray="6 6"/>').join("") +
      '<g class="rip"><path d="M40 160h40M150 186h50M270 170h40M90 220h40" stroke="#bfefff" stroke-width="2"/></g>' +
      '<g class="rip rp2"><path d="M200 154h30M310 210h40M50 196h30" stroke="#bfefff" stroke-width="2"/></g>' +
      '<circle class="spl" cx="130" cy="200" r="10" fill="none" stroke="#fff" stroke-width="2"/><circle class="spl sp2" cx="290" cy="186" r="10" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<g class="bob"><circle cx="130" cy="198" r="5" fill="#8a5a3a"/><circle cx="290" cy="184" r="5" fill="#c9905e"/><circle cx="210" cy="214" r="5" fill="#5a3a26"/></g>' +
      /* lifeguard chair */
      '<path d="M368 238l6-40M388 238l-6-40M370 214h16" stroke="#f7f3ea" stroke-width="3"/><rect x="368" y="192" width="20" height="6" fill="' + RED + '"/>' +
      '<rect x="370" y="168" width="2" height="24" fill="#555"/>' + prFlag(372, 168, 20, " fl2"),
      sky("skyP", "#2f8ad8", "#bfe4f7"));
  }

  /* 4. The Julia de Burgos Latino Cultural Center at Lexington Av & E 106th: the old red-brick schoolhouse, the murals on its walls, Puerto Rican flags flying */
  function casita() {
    const { svg, sky, tag, T, plaque, wins, brickLines, cloud, fig } = LM1;
    const pr = (x, y, cls) => { let s = '<g class="' + cls + '" style="transform-origin:' + x + 'px ' + y + 'px"><rect x="' + x + '" y="' + y + '" width="36" height="24" fill="#fff"/>';
      for (let k = 0; k < 5; k += 2) s += '<rect x="' + x + '" y="' + (y + k * 4.8) + '" width="36" height="4.8" fill="#ed2939"/>';
      return s + '<path d="M' + x + ' ' + y + 'l18 12-18 12z" fill="#3a6bff"/><circle cx="' + (x + 6) + '" cy="' + (y + 12) + '" r="2.4" fill="#fff"/></g>'; };
    let mural = ""; ["#ed2939", "#ffd34d", "#7cf29a", "#3a6bff", "#ff8ab0", "#2ad1c9"].forEach((c, k) => mural += '<path d="M' + (20 + k * 18) + ' 230q' + (8 + k * 3) + ' -' + (30 + k * 8) + ' ' + (18 + k * 4) + ' 0z" fill="' + c + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#bb4)"/>' + cloud("lm-drift", 0, 26, 1) +
      /* the old school: red brick, stone trim, tall windows, the gabled center */
      '<rect x="110" y="70" width="270" height="150" fill="#a8452c"/>' + brickLines(110, 70, 270, 150, "#86351f", 7) +
      '<path d="M200 70L245 30L290 70z" fill="#a8452c"/><path d="M200 70L245 30L290 70" fill="none" stroke="#e8dcc4" stroke-width="3"/>' +
      '<rect x="110" y="66" width="270" height="6" fill="#e8dcc4"/><rect x="110" y="140" width="270" height="4" fill="#e8dcc4"/>' +
      wins(124, 84, 10, 2, 26, 70, 14, 40, "#2a3a4a", "#ffe6a8") +
      '<rect x="226" y="176" width="38" height="44" fill="#3a2418"/>' +
      '<rect x="190" y="150" width="110" height="16" fill="#f2ead8"/>' + T(245, 162, "JULIA DE BURGOS", 10, "#7a2418") +
      /* the mural wall on the corner */
      '<rect x="10" y="120" width="100" height="100" fill="#f2ead8"/>' + mural +
      '<circle cx="60" cy="160" r="20" fill="#ffd34d"/><path d="M40 160h40M60 140v40" stroke="#ed2939" stroke-width="3"/>' +
      '<path d="M20 132q20-10 40 0t40 0" stroke="#3a6bff" stroke-width="5" fill="none"/>' +
      /* flags */
      '<rect x="120" y="20" width="2" height="50" fill="#ccc"/>' + pr(122, 20, "lm-sway") +
      '<rect x="360" y="24" width="2" height="46" fill="#ccc"/>' + pr(362, 24, "lm-sway lm-s2") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3a40"/>' +
      '<g class="lm-walk">' + fig(150, 250, "#1a1a2a", null, .8) + '</g>' +
      '<rect x="296" y="196" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff"/>' + T(344, 209, "E 106 St", 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      plaque(8, 8, 100, "LATINO", "CULTURAL CENTER", "#0a2a14", "#7cf29a") +
      tag("TANBOYS", 200, 254, 24, "#7cf29a", -4),
      sky("bb4", "#7fb6e6", "#f6e6c6"));
  }

  /* 5. The corner: Lexington Av and E 110 St, co-named Tito Puente Way — green street signs, a wall with his name sprayed on it */
  function corner() {
    let brick = "";
    for (let y = 40; y < 200; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#7a3a2c"/>';
    return svg(
      '<rect width="400" height="260" fill="#160d10"/>' +
      '<rect x="0" y="40" width="400" height="160" fill="#5a2a22"/>' + brick +
      '<rect x="0" y="0" width="400" height="40" fill="url(#skyC)"/>' +
      tag("BAMZ", 130, 128, 60, MINT, -8) +
      '<g class="drip"><rect x="158" y="124" width="4" height="22" fill="' + MINT + '"/><rect x="226" y="118" width="4" height="30" fill="' + MINT + '"/></g>' +
      tag("TANBOYS", 262, 166, 24, GOLD, -4) + tag("100 KEEP IT", 130, 190, 22, RED, 4) +
      '<circle class="spr" cx="360" cy="92" r="14" fill="' + MINT + '" opacity=".4"/>' +
      prFlag(330, 52, 48) +
      '<rect x="42" y="30" width="6" height="190" fill="#4a5a4a"/>' +
      '<rect x="-4" y="30" width="104" height="24" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="48" y="47" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Lexington Av</text>' +
      '<rect x="4" y="58" width="84" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="46" y="74" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">E 110 St</text>' +
      '<rect x="0" y="82" width="92" height="16" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="46" y="94" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#fff">Tito Puente Way</text>' +
      '<rect x="0" y="200" width="400" height="14" fill="#9a9a9a"/><rect x="0" y="214" width="400" height="46" fill="#2b2d31"/>',
      sky("skyC", "#0f1a33", "#3a2a5a"));
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

  window.SCENES = { train, spirit, pool, casita, corner };
})();
