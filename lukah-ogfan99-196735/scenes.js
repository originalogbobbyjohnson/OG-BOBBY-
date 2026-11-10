/* lukah scenes (Regions tab: MEMPHIS + TENNESSEE; South Memphis / Soulsville - he grew up near Royal Studios, says Aretha Franklin is from his neighborhood; lived with his aunt and uncle in Chicago in middle school, where he started studying hip-hop history; Temple Needs Water. Village Needs Peace. with Real Bad Man). CSS classes and ids prefixed lk- (the page's own anim-train is kept).
   1 MATA Route 4 Walker bus pulling up on Willie Mitchell Blvd (S Lauderdale St) at Richmond Ave, by Royal Studios.
   2 Royal Studios, 1320 Willie Mitchell Blvd (built 1915 as the Shamrock Theater; Willie Mitchell's Hi Records studio since 1957): the old theater front, the vertical ROYAL sign glowing, notes floating out.
   3 Aretha Franklin's birthplace, 406 Lucy Ave in Soulsville: the small shotgun house with its porch, a historic marker out front, notes rising.
   4 Chicago, his middle-school years with his aunt and uncle: the L rumbling over the street on its steel trestle, a brick three-flat with a crate of records in the window.
   5 Willie Mitchell Blvd and Richmond Ave: green signs, LUKAH tagged with PEACE & LIGHT / BIG LUKAH / SOUTH MEMPHIS, a lotus and water drops (Temple Needs Water), the ROYAL sign glowing down the block.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(14px,-70px);opacity:0}}.lk-note{animation:lknote 3s ease-out infinite}.lk-n2{animation-delay:-1s}.lk-n3{animation-delay:-2s}' +
    '@keyframes lkglow{0%,100%{opacity:.55}50%{opacity:1}}.lk-glow{animation:lkglow 1.8s ease-in-out infinite}.lk-g2{animation-delay:-.9s}' +
    '@keyframes lkl{from{transform:translateX(460px)}to{transform:translateX(-420px)}}.lk-l{animation:lkl 7s linear infinite}' +
    '@keyframes lkleaf{0%{transform:translate(0,-10px) rotate(0)}100%{transform:translate(-30px,250px) rotate(260deg)}}.lk-leaf{transform-box:fill-box;animation:lkleaf 6s linear infinite}.lk-lf2{animation-delay:-2s}.lk-lf3{animation-delay:-4s}' +
    '@keyframes lkdrop{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(40px);opacity:0}}.lk-drop{animation:lkdrop 2s ease-in infinite}.lk-dr2{animation-delay:-.7s}.lk-dr3{animation-delay:-1.4s}' +
    '@keyframes lkcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.lk-car{animation:lkcar 8s linear infinite}' +
    '@keyframes lksp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lk-sp{animation:lksp 1.4s ease-out infinite}.lk-sp2{animation-delay:.45s}' +
    '@keyframes lktw{0%,100%{opacity:.3}50%{opacity:1}}.lk-tw{animation:lktw 2s ease-in-out infinite}.lk-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#e0b04a", NILE = "#3aa38a", TERRA = "#c2552e";
  const note = (x, y, cls, fill) => '<g class="lk-note ' + cls + '"><path d="M' + x + ' ' + y + 'v-16l10-3v16" stroke="' + fill + '" stroke-width="2" fill="none"/><circle cx="' + (x - 3) + '" cy="' + y + '" r="3.5" fill="' + fill + '"/><circle cx="' + (x + 7) + '" cy="' + (y - 3) + '" r="3.5" fill="' + fill + '"/></g>';
  const stars = () => [[30, 20], [90, 36], [150, 14], [220, 30], [300, 18], [370, 40]].map((p, i) => '<circle class="lk-tw' + (i % 2 ? ' lk-tw2' : '') + '" cx="' + p[0] + '" cy="' + p[1] + '" r="1.6" fill="#fff"/>').join("");
  /* the vertical ROYAL sign */
  const royal = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="0" y="0" width="26" height="92" rx="3" fill="#1d1a2b" stroke="' + GOLD + '" stroke-width="2"/>' +
    '<g class="lk-glow">' + "ROYAL".split("").map((c, i) => '<text x="13" y="' + (18 + i * 17) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#ff5a4a">' + c + '</text>').join("") + '</g></g>';

  /* 1. MATA Route 4 Walker at Willie Mitchell Blvd & Richmond Ave */
  function lkstop() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="128" width="32" height="22" rx="3" fill="#cfe8ff" opacity=".9"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="114" width="250" height="68" rx="9" fill="#f4f6f8" stroke="#7a8592" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="250" height="6" fill="#1f4e9c"/><rect x="40" y="162" width="250" height="4" fill="#f2b632"/>' +
      '<rect x="262" y="120" width="24" height="30" rx="3" fill="#cfe8ff"/><rect x="236" y="118" width="22" height="46" rx="2" fill="#dfe3e8" stroke="#7a8592"/>' +
      '<rect x="60" y="116" width="70" height="10" rx="2" fill="#111"/><text x="95" y="124" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">4 WALKER</text>' +
      '<circle cx="88" cy="184" r="11" fill="#222"/><circle cx="88" cy="184" r="4" fill="#888"/><circle cx="246" cy="184" r="11" fill="#222"/><circle cx="246" cy="184" r="4" fill="#888"/>' +
      '<circle cx="286" cy="172" r="4" fill="#fff6c2"/></g>';
    const shot = (x) => '<rect x="' + x + '" y="88" width="40" height="36" fill="#3b2f4a"/><path d="M' + (x - 4) + ' 90l24-20 24 20z" fill="#2c2238"/><rect x="' + (x + 6) + '" y="108" width="28" height="4" fill="#4a3c5a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lks1)"/>' + stars() + shot(0) + shot(306) + shot(354) +
      '<g opacity=".9">' + royal(356, 30, .6) + '</g>' +
      '<rect x="318" y="120" width="70" height="4" fill="#5a6470"/><rect x="320" y="124" width="3" height="66" fill="#5a6470"/><rect x="384" y="124" width="3" height="66" fill="#5a6470"/>' +
      bus +
      '<rect x="0" y="194" width="400" height="66" fill="#55524e"/><rect x="0" y="194" width="400" height="5" fill="#e6e1d6"/>' +
      '<path d="M0 226h400" stroke="#f2d06b" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="300" y="96" width="4" height="98" fill="#444"/><rect x="292" y="80" width="26" height="22" rx="3" fill="#1f4e9c"/><text x="305" y="96" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">4</text>' +
      '<rect x="16" y="208" width="262" height="40" rx="3" fill="#111"/><text x="28" y="226" ' + font + ' font-size="13" fill="#fff">Willie Mitchell Blvd</text><text x="28" y="242" ' + font + ' font-size="11" fill="#fff">&amp; Richmond Ave</text>' +
      '<rect x="230" y="219" width="34" height="18" rx="9" fill="#1f4e9c"/><text x="247" y="232" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">4</text>',
      sky("lks1", "#141030", "#5a3a5c"));
  }

  /* 2. Royal Studios */
  function lkroyal() {
    return svg(
      '<rect width="400" height="260" fill="url(#lks2)"/>' + stars() +
      '<rect x="0" y="120" width="90" height="80" fill="#3a2f2a"/><rect x="310" y="128" width="90" height="72" fill="#3a2f2a"/>' +
      '<rect x="100" y="70" width="200" height="130" fill="#d9c7a0"/><rect x="100" y="64" width="200" height="10" fill="#bfa67a"/>' +
      '<path d="M100 74h200" stroke="#a88f64" stroke-width="2"/>' +
      '<rect x="120" y="96" width="160" height="22" fill="#2a2430"/><g class="lk-glow lk-g2"><text x="200" y="112" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">RECORDING STUDIO</text></g>' +
      '<rect x="128" y="132" width="26" height="30" fill="#4a3a2a"/><rect x="246" y="132" width="26" height="30" fill="#4a3a2a"/>' +
      '<rect x="176" y="138" width="48" height="62" fill="#5a3a24"/><path d="M200 138v62" stroke="#3a2414" stroke-width="2"/>' +
      '<rect x="168" y="130" width="64" height="8" fill="#7a2a24"/>' +
      royal(286, 40, 1) +
      note(150, 90, "", "#ffe7a3") + note(230, 84, "lk-n2", "#ffe7a3") + note(190, 70, "lk-n3", "#ffe7a3") +
      '<rect x="0" y="200" width="400" height="60" fill="#55524e"/><rect x="0" y="200" width="400" height="4" fill="#e6e1d6"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6c8">ROYAL STUDIOS · WILLIE MITCHELL BLVD</text>',
      sky("lks2", "#1a1336", "#7a4a5a"));
  }

  /* 3. Aretha Franklin's birthplace, Lucy Ave */
  function lkaretha() {
    const leaves = [[60, 0, ""], [160, 10, "lk-lf2"], [260, -10, "lk-lf3"], [340, 5, ""], [110, 20, "lk-lf3"]]
      .map(p => '<g class="lk-leaf ' + p[2] + '"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="4" ry="2.2" fill="#d98a2b"/></g>').join("");
    let clap = "";
    for (let i = 0; i < 8; i++) clap += '<path d="M130 ' + (110 + i * 8) + 'h140" stroke="#9aa0a6" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lks3)"/>' +
      '<g fill="#3f6a3a"><circle cx="40" cy="110" r="40"/><circle cx="360" cy="104" r="44"/><circle cx="330" cy="130" r="30"/></g>' +
      '<path d="M120 104L200 56L280 104z" fill="#6b4a3a"/><rect x="130" y="104" width="140" height="70" fill="#d6dadf"/>' + clap +
      '<rect x="120" y="128" width="160" height="6" fill="#f2f2f2"/><path d="M128 134v40M200 134v40M272 134v40" stroke="#f2f2f2" stroke-width="4"/>' +
      '<rect x="186" y="140" width="28" height="34" fill="#3a5a7a"/><rect x="146" y="142" width="24" height="22" fill="#cfe2f2" stroke="#fff" stroke-width="2"/><rect x="230" y="142" width="24" height="22" fill="#cfe2f2" stroke="#fff" stroke-width="2"/>' +
      '<rect x="120" y="174" width="160" height="8" fill="#9a8a7a"/><rect x="186" y="182" width="28" height="6" fill="#8a7a6a"/><rect x="190" y="188" width="20" height="6" fill="#7a6a5a"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#5f8a4a"/><rect x="0" y="222" width="400" height="38" fill="#55524e"/>' +
      '<rect x="318" y="150" width="4" height="50" fill="#333"/><rect x="296" y="128" width="48" height="30" rx="3" fill="#2b4a2b" stroke="' + GOLD + '" stroke-width="2"/><path d="M304 138h32M304 146h32M304 152h20" stroke="' + GOLD + '" stroke-width="2"/>' +
      note(170, 104, "", "#fff") + note(220, 98, "lk-n2", "#ffd6e7") + note(250, 110, "lk-n3", "#fff") +
      leaves +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6c8">LUCY AVE · SOULSVILLE</text>',
      sky("lks3", "#8fc6e8", "#f6dcb0"));
  }

  /* 4. Chicago, the L over the street */
  function lkchicago() {
    let tres = "";
    for (let i = 0; i < 9; i++) tres += '<path d="M' + (10 + i * 48) + ' 112v88" stroke="#4a4a52" stroke-width="5"/><path d="M' + (10 + i * 48) + ' 120l24 22l24-22" stroke="#4a4a52" stroke-width="2" fill="none"/>';
    const car = (x) => '<rect x="' + x + '" y="72" width="120" height="36" rx="4" fill="#c9ced4" stroke="#7a828c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 8 + i * 22) + '" y="78" width="14" height="14" rx="2" fill="#2b3a4a"/>').join("") + '<rect x="' + x + '" y="96" width="120" height="4" fill="#c8302a"/>';
    const flat = '<rect x="250" y="122" width="120" height="78" fill="#8a4a33"/><rect x="246" y="118" width="128" height="6" fill="#d9c7a0"/>' +
      [0, 1, 2].map(i => '<rect x="' + (262 + i * 36) + '" y="134" width="22" height="24" fill="#ffe7a3"/>').join("") +
      '<rect x="262" y="170" width="94" height="20" fill="#5a3a24"/>' + [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (266 + i * 14) + '" y="160" width="12" height="12" fill="' + ["#111", GOLD, TERRA, NILE, "#111", "#8a6ad0"][i] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lks4)"/>' +
      '<g fill="#3a3f5a"><rect x="20" y="40" width="30" height="70"/><rect x="60" y="20" width="26" height="90"/><path d="M60 20l13-16 13 16z"/><rect x="96" y="50" width="34" height="60"/><rect x="140" y="30" width="22" height="80"/><rect x="170" y="56" width="30" height="54"/></g>' +
      flat + tres +
      '<rect x="0" y="106" width="400" height="8" fill="#3a3a42"/>' +
      '<g class="lk-l">' + car(0) + car(124) + '</g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55524e"/><path d="M0 232h400" stroke="#f2d06b" stroke-width="2" stroke-dasharray="18 14"/>' +
      note(316, 150, "", "#fff") + note(340, 146, "lk-n2", "#ffe7a3") +
      '<text x="120" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6c8">CHICAGO · MIDDLE SCHOOL YEARS</text>',
      sky("lks4", "#33405e", "#d98a6a"));
  }

  /* 5. Willie Mitchell Blvd and Richmond Ave */
  function lkcorner() {
    const lotus = '<g transform="translate(300 196)"><path d="M0 0q-20-10-26-30q16 4 26 20q10-16 26-20q-6 20-26 30z" fill="#e88aa8"/><path d="M0 0q-8-18 0-38q8 20 0 38z" fill="#f4b3c6"/><path d="M-34 6h68" stroke="' + NILE + '" stroke-width="4"/></g>' +
      '<g class="lk-drop"><path d="M300 140q-4 6 0 10q4-4 0-10z" fill="#9fdcff"/></g><g class="lk-drop lk-dr2"><path d="M288 146q-4 6 0 10q4-4 0-10z" fill="#9fdcff"/></g><g class="lk-drop lk-dr3"><path d="M312 144q-4 6 0 10q4-4 0-10z" fill="#9fdcff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lks5)"/>' + stars() +
      '<g fill="#2c2238"><rect x="40" y="78" width="16" height="44"/><rect x="62" y="64" width="22" height="58"/><rect x="90" y="86" width="20" height="36"/><rect x="200" y="70" width="26" height="52"/><rect x="232" y="84" width="20" height="38"/></g>' +
      royal(140, 30, .85) +
      '<rect x="0" y="120" width="400" height="104" fill="#8a4a33"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (120 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("LUKAH", 16, 190, 58, GOLD, -6) + tag("PEACE &amp; LIGHT", 30, 216, 18, "#bfe7d8", -3) + tag("BIG LUKAH", 232, 176, 17, "#ff9a7a", -5) + tag("SOUTH MEMPHIS", 170, 220, 14, "#fff3a0", -4) +
      '<g transform="translate(300 160) scale(.75) translate(-300 -160)"><g transform="translate(40 40)">' + lotus + '</g></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524e"/><rect x="0" y="222" width="400" height="4" fill="#e6e1d6"/>' +
      '<g class="lk-car"><rect x="0" y="238" width="62" height="14" rx="5" fill="' + TERRA + '"/><rect x="12" y="230" width="34" height="10" rx="3" fill="' + TERRA + '"/><rect x="16" y="232" width="12" height="6" fill="#bfe3ff"/><rect x="31" y="232" width="12" height="6" fill="#bfe3ff"/><circle cx="14" cy="252" r="5" fill="#111"/><circle cx="48" cy="252" r="5" fill="#111"/></g>' +
      '<rect x="356" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(250, 92, 146, "Willie Mitchell Blvd") + sign(250, 118, 146, "Richmond Ave") +
      '<g class="lk-sp"><circle cx="186" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lk-sp lk-sp2"><circle cx="192" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lks5", "#140f24", "#7a4a3a"));
  }

  window.SCENES = { lkstop: lkstop, lkroyal: lkroyal, lkaretha: lkaretha, lkchicago: lkchicago, lkcorner: lkcorner };
})();
