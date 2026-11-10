/* Ghetts scenes (Regions tab: UK + EUROPE; Plaistow, Newham E13 - Justin Clarke, born in Plaistow, St Bonaventure's school in Forest Gate,
   came up in East London grime on pirate radio with N.A.S.T.Y Crew, then The Movement).
   1 Plaistow station (District + Hammersmith & City, sub-surface in an open cutting): brick platform wall, a train pulling in.
   2 A tower-block rooftop at night: the pirate radio aerial and a little studio shed, signal rings pulsing (where grime MCs came up).
   3 St Bonaventure's, Forest Gate: the red-brick school on St Antony's Road, its cross on the gable, a bell swinging.
   4 Abbey Mills Pumping Station from the Greenway: the Victorian "cathedral of sewage" with its cross-shaped plan, lantern dome
      and polychrome brick, the Greenway path in front, a bike rolling past.
   5 Balaam Street and Barking Road, Plaistow E13: London street signs, GHETTS tagged, the Canary Wharf towers behind.
   CSS classes prefixed "ght" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ghtWin{0%,100%{opacity:.15}50%{opacity:1}}.ghtW{animation:ghtWin 3s steps(1) infinite}.ghtW2{animation-delay:-1s}.ghtW3{animation-delay:-2s}' +
    '@keyframes ghtRing{0%{transform:scale(.3);opacity:.9}100%{transform:scale(1.6);opacity:0}}.ghtRing{transform-box:fill-box;transform-origin:center;animation:ghtRing 2.4s ease-out infinite}.ghtR2{animation-delay:-.8s}.ghtR3{animation-delay:-1.6s}' +
    '@keyframes ghtBell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.ghtBell{transform-box:fill-box;transform-origin:50% 0;animation:ghtBell 1.6s ease-in-out infinite}' +
    '@keyframes ghtBike{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.ghtBike{animation:ghtBike 8s linear infinite}' +
    '@keyframes ghtCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.ghtCloud{animation:ghtCloud 26s linear infinite}.ghtC2{animation-delay:-13s}' +
    '@keyframes ghtSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ghtSp{animation:ghtSp 1.4s ease-out infinite}.ghtSp2{animation-delay:.5s}' +
    '@keyframes ghtBlink{0%,100%{opacity:1}50%{opacity:.2}}.ghtBlink{animation:ghtBlink 1.2s steps(1) infinite}' +
    '@keyframes ghtStar{0%,100%{opacity:.2}50%{opacity:1}}.ghtStar{animation:ghtStar 2.2s ease-in-out infinite}.ghtSt2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const DIS = "#00782a", HAC = "#f3a9bb", GOLD = "#f2b134", BRICK = "#9a4a32";
  const clouds = '<g fill="#fff" opacity=".7"><g class="ghtCloud"><ellipse cx="40" cy="40" rx="34" ry="10"/><ellipse cx="60" cy="34" rx="20" ry="9"/></g>' +
    '<g class="ghtCloud ghtC2"><ellipse cx="40" cy="70" rx="28" ry="8"/><ellipse cx="56" cy="64" rx="16" ry="8"/></g></g>';
  const bricks = (x0, y0, w, h, c) => { let s = ""; for (let y = y0; y < y0 + h; y += 9) for (let x = x0 + (((y - y0) / 9) % 2 ? -12 : 0); x < x0 + w; x += 24) s += '<rect x="' + Math.max(x0, x) + '" y="' + y + '" width="' + Math.min(22, x0 + w - Math.max(x0, x)) + '" height="7" fill="' + c + '"/>'; return s; };

  /* 1. Plaistow station - open cutting, brick walls, District / H&C train */
  function ghtstation() {
    let wins = "";
    for (const x of [30, 66, 150, 186, 270]) wins += '<rect x="' + x + '" y="146" width="26" height="20" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 138h300q26 0 30 24v36H10z" fill="#f2f2ee" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="10" y="138" width="330" height="7" fill="#d0202a"/>' + wins +
      '<g fill="#d0202a"><rect x="112" y="148" width="20" height="48"/><rect x="232" y="148" width="20" height="48"/></g>' +
      '<g fill="#9fb3c4"><rect x="115" y="152" width="6" height="22"/><rect x="123" y="152" width="6" height="22"/><rect x="235" y="152" width="6" height="22"/><rect x="243" y="152" width="6" height="22"/></g>' +
      '<rect x="10" y="186" width="330" height="7" fill="#1f3f9a"/><path d="M314 148q20 2 22 22h-22z" fill="#1d2a33"/><rect x="326" y="180" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="50" cy="201" r="6"/><circle cx="74" cy="201" r="6"/><circle cx="270" cy="201" r="6"/><circle cx="294" cy="201" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghtS1)"/>' + clouds +
      '<rect x="0" y="40" width="400" height="100" fill="#7a3a26"/>' + bricks(0, 40, 400, 100, BRICK) +
      '<g fill="#4a2a1e"><rect x="40" y="62" width="30" height="40" rx="15"/><rect x="330" y="62" width="30" height="40" rx="15"/></g>' +
      '<rect x="0" y="36" width="400" height="6" fill="#5a2c1e"/>' +
      '<path d="M0 130h400v80H0z" fill="#2a241e"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#6a645c"/><rect x="0" y="206" width="400" height="6" fill="#e8d34a"/>' +
      '<g transform="translate(96 62)"><rect width="208" height="40" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="70" y="27" ' + F + ' font-size="17" fill="#fff" text-anchor="middle">Plaistow</text>' +
      '<rect x="132" y="10" width="26" height="20" rx="10" fill="' + DIS + '"/><text x="145" y="25" ' + F + ' font-size="12" fill="#fff" text-anchor="middle">D</text>' +
      '<rect x="162" y="10" width="40" height="20" rx="10" fill="' + HAC + '"/><text x="182" y="25" ' + F + ' font-size="11" fill="#111" text-anchor="middle">H&amp;C</text></g>' +
      '<g ' + F + ' font-size="9" fill="#fff"><text x="14" y="236">DISTRICT + HAMMERSMITH &amp; CITY</text><text x="300" y="236">WAY OUT</text></g>' +
      '<path d="M352 230l10 0l-4 -4m4 4l-4 4" stroke="#fff" stroke-width="2" fill="none"/>',
      sky('ghtS1', '#6c8fc0', '#d9e4ee'));
  }

  /* 2. Tower-block rooftop pirate radio */
  function ghtradio() {
    let win = "", k = 0;
    const cls = ["ghtW", "ghtW ghtW2", "ghtW ghtW3", ""];
    for (let y = 120; y < 250; y += 14) for (let x = 120; x < 290; x += 18) { k++; win += '<rect x="' + x + '" y="' + y + '" width="10" height="7" fill="#ffd56a" class="' + cls[k % 4] + '" opacity=".6"/>'; }
    let stars = "";
    [[30, 30], [80, 60], [150, 24], [340, 40], [370, 90], [250, 30], [60, 100]].forEach((p, i) => { stars += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.6" fill="#fff" class="ghtStar' + (i % 2 ? ' ghtSt2' : '') + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#ghtS2)"/>' + stars +
      '<g fill="#1c2233"><rect x="0" y="170" width="70" height="90"/><rect x="320" y="150" width="80" height="110"/><rect x="40" y="200" width="60" height="60"/></g>' +
      '<g fill="#ffd56a" opacity=".5"><rect x="10" y="184" width="8" height="6"/><rect x="40" y="200" width="8" height="6"/><rect x="336" y="170" width="8" height="6"/><rect x="366" y="196" width="8" height="6"/></g>' +
      '<rect x="110" y="104" width="190" height="156" fill="#5f6470" stroke="#3a3e48" stroke-width="2"/>' + win +
      '<rect x="104" y="98" width="202" height="8" fill="#4a4e58"/>' +
      '<rect x="230" y="70" width="54" height="30" fill="#7a7f8a" stroke="#3a3e48" stroke-width="1.5"/><rect x="240" y="78" width="16" height="12" fill="#ffd56a" class="ghtBlink"/>' +
      '<rect x="262" y="80" width="12" height="20" fill="#3a3e48"/>' +
      '<g stroke="#c9ccd2" stroke-width="2.5" fill="none"><path d="M170 98V24"/><path d="M160 36h20M156 50h28M152 64h36"/><path d="M170 98l-18 0M170 98l18 0"/></g>' +
      '<circle cx="170" cy="22" r="3" fill="#e94b3c" class="ghtBlink"/>' +
      '<g fill="none" stroke="' + GOLD + '" stroke-width="2"><circle cx="170" cy="22" r="14" class="ghtRing"/><circle cx="170" cy="22" r="14" class="ghtRing ghtR2"/><circle cx="170" cy="22" r="14" class="ghtRing ghtR3"/></g>' +
      '<g transform="translate(229 54)"><rect width="56" height="16" rx="3" fill="#111" stroke="' + GOLD + '"/><text x="28" y="12" ' + F + ' font-size="9" fill="' + GOLD + '" text-anchor="middle">ON AIR</text></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#0b1026"/><text x="200" y="252" ' + F + ' font-size="10" fill="#e6e8ee" text-anchor="middle" letter-spacing="2">EAST LONDON PIRATE RADIO</text>',
      sky('ghtS2', '#0b1026', '#3a2a5a'));
  }

  /* 3. St Bonaventure's, Forest Gate - red-brick school, cross on the gable, bell */
  function ghtschool() {
    let wins = "";
    for (const x of [96, 132, 168, 232, 268, 304]) for (const y of [120, 164]) wins += '<rect x="' + x + '" y="' + y + '" width="20" height="28" fill="#cfe2ee" stroke="#f2ead8" stroke-width="3"/><path d="M' + (x + 10) + ' ' + y + 'v28M' + x + ' ' + (y + 14) + 'h20" stroke="#f2ead8" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghtS3)"/>' + clouds +
      '<g fill="#2f6b3a"><circle cx="30" cy="190" r="26"/><circle cx="372" cy="186" r="28"/></g>' +
      '<rect x="80" y="104" width="250" height="110" fill="' + BRICK + '"/>' + bricks(80, 104, 250, 110, "#ad5a3e") +
      '<path d="M170 104l35 -46l35 46z" fill="' + BRICK + '" stroke="#6a2e1e" stroke-width="2"/>' +
      '<g fill="#f2ead8"><rect x="202" y="40" width="6" height="22"/><rect x="196" y="46" width="18" height="5"/></g>' +
      '<g class="ghtBell"><path d="M197 72q8 -10 16 0l2 12h-20z" fill="' + GOLD + '" stroke="#7a5a10" stroke-width="1.5"/><circle cx="205" cy="86" r="2" fill="#7a5a10"/></g>' +
      '<rect x="78" y="100" width="254" height="6" fill="#f2ead8"/>' + wins +
      '<rect x="192" y="170" width="26" height="44" fill="#3a2a22" stroke="#f2ead8" stroke-width="3"/><path d="M192 170q13 -14 26 0" fill="none" stroke="#f2ead8" stroke-width="3"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3c"/><rect x="0" y="214" width="400" height="5" fill="#9a958b"/>' +
      '<g transform="translate(120 230)"><rect width="160" height="20" rx="3" fill="#fff" stroke="#111"/><text x="80" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">ST ANTONY\'S ROAD E7</text></g>',
      sky('ghtS3', '#8ab9e2', '#e8f2f8'));
  }

  /* 4. Abbey Mills Pumping Station from the Greenway */
  function ghtmills() {
    const bike = '<g class="ghtBike"><g stroke="#111" stroke-width="2.5" fill="none"><circle cx="0" cy="230" r="9"/><circle cx="32" cy="230" r="9"/><path d="M0 230l12 -14h14l6 14M12 216l8 14h12M24 210h6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghtS4)"/>' + clouds +
      '<rect x="0" y="176" width="400" height="40" fill="#5c8a4a"/>' +
      '<rect x="110" y="110" width="180" height="76" fill="#c98a5a" stroke="#6a3e22" stroke-width="2"/>' +
      '<g fill="#e6d3a8"><rect x="110" y="128" width="180" height="5"/><rect x="110" y="152" width="180" height="5"/></g>' +
      '<g fill="#7a2e1e"><rect x="110" y="140" width="180" height="4"/></g>' +
      '<path d="M170 110v-24h60v24z" fill="#c98a5a" stroke="#6a3e22" stroke-width="2"/>' +
      '<path d="M178 86q22 -40 44 0z" fill="#6a7a74" stroke="#3a4642" stroke-width="2"/>' +
      '<rect x="194" y="50" width="12" height="18" fill="#c98a5a" stroke="#6a3e22" stroke-width="1.5"/><path d="M192 50q8 -14 16 0z" fill="#6a7a74"/><rect x="198" y="30" width="4" height="10" fill="' + GOLD + '"/>' +
      '<g fill="#3a2a22">' + [124, 150, 176, 212, 238, 264].map(x => '<path d="M' + x + ' 186v-26q7 -10 14 0v26z"/>').join("") + '</g>' +
      '<g fill="#e6d3a8">' + [124, 150, 176, 212, 238, 264].map(x => '<path d="M' + x + ' 160q7 -10 14 0" stroke="#e6d3a8" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<g fill="#2f6b3a"><circle cx="60" cy="168" r="22"/><circle cx="346" cy="166" r="24"/></g>' +
      '<rect x="0" y="212" width="400" height="30" fill="#c9b48a"/><rect x="0" y="242" width="400" height="18" fill="#4a6a3a"/>' + bike +
      '<g transform="translate(14 186)"><rect width="104" height="18" rx="3" fill="#fff" stroke="#111"/><text x="52" y="13" ' + F + ' font-size="9" fill="#111" text-anchor="middle">THE GREENWAY</text></g>',
      sky('ghtS4', '#e7a86a', '#f6dcb8'));
  }

  /* 5. Balaam Street and Barking Road - the corner, Canary Wharf behind */
  function ghtcorner() {
    const sign = (x, y, a, b) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="136" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="68" y="16" ' + F + ' font-size="12" fill="#111" text-anchor="middle">' + a + '</text><text x="68" y="28" ' + F + ' font-size="8" fill="#d0202a" text-anchor="middle">' + b + '</text></g>';
    let br = "";
    for (let y = 148; y < 226; y += 10) for (let x = (y / 10) % 2 ? 0 : -14; x < 400; x += 28) br += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a4a34"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ghtS5)"/>' + clouds +
      '<g fill="#8f9ab0" stroke="#5a6478" stroke-width="1.5">' +
      '<rect x="262" y="40" width="34" height="108"/><path d="M262 40l17 -18l17 18z"/>' +
      '<rect x="224" y="70" width="30" height="78"/><rect x="304" y="64" width="30" height="84"/><rect x="342" y="90" width="24" height="58"/></g>' +
      '<circle cx="279" cy="18" r="2.5" fill="#e94b3c" class="ghtBlink"/>' +
      '<g fill="#dfe6f0" opacity=".6">' + [48, 62, 76, 90, 104, 118, 132].map(y => '<rect x="268" y="' + y + '" width="22" height="3"/>').join("") + '</g>' +
      '<rect x="0" y="146" width="400" height="80" fill="#6b3726"/>' + br +
      tag("GHETTS", 30, 206, 50, GOLD, -5) + tag("E13", 250, 190, 30, HAC, 5) +
      '<g class="ghtSp"><circle cx="206" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ghtSp ghtSp2"><circle cx="214" cy="172" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a3c"/><rect x="0" y="226" width="400" height="4" fill="#9a958b"/>' +
      '<rect x="146" y="44" width="4" height="102" fill="#333"/>' +
      sign(12, 50, "BALAAM STREET", "E13 - NEWHAM") + sign(152, 92, "BARKING ROAD", "E13 - NEWHAM"),
      sky('ghtS5', '#f0a35e', '#6b8fc4'));
  }

  window.SCENES = { ghtstation, ghtradio, ghtschool, ghtmills, ghtcorner };
})();
