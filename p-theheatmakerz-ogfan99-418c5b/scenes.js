/* The Heatmakerz producer scenes */
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
  const FLAME = "#ff5a2c", PURPLE = "#9a4fd0", GOLD = "#f2c230", RED = "#ee352e";
  const windows = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (((r * 7 + c * 3) % 5) < 2 ? lit : dark) + '"/>'; return s; };

  /* 1. 145 St on the Lenox Av line, underground: white tile, the black name tablet, the red 3 pulling in */
  function station() {
    let tiles = ""; for (let y = 0; y < 150; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfcbbf" stroke-width="1"/>';
    for (let y = 0; y < 150; y += 10) for (let x = (y / 10 % 2) * 10; x < 400; x += 20) tiles += '<path d="M' + x + ' ' + y + 'v10" stroke="#cfcbbf" stroke-width="1"/>';
    let win = ""; for (let x = 26; x < 290; x += 44) win += '<rect x="' + x + '" y="98" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let col = ""; [70, 200, 330].forEach(x => col += '<rect x="' + x + '" y="0" width="12" height="150" fill="#1f5e3a"/><rect x="' + (x - 2) + '" y="0" width="16" height="8" fill="#174a2d"/>');
    return svg(
      '<rect width="400" height="150" fill="#ece8dc"/>' + tiles +
      '<rect x="0" y="54" width="400" height="10" fill="#8a2a2a"/>' +
      '<rect x="96" y="14" width="200" height="36" rx="3" fill="#111"/><rect x="96" y="14" width="200" height="4" fill="#fff"/>' +
      '<text x="110" y="41" ' + font + ' font-size="18" fill="#fff">145 St</text>' + bullet(272, 33, "3", RED) +
      col +
      '<g class="anim-train">' +
        '<rect x="10" y="82" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="126" width="300" height="5" fill="#6b7280"/>' + win +
        '<circle cx="302" cy="134" r="4" fill="#fff6c2"/>' + bullet(290, 100, "3", RED) +
      '</g>' +
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/><rect x="0" y="152" width="400" height="44" fill="#8a8c90"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#24252b"/>' +
      tag("HEATMAKERZ", 24, 238, 34, FLAME, -5) + tag("DIPSET", 280, 240, 26, PURPLE, -7));
  }

  /* 2. The Apollo on W 125th: the red vertical blade sign, the marquee with chasing bulbs, the line out front */
  function apollo() {
    let bulbs = ""; for (let i = 0; i < 26; i++) bulbs += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + (92 + i * 9) + '" cy="112" r="2.4" fill="#ffe28a"/><circle class="bl bl' + ((i + 2) % 4 + 1) + '" cx="' + (92 + i * 9) + '" cy="150" r="2.4" fill="#ffe28a"/>';
    let blade = ""; "APOLLO".split("").forEach((c, i) => blade += '<text x="200" y="' + (30 + i * 14) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff4c8">' + c + '</text>');
    let line = ""; for (let i = 0; i < 9; i++) line += '<g class="bob" style="animation-delay:' + (i * .15) + 's"><rect x="' + (60 + i * 30) + '" y="196" width="12" height="26" rx="5" fill="' + ["#2a2a3a", "#5a2a6a", "#3a2a1a", "#1a3a5a"][i % 4] + '"/><circle cx="' + (66 + i * 30) + '" cy="190" r="6" fill="#3a2a22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(10) +
      brick(40, 20, 320, 200, "#8a5a3c", "#6f4630") + windows(60, 30, 8, 2, 38, 26, 20, 16, "#ffe08a", "#3a2a24") +
      '<rect x="186" y="10" width="28" height="94" rx="3" fill="' + RED + '" stroke="#fff4c8" stroke-width="1.5"/>' + blade +
      '<rect x="80" y="104" width="240" height="54" fill="#b0261e" stroke="#ffe28a" stroke-width="2"/>' + bulbs +
      '<text x="200" y="132" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">AMATEUR NIGHT</text>' +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">WEDNESDAYS</text>' +
      '<rect x="40" y="158" width="320" height="62" fill="#3a1e18"/><rect x="150" y="166" width="100" height="54" fill="#f2d48a" opacity=".85"/>' +
      line +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4c52"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="232" width="40" height="14" rx="4" fill="' + PURPLE + '"/></g><g class="car car2"><rect x="0" y="236" width="34" height="12" rx="4" fill="#e8e8e8"/></g>',
      sky("s2", "#0d1030", "#4a2a5a"));
  }

  /* 3. W 47th St, the Diamond District, where Rsonist's studio sits: the diamond-topped lamp posts, jewelers' windows, the pads lit upstairs */
  function district() {
    const diamond = (x, y) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + (200 - y) + '" fill="#2a2d33"/><path class="bl" d="M' + x + ' ' + (y - 30) + 'l14 14-14 18-14-18z" fill="#dff4ff" stroke="#9fd3ff" stroke-width="1.5"/><path d="M' + (x - 14) + ' ' + (y - 16) + 'h28M' + x + ' ' + (y - 30) + 'v32" stroke="#9fd3ff" stroke-width="1"/>';
    let shops = ""; [[20, "#1f2c4a"], [120, "#3a1f3a"], [220, "#1f3a33"], [320, "#3a2e1f"]].forEach(([x, c]) => shops += '<rect x="' + x + '" y="140" width="80" height="62" fill="' + c + '" stroke="#c9a24a" stroke-width="2"/><rect x="' + (x + 8) + '" y="150" width="64" height="30" fill="#0d0f14"/>' +
      '<circle class="bl" cx="' + (x + 24) + '" cy="166" r="3" fill="#fff"/><circle class="bl bl2" cx="' + (x + 40) + '" cy="164" r="3" fill="#bfe8ff"/><circle class="bl bl3" cx="' + (x + 56) + '" cy="167" r="3" fill="#fff"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<rect x="0" y="20" width="200" height="120" fill="#5c5f68"/><rect x="200" y="0" width="200" height="140" fill="#6b6e78"/>' +
      windows(14, 30, 7, 3, 26, 30, 16, 20, "#ffe08a", "#2f3138") +
      '<rect x="222" y="12" width="160" height="60" fill="#1a1420" stroke="' + FLAME + '" stroke-width="2"/>' + pads(236, 24, FLAME, PURPLE) +
      '<rect x="330" y="20" width="40" height="44" fill="#111"/><circle class="th" cx="350" cy="42" r="14" fill="#333" stroke="#777" stroke-width="2"/><circle cx="350" cy="42" r="5" fill="#666"/>' +
      '<rect x="222" y="80" width="160" height="50" fill="#5a5d66"/>' + windows(230, 88, 6, 2, 26, 20, 16, 12, "#ffe08a", "#2f3138") +
      shops +
      '<rect x="60" y="112" width="280" height="22" fill="#111"/><text x="200" y="128" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">DIAMOND DISTRICT</text>' +
      diamond(24, 96) + diamond(376, 96) +
      '<rect x="0" y="202" width="400" height="58" fill="#4a4c52"/><rect x="0" y="202" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="222" width="46" height="16" rx="4" fill="#f2c230"/></g>' +
      tag("HEAT", 300, 252, 20, FLAME, -4),
      sky("s3", "#1a2140", "#5a5a7a"));
  }

  /* 4. Rucker Park, W 155th and Frederick Douglass Blvd: the court, the fence, the ball going up, the Polo Grounds Towers behind */
  function rucker() {
    const tower = x => '<rect x="' + x + '" y="20" width="44" height="120" fill="#7a3e2c"/><rect x="' + (x + 10) + '" y="10" width="24" height="130" fill="#8a4a34"/>' + windows(x + 4, 28, 4, 9, 10, 12, 5, 6, "#ffe08a", "#4a2418");
    let fence = ""; for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 120l10 30M' + (x + 10) + ' 120l-10 30" stroke="#9aa0a6" stroke-width=".8" opacity=".7"/>';
    let crowd = ""; for (let i = 0; i < 20; i++) crowd += '<circle class="bob" style="animation-delay:' + (i % 5) * .2 + 's" cx="' + (10 + i * 20) + '" cy="' + (166 + (i % 2) * 4) + '" r="6" fill="' + ["#3a2a22", "#5a3a2a", "#2a1e18"][i % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      tower(30) + tower(130) + tower(230) + tower(330) +
      '<rect x="0" y="118" width="400" height="4" fill="#6b7076"/>' + fence + '<rect x="0" y="150" width="400" height="4" fill="#6b7076"/>' +
      '<rect x="0" y="154" width="400" height="22" fill="#5a5d66"/>' + crowd +
      '<rect x="0" y="176" width="400" height="84" fill="#2f6fa8"/><rect x="40" y="186" width="320" height="66" fill="#3a8a5a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 186v66" stroke="#fff" stroke-width="2"/><circle cx="200" cy="219" r="16" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="356" y="130" width="5" height="80" fill="#888"/><rect x="340" y="124" width="24" height="18" fill="#fff" stroke="#333"/><path d="M340 144h-10" stroke="' + FLAME + '" stroke-width="3"/>' +
      '<g class="bob" style="animation-duration:.8s"><circle cx="300" cy="168" r="8" fill="#e07b2c" stroke="#5a2a10" stroke-width="1.5"/></g>' +
      tag("RUCKER", 60, 246, 22, GOLD, -4),
      sky("s4", "#ff9a5a", "#ffd9a0"));
  }

  /* 5. Adam Clayton Powell Jr Blvd and W 125th: green street signs, the tag wall, the white Hotel Theresa tower behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="150" y="14" width="120" height="130" fill="#ece6d6"/><rect x="170" y="4" width="80" height="14" fill="#e2dbc8"/>' +
      windows(158, 24, 9, 9, 12, 13, 7, 8, "#ffe08a", "#8a8474") +
      '<rect x="40" y="60" width="90" height="84" fill="#3a3550"/>' + windows(48, 68, 6, 5, 14, 14, 8, 8, "#ffe08a", "#2a2640") +
      '<rect x="290" y="70" width="80" height="74" fill="#3a3550"/>' + windows(298, 78, 5, 4, 14, 14, 8, 8, "#ffe08a", "#2a2640") +
      brick(0, 140, 400, 84, "#7e4430", "#62331f") +
      tag("HEATMAKERZ", 20, 196, 40, FLAME, -5) + tag("DIPSET", 210, 216, 22, PURPLE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="356" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(250, 44, 146, "Adam C Powell Blvd") + sign(300, 70, 90, "W 125 St") +
      '<circle class="bl" cx="359" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#5a2a4a"));
  }

  window.SCENES = { station: station, apollo: apollo, district: district, rucker: rucker, corner: corner };
})();
