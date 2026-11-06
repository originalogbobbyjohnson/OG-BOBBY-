/* gurusolo scenes (Regions tab: Boston + New England; Guru's Jazzmatazz solo game, Roxbury-born). CSS classes prefixed gs- (the page's own anim-train is kept).
   1 Charles/MGH on the Red Line: the glass station up on the approach to the Longfellow Bridge, its granite "salt and pepper" towers, the red-striped train sliding in. Beacon Hill, where he went to the Advent School, is right there.
   2 Wally's Cafe on Massachusetts Ave in the South End, Boston's old jazz room since 1947: narrow brick front, red awning, a sax player in the window, notes floating out.
   3 Beacon Hill flat by Brimmer St: brick row houses with black shutters, gas lamps flickering, cobblestones.
   4 Cohasset (he finished high school there): the harbor, sailboats rocking, Minot's Ledge Light offshore blinking.
   5 Shirley St and Clifton St, Roxbury: green signs, GURU tagged on the brick, the yellow Georgian Shirley-Eustis House (white pilasters, hip roof, cupola) behind. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes gsflk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.gs-flk{animation:gsflk 2.2s infinite}.gs-flk2{animation-delay:-1s}' +
    '@keyframes gsnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.gs-note{animation:gsnote 3.2s linear infinite}.gs-note2{animation-delay:-1.1s}.gs-note3{animation-delay:-2.2s}' +
    '@keyframes gsrock{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.gs-boat{transform-box:fill-box;transform-origin:50% 100%;animation:gsrock 3s ease-in-out infinite}.gs-boat2{animation-delay:-1.5s}' +
    '@keyframes gsbeam{0%,30%,100%{opacity:.05}10%{opacity:.9}}.gs-beam{animation:gsbeam 3s linear infinite}' +
    '@keyframes gsshim{0%,100%{opacity:.2}50%{opacity:.75}}.gs-shim{animation:gsshim 2.4s ease-in-out infinite}.gs-shim2{animation-delay:-1.2s}' +
    '@keyframes gsdrift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.gs-gull{animation:gsdrift 12s linear infinite}.gs-gull2{animation-delay:-6s}' +
    '@keyframes gssway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.gs-sax{transform-box:fill-box;transform-origin:50% 100%;animation:gssway 1.8s ease-in-out infinite}' +
    '@keyframes gscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.gs-car{animation:gscar 9s linear infinite}' +
    '@keyframes gssp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-20px);opacity:0}}.gs-sp{animation:gssp 1.6s ease-out infinite}.gs-sp2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c, x0, x1) => { x0 = x0 || 0; x1 = x1 || 400; let b = ""; for (let y = y0; y < y1; y += 13) for (let x = x0 + (((y - y0) / 13) % 2 ? -18 : 0); x < x1; x += 36) b += '<rect x="' + Math.max(x, x0) + '" y="' + y + '" width="' + Math.min(34, x1 - Math.max(x, x0)) + '" height="11" fill="' + c + '"/>'; return b; };
  const water = (y, c) => { let r = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c + '"/>'; for (let i = 0; i < 12; i++) r += '<path class="gs-shim ' + (i % 2 ? "gs-shim2" : "") + '" d="M' + ((i * 61) % 380) + ' ' + (y + 8 + (i * 17) % (250 - y)) + 'h' + (14 + i % 3 * 6) + '" stroke="#cfe6ff" stroke-width="1.4"/>'; return r; };
  const signs = (x, a, b) =>
    '<rect x="' + (x + 52) + '" y="62" width="5" height="148" fill="#4a5058"/>' +
    '<rect x="' + x + '" y="58" width="108" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 54) + '" y="73" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + a + '</text>' +
    '<rect x="' + x + '" y="82" width="108" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 54) + '" y="97" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + b + '</text>';
  const line = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 6.4 + 14) + '" height="14" rx="7" fill="' + color + '"/><text x="' + (x + (label.length * 6.4 + 14) / 2) + '" y="' + (y + 10.4) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">' + label + '</text>';
  const tcar = (x, y, w, stripe, dest) => {
    let win = ""; for (let i = x + 16; i < x + w - 30; i += 40) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="56" rx="7" fill="#d6dade" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="7" fill="' + stripe + '"/>' + win +
      '<rect x="' + (x + w - 24) + '" y="' + (y + 6) + '" width="18" height="24" rx="3" fill="#cfe6ff" opacity=".85"/>' +
      '<rect x="' + (x + w - 20 - dest.length * 4.2) + '" y="' + (y + 44) + '" width="' + (dest.length * 4.2 + 8) + '" height="8" rx="2" fill="#1d1d1d"/><text x="' + (x + w - 16 - dest.length * 2.1) + '" y="' + (y + 50.5) + '" text-anchor="middle" ' + F + ' font-size="6" font-weight="700" fill="#ffcf4a">' + dest + '</text>' +
      '<circle cx="' + (x + w - 6) + '" cy="' + (y + 44) + '" r="3" fill="#fff6c2"/>';
  };
  const BRASS = "#f2b134", TEAL = "#2ec4b6", ROSE = "#e85d75", RED = "#da291c";
  /* the Longfellow Bridge "salt and pepper shaker" granite towers */
  const shaker = (x, base, s) => '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')"><rect x="-12" y="-46" width="24" height="46" fill="#b9b2a4"/><rect x="-14" y="-50" width="28" height="6" fill="#a39b8a"/><path d="M-12 -50q12-22 24 0z" fill="#a39b8a"/><rect x="-1.5" y="-76" width="3" height="10" fill="#a39b8a"/><circle cx="0" cy="-77" r="2.5" fill="#a39b8a"/><rect x="-5" y="-38" width="10" height="16" rx="5" fill="#6d665a"/></g>';

  /* 1. Charles/MGH, Red Line, by the Longfellow Bridge */
  function gsstation() {
    let mull = "";
    for (let x = 20; x < 400; x += 30) mull += '<path d="M' + x + ' 20v108" stroke="#8fa3b5" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs1)"/>' + stars(14) +
      /* river + bridge arches through the glass */
      water(110, "#1d3a55") +
      '<path d="M0 104h400" stroke="#9a9384" stroke-width="6"/>' +
      '<path d="M0 110q50 26 100 0q50 26 100 0q50 26 100 0q50 26 100 0" fill="none" stroke="#9a9384" stroke-width="5"/>' +
      shaker(56, 102, 1) + shaker(344, 102, 1) +
      /* glass box station */
      '<rect x="0" y="16" width="400" height="6" fill="#5d6d7c"/>' + mull +
      '<rect x="0" y="16" width="400" height="112" fill="#a8d0f0" opacity=".12"/>' +
      '<rect x="112" y="30" width="176" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="56" text-anchor="middle" ' + F + ' font-weight="700" font-size="20" fill="#fff">Charles/MGH</text>' +
      line(174, 74, RED, "RED LINE") +
      '<g class="anim-train">' + tcar(6, 128, 300, RED, "ALEWIFE") + '</g>' +
      '<rect x="0" y="184" width="400" height="6" fill="#e8c547"/><rect x="0" y="190" width="400" height="70" fill="#8d8b85"/>' +
      '<path d="M0 222h400" stroke="#77756f" stroke-width="2"/>' +
      tag("GURU", 300, 250, 32, BRASS, -8) + tag("7 GRAND", 16, 252, 20, TEAL, -3),
      sky("gs1", "#0b1420", "#2a3e58"));
  }

  /* 2. Wally's Cafe jazz club, Massachusetts Ave, South End */
  function gswallys() {
    let bulbs = "";
    for (let x = 116; x <= 284; x += 12) bulbs += '<circle class="gs-flk ' + (x % 24 ? "gs-flk2" : "") + '" cx="' + x + '" cy="84" r="2.2" fill="#ffe7a8"/>';
    let awn = "";
    for (let x = 100; x < 300; x += 20) awn += '<path d="M' + x + ' 104h20v18q-10 8-20 0z" fill="' + ((x / 20) % 2 ? "#b8202a" : "#e6e1d4") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#120c12"/>' +
      bricks(0, 210, "#5a2a22", 0, 96) + bricks(0, 210, "#4a2620", 304, 400) +
      '<rect x="96" y="0" width="208" height="210" fill="#6a3426"/>' + bricks(0, 86, "#7a3a2a", 96, 304) +
      '<rect x="116" y="16" width="44" height="50" fill="#ffd98a" opacity=".45" class="gs-flk"/><rect x="240" y="16" width="44" height="50" fill="#2a3540"/>' +
      '<rect x="108" y="78" width="184" height="28" rx="2" fill="#111" stroke="' + BRASS + '" stroke-width="1.5"/>' + bulbs +
      '<text x="200" y="101" text-anchor="middle" ' + A + ' font-size="11" fill="' + BRASS + '">WALLY\'S CAFE · JAZZ</text>' + awn +
      /* window with a sax player silhouette */
      '<rect x="116" y="130" width="120" height="72" fill="#3a1a14"/><rect x="120" y="134" width="112" height="64" fill="#e8a040" opacity=".35" class="gs-flk"/>' +
      '<g class="gs-sax"><circle cx="160" cy="152" r="7" fill="#1a0f0c"/><rect x="152" y="160" width="16" height="36" rx="6" fill="#1a0f0c"/>' +
      '<path d="M170 154q8 6 6 22q-2 10 6 12" stroke="' + BRASS + '" stroke-width="4" fill="none"/><path d="M180 188q6 2 8-4" stroke="' + BRASS + '" stroke-width="6" fill="none"/></g>' +
      '<rect x="248" y="130" width="34" height="80" fill="#2a1a14"/><circle cx="276" cy="172" r="2" fill="' + BRASS + '"/>' +
      '<text class="gs-note" x="214" y="150" font-size="16" fill="' + BRASS + '">&#9834;</text><text class="gs-note gs-note2" x="196" y="140" font-size="18" fill="' + TEAL + '">&#9835;</text><text class="gs-note gs-note3" x="226" y="160" font-size="14" fill="' + ROSE + '">&#9834;</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a40"/><rect x="0" y="208" width="400" height="4" fill="#77756f"/>' +
      '<rect x="308" y="150" width="88" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="352" y="162.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="8.5" fill="#fff">Massachusetts Ave</text>' +
      '<text x="200" y="244" text-anchor="middle" ' + A + ' font-size="13" fill="' + BRASS + '">SOUTH END · BOSTON\'S JAZZ ROOM</text>',
      "");
  }

  /* 3. Beacon Hill: brick row houses, black shutters, gas lamps, cobblestones */
  function gsbeacon() {
    let houses = "";
    [[0, "#9b4a34"], [100, "#8a3e2c"], [200, "#a2523a"], [300, "#934430"]].forEach((h, k) => {
      const x = h[0];
      houses += '<rect x="' + x + '" y="40" width="100" height="150" fill="' + h[1] + '"/><rect x="' + x + '" y="36" width="100" height="6" fill="#3a2a22"/>';
      for (let f = 0; f < 3; f++) for (let c = 0; c < 2; c++) {
        const wx = x + 18 + c * 42, wy = 54 + f * 40;
        houses += '<rect x="' + (wx - 7) + '" y="' + wy + '" width="5" height="24" fill="#111"/><rect x="' + (wx + 20) + '" y="' + wy + '" width="5" height="24" fill="#111"/>' +
          '<rect x="' + wx + '" y="' + wy + '" width="18" height="24" fill="' + ((f + c + k) % 3 ? "#2a3540" : "#ffd98a") + '" stroke="#efe8d8" stroke-width="1.5"/>';
      }
      houses += '<rect x="' + (x + 40) + '" y="160" width="20" height="30" fill="#1d1d1d"/><path d="M' + (x + 40) + ' 160q10-10 20 0" fill="#efe8d8"/>';
    });
    let cobble = "";
    for (let y = 200; y < 260; y += 9) for (let x = (y % 18 ? -6 : 0); x < 400; x += 14) cobble += '<rect x="' + x + '" y="' + y + '" width="12" height="7" rx="3" fill="#6d665e"/>';
    const lamp = x => '<rect x="' + (x - 2) + '" y="130" width="4" height="70" fill="#1d1d1d"/><path d="M' + (x - 9) + ' 116h18l-3 16h-12z" fill="#1d1d1d"/><rect x="' + (x - 6) + '" y="119" width="12" height="11" fill="#ffd27a" class="gs-flk"/><path d="M' + (x - 10) + ' 116l10-8 10 8z" fill="#1d1d1d"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs3)"/>' + houses +
      '<rect x="0" y="190" width="400" height="10" fill="#8d8b85"/><rect x="0" y="200" width="400" height="60" fill="#55504a"/>' + cobble +
      lamp(96) + lamp(304) +
      '<rect x="134" y="10" width="132" height="22" rx="3" fill="#111" opacity=".75"/>' +
      '<text x="200" y="26" text-anchor="middle" ' + A + ' font-size="12" fill="' + BRASS + '">BEACON HILL · BRIMMER ST</text>',
      sky("gs3", "#2a3550", "#6a6a8a"));
  }

  /* 4. Cohasset harbor and Minot's Ledge Light */
  function gscohasset() {
    const boat = (x, y, cls) => '<g class="gs-boat ' + cls + '"><path d="M' + x + ' ' + y + 'h44l-6 10h-32z" fill="#f4f1e8" stroke="#3a3f46" stroke-width="1.2"/><path d="M' + (x + 22) + ' ' + (y - 46) + 'v46" stroke="#3a3f46" stroke-width="1.5"/><path d="M' + (x + 23) + ' ' + (y - 44) + 'l18 40h-18z" fill="#fff"/><path d="M' + (x + 21) + ' ' + (y - 36) + 'l-14 32h14z" fill="' + ROSE + '" opacity=".85"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs4)"/>' +
      '<circle cx="330" cy="58" r="24" fill="#ffd27a" opacity=".85"/>' +
      '<path d="M0 132q60-14 120-6t120-4q80-8 160 4v14H0z" fill="#3f6b3a"/>' +
      water(140, "#2c5d7c") +
      /* Minot's Ledge Light: granite cone tower on the ledge, light flashing */
      '<path d="M58 140l6-62h16l6 62z" fill="#b9b2a4"/><rect x="60" y="72" width="24" height="8" fill="#7a7468"/><rect x="64" y="60" width="16" height="12" fill="#3a3f46"/><path d="M62 60l10-8 10 8z" fill="#3a3f46"/>' +
      '<rect x="66" y="62" width="12" height="8" fill="#fff6c2" class="gs-beam"/>' +
      '<path class="gs-beam" d="M72 66L0 40v52z" fill="#fff6c2" opacity=".4"/><path class="gs-beam" d="M72 66L200 34v60z" fill="#fff6c2" opacity=".4"/>' +
      '<path d="M48 142q24-8 48 0z" fill="#4a4a50"/>' +
      boat(170, 176, "") + boat(270, 196, "gs-boat2") +
      '<path class="gs-gull" d="M0 100q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/><path class="gs-gull gs-gull2" d="M0 84q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="1.6" fill="none"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + A + ' font-size="14" fill="#fff">COHASSET · MINOT\'S LEDGE LIGHT</text>',
      sky("gs4", "#e88a5a", "#f6d6a8"));
  }

  /* 5. Shirley St and Clifton St, Roxbury: the Shirley-Eustis House behind */
  function gscorner() {
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="84" fill="url(#gs5)"/>' + stars(10) +
      /* white clapboard church with the tall steeple */
      '<circle cx="60" cy="72" r="22" fill="#24331f"/><circle cx="300" cy="70" r="24" fill="#24331f"/>' +
      /* Shirley-Eustis House: yellow clapboard Georgian, white corner pilasters, hip roof, cupola */
      '<rect x="100" y="42" width="160" height="42" fill="#e9c74a"/><path d="M100 50h160M100 58h160M100 66h160M100 74h160" stroke="#c9a632" stroke-width=".8"/>' +
      '<rect x="100" y="42" width="6" height="42" fill="#f6f2e6"/><rect x="254" y="42" width="6" height="42" fill="#f6f2e6"/><rect x="170" y="42" width="20" height="42" fill="#f6f2e6"/>' +
      '<path d="M94 44l20-18h132l20 18z" fill="#4a4f58"/><rect x="96" y="40" width="168" height="4" fill="#f6f2e6"/>' +
      '<rect x="170" y="12" width="20" height="16" fill="#f6f2e6"/><path d="M166 14l14-10 14 10z" fill="#4a4f58"/><rect x="175" y="16" width="10" height="9" fill="#ffd98a" class="gs-flk"/>' +
      '<rect x="116" y="50" width="12" height="14" fill="#2a3540" stroke="#fff" stroke-width="1"/><rect x="146" y="50" width="12" height="14" fill="#ffd98a" stroke="#fff" stroke-width="1"/><rect x="202" y="50" width="12" height="14" fill="#2a3540" stroke="#fff" stroke-width="1"/><rect x="232" y="50" width="12" height="14" fill="#2a3540" stroke="#fff" stroke-width="1"/>' +
      '<rect x="174" y="66" width="12" height="18" fill="#3a2a20"/><path d="M172 66q8-8 16 0" stroke="#fff" stroke-width="1.5" fill="none"/>' +
      '<rect x="0" y="80" width="400" height="4" fill="#2a1a14"/>' +
      bricks(84, 210, "#5a2e22") +
      tag("GURU", 24, 156, 52, BRASS, -5) + tag("STREETSOUL", 40, 196, 22, TEAL, -3) + tag("LOUNGIN'", 26, 112, 20, ROSE, -7) +
      '<circle class="gs-sp" cx="232" cy="130" r="3" fill="' + BRASS + '"/><circle class="gs-sp gs-sp2" cx="240" cy="138" r="2" fill="' + BRASS + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="gs-car"><rect x="0" y="232" width="50" height="16" rx="5" fill="#2e6fa8"/><circle cx="12" cy="249" r="4" fill="#111"/><circle cx="38" cy="249" r="4" fill="#111"/></g>' +
      signs(282, "Shirley St", "Clifton St") +
      '<circle class="gs-flk" cx="384" cy="34" r="5" fill="#ffe7a8"/>',
      sky("gs5", "#0b1622", "#2a3650"));
  }

  window.SCENES = { gsstation: gsstation, gswallys: gswallys, gsbeacon: gsbeacon, gscohasset: gscohasset, gscorner: gscorner };
})();
