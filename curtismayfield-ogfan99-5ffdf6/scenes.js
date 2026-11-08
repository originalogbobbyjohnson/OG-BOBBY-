/* curtismayfield scenes (Regions tab: CHICAGO; GENRES: R&B. Born at Cook County Hospital in 1942, his family settled in the Cabrini-Green homes on the Near North Side in his teens). CSS classes prefixed cmy- (the page's own anim-train is kept).
   1 Chicago on the CTA Brown + Purple Lines, up on the 'L' at Chicago Ave and Franklin St, the stop for Cabrini-Green: steel structure, a silver 'L' train with brown trim sliding in, black station sign with the brown and purple line dots.
   2 The Travelling Souls Spiritualist Church, his grandmother's church, where he sang as a boy and met Jerry Butler in the choir: red-brick church front, an organ glowing inside, notes floating out.
   3 Wells High School on N Ashland Ave, the Near North Side school he left in his second year to go on the road with the Roosters (the Impressions): brick and limestone school, notebook pages blowing.
   4 Curtom, the label he started in Chicago in 1968 (offices on S Stony Island Ave): low brick building with CURTOM letters, gold records glowing in the window, a guitar on a stand (open F-sharp tuning).
   5 W Chicago Ave and N Larrabee St at the south edge of Cabrini-Green: green signs, CURTIS tagged on the wall, the huge Merchandise Mart down by the river behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cmyglow{0%,100%{opacity:.45}50%{opacity:1}}.cmy-glow{animation:cmyglow 2.4s ease-in-out infinite}.cmy-g2{animation-delay:-1.2s}' +
    '@keyframes cmynote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-24px,-70px);opacity:0}}.cmy-note{animation:cmynote 3.6s ease-out infinite}.cmy-n2{animation-delay:-1.2s}.cmy-n3{animation-delay:-2.4s}' +
    '@keyframes cmypage{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(220px,-60px) rotate(300deg);opacity:0}}.cmy-page{transform-box:fill-box;transform-origin:50% 50%;animation:cmypage 5s linear infinite}.cmy-p2{animation-delay:-2.5s}' +
    '@keyframes cmyspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.cmy-spin{transform-box:fill-box;transform-origin:50% 50%;animation:cmyspin 3s linear infinite}' +
    '@keyframes cmystring{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.04)}}.cmy-str{transform-box:fill-box;transform-origin:50% 50%;animation:cmystring .18s linear infinite}' +
    '@keyframes cmycar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.cmy-car{animation:cmycar 7s linear infinite}' +
    '@keyframes cmyflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-5deg)}}.cmy-flag{transform-box:fill-box;transform-origin:0% 50%;animation:cmyflag 1.8s ease-in-out infinite}' +
    '@keyframes cmyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cmy-sp{animation:cmyspray 1.4s ease-out infinite}.cmy-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "cmy-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="cmy-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const GOLD = "#f4b942", ORNG = "#e0562b", TEAL = "#6fb3a8", BRN = "#62361b", PRP = "#522398", BRICK = "#8a3a2a";

  /* 1. Chicago, Brown + Purple Lines, up on the 'L' at Chicago Ave & Franklin */
  function cmystation() {
    const car = x => '<rect x="' + x + '" y="96" width="150" height="62" rx="5" fill="#d6dbe2" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="146" width="150" height="5" fill="' + BRN + '"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="108" width="20" height="22" rx="2" fill="#20303f"/>').join("") +
      '<rect x="' + (x + 66) + '" y="104" width="18" height="40" fill="#b7bec8" stroke="#6b737e"/>';
    const train = '<g class="anim-train">' + car(40) + car(194) + '<rect x="314" y="104" width="28" height="12" rx="2" fill="#111"/><text x="328" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#e8a060">BROWN</text><circle class="cmy-glow" cx="338" cy="142" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cmy-s1)"/>' + stars(8) +
      /* Near North rooftops and the old towers below */
      '<rect x="0" y="200" width="400" height="60" fill="#30283a"/>' + [10, 70, 140, 250, 320].map((x, i) => '<rect x="' + x + '" y="' + (172 + (i % 2) * 12) + '" width="' + (50 + (i % 3) * 10) + '" height="90" fill="#43343a"/>').join("") +
      [20, 90, 270, 340].map((x, i) => [0, 1, 2].map(r => '<rect class="' + ((i + r) % 2 ? "cmy-glow" : "cmy-glow cmy-g2") + '" x="' + (x + r * 12) + '" y="' + (190 + (i % 2) * 6) + '" width="6" height="6" fill="#f4d58a"/>').join("")).join("") +
      /* 'L' platform canopy */
      '<rect x="0" y="66" width="400" height="10" fill="#3a2e26"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="76" width="6" height="88" fill="#4a3c30"/>').join("") +
      train +
      /* steel deck and girders */
      '<rect x="0" y="162" width="400" height="12" fill="#5a4a3a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 174l10 22l10 -22" stroke="#4a3c30" stroke-width="3" fill="none"/>').join("") +
      '<rect x="0" y="196" width="400" height="6" fill="#4a3c30"/>' + [60, 200, 340].map(x => '<rect x="' + x + '" y="202" width="10" height="58" fill="#4a3c30"/>').join("") +
      /* black CTA-style sign with the line dots */
      '<rect x="100" y="222" width="200" height="28" rx="3" fill="#111"/><text x="172" y="242" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">CHICAGO</text>' +
      '<circle cx="256" cy="236" r="9" fill="' + BRN + '" stroke="#fff" stroke-width="1"/><circle cx="280" cy="236" r="9" fill="' + PRP + '" stroke="#fff" stroke-width="1"/>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">BROWN + PURPLE LINE · CHICAGO AVE &amp; FRANKLIN · NEAR NORTH SIDE</text>',
      sky("cmy-s1", "#121a36", "#c86a46"));
  }

  /* 2. Travelling Souls Spiritualist Church, his grandmother's church */
  function cmychurch() {
    let bricks = ""; for (let r = 0; r < 13; r++) bricks += '<path d="M96 ' + (88 + r * 9) + 'h208" stroke="#6e2c20" stroke-width="1"/>';
    const robe = (x, c) => '<path d="M' + x + ' 212q0 -24 9 -28q9 4 9 28z" fill="' + c + '"/><circle cx="' + (x + 9) + '" cy="176" r="6" fill="#3a2418"/><rect x="' + (x + 3) + '" y="188" width="12" height="3" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cmy-s2)"/>' + stars(6) +
      '<rect x="0" y="212" width="400" height="48" fill="#7a7a7a"/><rect x="0" y="210" width="400" height="4" fill="#c8c8c8"/>' +
      tree(40, 204, 1.6, "#2f5a2a") + tree(362, 202, 1.7, "#2f5a2a") +
      /* brick church with a stepped gable */
      '<rect x="96" y="88" width="208" height="124" fill="' + BRICK + '"/>' + bricks +
      '<path d="M90 90h220l-20 -20h-180z" fill="#5a2018"/><path d="M160 70l40 -34l40 34z" fill="#5a2018"/>' +
      '<rect x="196" y="18" width="8" height="26" fill="' + GOLD + '"/><rect x="188" y="24" width="24" height="7" fill="' + GOLD + '"/>' +
      /* sign board */
      '<rect x="102" y="94" width="196" height="20" rx="2" fill="#f1e6c8" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="107.5" text-anchor="middle" ' + font + ' font-size="7.6" fill="#3a1a10">TRAVELLING SOULS SPIRITUALIST CHURCH</text>' +
      /* arched windows glowing */
      [112, 140, 238, 266].map((x, i) => '<path d="M' + x + ' 176v-38a10 10 0 0 1 20 0v38z" fill="' + [GOLD, TEAL, ORNG, PRP][i] + '" stroke="#e8e0d0" stroke-width="2"/><path class="cmy-glow ' + (i % 2 ? "cmy-g2" : "") + '" d="M' + x + ' 176v-38a10 10 0 0 1 20 0v38z" fill="#fff3c0" opacity=".35"/>').join("") +
      /* open double doors: organ pipes glowing, the choir in robes */
      '<rect x="166" y="142" width="68" height="70" fill="#2a160e"/><path d="M166 142a34 20 0 0 1 68 0z" fill="#3a2014"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="cmy-glow ' + (i % 2 ? "cmy-g2" : "") + '" x="' + (172 + i * 10) + '" y="' + (148 - (i % 3) * 5) + '" width="6" height="' + (24 + (i % 3) * 5) + '" fill="' + GOLD + '"/>').join("") +
      robe(170, "#6a2a7a") + robe(191, "#6a2a7a") + robe(212, "#6a2a7a") +
      note(250, 120, GOLD) + note(150, 112, "#fff", "cmy-n2") + note(206, 96, TEAL, "cmy-n3") + note(320, 140, GOLD, "cmy-n2") + note(80, 150, "#fff", "cmy-n3") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">GRANDMA\'S CHURCH · WHERE HE SANG AS A BOY</text>',
      sky("cmy-s2", "#1a1430", "#6a4a7a"));
  }

  /* 3. Wells High School, N Ashland Ave */
  function cmyschool() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="16" height="20" fill="#2a3a4a" stroke="#e8dcc0" stroke-width="2"/><path d="M' + (x + 8) + ' ' + y + 'v20M' + x + ' ' + (y + 10) + 'h16" stroke="#e8dcc0" stroke-width="1"/>';
    let wins = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) if (!(r === 2 && (c === 4 || c === 5))) wins += win(48 + c * 31, 84 + r * 36);
    return svg(
      '<rect width="400" height="260" fill="url(#cmy-s3)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#fff2b0" opacity=".9"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#8a8a8a"/><rect x="0" y="210" width="400" height="5" fill="#d0d0d0"/>' +
      /* long brick front with limestone bands */
      '<rect x="36" y="70" width="328" height="142" fill="#9a4a32"/>' +
      '<rect x="30" y="64" width="340" height="10" fill="#e6dcc2"/><rect x="36" y="116" width="328" height="4" fill="#e6dcc2"/><rect x="36" y="152" width="328" height="4" fill="#e6dcc2"/>' +
      wins +
      /* center entrance bay with stone surround */
      '<rect x="168" y="50" width="64" height="162" fill="#e6dcc2"/><rect x="176" y="58" width="48" height="14" fill="#9a4a32"/><text x="200" y="69" text-anchor="middle" ' + font + ' font-size="10" fill="#f6eedc">WELLS</text>' +
      '<rect x="180" y="160" width="40" height="52" fill="#3a2a1e"/><path d="M180 160a20 14 0 0 1 40 0z" fill="#5a4030"/><rect x="199" y="160" width="2" height="52" fill="#8a6a40"/>' +
      '<rect x="176" y="80" width="48" height="60" fill="#2a3a4a" stroke="#c8bca0" stroke-width="2"/><path d="M200 80v60M176 110h48" stroke="#c8bca0" stroke-width="1.5"/>' +
      /* flag */
      '<rect x="199" y="14" width="2" height="38" fill="#ccc"/><g class="cmy-flag"><rect x="201" y="16" width="26" height="15" fill="#c0392b"/><rect x="201" y="19" width="26" height="2" fill="#fff"/><rect x="201" y="24" width="26" height="2" fill="#fff"/><rect x="201" y="16" width="10" height="7" fill="#1f3a7a"/></g>' +
      tree(20, 206, 1.5, "#3c6a2e") + tree(384, 206, 1.5, "#3c6a2e") +
      /* notebook pages blowing out the door, off on the road */
      '<g class="cmy-page"><rect x="190" y="196" width="14" height="18" fill="#fff" stroke="#9ab" stroke-width=".8"/><path d="M192 201h10M192 205h10M192 209h8" stroke="#9ab" stroke-width=".8"/></g>' +
      '<g class="cmy-page cmy-p2"><rect x="196" y="200" width="12" height="16" fill="#fff" stroke="#9ab" stroke-width=".8"/><path d="M198 205h8M198 209h8" stroke="#9ab" stroke-width=".8"/></g>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">N ASHLAND AVE · NEAR NORTH SIDE</text>',
      sky("cmy-s3", "#4a7ab8", "#cfe0ee"));
  }

  /* 4. Curtom, the label he started in 1968, S Stony Island Ave */
  function cmycurtom() {
    const disc = (x, y, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="17" fill="' + GOLD + '" stroke="#a87a1a" stroke-width="1.5"/><circle cx="' + x + '" cy="' + y + '" r="11" fill="none" stroke="#c8962a" stroke-width="1"/><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + ORNG + '"/><circle cx="' + x + '" cy="' + y + '" r="1.5" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cmy-s4)"/>' + stars(10) +
      '<rect x="0" y="208" width="400" height="52" fill="#3a3a3e"/><rect x="0" y="206" width="400" height="4" fill="#9a9a9a"/>' +
      [30, 110, 190, 270, 350].map(x => '<rect x="' + x + '" y="232" width="30" height="4" fill="#d8c060"/>').join("") +
      /* low brick building */
      '<rect x="40" y="70" width="320" height="138" fill="#6a3a28"/><rect x="34" y="62" width="332" height="12" fill="#2a1a14"/>' +
      '<rect x="60" y="78" width="280" height="30" rx="3" fill="#1a1010" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="cmy-glow" x="200" y="101" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" letter-spacing="6" fill="' + GOLD + '">CURTOM</text>' +
      /* big front window: gold records on the wall, a guitar on a stand */
      '<rect x="60" y="118" width="190" height="80" fill="#2a1e1a" stroke="#c8b090" stroke-width="3"/><rect class="cmy-glow" x="60" y="118" width="190" height="80" fill="#f4b942" opacity=".12"/>' +
      '<rect x="72" y="128" width="40" height="44" fill="#1a1010" stroke="' + GOLD + '" stroke-width="2"/>' + disc(92, 150, "cmy-spin") +
      '<rect x="122" y="128" width="40" height="44" fill="#1a1010" stroke="' + GOLD + '" stroke-width="2"/>' + disc(142, 150, "cmy-spin") +
      /* guitar */
      '<g transform="translate(200 128)"><path d="M10 64c-14 0 -18 -14 -10 -22c-6 -8 0 -18 10 -16c10 -2 16 8 10 16c8 8 4 22 -10 22z" fill="#c8402a" stroke="#fff" stroke-width="1"/><rect x="8" y="-6" width="4" height="34" fill="#3a2418"/><rect x="6" y="-12" width="8" height="8" rx="1" fill="#2a1a10"/><circle cx="10" cy="46" r="4" fill="#1a0a06"/><path class="cmy-str" d="M9 -4v62M11 -4v62" stroke="#eee" stroke-width=".5"/><path d="M0 66h20l-4 6h-12z" fill="#555"/></g>' +
      /* door */
      '<rect x="270" y="122" width="56" height="86" fill="#2a1a12" stroke="#c8b090" stroke-width="3"/><rect x="292" y="122" width="2" height="86" fill="#c8b090"/><circle cx="286" cy="168" r="2" fill="' + GOLD + '"/><circle cx="300" cy="168" r="2" fill="' + GOLD + '"/>' +
      note(240, 110, GOLD) + note(90, 112, "#fff", "cmy-n2") + note(170, 108, ORNG, "cmy-n3") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HIS OWN LABEL · S STONY ISLAND AVE · SOUTH SIDE</text>',
      sky("cmy-s4", "#141030", "#5a3a6a"));
  }

  /* 5. W Chicago Ave and N Larrabee St, Cabrini-Green */
  function cmycorner() {
    let mart = '<rect x="150" y="96" width="240" height="96" fill="#cbb58e"/>' + '<rect x="230" y="70" width="80" height="30" fill="#cbb58e"/><rect x="250" y="56" width="40" height="16" fill="#c0a882"/>' +
      '<rect x="150" y="92" width="240" height="4" fill="#b09870"/>';
    for (let r = 0; r < 7; r++) for (let c = 0; c < 20; c++) mart += '<rect x="' + (156 + c * 12) + '" y="' + (100 + r * 12) + '" width="5" height="7" fill="' + ((r * 7 + c) % 5 ? "#5a6a7a" : "#f4d58a") + '"/>';
    for (let c = 0; c < 6; c++) mart += '<rect x="' + (236 + c * 12) + '" y="76" width="5" height="16" fill="#5a6a7a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cmy-s5)"/>' +
      mart +
      '<rect x="0" y="186" width="400" height="10" fill="#4a6a8a" opacity=".7"/>' +
      /* brick wall with the tag */
      '<rect x="0" y="120" width="170" height="100" fill="#8a3a2a"/>' + Array.from({ length: 11 }, (_, r) => '<path d="M0 ' + (126 + r * 9) + 'h170" stroke="#6e2c20" stroke-width="1"/>').join("") +
      tag("CURTIS", 22, 172, 34, GOLD, -8) + tag("KEEP ON PUSHIN", 18, 204, 15, TEAL, -4) +
      '<g class="cmy-sp"><circle cx="150" cy="160" r="2" fill="' + GOLD + '"/><circle cx="156" cy="156" r="1.5" fill="' + GOLD + '"/></g><g class="cmy-sp cmy-sp2"><circle cx="146" cy="168" r="1.6" fill="' + TEAL + '"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="220" width="400" height="40" fill="#555"/><rect x="0" y="218" width="400" height="4" fill="#bbb"/>' +
      '<g class="cmy-car"><rect x="0" y="226" width="64" height="18" rx="5" fill="' + ORNG + '"/><rect x="10" y="218" width="40" height="12" rx="4" fill="#d24a22"/><rect x="14" y="220" width="14" height="8" fill="#9cc"/><rect x="32" y="220" width="14" height="8" fill="#9cc"/><circle cx="14" cy="246" r="6" fill="#111"/><circle cx="50" cy="246" r="6" fill="#111"/></g>' +
      /* green street signs on the pole */
      '<rect x="230" y="96" width="5" height="124" fill="#5f6b5f"/>' + sign(170, 102, 126, "W CHICAGO AVE") + sign(220, 128, 126, "N LARRABEE ST") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CABRINI-GREEN · THE MERCHANDISE MART DOWN BY THE RIVER</text>',
      sky("cmy-s5", "#1e3a6a", "#f0a060"));
  }

  window.SCENES = { cmystation, cmychurch, cmyschool, cmycurtom, cmycorner };
})();
