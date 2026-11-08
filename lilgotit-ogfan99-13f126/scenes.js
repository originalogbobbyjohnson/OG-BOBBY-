/* lilgotit scenes (Regions tab: Atlanta; Conley Rd / Jonesboro Rd, South Atlanta - "Big Zone 3 ... Jonesboro Road, Conley" - GTF). CSS classes and ids prefixed lg-.
   1 MARTA Route 55 (Jonesboro Road) pulling up on Jonesboro Rd SE at Conley Rd SE.
   2 Lenox Square in Buckhead ("17, blowing a bag in Lenox" - GTF): the long mall front, glass entrance, shopping bags swinging (no store names).
   3 SoHo, Manhattan ("From the A to NYC" - Superstar; "shoppin' at Soho" - Drip Day N Night): cast-iron loft fronts with fire escapes, a yellow cab rolling, cobblestones.
   4 Melrose Ave, L.A. ("In a G-Wagon smashin' down Melrose" - Drip Day N Night): palm trees, low storefronts, a boxy black truck cruising (unbranded).
   5 Jonesboro Rd SE and Conley Rd SE: green signs, LIL GOTIT tagged with HOOD BABY and SUPERSTAR, the long red-roofed sheds of the Atlanta State Farmers Market in Forest Park behind.
   400 x 260 SVGs. No logos, no faces, any 9 drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lgbus{0%{transform:translateX(440px)}45%,100%{transform:translateX(0)}}.lg-bus{animation:lgbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes lgswing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.lg-swing{transform-box:fill-box;transform-origin:50% 0%;animation:lgswing 1.6s ease-in-out infinite}.lg-s2{animation-delay:-.8s}' +
    '@keyframes lgcab{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.lg-cab{animation:lgcab 6s linear infinite;animation-delay:-2.4s}' +
    '@keyframes lgtruck{from{transform:translateX(460px)}to{transform:translateX(-120px)}}.lg-truck{animation:lgtruck 7s linear infinite;animation-delay:-3.5s}' +
    '@keyframes lgpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lg-palm{transform-box:fill-box;transform-origin:50% 100%;animation:lgpalm 3s ease-in-out infinite}' +
    '@keyframes lgglow{0%,100%{opacity:.5}50%{opacity:1}}.lg-glow{animation:lgglow 1.6s ease-in-out infinite}.lg-g2{animation-delay:-.8s}' +
    '@keyframes lgcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.lg-car{animation:lgcar 6.5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const ORG = "#ff8a1f", PURP = "#9b6bff", MINT = "#3ee08f", BUS = "#1f4e79", ORANGE = "#f7941d";
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-10" width="6" height="14" fill="#5a3a22"/><path d="M0 -70l16 30h-8l14 22h-44l14 -22h-8z" fill="#2f5a34"/></g>';
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="lg-palm"><path d="M0 0q4 -50 -2 -100" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
    '<g transform="translate(-2 -100)" fill="#2f6a3a"><path d="M0 0q-26 -6 -40 10q22 -16 40 -10z"/><path d="M0 0q26 -6 40 10q-22 -16 -40 -10z"/><path d="M0 0q-18 -20 -36 -16q22 0 36 16z"/><path d="M0 0q18 -20 36 -16q-22 0 -36 16z"/></g></g></g>';

  /* 1. MARTA Route 55 on Jonesboro Rd SE at Conley Rd SE */
  function lgbus() {
    const bus = '<g class="lg-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">55 JONESBORO RD</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lg1)"/>' +
      '<circle cx="70" cy="40" r="17" fill="#fff0c0" opacity=".9"/>' +
      pine(30, 120, 1) + pine(110, 118, .85) + pine(200, 120, 1.1) + pine(290, 118, .9) + pine(370, 120, 1) +
      /* low brick strip */
      '<rect x="0" y="112" width="400" height="30" fill="#a8664a"/><rect x="0" y="108" width="400" height="6" fill="#6a4a3a"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (14 + i * 56) + '" y="118" width="34" height="18" fill="#2a3442"/>').join("") +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="318" y="64" width="42" height="38" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="78" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="96" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">55</text>' +
      '<rect x="270" y="106" width="126" height="14" rx="2" fill="#111"/><text x="333" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">JONESBORO RD @ CONLEY RD</text>',
      sky("lg1", "#8ec8ef", "#f6e2c0"));
  }

  /* 2. Lenox Square, Buckhead: the mall front, bags swinging */
  function lglenox() {
    const bag = (x, c, cls) => '<g class="lg-swing ' + cls + '"><path d="M' + (x + 6) + ' 150q8 -14 16 0" stroke="#222" stroke-width="2" fill="none"/><rect x="' + x + '" y="150" width="28" height="30" rx="2" fill="' + c + '" stroke="#000" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lg2)"/>' +
      '<g fill="#8a94a6" opacity=".7"><rect x="20" y="30" width="30" height="70"/><rect x="320" y="20" width="36" height="80"/><rect x="360" y="44" width="24" height="56"/></g>' +
      '<rect x="0" y="80" width="400" height="110" fill="#e4dccb"/><rect x="0" y="72" width="400" height="12" fill="#c8bea8"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 40) + '" y="96" width="26" height="40" fill="#9fb6c8" stroke="#7a8a9a"/>').join("") +
      /* glass entrance */
      '<path d="M140 190V110l60 -30l60 30v80z" fill="#a9c8dc" stroke="#6a7a8a" stroke-width="3"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (152 + i * 24) + ' ' + (104 - (i < 3 ? i : 4 - i) * 10) + 'V190" stroke="#6a7a8a" stroke-width="2"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#b8b2a6"/><path d="M0 206h400" stroke="#9a9488" stroke-width="2"/>' +
      bag(60, ORG, "") + bag(96, PURP, "lg-s2") + bag(290, MINT, "lg-s2") + bag(326, "#f2f2f2", "") +
      '<rect x="8" y="12" width="160" height="24" rx="3" fill="#111" opacity=".75"/><text x="88" y="29" text-anchor="middle" ' + font + ' font-size="12" fill="' + ORG + '">LENOX, BUCKHEAD</text>',
      sky("lg2", "#9cc6ea", "#f2ead8"));
  }

  /* 3. SoHo, Manhattan: cast-iron loft fronts, fire escapes, a cab rolling */
  function lgsoho() {
    const loft = (x, w, c) => '<g><rect x="' + x + '" y="40" width="' + w + '" height="160" fill="' + c + '"/><rect x="' + x + '" y="36" width="' + w + '" height="8" fill="#5a5048"/>' +
      Array.from({ length: 4 }, (_, r) => Array.from({ length: 3 }, (_, k) => '<rect x="' + (x + 8 + k * (w - 16) / 3) + '" y="' + (54 + r * 34) + '" width="' + ((w - 16) / 3 - 8) + '" height="24" fill="#2a3442"/>' +
        '<path d="M' + (x + 8 + k * (w - 16) / 3) + ' ' + (54 + r * 34) + 'h' + ((w - 16) / 3 - 8) + '" stroke="#efe8d8" stroke-width="2"/>').join("")).join("") +
      Array.from({ length: 4 }, (_, r) => '<path d="M' + (x + 6) + ' ' + (80 + r * 34) + 'h' + (w - 12) + '" stroke="#ffffff" stroke-width="2"/>').join("") + '</g>';
    const escape = (x) => '<g stroke="#111" stroke-width="2" fill="none">' + [0, 1, 2, 3].map(r => '<path d="M' + x + ' ' + (82 + r * 34) + 'h40v-8h-40z"/><path d="M' + (x + 4) + ' ' + (82 + r * 34) + 'l30 34"/>').join("") + '</g>';
    const cab = '<g class="lg-cab"><rect x="0" y="206" width="70" height="20" rx="5" fill="#f7c300"/><rect x="12" y="194" width="42" height="16" rx="4" fill="#f7c300"/><rect x="16" y="197" width="16" height="10" fill="#2a3442"/><rect x="34" y="197" width="16" height="10" fill="#2a3442"/><circle cx="16" cy="228" r="7" fill="#111"/><circle cx="54" cy="228" r="7" fill="#111"/><rect x="28" y="190" width="12" height="5" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lg3)"/>' +
      loft(0, 136, "#c8b89a") + loft(136, 128, "#8a8f98") + loft(264, 136, "#b86a4a") +
      escape(176) + escape(300) +
      '<rect x="0" y="200" width="400" height="60" fill="#5a5a60"/>' +
      Array.from({ length: 20 }, (_, i) => Array.from({ length: 3 }, (_, r) => '<rect x="' + (i * 20 + (r % 2) * 10) + '" y="' + (232 + r * 9) + '" width="18" height="7" rx="2" fill="#6e6a64"/>').join("")).join("") +
      cab,
      sky("lg3", "#a8c8e8", "#e8e2d8"));
  }

  /* 4. Melrose Ave, L.A.: palms, low storefronts, a boxy black truck cruising */
  function lgmelrose() {
    const truck = '<g class="lg-truck"><rect x="0" y="182" width="96" height="36" rx="4" fill="#15161a"/><rect x="10" y="160" width="70" height="26" rx="3" fill="#15161a"/><rect x="16" y="164" width="26" height="16" fill="#3a4a5a"/><rect x="46" y="164" width="28" height="16" fill="#3a4a5a"/>' +
      '<rect x="96" y="186" width="8" height="22" rx="2" fill="#333"/><circle cx="22" cy="220" r="11" fill="#222"/><circle cx="22" cy="220" r="4" fill="#888"/><circle cx="76" cy="220" r="11" fill="#222"/><circle cx="76" cy="220" r="4" fill="#888"/><circle cx="2" cy="196" r="3" fill="#fff6c2"/></g>';
    const shop = (x, w, c, a) => '<rect x="' + x + '" y="120" width="' + w + '" height="62" fill="' + c + '"/><rect x="' + (x + 8) + '" y="140" width="' + (w - 16) + '" height="34" fill="#2a3442"/><path d="M' + x + ' 128h' + w + 'l-8 10h-' + (w - 16) + 'z" fill="' + a + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lg4)"/>' +
      '<circle cx="310" cy="56" r="26" fill="#ffd48a" opacity=".9"/>' +
      shop(0, 90, "#f2e6d8", PURP) + shop(96, 110, "#e85a8a", "#2a2a2a") + shop(212, 86, "#f6f0e4", ORG) + shop(304, 96, "#5ab0c8", "#f2f2f2") +
      palm(48, 182, 1) + palm(196, 182, 1.15) + palm(356, 182, 1.05) +
      '<rect x="0" y="182" width="400" height="10" fill="#c9c3b6"/><rect x="0" y="192" width="400" height="68" fill="#4a4a50"/><path d="M0 240h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 12"/>' +
      truck +
      '<rect x="8" y="12" width="128" height="24" rx="3" fill="#111" opacity=".75"/><text x="72" y="29" text-anchor="middle" ' + font + ' font-size="12" fill="' + MINT + '">MELROSE AVE</text>',
      sky("lg4", "#ff9a6a", "#ffe2b0"));
  }

  /* 5. Jonesboro Rd SE and Conley Rd SE: green signs, LIL GOTIT tagged, the Farmers Market sheds behind */
  function lgcorner() {
    const sheds = Array.from({ length: 4 }, (_, i) => '<g transform="translate(' + (20 + i * 96) + ' 0)"><path d="M0 104l40 -22l40 22z" fill="#b8402e"/><rect x="4" y="104" width="72" height="26" fill="#e8e2d0"/>' +
      Array.from({ length: 5 }, (_, k) => '<rect x="' + (8 + k * 14) + '" y="110" width="8" height="20" fill="#7a6a58"/>').join("") + '</g>').join("");
    const wall = '<rect x="0" y="140" width="400" height="80" fill="#5e4a6a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (146 + i * 8) + 'h400" stroke="#4e3c5a" stroke-width="1"/>').join("") +
      tag("LIL GOTIT", 24, 196, 38, ORG, -5) + tag("HOOD BABY", 222, 178, 20, MINT, -3) + tag("SUPERSTAR", 236, 210, 18, PURP, 4);
    const pole = '<rect x="356" y="40" width="6" height="190" fill="#4a4f55"/>' + sign(268, 46, 124, "JONESBORO RD SE") + sign(268, 72, 124, "CONLEY RD SE");
    return svg(
      '<rect width="400" height="260" fill="url(#lg5)"/>' +
      pine(8, 110, .8) + pine(390, 112, .8) + sheds +
      '<rect x="0" y="130" width="400" height="10" fill="#8a7a62"/>' +
      '<g class="lg-car"><rect x="0" y="128" width="36" height="10" rx="3" fill="' + MINT + '"/></g>' +
      wall + pole +
      '<rect x="0" y="220" width="400" height="40" fill="#4e4e54"/><path d="M0 244h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>',
      sky("lg5", "#7a5ab0", "#ffb07a"));
  }

  window.SCENES = { lgbus: lgbus, lglenox: lglenox, lgsoho: lgsoho, lgmelrose: lgmelrose, lgcorner: lgcorner };
})();
