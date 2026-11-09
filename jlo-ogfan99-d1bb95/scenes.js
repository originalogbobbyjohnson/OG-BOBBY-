/* Jennifer Lopez game (NYC map, the Bronx: Castle Hill). Castle Hill Av and Parkchester are already on the map,
   so room 1 is the next 6 stop east, Zerega Av, up on the Pelham Line el over Westchester Av.
   Each scene is a small animated SVG, 400 x 260. CSS classes are prefixed "jl". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jlFlk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.jlFlk{animation:jlFlk 2.4s infinite}.jlF2{animation-delay:.8s}' +
    '@keyframes jlWin{0%,100%{opacity:.3}50%{opacity:1}}.jlWin{animation:jlWin 3s ease-in-out infinite}.jlW2{animation-delay:1s}.jlW3{animation-delay:2s}' +
    '@keyframes jlWave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.jlWave{animation:jlWave 3s linear infinite}' +
    '@keyframes jlFly{0%{transform:translate(-60px,10px)}100%{transform:translate(470px,-24px)}}.jlFly{animation:jlFly 12s linear infinite}' +
    '@keyframes jlFlap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.jlFlap{transform-box:fill-box;transform-origin:50% 50%;animation:jlFlap .5s linear infinite}' +
    '@keyframes jlJump{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.jlJump{animation:jlJump .7s ease-in-out infinite}' +
    '@keyframes jlRope{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-1)}}.jlRope{transform-box:fill-box;transform-origin:50% 0;animation:jlRope .7s ease-in-out infinite}' +
    '@keyframes jlScroll{0%{transform:translateX(0)}100%{transform:translateX(-200px)}}.jlScroll{animation:jlScroll 4s linear infinite}' +
    '@keyframes jlSway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.jlSway{transform-box:fill-box;transform-origin:50% 0;animation:jlSway 2s ease-in-out infinite}' +
    '@keyframes jlBell{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.jlBell{transform-box:fill-box;transform-origin:50% 0;animation:jlBell 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) =>
    '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 11) + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + (r || 11) / 2) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + ((r || 11) * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff9fd0", GOLD = "#ffd36e", TEAL = "#7fe3d6", G6 = "#00933c";
  /* two-story Bronx row house with a stoop and an awning (Castle Hill blocks) */
  const rowHouse = (x, y, w, brick, trim, seed) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (214 - y) + '" fill="' + brick + '" stroke="#3a1c14" stroke-width="1.5"/>' +
      '<rect x="' + (x - 2) + '" y="' + (y - 5) + '" width="' + (w + 4) + '" height="5" fill="' + trim + '"/>';
    for (let k = 0; k < 2; k++) for (let j = 0; j < 2; j++) {
      const lit = (seed + k + j) % 3 === 0;
      s += '<rect x="' + (x + 8 + j * (w / 2)) + '" y="' + (y + 10 + k * 34) + '" width="' + (w / 2 - 16) + '" height="20" fill="' + (lit ? "#ffe39a" : "#2a2030") + '"' + (lit ? ' class="jlWin jlW' + (1 + (seed + j) % 3) + '"' : '') + '/>';
    }
    return s + '<rect x="' + (x + w / 2 - 9) + '" y="190" width="18" height="24" fill="#4a2a1a"/><rect x="' + (x + w / 2 - 14) + '" y="208" width="28" height="6" fill="#9a9aa2"/>';
  };

  /* 1. The 6 pulling into Zerega Av, up on the Pelham Line el over Westchester Av: girders, canopy, the black station sign */
  function jlzerega() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="62" width="6" height="150" fill="#4a5a50"/><path d="M' + (x + 3) + ' 198 L' + (x + 47) + ' 214 M' + (x + 47) + ' 198 L' + (x + 3) + ' 214" stroke="#4a5a50" stroke-width="3"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="130" width="30" height="22" rx="3" fill="#ffe6f2" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jlg1)"/>' + stars(14) +
      '<circle cx="62" cy="34" r="14" fill="#fff0f6" opacity=".9"/>' +
      '<path d="M0 54h400v8H0z" fill="#4a5a50"/><path d="M10 54l20 -14h340l20 14z" fill="#5d6e64"/>' + girders +
      '<rect x="100" y="70" width="220" height="34" rx="4" fill="#111"/><rect x="100" y="70" width="220" height="4" fill="#fff"/>' +
      '<text x="116" y="95" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Zerega Av</text>' +
      bullet(296, 88, "6", G6) +
      '<g class="anim-train">' +
        '<rect x="10" y="120" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="160" width="300" height="5" fill="' + G6 + '"/>' + windows +
        '<circle cx="302" cy="172" r="4" fill="#fff6c2"/>' + bullet(290, 138, "6", G6, false, 9) +
      '</g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1c1420"/>' +
      tag("CASTLE HILL", 18, 242, 26, PINK, -4) + tag("JENNY", 300, 244, 28, GOLD, -8),
      sky("jlg1", "#160a24", "#7a3f7a"));
  }

  /* 2. Holy Family on Castle Hill Av: the church and its parish school, where Jennifer went to grade school and her mom taught; the bell swinging, kids jumping rope */
  function jlholy() {
    let wins = "";
    for (let y = 132; y < 196; y += 28) for (let x = 226; x < 380; x += 30) wins += '<rect x="' + x + '" y="' + y + '" width="18" height="18" fill="#cfe6ff" opacity=".85"/><path d="M' + (x + 9) + ' ' + y + 'v18M' + x + ' ' + (y + 9) + 'h18" stroke="#fff" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jlg2)"/>' +
      '<circle cx="340" cy="44" r="20" fill="#fff4c2" opacity=".9"/>' +
      /* church: red-brick front with a steeple, rose window and arched doors */
      '<rect x="40" y="96" width="150" height="118" fill="#9a4a32" stroke="#4a1d14" stroke-width="2"/>' +
      '<path d="M32 98l83 -50 83 50z" fill="#7a3424" stroke="#4a1d14" stroke-width="2"/>' +
      '<rect x="100" y="26" width="30" height="34" fill="#9a4a32" stroke="#4a1d14" stroke-width="2"/><path d="M96 28l19 -18 19 18z" fill="#5a2418"/>' +
      '<path d="M115 11v-10M110 5h10" stroke="' + GOLD + '" stroke-width="2.5"/>' +
      '<g class="jlBell"><path d="M108 34h14l3 14h-20z" fill="' + GOLD + '"/><circle cx="115" cy="50" r="2" fill="' + GOLD + '"/></g>' +
      '<circle cx="115" cy="86" r="16" fill="#3a6ab0" stroke="' + GOLD + '" stroke-width="2"/><path d="M115 70v32M99 86h32M104 75l22 22M126 75l-22 22" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<path d="M95 214v-40a20 20 0 0 1 40 0v40z" fill="#4a2a1a" stroke="#d9c39a" stroke-width="2"/><path d="M115 214v-58" stroke="#d9c39a" stroke-width="1.5"/>' +
      '<path d="M54 140a10 10 0 0 1 20 0v30h-20z" fill="#3a6ab0" opacity=".8"/><path d="M156 140a10 10 0 0 1 20 0v30h-20z" fill="#3a6ab0" opacity=".8"/>' +
      /* the school building */
      '<rect x="210" y="116" width="180" height="98" fill="#b5654a" stroke="#4a1d14" stroke-width="2"/><rect x="206" y="110" width="188" height="7" fill="#d9c39a"/>' + wins +
      '<rect x="226" y="94" width="148" height="18" fill="#1a3a5c" stroke="#fff" stroke-width="1"/><text x="300" y="107" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" textLength="130" lengthAdjust="spacingAndGlyphs" fill="#fff">HOLY FAMILY SCHOOL</text>' +
      '<rect x="0" y="214" width="400" height="46" fill="#5a5a62"/><path d="M0 216h400" stroke="#9a9aa2" stroke-width="2"/>' +
      /* jump rope */
      '<path class="jlRope" d="M242 200q22 30 44 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<g class="jlJump"><circle cx="264" cy="206" r="5" fill="#3a2a24"/><path d="M259 212h10l3 16h-16z" fill="' + PINK + '"/></g>' +
      '<circle cx="238" cy="206" r="5" fill="#3a2a24"/><path d="M233 212h10v20h-10z" fill="' + TEAL + '"/><circle cx="290" cy="206" r="5" fill="#3a2a24"/><path d="M285 212h10v20h-10z" fill="' + GOLD + '"/>' +
      '<text x="115" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#fff" letter-spacing="2">CASTLE HILL AV</text>',
      sky("jlg2", "#8ec5ff", "#ffd1e8"));
  }

  /* 3. Preston High School, Throgs Neck: the Second Empire mansion (mansard roof, dormers, porch of Doric columns) facing the water, the cream-brick school wing beside it; gulls and waves */
  function jlpreston() {
    let waves = "";
    for (let y = 214; y < 258; y += 12) waves += '<path class="jlWave" d="M0 ' + y + (function () { let p = ""; for (let x = 0; x < 480; x += 20) p += 'q5-4 10 0t10 0'; return p; })() + '" stroke="#bfe6f2" stroke-width="1.5" fill="none" opacity=".5"/>';
    let cols = "";
    for (let x = 64; x <= 216; x += 19) cols += '<rect x="' + x + '" y="150" width="6" height="40" fill="#f4efe6"/><rect x="' + (x - 2) + '" y="148" width="10" height="3" fill="#e2dccf"/>';
    let dorm = "";
    for (let x = 74; x < 210; x += 34) dorm += '<rect x="' + x + '" y="84" width="16" height="18" fill="#efe9dc"/><path d="M' + (x - 2) + ' 86l10 -8 10 8z" fill="#efe9dc"/><rect x="' + (x + 4) + '" y="88" width="8" height="12" fill="#3a4a66"/>';
    let wins = "";
    for (let x = 70; x < 220; x += 26) wins += '<rect x="' + x + '" y="116" width="10" height="20" fill="#3a4a66"/>';
    let cream = "";
    for (let y = 120; y < 186; y += 18) for (let x = 262; x < 384; x += 20) cream += '<rect x="' + x + '" y="' + y + '" width="12" height="10" fill="#3a4a66"/>';
    let gulls = "";
    for (let i = 0; i < 4; i++) gulls += '<path class="jlFlap" d="M' + (i * 26) + ' ' + (30 + (i % 2) * 10) + 'q5-6 10 0q5-6 10 0" stroke="#fff" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jlg3)"/>' +
      '<g class="jlFly">' + gulls + '</g>' +
      /* mansion */
      '<rect x="56" y="104" width="172" height="86" fill="#f1ece0" stroke="#8a8270" stroke-width="2"/>' +
      '<path d="M50 106l14 -32h156l14 32z" fill="#5a5f6e" stroke="#33363f" stroke-width="2"/>' + dorm +
      '<rect x="46" y="72" width="192" height="4" fill="#33363f"/>' + wins +
      '<rect x="56" y="150" width="172" height="40" fill="#8f8676"/><rect x="54" y="142" width="176" height="8" fill="#e2dccf"/>' + cols +
      '<rect x="50" y="188" width="184" height="6" fill="#d8d1c2"/>' +
      /* cream-brick 1960 school wing */
      '<rect x="252" y="110" width="140" height="84" fill="#eadbb6" stroke="#9a8a6a" stroke-width="2"/><rect x="250" y="106" width="144" height="5" fill="#bba67a"/>' + cream +
      '<rect x="0" y="194" width="400" height="10" fill="#6b8f4a"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#2f6f9a"/>' + waves +
      '<rect x="134" y="226" width="132" height="20" rx="3" fill="#123a5c" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="241" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#fff" letter-spacing="1">PRESTON HIGH</text>',
      sky("jlg3", "#7ec8f2", "#fbe3c6"));
  }

  /* 4. "On the 6": inside the 6 train headed downtown to the dance studios, poles swaying, the line strip, the Bronx rolling past the windows */
  function jlon6() {
    let view = "";
    for (let x = 0; x < 640; x += 40) view += '<rect x="' + x + '" y="' + (80 - (x * 7) % 30) + '" width="30" height="' + (40 + (x * 7) % 30) + '" fill="#6a4a5a"/><rect x="' + (x + 6) + '" y="' + (90 - (x * 7) % 30) + '" width="6" height="6" fill="#ffe39a"/>';
    let stops = "";
    ["PELHAM BAY", "ZEREGA", "CASTLE HILL", "PARKCHESTER", "125 ST", "GRAND CENTRAL"].forEach((n, i) => {
      const x = 70 + i * 56; stops += '<circle cx="' + x + '" cy="30" r="4" fill="#fff" stroke="' + G6 + '" stroke-width="2"/><text x="' + x + '" y="46" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="6.5" fill="#fff">' + n + '</text>';
    });
    return svg(
      '<rect width="400" height="260" fill="#cfd3da"/>' +
      '<rect x="0" y="16" width="400" height="38" fill="#1b1b22"/><rect x="66" y="28" width="284" height="4" fill="' + G6 + '"/>' + stops +
      bullet(20, 35, "6", G6, false, 10) +
      /* windows with the view scrolling */
      '<rect x="20" y="64" width="160" height="70" rx="6" fill="#3a2440"/><rect x="220" y="64" width="160" height="70" rx="6" fill="#3a2440"/>' +
      '<clipPath id="jlclip"><rect x="20" y="64" width="160" height="70" rx="6"/><rect x="220" y="64" width="160" height="70" rx="6"/></clipPath>' +
      '<g clip-path="url(#jlclip)"><rect x="0" y="64" width="400" height="70" fill="url(#jlg4)"/><g class="jlScroll">' + view + '</g></g>' +
      '<rect x="18" y="62" width="164" height="74" rx="7" fill="none" stroke="#8a8f98" stroke-width="3"/><rect x="218" y="62" width="164" height="74" rx="7" fill="none" stroke="#8a8f98" stroke-width="3"/>' +
      /* seats */
      '<rect x="0" y="176" width="400" height="26" rx="4" fill="#f2a53a"/><rect x="0" y="200" width="400" height="60" fill="#5b5f68"/>' +
      '<g class="jlSway"><rect x="196" y="54" width="8" height="150" fill="#d9dde3" stroke="#9aa0a8"/></g>' +
      '<g class="jlSway" style="animation-delay:-1s"><rect x="96" y="54" width="6" height="124" fill="#d9dde3" stroke="#9aa0a8"/><rect x="298" y="54" width="6" height="124" fill="#d9dde3" stroke="#9aa0a8"/></g>' +
      '<rect x="0" y="54" width="400" height="6" fill="#9aa0a8"/>' +
      tag("ON THE 6", 128, 236, 34, PINK, -3),
      sky("jlg4", "#ff9a6b", "#6a3a8a"));
  }

  /* 5. Blackrock Av and Castle Hill Av: green street signs, the wall tagged JENNY FROM THE BLOCK, two-story Bronx houses behind */
  function jlcorner() {
    const sign = (x, y, txt, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#jlg5)"/>' + stars(8) +
      rowHouse(244, 110, 74, "#a0523a", "#e8e0d0", 1) + rowHouse(320, 104, 76, "#c47a52", "#f4efe6", 2) +
      '<rect x="0" y="118" width="240" height="96" fill="#7a3a2c"/>' +
      (function () { let b = ""; for (let y = 122; y < 214; y += 8) b += '<path d="M0 ' + y + 'h240" stroke="#5e2a20" stroke-width="1"/>'; return b; })() +
      tag("JENNY", 14, 160, 34, PINK, -5) + tag("FROM THE BLOCK", 14, 192, 22, GOLD, -4) + tag("J.LO", 176, 208, 18, TEAL, -6) +
      '<rect x="0" y="214" width="400" height="46" fill="#2b2b33"/><rect x="0" y="212" width="400" height="5" fill="#8d8d96"/>' +
      '<rect x="252" y="40" width="6" height="176" fill="#3f4a44"/>' +
      sign(196, 40, "Blackrock Av", 112) + sign(232, 64, "Castle Hill Av", 120) +
      '<rect x="244" y="92" width="22" height="40" rx="3" fill="#222"/><circle cx="255" cy="102" r="5" fill="#553"/><circle cx="255" cy="114" r="5" fill="#553"/><circle class="jlFlk" cx="255" cy="125" r="5" fill="#3cff7a"/>',
      sky("jlg5", "#1a0d2e", "#a0507a"));
  }

  window.SCENES = { jlzerega, jlholy, jlpreston, jlon6, jlcorner };
})();
