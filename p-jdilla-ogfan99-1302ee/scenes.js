/* J Dilla producer game: Conant Gardens, Detroit. QLine at Grand Blvd with the Fisher Building, Conant Gardens homes, the basement MPC studio, Pershing High, McDougall & Nevada with the RenCen. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}.car3{animation-delay:-5.2s}' +
    '@keyframes carsL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 3s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes sway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.sw{transform-box:fill-box;transform-origin:0% 50%;animation:sway 1.6s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,-20px);opacity:0}10%{opacity:1}100%{transform:translate(30px,200px);opacity:0}}.lf{animation:fall 5s linear infinite}.lf2{animation-delay:-1.3s}.lf3{animation-delay:-2.6s}.lf4{animation-delay:-3.9s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.nt{animation:note 2.6s ease-out infinite}.nt2{animation-delay:-.9s}.nt3{animation-delay:-1.7s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}15%{transform:scale(1.15)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .8s ease-out infinite}' +
    '.orb{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 14s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const brickLines = (y0, y1) => { let b = ""; for (let y = y0 + 6; y < y1; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#00000033" stroke-width="1"/>'; return b; };
  const crate = (x, y, col) => { let s = '<rect x="' + x + '" y="' + y + '" width="64" height="40" fill="#8a6a3c" stroke="#4a3418" stroke-width="2"/>'; for (let i = 0; i < 7; i++) s += '<rect x="' + (x + 4 + i * 8.4) + '" y="' + (y - 12 + (i % 3) * 3) + '" width="6" height="' + (20 - (i % 3) * 3) + '" fill="' + (i % 2 ? col : "#1d1d1d") + '"/>'; return s; };
  const GOLD = "#f4c04e", RED = "#d9534f", TEAL = "#7fb7be", BRICK = "#8e4a32", BRICK2 = "#6e3624", CREAM = "#efe3c8";
  /* Fisher Building: tall tan tower with a pyramid roof clad in gold-green tile */
  const fisher = (x, base, s) => '<g>' +
    '<rect x="' + (x - 40 * s) + '" y="' + (base - 70 * s) + '" width="' + (80 * s) + '" height="' + (70 * s) + '" fill="#b9a27c"/>' +
    '<rect x="' + (x - 18 * s) + '" y="' + (base - 150 * s) + '" width="' + (36 * s) + '" height="' + (80 * s) + '" fill="#c8b18a"/>' +
    '<path d="M' + (x - 20 * s) + ' ' + (base - 150 * s) + 'L' + x + ' ' + (base - 196 * s) + 'L' + (x + 20 * s) + ' ' + (base - 150 * s) + 'z" fill="#c9a640"/>' +
    '<path d="M' + x + ' ' + (base - 196 * s) + 'L' + (x + 20 * s) + ' ' + (base - 150 * s) + 'h-' + (8 * s) + 'z" fill="#9c8a3a"/>' +
    (() => { let w = ""; for (let r = 0; r < 8; r++) for (let c = 0; c < 3; c++) w += '<rect class="bl bl' + ((r + c) % 4 + 1) + '" x="' + (x - 13 * s + c * 10 * s) + '" y="' + (base - 144 * s + r * 9 * s) + '" width="' + (5 * s) + '" height="' + (5 * s) + '" fill="#ffe29a"/>'; return w; })() + '</g>';
  /* Renaissance Center: tall middle glass cylinder ringed by four shorter ones */
  const rencen = (x, base, s, col) => {
    let g = '<g fill="' + col + '">';
    [[-46, 90], [-26, 104], [26, 104], [46, 90]].forEach(([dx, h]) => g += '<rect x="' + (x + dx * s - 10 * s) + '" y="' + (base - h * s) + '" width="' + (20 * s) + '" height="' + (h * s) + '" rx="' + (6 * s) + '"/>');
    g += '<rect x="' + (x - 15 * s) + '" y="' + (base - 150 * s) + '" width="' + (30 * s) + '" height="' + (150 * s) + '" rx="' + (8 * s) + '"/></g>';
    for (let i = 0; i < 8; i++) g += '<rect class="bl bl' + (i % 4 + 1) + '" x="' + (x - 10 * s) + '" y="' + (base - 140 * s + i * 16 * s) + '" width="' + (20 * s) + '" height="' + (2 * s) + '" fill="#9cc4ff" opacity=".7"/>';
    return g;
  };
  const house = (x, y, w, glow) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="70" fill="' + BRICK + '"/>' +
    '<path d="M' + (x - 8) + ' ' + y + 'L' + (x + w / 2) + ' ' + (y - 34) + 'L' + (x + w + 8) + ' ' + y + 'z" fill="#3c3236"/>' +
    '<rect x="' + (x + 10) + '" y="' + (y + 12) + '" width="18" height="18" fill="#ffe7a8"/><rect x="' + (x + w - 28) + '" y="' + (y + 12) + '" width="18" height="18" fill="#2c2430"/>' +
    '<rect x="' + (x + w / 2 - 9) + '" y="' + (y + 36) + '" width="18" height="34" fill="#f2efe6"/><rect x="' + (x + 10) + '" y="' + (y + 42) + '" width="18" height="18" fill="#2c2430"/><rect x="' + (x + w - 28) + '" y="' + (y + 42) + '" width="18" height="18" fill="#ffe7a8"/>' +
    (glow ? '<rect class="flk" x="' + (x + 8) + '" y="' + (y + 72) + '" width="26" height="8" fill="' + GOLD + '"/>' : '<rect x="' + (x + 8) + '" y="' + (y + 72) + '" width="26" height="8" fill="#2a2228"/>') + '</g>';
  const tree = (x, y) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="40" fill="#4a3420"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="20" fill="#c8642a"/><circle cx="' + (x - 12) + '" cy="' + (y + 2) + '" r="13" fill="#e08a2e"/><circle cx="' + (x + 13) + '" cy="' + y + '" r="13" fill="#b5491f"/>';

  /* 1. QLine streetcar pulling into Grand Blvd on Woodward, Fisher Building's gold roof behind */
  function station() {
    let win = ""; for (let x = 26; x < 290; x += 38) win += '<rect x="' + x + '" y="128" width="26" height="20" rx="3" fill="#cfe6f5"/>';
    return svg('<rect width="400" height="260" fill="url(#s1)"/>' + stars(8) +
      fisher(330, 150, .62) + '<rect x="230" y="104" width="44" height="46" fill="#5d5466"/><rect x="0" y="110" width="70" height="40" fill="#4c4556"/>' +
      '<rect x="0" y="150" width="400" height="8" fill="#9a9aa0"/>' +
      '<rect x="20" y="18" width="200" height="34" rx="4" fill="#111"/><rect x="20" y="18" width="200" height="4" fill="#fff"/><text x="34" y="42" ' + font + ' font-size="16" fill="#fff">Grand Blvd</text>' + bullet(196, 35, "Q", RED) +
      '<g class="anim-train"><rect x="8" y="116" width="300" height="58" rx="10" fill="#f4f4f2" stroke="#55606a" stroke-width="2"/>' +
      '<rect x="8" y="152" width="300" height="7" fill="' + RED + '"/>' + win + '<path d="M150 116l-10-16h40l-10 16" stroke="#333" stroke-width="2" fill="none"/>' +
      '<circle cx="300" cy="164" r="4" fill="#fff6c2"/><circle cx="18" cy="164" r="4" fill="' + RED + '"/></g>' +
      '<path d="M0 100h400" stroke="#2c2c30" stroke-width="1.5"/>' +
      '<rect x="0" y="176" width="400" height="10" fill="#e7c64b"/><rect x="0" y="186" width="400" height="74" fill="#3a3a40"/>' +
      '<path d="M0 220h400M0 240h400" stroke="#55555c" stroke-width="3"/>' +
      '<text x="200" y="210" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="3" opacity=".85">WOODWARD AVE</text>',
      sky("s1", "#231a3a", "#e07b4a"));
  }

  /* 2. Conant Gardens: neat brick homes, autumn trees, the basement window glowing with notes rising out */
  function conant() {
    let leaves = ""; [[40, 60, ""], [150, 40, " lf2"], [250, 70, " lf3"], [330, 50, " lf4"], [90, 30, " lf3"]].forEach(([x, y, c]) => leaves += '<ellipse class="lf' + c + '" cx="' + x + '" cy="' + y + '" rx="4" ry="2.5" fill="#e08a2e"/>');
    return svg('<rect width="400" height="260" fill="url(#s2)"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#4e7a3a"/><rect x="0" y="212" width="400" height="14" fill="#cfc8b8"/><rect x="0" y="226" width="400" height="34" fill="#3b3b40"/>' +
      house(30, 100, 96, false) + house(160, 96, 104, true) + house(296, 102, 92, false) +
      tree(140, 140) + tree(282, 142) +
      '<g><text class="nt" x="176" y="176" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="nt nt2" x="190" y="176" font-size="14" fill="#fff">&#9835;</text><text class="nt nt3" x="182" y="176" font-size="13" fill="' + TEAL + '">&#9834;</text></g>' +
      leaves +
      '<g class="car"><rect x="0" y="232" width="34" height="12" rx="4" fill="' + TEAL + '"/><circle cx="8" cy="245" r="4" fill="#111"/><circle cx="26" cy="245" r="4" fill="#111"/></g>' +
      '<text x="200" y="26" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="3" opacity=".9">CONANT GARDENS</text>',
      sky("s2", "#6aa7d8", "#f3d9a4"));
  }

  /* 3. The basement studio: MPC3000 pads hitting a little off the grid, synth, turntable, crates */
  function basement() {
    const lag = [0, .23, .41, .7, .09, .34, .58, .86, .16, .49, .63, 1.02, .27, .55, .8, 1.13];
    let pads = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pd" style="animation-delay:' + lag[r * 4 + c] + 's" x="' + (60 + c * 20) + '" y="' + (168 + r * 16) + '" width="16" height="12" rx="2" fill="' + ((r + c) % 3 ? "#d8d8d4" : GOLD) + '"/>';
    let panel = ""; for (let i = 0; i < 40; i++) panel += '<rect x="' + (i * 10) + '" y="0" width="9" height="140" fill="' + (i % 2 ? "#5a3b24" : "#654229") + '"/>';
    let knobs = ""; for (let i = 0; i < 7; i++) knobs += '<circle cx="' + (246 + i * 17) + '" cy="186" r="4.5" fill="#ddd" stroke="#333"/>';
    return svg(panel +
      '<rect x="0" y="140" width="400" height="120" fill="#2a2120"/><rect x="0" y="140" width="400" height="6" fill="#3a2d28"/>' +
      '<rect x="150" y="22" width="100" height="16" fill="#181212"/><rect class="flk" x="160" y="26" width="80" height="8" fill="#ffe2a0" opacity=".9"/>' +
      crate(14, 92, RED) + crate(86, 92, TEAL) + crate(320, 92, GOLD) +
      '<rect x="160" y="58" width="80" height="60" rx="4" fill="#333" stroke="#111" stroke-width="2"/>' +
      '<g class="rl"><circle cx="182" cy="86" r="13" fill="#222" stroke="#999" stroke-width="2"/><path d="M182 74v24M170 86h24" stroke="#999" stroke-width="2"/></g>' +
      '<g class="rl"><circle cx="218" cy="86" r="13" fill="#222" stroke="#999" stroke-width="2"/><path d="M218 74v24M206 86h24" stroke="#999" stroke-width="2"/></g>' +
      '<rect x="40" y="150" width="130" height="94" rx="5" fill="#b9bbb6" stroke="#5a5c58" stroke-width="2"/>' +
      '<rect x="52" y="156" width="64" height="8" fill="#20382a"/><rect x="126" y="156" width="36" height="8" rx="2" fill="#8a8c88"/>' +
      '<text x="140" y="238" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#555">3000</text>' + pads +
      '<rect x="228" y="164" width="140" height="70" rx="4" fill="#6b4626"/><rect x="236" y="170" width="124" height="30" fill="#111"/>' + knobs +
      (() => { let k = ""; for (let i = 0; i < 11; i++) k += '<rect x="' + (238 + i * 11) + '" y="204" width="10" height="26" fill="#f4f1ea" stroke="#333" stroke-width=".8"/>'; [0, 1, 3, 4, 5, 7, 8].forEach(i => k += '<rect x="' + (245 + i * 11) + '" y="204" width="6" height="15" fill="#111"/>'); return k; })());
  }

  /* 4. Pershing High School: long brick school, flag waving, a boombox cypher on the front steps */
  function pershing() {
    let win = ""; for (let x = 30; x < 380; x += 26) { if (x > 170 && x < 230) continue; win += '<rect x="' + x + '" y="112" width="16" height="22" fill="#9cc4e4"/><rect x="' + x + '" y="148" width="16" height="22" fill="#9cc4e4"/>'; }
    return svg('<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="14" y="98" width="372" height="96" fill="#9a5a3a"/>' + '<rect x="14" y="94" width="372" height="8" fill="#c9b79a"/>' + win +
      '<rect x="166" y="74" width="68" height="120" fill="#a8664a"/><rect x="166" y="70" width="68" height="8" fill="#c9b79a"/>' +
      '<rect x="182" y="150" width="36" height="44" fill="#3a2a22"/><path d="M200 150v44" stroke="#c9b79a" stroke-width="2"/>' +
      '<rect x="74" y="78" width="252" height="14" fill="#2c2430"/><text x="200" y="89" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '" letter-spacing="2">PERSHING HIGH SCHOOL</text>' +
      '<rect x="60" y="20" width="3" height="78" fill="#ccc"/><g class="sw"><rect x="63" y="22" width="40" height="24" fill="#8a1c2c"/><rect x="63" y="30" width="40" height="5" fill="#fff"/></g>' +
      '<rect x="0" y="194" width="400" height="66" fill="#9a9a9e"/><rect x="150" y="194" width="100" height="8" fill="#c4c4c8"/><rect x="140" y="202" width="120" height="8" fill="#b4b4b8"/>' +
      '<rect x="176" y="214" width="48" height="26" rx="4" fill="#222" stroke="#666" stroke-width="2"/><circle class="th" cx="188" cy="227" r="7" fill="#444" stroke="#999"/><circle cx="212" cy="227" r="7" fill="#444" stroke="#999"/><rect x="194" y="208" width="12" height="6" fill="#666"/>' +
      '<g><text class="nt" x="230" y="220" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="nt nt2" x="160" y="222" font-size="15" fill="#fff">&#9835;</text><text class="nt nt3" x="244" y="226" font-size="13" fill="' + TEAL + '">&#9834;</text></g>' +
      '<g class="car car2"><rect x="0" y="246" width="34" height="10" rx="4" fill="' + RED + '"/></g>',
      sky("s4", "#4f8fc8", "#cfe3f0"));
  }

  /* 5. The corner: McDougall St & Nevada St, JAY DEE on the wall, RenCen glowing downtown */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) +
      rencen(120, 124, .7, "#3c5470") + '<rect x="0" y="104" width="60" height="20" fill="#2a3346"/><rect x="190" y="98" width="40" height="26" fill="#2a3346"/>' +
      '<rect x="0" y="122" width="400" height="102" fill="' + BRICK + '"/>' + brickLines(122, 224) +
      tag("J DILLA", 24, 192, 46, GOLD, -5) + tag("JAY DEE", 182, 214, 22, TEAL, -4) + tag("CONANT", 30, 152, 16, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(262, 44, 128, "McDougall St") + sign(286, 70, 88, "Nevada St") +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#6a3a5a"));
  }

  window.SCENES = { station: station, conant: conant, basement: basement, pershing: pershing, corner: corner };
})();
