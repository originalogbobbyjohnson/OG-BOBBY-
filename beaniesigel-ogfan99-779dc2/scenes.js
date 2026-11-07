/* beaniesigel scenes (Regions tab: Philadelphia; South Philly). CSS classes prefixed bs- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bs-flk{animation:bsflick 2.4s infinite}.bs-flk2{animation-delay:.8s}' +
    '@keyframes bssteam{0%{transform:translateY(0) scale(1);opacity:.7}100%{transform:translateY(-40px) scale(1.6);opacity:0}}.bs-st{transform-box:fill-box;transform-origin:50% 100%;animation:bssteam 2.4s ease-out infinite}.bs-st2{animation-delay:-.8s}.bs-st3{animation-delay:-1.6s}' +
    '@keyframes bsheat{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.bs-heat{animation:bsheat 1.2s ease-in-out infinite}.bs-heat2{animation-delay:-.6s}' +
    '@keyframes bsglow{0%,100%{opacity:.55}50%{opacity:1}}.bs-glow{animation:bsglow 2.2s ease-in-out infinite}' +
    '@keyframes bsstrut{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-6px) rotate(3deg)}}.bs-strut{transform-box:fill-box;transform-origin:50% 100%;animation:bsstrut .8s ease-in-out infinite}.bs-strut2{animation-delay:-.4s}' +
    '@keyframes bsspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bs-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bsspin 2.6s linear infinite}' +
    '@keyframes bsconf{0%{transform:translateY(-20px);opacity:0}10%{opacity:1}100%{transform:translateY(200px) rotate(200deg);opacity:.3}}.bs-cf{transform-box:fill-box;animation:bsconf 4.5s linear infinite}.bs-cf2{animation-delay:-1.5s}.bs-cf3{animation-delay:-3s}' +
    '@keyframes bsclap{0%,60%,100%{transform:rotate(-24deg)}70%,90%{transform:rotate(0deg)}}.bs-clap{transform-box:fill-box;transform-origin:0% 100%;animation:bsclap 2s ease-in-out infinite}' +
    '@keyframes bsrec{0%,49%{opacity:1}50%,100%{opacity:.15}}.bs-rec{animation:bsrec 1s steps(1) infinite}' +
    '@keyframes bsboom{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.bs-boom{transform-box:fill-box;transform-origin:100% 50%;animation:bsboom 3s ease-in-out infinite}' +
    '@keyframes bsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bs-sp{animation:bsspray 1.4s ease-out infinite}.bs-sp2{animation-delay:.45s}' +
    '@keyframes bsbeam{0%,100%{opacity:.25}50%{opacity:.6}}.bs-beam{animation:bsbeam 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bs-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff8a2a", GOLD = "#e8b84a", RED = "#e23b3b", BSL = "#f58220";
  /* a rowhouse front: brick, white marble steps, cornice, windows */
  const rowhouse = (x, y, w, h, brick, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + brick + '"/><rect x="' + (x - 2) + '" y="' + (y - 6) + '" width="' + (w + 4) + '" height="7" fill="#3a2a22"/>' +
    [0, 1].map(r => [0, 1].map(c => '<rect x="' + (x + 8 + c * (w / 2)) + '" y="' + (y + 10 + r * (h * 0.38)) + '" width="' + (w / 2 - 16) + '" height="' + (h * 0.24) + '" fill="' + (lit && (r + c) % 2 ? "#ffd98a" : "#2a3442") + '"/>').join("")).join("") +
    '<rect x="' + (x + w / 2 - 6) + '" y="' + (y + h - 6) + '" width="' + 22 + '" height="3" fill="#eeeae2"/><rect x="' + (x + w / 2 - 8) + '" y="' + (y + h - 3) + '" width="' + 26 + '" height="3" fill="#e2ded6"/>';

  /* 1. Tasker-Morris on the Broad Street Line, under South Broad: blue-gray wall tile, the orange band, the black sign with the BSL bullet, the orange-striped train sliding in */
  function bsstation() {
    const tr = '<g class="anim-train"><rect x="22" y="104" width="330" height="76" rx="8" fill="#cfd3d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (36 + i * 52) + '" y="116" width="34" height="26" rx="3" fill="#1d262e"/><rect x="' + (72 + i * 52) + '" y="116" width="10" height="56" rx="1" fill="#9aa1a8"/>').join("") +
      '<rect x="22" y="150" width="330" height="6" fill="' + BSL + '"/><rect x="22" y="160" width="330" height="2" fill="' + BSL + '"/>' +
      '<rect x="332" y="108" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="344" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#b8c6d0"/>' + Array.from({ length: 50 }, (_, i) => '<path d="M' + (i * 8) + ' 16v68" stroke="#a6b5c0" stroke-width="1"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (22 + i * 8) + 'h400" stroke="#a6b5c0" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/>' + [60, 180, 300].map(x => '<rect class="bs-flk' + (x === 180 ? " bs-flk2" : "") + '" x="' + x + '" y="6" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="84" width="400" height="10" fill="' + BSL + '"/><rect x="0" y="94" width="400" height="96" fill="#26262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8a8680"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (18 + i * 34) + '" cy="226" r="1.6" fill="#77736d"/>').join("") +
      [40, 200, 360].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#45505c"/><rect x="' + (x - 9) + '" y="16" width="18" height="6" fill="#323b45"/>').join("") +
      '<rect x="64" y="32" width="212" height="32" rx="3" fill="#111"/><text x="76" y="54" ' + font + ' font-size="16" fill="#fff">Tasker-Morris</text>' + badge(206, 48, "BSL", BSL) +
      '<rect x="292" y="36" width="64" height="24" rx="2" fill="#111"/><text x="324" y="52" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTH</text>',
      "");
  }

  /* 2. "Remember Them Days": the South Philly rowhouse kitchen on a winter night, no gas, the oven door open heating the house, the hot plate cooking dinner, an extension cord running out the window to the neighbor's house for light */
  function bskitchen() {
    return svg(
      '<rect width="400" height="260" fill="#3b2c22"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' 0v170" stroke="#34261d" stroke-width="2"/>').join("") +
      /* window with the neighbor's house across the alley */
      '<rect x="216" y="22" width="150" height="104" fill="#0f1730"/>' + stars(6).replace(/cx="(\d+)"/g, (m, v) => 'cx="' + (220 + (+v % 140)) + '"').replace(/cy="(\d+)"/g, (m, v) => 'cy="' + (26 + (+v % 22)) + '"') +
      '<rect x="238" y="54" width="110" height="72" fill="#7a3b2a"/><rect x="236" y="50" width="114" height="6" fill="#3a2a22"/>' +
      '<rect class="bs-glow" x="252" y="66" width="30" height="24" fill="#ffd98a"/><rect x="304" y="66" width="30" height="24" fill="#2a3442"/><rect x="252" y="100" width="30" height="20" fill="#2a3442"/>' +
      '<rect x="212" y="18" width="158" height="8" fill="#e8dcc4"/><rect x="212" y="122" width="158" height="8" fill="#e8dcc4"/><rect x="212" y="18" width="6" height="112" fill="#e8dcc4"/><rect x="364" y="18" width="6" height="112" fill="#e8dcc4"/><rect x="288" y="18" width="5" height="112" fill="#e8dcc4"/>' +
      /* the extension cord: from the neighbor's lit window, across, in through the sill, down to a bare bulb */
      '<path d="M266 84Q250 110 232 126Q200 150 150 60" stroke="#f2f2ea" stroke-width="3" fill="none"/><path d="M150 60v10" stroke="#f2f2ea" stroke-width="3"/>' +
      '<circle class="bs-glow" cx="150" cy="82" r="18" fill="#ffe9a6" opacity=".25"/><path d="M144 70h12v6h-12z" fill="#8a8a80"/><circle cx="150" cy="82" r="8" fill="#fff6c8"/>' +
      /* counter, hot plate, pot with steam */
      '<rect x="0" y="170" width="400" height="90" fill="#5a4636"/><rect x="0" y="164" width="200" height="10" fill="#c9b79a"/><rect x="0" y="174" width="200" height="86" fill="#7a5b40"/>' +
      [30, 110].map(x => '<rect x="' + x + '" y="186" width="60" height="64" rx="2" fill="#6b4e36" stroke="#4e3826" stroke-width="2"/><circle cx="' + (x + 50) + '" cy="214" r="3" fill="#c9a24a"/>').join("") +
      '<rect x="58" y="150" width="66" height="14" rx="3" fill="#2c2c2e"/><path d="M70 150h42" stroke="#ff5a1f" stroke-width="3"/><circle cx="66" cy="158" r="2" fill="' + RED + '" class="bs-flk"/>' +
      '<path d="M70 150v-22h42v22z" fill="#9aa1a8" stroke="#5b6168" stroke-width="2"/><rect x="66" y="124" width="50" height="6" rx="2" fill="#7b828a"/><path d="M58 134h8M116 134h8" stroke="#5b6168" stroke-width="4" stroke-linecap="round"/>' +
      '<g class="bs-st"><path d="M80 118q-6 -10 0 -18q6 -8 0 -16" stroke="#e8e8e8" stroke-width="4" fill="none" opacity=".7" stroke-linecap="round"/></g>' +
      '<g class="bs-st bs-st2"><path d="M92 118q-6 -10 0 -18q6 -8 0 -16" stroke="#e8e8e8" stroke-width="4" fill="none" opacity=".7" stroke-linecap="round"/></g>' +
      '<g class="bs-st bs-st3"><path d="M104 118q-6 -10 0 -18q6 -8 0 -16" stroke="#e8e8e8" stroke-width="4" fill="none" opacity=".7" stroke-linecap="round"/></g>' +
      /* the stove, oven door open, glowing, heat waves */
      '<rect x="230" y="140" width="130" height="110" rx="4" fill="#e6e1d6" stroke="#9e988c" stroke-width="2"/><rect x="230" y="140" width="130" height="18" fill="#cfc8ba"/>' +
      [248, 270, 320, 342].map(x => '<circle cx="' + x + '" cy="149" r="4" fill="#2c2c2e"/>').join("") +
      '<rect x="244" y="168" width="102" height="58" rx="3" fill="#2a1a12"/><rect class="bs-glow" x="252" y="176" width="86" height="42" fill="#ff7a2a" opacity=".85"/>' +
      '<path d="M232 228l-30 22h184l-30 -22z" fill="#cfc8ba" stroke="#9e988c" stroke-width="2"/><rect x="258" y="236" width="74" height="5" rx="2" fill="#8a8478"/>' +
      '<g class="bs-heat"><path d="M266 168q-6 -10 0 -20q6 -10 0 -20" stroke="#ff9a4a" stroke-width="2.5" fill="none" opacity=".6"/><path d="M324 168q-6 -10 0 -20q6 -10 0 -20" stroke="#ff9a4a" stroke-width="2.5" fill="none" opacity=".6"/></g>' +
      '<g class="bs-heat bs-heat2"><path d="M295 168q-6 -10 0 -20q6 -10 0 -20" stroke="#ffb86a" stroke-width="2.5" fill="none" opacity=".6"/></g>' +
      '<rect x="14" y="14" width="150" height="20" rx="3" fill="#1a120c" opacity=".8"/><text x="89" y="28" text-anchor="middle" ' + font + ' font-size="10" fill="#f2e2c4" letter-spacing="1.5">REMEMBER THEM DAYS</text>',
      "");
  }

  /* 3. New Year's Day on South Broad Street: the Mummers strutting up Broad in sequins and giant feathered backpieces, parasols spinning, confetti falling, the crowd behind the barriers */
  function bsmummers() {
    const mummer = (x, c1, c2, cls) => '<g class="bs-strut ' + cls + '"><g transform="translate(' + x + ' 0)">' +
      Array.from({ length: 9 }, (_, i) => { const a = -80 + i * 20; return '<path d="M0 150L' + (Math.sin(a * Math.PI / 180) * 70).toFixed(1) + ' ' + (150 - Math.cos(a * Math.PI / 180) * 70).toFixed(1) + '" stroke="' + (i % 2 ? c1 : c2) + '" stroke-width="12" stroke-linecap="round"/>'; }).join("") +
      Array.from({ length: 9 }, (_, i) => { const a = -80 + i * 20; return '<circle cx="' + (Math.sin(a * Math.PI / 180) * 72).toFixed(1) + '" cy="' + (150 - Math.cos(a * Math.PI / 180) * 72).toFixed(1) + '" r="5" fill="#fff" opacity=".85"/>'; }).join("") +
      '<path d="M-14 150h28l6 52h-40z" fill="' + c1 + '" stroke="' + GOLD + '" stroke-width="2"/>' + Array.from({ length: 5 }, (_, i) => '<circle cx="' + (-10 + i * 5) + '" cy="' + (162 + (i % 2) * 14) + '" r="1.6" fill="#fff"/>').join("") +
      '<circle cx="0" cy="138" r="9" fill="' + c2 + '" stroke="' + GOLD + '" stroke-width="2"/><path d="M-12 132q12 -20 24 0" fill="' + GOLD + '"/>' +
      '<path d="M-8 202v18M8 202v18" stroke="' + c2 + '" stroke-width="5"/><ellipse cx="-9" cy="222" rx="7" ry="3" fill="' + GOLD + '"/><ellipse cx="9" cy="222" rx="7" ry="3" fill="' + GOLD + '"/>' +
      '<path d="M14 160l18 -14" stroke="' + c1 + '" stroke-width="5" stroke-linecap="round"/><path d="M32 146v-24" stroke="#222" stroke-width="2"/>' +
      '<g class="bs-spin"><path d="M18 122a14 6 0 0 1 28 0z" fill="' + GOLD + '"/><path d="M18 122h28" stroke="' + c2 + '" stroke-width="2"/></g></g></g>';
    const crowd = Array.from({ length: 26 }, (_, i) => '<circle cx="' + (6 + i * 16) + '" cy="' + (96 + (i % 3) * 3) + '" r="6" fill="' + ["#3a3a52", "#5a2a2a", "#2a4a3a", "#4a3a2a"][i % 4] + '"/><rect x="' + (i * 16) + '" y="' + (102 + (i % 3) * 3) + '" width="12" height="14" rx="3" fill="' + ["#c23a3a", "#2a6ab0", "#e8b84a", "#3a8a5a"][i % 4] + '"/>').join("");
    const conf = Array.from({ length: 18 }, (_, i) => '<rect class="bs-cf' + ["", " bs-cf2", " bs-cf3"][i % 3] + '" x="' + (10 + i * 22) + '" y="' + (6 + (i * 37) % 60) + '" width="5" height="3" fill="' + [GOLD, RED, "#2a8ad8", "#fff", "#3ac06a"][i % 5] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bs3)"/>' +
      '<g fill="#8a6a58"><rect x="0" y="34" width="70" height="70"/><rect x="74" y="20" width="52" height="84"/><rect x="290" y="28" width="56" height="76"/><rect x="350" y="40" width="50" height="64"/></g>' +
      '<g fill="#d8cdb8"><rect x="140" y="10" width="40" height="94"/><rect x="220" y="24" width="56" height="80"/></g>' +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + ([6, 26, 46, 82, 104, 146, 162, 228, 252, 296, 322, 358, 378][i % 13]) + '" y="' + (44 + Math.floor(i / 13) * 24) + '" width="10" height="12" fill="#f4e6c2" opacity=".55"/>').join("") +
      crowd + '<rect x="0" y="114" width="400" height="8" fill="#9aa1a8"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 114v14" stroke="#6b7178" stroke-width="2"/>').join("") +
      '<rect x="0" y="122" width="400" height="138" fill="#5d5d63"/><path d="M0 238h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="18 14"/>' +
      mummer(90, "#7a2ab0", GOLD, "") + mummer(210, RED, "#2a8ad8", "bs-strut2") + mummer(330, "#1f9a5a", "#ff8ad0", "") + conf +
      '<rect x="110" y="4" width="180" height="20" rx="3" fill="#111" opacity=".85"/><text x="200" y="18" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="2">S BROAD ST · JAN 1</text>',
      sky("bs3", "#7fb2e0", "#e8eef4"));
  }

  /* 4. Shooting the movie in Philly (he starred as Beans): the camera on its tripod, the clapperboard snapping, the boom mic swaying, the red REC light, lights on a rowhouse block at dusk */
  function bsfilm() {
    return svg(
      '<rect width="400" height="260" fill="url(#bs4)"/>' + stars(8) +
      rowhouse(0, 70, 96, 100, "#8a3e2c", true) + rowhouse(96, 70, 96, 100, "#7a3628", false) + rowhouse(192, 70, 96, 100, "#93452f", true) + rowhouse(288, 70, 112, 100, "#7f3a2a", true) +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4a50"/><rect x="0" y="168" width="400" height="6" fill="#bdb8ae"/>' +
      /* light stand and beam */
      '<path class="bs-beam" d="M58 92L180 230H20z" fill="#fff6c8" opacity=".35"/><path d="M50 250l8 -150l8 150" stroke="#222" stroke-width="3" fill="none"/><rect x="42" y="80" width="32" height="24" rx="3" fill="#2a2a2c" stroke="#555" stroke-width="2"/><rect x="46" y="84" width="24" height="16" fill="#fff6c8" class="bs-glow"/>' +
      /* camera on tripod */
      '<path d="M262 250l26 -78l26 78M288 172v78" stroke="#1a1a1c" stroke-width="4" fill="none"/>' +
      '<rect x="256" y="140" width="70" height="36" rx="4" fill="#26262a" stroke="#4a4a50" stroke-width="2"/><circle cx="270" cy="134" r="12" fill="#2e2e32" stroke="#4a4a50" stroke-width="2"/><circle cx="300" cy="134" r="12" fill="#2e2e32" stroke="#4a4a50" stroke-width="2"/>' +
      '<rect x="230" y="148" width="28" height="20" rx="2" fill="#3a3a40"/><circle cx="226" cy="158" r="9" fill="#5a7a9a" stroke="#1a1a1c" stroke-width="3"/><circle class="bs-rec" cx="318" cy="148" r="3.5" fill="' + RED + '"/>' +
      '<text x="296" y="170" ' + font + ' font-size="7" fill="' + RED + '" class="bs-rec">REC</text>' +
      /* boom mic */
      '<g class="bs-boom"><path d="M376 40L240 70" stroke="#3a3a3e" stroke-width="4"/><rect x="214" y="62" width="30" height="14" rx="6" fill="#8a8a80" transform="rotate(-12 229 69)"/></g>' +
      /* clapperboard */
      '<g transform="translate(120 188)"><rect x="0" y="10" width="74" height="46" rx="2" fill="#1a1a1c" stroke="#fff" stroke-width="1.5"/>' +
      '<g class="bs-clap"><rect x="0" y="0" width="74" height="10" fill="#1a1a1c" stroke="#fff" stroke-width="1.5"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (6 + i * 14) + ' 0l8 10" stroke="#fff" stroke-width="4"/>').join("") + '</g>' +
      '<text x="6" y="26" ' + font + ' font-size="9" fill="#fff">BEANS</text><text x="6" y="38" ' + font + ' font-size="7" fill="#fff">SCENE 12</text><text x="6" y="50" ' + font + ' font-size="7" fill="#fff">TAKE 3</text>' +
      '<path d="M40 18v36M0 30h74M0 42h74" stroke="#fff" stroke-width=".8" opacity=".6"/><text x="46" y="38" ' + font + ' font-size="7" fill="#fff">PHILA</text></g>' +
      /* director's chair */
      '<g transform="translate(330 196)"><rect x="0" y="0" width="40" height="16" fill="' + ORANGE + '"/><rect x="0" y="22" width="40" height="6" fill="' + ORANGE + '"/><path d="M2 28l36 26M38 28l-36 26" stroke="#5a3a1a" stroke-width="3"/><path d="M0 0v54M40 0v54" stroke="#5a3a1a" stroke-width="3"/></g>',
      sky("bs4", "#1a1840", "#e07a4a"));
  }

  /* 5. S 20th St and Sigel St, South Philly (the street he took his name from): green signs, BEANIE tagged on the rowhouse wall, the twin blue-glass spires of One and Two Liberty Place glowing behind */
  function bscorner() {
    const spire = (x, w, h, c) => '<rect x="' + x + '" y="' + (128 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      '<path d="M' + (x + 2) + ' ' + (128 - h) + 'l' + (w / 2 - 2) + ' -16l' + (w / 2 - 2) + ' 16z" fill="' + c + '"/><path d="M' + (x + w * 0.2) + ' ' + (122 - h) + 'l' + (w * 0.3) + ' -22l' + (w * 0.3) + ' 22z" fill="' + c + '"/>' +
      '<path d="M' + (x + w / 2) + ' ' + (108 - h) + 'v-26" stroke="' + c + '" stroke-width="2"/>' +
      Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M' + (x + 3) + ' ' + (128 - h + 6 + i * 8) + 'h' + (w - 6) + '" stroke="#b8d4ec" stroke-width="1" opacity=".5"/>').join("") +
      '<path class="bs-glow" d="M' + (x + w / 2 - 2) + ' ' + (126 - h) + 'h4v' + h + 'h-4z" fill="#e8f4ff" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs5)"/>' + stars(14) +
      spire(150, 34, 100, "#4a6a8e") + spire(206, 30, 82, "#3e5c7e") +
      '<g fill="#2b2a3e"><rect x="0" y="80" width="70" height="56"/><rect x="80" y="96" width="50" height="40"/><rect x="260" y="88" width="60" height="48"/><rect x="330" y="70" width="70" height="66"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#8a3e2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#7a3426" stroke-width="1"/>').join("") +
      Array.from({ length: 25 }, (_, i) => '<path d="M' + (i * 16 + (i % 2) * 8) + ' 132v92" stroke="#7a3426" stroke-width=".6" opacity=".5"/>').join("") +
      tag("BEANIE", 22, 190, 52, ORANGE, -6) + tag("B.MACK", 214, 182, 28, GOLD, -4) + tag("THE TRUTH", 30, 216, 18, "#fff", -3) + tag("BROAD ST", 168, 214, 18, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 86, "S 20th St") + sign(296, 124, 86, "Sigel St") +
      '<g class="bs-sp"><circle cx="196" cy="166" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="bs-sp bs-sp2"><circle cx="202" cy="160" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("bs5", "#141236", "#c8604a"));
  }

  window.SCENES = { bsstation: bsstation, bskitchen: bskitchen, bsmummers: bsmummers, bsfilm: bsfilm, bscorner: bscorner };
})();
