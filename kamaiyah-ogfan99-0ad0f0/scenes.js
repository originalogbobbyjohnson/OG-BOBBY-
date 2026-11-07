/* kamaiyah scenes (Regions tab: The Bay Area; East Oakland). CSS classes prefixed km- (the page's own anim-train is kept).
   1 Fruitvale BART: the elevated concrete platform over East 12th St, a white-and-blue BART train sliding in, palms below.
   2 High Street, East Oakland, where she grew up: pastel stucco bungalows, a palm tree, an ice cream truck rolling by.
   3 Mills College's El Campanil (Maxwell Park, off MacArthur by High St): the cream bell tower with the red tile cap, bells swinging, eucalyptus.
   4 The Oakland Zoo's gondola over the East Oakland hills: cabins gliding up the cable over the golden grass.
   5 High St and MacArthur Blvd: green signs, KAMAIYAH tagged, the Oakland temple lit up white in the hills behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.km-flk{animation:kmflick 2.2s infinite}.km-flk2{animation-delay:.7s}' +
    '@keyframes kmcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.km-car{animation:kmcar 7s linear infinite}.km-car2{animation-delay:-3.5s}' +
    '@keyframes kmcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.km-carL{animation:kmcarL 8s linear infinite}' +
    '@keyframes kmtruck{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.km-truck{animation:kmtruck 11s linear infinite}' +
    '@keyframes kmsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.km-palm{transform-box:fill-box;transform-origin:50% 100%;animation:kmsway 3.5s ease-in-out infinite}' +
    '@keyframes kmbell{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.km-bell{transform-box:fill-box;transform-origin:50% 0;animation:kmbell 1.4s ease-in-out infinite}.km-bell2{animation-delay:-.7s}' +
    '@keyframes kmgon{from{transform:translate(0,0)}to{transform:translate(300px,-120px)}}.km-gon{animation:kmgon 9s linear infinite}.km-gon2{animation-delay:-3s}.km-gon3{animation-delay:-6s}' +
    '@keyframes kmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.km-sp{animation:kmspray 1.4s ease-out infinite}.km-sp2{animation-delay:.45s}' +
    '@keyframes kmblink{0%,100%{opacity:.3}50%{opacity:1}}.km-bl{animation:kmblink 1.8s ease-in-out infinite}.km-bl2{animation-delay:-.9s}' +
    '@keyframes kmbird{0%{transform:translate(0,0)}100%{transform:translate(420px,-20px)}}.km-bird{animation:kmbird 12s linear infinite}.km-bird2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="km-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
    '<g fill="#2f7a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const BART = "#0099d8", PURP = "#b48cff", GOLD = "#ffd23f", TEAL = "#3ddcc4";

  /* 1. Fruitvale BART: elevated concrete platform, white-and-blue train sliding in */
  function kmstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="92" width="30" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><path d="M30 86h300q30 0 34 34v20H30z" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="30" y="120" width="334" height="8" fill="' + BART + '"/><rect x="30" y="128" width="334" height="2" fill="#1d3f6e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (100 + i * 88) + '" y="96" width="4" height="44" fill="#c9ced3"/>').join("") +
      '<path d="M330 90q26 2 30 28h-30z" fill="#1f2a33"/><circle cx="356" cy="134" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms1)"/>' +
      '<path d="M0 70l60 -24l50 18l70 -30l70 24l60 -20l90 30v20H0z" fill="#7a6f8a" opacity=".6"/>' +
      '<rect x="20" y="40" width="360" height="10" rx="2" fill="#b5b0a6"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="50" width="6" height="96" fill="#b5b0a6"/>').join("") +
      '<g class="km-flk"><rect x="100" y="50" width="40" height="4" fill="#fff3c4"/></g><g class="km-flk km-flk2"><rect x="260" y="50" width="40" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="142" width="400" height="6" fill="#f2c200"/><rect x="0" y="148" width="400" height="18" fill="#c9c3b6"/>' +
      '<rect x="0" y="166" width="400" height="14" fill="#a8a294"/>' + [50, 200, 350].map(x => '<path d="M' + (x - 26) + ' 180h52l-12 22v58h-28v-58z" fill="#b8b2a4"/>').join("") +
      palm(110, 260, 70) + palm(292, 260, 82, "km-bl2") +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a3f" opacity=".9"/><path d="M0 248h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("km-car", 0, 240, PURP) +
      '<rect x="104" y="186" width="196" height="32" rx="3" fill="#111"/><text x="118" y="208" ' + font + ' font-size="17" fill="#fff">Fruitvale</text>' + badge(214, 202, "BART", BART) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0" opacity=".9">FRUITVALE · EAST OAKLAND</text>',
      sky("kms1", "#3b2a5a", "#f2a65a"));
  }

  /* 2. High Street, East Oakland: pastel bungalows, palm, ice cream truck */
  function kmhigh() {
    const house = (x, c, trim) => '<g><rect x="' + x + '" y="112" width="92" height="62" fill="' + c + '"/><path d="M' + (x - 6) + ' 114l52 -24l52 24z" fill="#8a4a3a"/>' +
      '<rect x="' + (x + 10) + '" y="126" width="26" height="22" fill="#2f3a4a" stroke="' + trim + '" stroke-width="3"/><rect x="' + (x + 56) + '" y="134" width="22" height="40" fill="#5a3a2a" stroke="' + trim + '" stroke-width="3"/>' +
      '<rect x="' + (x + 4) + '" y="166" width="84" height="8" fill="' + trim + '"/><path d="M' + (x + 4) + ' 174v-14M' + (x + 22) + ' 174v-14M' + (x + 40) + ' 174v-14" stroke="' + trim + '" stroke-width="2"/></g>';
    const truck = '<g class="km-truck"><rect x="0" y="196" width="80" height="38" rx="4" fill="#fdf6e8" stroke="#8a8a8a" stroke-width="2"/><rect x="80" y="208" width="24" height="26" rx="4" fill="#fdf6e8" stroke="#8a8a8a" stroke-width="2"/>' +
      '<rect x="86" y="212" width="14" height="10" fill="#9fd8ff"/><rect x="10" y="204" width="40" height="18" fill="#2f3a4a"/><path d="M58 206h14v14h-14z" fill="#ff8ab8"/><circle cx="65" cy="200" r="5" fill="#ff8ab8"/>' +
      '<path d="M0 196h80" stroke="' + TEAL + '" stroke-width="4"/><circle cx="20" cy="236" r="7" fill="#111"/><circle cx="88" cy="236" r="7" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms2)"/>' +
      '<path d="M0 100l80 -30l90 20l100 -34l130 30v20H0z" fill="#9aa86a" opacity=".55"/>' +
      house(10, "#f2c7a8", "#fff") + house(150, "#a8d8d0", "#fff") + house(290, "#e8d48a", "#fff") +
      palm(128, 180, 112) +
      '<rect x="0" y="174" width="400" height="16" fill="#cfc8b8"/><rect x="0" y="190" width="400" height="70" fill="#4a4a50"/><path d="M0 220h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      truck +
      '<rect x="292" y="150" width="4" height="40" fill="#3a3a3a"/><rect x="262" y="146" width="66" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="295" y="158" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">High St</text>' +
      '<g class="km-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a4a">HIGH STREET · EAST OAKLAND</text>',
      sky("kms2", "#8ecdf0", "#fde8c8"));
  }

  /* 3. Mills College El Campanil: cream bell tower, red tile cap, swinging bells, eucalyptus */
  function kmmills() {
    const bells = [178, 204].map((x, i) => '<g class="km-bell' + (i ? " km-bell2" : "") + '"><path d="M' + x + ' 76q-10 2 -10 18h20q0 -16 -10 -18z" fill="#b8862b" stroke="#6b4a12" stroke-width="1.5"/><circle cx="' + x + '" cy="96" r="3" fill="#6b4a12"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kms3)"/>' +
      '<g fill="#5e7a5a"><ellipse cx="50" cy="150" rx="46" ry="70"/><ellipse cx="350" cy="140" rx="50" ry="80"/></g>' +
      '<g fill="#7a9a72"><ellipse cx="80" cy="170" rx="30" ry="50"/><ellipse cx="318" cy="170" rx="34" ry="54"/></g>' +
      '<rect x="46" y="150" width="6" height="70" fill="#d8cfc0"/><rect x="346" y="150" width="6" height="70" fill="#d8cfc0"/>' +
      '<rect x="156" y="104" width="72" height="120" fill="#efe4cc"/><rect x="152" y="100" width="80" height="8" fill="#ddd0b2"/>' +
      '<rect x="160" y="62" width="64" height="40" fill="#efe4cc"/><path d="M164 102v-28q14 -14 28 0v28zM196 102v-28q14 -14 28 0v28z" fill="#3a3040"/>' + bells +
      '<path d="M154 64l38 -26l38 26z" fill="#b5532f"/><path d="M154 64h76" stroke="#8a3a20" stroke-width="3"/><path d="M192 38v-10" stroke="#b8862b" stroke-width="2"/>' +
      '<rect x="176" y="150" width="32" height="74" rx="14" fill="#7a4a2a"/><path d="M192 150v74" stroke="#5a3418" stroke-width="2"/>' +
      '<rect x="168" y="118" width="12" height="16" fill="#3a3040"/><rect x="204" y="118" width="12" height="16" fill="#3a3040"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#7aa85a"/><path d="M150 260l26 -38h32l26 38z" fill="#d8c8a8"/>' +
      '<g class="km-bird"><path d="M0 50q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g><g class="km-bird km-bird2"><path d="M0 70q4 -4 8 0q4 -4 8 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a4a">EL CAMPANIL · MILLS COLLEGE · MAXWELL PARK</text>',
      sky("kms3", "#a6d4f2", "#fbeed6"));
  }

  /* 4. Oakland Zoo gondola over the East Oakland hills */
  function kmzoo() {
    const cab = (cls, c) => '<g class="km-gon ' + cls + '"><path d="M40 210v10" stroke="#333" stroke-width="2"/><rect x="28" y="220" width="24" height="20" rx="5" fill="' + c + '" stroke="#333" stroke-width="1.5"/><rect x="32" y="224" width="16" height="8" rx="2" fill="#bfe3ff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms4)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#ffe7a0" opacity=".9"/>' +
      '<path d="M0 150q80 -60 170 -40q90 -50 230 -20v170H0z" fill="#c9a24a"/>' +
      '<path d="M0 190q100 -60 220 -30q100 -30 180 -10v110H0z" fill="#d9b85a"/>' +
      '<g fill="#4f6e3a"><circle cx="60" cy="170" r="14"/><circle cx="80" cy="176" r="10"/><circle cx="250" cy="150" r="12"/><circle cx="330" cy="168" r="16"/><circle cx="350" cy="174" r="10"/></g>' +
      '<path d="M20 230L380 86" stroke="#333" stroke-width="2"/><path d="M20 244L380 100" stroke="#555" stroke-width="1.5"/>' +
      '<rect x="14" y="226" width="12" height="34" fill="#6b5a4a"/><rect x="200" y="152" width="8" height="108" fill="#6b5a4a"/><rect x="372" y="82" width="12" height="100" fill="#6b5a4a"/>' +
      cab("", PURP) + cab("km-gon2", TEAL) + cab("km-gon3", GOLD) +
      '<path d="M0 248h400" stroke="#a8823a" stroke-width="2" opacity=".5"/>' +
      '<g class="km-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a4a">THE ZOO GONDOLA · EAST OAKLAND HILLS</text>',
      sky("kms4", "#8ec8ec", "#fbe2b0"));
  }

  /* 5. High St and MacArthur Blvd; the temple lit up white in the hills behind */
  function kmcorner() {
    const spire = (x, base, h, w) => '<rect x="' + (x - w / 2) + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#f6f4ee"/><path d="M' + (x - w / 2) + ' ' + (base - h) + 'l' + (w / 2) + ' -' + (h * 0.7) + 'l' + (w / 2) + ' ' + (h * 0.7) + 'z" fill="#f6f4ee"/><circle cx="' + x + '" cy="' + (base - h * 1.7) + '" r="1.6" fill="#ffd23f"/>';
    const temple = '<g><path d="M80 116q120 -40 240 0v14H80z" fill="#2c2546"/>' +
      '<rect x="164" y="96" width="72" height="22" fill="#f6f4ee"/>' + spire(200, 96, 30, 14) + spire(176, 96, 16, 10) + spire(224, 96, 16, 10) + spire(166, 104, 10, 8) + spire(234, 104, 10, 8) +
      '<ellipse cx="200" cy="70" rx="60" ry="46" fill="#fff8d0" opacity=".12"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms5)"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + ((i * 57) % 400) + '" cy="' + ((i * 23) % 60 + 6) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      temple +
      '<g fill="#ffd98a" opacity=".6">' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (90 + i * 16) + '" y="' + (120 + (i % 3) * 3) + '" width="2" height="2"/>').join("") + '</g>' +
      '<rect x="0" y="130" width="400" height="94" fill="#6e4a8a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#5a3a72" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#5a3a72" stroke-width="1"/>').join("")).join("") +
      tag("KAMAIYAH", 18, 198, 42, GOLD, -6) + tag("BIG MONEY GANG", 24, 146, 13, TEAL, -4) + tag("HOW DOES IT FEEL", 30, 216, 14, "#ffffff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(268, 98, 106, "High St") + sign(250, 124, 144, "MacArthur Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="km-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("km-car", 0, 240, PURP) +
      '<g class="km-sp"><circle cx="224" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="km-sp km-sp2"><circle cx="230" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">HIGH ST · MACARTHUR · EAST OAKLAND</text>',
      sky("kms5", "#141836", "#5a3a6a"));
  }

  window.SCENES = { kmstation: kmstation, kmhigh: kmhigh, kmmills: kmmills, kmzoo: kmzoo, kmcorner: kmcorner };
})();
