/* hellrazah scenes (NYC map: Red Hook, Brooklyn). CSS classes prefixed hr- (the page's own anim-train is kept). No logos, no faces.
   0 the B61 bus pulling up at Van Brunt St & Visitation Pl (Red Hook has no subway in the neighborhood itself),
   1 the Church of the Visitation on Richards St & Verona St: dark gray Manhattan schist, side tower with copper-framed clocks, cross on the spire,
   2 the Civil War-era brick stores on Beard St by the water, the harbor and the Statue of Liberty out past the pier,
   3 Coffey Park summer jam: plane trees, the benches, a boombox and speakers ("wings up"),
   4 Dwight St & Lorraine St at the Red Hook Houses, HELL RAZAH tagged, the Statue of Liberty across the harbor behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hrcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.hr-car{animation:hrcar 8s linear infinite}.hr-car2{animation-delay:-4s}' +
    '@keyframes hrblink{0%,100%{opacity:.25}50%{opacity:1}}.hr-bl{animation:hrblink 1.8s ease-in-out infinite}.hr-bl2{animation-delay:.6s}.hr-bl3{animation-delay:1.2s}' +
    '@keyframes hrflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.hr-flk{animation:hrflick 2.6s infinite}' +
    '@keyframes hrwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.hr-wv{animation:hrwave 3s ease-in-out infinite}.hr-wv2{animation-delay:-1.5s}' +
    '@keyframes hrbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.hr-bob{animation:hrbob 3.2s ease-in-out infinite}' +
    '@keyframes hrgull{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.hr-gull{animation:hrgull 12s linear infinite}' +
    '@keyframes hrglow{0%,100%{opacity:.45}50%{opacity:1}}.hr-glow{animation:hrglow 2.4s ease-in-out infinite}' +
    '@keyframes hrnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-40px);opacity:0}}.hr-note{animation:hrnote 2.6s ease-out infinite}.hr-note2{animation-delay:.9s}.hr-note3{animation-delay:1.7s}' +
    '@keyframes hrpump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.hr-pump{transform-box:fill-box;transform-origin:center;animation:hrpump .5s ease-in-out infinite}' +
    '@keyframes hrleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.hr-leaf{transform-box:fill-box;transform-origin:bottom center;animation:hrleaf 4s ease-in-out infinite}' +
    '@keyframes hrhand{0%,100%{transform:rotate(0)}100%{transform:rotate(360deg)}}.hr-hand{transform-box:view-box;animation:hrhand 30s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89 + 7) % 400) + '" cy="' + (6 + (i * 41) % 54) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RUBY = "#e0115f", GOLD = "#e8c25a", CREAM = "#f3ead7", MTA = "#0039a6", COPPER = "#5fa88f", SCHIST = "#4d5157";
  /* the Statue of Liberty, small, verdigris green, on her island */
  const liberty = (x, y, s, op) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || 1) + '">' +
    '<rect x="-14" y="40" width="28" height="8" fill="#6f7d76"/><path d="M-9 40l3-16h12l3 16z" fill="#8a9a92"/>' +
    '<path d="M-5 24l2-22h6l2 22z" fill="#6fb59a"/><circle cx="0" cy="0" r="3.2" fill="#6fb59a"/>' +
    '<path d="M-3-3l-3-4M0-4v-5M3-3l3-4" stroke="#6fb59a" stroke-width="1.2"/>' +
    '<path d="M3 4l5-18" stroke="#6fb59a" stroke-width="2.4"/><path class="hr-glow" d="M8-14l-2-5l3-3l2 3z" fill="#ffd36b"/>' +
    '<rect x="-8" y="8" width="5" height="7" fill="#5fa88f"/></g>';
  const brooklynWater = y => '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="#23465a"/>' +
    '<path class="hr-wv" d="M0 ' + (y + 10) + 'h60M90 ' + (y + 20) + 'h70M200 ' + (y + 12) + 'h80M300 ' + (y + 24) + 'h70" stroke="#5f8aa2" stroke-width="2"/>' +
    '<path class="hr-wv hr-wv2" d="M30 ' + (y + 32) + 'h50M150 ' + (y + 36) + 'h60M260 ' + (y + 30) + 'h50" stroke="#4b7690" stroke-width="2"/>';

  /* 0. B61 at Van Brunt St & Visitation Pl: the blue bus-stop sign, low Red Hook brick, the bus pulling in */
  function hrbus() {
    let bricks = "";
    [[0, 90, 92, "#8c4a36"], [96, 72, 110, "#6f3b2e"], [210, 98, 82, "#93573f"], [296, 84, 104, "#7a4232"]].forEach(b => {
      bricks += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="' + b[3] + '"/>' +
        '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="5" fill="#3b2a24"/>';
      for (let wx = b[0] + 10; wx < b[0] + b[2] - 14; wx += 22) for (let wy = b[1] + 14; wy < 176; wy += 26)
        bricks += '<rect x="' + wx + '" y="' + wy + '" width="11" height="15" fill="' + ((wx + wy) % 3 ? "#f6d98a" : "#2c2f3a") + '" opacity=".9"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#hrs0)"/>' + stars(16) + bricks +
      '<rect x="0" y="200" width="400" height="14" fill="#9a9a96"/><rect x="0" y="212" width="400" height="48" fill="#3a3b40"/>' +
      '<path d="M0 238h40M70 238h40M140 238h40M210 238h40M280 238h40M350 238h40" stroke="#e8d36b" stroke-width="3"/>' +
      /* the bus */
      '<g class="anim-train"><rect x="40" y="150" width="250" height="66" rx="8" fill="#eef1f4"/><rect x="40" y="194" width="250" height="10" fill="' + MTA + '"/>' +
      '<rect x="40" y="150" width="250" height="8" rx="4" fill="#d5dade"/>' +
      [56, 96, 136, 176, 216].map(x => '<rect x="' + x + '" y="162" width="32" height="24" rx="2" fill="#2b3a4a"/>').join("") +
      '<rect x="256" y="160" width="30" height="40" rx="3" fill="#2b3a4a"/><rect x="258" y="154" width="28" height="6" fill="#111"/>' +
      '<text x="272" y="159" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="4.2" fill="#ffb21a">B61</text>' +
      '<circle cx="84" cy="216" r="11" fill="#111"/><circle cx="84" cy="216" r="4" fill="#888"/><circle cx="240" cy="216" r="11" fill="#111"/><circle cx="240" cy="216" r="4" fill="#888"/>' +
      '<circle class="hr-bl" cx="288" cy="196" r="3" fill="#ffe28a"/></g>' +
      /* stop pole + sign */
      '<rect x="334" y="92" width="5" height="122" fill="#5b636b"/>' +
      '<rect x="306" y="70" width="62" height="56" rx="4" fill="' + MTA + '" stroke="#fff" stroke-width="1.5"/>' +
      '<circle cx="320" cy="84" r="9" fill="#fff"/>' + txt("B", 320, 88.5, 12, MTA) +
      txt("STOP", 349, 88, 9, "#fff") +
      '<rect x="310" y="96" width="54" height="13" rx="2" fill="#fff"/>' + txt("B61", 337, 106.5, 11, MTA) +
      txt("Downtown Bklyn", 337, 120, 6.5, "#fff") +
      /* station-style name board */
      '<rect x="14" y="20" width="250" height="40" rx="3" fill="#111"/><rect x="14" y="20" width="250" height="3" fill="#fff"/>' +
      '<text x="26" y="40" ' + font + ' font-size="14" fill="#fff">Van Brunt St</text>' +
      '<text x="26" y="55" ' + font + ' font-size="11" fill="#fff">Visitation Pl &#183; Red Hook</text>' +
      '<rect x="210" y="30" width="44" height="22" rx="4" fill="' + MTA + '"/>' + txt("B61", 232, 46, 13, "#fff"),
      sky("hrs0", "#0c1430", "#3a2a48"));
  }

  /* 1. Church of the Visitation: dark gray schist, Gothic stained glass, the side clock tower framed in copper, cross on top */
  function hrchurch() {
    let stone = "";
    for (let y = 108; y < 214; y += 9) for (let x = 70 + ((y / 9) % 2) * 9; x < 236; x += 18) stone += '<rect x="' + x + '" y="' + y + '" width="16" height="7" fill="#585d64" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hrs1)"/>' + stars(10) +
      /* nave */
      '<path d="M70 214V104l90-46l90 46v110z" fill="' + SCHIST + '"/>' + stone +
      '<path d="M66 104l94-50l94 50" stroke="#3a3d42" stroke-width="5" fill="none"/>' +
      /* big front window + entrances */
      '<path d="M132 168v-44a28 28 0 0 1 56 0v44z" fill="#2a1f3a"/>' +
      '<path class="hr-glow" d="M136 166v-42a24 24 0 0 1 48 0v42z" fill="url(#hrglass)"/>' +
      '<path d="M160 100v66M136 134h48" stroke="#2a2a32" stroke-width="2.5"/>' +
      [96, 148, 200].map(x => '<path d="M' + x + ' 214v-24a12 12 0 0 1 24 0v24z" fill="#3a2418"/>').join("") +
      '<path class="hr-glow" d="M88 160v-20a6 6 0 0 1 12 0v20zM220 160v-20a6 6 0 0 1 12 0v20z" fill="#d8a83c"/>' +
      /* side tower */
      '<rect x="252" y="66" width="56" height="148" fill="#464a50"/>' +
      '<path d="M248 66l32-44l32 44z" fill="#3c4046"/><rect x="278" y="4" width="4" height="22" fill="' + GOLD + '"/><rect x="272" y="9" width="16" height="4" fill="' + GOLD + '"/>' +
      '<rect x="262" y="84" width="36" height="36" rx="3" fill="' + COPPER + '"/><circle cx="280" cy="102" r="14" fill="#f3ead7"/>' +
      '<path d="M280 102v-10" stroke="#222" stroke-width="2"/><path class="hr-hand" style="transform-origin:280px 102px" d="M280 102h8" stroke="#222" stroke-width="1.6"/>' +
      '<path d="M266 150v-16a6 6 0 0 1 12 0v16zM282 150v-16a6 6 0 0 1 12 0v16z" fill="#2a1f3a"/>' +
      /* street */
      '<rect x="0" y="214" width="400" height="46" fill="#3a3b40"/><rect x="0" y="214" width="400" height="6" fill="#9a9a96"/>' +
      '<rect x="20" y="150" width="4" height="64" fill="#3d4b3f"/><rect x="0" y="134" width="64" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' + txt("Richards St", 32, 146, 9, "#fff") +
      '<rect x="0" y="116" width="64" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' + txt("Verona St", 32, 128, 9, "#fff") +
      '<g class="hr-car"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + RUBY + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>' +
      txt("WINGS UP", 350, 200, 10, GOLD, 'letter-spacing="2"'),
      sky("hrs1", "#101a3a", "#5a3b5a") +
      '<linearGradient id="hrglass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f6fd0"/><stop offset=".35" stop-color="#e0115f"/><stop offset=".65" stop-color="#f0c24a"/><stop offset="1" stop-color="#2fa36b"/></linearGradient>');
  }

  /* 2. The Beard St stores: Civil War-era red-brown brick warehouses with arched doors on the water, the Statue far off */
  function hrstores() {
    let arch = "";
    for (let x = 30; x < 370; x += 34) arch += '<path d="M' + x + ' 190v-22a10 10 0 0 1 20 0v22z" fill="#2e1d16"/>' +
      '<path d="M' + (x + 2) + ' 150v-14a8 8 0 0 1 16 0v14z" fill="' + ((x / 34) % 2 ? "#f6d98a" : "#2c2f3a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hrs2)"/>' +
      '<circle cx="320" cy="58" r="22" fill="#ffcf7a" opacity=".85"/>' +
      liberty(68, 42, 1, .95) +
      '<rect x="0" y="86" width="400" height="14" fill="#3a5a72" opacity=".85"/>' +
      '<path class="hr-gull" d="M0 50q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="1.6" fill="none"/>' +
      /* warehouses */
      '<rect x="18" y="118" width="364" height="76" fill="#8a3f2b"/><path d="M18 118l20-18h324l20 18z" fill="#5c2a1e"/>' +
      '<rect x="18" y="116" width="364" height="4" fill="#c99a6e"/>' + arch +
      txt("BEARD ST", 200, 112, 9, CREAM, 'letter-spacing="4"') +
      '<rect x="100" y="94" width="40" height="6" fill="#5c2a1e"/><rect x="260" y="94" width="40" height="6" fill="#5c2a1e"/>' +
      /* pier + water */
      '<rect x="0" y="194" width="400" height="12" fill="#6b5a4a"/>' + [20, 80, 140, 200, 260, 320, 380].map(x => '<rect x="' + (x - 3) + '" y="204" width="6" height="16" fill="#4a3c30"/>').join("") +
      brooklynWater(214) +
      '<g class="hr-bob"><path d="M250 226h70l-8 12h-56z" fill="#c0392b"/><rect x="268" y="214" width="26" height="12" fill="#f3ead7"/><rect x="284" y="206" width="6" height="8" fill="#222"/></g>',
      sky("hrs2", "#2a3a6a", "#e8906a"));
  }

  /* 3. Coffey Park jam: plane trees, benches, a boombox pumping, notes floating up */
  function hrpark() {
    const tree = (x, s) => '<g class="hr-leaf"><rect x="' + (x - 5) + '" y="' + (150 - 40 * s) + '" width="10" height="' + (40 * s + 60) + '" fill="#8a7a62"/>' +
      '<circle cx="' + x + '" cy="' + (128 - 40 * s) + '" r="' + (40 * s) + '" fill="#3f7a3a"/><circle cx="' + (x - 26 * s) + '" cy="' + (140 - 30 * s) + '" r="' + (26 * s) + '" fill="#4f8f45"/>' +
      '<circle cx="' + (x + 26 * s) + '" cy="' + (140 - 30 * s) + '" r="' + (24 * s) + '" fill="#356b33"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hrs3)"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5a8f4a"/><path d="M0 196h400" stroke="#c9b894" stroke-width="18"/>' +
      tree(50, 1) + tree(170, .8) + tree(300, 1.1) + tree(390, .7) +
      /* iron fence */
      '<rect x="0" y="210" width="400" height="3" fill="#1f2a22"/>' + Array.from({ length: 41 }, (_, i) => '<rect x="' + i * 10 + '" y="200" width="2" height="30" fill="#1f2a22"/>').join("") +
      /* benches */
      '<rect x="80" y="176" width="60" height="5" fill="#3f6a3a"/><rect x="84" y="181" width="4" height="10" fill="#222"/><rect x="132" y="181" width="4" height="10" fill="#222"/>' +
      '<rect x="250" y="176" width="60" height="5" fill="#3f6a3a"/><rect x="254" y="181" width="4" height="10" fill="#222"/><rect x="302" y="181" width="4" height="10" fill="#222"/>' +
      /* boombox */
      '<g transform="translate(166 150)"><rect x="0" y="0" width="70" height="36" rx="5" fill="#222"/><rect x="24" y="-8" width="22" height="8" rx="2" fill="none" stroke="#222" stroke-width="3"/>' +
      '<circle class="hr-pump" cx="16" cy="20" r="11" fill="#444" stroke="' + RUBY + '" stroke-width="2"/><circle class="hr-pump" cx="54" cy="20" r="11" fill="#444" stroke="' + RUBY + '" stroke-width="2"/>' +
      '<rect x="28" y="8" width="14" height="8" fill="' + GOLD + '"/></g>' +
      '<text class="hr-note" x="190" y="140" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="hr-note hr-note2" x="214" y="140" font-size="14" fill="' + CREAM + '">&#9835;</text><text class="hr-note hr-note3" x="200" y="140" font-size="15" fill="' + RUBY + '">&#9834;</text>' +
      '<rect x="120" y="22" width="160" height="26" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("COFFEY PARK", 200, 40, 13, "#fff", 'letter-spacing="2"'),
      sky("hrs3", "#5aa0d8", "#bfe0f0"));
  }

  /* 4. Dwight St & Lorraine St at the Red Hook Houses: HELL RAZAH tagged, the Statue across the harbor behind */
  function hrcorner() {
    let proj = "";
    [[200, 40, 90], [300, 60, 80]].forEach(p => {
      proj += '<rect x="' + p[0] + '" y="' + p[1] + '" width="' + p[2] + '" height="' + (140 - p[1]) + '" fill="#7a3f30"/>';
      for (let wx = p[0] + 8; wx < p[0] + p[2] - 8; wx += 14) for (let wy = p[1] + 8; wy < 128; wy += 14)
        proj += '<rect class="' + ((wx + wy) % 4 ? "" : "hr-flk") + '" x="' + wx + '" y="' + wy + '" width="7" height="8" fill="' + ((wx * 3 + wy) % 5 ? "#f6d98a" : "#2a2a33") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#hrs4)"/>' + stars(14) +
      brooklynWater(110) + liberty(110, 62, .95, 1) + proj +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#55473f"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 11) b += '<path d="M0 ' + y + 'h400" stroke="#463a33" stroke-width="1"/>'; return b; })() +
      tag("HELL RAZAH", 12, 194, 40, RUBY, -5) + tag("WINGS UP", 220, 220, 20, GOLD, -4) + tag("RUBIES", 26, 222, 16, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="hr-car hr-car2"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="358" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Dwight St", 347, 82, 12, "#fff") +
      '<rect x="296" y="92" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Lorraine St", 347, 108, 12, "#fff") +
      '<circle class="hr-flk" cx="360" cy="60" r="4" fill="#fff6c2"/>',
      sky("hrs4", "#0a0c1a", "#3a2440"));
  }

  window.SCENES = { hrbus: hrbus, hrchurch: hrchurch, hrstores: hrstores, hrpark: hrpark, hrcorner: hrcorner };
})();
