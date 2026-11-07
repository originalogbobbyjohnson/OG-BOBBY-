/* warreng scenes (Regions tab: Los Angeles + SoCal; North Long Beach). CSS classes prefixed wg- (the page's own anim-train is kept).
   1 Long Beach Transit stop at Atlantic Ave and Artesia Blvd: the Route 61 bus pulling in at the shelter, palms, the sunset.
   2 V.I.P. Records on Pacific Coast Hwy, the birthplace of G-funk: the tall pole sign with the spinning black record and blinking lights, the little storefront.
   3 Jordan High School, North Long Beach (his school): the campus front, a panther banner, a ball bouncing on the court.
   4 Cal State Long Beach's Walter Pyramid (This D.J.: "catch the bus to Cal State"): the cobalt-blue pyramid, palms, clouds drifting.
   5 Atlantic Ave and South St, North Long Beach: green signs, WARREN G tagged, the white towers of the Long Beach bridge and the port cranes behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.wg-flk{animation:wgflick 2.2s infinite}.wg-flk2{animation-delay:.7s}' +
    '@keyframes wgblink{0%,49%{opacity:1}50%,100%{opacity:.2}}.wg-bl{animation:wgblink 1s steps(1) infinite}.wg-bl2{animation-delay:.5s}' +
    '@keyframes wgcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.wg-car{animation:wgcar 7s linear infinite}.wg-car2{animation-delay:-3.5s}' +
    '@keyframes wgsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.wg-palm{transform-box:fill-box;transform-origin:50% 100%;animation:wgsway 3.5s ease-in-out infinite}.wg-palm2{animation-delay:-1.6s}' +
    '@keyframes wgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.wg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:wgspin 2s linear infinite}' +
    '@keyframes wgball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.wg-ball{animation:wgball .9s ease-in infinite alternate}' +
    '@keyframes wgcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.wg-cloud{animation:wgcloud 18s linear infinite}.wg-cloud2{animation-delay:-9s}' +
    '@keyframes wgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wg-sp{animation:wgspray 1.4s ease-out infinite}.wg-sp2{animation-delay:.45s}' +
    '@keyframes wgcrane{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.wg-crane{animation:wgcrane 5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="wg-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5a3e24" stroke-width="4" fill="none"/>' +
    '<g fill="#2a5a32"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const cloud = (cls, x, y) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 6) + '" rx="14" ry="8" fill="#fff" opacity=".85"/></g>';
  const LBT = "#0a5ea8", ORANGE = "#ffb347", GOLD = "#ffd86a", TEAL = "#5ec8e5";

  /* 1. Long Beach Transit stop, Atlantic Ave and Artesia Blvd, the 61 pulling in */
  function wgstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="110" width="30" height="22" rx="2" fill="#20303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="300" height="56" rx="8" fill="#f3f4f6" stroke="#7a8590" stroke-width="2"/>' + wins +
      '<rect x="40" y="138" width="300" height="8" fill="' + LBT + '"/><rect x="40" y="146" width="300" height="3" fill="#6cc04a"/>' +
      '<rect x="306" y="108" width="30" height="24" rx="3" fill="#20303c"/><rect x="304" y="102" width="34" height="5" rx="1" fill="#111"/><text x="321" y="106.5" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">61 ATLANTIC</text>' +
      '<circle cx="90" cy="158" r="11" fill="#1a1a1a"/><circle cx="90" cy="158" r="5" fill="#aaa"/><circle cx="290" cy="158" r="11" fill="#1a1a1a"/><circle cx="290" cy="158" r="5" fill="#aaa"/>' +
      '<circle cx="336" cy="146" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wgs1)"/>' +
      '<circle cx="320" cy="76" r="26" fill="#ffd27a" opacity=".85"/>' +
      palm(24, 168, 116) + palm(376, 168, 106, "wg-palm2") +
      '<rect x="0" y="168" width="400" height="16" fill="#c7c1b4"/>' +
      bus +
      '<rect x="0" y="184" width="400" height="76" fill="#3e3d44"/><path d="M0 230h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="356" y="96" width="4" height="72" fill="#555"/><rect x="342" y="80" width="32" height="20" rx="2" fill="' + LBT + '"/><text x="358" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">61</text>' +
      car("wg-car", 0, 242, ORANGE) +
      '<rect x="62" y="190" width="276" height="32" rx="3" fill="#111"/><text x="76" y="211" ' + font + ' font-size="14" fill="#fff">Atlantic Av / Artesia Blvd</text>' +
      '<rect x="296" y="196" width="34" height="20" rx="3" fill="' + LBT + '"/><text x="313" y="211" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">61</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">LONG BEACH TRANSIT · NORTH LONG BEACH</text>',
      sky("wgs1", "#ff8a4a", "#ffe0a8"));
  }

  /* 2. V.I.P. Records on Pacific Coast Hwy: pole sign with the spinning record */
  function wgvip() {
    const bulbs = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<circle class="wg-bl' + (i % 2 ? ' wg-bl2' : '') + '" cx="' + (200 + Math.cos(a) * 50).toFixed(1) + '" cy="' + (78 + Math.sin(a) * 50).toFixed(1) + '" r="3.5" fill="#ffe27a"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wgs2)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + ((i * 11) % 30 + 8) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<rect x="194" y="128" width="12" height="80" fill="#6d6d6d"/>' +
      '<circle cx="200" cy="78" r="58" fill="#f4efe2" stroke="#c03a2b" stroke-width="5"/>' + bulbs +
      '<g class="wg-spin"><circle cx="200" cy="78" r="40" fill="#111"/><circle cx="200" cy="78" r="32" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="200" cy="78" r="24" fill="none" stroke="#333" stroke-width="1.5"/><path d="M178 66q8 -10 18 -12" stroke="#666" stroke-width="2" fill="none"/><circle cx="200" cy="78" r="12" fill="#c03a2b"/><circle cx="200" cy="78" r="2.5" fill="#f4efe2"/></g>' +
      '<rect x="110" y="128" width="180" height="30" rx="4" fill="#c03a2b" stroke="#f4efe2" stroke-width="2"/><text x="200" y="149" text-anchor="middle" ' + font + ' font-size="17" fill="#f4efe2" letter-spacing="1">V.I.P. RECORDS</text>' +
      '<text x="80" y="70" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="16" fill="#ffe27a" transform="rotate(-8 80 70)">World Famous</text>' +
      palm(40, 208, 110) + palm(360, 208, 96, "wg-palm2") +
      '<rect x="20" y="170" width="150" height="38" fill="#e9d9b8"/><rect x="28" y="178" width="60" height="26" fill="#2a3a4a"/><rect x="96" y="178" width="22" height="30" fill="#5a3a22"/><rect x="20" y="164" width="150" height="8" fill="#c03a2b"/>' +
      '<g class="wg-flk"><rect x="30" y="182" width="56" height="4" fill="#ffd27a" opacity=".6"/></g>' +
      '<rect x="0" y="208" width="400" height="12" fill="#c7c1b4"/><rect x="0" y="220" width="400" height="40" fill="#3e3d44"/><path d="M0 240h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("wg-car", 0, 244, TEAL) +
      '<text x="290" y="200" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" opacity=".85">PACIFIC COAST HWY</text>',
      sky("wgs2", "#1a1440", "#7a3a5a"));
  }

  /* 3. Jordan High School, North Long Beach */
  function wgjordan() {
    const wins = (y) => Array.from({ length: 8 }, (_, i) => '<rect x="' + (44 + i * 40) + '" y="' + y + '" width="22" height="16" rx="1" fill="#3a5a6a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wgs3)"/>' +
      cloud("wg-cloud", 60, 34) + cloud("wg-cloud wg-cloud2", 200, 24) +
      '<rect x="30" y="66" width="340" height="96" fill="#e6dcc8" stroke="#b3a68a" stroke-width="2"/><rect x="30" y="60" width="340" height="8" fill="#7a2a2a"/>' +
      wins(78) + wins(104) +
      '<rect x="150" y="128" width="100" height="34" fill="#7a2a2a"/><text x="200" y="150" text-anchor="middle" ' + font + ' font-size="15" fill="#f4efe2" letter-spacing="2">JORDAN</text>' +
      '<g transform="translate(276 136)"><path d="M0 18q6 -14 22 -14h18l6 -6l4 6q6 2 6 8l-6 4h-6l-4 8h-6l-2 -6h-14l-4 6h-6z" fill="#111"/><path d="M0 18q-10 -2 -12 -12" stroke="#111" stroke-width="3" fill="none"/></g>' +
      '<rect x="0" y="162" width="400" height="98" fill="#2f6a8a"/>' +
      '<rect x="20" y="172" width="360" height="80" fill="#c46a3a" stroke="#f4efe2" stroke-width="2"/><path d="M200 172v80" stroke="#f4efe2" stroke-width="2"/><circle cx="200" cy="212" r="16" fill="none" stroke="#f4efe2" stroke-width="2"/>' +
      '<rect x="34" y="186" width="4" height="40" fill="#ddd"/><rect x="24" y="186" width="22" height="14" fill="#fff" stroke="#999"/><circle cx="46" cy="204" r="6" fill="none" stroke="#e04a2a" stroke-width="2"/>' +
      '<g class="wg-ball"><circle cx="120" cy="236" r="8" fill="#e8742a" stroke="#6a2a0a" stroke-width="1.5"/><path d="M112 236h16M120 228v16" stroke="#6a2a0a" stroke-width="1"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">JORDAN HIGH · NORTH LONG BEACH</text>',
      sky("wgs3", "#6fb8ea", "#d8efff"));
  }

  /* 4. The Walter Pyramid at Cal State Long Beach */
  function wgpyramid() {
    return svg(
      '<rect width="400" height="260" fill="url(#wgs4)"/>' +
      cloud("wg-cloud", 40, 40) + cloud("wg-cloud wg-cloud2", 260, 30) +
      '<path d="M200 40L330 180H70z" fill="#1f4fb4"/><path d="M200 40L330 180H200z" fill="#163c8c"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (200 - (i + 1) * 20) + ' ' + (40 + (i + 1) * 21.5) + 'H' + (200 + (i + 1) * 20) + '" stroke="#5b86d8" stroke-width="1.5" opacity=".7"/>').join("") +
      '<path d="M200 40v140" stroke="#5b86d8" stroke-width="1.5" opacity=".7"/>' +
      palm(40, 190, 120) + palm(86, 190, 92, "wg-palm2") + palm(352, 190, 112) +
      '<rect x="0" y="180" width="400" height="20" fill="#8ac06a"/><rect x="0" y="200" width="400" height="60" fill="#d8cdb4"/>' +
      '<path d="M0 220h400M0 240h400" stroke="#c4b896" stroke-width="1"/>' +
      car("wg-car", 0, 246, GOLD) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">CAL STATE LONG BEACH · THE PYRAMID</text>',
      sky("wgs4", "#4fa6e8", "#cfeaff"));
  }

  /* 5. Atlantic Ave and South St, North Long Beach, the bridge and the port behind */
  function wgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wgs5)"/>' +
      '<circle cx="80" cy="60" r="22" fill="#ffd27a" opacity=".8"/>' +
      '<g class="wg-crane"><path d="M20 120v-50h6v50zM14 70h50v5H14z" fill="#e0582a"/><path d="M40 75v24" stroke="#333" stroke-width="1"/></g>' +
      '<path d="M380 120v-46h6v46zM356 74h44v5h-44z" fill="#e0582a"/>' +
      '<path d="M150 126V44h8v82zM250 126V44h8v82z" fill="#f4f6f8"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M154 ' + (50 + i * 8) + 'L' + (98 + i * 8) + ' 112M154 ' + (50 + i * 8) + 'L' + (210 - i * 8) + ' 112M254 ' + (50 + i * 8) + 'L' + (210 + i * 8) + ' 112M254 ' + (50 + i * 8) + 'L' + (310 - i * 8) + ' 112" stroke="#e8ecf0" stroke-width="1"/>').join("") +
      '<path d="M70 112q130 -10 270 0v5H70z" fill="#d8dde2"/>' +
      palm(54, 136, 66) + palm(306, 136, 72, "wg-palm2") +
      '<rect x="0" y="130" width="400" height="94" fill="#b9b3a4"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#9e9786" stroke-width="1"/>').join("") +
      tag("WARREN G", 22, 198, 44, ORANGE, -6) + tag("213", 34, 152, 18, GOLD, -4) + tag("G-FUNK", 196, 152, 16, TEAL, -3) + tag("WAYNIAC", 150, 218, 14, GOLD, -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 104, "Atlantic Ave") + sign(286, 124, 104, "South St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="wg-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("wg-car", 0, 240, ORANGE) +
      '<g class="wg-sp"><circle cx="240" cy="172" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="wg-sp wg-sp2"><circle cx="246" cy="166" r="2" fill="' + ORANGE + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">ATLANTIC AVE · SOUTH ST · NORTH LONG BEACH</text>',
      sky("wgs5", "#2a1a4a", "#e07a4a"));
  }

  window.SCENES = { wgstation: wgstation, wgvip: wgvip, wgjordan: wgjordan, wgpyramid: wgpyramid, wgcorner: wgcorner };
})();
