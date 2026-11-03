/* Mike WiLL Made-It producer game: Marietta, Georgia. I-75 North sign, Marietta Square, the Christmas beat machine, PatchWerk Recording Studios, Cobb Pkwy & Roswell Rd with the Big Chicken. Each scene 400 x 260. */
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
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const cloud = (x, y, s) => '<g class="carL" style="animation-duration:40s"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".8"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const carS = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="5" fill="' + col + '"/><rect x="10" y="' + (y - 8) + '" width="28" height="10" rx="4" fill="' + col + '"/><rect x="14" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><rect x="26" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><circle cx="11" cy="' + (y + 15) + '" r="4.5" fill="#111"/><circle cx="39" cy="' + (y + 15) + '" r="4.5" fill="#111"/></g>';
  const pine = (x, y, s) => '<path d="M' + x + ' ' + (y - 40 * s) + 'l' + (14 * s) + ' ' + (24 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (18 * s) + 'h' + (-40 * s) + 'l' + (12 * s) + ' ' + (-18 * s) + 'h' + (-6 * s) + 'z" fill="#2f5a34"/><rect x="' + (x - 2 * s) + '" y="' + (y + 2 * s) + '" width="' + (4 * s) + '" height="' + (8 * s) + '" fill="#5a3a22"/>';
  const ORG = "#ff5a36", YEL = "#ffd23f", MINT = "#3ddc97";

  /* 1. I-75 North into Cobb County: the overhead sign for Marietta, Georgia pines, traffic */
  function road() {
    let p = ""; for (let x = 0; x < 420; x += 26) p += pine(x, 140 + (x % 3) * 4, .9);
    return svg(
      '<rect width="400" height="260" fill="url(#w1)"/>' + cloud(80, 36, 1) + cloud(320, 52, .8) + p +
      '<rect x="0" y="150" width="400" height="110" fill="#33363d"/><rect x="0" y="150" width="400" height="5" fill="#9a9a90"/>' +
      '<g fill="#e8e2d6">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="196" width="22" height="3"/>').join("") + '</g>' +
      carS("car", 176, ORG) + carS("car car2", 176, "#3b6fd1") + carS("carL", 220, "#e8e8e8") + carS("carL carL2", 220, MINT) +
      '<rect x="60" y="20" width="5" height="132" fill="#777"/><rect x="340" y="20" width="5" height="132" fill="#777"/><rect x="56" y="24" width="292" height="5" fill="#777"/>' +
      '<rect x="80" y="32" width="244" height="80" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M98 44h30v18q0 12-15 16q-15-4-15-16z" fill="#1d4ea0" stroke="#fff" stroke-width="1.5"/><rect x="98" y="44" width="30" height="6" fill="#d22"/>' + T(113, 69, 13, "#fff", "75", ' text-anchor="middle"') +
      T(138, 62, 13, "#fff", "NORTH") + T(100, 96, 20, "#fff", "Marietta") + '<path d="M290 50v30m-8-8l8 8 8-8" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="230" y="84" width="76" height="20" rx="3" fill="' + YEL + '"/>' + T(268, 99, 11, "#111", "EXIT ONLY", ' text-anchor="middle"') +
      tag("EAR DRUMMERS", 110, 252, 22, YEL, -3),
      sky("w1", "#5d9fe0", "#f2e9d4"));
  }

  /* 2. Marietta Square: Glover Park's white gazebo and fountain, red-brick storefronts all around */
  function square() {
    let shops = "", cols = ["#9c4a33", "#b55a3a", "#8a3e2c", "#a8603f", "#93452f", "#b2573a"];
    for (let i = 0; i < 6; i++) shops += '<rect x="' + (i * 68) + '" y="' + (70 + (i % 2) * 10) + '" width="66" height="' + (90 - (i % 2) * 10) + '" fill="' + cols[i] + '"/>' +
      '<rect x="' + (i * 68 + 8) + '" y="' + (84 + (i % 2) * 10) + '" width="14" height="18" fill="#f2e2b0"/><rect x="' + (i * 68 + 30) + '" y="' + (84 + (i % 2) * 10) + '" width="14" height="18" fill="#f2e2b0"/><rect x="' + (i * 68 + 4) + '" y="134" width="58" height="8" fill="' + (i % 2 ? "#1f5a3a" : "#2a2a6a") + '"/>';
    let lights = ""; for (let x = 10; x < 400; x += 18) lights += '<circle class="bl' + (x % 36 ? " bl2" : "") + '" cx="' + x + '" cy="' + (64 + Math.abs((x % 72) - 36) / 6) + '" r="2" fill="' + YEL + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#w2)"/>' + shops + '<path d="M0 64q36 8 72 0t72 0 72 0 72 0 72 0 72 0" stroke="#333" fill="none"/>' + lights +
      '<rect x="0" y="160" width="400" height="100" fill="#6fa24f"/><path d="M0 172h400" stroke="#d8d0bf" stroke-width="8"/>' +
      '<g fill="#3f7a3a"><circle cx="40" cy="168" r="26"/><circle cx="360" cy="166" r="28"/></g>' +
      /* gazebo */
      '<path d="M120 130l50-34 50 34z" fill="#f4f1ea" stroke="#999"/><rect x="124" y="130" width="92" height="6" fill="#f4f1ea"/>' +
      '<g fill="#f4f1ea">' + [128, 152, 186, 210].map(x => '<rect x="' + x + '" y="136" width="4" height="40"/>').join("") + '</g><rect x="118" y="174" width="104" height="10" fill="#e3ddd0"/><rect x="126" y="160" width="88" height="3" fill="#f4f1ea"/>' +
      /* fountain */
      '<ellipse cx="292" cy="214" rx="46" ry="12" fill="#c9c4b8"/><ellipse cx="292" cy="212" rx="40" ry="8" fill="#6cb6e0"/><rect x="288" y="188" width="8" height="24" fill="#c9c4b8"/>' +
      '<g class="bob"><path d="M292 186q-14 6-22 22M292 186q14 6 22 22M292 182v-10" stroke="#bfe6ff" stroke-width="3" fill="none"/></g>' +
      '<rect x="40" y="200" width="120" height="24" rx="3" fill="#0f3a2a" stroke="#fff" stroke-width="1.5"/>' + T(100, 216, 10, "#fff", "MARIETTA SQUARE", ' text-anchor="middle"') +
      tag("MADE IT", 170, 252, 22, ORG, -3),
      sky("w2", "#6fb0e8", "#fbe8c8"));
  }

  /* 3. Christmas at 14: his first beat machine under the tree, pads lighting up in the basement */
  function christmas() {
    let orn = ""; [[300, 90, ORG], [318, 120, YEL], [282, 128, MINT], [310, 150, ORG], [270, 160, YEL], [336, 160, MINT], [296, 64, YEL]].forEach((o, i) =>
      orn += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + o[0] + '" cy="' + o[1] + '" r="5" fill="' + o[2] + '"/>');
    return svg(
      '<rect width="400" height="260" fill="#2a2130"/>' + brick(0, 0, 400, 180, "#3a2c34", "#2a2028") +
      '<rect x="30" y="30" width="90" height="50" fill="#1a2140" stroke="#5a4a40" stroke-width="5"/><g fill="#fff">' + [40, 60, 84, 104].map((x, i) => '<circle cx="' + x + '" cy="' + (44 + i * 6) + '" r="2"/>').join("") + '</g>' +
      /* tree */
      '<path d="M300 40l46 140h-92z" fill="#1f5a34"/><path d="M300 40l30 70h-60z" fill="#2a7040"/><rect x="294" y="180" width="12" height="14" fill="#5a3a22"/>' + orn +
      '<path d="M300 30l4 8h9l-7 5 3 9-9-6-9 6 3-9-7-5h9z" fill="' + YEL + '"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#4a3b33"/>' +
      /* the gift: beat machine on the opened box */
      '<rect x="120" y="170" width="120" height="40" fill="' + ORG + '"/><rect x="174" y="170" width="12" height="40" fill="' + YEL + '"/><path d="M120 170l-14-18h120l14 18" fill="#d8442a"/>' +
      '<rect x="128" y="120" width="104" height="50" rx="4" fill="#c8282f" stroke="#222" stroke-width="2"/><rect x="136" y="126" width="40" height="10" fill="#18232e"/>' + T(156, 134, 7, MINT, "BEAT 1", ' text-anchor="middle"') +
      '<g transform="translate(-6 0)">' + pads(144, 140, YEL, MINT) + '</g>' +
      '<g class="th"><rect x="40" y="130" width="40" height="64" rx="3" fill="#222"/><circle cx="60" cy="150" r="8" fill="#444"/><circle cx="60" cy="176" r="12" fill="#444"/></g>' +
      tag("AGE 14", 20, 246, 24, YEL, -4) + tag("MIKE WILL", 210, 246, 22, ORG, -3));
  }

  /* 4. PatchWerk Recording Studios, Atlanta, at night: where Gucci Mane first rapped on his beat */
  function patchwerk() {
    return svg(
      '<rect width="400" height="260" fill="url(#w4)"/>' + stars(26) +
      '<g fill="#1a2238"><rect x="0" y="90" width="40" height="80"/><rect x="44" y="70" width="30" height="100"/><path d="M300 170V60l10-14 10 14v110z"/><rect x="330" y="80" width="34" height="90"/><rect x="368" y="100" width="32" height="70"/></g>' +
      '<g fill="#f2d24b" opacity=".6"><rect x="50" y="80" width="4" height="4"/><rect x="62" y="96" width="4" height="4"/><rect x="306" y="74" width="4" height="4"/><rect x="340" y="92" width="4" height="4"/></g>' +
      brick(80, 96, 230, 92, "#5a3a33", "#46302a") + '<rect x="76" y="90" width="238" height="8" fill="#2a2a2e"/>' +
      '<rect x="110" y="104" width="170" height="30" rx="3" fill="#111"/>' + T(195, 125, 18, ORG, "PATCHWERK", ' text-anchor="middle" class="flk"') +
      '<rect x="176" y="142" width="36" height="46" fill="#2a1d1a"/><rect x="180" y="146" width="28" height="40" fill="#3a2a24"/><circle cx="204" cy="168" r="2" fill="' + YEL + '"/>' +
      '<rect x="100" y="146" width="56" height="24" fill="#0f1830"/><rect x="232" y="146" width="56" height="24" fill="#0f1830"/>' +
      '<g fill="' + MINT + '"><rect class="mt" x="108" y="150" width="4" height="16"/><rect class="mt mt2" x="116" y="150" width="4" height="16"/><rect class="mt mt3" x="124" y="150" width="4" height="16"/><rect class="mt mt4" x="132" y="150" width="4" height="16"/></g>' +
      '<rect x="240" y="150" width="40" height="8" rx="2" fill="#c8282f"/>' + T(260, 157, 6, "#fff", "REC", ' text-anchor="middle" class="flk flk2"') +
      '<rect x="0" y="188" width="400" height="12" fill="#6a6660"/><rect x="0" y="200" width="400" height="60" fill="#1e1f24"/>' +
      carS("carL", 222, YEL) +
      '<rect x="20" y="212" width="130" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(85, 227, 10, "#fff", "HEMPHILL AVE NW", ' text-anchor="middle"') +
      tag("BEAT TAPE", 240, 250, 20, MINT, -4),
      sky("w4", "#0b0f24", "#3b2a5a"));
  }

  /* 5. Cobb Pkwy & Roswell Rd: the Big Chicken over the corner, a tagged wall, traffic */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#w5)"/>' + cloud(60, 40, .9) +
      /* the Big Chicken: tall red sheet-metal bird, white face, yellow beak that opens and closes */
      '<path d="M268 220V96q0-36 36-44q36 8 36 44v124z" fill="#c8202a" stroke="#7a1218" stroke-width="2"/>' +
      '<path d="M282 70q22-30 44 0z" fill="#e8302a"/><path d="M290 46l6 14 6-16 6 16 6-14 4 22h-32z" fill="#e8302a"/>' +
      '<ellipse cx="304" cy="100" rx="26" ry="22" fill="#fff"/>' +
      '<g class="bl"><ellipse cx="294" cy="94" rx="6" ry="7" fill="#fff" stroke="#111" stroke-width="2"/><circle cx="295" cy="95" r="3" fill="#111"/><ellipse cx="314" cy="94" rx="6" ry="7" fill="#fff" stroke="#111" stroke-width="2"/><circle cx="313" cy="95" r="3" fill="#111"/></g>' +
      '<path d="M296 108h16l-8 10z" fill="' + YEL + '"/><g class="bob"><path d="M298 118h12l-6 6z" fill="#e8b020"/></g>' +
      '<path d="M268 150l-20 20M340 150l20 20" stroke="#c8202a" stroke-width="10" stroke-linecap="round"/>' +
      '<rect x="0" y="120" width="250" height="100" fill="#b4a690"/><g stroke="#968a76" stroke-width="1">' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h250"/>').join("") + '</g><rect x="0" y="116" width="250" height="6" fill="#d8d0bf"/>' +
      tag("MIKE WILL", 14, 176, 34, ORG, -6) + tag("MADE-IT", 60, 206, 22, YEL, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, MINT) +
      '<rect x="368" y="130" width="5" height="90" fill="#5b6b5f"/>' +
      '<rect x="300" y="132" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(348, 147, 11, "#fff", "COBB PKWY", ' text-anchor="middle"') +
      '<rect x="300" y="158" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(348, 173, 11, "#fff", "ROSWELL RD", ' text-anchor="middle"'),
      sky("w5", "#5fa6e6", "#ffd9a8"));
  }

  window.SCENES = { road, square, christmas, patchwerk, corner };
})();
