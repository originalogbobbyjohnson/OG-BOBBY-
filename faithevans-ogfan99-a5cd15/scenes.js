/* Faith Evans game (NYC map, New Jersey: raised in Newark's South Ward on Grumman Avenue, now "Faith Evans Way"; born in Lakeland, Florida).
   Rooms: 1. the NJ Transit bus stop at Elizabeth Av & Grumman Av (a blue-and-white NJT bus pulls in), 2. Emmanuel Baptist Church in Newark,
   where she first sang in front of the congregation at four (brick church, white steeple, stained glass), 3. University High School in Newark
   (class of 1991; brick school, flag, school bus), 4. Lake Mirror in Lakeland, Florida, where she was born (the white promenade, palms
   and the city's famous swans), 5. Grumman Av & Elizabeth Av with the "Faith Evans Way" sign, Weequahic Park's trees behind.
   400 x 260 SVGs. All CSS classes prefixed fe-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fecar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.fe-car{animation:fecar 5.5s linear infinite}.fe-car2{animation-delay:-2.7s}' +
    '@keyframes fecarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.fe-carL{animation:fecarL 6.5s linear infinite}' +
    '@keyframes feblink{0%,100%{opacity:.3}50%{opacity:1}}.fe-bl{animation:feblink 1.7s ease-in-out infinite}.fe-bl2{animation-delay:.6s}.fe-bl3{animation-delay:1.1s}' +
    '@keyframes fenote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.fe-note{animation:fenote 3.4s linear infinite}.fe-note2{animation-delay:-1.1s}.fe-note3{animation-delay:-2.3s}' +
    '@keyframes feflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.fe-flag{animation:feflag 1.5s ease-in-out infinite;transform-origin:0 0}' +
    '@keyframes feswan{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.fe-swan{animation:feswan 7s ease-in-out infinite}.fe-swan2{animation-delay:-3.5s}' +
    '@keyframes fewave{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.fe-wave{animation:fewave 3s ease-in-out infinite}' +
    '@keyframes feleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-30px,160px) rotate(220deg);opacity:0}}.fe-leaf{animation:feleaf 5.5s linear infinite}.fe-leaf2{animation-delay:-1.8s}.fe-leaf3{animation-delay:-3.6s}' +
    '@keyframes feglow{0%,100%{opacity:.55}50%{opacity:1}}.fe-glow{animation:feglow 2.6s ease-in-out infinite}' +
    '@keyframes fesway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.fe-sway{animation:fesway 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, label, color, r) => { r = r || 12; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.36) + '" text-anchor="middle" ' + font + ' font-size="' + r * 0.8 + '" fill="#fff">' + label + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="fe-bl fe-bl' + (i % 3 + 1) + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 41) % 54) + '" r="' + (i % 3 ? 0.9 : 1.3) + '" fill="#fff"/>'; return s; };
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const bricks = (x, y, w, h, c1, c2) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c1 + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c2 + '" stroke-width="1"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 3 * s) + '" y="' + y + '" width="' + 6 * s + '" height="' + 26 * s + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 4 * s) + '" r="' + 18 * s + '" fill="' + c + '"/><circle cx="' + (x - 12 * s) + '" cy="' + (y + 4 * s) + '" r="' + 12 * s + '" fill="' + c + '"/><circle cx="' + (x + 12 * s) + '" cy="' + (y + 4 * s) + '" r="' + 12 * s + '" fill="' + c + '"/>';
  const GOLD = "#f4d27a", ROSE = "#e86a92", AQUA = "#7fd3e6", NJT = "#0039a6", NJO = "#f58025", NJP = "#a2238e";
  const notes = (xs, y) => xs.map((x, i) => '<text class="fe-note fe-note' + (i % 3 + 1) + '" x="' + x + '" y="' + y + '" font-size="18" fill="' + [GOLD, ROSE, AQUA][i % 3] + '">' + (i % 2 ? "&#9835;" : "&#9834;") + '</text>').join("");

  /* 1. Elizabeth Av & Grumman Av: an NJ Transit bus (white body, blue/orange/purple stripes) pulls in to the stop */
  function festop() {
    const bus = x => '<rect x="' + x + '" y="112" width="190" height="62" rx="9" fill="#f3f4f6" stroke="#6b7280" stroke-width="2"/>' +
      [14, 46, 78, 110, 142].map(k => '<rect x="' + (x + k) + '" y="120" width="26" height="22" rx="2" fill="#9cc8e6"/>').join("") +
      '<rect x="' + (x + 170) + '" y="118" width="16" height="30" rx="3" fill="#9cc8e6"/>' +
      '<rect x="' + (x + 4) + '" y="150" width="182" height="5" fill="' + NJT + '"/><rect x="' + (x + 4) + '" y="155" width="182" height="3" fill="' + NJO + '"/><rect x="' + (x + 4) + '" y="158" width="182" height="3" fill="' + NJP + '"/>' +
      '<rect x="' + (x + 120) + '" y="104" width="60" height="10" rx="2" fill="#111"/><text x="' + (x + 150) + '" y="112" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb000">NEWARK PENN</text>' +
      '<circle cx="' + (x + 36) + '" cy="176" r="10" fill="#111"/><circle cx="' + (x + 36) + '" cy="176" r="4" fill="#777"/><circle cx="' + (x + 154) + '" cy="176" r="10" fill="#111"/><circle cx="' + (x + 154) + '" cy="176" r="4" fill="#777"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fes)"/>' + stars(10) +
      /* two-family frame houses of the South Ward */
      [[0, "#c9b79c"], [70, "#9fb3c8"], [140, "#d8c7a6"], [210, "#b7a9c9"], [280, "#c4b08e"], [350, "#a9bfa9"]].map(([x, c], i) =>
        '<path d="M' + x + ' 110v-46l32 -22l32 22v46z" fill="' + c + '" stroke="#3b3346" stroke-width="1.5"/>' +
        '<rect class="fe-bl fe-bl' + (i % 3 + 1) + '" x="' + (x + 12) + '" y="70" width="12" height="14" fill="#ffd98a"/><rect x="' + (x + 40) + '" y="70" width="12" height="14" fill="#5b5266"/>' +
        '<rect x="' + (x + 8) + '" y="92" width="48" height="4" fill="#efe7da"/>').join("") +
      /* bus stop sign + shelter */
      '<rect x="318" y="64" width="4" height="114" fill="#6b7280"/><rect x="300" y="40" width="74" height="40" rx="4" fill="#fff" stroke="' + NJT + '" stroke-width="2"/>' +
      '<rect x="300" y="40" width="74" height="12" rx="3" fill="' + NJT + '"/>' + txt("BUS STOP", 337, 49, 8, "#fff") + bullet(322, 66, "65", NJT, 10) + bullet(350, 66, "66", NJT, 10) +
      /* name sign */
      '<rect x="20" y="10" width="250" height="34" rx="3" fill="#111"/><rect x="20" y="10" width="250" height="3" fill="#fff"/>' +
      '<text x="32" y="33" ' + font + ' font-size="14.5" fill="#fff">Elizabeth Av &amp; Grumman Av</text>' +
      '<g class="anim-train">' + bus(60) + '</g>' +
      /* sidewalk + street */
      '<rect x="0" y="186" width="400" height="12" fill="#b9b3a7"/><rect x="0" y="198" width="400" height="62" fill="#46484d"/>' +
      [0, 60, 120, 180, 240, 300, 360].map(x => '<rect x="' + (x + 12) + '" y="228" width="30" height="3" fill="#e5e7eb"/>').join("") +
      '<g class="fe-carL"><rect x="0" y="236" width="48" height="15" rx="4" fill="' + ROSE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="38" cy="251" r="4" fill="#111"/></g>' +
      person(290, 160, "#2b2140") + person(372, 162, "#3a2a1e"),
      sky("fes", "#151236", "#6a4a7a"));
  }

  /* 2. Emmanuel Baptist Church, Newark: red-brick church, white steeple, glowing stained glass, notes floating out the open doors */
  function fechurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#fec)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffe7a8" opacity=".85"/>' +
      /* steeple */
      '<path d="M200 6l16 40h-32z" fill="#f4f1ea" stroke="#9a8f80" stroke-width="1.5"/><rect x="186" y="46" width="28" height="40" fill="#f4f1ea" stroke="#9a8f80" stroke-width="1.5"/>' +
      '<rect x="194" y="54" width="12" height="16" rx="6" fill="#4a3b32"/><path d="M200 0v10M195 4h10" stroke="' + GOLD + '" stroke-width="2.5"/>' +
      /* church body */
      bricks(110, 86, 180, 130, "#9b3d2e", "#7c2f23") + '<path d="M104 90l96 -34l96 34z" fill="#6e2a20"/>' +
      /* rose window */
      '<circle class="fe-glow" cx="200" cy="134" r="17" fill="#2a1a40" stroke="' + GOLD + '" stroke-width="3"/>' +
      [0, 45, 90, 135].map(a => '<path d="M200 134l0 -15" stroke="' + [ROSE, AQUA, GOLD, "#9be38f"][a / 45] + '" stroke-width="5" transform="rotate(' + a + ' 200 134)"/><path d="M200 134l0 15" stroke="' + [ROSE, AQUA, GOLD, "#9be38f"][a / 45] + '" stroke-width="5" transform="rotate(' + a + ' 200 134)"/>').join("") +
      '<circle cx="200" cy="134" r="5" fill="' + GOLD + '"/>' +
      /* arched side windows */
      [128, 158, 228, 258].map((x, i) => '<path class="fe-glow" d="M' + x + ' 196v-38a7 7 0 0 1 14 0v38z" fill="' + [ROSE, AQUA, AQUA, ROSE][i] + '" stroke="#f4f1ea" stroke-width="2"/>').join("") +
      /* doors open, warm light */
      '<path d="M186 216v-28a14 14 0 0 1 28 0v28z" fill="#ffd98a"/><path d="M186 216v-28a14 14 0 0 1 14 -14v42z" fill="#5a3324"/>' +
      '<rect x="120" y="98" width="160" height="15" fill="#f4f1ea"/>' + txt("EMMANUEL BAPTIST CHURCH", 200, 109.5, 9.5, "#5a2a20") +
      notes([206, 222, 236], 190) +
      /* steps, sidewalk, street */
      '<rect x="168" y="216" width="64" height="6" fill="#d6d0c4"/><rect x="160" y="222" width="80" height="6" fill="#c4bdb0"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#4a4a50"/>' + tree(50, 170, 1.4, "#2f6b3d") + tree(352, 172, 1.3, "#2f6b3d"),
      sky("fec", "#f2a65a", "#f7d9a8"));
  }

  /* 3. University High School, Newark (class of '91): brick school, flag waving, a yellow school bus rolling past */
  function feuhs() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) win += '<rect x="' + (62 + c * 32) + '" y="' + (78 + r * 30) + '" width="18" height="18" fill="' + ((r + c) % 4 ? "#a9d3ee" : "#ffe08a") + '" stroke="#efe7da" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#feu)"/>' +
      '<g class="fe-wave"><ellipse cx="80" cy="34" rx="34" ry="9" fill="#fff" opacity=".8"/><ellipse cx="300" cy="24" rx="40" ry="10" fill="#fff" opacity=".7"/></g>' +
      bricks(46, 60, 308, 118, "#a8553f", "#8a4332") + win +
      '<rect x="40" y="54" width="320" height="10" fill="#e9dfcc"/>' +
      '<rect x="140" y="140" width="120" height="38" fill="#e9dfcc"/><rect x="186" y="158" width="28" height="20" fill="#3b2a22"/>' +
      txt("UNIVERSITY HIGH SCHOOL", 200, 153, 9.5, "#5a2a20") +
      /* flag */
      '<rect x="362" y="20" width="3" height="158" fill="#d1d5db"/>' +
      '<g transform="translate(365 24)"><g class="fe-flag"><rect width="34" height="20" fill="#b22234"/>' + [3, 9, 15].map(y => '<rect y="' + y + '" width="34" height="3" fill="#fff"/>').join("") + '<rect width="14" height="11" fill="#3c3b6e"/></g></g>' +
      '<rect x="0" y="178" width="400" height="10" fill="#c9c2b4"/><rect x="0" y="188" width="400" height="72" fill="#4a4a50"/>' +
      [0, 70, 140, 210, 280, 350].map(x => '<rect x="' + (x + 14) + '" y="222" width="34" height="3" fill="#e5e7eb"/>').join("") +
      '<g class="fe-car"><rect x="0" y="194" width="86" height="28" rx="4" fill="#f5b800"/><rect x="66" y="198" width="16" height="12" fill="#a9d3ee"/>' +
      [6, 22, 38, 54].map(k => '<rect x="' + k + '" y="198" width="12" height="10" fill="#a9d3ee"/>').join("") + '<rect x="0" y="212" width="86" height="2" fill="#111"/>' +
      '<circle cx="18" cy="224" r="6" fill="#111"/><circle cx="68" cy="224" r="6" fill="#111"/></g>' +
      tree(22, 150, 1.1, "#3f7d43") + tree(380, 156, .9, "#3f7d43"),
      sky("feu", "#6fb4e8", "#d4ecfb"));
  }

  /* 4. Lake Mirror, Lakeland, Florida (where she was born): white classical promenade and balustrade, palms, swans gliding */
  function felake() {
    const swan = (x, y) => '<g><ellipse cx="' + x + '" cy="' + y + '" rx="14" ry="6" fill="#fff"/><path d="M' + (x + 8) + ' ' + (y - 2) + 'q6 -16 0 -20q-5 -3 -6 2" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M' + (x + 2) + ' ' + (y - 20) + 'l-5 1" stroke="#f58025" stroke-width="2.5" stroke-linecap="round"/></g>';
    const palm = (x, y, h) => '<path d="M' + x + ' ' + y + 'q4 -' + h / 2 + ' 0 -' + h + '" stroke="#7a5a3a" stroke-width="6" fill="none"/>' +
      [[-26, -10], [-20, 8], [24, -8], [20, 10], [0, -22]].map(([dx, dy]) => '<path class="fe-sway" style="transform-origin:' + x + 'px ' + (y - h) + 'px" d="M' + x + ' ' + (y - h) + 'q' + dx / 2 + ' ' + (dy - 12) + ' ' + dx + ' ' + dy + '" stroke="#2f7d45" stroke-width="6" fill="none" stroke-linecap="round"/>').join("");
    let col = "";
    for (let i = 0; i < 11; i++) col += '<rect x="' + (60 + i * 26) + '" y="78" width="10" height="44" fill="#f7f3ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fel)"/>' +
      '<circle cx="80" cy="46" r="24" fill="#ffd27a"/>' +
      /* promenade colonnade */
      '<rect x="50" y="70" width="300" height="10" fill="#f7f3ea"/><rect x="46" y="64" width="308" height="8" fill="#e8e1d2"/>' + col +
      '<rect x="50" y="122" width="300" height="10" fill="#e8e1d2"/>' +
      [70, 120, 170, 220, 270, 320].map(x => '<path d="M' + x + ' 132v-6h4v6" fill="#f7f3ea" stroke="#d6cdb8"/>').join("") +
      palm(30, 140, 90) + palm(372, 140, 96) +
      /* lake */
      '<rect x="0" y="134" width="400" height="126" fill="#3f8fb5"/>' +
      [150, 172, 196, 222, 246].map((y, i) => '<path class="fe-wave" d="M' + (20 + i * 30) + ' ' + y + 'q20 -5 40 0t40 0" stroke="#a9e1f5" stroke-width="2" fill="none" opacity=".7"/>').join("") +
      '<rect x="40" y="138" width="320" height="18" fill="#f7f3ea" opacity=".18"/>' +
      '<g class="fe-swan">' + swan(120, 196) + '</g><g class="fe-swan fe-swan2">' + swan(250, 220) + '</g>' +
      '<rect x="110" y="89" width="180" height="18" rx="3" fill="#f7f3ea"/>' + txt("LAKE MIRROR · LAKELAND", 200, 102.5, 11, "#5a4a3a"),
      sky("fel", "#f4a3b4", "#fde2c4"));
  }

  /* 5. Grumman Av & Elizabeth Av, "Faith Evans Way" under the green signs; her name tagged on the wall; Weequahic Park's trees behind */
  function fecorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fek)"/>' + stars(8) +
      /* park trees behind */
      [20, 70, 120, 290, 340, 390].map((x, i) => '<circle cx="' + x + '" cy="' + (74 + (i % 2) * 8) + '" r="30" fill="#1f4f33"/>').join("") +
      /* falling leaves */
      [60, 150, 330].map((x, i) => '<path class="fe-leaf fe-leaf' + (i + 1) + '" d="M' + x + ' 40q6 -6 10 0q-4 6 -10 0z" fill="' + ["#f4a259", GOLD, ROSE][i] + '"/>').join("") +
      /* wall */
      bricks(150, 92, 250, 120, "#7d4a3a", "#64392c") +
      tag("FAITH", 180, 162, 38, ROSE, -7) + tag("EVANS", 250, 202, 32, GOLD, -5) + tag("KEEP THE FAITH", 250, 110, 13, AQUA, -3) +
      /* street sign pole */
      '<rect x="78" y="34" width="5" height="178" fill="#5b616b"/>' +
      '<rect x="12" y="34" width="138" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("GRUMMAN AV", 81, 50, 12, "#fff") +
      '<rect x="22" y="58" width="118" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("ELIZABETH AV", 81, 72, 11, "#fff") +
      '<rect x="14" y="82" width="134" height="22" rx="2" fill="#6b2a5a" stroke="' + GOLD + '" stroke-width="1.5"/>' + txt("FAITH EVANS WAY", 81, 97, 11.5, "#fff") +
      /* sidewalk + street */
      '<rect x="0" y="212" width="400" height="10" fill="#b9b3a7"/><rect x="0" y="222" width="400" height="38" fill="#46484d"/>' +
      '<g class="fe-car fe-car2"><rect x="0" y="230" width="48" height="15" rx="4" fill="' + AQUA + '"/><circle cx="10" cy="245" r="4" fill="#111"/><circle cx="38" cy="245" r="4" fill="#111"/></g>' +
      person(118, 186, "#2b2140"),
      sky("fek", "#1b1030", "#7a3d5a"));
  }

  window.SCENES = { festop, fechurch, feuhs, felake, fecorner };
})();
