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

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: looking straight down from the Highbridge bluff into the lit bowl at night, field glowing green, scoreboard flickering */
(function () {
  /* Y: little kit for drawing the stadium into the corner's sky. Every piece is plain SVG in the 400 x 260 frame. */
  const Y = (function () {
    const css = '<style>' +
      '@keyframes ysP{0%,100%{opacity:1}50%{opacity:.5}}.ysP{animation:ysP 1.8s ease-in-out infinite}' +
      '@keyframes ysF{0%{transform:scale(.1);opacity:0}12%{opacity:1}100%{transform:scale(1);opacity:0}}.ysF{transform-box:fill-box;transform-origin:50% 50%;animation:ysF 2.6s ease-out infinite}' +
      '@keyframes ysB{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ysB{transform-box:fill-box;transform-origin:50% 100%;animation:ysB 5s ease-in-out infinite}' +
      '@keyframes ysX{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ysX{animation:ysX 16s linear infinite}' +
      '@keyframes ysW{0%,100%{transform:skewY(0)}50%{transform:skewY(-14deg)}}.ysW{transform-box:fill-box;transform-origin:0 50%;animation:ysW 1.1s ease-in-out infinite}' +
      '@keyframes ysD{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.ysD{animation:ysD 9s ease-in-out infinite}' +
      '@keyframes ysS{from{transform:translateY(0)}to{transform:translateY(60px)}}.ysS{animation:ysS 3s linear infinite}.ysR{animation-duration:.7s}' +
      '@keyframes ysK{0%,100%{opacity:1}50%{opacity:.2}}.ysK{animation:ysK 1s steps(1) infinite}' +
      '</style>';
    const g = (x, y, s, inner) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + inner + '</g>';
    /* the white frieze: top rail, posts, and the arched openings hanging under it */
    const frieze = (x0, x1, y, k, c) => {
      let p = 'M' + x0 + ' ' + y + 'H' + x1;
      for (let x = x0; x < x1 - 0.1; x += k) p += 'M' + x + ' ' + y + 'v6M' + x + ' ' + (y + 4.5) + 'q' + (k / 2) + ' -5 ' + k + ' 0';
      return '<path d="' + p + 'M' + x1 + ' ' + y + 'v6" fill="none" stroke="' + (c || "#f4f1e8") + '" stroke-width="1.4"/>';
    };
    /* light banks on poles, with a soft glow */
    const lights = (xs, y, off) => xs.map((p, i) => { const x = p.length ? p[0] : p, yy = p.length ? p[1] : y;
      return '<g' + (off ? ' class="ysK" style="animation-duration:' + (2 + i * .7) + 's"' : '') + '><ellipse class="ysP" cx="' + x + '" cy="' + (yy - 11) + '" rx="11" ry="6" fill="#fff4c8" opacity=".24"/>' +
      '<path d="M' + x + ' ' + yy + 'v-8" stroke="#3a3f48" stroke-width="1.2"/><rect x="' + (x - 6) + '" y="' + (yy - 13) + '" width="12" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>' +
      '<path d="M' + (x - 2) + ' ' + (yy - 13) + 'v5M' + (x + 2) + ' ' + (yy - 13) + 'v5" stroke="#c9c3a8" stroke-width=".5"/></g>'; }).join("");
    /* the limestone face: tall arches either side of the big gate, a gold band over the gate (no lettering) */
    const face = (w, lit) => {
      const n = Math.max(2, Math.round((w - 36) / 2 / 20)), step = (w / 2 - 22) / n, aw = step * 0.6, gx = w / 2;
      let a = '<rect x="0" y="-58" width="' + w + '" height="58" fill="' + (lit ? "#e9dcb8" : "#d8cfba") + '"/>' +
        '<rect x="-2" y="-62" width="' + (w + 4) + '" height="5" fill="#f1ead8"/><rect x="0" y="-8" width="' + w + '" height="8" fill="#a99f8a"/>';
      for (let i = 0; i < n; i++) [6 + i * step, w - 6 - i * step - aw].forEach(x =>
        a += '<path d="M' + x.toFixed(1) + ' -8V-42a' + (aw / 2).toFixed(1) + ' ' + (aw / 2).toFixed(1) + ' 0 0 1 ' + aw.toFixed(1) + ' 0V-8z" fill="' + (lit ? "#ffcf78" : "#4a4652") + '"' + (lit ? ' opacity=".9"' : '') + '/>');
      a += '<path d="M' + (gx - 15) + ' -8V-38a15 15 0 0 1 30 0V-8z" fill="' + (lit ? "#ffe2a0" : "#3a3640") + '" stroke="#b8ad94" stroke-width="2"/>' +
        '<rect x="' + (gx - 20) + '" y="-56" width="40" height="5" fill="#c9a24a"/>';
      return a;
    };
    /* the upper deck behind the face, with the frieze riding on top and light banks above it */
    const deck = (w, lit, banks) => '<path d="M-4 -60L6 -74H' + (w - 6) + 'L' + (w + 4) + ' -60z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, w - 6, -80, 7) +
      '<path d="M6 -80H' + (w - 6) + '" stroke="#f4f1e8" stroke-width="2"/>' + lights(banks || [w * 0.2, w * 0.5, w * 0.8], -80);
    const halo = (c) => '<radialGradient id="ysH"><stop offset="0" stop-color="' + (c || "#ffe9b0") + '" stop-opacity=".55"/><stop offset="1" stop-color="' + (c || "#ffe9b0") + '" stop-opacity="0"/></radialGradient>';
    return {
      css,
      /* straight-on front: face + deck */
      front: (x, y, s, o) => g(x, y, s, deck(o.w || 200, o.lit, o.banks) + face(o.w || 200, o.lit)),
      /* three-quarter view: front face plus the long side running away to the right */
      corner3q: (x, y, s, o) => {
        const lit = o.lit;
        let side = '<path d="M120 -62L200 -50V-4L120 0z" fill="' + (lit ? "#cbbd99" : "#bdb4a0") + '"/><path d="M120 -62L200 -50" stroke="#f1ead8" stroke-width="4"/>';
        for (let i = 0; i < 5; i++) { const x0 = 128 + i * 15, x1 = x0 + 8, t0 = -55 + (x0 - 120) * 0.15, t1 = -55 + (x1 - 120) * 0.15, b0 = -8 + (x0 - 120) * 0.05;
          side += '<path d="M' + x0 + ' ' + b0 + 'V' + (t0 + 10) + 'Q' + ((x0 + x1) / 2) + ' ' + (t0 + 2) + ' ' + x1 + ' ' + (t1 + 10) + 'V' + (b0 - 0.4) + 'z" fill="' + (lit ? "#ffc865" : "#4a4652") + '"' + (lit ? ' opacity=".85"' : '') + '/>'; }
        const top = '<path d="M-4 -60L6 -74H120L200 -62V-50z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, 118, -80, 7) +
          '<path d="M118 -80L198 -68" stroke="#f4f1e8" stroke-width="2"/><path d="M118 -80L198 -68M126 -79v5M138 -77v5M150 -75v5M162 -74v5M174 -72v5M186 -70v5M198 -68v5" fill="none" stroke="#f4f1e8" stroke-width="1.2"/>' +
          '<path d="M6 -80H118" stroke="#f4f1e8" stroke-width="2"/>' + lights([30, 90, 150, 190], -78);
        return g(x, y, s, top + side + face(120, lit));
      },
      /* far off: a low dark mass, the frieze a thin bright lace on top, the lights glowing */
      far: (x, y, s, o) => { let ar = ""; for (let i = 0; i < 15; i++) ar += '<path d="M' + (16 + i * 11.6) + ' -3V-14a3 3 0 0 1 6 0V-3z" fill="' + (o.win ? "#ffcf78" : "#4a4652") + '"/>';
        return halo(o.hc) + g(x, y, s,
        '<ellipse class="ysP" cx="100" cy="-34" rx="' + (o.halo || 120) + '" ry="' + ((o.halo || 120) / 3) + '" fill="url(#ysH)"/>' +
        '<path d="M2 -18V-22Q100 -44 198 -22V-18z" fill="' + (o.c || "#2c3040") + '"/>' +
        '<path d="M6 -27Q100 -48 194 -27" fill="none" stroke="#f4f1e8" stroke-width="1.6"/><path d="M6 -24.5Q100 -45.5 194 -24.5" fill="none" stroke="#f4f1e8" stroke-width="4" stroke-dasharray="1.4 2.2" opacity=".85"/>' +
        lights([[30, -33], [72, -40], [128, -40], [170, -33]], 0, o.off) +
        '<rect x="8" y="-20" width="184" height="20" fill="' + (o.lime || "#c9c0aa") + '"/><rect x="6" y="-22" width="188" height="3" fill="#ece5d2"/>' + ar +
        '<path d="M92 -3V-15a8 8 0 0 1 16 0V-3z" fill="' + (o.win ? "#ffe2a0" : "#3a3640") + '"/><rect x="88" y="-19" width="24" height="3" fill="#c9a24a"/>'); },
      /* the city spread out below a high corner, for the views looking down */
      valley: (y0, c, w) => { let d = '<rect x="0" y="' + y0 + '" width="400" height="' + (226 - y0) + '" fill="' + c + '"/>'; for (let i = 0; i < 70; i++) d += '<rect x="' + ((i * 53) % 400) + '" y="' + (y0 + 4 + (i * 29) % (222 - y0)) + '" width="2" height="2" fill="' + (w || "#ffd98a") + '" opacity=".6"/>'; return d; },
      /* from up on the Highbridge bluff: down into the bowl */
      bowl: (cx, cy, s, o) => {
        let b = '<ellipse rx="100" ry="36" fill="#d8cfba"/><ellipse rx="93" ry="32" fill="#2c4470"/><ellipse rx="80" ry="27" cy="2" fill="#3b5d96"/>' +
          '<ellipse rx="66" ry="21" cy="4" fill="' + (o.day ? "#3fa34a" : "#2f9a3e") + '"/><ellipse rx="54" ry="16" cy="5" fill="none" stroke="#4fb85a" stroke-width="5" opacity=".6"/>' +
          '<path d="M0 22L18 13L0 6L-18 13z" fill="#c08850"/><path d="M0 18L11 13L0 9L-11 13z" fill="#3fa34a"/>' +
          '<rect x="-1.5" y="20.5" width="3" height="3" fill="#fff"/><rect x="16.5" y="11.5" width="3" height="3" fill="#fff"/><rect x="-1.5" y="4.5" width="3" height="3" fill="#fff"/><rect x="-19.5" y="11.5" width="3" height="3" fill="#fff"/>' +
          '<ellipse rx="97" ry="34" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-dasharray="1.4 1.8"/><ellipse rx="98" ry="35" fill="none" stroke="#f4f1e8" stroke-width="1"/>' +
          '<rect x="-20" y="-38" width="40" height="12" fill="#14161c"/><g class="ysK"><path d="M-16 -34h14M2 -34h14M-16 -30h26" stroke="#7fd4ff" stroke-width="1.6"/></g>';
        [[-90, -12], [-50, -32], [50, -32], [90, -12], [-80, 20], [80, 20]].forEach(p => b += '<circle class="ysP" cx="' + p[0] + '" cy="' + (p[1] - 6) + '" r="9" fill="#fff4c8" opacity=".3"/><rect x="' + (p[0] - 5) + '" y="' + (p[1] - 9) + '" width="10" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>');
        return g(cx, cy, s, b);
      },
      /* light in the sky: the horizon tint for dusk, dawn, golden afternoon */
      tint: (top, bottom, y0) => '<linearGradient id="ysT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '" stop-opacity="0"/><stop offset="1" stop-color="' + bottom + '" stop-opacity=".85"/></linearGradient>' +
        '<rect x="0" y="' + (y0 || 0) + '" width="400" height="' + (226 - (y0 || 0)) + '" fill="url(#ysT)"/>',
      halo,
      clouds: (list, c) => list.map((p, i) => '<g class="ysD" style="animation-delay:-' + (i * 3) + 's"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/><ellipse cx="' + (p[0] + p[2] * .3) + '" cy="' + (p[1] - p[2] / 6) + '" rx="' + (p[2] * .5) + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/></g>').join(""),
      plane: (y, dur) => '<g class="ysX" style="animation-duration:' + (dur || 16) + 's"><path d="M0 ' + y + 'h16l4 -2h-6l-5 -5h-3l3 5h-9z" fill="#2a2d36"/><circle class="ysK" cx="2" cy="' + y + '" r="1.6" fill="#ff4a4a"/><circle cx="17" cy="' + y + '" r="1.2" fill="#fff"/></g>',
      blimp: (x, y) => '<g class="ysD"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#d9dde3" stroke="#6b7280" stroke-width="1"/><path d="M' + (x + 22) + ' ' + y + 'l10 -8v16z" fill="#9aa1aa"/><rect x="' + (x - 6) + '" y="' + (y + 8) + '" width="12" height="4" rx="1" fill="#3a3f48"/>' +
        '<rect class="ysK" x="' + (x - 16) + '" y="' + (y - 2) + '" width="28" height="4" rx="2" fill="#ffd66b"/></g>',
      fireworks: (list) => list.map((p, i) => { let r = ""; for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; r += 'M' + p[0] + ' ' + p[1] + 'l' + (Math.cos(a) * p[2]).toFixed(1) + ' ' + (Math.sin(a) * p[2]).toFixed(1); }
        return '<path class="ysF" style="animation-delay:-' + (i * 0.9) + 's" d="' + r + '" stroke="' + p[3] + '" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2"/>'; }).join(""),
      beams: (list) => list.map((p, i) => '<path class="ysB" style="animation-delay:-' + (i * 2.4) + 's" d="M' + p[0] + ' ' + p[1] + 'l-9 -' + p[2] + 'h18z" fill="#fff6d8" opacity=".16"/>').join(""),
      birds: (x, y) => '<g class="ysX" style="animation-duration:22s"><path d="M' + x + ' ' + y + 'q3 -3 6 0q3 -3 6 0M' + (x + 14) + ' ' + (y - 6) + 'q2 -2 4 0q2 -2 4 0M' + (x - 10) + ' ' + (y - 4) + 'q2 -2 4 0q2 -2 4 0" fill="none" stroke="#22252e" stroke-width="1.3"/></g>',
      flags: (list) => list.map((p, i) => '<path d="M' + p[0] + ' ' + p[1] + 'v-' + p[2] + '" stroke="#e6e6e6" stroke-width="1"/><g class="ysW" style="animation-delay:-' + (i * 0.3) + 's"><rect x="' + p[0] + '" y="' + (p[1] - p[2]) + '" width="' + (p[2] * .6) + '" height="' + (p[2] * .38) + '" fill="' + (i % 2 ? "#1f3a8a" : "#e8303a") + '"/><path d="M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .13) + 'h' + (p[2] * .6) + 'M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .26) + 'h' + (p[2] * .6) + '" stroke="#fff" stroke-width=".8"/></g>').join(""),
      /* an el: girder, posts, and a 4 (or 5) train rolling across it */
      el: (x0, x1, y, s, n) => {
        let p = '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + (4 * s) + '" fill="#2f3a33"/>';
        for (let x = x0 + 6; x < x1; x += 26 * s) p += '<rect x="' + x + '" y="' + y + '" width="' + (2 * s) + '" height="' + (40 * s) + '" fill="#2f3a33"/>';
        let cars = ""; for (let c = 0; c < 3; c++) cars += '<rect x="' + (c * 34 * s) + '" y="' + (y - 11 * s) + '" width="' + (32 * s) + '" height="' + (11 * s) + '" rx="' + (2 * s) + '" fill="#c3c8cf" stroke="#6b7280" stroke-width=".8"/><path d="M' + (c * 34 * s + 4 * s) + ' ' + (y - 7 * s) + 'h' + (24 * s) + '" stroke="#ffe9b0" stroke-width="' + (3 * s) + '" stroke-dasharray="' + (4 * s) + ' ' + (2 * s) + '"/>';
        return p + '<g class="ysX" style="animation-duration:11s">' + cars + '<circle cx="' + (96 * s) + '" cy="' + (y - 5.5 * s) + '" r="' + (4.5 * s) + '" fill="#00933c"/><text x="' + (96 * s) + '" y="' + (y - 3.3 * s) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (6 * s) + '" fill="#fff">' + (n || "4") + '</text></g>';
      },
      /* falling weather, looped in a box: rain streaks or snow */
      weather: (x, y, w, h, kind) => { let d = ""; for (let i = 0; i < Math.round(w * 60 / 300); i++) { const px = x + (i * 37) % w, py0 = (i * 23) % 60;
        for (let py = y - 60 + py0; py < y + h; py += 60) d += kind === "snow" ? '<circle cx="' + px + '" cy="' + py + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".85"/>' : '<path d="M' + px + ' ' + py + 'l-2 9" stroke="#b9c8dc" stroke-width="1" opacity=".6"/>'; }
        return '<clipPath id="ysC"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/></clipPath><g clip-path="url(#ysC)"><g class="ysS' + (kind === "snow" ? "" : " ysR") + '">' + d + '</g></g>'; },
      fog: (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" opacity=".38"/><g class="ysD"><ellipse cx="' + (x + w * .3) + '" cy="' + (y + h * .55) + '" rx="' + (w * .4) + '" ry="' + (h * .18) + '" fill="' + c + '" opacity=".45"/><ellipse cx="' + (x + w * .75) + '" cy="' + (y + h * .35) + '" rx="' + (w * .35) + '" ry="' + (h * .14) + '" fill="' + c + '" opacity=".4"/></g>',
      moon: (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 8) + '" fill="#fff1d6" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff1d6"/><circle cx="' + (x - r * .3) + '" cy="' + (y - r * .2) + '" r="' + (r * .2) + '" fill="#e8dcc0"/><circle cx="' + (x + r * .35) + '" cy="' + (y + r * .3) + '" r="' + (r * .14) + '" fill="#e8dcc0"/>',
      river: (x0, x1, y, h) => '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + h + '" fill="#1c2a44"/><g class="ysD"><path d="M' + (x0 + 10) + ' ' + (y + 3) + 'h30M' + (x0 + 70) + ' ' + (y + 6) + 'h22M' + (x0 + 130) + ' ' + (y + 4) + 'h26" stroke="#ffcf78" stroke-width="1.4" opacity=".7"/></g>'
    };
  })();
  const base = window.SCENES.corner;
  window.SCENES.corner = function () {
    const art = '<g>' + Y.css +
      Y.valley(14, "#1a1830") + Y.bowl(136, 46, 1.05, {}) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
