/* Aitch scenes (Regions tab: UK + EUROPE; New Moston, North Manchester - Harrison Armstrong, born 1999, "0161", "Manny").
   1 Moston station (Northern, Calder Valley line) on Hollinwood Avenue: an open-air platform, a blue-and-purple train pulling in.
   2 Broadway Baths, New Moston: the 1932 red-brick baths and library on Broadway, a swimmer's splash in the big window.
   3 Northern Quarter, Manchester: red-brick mill buildings, a big worker-bee mural, little bees buzzing (where his first studio was).
   4 Old Trafford: the red stadium wall and white roof trusses, floodlights blinking, flags waving (he's a United fan).
   5 Broadway and Moston Lane East, M40: Manchester street plates, AITCH tagged, the Pennine hills behind.
   CSS classes prefixed "aih" (the page's own anim-train is kept). No logos, no crests, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes aihBee{0%{transform:translate(0,0)}25%{transform:translate(30px,-14px)}50%{transform:translate(60px,4px)}75%{transform:translate(30px,12px)}100%{transform:translate(0,0)}}.aihBee{animation:aihBee 3s ease-in-out infinite}.aihB2{animation-duration:4s;animation-direction:reverse}' +
    '@keyframes aihWave{0%,100%{transform:skewY(0)}50%{transform:skewY(10deg)}}.aihWave{animation:aihWave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left}' +
    '@keyframes aihBlink{0%,100%{opacity:1}50%{opacity:.35}}.aihBlink{animation:aihBlink 1.2s steps(1) infinite}' +
    '@keyframes aihSplash{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-14px);opacity:0}}.aihSplash{animation:aihSplash 1.2s ease-out infinite}.aihS2{animation-delay:.4s}' +
    '@keyframes aihCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.aihCloud{animation:aihCloud 26s linear infinite}.aihC2{animation-delay:-13s}' +
    '@keyframes aihSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.aihSp{animation:aihSp 1.4s ease-out infinite}.aihSp2{animation-delay:.5s}' +
    '@keyframes aihRain{0%{transform:translateY(-20px)}100%{transform:translateY(40px)}}.aihRain{animation:aihRain .9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const NT = "#262262", BEE = "#f2c230", RED = "#d7262e", BRICK = "#9a4a32";
  const clouds = '<g fill="#fff" opacity=".75"><g class="aihCloud"><ellipse cx="40" cy="40" rx="34" ry="10"/><ellipse cx="60" cy="34" rx="20" ry="9"/></g>' +
    '<g class="aihCloud aihC2"><ellipse cx="40" cy="70" rx="28" ry="8"/><ellipse cx="56" cy="64" rx="16" ry="8"/></g></g>';
  const bee = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="9" ry="6" fill="' + BEE + '" stroke="#111" stroke-width="1.5"/>' +
    '<path d="M-3 -6v12M3 -6v12" stroke="#111" stroke-width="2.5"/><ellipse cx="-2" cy="-9" rx="5" ry="4" fill="#e9f4fb" opacity=".9"/><ellipse cx="4" cy="-9" rx="5" ry="4" fill="#e9f4fb" opacity=".9"/><circle cx="9" cy="-1" r="3" fill="#111"/></g>';

  /* 1. Moston station, Hollinwood Avenue */
  function aihstation() {
    let wins = "";
    for (const x of [30, 64, 148, 182, 266]) wins += '<rect x="' + x + '" y="134" width="26" height="18" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 126h300q28 0 32 24v34H10z" fill="' + NT + '" stroke="#111" stroke-width="2"/>' +
      '<rect x="10" y="164" width="332" height="8" fill="#6a5acd"/>' + wins +
      '<g fill="#e9e9f4"><rect x="108" y="134" width="22" height="44"/><rect x="226" y="134" width="22" height="44"/></g>' +
      '<g fill="#1d2a33"><rect x="111" y="138" width="7" height="18"/><rect x="120" y="138" width="7" height="18"/><rect x="229" y="138" width="7" height="18"/><rect x="238" y="138" width="7" height="18"/></g>' +
      '<path d="M318 134q20 2 22 22h-22z" fill="#1d2a33"/><rect x="330" y="168" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="50" cy="187" r="6"/><circle cx="74" cy="187" r="6"/><circle cx="270" cy="187" r="6"/><circle cx="294" cy="187" r="6"/></g></g>';
    let rain = "";
    for (let i = 0; i < 22; i++) rain += '<path class="aihRain" style="animation-delay:-' + (i % 7) / 7 + 's" d="M' + (i * 19 + 5) + ' ' + (10 + (i * 37) % 80) + 'l-3 10" stroke="#cfe0ee" stroke-width="1.2" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#aihS1)"/>' + clouds + rain +
      '<g fill="#7a5a48"><rect x="0" y="80" width="90" height="50"/><rect x="300" y="70" width="100" height="60"/><path d="M0 80l45 -20l45 20z"/><path d="M300 70l50 -22l50 22z"/></g>' +
      '<g fill="#e9d9a0" opacity=".7"><rect x="14" y="94" width="12" height="10"/><rect x="60" y="94" width="12" height="10"/><rect x="320" y="86" width="12" height="10"/><rect x="368" y="86" width="12" height="10"/></g>' +
      train +
      '<rect x="0" y="194" width="400" height="66" fill="#8d877c"/><rect x="0" y="194" width="400" height="6" fill="#f2d33a"/>' +
      '<g fill="#2f3338"><rect x="40" y="200" width="4" height="40"/><rect x="356" y="200" width="4" height="40"/></g>' +
      '<g transform="translate(110 70)"><rect width="180" height="40" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="70" y="27" ' + F + ' font-size="17" fill="#fff" text-anchor="middle">Moston</text>' +
      '<rect x="128" y="9" width="44" height="22" rx="11" fill="' + NT + '" stroke="#6a5acd" stroke-width="1.5"/><text x="150" y="25" ' + F + ' font-size="12" fill="#fff" text-anchor="middle">NT</text></g>' +
      '<g transform="translate(130 228)"><rect width="140" height="20" rx="3" fill="#fff" stroke="#111"/><text x="70" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">HOLLINWOOD AVENUE</text></g>',
      sky('aihS1', '#5d6f86', '#b9c4cf'));
  }

  /* 2. Broadway Baths, New Moston */
  function aihbaths() {
    let bricks = "";
    for (let y = 90; y < 210; y += 8) for (let x = (y / 8) % 2 ? 60 : 50; x < 340; x += 20) bricks += '<rect x="' + x + '" y="' + y + '" width="18" height="6" fill="#8a3e2a" opacity=".55"/>';
    let mull = "";
    for (let x = 120; x <= 280; x += 20) mull += '<rect x="' + x + '" y="108" width="3" height="60" fill="#e8e2d2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#aihS2)"/>' + clouds +
      '<rect x="60" y="86" width="280" height="124" fill="' + BRICK + '"/>' + bricks +
      '<rect x="160" y="54" width="80" height="40" fill="' + BRICK + '"/><rect x="156" y="50" width="88" height="6" fill="#e8e2d2"/>' +
      '<rect x="60" y="82" width="280" height="8" fill="#e8e2d2"/>' +
      '<rect x="116" y="106" width="168" height="64" rx="4" fill="#5fa8d0" stroke="#e8e2d2" stroke-width="4"/>' + mull +
      '<g fill="#fff"><circle class="aihSplash" cx="200" cy="160" r="3"/><circle class="aihSplash aihS2" cx="208" cy="158" r="2"/><circle class="aihSplash" cx="192" cy="162" r="2"/></g>' +
      '<path d="M120 164q20 -6 40 0t40 0t40 0t40 0" stroke="#e9f4fb" stroke-width="2" fill="none"/>' +
      '<rect x="176" y="176" width="48" height="34" fill="#3a2a20"/><path d="M176 176q24 -20 48 0z" fill="#e8e2d2"/>' +
      '<text x="200" y="76" ' + F + ' font-size="10" fill="#e8e2d2" text-anchor="middle" letter-spacing="2">BATHS</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4a4c"/><path d="M0 230h400" stroke="#e9e9e9" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g fill="#2f6b3a"><circle cx="30" cy="190" r="22"/><circle cx="372" cy="186" r="24"/></g><g fill="#5a3a22"><rect x="27" y="200" width="6" height="12"/><rect x="369" y="198" width="6" height="14"/></g>' +
      '<g transform="translate(120 236)"><rect width="160" height="20" rx="3" fill="#fff" stroke="#111"/><text x="80" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">BROADWAY, NEW MOSTON</text></g>',
      sky('aihS2', '#8fb4d8', '#e3eef6'));
  }

  /* 3. Northern Quarter: mill bricks and the worker bee */
  function aihnq() {
    let wins = "";
    for (let y = 40; y < 180; y += 26) for (let x = 14; x < 120; x += 26) wins += '<rect x="' + x + '" y="' + y + '" width="14" height="16" fill="#2a3440"/>';
    for (let y = 40; y < 180; y += 26) for (let x = 300; x < 390; x += 26) wins += '<rect x="' + x + '" y="' + y + '" width="14" height="16" fill="#2a3440"/>';
    let hex = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
      const x = 150 + c * 18 + (r % 2) * 9, y = 52 + r * 16;
      hex += '<path d="M' + x + ' ' + y + 'l8 -5l8 5v9l-8 5l-8 -5z" fill="none" stroke="' + BEE + '" stroke-width="1.5" opacity=".6"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#aihS3)"/>' +
      '<rect x="0" y="24" width="134" height="190" fill="' + BRICK + '"/><rect x="290" y="24" width="110" height="190" fill="#8a4430"/>' + wins +
      '<rect x="134" y="40" width="156" height="174" fill="#2b2b30"/>' + hex +
      '<g transform="translate(212 140) scale(2.6)"><ellipse cx="0" cy="0" rx="12" ry="8" fill="' + BEE + '" stroke="#111" stroke-width="1.5"/>' +
      '<path d="M-4 -8v16M4 -8v16" stroke="#111" stroke-width="3"/><ellipse cx="-3" cy="-12" rx="7" ry="5" fill="#e9f4fb" opacity=".9"/><ellipse cx="6" cy="-12" rx="7" ry="5" fill="#e9f4fb" opacity=".9"/><circle cx="12" cy="-1" r="4" fill="#111"/></g>' +
      '<g class="aihBee">' + bee(150, 70, .8) + '</g><g class="aihBee aihB2">' + bee(250, 60, .7) + '</g><g class="aihBee">' + bee(180, 186, .6) + '</g>' +
      '<rect x="0" y="214" width="400" height="46" fill="#5d5750"/>' +
      '<g fill="#6f6860">' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 52) + '" y="' + (220 + (i % 2) * 14) + '" width="40" height="6" rx="2"/>').join("") + '</g>' +
      '<g transform="translate(130 236)"><rect width="140" height="20" rx="3" fill="#fff" stroke="#111"/><text x="70" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">NORTHERN QUARTER</text></g>',
      sky('aihS3', '#5a7da8', '#c9d8e8'));
  }

  /* 4. Old Trafford */
  function aihstadium() {
    let truss = "";
    for (let x = 26; x < 352; x += 24) truss += '<path d="M' + x + ' 64l12 -24l12 24" stroke="#f4f4f4" stroke-width="2" fill="none"/>';
    let flags = "";
    for (const x of [70, 150, 250, 330]) flags += '<rect x="' + x + '" y="186" width="2" height="30" fill="#ddd"/><path class="aihWave" d="M' + (x + 2) + ' 186h22v14h-22z" fill="' + (x % 3 ? RED : "#fff") + '"/>';
    let bands = "";
    for (let x = 30; x < 380; x += 40) bands += '<rect x="' + x + '" y="90" width="22" height="70" fill="#b51c22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#aihS4)"/>' + clouds +
      '<g><rect x="16" y="20" width="4" height="60" fill="#888"/><rect x="6" y="12" width="24" height="12" fill="#f4f4f4" class="aihBlink"/>' +
      '<rect x="380" y="20" width="4" height="60" fill="#888"/><rect x="370" y="12" width="24" height="12" fill="#f4f4f4" class="aihBlink"/></g>' +
      '<rect x="20" y="64" width="360" height="12" fill="#e8e8e8"/>' + truss +
      '<rect x="20" y="76" width="360" height="104" fill="' + RED + '"/>' + bands +
      '<rect x="20" y="164" width="360" height="16" fill="#8a1a1e"/>' +
      '<g fill="#1d2a33"><rect x="60" y="120" width="40" height="30"/><rect x="180" y="120" width="40" height="30"/><rect x="300" y="120" width="40" height="30"/></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#6d6a66"/>' + flags +
      '<g transform="translate(140 232)"><rect width="120" height="20" rx="3" fill="#fff" stroke="#111"/><text x="60" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">OLD TRAFFORD</text></g>',
      sky('aihS4', '#4f78a8', '#e6c7a0'));
  }

  /* 5. Broadway and Moston Lane East, M40 - the corner */
  function aihcorner() {
    const sign = (x, y, a, b) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="140" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="70" y="16" ' + F + ' font-size="12" fill="#111" text-anchor="middle">' + a + '</text><text x="70" y="28" ' + F + ' font-size="8" fill="#111" text-anchor="middle">' + b + '</text></g>';
    let bricks = "";
    for (let y = 148; y < 226; y += 10) for (let x = (y / 10) % 2 ? 0 : -14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a4a34"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#aihS5)"/>' + clouds +
      '<path d="M0 120q80 -40 160 -14q90 -36 170 -6q40 -10 70 4v42H0z" fill="#6f7f6a" opacity=".8"/>' +
      '<rect x="0" y="146" width="400" height="80" fill="#6b3726"/>' + bricks +
      tag("AITCH", 34, 210, 54, BEE, -5) + tag("0161", 236, 190, 30, RED, 4) +
      '<g class="aihSp"><circle cx="208" cy="166" r="3" fill="' + BEE + '" opacity=".7"/></g><g class="aihSp aihSp2"><circle cx="216" cy="172" r="2" fill="' + BEE + '" opacity=".7"/></g>' +
      '<g class="aihBee">' + bee(250, 120, .7) + '</g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a3c"/><rect x="0" y="226" width="400" height="4" fill="#9a958b"/>' +
      '<rect x="150" y="44" width="4" height="102" fill="#333"/>' +
      sign(12, 50, "BROADWAY", "NEW MOSTON M40") + sign(156, 92, "MOSTON LANE EAST", "NEW MOSTON M40"),
      sky('aihS5', '#f0a35e', '#6b8fc4'));
  }

  window.SCENES = { aihstation, aihbaths, aihnq, aihstadium, aihcorner };
})();
