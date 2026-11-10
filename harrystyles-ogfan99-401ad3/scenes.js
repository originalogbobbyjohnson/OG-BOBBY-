/* Harry Styles game (GENRES: POP; INTERNATIONAL region: UK + EUROPE; Holmes Chapel, Cheshire, England - moved there as a small
   boy, went to Holmes Chapel Comprehensive, sang in the school band that won a battle of the bands, worked Saturdays at the
   village bakery). Solo songs only.
   Rooms: Holmes Chapel station (Crewe-Manchester line, the Twemlow Viaduct's brick arches behind), the village bakery,
   the school hall battle of the bands, the Lovell Telescope at Jodrell Bank a few miles up the road, and London Road at
   Macclesfield Road with St Luke's sandstone tower behind.
   CSS classes prefixed "hst" (the page's anim-train is kept). No logos (no rail operator mark, no shop name), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hstTw{0%,100%{opacity:1}50%{opacity:.25}}.hstTw{animation:hstTw 1.7s ease-in-out infinite}.hstT2{animation-delay:.55s}.hstT3{animation-delay:1.1s}' +
    '@keyframes hstBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.hstBob{animation:hstBob .8s ease-in-out infinite}.hstBb2{animation-delay:.4s}' +
    '@keyframes hstCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.hstCloud{animation:hstCloud 30s linear infinite}.hstC2{animation-delay:-15s}' +
    '@keyframes hstSteam{0%{transform:translateY(0);opacity:0}25%{opacity:.8}100%{transform:translateY(-40px);opacity:0}}.hstSteam{animation:hstSteam 2.6s ease-out infinite}.hstSt2{animation-delay:.9s}.hstSt3{animation-delay:1.8s}' +
    '@keyframes hstSweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.hstSweep{transform-box:view-box;transform-origin:200px 150px;animation:hstSweep 9s ease-in-out infinite}' +
    '@keyframes hstBeam{0%,100%{opacity:.15}50%{opacity:.6}}.hstBeam{animation:hstBeam 2.2s ease-in-out infinite}.hstBm2{animation-delay:1.1s}' +
    '@keyframes hstNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.hstNote{animation:hstNote 3s linear infinite}.hstN2{animation-delay:1s}.hstN3{animation-delay:2s}' +
    '@keyframes hstSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.hstSpark{transform-box:fill-box;transform-origin:50% 50%;animation:hstSpark 1.4s ease-in-out infinite}.hstS2{animation-delay:.5s}' +
    '@keyframes hstSat{0%{transform:translate(-30px,0)}100%{transform:translate(440px,-30px)}}.hstSat{animation:hstSat 12s linear infinite}' +
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
  const PINK = "#ffb3d1", BLUE = "#5ab0e8", GOLD = "#f6c544", NAVY = "#24235e", BRICK = "#9a4a34", SAND = "#c79a6a";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="hstTw' + (i % 3 === 1 ? ' hstT2' : i % 3 === 2 ? ' hstT3' : '') + '"/>';
    }
    return s;
  };
  const cloud = (x, y, cls) => '<g class="hstCloud' + (cls || '') + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const bricks = (x, y, w, h, c, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8"/>';
    return s;
  };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 6 * s) + '" width="' + (4 * s) + '" height="' + (12 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const crowd = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 6 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="hstBob' + (i % 2 ? ' hstBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 12) + '" r="4.5"/><rect x="' + (x - 5) + '" y="' + (y - 7) + '" width="10" height="14" rx="4"/></g>';
    }
    return s;
  };

  /* 1. Holmes Chapel station, a train to Manchester pulling in, the Twemlow Viaduct's brick arches over the Dane behind */
  function hststation() {
    let arches = "";
    for (let i = 0; i < 12; i++) arches += '<path d="M' + (i * 34) + ' 120v-26h34v26q-17 -20 -34 0z" fill="#8e4630" stroke="#6b3020" stroke-width="1"/>';
    let wins = "";
    for (let i = 0; i < 6; i++) wins += '<rect x="' + (64 + i * 34) + '" y="146" width="24" height="18" rx="3" fill="#1a1e2a"/>';
    const train = '<g class="anim-train">' +
      '<path d="M30 136h262q22 0 28 22v34H30z" fill="' + NAVY + '" stroke="#11113a" stroke-width="2"/>' +
      '<path d="M30 168h290v8H30z" fill="#7b5ab8"/><path d="M30 176h290v4H30z" fill="' + BLUE + '"/>' + wins +
      '<path d="M296 146h14q8 4 10 14h-24z" fill="#1a1e2a"/><rect x="40" y="146" width="16" height="36" fill="#3a3a7a" stroke="#11113a"/>' +
      '<rect x="270" y="140" width="22" height="6" rx="1" fill="#111"/><text x="281" y="145" text-anchor="middle" ' + F + ' font-size="4.6" fill="#ffb000">MANCHESTER</text>' +
      '<rect x="312" y="182" width="7" height="5" rx="1" fill="#fff6c8"/>' +
      '<circle cx="70" cy="194" r="7" fill="#222"/><circle cx="110" cy="194" r="7" fill="#222"/><circle cx="240" cy="194" r="7" fill="#222"/><circle cx="280" cy="194" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hsts1)"/>' + cloud(80, 34) + cloud(300, 52, ' hstC2') +
      '<path d="M0 120q80 -14 160 -4t240 -6v16H0z" fill="#6f9a5a"/>' + arches + '<rect x="0" y="88" width="400" height="7" fill="#7a3a28"/>' +
      tree(20, 128, 1.1, "#4f7d3e") + tree(388, 126, 1.2, "#4f7d3e") +
      '<rect x="0" y="126" width="400" height="10" fill="#5f8a4c"/>' +
      '<rect x="0" y="196" width="400" height="10" fill="#5a4a3a"/><path d="M0 200h400M0 204h400" stroke="#9a9a9a" stroke-width="1.4"/>' +
      train +
      /* platform with the yellow line */
      '<rect x="0" y="206" width="400" height="54" fill="#8c8a84"/><rect x="0" y="206" width="400" height="5" fill="#f2d23c"/>' +
      '<rect x="0" y="211" width="400" height="2" fill="#6d6b66"/>' +
      /* station name board: white letters on navy, two posts */
      '<rect x="138" y="214" width="4" height="34" fill="#2a2a2a"/><rect x="258" y="214" width="4" height="34" fill="#2a2a2a"/>' +
      '<rect x="116" y="216" width="168" height="28" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="236" text-anchor="middle" ' + F + ' font-size="16" fill="#fff">Holmes Chapel</text>' +
      /* lamp posts */
      '<rect x="40" y="166" width="3" height="40" fill="#333"/><rect x="34" y="162" width="15" height="6" rx="2" fill="#333"/><rect x="36" y="168" width="11" height="3" fill="#fff6c8" class="hstBeam"/>' +
      '<rect x="356" y="166" width="3" height="40" fill="#333"/><rect x="350" y="162" width="15" height="6" rx="2" fill="#333"/><rect x="352" y="168" width="11" height="3" fill="#fff6c8" class="hstBeam hstBm2"/>',
      sky("hsts1", "#8fbde4", "#e9eef2"));
  }

  /* 2. the village bakery where he had a Saturday job: bay window of bread, a warm glow, steam off the sausage rolls */
  function hstbakery() {
    let loaves = "";
    for (let i = 0; i < 5; i++) loaves += '<ellipse cx="' + (112 + i * 30) + '" cy="168" rx="12" ry="7" fill="#d79a4a" stroke="#8a5a20"/><path d="M' + (104 + i * 30) + ' 166l4 -3M' + (110 + i * 30) + ' 166l4 -3M' + (116 + i * 30) + ' 166l4 -3" stroke="#f6d39a" stroke-width="1.4"/>';
    let rolls = "";
    for (let i = 0; i < 6; i++) rolls += '<rect x="' + (104 + i * 26) + '" y="186" width="20" height="9" rx="4" fill="#e0a85a" stroke="#8a5a20"/>';
    const steam = (x, c) => '<path class="hstSteam' + c + '" d="M' + x + ' 182q-5 -8 0 -14t0 -14" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hsts2)"/>' + cloud(70, 30) + cloud(320, 46, ' hstC2') +
      /* the cream rendered shop front with a slate roof */
      '<path d="M40 70l160 -40l160 40z" fill="#4a4f58"/>' +
      '<rect x="48" y="70" width="304" height="150" fill="#efe6d2" stroke="#b9ad92" stroke-width="2"/>' +
      '<rect x="60" y="80" width="56" height="36" fill="#cfe0ea" stroke="#5a6a7a" stroke-width="3"/><path d="M88 80v36M60 98h56" stroke="#5a6a7a" stroke-width="2"/>' +
      '<rect x="284" y="80" width="56" height="36" fill="#cfe0ea" stroke="#5a6a7a" stroke-width="3"/><path d="M312 80v36M284 98h56" stroke="#5a6a7a" stroke-width="2"/>' +
      /* fascia */
      '<rect x="80" y="122" width="240" height="22" fill="' + NAVY + '" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="138" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="15" letter-spacing="3" fill="' + GOLD + '">BAKERY</text>' +
      /* striped awning */
      '<path d="M86 146h228l-10 12H96z" fill="' + PINK + '"/><path d="M106 146l-4 12M126 146v12M146 146v12M166 146v12M186 146v12M206 146v12M226 146v12M246 146v12M266 146v12M286 146v12M298 146l4 12" stroke="#fff" stroke-width="7"/>' +
      /* window */
      '<rect x="96" y="158" width="170" height="46" fill="#ffe6b0" stroke="#5a6a7a" stroke-width="3"/>' + loaves + rolls +
      steam(130, '') + steam(182, ' hstSt2') + steam(230, ' hstSt3') +
      /* door */
      '<rect x="276" y="158" width="32" height="62" fill="#2f5f86" stroke="#1b3a55" stroke-width="2"/><circle cx="302" cy="190" r="2" fill="' + GOLD + '"/><rect x="280" y="162" width="24" height="20" fill="#cfe0ea"/>' +
      /* pavement + a bike leaned on the wall */
      '<rect x="0" y="220" width="400" height="40" fill="#9a968c"/><path d="M0 232h400" stroke="#7d7a72"/>' +
      '<g stroke="#333" stroke-width="2.5" fill="none"><circle cx="352" cy="226" r="12"/><circle cx="386" cy="226" r="12"/><path d="M352 226l12 -18h14l8 18M364 208l-4 -6h-6M378 208v-6"/></g>' +
      '<text x="148" y="250" text-anchor="middle" ' + F + ' font-size="9" fill="#3a3a3a">FRESH BREAD - BAKED EVERY MORNING</text>',
      sky("hsts2", "#a9d0ec", "#f4ece0"));
  }

  /* 3. the school hall battle of the bands: stage lights sweeping, his band from behind, kids jumping */
  function hstschool() {
    const player = (x, c, guitar) =>
      '<g><circle cx="' + x + '" cy="132" r="7" fill="#3a2a20"/><rect x="' + (x - 8) + '" y="139" width="16" height="26" rx="4" fill="' + c + '"/>' +
      '<rect x="' + (x - 6) + '" y="165" width="5" height="18" fill="#222"/><rect x="' + (x + 1) + '" y="165" width="5" height="18" fill="#222"/>' +
      (guitar ? '<path d="M' + (x - 14) + ' 158l26 -12" stroke="#222" stroke-width="3"/><ellipse cx="' + (x - 12) + '" cy="158" rx="7" ry="5" fill="' + guitar + '"/>' : '') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#120d1c"/>' +
      /* wall bars + banner */
      '<rect x="0" y="0" width="400" height="190" fill="#1c1630"/>' +
      '<rect x="80" y="18" width="240" height="24" rx="3" fill="' + PINK + '"/><text x="200" y="35" text-anchor="middle" ' + F + ' font-size="13" letter-spacing="2" fill="' + NAVY + '">BATTLE OF THE BANDS</text>' +
      /* stage lights */
      '<g class="hstSweep"><path d="M120 50l-50 140h90z" fill="' + GOLD + '" opacity=".22"/><path d="M280 50l-30 140h90z" fill="' + BLUE + '" opacity=".22"/></g>' +
      '<rect x="110" y="44" width="20" height="10" rx="2" fill="#555"/><rect x="270" y="44" width="20" height="10" rx="2" fill="#555"/>' +
      /* stage */
      '<rect x="40" y="182" width="320" height="16" fill="#5a3a24"/><rect x="40" y="198" width="320" height="6" fill="#3a2418"/>' +
      /* amps + drum kit */
      '<rect x="60" y="150" width="30" height="32" fill="#222" stroke="#444"/><rect x="310" y="150" width="30" height="32" fill="#222" stroke="#444"/>' +
      '<circle cx="250" cy="168" r="14" fill="#e9e3d6" stroke="#888" stroke-width="2"/><circle cx="226" cy="160" r="8" fill="#e9e3d6" stroke="#888"/><path d="M270 146l12 -4" stroke="' + GOLD + '" stroke-width="3"/>' +
      player(126, "#4a6aa8", "#b03a2e") + player(190, "#f3efe6", null) + player(290, "#2a8a6a", "#e9c46a") +
      /* mic stand in front of the singer */
      '<path d="M190 182v-40M184 182h12" stroke="#ccc" stroke-width="2"/><circle cx="190" cy="140" r="3" fill="#999"/>' +
      '<g fill="' + PINK + '"><text class="hstNote" x="160" y="120" font-size="18">&#9834;</text><text class="hstNote hstN2" x="210" y="112" font-size="16">&#9835;</text><text class="hstNote hstN3" x="250" y="118" font-size="18">&#9834;</text></g>' +
      /* the crowd of kids in the hall */
      '<rect x="0" y="204" width="400" height="56" fill="#2a2236"/>' +
      crowd(236, 16, 0, 400, ["#3d3550", "#4a4060", "#352d48"]) + crowd(256, 18, -10, 410, ["#2c2440", "#3a3250"]),
      "");
  }

  /* 4. the Lovell Telescope at Jodrell Bank, the big white dish turning over the Cheshire fields at dusk */
  function hstjodrell() {
    return svg(
      '<rect width="400" height="260" fill="url(#hsts4)"/>' + stars(26, 8, 110) +
      '<g class="hstSat"><rect x="0" y="40" width="6" height="3" fill="#dfe8f0"/><rect x="-6" y="40.5" width="5" height="2" fill="' + BLUE + '"/><rect x="7" y="40.5" width="5" height="2" fill="' + BLUE + '"/></g>' +
      '<path d="M0 196q100 -20 200 -6t200 -8v78H0z" fill="#3d5a34"/>' +
      '<path d="M0 214q120 -14 240 -2t160 -6v54H0z" fill="#4c6e3f"/>' +
      /* circular track */
      '<ellipse cx="200" cy="206" rx="120" ry="12" fill="none" stroke="#9aa0a6" stroke-width="3"/>' +
      /* the two steel towers */
      '<path d="M112 204l34 -112h12l-22 112z" fill="#e8e8e2" stroke="#9aa0a6" stroke-width="1.5"/><path d="M288 204l-34 -112h-12l22 112z" fill="#e8e8e2" stroke="#9aa0a6" stroke-width="1.5"/>' +
      '<path d="M124 170l30 -10M130 140l26 -8M276 170l-30 -10M270 140l-26 -8" stroke="#9aa0a6" stroke-width="2"/>' +
      /* the dish, tilting back and forth */
      '<g class="hstSweep">' +
      '<path d="M96 96q104 120 208 0q-104 -40 -208 0z" fill="#f4f4ee" stroke="#a9aeb2" stroke-width="2"/>' +
      '<path d="M110 100q90 70 180 0" fill="none" stroke="#c9cdd0" stroke-width="1.5"/><path d="M130 104q70 46 140 0" fill="none" stroke="#c9cdd0" stroke-width="1.5"/>' +
      '<path d="M200 70v66M140 84l60 52M260 84l-60 52" stroke="#b9bdc0" stroke-width="2"/>' +
      '<path d="M200 136l-30 -80M200 136l30 -80" stroke="#7a7f84" stroke-width="2"/><rect x="194" y="48" width="12" height="10" rx="2" fill="#7a7f84"/>' +
      '<rect x="190" y="132" width="20" height="10" fill="#c9cdd0"/></g>' +
      '<circle cx="200" cy="56" r="3" fill="' + GOLD + '" class="hstBeam"/>' +
      tree(40, 212, 1, "#2f4a2a") + tree(70, 214, .8, "#2f4a2a") + tree(360, 210, 1.1, "#2f4a2a"),
      sky("hsts4", "#141a3a", "#e89a7a"));
  }

  /* 5. London Road at Macclesfield Road in the middle of the village, St Luke's sandstone tower behind, his name on the wall */
  function hstcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#hsts5)"/>' + cloud(60, 26) + cloud(250, 40, ' hstC2') +
      /* St Luke's: brick nave, sandstone tower with battlements */
      '<rect x="150" y="78" width="120" height="56" fill="#8e4a36"/><path d="M146 80l64 -26l64 26z" fill="#4a4f58"/>' +
      '<rect x="110" y="34" width="44" height="100" fill="' + SAND + '" stroke="#8a6a44" stroke-width="1.5"/>' +
      '<path d="M108 34h48v-8h-6v4h-6v-4h-6v4h-6v-4h-6v4h-6v-4h-6z" fill="' + SAND + '" stroke="#8a6a44"/>' +
      '<path d="M126 60q6 -10 12 0v18h-12z" fill="#3a2a20"/><circle cx="132" cy="96" r="7" fill="#f2ead8" stroke="#3a2a20" stroke-width="1.5"/><path d="M132 96v-5M132 96l3 2" stroke="#3a2a20" stroke-width="1.2"/>' +
      '<path d="M180 100q6 -10 12 0v20h-12zM220 100q6 -10 12 0v20h-12z" fill="#e6d8a8" class="hstBeam"/>' +
      tree(300, 132, 1.2, "#5a8a4a") + tree(80, 134, 1, "#5a8a4a") +
      /* wall with the tags */
      bricks(0, 134, 400, 70, BRICK, "#7a3424") +
      tag("HARRY", 70, 186, 44, PINK, -4) +
      tag("TPWK", 228, 172, 24, GOLD, -6) +
      tag("HAZZA", 290, 196, 20, BLUE, -3) +
      '<g class="hstSpark"><path d="M214 150l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="hstSpark hstS2"><path d="M48 156l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="204" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="212" width="400" height="48" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* Cheshire street name plates: white with black letters */
      '<rect x="362" y="40" width="5" height="172" fill="#2a2a2a"/>' +
      '<rect x="272" y="44" width="124" height="28" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="334" y="63" text-anchor="middle" ' + F + ' font-size="12" fill="#111">LONDON ROAD</text>' +
      '<rect x="262" y="76" width="134" height="28" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="329" y="95" text-anchor="middle" ' + F + ' font-size="10.5" fill="#111">MACCLESFIELD ROAD</text>',
      sky("hsts5", "#86b6dc", "#f6e2cc"));
  }

  window.SCENES = { hststation, hstbakery, hstschool, hstjodrell, hstcorner };
})();
