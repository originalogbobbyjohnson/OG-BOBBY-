/* Avelino scenes (Regions tab: UK + EUROPE; Tottenham, North London N17 - Achi Avelino, born 1993 in Tottenham, Congolese and Angolan roots;
   came up with Wretch 32 (Young Fire, Old Flame, 2015); debut album God Save the Streets, 2021).
   1 White Hart Lane station (London Overground, Weaver line): the open-air platform on the embankment, a white train with orange doors pulling in.
   2 Bruce Castle, Lordship Lane: the red-brick Tudor manor with its white clock cupola and the round brick tower beside it.
   3 Tottenham Marshes and the River Lea: the marsh grass, a narrowboat drifting, pylons on the skyline at dusk.
   4 The O2 on the Greenwich Peninsula, BRITs night ("now when I'm seeing red it's the carpet at the BRITs"): white dome, yellow masts, red carpet.
   5 Tottenham High Road at White Hart Lane, N17: London street plates, AVELINO tagged, the big stadium bowl behind (no crest).
   Adele's kit already has Tottenham Hale, Bruce Grove and the High Cross, so those stay out. CSS classes prefixed "avl"
   (the page's own anim-train is kept). No logos (no roundel, no club crest), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes avlCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.avlCloud{animation:avlCloud 28s linear infinite}.avlC2{animation-delay:-14s}' +
    '@keyframes avlBoat{0%{transform:translateX(-160px)}100%{transform:translateX(470px)}}.avlBoat{animation:avlBoat 18s linear infinite}' +
    '@keyframes avlBird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(460px,0)}}.avlBird{animation:avlBird 12s linear infinite}.avlB2{animation-delay:-6s}' +
    '@keyframes avlTw{0%,100%{opacity:1}50%{opacity:.2}}.avlTw{animation:avlTw 1.6s ease-in-out infinite}.avlT2{animation-delay:.5s}.avlT3{animation-delay:1s}' +
    '@keyframes avlBeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.avlBeam{transform-box:fill-box;transform-origin:50% 100%;animation:avlBeam 4s ease-in-out infinite}.avlBm2{animation-delay:-2s}' +
    '@keyframes avlFlash{0%,86%,100%{opacity:0}88%,92%{opacity:.9}}.avlFlash{animation:avlFlash 2.6s linear infinite}.avlF2{animation-delay:-.9s}.avlF3{animation-delay:-1.7s}' +
    '@keyframes avlBus{0%{transform:translateX(-220px)}100%{transform:translateX(560px)}}.avlBus{animation:avlBus 10s linear infinite}' +
    '@keyframes avlRip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.avlRip{animation:avlRip 3s ease-in-out infinite}' +
    '@keyframes avlLeaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.avlLeaf{transform-box:fill-box;transform-origin:50% 100%;animation:avlLeaf 3.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const WEAVER = "#823a62", GOLD = "#f3c94b", BLUE = "#3aa6e0", BRICK = "#a2472f", ORANGE = "#ee7623";
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="avlCloud"><ellipse cx="40" cy="38" rx="34" ry="10"/><ellipse cx="62" cy="31" rx="20" ry="9"/></g>' +
    '<g class="avlCloud avlC2"><ellipse cx="40" cy="70" rx="28" ry="8"/><ellipse cx="56" cy="64" rx="16" ry="8"/></g></g>';
  const birds = '<g stroke="#2a2a33" stroke-width="1.6" fill="none"><path class="avlBird" d="M20 50q5 -5 10 0q5 -5 10 0"/><path class="avlBird avlB2" d="M10 74q4 -4 8 0q4 -4 8 0"/></g>';

  /* 1. White Hart Lane - open-air Overground platform, Weaver line */
  function avlstation() {
    let wins = "";
    for (const x of [40, 76, 160, 196, 280]) wins += '<rect x="' + x + '" y="142" width="26" height="20" rx="3" fill="#1d2a36"/>';
    const train = '<g class="anim-train">' +
      '<path d="M14 134h296q26 0 30 26v40H14z" fill="#f4f4f2" stroke="#2b2b2b" stroke-width="2"/>' + wins +
      '<g fill="' + ORANGE + '"><rect x="118" y="144" width="22" height="52"/><rect x="238" y="144" width="22" height="52"/></g>' +
      '<g fill="#9fb3c4"><rect x="121" y="148" width="7" height="22"/><rect x="130" y="148" width="7" height="22"/><rect x="241" y="148" width="7" height="22"/><rect x="250" y="148" width="7" height="22"/></g>' +
      '<rect x="14" y="184" width="326" height="10" fill="#1d3f8f"/><path d="M314 142q20 2 22 22h-22z" fill="#1d2a36"/>' +
      '<rect x="326" y="176" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="54" cy="202" r="6"/><circle cx="78" cy="202" r="6"/><circle cx="270" cy="202" r="6"/><circle cx="294" cy="202" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#avls1)"/>' + clouds() +
      /* rooftops of N17 behind the embankment */
      '<g fill="#7b6a63"><rect x="0" y="104" width="60" height="30"/><path d="M0 104l30 -14l30 14z"/><rect x="70" y="98" width="70" height="36"/><path d="M70 98l35 -16l35 16z"/>' +
      '<rect x="250" y="100" width="64" height="34"/><path d="M250 100l32 -14l32 14z"/><rect x="324" y="106" width="76" height="28"/></g>' +
      '<g fill="#e8d9a8" opacity=".8"><rect x="84" y="108" width="8" height="10"/><rect x="112" y="108" width="8" height="10"/><rect x="264" y="110" width="8" height="10"/><rect x="292" y="110" width="8" height="10"/></g>' +
      /* platform canopy (the rebuilt station's slim steel-and-glass canopy) */
      '<rect x="150" y="52" width="250" height="8" fill="#3a3f46"/><g fill="#3a3f46"><rect x="170" y="60" width="5" height="74"/><rect x="290" y="60" width="5" height="74"/><rect x="390" y="60" width="5" height="74"/></g>' +
      '<rect x="150" y="60" width="250" height="4" fill="#9fc6d6" opacity=".7"/>' +
      '<rect x="0" y="134" width="400" height="70" fill="#3a3632"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#6b6760"/><rect x="0" y="206" width="400" height="6" fill="#f2d24a"/>' +
      /* name board, no roundel */
      '<g transform="translate(36 66)"><rect width="196" height="40" rx="4" fill="#fff" stroke="#1d2a36" stroke-width="2"/>' +
      '<rect x="0" y="30" width="196" height="10" rx="0" fill="' + WEAVER + '"/>' +
      '<text x="80" y="24" ' + F + ' font-size="15" fill="#1d2a36" text-anchor="middle">White Hart Lane</text>' +
      '<rect x="154" y="6" width="36" height="20" rx="10" fill="' + WEAVER + '"/><text x="172" y="20" ' + F + ' font-size="8" fill="#fff" text-anchor="middle">WVR</text></g>' +
      '<g ' + F + ' font-size="9" fill="#fff"><text x="14" y="236">WEAVER LINE · LONDON OVERGROUND</text><text x="306" y="236">WAY OUT</text></g>' +
      '<path d="M358 232l10 0l-4 -4m4 4l-4 4" stroke="#fff" stroke-width="2" fill="none"/>',
      sky("avls1", "#7fb6dc", "#e8d8c0"));
  }

  /* 2. Bruce Castle, Lordship Lane - red-brick Tudor manor, white clock cupola, round tower */
  function avlcastle() {
    let wins = "";
    for (const x of [120, 150, 236, 266]) for (const y of [104, 140]) wins += '<rect x="' + x + '" y="' + y + '" width="16" height="22" fill="#e9eef0" stroke="#f5efe2" stroke-width="2"/><path d="M' + (x + 8) + ' ' + y + 'v22M' + x + ' ' + (y + 11) + 'h16" stroke="#9aa3a8" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#avls2)"/>' + clouds(.8) + birds +
      /* round Tudor brick tower on the left */
      '<rect x="30" y="96" width="50" height="104" fill="' + BRICK + '"/><ellipse cx="55" cy="96" rx="25" ry="6" fill="#8e3c27"/>' +
      '<g fill="#8e3c27"><rect x="30" y="86" width="8" height="10"/><rect x="44" y="86" width="8" height="10"/><rect x="58" y="86" width="8" height="10"/><rect x="72" y="86" width="8" height="10"/></g>' +
      '<rect x="48" y="130" width="12" height="18" rx="6" fill="#2a1f1a"/>' +
      /* main house */
      '<rect x="104" y="92" width="196" height="108" fill="' + BRICK + '"/>' +
      '<path d="M104 92h196" stroke="#f5efe2" stroke-width="4"/>' +
      '<g fill="#a2472f"><path d="M104 92l18 -22l18 22z"/><path d="M262 92l18 -22l18 22z"/></g>' +
      /* central porch tower with white cupola + clock */
      '<rect x="180" y="62" width="44" height="138" fill="#b4573c"/><path d="M180 62h44" stroke="#f5efe2" stroke-width="3"/>' +
      '<rect x="190" y="38" width="24" height="24" fill="#f5efe2" stroke="#c9c1b0" stroke-width="1.5"/><path d="M186 38h32l-16 -14z" fill="#5a6870"/>' +
      '<path d="M202 24v-8" stroke="#5a6870" stroke-width="2"/><circle cx="202" cy="50" r="7" fill="#fff" stroke="#2a2a2a" stroke-width="1.5"/>' +
      '<path d="M202 50v-5M202 50h4" stroke="#2a2a2a" stroke-width="1.4"/>' +
      '<rect x="192" y="160" width="20" height="40" rx="10" fill="#3a2a20"/><path d="M188 160h28" stroke="#f5efe2" stroke-width="3"/>' +
      wins +
      /* lawn, path, trees swaying */
      '<rect x="0" y="200" width="400" height="60" fill="#5d9b4e"/><path d="M190 260l12 -60l12 60z" fill="#d9c9a6"/>' +
      '<g class="avlLeaf"><rect x="338" y="150" width="8" height="54" fill="#5a3d26"/><circle cx="342" cy="140" r="30" fill="#3f7d3a"/><circle cx="324" cy="152" r="18" fill="#4a8c42"/><circle cx="362" cy="152" r="18" fill="#4a8c42"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#4a8640"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="10" fill="#fff" letter-spacing="3">BRUCE CASTLE · LORDSHIP LANE N17</text>',
      sky("avls2", "#9cc7e6", "#f1e4c8"));
  }

  /* 3. Tottenham Marshes and the River Lea at dusk - narrowboat drifting, pylons */
  function avlmarsh() {
    const pylon = x => '<g stroke="#3a3346" stroke-width="2" fill="none"><path d="M' + (x - 14) + ' 150L' + x + ' 50L' + (x + 14) + ' 150M' + (x - 22) + ' 70h44M' + (x - 18) + ' 90h36M' + (x - 10) + ' 110l20 20M' + (x + 10) + ' 110l-20 20"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#avls3)"/>' +
      '<circle cx="300" cy="118" r="26" fill="#ffd48a" opacity=".9"/>' + birds +
      pylon(90) + pylon(250) +
      '<path d="M68 70Q170 100 228 70M112 70Q170 92 272 70" stroke="#3a3346" stroke-width="1" fill="none"/>' +
      '<path d="M0 150h400v30H0z" fill="#6e8a4c"/>' +
      '<g fill="#8aa35a">' + [10, 34, 58, 300, 330, 360, 384].map(x => '<path class="avlLeaf" d="M' + x + ' 160q4 -26 8 0z"/>').join("") + '</g>' +
      /* the river */
      '<path d="M0 176h400v50H0z" fill="#3e6f8a"/>' +
      '<g stroke="#a8d0e0" stroke-width="2" opacity=".7" class="avlRip"><path d="M30 190h40M150 202h50M280 194h46M90 214h36M320 216h40"/></g>' +
      /* narrowboat */
      '<g class="avlBoat"><path d="M0 182h150l12 10H6z" fill="#1d4a2e"/><rect x="18" y="168" width="110" height="16" fill="#9a2a2a"/>' +
      '<g fill="' + GOLD + '"><rect x="26" y="172" width="12" height="7"/><rect x="46" y="172" width="12" height="7"/><rect x="66" y="172" width="12" height="7"/><rect x="86" y="172" width="12" height="7"/></g>' +
      '<rect x="18" y="166" width="110" height="3" fill="' + GOLD + '"/><rect x="112" y="154" width="4" height="14" fill="#2a2a2a"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#4f6b3a"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + F + ' font-size="10" fill="#fff" letter-spacing="3">TOTTENHAM MARSHES · RIVER LEA</text>',
      sky("avls3", "#3c2a5a", "#e9946a"));
  }

  /* 4. The O2 on BRITs night - white dome, yellow masts, red carpet, camera flashes */
  function avlbrits() {
    let masts = "";
    for (let i = 0; i < 12; i++) {
      const a = Math.PI * (0.08 + i * 0.077), x = 200 - Math.cos(a) * 150, y = 150 - Math.sin(a) * 74;
      masts += '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'l' + ((x - 200) * 0.16).toFixed(1) + ' -36" stroke="' + GOLD + '" stroke-width="3"/>';
    }
    let flashes = "";
    [[60, 196, ""], [96, 204, " avlF2"], [304, 198, " avlF3"], [338, 206, ""]].forEach(p => { flashes += '<g><rect x="' + (p[0] - 8) + '" y="' + p[1] + '" width="16" height="10" rx="2" fill="#1d1d24"/><circle cx="' + p[0] + '" cy="' + (p[1] - 2) + '" r="9" fill="#fffbe6" class="avlFlash' + p[2] + '"/></g>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#avls4)"/>' +
      '<path d="M120 190L90 20h22z" fill="#fff6d0" opacity=".12" class="avlBeam"/><path d="M280 190L288 20h22z" fill="#fff6d0" opacity=".12" class="avlBeam avlBm2"/>' +
      masts +
      '<path d="M50 150Q200 52 350 150z" fill="#eef0f2" stroke="#b9bec4" stroke-width="2"/>' +
      '<g stroke="#c9ced4" stroke-width="1.2" fill="none"><path d="M90 140Q200 70 310 140M130 128Q200 84 270 128"/><path d="M200 76v74M150 88l-24 58M250 88l24 58"/></g>' +
      '<rect x="40" y="150" width="320" height="34" fill="#22252e"/>' +
      '<g fill="#ffd98a" class="avlTw"><rect x="70" y="160" width="20" height="8"/><rect x="130" y="160" width="20" height="8"/><rect x="250" y="160" width="20" height="8"/><rect x="310" y="160" width="20" height="8"/></g>' +
      /* red carpet */
      '<path d="M170 184h60l50 76H120z" fill="#c4202e"/><path d="M170 184h60" stroke="#ff4a58" stroke-width="2"/>' +
      '<g fill="' + GOLD + '"><rect x="150" y="186" width="4" height="26"/><rect x="246" y="186" width="4" height="26"/><rect x="128" y="214" width="4" height="30"/><rect x="268" y="214" width="4" height="30"/></g>' +
      '<path d="M152 192Q140 210 130 220M248 192Q260 210 270 220" stroke="#7a1a22" stroke-width="3" fill="none"/>' +
      flashes +
      '<text x="200" y="138" text-anchor="middle" ' + F + ' font-size="11" fill="' + WEAVER + '" letter-spacing="2">SEEING RED</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + F + ' font-size="10" fill="' + GOLD + '" letter-spacing="3">BRITS NIGHT · GREENWICH PENINSULA</text>',
      sky("avls4", "#0b1030", "#3a2350"));
  }

  /* 5. Tottenham High Road at White Hart Lane - London street plates, AVELINO tagged, the stadium bowl behind */
  function avlcorner() {
    const plate = (x, y, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="128" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="64" y="20" text-anchor="middle" ' + F + ' font-size="12" fill="#111">' + name + '</text>' +
      '<rect x="0" y="25" width="128" height="9" fill="#c4202e"/><text x="64" y="32" text-anchor="middle" ' + F + ' font-size="6.5" fill="#fff">' + dist + '</text></g>';
    let lights = "";
    for (let x = 70; x <= 330; x += 26) lights += '<rect x="' + x + '" y="34" width="14" height="5" rx="2" fill="#fff6d0" class="avlTw' + (x % 52 ? ' avlT2' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#avls5)"/>' +
      /* the stadium bowl behind (grey-silver cladding, no crest) */
      '<path d="M40 110Q200 22 360 110v14H40z" fill="#c9cfd6" stroke="#8d949c" stroke-width="2"/>' +
      '<path d="M60 104Q200 36 340 104" stroke="#8d949c" stroke-width="1.5" fill="none"/>' +
      '<g stroke="#a7aeb6" stroke-width="1">' + [80, 120, 160, 200, 240, 280, 320].map(x => '<path d="M' + x + ' 64v58"/>').join("") + '</g>' +
      lights +
      /* High Road shopfront wall */
      '<rect x="0" y="118" width="400" height="92" fill="#8a5a46"/>' +
      '<g stroke="#6d4434" stroke-width="1">' + [130, 146, 162, 178, 194].map(y => '<path d="M0 ' + y + 'h400"/>').join("") + '</g>' +
      '<rect x="20" y="126" width="230" height="78" fill="#2a2d36"/>' +
      tag("AVELINO", 34, 178, 40, GOLD, -6) + tag("FYO", 186, 200, 20, BLUE, -4) +
      '<rect x="270" y="132" width="110" height="72" fill="#1d2a36"/><rect x="276" y="138" width="98" height="60" fill="#3d5868" opacity=".8"/>' +
      /* a red double-decker rolling past */
      '<g class="avlBus"><rect x="0" y="196" width="120" height="44" rx="6" fill="#d0202a"/><g fill="#1d2a33"><rect x="8" y="202" width="20" height="12"/><rect x="34" y="202" width="20" height="12"/><rect x="60" y="202" width="20" height="12"/><rect x="86" y="202" width="20" height="12"/>' +
      '<rect x="8" y="220" width="20" height="10"/><rect x="34" y="220" width="20" height="10"/><rect x="60" y="220" width="20" height="10"/></g><circle cx="24" cy="242" r="7" fill="#111"/><circle cx="98" cy="242" r="7" fill="#111"/></g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#3a3a40"/>' +
      /* sign post with two London street plates */
      '<rect x="376" y="96" width="6" height="150" fill="#2a2a2a"/>' +
      plate(244, 70, "HIGH ROAD", "N17 · HARINGEY") + plate(244, 106, "WHITE HART LANE", "N17 · HARINGEY"),
      sky("avls5", "#2c3e6a", "#f0a470"));
  }

  window.SCENES = { avlstation, avlcastle, avlmarsh, avlbrits, avlcorner };
})();
