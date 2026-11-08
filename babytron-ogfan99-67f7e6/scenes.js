/* babytron scenes (Regions tab: Detroit; Ypsilanti, "lil' Ypsi", the Prince of the Mitten). CSS classes prefixed bt- (the page's own anim-train is kept).
   1 TheRide Route 4 Washtenaw pulling into the Ypsilanti Transit Center on Pearl St downtown, brick storefronts behind.
   2 Lincoln High School (class of 2018, the Railsplitters): low brick school, blue and grey RAILSPLITTERS banner, a split-rail fence, the flag waving.
   3 Depot Town on E Cross St: the red-brick 1800s storefront block, the railroad bridge over River St with a freight train rolling across.
   4 Rynearson Stadium at Eastern Michigan: the famous grey turf, green and white stands, a football spiraling through the uprights.
   5 W Cross St and Summit St: green signs, BABYTRON tagged with PUNCH GOD and YPSI, the 1890 stone Ypsilanti Water Tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bttw{0%,100%{opacity:.25}50%{opacity:1}}.bt-tw{animation:bttw 1.6s ease-in-out infinite}.bt-tw2{animation-delay:-.8s}' +
    '@keyframes btcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.bt-car{animation:btcar 5.5s linear infinite}.bt-car2{animation-delay:-2.7s}' +
    '@keyframes btflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.bt-flag{transform-box:fill-box;transform-origin:0 50%;animation:btflag 1.4s ease-in-out infinite}' +
    '@keyframes btfreight{from{transform:translateX(420px)}to{transform:translateX(-520px)}}.bt-fr{animation:btfreight 9s linear infinite}' +
    '@keyframes btkick{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(150px,-110px) rotate(720deg)}}.bt-kick{transform-box:fill-box;transform-origin:50% 50%;animation:btkick 2.2s ease-out infinite}' +
    '@keyframes btbird{0%{transform:translate(0,0)}50%{transform:translate(60px,-8px)}100%{transform:translate(120px,0)}}.bt-bird{animation:btbird 7s linear infinite}' +
    '@keyframes btsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.bt-sp{animation:btsp 1.3s ease-out infinite}.bt-sp2{animation-delay:-.6s}' +
    '@keyframes btleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-30px,90px) rotate(200deg)}}.bt-leaf{animation:btleaf 4s linear infinite}.bt-leaf2{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const RIDE = "#0b4f9c", LIME = "#8cc63f", GRN = "#5fe08a", ORG = "#ff8a3d", EMU = "#006938", BLUE = "#1d4f9c", GREY = "#9aa3ad";
  const brickBlock = (x, y, w, h, c, n) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (y - 6) + '" width="' + (w + 4) + '" height="8" fill="#4a2a1e"/>' +
    Array.from({ length: n }, (_, i) => '<rect x="' + (x + 8 + i * ((w - 16) / n)) + '" y="' + (y + 10) + '" width="' + ((w - 16) / n - 8) + '" height="20" rx="' + ((w - 16) / n / 2 - 4) + '" ry="6" fill="#f2e2b8"/>').join("");

  /* 1. TheRide Route 4 at the Ypsilanti Transit Center */
  function btstation() {
    const bus = '<g class="anim-train"><rect x="30" y="118" width="250" height="70" rx="10" fill="#f4f6f8" stroke="#6b6f73" stroke-width="2"/>' +
      '<path d="M30 168h250v10h-250z" fill="' + RIDE + '"/><path d="M120 168q60 -30 160 -26v8q-90 0 -140 18z" fill="' + LIME + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="128" width="32" height="26" rx="3" fill="#24323c"/>').join("") +
      '<rect x="34" y="126" width="30" height="52" rx="3" fill="#2c3a44"/><path d="M49 126v52" stroke="#8a9096"/>' +
      '<rect x="34" y="120" width="80" height="8" rx="2" fill="#111"/><text x="74" y="126.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffcc33">4 WASHTENAW</text>' +
      '<circle cx="76" cy="190" r="13" fill="#1a1a1a"/><circle cx="76" cy="190" r="5" fill="#888"/><circle cx="236" cy="190" r="13" fill="#1a1a1a"/><circle cx="236" cy="190" r="5" fill="#888"/>' +
      '<circle cx="32" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bts1)"/>' +
      '<g class="bt-bird"><path d="M30 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      brickBlock(0, 60, 120, 70, "#9a4a32", 3) + brickBlock(126, 70, 100, 60, "#b06a40", 2) + brickBlock(232, 56, 168, 74, "#8a3e2a", 4) +
      /* transit center canopy */
      '<rect x="0" y="108" width="400" height="10" fill="#d9dde2"/><rect x="0" y="104" width="400" height="5" fill="' + RIDE + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 72) + '" y="118" width="5" height="78" fill="#b8bec6"/>').join("") +
      '<rect x="0" y="196" width="400" height="6" fill="#d8d4cb"/><rect x="0" y="202" width="400" height="58" fill="#45474e"/><path d="M0 232h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("bt-car", 0, 240, "#c0c4ca") +
      '<rect x="296" y="124" width="92" height="36" rx="4" fill="' + RIDE + '" stroke="#fff" stroke-width="1.5"/><text x="342" y="139" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">YPSILANTI</text><text x="342" y="153" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">TRANSIT CENTER</text>' +
      '<rect x="196" y="206" width="194" height="26" rx="3" fill="#111"/><text x="206" y="224" ' + font + ' font-size="13" fill="#fff">Pearl St · YTC</text>' +
      '<rect x="362" y="211" width="20" height="16" rx="3" fill="' + RIDE + '"/><text x="372" y="223" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">4</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">THERIDE ROUTE 4 · WASHTENAW · DOWNTOWN YPSI</text>',
      sky("bts1", "#9ccbf0", "#f0d8b0"));
  }

  /* 2. Lincoln High School, the Railsplitters */
  function btschool() {
    const rail = (x) => '<path d="M' + x + ' 196v-34M' + (x + 40) + ' 196v-34" stroke="#7a5a3a" stroke-width="5"/><path d="M' + (x - 6) + ' 172l52 -4M' + (x - 6) + ' 186l52 4" stroke="#9a7048" stroke-width="5" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bts2)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff4c8"/>' +
      '<rect x="30" y="92" width="340" height="96" fill="#a0583c"/><rect x="26" y="86" width="348" height="8" fill="#5a2e24"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (44 + i * 36) + '" y="104" width="22" height="22" fill="#cfe2f3" stroke="#eee" stroke-width="2"/>').join("") +
      '<rect x="160" y="70" width="80" height="22" fill="#c9c4b8"/><text x="200" y="86" text-anchor="middle" ' + font + ' font-size="11" fill="' + BLUE + '">LINCOLN HIGH</text>' +
      '<rect x="182" y="140" width="36" height="48" fill="#2a3a4a"/><path d="M200 140v48" stroke="#d8e8f4"/>' +
      '<rect x="40" y="140" width="130" height="28" rx="2" fill="' + BLUE + '" stroke="' + GREY + '" stroke-width="3"/><text x="105" y="159" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">RAILSPLITTERS</text>' +
      /* crossed axes */
      '<g transform="translate(300 154)"><path d="M-16 -14l32 28M16 -14l-32 28" stroke="#7a5a3a" stroke-width="4"/><path d="M-18 -16l8 -4l4 8z M18 -16l-8 -4l-4 8z" fill="' + GREY + '"/></g>' +
      '<rect x="386" y="30" width="3" height="158" fill="#ccc"/><g class="bt-flag"><rect x="389" y="32" width="11" height="14" fill="' + BLUE + '"/><rect x="389" y="39" width="11" height="7" fill="' + GREY + '"/></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#5a8a3a"/>' + rail(20) + rail(80) + rail(280) + rail(340) +
      '<rect x="116" y="226" width="168" height="22" rx="3" fill="#111"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">WILLIS RD · CLASS OF 2018</text>' +
      '<g class="bt-leaf"><path d="M150 40q6 -6 12 0q-6 6 -12 0z" fill="#d8862a"/></g><g class="bt-leaf bt-leaf2"><path d="M250 30q6 -6 12 0q-6 6 -12 0z" fill="#c8562a"/></g>',
      sky("bts2", "#8cc4f0", "#e0f0fb"));
  }

  /* 3. Depot Town on E Cross St, the railroad bridge over River St */
  function btdepot() {
    const car = (x, c) => '<rect x="' + x + '" y="60" width="72" height="30" rx="2" fill="' + c + '"/><circle cx="' + (x + 14) + '" cy="92" r="5" fill="#222"/><circle cx="' + (x + 58) + '" cy="92" r="5" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bts3)"/>' +
      '<rect x="0" y="96" width="400" height="10" fill="#4a4e56"/><rect x="0" y="92" width="400" height="5" fill="#6a6e76"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 106l28 26l28 -26" stroke="#4a4e56" stroke-width="4" fill="none"/>').join("") +
      '<g class="bt-fr">' + car(0, "#9a3a2a") + car(76, "#2a5a8a") + car(152, "#d8a23a") + car(228, "#3a6a3a") +
      '<rect x="304" y="54" width="60" height="36" rx="3" fill="#ff8a3d"/><rect x="340" y="46" width="22" height="14" fill="#ff8a3d"/><circle cx="318" cy="92" r="5" fill="#222"/><circle cx="350" cy="92" r="5" fill="#222"/></g>' +
      /* brick block of Depot Town */
      brickBlock(0, 132, 132, 70, "#a2442c", 3) + brickBlock(138, 140, 118, 62, "#8e3a26", 3) + brickBlock(262, 128, 138, 74, "#b0583a", 3) +
      '<rect x="0" y="176" width="400" height="26" fill="#3a2a22" opacity=".25"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (12 + i * 66) + '" y="178" width="40" height="22" fill="#ffd98a" opacity=".85"/>').join("") +
      '<rect x="140" y="112" width="120" height="16" rx="2" fill="#1d2a20"/><text x="200" y="124" text-anchor="middle" ' + font + ' font-size="10" fill="#e8dcb0">DEPOT TOWN</text>' +
      '<rect x="0" y="202" width="400" height="58" fill="#55575e"/><path d="M0 230h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 14"/>' +
      car_("bt-car", 0, 238, "#1f3f8f") +
      '<rect x="110" y="236" width="180" height="20" rx="3" fill="#111"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">E CROSS ST · RIVER ST</text>',
      sky("bts3", "#f6b26b", "#fde6c4"));
  }
  const car_ = car;

  /* 4. Rynearson Stadium, the grey turf at Eastern Michigan */
  function btfield() {
    return svg(
      '<rect width="400" height="260" fill="url(#bts4)"/>' +
      /* stands */
      '<path d="M0 60h400v70h-400z" fill="' + EMU + '"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (66 + i * 11) + 'h400" stroke="#fff" stroke-width="2" opacity=".55"/>').join("") +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (72 + (i % 5) * 11) + '" r="2.4" fill="' + (i % 3 ? "#fff" : "#d8f0e0") + '" class="bt-tw' + (i % 2 ? " bt-tw2" : "") + '"/>').join("") +
      '<rect x="120" y="36" width="160" height="22" rx="2" fill="#111"/><text x="200" y="52" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">EASTERN MICHIGAN</text>' +
      '<rect x="40" y="10" width="4" height="50" fill="#ccc"/><rect x="356" y="10" width="4" height="50" fill="#ccc"/><rect x="30" y="6" width="24" height="8" fill="#fff8d0"/><rect x="346" y="6" width="24" height="8" fill="#fff8d0"/>' +
      /* grey turf with yard lines */
      '<path d="M0 130h400v130h-400z" fill="#8c9096"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 46) + ' 130l' + (-30 + i * 7.5) + ' 130" stroke="#fff" stroke-width="2.5"/>').join("") +
      '<text x="200" y="210" text-anchor="middle" ' + font + ' font-size="26" fill="' + EMU + '" opacity=".85">EMU</text>' +
      /* goalpost */
      '<path d="M330 200v-46M310 154h40M310 154v-40M350 154v-40" stroke="#ffd23a" stroke-width="5" fill="none"/>' +
      '<g class="bt-kick"><ellipse cx="160" cy="230" rx="10" ry="6" fill="#7a3a1a"/><path d="M155 230h10" stroke="#fff" stroke-width="1.5"/></g>',
      sky("bts4", "#2a3a6a", "#8aa0c8"));
  }

  /* 5. W Cross St and Summit St, the Ypsilanti Water Tower */
  function btcorner() {
    const tower = '<g><rect x="186" y="34" width="40" height="100" fill="#cbb48a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M186 ' + (40 + i * 10) + 'h40" stroke="#a8925e" stroke-width="1"/>').join("") +
      '<rect x="180" y="28" width="52" height="10" fill="#b39c6c"/><path d="M180 28q26 -30 52 0z" fill="#7a8a7a"/><rect x="204" y="0" width="4" height="8" fill="#555"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (190 + i * 9) + '" y="44" width="5" height="10" rx="2" fill="#4a3a2a"/>').join("") +
      '<rect x="200" y="92" width="10" height="16" rx="5" fill="#4a3a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bts5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + ((i * 61 + 13) % 400) + '" cy="' + ((i * 23 + 7) % 50) + '" r="1.2" fill="#fff" class="bt-tw' + (i % 2 ? " bt-tw2" : "") + '"/>').join("") +
      '<circle cx="80" cy="34" r="11" fill="#f4eccf"/>' + tower +
      '<rect x="0" y="130" width="400" height="94" fill="#4a3e5a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#3a3048" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#3a3048" stroke-width="1"/>').join("")).join("") +
      tag("BABYTRON", 16, 184, 38, GRN, -6) + tag("PUNCH GOD", 30, 214, 18, ORG, -3) + tag("YPSI", 190, 210, 22, "#9cc0ff", -5) +
      '<g class="bt-sp"><circle cx="230" cy="166" r="3" fill="' + GRN + '" opacity=".7"/></g><g class="bt-sp bt-sp2"><circle cx="236" cy="158" r="2" fill="' + GRN + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(280, 108, 118, "W Cross St") + sign(280, 134, 118, "Summit St") +
      car("bt-car", 0, 244, "#3a6a3a"),
      sky("bts5", "#0c0e2a", "#5a3a7a"));
  }

  window.SCENES = { btstation: btstation, btschool: btschool, btdepot: btdepot, btfield: btfield, btcorner: btcorner };
})();
