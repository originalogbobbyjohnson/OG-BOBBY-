/* The Sugarhill Gang game (NJ map, Englewood, New Jersey: Wonder Mike, Master Gee and Big Bank Hank).
   1. Palisade Av & Dean St, downtown Englewood: the NJ Transit 166 / 178 bus pulling in at the stop (Englewood has no train).
   2. Crispy Crust Pizza, 44 W Palisade Av: where Hank rapped for Sylvia Robinson behind the counter, the plaque on the wall, the car outside.
   3. Sylvia Robinson's Spanish-style house up on the hill in Englewood, the night of the 1979 audition: stucco, red tile roof, lit arches.
   4. The Soap Factory, N.J.: their first filmed show, three mics on stage, soap bubbles floating up, the film camera rolling.
   5. Palisade Av & N Van Brunt St: green street signs, the wall tagged SUGARHILL GANG, the old 1926 theater marquee (bergenPAC) behind.
   400 x 260 SVGs. No logos, no faces, no digit nine drawn. Scene classes are prefixed sg-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sgcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.sg-car{animation:sgcar 8s linear infinite}.sg-car2{animation-delay:-4s}' +
    '@keyframes sgblink{0%,100%{opacity:.25}50%{opacity:1}}.sg-bl{animation:sgblink 1.6s ease-in-out infinite}.sg-bl2{animation-delay:.53s}.sg-bl3{animation-delay:1.06s}' +
    '@keyframes sgflick{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.95}}.sg-flk{animation:sgflick 2.6s infinite}' +
    '@keyframes sgnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.sg-note{animation:sgnote 3s ease-out infinite}.sg-note2{animation-delay:1s}.sg-note3{animation-delay:2s}' +
    '@keyframes sgbub{0%{transform:translateY(0);opacity:0}15%{opacity:.9}100%{transform:translateY(-150px);opacity:0}}.sg-bub{animation:sgbub 4s ease-in infinite}.sg-bub2{animation-delay:-1.3s}.sg-bub3{animation-delay:-2.6s}' +
    '@keyframes sgspin{to{transform:rotate(360deg)}}.sg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:sgspin 1.4s linear infinite}' +
    '@keyframes sgsweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.sg-beam{transform-box:fill-box;transform-origin:50% 0%;animation:sgsweep 3.2s ease-in-out infinite}.sg-beam2{animation-delay:-1.6s}' +
    '@keyframes sgbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sg-bob{animation:sgbob .55s ease-in-out infinite}.sg-bob2{animation-delay:.18s}.sg-bob3{animation-delay:.36s}' +
    '@keyframes sgglow{0%,100%{opacity:.55}50%{opacity:1}}.sg-glow{animation:sgglow 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* a route plate for a bus (rounded pill, NJ Transit blue) */
  const plate = (x, y, n) => '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/>' + txt(n, x, y + 5, 13, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 37) % 54) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="7" fill="' + col + '"/><rect x="' + (x - 7) + '" y="' + (y + 8) + '" width="14" height="24" rx="6" fill="' + col + '"/></g>';
  const GOLD = "#ffcc33", PINK = "#ff4f9a", SKY = "#5fd3ff", CREAM = "#f6ecd6", BRICK = "#8a4a34";

  /* 1. Palisade Av & Dean St: dusk downtown Englewood, brick storefronts, the black stop sign with the 166 and 178 plates, the bus pulling in */
  function busstop() {
    const front = (x, w, h, col, aw) => { let g = '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>';
      for (let yy = 150 - h + 10; yy < 108; yy += 18) for (let xx = x + 8; xx < x + w - 12; xx += 20) g += '<rect class="sg-bl sg-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="10" height="11" fill="#ffd98a" opacity=".8"/>';
      g += '<rect x="' + x + '" y="112" width="' + w + '" height="10" fill="' + aw + '"/><rect x="' + (x + 6) + '" y="124" width="' + (w - 12) + '" height="24" fill="#2b2f3a"/><rect x="' + (x + 8) + '" y="126" width="' + (w - 16) + '" height="20" fill="#ffe7a8" opacity=".35"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#sga)"/>' + stars(10) +
      front(0, 90, 96, BRICK, PINK) + front(92, 80, 80, "#a0644a", "#2f6e5a") + front(174, 100, 104, "#7a3f2e", GOLD) + front(276, 124, 88, "#9a5a40", SKY) +
      /* sidewalk + street */
      '<rect x="0" y="150" width="400" height="20" fill="#9a9a98"/><rect x="0" y="168" width="400" height="92" fill="#3b3d42"/>' +
      '<path d="M0 222h400" stroke="#e8d27a" stroke-width="3" stroke-dasharray="22 16"/>' +
      /* lamp posts */
      [30, 250].map(x => '<rect x="' + x + '" y="60" width="4" height="92" fill="#2a2c30"/><circle class="sg-flk" cx="' + (x + 2) + '" cy="58" r="6" fill="#fff4c2"/>').join("") +
      /* the stop sign: black sign like a station sign, with the two route plates */
      '<rect x="306" y="40" width="5" height="112" fill="#30343a"/>' +
      '<rect x="196" y="20" width="200" height="56" rx="4" fill="#111"/><rect x="196" y="20" width="200" height="3" fill="#fff"/>' +
      txt("Palisade Av &amp; Dean St", 296, 42, 13, "#fff") + txt("BUS STOP", 238, 66, 10, GOLD, 'letter-spacing="2"') +
      plate(310, 62, "166") + plate(352, 62, "178") +
      /* the bus (slides in like the train) */
      '<g class="anim-train">' +
        '<rect x="14" y="150" width="236" height="64" rx="8" fill="#e9edf1"/><rect x="14" y="184" width="236" height="8" fill="#0039a6"/><rect x="14" y="194" width="236" height="4" fill="#e65c2c"/>' +
        [26, 70, 114, 158].map(x => '<rect x="' + x + '" y="163" width="38" height="18" rx="2" fill="#2a3a52"/>').join("") +
        '<rect x="208" y="156" width="36" height="44" rx="3" fill="#1d2a3c"/>' +
        
        '<rect x="150" y="151" width="96" height="10" rx="1" fill="#111"/><text x="198" y="159" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb000" letter-spacing="1">166 ENGLEWOOD</text>' +
        '<circle cx="60" cy="216" r="11" fill="#151515"/><circle cx="60" cy="216" r="4" fill="#888"/><circle cx="200" cy="216" r="11" fill="#151515"/><circle cx="200" cy="216" r="4" fill="#888"/>' +
        '<circle class="sg-glow" cx="246" cy="204" r="3" fill="#fff6c2"/>' +
      '</g>' +
      txt("DOWNTOWN ENGLEWOOD, N.J.", 120, 246, 10, CREAM, 'letter-spacing="2" opacity=".85"'),
      sky("sga", "#1b1440", "#e2785a"));
  }

  /* 2. Crispy Crust Pizza, 44 W Palisade Av: the storefront window, oven glowing, a silhouette tossing dough at the counter (Hank), the plaque, the big car parked out front */
  function pizza() {
    let tiles = ""; for (let x = 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="212" width="10" height="10" fill="#c9302c"/><rect x="' + (x + 10) + '" y="222" width="10" height="10" fill="#c9302c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgb)"/>' +
      /* building + awning */
      '<rect x="20" y="20" width="360" height="200" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 28; y < 60; y += 8) b += '<path d="M20 ' + y + 'h360" stroke="#743c2a" stroke-width="1"/>'; return b; })() +
      '<path d="M30 62h340l-14 22h-312z" fill="#d93a32"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (44 + i * 40) + ' 62h20l-2 22h-20z" fill="#f6ecd6"/>').join("") +
      /* neon sign */
      '<rect x="140" y="26" width="120" height="30" rx="4" fill="#120b0b" stroke="' + GOLD + '" stroke-width="1.5"/>' + txt("PIZZA", 200, 49, 22, "#ff5a4a", 'class="sg-flk" letter-spacing="4"') +
      /* big window: inside the shop */
      '<rect x="40" y="88" width="320" height="124" fill="#2a1a12"/><rect x="40" y="88" width="320" height="124" fill="#ffd28a" opacity=".22"/>' +
      /* oven */
      '<rect x="220" y="104" width="120" height="58" rx="3" fill="#5a5f66"/><rect x="232" y="116" width="96" height="30" rx="2" fill="#1b0f0a"/><rect class="sg-glow" x="236" y="120" width="88" height="22" rx="2" fill="#ff7a1a"/>' +
      txt("44 W PALISADE AV", 280, 157, 7, "#ddd", 'letter-spacing="1"') +
      /* the plaque on the wall */
      '<rect x="56" y="98" width="70" height="34" rx="2" fill="#c9a24a" stroke="#7a5a10" stroke-width="2"/>' + txt("WHERE IT", 91, 112, 7, "#3a2a08") + txt("ALL BEGAN", 91, 124, 7, "#3a2a08") +
      /* counter + Hank silhouette tossing dough */
      '<rect x="40" y="170" width="320" height="42" fill="#d9d2c0"/><rect x="40" y="166" width="320" height="6" fill="#9b9384"/>' +
      '<g><circle cx="170" cy="128" r="10" fill="#0e0a08"/><rect x="158" y="139" width="24" height="30" rx="8" fill="#0e0a08"/><path d="M160 145l-12 -16M180 145l12 -16" stroke="#0e0a08" stroke-width="6" stroke-linecap="round"/></g>' +
      '<g class="sg-spin"><ellipse cx="170" cy="104" rx="20" ry="5" fill="#f2d79a" stroke="#c99a4a" stroke-width="1.5"/></g>' +
      /* a slice on the counter */
      '<path d="M90 168l30 -14l4 14z" fill="#f2c14e" stroke="#c9302c" stroke-width="2"/><circle cx="108" cy="162" r="2" fill="#c9302c"/>' +
      /* music notes coming out of the shop */
      '<text class="sg-note" x="196" y="128" font-size="16" fill="' + GOLD + '">&#9835;</text><text class="sg-note sg-note2" x="140" y="120" font-size="14" fill="' + PINK + '">&#9834;</text><text class="sg-note sg-note3" x="206" y="140" font-size="12" fill="' + SKY + '">&#9835;</text>' +
      /* checkered tile kick plate + sidewalk */
      '<rect x="0" y="212" width="400" height="20" fill="#f6ecd6"/>' + tiles +
      '<rect x="0" y="232" width="400" height="28" fill="#56585d"/>' +
      txt("HANK RAPPED IT RIGHT HERE", 200, 251, 10, CREAM, 'letter-spacing="2"'),
      sky("sgb", "#1a1230", "#3a2050"));
  }

  /* 3. Sylvia Robinson's Spanish-style house on the hill, Englewood, the audition night: white stucco, red tile roof, glowing arches, the car in the drive */
  function hill() {
    const arch = (x, y) => '<path d="M' + x + ' ' + (y + 30) + 'v-18a10 10 0 0 1 20 0v18z" fill="#ffd98a" class="sg-bl sg-bl' + ((x / 10) % 3 + 1) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgc)"/>' + stars(28) +
      '<circle cx="330" cy="44" r="18" fill="#fff4d6"/><circle cx="337" cy="40" r="16" fill="#151236"/>' +
      /* the hill */
      '<path d="M0 200q90-70 200-74q110 4 200 64v70h-400z" fill="#1d3a2a"/><path d="M0 230q120-40 400-20v50h-400z" fill="#16301f"/>' +
      /* trees */
      [40, 70, 330, 362].map((x, i) => '<path d="M' + x + ' ' + (196 - i % 2 * 8) + 'l14 -40l14 40z" fill="#0f2a1a"/>').join("") +
      /* the house */
      '<rect x="110" y="96" width="180" height="62" fill="#efe6d2"/>' +
      '<path d="M100 98l100 -26l100 26z" fill="#b5462a"/>' +
      (() => { let r = ""; for (let x = 104; x < 298; x += 8) r += '<path d="M' + x + ' 98v-' + (Math.max(0, 26 - Math.abs(200 - x) * 0.26)).toFixed(1) + '" stroke="#8e341d" stroke-width="1"/>'; return r; })() +
      arch(124, 112) + arch(154, 112) + arch(184, 112) +
      '<rect x="240" y="66" width="56" height="92" fill="#e8dcc4"/><path d="M232 68l36 -16l36 16z" fill="#a33d24"/>' + arch(258, 80) + arch(258, 118) +
      '<path d="M204 158v-26a12 12 0 0 1 24 0v26z" fill="#5a3a22"/><circle cx="222" cy="146" r="1.5" fill="' + GOLD + '"/>' +
      /* three silhouettes in the arches, bobbing to the beat */
      [134, 164, 194].map((x, i) => '<g class="sg-bob' + (i ? ' sg-bob' + (i + 1) : '') + ' sg-bob"><circle cx="' + x + '" cy="128" r="3.5" fill="#5a3a1a"/><path d="M' + (x - 6) + ' 142q6 -10 12 0z" fill="#5a3a1a"/></g>').join("") +
      /* driveway + car */
      '<path d="M216 158q-30 40 -120 72h60q70 -30 88 -72z" fill="#8c8576"/>' +
      '<g transform="translate(120 192)"><rect x="0" y="6" width="74" height="16" rx="5" fill="#f6ecd6"/><path d="M12 6l10 -10h28l10 10z" fill="#e3d6bc"/><circle cx="16" cy="22" r="6" fill="#111"/><circle cx="58" cy="22" r="6" fill="#111"/><circle class="sg-glow" cx="73" cy="12" r="2.5" fill="#fff6c2"/></g>' +
      /* music drifting out */
      '<text class="sg-note" x="180" y="100" font-size="16" fill="' + GOLD + '">&#9835;</text><text class="sg-note sg-note2" x="250" y="70" font-size="14" fill="' + PINK + '">&#9834;</text><text class="sg-note sg-note3" x="140" y="96" font-size="12" fill="' + SKY + '">&#9835;</text>' +
      txt("THE AUDITION, UP ON THE HILL", 200, 250, 10, CREAM, 'letter-spacing="2"'),
      sky("sgc", "#0d0b26", "#3a2a5a"));
  }

  /* 4. The Soap Factory, N.J.: three MCs (silhouettes) on stage, bubbles floating up, spotlights, the film camera rolling */
  function soap() {
    const bub = (x, y, r, k) => '<circle class="sg-bub sg-bub' + k + '" cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#bfe9ff" fill-opacity=".18" stroke="#e6f7ff" stroke-width="1.2"/>';
    let crowd = ""; for (let i = 0; i < 14; i++) crowd += '<circle class="sg-bob' + (i % 3 ? " sg-bob" + (i % 3 + 1) : "") + ' sg-bob" cx="' + (12 + i * 28) + '" cy="' + (232 + (i % 2) * 6) + '" r="9" fill="#0a0812"/>';
    const mc = (x, h) => '<g><circle cx="' + x + '" cy="' + (124 - h) + '" r="9" fill="#0a0812"/><rect x="' + (x - 10) + '" y="' + (134 - h) + '" width="20" height="' + (40 + h) + '" rx="7" fill="#0a0812"/><path d="M' + (x + 9) + ' ' + (142 - h) + 'l8 -12" stroke="#0a0812" stroke-width="4" stroke-linecap="round"/><circle cx="' + (x + 18) + '" cy="' + (128 - h) + '" r="3" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgd)"/>' +
      '<g class="sg-beam"><path d="M110 20l-46 170h92z" fill="#fff6c2" opacity=".14"/></g><g class="sg-beam sg-beam2"><path d="M290 20l-46 170h92z" fill="' + PINK + '" opacity=".14"/></g>' +
      /* banner */
      '<rect x="100" y="16" width="200" height="40" rx="3" fill="#111" stroke="' + SKY + '" stroke-width="2"/>' + txt("THE SOAP FACTORY", 200, 36, 15, SKY, 'letter-spacing="2"') + txt("LIVE TONIGHT", 200, 50, 9, GOLD, 'letter-spacing="3" class="sg-flk"') +
      /* stage */
      '<rect x="20" y="172" width="360" height="28" fill="#26262e"/><rect x="20" y="168" width="360" height="6" fill="' + PINK + '"/>' +
      [40, 90, 140, 200, 260, 310, 360].map((x, i) => '<circle class="sg-bl sg-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="184" r="4" fill="' + [GOLD, PINK, SKY][i % 3] + '"/>').join("") +
      /* the three MCs (the tall one is Hank) */
      mc(150, 0) + mc(200, 10) + mc(250, 0) +
      /* film camera on a tripod */
      '<g transform="translate(330 104)"><rect x="0" y="0" width="34" height="22" rx="3" fill="#2a2a30"/><rect x="-12" y="6" width="12" height="10" fill="#444"/><circle cx="8" cy="-6" r="8" fill="#2a2a30" stroke="#666"/><circle cx="26" cy="-6" r="8" fill="#2a2a30" stroke="#666"/>' +
        '<g class="sg-spin"><path d="M8 -12v12M2 -6h12" stroke="#777" stroke-width="1.5"/></g><g class="sg-spin"><path d="M26 -12v12M20 -6h12" stroke="#777" stroke-width="1.5"/></g>' +
        '<circle class="sg-bl" cx="30" cy="6" r="2.5" fill="#ff2a2a"/><path d="M17 22l-12 44M17 22v44M17 22l12 44" stroke="#555" stroke-width="2"/></g>' +
      /* bubbles */
      bub(60, 200, 9, 1) + bub(100, 210, 6, 2) + bub(180, 205, 11, 3) + bub(230, 212, 7, 1) + bub(300, 202, 10, 2) + bub(350, 214, 6, 3) + bub(140, 214, 5, 2) + bub(270, 208, 5, 3) +
      crowd,
      sky("sgd", "#0b0718", "#2a1640"));
  }

  /* 5. Palisade Av & N Van Brunt St: green street signs, the wall tagged SUGARHILL GANG, the old theater (bergenPAC) and its chasing marquee behind */
  function corner() {
    let bulbs = ""; for (let i = 0; i < 20; i++) bulbs += '<circle class="sg-bl sg-bl' + (i % 3 + 1) + '" cx="' + (112 + i * 8.6) + '" cy="96" r="2.2" fill="#fff2a8"/><circle class="sg-bl sg-bl' + ((i + 1) % 3 + 1) + '" cx="' + (112 + i * 8.6) + '" cy="124" r="2.2" fill="#fff2a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sge)"/>' + stars(14) +
      /* the theater facade: cream terracotta, arched windows, vertical sign, marquee */
      '<rect x="90" y="18" width="220" height="112" fill="#e9dcc0"/><path d="M90 18h220v8h-220z" fill="#c9b48a"/>' +
      [112, 152, 192, 232, 272].map(x => '<path d="M' + x + ' 82v-30a8 8 0 0 1 16 0v30z" fill="#3a2f45"/><path d="M' + x + ' 82v-30a8 8 0 0 1 16 0v30z" fill="#ffd98a" opacity=".35"/>').join("") +
      '<rect x="190" y="0" width="20" height="54" fill="#7a1f2a" stroke="' + GOLD + '" stroke-width="1.5"/>' + [0, 1, 2, 3, 4, 5].map(i => '<circle class="sg-bl sg-bl' + (i % 3 + 1) + '" cx="200" cy="' + (6 + i * 8.4) + '" r="2.4" fill="#fff2a8"/>').join("") +
      '<rect x="104" y="90" width="192" height="40" fill="#1a1420" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      txt("TONIGHT", 200, 116, 15, PINK, 'letter-spacing="3"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("SUGARHILL GANG", 10, 196, 36, GOLD, -5) + tag("HIP HOP", 30, 222, 18, PINK, -3) + tag("BIG BANK HANK", 168, 220, 16, CREAM, -4) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="sg-car"><rect x="0" y="238" width="48" height="13" rx="4" fill="' + SKY + '"/><circle cx="11" cy="251" r="4" fill="#111"/><circle cx="37" cy="251" r="4" fill="#111"/></g>' +
      '<g class="sg-car sg-car2"><rect x="0" y="240" width="40" height="12" rx="4" fill="' + PINK + '"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="60" width="5" height="168" fill="#3d4b3f"/>' +
      '<rect x="284" y="64" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Palisade Av", 340, 80, 12, "#fff") +
      '<rect x="284" y="90" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("N Van Brunt St", 340, 106, 11, "#fff") +
      '<circle class="sg-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("sge", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { busstop: busstop, pizza: pizza, hill: hill, soap: soap, corner: corner };
})();
