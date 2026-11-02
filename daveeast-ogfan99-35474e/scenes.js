/* Harlem opening scenes for the Dave East game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes chase{0%,49%{opacity:1}50%,100%{opacity:.25}}' +
    '.bulb{animation:chase .8s steps(1) infinite}.bulb2{animation-delay:.4s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.3}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-52px)}}' +
    '.bnc{animation:bounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes ring{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:ring 1.4s ease-in-out infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 24s linear infinite}.cld2{animation-delay:-12s}' +
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
  const RED = "#ff3b3b", ORANGE = "#ffb020", BLUE = "#4aa3ff", GREEN6 = "#00933c";

  /* 1. The 6 pulling into 116 St on Lexington Av, underground: white tile, ochre tile band, black columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 176; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8d3c8" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v176" stroke="#d8d3c8" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [16, 200, 384].forEach(x => { cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="186" fill="#141414"/><rect x="' + (x - 9) + '" y="0" width="18" height="4" fill="#141414"/><rect x="' + (x - 9) + '" y="182" width="18" height="4" fill="#141414"/>'; });
    const sign = x => '<rect x="' + x + '" y="54" width="120" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="54" width="120" height="4" fill="#fff"/>' +
      '<text x="' + (x + 12) + '" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">116 St</text>' + bullet(x + 98, 72, "6", GREEN6);
    return svg(
      '<rect width="400" height="176" fill="#ebe6da"/>' + tiles +
      '<rect x="0" y="0" width="400" height="10" fill="#201c1c"/>' +
      '<rect class="flk" x="50" y="3" width="60" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="240" y="3" width="60" height="4" rx="2" fill="#fffbe6"/>' +
      /* tile band with 116 plaques */
      '<rect x="0" y="20" width="400" height="24" fill="#6b4a12"/><rect x="0" y="24" width="400" height="16" fill="#c9962f"/>' +
      [105, 295].map(cx => '<rect x="' + (cx - 26) + '" y="22" width="52" height="20" fill="#ebe6da" stroke="#6b4a12" stroke-width="2"/>' +
        '<text x="' + cx + '" y="37" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="1" fill="#6b4a12">116</text>').join("") +
      sign(40) + sign(240) +
      /* the 6 slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + GREEN6 + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(292, 132, "6", GREEN6) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#16121c"/>' + cols +
      tag("FROM THE DIRT", 28, 240, 26, ORANGE, -4) + tag("EAST", 290, 242, 34, BLUE, -8),
      "");
  }

  /* 2. Taíno Towers, E 122nd to 123rd St at 2nd Av: the four 35-story concrete towers of East Harlem, windows coming on one by one at dusk */
  function apollo() {
    const sign = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + t + '</text>';
    let towers = "";
    [[34, 40], [124, 28], [214, 34], [304, 46]].forEach(([x, y], k) => {
      towers += '<rect x="' + x + '" y="' + y + '" width="66" height="' + (216 - y) + '" fill="#cbbfa8"/><rect x="' + (x + 28) + '" y="' + (y - 6) + '" width="10" height="' + (222 - y) + '" fill="#b3a68e"/>' +
        '<rect x="' + x + '" y="' + y + '" width="66" height="5" fill="#e0d6c2"/>';
      for (let yy = y + 12; yy < 206; yy += 9) for (let xx = x + 5; xx < x + 62; xx += 10) { if (xx > x + 24 && xx < x + 40) continue; const on = (xx * 3 + yy * 7 + k) % 5 === 0; towers += '<rect' + (on ? ' class="flk' + ((xx + yy) % 2 ? " flk2" : "") + '"' : '') + ' x="' + xx + '" y="' + yy + '" width="6" height="5" fill="' + (on ? "#ffd98a" : "#3a3440") + '"/>'; }
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) +
      '<g class="cld"><ellipse cx="0" cy="22" rx="44" ry="7" fill="#fff" opacity=".25"/></g>' + towers +
      /* the low base with the community center */
      '<rect x="0" y="206" width="400" height="20" fill="#9a8e78"/><rect x="0" y="206" width="400" height="3" fill="#e0d6c2"/>' +
      '<rect x="140" y="210" width="120" height="14" rx="2" fill="#111"/><text x="200" y="220.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff" letter-spacing="1">TAÍNO TOWERS</text>' +
      '<rect x="0" y="226" width="400" height="34" fill="#22252b"/><path d="M0 243h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="cld" style="animation-duration:7s"><rect x="0" y="230" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="34" cy="246" r="4" fill="#111"/></g>' +
      sign(8, 8, 64, "2 Av") + sign(318, 8, 74, "E 123 St") + tag("EAST", 280, 252, 26, RED, -5) + tag("KARMA", 14, 252, 22, ORANGE, -4),
      sky("g2", "#1a1438", "#e0885a"));
  }

  /* 3. The Rucker on 155th: blue court, orange key, chain fence, a ball bouncing on the hardwood-blue */
  function rucker() {
    let fence = "";
    for (let x = -40; x < 440; x += 14) fence += '<path d="M' + x + ' 60l60 90M' + (x + 60) + ' 60l-60 90" stroke="#6f7c88" stroke-width="1" opacity=".55"/>';
    let crowd = "";
    for (let i = 0; i < 22; i++) { const x = 6 + i * 18, y = 146 + (i % 2) * 4; crowd += '<circle cx="' + x + '" cy="' + y + '" r="6" fill="#0b0f1a"/><path d="M' + (x - 8) + ' ' + (y + 16) + 'q0-12 8-12t8 12z" fill="#0b0f1a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#rg)"/>' +
      '<g class="cld"><ellipse cx="60" cy="34" rx="40" ry="10" fill="#fff" opacity=".2"/></g><g class="cld cld2"><ellipse cx="60" cy="46" rx="30" ry="8" fill="#fff" opacity=".18"/></g>' +
      /* Polo Grounds towers behind */
      '<rect x="40" y="16" width="44" height="60" fill="#3a2c3a"/><rect x="300" y="8" width="50" height="68" fill="#3a2c3a"/>' +
      [[46, 24], [62, 24], [46, 40], [62, 40], [306, 18], [326, 18], [306, 34], [326, 34], [306, 50], [326, 50]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="10" height="8" fill="#ffd27a" opacity=".6"/>').join("") +
      /* fence + crowd */
      '<rect x="0" y="58" width="400" height="4" fill="#4a5560"/>' + fence + crowd +
      /* the court */
      '<path d="M0 170h400v90H0z" fill="#1f5fae"/>' +
      '<path d="M140 170h120l20 90H120z" fill="#f07a22"/>' +
      '<path d="M140 170h120l20 90H120z" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M150 170q50 40 100 0" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M40 260q160-90 320 0" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M0 170h400" stroke="#fff" stroke-width="3"/>' +
      /* hoop */
      '<rect x="196" y="78" width="8" height="92" fill="#22262c"/>' +
      '<rect x="166" y="66" width="68" height="44" rx="2" fill="#f4f7fb" stroke="#22262c" stroke-width="3"/><rect x="188" y="84" width="24" height="18" fill="none" stroke="#e8262b" stroke-width="2"/>' +
      '<ellipse cx="200" cy="106" rx="14" ry="3" fill="none" stroke="#f07a22" stroke-width="3"/>' +
      '<path d="M187 107l5 14h16l5-14M193 107l3 14M207 107l-3 14" stroke="#fff" stroke-width="1.2" fill="none"/>' +
      /* the ball bouncing */
      '<g class="bnc"><circle cx="300" cy="226" r="12" fill="#f07a22" stroke="#7a3008" stroke-width="1.5"/><path d="M288 226h24M300 214v24M292 217q8 9 0 18M308 217q-8 9 0 18" stroke="#7a3008" stroke-width="1.2" fill="none"/></g>' +
      '<ellipse cx="300" cy="240" rx="12" ry="3" fill="#0b2a55" opacity=".6"/>' +
      tag("HARLEM", 22, 50, 22, ORANGE, -5),
      sky("rg", "#ff9a5a", "#5a3a6e"));
  }

  /* 4. The RFK (Triborough) Bridge's Harlem River lift span at E 125th: the twin steel towers, the lift deck rising over the water, seen from East Harlem */
  function tower() {
    const truss = (x) => { let s = '<rect x="' + x + '" y="40" width="34" height="150" fill="none" stroke="#5f7a74" stroke-width="5"/>'; for (let y = 40; y < 190; y += 25) s += '<path d="M' + x + ' ' + y + 'l34 25M' + (x + 34) + ' ' + y + 'l-34 25" stroke="#5f7a74" stroke-width="2.5"/>'; return s + '<rect x="' + (x - 4) + '" y="32" width="42" height="10" fill="#4e6862"/><circle class="flk" cx="' + (x + 17) + '" cy="28" r="3" fill="#ff4a4a"/>'; };
    let lights = "";
    for (let x = 0; x < 400; x += 26) lights += '<circle class="flk' + (x % 52 ? " flk2" : "") + '" cx="' + x + '" cy="198" r="1.6" fill="#ffe7a8"/>';
    return svg(
      '<style>@keyframes lift{0%,30%{transform:translateY(0)}55%,75%{transform:translateY(-60px)}100%{transform:translateY(0)}}.lift{animation:lift 8s ease-in-out infinite}' +
      '@keyframes tug{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.tug{animation:tug 12s linear infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(14) +
      /* Randalls Island + the Bronx low skyline */
      '<path d="M0 186h400v-14l-40 -8 -30 6 -60 -12 -50 10 -80 -6 -60 8 -80 -4z" fill="#26323a"/>' +
      /* the fixed approach decks */
      '<rect x="0" y="194" width="110" height="10" fill="#4e6862"/><rect x="290" y="194" width="110" height="10" fill="#4e6862"/>' +
      truss(84) + truss(282) +
      /* the lift span */
      '<g class="lift"><rect x="118" y="186" width="164" height="16" fill="#6f8a84"/><path d="M118 186l20 -14h124l20 14" stroke="#5f7a74" stroke-width="3" fill="none"/>' +
      '<path d="M138 172v14M170 172v14M200 172v14M230 172v14M262 172v14" stroke="#5f7a74" stroke-width="2"/></g>' +
      lights +
      /* the river */
      '<rect x="0" y="204" width="400" height="56" fill="#1d3a52"/><path d="M30 220h50M200 232h60M300 246h50" stroke="#9ecae8" stroke-width="2" opacity=".5"/>' +
      '<g class="tug"><path d="M0 226h40l-6 8H6z" fill="#c33"/><rect x="12" y="216" width="14" height="10" fill="#f2f2f2"/></g>' +
      '<rect x="110" y="236" width="180" height="16" rx="2" fill="#111"/><text x="200" y="247.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#fff">RFK BRIDGE · HARLEM RIVER LIFT SPAN</text>' +
      '<rect x="8" y="8" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="52" y="21" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 125 St</text>' +
      tag("FROM THE DIRT", 160, 30, 20, ORANGE, -4),
      sky("g4", "#0e0c24", "#3a2a5c"));
  }

  /* 5. E 116 St and Lexington Av: street signs, brownstone stoop, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cg)"/>' + stars(16) +
      "<g id=\"landmark-bd\"><style>@keyframes apdave_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apdave_a{animation:apdave_ch .8s steps(1) infinite}.apdave_b{animation:apdave_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apdave_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apdave_g{animation:apdave_gl 2.6s ease-in-out infinite}@keyframes apdave_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apdave_s{transform-box:fill-box;transform-origin:50% 100%;animation:apdave_sw 6s ease-in-out infinite}.apdave_s2{animation-delay:-3s}@keyframes apdave_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apdave_d{animation:apdave_dr 22s linear infinite}.apdave_d2{animation-delay:-11s}@keyframes apdave_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apdave_r{animation:apdave_rn .7s linear infinite}@keyframes apdave_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apdave_m{animation:apdave_mv 9s linear infinite}@keyframes apdave_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apdave_ml{animation:apdave_mvl 7s linear infinite}@keyframes apdave_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apdave_f{animation:apdave_fl 3.1s infinite}</style><rect x=\"0\" y=\"36.5\" width=\"35\" height=\"13.5\" fill=\"#1a1a28\"/><rect x=\"13\" y=\"40.5\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"34\" y=\"33.6\" width=\"16\" height=\"16.4\" fill=\"#1a1a28\"/><rect x=\"42\" y=\"37.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"42\" y=\"43.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"49\" y=\"32\" width=\"23\" height=\"18\" fill=\"#1a1a28\"/><rect x=\"52\" y=\"36\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"57\" y=\"42\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"55\" y=\"19\" width=\"10\" height=\"9.5\" fill=\"#1a1a28\"/><path d=\"M54 19l6 -5l6 5z\" fill=\"#1a1a28\"/><path d=\"M56 28.5v3.5M64 28.5v3.5\" stroke=\"#1a1a28\" stroke-width=\"1.2\"/><rect x=\"71\" y=\"44\" width=\"34\" height=\"6\" fill=\"#1a1a28\"/><rect x=\"104\" y=\"42.7\" width=\"33\" height=\"7.3\" fill=\"#1a1a28\"/><rect x=\"136\" y=\"31\" width=\"32\" height=\"19\" fill=\"#1a1a28\"/><rect x=\"154\" y=\"41\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"167\" y=\"43.6\" width=\"23\" height=\"6.4\" fill=\"#1a1a28\"/><rect x=\"189\" y=\"36.4\" width=\"28\" height=\"13.6\" fill=\"#1a1a28\"/><rect x=\"207\" y=\"40.4\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"197.5\" y=\"23.4\" width=\"10\" height=\"9.5\" fill=\"#1a1a28\"/><path d=\"M196.5 23.4l6 -5l6 5z\" fill=\"#1a1a28\"/><path d=\"M198.5 32.9v3.5M206.5 32.9v3.5\" stroke=\"#1a1a28\" stroke-width=\"1.2\"/><rect x=\"216\" y=\"32.7\" width=\"30\" height=\"17.3\" fill=\"#1a1a28\"/><rect x=\"239\" y=\"36.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"239\" y=\"42.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"245\" y=\"43.3\" width=\"19\" height=\"6.7\" fill=\"#1a1a28\"/><rect x=\"249\" y=\"30.3\" width=\"10\" height=\"9.5\" fill=\"#1a1a28\"/><path d=\"M248 30.3l6 -5l6 5z\" fill=\"#1a1a28\"/><path d=\"M250 39.8v3.5M258 39.8v3.5\" stroke=\"#1a1a28\" stroke-width=\"1.2\"/><g transform=\"translate(120 8)\"><rect class=\"apdave_g\" x=\"-3.8\" y=\"-3.3\" width=\"18.7\" height=\"50.6\" rx=\"5.5\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M2.2 0l3.3 -4.9l3.3 5z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"11\" height=\"44\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"0.8\"/><text x=\"5.5\" y=\"6.9\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">A</text><text x=\"5.5\" y=\"13.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">P</text><text x=\"5.5\" y=\"20.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">O</text><text x=\"5.5\" y=\"27.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">L</text><text x=\"5.5\" y=\"34.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">L</text><text x=\"5.5\" y=\"41.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.4\" fill=\"#fff\">O</text><circle class=\"apdave_b\" cx=\"1.1\" cy=\"1.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"9.9\" cy=\"1.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"1.1\" cy=\"5.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"9.9\" cy=\"5.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"1.1\" cy=\"8.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"9.9\" cy=\"8.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"1.1\" cy=\"12.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"9.9\" cy=\"12.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"1.1\" cy=\"15.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"9.9\" cy=\"15.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"1.1\" cy=\"19.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"9.9\" cy=\"19.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"1.1\" cy=\"22.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"9.9\" cy=\"22.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"1.1\" cy=\"26.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"9.9\" cy=\"26.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"1.1\" cy=\"29.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"9.9\" cy=\"29.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"1.1\" cy=\"33.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"9.9\" cy=\"33.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"1.1\" cy=\"37\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_b\" cx=\"9.9\" cy=\"37\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"1.1\" cy=\"40.5\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apdave_a\" cx=\"9.9\" cy=\"40.5\" r=\"0.8\" fill=\"#ffe9a0\"/></g><rect x=\"0\" y=\"52\" width=\"250\" height=\"6\" fill=\"#2a2d34\"/><rect x=\"20\" y=\"58\" width=\"4\" height=\"12\" fill=\"#2a2d34\"/><rect x=\"80\" y=\"58\" width=\"4\" height=\"12\" fill=\"#2a2d34\"/><rect x=\"140\" y=\"58\" width=\"4\" height=\"12\" fill=\"#2a2d34\"/><rect x=\"200\" y=\"58\" width=\"4\" height=\"12\" fill=\"#2a2d34\"/><g class=\"apdave_m\" style=\"animation-duration:7s\"><rect x=\"-60\" y=\"40\" width=\"110\" height=\"12\" fill=\"#9aa3ad\" rx=\"2\"/><rect x=\"-54\" y=\"43\" width=\"10\" height=\"4\" fill=\"#ffe7a8\"/><rect x=\"-38\" y=\"43\" width=\"10\" height=\"4\" fill=\"#ffe7a8\"/><rect x=\"-22\" y=\"43\" width=\"10\" height=\"4\" fill=\"#ffe7a8\"/><rect x=\"-6\" y=\"43\" width=\"10\" height=\"4\" fill=\"#ffe7a8\"/><rect x=\"10\" y=\"43\" width=\"10\" height=\"4\" fill=\"#ffe7a8\"/><rect x=\"26\" y=\"43\" width=\"10\" height=\"4\" fill=\"#ffe7a8\"/></g></g>" +
      /* brownstone behind */
      '<rect x="250" y="30" width="150" height="190" fill="#5a3a2a"/>' +
      [[266, 46], [312, 46], [358, 46], [266, 96], [312, 96], [358, 96]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="26" height="36" fill="#ffd27a" opacity=".5"/><rect x="' + (x - 3) + '" y="' + (y - 5) + '" width="32" height="5" fill="#7a5440"/>').join("") +
      '<path d="M300 220l20-40h40v40z" fill="#4a2e22"/><path d="M304 212h52M308 204h48M312 196h44M316 188h40" stroke="#3a2218" stroke-width="2"/>' +
      /* wall with the tags */
      '<rect x="14" y="70" width="230" height="150" fill="#3a3842"/>' +
      tag("DAVE EAST", 24, 150, 27, RED, -7) + tag("EAST HARLEM", 30, 200, 22, BLUE, -3) +
      /* streetlight */
      '<rect x="234" y="56" width="5" height="164" fill="#1d2329"/><path d="M236 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M252 62h22l-5 8h-12z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M252 70h22l30 150h-82z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="186" y="88" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="234" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 116 St</text>' +
      '<rect x="186" y="110" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="234" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Lexington Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("cg", "#0e0a1e", "#2e2048"));
  }

  window.SCENES = { train, apollo, rucker, tower, corner };
})();
