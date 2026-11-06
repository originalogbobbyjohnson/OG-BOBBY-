/* Flipmode Squad group game (NYC map, Brooklyn: East Flatbush. "Straight from the bullpen and the street corners of East Flatbush, Brooklyn" - The Imperial Intro).
   1. The B35 pulling up at Church Av & Utica Av (every subway stop around East Flatbush is already somebody's).
   2. The Limelight, 6th Av & W 20th St: the brownstone Gothic church club, everybody on the line outside, searchlights.
   3. The Imperial six on the route board: East Flatbush, Queensbridge, Brick City, Strong Island (The Imperial Intro roll call).
   4. A summer block party in the Forties of East Flatbush ("from the forty of East Flatbush"): sound system, hydrant, the crowd doing the cha cha.
   5. Church Av & E 40 St: green signs, FLIPMODE on the wall, the Church Av storefront row with the island flags strung across.
   400 x 260 SVGs. Classes prefixed fm-. No logos, no faces. No 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fmflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.fm-flk{animation:fmflick 2.4s infinite}' +
    '@keyframes fmcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.fm-car{animation:fmcar 7s linear infinite}.fm-car2{animation-delay:-3.5s}' +
    '@keyframes fmsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.fm-beam{transform-box:fill-box;transform-origin:50% 100%;animation:fmsweep 4s ease-in-out infinite}.fm-beam2{animation-delay:-2s}' +
    '@keyframes fmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.fm-bob{animation:fmbob .55s ease-in-out infinite}.fm-bob2{animation-delay:.27s}' +
    '@keyframes fmblink{0%,100%{opacity:.25}50%{opacity:1}}.fm-bl{animation:fmblink 1.6s ease-in-out infinite}.fm-bl2{animation-delay:.5s}.fm-bl3{animation-delay:1s}' +
    '@keyframes fmpump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.fm-pump{transform-box:fill-box;transform-origin:50% 50%;animation:fmpump .45s ease-in-out infinite}' +
    '@keyframes fmspray{0%{opacity:.9;transform:translate(0,0)}100%{opacity:0;transform:translate(40px,-30px)}}.fm-spray{animation:fmspray 1s linear infinite}.fm-spray2{animation-delay:.33s}.fm-spray3{animation-delay:.66s}' +
    '@keyframes fmdot{0%{transform:translate(0,0)}33%{transform:translate(96px,-30px)}66%{transform:translate(190px,10px)}100%{transform:translate(286px,-14px)}}.fm-dot{animation:fmdot 6s ease-in-out infinite alternate}' +
    '@keyframes fmflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fm-flag{transform-box:fill-box;transform-origin:0 0;animation:fmflag 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 151 + 37) % 400) + '" cy="' + (6 + (i * i * 29 + i * 11) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#ff3b30", GOLD = "#ffd23f", TEAL = "#1fd1a5", CREAM = "#f4ead8", BLUE = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const flagJM = (x, y) => '<g class="fm-flag"><rect x="' + x + '" y="' + y + '" width="24" height="14" fill="#009b3a"/><path d="M' + x + ' ' + y + 'l24 14M' + (x + 24) + ' ' + y + 'l-24 14" stroke="#fed100" stroke-width="3"/><path d="M' + x + ' ' + y + 'l10 7l-10 7zM' + (x + 24) + ' ' + y + 'l-10 7l10 7z" fill="#000"/></g>';
  const flagTT = (x, y) => '<g class="fm-flag"><rect x="' + x + '" y="' + y + '" width="24" height="14" fill="#ce1126"/><path d="M' + (x + 2) + ' ' + y + 'l18 14" stroke="#fff" stroke-width="5"/><path d="M' + (x + 2) + ' ' + y + 'l18 14" stroke="#000" stroke-width="3"/></g>';
  const flagHT = (x, y) => '<g class="fm-flag"><rect x="' + x + '" y="' + y + '" width="24" height="7" fill="#00209f"/><rect x="' + x + '" y="' + (y + 7) + '" width="24" height="7" fill="#d21034"/><rect x="' + (x + 9) + '" y="' + (y + 4) + '" width="6" height="6" fill="#fff"/></g>';

  /* 1. Church Av & Utica Av: the B35 pulling up to the stop, the bus stop sign, the Church Av storefronts */
  function bus() {
    const shops = [["#f2c14e", "BAKERY"], ["#2e8b57", "ROTI"], ["#c0392b", "BARBER"]];
    return svg(
      '<rect width="400" height="260" fill="url(#fmbs)"/>' +
      /* buildings */
      '<rect x="0" y="40" width="400" height="140" fill="#8a5a44"/>' +
      [0, 100, 200, 300].map((x, i) => '<rect x="' + (x + 6) + '" y="54" width="88" height="38" fill="#3a2a2a"/>' +
        '<rect x="' + (x + 10) + '" y="58" width="36" height="30" fill="#ffd98a" opacity="' + (i % 2 ? ".85" : ".4") + '"/><rect x="' + (x + 52) + '" y="58" width="36" height="30" fill="#ffd98a" opacity="' + (i % 2 ? ".4" : ".85") + '"/>').join("") +
      shops.map((s, i) => '<rect x="' + (i * 133 + 6) + '" y="104" width="122" height="20" fill="' + s[0] + '"/>' + txt(s[1], i * 133 + 67, 119, 12, "#111", 'letter-spacing="2"') +
        '<rect x="' + (i * 133 + 10) + '" y="126" width="114" height="52" fill="#cfe2f5" opacity=".7"/>').join("") +
      /* sidewalk */
      '<rect x="0" y="178" width="400" height="14" fill="#9a9a9e"/><rect x="0" y="192" width="400" height="68" fill="#3f4045"/>' +
      '<path d="M0 236h400" stroke="#e6c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      /* stop sign pole */
      '<rect x="360" y="100" width="4" height="80" fill="#888"/><rect x="342" y="100" width="40" height="30" rx="3" fill="' + BLUE + '"/>' +
      txt("B35", 362, 113, 10, "#fff") + txt("B46", 362, 125, 10, "#fff") +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="20" y="132" width="300" height="78" rx="8" fill="#f4f4f2" stroke="#9aa0a6" stroke-width="2"/>' +
        '<rect x="20" y="186" width="300" height="10" fill="' + BLUE + '"/>' +
        [40, 84, 128, 172, 216, 260].map(x => '<rect x="' + x + '" y="142" width="36" height="30" rx="3" fill="#2b3440"/>').join("") +
        '<rect x="298" y="140" width="20" height="40" rx="2" fill="#2b3440"/>' +
        '<rect x="290" y="134" width="30" height="8" rx="2" fill="#111"/><text x="305" y="141" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">B35</text>' +
        '<circle cx="70" cy="212" r="12" fill="#111"/><circle cx="70" cy="212" r="5" fill="#777"/><circle cx="268" cy="212" r="12" fill="#111"/><circle cx="268" cy="212" r="5" fill="#777"/>' +
        '<circle cx="316" cy="198" r="3" fill="#fff6c2"/>' +
      '</g>' +
      person(380, 150, "#1b1b1b") +
      txt("CHURCH AV · UTICA AV", 160, 254, 10, CREAM, 'letter-spacing="3"'),
      sky("fmbs", "#2b3a6b", "#e88d5a"));
  }

  /* 2. The Limelight, 6th Av & W 20th St: the brownstone Gothic church turned club, the square tower, the rope, everybody on the line outside */
  function limelight() {
    let stone = "";
    for (let y = 70; y < 200; y += 10) for (let x = (y / 10) % 2 ? 100 : 92; x < 330; x += 18) stone += '<rect x="' + x + '" y="' + y + '" width="16" height="8" fill="#6b4a36" opacity=".55"/>';
    const line = [];
    for (let i = 0; i < 9; i++) line.push(person(20 + i * 20, 192, i % 2 ? "#141418" : "#1e1e24", "fm-bob" + (i % 2 ? " fm-bob2" : "")));
    return svg(
      '<rect width="400" height="260" fill="url(#fmlm)"/>' + stars(14) +
      '<g class="fm-beam"><path d="M70 230l-30-220h40z" fill="#c9b6ff" opacity=".18"/></g><g class="fm-beam fm-beam2"><path d="M340 230l-20-220h40z" fill="#ffd23f" opacity=".16"/></g>' +
      /* church body */
      '<path d="M140 92l70-46l70 46v120H140z" fill="#7a5640"/>' +
      /* tower */
      '<rect x="88" y="40" width="56" height="172" fill="#7d5a43"/>' + [88, 102, 116, 130].map(x => '<rect x="' + x + '" y="30" width="10" height="12" fill="#7d5a43"/>').join("") +
      '<g clip-path="url(#fmch)">' + stone + '</g>' +
      '<path d="M104 64v-12q12-14 24 0v12z" fill="#2a1830"/><path d="M104 110v-18q12-16 24 0v18z" fill="#3a1a4a"/>' +
      /* rose + lancet windows glowing purple */
      '<circle cx="210" cy="96" r="18" fill="#6a2a9a" stroke="#4a3426" stroke-width="4"/><circle class="fm-bl" cx="210" cy="96" r="10" fill="#c58cff"/>' +
      [160, 236].map(x => '<path d="M' + x + ' 170v-36q12-18 24 0v36z" fill="#4a1a6a"/><path class="fm-bl fm-bl2" d="M' + (x + 4) + ' 166v-30q8-12 16 0v30z" fill="#b06cff" opacity=".8"/>').join("") +
      /* the door */
      '<path d="M190 212v-30q20-24 40 0v30z" fill="#120a14" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* rope + stanchions */
      '<path d="M14 206q40 10 80 0q40 10 80 0" stroke="#b3122b" stroke-width="3" fill="none"/>' + [12, 92, 172].map(x => '<rect x="' + x + '" y="198" width="4" height="16" fill="' + GOLD + '"/>').join("") +
      line.join("") +
      '<rect x="0" y="212" width="400" height="48" fill="#3a3a40"/><rect x="0" y="212" width="400" height="4" fill="#77797d"/>' +
      '<g class="fm-car"><rect x="0" y="232" width="50" height="14" rx="4" fill="#f7c600"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="40" cy="246" r="4" fill="#111"/></g>' +
      txt("6TH AV · W 20TH ST", 300, 230, 10, CREAM, 'letter-spacing="2"') +
      tag("ON THE LINE OUTSIDE", 236, 254, 15, GOLD, -3),
      sky("fmlm", "#08061a", "#3a1452") + '<clipPath id="fmch"><path d="M140 92l70-46l70 46v120H140z"/><rect x="88" y="40" width="56" height="172"/></clipPath>');
  }

  /* 3. The Imperial six on the route board: East Flatbush, Queensbridge, Brick City, Strong Island, a light running the line, the crown on top */
  function imperial() {
    const stops = [[52, 168, "EAST FLATBUSH"], [148, 138, "QUEENSBRIDGE"], [242, 178, "BRICK CITY"], [338, 154, "STRONG ISLAND"]];
    let st = "";
    stops.forEach((s, i) => { st += '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="11" fill="#fff" stroke="#111" stroke-width="4"/>' + txt(s[2], s[0], s[1] + (i % 2 ? -20 : 28), 10, CREAM, 'letter-spacing="1"'); });
    let stars6 = "";
    for (let i = 0; i < 6; i++) stars6 += '<path class="fm-bl fm-bl' + (i % 3 + 1) + '" transform="translate(' + (120 + i * 32) + ' 92)" d="M0 -8l2.4 5.4l5.6 .6l-4.2 3.8l1.2 5.6l-5 -2.8l-5 2.8l1.2 -5.6l-4.2 -3.8l5.6 -.6z" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#14121c"/>' +
      '<rect x="14" y="14" width="372" height="232" rx="10" fill="#1d1b28" stroke="#3a3650" stroke-width="3"/>' +
      /* crown */
      '<path d="M170 64l8-26l14 14l8-20l8 20l14-14l8 26z" fill="' + GOLD + '" stroke="#8a6a00" stroke-width="2"/><rect x="170" y="64" width="60" height="8" fill="' + GOLD + '"/>' +
      '<circle cx="200" cy="30" r="3" fill="' + RED + '"/>' +
      txt("THE IMPERIAL", 200, 82, 10, GOLD, 'letter-spacing="4"') + stars6 +
      /* route line */
      '<path d="M52 168L148 138L242 178L338 154" stroke="' + RED + '" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      st +
      '<g class="fm-dot"><circle cx="52" cy="168" r="6" fill="' + TEAL + '"/><circle cx="52" cy="168" r="11" fill="' + TEAL + '" opacity=".3"/></g>' +
      txt("SIX OF THE UNIVERSAL FLIPMODE SQUAD", 200, 230, 10, CREAM, 'letter-spacing="2" opacity=".85"'));
  }

  /* 4. Block party in the Forties of East Flatbush: rowhouses, the speaker stacks pumping, the hydrant spraying, the crowd doing the cha cha */
  function blockparty() {
    const houses = [];
    for (let i = 0; i < 5; i++) { const x = i * 80; houses.push('<rect x="' + x + '" y="60" width="78" height="120" fill="' + ["#9a5b44", "#b0784f", "#8a4b3c", "#a86a4a", "#94584a"][i] + '"/>' +
      '<rect x="' + x + '" y="56" width="78" height="6" fill="#3a2418"/>' +
      [0, 1].map(r => [0, 1].map(c => '<rect x="' + (x + 12 + c * 34) + '" y="' + (74 + r * 36) + '" width="20" height="24" fill="' + ((i + r + c) % 3 ? "#ffd98a" : "#2a2230") + '"/>').join("")).join("") +
      '<path d="M' + (x + 30) + ' 180v-26h18v26" fill="#3a2418"/>'); }
    let lights = "";
    for (let i = 0; i < 20; i++) lights += '<circle class="fm-bl fm-bl' + (i % 3 + 1) + '" cx="' + (10 + i * 20) + '" cy="' + (44 + Math.abs(10 - i) * 0.8) + '" r="3" fill="' + [RED, GOLD, TEAL][i % 3] + '"/>';
    const crowd = [];
    for (let x = 120; x < 320; x += 22) crowd.push(person(x, 196, "#121216", "fm-bob" + (x % 44 ? " fm-bob2" : "")));
    const speaker = x => '<rect x="' + x + '" y="150" width="44" height="76" fill="#151517" stroke="#444" stroke-width="2"/><g class="fm-pump"><circle cx="' + (x + 22) + '" cy="172" r="13" fill="#2a2a2e" stroke="#666" stroke-width="2"/><circle cx="' + (x + 22) + '" cy="172" r="5" fill="#555"/></g><g class="fm-pump"><circle cx="' + (x + 22) + '" cy="206" r="13" fill="#2a2a2e" stroke="#666" stroke-width="2"/><circle cx="' + (x + 22) + '" cy="206" r="5" fill="#555"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fmbp)"/>' + houses.join("") +
      '<path d="M0 40q200 28 400 0" stroke="#222" stroke-width="1.5" fill="none"/>' + lights +
      '<rect x="0" y="180" width="400" height="80" fill="#4a4a50"/><rect x="0" y="180" width="400" height="5" fill="#8a8a8e"/>' +
      speaker(14) + speaker(62) +
      /* hydrant */
      '<rect x="352" y="206" width="16" height="22" rx="3" fill="#d6322b"/><rect x="348" y="212" width="24" height="5" fill="#a5221d"/><rect x="355" y="200" width="10" height="7" rx="3" fill="#d6322b"/>' +
      [1, 2, 3].map(n => '<g class="fm-spray fm-spray' + n + '"><circle cx="350" cy="212" r="3" fill="#9fd3ff"/><circle cx="342" cy="208" r="2" fill="#9fd3ff"/></g>').join("") +
      crowd.join("") +
      txt("THE FORTIES · EAST FLATBUSH", 220, 252, 10, CREAM, 'letter-spacing="3"') +
      tag("CHA CHA CHA", 128, 152, 22, GOLD, -5),
      sky("fmbp", "#ff9a52", "#ffd28a"));
  }

  /* 5. Church Av & E 40 St: green street signs, FLIPMODE tagged on the wall, the Church Av storefronts and the island flags strung across behind */
  function corner() {
    let flags = "";
    for (let i = 0; i < 8; i++) { const x = 20 + i * 46; flags += [flagJM, flagTT, flagHT][i % 3](x, 40 + (i % 2) * 4); }
    return svg(
      '<rect width="400" height="260" fill="url(#fmcn)"/>' + stars(10) +
      '<path d="M0 38q200 20 400 0" stroke="#bbb" stroke-width="1.2" fill="none"/>' + flags +
      /* storefront row */
      '<rect x="0" y="70" width="400" height="70" fill="#6a4a3c"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (i * 80 + 6) + '" y="78" width="68" height="18" fill="' + ["#f2c14e", "#2e8b57", "#c0392b", "#3a6ea5", "#8e44ad"][i] + '"/><rect x="' + (i * 80 + 8) + '" y="100" width="64" height="36" fill="#ffe7a8" opacity="' + (i % 2 ? ".55" : ".85") + '"/>').join("") +
      /* the wall */
      '<rect x="0" y="140" width="400" height="86" fill="#3c3e45"/>' +
      (() => { let b = ""; for (let y = 150; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#34363c" stroke-width="1"/>'; return b; })() +
      tag("FLIPMODE", 14, 200, 44, RED, -5) + tag("IMPERIAL", 196, 216, 20, GOLD, -4) + tag("WORD BOND", 28, 222, 14, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="fm-car fm-car2"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* pole + green signs */
      '<rect x="354" y="70" width="5" height="158" fill="#3d4b3f"/>' +
      '<rect x="300" y="74" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Church Av", 348, 90, 12, "#fff") +
      '<rect x="300" y="100" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E 40 St", 348, 116, 12, "#fff") +
      '<circle class="fm-flk" cx="356" cy="68" r="4" fill="#fff6c2"/>',
      sky("fmcn", "#0b0a18", "#2c2440"));
  }

  window.SCENES = { bus: bus, limelight: limelight, imperial: imperial, blockparty: blockparty, corner: corner };
})();
