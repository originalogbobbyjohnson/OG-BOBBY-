/* 3rd Bass game (NYC map, Brooklyn: Windsor Terrace, Pete Nice's Brooklyn - Bishop Ford High School, where basketball gave him hip-hop).
   The F/G down at 15 St-Prospect Park, Bishop Ford High with its red pagoda roof and radio tower, Club Mars by the West Side Highway
   (the L.Q. crew stepped to Club Mars, 1988-90), a ballpark third-base bag at Doubleday Field in Cooperstown (the name is a baseball pun and
   Pete Nice is a baseball historian), and 15 St & Prospect Park SW with the Bartel-Pritchard Square columns behind. 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tbflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.tb-flk{animation:tbflick 2.4s infinite}.tb-flk2{animation-delay:1.1s}' +
    '@keyframes tbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.tb-bob{animation:tbbob .5s ease-in-out infinite}.tb-bob2{animation-delay:.25s}' +
    '@keyframes tbball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.tb-ball{animation:tbball .8s ease-in-out infinite}' +
    '@keyframes tbroll{from{transform:translateX(0)}to{transform:translateX(-150px)}}.tb-roll{animation:tbroll 3s linear infinite}' +
    '@keyframes tbcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.tb-car{animation:tbcar 6s linear infinite}.tb-car2{animation-delay:-3s}' +
    '@keyframes tbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(8deg)}}.tb-flag{transform-box:fill-box;transform-origin:0% 50%;animation:tbflag 1.2s ease-in-out infinite}' +
    '@keyframes tbblink{0%,100%{opacity:.25}50%{opacity:1}}.tb-bl{animation:tbblink 1.6s ease-in-out infinite}.tb-bl2{animation-delay:.6s}' +
    '@keyframes tbsweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.tb-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tbsweep 3s ease-in-out infinite}.tb-beam2{animation-delay:-1.5s}' +
    '@keyframes tbleaf{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}.tb-leaf{animation:tbleaf 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const CACTUS = "#7ed957", RED = "#ff5a4f", GOLD = "#f2c14e", CREAM = "#f4ead8", ORANGE = "#ff6319", GGREEN = "#6cbe45", SIGN = "#0f6b3a";

  /* 1. 15 St-Prospect Park, underground: white tile, the black sign with the F and G, the F train sliding in */
  function tbstation() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1efe8"/>';
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="40" width="6" height="6" fill="' + (x % 24 ? "#8a5a2b" : "#d9b26a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#dcd6c8"/>' + tiles +
      '<rect x="0" y="36" width="400" height="14" fill="#5a3a1c"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2b2b2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="tb-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="40" y="58" width="320" height="32" rx="3" fill="#111"/><rect x="40" y="58" width="320" height="3" fill="#fff"/>' +
      '<text x="54" y="80" ' + font + ' font-size="14" fill="#fff">15 St–Prospect Park</text>' +
      bullet(302, 74, "F", ORANGE) + bullet(328, 74, "G", GGREEN) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#2c5f8a"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "F", ORANGE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + ORANGE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5d5a55"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(330, 196, "#1b1b1b") + person(352, 200, "#2a2a2a") +
      txt("WINDSOR TERRACE · PARK SLOPE", 160, 236, 11, "#f1ead8", 'letter-spacing="2"'));
  }

  /* 2. Bishop Ford High: tan brick school, the red pagoda on the roof, the radio tower blinking, a ball bouncing on the court out front */
  function tbford() {
    let win = "";
    for (let y = 104; y < 170; y += 22) for (let x = 46; x < 330; x += 28) win += '<rect x="' + x + '" y="' + y + '" width="16" height="14" fill="#cfe2f5" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tfs)"/>' +
      /* radio tower */
      '<path d="M330 92l10 -78l10 78" stroke="#c0392b" stroke-width="2" fill="none"/><path d="M333 70h14M336 48h8M338 30h4" stroke="#c0392b" stroke-width="2"/>' +
      '<circle class="tb-bl" cx="340" cy="12" r="3" fill="#ff4d4d"/>' +
      /* pagoda */
      '<rect x="160" y="70" width="80" height="22" fill="#b3261e"/>' +
      '<path d="M146 72q54 -14 108 0l-8 -8q-46 -10 -92 0z" fill="#7a1a14"/>' +
      '<rect x="174" y="48" width="52" height="18" fill="#b3261e"/><path d="M164 50q36 -12 72 0l-6 -7q-30 -8 -60 0z" fill="#7a1a14"/>' +
      '<path d="M190 38q10 -16 20 0z" fill="' + GOLD + '"/>' +
      /* building */
      '<rect x="30" y="92" width="320" height="86" fill="#c9b08a"/>' + win +
      '<rect x="180" y="146" width="40" height="32" fill="#5a3a24"/>' +
      txt("BISHOP FORD", 200, 140, 12, "#3a2414", 'letter-spacing="3"') +
      /* court */
      '<rect x="0" y="178" width="400" height="82" fill="#c46a3a"/><path d="M0 220h400" stroke="#fff" stroke-width="2" opacity=".6"/><circle cx="200" cy="220" r="22" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>' +
      '<rect x="40" y="150" width="5" height="70" fill="#5a5f66"/><rect x="30" y="140" width="40" height="26" fill="#f4f4f4" stroke="#333"/><ellipse cx="58" cy="168" rx="9" ry="2.5" fill="none" stroke="#e8590c" stroke-width="2"/>' +
      '<g class="tb-ball"><circle cx="110" cy="232" r="8" fill="#e8590c"/><path d="M102 232h16M110 224v16" stroke="#7a2e06" stroke-width="1"/></g>' +
      person(96, 206, "#1b1b1b", "tb-bob") + person(300, 206, "#262626", "tb-bob tb-bob2"),
      sky("tfs", "#8ec5ec", "#e6f3fb"));
  }

  /* 3. Club Mars: an old meatpacking warehouse by the West Side Highway, red neon MARS, spotlights sweeping, the line outside, cars on the highway */
  function tbmars() {
    let brick = "";
    for (let y = 60; y < 186; y += 8) for (let x = (y / 8) % 2 ? 68 : 60; x < 340; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#4a2a24"/>';
    let win = "";
    for (let y = 68; y < 120; y += 24) for (let x = 80; x < 330; x += 36) win += '<rect class="tb-bl' + ((x + y) % 2 ? " tb-bl2" : "") + '" x="' + x + '" y="' + y + '" width="20" height="16" fill="' + ((x / 36) % 2 ? "#ff5a4f" : "#7ed957") + '" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms)"/>' + stars(18) +
      '<path class="tb-beam" d="M120 60l-30 -70h60z" fill="#fff" opacity=".12"/><path class="tb-beam tb-beam2" d="M280 60l-30 -70h60z" fill="#fff" opacity=".12"/>' +
      '<rect x="56" y="54" width="288" height="132" fill="#5c342c"/>' + brick + win +
      /* awning + neon */
      '<rect x="56" y="150" width="288" height="12" fill="#2a1612"/><rect x="120" y="116" width="160" height="34" rx="3" fill="#140a08"/>' +
      '<text class="tb-flk" x="200" y="146" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="none" stroke="#ff3b30" stroke-width="2" letter-spacing="8">MARS</text>' +
      '<rect x="178" y="162" width="44" height="24" fill="#120a08"/>' +
      [110, 128, 146, 254, 272].map((x, i) => person(x, 160, i % 2 ? "#151515" : "#222", i % 2 ? "tb-bob" : "tb-bob tb-bob2")).join("") +
      /* West Side Highway */
      '<rect x="0" y="186" width="400" height="74" fill="#34363b"/><path d="M0 222h400" stroke="#e9d27a" stroke-width="3" stroke-dasharray="22 16"/>' +
      '<g class="tb-car"><rect x="0" y="198" width="46" height="14" rx="4" fill="#d4af37"/><circle cx="10" cy="212" r="4" fill="#111"/><circle cx="36" cy="212" r="4" fill="#111"/></g>' +
      '<g class="tb-car tb-car2"><rect x="0" y="232" width="46" height="14" rx="4" fill="#8ab4f8"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>' +
      txt("WEST SIDE HWY · W 13 ST", 200, 40, 10, CREAM, 'letter-spacing="3" opacity=".8"'),
      sky("tms", "#07060f", "#2a1f3d"));
  }

  /* 4. Doubleday Field, Cooperstown: brick grandstand, green outfield, the base path and the third-base bag, pennants flapping, a ball rolling down the line */
  function tbbase() {
    let seats = "";
    for (let y = 70; y < 120; y += 8) seats += '<path d="M40 ' + y + 'h320" stroke="#2f5d3a" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tbs)"/>' +
      /* grandstand */
      '<rect x="30" y="50" width="340" height="80" fill="#8a3b2a"/><rect x="40" y="62" width="320" height="62" fill="#3e7a4a"/>' + seats +
      [60, 140, 220, 300].map(x => '<rect x="' + x + '" y="40" width="10" height="90" fill="#6a2a1e"/>').join("") +
      [80, 200, 320].map((x, i) => '<rect x="' + x + '" y="14" width="2" height="36" fill="#555"/><path class="tb-flag" d="M' + (x + 2) + ' 14h22l-6 6l6 6h-22z" fill="' + [RED, GOLD, CACTUS][i] + '"/>').join("") +
      /* field */
      '<rect x="0" y="130" width="400" height="130" fill="#3f8f3a"/>' + txt("DOUBLEDAY FIELD", 200, 148, 12, CREAM, 'letter-spacing="3"') +
      '<path d="M0 260l200 -100l200 100z" fill="#b8865a"/><path d="M0 260l200 -100M400 260l-200 -100" stroke="#fff" stroke-width="2"/>' +
      '<path d="M40 260l160 -80l160 80z" fill="#3f8f3a"/>' +
      /* third base bag + ball */
      '<g transform="rotate(-28 78 222)"><rect x="62" y="212" width="32" height="22" rx="3" fill="#fff" stroke="#bbb"/>' + txt("3", 78, 228, 14, "#2a2a2a") + '</g>' +
      '<g class="tb-roll"><circle cx="260" cy="210" r="6" fill="#fff" stroke="#c00" stroke-width="1"/></g>' +
      person(124, 190, "#1b1b1b", "tb-bob"),
      sky("tbs", "#7fb8e6", "#dceefa"));
  }

  /* 5. 15 St & Prospect Park SW: green signs, the crew's tag on the wall, the Bartel-Pritchard Square columns and park trees behind */
  function tbcorner() {
    const column = x => '<rect x="' + (x - 8) + '" y="44" width="16" height="96" fill="#d8d2c4"/><rect x="' + (x - 12) + '" y="38" width="24" height="8" fill="#c7c0b0"/><rect x="' + (x - 12) + '" y="136" width="24" height="8" fill="#c7c0b0"/>' +
      '<path d="M' + (x - 9) + ' 38q9 -16 18 0z" fill="#b8b0a0"/><circle class="tb-bl" cx="' + x + '" cy="22" r="5" fill="#fff6c2"/>';
    const tree = (x, r) => '<g class="tb-leaf"><circle cx="' + x + '" cy="' + (120 - r) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x + r * .6) + '" cy="' + (128 - r) + '" r="' + (r * .7) + '" fill="#3a7d45"/></g><rect x="' + (x - 3) + '" y="112" width="6" height="28" fill="#4a3424"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tcs)"/>' + stars(14) +
      tree(40, 30) + tree(110, 26) + tree(250, 34) + tree(330, 24) +
      column(160) + column(210) +
      txt("BARTEL-PRITCHARD SQ", 185, 160, 8, CREAM, 'letter-spacing="2" opacity=".75"') +
      /* wall */
      '<rect x="0" y="166" width="300" height="60" fill="#4a4d55"/>' +
      (() => { let b = ""; for (let y = 176; y < 226; y += 12) b += '<path d="M0 ' + y + 'h300" stroke="#3f424a" stroke-width="1"/>'; return b; })() +
      tag("3RD BASS", 14, 214, 40, CACTUS, -5) + tag("PETE NICE", 208, 182, 14, GOLD, -4) + tag("WEEBLES WOBBLE", 168, 222, 13, RED, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="tb-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* pole + signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("15 St", 346, 82, 12, "#fff") +
      '<rect x="290" y="92" width="106" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Prospect Park SW", 343, 108, 11, "#fff") +
      '<circle class="tb-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("tcs", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { tbstation: tbstation, tbford: tbford, tbmars: tbmars, tbbase: tbbase, tbcorner: tbcorner };
})();
