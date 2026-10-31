/* Coney Island opening scenes for the Torae game. Each one is a small animated SVG, 400 x 260.
   NEMS's game has the Cyclone, the Wonder Wheel and the Parachute Jump; Lil Dee's has the Thunderbolt, Luna 360 and the Aquarium.
   So these rooms use: the arched train shed at Stillwell Av, a night game at the ballpark on Surf Av with fireworks over the ocean,
   the old Childs Restaurant on the Boardwalk with its seaside terracotta (now an amphitheater), the Coney Island Light out in
   Sea Gate, and Surf Av & W 21 St. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(220px,-14px)}100%{transform:translate(480px,4px)}}' +
    '.gull{animation:gull 12s linear infinite}.gull2{animation-delay:-6s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.5)}}' +
    '.wing{transform-box:fill-box;transform-origin:50% 100%;animation:flap .4s ease-in-out infinite}' +
    '@keyframes boom{0%{transform:scale(.1);opacity:0}15%{opacity:1}70%{opacity:1}100%{transform:scale(1);opacity:0}}' +
    '.fw{transform-box:fill-box;transform-origin:50% 50%;animation:boom 2.4s ease-out infinite}.fw2{animation-delay:-.8s}.fw3{animation-delay:-1.6s}' +
    '@keyframes flow{from{transform:translateX(0)}to{transform:translateX(-40px)}}' +
    '.wave{animation:flow 3s linear infinite}.wave2{animation-duration:4.5s}' +
    '@keyframes beam{0%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}100%{transform:rotate(-30deg)}}' +
    '.beam{transform-origin:300px 66px;animation:beam 5s ease-in-out infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.blk{animation:blink 1.2s infinite}.blk2{animation-delay:-.6s}' +
    '@keyframes pitch{0%{transform:translate(0,0)}100%{transform:translate(-70px,8px)}}' +
    '.ball{animation:pitch 1.4s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".7"><ellipse cx="0" cy="0" rx="22" ry="8"/><ellipse cx="14" cy="-5" rx="14" ry="8"/><ellipse cx="-12" cy="-3" rx="11" ry="6"/></g>';
  const gull = (y, cls) => '<g class="gull ' + (cls || "") + '"><g transform="translate(0 ' + y + ')"><g class="wing"><path d="M-8 0q4-6 8 0q4-6 8 0" stroke="#fff" stroke-width="2" fill="none"/></g></g></g>';
  const ORANGE = "#ff6319", YEL = "#fccc0a", SEA = "#1f6f9a", SAND = "#e8cf9a", C1 = "#ff8a5b", GOLD = "#ffd34d", BLUE = "#38b6ff";

  /* 1. The D pulling into Coney Island-Stillwell Av, the terminal up on the el under its big arched steel-and-glass train shed */
  function train() {
    let arches = "";
    for (let x = -20; x < 420; x += 60) arches += '<path d="M' + x + ' 120 Q' + (x + 30) + ' 10 ' + (x + 60) + ' 120" fill="none" stroke="#6d7b86" stroke-width="5"/>';
    let ribs = "";
    for (let x = 0; x < 400; x += 15) ribs += '<path d="M' + x + ' 24v96" stroke="#9fb3c2" stroke-width="1" opacity=".5"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#dff1ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tg1)"/>' +
      /* glass roof of the shed, solar panels catching light */
      '<path d="M0 24 Q200 -6 400 24 V120 H0z" fill="#b9d6ea" opacity=".55"/>' + ribs + arches +
      '<rect x="0" y="116" width="400" height="6" fill="#55636e"/>' +
      '<g class="gull">' + '<g transform="translate(0 50)"><g class="wing"><path d="M-8 0q4-6 8 0q4-6 8 0" stroke="#37474f" stroke-width="2" fill="none"/></g></g></g>' +
      /* station sign */
      '<rect x="22" y="58" width="356" height="36" rx="4" fill="#111"/>' +
      '<rect x="22" y="58" width="356" height="4" fill="#fff"/>' +
      '<text x="32" y="83" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Coney Island–Stillwell Av</text>' +
      bullet(270, 76, "D", ORANGE) + bullet(296, 76, "F", ORANGE) + bullet(322, 76, "N", YEL, true) + bullet(348, 76, "Q", YEL, true) +
      /* the D slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="124" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="5" fill="' + ORANGE + '"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#dff1ff" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
        bullet(272, 174, "D", ORANGE) +
      '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3a3d42"/>' +
      (function () { let s = ""; for (let x = 10; x < 400; x += 70) s += '<rect x="' + x + '" y="122" width="8" height="74" fill="#55636e"/>'; return s; })() +
      tag("YOUNG VET", 20, 242, 28, C1, -4) + tag("CONEY", 284, 244, 32, GOLD, -8),
      sky("tg1", "#6fb5e6", "#e8f4fb"));
  }

  /* 2. A night game at the ballpark on Surf Av by the Boardwalk: green field, the stands, light towers, the pitch coming in,
        fireworks over the ocean after the game */
  function ballpark() {
    let seats = "";
    for (let y = 118; y < 150; y += 6) seats += '<path d="M0 ' + y + 'h400" stroke="#1d3d6b" stroke-width="3"/>';
    let crowd = "";
    for (let i = 0; i < 80; i++) crowd += '<circle cx="' + (3 + i * 5) + '" cy="' + (118 + (i * 7) % 30) + '" r="1.6" fill="' + ["#ff8a5b", "#f2f2f2", "#ffd34d", "#38b6ff"][i % 4] + '"/>';
    const tower = x => '<rect x="' + (x - 2) + '" y="40" width="4" height="78" fill="#55636e"/><rect x="' + (x - 14) + '" y="30" width="28" height="12" fill="#2b3640"/>' +
      '<g class="flk">' + [0, 1, 2, 3].map(i => '<circle cx="' + (x - 10 + i * 7) + '" cy="36" r="2.4" fill="#fffbe0"/>').join("") + '</g>';
    let fw = "";
    [[90, 40, "#ff8a5b", ""], [200, 26, "#ffd34d", "fw2"], [320, 44, "#38b6ff", "fw3"]].forEach(f => {
      let s = ""; for (let a = 0; a < 12; a++) { const r = a * Math.PI / 6; s += '<path d="M0 0L' + (Math.cos(r) * 22).toFixed(1) + ' ' + (Math.sin(r) * 22).toFixed(1) + '" stroke="' + f[2] + '" stroke-width="2" stroke-linecap="round"/>'; }
      fw += '<g transform="translate(' + f[0] + ' ' + f[1] + ')"><g class="fw ' + f[3] + '">' + s + '</g></g>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#tg2)"/>' + stars(20) + fw +
      /* ocean line far out */
      '<rect x="0" y="96" width="400" height="10" fill="#0d2a44"/>' +
      tower(30) + tower(370) +
      /* scoreboard */
      '<rect x="160" y="60" width="80" height="40" fill="#14202b" stroke="#55636e" stroke-width="2"/>' +
      '<text x="200" y="76" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#ffd34d">HOME 3  AWAY 2</text>' +
      '<text x="200" y="92" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#ff8a5b" class="blk">9TH INNING</text>' +
      '<rect x="0" y="112" width="400" height="40" fill="#163257"/>' + seats + crowd +
      '<rect x="0" y="150" width="400" height="4" fill="#ffd34d"/>' +
      /* field */
      '<rect x="0" y="154" width="400" height="106" fill="#2f8f3a"/>' +
      (function () { let s = ""; for (let x = 0; x < 400; x += 40) s += '<rect x="' + x + '" y="154" width="20" height="106" fill="#38a145" opacity=".5"/>'; return s; })() +
      '<path d="M120 260L200 196L280 260z" fill="#b8865a"/>' +
      '<rect x="196" y="192" width="8" height="8" fill="#fff" transform="rotate(45 200 196)"/>' +
      '<ellipse cx="200" cy="232" rx="14" ry="5" fill="#c99a6a"/>' +
      /* the pitch heading for the plate */
      '<g class="ball"><circle cx="270" cy="230" r="3" fill="#fff"/></g>' +
      '<text x="18" y="182" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff" opacity=".8">BOTTOM OF THE NINTH</text>',
      sky("tg2", "#070b1c", "#1d2b55"));
  }

  /* 3. The old Childs Restaurant on the Boardwalk at W 21 St: Spanish-Revival seaside palace, cream walls and colored terracotta
        of Neptune's trident, sailing ships, shells and fish round the big arches; gulls overhead */
  function childs() {
    const TER = ["#2f8f8a", "#e2a33b", "#c4553a", "#2f6fbf"];
    let frieze = "";
    for (let x = 30; x < 370; x += 20) frieze += '<rect x="' + x + '" y="72" width="20" height="10" fill="' + TER[(x / 20) % 4 | 0] + '"/>';
    let arches = "";
    [52, 122, 192, 262].forEach((x, i) => {
      arches += '<path d="M' + (x + 4) + ' 196V142a31 31 0 0 1 62 0V196z" fill="#3a2a22"/>' +
        '<path d="M' + (x + 4) + ' 142a31 31 0 0 1 62 0" fill="none" stroke="' + TER[i] + '" stroke-width="6"/>' +
        '<path d="M' + (x + 8) + ' 142a27 27 0 0 1 54 0" fill="none" stroke="#e2a33b" stroke-width="2" stroke-dasharray="3 4"/>' +
        '<rect x="' + (x + 14) + '" y="160" width="42" height="36" fill="#ffe3a0" opacity=".25"/>';
    });
    /* terracotta medallions: a trident, a ship, a shell, a fish */
    const med = (x, inner) => '<circle cx="' + x + '" cy="96" r="10" fill="#2f8f8a" stroke="#e2a33b" stroke-width="2"/>' + inner;
    const meds = med(88, '<path d="M88 104V88M83 90v-4M93 90v-4M83 90h10" stroke="#ffd34d" stroke-width="2" fill="none"/>') +
      med(158, '<path d="M150 99h16l-3 4h-10z" fill="#c4553a"/><path d="M158 99V87l7 10z" fill="#fff6e0"/>') +
      med(228, '<path d="M220 101a8 8 0 0 1 16 0z" fill="#e2a33b"/><path d="M228 93v8M224 95l4 6M232 95l-4 6" stroke="#c4553a" stroke-width="1"/>') +
      med(298, '<path d="M290 96q8-7 14 0q-6 7-14 0zM304 96l5-4v8z" fill="#c4553a"/>');
    let planks = "";
    for (let x = 0; x < 400; x += 12) planks += '<path d="M' + x + ' 206l-' + (x / 40) + ' 54" stroke="#6e4a2e" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tg3)"/>' +
      '<g class="cld">' + cloud(40, 30, 1.1) + '</g>' +
      gull(40) + gull(24, "gull2") +
      /* the building */
      '<rect x="24" y="64" width="352" height="134" fill="#f1e6cf"/>' +
      '<path d="M24 64h352l-14-14H38z" fill="#c4553a"/>' +
      /* roof garden railing */
      (function () { let s = '<rect x="38" y="40" width="324" height="3" fill="#c9b99a"/>'; for (let x = 40; x < 362; x += 12) s += '<rect x="' + x + '" y="40" width="2" height="10" fill="#c9b99a"/>'; return s; })() +
      frieze + meds + arches +
      '<rect x="24" y="190" width="352" height="8" fill="#d8c8a8"/>' +
      /* boardwalk */
      '<rect x="0" y="198" width="400" height="62" fill="#a5774c"/>' + planks +
      '<rect x="0" y="198" width="400" height="4" fill="#7d5636"/>' +
      /* boardwalk lamp */
      '<rect x="352" y="140" width="4" height="62" fill="#2b3640"/><circle cx="354" cy="138" r="6" fill="#fff3c4" class="flk"/>',
      sky("tg3", "#4aa3df", "#d9eef8"));
  }

  /* 4. The Coney Island Light out in Sea Gate: the square white steel skeleton tower with black trim, the beam sweeping the water */
  function lighthouse() {
    const T = 300;
    let lattice = "";
    for (let i = 0; i < 6; i++) { const y1 = 84 + i * 22, y2 = y1 + 22, w1 = 14 + i * 5, w2 = w1 + 5;
      lattice += '<path d="M' + (T - w1) + ' ' + y1 + 'L' + (T + w2) + ' ' + y2 + 'M' + (T + w1) + ' ' + y1 + 'L' + (T - w2) + ' ' + y2 + '" stroke="#f4f4f0" stroke-width="2"/>' +
        '<path d="M' + (T - w2) + ' ' + y2 + 'h' + (w2 * 2) + '" stroke="#f4f4f0" stroke-width="2.5"/>'; }
    let waves = "";
    for (let x = 0; x < 460; x += 40) waves += '<path d="M' + x + ' 0q10-4 20 0t20 0" stroke="#7fb8d8" stroke-width="1.5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tg4)"/>' + stars(26) +
      '<circle cx="70" cy="40" r="14" fill="#fff6d6" opacity=".9"/>' +
      /* the beam */
      '<g class="beam"><path d="M300 66L20 30L20 100z" fill="#fff6c2" opacity=".18"/></g>' +
      /* sea and the shore of Sea Gate */
      '<rect x="0" y="180" width="400" height="80" fill="#0e3550"/>' +
      '<g transform="translate(0 196)"><g class="wave">' + waves + '</g></g><g transform="translate(0 222)"><g class="wave wave2">' + waves + '</g></g>' +
      '<path d="M200 214q60-30 200-34v80H200z" fill="#3a3a2e"/>' +
      '<path d="M236 206q80-24 164-26" stroke="' + SAND + '" stroke-width="3" fill="none" opacity=".6"/>' +
      /* the tower: two legs tapering up, white with black trim, the lantern on top */
      '<path d="M' + (T - 44) + ' 216L' + (T - 14) + ' 84M' + (T + 44) + ' 216L' + (T + 14) + ' 84" stroke="#f4f4f0" stroke-width="4"/>' + lattice +
      '<rect x="' + (T - 20) + '" y="76" width="40" height="8" fill="#151515"/>' +
      '<rect x="' + (T - 10) + '" y="58" width="20" height="18" fill="#151515"/>' +
      '<rect x="' + (T - 7) + '" y="61" width="14" height="12" fill="#fff6c2" class="flk"/>' +
      '<path d="M' + (T - 12) + ' 58l12-10 12 10z" fill="#151515"/>' +
      /* a little keeper's house */
      '<rect x="200" y="186" width="34" height="24" fill="#f1ece0"/><path d="M196 188l21-14 21 14z" fill="#8a2f2a"/><rect x="212" y="196" width="8" height="14" fill="#3a2a22"/>' +
      '<text x="18" y="250" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#cfe6f6" opacity=".8">SEA GATE</text>',
      sky("tg4", "#050a1e", "#24406a"));
  }

  /* 5. Surf Av & W 21 St: street signs, the light, the tag wall, the Boardwalk a block away */
  function corner() {
    let bricks = "";
    for (let y = 64; y < 222; y += 12) { bricks += '<path d="M16 ' + y + 'h250" stroke="#5a3b2e" stroke-width="1"/>'; for (let x = (y / 12 % 2 ? 16 : 36); x < 266; x += 40) bricks += '<path d="M' + x + ' ' + y + 'v12" stroke="#5a3b2e" stroke-width="1"/>'; }
    const sign = (x, y, txt) => '<rect x="' + x + '" y="' + y + '" width="104" height="20" rx="2" fill="#0d6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + 52) + '" y="' + (y + 14.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#tg5)"/>' +
      gull(30) +
      '<rect x="16" y="60" width="250" height="162" fill="#a0624a"/>' + bricks +
      tag("TORAE", 34, 130, 46, C1, -6) +
      tag("LET EM KNOW", 34, 178, 24, GOLD, -3) +
      tag("IA", 214, 204, 26, BLUE, -10) +
      '<rect x="0" y="222" width="400" height="38" fill="#7b766c"/><rect x="0" y="222" width="400" height="4" fill="#aaa498"/>' +
      '<rect x="318" y="40" width="6" height="186" fill="#3b3f3c"/>' +
      sign(270, 44, "SURF AV") + sign(272, 68, "W 21 ST") +
      '<rect x="336" y="96" width="22" height="58" rx="3" fill="#222"/>' +
      '<circle cx="347" cy="108" r="6" fill="#d23b2a" class="blk"/><circle cx="347" cy="125" r="6" fill="#4a3a14"/><circle cx="347" cy="142" r="6" fill="#1f9a4a" class="blk blk2"/>' +
      '<rect x="324" y="118" width="12" height="4" fill="#3b3f3c"/>' +
      '<g class="car"><rect x="0" y="236" width="48" height="13" rx="4" fill="#ffd34d"/><circle cx="12" cy="250" r="3.5" fill="#111"/><circle cx="36" cy="250" r="3.5" fill="#111"/></g>',
      sky("tg5", "#ff9a6a", "#ffd8a8"));
  }

  window.SCENES = { train, ballpark, childs, lighthouse, corner };
})();
