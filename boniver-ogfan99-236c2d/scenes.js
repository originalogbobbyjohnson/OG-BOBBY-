/* Bon Iver game (GENRES: ROCK; region MINNEAPOLIS; Eau Claire, Wisconsin - Justin Vernon was born and raised there, Memorial High).
   Rooms: the Eau Claire Transit downtown Transfer Center at S Farwell St and Main St (city bus pulling in, snow), the Phoenix Park
   footbridge over the confluence of the Chippewa and Eau Claire rivers, the snowed-in Wisconsin cabin where For Emma, Forever Ago
   was made, the Eaux Claires festival stage in the pines by the Chippewa River, and Galloway St at N Farwell St downtown with the
   Phoenix Park truss bridge behind. CSS classes prefixed "biv" (the page's anim-train moves the bus). No logos, no faces, no digit 9. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bivSnow{0%{transform:translateY(-30px)}100%{transform:translateY(290px)}}.bivSnow{animation:bivSnow 9s linear infinite}.bivSn2{animation-delay:-4.5s}' +
    '@keyframes bivFlow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.bivFlow{animation:bivFlow 3.4s linear infinite}' +
    '@keyframes bivSmoke{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(18px,-60px) scale(1.6);opacity:0}}.bivSmoke{transform-box:fill-box;transform-origin:50% 50%;animation:bivSmoke 4s ease-out infinite}.bivSm2{animation-delay:-1.3s}.bivSm3{animation-delay:-2.6s}' +
    '@keyframes bivGlow{0%,100%{opacity:.55}50%{opacity:1}}.bivGlow{animation:bivGlow 2.2s ease-in-out infinite}.bivGl2{animation-delay:-1.1s}' +
    '@keyframes bivBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bivBob{animation:bivBob 1.1s ease-in-out infinite}.bivBb2{animation-delay:-.55s}' +
    '@keyframes bivBeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.bivBeam{transform-box:fill-box;transform-origin:50% 0%;animation:bivBeam 3.2s ease-in-out infinite}.bivBm2{animation-delay:-1.6s}' +
    '@keyframes bivGoose{0%{transform:translate(-60px,0)}100%{transform:translate(460px,-30px)}}.bivGoose{animation:bivGoose 14s linear infinite}' +
    '@keyframes bivSpray{0%{opacity:.9;transform:translate(0,0)}100%{opacity:0;transform:translate(8px,-18px)}}.bivSpray{animation:bivSpray 1.3s ease-out infinite}.bivSp2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || '') + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const AMB = '#f2c14e', ICE = '#7fb3d5', RUST = '#c45a3b';
  /* falling snow: two layers offset in time */
  const snow = (n, seed) => { let a = '', b = ''; for (let i = 0; i < n; i++) { const x = (i * 53 + seed * 17) % 400, y = (i * 37 + seed * 11) % 260; const d = '<circle cx="' + x + '" cy="' + (y - 260) + '" r="' + (1.2 + (i % 3) * .6) + '" fill="#fff" opacity=".85"/>'; if (i % 2) a += d; else b += d; } return '<g class="bivSnow">' + a + '</g><g class="bivSnow bivSn2">' + b + '</g>'; };
  const pine = (x, y, h, c) => '<path d="M' + x + ' ' + (y - h) + 'l' + (h * .28) + ' ' + (h * .4) + 'h-' + (h * .12) + 'l' + (h * .2) + ' ' + (h * .32) + 'h-' + (h * .1) + 'l' + (h * .2) + ' ' + (h * .28) + 'h-' + (h * .96) + 'l' + (h * .2) + ' -' + (h * .28) + 'h-' + (h * .1) + 'l' + (h * .2) + ' -' + (h * .32) + 'h-' + (h * .12) + 'z" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + (h * .12) + '" fill="#3a2a1c"/>';
  /* Phoenix Park footbridge: an old steel Pratt truss, painted dark green-grey, on stone piers */
  const truss = (x, y, w, h, col) => { let s = '<rect x="' + x + '" y="' + (y + h - 4) + '" width="' + w + '" height="6" fill="' + col + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="' + col + '"/>'; const n = 8, st = w / n; for (let i = 0; i <= n; i++) s += '<rect x="' + (x + i * st - 1.5) + '" y="' + y + '" width="3" height="' + h + '" fill="' + col + '"/>'; for (let i = 0; i < n; i++) { const x1 = x + i * st, x2 = x1 + st; s += i < n / 2 ? '<path d="M' + x1 + ' ' + y + 'L' + x2 + ' ' + (y + h) + '" stroke="' + col + '" stroke-width="2.4"/>' : '<path d="M' + x2 + ' ' + y + 'L' + x1 + ' ' + (y + h) + '" stroke="' + col + '" stroke-width="2.4"/>'; } return s; };

  /* 1. The downtown Transfer Center: the city bus pulling in under the shelter canopy, snow coming down */
  function bivstation() {
    const bus = '<g class="anim-train"><g transform="translate(70 124)">' +
      '<rect x="0" y="0" width="240" height="70" rx="8" fill="#f4f4f0" stroke="#8a8a86" stroke-width="2"/>' +
      '<rect x="0" y="46" width="240" height="8" fill="#1f5fa8"/><rect x="0" y="54" width="240" height="4" fill="#3d9a5a"/>' +
      [14, 58, 102, 146, 190].map(x => '<rect x="' + x + '" y="12" width="38" height="24" rx="2" fill="#2a3a48"/>').join('') +
      '<rect x="222" y="8" width="16" height="36" rx="2" fill="#2a3a48"/><rect x="170" y="1" width="66" height="10" rx="2" fill="#111"/><text x="203" y="9" text-anchor="middle" ' + F + ' font-size="7" fill="#ffb02e">DOWNTOWN</text>' +
      '<rect x="230" y="50" width="10" height="5" fill="#fff6c0"/><rect x="2" y="50" width="6" height="5" fill="#d33"/>' +
      '<circle cx="46" cy="70" r="11" fill="#222"/><circle cx="46" cy="70" r="4" fill="#888"/><circle cx="196" cy="70" r="11" fill="#222"/><circle cx="196" cy="70" r="4" fill="#888"/>' +
      '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bivS1)"/>' +
      /* downtown behind: brick blocks and the river glow */
      '<g fill="#6a5a52"><rect x="0" y="70" width="70" height="110"/><rect x="74" y="50" width="56" height="130"/><rect x="300" y="60" width="100" height="120"/></g>' +
      '<g fill="#d9c08a" opacity=".7">' + [[10, 84], [30, 84], [50, 84], [84, 66], [104, 66], [84, 90], [104, 90], [312, 76], [336, 76], [360, 76], [312, 100], [360, 100]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="10" height="12"/>').join('') + '</g>' +
      '<rect x="136" y="88" width="160" height="92" fill="#8a9aa6"/><g stroke="#c9d6de" stroke-width="1" opacity=".7">' + [100, 116, 132, 148, 164].map(y => '<path d="M136 ' + y + 'h160"/>').join('') + '</g>' +
      /* the shelter canopy */
      '<path d="M40 104h320l-12 -14H52z" fill="#2c3e50"/><rect x="40" y="104" width="320" height="6" fill="#1a2632"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="110" width="6" height="86" fill="#1a2632"/>').join('') +
      '<rect x="0" y="194" width="400" height="12" fill="#3a3a3e"/>' + bus +
      '<rect x="0" y="206" width="400" height="54" fill="#d8dde2"/><rect x="0" y="206" width="400" height="4" fill="' + AMB + '"/>' +
      /* black stop sign with the route bullets */
      '<rect x="88" y="214" width="224" height="38" rx="3" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="231" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">S Farwell St · Transfer Center</text>' +
      '<text x="200" y="246" text-anchor="middle" ' + F + ' font-size="9" fill="#c9d6de">EAU CLAIRE TRANSIT</text>' +
      [['1', 22], ['2', 46], ['4', 354], ['7', 378]].map(b => '<circle cx="' + b[1] + '" cy="232" r="10" fill="#1f5fa8"/><text x="' + b[1] + '" y="236.5" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">' + b[0] + '</text>').join('') +
      snow(36, 1),
      sky('bivS1', '#4a5a6e', '#a9b6c2'));
  }

  /* 2. Phoenix Park: the old truss footbridge over the confluence, the rivers rolling, geese going over */
  function bivphoenix() {
    let ripples = '';
    for (let i = 0; i < 12; i++) ripples += '<path d="M' + (i * 40) + ' 0q10 -4 20 0t20 0" stroke="#cfe2ee" stroke-width="1.6" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bivS2)"/>' +
      '<circle cx="320" cy="56" r="20" fill="#ffe7b0" opacity=".85"/>' +
      '<path d="M0 120q60 -18 120 -6t130 -10t150 8v40H0z" fill="#3d5a3a"/>' +
      pine(30, 128, 46, '#2a4a30') + pine(70, 124, 38, '#25412a') + pine(352, 126, 44, '#2a4a30') + pine(386, 130, 36, '#25412a') +
      '<rect x="0" y="150" width="400" height="110" fill="#4a7896"/>' +
      '<g class="bivFlow"><g transform="translate(0 176)">' + ripples + '</g><g transform="translate(20 206)">' + ripples + '</g><g transform="translate(0 236)">' + ripples + '</g></g>' +
      /* stone piers + the green-grey truss */
      '<rect x="40" y="132" width="20" height="44" fill="#9a9080"/><rect x="190" y="132" width="20" height="44" fill="#9a9080"/><rect x="340" y="132" width="20" height="44" fill="#9a9080"/>' +
      truss(40, 96, 160, 38, '#4f6458') + truss(200, 96, 160, 38, '#4f6458') +
      '<rect x="30" y="130" width="340" height="5" fill="#c9b99a"/>' +
      /* two walkers on the deck */
      '<g fill="#1a1a1a"><circle cx="150" cy="116" r="3"/><rect x="148" y="119" width="4" height="11"/><circle cx="160" cy="117" r="3"/><rect x="158" y="120" width="4" height="10"/></g>' +
      '<g class="bivGoose"><path d="M40 50q6 -5 12 0q6 -5 12 0M66 60q5 -4 10 0q5 -4 10 0M20 62q5 -4 10 0q5 -4 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<text x="380" y="252" text-anchor="end" ' + F + ' font-size="12" fill="#fff" opacity=".85">PHOENIX PARK</text>',
      sky('bivS2', '#f0b58a', '#dfe7ee'));
  }

  /* 3. The cabin in the snow where For Emma, Forever Ago was made: a lit window, woodsmoke, the pines, snow falling */
  function bivcabin() {
    return svg(
      '<rect width="400" height="260" fill="url(#bivS3)"/>' +
      '<g fill="#fff" opacity=".8">' + [[30, 30], [80, 18], [140, 40], [220, 22], [300, 34], [360, 16], [260, 60], [110, 66]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.3"/>').join('') + '</g>' +
      '<path d="M0 150q100 -30 200 -10t200 -6v126H0z" fill="#1c2b38"/>' +
      pine(20, 170, 90, '#13241a') + pine(64, 166, 70, '#16291e') + pine(330, 168, 86, '#13241a') + pine(376, 172, 74, '#16291e') + pine(296, 160, 56, '#1a2e22') +
      '<path d="M0 200q120 -16 220 -4t180 0v64H0z" fill="#e9eef4"/>' +
      /* log cabin */
      '<rect x="128" y="132" width="150" height="70" fill="#6b4426"/>' +
      '<g stroke="#4a2c16" stroke-width="2">' + [140, 148, 156, 164, 172, 180, 188, 196].map(y => '<path d="M128 ' + y + 'h150"/>').join('') + '</g>' +
      '<path d="M116 134l87 -48l87 48z" fill="#3a2a20"/><path d="M116 134l87 -48l87 48" stroke="#f4f7fa" stroke-width="6" fill="none"/>' +
      '<rect x="236" y="88" width="14" height="30" fill="#7a6a5a"/>' +
      '<g fill="#cfd6dc"><circle class="bivSmoke" cx="243" cy="84" r="7"/><circle class="bivSmoke bivSm2" cx="243" cy="84" r="7"/><circle class="bivSmoke bivSm3" cx="243" cy="84" r="7"/></g>' +
      '<rect x="146" y="152" width="34" height="26" fill="#ffd27a" class="bivGlow"/><path d="M163 152v26M146 165h34" stroke="#4a2c16" stroke-width="2.5"/>' +
      '<rect x="214" y="150" width="30" height="52" fill="#3a2414"/><circle cx="238" cy="178" r="2" fill="' + AMB + '"/>' +
      '<path d="M146 178l-8 30h50l-8 -30z" fill="#ffd27a" opacity=".18"/>' +
      /* woodpile + footprints */
      '<g fill="#8a5a34"><circle cx="292" cy="196" r="5"/><circle cx="302" cy="196" r="5"/><circle cx="297" cy="188" r="5"/></g>' +
      '<g fill="#c9d3dc">' + [[230, 214], [222, 224], [234, 234], [224, 246]].map(p => '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="4" ry="2"/>').join('') + '</g>' +
      snow(40, 3),
      sky('bivS3', '#0c1a2a', '#3a5068'));
  }

  /* 4. The Eaux Claires festival stage in the pines by the Chippewa River: lights sweeping, the crowd bouncing */
  function bivfest() {
    let crowd = '';
    for (let i = 0; i < 22; i++) { const x = 8 + i * 18; crowd += '<g class="bivBob' + (i % 2 ? ' bivBb2' : '') + '"><circle cx="' + x + '" cy="' + (222 - (i % 3) * 3) + '" r="7" fill="#0b0b10"/><rect x="' + (x - 8) + '" y="' + (228 - (i % 3) * 3) + '" width="16" height="40" rx="5" fill="#0b0b10"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#bivS4)"/>' +
      pine(16, 170, 110, '#0f1d14') + pine(56, 176, 90, '#122218') + pine(346, 172, 104, '#0f1d14') + pine(388, 178, 92, '#122218') +
      '<rect x="0" y="168" width="400" height="20" fill="#3a5a70" opacity=".8"/>' +
      /* the stage: timber frame and a big roof */
      '<path d="M86 70h228l18 22H68z" fill="#2a2228"/><rect x="86" y="92" width="228" height="86" fill="#141018"/>' +
      '<rect x="86" y="92" width="10" height="86" fill="#5a4030"/><rect x="304" y="92" width="10" height="86" fill="#5a4030"/>' +
      '<g class="bivBeam"><path d="M140 94l-34 90h40z" fill="' + AMB + '" opacity=".35"/></g>' +
      '<g class="bivBeam bivBm2"><path d="M260 94l-6 90h40z" fill="' + ICE + '" opacity=".35"/></g>' +
      '<g class="bivBeam"><path d="M200 94l-20 90h40z" fill="' + RUST + '" opacity=".3"/></g>' +
      [120, 160, 200, 240, 280].map((x, i) => '<circle cx="' + x + '" cy="98" r="4" fill="#fff6d0" class="bivGlow' + (i % 2 ? ' bivGl2' : '') + '"/>').join('') +
      '<rect x="96" y="160" width="208" height="18" fill="#2a2228"/>' +
      '<g fill="#000"><circle cx="200" cy="134" r="6"/><rect x="194" y="140" width="12" height="20"/><path d="M188 146h-10l-4 4" stroke="#000" stroke-width="3"/></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#1d2a1f"/>' + crowd,
      sky('bivS4', '#1a1240', '#d0704a'));
  }

  /* 5. Galloway St and N Farwell St downtown: green street signs, the name tagged on the brick, the Phoenix Park truss behind */
  function bivcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bivS5)"/>' +
      '<rect x="0" y="118" width="400" height="20" fill="#4a7896"/>' +
      truss(20, 86, 180, 32, '#4f6458') + '<rect x="14" y="116" width="196" height="4" fill="#c9b99a"/>' +
      pine(240, 120, 40, '#2a4a30') + pine(270, 122, 34, '#25412a') +
      '<rect x="0" y="134" width="236" height="96" fill="#a2563a"/>' +
      '<g stroke="#7a3e26" stroke-width="1">' + [146, 158, 170, 182, 194, 206, 218].map(y => '<path d="M0 ' + y + 'h236"/>').join('') + '</g>' +
      tag('BON IVER', 14, 186, 30, AMB, -5) + tag('715', 150, 216, 20, '#f4f4f4', -4) +
      '<g class="bivSpray"><circle cx="196" cy="168" r="2" fill="' + AMB + '"/></g><g class="bivSpray bivSp2"><circle cx="202" cy="162" r="2" fill="' + AMB + '"/></g>' +
      '<rect x="236" y="150" width="164" height="80" fill="#e3ddd0"/><g fill="#3a3a3a"><rect x="252" y="166" width="30" height="34"/><rect x="298" y="166" width="30" height="34"/><rect x="344" y="166" width="30" height="34"/></g>' +
      '<path d="M236 150h164v-8H236z" fill="#5a5048"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#55524c"/><path d="M0 232h400" stroke="#888" stroke-width="2"/>' +
      '<path d="M0 252q80 -6 160 0t160 0t80 0v8H0z" fill="#f2f5f8"/>' +
      '<rect x="226" y="58" width="5" height="172" fill="#2f3a33"/>' +
      '<rect x="158" y="60" width="134" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="225" y="74" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">GALLOWAY ST</text>' +
      '<rect x="176" y="84" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="228" y="98" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">N FARWELL ST</text>' +
      snow(24, 5),
      sky('bivS5', '#8a9cb0', '#dfe6ec'));
  }

  window.SCENES = { bivstation, bivphoenix, bivcabin, bivfest, bivcorner };
})();
