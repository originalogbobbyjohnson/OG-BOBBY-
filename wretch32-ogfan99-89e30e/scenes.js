/* Wretch 32 scenes (Regions tab: UK + EUROPE; Tottenham, North London - Jermaine Scott, born 1985, raised on the Tiverton Estate, Tottenham N15;
   Combination Chain Gang, then The Movement; Black and White went to number one in 2011; mentor to Avelino (Young Fire, Old Flame)).
   1 Seven Sisters station (Victoria line, deep tube): white tiled tunnel, light-blue line band, a silver train with red doors pulling in.
   2 The Tiverton Estate, N15: low-rise brick blocks with deck balconies, windows lighting up, a ball bouncing on the green.
   3 Markfield Beam Engine House, Markfield Park: the Victorian yellow-brick engine house and its tall chimney, the beam rocking.
   4 Tottenham Green: the old Tottenham Town Hall (white stone, green copper dome) beside the Bernie Grant Arts Centre.
   5 Seven Sisters Road at the High Road, N15: London street plates, WRETCH 32 tagged, the seven hornbeams of Page Green behind (the trees the area is named after).
   Adele's kit has Tottenham Hale / Bruce Grove / High Cross and Avelino's kit has White Hart Lane / Bruce Castle / the marshes / the stadium, so those stay out.
   CSS classes prefixed "wrx" (the page's own anim-train is kept). No logos (no roundel), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wrxCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.wrxCloud{animation:wrxCloud 28s linear infinite}.wrxC2{animation-delay:-14s}' +
    '@keyframes wrxWin{0%,100%{opacity:.15}50%{opacity:1}}.wrxW{animation:wrxWin 3s steps(1) infinite}.wrxW2{animation-delay:-1s}.wrxW3{animation-delay:-2s}' +
    '@keyframes wrxBall{0%{transform:translate(0,0)}25%{transform:translate(60px,-40px)}50%{transform:translate(120px,0)}75%{transform:translate(60px,-26px)}100%{transform:translate(0,0)}}.wrxBall{animation:wrxBall 3s ease-in-out infinite}' +
    '@keyframes wrxBeam{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.wrxBeam{transform-box:fill-box;transform-origin:50% 50%;animation:wrxBeam 2.6s ease-in-out infinite}' +
    '@keyframes wrxSmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(18px,-40px);opacity:0}}.wrxSmoke{animation:wrxSmoke 3s ease-out infinite}.wrxS2{animation-delay:1s}.wrxS3{animation-delay:2s}' +
    '@keyframes wrxBus{0%{transform:translateX(-220px)}100%{transform:translateX(560px)}}.wrxBus{animation:wrxBus 10s linear infinite}' +
    '@keyframes wrxLeaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.wrxLeaf{transform-box:fill-box;transform-origin:50% 100%;animation:wrxLeaf 3.2s ease-in-out infinite}.wrxL2{animation-delay:-1.6s}' +
    '@keyframes wrxFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.wrxFlag{transform-box:fill-box;transform-origin:0 50%;animation:wrxFlag 1.3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const VIC = "#0098d4", GOLD = "#d6b25e", STOCK = "#d9c08a";
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="wrxCloud"><ellipse cx="40" cy="36" rx="34" ry="10"/><ellipse cx="62" cy="29" rx="20" ry="9"/></g>' +
    '<g class="wrxCloud wrxC2"><ellipse cx="40" cy="66" rx="28" ry="8"/><ellipse cx="56" cy="60" rx="16" ry="8"/></g></g>';

  /* 1. Seven Sisters - Victoria line deep-level platform */
  function wrxstation() {
    let tiles = "";
    for (let x = 0; x < 400; x += 16) tiles += '<path d="M' + x + ' 30v100" stroke="#d6dbe0" stroke-width="1"/>';
    for (let y = 38; y < 130; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6dbe0" stroke-width="1"/>';
    let wins = "";
    for (const x of [30, 66, 150, 186, 270]) wins += '<rect x="' + x + '" y="148" width="26" height="20" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 140h300q26 0 30 24v34H10z" fill="#e9eaec" stroke="#2a2a2a" stroke-width="2"/>' + wins +
      '<g fill="#d0202a"><rect x="112" y="150" width="20" height="46"/><rect x="232" y="150" width="20" height="46"/></g>' +
      '<g fill="#9fb3c4"><rect x="115" y="154" width="6" height="22"/><rect x="123" y="154" width="6" height="22"/><rect x="235" y="154" width="6" height="22"/><rect x="243" y="154" width="6" height="22"/></g>' +
      '<rect x="10" y="186" width="330" height="8" fill="#1f3f9a"/><path d="M314 150q20 2 22 22h-22z" fill="#d0202a"/><rect x="326" y="180" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="50" cy="201" r="6"/><circle cx="74" cy="201" r="6"/><circle cx="270" cy="201" r="6"/><circle cx="294" cy="201" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#151a22"/>' +
      '<path d="M0 130V40Q200 -6 400 40v90z" fill="#eef1f3"/>' + '<g clip-path="url(#wrxT)">' + tiles + '</g>' +
      '<path d="M0 112h400v12H0z" fill="' + VIC + '"/>' +
      '<path d="M0 130h400v80H0z" fill="#22262c"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#5b5f68"/><rect x="0" y="206" width="400" height="6" fill="#f2c14e"/>' +
      '<g transform="translate(110 54)"><rect width="180" height="40" rx="4" fill="#10245a" stroke="#fff" stroke-width="2"/>' +
      '<text x="72" y="27" ' + F + ' font-size="16" fill="#fff" text-anchor="middle">Seven Sisters</text>' +
      '<circle cx="158" cy="20" r="12" fill="' + VIC + '" stroke="#fff" stroke-width="2"/><text x="158" y="25" ' + F + ' font-size="13" fill="#fff" text-anchor="middle">V</text></g>' +
      '<g ' + F + ' font-size="9" fill="#fff"><text x="14" y="236">VICTORIA LINE · NORTHBOUND</text><text x="300" y="236">WAY OUT</text></g>' +
      '<path d="M352 232l10 0l-4 -4m4 4l-4 4" stroke="#fff" stroke-width="2" fill="none"/>',
      '<clipPath id="wrxT"><path d="M0 112V40Q200 -6 400 40v72z"/></clipPath>');
  }

  /* 2. The Tiverton Estate - low-rise brick blocks, deck balconies, a ball on the green */
  function wrxestate() {
    let win = ""; const cls = ["wrxW", "wrxW wrxW2", "wrxW wrxW3", ""]; let k = 0;
    const block = (x, y, w, floors) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (floors * 30) + '" fill="#8e4f3a"/>';
      for (let f = 0; f < floors; f++) {
        const fy = y + f * 30;
        s += '<rect x="' + x + '" y="' + (fy + 22) + '" width="' + w + '" height="5" fill="#e6e2d8"/>';
        for (let wx = x + 8; wx < x + w - 14; wx += 22) { s += '<rect x="' + wx + '" y="' + (fy + 6) + '" width="12" height="12" fill="#ffd98a" class="' + cls[k++ % 4] + '"/>'; }
      }
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#wrxs2)"/>' + clouds(.6) +
      block(20, 70, 170, 4) + block(214, 100, 170, 3) +
      '<g stroke="#e6e2d8" stroke-width="2"><path d="M190 100v90M214 100v90"/></g><rect x="190" y="150" width="24" height="40" fill="#5a3a2a"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5f9a4e"/>' +
      '<path d="M0 222h400" stroke="#4d8640" stroke-width="2"/>' +
      '<g class="wrxBall"><circle cx="130" cy="214" r="7" fill="#fff" stroke="#222" stroke-width="1.5"/><path d="M126 211l4 -2l4 2l-1 4h-6z" fill="#222"/></g>' +
      '<g fill="#3a3e46"><rect x="40" y="196" width="4" height="30"/><rect x="40" y="196" width="44" height="4"/><rect x="80" y="196" width="4" height="30"/>' +
      '<rect x="316" y="196" width="4" height="30"/><rect x="316" y="196" width="44" height="4"/><rect x="356" y="196" width="4" height="30"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="10" fill="#fff" letter-spacing="3">THE TIVERTON ESTATE · N15</text>',
      sky("wrxs2", "#6f8fb8", "#e8c9a0"));
  }

  /* 3. Markfield Beam Engine House - yellow stock brick, tall chimney, the beam rocking */
  function wrxengine() {
    return svg(
      '<rect width="400" height="260" fill="url(#wrxs3)"/>' + clouds(.8) +
      /* chimney + smoke */
      '<path d="M286 40h22l4 150h-30z" fill="' + STOCK + '" stroke="#a88a5a" stroke-width="2"/><rect x="282" y="34" width="30" height="8" fill="#a88a5a"/>' +
      '<g fill="#cfcfcf"><circle cx="297" cy="28" r="7" class="wrxSmoke"/><circle cx="297" cy="28" r="6" class="wrxSmoke wrxS2"/><circle cx="297" cy="28" r="5" class="wrxSmoke wrxS3"/></g>' +
      /* engine house */
      '<rect x="90" y="96" width="160" height="104" fill="' + STOCK + '" stroke="#a88a5a" stroke-width="2"/>' +
      '<path d="M84 98l86 -44l86 44z" fill="#5d6a72"/>' +
      '<g fill="#3a4a56">' + [108, 158, 208].map(x => '<rect x="' + x + '" y="118" width="22" height="46" rx="11"/>').join("") + '</g>' +
      '<g stroke="' + STOCK + '" stroke-width="2">' + [119, 169, 219].map(x => '<path d="M' + x + ' 118v46M' + (x - 11) + ' 140h22"/>').join("") + '</g>' +
      '<rect x="156" y="172" width="28" height="28" fill="#5a3a2a"/>' +
      /* the beam engine seen through the big window above the door */
      '<circle cx="170" cy="78" r="14" fill="#2a2d36" stroke="#a88a5a" stroke-width="2"/>' +
      '<g class="wrxBeam"><rect x="130" y="74" width="80" height="8" rx="3" fill="#2e7a4a" stroke="#1a3a26" stroke-width="1.5"/></g>' +
      '<circle cx="170" cy="78" r="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5d9b4e"/><path d="M0 230q200 -14 400 0v30H0z" fill="#d9c9a6"/>' +
      '<g class="wrxLeaf"><rect x="40" y="150" width="8" height="54" fill="#5a3d26"/><circle cx="44" cy="140" r="28" fill="#3f7d3a"/></g>' +
      '<g class="wrxLeaf wrxL2"><rect x="356" y="160" width="7" height="44" fill="#5a3d26"/><circle cx="360" cy="150" r="22" fill="#4a8c42"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="10" fill="#3a2a1a" letter-spacing="3">MARKFIELD BEAM ENGINE · N15</text>',
      sky("wrxs3", "#8ec0e4", "#f2e6c8"));
  }

  /* 4. Tottenham Green - the old Town Hall (white stone, green copper dome) beside the Bernie Grant Arts Centre */
  function wrxgreen() {
    let cols = "";
    for (let x = 70; x <= 210; x += 28) cols += '<rect x="' + x + '" y="120" width="8" height="70" fill="#f1ede4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#wrxs4)"/>' + clouds(.7) +
      /* town hall */
      '<rect x="56" y="100" width="176" height="100" fill="#e9e3d6" stroke="#b9b1a0" stroke-width="2"/>' +
      '<path d="M50 100h188l-94 -22z" fill="#d9d1c0"/>' +
      '<rect x="126" y="56" width="36" height="26" fill="#e9e3d6" stroke="#b9b1a0" stroke-width="2"/>' +
      '<path d="M122 58q22 -30 44 0z" fill="#5fa58a" stroke="#3d7a62" stroke-width="2"/><path d="M144 30v-10" stroke="#3d7a62" stroke-width="2"/>' +
      '<g class="wrxFlag"><path d="M144 20h14l-3 4l3 4h-14z" fill="' + GOLD + '"/></g>' +
      cols + '<g fill="#3a4a56"><rect x="80" y="130" width="14" height="22"/><rect x="108" y="130" width="14" height="22"/><rect x="164" y="130" width="14" height="22"/><rect x="192" y="130" width="14" height="22"/></g>' +
      '<rect x="132" y="156" width="24" height="44" rx="12" fill="#5a3a2a"/>' +
      /* arts centre: dark angular block, big glazed front */
      '<path d="M246 92h120v108H246z" fill="#2f2c2a"/><path d="M246 92l60 -18l60 18z" fill="#3d3936"/>' +
      '<rect x="258" y="120" width="96" height="56" fill="#f2c14e" opacity=".85" class="wrxW"/>' +
      '<g stroke="#2f2c2a" stroke-width="3"><path d="M282 120v56M306 120v56M330 120v56M258 148h96"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5d9b4e"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + F + ' font-size="10" fill="#fff" letter-spacing="3">TOTTENHAM GREEN · N15</text>',
      sky("wrxs4", "#7fa6d0", "#efd9b0"));
  }

  /* 5. Seven Sisters Road at the High Road - street plates, WRETCH 32 tagged, the seven hornbeams of Page Green behind */
  function wrxcorner() {
    const plate = (x, y, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="138" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="69" y="20" text-anchor="middle" ' + F + ' font-size="11.5" fill="#111">' + name + '</text>' +
      '<rect x="0" y="25" width="138" height="9" fill="#c4202e"/><text x="69" y="32" text-anchor="middle" ' + F + ' font-size="6.5" fill="#fff">' + dist + '</text></g>';
    let trees = "";
    for (let i = 0; i < 7; i++) {
      const x = 46 + i * 50, r = 26 + (i % 3) * 3;
      trees += '<g class="wrxLeaf' + (i % 2 ? ' wrxL2' : '') + '"><rect x="' + (x - 3) + '" y="70" width="6" height="50" fill="#5a3d26"/><circle cx="' + x + '" cy="' + (66 - (i % 2) * 6) + '" r="' + r + '" fill="' + (i % 2 ? '#3f7d3a' : '#4a8c42') + '"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#wrxs5)"/>' + clouds(.6) + trees +
      '<rect x="0" y="116" width="400" height="94" fill="#3a3d46"/>' +
      '<g stroke="#2e3038" stroke-width="1">' + [128, 144, 160, 176, 192].map(y => '<path d="M0 ' + y + 'h400"/>').join("") + '</g>' +
      tag("WRETCH 32", 16, 174, 31, "#f2f2f2", -6) + tag("FR32", 150, 204, 20, GOLD, -4) +
      '<g class="wrxBus"><rect x="0" y="196" width="120" height="44" rx="6" fill="#d0202a"/><g fill="#1d2a33"><rect x="8" y="202" width="20" height="12"/><rect x="34" y="202" width="20" height="12"/><rect x="60" y="202" width="20" height="12"/><rect x="86" y="202" width="20" height="12"/>' +
      '<rect x="8" y="220" width="20" height="10"/><rect x="34" y="220" width="20" height="10"/><rect x="60" y="220" width="20" height="10"/></g><circle cx="24" cy="242" r="7" fill="#111"/><circle cx="98" cy="242" r="7" fill="#111"/></g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#2a2a30"/>' +
      '<rect x="378" y="100" width="6" height="146" fill="#2a2a2a"/>' +
      plate(238, 104, "SEVEN SISTERS ROAD", "N15 · HARINGEY") + plate(238, 140, "HIGH ROAD", "N15 · HARINGEY"),
      sky("wrxs5", "#5f7fae", "#e8b98a"));
  }

  window.SCENES = { wrxstation, wrxestate, wrxengine, wrxgreen, wrxcorner };
})();
