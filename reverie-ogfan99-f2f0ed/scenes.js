/* reverie scenes (Regions tab: Los Angeles + SoCal; Highland Park, Northeast LA). CSS classes prefixed rv- (the page's own anim-train is kept).
   1 Highland Park station (Metro A Line): the street-level platform on Marmion Way, a silver light-rail train with the blue stripe sliding in, palms, the San Gabriels.
   2 The Southwest Museum on Mount Washington: the cream mission-revival hall and the Caracol tower with the red tile cap, palms, birds.
   3 Heritage Square, Montecito Heights next door: the painted Victorian houses, a car rolling by on Pasadena Ave.
   4 York Blvd at dusk: a sun-and-pyramid mural wall, papel picado swaying, a candy-red lowrider hopping.
   5 York Blvd and Avenue 50: green signs, REVERIE tagged, the San Gabriel Mountains behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rvflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rv-flk{animation:rvflick 2.2s infinite}.rv-flk2{animation-delay:.7s}' +
    '@keyframes rvcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.rv-car{animation:rvcar 7s linear infinite}.rv-car2{animation-delay:-3.5s}' +
    '@keyframes rvsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.rv-palm{transform-box:fill-box;transform-origin:50% 100%;animation:rvsway 3.5s ease-in-out infinite}.rv-palm2{animation-delay:-1.6s}' +
    '@keyframes rvhop{0%,60%,100%{transform:translateY(0)}70%{transform:translateY(-22px) rotate(-4deg)}80%{transform:translateY(-6px)}}.rv-hop{transform-box:fill-box;transform-origin:30% 100%;animation:rvhop 1.8s ease-in-out infinite}' +
    '@keyframes rvflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.rv-pp{transform-box:fill-box;transform-origin:50% 0;animation:rvflag 1.6s ease-in-out infinite}.rv-pp2{animation-delay:-.8s}' +
    '@keyframes rvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rv-sp{animation:rvspray 1.4s ease-out infinite}.rv-sp2{animation-delay:.45s}' +
    '@keyframes rvbird{0%{transform:translate(0,0)}100%{transform:translate(420px,-20px)}}.rv-bird{animation:rvbird 12s linear infinite}.rv-bird2{animation-delay:-6s}' +
    '@keyframes rvsun{0%,100%{opacity:.75}50%{opacity:1}}.rv-sun{animation:rvsun 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="rv-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    '<g fill="#2f6a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const mtns = (y, c, op) => '<path d="M0 ' + y + 'l50 -34l40 16l60 -46l54 30l46 -22l70 34l40 -18l40 20v' + (260 - y) + 'H0z" fill="' + c + '" opacity="' + (op || 1) + '"/>';
  const ALINE = "#0072bc", PINK = "#ff6fae", GOLD = "#ffd23f", SKY = "#59d0ff";

  /* 1. Highland Park station, Metro A Line: street-level platform, silver light rail with the blue stripe */
  function rvstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (60 + i * 44) + '" y="104" width="32" height="20" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><path d="M24 96h306q26 0 32 30v24H24z" fill="#e9ecef" stroke="#7d868f" stroke-width="2"/>' + wins +
      '<rect x="24" y="130" width="338" height="7" fill="' + ALINE + '"/><rect x="24" y="137" width="338" height="3" fill="#2a2f36"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (104 + i * 88) + '" y="104" width="4" height="44" fill="#b9c0c7"/>').join("") +
      '<path d="M330 100q24 4 30 26h-30z" fill="#1f2a33"/><circle cx="356" cy="142" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 96l20 -16M220 96l20 -16" stroke="#555" stroke-width="2"/><path d="M110 80h150" stroke="#555" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rvs1)"/>' +
      mtns(88, "#7a6a8c", .7) +
      '<path d="M0 74h400" stroke="#3a3a3a" stroke-width="1.5"/>' +
      palm(30, 160, 100) + palm(372, 160, 110, "rv-palm2") +
      '<rect x="70" y="46" width="250" height="8" rx="2" fill="#c7a76a"/>' + [90, 300].map(x => '<rect x="' + (x - 3) + '" y="54" width="6" height="40" fill="#8a7a5a"/>').join("") +
      '<g class="rv-flk"><rect x="140" y="54" width="36" height="3" fill="#fff3c4"/></g><g class="rv-flk rv-flk2"><rect x="220" y="54" width="36" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="150" width="400" height="6" fill="#f2c200"/><rect x="0" y="156" width="400" height="26" fill="#cbbfa8"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#4a4a50"/><path d="M0 222h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("rv-car", 0, 236, PINK) +
      '<rect x="92" y="188" width="216" height="32" rx="3" fill="#111"/><text x="106" y="210" ' + font + ' font-size="17" fill="#fff">Highland Park</text>' +
      '<circle cx="284" cy="204" r="11" fill="' + ALINE + '"/><text x="284" y="209.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">A</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0" opacity=".9">HIGHLAND PARK · METRO A LINE · MARMION WAY</text>',
      sky("rvs1", "#3b2a5a", "#f6a86a"));
  }

  /* 2. Southwest Museum, Mount Washington: cream hall, Caracol tower, red tile */
  function rvmuseum() {
    const arches = Array.from({ length: 6 }, (_, i) => '<path d="M' + (150 + i * 32) + ' 176v-18q8 -10 16 0v18z" fill="#4a3a30"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rvs2)"/>' +
      '<circle class="rv-sun" cx="330" cy="54" r="22" fill="#ffe7a0"/>' +
      '<path d="M0 200q90 -80 200 -90q120 -6 200 70v80H0z" fill="#8a9a5a"/>' +
      '<rect x="120" y="140" width="240" height="44" fill="#ecdcbc"/><path d="M114 142l246 0l-8 -12h-230z" fill="#b5532f"/>' + arches +
      '<rect x="74" y="58" width="44" height="126" fill="#efe1c2"/><rect x="70" y="54" width="52" height="8" fill="#d9c7a2"/>' +
      '<path d="M66 56l30 -26l30 26z" fill="#b5532f"/><path d="M96 30v-8" stroke="#6b4a2a" stroke-width="2"/>' +
      [76, 100, 124, 148].map(y => '<rect x="90" y="' + y + '" width="12" height="14" rx="6" fill="#4a3a30"/>').join("") +
      '<rect x="84" y="164" width="24" height="20" rx="10" fill="#6b4a2a"/>' +
      palm(52, 200, 104) + palm(372, 196, 92, "rv-palm2") +
      '<g fill="#5e7a4a"><ellipse cx="160" cy="196" rx="30" ry="12"/><ellipse cx="300" cy="196" rx="34" ry="12"/></g>' +
      '<path d="M0 228q200 -26 400 0v32H0z" fill="#6e8448"/><path d="M60 260q60 -30 140 -34q80 2 140 34" stroke="#c9b08a" stroke-width="10" fill="none"/>' +
      '<g class="rv-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g><g class="rv-bird rv-bird2"><path d="M0 80q4 -4 8 0q4 -4 8 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a4a">THE SOUTHWEST MUSEUM · MOUNT WASHINGTON</text>',
      sky("rvs2", "#8ec8ec", "#fbe2b0"));
  }

  /* 3. Heritage Square: painted Victorians */
  function rvheritage() {
    const vic = (x, body, trim, roof, tower) => '<g><rect x="' + x + '" y="104" width="96" height="76" fill="' + body + '"/>' +
      '<path d="M' + (x - 6) + ' 106l54 -32l54 32z" fill="' + roof + '"/>' +
      (tower ? '<rect x="' + (x + 66) + '" y="70" width="26" height="40" fill="' + body + '"/><path d="M' + (x + 62) + ' 72l17 -26l17 26z" fill="' + roof + '"/>' : '') +
      '<rect x="' + (x + 10) + '" y="116" width="18" height="26" fill="#2f3a4a" stroke="' + trim + '" stroke-width="3"/><rect x="' + (x + 38) + '" y="116" width="18" height="26" fill="#2f3a4a" stroke="' + trim + '" stroke-width="3"/>' +
      '<rect x="' + (x + 66) + '" y="140" width="20" height="40" fill="#6b3a2a" stroke="' + trim + '" stroke-width="3"/>' +
      '<rect x="' + (x - 2) + '" y="150" width="100" height="5" fill="' + trim + '"/>' + [0, 20, 40, 60].map(d => '<path d="M' + (x + 4 + d) + ' 180v-26" stroke="' + trim + '" stroke-width="2"/>').join("") +
      '<path d="M' + x + ' 104h96" stroke="' + trim + '" stroke-width="3" stroke-dasharray="4 3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rvs3)"/>' +
      '<path d="M0 110l80 -30l90 20l100 -34l130 30v20H0z" fill="#9aa86a" opacity=".55"/>' +
      vic(14, "#7fb09a", "#f6efd8", "#6a3a4a", true) + vic(152, "#e8a8b8", "#fff4e0", "#4a5a7a", false) + vic(290, "#efd48a", "#ffffff", "#7a3a2a", true) +
      '<rect x="0" y="180" width="400" height="12" fill="#cfc8b8"/><rect x="0" y="192" width="400" height="68" fill="#4a4a50"/><path d="M0 226h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("rv-car", 0, 236, SKY) + car("rv-car rv-car2", 0, 210, PINK) +
      '<g class="rv-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a4a">HERITAGE SQUARE · NORTHEAST LA</text>',
      sky("rvs3", "#8ecdf0", "#fde8c8"));
  }

  /* 4. York Blvd at dusk: mural wall, papel picado, a hopping lowrider */
  function rvyork() {
    const pp = ["#ff6fae", "#ffd23f", "#59d0ff", "#7be07b", "#ff8a3d", "#b48cff", "#ff6fae", "#ffd23f", "#59d0ff"];
    const flags = pp.map((c, i) => '<g class="rv-pp' + (i % 2 ? " rv-pp2" : "") + '"><path d="M' + (14 + i * 44) + ' 40h28v22l-4 -4l-4 4l-4 -4l-4 4l-4 -4l-4 4l-4 -4z" fill="' + c + '"/><circle cx="' + (28 + i * 44) + '" cy="50" r="4" fill="#2a1a3a" opacity=".5"/></g>').join("");
    const lowrider = '<g class="rv-hop"><path d="M110 212h170q14 0 16 12v8H104v-8q0 -12 6 -12z" fill="#c8102e"/><path d="M146 212l14 -18h68l18 18z" fill="#c8102e"/>' +
      '<path d="M152 210l10 -13h28v13zM196 210v-13h28l12 13z" fill="#bfe3ff"/><path d="M104 224h192" stroke="#ffd23f" stroke-width="2"/>' +
      '<circle cx="138" cy="234" r="11" fill="#111"/><circle cx="138" cy="234" r="6" fill="#d8d8d8"/><circle cx="262" cy="234" r="11" fill="#111"/><circle cx="262" cy="234" r="6" fill="#d8d8d8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rvs4)"/>' +
      '<path d="M0 36q100 10 200 0q100 -10 200 0" stroke="#2a1a3a" stroke-width="1.5" fill="none"/>' + flags +
      '<rect x="20" y="78" width="360" height="132" fill="#f2e2c4"/>' +
      '<circle cx="200" cy="168" r="56" fill="#ffb03a"/>' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (200 + Math.cos(a) * 62) + ' ' + (168 - Math.sin(a) * 62) + 'L' + (200 + Math.cos(a) * 80) + ' ' + (168 - Math.sin(a) * 80) + '" stroke="#ff7a2a" stroke-width="5"/>'; }).join("") +
      '<path d="M40 210l46 -64l46 64z" fill="#c86a3a"/><path d="M52 194h68M62 178h48M72 162h28" stroke="#8a3a1a" stroke-width="3"/>' +
      '<path d="M268 210l46 -64l46 64z" fill="#c86a3a"/><path d="M280 194h68M290 178h48M300 162h28" stroke="#8a3a1a" stroke-width="3"/>' +
      '<path d="M20 100q40 -14 80 0t80 0t80 0t80 0t60 0" stroke="#2f8a6a" stroke-width="6" fill="none"/>' +
      '<rect x="20" y="78" width="360" height="132" fill="none" stroke="#5a3a2a" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a42"/><path d="M0 250h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      lowrider +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0" opacity=".9">YORK BLVD · HIGHLAND PARK</text>',
      sky("rvs4", "#2a1a4a", "#e0708a"));
  }

  /* 5. York Blvd and Avenue 50, the San Gabriels behind */
  function rvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rvs5)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 17) % 40 + 6) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<path d="M0 120l40 -30l40 14l50 -44l46 30l40 -22l56 30l44 -28l44 24l40 -10v40H0z" fill="#3a2e5a"/>' +
      palm(60, 132, 70) + palm(300, 132, 80, "rv-palm2") +
      '<rect x="0" y="130" width="400" height="94" fill="#9a5a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#7a4228" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#7a4228" stroke-width="1"/>').join("")).join("") +
      tag("REVERIE", 22, 200, 46, PINK, -6) + tag("SATORI MOB", 26, 148, 14, SKY, -4) + tag("TOO MUCH JUICE", 34, 218, 13, GOLD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 104, "York Blvd") + sign(262, 124, 120, "Avenue 50") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="rv-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("rv-car", 0, 240, PINK) +
      '<g class="rv-sp"><circle cx="236" cy="170" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="rv-sp rv-sp2"><circle cx="242" cy="164" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">YORK BLVD · AVENUE 50 · HIGHLAND PARK</text>',
      sky("rvs5", "#141836", "#6a3a5a"));
  }

  window.SCENES = { rvstation: rvstation, rvmuseum: rvmuseum, rvheritage: rvheritage, rvyork: rvyork, rvcorner: rvcorner };
})();
