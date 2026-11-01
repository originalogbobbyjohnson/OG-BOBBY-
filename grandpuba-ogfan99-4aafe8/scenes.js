/* New Rochelle opening scenes for the Grand Puba game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.gull{animation:glide 12s linear infinite}.gull2{animation-delay:-5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(3px) rotate(1.5deg)}}' +
    '.bob{transform-box:fill-box;transform-origin:50% 100%;animation:bob 3.2s ease-in-out infinite}.bob2{animation-delay:1.1s}.bob3{animation-delay:2.2s}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,150px) rotate(240deg);opacity:0}}' +
    '.leaf{transform-box:fill-box;transform-origin:50% 50%;animation:fall 5s linear infinite}.lf2{animation-delay:1.6s}.lf3{animation-delay:3.1s}.lf4{animation-delay:4.2s}' +
    '@keyframes puff{0%{transform:translateY(0);opacity:0}30%{opacity:.6}100%{transform:translate(10px,-30px);opacity:0}}' +
    '.smk{animation:puff 3s ease-out infinite}.smk2{animation-delay:1.5s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const gull = (x, y, cls) => '<path class="gull ' + (cls || "") + '" d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" stroke="#f4f4f4" stroke-width="2" fill="none"/>';
  const boat = (x, y, s, sail, cls) => '<g class="bob ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'h' + (40 * s) + 'l-' + (7 * s) + ' ' + (9 * s) + 'h-' + (26 * s) + 'z" fill="#f4f1ea"/>' +
    '<path d="M' + (x + 20 * s) + ' ' + (y - 2) + 'v-' + (38 * s) + 'l' + (16 * s) + ' ' + (36 * s) + 'z" fill="#ffffff"/><path d="M' + (x + 18 * s) + ' ' + (y - 2) + 'v-' + (30 * s) + 'l-' + (13 * s) + ' ' + (28 * s) + 'z" fill="' + sail + '"/></g>';
  const GOLD = "#f2c14e", RED = "#d7263d", GREEN = "#2e9e5b", MNBLUE = "#0b3d78";
  /* crenellated stone tower helper */
  const tower = (x, y, w, h, fill) => {
    let c = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"/>';
    for (let i = 0; i < w; i += 8) c += '<rect x="' + (x + i) + '" y="' + (y - 6) + '" width="5" height="6" fill="' + fill + '"/>';
    return c;
  };

  /* 1. Metro-North New Haven Line pulling into New Rochelle, downtown towers behind */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let city = "";
    [[10, 40, 30], [46, 22, 26], [78, 50, 34], [250, 30, 28], [284, 14, 30], [320, 44, 36], [362, 26, 30]].forEach(([x, y, w]) => {
      city += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (130 - y) + '" fill="#232842"/>';
      for (let yy = y + 6; yy < 120; yy += 10) for (let xx = x + 4; xx < x + w - 4; xx += 8) if ((xx + yy) % 3) city += '<rect class="' + ((xx + yy) % 5 ? "" : "flk") + '" x="' + xx + '" y="' + yy + '" width="3" height="4" fill="#ffd98a" opacity=".7"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) +
      '<circle cx="180" cy="30" r="13" fill="#fff1d6" opacity=".9"/>' + city +
      /* platform canopy */
      '<rect x="0" y="56" width="400" height="6" fill="#2b3440"/>' +
      '<rect x="40" y="60" width="5" height="70" fill="#2b3440"/><rect x="200" y="60" width="5" height="70" fill="#2b3440"/><rect x="360" y="60" width="5" height="70" fill="#2b3440"/>' +
      /* Metro-North station sign: navy with white lettering, New Haven Line red */
      '<rect x="92" y="68" width="216" height="40" rx="3" fill="' + MNBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="93" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="19" fill="#fff">New Rochelle</text>' +
      '<rect x="252" y="100" width="50" height="5" fill="#ee0034"/><text x="100" y="104" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#dbe6f3">NEW HAVEN LINE</text>' +
      /* train slides in and stops: stainless car with a red band */
      '<g class="anim-train">' +
        '<rect x="8" y="126" width="304" height="56" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="304" height="5" fill="#ee0034"/><rect x="8" y="164" width="304" height="2" fill="#4a4f56"/>' + windows +
        '<path d="M300 130h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="174" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="178" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#334">METRO-NORTH</text>' +
      '</g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1a1d22"/>' +
      tag("NEW RO", 26, 238, 32, GOLD, -4) + tag("GRAND P", 268, 242, 30, RED, -7),
      sky("g1", "#120d22", "#5a3a4a"));
  }

  /* 2. Glen Island Park: the gray stone castle ruins on the Sound, ivy on the walls, the little bridge over */
  function glen() {
    const STONE = "#8d8a84", DARK = "#6e6b66";
    let ivy = "";
    for (let i = 0; i < 14; i++) ivy += '<circle cx="' + (128 + (i * 37) % 150) + '" cy="' + (150 + (i * 23) % 40) + '" r="' + (4 + i % 3) + '" fill="#3f6b34" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="330" cy="50" r="18" fill="#fff4c8"/>' + gull(40, 50) + gull(90, 70, "gull2") +
      /* trees behind */
      '<path d="M0 150q30-30 60-10q30-30 70 0q40-30 80 0q40-26 90 0q40-28 100 0v30H0z" fill="#3d6b34"/>' +
      '<rect x="0" y="168" width="400" height="34" fill="#4f7a3e"/><path d="M100 202q10-14 30-10l150-2q20-4 30 12z" fill="#7a746a"/>' +
      /* castle: keep, walls, towers */
      tower(120, 120, 160, 80, STONE) +
      tower(140, 70, 36, 130, DARK) + tower(220, 84, 42, 116, DARK) + tower(186, 100, 26, 100, STONE) +
      '<path d="M140 70l18-18 18 18z" fill="#5b5853"/>' +
      '<path d="M152 96v-10q6-8 12 0v10zM232 110v-12q6-8 12 0v12zM193 124v-10q6-6 12 0v10z" fill="#2a2724"/>' +
      '<path d="M134 200v-26q16-20 32 0v26zM250 200v-22q12-14 24 0v22z" fill="#2a2724"/>' +
      '<path d="M120 140h160M120 170h160" stroke="#77736d" stroke-width="1.5"/>' + ivy +
      /* the water and the bridge */
      '<rect x="0" y="200" width="400" height="60" fill="#2f5f86"/>' +
      '<path class="shim" d="M20 214h50M150 226h70M290 216h60M60 244h90" stroke="#bfe4f7" stroke-width="2" opacity=".6"/>' +
      '<path d="M290 196h110v6H290z" fill="#3b3f46"/>' + (function () { let t = ""; for (let x = 294; x < 400; x += 14) t += '<path d="M' + x + ' 196l7-12l7 12" stroke="#3b3f46" stroke-width="2" fill="none"/>'; return t; })() +
      '<rect x="296" y="202" width="5" height="20" fill="#3b3f46"/><rect x="388" y="202" width="5" height="20" fill="#3b3f46"/>' +
      boat(30, 232, 0.8, RED),
      sky("g2", "#7cb8e0", "#e6f1f6"));
  }

  /* 3. Hudson Park: the harbor and the little beach, sailboats on moorings, the pavilion on the point */
  function hudson() {
    let posts = "";
    for (let x = 230; x < 400; x += 18) posts += '<rect x="' + x + '" y="196" width="4" height="22" fill="#5a3a1a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="90" cy="60" r="22" fill="#ffcf6b"/><circle cx="90" cy="60" r="36" fill="#ffcf6b" opacity=".18"/>' +
      gull(160, 40) + gull(220, 60, "gull2") +
      /* far shore + trees */
      '<path d="M0 120q60-14 130-6t140-4t130 6v14H0z" fill="#3a5a3a"/>' +
      '<rect x="0" y="128" width="400" height="132" fill="#2a5f86"/>' +
      '<path class="shim" d="M60 140h60M50 154h80M70 168h44" stroke="#ffcf6b" stroke-width="3" opacity=".6"/>' +
      '<path class="shim shim2" d="M200 150h50M300 170h60" stroke="#bfe4f7" stroke-width="2" opacity=".5"/>' +
      boat(150, 170, 0.9, GOLD) + boat(250, 160, 0.7, RED, "bob2") + boat(320, 176, 0.8, GREEN, "bob3") +
      /* the point with the pavilion */
      '<path d="M0 200q60-14 120-6l0 66H0z" fill="#e9d3a6"/>' +
      '<rect x="22" y="160" width="4" height="36" fill="#f4f1ea"/><rect x="74" y="160" width="4" height="36" fill="#f4f1ea"/><rect x="48" y="160" width="4" height="36" fill="#f4f1ea"/>' +
      '<path d="M14 162l36-22 36 22z" fill="#2e6b4a"/><rect x="14" y="160" width="72" height="4" fill="#f4f1ea"/>' +
      /* dock */
      '<rect x="220" y="192" width="180" height="6" fill="#8a6a44"/>' + posts +
      '<rect x="120" y="230" width="280" height="30" fill="#2a5f86"/>',
      sky("g3", "#5fa8d8", "#f6d9a8"));
  }

  /* 4. The Thomas Paine Cottage on Sicard Av: a two-story saltbox, white clapboard, shingle roof, fall leaves */
  function paine() {
    let clap = "";
    for (let y = 150; y < 210; y += 6) clap += '<path d="M120 ' + y + 'h170" stroke="#d6d1c6" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* fall trees */
      '<rect x="40" y="110" width="8" height="100" fill="#4a3220"/><circle cx="44" cy="96" r="38" fill="#c8562a"/><circle cx="20" cy="112" r="22" fill="#e08a2e"/><circle cx="70" cy="110" r="24" fill="#d9a43a"/>' +
      '<rect x="350" y="120" width="8" height="90" fill="#4a3220"/><circle cx="354" cy="104" r="34" fill="#d9a43a"/><circle cx="378" cy="120" r="20" fill="#c8562a"/>' +
      /* the cottage: saltbox, short slope in front, long slope running down the back */
      '<path d="M120 126L160 70L290 150V210H120z" fill="#efebe2"/>' + clap +
      '<path d="M112 128L160 56L300 152L290 154L160 70L122 128z" fill="#6b5a4a" stroke="#4a3d32" stroke-width="2" stroke-linejoin="round"/>' +
      /* center chimney */
      '<rect x="182" y="52" width="18" height="30" fill="#8b4a3a"/><rect x="180" y="50" width="22" height="5" fill="#6b3a2c"/>' +
      '<circle class="smk" cx="192" cy="44" r="6" fill="#d6d1c6"/><circle class="smk smk2" cx="190" cy="44" r="5" fill="#d6d1c6"/>' +
      /* windows + door, dark green shutters */
      (function () { let w = ""; [[136, 132], [212, 120], [136, 170], [248, 170]].forEach(([x, y]) => { w += '<rect x="' + x + '" y="' + y + '" width="22" height="24" fill="#2b3a4a" stroke="#fff" stroke-width="2"/><path d="M' + (x + 11) + ' ' + y + 'v24M' + x + ' ' + (y + 12) + 'h22" stroke="#fff" stroke-width="1.5"/><rect x="' + (x - 7) + '" y="' + y + '" width="6" height="24" fill="#2f4a36"/><rect x="' + (x + 23) + '" y="' + y + '" width="6" height="24" fill="#2f4a36"/>'; }); return w; })() +
      '<rect x="192" y="166" width="26" height="44" fill="#6b3a2c"/><circle cx="212" cy="190" r="2" fill="#e8b84a"/><rect x="186" y="160" width="38" height="6" fill="#efebe2" stroke="#d6d1c6"/>' +
      '<rect x="98" y="210" width="214" height="6" fill="#a89e8c"/>' +
      /* lawn + path */
      '<rect x="0" y="210" width="400" height="50" fill="#5a7a3a"/><path d="M196 216l-30 44h76l-26-44z" fill="#c9b48a"/>' +
      /* falling leaves */
      '<path class="leaf" d="M30 90q6-6 10 0q-4 6-10 0z" fill="#e08a2e"/><path class="leaf lf2" d="M64 100q6-6 10 0q-4 6-10 0z" fill="#c8562a"/>' +
      '<path class="leaf lf3" d="M340 96q6-6 10 0q-4 6-10 0z" fill="#d9a43a"/><path class="leaf lf4" d="M370 110q6-6 10 0q-4 6-10 0z" fill="#c8562a"/>',
      sky("g4", "#86b6d8", "#f2e2c4"));
  }

  /* 5. The corner: Main St and North Av downtown, a wall with the name on it */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="360" cy="34" r="14" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2420"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4e2e26"/>'; return b; })() +
      tag("GRAND PUBA", 24, 130, 36, GOLD, -7) + tag("BRAND NUBIAN", 34, 176, 26, RED, -3) + tag("BIG UP", 70, 210, 22, GREEN, -2) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="264" y="88" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="264" y="110" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">North Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#3a2a2a"));
  }

  window.SCENES = { train, glen, hudson, paine, corner };
})();
