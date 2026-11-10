/* Coldplay game (GENRES: ROCK; INTERNATIONAL region: UK + EUROPE; Camden, London - the band formed in London at University
   College London (Chris Martin and Jonny Buckland met in their first week at UCL, then Guy Berryman and Will Champion),
   played their first gig as Starfish at the Laurel Tree pub in Camden, and has always called itself a London band).
   Rooms: Warren Street (Northern + Victoria lines, deep-level platforms, the nearest stop to UCL), the UCL Portico (the
   Wilkins Building's columns and dome), the Laurel Tree in Camden (first gig, as Starfish), a Music of the Spheres stadium
   night with every wristband lit, and Gower Street at Grafton Way WC1 with the red-brick Cruciform Building behind.
   CSS classes prefixed "cpl" (the page's anim-train is kept). No logos (no roundel), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cplTw{0%,100%{opacity:1}50%{opacity:.25}}.cplTw{animation:cplTw 1.8s ease-in-out infinite}.cplT2{animation-delay:.6s}.cplT3{animation-delay:1.2s}' +
    '@keyframes cplBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.cplBob{animation:cplBob .7s ease-in-out infinite}.cplBb2{animation-delay:.35s}' +
    '@keyframes cplHue{0%{fill:#ff5fa2}25%{fill:#ffd23f}50%{fill:#3fa9f5}75%{fill:#5fe08a}100%{fill:#ff5fa2}}.cplHue{animation:cplHue 2.4s linear infinite}.cplH2{animation-delay:-.6s}.cplH3{animation-delay:-1.2s}.cplH4{animation-delay:-1.8s}' +
    '@keyframes cplBeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.cplBeam{transform-box:fill-box;transform-origin:50% 100%;animation:cplBeam 4s ease-in-out infinite}.cplBm2{animation-delay:-2s}' +
    '@keyframes cplFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.cplFloat{animation:cplFloat 3s ease-in-out infinite}.cplF2{animation-delay:-1.5s}' +
    '@keyframes cplConf{0%{transform:translateY(-20px) rotate(0)}100%{transform:translateY(240px) rotate(360deg)}}.cplConf{transform-box:fill-box;transform-origin:50% 50%;animation:cplConf 4s linear infinite}.cplC2{animation-delay:-1.3s}.cplC3{animation-delay:-2.6s}' +
    '@keyframes cplBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.cplBird{animation:cplBird 14s linear infinite}.cplBd2{animation-delay:-7s}' +
    '@keyframes cplBus{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.cplBus{animation:cplBus 10s linear infinite}' +
    '@keyframes cplNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-60px);opacity:0}}.cplNote{animation:cplNote 3s linear infinite}.cplN2{animation-delay:1s}.cplN3{animation-delay:2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const VIC = "#0098d4", NOR = "#000000", YEL = "#ffd23f", BLUE = "#3fa9f5", PINK = "#ff5fa2", STONE = "#e8e1d0";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="cplTw' + (i % 3 === 1 ? ' cplT2' : i % 3 === 2 ? ' cplT3' : '') + '"/>';
    }
    return s;
  };
  const bird = (x, y, cls) => '<g class="cplBird' + (cls || '') + '"><path d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>';

  /* 1. Warren Street: deep-level platform, cream tiles, a black Northern line band and the light-blue Victoria band, a tube train pulling in */
  function cplstation() {
    let tiles = "", wins = "";
    for (let y = 20; y < 150; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d2bf" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 20v130" stroke="#d9d2bf" stroke-width="1"/>';
    for (let x = 50; x < 280; x += 36) wins += '<rect x="' + x + '" y="134" width="24" height="20" rx="3" fill="#bfe2f5"/>';
    const train = '<g class="anim-train">' +
      '<rect x="20" y="124" width="270" height="70" rx="12" fill="#e9ecef" stroke="#2b2b2b" stroke-width="2"/>' +
      '<path d="M290 124q24 2 28 30v40h-28z" fill="#e9ecef" stroke="#2b2b2b" stroke-width="2"/>' +
      '<path d="M294 132q16 2 19 22h-19z" fill="#1d2a36"/>' +
      '<rect x="20" y="180" width="298" height="14" fill="#10245a"/>' + wins +
      '<g fill="#d81e2a"><rect x="40" y="130" width="8" height="50"/><rect x="146" y="130" width="8" height="50"/><rect x="254" y="130" width="8" height="50"/><rect x="304" y="162" width="10" height="16"/></g>' +
      '<rect x="306" y="184" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#1b1b1b"><circle cx="64" cy="198" r="7"/><circle cx="88" cy="198" r="7"/><circle cx="226" cy="198" r="7"/><circle cx="250" cy="198" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#1d2330"/>' +
      '<path d="M0 150V40Q200 -10 400 40v110z" fill="#f1ead6"/>' + '<g clip-path="url(#cplclip1)">' + tiles + '</g>' +
      '<rect x="0" y="66" width="400" height="7" fill="' + NOR + '"/><rect x="0" y="73" width="400" height="7" fill="' + VIC + '"/>' +
      /* station name board */
      '<rect x="104" y="30" width="192" height="30" rx="3" fill="#10245a" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="51" text-anchor="middle" ' + F + ' font-size="15" fill="#fff" letter-spacing="1">WARREN STREET</text>' +
      '<text x="200" y="98" text-anchor="middle" ' + F + ' font-size="9" fill="#10245a" letter-spacing="2">NORTHERN LINE · VICTORIA LINE</text>' +
      '<rect x="76" y="88" width="20" height="12" fill="' + NOR + '"/><rect x="304" y="88" width="20" height="12" fill="' + VIC + '"/>' +
      /* platform */
      '<rect x="0" y="198" width="400" height="62" fill="#5b5f68"/><rect x="0" y="198" width="400" height="6" fill="#f2c14e"/>' +
      '<text x="200" y="234" text-anchor="middle" ' + F + ' font-size="11" fill="#e9e9e9" letter-spacing="4">MIND THE GAP</text>' +
      train,
      '<clipPath id="cplclip1"><path d="M0 150V40Q200 -10 400 40v110z"/></clipPath>');
  }

  /* 2. The UCL Portico: the Wilkins Building's ten pale columns, the pediment, the grey dome with its lantern, the quad lawn, birds */
  function cplportico() {
    let cols = "";
    for (let i = 0; i < 10; i++) {
      const x = 104 + i * 21;
      cols += '<rect x="' + (x - 4) + '" y="114" width="9" height="66" fill="' + STONE + '"/><path d="M' + (x - 1) + ' 116v62M' + (x + 2) + ' 116v62" stroke="#cfc6b0" stroke-width=".8"/>' +
        '<rect x="' + (x - 6) + '" y="110" width="13" height="5" fill="#d6cdb6"/><rect x="' + (x - 6) + '" y="178" width="13" height="4" fill="#d6cdb6"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#cpls2)"/>' + bird(0, 40, '') + bird(0, 60, ' cplBd2') +
      /* wings of the building */
      '<rect x="10" y="100" width="90" height="90" fill="' + STONE + '"/><rect x="300" y="100" width="90" height="90" fill="' + STONE + '"/>' +
      '<g fill="#b9c6d2">' + [20, 46, 72, 310, 336, 362].map(x => '<rect x="' + x + '" y="116" width="16" height="24"/><rect x="' + x + '" y="152" width="16" height="24"/>').join("") + '</g>' +
      /* the dome, drum and lantern */
      '<rect x="160" y="54" width="80" height="26" fill="' + STONE + '"/><g fill="#cfc6b0">' + [168, 184, 200, 216, 232].map(x => '<rect x="' + x + '" y="58" width="4" height="20"/>').join("") + '</g>' +
      '<path d="M156 56q44 -50 88 0z" fill="#8f9aa3" stroke="#5f6870" stroke-width="2"/>' +
      '<path d="M178 40q22 -22 44 0" stroke="#5f6870" stroke-width="1.4" fill="none"/>' +
      '<rect x="192" y="14" width="16" height="14" fill="' + STONE + '"/><path d="M190 14h20l-10 -8z" fill="#8f9aa3"/>' +
      /* pediment */
      '<path d="M88 104L200 76l112 28z" fill="' + STONE + '" stroke="#cfc6b0" stroke-width="2"/>' +
      '<rect x="88" y="104" width="224" height="8" fill="#d6cdb6"/>' +
      cols +
      /* the steps, the quad */
      '<path d="M90 182h220l12 8H78z" fill="#d6cdb6"/><path d="M78 190h244l12 8H66z" fill="#cfc6b0"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#5d9a4a"/><path d="M0 198h400" stroke="#4a7d3a" stroke-width="3"/>' +
      '<path d="M170 198l-30 62h120l-30 -62z" fill="#d9cfb8"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + F + ' font-size="10" fill="#fff" letter-spacing="3">UNIVERSITY COLLEGE LONDON</text>',
      sky("cpls2", "#7fb6e6", "#e6eef4"));
  }

  /* 3. The Laurel Tree, Camden: the band's first gig - a tiny pub stage, four silhouettes, a chalkboard that says STARFISH, lights swinging */
  function cplcamden() {
    const player = (x, inst) => '<g fill="#14121c">' +
      '<circle cx="' + x + '" cy="128" r="9"/><rect x="' + (x - 10) + '" y="138" width="20" height="40" rx="6"/>' +
      '<rect x="' + (x - 9) + '" y="176" width="7" height="30"/><rect x="' + (x + 2) + '" y="176" width="7" height="30"/></g>' + (inst || '');
    const guitar = (x, c) => '<g><ellipse cx="' + (x + 2) + '" cy="164" rx="10" ry="8" fill="' + c + '"/><rect x="' + (x + 8) + '" y="146" width="26" height="4" transform="rotate(-25 ' + (x + 8) + ' 148)" fill="#3a2a1a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1020"/>' +
      /* brick back wall, warm pub glow */
      '<rect x="0" y="0" width="400" height="210" fill="#4a2a24"/>' +
      '<g stroke="#3a1f1a" stroke-width="1">' + [14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182, 196].map(y => '<path d="M0 ' + y + 'h400"/>').join("") + '</g>' +
      /* lights on a rail */
      '<rect x="40" y="10" width="320" height="5" fill="#222"/>' +
      '<path d="M100 14L60 210h80z" fill="' + YEL + '" opacity=".14" class="cplBeam"/><path d="M300 14L260 210h80z" fill="' + BLUE + '" opacity=".14" class="cplBeam cplBm2"/>' +
      '<g><circle cx="100" cy="18" r="6" fill="' + YEL + '"/><circle cx="200" cy="18" r="6" fill="' + PINK + '" class="cplTw"/><circle cx="300" cy="18" r="6" fill="' + BLUE + '"/></g>' +
      /* chalkboard */
      '<rect x="126" y="30" width="148" height="46" rx="3" fill="#1d2a24" stroke="#8a6a40" stroke-width="3"/>' +
      '<text x="200" y="52" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="16" fill="#f4f1e6">STARFISH</text>' +
      '<text x="200" y="67" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="8" fill="' + YEL + '">LIVE TONIGHT · FIRST GIG</text>' +
      /* the little stage */
      '<rect x="40" y="200" width="320" height="16" fill="#2a1a12"/>' +
      /* drum kit */
      '<g><ellipse cx="200" cy="186" rx="18" ry="14" fill="#c9c6bf" stroke="#333" stroke-width="2"/><ellipse cx="178" cy="160" rx="10" ry="3" fill="' + YEL + '"/><ellipse cx="222" cy="160" rx="10" ry="3" fill="' + YEL + '"/></g>' +
      player(200, '') +
      player(110, guitar(110, '#c0392b')) + player(290, guitar(290, '#2f6db5')) +
      /* keyboard player */
      '<g class="cplBob">' + player(340, '') + '</g><rect x="318" y="160" width="40" height="8" fill="#f7f3ea" stroke="#333" stroke-width="1"/>' +
      /* mic stand */
      '<rect x="128" y="130" width="3" height="76" fill="#888"/><circle cx="129" cy="128" r="4" fill="#555"/>' +
      '<g fill="' + YEL + '"><g class="cplNote"><circle cx="150" cy="110" r="4"/><rect x="153" y="94" width="2" height="16"/></g><g class="cplNote cplN2"><circle cx="250" cy="104" r="4"/><rect x="253" y="88" width="2" height="16"/></g><g class="cplNote cplN3"><circle cx="320" cy="112" r="4"/><rect x="323" y="96" width="2" height="16"/></g></g>' +
      /* the crowd: a handful of mates */
      '<rect x="0" y="216" width="400" height="44" fill="#120c16"/>' +
      '<g fill="#2a2032">' + [30, 70, 120, 170, 230, 280, 330, 370].map((x, i) => '<g class="cplBob' + (i % 2 ? ' cplBb2' : '') + '"><circle cx="' + x + '" cy="226" r="8"/><rect x="' + (x - 10) + '" y="234" width="20" height="30" rx="6"/></g>').join("") + '</g>' +
      '<text x="200" y="254" text-anchor="middle" ' + F + ' font-size="9" fill="' + YEL + '" letter-spacing="3">THE LAUREL TREE · CAMDEN</text>');
  }

  /* 4. A Music of the Spheres stadium night: every wristband in the crowd lit and changing colour, planets floating, confetti falling */
  function cplspheres() {
    let bands = "";
    for (let r = 0; r < 6; r++) for (let i = 0; i < 26; i++) {
      const x = 8 + i * 15 + (r % 2) * 7, y = 150 + r * 16;
      bands += '<circle cx="' + x + '" cy="' + y + '" r="3.2" class="cplHue cplH' + (1 + (i + r) % 4) + '"/>';
    }
    const conf = (x, c, k) => '<rect x="' + x + '" y="0" width="5" height="8" fill="' + c + '" class="cplConf' + (k ? ' cplC' + k : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cpls4)"/>' + stars(30, 6, 110) +
      /* stadium bowl rim */
      '<path d="M0 120q200 -40 400 0v140H0z" fill="#0b0a18"/>' +
      '<path d="M0 120q200 -40 400 0" stroke="#2a2a4a" stroke-width="3" fill="none"/>' +
      /* the stage and a big circular screen */
      '<rect x="160" y="96" width="80" height="34" fill="#151530"/><circle cx="200" cy="80" r="26" fill="none" stroke="' + YEL + '" stroke-width="3"/>' +
      '<circle cx="200" cy="80" r="18" fill="' + BLUE + '" opacity=".6" class="cplTw"/>' +
      '<path d="M170 128L120 30h18z" fill="#fff" opacity=".12" class="cplBeam"/><path d="M230 128L262 30h18z" fill="#fff" opacity=".12" class="cplBeam cplBm2"/>' +
      /* planets floating overhead */
      '<g class="cplFloat"><circle cx="70" cy="56" r="20" fill="#ff8a3d"/><ellipse cx="70" cy="56" rx="34" ry="7" fill="none" stroke="#ffd23f" stroke-width="3"/></g>' +
      '<g class="cplFloat cplF2"><circle cx="330" cy="50" r="16" fill="#7b5cff"/><circle cx="324" cy="44" r="4" fill="#a99aff"/></g>' +
      '<g class="cplFloat"><circle cx="270" cy="28" r="8" fill="#5fe08a"/></g>' +
      bands +
      conf(40, PINK, 0) + conf(110, YEL, 2) + conf(170, BLUE, 3) + conf(240, '#5fe08a', 0) + conf(300, PINK, 2) + conf(360, YEL, 3) +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="10" fill="#fff" letter-spacing="3">MUSIC OF THE SPHERES</text>',
      sky("cpls4", "#05051a", "#24164a"));
  }

  /* 5. Gower Street at Grafton Way, WC1: London street plates, COLDPLAY tagged on the wall, UCL's red-brick Cruciform Building with its gables and spires behind */
  function cplcorner() {
    const bus = '<g class="cplBus"><rect x="0" y="198" width="110" height="34" rx="5" fill="#d81e2a"/><g fill="#bfe2f5"><rect x="8" y="204" width="18" height="12"/><rect x="32" y="204" width="18" height="12"/><rect x="56" y="204" width="18" height="12"/><rect x="80" y="204" width="18" height="12"/></g><circle cx="22" cy="234" r="6" fill="#111"/><circle cx="88" cy="234" r="6" fill="#111"/></g>';
    const gable = (x, w, h) => '<path d="M' + x + ' 146V' + (146 - h) + 'l' + (w / 2) + ' -' + (w / 2.4) + 'l' + (w / 2) + ' ' + (w / 2.4) + 'V146z" fill="#b5442e"/>' +
      '<path d="M' + x + ' ' + (146 - h) + 'l' + (w / 2) + ' -' + (w / 2.4) + 'l' + (w / 2) + ' ' + (w / 2.4) + '" stroke="#e3b48a" stroke-width="3" fill="none"/>' +
      '<g fill="#f2e2c4">' + [0.2, 0.42, 0.64].map(f => '<rect x="' + (x + w * f) + '" y="' + (146 - h + 12) + '" width="' + (w * 0.14) + '" height="22"/><rect x="' + (x + w * f) + '" y="' + (146 - h + 44) + '" width="' + (w * 0.14) + '" height="22"/>').join("") + '</g>' +
      '<rect x="' + (x + w / 2 - 2) + '" y="' + (146 - h - w / 2.4 - 18) + '" width="4" height="20" fill="#7a2a1c"/><path d="M' + (x + w / 2 - 5) + ' ' + (146 - h - w / 2.4 - 18) + 'l5 -10l5 10z" fill="#7a2a1c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cpls5)"/>' + bird(0, 30, '') + bird(0, 50, ' cplBd2') +
      /* the Cruciform Building: red brick and terracotta, gables, little spires */
      '<rect x="20" y="70" width="300" height="76" fill="#a8402b"/>' +
      '<g fill="#e3b48a"><rect x="20" y="96" width="300" height="4"/><rect x="20" y="122" width="300" height="4"/></g>' +
      gable(20, 70, 70) + gable(125, 90, 90) + gable(250, 70, 70) +
      /* wall with the tags */
      '<rect x="0" y="146" width="400" height="52" fill="#4f4a5c"/>' +
      '<path d="M0 158h400M0 170h400M0 182h400" stroke="#433e50" stroke-width="1"/>' +
      tag("STARFISH", 20, 176, 17, PINK, -3) +
      tag("COLDPLAY", 100, 190, 34, YEL, -4) +
      tag("VIVA", 300, 186, 18, BLUE, -6) +
      bus +
      '<rect x="0" y="232" width="400" height="28" fill="#2f3238"/><rect x="0" y="230" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 248h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* London street name plates: white, black letters, red postcode */
      '<rect x="356" y="40" width="5" height="192" fill="#2a2a2a"/>' +
      '<rect x="262" y="46" width="134" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="329" y="61" text-anchor="middle" ' + F + ' font-size="11" fill="#111">GOWER STREET</text>' +
      '<text x="329" y="72" text-anchor="middle" ' + F + ' font-size="8" fill="#d41a1f">WC1E</text>' +
      '<rect x="270" y="80" width="126" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="333" y="96" text-anchor="middle" ' + F + ' font-size="11" fill="#111">GRAFTON WAY</text>',
      sky("cpls5", "#a9cbe8", "#efe6d4"));
  }

  window.SCENES = { cplstation, cplportico, cplcamden, cplspheres, cplcorner };
})();
