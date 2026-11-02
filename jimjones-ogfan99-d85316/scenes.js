/* Harlem opening scenes for the Jim Jones game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.3}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes fly{0%{transform:translate(0,0)}25%{transform:translate(60px,-30px)}50%{transform:translate(130px,-10px)}75%{transform:translate(60px,14px)}100%{transform:translate(0,0)}}' +
    '.flock{animation:fly 7s ease-in-out infinite}.flock2{animation-delay:-3.5s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.wing{transform-box:fill-box;transform-origin:50% 100%;animation:flap .35s ease-in-out infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}' +
    '.tree{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3.2s ease-in-out infinite}' +
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
  const bird = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="6" ry="3.2" fill="' + (c || "#5d6b7c") + '"/><circle cx="6" cy="-1.5" r="2.2" fill="' + (c || "#5d6b7c") + '"/>' +
    '<g class="wing"><path d="M-3 -1q4 -9 9 -1z" fill="#8795a6"/></g></g>';
  const RED = "#e0263a", GOLD = "#f2c14e", PURP = "#a46cf0";

  /* 1. 125 St on St. Nicholas Av, underground: the A pulling in, the green-and-gold band, the Byrd Gang poster on the wall, a pigeon strutting the platform edge and one flying the tunnel */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfcabc" stroke-width=".8"/>';
    let mosaic = "";
    for (let x = 0; x < 400; x += 16) mosaic += '<rect x="' + x + '" y="30" width="8" height="8" fill="#2f5d3a"/><rect x="' + (x + 8) + '" y="30" width="8" height="8" fill="#c9a24a"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1d2a22"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#2b3a30"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#14110d"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2620"/><rect x="0" y="30" width="400" height="88" fill="#ece6d6"/>' + tiles + mosaic +
      /* station sign, left */
      '<rect x="38" y="50" width="196" height="34" rx="4" fill="#111"/><rect x="38" y="50" width="196" height="4" fill="#fff"/>' +
      '<text x="50" y="75" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">125 St</text>' +
      bullet(130, 68, "A", "#0039a6") + bullet(154, 68, "B", "#ff6319") + bullet(178, 68, "C", "#0039a6") + bullet(202, 68, "D", "#ff6319") +
      bird(80, 46, 1, "#8795a6") +
      /* the Byrd Gang poster, right */
      '<rect x="252" y="42" width="110" height="70" fill="#1a1020" stroke="' + PURP + '" stroke-width="3"/>' +
      '<text x="307" y="62" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + GOLD + '">BYRD GANG</text>' + bird(307, 82, 1.6, "#cfd6de") +
      '<text x="307" y="106" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">WE FLY HIGH</text>' +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#0a0907"/>' +
      '<g class="anim-train"><rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="5" fill="#0039a6"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#ffe9b0" opacity=".85"/><circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 142, "A", "#0039a6") +
      '</g>' + cols +
      '<g class="flock">' + bird(330, 132, 1.2, "#cfd6de") + '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/><rect x="0" y="196" width="400" height="64" fill="#2a2620"/>' +
      '<g class="car" style="animation-duration:14s">' + bird(0, 206, 1.4) + '</g>' +
      tag("BYRD GANG", 24, 244, 30, PURP, -4) + tag("CAPO", 296, 246, 32, RED, -8));
  }

  /* 2. Strivers' Row: the red-brick and pale-stone rowhouses on W 138-139 St, and the old "walk your horses" sign */
  function strivers() {
    let houses = "";
    for (let i = 0; i < 4; i++) {
      const x = 8 + i * 98;
      houses += '<rect x="' + x + '" y="52" width="94" height="170" fill="#9c3b25"/>' +
        '<rect x="' + x + '" y="46" width="94" height="10" fill="#e8dcc0"/><rect x="' + x + '" y="40" width="94" height="6" fill="#cbbd9c"/>' +
        '<rect x="' + x + '" y="176" width="94" height="46" fill="#d9ccb0"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
        const wx = x + 10 + c * 28, wy = 66 + r * 36;
        houses += '<rect x="' + (wx - 2) + '" y="' + (wy - 4) + '" width="22" height="5" fill="#e8dcc0"/><rect x="' + wx + '" y="' + wy + '" width="18" height="24" fill="' + ((r + c + i) % 3 ? "#2a2018" : "#ffd98a") + '"/>' +
          '<path d="M' + (wx + 9) + ' ' + wy + 'v24M' + wx + ' ' + (wy + 12) + 'h18" stroke="#e8dcc0" stroke-width="1.2"/>';
      }
      houses += '<path d="M' + (x + 36) + ' 222v-34a11 11 0 0 1 22 0v34z" fill="#3b2418" stroke="#e8dcc0" stroke-width="2"/>' +
        '<circle cx="' + (x + 52) + '" cy="206" r="1.6" fill="' + GOLD + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(16) +
      '<g class="cld"><ellipse cx="0" cy="22" rx="40" ry="7" fill="#fff" opacity=".12"/></g>' +
      houses +
      /* sidewalk + iron fence */
      '<rect x="0" y="222" width="400" height="38" fill="#2b2a2c"/>' +
      (function () { let f = ""; for (let x = 4; x < 400; x += 10) f += '<rect x="' + x + '" y="210" width="2" height="14" fill="#111"/>'; return f + '<rect x="0" y="210" width="400" height="2" fill="#111"/>'; })() +
      /* street tree */
      '<g class="tree"><rect x="203" y="168" width="5" height="56" fill="#3a2a1a"/><circle cx="205" cy="162" r="22" fill="#2f6b34"/><circle cx="192" cy="172" r="14" fill="#3d8540"/><circle cx="219" cy="170" r="14" fill="#3d8540"/></g>' +
      /* the painted alley sign */
      '<rect x="292" y="12" width="104" height="30" rx="2" fill="#f4efe1" stroke="#1d1d1d" stroke-width="2"/>' +
      '<text x="344" y="24" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#1d1d1d">PRIVATE ROAD</text>' +
      '<text x="344" y="36" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#1d1d1d">WALK YOUR HORSES</text>' +
      tag("STRIVERS ROW", 18, 30, 24, GOLD, -4),
      sky("g2", "#0c0a1e", "#3a2a55"));
  }

  /* 3. The Taft Houses on Madison Av, E 112th to 115th: the tall brick NYCHA towers right at his corner, windows lighting up, the courtyard trees, a bus going up Madison */
  function stateoffice() {
    const tower = (x, y, w, c) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (214 - y) + '" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (y - 6) + '" width="' + (w + 4) + '" height="6" fill="#3a2418"/>';
      for (let yy = y + 8; yy < 206; yy += 12) for (let xx = x + 6; xx < x + w - 8; xx += 12) s += '<rect' + ((xx * 3 + yy) % 11 === 0 ? ' class="flk"' : '') + ' x="' + xx + '" y="' + yy + '" width="6" height="7" fill="' + ((xx + yy) % 5 ? "#2a1d17" : "#ffd98a") + '"/>';
      return s; };
    const cab = (cls, c) => '<g class="' + cls + '"><rect x="0" y="226" width="44" height="14" rx="4" fill="' + c + '"/><path d="M8 226l6-8h16l6 8z" fill="' + c + '"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="34" cy="240" r="4" fill="#111"/><rect x="40" y="229" width="4" height="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(18) + '<circle cx="360" cy="40" r="14" fill="#fff4d6" opacity=".9"/>' +
      tower(10, 36, 110, "#8a4434") + tower(146, 20, 120, "#7a3c2e") + tower(292, 46, 100, "#8a4434") +
      /* the courtyard trees and fence */
      '<rect x="0" y="206" width="400" height="10" fill="#4a6a3a"/>' +
      [70, 210, 340].map(x => '<g class="tree"><rect x="' + (x - 2) + '" y="186" width="4" height="22" fill="#3a2a1a"/><circle cx="' + x + '" cy="182" r="14" fill="#2f6b34"/></g>').join("") +
      (function () { let f = ""; for (let x = 0; x < 400; x += 8) f += '<rect x="' + x + '" y="208" width="2" height="12" fill="#111"/>'; return f; })() +
      '<rect x="0" y="216" width="400" height="8" fill="#8a847a"/><rect x="0" y="224" width="400" height="36" fill="#1c1a1e"/><path d="M0 246h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      cab("car", "#f2c200") + cab("car car2", "#c4122f") +
      '<rect x="10" y="8" width="124" height="34" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="72" y="22" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">TAFT HOUSES</text>' +
      '<text x="72" y="35" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">MADISON AV · E 112–115</text>' +
      tag("BYRD GANG", 270, 30, 20, GOLD, -5),
      sky("g3", "#0a0b1e", "#3c2f5c"));
  }

  /* 4. A Harlem rooftop pigeon coop at dusk: wire coop, flag pole, the flock circling high */
  function coop() {
    let mesh = "";
    for (let x = 152; x <= 300; x += 8) mesh += '<path d="M' + x + ' 130v62" stroke="#c9cfd6" stroke-width=".7"/>';
    for (let y = 130; y <= 192; y += 8) mesh += '<path d="M152 ' + y + 'h148" stroke="#c9cfd6" stroke-width=".7"/>';
    let flock1 = "", flock2 = "";
    [[0, 0], [16, -8], [30, 4], [-14, 10], [8, 16]].forEach(p => flock1 += bird(60 + p[0], 70 + p[1], 1.1));
    [[0, 0], [18, 6], [-12, -6], [30, -4]].forEach(p => flock2 += bird(230 + p[0], 50 + p[1], 0.9, "#cfd6de"));
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="330" cy="70" r="26" fill="#ffb15c" opacity=".85"/>' +
      /* skyline behind */
      '<path d="M0 170h30v-30h24v18h30v-40h20v52h40v-26h26v26h70v-36h22v36h40v-50h18v50h80v90H0z" fill="#2b1a2e"/>' +
      /* roof */
      '<rect x="0" y="196" width="400" height="64" fill="#3b2f33"/><rect x="0" y="192" width="400" height="6" fill="#5a4a4c"/>' +
      /* the coop */
      '<path d="M146 130l80-22 80 22z" fill="#5a3a24" stroke="#2e1c10" stroke-width="2"/>' +
      '<rect x="150" y="130" width="152" height="64" fill="#2a1d17" opacity=".75"/>' + mesh +
      '<rect x="150" y="130" width="152" height="64" fill="none" stroke="#6b4a2c" stroke-width="4"/>' +
      '<rect x="210" y="150" width="30" height="44" fill="#6b4a2c"/>' +
      bird(176, 186, .8, "#e9edf1") + bird(276, 184, .8) +
      /* pole with a rag flag, the old coop-man signal */
      '<rect x="330" y="96" width="3" height="100" fill="#1a1a1a"/>' +
      '<g class="tree"><path d="M333 98h28l-6 8 6 8h-28z" fill="' + RED + '"/></g>' +
      '<g class="flock">' + flock1 + '</g><g class="flock flock2">' + flock2 + '</g>' +
      tag("WE FLY HIGH", 18, 238, 28, GOLD, -4) + tag("BYRD", 300, 244, 26, PURP, -7),
      sky("g4", "#1a1240", "#e0794a"));
  }

  /* 5. Madison Av and E 115 St by the Taft Houses: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      /* tower block behind */
      '<rect x="250" y="20" width="140" height="200" fill="#5a3a2e"/>' +
      (function () { let w = ""; for (let y = 30; y < 210; y += 16) for (let x = 260; x < 380; x += 20) w += '<rect x="' + x + '" y="' + y + '" width="10" height="8" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      /* wall with the tag */
      '<rect x="20" y="70" width="230" height="150" fill="#3a3a44"/>' +
      tag("JIM JONES", 30, 146, 34, RED, -7) + tag("VAMP LIFE", 52, 196, 26, PURP, -3) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="258" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Madison Av</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 115 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#140b1e", "#3a2140"));
  }

  window.SCENES = { train, strivers, stateoffice, coop, corner };
})();
