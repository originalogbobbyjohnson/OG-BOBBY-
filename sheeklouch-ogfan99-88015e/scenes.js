/* Yonkers opening scenes for the Sheek Louch game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.gull{animation:glide 11s linear infinite}' +
    '@keyframes fall{from{stroke-dashoffset:0}to{stroke-dashoffset:-24}}' +
    '.fall{animation:fall 1s linear infinite}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 6s linear infinite}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}' +
    '.glow{animation:glow 1.8s ease-in-out infinite}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff8a5b", SILVER = "#c9d1d9", GREEN = "#3fa34d", MNBLUE = "#0b3d78";
  /* the Palisades: dark basalt cliffs with a green crown, across the Hudson */
  const palisades = (y, op) =>
    '<g opacity="' + (op || 1) + '"><path d="M0 ' + y + 'l30-6 40 2 50-8 60 4 40-6 60 3 50-7 70 5v36H0z" fill="#2f5a34"/>' +
    '<path d="M0 ' + (y + 4) + 'l30-6 40 2 50-8 60 4 40-6 60 3 50-7 70 5v32H0z" fill="#5b5148"/>' +
    (function () { let c = ""; for (let x = 8; x < 400; x += 23) c += '<path d="M' + x + ' ' + (y + 6 + (x * 7) % 9) + 'l' + ((x % 3) - 1) + ' ' + (10 + (x * 13) % 14) + '" stroke="#7a6e62" stroke-width="' + (1 + (x % 2)) + '" opacity=".7"/>'; return c; })() + '</g>';

  /* 1. Metro-North Hudson Line pulling into Ludlow, right on the river, Palisades across */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) +
      '<circle cx="64" cy="34" r="14" fill="#fff1d6" opacity=".9"/>' +
      palisades(70) +
      '<rect x="0" y="104" width="400" height="20" fill="#1d3b57"/>' +
      '<path class="shim" d="M20 112h40M140 116h60M280 110h50" stroke="#9fc6e8" stroke-width="2" opacity=".6"/>' +
      /* platform canopy posts */
      '<rect x="0" y="56" width="400" height="6" fill="#2b3440"/>' +
      '<rect x="40" y="60" width="5" height="70" fill="#2b3440"/><rect x="200" y="60" width="5" height="70" fill="#2b3440"/><rect x="360" y="60" width="5" height="70" fill="#2b3440"/>' +
      /* Metro-North station sign: navy with white lettering */
      '<rect x="96" y="66" width="208" height="38" rx="3" fill="' + MNBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="91" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="18" fill="#fff">Ludlow</text>' +
      '<rect x="248" y="96" width="50" height="5" fill="#009b3a"/><text x="104" y="100" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#dbe6f3">HUDSON LINE</text>' +
      /* train slides in and stops: stainless car with a blue stripe */
      '<g class="anim-train">' +
        '<rect x="8" y="126" width="304" height="56" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="304" height="5" fill="' + MNBLUE + '"/><rect x="8" y="166" width="304" height="2" fill="#d1343a"/>' + windows +
        '<path d="M300 130h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="174" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="178" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#334">METRO-NORTH</text>' +
      '</g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1a1d22"/>' +
      tag("YONKERS", 24, 238, 30, ORANGE, -4) + tag("D-BLOCK", 270, 242, 28, SILVER, -7),
      sky("g1", "#120d22", "#7a4a5e"));
  }

  /* 2. Album world, Silverback Gorilla (2008): a silverback up on a Getty Square rooftop at night, chest-thumping, the D-Block lights and the water tower below */
  function pier() {
    let city = "";
    [[0, 150, 54], [58, 130, 44], [106, 160, 40], [270, 140, 50], [324, 120, 40], [368, 150, 32]].forEach(b => {
      city += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (260 - b[1]) + '" fill="#1c1a22"/>';
      for (let y = b[1] + 8; y < 250; y += 12) for (let x = b[0] + 6; x < b[0] + b[2] - 6; x += 10) city += '<rect' + ((x + y) % 7 === 0 ? ' class="glow"' : '') + ' x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((x + y) % 4 ? "#2a2730" : ORANGE) + '"/>';
    });
    return svg(
      '<style>@keyframes thump{0%,100%{transform:translateY(0)}20%{transform:translateY(-3px)}40%{transform:translateY(0)}60%{transform:translateY(-3px)}}.thp{animation:thump 1.2s ease-in-out infinite}' +
      '@keyframes sl{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.sl{transform-origin:200px 260px;animation:sl 5s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(26) + '<circle cx="320" cy="48" r="24" fill="#f1f1e6"/><circle cx="312" cy="42" r="4" fill="#dcdcd0"/>' +
      '<path class="sl" d="M200 260L180 0h40z" fill="' + SILVER + '" opacity=".1"/>' + city +
      /* water tower on the next roof */
      '<path d="M290 140v-10M318 140v-10" stroke="#3a2a22" stroke-width="3"/><rect x="286" y="104" width="36" height="28" fill="#5a3a2a"/><path d="M284 104l20 -14 20 14z" fill="#3a2a22"/>' +
      /* the rooftop the gorilla stands on */
      '<rect x="150" y="176" width="130" height="84" fill="#2a2630"/><rect x="146" y="172" width="138" height="6" fill="#3a3640"/>' +
      '<rect x="160" y="198" width="110" height="18" rx="2" fill="#111"/><text x="215" y="210.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="' + SILVER + '">GETTY SQUARE</text>' +
      /* silverback silhouette with the silver saddle */
      '<g class="thp"><path d="M178 172q-4 -30 10 -44q8 -14 26 -14q22 0 30 16q14 14 10 42h-10l-2 -18 -6 18h-36l-4 -16 -4 16z" fill="#0c0b0e"/>' +
      '<path d="M200 128q20 -4 34 10q-14 4 -34 -2z" fill="' + SILVER + '" opacity=".75"/>' +
      '<circle cx="202" cy="108" r="12" fill="#0c0b0e"/><path d="M196 104h12" stroke="#3a3a40" stroke-width="2"/>' +
      '<path d="M190 130q-12 10 -6 24M222 130q12 10 6 24" stroke="#0c0b0e" stroke-width="9" stroke-linecap="round" fill="none"/></g>' +
      tag("SILVERBACK", 14, 100, 30, SILVER, -6) + tag("D-BLOCK", 24, 136, 24, ORANGE, -5) + tag("GORILLA", 290, 250, 22, GREEN, -4),
      sky("g2", "#0a0812", "#2a1a2a"));
  }

  /* 3. The Yonkers Riverfront Library at One Larkin Center: the big old brick factory building turned library on the Hudson at the Getty Square end of downtown, river and Palisades behind */
  function temple() {
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) { const x = 92 + c * 26, y = 72 + r * 28; wins += '<rect' + ((r + c) % 4 === 0 ? ' class="glow"' : '') + ' x="' + x + '" y="' + y + '" width="16" height="20" fill="' + ((r * 3 + c) % 4 ? "#2a3a4a" : "#ffe6a8") + '" stroke="#e6d6b4" stroke-width="1.5"/>'; }
    let bricks = "";
    for (let y = 64; y < 196; y += 7) bricks += '<path d="M80 ' + y + 'h250" stroke="#7a3a2a" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="gull"><path d="M0 40q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      palisades(130, .9) +
      '<rect x="0" y="160" width="400" height="40" fill="#3b6a8a"/><path class="shim" d="M10 170h40M340 180h40" stroke="#cfe6f2" stroke-width="2"/>' +
      /* the library building */
      '<rect x="80" y="56" width="250" height="140" fill="#9a4a36"/>' + bricks + wins +
      '<rect x="76" y="50" width="258" height="8" fill="#e6d6b4"/>' +
      '<rect x="180" y="176" width="50" height="20" fill="#1d2a36"/><rect x="184" y="180" width="42" height="16" fill="#ffe6a8" opacity=".6"/>' +
      '<rect x="120" y="158" width="170" height="14" fill="#111"/><text x="205" y="168.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#fff" letter-spacing=".5">YONKERS RIVERFRONT LIBRARY</text>' +
      /* the esplanade + a reader on the bench */
      '<rect x="0" y="196" width="400" height="64" fill="#8a8a86"/><rect x="0" y="196" width="400" height="4" fill="#b9b9b2"/>' +
      '<rect x="40" y="214" width="50" height="6" fill="#5a3a22"/><rect x="44" y="220" width="3" height="10" fill="#333"/><rect x="83" y="220" width="3" height="10" fill="#333"/>' +
      '<circle cx="64" cy="200" r="5" fill="#3a2a22"/><rect x="58" y="205" width="12" height="10" rx="3" fill="' + GREEN + '"/><rect x="66" y="206" width="8" height="6" fill="#fff"/>' +
      '<g class="car"><rect x="0" y="236" width="46" height="14" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="8" y="8" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="56" y="21" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Larkin Plz</text>' +
      tag("DONNIE G", 260, 236, 24, SILVER, -5),
      sky("g3", "#6aa6d8", "#f2dcc0"));
  }

  /* 4. Getty Square: Philipse Manor Hall, brick and white trim, with downtown traffic rolling past */
  function getty() {
    let win = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) {
      const x = 106 + i * 32, y = 104 + r * 42; if (r === 1 && i === 3) continue;
      win += '<rect x="' + x + '" y="' + y + '" width="16" height="26" fill="#2b3644" stroke="#f4f1ea" stroke-width="2.5"/><path d="M' + (x + 8) + ' ' + y + 'v26M' + x + ' ' + (y + 13) + 'h16" stroke="#f4f1ea" stroke-width="1"/>';
    }
    let bal = "";
    for (let x = 108; x < 296; x += 8) bal += '<rect x="' + x + '" y="62" width="3" height="10" fill="#f4f1ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* neighbors */
      '<rect x="0" y="80" width="80" height="120" fill="#6b5a4c"/><rect x="320" y="70" width="80" height="130" fill="#5a6470"/>' +
      (function () { let w = ""; for (let y = 90; y < 190; y += 22) { w += '<rect x="12" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".7"/><rect x="46" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".5"/>'; w += '<rect x="334" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".6"/><rect x="368" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".7"/>'; } return w; })() +
      /* the manor hall */
      '<path d="M92 88l18-20h180l18 20z" fill="#5d6268"/>' + bal + '<rect x="104" y="70" width="192" height="2" fill="#f4f1ea"/>' +
      '<rect x="94" y="88" width="212" height="112" fill="#9b4a35"/>' +
      '<rect x="94" y="88" width="212" height="5" fill="#f4f1ea"/><rect x="94" y="140" width="212" height="3" fill="#f4f1ea"/>' + win +
      '<rect x="200" y="160" width="20" height="40" fill="#f4f1ea"/><rect x="204" y="164" width="12" height="36" fill="#3a2a22"/>' +
      '<path d="M196 160l14-10 14 10z" fill="#f4f1ea"/>' +
      '<rect x="198" y="36" width="2" height="34" fill="#333"/><rect x="200" y="36" width="18" height="11" fill="#2a4f8a"/>' +
      /* street */
      '<rect x="0" y="200" width="400" height="60" fill="#22262c"/><path d="M0 230h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="208" width="70" height="18" rx="5" fill="' + ORANGE + '"/><rect x="12" y="200" width="40" height="12" rx="4" fill="' + ORANGE + '"/><rect x="16" y="202" width="14" height="8" fill="#cfe6ff"/><rect x="34" y="202" width="14" height="8" fill="#cfe6ff"/><circle cx="16" cy="228" r="6" fill="#111"/><circle cx="54" cy="228" r="6" fill="#111"/></g>' +
      tag("GETTY SQUARE", 24, 52, 24, SILVER, -4),
      sky("g4", "#1c2a44", "#d97b52"));
  }

  /* 5. Main St and Warburton Av: the tag wall, a jack-o-lantern on the stoop for Gorillaween */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="360" cy="34" r="14" fill="#fff1d6"/>' + IC_BD +
      /* brick wall with the tags */
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#4a2c24"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#5a3529"/>'; return b; })() +
      tag("SHEEK LOUCH", 26, 132, 32, ORANGE, -7) + tag("D-BLOCK", 60, 180, 30, SILVER, -3) + tag("GORILLAWEEN", 34, 210, 18, GREEN, -2) +
      /* jack-o-lantern */
      '<ellipse cx="236" cy="204" rx="18" ry="14" fill="#f07b1f"/><rect x="233" y="186" width="5" height="8" fill="#3d6b2c"/>' +
      '<path class="glow" d="M226 198l5 4h-8zM246 198l-5 4h8zM226 210q10 6 20 0" stroke="#ffe27a" stroke-width="2" fill="#ffe27a"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="264" y="88" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="254" y="110" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Warburton Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#3a2a4a"));
  }

  /* Iconic landmark behind the corner, shared with the other artists from this area but seen from this corner: the Yonkers Pier and the Palisades: down Main St from Getty Square, the pier pavilion up close with its lamps lit, the cliffs a dark wall behind */
  const IC_BD = "<g><style>@keyframes icsw{0%{transform:scaleX(1)}50%{transform:scaleX(-1)}100%{transform:scaleX(1)}}.icsw{animation:icsw 6s ease-in-out infinite}@keyframes icfl{0%,14%,36%,100%{opacity:0}25%{opacity:.85}}.icfl{animation:icfl 6s ease-in-out infinite}@keyframes icpl{0%,100%{opacity:.35}50%{opacity:1}}.icpl{animation:icpl 2.6s ease-in-out infinite}.icp2{animation-delay:-1.3s}@keyframes icbl{0%,49%{opacity:1}50%,100%{opacity:.12}}.icbl{animation:icbl 1.4s steps(1) infinite}.icb2{animation-delay:-.7s}@keyframes icsh{0%,100%{transform:translateX(0);opacity:.35}50%{transform:translateX(6px);opacity:.9}}.icsh{animation:icsh 3s ease-in-out infinite}.ics2{animation-delay:-1.5s}@keyframes icsm{0%{transform:translate(0,0) scale(.6);opacity:.75}100%{transform:translate(22px,-30px) scale(1.6);opacity:0}}.icsm{animation:icsm 4s linear infinite;transform-box:fill-box;transform-origin:center}.icm2{animation-delay:-1.3s}.icm3{animation-delay:-2.6s}@keyframes icsl{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.icsl{animation:icsl 5s ease-in-out infinite}.icl2{animation-delay:-2.5s}@keyframes icsg{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.icsg{animation:icsg 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}@keyframes icdr{from{transform:translateX(0)}to{transform:translateX(var(--d))}}.icdr{animation:icdr var(--t) linear infinite}</style><path d=\"M240 172L240 139.2L246 139.2L252 134.6L258 134.1L264 137.7L270 136.8L276 134.2L282 137.1L288 140.7L294 138.2L300 135.9L306 138.5L312 138.9L318 134.5L324 133.7L330 137.6L336 137.5L342 134.8L348 137.2L354 140.9L360 138.6L366 135.5L372 137.7L378 138.6L384 134.5L390 133.5L396 137.5L400 172z\" fill=\"#3a3640\"/><path d=\"M243 152V166\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M248 146V168\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M256 143V170\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M263 146V172\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M269 149V167\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M274 143V169\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M282 146V171\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M289 149V166\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M295 146V168\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M300 149V170\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M308 143V172\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M315 146V167\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M321 149V169\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M326 152V171\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M334 140V166\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M341 143V168\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M347 146V170\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M352 149V172\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M360 152V167\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M367 146V169\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M373 143V171\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M378 146V166\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M386 149V168\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M393 143V170\" stroke=\"#2c2832\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M399 146V172\" stroke=\"#2c2832\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M240 172q80 -10 160 0z\" fill=\"#2c2832\" opacity=\".6\"/><path d=\"M240 140.2Q237 130.2 240 135.2Q243 130.2 246 135.2Q249 125.6 252 130.6Q255 125.1 258 130.1Q261 128.7 264 133.7Q267 127.8 270 132.8Q273 125.2 276 130.2Q279 128.1 282 133.1Q285 131.7 288 136.7Q291 129.2 294 134.2Q297 126.9 300 131.9Q303 129.5 306 134.5Q309 129.9 312 134.9Q315 125.5 318 130.5Q321 124.7 324 129.7Q327 128.6 330 133.6Q333 128.5 336 133.5Q339 125.8 342 130.8Q345 128.2 348 133.2Q351 131.9 354 136.9Q357 129.6 360 134.6Q363 126.5 366 131.5Q369 128.7 372 133.7Q375 129.6 378 134.6Q381 125.5 384 130.5Q387 124.5 390 129.5Q393 128.5 396 133.5L400 140.5L240 142.2z\" fill=\"#161c1e\"/><rect x=\"240\" y=\"172\" width=\"160\" height=\"48\" fill=\"#1a2638\"/><path class=\"icsh\" d=\"M240 176h10\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh ics2\" d=\"M293 193h17\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh\" d=\"M346 210h10\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh ics2\" d=\"M269 185h17\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh\" d=\"M322 202h10\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><rect x=\"240\" y=\"204\" width=\"160\" height=\"4.8\" fill=\"#7a6a54\"/><rect x=\"243\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"257.4\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"271.8\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"286.2\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"300.6\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"315\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"329.4\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"343.8\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"358.2\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"372.6\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"387\" y=\"208.8\" width=\"2.4\" height=\"8\" fill=\"#2a2420\"/><rect x=\"324.5\" y=\"181.5\" width=\"75\" height=\"22.5\" fill=\"#efe6d0\"/><rect class=\"icpl\" x=\"330.5\" y=\"186\" width=\"7.5\" height=\"11.2\" fill=\"#ffd98a\"/><rect class=\"icpl icp2\" x=\"344\" y=\"186\" width=\"7.5\" height=\"11.2\" fill=\"#ffd98a\"/><rect class=\"icpl\" x=\"357.5\" y=\"186\" width=\"7.5\" height=\"11.2\" fill=\"#ffd98a\"/><rect class=\"icpl icp2\" x=\"371\" y=\"186\" width=\"7.5\" height=\"11.2\" fill=\"#ffd98a\"/><rect class=\"icpl\" x=\"384.5\" y=\"186\" width=\"7.5\" height=\"11.2\" fill=\"#ffd98a\"/><path d=\"M319.5 181.5L339.5 166.5L384.5 166.5L404.5 181.5z\" fill=\"#2f5a44\"/><rect x=\"357\" y=\"157.8\" width=\"10\" height=\"8.8\" fill=\"#efe6d0\"/><path d=\"M354.5 157.8l7.5 -7.5l7.5 7.5z\" fill=\"#2f5a44\"/><rect x=\"262\" y=\"188\" width=\"2\" height=\"16\" fill=\"#222\"/><circle class=\"icpl\" cx=\"263\" cy=\"187\" r=\"3\" fill=\"#ffe7a8\"/><rect x=\"284\" y=\"188\" width=\"2\" height=\"16\" fill=\"#222\"/><circle class=\"icpl icp2\" cx=\"285\" cy=\"187\" r=\"3\" fill=\"#ffe7a8\"/><rect x=\"306\" y=\"188\" width=\"2\" height=\"16\" fill=\"#222\"/><circle class=\"icpl\" cx=\"307\" cy=\"187\" r=\"3\" fill=\"#ffe7a8\"/></g>";
  window.SCENES = { train, pier, temple, getty, corner };
})();
