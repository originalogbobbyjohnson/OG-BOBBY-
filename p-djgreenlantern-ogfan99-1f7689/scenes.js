/* DJ Green Lantern producer scenes */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const GREEN = "#39d353", GOLD = "#f2c230", RED = "#e2483d", BLUE = "#2a5fb0";
  const windows = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (((r * 7 + c * 3) % 5) < 2 ? lit : dark) + '"/>'; return s; };

  /* 1. The Rochester train station on Central Av: brick station with the tall glass entry, the silver train pulling in */
  function station() {
    let win = ""; for (let x = 26; x < 290; x += 44) win += '<rect x="' + x + '" y="112" width="30" height="18" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(12) +
      brick(40, 20, 320, 70, "#9a4e34", "#7a3c26") +
      '<rect x="160" y="6" width="80" height="84" fill="#9fc4d8" stroke="#e8e2d0" stroke-width="3"/>' +
      '<path d="M160 34h80M160 62h80M186 6v84M214 6v84" stroke="#e8e2d0" stroke-width="2"/>' +
      '<rect x="60" y="36" width="80" height="22" fill="#111"/><text x="100" y="52" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">ROCHESTER</text>' +
      '<rect x="260" y="36" width="80" height="22" fill="#111"/><text x="300" y="52" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">TRACK 1</text>' +
      '<rect x="0" y="90" width="400" height="6" fill="#4a4d52"/>' +
      '<g class="anim-train">' +
        '<rect x="10" y="100" width="300" height="50" rx="10" fill="#d6dadf" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="134" width="300" height="4" fill="' + BLUE + '"/><rect x="10" y="139" width="300" height="3" fill="' + RED + '"/>' + win +
        '<circle cx="302" cy="142" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="150" width="400" height="8" fill="#eab308"/><rect x="0" y="158" width="400" height="36" fill="#8a8c90"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#23262b"/>' +
      tag("GREEN LANTERN", 22, 238, 32, GREEN, -5) + tag("585", 320, 236, 26, GOLD, -7),
      sky("s1", "#0e1a30", "#4a6a7a"));
  }

  /* 2. The satellite radio booth in Midtown where he ran the Shade 45 show: ON AIR light, the board, two turntables, the city out the window */
  function booth() {
    let eq = ""; for (let i = 0; i < 8; i++) eq += '<rect class="mt mt' + (i % 5 + 1) + '" x="' + (226 + i * 12) + '" y="150" width="8" height="40" fill="' + (i > 5 ? RED : GREEN) + '"/>';
    let city = ""; for (let i = 0; i < 9; i++) city += '<rect x="' + (40 + i * 34) + '" y="' + (30 + (i * 37) % 50) + '" width="26" height="' + (90 - (i * 37) % 50) + '" fill="#1c2540"/>' + windows(43 + i * 34, 36 + (i * 37) % 50, 3, 4, 7, 12, 4, 5, "#ffe08a", "#2a3456");
    return svg(
      '<rect width="400" height="260" fill="#16131c"/>' +
      '<rect x="30" y="16" width="340" height="110" fill="#0b1226" stroke="#3a3a46" stroke-width="4"/>' + city +
      '<rect class="flk" x="150" y="2" width="100" height="22" rx="4" fill="' + RED + '"/><text x="200" y="18" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">ON AIR</text>' +
      '<rect x="0" y="134" width="400" height="126" fill="#2c2a30"/><rect x="0" y="134" width="400" height="6" fill="#3e3b44"/>' +
      turntable(10, 160, GREEN) + turntable(120, 160, GOLD) +
      '<rect x="220" y="144" width="104" height="54" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq +
      '<path d="M360 250v-80" stroke="#666" stroke-width="4"/><path d="M360 170l-20 -30" stroke="#666" stroke-width="4"/>' +
      '<rect x="326" y="118" width="20" height="30" rx="9" fill="#9a9ea4" transform="rotate(-30 336 133)"/>' +
      tag("SHADE 45", 230, 238, 22, GOLD, -4),
      "");
  }

  /* 3. High Falls on the Genesee River, downtown Rochester: the waterfall, the red-brick mills, the Pont de Rennes footbridge */
  function falls() {
    let water = ""; for (let i = 0; i < 9; i++) water += '<path class="bob" style="animation-delay:' + (i * .13) + 's;animation-duration:.7s" d="M' + (150 + i * 12) + ' 120v90" stroke="#e8f6ff" stroke-width="3" opacity=".8"/>';
    let ripples = ""; for (let i = 0; i < 6; i++) ripples += '<path class="bob" style="animation-delay:' + (i * .2) + 's" d="M' + (20 + i * 64) + ' ' + (232 + (i % 2) * 10) + 'q15 -5 30 0t30 0" stroke="#bfe0f0" stroke-width="2" fill="none" opacity=".7"/>';
    let truss = ""; for (let x = 80; x < 320; x += 20) truss += '<path d="M' + x + ' 90l10 -16 10 16" stroke="#3a4a5a" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      brick(0, 40, 120, 170, "#8a3e2a", "#6e2f1f") + windows(10, 52, 5, 6, 22, 24, 12, 14, "#ffe08a", "#4a2418") +
      brick(290, 50, 110, 160, "#9a4e34", "#7a3c26") + windows(300, 62, 4, 5, 24, 26, 12, 14, "#ffe08a", "#4a2418") +
      '<rect x="60" y="88" width="280" height="6" fill="#3a4a5a"/><rect x="60" y="72" width="280" height="3" fill="#3a4a5a"/>' + truss +
      '<rect x="120" y="120" width="170" height="10" fill="#6e6a60"/><rect x="140" y="126" width="130" height="90" fill="#7ab6d6"/>' + water +
      '<path d="M120 130l20 90M290 130l-20 90" stroke="#5a5650" stroke-width="10"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3f86b0"/>' + ripples +
      '<ellipse cx="205" cy="214" rx="80" ry="8" fill="#f2fbff" opacity=".7" class="bob"/>' +
      tag("FLOWER CITY", 140, 50, 20, GOLD, -3),
      sky("s3", "#5aa0d8", "#cfe6f4"));
  }

  /* 4. A Canal St mixtape table: stacks of Invasion tapes and CDs, a speaker thumping, the street rolling by */
  function tapes() {
    let cds = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) cds += '<rect x="' + (64 + c * 40) + '" y="' + (128 + r * 22) + '" width="34" height="18" fill="' + [GREEN, "#1a1a1a", GOLD, RED][(r + c) % 4] + '" stroke="#ddd" stroke-width="1"/><text x="' + (81 + c * 40) + '" y="' + (140 + r * 22) + '" text-anchor="middle" ' + font + ' font-size="6" fill="' + ((r + c) % 4 === 1 ? GREEN : "#111") + '">INVASION</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="0" y="10" width="400" height="100" fill="#5a4638"/>' + windows(14, 20, 12, 2, 32, 34, 20, 22, "#ffe08a", "#2f2620") +
      '<rect x="0" y="86" width="400" height="20" fill="#b0261e"/><text x="200" y="101" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">CANAL ST</text>' +
      '<rect x="0" y="106" width="400" height="10" fill="#8a8c90"/>' +
      '<rect x="50" y="122" width="300" height="74" fill="#2a3a5a"/><rect x="50" y="196" width="8" height="40" fill="#555"/><rect x="342" y="196" width="8" height="40" fill="#555"/>' + cds +
      '<rect x="356" y="132" width="36" height="60" rx="4" fill="#1a1a1e" stroke="#555" stroke-width="2"/><circle class="th" cx="374" cy="168" r="12" fill="#333" stroke="#777" stroke-width="2"/><circle cx="374" cy="144" r="5" fill="#444"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4c52"/>' +
      '<g class="car"><rect x="0" y="242" width="44" height="14" rx="4" fill="' + GOLD + '"/></g><g class="car car3"><rect x="0" y="244" width="34" height="12" rx="4" fill="#e8e8e8"/></g>' +
      tag("MIXTAPES", 8, 228, 18, GREEN, -4),
      sky("s4", "#26304a", "#6a6a8a"));
  }

  /* 5. Main St and State St, the Four Corners: green street signs, the tag wall, the Kodak Tower with its stepped top and flagpole behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="160" y="40" width="80" height="104" fill="#cfc6b0"/><rect x="170" y="26" width="60" height="14" fill="#c4bba4"/><rect x="180" y="16" width="40" height="10" fill="#b8ae96"/>' +
      '<rect x="198" y="0" width="4" height="16" fill="#888"/><path d="M202 2h14v8h-14z" fill="' + GOLD + '" class="bob"/>' +
      windows(166, 48, 7, 8, 10, 12, 6, 7, "#ffe08a", "#8a8270") +
      '<rect x="40" y="72" width="90" height="72" fill="#3a3550"/>' + windows(48, 80, 6, 4, 14, 14, 8, 8, "#ffe08a", "#2a2640") +
      '<rect x="270" y="80" width="90" height="64" fill="#3a3550"/>' + windows(278, 88, 6, 3, 14, 14, 8, 8, "#ffe08a", "#2a2640") +
      brick(0, 140, 400, 84, "#7e4430", "#62331f") +
      tag("GREEN LANTERN", 20, 196, 34, GREEN, -5) + tag("INVASION", 200, 216, 22, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="356" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(296, 44, 96, "Main St") + sign(304, 70, 90, "State St") +
      '<circle class="bl" cx="359" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1430", "#3a5a4a"));
  }

  window.SCENES = { station: station, booth: booth, falls: falls, tapes: tapes, corner: corner };
})();
