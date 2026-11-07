/* snoopdogg scenes (Regions tab: Los Angeles + SoCal; Eastside Long Beach). CSS classes prefixed sd- (the page's own anim-train is kept).
   1 Pacific Coast Hwy station (Metro A Line): the street-level median platform on Long Beach Blvd, a silver light-rail train sliding in, palms.
   2 Long Beach Polytechnic High (Poly, his school): cream campus building, green-and-gold banner, flags waving.
   3 Atlantic Ave on the Eastside at sunset: a baby-blue '64 lowrider hopping past little stucco houses and palms.
   4 The Long Beach Arena by the water: the round arena wrapped in the giant blue whale mural, gulls gliding.
   5 Atlantic Ave and E 16th St by Poly: green signs, SNOOP DOGG tagged, the Queen Mary's three red funnels behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sdflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sd-flk{animation:sdflick 2.2s infinite}.sd-flk2{animation-delay:.7s}' +
    '@keyframes sdcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.sd-car{animation:sdcar 7s linear infinite}.sd-car2{animation-delay:-3.5s}' +
    '@keyframes sdsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sd-palm{transform-box:fill-box;transform-origin:50% 100%;animation:sdsway 3.5s ease-in-out infinite}.sd-palm2{animation-delay:-1.6s}' +
    '@keyframes sdhop{0%,55%,100%{transform:translateY(0) rotate(0)}65%{transform:translateY(-26px) rotate(-5deg)}78%{transform:translateY(-4px) rotate(1deg)}}.sd-hop{transform-box:fill-box;transform-origin:30% 100%;animation:sdhop 1.8s ease-in-out infinite}' +
    '@keyframes sdflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.94)}}.sd-flag{transform-box:fill-box;transform-origin:0 50%;animation:sdflag 1.4s ease-in-out infinite}.sd-flag2{animation-delay:-.7s}' +
    '@keyframes sdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sd-sp{animation:sdspray 1.4s ease-out infinite}.sd-sp2{animation-delay:.45s}' +
    '@keyframes sdgull{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-24px)}}.sd-gull{animation:sdgull 11s linear infinite}.sd-gull2{animation-delay:-5.5s}' +
    '@keyframes sdwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.sd-wave{animation:sdwave 3s ease-in-out infinite}' +
    '@keyframes sdsmoke{0%{transform:translateY(0);opacity:.6}100%{transform:translate(10px,-30px);opacity:0}}.sd-smk{animation:sdsmoke 3s ease-out infinite}.sd-smk2{animation-delay:-1.5s}' +
    '@keyframes sdtail{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(10deg)}}.sd-tail{transform-box:fill-box;transform-origin:0 100%;animation:sdtail 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="sd-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    '<g fill="#2f6a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const gull = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>';
  const ALINE = "#0072bc", BLUE = "#6ec6ff", GOLD = "#ffcc33", GREEN = "#2fbf71";

  /* 1. Pacific Coast Hwy station, Metro A Line: median platform on Long Beach Blvd */
  function sdstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 44) + '" y="106" width="32" height="18" rx="3" fill="#22303a"/>').join("");
    const train = '<g class="anim-train"><path d="M22 98h308q26 0 32 30v22H22z" fill="#dfe3e8" stroke="#6f7881" stroke-width="2"/>' + wins +
      '<rect x="22" y="128" width="340" height="5" fill="#3d4650"/><rect x="22" y="133" width="340" height="3" fill="' + ALINE + '"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (102 + i * 88) + '" y="106" width="4" height="42" fill="#aab2ba"/>').join("") +
      '<path d="M330 102q24 4 30 26h-30z" fill="#22303a"/><circle cx="356" cy="142" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 98l20 -18M230 98l20 -18" stroke="#555" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sds1)"/>' +
      '<circle cx="340" cy="40" r="18" fill="#fff2b0" opacity=".9"/>' +
      '<path d="M0 76h400" stroke="#3a3a3a" stroke-width="1.5"/><path d="M0 80h400" stroke="#3a3a3a" stroke-width="1"/>' +
      '<rect x="0" y="84" width="400" height="18" fill="#c9b79a" opacity=".55"/>' +
      palm(28, 160, 108) + palm(374, 160, 116, "sd-palm2") +
      '<path d="M70 50h260l-14 -10H84z" fill="#3c6e9e"/><rect x="70" y="50" width="260" height="6" fill="#2b5076"/>' + [96, 304].map(x => '<rect x="' + (x - 3) + '" y="56" width="6" height="42" fill="#7d868f"/>').join("") +
      '<g class="sd-flk"><rect x="140" y="56" width="36" height="3" fill="#fff3c4"/></g><g class="sd-flk sd-flk2"><rect x="224" y="56" width="36" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="150" width="400" height="6" fill="#f2c200"/><rect x="0" y="156" width="400" height="24" fill="#c7c1b4"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#4a4a50"/><path d="M0 222h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("sd-car", 0, 240, BLUE) +
      '<rect x="72" y="186" width="256" height="32" rx="3" fill="#111"/><text x="86" y="208" ' + font + ' font-size="16" fill="#fff">Pacific Coast Hwy</text>' +
      '<circle cx="306" cy="202" r="11" fill="' + ALINE + '"/><text x="306" y="207.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">A</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">LONG BEACH BLVD · METRO A LINE</text>',
      sky("sds1", "#5bb6ef", "#cfeeff"));
  }

  /* 2. Long Beach Polytechnic High School */
  function sdpoly() {
    const wins = (y) => Array.from({ length: 8 }, (_, i) => '<rect x="' + (52 + i * 38 + (i > 3 ? 24 : 0)) + '" y="' + y + '" width="18" height="22" rx="2" fill="#4a6a7a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sds2)"/>' +
      gull("sd-gull", 0, 40) + gull("sd-gull sd-gull2", 40, 30) +
      palm(22, 196, 120) + palm(380, 196, 112, "sd-palm2") +
      '<rect x="40" y="88" width="320" height="108" fill="#efe2c4" stroke="#c9b48a" stroke-width="2"/>' +
      '<rect x="40" y="82" width="320" height="8" fill="#d8c69c"/>' +
      '<rect x="160" y="64" width="80" height="132" fill="#f4e9cf" stroke="#c9b48a" stroke-width="2"/><path d="M156 64h88l-6 -10h-76z" fill="#d8c69c"/>' +
      '<path d="M178 196v-46q22 -26 44 0v46z" fill="#5a3a22"/><path d="M200 128v68" stroke="#3a2412" stroke-width="2"/>' +
      '<text x="200" y="104" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#0e5a32">POLY</text>' +
      wins(104) + wins(144) +
      '<rect x="60" y="172" width="100" height="18" rx="2" fill="#0e5a32"/><text x="110" y="185" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">SCHOLARS</text>' +
      '<rect x="240" y="172" width="100" height="18" rx="2" fill="#0e5a32"/><text x="290" y="185" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CHAMPIONS</text>' +
      '<rect x="198" y="18" width="3" height="40" fill="#777"/><g class="sd-flag"><rect x="201" y="20" width="34" height="18" fill="#0e5a32"/><rect x="201" y="26" width="34" height="6" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="196" width="400" height="20" fill="#c7c1b4"/><rect x="0" y="216" width="400" height="44" fill="#4a4a50"/><path d="M0 238h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("sd-car", 0, 244, GOLD) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" opacity=".85">LONG BEACH POLYTECHNIC HIGH · ATLANTIC AVE</text>',
      sky("sds2", "#7ec8f4", "#e6f6ff"));
  }

  /* 3. Atlantic Ave, Eastside Long Beach, sunset cruise with a baby-blue '64 hopping */
  function sdcruise() {
    const house = (x, c, r) => '<rect x="' + x + '" y="132" width="66" height="44" fill="' + c + '"/><path d="M' + (x - 6) + ' 134l39 -24l39 24z" fill="' + r + '"/><rect x="' + (x + 8) + '" y="144" width="16" height="14" fill="#ffd98a"/><rect x="' + (x + 40) + '" y="148" width="14" height="28" fill="#5a3a22"/>';
    const lowrider = '<g class="sd-hop"><path d="M150 210h118q10 0 12 10v8H140v-8q2 -10 10 -10z" fill="' + BLUE + '" stroke="#2a6a90" stroke-width="2"/>' +
      '<path d="M170 210l14 -16h52l16 16z" fill="' + BLUE + '" stroke="#2a6a90" stroke-width="2"/><path d="M180 208l8 -10h18v10zM212 198h20l10 10h-30z" fill="#bfe3ff"/>' +
      '<rect x="140" y="218" width="140" height="3" fill="#e8f2ff"/>' +
      '<circle cx="168" cy="230" r="9" fill="#111"/><circle cx="168" cy="230" r="5" fill="#ddd"/><circle cx="254" cy="230" r="9" fill="#111"/><circle cx="254" cy="230" r="5" fill="#ddd"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sds3)"/>' +
      '<circle cx="200" cy="120" r="34" fill="#ffcf6a" opacity=".85"/>' +
      palm(50, 176, 120) + palm(330, 176, 130, "sd-palm2") + palm(370, 176, 96) +
      house(70, "#f1d3b0", "#b5523b") + house(160, "#d8e8d0", "#7a4a3a") + house(250, "#f4e0a8", "#a8442e") +
      '<rect x="0" y="176" width="400" height="12" fill="#c7c1b4"/><rect x="0" y="188" width="400" height="72" fill="#3e3d44"/><path d="M0 246h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      lowrider +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">ATLANTIC AVE · EASTSIDE LONG BEACH</text>',
      sky("sds3", "#3b2a6a", "#ff9a5a"));
  }

  /* 4. The Long Beach Arena and its giant whale mural, by the water */
  function sdarena() {
    const whale = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q30 -16 70 -6q14 4 22 -4l6 -10q2 12 -6 20q8 2 14 10q-10 -2 -18 0q-30 18 -88 -10z" fill="#5f7f92"/><circle cx="14" cy="-2" r="1.6" fill="#1a2a35"/><path d="M8 6q20 6 44 2" stroke="#c8d6de" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sds4)"/>' +
      gull("sd-gull", 0, 34) + gull("sd-gull sd-gull2", 60, 24) +
      '<ellipse cx="200" cy="150" rx="170" ry="26" fill="#2f6f9a"/>' +
      '<rect x="30" y="80" width="340" height="70" fill="#1f5f8f"/>' +
      '<ellipse cx="200" cy="80" rx="170" ry="22" fill="#e9eef2" stroke="#9aa6ae" stroke-width="2"/>' +
      '<rect x="30" y="80" width="340" height="70" fill="url(#sdsea)"/>' +
      whale(60, 124, 1.1) + whale(190, 112, 1.4) + whale(290, 130, .9) +
      '<path d="M40 100q20 -8 40 0t40 0t40 0" stroke="#9fd6f2" stroke-width="2" fill="none" opacity=".6"/>' +
      '<rect x="0" y="160" width="400" height="16" fill="#cfc7b2"/>' +
      '<g class="sd-wave"><rect x="-20" y="176" width="440" height="84" fill="#2b79b0"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 60 - 10) + ' ' + (196 + (i % 3) * 18) + 'q15 -6 30 0t30 0" stroke="#bfe7ff" stroke-width="2" fill="none"/>').join("") + '</g>' +
      palm(14, 170, 90) + palm(388, 170, 96, "sd-palm2") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">LONG BEACH ARENA · THE WHALE WALL</text>',
      sky("sds4", "#4fa8e0", "#bfe6ff") + '<linearGradient id="sdsea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a93c9" stop-opacity=".6"/><stop offset="1" stop-color="#0f3d63" stop-opacity=".2"/></linearGradient>');
  }

  /* 5. Atlantic Ave and E 16th St by Poly, the Queen Mary behind */
  function sdcorner() {
    const funnel = (x) => '<rect x="' + x + '" y="62" width="16" height="30" fill="#d42a1e"/><rect x="' + x + '" y="62" width="16" height="7" fill="#151515"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sds5)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 13) % 34 + 6) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<g class="sd-smk"><circle cx="150" cy="56" r="6" fill="#d8d8d8" opacity=".5"/></g><g class="sd-smk sd-smk2"><circle cx="186" cy="56" r="6" fill="#d8d8d8" opacity=".5"/></g>' +
      funnel(142) + funnel(178) + funnel(214) +
      '<path d="M90 92h220v16H90z" fill="#f2f2f2"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (96 + i * 15) + '" y="96" width="7" height="5" fill="#ffe08a"/>').join("") +
      '<path d="M50 108h300l-20 22H72z" fill="#141414"/><rect x="50" y="108" width="300" height="3" fill="#f2f2f2"/>' +
      '<path d="M120 76l-30 32M280 76l30 32" stroke="#888" stroke-width="1"/>' +
      '<rect x="0" y="124" width="400" height="8" fill="#1d3f5e"/>' +
      palm(48, 136, 60) + palm(300, 136, 70, "sd-palm2") +
      '<rect x="0" y="130" width="400" height="94" fill="#c9c2b2"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#aaa392" stroke-width="1"/>').join("") +
      tag("SNOOP DOGG", 18, 196, 40, BLUE, -6) + tag("213", 30, 150, 18, GOLD, -4) + tag("LBC", 200, 150, 16, GREEN, -3) + tag("DOGGFATHER", 150, 216, 14, GOLD, -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 104, "Atlantic Ave") + sign(286, 124, 104, "E 16th St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sd-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("sd-car", 0, 240, BLUE) +
      '<g class="sd-sp"><circle cx="236" cy="170" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="sd-sp sd-sp2"><circle cx="242" cy="164" r="2" fill="' + BLUE + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">ATLANTIC AVE · E 16TH ST · EASTSIDE LONG BEACH</text>',
      sky("sds5", "#0f1838", "#5a4a7a"));
  }

  window.SCENES = { sdstation: sdstation, sdpoly: sdpoly, sdcruise: sdcruise, sdarena: sdarena, sdcorner: sdcorner };
})();
