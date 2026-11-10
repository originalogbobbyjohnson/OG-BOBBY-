/* noahkahan scenes (Regions tab: Boston + New England; Strafford, Vermont). CSS classes and ids prefixed nk- (the page's own anim-train is kept).
   1 White River Junction station, the Amtrak Vermonter stop for the Upper Valley: the red-brick depot, the black WHITE RIVER JCT sign, the old Boston & Maine steam engine on display, the silver train sliding in, bare stick-season hills behind.
   2 The Strafford tree farm he grew up on: rows of evergreens on a hillside, a pickup with a tree tied on, the first snow coming down.
   3 The Justin Morrill Homestead in Strafford village: the pink Gothic Revival house with its steep gables and white trim, the gardens, leaves drifting.
   4 Alger Brook Road in stick season (he sings it in "The View Between Villages"): a dirt road, a line of mailboxes, bare gray trees, tail lights pulling away.
   5 Morrill Hwy and Brook Rd at the Strafford green: green signs, KAHAN tagged on the barn boards, the white 1799 Town House on the hill behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nksnow{0%{transform:translateY(-20px);opacity:0}10%{opacity:1}100%{transform:translateY(260px);opacity:.8}}.nk-sn{animation:nksnow 6s linear infinite}.nk-sn2{animation-delay:-2s}.nk-sn3{animation-delay:-4s}' +
    '@keyframes nkleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(40px,240px) rotate(300deg);opacity:.9}}.nk-lf{transform-box:fill-box;transform-origin:50% 50%;animation:nkleaf 6s linear infinite}.nk-lf2{animation-delay:-2s}.nk-lf3{animation-delay:-4s}' +
    '@keyframes nksmoke{0%{transform:translateY(0) scale(1);opacity:.7}100%{transform:translateY(-30px) scale(1.6);opacity:0}}.nk-sm{transform-box:fill-box;transform-origin:50% 100%;animation:nksmoke 2.4s ease-out infinite}.nk-sm2{animation-delay:-.8s}.nk-sm3{animation-delay:-1.6s}' +
    '@keyframes nkaway{from{transform:translate(0,0) scale(1)}to{transform:translate(-4px,-96px) scale(.3)}}.nk-away{transform-box:fill-box;transform-origin:50% 50%;animation:nkaway 6s ease-in infinite}' +
    '@keyframes nkglow{0%,100%{opacity:.5}50%{opacity:1}}.nk-glow{animation:nkglow 1.8s ease-in-out infinite}' +
    '@keyframes nksway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.nk-sw{transform-box:fill-box;transform-origin:50% 100%;animation:nksway 3s ease-in-out infinite}' +
    '@keyframes nksp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nk-sp{animation:nksp 1.4s ease-out infinite}.nk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const AMBER = "#e8a33d", MAPLE = "#c0392b", FROST = "#8fb3c9", CREAM = "#f2efe6";
  const hills = (y, c) => '<path d="M0 ' + y + 'q50 -34 110 -14t120 -20t100 10t70 -12v120H0z" fill="' + c + '"/>';
  /* a bare stick-season tree */
  const stick = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" stroke="' + (c || "#5a5048") + '" fill="none" stroke-linecap="round"><path d="M0 0v-40" stroke-width="3"/><path d="M0 -18l-12 -12M0 -26l10 -12M0 -34l-6 -10M-8 -26l-4 -8M6 -34l4 -8M0 -40l2 -8" stroke-width="1.6"/></g>';
  const pine = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-6" width="4" height="6" fill="#4a3424"/><path d="M0 -40l-12 18h6l-10 16h32l-10 -16h6z" fill="' + (c || "#2f5a3a") + '"/></g>';
  const snow = (n) => Array.from({ length: n }, (_, i) => '<circle class="nk-sn nk-sn' + (i % 3 + 1) + '" cx="' + ((i * 53) % 400) + '" cy="' + ((i * 37) % 60) + '" r="' + (1.2 + (i % 2)) + '" fill="#fff"/>').join("");

  /* 1. White River Junction station */
  function nkstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="166" width="30" height="14" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="158" width="300" height="44" rx="6" fill="#d7dbe0" stroke="#7d858c" stroke-width="2"/>' + win +
      '<rect x="20" y="186" width="300" height="4" fill="#d63a2f"/><rect x="20" y="191" width="300" height="3" fill="#fff"/><rect x="20" y="195" width="300" height="4" fill="#2a4c9a"/>' +
      '<path d="M320 158h40q22 0 26 30v14h-66z" fill="#c9ced4" stroke="#7d858c" stroke-width="2"/><path d="M330 166h26q12 0 14 14h-40z" fill="#1e2a33"/><circle cx="374" cy="194" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nk1)"/>' + hills(96, "#7a7268") +
      stick(30, 110, 1, "#4a4440") + stick(70, 104, .8, "#4a4440") + stick(360, 108, 1, "#4a4440") +
      /* brick depot */
      '<rect x="120" y="76" width="200" height="66" fill="#9a4a36"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M120 ' + (82 + r * 7) + 'h200" stroke="#7e3a2a" stroke-width=".7"/>').join("") +
      '<path d="M112 78l108 -26l108 26z" fill="#4a4a50"/><rect x="210" y="40" width="20" height="20" fill="' + CREAM + '"/><path d="M206 40l14 -10l14 10z" fill="#4a4a50"/>' +
      [136, 166, 256, 286].map(x => '<rect x="' + x + '" y="96" width="18" height="26" fill="' + CREAM + '"/><rect x="' + (x + 2) + '" y="98" width="14" height="22" fill="#3a4450"/>').join("") +
      '<rect x="200" y="98" width="40" height="44" fill="#2e2a28"/>' +
      /* B&M steam engine on display */
      '<g transform="translate(20 128)"><rect x="0" y="0" width="56" height="18" rx="8" fill="#1a1a1a"/><rect x="40" y="-14" width="18" height="16" fill="#1a1a1a"/><rect x="8" y="-10" width="6" height="10" fill="#1a1a1a"/><circle cx="12" cy="22" r="7" fill="#2a2a2a" stroke="' + MAPLE + '" stroke-width="2"/><circle cx="32" cy="22" r="7" fill="#2a2a2a" stroke="' + MAPLE + '" stroke-width="2"/><circle cx="50" cy="24" r="5" fill="#2a2a2a"/>' +
      '<circle class="nk-sm" cx="11" cy="-14" r="4" fill="#ddd"/><circle class="nk-sm nk-sm2" cx="11" cy="-14" r="4" fill="#ddd"/></g>' +
      train +
      '<rect x="0" y="202" width="400" height="58" fill="#5a5450"/><path d="M0 208h400M0 222h400" stroke="#a8a098" stroke-width="3"/>' +
      '<rect x="110" y="10" width="180" height="28" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="200" y="30" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">WHITE RIVER JCT</text>' +
      '<rect x="300" y="14" width="44" height="20" rx="10" fill="#1f4e79"/><text x="322" y="28" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">VT</text>' + snow(10),
      sky("nk1", "#6a7a8a", "#d8d0c4"));
  }

  /* 2. The tree farm */
  function nkfarm() {
    let rows = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) rows += pine(20 + c * 40 + (r % 2) * 20, 120 + r * 26, .55 + r * .15, ["#3f6a48", "#35603f", "#2c5536", "#244a2e"][r]);
    return svg(
      '<rect width="400" height="260" fill="url(#nk2)"/>' + hills(80, "#8a8a84") +
      '<path d="M0 110q120 -20 240 -6t160 -6v170H0z" fill="#e8ece8"/>' + rows +
      /* pickup with a tree */
      '<g transform="translate(250 200)"><rect x="0" y="10" width="100" height="22" rx="4" fill="' + MAPLE + '"/><path d="M60 10v-16h26l12 16z" fill="' + MAPLE + '"/><rect x="66" y="-2" width="16" height="10" fill="#cfe0ea"/>' +
      '<circle cx="20" cy="34" r="8" fill="#222"/><circle cx="78" cy="34" r="8" fill="#222"/><path d="M4 8l50 -10l-44 -4z" fill="#2f5a3a"/><path d="M0 4h56" stroke="#7a5a3a" stroke-width="2"/></g>' +
      '<rect x="110" y="16" width="180" height="26" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="200" y="34" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">STRAFFORD TREE FARM</text>' + snow(26),
      sky("nk2", "#8a98a8", "#e4e0d8"));
  }

  /* 3. The Justin Morrill Homestead */
  function nkmorrill() {
    const PINK = "#e7a3a0", TRIM = "#f6f1ea", ROOF = "#5a6a7a";
    const gw = (x, y) => '<rect x="' + x + '" y="' + y + '" width="14" height="22" fill="#2e3a44" stroke="' + TRIM + '" stroke-width="2"/><path d="M' + (x - 2) + ' ' + y + 'l9 -8l9 8" fill="none" stroke="' + TRIM + '" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nk3)"/>' + hills(98, "#9a8a74") +
      stick(30, 160, 1.2) + stick(370, 160, 1.3) +
      '<rect x="110" y="92" width="180" height="88" fill="' + PINK + '"/>' +
      '<path d="M100 94l50 -50l50 50z" fill="' + ROOF + '"/><path d="M200 94l50 -50l50 50z" fill="' + ROOF + '"/><path d="M118 94l32 -32l32 32z" fill="' + PINK + '"/><path d="M218 94l32 -32l32 32z" fill="' + PINK + '"/>' +
      '<path d="M118 94l32 -32l32 32M218 94l32 -32l32 32" fill="none" stroke="' + TRIM + '" stroke-width="3" stroke-dasharray="4 2"/>' +
      gw(143, 70) + gw(243, 70) + gw(126, 112) + gw(160, 112) + gw(226, 112) + gw(260, 112) +
      '<rect x="186" y="132" width="28" height="48" fill="#6a3a2a"/><path d="M180 132h40l-20 -14z" fill="' + TRIM + '"/>' +
      '<rect x="100" y="180" width="200" height="6" fill="' + TRIM + '"/>' +
      '<path d="M200 186q-10 40 -40 74h80q-30 -34 -40 -74z" fill="#cbb89a"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#7a8a5a" opacity=".85"/><path d="M200 186q-10 40 -40 74h80q-30 -34 -40 -74z" fill="#cbb89a"/>' +
      [60, 100, 300, 340].map(x => '<circle cx="' + x + '" cy="210" r="10" fill="#8a5a3a"/>').join("") +
      '<g class="nk-lf"><path d="M80 20l5 -6l5 6l-5 6z" fill="' + AMBER + '"/></g><g class="nk-lf nk-lf2"><path d="M220 10l5 -6l5 6l-5 6z" fill="' + MAPLE + '"/></g><g class="nk-lf nk-lf3"><path d="M320 30l5 -6l5 6l-5 6z" fill="' + AMBER + '"/></g>' +
      '<rect x="116" y="8" width="168" height="24" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="200" y="25" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">MORRILL HOMESTEAD</text>',
      sky("nk3", "#7a8ea4", "#e8d8c0"));
  }

  /* 4. Alger Brook Road in stick season */
  function nkroad() {
    const boxes = [[70, 168, 1], [118, 150, .8], [150, 138, .62], [172, 130, .5]].map(b => '<g transform="translate(' + b[0] + ' ' + b[1] + ') scale(' + b[2] + ')"><rect x="-2" y="0" width="4" height="30" fill="#5a4030"/><path d="M-14 0v-14a8 8 0 0 1 8 -8h12a8 8 0 0 1 8 8v14z" fill="#3a3a3a"/><rect x="10" y="-22" width="3" height="12" fill="' + MAPLE + '"/></g>').join("");
    let trees = "";
    for (let i = 0; i < 12; i++) trees += stick(i < 6 ? 20 + i * 26 : 230 + (i - 6) * 30, 120 + (i % 3) * 6, .9 + (i % 2) * .3, "#5f564e");
    return svg(
      '<rect width="400" height="260" fill="url(#nk4)"/>' + hills(104, "#8c847a") + trees +
      '<rect x="0" y="120" width="400" height="140" fill="#8a8470"/>' + '<path d="M150 260l50 -150h16l60 150z" fill="#9a8466"/><path d="M208 112v148" stroke="#b8a282" stroke-width="2" stroke-dasharray="6 8"/>' +
      '<rect x="0" y="120" width="150" height="140" fill="#6f6a50" opacity=".55"/><rect x="276" y="120" width="124" height="140" fill="#6f6a50" opacity=".55"/>' +
      boxes +
      '<g transform="translate(212 222)"><g class="nk-away"><rect x="-20" y="-12" width="40" height="18" rx="4" fill="#3a4a5a"/><circle cx="-14" cy="0" r="3" fill="#ff3a2a" class="nk-glow"/><circle cx="14" cy="0" r="3" fill="#ff3a2a" class="nk-glow"/></g></g>' +
      '<rect x="296" y="120" width="5" height="70" fill="#2f2f2f"/>' + sign(270, 104, 120, "ALGER BROOK RD") +
      '<g class="nk-lf"><path d="M40 20l5 -6l5 6l-5 6z" fill="' + AMBER + '"/></g><g class="nk-lf nk-lf2"><path d="M300 0l5 -6l5 6l-5 6z" fill="' + AMBER + '"/></g>',
      sky("nk4", "#7c8a96", "#d8d2c6"));
  }

  /* 5. His corner: Morrill Hwy and Brook Rd at the Strafford green, the Town House behind */
  function nkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#nk5)"/>' + hills(110, "#7a7268") +
      /* the 1799 Town House: white meetinghouse with its belfry */
      '<rect x="150" y="70" width="100" height="60" fill="' + CREAM + '"/><path d="M144 72l56 -26l56 26z" fill="#e4e0d6" stroke="#9a968c" stroke-width="1"/>' +
      '<rect x="186" y="26" width="28" height="30" fill="' + CREAM + '"/><rect x="190" y="14" width="20" height="14" fill="' + CREAM + '"/><path d="M188 14l12 -12l12 12z" fill="#5a5a5a"/>' +
      '<rect x="194" y="34" width="12" height="12" fill="#3a4048" class="nk-glow"/>' +
      [162, 182, 210, 230].map(x => '<rect x="' + x + '" y="84" width="10" height="16" fill="#3a4048"/><rect x="' + x + '" y="108" width="10" height="16" fill="#3a4048"/>').join("") +
      stick(120, 132, 1.2) + stick(290, 132, 1.3) + stick(60, 128, 1) +
      /* barn-board wall */
      '<rect x="0" y="142" width="400" height="82" fill="#7a3a2c"/>' + Array.from({ length: 20 }, (_, c) => '<path d="M' + (c * 20) + ' 142v82" stroke="#5a2a20" stroke-width="2"/>').join("") +
      tag("KAHAN", 16, 200, 42, AMBER, -5) + tag("STICK SEASON", 180, 176, 17, FROST, -4) + tag("BUSYHEAD", 196, 206, 17, CREAM, -3) +
      '<g class="nk-sp"><circle cx="160" cy="184" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="nk-sp nk-sp2"><circle cx="166" cy="178" r="2" fill="' + AMBER + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#6a6258"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="330" y="72" width="6" height="152" fill="#2f2f2f"/>' + sign(278, 72, 116, "MORRILL HWY") + sign(286, 98, 100, "BROOK RD") + snow(14),
      sky("nk5", "#5a6a7e", "#d8c8b0"));
  }

  window.SCENES = { nkstation: nkstation, nkfarm: nkfarm, nkmorrill: nkmorrill, nkroad: nkroad, nkcorner: nkcorner };
})();
