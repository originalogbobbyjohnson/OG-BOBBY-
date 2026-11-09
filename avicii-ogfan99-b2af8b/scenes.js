/* Avicii game (GENRES: EDM + DANCE; INTERNATIONAL region: UK + EUROPE; Östermalm, Stockholm, Sweden).
   Rooms: Stadion (T-bana red line 14, the blue rock cave with the painted rainbow), the bedroom studio where Tim Bergling
   started making tracks (rebuilt at the Avicii Experience), Humlegården (his favourite Östermalm park, the Royal Library),
   the Avicii Arena (the Globe, with the SkyView gondola), and Sturegatan at Humlegårdsgatan with Svampen at Stureplan behind.
   Kept upbeat: no memorial art. CSS classes prefixed "avx" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes avxTw{0%,100%{opacity:1}50%{opacity:.2}}.avxTw{animation:avxTw 1.4s ease-in-out infinite}.avxT2{animation-delay:.45s}.avxT3{animation-delay:.9s}' +
    '@keyframes avxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.avxBob{animation:avxBob .6s ease-in-out infinite}.avxBb2{animation-delay:.3s}' +
    '@keyframes avxNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.avxNote{animation:avxNote 3s linear infinite}.avxN2{animation-delay:-1s}.avxN3{animation-delay:-2s}' +
    '@keyframes avxLeaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,150px) rotate(300deg)}}.avxLeaf{transform-box:fill-box;animation:avxLeaf 5s linear infinite}.avxL2{animation-delay:-1.7s}.avxL3{animation-delay:-3.4s}' +
    '@keyframes avxGon{0%,100%{transform:rotate(-58deg)}50%{transform:rotate(0deg)}}.avxGon{transform-origin:200px 170px;animation:avxGon 8s ease-in-out infinite}' +
    '@keyframes avxBeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.avxBeam{transform-box:fill-box;transform-origin:50% 100%;animation:avxBeam 3.4s ease-in-out infinite}.avxBm2{animation-delay:-1.7s}' +
    '@keyframes avxBike{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.avxBike{animation:avxBike 10s linear infinite}' +
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
  const ORG = "#ffb347", TEA = "#4fd1c5", RSE = "#ff6b8b", SLR = "#d71d24";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff" class="avxTw' + (i % 3 === 1 ? ' avxT2' : i % 3 === 2 ? ' avxT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 6 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="avxBob' + (i % 2 ? ' avxBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="22" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l7 -15M' + (x - 4) + ' ' + (y - 6) + 'l-7 -15" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 10) + '" fill="#5a3e2a"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '"/><circle cx="' + (x + r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '"/>';

  /* 1. Stadion, red line 14: bare rock vault painted sky blue with the big rainbow, blue station sign, a train pulling in */
  function avxstation() {
    let wins = "";
    for (let x = 44; x < 284; x += 32) wins += '<rect x="' + x + '" y="132" width="22" height="22" rx="3" fill="#cfe6f5"/>';
    const bands = ["#e8463a", "#f59a2a", "#f5d33a", "#4cbf5a", "#3a8ad8", "#7a52c8"];
    let rainbow = "";
    bands.forEach((c, i) => { const r = 150 - i * 9; rainbow += '<path d="M' + (230 - r) + ' 140A' + r + ' ' + (r * .7) + ' 0 0 1 ' + (230 + r) + ' 140" stroke="' + c + '" stroke-width="9" fill="none"/>'; });
    const train = '<g class="anim-train">' +
      '<rect x="20" y="122" width="276" height="66" rx="10" fill="#dfe4ea" stroke="#1a2a4a" stroke-width="2"/>' +
      '<path d="M296 122q22 2 26 28v38h-26z" fill="#dfe4ea" stroke="#1a2a4a" stroke-width="2"/>' +
      '<path d="M300 130q14 2 17 20h-17z" fill="#14233a"/>' + wins +
      '<rect x="20" y="160" width="302" height="7" fill="#2a5fae"/>' +
      '<g fill="#b8c0ca"><rect x="36" y="130" width="8" height="54"/><rect x="152" y="130" width="8" height="54"/><rect x="268" y="130" width="8" height="54"/></g>' +
      '<rect x="308" y="176" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#111"><circle cx="64" cy="192" r="7"/><circle cx="88" cy="192" r="7"/><circle cx="230" cy="192" r="7"/><circle cx="254" cy="192" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#1e2a36"/>' +
      '<clipPath id="avxclip1"><path d="M0 150V50Q40 8 130 12T280 6T400 46v104z"/></clipPath>' +
      '<path d="M0 150V50Q40 8 130 12T280 6T400 46v104z" fill="#4f8fd0"/>' +
      '<g clip-path="url(#avxclip1)">' + rainbow +
      '<g fill="#fff" opacity=".85"><path d="M30 60q8 -10 18 -4q8 -8 16 2q10 0 8 8h-46q-4 -4 4 -6z"/><path d="M330 40q8 -10 18 -4q8 -8 16 2q10 0 8 8h-46q-4 -4 4 -6z"/></g></g>' +
      '<path d="M0 50Q40 8 130 12T280 6T400 46" stroke="#33669a" stroke-width="3" fill="none"/>' +
      /* station sign */
      '<rect x="20" y="76" width="130" height="28" rx="3" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="72" y="96" text-anchor="middle" ' + F + ' font-size="16" fill="#fff">Stadion</text>' +
      '<circle cx="132" cy="90" r="10" fill="' + SLR + '"/><text x="132" y="94.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">14</text>' +
      train +
      '<rect x="0" y="198" width="400" height="62" fill="#8d8c88"/><rect x="0" y="198" width="400" height="6" fill="#f2f2f2"/>' +
      '<path d="M0 226h400" stroke="#7a7975" stroke-width="1"/>' +
      '<g fill="#2b3644"><circle cx="356" cy="216" r="5"/><rect x="350" y="221" width="12" height="22" rx="4"/></g>' +
      '<g fill="' + ORG + '"><circle cx="376" cy="214" r="5"/><rect x="370" y="219" width="12" height="22" rx="4"/></g>',
      '');
  }

  /* 2. The bedroom studio: desk, laptop with a blinking step sequencer, speakers, keyboard, Ostermalm rooftops through the window */
  function avxbedroom() {
    let grid = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) {
      const on = (r * 3 + c * 5) % 4 === 0;
      grid += '<rect x="' + (154 + c * 12) + '" y="' + (102 + r * 10) + '" width="10" height="8" fill="' + (on ? [ORG, TEA, RSE, ORG][r] : "#2a3040") + '"' + (on ? ' class="avxTw' + (c % 3 === 1 ? ' avxT2' : c % 3 === 2 ? ' avxT3' : '') + '"' : '') + '/>';
    }
    let keys = "";
    for (let x = 116; x < 284; x += 8) keys += '<rect x="' + x + '" y="186" width="7" height="16" fill="#fff"/>';
    for (let x = 121; x < 280; x += 8) if ((x / 8 | 0) % 7 !== 2 && (x / 8 | 0) % 7 !== 6) keys += '<rect x="' + x + '" y="186" width="4" height="10" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#2c2438"/>' +
      /* window with the evening skyline */
      '<rect x="24" y="22" width="120" height="96" fill="url(#avxs2)" stroke="#e8e0d0" stroke-width="5"/>' +
      '<path d="M84 22v96M24 70h120" stroke="#e8e0d0" stroke-width="4"/>' +
      '<g fill="#3a2f48"><path d="M26 116v-22l10 -6h22l8 6v22z"/><path d="M70 116v-30l8 -8l8 8v30z"/><rect x="76" y="58" width="4" height="22"/><path d="M92 116v-18l12 -8h28l10 8v18z"/></g>' +
      '<g fill="#ffd98a"><rect x="34" y="100" width="5" height="6"/><rect x="46" y="100" width="5" height="6"/><rect x="102" y="102" width="5" height="6"/><rect x="118" y="102" width="5" height="6"/></g>' +
      /* poster wall with a level meter */
      '<rect x="300" y="26" width="76" height="92" rx="3" fill="#1d2433" stroke="' + TEA + '" stroke-width="2"/>' +
      '<g fill="' + TEA + '"><rect x="312" y="90" width="8" height="18"/><rect x="324" y="78" width="8" height="30"/></g><g fill="' + ORG + '"><rect x="336" y="66" width="8" height="42"/><rect x="348" y="54" width="8" height="54"/></g><rect x="360" y="40" width="8" height="68" fill="' + RSE + '"/>' +
      /* desk */
      '<rect x="0" y="176" width="400" height="10" fill="#8a6440"/><rect x="0" y="186" width="400" height="74" fill="#3a2e28"/>' +
      /* speakers */
      '<rect x="60" y="112" width="44" height="64" rx="4" fill="#15161c" stroke="#5a5e6a" stroke-width="2"/><circle cx="82" cy="128" r="8" fill="#2a2d36" stroke="' + ORG + '" stroke-width="2"/><circle cx="82" cy="156" r="13" fill="#2a2d36" stroke="' + ORG + '" stroke-width="2" class="avxBob"/>' +
      '<rect x="296" y="112" width="44" height="64" rx="4" fill="#15161c" stroke="#5a5e6a" stroke-width="2"/><circle cx="318" cy="128" r="8" fill="#2a2d36" stroke="' + ORG + '" stroke-width="2"/><circle cx="318" cy="156" r="13" fill="#2a2d36" stroke="' + ORG + '" stroke-width="2" class="avxBob avxBb2"/>' +
      /* laptop */
      '<rect x="146" y="92" width="112" height="70" rx="4" fill="#111520" stroke="#9aa3b2" stroke-width="3"/>' + grid +
      '<rect x="154" y="144" width="96" height="10" fill="#1d2433"/><rect x="154" y="144" width="40" height="10" fill="' + TEA + '" opacity=".6" class="avxTw"/>' +
      '<path d="M134 162h136l10 12H124z" fill="#9aa3b2"/>' +
      /* midi keyboard */
      '<rect x="110" y="182" width="180" height="24" rx="3" fill="#20242e"/>' + keys +
      /* floating notes */
      '<g fill="' + ORG + '" class="avxNote"><circle cx="128" cy="110" r="4"/><rect x="131" y="92" width="2" height="18"/></g>' +
      '<g fill="' + TEA + '" class="avxNote avxN2"><circle cx="276" cy="104" r="4"/><rect x="279" y="86" width="2" height="18"/></g>' +
      '<g fill="' + RSE + '" class="avxNote avxN3"><circle cx="200" cy="80" r="4"/><rect x="203" y="62" width="2" height="18"/></g>',
      sky("avxs2", "#2a3a7a", "#ff9a6a"));
  }

  /* 3. Humlegarden: green lawns, big lime trees, the pale Royal Library with its columns, leaves blowing */
  function avxpark() {
    const leaf = (x, y, c, cls) => '<path class="avxLeaf ' + cls + '" d="M' + x + ' ' + y + 'q6 -6 10 0q-4 6 -10 0z" fill="' + c + '"/>';
    let cols = "";
    for (let x = 176; x <= 224; x += 12) cols += '<rect x="' + x + '" y="102" width="6" height="52" fill="#f2ede2"/>';
    let wins = "";
    for (let x = 100; x <= 300; x += 20) { if (x > 160 && x < 240) continue; wins += '<rect x="' + x + '" y="116" width="10" height="20" fill="#7a8494"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#avxs3)"/>' +
      '<g fill="#fff" opacity=".9"><path d="M40 40q10 -12 22 -4q10 -10 20 2q12 0 10 10h-56q-4 -6 4 -8z"/><path d="M290 30q10 -12 22 -4q10 -10 20 2q12 0 10 10h-56q-4 -6 4 -8z"/></g>' +
      /* the Royal Library */
      '<rect x="88" y="100" width="224" height="56" fill="#e6dccb"/>' +
      '<path d="M84 100h232v-8H84z" fill="#cfc3ae"/>' +
      '<path d="M168 100l32 -20l32 20z" fill="#d8ccb6" stroke="#b8ab92" stroke-width="2"/>' +
      '<rect x="168" y="100" width="64" height="6" fill="#cfc3ae"/>' + cols + wins +
      '<path d="M88 92l6 -10h212l6 10z" fill="#4a5466"/>' +
      /* trees */
      tree(40, 104, 34, "#3f8a3a") + tree(360, 100, 36, "#3f8a3a") + tree(110, 140, 22, "#56a34a") + tree(296, 140, 24, "#56a34a") +
      /* lawn and paths */
      '<rect x="0" y="156" width="400" height="104" fill="#5fb04e"/>' +
      '<path d="M200 156L150 260h100z" fill="#d8c8a0"/>' +
      '<path d="M0 210q120 -20 200 -6t200 -4v12q-120 10 -200 6t-200 4z" fill="#d8c8a0"/>' +
      /* a picnic blanket with a speaker playing */
      '<path d="M40 226l60 -6l10 22l-62 6z" fill="' + RSE + '"/><path d="M52 232l40 -4M56 240l40 -4" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      '<rect x="66" y="218" width="16" height="12" rx="2" fill="#1d2433"/><circle cx="74" cy="224" r="3" fill="' + ORG + '" class="avxTw"/>' +
      '<g fill="' + TEA + '" class="avxNote"><circle cx="88" cy="210" r="3"/><rect x="90" y="196" width="1.6" height="14"/></g>' +
      /* bench */
      '<rect x="300" y="210" width="60" height="6" fill="#6a4a2e"/><rect x="300" y="200" width="60" height="5" fill="#6a4a2e"/><path d="M306 216v12M354 216v12" stroke="#333" stroke-width="3"/>' +
      leaf(60, 60, "#e8a23a", "") + leaf(180, 40, "#d8732a", "avxL2") + leaf(330, 70, "#e8c23a", "avxL3") + leaf(250, 30, "#d8732a", "") + leaf(120, 20, "#e8a23a", "avxL3"),
      sky("avxs3", "#7ec0ee", "#e8f4fc"));
  }

  /* 4. Avicii Arena: the great white Globe at night, the SkyView gondola riding up its side, a crowd and lights */
  function avxarena() {
    let lines = "";
    for (let i = -3; i <= 3; i++) lines += '<path d="M' + (200 + i * 22) + ' 82q' + (i * 14) + ' 88 0 176" stroke="#c4cad4" stroke-width="1" fill="none"/>';
    for (let y = 100; y < 250; y += 22) { const hw = Math.sqrt(Math.max(0, 88 * 88 - (170 - y) * (170 - y))); lines += '<path d="M' + (200 - hw).toFixed(1) + ' ' + y + 'h' + (2 * hw).toFixed(1) + '" stroke="#c4cad4" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#avxs4)"/>' + stars(30, 6, 90) +
      '<path class="avxBeam" d="M58 210L30 0h56z" fill="' + TEA + '" opacity=".25"/><path class="avxBeam avxBm2" d="M342 210L314 0h56z" fill="' + RSE + '" opacity=".25"/>' +
      /* the globe */
      '<clipPath id="avxglobe"><circle cx="200" cy="170" r="88"/></clipPath>' +
      '<circle cx="200" cy="170" r="88" fill="#f4f6f8"/>' + '<g clip-path="url(#avxglobe)">' + lines + '</g>' +
      '<circle cx="200" cy="170" r="88" fill="none" stroke="#9aa3b2" stroke-width="2"/>' +
      /* rail and gondola */
      '<path d="M112 170A88 88 0 0 1 200 82" stroke="#5a5e6a" stroke-width="2" fill="none"/>' +
      '<g class="avxGon"><circle cx="200" cy="76" r="9" fill="' + ORG + '" stroke="#7a4a12" stroke-width="2"/><circle cx="200" cy="76" r="5" fill="#cfe6f5"/></g>' +
      '<text x="200" y="176" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="19" letter-spacing="2" fill="#2a3040">AVICII ARENA</text>' +
      '<rect x="0" y="222" width="400" height="38" fill="#232836"/>' +
      crowd(250, 22, "#0d111c"),
      sky("avxs4", "#0a1030", "#3a2a5a"));
  }

  /* 5. Sturegatan at Humlegardsgatan: blue Stockholm street signs, the AVICII wall, Humlegarden's trees and Svampen behind */
  function avxcorner() {
    const bike = '<g class="avxBike"><circle cx="0" cy="214" r="8" fill="none" stroke="#111" stroke-width="2.5"/><circle cx="34" cy="214" r="8" fill="none" stroke="#111" stroke-width="2.5"/><path d="M0 214l12 -16h16l6 16M12 198l-4 -6M28 198l2 -6" stroke="' + TEA + '" stroke-width="3" fill="none"/><g fill="#2b3644"><circle cx="18" cy="174" r="5"/><rect x="13" y="178" width="10" height="18" rx="4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#avxs5)"/>' +
      tree(40, 92, 34, "#3f8a3a") + tree(110, 84, 30, "#4a9a42") + tree(320, 90, 30, "#4a9a42") +
      /* Svampen: the concrete mushroom on its column */
      '<rect x="190" y="70" width="20" height="80" fill="#b8b6ae"/>' +
      '<ellipse cx="200" cy="66" rx="82" ry="12" fill="#cfccc4" stroke="#8f8c84" stroke-width="2"/>' +
      '<path d="M120 68q80 16 160 0v4q-80 16 -160 0z" fill="#9c998f"/>' +
      /* Ostermalm stone buildings */
      '<rect x="0" y="110" width="150" height="40" fill="#d8c3a2"/><rect x="250" y="104" width="150" height="46" fill="#cfae8a"/>' +
      '<g fill="#5a6474"><rect x="12" y="120" width="12" height="18"/><rect x="40" y="120" width="12" height="18"/><rect x="68" y="120" width="12" height="18"/><rect x="96" y="120" width="12" height="18"/><rect x="124" y="120" width="12" height="18"/><rect x="262" y="114" width="12" height="18"/><rect x="290" y="114" width="12" height="18"/><rect x="318" y="114" width="12" height="18"/><rect x="346" y="114" width="12" height="18"/></g>' +
      /* the tagged wall */
      '<rect x="0" y="150" width="400" height="56" fill="#5c6680"/>' +
      '<path d="M0 164h400M0 178h400M0 192h400" stroke="#4c5570" stroke-width="1"/>' +
      tag("TIM BERG", 14, 172, 15, TEA, -4) +
      tag("AVICII", 116, 200, 44, ORG, -4) +
      tag("LEVELS", 296, 178, 16, RSE, -6) +
      '<rect x="0" y="206" width="400" height="54" fill="#2f3238"/><rect x="0" y="204" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 240h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' + bike +
      /* Stockholm street name signs: dark blue, white letters */
      '<rect x="372" y="24" width="5" height="182" fill="#2a2a2a"/>' +
      '<rect x="262" y="22" width="134" height="26" rx="2" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="329" y="40" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Sturegatan</text>' +
      '<rect x="248" y="52" width="148" height="26" rx="2" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="322" y="70" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Humlegårdsgatan</text>',
      sky("avxs5", "#8fc2ea", "#eae6dc"));
  }

  window.SCENES = { avxstation, avxbedroom, avxpark, avxarena, avxcorner };
})();
