/* Sabrina Carpenter game (GENRES: POP; region: PHILADELPHIA (Pennsylvania); born in Quakertown, Bucks County, grew up there and
   then in East Greenville just over the Montgomery County line, home-schooled, recording in the studio her dad built at home).
   Rooms: the Quakertown Park & Ride on Route 663 at the Turnpike's Quakertown exit (the coach to Philly and New York), Lake
   Nockamixon's sailboats in Upper Bucks, Liberty Hall on West Broad St with its replica Liberty Bell out front (the bells were
   guarded behind it on the way to Allentown in 1777), her hometown arena show in South Philly (Oct 2024), and Front St at
   E Broad St with the old 1902 Reading Railroad station behind.
   CSS classes prefixed "sbc" (the page's anim-train is kept for the coach). No logos (no bus line, no arena or sponsor marks),
   no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sbcTw{0%,100%{opacity:1}50%{opacity:.25}}.sbcTw{animation:sbcTw 1.7s ease-in-out infinite}.sbcT2{animation-delay:.55s}.sbcT3{animation-delay:1.1s}' +
    '@keyframes sbcBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sbcBob{animation:sbcBob .8s ease-in-out infinite}.sbcBb2{animation-delay:.4s}' +
    '@keyframes sbcCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.sbcCloud{animation:sbcCloud 30s linear infinite}.sbcC2{animation-delay:-15s}' +
    '@keyframes sbcSail{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.sbcSail{animation:sbcSail 7s ease-in-out infinite}.sbcSl2{animation-delay:-3.5s}' +
    '@keyframes sbcWave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.sbcWave{animation:sbcWave 3s linear infinite}' +
    '@keyframes sbcSwing{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.sbcSwing{transform-box:view-box;transform-origin:96px 150px;animation:sbcSwing 1.8s ease-in-out infinite}' +
    '@keyframes sbcBeam{0%,100%{opacity:.18}50%{opacity:.55}}.sbcBeam{animation:sbcBeam 2.2s ease-in-out infinite}.sbcBm2{animation-delay:1.1s}' +
    '@keyframes sbcHeart{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-80px);opacity:0}}.sbcHeart{animation:sbcHeart 3.2s linear infinite}.sbcH2{animation-delay:1.1s}.sbcH3{animation-delay:2.2s}' +
    '@keyframes sbcSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.sbcSpark{transform-box:fill-box;transform-origin:50% 50%;animation:sbcSpark 1.4s ease-in-out infinite}.sbcS2{animation-delay:.5s}' +
    '@keyframes sbcCar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.sbcCar{animation:sbcCar 6s linear infinite}.sbcCr2{animation-delay:-3s}' +
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
  const PINK = "#f7c6d9", COFFEE = "#8a5a3c", SKY = "#9ad0ec", HOT = "#e8578a", CREAM = "#fff3e6", BRICK = "#8e4632";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="sbcTw' + (i % 3 === 1 ? ' sbcT2' : i % 3 === 2 ? ' sbcT3' : '') + '"/>';
    }
    return s;
  };
  const cloud = (x, y, cls) => '<g class="sbcCloud' + (cls || '') + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 6 * s) + '" width="' + (4 * s) + '" height="' + (12 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const bricks = (x, y, w, h, c, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8"/>';
    return s;
  };
  const heart = (x, y, s, c, cls) => '<path class="' + (cls || '') + '" d="M' + x + ' ' + (y + 8 * s) + 'q' + (-10 * s) + ' ' + (-7 * s) + ' ' + (-10 * s) + ' ' + (-13 * s) + 'q0 ' + (-5 * s) + ' ' + (5 * s) + ' ' + (-5 * s) + 'q' + (3 * s) + ' 0 ' + (5 * s) + ' ' + (3 * s) + 'q' + (2 * s) + ' ' + (-3 * s) + ' ' + (5 * s) + ' ' + (-3 * s) + 'q' + (5 * s) + ' 0 ' + (5 * s) + ' ' + (5 * s) + 'q0 ' + (6 * s) + ' ' + (-10 * s) + ' ' + (13 * s) + 'z" fill="' + c + '"/>';
  const crowd = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 6 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="sbcBob' + (i % 2 ? ' sbcBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 12) + '" r="4.5"/><rect x="' + (x - 5) + '" y="' + (y - 7) + '" width="10" height="14" rx="4"/></g>';
    }
    return s;
  };

  /* 1. the coach pulling into the Quakertown Park & Ride on Route 663, the Turnpike sign behind */
  function sbcstation() {
    let wins = "";
    for (let i = 0; i < 7; i++) wins += '<rect x="' + (54 + i * 30) + '" y="138" width="26" height="22" rx="2" fill="#26323e"/>';
    const bus = '<g class="anim-train">' +
      '<rect x="36" y="128" width="262" height="70" rx="9" fill="#f4f4f0" stroke="#7d828a" stroke-width="2"/>' + wins +
      '<path d="M270 134h22q6 2 6 12v20h-28z" fill="#26323e"/>' +
      '<path d="M36 170h262v7H36z" fill="' + HOT + '"/><path d="M36 177h262v4H36z" fill="' + SKY + '"/>' +
      '<rect x="226" y="130" width="40" height="7" rx="1" fill="#111"/><text x="246" y="135.6" text-anchor="middle" ' + F + ' font-size="5" fill="#ffb000">QUAKERTOWN</text>' +
      '<rect x="40" y="186" width="250" height="4" fill="#7d828a"/>' +
      '<circle cx="84" cy="200" r="11" fill="#222"/><circle cx="84" cy="200" r="4" fill="#888"/><circle cx="250" cy="200" r="11" fill="#222"/><circle cx="250" cy="200" r="4" fill="#888"/>' +
      '<rect x="292" y="182" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbcs1)"/>' + cloud(90, 30) + cloud(300, 48, ' sbcC2') +
      '<path d="M0 118q70 -26 150 -16t140 -12t110 8v30H0z" fill="#7aa36a"/>' +
      tree(30, 120, 1.1, "#4f7d3e") + tree(70, 118, .9, "#5a8a48") + tree(360, 118, 1.2, "#4f7d3e") +
      /* the big green highway sign for the Turnpike exit, on its gantry */
      '<rect x="296" y="40" width="4" height="84" fill="#777"/><rect x="380" y="40" width="4" height="84" fill="#777"/>' +
      '<rect x="288" y="30" width="104" height="44" rx="4" fill="#1d6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="340" y="48" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">QUAKERTOWN</text>' +
      '<text x="340" y="63" text-anchor="middle" ' + F + ' font-size="8" fill="#fff">PA 663  NEXT RIGHT</text>' +
      '<rect x="0" y="118" width="400" height="10" fill="#6a6a6a"/>' +
      /* lot + curb */
      '<rect x="0" y="198" width="400" height="62" fill="#5d5f63"/><path d="M0 230h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      /* the bus shelter and the stop sign */
      '<rect x="318" y="132" width="70" height="6" fill="#3a3f46"/><rect x="320" y="138" width="3" height="60" fill="#3a3f46"/><rect x="384" y="138" width="3" height="60" fill="#3a3f46"/>' +
      '<rect x="324" y="140" width="58" height="40" fill="' + SKY + '" opacity=".35"/>' +
      '<rect x="20" y="206" width="4" height="46" fill="#2a2a2a"/>' +
      '<rect x="4" y="202" width="128" height="30" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="68" y="216" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">QUAKERTOWN</text>' +
      '<text x="68" y="227" text-anchor="middle" ' + F + ' font-size="8" fill="' + PINK + '">PARK &amp; RIDE</text>',
      sky("sbcs1", "#8ec4ea", "#f6e7ee"));
  }

  /* 2. Lake Nockamixon in Upper Bucks: sailboats drifting, wooded hills, a little dock */
  function sbclake() {
    const boat = (x, y, c, cls) => '<g class="sbcSail' + cls + '"><path d="M' + x + ' ' + y + 'h36l-6 8h-24z" fill="#fff" stroke="#555"/><path d="M' + (x + 18) + ' ' + (y - 2) + 'v-44l-16 42z" fill="' + c + '"/><path d="M' + (x + 20) + ' ' + (y - 2) + 'v-36l14 34z" fill="#fff" stroke="#ccc"/></g>';
    let ripples = "";
    for (let i = 0; i < 12; i++) ripples += '<path d="M' + (i * 40) + ' ' + (176 + (i % 3) * 14) + 'q10 -4 20 0" stroke="#d9eef8" stroke-width="1.5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbcs2)"/>' + cloud(70, 34) + cloud(280, 24, ' sbcC2') +
      '<path d="M0 132q60 -40 130 -24t120 -20t150 22v30H0z" fill="#557a46"/>' +
      '<path d="M0 140q80 -20 170 -6t230 -6v12H0z" fill="#3f6534"/>' +
      tree(40, 146, 1, "#365a2c") + tree(120, 142, .9, "#406a34") + tree(330, 144, 1.1, "#365a2c") +
      '<rect x="0" y="146" width="400" height="114" fill="#3f86b0"/>' +
      '<g class="sbcWave">' + ripples + '</g>' +
      boat(70, 176, HOT, '') + boat(250, 196, SKY, ' sbcSl2') + boat(180, 160, PINK, '') +
      /* dock */
      '<path d="M300 230h100v10H300z" fill="#8a6a44"/><path d="M310 240v20M340 240v20M370 240v20" stroke="#5a4028" stroke-width="4"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="9" fill="#e9f5fb">LAKE NOCKAMIXON - UPPER BUCKS</text>',
      sky("sbcs2", "#7ab8e2", "#fce8d8"));
  }

  /* 3. Liberty Hall on West Broad St (1772, half-gambrel roof), the replica Liberty Bell out front ringing */
  function sbcliberty() {
    return svg(
      '<rect width="400" height="260" fill="url(#sbcs3)"/>' + cloud(60, 30) + cloud(300, 44, ' sbcC2') +
      tree(40, 150, 1.4, "#5a8a48") + tree(372, 150, 1.4, "#5a8a48") +
      /* the little two-storey hall: stuccoed stone, half-gambrel roof */
      '<path d="M170 92l40 -30h60v30z" fill="#4a3a34"/><path d="M170 92h100v-8l-14 -22" fill="none"/>' +
      '<rect x="170" y="92" width="100" height="110" fill="#efe4cc" stroke="#9a8a6a" stroke-width="2"/>' +
      '<rect x="252" y="40" width="12" height="30" fill="#8a4a34"/>' +
      '<rect x="186" y="108" width="24" height="28" fill="#2f4a5a" stroke="#fff" stroke-width="3"/><path d="M198 108v28M186 122h24" stroke="#fff" stroke-width="2"/>' +
      '<rect x="230" y="108" width="24" height="28" fill="#2f4a5a" stroke="#fff" stroke-width="3"/><path d="M242 108v28M230 122h24" stroke="#fff" stroke-width="2"/>' +
      '<rect x="206" y="152" width="28" height="50" fill="#2a4a3a" stroke="#1a2a20" stroke-width="2"/><circle cx="228" cy="178" r="2" fill="#d9b26a"/>' +
      '<rect x="270" y="120" width="60" height="82" fill="#e6d8bc" stroke="#9a8a6a" stroke-width="2"/><path d="M266 120l34 -20l34 20z" fill="#5a4a44"/>' +
      '<rect x="286" y="138" width="22" height="24" fill="#2f4a5a" stroke="#fff" stroke-width="3"/>' +
      /* the bell frame and the swinging replica bell */
      '<rect x="62" y="140" width="6" height="72" fill="#4a3424"/><rect x="124" y="140" width="6" height="72" fill="#4a3424"/><rect x="56" y="136" width="80" height="8" fill="#5a3e28"/>' +
      '<g class="sbcSwing"><path d="M96 150v4" stroke="#333" stroke-width="3"/><path d="M84 156q12 -6 24 0l6 34q-18 6 -36 0z" fill="#9a7a3a" stroke="#5a4418" stroke-width="2"/>' +
      '<path d="M80 188h32" stroke="#5a4418" stroke-width="3"/><path d="M98 166l3 6 -2 5 3 6" stroke="#3a2a10" stroke-width="1.4" fill="none"/><circle cx="96" cy="196" r="3.5" fill="#5a4418"/></g>' +
      '<g fill="' + HOT + '"><text x="132" y="150" ' + F + ' font-size="13" class="sbcSpark">DING</text></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#8e8a80"/><rect x="0" y="206" width="400" height="8" fill="#5f9a4c"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">LIBERTY HALL  -  1772</text>',
      sky("sbcs3", "#9fd0ee", "#fbeef2"));
  }

  /* 4. her hometown arena show in South Philly: pink stage, heart lights, the crowd */
  function sbcarena() {
    return svg(
      '<rect width="400" height="260" fill="#160b1c"/>' + stars(18, 6, 60) +
      '<path d="M0 60q200 -40 400 0v30H0z" fill="#241430"/>' +
      '<g class="sbcBeam"><path d="M90 40l-60 160h80z" fill="' + PINK + '"/></g><g class="sbcBeam sbcBm2"><path d="M310 40l-20 160h80z" fill="' + SKY + '"/></g>' +
      /* the stage with a giant heart behind */
      '<rect x="40" y="70" width="320" height="110" rx="6" fill="#2c1638"/>' +
      heart(200, 112, 4.2, HOT, '') + heart(200, 116, 3.2, PINK, '') +
      '<rect x="60" y="176" width="280" height="14" fill="' + PINK + '"/><rect x="60" y="190" width="280" height="6" fill="#b06a8a"/>' +
      /* the singer, from behind: blonde hair, short dress, mic stand */
      '<path d="M192 146q8 -10 16 0v16h-16z" fill="#f4d58a"/><path d="M190 160h20l4 18h-28z" fill="' + CREAM + '"/>' +
      '<rect x="194" y="176" width="3" height="12" fill="#f0c8a8"/><rect x="203" y="176" width="3" height="12" fill="#f0c8a8"/>' +
      '<path d="M218 176v-30" stroke="#ccc" stroke-width="2"/><circle cx="218" cy="144" r="3" fill="#999"/>' +
      heart(150, 140, 1.2, PINK, 'sbcHeart') + heart(250, 140, 1.2, SKY, 'sbcHeart sbcH2') + heart(200, 130, 1, HOT, 'sbcHeart sbcH3') +
      '<rect x="0" y="196" width="400" height="64" fill="#1e1028"/>' +
      crowd(226, 17, 0, 400, ["#3a2a48", "#4a3458", "#33223f"]) + crowd(252, 19, -10, 410, ["#2a1c36", "#3a2848"]) +
      '<g fill="#fff3a8"><circle cx="60" cy="210" r="2" class="sbcTw"/><circle cx="150" cy="214" r="2" class="sbcTw sbcT2"/><circle cx="260" cy="208" r="2" class="sbcTw sbcT3"/><circle cx="340" cy="212" r="2" class="sbcTw"/></g>',
      "");
  }

  /* 5. Front St at E Broad St in Quakertown, the 1902 Reading Railroad station behind, her name on the wall */
  function sbccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sbcs5)"/>' + cloud(70, 24) + cloud(270, 38, ' sbcC2') +
      /* the old brick station: deep hipped slate roof on brackets */
      '<rect x="96" y="76" width="200" height="60" fill="' + BRICK + '"/>' +
      '<path d="M76 80l40 -34h160l40 34z" fill="#3e4048"/><rect x="186" y="28" width="20" height="22" fill="' + BRICK + '"/><path d="M182 30h28l-14 -10z" fill="#3e4048"/>' +
      '<path d="M100 80l6 8M140 80l6 8M180 80l6 8M220 80l6 8M260 80l6 8M290 80l-6 8" stroke="#6a4a30" stroke-width="3"/>' +
      '<rect x="118" y="94" width="18" height="30" fill="#e6d8a8" class="sbcBeam"/><rect x="156" y="94" width="18" height="30" fill="#e6d8a8"/><rect x="218" y="94" width="18" height="30" fill="#e6d8a8"/><rect x="256" y="94" width="18" height="30" fill="#e6d8a8" class="sbcBeam sbcBm2"/>' +
      tree(40, 132, 1.2, "#5a8a48") + tree(348, 132, 1.1, "#5a8a48") +
      /* wall with the tags */
      bricks(0, 134, 400, 70, "#b9a58a", "#8e7c62") +
      tag("SABRINA", 40, 186, 40, PINK, -4) +
      tag("ESPRESSO", 222, 166, 20, CREAM, -6) +
      tag("SAB", 270, 196, 22, SKY, -3) +
      heart(200, 186, 1.4, HOT, '') +
      '<g class="sbcSpark"><path d="M214 146l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="sbcSpark sbcS2"><path d="M30 156l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="204" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="212" width="400" height="48" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f4d23c" stroke-width="2"/>' +
      '<g class="sbcCar"><rect x="0" y="218" width="54" height="16" rx="5" fill="' + SKY + '"/><rect x="10" y="212" width="32" height="10" rx="3" fill="#cfe6f2"/><circle cx="12" cy="236" r="5" fill="#222"/><circle cx="44" cy="236" r="5" fill="#222"/></g>' +
      /* green PA street signs */
      '<rect x="364" y="40" width="5" height="172" fill="#2a2a2a"/>' +
      '<rect x="292" y="44" width="104" height="22" rx="3" fill="#1d6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="344" y="59.5" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">FRONT ST</text>' +
      '<rect x="282" y="70" width="114" height="22" rx="3" fill="#1d6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="85.5" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">E BROAD ST</text>',
      sky("sbcs5", "#8ec4ea", "#fbe6ee"));
  }

  window.SCENES = { sbcstation, sbclake, sbcliberty, sbcarena, sbccorner };
})();
