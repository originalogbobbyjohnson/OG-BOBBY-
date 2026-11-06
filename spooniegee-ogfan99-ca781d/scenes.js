/* Spoonie Gee game (NYC map, Manhattan: Harlem, W 123rd St between Seventh and Eighth Avenues, where he grew up).
   1. W 125 St & Adam Clayton Powell Jr Blvd: the M100 / M101 bus pulling in on 125th (every nearby subway stop is taken on the map).
   2. W 123rd St between Seventh and Eighth: his home block, brownstone stoops, a boombox on the steps, kids on the sidewalk.
   3. M&G Diner on 125th St: where he ate every day; chrome counter, stools, the jukebox glowing, the neon DINER sign.
   4. Seventh Avenue at night: the wide boulevard with the tree median, a long car cruising with the 8-track playing (Spoonin' Rap's 8-track line).
   5. W 123 St & Adam Clayton Powell Jr Blvd: green street signs, the wall tagged SPOONIE GEE, the Ephesus church spire (Lenox & 123rd) behind.
   400 x 260 SVGs. No logos, no faces, no digit nine drawn. Scene classes are prefixed sp-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes spcar{from{transform:translateX(-120px)}to{transform:translateX(500px)}}.sp-car{animation:spcar 7s linear infinite}.sp-car2{animation-delay:-3.5s}' +
    '@keyframes spblink{0%,100%{opacity:.25}50%{opacity:1}}.sp-bl{animation:spblink 1.6s ease-in-out infinite}.sp-bl2{animation-delay:.53s}.sp-bl3{animation-delay:1.06s}' +
    '@keyframes spflick{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.95}}.sp-flk{animation:spflick 2.4s infinite}' +
    '@keyframes spnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-56px);opacity:0}}.sp-note{animation:spnote 3s ease-out infinite}.sp-note2{animation-delay:1s}.sp-note3{animation-delay:2s}' +
    '@keyframes spbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sp-bob{animation:spbob .5s ease-in-out infinite}.sp-bob2{animation-delay:.25s}' +
    '@keyframes spsteam{0%{transform:translateY(0);opacity:0}30%{opacity:.7}100%{transform:translateY(-26px);opacity:0}}.sp-stm{animation:spsteam 2.2s ease-out infinite}.sp-stm2{animation-delay:.7s}.sp-stm3{animation-delay:1.4s}' +
    '@keyframes sppulse{0%,100%{opacity:.5}50%{opacity:1}}.sp-pls{animation:sppulse 1s ease-in-out infinite}.sp-pls2{animation-delay:.5s}' +
    '@keyframes spsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sp-sway{transform-box:fill-box;transform-origin:50% 100%;animation:spsway 3s ease-in-out infinite}.sp-sway2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const plate = (x, y, n) => '<rect x="' + (x - 20) + '" y="' + (y - 11) + '" width="40" height="22" rx="11" fill="#0039a6"/>' + txt(n, x, y + 5, 12, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 37) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const kid = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="5.5" fill="' + col + '"/><rect x="' + (x - 5.5) + '" y="' + (y + 6) + '" width="11" height="18" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#ffd54a", RED = "#e8455f", SKY = "#7fdcff", CREAM = "#f4ead8", BROWN = "#6e3f2c";

  /* 1. W 125 St & Adam Clayton Powell Jr Blvd: 125th St storefronts at dusk, the black stop sign with the M100 and M101 plates, the blue-and-white bus pulling in */
  function bus125() {
    const shop = (x, w, h, col, aw) => { let g = '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>';
      for (let yy = 150 - h + 10; yy < 104; yy += 16) for (let xx = x + 8; xx < x + w - 12; xx += 18) g += '<rect class="sp-bl sp-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="9" height="10" fill="#ffd98a" opacity=".8"/>';
      g += '<rect x="' + x + '" y="108" width="' + w + '" height="12" fill="' + aw + '"/><rect x="' + (x + 6) + '" y="122" width="' + (w - 12) + '" height="26" fill="#ffe7a8" opacity=".3"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#spa)"/>' + stars(10) +
      shop(0, 110, 112, "#7a4a3a", RED) + shop(112, 70, 96, "#5c5f6a", GOLD) + shop(184, 96, 120, "#8a5a44", "#2f6e5a") + shop(282, 118, 104, "#6a4a5a", SKY) +
      '<rect x="0" y="150" width="400" height="20" fill="#9a9a98"/><rect x="0" y="168" width="400" height="92" fill="#36383d"/>' +
      '<path d="M0 222h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      [40, 240].map(x => '<rect x="' + x + '" y="62" width="4" height="90" fill="#2a2c30"/><circle class="sp-flk" cx="' + (x + 2) + '" cy="60" r="6" fill="#fff4c2"/>').join("") +
      /* the stop sign */
      '<rect x="312" y="40" width="5" height="112" fill="#30343a"/>' +
      '<rect x="176" y="18" width="220" height="58" rx="4" fill="#111"/><rect x="176" y="18" width="220" height="3" fill="#fff"/>' +
      txt("W 125 St &amp; Adam Clayton Powell Jr Blvd", 286, 39, 10.5, "#fff") + txt("BUS STOP", 216, 64, 10, GOLD, 'letter-spacing="2"') +
      plate(306, 60, "M100") + plate(356, 60, "M101") +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="14" y="148" width="240" height="66" rx="8" fill="#f1f3f5"/><rect x="14" y="186" width="240" height="10" fill="#0039a6"/>' +
        '<rect x="150" y="150" width="98" height="11" rx="1" fill="#111"/><text x="199" y="158.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb000" letter-spacing="1">M100 125 ST</text>' +
        [26, 70, 114, 158].map(x => '<rect x="' + x + '" y="164" width="38" height="18" rx="2" fill="#24324a"/>').join("") +
        '<rect x="208" y="164" width="40" height="38" rx="3" fill="#1d2a3c"/>' +
        '<circle cx="60" cy="216" r="11" fill="#151515"/><circle cx="60" cy="216" r="4" fill="#888"/><circle cx="204" cy="216" r="11" fill="#151515"/><circle cx="204" cy="216" r="4" fill="#888"/>' +
        '<circle class="sp-pls" cx="250" cy="206" r="3" fill="#fff6c2"/>' +
      '</g>' +
      txt("125TH STREET, HARLEM", 120, 246, 10, CREAM, 'letter-spacing="2" opacity=".85"'),
      sky("spa", "#18143a", "#d8705a"));
  }

  /* 2. W 123rd St between Seventh and Eighth: his home block - brownstones with stoops, a boombox on the steps, kids on the sidewalk, the street tree */
  function block() {
    const brown = (x, col) => { let g = '<rect x="' + x + '" y="40" width="96" height="150" fill="' + col + '"/><rect x="' + x + '" y="34" width="96" height="8" fill="#3a2418"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) g += '<rect class="sp-bl sp-bl' + ((r + c) % 3 + 1) + '" x="' + (x + 12 + c * 28) + '" y="' + (52 + r * 34) + '" width="16" height="22" fill="#ffd98a" opacity=".75"/><rect x="' + (x + 10 + c * 28) + '" y="' + (50 + r * 34) + '" width="20" height="3" fill="#3a2418"/>';
      g += '<path d="M' + (x + 30) + ' 190l-14 34h52l-14 -34z" fill="#5a3426"/>';
      for (let s = 0; s < 5; s++) g += '<path d="M' + (x + 18 - s * 0.4) + ' ' + (196 + s * 6) + 'h' + (48 + s) + '" stroke="#3a2418" stroke-width="1.5"/>';
      g += '<rect x="' + (x + 36) + '" y="160" width="20" height="30" fill="#2a160e"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#spb)"/>' +
      brown(4, BROWN) + brown(102, "#7a4a34") + brown(200, "#65392a") + brown(298, "#734530") +
      '<rect x="0" y="224" width="400" height="36" fill="#8f8f8c"/><rect x="0" y="246" width="400" height="14" fill="#3b3d42"/>' +
      /* street tree */
      '<rect x="190" y="150" width="6" height="74" fill="#3a2a1a"/><g class="sp-sway"><circle cx="193" cy="140" r="26" fill="#2f6b3a"/><circle cx="178" cy="150" r="16" fill="#2a5e33"/><circle cx="210" cy="150" r="16" fill="#2a5e33"/></g>' +
      /* boombox on the stoop of the first house + music */
      '<g transform="translate(40 202)"><rect x="0" y="0" width="38" height="18" rx="3" fill="#1a1a1e" stroke="#888" stroke-width="1.5"/><circle class="sp-pls" cx="9" cy="10" r="5" fill="#333" stroke="' + GOLD + '"/><circle class="sp-pls sp-pls2" cx="29" cy="10" r="5" fill="#333" stroke="' + GOLD + '"/><rect x="14" y="4" width="10" height="4" fill="' + SKY + '"/><path d="M8 0q11 -8 22 0" stroke="#888" stroke-width="1.5" fill="none"/></g>' +
      '<text class="sp-note" x="62" y="196" font-size="14" fill="' + GOLD + '">&#9835;</text><text class="sp-note sp-note2" x="44" y="190" font-size="12" fill="' + RED + '">&#9834;</text><text class="sp-note sp-note3" x="76" y="198" font-size="11" fill="' + SKY + '">&#9835;</text>' +
      /* kids on the sidewalk */
      kid(150, 216, "#141018", "sp-bob") + kid(240, 216, "#141018", "sp-bob sp-bob2") + kid(262, 218, "#141018", "sp-bob") +
      '<rect x="340" y="212" width="16" height="22" rx="2" fill="#5a5f66"/><rect x="338" y="208" width="20" height="5" rx="2" fill="#6b7078"/>' +
      txt("W 123RD ST, BETWEEN 7TH &amp; 8TH", 200, 22, 11, CREAM, 'letter-spacing="2"'),
      sky("spb", "#2a3a6a", "#e8a070"));
  }

  /* 3. M&G Diner on 125th St: the neon DINER sign, the chrome counter and stools, coffee steaming, the jukebox glowing in the corner */
  function diner() {
    let stools = ""; for (let i = 0; i < 6; i++) stools += '<rect x="' + (66 + i * 40) + '" y="206" width="4" height="22" fill="#9aa0a8"/><ellipse cx="' + (68 + i * 40) + '" cy="204" rx="12" ry="5" fill="' + RED + '" stroke="#7a1626" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#spc)"/>' +
      /* back wall tiles */
      (() => { let t = ""; for (let y = 60; y < 150; y += 12) for (let x = (y / 12) % 2 ? 0 : 12; x < 400; x += 24) t += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#efe6d2" opacity=".9"/>'; return t; })() +
      /* neon sign */
      '<rect x="120" y="12" width="160" height="40" rx="6" fill="#140a0e" stroke="' + SKY + '" stroke-width="2"/>' + txt("DINER", 200, 42, 26, "#ff6a80", 'class="sp-flk" letter-spacing="6"') +
      /* menu board */
      '<rect x="20" y="66" width="96" height="62" rx="3" fill="#1d1d22" stroke="#999" stroke-width="1.5"/>' + txt("TODAY", 68, 82, 9, GOLD, 'letter-spacing="2"') +
      ['CHICKEN &amp; WAFFLES', 'SMOTHERED CHOPS', 'COLLARDS', 'PEACH COBBLER'].map((m, i) => txt(m, 68, 96 + i * 9, 6.5, "#f4ead8")).join("") +
      /* jukebox */
      '<g transform="translate(318 74)"><path d="M0 76v-48a30 30 0 0 1 60 0v48z" fill="#5a2a14" stroke="' + GOLD + '" stroke-width="2"/><path class="sp-pls" d="M8 70v-40a22 22 0 0 1 44 0v40z" fill="#ff9a3a" opacity=".85"/><path class="sp-pls sp-pls2" d="M16 70v-36a14 14 0 0 1 28 0v36z" fill="' + SKY + '" opacity=".7"/><rect x="18" y="44" width="24" height="12" fill="#2a160e"/></g>' +
      '<text class="sp-note" x="330" y="70" font-size="14" fill="' + GOLD + '">&#9835;</text><text class="sp-note sp-note2" x="356" y="66" font-size="12" fill="' + RED + '">&#9834;</text>' +
      /* counter */
      '<rect x="30" y="150" width="280" height="10" fill="#c9ced6"/><rect x="30" y="160" width="280" height="40" fill="#b7262f"/><path d="M30 172h280M30 186h280" stroke="#e8ecef" stroke-width="2"/>' +
      /* coffee cups + plate */
      '<rect x="80" y="138" width="14" height="12" rx="2" fill="#fff"/><path d="M94 141q6 3 0 6" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<path class="sp-stm" d="M84 134q3 -5 0 -10" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/><path class="sp-stm sp-stm2" d="M90 134q3 -5 0 -10" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>' +
      '<ellipse cx="170" cy="148" rx="20" ry="4" fill="#fff"/><ellipse cx="170" cy="145" rx="12" ry="4" fill="#d8a54a"/>' +
      '<rect x="230" y="138" width="14" height="12" rx="2" fill="#fff"/><path class="sp-stm sp-stm3" d="M236 134q3 -5 0 -10" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>' +
      stools +
      '<rect x="0" y="228" width="400" height="32" fill="#2a2a30"/>' +
      (() => { let c = ""; for (let x = 0; x < 400; x += 16) c += '<rect x="' + x + '" y="' + (228 + ((x / 16) % 2) * 8) + '" width="8" height="8" fill="#e8e2d2"/>'; return c; })() +
      txt("HIS DAILY SPOT ON 125TH", 200, 256, 9, CREAM, 'letter-spacing="2"'),
      sky("spc", "#2a1a22", "#4a2a2a"));
  }

  /* 4. Seventh Avenue at night: the wide boulevard, the tree median, streetlights, a long car cruising with the 8-track glowing and music spilling out */
  function seventh() {
    let lamps = ""; for (let i = 0; i < 5; i++) lamps += '<rect x="' + (30 + i * 86) + '" y="70" width="3" height="80" fill="#2a2c30"/><circle class="sp-flk" style="animation-delay:-' + (i * 0.5) + 's" cx="' + (31 + i * 86) + '" cy="68" r="5" fill="#fff4c2"/>';
    let rows = ""; for (let i = 0; i < 6; i++) { const x = i * 70, h = 60 + (i * 23) % 40; rows += '<rect x="' + x + '" y="' + (150 - h) + '" width="64" height="' + h + '" fill="#2a2236"/>';
      for (let yy = 150 - h + 8; yy < 142; yy += 14) for (let xx = x + 6; xx < x + 58; xx += 14) rows += '<rect class="sp-bl sp-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="8" fill="#ffd98a" opacity=".7"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#spd)"/>' + stars(22) + rows +
      '<rect x="0" y="150" width="400" height="110" fill="#2f3036"/>' +
      /* the median with little trees */
      '<rect x="0" y="182" width="400" height="12" fill="#3f5a3a"/>' + [20, 100, 180, 260, 340].map((x, i) => '<rect x="' + (x + 8) + '" y="166" width="3" height="18" fill="#3a2a1a"/><g class="sp-sway' + (i % 2 ? " sp-sway2" : "") + ' sp-sway"><circle cx="' + (x + 9) + '" cy="164" r="10" fill="#2f6b3a"/></g>').join("") +
      lamps +
      '<path d="M0 222h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* the long car */
      '<g class="sp-car"><g transform="translate(0 200)">' +
        '<rect x="0" y="10" width="120" height="20" rx="6" fill="' + RED + '"/><path d="M22 10l14 -14h44l14 14z" fill="#b8323f"/><path d="M40 -1l6 -6h30l6 6z" fill="#cfe2f5" opacity=".7"/>' +
        '<rect x="56" y="14" width="18" height="6" rx="1" fill="#111"/><rect class="sp-pls" x="58" y="15" width="14" height="4" fill="' + GOLD + '"/>' +
        '<circle cx="24" cy="30" r="8" fill="#111"/><circle cx="24" cy="30" r="3" fill="#ccc"/><circle cx="96" cy="30" r="8" fill="#111"/><circle cx="96" cy="30" r="3" fill="#ccc"/>' +
        '<circle class="sp-pls" cx="119" cy="18" r="3" fill="#fff6c2"/>' +
        '<text class="sp-note" x="60" y="-6" font-size="14" fill="' + GOLD + '">&#9835;</text><text class="sp-note sp-note2" x="80" y="-10" font-size="12" fill="' + SKY + '">&#9834;</text>' +
      '</g></g>' +
      '<g class="sp-car sp-car2"><g transform="translate(0 232)"><rect x="0" y="6" width="70" height="14" rx="5" fill="' + SKY + '"/><circle cx="14" cy="20" r="5" fill="#111"/><circle cx="56" cy="20" r="5" fill="#111"/></g></g>' +
      '<rect x="120" y="14" width="160" height="26" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Seventh Av", 200, 32, 14, "#fff"),
      sky("spd", "#07081a", "#2a1f44"));
  }

  /* 5. W 123 St & Adam Clayton Powell Jr Blvd: green street signs, the wall tagged SPOONIE GEE, the gray Gothic spire of Ephesus church (Lenox & 123rd) behind */
  function corner() {
    let lancets = ""; for (let i = 0; i < 4; i++) lancets += '<path class="sp-bl sp-bl' + (i % 3 + 1) + '" d="M' + (112 + i * 26) + ' 132v-30l7 -12l7 12v30z" fill="#ffd98a" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#spe)"/>' + stars(16) +
      /* Ephesus church: stone nave, tall spire with pinnacles */
      '<rect x="100" y="84" width="120" height="56" fill="#8d8a86"/><path d="M96 86l64 -26l64 26z" fill="#6f6c68"/>' + lancets +
      '<rect x="222" y="66" width="40" height="74" fill="#97948f"/><path d="M218 68l24 -12l24 12z" fill="#7a7772"/>' +
      '<path d="M226 58l16 -56l16 56z" fill="#a19e99"/><path d="M242 2v56" stroke="#7a7772" stroke-width="1.5"/>' +
      [222, 262].map(x => '<path d="M' + (x - 4) + ' 68l4 -18l4 18z" fill="#a19e99"/>').join("") +
      '<path d="M234 100v-16l8 -12l8 12v16z" fill="#ffd98a" class="sp-flk" opacity=".8"/><path d="M242 6v-6M239 3h6" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      /* the wall */
      '<rect x="0" y="136" width="400" height="90" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 146; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("SPOONIE GEE", 14, 198, 46, GOLD, -5) + tag("NUMERO UNO", 22, 222, 18, RED, -3) + tag("GODFATHER", 200, 220, 18, CREAM, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="sp-car"><rect x="0" y="238" width="48" height="13" rx="4" fill="' + RED + '"/><circle cx="11" cy="251" r="4" fill="#111"/><circle cx="37" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="60" width="5" height="168" fill="#3d4b3f"/>' +
      '<rect x="292" y="64" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 123 St", 344, 80, 12, "#fff") +
      '<rect x="264" y="90" width="132" height="34" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Adam Clayton", 330, 104, 10, "#fff") + txt("Powell Jr Blvd", 330, 118, 10, "#fff") +
      '<circle class="sp-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("spe", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { bus125: bus125, block: block, diner: diner, seventh: seventh, corner: corner };
})();
