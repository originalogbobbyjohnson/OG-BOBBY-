/* Sunz of Man game (NYC map, Brooklyn: Red Hook). Killah Priest, Hell Razah, 60 Second Assassin, Prodigal Sunn, the first group on Wu-Tang Records.
   Smith-9 Sts (F/G), the highest el in the system, over the canal; the Brooklyn Cruise Terminal at Pier 12;
   the red Waterfront Museum barge off Conover St; the big 1936 Red Hook pool (Sol Goldman Pool) in summer;
   and Columbia St & Bay St with the Red Hook Ball Fields lights behind. 400 x 260 SVGs. Classes prefixed sz-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes szcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.sz-car{animation:szcar 7s linear infinite}.sz-car2{animation-delay:-3.5s}' +
    '@keyframes szblink{0%,100%{opacity:.25}50%{opacity:1}}.sz-bl{animation:szblink 1.8s ease-in-out infinite}.sz-bl2{animation-delay:.6s}.sz-bl3{animation-delay:1.2s}' +
    '@keyframes szflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.sz-flk{animation:szflick 2.6s infinite}' +
    '@keyframes szwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.sz-wv{animation:szwave 3s ease-in-out infinite}.sz-wv2{animation-delay:-1.5s}' +
    '@keyframes szbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.sz-bob{animation:szbob 3.2s ease-in-out infinite}' +
    '@keyframes szsplash{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-16px);opacity:0}}.sz-spl{transform-box:fill-box;animation:szsplash 1.2s ease-out infinite}.sz-spl2{animation-delay:.4s}.sz-spl3{animation-delay:.8s}' +
    '@keyframes szsmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(20px,-26px);opacity:0}}.sz-smk{animation:szsmoke 3s ease-out infinite}.sz-smk2{animation-delay:1s}.sz-smk3{animation-delay:2s}' +
    '@keyframes szgull{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.sz-gull{animation:szgull 12s linear infinite}' +
    '@keyframes szglow{0%,100%{opacity:.5}50%{opacity:1}}.sz-glow{animation:szglow 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89 + 7) % 400) + '" cy="' + (6 + (i * 41) % 54) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e8b931", PURPLE = "#7b4fd6", CREAM = "#f3ead7", ORANGE = "#ff6319", GGREEN = "#6cbe45", RUST = "#a33a2a";
  const skyline = (y, col, op) => '<path d="M0 ' + y + 'h20v-14h10v-8h8v8h14v-22h12v22h10v-12h18v12h8v-30h6v-10h4v10h6v30h16v-18h14v18h22v-26h10v26h12v-10h20v10h16v-34h4v-8h4v8h4v34h24v-16h18v16h20v-20h14v20h40v-12h22v12h14v' + (260 - y) + 'H0z" fill="' + col + '" opacity="' + op + '"/>';

  /* 1. Smith-9 Sts: the high steel el over the canal, the black sign with the F and G, the F rolling in, Manhattan far off */
  function smith9() {
    let win = "";
    for (let x = 34; x < 280; x += 32) win += '<rect x="' + x + '" y="94" width="22" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let truss = "";
    for (let x = 0; x < 400; x += 40) truss += '<path d="M' + x + ' 150l20 30l20-30" stroke="#3f5a4a" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zs)"/>' +
      skyline(80, "#5d6a8a", ".45") +
      /* canal far below */
      '<rect x="0" y="214" width="400" height="46" fill="#2c4a52"/><path class="sz-wv" d="M0 226h60M90 236h70M200 228h80M300 240h70" stroke="#5f8a92" stroke-width="2"/>' +
      '<rect x="40" y="200" width="70" height="14" fill="#6b5a4a"/><rect x="290" y="196" width="80" height="18" fill="#5c4f45"/>' +
      /* columns down to the ground */
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 5) + '" y="180" width="10" height="40" fill="#3f5a4a"/>').join("") +
      /* deck + truss */
      '<rect x="0" y="140" width="400" height="12" fill="#2f4a3c"/>' + truss + '<rect x="0" y="178" width="400" height="5" fill="#2f4a3c"/>' +
      /* platform canopy */
      '<rect x="0" y="40" width="400" height="10" fill="#2f4a3c"/>' + [20, 140, 260, 380].map(x => '<rect x="' + (x - 3) + '" y="50" width="6" height="90" fill="#3f5a4a"/>').join("") +
      /* sign */
      '<rect x="60" y="54" width="280" height="28" rx="3" fill="#111"/><rect x="60" y="54" width="280" height="3" fill="#fff"/>' +
      '<text x="122" y="74" text-anchor="end" ' + font + ' font-size="14" fill="#fff">Smith&#8211;</text>' +
      '<circle cx="127.5" cy="67.6" r="3.4" fill="none" stroke="#fff" stroke-width="2.4"/><path d="M130.9 67.6V74" stroke="#fff" stroke-width="2.4"/>' +
      '<text x="137" y="74" ' + font + ' font-size="14" fill="#fff">Sts</text>' + bullet(290, 68, "F", ORANGE) + bullet(316, 68, "G", GGREEN) +
      /* the F train */
      '<g class="anim-train">' +
        '<rect x="14" y="86" width="290" height="52" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="14" y="120" width="290" height="4" fill="' + ORANGE + '"/>' +
        '<rect x="284" y="94" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(292, 128, "F", ORANGE) +
        '<circle cx="26" cy="130" r="3" fill="#fff6c2"/>' +
      '</g>' +
      txt("HIGHEST STATION IN THE SYSTEM", 200, 252, 9, CREAM, 'letter-spacing="2"'),
      sky("zs", "#1b2a4a", "#e09a6a"));
  }

  /* 2. The Brooklyn Cruise Terminal at Pier 12: a white liner at the berth, the terminal shed, smoke from the stack */
  function cruise() {
    let decks = "", ports = "";
    for (let r = 0; r < 4; r++) decks += '<rect x="' + (90 + r * 10) + '" y="' + (112 - r * 14) + '" width="' + (250 - r * 30) + '" height="12" fill="#f4f6f8" stroke="#c9ced6"/>';
    for (let x = 100; x < 330; x += 12) ports += '<rect class="sz-bl sz-bl' + (x % 3 + 1) + '" x="' + x + '" y="116" width="7" height="4" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zc)"/>' + stars(12) +
      '<path class="sz-gull" d="M0 30q6-6 12 0q6-6 12 0" stroke="#2b2b2b" stroke-width="2" fill="none"/>' +
      /* liner */
      '<g class="sz-bob">' +
        '<path d="M60 124h300l-20 44H86z" fill="#f4f6f8" stroke="#9aa3ad" stroke-width="2"/><rect x="60" y="150" width="296" height="6" fill="#1d3d6b"/>' +
        decks + ports +
        '<rect x="232" y="48" width="26" height="22" rx="3" fill="#1d3d6b"/><rect x="232" y="52" width="26" height="5" fill="' + GOLD + '"/>' +
        '<circle class="sz-smk" cx="246" cy="44" r="6" fill="#cfd6de"/><circle class="sz-smk sz-smk2" cx="246" cy="44" r="5" fill="#cfd6de"/><circle class="sz-smk sz-smk3" cx="246" cy="44" r="7" fill="#cfd6de"/>' +
      '</g>' +
      '<rect x="0" y="164" width="400" height="30" fill="#24425a"/><path class="sz-wv" d="M10 176h50M120 184h60M250 178h70" stroke="#4f7a92" stroke-width="2"/>' +
      /* terminal shed */
      '<rect x="0" y="190" width="400" height="40" fill="#8a8f96"/><path d="M0 190l40-18h320l40 18z" fill="#6b7179"/>' +
      (() => { let d = ""; for (let x = 20; x < 380; x += 40) d += '<rect x="' + x + '" y="200" width="24" height="22" fill="#4a5058"/>'; return d; })() +
      txt("BROOKLYN CRUISE TERMINAL", 200, 186, 10, CREAM, 'letter-spacing="2"') +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4844"/>' +
      '<g class="sz-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + PURPLE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      txt("PIER 12, RED HOOK", 330, 24, 10, CREAM),
      sky("zc", "#0e1c36", "#3b5b8a"));
  }

  /* 3. The Waterfront Museum barge off Conover St: the old red wooden railroad barge on the water, string lights, the harbor beyond */
  function barge() {
    let planks = "";
    for (let y = 112; y < 160; y += 8) planks += '<path d="M70 ' + y + 'h260" stroke="#7a2a1e" stroke-width="1.5"/>';
    let lights = "";
    for (let i = 0; i < 12; i++) lights += '<circle class="sz-bl sz-bl' + (i % 3 + 1) + '" cx="' + (78 + i * 22) + '" cy="' + (88 + Math.abs(6 - i) * 1.2) + '" r="3" fill="#ffe08a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zb)"/>' + stars(16) +
      skyline(120, "#3c4466", ".5") +
      '<rect x="0" y="150" width="400" height="110" fill="#1f3a4f"/>' +
      '<path class="sz-wv" d="M0 196h80M120 210h90M260 200h100M30 232h80M220 240h90" stroke="#3f6a82" stroke-width="2"/>' +
      /* barge */
      '<g class="sz-bob">' +
        '<path d="M50 160h300l-16 22H66z" fill="#3a2a22"/>' +
        '<rect x="70" y="104" width="260" height="58" fill="' + RUST + '"/>' + planks +
        '<path d="M62 106l138-30l138 30z" fill="#5a2a20"/><path d="M62 106l138-30l138 30" stroke="#2a120c" stroke-width="2" fill="none"/>' +
        '<rect x="180" y="124" width="40" height="38" fill="#2a120c"/><rect x="184" y="128" width="32" height="30" fill="#f6d58a" class="sz-glow"/>' +
        '<rect x="96" y="120" width="30" height="20" fill="#f6d58a" class="sz-glow"/><rect x="274" y="120" width="30" height="20" fill="#f6d58a" class="sz-glow"/>' +
        '<path d="M70 88q130 14 260 0" stroke="#333" stroke-width="1" fill="none"/>' + lights +
        txt("WATERFRONT MUSEUM", 200, 118, 9, CREAM, 'letter-spacing="2"') +
      '</g>' +
      /* pier */
      '<rect x="0" y="188" width="60" height="10" fill="#6b5a4a"/>' + [10, 30, 50].map(x => '<rect x="' + x + '" y="198" width="5" height="30" fill="#4a3a2a"/>').join("") +
      person(30, 160, "#1b1b1b") +
      txt("CONOVER ST PIER", 330, 244, 9, CREAM, 'letter-spacing="2"'),
      sky("zb", "#0a1430", "#4a3a6a"));
  }

  /* 4. The Red Hook pool in July: the huge 1936 public pool, lifeguard chair, kids splashing, Red Hook brick behind */
  function pool() {
    let lanes = "";
    for (let x = 40; x < 380; x += 34) lanes += '<path d="M' + x + ' 160v70" stroke="#ffffff" stroke-opacity=".35" stroke-width="2"/>';
    let heads = "";
    [[80, 190], [140, 206], [200, 186], [270, 212], [330, 194]].forEach(([x, y], i) => heads += '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#2a1a12"/>' +
      '<circle class="sz-spl sz-spl' + (i % 3 + 1) + '" cx="' + (x + 6) + '" cy="' + (y - 4) + '" r="2" fill="#e8f6ff"/><circle class="sz-spl sz-spl' + ((i + 1) % 3 + 1) + '" cx="' + (x - 6) + '" cy="' + (y - 3) + '" r="1.6" fill="#e8f6ff"/>');
    let bricks = "";
    for (let i = 0; i < 6; i++) { const x = 6 + i * 66; bricks += '<rect x="' + x + '" y="' + (70 + (i % 2) * 10) + '" width="56" height="' + (70 - (i % 2) * 10) + '" fill="#8a4a36"/>';
      for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) bricks += '<rect x="' + (x + 8 + c * 16) + '" y="' + (80 + (i % 2) * 10 + r * 14) + '" width="8" height="7" fill="#ffd98a" opacity=".55"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#zp)"/>' +
      '<circle cx="340" cy="40" r="20" fill="#ffe08a"/>' +
      bricks +
      /* fence + deck */
      '<rect x="0" y="140" width="400" height="16" fill="#d9d2c2"/>' + (() => { let f = ""; for (let x = 0; x < 400; x += 10) f += '<path d="M' + x + ' 124v16" stroke="#7a8088" stroke-width="1.5"/>'; return f; })() + '<path d="M0 124h400" stroke="#7a8088" stroke-width="2"/>' +
      /* water */
      '<rect x="0" y="156" width="400" height="80" fill="#3fb6d9"/>' + lanes +
      '<path class="sz-wv" d="M10 172h60M150 168h70M260 176h80M40 222h70M200 228h90" stroke="#bfefff" stroke-width="2"/>' + heads +
      /* lifeguard chair */
      '<path d="M352 236l10-60M384 236l-10-60" stroke="#f3ead7" stroke-width="4"/><rect x="356" y="170" width="24" height="8" fill="#f3ead7"/><rect x="358" y="150" width="20" height="20" rx="3" fill="#d7263d"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#d9d2c2"/>' +
      txt("RED HOOK POOL", 120, 252, 10, "#5a4a3a", 'letter-spacing="2"'),
      sky("zp", "#4aa3e0", "#bfe6ff"));
  }

  /* 5. Columbia St & Bay St: the wall tagged SUNZ OF MAN, green signs, the Ball Fields' tall lights behind */
  function corner() {
    const light = x => '<rect x="' + (x - 2) + '" y="30" width="4" height="100" fill="#6b7179"/><rect x="' + (x - 16) + '" y="22" width="32" height="12" fill="#3a3f46"/>' +
      [0, 1, 2, 3].map(i => '<rect class="sz-flk" style="animation-delay:-' + i * 0.4 + 's" x="' + (x - 14 + i * 7) + '" y="24" width="5" height="8" fill="#fff8d6"/>').join("") +
      '<path d="M' + (x - 16) + ' 34l-30 90h92l-30-90z" fill="#fff8d6" opacity=".12"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zr)"/>' + stars(14) +
      light(70) + light(200) + light(330) +
      '<rect x="0" y="118" width="400" height="18" fill="#2f5a2f"/>' + txt("RED HOOK BALL FIELDS", 200, 112, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#55473f"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 11) b += '<path d="M0 ' + y + 'h400" stroke="#463a33" stroke-width="1"/>'; return b; })() +
      tag("SUNZ OF MAN", 14, 196, 40, GOLD, -5) + tag("RED HOOK", 220, 220, 20, PURPLE, -4) + tag("NEXT UP", 28, 222, 16, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="sz-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="358" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Columbia St", 347, 82, 12, "#fff") +
      '<rect x="296" y="92" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Bay St", 347, 108, 12, "#fff") +
      '<circle class="sz-flk" cx="360" cy="60" r="4" fill="#fff6c2"/>',
      sky("zr", "#0a0c1a", "#2a2440"));
  }

  window.SCENES = { smith9: smith9, cruise: cruise, barge: barge, pool: pool, corner: corner };
})();
