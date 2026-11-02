/* Clinton Hill / Fort Greene opening scenes for the KOTA the Friend game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fly{0%{transform:translate(-40px,0)}50%{transform:translate(220px,-18px)}100%{transform:translate(480px,4px)}}' +
    '.brd{animation:fly 9s linear infinite}.brd2{animation-delay:-4s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.wng{transform-box:fill-box;transform-origin:50% 100%;animation:flap .5s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,230px) rotate(320deg);opacity:0}}' +
    '.lf{transform-box:fill-box;animation:fall 6s linear infinite}.lf2{animation-delay:-2s}.lf3{animation-delay:-4s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.hand{transform-origin:200px 108px;animation:spin 12s linear infinite}.hand2{transform-origin:200px 108px;animation:spin 90s linear infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}' +
    '.nt{animation:note 3.6s ease-out infinite}.nt2{animation-delay:-1.2s}.nt3{animation-delay:-2.4s}' +
    '@keyframes glow{0%,100%{opacity:1}50%{opacity:.55}}' +
    '.glw{animation:glow 2.4s ease-in-out infinite}.glw2{animation-delay:1.2s}' +
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
  const bird = (cls, x, y, c) =>
    '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><path d="M0 0q6-3 12 0q-6 3-12 0z" fill="' + c + '"/><path class="wng" d="M3 0q3-8 7 0z" fill="' + c + '"/><circle cx="12" cy="-1" r="2" fill="' + c + '"/></g></g>';
  const GOLD = "#f2c14e", SKY = "#7cc6e8", LEAF = "#8fd17a";

  /* 1. The G pulling into Clinton–Washington Avs, underground under Lafayette Avenue */
  function train() {
    let tiles = "";
    for (let x = 0; x < 400; x += 20) for (let y = 20; y < 112; y += 10) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#e9e4d6"/>';
    let cols = "";
    for (let x = 24; x < 400; x += 340) cols += '<rect x="' + x + '" y="20" width="12" height="160" fill="#2e7d4a"/><rect x="' + (x - 2) + '" y="20" width="16" height="6" fill="#1f5c35"/>';
    let windows = "";
    for (let x = 22; x < 280; x += 46) windows += '<rect x="' + x + '" y="130" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b1f24"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#2a2f36"/>' + tiles +
      /* green mosaic band along the wall */
      '<rect x="0" y="40" width="400" height="8" fill="#3f8a55"/>' + cols +
      /* lights */
      '<rect class="glw" x="60" y="6" width="80" height="6" rx="3" fill="#fff8d8"/><rect class="glw glw2" x="260" y="6" width="80" height="6" rx="3" fill="#fff8d8"/>' +
      /* station sign */
      '<rect x="66" y="58" width="268" height="34" rx="4" fill="#111"/><rect x="66" y="58" width="268" height="4" fill="#fff"/>' +
      '<text x="80" y="83" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Clinton–Washington Avs</text>' +
      bullet(310, 76, "G", "#6cbe45") +
      /* the G slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="5" fill="#6cbe45"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(292, 140, "G", "#6cbe45") +
      '</g>' +
      /* platform edge */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3d42"/>' +
      tag("FLTBYS", 24, 238, 28, GOLD, -4) + tag("KOTA", 300, 240, 30, SKY, -8));
  }

  /* 2. Fort Greene Park: up the wide granite stairs to the hilltop, big trees, birds over the lawn */
  function park() {
    let steps = "";
    for (let i = 0; i < 9; i++) {
      const y = 250 - i * 11, inset = 40 + i * 9;
      steps += '<rect x="' + inset + '" y="' + y + '" width="' + (400 - inset * 2) + '" height="10" fill="' + (i % 2 ? "#b9b4a8" : "#a7a296") + '"/>';
    }
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (r + 20) + '" fill="#4a3424"/>' +
      '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + c + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="320" cy="50" r="22" fill="#ffe08a"/>' +
      /* the hill */
      '<path d="M0 170q200-70 400 0v90H0z" fill="#5f9a4a"/>' +
      /* plaza on top, low granite wall, lamp posts */
      '<rect x="110" y="140" width="180" height="14" fill="#cfc9bb"/><rect x="104" y="136" width="192" height="6" fill="#ddd7c9"/>' +
      '<rect x="120" y="108" width="4" height="30" fill="#2a2f36"/><circle cx="122" cy="106" r="5" fill="#fff4c2" class="glw"/>' +
      '<rect x="276" y="108" width="4" height="30" fill="#2a2f36"/><circle cx="278" cy="106" r="5" fill="#fff4c2" class="glw glw2"/>' +
      tree(48, 120, 30, "#4f8a3c") + tree(358, 116, 32, "#467f36") + tree(92, 150, 18, "#6aa64f") + tree(312, 148, 20, "#5f9a46") +
      steps +
      /* stair rails */
      '<path d="M40 254L121 166M360 254L279 166" stroke="#7a756a" stroke-width="3"/>' +
      '<path class="lf" d="M80 20q6-4 8 2q-6 4-8-2z" fill="#e8a23a"/><path class="lf lf2" d="M300 10q6-4 8 2q-6 4-8-2z" fill="#d97b2b"/><path class="lf lf3" d="M200 0q6-4 8 2q-6 4-8-2z" fill="' + GOLD + '"/>' +
      bird("brd", 0, 70, "#2a5a8a") + bird("brd brd2", 0, 50, "#2a5a8a") +
      '<rect x="96" y="18" width="208" height="26" rx="4" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="36" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="1" fill="#fff">FORT GREENE PARK</text>',
      sky("g2", "#8ecdf0", "#d8f0fb"));
  }

  /* 3. Emmanuel Baptist Church at Lafayette Av and St. James Pl: the pale stone French Gothic front, the big pointed window, the tower with its pinnacles, choir music drifting out at his corner */
  function tower() {
    const pin = (x, y) => '<path d="M' + (x - 4) + ' ' + y + 'l4-18 4 18z" fill="#d8ccae"/>';
    let stone = "";
    for (let y = 70; y < 230; y += 12) stone += '<path d="M60 ' + y + 'h280" stroke="#c8bb98" stroke-width="1"/>';
    let tracery = "";
    for (let i = 0; i < 4; i++) tracery += '<path d="M' + (178 + i * 11) + ' 186v-56" stroke="#e9e1cc" stroke-width="2"/>';
    let row = "";
    [[0, "#7a4a34"], [346, "#6a3a2a"]].forEach(b => { row += '<rect x="' + b[0] + '" y="120" width="54" height="120" fill="' + b[1] + '"/>'; for (let y = 134; y < 230; y += 26) row += '<rect x="' + (b[0] + 10) + '" y="' + y + '" width="12" height="18" fill="#f6e6c8" opacity=".8"/><rect x="' + (b[0] + 32) + '" y="' + y + '" width="12" height="18" fill="#f6e6c8" opacity=".8"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + row +
      /* the tall tower on the left */
      '<rect x="60" y="40" width="70" height="200" fill="#e2d6b8"/>' + pin(64, 40) + pin(95, 40) + pin(126, 40) + '<path d="M78 40l17-30 17 30z" fill="#d8ccae"/>' +
      '<path d="M82 100v-30a13 13 0 0 1 26 0v30z" fill="#3a3a4a"/><path d="M84 160v-30a11 11 0 0 1 22 0v30z" fill="#3a3a4a"/>' +
      /* the nave front with the gable */
      '<rect x="130" y="80" width="150" height="160" fill="#eadfc4"/>' + stone.replace(/M60 /g, 'M130 ').replace(/h280/g, 'h150') + '<path d="M124 82l81-56 81 56z" fill="#e2d6b8" stroke="#c8bb98" stroke-width="2"/>' + pin(205, 26) +
      '<path d="M170 190v-58a35 40 0 0 1 70 0v58z" fill="#3a4a7a" stroke="#c8bb98" stroke-width="4"/>' + tracery + '<circle class="glw" cx="205" cy="124" r="12" fill="#e8b84a" opacity=".7"/>' +
      '<path d="M188 240v-30a17 17 0 0 1 34 0v30z" fill="#4a2a1e" stroke="#c8bb98" stroke-width="3"/>' +
      /* the shorter tower on the right */
      '<rect x="280" y="96" width="60" height="144" fill="#e2d6b8"/>' + pin(284, 96) + pin(310, 96) + pin(336, 96) +
      '<path d="M298 150v-26a12 12 0 0 1 24 0v26z" fill="#3a3a4a"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#2a2d33"/>' +
      '<g class="nt"><text x="212" y="214" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="nt nt2"><text x="196" y="214" font-size="14" fill="#fff">&#9835;</text></g>' +
      '<rect x="244" y="8" width="150" height="34" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="319" y="23" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Lafayette Av</text>' +
      '<text x="319" y="36" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">EMMANUEL BAPTIST</text>' +
      bird("brd", 0, 60, "#1a1c2a") + tag("KOTA", 8, 236, 26, GOLD, -5),
      sky("g3", "#7cc6e8", "#f6e2b8"));
  }

  /* 4. The Academy of Music on Lafayette: cream brick and colored terra cotta, big arched windows, music floating out */
  function bam() {
    let arches = "";
    [96, 156, 216, 276].forEach(x => arches += '<path d="M' + x + ' 168v-44a14 14 0 0 1 28 0v44z" fill="#ffd98a" class="glw"/><path d="M' + x + ' 168v-44a14 14 0 0 1 28 0v44z" fill="none" stroke="#3f7f8a" stroke-width="3"/><path d="M' + (x + 14) + ' 110v58M' + x + ' 140h28" stroke="#8a6a44" stroke-width="1.5"/>');
    let band = "";
    for (let x = 56; x < 344; x += 16) band += '<rect x="' + x + '" y="92" width="10" height="8" fill="' + (x % 32 ? "#3f7f8a" : "#d9893b") + '"/>';
    const n = (cls, x, y) => '<g class="nt ' + cls + '"><text x="' + x + '" y="' + y + '" font-family="Arial" font-size="20" fill="' + GOLD + '" stroke="#000" stroke-width=".8">&#9835;</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<rect x="50" y="70" width="300" height="160" fill="#efe0bf" stroke="#c9b48a" stroke-width="2"/>' +
      '<rect x="44" y="62" width="312" height="12" fill="#d7c39a"/><path d="M44 62h312" stroke="#3f7f8a" stroke-width="3"/>' + band +
      '<rect x="62" y="100" width="276" height="6" fill="#d7c39a"/>' +
      arches +
      /* cornice inscription (plain text, carved look) */
      '<text x="200" y="86" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#7a5f3a">ACADEMY OF MUSIC</text>' +
      /* marquee + doors */
      '<rect x="90" y="176" width="220" height="16" fill="#2a2f36"/><rect x="96" y="179" width="208" height="10" fill="#111"/>' +
      '<text class="glw" x="200" y="187.5" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" letter-spacing="3" fill="' + GOLD + '">TONIGHT: LIVE MUSIC</text>' +
      '<rect x="110" y="196" width="40" height="34" fill="#3b2a1c"/><rect x="180" y="196" width="40" height="34" fill="#3b2a1c"/><rect x="250" y="196" width="40" height="34" fill="#3b2a1c"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4d55"/><rect x="0" y="230" width="400" height="4" fill="#7a7d85"/>' +
      n("", 60, 60) + n("nt2", 300, 56) + n("nt3", 180, 50),
      sky("g4", "#152238", "#3a4f7a"));
  }

  /* 5. Lafayette Av and Clinton Av: green street signs, brownstone stoop, KOTA tagged on the wall */
  function corner() {
    let brick = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 0 : -18; x < 250; x += 36) brick += '<rect x="' + Math.max(0, x) + '" y="' + y + '" width="' + Math.min(34, 250 - Math.max(0, x), x + 34) + '" height="10" fill="#6a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="0" y="56" width="250" height="168" fill="#4e2a1e"/>' + brick +
      tag("KOTA", 30, 140, 44, GOLD, -7) + tag("THE FRIEND", 50, 190, 24, SKY, -3) + tag("FOTO", 190, 108, 18, LEAF, 6) +
      /* stoop at right */
      '<rect x="330" y="120" width="70" height="104" fill="#7b5038"/>' +
      '<path d="M330 224h-56v-10h10v-10h10v-10h10v-10h10v-10h16z" fill="#6b4532"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#2c2f36"/><rect x="0" y="224" width="400" height="4" fill="#8a8d95"/>' +
      /* street pole + signs */
      '<rect x="292" y="40" width="5" height="184" fill="#1d2329"/>' +
      '<rect x="254" y="44" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="295" y="57" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Lafayette Av</text>' +
      '<rect x="258" y="66" width="74" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="295" y="79" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Clinton Av</text>' +
      /* a little tree */
      '<rect x="362" y="70" width="5" height="50" fill="#4a3424"/><circle cx="364" cy="66" r="20" fill="#5f9a46"/>' +
      bird("brd", 0, 30, "#2a5a8a"),
      sky("g5", "#f6c87a", "#e88b6a"));
  }

  window.SCENES = { train, park, tower, bam, corner };
})();
