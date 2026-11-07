/* kashdoll scenes (Regions tab: Detroit; Dexter-Linwood, west side). CSS classes and ids prefixed kd- (the page's own anim-train is kept).
   1 DDOT Route 16 Dexter pulling up to the Dexter & Fullerton stop on Dexter Ave (her street: "Back on Dexter").
   2 Little Caesars Arena downtown on a show night: glass front, the lit roof, spotlights sweeping.
   3 Campus Martius Park in winter ("Ice Me Out"): the rink, skaters circling, the big tree lit up, snow falling.
   4 Henry Ford College in Dearborn, where she took business classes before the music: low brick hall, trees, a stack of books.
   5 Dexter Ave and W Davison: green signs, KASH DOLL tagged, the Davison Freeway bridge with traffic behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kdflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.kd-flk{animation:kdflick 2.4s infinite}.kd-flk2{animation-delay:.8s}' +
    '@keyframes kdcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.kd-car{animation:kdcar 5s linear infinite}.kd-car2{animation-delay:-2.5s}' +
    '@keyframes kdcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.kd-carL{animation:kdcarL 4.4s linear infinite}.kd-carL2{animation-delay:-2.2s}' +
    '@keyframes kdsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.kd-sweep{transform-box:fill-box;transform-origin:50% 100%;animation:kdsweep 4s ease-in-out infinite}.kd-sweep2{animation-delay:-2s}' +
    '@keyframes kdglow{0%,100%{opacity:.55}50%{opacity:1}}.kd-glow{animation:kdglow 2.2s ease-in-out infinite}.kd-glow2{animation-delay:-1.1s}' +
    '@keyframes kdskate{from{transform:translateX(-30px)}to{transform:translateX(330px)}}.kd-sk{animation:kdskate 6s linear infinite}.kd-sk2{animation-delay:-2s}.kd-sk3{animation-delay:-4s}' +
    '@keyframes kdsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.kd-snow{animation:kdsnow 6s linear infinite}.kd-snow2{animation-delay:-3s}' +
    '@keyframes kdtw{0%,100%{opacity:.3}50%{opacity:1}}.kd-tw{animation:kdtw 1.4s ease-in-out infinite}.kd-tw2{animation-delay:-.7s}' +
    '@keyframes kdleaf{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(50px,90px) rotate(200deg);opacity:0}}.kd-leaf{animation:kdleaf 4s linear infinite}.kd-leaf2{animation-delay:-2s}' +
    '@keyframes kdsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(18px,-26px);opacity:0}}.kd-sp{animation:kdsp 1.3s ease-out infinite}.kd-sp2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", PINK = "#ff6fb5", GOLD = "#ffd36b", ICE = "#9be7ff";

  /* 1. DDOT 16 Dexter at Dexter & Fullerton */
  function kdstation() {
    const bus = '<g class="anim-train"><rect x="40" y="96" width="300" height="78" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="40" y="150" width="300" height="16" fill="' + DDOT + '"/><rect x="40" y="146" width="300" height="4" fill="' + GOLD + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 40) + '" y="108" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="300" y="106" width="32" height="56" rx="3" fill="#2c3a44"/><path d="M316 106v56" stroke="#8a9096"/>' +
      '<rect x="296" y="98" width="40" height="8" rx="2" fill="#111"/><text x="316" y="104.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GOLD + '">16 DEXTER</text>' +
      '<circle cx="90" cy="176" r="13" fill="#1a1a1a"/><circle cx="90" cy="176" r="5" fill="#888"/><circle cx="290" cy="176" r="13" fill="#1a1a1a"/><circle cx="290" cy="176" r="5" fill="#888"/>' +
      '<circle cx="337" cy="160" r="3.5" fill="#fff6c2"/></g>';
    const shop = (x, w, c, t) => '<rect x="' + x + '" y="40" width="' + w + '" height="96" fill="' + c + '"/><rect x="' + (x + 6) + '" y="46" width="' + (w - 12) + '" height="14" fill="#2a1f22"/><text x="' + (x + w / 2) + '" y="56.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">' + t + '</text>' +
      '<rect x="' + (x + 8) + '" y="70" width="' + (w - 16) + '" height="30" fill="#ffd98a" opacity=".5" class="kd-glow"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds1)"/>' +
      shop(0, 90, "#8a4a3a", "BEAUTY SUPPLY") + shop(94, 100, "#6e5a4a", "CONEY ISLAND") + shop(198, 96, "#7a3e50", "NAIL SALON") + shop(298, 102, "#5a4e6a", "BARBER") +
      '<rect x="0" y="136" width="400" height="56" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 228h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus +
      car("kd-carL", 0, 236, PINK) + car("kd-carL kd-carL2", 0, 236, "#e6e6e6") +
      '<rect x="362" y="96" width="5" height="96" fill="#555"/><rect x="346" y="86" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="365" y="101" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="100" y="198" width="200" height="26" rx="3" fill="#111"/><text x="112" y="216" ' + font + ' font-size="14" fill="#fff">Dexter &amp; Fullerton</text>' + badge(258, 211, "16", DDOT) +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DDOT ROUTE 16 · DEXTER AVE · WEST SIDE</text>',
      sky("kds1", "#3a2a5a", "#e48a7a"));
  }

  /* 2. Little Caesars Arena, show night */
  function kdarena() {
    return svg(
      '<rect width="400" height="260" fill="url(#kds2)"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 17) % 40 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<g opacity=".45"><path class="kd-sweep" d="M110 176L80 40h20z" fill="' + PINK + '"/><path class="kd-sweep kd-sweep2" d="M290 176L300 40h20z" fill="' + ICE + '"/></g>' +
      '<path d="M30 120q170 -70 340 0v12H30z" fill="#2a2c34"/><path class="kd-glow" d="M40 118q160 -62 320 0" stroke="' + PINK + '" stroke-width="5" fill="none"/>' +
      '<path class="kd-glow kd-glow2" d="M60 124q140 -50 280 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      '<rect x="30" y="130" width="340" height="60" fill="#1e2a36"/>' + Array.from({ length: 17 }, (_, i) => '<rect x="' + (36 + i * 20) + '" y="136" width="16" height="48" fill="' + (i % 3 ? "#5fa8d3" : "#9fd6f2") + '" opacity=".75"/>').join("") +
      '<rect x="30" y="128" width="340" height="4" fill="#8a8f96"/>' +
      '<rect x="140" y="150" width="120" height="40" fill="#ffe6a8" opacity=".85" class="kd-glow"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (140 + i * 24) + ' 150v40" stroke="#c9a85a" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4c55"/><path d="M0 222h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("kd-car", 0, 228, "#e6e6e6") + car("kd-car kd-car2", 0, 228, PINK) +
      '<rect x="120" y="96" width="160" height="18" rx="3" fill="#111" opacity=".85"/><text x="200" y="109" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">TONIGHT · KASH DOLL</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LITTLE CAESARS ARENA · DOWNTOWN DETROIT</text>',
      sky("kds2", "#0c0a22", "#3a1e4a"));
  }

  /* 3. Campus Martius rink in winter, Ice Me Out */
  function kdrink() {
    const tree = '<path d="M200 30l-44 120h88z" fill="#1f6b3a"/><path d="M200 30l-30 70h60z" fill="#2a8048"/><rect x="194" y="150" width="12" height="14" fill="#5a3a22"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="kd-tw' + (i % 2 ? " kd-tw2" : "") + '" cx="' + (200 + ((i * 37) % 60 - 30) * ((i * 9 % 100) / 120 + 0.25)) + '" cy="' + (50 + (i * 23) % 96) + '" r="2.6" fill="' + [GOLD, PINK, ICE, "#fff"][i % 4] + '"/>').join("") +
      '<path d="M200 22l3 7h7l-6 4l2 7l-6 -4l-6 4l2 -7l-6 -4h7z" fill="' + GOLD + '"/>';
    const skater = (cls, c) => '<g class="' + cls + '"><circle cx="40" cy="186" r="5" fill="#3a2a22"/><rect x="35" y="191" width="10" height="14" rx="3" fill="' + c + '"/><path d="M37 205l-4 10M43 205l5 10" stroke="#222" stroke-width="3"/><path d="M29 216h8M44 216h8" stroke="#ccc" stroke-width="2"/></g>';
    const snow = (cls, off) => '<g class="' + cls + '">' + Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 59 + off) % 400) + '" cy="' + ((i * 41) % 240) + '" r="' + (1.3 + (i % 3) * .6) + '" fill="#fff" opacity=".9"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds3)"/>' +
      '<g fill="#3a3550"><rect x="0" y="40" width="70" height="140"/><rect x="74" y="70" width="50" height="110"/><rect x="290" y="30" width="56" height="150"/><rect x="350" y="60" width="50" height="120"/></g>' +
      '<g fill="#ffd98a" opacity=".6">' + Array.from({ length: 24 }, (_, i) => '<rect x="' + [8, 30, 50, 82, 102, 298, 320, 358, 378][i % 9] + '" y="' + (50 + (i * 17) % 110) + '" width="8" height="6"/>').join("") + '</g>' +
      tree +
      '<ellipse cx="200" cy="206" rx="196" ry="38" fill="#cdeefa"/><ellipse cx="200" cy="206" rx="196" ry="38" fill="none" stroke="#fff" stroke-width="5"/>' +
      '<path d="M60 206q140 -20 280 0" stroke="#e8f8ff" stroke-width="2" fill="none"/>' +
      skater("kd-sk", PINK) + skater("kd-sk kd-sk2", GOLD) + skater("kd-sk kd-sk3", ICE) +
      snow("kd-snow", 0) + snow("kd-snow kd-snow2", 30) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">CAMPUS MARTIUS · ICE ME OUT</text>',
      sky("kds3", "#1b2350", "#6a6aa8"));
  }

  /* 4. Henry Ford College, Dearborn */
  function kdcollege() {
    const win = Array.from({ length: 2 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (66 + c * 30) + '" y="' + (98 + r * 30) + '" width="20" height="18" fill="#2e4a5e" stroke="#e9e1d0" stroke-width="2"/>').join("")).join("");
    const tree = (x, cls) => '<rect x="' + (x - 3) + '" y="140" width="6" height="40" fill="#5a3a22"/><circle cx="' + x + '" cy="128" r="22" fill="#d9822b"/><circle cx="' + (x - 12) + '" cy="136" r="14" fill="#e8a33a"/><circle cx="' + (x + 12) + '" cy="134" r="14" fill="#c4621f"/>' +
      '<g class="' + cls + '"><ellipse cx="' + x + '" cy="140" rx="3" ry="2" fill="#e8a33a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds4)"/>' +
      '<rect x="56" y="84" width="288" height="96" fill="#9c4b33"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M56 ' + (90 + i * 8) + 'h288" stroke="#7f3a27" stroke-width="1"/>').join("") +
      '<rect x="50" y="78" width="300" height="8" fill="#e9e1d0"/>' + win +
      '<rect x="176" y="150" width="48" height="30" fill="#26323c"/><rect x="180" y="154" width="40" height="26" fill="#ffd98a" opacity=".5" class="kd-glow"/>' +
      '<rect x="140" y="64" width="120" height="16" rx="2" fill="#26323c"/><text x="200" y="75.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">HENRY FORD COLLEGE</text>' +
      tree(30, "kd-leaf") + tree(370, "kd-leaf kd-leaf2") +
      '<rect x="0" y="180" width="400" height="80" fill="#6aa04a"/><path d="M160 260l20 -80h40l20 80z" fill="#c9c2b2"/>' +
      '<g transform="translate(290 196)"><rect x="0" y="0" width="56" height="10" fill="' + PINK + '" stroke="#5a1a3a"/><rect x="4" y="-10" width="50" height="10" fill="' + GOLD + '" stroke="#6a4a00"/><rect x="-2" y="-20" width="54" height="10" fill="' + ICE + '" stroke="#1a4a5a"/>' +
      '<text x="28" y="-12" text-anchor="middle" ' + font + ' font-size="6" fill="#000">BUSINESS</text></g>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">DEARBORN · BUSINESS CLASS BEFORE THE MUSIC</text>',
      sky("kds4", "#8cc7ef", "#f4ecd8"));
  }

  /* 5. Dexter Ave and W Davison */
  function kdcorner() {
    const bridge = '<rect x="0" y="76" width="400" height="20" fill="#7a7872"/><rect x="0" y="94" width="400" height="6" fill="#55534d"/><rect x="0" y="72" width="400" height="5" fill="#9a978f"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (30 + i * 86) + '" y="100" width="12" height="30" fill="#5f5d57"/>').join("") +
      car("kd-car kd-car2", 0, 58, "#e6e6e6") + car("kd-carL kd-carL2", 0, 58, ICE);
    return svg(
      '<rect width="400" height="260" fill="url(#kds5)"/>' +
      '<g fill="#2b2540" opacity=".8"><rect x="250" y="40" width="20" height="40"/><rect x="274" y="30" width="16" height="50"/><rect x="294" y="46" width="26" height="34"/></g>' +
      bridge +
      '<rect x="0" y="130" width="400" height="94" fill="#6e4a5a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#573a48" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#573a48" stroke-width="1"/>').join("")).join("") +
      tag("KASH DOLL", 14, 194, 42, PINK, -6) + tag("BRATZ", 30, 216, 17, GOLD, -3) + tag("KEISHA", 142, 220, 17, ICE, -4) +
      '<g class="kd-sp"><circle cx="246" cy="170" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="kd-sp kd-sp2"><circle cx="252" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(270, 112, 124, "Dexter Ave") + sign(262, 138, 132, "W Davison") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="kd-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("kds5", "#2a1e48", "#e87a8e"));
  }

  window.SCENES = { kdstation: kdstation, kdarena: kdarena, kdrink: kdrink, kdcollege: kdcollege, kdcorner: kdcorner };
})();
