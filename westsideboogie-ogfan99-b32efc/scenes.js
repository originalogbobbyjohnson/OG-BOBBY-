/* westsideboogie scenes (Regions tab: Los Angeles + SoCal; Westside Compton). CSS classes prefixed wb- (the page's own anim-train is kept).
   1 Avalon station, Metro C Line: island platform down in the median of the 105 freeway at Avalon Blvd, freeway traffic both sides, a light-rail train sliding in.
   2 First Evergreen Missionary Baptist Church, Compton: he joined its choir in 8th grade. White stucco church, steeple and cross, stained glass glowing, music notes floating out the open doors.
   3 Long Beach City College: he enrolled in its recording classes in 2010 and bought his first small studio. The control room: console faders moving, meters bouncing, the campus palms through the window.
   4 The chicken-and-waffles spot ("You like Roscoe's on a next day", Sunroof): striped awning, waffle in the window with syrup dripping, a car rolling past with a hand out the sunroof.
   5 W Alondra Blvd and S Wilmington Ave, Westside Compton: green signs, WESTSIDE BOOGIE tagged, the concrete Compton Creek channel behind with a bike rider on the path. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.wb-flk{animation:wbflick 2.6s infinite}' +
    '@keyframes wbglow{0%,100%{opacity:.5}50%{opacity:1}}.wb-glow{animation:wbglow 2.2s ease-in-out infinite}.wb-g2{animation-delay:-1.1s}' +
    '@keyframes wbcar{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.wb-car{animation:wbcar 6s linear infinite}.wb-car2{animation-delay:-3s}' +
    '@keyframes wbcarL{from{transform:translateX(500px)}to{transform:translateX(-100px)}}.wb-carL{animation:wbcarL 7s linear infinite}.wb-carL2{animation-delay:-3.5s}' +
    '@keyframes wbsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.wb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:wbsway 3.4s ease-in-out infinite}' +
    '@keyframes wbnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-70px);opacity:0}}.wb-note{animation:wbnote 3.6s ease-out infinite}.wb-n2{animation-delay:-1.2s}.wb-n3{animation-delay:-2.4s}' +
    '@keyframes wbfad{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}.wb-fad{animation:wbfad 1.4s ease-in-out infinite}.wb-f2{animation-delay:-.5s}.wb-f3{animation-delay:-.9s}.wb-f4{animation-delay:-.3s}' +
    '@keyframes wbvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}}.wb-vu{transform-box:fill-box;transform-origin:50% 100%;animation:wbvu .8s ease-in-out infinite}.wb-v2{animation-delay:-.3s}' +
    '@keyframes wbdrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.wb-drip{animation:wbdrip 1.8s ease-in infinite}' +
    '@keyframes wbbike{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.wb-bike{animation:wbbike 11s linear infinite}' +
    '@keyframes wbwave{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(14deg)}}.wb-hand{transform-box:fill-box;transform-origin:50% 100%;animation:wbwave .9s ease-in-out infinite}' +
    '@keyframes wbwater{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wb-water{animation:wbwater 2.5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="wb-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const RED = "#e63b2e", BLUE = "#2f6fd6", GOLD = "#f2c14e", CLINE = "#58a738", INK = "#0b0d14";

  /* 1. Avalon station, Metro C Line, in the 105 median */
  function wbstation() {
    let win = ""; for (let x = 36; x < 300; x += 38) win += '<rect x="' + x + '" y="122" width="26" height="20" rx="3" fill="#1f2a36"/>';
    const train = '<g class="anim-train"><rect x="14" y="110" width="300" height="60" rx="12" fill="#e4e7ea" stroke="#8a9098" stroke-width="2"/>' + win +
      '<rect x="14" y="148" width="300" height="7" fill="' + CLINE + '"/><rect x="14" y="158" width="300" height="3" fill="#3a3e46"/>' +
      '<rect x="292" y="116" width="18" height="48" rx="5" fill="#c7ccd2"/><circle cx="302" cy="160" r="4" fill="#fff6c2"/>' + bullet(268, 134, "C", CLINE) +
      '<path d="M150 110l12 -16h12l12 16" stroke="#555" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wbs1)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffd27a" opacity=".85"/>' +
      palm(30, 92, 56) + palm(372, 92, 64) +
      /* sound walls + far freeway lanes */
      '<rect x="0" y="80" width="400" height="14" fill="#c9bfae"/><rect x="0" y="94" width="400" height="8" fill="#56585e"/>' +
      car(40, 76, "#c44", "wb-carL") + car(220, 76, "#ddd", "wb-carL wb-carL2") +
      '<rect x="0" y="100" width="400" height="2" fill="#fff" opacity=".6"/>' +
      /* catenary poles */
      [60, 200, 340].map(x => '<rect x="' + x + '" y="40" width="4" height="70" fill="#6b6f76"/><rect x="' + (x - 14) + '" y="42" width="32" height="3" fill="#6b6f76"/>').join("") +
      '<path d="M0 46h400" stroke="#333" stroke-width="1"/>' +
      '<rect x="0" y="170" width="400" height="8" fill="#6d6d6d"/>' + train +
      /* island platform */
      '<rect x="0" y="178" width="400" height="8" fill="#eab308"/><rect x="0" y="186" width="400" height="26" fill="#b9b3a8"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 186l-10 26" stroke="#a69f93" stroke-width="1"/>').join("") +
      /* near freeway lanes */
      '<rect x="0" y="212" width="400" height="6" fill="#d8d3c8"/><rect x="0" y="218" width="400" height="42" fill="#4a4c52"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 222, BLUE, "wb-car") + car(0, 222, "#e7e2d6", "wb-car wb-car2") +
      /* station sign */
      '<rect x="112" y="190" width="176" height="20" rx="2" fill="#111"/><text x="176" y="205" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Avalon</text>' +
      '<circle cx="262" cy="200" r="8" fill="' + CLINE + '"/><text x="262" y="204.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">C</text>' +
      /* I-105 shield */
      '<path d="M352 116h30v10q0 14 -15 20q-15 -6 -15 -20z" fill="#1f4fa3" stroke="#fff" stroke-width="2"/><rect x="352" y="116" width="30" height="7" fill="#c8102e"/><text x="367" y="138" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">105</text>',
      sky("wbs1", "#f6a65a", "#fbe0b0"));
  }

  /* 2. First Evergreen Missionary Baptist Church, Compton */
  function wbchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#wbs2)"/>' +
      palm(40, 214, 120) + palm(360, 214, 104, "#3d6b40") +
      /* steeple */
      '<rect x="178" y="40" width="44" height="60" fill="#f3efe6" stroke="#b9b0a0" stroke-width="2"/><path d="M172 40l28 -26l28 26z" fill="#7a2f2a"/>' +
      '<rect x="198" y="0" width="4" height="18" fill="#d9b44a"/><rect x="192" y="5" width="16" height="4" fill="#d9b44a"/>' +
      '<rect x="192" y="56" width="16" height="24" rx="8" fill="#3a2c20"/>' +
      /* main hall */
      '<rect x="90" y="100" width="220" height="114" fill="#f3efe6" stroke="#b9b0a0" stroke-width="2"/><path d="M82 102l118 -26l118 26z" fill="#7a2f2a"/>' +
      /* stained glass */
      '<g class="wb-glow"><path d="M118 176v-40q14 -22 28 0v40z" fill="' + BLUE + '"/><path d="M118 156h28M132 134v42" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M254 176v-40q14 -22 28 0v40z" fill="' + RED + '"/><path d="M254 156h28M268 134v42" stroke="' + GOLD + '" stroke-width="2"/></g>' +
      '<circle cx="200" cy="124" r="16" fill="' + GOLD + '" class="wb-glow wb-g2"/><path d="M200 108v32M184 124h32M189 113l22 22M211 113l-22 22" stroke="#7a2f2a" stroke-width="2"/>' +
      /* open doors with the choir loft glow */
      '<path d="M170 214v-50q30 -26 60 0v50z" fill="#ffe6a6"/>' +
      [182, 196, 210].map((x, i) => '<g class="wb-sway" style="animation-delay:-' + i * 0.6 + 's"><path d="M' + (x - 7) + ' 214v-22q7 -8 14 0v22z" fill="#7a1f3a"/><circle cx="' + x + '" cy="186" r="5" fill="#3b2a20"/></g>').join("") +
      '<path d="M166 214v-52q34 -30 68 0v52" fill="none" stroke="#7a2f2a" stroke-width="4"/>' +
      /* notes */
      ['wb-note', 'wb-note wb-n2', 'wb-note wb-n3'].map((c, i) => '<g class="' + c + '"><text x="' + (196 + i * 8) + '" y="176" ' + font + ' font-size="18" fill="' + GOLD + '" stroke="#5a3d0a" stroke-width="1">' + (i === 1 ? "♫" : "♪") + '</text></g>').join("") +
      /* sign + lawn */
      '<rect x="0" y="214" width="400" height="46" fill="#7aa35a"/><rect x="0" y="214" width="400" height="6" fill="#c9c1ae"/>' +
      '<rect x="252" y="222" width="132" height="28" rx="3" fill="#fff8e6" stroke="#7a2f2a" stroke-width="2"/>' +
      '<text x="318" y="234" text-anchor="middle" ' + font + ' font-size="8.5" fill="#7a2f2a">FIRST EVERGREEN</text><text x="318" y="245" text-anchor="middle" ' + font + ' font-size="7" fill="#7a2f2a">MISSIONARY BAPTIST · COMPTON</text>' +
      '<rect x="262" y="250" width="4" height="10" fill="#7a2f2a"/><rect x="370" y="250" width="4" height="10" fill="#7a2f2a"/>',
      sky("wbs2", "#8fc4ec", "#e5f1f6"));
  }

  /* 3. Long Beach City College: the recording-class control room */
  function wblbcc() {
    const faders = Array.from({ length: 12 }, (_, i) => {
      const x = 74 + i * 22;
      return '<rect x="' + (x + 6) + '" y="196" width="3" height="40" fill="#222"/><g class="wb-fad ' + ['', 'wb-f2', 'wb-f3', 'wb-f4'][i % 4] + '"><rect x="' + x + '" y="214" width="15" height="8" rx="2" fill="' + (i % 3 === 0 ? RED : "#e6e6e6") + '"/></g>';
    }).join("");
    const knobs = Array.from({ length: 12 }, (_, i) => '<circle cx="' + (81 + i * 22) + '" cy="182" r="4" fill="' + ['#f2c14e', '#2f6fd6', '#e6e6e6'][i % 3] + '"/><circle cx="' + (81 + i * 22) + '" cy="170" r="3" fill="#888"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      /* window to campus */
      '<g clip-path="url(#wbclip3)"><rect x="110" y="20" width="180" height="96" fill="url(#wbs3)"/>' +
      '<rect x="124" y="74" width="152" height="42" fill="#efe0c4"/><path d="M118 76l82 -16l82 16z" fill="#b9573a"/>' +
      [136, 162, 188, 214, 240].map(x => '<path d="M' + x + ' 114v-22q8 -10 16 0v22z" fill="#4a3a2a"/>').join("") +
      palm(122, 116, 54) + palm(280, 116, 62, "#3d6b40") +
      '<rect x="124" y="28" width="152" height="16" rx="2" fill="#7a2f2a"/><text x="200" y="40" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">LONG BEACH CITY COLLEGE</text></g>' +
      '<rect x="110" y="20" width="180" height="96" rx="4" fill="none" stroke="#111" stroke-width="6"/>' +
      /* monitors + meters */
      '<rect x="40" y="70" width="44" height="64" rx="4" fill="#151515"/><circle cx="62" cy="92" r="9" fill="#333"/><circle cx="62" cy="118" r="12" fill="#333"/><circle cx="62" cy="118" r="5" fill="#555"/>' +
      '<rect x="316" y="70" width="44" height="64" rx="4" fill="#151515"/><circle cx="338" cy="92" r="9" fill="#333"/><circle cx="338" cy="118" r="12" fill="#333"/><circle cx="338" cy="118" r="5" fill="#555"/>' +
      '<rect x="150" y="122" width="100" height="30" rx="3" fill="#111"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (158 + i * 11) + '" y="128" width="7" height="20" fill="' + (i < 5 ? "#5ec46a" : i < 7 ? GOLD : RED) + '" class="wb-vu' + (i % 2 ? " wb-v2" : "") + '"/>').join("") +
      /* console */
      '<path d="M40 160h320l24 100h-368z" fill="#3a3632"/><rect x="60" y="160" width="280" height="6" fill="#55504a"/>' + knobs + faders +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#cfc6b8" letter-spacing="2">RECORDING CLASS · 2010</text>',
      sky("wbs3", "#7fb8e6", "#d7ecf6") + '<clipPath id="wbclip3"><rect x="110" y="20" width="180" height="96" rx="4"/></clipPath>');
  }

  /* 4. Chicken and waffles the next day (Sunroof) */
  function wbwaffle() {
    const stripes = Array.from({ length: 12 }, (_, i) => '<rect x="' + (60 + i * 24) + '" y="60" width="12" height="24" fill="' + RED + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wbs4)"/>' +
      palm(26, 186, 110) + palm(380, 186, 96, "#3d6b40") +
      '<rect x="56" y="40" width="288" height="146" fill="#efe3cf" stroke="#a89878" stroke-width="2"/>' +
      '<rect x="60" y="60" width="288" height="24" fill="#fff6e6"/>' + stripes + '<path d="M56 84h292l-8 10h-276z" fill="#9b2a22"/>' +
      '<g class="wb-flk"><rect x="110" y="42" width="180" height="16" rx="3" fill="#3a2318"/><text x="200" y="54" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="1">CHICKEN ’N WAFFLES</text></g>' +
      /* windows */
      '<rect x="74" y="100" width="110" height="64" fill="#2a3a4a"/><rect x="216" y="100" width="110" height="64" fill="#2a3a4a"/><rect x="186" y="104" width="28" height="82" fill="#5a3a22"/>' +
      /* waffle plate in the window */
      '<ellipse cx="129" cy="150" rx="40" ry="8" fill="#f4f4f4"/><rect x="101" y="124" width="56" height="24" rx="4" fill="#d8962f"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (108 + i * 13) + ' 126v20" stroke="#a8691c" stroke-width="2"/>').join("") + '<path d="M103 136h52" stroke="#a8691c" stroke-width="2"/>' +
      '<rect x="120" y="120" width="12" height="5" rx="2" fill="#fff6c2"/>' +
      '<path d="M146 124q4 6 0 12" stroke="#7a3d0a" stroke-width="3" fill="none"/><g class="wb-drip"><circle cx="146" cy="140" r="2.5" fill="#7a3d0a"/></g>' +
      /* fried chicken in the other window */
      '<ellipse cx="271" cy="150" rx="40" ry="8" fill="#f4f4f4"/><path d="M246 146q-4 -18 12 -22q16 -2 18 14q2 10 -10 10z" fill="#b8641c"/><path d="M272 146q0 -16 14 -18q14 0 12 16z" fill="#c9792a"/>' +
      /* street + the car with a hand out the sunroof */
      '<rect x="0" y="186" width="400" height="10" fill="#c9c1ae"/><rect x="0" y="196" width="400" height="64" fill="#4a4c52"/><path d="M0 230h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="wb-car"><g transform="translate(0 200)"><rect x="0" y="12" width="88" height="20" rx="6" fill="' + BLUE + '"/><path d="M18 12l10 -12h32l12 12z" fill="' + BLUE + '"/><path d="M24 11l6 -8h12v8zM45 11v-8h12l8 8z" fill="#bfe3f2"/>' +
      '<rect x="36" y="-2" width="14" height="3" fill="#222"/><g class="wb-hand"><rect x="41" y="-16" width="4" height="14" fill="#6b4630"/><path d="M39 -16l-2 -6M42 -17v-7M45 -17l1 -7M47 -16l3 -6" stroke="#6b4630" stroke-width="2"/></g>' +
      '<circle cx="20" cy="33" r="7" fill="#111"/><circle cx="20" cy="33" r="3" fill="#cfcfcf"/><circle cx="68" cy="33" r="7" fill="#111"/><circle cx="68" cy="33" r="3" fill="#cfcfcf"/></g></g>',
      sky("wbs4", "#9fd0f0", "#f3e6c8"));
  }

  /* 5. W Alondra Blvd & S Wilmington Ave, Compton Creek behind */
  function wbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wbs5)"/>' +
      '<path d="M0 84q60 -12 120 -6t140 -4t140 4v6H0z" fill="#b7a98f" opacity=".6"/>' +
      /* Compton Creek channel behind: far bank path + fence, sloped concrete, a thin stream */
      '<rect x="0" y="96" width="400" height="10" fill="#b8ae9a"/>' +
      '<rect x="0" y="84" width="400" height="2" fill="#6b6f76"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="84" width="2" height="12" fill="#6b6f76"/>').join("") +
      '<g class="wb-bike"><g transform="translate(0 74)"><circle cx="6" cy="20" r="6" fill="none" stroke="#222" stroke-width="2"/><circle cx="26" cy="20" r="6" fill="none" stroke="#222" stroke-width="2"/><path d="M6 20l8 -10h10l2 10M14 10l-2 -4" stroke="' + RED + '" stroke-width="2" fill="none"/><circle cx="18" cy="0" r="4" fill="#3b2a20"/><path d="M18 4l-2 8" stroke="' + BLUE + '" stroke-width="4"/></g></g>' +
      '<path d="M0 106h400v24H0z" fill="#d3ccbd"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40) + ' 106v24" stroke="#bdb5a4" stroke-width="1"/>').join("") +
      '<rect x="0" y="130" width="400" height="10" fill="#6f9db0"/>' +
      '<g class="wb-water">' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (i * 40) + ' 135q8 -3 16 0" stroke="#d7eef6" stroke-width="1.5" fill="none"/>').join("") + '</g>' +
      '<path d="M0 140h400v10H0z" fill="#c4bcab"/>' +
      '<rect x="150" y="98" width="100" height="14" rx="2" fill="#1d5c9e"/><text x="200" y="108.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">COMPTON CREEK</text>' +
      palm(30, 150, 96) + palm(370, 150, 110, "#3d6b40") +
      /* wall with the tag */
      '<rect x="60" y="148" width="280" height="70" fill="#e9dcc2"/><rect x="60" y="148" width="280" height="6" fill="#cdbd9e"/>' +
      tag("WESTSIDE", 82, 186, 26, BLUE, -5) + tag("BOOGIE", 170, 208, 30, RED, -5) + tag("THIRST 48", 268, 176, 13, GOLD, -8) +
      /* sidewalk + street */
      '<rect x="0" y="218" width="400" height="12" fill="#c9c1ae"/><rect x="0" y="230" width="400" height="30" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* sign pole */
      '<rect x="356" y="38" width="5" height="180" fill="#7d8288"/>' + sign(232, 40, 150, "W Alondra Blvd", 13) + sign(232, 66, 150, "S Wilmington Av", 13) +
      '<rect x="364" y="96" width="24" height="30" rx="2" fill="#fff" stroke="#111"/><text x="376" y="109" text-anchor="middle" ' + font + ' font-size="6" fill="#111">SPEED</text><text x="376" y="121" text-anchor="middle" ' + font + ' font-size="10" fill="#111">35</text>',
      sky("wbs5", "#f4a261", "#ffe1b0"));
  }

  window.SCENES = { wbstation, wbchurch, wblbcc, wbwaffle, wbcorner };
})();
