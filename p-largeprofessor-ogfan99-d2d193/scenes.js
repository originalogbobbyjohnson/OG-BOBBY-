/* Large Professor producer game: Flushing, Queens. LIRR at Flushing-Main St, the Mad Scientist SP-1200 lab, Live at the Barbeque, the Flushing Meadows towers, Kissena Blvd with the Unisphere. 400 x 260 SVGs. */
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
  const BLUE = "#57c1ff", ORANGE = "#ff8f2e", LIME = "#c7e86b", STEEL = "#b8c2cc";
  /* Unisphere: steel globe of meridians and latitude rings with three orbit rings, on a tripod base */
  const unisphere = (cx, cy, r, op) => {
    let g = '<g opacity="' + (op || 1) + '"><g fill="none" stroke="' + STEEL + '" stroke-width="' + Math.max(1, r / 30) + '">';
    g += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
    [0.35, 0.7].forEach(k => g += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (r * k) + '" ry="' + r + '"/>');
    [-0.6, -0.3, 0, 0.3, 0.6].forEach(k => { const y = cy + r * k, w = r * Math.sqrt(1 - k * k); g += '<path d="M' + (cx - w) + ' ' + y + 'h' + (2 * w) + '"/>'; });
    g += '</g><g fill="' + STEEL + '" opacity=".55"><path d="M' + (cx - r * .5) + ' ' + (cy - r * .5) + 'q' + (r * .3) + ' ' + (-r * .2) + ' ' + (r * .5) + ' ' + (r * .1) + 'q' + (-r * .1) + ' ' + (r * .4) + ' ' + (-r * .4) + ' ' + (r * .3) + 'z"/><path d="M' + (cx + r * .1) + ' ' + (cy - r * .1) + 'q' + (r * .4) + ' ' + (-r * .3) + ' ' + (r * .6) + ' ' + (r * .1) + 'q' + (-r * .2) + ' ' + (r * .5) + ' ' + (-r * .5) + ' ' + (r * .4) + 'z"/></g>';
    g += '<g class="orb" fill="none" stroke="' + ORANGE + '" stroke-width="' + Math.max(1, r / 40) + '"><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (r * 1.25) + '" ry="' + (r * .3) + '" transform="rotate(-20 ' + cx + ' ' + cy + ')"/><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (r * 1.2) + '" ry="' + (r * .28) + '" transform="rotate(25 ' + cx + ' ' + cy + ')"/></g>';
    g += '<path d="M' + (cx - r * .3) + ' ' + (cy + r * 1.6) + 'L' + cx + ' ' + (cy + r) + 'L' + (cx + r * .3) + ' ' + (cy + r * 1.6) + '" stroke="#6b737c" stroke-width="' + Math.max(2, r / 12) + '" fill="none"/></g>';
    return g;
  };

  /* 1. LIRR train pulling into Flushing-Main St, elevated platform over Main St */
  function station() {
    let win = ""; for (let x = 24; x < 240; x += 34) win += '<rect x="' + x + '" y="124" width="22" height="18" rx="2" fill="#cfe6f5"/>';
    let rail = ""; for (let x = 0; x < 400; x += 20) rail += '<rect x="' + x + '" y="176" width="3" height="18" fill="#3c4148"/>';
    return svg('<rect width="400" height="260" fill="url(#s1)"/>' + stars(6) +
      '<g fill="#3a3f52"><rect x="0" y="96" width="44" height="60"/><rect x="50" y="80" width="30" height="76"/><rect x="300" y="86" width="40" height="70"/><rect x="346" y="100" width="54" height="56"/></g>' +
      '<rect x="20" y="18" width="230" height="34" rx="4" fill="#111"/><rect x="20" y="18" width="230" height="4" fill="#fff"/><text x="34" y="42" ' + font + ' font-size="16" fill="#fff">Flushing - Main St</text>' +
      '<rect x="0" y="62" width="400" height="10" fill="#5c6670"/>' +
      '<g class="anim-train"><rect x="6" y="112" width="306" height="62" rx="6" fill="#d7dde3" stroke="#6b7480" stroke-width="2"/>' +
      '<rect x="6" y="150" width="306" height="5" fill="#1f4a9c"/><rect x="6" y="156" width="306" height="3" fill="#6c3fa3"/>' + win +
      '<circle cx="304" cy="166" r="4" fill="#fff6c2"/><rect x="250" y="116" width="40" height="8" fill="#111"/><text x="270" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="' + ORANGE + '">PORT WASH</text></g>' +
      '<rect x="0" y="174" width="400" height="6" fill="#e7c64b"/>' + rail + '<rect x="0" y="194" width="400" height="10" fill="#4a4f58"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#2c2f36"/><path d="M0 236h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="car"><rect x="0" y="222" width="34" height="12" rx="3" fill="#f2c94c"/></g><g class="carL"><rect x="0" y="240" width="34" height="12" rx="3" fill="#e2483d"/></g>',
      sky("s1", "#1b2140", "#d1765a"));
  }

  /* 2. The Mad Scientist lab: SP-1200 pads, bubbling flasks, an atom spinning on the screen */
  function lab() {
    let pads = ""; for (let i = 0; i < 8; i++) pads += '<rect class="pd p' + (i + 1) + '" x="' + (52 + (i % 4) * 26) + '" y="' + (196 + Math.floor(i / 4) * 20) + '" width="20" height="14" rx="2" fill="' + (i % 3 ? "#e8e4d8" : ORANGE) + '"/>';
    let faders = ""; for (let i = 0; i < 8; i++) faders += '<rect x="' + (52 + i * 13) + '" y="168" width="3" height="20" fill="#222"/><rect class="mt mt' + (i % 5 + 1) + '" x="' + (49 + i * 13) + '" y="174" width="9" height="6" fill="#ddd"/>';
    const flask = (x, c, d) => '<path d="M' + (x - 6) + ' 100v22l-16 30h44l-16-30v-22z" fill="#ffffff22" stroke="#cfe6f5" stroke-width="2"/><path d="M' + (x - 18) + ' 146l8-14h20l8 14z" fill="' + c + '"/>' +
      '<circle class="nt' + d + '" cx="' + x + '" cy="132" r="3" fill="' + c + '"/><circle class="nt nt' + (d ? 3 : 2) + '" cx="' + (x + 4) + '" cy="136" r="2" fill="' + c + '"/>';
    return svg('<rect width="400" height="260" fill="#151c2c"/>' +
      '<rect x="0" y="0" width="400" height="160" fill="#1c2640"/>' +
      '<rect x="210" y="20" width="170" height="110" rx="4" fill="#0a0f1a" stroke="#4a5670" stroke-width="4"/>' +
      '<g class="rl"><ellipse cx="295" cy="75" rx="56" ry="16" fill="none" stroke="' + BLUE + '" stroke-width="2"/><ellipse cx="295" cy="75" rx="56" ry="16" fill="none" stroke="' + LIME + '" stroke-width="2" transform="rotate(60 295 75)"/><ellipse cx="295" cy="75" rx="56" ry="16" fill="none" stroke="' + ORANGE + '" stroke-width="2" transform="rotate(-60 295 75)"/></g>' +
      '<circle class="th" cx="295" cy="75" r="9" fill="' + ORANGE + '"/>' +
      '<text x="295" y="124" text-anchor="middle" ' + font + ' font-size="10" fill="' + BLUE + '" letter-spacing="2">SPLITTING ATOMS</text>' +
      '<rect x="20" y="152" width="370" height="8" fill="#5a4a3a"/>' +
      flask(60, LIME, "") + flask(120, BLUE, " nt2") + flask(176, ORANGE, " nt3") +
      '<rect x="0" y="160" width="400" height="100" fill="#3a2e26"/>' +
      '<rect x="40" y="162" width="170" height="84" rx="4" fill="#9aa0a6" stroke="#4a4d52" stroke-width="2"/>' +
      '<rect x="160" y="170" width="42" height="12" fill="#20382a"/><text x="181" y="179" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#7cf08a">SP-1200</text>' +
      faders + pads +
      crate(250, 204, BLUE) + crate(320, 204, ORANGE));
  }

  /* 3. Live at the Barbeque: park cookout, grill smoke rising, speakers stacked, mic on a stand */
  function barbeque() {
    let smoke = ""; for (let i = 0; i < 3; i++) smoke += '<circle class="nt nt' + (i + 1) + '" cx="' + (128 + i * 10) + '" cy="150" r="' + (8 + i * 3) + '" fill="#e6e6e6" opacity=".55"/>';
    return svg('<rect width="400" height="260" fill="url(#s3)"/>' +
      '<circle cx="330" cy="48" r="22" fill="#ffe08a"/>' +
      '<g fill="#2f6b34"><circle cx="40" cy="120" r="34"/><circle cx="90" cy="110" r="30"/><circle cx="360" cy="116" r="36"/></g><rect x="36" y="130" width="8" height="40" fill="#4a3420"/><rect x="356" y="130" width="8" height="40" fill="#4a3420"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#5c9a44"/>' +
      '<rect x="104" y="176" width="64" height="26" rx="13" fill="#222"/><path d="M110 202l-8 34M162 202l8 34" stroke="#222" stroke-width="4"/>' +
      '<path d="M108 178h56" stroke="' + ORANGE + '" stroke-width="3"/><rect class="flk" x="112" y="182" width="48" height="6" fill="#ff5a2a"/>' + smoke +
      '<rect x="230" y="150" width="44" height="90" fill="#1c1c1f" stroke="#444" stroke-width="2"/><circle class="th" cx="252" cy="176" r="14" fill="#333" stroke="#888" stroke-width="2"/><circle class="th" cx="252" cy="216" r="14" fill="#333" stroke="#888" stroke-width="2"/>' +
      '<rect x="280" y="170" width="40" height="70" fill="#1c1c1f" stroke="#444" stroke-width="2"/><circle class="th" cx="300" cy="192" r="11" fill="#333" stroke="#888" stroke-width="2"/><circle class="th" cx="300" cy="222" r="11" fill="#333" stroke="#888" stroke-width="2"/>' +
      '<path d="M200 240v-70" stroke="#888" stroke-width="3"/><rect x="194" y="160" width="12" height="18" rx="6" fill="#555b66" stroke="#222"/>' +
      '<rect x="20" y="200" width="70" height="8" fill="#a5532f"/><rect x="26" y="208" width="4" height="26" fill="#7a3a20"/><rect x="80" y="208" width="4" height="26" fill="#7a3a20"/>' +
      '<g><text class="nt" x="250" y="146" font-size="18" fill="' + ORANGE + '">&#9834;</text><text class="nt nt2" x="290" y="160" font-size="16" fill="#fff">&#9835;</text></g>' +
      '<text x="200" y="28" text-anchor="middle" ' + font + ' font-size="13" fill="#3a2414" letter-spacing="3">LIVE AT THE BARBEQUE</text>',
      sky("s3", "#7cc4f0", "#fbe7b8"));
  }

  /* 4. Flushing Meadows: the New York State Pavilion observation towers with their saucer tops */
  function towers() {
    const tower = (x, h, top) => '<path d="M' + (x - 8) + ' 210L' + (x - 4) + ' ' + (210 - h) + 'h8L' + (x + 8) + ' 210" fill="#d9dde0" stroke="#9aa0a6" stroke-width="1.5"/>' +
      '<ellipse cx="' + x + '" cy="' + (210 - h) + '" rx="' + top + '" ry="' + (top / 3.5) + '" fill="#e8ebee" stroke="#8a9096" stroke-width="2"/><rect x="' + (x - top * .7) + '" y="' + (210 - h - 2) + '" width="' + (top * 1.4) + '" height="5" fill="' + BLUE + '" opacity=".7"/>' +
      '<rect class="bl" x="' + (x - 1.5) + '" y="' + (190 - h / 2) + '" width="3" height="10" fill="#ffd98a"/>';
    return svg('<rect width="400" height="260" fill="url(#s4)"/>' + stars(10) +
      tower(70, 150, 28) + tower(130, 110, 24) + tower(178, 80, 20) +
      '<ellipse cx="300" cy="150" rx="92" ry="26" fill="#cfd4d8" opacity=".9"/><path d="M212 150v60M388 150v60M260 172v38M340 172v38" stroke="#a0a6ac" stroke-width="4"/>' +
      '<ellipse cx="300" cy="146" rx="80" ry="18" fill="none" stroke="' + ORANGE + '" stroke-width="2" opacity=".8"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3c6a3a"/><path d="M0 222h400" stroke="#d8d2c0" stroke-width="6"/>' +
      '<g class="car"><circle cx="0" cy="240" r="5" fill="#ffd23f"/><path d="M-6 240h12" stroke="#222"/></g><g class="carL"><circle cx="0" cy="248" r="5" fill="#fff"/></g>' +
      '<text x="200" y="28" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="3" opacity=".9">FLUSHING MEADOWS</text>',
      sky("s4", "#13284a", "#e08c5a"));
  }

  /* 5. The corner: Kissena Blvd & Sanford Av, EXTRA P on the wall, the Unisphere behind */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' + stars(12) +
      unisphere(150, 70, 42, .95) +
      '<rect x="0" y="122" width="400" height="102" fill="#7a4a3a"/>' + brickLines(122, 224) +
      tag("LARGE PRO", 20, 190, 40, BLUE, -5) + tag("EXTRA P", 200, 214, 22, ORANGE, -4) + tag("SP-1200", 30, 150, 15, LIME, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(268, 44, 122, "Kissena Blvd") + sign(282, 70, 96, "Sanford Av") +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1430", "#3a5a8a"));
  }

  window.SCENES = { station: station, lab: lab, barbeque: barbeque, towers: towers, corner: corner };
})();
