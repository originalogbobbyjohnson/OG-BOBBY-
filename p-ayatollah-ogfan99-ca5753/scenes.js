/* p-ayatollah scenes: producer game */
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
  const SUN = "#f2b134", SEA = "#5bc0be", CRIM = "#d7263d", E_BLUE = "#0039a6", JZ = "#996633";

  /* 1. Jamaica Center-Parsons/Archer, underground at the end of the E: the tiled wall, the E sliding in */
  function station() {
    let windows = ""; for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="98" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let tile = ""; for (let x = 0; x < 400; x += 16) tile += '<path d="M' + x + ' 0v84" stroke="#d9d9d2" stroke-width="1"/>';
    let cols = ""; for (let x = 40; x < 400; x += 90) cols += '<rect x="' + x + '" y="150" width="9" height="62" fill="#2a2a2e"/>';
    return svg(
      '<rect width="400" height="260" fill="#efeee8"/>' + tile +
      '<rect x="0" y="8" width="400" height="10" fill="#8a6a3a"/><rect x="0" y="18" width="400" height="3" fill="#5a4426"/>' +
      '<rect x="14" y="30" width="372" height="40" rx="4" fill="#111"/><rect x="14" y="30" width="372" height="4" fill="#fff"/>' +
      '<text x="24" y="57" ' + font + ' font-size="13.5" fill="#fff">Jamaica Center - Parsons/Archer</text>' +
      bullet(304, 51, "E", E_BLUE) + bullet(332, 51, "J", JZ) + bullet(360, 51, "Z", JZ) +
      '<rect x="0" y="84" width="400" height="66" fill="#15161a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="88" width="304" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="128" width="304" height="5" fill="' + E_BLUE + '"/>' + windows +
        '<circle cx="304" cy="138" r="4" fill="#fff6c2"/>' + bullet(292, 106, "E", E_BLUE) +
      '</g>' +
      '<rect x="0" y="146" width="400" height="8" fill="#eab308"/>' + cols +
      '<rect x="0" y="212" width="400" height="48" fill="#3a3a3f"/>' +
      tag("AYATOLLAH", 30, 246, 30, SUN, -5) + tag("QUEENS", 262, 246, 26, SEA, -7));
  }

  /* 2. Jamaica Avenue at night: storefront awnings, a boombox on the bench playing a beat tape, the cassette reels turning */
  function jamaicaave() {
    let shops = "";
    [[0, CRIM], [100, SEA], [200, SUN], [300, "#6a4c93"]].forEach(([x, c], k) => {
      shops += '<rect x="' + x + '" y="60" width="100" height="150" fill="' + ["#5a4a44", "#4e4650", "#5a4a44", "#4e4650"][k] + '"/>' +
        '<rect x="' + (x + 10) + '" y="118" width="80" height="70" fill="#ffe6a8" opacity=".85"/>' +
        '<path d="M' + (x + 4) + ' 100h92l8 18H' + (x - 4) + 'z" fill="' + c + '"/>' +
        (() => { let st = ""; for (let i = 0; i < 6; i++) st += '<path d="M' + (x + 4 + i * 17) + ' 100l-4 18" stroke="#fff" stroke-width="3" opacity=".5"/>'; return st; })() +
        '<rect x="' + (x + 16) + '" y="70" width="68" height="20" fill="#2a2a30"/>';
    });
    const reel = (cx) => '<g class="vn"><circle cx="' + cx + '" cy="222" r="7" fill="#fff"/><path d="M' + (cx - 6) + ' 222h12M' + cx + ' 216v12" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#j2)"/>' + stars(10) + shops +
      '<rect x="0" y="210" width="400" height="50" fill="#5d5f64"/><rect x="0" y="210" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="120" y="236" width="160" height="8" fill="#7a5a3a"/><rect x="130" y="244" width="6" height="14" fill="#3a3a3a"/><rect x="264" y="244" width="6" height="14" fill="#3a3a3a"/>' +
      '<rect x="146" y="196" width="108" height="40" rx="6" fill="#2c2c30" stroke="#111" stroke-width="2"/><path d="M160 196q40 -20 80 0" fill="none" stroke="#888" stroke-width="3"/>' +
      '<circle class="th" cx="166" cy="216" r="12" fill="#111" stroke="#666"/><circle class="th" cx="234" cy="216" r="12" fill="#111" stroke="#666"/>' +
      '<rect x="184" y="210" width="32" height="20" rx="2" fill="' + SUN + '"/>' + reel(193) + reel(207) +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" opacity=".85" letter-spacing="3">JAMAICA AVENUE, QUEENS</text>',
      sky("j2", "#0f1434", "#5a3a5a"));
  }

  /* 3. The beat room with the MPC60 II: the gray sampler with its pads lit, the turntable spinning, meters bouncing */
  function mpc60() {
    let eq = ""; for (let i = 0; i < 5; i++) eq += '<rect class="mt mt' + (i + 1) + '" x="' + (40 + i * 10) + '" y="40" width="7" height="46" fill="' + (i > 2 ? CRIM : "#5ee06a") + '"/>';
    let mpcPads = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) mpcPads += '<rect class="pd p' + (((r * 4 + c) % 8) + 1) + '" x="' + (130 + c * 20) + '" y="' + (168 + r * 16) + '" width="16" height="12" rx="2" fill="' + ((r + c) % 2 ? "#e9e4d8" : SUN) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b1d26"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2b2f3d"/>' +
      '<rect x="30" y="30" width="70" height="64" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq +
      '<rect x="130" y="24" width="100" height="100" fill="#efe8d6" stroke="#6b4a2e" stroke-width="3"/><circle cx="180" cy="74" r="38" fill="#0b0b0b"/><circle cx="180" cy="74" r="13" fill="' + SEA + '"/>' +
      '<rect x="262" y="34" width="110" height="70" rx="4" fill="#3a3d48"/><rect x="270" y="42" width="94" height="10" fill="' + CRIM + '"/><rect x="270" y="58" width="94" height="6" fill="#555"/><rect x="270" y="70" width="94" height="6" fill="#555"/><rect x="270" y="82" width="60" height="6" fill="#555"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#4d3626"/><rect x="0" y="150" width="400" height="6" fill="#62442f"/>' +
      '<rect x="20" y="160" width="220" height="86" rx="5" fill="#a9a9a3" stroke="#5a5a55" stroke-width="2"/>' +
      '<rect x="30" y="168" width="88" height="22" fill="#2a3a4a"/><text x="34" y="183" font-family="Courier New, monospace" font-size="9" fill="#9fd8ff">SEQ 01  BPM 88</text>' +
      '<rect x="30" y="198" width="10" height="40" fill="#6a6a66"/><rect class="pd p2" x="28" y="214" width="14" height="6" fill="' + CRIM + '"/>' +
      '<rect x="50" y="198" width="10" height="40" fill="#6a6a66"/><rect class="pd p5" x="48" y="206" width="14" height="6" fill="' + CRIM + '"/>' +
      mpcPads + turntable(262, 170, SUN));
  }

  /* 4. Behind the decks on tour: the DJ booth, two turntables, the crowd's hands up, the lights sweeping */
  function djbooth() {
    let crowd = ""; for (let i = 0; i < 14; i++) crowd += '<g class="bob' + '" style="animation-delay:' + (i % 4) * 0.2 + 's"><circle cx="' + (14 + i * 28) + '" cy="' + (150 + (i % 3) * 6) + '" r="11" fill="#14151c"/><path d="M' + (8 + i * 28) + ' ' + (148 + (i % 3) * 6) + 'l-6 -24M' + (20 + i * 28) + ' ' + (148 + (i % 3) * 6) + 'l6 -24" stroke="#14151c" stroke-width="5" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0d0f1a"/>' +
      '<path class="flk" d="M60 0L140 160H0z" fill="' + SEA + '" opacity=".25"/><path class="flk flk2" d="M340 0L400 160H250z" fill="' + CRIM + '" opacity=".25"/>' +
      '<path class="flk" d="M200 0L280 160H130z" fill="' + SUN + '" opacity=".18"/>' +
      '<rect x="0" y="136" width="400" height="40" fill="#1e2030"/>' + crowd +
      '<rect x="0" y="176" width="400" height="84" fill="#2a2018"/><rect x="0" y="176" width="400" height="6" fill="#3a2d22"/>' +
      turntable(30, 186, CRIM) + turntable(260, 186, SEA) +
      '<rect x="160" y="192" width="80" height="58" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
      '<rect x="172" y="202" width="6" height="36" fill="#444"/><rect x="171" y="214" width="8" height="6" fill="' + SUN + '"/><rect x="222" y="202" width="6" height="36" fill="#444"/><rect x="221" y="224" width="8" height="6" fill="' + SUN + '"/>' +
      '<rect class="bob" x="186" y="236" width="28" height="6" fill="#ddd"/>');
  }

  /* 5. Jamaica Av and Parsons Blvd: green street signs, the AYATOLLAH wall, the steel Unisphere glowing far off */
  function corner() {
    let grid = ""; [10, 22, 33, 41].forEach(rx => grid += '<ellipse cx="200" cy="72" rx="' + rx + '" ry="44" fill="none" stroke="#9fb3c4" stroke-width="1.4"/>');
    grid += '<ellipse cx="200" cy="72" rx="60" ry="14" transform="rotate(-20 200 72)" fill="none" stroke="#d6e2ec" stroke-width="1.6"/><ellipse cx="200" cy="72" rx="58" ry="12" transform="rotate(25 200 72)" fill="none" stroke="#d6e2ec" stroke-width="1.6"/>';
    for (let j = 1; j < 6; j++) grid += '<ellipse cx="200" cy="72" rx="' + (44 - Math.abs(j - 3) * 8) + '" ry="3" transform="translate(0 ' + ((j - 3) * 13) + ')" fill="none" stroke="#9fb3c4" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) +
      '<g class="bob"><circle cx="200" cy="72" r="44" fill="none" stroke="#b8c8d6" stroke-width="2"/>' + grid +
      '<path d="M166 56q14 -8 26 2t22 -6" fill="none" stroke="#d6e2ec" stroke-width="4"/><path d="M186 86q12 6 28 -2" fill="none" stroke="#d6e2ec" stroke-width="4"/></g>' +
      '<path d="M190 116l10 -6 10 6v24h-20z" fill="#7d8a96"/>' +
      '<rect x="0" y="120" width="400" height="20" fill="#2a2633"/>' +
      brick(0, 140, 400, 84, "#6f3a2e", "#552b22") +
      tag("AYATOLLAH", 18, 206, 40, SUN, -5) + tag("MPC60", 250, 222, 22, SEA, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#4a4c52"/><rect x="0" y="224" width="400" height="5" fill="#85878c"/>' +
      '<g class="car"><rect x="0" y="236" width="44" height="13" rx="4" fill="' + SUN + '"/><rect x="10" y="230" width="22" height="8" rx="2" fill="' + SUN + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="338" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(286, 44, 110, "Jamaica Av") + sign(272, 70, 124, "Parsons Blvd") +
      '<circle class="bl" cx="340" cy="36" r="5" fill="#fff6c2"/>',
      sky("c5", "#0b0c22", "#2f3a5a"));
  }

  window.SCENES = { station: station, jamaicaave: jamaicaave, mpc60: mpc60, djbooth: djbooth, corner: corner };
})();
