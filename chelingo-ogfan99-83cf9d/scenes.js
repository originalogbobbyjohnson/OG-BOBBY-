/* Che Lingo scenes (Regions tab: UK + EUROPE; Wandsworth, South-West London SW18 - "the Wizard of Wandsworth", raised there by
   his Jamaican grandmother; 7Wallace; "My Block").
   1 Wandsworth Town station: the raised platforms on the brick viaduct, a blue-and-white suburban train pulling in.
   2 Wandsworth Bridge: the long low steel bridge painted in pale blue, the Thames under it, a boat going by.
   3 Wandsworth Common windmill: the small white smock mill with its four sails turning, the common's grass and trees.
   4 The estate towers by the River Wandle: tall 1970s blocks, lit windows, the little river with ducks.
   5 Garratt Lane at Wandsworth High Street, SW18: London street plates, CHE LINGO tagged, the pale stone Town Hall behind.
   Avoids Monie Love's Battersea chimneys, Dave's Streatham, Loyle Carner's Croydon. CSS classes prefixed "chl".
   No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes chlCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.chlCloud{animation:chlCloud 32s linear infinite}.chlC2{animation-delay:-16s}' +
    '@keyframes chlCar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.chlCar{animation:chlCar 7s linear infinite}.chlK2{animation-delay:-3.5s}' +
    '@keyframes chlBoat{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.chlBoat{animation:chlBoat 16s linear infinite}' +
    '@keyframes chlSpin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.chlSpin{transform-box:view-box;transform-origin:200px 92px;animation:chlSpin 6s linear infinite}' +
    '@keyframes chlTw{0%,100%{opacity:1}50%{opacity:.25}}.chlTw{animation:chlTw 1.6s ease-in-out infinite}.chlT2{animation-delay:.5s}.chlT3{animation-delay:1s}' +
    '@keyframes chlBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.chlBob{animation:chlBob 1.2s ease-in-out infinite}.chlB2{animation-delay:-.6s}' +
    '@keyframes chlWave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.chlWave{animation:chlWave 3s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const BLUE = "#9ad0ff", ORANGE = "#f2a33a", SWR = "#1f3a93", BRICK = "#8e4a36", STONE = "#e9e2cf";
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="chlCloud"><ellipse cx="40" cy="34" rx="34" ry="10"/><ellipse cx="62" cy="27" rx="20" ry="9"/></g>' +
    '<g class="chlCloud chlC2"><ellipse cx="40" cy="64" rx="28" ry="8"/><ellipse cx="56" cy="58" rx="16" ry="8"/></g></g>';
  const car = (x, y, col, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + (y + 6) + '" width="44" height="12" rx="4" fill="' + col + '"/><path d="M' + (x + 8) + ' ' + (y + 6) + 'l6 -7h16l6 7z" fill="' + col + '"/>' +
    '<rect x="' + (x + 15) + '" y="' + y + '" width="7" height="5" fill="#bcd3e0"/><rect x="' + (x + 24) + '" y="' + y + '" width="7" height="5" fill="#bcd3e0"/><circle cx="' + (x + 10) + '" cy="' + (y + 18) + '" r="4" fill="#111"/><circle cx="' + (x + 34) + '" cy="' + (y + 18) + '" r="4" fill="#111"/></g>';
  const water = (y, col) => '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + col + '"/>' +
    '<g class="chlWave" stroke="#fff" stroke-width="1.5" opacity=".45" fill="none"><path d="M0 ' + (y + 12) + 'q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0"/>' +
    '<path d="M0 ' + (y + 34) + 'q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0"/></g>';

  /* 1. Wandsworth Town station - raised platforms on the brick viaduct */
  function chlstation() {
    let wins = "", arches = "";
    for (const x of [36, 70, 104, 196, 230, 264]) wins += '<rect x="' + x + '" y="108" width="26" height="20" rx="3" fill="#1d2a36"/>';
    for (let x = -10; x < 400; x += 60) arches += '<path d="M' + x + ' 260v-50q30 -30 60 0v50z" fill="#3a2018"/>';
    const train = '<g class="anim-train">' +
      '<path d="M20 98h270q28 0 32 28v36H20z" fill="#eef1f5" stroke="#2b2b2b" stroke-width="2"/>' + wins +
      '<rect x="20" y="134" width="302" height="14" fill="' + SWR + '"/><rect x="20" y="148" width="302" height="5" fill="#d0202e"/>' +
      '<rect x="150" y="104" width="30" height="56" fill="#c9ced6"/><path d="M165 104v56" stroke="#7b818a" stroke-width="2"/>' +
      '<path d="M292 104q20 2 24 22h-24z" fill="#1d2a36"/><rect x="308" y="140" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="58" cy="166" r="6"/><circle cx="82" cy="166" r="6"/><circle cx="250" cy="166" r="6"/><circle cx="274" cy="166" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#chls1)"/>' + clouds(.7) +
      '<g fill="#7d8ea0" opacity=".6"><rect x="300" y="40" width="24" height="60"/><rect x="330" y="56" width="30" height="44"/><rect x="20" y="52" width="40" height="48"/></g>' +
      /* viaduct */
      '<rect x="0" y="172" width="400" height="88" fill="' + BRICK + '"/>' + arches +
      '<path d="M0 182h400M0 194h400" stroke="#6e3527" stroke-width="1"/>' +
      '<rect x="0" y="166" width="400" height="8" fill="#9a9a96"/><rect x="0" y="166" width="400" height="3" fill="#f5d000"/>' +
      /* canopy */
      '<path d="M0 70h400v8H0z" fill="#3d4a57"/><g fill="#3d4a57"><rect x="60" y="78" width="4" height="88"/><rect x="340" y="78" width="4" height="88"/></g>' +
      train +
      /* black sign with name and line */
      '<g transform="translate(76 200)"><rect width="248" height="34" rx="4" fill="#111"/>' +
      '<text x="12" y="22" font-size="14" ' + F + ' fill="#fff">WANDSWORTH TOWN</text>' +
      '<rect x="198" y="9" width="40" height="16" rx="8" fill="' + SWR + '"/><text x="218" y="21" text-anchor="middle" font-size="10" ' + F + ' fill="#fff">SWR</text></g>',
      sky("chls1", "#86aecf", "#dbe7ef"));
  }

  /* 2. Wandsworth Bridge - long, low, pale blue steel over the Thames */
  function chlbridge() {
    let posts = "";
    for (let x = 20; x < 400; x += 24) posts += '<rect x="' + x + '" y="112" width="3" height="16" fill="#7fb3d6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#chlb1)"/>' + clouds(.75) +
      '<g fill="#8796a4" opacity=".55"><rect x="20" y="90" width="30" height="40"/><rect x="56" y="80" width="20" height="50"/><rect x="300" y="84" width="26" height="46"/><rect x="330" y="96" width="44" height="34"/></g>' +
      water(140, "#5b7a8c") +
      /* piers */
      '<g fill="#b7c3cc"><rect x="96" y="132" width="16" height="40"/><rect x="288" y="132" width="16" height="40"/></g>' +
      /* deck and the shallow blue girders */
      '<rect x="0" y="118" width="400" height="14" fill="#7fb3d6"/><path d="M0 132q100 18 200 0q100 18 200 0v8H0z" fill="#6aa2c8"/>' +
      posts + '<rect x="0" y="110" width="400" height="3" fill="#7fb3d6"/>' +
      car(0, 98, "#c8202f", "chlCar") + car(0, 98, "#f2a33a", "chlCar chlK2") +
      '<g class="chlBoat"><path d="M0 196h80l-10 14H10z" fill="#f4f1ea"/><rect x="20" y="184" width="36" height="12" fill="#2f5d8a"/><rect x="26" y="187" width="8" height="5" fill="#cfe3ee"/><rect x="40" y="187" width="8" height="5" fill="#cfe3ee"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-size="12" ' + F + ' fill="#fff" stroke="#000" stroke-width="3" paint-order="stroke" letter-spacing="2">WANDSWORTH BRIDGE</text>',
      sky("chlb1", "#9cc3df", "#e3edf3"));
  }

  /* 3. Wandsworth Common windmill - the little white mill, sails turning */
  function chlmill() {
    const sail = (a) => '<g transform="rotate(' + a + ' 200 92)"><rect x="197" y="22" width="6" height="70" fill="#5a4636"/><rect x="203" y="26" width="16" height="58" fill="#f4f1ea" stroke="#5a4636" stroke-width="1.5"/><path d="M203 40h16M203 54h16M203 68h16" stroke="#8a7a66" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#chlm1)"/>' + clouds(.8) +
      '<path d="M0 170q200 -30 400 0v90H0z" fill="#6aa44a"/>' +
      '<g fill="#3f7a35"><circle cx="50" cy="160" r="26"/><circle cx="84" cy="150" r="20"/><circle cx="340" cy="158" r="28"/><circle cx="372" cy="150" r="18"/></g>' +
      '<g fill="#5b3a24"><rect x="47" y="176" width="6" height="20"/><rect x="337" y="176" width="6" height="20"/></g>' +
      /* the mill body: white tapered octagon, dark cap, door */
      '<path d="M176 196l8 -92h32l8 92z" fill="#f4f1ea" stroke="#9c9c94" stroke-width="2"/>' +
      '<path d="M182 104q18 -22 36 0z" fill="#3b3b40"/><rect x="194" y="166" width="12" height="30" fill="#5a4636"/><rect x="194" y="130" width="10" height="12" fill="#5a7a8c"/>' +
      '<g class="chlSpin">' + sail(0) + sail(90) + sail(180) + sail(270) + '</g><circle cx="200" cy="92" r="5" fill="#3b3b40"/>' +
      '<path d="M120 260q60 -50 80 -64" stroke="#d9cfa9" stroke-width="8" fill="none" opacity=".8"/>' +
      '<text x="200" y="244" text-anchor="middle" font-size="12" ' + F + ' fill="#fff" stroke="#000" stroke-width="3" paint-order="stroke" letter-spacing="2">WANDSWORTH COMMON</text>',
      sky("chlm1", "#7fb2d9", "#d4e6f2"));
  }

  /* 4. The estate towers by the River Wandle - lit windows at dusk */
  function chltowers() {
    let wins = "";
    for (const [x0, w, top] of [[60, 70, 30], [170, 80, 14], [290, 64, 44]]) {
      for (let y = top + 10; y < 176; y += 14) for (let x = x0 + 8; x < x0 + w - 8; x += 14) {
        const lit = ((x * 7 + y * 3) % 5) < 2;
        wins += '<rect ' + (lit ? 'class="chlTw' + (((x + y) % 3) ? " chlT2" : "") + '" ' : "") + 'x="' + x + '" y="' + y + '" width="8" height="8" fill="' + (lit ? "#ffd27a" : "#2b3646") + '"/>';
      }
    }
    return svg(
      '<rect width="400" height="260" fill="url(#chlt1)"/>' +
      '<g fill="#fff" class="chlTw"><circle cx="30" cy="20" r="1.2"/><circle cx="140" cy="10" r="1"/><circle cx="370" cy="24" r="1.2"/></g>' +
      '<g fill="#59606e"><rect x="60" y="30" width="70" height="150"/><rect x="170" y="14" width="80" height="166"/><rect x="290" y="44" width="64" height="136"/></g>' +
      '<g fill="#4a505c"><rect x="60" y="30" width="70" height="6"/><rect x="170" y="14" width="80" height="6"/><rect x="290" y="44" width="64" height="6"/></g>' + wins +
      '<rect x="0" y="180" width="400" height="18" fill="#6b6b66"/>' +
      water(198, "#3d5a5a") +
      '<g class="chlBob"><ellipse cx="120" cy="216" rx="10" ry="5" fill="#7a5a3a"/><circle cx="128" cy="210" r="4" fill="#2f6b3a"/><path d="M131 210l5 1" stroke="' + ORANGE + '" stroke-width="2"/></g>' +
      '<g class="chlBob chlB2"><ellipse cx="260" cy="230" rx="10" ry="5" fill="#8a6a4a"/><circle cx="268" cy="224" r="4" fill="#8a6a4a"/><path d="M271 224l5 1" stroke="' + ORANGE + '" stroke-width="2"/></g>' +
      '<text x="200" y="252" text-anchor="middle" font-size="11" ' + F + ' fill="#fff" stroke="#000" stroke-width="3" paint-order="stroke" letter-spacing="2">RIVER WANDLE</text>',
      sky("chlt1", "#1a2140", "#7a5a7a"));
  }

  /* 5. Garratt Lane at Wandsworth High Street, SW18 - plates, CHE LINGO tag, the Town Hall behind */
  function chlcorner() {
    const plate = (x, y, w, name, sub) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 17) + '" text-anchor="middle" font-size="12" ' + F + ' fill="#111">' + name + '</text>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 27) + '" text-anchor="middle" font-size="7" ' + F + ' fill="#d0202e">' + sub + '</text></g>';
    let tw = "";
    for (let x = 40; x < 360; x += 26) tw += '<rect x="' + x + '" y="70" width="12" height="22" fill="#6b7d8c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#chlc1)"/>' + clouds(.6) +
      /* the Town Hall: long pale stone front, square clock-less tower */
      '<rect x="20" y="60" width="360" height="56" fill="' + STONE + '"/>' + tw +
      '<rect x="170" y="24" width="60" height="40" fill="' + STONE + '"/><rect x="176" y="32" width="48" height="6" fill="#cfc6ae"/><rect x="186" y="44" width="28" height="18" fill="#6b7d8c"/>' +
      '<rect x="20" y="56" width="360" height="5" fill="#cfc6ae"/>' +
      /* wall with the tag */
      '<rect x="210" y="112" width="190" height="72" fill="#b4a999"/>' +
      '<path d="M210 126h190M210 140h190M210 154h190M210 168h190" stroke="#9a8f80" stroke-width="1"/>' +
      tag("CHE LINGO", 220, 158, 30, ORANGE, -6) + tag("SW18", 330, 178, 16, BLUE, -4) +
      /* pavement and road */
      '<rect x="0" y="184" width="400" height="16" fill="#9b9b97"/><rect x="0" y="200" width="400" height="60" fill="#3c3c40"/>' +
      '<path d="M0 230h40M70 230h40M140 230h40M210 230h40M280 230h40M350 230h40" stroke="#e8e2c8" stroke-width="3"/>' +
      car(0, 206, "#d0202e", "chlCar") + car(0, 206, SWR, "chlCar chlK2") +
      '<rect x="120" y="112" width="5" height="76" fill="#333"/>' +
      plate(40, 118, 170, "WANDSWORTH HIGH ST", "LONDON SW18") + plate(64, 152, 120, "GARRATT LANE", "SW18"),
      sky("chlc1", "#8aa6bf", "#d9e2e8"));
  }

  window.SCENES = { chlstation, chlbridge, chlmill, chltowers, chlcorner };
})();
