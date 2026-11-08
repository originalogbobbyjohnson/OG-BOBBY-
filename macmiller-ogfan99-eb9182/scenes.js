/* macmiller scenes (Regions tab: Philadelphia region; Pittsburgh - Point Breeze). CSS classes and ids prefixed mm- (the page's own anim-train is kept).
   1 The 71C Point Breeze bus pulling up to the Penn Ave at Lang Ave stop, brick row houses and porches behind (the bus rides in with anim-train).
   2 Frick Park Market on Reynolds St in Point Breeze ("Anything you need, you can find it at the market"): the little brick corner store, the green awning, the deli sign, the OPEN sign flickering.
   3 Blue Slide Park in Frick Park (Beechwood Blvd), the playground the album is named after: the long blue slide down the hillside, autumn trees, a ball rolling down the slide.
   4 ID Labs in Lawrenceville, the studio where he recorded so much: the brick building, the colorful mural on its side (abstract shapes, no faces), a record spinning in the window.
   5 Forbes Ave and Murray Ave in Squirrel Hill: green signs, MAC tagged on the brick, the Cathedral of Learning's gray limestone tower up Forbes behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mm-flk{animation:mmflick 2.3s infinite}.mm-flk2{animation-delay:.8s}' +
    '@keyframes mmball{0%{transform:translate(0,0)}70%{transform:translate(150px,92px)}100%{transform:translate(200px,96px);opacity:0}}.mm-ball{animation:mmball 3s ease-in infinite}' +
    '@keyframes mmleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,210px) rotate(260deg)}}.mm-lf{transform-box:fill-box;animation:mmleaf 6s linear infinite}.mm-lf2{animation-delay:-2s}.mm-lf3{animation-delay:-4s}' +
    '@keyframes mmspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mmspin 2.4s linear infinite}' +
    '@keyframes mmglow{0%,100%{opacity:.45}50%{opacity:1}}.mm-glow{animation:mmglow 2.2s ease-in-out infinite}.mm-g2{animation-delay:-1.1s}' +
    '@keyframes mmcloud{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.mm-cloud{animation:mmcloud 30s linear infinite}.mm-cloud2{animation-delay:-15s}' +
    '@keyframes mmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mm-sp{animation:mmspray 1.4s ease-out infinite}.mm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mm-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#3d8fd6", GOLD = "#f5c542", CORAL = "#f07a5a", PRT = "#1d4f91";

  /* 1. 71C Point Breeze at Penn Ave and Lang Ave: the bus pulling in, the stop flag, porch-front brick houses */
  function mmbus() {
    const bus = '<g class="anim-train"><rect x="40" y="118" width="240" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="130" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="248" y="130" width="26" height="56" rx="2" fill="#24323e"/><rect x="40" y="166" width="240" height="7" fill="' + PRT + '"/><rect x="40" y="175" width="240" height="4" fill="' + GOLD + '"/>' +
      '<rect x="160" y="119" width="112" height="11" rx="2" fill="#111"/><text x="216" y="127.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">71C POINT BREEZE</text>' +
      '<circle cx="86" cy="200" r="12" fill="#222"/><circle cx="86" cy="200" r="5" fill="#9aa1a8"/><circle cx="236" cy="200" r="12" fill="#222"/><circle cx="236" cy="200" r="5" fill="#9aa1a8"/><circle cx="277" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mm1)"/>' +
      [0, 100, 200, 300].map((x, i) => '<rect x="' + x + '" y="44" width="100" height="96" fill="' + ["#9a5a40", "#8a6a50", "#a0583c", "#7a5e4a"][i] + '"/><path d="M' + x + ' 44l50 -24l50 24z" fill="#4a3a32"/>' +
        '<rect x="' + (x + 12) + '" y="58" width="26" height="26" fill="#2a3442"/><rect x="' + (x + 62) + '" y="58" width="26" height="26" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '"/>' +
        '<rect x="' + (x + 4) + '" y="94" width="92" height="6" fill="#e8e4dc"/><path d="M' + (x + 8) + ' 100v34M' + (x + 92) + ' 100v34" stroke="#e8e4dc" stroke-width="3"/>').join("") +
      '<rect x="0" y="140" width="400" height="20" fill="#bdb8ae"/><rect x="0" y="160" width="400" height="100" fill="#4e4e54"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="340" y="86" width="5" height="74" fill="#6b7178"/><rect x="320" y="66" width="46" height="34" rx="3" fill="' + PRT + '" stroke="#fff" stroke-width="1.5"/><text x="343" y="80" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">BUS STOP</text><text x="343" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">71C</text>',
      sky("mm1", "#8ec2ea", "#f2e2c8"));
  }

  /* 2. Frick Park Market: brick corner store, green awning with the name, deli sign, OPEN sign flickering, a newspaper box */
  function mmmarket() {
    return svg(
      '<rect width="400" height="260" fill="url(#mm2)"/>' +
      '<g fill="#6f9a52"><circle cx="20" cy="90" r="30"/><circle cx="380" cy="84" r="32"/></g>' +
      '<rect x="40" y="40" width="320" height="168" fill="#a8583e"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M40 ' + (48 + i * 8) + 'h320" stroke="#93492f" stroke-width=".8"/>').join("") +
      '<rect x="40" y="36" width="320" height="8" fill="#d8ccb4"/>' + [70, 160, 250].map(x => '<rect x="' + x + '" y="54" width="60" height="34" fill="#2a3442" stroke="#efe6d2" stroke-width="3"/>').join("") +
      '<path d="M36 96h328l-12 26H48z" fill="#1f6b3a"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (48 + i * 25) + ' 122l12 0l-3 8h-6z" fill="#1f6b3a"/>').join("") +
      '<text x="200" y="114" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="2">FRICK PARK MARKET</text>' +
      '<rect x="60" y="136" width="120" height="66" fill="#33424e" stroke="#efe6d2" stroke-width="3"/><rect x="220" y="136" width="56" height="72" fill="#3a2a22" stroke="#efe6d2" stroke-width="3"/><circle cx="268" cy="174" r="2.5" fill="#e8c860"/>' +
      '<rect x="292" y="136" width="56" height="66" fill="#33424e" stroke="#efe6d2" stroke-width="3"/>' +
      '<rect x="70" y="146" width="100" height="22" rx="2" fill="#f4ecd6"/><text x="120" y="161" text-anchor="middle" ' + font + ' font-size="10" fill="#7a2a1a">TURKEY SANDWICH</text>' +
      '<rect class="mm-flk" x="300" y="146" width="40" height="18" rx="4" fill="#e2463a"/><text class="mm-flk" x="320" y="159" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">OPEN</text>' +
      '<rect x="80" y="176" width="80" height="20" fill="#5a6a74"/><text x="120" y="190" text-anchor="middle" ' + font + ' font-size="8" fill="#e8f0f6">LETTUCE, TOMATO</text>' +
      '<rect x="0" y="208" width="400" height="14" fill="#cfc8b8"/><rect x="0" y="222" width="400" height="38" fill="#54524c"/>' +
      '<rect x="186" y="188" width="22" height="22" rx="2" fill="' + BLUE + '"/><rect x="189" y="192" width="16" height="8" fill="#dfeaf4"/>',
      sky("mm2", "#9cc8ea", "#f4ead6"));
  }

  /* 3. Blue Slide Park in Frick Park: the long blue slide down the hill, the stone steps, autumn trees, a ball rolling down */
  function mmslide() {
    const leaves = Array.from({ length: 9 }, (_, i) => '<ellipse class="mm-lf' + ["", " mm-lf2", " mm-lf3"][i % 3] + '" cx="' + (60 + i * 38) + '" cy="' + (6 + (i * 23) % 40) + '" rx="4" ry="2.5" fill="' + ["#e2874c", GOLD, "#c0502e"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mm3)"/>' +
      '<g class="mm-cloud"><ellipse cx="60" cy="40" rx="30" ry="10" fill="#fff" opacity=".8"/></g><g class="mm-cloud mm-cloud2"><ellipse cx="60" cy="26" rx="22" ry="8" fill="#fff" opacity=".7"/></g>' +
      [[30, 70, "#c8642e"], [90, 60, "#e0a030"], [330, 64, "#b84a2a"], [380, 76, "#d88a2a"], [260, 56, "#6f8a3a"]].map(([x, y, c]) => '<rect x="' + (x - 3) + '" y="' + (y + 20) + '" width="6" height="50" fill="#5a4030"/><circle cx="' + x + '" cy="' + y + '" r="28" fill="' + c + '"/>').join("") +
      '<path d="M0 120Q120 70 230 96T400 110V260H0z" fill="#5f8a40"/><path d="M0 170Q160 150 400 196V260H0z" fill="#4e7834"/>' +
      /* the slide: a long blue chute down the slope, rails, platform at the top */
      '<rect x="84" y="78" width="40" height="8" fill="#8a8f96"/><path d="M90 86v26M118 86v26" stroke="#8a8f96" stroke-width="3"/>' +
      '<path d="M104 86L300 206" stroke="' + BLUE + '" stroke-width="22" stroke-linecap="round"/><path d="M104 86L300 206" stroke="#7fb8ea" stroke-width="8" stroke-linecap="round"/>' +
      '<path d="M100 78L296 198M110 92L304 214" stroke="#2a6aa8" stroke-width="2.5"/>' +
      '<g class="mm-ball"><circle cx="110" cy="84" r="7" fill="' + CORAL + '" stroke="#8a2a1a" stroke-width="1.5"/></g>' +
      '<path d="M60 200h30v-8h30v-8h30" stroke="#9a948a" stroke-width="6" fill="none"/>' +
      leaves,
      sky("mm3", "#8ec2ea", "#e6f0f6"));
  }

  /* 4. ID Labs, Lawrenceville: brick studio building, the bright mural on its side (abstract blocks and circles, no faces), a record spinning in the window */
  function mmstudio() {
    return svg(
      '<rect width="400" height="260" fill="url(#mm4)"/>' +
      '<rect x="30" y="46" width="230" height="166" fill="#8e4a34"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M30 ' + (54 + i * 8) + 'h230" stroke="#7a3e2a" stroke-width=".8"/>').join("") +
      /* mural */
      '<rect x="40" y="58" width="210" height="140" fill="#20324a"/>' +
      '<circle cx="96" cy="118" r="40" fill="' + BLUE + '"/><circle cx="96" cy="118" r="24" fill="' + GOLD + '"/><rect x="140" y="70" width="40" height="110" fill="' + CORAL + '"/>' +
      '<path d="M186 190l50 -110l10 0l-46 110z" fill="#7bc8a4"/><rect x="50" y="168" width="80" height="20" fill="#e8e0f4"/><path d="M200 70h40v30h-40z" fill="#c070c8"/>' +
      tag("MOST DOPE", 54, 186, 18, "#fff", -3) +
      /* studio front */
      '<rect x="260" y="70" width="120" height="142" fill="#6e5a4c"/><rect x="256" y="64" width="128" height="8" fill="#3a2e26"/>' +
      '<rect x="276" y="86" width="88" height="60" fill="#151a22" stroke="#d8ccb4" stroke-width="3"/>' +
      '<g class="mm-spin"><circle cx="320" cy="116" r="24" fill="#111"/><circle cx="320" cy="116" r="18" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="320" cy="116" r="12" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="320" cy="116" r="7" fill="' + CORAL + '"/><rect x="319" y="110" width="2" height="5" fill="#fff"/></g>' +
      '<rect x="300" y="160" width="40" height="52" fill="#2a2420" stroke="#d8ccb4" stroke-width="2"/><rect class="mm-glow" x="282" y="150" width="76" height="6" rx="3" fill="#ff5a4a"/>' +
      '<rect x="0" y="212" width="400" height="12" fill="#c6c0b2"/><rect x="0" y="224" width="400" height="36" fill="#4e4c48"/>',
      sky("mm4", "#f2a65a", "#fbe0b8"));
  }

  /* 5. Forbes Ave and Murray Ave, Squirrel Hill: green signs, MAC tagged big on the brick, the Cathedral of Learning's gray limestone Gothic tower behind */
  function mmcorner() {
    const L = "#b6ae9c", Ld = "#9c9482";
    return svg(
      '<rect width="400" height="260" fill="url(#mm5)"/>' + stars(14) +
      /* Cathedral of Learning: stepped limestone tower with vertical ribs */
      '<rect x="160" y="34" width="56" height="110" fill="' + L + '"/><rect x="146" y="80" width="84" height="64" fill="' + L + '"/><rect x="128" y="112" width="120" height="32" fill="' + L + '"/>' +
      '<rect x="172" y="22" width="32" height="14" fill="' + L + '"/><rect x="180" y="12" width="16" height="12" fill="' + L + '"/><path d="M188 2v10" stroke="' + L + '" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (166 + i * 9) + ' 36v108" stroke="' + Ld + '" stroke-width="2"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect class="' + (i % 3 ? "" : "mm-glow") + '" x="' + (168 + (i % 3) * 14) + '" y="' + (50 + Math.floor(i / 3) * 22) + '" width="5" height="8" fill="#ffd98a"/>').join("") +
      '<g fill="#22263a"><rect x="0" y="96" width="100" height="48"/><rect x="270" y="88" width="56" height="56"/><rect x="332" y="104" width="68" height="40"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#8a4c36"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#7a402c" stroke-width="1"/>').join("") +
      tag("MAC", 22, 200, 66, BLUE, -6) + tag("MOST DOPE", 168, 178, 26, GOLD, -4) + tag("K.I.D.S.", 30, 220, 16, "#fff", -3) + tag("BLUE SLIDE PARK", 166, 214, 16, CORAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#57544e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(304, 98, 90, "Forbes Ave") + sign(300, 124, 98, "Murray Ave") +
      '<g class="mm-sp"><circle cx="130" cy="160" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="mm-sp mm-sp2"><circle cx="136" cy="154" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("mm5", "#121a36", "#6a5a9a"));
  }

  window.SCENES = { mmbus: mmbus, mmmarket: mmmarket, mmslide: mmslide, mmstudio: mmstudio, mmcorner: mmcorner };
})();
