/* kaitlinbutts scenes (Regions: More of the South / Genres: country; Tulsa OK - Denver Avenue Station, the Golden Driller at Expo Square, the Marfa Lights out west, the Center of the Universe downtown, 61st & Mingo by Union High). CSS classes prefixed kbt- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kbtglow{0%,100%{opacity:.4}50%{opacity:1}}.kbt-glow{animation:kbtglow 2.2s ease-in-out infinite}.kbt-g2{animation-delay:-1.1s}' +
    '@keyframes kbtcloud{0%{transform:translateX(0)}100%{transform:translateX(44px)}}.kbt-cl{animation:kbtcloud 14s ease-in-out infinite alternate}' +
    '@keyframes kbtorb{0%{transform:translate(0,0);opacity:.2}30%{opacity:1}50%{transform:translate(30px,-8px);opacity:.9}80%{opacity:.3}100%{transform:translate(60px,0);opacity:.1}}.kbt-orb{animation:kbtorb 6s ease-in-out infinite}.kbt-o2{animation-delay:-2s}.kbt-o3{animation-delay:-4s}' +
    '@keyframes kbtring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.kbt-ring{transform-box:fill-box;transform-origin:50% 50%;animation:kbtring 2.4s ease-out infinite}.kbt-r2{animation-delay:-1.2s}' +
    '@keyframes kbtwalk{0%{transform:translateX(-120px)}100%{transform:translateX(440px)}}.kbt-walk{animation:kbtwalk 15s linear infinite}.kbt-walk2{animation-delay:-7.5s}' +
    '@keyframes kbtbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.kbt-bird{animation:kbtbird 13s linear infinite}' +
    '@keyframes kbtflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.kbt-flag{transform-box:fill-box;transform-origin:0 50%;animation:kbtflag 1.6s ease-in-out infinite}' +
    '@keyframes kbtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kbt-sp{animation:kbtspray 1.4s ease-out infinite}.kbt-sp2{animation-delay:.45s}' +
    '@keyframes kbttwk{0%,100%{opacity:.2}50%{opacity:1}}.kbt-tw{animation:kbttwk 1.8s ease-in-out infinite}.kbt-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const PINK = "#e86aa0", TURQ = "#3ec1c9", GOLD = "#f0c04a", CREAM = "#f6ecdc";
  const stars = (pts) => pts.map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.4" fill="#fff" class="kbt-tw' + (i % 2 ? " kbt-tw2" : "") + '"/>').join("");
  /* Tulsa skyline: BOK Tower (tall, pale), Mid-Continent Tower (Gothic brown top), Art Deco blocks */
  const skyline = (base, s, col) => {
    const X = v => (v).toFixed(1), k = v => (v * s).toFixed(1);
    let o = '<g fill="' + col + '">';
    [[20, 40, 60], [64, 30, 84], [100, 24, 70], [130, 34, 120], [170, 26, 150], [202, 40, 96], [248, 30, 110], [284, 36, 76], [326, 30, 90], [362, 34, 60]].forEach(b => o += '<rect x="' + b[0] + '" y="' + (base - b[2] * s) + '" width="' + b[1] + '" height="' + (b[2] * s) + '"/>');
    /* BOK Tower */
    o += '<rect x="176" y="' + (base - 168 * s) + '" width="22" height="' + (168 * s) + '"/>';
    /* Mid-Continent Tower with stepped gothic crown */
    o += '<rect x="134" y="' + (base - 132 * s) + '" width="26" height="' + (132 * s) + '"/><path d="M134 ' + (base - 132 * s) + 'l13 -' + k(14) + 'l13 ' + k(14) + 'z"/>';
    return o + '</g>';
  };

  /* 1. Denver Avenue Station, downtown Tulsa: the city bus pulling into the transit hub, MetroLink Tulsa sign, downtown towers behind */
  function kbtstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#kbt1)"/>' +
      '<g class="kbt-cl"><ellipse cx="70" cy="30" rx="34" ry="7" fill="#fff" opacity=".55"/><ellipse cx="260" cy="20" rx="28" ry="6" fill="#fff" opacity=".45"/></g>' +
      skyline(150, .8, "#8a9ab0") +
      /* station canopy */
      '<rect x="0" y="96" width="400" height="12" fill="#3a4a5a"/><path d="M0 96l20 -14h360l20 14z" fill="#5a6e82"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="108" width="6" height="70" fill="#7a8a9a"/>').join("") +
      '<rect x="0" y="150" width="400" height="28" fill="#c8c0b0"/>' +
      /* station name board */
      '<rect x="110" y="50" width="200" height="40" rx="4" fill="#14243a" stroke="#fff" stroke-width="2"/>' +
      '<text x="210" y="70" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Denver Avenue Station</text>' +
      '<text x="210" y="84" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '" letter-spacing=".8">METROLINK TULSA  ·  319 S DENVER AVE</text>' +
      '<rect x="0" y="176" width="400" height="84" fill="#4a4a4e"/><rect x="0" y="174" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 238h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      /* bus */
      '<g class="anim-train"><g transform="translate(110 0)">' +
      '<rect x="0" y="170" width="170" height="52" rx="8" fill="#f4f4f0" stroke="#2a3a4a" stroke-width="2"/>' +
      '<rect x="0" y="206" width="170" height="8" fill="#1d6fb8"/><rect x="0" y="198" width="170" height="4" fill="' + GOLD + '"/>' +
      [10, 42, 74, 106].map(x => '<rect x="' + x + '" y="178" width="26" height="16" rx="2" fill="#9ad0ea"/>').join("") +
      '<rect x="140" y="176" width="26" height="40" rx="2" fill="#9ad0ea"/><rect x="140" y="170" width="26" height="6" fill="#1a1a22"/><text x="153" y="175" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb24a">DOWNTOWN</text>' +
      '<circle cx="30" cy="224" r="9" fill="#111"/><circle cx="130" cy="224" r="9" fill="#111"/><circle cx="30" cy="224" r="4" fill="#aaa"/><circle cx="130" cy="224" r="4" fill="#aaa"/>' +
      '<rect x="166" y="208" width="5" height="5" fill="#ffd27a" class="kbt-glow"/></g></g>',
      sky("kbt1", "#5a9ad8", "#f0dcc0"));
  }

  /* 2. The Golden Driller at Expo Square: the giant gold oil worker in a hard hat, his hand on the derrick (no face drawn) */
  function kbtdriller() {
    const G = "#e8b23a", GD = "#a87a1a";
    return svg(
      '<rect width="400" height="260" fill="url(#kbt2)"/>' +
      '<g class="kbt-cl"><ellipse cx="70" cy="40" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="320" cy="26" rx="32" ry="7" fill="#fff" opacity=".5"/></g>' +
      '<g class="kbt-bird"><path d="M0 70q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#7aa04a"/><rect x="0" y="198" width="400" height="4" fill="#5a8034"/>' +
      /* Expo building behind */
      '<path d="M250 200v-40q60 -26 140 0v40z" fill="#c8c4bc"/><path d="M250 160q60 -26 140 0" stroke="#9a968e" stroke-width="2" fill="none"/>' +
      /* derrick */
      '<g stroke="#8a8a92" stroke-width="2.5" fill="none"><path d="M200 196l16 -150l16 150"/><path d="M204 160h24M208 120h16M212 84h8M202 180l26 -40M228 180l-26 -40M206 140l20 -40M226 140l-20 -40"/></g>' +
      /* base */
      '<rect x="60" y="188" width="120" height="14" fill="#d8d0c0" stroke="#9a9080" stroke-width="2"/>' +
      /* the driller: boots, legs, belt, shirt, arm to derrick, hard hat */
      '<g fill="' + G + '" stroke="' + GD + '" stroke-width="2">' +
      '<rect x="96" y="176" width="20" height="12" rx="3"/><rect x="124" y="176" width="20" height="12" rx="3"/>' +
      '<path d="M100 178l4 -60h14l2 60z"/><path d="M122 178l2 -60h14l4 60z"/>' +
      '<rect x="98" y="110" width="46" height="10" rx="2"/>' +
      '<path d="M96 112l4 -54h42l4 54z"/>' +
      '<path d="M142 66l50 -10l3 10l-48 12z"/>' +
      '<path d="M98 66l-12 40l10 3l12 -34z"/>' +
      '<rect x="110" y="40" width="22" height="20" rx="8"/>' +
      '<path d="M104 42q17 -20 34 0z"/><rect x="100" y="40" width="42" height="4" rx="2"/>' +
      '</g>' +
      '<rect x="98" y="112" width="46" height="5" fill="' + GD + '" opacity=".5"/>' +
      '<rect x="60" y="226" width="120" height="16" rx="2" fill="#2a1e18" opacity=".85"/><text x="120" y="237.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '" letter-spacing="1.5">EXPO SQUARE · TULSA</text>',
      sky("kbt2", "#4a90d8", "#f4dcb0"));
  }

  /* 3. The Marfa Lights, out west: the viewing area at night, the Chinati Mountains, the mystery lights drifting on the horizon */
  function kbtmarfa() {
    return svg(
      '<rect width="400" height="260" fill="url(#kbt3)"/>' +
      stars([[20, 20], [60, 44], [100, 16], [150, 36], [200, 12], [240, 40], [290, 22], [330, 48], [370, 18], [390, 60], [130, 64], [260, 70]]) +
      '<path d="M0 150l40 -24l30 14l50 -36l40 26l36 -18l44 28l40 -22l50 30l30 -14l40 16v40h-400z" fill="#2a2440"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3a2e2a"/>' +
      '<g class="kbt-orb"><circle cx="90" cy="150" r="4" fill="#fff4c0"/><circle cx="90" cy="150" r="10" fill="#fff4c0" opacity=".25"/></g>' +
      '<g class="kbt-orb kbt-o2"><circle cx="190" cy="146" r="3.5" fill="#ffd0a0"/><circle cx="190" cy="146" r="9" fill="#ffd0a0" opacity=".25"/></g>' +
      '<g class="kbt-orb kbt-o3"><circle cx="270" cy="152" r="4" fill="#c8e8ff"/><circle cx="270" cy="152" r="10" fill="#c8e8ff" opacity=".25"/></g>' +
      /* viewing platform */
      '<path d="M120 214h160l-10 -22h-140z" fill="#8a7a6a"/><rect x="126" y="186" width="148" height="8" fill="#a8988a"/>' +
      [140, 180, 220, 260].map(x => '<rect x="' + x + '" y="194" width="4" height="20" fill="#6a5a4a"/>').join("") +
      '<path d="M0 230h400" stroke="#4a3e38" stroke-width="2"/>' +
      '<rect x="146" y="232" width="108" height="16" rx="2" fill="#140e18" opacity=".9"/><text x="200" y="243.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + TURQ + '" letter-spacing="1.5">MARFA LIGHTS VIEWING</text>',
      sky("kbt3", "#0c0a24", "#3a2a50"));
  }

  /* 4. The Center of the Universe, downtown Tulsa: the brick circle on the old railroad bridge where your voice echoes back, skyline behind */
  function kbtcenter() {
    let bricks = "";
    for (let r = 0; r < 4; r++) for (let i = 0; i < 18; i++) bricks += '<rect x="' + (i * 24 - (r % 2) * 12) + '" y="' + (186 + r * 9) + '" width="22" height="7" fill="' + ["#a8503a", "#9a4632", "#b45a40"][(i + r) % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kbt4)"/>' +
      '<g class="kbt-cl"><ellipse cx="80" cy="30" rx="36" ry="7" fill="#fff" opacity=".5"/></g>' +
      skyline(170, .9, "#5a6a8a") +
      '<rect x="0" y="170" width="400" height="14" fill="#6a6a72"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => '<rect x="' + (i * 40) + '" y="166" width="3" height="18" fill="#3a3a42"/>').join("") +
      '<path d="M0 166h400" stroke="#3a3a42" stroke-width="3"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#8a3e2a"/>' + bricks +
      /* the circle */
      '<ellipse cx="200" cy="232" rx="70" ry="16" fill="#c8a080" stroke="#6a3a2a" stroke-width="3"/><ellipse cx="200" cy="232" rx="14" ry="4" fill="#e8d0b0" stroke="#6a3a2a" stroke-width="2"/>' +
      '<ellipse cx="200" cy="226" rx="20" ry="8" fill="none" stroke="' + TURQ + '" stroke-width="2" class="kbt-ring"/>' +
      '<ellipse cx="200" cy="226" rx="20" ry="8" fill="none" stroke="' + PINK + '" stroke-width="2" class="kbt-ring kbt-r2"/>' +
      '<rect x="128" y="150" width="144" height="16" rx="2" fill="#140e18" opacity=".85"/><text x="200" y="161.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '" letter-spacing="1.5">CENTER OF THE UNIVERSE</text>',
      sky("kbt4", "#f0a070", "#f8dcc0"));
  }

  /* 5. Her corner: S Mingo Rd and E 61st St by Union High, a pink-and-turquoise wall with her name tagged, the Tulsa skyline behind */
  function kbtcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kbt5)"/>' +
      stars([[30, 20], [120, 30], [210, 14], [280, 32], [380, 12]]) +
      skyline(146, .75, "#3a3050") +
      '<circle cx="187" cy="22" r="2" fill="#ff5a4a" class="kbt-glow"/>' +
      '<rect x="0" y="146" width="400" height="76" fill="#3a8a8e"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (146 + r * 7.6) + 'h400" stroke="#2a6a6e" stroke-width=".8" opacity=".6"/>').join("") +
      '<rect x="0" y="142" width="400" height="6" fill="#1e4a4e"/>' +
      tag("KAITLIN BUTTS", 10, 192, 28, PINK, -5) + tag("COSMIC COWGIRL", 196, 210, 14, GOLD, -4) + tag("KB", 236, 186, 22, CREAM, -4) +
      '<g class="kbt-sp"><circle cx="230" cy="180" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="kbt-sp kbt-sp2"><circle cx="236" cy="174" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#3e3e42"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="60" width="5" height="162" fill="#8a9096"/>' +
      sign(290, 62, 104, "S Mingo Rd") + sign(298, 88, 96, "E 61st St") +
      '<g class="kbt-walk"><circle cx="0" cy="226" r="4" fill="#6a3a22"/><rect x="-4" y="230" width="8" height="15" rx="3" fill="' + PINK + '"/><rect x="-3" y="245" width="2.5" height="10" fill="#2a2a3a"/><rect x="1" y="245" width="2.5" height="10" fill="#2a2a3a"/><path d="M-7 224h14l-3 -5h-8z" fill="#f4ead8"/></g>',
      sky("kbt5", "#1a1438", "#6a3a5a"));
  }

  window.SCENES = { kbtstation: kbtstation, kbtdriller: kbtdriller, kbtmarfa: kbtmarfa, kbtcenter: kbtcenter, kbtcorner: kbtcorner };
})();
