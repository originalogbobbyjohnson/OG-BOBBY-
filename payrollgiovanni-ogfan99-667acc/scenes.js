/* payrollgiovanni scenes (Regions tab: Detroit; west side, Fenkell / 5 Mile, his block was Strathmoor). CSS classes prefixed pg- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 18 Fenkell pulling up to the Fenkell & Schaefer stop on the west side, the Fenkell storefront strip at dusk.
   2 Detroit Roller Wheels on Schoolcraft, the rink he and the Strathmoor kids walked miles to: the wood floor, skaters circling, the mirror ball spinning.
   3 Cabo San Lucas ("Celebratin' in Cabo, you can see the ice through a blindfold" from Ghost Mode): the rock arch at Land's End, waves, a boat, sunset.
   4 The Rosa Parks Transit Center downtown, where the 18 Fenkell starts and ends: the white peaked canopy roof, buses in the bays.
   5 Fenkell Ave and Strathmoor St: green signs, PAYROLL tagged on the brick, the twin spired crowns of One Detroit Center far downtown.
   No logos, no faces, no numeral 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pgflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.pg-flk{animation:pgflick 2.4s infinite}.pg-flk2{animation-delay:.8s}' +
    '@keyframes pgtw{0%,100%{opacity:.25}50%{opacity:1}}.pg-tw{animation:pgtw 1.6s ease-in-out infinite}.pg-tw2{animation-delay:-.8s}' +
    '@keyframes pgcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.pg-car{animation:pgcar 6s linear infinite}.pg-car2{animation-delay:-3s}' +
    '@keyframes pgskate{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.pg-sk{animation:pgskate 5s linear infinite}.pg-sk2{animation-delay:-1.7s}.pg-sk3{animation-delay:-3.4s}' +
    '@keyframes pgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.pg-ball{transform-box:fill-box;transform-origin:50% 50%;animation:pgspin 4s linear infinite}' +
    '@keyframes pgdot{0%,100%{opacity:.15}50%{opacity:.9}}.pg-dot{animation:pgdot 1.2s ease-in-out infinite}.pg-dot2{animation-delay:-.6s}' +
    '@keyframes pgwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.pg-wv{animation:pgwave 3s ease-in-out infinite}.pg-wv2{animation-delay:-1.5s}' +
    '@keyframes pgboat{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-2px)}}.pg-boat{animation:pgboat 7s ease-in-out infinite}' +
    '@keyframes pgsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.pg-sp{animation:pgsp 1.3s ease-out infinite}.pg-sp2{animation-delay:-.6s}' +
    '@keyframes pgbcn{0%,100%{opacity:1}50%{opacity:.15}}.pg-bc{animation:pgbcn 1s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", MONEY = "#7ee08a", GOLD = "#e8c15a", CORAL = "#ff6b4a";
  const ddotBus = (x, y, label, cls) => '<g class="' + (cls || "") + '"><rect x="' + x + '" y="' + y + '" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
    '<rect x="' + x + '" y="' + (y + 50) + '" width="250" height="14" fill="' + DDOT + '"/><rect x="' + x + '" y="' + (y + 46) + '" width="250" height="4" fill="#ffcc33"/>' +
    Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 40 + i * 40) + '" y="' + (y + 10) + '" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
    '<rect x="' + (x + 4) + '" y="' + (y + 8) + '" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M' + (x + 19) + ' ' + (y + 8) + 'v56" stroke="#8a9096"/>' +
    '<rect x="' + (x + 4) + '" y="' + (y + 2) + '" width="62" height="8" rx="2" fill="#111"/><text x="' + (x + 35) + '" y="' + (y + 8.5) + '" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffcc33">' + label + '</text>' +
    '<circle cx="' + (x + 46) + '" cy="' + (y + 76) + '" r="13" fill="#1a1a1a"/><circle cx="' + (x + 46) + '" cy="' + (y + 76) + '" r="5" fill="#888"/><circle cx="' + (x + 206) + '" cy="' + (y + 76) + '" r="13" fill="#1a1a1a"/><circle cx="' + (x + 206) + '" cy="' + (y + 76) + '" r="5" fill="#888"/>' +
    '<circle cx="' + (x + 2) + '" cy="' + (y + 58) + '" r="3.5" fill="#fff6c2"/></g>';

  /* 1. DDOT 18 Fenkell at Fenkell & Schaefer */
  function pgstation() {
    const shop = (x, w, c, awn, txt) => '<rect x="' + x + '" y="70" width="' + w + '" height="76" fill="' + c + '"/><rect x="' + x + '" y="66" width="' + w + '" height="6" fill="#3a2e2a"/>' +
      '<rect x="' + (x + 6) + '" y="78" width="' + (w - 12) + '" height="16" fill="#111"/><text x="' + (x + w / 2) + '" y="90" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '" class="pg-flk">' + txt + '</text>' +
      '<path d="M' + x + ' 96h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + awn + '"/><rect x="' + (x + 8) + '" y="108" width="' + (w - 34) + '" height="30" fill="#ffd98a" opacity=".7"/><rect x="' + (x + w - 22) + '" y="108" width="14" height="38" fill="#3a2a20"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pgs1)"/>' +
      '<circle cx="70" cy="26" r="1.4" fill="#fff" class="pg-tw"/><circle cx="170" cy="14" r="1.2" fill="#fff" class="pg-tw pg-tw2"/><circle cx="260" cy="28" r="1.3" fill="#fff" class="pg-tw"/>' +
      shop(0, 96, "#b8a88a", CORAL, "BEAUTY SUPPLY") + shop(100, 86, "#8a5a42", MONEY, "CONEY") + shop(190, 100, "#c8bca4", GOLD, "CELL PHONES") + shop(294, 106, "#7a4a3a", "#3a8ad8", "BARBER") +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="anim-train">' + ddotBus(34, 104, "18 FENKELL") + '</g>' + car("pg-car", 0, 238, GOLD) + car("pg-car pg-car2", 0, 238, "#d6d6d6") +
      '<rect x="318" y="100" width="5" height="92" fill="#555"/><rect x="302" y="86" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="321" y="101" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="306" y="112" width="30" height="14" rx="3" fill="#ffcc33"/><text x="321" y="123" text-anchor="middle" ' + font + ' font-size="10" fill="#111">18</text>' +
      '<rect x="196" y="200" width="194" height="26" rx="3" fill="#111"/><text x="206" y="218" ' + font + ' font-size="14" fill="#fff">Fenkell &amp; Schaefer</text>' +
      '<rect x="364" y="205" width="22" height="16" rx="3" fill="' + DDOT + '"/><text x="375" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">18</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 18 · FENKELL · 5 MILE · WEST SIDE</text>',
      sky("pgs1", "#101a3a", "#c86a4a"));
  }

  /* 2. Detroit Roller Wheels on Schoolcraft */
  function pgrink() {
    const skater = (cls, y, c) => '<g class="' + cls + '"><circle cx="0" cy="' + (y - 30) + '" r="6" fill="#2a1a12"/><rect x="-6" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/>' +
      '<path d="M-3 ' + (y - 8) + 'l-5 12M3 ' + (y - 8) + 'l7 10" stroke="#1a2a4a" stroke-width="4" stroke-linecap="round"/><path d="M-6 ' + (y - 20) + 'l-8 6M6 ' + (y - 20) + 'l8 -4" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="-12" y="' + (y + 3) + '" width="8" height="4" fill="#fff"/><rect x="6" y="' + (y + 1) + '" width="8" height="4" fill="#fff"/><circle cx="-11" cy="' + (y + 8) + '" r="1.6" fill="' + CORAL + '"/><circle cx="-5" cy="' + (y + 8) + '" r="1.6" fill="' + CORAL + '"/><circle cx="7" cy="' + (y + 6) + '" r="1.6" fill="' + CORAL + '"/><circle cx="13" cy="' + (y + 6) + '" r="1.6" fill="' + CORAL + '"/></g>';
    const dots = Array.from({ length: 22 }, (_, i) => '<circle class="pg-dot' + (i % 2 ? " pg-dot2" : "") + '" cx="' + ((i * 53) % 400) + '" cy="' + (20 + (i * 37) % 110) + '" r="2.2" fill="' + [MONEY, GOLD, CORAL, "#9fe8ff"][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#120c1e"/>' + dots +
      '<path d="M200 0v26" stroke="#888" stroke-width="2"/><g class="pg-ball"><circle cx="200" cy="40" r="14" fill="#c8ccd2"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (186 + i * 7) + ' 30v20" stroke="#8a9096" stroke-width="1"/>').join("") + '<path d="M186 40h28M188 33h24M188 47h24" stroke="#8a9096" stroke-width="1"/></g>' +
      '<rect x="20" y="70" width="360" height="40" rx="6" fill="#1e1430" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="98" text-anchor="middle" ' + font + ' font-size="20" fill="' + GOLD + '" letter-spacing="6" class="pg-flk">ADULT SKATE NIGHT</text>' +
      /* rail and wood floor */
      '<rect x="0" y="140" width="400" height="120" fill="#b8844a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (146 + i * 10) + 'h400" stroke="#8a5a2a" stroke-width="1"/>').join("") +
      '<rect x="0" y="128" width="400" height="12" fill="#3a2a4a"/><path d="M0 128h400" stroke="' + MONEY + '" stroke-width="3"/>' +
      '<ellipse cx="200" cy="200" rx="150" ry="40" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="10 8" opacity=".5"/>' +
      skater("pg-sk", 200, CORAL) + skater("pg-sk pg-sk2", 214, MONEY) + skater("pg-sk pg-sk3", 192, GOLD) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SCHOOLCRAFT · THE RINK THEY WALKED MILES TO</text>');
  }

  /* 3. Cabo: the rock arch at Land's End */
  function pgcabo() {
    return svg(
      '<rect width="400" height="260" fill="url(#pgc1)"/>' +
      '<circle cx="300" cy="120" r="26" fill="#ffd36b" opacity=".9"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#1e6a8a"/>' +
      '<path class="pg-wv" d="M0 160q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9fe8ff" stroke-width="2" fill="none" opacity=".6"/>' +
      '<path class="pg-wv pg-wv2" d="M0 190q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9fe8ff" stroke-width="2" fill="none" opacity=".5"/>' +
      /* the rock arch */
      '<path d="M40 150l10 -60l24 -40l30 -10l26 20l14 40l6 50h-30l-6 -36q-10 -20 -24 -16q-14 6 -16 30l-4 22z" fill="#b8865a" stroke="#6a4424" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M60 90l14 -30M90 50l10 20M120 70l10 40" stroke="#8a5a34" stroke-width="2" fill="none"/>' +
      '<path d="M150 150l8 -50l16 -20l14 30l4 40z" fill="#a8764a" stroke="#6a4424" stroke-width="2"/>' +
      /* sand */
      '<path d="M200 150q60 -10 200 -6v14h-200z" fill="#f2d8a8"/>' +
      /* boat */
      '<g class="pg-boat"><path d="M230 176h70l-10 14h-50z" fill="#f4f4f0" stroke="#5a6068" stroke-width="2"/><rect x="250" y="164" width="30" height="12" fill="#fff" stroke="#5a6068"/><rect x="254" y="167" width="8" height="5" fill="#9fe8ff"/><rect x="266" y="167" width="8" height="5" fill="#9fe8ff"/></g>' +
      /* pelican */
      '<path class="pg-wv" d="M320 60q8 -6 16 0q8 -6 16 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>' +
      '<rect x="110" y="226" width="180" height="20" rx="3" fill="#111" opacity=".8"/><text x="200" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">CELEBRATIN’ IN CABO</text>',
      sky("pgc1", "#2a2a6a", "#ff9a5a"));
  }

  /* 4. Rosa Parks Transit Center: white peaked canopy, buses in the bays */
  function pgtransit() {
    const peaks = Array.from({ length: 5 }, (_, i) => { const x = 20 + i * 74; return '<path d="M' + x + ' 96l37 -54l37 54z" fill="#f4f4f0" stroke="#aab4c0" stroke-width="2"/><path d="M' + (x + 37) + ' 42v54" stroke="#aab4c0" stroke-width="1.5"/><rect x="' + (x + 35) + '" y="96" width="4" height="70" fill="#8a9096"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pgt1)"/>' +
      '<rect x="20" y="30" width="30" height="66" fill="#5a6a7e"/><rect x="330" y="20" width="40" height="76" fill="#4a5a6e"/>' +
      peaks + '<rect x="16" y="94" width="372" height="6" fill="#d8dde3"/>' +
      '<rect x="0" y="166" width="400" height="94" fill="#3f4148"/><rect x="0" y="160" width="400" height="8" fill="#a9a59c"/>' +
      ['BAY 1', 'BAY 2', 'BAY 3', 'BAY 4'].map((b, i) => '<rect x="' + (24 + i * 94) + '" y="104" width="44" height="16" rx="2" fill="#111"/><text x="' + (46 + i * 94) + '" y="116" text-anchor="middle" ' + font + ' font-size="9" fill="' + (i === 2 ? GOLD : "#fff") + '">' + b + '</text>').join("") +
      '<g transform="translate(0,34) scale(.7)">' + ddotBus(-10, 140, "18 FENKELL") + '</g>' +
      '<g transform="translate(140,34) scale(.7)">' + ddotBus(60, 140, "DOWNTOWN") + '</g>' +
      '<rect x="100" y="236" width="200" height="18" rx="3" fill="#111"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ROSA PARKS TRANSIT CENTER</text>',
      sky("pgt1", "#4a7ab8", "#cfe0f0"));
  }

  /* 5. Fenkell Ave and Strathmoor St, One Detroit Center far downtown */
  function pgcorner() {
    const bricks = [];
    for (let r = 0; r < 9; r++) for (let c = 0; c < 16; c++) bricks.push('<rect x="' + (c * 20 + (r % 2) * 10 - 10) + '" y="' + (112 + r * 10) + '" width="19" height="9" fill="' + ((r + c) % 3 ? "#7a4a34" : "#6a3e2c") + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#pgk1)"/>' +
      /* far downtown skyline, One Detroit Center's twin spired crowns */
      '<rect x="40" y="70" width="22" height="42" fill="#7a8aa0"/><rect x="66" y="80" width="16" height="32" fill="#8a9ab0"/>' +
      '<rect x="150" y="44" width="40" height="68" fill="#6a7a92"/><path d="M150 44l6 -10l6 10zM166 44l4 -16l4 16zM178 44l6 -10l6 10z" fill="#6a7a92"/>' +
      '<rect x="194" y="54" width="34" height="58" fill="#6a7a92"/><path d="M194 54l5 -8l5 8zM207 54l4 -14l4 14zM218 54l5 -8l5 8z" fill="#6a7a92"/>' +
      '<circle cx="170" cy="26" r="2" fill="' + CORAL + '" class="pg-bc"/><rect x="236" y="76" width="26" height="36" fill="#8a9ab0"/>' +
      /* brick wall with tag */
      '<g clip-path="url(#pgwall)">' + bricks.join("") + '</g><rect x="0" y="110" width="290" height="4" fill="#4a2a1c"/>' +
      tag("PAYROLL", 18, 172, 44, MONEY, -6) + tag("DBC", 200, 196, 22, GOLD, -4) +
      '<circle class="pg-sp" cx="236" cy="150" r="3" fill="' + MONEY + '"/><circle class="pg-sp pg-sp2" cx="242" cy="156" r="2" fill="' + GOLD + '"/>' +
      '<rect x="331" y="60" width="6" height="150" fill="#6a6f75"/>' + sign(280, 66, 108, "Fenkell Ave") + sign(276, 92, 116, "Strathmoor St") +
      '<rect x="0" y="202" width="400" height="58" fill="#3f4148"/><rect x="0" y="202" width="400" height="6" fill="#a9a59c"/><path d="M0 236h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("pg-car", 0, 240, "#2a2a2a") + car("pg-car pg-car2", 0, 240, MONEY) +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">FENKELL · 5 MILE · WEST SIDE · STRATHMOOR</text>',
      sky("pgk1", "#e8a86a", "#f6d8a8") + '<clipPath id="pgwall"><rect x="0" y="110" width="290" height="92"/></clipPath>');
  }

  window.SCENES = { pgstation, pgrink, pgcabo, pgtransit, pgcorner };
})();
