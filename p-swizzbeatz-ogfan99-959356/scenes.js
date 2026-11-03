/* Swizz Beatz producer game: the Bronx. Gun Hill Rd on the 2/5 el, the Ruff Ryders block in Yonkers, the keyboard session, the Tunnel club, White Plains Rd & E Gun Hill Rd with the Whitestone Bridge. All different from his artist game. Each scene 400 x 260. */
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
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const carS = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="5" fill="' + col + '"/><rect x="10" y="' + (y - 8) + '" width="28" height="10" rx="4" fill="' + col + '"/><rect x="14" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><rect x="26" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><circle cx="11" cy="' + (y + 15) + '" r="4.5" fill="#111"/><circle cx="39" cy="' + (y + 15) + '" r="4.5" fill="#111"/></g>';
  const bike = (x, y, col) => '<g transform="translate(' + x + ' ' + y + ')"><circle cx="0" cy="0" r="11" fill="none" stroke="#111" stroke-width="5"/><circle cx="40" cy="0" r="11" fill="none" stroke="#111" stroke-width="5"/><path d="M0 0l14-16h18l8 16" stroke="#555" stroke-width="3" fill="none"/><path d="M8 -18h26l6 -6" fill="' + col + '" stroke="' + col + '" stroke-width="6" stroke-linejoin="round"/><path d="M36 -24l6-6" stroke="#222" stroke-width="3"/><rect x="14" y="-34" width="12" height="14" rx="4" fill="#222"/><circle cx="20" cy="-40" r="7" fill="#222"/></g>';
  const SILV = "#c9cdd2", RED = "#d8262e", GOLD = "#f2b632", BLUE = "#2d7be0";

  /* 1. Gun Hill Rd on the elevated White Plains Road Line (2 and 5): steel el, a train sliding in */
  function gunhill() {
    let wins = "";
    for (let x = 20; x < 300; x += 28) wins += '<rect x="' + x + '" y="100" width="18" height="16" rx="2" fill="#1d2633"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<g fill="#6b5a4e">' + [0, 60, 130, 300, 350].map((x, i) => '<rect x="' + x + '" y="' + (60 + (i % 2) * 14) + '" width="56" height="140"/>').join("") + '</g>' +
      '<g fill="#f2e2b0" opacity=".7">' + [10, 30, 70, 90, 140, 160, 310, 330, 360, 380].map((x, i) => '<rect x="' + x + '" y="' + (80 + (i % 3) * 22) + '" width="8" height="10"/>').join("") + '</g>' +
      '<rect x="0" y="84" width="400" height="8" fill="#4f6b58"/>' +
      '<g class="anim-train"><rect x="6" y="92" width="300" height="48" rx="4" fill="' + SILV + '" stroke="#777" stroke-width="2"/>' + wins +
      '<rect x="6" y="122" width="300" height="3" fill="#888"/><rect x="290" y="98" width="12" height="20" fill="#1d2633"/>' + bullet(280, 130, "2", "#ee352e") + '</g>' +
      '<rect x="0" y="140" width="400" height="14" fill="#4f6b58"/><g fill="#3e5747">' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (14 + i * 46) + '" y="154" width="10" height="106"/><path d="M' + (14 + i * 46) + ' 154l-12 10h34l-12-10z"/>').join("") + '</g>' +
      '<rect x="0" y="62" width="400" height="22" fill="#2b2b2b"/><rect x="0" y="62" width="400" height="3" fill="#555"/>' +
      '<rect x="110" y="20" width="200" height="34" fill="#111"/>' + T(130, 43, 17, "#fff", "Gun Hill Rd") + bullet(268, 37, "2", "#ee352e") + bullet(292, 37, "5", "#00933c") +
      '<rect x="0" y="230" width="400" height="30" fill="#2a2a2e"/>' + carS("car", 236, GOLD) +
      tag("SWIZZY", 160, 222, 26, RED, -4),
      sky("g1", "#9cc6ec", "#e9eef2"));
  }

  /* 2. Ruff Ryders HQ block in Yonkers: brick garage, dirt bikes popping wheelies, the Hudson and Palisades behind */
  function yonkers() {
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<path d="M0 96l40-10 60 6 80-12 90 8 130-6v40H0z" fill="#7d7a6a"/><path d="M0 96l40-10 60 6 80-12 90 8 130-6v8H0z" fill="#5e7a4a"/><rect x="0" y="122" width="400" height="14" fill="#5a8ab0"/>' +
      brick(20, 110, 220, 100, "#8a4b36", "#6e3a2a") + '<rect x="16" y="104" width="228" height="8" fill="#2a2a2a"/>' +
      '<rect x="40" y="140" width="80" height="70" fill="#4a4a50"/><g stroke="#3a3a40">' + [150, 160, 170, 180, 190, 200].map(y => '<path d="M40 ' + y + 'h80"/>').join("") + '</g>' +
      '<rect x="140" y="130" width="30" height="24" fill="#f2e2b0"/><rect x="186" y="130" width="30" height="24" fill="#f2e2b0"/><rect x="150" y="168" width="22" height="42" fill="#2a1d1a"/>' +
      tag("RUFF RYDERS", 26, 136, 22, GOLD, -4) +
      '<rect x="250" y="120" width="140" height="90" fill="#9a8a78"/><g fill="#f2e2b0">' + [262, 300, 338].map(x => '<rect x="' + x + '" y="134" width="22" height="22"/><rect x="' + x + '" y="170" width="22" height="22"/>').join("") + '</g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a40"/><rect x="0" y="208" width="400" height="4" fill="#a8a296"/>' +
      '<g class="car" style="animation-duration:5s"><g transform="rotate(-18 60 236)">' + bike(40, 240, RED) + '</g></g>' +
      '<g class="car car2" style="animation-duration:5s"><g transform="rotate(-12 60 236)">' + bike(40, 242, GOLD) + '</g></g>' +
      '<rect x="292" y="212" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(340, 227, 11, "#fff", "YONKERS", ' text-anchor="middle"'),
      sky("g2", "#79b0e0", "#f0e6d2"));
  }

  /* 3. The keyboard session: a big workstation keyboard, no samples, just keys, drums and a shout */
  function keys() {
    let k = "";
    for (let i = 0; i < 28; i++) k += '<rect x="' + (52 + i * 10.6) + '" y="150" width="9.6" height="46" fill="#f4f1e8" stroke="#888" stroke-width=".6"/>';
    for (let i = 0; i < 27; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) k += '<rect x="' + (52 + i * 10.6 + 7) + '" y="150" width="6.4" height="28" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#16141c"/><rect x="0" y="0" width="400" height="120" fill="#22202c"/>' +
      '<g fill="#2c2a36">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 0l20 20 20-20z"/>').join("") + '</g>' +
      '<g class="th"><rect x="14" y="40" width="54" height="84" rx="4" fill="#111"/><circle cx="41" cy="62" r="10" fill="#333"/><circle cx="41" cy="98" r="18" fill="#333"/></g>' +
      '<g class="th"><rect x="332" y="40" width="54" height="84" rx="4" fill="#111"/><circle cx="359" cy="62" r="10" fill="#333"/><circle cx="359" cy="98" r="18" fill="#333"/></g>' +
      '<rect x="150" y="30" width="100" height="22" rx="3" fill="' + RED + '" class="flk"/>' + T(200, 46, 13, "#fff", "ON AIR", ' text-anchor="middle"') +
      '<g fill="' + GOLD + '"><rect class="mt" x="150" y="64" width="10" height="44"/><rect class="mt mt2" x="166" y="64" width="10" height="44"/><rect class="mt mt3" x="182" y="64" width="10" height="44"/><rect class="mt mt4" x="198" y="64" width="10" height="44"/><rect class="mt mt5" x="214" y="64" width="10" height="44"/><rect class="mt" x="230" y="64" width="10" height="44"/></g>' +
      /* workstation keyboard */
      '<rect x="40" y="112" width="320" height="92" rx="6" fill="' + SILV + '" stroke="#777" stroke-width="2"/><rect x="150" y="118" width="100" height="24" rx="2" fill="#123a2a"/>' + T(200, 135, 11, "#7dffb0", "PROG 01", ' text-anchor="middle"') +
      '<g fill="#555">' + [60, 76, 92, 108, 270, 286, 302, 318, 334].map(x => '<circle cx="' + x + '" cy="130" r="5"/>').join("") + '</g>' + k +
      '<rect x="0" y="204" width="400" height="56" fill="#0e0d12"/>' +
      tag("NO SAMPLES", 30, 246, 24, GOLD, -3) + tag("GO SWIZZY", 230, 246, 22, RED, -4));
  }

  /* 4. The Tunnel, W 27th St at 12th Ave: the warehouse club where the anthems broke, line down the block */
  function tunnel() {
    let line = ""; for (let i = 0; i < 9; i++) line += '<g class="bob" style="animation-delay:-' + (i * .3) + 's"><rect x="' + (170 + i * 22) + '" y="' + (176 - (i % 2) * 4) + '" width="12" height="26" rx="4" fill="' + ["#2d7be0", "#d8262e", "#f2b632", "#eee", "#3a3a3a"][i % 5] + '"/><circle cx="' + (176 + i * 22) + '" cy="' + (170 - (i % 2) * 4) + '" r="6" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(20) +
      '<path class="flk" d="M90 160L40 0h20z" fill="#fff" opacity=".18"/><path class="flk flk2" d="M310 160L370 0h-20z" fill="#fff" opacity=".18"/>' +
      '<rect x="20" y="70" width="360" height="132" fill="#4a4448"/><g fill="#3a3438">' + [40, 100, 160, 220, 280, 340].map(x => '<rect x="' + x + '" y="70" width="6" height="132"/>').join("") + '</g>' +
      '<g fill="#2a2a30">' + [52, 112, 232, 292].map(x => '<rect x="' + x + '" y="84" width="40" height="22"/>').join("") + '</g>' +
      '<rect x="120" y="112" width="160" height="32" rx="3" fill="#111"/>' + T(200, 135, 20, BLUE, "THE TUNNEL", ' text-anchor="middle" class="flk"') +
      '<rect x="60" y="150" width="70" height="52" fill="#1a1a1e"/><rect x="66" y="156" width="58" height="46" fill="#3b2a5a" class="flk flk2"/>' +
      '<g fill="' + GOLD + '"><rect x="150" y="180" width="3" height="22"/><rect x="380" y="180" width="3" height="22"/></g><path d="M152 184q10 8 20 0t20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0" stroke="#b01e2a" stroke-width="3" fill="none"/>' + line +
      '<rect x="0" y="202" width="400" height="12" fill="#6a6660"/><rect x="0" y="214" width="400" height="46" fill="#1e1f24"/>' +
      carS("carL", 230, SILV) +
      '<rect x="10" y="20" width="5" height="182" fill="#5b6b5f"/><rect x="15" y="24" width="90" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(60, 38, 11, "#fff", "W 27 ST", ' text-anchor="middle"') +
      '<rect x="15" y="46" width="90" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(60, 60, 11, "#fff", "12 AV", ' text-anchor="middle"') +
      tag("PARTY UP", 250, 250, 22, GOLD, -4),
      sky("g4", "#0b0b1a", "#2a1a3a"));
  }

  /* 5. White Plains Rd & E Gun Hill Rd: tagged wall, the Whitestone Bridge out past the rooftops */
  function corner() {
    let cables = ""; for (let i = 0; i <= 10; i++) cables += '<path d="M' + (150 + i * 10) + ' ' + (82 + Math.pow(i - 5, 2) * .9) + 'V106" stroke="#7d8a86" stroke-width=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="0" y="104" width="400" height="20" fill="#3d6a8a"/>' +
      '<path d="M40 106h320" stroke="#5c6a68" stroke-width="5"/><path d="M60 98Q100 74 150 50Q200 104 250 50Q300 74 340 98" stroke="#5c6a68" stroke-width="2.5" fill="none"/>' +
      '<rect x="146" y="44" width="8" height="64" fill="#5c6a68"/><rect x="246" y="44" width="8" height="64" fill="#5c6a68"/>' + cables +
      '<g fill="#3a3238">' + [0, 50, 100, 320, 360].map((x, i) => '<rect x="' + x + '" y="' + (112 - (i % 2) * 8) + '" width="46" height="40"/>').join("") + '</g>' +
      '<rect x="0" y="120" width="260" height="98" fill="#7a6e66"/><g stroke="#665a52" stroke-width="1">' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h260"/>').join("") + '</g><rect x="0" y="116" width="260" height="6" fill="#c8b9a0"/>' +
      tag("SWIZZ BEATZ", 12, 174, 32, RED, -6) + tag("FULL SURFACE", 50, 206, 18, GOLD, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, BLUE) +
      '<rect x="330" y="128" width="5" height="92" fill="#5b6b5f"/>' +
      '<rect x="276" y="130" width="116" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(334, 145, 10, "#fff", "WHITE PLAINS RD", ' text-anchor="middle"') +
      '<rect x="276" y="156" width="116" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(334, 171, 10, "#fff", "E GUN HILL RD", ' text-anchor="middle"'),
      sky("g5", "#f7b267", "#f2e2c4"));
  }

  window.SCENES = { gunhill, yonkers, keys, tunnel, corner };
})();
