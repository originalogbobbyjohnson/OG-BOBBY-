/* Bed-Stuy opening scenes for the Yasiin Bey game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes petal{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-26px,140px) rotate(300deg);opacity:0}}' +
    '.ptl{transform-box:fill-box;transform-origin:50% 50%;animation:petal 5.5s linear infinite}.ptl2{animation-delay:1.4s}.ptl3{animation-delay:2.8s}.ptl4{animation-delay:4.1s}' +
    '@keyframes steam{0%{transform:translateY(0) scale(1);opacity:0}25%{opacity:.7}100%{transform:translateY(-40px) scale(1.8);opacity:0}}' +
    '.stm{transform-box:fill-box;transform-origin:50% 100%;animation:steam 3s ease-out infinite}.stm2{animation-delay:1s}.stm3{animation-delay:2s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob .6s ease-in-out infinite}.bob2{animation-delay:.3s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(16px,-48px);opacity:0}}' +
    '.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
    '@keyframes twinkle{0%,100%{opacity:1}50%{opacity:.3}}' +
    '.tw{animation:twinkle 1.8s ease-in-out infinite}.tw2{animation-delay:.6s}.tw3{animation-delay:1.2s}' +
    '@keyframes sway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 4s ease-in-out infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3.2s ease-in-out infinite}.beam2{animation-delay:1.6s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* five-point star path centred on x,y */
  const star = (x, y, r, fill, cls) => {
    let d = "";
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; d += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); }
    return '<path' + (cls ? ' class="' + cls + '"' : '') + ' d="' + d + 'Z" fill="' + fill + '"/>';
  };
  const G = "#6cbe45", GOLD = "#ffcf3f", PINK = "#ff6fb5";

  /* brownstone row used behind several scenes */
  const brownstones = (y0, n, tones) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const w = 400 / n, x = i * w, tone = tones[i % tones.length];
      s += '<rect x="' + x + '" y="' + y0 + '" width="' + w + '" height="' + (260 - y0) + '" fill="' + tone + '"/>' +
        '<rect x="' + (x - 1) + '" y="' + (y0 - 6) + '" width="' + (w + 2) + '" height="8" fill="#2e1d14"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
        const lit = (i * 3 + r + c) % 4 === 0;
        s += '<rect' + (lit ? ' class="flk flk' + (2 + (i % 2)) + '"' : '') + ' x="' + (x + 8 + c * (w - 16) / 3) + '" y="' + (y0 + 12 + r * 34) + '" width="' + ((w - 16) / 3 - 8) + '" height="22" fill="' + (lit ? "#ffd27a" : "#2b1b14") + '" stroke="#4a2e20" stroke-width="1.5"/>';
      }
    }
    return s;
  };

  /* 1. The G pulling into Bedford-Nostrand Avs, underground on the Crosstown line: white tile, green tile band, black columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 180; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6dccf" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v180" stroke="#d6dccf" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="126" width="30" height="22" rx="3" fill="#eaffd9" opacity=".9"/>';
    let lights = "";
    for (let x = 30; x < 400; x += 90) lights += '<rect class="flk' + (x % 180 ? " flk2" : "") + '" x="' + x + '" y="4" width="54" height="5" rx="2" fill="#fbfff2"/>';
    return svg(
      '<rect width="400" height="180" fill="#eef0e6"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#22261f"/>' + lights +
      /* green tile band with a dark green border */
      '<rect x="0" y="22" width="400" height="22" fill="#2f6b2a"/><rect x="0" y="26" width="400" height="14" fill="#7cc35a"/>' +
      /* station sign */
      '<rect x="62" y="56" width="276" height="34" rx="4" fill="#111"/>' +
      '<rect x="62" y="56" width="276" height="4" fill="#fff"/>' +
      '<text x="74" y="81" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Bedford–Nostrand Avs</text>' +
      bullet(318, 74, "G", G) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="114" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="156" width="304" height="5" fill="' + G + '"/>' + windows +
        '<circle cx="304" cy="168" r="4" fill="#fff6c2"/>' +
        bullet(296, 134, "G", G) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#23251f"/>' +
      '<rect x="14" y="0" width="12" height="186" fill="#1b1d18"/><rect x="374" y="0" width="12" height="186" fill="#1b1d18"/>' +
      tag("BLACK STAR", 24, 238, 28, GOLD, -4) + tag("MOS DEF", 262, 242, 28, PINK, -8),
      "");
  }

  /* 2. The Magnolia Grandiflora on Lafayette Av: the old Southern magnolia in front of the brownstones, dark glossy leaves, big white blossoms, petals drifting */
  function magnolia() {
    let leaves = "";
    const blobs = [[200, 92, 92, 62], [140, 118, 60, 44], [262, 116, 62, 46], [200, 54, 60, 36], [116, 150, 40, 28], [286, 152, 42, 28]];
    blobs.forEach(([x, y, rx, ry], i) => { leaves += '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + (i % 2 ? "#1f4a2a" : "#245a31") + '"/>'; });
    let gloss = "";
    for (let i = 0; i < 40; i++) { const x = 110 + (i * 53) % 190, y = 40 + (i * 37) % 120; gloss += '<ellipse cx="' + x + '" cy="' + y + '" rx="7" ry="3" transform="rotate(' + ((i * 47) % 180) + ' ' + x + ' ' + y + ')" fill="#3d7a46" opacity=".9"/>'; }
    let flowers = "";
    [[150, 90], [196, 60], [240, 98], [178, 128], [262, 138], [122, 136], [222, 46], [206, 110], [284, 108], [160, 160]].forEach(([x, y]) => {
      flowers += '<g><ellipse cx="' + (x - 5) + '" cy="' + y + '" rx="6" ry="4" fill="#fffaf0"/><ellipse cx="' + (x + 5) + '" cy="' + y + '" rx="6" ry="4" fill="#fffaf0"/><ellipse cx="' + x + '" cy="' + (y - 4) + '" rx="4" ry="6" fill="#fff"/><circle cx="' + x + '" cy="' + y + '" r="2" fill="#e8d27a"/></g>';
    });
    let petals = "";
    [[150, 120, ""], [230, 110, " ptl2"], [190, 140, " ptl3"], [270, 130, " ptl4"]].forEach(([x, y, c]) => { petals += '<ellipse class="ptl' + c + '" cx="' + x + '" cy="' + y + '" rx="4" ry="2.5" fill="#fffaf0"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) +
      brownstones(70, 4, ["#6e4630", "#7b5038", "#634029", "#74492f"]) +
      /* sidewalk + the low brick wall that protects the tree */
      '<rect x="0" y="214" width="400" height="46" fill="#5d5f63"/><rect x="0" y="212" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="96" y="196" width="208" height="20" fill="#8a3b2a"/><rect x="96" y="194" width="208" height="4" fill="#b6a58e"/>' +
      /* iron fence on top of the wall */
      (function () { let f = ""; for (let x = 100; x <= 300; x += 10) f += '<rect x="' + x + '" y="178" width="2" height="18" fill="#111"/>'; return f + '<rect x="98" y="180" width="206" height="2" fill="#111"/>'; })() +
      /* trunk */
      '<path d="M192 196q-2-40 4-70q4 30 10 70z" fill="#5b4a3a"/><path d="M196 140l-30-20M200 132l34-22" stroke="#5b4a3a" stroke-width="6" stroke-linecap="round"/>' +
      '<g class="sway">' + leaves + gloss + flowers + '</g>' + petals +
      /* small plaque */
      '<rect x="154" y="200" width="92" height="12" rx="2" fill="#1f3d27" stroke="#c9a24a" stroke-width="1"/>' +
      '<text x="200" y="209" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7" letter-spacing="1" fill="#f2e6c2">MAGNOLIA GRANDIFLORA</text>' +
      '<rect x="22" y="22" width="132" height="24" rx="3" fill="#0f6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="88" y="39" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Lafayette Av</text>',
      sky("g2", "#0f1730", "#3d4f7a"));
  }

  /* 3. Pratt Institute: the red-brick Romanesque Main Building with arched windows and its tower, the old engine-room chimney steaming behind */
  function pratt() {
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) {
      if (c === 4) continue;
      const x = 52 + c * 34, y = 104 + r * 26, lit = (r + c) % 3 === 0;
      wins += '<path' + (lit ? ' class="flk flk' + (2 + (c % 2)) + '"' : '') + ' d="M' + x + ' ' + (y + 16) + 'v-10a7 7 0 0 1 14 0v10z" fill="' + (lit ? "#ffd889" : "#2a1410") + '" stroke="#e8d8b8" stroke-width="1.2"/>';
    }
    let lawn = "";
    for (let x = 0; x < 400; x += 6) lawn += '<path d="M' + x + ' 232l2-6 2 6" fill="#2f6b2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(16) +
      /* chimney with steam */
      '<rect x="318" y="34" width="22" height="80" fill="#7a2f22"/><rect x="314" y="30" width="30" height="8" fill="#5a2018"/>' +
      '<ellipse class="stm" cx="329" cy="26" rx="10" ry="7" fill="#e7e9ef" opacity=".6"/><ellipse class="stm stm2" cx="331" cy="24" rx="9" ry="6" fill="#e7e9ef" opacity=".6"/><ellipse class="stm stm3" cx="327" cy="25" rx="8" ry="6" fill="#e7e9ef" opacity=".6"/>' +
      /* main block, red brick with brownstone bands */
      '<rect x="40" y="92" width="320" height="130" fill="#9a3d2b"/>' +
      '<rect x="40" y="92" width="320" height="6" fill="#5a2f22"/><rect x="40" y="126" width="320" height="3" fill="#c7a27a"/><rect x="40" y="178" width="320" height="3" fill="#c7a27a"/>' +
      wins +
      /* central tower with a pyramid roof */
      '<rect x="172" y="50" width="56" height="172" fill="#8e3626"/>' +
      '<path d="M166 52l34-34 34 34z" fill="#3c4a4e"/><rect x="166" y="50" width="68" height="5" fill="#5a2f22"/>' +
      '<circle cx="200" cy="74" r="11" fill="#f4ecd8" stroke="#5a2f22" stroke-width="2"/><path d="M200 74v-7M200 74l5 3" stroke="#222" stroke-width="1.5"/>' +
      /* big Romanesque arched entry */
      '<path d="M182 222v-36a18 18 0 0 1 36 0v36z" fill="#2a1410" stroke="#c7a27a" stroke-width="3"/>' +
      '<path class="flk" d="M188 222v-30a12 12 0 0 1 24 0v30z" fill="#ffd27a" opacity=".6"/>' +
      '<rect x="168" y="222" width="64" height="6" fill="#b5b0a6"/><rect x="160" y="228" width="80" height="6" fill="#a19c92"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#244a24"/>' + lawn +
      '<text x="200" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="4" fill="#f2e6c2">PRATT · CLINTON HILL</text>',
      sky("g3", "#140b1e", "#4c3256"));
  }

  /* 4. The block party on Quincy St: a stage between the brownstones, string lights, speakers, hands up, the music going */
  function block() {
    let bulbs = "";
    for (let i = 0; i < 20; i++) { const x = 10 + i * 20, y = 40 + Math.sin(i / 19 * Math.PI) * 16; bulbs += '<circle class="tw tw' + (1 + i % 3) + '" cx="' + x + '" cy="' + y + '" r="3" fill="' + [GOLD, PINK, "#9ff0ff"][i % 3] + '"/>'; }
    let crowd = "";
    for (let i = 0; i < 16; i++) {
      const x = 12 + i * 25, h = 26 + (i * 7) % 12, cls = i % 2 ? "bob" : "bob bob2";
      crowd += '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (226 - h) + '" r="8" fill="#0b0b12"/><rect x="' + (x - 10) + '" y="' + (232 - h) + '" width="20" height="' + (h + 20) + '" rx="8" fill="#0b0b12"/>' +
        (i % 3 === 0 ? '<path d="M' + (x + 6) + ' ' + (236 - h) + 'l10-26" stroke="#0b0b12" stroke-width="5" stroke-linecap="round"/>' : '') + '</g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      brownstones(64, 5, ["#6e4630", "#5f3c28", "#7b5038", "#694330", "#74492f"]) +
      /* string lights */
      '<path d="M0 40Q200 72 400 40" fill="none" stroke="#222" stroke-width="1"/>' + bulbs +
      /* stage */
      '<rect x="96" y="130" width="208" height="62" fill="#14141c"/><rect x="90" y="124" width="220" height="8" fill="#2a2a36"/>' +
      '<rect class="beam" x="130" y="132" width="10" height="60" fill="' + GOLD + '" opacity=".25"/><rect class="beam beam2" x="260" y="132" width="10" height="60" fill="' + PINK + '" opacity=".25"/>' +
      '<text x="200" y="152" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="3" fill="' + GOLD + '">BLOCK PARTY</text>' +
      star(200, 172, 12, GOLD, "tw") +
      /* speakers */
      '<rect x="72" y="120" width="26" height="72" rx="2" fill="#1b1b22"/><circle cx="85" cy="140" r="8" fill="#333"/><circle cx="85" cy="170" r="10" fill="#333"/>' +
      '<rect x="302" y="120" width="26" height="72" rx="2" fill="#1b1b22"/><circle cx="315" cy="140" r="8" fill="#333"/><circle cx="315" cy="170" r="10" fill="#333"/>' +
      '<text class="nt" x="96" y="114" font-size="16" fill="' + GOLD + '">♪</text><text class="nt nt2" x="300" y="112" font-size="16" fill="' + PINK + '">♫</text><text class="nt nt3" x="200" y="118" font-size="14" fill="#9ff0ff">♪</text>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2a30"/>' + crowd +
      '<rect x="292" y="14" width="98" height="22" rx="3" fill="#0f6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="341" y="30" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Quincy St</text>',
      sky("g4", "#0b0a1c", "#2e2048"));
  }

  /* 5. Bedford Av and Lafayette Av, over the G: green street signs, streetlight, the tag wall under the stars */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 220; y += 12) for (let x = (y / 12) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="10" fill="#6a2e22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(30) +
      star(330, 40, 16, GOLD, "tw") +
      '<rect x="0" y="94" width="400" height="128" fill="#4a1f17"/>' + bricks +
      tag("BLACK STAR", 30, 150, 34, GOLD, -5) + tag("UMI SAYS", 150, 200, 30, PINK, -3) + tag("MOS DEF", 250, 140, 30, "#9ff0ff", -8) +
      /* sidewalk + subway entrance globe */
      '<rect x="0" y="222" width="400" height="38" fill="#5d5f63"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="332" y="176" width="4" height="46" fill="#1d2a1d"/><circle class="flk" cx="334" cy="172" r="7" fill="#3fd17a"/>' +
      /* streetlight */
      '<rect x="58" y="40" width="5" height="182" fill="#2f3a2f"/><path d="M60 42q0-12 20-12h16" stroke="#2f3a2f" stroke-width="4" fill="none"/>' +
      '<rect x="92" y="28" width="20" height="7" rx="2" fill="#2f3a2f"/><path class="flk" d="M94 35h16l12 40h-40z" fill="#ffe7a1" opacity=".22"/>' +
      /* street signs */
      '<rect x="20" y="56" width="104" height="20" rx="3" fill="#0f6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="72" y="71" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Bedford Av</text>' +
      '<rect x="20" y="78" width="104" height="20" rx="3" fill="#0f6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="72" y="93" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Lafayette Av</text>',
      sky("g5", "#090a1c", "#2a2246"));
  }

  window.SCENES = { train: train, magnolia: magnolia, pratt: pratt, block: block, corner: corner };
})();
