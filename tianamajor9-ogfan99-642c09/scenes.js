/* Tiana Major9 scenes (Regions tab: UK + EUROPE; born and raised in Newham, East London; sang in a church choir from age 5).
   1 Canning Town station (Jubilee line + DLR): open platform, the DLR on its viaduct above, a Jubilee train pulling in.
   2 Sunday church choir: red-brick chapel, choir robes swaying, notes rising (she sang with the elders from age 5).
   3 The Thames Barrier from Thames Barrier Park, Silvertown: the row of shining steel hoods across the river, a boat sliding through.
   4 The cable car over Royal Victoria Dock: white gondolas gliding between the tall towers, the dock water below.
   5 Victoria Dock Road and Freemasons Road, E16: London street plates, TIANA tagged on the brick, the cable car towers behind.
   CSS classes prefixed "tm-" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tmCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.tm-cloud{animation:tmCloud 26s linear infinite}.tm-c2{animation-delay:-13s}' +
    '@keyframes tmBlink{0%,100%{opacity:1}50%{opacity:.2}}.tm-blink{animation:tmBlink 1.2s steps(1) infinite}.tm-b2{animation-delay:-.6s}' +
    '@keyframes tmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.tm-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tmSway 1.8s ease-in-out infinite}.tm-sw2{animation-delay:-.9s}' +
    '@keyframes tmNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}.tm-note{animation:tmNote 3s linear infinite}.tm-n2{animation-delay:-1s}.tm-n3{animation-delay:-2s}' +
    '@keyframes tmBoat{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.tm-boat{animation:tmBoat 12s linear infinite}' +
    '@keyframes tmGon{0%{transform:translate(0,0)}100%{transform:translate(240px,-50px)}}.tm-gon{animation:tmGon 9s linear infinite}.tm-g2{animation-delay:-3s}.tm-g3{animation-delay:-6s}' +
    '@keyframes tmShine{0%,100%{opacity:.2}50%{opacity:.8}}.tm-shine{animation:tmShine 2.6s ease-in-out infinite}.tm-sh2{animation-delay:-1.3s}' +
    '@keyframes tmWave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.tm-wave{animation:tmWave 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const JUB = "#a0a5a9", DLR = "#00a4a7", LAV = "#b48cff", GOLD = "#f2c14e", BRICK = "#9a4a32";
  const clouds = '<g fill="#fff" opacity=".7"><g class="tm-cloud"><ellipse cx="40" cy="40" rx="34" ry="10"/><ellipse cx="60" cy="34" rx="20" ry="9"/></g>' +
    '<g class="tm-cloud tm-c2"><ellipse cx="40" cy="70" rx="28" ry="8"/><ellipse cx="56" cy="64" rx="16" ry="8"/></g></g>';
  const bricks = (x0, y0, w, h, c) => { let s = ""; for (let y = y0; y < y0 + h; y += 9) for (let x = x0 + (((y - y0) / 9) % 2 ? -12 : 0); x < x0 + w; x += 24) s += '<rect x="' + Math.max(x0, x) + '" y="' + y + '" width="' + Math.min(22, x0 + w - Math.max(x0, x)) + '" height="7" fill="' + c + '"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="tm-note ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-14l9-3v14" stroke="' + c + '" stroke-width="1.8" fill="none"/><circle cx="' + (x - 2.5) + '" cy="' + y + '" r="3" fill="' + c + '"/><circle cx="' + (x + 6.5) + '" cy="' + (y - 3) + '" r="3" fill="' + c + '"/></g>';
  const plate = (x, y, w, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="' + w + '" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
    '<text x="' + (w / 2) + '" y="17" ' + F + ' font-size="11" fill="#111" text-anchor="middle" textLength="' + (w - 12) + '" lengthAdjust="spacingAndGlyphs">' + name + '</text>' +
    '<text x="' + (w / 2) + '" y="29" ' + F + ' font-size="6.5" fill="#c8102e" text-anchor="middle" textLength="' + (w - 16) + '" lengthAdjust="spacingAndGlyphs">' + dist + '</text></g>';

  /* 1. Canning Town station: Jubilee line platform, the DLR on its concrete viaduct above, a silver Jubilee train pulling in */
  function tmstation() {
    let wins = "";
    for (const x of [30, 66, 150, 186, 270]) wins += '<rect x="' + x + '" y="150" width="26" height="20" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 142h300q26 0 30 24v34H10z" fill="#d9dde0" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="10" y="142" width="330" height="6" fill="#c8102e"/>' + wins +
      '<g fill="#c8102e"><rect x="112" y="152" width="20" height="46"/><rect x="232" y="152" width="20" height="46"/></g>' +
      '<g fill="#9fb3c4"><rect x="115" y="156" width="6" height="20"/><rect x="123" y="156" width="6" height="20"/><rect x="235" y="156" width="6" height="20"/><rect x="243" y="156" width="6" height="20"/></g>' +
      '<rect x="10" y="190" width="330" height="5" fill="#1f3f9a"/><path d="M314 152q20 2 22 22h-22z" fill="#1d2a33"/><rect x="326" y="184" width="10" height="5" fill="#fff3b0" class="tm-blink"/>' +
      '<g fill="#161616"><circle cx="50" cy="203" r="6"/><circle cx="74" cy="203" r="6"/><circle cx="270" cy="203" r="6"/><circle cx="294" cy="203" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tmS1)"/>' + clouds +
      /* DLR viaduct above, with a little teal-doored DLR train */
      '<rect x="0" y="40" width="400" height="16" fill="#b8b4ac"/><rect x="0" y="56" width="400" height="5" fill="#8f8a80"/>' +
      '<g fill="#a8a39a"><rect x="50" y="61" width="16" height="74"/><rect x="200" y="61" width="16" height="74"/><rect x="340" y="61" width="16" height="74"/></g>' +
      '<g class="tm-boat"><rect x="0" y="22" width="90" height="18" rx="4" fill="#f2f2ee" stroke="#333"/><rect x="0" y="34" width="90" height="4" fill="' + DLR + '"/>' +
      '<g fill="#1d2a33"><rect x="8" y="25" width="14" height="8"/><rect x="28" y="25" width="14" height="8"/><rect x="48" y="25" width="14" height="8"/><rect x="68" y="25" width="14" height="8"/></g></g>' +
      /* canopy */
      '<path d="M0 96h400v10H0z" fill="#3b3f46"/><g fill="#5a5f68"><rect x="120" y="106" width="6" height="36"/><rect x="290" y="106" width="6" height="36"/></g>' +
      '<path d="M0 136h400v70H0z" fill="#2a2620"/>' + train +
      '<rect x="0" y="208" width="400" height="52" fill="#6a645c"/><rect x="0" y="208" width="400" height="6" fill="#e8d34a"/>' +
      '<g transform="translate(86 64)"><rect width="228" height="30" rx="4" fill="#0e1b4d" stroke="#fff" stroke-width="2"/>' +
      '<text x="74" y="21" ' + F + ' font-size="15" fill="#fff" text-anchor="middle">Canning Town</text>' +
      '<rect x="150" y="6" width="34" height="18" rx="9" fill="' + JUB + '"/><text x="167" y="19" ' + F + ' font-size="9" fill="#111" text-anchor="middle">JUB</text>' +
      '<rect x="188" y="6" width="34" height="18" rx="9" fill="' + DLR + '"/><text x="205" y="19" ' + F + ' font-size="9" fill="#fff" text-anchor="middle">DLR</text></g>' +
      '<g ' + F + ' font-size="9" fill="#fff"><text x="14" y="238">JUBILEE LINE · DLR · NEWHAM E16</text><text x="300" y="238">WAY OUT</text></g>' +
      '<path d="M352 234l10 0l-4 -4m4 4l-4 4" stroke="#fff" stroke-width="2" fill="none"/>',
      sky('tmS1', '#6c8fc0', '#d9e4ee'));
  }

  /* 2. Sunday choir: the red-brick chapel, doors open, choir robes swaying, notes rising */
  function tmchoir() {
    let robes = "";
    const cols = [LAV, GOLD, LAV, GOLD, LAV, GOLD, LAV];
    for (let i = 0; i < 7; i++) robes += '<g class="tm-sway' + (i % 2 ? " tm-sw2" : "") + '"><path d="M' + (96 + i * 32) + ' 230l8 -44h16l8 44z" fill="' + cols[i] + '" stroke="#2a1840" stroke-width="1.5"/><circle cx="' + (112 + i * 32) + '" cy="178" r="9" fill="#3a2418"/><path d="M' + (104 + i * 32) + ' 190h16" stroke="#fff" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tmS2)"/>' + clouds +
      '<rect x="60" y="80" width="280" height="160" fill="' + BRICK + '"/>' + bricks(60, 80, 280, 160, "#a8573c") +
      '<path d="M50 84l150 -60l150 60z" fill="#5a3a34"/><rect x="194" y="10" width="12" height="30" fill="#e9e2d2"/><rect x="188" y="18" width="24" height="7" fill="#e9e2d2"/>' +
      '<path d="M176 140v-30a24 24 0 0 1 48 0v30z" fill="#3a5a8a"/><path d="M200 86v54M176 118h48" stroke="#e9e2d2" stroke-width="2"/>' +
      '<g class="tm-shine"><path d="M176 140v-30a24 24 0 0 1 48 0v30z" fill="' + GOLD + '" opacity=".3"/></g>' +
      '<path d="M84 140v-24a12 12 0 0 1 24 0v24zM292 140v-24a12 12 0 0 1 24 0v24z" fill="#3a5a8a"/>' +
      '<rect x="80" y="160" width="240" height="80" fill="#2a1a14"/><g opacity=".35" class="tm-shine tm-sh2"><rect x="80" y="160" width="240" height="80" fill="' + GOLD + '"/></g>' +
      robes +
      note(140, 160, GOLD) + note(220, 150, "#fff", "tm-n2") + note(270, 162, LAV, "tm-n3") +
      '<rect x="0" y="240" width="400" height="20" fill="#7a746a"/>' +
      '<rect x="110" y="244" width="180" height="14" rx="3" fill="#1a1028" stroke="' + LAV + '" stroke-width="1"/>' +
      '<text x="200" y="254.5" text-anchor="middle" ' + A + ' font-size="10" fill="' + LAV + '" textLength="168" lengthAdjust="spacingAndGlyphs">SUNDAY CHOIR · SINGING SINCE AGE FIVE</text>',
      sky('tmS2', '#7fa8d8', '#f2dcc8'));
  }

  /* 3. The Thames Barrier from Thames Barrier Park, Silvertown: the row of shining steel hoods on their piers across the river, a boat sliding through */
  function tmbarrier() {
    let hoods = "";
    for (let i = 0; i < 7; i++) {
      const x = 22 + i * 54;
      hoods += '<rect x="' + (x + 8) + '" y="140" width="22" height="40" fill="#cfd2cf"/>' +
        '<path d="M' + x + ' 142q0 -40 19 -46q19 6 19 46z" fill="#d8dde2" stroke="#7b8894" stroke-width="2"/>' +
        '<path d="M' + (x + 6) + ' 140q2 -30 13 -38M' + (x + 32) + ' 140q-2 -30 -13 -38M' + (x + 19) + ' 102v38" stroke="#9aa6b1" stroke-width="1.5" fill="none"/>' +
        '<path d="M' + (x + 4) + ' 130q14 -28 20 -32" stroke="#fff" stroke-width="2" fill="none" class="tm-shine' + (i % 2 ? " tm-sh2" : "") + '"/>';
    }
    let hedges = "";
    for (let i = 0; i < 8; i++) hedges += '<path d="M' + (i * 52) + ' 236q26 -18 52 0" fill="#3f7a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tmS3)"/>' + clouds +
      '<rect x="0" y="120" width="400" height="10" fill="#7d8a7a"/><rect x="40" y="108" width="40" height="12" fill="#8a8f96"/><rect x="300" y="104" width="60" height="16" fill="#8a8f96"/>' +
      '<rect x="0" y="130" width="400" height="76" fill="#5b7f99"/>' +
      '<g class="tm-wave"><path d="M0 190q20 -6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#a7c6da" stroke-width="2" fill="none"/></g>' +
      hoods +
      '<g class="tm-boat"><path d="M0 196h60l-8 10H8z" fill="#b8352a"/><rect x="18" y="186" width="26" height="10" fill="#f4efe2"/><rect x="34" y="178" width="4" height="8" fill="#333"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#6aa04e"/>' + hedges +
      '<rect x="96" y="238" width="208" height="18" rx="3" fill="#1a1028" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<text x="200" y="251" text-anchor="middle" ' + A + ' font-size="11" fill="' + GOLD + '" textLength="194" lengthAdjust="spacingAndGlyphs">THAMES BARRIER PARK · SILVERTOWN</text>',
      sky('tmS3', '#8ab6dc', '#eef2f0'));
  }

  /* 4. The cable car over Royal Victoria Dock: white gondolas gliding up between the tall towers, dock water below */
  function tmcable() {
    const tower = (x, h) => '<path d="M' + (x - 14) + ' 220l14 -' + h + 'l14 ' + h + 'z" fill="none" stroke="#e9ecef" stroke-width="5"/><path d="M' + (x - 10) + ' ' + (220 - h * .5) + 'h20" stroke="#e9ecef" stroke-width="3"/><rect x="' + (x - 16) + '" y="' + (214 - h) + '" width="32" height="8" fill="#e9ecef"/>';
    const gon = (cls) => '<g class="tm-gon ' + cls + '"><path d="M80 103v12" stroke="#555" stroke-width="2"/><rect x="69" y="115" width="22" height="18" rx="6" fill="#fff" stroke="#555" stroke-width="1.5"/><rect x="73" y="119" width="14" height="7" rx="2" fill="#2b3e55"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tmS4)"/>' + clouds +
      '<g fill="#7a8796"><rect x="0" y="176" width="30" height="40"/><rect x="34" y="160" width="22" height="56"/><rect x="330" y="150" width="24" height="66"/><rect x="360" y="170" width="40" height="46"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a7590"/>' +
      '<g class="tm-wave"><path d="M0 230q20 -5 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#9cc0d6" stroke-width="2" fill="none"/></g>' +
      tower(80, 120) + tower(320, 170) +
      '<path d="M80 102L320 52" stroke="#555" stroke-width="1.5"/><path d="M80 110L320 60" stroke="#555" stroke-width="1"/>' +
      '<g clip-path="url(#tmClip)">' + gon("") + gon("tm-g2") + gon("tm-g3") + '</g>' +
      '<rect x="110" y="240" width="180" height="16" rx="3" fill="#1a1028" stroke="' + LAV + '" stroke-width="1"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + A + ' font-size="10.5" fill="' + LAV + '">ROYAL VICTORIA DOCK · E16</text>',
      sky('tmS4', '#7aa6d6', '#f6d6c0') + '<clipPath id="tmClip"><rect x="60" y="0" width="270" height="260"/></clipPath>');
  }

  /* 5. The corner: Victoria Dock Rd and Freemasons Rd, E16 — London street plates, TIANA tagged on the brick, the cable car towers up behind */
  function tmcorner() {
    let stars = "";
    for (let i = 0; i < 24; i++) stars += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tmS5)"/>' + stars +
      '<path d="M150 112l14 -80l14 80z" fill="none" stroke="#d8dce6" stroke-width="3" opacity=".8"/><path d="M250 112l12 -60l12 60z" fill="none" stroke="#d8dce6" stroke-width="3" opacity=".8"/>' +
      '<path d="M164 36L262 56" stroke="#bbb" stroke-width="1"/><rect x="200" y="40" width="10" height="8" rx="3" fill="#fff" class="tm-blink"/>' +
      '<rect x="0" y="100" width="400" height="12" fill="#2a2440"/>' +
      '<rect x="0" y="112" width="400" height="104" fill="#7a3a26"/>' + bricks(0, 112, 400, 104, BRICK) +
      tag("TIANA", 20, 176, 52, LAV, -5) + tag("MAJOR", 30, 206, 22, GOLD, -3) + tag("BIG UP", 168, 206, 20, "#fff", -4) +
      '<path d="M214 150l10 -18l10 18z" fill="' + GOLD + '" stroke="#000" stroke-width="1.5"/>' +
      plate(250, 120, 144, "VICTORIA DOCK ROAD", "LONDON BOROUGH OF NEWHAM · E16") +
      plate(250, 160, 144, "FREEMASONS ROAD", "LONDON BOROUGH OF NEWHAM · E16") +
      '<rect x="0" y="216" width="400" height="44" fill="#8d8b85"/><rect x="0" y="214" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="tm-boat"><rect x="0" y="230" width="70" height="22" rx="4" fill="#c8102e"/><rect x="6" y="234" width="58" height="8" fill="#2b3e55"/><circle cx="14" cy="253" r="4" fill="#111"/><circle cx="56" cy="253" r="4" fill="#111"/></g>',
      sky('tmS5', '#0b1030', '#4a2a6a'));
  }

  window.SCENES = { tmstation, tmchoir, tmbarrier, tmcable, tmcorner };
})();
