/* chandlermoore scenes (Regions: The Carolinas; born and raised in Charleston SC, grew up in his father Bishop Brian Moore's church, first music director job at a small church at home). CSS classes prefixed chm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes chmnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.chm-note{animation:chmnote 3.2s ease-out infinite}.chm-n2{animation-delay:-1.1s}.chm-n3{animation-delay:-2.2s}' +
    '@keyframes chmsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.chm-sway{transform-box:fill-box;transform-origin:50% 100%;animation:chmsway 2.2s ease-in-out infinite}.chm-s2{animation-delay:-1.1s}' +
    '@keyframes chmblink{0%,100%{opacity:.35}50%{opacity:1}}.chm-blink{animation:chmblink 1.4s ease-in-out infinite}.chm-b2{animation-delay:-.5s}.chm-b3{animation-delay:-1s}' +
    '@keyframes chmglow{0%,100%{opacity:.55}50%{opacity:1}}.chm-glow{animation:chmglow 2s ease-in-out infinite}' +
    '@keyframes chmcart{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.chm-cart{animation:chmcart 14s linear infinite}' +
    '@keyframes chmcar{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.chm-car{animation:chmcar 7s linear infinite}' +
    '@keyframes chmtrot{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.chm-trot{animation:chmtrot .5s ease-in-out infinite}' +
    '@keyframes chmjet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.18)}}.chm-jet{transform-box:fill-box;transform-origin:50% 100%;animation:chmjet 1.1s ease-in-out infinite}.chm-j2{animation-delay:-.55s}' +
    '@keyframes chmdrop{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(16px);opacity:0}}.chm-drop{animation:chmdrop 1.2s ease-in infinite}.chm-d2{animation-delay:-.4s}.chm-d3{animation-delay:-.8s}' +
    '@keyframes chmbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.chm-bell{transform-box:fill-box;transform-origin:50% 0%;animation:chmbell 1.6s ease-in-out infinite}' +
    '@keyframes chmsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.chm-sp{animation:chmsp 1.4s ease-out infinite}.chm-sp2{animation-delay:.45s}' +
    '@keyframes chmgull{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.chm-gull{animation:chmgull 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = '#ffd27a', PINK = '#ff8fa3', MINT = '#7fd6c2', CREAM = '#fbf3e4', TEAL = '#0f8f8a', AMBER = '#e8a33a';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const note = (x, y, cls, c) => '<g class="chm-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const pill = (x, y, txt, c) => '<rect x="' + x + '" y="' + y + '" width="40" height="18" rx="9" fill="' + c + '"/><text x="' + (x + 20) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-3 0q-2 -40 2 -70h4q-2 30 2 70z" fill="#6b5a3e"/>' +
    [[-34, -60], [-26, -84], [0, -92], [26, -84], [34, -60], [-14, -50], [14, -50]].map(([dx, dy]) => '<path d="M0 -70Q' + (dx / 2) + ' ' + (-80 + dy / 6) + ' ' + dx + ' ' + dy + 'Q' + (dx / 2.4) + ' ' + (-74 + dy / 8) + ' 0 -68z" fill="#2f6b3a"/>').join('') + '</g>';
  const singer = (x, y, robe, skin, cls) => '<g class="chm-sway ' + (cls || '') + '"><path d="M' + (x - 11) + ' ' + y + 'l4 -30q7 -6 14 0l4 30z" fill="' + robe + '"/><path d="M' + (x - 5) + ' ' + (y - 30) + 'l5 8l5 -8" fill="' + GOLD + '"/>' +
    '<circle cx="' + x + '" cy="' + (y - 37) + '" r="6.5" fill="' + skin + '"/></g>';

  /* 1. A CARTA DASH bus pulling into the Visitor Center bus shed on Meeting St, Charleston */
  function chmstop() {
    const bus = '<g class="anim-train"><rect x="-10" y="118" width="250" height="74" rx="10" fill="#f4f1e8"/><rect x="-10" y="118" width="250" height="14" rx="6" fill="' + TEAL + '"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (2 + i * 34) + '" y="138" width="28" height="24" rx="3" fill="#24323c"/>').join('') +
      '<rect x="212" y="136" width="22" height="44" rx="2" fill="#24323c"/><rect x="-10" y="168" width="250" height="5" fill="' + TEAL + '"/><rect x="-10" y="174" width="250" height="3" fill="' + AMBER + '"/>' +
      '<rect x="200" y="122" width="36" height="9" rx="2" fill="#111"/><text x="218" y="129.5" text-anchor="middle" ' + font + ' font-size="7" fill="' + AMBER + '">211 DASH</text>' +
      '<circle cx="36" cy="194" r="12" fill="#1a1a1a"/><circle cx="36" cy="194" r="5" fill="#888"/><circle cx="186" cy="194" r="12" fill="#1a1a1a"/><circle cx="186" cy="194" r="5" fill="#888"/>' +
      '<circle cx="238" cy="182" r="3.4" fill="#fff3b0"/></g>';
    return svg('<rect width="400" height="260" fill="url(#chms1)"/>' +
      /* old brick train-shed arches behind (the Visitor Center is a restored railroad shed) */
      '<rect x="0" y="40" width="400" height="120" fill="#8a4a36"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (12 + i * 80) + ' 160v-70a28 28 0 0 1 56 0v70z" fill="#3a2a26"/><path d="M' + (12 + i * 80) + ' 90a28 28 0 0 1 56 0" stroke="#d9c7a6" stroke-width="3" fill="none"/>').join('') +
      '<rect x="0" y="32" width="400" height="10" fill="#5a2e22"/>' +
      palm(30, 200, .9) + palm(372, 200, 1) +
      bus +
      '<rect x="0" y="206" width="400" height="54" fill="#5d5a55"/><rect x="0" y="206" width="400" height="5" fill="#cfc8b8"/>' +
      /* black stop sign with DASH route pills */
      '<rect x="300" y="72" width="5" height="134" fill="#333"/><rect x="250" y="20" width="144" height="54" rx="3" fill="#111"/>' +
      pill(258, 26, '210', TEAL) + pill(302, 26, '211', TEAL) + pill(346, 26, '213', TEAL) +
      '<text x="322" y="58" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">VISITOR CENTER</text><text x="322" y="69" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">MEETING ST · CHARLESTON</text>',
      sky('chms1', '#f2b88a', '#f7dcb4'));
  }

  /* 2. A small Charleston church on a Sunday: the young music director at the organ, the choir swaying */
  function chmchurch() {
    const skins = ['#8a5a3a', '#5a3a26', '#c08a62', '#6b4630', '#a06a48'];
    let choir = '';
    for (let i = 0; i < 7; i++) choir += singer(150 + i * 32, 140, ['#7a1f2b', '#8c2a36'][i % 2], skins[i % 5], (i % 2) ? 'chm-s2' : '');
    return svg('<rect width="400" height="260" fill="url(#chms2)"/>' +
      /* white wood walls, tall arched windows with amber light */
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<path d="M0 ' + (12 + i * 12) + 'h400" stroke="#e6ddcc" stroke-width="1"/>').join('') +
      [30, 336].map(x => '<path d="M' + x + ' 140v-80a17 17 0 0 1 34 0v80z" fill="#f2c36b" class="chm-glow"/><path d="M' + (x + 17) + ' 44v96M' + x + ' 92h34" stroke="#fff" stroke-width="2"/>').join('') +
      /* cross over the choir loft */
      '<rect x="252" y="18" width="8" height="52" fill="' + AMBER + '"/><rect x="238" y="30" width="36" height="8" fill="' + AMBER + '"/>' +
      '<rect x="120" y="140" width="250" height="14" fill="#6b4a2e"/>' + choir +
      /* the organ console with the music director's back to us */
      '<rect x="40" y="150" width="96" height="52" rx="3" fill="#4a2e1c"/><rect x="46" y="156" width="84" height="10" fill="#1a1a1a"/>' +
      [...Array(14)].map((_, i) => '<rect x="' + (47 + i * 6) + '" y="157" width="5" height="8" fill="#f4f4f4"/>').join('') +
      [...Array(8)].map((_, i) => '<rect x="' + (50 + i * 10) + '" y="150" width="6" height="5" rx="1" fill="' + ['#e85d4a', CREAM, '#f2c14e', '#4fb3bf'][i % 4] + '"/>').join('') +
      '<path d="M76 210v-30q12 -10 24 0v30z" fill="#26324a"/><circle cx="88" cy="168" r="9" fill="#5a3a26"/>' +
      /* pews */
      [0, 1].map(r => '<rect x="0" y="' + (214 + r * 22) + '" width="400" height="10" fill="#7a5233"/><rect x="0" y="' + (224 + r * 22) + '" width="400" height="6" fill="#5a3a22"/>').join('') +
      note(60, 110, 'chm-n1', GOLD) + note(200, 80, 'chm-n2', CREAM) + note(320, 96, 'chm-n3', PINK),
      sky('chms2', '#f6efe2', '#e8dcc6'));
  }

  /* 3. Rainbow Row on East Bay St: pastel row houses, a horse carriage clopping past */
  function chmrainbow() {
    const cols = ['#f7c6d0', '#fbe3a1', '#bfe3d0', '#c9d8f2', '#f5b99a', '#e7d4f0', '#fff1c9', '#a8dccc'];
    let houses = '';
    cols.forEach((c, i) => {
      const x = i * 50, h = 110 + (i % 3) * 12, top = 190 - h;
      houses += '<rect x="' + x + '" y="' + top + '" width="50" height="' + h + '" fill="' + c + '" stroke="#b9a98f" stroke-width="1"/>' +
        '<rect x="' + x + '" y="' + (top - 8) + '" width="50" height="8" fill="#e9e1d2"/>' +
        [0, 1, 2].map(r => [0, 1].map(k => '<rect x="' + (x + 9 + k * 20) + '" y="' + (top + 12 + r * 30) + '" width="12" height="18" fill="#3b4a52"/><rect x="' + (x + 7 + k * 20) + '" y="' + (top + 12 + r * 30) + '" width="2" height="18" fill="#2f5a3a"/><rect x="' + (x + 21 + k * 20) + '" y="' + (top + 12 + r * 30) + '" width="2" height="18" fill="#2f5a3a"/>').join('')).join('') +
        '<rect x="' + (x + 19) + '" y="166" width="12" height="24" fill="#2f5a3a"/>';
    });
    const cart = '<g class="chm-cart"><g class="chm-trot"><path d="M10 206q0 -14 14 -16h22q8 -10 14 -2l-4 6l-8 2v12z" fill="#a0724a"/>' +
      '<path d="M16 206v14M24 206v14M44 206v14M52 206v14" stroke="#7a5233" stroke-width="3"/></g>' +
      '<rect x="66" y="190" width="56" height="22" rx="3" fill="#2a2a2a"/><path d="M64 190q30 -22 60 0z" fill="#f4f1e8"/><circle cx="76" cy="218" r="8" fill="none" stroke="#2a2a2a" stroke-width="2.5"/><circle cx="112" cy="218" r="8" fill="none" stroke="#2a2a2a" stroke-width="2.5"/>' +
      '<path d="M60 200h8" stroke="#2a2a2a" stroke-width="2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#chms3)"/>' +
      '<g class="chm-gull"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      houses +
      '<rect x="0" y="190" width="400" height="8" fill="#cfc8b8"/><rect x="0" y="198" width="400" height="62" fill="#7a746a"/>' +
      [...Array(20)].map((_, i) => '<rect x="' + (i * 20 + (i % 2) * 6) + '" y="' + (204 + (i % 3) * 16) + '" width="14" height="8" rx="2" fill="#6a645a"/>').join('') +
      cart +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="12" fill="' + CREAM + '" letter-spacing="3">RAINBOW ROW · EAST BAY ST</text>',
      sky('chms3', '#8fc9ea', '#d9eef7'));
  }

  /* 4. The Pineapple Fountain in Waterfront Park, the harbor and the bridge behind */
  function chmfountain() {
    return svg('<rect width="400" height="260" fill="url(#chms4)"/>' +
      /* harbor and the Ravenel Bridge far away */
      '<rect x="0" y="110" width="400" height="40" fill="#4f88a8"/>' +
      '<g stroke="#e8eef2" stroke-width="2" fill="none"><path d="M250 112l14 -50l14 50M318 112l14 -50l14 50M256 90h16M324 90h16"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M264 ' + (66 + i * 8) + 'L' + (226 + i * 4) + ' 110M264 ' + (66 + i * 8) + 'L' + (300 - i * 4) + ' 110M332 ' + (66 + i * 8) + 'L' + (302 + i * 4) + ' 110M332 ' + (66 + i * 8) + 'L' + (370 - i * 4) + ' 110"/>').join('') + '</g>' +
      '<path d="M200 110h200" stroke="#e8eef2" stroke-width="3"/>' +
      palm(30, 160, .9) + palm(78, 166, .75) + palm(352, 162, .85) +
      /* lawn and the round pool */
      '<rect x="0" y="150" width="400" height="110" fill="#5c9a4a"/>' +
      '<ellipse cx="200" cy="214" rx="150" ry="30" fill="#c9c2b2"/><ellipse cx="200" cy="212" rx="138" ry="24" fill="#6fb7d6"/>' +
      /* the pineapple fountain on its pedestal */
      '<rect x="188" y="160" width="24" height="50" fill="#9a8f7c"/><path d="M176 210h48l-6 -10h-36z" fill="#8a7f6c"/>' +
      '<path d="M170 162q30 -12 60 0l-8 6h-44z" fill="#9a8f7c"/>' +
      '<ellipse cx="200" cy="140" rx="16" ry="22" fill="#a89470"/>' +
      [0, 1, 2, 3].map(r => [0, 1, 2].map(k => '<path d="M' + (190 + k * 8) + ' ' + (126 + r * 9) + 'l4 4l4 -4" stroke="#7a6a4a" stroke-width="1" fill="none"/>').join('')).join('') +
      '<path d="M200 118l-10 -18l10 6l10 -6z M200 112l-4 -22l4 6l4 -6z" fill="#8a9a6a"/>' +
      /* water jets and drops */
      '<g class="chm-jet"><path d="M172 162q-26 10 -34 46" stroke="#e8f6ff" stroke-width="3" fill="none" opacity=".85"/></g>' +
      '<g class="chm-jet chm-j2"><path d="M228 162q26 10 34 46" stroke="#e8f6ff" stroke-width="3" fill="none" opacity=".85"/></g>' +
      [[130, 200, 1], [150, 196, 2], [252, 198, 3], [270, 202, 1], [200, 196, 2]].map(([x, y, k]) => '<circle cx="' + x + '" cy="' + y + '" r="2" fill="#fff" class="chm-drop chm-d' + k + '"/>').join('') +
      note(90, 90, 'chm-n1', GOLD) + note(320, 70, 'chm-n2', CREAM),
      sky('chms4', '#f4c08a', '#a9d4ea'));
  }

  /* 5. King St and Calhoun St by Marion Square, the Ravenel Bridge's diamond towers lit behind */
  function chmcorner() {
    return svg('<rect width="400" height="260" fill="url(#chms5)"/>' +
      /* Ravenel Bridge: two diamond towers and cable fans */
      '<g stroke="#f4f6f8" stroke-width="3" fill="none"><path d="M60 140l26 -110l26 110M68 104h36M220 140l26 -110l26 110M228 104h36"/></g>' +
      '<g stroke="#dfe6ee" stroke-width="1.2" opacity=".85">' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M86 ' + (40 + i * 9) + 'L' + (4 + i * 10) + ' 140M86 ' + (40 + i * 9) + 'L' + (168 - i * 10) + ' 140M246 ' + (40 + i * 9) + 'L' + (176 + i * 10) + ' 140M246 ' + (40 + i * 9) + 'L' + (330 - i * 10) + ' 140"/>').join('') + '</g>' +
      '<rect x="0" y="138" width="400" height="5" fill="#f4f6f8"/>' +
      [30, 120, 200, 290].map((x, i) => '<circle cx="' + x + '" cy="140" r="2" fill="#fff4c8" class="chm-blink chm-b' + (i % 3 + 1) + '"/>').join('') +
      /* stucco wall with the tags */
      '<rect x="0" y="143" width="400" height="77" fill="#e9c9a8"/>' +
      [0, 1, 2, 3].map(r => '<path d="M0 ' + (156 + r * 16) + 'h400" stroke="#d9b592" stroke-width="1"/>').join('') +
      tag('CHANDLER', 14, 186, 34, TEAL, -4) + tag('LEAD ME ON', 196, 208, 22, PINK, -4) + tag('HOLY CITY', 232, 170, 18, '#fff', 5) +
      note(176, 160, 'chm-n1', AMBER) + note(320, 150, 'chm-n2', TEAL) +
      '<g class="chm-sp"><circle cx="184" cy="204" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="chm-sp chm-sp2"><circle cx="190" cy="210" r="2.4" fill="' + PINK + '" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/><path d="M0 240h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="chm-car"><rect x="0" y="226" width="34" height="12" rx="3" fill="' + TEAL + '"/><circle cx="8" cy="240" r="3" fill="#111"/><circle cx="26" cy="240" r="3" fill="#111"/></g>' +
      '<rect x="372" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(290, 44, 106, 'KING ST') + sign(290, 70, 106, 'CALHOUN ST'),
      sky('chms5', '#1b2448', '#e88a6a'));
  }

  window.SCENES = { chmstop: chmstop, chmchurch: chmchurch, chmrainbow: chmrainbow, chmfountain: chmfountain, chmcorner: chmcorner };
})();
