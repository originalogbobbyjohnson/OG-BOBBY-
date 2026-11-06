/* Stetsasonic game (NYC map, Brooklyn: East New York / Brownsville, where the members grew up). Five small animated SVGs, 400 x 260.
   CSS classes are prefixed "st-". No logos, no faces.
   1. Livonia Av on the L, up on the el in East New York: the gray L train sliding in.
   2. The Roxy on W 18th St: the roller-rink hip-hop nights where the Stet played ("Go Stetsa" days), mirror ball spinning, a skater rolling.
   3. CBGB on the Bowery: early-evening rap shows before the punk sets, where the members watched and learned.
   4. The radio booth on KISS-FM nights ("Heard you on the radio"): ON AIR light, a record spinning, the request card says GO STETSA.
   5. Livonia Av and Van Sinderen Av: green signs, the band's name on the wall, and behind it the 3 train's el crossing over the L. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes st-flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.st-flk{animation:st-flick 2.2s infinite}.st-flk2{animation-delay:1s}' +
    '@keyframes st-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.st-spin{transform-box:fill-box;transform-origin:50% 50%;animation:st-spin 2s linear infinite}' +
    '@keyframes st-skate{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.st-skate{animation:st-skate 6s linear infinite}' +
    '@keyframes st-beam{0%,100%{opacity:.15}50%{opacity:.5}}.st-beam{animation:st-beam 1.6s ease-in-out infinite}.st-beam2{animation-delay:.8s}' +
    '@keyframes st-blink{0%,49%{opacity:1}50%,100%{opacity:.35}}.st-air{animation:st-blink 1.2s steps(1) infinite}' +
    '@keyframes st-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.st-eq{transform-box:fill-box;transform-origin:50% 100%;animation:st-eq .6s ease-in-out infinite}.st-eq2{animation-delay:-.2s}.st-eq3{animation-delay:-.4s}' +
    '@keyframes st-car{from{transform:translateX(-90px)}to{transform:translateX(460px)}}.st-car{animation:st-car 6.5s linear infinite}' +
    '@keyframes st-el3{from{transform:translateX(420px)}to{transform:translateX(-260px)}}.st-el3{animation:st-el3 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const ORANGE = "#ff7a1a", BLUE = "#3fb5e6", YELLOW = "#f2d22e", CREAM = "#f4ead8", LGRAY = "#a7a9ac", RED = "#ee352e", SIGN = "#0f6b3a";
  const rowhouses = (col, lit) => { let g = ""; [[0, 112, 60], [64, 120, 54], [122, 106, 62], [250, 116, 56], [310, 104, 60], [372, 118, 40]].forEach(([x, y, w]) => {
    g += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="' + col + '"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="4" fill="#000" opacity=".25"/>';
    if (lit) for (let yy = y + 10; yy < 160; yy += 18) for (let xx = x + 8; xx < x + w - 10; xx += 16) g += '<rect class="st-flk' + ((xx + yy) % 2 ? " st-flk2" : "") + '" x="' + xx + '" y="' + yy + '" width="8" height="10" fill="#ffd98a" opacity=".8"/>'; }); return g; };

  /* 1. Livonia Av (L) */
  function livonia() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#st1)"/>' + stars(12) + rowhouses("#3a2f3a", true) +
      /* canopy and posts */
      '<path d="M0 44h400v10H0z" fill="#4a4f5a"/><rect x="0" y="54" width="400" height="4" fill="#6e7480"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="104" fill="#3d5a7a"/>').join("") +
      /* black station sign */
      '<rect x="80" y="64" width="230" height="30" rx="3" fill="#111"/><rect x="80" y="64" width="230" height="3" fill="#fff"/>' +
      '<text x="94" y="86" ' + font + ' font-size="15" fill="#fff">Livonia Av</text>' + bullet(290, 79, "L", LGRAY) +
      /* the L train */
      '<g class="anim-train">' +
        '<rect x="6" y="100" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="6" y="138" width="300" height="5" fill="#5b6270"/>' +
        '<rect x="286" y="108" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "L", LGRAY) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge and the el structure over Livonia Ave */
      '<rect x="0" y="156" width="400" height="8" fill="#eab308"/><rect x="0" y="164" width="400" height="14" fill="#5a5f68"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#20202a"/>' +
      [20, 140, 260, 380].map(x => '<rect x="' + (x - 5) + '" y="178" width="10" height="82" fill="#3d5a7a"/><path d="M' + (x - 30) + ' 178l30 26l30-26" stroke="#3d5a7a" stroke-width="4" fill="none"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#33363f"/><path d="M0 249h400" stroke="#eab308" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="st-car"><rect x="0" y="232" width="58" height="15" rx="5" fill="' + ORANGE + '"/><rect x="10" y="226" width="32" height="9" rx="3" fill="#bfe1f5"/><circle cx="14" cy="248" r="4.5" fill="#111"/><circle cx="46" cy="248" r="4.5" fill="#111"/></g>' +
      '<text x="200" y="214" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + CREAM + '" letter-spacing="3">LIVONIA AVE</text>',
      sky("st1", "#0d0f24", "#4a3058"));
  }

  /* 2. The Roxy, W 18th St */
  function roxy() {
    let floor = "";
    for (let x = -40; x < 440; x += 40) floor += '<path d="M200 150L' + x + ' 260" stroke="#7a4a2a" stroke-width="1" opacity=".6"/>';
    let facets = "";
    for (let a = 0; a < 6; a++) facets += '<path d="M' + (186 + a * 5) + ' 28v28" stroke="#fff" stroke-width=".8" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="#120a1e"/>' +
      /* back wall with the plain name lettering */
      '<rect x="0" y="40" width="400" height="110" fill="#22163a"/>' +
      /* light beams */
      '<path d="M200 40L60 150h50z" fill="' + ORANGE + '" class="st-beam"/><path d="M200 40L330 150h-50z" fill="' + BLUE + '" class="st-beam st-beam2"/>' +
      '<text x="200" y="104" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="40" fill="none" stroke="' + BLUE + '" stroke-width="2.5" letter-spacing="10" class="st-flk">THE ROXY</text>' +
      '<text x="200" y="128" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="4" opacity=".8">W 18TH ST</text>' +
      /* mirror ball */
      '<path d="M200 0v26" stroke="#888" stroke-width="2"/><g class="st-spin"><circle cx="200" cy="42" r="15" fill="#c9ced6"/>' + facets + '<path d="M185 36h30M185 42h30M185 48h30" stroke="#fff" stroke-width=".8" opacity=".6"/></g>' +
      /* rink floor */
      '<path d="M0 150h400v110H0z" fill="#b9733f"/>' + floor + '<path d="M0 150h400" stroke="#ffd98a" stroke-width="3"/>' +
      '<path d="M0 252h400" stroke="' + YELLOW + '" stroke-width="3"/>' +
      /* the stage on the left: drum kit, bass amp */
      '<rect x="6" y="132" width="80" height="20" fill="#2b2b36"/><circle cx="36" cy="140" r="9" fill="#e8e2d0" stroke="#333" stroke-width="2"/><circle cx="56" cy="134" r="5" fill="#d9a520"/><rect x="68" y="126" width="12" height="16" fill="#111"/>' +
      /* a skater rolling */
      '<g class="st-skate"><rect x="0" y="194" width="12" height="28" rx="5" fill="' + ORANGE + '"/><circle cx="6" cy="186" r="7" fill="#3b2a20"/><path d="M2 222l-4 14M10 222l6 14" stroke="#2a2a33" stroke-width="5"/><rect x="-10" y="236" width="14" height="4" rx="2" fill="#fff"/><rect x="10" y="236" width="14" height="4" rx="2" fill="#fff"/><circle cx="-6" cy="242" r="2.5" fill="' + YELLOW + '"/><circle cx="0" cy="242" r="2.5" fill="' + YELLOW + '"/><circle cx="14" cy="242" r="2.5" fill="' + YELLOW + '"/><circle cx="20" cy="242" r="2.5" fill="' + YELLOW + '"/></g>');
  }

  /* 3. CBGB on the Bowery */
  function cbgb() {
    return svg(
      '<rect width="400" height="260" fill="url(#st3)"/>' + stars(10) +
      /* the old tenement front */
      '<rect x="40" y="20" width="320" height="200" fill="#4a3a33"/>' +
      [70, 140, 210, 280].map(x => '<rect x="' + x + '" y="34" width="44" height="34" fill="#1d1a22"/><rect x="' + x + '" y="34" width="44" height="34" fill="#ffd98a" opacity=".25" class="st-flk' + (x % 140 ? " st-flk2" : "") + '"/>').join("") +
      /* the long white awning with plain red lettering */
      '<path d="M50 84h300l10 30H40z" fill="#f2efe6" stroke="#bdb6a6" stroke-width="2"/>' +
      '<text x="200" y="107" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="20" fill="#c8202a" letter-spacing="6">CBGB</text>' +
      /* doorway with flyer-covered walls */
      '<rect x="60" y="114" width="280" height="106" fill="#2a2228"/>' +
      (() => { let f = ""; const cols = [YELLOW, CREAM, BLUE, ORANGE, "#e8e2d0", "#d24b6a"]; for (let i = 0; i < 22; i++) f += '<rect x="' + (66 + (i * 37) % 260) + '" y="' + (120 + (i * 23) % 80) + '" width="22" height="28" fill="' + cols[i % 6] + '" opacity=".75" transform="rotate(' + ((i % 5) - 2) * 4 + ' ' + (77 + (i * 37) % 260) + ' ' + (134 + (i * 23) % 80) + ')"/>'; return f; })() +
      '<rect x="176" y="140" width="48" height="80" fill="#0e0b10"/><rect x="176" y="140" width="48" height="80" fill="' + ORANGE + '" opacity=".25" class="st-flk"/>' +
      tag("HIP HOP TONIGHT", 104, 136, 16, YELLOW, -3) +
      /* sidewalk, Bowery street */
      '<rect x="0" y="220" width="400" height="40" fill="#55575c"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="st-car"><rect x="0" y="236" width="58" height="15" rx="5" fill="' + YELLOW + '"/><rect x="10" y="230" width="32" height="9" rx="3" fill="#bfe1f5"/><circle cx="14" cy="252" r="4.5" fill="#111"/><circle cx="46" cy="252" r="4.5" fill="#111"/></g>' +
      '<rect x="372" y="150" width="4" height="72" fill="#3d4b3f"/><rect x="336" y="140" width="62" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.2"/><text x="367" y="153" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Bowery</text>',
      sky("st3", "#0b0d1c", "#2c2a48"));
  }

  /* 4. The radio booth */
  function radio() {
    return svg(
      '<rect width="400" height="260" fill="#16121e"/>' +
      /* acoustic foam wall */
      (() => { let f = ""; for (let y = 0; y < 150; y += 20) for (let x = 0; x < 400; x += 20) f += '<path d="M' + x + ' ' + y + 'h20v20h-20z" fill="' + ((x + y) % 40 ? "#2a2236" : "#241d30") + '"/>'; return f; })() +
      /* ON AIR light */
      '<rect x="150" y="18" width="100" height="32" rx="6" fill="#3a0d10" stroke="#111" stroke-width="2"/><rect class="st-air" x="154" y="22" width="92" height="24" rx="4" fill="#e8202a"/>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="16" fill="#fff" letter-spacing="3">ON AIR</text>' +
      /* window to the street skyline */
      '<rect x="270" y="64" width="116" height="70" fill="#0d1030" stroke="#555" stroke-width="3"/>' +
      [[276, 96, 16], [296, 84, 14], [314, 100, 18], [336, 78, 14], [354, 92, 26]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (134 - y) + '" fill="#2b3150"/>').join("") +
      /* the request board */
      '<rect x="14" y="64" width="120" height="74" fill="#e8e2d0" stroke="#8a7a5a" stroke-width="2"/>' +
      '<text x="74" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#333">TONIGHT\'S REQUESTS</text>' +
      '<text x="74" y="98" text-anchor="middle" ' + font + ' font-size="13" fill="' + ORANGE + '">GO STETSA</text><text x="74" y="114" text-anchor="middle" ' + font + ' font-size="9" fill="#333">TALKIN\' ALL THAT JAZZ</text><text x="74" y="128" text-anchor="middle" ' + font + ' font-size="9" fill="#333">FLOAT ON</text>' +
      /* console desk */
      '<path d="M0 170h400v90H0z" fill="#2b2b36"/><path d="M0 170h400v6H0z" fill="#44444f"/>' +
      /* turntable with spinning record */
      '<rect x="30" y="180" width="110" height="70" rx="4" fill="#3b3b46"/><g class="st-spin"><circle cx="80" cy="215" r="28" fill="#111"/><circle cx="80" cy="215" r="20" fill="none" stroke="#333" stroke-width="1"/><circle cx="80" cy="215" r="9" fill="' + ORANGE + '"/><circle cx="83" cy="211" r="2" fill="#fff"/></g>' +
      '<path d="M126 188l-22 30" stroke="#c9ced6" stroke-width="3"/>' +
      /* level meters */
      [170, 184, 198, 212, 226].map((x, i) => '<rect class="st-eq st-eq' + (i % 3 + 1) + '" x="' + x + '" y="186" width="9" height="50" fill="' + [BLUE, YELLOW, ORANGE][i % 3] + '"/>').join("") +
      /* the mic on its arm */
      '<path d="M330 260V200l-30-40" stroke="#888" stroke-width="5" fill="none"/><rect x="284" y="134" width="26" height="38" rx="12" fill="#555" stroke="#c9ced6" stroke-width="2" transform="rotate(-36 297 153)"/>',
      "");
  }

  /* 5. Livonia Av and Van Sinderen Av */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#st5)"/>' + stars(14) + rowhouses("#2c2838", true) +
      /* the 3 el crossing over the L behind */
      '<rect x="0" y="62" width="400" height="12" fill="#3d5a7a"/><rect x="0" y="74" width="400" height="4" fill="#2f4762"/>' +
      [50, 180, 310].map(x => '<rect x="' + (x - 4) + '" y="78" width="8" height="90" fill="#3d5a7a"/>').join("") +
      '<g class="st-el3"><rect x="0" y="44" width="220" height="18" rx="3" fill="#c9ced6"/>' + [10, 50, 90, 130, 170].map(x => '<rect x="' + x + '" y="48" width="22" height="8" fill="#cfe2f5"/>').join("") + bullet(206, 53, "3", RED) + '</g>' +
      /* the wall */
      '<rect x="0" y="146" width="320" height="82" fill="#5c4033"/>' +
      (() => { let b = ""; for (let y = 152; y < 228; y += 8) b += '<path d="M0 ' + y + 'h320" stroke="#47302a" stroke-width="1"/>'; return b; })() +
      tag("STETSASONIC", 14, 196, 36, ORANGE, -5) + tag("GO STETSA", 30, 222, 18, CREAM, -3) + tag("ON FIRE", 196, 220, 20, YELLOW, -6) +
      /* sidewalk and street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="st-car"><rect x="0" y="240" width="40" height="13" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="30" cy="253" r="4" fill="#111"/></g>' +
      /* sign post */
      '<rect x="356" y="96" width="5" height="134" fill="#3d4b3f"/>' +
      '<rect x="300" y="98" width="98" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="349" y="114" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Livonia Av</text>' +
      '<rect x="294" y="124" width="104" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="346" y="140" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Van Sinderen Av</text>' +
      '<circle class="st-flk" cx="358" cy="92" r="4" fill="#fff6c2"/>',
      sky("st5", "#0a0c1a", "#3a2c4c"));
  }

  window.SCENES = { livonia: livonia, roxy: roxy, cbgb: cbgb, radio: radio, corner: corner };
})();
