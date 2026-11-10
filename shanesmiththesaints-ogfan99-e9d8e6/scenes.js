/* shanesmiththesaints scenes (Regions: Houston + Texas [Shane Smith (from Terrell, East Texas) moved to Austin in 2009 while at St. Edward's University, met fiddler Bennett Brown, band formed in Austin 2011]; Genres: country). CSS classes prefixed ssx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e9b44c", RED = "#c0392b", TEAL = "#4fa3a5", CREAM = "#f3ead8";
  const css = '<style>' +
    '@keyframes ssxcloud{0%{transform:translateX(0)}100%{transform:translateX(44px)}}.ssx-cl{animation:ssxcloud 14s ease-in-out infinite alternate}' +
    '@keyframes ssxglow{0%,100%{opacity:.45}50%{opacity:1}}.ssx-glow{animation:ssxglow 2.4s ease-in-out infinite}.ssx-g2{animation-delay:-1.2s}' +
    '@keyframes ssxhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ssx-hop{animation:ssxhop .5s ease-in-out infinite}.ssx-h2{animation-delay:-.25s}' +
    '@keyframes ssxbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ssx-beam{animation:ssxbeam 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.ssx-b2{animation-delay:-1.5s}' +
    '@keyframes ssxswing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.ssx-swing{animation:ssxswing 2.2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}' +
    '@keyframes ssxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ssx-sp{animation:ssxspray 1.4s ease-out infinite}.ssx-sp2{animation-delay:.45s}' +
    '@keyframes ssxtwk{0%,100%{opacity:.2}50%{opacity:1}}.ssx-tw{animation:ssxtwk 1.8s ease-in-out infinite}.ssx-tw2{animation-delay:-.9s}' +
    '@keyframes ssxbat{0%{transform:translate(0,0)}100%{transform:translate(-80px,-30px)}}.ssx-bat{animation:ssxbat 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const oak = (x, y, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + y + '" width="' + (6 * s) + '" height="' + (22 * s) + '" fill="#4a3424"/><ellipse cx="' + x + '" cy="' + (y - 2 * s) + '" rx="' + (26 * s) + '" ry="' + (14 * s) + '" fill="#3e5a2e"/><ellipse cx="' + (x - 12 * s) + '" cy="' + (y + 2 * s) + '" rx="' + (14 * s) + '" ry="' + (9 * s) + '" fill="#4a6a34"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (y + 1 * s) + '" rx="' + (14 * s) + '" ry="' + (9 * s) + '" fill="#36502a"/></g>';
  /* downtown Austin towers, the stepped twin-peaked "owl" tower among them */
  const skyline = (y, c) => '<g fill="' + c + '"><rect x="40" y="' + (y - 40) + '" width="26" height="60"/><rect x="70" y="' + (y - 64) + '" width="22" height="84"/><path d="M98 ' + (y + 20) + 'V' + (y - 70) + 'l6 -10v-8h4v8l2 -4l2 4v-8h4v8l6 10V' + (y + 20) + 'z"/>' +
    '<rect x="130" y="' + (y - 50) + '" width="28" height="70"/><rect x="162" y="' + (y - 86) + '" width="20" height="106"/><path d="M186 ' + (y + 20) + 'V' + (y - 58) + 'l14 -12l14 12V' + (y + 20) + 'z"/><rect x="220" y="' + (y - 44) + '" width="30" height="64"/><rect x="256" y="' + (y - 70) + '" width="18" height="90"/><rect x="280" y="' + (y - 34) + '" width="34" height="54"/></g>';

  function ssxstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#ssx1)"/>' +
      '<g class="ssx-cl"><ellipse cx="80" cy="28" rx="40" ry="9" fill="#fff" opacity=".6"/><ellipse cx="310" cy="20" rx="44" ry="9" fill="#fff" opacity=".5"/></g>' +
      skyline(124, "#8aa0b4") + oak(40, 112, 1.2) + oak(360, 110, 1.3) +
      /* MetroRapid station: steel canopy, glass wind screen, red real-time sign pylon */
      '<rect x="0" y="132" width="400" height="34" fill="#c8c0b0"/>' +
      '<path d="M150 92h200l-8 10h-184z" fill="#5a5e62"/><rect x="160" y="102" width="4" height="56" fill="#5a5e62"/><rect x="336" y="102" width="4" height="56" fill="#5a5e62"/>' +
      '<rect x="170" y="110" width="150" height="40" fill="#cfe2ea" opacity=".55" stroke="#5a5e62" stroke-width="1.5"/>' +
      '<rect x="356" y="96" width="14" height="62" fill="#2a2a2e"/><rect x="358" y="100" width="10" height="20" fill="' + RED + '"/><rect x="359" y="124" width="8" height="10" fill="#f6c450" class="ssx-glow"/>' +
      /* black station sign */
      '<rect x="22" y="14" width="300" height="56" rx="4" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="182" y="40" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">St. Edward’s</text>' +
      '<text x="182" y="60" text-anchor="middle" ' + font + ' font-size="9.5" fill="#cfd6dc" letter-spacing="1">S CONGRESS AVE · AUSTIN, TEXAS</text>' +
      '<rect x="32" y="25" width="40" height="18" rx="9" fill="' + RED + '" stroke="#fff" stroke-width="1.2"/><text x="52" y="38" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">801</text>' +
      '<rect x="0" y="166" width="400" height="12" fill="#b8b2a6"/><rect x="0" y="176" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3e4146"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      /* the red MetroRapid bus pulls in */
      '<g class="anim-train"><rect x="30" y="160" width="270" height="62" rx="10" fill="' + RED + '" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="30" y="200" width="270" height="6" fill="#8a1e14"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (42 + i * 30) + '" y="168" width="24" height="24" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="272" y="168" width="24" height="38" rx="3" fill="#2a3a4a"/><rect x="250" y="162" width="46" height="5" fill="#111"/><text x="273" y="166.5" text-anchor="middle" ' + font + ' font-size="4.2" fill="' + GOLD + '">801 SOUTHPARK</text>' +
      '<circle cx="72" cy="222" r="11" fill="#111"/><circle cx="72" cy="222" r="4" fill="#888"/><circle cx="256" cy="222" r="11" fill="#111"/><circle cx="256" cy="222" r="4" fill="#888"/>' +
      '<rect x="292" y="208" width="7" height="5" fill="#ffe8a0" class="ssx-glow"/></g>',
      sky("ssx1", "#7ab0dc", "#f4dcb0"));
  }

  function ssxcampus() {
    /* St. Edward's University Main Building: pale limestone Gothic Revival on the hill, the clock tower in the middle */
    const win = (x, y) => '<path d="M' + x + ' ' + (y + 18) + 'v-12q4 -8 8 0v12z" fill="#2a3442" stroke="#e8dcc4" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ssx2)"/>' +
      '<g class="ssx-cl"><ellipse cx="100" cy="30" rx="40" ry="8" fill="#fff" opacity=".55"/></g>' +
      '<path d="M0 200q100 -30 200 -28t200 26v62h-400z" fill="#6a8a3e"/>' +
      /* wings */
      '<rect x="40" y="110" width="320" height="76" fill="#e6dcc4" stroke="#8a7a60" stroke-width="2"/>' +
      '<path d="M34 110l14 -22h304l14 22z" fill="#5a5e66"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (52 + i * 22) + ' 88l8 -12l8 12z M' + (272 + i * 14 - 10) + ' 88" fill="#e6dcc4" stroke="#8a7a60" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (236 + i * 22) + ' 88l8 -12l8 12z" fill="#e6dcc4" stroke="#8a7a60" stroke-width="1"/>').join("") +
      Array.from({ length: 2 }, (_, r) => Array.from({ length: 14 }, (_, i) => (i > 5 && i < 8) ? '' : win(52 + i * 22, 120 + r * 30)).join("")).join("") +
      /* central tower */
      '<rect x="168" y="50" width="64" height="136" fill="#ece2cc" stroke="#8a7a60" stroke-width="2"/>' +
      '<path d="M162 50l38 -36l38 36z" fill="#5a5e66"/><rect x="196" y="4" width="8" height="12" fill="#5a5e66"/>' +
      '<circle cx="200" cy="74" r="13" fill="#f8f2e2" stroke="#3a3a3a" stroke-width="2"/><path d="M200 74v-9M200 74l6 3" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M186 186v-34q14 -18 28 0v34z" fill="#3a2a1a"/>' + win(182, 100) + win(210, 100) +
      oak(30, 190, 1.4) + oak(370, 188, 1.4) +
      '<g class="ssx-hop"><circle cx="120" cy="214" r="4" fill="#2a1a12"/><rect x="117" y="218" width="6" height="12" fill="#2a1a12"/></g>' +
      '<g class="ssx-hop ssx-h2"><circle cx="282" cy="216" r="4" fill="#2a1a12"/><rect x="279" y="220" width="6" height="12" fill="#2a1a12"/></g>' +
      '<rect x="120" y="234" width="160" height="20" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">ST. EDWARD’S · SOUTH AUSTIN</text>',
      sky("ssx2", "#6aa6d8", "#f2e2c0"));
  }

  function ssxhall() {
    /* the old Texas dance hall in Gruene: white clapboard, tin roof, open side flaps, string lights, two-steppers inside */
    const dancer = (x, cls) => '<g class="ssx-hop ' + cls + '" fill="#2a1a12"><circle cx="' + x + '" cy="150" r="5"/><path d="M' + (x - 6) + ' 156h12l2 18h-16z"/><rect x="' + (x - 5) + '" y="174" width="3.5" height="12"/><rect x="' + (x + 1.5) + '" y="174" width="3.5" height="12"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ssx3)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (14 + i * 29) + '" cy="' + (10 + (i * 17) % 40) + '" r="1.2" fill="#fff" class="ssx-tw' + (i % 2 ? " ssx-tw2" : "") + '"/>').join("") +
      oak(40, 100, 1.6) + oak(370, 96, 1.5) +
      '<path d="M30 92l170 -40l170 40z" fill="#9aa0a6" stroke="#5a5e62" stroke-width="2"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (40 + i * 21) + ' 92l' + ((200 - (40 + i * 21)) * .02) + ' -6" stroke="#7a8086" stroke-width="1"/>').join("") +
      '<rect x="40" y="92" width="320" height="110" fill="' + CREAM + '" stroke="#8a7a60" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M40 ' + (96 + i * 7) + 'h320" stroke="#d8ccb0" stroke-width="1"/>').join("") +
      '<rect x="60" y="120" width="280" height="72" fill="#3a2418"/>' +
      '<path d="M60 120h280" stroke="#f6d58a" stroke-width="1"/>' + Array.from({ length: 15 }, (_, i) => '<circle cx="' + (68 + i * 19) + '" cy="' + (124 + (i % 2) * 3) + '" r="2.4" fill="#ffe9a8" class="ssx-glow' + (i % 2 ? " ssx-g2" : "") + '"/>').join("") +
      dancer(110, "") + dancer(126, "ssx-h2") + dancer(190, "ssx-h2") + dancer(206, "") + dancer(270, "") + dancer(286, "ssx-h2") +
      '<rect x="120" y="98" width="160" height="18" fill="' + CREAM + '"/><text x="200" y="112" text-anchor="middle" ' + font + ' font-size="12" fill="#2a2a2a" letter-spacing="2">DANCE HALL</text>' +
      '<rect x="0" y="202" width="400" height="58" fill="#5a4a3a"/>' +
      '<rect x="130" y="226" width="140" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">GRUENE, TEXAS</text>',
      sky("ssx3", "#16203a", "#4a3a5a"));
  }

  function ssxrocks() {
    /* Red Rocks: the two giant tilted red sandstone monoliths framing the stage, where the band cut its live album */
    return svg(
      '<rect width="400" height="260" fill="url(#ssx4)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (10 + i * 25) + '" cy="' + (8 + (i * 13) % 50) + '" r="1.2" fill="#fff" class="ssx-tw' + (i % 2 ? " ssx-tw2" : "") + '"/>').join("") +
      /* light beams */
      '<g opacity=".35"><path class="ssx-beam" d="M196 150l-30 -150h20z" fill="#ffe9a8"/><path class="ssx-beam ssx-b2" d="M206 150l30 -150h20z" fill="#9adada"/></g>' +
      /* left monolith (Creation Rock) and right (Ship Rock) */
      '<path d="M0 260V120Q30 40 90 30Q120 34 128 70L150 170L150 260z" fill="#b5502e"/><path d="M20 120Q40 70 88 50" stroke="#8a3a20" stroke-width="3" fill="none"/><path d="M30 170Q60 110 120 100" stroke="#8a3a20" stroke-width="3" fill="none"/>' +
      '<path d="M400 260V90Q370 30 312 40Q284 50 278 90L250 170L250 260z" fill="#a8462a"/><path d="M380 110Q360 70 316 66" stroke="#7a3018" stroke-width="3" fill="none"/><path d="M372 170Q340 120 286 116" stroke="#7a3018" stroke-width="3" fill="none"/>' +
      /* stage */
      '<rect x="140" y="140" width="120" height="40" fill="#1e1a1e"/><path d="M134 140h132l-10 -14h-112z" fill="#2a2a30"/>' +
      '<rect x="150" y="150" width="100" height="22" fill="#3a2a3a"/>' +
      Array.from({ length: 5 }, (_, i) => '<g class="ssx-hop' + (i % 2 ? " ssx-h2" : "") + '"><circle cx="' + (162 + i * 19) + '" cy="156" r="3.5" fill="#111"/><rect x="' + (159 + i * 19) + '" y="159" width="6" height="12" fill="#111"/></g>').join("") +
      /* rows of seats + crowd */
      Array.from({ length: 7 }, (_, r) => '<path d="M' + (150 - r * 12) + ' ' + (186 + r * 11) + 'h' + (100 + r * 24) + '" stroke="#c87a52" stroke-width="3"/>' + Array.from({ length: 6 + r * 2 }, (_, i) => '<circle cx="' + (156 - r * 12 + i * 12) + '" cy="' + (182 + r * 11) + '" r="3" fill="#1a1418"/>').join("")).join("") +
      '<rect x="135" y="234" width="130" height="20" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">LIVE AT RED ROCKS</text>',
      sky("ssx4", "#121a36", "#6a4a6a"));
  }

  function ssxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ssx5)"/>' +
      '<g class="ssx-cl"><ellipse cx="90" cy="26" rx="40" ry="8" fill="#fff" opacity=".55"/></g>' +
      skyline(92, "#6a7a90") +
      /* bats heading out at dusk */
      '<g class="ssx-bat" fill="#1a1a22"><path d="M330 40l6 -4l3 3l3 -3l6 4l-6 0l-3 2l-3 -2z"/><path d="M350 56l5 -3l3 2l3 -2l5 3l-5 0l-3 2l-3 -2z"/><path d="M372 34l5 -3l3 2l3 -2l5 3l-5 0l-3 2l-3 -2z"/></g>' +
      /* painted limestone wall */
      '<rect x="0" y="100" width="400" height="116" fill="#d8c8a0"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (114 + r * 18) + 'h400" stroke="#b8a880" stroke-width="1"/>').join("") +
      '<rect x="0" y="100" width="400" height="8" fill="#8a7a5a"/>' +
      tag("SHANE SMITH", 30, 166, 34, GOLD, -5) + tag("&amp; THE SAINTS", 110, 202, 26, RED, -4) + tag("ATX", 296, 136, 18, TEAL, 8) +
      '<g fill="' + TEAL + '"><circle cx="300" cy="190" r="3" class="ssx-sp"/><circle cx="306" cy="186" r="2" class="ssx-sp ssx-sp2"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4a4e"/><rect x="0" y="214" width="400" height="4" fill="#b8b2a6"/>' +
      '<rect x="376" y="40" width="5" height="176" fill="#5a5e62"/>' +
      sign(244, 40, 146, "S CONGRESS AVE") + sign(262, 64, 128, "E WOODWARD ST") +
      '<rect x="20" y="226" width="130" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="85" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SOUTH AUSTIN</text>',
      sky("ssx5", "#e88a5a", "#f6d8a0"));
  }

  window.SCENES = { ssxstation, ssxcampus, ssxhall, ssxrocks, ssxcorner };
})();
