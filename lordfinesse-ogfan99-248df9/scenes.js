/* Morrisania opening scenes for the Lord Finesse game: the Funky Technician, D.I.T.C. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:center;animation:spin 1.8s linear infinite}' +
    '@keyframes flip{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-14deg)}}' +
    '.flip{transform-box:fill-box;transform-origin:bottom center;animation:flip 2.4s ease-in-out infinite}.flip2{animation-delay:-.8s}.flip3{animation-delay:-1.6s}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}' +
    '.glow{animation:glow 2.6s ease-in-out infinite}' +
    '@keyframes dust{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-70px);opacity:0}}' +
    '.dust{animation:dust 4s linear infinite}.dust2{animation-delay:-1.3s}.dust3{animation-delay:-2.6s}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0deg);opacity:0}10%{opacity:1}100%{transform:translate(30px,240px) rotate(300deg);opacity:0}}' +
    '.leaf{animation:fall 7s linear infinite}.leaf2{animation-delay:-2.3s}.leaf3{animation-delay:-4.6s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
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
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  /* a vinyl record, label colour c */
  const vinyl = (cx, cy, r, c, cls) =>
    '<g' + (cls ? ' class="' + cls + '"' : "") + '><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .78) + '" fill="none" stroke="#2c2c2c" stroke-width="1"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .58) + '" fill="none" stroke="#2c2c2c" stroke-width="1"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .34) + '" fill="' + c + '"/><rect x="' + (cx - r * .2) + '" y="' + (cy - r * .2) + '" width="' + (r * .14) + '" height="' + (r * .08) + '" fill="#fff" opacity=".7"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .06) + '" fill="#e8e0cc"/></g>';
  const ORANGE = "#ff8a5b", GOLD = "#f2c14e", TEAL = "#4fb3a9", CREAM = "#f3e6c8";

  /* 1. The 2 / 5 pulling into Intervale Av, up on the el over Westchester Av: wooden platform, canopy, the steel el structure */
  function train() {
    let girders = "";
    for (let x = 0; x < 400; x += 50) girders += '<rect x="' + (x + 20) + '" y="196" width="10" height="64" fill="#3d4a3f"/><path d="M' + (x + 20) + ' 200l-18 22M' + (x + 30) + ' 200l18 22" stroke="#3d4a3f" stroke-width="4"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="118" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    let bldg = "";
    [[0, 70, 60, "#5b3226"], [60, 90, 50, "#6e3b2b"], [300, 60, 54, "#4e2c22"], [354, 84, 46, "#6a3a2c"]].forEach(b => {
      bldg += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="' + b[3] + '"/>';
      for (let y = b[1] + 8; y < 100; y += 14) for (let x = b[0] + 6; x < b[0] + b[2] - 8; x += 14) bldg += '<rect x="' + x + '" y="' + y + '" width="7" height="8" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(16) + bldg +
      '<g class="cld"><ellipse cx="0" cy="34" rx="40" ry="7" fill="#fff" opacity=".25"/></g>' +
      /* canopy */
      '<path d="M0 22h400v10H0z" fill="#3d4a3f"/><path d="M0 32h400" stroke="#24302a" stroke-width="3"/>' +
      '<rect x="40" y="32" width="6" height="68" fill="#3d4a3f"/><rect x="354" y="32" width="6" height="68" fill="#3d4a3f"/>' +
      '<g class="flk"><rect x="150" y="34" width="100" height="4" rx="2" fill="#fff7d6"/></g>' +
      /* station sign */
      '<rect x="88" y="44" width="224" height="34" rx="4" fill="#111"/><rect x="88" y="44" width="224" height="4" fill="#fff"/>' +
      '<text x="100" y="69" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Intervale Av</text>' +
      bullet(262, 62, "2", "#ee352e") + bullet(290, 62, "5", "#00933c") +
      /* train */
      '<rect x="0" y="100" width="400" height="6" fill="#4a3a2a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="106" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="148" width="300" height="5" fill="#ee352e"/>' + windows +
        '<circle cx="300" cy="160" r="4" fill="#fff6c2"/>' + bullet(296, 126, "2", "#ee352e") +
      '</g>' +
      /* platform edge + the el */
      '<rect x="0" y="170" width="400" height="8" fill="#eab308"/><rect x="0" y="178" width="400" height="18" fill="#5a4a3a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#15171a"/>' + girders +
      '<path d="M0 252h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("D.I.T.C.", 30, 238, 30, ORANGE, -5) + tag("FUNKY MAN", 214, 242, 26, GOLD, -7),
      sky("g1", "#120a1e", "#5a2f2a"));
  }

  /* 2. The Forest Houses off Tinton Av: tall red-brick NYCHA towers, benches and a boombox cypher on the walk */
  function forest() {
    let towers = "";
    [[20, 40, 90], [150, 20, 100], [290, 46, 90]].forEach(t => {
      towers += '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (200 - t[1]) + '" fill="#8a4a32"/>' +
        '<rect x="' + (t[0] - 3) + '" y="' + (t[1] - 6) + '" width="' + (t[2] + 6) + '" height="8" fill="#5e3022"/>';
      for (let y = t[1] + 10; y < 190; y += 14) for (let x = t[0] + 8; x < t[0] + t[2] - 8; x += 16)
        towers += '<rect' + ((x * 7 + y) % 11 === 0 ? ' class="flk flk2"' : "") + ' x="' + x + '" y="' + y + '" width="9" height="9" fill="' + ((x * 3 + y) % 5 === 0 ? "#ffd98a" : "#2a1d17") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(22) +
      '<circle cx="356" cy="30" r="13" fill="#fff4d6" opacity=".9"/>' + towers +
      /* trees + fence */
      '<circle cx="128" cy="186" r="20" fill="#3e6b3a"/><circle cx="270" cy="190" r="18" fill="#3e6b3a"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3c40"/>' +
      (function () { let f = ""; for (let x = 0; x < 400; x += 10) f += '<path d="M' + x + ' 200v-12" stroke="#1a1c20" stroke-width="2"/>'; return f; })() +
      '<path d="M0 190h400" stroke="#1a1c20" stroke-width="2"/>' +
      /* bench + boombox */
      '<rect x="150" y="218" width="100" height="6" fill="#2f6b3f"/><rect x="156" y="224" width="4" height="14" fill="#1a1c20"/><rect x="240" y="224" width="4" height="14" fill="#1a1c20"/>' +
      '<rect x="176" y="200" width="48" height="20" rx="3" fill="#222"/><rect x="190" y="196" width="20" height="4" fill="#555"/>' +
      '<circle cx="186" cy="210" r="7" fill="#444"/><circle cx="214" cy="210" r="7" fill="#444"/><circle cx="186" cy="210" r="3" fill="' + ORANGE + '"/><circle cx="214" cy="210" r="3" fill="' + ORANGE + '"/>' +
      '<text class="note" x="160" y="200" font-size="16" fill="' + GOLD + '">♪</text><text class="note note2" x="232" y="200" font-size="16" fill="' + TEAL + '">♫</text><text class="note note3" x="200" y="190" font-size="14" fill="#fff">♪</text>' +
      sign(8, 8, 110, "Tinton Av") + tag("FOREST", 290, 238, 26, ORANGE, -5),
      sky("g2", "#0c0a22", "#3a2a5a"));
  }

  /* 3. Diggin' in the Crates: a record-store basement, wooden crates of vinyl, records flipping, a bulb swinging, dust in the light */
  function crates() {
    let shelf = "";
    for (let x = 6; x < 400; x += 9) shelf += '<rect x="' + x + '" y="' + (42 + (x % 5)) + '" width="6" height="' + (50 - (x % 5)) + '" fill="' + ["#c9a24a", "#7a2a2a", "#2d4a6a", "#e8e0cc", "#4a6a3a", "#111"][x % 6] + '"/>';
    const crate = (x, y, w, recs) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="44" fill="#a8743e" stroke="#5a3a1a" stroke-width="2"/>' +
        '<path d="M' + x + ' ' + (y + 14) + 'h' + w + 'M' + x + ' ' + (y + 30) + 'h' + w + '" stroke="#7a5228" stroke-width="2"/>';
      recs.forEach((r, i) => {
        s += '<g class="flip' + (i === 1 ? " flip2" : i === 2 ? " flip3" : "") + '"><rect x="' + (x + 6 + i * ((w - 12) / recs.length)) + '" y="' + (y - 36) + '" width="' + ((w - 12) / recs.length - 3) + '" height="40" fill="' + r + '" stroke="#111" stroke-width="1"/></g>';
      });
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="#1d130c"/>' +
      '<rect x="0" y="0" width="400" height="100" fill="#2a1c12"/>' +
      '<rect x="0" y="36" width="400" height="58" fill="#3a2716"/>' + shelf +
      '<rect x="0" y="92" width="400" height="6" fill="#5a3a1a"/>' +
      /* light bulb + cone */
      '<path d="M200 0v26" stroke="#111" stroke-width="2"/><path class="glow" d="M200 30L110 240h180z" fill="#ffe7a8" opacity=".12"/>' +
      '<circle class="glow" cx="200" cy="32" r="7" fill="#ffe7a8"/>' +
      '<circle class="dust" cx="180" cy="180" r="1.6" fill="#ffe7a8"/><circle class="dust dust2" cx="214" cy="200" r="1.4" fill="#ffe7a8"/><circle class="dust dust3" cx="198" cy="160" r="1.2" fill="#ffe7a8"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#120c08"/>' +
      crate(20, 170, 110, ["#d24a2a", "#2d4a6a", GOLD, "#e8e0cc"]) +
      crate(146, 176, 108, ["#111", ORANGE, TEAL]) +
      crate(270, 170, 110, ["#7a2a2a", "#e8e0cc", "#4a6a3a", GOLD]) +
      vinyl(352, 30, 22, ORANGE, "spin") +
      tag("DIGGIN IN THE CRATES", 18, 130, 30, GOLD, -4),
      "");
  }

  /* 4. The Clay Avenue rowhouses by E 165th: Romanesque Revival brownstone and brick, round arches, gables and turrets, autumn leaves */
  function clay() {
    const house = (x, c, trim, gable) => {
      let s = '<rect x="' + x + '" y="80" width="64" height="140" fill="' + c + '"/>' +
        (gable ? '<path d="M' + (x - 2) + ' 82l34 -34 34 34z" fill="' + c + '" stroke="' + trim + '" stroke-width="3"/>' :
          '<rect x="' + (x + 20) + '" y="52" width="24" height="30" fill="' + c + '"/><path d="M' + (x + 18) + ' 54l14 -18 14 18z" fill="#4a3a3a"/>') +
        '<rect x="' + (x - 2) + '" y="78" width="68" height="5" fill="' + trim + '"/>';
      [100, 140].forEach(y => { s += '<path d="M' + (x + 10) + ' ' + (y + 24) + 'v-14a9 9 0 0 1 18 0v14z" fill="#2a1d17" stroke="' + trim + '" stroke-width="2"/><path d="M' + (x + 36) + ' ' + (y + 24) + 'v-14a9 9 0 0 1 18 0v14z" fill="' + (y === 100 && x % 3 ? "#ffd98a" : "#2a1d17") + '" stroke="' + trim + '" stroke-width="2"/>'; });
      s += '<path d="M' + (x + 20) + ' 220v-28a12 12 0 0 1 24 0v28z" fill="#3a2010" stroke="' + trim + '" stroke-width="2.5"/>' +
        '<path d="M' + (x + 14) + ' 222h36l6 10h-48z" fill="' + trim + '"/>';
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="60" cy="40" r="20" fill="#ffb15c" opacity=".85"/>' +
      '<g class="cld"><ellipse cx="0" cy="30" rx="44" ry="8" fill="#fff" opacity=".3"/></g>' +
      house(4, "#7a4a34", "#d8c7a6", true) + house(70, "#9a5b3a", "#e8dcc0", false) + house(136, "#6e4a3a", "#d8c7a6", true) +
      house(202, "#8a4f36", "#e8dcc0", false) + house(268, "#7a4a34", "#d8c7a6", true) + house(334, "#9a5b3a", "#e8dcc0", false) +
      '<rect x="0" y="232" width="400" height="28" fill="#5a5650"/><rect x="0" y="230" width="400" height="4" fill="#8a847a"/>' +
      '<path class="leaf" d="M60 0q6 -6 12 0q-6 6 -12 0z" fill="#e0792a"/><path class="leaf leaf2" d="M200 0q6 -6 12 0q-6 6 -12 0z" fill="' + GOLD + '"/><path class="leaf leaf3" d="M320 0q6 -6 12 0q-6 6 -12 0z" fill="#c4401c"/>' +
      sign(282, 8, 110, "Clay Av"),
      sky("g4", "#2a1a3a", "#e0a06a"));
  }

  /* 5. Tinton Av and E 163 St at the Forest Houses: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="276" y="24" width="116" height="196" fill="#8a4a32"/>' +
      (function () { let w = ""; for (let y = 34; y < 210; y += 16) for (let x = 286; x < 380; x += 20) w += '<rect x="' + x + '" y="' + y + '" width="10" height="8" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="14" y="70" width="236" height="150" fill="#2e2a2a"/>' +
      vinyl(46, 96, 16, ORANGE, "spin") +
      tag("FINESSE", 26, 150, 46, ORANGE, -7) + tag("RAP LORD", 34, 196, 28, GOLD, -3) +
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M280 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      sign(222, 88, 88, "Tinton Av") + sign(226, 110, 80, "E 163 St") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#160c08", "#3a2418"));
  }

  window.SCENES = { train, forest, crates, clay, corner };
})();
