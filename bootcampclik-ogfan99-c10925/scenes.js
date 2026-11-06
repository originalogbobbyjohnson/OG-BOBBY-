/* Boot Camp Clik game (NYC map, Brooklyn: Crown Heights at the Brownsville edge).
   0 the B14 stop at Eastern Pkwy & Buffalo Av (every nearby subway stop already belongs to another game);
   1 Zion Triangle in Brownsville, the old memorial plaza where Pitkin Av meets E New York Av (most of the Clik came up in the 'Ville);
   2 California, summer '96: the One Nation sessions, when 2Pac flew the Clik out west to record ("'Pac saw it, called us");
   3 the Crown Heights wall where the fans throw a party for Sean P every August, P! and RUCK on the wall, the DJ on the table;
   4 Buffalo Av & St Johns Pl: green street signs, the wall tagged BOOT CAMP CLIK in camo, the Eastern Parkway trees behind.
   All CSS classes prefixed bcc- . No logos, no faces, no 9s drawn. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bcccloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.bcc-cloud{animation:bcccloud 28s linear infinite}.bcc-cloud2{animation-duration:36s;animation-delay:-16s}' +
    '@keyframes bccflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.92)}}.bcc-flag{transform-box:fill-box;transform-origin:0% 50%;animation:bccflag 1.4s ease-in-out infinite}' +
    '@keyframes bccpigeon{0%,100%{transform:translateX(0)}50%{transform:translateX(18px)}}.bcc-pig{animation:bccpigeon 3s ease-in-out infinite}.bcc-pig2{animation-delay:-1.5s}' +
    '@keyframes bccsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.bcc-palm{transform-box:fill-box;transform-origin:50% 100%;animation:bccsway 3.2s ease-in-out infinite}.bcc-palm2{animation-delay:-1.6s}' +
    '@keyframes bccspin{to{transform:rotate(360deg)}}.bcc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bccspin 1.6s linear infinite}' +
    '@keyframes bccbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bcc-bob{animation:bccbob .55s ease-in-out infinite}.bcc-bob2{animation-delay:.27s}' +
    '@keyframes bccblink{0%,100%{opacity:.3}50%{opacity:1}}.bcc-bl{animation:bccblink 1.2s ease-in-out infinite}.bcc-bl2{animation-delay:.4s}.bcc-bl3{animation-delay:.8s}' +
    '@keyframes bccdrive{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.bcc-drive{animation:bccdrive 6s linear infinite}' +
    '@keyframes bccleaf{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bcc-leaf{animation:bccleaf 2.4s ease-in-out infinite}' +
    '@keyframes bccglow{0%,100%{opacity:.5}50%{opacity:1}}.bcc-glow{animation:bccglow 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" transform="rotate(' + (rot || -5) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="5.5" fill="' + col + '"/><rect x="' + (x - 5.5) + '" y="' + (y + 6) + '" width="11" height="18" rx="5" fill="' + col + '"/></g>';
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="26" ry="10"/><ellipse cx="16" cy="-7" rx="16" ry="10"/><ellipse cx="-14" cy="-4" rx="12" ry="8"/></g></g>';
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (176 - y) + '" fill="#5a3e28"/><g class="bcc-leaf"><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + 6) + '" r="' + r * .7 + '" fill="#4f8f45"/></g>';
  const GOLD = "#e8c547", OLIVE = "#6b8e23", ORANGE = "#d9481f", MTA = "#0039a6";

  /* 0. Eastern Pkwy & Buffalo Av: the B14 bus pulling in, the bus-stop pole with its route plate, the parkway's benches and big trees, the pre-war apartment houses behind */
  function bccStop() {
    let apts = "";
    [[0, 70, 90, "#b5794f"], [92, 54, 110, "#c9a77c"], [204, 64, 96, "#a8603f"], [302, 50, 98, "#bf8a5a"]].forEach(([x, y, w, c]) => {
      apts += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (176 - y) + '" fill="' + c + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#e8dcc4"/>';
      for (let yy = y + 14; yy < 150; yy += 20) for (let xx = x + 8; xx < x + w - 10; xx += 18) apts += '<rect x="' + xx + '" y="' + yy + '" width="10" height="12" fill="#f6e7b8" opacity=".85"/>';
    });
    let win = "";
    for (let x = 40; x < 250; x += 32) win += '<rect x="' + x + '" y="150" width="24" height="18" rx="2" fill="#1f2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bccst)"/>' +
      cloud(70, 30, .9, "bcc-cloud") + cloud(250, 20, .7, "bcc-cloud bcc-cloud2") + apts +
      tree(30, 120, 30) + tree(150, 112, 32) + tree(270, 118, 30) + tree(380, 114, 30) +
      /* benches on the mall */
      '<rect x="60" y="168" width="50" height="5" fill="#2f5a3a"/><rect x="200" y="168" width="50" height="5" fill="#2f5a3a"/>' +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="20" y="142" width="250" height="56" rx="8" fill="#f2f2f0" stroke="#7a828c" stroke-width="2"/>' + win +
        '<rect x="20" y="176" width="250" height="6" fill="' + MTA + '"/>' +
        '<rect x="246" y="148" width="20" height="24" rx="3" fill="#1f2a3a"/>' +
        '<rect x="226" y="134" width="40" height="10" rx="2" fill="#111"/><text x="246" y="142" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb400">B14</text>' +
        '<circle cx="62" cy="200" r="11" fill="#111"/><circle cx="62" cy="200" r="4" fill="#888"/><circle cx="226" cy="200" r="11" fill="#111"/><circle cx="226" cy="200" r="4" fill="#888"/>' +
        '<circle cx="266" cy="188" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* street + curb */
      '<rect x="0" y="198" width="400" height="10" fill="#b9b2a6"/><rect x="0" y="208" width="400" height="52" fill="#3d3a38"/><rect x="0" y="232" width="400" height="3" fill="#e8c547" opacity=".7"/>' +
      /* bus stop pole */
      '<rect x="318" y="96" width="5" height="104" fill="#7a828c"/><rect x="300" y="96" width="42" height="40" rx="3" fill="' + MTA + '"/>' +
      '<text x="321" y="113" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">B14</text><text x="321" y="127" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS STOP</text>' +
      person(346, 176, "#1a1a1a", "bcc-bob") + person(364, 178, "#4a3a2a", "bcc-bob bcc-bob2") +
      txt("EASTERN PKWY & BUFFALO AV", 200, 252, 11, "#fff", 'letter-spacing="2"'),
      sky("bccst", "#8cc2ea", "#f2d9b0"));
  }

  /* 1. Zion Triangle, Brownsville: the granite memorial on its little triangle where Pitkin Av meets E New York Av, the wreath, the flag, pigeons, the Pitkin Av storefronts behind */
  function bccZion() {
    let shops = "";
    [[0, "#b8513a"], [70, "#d6b48a"], [140, "#8a5a44"], [210, "#c4783c"], [280, "#a9a08f"], [350, "#b8513a"]].forEach(([x, c], i) => {
      shops += '<rect x="' + x + '" y="62" width="70" height="114" fill="' + c + '"/><rect x="' + x + '" y="62" width="70" height="5" fill="#e8dcc4"/>';
      shops += '<rect x="' + (x + 10) + '" y="76" width="14" height="16" fill="#f6e7b8"/><rect x="' + (x + 44) + '" y="76" width="14" height="16" fill="#f6e7b8"/>';
      shops += '<rect x="' + (x + 4) + '" y="138" width="62" height="12" fill="' + ["#d9481f", "#2a6f9a", OLIVE, "#7a1f2b", GOLD, "#2a6f9a"][i] + '"/><rect x="' + (x + 8) + '" y="150" width="54" height="26" fill="#2a2a30"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#bccz)"/>' +
      cloud(120, 30, .9, "bcc-cloud") + shops +
      /* the triangle plaza */
      '<path d="M0 260L60 176h280l60 84z" fill="#cfc8ba"/><path d="M60 176h280" stroke="#9e978a" stroke-width="3"/>' +
      tree(70, 140, 26) + tree(330, 140, 26) +
      /* memorial: curved granite wall + center stele */
      '<path d="M110 206q90-40 180 0v14H110z" fill="#a9a59c" stroke="#7f7b73" stroke-width="2"/>' +
      '<rect x="176" y="120" width="48" height="92" fill="#bdb8ad" stroke="#7f7b73" stroke-width="2"/><path d="M170 120h60l-6-10h-48z" fill="#a9a59c"/>' +
      '<circle cx="200" cy="148" r="13" fill="none" stroke="#5f7a4a" stroke-width="4"/><path d="M190 160l-6 8M210 160l6 8" stroke="#5f7a4a" stroke-width="3"/>' +
      '<rect x="184" y="176" width="32" height="3" fill="#7f7b73"/><rect x="188" y="184" width="24" height="3" fill="#7f7b73"/>' +
      /* flag */
      '<rect x="252" y="80" width="3" height="128" fill="#ddd"/><g class="bcc-flag"><rect x="255" y="82" width="36" height="22" fill="#b22234"/><rect x="255" y="86" width="36" height="3" fill="#fff"/><rect x="255" y="93" width="36" height="3" fill="#fff"/><rect x="255" y="82" width="15" height="11" fill="#3c3b6e"/></g>' +
      /* pigeons */
      '<g class="bcc-pig"><ellipse cx="128" cy="230" rx="7" ry="5" fill="#7a7f88"/><circle cx="134" cy="226" r="3" fill="#7a7f88"/></g>' +
      '<g class="bcc-pig bcc-pig2"><ellipse cx="270" cy="236" rx="7" ry="5" fill="#8a8f98"/><circle cx="276" cy="232" r="3" fill="#8a8f98"/></g>' +
      txt("ZION TRIANGLE · BROWNSVILLE", 200, 252, 11, "#2a2a2a", 'letter-spacing="2"'),
      sky("bccz", "#9cc7ea", "#efe2c8"));
  }

  /* 2. California, summer '96: the One Nation sessions out west, low studio house in the hills at sunset, palms swaying, the console glowing through the window */
  function bccWest() {
    const palm = (x, h, cls) => '<g class="bcc-palm ' + cls + '"><path d="M' + x + ' 190q4-' + (h / 2) + ' -2-' + h + '" stroke="#6b4a2b" stroke-width="6" fill="none"/>' +
      [[-30, -8], [-20, 10], [24, 10], [32, -6], [0, -22]].map(([dx, dy]) => '<path d="M' + (x - 2) + ' ' + (190 - h) + 'q' + dx / 2 + ' ' + (dy - 12) + ' ' + dx + ' ' + dy + '" stroke="#2f6b2f" stroke-width="6" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    let meters = "";
    for (let i = 0; i < 8; i++) meters += '<rect class="bcc-bl ' + (i % 3 === 1 ? "bcc-bl2" : i % 3 === 2 ? "bcc-bl3" : "") + '" x="' + (176 + i * 7) + '" y="146" width="4" height="12" fill="' + (i > 5 ? ORANGE : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bccw)"/>' +
      '<circle cx="300" cy="120" r="34" fill="#ffcc66"/>' +
      '<path d="M0 150q80-50 160-10t160-20t80 10V260H0z" fill="#8a5a6a"/><path d="M0 172q100-30 200-6t200-10V260H0z" fill="#6a4a5a"/>' +
      /* studio house */
      '<rect x="130" y="126" width="140" height="64" fill="#f2e2c4"/><path d="M122 128l78-28l78 28z" fill="#b5523a"/>' +
      '<rect x="166" y="140" width="68" height="26" fill="#1f1a2a"/>' + meters +
      '<rect x="146" y="150" width="14" height="40" fill="#5a3e28"/>' +
      palm(70, 120, "") + palm(340, 110, "bcc-palm2") + palm(100, 90, "bcc-palm2") +
      '<rect x="0" y="190" width="400" height="70" fill="#3a2a35"/><path d="M0 206h400" stroke="#e8c547" stroke-width="2" stroke-dasharray="18 14"/>' +
      txt("ONE NATION SESSIONS · CALIFORNIA", 200, 238, 12, GOLD, 'letter-spacing="1.5"'),
      sky("bccw", "#3b2a6a", "#f2955a"));
  }

  /* 3. The Crown Heights wall where the fans party for Sean P every August: P! and RUCK sprayed big, string lights, the DJ table with the record spinning, the crowd bouncing */
  function bccBlock() {
    let brick = "";
    for (let y = 40; y < 176; y += 10) for (let x = (y / 10) % 2 ? 0 : 16; x < 400; x += 32) brick += '<rect x="' + x + '" y="' + y + '" width="30" height="8" fill="#7e3b2c"/>';
    let lights = "";
    for (let i = 0; i < 20; i++) lights += '<circle class="bcc-bl ' + (i % 3 === 1 ? "bcc-bl2" : i % 3 === 2 ? "bcc-bl3" : "") + '" cx="' + (10 + i * 20) + '" cy="' + (34 + Math.round(8 * Math.sin(i / 3 * Math.PI))) + '" r="3" fill="' + [GOLD, ORANGE, "#7fd1b9"][i % 3] + '"/>';
    let crowd = "";
    const cols = ["#1a1a1a", "#3a2f2a", OLIVE, "#2a3a5a", "#5a2a2a", "#1a1a1a", "#4a4a2a", "#2a2a2a"];
    for (let i = 0; i < 12; i++) crowd += person(30 + i * 32, 196 + (i % 2) * 6, cols[i % cols.length], "bcc-bob" + (i % 2 ? " bcc-bob2" : ""));
    return svg(
      '<rect width="400" height="260" fill="#1a1012"/><rect x="0" y="36" width="400" height="140" fill="#8e4433"/>' + brick +
      '<path d="M0 30q100 16 200 0t200 0" stroke="#333" stroke-width="1.5" fill="none"/>' + lights +
      tag("P!", 120, 140, 74, GOLD, -8) + tag("RUCK", 270, 120, 40, "#7fd1b9", -4) + tag("BROWNSVILLE TO CROWN HEIGHTS", 270, 158, 13, "#fff", -3) + tag("BCC", 50, 80, 22, ORANGE, -10) +
      /* DJ table */
      '<rect x="150" y="176" width="100" height="22" fill="#2a2a2a" stroke="#555"/><circle class="bcc-spin" cx="178" cy="182" r="9" fill="#111" stroke="#444"/><circle cx="178" cy="182" r="3" fill="' + ORANGE + '"/><circle class="bcc-spin" cx="222" cy="182" r="9" fill="#111" stroke="#444"/><circle cx="222" cy="182" r="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#3d3a38"/>' + crowd +
      txt("FOR SEAN P · EVERY AUGUST · CROWN HEIGHTS", 200, 250, 10, "#fff", 'letter-spacing="1.5"'));
  }

  /* 4. Buffalo Av & St Johns Pl: green street signs, the camo wall tagged BOOT CAMP CLIK, the Eastern Parkway trees behind, a streetlight, a car rolling by */
  function bccCorner() {
    const blade = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#0f6e3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + t + '</text>';
    let camo = "";
    const cc = ["#556b2f", "#3a4a1a", "#8a7a4a", "#6b8e23"];
    for (let i = 0; i < 40; i++) camo += '<ellipse cx="' + ((i * 53) % 400) + '" cy="' + (128 + (i * 37) % 84) + '" rx="' + (16 + (i % 4) * 5) + '" ry="' + (8 + (i % 3) * 3) + '" fill="' + cc[i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bccc)"/>' +
      cloud(300, 30, .8, "bcc-cloud") +
      tree(40, 70, 34, "#2f6a2f") + tree(130, 62, 38, "#2f6a2f") + tree(230, 68, 36, "#2f6a2f") + tree(330, 60, 40, "#2f6a2f") +
      '<rect x="0" y="120" width="400" height="94" fill="#6b8e23"/>' + camo +
      tag("BOOT CAMP", 170, 168, 34, GOLD, -5) + tag("CLIK", 300, 196, 34, ORANGE, -3) + tag("BUCKTOWN", 330, 146, 14, "#fff", 6) +
      '<rect x="0" y="214" width="400" height="12" fill="#b9b2a6"/><rect x="0" y="226" width="400" height="34" fill="#3d3a38"/>' +
      '<g class="bcc-drive"><rect x="0" y="230" width="60" height="18" rx="5" fill="#7a1f2b"/><rect x="10" y="224" width="36" height="10" rx="3" fill="#7a1f2b"/><circle cx="14" cy="248" r="5" fill="#111"/><circle cx="46" cy="248" r="5" fill="#111"/></g>' +
      '<rect x="34" y="70" width="5" height="148" fill="#5a5f66"/>' + blade(10, 66, 90, "Buffalo Av") + blade(12, 88, 96, "St Johns Pl") +
      '<rect x="370" y="60" width="4" height="158" fill="#5a5f66"/><path d="M372 62q-20 0-24 8" stroke="#5a5f66" stroke-width="4" fill="none"/><ellipse class="bcc-glow" cx="348" cy="72" rx="9" ry="4" fill="#fff3b0"/>',
      sky("bccc", "#f2a65a", "#5a3a5a"));
  }

  window.SCENES = { bccStop, bccZion, bccWest, bccBlock, bccCorner };
})();
