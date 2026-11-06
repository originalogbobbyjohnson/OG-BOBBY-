/* Group Home game (NYC map, Brooklyn: East New York - Lil' Dap and Melachi the Nutcracker, Gang Starr Foundation, "from the east").
   The J/Z up on the el at Alabama Av over Fulton St, the Linden Plaza towers on Linden Blvd, the courts at the Cypress Hills Houses,
   Franklin K. Lane High School's clock tower on the Brooklyn-Queens line, and Fulton St & Alabama Av with the J el behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ghcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.gh-car{animation:ghcar 7s linear infinite}.gh-car2{animation-delay:-3.6s}' +
    '@keyframes ghcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.gh-carl{animation:ghcarL 8s linear infinite}' +
    '@keyframes ghblink{0%,100%{opacity:.25}50%{opacity:1}}.gh-bl{animation:ghblink 1.8s ease-in-out infinite}.gh-bl2{animation-delay:.6s}.gh-bl3{animation-delay:1.2s}' +
    '@keyframes ghflick{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.9}}.gh-flk{animation:ghflick 2.6s infinite}' +
    '@keyframes ghbird{0%{transform:translate(-40px,10px)}100%{transform:translate(440px,-20px)}}.gh-bird{animation:ghbird 9s linear infinite}.gh-bird2{animation-delay:-4s}' +
    '@keyframes ghflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.gh-flap{transform-box:fill-box;transform-origin:50% 100%;animation:ghflap .4s ease-in-out infinite}' +
    '@keyframes ghball{0%{transform:translate(0,0)}25%{transform:translate(28px,-46px)}50%{transform:translate(56px,0)}75%{transform:translate(28px,-46px)}100%{transform:translate(0,0)}}.gh-ball{animation:ghball 2.2s ease-in-out infinite}' +
    '@keyframes ghnet{0%,100%{transform:skewX(0)}50%{transform:skewX(8deg)}}.gh-net{transform-box:fill-box;transform-origin:50% 0;animation:ghnet 1.1s ease-in-out infinite}' +
    '@keyframes ghhand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.gh-hand{transform-box:view-box;animation:ghhand 12s linear infinite}.gh-hand2{animation-duration:90s}' +
    '@keyframes ghel{from{transform:translateX(430px)}to{transform:translateX(-380px)}}.gh-el{animation:ghel 7s linear infinite}' +
    '@keyframes ghsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.gh-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ghsway 3s ease-in-out infinite}' +
    '@keyframes ghdrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(14px);opacity:0}}.gh-drip{animation:ghdrip 2s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="gh-bl gh-bl' + (i % 3 + 1) + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const bird = (x, y, cls) => '<g class="gh-bird ' + (cls || "") + '"><path class="gh-flap" d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" stroke="#1d1d24" stroke-width="2" fill="none"/></g>';
  const car = (x, y, col, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="46" height="13" rx="4" fill="' + col + '"/><rect x="' + (x + 9) + '" y="' + (y - 8) + '" width="26" height="9" rx="3" fill="' + col + '"/><rect x="' + (x + 12) + '" y="' + (y - 6) + '" width="9" height="6" fill="#bcd4e6"/><rect x="' + (x + 23) + '" y="' + (y - 6) + '" width="9" height="6" fill="#bcd4e6"/><circle cx="' + (x + 10) + '" cy="' + (y + 13) + '" r="4.5" fill="#111"/><circle cx="' + (x + 36) + '" cy="' + (y + 13) + '" r="4.5" fill="#111"/></g>';
  const ORANGE = "#ff9f1c", TEAL = "#2ec4b6", RED = "#e71d36", CREAM = "#f4ead8", JZ = "#996633", ELG = "#2f4a3a";

  /* the J/Z subway car: stainless with the brown line bullet */
  const jcar = (x, y, w) => {
    let win = ""; for (let xx = x + 18; xx < x + w - 30; xx += 32) win += '<rect x="' + xx + '" y="' + (y + 10) + '" width="22" height="18" rx="2" fill="#cfe2f5" opacity=".92"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="52" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="3" fill="' + JZ + '"/>';
  };

  /* 1. Alabama Av: the J pulling in up on the el over Fulton St, the wooden-slat platform canopy, black sign with the J and Z, East New York rooftops below */
  function alabama() {
    let roofs = "";
    [[0, 150, 54], [56, 140, 44], [102, 156, 60], [164, 146, 50], [216, 152, 64], [282, 138, 48], [332, 150, 68]].forEach(([x, y, w], i) => {
      roofs += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="' + (i % 2 ? "#5b3a35" : "#6e4a3a") + '"/>';
      for (let yy = y + 8; yy < 190; yy += 14) for (let xx = x + 6; xx < x + w - 8; xx += 14) roofs += '<rect class="gh-bl gh-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".6"/>';
    });
    let posts = ""; for (let x = 20; x < 400; x += 76) posts += '<rect x="' + x + '" y="40" width="6" height="128" fill="' + ELG + '"/>';
    let slats = ""; for (let x = 0; x < 400; x += 10) slats += '<rect x="' + x + '" y="28" width="8" height="12" fill="#8a6a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghs1)"/>' + stars(10) +
      '<circle cx="360" cy="112" r="18" fill="#ffb347" opacity=".85"/>' +
      roofs +
      /* canopy */
      '<rect x="0" y="20" width="400" height="10" fill="#26332b"/>' + slats + '<rect x="0" y="40" width="400" height="4" fill="#1f2a23"/>' + posts +
      [70, 190, 310].map((x, i) => '<rect class="gh-flk" style="animation-delay:-' + i * 0.8 + 's" x="' + (x - 18) + '" y="44" width="36" height="4" rx="2" fill="#fff8d6"/>').join("") +
      /* sign */
      '<rect x="62" y="56" width="236" height="30" rx="3" fill="#111"/><rect x="62" y="56" width="236" height="3" fill="#fff"/>' +
      '<text x="76" y="77" ' + font + ' font-size="15" fill="#fff">Alabama Av</text>' + bullet(250, 72, "J", JZ) + bullet(276, 72, "Z", JZ) +
      /* the train */
      '<g class="anim-train">' + jcar(6, 106, 320) + '<rect x="300" y="116" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(304, 148, "J", JZ) +
      '<circle cx="18" cy="148" r="3" fill="#fff6c2"/></g>' +
      /* platform edge + el girders */
      '<rect x="0" y="158" width="400" height="8" fill="#e8c547"/><rect x="0" y="166" width="400" height="14" fill="#6b6f66"/>' +
      '<rect x="0" y="180" width="400" height="12" fill="' + ELG + '"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 24) g += '<path d="M' + x + ' 192l12 14l12-14" stroke="' + ELG + '" stroke-width="3" fill="none"/>'; return g; })() +
      '<rect x="0" y="204" width="400" height="5" fill="' + ELG + '"/>' +
      /* Fulton St below */
      '<rect x="0" y="209" width="400" height="51" fill="#3a3b3f"/>' +
      [60, 216, 352].map(x => '<rect x="' + x + '" y="204" width="10" height="56" fill="' + ELG + '"/>').join("") +
      '<path d="M0 238h400" stroke="#e8c547" stroke-width="2" stroke-dasharray="16 12"/>' +
      car(0, 222, ORANGE, "gh-car") + car(0, 222, TEAL, "gh-car gh-car2") +
      txt("FULTON ST", 140, 254, 9, CREAM, 'letter-spacing="3" opacity=".8"'),
      sky("ghs1", "#1b1530", "#c8643a"));
  }

  /* 2. Linden Plaza on Linden Blvd: the tall tan-brick towers with rows of balconies, the sun going down behind, pigeons over, traffic on Linden Blvd */
  function linden() {
    const tower = (x, y, w, col) => {
      let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (210 - y) + '" fill="' + col + '"/>' +
        '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#8b6b4a"/>';
      for (let yy = y + 10; yy < 200; yy += 9) {
        g += '<rect x="' + (x + 3) + '" y="' + yy + '" width="' + (w - 6) + '" height="2" fill="#a88a64"/>';
        for (let xx = x + 6; xx < x + w - 6; xx += 10) g += '<rect class="gh-bl gh-bl' + ((xx * 7 + yy) % 3 + 1) + '" x="' + xx + '" y="' + (yy + 3) + '" width="5" height="4" fill="#ffe2a0" opacity=".55"/>';
      }
      return g;
    };
    let trees = ""; for (let x = 10; x < 400; x += 58) trees += '<g class="gh-sway" style="animation-delay:-' + (x % 3) + 's"><rect x="' + (x + 8) + '" y="196" width="4" height="18" fill="#4a3426"/><circle cx="' + (x + 10) + '" cy="190" r="12" fill="#3f6b3a"/><circle cx="' + (x + 3) + '" cy="196" r="8" fill="#4d7a44"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghs2)"/>' +
      '<circle cx="200" cy="120" r="34" fill="#ffcf6b" opacity=".9"/>' +
      tower(18, 40, 62, "#c8a57a") + tower(96, 22, 66, "#bf9a6c") + tower(238, 26, 66, "#c8a57a") + tower(320, 46, 62, "#bf9a6c") +
      '<rect x="170" y="150" width="60" height="60" fill="#a8835a"/>' +
      (() => { let g = ""; for (let x = 176; x < 226; x += 12) g += '<rect x="' + x + '" y="160" width="6" height="8" fill="#ffe2a0" opacity=".6"/><rect x="' + x + '" y="178" width="6" height="8" fill="#ffe2a0" opacity=".6"/>'; return g; })() +
      bird(0, 40) + bird(30, 54, "gh-bird2") + bird(60, 30, "gh-bird2") +
      trees +
      '<rect x="0" y="210" width="400" height="8" fill="#9b9a94"/><rect x="0" y="218" width="400" height="42" fill="#3c3d41"/>' +
      '<path d="M0 239h400" stroke="#e8c547" stroke-width="2" stroke-dasharray="18 12"/>' +
      car(0, 222, RED, "gh-car") + '<g class="gh-carl"><rect x="0" y="242" width="60" height="14" rx="3" fill="#2f6fb3"/><rect x="4" y="245" width="52" height="5" fill="#cfe2f5"/><circle cx="12" cy="256" r="4" fill="#111"/><circle cx="48" cy="256" r="4" fill="#111"/></g>' +
      txt("LINDEN BLVD", 330, 214, 7, "#2a2a2a", 'letter-spacing="2"'),
      sky("ghs2", "#3b2a58", "#f08a4b"));
  }

  /* 3. The courts at the Cypress Hills Houses: red-brick project buildings, chain-link fence, the hoop with the chain net swinging, the ball going up */
  function court() {
    const bldg = (x, y, w) => {
      let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="#8e3b2e"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#6a2a20"/>';
      for (let yy = y + 10; yy < 162; yy += 15) for (let xx = x + 8; xx < x + w - 10; xx += 16) g += '<rect class="gh-bl gh-bl' + ((xx + yy * 3) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="8" height="9" fill="#ffd98a" opacity=".7"/>';
      return g;
    };
    let fence = ""; for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 150l10 14M' + (x + 10) + ' 150l-10 14" stroke="#9aa0a6" stroke-width=".8" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghs3)"/>' + stars(12) +
      bldg(0, 56, 120) + bldg(132, 70, 136) + bldg(280, 50, 120) +
      txt("CYPRESS HILLS HOUSES", 200, 44, 10, CREAM, 'letter-spacing="3" opacity=".85"') +
      '<rect x="0" y="146" width="400" height="20" fill="none"/>' + fence + '<rect x="0" y="149" width="400" height="2" fill="#9aa0a6"/>' +
      /* court */
      '<rect x="0" y="166" width="400" height="94" fill="#2f6b5a"/>' +
      '<path d="M40 260L120 176h160l80 84" stroke="#f4ead8" stroke-width="2" fill="none"/>' +
      '<ellipse cx="200" cy="208" rx="46" ry="14" stroke="#f4ead8" stroke-width="2" fill="#c0502e" opacity=".9"/>' +
      /* hoop */
      '<rect x="328" y="70" width="6" height="140" fill="#556"/>' +
      '<rect x="296" y="66" width="56" height="38" fill="#e9eef2" stroke="#334" stroke-width="2"/><rect x="314" y="80" width="20" height="14" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="324" cy="106" rx="13" ry="3" fill="none" stroke="' + ORANGE + '" stroke-width="3"/>' +
      '<g class="gh-net"><path d="M312 107l4 14M318 108l1 14M324 108v14M330 108l-1 14M336 107l-4 14M314 114h20M316 121h16" stroke="#cfd4d8" stroke-width="1.6" fill="none"/></g>' +
      /* players (silhouettes, no faces) */
      person(232, 176, "#15151b") + person(286, 182, "#1c1c24") +
      '<g class="gh-ball"><circle cx="248" cy="160" r="7" fill="' + ORANGE + '"/><path d="M241 160h14M248 153v14" stroke="#7a3b0c" stroke-width="1.2"/></g>' +
      '<circle class="gh-flk" cx="40" cy="120" r="5" fill="#fff6c2"/><rect x="38" y="124" width="4" height="46" fill="#444"/>',
      sky("ghs3", "#0e1426", "#3a3360"));
  }

  /* 4. Franklin K. Lane High School on Jamaica Av at the Brooklyn-Queens line: red-brick Georgian front, white trim and columns, the tall clock tower with its white cupola, the clock hands moving */
  function lane() {
    let brick = "";
    for (let y = 120; y < 210; y += 8) for (let x = ((y / 8) % 2 ? 0 : 10); x < 400; x += 20) brick += '<rect x="' + x + '" y="' + y + '" width="19" height="7" fill="#9c4a33" opacity=".35"/>';
    let wins = "";
    [26, 66, 106, 270, 310, 350].forEach(x => { wins += '<rect x="' + x + '" y="134" width="22" height="30" fill="#2d3a4a" stroke="#f1ece2" stroke-width="2.5"/><path d="M' + (x + 11) + ' 134v30M' + x + ' 149h22" stroke="#f1ece2" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="176" width="22" height="26" fill="#2d3a4a" stroke="#f1ece2" stroke-width="2.5"/><path d="M' + (x + 11) + ' 176v26" stroke="#f1ece2" stroke-width="1.5"/>'; });
    let cols = ""; for (let x = 158; x <= 236; x += 26) cols += '<rect x="' + x + '" y="132" width="8" height="74" fill="#f1ece2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghs4)"/>' +
      '<g opacity=".9"><circle cx="70" cy="40" r="14" fill="#fff"/><circle cx="88" cy="36" r="18" fill="#fff"/><circle cx="108" cy="42" r="13" fill="#fff"/></g>' +
      bird(0, 70) + bird(20, 58, "gh-bird2") +
      /* tower */
      '<rect x="176" y="62" width="48" height="60" fill="#a34f36"/><rect x="172" y="58" width="56" height="6" fill="#f1ece2"/>' +
      '<circle cx="200" cy="92" r="16" fill="#f7f3ea" stroke="#2a2a2a" stroke-width="2"/>' +
      [0, 90, 180, 270].map(a => '<rect x="199" y="78" width="2" height="4" fill="#2a2a2a" transform="rotate(' + a + ' 200 92)"/>').join("") +
      '<g class="gh-hand" style="transform-origin:200px 92px"><rect x="199" y="80" width="2" height="12" fill="#1a1a1a"/></g>' +
      '<g class="gh-hand gh-hand2" style="transform-origin:200px 92px"><rect x="198.5" y="84" width="3" height="8" fill="#1a1a1a"/></g>' +
      /* cupola */
      '<rect x="184" y="36" width="32" height="22" fill="#f1ece2"/>' + [188, 198, 208].map(x => '<rect x="' + x + '" y="40" width="5" height="14" fill="#5a6b7a"/>').join("") +
      '<path d="M182 36l18-18l18 18z" fill="#f1ece2"/><rect x="199" y="6" width="2" height="14" fill="#ccc"/>' +
      /* main building */
      '<rect x="0" y="118" width="400" height="92" fill="#b05a3e"/>' + brick +
      '<rect x="0" y="114" width="400" height="6" fill="#f1ece2"/>' +
      '<path d="M146 124l54-22l54 22z" fill="#f1ece2"/><rect x="146" y="124" width="108" height="8" fill="#f1ece2"/>' +
      cols + wins +
      '<rect x="182" y="176" width="36" height="34" rx="2" fill="#3a2a22" stroke="#f1ece2" stroke-width="2"/>' +
      txt("FRANKLIN K. LANE", 200, 128, 7, "#7a2f1f", 'letter-spacing="1.5"') +
      /* steps + Jamaica Av */
      '<rect x="160" y="210" width="80" height="6" fill="#d8d2c6"/><rect x="150" y="216" width="100" height="6" fill="#cbc4b6"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#3b3c40"/><path d="M0 242h400" stroke="#e8c547" stroke-width="2" stroke-dasharray="16 12"/>' +
      car(0, 228, TEAL, "gh-car") +
      person(110, 192, "#222") + person(290, 194, "#2b2b33"),
      sky("ghs4", "#5aa0d8", "#cfe6f5"));
  }

  /* 5. Fulton St & Alabama Av: green street signs, a roll-down gate tagged GROUP HOME, the J el running overhead behind */
  function corner() {
    let rows = "";
    [[0, 70, 90], [94, 84, 76], [174, 64, 84], [262, 80, 70]].forEach(([x, y, w]) => {
      rows += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="#4a2f2a"/>';
      for (let yy = y + 8; yy < 132; yy += 13) for (let xx = x + 7; xx < x + w - 8; xx += 13) rows += '<rect class="gh-bl gh-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".7"/>';
    });
    let gate = ""; for (let y = 146; y < 228; y += 5) gate += '<path d="M0 ' + y + 'h300" stroke="#5c6066" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghs5)"/>' + stars(14) +
      rows +
      /* the J el behind */
      '<rect x="0" y="96" width="400" height="10" fill="' + ELG + '"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 22) g += '<path d="M' + x + ' 106l11 12l11-12" stroke="' + ELG + '" stroke-width="2.5" fill="none"/>'; return g; })() +
      '<rect x="0" y="117" width="400" height="4" fill="' + ELG + '"/>' +
      [30, 150, 270].map(x => '<rect x="' + x + '" y="117" width="8" height="30" fill="' + ELG + '"/>').join("") +
      '<g class="gh-el">' + jcar(0, 54, 300).replace(/height="52"/, 'height="42"') + bullet(284, 84, "J", JZ) + '</g>' +
      '<rect x="0" y="94" width="400" height="4" fill="#1f3328"/>' +
      /* the wall + gate */
      '<rect x="0" y="140" width="320" height="88" fill="#7d8188"/>' + gate +
      '<rect x="300" y="140" width="20" height="88" fill="#4a3f3a"/>' +
      tag("GROUP HOME", 10, 196, 42, ORANGE, -5) +
      tag("LIL DAP", 16, 222, 17, TEAL, -3) + tag("NUTCRACKER", 104, 224, 17, RED, -4) + tag("THE EAST", 222, 218, 15, CREAM, -3) +
      '<path class="gh-drip" d="M60 200v6" stroke="' + ORANGE + '" stroke-width="3" stroke-linecap="round"/>' +
      '<path class="gh-drip" style="animation-delay:-.9s" d="M172 202v6" stroke="' + ORANGE + '" stroke-width="3" stroke-linecap="round"/>' +
      /* sidewalk + street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="5" fill="#8a8c90"/>' +
      car(0, 240, ORANGE, "gh-car") +
      /* sign pole + green signs */
      '<rect x="356" y="58" width="5" height="172" fill="#3d4b3f"/>' +
      '<rect x="306" y="62" width="92" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Fulton St", 352, 78, 12, "#fff") +
      '<rect x="306" y="88" width="92" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Alabama Av", 352, 104, 12, "#fff") +
      '<circle class="gh-flk" cx="358" cy="54" r="4" fill="#fff6c2"/>',
      sky("ghs5", "#0a0c1a", "#2e2440"));
  }

  window.SCENES = { alabama: alabama, linden: linden, court: court, lane: lane, corner: corner };
})();
