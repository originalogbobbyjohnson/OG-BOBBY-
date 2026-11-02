/* Hempstead, Long Island opening scenes for the Roc Marciano game. Each one is a small animated SVG, 400 x 260.
   Other Long Island games already use Wyandanch, Jones Beach, the LIE, the Sound, Freeport, Adelphi and Roosevelt Field,
   so these rooms use: the LIRR Hempstead Branch terminal in Hempstead village, Hofstra's Unispan over Hempstead Turnpike,
   the silver-finned Nassau Coliseum in Uniondale, Belmont Park in Elmont (a dark horse coming down the stretch, for
   "Behold a Dark Horse"), and Main St & Fulton Av in Hempstead village. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}' +
    '.car{animation:car 5s linear infinite}.car2{animation-delay:-2.5s}' +
    '@keyframes carb{from{transform:translateX(520px)}to{transform:translateX(-120px)}}' +
    '.carb{animation:carb 6s linear infinite}.carb2{animation-delay:-3s}' +
    '@keyframes walk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.wk{animation:walk 11s linear infinite}.wk2{animation-delay:-4s}.wk3{animation-delay:-7.5s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.sw{transform-box:fill-box;transform-origin:50% 100%;animation:sweep 4s ease-in-out infinite}.sw2{animation-delay:-2s}' +
    '@keyframes run{from{transform:translateX(460px)}to{transform:translateX(-140px)}}' +
    '.run{animation:run 6s linear infinite;animation-delay:-3.2s}' +
    '@keyframes gallop{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.gal{animation:gallop .4s ease-in-out infinite}.gal2{animation-delay:-.2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".7"><ellipse cx="0" cy="0" rx="22" ry="8"/><ellipse cx="14" cy="-5" rx="14" ry="8"/><ellipse cx="-12" cy="-3" rx="11" ry="6"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const carShape = (c) => '<rect x="0" y="-12" width="44" height="12" rx="3" fill="' + c + '"/><path d="M8 -12l6-8h16l6 8z" fill="' + c + '"/><path d="M15 -13l4-5h6v5zM27 -13v-5h3l4 5z" fill="#cfe6ff"/>' +
    '<circle cx="10" cy="0" r="4" fill="#111"/><circle cx="34" cy="0" r="4" fill="#111"/><circle cx="43" cy="-8" r="1.8" fill="#fff6c2"/>';
  const person = (col) => '<circle cx="6" cy="-14" r="3.5" fill="#1b2430"/><rect x="2.5" y="-10" width="7" height="11" rx="2" fill="' + col + '"/><path d="M4 1v5M8 1v5" stroke="#1b2430" stroke-width="2"/>';
  const GOLD = "#d4af37", WINE = "#b0203a", EMER = "#2ecc71", WHITE = "#f7f3ea", LIRR = "#0039a6";
  const F = 'font-family="Helvetica, Arial, sans-serif"';

  /* 1. LIRR Hempstead Branch pulling into Hempstead, the end of the line: at grade, red-brick station house, low canopy,
        the bumper block at the end of the track */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let brick = "";
    for (let y = 40; y < 118; y += 6) for (let x = 230 + ((y / 6) % 2 ? 0 : 6); x < 392; x += 12) brick += '<rect x="' + x + '" y="' + y + '" width="10" height="4" fill="#7a2e22" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) +
      '<circle cx="60" cy="34" r="12" fill="#fff1d6" opacity=".9"/>' +
      /* village buildings behind */
      '<rect x="0" y="60" width="70" height="66" fill="#2a2633"/><rect x="74" y="44" width="56" height="82" fill="#332d3d"/><rect x="134" y="70" width="90" height="56" fill="#2a2633"/>' +
      '<rect x="86" y="56" width="8" height="6" fill="#ffd96b" opacity=".7"/><rect x="108" y="70" width="8" height="6" fill="#ffd96b" opacity=".5"/><rect x="18" y="74" width="8" height="6" fill="#ffd96b" opacity=".6"/>' +
      /* the brick station house */
      '<path d="M222 40l88-20 88 20z" fill="#3b2e2a"/><rect x="226" y="40" width="168" height="86" fill="#a3442f"/>' + brick +
      '<rect x="226" y="40" width="168" height="5" fill="' + WHITE + '"/>' +
      '<rect x="244" y="60" width="22" height="30" rx="2" fill="#ffe7a8" class="flk"/><rect x="300" y="60" width="22" height="30" rx="2" fill="#ffe7a8"/><rect x="356" y="60" width="22" height="30" rx="2" fill="#ffe7a8" class="flk flk2"/>' +
      /* canopy */
      '<path d="M0 100h230v6H0z" fill="#56606c"/><rect x="30" y="106" width="5" height="22" fill="#2b3440"/><rect x="120" y="106" width="5" height="22" fill="#2b3440"/>' +
      /* station sign */
      '<rect x="20" y="70" width="190" height="28" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="28" y="89" ' + F + ' font-weight="700" font-size="16" fill="#fff">Hempstead</text>' +
      '<text x="122" y="84" ' + F + ' font-size="6.5" fill="#dbe6f3">HEMPSTEAD</text><text x="122" y="92" ' + F + ' font-size="6.5" fill="#dbe6f3">BRANCH</text>' +
      '<rect x="166" y="78" width="36" height="12" rx="2" fill="' + LIRR + '"/><text x="184" y="87" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">LIRR</text>' +
      /* train slides in toward the end of the line */
      '<g class="anim-train">' +
        '<rect x="8" y="126" width="304" height="56" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="304" height="6" fill="' + LIRR + '"/>' + windows +
        '<path d="M300 130h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="174" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="177" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#334">LIRR · HEMPSTEAD</text>' +
      '</g>' +
      /* bumper block */
      '<rect x="352" y="156" width="26" height="26" fill="#c0392b"/><path d="M352 160h26M352 170h26" stroke="#f4d03f" stroke-width="3"/><rect x="348" y="182" width="34" height="4" fill="#333"/>' +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1a1d22"/>' +
      tag("MARCI", 24, 240, 30, GOLD, -4) + tag("U.N.", 300, 244, 30, WHITE, -7),
      sky("g1", "#0d1022", "#4a3550"));
  }

  /* 2. Hofstra University: the Unispan footbridge arching over Hempstead Turnpike, blue fascia with gold letters,
        students crossing, traffic underneath, the library tower behind */
  function hofstra() {
    let walkers = "";
    [["", "#f4f1e8"], ["wk2", GOLD], ["wk3", "#2f5fa8"]].forEach(([c, col]) => {
      walkers += '<g class="wk ' + c + '"><g transform="translate(0 96)">' + person(col) + '</g></g>';
    });
    let trees = "";
    for (let x = 0; x < 410; x += 34) trees += '<circle cx="' + x + '" cy="' + (150 + (x * 7) % 10) + '" r="' + (18 + (x * 3) % 6) + '" fill="#3f7a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld">' + cloud(50, 30, 1) + '</g><g class="cld cld2">' + cloud(100, 18, .7) + '</g>' +
      /* library tower */
      '<rect x="292" y="34" width="54" height="130" fill="#d8d2c4"/><rect x="292" y="34" width="54" height="8" fill="#9aa4ad"/>' +
      (function () { let w = ""; for (let y = 50; y < 160; y += 12) w += '<rect x="298" y="' + y + '" width="42" height="6" fill="#4a6b8a" opacity=".85"/>'; return w; })() +
      '<rect x="40" y="96" width="90" height="70" fill="#cfc5b0"/><path d="M40 96l45-20 45 20z" fill="#7a4a3a"/>' +
      trees +
      /* the Unispan */
      '<path d="M-10 168Q200 70 410 168v12Q200 84 -10 180z" fill="#e6e1d6"/>' +
      '<path d="M-10 100h420v14h-420z" fill="#2f5fa8"/>' +
      '<rect x="-10" y="98" width="420" height="3" fill="#e6e1d6"/>' +
      '<text x="200" y="111" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="' + GOLD + '">HOFSTRA UNIVERSITY</text>' +
      '<path d="M-10 88h420" stroke="#e6e1d6" stroke-width="2"/><path d="M-10 88v10M40 88v10M90 88v10M140 88v10M190 88v10M240 88v10M290 88v10M340 88v10M390 88v10" stroke="#e6e1d6" stroke-width="1.5"/>' +
      '<rect x="18" y="114" width="16" height="84" fill="#d6d0c4"/><rect x="366" y="114" width="16" height="84" fill="#d6d0c4"/>' +
      walkers +
      /* Hempstead Tpke */
      '<rect x="0" y="198" width="400" height="10" fill="#aab0b5"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#2c2f33"/><path d="M0 234h400" stroke="#eab308" stroke-width="2"/>' +
      '<g class="car"><g transform="translate(0 228)">' + carShape(WINE) + '</g></g>' +
      '<g class="car car2"><g transform="translate(0 228)">' + carShape("#f4f1e8") + '</g></g>' +
      '<g class="carb"><g transform="translate(0 254) scale(-1 1) translate(-44 0)">' + carShape(GOLD) + '</g></g>' +
      '<rect x="150" y="184" width="100" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="196" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#fff">Hempstead Tpke</text>',
      sky("g2", "#6fb3e6", "#d8ecf7"));
  }

  /* 3. Hempstead Lake State Park, just south of Hempstead village: the big green lake under the oaks, the old brick carousel house, a fishing pier with a line out, ducks drifting */
  function coliseum() {
    let oaks = "";
    [[20, 110, 34], [70, 118, 28], [340, 112, 34], [388, 120, 26]].forEach(([x, y, r]) => oaks += '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="40" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="#2f5a2a"/><circle cx="' + (x - r / 2) + '" cy="' + y + '" r="' + (r * .6) + '" fill="#3f7a3a"/>');
    let ripples = "";
    for (let i = 0; i < 6; i++) ripples += '<path d="M' + (30 + i * 60) + ' ' + (190 + (i % 3) * 14) + 'h30" stroke="#a8d8c0" stroke-width="2" opacity=".5"/>';
    return svg(
      '<style>@keyframes dk{0%,100%{transform:translateX(0)}50%{transform:translateX(50px)}}.dk{animation:dk 7s ease-in-out infinite}.dk2{animation-delay:-3.5s}' +
      '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.bb{animation:bob 1.6s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g3)"/>' + cloud(80, 40, 1) + '<g class="cld">' + cloud(0, 60, .8) + '</g>' +
      '<path d="M0 150q60 -26 130 -12q70 -24 140 -4q70 -20 130 0v20H0z" fill="#2f5a2a"/>' + oaks +
      /* the carousel house: round brick building, conical roof, flag */
      '<rect x="150" y="104" width="100" height="48" fill="#8a4a32"/><path d="M144 106l56 -34 56 34z" fill="#3a4a3a"/>' +
      '<path d="M200 72v-14" stroke="#555" stroke-width="2"/><path class="flk" d="M200 58l12 4 -12 4z" fill="' + WINE + '"/>' +
      (function () { let a = ""; for (let x = 158; x < 246; x += 18) a += '<path d="M' + x + ' 152v-26a7 7 0 0 1 14 0v26z" fill="#ffd98a" opacity=".6"/>'; return a; })() +
      '<rect x="150" y="150" width="100" height="6" fill="#d9cfc0"/>' +
      /* the lake */
      '<rect x="0" y="160" width="400" height="100" fill="#3f7a6a"/><rect x="0" y="160" width="400" height="6" fill="#5a9a80" opacity=".6"/>' + ripples +
      /* fishing pier with a line out */
      '<rect x="250" y="196" width="150" height="8" fill="#8a6a44"/>' + (function () { let p = ""; for (let x = 256; x < 400; x += 24) p += '<rect x="' + x + '" y="204" width="4" height="30" fill="#6a4a2a"/>'; return p; })() +
      '<g transform="translate(300 196)">' + person(EMER) + '</g><path d="M310 182l40 -24" stroke="#5a3a22" stroke-width="2"/><path d="M350 158q4 30 8 56" stroke="#ddd" stroke-width=".8" fill="none"/>' +
      '<g class="bb"><circle cx="358" cy="214" r="2.5" fill="' + WINE + '"/></g>' +
      /* ducks */
      '<g class="dk"><ellipse cx="60" cy="220" rx="11" ry="5" fill="#7a5a3a"/><circle cx="69" cy="213" r="4.5" fill="#2f6a3a"/><path d="M73 213l5 1-5 2z" fill="' + GOLD + '"/></g>' +
      '<g class="dk dk2"><ellipse cx="140" cy="236" rx="11" ry="5" fill="#7a5a3a"/><circle cx="149" cy="229" r="4.5" fill="#2f6a3a"/><path d="M153 229l5 1-5 2z" fill="' + GOLD + '"/></g>' +
      '<rect x="20" y="240" width="190" height="16" rx="2" fill="#1b2430"/><text x="115" y="251.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">HEMPSTEAD LAKE STATE PARK</text>' +
      tag("STRONG ISLAND", 230, 252, 18, GOLD, -4),
      sky("g3", "#7fb3e0", "#f6e6c0"));
  }

  /* 4. Belmont Park in Elmont: the long green grandstand roof with white trim, the infield, the white rail,
        a dark horse coming down the stretch in front */
  function belmont() {
    let posts = "";
    for (let x = 10; x < 400; x += 22) posts += '<rect x="' + x + '" y="186" width="3" height="14" fill="#fff"/>';
    let seats = "";
    for (let y = 92; y < 140; y += 8) seats += '<path d="M24 ' + y + 'h352" stroke="#e8e2d2" stroke-width="2" opacity=".55"/>';
    const horse = (fill, cap, x) =>
      '<g transform="translate(' + x + ' 0)">' +
      '<ellipse cx="30" cy="212" rx="22" ry="9" fill="' + fill + '"/>' +
      '<path d="M48 208l14-14 6 3-12 16z" fill="' + fill + '"/><path d="M60 192l9 2-2 6-8-3z" fill="' + fill + '"/>' +
      '<path d="M12 210q-12 0-14 10" stroke="' + fill + '" stroke-width="3" fill="none"/>' +
      '<g class="gal"><path d="M16 218l-6 14M22 219l2 14" stroke="' + fill + '" stroke-width="3"/></g>' +
      '<g class="gal gal2"><path d="M40 219l-4 14M46 217l8 13" stroke="' + fill + '" stroke-width="3"/></g>' +
      '<path d="M28 202l4-10 8 2-2 8z" fill="' + cap + '"/><circle cx="37" cy="190" r="3.5" fill="' + cap + '"/>' +
      '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="cld">' + cloud(40, 26, 1) + '</g><g class="cld cld2">' + cloud(90, 40, .8) + '</g>' +
      /* trees behind */
      (function () { let t = ""; for (let x = -10; x < 410; x += 28) t += '<circle cx="' + x + '" cy="' + (78 + (x * 5) % 8) + '" r="16" fill="#2f6a35"/>'; return t; })() +
      /* grandstand */
      '<rect x="20" y="84" width="360" height="66" fill="#d9d3c3"/>' + seats +
      '<path d="M10 70h380l-12 18H22z" fill="#1f5a3a"/><rect x="10" y="66" width="380" height="5" fill="#fff"/>' +
      '<path d="M50 88v62M120 88v62M190 88v62M260 88v62M330 88v62" stroke="#1f5a3a" stroke-width="3"/>' +
      '<rect x="20" y="140" width="360" height="12" fill="#1f5a3a"/>' +
      '<text x="200" y="149" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8" letter-spacing="4" fill="#fff">BELMONT PARK</text>' +
      /* turf + dirt track */
      '<rect x="0" y="152" width="400" height="34" fill="#4c9a45"/>' +
      '<rect x="0" y="186" width="400" height="4" fill="#fff"/>' + posts +
      '<rect x="0" y="200" width="400" height="60" fill="#a8774a"/><path d="M0 246h400" stroke="#8e6038" stroke-width="2"/>' +
      '<g class="run">' + horse("#1a1414", GOLD, 0) + horse("#8a5a32", "#fff", 90) + '</g>' +
      '<rect x="358" y="120" width="5" height="66" fill="#fff"/><circle cx="360.5" cy="118" r="8" fill="#fff"/><circle cx="360.5" cy="118" r="5" fill="' + WINE + '"/>',
      sky("g4", "#7fbbe4", "#e3f0f7"));
  }

  /* 5. Main St and Fulton Av in Hempstead village at night: street signs, a streetlight, the wall with the name on it */
  function corner() {
    let b = "";
    for (let y = 70; y < 220; y += 12) for (let x = 20 + ((y / 12) % 2 ? 0 : 12); x < 250; x += 24) b += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#4a3236"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(22) +
      '<rect x="0" y="40" width="40" height="180" fill="#2a2430"/><rect x="330" y="30" width="70" height="190" fill="#2a2430"/>' +
      (function () { let w = ""; for (let y = 44; y < 210; y += 14) w += '<rect x="340" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity="' + (y % 28 ? .8 : .25) + '"/><rect x="360" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity="' + (y % 42 ? .3 : .85) + '"/><rect x="380" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity=".55"/>'; return w; })() +
      '<rect x="20" y="70" width="230" height="150" fill="#3a2a2e"/>' + b +
      tag("ROC MARCIANO", 30, 132, 27, GOLD, -7) + tag("U.N.", 40, 196, 30, WINE, -4) + tag("MARCI", 140, 202, 28, EMER, -9) +
      '<rect x="292" y="56" width="5" height="164" fill="#1d2329"/><path d="M294 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M310 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M310 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="298" y="101" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="256" y="110" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="298" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Fulton Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="carb"><g transform="translate(0 256) scale(-1 1) translate(-44 0)">' + carShape(WINE) + '</g></g>',
      sky("g5", "#0d1426", "#2b2a4f"));
  }

  window.SCENES = { train, hofstra, coliseum, belmont, corner };
})();
