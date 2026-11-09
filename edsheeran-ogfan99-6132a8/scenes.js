/* Ed Sheeran game (GENRES: POP; Regions: UK + Europe; born in Halifax, West Yorkshire, raised in Framlingham, Suffolk).
   Rooms: Wickham Market station (East Suffolk line, the nearest rail stop for Framlingham), the Piece Hall in Halifax (his birthplace),
   Framlingham Castle at sunset ("Castle on the Hill"), Portman Road in Ipswich (his team, Ipswich Town), and Market Hill in
   Framlingham with St Michael's church tower behind. CSS classes prefixed "eds" (the page's anim-train is kept).
   No logos (no club crest, no operator logo), no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes edsTw{0%,100%{opacity:1}50%{opacity:.3}}.edsTw{animation:edsTw 1.8s ease-in-out infinite}.edsT2{animation-delay:.6s}' +
    '@keyframes edsBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.edsBob{animation:edsBob .6s ease-in-out infinite}.edsBb2{animation-delay:.3s}' +
    '@keyframes edsBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.edsBird{animation:edsBird 11s linear infinite}.edsBd2{animation-delay:-5s}' +
    '@keyframes edsCar{0%{transform:translate(-60px,0)}100%{transform:translate(470px,0)}}.edsCar{animation:edsCar 6s linear infinite}' +
    '@keyframes edsFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-9deg)}}.edsFlag{transform-box:fill-box;transform-origin:0 50%;animation:edsFlag 1.2s ease-in-out infinite}' +
    '@keyframes edsSway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.edsSway{transform-box:fill-box;transform-origin:50% 0;animation:edsSway 2s ease-in-out infinite}' +
    '@keyframes edsBall{0%,100%{transform:translate(0,0)}50%{transform:translate(70px,-26px)}}.edsBall{animation:edsBall 2.4s ease-in-out infinite}' +
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
  const GINGER = "#f08a2a", GREEN = "#5aa04a", SKY = "#7fc8f0", RED = "#d70428", STONE = "#d9b77a", STONE2 = "#b8955a", FLINT = "#8d8f8c", BRICK = "#a5523a";
  const bird = (cls) => '<g class="edsBird ' + (cls || "") + '"><path d="M0 40q7 -7 14 0q7 -7 14 0" stroke="#2a2a2a" stroke-width="2.2" fill="none"/></g>';
  const crowd = (y, n, fill, x0, x1, scarf) => {
    let s = ""; const a = x0 || 0, b = x1 || 400;
    for (let i = 0; i < n; i++) {
      const x = a + 6 + i * ((b - a) / n), up = i % 3 === 0;
      s += '<g class="edsBob' + (i % 2 ? ' edsBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="18" rx="5"/>' +
        (up && scarf ? '<path d="M' + (x - 10) + ' ' + (y - 26) + 'h20" stroke="#1f4fa8" stroke-width="4"/><path d="M' + (x - 6) + ' ' + (y - 26) + 'h4M' + (x + 2) + ' ' + (y - 26) + 'h4" stroke="#fff" stroke-width="4"/>' : '') + '</g>';
    }
    return s;
  };

  /* 1. Wickham Market station: a small red-brick country station on the East Suffolk line, fields behind, a white-and-red unit pulling in */
  function edsstation() {
    let wins = "";
    for (let x = 50; x < 270; x += 30) wins += '<rect x="' + x + '" y="148" width="22" height="18" rx="2" fill="#1d2a36"/>';
    const train = '<g class="anim-train">' +
      '<rect x="24" y="138" width="262" height="56" rx="8" fill="#f2f2f0" stroke="#3a3a3a" stroke-width="2"/>' +
      '<path d="M286 138q24 4 28 28v28h-28z" fill="' + RED + '" stroke="#3a3a3a" stroke-width="2"/>' +
      '<path d="M290 146q14 4 18 18h-18z" fill="#1d2a36"/>' +
      '<rect x="24" y="172" width="262" height="6" fill="' + RED + '"/>' + wins +
      '<rect x="300" y="180" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#1b1b1b"><circle cx="64" cy="196" r="7"/><circle cx="88" cy="196" r="7"/><circle cx="224" cy="196" r="7"/><circle cx="248" cy="196" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#edss1)"/>' + bird() + bird("edsBd2") +
      /* rolling Suffolk fields */
      '<path d="M0 110q80 -20 170 -6t230 -10v50H0z" fill="#8bbf5a"/><path d="M0 124q120 -16 240 -2t160 -8v30H0z" fill="#d8c25a"/>' +
      '<path d="M40 126l20 -10M120 122l26 -8M260 124l20 -8" stroke="#b8a240" stroke-width="2"/>' +
      /* red-brick station house */
      '<rect x="10" y="70" width="150" height="66" fill="' + BRICK + '"/><path d="M4 70h162l-18 -22H22z" fill="#5a4a44"/>' +
      '<rect x="30" y="40" width="10" height="14" fill="#7d3a28"/><rect x="128" y="40" width="10" height="14" fill="#7d3a28"/>' +
      '<g fill="#efe6d0"><rect x="26" y="86" width="16" height="22" rx="2"/><rect x="58" y="86" width="16" height="22" rx="2"/><rect x="122" y="86" width="16" height="22" rx="2"/></g>' +
      '<rect x="88" y="90" width="22" height="46" fill="#3a2a22"/>' +
      /* platform */
      '<rect x="0" y="196" width="400" height="64" fill="#62666e"/><rect x="0" y="196" width="400" height="6" fill="#f2f2f2"/>' +
      '<path d="M0 222h400M0 240h400" stroke="#474a51" stroke-width="3"/>' +
      train +
      /* station name sign */
      '<rect x="306" y="92" width="4" height="44" fill="#9aa3ab"/><rect x="370" y="92" width="4" height="44" fill="#9aa3ab"/>' +
      '<rect x="262" y="66" width="132" height="40" rx="3" fill="#fff" stroke="' + RED + '" stroke-width="3"/>' +
      '<circle cx="279" cy="86" r="11" fill="' + RED + '"/><text x="279" y="90" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">ES</text>' +
      '<text x="336" y="86" text-anchor="middle" ' + F + ' font-size="12" fill="#222">Wickham</text>' +
      '<text x="336" y="99" text-anchor="middle" ' + F + ' font-size="12" fill="#222">Market</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="9" fill="#fff" letter-spacing="3">EAST SUFFOLK LINE · FOR FRAMLINGHAM</text>',
      sky("edss1", "#8cc6ee", "#eef4f6"));
  }

  /* 2. The Piece Hall, Halifax (where he was born): the honey-sandstone colonnades round the big open square, bunting swaying */
  function edspiecehall() {
    let arches = "", cols = "", bunting = "";
    for (let x = 14; x < 390; x += 26) arches += '<path d="M' + x + ' 196v-26q11 -14 22 0v26z" fill="#4a3a28"/>';
    for (let x = 16; x < 392; x += 18) cols += '<rect x="' + x + '" y="112" width="6" height="40" fill="#f0d7a2"/>';
    for (let i = 0; i < 16; i++) bunting += '<path d="M' + (i * 26) + ' 34l13 0l-6.5 12z" fill="' + [GINGER, SKY, GREEN, "#fff"][i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#edss2)"/>' + bird() +
      '<path d="M0 32q200 16 400 0" stroke="#666" stroke-width="1" fill="none"/>' + '<g class="edsSway">' + bunting + '</g>' +
      /* top tier */
      '<rect x="0" y="62" width="400" height="44" fill="' + STONE + '"/><rect x="0" y="58" width="400" height="6" fill="' + STONE2 + '"/>' +
      '<g fill="#5a4630">' + Array.from({ length: 19 }, (_, i) => '<rect x="' + (10 + i * 21) + '" y="72" width="10" height="20" rx="1"/>').join("") + '</g>' +
      /* middle tier: open colonnade */
      '<rect x="0" y="106" width="400" height="50" fill="#6a5238"/><rect x="0" y="106" width="400" height="6" fill="' + STONE2 + '"/>' + cols +
      '<rect x="0" y="150" width="400" height="6" fill="' + STONE2 + '"/>' +
      /* ground tier: rusticated arcade */
      '<rect x="0" y="156" width="400" height="44" fill="' + STONE + '"/>' + arches +
      /* the square */
      '<rect x="0" y="200" width="400" height="60" fill="#cbb48a"/>' +
      '<path d="M0 214h400M0 232h400M60 200l-30 60M140 200l-14 60M260 200l14 60M340 200l30 60" stroke="#b39c72" stroke-width="1.2"/>' +
      crowd(236, 9, "#3a2f2a", 40, 360, false) +
      '<text x="200" y="254" text-anchor="middle" ' + F + ' font-size="9" fill="#3a2a10" letter-spacing="3">THE PIECE HALL · HALIFAX · WHERE HE WAS BORN</text>',
      sky("edss2", "#9fd0f2", "#f2ead6"));
  }

  /* 3. Framlingham Castle at sunset: flint curtain wall, square towers, tall red-brick Tudor chimneys, a car on the country lane below */
  function edscastle() {
    let towers = "", chims = "";
    [70, 130, 190, 250, 310].forEach(x => {
      towers += '<rect x="' + (x - 14) + '" y="74" width="28" height="70" fill="' + FLINT + '" stroke="#6a6c69" stroke-width="1.5"/>' +
        '<path d="M' + (x - 14) + ' 74h6v-6h5v6h6v-6h5v6h6" fill="' + FLINT + '"/>';
      chims += '<g fill="' + BRICK + '"><rect x="' + (x - 5) + '" y="46" width="10" height="22"/><rect x="' + (x - 7) + '" y="42" width="14" height="5"/></g>' +
        '<path d="M' + (x - 4) + ' 50l8 6M' + (x - 4) + ' 58l8 6" stroke="#7d3a28" stroke-width="1.5"/>';
    });
    const car = '<g class="edsCar"><rect x="0" y="200" width="42" height="14" rx="4" fill="' + SKY + '"/><path d="M8 200l6 -9h16l6 9z" fill="' + SKY + '"/><path d="M15 199l3 -6h11l3 6z" fill="#2a3a48"/>' +
      '<g fill="#1b1b1b"><circle cx="10" cy="215" r="4.5"/><circle cx="32" cy="215" r="4.5"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#edss3)"/>' +
      '<circle cx="330" cy="70" r="28" fill="#ffd27a" class="edsTw"/>' + bird() + bird("edsBd2") +
      /* the hill */
      '<path d="M0 150q200 -40 400 0v110H0z" fill="#4f7d3a"/>' +
      /* curtain wall */
      '<rect x="56" y="88" width="268" height="56" fill="#9a9c98"/>' +
      '<g fill="#7f817d">' + Array.from({ length: 40 }, (_, i) => '<circle cx="' + (62 + (i * 37) % 258) + '" cy="' + (94 + (i * 13) % 46) + '" r="2"/>').join("") + '</g>' +
      chims + towers +
      /* the mere */
      '<path d="M0 176q100 -12 220 -2t180 -4v18H0z" fill="#e89a5a" opacity=".85"/>' +
      /* the country lane */
      '<path d="M0 214q200 -10 400 0v16q-200 -10 -400 0z" fill="#8a7a62"/>' + car +
      '<rect x="0" y="230" width="400" height="30" fill="#3d6a2c"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="9" fill="#fff" letter-spacing="3">FRAMLINGHAM CASTLE · THE CASTLE ON THE HILL</text>',
      sky("edss3", "#3d4a8a", "#f4a25a"));
  }

  /* 4. Portman Road, Ipswich: blue stands, floodlights, a crowd in blue-and-white scarves, a ball in the air */
  function edsportman() {
    let seats = "";
    for (let y = 80; y < 140; y += 8) seats += '<path d="M0 ' + y + 'h400" stroke="#173f8a" stroke-width="1.5"/>';
    const flood = (x) => '<rect x="' + (x - 2) + '" y="10" width="4" height="70" fill="#9aa1ab"/><rect x="' + (x - 14) + '" y="4" width="28" height="14" fill="#cfd6e0"/>' +
      '<g fill="#fff6c8" class="edsTw"><circle cx="' + (x - 8) + '" cy="11" r="3"/><circle cx="' + x + '" cy="11" r="3"/><circle cx="' + (x + 8) + '" cy="11" r="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#edss4)"/>' + flood(30) + flood(370) +
      /* the stand */
      '<rect x="0" y="60" width="400" height="90" fill="#1f4fa8"/><rect x="0" y="56" width="400" height="8" fill="#e9ecf0"/>' + seats +
      '<text x="200" y="116" text-anchor="middle" ' + F + ' font-size="22" fill="#fff" letter-spacing="6" opacity=".9">PORTMAN ROAD</text>' +
      crowd(150, 30, "#0d1d3a", 0, 400, true) +
      /* the pitch */
      '<rect x="0" y="150" width="400" height="110" fill="#3f8f3a"/>' +
      '<g fill="#47993f">' + [0, 80, 160, 240, 320].map(x => '<rect x="' + x + '" y="150" width="40" height="110"/>').join("") + '</g>' +
      '<path d="M0 205h400M200 150v110" stroke="#e9f2e2" stroke-width="2.5"/><circle cx="200" cy="205" r="30" stroke="#e9f2e2" stroke-width="2.5" fill="none"/>' +
      '<g class="edsBall"><circle cx="140" cy="226" r="6" fill="#fff" stroke="#222" stroke-width="1.5"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="9" fill="#fff" letter-spacing="3">IPSWICH · HIS TEAM</text>',
      sky("edss4", "#0f1a3a", "#4a5f9a"));
  }

  /* 5. Market Hill, Framlingham: Suffolk street plates, ED SHEERAN tagged on the wall, St Michael's flint church tower behind, its flag waving */
  function edscorner() {
    const tower = (x, base) =>
      '<g><rect x="' + (x - 22) + '" y="' + (base - 120) + '" width="44" height="120" fill="' + FLINT + '" stroke="#6a6c69" stroke-width="1.5"/>' +
      '<g fill="#7a7c78">' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + (x - 18 + (i * 11) % 36) + '" cy="' + (base - 114 + (i * 17) % 110) + '" r="1.6"/>').join("") + '</g>' +
      '<path d="M' + (x - 22) + ' ' + (base - 120) + 'h7v-8h6v8h6v-8h6v8h6v-8h6v8h7" fill="' + FLINT + '"/>' +
      '<path d="M' + (x - 8) + ' ' + (base - 84) + 'q8 -12 16 0v22h-16z" fill="#2f3a44"/>' +
      '<rect x="' + (x - 1) + '" y="' + (base - 156) + '" width="2" height="30" fill="#333"/>' +
      '<g class="edsFlag"><path d="M' + (x + 1) + ' ' + (base - 156) + 'h22v14h-22z" fill="#fff"/><path d="M' + (x + 10) + ' ' + (base - 156) + 'v14M' + (x + 1) + ' ' + (base - 149) + 'h22" stroke="#c8102e" stroke-width="3"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#edss5)"/>' + bird() +
      /* market-town houses */
      '<g fill="#e8d6b0"><rect x="0" y="92" width="70" height="60"/><rect x="250" y="96" width="70" height="56"/></g>' +
      '<g fill="#c9a07a"><rect x="70" y="100" width="60" height="52"/><rect x="320" y="90" width="80" height="62"/></g>' +
      '<g fill="#9a4a34"><path d="M0 92l35 -22l35 22z"/><path d="M250 96l35 -20l35 20z"/></g>' +
      '<g fill="#3a4450"><rect x="12" y="108" width="14" height="16"/><rect x="42" y="108" width="14" height="16"/><rect x="266" y="112" width="14" height="16"/><rect x="292" y="112" width="14" height="16"/><rect x="86" y="114" width="14" height="14"/><rect x="340" y="106" width="14" height="16"/></g>' +
      tower(190, 150) +
      /* wall with the tags */
      '<rect x="0" y="146" width="400" height="76" fill="#7b5a48"/>' +
      '<path d="M0 160h400M0 174h400M0 188h400M0 202h400" stroke="#644838" stroke-width="1"/>' +
      tag("SHEERIOS", 22, 174, 17, SKY, -3) +
      tag("ED SHEERAN", 40, 212, 38, GINGER, -4) +
      tag("TEDDY", 290, 178, 16, GREEN, -6) +
      '<rect x="0" y="222" width="400" height="38" fill="#2f3238"/><rect x="0" y="220" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* Suffolk street name plates: white, black letters */
      '<rect x="356" y="40" width="5" height="182" fill="#2a2a2a"/>' +
      '<rect x="262" y="44" width="134" height="26" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="329" y="62" text-anchor="middle" ' + F + ' font-size="12" fill="#111">MARKET HILL</text>' +
      '<rect x="272" y="74" width="124" height="22" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="334" y="89" text-anchor="middle" ' + F + ' font-size="9.5" fill="#111">FRAMLINGHAM IP13</text>',
      sky("edss5", "#93c7ea", "#f1ead8"));
  }

  window.SCENES = { edsstation, edspiecehall, edscastle, edsportman, edscorner };
})();
