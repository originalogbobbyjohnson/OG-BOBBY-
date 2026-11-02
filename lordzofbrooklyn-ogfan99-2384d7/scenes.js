/* Bay Ridge, Brooklyn opening scenes for the Lordz of Brooklyn game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drive{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}' +
    '@keyframes driveb{0%{transform:translateX(460px)}100%{transform:translateX(-60px)}}' +
    '.car{animation:drive 6s linear infinite}.car2{animation-delay:-2s}.car3{animation-delay:-4s}' +
    '.carb{animation:driveb 7s linear infinite}.carb2{animation-delay:-3.5s}' +
    '@keyframes sail{0%{transform:translateX(0)}100%{transform:translateX(-120px)}}' +
    '.ship{animation:sail 18s linear infinite alternate}' +
    '@keyframes roll{0%{transform:translateX(420px)}60%{transform:translateX(-10px)}100%{transform:translateX(-10px)}}' +
    '.roll{animation:roll 6s ease-out infinite}' +
    '@keyframes tw{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.tw{animation:tw 1.6s infinite}.tw2{animation-delay:.5s}.tw3{animation-delay:1s}' +
    '@keyframes mist{0%{opacity:0;transform:translate(0,0) scale(.6)}30%{opacity:.8}100%{opacity:0;transform:translate(30px,-14px) scale(1.6)}}' +
    '.mst{transform-box:fill-box;transform-origin:0 50%;animation:mist 1.8s ease-out infinite}' +
    '@keyframes bop{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}' +
    '.nt{animation:bop 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
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
  const GREEN = "#4cc76a", GOLD = "#e8b84a", ORANGE = "#ff8a2a", WHITE = "#f7f3ea", YEL = "#fccc0a";
  const street = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  /* a brick wall pattern */
  const bricks = (x0, y0, w, h, c, mortar) => {
    let b = '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="' + mortar + '"/>';
    for (let y = y0; y < y0 + h; y += 9) for (let x = x0 + (((y - y0) / 9) % 2 ? -10 : 0); x < x0 + w; x += 20)
      b += '<rect x="' + Math.max(x, x0) + '" y="' + y + '" width="' + (Math.min(x + 18, x0 + w) - Math.max(x, x0)) + '" height="7.5" fill="' + c + '"/>';
    return b;
  };

  /* 1. The R pulling into 77 St, underground under 4th Avenue in Bay Ridge: cream tile walls, the tile band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 116; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1ead6"/>';
    let cols = "";
    [34, 366].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="190" fill="#25402e"/><rect x="' + (x - 8) + '" y="0" width="16" height="6" fill="#18301f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#dcd3bb"/>' + tiles +
      /* green tile band */
      '<rect x="0" y="40" width="400" height="16" fill="#2f6b45"/><rect x="0" y="38" width="400" height="2" fill="#173822"/><rect x="0" y="56" width="400" height="2" fill="#173822"/>' +
      '<rect class="flk" x="0" y="0" width="400" height="5" fill="#fffbe0" opacity=".8"/>' +
      /* black station sign */
      '<rect x="92" y="66" width="216" height="34" rx="4" fill="#111"/><rect x="92" y="66" width="216" height="4" fill="#fff"/>' +
      '<text x="108" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">95 St</text>' +
      bullet(286, 84, "R", YEL, true) +
      '<text x="200" y="112" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="#3a3326">4 AV · BAY RIDGE →</text>' +
      /* train slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + YEL + '"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' + bullet(296, 136, "R", YEL, true) +
      '</g>' + cols +
      /* platform */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5d5a52"/>' +
      '<path d="M0 214h400" stroke="#4a4740" stroke-width="2"/>' +
      tag("L.O.B.", 30, 244, 32, GREEN, -5) + tag("THE LORDZ", 236, 244, 28, WHITE, -7));
  }

  /* 2. The Verrazzano-Narrows Bridge from the Shore Road promenade at dusk: twin gray towers, the long cable sag, cars crossing, a ship on the Narrows */
  function bridge() {
    const tower = x =>
      '<rect x="' + (x - 9) + '" y="40" width="6" height="128" fill="#8d99a6"/><rect x="' + (x + 3) + '" y="40" width="6" height="128" fill="#8d99a6"/>' +
      '<rect x="' + (x - 9) + '" y="44" width="18" height="4" fill="#7b8794"/><rect x="' + (x - 9) + '" y="88" width="18" height="4" fill="#7b8794"/><rect x="' + (x - 9) + '" y="128" width="18" height="4" fill="#7b8794"/>' +
      '<circle class="flk" cx="' + x + '" cy="37" r="2.2" fill="#ff3b30"/>';
    let hang = "";
    for (let x = 4; x < 400; x += 10) {
      /* main cable: dips between the towers at x=90 and x=330 */
      let y;
      if (x < 90) y = 42 + (90 - x) * 0.9; else if (x > 330) y = 42 + (x - 330) * 0.9; else { const t = (x - 210) / 120; y = 42 + 72 * (1 - t * t); }
      if (y < 138) hang += '<path d="M' + x + ' ' + y.toFixed(1) + 'V140" stroke="#9aa6b2" stroke-width=".8" opacity=".8"/>';
    }
    let lights = "";
    for (let x = 10; x < 400; x += 24) lights += '<circle class="tw ' + (x % 3 ? "tw2" : "") + '" cx="' + x + '" cy="138" r="1.4" fill="#ffe7a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(8) +
      '<circle cx="330" cy="70" r="16" fill="#ffd79a" opacity=".8"/>' +
      /* Staten Island far shore */
      '<path d="M200 168q40-10 90-8t110 2v8H200z" fill="#3a3f5c"/>' +
      /* the cables */
      '<path d="M0 123L90 42Q210 186 330 42L400 105" stroke="#b7c2cc" stroke-width="2.5" fill="none"/>' + hang +
      /* deck */
      '<rect x="0" y="140" width="400" height="9" fill="#6f7b88"/><rect x="0" y="149" width="400" height="3" fill="#4a5462"/>' +
      tower(90) + tower(330) + lights +
      '<g class="car"><rect x="0" y="135" width="12" height="5" rx="1.5" fill="#d62828"/></g><g class="car car2"><rect x="0" y="135" width="12" height="5" rx="1.5" fill="#f7f3ea"/></g><g class="car car3"><rect x="0" y="135" width="10" height="5" rx="1.5" fill="' + GOLD + '"/></g>' +
      /* the Narrows */
      '<rect x="0" y="168" width="400" height="48" fill="#1d3550"/>' +
      '<path d="M0 182h400M0 196h400M0 208h400" stroke="#2f5578" stroke-width="1.5" stroke-dasharray="14 18"/>' +
      '<g class="ship"><path d="M300 180h56l-6 9h-46z" fill="#2b2f36"/><rect x="312" y="172" width="22" height="8" fill="#c94a2a"/><rect x="336" y="174" width="10" height="6" fill="#e8e2d0"/></g>' +
      /* promenade railing + path */
      '<rect x="0" y="216" width="400" height="44" fill="#55524b"/><rect x="0" y="214" width="400" height="4" fill="#2b2a28"/>' +
      (function () { let r = ""; for (let x = 6; x < 400; x += 16) r += '<rect x="' + x + '" y="196" width="2.5" height="20" fill="#2b2a28"/>'; return r; })() +
      '<rect x="0" y="194" width="400" height="4" fill="#2b2a28"/>' +
      '<rect x="104" y="8" width="192" height="34" rx="4" fill="#123a24" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="25" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="1" fill="#fff">VERRAZZANO-NARROWS</text>' +
      '<text x="200" y="36" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8" letter-spacing="3" fill="' + GOLD + '">SHORE ROAD · BAY RIDGE</text>',
      sky("g2", "#1a2240", "#e08a5a"));
  }

  /* 3. A Bay Ridge block at night: brick row houses with stoops and bay windows, string lights, a boombox on the stoop */
  function block() {
    const house = (x, w, brick, trim) =>
      bricks(x, 70, w, 140, brick, "#4a2418") +
      '<rect x="' + x + '" y="62" width="' + w + '" height="10" fill="' + trim + '"/><rect x="' + (x - 2) + '" y="58" width="' + (w + 4) + '" height="5" fill="#2b1a12"/>' +
      /* bay window */
      '<path d="M' + (x + 10) + ' 150v-56h' + (w - 52) + 'v56z" fill="' + trim + '"/>' +
      '<rect x="' + (x + 15) + '" y="100" width="' + ((w - 64) / 2) + '" height="40" fill="#ffd98a"/><rect x="' + (x + 21 + (w - 64) / 2) + '" y="100" width="' + ((w - 64) / 2) + '" height="40" fill="#ffe7a8"/>' +
      /* door + stoop */
      '<rect x="' + (x + w - 34) + '" y="104" width="24" height="46" fill="#2a1a12"/><rect x="' + (x + w - 31) + '" y="108" width="18" height="38" fill="#4d2a18"/><path d="M' + (x + w - 36) + ' 104h28" stroke="' + trim + '" stroke-width="4"/>' +
      '<rect x="' + (x + w - 40) + '' + '" y="150" width="36" height="10" fill="#9a958c"/><rect x="' + (x + w - 46) + '" y="160" width="46" height="10" fill="#a9a39a"/><rect x="' + (x + w - 52) + '" y="170" width="54" height="12" fill="#bdb7ad"/>' +
      '<rect x="' + (x + 12) + '" y="76" width="18" height="16" fill="#ffe7a8" opacity=".85"/><rect x="' + (x + 40) + '" y="76" width="18" height="16" fill="#3a2c2a"/>';
    let bulbs = "";
    for (let i = 0; i < 22; i++) {
      const x = 8 + i * 18, y = 52 + Math.sin(i * 0.9) * 4;
      bulbs += '<circle class="tw ' + ["", "tw2", "tw3"][i % 3] + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="2.4" fill="' + [GREEN, WHITE, ORANGE][i % 3] + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(14) +
      house(6, 128, "#8b3a2a", "#cfc4ae") + house(136, 128, "#7a3324", "#e2d8c2") + house(266, 128, "#93412e", "#cfc4ae") +
      '<path d="M0 50q200 14 400 0" stroke="#222" stroke-width="1" fill="none"/>' + bulbs +
      /* sidewalk, curb, street */
      '<rect x="0" y="182" width="400" height="28" fill="#9a958c"/><rect x="0" y="208" width="400" height="4" fill="#d9d3c8"/><rect x="0" y="212" width="400" height="48" fill="#22252b"/>' +
      /* street tree */
      '<rect x="120" y="140" width="6" height="44" fill="#3b2418"/><circle cx="123" cy="132" r="20" fill="#2f5d34"/><circle cx="110" cy="142" r="12" fill="#3a6e3f"/>' +
      /* boombox on the stoop */
      '<g transform="translate(176 158)"><rect x="0" y="0" width="40" height="22" rx="3" fill="#2e2e33" stroke="#111" stroke-width="1.5"/><circle cx="10" cy="12" r="6" fill="#111" stroke="#777"/><circle cx="30" cy="12" r="6" fill="#111" stroke="#777"/><rect x="16" y="4" width="8" height="4" fill="#9fe3ff"/></g>' +
      '<text class="nt" x="180" y="152" font-size="14" fill="' + GREEN + '">♪</text><text class="nt nt2" x="200" y="148" font-size="12" fill="#fff">♫</text><text class="nt nt3" x="214" y="154" font-size="14" fill="' + ORANGE + '">♪</text>' +
      tag("ALL IN THE FAMILY", 20, 240, 22, GOLD, -3),
      sky("g3", "#0b1226", "#2a3560"));
  }

  /* 4. The train yard after dark: a subway car rolling out, painted end to end with a LORDZ whole-car piece (Tales From The Rails) */
  function yard() {
    let fence = "";
    for (let x = 0; x < 400; x += 8) fence += '<path d="M' + x + ' 60l8 8M' + (x + 8) + ' 60l-8 8" stroke="#6b7280" stroke-width=".6" opacity=".5"/>';
    let ties = "";
    for (let x = 0; x < 400; x += 14) ties += '<rect x="' + x + '" y="206" width="8" height="10" fill="#4a3424"/>';
    const car =
      '<rect x="10" y="104" width="360" height="92" rx="10" fill="#b9bec6" stroke="#5b6270" stroke-width="2"/>' +
      '<rect x="10" y="104" width="360" height="12" rx="6" fill="#9aa1ab"/>' +
      /* the piece */
      '<rect x="18" y="118" width="344" height="70" rx="4" fill="#163a24"/>' +
      '<path d="M18 168q60-30 120 0t120 0t104-6v26H18z" fill="' + ORANGE + '" opacity=".9"/>' +
      '<path d="M18 128q80 22 170 0t174 4v-14H18z" fill="#2c6bd6" opacity=".85"/>' +
      tag("LORDZ", 70, 172, 50, GREEN, -4) + tag("KAVES", 250, 150, 22, WHITE, -8) +
      '<text x="292" y="182" font-family="Sedgwick Ave Display, cursive" font-size="12" fill="' + GOLD + '" transform="rotate(-6 292 182)">B.K.</text>' +
      '<rect x="30" y="198" width="40" height="6" fill="#2b2f36"/><rect x="310" y="198" width="40" height="6" fill="#2b2f36"/>' +
      '<circle cx="364" cy="184" r="4" fill="#fff6c2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(16) +
      /* the yard lights */
      '<rect x="60" y="20" width="4" height="84" fill="#2b2f36"/><rect x="50" y="18" width="24" height="6" fill="#ffe7a8" class="flk"/>' +
      '<rect x="330" y="20" width="4" height="84" fill="#2b2f36"/><rect x="320" y="18" width="24" height="6" fill="#ffe7a8" class="flk flk2"/>' +
      '<rect x="0" y="68" width="400" height="36" fill="#11161f"/>' + fence + '<rect x="0" y="58" width="400" height="3" fill="#6b7280"/>' +
      '<g class="roll">' + car + '</g>' +
      /* rails */
      '<rect x="0" y="204" width="400" height="16" fill="#2a241f"/>' + ties +
      '<rect x="0" y="206" width="400" height="3" fill="#9aa1ab"/><rect x="0" y="214" width="400" height="3" fill="#9aa1ab"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#1b1a18"/>' +
      /* the spray can */
      '<g transform="translate(26 222)"><rect x="0" y="6" width="14" height="26" rx="3" fill="' + GREEN + '" stroke="#111" stroke-width="1.5"/><rect x="3" y="0" width="8" height="7" fill="#ccc" stroke="#111"/><circle class="mst" cx="15" cy="3" r="5" fill="' + GREEN + '" opacity=".6"/></g>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="3" fill="' + GOLD + '">TALES FROM THE RAILS</text>',
      sky("g4", "#05070d", "#1a2238"));
  }

  /* backdrop for the corner: the Verrazzano's Brooklyn tower right over 4th Av and 95th St, seen from below at night,
     the main cable sweeping off toward mid-span, the upper deck with cars crossing */
  function verrazzanoBelow() {
    const qb = (p0, c, p1, t) => [(1 - t) * (1 - t) * p0[0] + 2 * t * (1 - t) * c[0] + t * t * p1[0], (1 - t) * (1 - t) * p0[1] + 2 * t * (1 - t) * c[1] + t * t * p1[1]];
    let s = '<style>@keyframes icSl{from{transform:translateX(-60px)}to{transform:translateX(460px)}}@keyframes icSlL{from{transform:translateX(460px)}to{transform:translateX(-60px)}}@keyframes icBl{0%,49%{opacity:1}50%,100%{opacity:.2}}@keyframes icSw{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}@keyframes icWv{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}@keyframes icGl{0%,100%{opacity:.12}50%{opacity:.3}}' +
      '.icS{animation:icSl 7s linear infinite}.icS2{animation-delay:-3.5s}.icSs{animation-duration:16s}.icL{animation:icSlL 8s linear infinite}.icLs{animation-duration:15s}.icB{animation:icBl 1s steps(1) infinite}.icB2{animation-delay:-.5s}' +
      '.icSw{animation:icSw 7s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.icSw2{animation-delay:-3.5s;animation-duration:9s}.icW{animation:icWv 1.3s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}.icG{animation:icGl 2.6s ease-in-out infinite}</style>' +
      '<ellipse cx="362" cy="110" rx="70" ry="130" fill="#9fb4d0" opacity=".07"/>';
    const leg = x => '<rect x="' + x + '" y="2" width="12" height="218" fill="#8e98a4"/><rect x="' + (x + 8) + '" y="2" width="4" height="218" fill="#6c7682"/>';
    s += leg(337) + leg(375) +
      '<rect x="335" y="2" width="54" height="9" fill="#a3adb8"/><rect x="337" y="74" width="50" height="7" fill="#7d8792"/><rect x="337" y="150" width="50" height="7" fill="#7d8792"/>' +
      '<circle class="icB" cx="343" cy="3" r="2.2" fill="#ff4a3d"/><circle class="icB icB2" cx="381" cy="3" r="2.2" fill="#ff4a3d"/>';
    /* the main cables: down toward mid-span, and the short side span back to the anchorage */
    const P0 = [362, 8], C = [150, 42], P1 = [0, 34];
    s += '<path d="M362 8Q150 42 0 34" fill="none" stroke="#b4bec9" stroke-width="2.6"/><path d="M362 11Q150 45 0 37" fill="none" stroke="#7d8894" stroke-width="1.4"/>' +
      '<path d="M362 8Q392 22 400 30" fill="none" stroke="#b4bec9" stroke-width="2.6"/>';
    for (let t = 0.08; t < 1; t += 0.045) { const p = qb(P0, C, P1, t); s += '<path d="M' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + 'V47" stroke="#8d98a4" stroke-width=".8"/>'; }
    /* the upper deck, its lights, and the traffic */
    s += '<rect x="0" y="47" width="400" height="8" fill="#4d5762"/><rect x="0" y="55" width="400" height="3" fill="#2f363e"/>';
    for (let x = 8; x < 400; x += 24) s += '<circle class="icB' + (x % 48 ? " icB2" : "") + '" cx="' + x + '" cy="51" r="1.2" fill="#ffe7a8"/>';
    s += '<g class="icS"><rect x="0" y="42" width="14" height="5" rx="1.5" fill="#d23b2a"/><circle cx="14" cy="44.5" r="1.1" fill="#fff6c2"/></g>' +
      '<g class="icS icS2"><rect x="0" y="42" width="12" height="5" rx="1.5" fill="#e8e8e8"/><circle cx="12" cy="44.5" r="1.1" fill="#fff6c2"/></g>' +
      '<g class="icL"><rect x="0" y="42" width="16" height="5" rx="1.5" fill="#e8b84a"/><circle cx="0" cy="44.5" r="1.1" fill="#ff5a4a"/></g>';
    return s;
  }

  /* 5. 4th Av and 95th St, under the Verrazzano: green street signs, a streetlight, a brick wall tagged LORDZ OF BROOKLYN */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(10) + verrazzanoBelow() +
      bricks(14, 62, 244, 158, "#7a3324", "#3a1a12") +
      '<rect x="14" y="62" width="244" height="158" fill="#000" opacity=".25"/>' +
      tag("LORDZ", 30, 126, 52, GREEN, -7) + tag("OF BROOKLYN", 40, 170, 28, WHITE, -4) + tag("BROOKLYN WAY", 36, 208, 18, ORANGE, -3) + tag("L.O.B.", 192, 210, 20, GOLD, -6) +
      /* streetlight */
      '<rect x="362" y="40" width="5" height="180" fill="#1d2329"/><path d="M364 42h-26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M322 46h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M322 54h26l20 166h-66z" fill="#ffe7a8"/></g>' +
      /* sign pole */
      '<rect x="300" y="60" width="5" height="160" fill="#1d2329"/>' +
      street(270, 64, 66, "4 Av") + street(270, 86, 66, "95 St") +
      /* subway entrance globe */
      '<circle class="flk flk2" cx="282" cy="168" r="6" fill="#3cb043"/><rect x="280" y="174" width="4" height="46" fill="#1d2329"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1b2e", "#2a3d5f"));
  }

  window.SCENES = { train, bridge, block, yard, corner };
})();
