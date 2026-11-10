/* israelhoughton scenes (Regions: Los Angeles + SoCal; born May 19, 1971 in Oceanside, CA; his mother played in a street-ministry "hippie Jesus band" and he was raised in a Hispanic church, learning guitar, piano and drums after service; later led Israel & New Breed). CSS classes prefixed ih- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ihwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.ih-wave{animation:ihwave 3.4s ease-in-out infinite}.ih-w2{animation-delay:-1.7s}' +
    '@keyframes ihsurf{0%{transform:translateX(0)}100%{transform:translateX(-260px)}}.ih-surf{animation:ihsurf 9s linear infinite}' +
    '@keyframes ihgull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,0)}}.ih-gull{animation:ihgull 11s linear infinite}.ih-g2{animation-delay:-5s}' +
    '@keyframes ihbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ih-bell{transform-box:fill-box;transform-origin:50% 0%;animation:ihbell 1.6s ease-in-out infinite}' +
    '@keyframes ihnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.ih-note{animation:ihnote 3s ease-out infinite}.ih-n2{animation-delay:-1s}.ih-n3{animation-delay:-2s}' +
    '@keyframes ihsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ih-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ihsway 2s ease-in-out infinite}.ih-s2{animation-delay:-1s}' +
    '@keyframes ihpalm{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ih-palm{transform-box:fill-box;transform-origin:50% 100%;animation:ihpalm 4s ease-in-out infinite}' +
    '@keyframes ihglow{0%,100%{opacity:.5}50%{opacity:1}}.ih-glow{animation:ihglow 2.2s ease-in-out infinite}' +
    '@keyframes ihsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ih-sp{animation:ihsp 1.4s ease-out infinite}.ih-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = '#ffd166', TEAL = '#2ec4b6', CORAL = '#ff6b6b', CREAM = '#fbf3e4', NAVY = '#14365e';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const note = (x, y, cls, c) => '<g class="ih-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const palm = (x, y, h) => '<g class="ih-palm"><path d="M' + x + ' ' + y + 'q4 ' + (-h / 2) + ' 0 ' + (-h) + '" stroke="#6b4f33" stroke-width="4" fill="none"/>' +
    [-60, -25, 10, 40, 75, 115].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 14) + ' ' + (Math.sin(a * Math.PI / 180) * 6 - 10) + ' ' + (Math.cos(a * Math.PI / 180) * 28) + ' ' + (Math.sin(a * Math.PI / 180) * 18 + 4) + '" stroke="#2f7a46" stroke-width="4" fill="none" stroke-linecap="round"/>').join('') + '</g>';
  const gull = (y, cls) => '<g class="ih-gull ' + cls + '"><path d="M0 ' + y + 'q5 -6 10 0q5 -6 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>';
  const waves = (y, c) => '<g class="ih-wave"><path d="M-20 ' + y + 'q15 -6 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" stroke="' + c + '" stroke-width="2" fill="none"/></g>';

  /* 1. The COASTER pulling into Oceanside Transit Center: palms, the coast light, the station sign */
  function ihstop() {
    const car = (x) => '<rect x="' + x + '" y="100" width="172" height="90" rx="6" fill="#e8ecef"/><rect x="' + x + '" y="100" width="172" height="8" fill="' + NAVY + '"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (x + 10 + i * 26) + '" y="116" width="20" height="15" rx="2" fill="#26313c"/><rect x="' + (x + 10 + i * 26) + '" y="142" width="20" height="15" rx="2" fill="#26313c"/>').join('') +
      '<rect x="' + x + '" y="164" width="172" height="8" fill="#1a7fc1"/><rect x="' + x + '" y="172" width="172" height="4" fill="' + TEAL + '"/>' +
      '<rect x="' + (x + 76) + '" y="158" width="22" height="32" fill="#3a444e"/><rect x="' + x + '" y="186" width="172" height="6" fill="#4a5058"/>';
    return svg('<rect width="400" height="260" fill="url(#ihs1)"/>' +
      '<circle cx="70" cy="46" r="18" fill="#fff1c1" opacity=".9"/>' +
      [[0, 30], [60, 22], [120, 34], [190, 26], [250, 30], [320, 24]].map(([x, h]) => '<rect x="' + x + '" y="' + (98 - h) + '" width="56" height="' + h + '" fill="#e9d8b8"/><rect x="' + (x - 2) + '" y="' + (98 - h - 6) + '" width="60" height="6" fill="#c0603e"/>').join('') +
      palm(30, 100, 70) + palm(200, 100, 60) + palm(372, 100, 76) +
      '<g class="anim-train">' + car(-30) + car(146) + '<circle cx="312" cy="180" r="3.4" fill="#fff3b0"/></g>' +
      '<rect x="0" y="192" width="400" height="10" fill="#a8a296"/><rect x="0" y="194" width="400" height="4" fill="#f2d16b" opacity=".9"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#6a645a"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (i * 42) + '" y="214" width="40" height="40" fill="none" stroke="#7a7468" stroke-width="1"/>').join('') +
      '<rect x="318" y="66" width="5" height="34" fill="#333"/><rect x="206" y="14" width="188" height="54" rx="3" fill="#111"/>' +
      '<rect x="214" y="21" width="62" height="16" rx="8" fill="#1a7fc1"/><text x="245" y="33" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">COASTER</text>' +
      '<text x="336" y="34" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">OCEANSIDE</text>' +
      '<text x="300" y="52" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">TRANSIT CENTER</text>' +
      '<text x="300" y="63" text-anchor="middle" ' + font + ' font-size="6.5" fill="#bbb">COASTER · SPRINTER · METROLINK · SURFLINER</text>',
      sky('ihs1', '#ffb58a', '#bfe3f2'));
  }

  /* 2. Oceanside Pier: the long wooden pier on its pilings, the little red-roofed diner at the end, surfers below */
  function ihpier() {
    return svg('<rect width="400" height="260" fill="url(#ihs2)"/>' +
      '<circle cx="320" cy="60" r="22" fill="#ffe08a" class="ih-glow"/>' +
      gull(40, '') + gull(62, 'ih-g2') +
      '<rect x="0" y="120" width="400" height="100" fill="#2a8fb8"/>' +
      waves(140, '#bfe9f5') + '<g class="ih-w2 ih-wave">' + waves(165, '#e6f7fb') + '</g>' + waves(190, '#bfe9f5') +
      /* the pier deck and pilings, receding out to sea */
      '<path d="M0 118L330 104L330 110L0 128z" fill="#8a6a48"/><path d="M0 116L330 102" stroke="#c9b08a" stroke-width="2"/>' +
      Array.from({ length: 22 }, (_, i) => { const x = 6 + i * 15; const t = 128 - i * 0.82; return '<rect x="' + x + '" y="' + (t - 6) + '" width="3" height="' + (220 - t) + '" fill="#5a4330"/>'; }).join('') +
      Array.from({ length: 22 }, (_, i) => '<rect x="' + (6 + i * 15) + '" y="' + (108 - i * 0.62) + '" width="1.6" height="10" fill="#c9b08a"/>').join('') +
      /* the little diner at the end, red roof, no sign */
      '<rect x="304" y="86" width="40" height="18" fill="#f3efe6"/><path d="M300 88l24 -12l24 12z" fill="#c8332b"/><rect x="312" y="92" width="8" height="8" fill="#5aa0c8"/><rect x="326" y="92" width="8" height="8" fill="#5aa0c8"/>' +
      /* lamps on the pier */
      [40, 120, 200, 280].map((x, i) => '<rect x="' + x + '" y="' + (98 - i * 3) + '" width="2" height="16" fill="#333"/><circle cx="' + (x + 1) + '" cy="' + (97 - i * 3) + '" r="2.6" fill="#ffe8a8" class="ih-glow"/>').join('') +
      /* surfer riding a wave */
      '<g class="ih-surf"><g transform="translate(330 176)"><path d="M-14 8q14 -6 28 0" stroke="' + CORAL + '" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M0 5l-4 -12M0 5l4 -10M-2 -7l-6 -4M-2 -7l8 -2" stroke="#222" stroke-width="3" stroke-linecap="round"/><circle cx="-2" cy="-12" r="3.2" fill="#222"/></g></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#e9d6a8"/><path d="M0 220q50 -6 100 0t100 0t100 0t100 0" fill="#f5ecd2"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="' + NAVY + '" letter-spacing="2">OCEANSIDE PIER</text>',
      sky('ihs2', '#f7a072', '#9fd6ea'));
  }

  /* 3. Mission San Luis Rey de Francia, the "King of the Missions": white adobe facade, domed bell tower, red tile roof */
  function ihmission() {
    return svg('<rect width="400" height="260" fill="url(#ihs3)"/>' +
      '<path d="M0 160q100 -30 200 -10t200 -6v120H0z" fill="#b7a36a"/>' +
      /* long arcade wing */
      '<rect x="210" y="132" width="180" height="58" fill="#f4efe3"/><path d="M206 132h188l-8 -10h-172z" fill="#b5502f"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M' + (218 + i * 24) + ' 190v-30a9 9 0 0 1 18 0v30z" fill="#a89a80"/>').join('') +
      /* church facade */
      '<rect x="80" y="100" width="110" height="90" fill="#f7f2e7"/><path d="M80 100q55 -40 110 0z" fill="#f7f2e7"/>' +
      '<path d="M80 100q55 -40 110 0" stroke="#d9cfb8" stroke-width="2" fill="none"/>' +
      '<path d="M120 190v-40a15 15 0 0 1 30 0v40z" fill="#7a4a2a"/><circle cx="135" cy="104" r="8" fill="#d9cfb8"/><circle cx="135" cy="104" r="5" fill="#8a6a48"/>' +
      /* bell tower with stacked tiers and a dome */
      '<rect x="20" y="98" width="56" height="92" fill="#f7f2e7"/><rect x="26" y="66" width="44" height="32" fill="#f7f2e7"/><rect x="32" y="44" width="32" height="22" fill="#f7f2e7"/>' +
      '<path d="M32 44q16 -24 32 0z" fill="#f0e9d8"/><rect x="47" y="10" width="2" height="14" fill="#6a5a3a"/><rect x="42" y="14" width="12" height="2" fill="#6a5a3a"/>' +
      '<path d="M36 98v-22a12 12 0 0 1 24 0v22z" fill="#2a2018"/><path d="M40 66v-14a8 8 0 0 1 16 0v14z" fill="#2a2018"/>' +
      '<g class="ih-bell"><path d="M42 80q6 -10 12 0l2 8h-16z" fill="#b8892e"/><circle cx="48" cy="90" r="2" fill="#8a6420"/></g>' +
      '<rect x="18" y="96" width="60" height="4" fill="#d9cfb8"/><rect x="24" y="64" width="48" height="4" fill="#d9cfb8"/>' +
      palm(206, 190, 80) + palm(394, 190, 70) +
      '<rect x="0" y="190" width="400" height="70" fill="#c8b48a"/><path d="M60 260l70 -70h20l70 70z" fill="#d8c8a0"/>' +
      gull(36, '') +
      '<text x="300" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#5a3a1a" letter-spacing="1">MISSION SAN LUIS REY</text>',
      sky('ihs3', '#5fb4e6', '#d8f0fa'));
  }

  /* 4. The street-ministry band his mother played in: a hippie van, guitar, drums and a tambourine on the sidewalk outside a little iglesia */
  function ihband() {
    const player = (x, y, shirt, cls, inst) => '<g class="ih-sway ' + cls + '"><path d="M' + (x - 10) + ' ' + y + 'l3 -30q7 -6 14 0l3 30z" fill="' + shirt + '"/><circle cx="' + x + '" cy="' + (y - 36) + '" r="6.5" fill="#c69067"/>' +
      '<path d="M' + (x - 8) + ' ' + (y - 40) + 'q8 -10 16 0" stroke="#3a2a1a" stroke-width="3" fill="none"/>' + inst + '</g>';
    const guitar = (x, y) => '<ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="7" fill="#b5651d"/><circle cx="' + x + '" cy="' + y + '" r="2.4" fill="#3a2010"/><rect x="' + (x + 6) + '" y="' + (y - 2) + '" width="20" height="3" fill="#6a3a1a" transform="rotate(-25 ' + (x + 6) + ' ' + y + ')"/>';
    return svg('<rect width="400" height="260" fill="url(#ihs4)"/>' +
      /* storefront church */
      '<rect x="220" y="60" width="170" height="130" fill="#e8d2a6"/><rect x="220" y="54" width="170" height="10" fill="#b5502f"/>' +
      '<rect x="236" y="96" width="40" height="50" fill="#5aa0c8"/><rect x="334" y="96" width="40" height="50" fill="#5aa0c8"/><rect x="288" y="110" width="34" height="80" fill="#7a4a2a"/>' +
      '<rect x="278" y="72" width="54" height="16" rx="2" fill="' + CREAM + '"/><text x="305" y="84" text-anchor="middle" ' + font + ' font-size="9" fill="' + NAVY + '">IGLESIA</text>' +
      '<rect x="303" y="40" width="4" height="16" fill="' + GOLD + '"/><rect x="298" y="45" width="14" height="4" fill="' + GOLD + '"/>' +
      /* the VW-style van, flowers painted on */
      '<rect x="20" y="120" width="140" height="62" rx="14" fill="#f2e2b0"/><rect x="20" y="152" width="140" height="30" rx="6" fill="' + TEAL + '"/>' +
      '<rect x="34" y="128" width="28" height="18" rx="3" fill="#7fbcd8"/><rect x="70" y="128" width="28" height="18" rx="3" fill="#7fbcd8"/><rect x="106" y="128" width="28" height="18" rx="3" fill="#7fbcd8"/>' +
      [[46, 166, CORAL], [86, 162, GOLD], [128, 168, '#c77dff']].map(([x, y, c]) => '<g transform="translate(' + x + ' ' + y + ')">' + [0, 72, 144, 216, 288].map(a => '<circle cx="' + (Math.cos(a * Math.PI / 180) * 4) + '" cy="' + (Math.sin(a * Math.PI / 180) * 4) + '" r="3" fill="' + c + '"/>').join('') + '<circle r="2" fill="#fff"/></g>').join('') +
      '<circle cx="50" cy="184" r="10" fill="#222"/><circle cx="50" cy="184" r="4" fill="#999"/><circle cx="132" cy="184" r="10" fill="#222"/><circle cx="132" cy="184" r="4" fill="#999"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#bdb6a8"/><rect x="0" y="190" width="400" height="6" fill="#d8d2c4"/>' +
      /* the band */
      player(180, 222, CORAL, '', guitar(184, 204)) +
      player(222, 222, GOLD, 'ih-s2', '<circle cx="232" cy="196" r="7" fill="none" stroke="#b8892e" stroke-width="3"/>') +
      '<rect x="252" y="200" width="28" height="22" rx="3" fill="#c8332b"/><ellipse cx="266" cy="200" rx="14" ry="4" fill="#eee"/><rect x="284" y="196" width="18" height="2" fill="#b8892e"/><rect x="292" y="196" width="2" height="26" fill="#555"/>' +
      player(320, 222, TEAL, 'ih-s2', '') +
      note(190, 170, 'ih-n1', GOLD) + note(250, 160, 'ih-n2', CORAL) + note(300, 168, 'ih-n3', TEAL),
      sky('ihs4', '#ffcf8a', '#f4e6c4'));
  }

  /* 5. The corner: N Coast Hwy and Mission Ave, the tagged wall, the pier stretching into the sunset behind */
  function ihcorner() {
    return svg('<rect width="400" height="260" fill="url(#ihs5)"/>' +
      '<circle cx="250" cy="96" r="26" fill="#ffb347" class="ih-glow"/>' +
      '<rect x="0" y="96" width="400" height="44" fill="#2a6f9a"/>' + waves(112, '#9fd6ea') +
      '<path d="M120 100L400 92L400 96L120 104z" fill="#3a2a1e"/>' +
      Array.from({ length: 18 }, (_, i) => '<rect x="' + (124 + i * 16) + '" y="' + (100 - i * 0.45) + '" width="2" height="' + (40 + i * 0.45) + '" fill="#3a2a1e"/>').join('') +
      palm(40, 140, 80) + palm(90, 140, 64) +
      gull(50, '') +
      /* wall with the tags */
      '<rect x="0" y="140" width="400" height="80" fill="#3d5a73"/>' +
      [0, 1, 2, 3, 4].map(r => '<path d="M0 ' + (150 + r * 14) + 'h400" stroke="#33506a" stroke-width="1"/>').join('') +
      tag('ISRAEL HOUGHTON', 10, 184, 25, GOLD, -4) + tag('NEW BREED', 150, 214, 20, TEAL, -3) + tag('REJOICE', 292, 178, 17, CREAM, 5) +
      note(170, 156, 'ih-n1', CORAL) + note(340, 150, 'ih-n2', GOLD) +
      '<g class="ih-sp"><circle cx="186" cy="200" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ih-sp ih-sp2"><circle cx="192" cy="206" r="2.4" fill="' + TEAL + '" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/><path d="M0 240h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="372" y="36" width="5" height="184" fill="#4a5a4a"/>' + sign(272, 40, 124, 'N COAST HWY') + sign(272, 66, 124, 'MISSION AVE'),
      sky('ihs5', '#2a2350', '#ff8c5a'));
  }

  window.SCENES = { ihstop: ihstop, ihpier: ihpier, ihmission: ihmission, ihband: ihband, ihcorner: ihcorner };
})();
