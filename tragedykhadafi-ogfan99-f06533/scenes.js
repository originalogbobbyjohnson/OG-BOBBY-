/* Tragedy Khadafi game (NYC map, Queens: Queensbridge / Long Island City). The N and W at 39 Av-Dutch Kills up on the el over 31st St,
   the 5Pointz graffiti warehouse on Jackson Av with the 7 rolling past, the old red-brick P.S. 1 schoolhouse on Jackson Av ("Hoodlum's the past,
   Intelligent is the future"), the ride down 21st Street toward the bridge with the system booming ("Pump the Funk"), and Vernon Blvd & 41st Rd
   on the south edge of Queensbridge with the river towers behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes elrun{from{transform:translateX(-320px)}to{transform:translateX(460px)}}.elt{animation:elrun 7s linear infinite}' +
    '@keyframes boom{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.8);opacity:0}}.bm{transform-box:fill-box;transform-origin:50% 50%;animation:boom 1s ease-out infinite}.bm2{animation-delay:.5s}' +
    '@keyframes thump{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.th{animation:thump .5s ease-in-out infinite}' +
    '@keyframes drift{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.dr{animation:drift 6s ease-in-out infinite}' +
    '@keyframes spray{0%{opacity:0}30%{opacity:.9}100%{opacity:0;transform:translate(10px,-6px)}}.sp{animation:spray 1.6s ease-out infinite}.sp2{animation-delay:.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* Long Island City glass towers with lit windows */
  const towers = (col, base) => { let g = ""; [[6, 40, 34], [44, 64, 30], [300, 30, 36], [340, 54, 30], [372, 70, 28]].forEach(([x, y, w]) => {
    g += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="' + col + '"/>';
    for (let yy = y + 6; yy < base - 6; yy += 10) for (let xx = x + 4; xx < x + w - 6; xx += 8) if ((xx * 5 + yy * 3) % 7 < 4) g += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#bfe3ff" opacity=".75"/>'; }); return g; };
  const YEL = "#fccc0a", PURPLE = "#b933ad", GOLD = "#f2c14e", RED = "#c0392b", GREEN = "#2e8b57", CREAM = "#f4ead8";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. 39 Av-Dutch Kills on the Astoria line: up on the el over 31st St, the canopy, the black sign with the yellow N and W, the train sliding in */
  function station() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(12) + towers("#24304a", 170) +
      '<path d="M0 44h400v10H0z" fill="#4a4f57"/><rect x="0" y="54" width="400" height="4" fill="#80868f"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="106" fill="#3d6b4f"/>').join("") +
      '<rect x="70" y="64" width="260" height="32" rx="3" fill="#111"/><rect x="70" y="64" width="260" height="3" fill="#fff"/>' +
      '<text x="82" y="86" ' + font + ' font-size="14" fill="#fff">39 Av-Dutch Kills</text>' + bullet(286, 80, "N", YEL, true) + bullet(312, 80, "W", YEL, true) +
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "N", YEL, true) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="12" height="78" fill="#3d6b4f"/><path d="M' + (x + 12) + ' 186l60 0" stroke="#3d6b4f" stroke-width="4"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#4a4a4f"/>' +
      '<g class="car"><rect x="0" y="242" width="40" height="13" rx="4" fill="' + GOLD + '"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">31ST STREET</text>',
      sky("s1", "#101833", "#4a3f6e"));
  }

  /* 2. 5Pointz on Jackson Av: the long brick warehouse covered top to bottom in color pieces, the 7 rolling past on the el above */
  function pointz() {
    const pieces = ["#e63946", "#f4a261", "#2a9d8f", "#8338ec", "#ffbe0b", "#3a86ff", "#fb5607", "#06d6a0"];
    let wall = "";
    for (let i = 0; i < 16; i++) { const x = 6 + i * 24, y = 104 + (i % 3) * 18; wall += '<path d="M' + x + ' ' + (y + 14) + 'q12 -' + (14 + i % 4 * 3) + ' 24 0q-6 16 -24 10z" fill="' + pieces[i % 8] + '" opacity=".9"/>'; }
    for (let i = 0; i < 10; i++) wall += '<circle cx="' + (20 + i * 38) + '" cy="' + (176 + (i % 2) * 10) + '" r="' + (8 + i % 3 * 3) + '" fill="' + pieces[(i + 3) % 8] + '" opacity=".85"/>';
    let cars = "";
    for (let x = 0; x < 300; x += 60) cars += '<rect x="' + x + '" y="40" width="56" height="24" rx="4" fill="#c9ced6"/><rect x="' + (x + 6) + '" y="45" width="16" height="9" rx="1" fill="#cfe2f5"/><rect x="' + (x + 30) + '" y="45" width="16" height="9" rx="1" fill="#cfe2f5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<g class="elt">' + cars + bullet(278, 52, "7", PURPLE) + '</g>' +
      '<rect x="0" y="64" width="400" height="7" fill="#3d6b4f"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 4) + '" y="71" width="8" height="22" fill="#3d6b4f"/>').join("") +
      '<rect x="0" y="92" width="400" height="114" fill="#8a5a46"/><rect x="0" y="92" width="400" height="6" fill="#6f4535"/>' + wall +
      [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 12) + '" y="98" width="24" height="10" fill="#2a2420" opacity=".8"/>').join("") +
      tag("5 POINTZ", 110, 160, 36, "#fff", -4) +
      '<g class="sp"><circle cx="340" cy="150" r="3" fill="#ffbe0b"/><circle cx="346" cy="146" r="2" fill="#ffbe0b"/></g><g class="sp sp2"><circle cx="350" cy="156" r="2.5" fill="#3a86ff"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#55575c"/><rect x="0" y="206" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car car2"><rect x="0" y="228" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="242" r="4" fill="#111"/><circle cx="34" cy="242" r="4" fill="#111"/></g>' +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">JACKSON AVE</text>',
      sky("s2", "#5aa9e6", "#d9ecff"));
  }

  /* 3. The old P.S. 1 schoolhouse on Jackson Av: red brick, tall arched windows, the bell tower roof, the courtyard wall; a chalkboard line on the gate */
  function ps1() {
    let wins = "";
    for (let r = 0; r < 2; r++) for (let x = 104; x < 300; x += 34) wins += '<path d="M' + x + ' ' + (150 - r * 46) + 'v-24q10 -12 20 0v24z" fill="' + (r ? "#ffe2a0" : "#2c3a55") + '" class="' + (r ? "flk" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<circle cx="62" cy="50" r="16" fill="#fff4c8" opacity=".9"/>' +
      '<g class="dr"><ellipse cx="300" cy="44" rx="38" ry="9" fill="#fff" opacity=".7"/><ellipse cx="330" cy="38" rx="22" ry="7" fill="#fff" opacity=".7"/></g>' +
      '<rect x="90" y="70" width="220" height="110" fill="#a8432f"/>' +
      (() => { let b = ""; for (let y = 76; y < 180; y += 7) b += '<path d="M90 ' + y + 'h220" stroke="#8c3524" stroke-width=".8"/>'; return b; })() +
      '<path d="M84 72l116 -36l116 36z" fill="#5a2a22"/><rect x="186" y="18" width="28" height="30" fill="#a8432f"/><path d="M182 20l18 -12l18 12z" fill="#5a2a22"/>' +
      '<rect x="196" y="28" width="8" height="12" fill="#2c3a55"/>' + wins +
      '<rect x="182" y="150" width="36" height="30" fill="#3a2a20"/><path d="M182 150q18 -18 36 0" fill="#3a2a20"/>' +
      '<rect x="0" y="176" width="400" height="10" fill="#9aa0a8"/>' +
      /* courtyard concrete wall */
      '<rect x="0" y="186" width="400" height="44" fill="#b7b2a8"/><path d="M0 200h400M0 214h400" stroke="#a29d93" stroke-width="1"/>' +
      '<rect x="14" y="191" width="158" height="34" fill="#1f3a2b" stroke="#6b4a2a" stroke-width="3"/><text x="93" y="205" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="8.5" fill="#f4ead8">HOODLUM\'S THE PAST</text><text x="93" y="219" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="8.5" fill="#f2c14e">INTELLIGENT IS THE FUTURE</text>' +
      tag("P.S. 1", 260, 222, 26, GOLD, -3) +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/>' +
      '<g class="car"><rect x="0" y="238" width="44" height="14" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="34" cy="252" r="4" fill="#111"/></g>',
      sky("s3", "#f7b267", "#fde2b8"));
  }

  /* 4. The ride down 21st Street toward the bridge: the car rolling with the system booming, bass rings out of the trunk, street lamps, the Houses' windows */
  function pumpfunk() {
    let lamps = "";
    for (let x = 30; x < 400; x += 90) lamps += '<rect x="' + x + '" y="120" width="3" height="84" fill="#555b66"/><path d="M' + (x + 1) + ' 120q10 -6 18 0" stroke="#555b66" stroke-width="3" fill="none"/><circle class="flk" cx="' + (x + 19) + '" cy="122" r="4" fill="#fff3b0"/>';
    let bricks = "";
    [[0, 70, 120], [130, 60, 140], [280, 76, 120]].forEach(([x, y, w]) => { bricks += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="#4a2a24"/>';
      for (let yy = y + 8; yy < 190; yy += 14) for (let xx = x + 8; xx < x + w - 10; xx += 16) if ((xx + yy) % 3) bricks += '<rect class="bl bl' + ((xx * yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="7" height="8" fill="#ffd98a" opacity=".8"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(16) + bricks +
      '<rect x="0" y="200" width="400" height="60" fill="#34363c"/><path d="M0 232h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="16 10"/>' + lamps +
      /* the car: low, long, chrome rims; bass rings from the trunk */
      '<g class="th"><path d="M120 222q4 -18 26 -20l20 -16h56l24 16q30 2 34 20z" fill="#1b1b1f" stroke="' + GOLD + '" stroke-width="2"/><path d="M172 190h46l16 12h-76z" fill="#2c3a55"/>' +
      '<circle cx="152" cy="224" r="12" fill="#111"/><circle cx="252" cy="224" r="12" fill="#111"/><circle cx="152" cy="224" r="6" fill="#c9ced6"/><circle cx="252" cy="224" r="6" fill="#c9ced6"/></g>' +
      '<circle class="bm" cx="288" cy="206" r="14" fill="none" stroke="' + GOLD + '" stroke-width="3"/><circle class="bm bm2" cx="288" cy="206" r="14" fill="none" stroke="' + RED + '" stroke-width="3"/>' +
      '<circle class="bm" cx="112" cy="206" r="12" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      tag("PUMP THE FUNK", 112, 112, 30, GOLD, -5),
      sky("s4", "#0a0d1f", "#3a2f55"));
  }

  /* 5. Vernon Blvd & 41st Rd: green street signs, the brick wall tagged TRAGEDY, the Long Island City river towers behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) + towers("#1e2740", 140) +
      '<rect x="0" y="130" width="400" height="96" fill="#5a3a2c"/>' +
      (() => { let b = ""; for (let y = 136; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#46291e" stroke-width="1"/>'; return b; })() +
      tag("TRAGEDY", 14, 196, 44, GOLD, -5) + tag("HOODLUM", 200, 218, 22, CREAM, -4) + tag("2-5", 250, 168, 26, RED, -8) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="58" width="5" height="170" fill="#3d4b3f"/>' +
      '<rect x="290" y="62" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="78" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Vernon Blvd</text>' +
      '<rect x="302" y="88" width="94" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="349" y="104" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">41st Rd</text>' +
      '<circle class="flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("s5", "#070a16", "#283252"));
  }

  window.SCENES = { station: station, pointz: pointz, ps1: ps1, pumpfunk: pumpfunk, corner: corner };
})();
