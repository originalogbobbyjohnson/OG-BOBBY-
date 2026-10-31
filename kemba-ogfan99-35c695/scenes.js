/* Hunts Point opening scenes for Kemba's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes paddle{0%{transform:translateX(-60px)}100%{transform:translateX(440px)}}' +
    '.kayak{animation:paddle 14s linear infinite}.kayak2{animation-delay:-7s}' +
    '@keyframes truck{0%{transform:translateX(420px)}100%{transform:translateX(-200px)}}' +
    '.truck{animation:truck 9s linear infinite}' +
    '@keyframes lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}' +
    '.lift{animation:lift 2.4s ease-in-out infinite}' +
    '@keyframes swim{0%{transform:translateX(0)}50%{transform:translateX(70px)}100%{transform:translateX(0)}}' +
    '.swim{animation:swim 6s ease-in-out infinite}.swim2{animation-delay:-3s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}100%{transform:translate(440px,-20px)}}' +
    '.gull{animation:gull 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + letter + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f2b134", GREEN = "#00933c", BONE = "#efe8d6", SKY = "#7fd3ff";

  /* 1. Hunts Point Av: the underground Pelham line platform, white tile walls, the 6 rolling in */
  function train() {
    let tiles = "";
    for (let y = 20; y < 116; y += 8) for (let x = (y / 8) % 2 ? -8 : 0; x < 400; x += 16) tiles += '<rect x="' + x + '" y="' + y + '" width="15" height="7" fill="#e9e6dc"/>';
    let cols = "";
    [24, 66, 330, 372].forEach(x => cols += '<rect x="' + x + '" y="0" width="12" height="190" fill="#1c3b2a"/><rect x="' + (x - 3) + '" y="0" width="18" height="6" fill="#163021"/>');
    let windows = "";
    for (let x = 22; x < 260; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#ffefb0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfcabd"/>' + tiles +
      /* mosaic band */
      '<rect x="0" y="40" width="400" height="12" fill="#1f6b45"/>' +
      (function () { let m = ""; for (let x = 4; x < 400; x += 22) m += '<rect x="' + x + '" y="43" width="6" height="6" fill="' + GOLD + '"/>'; return m; })() +
      /* ceiling lights */
      '<rect x="60" y="6" width="60" height="5" fill="#fff9e0" class="flk"/><rect x="260" y="6" width="60" height="5" fill="#fff9e0" class="flk flk2"/>' +
      /* black station sign */
      '<rect x="90" y="62" width="220" height="32" rx="4" fill="#111"/><rect x="90" y="62" width="220" height="4" fill="#fff"/>' +
      '<text x="102" y="86" ' + FONT + ' font-size="15" fill="#fff">Hunts Point Av</text>' + bullet(286, 79, "6", "#00933c") +
      '<rect x="0" y="116" width="400" height="74" fill="#141414"/>' +
      /* the 6 train: stainless car, green 6 bullet up front */
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="5" fill="#3a3f47"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' + bullet(282, 144, "6", "#00933c") +
      '</g>' + cols +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2a2a"/>' +
      tag("HUNTS POINT", 20, 240, 26, GOLD, -4) + tag("KEMBA", 270, 242, 32, "#7fe0a0", -7),
      '');
  }

  /* 2. Hunts Point Riverside Park on the Bronx River: the little beach and the pier, kayaks paddling past */
  function riverpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="320" cy="50" r="20" fill="#ffd27a"/>' +
      /* far bank: trees and low brick buildings of Soundview */
      '<path d="M0 110q40-20 80-6t90-8 100 6 130-4v20H0z" fill="#3f7a3a"/>' +
      '<rect x="200" y="96" width="40" height="22" fill="#8a4a32"/><rect x="250" y="102" width="30" height="16" fill="#9a5a3a"/>' +
      /* the river */
      '<rect x="0" y="118" width="400" height="70" fill="#3f7fa6"/>' +
      '<path class="shim" d="M30 134h60M220 150h70M300 128h50" stroke="#d6ecf7" stroke-width="2"/>' +
      '<path class="shim shim2" d="M120 166h50M330 172h40" stroke="#d6ecf7" stroke-width="2"/>' +
      '<g class="kayak"><g class="bob"><path d="M0 150q24 8 48 0q-24-4-48 0z" fill="#ff7a1a"/><circle cx="24" cy="142" r="4" fill="#2a2a2a"/><path d="M10 136l28 14" stroke="#e8e8e8" stroke-width="2"/></g></g>' +
      '<g class="kayak kayak2"><g class="bob"><path d="M0 172q24 8 48 0q-24-4-48 0z" fill="#f2d21a"/><circle cx="24" cy="164" r="4" fill="#2a2a2a"/><path d="M38 158l-28 14" stroke="#e8e8e8" stroke-width="2"/></g></g>' +
      /* the wooden pier on piles */
      '<rect x="230" y="176" width="170" height="8" fill="#8a6a42"/>' +
      (function () { let p = ""; for (let x = 236; x < 400; x += 26) p += '<rect x="' + x + '" y="184" width="5" height="16" fill="#5a4228"/>'; return p; })() +
      '<path d="M230 168h170" stroke="#5a4228" stroke-width="2"/>' +
      (function () { let p = ""; for (let x = 232; x < 400; x += 18) p += '<path d="M' + x + ' 168v8" stroke="#5a4228" stroke-width="2"/>'; return p; })() +
      /* the beach and the lawn */
      '<path d="M0 188q120-14 230-4v76H0z" fill="#e2cc96"/><path d="M0 214q200-20 400 0v46H0z" fill="#5c9a46"/>' +
      /* tall reeds swaying */
      '<path d="M12 214q-2-30 4-44M20 214q2-26-2-40M28 214q0-28 6-38" stroke="#4a6a2a" stroke-width="3" fill="none"/>' +
      tag("BRONX RIVER", 60, 246, 26, GOLD, -3),
      sky("g2", "#7fb9e6", "#f7dcae"));
  }

  /* 3. The Hunts Point produce market at dawn: long warehouse sheds, loading docks, crates, trucks rolling through */
  function market() {
    let doors = "";
    for (let x = 14; x < 390; x += 38) doors += '<rect x="' + x + '" y="112" width="28" height="44" fill="#3b3f46" stroke="#22262b" stroke-width="2"/><path d="M' + x + ' 122h28M' + x + ' 132h28M' + x + ' 142h28" stroke="#4d525a" stroke-width="2"/>';
    const crate = (x, y, fruit) => '<rect x="' + x + '" y="' + y + '" width="22" height="14" fill="#b8874a" stroke="#6a4a22" stroke-width="1.5"/><path d="M' + x + ' ' + (y + 7) + 'h22" stroke="#6a4a22" stroke-width="1"/>' +
      '<circle cx="' + (x + 6) + '" cy="' + (y - 2) + '" r="4" fill="' + fruit + '"/><circle cx="' + (x + 13) + '" cy="' + (y - 3) + '" r="4" fill="' + fruit + '"/><circle cx="' + (x + 19) + '" cy="' + (y - 2) + '" r="3.5" fill="' + fruit + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="70" cy="70" r="22" fill="#ffb35a" opacity=".9"/>' +
      /* the sheds: long low roofs */
      '<rect x="0" y="86" width="400" height="80" fill="#c9c1ae"/><rect x="0" y="80" width="400" height="10" fill="#7a3a2a"/>' +
      '<rect x="0" y="90" width="400" height="16" fill="#1f6b45"/>' +
      '<text x="200" y="102" text-anchor="middle" ' + FONT + ' font-size="10" fill="#f7f3ea" letter-spacing="3">PRODUCE MARKET · BUILDING D</text>' + doors +
      '<rect x="0" y="156" width="400" height="10" fill="#8f8a7c"/>' +
      /* crates on the dock */
      crate(20, 142, "#e0402a") + crate(46, 142, "#ff9f1c") + crate(330, 142, "#7cc242") + crate(356, 142, "#f2d21a") +
      /* a forklift lifting a pallet */
      '<g transform="translate(150 150)"><rect x="0" y="0" width="34" height="18" fill="' + GOLD + '"/><rect x="4" y="-16" width="16" height="16" fill="none" stroke="#2a2a2a" stroke-width="2.5"/>' +
      '<rect x="36" y="-30" width="3" height="48" fill="#2a2a2a"/><g class="lift"><rect x="39" y="6" width="18" height="3" fill="#2a2a2a"/>' + crate(37, -8, "#e0402a").replace(/x="37"/, 'x="37"') + '</g>' +
      '<circle cx="8" cy="20" r="5" fill="#222"/><circle cx="28" cy="20" r="5" fill="#222"/></g>' +
      /* the road and a box truck rolling through */
      '<rect x="0" y="176" width="400" height="84" fill="#2b2f36"/><path d="M0 218h400" stroke="#f2d21a" stroke-width="2" stroke-dasharray="22 14"/>' +
      '<g class="truck"><rect x="0" y="180" width="110" height="44" fill="#f2f2f2" stroke="#7b8794" stroke-width="2"/><rect x="110" y="192" width="34" height="32" fill="' + GREEN + '"/><rect x="118" y="196" width="18" height="12" fill="#bfe3ff"/>' +
      '<circle cx="24" cy="226" r="8" fill="#111"/><circle cx="90" cy="226" r="8" fill="#111"/><circle cx="128" cy="226" r="8" fill="#111"/>' +
      '<text x="55" y="207" text-anchor="middle" ' + FONT + ' font-size="11" fill="#1f6b45">FRESH</text></g>' +
      tag("HUNTS POINT", 216, 250, 24, GOLD, -3),
      sky("g3", "#3a2f5a", "#f4a86a"));
  }

  /* 4. Barretto Point Park: the floating pool barge in the East River, swimmers doing laps, gulls overhead */
  function pool() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="80" cy="44" r="18" fill="#fff1a8"/>' +
      '<g class="gull"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      /* far shore */
      '<path d="M0 104h400v14H0z" fill="#6a7a6a"/><rect x="260" y="88" width="16" height="16" fill="#7b8794"/><rect x="280" y="80" width="10" height="24" fill="#8b97a4"/><rect x="300" y="92" width="22" height="12" fill="#7b8794"/>' +
      /* the river */
      '<rect x="0" y="118" width="400" height="142" fill="#2f6f96"/>' +
      '<path class="shim" d="M20 128h50M300 132h60M30 236h70M300 240h60" stroke="#cfe8f6" stroke-width="2"/>' +
      /* the barge: dark hull, white deck, bright blue pool */
      '<g class="bob">' +
        '<rect x="50" y="150" width="300" height="56" fill="#3a3f46"/><rect x="50" y="146" width="300" height="8" fill="#f2f2f2"/>' +
        '<rect x="74" y="156" width="252" height="40" fill="#22a6e8" stroke="#f2f2f2" stroke-width="3"/>' +
        '<path d="M74 168h252M74 182h252" stroke="#f2f2f2" stroke-width="1.5" stroke-dasharray="6 4"/>' +
        '<circle class="swim" cx="96" cy="162" r="3.5" fill="#f2b134"/><circle class="swim swim2" cx="140" cy="175" r="3.5" fill="#ff5a4f"/><circle class="swim" cx="220" cy="189" r="3.5" fill="#fff"/>' +
        '<rect x="56" y="134" width="10" height="14" fill="#f2f2f2"/><rect x="334" y="134" width="10" height="14" fill="#f2f2f2"/>' +
        '<path d="M54 134h16M332 134h16" stroke="#ff5a4f" stroke-width="3"/>' +
      '</g>' +
      /* the park lawn in front */
      '<path d="M0 220q200-14 400 0v40H0z" fill="#5c9a46"/>' +
      '<rect x="20" y="206" width="3" height="20" fill="#3a3a3a"/><path d="M14 206h15" stroke="#3a3a3a" stroke-width="3"/>' +
      tag("BARRETTO POINT", 110, 250, 24, GOLD, -3),
      sky("g4", "#5fb0e6", "#e8f4fa"));
  }

  /* 5. Hunts Point Av and Southern Blvd: green signs, Kemba's wall, the 6 entrance globes */
  function corner() {
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2a26"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a332c"/>'; return b; })() +
      tag("KEMBA", 30, 128, 44, GOLD, -7) + tag("KEMBALAND", 34, 172, 28, "#7fe0a0", -3) + tag("BX", 196, 206, 26, SKY, -8) +
      /* subway entrance globes, green */
      '<rect x="210" y="150" width="4" height="70" fill="#1d2329"/><circle class="flk" cx="212" cy="146" r="8" fill="#3fcf6a"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="256" y="88" width="98" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="305" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Hunts Point Av</text>' +
      '<rect x="260" y="110" width="90" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="305" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Southern Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#3a2a4a"));
  }

  window.SCENES = { train, riverpark, market, pool, corner };
})();
