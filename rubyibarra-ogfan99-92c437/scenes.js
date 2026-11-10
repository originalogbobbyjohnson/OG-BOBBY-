/* rubyibarra scenes (Regions tab: The Bay Area; San Lorenzo, East Bay). CSS classes prefixed ri- (the page's own anim-train is kept).
   1 Bay Fair BART: the elevated platform by Bayfair, a white-and-blue BART train sliding in, Orange / Green / Blue line badges, the East Bay hills behind.
   2 SFO, the day she landed from the Philippines at five: a jet coming down over the bay toward the runway lights.
   3 Tacloban, where she was born: the San Juanico Bridge's steel arch truss over the strait, lit up at dusk, a banca boat crossing.
   4 San Lorenzo High School: the low stucco campus on the boulevard, palms, a hoop with a ball bouncing.
   5 Hesperian Blvd and Lewelling Blvd in San Lorenzo: green signs, RUBY tagged, the Hayward hills behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes riflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ri-flk{animation:riflick 2.2s infinite}.ri-flk2{animation-delay:.7s}' +
    '@keyframes ricar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.ri-car{animation:ricar 7s linear infinite}.ri-car2{animation-delay:-3.5s}' +
    '@keyframes ricarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.ri-carL{animation:ricarL 8s linear infinite}' +
    '@keyframes rijet{0%{transform:translate(-60px,-50px)}100%{transform:translate(360px,70px)}}.ri-jet{animation:rijet 9s linear infinite;animation-delay:-3s}' +
    '@keyframes riboat{from{transform:translateX(-90px)}to{transform:translateX(500px)}}.ri-boat{animation:riboat 16s linear infinite;animation-delay:-6s}' +
    '@keyframes riglow{0%,100%{opacity:.35}50%{opacity:1}}.ri-gl{animation:riglow 1.8s ease-in-out infinite}.ri-gl2{animation-delay:-.9s}' +
    '@keyframes ribounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.ri-ball{animation:ribounce 1.1s ease-in-out infinite}' +
    '@keyframes risway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ri-palm{transform-box:fill-box;transform-origin:50% 100%;animation:risway 3s ease-in-out infinite}.ri-palm2{animation-delay:-1.5s}' +
    '@keyframes rispray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ri-sp{animation:rispray 1.4s ease-out infinite}.ri-sp2{animation-delay:.45s}' +
    '@keyframes ribird{0%{transform:translate(0,0)}100%{transform:translate(420px,-20px)}}.ri-bird{animation:ribird 12s linear infinite}.ri-bird2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const pill = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 8) + '" width="' + (txt.length * 7 + 12) + '" height="16" rx="8" fill="' + color + '"/><text x="' + (x + (txt.length * 7 + 12) / 2) + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="ri-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 -' + (h / 2) + ' 2 -' + h + '" stroke="#7a5a3a" stroke-width="5" fill="none"/>' +
    [[-26, -6], [-18, 8], [24, -4], [18, 10], [0, -14]].map(([dx, dy]) => '<path d="M' + (x + 2) + ' ' + (y - h) + 'q' + (dx / 2) + ' ' + (dy - 10) + ' ' + dx + ' ' + (dy + 4) + '" stroke="#2f7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const hills = (y, c) => '<path d="M0 ' + y + 'q50 -40 110 -26q60 -34 130 -10q70 -30 160 6V' + (y + 30) + 'H0z" fill="' + c + '"/>';
  const BART = "#0099d8", SUN = "#f5c542", RED = "#ce1126", BLUE = "#4f8df5", ORANGE = "#faa61a", GREEN = "#4db848", LBLUE = "#00aeef";

  /* 1. Bay Fair BART: elevated platform, white-and-blue train, hills behind */
  function ristation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="88" width="30" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><path d="M30 82h300q30 0 34 34v20H30z" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="30" y="116" width="334" height="8" fill="' + BART + '"/><rect x="30" y="124" width="334" height="2" fill="#1d3f6e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (100 + i * 88) + '" y="92" width="4" height="44" fill="#c9ced3"/>').join("") +
      '<path d="M330 86q26 2 30 28h-30z" fill="#1f2a33"/><circle cx="356" cy="130" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ris1)"/>' +
      hills(70, "#b89a5a") + hills(84, "#8a7a4a") +
      '<g class="ri-bird"><path d="M20 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.5" fill="none"/></g>' +
      '<rect x="20" y="34" width="360" height="8" rx="2" fill="#c6c2b8"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="42" width="6" height="40" fill="#c6c2b8"/>').join("") +
      '<g class="ri-flk"><rect x="100" y="42" width="40" height="3" fill="#fff3c4"/></g><g class="ri-flk ri-flk2"><rect x="260" y="42" width="40" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="138" width="400" height="6" fill="#f2c200"/><rect x="0" y="144" width="400" height="22" fill="#cfc9bc"/>' +
      '<rect x="0" y="166" width="400" height="10" fill="#9a958a"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="176" width="22" height="84" fill="#a8a296"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#5d5a55"/>' + car("ri-car", 0, 240, RED) + car("ri-car ri-car2", 0, 240, SUN) +
      '<rect x="58" y="184" width="284" height="42" rx="3" fill="#111"/><text x="70" y="212" ' + font + ' font-size="19" fill="#fff">Bay Fair</text>' +
      pill(150, 205, "ORANGE", ORANGE, true) + pill(206, 205, "GREEN", GREEN, true) + pill(255, 205, "BLUE", LBLUE, true) + pill(298, 205, "BART", BART) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a3040" opacity=".9">BAY FAIR · SAN LEANDRO / SAN LORENZO · EAST BAY</text>',
      sky("ris1", "#8fc0e0", "#f2e6c8"));
  }

  /* 2. SFO: a jet coming down over the bay toward the runway lights */
  function riflight() {
    const jet = '<g class="ri-jet"><path d="M0 40l70 -6q10 0 10 6t-10 6l-70 -6z" fill="#f4f6f8" stroke="#6a7480" stroke-width="1.5"/>' +
      '<path d="M30 38l-14 -18h8l22 18zM30 42l-14 18h8l22 -18z" fill="#d8dde2" stroke="#6a7480" stroke-width="1"/><path d="M2 40l-6 -12h6l8 12z" fill="' + RED + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<circle cx="' + (40 + i * 5) + '" cy="38" r="1.2" fill="#2a3a4a"/>').join("") + '</g>';
    const lights = Array.from({ length: 14 }, (_, i) => '<circle class="ri-gl' + (i % 2 ? " ri-gl2" : "") + '" cx="' + (60 + i * 22) + '" cy="' + (196 + i * 2) + '" r="2.5" fill="#ffe48a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ris2)"/>' +
      '<circle cx="320" cy="70" r="26" fill="#ffd27a" opacity=".85"/>' +
      hills(120, "#6a6a7a") +
      '<rect x="0" y="140" width="400" height="44" fill="#4f7a9a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (10 + i * 66) + ' ' + (150 + (i % 3) * 10) + 'q10 -4 20 0" stroke="#bcd6e8" stroke-width="2" fill="none"/>').join("") +
      '<path d="M0 184h400v76H0z" fill="#3a3a40"/><path d="M40 196L400 226v14L30 206z" fill="#55555c"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (60 + i * 34) + ' ' + (201 + i * 2.8) + 'l16 1.4" stroke="#f2f2f2" stroke-width="2"/>').join("") + lights +
      '<rect x="30" y="150" width="14" height="34" fill="#d8d4cc"/><path d="M24 150h26l-4 -10h-18z" fill="#2a4a6a"/><circle class="ri-gl" cx="37" cy="138" r="3" fill="#ff5a4a"/>' +
      jet +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a2a" opacity=".9">SFO · LANDING FROM THE PHILIPPINES AT FIVE</text>',
      sky("ris2", "#f0a070", "#f6dcb0"));
  }

  /* 3. Tacloban: the San Juanico Bridge's arch truss over the strait, lit up at dusk, a banca crossing */
  function ribridge() {
    const deck = 138;
    let truss = '';
    for (let i = 0; i <= 12; i++) {
      const x = 130 + i * 12, t = (i - 6) / 6, y = deck - 50 * (1 - t * t);
      truss += '<path d="M' + x + ' ' + deck + 'V' + y.toFixed(1) + '" stroke="#9fb6c4" stroke-width="2"/>';
      if (i < 12) { const x2 = x + 12, t2 = (i - 5) / 6, y2 = deck - 50 * (1 - t2 * t2); truss += '<path d="M' + x + ' ' + deck + 'L' + x2 + ' ' + y2.toFixed(1) + '" stroke="#9fb6c4" stroke-width="1.5"/>'; }
    }
    const arch = '<path d="M130 ' + deck + 'Q202 ' + (deck - 100) + ' 274 ' + deck + '" stroke="#b8ccd8" stroke-width="5" fill="none"/>';
    const piers = Array.from({ length: 12 }, (_, i) => { const x = 8 + i * 34; return (x > 120 && x < 280) ? "" : '<rect x="' + x + '" y="' + deck + '" width="7" height="' + (190 - deck) + '" fill="#8a8a86"/>'; }).join("") +
      '<rect x="126" y="' + deck + '" width="9" height="52" fill="#8a8a86"/><rect x="269" y="' + deck + '" width="9" height="52" fill="#8a8a86"/>';
    const leds = Array.from({ length: 13 }, (_, i) => { const t = (i - 6) / 6; return '<circle class="ri-gl' + (i % 2 ? " ri-gl2" : "") + '" cx="' + (130 + i * 12) + '" cy="' + (deck - 50 * (1 - t * t) - 2).toFixed(1) + '" r="2.5" fill="' + [SUN, "#ff6a8a", LBLUE][i % 3] + '"/>'; }).join("");
    const boat = '<g class="ri-boat"><path d="M0 214h60q-4 10 -14 10h-32q-10 0 -14 -10z" fill="#e8dcc0" stroke="#5a3a22" stroke-width="1.5"/><path d="M-10 222q40 8 80 0" stroke="#5a3a22" stroke-width="2" fill="none"/><path d="M30 214v-30l18 30z" fill="#f2f2f2" stroke="#5a3a22" stroke-width="1"/><path d="M30 214v-30l-12 30z" fill="' + RED + '" opacity=".85"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ris3)"/>' +
      '<circle cx="80" cy="96" r="22" fill="#ffb070" opacity=".8"/>' +
      '<path d="M0 132q60 -40 130 -18q40 -20 80 4V140H0z" fill="#2f5a3a"/><path d="M230 140q50 -46 100 -26q40 -16 70 6v20z" fill="#2a4f34"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#2e5a7a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (10 + i * 52) + ' ' + (196 + (i % 3) * 14) + 'q12 -4 24 0" stroke="#8ab6d0" stroke-width="2" fill="none"/>').join("") +
      '<rect x="0" y="' + (deck - 4) + '" width="400" height="8" fill="#c8c8c2"/>' + piers + truss + arch + leds +
      boat +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff2d8" opacity=".9">SAN JUANICO BRIDGE · TACLOBAN CITY · LEYTE</text>',
      sky("ris3", "#3a3a6a", "#f0907a"));
  }

  /* 4. San Lorenzo High School: low stucco campus, palms, a hoop with a ball bouncing */
  function rischool() {
    return svg(
      '<rect width="400" height="260" fill="url(#ris4)"/>' +
      hills(96, "#c8a860") +
      '<rect x="40" y="96" width="320" height="70" fill="#efe4cc" stroke="#b8a888" stroke-width="1.5"/><rect x="34" y="90" width="332" height="8" fill="#8a3a2a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (56 + i * 38) + '" y="112" width="24" height="22" fill="#5a7a90"/><path d="M' + (68 + i * 38) + ' 112v22" stroke="#efe4cc" stroke-width="1.5"/>').join("") +
      '<rect x="178" y="138" width="44" height="28" fill="#6a4a30"/><path d="M200 138v28" stroke="#3a2a1a" stroke-width="1.5"/>' +
      '<rect x="120" y="70" width="160" height="20" rx="2" fill="#1f2a44"/><text x="200" y="85" text-anchor="middle" ' + font + ' font-size="12" fill="' + SUN + '">SAN LORENZO HIGH</text>' +
      palm(26, 170, 80) + palm(378, 170, 86, "ri-palm2") +
      '<rect x="0" y="166" width="400" height="94" fill="#7d8a6a"/><rect x="190" y="176" width="210" height="84" fill="#5a6a7a"/><path d="M190 218h210M296 176v84" stroke="#e8ecf2" stroke-width="1.5" opacity=".7"/>' +
      '<rect x="356" y="150" width="5" height="70" fill="#d8d8d8"/><rect x="336" y="140" width="40" height="26" fill="#f2f2f2" stroke="#999"/><rect x="344" y="160" width="16" height="3" fill="#e8622a"/><path d="M344 163l3 10h10l3 -10" stroke="#ddd" stroke-width="1" fill="none"/>' +
      '<g class="ri-ball"><circle cx="318" cy="232" r="7" fill="#e8622a" stroke="#6a2a0a" stroke-width="1"/><path d="M311 232h14M318 225v14" stroke="#6a2a0a" stroke-width="1"/></g>' +
      car("ri-carL", 0, 246, BLUE) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a3040" opacity=".9">SAN LORENZO HIGH SCHOOL · SAN LORENZO · EAST BAY</text>',
      sky("ris4", "#9fd0f0", "#fbeed0"));
  }

  /* 5. Hesperian Blvd and Lewelling Blvd: green signs, RUBY tagged, the Hayward hills behind */
  function ricorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ris5)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 17) % 40 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<path d="M0 124q60 -50 140 -34q60 -30 130 -6q70 -26 130 10v40H0z" fill="#3a3550"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="ri-gl' + (i % 2 ? " ri-gl2" : "") + '" cx="' + (20 + i * 40) + '" cy="' + (112 - (i % 3) * 6) + '" r="1.5" fill="#ffe48a"/>').join("") +
      '<rect x="0" y="130" width="400" height="94" fill="#5a4a6a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#4a3a58" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#4a3a58" stroke-width="1"/>').join("")).join("") +
      '<g transform="translate(196 150)"><path d="M14 0l4 10h10l-8 6l3 10l-9 -6l-9 6l3 -10l-8 -6h10z" fill="' + SUN + '" opacity=".9"/></g>' +
      tag("RUBY", 26, 204, 56, SUN, -6) + tag("IBARRA", 150, 216, 22, "#ffffff", -4) + tag("WAY UP", 34, 150, 15, BLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 134, "Hesperian Blvd") + sign(254, 124, 134, "Lewelling Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ri-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("ri-car", 0, 240, RED) +
      '<g class="ri-sp"><circle cx="226" cy="170" r="3" fill="' + SUN + '" opacity=".7"/></g><g class="ri-sp ri-sp2"><circle cx="232" cy="164" r="2" fill="' + SUN + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">HESPERIAN BLVD · LEWELLING BLVD · SAN LORENZO</text>',
      sky("ris5", "#141836", "#5a3a5a"));
  }

  window.SCENES = { ristation: ristation, riflight: riflight, ribridge: ribridge, rischool: rischool, ricorner: ricorner };
})();
