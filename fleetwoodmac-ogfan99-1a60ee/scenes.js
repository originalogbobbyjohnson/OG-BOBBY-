/* Fleetwood Mac game (GENRES: ROCK; INTERNATIONAL region: UK + EUROPE). Home = London: the band was formed in London in
   1967 by Peter Green, Mick Fleetwood and Jeremy Spencer (John McVie, an Ealing boy, joined weeks later). Mick Fleetwood came
   to London at 15 and lived with his sister in Notting Hill, where neighbour Peter Bardens gave him his first gig.
   Rooms: Notting Hill Gate (District/Circle platforms under the arched glass roof, Central line below), the Marquee Club on
   Wardour Street in Soho (the London club they played over and over), the National Jazz & Blues Festival at Windsor where
   they made their debut (the castle's Round Tower behind), the Ealing Club at Ealing Broadway (the basement where British
   blues started, John McVie's home ground), and Notting Hill Gate at Pembridge Road, W11, with the old Coronet's white
   dome behind.  Avoids Lil Peep's Portobello Road and every other UK kit's stop.
   CSS classes prefixed "fwm" (the page's anim-train is kept). No logos (no roundel), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fwmTw{0%,100%{opacity:1}50%{opacity:.25}}.fwmTw{animation:fwmTw 1.7s ease-in-out infinite}.fwmT2{animation-delay:.55s}.fwmT3{animation-delay:1.1s}' +
    '@keyframes fwmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.fwmBob{animation:fwmBob .8s ease-in-out infinite}.fwmBb2{animation-delay:.4s}' +
    '@keyframes fwmCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.fwmCloud{animation:fwmCloud 32s linear infinite}.fwmC2{animation-delay:-16s}' +
    '@keyframes fwmBulb{0%,100%{opacity:1}50%{opacity:.35}}.fwmBulb{animation:fwmBulb .9s steps(2) infinite}.fwmB2{animation-delay:.45s}' +
    '@keyframes fwmNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-60px);opacity:0}}.fwmNote{animation:fwmNote 3s linear infinite}.fwmN2{animation-delay:1s}.fwmN3{animation-delay:2s}' +
    '@keyframes fwmFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.fwmFlag{transform-box:fill-box;transform-origin:0 50%;animation:fwmFlag 1.3s ease-in-out infinite}' +
    '@keyframes fwmBeam{0%,100%{opacity:.12}50%{opacity:.5}}.fwmBeam{animation:fwmBeam 2s ease-in-out infinite}.fwmBm2{animation-delay:1s}' +
    '@keyframes fwmBus{0%{transform:translateX(-140px)}100%{transform:translateX(560px)}}.fwmBus{animation:fwmBus 11s linear infinite}' +
    '@keyframes fwmSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.fwmSpark{transform-box:fill-box;transform-origin:50% 50%;animation:fwmSpark 1.4s ease-in-out infinite}.fwmS2{animation-delay:.6s}' +
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
  const GOLD = "#d9b45a", PURP = "#7a2e8a", CREAM = "#efe6cf", CEN = "#dc241f", CIR = "#ffd300", DIS = "#00782a";
  const cloud = (x, y, cls) => '<g class="fwmCloud' + (cls || '') + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const bricks = (x, y, w, h, c, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8"/>';
    return s;
  };
  const crowd = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 6 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="fwmBob' + (i % 2 ? ' fwmBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 12) + '" r="5"/><rect x="' + (x - 6) + '" y="' + (y - 6) + '" width="12" height="16" rx="4"/></g>';
    }
    return s;
  };
  const bul = (x, y, t, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '"/><text x="' + x + '" y="' + (y + 3) + '" text-anchor="middle" ' + F + ' font-size="7" fill="' + (tc || "#fff") + '">' + t + '</text>';
  const note = (x, y, cls) => '<g class="fwmNote' + (cls || '') + '" fill="' + GOLD + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14"/></g>';

  /* 1. Notting Hill Gate: the District and Circle platforms in the open cutting under the arched iron-and-glass roof,
        a white train with red doors pulling in, the black station sign with the three line bullets */
  function fwmstation() {
    let ribs = "";
    for (let i = 0; i < 11; i++) ribs += '<path d="M' + (i * 40) + ' 104q0 -86 0 -86" stroke="#2c4a3a" stroke-width="3"/>';
    let panes = "";
    for (let i = 0; i < 20; i++) panes += '<path d="M' + (i * 20) + ' 18v86" stroke="#9fc0c8" stroke-width=".8" opacity=".6"/>';
    const train = '<g class="anim-train">' +
      '<path d="M20 110h270q24 0 30 22v40H20z" fill="#f4f4f2" stroke="#222" stroke-width="2"/>' +
      '<rect x="20" y="160" width="300" height="12" fill="#0019a8"/>' +
      [44, 140, 236].map(x => '<rect x="' + x + '" y="120" width="34" height="40" fill="' + CEN + '" stroke="#7a1010"/><path d="M' + (x + 17) + ' 120v40" stroke="#7a1010"/><rect x="' + (x + 3) + '" y="124" width="12" height="16" fill="#2a3440"/><rect x="' + (x + 19) + '" y="124" width="12" height="16" fill="#2a3440"/>').join("") +
      [84, 182].map(x => '<rect x="' + x + '" y="122" width="48" height="20" rx="3" fill="#2a3440"/>').join("") +
      '<path d="M284 122h16q14 4 18 18h-34z" fill="#2a3440"/><rect x="306" y="164" width="9" height="5" rx="1" fill="#fff6c8"/>' +
      '<circle cx="60" cy="174" r="6" fill="#222"/><circle cx="110" cy="174" r="6" fill="#222"/><circle cx="230" cy="174" r="6" fill="#222"/><circle cx="280" cy="174" r="6" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fwms1)"/>' +
      /* arched glass roof */
      '<path d="M0 104V40q200 -54 400 0v64z" fill="#cfe2e6" opacity=".55"/>' + panes + ribs +
      '<path d="M0 40q200 -54 400 0" stroke="#2c4a3a" stroke-width="5" fill="none"/><path d="M0 104h400" stroke="#2c4a3a" stroke-width="4"/>' +
      /* brick cutting walls */
      bricks(0, 104, 400, 76, "#8a5a3e", "#6e4430") +
      '<rect x="0" y="176" width="400" height="6" fill="#555"/><rect x="0" y="182" width="400" height="6" fill="#888"/>' +
      train +
      /* platform */
      '<rect x="0" y="188" width="400" height="72" fill="#5a5650"/><rect x="0" y="188" width="400" height="8" fill="#e8d24a"/>' +
      '<rect x="0" y="196" width="400" height="3" fill="#f4f4f4"/>' +
      /* station sign (no roundel): black board, white letters, line bullets */
      '<rect x="74" y="208" width="252" height="38" rx="3" fill="#111" stroke="#444"/>' +
      '<text x="168" y="232" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">NOTTING HILL GATE</text>' +
      bul(260, 227, "CEN", CEN) + bul(283, 227, "CIR", CIR, "#000") + bul(306, 227, "DIS", DIS),
      sky("fwms1", "#a9c6d6", "#e8eef0"));
  }

  /* 2. The Marquee Club, Wardour Street, Soho: a narrow black frontage with a bulb-lit canopy, blues posters, a queue
        waiting on the pavement, notes drifting out of the door */
  function fwmmarquee() {
    let bulbs = "";
    for (let i = 0; i < 18; i++) bulbs += '<circle cx="' + (112 + i * 10) + '" cy="96" r="2.6" fill="#ffe08a" class="fwmBulb' + (i % 2 ? ' fwmB2' : '') + '"/><circle cx="' + (112 + i * 10) + '" cy="130" r="2.6" fill="#ffe08a" class="fwmBulb' + (i % 2 ? '' : ' fwmB2') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fwms2)"/>' +
      /* Soho buildings */
      bricks(0, 20, 100, 190, "#6a3a2a", "#4e2a1e") + bricks(300, 30, 100, 180, "#4a4a5a", "#3a3a48") +
      [0, 1, 2].map(r => '<rect x="20" y="' + (40 + r * 44) + '" width="22" height="30" fill="#ffd27a" opacity=".75"/><rect x="58" y="' + (40 + r * 44) + '" width="22" height="30" fill="#2a2030"/>' +
        '<rect x="320" y="' + (50 + r * 44) + '" width="22" height="30" fill="#2a2030"/><rect x="358" y="' + (50 + r * 44) + '" width="22" height="30" fill="#ffd27a" opacity=".75"/>').join("") +
      /* the club front */
      '<rect x="100" y="10" width="200" height="200" fill="#1a1a1e"/>' +
      '<rect x="104" y="90" width="192" height="46" fill="#111" stroke="#ffe08a" stroke-width="1.5"/>' + bulbs +
      '<text x="200" y="121" text-anchor="middle" ' + F + ' font-size="20" letter-spacing="4" fill="#fff">MARQUEE</text>' +
      '<text x="200" y="76" text-anchor="middle" ' + F + ' font-size="8" fill="' + GOLD + '">WARDOUR STREET · SOHO W1</text>' +
      '<rect x="168" y="146" width="64" height="64" fill="#3a1a12"/><rect x="172" y="150" width="56" height="60" fill="#e8a040" opacity=".55" class="fwmBeam"/>' +
      note(186, 166) + note(206, 172, ' fwmN2') + note(196, 160, ' fwmN3') +
      /* posters */
      '<rect x="112" y="150" width="44" height="54" fill="' + CREAM + '"/><text x="134" y="166" text-anchor="middle" ' + F + ' font-size="7" fill="' + PURP + '">BLUES</text><text x="134" y="178" text-anchor="middle" ' + F + ' font-size="7" fill="#111">TONIGHT</text><path d="M118 188h32M118 194h24" stroke="#888" stroke-width="2"/>' +
      '<rect x="244" y="150" width="44" height="54" fill="' + GOLD + '"/><text x="266" y="168" text-anchor="middle" ' + F + ' font-size="6.5" fill="#111">THE MAC</text><text x="266" y="180" text-anchor="middle" ' + F + ' font-size="6.5" fill="#111">LIVE</text><path d="M250 190h32M250 196h24" stroke="#5a4a2a" stroke-width="2"/>' +
      /* pavement + queue */
      '<rect x="0" y="210" width="400" height="50" fill="#5a5a60"/><rect x="0" y="210" width="400" height="5" fill="#8a8a90"/>' +
      crowd(236, 8, 6, 160, ["#111", "#2a1a3a", "#3a2a1a"]) + crowd(236, 6, 240, 400, ["#111", "#2a1a3a"]),
      sky("fwms2", "#120e24", "#3a2a4a"));
  }

  /* 3. The National Jazz & Blues Festival at Windsor, their first-ever show: a summer stage in the meadow, a big crowd,
        Windsor Castle's Round Tower on its mound behind with the flag flying */
  function fwmwindsor() {
    let merlons = "";
    for (let i = 0; i < 9; i++) merlons += '<rect x="' + (226 + i * 10) + '" y="34" width="6" height="8" fill="#c8bfa8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fwms3)"/>' + cloud(70, 30) + cloud(260, 20, ' fwmC2') +
      /* castle: curtain wall + round tower on the mound */
      '<path d="M150 120q70 -50 140 0z" fill="#6f9a5a"/>' +
      '<rect x="222" y="42" width="90" height="60" rx="8" fill="#c8bfa8" stroke="#8a826e" stroke-width="1.5"/>' + merlons +
      '<rect x="252" y="12" width="3" height="24" fill="#555"/><g class="fwmFlag"><rect x="255" y="12" width="26" height="15" fill="#1d3a8a"/><path d="M255 12l26 15M281 12l-26 15" stroke="#fff" stroke-width="3"/><path d="M255 12l26 15M281 12l-26 15" stroke="' + CEN + '" stroke-width="1"/><path d="M268 12v15M255 19.5h26" stroke="#fff" stroke-width="5"/><path d="M268 12v15M255 19.5h26" stroke="' + CEN + '" stroke-width="2.6"/></g>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (234 + i * 20) + '" y="60" width="6" height="12" rx="3" fill="#4a463c"/>').join("") +
      '<rect x="110" y="96" width="250" height="30" fill="#bfb69e"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => '<rect x="' + (110 + i * 21) + '" y="90" width="12" height="7" fill="#bfb69e"/>').join("") +
      '<rect x="96" y="80" width="26" height="46" fill="#c8bfa8"/><rect x="348" y="84" width="24" height="42" fill="#c8bfa8"/>' +
      '<path d="M0 126q200 -16 400 0v134H0z" fill="#7fae5a"/>' +
      /* the festival stage */
      '<path d="M40 70h150l14 20H26z" fill="' + CREAM + '" stroke="#7a6a4a" stroke-width="1.5"/>' +
      '<rect x="34" y="90" width="164" height="66" fill="#2a2420"/><rect x="30" y="156" width="172" height="12" fill="#6a4a2a"/>' +
      '<rect x="30" y="90" width="5" height="78" fill="#7a6a4a"/><rect x="197" y="90" width="5" height="78" fill="#7a6a4a"/>' +
      '<path d="M70 92l-26 64h52zM160 92l-26 64h52z" fill="#fff3c4" class="fwmBeam"/>' +
      '<g fill="#111"><circle cx="80" cy="126" r="6"/><rect x="73" y="132" width="14" height="22" rx="4"/><path d="M68 140l28 -6" stroke="#8a5a2a" stroke-width="4"/>' +
      '<circle cx="152" cy="126" r="6"/><rect x="145" y="132" width="14" height="22" rx="4"/><path d="M142 142l26 -8" stroke="#3a3a3a" stroke-width="4"/></g>' +
      '<ellipse cx="116" cy="146" rx="13" ry="8" fill="#555"/><ellipse cx="116" cy="140" rx="13" ry="3" fill="#ddd"/><circle cx="116" cy="130" r="6" fill="#111"/>' +
      note(60, 106) + note(176, 102, ' fwmN2') +
      '<text x="116" y="84" text-anchor="middle" ' + F + ' font-size="7" fill="' + PURP + '">JAZZ &amp; BLUES FESTIVAL</text>' +
      /* crowd in the meadow */
      crowd(208, 18, 0, 400, ["#3a2a4a", "#6a3a2a", "#2a4a3a", "#5a4a2a"]) + crowd(242, 16, 10, 400, ["#4a2a2a", "#2a3a5a", "#5a5a2a"]) +
      '<rect x="0" y="248" width="400" height="12" fill="#5f8a44"/>',
      sky("fwms3", "#78b4e0", "#f2e6c4"));
  }

  /* 4. The Ealing Club, Ealing Broadway: a parade of shops, steps down to the basement club with blue light spilling out,
        a harmonica-and-guitar sound rising - British blues was born down there, on John McVie's home turf */
  function fwmealing() {
    return svg(
      '<rect width="400" height="260" fill="url(#fwms4)"/>' +
      /* parade of shops with flats above */
      bricks(0, 40, 400, 120, "#9a5a3e", "#7a4430") +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (14 + i * 50) + '" y="54" width="24" height="32" fill="' + (i % 3 ? "#2a2a3a" : "#ffd27a") + '" stroke="' + CREAM + '" stroke-width="2"/>').join("") +
      '<rect x="0" y="96" width="400" height="10" fill="' + CREAM + '"/>' +
      '<rect x="0" y="106" width="130" height="56" fill="#2a5a4a"/><rect x="10" y="114" width="110" height="40" fill="#cfe2e6" opacity=".6"/>' +
      '<rect x="270" y="106" width="130" height="56" fill="#5a2a3a"/><rect x="280" y="114" width="110" height="40" fill="#f2d8a8" opacity=".6"/>' +
      '<rect x="0" y="100" width="130" height="10" fill="#1a3a2e"/><rect x="270" y="100" width="130" height="10" fill="#3a1a26"/>' +
      '<text x="65" y="108" text-anchor="middle" ' + F + ' font-size="7" fill="' + CREAM + '">TEA ROOMS</text>' +
      '<text x="335" y="108" text-anchor="middle" ' + F + ' font-size="7" fill="' + CREAM + '">RECORDS</text>' +
      '<rect x="0" y="162" width="400" height="98" fill="#7a7a80"/><rect x="0" y="162" width="400" height="4" fill="#a8a8b0"/>' +
      /* the club: steps down to a basement door */
      '<rect x="130" y="106" width="140" height="56" fill="#1a1a22"/>' +
      '<rect x="146" y="112" width="108" height="16" fill="#111" stroke="' + GOLD + '"/>' +
      '<text x="200" y="124" text-anchor="middle" ' + F + ' font-size="9" fill="' + GOLD + '">THE EALING CLUB</text>' +
      '<path d="M150 162h100l-14 40h-72z" fill="#3a3a44"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (154 + i * 3) + '" y="' + (166 + i * 8) + '" width="' + (92 - i * 6) + '" height="3" fill="#6a6a74"/>').join("") +
      '<rect x="178" y="170" width="44" height="32" fill="#2a6ad8" opacity=".6" class="fwmBeam"/><rect x="182" y="174" width="36" height="28" fill="#0e1430"/>' +
      note(192, 166) + note(206, 160, ' fwmN2') + note(198, 154, ' fwmN3') +
      /* railings */
      '<path d="M146 162v-14M156 162v-14M244 162v-14M254 162v-14M146 150h12M242 150h12" stroke="#111" stroke-width="2"/>' +
      '<path d="M0 230h400" stroke="#5a5a60" stroke-width="2"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="8" fill="' + CREAM + '">EALING BROADWAY · W5</text>',
      sky("fwms4", "#5a6a8a", "#c8b8c8"));
  }

  /* 5. Notting Hill Gate at Pembridge Road, W11: London street plates, FLEETWOOD MAC tagged on the wall, the old Coronet's
        white stucco front and dome behind, a red bus rolling past */
  function fwmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fwms5)"/>' + cloud(60, 26) + cloud(300, 40, ' fwmC2') +
      /* the Coronet: white stucco front, columns, a dome on top */
      '<rect x="210" y="56" width="150" height="90" fill="#f2efe6" stroke="#b8b2a2" stroke-width="1.5"/>' +
      '<path d="M250 56q35 -40 70 0z" fill="#e8e2d2" stroke="#b8b2a2" stroke-width="1.5"/><rect x="282" y="10" width="6" height="12" fill="#b8b2a2"/><path d="M276 22h18l-4 -6h-10z" fill="#e8e2d2"/>' +
      '<rect x="206" y="52" width="158" height="6" fill="#e0dacb"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (220 + i * 26) + '" y="64" width="8" height="70" fill="#e0dacb"/>').join("") +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (231 + i * 26) + ' 100q8 -14 16 0v26h-16z" fill="#3a3a4a"/>').join("") +
      /* terrace to the left */
      '<rect x="0" y="66" width="200" height="80" fill="#e8c8d0"/><rect x="0" y="62" width="200" height="6" fill="#d4b0ba"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (12 + i * 32) + '" y="78" width="16" height="22" fill="#3a3a4a"/>').join("") +
      /* red bus going by */
      '<g class="fwmBus"><rect x="0" y="118" width="104" height="44" rx="5" fill="' + CEN + '" stroke="#7a1010" stroke-width="1.5"/>' +
      '<rect x="6" y="124" width="92" height="12" fill="#1a1a2a"/><rect x="6" y="142" width="92" height="10" fill="#1a1a2a"/>' +
      '<circle cx="22" cy="162" r="6" fill="#222"/><circle cx="84" cy="162" r="6" fill="#222"/></g>' +
      /* wall with tags */
      bricks(0, 150, 400, 56, "#6e5a4a", "#584838") +
      tag("FLEETWOOD MAC", 22, 188, 30, GOLD, -4) +
      tag("THE CHAIN", 268, 196, 18, "#c88ad8", -3) +
      '<g class="fwmSpark"><path d="M250 162l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="fwmSpark fwmS2"><path d="M14 162l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="206" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="214" width="400" height="46" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* London street name plates: white, black letters, red borough line */
      '<rect x="8" y="24" width="150" height="32" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="83" y="40" text-anchor="middle" ' + F + ' font-size="11" fill="#111">NOTTING HILL GATE</text>' +
      '<text x="83" y="51" text-anchor="middle" ' + F + ' font-size="7" fill="' + CEN + '">W11</text>' +
      '<rect x="8" y="62" width="150" height="32" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="83" y="78" text-anchor="middle" ' + F + ' font-size="11" fill="#111">PEMBRIDGE ROAD</text>' +
      '<text x="83" y="89" text-anchor="middle" ' + F + ' font-size="7" fill="' + CEN + '">W11</text>',
      sky("fwms5", "#8cb8dc", "#f2e2d2"));
  }

  window.SCENES = { fwmstation, fwmmarquee, fwmwindsor, fwmealing, fwmcorner };
})();
