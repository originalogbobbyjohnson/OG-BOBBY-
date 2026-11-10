/* Elton John game (GENRES: POP; INTERNATIONAL region: UK + EUROPE; Pinner, North West London - born Reginald Dwight
   at 55 Pinner Hill Road in 1947, grew up on Potter Street, Pinner County Grammar School).
   Rooms: Pinner station (Metropolitan line, open platforms in the cutting under Bridge Street), the Northwood Hills Hotel
   pub (the stop after Pinner, where a teenage Reg played piano at the weekends), the Royal Academy of Music on Marylebone
   Road (Saturday junior scholar from age 11), Vicarage Road in Watford (his club, chairman twice, the stand named after him),
   and High Street at Bridge Street in Pinner with the timber-framed houses and St John the Baptist's church tower behind.
   CSS classes prefixed "elj" (the page's anim-train is kept). No logos (no roundel, no club crest), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes eljTw{0%,100%{opacity:1}50%{opacity:.25}}.eljTw{animation:eljTw 1.8s ease-in-out infinite}.eljT2{animation-delay:.6s}.eljT3{animation-delay:1.2s}' +
    '@keyframes eljBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.eljBob{animation:eljBob .7s ease-in-out infinite}.eljBb2{animation-delay:.35s}' +
    '@keyframes eljKey{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.eljKey{animation:eljKey .5s ease-in-out infinite}.eljK2{animation-delay:.17s}.eljK3{animation-delay:.33s}' +
    '@keyframes eljNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.eljNote{animation:eljNote 3s linear infinite}.eljN2{animation-delay:1s}.eljN3{animation-delay:2s}' +
    '@keyframes eljBall{0%{transform:translate(0,0)}50%{transform:translate(70px,-50px)}100%{transform:translate(140px,0)}}.eljBall{animation:eljBall 2.6s ease-in-out infinite alternate}' +
    '@keyframes eljCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.eljCloud{animation:eljCloud 26s linear infinite}.eljC2{animation-delay:-13s}' +
    '@keyframes eljBus{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.eljBus{animation:eljBus 10s linear infinite}' +
    '@keyframes eljFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.eljFlag{transform-box:fill-box;transform-origin:0 50%;animation:eljFlag 1.3s ease-in-out infinite}' +
    '@keyframes eljSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.eljSpark{transform-box:fill-box;transform-origin:50% 50%;animation:eljSpark 1.4s ease-in-out infinite}.eljS2{animation-delay:.5s}.eljS3{animation-delay:.9s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const MET = "#9b0056", NAVY = "#10245a", GOLD = "#f2c94c", PINK = "#e0559b", SKY = "#4fb3e8", BRICK = "#9a4a34";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="eljTw' + (i % 3 === 1 ? ' eljT2' : i % 3 === 2 ? ' eljT3' : '') + '"/>';
    }
    return s;
  };
  const cloud = (x, y, cls) => '<g class="eljCloud' + (cls || '') + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const crowd = (y, n, x0, x1, cols) => {
    let s = ""; const a = x0 || 0, b = x1 || 400;
    for (let i = 0; i < n; i++) {
      const x = a + 6 + i * ((b - a) / n), up = i % 3 === 0, f = cols[i % cols.length];
      s += '<g class="eljBob' + (i % 2 ? ' eljBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 13) + '" r="5"/><rect x="' + (x - 5.5) + '" y="' + (y - 8) + '" width="11" height="16" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l5 -13" stroke="' + f + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };

  /* 1. Pinner station: open-air platforms down in the cutting, the Bridge Street bridge and the old brick station building above, a silver Metropolitan line train pulling in */
  function eljstation() {
    let wins = "";
    for (let x = 46; x < 290; x += 34) wins += '<rect x="' + x + '" y="140" width="22" height="18" rx="3" fill="#bfe2f5"/>';
    const train = '<g class="anim-train">' +
      '<rect x="20" y="128" width="276" height="66" rx="10" fill="#e9ecef" stroke="#2b2b2b" stroke-width="2"/>' +
      '<path d="M296 128q22 2 26 28v38h-26z" fill="#e9ecef" stroke="#2b2b2b" stroke-width="2"/>' +
      '<path d="M299 136q15 2 18 20h-18z" fill="#1d2a36"/>' +
      '<rect x="20" y="180" width="302" height="14" fill="' + NAVY + '"/>' + wins +
      '<g fill="#d81e2a"><rect x="36" y="134" width="8" height="46"/><rect x="152" y="134" width="8" height="46"/><rect x="268" y="134" width="8" height="46"/><rect x="306" y="162" width="10" height="16"/></g>' +
      '<rect x="308" y="184" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#1b1b1b"><circle cx="62" cy="198" r="7"/><circle cx="86" cy="198" r="7"/><circle cx="232" cy="198" r="7"/><circle cx="256" cy="198" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eljs1)"/>' + cloud(60, 30, '') + cloud(240, 22, ' eljC2') +
      /* the old brick station building up at street level, and trees */
      '<g fill="#3f7a3a"><circle cx="24" cy="70" r="22"/><circle cx="380" cy="66" r="24"/><circle cx="356" cy="80" r="16"/></g>' +
      '<rect x="230" y="30" width="110" height="54" fill="' + BRICK + '"/><path d="M224 32h122l-10 -14H234z" fill="#5a3d36"/>' +
      '<g fill="#f3e6c6"><rect x="242" y="44" width="16" height="22" rx="2"/><rect x="266" y="44" width="16" height="22" rx="2"/><rect x="290" y="44" width="16" height="22" rx="2"/><rect x="314" y="44" width="16" height="22" rx="2"/></g>' +
      /* Bridge Street bridge over the cutting */
      '<rect x="0" y="84" width="400" height="16" fill="#7d6a5c"/><path d="M0 100h400" stroke="#4d4038" stroke-width="3"/>' +
      '<g fill="#6a594c"><rect x="60" y="100" width="10" height="20"/><rect x="200" y="100" width="10" height="20"/><rect x="340" y="100" width="10" height="20"/></g>' +
      /* cutting walls, grassy bank */
      '<path d="M0 120h400v74H0z" fill="#8a7464"/><path d="M0 120h400" stroke="#5a8a3a" stroke-width="6"/>' +
      /* platform canopy, the station name board */
      '<rect x="20" y="104" width="160" height="22" rx="2" fill="#fff" stroke="#1b1b1b" stroke-width="2"/>' +
      '<rect x="20" y="110" width="160" height="10" fill="' + MET + '"/>' +
      '<rect x="66" y="106" width="68" height="18" fill="#fff"/>' +
      '<text x="100" y="120" text-anchor="middle" ' + F + ' font-size="13" fill="#10245a" letter-spacing="1">PINNER</text>' +
      '<rect x="230" y="106" width="150" height="16" rx="2" fill="' + MET + '"/>' +
      '<text x="305" y="118" text-anchor="middle" ' + F + ' font-size="8" fill="#fff" letter-spacing="2">METROPOLITAN LINE</text>' +
      /* platform */
      '<rect x="0" y="200" width="400" height="60" fill="#5b5f68"/><rect x="0" y="200" width="400" height="6" fill="#f2c14e"/>' +
      '<text x="200" y="236" text-anchor="middle" ' + F + ' font-size="11" fill="#e9e9e9" letter-spacing="4">MIND THE GAP</text>' +
      train,
      sky("eljs1", "#8fc3ea", "#e8eef3"));
  }

  /* 2. The Northwood Hills Hotel: the pub's back bar on a Friday night, a battered upright piano, keys going, notes floating up */
  function eljpub() {
    let keys = "";
    for (let i = 0; i < 18; i++) keys += '<rect x="' + (128 + i * 8) + '" y="160" width="7" height="22" fill="#f7f3ea" stroke="#333" stroke-width=".6" class="eljKey' + (i % 3 === 1 ? ' eljK2' : i % 3 === 2 ? ' eljK3' : '') + '"/>';
    let blk = "";
    for (let i = 0; i < 18; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) blk += '<rect x="' + (133 + i * 8) + '" y="160" width="4.5" height="13" fill="#111"/>';
    const notes = '<g fill="' + GOLD + '">' +
      '<g class="eljNote"><circle cx="150" cy="120" r="4"/><rect x="153" y="104" width="2" height="16"/></g>' +
      '<g class="eljNote eljN2"><circle cx="200" cy="118" r="4"/><rect x="203" y="102" width="2" height="16"/><path d="M203 102l8 4v4l-8 -4z"/></g>' +
      '<g class="eljNote eljN3"><circle cx="246" cy="122" r="4"/><rect x="249" y="106" width="2" height="16"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a14"/>' +
      /* wood panelling, wallpaper above */
      '<rect x="0" y="0" width="400" height="110" fill="#5a2e2a"/>' +
      '<g fill="#6e3a33">' + [20, 70, 120, 170, 220, 270, 320, 370].map(x => '<path d="M' + x + ' 10l8 12l-8 12l-8 -12z"/><path d="M' + (x + 25) + ' 50l8 12l-8 12l-8 -12z"/>').join("") + '</g>' +
      '<rect x="0" y="110" width="400" height="90" fill="#4a2a1a"/>' +
      '<g stroke="#3a1f12" stroke-width="2">' + [0, 50, 100, 150, 200, 250, 300, 350].map(x => '<rect x="' + (x + 6) + '" y="118" width="38" height="74" fill="none"/>').join("") + '</g>' +
      /* wall lamps */
      '<g><circle cx="60" cy="80" r="10" fill="#ffd98a" class="eljTw"/><circle cx="340" cy="80" r="10" fill="#ffd98a" class="eljTw eljT2"/></g>' +
      /* the upright piano */
      '<rect x="116" y="96" width="168" height="66" rx="4" fill="#3a2214" stroke="#1d1009" stroke-width="2"/>' +
      '<rect x="128" y="108" width="144" height="30" rx="3" fill="#4d2e1b"/>' +
      '<rect x="176" y="112" width="48" height="22" fill="#f4efe4" stroke="#8a6a40" stroke-width="1"/>' +
      '<path d="M182 118h36M182 123h36M182 128h30" stroke="#555" stroke-width="1"/>' +
      '<rect x="122" y="156" width="156" height="30" fill="#2a170f"/>' + keys + blk +
      '<rect x="122" y="186" width="156" height="30" rx="2" fill="#3a2214"/>' +
      '<rect x="126" y="216" width="10" height="16" fill="#1d1009"/><rect x="264" y="216" width="10" height="16" fill="#1d1009"/>' +
      /* a candle on the piano lid */
      '<rect x="264" y="82" width="6" height="14" fill="#f7f3ea"/><path d="M267 74q4 4 0 8q-4 -4 0 -8z" fill="#ffb84a" class="eljTw"/>' +
      notes +
      /* the pub floor and stools */
      '<rect x="0" y="232" width="400" height="28" fill="#1d120c"/>' +
      '<g fill="#7a1f2a"><ellipse cx="200" cy="214" rx="20" ry="5"/></g><rect x="196" y="214" width="8" height="20" fill="#2a170f"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="10" fill="' + GOLD + '" letter-spacing="3">NORTHWOOD HILLS HOTEL · FRIDAY NIGHTS</text>');
  }

  /* 3. The Royal Academy of Music, Marylebone Road: red brick and Portland stone, arched windows, a grand piano in the window, notes rising */
  function eljacademy() {
    let wins = "";
    for (let x = 70; x <= 330; x += 40) wins += '<path d="M' + (x - 10) + ' 134v-20a10 10 0 0 1 20 0v20z" fill="#ffd98a" class="eljTw' + (x % 80 ? ' eljT2' : '') + '"/>';
    let wins2 = "";
    for (let x = 70; x <= 330; x += 40) wins2 += '<rect x="' + (x - 9) + '" y="74" width="18" height="22" fill="#ffe7b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#eljs3)"/>' + stars(18, 8, 50) +
      /* the building */
      '<rect x="40" y="56" width="320" height="150" fill="#a5452f"/>' +
      '<rect x="40" y="56" width="320" height="10" fill="#e6dcc4"/><rect x="40" y="100" width="320" height="6" fill="#e6dcc4"/>' +
      '<rect x="40" y="140" width="320" height="6" fill="#e6dcc4"/>' +
      '<path d="M30 56h340l-12 -14H42z" fill="#7a2f20"/>' +
      wins2 + wins +
      /* centre entrance, stone arch */
      '<rect x="176" y="150" width="48" height="56" fill="#e6dcc4"/><path d="M184 206v-34a16 16 0 0 1 32 0v34z" fill="#2a1a14"/>' +
      /* grand piano in the big window, lid up */
      '<rect x="66" y="152" width="80" height="48" fill="#1b1b2a" stroke="#e6dcc4" stroke-width="3"/>' +
      '<path d="M78 186h46q10 0 10 -8v-4h-56z" fill="#111"/><path d="M82 174l40 -16v16z" fill="#222"/>' +
      '<rect x="78" y="186" width="44" height="4" fill="#f7f3ea"/>' +
      '<rect x="254" y="152" width="80" height="48" fill="#1b1b2a" stroke="#e6dcc4" stroke-width="3"/>' +
      '<g class="eljNote"><circle cx="290" cy="180" r="4" fill="' + GOLD + '"/><rect x="293" y="164" width="2" height="16" fill="' + GOLD + '"/></g>' +
      '<g class="eljNote eljN2"><circle cx="100" cy="150" r="4" fill="' + GOLD + '"/><rect x="103" y="134" width="2" height="16" fill="' + GOLD + '"/></g>' +
      /* pavement and Marylebone Road */
      '<rect x="0" y="206" width="400" height="54" fill="#33363d"/><rect x="0" y="206" width="400" height="6" fill="#a6a9b0"/>' +
      '<path d="M0 236h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<g class="eljBus"><rect x="0" y="214" width="96" height="32" rx="5" fill="#d81e2a"/><g fill="#bfe2f5"><rect x="8" y="220" width="16" height="10"/><rect x="30" y="220" width="16" height="10"/><rect x="52" y="220" width="16" height="10"/><rect x="74" y="220" width="16" height="10"/></g><circle cx="20" cy="248" r="5" fill="#111"/><circle cx="76" cy="248" r="5" fill="#111"/></g>' +
      '<text x="200" y="28" text-anchor="middle" ' + F + ' font-size="10" fill="' + GOLD + '" letter-spacing="3">ROYAL ACADEMY OF MUSIC · SATURDAY SCHOLAR</text>',
      sky("eljs3", "#121a3a", "#3a3456"));
  }

  /* 4. Vicarage Road, Watford: yellow seats, red-and-black trim, floodlights, a crowd in yellow, the ball in the air */
  function eljvicarage() {
    let seats = "";
    for (let r = 0; r < 4; r++) for (let x = 0; x < 400; x += 10) seats += '<rect x="' + (x + (r % 2) * 5) + '" y="' + (70 + r * 12) + '" width="7" height="8" fill="' + (r === 1 ? '#111' : GOLD) + '"/>';
    const fl = (x) => '<rect x="' + (x - 2) + '" y="10" width="4" height="60" fill="#888"/><rect x="' + (x - 14) + '" y="4" width="28" height="12" fill="#ddd"/>' +
      '<g fill="#fff8d0" class="eljTw"><circle cx="' + (x - 8) + '" cy="10" r="3"/><circle cx="' + x + '" cy="10" r="3"/><circle cx="' + (x + 8) + '" cy="10" r="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eljs4)"/>' +
      fl(30) + fl(370) +
      /* stand roof */
      '<path d="M0 54h400v12H0z" fill="#d81e2a"/><rect x="0" y="66" width="400" height="4" fill="#111"/>' +
      seats +
      '<rect x="0" y="118" width="400" height="10" fill="#d81e2a"/>' +
      '<text x="200" y="126" text-anchor="middle" ' + F + ' font-size="8" fill="#fff" letter-spacing="3">SIR ELTON JOHN STAND</text>' +
      crowd(150, 30, 0, 400, [GOLD, '#111', GOLD, '#d81e2a']) +
      /* the pitch */
      '<rect x="0" y="152" width="400" height="108" fill="#3d8a3a"/>' +
      '<g fill="#47994a">' + [0, 80, 160, 240, 320].map(x => '<rect x="' + x + '" y="152" width="40" height="108"/>').join("") + '</g>' +
      '<path d="M200 152v108" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="210" rx="40" ry="18" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<g class="eljBall"><circle cx="120" cy="226" r="7" fill="#fff" stroke="#222" stroke-width="1.5"/><path d="M116 224l4 -3l4 3l-2 4h-4z" fill="#222"/></g>' +
      '<g class="eljFlag"><rect x="12" y="150" width="2" height="30" fill="#ddd"/><path d="M14 150h18v10H14z" fill="' + GOLD + '"/></g>',
      sky("eljs4", "#2c3e6a", "#8aa0c8"));
  }

  /* 5. High Street at Bridge Street, Pinner HA5: London street plates, ELTON tagged on the wall, the timber-framed houses and
     St John the Baptist's flint church tower at the top of the hill behind */
  function eljcorner() {
    const bus = '<g class="eljBus"><rect x="0" y="198" width="110" height="34" rx="5" fill="#d81e2a"/><g fill="#bfe2f5"><rect x="8" y="204" width="18" height="12"/><rect x="32" y="204" width="18" height="12"/><rect x="56" y="204" width="18" height="12"/><rect x="80" y="204" width="18" height="12"/></g><circle cx="22" cy="234" r="6" fill="#111"/><circle cx="88" cy="234" r="6" fill="#111"/></g>';
    const tudor = (x, w, h, roof) => '<rect x="' + x + '" y="' + (146 - h) + '" width="' + w + '" height="' + h + '" fill="#f1ead8"/>' +
      '<path d="M' + (x - 4) + ' ' + (146 - h) + 'l' + (w / 2 + 4) + ' -' + roof + 'l' + (w / 2 + 4) + ' ' + roof + 'z" fill="#7a3a2a"/>' +
      '<g stroke="#2a1a12" stroke-width="3"><path d="M' + x + ' ' + (146 - h) + 'h' + w + 'M' + x + ' ' + (146 - h / 2) + 'h' + w + 'M' + (x + w / 3) + ' ' + (146 - h) + 'v' + h + 'M' + (x + 2 * w / 3) + ' ' + (146 - h) + 'v' + h + '"/>' +
      '<path d="M' + x + ' ' + (146 - h) + 'l' + (w / 3) + ' ' + (h / 2) + 'M' + (x + w) + ' ' + (146 - h) + 'l-' + (w / 3) + ' ' + (h / 2) + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eljs5)"/>' + cloud(80, 26, '') + cloud(300, 36, ' eljC2') +
      /* St John the Baptist church tower at the top of the High Street */
      '<rect x="176" y="30" width="48" height="110" fill="#8a8478"/>' +
      '<g fill="#a09a8c">' + [40, 56, 72, 88, 104, 120].map(y => '<rect x="180" y="' + y + '" width="40" height="3"/>').join("") + '</g>' +
      '<path d="M176 30h48v-6h-48z" fill="#6a6458"/><g fill="#6a6458"><rect x="176" y="18" width="8" height="8"/><rect x="192" y="18" width="8" height="8"/><rect x="208" y="18" width="8" height="8"/><rect x="216" y="18" width="8" height="8"/></g>' +
      '<path d="M192 60v-8a8 8 0 0 1 16 0v8z" fill="#2a2a2a"/>' +
      '<g class="eljFlag"><rect x="199" y="2" width="2" height="18" fill="#444"/><path d="M201 2h16v9h-16z" fill="#fff"/><path d="M207 2v9M201 6.5h16" stroke="#d81e2a" stroke-width="2.4"/></g>' +
      /* the timber-framed houses down the High Street */
      tudor(18, 70, 56, 26) + tudor(96, 70, 46, 22) + tudor(234, 70, 50, 24) + tudor(312, 76, 58, 28) +
      /* wall with the tags */
      '<rect x="0" y="146" width="400" height="52" fill="#6d4c44"/>' +
      '<path d="M0 158h400M0 170h400M0 182h400" stroke="#5a3d36" stroke-width="1"/>' +
      tag("REG", 24, 178, 20, SKY, -3) +
      tag("ELTON", 110, 190, 40, GOLD, -4) +
      tag("BLUESOLOGY", 262, 172, 15, PINK, -6) +
      '<g class="eljSpark"><path d="M236 156l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      bus +
      '<rect x="0" y="232" width="400" height="28" fill="#2f3238"/><rect x="0" y="230" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 248h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* London street name plates: white, black letters, red postcode */
      '<rect x="356" y="40" width="5" height="192" fill="#2a2a2a"/>' +
      '<rect x="262" y="46" width="134" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="329" y="61" text-anchor="middle" ' + F + ' font-size="11" fill="#111">HIGH STREET</text>' +
      '<text x="329" y="72" text-anchor="middle" ' + F + ' font-size="8" fill="#d41a1f">PINNER HA5</text>' +
      '<rect x="270" y="80" width="126" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="333" y="96" text-anchor="middle" ' + F + ' font-size="11" fill="#111">BRIDGE STREET</text>',
      sky("eljs5", "#9cc4e4", "#eee3cf"));
  }

  window.SCENES = { eljstation, eljpub, eljacademy, eljvicarage, eljcorner };
})();
