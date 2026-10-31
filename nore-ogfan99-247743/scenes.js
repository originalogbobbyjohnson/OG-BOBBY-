/* LeFrak City / Corona, Queens opening scenes for the N.O.R.E. game. Each one is a small animated SVG, 400 x 260.
   Other Queens games already use QB, LIC, Jamaica, Flushing Meadows (Unisphere), Forest Hills, Roosevelt Av, Rockaway and the
   Elmhurst gas tanks, so these rooms use: the M/R at Woodhaven Blvd under Queens Blvd, the LeFrak City towers beside the
   Long Island Expressway (he grew up in apartment 5E), the Louis Armstrong House on 107th St in Corona, the Queens Center
   exterior with its glass skybridge over 92nd St, and Junction Blvd & 57th Av at the edge of LeFrak City. */
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
    '@keyframes blink{0%,100%{opacity:.3}50%{opacity:1}}' +
    '.blk{animation:blink 1.4s infinite}.blk2{animation-delay:-.7s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}' +
    '.nt{animation:note 3.6s ease-out infinite}.nt2{animation-delay:-1.2s}.nt3{animation-delay:-2.4s}' +
    '@keyframes walk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.wk{animation:walk 11s linear infinite}.wk2{animation-delay:-4s}.wk3{animation-delay:-7.5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
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
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".7"><ellipse cx="0" cy="0" rx="22" ry="8"/><ellipse cx="14" cy="-5" rx="14" ry="8"/><ellipse cx="-12" cy="-3" rx="11" ry="6"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const carShape = (c) => '<rect x="0" y="-12" width="44" height="12" rx="3" fill="' + c + '"/><path d="M8 -12l6-8h16l6 8z" fill="' + c + '"/><path d="M15 -13l4-5h6v5zM27 -13v-5h3l4 5z" fill="#cfe6ff"/>' +
    '<circle cx="10" cy="0" r="4" fill="#111"/><circle cx="34" cy="0" r="4" fill="#111"/><circle cx="43" cy="-8" r="1.8" fill="#fff6c2"/>';
  const ORANGE = "#ff6319", YEL = "#fccc0a", GOLD = "#ffcc33", RED = "#e63946", CYAN = "#38e8ff";

  /* 1. The M and R pulling into Woodhaven Blvd, underground under Queens Blvd: white tile walls, a blue trim band, steel columns */
  function train() {
    let tiles = "";
    for (let x = 0; x < 400; x += 10) tiles += '<path d="M' + x + ' 20v100" stroke="#d9d6cc" stroke-width=".6"/>';
    for (let y = 20; y < 120; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d6cc" stroke-width=".6"/>';
    let cols = "";
    for (let x = 40; x < 400; x += 90) cols += '<rect x="' + x + '" y="20" width="8" height="200" fill="#26435e"/><rect x="' + (x - 2) + '" y="20" width="12" height="5" fill="#1b3247"/>';
    let colsLow = "";
    for (let x = 40; x < 400; x += 90) colsLow += '<rect x="' + x + '" y="120" width="8" height="80" fill="#26435e"/>';
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="148" width="28" height="22" rx="3" fill="#fff6d8" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#151515"/>' +
      '<rect x="0" y="20" width="400" height="100" fill="#f1eee4"/>' + tiles +
      '<rect x="0" y="34" width="400" height="14" fill="#2b4f86"/><rect x="0" y="48" width="400" height="3" fill="#111"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#3a3a3a"/>' +
      '<rect x="60" y="6" width="40" height="6" rx="2" fill="#fffbe0" class="flk"/><rect x="250" y="6" width="40" height="6" rx="2" fill="#fffbe0" class="flk flk2"/>' +
      cols +
      '<rect x="28" y="60" width="344" height="36" rx="4" fill="#111"/>' +
      '<rect x="28" y="60" width="344" height="4" fill="#fff"/>' +
      '<text x="40" y="85" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Woodhaven Blvd</text>' +
      bullet(318, 78, "M", ORANGE) + bullet(346, 78, "R", YEL, true) +
      '<g class="anim-train">' +
        '<rect x="6" y="128" width="310" height="66" rx="8" fill="#c9ced3" stroke="#6d757c" stroke-width="2"/>' +
        '<rect x="6" y="134" width="310" height="5" fill="' + ORANGE + '"/>' +
        windows +
        '<rect x="292" y="146" width="18" height="34" rx="2" fill="#30363b"/>' +
        bullet(301, 160, "R", YEL, true) +
        '<rect x="6" y="186" width="310" height="8" fill="#5c646b"/>' +
      '</g>' +
      colsLow +
      '<rect x="0" y="198" width="400" height="10" fill="#e8c43a"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#57524b"/>' +
      '<path d="M0 230h400" stroke="#4a463f" stroke-width="2"/>' +
      tag("WHAT WHAT", 228, 248, 20, GOLD, -4));
  }

  /* 2. LeFrak City: the tan-brick towers named after cities of the world, rooftop solar panels, apartment 5E lit up,
        the Long Island Expressway rolling past in both directions */
  function lefrak() {
    const tower = (x, w, top, name) => {
      let s = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (196 - top) + '" fill="#c9a77a"/>' +
        '<rect x="' + (x + w * 0.38) + '" y="' + (top - 8) + '" width="' + (w * 0.24) + '" height="' + (196 - top + 8) + '" fill="#b8936a"/>' +
        '<rect x="' + (x + 4) + '" y="' + (top - 4) + '" width="' + (w - 8) + '" height="4" fill="#3b5d8a"/>';
      for (let y = top + 8; y < 190; y += 9) for (let i = 0; i < 5; i++) {
        const wx = x + 5 + i * (w - 10) / 5;
        s += '<rect x="' + wx.toFixed(1) + '" y="' + y + '" width="' + ((w - 10) / 5 - 3).toFixed(1) + '" height="5" fill="#2b3442"/>';
      }
      for (let y = top + 14; y < 190; y += 18) s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="1.5" fill="#f2e6d0" opacity=".8"/>';
      if (name) s += '<text x="' + (x + w / 2) + '" y="' + (top + 4 - 10) + '" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7" letter-spacing="1" fill="#f2e6d0">' + name + '</text>';
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld">' + cloud(40, 34, 1) + '</g><g class="cld cld2">' + cloud(80, 22, .8) + '</g>' +
      tower(14, 66, 70, "LONDON") + tower(100, 70, 52, "PARIS") + tower(190, 66, 66, "MEXICO") + tower(276, 70, 56, "MANDALAY") +
      /* apartment 5E glowing */
      '<rect class="blk" x="140.6" y="160" width="9" height="5" fill="#ffd96b"/>' +
      '<rect x="356" y="96" width="44" height="100" fill="#b8936a"/>' +
      /* sign */
      '<rect x="128" y="176" width="144" height="22" rx="3" fill="#123a5c" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="192" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="3" fill="#fff">LEFRAK CITY</text>' +
      /* the LIE */
      '<rect x="0" y="198" width="400" height="8" fill="#8b929a"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2c2f33"/>' +
      '<path d="M0 232h400" stroke="#eab308" stroke-width="2"/><path d="M0 219h400M0 246h400" stroke="#fff" stroke-width="1.5" stroke-dasharray="16 14"/>' +
      '<g class="car"><g transform="translate(0 228)">' + carShape(RED) + '</g></g>' +
      '<g class="car car2"><g transform="translate(0 228)">' + carShape("#f4f1e8") + '</g></g>' +
      '<g class="carb"><g transform="translate(0 256) scale(-1 1) translate(-44 0)">' + carShape(CYAN) + '</g></g>' +
      '<g class="carb carb2"><g transform="translate(0 256) scale(-1 1) translate(-44 0)">' + carShape(GOLD) + '</g></g>' +
      
      sky("g2", "#6fb3e6", "#d8ecf7"));
  }

  /* 3. The Louis Armstrong House on 107th St in Corona: two-story red brick, white trim, the little porch and hedges,
        music notes floating out of the window */
  function armstrong() {
    let brick = "";
    for (let y = 72; y < 206; y += 7) for (let x = 100 + ((y / 7) % 2 ? 0 : 7); x < 287; x += 14) brick += '<rect x="' + x + '" y="' + y + '" width="12" height="5" fill="#9c3a2a" opacity=".55"/>';
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="30" height="40" fill="#fff"/><rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="24" height="34" fill="#2a3644"/>' +
      '<path d="M' + (x + 15) + ' ' + (y + 3) + 'v34M' + (x + 3) + ' ' + (y + 20) + 'h24" stroke="#fff" stroke-width="2"/>';
    const note = (cls, x, y, c) => '<g class="nt ' + cls + '"><path d="M' + x + ' ' + y + 'v-16l10-3v16" stroke="' + c + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 2) + '" cy="' + y + '" rx="3.5" ry="2.6" fill="' + c + '"/><ellipse cx="' + (x + 8) + '" cy="' + (y - 3) + '" rx="3.5" ry="2.6" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cld">' + cloud(30, 30, .9) + '</g>' +
      /* neighbor houses */
      '<rect x="0" y="96" width="96" height="110" fill="#c7b9a3"/><path d="M0 96h96" stroke="#8a7a62" stroke-width="4"/>' +
      '<rect x="304" y="90" width="96" height="116" fill="#d9cbb0"/><path d="M304 90h96" stroke="#8a7a62" stroke-width="4"/>' +
      '<rect x="18" y="120" width="22" height="30" fill="#2a3644"/><rect x="56" y="120" width="22" height="30" fill="#2a3644"/>' +
      '<rect x="324" y="114" width="22" height="30" fill="#2a3644"/><rect x="362" y="114" width="22" height="30" fill="#2a3644"/>' +
      /* the house */
      '<rect x="100" y="66" width="200" height="140" fill="#b5503a"/>' + brick +
      '<rect x="96" y="60" width="208" height="8" fill="#f4f1e8"/><rect x="100" y="134" width="200" height="4" fill="#f4f1e8"/>' +
      win(118, 80) + win(185, 80) + win(252, 80) +
      win(118, 148) + win(252, 148) +
      /* door + porch */
      '<rect x="186" y="146" width="28" height="56" fill="#f4f1e8"/><rect x="190" y="150" width="20" height="52" fill="#3b2a20"/><circle cx="206" cy="178" r="1.5" fill="' + GOLD + '"/>' +
      '<rect x="172" y="138" width="56" height="6" fill="#f4f1e8"/>' +
      '<path d="M176 202v-24M224 202v-24M176 182h48" stroke="#111" stroke-width="2"/>' +
      '<rect x="168" y="202" width="64" height="5" fill="#bfb8ac"/><rect x="164" y="207" width="72" height="5" fill="#a9a296"/>' +
      /* hedges */
      '<path d="M100 212q8-18 16-2q8-16 16 0q8-16 16 0q8-14 14 2z" fill="#3f7a3a"/>' +
      '<path d="M236 212q8-18 16-2q8-16 16 0q8-16 16 0q8-14 16 2z" fill="#3f7a3a"/>' +
      '<rect x="0" y="206" width="400" height="16" fill="#9aa1a6"/><rect x="0" y="222" width="400" height="38" fill="#3a3d42"/>' +
      note("", 270, 84, GOLD) + note("nt2", 262, 92, "#fff") + note("nt3", 278, 88, CYAN) +
      '<rect x="126" y="232" width="148" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="245" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">107 St · CORONA</text>',
      sky("g3", "#8cc4ec", "#e9f3f8"));
  }

  /* 4. Queens Center on Queens Blvd: the curved glass front, the glass skybridge over 92nd St, shoppers crossing */
  function mall() {
    let glass = "";
    for (let x = 18; x < 168; x += 15) glass += '<path d="M' + x + ' 60v136" stroke="#a7c6d9" stroke-width="1.2"/>';
    for (let y = 72; y < 196; y += 16) glass += '<path d="M10 ' + y + 'h160" stroke="#a7c6d9" stroke-width="1"/>';
    let glass2 = "";
    for (let x = 238; x < 392; x += 15) glass2 += '<path d="M' + x + ' 70v126" stroke="#a7c6d9" stroke-width="1.2"/>';
    let shoppers = "";
    [["", "#f4f1e8"], ["wk2", GOLD], ["wk3", RED]].forEach(([c, col]) => {
      shoppers += '<g class="wk ' + c + '"><g transform="translate(0 106)"><circle cx="6" cy="-14" r="3.5" fill="#1b2430"/><rect x="2.5" y="-10" width="7" height="11" rx="2" fill="' + col + '"/><rect x="10" y="-6" width="5" height="6" fill="#fff" opacity=".85"/></g></g>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="cld">' + cloud(60, 26, .9) + '</g><g class="cld cld2">' + cloud(120, 40, .7) + '</g>' +
      /* west building, curved glass corner */
      '<path d="M10 196V70q0-14 14-14h146v140z" fill="#3e6f8f"/>' + glass +
      '<path d="M10 70q0-14 14-14h146v10H24q-14 0-14 14z" fill="#d7dde2"/>' +
      '<rect x="10" y="178" width="160" height="18" fill="#c7cdd2"/>' +
      /* east building */
      '<rect x="230" y="64" width="162" height="132" fill="#4a7c9b"/>' + glass2 +
      '<rect x="230" y="60" width="162" height="10" fill="#d7dde2"/><rect x="230" y="178" width="162" height="18" fill="#c7cdd2"/>' +
      /* skybridge */
      '<rect x="168" y="88" width="64" height="24" fill="#9fd0ea" opacity=".85" stroke="#d7dde2" stroke-width="3"/>' +
      '<path d="M184 88v24M200 88v24M216 88v24" stroke="#d7dde2" stroke-width="1.5"/>' +
      '<g>' + '<clipPath id="br"><rect x="168" y="88" width="64" height="24"/></clipPath>' + '</g>' +
      '<g clip-path="url(#br)">' + shoppers + '</g>' +
      '<text x="90" y="50" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="3" fill="#123a5c">QUEENS CENTER</text>' +
      /* 92nd St under the bridge, Queens Blvd in front */
      '<rect x="170" y="150" width="60" height="46" fill="#3a3d42"/>' +
      '<rect x="0" y="196" width="400" height="12" fill="#aab0b5"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#2c2f33"/><path d="M0 234h400" stroke="#fff" stroke-width="1.5" stroke-dasharray="16 14"/>' +
      '<g class="car"><g transform="translate(0 228)">' + carShape(GOLD) + '</g></g>' +
      '<g class="carb"><g transform="translate(0 254) scale(-1 1) translate(-44 0)">' + carShape(RED) + '</g></g>' +
      '<rect x="340" y="150" width="4" height="46" fill="#1d2329"/><rect x="296" y="140" width="92" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="342" y="152" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Queens Blvd</text>',
      sky("g4", "#7fbbe4", "#e3f0f7"));
  }

  /* 5. Junction Blvd and 57th Av at the edge of LeFrak City: street signs, a streetlight, the tag wall */
  function corner() {
    let b = "";
    for (let y = 70; y < 220; y += 12) for (let x = 20 + ((y / 12) % 2 ? 0 : 12); x < 250; x += 24) b += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#4a3b36"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(22) +
      '<rect x="0" y="40" width="40" height="180" fill="#2a2430"/><rect x="330" y="30" width="70" height="190" fill="#2a2430"/>' +
      (function () { let w = ""; for (let y = 44; y < 210; y += 14) w += '<rect x="340" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity="' + (y % 28 ? .8 : .25) + '"/><rect x="360" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity="' + (y % 42 ? .3 : .85) + '"/><rect x="380" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity=".55"/>'; return w; })() +
      '<rect x="20" y="70" width="230" height="150" fill="#3a2f2c"/>' + b +
      tag("N.O.R.E.", 34, 140, 38, GOLD, -7) + tag("CNN", 44, 196, 28, RED, -4) + tag("5E", 160, 200, 30, CYAN, -10) +
      '<rect x="292" y="56" width="5" height="164" fill="#1d2329"/><path d="M294 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M310 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M310 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="250" y="88" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="298" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Junction Blvd</text>' +
      '<rect x="262" y="110" width="72" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="298" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">57 Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1426", "#2b2a4f"));
  }

  window.SCENES = { train, lefrak, armstrong, mall, corner };
})();
