/* Taylor Swift game (GENRES: POP; region: PHILADELPHIA (Pennsylvania); born at Reading Hospital in West Reading, Berks County,
   grew up on Pine Ridge Farm, a Christmas tree farm in Cumru Township, then on Grandview Boulevard in Wyomissing).
   Rooms: BARTA's Route 12 stop at Reading Hospital, the Christmas tree farm in Cumru, the Wyomissing Area High School gym (she sang
   the anthem at a school basketball game), the Reading ballpark (she sang the anthem there in 1999 and 2007), and Grandview Blvd at
   Woodside Ave in Wyomissing with the Reading Pagoda glowing on Mount Penn behind.
   CSS classes prefixed "tsw" (the page's anim-train is kept for the bus). No logos (no BARTA mark, no team marks), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tswTw{0%,100%{opacity:1}50%{opacity:.25}}.tswTw{animation:tswTw 1.6s ease-in-out infinite}.tswT2{animation-delay:.55s}.tswT3{animation-delay:1.1s}' +
    '@keyframes tswBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.tswBob{animation:tswBob .8s ease-in-out infinite}.tswBb2{animation-delay:.4s}' +
    '@keyframes tswSnow{0%{transform:translateY(-20px)}100%{transform:translateY(270px)}}.tswSnow{animation:tswSnow 7s linear infinite}.tswSn2{animation-delay:-2.3s}.tswSn3{animation-delay:-4.6s}' +
    '@keyframes tswCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.tswCloud{animation:tswCloud 28s linear infinite}.tswC2{animation-delay:-14s}' +
    '@keyframes tswBall{0%{transform:translate(0,0)}50%{transform:translate(0,-40px)}100%{transform:translate(0,0)}}.tswBall{animation:tswBall 1s ease-in infinite}' +
    '@keyframes tswFw{0%{transform:scale(.2);opacity:0}30%{opacity:1}100%{transform:scale(1.3);opacity:0}}.tswFw{transform-box:fill-box;transform-origin:50% 50%;animation:tswFw 2.2s ease-out infinite}.tswF2{animation-delay:1.1s}' +
    '@keyframes tswGlow{0%,100%{opacity:.55}50%{opacity:1}}.tswGlow{animation:tswGlow 2.4s ease-in-out infinite}' +
    '@keyframes tswSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.tswSpark{transform-box:fill-box;transform-origin:50% 50%;animation:tswSpark 1.4s ease-in-out infinite}.tswS2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PINK = "#f2a7c3", GOLD = "#e9c46a", BLUE = "#7fb6e8", RED = "#c8102e", NAVY = "#1d2f6f", GREEN = "#1f6b45";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="tswTw' + (i % 3 === 1 ? ' tswT2' : i % 3 === 2 ? ' tswT3' : '') + '"/>';
    }
    return s;
  };
  const cloud = (x, y, cls) => '<g class="tswCloud' + (cls || '') + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const pine = (x, y, s, c) => '<path d="M' + x + ' ' + (y - 40 * s) + 'l' + (14 * s) + ' ' + (16 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (14 * s) + 'h' + (-7 * s) + 'l' + (13 * s) + ' ' + (14 * s) + 'H' + (x - 32 * s) + 'l' + (13 * s) + ' ' + (-14 * s) + 'h' + (-7 * s) + 'l' + (12 * s) + ' ' + (-14 * s) + 'h' + (-6 * s) + 'z" fill="' + c + '"/><rect x="' + (x - 2.5 * s) + '" y="' + (y + 4 * s) + '" width="' + (5 * s) + '" height="' + (6 * s) + '" fill="#5a3a24"/>';
  const snow = () => {
    let s = "";
    for (let i = 0; i < 26; i++) s += '<circle cx="' + ((i * 53 + 11) % 400) + '" cy="' + ((i * 29) % 120) + '" r="' + (i % 2 ? 1.6 : 2.2) + '" fill="#fff" class="tswSnow' + (i % 3 === 1 ? ' tswSn2' : i % 3 === 2 ? ' tswSn3' : '') + '"/>';
    return s;
  };
  const crowd = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 6 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="tswBob' + (i % 2 ? ' tswBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 12) + '" r="4.5"/><rect x="' + (x - 5) + '" y="' + (y - 7) + '" width="10" height="14" rx="4"/></g>';
    }
    return s;
  };
  /* the girl at the mic, seen from behind, no face */
  const singer = (x, y) => '<rect x="' + (x + 16) + '" y="' + (y - 34) + '" width="2" height="40" fill="#333"/><circle cx="' + (x + 17) + '" cy="' + (y - 36) + '" r="3" fill="#555"/>' +
    '<g fill="#2a1a2a"><path d="M' + (x - 8) + ' ' + (y - 34) + 'q8 -12 16 0v10h-16z" fill="#d9b26a"/><rect x="' + (x - 7) + '" y="' + (y - 24) + '" width="14" height="22" rx="4" fill="#fff"/><path d="M' + (x - 9) + ' ' + (y - 4) + 'h18l-3 14h-12z" fill="' + PINK + '"/><rect x="' + (x - 5) + '" y="' + (y + 10) + '" width="3" height="10"/><rect x="' + (x + 2) + '" y="' + (y + 10) + '" width="3" height="10"/></g>';

  /* 1. BARTA Route 12 pulling up at Reading Hospital in West Reading */
  function tswstation() {
    let wins = "";
    for (let i = 0; i < 7; i++) wins += '<rect x="' + (52 + i * 30) + '" y="140" width="24" height="26" rx="2" fill="#24303a"/>';
    const bus = '<g class="anim-train">' +
      '<rect x="36" y="128" width="256" height="72" rx="10" fill="#f4f4f0" stroke="#7d828a" stroke-width="2"/>' + wins +
      '<rect x="266" y="136" width="22" height="44" rx="2" fill="#24303a"/>' +
      '<path d="M36 176h256v6H36z" fill="' + RED + '"/><path d="M36 182h256v5H36z" fill="' + NAVY + '"/>' +
      '<rect x="222" y="131" width="42" height="8" rx="1" fill="#111"/><text x="243" y="137.5" text-anchor="middle" ' + F + ' font-size="6" fill="#ffb000">12 HOSPITAL</text>' +
      '<rect x="194" y="142" width="22" height="54" fill="#cfd4d8" stroke="#7d828a"/>' +
      '<circle cx="82" cy="202" r="11" fill="#222"/><circle cx="82" cy="202" r="4" fill="#888"/><circle cx="246" cy="202" r="11" fill="#222"/><circle cx="246" cy="202" r="4" fill="#888"/>' +
      '<rect x="288" y="184" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    let hw = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) hw += '<rect x="' + (64 + c * 30) + '" y="' + (40 + r * 22) + '" width="18" height="12" fill="' + ((r + c) % 4 ? "#bcd8ea" : "#ffe7a0") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tsws1)"/>' + cloud(60, 20, '') + cloud(300, 28, ' tswC2') +
      /* the hospital: brick wings and a pale tower block */
      '<rect x="50" y="30" width="300" height="108" fill="#a5553f"/><path d="M50 30h300" stroke="#7e3e2c" stroke-width="4"/>' + hw +
      '<rect x="168" y="12" width="64" height="126" fill="#d9d2c4"/><g fill="#9fc6dc">' + [20, 36, 52, 68, 84, 100].map(y => '<rect x="176" y="' + y + '" width="48" height="9"/>').join("") + '</g>' +
      '<rect x="0" y="136" width="400" height="64" fill="#7a9a5a"/>' +
      '<rect x="0" y="196" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="206" width="400" height="54" fill="#4c4d52"/><path d="M0 226h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      /* bus stop flag on its pole */
      '<rect x="338" y="128" width="4" height="72" fill="#5a5f66"/><rect x="322" y="118" width="36" height="26" rx="3" fill="' + RED + '" stroke="#fff" stroke-width="1.5"/><text x="340" y="136" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">12</text>' +
      bus +
      '<rect x="52" y="220" width="296" height="32" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' +
      '<circle cx="72" cy="236" r="11" fill="' + RED + '"/><text x="72" y="240.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">12</text>' +
      '<text x="212" y="242" text-anchor="middle" ' + F + ' font-size="16" fill="#fff">Reading Hospital</text>',
      sky("tsws1", "#8ec5e8", "#f6e3c0"));
  }

  /* 2. The Christmas tree farm in Cumru Township: rows of firs, the barn with a light on, snow coming down */
  function tswfarm() {
    let rows = "";
    for (let i = 0; i < 9; i++) rows += pine(30 + i * 46, 150, .9, i % 2 ? "#1f5a3c" : "#2a6b48");
    for (let i = 0; i < 8; i++) rows += pine(52 + i * 48, 196, 1.15, i % 2 ? "#245f40" : "#1b4f34");
    let bulbs = "";
    const bc = [RED, GOLD, BLUE, PINK];
    for (let i = 0; i < 14; i++) bulbs += '<circle cx="' + (232 + i * 11) + '" cy="' + (66 + Math.sin(i) * 3) + '" r="2.4" fill="' + bc[i % 4] + '" class="tswTw' + (i % 3 === 1 ? ' tswT2' : i % 3 === 2 ? ' tswT3' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tsws2)"/>' + stars(18, 6, 60) +
      '<circle cx="60" cy="34" r="14" fill="#f7f1d8"/><circle cx="66" cy="30" r="13" fill="#2a3560"/>' +
      '<path d="M0 104q100 -26 200 -6t200 -10v40H0z" fill="#e8eef6"/>' +
      /* the barn */
      '<path d="M232 108v-38l40 -28l40 28v38z" fill="#9c2a2a" stroke="#5a1414" stroke-width="2"/><path d="M228 72l44 -32l44 32" fill="none" stroke="#f4f4f4" stroke-width="4"/>' +
      '<rect x="258" y="78" width="28" height="30" fill="#ffd98a" class="tswGlow"/><path d="M272 78v30M258 93h28" stroke="#5a1414" stroke-width="2"/>' +
      bulbs +
      rows +
      '<rect x="0" y="206" width="400" height="54" fill="#f2f5fa"/><path d="M0 206q200 -10 400 0" stroke="#d8e0ea" stroke-width="3" fill="none"/>' +
      /* a cut tree on the sled */
      '<path d="M150 236h70l8 -6" stroke="#8a5a2a" stroke-width="4" fill="none"/><path d="M152 230l60 -10l6 6l-60 10z" fill="#1f5a3c"/>' +
      snow() +
      '<rect x="12" y="214" width="120" height="26" rx="3" fill="#5a3a24" stroke="#3a2414" stroke-width="2"/><text x="72" y="231" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11" fill="#f7f1d8">TREE FARM</text>',
      sky("tsws2", "#1a2244", "#46507e"));
  }

  /* 3. The Wyomissing Area High School gym: hardwood, bleachers, the girl singing the anthem at center court */
  function tswgym() {
    let bl = "";
    for (let r = 0; r < 5; r++) bl += '<rect x="0" y="' + (70 + r * 14) + '" width="400" height="10" fill="' + (r % 2 ? "#b88a4a" : "#a77a3e") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#e8e2d2"/>' +
      '<rect x="0" y="0" width="400" height="66" fill="#c9c2b0"/>' +
      '<g fill="#f4f1e6">' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 20) + '" y="6" width="40" height="8" rx="2"/>').join("") + '</g>' +
      '<g class="tswGlow" fill="#fff6c8">' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 16) + '" y="14" width="32" height="3"/>').join("") + '</g>' +
      '<rect x="120" y="26" width="160" height="30" rx="3" fill="' + NAVY + '" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="200" y="47" text-anchor="middle" ' + F + ' font-size="15" letter-spacing="2" fill="' + GOLD + '">WYOMISSING</text>' +
      bl + crowd(84, 18, 0, 400, ["#1d2f6f", "#e9c46a", "#7a7a86", "#c0392b"]) + crowd(112, 16, 10, 400, ["#e9c46a", "#1d2f6f", "#444", "#7fb6e8"]) +
      /* the floor and the center circle */
      '<path d="M0 140h400v120H0z" fill="#d9a35e"/><path d="M0 160h400M0 190h400M0 225h400" stroke="#c48d4c" stroke-width="1"/>' +
      '<ellipse cx="200" cy="200" rx="70" ry="22" fill="none" stroke="' + NAVY + '" stroke-width="4"/><path d="M200 140v120" stroke="' + NAVY + '" stroke-width="4"/>' +
      /* hoops at both ends */
      '<rect x="14" y="80" width="6" height="90" fill="#555"/><rect x="18" y="80" width="30" height="24" fill="#fff" stroke="#333" stroke-width="2"/><path d="M48 100h14" stroke="#e8682a" stroke-width="3"/>' +
      '<rect x="380" y="80" width="6" height="90" fill="#555"/><rect x="352" y="80" width="30" height="24" fill="#fff" stroke="#333" stroke-width="2"/><path d="M352 100h-14" stroke="#e8682a" stroke-width="3"/>' +
      '<g class="tswBall"><circle cx="330" cy="236" r="9" fill="#e8682a" stroke="#7a3410" stroke-width="1.5"/><path d="M321 236h18M330 227v18" stroke="#7a3410" stroke-width="1"/></g>' +
      singer(200, 196) +
      '<path d="M228 156v-12l10 -3v12" stroke="' + NAVY + '" stroke-width="2" fill="none" class="tswTw"/><path d="M168 150v-12l10 -3v12" stroke="' + NAVY + '" stroke-width="2" fill="none" class="tswTw tswT2"/>',
      "");
  }

  /* 4. The Reading ballpark: the old covered grandstand, the field, the girl singing on the grass behind home plate, fireworks */
  function tswballpark() {
    let seats = "";
    for (let r = 0; r < 4; r++) seats += '<rect x="20" y="' + (90 + r * 10) + '" width="360" height="7" fill="' + (r % 2 ? "#2b4a8a" : "#3a5aa0") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tsws4)"/>' + stars(16, 4, 50) +
      '<g class="tswFw"><circle cx="70" cy="34" r="16" fill="none" stroke="' + PINK + '" stroke-width="2" stroke-dasharray="3 4"/></g>' +
      '<g class="tswFw tswF2"><circle cx="330" cy="28" r="18" fill="none" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="3 4"/></g>' +
      /* light towers */
      '<rect x="24" y="22" width="4" height="70" fill="#666"/><rect x="12" y="12" width="28" height="14" fill="#fff6c8" class="tswGlow"/>' +
      '<rect x="372" y="22" width="4" height="70" fill="#666"/><rect x="360" y="12" width="28" height="14" fill="#fff6c8" class="tswGlow"/>' +
      /* the grandstand roof and its posts */
      '<path d="M20 70h360l-12 -14H32z" fill="#c9c2b0"/><rect x="20" y="70" width="360" height="12" fill="#e8e2d2"/>' +
      '<g fill="#8a8478">' + [60, 120, 180, 240, 300, 340].map(x => '<rect x="' + x + '" y="82" width="4" height="42"/>').join("") + '</g>' +
      seats + crowd(104, 22, 20, 380, ["#f2a7c3", "#fff", "#e9c46a", "#c0392b", "#7fb6e8"]) +
      '<rect x="0" y="124" width="400" height="8" fill="#2a3a2a"/>' +
      /* grass, the infield dirt, home plate */
      '<rect x="0" y="132" width="400" height="128" fill="#3f8a3a"/><path d="M0 150h400M0 180h400M0 214h400" stroke="#4a9a44" stroke-width="10"/>' +
      '<path d="M200 248L80 160h240z" fill="#c48a52"/><path d="M200 246L110 176h180z" fill="#3f8a3a"/>' +
      '<path d="M194 238h12v5l-6 5l-6 -5z" fill="#fff"/>' +
      singer(200, 214) +
      '<rect x="300" y="200" width="88" height="40" rx="3" fill="#1d2433" stroke="' + GOLD + '" stroke-width="2"/><text x="344" y="216" text-anchor="middle" ' + F + ' font-size="8" fill="' + GOLD + '">ANTHEM</text><text x="344" y="231" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">READING</text>',
      sky("tsws4", "#141c3c", "#3a3f7a"));
  }

  /* 5. Grandview Blvd at Woodside Ave in Wyomissing: a tagged wall, the Reading Pagoda lit up on Mount Penn behind */
  function tswcorner() {
    let pag = "";
    for (let i = 0; i < 7; i++) {
      const w = 64 - i * 7, y = 104 - i * 11, x = 300 - w / 2;
      pag += '<rect x="' + (x + 6) + '" y="' + (y - 8) + '" width="' + (w - 12) + '" height="9" fill="#e9dcc0"/>' +
        '<path d="M' + (x - 4) + ' ' + (y + 1) + 'q' + (w / 2 + 4) + ' -10 ' + (w + 8) + ' 0l-6 -6h' + (-(w - 4)) + 'z" fill="#b3202a"/>' +
        '<path d="M' + (x - 4) + ' ' + (y + 1) + 'q' + (w / 2 + 4) + ' -10 ' + (w + 8) + ' 0" stroke="#ff5a5a" stroke-width="1.5" fill="none" class="tswGlow"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#tsws5)"/>' + stars(22, 4, 70) +
      /* Mount Penn and the Pagoda on top of it */
      '<path d="M120 140q90 -60 180 -46t140 20v26z" fill="#1f2a3e"/><path d="M180 140q60 -40 120 -40q60 0 100 14v26z" fill="#253350"/>' +
      '<g opacity=".18"><circle cx="300" cy="70" r="44" fill="#ff5a5a" class="tswGlow"/></g>' + pag +
      '<path d="M297 22v-10M303 22v-10M296 14h8" stroke="#e9c46a" stroke-width="1.5"/>' +
      /* Wyomissing trees */
      '<g fill="#1d3a2a"><circle cx="40" cy="120" r="26"/><circle cx="80" cy="128" r="20"/><circle cx="200" cy="126" r="22"/></g>' +
      /* the wall with the tags */
      '<rect x="0" y="140" width="400" height="66" fill="#7a5a4a"/><path d="M0 154h400M0 168h400M0 182h400M0 196h400" stroke="#6a4c3e" stroke-width="1"/>' +
      tag("TAY", 286, 202, 20, BLUE, -4) +
      tag("TAYLOR", 70, 190, 38, PINK, -4) +
      tag("SWIFTIE", 248, 170, 18, GOLD, -6) +
      tag("13", 352, 198, 22, "#fff", -3) +
      '<g class="tswSpark"><path d="M232 152l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="tswSpark tswS2"><path d="M70 150l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="206" width="400" height="8" fill="#b8b2a6"/><rect x="0" y="214" width="400" height="46" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* green street signs */
      '<rect x="40" y="40" width="5" height="174" fill="#5a5f66"/>' +
      '<rect x="6" y="38" width="122" height="22" rx="3" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="67" y="53.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">GRANDVIEW BLVD</text>' +
      '<rect x="6" y="62" width="110" height="22" rx="3" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="61" y="77.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">WOODSIDE AVE</text>',
      sky("tsws5", "#0e1430", "#3a3166"));
  }

  window.SCENES = { tswstation, tswfarm, tswgym, tswballpark, tswcorner };
})();
