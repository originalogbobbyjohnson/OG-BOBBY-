/* Soundview opening scenes for the Drag-On game. Each one is a small animated SVG, 400 x 260.
   Cory Gunz's game already has Parkchester's Oval, Soundview Park and Orchard Beach, so these rooms use:
   the 6 at Morrison Av-Soundview at sunset, the Bronxdale (Sotomayor) Houses courtyard jam, the pink silos of
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

  /* 1. The 6 pulling into Morrison Av-Soundview, up on the el over Westchester Av, the sky burning orange */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="128" fill="#2f3d33"/>';
    let lattice = "";
    for (let x = 0; x < W; x += 25) lattice += '<path d="M' + x + ' 196l12 14l13-14" stroke="#2f3d33" stroke-width="2.5" fill="none"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#ffe2b8" opacity=".85"/>';
    let roofs = "";
    [[0, 30], [60, 44], [110, 22], [170, 52], [240, 34], [300, 48], [350, 28]].forEach(r => roofs += '<rect x="' + r[0] + '" y="' + (120 - r[1]) + '" width="54" height="' + r[1] + '" fill="#4a2a24"/>');
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
      '<text x="74" y="89" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Morrison Av–Soundview</text>' +
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
      '<rect x="0" y="190" width="400" height="20" fill="#2f3d33"/>' + lattice +
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
