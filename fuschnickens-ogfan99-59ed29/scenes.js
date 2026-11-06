/* Fu-Schnickens game (NYC map, Brooklyn: East Flatbush, where Chip Fu, Poc Fu and Moc Fu came up).
   1. Junius St on the 3, up on the el over Livonia Av (the nearest free stop east of the numbered streets).
   2. A kung-fu double feature on the Bowery: the old Chinatown movie palace marquee, red lanterns swinging (their whole kung-fu style).
   3. The Red House in Trinidad (Chip Fu: "born in Trinidad... land of steel pan and calypso"), a steel pan out front, the flag flying.
   4. Orlando Arena, 1993: the rim, the backboard and the ball going down (Shaq and "What's Up Doc? (Can We Rock)").
   5. Clarendon Rd & E Fifty-Ninth St (spelled out, no digit nine): green street signs, the wall tagged FU-SCHNICKENS, the old Dutch farmhouse (Wyckoff House, 1652) behind the fence.
   400 x 260 SVGs. No logos, no faces. All scene CSS classes are prefixed "fs-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fscar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.fs-car{animation:fscar 7s linear infinite}.fs-car2{animation-delay:-3.5s}' +
    '@keyframes fstw{0%,100%{opacity:.2}50%{opacity:1}}.fs-tw{animation:fstw 1.8s ease-in-out infinite}.fs-tw2{animation-delay:.6s}.fs-tw3{animation-delay:1.2s}' +
    '@keyframes fsflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.fs-flk{animation:fsflick 2.6s infinite}' +
    '@keyframes fschase{0%,100%{opacity:.25}50%{opacity:1}}.fs-bulb{animation:fschase .9s linear infinite}.fs-b2{animation-delay:.3s}.fs-b3{animation-delay:.6s}' +
    '@keyframes fssway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.fs-sway{transform-box:fill-box;transform-origin:50% 0;animation:fssway 2.4s ease-in-out infinite}.fs-sway2{animation-delay:-1.2s}' +
    '@keyframes fswave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.fs-flag{transform-box:fill-box;transform-origin:0 50%;animation:fswave 1.6s ease-in-out infinite}' +
    '@keyframes fsstick{0%,100%{transform:rotate(0)}50%{transform:rotate(-24deg)}}.fs-stick{transform-box:fill-box;transform-origin:100% 100%;animation:fsstick .5s ease-in-out infinite}.fs-stick2{animation-delay:.25s}' +
    '@keyframes fsdunk{0%{transform:translate(-70px,-60px)}45%{transform:translate(0,0)}70%{transform:translate(0,40px)}100%{transform:translate(0,96px)}}.fs-ball{animation:fsdunk 2.4s ease-in infinite}' +
    '@keyframes fsflash{0%,100%{opacity:0}10%{opacity:1}20%{opacity:0}}.fs-fl{animation:fsflash 2.2s infinite}.fs-fl2{animation-delay:.7s}.fs-fl3{animation-delay:1.4s}' +
    '@keyframes fsnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.fs-note{animation:fsnote 2s linear infinite}.fs-note2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = (n, maxY) => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="fs-tw fs-tw' + (i % 3 + 1) + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (6 + (i * 53) % (maxY || 90)) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const ORANGE = "#ff7a00", TEAL = "#2ec4b6", GOLD = "#ffd166", CREAM = "#f4ead8", RED = "#ee352e";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Junius St (3), elevated over Livonia Av: green steel, the platform canopy, the black sign with the red 3, the 3 train sliding in */
  function junius() {
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="98" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let girder = "";
    for (let x = 0; x < 400; x += 40) girder += '<path d="M' + x + ' 160 L' + (x + 20) + ' 178 L' + (x + 40) + ' 160" stroke="#2f5d46" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sa)"/>' +
      /* rowhouses below the el */
      '<rect x="0" y="186" width="80" height="50" fill="#8a4b3a"/><rect x="84" y="196" width="70" height="40" fill="#7a5a48"/><rect x="250" y="190" width="70" height="46" fill="#8a4b3a"/><rect x="324" y="198" width="76" height="38" fill="#6e5244"/>' +
      [12, 40, 96, 124, 262, 290, 336, 366].map((x, i) => '<rect class="fs-tw fs-tw' + (i % 3 + 1) + '" x="' + x + '" y="' + (i % 2 ? 206 : 200) + '" width="12" height="12" fill="#ffd98a" opacity=".85"/>').join("") +
      /* canopy */
      '<path d="M0 22 L400 22 L400 34 L0 34z" fill="#3b5f4a"/><path d="M0 34 L400 34 L392 44 L8 44z" fill="#2f4d3c"/>' +
      [40, 140, 260, 360].map(x => '<rect x="' + (x - 3) + '" y="44" width="6" height="104" fill="#3b5f4a"/>').join("") +
      [90, 200, 310].map((x, i) => '<rect class="fs-flk" style="animation-delay:-' + i * 0.8 + 's" x="' + (x - 18) + '" y="44" width="36" height="5" rx="2" fill="#fff6c2"/>').join("") +
      /* sign */
      '<rect x="80" y="54" width="240" height="30" rx="3" fill="#111"/><rect x="80" y="54" width="240" height="3" fill="#fff"/>' +
      '<text x="96" y="75" ' + font + ' font-size="15" fill="#fff">Junius St</text>' + bullet(298, 70, "3", RED) +
      /* train */
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="96" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(298, 132, "3", RED) +
        '<rect x="10" y="124" width="280" height="4" fill="' + RED + '"/>' +
        '<circle cx="22" cy="136" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + el structure */
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/><rect x="0" y="152" width="400" height="10" fill="#3a3a3a"/>' +
      '<rect x="0" y="158" width="400" height="6" fill="#2f5d46"/>' + girder +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="164" width="10" height="72" fill="#2f5d46"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#4e4e52"/>' +
      '<g class="fs-car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      txt("LIVONIA AV", 200, 226, 10, CREAM, 'letter-spacing="4" opacity=".85"'),
      sky("sa", "#16203f", "#4a3f6b"));
  }

  /* 2. Kung-fu double feature on the Bowery: an old movie palace marquee with chasing bulbs, a vertical KUNG FU sign, red lanterns swinging */
  function palace() {
    let bulbs = "";
    for (let i = 0; i < 24; i++) bulbs += '<circle class="fs-bulb fs-b' + (i % 3 + 1) + '" cx="' + (84 + i * 10) + '" cy="132" r="2.4" fill="#fff3b0"/>';
    for (let i = 0; i < 24; i++) bulbs += '<circle class="fs-bulb fs-b' + ((i + 1) % 3 + 1) + '" cx="' + (84 + i * 10) + '" cy="168" r="2.4" fill="#fff3b0"/>';
    const lantern = (x, y, cls) => '<g class="fs-sway ' + cls + '"><path d="M' + x + ' ' + (y - 18) + 'v10" stroke="#222" stroke-width="2"/><ellipse cx="' + x + '" cy="' + (y + 4) + '" rx="13" ry="15" fill="#d62828"/><rect x="' + (x - 8) + '" y="' + (y - 12) + '" width="16" height="4" fill="' + GOLD + '"/><rect x="' + (x - 8) + '" y="' + (y + 18) + '" width="16" height="4" fill="' + GOLD + '"/><path d="M' + x + ' ' + (y + 22) + 'v8" stroke="' + GOLD + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pl)"/>' + stars(16, 40) +
      /* building */
      '<rect x="60" y="30" width="280" height="196" fill="#5a2a22"/>' +
      [46, 74].map(y => [80, 120, 280, 310].map(x => '<rect class="fs-tw fs-tw' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="16" height="18" fill="#ffcf7a" opacity=".7"/>').join("")).join("") +
      /* vertical sign */
      '<rect x="182" y="10" width="36" height="112" rx="4" fill="#111" stroke="' + ORANGE + '" stroke-width="3"/>' +
      ['K', 'U', 'N', 'G', '', 'F', 'U'].map((c, i) => c ? '<text class="fs-flk" style="animation-delay:-' + i * 0.3 + 's" x="200" y="' + (30 + i * 14) + '" text-anchor="middle" ' + font + ' font-size="14" fill="' + ORANGE + '">' + c + '</text>' : "").join("") +
      /* marquee */
      '<rect x="74" y="126" width="252" height="48" fill="#1b1b1b" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<rect x="92" y="138" width="216" height="24" fill="#fbf6e6"/>' + txt("DOUBLE FEATURE TONIGHT", 200, 155, 11, "#b5121b") +
      /* doors */
      '<rect x="130" y="180" width="140" height="46" fill="#2a120e"/>' + [140, 172, 204, 236].map(x => '<rect x="' + x + '" y="186" width="24" height="40" fill="#ffb347" opacity=".45"/>').join("") +
      lantern(40, 60, "") + lantern(360, 60, "fs-sway2") + lantern(40, 150, "fs-sway2") + lantern(360, 150, "") +
      '<rect x="0" y="226" width="400" height="34" fill="#4a4646"/><rect x="0" y="226" width="400" height="4" fill="#7c7676"/>' +
      person(100, 198, "#151515") + person(300, 200, "#151515") +
      txt("THE BOWERY", 200, 250, 11, CREAM, 'letter-spacing="5" opacity=".85"'),
      sky("pl", "#0d0b1e", "#3a1f2e"));
  }

  /* 3. The Red House, Trinidad: red Beaux-Arts front with white trim and a dome, palms, the red-black-white flag, a steel pan being played */
  function redhouse() {
    let cols = "";
    for (let x = 96; x <= 304; x += 26) cols += '<rect x="' + x + '" y="112" width="10" height="74" fill="#f6efe2"/>';
    let wins = "";
    for (let x = 108; x <= 292; x += 26) wins += '<rect x="' + (x + 1) + '" y="124" width="12" height="22" rx="6" fill="#5a1410"/>';
    const palm = x => '<rect x="' + (x - 3) + '" y="120" width="6" height="106" fill="#7a5a3a"/>' +
      [-50, -20, 10, 40, 160, 190].map(a => '<path d="M' + x + ' 120 q' + (Math.cos(a * Math.PI / 180) * 26) + ' ' + (Math.sin(a * Math.PI / 180) * 26 - 10) + ' ' + (Math.cos(a * Math.PI / 180) * 44) + ' ' + (Math.sin(a * Math.PI / 180) * 44 + 8) + '" stroke="#2f7d3a" stroke-width="6" fill="none" stroke-linecap="round"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rh)"/>' +
      /* dome */
      '<rect x="176" y="70" width="48" height="24" fill="#c8322a"/><path d="M172 72 Q200 30 228 72z" fill="#d8d2c4"/><rect x="198" y="26" width="4" height="12" fill="#c9a24a"/>' +
      /* main body */
      '<rect x="80" y="92" width="240" height="134" fill="#c8322a"/>' +
      '<rect x="80" y="92" width="240" height="10" fill="#f6efe2"/><rect x="80" y="186" width="240" height="6" fill="#f6efe2"/>' +
      '<path d="M170 92 L200 74 L230 92z" fill="#f6efe2"/>' + cols + wins +
      '<rect x="180" y="196" width="40" height="30" fill="#5a1410"/>' +
      palm(40) + palm(362) +
      /* flag */
      '<rect x="330" y="20" width="3" height="80" fill="#ccc"/>' +
      '<g class="fs-flag"><rect x="333" y="22" width="50" height="30" fill="#ce1126"/><path d="M333 22 L349 22 L383 42 L383 52 L367 52 L333 32z" fill="#fff"/><path d="M337 22 L346 22 L383 45 L383 52 L371 52 L333 28 L333 25z" fill="#000"/></g>' +
      /* steel pan on its stand + sticks */
      '<ellipse cx="120" cy="214" rx="34" ry="10" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><ellipse cx="120" cy="212" rx="26" ry="6" fill="#aeb4bd"/>' +
      '<path d="M100 222 L94 246 M140 222 L146 246" stroke="#333" stroke-width="3"/>' +
      '<rect class="fs-stick" x="96" y="186" width="3" height="22" rx="1.5" fill="#7a5a3a" transform="rotate(-20 97 208)"/>' +
      '<rect class="fs-stick fs-stick2" x="140" y="186" width="3" height="22" rx="1.5" fill="#7a5a3a" transform="rotate(20 141 208)"/>' +
      '<text class="fs-note" x="160" y="196" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="fs-note fs-note2" x="80" y="190" font-size="14" fill="' + GOLD + '">&#9835;</text>' +
      '<rect x="0" y="226" width="400" height="34" fill="#d9c9a3"/><rect x="0" y="226" width="400" height="4" fill="#b3a27c"/>' +
      txt("TRINIDAD", 300, 250, 12, "#5a1410", 'letter-spacing="5"'),
      sky("rh", "#5fb4e6", "#d8eef8"));
  }

  /* 4. Orlando Arena, 1993: the court, the rim and backboard, the ball going down, camera flashes in the stands */
  function orena() {
    let crowd = "";
    for (let i = 0; i < 40; i++) crowd += '<circle cx="' + (6 + i * 10) + '" cy="' + (100 + (i % 3) * 8) + '" r="4" fill="' + ["#3a3550", "#4a4466", "#2f2b44"][i % 3] + '"/>';
    let flashes = "";
    for (let i = 0; i < 9; i++) flashes += '<circle class="fs-fl fs-fl' + (i % 3 + 1) + '" cx="' + (20 + i * 44) + '" cy="' + (98 + (i % 2) * 12) + '" r="3" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#oa)"/>' +
      /* roof lights */
      [60, 140, 260, 340].map(x => '<rect x="' + (x - 20) + '" y="10" width="40" height="6" rx="2" fill="#fff8d6" opacity=".9"/>').join("") +
      /* scoreboard */
      '<rect x="150" y="20" width="100" height="44" rx="4" fill="#111" stroke="#555" stroke-width="2"/>' +
      txt("HOME", 175, 36, 8, "#bbb") + txt("AWAY", 225, 36, 8, "#bbb") +
      txt("102", 175, 56, 16, ORANGE) + txt("100", 225, 56, 16, ORANGE) +
      /* stands */
      '<rect x="0" y="84" width="400" height="44" fill="#1f1c30"/>' + crowd + flashes +
      '<rect x="0" y="126" width="400" height="6" fill="' + TEAL + '"/>' +
      /* hardwood floor */
      '<rect x="0" y="132" width="400" height="128" fill="#d9a35c"/>' +
      [150, 172, 196, 222].map(y => '<path d="M0 ' + y + 'h400" stroke="#c48c48" stroke-width="1"/>').join("") +
      '<path d="M120 260 L160 168 L240 168 L280 260" stroke="#fff" stroke-width="3" fill="none"/><path d="M160 168 Q200 200 240 168" stroke="#fff" stroke-width="3" fill="none"/>' +
      /* stanchion + backboard + rim + net */
      '<rect x="190" y="140" width="20" height="40" fill="#222"/><path d="M200 140 L200 96" stroke="#222" stroke-width="8"/>' +
      '<rect x="160" y="62" width="80" height="50" fill="#e8f4ff" opacity=".7" stroke="#fff" stroke-width="3"/><rect x="186" y="86" width="28" height="20" fill="none" stroke="#e63946" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="112" rx="16" ry="4" fill="none" stroke="' + ORANGE + '" stroke-width="3"/>' +
      '<path d="M186 113 L190 130 L210 130 L214 113 M193 113 L196 130 M200 113 L200 130 M207 113 L204 130" stroke="#fff" stroke-width="1.5" fill="none"/>' +
      /* the ball */
      '<g class="fs-ball"><circle cx="200" cy="100" r="9" fill="#e8742a"/><path d="M191 100h18M200 91v18" stroke="#5a2a10" stroke-width="1.2"/></g>' +
      txt("ORLANDO", 56, 250, 12, "#5a3a1a", 'letter-spacing="3"'),
      sky("oa", "#0c0a18", "#2a2440"));
  }

  /* 5. Clarendon Rd & E Fifty-Ninth St (spelled out, no digit nine): green signs, the white Dutch farmhouse behind the picket fence, the wall tagged FU-SCHNICKENS */
  function corner() {
    let pickets = "";
    for (let x = 4; x < 300; x += 10) pickets += '<path d="M' + x + ' 136 l3-6 l3 6 v20 h-6z" fill="#efe9dc"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fc)"/>' + stars(14, 40) +
      /* trees */
      '<circle cx="40" cy="80" r="30" fill="#2f5d3a"/><circle cx="280" cy="74" r="28" fill="#2f5d3a"/>' +
      /* farmhouse: white shingles, long low roof with flared eaves, chimney, red door */
      '<path d="M70 98 L150 46 L230 98z" fill="#4a4a50"/><path d="M60 102 Q70 96 80 98 L220 98 Q230 96 240 102 L232 106 L68 106z" fill="#3c3c42"/>' +
      '<rect x="134" y="36" width="12" height="22" fill="#7a3f2e"/>' +
      '<rect x="78" y="104" width="144" height="40" fill="#f2efe6"/>' +
      [112, 120, 128, 136].map(y => '<path d="M78 ' + y + 'h144" stroke="#d8d3c6" stroke-width="1"/>').join("") +
      [92, 120, 176, 204].map(x => '<rect class="fs-tw fs-tw' + (x % 3 + 1) + '" x="' + x + '" y="110" width="12" height="16" fill="#ffd98a" opacity=".85" stroke="#4a4a50" stroke-width="1.5"/>').join("") +
      '<rect x="146" y="114" width="16" height="30" fill="#8b2a22"/>' +
      pickets +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#3b3d44"/>' +
      (() => { let b = ""; for (let y = 156; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("FU-SCHNICKENS", 12, 196, 38, ORANGE, -5) + tag("CAN WE ROCK", 30, 222, 18, TEAL, -3) + tag("CHIP FU", 206, 220, 20, GOLD, -6) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="fs-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="fs-car fs-car2"><rect x="0" y="240" width="40" height="11" rx="4" fill="' + ORANGE + '"/><circle cx="9" cy="251" r="4" fill="#111"/><circle cx="31" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Clarendon Rd", 349, 82, 11.5, "#fff") +
      '<rect x="300" y="92" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E Fifty-Ninth St", 349, 107, 9.5, "#fff") +
      '<circle class="fs-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("fc", "#0f0b14", "#33263a"));
  }

  window.SCENES = { junius: junius, palace: palace, redhouse: redhouse, orena: orena, corner: corner };
})();
