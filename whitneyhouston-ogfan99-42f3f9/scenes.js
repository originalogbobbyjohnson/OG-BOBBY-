/* Whitney Houston game (OG FAN 99 New Jersey: Newark / East Orange; New Hope Baptist Church choir).
   Rooms: Orange Street on the Newark Light Rail (street-level island platform on Orange St), the New Hope choir loft (robes, organ pipes,
   stained glass), the Whitney E. Houston Academy in East Orange (the old Franklin School), Dodd Street in East Orange (frame houses with
   porches, a block and a half from the school), and Sussex Av & Dey St with New Hope Baptist Church behind. 400 x 260 SVGs. Classes prefixed wh-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes whcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.wh-car{animation:whcar 5s linear infinite}.wh-car2{animation-delay:-2.5s}' +
    '@keyframes whcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.wh-carL{animation:whcarL 6s linear infinite}' +
    '@keyframes whblink{0%,100%{opacity:.3}50%{opacity:1}}.wh-bl{animation:whblink 1.6s ease-in-out infinite}.wh-bl2{animation-delay:.5s}.wh-bl3{animation-delay:1.1s}' +
    '@keyframes whnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.wh-note{animation:whnote 3.2s linear infinite}.wh-note2{animation-delay:-1.1s}.wh-note3{animation-delay:-2.2s}' +
    '@keyframes whsway{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}.wh-sway{animation:whsway 1.6s ease-in-out infinite}.wh-sway2{animation-delay:-.8s}' +
    '@keyframes whflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.wh-flag{animation:whflag 1.4s ease-in-out infinite}' +
    '@keyframes whleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-30px,150px) rotate(220deg);opacity:0}}.wh-leaf{animation:whleaf 5s linear infinite}.wh-leaf2{animation-delay:-1.7s}.wh-leaf3{animation-delay:-3.3s}' +
    '@keyframes whglow{0%,100%{opacity:.55}50%{opacity:1}}.wh-glow{animation:whglow 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, label, color, r) => { r = r || 12; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.36) + '" text-anchor="middle" ' + font + ' font-size="' + r * 0.8 + '" fill="#fff">' + label + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="wh-bl wh-bl' + (i % 3 + 1) + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 41) % 54) + '" r="' + (i % 3 ? 0.9 : 1.3) + '" fill="#fff"/>'; return s; };
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const bricks = (x, y, w, h, c1, c2) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c1 + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c2 + '" stroke-width="1"/>'; return s; };
  const PINK = "#f6c1d9", GOLD = "#c9a24a", SKY = "#8fd3ff", CREAM = "#f4ead8", NJT = "#0039a6", NJO = "#f58025", NJP = "#a2238e";
  const notes = (xs, y) => xs.map((x, i) => '<text class="wh-note wh-note' + (i % 3 + 1) + '" x="' + x + '" y="' + y + '" font-size="18" fill="' + [GOLD, PINK, SKY][i % 3] + '">' + (i % 2 ? "&#9835;" : "&#9834;") + '</text>').join("");

  /* 1. Orange Street on the Newark Light Rail: street-level island platform, a light rail car with the pantograph up sliding in */
  function whstation() {
    const lrv = x => '<rect x="' + x + '" y="88" width="150" height="54" rx="8" fill="#e6e8eb" stroke="#6b7280" stroke-width="2"/>' +
      [16, 44, 72, 100].map(k => '<rect x="' + (x + k) + '" y="98" width="22" height="18" rx="2" fill="#a9d3ee"/>').join("") +
      '<rect x="' + (x + 124) + '" y="96" width="18" height="38" rx="2" fill="#9aa3ad"/>' +
      '<rect x="' + x + '" y="122" width="150" height="5" fill="' + NJT + '"/><rect x="' + x + '" y="127" width="150" height="3" fill="' + NJO + '"/><rect x="' + x + '" y="130" width="150" height="3" fill="' + NJP + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#wss)"/>' + stars(12) +
      [[0, 70, 60], [66, 54, 46], [118, 76, 70], [196, 60, 44], [246, 72, 64], [316, 50, 84]].map(([x, y, w], i) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#2d2440"/>' +
        '<rect class="wh-bl wh-bl' + (i % 3 + 1) + '" x="' + (x + 10) + '" y="' + (y + 12) + '" width="6" height="7" fill="#ffd98a"/><rect class="wh-bl wh-bl' + ((i + 2) % 3 + 1) + '" x="' + (x + 26) + '" y="' + (y + 26) + '" width="6" height="7" fill="#ffd98a"/>').join("") +
      /* overhead wire */
      '<path d="M0 64h400" stroke="#9aa3ad" stroke-width="1.5"/>' + [24, 376].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="92" fill="#4b5563"/>').join("") +
      /* sign */
      '<rect x="60" y="14" width="240" height="34" rx="3" fill="#111"/><rect x="60" y="14" width="240" height="3" fill="#fff"/>' +
      '<text x="74" y="37" ' + font + ' font-size="16" fill="#fff">Orange Street</text>' + bullet(274, 31, "NLR", NJT, 13) +
      '<g class="anim-train">' + lrv(30) + lrv(184) + '<path d="M90 88l14-20h20M250 88l14-20h20" stroke="#374151" stroke-width="2" fill="none"/></g>' +
      /* island platform + tracks at street level */
      '<rect x="0" y="142" width="400" height="6" fill="#3a3a3f"/><rect x="0" y="148" width="400" height="22" fill="#b9b3a7"/><rect x="0" y="148" width="400" height="4" fill="#e8c547"/>' +
      '<rect x="120" y="128" width="160" height="6" fill="#4b5563"/>' + [130, 270].map(x => '<rect x="' + x + '" y="134" width="4" height="16" fill="#4b5563"/>').join("") +
      person(150, 116, "#1f2937") + person(250, 118, "#111827") +
      /* Orange St traffic */
      '<rect x="0" y="170" width="400" height="90" fill="#46484d"/>' + [0, 60, 120, 180, 240, 300, 360].map(x => '<rect x="' + (x + 12) + '" y="214" width="30" height="3" fill="#e5e7eb"/>').join("") +
      '<g class="wh-car"><rect x="0" y="188" width="48" height="16" rx="4" fill="' + PINK + '"/><circle cx="10" cy="204" r="4" fill="#111"/><circle cx="38" cy="204" r="4" fill="#111"/></g>' +
      '<g class="wh-carL"><rect x="0" y="228" width="48" height="16" rx="4" fill="' + SKY + '"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="38" cy="244" r="4" fill="#111"/></g>' +
      '<rect x="300" y="176" width="84" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("ORANGE ST", 342, 191, 11, "#fff"),
      sky("wss", "#141433", "#5a3b6a"));
  }

  /* 2. The New Hope choir loft: organ pipes, a stained-glass window glowing, the choir in burgundy and gold robes swaying, notes rising */
  function whchoir() {
    let pipes = "";
    for (let i = 0; i < 15; i++) { const h = 60 + Math.abs(7 - i) * -4 + 30; pipes += '<rect x="' + (110 + i * 12) + '" y="' + (100 - h) + '" width="9" height="' + h + '" rx="3" fill="' + (i % 2 ? "#d8b968" : "#c9a24a") + '"/>'; }
    const singer = (x, y, i) => '<g class="wh-sway' + (i % 2 ? " wh-sway2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="8" fill="#2a1a14"/><path d="M' + (x - 13) + ' ' + (y + 40) + 'q0-30 13-30t13 30z" fill="#7a1f3d"/><path d="M' + (x - 6) + ' ' + (y + 10) + 'l6 12l6-12" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a22"/>' +
      '<path d="M0 0h400v120H0z" fill="#3a2430"/>' + pipes +
      /* stained glass windows */
      [30, 330].map(x => '<g class="wh-glow"><path d="M' + x + ' 110v-60q20-30 40 0v60z" fill="#1a1a2e" stroke="' + GOLD + '" stroke-width="3"/><path d="M' + (x + 4) + ' 106v-54q16-24 32 0v54z" fill="#3b6fd1"/><path d="M' + (x + 4) + ' 70h32M' + (x + 20) + ' 34v72" stroke="' + GOLD + '" stroke-width="2"/><rect x="' + (x + 6) + ' " y="74" width="12" height="30" fill="#d9434a"/><rect x="' + (x + 22) + '" y="74" width="12" height="30" fill="#4caf50"/><circle cx="' + (x + 20) + '" cy="54" r="8" fill="#f2c14e"/></g>').join("") +
      /* choir rows */
      '<rect x="0" y="150" width="400" height="16" fill="#5a3a24"/><rect x="0" y="196" width="400" height="16" fill="#5a3a24"/>' +
      [40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => singer(x, 116, i)).join("") +
      [60, 100, 140, 180, 220, 260, 300, 340].map((x, i) => singer(x, 162, i + 1)).join("") +
      '<rect x="0" y="212" width="400" height="48" fill="#4a2e1e"/>' +
      '<rect x="120" y="224" width="160" height="26" rx="3" fill="#1b1018" stroke="' + GOLD + '" stroke-width="2"/>' + txt("NEW HOPE CHOIR", 200, 242, 13, PINK) +
      notes([70, 150, 250, 320], 108),
      "");
  }

  /* 3. The Whitney E. Houston Academy in East Orange (the old Franklin School): red brick, white trim, the name over the doors, a flag waving */
  function whacademy() {
    return svg(
      '<rect width="400" height="260" fill="url(#was)"/>' +
      '<circle cx="60" cy="44" r="18" fill="#fff3c4"/>' +
      bricks(40, 70, 320, 160, "#9a4a32", "#86402b") +
      '<rect x="36" y="62" width="328" height="10" fill="' + CREAM + '"/><rect x="40" y="140" width="320" height="5" fill="' + CREAM + '"/>' +
      [58, 98, 138, 236, 276, 316].map(x => '<rect x="' + x + '" y="86" width="26" height="40" fill="#2a3a52" stroke="' + CREAM + '" stroke-width="3"/><path d="M' + (x + 13) + ' 86v40M' + x + ' 106h26" stroke="' + CREAM + '" stroke-width="2"/>' +
        '<rect x="' + x + '" y="156" width="26" height="40" fill="#2a3a52" stroke="' + CREAM + '" stroke-width="3"/><path d="M' + (x + 13) + ' 156v40M' + x + ' 176h26" stroke="' + CREAM + '" stroke-width="2"/>').join("") +
      /* entrance */
      '<path d="M170 230v-80q30-26 60 0v80z" fill="' + CREAM + '"/><path d="M180 230v-70q20-18 40 0v70z" fill="#3a2418"/><path d="M200 162v68" stroke="#c9a24a" stroke-width="2"/>' +
      '<rect x="78" y="44" width="244" height="22" rx="2" fill="#1b1018" stroke="' + GOLD + '" stroke-width="2"/>' + txt("WHITNEY E. HOUSTON ACADEMY", 200, 60, 11.5, PINK) +
      /* flag */
      '<rect x="360" y="30" width="3" height="80" fill="#888"/><g class="wh-flag" style="transform-origin:363px 34px"><rect x="363" y="34" width="30" height="18" fill="' + SKY + '"/><text x="378" y="48" text-anchor="middle" ' + font + ' font-size="11" fill="#1b1018">&#9835;</text></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#6aa04a"/><rect x="150" y="230" width="100" height="30" fill="#b9b3a7"/>' +
      notes([120, 290], 140),
      sky("was", "#7fb6e6", "#f7d6b8"));
  }

  /* 4. Dodd Street, East Orange: frame houses with front porches and stoops, old shade trees, leaves drifting down, a car rolling by */
  function whdodd() {
    const house = (x, body, roof, i) => '<path d="M' + x + ' 120l45-40l45 40z" fill="' + roof + '"/><rect x="' + (x + 6) + '" y="118" width="78" height="96" fill="' + body + '"/>' +
      '<rect x="' + (x + 16) + '" y="128" width="18" height="22" fill="#ffd98a" class="wh-bl wh-bl' + (i + 1) + '"/><rect x="' + (x + 56) + '" y="128" width="18" height="22" fill="#ffd98a"/>' +
      '<rect x="' + (x + 2) + '" y="168" width="86" height="6" fill="' + CREAM + '"/>' + [6, 44, 82].map(k => '<rect x="' + (x + k) + '" y="174" width="4" height="40" fill="' + CREAM + '"/>').join("") +
      '<rect x="' + (x + 40) + '" y="182" width="16" height="32" fill="#4a2e1e"/><rect x="' + (x + 30) + '" y="214" width="36" height="8" fill="#9a9488"/>';
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (226 - y) + '" fill="#5a3d2b"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.55) + '" cy="' + (y + 8) + '" r="' + r * 0.7 + '" fill="' + c + '"/><circle cx="' + (x + r * 0.55) + '" cy="' + (y + 8) + '" r="' + r * 0.7 + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#wds)"/>' +
      house(10, "#e9e2cf", "#5b4a6a", 0) + house(110, "#c8d8e4", "#3e3a4a", 1) + house(210, "#f1d7c4", "#5b4a6a", 2) + house(310, "#d9e4c8", "#3e3a4a", 0) +
      tree(104, 70, 30, "#c46a2a") + tree(304, 64, 34, "#d99a2b") +
      '<g fill="#d99a2b"><path class="wh-leaf" d="M110 60l6 3l-4 5z"/><path class="wh-leaf wh-leaf2" d="M300 54l6 3l-4 5z" fill="#c46a2a"/><path class="wh-leaf wh-leaf3" d="M200 40l6 3l-4 5z"/></g>' +
      '<rect x="0" y="222" width="400" height="8" fill="#9a9488"/><rect x="0" y="230" width="400" height="30" fill="#46484d"/>' +
      '<g class="wh-car"><rect x="0" y="236" width="50" height="15" rx="4" fill="' + PINK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="40" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="150" width="4" height="72" fill="#3d4b3f"/><rect x="314" y="150" width="84" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Dodd St", 356, 165, 12, "#fff"),
      sky("wds", "#f4b183", "#fbe3c4"));
  }

  /* 5. Sussex Av & Dey St: green signs, WHITNEY tagged on the wall, New Hope Baptist Church behind with its tower and lit windows */
  function whcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wcs)"/>' + stars(14) +
      /* church */
      bricks(70, 60, 220, 80, "#8e3b2a", "#7a3122") + bricks(150, 14, 60, 60, "#8e3b2a", "#7a3122") +
      '<path d="M146 16l34-14l34 14z" fill="#3b3a3f"/><path d="M66 62l114-30l114 30z" fill="#3b3a3f"/>' +
      '<path d="M174 60v-30q6-10 12 0v30z" fill="#f2c14e" class="wh-glow"/><path d="M178 44h8M182 38v14" stroke="#7a3122" stroke-width="2"/>' +
      [92, 124, 222, 254].map(x => '<path d="M' + x + ' 128v-34q8-12 16 0v34z" fill="#ffcf7a" class="wh-glow"/>').join("") +
      '<rect x="165" y="100" width="30" height="40" fill="#4a2a1a" stroke="' + CREAM + '" stroke-width="2"/>' +
      /* wall */
      bricks(0, 134, 400, 92, "#3a3440", "#2f2a35") +
      tag("WHITNEY", 12, 186, 40, PINK, -5) + tag("NIPPY", 50, 218, 28, GOLD, -3) + tag("THE VOICE", 210, 214, 20, SKY, -6) +
      notes([180, 260], 170) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="wh-carL"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="352" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="294" y="66" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Sussex Av", 345, 82, 12, "#fff") +
      '<rect x="294" y="92" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Dey St", 345, 108, 12, "#fff") +
      '<circle class="wh-bl" cx="354" cy="60" r="4" fill="#fff6c2"/>',
      sky("wcs", "#0c0d24", "#40294f"));
  }

  window.SCENES = { whstation: whstation, whchoir: whchoir, whacademy: whacademy, whdodd: whdodd, whcorner: whcorner };
})();
