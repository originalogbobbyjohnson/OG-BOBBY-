/* cypresshill scenes (Regions tab: Los Angeles + SoCal; South Gate). CSS classes prefixed chl- (the page's own anim-train is kept).
   1 Long Beach Blvd station, Metro C Line: the platform down in the median of the 105 Glenn Anderson Freeway at the South Gate/Lynwood line, the Long Beach Blvd overpass above, a silver C Line train sliding in.
   2 South Gate Park: the big city park in their hometown, palms, the ball field, the lawn, a frisbee flying.
   3 Royal Albert Hall, London (2024): they played Black Sunday with a full orchestra there. Red brick drum, the terracotta frieze band, the glass and iron dome, searchlights.
   4 Woodstock '94, Saugerties NY: rain, the mud field, the giant stage towers, the crowd bouncing.
   5 Tweedy Blvd and California Ave, South Gate: green signs, CYPRESS HILL tagged, the 105/710 interchange ramps behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes chlflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.chl-flk{animation:chlflick 2.6s infinite}' +
    '@keyframes chlcar{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.chl-car{animation:chlcar 5s linear infinite}.chl-car2{animation-delay:-2.5s}' +
    '@keyframes chlcarL{from{transform:translateX(500px)}to{transform:translateX(-100px)}}.chl-carL{animation:chlcarL 6s linear infinite}.chl-carL2{animation-delay:-3s}' +
    '@keyframes chlsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.chl-sway{transform-box:fill-box;transform-origin:50% 100%;animation:chlsway 3.4s ease-in-out infinite}' +
    '@keyframes chlfris{0%{transform:translate(0,0)}50%{transform:translate(120px,-30px)}100%{transform:translate(240px,0)}}.chl-fris{animation:chlfris 3.2s ease-in-out infinite alternate}' +
    '@keyframes chlbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.chl-beam{transform-box:fill-box;transform-origin:50% 100%;animation:chlbeam 4s ease-in-out infinite}.chl-beam2{animation-delay:-2s}' +
    '@keyframes chlnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-50px);opacity:0}}.chl-note{animation:chlnote 3s ease-out infinite}.chl-n2{animation-delay:-1s}.chl-n3{animation-delay:-2s}' +
    '@keyframes chlrain{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.chl-rain{animation:chlrain .6s linear infinite}.chl-rain2{animation-delay:-.3s}' +
    '@keyframes chlbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.chl-bob{animation:chlbob .5s ease-in-out infinite}.chl-bob2{animation-delay:-.25s}' +
    '@keyframes chlglow{0%,100%{opacity:.35}50%{opacity:1}}.chl-glow{animation:chlglow 1.8s ease-in-out infinite}.chl-g2{animation-delay:-.9s}' +
    '@keyframes chlspray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.chl-spray{transform-box:fill-box;transform-origin:50% 100%;animation:chlspray 1s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="chl-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const CLINE = "#58a738", GOLD = "#f2c14e", GREEN = "#3fae49", RED = "#d7263d";

  /* 1. Long Beach Blvd station, Metro C Line, in the 105 median */
  function chlstation() {
    let win = ""; for (let x = 44; x < 300; x += 32) win += '<rect x="' + x + '" y="126" width="24" height="20" rx="3" fill="#1f2a36"/>';
    const train = '<g class="anim-train"><path d="M18 118h300q20 0 24 18v38H18z" fill="#d6dadf" stroke="#7d848c" stroke-width="2"/>' + win +
      '<rect x="18" y="152" width="324" height="7" fill="' + CLINE + '"/><rect x="178" y="118" width="5" height="56" fill="#5a6068"/>' +
      '<path d="M318 124h12q6 2 8 14h-20z" fill="#1f2a36"/><circle cx="334" cy="166" r="4" fill="#fff6c2"/>' + bullet(290, 136, "C", CLINE) +
      '<rect x="40" y="174" width="60" height="8" fill="#333"/><rect x="250" y="174" width="60" height="8" fill="#333"/>' +
      '<circle cx="54" cy="182" r="6" fill="#111"/><circle cx="86" cy="182" r="6" fill="#111"/><circle cx="264" cy="182" r="6" fill="#111"/><circle cx="296" cy="182" r="6" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#chls1)"/>' +
      palm(24, 70, 40) + palm(380, 70, 48) +
      /* Long Beach Blvd overpass */
      '<rect x="0" y="58" width="400" height="22" fill="#c4bdae"/><rect x="0" y="54" width="400" height="5" fill="#8b857a"/>' +
      car(20, 30, "#c44", "chl-car") + car(20, 30, "#ececec", "chl-car chl-car2") +
      '<rect x="0" y="80" width="400" height="4" fill="#9a9384"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 7) + '" y="84" width="14" height="30" fill="#b5ad9c"/>').join("") +
      /* freeway lanes on both sides */
      '<rect x="0" y="96" width="400" height="16" fill="#55575d"/>' + car(0, 84, "#2f6fd6", "chl-carL") + car(0, 84, "#e8c23a", "chl-carL chl-carL2") +
      /* canopy */
      '<rect x="0" y="108" width="400" height="6" fill="#4a4e55"/>' + [40, 140, 260, 360].map(x => '<rect x="' + (x - 3) + '" y="112" width="6" height="74" fill="#6b7078"/>').join("") +
      train +
      /* platform */
      '<rect x="0" y="186" width="400" height="74" fill="#9c968a"/><rect x="0" y="186" width="400" height="6" fill="#e8d36b"/>' +
      /* station pylon sign */
      '<rect x="120" y="200" width="200" height="40" rx="4" fill="#111"/><text x="226" y="226" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">LONG BEACH BLVD</text>' + bullet(138, 220, "C", CLINE) +
      '<rect x="20" y="212" width="70" height="28" rx="3" fill="#111"/><text x="55" y="223" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">NORWALK</text><text x="55" y="234" text-anchor="middle" ' + font + ' font-size="8" fill="' + CLINE + '">C LINE</text>' +
      '<circle cx="330" cy="22" r="10" fill="#ffe7a8" class="chl-glow"/>',
      sky("chls1", "#24305c", "#e88b4a"));
  }

  /* 2. South Gate Park */
  function chlpark() {
    let trees = ""; [[40, 132], [96, 126], [320, 128], [372, 134]].forEach(([x, y]) => trees += '<circle cx="' + x + '" cy="' + y + '" r="22" fill="#2f6b39"/><circle cx="' + (x + 14) + '" cy="' + (y + 6) + '" r="16" fill="#3a7d44"/>');
    let fence = ""; for (let x = 150; x <= 290; x += 10) fence += '<path d="M' + x + ' 130v30" stroke="#8d949b" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#chlp1)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffd98a"/>' +
      '<path d="M0 140q100 -20 200 -6t200 -2v128H0z" fill="#6aa84f"/>' + trees +
      palm(140, 140, 70, "#2d6a3a") + palm(300, 140, 80, "#2d6a3a") +
      /* ball field backstop + infield */
      '<path d="M150 130h140v30h-140z" fill="none" stroke="#8d949b" stroke-width="2"/>' + fence +
      '<path d="M220 168l50 26l-50 26l-50 -26z" fill="#c9915a"/><path d="M220 178l30 16l-30 16l-30 -16z" fill="#6aa84f"/>' +
      '<rect x="216" y="190" width="8" height="8" fill="#fff"/><rect x="266" y="190" width="6" height="6" fill="#fff"/><rect x="168" y="190" width="6" height="6" fill="#fff"/>' +
      /* park sign */
      '<rect x="22" y="196" width="120" height="40" rx="4" fill="#7a4e2a" stroke="#4a2e18" stroke-width="2"/><text x="82" y="212" text-anchor="middle" ' + font + ' font-size="11" fill="#fff4d6">SOUTH GATE</text><text x="82" y="228" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">PARK</text>' +
      '<rect x="40" y="236" width="6" height="14" fill="#4a2e18"/><rect x="118" y="236" width="6" height="14" fill="#4a2e18"/>' +
      /* frisbee */
      '<g class="chl-fris"><ellipse cx="90" cy="150" rx="10" ry="4" fill="' + RED + '"/></g>' +
      /* bench */
      '<rect x="300" y="216" width="70" height="6" fill="#7a4e2a"/><rect x="300" y="206" width="70" height="5" fill="#7a4e2a"/><rect x="306" y="222" width="4" height="12" fill="#333"/><rect x="360" y="222" width="4" height="12" fill="#333"/>',
      sky("chlp1", "#7ec8ef", "#d8f0fb"));
  }

  /* 3. Royal Albert Hall */
  function chlalbert() {
    let arches = ""; for (let x = 82; x <= 306; x += 28) arches += '<path d="M' + x + ' 196v-26q8 -10 16 0v26z" fill="#ffd98a" class="chl-glow' + (x % 56 ? "" : " chl-g2") + '"/>';
    let frieze = ""; for (let x = 70; x < 330; x += 12) frieze += '<rect x="' + x + '" y="128" width="8" height="8" fill="' + ((x / 12) % 2 ? "#e6c38c" : "#8a3b26") + '"/>';
    let ribs = ""; for (let x = 120; x <= 280; x += 20) ribs += '<path d="M200 54Q' + x + ' 70 ' + x + ' 104" stroke="#5c6670" stroke-width="1.5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#chla1)"/>' +
      '<g class="chl-beam"><path d="M90 230l-30 -200h20z" fill="#fff6d0" opacity=".18"/></g><g class="chl-beam chl-beam2"><path d="M310 230l30 -200h-20z" fill="#fff6d0" opacity=".18"/></g>' +
      /* dome */
      '<path d="M100 106Q200 30 300 106z" fill="#9fb2bf" stroke="#5c6670" stroke-width="2"/>' + ribs + '<ellipse cx="200" cy="56" rx="16" ry="5" fill="#cfdbe3"/>' +
      /* drum */
      '<path d="M60 106h280v100H60z" fill="#a8452c"/><path d="M60 106h280v8H60z" fill="#e6c38c"/>' +
      '<path d="M60 124h280v18H60z" fill="#c9a272"/>' + frieze +
      '<path d="M60 206h280v6H60z" fill="#e6c38c"/>' + arches +
      /* porch */
      '<path d="M164 150h72v62h-72z" fill="#b5553a"/><path d="M160 150l40 -20l40 20z" fill="#e6c38c"/>' +
      '<path d="M178 212v-30q22 -22 44 0v30z" fill="#ffd98a" class="chl-glow"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#2a2a33"/>' +
      '<rect x="120" y="222" width="160" height="22" rx="3" fill="#111"/><text x="200" y="237" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">BLACK SUNDAY + ORCHESTRA</text>' +
      '<text x="60" y="80" ' + font + ' font-size="22" fill="#ffe7a8" class="chl-note">&#9835;</text><text x="330" y="90" ' + font + ' font-size="20" fill="#ffe7a8" class="chl-note chl-n2">&#9834;</text><text x="200" y="40" ' + font + ' font-size="18" fill="#ffe7a8" class="chl-note chl-n3">&#9835;</text>',
      sky("chla1", "#0d1530", "#3a2f5a"));
  }

  /* 4. Woodstock '94 */
  function chlwoodstock() {
    let rain = ""; for (let i = 0; i < 40; i++) { const x = (i * 37) % 400, y = (i * 53) % 200; rain += '<path d="M' + x + ' ' + y + 'l-3 10" stroke="#cfe3f2" stroke-width="1.2" opacity=".7"/>'; }
    let crowd = ""; for (let x = 6; x < 400; x += 14) { const y = 214 + (x % 3) * 3; crowd += '<g class="chl-bob' + (x % 28 ? "" : " chl-bob2") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="#2b241e"/><rect x="' + (x - 7) + '" y="' + (y + 5) + '" width="14" height="20" rx="4" fill="#2b241e"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#chlw1)"/>' +
      '<path d="M0 120q60 -16 120 -6t140 -4t140 4v40H0z" fill="#4c5a4a"/>' +
      /* stage towers */
      '<path d="M40 40h16v150h-16zM344 40h16v150h-16z" fill="#3a3a40"/>' +
      '<path d="M40 40l160 -14l160 14v10H40z" fill="#26262b"/>' +
      '<rect x="70" y="56" width="260" height="110" fill="#14141a"/>' +
      [90, 140, 200, 260, 310].map((x, i) => '<circle cx="' + x + '" cy="62" r="6" fill="' + ["#ff5a5a", "#ffd34d", "#5fd3f3", "#ffd34d", "#ff5a5a"][i] + '" class="chl-glow' + (i % 2 ? " chl-g2" : "") + '"/>').join("") +
      '<rect x="70" y="150" width="260" height="20" fill="#3a3a40"/>' +
      '<rect x="150" y="96" width="100" height="26" rx="3" fill="#2a3a2a" stroke="' + GREEN + '" stroke-width="2"/><text x="200" y="114" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">AUG 1994</text>' +
      /* mud */
      '<path d="M0 170h400v90H0z" fill="#6b4b2f"/><path d="M0 182q80 8 160 0t240 4" stroke="#8a6440" stroke-width="3" fill="none"/>' +
      crowd +
      '<g class="chl-rain">' + rain + '</g><g class="chl-rain chl-rain2" transform="translate(18 0)">' + rain + '</g>',
      sky("chlw1", "#5e6a72", "#9aa5ab"));
  }

  /* 5. Tweedy Blvd and California Ave, South Gate */
  function chlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#chlc1)"/>' +
      '<circle cx="80" cy="60" r="22" fill="#ffb15a" opacity=".9"/>' +
      /* 105/710 interchange ramps behind */
      '<path d="M0 104q120 -40 240 -18t160 -30v10q-60 36 -160 32t-240 20z" fill="#bdb4a2"/>' +
      '<path d="M0 118h400v10H0z" fill="#a89f8e"/>' + [50, 150, 250, 350].map(x => '<rect x="' + (x - 4) + '" y="128" width="8" height="26" fill="#a89f8e"/>').join("") +
      car(0, 100, "#e8c23a", "chl-car") + car(0, 100, "#2f6fd6", "chl-car chl-car2") +
      palm(30, 160, 80) + palm(372, 160, 92) +
      /* wall */
      '<rect x="40" y="130" width="250" height="100" fill="#d9c7a3"/><rect x="40" y="130" width="250" height="6" fill="#b9a783"/>' +
      tag("CYPRESS HILL", 58, 192, 34, GREEN, -6) + tag("SOUTH GATE", 120, 220, 16, RED, -3) +
      '<path d="M244 214h30l-8 -8M274 214l-8 8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M90 196v14M150 192v10" stroke="' + GREEN + '" stroke-width="3" stroke-linecap="round"/>' +
      /* spray can */
      '<g class="chl-spray"><rect x="300" y="196" width="14" height="30" rx="3" fill="' + GOLD + '"/><rect x="303" y="190" width="8" height="6" fill="#ccc"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="230" width="400" height="30" fill="#5a5a5f"/><rect x="0" y="228" width="400" height="4" fill="#cfcac0"/>' +
      /* signpost */
      '<rect x="330" y="70" width="6" height="160" fill="#7a7f86"/>' +
      sign(286, 72, 94, "TWEEDY BLVD", 11) + sign(292, 98, 82, "CALIFORNIA AV", 10),
      sky("chlc1", "#f29b5a", "#fde2b0"));
  }

  window.SCENES = { chlstation, chlpark, chlalbert, chlwoodstock, chlcorner };
})();
