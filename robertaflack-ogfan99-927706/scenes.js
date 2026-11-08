/* robertaflack scenes (Regions tab: Virginia; Green Valley (old Nauck), Arlington — born in Black Mountain NC 1937, moved to Green Valley around age 5).
   CSS classes and ids prefixed rf- (the page's own anim-train is kept on the train).
   1 Metrorail Pentagon City (Blue + Yellow lines): the underground coffered vault, a train pulling in.
   2 Hoffman-Boston High School on S Queen St, Arlington's only high school for Black students then; she finished at 15 and went to Howard on a music scholarship.
   3 Lomax AME Zion Church in Green Valley, where her mother played the organ and young Roberta played too: organ pipes and notes out the window.
   4 Capitol Hill, 1968: the brick pub on Pennsylvania Ave SE where she played nightly upstairs and got discovered (no name, no logo; a piano glowing in the upstairs window).
   5 24th Rd S & S Shirlington Rd at Nauck Town Square: green signs, ROBERTA tagged on the brick, the Air Force Memorial's three steel spires on the ridge behind.
   400 x 260 SVGs. No logos, no faces, any 9 drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.rf-flk{animation:rfflick 2.4s infinite}.rf-flk2{animation-delay:.9s}' +
    '@keyframes rfnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(44px,-84px);opacity:0}}.rf-note{animation:rfnote 4.2s linear infinite}.rf-n2{animation-delay:-1.4s}.rf-n3{animation-delay:-2.8s}' +
    '@keyframes rfsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.rf-sway{transform-box:fill-box;transform-origin:50% 100%;animation:rfsway 2.6s ease-in-out infinite}.rf-sw2{animation-delay:-1.3s}' +
    '@keyframes rfflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.92)}}.rf-flag{transform-box:fill-box;transform-origin:0 50%;animation:rfflag 1.4s ease-in-out infinite}' +
    '@keyframes rfglow{0%,100%{opacity:.5}50%{opacity:1}}.rf-glow{animation:rfglow 2.4s ease-in-out infinite}' +
    '@keyframes rfjet{0%{transform:translate(-60px,30px)}100%{transform:translate(470px,-50px)}}.rf-jet{animation:rfjet 10s linear infinite}' +
    '@keyframes rfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rf-sp{animation:rfspray 1.4s ease-out infinite}.rf-sp2{animation-delay:.45s}' +
    '@keyframes rfcloud{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.rf-cl{animation:rfcloud 9s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#e9c46a", CORAL = "#e76f51", TEAL = "#7fb7be", CREAM = "#f6efe0", BL = "#009cde", YL = "#ffd100", SIGN = "#0f6b3a";
  const note = (x, y, c, cls) => '<g class="rf-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="22" fill="' + c + '">&#9834;</text></g>';
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a33") + '"' + (lit ? ' class="rf-flk"' : '') + '/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + '" stroke="#f1e6d0" stroke-width="1"/>';
  const tree = (x, y, s, cls) => '<g class="rf-sway ' + (cls || "") + '"><rect x="' + (x - 2) + '" y="' + (y - 4) + '" width="4" height="' + (22 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (14 * s) + '" fill="#2f6b34"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (10 * s) + '" fill="#3a7d3f"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (10 * s) + '" fill="#3a7d3f"/></g>';
  const bullet = (x, y, txt, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="14" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="' + tc + '">' + txt + '</text>';

  /* 1. Metrorail Pentagon City: coffered vault, train pulling in */
  function rfstation() {
    let cof = "";
    for (let r = 0; r < 4; r++) for (let k = 0; k < 12; k++) cof += '<rect x="' + (k * 34 + (r % 2) * 0) + '" y="' + (8 + r * 22) + '" width="28" height="16" rx="2" fill="#6d5f4e" opacity="' + (0.55 + r * 0.1) + '"/>';
    const cars = '<g class="anim-train"><rect x="20" y="108" width="360" height="66" rx="8" fill="#c9ced4" stroke="#7d848c" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 50) + '" y="118" width="34" height="24" rx="3" fill="#1d2733"/>').join("") +
      '<rect x="20" y="148" width="360" height="5" fill="' + BL + '"/><rect x="20" y="154" width="360" height="3" fill="#c8102e"/><rect x="20" y="158" width="360" height="5" fill="#9aa1a8"/>' +
      '<rect x="190" y="112" width="22" height="58" fill="#aab1b8" stroke="#7d848c"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3b3128"/>' +
      '<path d="M0 0h400v100q-200 -40 -400 0z" fill="#8a7a64"/>' + cof +
      '<rect class="rf-glow" x="0" y="96" width="400" height="6" fill="#ffe6a8" opacity=".6"/>' +
      '<rect x="0" y="100" width="400" height="80" fill="#1a1612"/>' + cars +
      '<rect x="0" y="174" width="400" height="10" fill="#e8dcc0"/><g class="rf-flk"><rect x="0" y="180" width="400" height="3" fill="#ff5a3c"/></g>' +
      '<rect x="0" y="184" width="400" height="76" fill="#7a6a58"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="184" width="40" height="76" fill="' + (i % 2 ? "#85745f" : "#7a6a58") + '"/>').join("") +
      /* brown pylon with the M */
      '<rect x="16" y="120" width="26" height="110" fill="#5a3e2a"/><rect x="12" y="106" width="34" height="34" fill="#5a3e2a"/><text x="29" y="132" text-anchor="middle" ' + font + ' font-size="22" fill="#fff">M</text>' +
      '<rect x="22" y="134" width="14" height="3" fill="' + BL + '"/><rect x="22" y="138" width="14" height="3" fill="' + YL + '"/>' +
      '<rect x="70" y="196" width="270" height="50" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="86" y="218" ' + font + ' font-size="16" fill="#fff" letter-spacing="1">PENTAGON</text>' +
      '<text x="86" y="238" ' + font + ' font-size="16" fill="#f3e3c3" letter-spacing="1">CITY</text>' +
      bullet(280, 221, "BL", BL, "#fff") + bullet(314, 221, "YL", YL, "#111"));
  }

  /* 2. Hoffman-Boston High School */
  function rfschool() {
    let w = "";
    for (let k = 0; k < 8; k++) { w += win(30 + k * 24, 112, 14, 22, k % 3 === 0); w += win(30 + k * 24, 146, 14, 22, k % 4 === 1); }
    return svg(
      '<rect width="400" height="260" fill="url(#rfs2)"/>' +
      '<g class="rf-cl"><ellipse cx="80" cy="32" rx="36" ry="9" fill="#fff" opacity=".55"/><ellipse cx="320" cy="26" rx="40" ry="8" fill="#fff" opacity=".45"/></g>' +
      '<rect x="20" y="100" width="210" height="88" fill="#a64b31"/><rect x="16" y="94" width="218" height="8" fill="#e2d6bd"/>' + w +
      '<rect x="230" y="84" width="150" height="104" fill="#b2553a"/><rect x="226" y="78" width="158" height="8" fill="#e2d6bd"/>' +
      '<rect x="240" y="92" width="130" height="16" fill="#e2d6bd"/><text x="305" y="104" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2a1c" letter-spacing="1">HOFFMAN-BOSTON</text>' +
      '<rect x="282" y="140" width="46" height="48" fill="#3a2a22"/><path d="M305 140v48" stroke="#5a2a1c" stroke-width="2"/>' + win(246, 122, 14, 22, true) + win(346, 122, 14, 22, false) +
      '<rect x="236" y="0" width="2" height="78" fill="#ddd"/><g class="rf-flag"><rect x="238" y="4" width="26" height="14" fill="' + CORAL + '"/><rect x="238" y="9" width="26" height="4" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#5b8c3a"/><rect x="282" y="188" width="46" height="72" fill="#d9d1bf"/>' +
      tree(40, 200, 1, "") + tree(380, 196, 1.1, "rf-sw2") + tree(176, 204, .9, "rf-sw2") +
      '<rect x="60" y="222" width="96" height="24" rx="3" fill="#5a2a1c"/><text x="108" y="238" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">S QUEEN ST</text>' +
      '<rect x="196" y="222" width="74" height="24" rx="3" fill="#111" opacity=".85"/><text x="233" y="239" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">AGE 15</text>',
      sky("rfs2", "#7fbbe6", "#f6e2b0"));
  }

  /* 3. Lomax AME Zion Church, the organ going */
  function rfchurch() {
    const pipes = Array.from({ length: 9 }, (_, i) => { const h = 26 + Math.abs(4 - i) * -4 + 16; return '<rect x="' + (172 + i * 6.4) + '" y="' + (142 - h) + '" width="4.6" height="' + h + '" rx="2" fill="#d9b25a"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rfs3)"/>' +
      '<g class="rf-cl"><ellipse cx="70" cy="40" rx="34" ry="8" fill="#fff" opacity=".5"/></g>' +
      tree(40, 196, 1.3, "") + tree(366, 196, 1.3, "rf-sw2") +
      /* steeple + nave */
      '<rect x="176" y="20" width="48" height="60" fill="#f4f1ea"/><path d="M170 22l30 -22l30 22z" fill="#5d6a72"/><path d="M200 -2v-0" stroke="#fff"/>' +
      '<rect x="188" y="34" width="24" height="30" rx="12" fill="#2a2a33"/>' +
      '<rect x="96" y="78" width="208" height="122" fill="#9b3f2a"/><path d="M86 80l114 -40l114 40z" fill="#5d6a72"/>' +
      '<path d="M112 110q14 -18 28 0v46h-28z" fill="#9fd0e6" class="rf-flk"/><path d="M260 110q14 -18 28 0v46h-28z" fill="#e8b06a" class="rf-flk rf-flk2"/>' +
      /* big center window showing the organ */
      '<path d="M160 146v-50q40 -40 80 0v50z" fill="#ffe2a6"/>' + pipes + '<rect x="166" y="138" width="68" height="10" fill="#5a3a22"/>' +
      '<rect x="182" y="164" width="36" height="36" fill="#3a2a22"/><path d="M200 164v36" stroke="#5a2a1c" stroke-width="2"/>' +
      note(214, 104, CORAL, "") + note(170, 100, "#ffffff", "rf-n2") + note(236, 112, GOLD, "rf-n3") +
      '<rect x="0" y="200" width="400" height="60" fill="#8d877c"/><rect x="0" y="236" width="400" height="24" fill="#5b8c3a"/>' +
      '<rect x="18" y="148" width="96" height="44" rx="3" fill="#f7f1e1" stroke="#3a2a22" stroke-width="3"/><rect x="62" y="192" width="6" height="12" fill="#3a2a22"/>' +
      '<text x="66" y="164" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2a1c">LOMAX</text>' +
      '<text x="66" y="176" text-anchor="middle" ' + font + ' font-size="7.5" fill="#1b1b1b">A.M.E. ZION</text>' +
      '<text x="66" y="187" text-anchor="middle" ' + font + ' font-size="6.5" fill="#1b1b1b">24TH RD S</text>',
      sky("rfs3", "#86c0e6", "#fbe6b8"));
  }

  /* 4. Capitol Hill, 1968: the upstairs room */
  function rfhill() {
    const keys = Array.from({ length: 10 }, (_, i) => (i % 7 === 2 || i % 7 === 6) ? '' : '<rect x="' + (172 + i * 6) + '" y="100" width="3" height="5" fill="#111"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rfs4)"/>' +
      '<circle cx="340" cy="44" r="18" fill="#f6efe0" opacity=".85"/>' +
      /* neighbor rowhouses */
      '<rect x="0" y="70" width="110" height="130" fill="#6e3a2c"/><rect x="290" y="62" width="110" height="138" fill="#7b4a36"/>' +
      win(16, 86, 18, 26, true) + win(60, 86, 18, 26, false) + win(16, 132, 18, 26, false) + win(60, 132, 18, 26, true) +
      win(306, 80, 18, 26, false) + win(352, 80, 18, 26, true) + win(306, 128, 18, 26, true) + win(352, 128, 18, 26, false) +
      /* the pub: Victorian brick, bay window upstairs, green awning */
      '<rect x="110" y="50" width="180" height="150" fill="#8a3a28"/><rect x="104" y="44" width="192" height="10" fill="#d8cdb8"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (110 + i * 22.5) + '" y="54" width="10" height="6" fill="#d8cdb8"/>').join("") +
      '<path d="M150 70h100v52h-100z" fill="#ffd98a" class="rf-glow"/><path d="M150 70h100v52h-100z" fill="none" stroke="#e2d6bd" stroke-width="4"/><path d="M183 70v52M217 70v52" stroke="#e2d6bd" stroke-width="3"/>' +
      '<rect x="168" y="80" width="64" height="20" fill="#2a1c14"/><rect x="164" y="78" width="72" height="4" fill="#3a281c"/><rect x="168" y="100" width="64" height="8" fill="#fff"/>' + keys + '<rect x="170" y="108" width="4" height="14" fill="#2a1c14"/><rect x="226" y="108" width="4" height="14" fill="#2a1c14"/><rect x="190" y="84" width="20" height="10" fill="#f6efe0"/>' +
      note(212, 82, CORAL, "") + note(170, 80, "#ffffff", "rf-n2") + note(240, 88, GOLD, "rf-n3") +
      '<path d="M120 140h160l10 18h-180z" fill="#1f5a3a"/><path d="M110 158h180" stroke="#174a2f" stroke-width="3"/>' +
      '<rect x="130" y="164" width="60" height="36" fill="#ffcf7a" class="rf-flk"/><rect x="210" y="160" width="36" height="40" fill="#3a2a22"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3b3e44"/><rect x="0" y="200" width="400" height="10" fill="#8d877c"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="306" y="214" width="84" height="22" rx="3" fill="#111" opacity=".85"/><text x="348" y="229" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">PENN AVE SE</text>' +
      '<rect x="12" y="214" width="96" height="22" rx="3" fill="' + CORAL + '"/><text x="60" y="229" text-anchor="middle" ' + font + ' font-size="10" fill="#1b1b1b">UPSTAIRS, \'68</text>',
      sky("rfs4", "#0d1530", "#4a3a62"));
  }

  /* 5. 24th Rd S & S Shirlington Rd, Air Force Memorial spires behind */
  function rfcorner() {
    const bricks = Array.from({ length: 14 }, (_, r) => '<path d="M0 ' + (128 + r * 9) + 'h250" stroke="#5e2f22" stroke-width="1" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rfs5)"/>' +
      '<g class="rf-jet"><path d="M40 70l40 -5l7 -5l-3 7l15 2l-15 2l-22 8l3 -7z" fill="#f2f2f2" stroke="#8a8f99" stroke-width="1"/></g>' +
      /* ridge + the three spires */
      '<path d="M240 150q80 -26 160 -10v20h-160z" fill="#3c4a3a"/>' +
      '<path d="M300 146q6 -60 30 -118q-12 58 -20 118z" fill="url(#rfsteel)"/><path d="M322 146q4 -70 14 -126q2 66 -4 126z" fill="url(#rfsteel)"/><path d="M342 146q-2 -56 22 -110q-12 54 -12 110z" fill="url(#rfsteel)"/>' +
      '<rect x="0" y="122" width="250" height="138" fill="#8f3f2c"/>' + bricks +
      tag("ROBERTA", 16, 196, 46, GOLD, -7) + tag("GREEN VALLEY", 96, 228, 20, TEAL, -4) +
      '<g class="rf-sp"><circle cx="214" cy="188" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rf-sp rf-sp2"><circle cx="222" cy="192" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#9c978d"/><rect x="250" y="150" width="150" height="86" fill="#3b3e44"/><path d="M250 196h150" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="296" y="120" width="5" height="116" fill="#5a5a5a"/>' +
      '<rect x="256" y="112" width="88" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="300" y="125" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">24TH RD S</text>' +
      '<rect x="248" y="134" width="104" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="300" y="147" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">S SHIRLINGTON RD</text>',
      sky("rfs5", "#1b2a52", "#e79a6a") + '<linearGradient id="rfsteel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9aa3ae"/><stop offset=".5" stop-color="#f1f4f7"/><stop offset="1" stop-color="#7c8592"/></linearGradient>');
  }

  window.SCENES = { rfstation: rfstation, rfschool: rfschool, rfchurch: rfchurch, rfhill: rfhill, rfcorner: rfcorner };
})();
