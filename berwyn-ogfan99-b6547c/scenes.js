/* BERWYN scenes (Regions tab: UK + EUROPE; Romford, East London - Berwyn Du Bois, born in Diego Martin, Trinidad, moved to Romford at nine;
   DEMOTAPE/VEGA (Mercury-shortlisted 2021), TAPE 2/FOMALHAUT).
   1 Romford station (Elizabeth line + Overground Liberty line), up on the embankment: a white-and-purple train pulling in.
   2 Romford Market, Market Place: striped stall awnings, the black-and-white timbered old inn, bunting flapping.
   3 Raphael Park lake, Romford: the Victorian park lake, a swan gliding past the willow.
   4 Diego Martin, Trinidad: green hills, colourful houses up the slope, a plane flying out - where he was born.
   5 South Street and Market Place, RM1: London street plates, BERWYN tagged, St Edward the Confessor's spire behind.
   CSS classes prefixed "bwn" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bwnWin{0%,100%{opacity:.2}50%{opacity:1}}.bwnW{animation:bwnWin 3s steps(1) infinite}.bwnW2{animation-delay:-1s}.bwnW3{animation-delay:-2s}' +
    '@keyframes bwnFlap{0%,100%{transform:skewX(0)}50%{transform:skewX(8deg)}}.bwnFlap{animation:bwnFlap 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:top}' +
    '@keyframes bwnSwan{0%{transform:translateX(0)}50%{transform:translateX(150px)}100%{transform:translateX(0)}}.bwnSwan{animation:bwnSwan 14s ease-in-out infinite}' +
    '@keyframes bwnRip{0%{transform:scaleX(.6);opacity:.8}100%{transform:scaleX(1.4);opacity:0}}.bwnRip{animation:bwnRip 2.4s ease-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes bwnPlane{0%{transform:translate(-60px,40px)}100%{transform:translate(460px,-30px)}}.bwnPlane{animation:bwnPlane 12s linear infinite}' +
    '@keyframes bwnCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.bwnCloud{animation:bwnCloud 28s linear infinite}.bwnC2{animation-delay:-14s}' +
    '@keyframes bwnSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.bwnSp{animation:bwnSp 1.4s ease-out infinite}.bwnSp2{animation-delay:.5s}' +
    '@keyframes bwnTw{0%,100%{opacity:.3}50%{opacity:1}}.bwnTw{animation:bwnTw 2s ease-in-out infinite}.bwnTw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const ELZ = "#6950a1", LIB = "#61686b", GOLD = "#e8c15a", RED = "#d62f2f";
  const clouds = '<g fill="#fff" opacity=".7"><g class="bwnCloud"><ellipse cx="40" cy="40" rx="34" ry="10"/><ellipse cx="60" cy="34" rx="20" ry="9"/></g>' +
    '<g class="bwnCloud bwnC2"><ellipse cx="40" cy="70" rx="28" ry="8"/><ellipse cx="56" cy="64" rx="16" ry="8"/></g></g>';

  /* 1. Romford station - platforms up on the embankment over South Street */
  function bwnstation() {
    let wins = "";
    for (const x of [26, 62, 140, 176, 254, 290]) wins += '<rect x="' + x + '" y="112" width="28" height="18" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M6 104h312q30 0 36 26v32H6z" fill="#f2f2f0" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="6" y="104" width="348" height="5" fill="' + ELZ + '"/>' + wins +
      '<g fill="' + ELZ + '"><rect x="98" y="112" width="30" height="48"/><rect x="214" y="112" width="30" height="48"/></g>' +
      '<g fill="#b7c3cf"><rect x="102" y="116" width="10" height="22"/><rect x="114" y="116" width="10" height="22"/><rect x="218" y="116" width="10" height="22"/><rect x="230" y="116" width="10" height="22"/></g>' +
      '<rect x="6" y="148" width="348" height="6" fill="#555b60"/><path d="M322 112q24 2 28 22h-28z" fill="#1d2a33"/><rect x="336" y="144" width="12" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="46" cy="165" r="6"/><circle cx="70" cy="165" r="6"/><circle cx="270" cy="165" r="6"/><circle cx="294" cy="165" r="6"/></g></g>';
    let posts = "";
    for (let x = 20; x < 400; x += 76) posts += '<rect x="' + x + '" y="58" width="5" height="106" fill="#3a3f44"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bwnS1)"/>' + clouds +
      '<g fill="#7c7066"><rect x="0" y="70" width="60" height="40"/><rect x="330" y="62" width="70" height="48"/></g>' +
      '<path d="M0 52h400v10H0z" fill="#2f3338"/><path d="M0 62h400l-10 8H10z" fill="#4a5056"/>' + posts + train +
      '<rect x="0" y="168" width="400" height="18" fill="#9a958b"/><rect x="0" y="168" width="400" height="5" fill="#f2d33a"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#8a4a34"/>' +
      '<path d="M120 260v-40q80 -40 160 0v40z" fill="#2b2622"/>' +
      '<g fill="#6e3a28">' + [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (i * 60 - 10) + '" y="' + (196 + (i % 2) * 14) + '" width="40" height="6"/>').join("") + '</g>' +
      '<g transform="translate(96 72)"><rect width="208" height="28" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="64" y="19" ' + F + ' font-size="14" fill="#fff" text-anchor="middle">Romford</text>' +
      '<rect x="120" y="5" width="38" height="18" rx="9" fill="' + ELZ + '"/><text x="139" y="18" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">ELZ</text>' +
      '<rect x="164" y="5" width="38" height="18" rx="9" fill="' + LIB + '"/><text x="183" y="18" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">LIB</text></g>' +
      '<g transform="translate(150 230)"><rect width="100" height="20" rx="3" fill="#fff" stroke="#111"/><text x="50" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">SOUTH STREET</text></g>',
      sky('bwnS1', '#3b5788', '#d9a77e'));
  }

  /* 2. Romford Market, Market Place */
  function bwnmarket() {
    const stall = (x, c1, c2) => {
      let st = "";
      for (let i = 0; i < 6; i++) st += '<rect x="' + (x + i * 10) + '" y="150" width="10" height="16" fill="' + (i % 2 ? c2 : c1) + '"/>';
      return '<g><g class="bwnFlap">' + st + '<path d="M' + x + ' 166h60l-4 6h-52z" fill="' + c1 + '"/></g>' +
        '<rect x="' + (x + 2) + '" y="172" width="3" height="36" fill="#555"/><rect x="' + (x + 55) + '" y="172" width="3" height="36" fill="#555"/>' +
        '<rect x="' + (x - 2) + '" y="190" width="64" height="8" fill="#8b6a46"/>' +
        '<g>' + [0, 1, 2, 3, 4].map(i => '<circle cx="' + (x + 8 + i * 11) + '" cy="187" r="4" fill="' + ["#e84a3a", "#f2a23a", "#7cc04a", "#f2d33a", "#e84a3a"][i] + '"/>').join("") + '</g></g>';
    };
    let beams = "";
    for (let x = 270; x < 384; x += 14) beams += '<rect x="' + x + '" y="70" width="4" height="74" fill="#1e1a18"/>';
    let bunting = "";
    for (let i = 0; i < 16; i++) bunting += '<path d="M' + (i * 25) + ' ' + (46 + Math.sin(i) * 3) + 'l12 0l-6 12z" fill="' + [GOLD, RED, "#fff", ELZ][i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bwnS2)"/>' + clouds +
      '<g fill="#9b8a76"><rect x="0" y="80" width="80" height="130"/><rect x="80" y="96" width="90" height="114"/><rect x="170" y="88" width="94" height="122"/></g>' +
      '<g fill="#e9d9a0" opacity=".7"><rect x="14" y="96" width="14" height="12"/><rect x="46" y="96" width="14" height="12"/><rect x="96" y="112" width="14" height="12"/><rect x="134" y="112" width="14" height="12"/><rect x="186" y="104" width="14" height="12"/><rect x="226" y="104" width="14" height="12"/></g>' +
      '<rect x="264" y="70" width="128" height="140" fill="#f4efe4" stroke="#1e1a18" stroke-width="2"/>' + beams +
      '<path d="M264 106h128M264 144h128" stroke="#1e1a18" stroke-width="5"/><path d="M258 70l70 -34l70 34z" fill="#5a4436"/>' +
      '<g fill="#3a4a5a"><rect x="282" y="80" width="18" height="18"/><rect x="342" y="80" width="18" height="18"/><rect x="282" y="116" width="18" height="20"/><rect x="342" y="116" width="18" height="20"/></g>' +
      '<rect x="314" y="170" width="24" height="40" fill="#3a2a20"/>' +
      '<path d="M0 44q100 12 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + '<g class="bwnFlap">' + bunting + '</g>' +
      '<rect x="0" y="208" width="400" height="52" fill="#7d776e"/>' +
      '<g fill="#6a645c">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (i * 42) + '" y="' + (214 + (i % 3) * 12) + '" width="30" height="6" rx="2"/>').join("") + '</g>' +
      stall(16, RED, "#fff") + stall(96, "#2f6db0", "#fff") + stall(176, "#2e8a4a", "#fff") +
      '<g transform="translate(120 232)"><rect width="160" height="20" rx="3" fill="#fff" stroke="#111"/><text x="80" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">ROMFORD MARKET</text></g>',
      sky('bwnS2', '#6f9fd0', '#e3eef6'));
  }

  /* 3. Raphael Park lake */
  function bwnpark() {
    let reeds = "";
    for (let x = 6; x < 120; x += 7) reeds += '<path d="M' + x + ' 200q2 -14 ' + (x % 3) + ' -24" stroke="#4d7a32" stroke-width="2" fill="none"/>';
    let willow = "";
    for (let i = 0; i < 14; i++) willow += '<path d="M' + (300 + i * 6) + ' 74q-4 50 ' + (i % 2 ? 6 : -4) + ' 96" stroke="#7fae4a" stroke-width="3" fill="none" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bwnS3)"/>' + clouds +
      '<g fill="#3f7a3a"><ellipse cx="60" cy="130" rx="80" ry="34"/><ellipse cx="190" cy="124" rx="70" ry="28"/><ellipse cx="260" cy="132" rx="50" ry="22"/></g>' +
      '<rect x="0" y="136" width="400" height="20" fill="#6fae52"/>' +
      '<rect x="0" y="152" width="400" height="74" fill="url(#bwnL)"/>' +
      '<rect x="326" y="70" width="10" height="90" fill="#5a3a22"/><ellipse cx="330" cy="74" rx="44" ry="22" fill="#7fae4a"/>' + willow +
      '<g fill="#fff" opacity=".6"><path d="M40 176h40M150 196h60M260 182h50" stroke="#fff" stroke-width="2"/></g>' +
      '<g class="bwnSwan"><ellipse class="bwnRip" cx="96" cy="194" rx="30" ry="3" fill="none" stroke="#e9f4fb" stroke-width="1.5"/>' +
      '<path d="M74 190q4 -12 26 -10q14 2 20 10z" fill="#fbfbf7" stroke="#bbb" stroke-width="1"/>' +
      '<path d="M112 184q4 -18 -2 -26q-6 -4 -8 2" stroke="#fbfbf7" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M100 160l-6 2l6 1z" fill="#f08a2a"/></g>' +
      reeds +
      '<rect x="0" y="222" width="400" height="38" fill="#5c8f3e"/><path d="M0 236h400" stroke="#c9b48a" stroke-width="8"/>' +
      '<g fill="#5a3a22"><rect x="210" y="214" width="56" height="4"/><rect x="214" y="218" width="3" height="10"/><rect x="259" y="218" width="3" height="10"/><rect x="210" y="206" width="56" height="3"/></g>' +
      '<g transform="translate(132 240)"><rect width="136" height="18" rx="3" fill="#fff" stroke="#111"/><text x="68" y="13" ' + F + ' font-size="10" fill="#111" text-anchor="middle">RAPHAEL PARK</text></g>',
      sky('bwnS3', '#8cc0e6', '#eef6fb') + '<linearGradient id="bwnL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5f93b8"/><stop offset="1" stop-color="#2f5f80"/></linearGradient>');
  }

  /* 4. Diego Martin, Trinidad - where he was born */
  function bwntrini() {
    const cols = ["#f2c14e", "#e86a5a", "#5ab0d8", "#8fd06a", "#f29a3a", "#e8e0d0", "#c06ad0"];
    let houses = "";
    const spots = [[60, 150], [96, 140], [132, 128], [170, 120], [210, 126], [248, 136], [286, 146], [320, 158], [80, 176], [150, 162], [230, 164], [300, 180]];
    spots.forEach((p, i) => {
      const c = cols[i % cols.length];
      houses += '<g><rect x="' + p[0] + '" y="' + p[1] + '" width="26" height="18" fill="' + c + '" stroke="#5a4a3a" stroke-width="1"/>' +
        '<path d="M' + (p[0] - 3) + ' ' + p[1] + 'l16 -10l16 10z" fill="#b5523a"/>' +
        '<rect x="' + (p[0] + 4) + '" y="' + (p[1] + 5) + '" width="6" height="6" fill="#ffe7a0" class="bwnW' + (i % 3 ? " bwnW" + (i % 3 + 1) : "") + '"/></g>';
    });
    let palms = "";
    for (const x of [26, 370]) palms += '<path d="M' + x + ' 226q4 -50 -2 -80" stroke="#6b4a2a" stroke-width="6" fill="none"/>' +
      '<g fill="#2e8a3a"><path d="M' + (x - 2) + ' 146q-30 -6 -40 10q22 -10 40 -10z"/><path d="M' + (x - 2) + ' 146q30 -8 42 8q-22 -8 -42 -8z"/><path d="M' + (x - 2) + ' 146q-14 -24 -4 -34q0 18 4 34z"/><path d="M' + (x - 2) + ' 146q18 -20 32 -14q-18 4 -32 14z"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bwnS4)"/>' +
      '<circle cx="320" cy="62" r="24" fill="#ffd36a" opacity=".9"/>' +
      '<g class="bwnPlane"><path d="M0 60l30 -4l8 -10h4l-3 10l14 -2l4 -5h3l-2 7l-14 4l3 8h-4l-8 -6l-30 4z" fill="#f4f4f4" stroke="#556" stroke-width="1"/></g>' +
      '<path d="M0 130q60 -70 130 -40q60 -60 130 -20q60 -40 140 10v80H0z" fill="#2f7a3a"/>' +
      '<path d="M0 170q80 -60 180 -30q100 -50 220 -10v100H0z" fill="#3f9a48"/>' + houses +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4a48"/><path d="M0 232h400" stroke="#f2d33a" stroke-width="2" stroke-dasharray="14 12"/>' + palms +
      '<g transform="translate(118 236)"><rect width="164" height="20" rx="3" fill="#fff" stroke="#111"/><text x="82" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">DIEGO MARTIN, TRINIDAD</text></g>',
      sky('bwnS4', '#f08a4a', '#f7d08a'));
  }

  /* 5. South Street and Market Place, RM1 - the corner */
  function bwncorner() {
    const sign = (x, y, a, b) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="132" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="66" y="16" ' + F + ' font-size="12" fill="#111" text-anchor="middle">' + a + '</text><text x="66" y="28" ' + F + ' font-size="8" fill="#d0202a" text-anchor="middle">' + b + '</text></g>';
    let bricks = "";
    for (let y = 148; y < 226; y += 10) for (let x = (y / 10) % 2 ? 0 : -14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a4a34"/>';
    let stars = "";
    [[40, 30], [90, 18], [160, 34], [230, 16], [350, 28], [380, 60], [20, 70]].forEach((p, i) => { stars += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.8" fill="#fff" class="bwnTw' + (i % 2 ? " bwnTw2" : "") + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#bwnS5)"/>' + stars +
      '<g transform="translate(64 0)"><g fill="#8f8a80" stroke="#5a564e" stroke-width="1.5"><path d="M276 146V78h34v68z"/><path d="M276 78l17 -70l17 70z"/><path d="M250 146v-34h26v34z"/><path d="M250 112l13 -12l13 12z"/></g>' +
      '<g fill="#3a3a44"><rect x="287" y="92" width="12" height="22" rx="6"/><rect x="258" y="122" width="10" height="14" rx="5"/></g><circle cx="293" cy="84" r="4" fill="#e8c15a" class="bwnTw"/></g>' +
      '<rect x="0" y="146" width="400" height="80" fill="#6b3726"/>' + bricks +
      tag("BERWYN", 30, 206, 50, GOLD, -5) + tag("DEMOTAPE", 250, 186, 22, "#b9a6e8", 4) +
      '<g class="bwnSp"><circle cx="214" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bwnSp bwnSp2"><circle cx="222" cy="172" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a3c"/><rect x="0" y="226" width="400" height="4" fill="#9a958b"/>' +
      '<rect x="142" y="44" width="4" height="102" fill="#333"/>' +
      sign(10, 50, "SOUTH STREET", "RM1 - HAVERING") + sign(150, 92, "MARKET PLACE", "RM1 - HAVERING"),
      sky('bwnS5', '#1c1840', '#7a5aa0'));
  }

  window.SCENES = { bwnstation, bwnmarket, bwnpark, bwntrini, bwncorner };
})();
