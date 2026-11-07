/* mistahfab scenes (Regions tab: The Bay Area; North Oakland). CSS classes prefixed fab- (the page's own anim-train is kept).
   1 Market St & 45th St: the AC Transit 88 pulling up to the stop on Market St in North Oakland, craftsman houses and the laundromat behind.
   2 Oakland Technical High School on Broadway, where he went to school: the cream columned front, a yellow school bus rolling by (the Yellow Bus Rydah).
   3 20th & Broadway, Uptown: the corner shop where his Dope Era store moved, caps and tees in the window, the OPEN sign flickering.
   4 Emery High in Emeryville, where he graduated: low school building, palms, and a scraper ghost-riding past with the doors open, nobody at the wheel.
   5 45th St and Market St: green signs, MISTAH F.A.B. tagged, the white Claremont Hotel lit up in the hills behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fabflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.25}55%{opacity:.9}}.fab-flk{animation:fabflick 2.2s infinite}.fab-flk2{animation-delay:.7s}' +
    '@keyframes fabcar{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.fab-car{animation:fabcar 7s linear infinite}.fab-car2{animation-delay:-3.5s}' +
    '@keyframes fabbus{from{transform:translateX(-260px)}to{transform:translateX(560px)}}.fab-bus{animation:fabbus 10s linear infinite}' +
    '@keyframes fabghost{from{transform:translateX(-200px)}to{transform:translateX(560px)}}.fab-ghost{animation:fabghost 9s linear infinite}' +
    '@keyframes fabsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.fab-palm{transform-box:fill-box;transform-origin:50% 100%;animation:fabsway 3.5s ease-in-out infinite}.fab-palm2{animation-delay:-1.7s}' +
    '@keyframes fabflag{0%,100%{transform:skewY(0)}50%{transform:skewY(10deg)}}.fab-flag{transform-box:fill-box;transform-origin:0 50%;animation:fabflag 1.4s ease-in-out infinite}' +
    '@keyframes fabdance{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.fab-dance{animation:fabdance .5s ease-in-out infinite}' +
    '@keyframes fabspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fab-sp{animation:fabspray 1.4s ease-out infinite}.fab-sp2{animation-delay:.45s}' +
    '@keyframes fabblink{0%,100%{opacity:.3}50%{opacity:1}}.fab-bl{animation:fabblink 1.8s ease-in-out infinite}.fab-bl2{animation-delay:-.9s}' +
    '@keyframes fabbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-20px)}}.fab-bird{animation:fabbird 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="fab-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
    '<g fill="#2f7a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const house = (x, y, c, trim) => '<g><rect x="' + x + '" y="' + y + '" width="70" height="50" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y + 2) + 'l41 -22l41 22z" fill="#6a4a3a"/><rect x="' + (x + 8) + '" y="' + (y + 12) + '" width="22" height="18" fill="#2f3a4a" stroke="' + trim + '" stroke-width="3"/><rect x="' + (x + 42) + '" y="' + (y + 16) + '" width="18" height="34" fill="#5a3a2a" stroke="' + trim + '" stroke-width="3"/></g>';
  const YEL = "#ffd400", BLU = "#22b8ff", PNK = "#ff4fa0", ACG = "#00a651", ACB = "#0072bc";

  /* 1. Market St & 45th St: the AC Transit 88 pulling up */
  function fabstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="104" width="32" height="26" rx="2" fill="#203040"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="94" width="320" height="76" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<rect x="40" y="140" width="320" height="10" fill="' + ACG + '"/><path d="M40 150h320v6H40z" fill="' + ACB + '"/>' +
      '<rect x="328" y="104" width="30" height="44" rx="3" fill="#203040"/><rect x="328" y="96" width="30" height="8" rx="2" fill="#111"/><text x="343" y="103" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">88</text>' +
      '<circle cx="356" cy="160" r="3.5" fill="#fff6c2"/><circle cx="92" cy="172" r="12" fill="#111"/><circle cx="92" cy="172" r="5" fill="#777"/><circle cx="300" cy="172" r="12" fill="#111"/><circle cx="300" cy="172" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fbs1)"/>' +
      house(4, 70, "#e8c9a8", "#fff") + house(86, 66, "#a8c8d8", "#fff") +
      '<rect x="170" y="52" width="110" height="68" fill="#d8d0c0"/><rect x="170" y="52" width="110" height="10" fill="#6a5a8a"/><rect x="178" y="70" width="94" height="40" fill="#2f3a4a"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle cx="' + (194 + i * 22) + '" cy="96" r="8" fill="#8a96a2" stroke="#cfd6dd" stroke-width="2"/>').join("") +
      house(292, 70, "#d8e0a8", "#fff") +
      '<rect x="0" y="120" width="400" height="20" fill="#cfc8b8"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#4a4a50"/><path d="M0 222h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      bus +
      car("fab-car", 0, 236, YEL) +
      '<rect x="374" y="86" width="4" height="90" fill="#333"/><rect x="346" y="78" width="54" height="40" rx="3" fill="#fff" stroke="' + ACG + '" stroke-width="3"/>' +
      '<rect x="346" y="78" width="54" height="12" rx="2" fill="' + ACG + '"/><text x="373" y="87" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">AC TRANSIT</text>' +
      '<rect x="356" y="94" width="34" height="18" rx="3" fill="' + ACB + '"/><text x="373" y="108" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">88</text>' +
      '<rect x="102" y="192" width="196" height="26" rx="3" fill="#111"/><text x="200" y="210" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Market St &amp; 45th St</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a3a">AC TRANSIT 88 · MARKET ST · NORTH OAKLAND</text>',
      sky("fbs1", "#8ecdf0", "#fde8c8"));
  }

  /* 2. Oakland Tech: cream columned front, yellow school bus rolling by */
  function fabtech() {
    const cols = Array.from({ length: 8 }, (_, i) => '<rect x="' + (110 + i * 25) + '" y="92" width="11" height="84" fill="#f4ecd8" stroke="#cbbf9e" stroke-width="1"/><rect x="' + (107 + i * 25) + '" y="88" width="17" height="6" fill="#e8dcbc"/>').join("");
    const bus = '<g class="fab-bus"><rect x="0" y="186" width="150" height="44" rx="6" fill="' + YEL + '" stroke="#a88a00" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (10 + i * 24) + '" y="194" width="18" height="14" rx="2" fill="#2f3a4a"/>').join("") +
      '<rect x="134" y="194" width="14" height="22" rx="2" fill="#2f3a4a"/><path d="M0 216h150" stroke="#111" stroke-width="3"/><circle cx="30" cy="232" r="9" fill="#111"/><circle cx="118" cy="232" r="9" fill="#111"/><circle cx="148" cy="222" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fbs2)"/>' +
      '<g fill="#3f6e3a"><ellipse cx="40" cy="150" rx="40" ry="62"/><ellipse cx="364" cy="146" rx="44" ry="66"/></g>' +
      '<rect x="70" y="92" width="260" height="88" fill="#efe4c8"/>' +
      '<rect x="90" y="80" width="220" height="10" fill="#e2d4b0"/><path d="M96 80l104 -36l104 36z" fill="#f4ecd8" stroke="#cbbf9e" stroke-width="2"/>' +
      cols +
      '<rect x="74" y="104" width="24" height="30" fill="#4a5a6a"/><rect x="302" y="104" width="24" height="30" fill="#4a5a6a"/><rect x="74" y="142" width="24" height="30" fill="#4a5a6a"/><rect x="302" y="142" width="24" height="30" fill="#4a5a6a"/>' +
      '<rect x="60" y="176" width="280" height="8" fill="#d8cab0"/>' +
      '<rect x="198" y="30" width="2" height="18" fill="#555"/><g class="fab-flag"><rect x="200" y="30" width="16" height="10" fill="#c8102e"/></g>' +
      '<rect x="0" y="184" width="400" height="76" fill="#55555a"/><path d="M0 238h400" stroke="#ddd" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus +
      '<g class="fab-bird"><path d="M0 50q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a3a">OAKLAND TECH · BROADWAY · NORTH OAKLAND</text>',
      sky("fbs2", "#9ed4f4", "#fff0d8"));
  }

  /* 3. 20th & Broadway: the corner shop, caps and tees in the window, OPEN sign flickering */
  function fabshop() {
    const cap = (x, y, c) => '<path d="M' + x + ' ' + y + 'q12 -16 24 0z" fill="' + c + '"/><path d="M' + (x + 20) + ' ' + y + 'h12" stroke="' + c + '" stroke-width="3"/>';
    const tee = (x, y, c) => '<path d="M' + x + ' ' + y + 'l8 -6h12l8 6l-5 6l-3 -2v22h-12v-22l-3 2z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fbs3)"/>' +
      '<rect x="0" y="30" width="80" height="170" fill="#4a3a5a"/><rect x="320" y="20" width="80" height="180" fill="#3a4a5a"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (10 + (i % 3) * 22) + '" y="' + (44 + Math.floor(i / 3) * 30) + '" width="12" height="16" fill="#ffd98a" opacity=".55"/>').join("") +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (330 + (i % 3) * 22) + '" y="' + (34 + Math.floor(i / 3) * 30) + '" width="12" height="16" fill="#ffd98a" opacity=".5"/>').join("") +
      '<rect x="80" y="50" width="240" height="150" fill="#d8cfc0"/><rect x="80" y="50" width="240" height="14" fill="#2a2a32"/>' +
      '<path d="M86 92h228l-10 16H96z" fill="' + YEL + '"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (96 + i * 36) + '" y="92" width="18" height="16" fill="' + BLU + '"/>').join("") + '<path d="M96 108h208" stroke="#0a5a8a" stroke-width="2"/>' +
      '<rect x="96" y="112" width="140" height="80" fill="#1f2a36" stroke="#6a6a72" stroke-width="3"/>' +
      cap(108, 134, YEL) + cap(146, 134, BLU) + cap(184, 134, PNK) + tee(112, 158, "#f4f4f4") + tee(150, 158, YEL) + tee(188, 158, "#111") +
      '<rect x="248" y="112" width="56" height="88" fill="#3a2a22" stroke="#6a6a72" stroke-width="3"/><circle cx="296" cy="158" r="2.5" fill="#d8c27a"/>' +
      '<g class="fab-flk"><rect x="200" y="70" width="48" height="16" rx="3" fill="#1a0a14" stroke="' + PNK + '" stroke-width="2"/><text x="224" y="82" text-anchor="middle" ' + font + ' font-size="10" fill="' + PNK + '">OPEN</text></g>' +
      '<rect x="0" y="200" width="400" height="12" fill="#bdb5a5"/><rect x="0" y="212" width="400" height="48" fill="#4a4a50"/>' +
      car("fab-car", 0, 236, BLU) +
      '<rect x="40" y="130" width="4" height="70" fill="#2f2f2f"/>' + sign(4, 112, 76, "20th St") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">20TH &amp; BROADWAY · UPTOWN OAKLAND</text>',
      sky("fbs3", "#1c1a3a", "#7a4a7a"));
  }

  /* 4. Emery High, Emeryville: low school, palms, a scraper ghost-riding past with the doors open */
  function fabemery() {
    const ghost = '<g class="fab-ghost"><path d="M20 214h120q8 0 10 10v8H10v-8q2 -10 10 -10z" fill="#7a2a8a"/><path d="M40 214l12 -18h50l14 18z" fill="#7a2a8a"/>' +
      '<path d="M54 198h22v14H48z" fill="#bfe3ff"/><path d="M80 198h20l10 14H80z" fill="#bfe3ff"/>' +
      '<path d="M60 214l-26 -14v24z" fill="#8e3aa0" stroke="#4a1a5a" stroke-width="1.5"/><path d="M96 214l-22 -16v24z" fill="#8e3aa0" stroke="#4a1a5a" stroke-width="1.5"/>' +
      '<circle cx="40" cy="234" r="10" fill="#111"/><circle cx="40" cy="234" r="6" fill="#d8d8e0"/><circle cx="122" cy="234" r="10" fill="#111"/><circle cx="122" cy="234" r="6" fill="#d8d8e0"/>' +
      '<g class="fab-dance"><path d="M150 206l6 -8l6 8" stroke="' + YEL + '" stroke-width="3" fill="none"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fbs4)"/>' +
      '<g fill="#8a96aa" opacity=".8"><rect x="250" y="60" width="26" height="100"/><rect x="282" y="74" width="22" height="86"/><rect x="310" y="56" width="26" height="104"/></g>' +
      '<g fill="#ffe9b0" opacity=".5">' + Array.from({ length: 18 }, (_, i) => '<rect x="' + (254 + (i % 3) * 8 + Math.floor(i / 6) * 28) + '" y="' + (70 + (i % 6) * 14) + '" width="3" height="3"/>').join("") + '</g>' +
      '<rect x="20" y="118" width="250" height="62" fill="#d8c8a0"/><rect x="20" y="112" width="250" height="8" fill="#8a3a2a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (30 + i * 30) + '" y="130" width="20" height="16" fill="#2f4458"/>').join("") +
      '<rect x="128" y="150" width="34" height="30" fill="#5a3a2a"/><rect x="104" y="98" width="82" height="16" fill="#2a3e52"/><text x="145" y="110" text-anchor="middle" ' + font + ' font-size="9" fill="#f4ecd8">EMERY HIGH</text>' +
      palm(12, 196, 110) + palm(370, 196, 118, "fab-palm2") +
      '<rect x="0" y="180" width="400" height="18" fill="#c8c0b0"/><rect x="0" y="198" width="400" height="62" fill="#4a4a50"/>' +
      ghost +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a3a">EMERY HIGH · EMERYVILLE · GHOST RIDE IT</text>',
      sky("fbs4", "#f2a6a0", "#fde2b8"));
  }

  /* 5. 45th St and Market St; MISTAH F.A.B. tagged, the Claremont Hotel white in the hills behind */
  function fabcorner() {
    const hotel = '<g><path d="M60 120q70 -50 150 -40q80 -16 190 30v14H60z" fill="#2a2b48"/>' +
      '<rect x="216" y="80" width="64" height="26" fill="#f6f4ee"/><rect x="236" y="64" width="24" height="18" fill="#f6f4ee"/><path d="M234 64l14 -16l14 16z" fill="#f6f4ee"/><rect x="246" y="38" width="4" height="12" fill="#f6f4ee"/>' +
      '<rect x="196" y="90" width="22" height="16" fill="#f6f4ee"/><rect x="278" y="90" width="22" height="16" fill="#f6f4ee"/>' +
      '<g fill="#ffd98a">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (200 + i * 8) + '" y="' + (94 + (i % 2) * 5) + '" width="2" height="2"/>').join("") + '</g>' +
      '<ellipse cx="248" cy="78" rx="60" ry="34" fill="#fff8d0" opacity=".12"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fbs5)"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + ((i * 17) % 50 + 6) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      hotel +
      '<rect x="0" y="130" width="400" height="94" fill="#2f3a6e"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#26305e" stroke-width="1"/>').join("") +
      tag("MISTAH F.A.B.", 12, 196, 38, YEL, -6) + tag("DOPE ERA", 26, 150, 15, BLU, -4) + tag("GHOST RIDE IT", 30, 218, 14, PNK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 104, "45th St") + sign(280, 124, 116, "Market St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="fab-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("fab-car", 0, 240, YEL) +
      '<g class="fab-sp"><circle cx="232" cy="166" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="fab-sp fab-sp2"><circle cx="238" cy="160" r="2" fill="' + YEL + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">45TH ST · MARKET ST · NORTH OAKLAND</text>',
      sky("fbs5", "#121634", "#4a3a6e"));
  }

  window.SCENES = { fabstation: fabstation, fabtech: fabtech, fabshop: fabshop, fabemery: fabemery, fabcorner: fabcorner };
})();
