/* lilyachty scenes (Regions tab: Atlanta; Mableton, south Cobb County). CSS classes and ids prefixed ly- (the page's own anim-train is kept).
   1 CobbLinc Route 30 (Marietta - Mableton - H.E. Holmes) pulling up at Mableton Pkwy @ Old Alabama Rd, up the road from Pebblebrook High.
   2 Pebblebrook High School, Mableton (his high school; home of the Cobb performing-arts magnet): low brick campus, navy + red FALCONS banner, a falcon gliding, music notes.
   3 Alabama State University, Montgomery (where he enrolled in 2015 before leaving for music): red-brick hall with white columns, black + old-gold HORNETS banner, a hornet buzzing.
   4 Concord Covered Bridge over Nickajack Creek, the south Cobb landmark by the Silver Comet Trail: red wooden covered bridge, creek running, a cyclist rolling by.
   5 Floyd Rd and Veterans Memorial Hwy in Mableton: green signs, LIL YACHTY tagged with SAILING TEAM and LIL BOAT, the white 1843 Mable House behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lybus{0%{transform:translateX(440px)}45%,100%{transform:translateX(0)}}.ly-bus{animation:lybus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes lyglide{0%{transform:translate(-60px,10px)}50%{transform:translate(200px,-14px)}100%{transform:translate(470px,6px)}}.ly-glide{animation:lyglide 9s linear infinite}' +
    '@keyframes lyflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.ly-flap{transform-box:fill-box;transform-origin:50% 100%;animation:lyflap .5s ease-in-out infinite}' +
    '@keyframes lynote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-46px);opacity:0}}.ly-note{animation:lynote 3s linear infinite}.ly-n2{animation-delay:-1s}.ly-n3{animation-delay:-2s}' +
    '@keyframes lywave{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}.ly-wave{transform-box:fill-box;transform-origin:0% 50%;animation:lywave 1.6s ease-in-out infinite}' +
    '@keyframes lybuzz{0%{transform:translate(0,0)}25%{transform:translate(40px,-14px)}50%{transform:translate(90px,6px)}75%{transform:translate(40px,18px)}100%{transform:translate(0,0)}}.ly-buzz{animation:lybuzz 4s ease-in-out infinite}' +
    '@keyframes lywing{0%,100%{opacity:.9}50%{opacity:.2}}.ly-wing{animation:lywing .12s linear infinite}' +
    '@keyframes lyflow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.ly-flow{animation:lyflow 2.4s linear infinite}' +
    '@keyframes lybike{from{transform:translateX(-70px)}to{transform:translateX(470px)}}.ly-bike{animation:lybike 8s linear infinite}' +
    '@keyframes lyspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ly-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lyspin .8s linear infinite}' +
    '@keyframes lycar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.ly-car{animation:lycar 5.5s linear infinite}.ly-car2{animation-duration:7.5s;animation-delay:-3s}' +
    '@keyframes lydrip{0%{transform:scaleY(.2)}60%,100%{transform:scaleY(1)}}.ly-drip{transform-box:fill-box;transform-origin:50% 0%;animation:lydrip 2.4s ease-in infinite}.ly-d2{animation-delay:-.9s}.ly-d3{animation-delay:-1.6s}' +
    '@keyframes lybob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-4px) rotate(3deg)}}.ly-bob{transform-box:fill-box;transform-origin:50% 100%;animation:lybob 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const RED = "#ff2d3b", BLUE = "#3fb5ff", GOLD = "#ffd23f", NAVY = "#1b3f7a", TEAL = "#2bb0a6";
  const pines = (y, xs) => xs.map((x, i) => '<path d="M' + x + ' ' + y + 'l' + (14 + (i % 3) * 3) + ' -' + (44 + (i % 4) * 8) + 'l' + (14 + (i % 3) * 3) + ' ' + (44 + (i % 4) * 8) + 'z" fill="' + (i % 2 ? "#2d5a34" : "#24492b") + '"/>').join("");
  const car = (cls, y, col) => '<g class="ly-car ' + cls + '"><rect x="0" y="' + y + '" width="56" height="14" rx="4" fill="' + col + '"/><rect x="10" y="' + (y - 6) + '" width="30" height="9" rx="3" fill="#2a3442"/><circle cx="12" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="44" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  /* a little red-sailed boat (Lil Boat) */
  const boat = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="ly-bob"><path d="M-22 0h44l-8 10h-28z" fill="#f4efe6" stroke="#333" stroke-width="1.5"/><path d="M0 0V-34l18 30z" fill="' + RED + '"/><path d="M-2 0V-26l-14 24z" fill="' + BLUE + '"/></g></g>';

  /* 1. CobbLinc Route 30 at Mableton Pkwy @ Old Alabama Rd */
  function lybus() {
    const bus = '<g class="ly-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + NAVY + '"/><rect x="40" y="181" width="236" height="4" fill="' + TEAL + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">30 H.E. HOLMES</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ly1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff1b8" opacity=".9"/>' +
      pines(112, [0, 26, 50, 78, 104, 130, 158, 186, 214, 240, 268, 296, 324, 352, 378]) +
      '<rect x="0" y="108" width="400" height="34" fill="#cbbfa6"/><rect x="0" y="104" width="400" height="5" fill="#9c8f76"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (14 + i * 66) + '" y="115" width="40" height="18" fill="#2a3442"/>').join("") +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="314" y="62" width="50" height="40" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">CobbLinc</text><text x="339" y="95" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">30</text>' +
      '<rect x="262" y="106" width="134" height="14" rx="2" fill="#111"/><text x="329" y="116" text-anchor="middle" ' + font + ' font-size="6.8" fill="#fff">MABLETON PKWY @ OLD ALABAMA RD</text>',
      sky("ly1", "#86c6f0", "#fbe8c8"));
  }

  /* 2. Pebblebrook High School: brick campus, navy + red Falcons banner, falcon gliding, notes from the arts wing */
  function lypebble() {
    const falcon = '<g class="ly-glide"><g transform="translate(0 46)"><path d="M0 0q10 -4 20 0q-10 2 -20 0z" fill="#5a4a3a"/><path class="ly-flap" d="M6 0q4 -12 14 -14q-4 8 -6 14z" fill="#7a6650"/><path d="M20 0l6 -2l-6 3z" fill="' + GOLD + '"/></g></g>';
    const note = (x, y, cls) => '<g class="ly-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="#fff"/><path d="M' + (x + 4) + ' ' + y + 'v-14l7 3" stroke="#fff" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ly2)"/>' +
      pines(120, [0, 30, 60, 330, 360]) +
      /* long low brick classroom wing + taller entrance block */
      '<rect x="20" y="104" width="360" height="88" fill="#9b4a35"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M20 ' + (112 + i * 10) + 'h360" stroke="#8a3f2c" stroke-width="1"/>').join("") +
      Array.from({ length: 7 }, (_, i) => i === 3 ? '' : '<rect x="' + (34 + i * 50) + '" y="122" width="30" height="22" fill="#2a3442" stroke="#e8e2d6" stroke-width="2"/>').join("") +
      '<rect x="20" y="102" width="360" height="4" fill="#e8e2d6"/>' +
      '<rect x="150" y="84" width="100" height="108" fill="#a9553e"/><rect x="146" y="80" width="108" height="8" fill="#e8e2d6"/>' +
      '<rect x="176" y="150" width="48" height="42" fill="#1e2a38"/><path d="M200 150v42" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="156" y="96" width="88" height="40" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="113" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">PEBBLEBROOK</text><text x="200" y="128" text-anchor="middle" ' + font + ' font-size="9" fill="' + RED + '">FALCONS</text>' +
      note(310, 116, "") + note(332, 110, "ly-n2") + note(354, 118, "ly-n3") +
      falcon +
      '<rect x="0" y="192" width="400" height="68" fill="#6f9a52"/><rect x="0" y="210" width="400" height="14" fill="#c9c3b6"/>' +
      '<rect x="40" y="150" width="3" height="60" fill="#c9cdd2"/><g class="ly-wave"><rect x="43" y="150" width="30" height="10" fill="' + NAVY + '"/><rect x="43" y="160" width="30" height="10" fill="' + RED + '"/></g>' +
      '<rect x="250" y="226" width="140" height="22" rx="3" fill="#1d2a3a"/><text x="320" y="241" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MABLETON, COBB COUNTY</text>',
      sky("ly2", "#9fd2f4", "#f6ead4"));
  }

  /* 3. Alabama State University, Montgomery: red brick, white columns, black + gold Hornets banner, a hornet buzzing */
  function lyasu() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (136 + i * 24) + '" y="104" width="10" height="76" fill="#f4f1ea"/><rect x="' + (133 + i * 24) + '" y="100" width="16" height="5" fill="#e2ddd2"/>').join("");
    const hornet = '<g class="ly-buzz"><g transform="translate(70 70)"><ellipse cx="0" cy="0" rx="11" ry="6" fill="' + GOLD + '"/><path d="M-4 -6v12M3 -6v12" stroke="#111" stroke-width="3"/><circle cx="-12" cy="-1" r="4" fill="#111"/>' +
      '<g class="ly-wing"><ellipse cx="-2" cy="-10" rx="7" ry="4" fill="#dff3ff" opacity=".8"/><ellipse cx="5" cy="-9" rx="6" ry="3.5" fill="#dff3ff" opacity=".8"/></g><path d="M11 0l5 1l-5 1z" fill="#111"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ly3)"/>' +
      '<g fill="#3e6e3c"><ellipse cx="40" cy="120" rx="46" ry="34"/><ellipse cx="370" cy="118" rx="44" ry="32"/></g>' +
      '<rect x="80" y="96" width="240" height="96" fill="#a64532"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M80 ' + (104 + i * 10) + 'h240" stroke="#933b2a" stroke-width="1"/>').join("") +
      '<rect x="90" y="112" width="26" height="30" fill="#2a3442" stroke="#f4f1ea" stroke-width="2"/><rect x="284" y="112" width="26" height="30" fill="#2a3442" stroke="#f4f1ea" stroke-width="2"/>' +
      '<rect x="90" y="150" width="26" height="30" fill="#2a3442" stroke="#f4f1ea" stroke-width="2"/><rect x="284" y="150" width="26" height="30" fill="#2a3442" stroke="#f4f1ea" stroke-width="2"/>' +
      '<path d="M124 100l76 -34l76 34z" fill="#f4f1ea" stroke="#d6d0c4" stroke-width="2"/><circle cx="200" cy="86" r="7" fill="none" stroke="#c9c2b4" stroke-width="2"/>' +
      cols + '<rect x="186" y="140" width="28" height="40" fill="#2a1f18"/>' +
      '<rect x="126" y="180" width="148" height="6" fill="#d6d0c4"/><rect x="118" y="186" width="164" height="6" fill="#c9c2b4"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#79a35a"/><path d="M160 260l20 -68h40l20 68z" fill="#cfc6b4"/>' +
      '<rect x="20" y="200" width="3" height="50" fill="#c9cdd2"/><g class="ly-wave"><rect x="23" y="200" width="44" height="12" fill="#111"/><rect x="23" y="212" width="44" height="12" fill="' + GOLD + '"/></g>' +
      '<rect x="270" y="212" width="120" height="34" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="330" y="227" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">ALABAMA STATE</text><text x="330" y="240" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">HORNETS</text>' +
      hornet,
      sky("ly3", "#8cc8ee", "#f8e6c2"));
  }

  /* 4. Concord Covered Bridge over Nickajack Creek, Silver Comet Trail country */
  function lybridge() {
    const ripples = '<g class="ly-flow">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (214 + (i % 3) * 10) + 'h18" stroke="#cfe8f4" stroke-width="2" opacity=".7"/>').join("") + '</g>';
    const bike = '<g class="ly-bike"><g transform="translate(0 150)"><circle cx="0" cy="0" r="7" fill="none" stroke="#111" stroke-width="2"/><circle cx="22" cy="0" r="7" fill="none" stroke="#111" stroke-width="2"/>' +
      '<path d="M0 0l8 -10h10l4 10M8 -10l-2 -4M18 -10l2 -5" stroke="#111" stroke-width="2" fill="none"/><path d="M10 -12l2 -14" stroke="' + RED + '" stroke-width="5" stroke-linecap="round"/><circle cx="13" cy="-30" r="4.5" fill="' + BLUE + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ly4)"/>' +
      pines(150, [0, 22, 46, 70, 300, 324, 348, 372]) +
      '<g fill="#3c6a3a"><ellipse cx="90" cy="150" rx="40" ry="26"/><ellipse cx="320" cy="150" rx="44" ry="26"/></g>' +
      /* creek */
      '<rect x="0" y="198" width="400" height="62" fill="#4f8fa8"/>' + ripples +
      /* stone abutments */
      '<path d="M60 160h40v46h-50z" fill="#8e8a80"/><path d="M300 160h40l10 46h-50z" fill="#8e8a80"/>' +
      /* the covered bridge: red board-and-batten box, grey roof, portal openings */
      '<rect x="80" y="112" width="240" height="52" fill="#9e2b22"/>' +
      Array.from({ length: 24 }, (_, i) => '<path d="M' + (84 + i * 10) + ' 112v52" stroke="#86231c" stroke-width="2"/>').join("") +
      '<path d="M72 114l128 -34l128 34z" fill="#5c5f66"/><path d="M72 114h256" stroke="#3e4046" stroke-width="3"/>' +
      '<path d="M80 164v-40q0 -6 6 -6h20q6 0 6 6v40z" fill="#2a1a14"/><path d="M288 164v-40q0 -6 6 -6h20q6 0 6 6v40z" fill="#2a1a14"/>' +
      '<rect x="140" y="128" width="120" height="10" fill="#2a1a14" opacity=".6"/>' +
      '<rect x="164" y="88" width="72" height="14" rx="2" fill="#f4efe6"/><text x="200" y="98.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#6a1a14">CONCORD BRIDGE</text>' +
      /* trail in the foreground */
      '<rect x="0" y="160" width="60" height="6" fill="#c9c3b6"/><rect x="340" y="160" width="60" height="6" fill="#c9c3b6"/>' +
      bike + boat(250, 232, .6),
      sky("ly4", "#9fd6f6", "#e6f2e0"));
  }

  /* 5. Floyd Rd and Veterans Memorial Hwy: tag wall, the white Mable House behind */
  function lycorner() {
    const drip = (x, y, cls) => '<rect x="' + x + '" y="' + y + '" width="4" height="16" rx="2" fill="' + RED + '" class="ly-drip ' + (cls || "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ly5)"/>' +
      pines(150, [250, 380]) +
      /* the Mable House: white two-story farmhouse, side chimneys, long porch */
      '<g><rect x="262" y="98" width="110" height="54" fill="#f4f1ea"/><path d="M256 98l61 -26l61 26z" fill="#4e4a48"/>' +
      '<rect x="262" y="64" width="9" height="34" fill="#8a4a36"/><rect x="363" y="64" width="9" height="34" fill="#8a4a36"/>' +
      '<rect x="274" y="106" width="14" height="14" fill="#2a3442"/><rect x="310" y="106" width="14" height="14" fill="#2a3442"/><rect x="346" y="106" width="14" height="14" fill="#2a3442"/>' +
      '<rect x="256" y="124" width="122" height="4" fill="#d8d2c6"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (260 + i * 22) + '" y="128" width="3" height="24" fill="#e8e4da"/>').join("") +
      '<rect x="310" y="132" width="14" height="20" fill="#3a2a22"/></g>' +
      '<rect x="0" y="150" width="400" height="6" fill="#5c6a4a"/>' +
      /* the wall */
      '<rect x="0" y="118" width="250" height="112" fill="#8a8f96"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (126 + i * 10) + 'h250" stroke="#7a7f86" stroke-width="1"/>').join("") +
      tag("LIL YACHTY", 14, 180, 32, RED, -5) + drip(34, 186) + drip(92, 182, "ly-d2") + drip(150, 178, "ly-d3") +
      tag("SAILING TEAM", 18, 218, 17, BLUE, -3) + tag("LIL BOAT", 150, 214, 16, GOLD, 4) + tag("GOOD VIBES", 22, 146, 14, "#fff", -4) +
      boat(214, 140, .55) +
      '<rect x="0" y="230" width="400" height="30" fill="#55555c"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("", 232, BLUE) +
      '<rect x="318" y="150" width="5" height="80" fill="#6e737b"/>' + sign(270, 160, 100, "FLOYD RD SW") + sign(250, 186, 140, "VETERANS MEMORIAL"),
      sky("ly5", "#ff9f7a", "#ffe2a8"));
  }

  window.SCENES = { lybus, lypebble, lyasu, lybridge, lycorner };
})();
