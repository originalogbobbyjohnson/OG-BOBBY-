/* chingobling scenes (Regions tab: Houston + Texas; Park Place, Southeast Houston). CSS classes prefixed cbg- (the page's own anim-train is kept).
   1 METRO 40 Telephone/Heights bus pulling into the Telephone Rd / Park Place Blvd stop on the southeast side: wide road, live oaks, the stop sign with the 40.
   2 Trinity University, San Antonio (where Pedro Herrera DJ'd on the college radio station and made up Chingo Bling): the red-brick Murchison Tower on the hill, a radio wave pulsing.
   3 The tamale truck ("The Tamale Kingpin"; "tamales I still sell them"): a white food truck, a steaming pot, tamales in their husks, a hand-painted TAMALES sign.
   4 The flea market ("Shop at the swap meet, not the mall"; "flea markets to the red carpet"): rows of stalls under striped awnings, piñatas, ostrich boots, a crate of mextapes.
   5 Telephone Rd and Park Place Blvd: green street signs, CHINGO BLING tagged on the wall, the Orange Show's painted folk-art towers and spinning wheels behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cbgcloud{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.cbg-cloud{animation:cbgcloud 28s linear infinite}' +
    '@keyframes cbgleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.cbg-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:cbgleaf 3s ease-in-out infinite}' +
    '@keyframes cbgwave{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.cbg-wave{transform-box:fill-box;transform-origin:50% 50%;animation:cbgwave 2.2s ease-out infinite}.cbg-w2{animation-delay:-1.1s}' +
    '@keyframes cbgsteam{0%{transform:translateY(0) scale(.8);opacity:.8}100%{transform:translateY(-34px) scale(1.4);opacity:0}}.cbg-steam{transform-box:fill-box;transform-origin:50% 100%;animation:cbgsteam 2s ease-out infinite}.cbg-s2{animation-delay:-.7s}.cbg-s3{animation-delay:-1.4s}' +
    '@keyframes cbgswing{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.cbg-swing{transform-box:fill-box;transform-origin:50% 0%;animation:cbgswing 2.2s ease-in-out infinite}.cbg-sw2{animation-delay:-1.1s}' +
    '@keyframes cbgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.cbg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:cbgspin 4s linear infinite}.cbg-spin2{animation-duration:6s;animation-direction:reverse}' +
    '@keyframes cbgblink{0%,49%{opacity:1}50%,100%{opacity:.25}}.cbg-blink{animation:cbgblink 1.2s steps(1) infinite}' +
    '@keyframes cbgsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.cbg-sp{animation:cbgsp 1.4s ease-out infinite}.cbg-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".9"><ellipse cx="0" cy="0" rx="26" ry="10"/><ellipse cx="14" cy="-8" rx="16" ry="10"/><ellipse cx="-12" cy="-6" rx="14" ry="8"/></g>';
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-5" y="0" width="10" height="44" fill="#5b4632"/><path d="M-5 12l-18 -10M5 10l18 -12" stroke="#5b4632" stroke-width="5"/><g class="cbg-leaf"><ellipse cx="0" cy="-8" rx="44" ry="22" fill="#3f6b35"/><ellipse cx="-22" cy="-16" rx="22" ry="14" fill="#4d7d40"/><ellipse cx="22" cy="-14" rx="20" ry="12" fill="#4d7d40"/></g></g>';
  const METRO = "#1f4e79", GOLD = "#f2c230", RED = "#d83a2e", GREEN = "#2f9e4f", CREAM = "#f6ecd2";
  const tamale = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><path d="M-14 0q14 -9 28 0q-14 9 -28 0z" fill="#e9d18a" stroke="#a88a3c" stroke-width="1.2"/><path d="M-8 0h16" stroke="#c98a3a" stroke-width="3" stroke-linecap="round"/></g>';

  /* 1. METRO 40 Telephone/Heights at Telephone Rd / Park Place Blvd */
  function cbgstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="146" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="136" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="146" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="176" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="186" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="138" width="150" height="10" rx="2" fill="#111"/><text x="36" y="146" ' + font + ' font-size="7.5" fill="#ffb84a">40  TELEPHONE / HEIGHTS</text>' +
      '<circle cx="80" cy="208" r="12" fill="#222"/><circle cx="80" cy="208" r="5" fill="#9aa1a8"/><circle cx="294" cy="208" r="12" fill="#222"/><circle cx="294" cy="208" r="5" fill="#9aa1a8"/>' +
      '<circle cx="340" cy="196" r="3.5" fill="#fff6c2"/></g>';
    const poles = [30, 150, 270].map(x => '<rect x="' + x + '" y="60" width="3" height="66" fill="#6b5a48"/><rect x="' + (x - 12) + '" y="64" width="27" height="3" fill="#6b5a48"/>').join("") + '<path d="M18 66Q90 76 150 66T270 66T400 66" stroke="#333" stroke-width="1" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cbg1)"/><g class="cbg-cloud">' + cloud(60, 40, 1) + cloud(240, 26, .8) + '</g>' + poles +
      '<rect x="0" y="120" width="400" height="20" fill="#86b35e"/>' + oak(46, 112, .9) + oak(212, 110, .7) + oak(330, 114, .8) +
      '<rect x="0" y="140" width="400" height="80" fill="#5c5d63"/><path d="M0 214h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' + bus +
      '<rect x="0" y="216" width="400" height="44" fill="#b9b3a6"/>' +
      '<rect x="372" y="94" width="5" height="122" fill="#6b7178"/><rect x="352" y="80" width="44" height="34" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="374" y="93" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><text x="374" y="109" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">40</text>' +
      '<rect x="14" y="224" width="332" height="30" rx="3" fill="#111"/><text x="24" y="244" ' + font + ' font-size="12.5" fill="#fff">Telephone Rd / Park Place Blvd</text><rect x="292" y="230" width="44" height="18" rx="9" fill="' + METRO + '"/><text x="314" y="243.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">40</text>',
      sky("cbg1", "#6fb2e6", "#f6e3c2"));
  }

  /* 2. Trinity University's Murchison Tower, the college radio wave */
  function cbgtrinity() {
    const brick = "#b5482f", trim = "#e8dcc4";
    const tower = '<rect x="176" y="40" width="48" height="160" fill="' + brick + '"/>' +
      Array.from({ length: 14 }, (_, r) => '<path d="M176 ' + (52 + r * 10) + 'h48" stroke="#963a25" stroke-width="1"/>').join("") +
      '<rect x="170" y="34" width="60" height="10" fill="' + trim + '"/><rect x="182" y="46" width="36" height="34" fill="#7a2d1d"/>' +
      [0, 1, 2].map(i => '<rect x="' + (186 + i * 11) + '" y="50" width="7" height="26" rx="3.5" fill="#2a1a12"/>').join("") +
      '<path d="M174 34l26 -18l26 18z" fill="#8a3522"/><rect x="198" y="6" width="4" height="12" fill="#888"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (188 + (i % 2) * 18) + '" y="' + (96 + Math.floor(i / 2) * 36) + '" width="6" height="18" fill="#2a1a12"/>').join("");
    const wing = (x, w) => '<rect x="' + x + '" y="150" width="' + w + '" height="50" fill="' + brick + '"/><rect x="' + x + '" y="146" width="' + w + '" height="6" fill="' + trim + '"/>' +
      Array.from({ length: Math.floor(w / 18) }, (_, i) => '<rect x="' + (x + 6 + i * 18) + '" y="160" width="9" height="16" fill="#3a2a22"/>').join("");
    const waves = '<g transform="translate(200 14)"><circle class="cbg-wave" cx="0" cy="0" r="11" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/><circle class="cbg-wave cbg-w2" cx="0" cy="0" r="11" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cbg2)"/><g class="cbg-cloud">' + cloud(80, 50, .9) + cloud(300, 34, .7) + '</g>' +
      '<path d="M0 200q200 -40 400 0v60H0z" fill="#79a85a"/>' + wing(60, 116) + wing(224, 116) + tower + waves +
      '<path d="M0 214q200 -20 400 0v46H0z" fill="#5f9446"/>' + oak(36, 188, .7) + oak(368, 190, .65) +
      '<rect x="90" y="224" width="220" height="22" rx="3" fill="#7a2d1d" stroke="' + trim + '" stroke-width="1.5"/><text x="200" y="239.5" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">TRINITY UNIVERSITY · SAN ANTONIO</text>',
      sky("cbg2", "#5fa6e2", "#fbe9c6"));
  }

  /* 3. The tamale truck */
  function cbgtruck() {
    const truck = '<g><rect x="60" y="92" width="230" height="104" rx="8" fill="#f4f4f0" stroke="#9aa0a6" stroke-width="2"/><rect x="290" y="122" width="62" height="74" rx="8" fill="#f4f4f0" stroke="#9aa0a6" stroke-width="2"/>' +
      '<path d="M300 130h40l8 26h-48z" fill="#2c3e50"/><rect x="60" y="176" width="292" height="8" fill="' + GREEN + '"/><rect x="60" y="184" width="292" height="4" fill="' + RED + '"/>' +
      '<rect x="84" y="112" width="150" height="50" rx="3" fill="#1d1d1d"/><path d="M78 110h162l-10 -14H88z" fill="' + RED + '"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (88 + i * 19) + ' 96l-4 14h19l4 -14z" fill="' + (i % 2 ? CREAM : RED) + '"/>').join("") +
      '<rect x="84" y="158" width="150" height="8" fill="#9aa0a6"/><text x="174" y="174" text-anchor="middle" ' + font + ' font-size="8" fill="#1d1d1d">PUERCO · POLLO · FRIJOL</text>' +
      '<rect x="94" y="60" width="160" height="30" rx="4" fill="' + GOLD + '" stroke="#7a5a12" stroke-width="2"/><text x="174" y="82" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + RED + '">TAMALES</text>' +
      '<circle cx="110" cy="200" r="15" fill="#222"/><circle cx="110" cy="200" r="6" fill="#bbb"/><circle cx="320" cy="200" r="15" fill="#222"/><circle cx="320" cy="200" r="6" fill="#bbb"/></g>';
    const pot = '<g transform="translate(160 150)"><path d="M-30 -14h60l-6 26h-48z" fill="#8c949c" stroke="#555" stroke-width="2"/><rect x="-34" y="-18" width="68" height="6" rx="3" fill="#6b737b"/>' +
      '<g class="cbg-steam"><ellipse cx="-14" cy="-26" rx="8" ry="6" fill="#fff" opacity=".8"/></g><g class="cbg-steam cbg-s2"><ellipse cx="2" cy="-28" rx="9" ry="6" fill="#fff" opacity=".8"/></g><g class="cbg-steam cbg-s3"><ellipse cx="16" cy="-26" rx="8" ry="6" fill="#fff" opacity=".8"/></g></g>';
    const tray = '<rect x="96" y="150" width="40" height="8" fill="#c9a24a"/>' + tamale(106, 147, .7) + tamale(124, 147, .7) + '<rect x="188" y="150" width="40" height="8" fill="#c9a24a"/>' + tamale(198, 147, .7) + tamale(216, 147, .7);
    return svg(
      '<rect width="400" height="260" fill="url(#cbg3)"/><g class="cbg-cloud">' + cloud(330, 40, .8) + '</g>' + oak(30, 150, .9) +
      '<rect x="0" y="196" width="400" height="64" fill="#a9a395"/><path d="M0 214h400" stroke="#d8d2c4" stroke-width="2"/>' + truck + tray + pot +
      '<rect x="120" y="226" width="160" height="22" rx="3" fill="#111"/><text x="200" y="241.5" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">THE TAMALE KINGPIN</text>',
      sky("cbg3", "#f6b26b", "#fde7c2"));
  }

  /* 4. The flea market: stalls, piñatas, boots, a crate of mextapes */
  function cbgflea() {
    const stall = (x, c1, c2) => '<g><rect x="' + x + '" y="110" width="104" height="86" fill="#efe6d3" stroke="#a89878" stroke-width="1.5"/>' +
      '<path d="M' + (x - 6) + ' 110h116l-8 -22H' + (x + 2) + 'z" fill="' + c1 + '"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (x + 4 + i * 22) + ' 88l-4 22h11l4 -22z" fill="' + c2 + '"/>').join("") +
      '<rect x="' + (x + 4) + '" y="166" width="96" height="30" fill="#8a6440"/></g>';
    const pinata = (x, c, cls) => '<g class="cbg-swing ' + (cls || "") + '"><path d="M' + x + ' 88v18" stroke="#555" stroke-width="1"/><g transform="translate(' + x + ' 116)">' +
      '<ellipse cx="0" cy="0" rx="12" ry="8" fill="' + c + '"/><rect x="6" y="-16" width="6" height="12" fill="' + c + '"/><path d="M-8 6v8M-2 7v8M4 7v8M9 6v8" stroke="' + c + '" stroke-width="3"/>' +
      '<path d="M-10 -2h20M-10 3h20" stroke="#fff" stroke-width="1.5" opacity=".7"/></g></g>';
    const boot = (x) => '<path d="M' + x + ' 150v-18h10v14l12 4v4h-22z" fill="#8a5a2b" stroke="#4a2e14" stroke-width="1.2"/><circle cx="' + (x + 5) + '" cy="140" r="1.4" fill="#c9a24a"/>';
    const tapes = '<g transform="translate(262 150)"><rect x="0" y="0" width="56" height="16" fill="#5a3c22"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (3 + i * 9) + '" y="-10" width="7" height="12" fill="' + ["#e8505b", GOLD, "#3aa0d8", GREEN, "#fff", RED][i] + '" stroke="#222" stroke-width=".8"/>').join("") +
      '<text x="28" y="12" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">MEXTAPES $5</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cbg4)"/><g class="cbg-cloud">' + cloud(60, 34, .8) + cloud(250, 22, .7) + '</g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#b8ac94"/>' + stall(20, RED, CREAM) + stall(148, GREEN, CREAM) + stall(276, "#2b73c2", GOLD) +
      pinata(48, "#e84393") + pinata(98, GOLD, "cbg-sw2") + pinata(310, "#3aa0d8", "cbg-sw2") + pinata(360, "#e67e22") +
      boot(160) + boot(184) + boot(208) + boot(232) + tapes +
      '<rect x="40" y="168" width="64" height="14" fill="' + CREAM + '"/><text x="72" y="178" text-anchor="middle" ' + font + ' font-size="7" fill="#7a2d1d">BOTAS · TEJANO</text>' +
      '<rect x="120" y="226" width="160" height="22" rx="3" fill="' + RED + '" stroke="#fff" stroke-width="1.5"/><text x="200" y="241.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">THE SWAP MEET</text>',
      sky("cbg4", "#67b0ea", "#fdf2d6"));
  }

  /* 5. Telephone Rd and Park Place Blvd, the Orange Show behind */
  function cbgcorner() {
    const show = '<g opacity=".95"><rect x="236" y="96" width="150" height="56" fill="#f2e4c8"/>' +
      '<path d="M236 96h150" stroke="' + RED + '" stroke-width="5"/><path d="M236 104h150" stroke="#2b73c2" stroke-width="3" stroke-dasharray="8 6"/>' +
      '<rect x="252" y="62" width="14" height="40" fill="#e87d1e"/><rect x="300" y="50" width="12" height="52" fill="' + GREEN + '"/><rect x="346" y="66" width="14" height="36" fill="#2b73c2"/>' +
      '<path d="M248 62h22l-11 -10z" fill="' + RED + '"/><path d="M296 50h20l-10 -12z" fill="' + GOLD + '"/><path d="M342 66h22l-11 -10z" fill="' + RED + '"/>' +
      '<g transform="translate(276 82)"><g class="cbg-spin"><circle r="11" fill="none" stroke="' + GOLD + '" stroke-width="3"/><path d="M-11 0h22M0 -11v22M-8 -8l16 16M8 -8l-16 16" stroke="' + RED + '" stroke-width="2"/></g></g>' +
      '<g transform="translate(330 80)"><g class="cbg-spin cbg-spin2"><circle r="9" fill="none" stroke="#e87d1e" stroke-width="3"/><path d="M-9 0h18M0 -9v18" stroke="#2b73c2" stroke-width="2"/></g></g>' +
      '<circle cx="306" cy="124" r="13" fill="#f28c28"/><path d="M306 111v-4" stroke="#3a7a2a" stroke-width="3"/><path d="M308 108q6 -4 10 0" stroke="#3a7a2a" stroke-width="3" fill="none"/>' +
      '<text x="311" y="148" text-anchor="middle" ' + font + ' font-size="7" fill="#7a2d1d">THE ORANGE SHOW</text></g>';
    const wall = '<rect x="0" y="120" width="226" height="98" fill="#d9c9a8"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (128 + r * 10) + 'h226" stroke="#bfae8a" stroke-width="1"/>').join("") +
      tag("CHINGO", 12, 168, 38, GOLD, -6) + tag("BLING", 70, 204, 34, RED, -4) + tag("BIG CHILE", 140, 214, 14, GREEN, -4) +
      '<circle class="cbg-sp" cx="214" cy="140" r="3" fill="' + GOLD + '"/><circle class="cbg-sp cbg-sp2" cx="219" cy="150" r="2.5" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cbg5)"/><g class="cbg-cloud">' + cloud(120, 36, .8) + '</g>' + show +
      '<rect x="0" y="152" width="400" height="66" fill="#7aa155"/>' + oak(386, 170, .5) + wall +
      '<rect x="0" y="218" width="400" height="42" fill="#4e4f55"/><path d="M0 242h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="20 14"/>' +
      '<rect x="270" y="150" width="6" height="72" fill="#6b7178"/>' + sign(222, 152, 128, "TELEPHONE RD") + sign(226, 178, 120, "PARK PLACE BLVD", 10.5),
      sky("cbg5", "#7fb8e8", "#f8d7a8"));
  }

  window.SCENES = { cbgstation: cbgstation, cbgtrinity: cbgtrinity, cbgtruck: cbgtruck, cbgflea: cbgflea, cbgcorner: cbgcorner };
})();
