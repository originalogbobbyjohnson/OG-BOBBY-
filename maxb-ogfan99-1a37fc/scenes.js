/* Harlem opening scenes for the Max B game: the Wave. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes surf{0%,100%{transform:translateX(0)}50%{transform:translateX(-20px)}}' +
    '.wv{animation:surf 3s ease-in-out infinite}.wv2{animation-delay:-1.5s}' +
    '@keyframes glide{0%,100%{transform:translate(0,0)}50%{transform:translate(70px,3px)}}' +
    '.glide{animation:glide 9s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}' +
    '.glow{animation:glow 2.6s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
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
  /* a rolling wave crest */
  const crest = (y, c, cls) => '<g class="' + cls + '"><path d="M-30 ' + y + (function () { let d = ""; for (let x = -30; x < 440; x += 40) d += 'q10 -12 20 0t20 0'; return d; })() + 'V260H-30z" fill="' + c + '"/></g>';
  const AQUA = "#9fe3ff", TEAL = "#2ec4b6", GOLD = "#f2c14e", SILVER = "#c9d3dc";

  /* 1. The 3 pulling into Harlem–148 St, the end of the line under Lenox Av: white tile, red tile band, black columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfcabc" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#cfcabc" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="30" width="8" height="8" fill="#a8322a"/><rect x="' + (x + 8) + '" y="30" width="8" height="8" fill="#e8dcc0"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1a1d22"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#2b3038"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#111317"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#24272c"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#ece6d6"/>' + tiles + band +
      '<rect x="64" y="54" width="272" height="36" rx="4" fill="#111"/>' +
      '<rect x="64" y="54" width="272" height="4" fill="#fff"/>' +
      '<text x="78" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Harlem–148 St</text>' +
      bullet(310, 73, "3", "#ee352e") +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#08090b"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="5" fill="#ee352e"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
        bullet(296, 142, "3", "#ee352e") +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#24272c"/>' +
      tag("WAVY", 24, 242, 34, AQUA, -5) + tag("BIGGAVELI", 214, 244, 28, GOLD, -7));
  }

  /* 2. The Hotel Theresa at 125th and Adam Clayton Powell Jr Blvd: white terracotta tower, the zigzag cornice bands, traffic */
  function theresa() {
    let wins = "";
    for (let y = 62; y < 210; y += 14) for (let x = 112; x < 290; x += 14) wins += '<rect' + ((x * 3 + y) % 7 === 0 ? ' class="flk"' : "") + ' x="' + x + '" y="' + y + '" width="8" height="9" fill="' + ((x * 5 + y) % 4 === 0 ? "#ffe08a" : "#3a4a5c") + '"/>';
    let zig = "";
    for (let x = 104; x < 296; x += 12) zig += '<path d="M' + x + ' 50l6 -8 6 8" stroke="#9fb4c4" stroke-width="2" fill="none"/>';
    const cab = (cls, c) => '<g class="' + cls + '"><rect x="0" y="226" width="44" height="14" rx="4" fill="' + c + '"/><path d="M8 226l6-8h16l6 8z" fill="' + c + '"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="34" cy="240" r="4" fill="#111"/><rect x="40" y="229" width="4" height="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(20) +
      '<rect x="8" y="140" width="84" height="80" fill="#4a3530"/><rect x="310" y="126" width="84" height="94" fill="#3b2c3a"/>' +
      '<rect x="22" y="154" width="12" height="14" fill="#ffd98a"/><rect x="330" y="146" width="12" height="14" fill="#ffd98a"/><rect x="364" y="180" width="12" height="14" fill="#2a2018"/>' +
      /* the tower: white terracotta */
      '<rect x="102" y="40" width="196" height="172" fill="#f1eee6"/>' +
      '<rect x="98" y="32" width="204" height="10" fill="#e3ded2"/>' + zig + wins +
      '<rect x="102" y="104" width="196" height="4" fill="#9fb4c4"/><rect x="102" y="160" width="196" height="4" fill="#9fb4c4"/>' +
      /* the old rooftop sign */
      '<rect x="150" y="6" width="100" height="22" fill="#1a1a1a"/><rect x="170" y="28" width="4" height="6" fill="#1a1a1a"/><rect x="226" y="28" width="4" height="6" fill="#1a1a1a"/>' +
      '<text class="glow" x="200" y="22" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="2" fill="#ff5a6e">THERESA</text>' +
      '<rect x="0" y="212" width="400" height="12" fill="#8a847a"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#1c1a1e"/><path d="M0 246h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      cab("car", "#f2c200") + cab("car car2", "#2ec4b6") +
      '<rect x="8" y="8" width="128" height="22" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="72" y="23" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 125 St</text>',
      sky("g2", "#0a0b1e", "#3a2f5c"));
  }

  /* 3. Abyssinian Baptist Church on W 138th: grey stone Gothic front, the big pointed window glowing, the choir going */
  function church() {
    let stones = "";
    for (let y = 60; y < 216; y += 10) stones += '<path d="M96 ' + y + 'h208" stroke="#6f7680" stroke-width=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(24) +
      '<circle cx="64" cy="48" r="14" fill="#fff4d6" opacity=".9"/>' +
      /* side rowhouses */
      '<rect x="0" y="110" width="90" height="110" fill="#6b3528"/><rect x="310" y="104" width="90" height="116" fill="#6b3528"/>' +
      '<rect x="14" y="126" width="14" height="20" fill="#ffd98a"/><rect x="50" y="126" width="14" height="20" fill="#2a2018"/><rect x="330" y="122" width="14" height="20" fill="#2a2018"/><rect x="366" y="122" width="14" height="20" fill="#ffd98a"/>' +
      /* the church front: grey bluestone with pale limestone trim */
      '<rect x="96" y="60" width="208" height="160" fill="#8a919a"/>' + stones +
      '<path d="M92 64l108 -36 108 36z" fill="#7a818a" stroke="#d8d2c2" stroke-width="3"/>' +
      '<rect x="90" y="60" width="14" height="160" fill="#d8d2c2"/><rect x="296" y="60" width="14" height="160" fill="#d8d2c2"/>' +
      '<path d="M90 60l7 -16 7 16zM296 60l7 -16 7 16z" fill="#d8d2c2"/>' +
      /* great pointed window */
      '<path d="M160 160v-54q40 -56 80 0v54z" fill="#d8d2c2"/>' +
      '<path class="glow" d="M166 158v-50q34 -48 68 0v50z" fill="#f2b84e"/>' +
      '<path d="M200 70v88M183 90v68M217 90v68M166 124h68" stroke="#4a3a2a" stroke-width="2"/>' +
      /* doors */
      '<path d="M178 220v-34a22 22 0 0 1 44 0v34z" fill="#5a2a1a" stroke="#d8d2c2" stroke-width="3"/><path d="M200 172v48" stroke="#d8d2c2" stroke-width="2"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#24262c"/><rect x="0" y="216" width="400" height="6" fill="#4a4c52"/>' +
      /* music rising */
      '<text class="note" x="128" y="150" font-size="18" fill="' + GOLD + '">♪</text><text class="note note2" x="256" y="150" font-size="18" fill="' + AQUA + '">♫</text><text class="note note3" x="200" y="56" font-size="16" fill="#fff">♪</text>' +
      '<rect x="270" y="10" width="124" height="22" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="332" y="25" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 138 St</text>',
      sky("g3", "#0b0d24", "#2c2a5a"));
  }

  /* 4. The Harlem Meer at the top of Central Park: the boathouse-style Discovery Center, willows, the water in waves, a little boat drifting */
  function meer() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="320" cy="84" r="28" fill="#ffb15c" opacity=".9"/>' +
      '<g class="cld"><ellipse cx="0" cy="40" rx="44" ry="8" fill="#fff" opacity=".35"/></g>' +
      /* Fifth Av skyline behind */
      '<path d="M0 130h24v-36h30v20h26v-44h22v60h40v-24h30v24h60v-30h24v30h40v-50h22v50h82v40H0z" fill="#3a2a4a"/>' +
      /* far bank, trees */
      '<rect x="0" y="150" width="400" height="20" fill="#3e6b3a"/>' +
      '<g><circle cx="30" cy="140" r="22" fill="#4f8a44"/><circle cx="380" cy="138" r="24" fill="#4f8a44"/><path d="M60 170q8 -40 20 -40q12 0 18 40z" fill="#6aa04a"/></g>' +
      /* the Discovery Center: cream walls, grey slate roof, dark-red trim */
      '<rect x="168" y="124" width="120" height="40" fill="#ece3cf"/><path d="M160 126l68 -28 68 28z" fill="#5a6470"/>' +
      '<rect x="216" y="86" width="24" height="16" fill="#ece3cf"/><path d="M212 88l16 -12 16 12z" fill="#5a6470"/>' +
      '<rect x="180" y="134" width="12" height="18" fill="#7a2a2a"/><rect x="202" y="134" width="12" height="18" fill="#7a2a2a"/><rect x="242" y="134" width="12" height="18" fill="#7a2a2a"/><rect x="264" y="134" width="12" height="18" fill="#7a2a2a"/>' +
      '<rect x="160" y="162" width="136" height="6" fill="#6b4a2c"/>' +
      /* the water, in waves */
      '<rect x="0" y="168" width="400" height="92" fill="#2a6f8f"/>' +
      '<path d="M296 176h40" stroke="#ffcf8a" stroke-width="3" opacity=".6"/><path d="M300 186h30" stroke="#ffcf8a" stroke-width="3" opacity=".45"/>' +
      crest(200, "#3a86a8", "wv") + crest(222, "#2ec4b6", "wv wv2") + crest(244, "#1d5f7a", "wv") +
      /* rowboat */
      '<g class="glide"><path d="M70 190h50l-8 10h-34z" fill="#c4581c" stroke="#5a2508" stroke-width="1.5"/><path d="M90 190l14 -14" stroke="#e8dcc0" stroke-width="2"/></g>' +
      tag("THE WAVE", 18, 34, 28, AQUA, -4),
      sky("g4", "#1a1240", "#e0794a"));
  }

  /* 5. Fifth Av and E 135 St by the Lincoln Houses: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      /* red-brick tower block behind */
      '<rect x="270" y="24" width="120" height="196" fill="#6a3a2c"/>' +
      (function () { let w = ""; for (let y = 34; y < 210; y += 16) for (let x = 280; x < 384; x += 20) w += '<rect x="' + x + '" y="' + y + '" width="10" height="8" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      /* wall with the tag */
      '<rect x="14" y="70" width="236" height="150" fill="#2c3540"/>' +
      '<g clip-path="url(#cw)">' + crest(198, "#2ec4b6", "wv") + '</g>' +
      tag("MAX B", 34, 146, 50, AQUA, -7) + tag("GAIN GREENE", 30, 190, 24, GOLD, -3) +
      /* streetlight */
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M280 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      '<rect x="222" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="266" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">5 Av</text>' +
      '<rect x="226" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="266" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 135 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#06141f", "#1d3a4a") + '<clipPath id="cw"><rect x="14" y="70" width="236" height="150"/></clipPath>');
  }

  window.SCENES = { train, theresa, church, meer, corner };
})();
