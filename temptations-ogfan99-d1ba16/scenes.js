/* temptations scenes (Regions tab: Detroit). Otis Williams and Melvin Franklin at Northwestern High on W Grand Blvd, the Rooster Tail on the
   Detroit River (Temptations Live!), David Ruffin Ave (Parkside St, 6 to 7 Mile), and Otis C. Williams St (Wisconsin St at Santa Clara).
   CSS classes prefixed tm- (the page's own anim-train is kept, used on the bus). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tmglow{0%,100%{opacity:.45}50%{opacity:1}}.tm-glow{animation:tmglow 2.4s ease-in-out infinite}.tm-g2{animation-delay:-1.2s}' +
    '@keyframes tmnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-70px);opacity:0}}.tm-nt{animation:tmnote 3.4s ease-out infinite}.tm-nt2{animation-delay:-1.1s}.tm-nt3{animation-delay:-2.3s}' +
    '@keyframes tmstep{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}.tm-st{animation:tmstep 1.2s ease-in-out infinite}' +
    '@keyframes tmboat{0%{transform:translateX(-120px)}100%{transform:translateX(470px)}}.tm-boat{animation:tmboat 7s linear infinite}' +
    '@keyframes tmspray{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.tm-spr{transform-box:fill-box;transform-origin:100% 100%;animation:tmspray .5s ease-in-out infinite}' +
    '@keyframes tmcar{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.tm-car{animation:tmcar 9s linear infinite}.tm-car2{animation-delay:-4.5s}' +
    '@keyframes tmsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tm-sp{animation:tmsp 1.4s ease-out infinite}.tm-sp2{animation-delay:.45s}' +
    '@keyframes tmtw{0%,100%{opacity:.3}50%{opacity:1}}.tm-tw{animation:tmtw 2s ease-in-out infinite}.tm-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const T = (x, y, size, col, txt, anchor) => '<text x="' + x + '" y="' + y + '" ' + (anchor ? 'text-anchor="' + anchor + '" ' : '') + font + ' font-size="' + size + '" fill="' + col + '">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "tm-tw" + (i % 2 ? " tm-tw2" : "")) + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="tm-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a singer in silhouette (no face): head, suit, one arm out */
  const singer = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 34) + '" r="7" fill="#0a0a12"/><path d="M' + (x - 9) + ' ' + (y - 26) + 'h18l3 28h-24z" fill="' + c + '"/><path d="M' + (x - 2) + ' ' + (y - 26) + 'l2 8l2 -8z" fill="#f6efdc"/><rect x="' + (x - 8) + '" y="' + (y + 2) + '" width="6" height="18" fill="#0a0a12"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="6" height="18" fill="#0a0a12"/>' +
    '<path d="M' + (x + 8) + ' ' + (y - 22) + 'l13 -9" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/></g>';
  const greenSign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(x + w / 2, y + 14.5, 11.5, "#fff", txt, "middle");
  const brownSign = (x, y, w, top, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" rx="3" fill="#6b3f1f" stroke="#f3e2c0" stroke-width="1.5"/>' + T(x + w / 2, y + 11, 7, "#f3e2c0", top, "middle") + T(x + w / 2, y + 24, 11, "#fff", txt, "middle");
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + (y - 14) + '" width="62" height="16" rx="5" fill="' + c + '"/><path d="M12 ' + (y - 14) + 'l8 -10h22l8 10z" fill="' + c + '"/><rect x="22" y="' + (y - 22) + '" width="8" height="7" fill="#9ec3d8"/><rect x="33" y="' + (y - 22) + '" width="8" height="7" fill="#9ec3d8"/><circle cx="14" cy="' + (y + 2) + '" r="6" fill="#111"/><circle cx="48" cy="' + (y + 2) + '" r="6" fill="#111"/><circle cx="60" cy="' + (y - 8) + '" r="2.4" fill="#fff6c2"/></g>';
  const DDOT = "#0b6e4f", GOLD = "#f2c14e", SKYB = "#5fb8ff", RED = "#e0463c", CREAM = "#f6efdc";

  /* 1. A DDOT 3 Grand River bus pulling up to the Grand River & W Grand Blvd stop, a block from Northwestern High */
  function tmstation() {
    const bld = (x, w, top, c) => { let o = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (150 - top) + '" fill="' + c + '"/>';
      for (let yy = top + 10; yy < 138; yy += 20) for (let xx = x + 8; xx < x + w - 12; xx += 18) o += '<rect x="' + xx + '" y="' + yy + '" width="10" height="12" fill="' + ((xx + yy) % 3 ? "#26303c" : "#ffd98a") + '" opacity="' + ((xx + yy) % 3 ? 1 : .75) + '"/>';
      return o; };
    const bus = '<g class="anim-train"><rect x="30" y="104" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="30" y="154" width="250" height="14" fill="' + DDOT + '"/><rect x="30" y="150" width="250" height="4" fill="#ffcc33"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="114" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="34" y="112" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M49 112v56" stroke="#8a9096"/>' +
      '<rect x="34" y="106" width="70" height="8" rx="2" fill="#111"/>' + T(69, 112.5, 6.5, "#ffcc33", "3 GRAND RIVER", "middle") +
      '<circle cx="76" cy="180" r="13" fill="#1a1a1a"/><circle cx="76" cy="180" r="5" fill="#888"/><circle cx="236" cy="180" r="13" fill="#1a1a1a"/><circle cx="236" cy="180" r="5" fill="#888"/>' +
      '<circle cx="32" cy="162" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms1)"/>' + stars(12) + '<circle cx="352" cy="32" r="12" fill="#f4eccf"/>' +
      bld(0, 96, 70, "#6a3a30") + bld(100, 80, 54, "#4e4a5e") + bld(184, 90, 76, "#7a5a3a") + bld(278, 122, 62, "#5a3a48") +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("tm-car", 240, RED) + car("tm-car tm-car2", 240, "#d6d6d6") +
      '<rect x="308" y="100" width="5" height="92" fill="#555"/><rect x="292" y="88" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/>' + T(311, 103, 9, "#fff", "BUS", "middle") +
      '<rect x="296" y="114" width="30" height="14" rx="3" fill="#ffcc33"/>' + T(311, 125, 10, "#111", "3", "middle") +
      '<rect x="150" y="200" width="242" height="26" rx="3" fill="#111"/>' + T(160, 218, 13.5, "#fff", "Grand River &amp; W Grand Blvd") +
      '<rect x="366" y="205" width="20" height="16" rx="3" fill="' + DDOT + '"/>' + T(376, 217, 11, "#fff", "3", "middle") +
      T(200, 250, 9.5, "#fff", "DDOT ROUTE 3 · GRAND RIVER · A BLOCK FROM NORTHWESTERN HIGH", "middle"),
      sky("tms1", "#0a0f2e", "#5a3a6a"));
  }

  /* 2. Northwestern High on W Grand Blvd, where Otis Williams and Melvin Franklin sang together before there was a Temptations */
  function tmschool() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) { if (c === 4) continue; win += '<rect x="' + (52 + c * 34) + '" y="' + (74 + r * 30) + '" width="20" height="20" fill="' + ((r + c) % 4 ? "#2a3440" : "#ffd98a") + '" opacity="' + ((r + c) % 4 ? 1 : .8) + '"/><path d="M' + (62 + c * 34) + ' ' + (74 + r * 30) + 'v20M' + (52 + c * 34) + ' ' + (84 + r * 30) + 'h20" stroke="#8a7a6a" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#tmk1)"/>' + stars(8) +
      '<rect x="36" y="56" width="328" height="128" fill="#8a3e2c"/><rect x="30" y="50" width="340" height="10" fill="#c9b79a"/>' +
      '<rect x="166" y="40" width="68" height="144" fill="#9a4a34"/><rect x="160" y="34" width="80" height="10" fill="#c9b79a"/>' +
      win +
      '<rect x="182" y="130" width="36" height="54" fill="#2a1a14"/><rect x="186" y="134" width="13" height="46" fill="#ffd98a" opacity=".7" class="tm-glow"/><rect x="201" y="134" width="13" height="46" fill="#ffd98a" opacity=".7" class="tm-glow tm-g2"/>' +
      '<rect x="172" y="50" width="56" height="70" fill="#a85a40"/>' +
      '<path d="M182 76h36v30h-36z" fill="#2a3440"/><path d="M200 76v30M182 91h36" stroke="#8a7a6a"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#3d5a2e"/><rect x="150" y="184" width="100" height="76" fill="#b8b0a0"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3f4148"/>' +
      '<rect x="62" y="196" width="276" height="30" rx="3" fill="#1d2b4a" stroke="' + GOLD + '" stroke-width="2"/>' + T(200, 216, 14, "#fff", "NORTHWESTERN HIGH SCHOOL", "middle") +
      note(120, 150, GOLD) + note(276, 146, SKYB, "tm-nt2") + note(330, 160, GOLD, "tm-nt3") +
      T(200, 252, 9.5, "#fff", "W GRAND BLVD · OTIS AND MELVIN SANG IN THESE HALLS", "middle"),
      sky("tmk1", "#101836", "#3a4a7a"));
  }

  /* 3. The Rooster Tail supper club on the Detroit River, where Temptations Live! was recorded; a hydroplane throws its rooster tail on the river */
  function tmrooster() {
    let lights = "";
    for (let i = 0; i < 20; i++) lights += '<circle cx="' + (24 + i * 18) + '" cy="58" r="2.2" fill="' + (i % 2 ? GOLD : SKYB) + '" class="tm-glow' + (i % 2 ? " tm-g2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tmr1)"/>' + stars(14) +
      /* Windsor shore far across */
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="' + (150 - (i * 37) % 22) + '" width="22" height="' + (12 + (i * 37) % 22) + '" fill="#1c2240"/>').join("") +
      '<rect x="0" y="160" width="400" height="100" fill="#13305a"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 46 + 6) + ' ' + (176 + (i % 3) * 22) + 'h24" stroke="#5fb8ff" stroke-width="1.5" opacity=".35"/>').join("") +
      /* the club on the bank */
      '<rect x="20" y="64" width="360" height="74" fill="#efe6d2"/><rect x="14" y="56" width="372" height="10" fill="#7a2a22"/>' + lights +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (36 + i * 58) + '" y="80" width="44" height="34" rx="2" fill="#ffcf7a" opacity=".85" class="tm-glow' + (i % 2 ? " tm-g2" : "") + '"/>').join("") +
      /* five matching suits in the big window */
      '<rect x="120" y="76" width="160" height="56" fill="#3a1a2a"/>' + [140, 170, 200, 230, 260].map((x, i) => singer(x, 112, i % 2 ? "#c43a3a" : "#d8443e", "tm-st")).join("") +
      '<rect x="0" y="138" width="400" height="22" fill="#5a5048"/>' +
      '<rect x="110" y="24" width="180" height="28" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + T(200, 44, 15, GOLD, "THE ROOSTER TAIL", "middle") +
      '<g class="tm-boat">' +
      '<path d="M0 214l12 -12h48l14 12z" fill="#f4f4f0" stroke="#333"/><rect x="26" y="196" width="18" height="8" rx="3" fill="' + RED + '"/>' + T(40, 211, 8, RED, "U-5") +
      '<path class="tm-spr" d="M0 212q-40 -6 -70 -44q-10 26 -4 46z" fill="#e8f4ff" opacity=".8"/></g>' +
      T(200, 252, 9.5, "#fff", "THE DETROIT RIVER · TEMPTATIONS LIVE! WAS CUT RIGHT HERE", "middle"),
      sky("tmr1", "#070a1c", "#26305a"));
  }

  /* 4. David Ruffin Ave: Parkside St between 6 and 7 Mile, renamed for the voice of My Girl, in front of the house he lived in */
  function tmruffin() {
    const house = (x, c, roof, lit) => '<rect x="' + x + '" y="110" width="96" height="70" fill="' + c + '"/><path d="M' + (x - 8) + ' 112l56 -38l56 38z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 12) + '" y="128" width="24" height="22" fill="' + (lit ? "#ffd98a" : "#2a3440") + '" opacity=".85"/><rect x="' + (x + 60) + '" y="128" width="24" height="22" fill="' + (lit ? "#2a3440" : "#ffd98a") + '" opacity=".85"/>' +
      '<rect x="' + (x + 40) + '" y="140" width="16" height="40" fill="#3a2418"/><rect x="' + (x - 4) + '" y="176" width="104" height="6" fill="#c9c0b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tmd1)"/>' + stars(10) + '<circle cx="60" cy="34" r="11" fill="#f4eccf"/>' +
      '<circle cx="14" cy="120" r="34" fill="#1f3a26"/><circle cx="386" cy="116" r="38" fill="#1f3a26"/>' +
      house(40, "#8a4a36", "#3a2a2a", true) + house(160, "#c8b89a", "#4a3a30", false) + house(280, "#6e5a48", "#2e2a30", true) +
      '<rect x="0" y="182" width="400" height="20" fill="#3d5a2e"/><rect x="0" y="202" width="400" height="10" fill="#b8b0a0"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#3f4148"/>' + car("tm-car", 246, SKYB) +
      '<rect x="196" y="80" width="5" height="140" fill="#777"/>' +
      brownSign(118, 58, 160, "HONORARY · 6 MILE TO 7 MILE", "DAVID RUFFIN AVE") + greenSign(142, 92, 112, "PARKSIDE ST") +
      note(250, 120, GOLD) + note(90, 104, SKYB, "tm-nt2") +
      T(200, 252, 9.5, "#fff", "PARKSIDE ST, WEST SIDE · RUFFIN LIVED ON THIS BLOCK", "middle"),
      sky("tmd1", "#0a1030", "#4a3a6a"));
  }

  /* 5. Wisconsin St & Santa Clara on the northwest side, under the Otis C. Williams St sign; TEMPTATIONS tagged; the Book Cadillac tower far off downtown */
  function tmcorner() {
    const bookcad = '<g opacity=".9"><rect x="292" y="40" width="54" height="120" fill="#5a3a34"/><rect x="300" y="26" width="38" height="16" fill="#5a3a34"/>' +
      '<path d="M300 26l6 -10l6 10zM313 26l6 -12l6 12zM326 26l6 -10l6 10z" fill="#4f8a74"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="298" y="' + (48 + i * 11) + '" width="42" height="4" fill="#ffd98a" opacity="' + (i % 3 ? .35 : .7) + '"/>').join("") + '</g>' +
      '<rect x="230" y="96" width="40" height="64" fill="#3a3448"/><rect x="352" y="90" width="44" height="70" fill="#3a3448"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tmc1)"/>' + stars(10) + bookcad +
      '<rect x="0" y="112" width="210" height="88" fill="#6a3a30"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (122 + i * 13) + 'h210" stroke="#5a2e26" stroke-width="1.5"/>').join("") +
      tag("TEMPTATIONS", 14, 168, 30, GOLD, -5) + tag("CLASSIC 5", 40, 194, 15, SKYB, -3) +
      '<rect x="0" y="200" width="400" height="12" fill="#c9c0b0"/><rect x="0" y="212" width="400" height="48" fill="#3f4148"/>' + car("tm-car", 244, RED) +
      '<rect x="258" y="70" width="5" height="142" fill="#777"/>' +
      brownSign(196, 46, 130, "HONORARY", "OTIS C. WILLIAMS ST") + greenSign(206, 80, 110, "Wisconsin St") + greenSign(214, 104, 94, "Santa Clara") +
      '<g class="tm-sp"><circle cx="176" cy="150" r="3" fill="' + GOLD + '"/></g><g class="tm-sp tm-sp2"><circle cx="186" cy="142" r="2.4" fill="' + SKYB + '"/></g>' +
      T(200, 252, 9.5, "#fff", "WISCONSIN ST &amp; SANTA CLARA · NORTHWEST SIDE · DETROIT", "middle"),
      sky("tmc1", "#0a0c24", "#5a3050"));
  }

  window.SCENES = { tmstation: tmstation, tmschool: tmschool, tmrooster: tmrooster, tmruffin: tmruffin, tmcorner: tmcorner };
})();
