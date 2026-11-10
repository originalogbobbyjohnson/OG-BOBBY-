/* Imagine Dragons game (GENRES: ROCK; region LOS ANGELES + SOCAL - no Vegas region, Ekoh precedent; formed in Provo, Utah
   in 2008, moved to Las Vegas - Dan Reynolds's hometown - in 2009 and came up there: early sets at O'Sheas on the Strip,
   Beauty Bar and the Bunkhouse; Dan went to Bonanza High School; first EPs cut at Battle Born Studios in Las Vegas).
   Rooms: the Las Vegas Monorail at Harrah's & The LINQ (steps from where O'Sheas stood), the O'Sheas lounge stage,
   Bonanza High School (brown and gold, the Spring Mountains behind), a Las Vegas studio control room, and
   Las Vegas Blvd S at Flamingo Rd with the High Roller wheel turning behind.
   Avoids Ekoh / Dizzy Wright / Baby Keem / Kaskade / Celine Dion Vegas spots (Bonneville TC, Fremont St, the Welcome sign,
   Red Rock, the Strat, Allegiant Stadium, Lou Ruvo).
   CSS classes prefixed "idg" (the page's anim-train is kept). No logos, no casino names, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes idgTw{0%,100%{opacity:1}50%{opacity:.2}}.idgTw{animation:idgTw 1.6s ease-in-out infinite}.idgT2{animation-delay:.5s}.idgT3{animation-delay:1.1s}' +
    '@keyframes idgBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.idgBob{animation:idgBob .7s ease-in-out infinite}.idgBb2{animation-delay:.35s}' +
    '@keyframes idgHit{0%,100%{transform:rotate(0)}50%{transform:rotate(-28deg)}}.idgHit{transform-box:fill-box;transform-origin:100% 100%;animation:idgHit .5s ease-in-out infinite}' +
    '@keyframes idgPulse{0%,100%{opacity:.25}50%{opacity:.9}}.idgPulse{animation:idgPulse 1s ease-in-out infinite}.idgP2{animation-delay:.5s}' +
    '@keyframes idgFader{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.idgFd{animation:idgFader 2.4s ease-in-out infinite}.idgF2{animation-delay:.6s}.idgF3{animation-delay:1.2s}.idgF4{animation-delay:1.8s}' +
    '@keyframes idgVu{0%,100%{transform:scaleY(.3)}40%{transform:scaleY(1)}70%{transform:scaleY(.6)}}.idgVu{transform-box:fill-box;transform-origin:50% 100%;animation:idgVu .6s ease-in-out infinite}.idgV2{animation-delay:.2s}.idgV3{animation-delay:.4s}' +
    '@keyframes idgSpin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.idgSpin{transform-box:view-box;transform-origin:300px 96px;animation:idgSpin 60s linear infinite}' +
    '@keyframes idgFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.idgFlag{transform-box:fill-box;transform-origin:0 50%;animation:idgFlag 1.4s ease-in-out infinite}' +
    '@keyframes idgCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.idgCloud{animation:idgCloud 34s linear infinite}' +
    '@keyframes idgSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.idgSpark{transform-box:fill-box;transform-origin:50% 50%;animation:idgSpark 1.4s ease-in-out infinite}.idgS2{animation-delay:.6s}' +
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
  const RED = "#e8442e", GOLD = "#f7b733", TEAL = "#3fb6d8", BROWN = "#6b3f1f", SANDC = "#d9b98a", MONO = "#0072ce";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 71 + 13) % 400, y = y0 + ((i * 41) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.5) + '" fill="#fff" class="idgTw' + (i % 3 === 1 ? ' idgT2' : i % 3 === 2 ? ' idgT3' : '') + '"/>';
    }
    return s;
  };
  const palm = (x, y, s) => '<path d="M' + x + ' ' + y + 'q' + (3 * s) + ' ' + (-30 * s) + ' ' + (1 * s) + ' ' + (-60 * s) + '" stroke="#5a4028" stroke-width="' + (4 * s) + '" fill="none"/>' +
    '<g fill="#2f6b3a"><path d="M' + (x + s) + ' ' + (y - 60 * s) + 'q-22 -4 -30 10q14 -10 30 -10z"/><path d="M' + (x + s) + ' ' + (y - 60 * s) + 'q22 -4 30 10q-14 -10 -30 -10z"/><path d="M' + (x + s) + ' ' + (y - 60 * s) + 'q-14 -16 -28 -12q16 2 28 12z"/><path d="M' + (x + s) + ' ' + (y - 60 * s) + 'q14 -16 28 -12q-16 2 -28 12z"/></g>';
  const crowd = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 6 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="idgBob' + (i % 2 ? ' idgBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 12) + '" r="5"/><rect x="' + (x - 6) + '" y="' + (y - 6) + '" width="12" height="16" rx="4"/></g>';
    }
    return s;
  };
  const towers = (fill) => '<g fill="' + fill + '">' +
    '<rect x="8" y="58" width="30" height="80"/><rect x="44" y="40" width="22" height="98"/><path d="M72 138v-70l16 -16l16 16v70z"/>' +
    '<rect x="112" y="72" width="34" height="66"/><rect x="214" y="50" width="26" height="88"/><path d="M246 138v-60q14 -24 28 0v60z"/>' +
    '<rect x="282" y="34" width="20" height="104"/><rect x="308" y="62" width="40" height="76"/><rect x="354" y="46" width="24" height="92"/><rect x="382" y="70" width="18" height="68"/></g>';
  const winLights = () => {
    let s = "";
    for (let i = 0; i < 46; i++) {
      const x = [12, 20, 28, 48, 56, 78, 90, 116, 126, 136, 218, 228, 250, 262, 286, 294, 312, 322, 332, 358, 366, 386][i % 22], y = 64 + ((i * 17) % 66);
      s += '<rect x="' + x + '" y="' + y + '" width="4" height="3" fill="' + (i % 4 ? "#ffd27a" : TEAL) + '" class="idgTw' + (i % 3 ? ' idgT2' : '') + '"/>';
    }
    return s;
  };

  /* 1. Las Vegas Monorail, Harrah's & The LINQ: elevated concrete beam on columns, island platform canopy, the Strip glowing behind,
        a white-and-blue monorail train gliding in on top of the beam */
  function idgstation() {
    const train = '<g class="anim-train">' +
      '<path d="M24 118h250q30 0 40 24v22H24z" fill="#f4f6f8" stroke="#1d2a3a" stroke-width="2"/>' +
      '<path d="M24 150h290v8H24z" fill="' + MONO + '"/><path d="M24 158h290v4H24z" fill="' + TEAL + '"/>' +
      [40, 88, 136, 184, 232].map(x => '<rect x="' + x + '" y="126" width="36" height="18" rx="4" fill="#16202e"/>').join("") +
      '<path d="M280 126h14q12 4 16 16h-30z" fill="#16202e"/><rect x="302" y="152" width="8" height="4" rx="1" fill="#fff6c8"/>' +
      '<rect x="60" y="122" width="1.5" height="26" fill="#9aa4b0"/><rect x="156" y="122" width="1.5" height="26" fill="#9aa4b0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#idgs1)"/>' + stars(22, 6, 40) + towers("#241a3a") + winLights() +
      '<rect x="0" y="134" width="400" height="6" fill="#ff4fa3" opacity=".35" class="idgPulse"/>' +
      /* the beam + columns */
      '<rect x="0" y="164" width="400" height="16" fill="#c9c4bb" stroke="#8a857c" stroke-width="1.5"/>' +
      '<path d="M60 180h22l-4 80h-14zM300 180h22l-4 80h-14z" fill="#b5b0a6"/>' +
      train +
      /* island platform + canopy */
      '<rect x="0" y="186" width="400" height="12" fill="#8f8a82"/><rect x="0" y="198" width="400" height="62" fill="#3a3640"/>' +
      '<path d="M0 186h400" stroke="#f2c14e" stroke-width="3"/>' +
      '<path d="M0 96h400v6H0z" fill="#d8dde3"/><path d="M0 102h400" stroke="#8a95a3" stroke-width="2"/>' +
      '<rect x="140" y="102" width="4" height="16" fill="#8a95a3"/><rect x="256" y="102" width="4" height="16" fill="#8a95a3"/>' +
      /* black station sign with the stop name and the line bullet */
      '<rect x="96" y="206" width="208" height="34" rx="3" fill="#111" stroke="#444"/>' +
      '<text x="182" y="228" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">HARRAH\'S &amp; THE LINQ</text>' +
      '<circle cx="284" cy="223" r="11" fill="' + MONO + '"/><text x="284" y="227" text-anchor="middle" ' + F + ' font-size="8" fill="#fff">LVM</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="7" fill="#d8dde3">LAS VEGAS MONORAIL · THE STRIP</text>',
      sky("idgs1", "#140b2a", "#5b2a5a"));
  }

  /* 2. O'Sheas on the Strip: the little lounge stage where they played early sets - green walls, shamrock bunting,
        the band from behind, Dan's big floor drum, a crowd bobbing */
  function idgosheas() {
    let bunt = "";
    for (let i = 0; i < 16; i++) bunt += '<path d="M' + (i * 26) + ' 22l13 14l13 -14z" fill="' + (i % 3 === 0 ? "#2e9e4f" : i % 3 === 1 ? "#f4f1e6" : "#f08a24") + '"/>';
    const sham = (x, y) => '<g fill="#3fbf6a" class="idgSpark"><circle cx="' + x + '" cy="' + (y - 5) + '" r="4.5"/><circle cx="' + (x - 5) + '" cy="' + (y + 1) + '" r="4.5"/><circle cx="' + (x + 5) + '" cy="' + (y + 1) + '" r="4.5"/><rect x="' + (x - .8) + '" y="' + (y + 2) + '" width="1.6" height="8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0f3a22"/><rect width="400" height="150" fill="url(#idgs2)"/>' +
      '<path d="M0 20q100 12 200 0t200 0" stroke="#d9c27a" stroke-width="1.5" fill="none"/>' + bunt +
      sham(40, 70) + sham(360, 64) +
      /* chalkboard */
      '<rect x="20" y="88" width="80" height="50" rx="3" fill="#1b1b1b" stroke="#7a5a2a" stroke-width="4"/>' +
      '<text x="60" y="108" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="10" fill="#f4f1e6">LIVE TONIGHT</text>' +
      '<text x="60" y="126" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="9" fill="' + GOLD + '">4 SETS</text>' +
      /* stage lights */
      '<path d="M140 34l-30 106h60z" fill="#fff3c4" opacity=".14" class="idgPulse"/><path d="M260 34l-30 106h60z" fill="#ffd0a0" opacity=".14" class="idgPulse idgP2"/>' +
      '<rect x="128" y="30" width="24" height="8" rx="2" fill="#222"/><rect x="248" y="30" width="24" height="8" rx="2" fill="#222"/>' +
      /* stage */
      '<rect x="110" y="140" width="250" height="16" fill="#5a3a1e"/><rect x="110" y="156" width="250" height="6" fill="#3a2410"/>' +
      /* band from behind: guitar, bass, singer at the big drum, drummer kit */
      '<g fill="#111"><circle cx="150" cy="104" r="8"/><rect x="141" y="112" width="18" height="28" rx="5"/><path d="M134 122l40 -6" stroke="#8a5a2a" stroke-width="5"/>' +
      '<circle cx="320" cy="104" r="8"/><rect x="311" y="112" width="18" height="28" rx="5"/><path d="M306 120l40 -8" stroke="#3a3a3a" stroke-width="5"/></g>' +
      '<g fill="#111"><circle cx="234" cy="98" r="9"/><rect x="224" y="107" width="20" height="33" rx="5"/></g>' +
      '<rect x="252" y="112" width="6" height="26" rx="3" fill="#111" class="idgHit"/>' +
      '<ellipse cx="270" cy="128" rx="20" ry="13" fill="' + RED + '" stroke="#111" stroke-width="2"/><ellipse cx="270" cy="128" rx="14" ry="8" fill="#f4e6c8"/>' +
      '<rect x="186" y="118" width="28" height="22" rx="3" fill="#2a2a2a"/><ellipse cx="200" cy="118" rx="14" ry="4" fill="#cfc6b0"/>' +
      '<path d="M178 108h14M208 104h14" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* crowd */
      crowd(214, 16, 0, 400, ["#1a1a1a", "#262626", "#121212"]) +
      '<rect x="0" y="222" width="400" height="38" fill="#0a1f13"/>',
      sky("idgs2", "#0c2e1b", "#1f6a3c"));
  }

  /* 3. Bonanza High School, Dan Reynolds's school on Del Rey Ave: a long low tan building with brown and gold trim,
        the Spring Mountains behind, palms, the flag waving */
  function idgbonanza() {
    let wins = "";
    for (let i = 0; i < 10; i++) wins += '<rect x="' + (40 + i * 30) + '" y="150" width="20" height="16" fill="#3a2a1a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#idgs3)"/>' +
      '<g class="idgCloud" fill="#fff" opacity=".8"><ellipse cx="80" cy="34" rx="26" ry="8"/><ellipse cx="96" cy="28" rx="16" ry="8"/></g>' +
      '<path d="M0 118l40 -30l30 14l46 -40l40 26l34 -18l50 34l40 -22l46 26l36 -16l38 22v30H0z" fill="#8a7a8e"/>' +
      '<path d="M0 126l60 -16l50 10l70 -20l60 16l60 -12l100 18v20H0z" fill="#b89a7a"/>' +
      /* flag */
      '<rect x="338" y="62" width="3" height="80" fill="#888"/><g class="idgFlag"><rect x="341" y="64" width="30" height="18" fill="#b22234"/><rect x="341" y="64" width="12" height="9" fill="#3c3b6e"/><path d="M353 68h18M341 75h30M341 79h30" stroke="#fff" stroke-width="1.5"/></g>' +
      palm(18, 200, 1.1) + palm(384, 198, 1) +
      /* the building */
      '<rect x="24" y="132" width="316" height="68" fill="' + SANDC + '" stroke="#8a6a44" stroke-width="1.5"/>' +
      '<rect x="24" y="126" width="316" height="10" fill="' + BROWN + '"/><rect x="24" y="136" width="316" height="4" fill="' + GOLD + '"/>' + wins +
      '<rect x="130" y="110" width="132" height="26" fill="' + BROWN + '"/>' +
      '<text x="196" y="128" text-anchor="middle" ' + F + ' font-size="9" fill="' + GOLD + '">BONANZA HIGH SCHOOL</text>' +
      '<rect x="176" y="170" width="40" height="30" fill="#4a2e16"/><path d="M196 170v30" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#cdb48e"/><rect x="0" y="200" width="400" height="6" fill="#a8916c"/>' +
      [0, 1, 2, 3].map(i => { const x = 120 + i * 44, y = 232 - (i % 2) * 8; return '<g fill="' + BROWN + '" opacity=".75"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4"/><circle cx="' + (x - 5) + '" cy="' + (y - 6) + '" r="1.8"/><circle cx="' + (x - 1) + '" cy="' + (y - 8) + '" r="1.8"/><circle cx="' + (x + 3) + '" cy="' + (y - 8) + '" r="1.8"/><circle cx="' + (x + 7) + '" cy="' + (y - 6) + '" r="1.8"/></g>'; }).join(""),
      sky("idgs3", "#5aa6e0", "#f6d8a8"));
  }

  /* 4. A Las Vegas studio control room (they cut their first EPs at Battle Born Studios): the console with moving faders,
        VU meters jumping, the window onto the live room with the big drum, the red light on */
  function idgstudio() {
    let faders = "";
    for (let i = 0; i < 16; i++) faders += '<rect x="' + (34 + i * 21) + '" y="196" width="3" height="34" fill="#111"/><rect x="' + (29 + i * 21) + '" y="212" width="13" height="7" rx="1" fill="' + (i % 4 === 0 ? RED : "#d8d8d8") + '" class="idgFd idgF' + (i % 4 + 1) + '"/>';
    let knobs = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 16; i++) knobs += '<circle cx="' + (35 + i * 21) + '" cy="' + (166 + r * 10) + '" r="3" fill="' + (r === 1 ? TEAL : "#bbb") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1612"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a221c"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (i * 60) + '" y="0" width="54" height="40" fill="#3a2e24"/>').join("") +
      /* window to the live room */
      '<rect x="70" y="46" width="260" height="96" rx="4" fill="#0e1a24" stroke="#5a4a3a" stroke-width="6"/>' +
      '<rect x="76" y="52" width="248" height="84" fill="url(#idgs4)"/>' +
      '<ellipse cx="200" cy="104" rx="34" ry="24" fill="' + RED + '" stroke="#111" stroke-width="2"/><ellipse cx="200" cy="104" rx="25" ry="16" fill="#f4e6c8"/>' +
      '<rect x="190" y="126" width="4" height="10" fill="#555"/><rect x="206" y="126" width="4" height="10" fill="#555"/>' +
      '<path d="M120 136v-44M120 92l10 -6" stroke="#888" stroke-width="2.5" fill="none"/><rect x="126" y="80" width="8" height="10" rx="3" fill="#333"/>' +
      '<rect x="262" y="96" width="30" height="40" rx="3" fill="#2a2a2a"/><circle cx="277" cy="108" r="8" fill="#111"/><circle cx="277" cy="126" r="5" fill="#111"/>' +
      /* recording light */
      '<rect x="166" y="16" width="68" height="18" rx="3" fill="#300"/><rect x="168" y="18" width="64" height="14" rx="2" fill="' + RED + '" class="idgPulse"/>' +
      '<text x="200" y="29" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">RECORDING</text>' +
      /* VU meters */
      [0, 1, 2].map(i => '<rect x="' + (30 + i * 18) + '" y="60" width="12" height="70" fill="#111"/><rect x="' + (32 + i * 18) + '" y="64" width="8" height="62" fill="' + (i === 1 ? GOLD : "#35b867") + '" class="idgVu idgV' + (i + 1) + '"/>').join("") +
      [0, 1, 2].map(i => '<rect x="' + (338 + i * 18) + '" y="60" width="12" height="70" fill="#111"/><rect x="' + (340 + i * 18) + '" y="64" width="8" height="62" fill="' + (i === 1 ? GOLD : "#35b867") + '" class="idgVu idgV' + (3 - i) + '"/>').join("") +
      /* the console */
      '<path d="M10 150h380l10 110H0z" fill="#3a3a40"/><path d="M14 156h372l4 26H10z" fill="#2c2c32"/>' + knobs + faders +
      '<rect x="0" y="236" width="400" height="24" fill="#222"/>',
      sky("idgs4", "#2a3a4a", "#121a22"));
  }

  /* 5. Las Vegas Blvd S at Flamingo Rd: green street signs, IMAGINE DRAGONS tagged on the wall, palms, the High Roller wheel
        turning behind in the night sky */
  function idgcorner() {
    let spokes = "", cabins = "";
    for (let i = 0; i < 28; i++) {
      const a = i * Math.PI * 2 / 28, x = 300 + Math.cos(a) * 78, y = 96 + Math.sin(a) * 78;
      spokes += '<path d="M300 96L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#cfd8e0" stroke-width=".8"/>';
      cabins += '<ellipse cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="4.5" ry="3.5" fill="' + (i % 3 ? "#e8f4ff" : TEAL) + '" stroke="#5a6a7a" stroke-width=".8"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#idgs5)"/>' + stars(26, 6, 90) +
      '<g class="idgSpin"><circle cx="300" cy="96" r="78" fill="none" stroke="#e8f0f8" stroke-width="3"/><circle cx="300" cy="96" r="72" fill="none" stroke="' + RED + '" stroke-width="1.5" opacity=".7"/>' + spokes + cabins + '</g>' +
      '<circle cx="300" cy="96" r="7" fill="#cfd8e0"/><path d="M286 96l-26 110h10l30 -104zM314 96l26 110h-10l-30 -104z" fill="#cfd8e0"/>' +
      palm(196, 146, 1.1) +
      /* the wall */
      '<rect x="0" y="140" width="400" height="66" fill="#c98a5a"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M0 ' + (146 + i * 8) + 'h400" stroke="#a8704a" stroke-width=".8"/>').join("") +
      tag("IMAGINE", 28, 176, 30, RED, -5) + tag("DRAGONS", 92, 200, 30, GOLD, -4) +
      tag("BELIEVER", 250, 194, 16, TEAL, -3) +
      '<g class="idgSpark"><path d="M222 156l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="idgSpark idgS2"><path d="M20 150l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="206" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="214" width="400" height="46" fill="#2e2e34"/>' +
      '<path d="M0 238h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* green street signs */
      '<rect x="8" y="40" width="5" height="174" fill="#3a3a3a"/>' +
      '<rect x="10" y="32" width="146" height="24" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="83" y="49" text-anchor="middle" ' + F + ' font-size="11.5" fill="#fff">Las Vegas Blvd S</text>' +
      '<rect x="10" y="60" width="128" height="24" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="74" y="77" text-anchor="middle" ' + F + ' font-size="11.5" fill="#fff">Flamingo Rd</text>',
      sky("idgs5", "#0d0a24", "#4a2050"));
  }

  window.SCENES = { idgstation, idgosheas, idgbonanza, idgstudio, idgcorner };
})();
