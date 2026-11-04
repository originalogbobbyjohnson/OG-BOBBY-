/* Evidence game: Venice / Santa Monica. E Line Downtown Santa Monica, the VENICE sign, the Canals, Weatherman rain, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const palm = (x, y, h) => '<g class="bob"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3b2c22" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 70, -70].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + PALM + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const rain = n => { let s = '<style>@keyframes rn{from{transform:translate(0,-40px)}to{transform:translate(-20px,280px)}}.rn{animation:rn 1.1s linear infinite}</style>'; for (let i = 0; i < n; i++) s += '<path class="rn" style="animation-delay:-' + ((i * 37) % 110) / 100 + 's" d="M' + ((i * 53) % 420) + ' ' + ((i * 29) % 60) + 'l-4 12" stroke="#bcd7ee" stroke-width="1.4" opacity=".7"/>'; return s; };

  const PALM = "#2f5a3a", SKY = "#7fc4e8", GOLD = "#f2b134", CORAL = "#e85d4a", ELINE = "#fdb913";

  /* 1. Metro E Line at the end of the line: Downtown Santa Monica, ocean light, palms */
  function station() {
    let win = ""; for (let x = 26; x < 280; x += 40) win += '<rect x="' + x + '" y="98" width="26" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' +
      palm(340, 150, 100) + palm(376, 150, 80) +
      '<rect x="12" y="12" width="300" height="42" rx="4" fill="#1d1f24"/><rect x="12" y="12" width="300" height="4" fill="' + ELINE + '"/>' +
      '<text x="24" y="40" ' + font + ' font-size="16" fill="#fff">Downtown Santa Monica</text>' + bullet(290, 33, "E", ELINE) +
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="60" rx="14" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' +
        '<rect x="10" y="128" width="300" height="8" fill="' + ELINE + '"/>' + win +
        '<path d="M150 88l18 -20M190 88l-18 -20" stroke="#333" stroke-width="2"/><rect x="0" y="66" width="400" height="2" fill="#333"/>' +
        '<circle cx="300" cy="140" r="4" fill="#fff6c2"/>' + bullet(282, 110, "E", ELINE) +
      '</g>' +
      '<rect x="0" y="150" width="400" height="8" fill="#eab308"/><rect x="0" y="158" width="400" height="36" fill="#b8b2a4"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2a2c32"/>' +
      tag("EVIDENCE", 30, 242, 40, SKY, -5) + tag("SLOW FLOW", 240, 238, 24, GOLD, -6),
      sky("s1", "#6fb3e0", "#f6d7a8"));
  }

  /* 2. Venice boardwalk: the big VENICE sign over the street, bulbs blinking, a skater rolling under it */
  function venice() {
    let bulbs = ""; for (let i = 0; i < 14; i++) bulbs += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + (86 + i * 17) + '" cy="72" r="2.5" fill="#fff6c2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(10) +
      '<rect x="20" y="96" width="80" height="128" fill="#c96a4a"/><rect x="300" y="90" width="90" height="134" fill="#d9a65a"/>' +
      '<rect x="30" y="120" width="60" height="40" fill="#1b2230"/><rect x="312" y="116" width="66" height="44" fill="#1b2230"/>' +
      '<path d="M100 70h200" stroke="#2a2a2a" stroke-width="3"/><path d="M80 40v60M320 40v60" stroke="#2a2a2a" stroke-width="4"/>' +
      '<rect x="80" y="36" width="240" height="44" fill="#0e0e12" opacity=".6"/>' +
      '<text class="flk" x="200" y="70" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="34" letter-spacing="8" fill="#f7f3ea" stroke="#fff6c2" stroke-width=".6">VENICE</text>' + bulbs +
      palm(140, 224, 120) + palm(262, 224, 110) +
      '<rect x="0" y="224" width="400" height="36" fill="#c9b892"/><rect x="0" y="224" width="400" height="4" fill="#e0d2b0"/>' +
      '<g class="car"><rect x="0" y="236" width="18" height="4" rx="2" fill="' + CORAL + '"/><circle cx="4" cy="242" r="2.5" fill="#111"/><circle cx="14" cy="242" r="2.5" fill="#111"/><rect x="6" y="214" width="6" height="20" rx="3" fill="#2a3a5a"/><circle cx="9" cy="209" r="5" fill="#2a2a2a"/></g>',
      sky("s2", "#101a3c", "#e07a5a"));
  }

  /* 3. Venice Canals: white arched footbridge, little houses, a rowboat drifting */
  function canals() {
    const house = (x, c, r) => '<rect x="' + x + '" y="110" width="56" height="54" fill="' + c + '"/><path d="M' + (x - 4) + ' 110l32 -22l32 22z" fill="' + r + '"/><rect x="' + (x + 10) + '" y="124" width="14" height="14" fill="#dff1ff"/><rect x="' + (x + 32) + '" y="134" width="14" height="30" fill="#5a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      house(10, "#f2efe6", "#5a7a8a") + house(76, "#7fc4e8", "#3a4a5a") + house(276, "#f2b134", "#8a4a3a") + house(340, "#e8a3b0", "#5a3a4a") +
      palm(150, 164, 90) +
      '<rect x="0" y="164" width="400" height="12" fill="#c7c0b0"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#3a7a8a"/><path d="M0 196h400M0 218h400M0 240h400" stroke="#6aa9b8" stroke-width="1.5" opacity=".6"/>' +
      '<path d="M120 176q80 -70 160 0" stroke="#f7f3ea" stroke-width="8" fill="none"/><path d="M128 168q72 -58 144 0" stroke="#f7f3ea" stroke-width="2" fill="none"/>' +
      '<path d="M150 150v20M175 136v30M200 132v34M225 136v30M250 150v20" stroke="#f7f3ea" stroke-width="2"/>' +
      '<g class="car" style="animation-duration:14s"><path d="M0 214h40l-6 10h-28z" fill="' + CORAL + '"/><path d="M20 214v-16l12 12z" fill="#f7f3ea"/></g>',
      sky("s3", "#6fb3e0", "#e8f2f6"));
  }

  /* 4. Weatherman: rain over the beach, lightning flicker, an umbrella and a crate of records */
  function weather() {
    let recs = ""; ["#e85d4a", "#f2b134", "#7fc4e8", "#e9e4d8", "#7a5ea8"].forEach((c, i) => recs += '<rect x="' + (260 + i * 12) + '" y="190" width="9" height="36" fill="' + c + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
            '<ellipse cx="90" cy="36" rx="80" ry="26" fill="#3a4658"/><ellipse cx="200" cy="26" rx="90" ry="28" fill="#4a5668"/><ellipse cx="330" cy="40" rx="80" ry="24" fill="#3a4658"/>' +
      '<g class="flk"><polygon points="318,44 294,94 308,94 290,142 330,82 316,82 334,44" fill="#fff6c2"/></g>' +
      '<rect x="0" y="150" width="400" height="40" fill="#3a5a72"/><path d="M0 166q50 -8 100 0t100 0t100 0t100 0" stroke="#7fa6c0" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#a8977a"/>' +
      '<path d="M90 140q50 -50 100 0z" fill="' + CORAL + '"/><path d="M140 140v62q0 8 -8 8" stroke="#2a2a2a" stroke-width="3" fill="none"/>' +
      '<rect x="252" y="200" width="70" height="30" fill="#6e4c34"/>' + recs +
      rain(70) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".85" letter-spacing="3">CATS AND DOGS</text>',
      sky("s4", "#1e2a3a", "#55687e"));
  }

  /* 5. The corner: Windward Ave and Pacific Ave, EVIDENCE tag, the pier and its Ferris wheel behind */
  function corner() {
    let spokes = ""; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; spokes += '<path d="M0 0L' + (52 * Math.cos(a)).toFixed(1) + ' ' + (52 * Math.sin(a)).toFixed(1) + '" stroke="#f7f3ea" stroke-width="1.5"/><circle cx="' + (52 * Math.cos(a)).toFixed(1) + '" cy="' + (52 * Math.sin(a)).toFixed(1) + '" r="4" fill="' + [CORAL, GOLD, SKY][i % 3] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(8) +
      '<rect x="0" y="124" width="400" height="20" fill="#2a4a6a"/>' +
      '<rect x="60" y="120" width="260" height="6" fill="#6e5a48"/><path d="M80 126v18M120 126v18M160 126v18M200 126v18M240 126v18M280 126v18" stroke="#6e5a48" stroke-width="3"/>' +
      '<path d="M210 120l-16 -6M210 120l16 -6" stroke="#f7f3ea" stroke-width="2"/>' +
      '<g transform="translate(210 64)"><g class="vn">' + '<circle r="52" fill="none" stroke="#f7f3ea" stroke-width="2"/>' + spokes + '</g></g>' +
      '<path d="M190 120l20 -56 20 56" stroke="#f7f3ea" stroke-width="3" fill="none"/>' +
      palm(30, 140, 90) + palm(372, 140, 96) +
      brick(0, 140, 400, 84, "#4f6a7a", "#3b5260") +
      tag("EVIDENCE", 22, 202, 46, SKY, -5) + tag("DILATED", 228, 214, 26, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + CORAL + '"/></g>' +
      '<rect x="336" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(266, 44, 132, "Windward Ave") + sign(276, 70, 112, "Pacific Ave") +
      '<circle class="bl" cx="339" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#141838", "#d0704a"));
  }

  window.SCENES = { station: station, venice: venice, canals: canals, weather: weather, corner: corner };
})();
