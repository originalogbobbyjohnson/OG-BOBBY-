/* Hi-Tek producer game: Cincinnati, OH (West End). Union Terminal, the West End, the beat lab, the Roebling Bridge, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes reel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:reel 3s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-80px)}}.wv{animation:wave 2s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd23f", RED = "#e2483d", BLUE = "#4fb3d9", ORANGE = "#ff6319", BRICK = "#9a4a34", BRICK2 = "#7c3a29";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* Queensboro Bridge: cantilever towers + truss, light gray-tan steel */
  const BLU = "#4fc3f7", ORG = "#ff8a3d", SAND = "#d7c49e", LIME = "#d9c8a0";

  /* 1. Cincinnati Union Terminal: the Art Deco half-dome, the big clock, a train pulling in */
  function station() {
    let win = ""; for (let x = 24; x < 290; x += 40) win += '<rect x="' + x + '" y="186" width="28" height="16" rx="3" fill="#cfe6f5"/>';
    let rays = ""; for (let i = 0; i < 9; i++) { const a = Math.PI * (i + 1) / 10; rays += '<path d="M200 150L' + (200 - Math.cos(a) * 92) + ' ' + (150 - Math.sin(a) * 92) + '" stroke="#9c8a62" stroke-width="2"/>'; }
    return svg('<rect width="400" height="260" fill="url(#s1)"/>' +
      '<rect x="20" y="96" width="360" height="74" fill="' + LIME + '"/><rect x="20" y="92" width="360" height="6" fill="#b9a67a"/>' +
      '<path d="M90 170V150A110 110 0 0 1 310 150V170z" fill="' + LIME + '"/><path d="M104 170V150A96 96 0 0 1 296 150V170z" fill="#f1c76a"/>' + rays +
      '<path d="M104 150h192" stroke="#9c8a62" stroke-width="2"/>' +
      '<circle cx="200" cy="66" r="14" fill="#f7f1e1" stroke="#7a6a48" stroke-width="2"/><path d="M200 66v-9M200 66l6 4" stroke="#333" stroke-width="2" class="flk"/>' +
      '<rect x="12" y="4" width="250" height="30" rx="4" fill="#111"/><rect x="12" y="4" width="250" height="4" fill="#fff"/><text x="26" y="26" ' + font + ' font-size="15" fill="#fff">Cincinnati Union Terminal</text>' +
      '<g class="anim-train"><rect x="8" y="176" width="300" height="46" rx="6" fill="#c9ced6" stroke="#4b5563" stroke-width="2"/>' +
      '<rect x="8" y="206" width="300" height="5" fill="#1d3f8f"/><rect x="8" y="212" width="300" height="3" fill="#c8102e"/>' + win +
      '<circle cx="300" cy="216" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="222" width="400" height="8" fill="#eab308"/><rect x="0" y="230" width="400" height="30" fill="#2f2b2e"/>' +
      '<text x="20" y="251" ' + font + ' font-size="11" fill="#fff">CARDINAL</text>' + tag("HI-TEK", 270, 254, 26, BLU, -4),
      sky("s1", "#1b2a4a", "#f2a65a"));
  }

  /* 2. The West End: Italianate brick rowhouses, stoops, a streetlight flickering */
  function westend() {
    let rows = "";
    const cols = ["#8e3b2a", "#a5532f", "#7c3a29", "#94452f", "#8a4a3a"];
    for (let i = 0; i < 5; i++) {
      const x = i * 80, h = 110 + (i % 2) * 14, y = 200 - h;
      rows += '<rect x="' + x + '" y="' + y + '" width="78" height="' + h + '" fill="' + cols[i] + '"/><rect x="' + (x - 2) + '" y="' + (y - 8) + '" width="82" height="10" fill="#3a2a20"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) if (!(r == 2 && c == 1)) rows += '<rect x="' + (x + 10 + c * 22) + '" y="' + (y + 14 + r * 32) + '" width="12" height="22" rx="5" fill="' + ((i + r + c) % 3 ? "#2c2430" : "#ffd98a") + '"/><rect x="' + (x + 8 + c * 22) + '" y="' + (y + 10 + r * 32) + '" width="16" height="4" fill="#e8dcc4"/>';
      rows += '<rect x="' + (x + 32) + '" y="176" width="14" height="24" fill="#2a1a12"/><rect x="' + (x + 28) + '" y="200" width="22" height="6" fill="#9a9a9a"/>';
    }
    return svg('<rect width="400" height="260" fill="url(#s2)"/>' + stars(12) + rows +
      '<rect x="0" y="206" width="400" height="54" fill="#55575c"/><rect x="0" y="206" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="356" y="120" width="4" height="90" fill="#2b2b2b"/><circle class="flk" cx="358" cy="118" r="7" fill="#fff2b0"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="3" opacity=".9">THE WEST END</text>',
      sky("s2", "#101830", "#3a3060"));
  }

  /* 3. The beat lab: drum machine pads flashing, meters bouncing, a record spinning */
  function beatlab() {
    let pads = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pd p' + ((r * 4 + c) % 8 + 1) + '" x="' + (60 + c * 22) + '" y="' + (150 + r * 20) + '" width="18" height="16" rx="2" fill="' + ((r + c) % 2 ? BLU : ORG) + '"/>';
    let eq = ""; for (let i = 0; i < 6; i++) eq += '<rect class="mt mt' + (i % 5 + 1) + '" x="' + (256 + i * 16) + '" y="44" width="10" height="56" fill="' + (i > 3 ? ORG : BLU) + '"/>';
    return svg('<rect width="400" height="260" fill="#14171d"/><rect x="0" y="0" width="400" height="120" fill="#1b2029"/>' +
      '<rect x="24" y="24" width="190" height="34" rx="3" fill="#0b0d11" stroke="' + BLU + '" stroke-width="2"/>' +
      '<text x="119" y="48" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + BLU + '">HI-TEKNOLOGY</text>' +
      '<circle class="bl" cx="40" cy="84" r="6" fill="' + ORG + '"/><text x="54" y="89" ' + font + ' font-size="12" fill="#ddd">REC</text>' +
      '<rect x="244" y="34" width="120" height="74" rx="3" fill="#0b0d11" stroke="#444"/>' + eq +
      '<rect x="0" y="120" width="400" height="140" fill="#3a2e24"/><rect x="0" y="120" width="400" height="6" fill="#4a3b2e"/>' +
      '<rect x="40" y="134" width="134" height="112" rx="5" fill="#8f9399" stroke="#4a4d52" stroke-width="2"/>' +
      '<rect x="48" y="138" width="60" height="9" fill="#1f3a26"/><circle cx="130" cy="142" r="4" fill="#333"/><circle cx="150" cy="142" r="4" fill="#333"/>' + pads +
      '<rect x="200" y="150" width="170" height="88" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
      '<g class="vn"><circle cx="262" cy="194" r="34" fill="#0b0b0b"/><circle cx="262" cy="194" r="24" fill="none" stroke="#2a2a2a"/><circle cx="262" cy="194" r="11" fill="' + BLU + '"/><rect x="260" y="184" width="4" height="5" fill="#fff"/></g>' +
      '<path d="M346 160l-18 36" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>');
  }

  /* 4. The Roebling Bridge: light-blue cables, sandstone towers, the Ohio River rolling, cars crossing */
  function roebling() {
    const tower = x => '<rect x="' + (x - 14) + '" y="70" width="28" height="120" fill="#b98b5e"/><rect x="' + (x - 18) + '" y="62" width="36" height="10" fill="#8f6a46"/><rect x="' + (x - 6) + '" y="140" width="12" height="40" fill="#3a2a1e"/><path d="M' + (x - 12) + ' 70l12-14 12 14z" fill="#8f6a46"/>';
    let susp = ""; for (let x = 0; x <= 400; x += 12) { const y = x < 100 ? 150 - (x / 100) * 80 : x > 300 ? 70 + ((x - 300) / 100) * 80 : 70 + Math.pow((x - 200) / 100, 2) * -0 + 70 * (1 - Math.pow((x - 200) / 100, 2)) * 0 + (70 + 80 * (1 - Math.pow((x - 200) / 100, 2)) * 0.9); if (x > 100 && x < 300) susp += '<path d="M' + x + ' ' + (70 + 70 * (1 - Math.pow((x - 200) / 100, 2))) + 'V170" stroke="' + BLU + '" stroke-width="1"/>'; }
    return svg('<rect width="400" height="260" fill="url(#s4)"/>' +
      '<g fill="#2a3550"><rect x="250" y="80" width="30" height="90"/><rect x="286" y="50" width="26" height="120"/><path d="M286 50l13-12 13 12z"/><rect x="318" y="90" width="40" height="80"/><rect x="362" y="70" width="30" height="100"/></g>' +
      '<path d="M0 150Q50 110 100 70Q200 170 300 70Q350 110 400 150" fill="none" stroke="' + BLU + '" stroke-width="4"/>' + susp +
      '<rect x="0" y="168" width="400" height="8" fill="' + BLU + '"/>' + tower(100) + tower(300) +
      '<g class="car"><rect x="0" y="161" width="16" height="6" rx="2" fill="' + ORG + '"/></g><g class="carL"><rect x="0" y="161" width="16" height="6" rx="2" fill="#fff"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3d5a6c"/>' +
      '<g class="wv"><path d="M0 206q20-6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0M0 230q20-6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#9fd3e8" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3" opacity=".85">THE OHIO RIVER</text>',
      sky("s4", "#0f1a33", "#e0784a"));
  }

  /* 5. The corner: Linn St & Ezzard Charles Dr, HI-TEK tag, the Cincinnati skyline and its tall tower behind */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<g fill="#232a44"><rect x="20" y="76" width="36" height="54"/><rect x="62" y="56" width="30" height="74"/><rect x="100" y="66" width="40" height="64"/>' +
      '<rect x="150" y="22" width="30" height="108"/><rect x="156" y="12" width="18" height="12"/><rect x="162" y="2" width="6" height="12"/>' +
      '<rect x="190" y="40" width="34" height="90"/><path d="M190 40l17-20 17 20z"/><rect x="232" y="60" width="40" height="70"/><rect x="280" y="80" width="56" height="50"/></g>' +
      (() => { let w = ""; for (let i = 0; i < 16; i++) w += '<rect class="bl bl' + (i % 4 + 1) + '" x="' + (26 + (i * 43) % 300) + '" y="' + (60 + (i * 19) % 60) + '" width="3" height="4" fill="#ffd98a"/>'; return w; })() +
      '<rect x="0" y="120" width="400" height="104" fill="#7c3a29"/>' +
      (() => { let b = ""; for (let y = 128; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#653022" stroke-width="1"/>'; return b; })() +
      tag("HI-TEK", 26, 196, 48, BLU, -5) + tag("TEKZILLA", 150, 216, 22, ORG, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' +
      '<rect x="296" y="44" width="72" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="332" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Linn St</text>' +
      '<rect x="252" y="70" width="146" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="325" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Ezzard Charles Dr</text>' +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#2a4a6a"));
  }

  window.SCENES = { station: station, westend: westend, beatlab: beatlab, roebling: roebling, corner: corner };
})();
