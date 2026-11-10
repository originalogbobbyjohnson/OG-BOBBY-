/* todddulaney scenes (Regions: Chicago; born and raised in Maywood IL, west of the city; youngest kid on his block playing street sports, drafted by the Mets out of junior college, came up singing background for Smokie Norful at Victory Cathedral in Bolingbrook). CSS classes prefixed tdl- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tdlnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.tdl-note{animation:tdlnote 3.2s ease-out infinite}.tdl-n2{animation-delay:-1.1s}.tdl-n3{animation-delay:-2.2s}' +
    '@keyframes tdlsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tdl-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tdlsway 2.2s ease-in-out infinite}.tdl-s2{animation-delay:-1.1s}' +
    '@keyframes tdlblink{0%,100%{opacity:.35}50%{opacity:1}}.tdl-blink{animation:tdlblink 1.4s ease-in-out infinite}.tdl-b2{animation-delay:-.5s}.tdl-b3{animation-delay:-1s}' +
    '@keyframes tdlglow{0%,100%{opacity:.55}50%{opacity:1}}.tdl-glow{animation:tdlglow 2s ease-in-out infinite}' +
    '@keyframes tdlball{0%{transform:translate(0,0)}100%{transform:translate(-34px,76px)}}.tdl-ball{animation:tdlball 1.2s linear infinite}' +
    '@keyframes tdlhoop{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.tdl-hoop{animation:tdlhoop 1s ease-in-out infinite}' +
    '@keyframes tdlcar{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.tdl-car{animation:tdlcar 7s linear infinite}' +
    '@keyframes tdlbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.tdl-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tdlbeam 5s ease-in-out infinite}.tdl-bm2{animation-delay:-2.5s}' +
    '@keyframes tdlsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tdl-sp{animation:tdlsp 1.4s ease-out infinite}.tdl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = '#ffcc33', ORANGE = '#ff7a1a', BLUE = '#4aa3ff', CREAM = '#fbf3e4', METRA = '#ffb81c';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const note = (x, y, cls, c) => '<g class="tdl-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const singer = (x, y, robe, skin, cls) => '<g class="tdl-sway ' + (cls || '') + '"><path d="M' + (x - 11) + ' ' + y + 'l4 -30q7 -6 14 0l4 30z" fill="' + robe + '"/><path d="M' + (x - 5) + ' ' + (y - 30) + 'l5 8l5 -8" fill="' + GOLD + '"/>' +
    '<circle cx="' + x + '" cy="' + (y - 37) + '" r="6.5" fill="' + skin + '"/></g>';

  /* 1. A Metra Union Pacific West bilevel pulling into Maywood station by Lake St */
  function tdlstop() {
    const car = (x) => '<rect x="' + x + '" y="98" width="170" height="92" rx="6" fill="#c9ced3"/><rect x="' + x + '" y="98" width="170" height="6" fill="#9aa1a8"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (x + 10 + i * 26) + '" y="112" width="20" height="16" rx="2" fill="#26313c"/><rect x="' + (x + 10 + i * 26) + '" y="140" width="20" height="16" rx="2" fill="#26313c"/>').join('') +
      '<rect x="' + x + '" y="132" width="170" height="3" fill="#7d868f"/><rect x="' + x + '" y="166" width="170" height="5" fill="' + METRA + '"/>' +
      '<rect x="' + (x + 74) + '" y="160" width="22" height="30" fill="#3a444e"/><rect x="' + x + '" y="186" width="170" height="6" fill="#4a5058"/>';
    return svg('<rect width="400" height="260" fill="url(#tdls1)"/>' +
      /* Maywood houses and trees behind the embankment */
      [[10, 52], [70, 40], [130, 56], [196, 44], [262, 50], [330, 42]].map(([x, h]) => '<rect x="' + x + '" y="' + (96 - h) + '" width="50" height="' + h + '" fill="#8a5a46"/><path d="M' + (x - 4) + ' ' + (96 - h) + 'l29 -16l29 16z" fill="#5a3a2e"/>').join('') +
      [40, 170, 300].map(x => '<circle cx="' + x + '" cy="70" r="20" fill="#3f7a3a"/>').join('') +
      '<g class="anim-train">' + car(-30) + car(144) + '<circle cx="312" cy="178" r="3.4" fill="#fff3b0"/></g>' +
      '<rect x="0" y="192" width="400" height="10" fill="#9a958b"/><rect x="0" y="194" width="400" height="4" fill="#f2d16b" opacity=".9"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#5b564c"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (i * 42) + '" y="214" width="40" height="40" fill="none" stroke="#6b665b" stroke-width="1"/>').join('') +
      /* black station sign with the UP-W pill */
      '<rect x="326" y="64" width="5" height="40" fill="#333"/><rect x="214" y="16" width="178" height="50" rx="3" fill="#111"/>' +
      '<rect x="222" y="22" width="44" height="18" rx="9" fill="' + METRA + '"/><text x="244" y="35" text-anchor="middle" ' + font + ' font-size="10" fill="#111">UP-W</text>' +
      '<text x="330" y="38" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">MAYWOOD</text><text x="303" y="58" text-anchor="middle" ' + font + ' font-size="8" fill="' + METRA + '">LAKE ST · METRA UNION PACIFIC WEST</text>',
      sky('tdls1', '#7fb6e0', '#cfe4f2'));
  }

  /* 2. Sunday at the big church in Bolingbrook where he sang background: choir, lights, the worship leader at the mic */
  function tdlchurch() {
    const skins = ['#8a5a3a', '#5a3a26', '#c08a62', '#6b4630', '#a06a48'];
    let rows = '';
    [[132, 30, 9], [158, 28, 10]].forEach(([y, step, n], r) => {
      const x0 = 200 - (n - 1) * step / 2 - 8;
      rows += '<rect x="40" y="' + y + '" width="320" height="10" fill="#2a2440"/>';
      for (let i = 0; i < n; i++) rows += singer(x0 + i * step + 8, y, ['#1f3a7a', '#2a4a92'][(i + r) % 2], skins[(i + r) % 5], (i % 2) ? 'tdl-s2' : '');
    });
    return svg('<rect width="400" height="260" fill="url(#tdls2)"/>' +
      '<g opacity=".28"><path class="tdl-beam" d="M70 0l-34 200h68z" fill="' + GOLD + '"/><path class="tdl-beam tdl-bm2" d="M200 0l-34 200h68z" fill="' + CREAM + '"/><path class="tdl-beam" d="M330 0l-34 200h68z" fill="' + BLUE + '"/></g>' +
      '<rect x="0" y="0" width="400" height="10" fill="#111"/>' +
      /* wide screen over the choir */
      '<rect x="110" y="20" width="180" height="64" rx="4" fill="#0b0f1e" stroke="#333" stroke-width="3"/>' +
      '<text x="200" y="52" text-anchor="middle" ' + font + ' font-size="18" fill="' + GOLD + '" class="tdl-glow">VICTORY</text><text x="200" y="72" text-anchor="middle" ' + font + ' font-size="9" fill="' + CREAM + '" letter-spacing="2">BOLINGBROOK, ILLINOIS</text>' +
      rows +
      '<rect x="0" y="170" width="400" height="90" fill="#1a1426"/><rect x="0" y="170" width="400" height="4" fill="' + GOLD + '" opacity=".6"/>' +
      /* the worship leader at the mic, seen from behind */
      '<rect x="198" y="186" width="3" height="40" fill="#999"/><rect x="194" y="182" width="11" height="8" rx="4" fill="#222"/>' +
      '<path d="M206 250v-40q12 -10 24 0v40z" fill="#f4f1e8"/><circle cx="218" cy="198" r="9" fill="#5a3a26"/>' +
      note(80, 120, 'tdl-n1', GOLD) + note(320, 110, 'tdl-n2', CREAM) + note(160, 96, 'tdl-n3', BLUE),
      sky('tdls2', '#120e20', '#2c2050'));
  }

  /* 3. Night game at a minor-league ballpark: the lights, the infield, a fastball on its way */
  function tdlballpark() {
    const tower = (x) => '<rect x="' + (x - 2) + '" y="20" width="4" height="100" fill="#6b7280"/><rect x="' + (x - 20) + '" y="10" width="40" height="14" fill="#2a2f3a"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (x - 14 + i * 9.5) + '" cy="17" r="3.4" fill="#fff8d0" class="tdl-glow"/>').join('');
    return svg('<rect width="400" height="260" fill="url(#tdls3)"/>' +
      [[30, 20], [120, 40], [200, 14], [280, 34], [360, 22]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="1.3" fill="#fff" class="tdl-blink tdl-b' + (i % 3 + 1) + '"/>').join('') +
      tower(40) + tower(360) +
      /* stands and scoreboard */
      '<rect x="0" y="96" width="400" height="34" fill="#1e2a44"/>' + [...Array(40)].map((_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (106 + (i % 3) * 7) + '" r="3" fill="' + ['#c9a07a', '#6b4630', '#a06a48', '#3a2a20'][i % 4] + '"/>').join('') +
      '<rect x="150" y="40" width="100" height="50" rx="3" fill="#0b2a18" stroke="#ddd" stroke-width="2"/><text x="200" y="58" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">HOME 3 · AWAY 1</text><text x="200" y="78" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BALL 2 · STRIKE 2</text>' +
      /* outfield wall, grass, infield dirt */
      '<rect x="0" y="130" width="400" height="10" fill="' + BLUE + '"/><rect x="0" y="140" width="400" height="120" fill="#2f7a3a"/>' +
      [...Array(8)].map((_, i) => '<rect x="' + (i * 50) + '" y="140" width="25" height="120" fill="#348440"/>').join('') +
      '<path d="M200 160l120 60l-120 40l-120 -40z" fill="#b5835a"/><path d="M200 172l90 46l-90 30l-90 -30z" fill="#2f7a3a"/>' +
      '<ellipse cx="200" cy="206" rx="16" ry="6" fill="#b5835a"/><rect x="194" y="204" width="12" height="3" fill="#fff"/>' +
      '<rect x="196" y="244" width="8" height="8" fill="#fff" transform="rotate(45 200 248)"/>' +
      /* pitcher silhouette mid-throw, ball flying toward home */
      '<g fill="#e8e8e8"><circle cx="216" cy="168" r="6"/><path d="M210 176h12l2 24h-6l-2 -10l-4 10h-6z"/><path d="M222 178l14 -10l2 3l-14 11z"/></g>' +
      '<g class="tdl-ball"><circle cx="230" cy="172" r="3" fill="#fff"/></g>' +
      note(70, 70, 'tdl-n1', GOLD) + note(330, 64, 'tdl-n2', CREAM),
      sky('tdls3', '#071025', '#1f3a6a'));
  }

  /* 4. The block in Maywood: brick two-flats, a hoop on the garage, the youngest kid on the block always in the game */
  function tdlblock() {
    return svg('<rect width="400" height="260" fill="url(#tdls4)"/>' +
      /* two-flats */
      [[0, '#9a4a36'], [100, '#b0603e'], [300, '#8a4232']].map(([x, c]) => '<rect x="' + x + '" y="60" width="96" height="120" fill="' + c + '"/><rect x="' + x + '" y="54" width="96" height="8" fill="#6a3426"/>' +
        [0, 1].map(r => [0, 1, 2].map(k => '<rect x="' + (x + 10 + k * 28) + '" y="' + (74 + r * 46) + '" width="18" height="26" fill="#e8d8a0"/><path d="M' + (x + 19 + k * 28) + ' ' + (74 + r * 46) + 'v26" stroke="#6a3426" stroke-width="2"/>').join('')).join('') +
        '<rect x="' + (x + 36) + '" y="150" width="24" height="30" fill="#4a2e1c"/>').join('') +
      /* garage with the hoop */
      '<rect x="200" y="110" width="96" height="70" fill="#d8d2c4"/><path d="M196 112l52 -22l52 22z" fill="#7a746a"/><rect x="212" y="130" width="72" height="50" fill="#bdb6a6"/>' +
      [0, 1, 2, 3].map(i => '<path d="M212 ' + (140 + i * 10) + 'h72" stroke="#a49d8e" stroke-width="1.5"/>').join('') +
      '<rect x="232" y="84" width="32" height="22" fill="#fff" stroke="#c33" stroke-width="2"/><rect x="242" y="92" width="12" height="9" fill="none" stroke="#c33" stroke-width="1.5"/>' +
      '<ellipse cx="248" cy="108" rx="10" ry="3" fill="none" stroke="' + ORANGE + '" stroke-width="2"/><path d="M240 108l3 10M248 109v10M256 108l-3 10" stroke="#fff" stroke-width="1"/>' +
      '<g class="tdl-hoop"><circle cx="232" cy="150" r="6" fill="' + ORANGE + '"/><path d="M226 150h12M232 144v12" stroke="#7a3a10" stroke-width="1"/></g>' +
      /* sidewalk, parkway trees, alley */
      '<rect x="0" y="180" width="400" height="12" fill="#c9c2b2"/><rect x="0" y="192" width="400" height="20" fill="#5c9a4a"/>' +
      [60, 340].map(x => '<rect x="' + (x - 3) + '" y="150" width="6" height="44" fill="#5a3a22"/><circle cx="' + x + '" cy="140" r="26" fill="#3f7a3a"/>').join('') +
      '<rect x="0" y="212" width="400" height="48" fill="#45484d"/><path d="M0 236h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="tdl-car"><rect x="0" y="218" width="34" height="12" rx="3" fill="' + BLUE + '"/><circle cx="8" cy="232" r="3" fill="#111"/><circle cx="26" cy="232" r="3" fill="#111"/></g>' +
      note(160, 60, 'tdl-n1', GOLD) + note(330, 40, 'tdl-n2', CREAM),
      sky('tdls4', '#f0a060', '#ffd9a0'));
  }

  /* 5. 5th Ave and Lake St in Maywood, the Chicago skyline far off behind */
  function tdlcorner() {
    const tall = [[60, 70], [86, 100], [110, 82], [150, 150], [170, 126], [196, 96], [224, 116], [252, 88], [280, 132], [306, 76], [334, 104]];
    return svg('<rect width="400" height="260" fill="url(#tdls5)"/>' +
      tall.map(([x, h]) => '<rect x="' + x + '" y="' + (140 - h) + '" width="22" height="' + h + '" fill="#1a2240"/>').join('') +
      /* the tall black tower with stepped tops and twin antennas */
      '<rect x="150" y="-10" width="2" height="12" fill="#1a2240"/><rect x="164" y="-10" width="2" height="12" fill="#1a2240"/><rect x="146" y="0" width="24" height="10" fill="#1a2240"/>' +
      '<rect x="276" y="0" width="2" height="10" fill="#1a2240"/>' +
      tall.map(([x, h], i) => [0, 1].map(k => '<rect x="' + (x + 5 + k * 9) + '" y="' + (150 - h + (i % 3) * 10) + '" width="3" height="3" fill="#ffd98a" class="tdl-blink tdl-b' + (i % 3 + 1) + '"/>').join('')).join('') +
      /* wall with the tags */
      '<rect x="0" y="140" width="400" height="80" fill="#6f3a2c"/>' +
      [0, 1, 2, 3, 4].map(r => '<path d="M0 ' + (150 + r * 14) + 'h400" stroke="#5a2e22" stroke-width="1"/>').join('') +
      tag('DULANEY', 14, 186, 36, GOLD, -4) + tag('MAYWOOD', 210, 208, 26, BLUE, -4) + tag('VICTORY', 246, 170, 18, CREAM, 5) +
      note(180, 156, 'tdl-n1', ORANGE) + note(330, 146, 'tdl-n2', GOLD) +
      '<g class="tdl-sp"><circle cx="196" cy="200" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tdl-sp tdl-sp2"><circle cx="202" cy="206" r="2.4" fill="' + BLUE + '" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/><path d="M0 240h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="tdl-car"><rect x="0" y="226" width="34" height="12" rx="3" fill="' + ORANGE + '"/><circle cx="8" cy="240" r="3" fill="#111"/><circle cx="26" cy="240" r="3" fill="#111"/></g>' +
      '<rect x="372" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(290, 44, 106, '5TH AVE') + sign(290, 70, 106, 'LAKE ST'),
      sky('tdls5', '#141c3a', '#d0704e'));
  }

  window.SCENES = { tdlstop: tdlstop, tdlchurch: tdlchurch, tdlballpark: tdlballpark, tdlblock: tdlblock, tdlcorner: tdlcorner };
})();
