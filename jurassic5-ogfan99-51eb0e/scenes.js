/* jurassic5 scenes (Regions tab: Los Angeles + SoCal; South Central LA). CSS classes prefixed j5- (the page's own anim-train is kept).
   1 Expo/Vermont station, Metro E Line: the street-level platform down the middle of Exposition Blvd, the gold E Line train pulling in, palms.
   2 Manual Arts High School on Vermont Ave, South Central: where Akil and Zaakir's Rebels of Rhythm formed. Cream building, red tile, the flag.
   3 John Marshall High School, Los Feliz / Silver Lake: where Chali 2na and Marc 7 met. The pale Collegiate Gothic castle with its center tower.
   4 Silver Lake Reservoir and the Rec Center: Unity Committee's home turf, where Cut Chemist met Chali at a 1987 party. Water, hills, turntables.
   5 S Vermont Ave and W 41st St, by Manual Arts: green signs, J5 tagged on the wall, the downtown skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes j5flag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-8deg)}}.j5-flag{transform-box:fill-box;transform-origin:0 50%;animation:j5flag 1.5s ease-in-out infinite}' +
    '@keyframes j5sway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.j5-sway{transform-box:fill-box;transform-origin:50% 100%;animation:j5sway 3.4s ease-in-out infinite}' +
    '@keyframes j5cloud{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.j5-cloud{animation:j5cloud 26s linear infinite}.j5-c2{animation-delay:-13s}' +
    '@keyframes j5car{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.j5-car{animation:j5car 6s linear infinite}.j5-car2{animation-delay:-3s}' +
    '@keyframes j5spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.j5-spin{transform-box:fill-box;transform-origin:50% 50%;animation:j5spin 1.8s linear infinite}' +
    '@keyframes j5rip{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(10px);opacity:1}}.j5-rip{animation:j5rip 3s ease-in-out infinite}.j5-r2{animation-delay:-1.5s}' +
    '@keyframes j5note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-34px);opacity:0}}.j5-note{animation:j5note 2.4s ease-out infinite}.j5-n2{animation-delay:-1.2s}' +
    '@keyframes j5glow{0%,100%{opacity:.35}50%{opacity:1}}.j5-glow{animation:j5glow 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 11) + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + (r || 11) / 2) + '" text-anchor="middle" ' + font + ' font-size="' + Math.round((r || 11) * 1.35) + '" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="j5-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const ELINE = "#fdb913", GOLD = "#f2b632", ORANGE = "#e2572c", TEAL = "#5bb5c9";

  /* 1. Expo/Vermont, Metro E Line, street level in the middle of Exposition Blvd */
  function j5station() {
    let win = ""; for (let x = 36; x < 300; x += 32) win += '<rect x="' + x + '" y="112" width="24" height="24" rx="3" fill="#24313d"/>';
    const train = '<g class="anim-train"><rect x="16" y="100" width="300" height="70" rx="12" fill="#d6d9dc" stroke="#7d848c" stroke-width="2"/>' + win +
      '<rect x="16" y="144" width="300" height="10" fill="' + ELINE + '"/><rect x="16" y="154" width="300" height="3" fill="#333"/>' +
      '<rect x="160" y="104" width="22" height="52" rx="2" fill="#9aa1a8"/><path d="M171 104v52" stroke="#555" stroke-width="1.5"/>' +
      '<path d="M300 100q16 0 16 24v34h-16z" fill="#c7cbcf"/><rect x="300" y="110" width="12" height="24" rx="3" fill="#24313d"/><circle cx="306" cy="160" r="4" fill="#fff6c2"/>' +
      bullet(250, 127, "E", ELINE, 10) +
      '<rect x="40" y="170" width="40" height="8" fill="#333"/><rect x="240" y="170" width="40" height="8" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#j5s1)"/>' + cloud(60, 34, 1, "j5-cloud") + cloud(250, 22, 0.8, "j5-cloud j5-c2") +
      /* Exposition Park and USC far behind: low brick buildings, the dome of the old museum */
      '<path d="M0 92h400v-16h-30v-10h-40v10h-36v-8h-50v8h-44v-14h-24v14h-50v-10h-40v10h-36v-6h-50z" fill="#b6866a"/>' +
      '<path d="M120 70a22 22 0 0 1 44 0z" fill="#d9c7a8"/><rect x="138" y="44" width="8" height="6" fill="#d9c7a8"/>' +
      palm(30, 96, 70) + palm(370, 96, 80) + palm(330, 96, 56, "#3b6b3d") +
      /* overhead catenary */
      '<path d="M0 86h400" stroke="#3c3c3c" stroke-width="1.5"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="80" width="4" height="96" fill="#5a5a5a"/>').join("") +
      '<rect x="0" y="92" width="400" height="84" fill="#9a9a96"/>' +
      '<rect x="0" y="170" width="400" height="8" fill="#6a6a6a"/>' + train +
      '<rect x="0" y="178" width="400" height="8" fill="#eab308"/><rect x="0" y="186" width="400" height="24" fill="#c9c2b4"/>' +
      /* station name sign */
      '<rect x="96" y="190" width="208" height="18" rx="2" fill="#111"/><text x="186" y="203" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">Expo / Vermont</text>' +
      '<circle cx="280" cy="199" r="7.5" fill="' + ELINE + '"/><text x="280" y="203" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">E</text>' +
      /* Exposition Blvd traffic in the foreground */
      '<rect x="0" y="210" width="400" height="50" fill="#4a4c52"/><path d="M0 234h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 214, "#e8e2d2", "j5-car") + car(0, 214, ORANGE, "j5-car j5-car2"),
      sky("j5s1", "#8fc3ea", "#f3e2c0"));
  }

  /* 2. Manual Arts High School, Vermont Ave */
  function j5manual() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let x = 46; x < 360; x += 26) if (x < 172 || x > 226) win += '<rect x="' + x + '" y="' + (106 + r * 26) + '" width="16" height="18" fill="#2c3a4a" stroke="#efe6d2" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#j5s2)"/>' + cloud(90, 40, 1, "j5-cloud") + cloud(300, 28, 0.7, "j5-cloud j5-c2") +
      palm(384, 190, 104) +
      /* main building */
      '<rect x="36" y="92" width="328" height="98" fill="#e9dcc0"/><rect x="30" y="86" width="340" height="8" fill="#b4462e"/>' +
      '<path d="M160 92v-34h80v34z" fill="#efe4cc"/><path d="M152 60l48 -22l48 22z" fill="#b4462e"/>' + win +
      /* entrance */
      '<rect x="172" y="132" width="56" height="58" fill="#cdbb98"/><path d="M178 190v-36a22 22 0 0 1 44 0v36z" fill="#3a2a1f"/><path d="M200 190v-58" stroke="#cdbb98" stroke-width="2"/>' +
      '<rect x="164" y="64" width="72" height="20" fill="#d9c9a6"/><text x="200" y="78" text-anchor="middle" ' + font + ' font-size="9.5" fill="#4a3826">MANUAL ARTS</text>' +
      '<text x="200" y="110" text-anchor="middle" ' + font + ' font-size="7" fill="#6a5238">HIGH SCHOOL</text>' +
      /* flag */
      '<rect x="198" y="8" width="3" height="32" fill="#888"/><g class="j5-flag"><rect x="201" y="8" width="24" height="14" fill="#b22234"/><rect x="201" y="8" width="11" height="8" fill="#3c3b6e"/><path d="M212 12h13M201 18h24" stroke="#fff" stroke-width="1.6"/></g>' +
      /* banner for the school's teams */
      '<rect x="54" y="168" width="84" height="16" fill="#7a1f2b"/><text x="96" y="180" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">TOILERS</text>' +
      '<rect x="244" y="168" width="112" height="16" fill="#1c2a44"/><text x="300" y="179.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">REBELS OF RHYTHM</text>' +
      '<rect x="0" y="190" width="400" height="14" fill="#cfc6b4"/><rect x="0" y="204" width="400" height="56" fill="#4a4c52"/><path d="M0 230h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 210, "#2f6fd6", "j5-car") + car(0, 210, "#e8e2d2", "j5-car j5-car2") +
      '<rect x="44" y="120" width="5" height="84" fill="#7d8288"/>' + sign(8, 116, 80, "S Vermont Av", 10),
      sky("j5s2", "#86bde8", "#f2e6cc"));
  }

  /* 3. John Marshall High School, Los Feliz: the pale Gothic castle */
  function j5marshall() {
    let win = "";
    for (let x = 40; x < 370; x += 22) if (x < 166 || x > 230) { win += '<path d="M' + x + ' 150v-20a6 6 0 0 1 12 0v20z" fill="#33404d"/><path d="M' + x + ' 180v-18a6 6 0 0 1 12 0v18z" fill="#33404d"/>'; }
    const merl = (x0, x1, y) => { let s = ""; for (let x = x0; x < x1; x += 10) s += '<rect x="' + x + '" y="' + (y - 6) + '" width="6" height="6" fill="#d8d2c4"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#j5s3)"/>' + cloud(70, 36, 0.9, "j5-cloud") + cloud(260, 24, 1, "j5-cloud j5-c2") +
      /* Griffith Park hills behind */
      '<path d="M0 120q60 -40 130 -30t140 -20t130 30v40H0z" fill="#8a9a6a"/>' +
      /* wings */
      '<rect x="30" y="118" width="350" height="72" fill="#d8d2c4"/>' + merl(30, 380, 118) + win +
      /* center tower */
      '<rect x="164" y="62" width="72" height="128" fill="#e2dccf"/>' + merl(164, 236, 62) +
      '<rect x="156" y="70" width="10" height="120" fill="#ccc5b6"/><rect x="234" y="70" width="10" height="120" fill="#ccc5b6"/>' +
      '<path d="M156 70l5 -14l5 14zM234 70l5 -14l5 14z" fill="#ccc5b6"/>' +
      '<path d="M182 112v-22a18 18 0 0 1 36 0v22z" fill="#33404d"/><path d="M200 112v-40M182 98h36" stroke="#e2dccf" stroke-width="2"/>' +
      '<path d="M180 190v-40a20 20 0 0 1 40 0v40z" fill="#4a3424"/>' +
      '<text x="200" y="128" text-anchor="middle" ' + font + ' font-size="8" fill="#6a5e48">JOHN MARSHALL</text>' +
      /* a few trees, lawn */
      '<rect x="0" y="190" width="400" height="70" fill="#5c8a3e"/><rect x="0" y="226" width="400" height="34" fill="#bdb5a4"/>' +
      [40, 120, 300, 370].map((x, i) => '<g class="j5-sway"><rect x="' + (x - 3) + '" y="176" width="6" height="22" fill="#4a3424"/><circle cx="' + x + '" cy="170" r="' + (16 + i % 2 * 4) + '" fill="#3f6e34"/></g>').join("") +
      tag("CHALI 2NA + MARC 7", 120, 248, 15, GOLD, -3),
      sky("j5s3", "#9cc9ec", "#f4e7cf"));
  }

  /* 4. Silver Lake Reservoir and the Rec Center */
  function j5silver() {
    return svg(
      '<rect width="400" height="260" fill="url(#j5s4)"/>' + cloud(100, 30, 1, "j5-cloud") +
      /* Silver Lake hills with houses */
      '<path d="M0 118q50 -50 110 -40t90 -10t110 20t90 0v50H0z" fill="#7d8c5e"/>' +
      [[30, 104], [62, 92], [96, 86], [150, 84], [190, 76], [236, 82], [276, 88], [318, 90], [360, 96]].map((p, i) => '<rect x="' + p[0] + '" y="' + p[1] + '" width="14" height="10" fill="' + ["#f1ece0", "#e6b98a", "#d8e3ea", "#f3d9a4"][i % 4] + '"/><path d="M' + (p[0] - 2) + ' ' + p[1] + 'l9 -6l9 6z" fill="#a0523a"/>').join("") +
      palm(48, 128, 50) + palm(340, 128, 60) +
      /* the reservoir */
      '<rect x="0" y="128" width="400" height="66" fill="#4f8fb3"/><rect x="0" y="126" width="400" height="4" fill="#c9c2b0"/>' +
      '<g class="j5-rip"><path d="M30 146h40M150 160h50M280 150h44M90 176h36M230 182h50" stroke="#cfe6f2" stroke-width="2"/></g>' +
      '<g class="j5-rip j5-r2"><path d="M60 168h30M190 140h30M320 170h40" stroke="#e8f4fa" stroke-width="1.5"/></g>' +
      /* chain-link fence */
      '<rect x="0" y="194" width="400" height="66" fill="#6d9a45"/>' +
      '<path d="M0 196h400" stroke="#888" stroke-width="2"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 196v14" stroke="#888" stroke-width="1"/>').join("") +
      /* the 1987 rec center party: folding table, two turntables */
      '<rect x="128" y="206" width="144" height="10" fill="#8a6a44"/><rect x="134" y="216" width="6" height="30" fill="#5a4630"/><rect x="260" y="216" width="6" height="30" fill="#5a4630"/>' +
      '<rect x="138" y="192" width="54" height="14" rx="2" fill="#2a2a2a"/><rect x="208" y="192" width="54" height="14" rx="2" fill="#2a2a2a"/>' +
      '<g class="j5-spin"><ellipse cx="160" cy="196" rx="18" ry="5" fill="#111"/><ellipse cx="160" cy="196" rx="5" ry="1.6" fill="' + ORANGE + '"/><path d="M146 196h8" stroke="#444"/></g>' +
      '<g class="j5-spin"><ellipse cx="230" cy="196" rx="18" ry="5" fill="#111"/><ellipse cx="230" cy="196" rx="5" ry="1.6" fill="' + GOLD + '"/><path d="M236 196h8" stroke="#444"/></g>' +
      '<rect x="194" y="194" width="12" height="10" fill="#555"/>' +
      '<text x="168" y="186" class="j5-note" ' + font + ' font-size="14" fill="' + GOLD + '">&#9835;</text><text x="226" y="186" class="j5-note j5-n2" ' + font + ' font-size="14" fill="' + TEAL + '">&#9834;</text>' +
      tag("UNITY COMMITTEE", 104, 252, 17, TEAL, -3),
      sky("j5s4", "#a7d2ef", "#f6ead2"));
  }

  /* 5. S Vermont Ave & W 41st St, downtown behind */
  function j5corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#j5s5)"/>' +
      /* downtown LA skyline */
      '<path d="M60 128v-40h18v40zM84 128v-58h22v58zM112 128v-30h16v30zM228 128v-36h20v36zM254 128v-50h16v50zM300 128v-26h20v26z" fill="#7e8aa4"/>' +
      '<path d="M140 128v-82l8 -10l8 6l8 -6l6 10v82z" fill="#9aa6c0"/><path d="M146 40l2 -16l2 16z" fill="#9aa6c0"/>' +
      '<path d="M182 128v-70h26v70z" fill="#8894ae"/><path d="M182 58l13 -12l13 12z" fill="#8894ae"/>' +
      '<rect x="0" y="128" width="400" height="10" fill="#a69a86"/>' +
      palm(30, 150, 104) + palm(214, 150, 92, "#3d6b40") +
      /* the wall */
      '<rect x="50" y="138" width="300" height="80" fill="#e8dcc2"/><rect x="50" y="138" width="300" height="6" fill="#c7b591"/>' +
      tag("J5", 74, 200, 54, GOLD, -6) + tag("JURASSIC", 160, 178, 24, ORANGE, -4) + tag("REBELS OF RHYTHM", 160, 206, 14, TEAL, -3) +
      '<g class="j5-glow"><circle cx="330" cy="160" r="3" fill="' + GOLD + '"/><circle cx="66" cy="152" r="2.5" fill="' + TEAL + '"/></g>' +
      '<rect x="0" y="218" width="400" height="12" fill="#c9c1ae"/><rect x="0" y="230" width="400" height="30" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="356" y="36" width="5" height="182" fill="#7d8288"/>' + sign(232, 38, 150, "S Vermont Av", 13) + sign(232, 64, 150, "W 41st St", 13),
      sky("j5s5", "#86b9e6", "#f2e4c8"));
  }

  window.SCENES = { j5station, j5manual, j5marshall, j5silver, j5corner };
})();
