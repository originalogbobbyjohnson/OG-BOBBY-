/* Arsonists game (NYC map, Brooklyn: Bushwick, where the crew started out as the Bushwick Bomb Squad in 1993).
   The M pulling into Knickerbocker Av up on the Myrtle Av el, Rock Steady Park on W 98th St (Q-Unique ran with the Rock Steady Crew),
   the late-night college radio studio uptown at WKCR (the Stretch and Bobbito show; Bobbito's Fondle 'Em put out "The Session"),
   the second-floor record shop on Sixth Av that bought their singles off the wall, and Knickerbocker Av & Menahan St with
   St. Barbara's twin towers behind. 400 x 260 SVGs. No logos, no faces. Classes are prefixed ar-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes arfl{0%,100%{transform:scaleY(1) skewX(0)}33%{transform:scaleY(1.18) skewX(4deg)}66%{transform:scaleY(.9) skewX(-4deg)}}.ar-fl{transform-box:fill-box;transform-origin:50% 100%;animation:arfl .7s ease-in-out infinite}.ar-fl2{animation-delay:-.25s}.ar-fl3{animation-delay:-.5s}' +
    '@keyframes arblink{0%,100%{opacity:.25}50%{opacity:1}}.ar-bl{animation:arblink 1.4s ease-in-out infinite}.ar-bl2{animation-delay:.45s}.ar-bl3{animation-delay:.9s}' +
    '@keyframes arspin{to{transform:rotate(360deg)}}.ar-spin{transform-box:fill-box;transform-origin:50% 50%;animation:arspin 1.2s linear infinite}.ar-spin2{animation-duration:.8s}' +
    '@keyframes arbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ar-bob{animation:arbob .5s ease-in-out infinite}.ar-bob2{animation-delay:.25s}' +
    '@keyframes arcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ar-car{animation:arcar 7s linear infinite}' +
    '@keyframes arember{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.ar-em{animation:arember 2.2s linear infinite}.ar-em2{animation-delay:-.7s}.ar-em3{animation-delay:-1.4s}' +
    '@keyframes armeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ar-mt{transform-box:fill-box;transform-origin:50% 100%;animation:armeter .6s ease-in-out infinite}.ar-mt2{animation-delay:.2s}.ar-mt3{animation-delay:.4s}' +
    '@keyframes arsway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.ar-sway{transform-box:fill-box;transform-origin:50% 0%;animation:arsway 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const FIRE = "#ff6a1a", GOLD = "#ffd23f", RED = "#e63946", CREAM = "#f4ead8", ORANGE = "#ff6319";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const flame = (x, y, s, cls) => '<g class="ar-fl ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'c' + (-8 * s) + ' ' + (-6 * s) + ' ' + (-9 * s) + ' ' + (-16 * s) + ' ' + (-2 * s) + ' ' + (-28 * s) + 'c0 ' + (8 * s) + ' ' + (5 * s) + ' ' + (9 * s) + ' ' + (6 * s) + ' ' + (3 * s) + 'c' + (4 * s) + ' ' + (6 * s) + ' ' + (6 * s) + ' ' + (18 * s) + ' ' + (-4 * s) + ' ' + (25 * s) + 'z" fill="' + FIRE + '"/>' +
    '<path d="M' + x + ' ' + y + 'c' + (-4 * s) + ' ' + (-3 * s) + ' ' + (-4 * s) + ' ' + (-9 * s) + ' 0 ' + (-14 * s) + 'c' + (1 * s) + ' ' + (5 * s) + ' ' + (5 * s) + ' ' + (6 * s) + ' 0 ' + (14 * s) + 'z" fill="' + GOLD + '"/></g>';

  /* 1. Knickerbocker Av up on the Myrtle Av el: the wooden-roofed platform, the black sign with the orange M, the M sliding in, Bushwick roofs and water towers at dusk */
  function knick() {
    let roofs = "";
    [[0, 150, 60], [64, 140, 54], [122, 156, 70], [196, 144, 60], [262, 152, 70], [336, 138, 64]].forEach(([x, y, w], i) => {
      roofs += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="' + (i % 2 ? "#5b3a34" : "#4a3430") + '"/>';
      for (let yy = y + 8; yy < 190; yy += 14) for (let xx = x + 6; xx < x + w - 8; xx += 14) roofs += '<rect class="ar-bl ar-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="8" fill="#ffcf7a" opacity=".7"/>';
    });
    const tower = (x, y) => '<g><rect x="' + (x - 1) + '" y="' + (y + 16) + '" width="2" height="12" fill="#2a1d1a"/><rect x="' + (x + 13) + '" y="' + (y + 16) + '" width="2" height="12" fill="#2a1d1a"/><rect x="' + (x - 2) + '" y="' + y + '" width="18" height="17" rx="2" fill="#6b4a33"/><path d="M' + (x - 3) + ' ' + y + 'l10 -8l10 8z" fill="#3c2a20"/><path d="M' + x + ' ' + (y + 6) + 'h14M' + x + ' ' + (y + 11) + 'h14" stroke="#4a3426" stroke-width="1"/></g>';
    let win = "";
    for (let x = 22; x < 280; x += 34) win += '<rect x="' + x + '" y="166" width="22" height="18" rx="2" fill="#ffe3b0" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ak)"/>' + stars(8) +
      '<circle cx="320" cy="58" r="22" fill="#ffb24a" opacity=".85"/>' +
      roofs + tower(40, 118) + tower(286, 112) +
      /* canopy */
      '<rect x="0" y="90" width="400" height="12" fill="#2d2f33"/><path d="M0 102h400" stroke="#1d1e21" stroke-width="3"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + (x - 3) + '" y="102" width="6" height="96" fill="#3b4d3a"/>').join("") +
      [90, 190, 290].map((x, i) => '<rect class="ar-bl ar-bl' + (i + 1) + '" x="' + (x - 14) + '" y="102" width="28" height="4" rx="2" fill="#fff4cf"/>').join("") +
      /* sign */
      '<rect x="60" y="112" width="280" height="30" rx="3" fill="#111"/><rect x="60" y="112" width="280" height="3" fill="#fff"/>' +
      '<text x="74" y="133" ' + font + ' font-size="14" fill="#fff">Knickerbocker Av</text>' + bullet(318, 128, "M", ORANGE) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="8" y="154" width="300" height="46" rx="5" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="288" y="160" width="16" height="22" rx="2" fill="#ffe3b0"/>' + bullet(296, 192, "M", ORANGE) +
        '<rect x="8" y="188" width="270" height="4" fill="' + ORANGE + '"/><circle cx="20" cy="194" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + el structure */
      '<rect x="0" y="200" width="400" height="8" fill="#eab308"/><rect x="0" y="208" width="400" height="18" fill="#6b6660"/>' +
      '<rect x="0" y="226" width="400" height="8" fill="#2f4a3a"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 24) g += '<path d="M' + x + ' 234l12 26l12 -26" stroke="#2f4a3a" stroke-width="3" fill="none"/>'; return g; })() +
      person(346, 168, "#1b1b1b") + person(368, 172, "#262626") +
      txt("MYRTLE AV · BUSHWICK", 200, 221, 10, CREAM, 'letter-spacing="3"'),
      sky("ak", "#1d1033", "#c4563a"));
  }

  /* 2. Rock Steady Park on W 98th St: the handball wall with a burner piece, the B-boy circle on cardboard, the DJ table, the crowd */
  function rocksteady() {
    const crowd = [];
    for (let x = 12; x < 400; x += 24) crowd.push('<g class="ar-bob' + (x % 48 ? " ar-bob2" : "") + '"><circle cx="' + x + '" cy="232" r="8" fill="#141016"/><rect x="' + (x - 9) + '" y="240" width="18" height="22" rx="6" fill="#141016"/></g>');
    return svg(
      '<rect width="400" height="260" fill="url(#ar)"/>' +
      /* trees + buildings behind */
      '<rect x="0" y="40" width="80" height="120" fill="#8a5a44"/><rect x="320" y="30" width="80" height="130" fill="#7a4c3a"/>' +
      [10, 30, 50, 330, 350, 370].map((x, i) => [56, 80, 104].map(y => '<rect x="' + x + '" y="' + (y - (i > 2 ? 10 : 0)) + '" width="10" height="12" fill="#f3d9a4" opacity=".6"/>').join("")).join("") +
      '<circle cx="96" cy="70" r="34" fill="#3f7d3a"/><circle cx="304" cy="66" r="32" fill="#3a7536"/>' +
      /* the handball wall + piece */
      '<rect x="70" y="60" width="260" height="112" fill="#c9c2b4"/><rect x="70" y="56" width="260" height="6" fill="#8f897e"/>' +
      '<path d="M84 150q20-70 70-62t60 30q30-50 70-40t30 70z" fill="' + FIRE + '" opacity=".25"/>' +
      tag("ROCK STEADY", 92, 126, 34, FIRE, -5) + tag("PARK", 230, 158, 22, GOLD, -3) +
      '<path d="M86 84l10 -8M300 80l12 6" stroke="#2a6fdb" stroke-width="4" stroke-linecap="round"/>' +
      /* ground */
      '<rect x="0" y="172" width="400" height="88" fill="#5d5f63"/><rect x="0" y="172" width="400" height="3" fill="#8b8d90"/>' +
      /* cardboard + spinning b-boy (windmill) */
      '<rect x="130" y="184" width="140" height="26" fill="#b08a5a"/><path d="M130 196h140" stroke="#8c6b42" stroke-width="1"/>' +
      '<g class="ar-spin" style="animation-duration:1s"><g><circle cx="200" cy="190" r="6" fill="#0d0b0f"/><path d="M184 194h32M200 194l-12 10M200 194l12 10" stroke="#0d0b0f" stroke-width="4" stroke-linecap="round"/></g></g>' +
      /* a b-boy in a freeze */
      '<g class="ar-bob"><circle cx="150" cy="176" r="5" fill="#0d0b0f"/><path d="M150 181l6 12M150 181l-10 -10M156 193l10 -14M156 193l-6 10" stroke="#0d0b0f" stroke-width="4" stroke-linecap="round"/></g>' +
      /* DJ table */
      '<rect x="290" y="176" width="80" height="24" fill="#1a1a20" stroke="#555" stroke-width="2"/>' +
      '<g class="ar-spin"><circle cx="310" cy="184" r="8" fill="#111" stroke="#666"/><circle cx="310" cy="184" r="2.5" fill="' + FIRE + '"/></g>' +
      '<g class="ar-spin ar-spin2"><circle cx="350" cy="184" r="8" fill="#111" stroke="#666"/><circle cx="350" cy="184" r="2.5" fill="' + GOLD + '"/></g>' +
      crowd.join("") +
      txt("UPPER WEST SIDE · MANHATTAN", 200, 222, 10, CREAM, 'letter-spacing="3"'),
      sky("ar", "#4a87c9", "#bfe0f4"));
  }

  /* 3. The late-night radio studio uptown (WKCR, the Stretch and Bobbito show): the red ON AIR light, the boom mic, the decks, meters jumping, Low Library's granite dome out the window */
  function radio() {
    let meters = "";
    for (let i = 0; i < 9; i++) meters += '<rect class="ar-mt ar-mt' + (i % 3 + 1) + '" x="' + (232 + i * 13) + '" y="188" width="8" height="26" fill="' + (i % 3 ? "#6cbe45" : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#241c1a"/>' +
      /* window with the dome */
      '<rect x="22" y="22" width="190" height="120" fill="url(#aw)" stroke="#3a2c26" stroke-width="6"/>' + stars(6).replace(/cx="(\d+)"/g, (m, a) => 'cx="' + (30 + (a % 170)) + '"').replace(/cy="(\d+)"/g, (m, a) => 'cy="' + (30 + (a % 40)) + '"') +
      '<path d="M66 108q0-38 51-38q51 0 51 38z" fill="#c9c3b6"/><path d="M80 108q0-28 37-28" stroke="#a69f90" stroke-width="2" fill="none"/>' +
      '<rect x="112" y="60" width="10" height="12" fill="#b8b1a2"/><circle cx="117" cy="58" r="3" fill="#b8b1a2"/>' +
      '<rect x="56" y="108" width="122" height="34" fill="#d6d0c2"/>' + [66, 84, 102, 120, 138, 156].map(x => '<rect x="' + x + '" y="112" width="8" height="30" fill="#b2ab9c"/>').join("") +
      '<path d="M117 22v120M22 82h190" stroke="#3a2c26" stroke-width="4"/>' +
      /* ON AIR */
      '<rect x="252" y="30" width="110" height="34" rx="6" fill="#2a0a0a" stroke="#555" stroke-width="2"/>' +
      '<g class="ar-bl"><rect x="256" y="34" width="102" height="26" rx="4" fill="' + RED + '"/>' + txt("ON AIR", 307, 53, 18, "#fff", 'letter-spacing="3"') + '</g>' +
      txt("WKCR · LATE NIGHT", 307, 84, 11, GOLD, 'letter-spacing="2"') +
      /* boom mic */
      '<path d="M380 96l-90 30" stroke="#888" stroke-width="4"/><path d="M290 126l-14 30" stroke="#888" stroke-width="3"/>' +
      '<g class="ar-sway"><rect x="266" y="152" width="20" height="34" rx="10" fill="#2f2f35" stroke="#9aa" stroke-width="2"/><path d="M268 162h16M268 170h16M268 178h16" stroke="#9aa" stroke-width="1"/></g>' +
      /* desk */
      '<rect x="0" y="196" width="400" height="64" fill="#3a2a22"/><rect x="0" y="196" width="400" height="5" fill="#5a4234"/>' +
      '<rect x="30" y="170" width="170" height="36" fill="#1b1b20" stroke="#555" stroke-width="2"/>' +
      '<g class="ar-spin"><circle cx="70" cy="186" r="14" fill="#111" stroke="#666"/><circle cx="70" cy="186" r="4" fill="' + FIRE + '"/><rect x="69" y="172" width="2" height="5" fill="#999"/></g>' +
      '<g class="ar-spin ar-spin2"><circle cx="160" cy="186" r="14" fill="#111" stroke="#666"/><circle cx="160" cy="186" r="4" fill="' + GOLD + '"/><rect x="159" y="172" width="2" height="5" fill="#999"/></g>' +
      '<rect x="104" y="178" width="22" height="16" rx="2" fill="#2a2a30"/><rect x="112" y="180" width="6" height="12" fill="#aaa"/>' +
      '<rect x="226" y="182" width="126" height="36" fill="#15151a" stroke="#555" stroke-width="2"/>' + meters +
      /* crates of 12-inches */
      '<rect x="40" y="220" width="70" height="30" fill="#6b4a2e"/>' + [46, 54, 62, 70, 78, 86, 94].map((x, i) => '<rect x="' + x + '" y="210" width="6" height="16" fill="' + ["#e63946", "#222", "#ffd23f", "#2a6fdb", "#222", FIRE, "#6cbe45"][i] + '"/>').join("") +
      txt("UPTOWN · COLUMBIA", 300, 244, 10, CREAM, 'letter-spacing="3"'),
      sky("aw", "#0b0f24", "#2a2f55"));
  }

  /* 4. The second-floor record shop on Sixth Av in the Village: the walk-up door, the lit upstairs window lined with 12-inch singles, crates, a line on the stairs, cabs rolling by */
  function recordshop() {
    let wall = "";
    const cols = [RED, "#222", GOLD, "#2a6fdb", "#111", FIRE, "#6cbe45", "#f4ead8"];
    for (let r = 0; r < 2; r++) for (let c = 0; c < 8; c++) wall += '<rect x="' + (128 + c * 22) + '" y="' + (58 + r * 26) + '" width="18" height="18" fill="' + cols[(c + r * 3) % 8] + '"/><circle cx="' + (137 + c * 22) + '" cy="' + (67 + r * 26) + '" r="3" fill="#000" opacity=".5"/>';
    let brick = "";
    for (let y = 30; y < 210; y += 8) for (let x = (y / 8) % 2 ? 40 : 32; x < 368; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#6a2c22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#af)"/>' + stars(10) +
      '<rect x="32" y="24" width="336" height="186" fill="#7a3428"/>' + brick +
      /* upstairs window */
      '<rect x="116" y="44" width="200" height="74" fill="#f6dfa8" stroke="#2b1410" stroke-width="5"/>' + wall +
      '<path d="M216 44v74" stroke="#2b1410" stroke-width="4"/>' +
      txt("VINYL · 2ND FL", 216, 136, 13, GOLD, 'letter-spacing="3"') +
      /* storefront below with the walk-up door */
      '<rect x="40" y="146" width="320" height="64" fill="#1d1612"/>' +
      '<rect x="56" y="154" width="120" height="48" fill="#3a2e24" stroke="#5a4636" stroke-width="2"/><rect x="230" y="154" width="110" height="48" fill="#3a2e24" stroke="#5a4636" stroke-width="2"/>' +
      '<rect x="186" y="150" width="34" height="60" fill="#0e0b09" stroke="' + GOLD + '" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (190) + '" y="' + (196 - i * 10) + '" width="26" height="3" fill="#5a4636"/>').join("") +
      person(140, 170, "#0f0c0a", "ar-bob") + person(160, 172, "#16120f", "ar-bob ar-bob2") + person(260, 170, "#0f0c0a", "ar-bob ar-bob2") +
      /* street */
      '<rect x="0" y="210" width="400" height="50" fill="#45474c"/><rect x="0" y="210" width="400" height="4" fill="#77797d"/>' +
      '<path d="M0 238h400" stroke="#d8d2c0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="ar-car"><rect x="0" y="226" width="50" height="16" rx="4" fill="#f2c200"/><rect x="14" y="220" width="20" height="8" rx="2" fill="#f2c200"/><circle cx="12" cy="242" r="4" fill="#111"/><circle cx="38" cy="242" r="4" fill="#111"/></g>' +
      txt("SIXTH AV · THE VILLAGE", 200, 254, 10, CREAM, 'letter-spacing="3"'),
      sky("af", "#120b1e", "#3b2140"));
  }

  /* 5. Knickerbocker Av & Menahan St: green street signs, the wall tagged ARSONISTS with the flames going, St. Barbara's cream twin towers behind */
  function corner() {
    const tw = (x) => '<rect x="' + x + '" y="44" width="40" height="110" fill="#f1e6c4"/><rect x="' + (x + 4) + '" y="30" width="32" height="18" fill="#f6eed6"/>' +
      '<path d="M' + (x + 6) + ' 30q14 -26 28 0z" fill="#e8d9a8"/><circle cx="' + (x + 20) + '" cy="10" r="3" fill="' + GOLD + '"/><path d="M' + (x + 20) + ' 13v-10" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<rect x="' + (x + 12) + '" y="60" width="16" height="26" rx="8" fill="#5c4a2a"/><rect x="' + (x + 12) + '" y="98" width="16" height="22" rx="8" fill="#5c4a2a"/>' +
      '<path d="M' + x + ' 54h40M' + x + ' 92h40" stroke="#d8c690" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ac)"/>' + stars(14) +
      /* St. Barbara's */
      tw(110) + tw(250) + '<rect x="150" y="70" width="100" height="84" fill="#efe2bb"/><path d="M150 70l50 -26l50 26z" fill="#e5d39f"/>' +
      '<circle cx="200" cy="96" r="14" fill="#5c4a2a" stroke="#d8c690" stroke-width="2"/>' +
      txt("ST. BARBARA'S", 200, 128, 9, "#6b5530", 'letter-spacing="2"') +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#3b3a3f"/>' +
      (() => { let b = ""; for (let y = 156; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#323136" stroke-width="1"/>'; return b; })() +
      flame(46, 178, 1.1) + flame(110, 176, 0.9, "ar-fl2") + flame(176, 174, 1.2, "ar-fl3") + flame(236, 172, 1) +
      tag("ARSONISTS", 14, 200, 46, FIRE, -5) + tag("BURN IT OUT", 196, 220, 18, GOLD, -3) + tag("BUSHWICK", 22, 224, 14, CREAM, -2) +
      [70, 150, 230].map((x, i) => '<circle class="ar-em ar-em' + (i + 1) + '" cx="' + x + '" cy="150" r="2.5" fill="' + GOLD + '"/>').join("") +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ar-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="282" y="66" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Knickerbocker Av", 339, 82, 11, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Menahan St", 346, 108, 12, "#fff") +
      '<circle class="ar-bl" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("ac", "#0d0a1a", "#4a2032"));
  }

  window.SCENES = { knick: knick, rocksteady: rocksteady, radio: radio, recordshop: recordshop, corner: corner };
})();
