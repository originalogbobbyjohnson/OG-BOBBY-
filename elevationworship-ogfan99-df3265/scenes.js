/* elevationworship scenes (Regions: The Carolinas; Elevation Church started Feb 5, 2006 at Providence High School in Charlotte with 121 people, the band formed in 2007, the main Ballantyne building opened in 2016). CSS classes prefixed elw- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes elwnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.elw-note{animation:elwnote 3.2s ease-out infinite}.elw-n2{animation-delay:-1.1s}.elw-n3{animation-delay:-2.2s}' +
    '@keyframes elwsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.elw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:elwsway 2.2s ease-in-out infinite}.elw-s2{animation-delay:-1.1s}' +
    '@keyframes elwbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.elw-beam{transform-box:fill-box;transform-origin:50% 0%;animation:elwbeam 4s ease-in-out infinite}.elw-bm2{animation-delay:-2s}' +
    '@keyframes elwblink{0%,100%{opacity:.35}50%{opacity:1}}.elw-blink{animation:elwblink 1.4s ease-in-out infinite}.elw-b2{animation-delay:-.5s}.elw-b3{animation-delay:-1s}' +
    '@keyframes elwglow{0%,100%{opacity:.6}50%{opacity:1}}.elw-glow{animation:elwglow 2s ease-in-out infinite}' +
    '@keyframes elwgrow{0%{transform:scale(0)}35%,100%{transform:scale(1)}}.elw-grow{transform-box:fill-box;transform-origin:50% 100%;animation:elwgrow 4s ease-out infinite}.elw-g2{animation-delay:-1.3s}.elw-g3{animation-delay:-2.6s}' +
    '@keyframes elwcar{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.elw-car{animation:elwcar 7s linear infinite}' +
    '@keyframes elwsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.elw-sp{animation:elwsp 1.4s ease-out infinite}.elw-sp2{animation-delay:.45s}' +
    '@keyframes elwbfly{0%{transform:translate(-30px,40px)}50%{transform:translate(200px,-10px)}100%{transform:translate(440px,30px)}}.elw-bfly{animation:elwbfly 10s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LYNX = '#0067b1', ORANGE = '#f47b20', GREEN = '#7fc8a9', GOLD = '#f2c14e', CREAM = '#fbf3e4';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const note = (x, y, cls, c) => '<g class="elw-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const flower = (x, y, c, cls) => '<g class="elw-grow ' + (cls || '') + '"><path d="M' + x + ' ' + y + 'v-26" stroke="#3f8a4f" stroke-width="2.5"/><path d="M' + x + ' ' + (y - 12) + 'q-10 -2 -12 -10q10 0 12 8z" fill="#4fa05f"/>' +
    [[1, 0], [-1, 0], [0, 1], [0, -1], [.7, .7], [-.7, .7], [.7, -.7], [-.7, -.7]].map(([dx, dy]) => '<circle cx="' + (x + 6 * dx).toFixed(1) + '" cy="' + (y - 30 + 6 * dy).toFixed(1) + '" r="4" fill="' + c + '"/>').join('') +
    '<circle cx="' + x + '" cy="' + (y - 30) + '" r="3.5" fill="' + GOLD + '"/></g>';

  /* 1. LYNX Blue Line pulling into I-485/South Blvd, the south end of the line */
  function elwstop() {
    const car = (x) => '<rect x="' + x + '" y="126" width="150" height="62" rx="10" fill="#f2f4f6"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 34) + '" y="138" width="26" height="20" rx="3" fill="#24323f"/>').join('') +
      '<rect x="' + x + '" y="164" width="150" height="8" fill="' + LYNX + '"/><rect x="' + x + '" y="184" width="150" height="6" fill="#4a5058"/>' +
      '<path d="M' + (x + 60) + ' 126l14 -18M' + (x + 90) + ' 126l-14 -18" stroke="#333" stroke-width="2"/>';
    return svg('<rect width="400" height="260" fill="url(#elws1)"/>' +
      '<path d="M0 104h400" stroke="#2c2c2c" stroke-width="1.5"/>' +
      /* parking deck and pines behind */
      '<rect x="10" y="80" width="190" height="60" fill="#b8b2a6"/>' + [0, 1, 2].map(r => '<rect x="10" y="' + (92 + r * 16) + '" width="190" height="4" fill="#8e887c"/>').join('') +
      [230, 262, 300, 340, 376].map((x, i) => '<path d="M' + x + ' 140l14 -' + (44 + (i % 2) * 12) + 'l14 ' + (44 + (i % 2) * 12) + 'z" fill="#2f5a3a"/>').join('') +
      '<g class="anim-train">' + car(-16) + car(136) + '<circle cx="282" cy="176" r="3" fill="#fff3b0"/></g>' +
      /* platform with canopy */
      '<rect x="0" y="190" width="400" height="12" fill="#a9a59c"/><rect x="0" y="192" width="400" height="4" fill="#f2d16b"/><rect x="0" y="202" width="400" height="58" fill="#6f6b63"/>' +
      [40, 180, 320].map(x => '<rect x="' + x + '" y="206" width="5" height="54" fill="#555"/>').join('') +
      /* black station sign */
      '<rect x="300" y="64" width="5" height="62" fill="#333"/><rect x="200" y="22" width="192" height="44" rx="3" fill="#111"/>' +
      '<rect x="208" y="30" width="44" height="28" rx="4" fill="' + LYNX + '"/><text x="230" y="49" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">BLUE</text>' +
      '<text x="320" y="43" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">I-485/SOUTH BLVD</text><text x="320" y="58" text-anchor="middle" ' + font + ' font-size="8" fill="#f2c27a">END OF THE LINE · CHARLOTTE</text>',
      sky('elws1', '#7fb6e0', '#fde3b5'));
  }

  /* 2. Providence High School, Feb 5, 2006: folding chairs in the auditorium, the first Sunday */
  function elwschool() {
    let chairs = '';
    for (let r = 0; r < 4; r++) for (let i = 0; i < 11; i++) {
      const x = 22 + i * 34 + (r % 2) * 8, y = 172 + r * 20;
      chairs += '<rect x="' + x + '" y="' + (y - 14) + '" width="18" height="10" rx="2" fill="#5a6470"/><rect x="' + x + '" y="' + (y - 4) + '" width="18" height="4" fill="#6f7a86"/><path d="M' + (x + 2) + ' ' + y + 'v8M' + (x + 16) + ' ' + y + 'v8" stroke="#3a424c" stroke-width="2"/>';
    }
    return svg('<rect width="400" height="260" fill="url(#elws2)"/>' +
      /* stage with curtain */
      '<rect x="40" y="20" width="320" height="110" fill="#5a1e24"/>' + [...Array(16)].map((_, i) => '<path d="M' + (44 + i * 20) + ' 20v110" stroke="#4a161b" stroke-width="3"/>').join('') +
      '<rect x="30" y="126" width="340" height="16" fill="#8a6a44"/><rect x="30" y="12" width="340" height="12" fill="#3a1216"/>' +
      /* the band: keys, guitar amp, drum kit, mic */
      '<rect x="70" y="102" width="56" height="8" fill="#111"/><path d="M78 110v16M118 110v16" stroke="#333" stroke-width="2"/>' +
      '<rect x="270" y="98" width="40" height="28" rx="3" fill="#222"/><circle cx="290" cy="112" r="9" fill="#444"/>' +
      '<ellipse cx="200" cy="114" rx="18" ry="8" fill="#ddd"/><rect x="182" y="114" width="36" height="12" fill="#c33"/><ellipse cx="174" cy="100" rx="10" ry="3" fill="' + GOLD + '"/><ellipse cx="228" cy="96" rx="10" ry="3" fill="' + GOLD + '"/>' +
      '<rect x="148" y="84" width="3" height="42" fill="#999"/><rect x="144" y="80" width="11" height="8" rx="4" fill="#222"/>' +
      note(110, 70, 'elw-n1', GOLD) + note(240, 64, 'elw-n2', CREAM) + note(320, 72, 'elw-n3', ORANGE) +
      /* gym floor and folding chairs */
      '<rect x="0" y="142" width="400" height="118" fill="#c99a5e"/>' + [...Array(8)].map((_, i) => '<path d="M0 ' + (150 + i * 14) + 'h400" stroke="#b5874e" stroke-width="1"/>').join('') +
      chairs +
      '<rect x="120" y="30" width="160" height="22" rx="3" fill="' + CREAM + '"/><text x="200" y="46" text-anchor="middle" ' + font + ' font-size="11" fill="#5a1e24">FIRST SUNDAY · 121</text>',
      sky('elws2', '#2a1a1e', '#4a2a2e'));
  }

  /* 3. Code Orange Revival night: orange lights, hands up */
  function elwrevival() {
    return svg('<rect width="400" height="260" fill="url(#elws3)"/>' +
      '<rect x="0" y="0" width="400" height="12" fill="#111"/>' +
      '<g opacity=".35"><path class="elw-beam" d="M70 10l-34 190h68z" fill="' + ORANGE + '"/><path class="elw-beam elw-bm2" d="M160 10l-34 190h68z" fill="' + GOLD + '"/><path class="elw-beam" d="M240 10l-34 190h68z" fill="' + ORANGE + '"/><path class="elw-beam elw-bm2" d="M330 10l-34 190h68z" fill="' + CREAM + '"/></g>' +
      [70, 160, 240, 330].map(x => '<rect x="' + (x - 8) + '" y="6" width="16" height="10" rx="2" fill="#333"/>').join('') +
      /* LED wall with an orange glow */
      '<rect x="60" y="40" width="280" height="90" rx="4" fill="#1b0f08"/><rect x="66" y="46" width="268" height="78" fill="' + ORANGE + '" opacity=".8" class="elw-glow"/>' +
      '<text x="200" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="#1b0f08" textLength="240" lengthAdjust="spacingAndGlyphs">CODE ORANGE</text>' +
      /* stage and band silhouettes */
      '<rect x="20" y="130" width="360" height="22" fill="#24180f"/>' +
      [[110, 0], [170, 1], [230, 0], [290, 1]].map(([x, s]) => '<g class="elw-sway ' + (s ? 'elw-s2' : '') + '"><circle cx="' + x + '" cy="112" r="6" fill="#0d0805"/><rect x="' + (x - 7) + '" y="118" width="14" height="14" rx="3" fill="#0d0805"/></g>').join('') +
      /* crowd with hands raised */
      '<rect x="0" y="180" width="400" height="80" fill="#0d0805"/>' +
      [...Array(16)].map((_, i) => { const x = 14 + i * 25, y = 190 + (i % 3) * 5; return '<circle cx="' + x + '" cy="' + y + '" r="9" fill="#1e140c"/><rect x="' + (x - 11) + '" y="' + (y + 7) + '" width="22" height="50" rx="6" fill="#1e140c"/>' +
        ((i % 2) ? '<g class="elw-sway ' + (i % 4 === 1 ? 'elw-s2' : '') + '"><path d="M' + (x - 8) + ' ' + (y + 6) + 'l-6 -26M' + (x + 8) + ' ' + (y + 6) + 'l6 -26" stroke="#1e140c" stroke-width="5" stroke-linecap="round"/></g>' : ''); }).join(''),
      sky('elws3', '#120a06', '#3a1a0a'));
  }

  /* 4. Graves into gardens: flowers coming up where the ground was bare, sun over the Carolina pines */
  function elwgarden() {
    const cols = [ORANGE, CREAM, GOLD, '#e85d8a', ORANGE, CREAM, '#e85d8a', GOLD];
    return svg('<rect width="400" height="260" fill="url(#elws4)"/>' +
      '<circle cx="320" cy="70" r="30" fill="#ffd27a" class="elw-glow"/>' +
      [0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => '<path d="M' + x + ' 150l20 -' + (50 + (i % 3) * 14) + 'l20 ' + (50 + (i % 3) * 14) + 'z" fill="#2f5a3a"/>').join('') +
      '<rect x="0" y="148" width="400" height="112" fill="#5b8a4a"/>' +
      /* stone path */
      '<path d="M170 260q20 -60 30 -110h20q0 50 40 110z" fill="#b8ad98"/>' +
      [[192, 236], [214, 212], [206, 186], [214, 164]].map(([x, y]) => '<ellipse cx="' + x + '" cy="' + y + '" rx="12" ry="5" fill="#d8cdb8"/>').join('') +
      /* raised beds with flowers growing */
      '<rect x="20" y="200" width="140" height="22" fill="#6b4220"/><rect x="260" y="200" width="130" height="22" fill="#6b4220"/>' +
      [30, 52, 74, 96, 118, 140].map((x, i) => flower(x, 202, cols[i], ['', 'elw-g2', 'elw-g3'][i % 3])).join('') +
      [272, 294, 316, 338, 360, 382].map((x, i) => flower(x - 4, 202, cols[(i + 2) % 8], ['elw-g3', '', 'elw-g2'][i % 3])).join('') +
      '<g class="elw-bfly"><g transform="translate(0 110)"><path d="M0 0q-8 -8 -10 0q2 6 10 0q8 -8 10 0q-2 6 -10 0z" fill="' + ORANGE + '"/></g></g>',
      sky('elws4', '#8fc4e8', '#fde9c2'));
  }

  /* 5. Johnston Rd and Ballantyne Commons Pkwy, the Ballantyne building's glass lobby lit orange behind */
  function elwcorner() {
    return svg('<rect width="400" height="260" fill="url(#elws5)"/>' +
      /* Ballantyne building: tan panels, aluminum bands, two-story glass lobby, orange accents */
      '<rect x="40" y="56" width="250" height="84" fill="#cfc6b6"/>' + [0, 1, 2].map(r => '<rect x="40" y="' + (70 + r * 22) + '" width="250" height="3" fill="#9ea3a8"/>').join('') +
      '<rect x="120" y="44" width="110" height="96" fill="#2c3e52"/>' + [...Array(7)].map((_, i) => '<path d="M' + (124 + i * 16) + ' 44v96" stroke="#7d8a96" stroke-width="2"/>').join('') +
      '<path d="M120 92h110" stroke="#7d8a96" stroke-width="2"/><rect x="124" y="96" width="102" height="44" fill="#ffb26b" opacity=".35"/>' + [130, 160, 190].map((x, i) => '<rect x="' + x + '" y="104" width="20" height="30" fill="#ffd9a8" opacity=".5" class="elw-blink elw-b' + (i + 1) + '"/>').join('') + '' +
      '<rect x="110" y="38" width="130" height="8" fill="' + ORANGE + '"/><rect x="236" y="70" width="6" height="70" fill="' + ORANGE + '"/><rect x="108" y="70" width="6" height="70" fill="' + ORANGE + '"/>' +
      '<rect x="300" y="100" width="40" height="40" fill="#2f5a3a" rx="18"/>' +
      /* wall with the tags */
      '<rect x="0" y="140" width="400" height="80" fill="#6b5a4a"/>' + [0, 1, 2, 3, 4].map(r => '<path d="M0 ' + (150 + r * 14) + 'h400" stroke="#5a4a3c" stroke-width="1"/>').join('') +
      tag('ELEVATION', 14, 180, 34, ORANGE, -4) + tag('WORSHIP', 150, 208, 28, CREAM, -4) + tag('DO IT AGAIN', 268, 168, 15, GREEN, 6) +
      note(60, 140, 'elw-n1', GOLD) + note(250, 134, 'elw-n2', ORANGE) +
      '<g class="elw-sp"><circle cx="300" cy="198" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="elw-sp elw-sp2"><circle cx="306" cy="204" r="2.4" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/><path d="M0 240h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="elw-car"><rect x="0" y="226" width="34" height="12" rx="3" fill="#2a6fd6"/><circle cx="8" cy="240" r="3" fill="#111"/><circle cx="26" cy="240" r="3" fill="#111"/></g>' +
      '<rect x="372" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(262, 44, 136, 'JOHNSTON RD') + sign(262, 70, 136, 'BALLANTYNE COMMONS'),
      sky('elws5', '#2a3a6a', '#f4a26a'));
  }

  window.SCENES = { elwstop: elwstop, elwschool: elwschool, elwrevival: elwrevival, elwgarden: elwgarden, elwcorner: elwcorner };
})();
