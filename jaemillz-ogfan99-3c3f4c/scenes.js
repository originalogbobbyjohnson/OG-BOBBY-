/* Central Harlem opening scenes for the Jae Millz game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes carR{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '@keyframes carL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}' +
    '.carR{animation:carR 7s linear infinite}.carL{animation:carL 9s linear infinite}' +
    '@keyframes ring{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:ring 1.6s ease-in-out infinite}' +
    '@keyframes duck{0%,100%{transform:translateX(0)}50%{transform:translateX(120px)}}' +
    '.duck{animation:duck 12s ease-in-out infinite}.dk2{animation-delay:-4s}' +
    '@keyframes ripple{0%{transform:scale(.3);opacity:.8}100%{transform:scale(1.6);opacity:0}}' +
    '.rip{transform-box:fill-box;transform-origin:50% 50%;animation:ripple 3s ease-out infinite}.rp2{animation-delay:1.5s}' +
    '@keyframes win{0%,100%{opacity:.25}50%{opacity:.95}}' +
    '.win{animation:win 4s ease-in-out infinite}.wn2{animation-delay:1.3s}.wn3{animation-delay:2.6s}' +
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
  const GREEN = "#7cf29a", GOLD = "#ffd23f", RED = "#ee352e", ROSE = "#ff4f6d";
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="54" height="14" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 9) + '" width="30" height="11" rx="3" fill="' + c + '"/><rect x="14" y="' + (y - 7) + '" width="10" height="7" fill="#bfe3ff"/><rect x="27" y="' + (y - 7) + '" width="10" height="7" fill="#bfe3ff"/><circle cx="12" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="42" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';

  /* 1. The 2 pulling into Central Park North (110 St), underground under Lenox Av: white tile, green-and-cream band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d4cfc2" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d4cfc2" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 20) band += '<rect x="' + x + '" y="30" width="10" height="9" fill="#2f6b45"/><rect x="' + (x + 10) + '" y="30" width="10" height="9" fill="#e9dcc0"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efeadf"/>' + tiles + band +
      '<rect x="40" y="54" width="320" height="36" rx="4" fill="#111"/>' +
      '<rect x="40" y="54" width="320" height="4" fill="#fff"/>' +
      '<text x="52" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Central Park North (110 St)</text>' +
      bullet(312, 73, "2", RED) + bullet(338, 73, "3", RED) +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
        bullet(296, 142, "2", RED) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("JAE MILLZ", 24, 240, 30, GREEN, -4) + tag("POTENT", 290, 242, 28, GOLD, -8));
  }

  /* 2. The Hotel Theresa at 125th and Adam Clayton Powell Jr. Blvd: the white thirteen-story tower, its crown of piers, the old rooftop letters, traffic rolling */
  function theresa() {
    let wins = "";
    for (let r = 0; r < 11; r++) for (let c = 0; c < 9; c++) {
      const x = 102 + c * 22, y = 58 + r * 13, lit = (r * 7 + c * 3) % 5 === 0;
      wins += '<rect x="' + x + '" y="' + y + '" width="12" height="8" fill="' + (lit ? "#ffe39a" : "#3a4a5e") + '"' + (lit ? ' class="win wn' + ((r + c) % 3 + 1) + '"' : '') + '/>';
    }
    let piers = "";
    for (let c = 0; c <= 9; c++) piers += '<rect x="' + (96 + c * 22) + '" y="30" width="6" height="176" fill="#f4f1ea"/><path d="M' + (95 + c * 22) + ' 30l4-10 4 10z" fill="#f4f1ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(16) +
      '<rect x="0" y="120" width="90" height="90" fill="#3b2a26"/><rect x="310" y="110" width="90" height="100" fill="#3a2d2a"/>' +
      '<rect x="92" y="36" width="216" height="174" fill="#e8e3d8"/>' + wins + piers +
      '<rect x="92" y="44" width="216" height="6" fill="#d4ccbc"/><rect x="92" y="200" width="216" height="10" fill="#cfc6b4"/>' +
      '<path d="M92 36h216" stroke="#fff" stroke-width="3"/>' +
      /* rooftop letters on a steel frame */
      '<path d="M140 30v-12M260 30v-12M140 19h120" stroke="#666" stroke-width="2"/>' +
      '<text class="flk" x="200" y="15" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="3" fill="' + ROSE + '" stroke="#ffd0d8" stroke-width=".6">HOTEL THERESA</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#1b1d21"/><path d="M0 234h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("carR", 236, "#c0392b") + car("carL", 214, "#f1c40f") +
      '<rect x="10" y="92" width="76" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/><text x="48" y="104" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">W 125 St</text>',
      sky("g2", "#0c1430", "#3b3f6e"));
  }

  /* 3. Abyssinian Baptist Church on W 138th: gray-blue Gothic stone, the big pointed window, the square tower, the bell swinging */
  function church() {
    const lancet = (x, y, w, h, fill) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'q0-' + (w * 0.8) + ' ' + (w / 2) + '-' + (w * 0.8) + 'q' + (w / 2) + ' 0 ' + (w / 2) + ' ' + (w * 0.8) + 'v' + (h - w / 2) + 'z" fill="' + fill + '"/>';
    let crenel = "";
    for (let x = 252; x < 336; x += 14) crenel += '<rect x="' + x + '" y="30" width="8" height="10" fill="#7d8a96"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(12) +
      '<circle cx="60" cy="46" r="18" fill="#fff4d6" opacity=".9"/>' +
      /* nave front gable */
      '<path d="M50 230V110l100-62 100 62v120z" fill="#8795a2"/><path d="M50 110l100-62 100 62" fill="none" stroke="#5e6b77" stroke-width="4"/>' +
      lancet(108, 92, 84, 92, "#5e6b77") + lancet(114, 98, 72, 84, "#e2b44c") +
      '<path d="M138 120v62M150 104v78M162 120v62M114 150h72" stroke="#5e6b77" stroke-width="3"/>' +
      '<rect x="114" y="132" width="72" height="6" fill="#8a3b2e" opacity=".6"/>' +
      lancet(130, 196, 40, 34, "#4a2e1c") +
      /* the square tower */
      '<rect x="250" y="40" width="86" height="190" fill="#7d8a96"/>' + crenel +
      '<rect x="250" y="40" width="86" height="190" fill="none" stroke="#5e6b77" stroke-width="2"/>' +
      lancet(278, 56, 30, 54, "#2a2f36") +
      '<g class="bell"><path d="M284 74q9-4 18 0l3 22h-24z" fill="' + GOLD + '" stroke="#7a5a12" stroke-width="1.5"/><circle cx="293" cy="99" r="3" fill="#7a5a12"/></g>' +
      lancet(276, 140, 34, 56, "#e2b44c") + lancet(282, 196, 22, 34, "#4a2e1c") +
      '<rect x="0" y="230" width="400" height="30" fill="#2a2d33"/><rect x="0" y="228" width="400" height="4" fill="#5e6b77"/>' +
      '<rect x="340" y="186" width="5" height="44" fill="#1d2329"/><rect x="310" y="174" width="66" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/><text x="343" y="186" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">W 138 St</text>',
      sky("g3", "#1a1f3d", "#6a6f9a"));
  }

  /* 4. The Harlem Meer at 110th: the Dana Discovery Center's brick house with its slate roof and cupola on the water, ducks gliding, willows */
  function meer() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="320" cy="56" r="24" fill="#ffd27a" opacity=".85"/>' +
      /* Fifth Av towers far behind */
      '<rect x="0" y="86" width="40" height="60" fill="#4d4a6a"/><rect x="44" y="70" width="30" height="76" fill="#55527a"/><rect x="340" y="80" width="60" height="66" fill="#4d4a6a"/>' +
      '<path d="M0 146h400v12H0z" fill="#2f4a2a"/>' +
      /* the Discovery Center */
      '<rect x="150" y="108" width="120" height="44" fill="#9b4a32"/>' +
      '<path d="M140 110l70-34 70 34z" fill="#3c4650"/><path d="M140 110h140" stroke="#2a3138" stroke-width="3"/>' +
      '<rect x="202" y="56" width="16" height="22" fill="#e9e3d6"/><path d="M198 58l12-14 12 14z" fill="#3c4650"/>' +
      '<rect x="162" y="118" width="14" height="22" fill="#f0e6c8"/><rect x="186" y="118" width="14" height="22" fill="#f0e6c8"/><rect x="220" y="118" width="14" height="22" fill="#f0e6c8"/><rect x="244" y="118" width="14" height="22" fill="#f0e6c8"/>' +
      '<rect x="140" y="150" width="140" height="6" fill="#d8d1c2"/>' +
      /* the water */
      '<rect x="0" y="156" width="400" height="104" fill="#3d6f8a"/>' +
      '<path d="M150 166h120" stroke="#9b4a32" stroke-width="6" opacity=".35"/><path d="M175 176h70" stroke="#9b4a32" stroke-width="4" opacity=".25"/>' +
      '<path d="M0 190h400M0 214h400M0 238h400" stroke="#a9d3e8" stroke-width="1" opacity=".4" stroke-dasharray="16 22"/>' +
      '<ellipse class="rip" cx="90" cy="220" rx="14" ry="4" fill="none" stroke="#cfe9f5" stroke-width="1.5"/><ellipse class="rip rp2" cx="300" cy="200" rx="14" ry="4" fill="none" stroke="#cfe9f5" stroke-width="1.5"/>' +
      '<g class="duck"><g transform="translate(60 196)"><ellipse cx="10" cy="6" rx="10" ry="5" fill="#8b6b4a"/><circle cx="18" cy="0" r="4" fill="#1f6b3a"/><path d="M21 0l5 1-5 2z" fill="' + GOLD + '"/></g></g>' +
      '<g class="duck dk2"><g transform="translate(150 226)"><ellipse cx="10" cy="6" rx="10" ry="5" fill="#a08060"/><circle cx="18" cy="0" r="4" fill="#7a6040"/><path d="M21 0l5 1-5 2z" fill="' + GOLD + '"/></g></g>' +
      /* willow */
      '<path d="M372 160V96" stroke="#3b2a1c" stroke-width="6"/><path d="M340 150q10-60 32-60t32 60" fill="#5f8f3a" opacity=".9"/>' +
      '<path d="M346 150v-30M356 154v-40M366 156v-44M380 156v-44M392 152v-36" stroke="#7fae4a" stroke-width="2"/>' +
      '<rect x="20" y="164" width="104" height="22" rx="3" fill="#123d2a" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="72" y="179" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="2" fill="#fff">HARLEM MEER</text>',
      sky("g4", "#3a3a6e", "#f2a477"));
  }

  /* 5. Lenox Av and Central Park North: brownstone stoop, street signs, the tag wall, the park trees across the street */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<circle cx="380" cy="150" r="40" fill="#24452c"/><circle cx="340" cy="160" r="30" fill="#2c5434"/>' +
      '<rect x="14" y="60" width="236" height="160" fill="#4a3a33"/>' +
      (function () { let b = ""; for (let y = 72; y < 220; y += 12) b += '<path d="M14 ' + y + 'h236" stroke="#3a2c26" stroke-width="1.5"/>'; return b; })() +
      tag("JAE MILLZ", 26, 144, 40, GREEN, -7) + tag("HARLEM", 60, 196, 30, ROSE, -3) + tag("NO NO NO", 150, 86, 16, GOLD, -2) +
      /* streetlight */
      '<rect x="268" y="48" width="5" height="172" fill="#1d2329"/><path d="M270 50h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M286 54h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M286 62l26 0 34 158h-94z" fill="#ffe7a8"/></g>' +
      /* signs */
      '<rect x="300" y="70" width="5" height="150" fill="#1d2329"/>' +
      '<rect x="262" y="78" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="91" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Lenox Av</text>' +
      '<rect x="252" y="100" width="102" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="113" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Central Park N</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0c1a14", "#24443a"));
  }

  window.SCENES = { train, theresa, church, meer, corner };
})();
