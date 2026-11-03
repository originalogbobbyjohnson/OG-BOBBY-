/* Kenny Beats producer scenes */
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
  const ORANGE = "#ff7a1a", SKY = "#38c6f4", YEL = "#f2e14a", RED = "#d8432f";
  const mini = (x, y, cols, rows, w, h, gap) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) s += '<rect class="pd p' + ((r * cols + c) % 8 + 1) + '" x="' + (x + c * (w + gap)) + '" y="' + (y + r * (h + gap)) + '" width="' + w + '" height="' + h + '" rx="1.5" fill="' + (r % 2 ? SKY : ORANGE) + '"/>'; return s; };
  const windows = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (((r * 7 + c * 3) % 5) < 2 ? lit : dark) + '"/>'; return s; };

  /* 1. Greenwich on Metro-North's New Haven Line: the silver M8 with its red stripe pulling in, the platform canopy, the station sign */
  function station() {
    let win = ""; for (let x = 26; x < 290; x += 44) win += '<rect x="' + x + '" y="98" width="30" height="20" rx="3" fill="#dff1ff" opacity=".9"/>';
    let posts = ""; [40, 160, 280, 380].forEach(x => posts += '<rect x="' + x + '" y="40" width="5" height="44" fill="#4a4d52"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(12) +
      '<path d="M0 30h400v10H0z" fill="#5a5d66"/>' + posts +
      '<rect x="110" y="48" width="180" height="30" rx="3" fill="#111"/><rect x="110" y="48" width="180" height="3" fill="#fff"/>' +
      '<text x="124" y="70" ' + font + ' font-size="16" fill="#fff">Greenwich</text>' +
      '<rect x="220" y="56" width="62" height="16" rx="8" fill="' + RED + '"/><text x="251" y="68" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">NEW HAVEN</text>' +
      '<g class="anim-train">' +
        '<rect x="10" y="86" width="300" height="60" rx="10" fill="#d6dadf" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="126" width="300" height="6" fill="' + RED + '"/>' + win +
        '<circle cx="302" cy="138" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="146" width="400" height="8" fill="#eab308"/><rect x="0" y="154" width="400" height="40" fill="#8a8c90"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#23262b"/>' +
      tag("KENNY BEATS", 30, 238, 36, ORANGE, -5) + tag("CT", 320, 236, 28, SKY, -7),
      sky("s1", "#0e1838", "#5a4a7a"));
  }

  /* 2. The Cave: his studio couch, the keys and drum pads, the session on screen, the camera rolling for the show */
  function cave() {
    let clips = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) clips += '<rect class="pd p' + ((r * 6 + c) % 8 + 1) + '" x="' + (152 + c * 18) + '" y="' + (30 + r * 14) + '" width="15" height="10" fill="' + [ORANGE, SKY, YEL, "#7ae07a"][(r + c) % 4] + '"/>';
    let keys = ""; for (let i = 0; i < 16; i++) keys += '<rect x="' + (140 + i * 9) + '" y="176" width="8" height="30" fill="#f4f4f0" stroke="#999" stroke-width=".6"/>';
    for (let i = 0; i < 16; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) keys += '<rect x="' + (146 + i * 9) + '" y="176" width="5" height="18" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#1c1820"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a2430"/>' +
      '<path d="M0 20h400M0 60h400M0 100h400" stroke="#3a3240" stroke-width="2"/>' +
      '<rect x="140" y="20" width="124" height="70" rx="3" fill="#0e0e12" stroke="#555" stroke-width="3"/>' + clips +
      '<rect x="0" y="150" width="400" height="110" fill="#4a3528"/>' +
      '<rect x="14" y="110" width="110" height="60" rx="10" fill="#7a4a8a"/><rect x="8" y="150" width="122" height="40" rx="10" fill="#6a3a7a"/>' +
      '<rect x="130" y="168" width="160" height="44" rx="3" fill="#2a2a2e"/>' + keys +
      '<rect x="296" y="160" width="70" height="52" rx="4" fill="#8c9096" stroke="#4a4d52" stroke-width="2"/>' + mini(302, 168, 4, 3, 12, 10, 4) +
      '<path d="M350 150l-12 -60M350 150l12 -60M350 150v-60" stroke="#666" stroke-width="3"/><rect x="330" y="72" width="40" height="24" rx="3" fill="#222"/><circle cx="364" cy="84" r="8" fill="#444"/><circle class="bl" cx="336" cy="78" r="3" fill="' + RED + '"/>' +
      tag("THE CAVE", 150, 140, 26, ORANGE, -4),
      "");
  }

  /* 3. The Loudpvck years: a festival stage, the lasers sweeping, the crowd jumping */
  function stage() {
    let lasers = ""; for (let i = 0; i < 6; i++) lasers += '<path class="flk' + (i % 2 ? " flk2" : "") + '" d="M200 96L' + (i * 80 - 20) + ' 0" stroke="' + [SKY, "#7ae07a", ORANGE][i % 3] + '" stroke-width="2" opacity=".8"/>';
    let crowd = ""; for (let i = 0; i < 24; i++) crowd += '<g class="bob" style="animation-delay:' + (i % 6) * .1 + 's;animation-duration:.5s"><circle cx="' + (8 + i * 17) + '" cy="' + (212 + (i % 3) * 6) + '" r="7" fill="#15131a"/><rect x="' + (2 + i * 17) + '" y="' + (218 + (i % 3) * 6) + '" width="12" height="30" fill="#15131a"/>' + (i % 4 === 0 ? '<path d="M' + (8 + i * 17) + ' ' + (206 + (i % 3) * 6) + 'l6 -20" stroke="#15131a" stroke-width="4"/>' : "") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#07060c"/>' + stars(16) + lasers +
      '<rect x="70" y="90" width="260" height="70" fill="#1a1a24" stroke="#444" stroke-width="2"/><rect x="90" y="98" width="220" height="40" fill="#0e1430"/>' +
      '<text class="flk" x="200" y="126" text-anchor="middle" ' + font + ' font-size="22" fill="' + SKY + '">LOUDPVCK</text>' +
      '<rect x="160" y="140" width="80" height="20" fill="#2a2a2e"/>' + mini(164, 143, 6, 2, 10, 6, 2) +
      '<rect x="0" y="160" width="400" height="12" fill="#2a2a30"/>' + crowd,
      "");
  }

  /* 4. Greenwich Avenue: the shops, the street trees, and the town's famous traffic officer on his box waving cars through */
  function avenue() {
    let shops = ""; [[0, "#e8dcc4"], [80, "#c9d6e0"], [160, "#e0c4c4"], [240, "#d6e0c9"], [320, "#e8e0b8"]].forEach(([x, c], i) => shops += '<rect x="' + x + '" y="60" width="80" height="110" fill="' + c + '" stroke="#8a7a6a" stroke-width="2"/><rect x="' + (x + 8) + '" y="120" width="64" height="40" fill="#2a3a4a"/><rect x="' + (x + 6) + '" y="108" width="68" height="10" fill="' + [ORANGE, "#2f6a4a", "#2a4a8a", RED, "#5a3a2a"][i] + '"/>' + windows(x + 12, 72, 3, 2, 22, 16, 12, 10, "#ffe08a", "#5a5a6a"));
    let trees = ""; [40, 200, 360].forEach(x => trees += '<rect x="' + (x - 3) + '" y="150" width="6" height="40" fill="#5a3a22"/><circle cx="' + x + '" cy="146" r="18" fill="#2f7a3a"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + shops + trees +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4c52"/><path d="M0 225h400" stroke="#eab308" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="180" y="200" width="40" height="18" fill="#e8e8e8" stroke="#333"/>' +
      '<rect x="192" y="166" width="16" height="34" rx="3" fill="#1f2c4a"/><circle cx="200" cy="158" r="8" fill="#1f2c4a"/><rect x="190" y="148" width="20" height="5" fill="#111"/>' +
      '<g class="bob" style="animation-duration:.6s"><path d="M208 172l18 -12" stroke="#1f2c4a" stroke-width="5" stroke-linecap="round"/><circle cx="227" cy="159" r="3.5" fill="#fff"/></g>' +
      '<path d="M192 172l-12 10" stroke="#1f2c4a" stroke-width="5" stroke-linecap="round"/>' +
      '<g class="car"><rect x="0" y="232" width="44" height="16" rx="4" fill="' + SKY + '"/></g><g class="carL"><rect x="0" y="200" width="40" height="14" rx="4" fill="' + YEL + '"/></g>' +
      tag("GREENWICH AV", 230, 40, 18, ORANGE, -3),
      sky("s4", "#7ab8e8", "#d8ecf8"));
  }

  /* 5. Greenwich Av and Putnam Av: green street signs, the tag wall, Long Island Sound and the Great Captain Island lighthouse behind */
  function corner() {
    let waves = ""; for (let i = 0; i < 7; i++) waves += '<path class="bob" style="animation-delay:' + (i * .2) + 's" d="M' + (i * 60) + ' ' + (118 + (i % 2) * 8) + 'q15 -4 30 0t30 0" stroke="#7ab0d0" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="0" y="100" width="400" height="44" fill="#1e3a5a"/>' + waves +
      '<path d="M120 104q40 -14 90 0z" fill="#2a3a2a"/>' +
      '<rect x="146" y="74" width="34" height="26" fill="#a8a29a"/><path d="M142 74l21 -12 21 12z" fill="#6a3a2a"/><rect x="156" y="44" width="12" height="22" fill="#a8a29a"/><rect x="154" y="36" width="16" height="10" fill="#222"/>' +
      '<circle class="flk" cx="162" cy="41" r="4" fill="#fff6c2"/><path class="flk flk2" d="M166 41l70 -12v24z" fill="#fff6c2" opacity=".25"/>' +
      brick(0, 140, 400, 84, "#7e4430", "#62331f") +
      tag("KENNY BEATS", 20, 196, 40, ORANGE, -5) + tag("THE CAVE", 230, 216, 22, SKY, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="356" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(270, 44, 122, "Greenwich Av") + sign(290, 70, 100, "Putnam Av") +
      '<circle class="bl" cx="359" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#3a4a6a"));
  }

  window.SCENES = { station: station, cave: cave, stage: stage, avenue: avenue, corner: corner };
})();
