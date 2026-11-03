/* Easy Mo Bee producer game: Bed-Stuy, Brooklyn. G train at Classon Av, Lafayette Gardens, the Doo-Bop session, Bed-Stuy brownstones, Lafayette & Classon with the Williamsburgh Savings Bank tower. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}.car3{animation-delay:-5.2s}' +
    '@keyframes carsL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 3s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes sway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.sw{transform-box:fill-box;transform-origin:0% 50%;animation:sway 1.6s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,-20px);opacity:0}10%{opacity:1}100%{transform:translate(30px,200px);opacity:0}}.lf{animation:fall 5s linear infinite}.lf2{animation-delay:-1.3s}.lf3{animation-delay:-2.6s}.lf4{animation-delay:-3.9s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.nt{animation:note 2.6s ease-out infinite}.nt2{animation-delay:-.9s}.nt3{animation-delay:-1.7s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}15%{transform:scale(1.15)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .8s ease-out infinite}' +
    '.orb{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 14s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const brickLines = (y0, y1) => { let b = ""; for (let y = y0 + 6; y < y1; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#00000033" stroke-width="1"/>'; return b; };
  const crate = (x, y, col) => { let s = '<rect x="' + x + '" y="' + y + '" width="64" height="40" fill="#8a6a3c" stroke="#4a3418" stroke-width="2"/>'; for (let i = 0; i < 7; i++) s += '<rect x="' + (x + 4 + i * 8.4) + '" y="' + (y - 12 + (i % 3) * 3) + '" width="6" height="' + (20 - (i % 3) * 3) + '" fill="' + (i % 2 ? col : "#1d1d1d") + '"/>'; return s; };
  const GOLD = "#ffcc33", RED = "#e94b3c", TEAL = "#5ec2a8", GREEN = "#6cbe45", BRICK = "#9a4a34", BRICK2 = "#7c3a29", STONE = "#7a5a46";
  /* Williamsburgh Savings Bank Tower: tan tower, four clock faces, gold-ribbed dome */
  const bankTower = (x, base, s) => '<g>' +
    '<rect x="' + (x - 22 * s) + '" y="' + (base - 150 * s) + '" width="' + (44 * s) + '" height="' + (150 * s) + '" fill="#cbb48e"/>' +
    '<rect x="' + (x - 18 * s) + '" y="' + (base - 178 * s) + '" width="' + (36 * s) + '" height="' + (30 * s) + '" fill="#d8c29c"/>' +
    '<circle cx="' + x + '" cy="' + (base - 163 * s) + '" r="' + (11 * s) + '" fill="#f3ead2" stroke="#6b5a3a" stroke-width="' + (1.5 * s) + '"/>' +
    '<path d="M' + x + ' ' + (base - 163 * s) + 'v-' + (8 * s) + 'M' + x + ' ' + (base - 163 * s) + 'h' + (6 * s) + '" stroke="#222" stroke-width="' + (1.5 * s) + '"/>' +
    '<path d="M' + (x - 18 * s) + ' ' + (base - 178 * s) + 'q' + (18 * s) + ' ' + (-40 * s) + ' ' + (36 * s) + ' 0z" fill="#c9a640"/>' +
    '<rect x="' + (x - 1.5 * s) + '" y="' + (base - 226 * s) + '" width="' + (3 * s) + '" height="' + (12 * s) + '" fill="#c9a640"/>' +
    (() => { let w = ""; for (let r = 0; r < 9; r++) for (let c = 0; c < 3; c++) w += '<rect class="bl bl' + ((r + c) % 4 + 1) + '" x="' + (x - 15 * s + c * 11 * s) + '" y="' + (base - 140 * s + r * 14 * s) + '" width="' + (6 * s) + '" height="' + (7 * s) + '" fill="#ffe29a"/>'; return w; })() + '</g>';
  const projectBld = (x, y, w, h) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="' + BRICK2 + '"/>';
    for (let r = y + 10; r < y + h - 8; r += 13) for (let c = x + 6; c < x + w - 8; c += 13) s += '<rect x="' + c + '" y="' + r + '" width="7" height="8" fill="' + (((r * 3 + c) / 2) % 5 < 1.4 ? "#ffd98a" : "#2c2430") + '"/>'; return s; };
  const brownstone = (x, w, col) => '<rect x="' + x + '" y="90" width="' + w + '" height="120" fill="' + col + '"/><rect x="' + x + '" y="86" width="' + w + '" height="8" fill="#4a3428"/>' +
    '<rect x="' + (x + 8) + '" y="104" width="14" height="22" fill="#ffe2a0"/><rect x="' + (x + w - 22) + '" y="104" width="14" height="22" fill="#2c2430"/><rect x="' + (x + 8) + '" y="140" width="14" height="22" fill="#2c2430"/><rect x="' + (x + w - 22) + '" y="140" width="14" height="22" fill="#ffe2a0"/>' +
    '<rect x="' + (x + w / 2 - 8) + '" y="170" width="16" height="26" fill="#3a2418"/><path d="M' + (x + w / 2 - 14) + ' 196h28l6 14h-40z" fill="#5e4434"/>';

  /* 1. G train pulling into Classon Av, underground */
  function station() {
    let tiles = ""; for (let y = 0; y < 176; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#cdd2cb" stroke-width="1"/>'; for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v176" stroke="#cdd2cb" stroke-width="1"/>';
    let windows = ""; for (let x = 50; x < 260; x += 44) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg('<rect width="400" height="176" fill="#e6e9e2"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#1c1c20"/><rect class="flk" x="50" y="4" width="70" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="250" y="4" width="70" height="4" rx="2" fill="#fffbe6"/>' +
      '<rect x="0" y="22" width="400" height="10" fill="' + GREEN + '"/><rect x="0" y="32" width="400" height="3" fill="#3f7a26"/>' +
      '<rect x="66" y="46" width="268" height="36" rx="4" fill="#111"/><rect x="66" y="46" width="268" height="4" fill="#fff"/>' +
      '<text x="80" y="72" ' + font + ' font-size="17" fill="#fff">Classon Av</text>' + bullet(310, 65, "G", GREEN) +
      '<g class="anim-train"><rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="8" y="154" width="304" height="5" fill="' + GREEN + '"/>' + windows + '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' + bullet(292, 132, "G", GREEN) + '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#14171c"/>' +
      '<rect x="19" y="0" width="14" height="186" fill="#26303a"/><rect x="367" y="0" width="14" height="186" fill="#26303a"/>' +
      tag("MO BEE", 52, 240, 32, GOLD, -5) + tag("DOO-HOP", 230, 240, 26, RED, -7));
  }

  /* 2. Lafayette Gardens: brick project towers at dusk, cars rolling down Lafayette Av */
  function lafayette() {
    return svg('<rect width="400" height="260" fill="url(#s2)"/>' + stars(16) +
      '<circle cx="340" cy="40" r="14" fill="#ffe7a8" opacity=".9"/>' +
      projectBld(14, 70, 90, 150) + projectBld(120, 96, 76, 124) + projectBld(212, 60, 96, 160) + projectBld(322, 92, 70, 128) +
      '<rect x="0" y="220" width="400" height="40" fill="#2b2b2e"/><path d="M0 240h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="car"><rect x="0" y="224" width="36" height="12" rx="4" fill="' + RED + '"/><circle cx="8" cy="237" r="4" fill="#111"/><circle cx="28" cy="237" r="4" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="244" width="36" height="12" rx="4" fill="' + TEAL + '"/></g>' +
      '<rect x="160" y="200" width="3" height="20" fill="#333"/><rect class="flk" x="154" y="196" width="15" height="5" fill="#fff3c0"/>' +
      '<text x="200" y="26" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="3" opacity=".9">LAFAYETTE GARDENS</text>',
      sky("s2", "#1e1640", "#e0874a"));
  }

  /* 3. The Doo-Bop session: a muted trumpet on its stand, drum machine pads, reel to reel, notes floating */
  function doobop() {
    let pads = ""; for (let i = 0; i < 8; i++) pads += '<rect class="pd p' + (i + 1) + '" x="' + (46 + (i % 4) * 24) + '" y="' + (196 + Math.floor(i / 4) * 20) + '" width="18" height="14" rx="2" fill="' + (i % 3 ? "#d8d8d4" : RED) + '"/>';
    return svg('<rect width="400" height="260" fill="#1e1828"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a2038"/>' + (() => { let f = ""; for (let i = 0; i < 20; i++) f += '<rect x="' + (i * 20) + '" y="0" width="10" height="150" fill="#ffffff08"/>'; return f; })() +
      '<rect x="230" y="20" width="150" height="90" rx="4" fill="#3a3a3e" stroke="#111" stroke-width="2"/>' +
      '<g class="rl"><circle cx="275" cy="58" r="24" fill="#222" stroke="#999" stroke-width="2"/><path d="M275 36v44M253 58h44" stroke="#999" stroke-width="3"/></g>' +
      '<g class="rl"><circle cx="335" cy="58" r="24" fill="#222" stroke="#999" stroke-width="2"/><path d="M335 36v44M313 58h44" stroke="#999" stroke-width="3"/></g>' +
      '<path d="M251 90h108" stroke="#5a4a3a" stroke-width="3"/>' +
      '<path d="M140 150v-34M128 150h24" stroke="#888" stroke-width="3"/>' +
      '<g class="sw"><path d="M110 104h60" stroke="' + GOLD + '" stroke-width="5" stroke-linecap="round"/><path d="M170 104l26-14v28z" fill="' + GOLD + '"/><circle cx="196" cy="104" r="9" fill="#2a2038" stroke="#8a6a1a" stroke-width="3"/>' +
      '<rect x="128" y="94" width="5" height="10" fill="#c9a030"/><rect x="138" y="94" width="5" height="10" fill="#c9a030"/><rect x="148" y="94" width="5" height="10" fill="#c9a030"/><path d="M104 104h8" stroke="#ddd" stroke-width="4"/></g>' +
      '<g><text class="nt" x="210" y="96" font-size="18" fill="' + GOLD + '">&#9834;</text><text class="nt nt2" x="200" y="110" font-size="16" fill="#fff">&#9835;</text><text class="nt nt3" x="218" y="112" font-size="14" fill="' + TEAL + '">&#9834;</text></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a2a22"/><rect x="0" y="150" width="400" height="6" fill="#4e382c"/>' +
      '<rect x="34" y="170" width="120" height="74" rx="4" fill="#4a4c52" stroke="#222" stroke-width="2"/><rect x="42" y="176" width="58" height="12" fill="#20382a"/><text x="46" y="186" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#7cf08a">DOO-HOP</text>' + pads +
      '<text x="230" y="140" ' + font + ' font-size="12" fill="#fff" opacity=".85" letter-spacing="3">DOO-BOP SESSION</text>' +
      crate(200, 204, GOLD) + crate(276, 204, RED));
  }

  /* 4. Bed-Stuy brownstones: a stoop block party, speaker thumping, kids' bikes rolling by */
  function brownstones() {
    return svg('<rect width="400" height="260" fill="url(#s4)"/>' +
      '<circle cx="64" cy="44" r="20" fill="#fff1b0"/>' +
      brownstone(0, 80, STONE) + brownstone(80, 80, "#8a644e") + brownstone(160, 80, STONE) + brownstone(240, 80, "#6e4e3c") + brownstone(320, 80, "#8a644e") +
      '<rect x="0" y="210" width="400" height="16" fill="#bdb6aa"/><rect x="0" y="226" width="400" height="34" fill="#3b3b40"/>' +
      '<rect x="182" y="176" width="36" height="34" fill="#1c1c1f" stroke="#555" stroke-width="2"/><circle class="th" cx="200" cy="193" r="11" fill="#333" stroke="#999" stroke-width="2"/>' +
      '<g><text class="nt" x="222" y="180" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="nt nt2" x="168" y="182" font-size="15" fill="#fff">&#9835;</text></g>' +
      '<g class="car"><circle cx="0" cy="246" r="6" fill="none" stroke="#111" stroke-width="2"/><circle cx="18" cy="246" r="6" fill="none" stroke="#111" stroke-width="2"/><path d="M0 246l8-10h8l2 10M8 236l-2-4" stroke="' + RED + '" stroke-width="2" fill="none"/></g>' +
      '<g class="car car2"><rect x="0" y="232" width="36" height="12" rx="4" fill="' + GOLD + '"/></g>' +
      '<text x="200" y="26" text-anchor="middle" ' + font + ' font-size="13" fill="#3a2414" letter-spacing="3">BED-STUY</text>',
      sky("s4", "#7cc4f0", "#fbe7b8"));
  }

  /* 5. The corner: Lafayette Av & Classon Av, EASY MO BEE on the wall, the Williamsburgh Savings Bank clock tower behind */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' + stars(12) +
      bankTower(140, 124, .55) + '<rect x="40" y="96" width="50" height="28" fill="#2a2f46"/><rect x="200" y="100" width="40" height="24" fill="#2a2f46"/>' +
      '<rect x="0" y="122" width="400" height="102" fill="' + BRICK + '"/>' + brickLines(122, 224) +
      tag("EASY MO BEE", 18, 192, 38, GOLD, -5) + tag("DOO-HOP", 200, 216, 20, RED, -4) + tag("BED-STUY", 30, 150, 16, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(270, 44, 120, "Lafayette Av") + sign(282, 70, 96, "Classon Av") +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#5a3a6a"));
  }

  window.SCENES = { station: station, lafayette: lafayette, doobop: doobop, brownstones: brownstones, corner: corner };
})();
