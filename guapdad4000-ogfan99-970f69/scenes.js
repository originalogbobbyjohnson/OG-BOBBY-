/* Guapdad 4000 (West Oakland — THE BAY AREA region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed gd- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes gdtw{0%,100%{opacity:1}50%{opacity:.25}}.gd-tw{animation:gdtw 1.8s ease-in-out infinite}.gd-tw2{animation-delay:.9s}' +
    '@keyframes gdblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.gd-blk{animation:gdblink 1s steps(1) infinite}.gd-blk2{animation-delay:.5s}' +
    '@keyframes gdflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.4}55%{opacity:.95}}.gd-flk{animation:gdflick 2.4s infinite}.gd-flk2{animation-delay:1.1s}' +
    '@keyframes gdmeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}}.gd-mt{transform-box:fill-box;transform-origin:50% 100%;animation:gdmeter .8s ease-in-out infinite}.gd-mt2{animation-delay:.2s}.gd-mt3{animation-delay:.4s}' +
    '@keyframes gdsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.gd-sway{transform-box:fill-box;transform-origin:50% 100%;animation:gdsway 3s ease-in-out infinite}.gd-sway2{animation-delay:-1.5s}' +
    '@keyframes gdfall{0%{transform:translateY(0);opacity:1}100%{transform:translateY(60px);opacity:0}}.gd-fall{animation:gdfall 3s linear infinite}.gd-fall2{animation-delay:-1.5s}' +
    '@keyframes gdroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.gd-car{animation:gdroll 6s linear infinite}.gd-car2{animation-duration:8.5s;animation-delay:-4s}' +
    '@keyframes gdship{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.gd-ship{animation:gdship 12s ease-in-out infinite}' +
    '@keyframes gdbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-30px)}}.gd-bird{animation:gdbird 9s linear infinite}.gd-bird2{animation-delay:-4.5s}' +
    '@keyframes gdwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.gd-wave{animation:gdwave 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="gd-tw' + (i % 2 ? " gd-tw2" : "") + '" cx="' + ((i * 97 + 31) % 400) + '" cy="' + (6 + (i * 53) % 70) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff" opacity=".8"/>'; return s; };
  const palm = (x, y, h, cls) => '<g class="' + cls + '"><path d="M' + x + ' ' + (y + h) + 'q-4 -' + (h * .5) + ' 4 -' + h + '" stroke="#6a5038" stroke-width="5" fill="none"/>' +
    [[-26, -6], [-18, -18], [0, -24], [18, -18], [26, -6]].map(d => '<path d="M' + (x + 4) + ' ' + y + 'q' + (d[0] * .5) + ' ' + (d[1] - 6) + ' ' + d[0] + ' ' + (d[1] + 14) + '" stroke="#2f6a3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const GOLD = "#f2c230", RED = "#d63a2f", ROYAL = "#2e5bd8", CREAM = "#f4ead2";
  const BART = { RED: "#ed1c24", YELLOW: "#ffe600", GREEN: "#4db848", BLUE: "#00aeef" };

  /* 1. West Oakland BART: the elevated concrete platform over the flats, the silver-and-blue train sliding in, Red / Yellow / Green / Blue line pills on the sign, the cranes and the city across the water at dusk */
  function gdstation() {
    const car = x => '<path d="M' + x + ' 122h160v60H' + x + 'z" fill="#dfe3e8" stroke="#8a929a" stroke-width="1.5"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 38) + '" y="132" width="28" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + x + '" y="160" width="160" height="7" fill="#1f6fb2"/><rect x="' + (x + 70) + '" y="130" width="18" height="50" fill="#cdd3d9" stroke="#8a929a"/>' +
      '<circle cx="' + (x + 26) + '" cy="184" r="5" fill="#222"/><circle cx="' + (x + 134) + '" cy="184" r="5" fill="#222"/>';
    const cab = '<path d="M332 182v-60h34q26 6 30 36v24z" fill="#dfe3e8" stroke="#8a929a" stroke-width="1.5"/><path d="M362 126q22 6 28 26h-28z" fill="#1d3f5e"/>' +
      '<rect x="332" y="160" width="64" height="7" fill="#1f6fb2"/><circle cx="388" cy="172" r="3" fill="#fff6c2" class="gd-flk"/><circle cx="354" cy="184" r="5" fill="#222"/>';
    const crane = (x, s) => '<g fill="#3a3550" opacity=".85"><rect x="' + x + '" y="' + (78 - 20 * s) + '" width="' + (4 * s) + '" height="' + (32 + 20 * s) + '"/><rect x="' + (x + 18 * s) + '" y="' + (78 - 20 * s) + '" width="' + (4 * s) + '" height="' + (32 + 20 * s) + '"/>' +
      '<rect x="' + (x - 20 * s) + '" y="' + (70 - 20 * s) + '" width="' + (64 * s) + '" height="' + (5 * s) + '"/><path d="M' + x + ' ' + (70 - 20 * s) + 'l' + (11 * s) + ' -' + (14 * s) + 'l' + (11 * s) + ' ' + (14 * s) + '" stroke="#3a3550" stroke-width="2" fill="none"/></g>';
    const sign = (label, x, w, c, tc) => '<rect x="' + x + '" y="221" width="' + w + '" height="18" rx="9" fill="' + c + '"/><text x="' + (x + w / 2) + '" y="234" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="' + tc + '">' + label + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#gds1)"/>' + stars(10) +
      /* across the water: the city skyline + the port cranes */
      '<g fill="#2c2840">' + [[230, 70], [246, 56], [262, 74], [276, 44], [292, 64], [306, 52], [320, 70], [336, 60]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="13" height="' + (110 - b[1]) + '"/>').join("") + '<path d="M276 44l6 -16l7 16z"/></g>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (232 + (i * 37) % 110) + '" y="' + (60 + (i * 13) % 40) + '" width="2" height="2" fill="#ffd98a" class="gd-flk' + (i % 2 ? " gd-flk2" : "") + '"/>').join("") +
      crane(40, 1) + crane(110, .8) + crane(170, .9) +
      '<rect x="0" y="104" width="400" height="8" fill="#3a3550"/>' +
      /* the concrete guideway + platform canopy */
      '<rect x="0" y="112" width="400" height="10" fill="#9a958a"/>' +
      '<g class="anim-train">' + car(4) + car(168) + cab + '</g>' +
      '<rect x="0" y="188" width="400" height="10" fill="#c8c2b4"/>' + Array.from({ length: 16 }, (_, i) => '<rect x="' + (8 + i * 26) + '" y="190" width="10" height="3" rx="1.5" fill="#f2f2f2" class="gd-blk' + (i % 2 ? " gd-blk2" : "") + '"/>').join("") +
      '<rect x="0" y="198" width="400" height="62" fill="#8d887c"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="198" width="40" height="62" fill="' + (i % 2 ? "#958f83" : "#878276") + '"/>').join("") +
      '<rect x="0" y="0" width="400" height="14" fill="#5a5650"/><rect x="40" y="14" width="6" height="98" fill="#6a665e"/><rect x="354" y="14" width="6" height="98" fill="#6a665e"/>' +
      '<rect x="24" y="212" width="352" height="38" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="96" y="237" text-anchor="middle" ' + F + ' font-weight="700" font-size="17" fill="#fff">West Oakland</text>' +
      sign("RED", 170, 36, BART.RED, "#fff") + sign("YELLOW", 210, 50, BART.YELLOW, "#111") + sign("GREEN", 264, 46, BART.GREEN, "#fff") + sign("BLUE", 314, 40, BART.BLUE, "#111") +
      '<text x="200" y="30" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff3e0" opacity=".9">BART · 7TH ST · WEST OAKLAND</text>',
      sky("gds1", "#1a1636", "#e0866a"));
  }

  /* 2. The porch on 10th St in West Oakland: his grandparents' one-story house, the calamansi, cherry and apple trees in the yard, a sketchbook of cartoons on the steps */
  function gdporch() {
    const fruit = (cx, cy, c, n, r) => Array.from({ length: n }, (_, i) => '<circle cx="' + (cx + Math.cos(i * 2.1) * r * (0.4 + (i % 3) * .25)) + '" cy="' + (cy + Math.sin(i * 2.1) * r * (0.4 + (i % 3) * .2)) + '" r="2.4" fill="' + c + '"/>').join("");
    const treeT = (x, y, r, leaf, f, cls) => '<g class="' + cls + '"><rect x="' + (x - 3) + '" y="' + (y + r * .6) + '" width="6" height="' + (196 - y - r * .6) + '" fill="#5a4030"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + leaf + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + r * .3) + '" r="' + (r * .6) + '" fill="' + leaf + '"/>' + f + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gds2)"/>' +
      '<g class="gd-bird"><path d="M-20 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="gd-bird gd-bird2"><path d="M-40 26q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* neighbor houses */
      '<path d="M0 120l30 -24l30 24v80H0z" fill="#c9b48a"/><path d="M340 116l30 -26l30 26v84h-60z" fill="#9ab0a8"/>' +
      /* the one-story house with the porch */
      '<rect x="110" y="100" width="190" height="96" fill="#e8d6b0"/><path d="M98 104l107 -50l107 50z" fill="#8a4a3a"/><path d="M98 104l107 -50l107 50" fill="none" stroke="#f4ead2" stroke-width="3"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M110 ' + (108 + i * 10) + 'h190" stroke="#d4c09a" stroke-width="1"/>').join("") +
      '<rect x="130" y="118" width="30" height="36" fill="#2b4a5a" stroke="#f4ead2" stroke-width="3"/><rect x="250" y="118" width="30" height="36" fill="#2b4a5a" stroke="#f4ead2" stroke-width="3"/>' +
      '<rect x="130" y="118" width="30" height="36" fill="#ffd98a" opacity=".25" class="gd-flk"/>' +
      '<rect x="190" y="116" width="30" height="62" fill="#6a3a2a" stroke="#f4ead2" stroke-width="3"/><circle cx="214" cy="148" r="2" fill="' + GOLD + '"/>' +
      /* porch roof + posts + steps */
      '<rect x="164" y="104" width="82" height="8" fill="#f4ead2"/><rect x="168" y="112" width="5" height="66" fill="#f4ead2"/><rect x="237" y="112" width="5" height="66" fill="#f4ead2"/>' +
      '<rect x="160" y="178" width="90" height="6" fill="#bfae8a"/><rect x="170" y="184" width="70" height="6" fill="#a8977a"/><rect x="180" y="190" width="50" height="6" fill="#958566"/>' +
      /* sketchbook with a cartoon on the steps */
      '<g transform="rotate(-8 196 182)"><rect x="186" y="174" width="22" height="14" fill="#fff" stroke="#333"/><circle cx="194" cy="181" r="3" fill="none" stroke="' + RED + '" stroke-width="1.2"/><path d="M199 184l5 -6" stroke="' + ROYAL + '" stroke-width="1.2"/></g>' +
      /* the trees: calamansi, cherry, apple */
      treeT(56, 128, 26, "#3a7a3a", fruit(56, 128, "#f2a73a", 9, 22), "gd-sway") +
      treeT(332, 134, 24, "#4a8a44", fruit(332, 134, "#b0182a", 8, 20), "gd-sway gd-sway2") +
      treeT(380, 150, 18, "#3e7c40", fruit(380, 150, "#d43a2a", 5, 14), "gd-sway") +
      '<g class="gd-fall"><circle cx="70" cy="150" r="2.4" fill="#f2a73a"/></g><g class="gd-fall gd-fall2"><circle cx="340" cy="156" r="2.4" fill="#b0182a"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="196" width="400" height="16" fill="#b8b2a4"/><path d="M0 204h400" stroke="#a49e90" stroke-width="1"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#3a3b3f"/>' +
      '<rect x="120" y="230" width="160" height="20" rx="3" fill="#111" opacity=".88"/><text x="200" y="244" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">10TH ST · WEST OAKLAND</text>',
      sky("gds2", "#8ac4e8", "#f2e2c4"));
  }

  /* 3. The ten-day Atlanta studio sessions, January 2019, where he cut his verses for the Dreamville compilation: mixing desk, meters jumping, the vocal booth glass, a whiteboard full of song titles */
  function gdstudio() {
    const meters = Array.from({ length: 12 }, (_, i) => '<rect x="' + (126 + i * 13) + '" y="168" width="8" height="26" fill="' + (i % 4 === 3 ? RED : i % 2 ? GOLD : "#4ac06a") + '" class="gd-mt' + (i % 3 ? " gd-mt" + (i % 3 + 1) : "") + '"/>').join("");
    const faders = Array.from({ length: 16 }, (_, i) => '<rect x="' + (104 + i * 12) + '" y="206" width="2" height="20" fill="#555"/><rect x="' + (100 + i * 12) + '" y="' + (210 + (i * 7) % 12) + '" width="10" height="4" fill="#ddd"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1520"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a2030"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 4) + '" y="6" width="32" height="40" fill="#332838"/>').join("") +
      /* vocal booth glass with a mic stand and a warm lamp */
      '<rect x="230" y="50" width="150" height="100" fill="#0f1822" stroke="#5a5060" stroke-width="5"/><rect x="230" y="50" width="150" height="100" fill="#ffb060" opacity=".14" class="gd-flk"/>' +
      '<path d="M305 150v-56" stroke="#999" stroke-width="3"/><rect x="298" y="78" width="14" height="22" rx="7" fill="#cfcfcf"/><circle cx="305" cy="74" r="12" fill="none" stroke="#666" stroke-width="2"/>' +
      '<path d="M250 60l20 40" stroke="#fff" stroke-width="2" opacity=".15"/>' +
      /* whiteboard of song titles (scribbles) */
      '<rect x="20" y="50" width="180" height="96" fill="#f2f2ee" stroke="#aaa" stroke-width="3"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M32 ' + (66 + i * 11) + 'h' + (60 + (i * 37) % 90) + '" stroke="' + [ROYAL, RED, "#333"][i % 3] + '" stroke-width="2.5" stroke-linecap="round"/>').join("") +
      '<path d="M160 64l14 14M174 64l-14 14" stroke="' + RED + '" stroke-width="2.5"/><circle cx="168" cy="118" r="10" fill="none" stroke="' + GOLD + '" stroke-width="3"/>' +
      /* the desk */
      '<path d="M60 150h280l30 110H30z" fill="#3a3038"/><path d="M80 158h240l20 40H60z" fill="#4a4048"/>' + meters + faders +
      '<rect x="40" y="128" width="40" height="30" fill="#222"/><circle cx="60" cy="143" r="10" fill="#444"/><circle cx="60" cy="143" r="4" fill="#666"/>' +
      '<rect x="320" y="128" width="40" height="30" fill="#222"/><circle cx="340" cy="143" r="10" fill="#444"/><circle cx="340" cy="143" r="4" fill="#666"/>' +
      '<rect x="110" y="236" width="180" height="18" rx="3" fill="#111" opacity=".9"/><text x="200" y="249" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">ATLANTA SESSIONS · JAN 2019</text>',
      "");
  }

  /* 4. Subic Bay, Philippines, where his grandfather, a Black merchant marine, met his Filipino grandmother: green mountains, the bay, a cargo ship sliding by, a jeepney rolling along the shore */
  function gdsubic() {
    const jeep = '<g class="gd-car"><rect x="0" y="206" width="64" height="18" rx="3" fill="#e6e1d0"/><rect x="4" y="196" width="56" height="12" rx="2" fill="' + RED + '"/>' +
      '<rect x="8" y="209" width="9" height="7" fill="#2b4a5a"/><rect x="20" y="209" width="9" height="7" fill="#2b4a5a"/><rect x="32" y="209" width="9" height="7" fill="#2b4a5a"/><rect x="44" y="209" width="9" height="7" fill="#2b4a5a"/>' +
      '<path d="M0 218h64" stroke="' + ROYAL + '" stroke-width="2"/><path d="M58 202l10 4" stroke="' + GOLD + '" stroke-width="3"/><circle cx="12" cy="226" r="5" fill="#111"/><circle cx="52" cy="226" r="5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gds4)"/>' +
      '<circle cx="330" cy="50" r="18" fill="#fff4c2"/>' +
      '<g class="gd-bird"><path d="M-20 40q5 -5 10 0q5 -5 10 0" stroke="#2a3a3a" stroke-width="2" fill="none"/></g>' +
      /* the mountains around the bay */
      '<path d="M0 120q40 -50 90 -40t70 -30t90 34t80 -10t70 30v20H0z" fill="#2f6a46"/><path d="M0 130q60 -30 120 -20t100 -8t180 12v16H0z" fill="#3e8456"/>' +
      /* the bay */
      '<rect x="0" y="136" width="400" height="56" fill="#2e8ab0"/>' +
      '<g class="gd-wave">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (10 + i * 42) + ' ' + (146 + (i % 3) * 12) + 'q6 -3 12 0t12 0" stroke="#bfe6f2" stroke-width="1.5" fill="none" opacity=".8"/>').join("") + '</g>' +
      /* the cargo ship */
      '<g class="gd-ship"><path d="M70 160h120l-10 14H82z" fill="#3a3a44"/><rect x="80" y="150" width="20" height="10" fill="' + RED + '"/><rect x="102" y="150" width="20" height="10" fill="' + ROYAL + '"/><rect x="124" y="150" width="20" height="10" fill="' + GOLD + '"/><rect x="102" y="140" width="20" height="10" fill="#4ac06a"/>' +
      '<rect x="160" y="138" width="20" height="22" fill="#f2f2ee"/><rect x="164" y="142" width="12" height="4" fill="#2b4a5a"/><rect x="168" y="128" width="4" height="10" fill="#333"/></g>' +
      /* the shore road with palms and the jeepney */
      '<rect x="0" y="192" width="400" height="14" fill="#e8d8a8"/>' + palm(30, 150, 50, "gd-sway") + palm(360, 146, 54, "gd-sway gd-sway2") + palm(250, 162, 40, "gd-sway") +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4a4e"/><path d="M0 236h400" stroke="#f2f2ee" stroke-width="2" stroke-dasharray="16 12"/>' + jeep +
      '<rect x="120" y="240" width="160" height="16" rx="3" fill="#111" opacity=".88"/><text x="200" y="252" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">SUBIC BAY · PHILIPPINES</text>',
      sky("gds4", "#7ac2ea", "#f4e2b4"));
  }

  /* 5. The corner: 10th St and Mandela Pkwy in West Oakland, GUAPDAD 4000 tagged on the wall, the old 16th Street Station's tall arched windows lit up behind */
  function gdcorner() {
    const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 9) + '" width="28" height="11" rx="3" fill="' + c + '"/><circle cx="11" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="39" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="49" cy="' + (y + 6) + '" r="2" fill="#fff6c2"/></g>';
    /* the 16th Street Station: Beaux-Arts hall with three tall arched windows */
    const station = '<g transform="translate(188 0)">' +
      '<rect x="10" y="40" width="190" height="80" fill="#d8ccb4"/><rect x="4" y="34" width="202" height="8" fill="#c4b698"/><rect x="0" y="28" width="210" height="7" fill="#e2d6be"/>' +
      [32, 88, 144].map(x => '<path d="M' + x + ' 116v-52a17 17 0 0 1 34 0v52z" fill="#ffd98a" opacity=".85" class="gd-flk' + (x === 88 ? " gd-flk2" : "") + '"/><path d="M' + (x + 17) + ' 47v69M' + x + ' 80h34M' + x + ' 98h34" stroke="#a8956e" stroke-width="1.5"/>').join("") +
      [24, 80, 136, 186].map(x => '<rect x="' + x + '" y="42" width="6" height="78" fill="#c4b698"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gds5)"/>' + stars(12) + station +
      '<rect x="176" y="118" width="224" height="34" fill="#2a2a34"/>' +
      /* wall with the tag */
      '<rect x="0" y="92" width="182" height="118" fill="#3a3436"/><rect x="0" y="88" width="182" height="6" fill="#2a2426"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 22) + ' 94v116" stroke="#322c2e" stroke-width="2"/>').join("") +
      tag("GUAPDAD", 10, 146, 30, GOLD, -7) + tag("4000", 44, 180, 28, CREAM, -5) + tag("IT'S A CHECK", 14, 204, 14, RED, -3) +
      palm(330, 120, 82, "gd-sway") +
      /* street */
      '<rect x="0" y="206" width="400" height="5" fill="#a8a294"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2e2f33"/><path d="M0 234h400" stroke="#f2c94c" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("gd-car", 214, "#5a2a8a") + car("gd-car gd-car2", 214, "#e8e4da") +
      /* green street signs */
      '<rect x="240" y="66" width="5" height="142" fill="#7a7f86"/>' +
      '<rect x="196" y="70" width="92" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="242" y="84.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">10th St</text>' +
      '<rect x="184" y="94" width="116" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="242" y="108.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Mandela Pkwy</text>',
      sky("gds5", "#0e0b1e", "#3e2a4a"));
  }

  window.SCENES = { gdstation, gdporch, gdstudio, gdsubic, gdcorner };
})();
