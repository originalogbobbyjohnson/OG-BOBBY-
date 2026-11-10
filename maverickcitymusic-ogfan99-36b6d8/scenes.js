/* maverickcitymusic scenes (Regions: Atlanta; the collective Tony Brown and Jonathan Jay started in Atlanta living rooms in 2018, with the Mav City Gospel Choir). CSS classes prefixed mcm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mcmnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.mcm-note{animation:mcmnote 3.2s ease-out infinite}.mcm-n2{animation-delay:-1.1s}.mcm-n3{animation-delay:-2.2s}' +
    '@keyframes mcmsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mcm-sway{transform-box:fill-box;transform-origin:50% 100%;animation:mcmsway 2.2s ease-in-out infinite}.mcm-s2{animation-delay:-1.1s}' +
    '@keyframes mcmbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.mcm-beam{transform-box:fill-box;transform-origin:50% 100%;animation:mcmbeam 5s ease-in-out infinite}.mcm-bm2{animation-delay:-2.5s}' +
    '@keyframes mcmblink{0%,100%{opacity:.35}50%{opacity:1}}.mcm-blink{animation:mcmblink 1.4s ease-in-out infinite}.mcm-b2{animation-delay:-.5s}.mcm-b3{animation-delay:-1s}' +
    '@keyframes mcmglow{0%,100%{opacity:.55}50%{opacity:1}}.mcm-glow{animation:mcmglow 2s ease-in-out infinite}' +
    '@keyframes mcmcar{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.mcm-car{animation:mcmcar 7s linear infinite}' +
    '@keyframes mcmsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mcm-sp{animation:mcmsp 1.4s ease-out infinite}.mcm-sp2{animation-delay:.45s}' +
    '@keyframes mcmsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-18px);opacity:0}}.mcm-steam{animation:mcmsteam 2s ease-out infinite}.mcm-st2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RED = '#ce242b', GOLDL = '#d4a723', GOLD = '#f2c14e', CORAL = '#e85d4a', TEAL = '#4fb3bf';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const note = (x, y, cls, c) => '<g class="mcm-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const pill = (x, y, txt, c) => '<rect x="' + x + '" y="' + y + '" width="40" height="18" rx="9" fill="' + c + '"/><text x="' + (x + 20) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  /* choir singer in a robe (feet at x,y) */
  const singer = (x, y, robe, skin, cls) => '<g class="mcm-sway ' + (cls || '') + '"><path d="M' + (x - 11) + ' ' + y + 'l4 -30q7 -6 14 0l4 30z" fill="' + robe + '"/><path d="M' + (x - 5) + ' ' + (y - 30) + 'l5 8l5 -8" fill="' + GOLD + '"/>' +
    '<circle cx="' + x + '" cy="' + (y - 37) + '" r="6.5" fill="' + skin + '"/></g>';

  /* 1. MARTA Red/Gold line pulling into Civic Center, the platform under West Peachtree St */
  function mcmstop() {
    const car = (x) => '<rect x="' + x + '" y="124" width="152" height="66" rx="8" fill="#d9dde1"/><rect x="' + x + '" y="130" width="152" height="3" fill="#aab1b8"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="140" width="20" height="18" rx="2" fill="#26313c"/>').join('') +
      '<rect x="' + (x + 6) + '" y="164" width="140" height="4" fill="' + RED + '"/><rect x="' + (x + 6) + '" y="169" width="140" height="3" fill="' + GOLDL + '"/>' +
      '<rect x="' + x + '" y="184" width="152" height="6" fill="#4a5058"/>';
    return svg('<rect width="400" height="260" fill="url(#mcms1)"/>' +
      /* concrete vault ribs */
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 54) + '" y="0" width="14" height="120" fill="#7a7468" opacity=".55"/>').join('') +
      '<rect x="0" y="0" width="400" height="18" fill="#5b564c"/>' +
      [60, 170, 280].map(x => '<rect x="' + x + '" y="18" width="60" height="5" fill="#fff6d8" class="mcm-glow"/>').join('') +
      '<g class="anim-train">' + car(-24) + car(130) + '<circle cx="278" cy="176" r="3" fill="#fff3b0"/></g>' +
      '<rect x="0" y="192" width="400" height="10" fill="#8b8478"/><rect x="0" y="194" width="400" height="4" fill="#f2d16b" opacity=".9"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#4a453d"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (i * 42) + '" y="214" width="40" height="40" fill="none" stroke="#5b554b" stroke-width="1"/>').join('') +
      /* black station sign with Red and Gold line pills */
      '<rect x="326" y="62" width="5" height="62" fill="#333"/><rect x="198" y="30" width="194" height="44" rx="3" fill="#111"/>' +
      pill(206, 34, 'RED', RED) + pill(206, 53, 'GOLD', GOLDL) +
      '<text x="316" y="51" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">CIVIC CENTER</text><text x="316" y="66" text-anchor="middle" ' + font + ' font-size="8" fill="#f2c27a">W PEACHTREE ST · MIDTOWN</text>',
      sky('mcms1', '#2b2a27', '#57524a'));
  }

  /* 2. An Atlanta living room writing camp, where the first songs were written */
  function mcmhome() {
    return svg('<rect width="400" height="260" fill="url(#mcms2)"/>' +
      /* window with the night skyline */
      '<rect x="40" y="30" width="130" height="90" fill="#1d2a48" stroke="#6b4a2e" stroke-width="6"/><path d="M105 30v90M40 75h130" stroke="#6b4a2e" stroke-width="4"/>' +
      [[50, 40], [66, 60], [84, 30], [120, 50], [140, 34], [156, 56]].map(([x, h]) => '<rect x="' + x + '" y="' + (120 - h) + '" width="12" height="' + h + '" fill="#0f1830"/>').join('') +
      [[54, 92], [88, 96], [124, 84], [144, 98], [70, 104]].map(([x, y], i) => '<rect x="' + x + '" y="' + y + '" width="3" height="3" fill="#ffd98a" class="mcm-blink mcm-b' + (i % 3 + 1) + '"/>').join('') +
      /* floor lamp */
      '<rect x="356" y="70" width="4" height="130" fill="#3a2a1e"/><path d="M340 70l12 -30h12l12 30z" fill="#f5d58a"/><ellipse cx="358" cy="72" rx="36" ry="10" fill="#ffe7a8" opacity=".35" class="mcm-glow"/>' +
      /* couch */
      '<rect x="190" y="132" width="150" height="40" rx="10" fill="' + TEAL + '"/><rect x="182" y="150" width="166" height="40" rx="10" fill="#3d8f99"/><rect x="186" y="186" width="8" height="12" fill="#2a1a0c"/><rect x="336" y="186" width="8" height="12" fill="#2a1a0c"/>' +
      '<rect x="200" y="140" width="30" height="20" rx="5" fill="' + CORAL + '"/>' +
      /* acoustic guitar leaning on the couch */
      '<g transform="translate(250 176) rotate(-14) scale(.6)"><rect x="-3" y="-70" width="6" height="46" fill="#5a3a1e"/><rect x="-5" y="-82" width="10" height="14" rx="2" fill="#3b2412"/>' +
      '<path d="M0 -26c-14 0 -18 8 -14 16c3 6 -8 8 -8 20c0 14 10 20 22 20s22 -6 22 -20c0 -12 -11 -14 -8 -20c4 -8 0 -16 -14 -16z" fill="#d79a4e" stroke="#7a4a1e" stroke-width="1.5"/><circle cx="0" cy="-6" r="6" fill="#2a1a0c"/></g>' +
      /* keyboard on a stand */
      '<rect x="24" y="150" width="140" height="14" rx="2" fill="#1a1a1a"/>' + [...Array(20)].map((_, i) => '<rect x="' + (28 + i * 6.7) + '" y="152" width="5.6" height="10" fill="#f4f4f4"/>').join('') +
      '<path d="M44 164l30 40M144 164l-30 40" stroke="#333" stroke-width="3"/>' +
      /* rug, coffee table, mugs, notebook */
      '<ellipse cx="200" cy="226" rx="170" ry="22" fill="#a0523d" opacity=".7"/><rect x="150" y="204" width="110" height="10" rx="2" fill="#6b4a2e"/><rect x="160" y="214" width="6" height="16" fill="#4a3220"/><rect x="244" y="214" width="6" height="16" fill="#4a3220"/>' +
      '<rect x="170" y="194" width="14" height="10" rx="2" fill="' + CREAM() + '"/><rect x="228" y="194" width="14" height="10" rx="2" fill="' + GOLD + '"/>' +
      '<g class="mcm-steam"><path d="M176 190q-3 -6 1 -10" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/></g><g class="mcm-steam mcm-st2"><path d="M234 190q3 -6 -1 -10" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/></g>' +
      '<path d="M192 202l26 -6l4 6l-26 6z" fill="#fbf3e4"/>' +
      note(80, 120, 'mcm-n1', GOLD) + note(220, 110, 'mcm-n2', '#fbf3e4') + note(300, 118, 'mcm-n3', CORAL),
      sky('mcms2', '#3a2a30', '#6b4a3e'));
  }
  function CREAM() { return '#fbf3e4'; }

  /* 3. The Mav City Gospel Choir on the risers, swaying under the stage lights */
  function mcmchoir() {
    const skins = ['#8a5a3a', '#5a3a26', '#c08a62', '#6b4630', '#a06a48'];
    let rows = '';
    [[144, 34, 7], [170, 30, 8], [196, 26, 9]].forEach(([y, step, n], r) => {
      const x0 = 200 - (n - 1) * step / 2 - 8;
      rows += '<rect x="20" y="' + y + '" width="360" height="12" fill="#3a2e44"/>';
      for (let i = 0; i < n; i++) rows += singer(x0 + i * step + 8, y, ['#6b2d8a', '#7a3696'][(i + r) % 2], skins[(i + r) % 5], (i % 2) ? 'mcm-s2' : '');
    });
    return svg('<rect width="400" height="260" fill="url(#mcms3)"/>' +
      /* light beams */
      '<g opacity=".28"><path class="mcm-beam" d="M60 0l-30 200h60z" fill="' + GOLD + '"/><path class="mcm-beam mcm-bm2" d="M200 0l-34 200h68z" fill="#fbf3e4"/><path class="mcm-beam" d="M340 0l-30 200h60z" fill="' + TEAL + '"/></g>' +
      '<rect x="0" y="0" width="400" height="10" fill="#111"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 8) + '" y="6" width="16" height="10" rx="2" fill="#333"/>').join('') +
      rows +
      /* stage front, mic stand, worship leader's keyboard */
      '<rect x="0" y="208" width="400" height="52" fill="#1c1622"/><rect x="0" y="208" width="400" height="4" fill="' + GOLD + '" opacity=".6"/>' +
      '<rect x="198" y="168" width="3" height="40" fill="#999"/><rect x="194" y="164" width="11" height="8" rx="4" fill="#222"/>' +
      '<rect x="40" y="194" width="80" height="10" rx="2" fill="#111"/>' + [...Array(12)].map((_, i) => '<rect x="' + (43 + i * 6.3) + '" y="195.5" width="5.2" height="7" fill="#eee"/>').join('') +
      note(110, 120, 'mcm-n1', GOLD) + note(290, 116, 'mcm-n2', '#fbf3e4') + note(200, 100, 'mcm-n3', TEAL) +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="3">MAV CITY GOSPEL CHOIR</text>',
      sky('mcms3', '#140f1e', '#33204a'));
  }

  /* 4. The signal over Atlanta: a beam calling all the Mavericks, phone lights up in the crowd */
  function mcmsignal() {
    const bldg = [[20, 60], [50, 96], [78, 70], [110, 130], [140, 84], [170, 150], [204, 110], [236, 168], [270, 96], [300, 124], [334, 78], [360, 104]];
    return svg('<rect width="400" height="260" fill="url(#mcms4)"/>' +
      [[30, 20], [90, 44], [150, 14], [260, 30], [330, 18], [380, 50], [210, 56]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="1.4" fill="#fff" class="mcm-blink mcm-b' + (i % 3 + 1) + '"/>').join('') +
      '<g opacity=".32"><path class="mcm-beam" d="M200 196l-22 -196h44z" fill="#fff4c8"/><path class="mcm-beam mcm-bm2" d="M200 196l-16 -196h32z" fill="' + TEAL + '"/></g>' +
      
      bldg.map(([x, h]) => '<rect x="' + x + '" y="' + (200 - h) + '" width="30" height="' + h + '" fill="#141a2e"/>').join('') +
      '<path d="M236 32l15 -12l15 12z" fill="#141a2e"/><rect x="250" y="12" width="2" height="10" fill="#141a2e"/>' +
      bldg.map(([x, h], i) => [0, 1, 2].map(k => '<rect x="' + (x + 6 + k * 8) + '" y="' + (210 - h + (i % 3) * 8) + '" width="3" height="3" fill="#ffd98a" opacity=".6"/>').join('')).join('') +
      '<rect x="186" y="186" width="28" height="16" rx="3" fill="#333"/><ellipse cx="200" cy="186" rx="12" ry="5" fill="#fff4c8" class="mcm-glow"/>' +
      /* crowd silhouettes with lights up */
      '<rect x="0" y="200" width="400" height="60" fill="#0b0e18"/>' +
      [...Array(17)].map((_, i) => { const x = 12 + i * 23, y = 214 + (i % 3) * 4; return '<circle cx="' + x + '" cy="' + y + '" r="8" fill="#1d2236"/><rect x="' + (x - 10) + '" y="' + (y + 6) + '" width="20" height="40" rx="6" fill="#1d2236"/>' +
        ((i % 3 === 1) ? '<path d="M' + (x + 6) + ' ' + (y + 4) + 'l6 -18" stroke="#1d2236" stroke-width="4"/><rect x="' + (x + 9) + '" y="' + (y - 22) + '" width="5" height="8" rx="1" fill="#fff4c8" class="mcm-blink mcm-b' + (i % 3 + 1) + '"/>' : ''); }).join(''),
      sky('mcms4', '#0a0f24', '#2b2f5a'));
  }

  /* 5. Auburn Ave NE and Jesse Hill Jr Dr NE, Big Bethel's steeple with its JESUS SAVES sign lit behind */
  function mcmcorner() {
    const letters = 'JESUSSAVES'.split('');
    return svg('<rect width="400" height="260" fill="url(#mcms5)"/>' +
      /* Big Bethel: grey granite church with tall steeple */
      '<rect x="80" y="70" width="140" height="70" fill="#8d8c86"/><path d="M74 72l76 -30l76 30z" fill="#6f6e69"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (96 + i * 32) + ' 128v-34a8 8 0 0 1 16 0v34z" fill="#3a4a6a"/>').join('') +
      '<rect x="230" y="24" width="40" height="116" fill="#9a9993"/><rect x="234" y="26" width="32" height="100" rx="3" fill="#20242e"/><path d="M226 26l24 -26l24 26z" fill="#6f6e69"/>' +
      letters.map((ch, i) => '<text x="' + (i < 5 ? 242 : 258) + '" y="' + (40 + (i % 5) * 18) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#bff0ff" class="mcm-glow">' + ch + '</text>').join('') +
      
      /* brick wall with the tags */
      '<rect x="0" y="140" width="400" height="80" fill="#7a3b2c"/>' +
      [0, 1, 2, 3, 4].map(r => '<path d="M0 ' + (150 + r * 14) + 'h400" stroke="#64301f" stroke-width="1"/>').join('') +
      tag('MAVERICK', 16, 180, 34, GOLD, -4) + tag('CITY', 196, 204, 30, CORAL, -4) + tag('HELLO JOY', 276, 172, 16, '#fbf3e4', 6) +
      note(150, 150, 'mcm-n1', TEAL) + note(300, 140, 'mcm-n2', GOLD) +
      '<g class="mcm-sp"><circle cx="186" cy="200" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mcm-sp mcm-sp2"><circle cx="192" cy="206" r="2.4" fill="' + CORAL + '" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/><path d="M0 240h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="mcm-car"><rect x="0" y="226" width="34" height="12" rx="3" fill="#c0392b"/><circle cx="8" cy="240" r="3" fill="#111"/><circle cx="26" cy="240" r="3" fill="#111"/></g>' +
      '<rect x="372" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(282, 44, 114, 'AUBURN AVE NE') + sign(282, 70, 114, 'JESSE HILL JR DR'),
      sky('mcms5', '#1a2246', '#e07a5a'));
  }

  window.SCENES = { mcmstop: mcmstop, mcmhome: mcmhome, mcmchoir: mcmchoir, mcmsignal: mcmsignal, mcmcorner: mcmcorner };
})();
