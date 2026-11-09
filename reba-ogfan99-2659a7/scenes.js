/* reba scenes (Regions tab: More of the South, Chockie / Atoka County OK). CSS classes prefixed rb- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rbglow{0%,100%{opacity:.45}50%{opacity:1}}.rb-glow{animation:rbglow 2.4s ease-in-out infinite}.rb-g2{animation-delay:-1.2s}' +
    '@keyframes rbnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-62px);opacity:0}}.rb-nt{animation:rbnote 3.2s ease-out infinite}.rb-nt2{animation-delay:-1.1s}.rb-nt3{animation-delay:-2.2s}' +
    '@keyframes rbsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.rb-sw{transform-box:fill-box;transform-origin:50% 100%;animation:rbsway 3s ease-in-out infinite}.rb-sw2{animation-delay:-1.5s}' +
    '@keyframes rbcloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.rb-cl{animation:rbcloud 14s ease-in-out infinite alternate}' +
    '@keyframes rbspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.rb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rbspin 1.6s linear infinite}' +
    '@keyframes rbgraze{0%,100%{transform:rotate(0)}50%{transform:rotate(9deg)}}.rb-graze{transform-box:fill-box;transform-origin:20% 30%;animation:rbgraze 3.6s ease-in-out infinite}.rb-gz2{animation-delay:-1.8s}' +
    '@keyframes rbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.rb-flag{transform-box:fill-box;transform-origin:0% 50%;animation:rbflag 1.8s ease-in-out infinite}' +
    '@keyframes rbbeam{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.rb-beam{transform-box:fill-box;transform-origin:50% 100%;animation:rbbeam 5s ease-in-out infinite}.rb-bm2{animation-delay:-2.5s}' +
    '@keyframes rbball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.rb-ball{animation:rbball 1.1s ease-in-out infinite}' +
    '@keyframes rbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rb-sp{animation:rbspray 1.4s ease-out infinite}.rb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="rb-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const oak = (x, base, r, c) => '<g class="rb-sw"><rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r - r * 0.4) + '" r="' + r * 0.8 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/></g>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".6"/>'; return s; };
  const cow = (x, y, c, cls) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="0" width="34" height="16" rx="6" fill="' + c + '"/><rect x="3" y="14" width="4" height="10" fill="' + c + '"/><rect x="26" y="14" width="4" height="10" fill="' + c + '"/>' +
    '<g class="rb-graze ' + (cls || "") + '"><rect x="-10" y="2" width="13" height="10" rx="4" fill="' + c + '"/><path d="M-9 2l-3 -4M0 2l2 -4" stroke="#e9dfc8" stroke-width="1.6"/></g><path d="M34 4q5 6 2 14" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.04) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.04) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const RED = "#e2483a", GOLD = "#f2c14e", TURQ = "#3fb8af", CREAM = "#f6ecd6", BRICK = "#9c3f2c";

  /* 1. Coming down US-69 out of McAlester: the green Stringtown sign with the Chockie arrow, a pickup sliding in, the Kiamichi foothills behind */
  function rbhwy() {
    let hills = '<path d="M0 150q60 -50 120 -18t120 -24t160 6v40h-400z" fill="#5d7a4a"/><path d="M0 162q80 -30 160 -8t140 -12t100 4v20h-400z" fill="#476a3c"/>';
    let trees = "";
    for (let i = 0; i < 9; i++) trees += oak(18 + i * 48, 170, 14 + (i * 7) % 8, i % 2 ? "#2f5a2a" : "#3b6a32");
    const us = (x, y, n) => '<path d="M' + x + ' ' + y + 'h34v30q0 6 -17 10q-17 -4 -17 -10z" fill="#fff" stroke="#000" stroke-width="2"/><text x="' + (x + 11) + '" y="' + (y + 27) + '" text-anchor="middle" ' + font + ' font-size="19" fill="#000">6</text>' + nine(x + 17, y + 27, 19, "#000");
    return svg(
      '<rect width="400" height="260" fill="url(#rb1)"/>' +
      '<g class="rb-cl"><ellipse cx="60" cy="40" rx="34" ry="9" fill="#fff" opacity=".7"/><ellipse cx="300" cy="26" rx="40" ry="10" fill="#fff" opacity=".6"/></g>' +
      '<circle cx="352" cy="58" r="16" fill="#ffd36b" opacity=".9"/>' + hills + trees +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4d52"/><rect x="0" y="168" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 214h400" stroke="#f2c14e" stroke-width="3"/><path d="M0 220h400" stroke="#f2c14e" stroke-width="3"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* roadside guide sign on two posts */
      '<rect x="136" y="96" width="6" height="74" fill="#8b9096"/><rect x="290" y="96" width="6" height="74" fill="#8b9096"/>' +
      '<rect x="112" y="28" width="210" height="80" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="217" y="60" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">Stringtown</text>' +
      '<path d="M128 72h176" stroke="#fff" stroke-width="1.2" opacity=".5"/>' +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Chockie 11</text>' +
      '<path d="M262 92l12 -12M274 80h-9M274 80v9" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      us(40, 104, "69") + '<rect x="38" y="148" width="38" height="12" fill="#fff" stroke="#000" stroke-width="1"/><text x="57" y="157" text-anchor="middle" ' + font + ' font-size="8" fill="#000">SOUTH</text><rect x="55" y="160" width="4" height="12" fill="#8b9096"/>' +
      /* red pickup sliding in */
      '<g class="anim-train"><g transform="translate(220 0)"><rect x="0" y="194" width="110" height="24" rx="5" fill="' + RED + '"/><path d="M8 194v-18h40l14 18z" fill="#b8302a"/><path d="M14 192v-13h18v13z" fill="#a8d4ea"/><path d="M36 192v-13h10l10 13z" fill="#a8d4ea"/>' +
      '<rect x="62" y="186" width="46" height="8" fill="#b8302a"/><circle cx="24" cy="220" r="9" fill="#1a1a1a"/><circle cx="24" cy="220" r="4" fill="#9a9a9a"/><circle cx="88" cy="220" r="9" fill="#1a1a1a"/><circle cx="88" cy="220" r="4" fill="#9a9a9a"/>' +
      '<rect x="0" y="200" width="6" height="5" rx="1" fill="#fff6c2" class="rb-glow"/></g></g>',
      sky("rb1", "#5fa8d8", "#f3c98a"));
  }

  /* 2. The McEntire cattle ranch at Chockie: rolling pasture, a barbed-wire fence line, cattle grazing, a roper on horseback swinging a loop */
  function rbranch() {
    let fence = "";
    for (let x = 6; x < 400; x += 34) fence += '<rect x="' + x + '" y="170" width="4" height="34" fill="#6b4a2c"/>';
    fence += '<path d="M0 178h400M0 188h400M0 198h400" stroke="#8a8a8a" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rb2)"/>' +
      '<g class="rb-cl"><ellipse cx="90" cy="36" rx="38" ry="9" fill="#fff" opacity=".6"/><ellipse cx="320" cy="50" rx="30" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 120q70 -46 150 -16t130 -20t120 10v40h-400z" fill="#6f8a55"/>' +
      '<path d="M0 140q90 -24 200 -4t200 -6v130h-400z" fill="#8fae5c"/>' +
      oak(40, 140, 18) + oak(352, 132, 22, "#3b6a32") +
      /* red barn far off */
      '<rect x="262" y="104" width="44" height="30" fill="#a8322a"/><path d="M258 106l26 -18l26 18z" fill="#7a221c"/><rect x="278" y="116" width="12" height="18" fill="#f6ecd6"/><path d="M278 116l12 18M290 116l-12 18" stroke="#a8322a" stroke-width="1.5"/>' +
      cow(70, 150, "#4a2a1a") + cow(150, 160, "#1f1a18", "rb-gz2") + cow(220, 148, "#7a4a2a") +
      fence +
      /* roper on horseback, no face: hat silhouette, loop spinning overhead */
      '<g transform="translate(300 150)"><rect x="0" y="12" width="52" height="20" rx="9" fill="#5a3a22"/><path d="M48 14l14 -16l6 4l-8 18z" fill="#5a3a22"/><path d="M62 -2l4 -6l3 6z" fill="#3a2414"/>' +
      '<rect x="4" y="30" width="5" height="22" fill="#5a3a22"/><rect x="42" y="30" width="5" height="22" fill="#5a3a22"/><rect x="12" y="30" width="5" height="20" fill="#4a2e1a"/><rect x="34" y="30" width="5" height="20" fill="#4a2e1a"/>' +
      '<path d="M0 14q-8 6 -6 18" stroke="#3a2414" stroke-width="4" fill="none"/>' +
      '<rect x="18" y="-12" width="14" height="24" rx="4" fill="' + TURQ + '"/><circle cx="25" cy="-18" r="6" fill="#c98f6a"/><path d="M14 -22h22l-4 -2q-1 -8 -7 -8t-7 8z" fill="#e8d6b0"/>' +
      '<path d="M28 -10l14 -18" stroke="' + TURQ + '" stroke-width="4" stroke-linecap="round"/>' +
      '<g transform="translate(46 -44)"><ellipse class="rb-spin" cx="0" cy="0" rx="22" ry="7" fill="none" stroke="#e9dfc8" stroke-width="2.2" stroke-dasharray="40 6"/></g></g>',
      sky("rb2", "#6fb4e0", "#f4dca0"));
  }

  /* 3. Oklahoma City, 1974: the State Fair Arena with its swooping saddle roof, spotlights sweeping, the flag waving where a ranch girl sang the anthem at the rodeo finals */
  function rbarena() {
    let crowd = "";
    for (let i = 0; i < 40; i++) crowd += '<circle cx="' + (6 + i * 10) + '" cy="' + (212 + (i % 3) * 3) + '" r="4.5" fill="' + (i % 4 ? "#1a1420" : "#2a2030") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rb3)"/>' +
      '<circle cx="60" cy="40" r="1.2" fill="#fff"/><circle cx="120" cy="22" r="1" fill="#fff"/><circle cx="330" cy="30" r="1.3" fill="#fff"/><circle cx="250" cy="16" r="1" fill="#fff"/>' +
      '<g class="rb-beam"><path d="M86 190l-34 -170h40z" fill="#fff2c0" opacity=".18"/></g><g class="rb-beam rb-bm2"><path d="M314 190l-6 -170h40z" fill="#fff2c0" opacity=".18"/></g>' +
      /* saddle roof: low in the middle, high at the ends */
      '<path d="M40 150q160 -20 320 0l-8 -70q-152 46 -304 0z" fill="#c9ccd0"/><path d="M48 80q152 46 304 0" stroke="#8b9096" stroke-width="3" fill="none"/>' +
      '<path d="M40 150q160 -20 320 0v40h-320z" fill="#b7a58a"/>' +
      Array.from({ length: 15 }, (_, i) => '<rect x="' + (52 + i * 20) + '" y="150" width="10" height="34" fill="#2c3e57" opacity=".85"/>').join("") +
      '<rect x="40" y="184" width="320" height="8" fill="#7a6a54"/>' +
      '<rect x="116" y="112" width="168" height="24" rx="3" fill="#1d1d1d" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="129" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="1" class="rb-glow">RODEO FINALS · OKC</text>' +
      /* flag on the pole */
      '<rect x="198" y="40" width="3" height="58" fill="#ddd"/><g class="rb-flag"><rect x="201" y="42" width="38" height="22" fill="#b22234"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="201" y="' + (45 + i * 6.5) + '" width="38" height="3" fill="#fff"/>').join("") + '<rect x="201" y="42" width="16" height="12" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="192" width="400" height="68" fill="#3a2c22"/>' + crowd +
      note(150, 108, CREAM) + note(244, 104, GOLD, "rb-nt2") + note(200, 96, RED, "rb-nt3"),
      sky("rb3", "#0e1430", "#3a2a4a"));
  }

  /* 4. Kiowa High School: the gym where the Singing McEntires played, three mics on the little stage, a ball bouncing under the hoop */
  function rbkiowa() {
    let boards = "";
    for (let x = 0; x < 400; x += 16) boards += '<path d="M' + x + ' 190v70" stroke="#b07a3a" stroke-width="1" opacity=".6"/>';
    const mic = x => '<rect x="' + x + '" y="132" width="2.5" height="46" fill="#cfcfcf"/><rect x="' + (x - 6) + '" y="176" width="14" height="3" fill="#cfcfcf"/><rect x="' + (x - 2) + '" y="124" width="6.5" height="11" rx="3" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="#6e2a24"/>' +
      bricks(0, 0, 400, 150, "#8a3a2c", "#5e2a1c") +
      '<rect x="0" y="140" width="400" height="10" fill="#e9dfc8"/>' +
      /* banner on the wall */
      '<rect x="108" y="22" width="184" height="34" rx="4" fill="' + GOLD + '" stroke="#5e2a1c" stroke-width="2"/><text x="200" y="46" text-anchor="middle" ' + font + ' font-size="20" fill="#5e2a1c" letter-spacing="3">KIOWA</text>' +
      /* hoop on the right */
      '<rect x="330" y="48" width="52" height="36" fill="#f4f4f4" stroke="#333" stroke-width="2"/><rect x="346" y="62" width="20" height="14" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="356" cy="88" rx="13" ry="3" fill="none" stroke="#ff7a1a" stroke-width="2.5"/><path d="M344 89l5 16M356 91v15M368 89l-5 16" stroke="#eee" stroke-width="1"/>' +
      '<g class="rb-ball"><circle cx="356" cy="168" r="9" fill="#e07a2a"/><path d="M347 168h18M356 159v18" stroke="#6a3a1a" stroke-width="1"/></g>' +
      /* stage */
      '<rect x="40" y="150" width="230" height="40" fill="#5a3a22"/><rect x="40" y="148" width="230" height="5" fill="#7a5232"/>' +
      '<path d="M40 60q30 50 0 90M270 60q-30 50 0 90" fill="' + RED + '" opacity=".9"/><rect x="36" y="58" width="238" height="8" fill="' + RED + '"/>' +
      mic(100) + mic(155) + mic(210) +
      '<g transform="translate(118 150)"><path d="M0 0l10 -26h12l10 26z" fill="#c98a4a"/><circle cx="16" cy="-30" r="12" fill="#a8703a"/><circle cx="16" cy="-30" r="4" fill="#3a2414"/><rect x="14" y="-62" width="4" height="22" fill="#6a4a2a"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#d6a05a"/>' + boards +
      '<path d="M0 230h400" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      note(80, 120, CREAM) + note(190, 112, GOLD, "rb-nt2") + note(250, 120, TURQ, "rb-nt3"),
      "");
  }

  /* 5. Court St and Pennsylvania Ave in downtown Atoka: the red-brick old Masonic temple with its stained-glass top floor behind, her name tagged on the wall */
  function rbcorner() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="22" height="30" fill="#20303c" stroke="#e9dfc8" stroke-width="2"/>';
    const glass = (x, y, i) => '<path d="M' + x + ' ' + (y + 30) + 'v-20q12 -14 24 0v20z" fill="' + [GOLD, TURQ, RED][i % 3] + '" stroke="#e9dfc8" stroke-width="2" class="rb-glow' + (i % 2 ? " rb-g2" : "") + '"/><path d="M' + (x + 12) + ' ' + (y + 4) + 'v26M' + x + ' ' + (y + 18) + 'h24" stroke="#5e2a1c" stroke-width="1"/>';
    let fr = "";
    for (let i = 0; i < 5; i++) fr += glass(108 + i * 40, 34, i) + win(109 + i * 40, 84);
    return svg(
      '<rect width="400" height="260" fill="url(#rb5)"/>' +
      oak(30, 176, 24, "#3b6a32") + oak(372, 176, 22) +
      bricks(92, 20, 216, 160, BRICK, "#6e2f1f") +
      '<rect x="86" y="14" width="228" height="10" fill="#e4dcc6"/><rect x="92" y="72" width="216" height="5" fill="#e4dcc6"/><rect x="92" y="122" width="216" height="5" fill="#e4dcc6"/>' + fr +
      '<rect x="110" y="132" width="60" height="44" fill="#20303c" stroke="#e4dcc6" stroke-width="2"/><rect x="230" y="132" width="60" height="44" fill="#20303c" stroke="#e4dcc6" stroke-width="2"/>' +
      '<rect x="184" y="136" width="32" height="44" fill="#3a2016" stroke="#e4dcc6" stroke-width="2"/><circle cx="210" cy="160" r="2" fill="' + GOLD + '"/>' +
      '<path d="M110 132l22 44M170 132l-20 44" stroke="#fff" stroke-width="1" opacity=".12"/>' +
      /* low wall with the tags */
      '<rect x="0" y="178" width="400" height="46" fill="#7a3a28"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (184 + i * 6) + 'h400" stroke="#5e2a1c" stroke-width="1"/>').join("") +
      '<rect x="0" y="174" width="400" height="5" fill="#e4dcc6"/>' +
      tag("REBA", 24, 216, 42, RED, -5) + tag("FANCY", 150, 206, 22, GOLD, -4) + tag("CHOCKIE", 226, 220, 18, CREAM, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="360" y="66" width="6" height="158" fill="#2f2f2f"/>' + sign(296, 66, 100, "Court St") + sign(270, 92, 126, "Pennsylvania Ave") +
      '<g class="rb-sp"><circle cx="128" cy="196" r="3" fill="' + RED + '" opacity=".7"/></g><g class="rb-sp rb-sp2"><circle cx="134" cy="190" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("rb5", "#1c2550", "#e0905a"));
  }

  window.SCENES = { rbhwy: rbhwy, rbranch: rbranch, rbarena: rbarena, rbkiowa: rbkiowa, rbcorner: rbcorner };
})();
