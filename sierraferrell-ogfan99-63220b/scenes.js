/* sierraferrell scenes (Regions: More of the South / Genres: country-Americana; Charleston, West Virginia). CSS classes prefixed sfr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sfrglow{0%,100%{opacity:.45}50%{opacity:1}}.sfr-glow{animation:sfrglow 2.4s ease-in-out infinite}.sfr-g2{animation-delay:-1.2s}' +
    '@keyframes sfrnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.sfr-nt{animation:sfrnote 3.2s ease-out infinite}.sfr-nt2{animation-delay:-1.1s}.sfr-nt3{animation-delay:-2.2s}' +
    '@keyframes sfrcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.sfr-cl{animation:sfrcloud 14s ease-in-out infinite alternate}' +
    '@keyframes sfrripple{0%{transform:translateX(0)}100%{transform:translateX(-30px)}}.sfr-rip{animation:sfrripple 3s linear infinite}' +
    '@keyframes sfrspin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.sfr-spin{transform-box:fill-box;transform-origin:50% 50%;animation:sfrspin 4s linear infinite}' +
    '@keyframes sfrblink{0%,60%,100%{opacity:1}70%,90%{opacity:.15}}.sfr-blink{animation:sfrblink 1.6s steps(1) infinite}' +
    '@keyframes sfrsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sfr-sw{transform-box:fill-box;transform-origin:50% 0;animation:sfrsway 2.6s ease-in-out infinite}' +
    '@keyframes sfrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sfr-sp{animation:sfrspray 1.4s ease-out infinite}.sfr-sp2{animation-delay:.45s}' +
    '@keyframes sfrtwk{0%,100%{opacity:.2}50%{opacity:1}}.sfr-tw{animation:sfrtwk 1.8s ease-in-out infinite}.sfr-tw2{animation-delay:-.9s}' +
    '@keyframes sfrpetal{0%{transform:translate(0,-10px) rotate(0deg);opacity:0}15%{opacity:1}100%{transform:translate(-30px,90px) rotate(200deg);opacity:0}}.sfr-pt{transform-box:fill-box;transform-origin:50% 50%;animation:sfrpetal 5s linear infinite}.sfr-pt2{animation-delay:-1.7s}.sfr-pt3{animation-delay:-3.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="sfr-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const flower = (x, y, r, c, cls) => '<g class="' + (cls || "") + '">' + [0, 72, 144, 216, 288].map(a => '<ellipse cx="' + x + '" cy="' + (y - r) + '" rx="' + (r * 0.55) + '" ry="' + r + '" fill="' + c + '" transform="rotate(' + a + ' ' + x + ' ' + y + ')"/>').join("") + '<circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.45) + '" fill="#f2c14e"/></g>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; return s; };
  const ridges = (y, c1, c2) => '<path d="M0 ' + y + 'q50 -40 110 -22t100 -26t110 18t80 -14v' + (H - y + 40) + 'h-400z" fill="' + c1 + '"/><path d="M0 ' + (y + 20) + 'q70 -28 140 -6t130 -16t130 10v' + (H - y) + 'h-400z" fill="' + c2 + '"/>';
  /* the WV State Capitol: buff limestone, gilded dome */
  const capitol = (cx, base, s, glow) => {
    const L = "#e6d8b8", D = "#c8b48a", G = "#d9a92e";
    const k = v => (v * s).toFixed(1);
    const X = v => (cx + v * s).toFixed(1), Y = v => (base - v * s).toFixed(1);
    let cols = "";
    for (let i = -3; i <= 3; i++) cols += '<rect x="' + X(i * 11 - 2.5) + '" y="' + Y(58) + '" width="' + k(5) + '" height="' + k(30) + '" fill="' + D + '"/>';
    let wings = "";
    [-1, 1].forEach(sd => { for (let i = 1; i <= 5; i++) wings += '<rect x="' + X(sd * (44 + i * 14) - 3) + '" y="' + Y(44) + '" width="' + k(6) + '" height="' + k(14) + '" fill="#8a7a5a"/>'; });
    return '<g>' +
      '<rect x="' + X(-120) + '" y="' + Y(52) + '" width="' + k(240) + '" height="' + k(52) + '" fill="' + L + '"/>' + wings +
      '<rect x="' + X(-120) + '" y="' + Y(54) + '" width="' + k(240) + '" height="' + k(4) + '" fill="' + D + '"/>' +
      '<rect x="' + X(-44) + '" y="' + Y(64) + '" width="' + k(88) + '" height="' + k(64) + '" fill="' + L + '"/>' +
      '<path d="M' + X(-48) + ' ' + Y(64) + 'L' + X(0) + ' ' + Y(82) + 'L' + X(48) + ' ' + Y(64) + 'z" fill="' + L + '" stroke="' + D + '" stroke-width="' + k(1.5) + '"/>' + cols +
      '<rect x="' + X(-30) + '" y="' + Y(104) + '" width="' + k(60) + '" height="' + k(22) + '" fill="' + L + '"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + X(-28 + i * 7) + '" y="' + Y(102) + '" width="' + k(3) + '" height="' + k(18) + '" fill="' + D + '"/>').join("") +
      '<path d="M' + X(-30) + ' ' + Y(104) + 'Q' + X(-30) + ' ' + Y(150) + ' ' + X(0) + ' ' + Y(156) + 'Q' + X(30) + ' ' + Y(150) + ' ' + X(30) + ' ' + Y(104) + 'z" fill="' + G + '"/>' +
      (glow ? '<ellipse cx="' + X(0) + '" cy="' + Y(128) + '" rx="' + k(40) + '" ry="' + k(36) + '" fill="#ffe08a" opacity=".15" class="sfr-glow"/>' : '') +
      [-18, -6, 6, 18].map(v => '<path d="M' + X(v) + ' ' + Y(106) + 'Q' + X(v * 0.7) + ' ' + Y(140) + ' ' + X(0) + ' ' + Y(156) + '" stroke="#a87a1a" stroke-width="' + k(1) + '" fill="none"/>').join("") +
      '<rect x="' + X(-5) + '" y="' + Y(168) + '" width="' + k(10) + '" height="' + k(13) + '" fill="' + L + '"/><path d="M' + X(-6) + ' ' + Y(168) + 'Q' + X(0) + ' ' + Y(178) + ' ' + X(6) + ' ' + Y(168) + 'z" fill="' + G + '"/>' +
      '<rect x="' + X(-0.8) + '" y="' + Y(184) + '" width="' + k(1.6) + '" height="' + k(8) + '" fill="' + G + '"/>' +
      '</g>';
  };
  const GOLD = "#e0b34a", ROSE = "#d9667a", TEAL = "#3f9a96", CREAM = "#f4ead6";

  /* 1. KRT City Center Station, 140 Laidley St, downtown Charleston: lighted shelters, a KRT bus pulling in, the hills of the Kanawha Valley behind */
  function sfrstation() {
    let shelters = "";
    for (let i = 0; i < 3; i++) {
      const x = 30 + i * 120;
      shelters += '<rect x="' + x + '" y="112" width="96" height="6" fill="#2a3a4a"/><rect x="' + (x + 4) + '" y="118" width="3" height="60" fill="#5a6a7a"/><rect x="' + (x + 89) + '" y="118" width="3" height="60" fill="#5a6a7a"/>' +
        '<rect x="' + (x + 8) + '" y="120" width="80" height="44" fill="#bfe2f0" opacity=".25"/><rect x="' + (x + 10) + '" y="113" width="76" height="3" fill="' + GOLD + '" class="sfr-glow' + (i % 2 ? " sfr-g2" : "") + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#sfr1)"/>' +
      '<g class="sfr-cl"><ellipse cx="80" cy="30" rx="38" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="42" ry="9" fill="#fff" opacity=".5"/></g>' +
      ridges(86, "#5b7a8a", "#4a6a4a") +
      '<g fill="#8a96a2"><rect x="10" y="70" width="34" height="80"/><rect x="48" y="52" width="26" height="98"/><rect x="300" y="60" width="40" height="90"/><rect x="346" y="78" width="30" height="72"/></g>' +
      '<g fill="#cfe0ea" opacity=".6">' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + (i % 2) * 14) + '" y="' + (78 + Math.floor(i / 2) * 16) + '" width="8" height="8"/>').join("") + Array.from({ length: 8 }, (_, i) => '<rect x="' + (306 + (i % 2) * 18) + '" y="' + (68 + Math.floor(i / 2) * 18) + '" width="10" height="9"/>').join("") + '</g>' +
      /* black station sign */
      '<rect x="70" y="20" width="260" height="54" rx="4" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="216" y="44" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">City Center Station</text>' +
      '<text x="216" y="64" text-anchor="middle" ' + font + ' font-size="10" fill="#cfd6dc" letter-spacing="1">140 LAIDLEY ST</text>' +
      '<rect x="80" y="30" width="30" height="16" rx="8" fill="#1f4e79" stroke="#fff" stroke-width="1.2"/><text x="95" y="42" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">KRT</text>' +
      '<rect x="0" y="150" width="400" height="30" fill="#b8b2a6"/><rect x="0" y="178" width="400" height="4" fill="' + GOLD + '"/>' + shelters +
      '<rect x="0" y="182" width="400" height="78" fill="#3e4146"/><path d="M0 230h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      /* the KRT bus pulls in */
      '<g class="anim-train"><rect x="40" y="168" width="250" height="56" rx="10" fill="#f4f4f2" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="40" y="200" width="250" height="8" fill="#1f4e79"/><rect x="40" y="208" width="250" height="4" fill="' + GOLD + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 30) + '" y="176" width="24" height="20" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="262" y="176" width="24" height="34" rx="3" fill="#2a3a4a"/><rect x="258" y="170" width="30" height="5" fill="#111"/><text x="273" y="174.5" text-anchor="middle" ' + font + ' font-size="4.5" fill="' + GOLD + '">CITY CTR</text>' +
      '<circle cx="80" cy="226" r="11" fill="#111"/><circle cx="80" cy="226" r="4" fill="#888"/><circle cx="246" cy="226" r="11" fill="#111"/><circle cx="246" cy="226" r="4" fill="#888"/>' +
      '<rect x="284" y="212" width="6" height="5" fill="#ffe8a0" class="sfr-glow"/></g>',
      sky("sfr1", "#6fa8d8", "#f0e2c8"));
  }

  /* 2. The West Virginia State Capitol on the Kanawha River: buff limestone, the gilded dome, a sternwheeler paddling by */
  function sfrcapitol() {
    return svg(
      '<rect width="400" height="260" fill="url(#sfr2)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff2c8" opacity=".85"/>' +
      '<g class="sfr-cl"><ellipse cx="90" cy="34" rx="40" ry="9" fill="#fff" opacity=".55"/></g>' +
      ridges(110, "#6a8a9a", "#4f7350") +
      capitol(200, 170, 1, false) +
      '<rect x="0" y="170" width="400" height="10" fill="#5f8a4a"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3b6286"/>' +
      '<g class="sfr-rip"><path d="M0 196h40M60 204h50M140 192h40M230 214h60M300 200h50M370 222h50M20 240h60M150 236h50" stroke="#9cc4e4" stroke-width="1.5" opacity=".6"/></g>' +
      /* sternwheeler */
      '<g transform="translate(40 0)"><path d="M0 214h120l-10 14h-104z" fill="#f2f2ee"/><rect x="14" y="196" width="88" height="18" fill="#f2f2ee" stroke="#8a2a24" stroke-width="1.5"/><rect x="30" y="184" width="56" height="12" fill="#f2f2ee" stroke="#8a2a24" stroke-width="1.5"/>' +
      '<rect x="44" y="164" width="6" height="20" fill="#2a2a2a"/><rect x="62" y="164" width="6" height="20" fill="#2a2a2a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 14) + '" y="200" width="8" height="8" fill="#2a3a4a"/>').join("") +
      '<g class="sfr-spin"><circle cx="-6" cy="216" r="13" fill="none" stroke="#c0302a" stroke-width="3"/><path d="M-19 216h26M-6 203v26M-15 207l18 18M3 207l-18 18" stroke="#c0302a" stroke-width="2.5"/></g></g>' +
      note(330, 120, GOLD, "") + note(250, 70, "#fff", "sfr-nt2"),
      sky("sfr2", "#4f8ccc", "#f4d9b0"));
  }

  /* 3. Royal Street in the French Quarter, New Orleans, where she busked: iron-lace balconies, gas lamps, a washtub bass and guitar with the case open */
  function sfrquarter() {
    const balc = (x, y, w, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="3" fill="#1a1a1a"/>' + Array.from({ length: Math.floor(w / 6) }, (_, i) => '<path d="M' + (x + 3 + i * 6) + ' ' + (y + 3) + 'v14" stroke="#1a1a1a" stroke-width="1.2"/><circle cx="' + (x + 6 + i * 6) + '" cy="' + (y + 10) + '" r="2" fill="none" stroke="#1a1a1a" stroke-width=".8"/>').join("") + '<rect x="' + x + '" y="' + (y + 17) + '" width="' + w + '" height="2.5" fill="#1a1a1a"/>';
    const house = (x, w, c, tr) => '<rect x="' + x + '" y="40" width="' + w + '" height="150" fill="' + c + '"/>' +
      [0, 1, 2].map(i => '<rect x="' + (x + 10 + i * (w - 26) / 2) + '" y="56" width="12" height="34" fill="' + tr + '"/><rect x="' + (x + 10 + i * (w - 26) / 2) + '" y="120" width="12" height="40" fill="' + tr + '"/>').join("") +
      balc(x - 4, 92, w + 8) + balc(x - 4, 160, w + 8);
    const lamp = (x, cls) => '<rect x="' + (x - 1.5) + '" y="140" width="3" height="60" fill="#1a1a1a"/><path d="M' + (x - 7) + ' 140l3 -16h8l3 16z" fill="#1a1a1a"/><path d="M' + (x - 4) + ' 138l2 -11h4l2 11z" fill="#ffd27a" class="sfr-glow ' + (cls || "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfr3)"/>' +
      star(40, 20, 2, "#fff", "sfr-tw") + star(220, 14, 2, "#fff", "sfr-tw sfr-tw2") + star(370, 24, 2, "#fff", "sfr-tw") +
      house(0, 96, "#e8a0a0", "#2f5a4a") + house(100, 104, "#f2d27a", "#2f4a6a") + house(208, 92, "#8cc0b8", "#5a2a2a") + house(304, 96, "#c49ad8", "#2f5a4a") +
      '<rect x="0" y="190" width="400" height="12" fill="#9a948a"/><rect x="0" y="202" width="400" height="58" fill="#5a5450"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 202l-10 58" stroke="#4a4440" stroke-width="1"/>').join("") +
      lamp(60) + lamp(340, "sfr-g2") +
      /* street sign */
      '<rect x="160" y="120" width="70" height="16" rx="2" fill="#f4f0e4" stroke="#1a1a1a" stroke-width="1.5"/><text x="195" y="132" text-anchor="middle" ' + font + ' font-size="9" fill="#1a3a6a">RUE ROYALE</text>' +
      /* washtub bass */
      '<path d="M128 236l6 -26h40l6 26z" fill="#a8b0b8" stroke="#5a6068" stroke-width="2"/><path d="M134 222h40" stroke="#5a6068" stroke-width="1.5"/>' +
      '<rect x="152" y="150" width="4" height="62" fill="#8a5a30" transform="rotate(8 154 212)"/><path d="M162 152l-8 58" stroke="#f2f2ee" stroke-width="1"/>' +
      /* guitar on a stand */
      '<g transform="translate(240 0)"><path d="M20 236q-18 0 -16 -18q2 -10 10 -12q-6 -10 4 -16q10 -4 14 6q10 2 10 14q2 26 -22 26z" fill="#c07a3a" stroke="#5a3418" stroke-width="2"/><circle cx="22" cy="214" r="5" fill="#2a1a10"/><rect x="20" y="146" width="5" height="54" fill="#3a2410"/><rect x="18" y="140" width="9" height="10" rx="2" fill="#2a1a10"/></g>' +
      /* open case catching flowers */
      '<path d="M290 246h80l-6 -14h-68z" fill="#2a1a10"/><path d="M296 232h68" stroke="#a83a3a" stroke-width="3"/>' + flower(318, 236, 4, ROSE, "") + flower(340, 238, 4, CREAM, "") +
      flower(120, 40, 4, ROSE, "sfr-pt") + flower(260, 50, 4, CREAM, "sfr-pt sfr-pt2") + flower(380, 60, 4, ROSE, "sfr-pt sfr-pt3") +
      note(160, 140, GOLD, "") + note(270, 130, "#fff", "sfr-nt2") + note(100, 170, ROSE, "sfr-nt3"),
      sky("sfr3", "#1a2048", "#6a4a7a"));
  }

  /* 4. American Legion Post 82 on Gallatin Ave, East Nashville: Honky Tonk Tuesdays, string lights, the dance floor, where she fronted the house band */
  function sfrlegion() {
    let bulbs = "";
    for (let i = 0; i < 16; i++) { const x = 14 + i * 24; bulbs += '<circle cx="' + x + '" cy="' + (52 + Math.sin(i * 0.8) * 4 + (i % 4 === 1 || i % 4 === 2 ? 6 : 0)) + '" r="3" fill="#ffd27a" class="sfr-glow' + (i % 2 ? " sfr-g2" : "") + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#sfr4)"/>' +
      star(60, 20, 2, "#fff", "sfr-tw") + star(330, 16, 2.2, "#fff", "sfr-tw sfr-tw2") +
      bricks(30, 70, 340, 120, "#a85a3a", "#6a3018") +
      '<rect x="24" y="64" width="352" height="8" fill="#e8dcc8"/>' +
      '<path d="M0 46q100 20 200 4t200 4" stroke="#2a2a2a" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="110" y="80" width="180" height="26" rx="3" fill="#f4f0e4" stroke="#1a1a1a" stroke-width="2"/>' +
      '<text x="200" y="98" text-anchor="middle" ' + font + ' font-size="14" fill="#1a2a5a" letter-spacing="2">POST 82</text>' +
      '<rect x="130" y="112" width="140" height="22" rx="3" fill="#1a1210"/><text x="200" y="127" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + ROSE + '" class="sfr-blink">HONKY TONK TUESDAY</text>' +
      /* door and windows glowing */
      '<rect x="176" y="140" width="48" height="50" fill="#2a1a10"/><rect x="180" y="144" width="40" height="46" fill="' + GOLD + '" opacity=".6" class="sfr-glow"/>' +
      '<rect x="60" y="130" width="70" height="40" fill="#2a1a10"/><rect x="64" y="134" width="62" height="32" fill="' + GOLD + '" opacity=".5" class="sfr-glow sfr-g2"/>' +
      '<rect x="270" y="130" width="70" height="40" fill="#2a1a10"/><rect x="274" y="134" width="62" height="32" fill="' + GOLD + '" opacity=".5" class="sfr-glow"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4a50"/><rect x="0" y="188" width="400" height="4" fill="#d8d0c0"/>' +
      /* cowboy boots and a fiddle */
      '<g transform="translate(60 0)"><path d="M0 240v-30h12v18h14v12z" fill="#7a3a1a" stroke="#2a1208" stroke-width="2"/><path d="M30 240v-30h12v18h14v12z" fill="#7a3a1a" stroke="#2a1208" stroke-width="2"/><path d="M2 218h8M32 218h8" stroke="' + GOLD + '" stroke-width="2"/></g>' +
      '<g transform="rotate(-24 320 220)"><path d="M310 234q-12 -6 -6 -16q-6 -8 2 -14q10 -4 14 4q8 4 4 14q4 10 -8 12q-4 0 -6 0z" fill="#a8562a" stroke="#4a2410" stroke-width="2"/><rect x="312" y="176" width="3" height="28" fill="#2a1a10"/></g>' +
      note(120, 180, GOLD, "") + note(270, 170, ROSE, "sfr-nt2") + note(200, 60, "#fff", "sfr-nt3"),
      sky("sfr4", "#141838", "#4a3a5a"));
  }

  /* 5. Her corner in downtown Charleston: Capitol St and Quarrier St, a brick wall tagged SIERRA FERRELL, the gold Capitol dome behind */
  function sfrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sfr5)"/>' +
      '<circle cx="80" cy="44" r="16" fill="#ffe0a0" opacity=".9"/>' +
      ridges(96, "#4a5a6a", "#35503a") +
      capitol(150, 150, 0.62, true) +
      '<g fill="#5a6470"><rect x="230" y="80" width="40" height="70"/><rect x="40" y="96" width="30" height="54"/></g>' +
      bricks(0, 150, 400, 70, "#8a4a34", "#4a2418") +
      '<rect x="0" y="146" width="400" height="5" fill="#d8d0c0"/>' +
      tag("SIERRA FERRELL", 14, 194, 26, GOLD, -5) + tag("WEST BY GOD", 30, 214, 13, CREAM, -3) + tag("PRETTY MAGIC", 170, 214, 12, ROSE, -4) +
      flower(280, 190, 6, ROSE, "") + flower(298, 202, 5, CREAM, "") + flower(316, 188, 6, TEAL, "") +
      '<g class="sfr-sp"><circle cx="262" cy="200" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sfr-sp sfr-sp2"><circle cx="268" cy="194" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4a46"/><rect x="0" y="218" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="62" width="6" height="158" fill="#2f2f2f"/>' + sign(286, 62, 112, "CAPITOL ST") + sign(298, 88, 100, "QUARRIER ST"),
      sky("sfr5", "#1a2448", "#e09a6a"));
  }

  window.SCENES = { sfrstation: sfrstation, sfrcapitol: sfrcapitol, sfrquarter: sfrquarter, sfrlegion: sfrlegion, sfrcorner: sfrcorner };
})();
