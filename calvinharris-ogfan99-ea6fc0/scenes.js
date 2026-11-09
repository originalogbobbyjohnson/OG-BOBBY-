/* Calvin Harris game (GENRES: EDM + Dance; Regions: UK + Europe; Dumfries, Scotland - born and raised there, Calside Primary + Dumfries High).
   Rooms: Dumfries railway station (ScotRail, Glasgow South Western line), Devorgilla Bridge + the Caul on the River Nith,
   Palmerston Park (Queen of the South, his team), the bedroom Amiga set-up his first album was made on, and Calside Road
   with the Midsteeple behind. CSS classes prefixed "chx" (the page's anim-train is kept). No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes chxFlk{0%,100%{opacity:1}46%{opacity:.8}50%{opacity:.35}54%{opacity:.95}}.chxFlk{animation:chxFlk 2.6s infinite}.chxF2{animation-delay:1.2s}' +
    '@keyframes chxFlow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.chxFlow{animation:chxFlow 2.4s linear infinite}.chxFl2{animation-duration:3.4s}' +
    '@keyframes chxFoam{0%,100%{opacity:.9;transform:translateY(0)}50%{opacity:.4;transform:translateY(2px)}}.chxFoam{animation:chxFoam .8s ease-in-out infinite}.chxFo2{animation-delay:.4s}' +
    '@keyframes chxBall{0%,100%{transform:translate(0,0)}50%{transform:translate(60px,-40px)}}.chxBall{animation:chxBall 2.2s ease-in-out infinite}' +
    '@keyframes chxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.chxBob{animation:chxBob .55s ease-in-out infinite}.chxBb2{animation-delay:.27s}' +
    '@keyframes chxEq{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.chxEq{transform-box:fill-box;transform-origin:50% 100%;animation:chxEq .6s ease-in-out infinite}.chxE2{animation-delay:.15s}.chxE3{animation-delay:.3s}.chxE4{animation-delay:.45s}' +
    '@keyframes chxSpin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.chxSpin{transform-box:fill-box;transform-origin:50% 50%;animation:chxSpin 6s linear infinite}' +
    '@keyframes chxGull{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-24px)}}.chxGull{animation:chxGull 12s linear infinite}' +
    '@keyframes chxFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.chxFlag{transform-box:fill-box;transform-origin:0 50%;animation:chxFlag 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const NAVY = "#1d2c5e", GOLD = "#ffd23f", SAND = "#b5523b", SAND2 = "#8e3b2a", QOS = "#1f5bc6", PINK = "#ff5e8a", CYAN = "#3fd0e0";
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const gull = '<g class="chxGull"><path d="M0 30q7 -7 14 0q7 -7 14 0" stroke="#f4f4f4" stroke-width="2.4" fill="none"/></g>';
  /* red sandstone block texture */
  const blocks = (x, y, w, h, c) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + SAND2 + '" stroke-width=".8" opacity=".6"/>';
    return s;
  };
  /* Midsteeple: 1707 red sandstone tower with clock and lead spire */
  const midsteeple = (x, base, sc) => {
    const k = sc || 1, w = 34 * k, h = 96 * k;
    return '<g>' + blocks(x - w / 2, base - h, w, h, SAND) +
      '<rect x="' + (x - w / 2 - 3 * k) + '" y="' + (base - h - 6 * k) + '" width="' + (w + 6 * k) + '" height="' + (6 * k) + '" fill="' + SAND2 + '"/>' +
      '<rect x="' + (x - 11 * k) + '" y="' + (base - h - 22 * k) + '" width="' + (22 * k) + '" height="' + (16 * k) + '" fill="' + SAND + '"/>' +
      '<path d="M' + (x - 11 * k) + ' ' + (base - h - 22 * k) + 'L' + x + ' ' + (base - h - 58 * k) + 'L' + (x + 11 * k) + ' ' + (base - h - 22 * k) + 'z" fill="#5b6470"/>' +
      '<circle cx="' + x + '" cy="' + (base - h + 18 * k) + '" r="' + (9 * k) + '" fill="#f2ead8" stroke="#3a2a22" stroke-width="' + (1.5 * k) + '"/>' +
      '<path d="M' + x + ' ' + (base - h + 18 * k) + 'v' + (-6 * k) + 'M' + x + ' ' + (base - h + 18 * k) + 'h' + (4 * k) + '" stroke="#222" stroke-width="' + (1.4 * k) + '"/>' +
      '<g fill="#3a2a22"><rect x="' + (x - 8 * k) + '" y="' + (base - h + 36 * k) + '" width="' + (6 * k) + '" height="' + (12 * k) + '" rx="' + (3 * k) + '"/><rect x="' + (x + 2 * k) + '" y="' + (base - h + 36 * k) + '" width="' + (6 * k) + '" height="' + (12 * k) + '" rx="' + (3 * k) + '"/>' +
      '<rect x="' + (x - 8 * k) + '" y="' + (base - h + 60 * k) + '" width="' + (16 * k) + '" height="' + (36 * k) + '" rx="' + (8 * k) + '"/></g></g>';
  };
  const crowd = (y, n, fill, x0, x1) => {
    let s = ""; const a = x0 || 0, b = x1 || 400;
    for (let i = 0; i < n; i++) {
      const x = a + 8 + i * ((b - a) / n), up = i % 3 === 0;
      s += '<g class="chxBob' + (i % 2 ? ' chxBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 16) + '" r="6"/><rect x="' + (x - 7) + '" y="' + (y - 10) + '" width="14" height="20" rx="5"/>' +
        (up ? '<path d="M' + (x - 5) + ' ' + (y - 7) + 'l-7 -15M' + (x + 5) + ' ' + (y - 7) + 'l7 -15" stroke="' + fill + '" stroke-width="3.5" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };

  /* 1. Dumfries railway station: red sandstone station house, green iron footbridge, a navy ScotRail-style unit pulling in */
  function chxstation() {
    let wins = "";
    for (let x = 52; x < 262; x += 30) wins += '<rect x="' + x + '" y="150" width="22" height="18" rx="2" fill="#cfe6ff" opacity=".9"/>';
    const train = '<g class="anim-train">' +
      '<rect x="30" y="140" width="250" height="56" rx="8" fill="' + NAVY + '" stroke="#0e1636" stroke-width="2"/>' +
      '<path d="M280 140q22 4 26 28v28h-26z" fill="' + NAVY + '" stroke="#0e1636" stroke-width="2"/>' +
      '<path d="M284 148q14 4 17 18h-17z" fill="#cfe6ff"/>' +
      '<rect x="30" y="176" width="276" height="5" fill="#f4f4f4"/>' + wins +
      '<rect x="292" y="182" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#1b1b1b"><circle cx="70" cy="198" r="8"/><circle cx="96" cy="198" r="8"/><circle cx="230" cy="198" r="8"/><circle cx="256" cy="198" r="8"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#chxs1)"/>' + gull +
      /* station building: Victorian red sandstone with tall chimneys */
      blocks(10, 64, 200, 70, SAND) +
      '<path d="M4 64h212l-14 -22H18z" fill="#4a4f5a"/>' +
      '<rect x="40" y="26" width="10" height="22" fill="' + SAND2 + '"/><rect x="170" y="26" width="10" height="22" fill="' + SAND2 + '"/>' +
      '<g fill="#e9e2cf"><rect x="28" y="78" width="16" height="26" rx="8"/><rect x="62" y="78" width="16" height="26" rx="8"/><rect x="142" y="78" width="16" height="26" rx="8"/><rect x="176" y="78" width="16" height="26" rx="8"/></g>' +
      '<rect x="96" y="84" width="28" height="50" rx="14" fill="#3a2a22"/>' +
      /* green iron footbridge */
      '<g fill="#2f5d3a"><rect x="250" y="66" width="10" height="130"/><rect x="380" y="66" width="10" height="130"/><rect x="246" y="60" width="148" height="16"/></g>' +
      '<path d="M252 76l12 -16M264 76l12 -16M276 76l12 -16M288 76l12 -16M300 76l12 -16M312 76l12 -16M324 76l12 -16M336 76l12 -16M348 76l12 -16M360 76l12 -16M372 76l12 -16" stroke="#1d3b25" stroke-width="2"/>' +
      /* platform canopy */
      '<rect x="0" y="134" width="400" height="6" fill="#d9d4c4"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5b5f68"/><rect x="0" y="196" width="400" height="6" fill="#f2c14e"/>' +
      '<path d="M0 222h400M0 240h400" stroke="#3e4149" stroke-width="3"/>' +
      train +
      /* navy station name sign */
      '<rect x="306" y="96" width="4" height="40" fill="#9aa3ab"/><rect x="346" y="96" width="4" height="40" fill="#9aa3ab"/>' +
      '<rect x="282" y="82" width="114" height="34" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="104" text-anchor="middle" ' + F + ' font-size="15" fill="#fff">Dumfries</text>' +
      '<text x="339" y="113" text-anchor="middle" ' + F + ' font-size="6" fill="#cfd8ff">GLASGOW SOUTH WESTERN LINE</text>',
      sky("chxs1", "#7fb2e0", "#e9eef2"));
  }

  /* 2. Devorgilla Bridge: the old six-arch red sandstone footbridge over the River Nith, the Caul weir foaming below */
  function chxbridge() {
    let arches = "", foam = "", waves = "";
    for (let i = 0; i < 6; i++) arches += '<path d="M' + (24 + i * 60) + ' 168q22 -34 44 0z" fill="#16222e"/>';
    for (let x = 0; x < 400; x += 20) foam += '<path d="M' + x + ' 206q5 -8 10 0q5 -8 10 0" stroke="#fff" stroke-width="2.4" fill="none" class="chxFoam' + (x % 40 ? ' chxFo2' : '') + '"/>';
    for (let x = 0; x < 480; x += 40) waves += '<path d="M' + x + ' 228q10 -5 20 0t20 0" stroke="#9fd3e6" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#chxs2)"/>' + gull +
      /* town on the far bank, the Midsteeple spire */
      '<g fill="#7a5b52"><rect x="0" y="92" width="60" height="40"/><rect x="66" y="100" width="44" height="32"/><rect x="250" y="96" width="50" height="36"/><rect x="306" y="88" width="94" height="44"/></g>' +
      '<g transform="translate(0 0)">' + midsteeple(190, 132, .5) + '</g>' +
      '<rect x="0" y="128" width="400" height="10" fill="#4e7a3a"/>' +
      /* the bridge */
      '<path d="M0 134h400v40H0z" fill="' + SAND + '"/>' +
      '<path d="M0 134h400" stroke="' + SAND2 + '" stroke-width="4"/>' +
      '<path d="M0 146h400M0 156h400" stroke="' + SAND2 + '" stroke-width=".8" opacity=".6"/>' + arches +
      '<g fill="' + SAND2 + '"><path d="M78 168l-10 12h20z"/><path d="M138 168l-10 12h20z"/><path d="M198 168l-10 12h20z"/><path d="M258 168l-10 12h20z"/><path d="M318 168l-10 12h20z"/></g>' +
      /* river, the caul and flowing water */
      '<rect x="0" y="174" width="400" height="86" fill="#2c6680"/>' +
      '<rect x="0" y="200" width="400" height="8" fill="#6b7d86"/>' + foam +
      '<g class="chxFlow">' + waves + '</g><g class="chxFlow chxFl2" transform="translate(0 16)">' + waves + '</g>' +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="10" fill="#fff" opacity=".85">RIVER NITH</text>',
      sky("chxs2", "#9cc8ea", "#f4e2c4"));
  }

  /* 3. Palmerston Park: Queen of the South's ground - royal blue stand, floodlights, the ball in the air */
  function chxpalmerston() {
    let seats = "";
    for (let x = 30; x < 370; x += 14) seats += '<rect x="' + x + '" y="96" width="10" height="5" fill="#fff" opacity=".85"/><rect x="' + x + '" y="108" width="10" height="5" fill="#fff" opacity=".6"/>';
    const flood = x => '<rect x="' + x + '" y="20" width="5" height="90" fill="#c8ccd4"/><rect x="' + (x - 12) + '" y="12" width="30" height="14" rx="2" fill="#e8ecf2"/>' +
      '<g class="chxFlk"><circle cx="' + (x - 5) + '" cy="19" r="3" fill="#fff8c8"/><circle cx="' + (x + 3) + '" cy="19" r="3" fill="#fff8c8"/><circle cx="' + (x + 11) + '" cy="19" r="3" fill="#fff8c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#chxs3)"/>' + flood(14) + flood(380) +
      /* the main stand */
      '<path d="M20 70h360v60H20z" fill="' + QOS + '"/><path d="M14 70h372l-10 -12H24z" fill="#e8ecf2"/>' + seats +
      '<rect x="160" y="74" width="80" height="14" rx="2" fill="#fff"/><text x="200" y="85" text-anchor="middle" ' + F + ' font-size="10" fill="' + QOS + '">PALMERSTON</text>' +
      crowd(132, 20, "#173f8c", 20, 380) +
      /* pitch */
      '<rect x="0" y="134" width="400" height="126" fill="#3f8f3a"/>' +
      '<g fill="#47a042"><rect x="0" y="150" width="400" height="16"/><rect x="0" y="182" width="400" height="16"/><rect x="0" y="214" width="400" height="16"/><rect x="0" y="246" width="400" height="14"/></g>' +
      '<path d="M200 134v126M0 140h400" stroke="#fff" stroke-width="2" opacity=".85"/><ellipse cx="200" cy="200" rx="56" ry="24" stroke="#fff" stroke-width="2" fill="none" opacity=".85"/>' +
      /* blue and white flags */
      '<g class="chxFlag"><rect x="40" y="142" width="26" height="14" fill="' + QOS + '"/><rect x="40" y="147" width="26" height="4" fill="#fff"/></g><rect x="38" y="140" width="2" height="30" fill="#ddd"/>' +
      '<g class="chxFlag"><rect x="336" y="142" width="26" height="14" fill="#fff"/><rect x="336" y="147" width="26" height="4" fill="' + QOS + '"/></g><rect x="334" y="140" width="2" height="30" fill="#ddd"/>' +
      '<g class="chxBall"><circle cx="150" cy="214" r="8" fill="#fff" stroke="#222" stroke-width="1.2"/><path d="M146 210l4 3l4 -3M150 213v5" stroke="#222" stroke-width="1.2" fill="none"/></g>',
      sky("chxs3", "#0f1a3a", "#3a5a8a"));
  }

  /* 4. The bedroom set-up: the old Amiga his first album was made on, a tracker on the screen, the disco ball spinning */
  function chxamiga() {
    let eq = "";
    for (let i = 0; i < 9; i++) eq += '<rect x="' + (156 + i * 10) + '" y="72" width="7" height="34" fill="' + [GOLD, PINK, CYAN][i % 3] + '" class="chxEq' + (i % 4 ? ' chxE' + (1 + i % 4) : '') + '"/>';
    let ball = '<g class="chxSpin"><circle cx="330" cy="54" r="22" fill="#cfd6e0"/>';
    for (let r = -18; r <= 18; r += 6) ball += '<path d="M310 ' + (54 + r) + 'h40" stroke="#8a93a6" stroke-width="1"/>';
    for (let c = -18; c <= 18; c += 6) ball += '<path d="M' + (330 + c) + ' 34v40" stroke="#8a93a6" stroke-width="1"/>';
    ball += '<rect x="318" y="44" width="6" height="6" fill="#fff"/><rect x="336" y="58" width="6" height="6" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1426"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#2a2140"/>' +
      '<path d="M330 0v32" stroke="#888" stroke-width="2"/>' + ball +
      '<g opacity=".35"><path d="M330 54L40 190h30z" fill="' + GOLD + '" class="chxFlk"/><path d="M330 54L380 190h-26z" fill="' + PINK + '" class="chxFlk chxF2"/></g>' +
      /* poster on the wall */
      '<rect x="30" y="30" width="70" height="90" fill="' + GOLD + '" transform="rotate(-4 65 75)"/>' +
      '<text x="65" y="66" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#1a1426" transform="rotate(-4 65 75)">I CREATED</text>' +
      '<text x="65" y="88" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#1a1426" transform="rotate(-4 65 75)">DISCO</text>' +
      /* desk */
      '<rect x="110" y="168" width="240" height="10" fill="#7a5434"/><rect x="122" y="178" width="8" height="70" fill="#5a3a24"/><rect x="330" y="178" width="8" height="70" fill="#5a3a24"/>' +
      /* monitor with tracker */
      '<rect x="140" y="56" width="110" height="82" rx="6" fill="#d8d0bc" stroke="#8a826e" stroke-width="2"/>' +
      '<rect x="148" y="64" width="94" height="62" fill="#10204a"/>' + eq +
      '<g fill="#7fe0ff" font-family="Courier New, monospace" font-size="6"><text x="152" y="120">C-3 01 .. 0A0</text><text x="200" y="120">E-3 02 ..</text></g>' +
      '<rect x="185" y="138" width="20" height="10" fill="#b5ad98"/><rect x="170" y="146" width="50" height="6" rx="2" fill="#b5ad98"/>' +
      /* the beige computer + keyboard */
      '<rect x="130" y="154" width="150" height="16" rx="3" fill="#e6dfca" stroke="#a49c86"/>' +
      '<g fill="#bfb7a1"><rect x="138" y="158" width="100" height="3"/><rect x="138" y="163" width="100" height="3"/><rect x="246" y="158" width="26" height="8"/></g>' +
      '<rect x="262" y="128" width="64" height="40" rx="3" fill="#e6dfca" stroke="#a49c86"/><rect x="274" y="140" width="34" height="4" fill="#3a3a3a"/><circle cx="314" cy="156" r="2" fill="#ff4040" class="chxFlk"/>' +
      /* headphones */
      '<path d="M296 116q14 -22 28 0" stroke="#222" stroke-width="4" fill="none"/><rect x="292" y="114" width="8" height="12" rx="3" fill="#222"/><rect x="320" y="114" width="8" height="12" rx="3" fill="#222"/>' +
      '<rect x="0" y="248" width="400" height="12" fill="#3a2a40"/>' +
      tag("BEDROOM DEMOS", 112, 34, 18, "#fff", -3),
      "");
  }

  /* 5. Calside Road, by his old primary school, with the Midsteeple of Dumfries behind */
  function chxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#chxs5)"/>' + gull +
      '<path d="M0 120q90 -24 200 -12t200 4v30H0z" fill="#6f8f5a"/>' +
      '<g fill="#8a6a60"><rect x="20" y="96" width="60" height="44"/><rect x="300" y="100" width="80" height="40"/></g>' +
      midsteeple(196, 150, .78) +
      /* wall with the tag */
      '<rect x="0" y="146" width="400" height="76" fill="#6a6f78"/>' +
      '<path d="M0 160h400M0 176h400M0 192h400M0 208h400" stroke="#5a5f68" stroke-width="1"/>' +
      tag("DOONHAMER", 40, 172, 18, CYAN, -3) +
      tag("CALVIN HARRIS", 22, 210, 33, GOLD, -4) +
      '<rect x="0" y="222" width="400" height="38" fill="#2f3238"/><rect x="0" y="220" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* Scottish street name plates: white, black letters, black border */
      '<rect x="350" y="80" width="5" height="142" fill="#2a2a2a"/>' +
      '<rect x="270" y="84" width="124" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="332" y="101" text-anchor="middle" ' + F + ' font-size="13" fill="#111">CALSIDE ROAD</text>' +
      '<rect x="296" y="112" width="98" height="16" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="345" y="124" text-anchor="middle" ' + F + ' font-size="9" fill="#111">DUMFRIES DG1</text>' +
      '',
      sky("chxs5", "#8ec1ea", "#f6e3c0"));
  }

  window.SCENES = { chxstation, chxbridge, chxpalmerston, chxamiga, chxcorner };
})();
