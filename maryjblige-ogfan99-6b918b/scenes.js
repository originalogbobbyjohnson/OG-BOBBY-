/* maryjblige scenes (NYC map, Yonkers: born in the Bronx, raised in the Schlobohm Houses, now Palisade Towers, off Palisade Av). 400 x 260 SVGs.
   CSS classes and ids prefixed mjb- (the page's own anim-train is kept on the bus so it slides in).
   0 The Bee-Line 9 pulling up on Palisade Av by the Schlobohm Houses: blue stop sign, route 9 (drawn with a straight stem), brick towers behind.
   1 A little church in Savannah, Georgia, where she sang as a small child: white clapboard, steeple, live oaks hung with Spanish moss, notes from the open doors.
   2 The Galleria mall in White Plains, 1988: the sing-along booth where she taped Anita Baker's "Caught Up in the Rapture" at 17, REC light blinking, cassette reels turning.
   3 The Mary J. Blige Center for Women in Yonkers (opened 2009 with her FFAWN foundation): brick building, ribbon cut, balloons rising.
   4 Palisade Av and Schroeder St: green signs, MARY J tagged, the brick towers she grew up in behind. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#ffd866", PURP = "#c06bff", ROSE = "#ff5d73", BRICK = "#9c4f3a", BEE = "#1d4f91";
  const css = '<style>' +
    '@keyframes mjbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mjb-flk{animation:mjbflick 2.6s infinite}.mjb-flk2{animation-delay:.9s}' +
    '@keyframes mjbnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}.mjb-note{animation:mjbnote 3.2s ease-out infinite}.mjb-n2{animation-delay:-1.1s}.mjb-n3{animation-delay:-2.2s}' +
    '@keyframes mjbmoss{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mjb-moss{transform-box:fill-box;transform-origin:50% 0%;animation:mjbmoss 3.4s ease-in-out infinite}.mjb-m2{animation-delay:-1.7s}' +
    '@keyframes mjbrec{0%,100%{opacity:1}50%{opacity:.15}}.mjb-rec{animation:mjbrec 1s steps(1) infinite}' +
    '@keyframes mjbspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.mjb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mjbspin 2s linear infinite}' +
    '@keyframes mjbball{0%{transform:translateY(0)}100%{transform:translateY(-190px)}}.mjb-ball{animation:mjbball 7s linear infinite}.mjb-b2{animation-delay:-2.3s}.mjb-b3{animation-delay:-4.6s}' +
    '@keyframes mjbwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.mjb-walk{animation:mjbwalk 14s linear infinite}.mjb-wk2{animation-delay:-5s}.mjb-wk3{animation-delay:-9.5s}' +
    '@keyframes mjbglow{0%,100%{opacity:.5}50%{opacity:1}}.mjb-glow{animation:mjbglow 2.4s ease-in-out infinite}' +
    '@keyframes mjbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.mjb-sp{animation:mjbspray 1.4s ease-out infinite}.mjb-spb{animation-delay:.5s}' +
    '@keyframes mjbrib{0%,100%{transform:skewY(-2deg)}50%{transform:skewY(2deg)}}.mjb-rib{transform-box:fill-box;transform-origin:50% 50%;animation:mjbrib 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const nine = (x, y, s, c) => '<circle cx="' + x + '" cy="' + (y - s * .62) + '" r="' + (s * .3) + '" fill="none" stroke="' + c + '" stroke-width="' + (s * .16) + '"/><path d="M' + (x + s * .3) + ' ' + (y - s * .62) + 'V' + y + '" stroke="' + c + '" stroke-width="' + (s * .16) + '"/>';
  const note = (cls, x, y, c) => '<g class="mjb-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const walker = (cls, y, c) => '<g class="mjb-walk ' + cls + '"><circle cx="0" cy="' + (y - 22) + '" r="4" fill="#3a2a24"/><rect x="-4" y="' + (y - 18) + '" width="8" height="12" rx="2" fill="' + c + '"/><rect x="-3" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/><rect x="0.5" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/></g>';
  const tower = (x, y, w, h, seed) => {
    let win = "";
    for (let r = 0; r < Math.floor((h - 8) / 10); r++) for (let c = 0; c < Math.floor((w - 6) / 9); c++) {
      const on = ((r * 5 + c * 7 + seed) % 6) === 0;
      win += '<rect class="' + (on && (r + c) % 2 ? "mjb-flk" : "") + '" x="' + (x + 5 + c * 9) + '" y="' + (y + 7 + r * 10) + '" width="5" height="6" fill="' + (on ? "#ffd98a" : "#3b2420") + '"/>';
    }
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#733426"/>' + win;
  };

  /* 0. Bee-Line 9 on Palisade Av */
  function mjbstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (44 + i * 40) + '" y="130" width="30" height="24" rx="2" fill="#bfe0f5" opacity=".9"/>').join("");
    const bus = '<g class="anim-train"><rect x="30" y="118" width="276" height="74" rx="10" fill="#f4f4f0" stroke="#7a7f88" stroke-width="2"/>' + win +
      '<rect x="30" y="162" width="276" height="8" fill="' + BEE + '"/><rect x="30" y="170" width="276" height="4" fill="#f2c200"/>' +
      '<rect x="282" y="124" width="22" height="16" rx="2" fill="#111"/>' + nine(290, 138, 12, "#ffb000") +
      '<rect x="270" y="142" width="30" height="44" rx="2" fill="#2b3340" opacity=".85"/>' +
      '<circle cx="80" cy="194" r="13" fill="#222"/><circle cx="80" cy="194" r="5" fill="#888"/><circle cx="250" cy="194" r="13" fill="#222"/><circle cx="250" cy="194" r="5" fill="#888"/>' +
      '<circle cx="302" cy="182" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mjbs0)"/>' +
      tower(0, 30, 92, 150, 1) + tower(110, 50, 80, 130, 3) + tower(300, 24, 100, 156, 5) +
      '<rect x="0" y="180" width="400" height="12" fill="#b9b2a6"/><rect x="0" y="192" width="400" height="68" fill="#4a4a50"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2"/>' +
      bus +
      '<rect x="352" y="96" width="4" height="96" fill="#555"/><rect x="330" y="68" width="48" height="34" rx="3" fill="' + BEE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="354" y="82" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">BUS STOP</text><rect x="344" y="86" width="20" height="12" rx="2" fill="#fff"/>' + nine(352, 96.5, 9, BEE) +
      sign(16, 196, 100, "Palisade Av") + '<rect x="64" y="218" width="4" height="40" fill="#2f2f2f"/>',
      sky("mjbs0", "#6fa3d6", "#f6d7b0"));
  }

  /* 1. A little church in Savannah, Georgia */
  function mjbchurch() {
    const moss = (x, y, cls) => '<g class="mjb-moss ' + cls + '"><path d="M' + x + ' ' + y + 'q-3 14 1 26q-4 8 0 16M' + (x + 6) + ' ' + y + 'q3 12 -1 22q3 6 0 12M' + (x + 12) + ' ' + y + 'q-2 10 1 18" stroke="#9fae86" stroke-width="3" fill="none" stroke-linecap="round"/></g>';
    const oak = (x, s) => '<path d="M' + x + ' 210q4 -50 -6 -86" stroke="#4a3a2a" stroke-width="' + (10 * s) + '" fill="none"/><path d="M' + (x - 2) + ' 140q-30 -10 -56 -2M' + x + ' 130q26 -16 60 -8" stroke="#4a3a2a" stroke-width="' + (5 * s) + '" fill="none"/>' +
      '<ellipse cx="' + (x - 30) + '" cy="116" rx="46" ry="20" fill="#3f5a32"/><ellipse cx="' + (x + 30) + '" cy="110" rx="50" ry="22" fill="#4a6a3a"/><ellipse cx="' + x + '" cy="98" rx="40" ry="18" fill="#557a42"/>' +
      moss(x - 50, 126, "") + moss(x - 20, 124, "mjb-m2") + moss(x + 22, 122, "") + moss(x + 54, 120, "mjb-m2");
    return svg(
      '<rect width="400" height="260" fill="url(#mjbs1)"/><circle cx="330" cy="46" r="20" fill="#fff1c4" opacity=".9"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6f8f4a"/><path d="M200 260l-10 -60h20z" fill="#d8c8a0"/>' +
      '<rect x="140" y="110" width="120" height="92" fill="#f6f3ea" stroke="#c9c2b0" stroke-width="1.5"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M140 ' + (120 + i * 10) + 'h120" stroke="#ddd6c4" stroke-width="1"/>').join("") +
      '<path d="M132 112l68 -40l68 40z" fill="#8a3a32"/><rect x="186" y="34" width="28" height="42" fill="#f6f3ea" stroke="#c9c2b0"/><path d="M182 36l18 -28l18 28z" fill="#8a3a32"/>' +
      '<path d="M200 2v12M195 7h10" stroke="' + GOLD + '" stroke-width="2.5"/><rect x="194" y="46" width="12" height="16" rx="6" fill="#4a3a2a"/>' +
      '<path d="M186 202v-34a14 14 0 0 1 28 0v34z" fill="#7a4a2a"/><path d="M200 168v34" stroke="#5a3420" stroke-width="2"/>' +
      [152, 236].map(x => '<path d="M' + x + ' 170v-30a6 6 0 0 1 12 0v30z" fill="#c9a0e0" stroke="#8a6aa0"/>').join("") +
      note("", 200, 160, GOLD) + note("mjb-n2", 196, 166, "#fff") + note("mjb-n3", 206, 162, PURP) +
      oak(56, 1) + oak(350, 1.1),
      sky("mjbs1", "#f6a96a", "#ffe3b0"));
  }

  /* 2. The Galleria in White Plains, 1988: the sing-along booth */
  function mjbgalleria() {
    return svg(
      '<rect width="400" height="260" fill="#efe6da"/>' +
      '<path d="M0 0h400v54q-200 -44 -400 0z" fill="#bcd8ea"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0q' + (200 - i * 50) * .1 + ' 30 ' + (200 - i * 50) * .05 + ' 48" stroke="#9ab2c2" stroke-width="2" fill="none"/>').join("") +
      '<rect x="0" y="62" width="400" height="10" fill="#c9b8a2"/><rect x="0" y="72" width="400" height="6" fill="#8a7a66"/>' +
      [10, 300].map(x => '<rect x="' + x + '" y="84" width="90" height="70" fill="#f9f3e8" stroke="#b9a68c" stroke-width="2"/><rect x="' + (x + 8) + '" y="96" width="74" height="50" fill="#d9eef8" opacity=".7"/>').join("") +
      '<path d="M8 230l70 -66h18l-70 66z" fill="#9aa2aa"/><path d="M12 228l66 -62" stroke="#666" stroke-width="2" stroke-dasharray="4 4"/>' +
      '<rect x="128" y="76" width="144" height="128" rx="6" fill="#2a2433" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<rect x="134" y="82" width="132" height="22" rx="3" fill="#120f18"/><text x="200" y="98" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + ROSE + '" letter-spacing="2">SING-ALONG</text>' +
      '<rect x="140" y="110" width="120" height="70" rx="3" fill="#bfe0f5" opacity=".35" stroke="#ddd"/>' +
      '<rect x="196" y="130" width="8" height="34" fill="#888"/><ellipse cx="200" cy="128" rx="7" ry="9" fill="#444" stroke="#999"/><rect x="186" y="164" width="28" height="4" fill="#888"/>' +
      '<g class="mjb-rec"><circle cx="248" cy="120" r="5" fill="#ff2a2a"/></g><text x="236" y="123" text-anchor="end" ' + font + ' font-size="8" fill="#fff">REC</text>' +
      '<g transform="translate(150 182)"><rect x="0" y="0" width="100" height="18" rx="2" fill="#e8e0d0" stroke="#444"/><rect x="18" y="3" width="64" height="12" rx="2" fill="#333"/>' +
      '<g class="mjb-spin"><circle cx="32" cy="9" r="5" fill="#fff"/><path d="M32 4v10M27 9h10" stroke="#333" stroke-width="1.5"/></g><g class="mjb-spin"><circle cx="68" cy="9" r="5" fill="#fff"/><path d="M68 4v10M63 9h10" stroke="#333" stroke-width="1.5"/></g></g>' +
      note("", 196, 112, GOLD) + note("mjb-n2", 204, 116, PURP) + note("mjb-n3", 200, 110, ROSE) +
      '<rect x="0" y="204" width="400" height="56" fill="#d8cbb8"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 204l-20 56" stroke="#c4b6a2" stroke-width="1"/>').join("") +
      walker("", 244, PURP) + walker("mjb-wk2", 246, ROSE) + walker("mjb-wk3", 244, "#2f7a8a"));
  }

  /* 3. The Mary J. Blige Center for Women, Yonkers */
  function mjbcenter() {
    let win = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 6; c++) win += '<rect x="' + (92 + c * 38) + '" y="' + (66 + r * 40) + '" width="20" height="26" fill="' + ((r + c) % 3 ? "#bfe0f5" : "#ffe3a0") + '" stroke="#e9dfc8" stroke-width="2"/>';
    const balloon = (x, c, cls) => '<g class="mjb-ball ' + cls + '"><ellipse cx="' + x + '" cy="200" rx="8" ry="10" fill="' + c + '"/><path d="M' + x + ' 210q-3 10 2 20" stroke="#eee" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mjbs3)"/>' +
      tower(0, 70, 60, 120, 2) + tower(344, 60, 56, 130, 4) +
      '<rect x="80" y="50" width="240" height="140" fill="' + BRICK + '"/><rect x="76" y="44" width="248" height="10" fill="#e9dfc8"/>' + win +
      '<rect x="120" y="148" width="160" height="16" fill="#1d1a24"/><text x="200" y="160" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="1.5">CENTER FOR WOMEN</text>' +
      '<rect x="176" y="166" width="48" height="24" fill="#3a2a22"/><path d="M200 166v24" stroke="#c9a46a" stroke-width="2"/>' +
      '<rect x="0" y="190" width="400" height="14" fill="#b9b2a6"/><rect x="0" y="204" width="400" height="56" fill="#4a4a50"/>' +
      '<rect x="100" y="176" width="4" height="30" fill="#ddd"/><rect x="296" y="176" width="4" height="30" fill="#ddd"/>' +
      '<g class="mjb-rib"><path d="M104 182q48 10 94 0" stroke="' + ROSE + '" stroke-width="5" fill="none"/><path d="M202 182q48 10 94 0" stroke="' + ROSE + '" stroke-width="5" fill="none"/></g>' +
      '<path d="M192 178l16 10M192 190l16 -10" stroke="' + GOLD + '" stroke-width="3"/><circle cx="190" cy="176" r="3" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle cx="190" cy="192" r="3" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      balloon(60, PURP, "") + balloon(150, GOLD, "mjb-b2") + balloon(260, ROSE, "mjb-b3") + balloon(340, PURP, "mjb-b2") +
      walker("", 236, PURP) + walker("mjb-wk2", 238, GOLD),
      sky("mjbs3", "#8cc0e8", "#f3e2c4"));
  }

  /* 4. Palisade Av and Schroeder St */
  function mjbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mjbs4)"/>' +
      tower(10, 22, 96, 110, 1) + tower(130, 8, 110, 124, 3) + tower(270, 30, 92, 102, 5) +
      '<rect x="0" y="126" width="400" height="98" fill="#c2b29c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#ad9e88" stroke-width="1"/>').join("") +
      '<path d="M0 126h400" stroke="#6a5a48" stroke-width="3"/>' +
      tag("MARY J", 22, 194, 44, GOLD, -6) + tag("NO MORE DRAMA", 26, 216, 17, PURP, -4) + tag("MJB", 214, 204, 30, ROSE, -3) +
      '<g transform="translate(226 146)"><path d="M10 26l-8 -12l8 -6l6 6l6 -6l8 6l-8 12z" fill="' + GOLD + '" stroke="#7a5a1a" stroke-width="1.5"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55555b"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(272, 98, 120, "Palisade Av") + sign(272, 124, 120, "Schroeder St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mjb-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mjb-sp"><circle cx="160" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mjb-sp mjb-spb"><circle cx="166" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mjbs4", "#1a1838", "#d98a6a"));
  }

  window.SCENES = { mjbstop: mjbstop, mjbchurch: mjbchurch, mjbgalleria: mjbgalleria, mjbcenter: mjbcenter, mjbcorner: mjbcorner };
})();
