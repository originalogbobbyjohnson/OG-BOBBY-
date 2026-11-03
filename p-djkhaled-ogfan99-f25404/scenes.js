/* DJ Khaled producer game: Miami. Metrorail, the radio booth, the jet ski on Biscayne Bay, Ocean Drive, Liberty City. Each scene 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3s ease-in-out infinite}.sway2{animation-delay:-1.5s}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.blink{animation:blink 1.2s steps(1) infinite}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:center;animation:spin 1.8s linear infinite}' +
    '@keyframes ride{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}' +
    '.ride{animation:ride 7s linear infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bounce 1s ease-in-out infinite}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}' +
    '.neon{animation:neon 3.2s infinite}' +
    '@keyframes wave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.wv{animation:wave 2.4s linear infinite}' +
    '@keyframes eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}' +
    '.eq{transform-box:fill-box;transform-origin:50% 100%;animation:eq .7s ease-in-out infinite}.eq2{animation-delay:-.2s}.eq3{animation-delay:-.45s}.eq4{animation-delay:-.1s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.tw{animation:tw 2s ease-in-out infinite}.tw2{animation-delay:-.7s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw' + (i % 2 ? " tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  /* a palm tree: trunk base x,y, height h */
  const palm = (x, y, h, cls) => {
    let fr = "";
    [-60, -25, 10, 40, 75, 115, 150].forEach(a => fr += '<path d="M0 0q16 -10 34 4" transform="rotate(' + a + ')" stroke="#1d6b3c" stroke-width="6" fill="none" stroke-linecap="round"/>');
    return '<path d="M' + x + ' ' + y + 'q-6 ' + (-h / 2) + ' 4 ' + (-h) + '" stroke="#6b4a2b" stroke-width="6" fill="none"/>' +
      '<g class="sway ' + (cls || "") + '"><g transform="translate(' + (x + 4) + ' ' + (y - h) + ')">' + fr + '<circle r="4" fill="#4a3a1a"/></g></g>';
  };
  const winGrid = (x0, y0, w, h, c1, c2) => { let s = ""; for (let y = y0 + 6; y < y0 + h - 6; y += 10) for (let x = x0 + 4; x < x0 + w - 5; x += 8) s += '<rect x="' + x + '" y="' + y + '" width="4" height="5" fill="' + ((x * 5 + y * 3) % 7 ? c1 : c2) + '"/>'; return s; };
  const GOLD = "#f5c542", TEAL = "#19c3b1", PINK = "#ff5fa2";

  /* 1. Metrorail Green/Orange Line rolling into Dr. Martin Luther King Jr. Plaza, up on the elevated guideway */
  function train() {
    let cols = "";
    for (let x = 30; x < 400; x += 90) cols += '<rect x="' + x + '" y="186" width="16" height="74" fill="#cfc8b8"/><rect x="' + (x - 6) + '" y="180" width="28" height="8" fill="#bdb5a3"/>';
    let wins = "";
    for (let x = 22; x < 300; x += 40) wins += '<rect x="' + x + '" y="120" width="26" height="20" rx="3" fill="#bfe6ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k1)"/>' + stars(10) +
      '<circle cx="330" cy="70" r="26" fill="#ffb36b" opacity=".85"/>' +
      '<g class="cld"><ellipse cx="0" cy="44" rx="50" ry="7" fill="#ffd6e8" opacity=".35"/></g>' +
      '<g class="cld cld2"><ellipse cx="0" cy="26" rx="36" ry="5" fill="#ffd6e8" opacity=".3"/></g>' +
      palm(18, 186, 90) + palm(378, 186, 80, "sway2") +
      /* canopy */
      '<path d="M0 22h400v10H0z" fill="#e9e4d8"/><path d="M0 32h400" stroke="#a9a293" stroke-width="3"/>' +
      '<rect x="60" y="32" width="6" height="66" fill="#e9e4d8"/><rect x="334" y="32" width="6" height="66" fill="#e9e4d8"/>' +
      /* station sign */
      '<rect x="72" y="42" width="256" height="40" rx="4" fill="#12233d"/><rect x="72" y="42" width="256" height="4" fill="#fff"/>' +
      '<text x="84" y="61" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11.5" fill="#fff">Dr. Martin Luther King Jr. Plaza</text>' +
      '<rect x="84" y="66" width="50" height="12" rx="6" fill="#2e9e48"/><text x="109" y="75.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#fff">GREEN</text>' +
      '<rect x="140" y="66" width="56" height="12" rx="6" fill="#f58220"/><text x="168" y="75.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#fff">ORANGE</text>' +
      '<text x="318" y="76" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="8.5" fill="#cfe3ff">METRORAIL</text>' +
      /* guideway */
      '<rect x="0" y="168" width="400" height="14" fill="#d8d1c0"/><rect x="0" y="166" width="400" height="4" fill="#8f8878"/>' + cols +
      /* train */
      '<g class="anim-train">' +
        '<rect x="6" y="104" width="320" height="62" rx="10" fill="#d9dee5" stroke="#7c8591" stroke-width="2"/>' +
        '<rect x="6" y="146" width="320" height="5" fill="#2e9e48"/><rect x="6" y="151" width="320" height="4" fill="#f58220"/>' +
        wins +
        '<rect x="300" y="112" width="24" height="30" rx="4" fill="#2b3442"/><circle cx="318" cy="156" r="3" fill="#fff6c2"/>' +
        '<g fill="#333"><circle cx="40" cy="166" r="5"/><circle cx="70" cy="166" r="5"/><circle cx="250" cy="166" r="5"/><circle cx="280" cy="166" r="5"/></g>' +
      '</g>' +
      /* street below */
      '<rect x="0" y="232" width="400" height="28" fill="#2a2433"/>' +
      '<g class="car"><rect x="0" y="236" width="44" height="14" rx="5" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>',
      sky("k1", "#2a1b4d", "#ff7e8a"));
  }

  /* 2. The radio booth: where Khaled came up spinning on Miami radio. ON AIR light, two decks, mic, the bay out the window */
  function radio() {
    let eq = "";
    for (let i = 0; i < 12; i++) eq += '<rect class="eq eq' + (1 + i % 4) + '" x="' + (148 + i * 9) + '" y="122" width="6" height="34" fill="' + (i % 3 ? TEAL : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1426"/>' +
      /* window to the night bay */
      '<rect x="40" y="28" width="320" height="96" rx="6" fill="url(#k2)" stroke="#3b3150" stroke-width="5"/>' +
      '<g opacity=".9">' + [[60, 70, 20], [84, 54, 18], [106, 76, 16], [126, 48, 22], [152, 66, 18], [250, 58, 20], [274, 44, 16], [294, 70, 22], [320, 60, 16]].map(b =>
        '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (110 - b[1]) + '" fill="#2a2140"/>' + winGrid(b[0], b[1], b[2], 110 - b[1], "#3a2f55", "#ffd98a")).join("") + '</g>' +
      '<rect x="44" y="108" width="312" height="14" fill="#14375a"/><g class="wv"><path d="M44 112q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#5fd0ff" stroke-width="1.2" fill="none" opacity=".6"/></g>' +
      '<path d="M200 28v96" stroke="#3b3150" stroke-width="5"/>' +
      /* ON AIR light */
      '<rect x="160" y="4" width="80" height="20" rx="4" fill="#2b0a0a" stroke="#555" stroke-width="2"/>' +
      '<g class="blink"><rect x="163" y="7" width="74" height="14" rx="3" fill="#ff2d2d"/><text x="200" y="18.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">ON AIR</text></g>' +
      /* desk + decks */
      '<rect x="0" y="160" width="400" height="100" fill="#2b2238"/><rect x="0" y="156" width="400" height="8" fill="#4a3b5f"/>' +
      '<rect x="20" y="168" width="120" height="70" rx="6" fill="#222" stroke="#555" stroke-width="2"/>' +
      '<g class="spin"><circle cx="80" cy="203" r="30" fill="#111"/><circle cx="80" cy="203" r="22" fill="none" stroke="#333"/><circle cx="80" cy="203" r="9" fill="' + GOLD + '"/><rect x="78" y="175" width="4" height="10" fill="#fff" opacity=".5"/></g>' +
      '<rect x="260" y="168" width="120" height="70" rx="6" fill="#222" stroke="#555" stroke-width="2"/>' +
      '<g class="spin"><circle cx="320" cy="203" r="30" fill="#111"/><circle cx="320" cy="203" r="22" fill="none" stroke="#333"/><circle cx="320" cy="203" r="9" fill="' + PINK + '"/><rect x="318" y="175" width="4" height="10" fill="#fff" opacity=".5"/></g>' +
      /* mixer */
      '<rect x="146" y="172" width="108" height="66" rx="5" fill="#333" stroke="#666"/>' +
      '<g fill="#aaa"><rect x="160" y="196" width="4" height="34"/><rect x="186" y="196" width="4" height="34"/><rect x="212" y="196" width="4" height="34"/><rect x="236" y="196" width="4" height="34"/></g>' +
      '<g fill="' + GOLD + '"><rect x="156" y="206" width="12" height="6" rx="1"/><rect x="182" y="216" width="12" height="6" rx="1"/><rect x="208" y="202" width="12" height="6" rx="1"/><rect x="232" y="212" width="12" height="6" rx="1"/></g>' +
      '<rect x="180" y="226" width="40" height="6" fill="#111"/><rect x="192" y="224" width="10" height="10" rx="1" fill="#eee"/>' +
      eq +
      /* mic arm */
      '<path d="M372 156l-40-50l-30 10" stroke="#888" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<rect x="286" y="104" width="22" height="34" rx="10" fill="#444" stroke="#999" stroke-width="2" transform="rotate(-20 297 121)"/>' +
      tag("ANOTHER ONE", 30, 150, 15, GOLD, -4),
      sky("k2", "#120c2a", "#3a2a6a"));
  }

  /* 3. Jet ski on Biscayne Bay at sunset, the downtown towers behind, the key floating overhead */
  function jetski() {
    const towers = [[0, 92, 30], [30, 70, 26], [58, 84, 22], [84, 52, 30], [116, 76, 24], [142, 60, 28], [250, 66, 26], [278, 46, 30], [310, 72, 24], [336, 58, 28], [366, 80, 34]];
    return svg(
      '<rect width="400" height="260" fill="url(#k3)"/>' +
      '<circle cx="200" cy="138" r="34" fill="#ffcf6a"/>' +
      '<g class="cld"><ellipse cx="0" cy="50" rx="56" ry="8" fill="#ffd0e0" opacity=".45"/></g>' +
      '<g class="cld cld2"><ellipse cx="0" cy="30" rx="40" ry="6" fill="#ffd0e0" opacity=".35"/></g>' +
      towers.map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (150 - t[1]) + '" fill="#3a2a5a"/>' + winGrid(t[0], t[1], t[2], 150 - t[1], "#4b3a70", "#ffd98a")).join("") +
      /* water */
      '<rect x="0" y="148" width="400" height="112" fill="#127a9a"/>' +
      '<rect x="160" y="150" width="80" height="4" fill="#ffcf6a" opacity=".6"/><rect x="174" y="160" width="52" height="3" fill="#ffcf6a" opacity=".45"/><rect x="186" y="170" width="28" height="3" fill="#ffcf6a" opacity=".35"/>' +
      '<g class="wv"><path d="M0 190q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#7fe3f5" stroke-width="2" fill="none" opacity=".6"/>' +
      '<path d="M0 222q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#7fe3f5" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* jet ski with wake */
      '<g class="ride"><g class="bob">' +
        '<path d="M-60 214q30 6 60 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>' +
        '<path d="M0 206h70q14 0 18 -8l-22 -6h-30l-10 -10h-14l-8 10z" fill="#f7f7f7" stroke="#222" stroke-width="2"/>' +
        '<path d="M6 206h80" stroke="' + TEAL + '" stroke-width="4"/>' +
        '<path d="M40 186l10 -14h8" stroke="#222" stroke-width="3" fill="none"/>' +
        '<rect x="20" y="178" width="22" height="8" rx="3" fill="#222"/>' +
      '</g></g>' +
      /* the key in the sky */
      '<g class="bob"><g transform="translate(300 34) rotate(-20)"><circle r="12" fill="none" stroke="' + GOLD + '" stroke-width="6"/><rect x="10" y="-3" width="40" height="6" fill="' + GOLD + '"/><rect x="38" y="3" width="5" height="9" fill="' + GOLD + '"/><rect x="46" y="3" width="4" height="7" fill="' + GOLD + '"/></g></g>' +
      tag("MAJOR KEY", 24, 246, 20, GOLD, -5),
      sky("k3", "#5a2f8a", "#ff8a6a"));
  }

  /* 4. Ocean Drive, South Beach: pastel art deco hotels, neon trim, palms, a car cruising */
  function oceandrive() {
    const hotel = (x, w, h, c, trim, word) =>
      '<rect x="' + x + '" y="' + (196 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      '<rect x="' + (x + w / 2 - 8) + '" y="' + (196 - h - 22) + '" width="16" height="22" fill="' + c + '"/>' +
      '<g class="neon"><rect x="' + (x + 4) + '" y="' + (196 - h + 10) + '" width="' + (w - 8) + '" height="3" fill="' + trim + '"/><rect x="' + (x + 4) + '" y="' + (196 - h + 46) + '" width="' + (w - 8) + '" height="3" fill="' + trim + '"/>' +
      '<rect x="' + (x + w / 2 - 3) + '" y="' + (196 - h - 18) + '" width="6" height="' + (h + 4) + '" fill="' + trim + '" opacity=".85"/></g>' +
      '<text x="' + (x + w / 2) + '" y="' + (196 - h + 32) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="' + trim + '" class="neon" letter-spacing="1">' + word + '</text>' +
      '<g fill="#2d3a55" opacity=".55">' + [0, 1, 2].map(i => '<rect x="' + (x + 8) + '" y="' + (196 - h + 56 + i * 22) + '" width="' + (w / 2 - 14) + '" height="12"/><rect x="' + (x + w / 2 + 6) + '" y="' + (196 - h + 56 + i * 22) + '" width="' + (w / 2 - 14) + '" height="12"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#k4)"/>' + stars(12) +
      hotel(10, 110, 130, "#ffd1dc", "#ff3fa4", "BEST") + hotel(140, 120, 150, "#c8f3ea", "#19c3b1", "MAJOR") + hotel(280, 110, 124, "#fff2b8", "#ffb000", "KEYS") +
      palm(128, 200, 100) + palm(270, 200, 90, "sway2") + palm(392, 200, 96) +
      /* sidewalk + street */
      '<rect x="0" y="196" width="400" height="14" fill="#e8dcc8"/><rect x="0" y="210" width="400" height="50" fill="#2a2433"/>' +
      '<path d="M0 236h400" stroke="#f5d76e" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="car"><path d="M0 230h70v-10l-12-10h-36l-14 10h-8z" fill="' + PINK + '" stroke="#111" stroke-width="1.5"/><rect x="26" y="212" width="26" height="8" fill="#bfe6ff"/><circle cx="16" cy="232" r="6" fill="#111"/><circle cx="56" cy="232" r="6" fill="#111"/></g>',
      sky("k4", "#1b1440", "#7a3a8a"));
  }

  /* 5. Liberty City corner: green street signs at NW 62 St & NW 7 Av, wall tagged KHALED, Freedom Tower behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#k5)"/>' + stars(14) +
      /* Freedom Tower: cream Mediterranean tower, terracotta roof, cupola */
      '<g transform="translate(272 18)">' +
        '<rect x="0" y="90" width="96" height="90" fill="#efe1c4"/><rect x="26" y="34" width="44" height="60" fill="#efe1c4"/>' +
        '<rect x="32" y="16" width="32" height="20" fill="#efe1c4"/><path d="M28 16l20-16 20 16z" fill="#c2643a"/>' +
        '<circle cx="48" cy="-2" r="4" fill="' + GOLD + '"/>' +
        '<path d="M0 90l10-8h76l10 8z" fill="#c2643a"/>' +
        '<g fill="#8a6a4a">' + [0, 1, 2, 3].map(i => '<rect x="' + (32 + (i % 2) * 22) + '" y="' + (42 + Math.floor(i / 2) * 22) + '" width="10" height="14" rx="5"/>').join("") +
        [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (8 + i * 14) + '" y="104" width="8" height="12" rx="4"/>').join("") + '</g>' +
        '<rect x="38" y="22" width="20" height="10" fill="#ffd98a" class="tw"/>' +
      '</g>' +
      palm(250, 200, 70) +
      /* wall */
      '<rect x="0" y="120" width="250" height="100" fill="#f2a65a"/><rect x="0" y="120" width="250" height="6" fill="#d98a3a"/>' +
      '<rect x="0" y="126" width="250" height="94" fill="url(#k5w)" opacity=".25"/>' +
      tag("KHALED", 22, 178, 40, GOLD, -6) + tag("WE THE BEST", 60, 208, 18, TEAL, -3) +
      /* sidewalk + street */
      '<rect x="0" y="218" width="400" height="12" fill="#cfc6b6"/><rect x="0" y="230" width="400" height="30" fill="#2a2433"/>' +
      '<g class="car"><rect x="0" y="236" width="48" height="14" rx="5" fill="#f7f7f7"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="38" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="268" y="96" width="5" height="124" fill="#5b6b5f"/>' +
      sign(226, 96, 90, "NW 62 ST") + sign(236, 116, 70, "NW 7 AV"),
      sky("k5", "#20123d", "#ff6f7f") + '<pattern id="k5w" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 10h20M10 0v10" stroke="#8a4a1a" stroke-width="1"/></pattern>');
  }

  window.SCENES = { train, radio, jetski, oceandrive, corner };
})();
