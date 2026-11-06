/* King Sun game (NYC map, the Bronx). King Sun Born, the Mythological Rapper (with D-Moet, "Hey Love", 1987).
   0 the 2 and 5 pulling into Pelham Pkwy on the White Plains Rd el, 1 the Pelham Parkway bus stop at sunrise ("I see you early in the morning
   waiting for the bus" - Hey Love), 2 Profile Records at 740 Broadway (the label behind "XL" and "Fat Tape"), 3 the pier at Ferry Point Park
   at sunrise ("drop up to the pier and watch the sunrise" - Hey Love), 4 Wallace Av & Pelham Pkwy with the Universal Flag on the wall and the
   el behind. 400 x 260 SVGs. Classes prefixed ks-. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kscar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.ks-car{animation:kscar 7s linear infinite}.ks-car2{animation-delay:-3.5s}' +
    '@keyframes ksbus{0%{transform:translateX(-170px)}55%,100%{transform:translateX(0)}}.ks-bus{animation:ksbus 5s ease-out infinite}' +
    '@keyframes ksblink{0%,100%{opacity:.25}50%{opacity:1}}.ks-bl{animation:ksblink 1.6s ease-in-out infinite}.ks-bl2{animation-delay:.5s}.ks-bl3{animation-delay:1s}' +
    '@keyframes ksheart{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.ks-ht{animation:ksheart 3.6s ease-in infinite}.ks-ht2{animation-delay:-1.2s}.ks-ht3{animation-delay:-2.4s}' +
    '@keyframes ksrise{0%,100%{transform:translateY(6px)}50%{transform:translateY(-4px)}}.ks-sun{animation:ksrise 5s ease-in-out infinite}' +
    '@keyframes ksglint{0%,100%{opacity:.2}50%{opacity:.9}}.ks-gl{animation:ksglint 2.2s ease-in-out infinite}.ks-gl2{animation-delay:-.7s}.ks-gl3{animation-delay:-1.4s}' +
    '@keyframes ksgull{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.ks-gull{animation:ksgull 11s linear infinite}.ks-gull2{animation-delay:-5s}' +
    '@keyframes ksreel{to{transform:rotate(360deg)}}.ks-reel{transform-box:fill-box;transform-origin:50% 50%;animation:ksreel 1.4s linear infinite}' +
    '@keyframes ksbump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.ks-spk{transform-box:fill-box;transform-origin:50% 50%;animation:ksbump .45s ease-in-out infinite}' +
    '@keyframes ksnote{0%{transform:translate(0,0);opacity:0}25%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}.ks-note{animation:ksnote 2.4s ease-out infinite}.ks-note2{animation-delay:-.8s}.ks-note3{animation-delay:-1.6s}' +
    '@keyframes ksel{from{transform:translateX(430px)}to{transform:translateX(-330px)}}.ks-el{animation:ksel 7s linear infinite}' +
    '@keyframes ksray{to{transform:rotate(360deg)}}.ks-rays{transform-box:fill-box;transform-origin:50% 50%;animation:ksray 18s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const heart = (x, y, s, col, cls) => '<g class="' + (cls || "") + '"><path transform="translate(' + x + ' ' + y + ') scale(' + (s / 5) + ')" d="M0 5C-9 -1 -7 -9 0 -4C7 -9 9 -1 0 5Z" fill="' + col + '"/></g>';
  const RED = "#ee352e", GREEN = "#00933c", GOLD = "#ffc300", PINK = "#ff5d8f", CREAM = "#f4ead8";
  const bldg = (x, y, w, col, win) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (260 - y) + '" fill="' + col + '"/>';
    for (let yy = y + 8; yy < 200; yy += 13) for (let xx = x + 5; xx < x + w - 6; xx += 11) g += '<rect class="ks-bl ks-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="7" fill="' + (win || "#ffd98a") + '" opacity=".7"/>'; return g; };

  /* 1. Pelham Pkwy, elevated on the White Plains Rd line: canopy, black sign with the 2 and 5, the 2 train sliding in at dawn */
  function ksStation() {
    let win = "";
    for (let x = 26; x < 290; x += 32) win += '<rect x="' + x + '" y="118" width="20" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ksa)"/>' +
      bldg(0, 70, 70, "#6b3d2e") + bldg(78, 92, 56, "#7a4a36") + bldg(250, 80, 66, "#5e3a2c") + bldg(326, 60, 74, "#704231") +
      '<circle cx="200" cy="96" r="26" fill="#ffd27a" opacity=".55"/>' +
      /* canopy */
      '<path d="M0 30 L400 30 L400 44 L0 44 Z" fill="#3c4a44"/><path d="M0 44 L400 44 L400 48 L0 48 Z" fill="#26302b"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="44" width="6" height="128" fill="#3c4a44"/>').join("") +
      /* sign */
      '<rect x="88" y="56" width="224" height="30" rx="3" fill="#111"/><rect x="88" y="56" width="224" height="3" fill="#fff"/>' +
      '<text x="100" y="77" ' + font + ' font-size="15" fill="#fff">Pelham Pkwy</text>' +
      bullet(262, 72, "2", RED) + bullet(290, 72, "5", GREEN) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="8" y="106" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="288" y="114" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(296, 150, "2", RED) +
        '<rect x="8" y="142" width="278" height="4" fill="' + RED + '"/>' +
        '<circle cx="20" cy="154" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="164" width="400" height="8" fill="#eab308"/><rect x="0" y="172" width="400" height="88" fill="#6a6560"/>' +
      '<rect x="0" y="172" width="400" height="3" fill="#47433f"/>' +
      person(334, 198, "#1b1b1b") + person(356, 202, "#2a2a2a") +
      txt("WHITE PLAINS RD LINE", 150, 236, 11, CREAM, 'letter-spacing="3"'),
      sky("ksa", "#2a2147", "#f2a65a"));
  }

  /* 2. Pelham Parkway at sunrise: the tree-lined malls, a bus shelter, a city bus rolling up, hearts floating - "Hey Love" */
  function ksBus() {
    const tree = (x, y, s) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + s * 1.6 + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + (y - s * 0.2) + '" r="' + s + '" fill="#2f6b3a"/><circle cx="' + (x - s * 0.6) + '" cy="' + (y + s * 0.2) + '" r="' + s * 0.7 + '" fill="#3d8048"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ksb)"/>' +
      '<circle class="ks-sun" cx="300" cy="96" r="30" fill="#ffd166"/>' +
      bldg(0, 92, 54, "#7a4a36", "#ffe0a8") + bldg(60, 108, 46, "#6b3d2e", "#ffe0a8") + bldg(340, 100, 60, "#5e3a2c", "#ffe0a8") +
      [130, 175, 220, 265, 310].map((x, i) => tree(x, 128 + (i % 2) * 4, 14)).join("") +
      '<rect x="0" y="150" width="400" height="16" fill="#6aa84f"/>' +
      '<rect x="0" y="166" width="400" height="44" fill="#4b4d52"/><path d="M0 188h400" stroke="#f4d35e" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8a8c90"/><rect x="0" y="210" width="400" height="4" fill="#b8b9bc"/>' +
      /* the shelter */
      '<rect x="250" y="160" width="96" height="6" fill="#3a3f45"/><rect x="252" y="166" width="4" height="50" fill="#3a3f45"/><rect x="340" y="166" width="4" height="50" fill="#3a3f45"/>' +
      '<rect x="258" y="168" width="80" height="44" fill="#bfe3f2" opacity=".35"/>' +
      '<rect x="362" y="150" width="4" height="66" fill="#3a3f45"/><rect x="352" y="140" width="24" height="16" rx="2" fill="#1f5fa8"/>' + txt("BUS", 364, 152, 8, "#fff") +
      person(300, 182, "#1d1b26") +
      /* the bus */
      '<g class="ks-bus"><rect x="40" y="152" width="160" height="50" rx="6" fill="#e9eef3" stroke="#7a8590" stroke-width="2"/>' +
        '<rect x="40" y="186" width="160" height="6" fill="#1f5fa8"/>' +
        [52, 80, 108, 136, 164].map(x => '<rect x="' + x + '" y="160" width="22" height="20" rx="2" fill="#2a3644"/>').join("") +
        '<rect x="188" y="160" width="10" height="24" rx="2" fill="#2a3644"/><rect x="60" y="154" width="64" height="5" rx="1" fill="#ff8c1a"/>' +
        '<circle cx="70" cy="204" r="8" fill="#111"/><circle cx="172" cy="204" r="8" fill="#111"/><circle cx="196" cy="194" r="3" fill="#fff6c2"/></g>' +
      heart(120, 120, 7, PINK, "ks-ht") + heart(230, 110, 6, "#ff8fab", "ks-ht ks-ht2") + heart(300, 136, 5, PINK, "ks-ht ks-ht3") +
      txt("PELHAM PARKWAY", 200, 30, 13, CREAM, 'letter-spacing="4"') + tag("HEY LOVE", 22, 72, 24, PINK, -4),
      sky("ksb", "#3b2a5a", "#ffb877"));
  }

  /* 3. Profile Records, 740 Broadway: the cast-iron loft front, an XL record in the window, a boombox playing a fat tape on the sidewalk */
  function ksProfile() {
    let arches = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
      const x = 62 + c * 46, y = 30 + r * 34;
      arches += '<path d="M' + x + ' ' + (y + 26) + 'v-16a12 12 0 0 1 24 0v16z" fill="' + ((r + c) % 3 ? "#26303a" : "#ffd98a") + '" class="' + ((r + c) % 3 ? "" : "ks-bl ks-bl" + (c % 3 + 1)) + '"/>' +
        '<path d="M' + (x - 3) + ' ' + (y + 28) + 'h30" stroke="#e6dccb" stroke-width="2"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      '<rect x="40" y="14" width="320" height="176" fill="#c8b79a"/>' +
      [40, 92, 138, 184, 230, 276, 322, 356].map(x => '<rect x="' + x + '" y="14" width="4" height="176" fill="#a8977b"/>').join("") +
      '<rect x="34" y="8" width="332" height="8" fill="#a8977b"/>' + arches +
      /* ground floor */
      '<rect x="40" y="166" width="320" height="56" fill="#2a2f36"/>' +
      '<rect x="60" y="174" width="110" height="42" fill="#3b4652"/><rect x="230" y="174" width="110" height="42" fill="#3b4652"/>' +
      '<rect x="184" y="172" width="32" height="50" fill="#5a3d2a"/>' + txt("740", 200, 186, 10, "#f4ead8") +
      /* XL record in the window */
      '<circle cx="115" cy="195" r="17" fill="#111"/><circle cx="115" cy="195" r="6" fill="' + GOLD + '"/>' +
      '<text x="140" y="212" ' + font + ' font-size="16" fill="' + GOLD + '">XL</text>' +
      /* sidewalk */
      '<rect x="0" y="222" width="400" height="38" fill="#6c6e72"/><rect x="0" y="222" width="400" height="4" fill="#9a9c9f"/>' +
      /* boombox */
      '<g transform="translate(236 178)"><rect x="0" y="12" width="104" height="44" rx="5" fill="#2b2b2b" stroke="#888" stroke-width="2"/>' +
        '<path d="M14 12v-8h76v8" stroke="#888" stroke-width="3" fill="none"/>' +
        '<g class="ks-spk"><circle cx="20" cy="36" r="14" fill="#111" stroke="#666"/><circle cx="20" cy="36" r="5" fill="#555"/></g>' +
        '<g class="ks-spk"><circle cx="84" cy="36" r="14" fill="#111" stroke="#666"/><circle cx="84" cy="36" r="5" fill="#555"/></g>' +
        '<rect x="38" y="24" width="28" height="18" rx="2" fill="#d6d1c4"/><circle class="ks-reel" cx="46" cy="33" r="4" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="3 2"/><circle class="ks-reel" cx="58" cy="33" r="4" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="3 2"/>' +
        '<rect x="38" y="46" width="28" height="4" fill="' + RED + '"/></g>' +
      '<text class="ks-note" x="300" y="176" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="ks-note ks-note2" x="270" y="172" font-size="14" fill="#fff">&#9835;</text><text class="ks-note ks-note3" x="320" y="170" font-size="13" fill="' + PINK + '">&#9834;</text>' +
      tag("FAT TAPE", 30, 250, 20, GOLD, -3) + txt("PROFILE RECORDS", 200, 252, 9, CREAM, 'letter-spacing="3" opacity=".85"'));
  }

  /* 4. The pier at Ferry Point Park at sunrise: the sun coming up over the water, gulls, the railing - "drop up to the pier and watch the sunrise" */
  function ksPier() {
    let glints = "";
    for (let i = 0; i < 14; i++) glints += '<rect class="ks-gl ks-gl' + (i % 3 + 1) + '" x="' + (150 + (i * 37) % 120) + '" y="' + (150 + (i * 13) % 50) + '" width="' + (10 + i % 4 * 4) + '" height="2" fill="#ffe3a3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ksc)"/>' +
      '<g class="ks-sun"><circle cx="210" cy="132" r="34" fill="#ffd166"/><circle cx="210" cy="132" r="46" fill="#ffd166" opacity=".25"/></g>' +
      '<path d="M0 132 L60 128 L120 131 L170 129 L200 132 L260 128 L330 131 L400 129 L400 140 L0 140 Z" fill="#3c3a52"/>' +
      '<rect x="0" y="138" width="400" height="122" fill="#2c4a6b"/>' + glints +
      '<path class="ks-gull" d="M0 70q6-6 12 0q6-6 12 0" stroke="#2a2440" stroke-width="2" fill="none"/>' +
      '<path class="ks-gull ks-gull2" d="M0 52q5-5 10 0q5-5 10 0" stroke="#2a2440" stroke-width="2" fill="none"/>' +
      /* the pier */
      '<path d="M0 214 L250 176 L270 180 L40 260 L0 260 Z" fill="#8a6a4a"/>' +
      [[20, 222], [70, 214], [120, 206], [170, 198], [220, 190]].map(p => '<rect x="' + p[0] + '" y="' + (p[1] - 26) + '" width="4" height="28" fill="#4a3426"/>').join("") +
      '<path d="M22 196 L222 164" stroke="#4a3426" stroke-width="3"/><path d="M22 206 L222 174" stroke="#4a3426" stroke-width="2"/>' +
      '<g transform="translate(150 182)"><circle cx="0" cy="-22" r="6" fill="#1d1b26"/><rect x="-6" y="-15" width="12" height="20" rx="5" fill="#1d1b26"/></g>' +
      '<g transform="translate(166 180)"><circle cx="0" cy="-22" r="6" fill="#2a2338"/><rect x="-6" y="-15" width="12" height="20" rx="5" fill="#2a2338"/></g>' +
      heart(158, 140, 6, PINK, "ks-ht") +
      txt("FERRY POINT PARK", 300, 236, 12, CREAM, 'letter-spacing="3"'),
      sky("ksc", "#2b2350", "#ff9e6d"));
  }

  /* 5. Wallace Av & Pelham Pkwy: green signs, the wall tagged KING SUN with the Universal Flag painted on it, the 2/5 el rolling by behind */
  function ksCorner() {
    let rays = "";
    for (let i = 0; i < 8; i++) rays += '<path d="M0 -26 L5 -15 L-5 -15 Z" fill="' + GOLD + '" transform="rotate(' + i * 45 + ')"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ksd)"/>' +
      bldg(0, 36, 80, "#5e3a2c") + bldg(300, 30, 100, "#6b3d2e") +
      /* the el */
      '<rect x="0" y="70" width="400" height="12" fill="#3c4a44"/>' + [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="82" width="8" height="58" fill="#3c4a44"/>').join("") +
      '<g class="ks-el"><rect x="0" y="44" width="250" height="26" rx="3" fill="#c9ced6" stroke="#6b7280"/>' +
        [12, 44, 76, 108, 140, 172, 204].map(x => '<rect x="' + x + '" y="50" width="20" height="10" fill="#4b5563"/>').join("") + bullet(236, 57, "5", GREEN) + '</g>' +
      /* the wall */
      '<rect x="0" y="122" width="400" height="104" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 132; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      /* universal flag mural */
      '<rect x="20" y="134" width="96" height="66" fill="#f2f2f2" stroke="#111" stroke-width="2"/>' +
      '<g transform="translate(52 167)"><g class="ks-rays">' + rays + '</g><circle r="13" fill="' + GOLD + '"/></g>' +
      '<path d="M82 150a16 16 0 1 0 0 30a12 12 0 1 1 0-30z" fill="#d7263d"/>' +
      '<path d="M98 160l2.4 5 5.4.6-4 3.6 1.2 5.2-5-2.8-5 2.8 1.2-5.2-4-3.6 5.4-.6z" fill="#d7263d"/>' +
      '<text x="94" y="196" ' + font + ' font-size="14" fill="#111">7</text>' +
      tag("KING SUN", 126, 190, 46, GOLD, -5) + tag("SUNBORN", 136, 218, 18, PINK, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ks-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<g class="ks-car ks-car2"><rect x="0" y="240" width="40" height="11" rx="4" fill="#4cc9f0"/><circle cx="9" cy="251" r="4" fill="#111"/><circle cx="31" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="96" width="5" height="132" fill="#3d4b3f"/>' +
      '<rect x="296" y="98" width="100" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Wallace Av", 346, 113, 11, "#fff") +
      '<rect x="296" y="122" width="100" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Pelham Pkwy", 346, 137, 11, "#fff"),
      sky("ksd", "#0d0b1f", "#3a2b4a"));
  }

  window.SCENES = { ksStation: ksStation, ksBus: ksBus, ksProfile: ksProfile, ksPier: ksPier, ksCorner: ksCorner };
})();
