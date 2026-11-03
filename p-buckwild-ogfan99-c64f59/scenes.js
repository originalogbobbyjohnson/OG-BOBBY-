/* Buckwild producer game: 161 St-Yankee Stadium, the record shop, the beat room, Lenox Av in Harlem, E 161 St & River Av. 400 x 260 SVGs. */
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
  const GOLD = "#f5b700", BLUE = "#3fa7d6", ORANGE = "#ff6319", GREEN = "#00933c", RED = "#e4572e";
  const frieze = (x0, x1, y, col) => { let s = '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="5" fill="' + col + '"/>'; for (let x = x0; x < x1; x += 16) s += '<path d="M' + x + ' ' + (y + 5) + 'v14M' + x + ' ' + (y + 19) + 'Q' + (x + 8) + ' ' + (y + 5) + ' ' + (x + 16) + ' ' + (y + 19) + '" fill="none" stroke="' + col + '" stroke-width="2.5"/>'; return s; };

  /* 1. The 4 train up on the el at 161 St-Yankee Stadium, the B and D below */
  function station() {
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="94" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let rail = ""; for (let x = 0; x < 400; x += 20) rail += '<rect x="' + x + '" y="150" width="3" height="40" fill="#3f6b4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(12) +
      '<rect x="0" y="8" width="400" height="10" fill="#3f6b4a"/><rect x="0" y="18" width="400" height="4" fill="#2b4a33"/>' +
      '<rect x="20" y="30" width="360" height="40" rx="4" fill="#111"/><rect x="20" y="30" width="360" height="4" fill="#fff"/>' +
      '<text x="32" y="57" ' + font + ' font-size="15" fill="#fff">161 St - Yankee Stadium</text>' +
      bullet(296, 52, "4", GREEN) + bullet(322, 52, "B", ORANGE) + bullet(348, 52, "D", ORANGE) +
      '<g class="anim-train">' +
        '<rect x="8" y="82" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="124" width="304" height="5" fill="' + GREEN + '"/>' + windows +
        '<circle cx="304" cy="136" r="4" fill="#fff6c2"/>' + bullet(292, 102, "4", GREEN) +
      '</g>' +
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/>' + rail + '<rect x="0" y="186" width="400" height="8" fill="#3f6b4a"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#1a1c22"/>' +
      tag("BUCKWILD", 40, 240, 32, GOLD, -5) + tag("D.I.T.C.", 250, 240, 30, BLUE, -7),
      sky("s1", "#0f1434", "#4a3a6a"));
  }

  /* 2. The record shop: crates out front, neon RECORDS sign flickering, rain of dust in the window light */
  function recordshop() {
    let crates = "";
    [[30, 196], [92, 196], [262, 196], [324, 196]].forEach(([x, y], k) => { crates += '<rect x="' + x + '" y="' + y + '" width="50" height="40" fill="#a0703f" stroke="#5e3d1d" stroke-width="2"/>';
      ["#e4572e", "#f5b700", "#3fa7d6", "#f2efe6", "#6a4c93"].forEach((c, i) => crates += '<rect x="' + (x + 4 + i * 9) + '" y="' + (y - 12 + ((i + k) % 2) * 4) + '" width="7" height="26" fill="' + c + '"/>'); });
    let disp = "";
    for (let i = 0; i < 4; i++) disp += '<g class="vn"><circle cx="' + (90 + i * 74) + '" cy="120" r="22" fill="#0b0b0b"/><circle cx="' + (90 + i * 74) + '" cy="120" r="8" fill="' + [RED, GOLD, BLUE, "#6a4c93"][i] + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#16141c"/>' +
      brick(0, 0, 400, 240, "#6e3a2c", "#55291f") +
      '<rect x="40" y="16" width="320" height="44" rx="6" fill="#0d0b12" stroke="#333" stroke-width="2"/>' +
      '<text class="flk" x="200" y="50" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" letter-spacing="8" fill="#ff5ea8" stroke="#ff9ccc" stroke-width=".8">RECORDS</text>' +
      '<rect x="40" y="76" width="320" height="100" fill="#f3c97a" opacity=".9"/><rect x="40" y="76" width="320" height="100" fill="none" stroke="#2a2a2a" stroke-width="5"/>' + disp +
      '<rect x="0" y="236" width="400" height="24" fill="#55575c"/>' + crates +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".85" letter-spacing="3">DIGGIN\' IN THE CRATES</text>');
  }

  /* 3. The beat room: SP-1200 style sampler, horns hanging on the wall, meters bouncing, record spinning */
  function beatroom() {
    let eq = "";
    for (let i = 0; i < 5; i++) eq += '<rect class="mt mt' + (i + 1) + '" x="' + (176 + i * 9) + '" y="64" width="6" height="40" fill="' + (i > 2 ? RED : "#5ee06a") + '"/>';
    const horn = (x, y) => '<g class="bob"><path d="M' + x + ' ' + y + 'h50l20-12v34l-20-12h-50z" fill="' + GOLD + '" stroke="#8a5d14" stroke-width="2"/><circle cx="' + (x + 16) + '" cy="' + (y - 5) + '" r="3" fill="#8a5d14"/><circle cx="' + (x + 28) + '" cy="' + (y - 5) + '" r="3" fill="#8a5d14"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1d1a20"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2c2f3a"/>' +
      (() => { let b = ""; for (let x = 0; x < 400; x += 20) b += '<path d="M' + x + ' 0v150" stroke="#252832" stroke-width="2"/>'; return b; })() +
      horn(24, 40) + horn(24, 96) +
      '<rect x="166" y="54" width="62" height="56" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq +
      '<rect x="252" y="22" width="126" height="98" fill="#f2efe6" stroke="#5e3d1d" stroke-width="3"/><circle cx="315" cy="71" r="36" fill="#0b0b0b"/><circle cx="315" cy="71" r="13" fill="' + BLUE + '"/><circle cx="315" cy="71" r="2" fill="#fff"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5a3e2b"/><rect x="0" y="150" width="400" height="6" fill="#6e4c34"/>' +
      '<rect x="20" y="164" width="176" height="80" rx="4" fill="#9a9ea4" stroke="#4a4d52" stroke-width="2"/><rect x="28" y="170" width="70" height="14" fill="#1f3a26"/>' +
      '<text x="32" y="181" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#7cf08a">SOUL LOOP 01</text>' +
      '<rect x="110" y="170" width="78" height="6" fill="#555"/><rect x="110" y="180" width="78" height="6" fill="#555"/>' +
      (() => { let f = ""; for (let i = 0; i < 8; i++) f += '<rect x="' + (30 + i * 20) + '" y="194" width="6" height="30" fill="#333"/><rect class="pd p' + (i + 1) + '" x="' + (27 + i * 20) + '" y="' + (200 + (i * 7) % 18) + '" width="12" height="6" fill="' + (i % 2 ? GOLD : RED) + '"/>'; return f; })() +
      turntable(240, 170, GOLD));
  }

  /* 4. Harlem: brownstones on Lenox Av where Big L put it on, stoops, a cab rolling by */
  function harlem() {
    let bs = "";
    [[0, "#7a4a36"], [80, "#8a5640"], [160, "#6e4030"], [240, "#8a5640"], [320, "#7a4a36"]].forEach(([x, c]) => {
      bs += '<rect x="' + x + '" y="70" width="80" height="150" fill="' + c + '"/><rect x="' + x + '" y="64" width="80" height="8" fill="#4a2c20"/>';
      for (let r = 0; r < 3; r++) for (let k = 0; k < 2; k++) bs += '<rect x="' + (x + 14 + k * 34) + '" y="' + (84 + r * 38) + '" width="18" height="26" fill="' + ((r + k + x / 80) % 3 ? "#2c2430" : "#ffd98a") + '"/><rect x="' + (x + 12 + k * 34) + '" y="' + (80 + r * 38) + '" width="22" height="4" fill="#d9c7a0"/>';
      bs += '<path d="M' + (x + 26) + ' 220l10-22h12v22z" fill="#5a3a2a"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(14) + bs +
      '<rect x="0" y="220" width="400" height="40" fill="#2b2b2e"/><path d="M0 242h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="car"><rect x="0" y="226" width="46" height="16" rx="4" fill="' + GOLD + '"/><rect x="10" y="220" width="22" height="8" rx="2" fill="' + GOLD + '"/><circle cx="10" cy="242" r="4" fill="#111"/><circle cx="36" cy="242" r="4" fill="#111"/></g>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" opacity=".85" letter-spacing="3">LENOX AVENUE, HARLEM</text>',
      sky("s4", "#121636", "#b05a3a"));
  }

  /* 5. The corner: E 161 St & River Av, BUCKWILD tag, Yankee Stadium limestone wall and white frieze behind */
  function corner() {
    let arches = "";
    for (let x = 30; x < 380; x += 40) arches += '<path d="M' + x + ' 136v-46a12 12 0 0 1 24 0v46z" fill="#2a2a34"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<circle class="flk" cx="60" cy="30" r="10" fill="#fffbe6" opacity=".8"/><circle class="flk flk2" cx="340" cy="26" r="10" fill="#fffbe6" opacity=".8"/>' +
      frieze(0, 400, 40, "#f2f2ee") +
      '<rect x="0" y="62" width="400" height="80" fill="#d8d0bd"/>' + arches +
      
      brick(0, 140, 400, 84, "#8e4a33", "#6f3826") +
      tag("BUCKWILD", 22, 202, 42, GOLD, -5) + tag("D.I.T.C.", 200, 220, 22, BLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(272, 44, 116, "E 161 St") + sign(282, 70, 100, "River Av") +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#3a3a6a"));
  }

  window.SCENES = { station: station, recordshop: recordshop, beatroom: beatroom, harlem: harlem, corner: corner };
})();
