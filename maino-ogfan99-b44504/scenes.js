/* Bed-Stuy opening scenes for the Maino game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes buzz{0%,100%{opacity:1}6%{opacity:.4}8%{opacity:1}60%{opacity:1}62%{opacity:.55}64%{opacity:1}}' +
    '.bz{animation:buzz 3.1s infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}' +
    '.bnc{animation:bounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 22s linear infinite}.cld2{animation-delay:-11s}' +
    '@keyframes fly{0%{transform:translate(0,0)}50%{transform:translate(90px,-8px)}100%{transform:translate(180px,0)}}' +
    '.fly{animation:fly 7s linear infinite}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.flp{transform-box:fill-box;transform-origin:50% 100%;animation:flap .4s infinite}' +
    '@keyframes floor{0%,19%{opacity:1}20%,100%{opacity:0}}' +
    '.fl{opacity:0;animation:floor 5s steps(1) infinite}.fl1{animation-delay:1s}.fl2{animation-delay:2s}.fl3{animation-delay:3s}.fl4{animation-delay:4s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.bannr{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}' +
    '@keyframes lr{0%,40%{opacity:1}41%,100%{opacity:.15}}@keyframes ly{0%,40%{opacity:.15}41%,55%{opacity:1}56%,100%{opacity:.15}}@keyframes lg{0%,55%{opacity:.15}56%,100%{opacity:1}}' +
    '.lr{animation:lr 6s infinite}.ly{animation:ly 6s infinite}.lg{animation:lg 6s infinite}' +
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
  const signText = (txt, x, y, size, len, fill) =>
    '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="' + size + '" letter-spacing="2" textLength="' + len + '" lengthAdjust="spacingAndGlyphs" fill="' + fill + '">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#ff3b30", GREEN = "#36d97f", ICE = "#7fd3ff", ACE = "#0039a6";

  /* 1. C train pulling into Utica Av, underground on Fulton St: Tuscan-red tile band, maroon border, black I-beam columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 176; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6d0c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v176" stroke="#d6d0c4" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [16, 200, 384].forEach(x => { cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="186" fill="#141414"/><rect x="' + (x - 9) + '" y="0" width="18" height="4" fill="#141414"/><rect x="' + (x - 9) + '" y="182" width="18" height="4" fill="#141414"/>'; });
    return svg(
      '<rect width="400" height="176" fill="#e9e4d8"/>' + tiles +
      '<rect x="0" y="0" width="400" height="10" fill="#201c1c"/>' +
      '<rect class="flk" x="50" y="3" width="60" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="240" y="3" width="60" height="4" rx="2" fill="#fffbe6"/>' +
      /* the Utica Av tile band: Tuscan red with a maroon border */
      '<rect x="0" y="20" width="400" height="24" fill="#5a0f17"/><rect x="0" y="24" width="400" height="16" fill="#9e3a2c"/>' +
      [105, 295].map(cx => '<rect x="' + (cx - 32) + '" y="22" width="64" height="20" fill="#e9e4d8" stroke="#5a0f17" stroke-width="2"/>' +
        '<text x="' + cx + '" y="37" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="1" fill="#5a0f17">UTICA</text>').join("") +
      /* station sign */
      '<rect x="40" y="54" width="130" height="34" rx="4" fill="#111"/><rect x="40" y="54" width="130" height="4" fill="#fff"/>' +
      '<text x="52" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Utica Av</text>' +
      bullet(130, 72, "A", ACE) + bullet(155, 72, "C", ACE) +
      '<rect x="230" y="54" width="130" height="34" rx="4" fill="#111"/><rect x="230" y="54" width="130" height="4" fill="#fff"/>' +
      '<text x="242" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Utica Av</text>' +
      bullet(320, 72, "A", ACE) + bullet(345, 72, "C", ACE) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + ACE + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(292, 132, "C", ACE) +
      '</g>' +
      /* platform edge + floor */
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#1e1717"/>' + cols +
      tag("LOBBY BOYZ", 26, 240, 28, RED, -4) + tag("MAINO", 278, 242, 32, GREEN, -8),
      "");
  }

  /* 2. Boys and Girls High on Fulton St: the block-long brown-brick building with cantilevered concrete bands, Kangaroos court out front */
  function school() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 12; i++) {
      const lit = (i * 3 + r) % 5 === 0;
      wins += '<rect x="' + (18 + i * 31 + r * 4) + '" y="' + (74 + r * 34) + '" width="20" height="12" fill="' + (lit ? "#ffe39a" : "#1b1410") + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#mg2)"/>' +
      '<g class="cld"><ellipse cx="40" cy="30" rx="40" ry="10" fill="#fff" opacity=".35"/></g>' +
      /* stepped, cantilevered blocks */
      '<rect x="6" y="60" width="388" height="118" fill="#5b3a29"/>' +
      '<rect x="0" y="62" width="400" height="8" fill="#b9b2a6"/><rect x="10" y="96" width="390" height="8" fill="#b9b2a6"/><rect x="20" y="130" width="380" height="8" fill="#b9b2a6"/>' +
      '<rect x="0" y="164" width="400" height="8" fill="#b9b2a6"/>' + wins +
      '<rect x="40" y="38" width="320" height="24" fill="#4a2f22"/>' +
      signText("BOYS AND GIRLS HIGH SCHOOL", 200, 56, 14, 280, "#fff") +
      /* the court */
      '<rect x="0" y="178" width="400" height="82" fill="#7a1c1c"/><path d="M0 214h400M200 178v82" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      '<ellipse cx="200" cy="214" rx="30" ry="12" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      /* hoop */
      '<rect x="340" y="150" width="5" height="96" fill="#222"/><rect x="316" y="138" width="40" height="28" fill="#f4f4f4" stroke="#222" stroke-width="2"/>' +
      '<rect x="328" y="150" width="16" height="11" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<path d="M322 166h22" stroke="#ff7a1a" stroke-width="3"/><path d="M323 166l3 14h14l3-14M328 166l2 14M338 166l-2 14" stroke="#fff" stroke-width="1" fill="none"/>' +
      '<g class="bnc"><circle cx="272" cy="236" r="10" fill="#e8742a"/><path d="M262 236h20M272 226v20" stroke="#5a2a10" stroke-width="1.4"/></g>' +
      '<g class="bannr"><rect x="34" y="186" width="120" height="24" rx="2" fill="#111" stroke="' + RED + '" stroke-width="2"/>' +
      signText("KANGAROOS", 94, 203, 14, 96, RED) + '</g>',
      sky("mg2", "#1d3b66", "#e8915a"));
  }

  /* 3. Weeksville: the old wooden Hunterfly Road houses on their diagonal lane, the Heritage Center behind */
  function weeksville() {
    const house = (x, y, wall, s) => {
      const w = 70 * s, h = 52 * s;
      return '<path d="M' + x + ' ' + (y - h) + 'l' + (w / 2) + ' ' + (-30 * s) + 'l' + (w / 2) + ' ' + (30 * s) + 'z" fill="#3b3b3f"/>' +
        '<rect x="' + x + '" y="' + (y - h) + '" width="' + w + '" height="' + h + '" fill="' + wall + '"/>' +
        '<path d="M' + x + ' ' + (y - h * .66) + 'h' + w + 'M' + x + ' ' + (y - h * .33) + 'h' + w + '" stroke="#000" stroke-width=".6" opacity=".18"/>' +
        '<rect x="' + (x + 8 * s) + '" y="' + (y - h + 8 * s) + '" width="' + (12 * s) + '" height="' + (16 * s) + '" fill="#2a3a4a"/><rect x="' + (x + 4 * s) + '" y="' + (y - h + 8 * s) + '" width="' + (4 * s) + '" height="' + (16 * s) + '" fill="#2f5d3a"/>' +
        '<rect x="' + (x + 50 * s) + '" y="' + (y - h + 8 * s) + '" width="' + (12 * s) + '" height="' + (16 * s) + '" fill="#2a3a4a"/><rect x="' + (x + 62 * s) + '" y="' + (y - h + 8 * s) + '" width="' + (4 * s) + '" height="' + (16 * s) + '" fill="#2f5d3a"/>' +
        '<rect x="' + (x + 29 * s) + '" y="' + (y - 24 * s) + '" width="' + (12 * s) + '" height="' + (24 * s) + '" fill="#4a2e20"/>' +
        '<rect x="' + (x - 4 * s) + '" y="' + (y - 30 * s) + '" width="' + (w + 8 * s) + '" height="' + (4 * s) + '" fill="#e8e2d4"/>' +
        '<path d="M' + x + ' ' + (y - 26 * s) + 'v26M' + (x + w) + ' ' + (y - 26 * s) + 'v26" stroke="#e8e2d4" stroke-width="' + (3 * s) + '"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#mg3)"/>' +
      '<g class="cld"><ellipse cx="60" cy="40" rx="46" ry="11" fill="#fff" opacity=".55"/></g><g class="cld cld2"><ellipse cx="40" cy="70" rx="34" ry="8" fill="#fff" opacity=".45"/></g>' +
      '<g class="fly"><path class="flp" d="M20 50q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      /* the modern Heritage Center: dark slate with a glass strip */
      '<rect x="230" y="96" width="170" height="90" fill="#2e3136"/><rect x="230" y="126" width="170" height="16" fill="#9fc6d8" opacity=".75"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#5d8a3e"/>' +
      /* Hunterfly Road, running on the old diagonal */
      '<path d="M0 260L130 176h60L120 260z" fill="#9c8a6a"/>' +
      house(150, 186, "#f4f1ea", 0.85) + house(214, 200, "#efd98a", 0.95) + house(280, 216, "#b9c7a8", 1.05) + house(18, 228, "#f4f1ea", 1.1) +
      '<path d="M360 176v-30" stroke="#3a2a1a" stroke-width="5"/><circle cx="360" cy="138" r="18" fill="#3f7a35"/><circle cx="374" cy="150" r="13" fill="#4f8f40"/>' +
      '<rect x="104" y="14" width="192" height="40" rx="4" fill="#2f5d3a" stroke="#f4f1ea" stroke-width="2"/>' +
      signText("WEEKSVILLE", 200, 34, 16, 120, "#fff") +
      '<text x="200" y="48" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="' + ICE + '">SINCE 1838</text>',
      sky("mg3", "#4f8cc9", "#f2c98a"));
  }

  /* 4. The lobby: brass mailboxes, the buzzer, elevator numbers ticking, fluorescent tube buzzing */
  function lobby() {
    let tilesF = "";
    for (let r = 0; r < 4; r++) for (let i = 0; i < 20; i++) if ((r + i) % 2) tilesF += '<rect x="' + (i * 20) + '" y="' + (200 + r * 15) + '" width="20" height="15" fill="#1a1a1a"/>';
    let boxes = "";
    for (let r = 0; r < 4; r++) for (let i = 0; i < 5; i++) boxes += '<rect x="' + (30 + i * 22) + '" y="' + (96 + r * 20) + '" width="19" height="17" rx="1" fill="#b8892f" stroke="#6b4c14" stroke-width="1"/><circle cx="' + (44 + i * 22) + '" cy="' + (104 + r * 20) + '" r="1.6" fill="#3a2a0a"/>';
    let fl = "";
    ["1", "2", "3", "4", "5"].forEach((n, k) => { fl += '<text class="fl fl' + k + '" x="288" y="76" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + RED + '">' + n + '</text>'; });
    return svg(
      '<rect width="400" height="260" fill="#cfc6b0"/>' +
      '<rect x="0" y="0" width="400" height="200" fill="#d8cfb6"/><rect x="0" y="150" width="400" height="50" fill="#6e5b45"/><rect x="0" y="148" width="400" height="4" fill="#3b2f22"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#e9e3d2"/>' + tilesF +
      /* fluorescent tube */
      '<rect x="120" y="6" width="160" height="8" rx="3" fill="#3a3a3a"/><rect class="bz" x="124" y="14" width="152" height="5" rx="2" fill="#f2fff4"/>' +
      '<path class="bz" d="M124 19h152l70 181H54z" fill="#f2fff4" opacity=".08"/>' +
      /* mailboxes */
      '<rect x="24" y="90" width="122" height="88" fill="#6b4c14"/>' + boxes +
      /* buzzer panel */
      '<rect x="160" y="100" width="34" height="56" rx="3" fill="#9aa0a6" stroke="#4b5056" stroke-width="2"/>' +
      '<rect x="166" y="106" width="22" height="10" fill="#222"/><circle cx="171" cy="124" r="2.5" fill="#222"/><circle cx="183" cy="124" r="2.5" fill="#222"/><circle cx="171" cy="134" r="2.5" fill="#222"/><circle cx="183" cy="134" r="2.5" fill="#222"/><circle cx="177" cy="146" r="3.5" fill="' + RED + '"/>' +
      /* elevator */
      '<rect x="244" y="56" width="88" height="144" fill="#8a8f95"/><rect x="252" y="90" width="72" height="110" fill="#b4b9bf"/><path d="M288 90v110" stroke="#6b7076" stroke-width="2"/>' +
      '<rect x="270" y="62" width="36" height="20" rx="2" fill="#111"/>' + fl +
      '<rect x="338" y="120" width="10" height="24" rx="2" fill="#4b5056"/><circle cx="343" cy="128" r="2.5" fill="' + GREEN + '"/><circle cx="343" cy="137" r="2.5" fill="#ddd"/>' +
      tag("LOBBY BOYZ", 20, 70, 28, RED, -5) + tag("HI HATER", 130, 190, 22, GREEN, -3),
      "");
  }

  /* 5. Fulton St and Utica Av: street signs, a traffic light cycling, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? 10 : 20; x < 250; x += 30) bricks += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#3d2a24"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mg5)"/>' + stars(18) +
      '<rect x="20" y="70" width="230" height="150" fill="#2a1d19"/>' + bricks +
      tag("MAINO", 40, 148, 46, RED, -7) + tag("HUSTLE HARD", 44, 200, 24, GREEN, -3) +
      /* pole with signs + traffic light */
      '<rect x="306" y="40" width="6" height="180" fill="#1d2329"/>' +
      '<rect x="294" y="40" width="30" height="74" rx="4" fill="#111" stroke="#333" stroke-width="2"/>' +
      '<circle class="lr" cx="309" cy="54" r="8" fill="#ff3b30"/><circle class="ly" cx="309" cy="77" r="8" fill="#ffc400"/><circle class="lg" cx="309" cy="100" r="8" fill="#2ee67a"/>' +
      '<rect x="270" y="124" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="137" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Fulton St</text>' +
      '<rect x="270" y="146" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="159" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Utica Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#141010"/><path d="M0 240h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<path d="M262 220h120v40H262z" fill="#141010"/><path d="M270 224v32M286 224v32M302 224v32M318 224v32M334 224v32M350 224v32M366 224v32" stroke="#ddd" stroke-width="6" opacity=".55"/>',
      sky("mg5", "#120707", "#4a1616"));
  }

  window.SCENES = { train, school, weeksville, lobby, corner };
})();
