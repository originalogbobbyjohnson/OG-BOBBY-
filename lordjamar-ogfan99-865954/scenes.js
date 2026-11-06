/* Lord Jamar game (Westchester: New Rochelle; born in the Bronx). Brand Nubian's Lord Jamar, solo on "The 5% Album".
   0 a Bee-Line 7 bus pulling up at Lincoln Av & Webster Av ("University of the Corner, Lincoln Avenue" - The Corner, The Streets),
   1 the Hayden Planetarium sphere in its glass cube at night ("Deep Space"), 2 the columned courthouse steps at 60 Centre St with film lights
   (his acting run on Law & Order and SVU), 3 the handball wall in the Lincoln Av park chalked with Supreme Mathematics,
   4 Lincoln Av & Memorial Hwy with the New England Thruway overpass behind. 400 x 260 SVGs. Classes prefixed lj-. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ljcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lj-car{animation:ljcar 6s linear infinite}.lj-car2{animation-delay:-3s}' +
    '@keyframes ljcarb{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.lj-carb{animation:ljcarb 5s linear infinite}.lj-carb2{animation-delay:-2.5s}' +
    '@keyframes ljtw{0%,100%{opacity:.2}50%{opacity:1}}.lj-tw{animation:ljtw 2s ease-in-out infinite}.lj-tw2{animation-delay:-.7s}.lj-tw3{animation-delay:-1.4s}' +
    '@keyframes ljorb{to{transform:rotate(360deg)}}.lj-orb{transform-box:view-box;transform-origin:200px 118px;animation:ljorb 9s linear infinite}.lj-orb2{animation-duration:14s;animation-direction:reverse}' +
    '@keyframes ljbeam{0%,100%{opacity:.15}50%{opacity:.45}}.lj-beam{animation:ljbeam 2.6s ease-in-out infinite}.lj-beam2{animation-delay:-1.3s}' +
    '@keyframes ljrec{0%,49%{opacity:1}50%,100%{opacity:.15}}.lj-rec{animation:ljrec 1s steps(1) infinite}' +
    '@keyframes ljball{0%{transform:translate(0,0)}50%{transform:translate(120px,-30px)}100%{transform:translate(0,0)}}.lj-ball{animation:ljball 1.8s ease-in-out infinite}' +
    '@keyframes ljchalk{0%,100%{opacity:.55}50%{opacity:1}}.lj-ch{animation:ljchalk 3s ease-in-out infinite}.lj-ch2{animation-delay:-1s}.lj-ch3{animation-delay:-2s}' +
    '@keyframes ljflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.lj-flk{animation:ljflk 2.4s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const stars = (n, h) => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="lj-tw lj-tw' + (i % 3 + 1) + '" cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % (h || 70)) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const BEE = "#003a70", CYAN = "#7ee8fa", GOLD = "#ffd166", CREAM = "#f4ead8", VIOLET = "#9b5de5";
  const house = (x, y, w, col, roof) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (180 - y) + '" fill="' + col + '"/><path d="M' + (x - 4) + ' ' + y + 'L' + (x + w / 2) + ' ' + (y - 22) + 'L' + (x + w + 4) + ' ' + y + 'z" fill="' + roof + '"/>' +
    '<rect class="lj-tw lj-tw2" x="' + (x + 8) + '" y="' + (y + 10) + '" width="10" height="12" fill="#ffd98a" opacity=".8"/><rect x="' + (x + w - 18) + '" y="' + (y + 10) + '" width="10" height="12" fill="#ffd98a" opacity=".55"/>';

  /* 1. Lincoln Av & Webster Av: a Bee-Line 7 bus pulling up at the stop, two-family houses and trees of the Lincoln Av side of New Ro */
  function ljBus() {
    return svg(
      '<rect width="400" height="260" fill="url(#lja)"/>' + stars(10, 40) +
      house(10, 96, 70, "#8b6f5a", "#4a3b33") + house(96, 106, 62, "#a08872", "#544238") + house(250, 100, 66, "#7d6a5c", "#3f332c") + house(330, 92, 66, "#94786a", "#4a3b33") +
      '<rect x="0" y="180" width="400" height="10" fill="#8a8c90"/><rect x="0" y="190" width="400" height="44" fill="#4b4d52"/><path d="M0 212h400" stroke="#f4d35e" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="0" y="234" width="400" height="26" fill="#8a8c90"/>' +
      /* stop sign post */
      '<rect x="356" y="120" width="4" height="62" fill="#3a3f45"/><rect x="340" y="106" width="36" height="30" rx="3" fill="#fff" stroke="' + BEE + '" stroke-width="2"/>' +
      txt("BUS", 358, 118, 8, BEE) + bullet(358, 128, "7", BEE).replace('r="11"', 'r="7"').replace('font-size="15"', 'font-size="10"').replace('y="' + (128 + 5.5) + '"', 'y="' + (128 + 3.6) + '"') +
      person(330, 152, "#1d1b26") +
      /* the bus */
      '<g class="anim-train"><rect x="20" y="138" width="230" height="58" rx="7" fill="#eef1f4" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="20" y="176" width="230" height="7" fill="' + BEE + '"/><rect x="20" y="184" width="230" height="3" fill="#f2b705"/>' +
        [34, 68, 102, 136, 170].map(x => '<rect x="' + x + '" y="148" width="26" height="22" rx="2" fill="#26313d"/>').join("") +
        '<rect x="208" y="146" width="36" height="30" rx="2" fill="#26313d"/><rect x="120" y="140" width="80" height="7" rx="1" fill="#ff8c1a"/>' +
        '<text x="160" y="146" text-anchor="middle" ' + font + ' font-size="6" fill="#111">7 NEW ROCHELLE</text>' +
        '<circle cx="62" cy="198" r="10" fill="#111"/><circle cx="210" cy="198" r="10" fill="#111"/><circle cx="246" cy="186" r="3.5" fill="#fff6c2"/></g>' +
      /* street sign */
      '<rect x="270" y="58" width="4" height="124" fill="#3d4b3f"/><rect x="226" y="58" width="92" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/>' + txt("Lincoln Av", 272, 71, 10, "#fff") +
      txt("BEE-LINE 7  ·  LINCOLN AV & WEBSTER AV", 200, 252, 9, "#1d1b26", 'letter-spacing="1.5"'),
      sky("lja", "#151a3a", "#e48a5a"));
  }

  /* 2. The Hayden Planetarium: the white sphere floating in its glass cube at night, planets orbiting - "Deep Space" */
  function ljPlanet() {
    let grid = "";
    for (let x = 90; x <= 310; x += 22) grid += '<path d="M' + x + ' 20V214" stroke="#9fd8ff" stroke-width="1" opacity=".35"/>';
    for (let y = 20; y <= 214; y += 22) grid += '<path d="M90 ' + y + 'H310" stroke="#9fd8ff" stroke-width="1" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ljb)"/>' + stars(30, 200) +
      '<rect x="90" y="20" width="220" height="194" fill="#1a3a66" opacity=".45" stroke="#bfe6ff" stroke-width="2"/>' + grid +
      '<circle cx="200" cy="118" r="70" fill="url(#ljs)"/>' +
      '<ellipse cx="200" cy="118" rx="96" ry="22" fill="none" stroke="' + CYAN + '" stroke-width="1.5" opacity=".6"/>' +
      '<g class="lj-orb"><circle cx="296" cy="118" r="7" fill="' + GOLD + '"/></g>' +
      '<g class="lj-orb lj-orb2"><circle cx="200" cy="30" r="5" fill="' + VIOLET + '"/></g>' +
      '<rect x="160" y="188" width="10" height="26" fill="#bfe6ff" opacity=".7"/><rect x="230" y="188" width="10" height="26" fill="#bfe6ff" opacity=".7"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#20232b"/><rect x="0" y="214" width="400" height="3" fill="#3a3f4a"/>' +
      person(70, 222, "#0c0d12") + person(330, 224, "#0c0d12") +
      tag("DEEP SPACE", 18, 50, 26, CYAN, -5) + txt("HAYDEN PLANETARIUM", 200, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("ljb", "#020312", "#0d1840") + '<radialGradient id="ljs" cx=".38" cy=".35" r=".75"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#dfe8f2"/><stop offset="1" stop-color="#8fa3bd"/></radialGradient>');
  }

  /* 3. 60 Centre St: the granite courthouse with its wide steps and Corinthian columns, film lights and a camera on the steps - his TV acting run */
  function ljCourt() {
    let cols = "";
    for (let i = 0; i < 10; i++) { const x = 52 + i * 32; cols += '<rect x="' + x + '" y="70" width="14" height="96" fill="#e7e2d6"/><rect x="' + (x - 3) + '" y="66" width="20" height="6" fill="#d6d0c2"/><rect x="' + (x - 3) + '" y="164" width="20" height="5" fill="#d6d0c2"/>'; }
    let steps = "";
    for (let i = 0; i < 6; i++) steps += '<rect x="' + (30 - i * 6) + '" y="' + (170 + i * 9) + '" width="' + (340 + i * 12) + '" height="9" fill="' + (i % 2 ? "#cfc8b8" : "#ddd6c6") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ljc)"/>' +
      '<path d="M30 66L200 18L370 66Z" fill="#ddd6c6" stroke="#bdb6a6" stroke-width="2"/><path d="M60 62L200 26L340 62Z" fill="#cfc8b8"/>' +
      '<rect x="30" y="62" width="340" height="8" fill="#cfc8b8"/>' +
      '<rect x="40" y="70" width="320" height="100" fill="#8f8a80"/>' + cols + steps +
      /* film lights + camera */
      '<path class="lj-beam" d="M40 140L150 200L150 236L40 160Z" fill="#fff4c2"/><path class="lj-beam lj-beam2" d="M360 140L250 200L250 236L360 160Z" fill="#fff4c2"/>' +
      '<rect x="28" y="128" width="20" height="16" rx="2" fill="#222"/><rect x="36" y="144" width="4" height="80" fill="#222"/>' +
      '<rect x="352" y="128" width="20" height="16" rx="2" fill="#222"/><rect x="360" y="144" width="4" height="80" fill="#222"/>' +
      '<g transform="translate(176 196)"><rect x="0" y="0" width="40" height="24" rx="3" fill="#2a2a2e"/><circle cx="46" cy="12" r="8" fill="#111" stroke="#555" stroke-width="2"/><circle cx="10" cy="-6" r="8" fill="#2a2a2e"/><circle cx="30" cy="-6" r="8" fill="#2a2a2e"/>' +
        '<circle class="lj-rec" cx="6" cy="6" r="2.5" fill="#ff3b3b"/><path d="M20 24l-10 30M20 24l10 30M20 24v30" stroke="#333" stroke-width="2.5"/></g>' +
      person(132, 186, "#14151a") + person(268, 190, "#14151a") +
      txt("60 CENTRE ST", 200, 60, 10, "#5c564b", 'letter-spacing="2"') + tag("ACTION", 280, 248, 18, GOLD, -4),
      sky("ljc", "#9cc7e8", "#e8eef3"));
  }

  /* 4. The Lincoln Av park handball wall chalked with Supreme Mathematics, a ball bouncing - "Now do the math" */
  function ljWall() {
    const nine = (x, y, c) => '<g class="lj-ch lj-ch3"><circle cx="' + x + '" cy="' + (y - 13) + '" r="6.5" fill="none" stroke="' + c + '" stroke-width="3"/><path d="M' + (x + 6.5) + ' ' + (y - 14) + 'V' + y + '" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/></g>';
    const nums = [["1", "KNOWLEDGE"], ["2", "WISDOM"], ["3", "UNDERSTANDING"], ["4", "CULTURE"], ["5", "POWER"], ["6", "EQUALITY"], ["7", "GOD"], ["8", "BUILD"], ["N", "BORN"], ["0", "CIPHER"]];
    let chalk = "";
    nums.forEach((n, i) => { const col = i < 5 ? 0 : 1, row = i % 5, x = 70 + col * 140, y = 64 + row * 22;
      chalk += (n[0] === "N" ? nine(x, y, "#fff") : '<text class="lj-ch lj-ch' + (i % 3 + 1) + '" x="' + x + '" y="' + y + '" ' + font + ' font-size="18" fill="#fff" text-anchor="middle">' + n[0] + '</text>') +
        '<text x="' + (x + 14) + '" y="' + (y - 2) + '" font-family="Permanent Marker, cursive" font-size="11" fill="' + (i % 2 ? CYAN : GOLD) + '">' + n[1] + '</text>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#ljd)"/>' +
      '<path d="M0 60Q60 30 120 56T240 50T400 54V176H0Z" fill="#3c7a3e"/>' +
      '<rect x="30" y="36" width="340" height="140" fill="#8a3b2e"/><rect x="30" y="36" width="340" height="6" fill="#6e2e24"/>' +
      '<path d="M30 140H370" stroke="#f4ead8" stroke-width="2" opacity=".5"/>' + chalk +
      '<rect x="0" y="176" width="400" height="84" fill="#55606b"/><path d="M60 176L20 260M200 176V260M340 176L380 260" stroke="#e7e2d6" stroke-width="2" opacity=".7"/>' +
      '<g class="lj-ball"><circle cx="120" cy="228" r="6" fill="#2d7dd2"/></g>' +
      person(90, 196, "#14151a") + person(306, 198, "#14151a") +
      txt("LINCOLN AV PARK", 200, 28, 11, CREAM, 'letter-spacing="3"') + tag("NOW DO THE MATH", 200, 250, 18, GOLD, -3),
      sky("ljd", "#ffb36b", "#ffd9a6"));
  }

  /* 5. Lincoln Av & Memorial Hwy: green signs, the wall tagged LORD JAMAR, the New England Thruway overpass behind with traffic */
  function ljCorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lje)"/>' + stars(14, 40) +
      /* thruway overpass */
      '<rect x="0" y="64" width="400" height="16" fill="#7d7f84"/><rect x="0" y="60" width="400" height="5" fill="#a2a4a8"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 7) + '" y="80" width="14" height="50" fill="#6c6e73"/>').join("") +
      '<g class="lj-car"><rect x="0" y="50" width="40" height="11" rx="3" fill="' + CYAN + '"/></g><g class="lj-carb"><rect x="0" y="50" width="54" height="11" rx="2" fill="#e9e9e9"/></g><g class="lj-car lj-car2"><rect x="0" y="51" width="34" height="10" rx="3" fill="' + GOLD + '"/></g>' +
      '<rect x="160" y="40" width="80" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' + txt("I-95 THRUWAY", 200, 52, 9, "#fff") +
      /* the wall */
      '<rect x="0" y="122" width="400" height="104" fill="#43403f"/>' +
      (() => { let b = ""; for (let y = 132; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#383534" stroke-width="1"/>'; return b; })() +
      tag("LORD JAMAR", 14, 196, 46, CYAN, -5) + tag("GOD BODY", 24, 222, 16, GOLD, -3) + tag("5%", 250, 220, 20, VIOLET, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="lj-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + VIOLET + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="96" width="5" height="132" fill="#3d4b3f"/>' +
      '<rect x="292" y="98" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Lincoln Av", 344, 113, 11, "#fff") +
      '<rect x="292" y="122" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Memorial Hwy", 344, 137, 11, "#fff") +
      '<circle class="lj-flk" cx="358" cy="92" r="4" fill="#fff6c2"/>',
      sky("lje", "#070a1f", "#27304f"));
  }

  window.SCENES = { ljBus: ljBus, ljPlanet: ljPlanet, ljCourt: ljCourt, ljWall: ljWall, ljCorner: ljCorner };
})();
