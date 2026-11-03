/* Marco Polo producer game: 42 St-Port Authority, the Port Authority Bus Terminal, the beat lab, Toronto, Atlantic Av & Flatbush Av. 400 x 260 SVGs. */
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
  const GOLD = "#ffc94a", RED = "#e63946", BLUE = "#0039a6", TEAL = "#5cc8c8";

  /* 1. A/C/E train into 42 St-Port Authority Bus Terminal, underground */
  function station() {
    let tiles = "";
    for (let y = 0; y < 176; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfd3cc" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v176" stroke="#cfd3cc" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="176" fill="#e8eae4"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#1c1c20"/>' +
      '<rect class="flk" x="50" y="4" width="70" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="250" y="4" width="70" height="4" rx="2" fill="#fffbe6"/>' +
      '<rect x="0" y="20" width="400" height="10" fill="#b5462d"/><rect x="0" y="30" width="400" height="3" fill="#7a2c1a"/>' +
      '<rect x="20" y="42" width="360" height="44" rx="4" fill="#111"/><rect x="20" y="42" width="360" height="4" fill="#fff"/>' +
      '<text x="32" y="62" ' + font + ' font-size="15" fill="#fff">42 St - Port Authority</text><text x="32" y="79" ' + font + ' font-size="12" fill="#fff">Bus Terminal</text>' +
      bullet(296, 66, "A", BLUE) + bullet(322, 66, "C", BLUE) + bullet(348, 66, "E", BLUE) +
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + BLUE + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' + bullet(292, 132, "A", BLUE) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#14171c"/>' +
      '<rect x="19" y="0" width="14" height="186" fill="#26303a"/><rect x="367" y="0" width="14" height="186" fill="#26303a"/>' +
      tag("POLO", 50, 242, 36, GOLD, -5) + tag("BOOM BAP", 220, 240, 30, RED, -7));
  }

  /* 2. Port Authority Bus Terminal on 8th Av: dark steel X-truss facade, glass, bus ramp with buses rolling */
  function portauth() {
    let truss = "";
    for (let x = 20; x < 380; x += 60) truss += '<path d="M' + x + ' 70L' + (x + 60) + ' 150M' + (x + 60) + ' 70L' + x + ' 150" stroke="#4a4d55" stroke-width="5"/>' + '<rect x="' + (x - 3) + '" y="66" width="6" height="88" fill="#3d4048"/>';
    let glass = "";
    for (let x = 24; x < 376; x += 16) glass += '<rect x="' + x + '" y="74" width="12" height="72" fill="#f5d68a" opacity="' + (x % 48 === 24 ? .85 : .45) + '"/>';
    const bus = (cls, col) => '<g class="' + cls + '"><rect x="0" y="0" width="70" height="22" rx="4" fill="' + col + '"/><rect x="0" y="13" width="70" height="3" fill="#1d4ea8"/>' +
      '<rect x="6" y="4" width="10" height="7" fill="#bfe3ff"/><rect x="20" y="4" width="10" height="7" fill="#bfe3ff"/><rect x="34" y="4" width="10" height="7" fill="#bfe3ff"/><rect x="48" y="4" width="16" height="7" fill="#bfe3ff"/>' +
      '<circle cx="14" cy="22" r="4" fill="#111"/><circle cx="56" cy="22" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(14) +
      '<rect x="0" y="34" width="400" height="36" fill="#5a5048"/><rect x="0" y="34" width="400" height="5" fill="#6d625a"/>' +
      '<text x="200" y="60" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="4" fill="#f2efe6">PORT AUTHORITY</text>' +
      '<rect x="0" y="70" width="400" height="84" fill="#2a2a30"/>' + glass + truss +
      '<rect x="0" y="150" width="400" height="10" fill="#6d625a"/>' +
      '<path d="M0 178L400 166v10L0 188z" fill="#7a7a80"/>' +
      '<g transform="translate(0 150)">' + bus("car", "#f2f2f2") + '</g>' +
      '<g transform="translate(0 150)">' + bus("car car3", "#e9e4d8") + '</g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2b2b2e"/><path d="M0 226h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="carL"><rect x="0" y="234" width="34" height="12" rx="3" fill="#f6c518"/><circle cx="8" cy="246" r="3" fill="#111"/><circle cx="26" cy="246" r="3" fill="#111"/></g>' +
      '<rect x="300" y="196" width="6" height="40" fill="#3d4b3f"/>' + sign(268, 190, 70, "8 Av") +
      '<text x="20" y="214" ' + font + ' font-size="11" fill="#fff" opacity=".8" letter-spacing="2">8TH AVENUE, MIDTOWN</text>',
      sky("s2", "#121638", "#c4643a"));
  }

  /* 3. The beat lab: crates of soul records, sampler pads flashing, turntable spinning, speakers thumping, Brooklyn window */
  function beatlab() {
    let crates = "";
    [[18, 186], [78, 186]].forEach(([x, y]) => { crates += '<rect x="' + x + '" y="' + y + '" width="54" height="50" fill="#a0703f" stroke="#5e3d1d" stroke-width="2"/>';
      ["#e63946", "#ffc94a", "#5cc8c8", "#f2efe6", "#7b4fa0"].forEach((c, i) => crates += '<rect x="' + (x + 4 + i * 10) + '" y="' + (y - 14 + (i % 2) * 4) + '" width="8" height="30" fill="' + c + '"/>'); });
    let eq = "";
    for (let i = 0; i < 5; i++) eq += '<rect class="mt mt' + (i + 1) + '" x="' + (176 + i * 9) + '" y="70" width="6" height="34" fill="' + (i > 2 ? RED : "#5ee06a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#241a22"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#3b2d3a"/>' +
      '<rect x="24" y="20" width="120" height="96" fill="#1b2240" stroke="#7a5b4a" stroke-width="5"/>' +
      '<rect x="30" y="64" width="34" height="52" fill="#8a4a32"/><rect x="66" y="56" width="36" height="60" fill="#7a3f2a"/><rect x="104" y="68" width="36" height="48" fill="#8f5236"/>' +
      '<g fill="#ffd98a"><rect class="bl" x="36" y="72" width="6" height="8"/><rect x="50" y="88" width="6" height="8"/><rect class="bl bl3" x="74" y="66" width="6" height="8"/><rect x="88" y="86" width="6" height="8"/><rect class="bl bl2" x="112" y="78" width="6" height="8"/><rect x="126" y="96" width="6" height="8"/></g>' +
      '<circle cx="120" cy="36" r="9" fill="#fff3c4" opacity=".9"/><path d="M84 20v96M24 68h120" stroke="#7a5b4a" stroke-width="4"/>' +
      '<rect x="166" y="60" width="62" height="54" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq +
      '<g class="th"><rect x="250" y="30" width="54" height="84" rx="4" fill="#1a1a1c"/><circle cx="277" cy="56" r="11" fill="#333" stroke="#777"/><circle cx="277" cy="92" r="17" fill="#333" stroke="#777" stroke-width="2"/></g>' +
      '<g class="th"><rect x="318" y="30" width="54" height="84" rx="4" fill="#1a1a1c"/><circle cx="345" cy="56" r="11" fill="#333" stroke="#777"/><circle cx="345" cy="92" r="17" fill="#333" stroke="#777" stroke-width="2"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5a3e2b"/><rect x="0" y="150" width="400" height="6" fill="#6e4c34"/>' +
      '<rect x="146" y="166" width="104" height="78" rx="4" fill="#8e9297" stroke="#4a4d52" stroke-width="2"/><rect x="154" y="172" width="54" height="12" fill="#1f3a26"/>' +
      '<text x="158" y="182" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#7cf08a">DRUMS 01</text><circle cx="222" cy="178" r="4" fill="#333"/><circle cx="238" cy="178" r="4" fill="#333"/>' +
      pads(156, 196, RED, GOLD) + crates + turntable(270, 172, GOLD));
  }

  /* 4. Toronto: CN Tower over the skyline, a red streetcar rolling down Queen St */
  function toronto() {
    let sk = "";
    [[10, 140, 40], [54, 120, 34], [92, 150, 30], [240, 116, 40], [284, 136, 36], [324, 104, 30], [358, 146, 40]].forEach(([x, y, w]) => {
      sk += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="#24314a"/>';
      for (let yy = y + 8; yy < 190; yy += 12) for (let xx = x + 5; xx < x + w - 5; xx += 9) sk += '<rect x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#ffd98a" opacity="' + (((xx + yy) % 5) < 2 ? .9 : .25) + '"/>';
    });
    const tower = '<path d="M176 200L184 70h8l8 130z" fill="#c9c6bd"/><path d="M186 70h4V22h-4z" fill="#b8b5ad"/><path d="M188 22V2" stroke="#d8d5cc" stroke-width="2"/>' +
      '<ellipse cx="188" cy="96" rx="22" ry="9" fill="#bdb9b0"/><rect x="166" y="92" width="44" height="6" fill="#3c4a63"/><ellipse cx="188" cy="58" rx="7" ry="4" fill="#bdb9b0"/>' +
      '<circle class="bl" cx="188" cy="3" r="2.5" fill="#ff3b3b"/>';
    const streetcar = '<g class="car"><rect x="0" y="0" width="86" height="30" rx="5" fill="#d9262c"/><rect x="0" y="20" width="86" height="4" fill="#f2efe6"/>' +
      '<rect x="6" y="5" width="12" height="11" fill="#bfe3ff"/><rect x="22" y="5" width="12" height="11" fill="#bfe3ff"/><rect x="38" y="5" width="12" height="11" fill="#bfe3ff"/><rect x="54" y="5" width="12" height="11" fill="#bfe3ff"/><rect x="70" y="5" width="12" height="11" fill="#bfe3ff"/>' +
      '<path d="M43 0l10-14" stroke="#222" stroke-width="2"/><circle cx="16" cy="31" r="4" fill="#111"/><circle cx="70" cy="31" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(16) +
      '<circle cx="330" cy="40" r="14" fill="#fff1c4" opacity=".9"/>' + tower + sk +
      '<path d="M0 186h400" stroke="#222" stroke-width="1.5"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2f2f33"/><path d="M0 222h400M0 230h400" stroke="#8a8a8f" stroke-width="2"/>' +
      '<g transform="translate(0 194)">' + streetcar + '</g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".8" letter-spacing="3">WHERE IT STARTED: TORONTO</text>',
      sky("s4", "#0e1430", "#6a3e66"));
  }

  /* 5. The corner: Atlantic Av & Flatbush Av, MARCO POLO tag, the old Williamsburgh Savings Bank clock tower behind */
  function corner() {
    const tower = '<rect x="136" y="40" width="64" height="104" fill="#c9a77a"/><rect x="136" y="40" width="64" height="5" fill="#a88456"/>' +
      (() => { let w = ""; for (let y = 52; y < 140; y += 12) for (let x = 142; x < 196; x += 10) w += '<rect x="' + x + '" y="' + y + '" width="5" height="7" fill="' + ((x + y) % 3 ? "#5a4636" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="144" y="20" width="48" height="22" fill="#c4a072"/><circle cx="168" cy="31" r="8" fill="#f4ecd6" stroke="#6b5332" stroke-width="2"/><path d="M168 31v-5M168 31l4 2" stroke="#222" stroke-width="1.5"/>' +
      '<path d="M146 20Q168 -8 190 20z" fill="#d4a93a"/><path d="M168 4v-6" stroke="#d4a93a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="40" y="96" width="50" height="40" fill="#2a2440"/><rect x="230" y="84" width="70" height="52" fill="#2a2440"/><rect x="320" y="100" width="60" height="36" fill="#2a2440"/>' + tower +
      '<g class="car car2"><rect x="0" y="128" width="16" height="6" rx="2" fill="#fff"/></g>' +
      brick(0, 136, 400, 88, "#9a4a34", "#7c3a29") +
      tag("MARCO POLO", 18, 200, 38, GOLD, -5) + tag("BREUKELEN", 160, 218, 20, TEAL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(268, 44, 122, "Atlantic Av") + sign(282, 70, 100, "Flatbush Av") +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#7a3f4a"));
  }

  window.SCENES = { station: station, portauth: portauth, beatlab: beatlab, toronto: toronto, corner: corner };
})();
