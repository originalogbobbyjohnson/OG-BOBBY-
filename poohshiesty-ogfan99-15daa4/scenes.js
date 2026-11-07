/* poohshiesty scenes (Regions tab: Memphis + Tennessee; South Memphis, Cane Creek / Willett St). CSS classes and ids prefixed ps- (the page's own anim-train is kept).
   1 MATA Route 42 Crosstown bus pulling up at Elvis Presley Blvd & Kerr Ave, the stop closest to the Cane Creek apartments.
   2 The South Memphis train tracks: a freight train rolling through a grade crossing, red lights flashing, the gate down ("South Memphis is split by the tracks").
   3 Southland Mall in Whitehaven: the long low mall, its sign and the parking lot ("ain't no more outfits from Southland Mall" - FDO).
   4 First Day Out: six foreign cars lined up under the lot lights at dawn, one red (FDO: "walked out, I saw six foreigns").
   5 S Willett St and Ethlyn Ave in South Memphis: green signs, SHIESTY tagged on the wall, a fire hydrant with gold chains wrapped on it (JPay & CorrLinks),
     the Cane Creek apartment blocks behind.
   400 x 260 SVGs. No logos, no faces. No 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes psblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.ps-bl{animation:psblink 1s steps(1) infinite}.ps-bl2{animation-delay:-.5s}' +
    '@keyframes psfreight{from{transform:translateX(420px)}to{transform:translateX(-900px)}}.ps-fr{animation:psfreight 9s linear infinite}' +
    '@keyframes pswalk{0%{transform:translateX(0)}100%{transform:translateX(-60px)}}.ps-walk{animation:pswalk 4s ease-in-out infinite alternate}' +
    '@keyframes psshine{0%,100%{opacity:.2}50%{opacity:1}}.ps-sh{animation:psshine 1.8s ease-in-out infinite}.ps-sh2{animation-delay:-.6s}.ps-sh3{animation-delay:-1.2s}' +
    '@keyframes psbeam{0%,100%{opacity:.18}50%{opacity:.45}}.ps-beam{animation:psbeam 2.4s ease-in-out infinite}.ps-beam2{animation-delay:-1.2s}' +
    '@keyframes pssun{0%{transform:translateY(16px)}100%{transform:translateY(0)}}.ps-sun{animation:pssun 6s ease-out infinite alternate}' +
    '@keyframes psspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ps-sp{animation:psspray 1.4s ease-out infinite}.ps-sp2{animation-delay:.45s}' +
    '@keyframes pscar{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.ps-car{animation:pscar 7s linear infinite;animation-delay:-2.5s}' +
    '@keyframes pstw{0%,100%{opacity:.3}50%{opacity:1}}.ps-tw{animation:pstw 1.8s ease-in-out infinite}.ps-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="ps-tw' + (i % 2 ? ' ps-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const MATA = "#0057a8", RED = "#e32b2b", GOLD = "#e8c547", ICE = "#7ad1ff", BLACK = "#141414";

  /* 1. MATA Route 42 Crosstown at Elvis Presley Blvd & Kerr Ave */
  function psstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">42 CROSSTOWN</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const shop = (x, w, h, c) => '<rect x="' + x + '" y="' + (116 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x + 6) + '" y="' + (122 - h) + '" width="' + (w - 12) + '" height="8" fill="#2a1d14" opacity=".55"/>';
    const tree = (x, r) => '<rect x="' + (x - 2) + '" y="' + (100 - r) + '" width="4" height="' + (r + 16) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (96 - r) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x + r * .6) + '" cy="' + (100 - r) + '" r="' + r * .7 + '" fill="#3b7d45"/>';
    const pole = '<rect x="150" y="30" width="4" height="86" fill="#5a5f66"/><path d="M152 34h40" stroke="#5a5f66" stroke-width="3"/><rect x="186" y="34" width="14" height="5" rx="2" fill="#d8dde3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pss1)"/>' +
      tree(20, 16) + shop(36, 76, 34, "#b98a5e") + shop(118, 52, 26, "#d9c7a6") + pole + tree(200, 18) + shop(226, 84, 38, "#8f5a40") + shop(316, 56, 28, "#c9a979") + tree(384, 15) +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="22" y="204" width="336" height="44" rx="3" fill="#111"/><text x="34" y="222" ' + font + ' font-size="13" fill="#fff">Elvis Presley Blvd &amp; Kerr Ave</text><text x="34" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Cane Creek · South Memphis</text>' +
      badge(258, 234, "MATA", MATA) + badge(314, 234, "42", RED),
      sky("pss1", "#3a6fb0", "#ffc28a"));
  }

  /* 2. The South Memphis tracks: freight train through the crossing */
  function pstracks() {
    const car = (x, c, lbl) => '<rect x="' + x + '" y="118" width="120" height="50" rx="3" fill="' + c + '" stroke="#1a1a1a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (x + 10 + i * 20) + ' 122v42" stroke="#000" stroke-opacity=".18" stroke-width="2"/>').join("") +
      (lbl ? '<text x="' + (x + 60) + '" y="148" text-anchor="middle" ' + font + ' font-size="11" fill="#f2e8d0" opacity=".85">' + lbl + '</text>' : '') +
      '<circle cx="' + (x + 20) + '" cy="172" r="7" fill="#222"/><circle cx="' + (x + 38) + '" cy="172" r="7" fill="#222"/><circle cx="' + (x + 82) + '" cy="172" r="7" fill="#222"/><circle cx="' + (x + 100) + '" cy="172" r="7" fill="#222"/>';
    const loco = '<rect x="0" y="108" width="110" height="60" rx="4" fill="#2d4f7c" stroke="#111" stroke-width="2"/><rect x="0" y="100" width="44" height="22" rx="3" fill="#2d4f7c" stroke="#111" stroke-width="2"/>' +
      '<rect x="6" y="104" width="30" height="12" fill="#bfe3ff"/><path d="M0 150h110" stroke="' + GOLD + '" stroke-width="4"/><circle cx="4" cy="132" r="4" fill="#fff6c2"/>' +
      '<circle cx="22" cy="172" r="7" fill="#222"/><circle cx="40" cy="172" r="7" fill="#222"/><circle cx="72" cy="172" r="7" fill="#222"/><circle cx="90" cy="172" r="7" fill="#222"/>';
    const train = '<g class="ps-fr">' + loco + car(116, "#7a3a24", "") + car(240, "#3f4a3a", "") + car(364, "#8c6a2a", "") + car(488, "#5a2a2a", "") + car(612, "#36506b", "") + '</g>';
    const house = (x, c) => '<rect x="' + x + '" y="76" width="44" height="34" fill="' + c + '"/><path d="M' + (x - 4) + ' 78l26 -18l26 18z" fill="#4a3a32"/><rect x="' + (x + 8) + '" y="86" width="10" height="10" fill="#ffe7a0" opacity=".8"/><rect x="' + (x + 26) + '" y="90" width="10" height="20" fill="#3a2a22"/>';
    const xing = (x) => '<rect x="' + (x - 2) + '" y="96" width="5" height="110" fill="#d8d8d8"/>' +
      '<g transform="translate(' + x + ' 92)"><path d="M-22 -10L22 10M-22 10L22 -10" stroke="#fff" stroke-width="9"/><path d="M-22 -10L22 10M-22 10L22 -10" stroke="#111" stroke-width="1.5" opacity=".5"/></g><rect x="' + (x - 20) + '" y="104" width="40" height="10" rx="1" fill="#fff"/><text x="' + x + '" y="112" text-anchor="middle" ' + font + ' font-size="6" fill="#111">2 TRACKS</text>' +
      '<rect x="' + (x - 22) + '" y="118" width="46" height="6" fill="#222"/><circle cx="' + (x - 14) + '" cy="132" r="8" fill="#222"/><circle cx="' + (x + 16) + '" cy="132" r="8" fill="#222"/>' +
      '<circle class="ps-bl" cx="' + (x - 14) + '" cy="132" r="6" fill="#ff2a2a"/><circle class="ps-bl ps-bl2" cx="' + (x + 16) + '" cy="132" r="6" fill="#ff2a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pss2)"/>' +
      house(10, "#c9b48a") + house(70, "#9fb3c8") + house(250, "#d6a07a") + house(310, "#b7c79a") + house(360, "#e0d0b0") +
      '<rect x="0" y="110" width="400" height="80" fill="#6d6a62"/>' +
      '<path d="M0 180h400M0 186h400" stroke="#8a7a66" stroke-width="3"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="177" width="8" height="12" fill="#4a3324"/>').join("") +
      train +
      '<rect x="0" y="190" width="400" height="70" fill="#4d4d50"/><path d="M0 225h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      xing(56) +
      /* the gate arm down across the road */
      '<rect x="62" y="196" width="190" height="7" fill="#fff"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (74 + i * 32) + '" y="196" width="14" height="7" fill="' + RED + '"/>').join("") +
      '<circle class="ps-bl ps-bl2" cx="248" cy="199" r="3.5" fill="#ff2a2a"/>' +
      '<rect x="270" y="232" width="122" height="20" rx="2" fill="#111"/><text x="331" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTH MEMPHIS</text>',
      sky("pss2", "#5e86b8", "#f2c79a"));
  }

  /* 3. Southland Mall, Whitehaven */
  function pssouthland() {
    const car = (x, c) => '<rect x="' + x + '" y="206" width="46" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 9) + '" y="199" width="26" height="10" rx="3" fill="' + c + '" opacity=".85"/><circle cx="' + (x + 10) + '" cy="221" r="4" fill="#111"/><circle cx="' + (x + 36) + '" cy="221" r="4" fill="#111"/>';
    const bag = (x, c) => '<rect x="' + x + '" y="0" width="10" height="12" rx="1" fill="' + c + '"/><path d="M' + (x + 2) + ' 0q3 -5 6 0" stroke="' + c + '" stroke-width="1.5" fill="none"/>';
    const shopper = (x, c, b) => '<g><circle cx="' + x + '" cy="160" r="5" fill="#5a3a2a"/><rect x="' + (x - 5) + '" y="166" width="10" height="16" rx="3" fill="' + c + '"/><rect x="' + (x - 4) + '" y="182" width="3.5" height="12" fill="#222"/><rect x="' + (x + 0.5) + '" y="182" width="3.5" height="12" fill="#222"/><g transform="translate(0 172)">' + bag(x + 5, b) + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pss3)"/>' +
      '<g class="ps-sun"><circle cx="330" cy="50" r="22" fill="#ffd27a" opacity=".9"/></g>' +
      /* long low mall: tan block body, darker band, entrance canopy */
      '<rect x="10" y="96" width="380" height="100" fill="#d9c3a0"/><rect x="10" y="88" width="380" height="12" fill="#a8835a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (20 + i * 38) + '" y="112" width="4" height="84" fill="#c4a982"/>').join("") +
      '<rect x="138" y="70" width="124" height="126" fill="#c9ab80"/><rect x="132" y="64" width="136" height="10" fill="#8c6a44"/>' +
      '<rect x="146" y="80" width="108" height="26" rx="2" fill="#2b2b2b"/><text x="200" y="92" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SOUTHLAND</text><text x="200" y="102" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MALL</text>' +
      '<rect x="160" y="128" width="80" height="68" fill="#1f3a4e"/><path d="M200 128v68M180 128v68M220 128v68" stroke="#9cc6e0" stroke-width="1.5"/><path d="M150 124h100l-8 -10h-84z" fill="#6a4a2a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5b5d61"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (8 + i * 48) + ' 228v32" stroke="#e8ecf2" stroke-width="2"/>').join("") +
      car(16, "#c8102e") + car(110, "#e8e8e8") + car(258, "#1f6fb2") + car(340, "#2a2a2a") +
      '<g class="ps-walk">' + shopper(300, "#2f7a3a", RED) + shopper(318, "#8a2a6a", GOLD) + '</g>' +
      '<rect x="12" y="236" width="196" height="18" rx="2" fill="#111"/><text x="20" y="249" ' + font + ' font-size="10" fill="#fff">WHITEHAVEN · SINCE 1966</text>',
      sky("pss3", "#6aa6e6", "#fbe3bd"));
  }

  /* 4. First Day Out: six foreigns lined up at dawn */
  function psfdo() {
    const coupe = (x, y, c, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 26q2 -12 16 -14l14 -10h30l16 10q14 2 16 14v8H0z" fill="' + c + '" stroke="#000" stroke-opacity=".4"/>' +
      '<path d="M34 4h24l12 8H24z" fill="#1d2b38" opacity=".9"/><circle cx="18" cy="34" r="7" fill="#111"/><circle cx="18" cy="34" r="3" fill="#bbb"/><circle cx="76" cy="34" r="7" fill="#111"/><circle cx="76" cy="34" r="3" fill="#bbb"/>' +
      '<rect x="88" y="20" width="4" height="4" rx="1" fill="#fff6c2"/></g>';
    const lamp = x => '<rect x="' + (x - 2) + '" y="40" width="4" height="120" fill="#3a3a3a"/><rect x="' + (x - 12) + '" y="36" width="24" height="6" rx="2" fill="#2a2a2a"/><path class="ps-beam" d="M' + (x - 10) + ' 42L' + (x - 50) + ' 200H' + (x + 50) + 'L' + (x + 10) + ' 42z" fill="#fff4c8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pss4)"/>' + stars(10) +
      '<path d="M0 150q200 -30 400 0v10H0z" fill="#1a2030"/>' +
      lamp(80) + '<g class="ps-beam2">' + lamp(320) + '</g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2e2f34"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (i * 64 + 4) + ' 168l-10 40" stroke="#e8ecf2" stroke-width="2" opacity=".6"/>').join("") +
      coupe(6, 156, RED, .58) + coupe(70, 156, "#f2f2f2", .58) + coupe(134, 156, "#1a1a1a", .58) + coupe(198, 156, "#f4b400", .58) + coupe(262, 156, "#2f6fd6", .58) + coupe(326, 156, "#3fa34d", .58) +
      '<circle class="ps-sh" cx="40" cy="168" r="2.5" fill="#fff"/><circle class="ps-sh ps-sh2" cx="168" cy="166" r="2.5" fill="#fff"/><circle class="ps-sh ps-sh3" cx="300" cy="167" r="2.5" fill="#fff"/>' +
      '<rect x="110" y="214" width="180" height="32" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="230" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">FIRST DAY OUT</text><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">SIX FOREIGNS WAITING</text>',
      sky("pss4", "#0d1430", "#e07a5a"));
  }

  /* 5. S Willett St and Ethlyn Ave, South Memphis */
  function pscorner() {
    const apt = (x, w, h) => '<rect x="' + x + '" y="' + (122 - h) + '" width="' + w + '" height="' + h + '" fill="#6b4a3a"/><path d="M' + (x - 3) + ' ' + (122 - h) + 'h' + (w + 6) + 'l-6 -10H' + (x + 3) + 'z" fill="#3e2a22"/>' +
      Array.from({ length: Math.floor(w / 16) }, (_, i) => '<rect class="ps-tw' + (i % 2 ? ' ps-tw2' : '') + '" x="' + (x + 5 + i * 16) + '" y="' + (128 - h) + '" width="8" height="8" fill="#ffd98a" opacity=".8"/><rect x="' + (x + 5 + i * 16) + '" y="' + (144 - h) + '" width="8" height="8" fill="#ffd98a" opacity=".5"/>').join("");
    const chain = (y, c) => '<path d="M346 ' + y + 'q14 6 28 0" stroke="' + c + '" stroke-width="3" fill="none" stroke-dasharray="3 2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pss5)"/>' + stars(16) +
      /* the Cane Creek apartment blocks behind */
      apt(10, 96, 46) + apt(120, 80, 38) + apt(214, 110, 50) +
      '<rect x="0" y="122" width="400" height="102" fill="#3a3632"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#2b2824" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#2b2824" stroke-width="1"/>').join("")).join("") +
      tag("SHIESTY", 14, 194, 46, RED, -6) + tag("SLIMEBALL", 26, 148, 18, "#7be07b", -4) + tag("MR. POOH", 170, 214, 18, GOLD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      /* fire hydrant with chains wrapped on it */
      '<rect x="350" y="192" width="20" height="32" rx="4" fill="#d7262b"/><rect x="346" y="186" width="28" height="8" rx="3" fill="#b01c20"/><path d="M352 186q8 -12 16 0" fill="#d7262b"/><rect x="342" y="202" width="8" height="8" rx="2" fill="#b01c20"/><rect x="370" y="202" width="8" height="8" rx="2" fill="#b01c20"/>' +
      '<g class="ps-sh">' + chain(198, GOLD) + chain(208, GOLD) + chain(216, "#dfe6ee") + '</g>' +
      '<g class="ps-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="' + RED + '"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#8a1414"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="316" y="78" width="6" height="146" fill="#2f2f2f"/>' + sign(254, 80, 128, "S Willett St") + sign(262, 110, 112, "Ethlyn Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ps-tw" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ps-sp"><circle cx="232" cy="170" r="3" fill="' + RED + '" opacity=".7"/></g><g class="ps-sp ps-sp2"><circle cx="238" cy="164" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("pss5", "#0e1422", "#5a3a3a"));
  }

  window.SCENES = { psstop: psstop, pstracks: pstracks, pssouthland: pssouthland, psfdo: psfdo, pscorner: pscorner };
})();
