/* Highbridge opening scenes for the A Boogie wit da Hoodie game: Artist, Highbridge the Label, Hoodie SZN.
   The 4 pulling into 167 St up on the el over River Ave, the High Bridge over the Harlem River, Noonan Plaza on Nelson Ave,
   Mullaly Park under the 4, and the corner of Nelson Ave and W 166 St (Artist "A Boogie" Dubose Drive). 400 x 260 each. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes boat{from{transform:translateX(-90px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(5deg) scaleX(.94)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.fan{animation:bob .9s ease-in-out infinite}.fan2{animation-delay:-.3s}.fan3{animation-delay:-.6s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes rain{from{transform:translateY(-40px)}to{transform:translateY(40px)}}' +
    '.rain{animation:rain .7s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}' +
    '.mtr{transform-box:fill-box;transform-origin:50% 100%;animation:meter .6s ease-in-out infinite}.m2{animation-delay:-.2s}.m3{animation-delay:-.4s}' +
    '@keyframes glow{0%,100%{opacity:.25}50%{opacity:.6}}' +
    '.glow{animation:glow 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (fs || 11) + '" fill="#fff">' + txt + '</text>';
  const ROSE = "#ff4d6d", GOLD = "#ffd23f", SKY = "#5ec8ff", GREEN = "#00933c";

  /* 1. The 4 pulling into 167 St, up on the el over River Ave */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="196" width="6" height="64" fill="#2d4a3a"/><path d="M' + (x + 3) + ' 200 L' + (x + 47) + ' 216 M' + (x + 47) + ' 200 L' + (x + 3) + ' 216" stroke="#2d4a3a" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 260; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".9"/>';
    let bldg = "";
    [[0, 70, 60], [64, 90, 50], [118, 62, 70], [196, 84, 56], [256, 70, 66], [326, 92, 74]].forEach(([x, y, w], i) => {
      bldg += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (130 - y) + '" fill="' + (i % 2 ? "#6b3a2a" : "#7a4632") + '"/>';
      for (let wy = y + 8; wy < 120; wy += 14) for (let wx = x + 6; wx < x + w - 8; wx += 14) bldg += '<rect x="' + wx + '" y="' + wy + '" width="7" height="8" fill="' + ((wx + wy) % 3 ? "#2a1c18" : "#ffcf7a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(18) + bldg +
      /* black station sign hanging from the canopy */
      '<rect x="0" y="16" width="400" height="8" fill="#2d4a3a"/>' +
      '<rect x="54" y="24" width="292" height="50" rx="4" fill="#111"/><rect x="54" y="24" width="292" height="4" fill="#fff"/>' +
      '<text x="68" y="50" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="18" fill="#fff">167 St</text>' +
      bullet(80, 63, "4", GREEN) +
      '<text x="332" y="66" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#bbb">River Av · Woodlawn bound</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="124" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="5" fill="' + GREEN + '"/>' + windows +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(294, 145, "4", GREEN) +
      '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/><rect x="0" y="190" width="400" height="10" fill="#3a3d41"/>' + girders +
      tag("HBTL", 30, 248, 26, ROSE, -5) + tag("HOODIE SZN", 220, 250, 22, GOLD, -4),
      sky("g1", "#1a1033", "#ff8a5c"));
  }

  /* 2. The High Bridge over the Harlem River: pale granite arches, the steel arch in the middle, the Water Tower on the far bank */
  function bridge() {
    let arches = "";
    const stone = "#d9d0bd", stoneDk = "#b8ad96";
    [[0, 54], [54, 54], [292, 54], [346, 54]].forEach(([x, w]) => {
      arches += '<path d="M' + x + ' 110h' + w + 'v130h-8v-60a19 19 0 0 0-38 0v60h-8z" fill="' + stone + '" stroke="' + stoneDk + '" stroke-width="1.5"/>';
    });
    let ribs = "";
    for (let i = 0; i <= 10; i++) { const x = 108 + i * 18.4; const y = 110 + Math.round(Math.pow((x - 200) / 92, 2) * 46); ribs += '<path d="M' + x + ' 110V' + y + '" stroke="#5b6670" stroke-width="2"/>'; }
    let ripple = "";
    for (let i = 0; i < 10; i++) ripple += '<path d="M' + (i * 44) + ' ' + (222 + (i % 3) * 9) + 'h22" stroke="#9cc6e0" stroke-width="1.5" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle class="glow" cx="320" cy="70" r="40" fill="#ffd38a"/><circle cx="320" cy="70" r="20" fill="#ffe0a0"/>' +
      /* far bank: Highbridge Park cliffs and the Water Tower */
      '<path d="M250 150q40-30 150-28v60H250z" fill="#3f5a3a"/>' +
      '<rect x="342" y="44" width="22" height="92" fill="#cfc4ad" stroke="#9e927a" stroke-width="1.5"/>' +
      '<path d="M338 46h30l-15-26z" fill="#6f8f86"/><rect x="351" y="12" width="4" height="10" fill="#6f8f86"/>' +
      '<path d="M348 60h10M348 78h10M348 96h10" stroke="#7a6f5c" stroke-width="2"/><rect x="340" y="132" width="26" height="6" fill="#b8ad96"/>' +
      /* the river */
      '<rect x="0" y="200" width="400" height="60" fill="#2f6f95"/>' + ripple +
      /* deck + rail */
      '<rect x="0" y="100" width="400" height="10" fill="' + stone + '" stroke="' + stoneDk + '" stroke-width="1"/>' +
      '<path d="M0 98h400" stroke="#2b2f33" stroke-width="2"/><path d="M0 92h400" stroke="#2b2f33" stroke-width="1.5"/>' +
      (function () { let p = ""; for (let x = 4; x < 400; x += 10) p += '<path d="M' + x + ' 92v6" stroke="#2b2f33" stroke-width="1"/>'; return p; })() +
      arches +
      /* the steel arch span over the water */
      '<path d="M108 156Q200 72 292 156" fill="none" stroke="#5b6670" stroke-width="7"/><path d="M108 110h184" stroke="#5b6670" stroke-width="4"/>' + ribs +
      '<rect x="100" y="150" width="16" height="90" fill="' + stone + '" stroke="' + stoneDk + '"/><rect x="284" y="150" width="16" height="90" fill="' + stone + '" stroke="' + stoneDk + '"/>' +
      /* a boat sliding under */
      '<g class="boat"><path d="M0 212h56l-8 10H8z" fill="#f2f2f2"/><rect x="16" y="202" width="22" height="10" fill="' + ROSE + '"/><rect x="20" y="205" width="6" height="4" fill="#cfe6ff"/></g>' +
      /* walkers on the bridge */
      '<g fill="#1d2329"><circle class="fan" cx="150" cy="83" r="3"/><rect class="fan" x="148" y="86" width="4" height="7"/><circle class="fan fan2" cx="240" cy="83" r="3"/><rect class="fan fan2" x="238" y="86" width="4" height="7"/></g>',
      sky("g2", "#3b2f6b", "#ff9a6a"));
  }

  /* 3. Noonan Plaza, Nelson Ave at W 168 St (1931): the Art Deco courtyard apartment house, buff brick, the Mayan-style stepped entry with turquoise and gold trim, the fountain in the garden court */
  function stadium() {
    let wins = "";
    [[20, 120], [280, 120]].forEach(([x0, w]) => { for (let y = 60; y < 176; y += 22) for (let x = x0 + 10; x < x0 + w - 12; x += 22) wins += '<rect x="' + x + '" y="' + y + '" width="12" height="14" fill="' + ((x + y) % 3 ? "#2a3550" : "#ffe6a8") + '"/>'; });
    let jets = "";
    jets = '<path class="glow" d="M200 210q-14 -26 -24 -2M200 210q0 -30 0 -30M200 210q14 -26 24 -2" stroke="#bfe8ff" stroke-width="3" fill="none" stroke-linecap="round" style="animation-duration:1.2s"/><circle class="glow" cx="200" cy="180" r="3" fill="#e6f7ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="340" cy="34" r="16" fill="#fff2c0"/>' +
      /* side wings */
      '<rect x="20" y="44" width="120" height="146" fill="#e2c98e"/><rect x="280" y="44" width="120" height="146" fill="#e2c98e"/>' +
      '<rect x="20" y="44" width="120" height="8" fill="#2fb3a8"/><rect x="280" y="44" width="120" height="8" fill="#2fb3a8"/>' +
      '<path d="M20 52h120M280 52h120" stroke="' + GOLD + '" stroke-width="2"/>' + wins +
      /* the stepped Mayan-style entrance pavilion */
      '<path d="M140 190V80h12V68h12V56h72v12h12v12h12v110z" fill="#d8bd80"/>' +
      '<path d="M140 80h120M152 68h96M164 56h72" stroke="#2fb3a8" stroke-width="4"/>' +
      '<path d="M140 84h120M152 72h96" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* zigzag deco frieze */
      '<path d="M164 100l8 -8 8 8 8 -8 8 8 8 -8 8 8 8 -8 8 8 8 -8 8 8" stroke="#2fb3a8" stroke-width="3" fill="none"/>' +
      '<rect x="176" y="112" width="48" height="78" fill="#1d2a36"/><path d="M176 112l24 -14 24 14z" fill="' + GOLD + '"/>' +
      '<path d="M182 120h36v70h-36z" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="146" y="120" width="10" height="70" fill="#2fb3a8"/><rect x="244" y="120" width="10" height="70" fill="#2fb3a8"/>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#1d2a36" letter-spacing="1">NOONAN PLAZA</text>' +
      /* garden court + fountain */
      '<rect x="0" y="190" width="400" height="70" fill="#4f8a3e"/><path d="M170 260l14 -50h32l14 50z" fill="#c9b98a"/>' +
      '<ellipse cx="200" cy="214" rx="40" ry="10" fill="#e8dcc0"/><ellipse cx="200" cy="212" rx="32" ry="7" fill="#5ec8ff"/>' + jets +
      '<g class="fan"><circle cx="80" cy="214" r="7" fill="#3a2a22"/><rect x="72" y="221" width="16" height="26" rx="5" fill="' + ROSE + '"/></g>' +
      sign(8, 8, 90, "Nelson Av") + sign(300, 8, 92, "W 168 St") + tag("HBTL", 300, 248, 28, ROSE, -5) + tag("HOODIE SZN", 20, 250, 20, GOLD, -3),
      sky("g3", "#4a86c8", "#f6e6c0"));
  }

  /* 4. Mullaly Park, Jerome Ave and River Ave at E 164 St: the gray skate park bowls and the courts behind the green fence, the 4 rumbling by on the el */
  function booth() {
    let fence = "";
    for (let x = 0; x <= 400; x += 8) fence += '<path d="M' + x + ' 150l8 8M' + (x + 8) + ' 150l-8 8" stroke="#2f7a4a" stroke-width="1" opacity=".7"/>';
    let windows = "";
    for (let x = 14; x < 220; x += 38) windows += '<rect x="' + x + '" y="44" width="24" height="16" rx="2" fill="#ffe9b0" opacity=".9"/>';
    let girders = "";
    for (let x = 20; x < 400; x += 70) girders += '<rect x="' + (x - 3) + '" y="80" width="6" height="70" fill="#2d4a3a"/>';
    return svg(
      '<style>@keyframes skate{0%{transform:translate(0,0) rotate(0)}25%{transform:translate(60px,22px) rotate(10deg)}50%{transform:translate(120px,0) rotate(0)}75%{transform:translate(60px,22px) rotate(-10deg)}100%{transform:translate(0,0)}}.skt{animation:skate 4s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* the 4 on the el across the back */
      '<rect x="0" y="72" width="400" height="8" fill="#2d4a3a"/>' + girders +
      '<g class="anim-train"><rect x="0" y="34" width="250" height="38" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="0" y="62" width="250" height="4" fill="' + GREEN + '"/>' + windows + bullet(232, 52, "4", GREEN) + '</g>' +
      /* courts behind the fence */
      '<rect x="0" y="118" width="400" height="40" fill="#3a6a8a"/><path d="M60 118v40M200 118v40M340 118v40" stroke="#fff" stroke-width="1.5" opacity=".7"/>' +
      fence + '<rect x="0" y="116" width="400" height="3" fill="#2f7a4a"/><rect x="0" y="156" width="400" height="3" fill="#2f7a4a"/>' +
      /* the skate bowl */
      '<rect x="0" y="158" width="400" height="102" fill="#9a9a96"/>' +
      '<path d="M60 186q0 50 60 50h160q60 0 60 -50" fill="#7e7e7a" stroke="#c9c9c4" stroke-width="3"/>' +
      '<path d="M120 236h160" stroke="#6a6a66" stroke-width="2"/>' +
      '<g class="skt"><g transform="translate(110 186)"><rect x="-12" y="18" width="24" height="4" rx="2" fill="#2a2a2a"/><circle cx="-8" cy="24" r="2" fill="' + GOLD + '"/><circle cx="8" cy="24" r="2" fill="' + GOLD + '"/>' +
      '<rect x="-5" y="-4" width="10" height="20" rx="3" fill="' + ROSE + '"/><circle cx="0" cy="-9" r="5" fill="#3a2a22"/></g></g>' +
      '<rect x="138" y="244" width="124" height="14" rx="2" fill="#1d2329"/><text x="200" y="254.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">MULLALY PARK</text>' +
      sign(8, 8, 84, "Jerome Av") + sign(300, 8, 92, "E 164 St") + tag("ARTIST", 290, 214, 26, SKY, -6) + tag("HBTL", 14, 220, 24, ROSE, -5),
      sky("g4", "#7fb3e0", "#f6d9a6"));
  }

  /* 5. Nelson Ave and W 166 St, co-named Artist "A Boogie" Dubose Drive: walk-ups, the tag wall */
  function corner() {
    let brick = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 4 : 20; x < 250; x += 32) brick += '<rect x="' + x + '" y="' + y + '" width="30" height="10" fill="#6b3b2a"/>';
    let esc = "";
    for (let y = 40; y < 200; y += 40) esc += '<rect x="290" y="' + y + '" width="100" height="4" fill="#1d1d1d"/><path d="M296 ' + (y + 4) + 'l20 36" stroke="#1d1d1d" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<rect x="270" y="20" width="130" height="200" fill="#7a4632"/>' +
      '<rect x="300" y="50" width="18" height="24" fill="#ffcf7a" class="flk"/><rect x="352" y="90" width="18" height="24" fill="#2a1c18"/><rect x="300" y="130" width="18" height="24" fill="#2a1c18"/><rect x="352" y="170" width="18" height="24" fill="#ffcf7a" class="flk flk2"/>' + esc +
      '<rect x="4" y="60" width="250" height="160" fill="#55301f"/>' + brick +
      tag("A BOOGIE", 18, 130, 36, ROSE, -7) + tag("HBTL", 40, 182, 30, GOLD, -4) + tag("ARTIST", 150, 200, 24, SKY, -6) +
      /* sign post with the co-name sign */
      '<rect x="252" y="60" width="5" height="160" fill="#1d2329"/>' +
      sign(208, 66, 92, "Nelson Av") + sign(200, 88, 108, "W 166 St") +
      '<rect x="176" y="110" width="156" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="254" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#fff">Artist "A Boogie" Dubose Dr</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0b1020", "#2e2550"));
  }

  window.SCENES = { train, bridge, stadium, booth, corner };
})();
