/* glorilla scenes (Regions tab: Memphis + Tennessee; Frayser, North Memphis). CSS classes and ids prefixed gl- (the page's own anim-train is kept).
   1 MATA Route 11 Frayser bus pulling up at Frayser Blvd & Millington Rd, the "Welcome to Frayser" sign on US 51 behind.
   2 Westside Middle School, Frayser: her old middle school (she gave its fine arts program $20,000), band horns in the window, notes floating out.
   3 Martin Luther King Jr. College Prep, Frayser: her high school (she gave it $25,000), graduation caps flying.
   4 FedExForum downtown on Glo Bash night: the tall glass atrium lit up, spotlights sweeping, the crowd outside.
   5 Dellwood Ave and Steele St in Frayser (by MLK Prep): green signs, BIG GLO tagged on the wall, 100 North Main's round top on the skyline behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes glflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.gl-flk{animation:glflick 2.2s infinite}.gl-flk2{animation-delay:.7s}' +
    '@keyframes glnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.gl-note{animation:glnote 3s ease-out infinite}.gl-n2{animation-delay:-1s}.gl-n3{animation-delay:-2s}' +
    '@keyframes glcap{0%{transform:translateY(0) rotate(0)}50%{transform:translateY(-60px) rotate(180deg)}100%{transform:translateY(0) rotate(360deg)}}.gl-cap{transform-box:fill-box;transform-origin:center;animation:glcap 2.4s ease-in-out infinite}.gl-c2{animation-delay:-.6s}.gl-c3{animation-delay:-1.2s}.gl-c4{animation-delay:-1.8s}' +
    '@keyframes glbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.gl-beam{transform-box:fill-box;transform-origin:bottom center;animation:glbeam 3.2s ease-in-out infinite}.gl-b2{animation-delay:-1.6s}' +
    '@keyframes glbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.gl-bob{animation:glbob .6s ease-in-out infinite}.gl-bob2{animation-delay:-.3s}' +
    '@keyframes gltw{0%,100%{opacity:.3}50%{opacity:1}}.gl-tw{animation:gltw 1.8s ease-in-out infinite}.gl-tw2{animation-delay:-.9s}' +
    '@keyframes glspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gl-sp{animation:glspray 1.4s ease-out infinite}.gl-sp2{animation-delay:.45s}' +
    '@keyframes glcar{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.gl-car{animation:glcar 7s linear infinite;animation-delay:-2.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="gl-tw' + (i % 2 ? ' gl-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 80) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const brick = (x, y, w, h, c, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
    Array.from({ length: Math.floor(h / 7) }, (_, i) => '<path d="M' + x + ' ' + (y + 7 + i * 7) + 'h' + w + '" stroke="' + line + '" stroke-width=".8"/>').join("");
  const MATA = "#1f4e79", RED = "#c8102e", GOLD = "#ffcc33", PINK = "#ff4fa3", SKY = "#5ad1ff";

  /* 1. MATA Route 11 Frayser at Frayser Blvd & Millington Rd */
  function glstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">11 FRAYSER</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    /* low Frayser storefronts, trees, and the welcome sign on US 51 */
    const shop = (x, w, h, c) => '<rect x="' + x + '" y="' + (116 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x + 6) + '" y="' + (122 - h) + '" width="' + (w - 12) + '" height="8" fill="#2a1d14" opacity=".55"/>';
    const tree = (x, r) => '<rect x="' + (x - 2) + '" y="' + (100 - r) + '" width="4" height="' + (r + 16) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (96 - r) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x + r * .6) + '" cy="' + (100 - r) + '" r="' + r * .7 + '" fill="#3b7d45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gls1)"/>' +
      tree(20, 18) + tree(380, 20) +
      shop(40, 64, 34, "#b5694a") + shop(108, 70, 44, "#d8b48a") + shop(250, 70, 38, "#9a5a40") + shop(324, 40, 30, "#c98e5a") +
      /* Welcome to Frayser monument */
      '<rect x="182" y="60" width="64" height="40" rx="3" fill="#8f3b2a" stroke="#5a2418" stroke-width="2"/><rect x="186" y="64" width="56" height="32" rx="2" fill="#f2ead8"/>' +
      '<text x="214" y="76" text-anchor="middle" ' + font + ' font-size="7" fill="' + MATA + '">WELCOME TO</text><text x="214" y="90" text-anchor="middle" ' + font + ' font-size="12" fill="' + MATA + '">FRAYSER</text>' +
      '<rect x="190" y="100" width="6" height="16" fill="#5a2418"/><rect x="232" y="100" width="6" height="16" fill="#5a2418"/>' +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="30" y="204" width="320" height="44" rx="3" fill="#111"/><text x="42" y="222" ' + font + ' font-size="13" fill="#fff">Frayser Blvd &amp; Millington Rd</text><text x="42" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Frayser · North Memphis</text>' +
      badge(246, 234, "MATA", MATA) + badge(302, 234, "11", RED),
      sky("gls1", "#2c4f86", "#ffb36b"));
  }

  /* 2. Westside Middle School: the fine arts wing, horns in the window */
  function glwestside() {
    const notes = [[150, 120, ""], [196, 112, " gl-n2"], [236, 124, " gl-n3"]].map(n => '<g class="gl-note' + n[2] + '"><ellipse cx="' + n[0] + '" cy="' + n[1] + '" rx="5" ry="3.6" fill="' + GOLD + '" transform="rotate(-20 ' + n[0] + ' ' + n[1] + ')"/><path d="M' + (n[0] + 4.5) + ' ' + n[1] + 'v-18l8 4" stroke="' + GOLD + '" stroke-width="1.8" fill="none"/></g>').join("");
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="40" height="30" fill="#9fd0ea" stroke="#e8e2d2" stroke-width="3"/><path d="M' + (x + 20) + ' ' + y + 'v30" stroke="#e8e2d2" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gls2)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#fff3c4" opacity=".9"/>' +
      brick(20, 92, 360, 108, "#a85a3c", "#8a4630") +
      '<rect x="20" y="84" width="360" height="10" fill="#e8e2d2"/>' +
      win(40, 112) + win(96, 112) + win(276, 112) + win(332, 112) +
      /* the band room window with horns */
      '<rect x="150" y="104" width="100" height="56" fill="#2a3a4c" stroke="#e8e2d2" stroke-width="3"/>' +
      '<path d="M166 150q6 -30 22 -34l12 -2l-4 10l-10 2q-10 4 -14 24z" fill="' + GOLD + '"/><circle cx="200" cy="113" r="7" fill="none" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M214 152v-30l20 -8v30" stroke="#d6d6d6" stroke-width="3" fill="none"/><circle cx="210" cy="152" r="5" fill="#d6d6d6"/><circle cx="230" cy="144" r="5" fill="#d6d6d6"/>' +
      notes +
      '<rect x="176" y="166" width="48" height="34" fill="#3a2a22"/><path d="M200 166v34" stroke="#2a1d14" stroke-width="2"/>' +
      '<rect x="40" y="56" width="160" height="22" rx="2" fill="#1d3557"/><text x="120" y="72" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">WESTSIDE MIDDLE</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#7aa35a"/><path d="M0 200h400" stroke="#5f8a45" stroke-width="3"/>' +
      '<rect x="186" y="200" width="28" height="60" fill="#c9c2b2"/>' +
      '<rect x="40" y="214" width="120" height="30" rx="4" fill="#111" opacity=".85"/><text x="100" y="234" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">FINE ARTS</text>',
      sky("gls2", "#4a8fd6", "#cfe8f7"));
  }

  /* 3. MLK College Prep: graduation day, caps in the air */
  function glmlk() {
    const cap = (x, y, cls, c) => '<g class="gl-cap ' + cls + '"><path d="M' + (x - 14) + ' ' + y + 'l14 -6l14 6l-14 6z" fill="#111"/><rect x="' + (x - 7) + '" y="' + (y + 2) + '" width="14" height="6" fill="#111"/><path d="M' + (x + 10) + ' ' + y + 'v10" stroke="' + c + '" stroke-width="1.6"/></g>';
    const grad = (x, c) => '<g class="gl-bob' + (x % 2 ? '' : ' gl-bob2') + '"><path d="M' + (x - 10) + ' 226v-26q10 -8 20 0v26z" fill="' + c + '"/><circle cx="' + x + '" cy="192" r="7" fill="#5a3a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gls3)"/>' +
      brick(60, 80, 280, 120, "#9c4f35", "#7f3d28") +
      '<rect x="150" y="56" width="100" height="28" fill="#e8e2d2"/><path d="M144 58l56 -26l56 26z" fill="#e8e2d2"/>' +
      [164, 186, 214, 236].map(x => '<rect x="' + (x - 4) + '" y="84" width="8" height="78" fill="#efe9db"/>').join("") +
      '<rect x="150" y="160" width="100" height="8" fill="#e8e2d2"/>' +
      [76, 112, 266, 302].map(x => '<rect x="' + x + '" y="100" width="22" height="30" fill="#9fd0ea" stroke="#e8e2d2" stroke-width="2"/><rect x="' + x + '" y="144" width="22" height="30" fill="#9fd0ea" stroke="#e8e2d2" stroke-width="2"/>').join("") +
      '<rect x="182" y="168" width="36" height="32" fill="#3a2a22"/>' +
      '<rect x="120" y="66" width="160" height="0" fill="none"/><text x="200" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#5a2418">MLK PREP</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6f9a52"/>' +
      grad(70, "#1d3557") + grad(110, "#7a1f2b") + grad(150, "#1d3557") + grad(250, "#7a1f2b") + grad(290, "#1d3557") + grad(330, "#7a1f2b") +
      cap(80, 60, "", GOLD) + cap(130, 40, "gl-c2", PINK) + cap(280, 44, "gl-c3", GOLD) + cap(330, 62, "gl-c4", PINK) +
      '<rect x="30" y="232" width="150" height="22" rx="4" fill="#111" opacity=".85"/><text x="105" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">CLASS OF FRAYSER</text>',
      sky("gls3", "#3d7cc9", "#bfe0f5"));
  }

  /* 4. FedExForum on Glo Bash night */
  function glforum() {
    const crowd = Array.from({ length: 26 }, (_, i) => '<g class="gl-bob' + (i % 2 ? ' gl-bob2' : '') + '"><circle cx="' + (8 + i * 15.5) + '" cy="' + (222 + (i % 3) * 3) + '" r="6" fill="#120a18"/><rect x="' + (2 + i * 15.5) + '" y="' + (228 + (i % 3) * 3) + '" width="12" height="30" rx="4" fill="#120a18"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#gls4)"/>' + stars(16) +
      '<g opacity=".55"><path class="gl-beam" d="M110 200l-24 -190h48z" fill="' + PINK + '" opacity=".35"/><path class="gl-beam gl-b2" d="M290 200l-24 -190h48z" fill="' + SKY + '" opacity=".35"/></g>' +
      /* the arena body: tan stone wings and the tall glass atrium */
      '<rect x="20" y="96" width="360" height="110" fill="#c9b796"/><rect x="20" y="96" width="360" height="8" fill="#a8977a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (30 + i * 12) + '" y="116" width="6" height="80" fill="#b3a07e"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (262 + i * 12) + '" y="116" width="6" height="80" fill="#b3a07e"/>').join("") +
      '<path d="M150 206V64l50 -16l50 16v142z" fill="#6fb6e0" opacity=".9"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (158 + i * 17) + ' 206V' + (60 - (i < 3 ? i * 4 : (5 - i) * 4)) + '" stroke="#d7eef8" stroke-width="1.4"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<path d="M150 ' + (80 + i * 18) + 'h100" stroke="#d7eef8" stroke-width="1.2"/>').join("") +
      '<rect class="gl-flk" x="160" y="140" width="80" height="30" rx="2" fill="#140a18"/><text class="gl-flk" x="200" y="161" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="16" fill="' + GOLD + '">GLO BASH</text>' +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3640"/>' + crowd,
      sky("gls4", "#0e0a2a", "#5a2a6a"));
  }

  /* 5. Dellwood Ave & Steele St, Frayser */
  function glcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gls5)"/>' + stars(18) +
      /* skyline far behind: 100 North Main with its round top */
      '<g fill="#2c2440"><rect x="40" y="96" width="30" height="30"/><rect x="74" y="84" width="22" height="42"/><rect x="232" y="90" width="26" height="36"/><rect x="262" y="100" width="40" height="26"/><rect x="306" y="92" width="22" height="34"/></g>' +
      '<rect x="140" y="40" width="50" height="86" fill="#3b3656"/><path d="M140 40q25 -26 50 0z" fill="#4a4470"/><rect x="163" y="10" width="4" height="18" fill="#4a4470"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect class="gl-flk' + (i % 2 ? ' gl-flk2' : '') + '" x="' + (146 + (i % 3) * 14) + '" y="' + (56 + Math.floor(i / 3) * 22) + '" width="8" height="5" fill="#ffe9a8"/>').join("") +
      '<rect x="0" y="124" width="400" height="100" fill="#7d3f30"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (132 + i * 8) + 'h400" stroke="#64301f" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (124 + i * 8) + 'v8" stroke="#64301f" stroke-width="1"/>').join("")).join("") +
      tag("BIG GLO", 20, 196, 46, GOLD, -6) + tag("FRAYSER", 36, 152, 18, PINK, -4) + tag("LET'S GO", 172, 216, 18, SKY, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="gl-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="' + PINK + '"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#a8236a"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(272, 94, 120, "Dellwood Ave") + sign(284, 124, 96, "Steele St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="gl-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="gl-sp"><circle cx="232" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="gl-sp gl-sp2"><circle cx="238" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("gls5", "#1a1438", "#d4608a"));
  }

  window.SCENES = { glstop: glstop, glwestside: glwestside, glmlk: glmlk, glforum: glforum, glcorner: glcorner };
})();
