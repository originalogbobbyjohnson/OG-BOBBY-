/* Elmhurst, Queens opening scenes for the Homeboy Sandman game. Each one is a small animated SVG, 400 x 260.
   Other Queens games already use QB, LIC, Jamaica, Flushing Meadows, Forest Hills, Roosevelt Av and Rockaway, so these rooms use:
   the M/R at Elmhurst Av under Broadway, Newtown High School's red-brick-and-limestone clock tower, old St. James Church
   (the 1735 white clapboard church on Broadway), the Elmhurst gas tanks beside the Long Island Expressway (the old Queens
   traffic-report landmark, now Elmhurst Park), and Broadway & Elmhurst Av. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes carb{from{transform:translateX(520px)}to{transform:translateX(-120px)}}' +
    '.carb{animation:carb 7s linear infinite}.carb2{animation-delay:-3.5s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.hand{transform-box:view-box;transform-origin:200px 80px;animation:spin 10s linear infinite}.hand2{animation-duration:80s}' +
    '@keyframes swing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}' +
    '.bell{transform-box:view-box;transform-origin:200px 64px;animation:swing 1.6s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,280px) rotate(360deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:50% 50%;animation:fall 7s linear infinite}.lf2{animation-delay:-2.3s}.lf3{animation-delay:-4.6s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.blk{animation:blink 1.2s infinite}.blk2{animation-delay:-.6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes sand{0%{transform:translate(0,0);opacity:0}20%{opacity:.9}100%{transform:translate(60px,-30px);opacity:0}}' +
    '.sd{animation:sand 3s ease-out infinite}.sd2{animation-delay:-1s}.sd3{animation-delay:-2s}' +
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
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".75"><ellipse cx="0" cy="0" rx="22" ry="8"/><ellipse cx="14" cy="-5" rx="14" ry="8"/><ellipse cx="-12" cy="-3" rx="11" ry="6"/></g>';
  const ORANGE = "#ff6319", YEL = "#fccc0a", GREEN = "#7cf29a", GOLD = "#ffd34d", CORAL = "#ff8a5b", BRICK = "#9c3f2c", LIME = "#e9dfc6";

  /* 1. The M and R pulling into Elmhurst Av, underground under Broadway: white tile walls, the trim band, steel columns */
  function train() {
    let tiles = "";
    for (let x = 0; x < 400; x += 10) tiles += '<path d="M' + x + ' 20v100" stroke="#d9d6cc" stroke-width=".6"/>';
    for (let y = 20; y < 120; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d6cc" stroke-width=".6"/>';
    let cols = "";
    for (let x = 40; x < 400; x += 90) cols += '<rect x="' + x + '" y="20" width="8" height="200" fill="#2f5f45"/><rect x="' + (x - 2) + '" y="20" width="12" height="5" fill="#244a36"/>';
    let colsLow = "";
    for (let x = 40; x < 400; x += 90) colsLow += '<rect x="' + x + '" y="120" width="8" height="80" fill="#2f5f45"/>';
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="148" width="28" height="22" rx="3" fill="#fff6d8" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#151515"/>' +
      '<rect x="0" y="20" width="400" height="100" fill="#f1eee4"/>' + tiles +
      /* trim band with the station name in mosaic */
      '<rect x="0" y="34" width="400" height="14" fill="#2f7d4f"/><rect x="0" y="48" width="400" height="3" fill="#111"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#3a3a3a"/>' +
      '<rect x="60" y="6" width="40" height="6" rx="2" fill="#fffbe0" class="flk"/><rect x="250" y="6" width="40" height="6" rx="2" fill="#fffbe0" class="flk flk2"/>' +
      cols +
      /* station sign */
      '<rect x="28" y="60" width="344" height="36" rx="4" fill="#111"/>' +
      '<rect x="28" y="60" width="344" height="4" fill="#fff"/>' +
      '<text x="40" y="85" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Elmhurst Av</text>' +
      bullet(318, 78, "M", ORANGE) + bullet(346, 78, "R", YEL, true) +
      /* the train slides in */
      '<g class="anim-train">' +
        '<rect x="6" y="128" width="310" height="66" rx="8" fill="#c9ced3" stroke="#6d757c" stroke-width="2"/>' +
        '<rect x="6" y="134" width="310" height="5" fill="#2a5aa6"/>' +
        windows +
        '<rect x="292" y="146" width="18" height="34" rx="2" fill="#30363b"/>' +
        bullet(301, 160, "M", ORANGE) +
        '<rect x="6" y="186" width="310" height="8" fill="#5c646b"/>' +
      '</g>' +
      colsLow +
      '<rect x="0" y="198" width="400" height="10" fill="#e8c43a"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#57524b"/>' +
      '<path d="M0 230h400" stroke="#4a463f" stroke-width="2"/>');
  }

  /* 2. Newtown High School: red brick and limestone, stepped Flemish gables, the clock tower with its copper cupola */
  function newtown() {
    let bricks = "";
    for (let y = 120; y < 226; y += 8) bricks += '<path d="M30 ' + y + 'h340" stroke="#7d3122" stroke-width=".6" opacity=".6"/>';
    let wins = "";
    for (let x = 44; x < 360; x += 26) { if (x > 160 && x < 236) continue; wins += '<rect x="' + x + '" y="140" width="14" height="22" fill="#cfe3ef"/><rect x="' + x + '" y="178" width="14" height="22" fill="#cfe3ef"/><rect x="' + (x - 2) + '" y="162" width="18" height="3" fill="' + LIME + '"/>'; }
    const gable = gx => '<path d="M' + gx + ' 120v-12h6v-8h6v-8h12v8h6v8h6v12z" fill="' + BRICK + '"/><path d="M' + gx + ' 108h6M' + (gx + 30) + ' 108h6" stroke="' + LIME + '" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nt1)"/>' +
      '<g class="cld">' + cloud(40, 40, 1) + '</g><g class="cld cld2">' + cloud(60, 26, .8) + '</g>' +
      '<rect x="30" y="118" width="340" height="108" fill="' + BRICK + '"/>' + bricks + wins +
      '<rect x="30" y="116" width="340" height="5" fill="' + LIME + '"/><rect x="30" y="200" width="340" height="4" fill="' + LIME + '"/>' +
      gable(52) + gable(312) +
      /* tower */
      '<rect x="172" y="60" width="56" height="166" fill="' + BRICK + '"/>' +
      '<rect x="168" y="56" width="64" height="8" fill="' + LIME + '"/><rect x="168" y="112" width="64" height="5" fill="' + LIME + '"/>' +
      '<rect x="176" y="120" width="10" height="30" fill="#cfe3ef"/><rect x="195" y="120" width="10" height="30" fill="#cfe3ef"/><rect x="214" y="120" width="10" height="30" fill="#cfe3ef"/>' +
      '<path d="M186 226v-36a14 14 0 0 1 28 0v36z" fill="#3a2a20"/><path d="M182 190a18 18 0 0 1 36 0" fill="none" stroke="' + LIME + '" stroke-width="3"/>' +
      /* clock */
      '<circle cx="200" cy="80" r="17" fill="#f8f4e6" stroke="' + LIME + '" stroke-width="4"/>' +
      '<g stroke="#222" stroke-width="2" stroke-linecap="round"><path class="hand" d="M200 80v-13"/><path class="hand hand2" d="M200 80h9"/></g><circle cx="200" cy="80" r="2" fill="#222"/>' +
      /* belfry and copper cupola */
      '<rect x="178" y="36" width="44" height="20" fill="' + LIME + '"/><rect x="186" y="40" width="8" height="14" fill="#3a2a20"/><rect x="206" y="40" width="8" height="14" fill="#3a2a20"/>' +
      '<path d="M176 36q24-30 48 0z" fill="#5fae96"/><rect x="198" y="4" width="4" height="10" fill="#4a8f7b"/><circle cx="200" cy="4" r="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#8a8579"/><rect x="0" y="226" width="400" height="4" fill="#b5afa1"/>' +
      '<rect x="0" y="236" width="400" height="10" fill="#4f9a45"/>' +
      '<g class="car"><rect x="0" y="244" width="46" height="12" rx="4" fill="' + YEL + '"/><circle cx="11" cy="256" r="3.5" fill="#111"/><circle cx="35" cy="256" r="3.5" fill="#111"/></g>',
      sky("nt1", "#7ec3ee", "#d9eefb"));
  }

  /* 3. St. James Church on Broadway (1735): white clapboard, a small square belfry with a bell swinging, autumn trees */
  function stjames() {
    let boards = "";
    for (let y = 130; y < 222; y += 6) boards += '<path d="M120 ' + y + 'h160" stroke="#cfc9bb" stroke-width=".8"/>';
    const tree = (x, s) => '<g transform="translate(' + x + ' 0)"><rect x="-4" y="150" width="8" height="74" fill="#5a3b24"/>' +
      '<circle cx="0" cy="140" r="' + (26 * s) + '" fill="#d9822b"/><circle cx="-16" cy="156" r="' + (18 * s) + '" fill="#c4562a"/><circle cx="16" cy="152" r="' + (20 * s) + '" fill="#e8a33a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sj1)"/>' +
      '<g class="cld">' + cloud(30, 34, .9) + '</g>' +
      tree(56, 1) + tree(346, 1.1) +
      /* nave */
      '<path d="M112 128l88-46 88 46z" fill="#4a4f55"/>' +
      '<rect x="120" y="126" width="160" height="96" fill="#f4f1e8"/>' + boards +
      '<path d="M140 150a8 8 0 0 1 16 0v30h-16z" fill="#6d8fa8"/><path d="M244 150a8 8 0 0 1 16 0v30h-16z" fill="#6d8fa8"/>' +
      '<path d="M186 222v-40a14 14 0 0 1 28 0v40z" fill="#7a2f22"/><circle cx="208" cy="204" r="1.8" fill="' + GOLD + '"/>' +
      /* belfry, bell, spire */
      '<rect x="182" y="56" width="36" height="44" fill="#f4f1e8" stroke="#cfc9bb"/>' +
      '<path d="M188 92v-24a12 12 0 0 1 24 0v24z" fill="#2b2b2b"/>' +
      '<g class="bell"><path d="M200 64v4" stroke="#6b5a2a" stroke-width="2"/><path d="M192 84q0-16 8-16t8 16z" fill="#c9a24a"/><circle cx="200" cy="86" r="2" fill="#8a6b2a"/></g>' +
      '<path d="M178 56l22-40 22 40z" fill="#4a4f55"/><path d="M200 16v-10M196 9h8" stroke="#2b2b2b" stroke-width="2"/>' +
      /* fallen leaves */
      '<g class="leaf"><path d="M120 0q5-5 10 0q-5 5-10 0z" fill="#d9822b"/></g>' +
      '<g class="leaf lf2"><path d="M300 0q5-5 10 0q-5 5-10 0z" fill="#c4562a"/></g>' +
      '<g class="leaf lf3"><path d="M220 0q5-5 10 0q-5 5-10 0z" fill="#e8a33a"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#5f8f3e"/><path d="M186 222h28l10 38h-48z" fill="#b5afa1"/>' +
      '<rect x="0" y="252" width="400" height="8" fill="#7b766c"/>',
      sky("sj1", "#f2b47a", "#fde4c2"));
  }

  /* 4. The Elmhurst gas tanks beside the Long Island Expressway, the old traffic-report landmark, cars rolling both ways */
  function tanks() {
    const tank = (cx, r, top) => {
      let s = '<rect x="' + (cx - r) + '" y="' + top + '" width="' + (2 * r) + '" height="' + (186 - top) + '" fill="#8fb3b8"/>' +
        '<ellipse cx="' + cx + '" cy="' + top + '" rx="' + r + '" ry="8" fill="#a9c9cc"/>';
      for (let y = top + 14; y < 186; y += 14) s += '<path d="M' + (cx - r) + ' ' + y + 'h' + (2 * r) + '" stroke="#6f9499" stroke-width="1"/>';
      for (let x = cx - r; x <= cx + r; x += r / 3) s += '<path d="M' + x + ' ' + (top - 10) + 'V186" stroke="#3f5f63" stroke-width="2.5"/>';
      s += '<path d="M' + (cx - r) + ' ' + (top - 10) + 'h' + (2 * r) + '" stroke="#3f5f63" stroke-width="3"/>';
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#gt1)"/>' +
      '<g class="cld">' + cloud(50, 30, 1) + '</g><g class="cld cld2">' + cloud(80, 50, .7) + '</g>' +
      /* skyline far off */
      '<path d="M0 170h30v-20h12v20h20v-30h10v30h330v16H0z" fill="#9aa9b8" opacity=".6"/>' +
      tank(130, 62, 64) + tank(286, 54, 82) +
      '<circle cx="130" cy="44" r="3" fill="#ff4b3a" class="blk"/><circle cx="286" cy="62" r="3" fill="#ff4b3a" class="blk blk2"/>' +
      /* the expressway */
      '<rect x="0" y="186" width="400" height="74" fill="#55585c"/>' +
      '<rect x="0" y="186" width="400" height="6" fill="#9aa0a6"/>' +
      '<path d="M0 222h400" stroke="#d8d8c8" stroke-width="2" stroke-dasharray="14 12"/>' +
      '<rect x="0" y="219" width="400" height="2" fill="#e8c43a"/>' +
      /* green highway sign */
      '<rect x="300" y="110" width="4" height="76" fill="#6b7177"/><rect x="340" y="110" width="4" height="76" fill="#6b7177"/>' +
      '<rect x="288" y="104" width="68" height="30" rx="3" fill="#0d6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="322" y="117" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">LONG ISLAND</text>' +
      '<text x="322" y="128" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">EXPWY  495</text>' +
      '<g class="car"><rect x="0" y="198" width="46" height="13" rx="4" fill="' + YEL + '"/><circle cx="11" cy="211" r="3.5" fill="#111"/><circle cx="35" cy="211" r="3.5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="200" width="50" height="12" rx="4" fill="#d23b2a"/><circle cx="12" cy="212" r="3.5" fill="#111"/><circle cx="38" cy="212" r="3.5" fill="#111"/></g>' +
      '<g class="carb"><rect x="0" y="232" width="54" height="14" rx="4" fill="#e9e9e9"/><circle cx="12" cy="246" r="3.5" fill="#111"/><circle cx="42" cy="246" r="3.5" fill="#111"/></g>' +
      '<g class="carb carb2"><rect x="0" y="234" width="46" height="13" rx="4" fill="#2a5aa6"/><circle cx="11" cy="247" r="3.5" fill="#111"/><circle cx="35" cy="247" r="3.5" fill="#111"/></g>',
      sky("gt1", "#8ec5e8", "#e3f1f8"));
  }

  /* 5. Broadway and Elmhurst Av: the subway entrance globes, the green street signs, the tag wall, sand blowing */
  function corner() {
    let bricks = "";
    for (let y = 66; y < 222; y += 9) bricks += '<path d="M16 ' + y + 'h250" stroke="#7b4636" stroke-width="1" opacity=".55"/>';
    const sign = (x, y, txt) => '<rect x="' + x + '" y="' + y + '" width="112" height="20" rx="2" fill="#0d6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + 56) + '" y="' + (y + 14.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#cn1)"/>' +
      '<rect x="16" y="60" width="250" height="162" fill="#a0624a"/>' + bricks +
      tag("HOMEBOY", 30, 118, 40, GREEN, -6) +
      tag("SANDMAN", 44, 160, 40, GOLD, -4) +
      tag("LICE", 40, 204, 24, CORAL, -8) +
      tag("GO HARD", 150, 206, 22, "#8fd3ff", -3) +
      '<g class="sd"><circle cx="40" cy="214" r="2" fill="' + GOLD + '"/></g><g class="sd sd2"><circle cx="60" cy="216" r="1.6" fill="' + GOLD + '"/></g><g class="sd sd3"><circle cx="80" cy="214" r="2" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#7b766c"/><rect x="0" y="222" width="400" height="4" fill="#aaa498"/>' +
      /* subway entrance with green globes */
      '<rect x="280" y="176" width="4" height="46" fill="#2f5f45"/><rect x="380" y="176" width="4" height="46" fill="#2f5f45"/>' +
      '<path d="M280 196h104" stroke="#2f5f45" stroke-width="3"/>' +
      '<circle cx="282" cy="170" r="8" fill="#3fd17a" class="flk"/><circle cx="382" cy="170" r="8" fill="#3fd17a" class="flk flk2"/>' +
      '<text x="332" y="212" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">SUBWAY</text>' +
      /* sign pole */
      '<rect x="326" y="40" width="6" height="128" fill="#3b3f3c"/>' +
      sign(274, 42, "BROADWAY") + sign(276, 66, "ELMHURST AV") +
      '<g class="carb"><rect x="0" y="236" width="48" height="13" rx="4" fill="' + YEL + '"/><circle cx="12" cy="250" r="3.5" fill="#111"/><circle cx="36" cy="250" r="3.5" fill="#111"/></g>',
      sky("cn1", "#7fd0a4", "#e4f7d8"));
  }

  window.SCENES = { train, newtown, stjames, tanks, corner };
})();
