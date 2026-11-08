/* johnnygill scenes (Regions tab: THE DMV; Southeast Washington, D.C., where Johnny Gill was born and raised: Kimball Elementary on Minnesota Ave SE, Sousa Junior High on Ely Pl SE, then Duke Ellington School of the Arts; a Baptist minister's son who first sang in church with his brothers in Wings of Faith). CSS classes prefixed jg- (the page's own anim-train is kept).
   1 Minnesota Ave station on the Orange Line, open-air beside Kenilworth Ave: long flat concrete canopy, an Orange Line train sliding in, brown pylon, black station sign.
   2 Duke Ellington School of the Arts, Georgetown (the old Western High School): buff brick, white columned portico and pediment, the glass rooftop addition, notes drifting out.
   3 Fort Dupont Park summer stage, Southeast D.C.: the outdoor stage shell in the woods, lights sweeping, blankets on the lawn, fireflies.
   4 The John Philip Sousa Bridge (Pennsylvania Ave SE) over the Anacostia River into Southeast: pale steel arches, cars crossing, a rowing shell gliding.
   5 Minnesota Ave SE and Ely Pl SE by Kimball Elementary: green signs, GILL tagged on the brick, the Fort Dupont woods on the ridge behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jgglow{0%,100%{opacity:.4}50%{opacity:1}}.jg-glow{animation:jgglow 2.4s ease-in-out infinite}.jg-glow2{animation-delay:-1.2s}' +
    '@keyframes jgnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}.jg-note{animation:jgnote 3.6s ease-out infinite}.jg-n2{animation-delay:-1.2s}.jg-n3{animation-delay:-2.4s}' +
    '@keyframes jgbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jg-beam{transform-box:fill-box;transform-origin:50% 100%;animation:jgbeam 3s ease-in-out infinite}.jg-beam2{animation-delay:-1.5s}' +
    '@keyframes jgfly{0%,100%{transform:translate(0,0);opacity:.2}50%{transform:translate(6px,-8px);opacity:1}}.jg-fly{animation:jgfly 2.6s ease-in-out infinite}.jg-fly2{animation-delay:-.9s}.jg-fly3{animation-delay:-1.7s}' +
    '@keyframes jgcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jg-car{animation:jgcar 7s linear infinite}.jg-car2{animation-delay:-3.5s}' +
    '@keyframes jgcarl{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.jg-carl{animation:jgcarl 8s linear infinite}' +
    '@keyframes jgrow{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.jg-row{animation:jgrow 14s linear infinite}' +
    '@keyframes jgwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.jg-wave{animation:jgwave 3s linear infinite}' +
    '@keyframes jgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jg-sp{animation:jgspray 1.4s ease-out infinite}.jg-sp2{animation-delay:.45s}' +
    '@keyframes jgsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.jg-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jgsway 3.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "jg-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#3a2a1e"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="jg-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const bullet = (cx, cy, c, t) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + c + '"/><text x="' + cx + '" y="' + (cy + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + t + '</text>';
  const GOLD = "#e8b04a", RED = "#c8102e", CREAM = "#f3e6c8", ORANGE = "#ed8b00";

  /* 1. Minnesota Ave station, Orange Line */
  function jgstation() {
    const car = x => '<rect x="' + x + '" y="126" width="168" height="62" rx="5" fill="#c6cbd0" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="168" width="168" height="4" fill="#b5121b"/><rect x="' + x + '" y="173" width="168" height="2" fill="#1f4e9a"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="136" width="26" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + (x + 66) + '" y="134" width="16" height="44" fill="#a0a6ac"/><path d="M' + (x + 74) + ' 134v44" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 26) + '" cy="190" r="5" fill="#222"/><circle cx="' + (x + 142) + '" cy="190" r="5" fill="#222"/>';
    const cab = '<path d="M348 188v-58q0-4 4-4h30q12 4 16 22v40z" fill="#c6cbd0" stroke="#6b7177" stroke-width="1.5"/><path d="M372 132h12q8 4 11 18h-23z" fill="#11161c"/>' +
      '<rect x="348" y="168" width="50" height="4" fill="#b5121b"/><rect x="372" y="138" width="22" height="7" rx="1" fill="#000"/><text x="383" y="143.5" text-anchor="middle" ' + font + ' font-size="5" fill="' + ORANGE + '">ORANGE</text>' +
      '<circle cx="392" cy="178" r="3" fill="#fff6c2" class="jg-glow"/><circle cx="370" cy="190" r="5" fill="#222"/>';
    let edge = "";
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="197" width="10" height="3" rx="1.5" fill="#ffd27a" class="jg-glow' + (x % 52 ? " jg-glow2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jg-s1)"/>' + stars(10) +
      /* Kenilworth Ave traffic and power towers behind */
      '<path d="M40 104L52 40L64 104M46 70h12M44 84h16" stroke="#3a3f4a" stroke-width="2.5" fill="none"/><path d="M330 104L342 36L354 104M336 66h12M334 82h16" stroke="#3a3f4a" stroke-width="2.5" fill="none"/>' +
      '<path d="M52 44Q196 70 342 40" stroke="#3a3f4a" stroke-width="1" fill="none"/>' +
      '<rect x="0" y="100" width="400" height="8" fill="#4a4c52"/>' +
      '<g class="jg-carl"><rect x="0" y="92" width="34" height="9" rx="3" fill="#d0d4da"/><circle cx="4" cy="96" r="1.6" fill="#ff5a4a"/></g>' +
      /* long flat concrete canopy on round columns */
      '<rect x="0" y="48" width="400" height="12" fill="#c8c1b2"/><rect x="0" y="60" width="400" height="4" fill="#8a857a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 6) + '" y="50" width="28" height="7" rx="2" fill="#b3ac9e"/>').join("") +
      [60, 200, 340].map(x => '<rect x="' + (x - 5) + '" y="64" width="10" height="60" fill="#a39d90"/>').join("") +
      '<rect x="0" y="120" width="400" height="6" fill="#54504a"/>' +
      '<g class="anim-train">' + car(4) + car(176) + cab + '</g>' +
      '<rect x="0" y="194" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="202" width="400" height="58" fill="#8c4a3a"/>' +
      /* brown pylon with the orange band */
      '<rect x="18" y="138" width="14" height="64" fill="#4a3628"/><rect x="18" y="138" width="14" height="10" fill="' + ORANGE + '"/>' +
      /* station sign */
      '<rect x="70" y="210" width="260" height="42" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      bullet(94, 231, ORANGE, "OR") +
      '<text x="214" y="235" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Minnesota Ave</text>' +
      '<text x="214" y="247" text-anchor="middle" ' + font + ' font-size="7" fill="#e8dccb">SOUTHEAST WASHINGTON, D.C.</text>',
      sky("jg-s1", "#141c3a", "#c97a52"));
  }

  /* 2. Duke Ellington School of the Arts, Georgetown */
  function jgellington() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) {
      const x = 34 + c * 28; if (c === 5 || c === 6) continue;
      wins += '<rect x="' + x + '" y="' + (104 + r * 30) + '" width="12" height="18" fill="' + ((r + c) % 3 ? "#2a3440" : "#ffd98a") + '" opacity="' + ((r + c) % 3 ? 1 : .8) + '"/><rect x="' + (x - 1) + '" y="' + (102 + r * 30) + '" width="14" height="3" fill="#f4efe4"/>';
    }
    const col = x => '<rect x="' + x + '" y="104" width="8" height="84" fill="#f6f2ea"/><rect x="' + (x - 2) + '" y="100" width="12" height="5" fill="#e6e0d4"/><path d="M' + (x + 2.5) + ' 106v80M' + (x + 5.5) + ' 106v80" stroke="#d8d2c4" stroke-width=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jg-s2)"/>' +
      /* glass rooftop addition */
      '<path d="M60 76h280l-14 18H74z" fill="#9fd0e6" opacity=".55"/><path d="M60 76h280" stroke="#e8f6ff" stroke-width="1.5"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M' + (70 + i * 21) + ' 77v16" stroke="#e8f6ff" stroke-width=".8" opacity=".8"/>').join("") +
      /* buff brick main block */
      '<rect x="20" y="94" width="360" height="100" fill="#d9b67a"/><rect x="20" y="94" width="360" height="6" fill="#f4efe4"/>' + wins +
      /* center portico: columns and white pediment */
      '<rect x="150" y="96" width="100" height="98" fill="#cfa86a"/><path d="M142 96L200 66L258 96z" fill="#f6f2ea" stroke="#d8d2c4"/><circle cx="200" cy="84" r="6" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      col(156) + col(178) + col(214) + col(236) +
      '<rect x="190" y="150" width="20" height="38" rx="9" fill="#3a2418"/>' +
      '<rect x="140" y="188" width="120" height="8" fill="#e6e0d4"/><rect x="130" y="196" width="140" height="8" fill="#d6d0c4"/>' +
      /* lawn and walk */
      '<rect x="0" y="194" width="400" height="66" fill="#4f7a3a"/><path d="M170 260L188 204h24L230 260z" fill="#cfc6b4"/>' +
      tree(26, 198, 1.6, "#3c6a2e") + tree(376, 198, 1.7, "#3c6a2e") +
      /* piano keys along the bottom + music rising */
      '<rect x="20" y="236" width="140" height="18" fill="#f8f8f4" stroke="#222"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (20 + i * 14) + ' 236v18" stroke="#222"/>' + (i % 7 === 2 || i % 7 === 6 ? "" : '<rect x="' + (30 + i * 14) + '" y="236" width="7" height="11" fill="#111"/>')).join("") +
      note(190, 140, GOLD) + note(214, 132, CREAM, "jg-n2") + note(170, 150, "#fff", "jg-n3") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">DUKE ELLINGTON SCHOOL OF THE ARTS · GEORGETOWN</text>',
      sky("jg-s2", "#3a5a8a", "#f2c89a"));
  }

  /* 3. Fort Dupont Park summer stage */
  function jgdupont() {
    let fl = "";
    for (let i = 0; i < 14; i++) fl += '<circle class="jg-fly jg-fly' + (1 + i % 3) + '" cx="' + (20 + (i * 71) % 370) + '" cy="' + (120 + (i * 37) % 70) + '" r="1.8" fill="#f4ff9a"/>';
    let crowd = "";
    for (let i = 0; i < 16; i++) { const x = 18 + i * 24, y = 222 + (i % 2) * 8; crowd += '<circle cx="' + x + '" cy="' + (y - 12) + '" r="6" fill="#1a1416"/><path d="M' + (x - 9) + ' ' + (y + 12) + 'q9 -24 18 0z" fill="#1a1416"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#jg-s3)"/>' + stars(16) +
      /* wooded ridge */
      '<path d="M0 130q40 -40 90 -20t110 -30t110 20t90 -10v80H0z" fill="#16301e"/>' +
      tree(30, 150, 2, "#1f3f26") + tree(80, 140, 1.6, "#244a2c") + tree(330, 140, 1.7, "#244a2c") + tree(380, 150, 2, "#1f3f26") +
      /* light beams */
      '<g class="jg-beam"><path d="M130 160L110 20h16z" fill="#fff4c0" opacity=".18"/></g><g class="jg-beam jg-beam2"><path d="M270 160L276 20h16z" fill="#fff4c0" opacity=".18"/></g>' +
      /* stage shell */
      '<path d="M110 186V128a90 64 0 0 1 180 0v58z" fill="#e8e2d6"/><path d="M124 186V132a76 52 0 0 1 152 0v54z" fill="#3a2a3a"/>' +
      [0, 1, 2].map(i => '<path d="M' + (138 + i * 14) + ' 186V' + (136 - i * 4) + 'a' + (62 - i * 14) + ' ' + (42 - i * 9) + ' 0 0 1 ' + (124 - i * 28) + ' 0V186" stroke="#c8bfae" stroke-width="1.4" fill="none" opacity=".6"/>').join("") +
      '<rect x="100" y="184" width="200" height="12" fill="#6a5a4a"/>' +
      '<rect x="196" y="150" width="4" height="34" fill="#888"/><circle cx="198" cy="148" r="3.5" fill="' + GOLD + '"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<circle class="jg-glow' + (i % 2 ? " jg-glow2" : "") + '" cx="' + (134 + i * 26) + '" cy="124" r="3" fill="' + (i % 2 ? RED : GOLD) + '"/>').join("") +
      /* lawn with blankets */
      '<rect x="0" y="196" width="400" height="64" fill="#2a4a2a"/><rect x="40" y="244" width="60" height="10" fill="' + RED + '" opacity=".8"/><rect x="300" y="246" width="56" height="9" fill="' + GOLD + '" opacity=".8"/>' +
      crowd + fl + note(170, 150, GOLD) + note(226, 142, CREAM, "jg-n2") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">FORT DUPONT PARK · SUMMER STAGE · SOUTHEAST D.C.</text>',
      sky("jg-s3", "#0e1430", "#3a2a5a"));
  }

  /* 4. The Sousa Bridge over the Anacostia */
  function jgbridge() {
    let arches = "";
    for (let i = 0; i < 5; i++) { const x = 10 + i * 78; arches += '<path d="M' + x + ' 150q39 -34 78 0" stroke="#b8c4be" stroke-width="5" fill="none"/>' + Array.from({ length: 5 }, (_, k) => '<path d="M' + (x + 13 + k * 13) + ' ' + (150 - [10, 20, 24, 20, 10][k] * 0.9) + 'V116" stroke="#9aa8a2" stroke-width="1.6"/>').join("") + '<rect x="' + (x - 4) + '" y="116" width="8" height="70" fill="#8c938e"/>'; }
    let waves = "";
    for (let i = 0; i < 24; i++) waves += '<path d="M' + (i * 20) + ' ' + (206 + (i % 3) * 14) + 'q5 -3 10 0t10 0" stroke="#9cc6d8" stroke-width="1.2" fill="none" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jg-s4)"/>' +
      /* far bank with Southeast rowhouses and trees */
      '<path d="M0 120h400v30H0z" fill="#3a4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="' + (104 + (i % 3) * 4) + '" width="26" height="20" fill="' + ["#8a4a3a", "#b07a5a", "#6a5a6a"][i % 3] + '"/><path d="M' + (i * 34) + ' ' + (104 + (i % 3) * 4) + 'l13 -8l13 8z" fill="#2a2a30"/>').join("") +
      /* deck */
      '<rect x="0" y="108" width="400" height="10" fill="#cfd6d2"/><rect x="0" y="104" width="400" height="4" fill="#8c938e"/>' +
      '<g class="jg-car"><rect x="0" y="96" width="40" height="10" rx="3" fill="' + RED + '"/><circle cx="8" cy="106" r="3" fill="#111"/><circle cx="32" cy="106" r="3" fill="#111"/></g>' +
      '<g class="jg-car jg-car2"><rect x="0" y="96" width="44" height="10" rx="3" fill="' + GOLD + '"/><circle cx="8" cy="106" r="3" fill="#111"/><circle cx="36" cy="106" r="3" fill="#111"/></g>' +
      '<g class="jg-carl"><rect x="0" y="97" width="36" height="9" rx="3" fill="#e8ecf2"/><circle cx="6" cy="106" r="3" fill="#111"/><circle cx="30" cy="106" r="3" fill="#111"/></g>' +
      arches +
      /* river */
      '<rect x="0" y="186" width="400" height="74" fill="#2a5a6a"/><g class="jg-wave">' + waves + '</g>' +
      '<path d="M0 186h400" stroke="#7aa8b8" stroke-width="2"/>' +
      /* rowing shell */
      '<g class="jg-row"><path d="M0 222h80l-6 4H6z" fill="#f4f1ea"/>' + [10, 26, 42, 58].map(x => '<circle cx="' + x + '" cy="216" r="3" fill="#1a1416"/><path d="M' + (x - 8) + ' 230L' + (x + 8) + ' 218" stroke="' + GOLD + '" stroke-width="1.5"/>').join("") + '</g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUSA BRIDGE · PENNSYLVANIA AVE SE · THE ANACOSTIA</text>',
      sky("jg-s4", "#2a3a6a", "#f0a87a"));
  }

  /* 5. Minnesota Ave SE and Ely Pl SE */
  function jgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jg-s5)"/>' + stars(10) +
      /* Fort Dupont woods on the ridge */
      '<path d="M0 116q50 -46 110 -26t100 -24t110 22t80 -6v40H0z" fill="#1a3a22"/>' +
      '<g class="jg-sway">' + tree(60, 104, 1.6, "#224a2a") + tree(150, 92, 1.4, "#2a5a32") + '</g><g class="jg-sway">' + tree(250, 96, 1.5, "#224a2a") + tree(330, 104, 1.3, "#2a5a32") + '</g>' +
      /* brick wall */
      '<rect x="0" y="120" width="400" height="104" fill="#7a3e32"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#64322a" stroke-width="1"/>').join("") +
      '<rect x="0" y="116" width="400" height="6" fill="#3a2420"/>' +
      tag("GILL", 22, 190, 62, GOLD, -6) + tag("JOHNNY", 30, 216, 22, "#fff", -3) + tag("MY MY MY", 186, 168, 24, RED, -4) + tag("SE D.C.", 200, 206, 22, CREAM, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="jg-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + RED + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + RED + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(280, 98, 118, "Minnesota Ave SE") + sign(302, 124, 96, "Ely Pl SE") +
      '<g class="jg-sp"><circle cx="150" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jg-sp jg-sp2"><circle cx="156" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jg-s5", "#141a3a", "#8a4a5a"));
  }

  window.SCENES = { jgstation: jgstation, jgellington: jgellington, jgdupont: jgdupont, jgbridge: jgbridge, jgcorner: jgcorner };
})();
