/* The Underachievers game (NYC map, Brooklyn: Flatbush, where Issa Gold and AK grew up a few blocks apart).
   1. The B41 pulling up to the stop at Flatbush Av & Foster Av (every Flatbush subway stop is already on the map, so it's the bus).
   2. Mark Twain I.S. 239 in Coney Island, Issa's junior high ("the number one junior high in New York state"), skateboard rolling past.
   3. Leon M. Goldstein High School for the Sciences on the water at Kingsborough, Issa's high school, a sailboat out on the bay.
   4. The Cellar Door: the Flatbush basement where Beast Coast hung out (the debut album is "Cellar Door"), indigo glow, record spinning.
   5. Foster Av and Flatbush Av: green signs, the wall tagged UNDERACHIEVERS, Our Lady of Refuge's pale French Gothic tower behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes uaflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(5deg) scaleX(.94)}}.ua-flag{transform-box:fill-box;transform-origin:0% 50%;animation:uaflag 1.4s ease-in-out infinite}' +
    '@keyframes uaskate{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ua-skate{animation:uaskate 6s linear infinite}' +
    '@keyframes uabob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-4px) rotate(2deg)}}.ua-boat{transform-box:fill-box;transform-origin:50% 100%;animation:uabob 2.6s ease-in-out infinite}' +
    '@keyframes uadrift{from{transform:translateX(0)}to{transform:translateX(70px)}}.ua-drift{animation:uadrift 9s ease-in-out infinite alternate}' +
    '@keyframes uagull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,4px)}}.ua-gull{animation:uagull 10s linear infinite}.ua-gull2{animation-delay:-5s}' +
    '@keyframes uaspin{to{transform:rotate(360deg)}}.ua-spin{transform-box:fill-box;transform-origin:50% 50%;animation:uaspin 1.8s linear infinite}' +
    '@keyframes uapulse{0%,100%{opacity:.35}50%{opacity:1}}.ua-pulse{animation:uapulse 2.2s ease-in-out infinite}.ua-pulse2{animation-delay:-1.1s}' +
    '@keyframes uathump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.ua-thump{transform-box:fill-box;transform-origin:50% 50%;animation:uathump .5s ease-in-out infinite}' +
    '@keyframes uablink{0%,45%{opacity:1}50%,95%{opacity:.15}100%{opacity:1}}.ua-blink{animation:uablink 3s step-end infinite}.ua-blink2{animation-delay:-1.5s}' +
    '@keyframes uabird{0%{transform:translate(0,0)}50%{transform:translate(160px,-20px)}100%{transform:translate(320px,0)}}.ua-bird{animation:uabird 8s linear infinite}.ua-bird2{animation-delay:-3s}' +
    '@keyframes uawave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.ua-wave{animation:uawave 3s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#ffcf4d", INDIGO = "#5b3fd1", BUSBLUE = "#0039a6";
  /* MTA bus route pill */
  const pill = (x, y, label) => '<rect x="' + x + '" y="' + (y - 11) + '" width="40" height="22" rx="11" fill="' + BUSBLUE + '"/><text x="' + (x + 20) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + label + '</text>';

  /* 1. B41 stop at Flatbush Av & Foster Av: dusk, two-storey taxpayer shops with awnings, the stop sign pole, the black stop sign, the bus pulling in */
  function busstop() {
    const shops = [[0, "#8a4b38", "#d9483b"], [80, "#a0673f", "#2f8f5b"], [160, "#7b5a48", "#e0a43a"], [240, "#94523f", "#3a6ab8"], [320, "#86604a", "#c9406e"]].map(([x, wall, awn]) =>
      '<rect x="' + x + '" y="62" width="80" height="104" fill="' + wall + '"/>' +
      '<rect x="' + (x + 10) + '" y="72" width="18" height="22" fill="#f6dc8e" opacity=".85"/><rect x="' + (x + 52) + '" y="72" width="18" height="22" fill="#f6dc8e" opacity=".55"/>' +
      '<rect x="' + x + '" y="60" width="80" height="4" fill="#3d2a22"/>' +
      '<path d="M' + (x + 4) + ' 110h72l-6 14h-60z" fill="' + awn + '"/>' +
      '<rect x="' + (x + 8) + '" y="124" width="64" height="42" fill="#f3e2b0" opacity=".75"/><rect x="' + (x + 38) + '" y="124" width="4" height="42" fill="#3d2a22"/>').join("");
    let win = "";
    for (let x = 64; x < 290; x += 30) win += '<rect x="' + x + '" y="148" width="22" height="22" rx="2" fill="#203048" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#uasky1)"/>' + stars(8) + shops +
      /* streetlight */
      '<rect x="22" y="40" width="4" height="150" fill="#3c4048"/><path d="M24 42q14-10 30-4" stroke="#3c4048" stroke-width="4" fill="none"/><ellipse class="ua-pulse" cx="56" cy="42" rx="8" ry="4" fill="#ffe7a0"/>' +
      /* sidewalk + road */
      '<rect x="0" y="166" width="400" height="16" fill="#9a958c"/><rect x="0" y="182" width="400" height="78" fill="#2e2f33"/>' +
      '<rect x="0" y="182" width="400" height="3" fill="#c9c3b6"/>' +
      [20, 110, 200, 290, 380].map(x => '<rect x="' + x + '" y="236" width="44" height="4" fill="#e7d27a"/>').join("") +
      /* the bus (slides in) */
      '<g class="anim-train">' +
        '<rect x="40" y="128" width="270" height="80" rx="10" fill="#f2f4f7" stroke="#8a9099" stroke-width="2"/>' +
        '<rect x="40" y="186" width="270" height="8" fill="' + BUSBLUE + '"/>' + win +
        '<rect x="282" y="138" width="24" height="44" rx="3" fill="#1b2638"/>' +
        '<rect x="54" y="134" width="226" height="10" rx="2" fill="#111"/><text x="167" y="142.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb02e">B41  FLATBUSH AV</text>' +
        '<circle cx="90" cy="208" r="13" fill="#1a1a1a"/><circle cx="90" cy="208" r="5" fill="#777"/><circle cx="262" cy="208" r="13" fill="#1a1a1a"/><circle cx="262" cy="208" r="5" fill="#777"/>' +
        '<circle cx="304" cy="192" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      /* stop pole + blue bus sign */
      '<rect x="350" y="70" width="4" height="112" fill="#6b7078"/>' +
      '<rect x="330" y="66" width="44" height="40" rx="3" fill="' + BUSBLUE + '"/>' + txt("BUS", 352, 81, 9, "#fff") + txt("STOP", 352, 92, 9, "#fff") +
      '<rect x="336" y="96" width="32" height="8" rx="4" fill="#fff"/><text x="352" y="102.5" text-anchor="middle" ' + font + ' font-size="7" fill="' + BUSBLUE + '">B41</text>' +
      person(372, 140, "#1d1d22") +
      /* black stop sign */
      '<rect x="20" y="10" width="300" height="34" rx="3" fill="#111"/><rect x="20" y="10" width="300" height="3" fill="#fff"/>' +
      '<text x="32" y="33" ' + font + ' font-size="14" fill="#fff">Flatbush Av &amp; Foster Av</text>' + pill(268, 27, "B41"),
      sky("uasky1", "#2a2350", "#d98a5a"));
  }

  /* 2. Mark Twain I.S. 239, Coney Island: tan brick school, the flag waving, a skateboard rolling down Neptune Av, gulls */
  function twain() {
    let brick = "";
    for (let y = 80; y < 180; y += 7) for (let x = (y / 7) % 2 ? 40 : 48; x < 360; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="5" fill="#b98f5e" opacity=".55"/>';
    let wins = "";
    for (let r = 0; r < 3; r++) for (let x = 56; x < 350; x += 32) if (!(r === 2 && x > 170 && x < 230)) wins += '<rect x="' + x + '" y="' + (90 + r * 30) + '" width="20" height="20" fill="#9cc6e0" stroke="#efe6d2" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#uasky2)"/>' +
      '<g class="ua-gull"><path d="M20 30q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<g class="ua-gull ua-gull2"><path d="M10 50q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* school */
      '<rect x="40" y="76" width="320" height="108" fill="#d3a979"/>' + brick + wins +
      '<rect x="36" y="68" width="328" height="10" fill="#efe6d2"/>' +
      '<rect x="176" y="150" width="48" height="34" fill="#3b2a20"/><rect x="198" y="150" width="4" height="34" fill="#d3a979"/>' +
      '<rect x="140" y="124" width="120" height="20" fill="#efe6d2"/>' + txt("MARK TWAIN", 200, 139, 13, "#2b2b6e", 'letter-spacing="2"') +
      txt("INTERMEDIATE SCHOOL", 200, 64, 9, "#2b2b6e", 'letter-spacing="2"') +
      /* flagpole */
      '<rect x="376" y="30" width="3" height="154" fill="#c9ced6"/>' +
      '<g class="ua-flag"><rect x="379" y="32" width="20" height="13" fill="#b22234"/><rect x="379" y="34" width="20" height="2" fill="#fff"/><rect x="379" y="38" width="20" height="2" fill="#fff"/><rect x="379" y="42" width="20" height="2" fill="#fff"/><rect x="379" y="32" width="9" height="7" fill="#3c3b6e"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="184" width="400" height="18" fill="#bdb6a8"/><rect x="0" y="202" width="400" height="58" fill="#3a3b40"/>' +
      '<rect x="0" y="184" width="400" height="2" fill="#8e877a"/>' +
      /* skateboard */
      '<g class="ua-skate"><rect x="0" y="176" width="34" height="5" rx="2.5" fill="' + INDIGO + '"/><circle cx="7" cy="183" r="2.5" fill="' + GOLD + '"/><circle cx="27" cy="183" r="2.5" fill="' + GOLD + '"/></g>' +
      txt("CONEY ISLAND", 200, 236, 11, "#f3ead6", 'letter-spacing="4"'),
      sky("uasky2", "#5fb3e6", "#d8f0fb"));
  }

  /* 3. Leon M. Goldstein High School for the Sciences, Kingsborough campus on the water: modern school, sea wall, sailboat on the bay */
  function goldstein() {
    let wins = "";
    for (let r = 0; r < 4; r++) for (let x = 92; x < 300; x += 22) wins += '<rect x="' + x + '" y="' + (60 + r * 22) + '" width="16" height="14" fill="' + (r % 2 ? "#8fc6d9" : "#a8d6e6") + '"/>';
    let waves = "";
    for (let x = 0; x < 460; x += 20) waves += '<path d="M' + x + ' 0q5-4 10 0t10 0" stroke="#d6f1fb" stroke-width="1.5" fill="none" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#uasky3)"/>' +
      '<circle cx="336" cy="44" r="18" fill="#ffe08a"/>' +
      '<g class="ua-gull"><path d="M30 34q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* lawn + school */
      '<rect x="0" y="150" width="400" height="20" fill="#5f9a4a"/>' +
      '<rect x="80" y="50" width="230" height="102" fill="#e9e3d6"/>' + wins +
      '<rect x="80" y="46" width="230" height="6" fill="#4f5a66"/>' +
      '<rect x="40" y="96" width="44" height="56" fill="#c46a45"/><rect x="306" y="80" width="54" height="72" fill="#c46a45"/>' +
      [48, 62].map(x => '<rect x="' + x + '" y="106" width="10" height="12" fill="#a8d6e6"/>').join("") +
      [314, 330, 346].map(x => '<rect x="' + x + '" y="92" width="10" height="12" fill="#a8d6e6"/>').join("") +
      '<rect x="160" y="132" width="70" height="20" fill="#2f3b48"/>' +
      '<rect x="112" y="8" width="176" height="22" rx="3" fill="#123a5c"/>' + txt("LEON M. GOLDSTEIN H.S.", 200, 23, 10, "#fff", 'letter-spacing="1"') +
      txt("FOR THE SCIENCES", 200, 40, 7, "#123a5c", 'letter-spacing="2"') +
      /* sea wall + water */
      '<rect x="0" y="170" width="400" height="8" fill="#a39d90"/><rect x="0" y="178" width="400" height="82" fill="#2f7fb0"/>' +
      '<g transform="translate(0,196)"><g class="ua-wave">' + waves + '</g></g><g transform="translate(-10,222)"><g class="ua-wave">' + waves + '</g></g>' +
      /* sailboat */
      '<g class="ua-drift"><g class="ua-boat"><path d="M40 214h52l-8 10h-36z" fill="#f4f1ea"/><rect x="64" y="176" width="2" height="38" fill="#555"/><path d="M66 178l20 32h-20z" fill="#fff"/><path d="M64 182l-16 28h16z" fill="' + GOLD + '"/></g></g>' +
      txt("KINGSBOROUGH", 300, 246, 10, "#d6f1fb", 'letter-spacing="4"'),
      sky("uasky3", "#6cc0ea", "#e3f4fb"));
  }

  /* 4. The Cellar Door: a Flatbush basement, light down the stairs, indigo mural with the third eye, crates, a spinning record, speakers thumping */
  function cellar() {
    let block = "";
    for (let y = 0; y < 190; y += 14) for (let x = (y / 14) % 2 ? 0 : 20; x < 400; x += 40) block += '<rect x="' + x + '" y="' + y + '" width="38" height="12" fill="#2a2440"/>';
    const crate = (x, y) => '<rect x="' + x + '" y="' + y + '" width="40" height="30" fill="#7a5a34" stroke="#4d3820" stroke-width="2"/>' + [6, 14, 22, 30].map(d => '<rect x="' + (x + d) + '" y="' + (y - 8) + '" width="5" height="14" fill="' + (d % 12 ? "#1d1d1d" : "#2b2b6e") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1530"/>' + block +
      /* stairs + door light */
      '<path d="M0 30h70v160H0z" fill="#0f0c1d"/><path d="M8 34h54v40H8z" fill="#ffd98a" class="ua-pulse"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (6 + i * 10) + '" y="' + (80 + i * 18) + '" width="' + (70 - i * 10) + '" height="6" fill="#4a3f63"/>').join("") +
      /* mural */
      '<rect x="110" y="24" width="180" height="104" rx="6" fill="#2b1f6e"/>' +
      '<circle cx="200" cy="72" r="38" fill="none" stroke="' + GOLD + '" stroke-width="2" opacity=".6"/>' +
      [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => '<rect class="ua-pulse' + (a % 60 ? " ua-pulse2" : "") + '" x="199" y="20" width="2" height="12" fill="' + GOLD + '" transform="rotate(' + a + ' 200 72)"/>').join("") +
      '<path d="M168 72q32-26 64 0q-32 26-64 0z" fill="#efe6ff"/><circle cx="200" cy="72" r="11" fill="' + INDIGO + '"/><circle cx="200" cy="72" r="5" fill="#0d0a1f"/><circle cx="203" cy="69" r="2" fill="#fff"/>' +
      tag("INDIGOISM", 126, 122, 16, GOLD, -4) +
      /* string lights */
      '<path d="M80 10q80 16 160 0t160 0" stroke="#555" stroke-width="1" fill="none"/>' +
      [100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => '<circle class="ua-pulse' + (i % 2 ? " ua-pulse2" : "") + '" cx="' + x + '" cy="' + (i % 2 ? 14 : 16) + '" r="3" fill="' + (i % 3 ? "#b39bff" : GOLD) + '"/>').join("") +
      /* floor */
      '<rect x="0" y="190" width="400" height="70" fill="#2c2a33"/><rect x="0" y="190" width="400" height="3" fill="#120f1d"/>' +
      /* speakers */
      [306, 356].map(x => '<rect x="' + x + '" y="120" width="40" height="72" rx="3" fill="#111"/><circle class="ua-thump" cx="' + (x + 20) + '" cy="168" r="13" fill="#2b2b2b" stroke="#555"/><circle cx="' + (x + 20) + '" cy="136" r="7" fill="#2b2b2b" stroke="#555"/>').join("") +
      /* table + turntable */
      '<rect x="150" y="160" width="130" height="10" fill="#5b4a3a"/><rect x="160" y="170" width="6" height="22" fill="#5b4a3a"/><rect x="264" y="170" width="6" height="22" fill="#5b4a3a"/>' +
      '<rect x="168" y="140" width="94" height="20" rx="2" fill="#2a2a30"/>' +
      '<g class="ua-spin"><circle cx="206" cy="136" r="20" fill="#111"/><circle cx="206" cy="136" r="14" fill="none" stroke="#2a2a2a"/><circle cx="206" cy="136" r="6" fill="' + GOLD + '"/><rect x="204" y="118" width="4" height="10" fill="#333"/></g>' +
      '<path d="M252 124l-16 14" stroke="#ccc" stroke-width="2"/>' +
      crate(86, 200) + crate(132, 206) +
      txt("THE CELLAR DOOR", 290, 236, 13, "#b39bff", 'letter-spacing="3"'),
      "");
  }

  /* 5. Foster Av and Flatbush Av: green street signs, the UNDERACHIEVERS wall, Our Lady of Refuge's pale French Gothic tower behind, pigeons */
  function corner() {
    let brick = "";
    for (let y = 120; y < 214; y += 8) for (let x = (y / 8) % 2 ? 150 : 142; x < 400; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#6d3428"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#uasky5)"/>' + stars(12) +
      /* Our Lady of Refuge: pale limestone French Gothic, tall pointed tower, rose window */
      '<g fill="#d9d2c1">' +
        '<rect x="210" y="70" width="120" height="70"/><path d="M210 70l60-34l60 34z"/>' +
        '<rect x="168" y="40" width="40" height="100"/><path d="M168 40l20-40l20 40z"/>' +
        '<rect x="164" y="40" width="6" height="16"/><rect x="206" y="40" width="6" height="16"/>' +
      '</g>' +
      '<path d="M180 96v-16q8-12 16 0v16z" fill="#4b4560"/><path d="M180 70v-10q8-8 16 0v10z" fill="#4b4560"/>' +
      '<circle cx="270" cy="88" r="15" fill="#4b3f7a" stroke="#efe9db" stroke-width="2"/><path d="M270 73v30M255 88h30M259 77l22 22M281 77l-22 22" stroke="#d8c46a" stroke-width="1.2"/>' +
      [226, 306].map(x => '<path d="M' + x + ' 136v-26q6-10 12 0v26z" fill="#4b4560"/>').join("") +
      '<circle class="ua-blink" cx="188" cy="64" r="2" fill="#ffd98a"/>' +
      /* pigeons */
      '<g class="ua-bird"><path d="M10 54q5-5 10 0q5-5 10 0" stroke="#d0d0d8" stroke-width="2" fill="none"/></g>' +
      '<g class="ua-bird ua-bird2"><path d="M0 70q4-4 8 0q4-4 8 0" stroke="#d0d0d8" stroke-width="2" fill="none"/></g>' +
      /* wall */
      '<rect x="142" y="116" width="258" height="98" fill="#7f3d2f"/>' + brick +
      '<rect x="142" y="112" width="258" height="6" fill="#3a1d16"/>' +
      tag("UNDERACHIEVERS", 152, 176, 22, GOLD, -5) +
      tag("UA", 330, 206, 22, "#b39bff", -8) +
      /* sidewalk + street */
      '<rect x="0" y="214" width="400" height="14" fill="#9a958c"/><rect x="0" y="228" width="400" height="32" fill="#2e2f33"/>' +
      /* pole with green signs */
      '<rect x="60" y="60" width="5" height="156" fill="#4a5a4f"/>' +
      '<rect x="14" y="60" width="98" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Foster Av", 63, 76, 13, "#fff") +
      '<rect x="22" y="86" width="82" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5" transform="skewY(-4)"/>' +
      '<text x="63" y="106" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" transform="skewY(-4)">Flatbush Av</text>' +
      /* walk signal */
      '<rect x="84" y="128" width="20" height="26" rx="2" fill="#222"/><rect class="ua-blink ua-blink2" x="88" y="132" width="12" height="8" fill="#ff7a1a"/><rect x="88" y="142" width="12" height="8" fill="#f3f3f3" opacity=".25"/>' +
      txt("FLATBUSH", 200, 248, 12, "#f3ead6", 'letter-spacing="6"'),
      sky("uasky5", "#140f30", "#5a3d8a"));
  }

  window.SCENES = { busstop: busstop, twain: twain, goldstein: goldstein, cellar: cellar, corner: corner };
})();
