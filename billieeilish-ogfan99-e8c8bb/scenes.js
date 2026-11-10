/* Billie Eilish game (GENRES: POP; region: LOS ANGELES + SOCAL; born in Los Angeles, raised in Highland Park, where she and her
   brother FINNEAS made "ocean eyes" and the first album in a small bedroom of the family house).
   Rooms: the Metro A Line pulling into Southwest Museum station on Marmion Way, the little bedroom studio, the Hollywood Bowl at night
   (her 2021 "love letter to Los Angeles" concert film), the downtown arena on the night she swept the big four at the 2020 awards,
   and Monte Vista St at Avenue 57 in Highland Park with the downtown towers glowing behind.
   CSS classes prefixed "bei" (the page's anim-train is kept for the train). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes beiTw{0%,100%{opacity:1}50%{opacity:.25}}.beiTw{animation:beiTw 1.8s ease-in-out infinite}.beiT2{animation-delay:.6s}.beiT3{animation-delay:1.2s}' +
    '@keyframes beiEq{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.beiEq{transform-box:fill-box;transform-origin:50% 100%;animation:beiEq .9s ease-in-out infinite}.beiE2{animation-delay:.2s}.beiE3{animation-delay:.45s}.beiE4{animation-delay:.65s}' +
    '@keyframes beiGlow{0%,100%{opacity:.5}50%{opacity:1}}.beiGlow{animation:beiGlow 2.6s ease-in-out infinite}' +
    '@keyframes beiBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.beiBob{animation:beiBob .9s ease-in-out infinite}.beiB2{animation-delay:.45s}' +
    '@keyframes beiWave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.beiWave{animation:beiWave 3s linear infinite}' +
    '@keyframes beiBeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.beiBeam{transform-box:fill-box;transform-origin:50% 100%;animation:beiBeam 4s ease-in-out infinite}.beiBm2{animation-delay:-2s}' +
    '@keyframes beiConf{0%{transform:translateY(-20px)}100%{transform:translateY(200px)}}.beiConf{animation:beiConf 4.5s linear infinite}.beiC2{animation-delay:-1.5s}.beiC3{animation-delay:-3s}' +
    '@keyframes beiBlink{0%,100%{opacity:1}50%{opacity:0}}.beiBlink{animation:beiBlink 1.1s steps(1) infinite}' +
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
  const NEON = "#a6ff00", BLUE = "#4fb3ff", ALINE = "#0072bc", PINK = "#ff8fc7", GREEN = "#1f6b45";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 71 + 23) % 400, y = y0 + ((i * 41) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.5) + '" fill="#fff" class="beiTw' + (i % 3 === 1 ? ' beiT2' : i % 3 === 2 ? ' beiT3' : '') + '"/>';
    }
    return s;
  };
  const palm = (x, base, h) => '<path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#2a2030" stroke-width="4" fill="none"/>' +
    '<g fill="#2a2030" transform="translate(' + (x + 2) + ' ' + (base - h) + ')"><path d="M0 0q-18 -4 -26 8q12 -6 26 -8z"/><path d="M0 0q18 -4 26 8q-12 -6 -26 -8z"/><path d="M0 0q-12 -14 -24 -10q14 0 24 10z"/><path d="M0 0q12 -14 24 -10q-14 0 -24 10z"/></g>';
  const crowd = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 6 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="beiBob' + (i % 2 ? ' beiB2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 12) + '" r="4.5"/><rect x="' + (x - 5) + '" y="' + (y - 7) + '" width="10" height="14" rx="4"/></g>';
    }
    return s;
  };
  /* the girl seen from behind: black hair with neon-green roots, baggy clothes, no face */
  const girl = (x, y) =>
    '<rect x="' + (x + 15) + '" y="' + (y - 32) + '" width="2" height="40" fill="#333"/><circle cx="' + (x + 16) + '" cy="' + (y - 34) + '" r="3" fill="#555"/>' +
    '<path d="M' + (x - 9) + ' ' + (y - 30) + 'q9 -14 18 0v12h-18z" fill="#111"/><path d="M' + (x - 8) + ' ' + (y - 34) + 'q8 -9 16 0" stroke="' + NEON + '" stroke-width="3" fill="none"/>' +
    '<path d="M' + (x - 12) + ' ' + (y - 20) + 'h24l3 26h-30z" fill="#2e2e36"/><path d="M' + (x - 10) + ' ' + (y + 6) + 'h20l2 14h-24z" fill="#4a4a56"/>' +
    '<rect x="' + (x - 9) + '" y="' + (y + 20) + '" width="7" height="5" rx="2" fill="#eee"/><rect x="' + (x + 2) + '" y="' + (y + 20) + '" width="7" height="5" rx="2" fill="#eee"/>';

  /* 1. The Metro A Line pulling into Southwest Museum station, at street level on Marmion Way */
  function beistation() {
    let wins = "";
    for (let i = 0; i < 6; i++) wins += '<rect x="' + (54 + i * 44) + '" y="112" width="32" height="20" rx="3" fill="#1f2a33"/>';
    const train = '<g class="anim-train"><path d="M24 104h300q26 0 32 30v24H24z" fill="#e9ecef" stroke="#7d868f" stroke-width="2"/>' + wins +
      '<rect x="24" y="138" width="332" height="7" fill="' + ALINE + '"/><rect x="24" y="145" width="332" height="3" fill="#2a2f36"/>' +
      '<path d="M324 108q24 4 30 26h-30z" fill="#1f2a33"/><circle cx="350" cy="150" r="3.5" fill="#fff6c2"/>' +
      '<path d="M110 104l18 -16M230 104l18 -16" stroke="#555" stroke-width="2"/><path d="M100 88h160" stroke="#555" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#beis1)"/>' + stars(10, 6, 40) +
      /* Mount Washington's hillside with little houses */
      '<path d="M0 96q60 -46 140 -40q80 6 140 -10q70 -16 120 20v30H0z" fill="#3d3550"/>' +
      '<g fill="#ffd98a" class="beiGlow">' + [[60, 70], [96, 62], [150, 60], [210, 58], [262, 52], [320, 50], [360, 62]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="5" height="4"/>').join("") + '</g>' +
      palm(20, 160, 96) + palm(380, 160, 108) +
      /* catenary poles and wire */
      '<path d="M0 82h400" stroke="#3a3a3a" stroke-width="1.5"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="80" width="4" height="78" fill="#5a5f66"/>').join("") +
      train +
      '<rect x="0" y="158" width="400" height="6" fill="#f2c200"/><rect x="0" y="164" width="400" height="22" fill="#cbbfa8"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#4a4a50"/><path d="M0 226h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="74" y="192" width="252" height="32" rx="3" fill="#111"/><text x="88" y="214" ' + F + ' font-size="16" fill="#fff">Southwest Museum</text>' +
      '<circle cx="304" cy="208" r="11" fill="' + ALINE + '"/><text x="304" y="213.5" text-anchor="middle" ' + F + ' font-size="15" fill="#fff">A</text>' +
      '<text x="200" y="248" text-anchor="middle" ' + F + ' font-size="9" fill="#e9e4f2" opacity=".9">METRO A LINE · MARMION WAY · HIGHLAND PARK</text>',
      sky("beis1", "#20183a", "#7a5aa0"));
  }

  /* 2. The little bedroom studio: bed, keyboard, laptop, mic, one small window; the sound wave bars bounce */
  function beibedroom() {
    let eq = "";
    for (let i = 0; i < 10; i++) eq += '<rect x="' + (226 + i * 9) + '" y="96" width="5" height="26" rx="1" fill="' + NEON + '" class="beiEq beiE' + (1 + i % 4) + '"/>';
    let keys = "";
    for (let i = 0; i < 14; i++) keys += '<rect x="' + (40 + i * 9) + '" y="168" width="8" height="18" fill="#f4f4f0" stroke="#999" stroke-width=".6"/>';
    let bk = "";
    [42, 51, 69, 78, 87, 105, 114, 132, 141, 150].forEach(x => { bk += '<rect x="' + (x + 4) + '" y="168" width="5" height="11" fill="#111"/>'; });
    return svg(
      '<rect width="400" height="260" fill="#3a3346"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#4a4258"/><path d="M0 190h400" stroke="#2a2434" stroke-width="3"/>' +
      /* window with the night sky and a moon */
      '<rect x="40" y="26" width="96" height="76" rx="3" fill="#152040" stroke="#e8e2d2" stroke-width="5"/><path d="M88 26v76M40 64h96" stroke="#e8e2d2" stroke-width="3"/>' +
      '<circle cx="112" cy="44" r="9" fill="#f7f1d8"/><circle cx="116" cy="41" r="8" fill="#152040"/>' +
      '<circle cx="58" cy="40" r="1.3" fill="#fff" class="beiTw"/><circle cx="70" cy="84" r="1.3" fill="#fff" class="beiTw beiT2"/><circle cx="104" cy="88" r="1.3" fill="#fff" class="beiTw beiT3"/>' +
      /* string lights */
      '<path d="M150 18q60 18 120 0t120 0" stroke="#222" stroke-width="1" fill="none"/>' +
      [160, 182, 204, 226, 248, 270, 292, 314, 336, 358, 380].map((x, i) => '<circle cx="' + x + '" cy="' + (22 + Math.abs(Math.sin(i * .55)) * 6) + '" r="3" fill="' + (i % 2 ? NEON : "#ffd98a") + '" class="beiTw' + (i % 3 ? ' beiT2' : '') + '"/>').join("") +
      /* the laptop and the screen with the bouncing wave */
      '<rect x="214" y="88" width="104" height="44" rx="3" fill="#111" stroke="#666" stroke-width="2"/>' + eq +
      '<path d="M206 132h120l8 8H198z" fill="#888"/>' +
      /* desk */
      '<rect x="186" y="140" width="190" height="8" fill="#7a5a3a"/><rect x="194" y="148" width="6" height="42" fill="#5a3a24"/><rect x="362" y="148" width="6" height="42" fill="#5a3a24"/>' +
      /* speaker monitors */
      '<rect x="334" y="104" width="28" height="36" rx="2" fill="#1d1d22"/><circle cx="348" cy="126" r="8" fill="#333" stroke="#555"/><circle cx="348" cy="112" r="3" fill="#444"/>' +
      /* mic with pop filter on a stand */
      '<path d="M150 190l10 -6l10 6M160 184v-76" stroke="#222" stroke-width="3" fill="none"/><rect x="153" y="88" width="14" height="24" rx="7" fill="#9aa0a8" stroke="#444" stroke-width="1.5"/>' +
      '<circle cx="146" cy="100" r="12" fill="#222" opacity=".55"/><path d="M146 100l8 0" stroke="#555"/>' +
      /* bed with a neon green blanket */
      '<rect x="0" y="150" width="30" height="50" fill="#5a3a24"/><rect x="0" y="176" width="34" height="34" fill="' + NEON + '" opacity=".85"/>' +
      /* the keyboard on a stand */
      '<rect x="34" y="162" width="136" height="28" rx="3" fill="#1d1d22"/>' + keys + bk +
      '<path d="M60 190l-8 40M150 190l8 40M56 214h98" stroke="#333" stroke-width="3"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5c4a3a"/><path d="M0 214h400M0 238h400" stroke="#4e3e30" stroke-width="2"/>' +
      '<ellipse cx="260" cy="226" rx="70" ry="14" fill="#2e6a8a" opacity=".7"/>' +
      '<rect x="234" y="62" width="70" height="18" rx="2" fill="#111"/><text x="269" y="75" text-anchor="middle" ' + F + ' font-size="9" fill="' + NEON + '">REC <tspan class="beiBlink" fill="#ff3b3b">&#9679;</tspan></text>',
      "");
  }

  /* 3. The Hollywood Bowl at night: the white rings of the shell, the hills behind, phone lights in the crowd */
  function beibowl() {
    let rings = "";
    for (let i = 0; i < 7; i++) {
      const r = 120 - i * 15;
      rings += '<path d="M' + (200 - r) + ' 170A' + r + ' ' + (r * .95) + ' 0 0 1 ' + (200 + r) + ' 170" fill="none" stroke="' + (i % 2 ? "#e9edf2" : "#fdfdfd") + '" stroke-width="12"/>';
    }
    let lights = "";
    for (let i = 0; i < 40; i++) lights += '<circle cx="' + ((i * 37 + 9) % 400) + '" cy="' + (200 + (i * 13) % 52) + '" r="1.6" fill="#fff6c8" class="beiTw' + (i % 3 === 1 ? ' beiT2' : i % 3 === 2 ? ' beiT3' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#beis3)"/>' + stars(20, 4, 60) +
      '<path d="M0 120q70 -60 150 -50q50 6 90 -14q80 -30 160 26v60H0z" fill="#1c2236"/>' +
      '<path d="M0 140q90 -40 200 -30t200 0v30H0z" fill="#232b44"/>' +
      '<g opacity=".35"><path d="M120 170l-50 -150h30z" fill="' + NEON + '" class="beiBeam"/><path d="M280 170l50 -150h-30z" fill="' + BLUE + '" class="beiBeam beiBm2"/></g>' +
      '<path d="M70 170h260v12H70z" fill="#3a3a44"/>' + rings +
      '<rect x="96" y="170" width="208" height="14" fill="#2a2a32"/>' +
      '<rect x="140" y="146" width="120" height="24" fill="' + NEON + '" opacity=".25" class="beiGlow"/>' +
      girl(200, 152) +
      /* the bowl seats rising toward us */
      '<path d="M0 190q200 -20 400 0v70H0z" fill="#141826"/>' + crowd(204, 26, 0, 400, ["#2a2f44", "#33384f", "#252a3c"]) + lights +
      '<path d="M0 236q200 -14 400 0v24H0z" fill="#0e111c"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="10" letter-spacing="2" fill="' + NEON + '">A LOVE LETTER TO LOS ANGELES</text>',
      sky("beis3", "#0a0f22", "#2a3a6a"));
  }

  /* 4. The downtown arena, January 2020: curved glass front lit up, the red-carpet steps, five gold stars for five wins */
  function beiarena() {
    let gl = "";
    for (let c = 0; c < 12; c++) gl += '<path d="M' + (70 + c * 22) + ' 64v104" stroke="#6a8ab0" stroke-width="1.5"/>';
    let conf = "";
    const cc = [NEON, "#ffd24a", BLUE, PINK];
    for (let i = 0; i < 24; i++) conf += '<rect x="' + ((i * 47 + 13) % 400) + '" y="' + ((i * 23) % 60) + '" width="4" height="7" fill="' + cc[i % 4] + '" class="beiConf' + (i % 3 === 1 ? ' beiC2' : i % 3 === 2 ? ' beiC3' : '') + '"/>';
    const star = (x, y) => '<path d="M' + x + ' ' + (y - 10) + 'l3 6.5 7 1 -5 5 1.2 7 -6.2 -3.3 -6.2 3.3 1.2 -7 -5 -5 7 -1z" fill="#ffd24a" stroke="#8a6a10" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#beis4)"/>' + stars(12, 4, 40) +
      /* downtown towers behind */
      '<g fill="#1b2238">' + '<rect x="10" y="20" width="34" height="140"/><rect x="50" y="40" width="26" height="120"/><rect x="330" y="10" width="40" height="150"/><path d="M352 10l-6 -10h12z"/><rect x="372" y="44" width="24" height="116"/>' + '</g>' +
      /* the arena: a swoop of glass */
      '<path d="M50 168V72q150 -40 300 0v96z" fill="#2c4a74"/><path d="M50 72q150 -40 300 0" stroke="#c9d6e6" stroke-width="5" fill="none"/>' + gl +
      '<path d="M50 120q150 -26 300 0" stroke="#c9d6e6" stroke-width="2" fill="none" opacity=".6"/>' +
      '<g class="beiGlow"><path d="M60 160V80q140 -34 280 0v80z" fill="#9fd4ff" opacity=".18"/></g>' +
      '<rect x="110" y="84" width="180" height="28" rx="3" fill="#111" stroke="#ffd24a" stroke-width="2"/><text x="200" y="103" text-anchor="middle" ' + F + ' font-size="13" letter-spacing="2" fill="#ffd24a">5 WINS · JAN 2020</text>' +
      '<g>' + star(150, 132) + star(175, 132) + star(200, 132) + star(225, 132) + star(250, 132) + '</g>' +
      /* plaza, the red carpet and the steps */
      '<rect x="0" y="168" width="400" height="92" fill="#3a3a44"/><path d="M150 168h100l40 92H110z" fill="#b3202a"/><path d="M150 168h100" stroke="#ffd24a" stroke-width="2"/>' +
      crowd(196, 8, 0, 110, ["#2a2a32", "#444", "#5a5a66"]) + crowd(196, 8, 290, 400, ["#444", "#2a2a32", "#5a5a66"]) +
      girl(200, 214) + conf,
      sky("beis4", "#0b1020", "#3a2a5a"));
  }

  /* 5. Monte Vista St at Avenue 57 in Highland Park: a tagged wall, downtown's towers glowing behind */
  function beicorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#beis5)"/>' + stars(18, 4, 60) +
      /* downtown LA skyline far off */
      '<g fill="#2a2f50" opacity=".95"><rect x="200" y="70" width="18" height="72"/><rect x="222" y="54" width="22" height="88"/><path d="M233 54l-11 -8h22z"/><rect x="250" y="40" width="24" height="102"/><path d="M262 40v-16" stroke="#2a2f50" stroke-width="3"/><circle cx="262" cy="40" r="12"/><rect x="280" y="62" width="20" height="80"/><rect x="304" y="78" width="16" height="64"/><rect x="324" y="58" width="22" height="84"/></g>' +
      '<circle cx="262" cy="22" r="2.5" fill="#ff4a4a" class="beiBlink"/>' +
      '<g fill="#ffd98a" opacity=".6" class="beiGlow">' + [[204, 80], [226, 70], [254, 60], [258, 90], [284, 74], [328, 70], [330, 100]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="3" height="3"/>').join("") + '</g>' +
      /* hills of Highland Park */
      '<path d="M0 142q60 -40 130 -30q70 10 140 0q70 -8 130 14v16H0z" fill="#1c1a2e"/>' + palm(110, 142, 70) + palm(360, 142, 80) +
      /* the tagged wall */
      '<rect x="0" y="140" width="400" height="66" fill="#6a5a6e"/><path d="M0 156h400M0 172h400M0 188h400" stroke="#5a4c5e" stroke-width="1"/>' +
      tag("BILLIE", 82, 192, 40, NEON, -4) +
      tag("FINNEAS", 238, 168, 18, BLUE, -6) +
      tag("DUH", 324, 198, 22, PINK, -3) +
      tag("PIRATE", 236, 202, 16, "#fff", -2) +
      '<rect x="0" y="206" width="400" height="8" fill="#b8b2a6"/><rect x="0" y="214" width="400" height="46" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* green street signs */
      '<rect x="40" y="40" width="5" height="174" fill="#5a5f66"/>' +
      '<rect x="6" y="38" width="118" height="22" rx="3" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="65" y="53.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">MONTE VISTA ST</text>' +
      '<rect x="6" y="62" width="104" height="22" rx="3" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="58" y="77.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">AVENUE 57</text>',
      sky("beis5", "#0c0a1e", "#3a2a5a"));
  }

  window.SCENES = { beistation, beibedroom, beibowl, beiarena, beicorner };
})();
