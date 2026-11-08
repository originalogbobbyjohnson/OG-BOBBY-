/* ruthbrown scenes (Regions tab: Virginia; Portsmouth — born Ruth Alston Weston in Portsmouth 1928; father a dockhand who directed the choir at Emanuel AME on North St; I. C. Norcom High).
   CSS classes and ids prefixed rb- (the page's own anim-train is kept on the bus).
   1 HRT bus pulling into the downtown Portsmouth stop at County St & Crawford St (routes 41, 45, 47).
   2 Emanuel AME Church, North St (1857): inside, the upper gallery on hand-chiseled posts with the wrought-iron railing and the stained glass, where her father led the choir.
   3 Crystal Caverns, 11th & U St NW, Washington DC, 1948: the basement club built like a cave, where Blanche Calloway heard her and Atlantic came calling.
   4 High St, Olde Towne: the old movie house with her mural (2014) on the wall (no face; a vintage mic, notes and her name).
   5 North St & Green St, by her historical marker near Emanuel AME: green signs, RUTH tagged on the brick, the 1846 Portsmouth Courthouse (brick, white Tuscan portico, round cupola) behind.
   400 x 260 SVGs. No logos, no faces, no 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.rb-flk{animation:rbflick 2.4s infinite}.rb-flk2{animation-delay:.9s}' +
    '@keyframes rbnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(40px,-80px);opacity:0}}.rb-note{animation:rbnote 4.2s linear infinite}.rb-n2{animation-delay:-1.4s}.rb-n3{animation-delay:-2.8s}' +
    '@keyframes rbsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.rb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:rbsway 2.6s ease-in-out infinite}.rb-sw2{animation-delay:-1.3s}' +
    '@keyframes rbglow{0%,100%{opacity:.45}50%{opacity:1}}.rb-glow{animation:rbglow 2.4s ease-in-out infinite}' +
    '@keyframes rbbulb{0%,100%{opacity:1}50%{opacity:.25}}.rb-bulb{animation:rbbulb .9s steps(2) infinite}.rb-b2{animation-delay:-.45s}' +
    '@keyframes rbdrip{0%{transform:translateY(0);opacity:0}20%{opacity:.9}100%{transform:translateY(40px);opacity:0}}.rb-drip{animation:rbdrip 2.2s ease-in infinite}.rb-d2{animation-delay:-1.1s}' +
    '@keyframes rbspot{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.rb-spot{transform-box:fill-box;transform-origin:50% 0;animation:rbspot 5s ease-in-out infinite}' +
    '@keyframes rbgull{0%{transform:translate(-40px,10px)}100%{transform:translate(450px,-20px)}}.rb-gull{animation:rbgull 11s linear infinite}' +
    '@keyframes rbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rb-sp{animation:rbspray 1.4s ease-out infinite}.rb-sp2{animation-delay:.45s}' +
    '@keyframes rbcloud{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.rb-cl{animation:rbcloud 9s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f4c27a", RED = "#c8102e", BLUE = "#5fb3d9", CREAM = "#f6efe0", HRT = "#0067b1", SIGN = "#0f6b3a";
  const note = (x, y, c, cls) => '<g class="rb-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="22" fill="' + c + '">&#9834;</text></g>';
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a33") + '"' + (lit ? ' class="rb-flk"' : '') + '/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + '" stroke="#f1e6d0" stroke-width="1"/>';
  const tree = (x, y, s, cls) => '<g class="rb-sway ' + (cls || "") + '"><rect x="' + (x - 2) + '" y="' + (y - 4) + '" width="4" height="' + (22 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (14 * s) + '" fill="#2f6b34"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (10 * s) + '" fill="#3a7d3f"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (10 * s) + '" fill="#3a7d3f"/></g>';
  const bullet = (x, y, txt, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="13" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + tc + '">' + txt + '</text>';
  const tear = (x, y, cls) => '<path class="rb-drip ' + (cls || "") + '" d="M' + x + ' ' + y + 'q-5 8 0 11q5 -3 0 -11z" fill="' + BLUE + '"/>';

  /* 1. HRT bus pulling into County St & Crawford St, downtown Portsmouth */
  function rbstation() {
    const bus = '<g class="anim-train"><rect x="40" y="118" width="300" height="76" rx="10" fill="#f2f4f6" stroke="#8b939c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="128" width="32" height="30" rx="3" fill="#1d2733"/>').join("") +
      '<rect x="44" y="126" width="26" height="56" rx="3" fill="#1d2733"/><path d="M57 126v56" stroke="#8b939c" stroke-width="1.5"/>' +
      '<rect x="300" y="126" width="36" height="32" rx="6" fill="#1d2733"/>' +
      '<rect x="40" y="164" width="300" height="8" fill="' + HRT + '"/><rect x="40" y="172" width="300" height="4" fill="#8cc63f"/>' +
      '<rect x="296" y="120" width="40" height="8" rx="2" fill="#111"/><text x="316" y="127" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb03a">45</text>' +
      '<circle cx="90" cy="196" r="13" fill="#222"/><circle cx="90" cy="196" r="5" fill="#9aa1a8"/><circle cx="290" cy="196" r="13" fill="#222"/><circle cx="290" cy="196" r="5" fill="#9aa1a8"/>' +
      '<circle cx="334" cy="182" r="4" fill="#ffe7a0" class="rb-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rbs1)"/>' +
      '<g class="rb-cl"><ellipse cx="90" cy="34" rx="38" ry="9" fill="#fff" opacity=".5"/><ellipse cx="300" cy="22" rx="42" ry="8" fill="#fff" opacity=".4"/></g>' +
      /* downtown Portsmouth behind: brick blocks and a slim tower */
      '<rect x="0" y="62" width="70" height="132" fill="#8a4a36"/><rect x="70" y="80" width="60" height="114" fill="#a9604a"/><rect x="130" y="40" width="46" height="154" fill="#c9c2b4"/>' +
      '<rect x="176" y="74" width="80" height="120" fill="#7a3f2e"/><rect x="256" y="58" width="56" height="136" fill="#b5ab9a"/><rect x="312" y="84" width="88" height="110" fill="#8f4b37"/>' +
      win(12, 76, 12, 18, true) + win(40, 76, 12, 18, false) + win(84, 92, 12, 18, false) + win(106, 92, 12, 18, true) + win(142, 54, 10, 16, true) + win(158, 54, 10, 16, false) +
      win(190, 88, 12, 18, true) + win(226, 88, 12, 18, false) + win(268, 70, 12, 18, false) + win(290, 70, 12, 18, true) + win(326, 98, 12, 18, true) + win(366, 98, 12, 18, false) +
      '<rect x="0" y="194" width="400" height="66" fill="#3b3e44"/><rect x="0" y="194" width="400" height="8" fill="#9c978d"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      /* stop pole + black sign */
      '<rect x="356" y="100" width="4" height="98" fill="#555"/><rect x="344" y="96" width="28" height="22" rx="3" fill="' + HRT + '"/><text x="358" y="111" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">HRT</text>' +
      '<rect x="14" y="208" width="290" height="44" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="26" y="227" ' + font + ' font-size="13" fill="#fff" letter-spacing="1">COUNTY ST &amp;</text>' +
      '<text x="26" y="245" ' + font + ' font-size="13" fill="#f3e3c3" letter-spacing="1">CRAWFORD ST</text>' +
      bullet(212, 230, "41", HRT, "#fff") + bullet(244, 230, "45", HRT, "#fff") + bullet(276, 230, "47", HRT, "#fff"),
      sky("rbs1", "#7fbbe6", "#f6e2b0"));
  }

  /* 2. Emanuel AME, North St: the gallery, the railing, the stained glass, the choir */
  function rbchurch() {
    const glass = (x, c1, c2, cls) => '<g class="' + cls + '"><path d="M' + x + ' 112v-44q16 -22 32 0v44z" fill="' + c1 + '"/><path d="M' + (x + 16) + ' 50v62M' + x + ' 86h32" stroke="#3a2a22" stroke-width="2"/><circle cx="' + (x + 16) + '" cy="72" r="6" fill="' + c2 + '"/></g><path d="M' + x + ' 112v-44q16 -22 32 0v44z" fill="none" stroke="#3a2a22" stroke-width="3"/>';
    let rail = "";
    for (let i = 0; i < 40; i++) rail += '<path d="M' + (8 + i * 10) + ' 132v18" stroke="#1b1b1b" stroke-width="1.5"/><circle cx="' + (13 + i * 10) + '" cy="141" r="3" fill="none" stroke="#1b1b1b" stroke-width="1.2"/>';
    const posts = Array.from({ length: 5 }, (_, i) => '<rect x="' + (30 + i * 84) + '" y="152" width="12" height="74" fill="#e9dfc8" stroke="#b9ab8c" stroke-width="1.5"/><rect x="' + (27 + i * 84) + '" y="150" width="18" height="6" fill="#d8cbae"/>').join("");
    const pews = Array.from({ length: 3 }, (_, r) => '<rect x="' + (20 - r * 6) + '" y="' + (200 + r * 18) + '" width="' + (360 + r * 12) + '" height="10" rx="2" fill="#6a3f24"/><rect x="' + (20 - r * 6) + '" y="' + (210 + r * 18) + '" width="' + (360 + r * 12) + '" height="4" fill="#4a2a18"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#efe6d2"/><rect x="0" y="0" width="400" height="26" fill="#d9ccb0"/>' +
      '<path d="M0 26h400" stroke="#b9ab8c" stroke-width="3"/>' +
      glass(44, "#3a86c8", RED, "rb-flk") + glass(116, "#d8a03a", "#3a86c8", "rb-flk rb-flk2") + glass(188, RED, GOLD, "rb-flk") + glass(260, "#3aa86a", RED, "rb-flk rb-flk2") + glass(332, "#3a86c8", GOLD, "rb-flk") +
      /* the gallery front with the wrought-iron railing */
      '<rect x="0" y="118" width="400" height="14" fill="#d8cbae"/><rect x="0" y="130" width="400" height="22" fill="#e9dfc8"/>' + rail + '<path d="M0 132h400M0 150h400" stroke="#1b1b1b" stroke-width="2"/>' +
      '<rect x="0" y="152" width="400" height="74" fill="#d9ccb0"/>' + posts +
      /* choir robes up front, singing */
      Array.from({ length: 6 }, (_, i) => '<g class="rb-sway' + (i % 2 ? ' rb-sw2' : '') + '"><path d="M' + (96 + i * 36) + ' 200q14 -34 28 0z" fill="' + (i % 2 ? "#5a1a2a" : "#7a2436") + '"/><rect x="' + (105 + i * 36) + '" y="178" width="10" height="8" fill="' + GOLD + '"/></g>').join("") +
      '<rect x="176" y="186" width="48" height="16" rx="2" fill="#3a2a22"/><text x="200" y="198" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CHOIR</text>' +
      note(140, 176, RED, "") + note(240, 172, "#3a86c8", "rb-n2") + note(196, 168, "#8a6410", "rb-n3") +
      pews +
      '<rect x="284" y="160" width="104" height="22" rx="3" fill="#111" opacity=".85"/><text x="336" y="175" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EMANUEL A.M.E.</text>' +
      '<rect x="12" y="160" width="74" height="22" rx="3" fill="' + RED + '"/><text x="49" y="175" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">NORTH ST</text>');
  }

  /* 3. Crystal Caverns, 11th & U NW, Washington DC, 1948 */
  function rbcaverns() {
    let stal = "";
    for (let i = 0; i < 16; i++) { const x = i * 26 + 6, h = 18 + (i * 37 % 26); stal += '<path d="M' + x + ' 0l10 ' + h + 'l10 -' + h + 'z" fill="' + (i % 2 ? "#5a6a86" : "#6f7fa0") + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#rbs3)"/>' +
      '<path d="M0 0h400v60q-40 18 -80 4q-40 20 -90 6q-50 18 -110 2q-60 16 -120 -2z" fill="#3a4766"/>' + stal +
      '<g class="rb-glow"><circle cx="60" cy="40" r="2" fill="#bfe6ff"/><circle cx="170" cy="30" r="2" fill="#bfe6ff"/><circle cx="300" cy="44" r="2" fill="#bfe6ff"/><circle cx="360" cy="24" r="2" fill="#bfe6ff"/></g>' +
      /* rock walls */
      '<path d="M0 60q30 40 10 90q20 50 0 110z" fill="#2a3450"/><path d="M400 60q-30 40 -12 90q-18 50 2 110z" fill="#2a3450"/>' +
      /* the spotlight swinging over the bandstand */
      '<g class="rb-spot"><path d="M200 50l-60 150h120z" fill="#fff4c8" opacity=".18"/></g>' +
      '<rect x="110" y="176" width="180" height="24" fill="#5a3a22"/><rect x="104" y="172" width="192" height="6" fill="#8a5a32"/>' +
      /* vintage mic stand center */
      '<rect x="196" y="120" width="8" height="18" rx="4" fill="#c9d1da" stroke="#5a6470" stroke-width="1.5"/><path d="M200 138v36M190 174h20" stroke="#5a6470" stroke-width="3"/>' +
      /* upright bass + a horn on the stand */
      '<path d="M146 172q-12 -18 0 -30q-6 -12 4 -20q10 8 4 20q12 12 0 30z" fill="#a0522d"/><path d="M150 122v-22" stroke="#3a2a1a" stroke-width="2"/>' +
      '<path d="M246 168q0 -24 10 -38l6 2q-8 16 -6 36z" fill="#d9b25a"/><circle cx="254" cy="168" r="7" fill="#d9b25a"/>' +
      note(214, 130, GOLD, "") + note(168, 124, "#bfe6ff", "rb-n2") + note(236, 120, RED, "rb-n3") +
      /* tables with lamps */
      Array.from({ length: 4 }, (_, i) => '<ellipse cx="' + (50 + i * 100) + '" cy="226" rx="30" ry="7" fill="#1b1b22"/><rect x="' + (47 + i * 100) + '" y="226" width="6" height="22" fill="#1b1b22"/><circle cx="' + (50 + i * 100) + '" cy="216" r="5" fill="#ffcf7a" class="rb-flk' + (i % 2 ? ' rb-flk2' : '') + '"/>').join("") +
      '<rect x="0" y="246" width="400" height="14" fill="#141821"/>' +
      '<rect x="100" y="70" width="200" height="30" rx="4" fill="#111" stroke="' + BLUE + '" stroke-width="2"/><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="14" fill="#bfe6ff" letter-spacing="2" class="rb-glow">CRYSTAL CAVERNS</text>' +
      '<rect x="296" y="200" width="96" height="20" rx="3" fill="' + RED + '"/><text x="344" y="214" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">11TH &amp; U ST NW</text>',
      sky("rbs3", "#1a2236", "#2e3a58"));
  }

  /* 4. High St, Olde Towne: the old movie house with her mural on the side wall */
  function rbmural() {
    const bulbs = Array.from({ length: 14 }, (_, i) => '<circle cx="' + (232 + i * 10) + '" cy="96" r="2.4" fill="#ffe7a0" class="rb-bulb' + (i % 2 ? ' rb-b2' : '') + '"/><circle cx="' + (232 + i * 10) + '" cy="130" r="2.4" fill="#ffe7a0" class="rb-bulb' + (i % 2 ? '' : ' rb-b2') + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rbs4)"/>' +
      '<g class="rb-gull"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* the side wall with the mural */
      '<rect x="10" y="50" width="206" height="150" fill="#b4604a"/>' +
      '<rect x="22" y="62" width="182" height="126" fill="#1f2a44"/>' +
      '<circle cx="113" cy="118" r="44" fill="' + GOLD + '" opacity=".25"/>' +
      '<rect x="104" y="80" width="18" height="34" rx="9" fill="#c9d1da" stroke="#5a6470" stroke-width="2"/><path d="M106 90h14M106 98h14M106 106h14" stroke="#5a6470" stroke-width="1"/>' +
      '<path d="M113 114v34M100 150h26" stroke="#5a6470" stroke-width="3"/>' +
      '<g fill="' + RED + '"><text x="44" y="104" font-size="22">&#9834;</text><text x="160" y="96" font-size="24">&#9835;</text></g>' +
      tear(58, 120, "") + tear(168, 116, "rb-d2") +
      '<text x="113" y="176" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + CREAM + '" letter-spacing="2">RUTH BROWN</text>' +
      /* theater front */
      '<rect x="216" y="40" width="174" height="160" fill="#d8cbb0"/><rect x="216" y="40" width="174" height="10" fill="#b9ab8c"/>' +
      '<path d="M216 50h174M216 60h174" stroke="#c4b596" stroke-width="1"/>' +
      win(236, 58, 16, 22, false) + win(296, 58, 16, 22, true) + win(356, 58, 16, 22, false) +
      '<rect x="224" y="92" width="158" height="42" fill="#7a1a22"/>' + bulbs +
      '<text x="303" y="120" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff" letter-spacing="3">TONIGHT</text>' +
      '<rect x="240" y="146" width="40" height="54" fill="#2a1c14"/><rect x="326" y="146" width="40" height="54" fill="#2a1c14"/><rect x="284" y="152" width="38" height="48" fill="#ffcf7a" class="rb-flk"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3b3e44"/><rect x="0" y="200" width="400" height="10" fill="#9c978d"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      tree(394, 206, .9, "rb-sw2") +
      '<rect x="12" y="214" width="96" height="22" rx="3" fill="#111" opacity=".85"/><text x="60" y="229" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HIGH ST</text>' +
      '<rect x="270" y="214" width="120" height="22" rx="3" fill="' + RED + '"/><text x="330" y="229" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">OLDE TOWNE</text>',
      sky("rbs4", "#3a4f86", "#f0a87a"));
  }

  /* 5. North St & Green St: her marker, RUTH tagged, the 1846 courthouse behind */
  function rbcorner() {
    const bricks = Array.from({ length: 13 }, (_, r) => '<path d="M0 ' + (132 + r * 9) + 'h236" stroke="#5e2f22" stroke-width="1" opacity=".6"/>').join("");
    const cols = Array.from({ length: 4 }, (_, i) => '<rect x="' + (284 + i * 22) + '" y="88" width="9" height="56" fill="#f2efe6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rbs5)"/>' +
      '<g class="rb-gull"><path d="M0 50q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* courthouse: brick block, white portico, round cupola */
      '<rect x="252" y="76" width="140" height="74" fill="#9a4632"/>' +
      '<rect x="326" y="34" width="20" height="26" fill="#f2efe6"/><path d="M322 34q14 -22 28 0z" fill="#e6e1d4"/><path d="M336 10v4" stroke="#e6e1d4" stroke-width="2"/>' +
      '<path d="M330 40v16M336 40v16M342 40v16" stroke="#9aa1a8" stroke-width="1.5"/><rect x="318" y="58" width="36" height="8" fill="#f2efe6"/>' +
      '<path d="M276 82l46 -18l46 18z" fill="#f2efe6"/><rect x="276" y="82" width="92" height="6" fill="#e6e1d4"/>' + cols +
      '<rect x="270" y="144" width="104" height="6" fill="#e6e1d4"/>' +
      '<rect x="0" y="126" width="236" height="134" fill="#8f3f2c"/>' + bricks +
      tag("RUTH", 22, 198, 54, GOLD, -7) + tag("MISS RHYTHM", 20, 232, 20, BLUE, -4) +
      '<g class="rb-sp"><circle cx="160" cy="184" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rb-sp rb-sp2"><circle cx="168" cy="188" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#9c978d"/><rect x="236" y="150" width="164" height="86" fill="#3b3e44"/><path d="M236 196h164" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      /* the historical marker on its post */
      '<rect x="206" y="176" width="4" height="60" fill="#3a3a3a"/><rect x="180" y="150" width="56" height="30" rx="3" fill="#1d3a2a" stroke="#c9b27a" stroke-width="1.5"/>' +
      '<text x="208" y="163" text-anchor="middle" ' + font + ' font-size="6" fill="#f2e6c2">RUTH BROWN</text><path d="M192 168h32M192 173h26" stroke="#c9b27a" stroke-width="1"/>' +
      /* street sign pole */
      '<rect x="296" y="122" width="5" height="114" fill="#5a5a5a"/>' +
      '<rect x="258" y="112" width="80" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="298" y="125" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NORTH ST</text>' +
      '<rect x="258" y="134" width="80" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="298" y="147" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GREEN ST</text>',
      sky("rbs5", "#1b2a52", "#e79a6a"));
  }

  window.SCENES = { rbstation: rbstation, rbchurch: rbchurch, rbcaverns: rbcaverns, rbmural: rbmural, rbcorner: rbcorner };
})();
