/* J Balvin game (GENRES: Reggaeton; INTERNATIONAL region: LATIN AMERICA; Medellín, Colombia - born 1985 in Medellín; grew up in Castilla, comuna 5).
   Rooms: 1 Metro de Medellín Line A pulling into Estación Tricentenario (the stop between Castilla and Aranjuez), the brick hillsides behind;
   2 Comuna 13: the orange-roofed outdoor escalators climbing past painted walls; 3 Metrocable gondolas gliding over the red-brick hills;
   4 the Alumbrados: Christmas lights strung along the Medellín River in every color; 5 Carrera 68 and Calle 98 in Castilla (the Bulevar),
   green street signs, BALVIN tagged in rainbow colors, the needle-topped Coltejer tower far behind.
   CSS classes prefixed "jbv" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jbvGon{0%{transform:translate(-60px,47.5px)}100%{transform:translate(460px,-82.5px)}}.jbvGon{animation:jbvGon 12s linear infinite}.jbvGn2{animation-delay:-4s}.jbvGn3{animation-delay:-8s}' +
    '@keyframes jbvStep{0%{transform:translate(0,0)}100%{transform:translate(-24px,-12px)}}.jbvStep{animation:jbvStep 1.2s linear infinite}' +
    '@keyframes jbvBlink{0%,100%{opacity:.35}50%{opacity:1}}.jbvBlink{animation:jbvBlink 1.6s ease-in-out infinite}.jbvBk2{animation-delay:-.5s}.jbvBk3{animation-delay:-1.1s}' +
    '@keyframes jbvBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-24px)}}.jbvBird{animation:jbvBird 12s linear infinite}.jbvBd2{animation-delay:-6s}' +
    '@keyframes jbvFlow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.jbvFlow{animation:jbvFlow 3s linear infinite}' +
    '@keyframes jbvHue{0%,100%{fill:#ffe600}25%{fill:#ff2e93}50%{fill:#00c2ff}75%{fill:#39d353}}.jbvHue{animation:jbvHue 4s linear infinite}' +
    '@keyframes jbvCar{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.jbvCar{animation:jbvCar 5.5s linear infinite}.jbvCr2{animation-delay:-2.7s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot, cls) =>
    '<text' + (cls ? ' class="' + cls + '"' : '') + ' x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const YEL = "#ffe600", PINK = "#ff2e93", CYAN = "#00c2ff", LIME = "#39d353", GREEN = "#0f6b3a", LINEA = "#1a5fb4", BRICK = "#b5532e";
  const birds = '<g class="jbvBird"><path d="M0 34q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
    '<g class="jbvBird jbvBd2"><path d="M0 56q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="1.8" fill="none"/></g>';
  /* red-brick hillside barrio: little boxes stacked up a slope */
  const hill = (y0, slope, seed, dark) => {
    let s = '<path d="M0 ' + y0 + 'L400 ' + (y0 - slope) + 'V260H0z" fill="' + (dark ? "#6b3a24" : "#8a4a2c") + '"/>';
    for (let i = 0; i < 46; i++) {
      const x = (i * 37 + seed * 13) % 400, yb = y0 - slope * x / 400 + ((i * 23 + seed) % 50);
      const w = 14 + (i % 3) * 6, h = 10 + (i % 4) * 4;
      s += '<rect x="' + x + '" y="' + (yb - h) + '" width="' + w + '" height="' + h + '" fill="' + (i % 5 === 0 ? "#e9dcc8" : (i % 2 ? BRICK : "#c8653a")) + '"/>' +
        '<rect x="' + (x + 3) + '" y="' + (yb - h + 3) + '" width="4" height="4" fill="#3a2418" opacity=".7"/>';
    }
    return s;
  };
  /* Coltejer tower: slim tower with the needle top */
  const coltejer = (x, base, k) => '<g fill="#cfd5dc"><rect x="' + (x - 10 * k) + '" y="' + (base - 120 * k) + '" width="' + (20 * k) + '" height="' + (120 * k) + '"/>' +
    '<path d="M' + (x - 10 * k) + ' ' + (base - 120 * k) + 'Q' + x + ' ' + (base - 150 * k) + ' ' + x + ' ' + (base - 175 * k) + 'Q' + x + ' ' + (base - 150 * k) + ' ' + (x + 10 * k) + ' ' + (base - 120 * k) + 'z"/></g>' +
    '<g fill="#9aa6b2">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (x - 7 * k) + '" y="' + (base - 114 * k + i * 11 * k) + '" width="' + (14 * k) + '" height="' + (2 * k) + '"/>').join("") + '</g>';

  /* 1. Estación Tricentenario, Line A: the train gliding in, the hillsides of comuna 5 behind */
  function jbvmetro() {
    let wins = "";
    for (let x = 52; x < 340; x += 26) if ((x - 52) % 104 !== 78) wins += '<rect x="' + x + '" y="146" width="18" height="16" rx="2" fill="#bfe3ff"/>';
    const train = '<g class="anim-train">' +
      '<rect x="36" y="136" width="320" height="58" rx="8" fill="#e9edf1" stroke="#8a96a2" stroke-width="1.5"/>' +
      '<path d="M140 136v58M244 136v58" stroke="#8a96a2" stroke-width="1.5"/>' + wins +
      '<rect x="36" y="170" width="320" height="7" fill="' + LIME + '"/><rect x="36" y="179" width="320" height="4" fill="' + LINEA + '"/>' +
      '<rect x="120" y="142" width="16" height="44" fill="#c7d0d8"/><rect x="224" y="142" width="16" height="44" fill="#c7d0d8"/>' +
      '<rect x="338" y="144" width="14" height="22" rx="3" fill="#bfe3ff"/><circle cx="346" cy="186" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jbv1)"/>' + birds +
      hill(120, 50, 1, false) +
      '<rect x="0" y="194" width="400" height="66" fill="#6a6e74"/><rect x="0" y="194" width="400" height="5" fill="' + YEL + '"/>' +
      '<g stroke="#3a3d42" stroke-width="3"><path d="M0 214h400M0 226h400"/></g>' +
      '<path d="M10 104h380l-12 12H22z" fill="#d7dde3" stroke="#8a96a2" stroke-width="1.2"/>' +
      '<g fill="#7a838c"><rect x="30" y="116" width="5" height="80"/><rect x="198" y="116" width="5" height="80"/><rect x="364" y="116" width="5" height="80"/></g>' +
      train +
      '<rect x="98" y="12" width="4" height="36" fill="#9aa3ab"/><rect x="298" y="12" width="4" height="36" fill="#9aa3ab"/>' +
      '<rect x="74" y="8" width="252" height="46" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<circle cx="100" cy="31" r="14" fill="' + LINEA + '"/><text x="100" y="37" text-anchor="middle" ' + F + ' font-size="16" fill="#fff">A</text>' +
      '<text x="212" y="32" text-anchor="middle" ' + F + ' font-size="17" fill="#fff">Tricentenario</text>' +
      '<text x="212" y="47" text-anchor="middle" ' + F + ' font-size="8" fill="#cfd6dc">METRO DE MEDELLÍN · LÍNEA A</text>',
      sky("jbv1", "#7fc8ff", "#e8f4ff"));
  }

  /* 2. Comuna 13: covered outdoor escalators climbing the hill, painted walls */
  function jbvescaleras() {
    let steps = '<g class="jbvStep">';
    for (let i = 0; i < 17; i++) { const x = 122 + i * 13, y = 230 - 0.5 * (x - 110); steps += '<path d="M' + x + ' ' + (y + 2) + 'l5 8" stroke="#cfd6dc" stroke-width="2"/>'; }
    steps += '</g>';
    const mural = (x, y, w, h, c1, c2, c3) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c1 + '"/>' +
      '<circle cx="' + (x + w * .3) + '" cy="' + (y + h * .5) + '" r="' + (h * .3) + '" fill="' + c2 + '"/><path d="M' + (x + w * .5) + ' ' + (y + h * .85) + 'q' + (w * .2) + ' -' + (h * .7) + ' ' + (w * .45) + ' 0" stroke="' + c3 + '" stroke-width="5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jbv2)"/>' + birds +
      hill(110, 70, 5, true) +
      mural(10, 150, 90, 70, PINK, YEL, CYAN) + mural(300, 120, 96, 60, CYAN, PINK, YEL) + mural(20, 92, 70, 44, LIME, "#7b2cbf", YEL) +
      /* escalator band */
      '<path d="M110 230L330 120l14 10L124 240z" fill="#4a4f56"/>' +
      steps +
      '<path d="M104 222L326 110M118 238L340 126" stroke="#9aa3ab" stroke-width="3"/>' +
      /* orange roof canopy over the escalator */
      '<path d="M100 206L324 94l20 4L120 210z" fill="#ff7f11" opacity=".95"/><path d="M100 206L324 94" stroke="#c45a00" stroke-width="2"/>' +
      '<g fill="#8a939c"><rect x="130" y="196" width="3" height="28"/><rect x="200" y="160" width="3" height="28"/><rect x="270" y="126" width="3" height="28"/></g>' +
      tag("COMUNA 13", 220, 236, 22, YEL, -4),
      sky("jbv2", "#8fd3ff", "#fff3e0") + '<clipPath id="jbvclip"><path d="M110 230L330 120l14 10L124 240z"/></clipPath>');
  }

  /* 3. Metrocable: gondolas gliding up over the brick hillsides */
  function jbvcable() {
    const gon = (cls, c) => '<g class="jbvGon ' + cls + '"><path d="M30 120v10" stroke="#333" stroke-width="2"/><rect x="18" y="130" width="24" height="22" rx="4" fill="' + c + '" stroke="#333" stroke-width="1.2"/><rect x="21" y="134" width="18" height="9" rx="2" fill="#bfe3ff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jbv3)"/>' + birds +
      '<path d="M0 120q120 -60 260 -50t140 -10V260H0z" fill="#4e7d4a"/>' +
      hill(200, 110, 9, false) +
      '<path d="M0 160L400 60M0 166L400 66" stroke="#2a2a2a" stroke-width="1.6"/>' +
      '<g fill="#8a939c"><rect x="96" y="130" width="6" height="110"/><path d="M86 132h26l-4 -8h-18z"/><rect x="296" y="80" width="6" height="140"/><path d="M286 82h26l-4 -8h-18z"/></g>' +
      gon("", "#f2f4f6") + gon("jbvGn2", "#f2f4f6") + gon("jbvGn3", "#f2f4f6") +
      '<rect x="12" y="12" width="150" height="30" rx="5" fill="#111" opacity=".75"/><text x="87" y="32" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">METROCABLE</text>',
      sky("jbv3", "#9ad8ff", "#eaf7ff"));
  }

  /* 4. Alumbrados: strings of colored lights over the Medellín River at night */
  function jbvluces() {
    const cols = [YEL, PINK, CYAN, LIME, "#ff7f11", "#b46cff"];
    let strings = "";
    for (let r = 0; r < 4; r++) {
      const y = 30 + r * 26;
      strings += '<path d="M0 ' + y + 'Q100 ' + (y + 30) + ' 200 ' + y + 'T400 ' + y + '" stroke="#333" stroke-width="1" fill="none"/>';
      for (let i = 0; i <= 20; i++) {
        const x = i * 20, t = (x % 200) / 200, yy = y + 30 * 2 * t * (1 - t) * 1.0;
        strings += '<circle cx="' + x + '" cy="' + yy.toFixed(1) + '" r="4" fill="' + cols[(i + r) % 6] + '" class="jbvBlink' + (i % 3 ? ' jbvBk' + (i % 3 + 1) : '') + '"/>';
      }
    }
    let water = '<g class="jbvFlow">';
    for (let y = 196; y < 250; y += 9) for (let x = -20; x < 440; x += 40) water += '<path d="M' + (x + (y % 18)) + ' ' + y + 'q10 -4 20 0" stroke="#ffe08a" stroke-width="1.5" fill="none" opacity=".4"/>';
    water += '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jbv4)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 83) % 400) + '" cy="' + (8 + (i * 29) % 40) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      '<path d="M0 150q100 -30 200 -16t200 -20V190H0z" fill="#1f1a33"/>' +
      Array.from({ length: 30 }, (_, i) => '<rect x="' + ((i * 41) % 400) + '" y="' + (150 + (i * 7) % 30) + '" width="3" height="3" fill="#ffd98a" opacity=".7"/>').join("") +
      strings +
      '<g class="jbvHue"><path d="M150 186l14 -40l14 40z"/><path d="M230 186l10 -28l10 28z"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#14223a"/>' + water +
      '<path d="M0 186h400" stroke="#6a7a90" stroke-width="3"/>',
      sky("jbv4", "#0a0a20", "#2a1a4a"));
  }

  /* 5. Carrera 68 and Calle 98, Castilla: green signs, BALVIN tagged, Coltejer far behind */
  function jbvcorner() {
    const sign = (x, y, w, t, s) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + F + ' font-size="' + (s || 12) + '" fill="#fff">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#jbv5)"/>' + birds +
      '<path d="M0 110q140 -50 260 -30t140 -10V150H0z" fill="#5f8a5a"/>' +
      coltejer(170, 146, 0.75) +
      '<g fill="#e9dcc8"><rect x="0" y="100" width="54" height="46"/><rect x="226" y="108" width="60" height="38"/></g>' +
      '<g fill="' + BRICK + '"><rect x="60" y="112" width="44" height="34"/><rect x="290" y="96" width="50" height="50"/></g>' +
      '<g class="jbvCar"><rect x="0" y="136" width="22" height="9" rx="3" fill="' + YEL + '"/></g><g class="jbvCar jbvCr2"><rect x="0" y="137" width="22" height="9" rx="3" fill="' + CYAN + '"/></g>' +
      '<rect x="0" y="146" width="400" height="76" fill="#efe6d6"/>' +
      '<path d="M0 162h400M0 178h400M0 194h400M0 210h400" stroke="#dacdb4" stroke-width="1"/>' +
      tag("EL NEGOCIO", 24, 172, 16, CYAN, -3) +
      tag("BALVIN", 50, 214, 46, YEL, -5, "jbvHue") +
      tag("LEGGO", 236, 206, 20, PINK, -2) +
      '<rect x="0" y="222" width="400" height="38" fill="#3a3a40"/><rect x="0" y="220" width="400" height="4" fill="#b8b8be"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<rect x="352" y="72" width="5" height="150" fill="#4a4a4a"/>' +
      sign(296, 74, 98, "CARRERA 68") +
      sign(296, 100, 98, "") +
      /* CALLE + hand-drawn 9 with a straight stem + 8 */
      '<text x="352" y="115.5" text-anchor="end" ' + F + ' font-size="12" fill="#fff">CALLE</text>' +
      '<circle cx="360" cy="108.6" r="3.3" fill="none" stroke="#fff" stroke-width="2"/><path d="M363.3 108.6V116.4" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' +
      '<text x="371" y="115.5" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">8</text>' +
      '<text x="345" y="136" text-anchor="middle" ' + F + ' font-size="8" fill="#1d2a44">CASTILLA</text>',
      sky("jbv5", "#86cdfc", "#eef7ff"));
  }

  window.SCENES = { jbvmetro, jbvescaleras, jbvcable, jbvluces, jbvcorner };
})();
