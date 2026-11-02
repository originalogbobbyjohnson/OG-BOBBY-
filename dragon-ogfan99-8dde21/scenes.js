/* Soundview opening scenes for the Drag-On game. Each one is a small animated SVG, 400 x 260.
   Cory Gunz's game already has Parkchester's Oval, Soundview Park and Orchard Beach, so these rooms use:
   the 6 at Elder Av at sunset (Morrison Av is Cory Gunz's stop), the Bronxdale (Sotomayor) Houses courtyard jam, the pink silos of
   Concrete Plant Park on the Bronx River, a Ruff Ryders ride-out under the Bruckner Expressway, and Soundview Av & Watson Av. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes bike{from{transform:translateX(-140px)}to{transform:translateX(540px)}}' +
    '.bike{animation:bike 4.2s linear infinite}.bk2{animation-delay:-1.4s}.bk3{animation-delay:-2.8s}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bop{animation:bounce .5s ease-in-out infinite}.bop2{animation-delay:-.25s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.rec{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.6s linear infinite}' +
    '@keyframes flow{from{transform:translateX(0)}to{transform:translateX(-40px)}}' +
    '.wave{animation:flow 3s linear infinite}' +
    '@keyframes paddle{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}' +
    '.kayak{animation:paddle 9s ease-in-out infinite}' +
    '@keyframes flame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}' +
    '.fl{transform-box:fill-box;transform-origin:50% 100%;animation:flame .4s ease-in-out infinite}.fl2{animation-delay:-.2s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.blk{animation:blink 1.2s infinite}.blk2{animation-delay:-.6s}' +
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
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const cloud = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + (c || "#fff") + '" opacity=".55"><ellipse cx="0" cy="0" rx="22" ry="8"/><ellipse cx="14" cy="-5" rx="14" ry="8"/><ellipse cx="-12" cy="-3" rx="11" ry="6"/></g>';
  /* a little flame: two layered teardrops */
  const flame = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="fl ' + (cls || "") + '"><path d="M0 0c-9 0-12-8-8-16c2 4 4 5 5 3c-1-7 3-12 7-16c-1 6 4 9 6 14c2 6-1 15-10 15z" fill="#ff5a1f"/>' +
    '<path d="M0 -1c-5 0-6-5-4-9c1 2 2 3 3 2c0-4 2-6 4-8c0 4 3 6 3 9c1 4-1 6-6 6z" fill="#ffc23a"/></g></g>';
  const FIRE = "#ff5a1f", GOLD = "#ffc23a", GREEN6 = "#00933c", BRICK = "#8e3b2a", CHROME = "#c9d3dc";

  /* 1. The 6 pulling into Elder Av, up on the el over Westchester Av, the Sotomayor (Bronxdale) Houses behind, the sky burning orange */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="128" fill="#2f3d33"/>';
    let lattice = "";
    for (let x = 0; x < W; x += 25) lattice += '<path d="M' + x + ' 196l12 14l13-14" stroke="#2f3d33" stroke-width="2.5" fill="none"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#ffe2b8" opacity=".85"/>';
    let roofs = "";
    [[0, 30], [60, 44], [110, 22], [170, 52], [240, 34], [300, 48], [350, 28]].forEach(r => roofs += '<rect x="' + r[0] + '" y="' + (120 - r[1]) + '" width="54" height="' + r[1] + '" fill="#4a2a24"/>');
    /* the seven-story brick blocks of the Sotomayor Houses */
    [[-6, 62], [340, 60]].forEach(b => { roofs += '<rect x="' + b[0] + '" y="' + (120 - b[1]) + '" width="80" height="' + b[1] + '" fill="#7a3a2c"/>'; for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) roofs += '<rect x="' + (b[0] + 6 + c * 15) + '" y="' + (120 - b[1] + 6 + r * 12) + '" width="8" height="6" fill="' + ((r + c) % 3 ? "#3a2420" : "#ffd98a") + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#dg1)"/>' +
      '<circle cx="320" cy="96" r="26" fill="#ffd27a" opacity=".9"/>' +
      '<g class="cld">' + cloud(40, 30, 1.2, "#ffd6b0") + '</g><g class="cld cld2">' + cloud(60, 18, .9, "#ffd6b0") + '</g>' +
      roofs +
      /* canopy and el */
      '<rect x="0" y="44" width="400" height="14" fill="#2f3d33"/>' +
      (function () { let s = ""; for (let x = 0; x < 400; x += 20) s += '<path d="M' + x + ' 44l10-12 10 12z" fill="#24302a"/>'; return s; })() +
      girders +
      /* station sign */
      '<rect x="62" y="64" width="276" height="34" rx="4" fill="#111"/>' +
      '<rect x="62" y="64" width="276" height="4" fill="#fff"/>' +
      '<text x="74" y="89" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Elder Av</text>' +
      bullet(318, 82, "6", GREEN6) +
      '<g class="flk"><rect x="170" y="36" width="60" height="4" rx="2" fill="#fff7d6"/></g>' +
      /* the 6 train slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="' + CHROME + '" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + GREEN6 + '"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#ffe2b8" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(272, 168, "6", GREEN6) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="20" fill="#2f3d33"/>' + lattice + tag("DRAG-ON", 30, 208, 20, FIRE, -3) + tag("FLAME ON", 250, 208, 16, GOLD, -4) +
      /* Westchester Av under the el, cars rolling */
      '<rect x="0" y="210" width="400" height="50" fill="#1c1512"/>' +
      '<path d="M0 236h400" stroke="#ffc23a" stroke-width="2" stroke-dasharray="14 12"/>' +
      '<g class="car"><rect x="0" y="240" width="44" height="12" rx="4" fill="#d23b2a"/><circle cx="10" cy="253" r="3.5" fill="#111"/><circle cx="34" cy="253" r="3.5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="222" width="50" height="11" rx="4" fill="#e9e3d2"/><circle cx="12" cy="234" r="3.5" fill="#111"/><circle cx="38" cy="234" r="3.5" fill="#111"/></g>',
      sky("dg1", "#3a1430", "#ff8a3d"));
  }

  /* 2. The Bronxdale Houses (now Sotomayor Houses): 7-story red-brick buildings round a courtyard, a DJ jam on the benches,
        the way Disco King Mario rocked it there before anybody called it hip-hop */
  function bronxdale() {
    const bldg = (x, y, w, h) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/>' +
        '<rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="4" fill="#5e2418"/>';
      for (let r = 0; r < 7; r++) for (let c = 0; c < Math.floor(w / 16); c++) {
        const lit = (r * 7 + c * 3 + x) % 5 === 0;
        s += '<rect x="' + (x + 5 + c * 16) + '" y="' + (y + 6 + r * (h - 14) / 7) + '" width="8" height="' + ((h - 14) / 7 - 5) + '" fill="' + (lit ? "#ffd98a" : "#2a1814") + '"/>';
      }
      return s;
    };
    let grass = "";
    for (let x = 0; x < 400; x += 6) grass += '<path d="M' + x + ' 196l2-6 2 6" stroke="#3d7a3a" stroke-width="1.2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dg2)"/>' +
      '<g class="cld">' + cloud(30, 26, 1.1) + '</g>' +
      bldg(-10, 50, 130, 140) + bldg(140, 70, 120, 120) + bldg(282, 44, 130, 146) +
      /* courtyard: path, grass, benches */
      '<rect x="0" y="190" width="400" height="70" fill="#9b968a"/>' +
      '<rect x="0" y="190" width="400" height="10" fill="#4f8f45"/>' + grass +
      '<path d="M0 214h400" stroke="#7d786d" stroke-width="1"/>' +
      '<rect x="30" y="222" width="70" height="6" fill="#2e5a37"/><rect x="34" y="228" width="4" height="10" fill="#2e5a37"/><rect x="92" y="228" width="4" height="10" fill="#2e5a37"/>' +
      '<rect x="300" y="222" width="70" height="6" fill="#2e5a37"/><rect x="304" y="228" width="4" height="10" fill="#2e5a37"/><rect x="362" y="228" width="4" height="10" fill="#2e5a37"/>' +
      /* lamp post plugged in */
      '<rect x="128" y="150" width="4" height="80" fill="#2b2b2b"/><circle cx="130" cy="148" r="6" fill="#fff3c4" class="flk"/>' +
      /* the DJ table: two turntables, a mixer, speakers stacked */
      '<rect x="160" y="206" width="90" height="26" rx="2" fill="#2a2a2a"/>' +
      '<rect x="164" y="198" width="36" height="10" fill="#444"/><rect x="210" y="198" width="36" height="10" fill="#444"/>' +
      '<g class="rec"><circle cx="182" cy="203" r="5" fill="#111"/><rect x="181" y="198.5" width="2" height="2" fill="' + FIRE + '"/></g>' +
      '<g class="rec"><circle cx="228" cy="203" r="5" fill="#111"/><rect x="227" y="198.5" width="2" height="2" fill="' + GOLD + '"/></g>' +
      '<g class="bop"><rect x="258" y="176" width="28" height="56" rx="2" fill="#1a1a1a"/><circle cx="272" cy="192" r="8" fill="#333" stroke="#777"/><circle cx="272" cy="216" r="10" fill="#333" stroke="#777"/></g>' +
      '<g class="bop bop2"><rect x="124" y="190" width="28" height="42" rx="2" fill="#1a1a1a"/><circle cx="138" cy="203" r="7" fill="#333" stroke="#777"/><circle cx="138" cy="221" r="8" fill="#333" stroke="#777"/></g>' +
      /* music notes floating up */
      '<g class="blk"><text x="290" y="168" font-size="16" fill="' + GOLD + '">♪</text></g><g class="blk blk2"><text x="108" y="176" font-size="14" fill="' + FIRE + '">♫</text></g>' +
      tag("BRONXDALE", 16, 252, 22, FIRE, -3),
      sky("dg2", "#3c7fc0", "#bfe0f2"));
  }

  /* 3. Concrete Plant Park on the Bronx River: the old plant's silos painted that kidney-bean pink, the hopper and conveyor,
        the river moving under the Westchester Av bridge, a kayak paddling by */
  function silos() {
    const PINK = "#c98a8e", PINKD = "#9c5f66";
    let silo = "";
    [60, 108, 156, 204].forEach((x, i) => {
      silo += '<rect x="' + x + '" y="64" width="40" height="80" fill="' + PINK + '"/>' +
        '<rect x="' + x + '" y="64" width="10" height="80" fill="#d9a3a6"/>' +
        '<rect x="' + (x + 30) + '" y="64" width="10" height="80" fill="' + PINKD + '"/>' +
        '<path d="M' + x + ' 144l14 22h12l14-22z" fill="' + PINKD + '"/>' +
        '<rect x="' + (x + 2) + '" y="166" width="4" height="22" fill="#8a8a82"/><rect x="' + (x + 34) + '" y="166" width="4" height="22" fill="#8a8a82"/>' +
        '<rect x="' + x + '" y="58" width="40" height="6" fill="' + PINKD + '"/>';
    });
    /* conveyor: a long diagonal truss up to the top */
    let truss = '<path d="M250 188L310 60" stroke="' + PINKD + '" stroke-width="7"/><path d="M262 188L322 60" stroke="' + PINKD + '" stroke-width="3"/>';
    for (let t = 0; t < 1; t += .1) { const x = 250 + t * 60, y = 188 - t * 128; truss += '<path d="M' + x + ' ' + y + 'l12 0" stroke="' + PINKD + '" stroke-width="2"/>'; }
    truss += '<rect x="296" y="48" width="40" height="16" fill="' + PINK + '"/>';
    let waves = "";
    for (let x = 0; x < 460; x += 40) waves += '<path d="M' + x + ' 216q10-4 20 0t20 0" stroke="#9fd0d8" stroke-width="1.5" fill="none"/>';
    let trees = "";
    [[20, 170], [350, 160], [380, 172], [236, 178]].forEach(p => trees += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="18" fill="#3f7d3a"/><circle cx="' + (p[0] + 10) + '" cy="' + (p[1] - 8) + '" r="12" fill="#57994a"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#dg3)"/>' +
      '<g class="cld">' + cloud(80, 30, 1.2) + '</g><g class="cld cld2">' + cloud(40, 18, .8) + '</g>' +
      /* Westchester Av bridge in the distance with the 6 crossing */
      '<rect x="0" y="120" width="400" height="6" fill="#55605a"/>' +
      '<g class="car" style="animation-duration:11s"><rect x="0" y="110" width="90" height="10" rx="3" fill="' + CHROME + '"/><rect x="0" y="116" width="90" height="2" fill="' + GREEN6 + '"/></g>' +
      silo + truss + trees +
      /* the river bank and the water */
      '<rect x="0" y="188" width="400" height="10" fill="#7b8a5a"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#2d6f7d"/>' +
      '<g class="wave">' + waves + '</g><g transform="translate(0 18)"><g class="wave">' + waves + '</g></g>' +
      '<g class="kayak"><path d="M40 232q30 8 60 0q-30 -4 -60 0z" fill="' + FIRE + '"/><circle cx="70" cy="224" r="4" fill="#3a2a22"/><path d="M58 220l24 10" stroke="#e9e3d2" stroke-width="2"/></g>' +
      '<text x="268" y="250" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#e9f4f6" opacity=".8">BRONX RIVER</text>',
      sky("dg3", "#5aa6dc", "#e6f1f6"));
  }

  /* 4. A Ruff Ryders ride-out: bikes rolling down Bruckner Blvd in the shadow of the Bruckner Expressway, flames painted on the tanks */
  function rideout() {
    const bikeG = (y, c, cls) =>
      '<g class="bike ' + cls + '"><g transform="translate(0 ' + y + ')">' +
        '<circle cx="12" cy="20" r="11" fill="none" stroke="#111" stroke-width="5"/><circle cx="62" cy="20" r="11" fill="none" stroke="#111" stroke-width="5"/>' +
        '<circle cx="12" cy="20" r="3" fill="' + CHROME + '"/><circle cx="62" cy="20" r="3" fill="' + CHROME + '"/>' +
        '<path d="M12 20L30 4h20l12 16" stroke="' + CHROME + '" stroke-width="3" fill="none"/>' +
        '<path d="M26 4q12-10 26 0z" fill="' + c + '"/>' +
        '<path d="M30 3q4-5 8-1q3-5 7 0" stroke="' + GOLD + '" stroke-width="1.5" fill="none"/>' +
        '<path d="M50 4l10-10" stroke="' + CHROME + '" stroke-width="3"/>' +
        /* rider: helmet + jacket, no face */
        '<rect x="30" y="-18" width="14" height="18" rx="4" fill="#1b1b1b"/><circle cx="40" cy="-24" r="7" fill="#111"/><rect x="40" y="-26" width="8" height="3" fill="' + c + '"/>' +
        '<path d="M42 -12l14 0" stroke="#1b1b1b" stroke-width="4"/>' +
      '</g></g>';
    let pillars = "";
    for (let x = 20; x < 400; x += 90) pillars += '<rect x="' + x + '" y="60" width="16" height="134" fill="#6b6b66"/><rect x="' + (x - 6) + '" y="54" width="28" height="8" fill="#5a5a55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dg4)"/>' +
      /* storefronts behind */
      '<rect x="0" y="100" width="400" height="94" fill="#5b3a2c"/>' +
      (function () { let s = ""; for (let x = 6; x < 400; x += 56) s += '<rect x="' + x + '" y="140" width="46" height="40" fill="#2a1d18"/><rect x="' + x + '" y="128" width="46" height="10" fill="' + (x % 3 ? "#d23b2a" : "#2f6fbf") + '"/><rect x="' + (x + 6) + '" y="146" width="34" height="20" fill="#ffd98a" opacity=".55"/>'; return s; })() +
      /* the expressway deck overhead */
      '<rect x="0" y="34" width="400" height="22" fill="#7d7d76"/><rect x="0" y="30" width="400" height="5" fill="#9a9a92"/>' +
      '<g class="car" style="animation-duration:5s"><rect x="0" y="18" width="40" height="12" rx="3" fill="#e9e3d2"/></g>' +
      '<g class="car car2" style="animation-duration:5s"><rect x="0" y="20" width="56" height="10" rx="2" fill="#2f6fbf"/></g>' +
      pillars +
      '<rect x="80" y="64" width="150" height="18" rx="2" fill="#0d6b3a"/><text x="155" y="77" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">BRUCKNER BLVD</text>' +
      /* the road */
      '<rect x="0" y="194" width="400" height="66" fill="#2a2624"/>' +
      '<path d="M0 226h400" stroke="#ffc23a" stroke-width="2" stroke-dasharray="16 12"/>' +
      bikeG(178, FIRE, "") + bikeG(206, "#c4161c", "bk2") + bikeG(186, GOLD, "bk3") +
      tag("RUFF RYDERS", 236, 120, 22, FIRE, -5),
      sky("dg4", "#2d1a2e", "#c96a3a"));
  }

  /* 5. Soundview Av & Watson Av, on the edge of Bronxdale: street signs, the light, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 64; y < 222; y += 12) { bricks += '<path d="M16 ' + y + 'h250" stroke="#4a2c24" stroke-width="1"/>'; for (let x = (y / 12 % 2 ? 16 : 36); x < 266; x += 40) bricks += '<path d="M' + x + ' ' + y + 'v12" stroke="#4a2c24" stroke-width="1"/>'; }
    const sign = (x, y, txt) => '<rect x="' + x + '" y="' + y + '" width="104" height="20" rx="2" fill="#0d6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + 52) + '" y="' + (y + 14.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#dg5)"/>' +
      /* brick wall */
      '<rect x="16" y="60" width="250" height="162" fill="#8a4a38"/>' + bricks +
      tag("DRAG-ON", 28, 128, 38, FIRE, -6) +
      tag("FLAME ON", 44, 182, 28, GOLD, -3) +
      flame(236, 104, 1.3) + flame(254, 114, .9, "fl2") +
      tag("RR", 200, 206, 26, "#e9e3d2", -10) +
      /* sidewalk */
      '<rect x="0" y="222" width="400" height="38" fill="#7b766c"/><rect x="0" y="222" width="400" height="4" fill="#aaa498"/>' +
      /* sign pole and traffic light */
      '<rect x="318" y="40" width="6" height="186" fill="#3b3f3c"/>' +
      sign(270, 44, "SOUNDVIEW AV") + sign(272, 68, "WATSON AV") +
      '<rect x="336" y="96" width="22" height="58" rx="3" fill="#222"/>' +
      '<circle cx="347" cy="108" r="6" fill="#d23b2a" class="blk"/><circle cx="347" cy="125" r="6" fill="#4a3a14"/><circle cx="347" cy="142" r="6" fill="#1f9a4a" class="blk blk2"/>' +
      '<rect x="324" y="118" width="12" height="4" fill="#3b3f3c"/>' +
      /* fire hydrant: the opposite of H2O on the corner */
      '<rect x="288" y="200" width="16" height="22" rx="3" fill="#d23b2a"/><rect x="284" y="198" width="24" height="5" rx="2" fill="#b02a1c"/><circle cx="296" cy="210" r="3" fill="#ffc23a"/>',
      sky("dg5", "#1a1030", "#6a3a5a"));
  }

  window.SCENES = { train, bronxdale, silos, rideout, corner };
})();

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: far across Soundview, a small dark shape on the horizon with fireworks going off high above it */
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
      Y.far(270, 222, .55, { c: "#241a30", halo: 70 }) + Y.fireworks([[296, 124, 22, "#ff8c1a"], [354, 156, 18, "#ff4a8a"], [380, 112, 14, "#ffd23f"]]) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
