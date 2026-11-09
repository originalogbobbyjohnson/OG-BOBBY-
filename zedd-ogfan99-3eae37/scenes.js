/* Zedd game (GENRES: EDM + Dance; Regions: UK + Europe; Kaiserslautern, Germany - born in Saratov, Russia, family moved to
   Kaiserslautern when he was about three; grew up in the Dansenberg quarter). Rooms: Kaiserslautern Hauptbahnhof (S-Bahn S1/S2,
   bus 103 up to Dansenberg), the Fritz-Walter-Stadion on the Betzenberg (1. FC Kaiserslautern, his team), the drum riser from his
   Dioramic years, the True Colors prism stage, and the Dansenberg town sign with the Rathaus tower behind.
   CSS classes prefixed "zdx" (the page's anim-train is kept). No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes zdxFlk{0%,100%{opacity:1}46%{opacity:.8}50%{opacity:.35}54%{opacity:.95}}.zdxFlk{animation:zdxFlk 2.6s infinite}.zdxF2{animation-delay:1.2s}' +
    '@keyframes zdxBeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.zdxBeam{transform-box:fill-box;transform-origin:50% 100%;animation:zdxBeam 3.2s ease-in-out infinite}.zdxB2{animation-delay:-1.6s}' +
    '@keyframes zdxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.zdxBob{animation:zdxBob .5s ease-in-out infinite}.zdxBb2{animation-delay:.25s}' +
    '@keyframes zdxHit{0%,100%{transform:rotate(0)}50%{transform:rotate(-10deg)}}.zdxHit{transform-box:fill-box;transform-origin:50% 50%;animation:zdxHit .3s ease-in-out infinite}.zdxH2{animation-delay:.15s}' +
    '@keyframes zdxStick{0%,100%{transform:rotate(0)}50%{transform:rotate(28deg)}}.zdxStick{transform-box:fill-box;transform-origin:0% 100%;animation:zdxStick .3s ease-in-out infinite}.zdxS2{animation-delay:.15s}' +
    '@keyframes zdxFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-9deg)}}.zdxFlag{transform-box:fill-box;transform-origin:0 50%;animation:zdxFlag 1.1s ease-in-out infinite}.zdxFg2{animation-delay:.5s}' +
    '@keyframes zdxPulse{0%,100%{opacity:.55}50%{opacity:1}}.zdxPulse{animation:zdxPulse 1s ease-in-out infinite}.zdxP2{animation-delay:.5s}' +
    '@keyframes zdxCloud{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.zdxCloud{animation:zdxCloud 30s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const DBRED = "#d7141e", FCK = "#d2001e", SGREEN = "#008d4f", DBBLUE = "#13207a", VIO = "#8a5cff", CYAN = "#3fe0ff", PINK = "#ff4fa3", GOLD = "#ffd23f";
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RAINBOW = ["#ff3b3b", "#ff9a2e", "#ffe14a", "#3fd46a", "#3fa8ff", "#8a5cff"];
  const cloud = y => '<g class="zdxCloud" fill="#fff" opacity=".85"><ellipse cx="0" cy="' + y + '" rx="26" ry="9"/><ellipse cx="18" cy="' + (y - 6) + '" rx="16" ry="9"/></g>';
  const crowd = (y, n, fill) => {
    let s = ""; for (let i = 0; i < n; i++) {
      const x = 8 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="zdxBob' + (i % 2 ? ' zdxBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 18) + '" r="7"/><rect x="' + (x - 8) + '" y="' + (y - 11) + '" width="16" height="24" rx="6"/>' +
        (up ? '<path d="M' + (x - 6) + ' ' + (y - 8) + 'l-8 -18M' + (x + 6) + ' ' + (y - 8) + 'l8 -18" stroke="' + fill + '" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };
  /* Kaiserslautern Rathaus: the 1968 high-rise city hall tower with its rooftop */
  const rathaus = (x, base, k) => {
    const w = 40 * k, h = 150 * k; let s = '<rect x="' + (x - w / 2) + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#d9d6cc" stroke="#9a968a" stroke-width="1"/>';
    for (let yy = base - h + 8 * k; yy < base - 6 * k; yy += 7 * k) s += '<rect x="' + (x - w / 2 + 4 * k) + '" y="' + yy + '" width="' + (w - 8 * k) + '" height="' + (3 * k) + '" fill="#5d7489"/>';
    s += '<rect x="' + (x - w / 2 - 3 * k) + '" y="' + (base - h - 8 * k) + '" width="' + (w + 6 * k) + '" height="' + (8 * k) + '" fill="#8a8678"/>';
    return s;
  };

  /* 1. Kaiserslautern Hauptbahnhof: red S-Bahn pulling in, blue station sign, S1 and S2, the 103 bus to Dansenberg */
  function zdxstation() {
    let wins = "";
    for (let x = 50; x < 270; x += 28) wins += '<rect x="' + x + '" y="146" width="20" height="18" rx="2" fill="#cfe6ff" opacity=".9"/>';
    const train = '<g class="anim-train">' +
      '<rect x="24" y="136" width="262" height="60" rx="8" fill="' + DBRED + '" stroke="#7a0a10" stroke-width="2"/>' +
      '<path d="M286 136q24 6 26 32v28h-26z" fill="' + DBRED + '" stroke="#7a0a10" stroke-width="2"/>' +
      '<path d="M290 144q14 4 18 20h-18z" fill="#cfe6ff"/>' +
      '<rect x="24" y="172" width="288" height="8" fill="#f2f2f2"/>' + wins +
      '<rect x="298" y="184" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#1b1b1b"><circle cx="64" cy="198" r="8"/><circle cx="90" cy="198" r="8"/><circle cx="232" cy="198" r="8"/><circle cx="258" cy="198" r="8"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#zdxs1)"/>' + cloud(30) +
      /* station building: sandstone hall with tall windows and a clock */
      '<rect x="10" y="50" width="250" height="84" fill="#c9a98a"/><path d="M4 50h262l-10 -14H14z" fill="#6a5a4e"/>' +
      '<g fill="#3a3e4a"><rect x="26" y="66" width="22" height="50" rx="11"/><rect x="62" y="66" width="22" height="50" rx="11"/><rect x="186" y="66" width="22" height="50" rx="11"/><rect x="222" y="66" width="22" height="50" rx="11"/></g>' +
      '<circle cx="135" cy="80" r="16" fill="#f4f1e8" stroke="#3a3e4a" stroke-width="2"/><path d="M135 80v-10M135 80l7 4" stroke="#222" stroke-width="2"/>' +
      '<rect x="0" y="130" width="400" height="6" fill="#bfc4cc"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5b5f68"/><rect x="0" y="196" width="400" height="5" fill="#fff"/>' +
      '<path d="M0 222h400M0 240h400" stroke="#3e4149" stroke-width="3"/>' +
      train +
      /* blue station name sign with S-Bahn badges */
      '<rect x="316" y="104" width="4" height="34" fill="#9aa3ab"/><rect x="372" y="104" width="4" height="34" fill="#9aa3ab"/>' +
      '<rect x="270" y="48" width="126" height="58" rx="3" fill="' + DBBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="333" y="68" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Kaiserslautern</text>' +
      '<text x="333" y="80" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">Hbf</text>' +
      '<circle cx="290" cy="94" r="8" fill="' + SGREEN + '"/><text x="290" y="98" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">S</text>' +
      '<rect x="302" y="87" width="20" height="14" rx="3" fill="#fff"/><text x="312" y="98" text-anchor="middle" ' + F + ' font-size="10" fill="' + SGREEN + '">S1</text>' +
      '<rect x="326" y="87" width="20" height="14" rx="3" fill="#fff"/><text x="336" y="98" text-anchor="middle" ' + F + ' font-size="10" fill="' + SGREEN + '">S2</text>' +
      '<rect x="350" y="87" width="40" height="14" rx="3" fill="#ffcc00"/><text x="370" y="98" text-anchor="middle" ' + F + ' font-size="9" fill="#111">BUS 103</text>',
      sky("zdxs1", "#8bbbe6", "#eef2f6"));
  }

  /* 2. Fritz-Walter-Stadion up on the Betzenberg: red stands, white roof trusses, red and white flags */
  function zdxbetze() {
    let seats = "";
    for (let y = 92; y < 140; y += 9) seats += '<path d="M20 ' + y + 'h360" stroke="#a8001a" stroke-width="3"/>';
    const flood = x => '<rect x="' + x + '" y="10" width="6" height="70" fill="#d0d4da"/><rect x="' + (x - 14) + '" y="4" width="34" height="14" rx="2" fill="#eef1f5"/><g class="zdxFlk"><circle cx="' + (x - 6) + '" cy="11" r="3" fill="#fff8c8"/><circle cx="' + (x + 3) + '" cy="11" r="3" fill="#fff8c8"/><circle cx="' + (x + 12) + '" cy="11" r="3" fill="#fff8c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#zdxs2)"/>' + flood(20) + flood(374) +
      /* roof with white trusses */
      '<path d="M10 66h380v10H10z" fill="#f2f2f2"/><path d="M10 66l20 -18h340l20 18z" fill="#e6e8ec"/>' +
      '<path d="M40 48l20 18M80 48l20 18M120 48l20 18M160 48l20 18M200 48l20 18M240 48l20 18M280 48l20 18M320 48l20 18M360 48l20 18M60 48l-20 18M100 48l-20 18M140 48l-20 18M180 48l-20 18M220 48l-20 18M260 48l-20 18M300 48l-20 18M340 48l-20 18" stroke="#b9bcc4" stroke-width="1.5"/>' +
      /* red stand */
      '<rect x="20" y="76" width="360" height="70" fill="' + FCK + '"/>' + seats +
      '<text x="200" y="118" text-anchor="middle" ' + F + ' font-size="16" fill="#fff" opacity=".9">BETZE</text>' +
      crowd(150, 18, "#6a0010") +
      /* pitch */
      '<rect x="0" y="150" width="400" height="110" fill="#3d8f3a"/>' +
      '<g fill="#46a043"><rect x="0" y="164" width="400" height="16"/><rect x="0" y="196" width="400" height="16"/><rect x="0" y="228" width="400" height="16"/></g>' +
      '<path d="M200 150v110M0 156h400" stroke="#fff" stroke-width="2" opacity=".85"/><ellipse cx="200" cy="206" rx="54" ry="22" stroke="#fff" stroke-width="2" fill="none" opacity=".85"/>' +
      '<rect x="40" y="154" width="2" height="34" fill="#ddd"/><g class="zdxFlag"><rect x="42" y="154" width="30" height="16" fill="' + FCK + '"/><rect x="42" y="160" width="30" height="4" fill="#fff"/></g>' +
      '<rect x="330" y="154" width="2" height="34" fill="#ddd"/><g class="zdxFlag zdxFg2"><rect x="332" y="154" width="30" height="16" fill="#fff"/><rect x="332" y="160" width="30" height="4" fill="' + FCK + '"/></g>',
      sky("zdxs2", "#101a36", "#3a4f7a"));
  }

  /* 3. The drum riser: Zedd was the drummer in the Kaiserslautern band Dioramic for ten years */
  function zdxdrums() {
    return svg(
      '<rect width="400" height="260" fill="#120f18"/>' +
      '<g opacity=".5"><path d="M110 0L60 200h60z" fill="' + VIO + '" class="zdxPulse"/><path d="M290 0L280 200h60z" fill="' + CYAN + '" class="zdxPulse zdxP2"/></g>' +
      /* amp stacks */
      '<rect x="14" y="96" width="70" height="120" rx="3" fill="#1d1d1d" stroke="#444"/><rect x="20" y="104" width="58" height="50" fill="#2b2b2b"/><rect x="20" y="160" width="58" height="50" fill="#2b2b2b"/>' +
      '<rect x="316" y="96" width="70" height="120" rx="3" fill="#1d1d1d" stroke="#444"/><rect x="322" y="104" width="58" height="50" fill="#2b2b2b"/><rect x="322" y="160" width="58" height="50" fill="#2b2b2b"/>' +
      /* riser */
      '<rect x="90" y="200" width="220" height="20" fill="#2a2a32"/><rect x="0" y="220" width="400" height="40" fill="#1b1820"/>' +
      /* bass drum */
      '<circle cx="200" cy="166" r="36" fill="#e8e4dc" stroke="#7a1a22" stroke-width="6"/><circle cx="200" cy="166" r="26" fill="none" stroke="#c9c4ba" stroke-width="1.5"/>' +
      '<text x="200" y="172" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#7a1a22">DIORAMIC</text>' +
      /* toms + snare */
      '<g class="zdxHit"><ellipse cx="164" cy="124" rx="18" ry="7" fill="#e8e4dc" stroke="#7a1a22" stroke-width="3"/><rect x="146" y="124" width="36" height="16" fill="#7a1a22"/></g>' +
      '<g class="zdxHit zdxH2"><ellipse cx="236" cy="124" rx="18" ry="7" fill="#e8e4dc" stroke="#7a1a22" stroke-width="3"/><rect x="218" y="124" width="36" height="16" fill="#7a1a22"/></g>' +
      '<ellipse cx="128" cy="176" rx="20" ry="7" fill="#e8e4dc" stroke="#8a8a8a" stroke-width="3"/><rect x="108" y="176" width="40" height="14" fill="#9aa0a8"/><path d="M128 190v12" stroke="#888" stroke-width="3"/>' +
      /* cymbals */
      '<path d="M100 96v108M300 96v108" stroke="#888" stroke-width="3"/>' +
      '<g class="zdxHit"><ellipse cx="100" cy="96" rx="30" ry="6" fill="' + GOLD + '" stroke="#a88a20" stroke-width="1.5"/></g>' +
      '<g class="zdxHit zdxH2"><ellipse cx="300" cy="96" rx="30" ry="6" fill="' + GOLD + '" stroke="#a88a20" stroke-width="1.5"/></g>' +
      /* sticks */
      '<g class="zdxStick"><path d="M174 88l-26 30" stroke="#e8c890" stroke-width="4" stroke-linecap="round"/></g>' +
      '<g class="zdxStick zdxS2"><path d="M226 88l26 30" stroke="#e8c890" stroke-width="4" stroke-linecap="round"/></g>' +
      tag("BEHIND THE KIT", 112, 46, 22, "#fff", -3),
      "");
  }

  /* 4. True Colors: the prism stage - white light in, the whole spectrum out over the crowd */
  function zdxtruecolors() {
    let bands = "";
    RAINBOW.forEach((c, i) => {
      bands += '<path d="M232 106L400 ' + (40 + i * 22) + 'v22L236 ' + (112 + i * 2) + 'z" fill="' + c + '" opacity=".85" class="zdxPulse' + (i % 2 ? ' zdxP2' : '') + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#zdxs4)"/>' +
      '<path d="M0 100L176 108v6L0 112z" fill="#fff" opacity=".9" class="zdxPulse"/>' + bands +
      '<path d="M200 50L246 132H154z" fill="#bfe8ff" opacity=".55" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M200 50L214 132" stroke="#fff" stroke-width="1" opacity=".6"/>' +
      '<g opacity=".6"><path d="M70 176L30 0h22z" fill="' + PINK + '" class="zdxBeam"/><path d="M330 176L370 0h-22z" fill="' + CYAN + '" class="zdxBeam zdxB2"/></g>' +
      '<rect x="120" y="160" width="160" height="20" rx="3" fill="#222" stroke="#555"/><rect x="186" y="150" width="28" height="10" fill="#333"/>' +
      '<circle cx="200" cy="140" r="8" fill="#0c0c18"/><rect x="190" y="146" width="20" height="14" rx="5" fill="#0c0c18"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#07060c"/>' + crowd(240, 14, "#1d1a2a"),
      sky("zdxs4", "#05040c", "#1d0f3a"));
  }

  /* 5. Dansenberg: the yellow town sign, the Dansenberger Strasse sign, the Pfaelzerwald hills and the Rathaus tower behind */
  function zdxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#zdxs5)"/>' + cloud(40) +
      '<path d="M0 132q70 -40 150 -30t140 -16t110 10v40H0z" fill="#3f6a3a"/>' +
      '<path d="M0 140q100 -22 200 -10t200 0v12H0z" fill="#5a8a48"/>' +
      rathaus(300, 150, .7) +
      '<g fill="#e8dcc8"><rect x="30" y="112" width="54" height="36"/><rect x="96" y="118" width="40" height="30"/></g><g fill="#b5502f"><path d="M26 112h62l-31 -18z"/><path d="M92 118h48l-24 -14z"/></g>' +
      /* wall with the tag */
      '<rect x="0" y="148" width="400" height="74" fill="#6a6f78"/>' +
      '<path d="M0 162h400M0 178h400M0 194h400M0 210h400" stroke="#5a5f68" stroke-width="1"/>' +
      tag("TRUE COLORS", 40, 172, 18, PINK, -3) +
      tag("ZEDD", 150, 214, 50, CYAN, -5) +
      '<rect x="0" y="222" width="400" height="38" fill="#2f3238"/><rect x="0" y="220" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* German signs: white street name plate, yellow town sign */
      '<rect x="356" y="64" width="5" height="158" fill="#9aa3ab"/>' +
      '<rect x="262" y="66" width="134" height="20" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="329" y="80" text-anchor="middle" ' + F + ' font-size="10" fill="#111">Dansenberger Str.</text>' +
      '<rect x="286" y="92" width="110" height="46" rx="3" fill="#ffcc00" stroke="#111" stroke-width="3"/>' +
      '<text x="341" y="114" text-anchor="middle" ' + F + ' font-size="15" fill="#111">Dansenberg</text>' +
      '<text x="341" y="129" text-anchor="middle" ' + F + ' font-size="8" fill="#111">Stadt Kaiserslautern</text>',
      sky("zdxs5", "#86bfee", "#f2e6c8"));
  }

  window.SCENES = { zdxstation, zdxbetze, zdxdrums, zdxtruecolors, zdxcorner };
})();
