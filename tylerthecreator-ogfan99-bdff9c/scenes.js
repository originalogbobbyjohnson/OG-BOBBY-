/* tylerthecreator scenes (Regions tab: Los Angeles + SoCal; Hawthorne / Ladera Heights). CSS classes and ids prefixed ttc- (the page's own anim-train is kept).
   1 Hawthorne/Lennox station, Metro C Line: the island platform down in the median of the 105 freeway, the Hawthorne Blvd overpass above, a silver C Line train sliding in, black sign with the green C bullet.
   2 Hawthorne Municipal Airport (Jack Northrop Field): the white control tower, the hangar, a private jet taxiing ("Eyes is cryin' on the jet cruisin'", CORSO), the windsock swinging.
   3 Ladera Heights ("What if I lost it all and ended up back in Ladera", November): stucco apartments on the hill, a Hawaiian shirt drying on the balcony line ("Hawaiian shirts in the winter"), the Wi-Fi sign blinking out, the oil field pumpjacks nodding on the hills behind.
   4 Utah ("I might just sled in Utah, LA is too warm", LUMBERJACK): snowy peaks, pines, a sled flying down the slope, snow falling.
   5 Hawthorne Blvd and El Segundo Blvd, Hawthorne: green signs, TYLER tagged with GOLF WANG, CMIYGL and IGOR, the tall white rocket booster standing by the airport behind.
   400 x 260 SVGs. No logos, no faces. No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ttcjet{0%{transform:translateX(-160px)}100%{transform:translateX(470px)}}.ttc-jet{animation:ttcjet 9s linear infinite;animation-delay:-4s}' +
    '@keyframes ttcsock{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(8deg)}}.ttc-sock{transform-box:fill-box;transform-origin:0% 50%;animation:ttcsock 2.4s ease-in-out infinite}' +
    '@keyframes ttcbeacon{0%,100%{opacity:.2}50%{opacity:1}}.ttc-bc{animation:ttcbeacon 1.3s ease-in-out infinite}.ttc-bc2{animation-delay:-.65s}' +
    '@keyframes ttcshirt{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.ttc-shirt{transform-box:fill-box;transform-origin:50% 0%;animation:ttcshirt 2.8s ease-in-out infinite}' +
    '@keyframes ttcnod{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.ttc-nod{transform-box:fill-box;transform-origin:50% 50%;animation:ttcnod 3s ease-in-out infinite}.ttc-nod2{animation-delay:-1.5s}' +
    '@keyframes ttcwifi{0%,100%{opacity:1}50%{opacity:.15}}.ttc-wifi{animation:ttcwifi 1.1s steps(1) infinite}' +
    '@keyframes ttcsled{0%{transform:translate(0,0)}100%{transform:translate(250px,118px)}}.ttc-sled{animation:ttcsled 4.2s ease-in infinite}' +
    '@keyframes ttcsnow{0%{transform:translateY(-20px)}100%{transform:translateY(270px)}}.ttc-sn{animation:ttcsnow 6s linear infinite}.ttc-sn2{animation-delay:-2s}.ttc-sn3{animation-delay:-4s}' +
    '@keyframes ttcspray{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.ttc-spray{transform-box:fill-box;transform-origin:50% 100%;animation:ttcspray 3s ease-in-out infinite}' +
    '@keyframes ttcsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ttc-sp{animation:ttcsp 1.4s ease-out infinite}.ttc-sp2{animation-delay:.45s}' +
    '@keyframes ttccar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.ttc-car{animation:ttccar 6s linear infinite}.ttc-car2{animation-delay:-3s}' +
    '@keyframes ttccarL{from{transform:translateX(480px)}to{transform:translateX(-90px)}}.ttc-carL{animation:ttccarL 5.5s linear infinite}.ttc-carL2{animation-delay:-2.7s}' +
    '@keyframes ttcbee{0%,100%{transform:translate(0,0)}25%{transform:translate(14px,-6px)}50%{transform:translate(26px,2px)}75%{transform:translate(10px,8px)}}.ttc-bee{animation:ttcbee 3.2s ease-in-out infinite}.ttc-bee2{animation-delay:-1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const SUN = "#f6c945", PINK = "#f49ac1", MINT = "#7fd6c9", CGREEN = "#58a738";
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -40 4 -80" stroke="#4a3626" stroke-width="5" fill="none"/>' +
    '<path d="M4 -80q-22 -6 -36 8q18 -4 36 -8zM4 -80q22 -8 38 6q-20 -2 -38 -6zM4 -80q-12 -18 -30 -18q16 8 30 18zM4 -80q12 -20 30 -16q-16 6 -30 16z" fill="#2c5e3a"/></g>';
  const bee = (x, y, cls) => '<g class="ttc-bee ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + SUN + '" stroke="#222" stroke-width="1"/><path d="M' + (x - 1.5) + ' ' + (y - 3.4) + 'v6.8M' + (x + 1.6) + ' ' + (y - 3.2) + 'v6.4" stroke="#222" stroke-width="1.4"/>' +
    '<ellipse cx="' + (x - 1) + '" cy="' + (y - 5) + '" rx="3" ry="2" fill="#fff" opacity=".8"/><ellipse cx="' + (x + 2) + '" cy="' + (y - 5) + '" rx="3" ry="2" fill="#fff" opacity=".8"/></g>';

  /* 1. Hawthorne/Lennox, Metro C Line, in the 105 median */
  function ttcstation() {
    const car = (x) => '<rect x="' + x + '" y="112" width="150" height="54" rx="7" fill="#d9dde2" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (x + 12 + i * 34) + '" y="121" width="26" height="20" rx="3" fill="#25313c"/>').join("") +
      '<rect x="' + x + '" y="146" width="150" height="6" fill="' + CGREEN + '"/><rect x="' + x + '" y="152" width="150" height="3" fill="#7a7f86"/>';
    const train = '<g class="anim-train">' + car(40) + car(194) + '<path d="M120 112l10 -12l10 12M270 112l10 -12l10 12" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="44" y="114" width="58" height="7" rx="1" fill="#111"/><text x="73" y="119.6" text-anchor="middle" ' + font + ' font-size="5" fill="' + CGREEN + '">NORWALK</text><circle cx="44" cy="160" r="3" fill="#fff6c2"/></g>';
    const lane = (y, cls, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="40" height="12" rx="4" fill="' + c + '"/><rect x="8" y="' + (y - 6) + '" width="22" height="8" rx="3" fill="#2a2f38"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ttc1)"/>' +
      /* Hawthorne Blvd overpass above */
      '<rect x="0" y="34" width="400" height="22" fill="#b8b2a6"/><rect x="0" y="56" width="400" height="6" fill="#8f897e"/><rect x="0" y="30" width="400" height="5" fill="#d6d0c4"/>' +
      '<rect x="60" y="62" width="16" height="36" fill="#a49e92"/><rect x="324" y="62" width="16" height="36" fill="#a49e92"/>' +
      '<g class="ttc-car">' + '<rect x="0" y="20" width="40" height="11" rx="4" fill="' + PINK + '"/><rect x="8" y="14" width="22" height="8" rx="3" fill="#2a2f38"/></g>' +
      /* freeway lanes on both sides */
      '<rect x="0" y="96" width="400" height="14" fill="#55575b"/>' + lane(97, "ttc-carL", MINT) + lane(97, "ttc-carL ttc-carL2", "#e4e1da") +
      train +
      '<rect x="0" y="166" width="400" height="8" fill="#4d4f52"/><path d="M0 170h400" stroke="#9a9a9a" stroke-width="2"/>' +
      /* island platform */
      '<rect x="0" y="174" width="400" height="30" fill="#c2bcaf"/><rect x="0" y="174" width="400" height="4" fill="#f1d14a"/>' +
      '<rect x="0" y="204" width="400" height="6" fill="#8f897e"/><rect x="0" y="210" width="400" height="50" fill="#55575b"/>' + lane(226, "ttc-car", SUN) + lane(226, "ttc-car ttc-car2", "#9aa3ad") +
      '<path d="M0 222h400" stroke="#f1e6a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* canopy posts + sign */
      '<rect x="138" y="178" width="4" height="26" fill="#777"/><rect x="258" y="178" width="4" height="26" fill="#777"/>' +
      '<rect x="100" y="68" width="200" height="30" rx="3" fill="#111" stroke="#444" stroke-width="2"/><circle cx="121" cy="83" r="11" fill="' + CGREEN + '"/><text x="121" y="88" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">C</text>' +
      '<text x="138" y="88.5" ' + font + ' font-size="14.5" fill="#fff">Hawthorne/Lennox</text>',
      sky("ttc1", "#f2a65e", "#fbd8b0"));
  }

  /* 2. Hawthorne Municipal Airport */
  function ttcairport() {
    const jet = '<g class="ttc-jet"><path d="M0 182q4 -10 20 -12h86q14 0 20 8q-6 8 -20 8h-86q-16 -2 -20 -4z" fill="#f4f2ec" stroke="#8d949b" stroke-width="1.5"/>' +
      '<path d="M20 172l-12 -18h10l18 18z" fill="#f4f2ec" stroke="#8d949b" stroke-width="1.5"/><path d="M56 184l-14 14h12l22 -14z" fill="#e4e1da" stroke="#8d949b" stroke-width="1.5"/>' +
      '<rect x="26" y="168" width="18" height="9" rx="4" fill="#c9ced4" stroke="#8d949b"/>' + Array.from({ length: 6 }, (_, i) => '<circle cx="' + (60 + i * 8) + '" cy="177" r="2" fill="#2a3340"/>').join("") +
      '<path d="M112 172q8 1 12 6h-12z" fill="#2a3340"/><path d="M22 180h96" stroke="' + PINK + '" stroke-width="2"/><circle cx="40" cy="192" r="3" fill="#222"/><circle cx="104" cy="192" r="3" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ttc2)"/>' +
      '<path d="M0 132q60 -14 120 -4t130 -6t150 2v20h-400z" fill="#b9a68f" opacity=".7"/>' +
      /* hangar */
      '<path d="M210 150v-46q70 -30 160 0v46z" fill="#d8d3c8" stroke="#8d8676" stroke-width="2"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (222 + i * 22) + ' 150v-' + (40 - Math.abs(3 - i) * 4) + '" stroke="#c2bcaf" stroke-width="2"/>').join("") +
      '<rect x="226" y="112" width="128" height="16" fill="#2f4a6a"/><text x="290" y="124.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">HAWTHORNE</text>' +
      /* control tower */
      '<rect x="92" y="62" width="20" height="90" fill="#efece4" stroke="#a49e92" stroke-width="2"/><path d="M86 62h32l6 -22h-44z" fill="#3a5a6e" stroke="#a49e92" stroke-width="2"/><rect x="78" y="36" width="48" height="5" fill="#efece4"/>' +
      '<rect x="100" y="24" width="4" height="12" fill="#777"/><circle class="ttc-bc" cx="102" cy="22" r="3" fill="#ff4d4d"/>' +
      palm(30, 152, 0.7) + palm(186, 150, 0.6) +
      /* windsock */
      '<rect x="374" y="96" width="3" height="56" fill="#888"/><g class="ttc-sock"><path d="M377 98l22 3v8l-22 3z" fill="#ff8c2a"/><path d="M384 99v12M391 100v10" stroke="#fff" stroke-width="2"/></g>' +
      /* apron + runway */
      '<rect x="0" y="152" width="400" height="108" fill="#6a6c70"/><rect x="0" y="152" width="400" height="4" fill="#8a8c90"/>' +
      '<path d="M0 214h400" stroke="#f4f2ec" stroke-width="3" stroke-dasharray="26 18"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle class="ttc-bc ' + (i % 2 ? "ttc-bc2" : "") + '" cx="' + (20 + i * 46) + '" cy="246" r="3" fill="#7fd6ff"/>').join("") + jet,
      sky("ttc2", "#7fb6e0", "#f6dcb8"));
  }

  /* 3. Ladera Heights */
  function ttcladera() {
    const pump = (x, y, cls) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M-14 0l14 -30l14 30" stroke="#2a2a2a" stroke-width="3" fill="none"/>' +
      '<g class="ttc-nod ' + cls + '"><rect x="-26" y="-36" width="52" height="6" fill="#2a2a2a"/><path d="M26 -40q8 3 8 10q0 7 -8 10z" fill="#2a2a2a"/></g><rect x="-30" y="-2" width="60" height="4" fill="#3a3a3a"/></g>';
    const win = (x, y, lit) => '<rect x="' + x + '" y="' + y + '" width="22" height="18" fill="' + (lit ? "#ffe39a" : "#3a4a5a") + '" stroke="#8a7a66" stroke-width="1.5"/><path d="M' + (x + 11) + ' ' + y + 'v18" stroke="#8a7a66" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ttc3)"/>' +
      '<circle cx="62" cy="48" r="16" fill="#fff1d6" opacity=".9"/>' +
      /* the oil field hills behind */
      '<path d="M0 116q80 -50 170 -30q70 14 120 -10q60 -26 110 4v40h-400z" fill="#8a7a5a"/><path d="M0 124q90 -30 200 -18t200 -4v20h-400z" fill="#7a6a4a"/>' +
      pump(150, 86, "") + pump(300, 78, "ttc-nod2") + pump(370, 92, "") +
      /* apartment building */
      '<rect x="40" y="110" width="250" height="120" fill="#e7d3b4" stroke="#b49a76" stroke-width="2"/><rect x="34" y="104" width="262" height="8" fill="#c76d4a"/>' +
      win(58, 124, true) + win(98, 124, false) + win(178, 124, true) + win(258, 124, true) +
      win(58, 176, false) + win(98, 176, true) + win(178, 176, false) + win(258, 176, false) +
      /* balcony with the clothesline */
      '<rect x="130" y="160" width="40" height="70" fill="#6a4a36"/><rect x="134" y="166" width="32" height="40" fill="#ffe39a"/>' +
      '<rect x="120" y="206" width="160" height="5" fill="#5a5a5a"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (122 + i * 15) + '" y="211" width="2" height="19" fill="#5a5a5a"/>').join("") + '<rect x="120" y="228" width="160" height="3" fill="#5a5a5a"/>' +
      '<path d="M176 160h100" stroke="#ddd" stroke-width="1"/>' +
      '<g class="ttc-shirt"><path d="M200 160l-14 6l4 10l6 -3v24h28v-24l6 3l4 -10l-14 -6q-6 6 -10 0z" fill="' + MINT + '" stroke="#2a5a5a" stroke-width="1.2"/>' +
      '<circle cx="206" cy="176" r="3.4" fill="' + PINK + '"/><circle cx="218" cy="186" r="3.4" fill="' + PINK + '"/><circle cx="210" cy="194" r="2.6" fill="' + SUN + '"/><circle cx="220" cy="172" r="2.6" fill="' + SUN + '"/>' +
      '<path d="M214 166v30" stroke="#2a5a5a" stroke-width="1"/></g>' +
      /* wifi sign blinking out in the lit window */
      '<rect x="212" y="120" width="34" height="26" rx="3" fill="#1c2430" stroke="#8a7a66" stroke-width="1.5"/><g class="ttc-wifi"><path d="M219 134a10 10 0 0 1 20 0M223 137a6 6 0 0 1 12 0" stroke="#7fd6c9" stroke-width="2.2" fill="none"/><circle cx="229" cy="140" r="1.8" fill="#7fd6c9"/><path d="M237 125l-16 18" stroke="#ff4d4d" stroke-width="2.6"/></g>' +
      palm(318, 232, 1.0) + palm(20, 236, 0.8) +
      '<rect x="0" y="230" width="400" height="30" fill="#9c958b"/><rect x="0" y="230" width="400" height="3" fill="#bdb5a8"/>' +
      bee(330, 150, "") + bee(350, 170, "ttc-bee2") +
      sign(300, 24, 92, "LADERA HTS"),
      sky("ttc3", "#4a5a8a", "#f2b07a"));
  }

  /* 4. Utah: sledding down the snow */
  function ttcutah() {
    const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 -60l16 26h-8l14 20h-10l14 18h-52l14 -18h-10l14 -20h-8z" fill="#2c5a40"/><path d="M-10 -26l10 -8l10 8z M-14 -6l14 -8l14 8z" fill="#f4f6fa" opacity=".8"/><rect x="-3" y="4" width="6" height="8" fill="#5a3e2a"/></g>';
    const flakes = Array.from({ length: 22 }, (_, i) => '<circle class="ttc-sn ' + ["", "ttc-sn2", "ttc-sn3"][i % 3] + '" cx="' + ((i * 47) % 400) + '" cy="' + ((i * 31) % 120) + '" r="' + (1.6 + (i % 3) * 0.6) + '" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ttc4)"/>' +
      '<path d="M0 120l70 -70l40 34l60 -64l70 70l40 -30l60 50l60 -40v80h-400z" fill="#8aa0b8"/>' +
      '<path d="M70 50l-18 18l10 -2l8 8l8 -10l12 4zM170 20l-22 22l12 -2l10 10l10 -12l14 6zM280 54l-14 14l10 -2l6 6l8 -8z" fill="#f4f6fa"/>' +
      '<path d="M0 150q120 -60 260 -40q90 14 140 4v146h-400z" fill="#e9eef5"/><path d="M0 150q120 -60 260 -40q90 14 140 4" stroke="#c9d4e2" stroke-width="3" fill="none"/>' +
      /* sled track */
      '<path d="M40 120q120 40 290 124" stroke="#cdd8e6" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      pine(350, 150, 1.1) + pine(380, 168, 0.8) + pine(30, 200, 1.2) + pine(70, 222, 0.8) +
      '<g class="ttc-sled"><g transform="translate(40 108)"><path d="M-14 8h34q6 0 8 -6" stroke="#8a2a2a" stroke-width="3" fill="none"/><rect x="-12" y="-2" width="30" height="8" rx="2" fill="' + PINK + '" stroke="#8a3a5a" stroke-width="1.5"/>' +
      '<rect x="-4" y="-14" width="14" height="12" rx="3" fill="' + MINT + '"/><circle cx="3" cy="-20" r="6" fill="' + SUN + '"/></g></g>' +
      flakes + sign(16, 22, 64, "UTAH"),
      sky("ttc4", "#6a8ec4", "#dfe8f4"));
  }

  /* 5. Hawthorne Blvd and El Segundo Blvd */
  function ttccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ttc5)"/>' +
      /* the standing rocket booster behind */
      '<rect x="206" y="8" width="26" height="118" rx="3" fill="#f4f4f2" stroke="#b9bcc0" stroke-width="2"/><rect x="206" y="8" width="26" height="14" rx="3" fill="#2a2a2e"/>' +
      '<rect x="206" y="64" width="26" height="3" fill="#d6d8dc"/><path d="M206 116l-12 12h12zM232 116l12 12h-12z" fill="#9aa0a8"/><path d="M200 28h-6M238 28h6" stroke="#9aa0a8" stroke-width="4"/>' +
      '<rect x="180" y="118" width="80" height="10" fill="#8d949b"/>' +
      '<rect x="0" y="104" width="160" height="24" fill="#cfd3d8"/><rect x="270" y="98" width="130" height="30" fill="#cfd3d8"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (284 + i * 14) + '" y="106" width="8" height="10" fill="#7a8a9a"/>').join("") +
      palm(30, 124, 0.8) + palm(176, 124, 0.7) + palm(372, 120, 0.9) +
      '<rect x="0" y="112" width="400" height="12" fill="#4a4448"/>' +
      '<g class="ttc-car"><rect x="0" y="102" width="44" height="12" rx="4" fill="' + MINT + '"/><rect x="8" y="96" width="26" height="8" rx="3" fill="#3a3a44"/></g>' +
      /* wall */
      '<rect x="30" y="124" width="330" height="100" fill="#e9dcc6"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M30 ' + (141 + r * 17) + 'h330" stroke="#d4c6ae" stroke-width="1"/>').join("") +
      tag("TYLER", 50, 186, 46, SUN, -6) +
      tag("IGOR", 236, 160, 22, PINK, -5) + tag("GOLF WANG", 46, 214, 18, MINT, -3) + tag("CMIYGL", 196, 214, 19, "#ffb35a", -4) +
      bee(214, 186, "") +
      '<g class="ttc-spray"><rect x="318" y="194" width="12" height="26" rx="3" fill="' + SUN + '"/><rect x="321" y="188" width="6" height="7" fill="#ddd"/></g>' +
      '<circle class="ttc-sp" cx="324" cy="184" r="3" fill="' + SUN + '"/><circle class="ttc-sp ttc-sp2" cx="328" cy="182" r="2.4" fill="' + SUN + '"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#a8a29a"/><rect x="0" y="222" width="400" height="3" fill="#cfc8bd"/>' +
      '<rect x="382" y="40" width="5" height="186" fill="#5d6166"/>' + sign(272, 40, 116, "HAWTHORNE BL") + sign(270, 66, 118, "W EL SEGUNDO BL"),
      sky("ttc5", "#8cc0ea", "#f8dcc0"));
  }

  window.SCENES = { ttcstation, ttcairport, ttcladera, ttcutah, ttccorner };
})();
