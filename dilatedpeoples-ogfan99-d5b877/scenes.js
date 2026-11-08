/* dilatedpeoples scenes (Regions tab: Los Angeles + SoCal; Mid-Wilshire, Los Angeles). CSS classes prefixed dlp- (the page's own anim-train is kept).
   1 Wilshire/Western station, Metro D Line: the underground platform, a silver D Line train with its purple stripe sliding in.
   2 The Scottish Rite Temple on Wilshire Blvd (the live news report that opens "Proper Propaganda"): the pale stone block with its row of carved figures, a news camera with the LIVE light blinking.
   3 The Beat Junkie Institute of Sound in Glendora (DJ Babu's Beat Junkies school): two turntables and a mixer, records spinning, the crossfader sliding.
   4 The Cinerama Dome on Sunset Blvd ("Directors of Photography"): the white honeycomb dome, searchlights sweeping, a film reel turning.
   5 Wilshire Blvd and Crenshaw Blvd: green signs, DILATED tagged, the Wiltern's blue-green tower down Wilshire behind, a bus rolling by. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dlpcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.dlp-car{animation:dlpcar 7s linear infinite}' +
    '@keyframes dlpblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.dlp-blink{animation:dlpblink 1s steps(1) infinite}' +
    '@keyframes dlpspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dlp-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dlpspin 1.8s linear infinite}.dlp-slow{animation-duration:6s}' +
    '@keyframes dlpfade{0%,100%{transform:translateX(0)}50%{transform:translateX(22px)}}.dlp-fader{animation:dlpfade 1.4s ease-in-out infinite}' +
    '@keyframes dlpbeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.dlp-beam{transform-box:fill-box;transform-origin:50% 100%;animation:dlpbeam 4s ease-in-out infinite}.dlp-b2{animation-delay:-2s}' +
    '@keyframes dlpsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.dlp-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dlpsway 3.4s ease-in-out infinite}' +
    '@keyframes dlpspray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.dlp-spray{transform-box:fill-box;transform-origin:50% 100%;animation:dlpspray 1s ease-in-out infinite}' +
    '@keyframes dlpnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-36px);opacity:0}}.dlp-note{animation:dlpnote 2.4s ease-out infinite}.dlp-n2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, tc) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (tc || "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="dlp-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const DLINE = "#a05da5", GOLD = "#ffb81c", TEAL = "#3fb6c9", CREAM = "#efe6d2";

  /* 1. Wilshire/Western station, Metro D Line (underground) */
  function dlpstation() {
    let win = ""; for (let x = 44; x < 300; x += 32) win += '<rect x="' + x + '" y="118" width="24" height="24" rx="3" fill="#1d2230"/>';
    const train = '<g class="anim-train"><path d="M18 108h300q20 0 24 18v48H18z" fill="#d3d7dc" stroke="#7d848c" stroke-width="2"/>' + win +
      '<rect x="18" y="150" width="324" height="8" fill="' + DLINE + '"/><rect x="178" y="108" width="5" height="66" fill="#5a6068"/>' +
      '<path d="M318 114h12q6 2 8 14h-20z" fill="#1d2230"/><circle cx="334" cy="166" r="4" fill="#fff6c2"/>' + bullet(290, 132, "D", DLINE) +
      '<rect x="40" y="174" width="60" height="8" fill="#333"/><rect x="250" y="174" width="60" height="8" fill="#333"/></g>';
    let tiles = ""; for (let x = 0; x < 400; x += 20) for (let y = 30; y < 100; y += 14) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="13" fill="' + ((x / 20 + y / 14) % 3 === 0 ? "#c9c3b4" : "#d8d2c3") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2630"/>' + tiles +
      '<rect x="0" y="0" width="400" height="30" fill="#3a3540"/>' + [60, 160, 260, 360].map(x => '<rect x="' + (x - 22) + '" y="10" width="44" height="6" rx="3" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="96" width="400" height="10" fill="' + DLINE + '"/>' +
      '<rect x="0" y="106" width="400" height="78" fill="#18151c"/>' + train +
      '<rect x="0" y="184" width="400" height="76" fill="#8e877b"/><rect x="0" y="184" width="400" height="6" fill="#e8d36b"/>' +
      '<rect x="96" y="200" width="240" height="40" rx="4" fill="#111"/><text x="226" y="226" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">WILSHIRE/WESTERN</text>' + bullet(114, 220, "D", DLINE) +
      '<rect x="20" y="40" width="96" height="34" rx="3" fill="#111"/><text x="68" y="54" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">TO UNION STATION</text><text x="68" y="67" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">D LINE</text>',
      "");
  }

  /* 2. The Scottish Rite Temple on Wilshire Blvd, the "Proper Propaganda" live report */
  function dlptemple() {
    let figs = ""; for (let i = 0; i < 8; i++) { const x = 92 + i * 28; figs += '<path d="M' + x + ' 104q0 -8 6 -8t6 8v34h-12z" fill="#cfc4ab"/><rect x="' + (x - 2) + '" y="124" width="16" height="14" fill="#c3b79c"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#dlpt1)"/>' +
      palm(36, 196, 110) + palm(370, 196, 100) +
      /* the temple block */
      '<rect x="70" y="58" width="260" height="140" fill="' + CREAM + '" stroke="#b9ad92" stroke-width="2"/>' +
      '<rect x="70" y="58" width="260" height="10" fill="#d9ceb5"/>' +
      '<rect x="84" y="90" width="232" height="54" fill="#e2d8c0"/>' + figs +
      '<rect x="150" y="156" width="100" height="42" fill="#d4c9ae"/><rect x="176" y="164" width="48" height="34" fill="#6f6758"/>' +
      '<text x="200" y="82" text-anchor="middle" font-family="Georgia, serif" font-size="11" letter-spacing="3" fill="#8a7d62">SCOTTISH RITE</text>' +
      /* Wilshire Blvd + traffic */
      '<rect x="0" y="198" width="400" height="62" fill="#55555b"/><rect x="0" y="196" width="400" height="4" fill="#cfcac0"/><path d="M0 230h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="dlp-car"><rect x="0" y="206" width="70" height="20" rx="6" fill="#d7263d"/><rect x="12" y="200" width="40" height="10" rx="3" fill="#bfe3f2"/><circle cx="16" cy="228" r="6" fill="#111"/><circle cx="54" cy="228" r="6" fill="#111"/></g>' +
      /* news camera on a tripod */
      '<path d="M330 250l14 -44l14 44M344 206v44" stroke="#222" stroke-width="3"/><rect x="322" y="186" width="44" height="22" rx="3" fill="#2a2a2a"/><rect x="304" y="190" width="20" height="14" rx="2" fill="#444"/><circle cx="306" cy="197" r="5" fill="#7fd3ff"/>' +
      '<rect x="340" y="170" width="30" height="13" rx="2" fill="#c0262d" class="dlp-blink"/><text x="355" y="180" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" class="dlp-blink">LIVE</text>' +
      '<rect x="12" y="232" width="118" height="22" rx="3" fill="#111" opacity=".85"/><text x="71" y="247" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">PROPER PROPAGANDA</text>',
      sky("dlpt1", "#6fb3dc", "#f4e2c0"));
  }

  /* 3. The Beat Junkie Institute of Sound, Glendora (DJ Babu) */
  function dlpdjs() {
    const deck = (x) => '<rect x="' + x + '" y="150" width="130" height="80" rx="6" fill="#2b2b30" stroke="#55555c" stroke-width="2"/>' +
      '<g class="dlp-spin"><circle cx="' + (x + 58) + '" cy="190" r="32" fill="#111"/><circle cx="' + (x + 58) + '" cy="190" r="24" fill="none" stroke="#2c2c2c" stroke-width="2"/><circle cx="' + (x + 58) + '" cy="190" r="10" fill="' + GOLD + '"/><rect x="' + (x + 57) + '" y="182" width="2" height="6" fill="#111"/></g>' +
      '<path d="M' + (x + 114) + ' 160l-14 30" stroke="#aaa" stroke-width="3"/><circle cx="' + (x + 114) + '" cy="160" r="4" fill="#ccc"/>';
    let crates = ""; for (let i = 0; i < 14; i++) crates += '<rect x="' + (20 + i * 26) + '" y="30" width="22" height="70" fill="' + ["#d7263d", "#3fb6c9", "#ffb81c", "#a05da5", "#efe6d2", "#2f8f6a"][i % 6] + '" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#17141c"/>' +
      '<rect x="0" y="0" width="400" height="120" fill="#221d29"/>' + crates +
      '<rect x="110" y="104" width="180" height="24" rx="3" fill="#111" stroke="' + DLINE + '" stroke-width="2"/><text x="200" y="120" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BEAT JUNKIE INSTITUTE</text>' +
      '<rect x="0" y="138" width="400" height="122" fill="#3a2b20"/><rect x="0" y="138" width="400" height="8" fill="#5a4330"/>' +
      deck(16) + deck(254) +
      /* mixer with crossfader */
      '<rect x="156" y="152" width="88" height="76" rx="4" fill="#3a3a42" stroke="#66666e" stroke-width="2"/>' +
      [176, 200, 224].map(x => '<circle cx="' + x + '" cy="168" r="5" fill="#bbb"/>').join("") +
      '<rect x="166" y="206" width="68" height="6" rx="3" fill="#111"/><g class="dlp-fader"><rect x="168" y="200" width="12" height="18" rx="2" fill="' + GOLD + '"/></g>' +
      '<text x="140" y="146" ' + font + ' font-size="18" fill="' + TEAL + '" class="dlp-note">&#9835;</text><text x="250" y="146" ' + font + ' font-size="16" fill="' + GOLD + '" class="dlp-note dlp-n2">&#9834;</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#cfc4ab">GLENDORA, CA</text>');
  }

  /* 4. The Cinerama Dome on Sunset Blvd ("Directors of Photography") */
  function dlpdome() {
    let cells = "";
    for (let r = 0; r < 5; r++) { const y = 150 - r * 14, half = Math.sqrt(Math.max(0, 1 - Math.pow((150 - y + 8) / 90, 2))) * 120; for (let x = 200 - half + 8; x < 200 + half - 8; x += 18) cells += '<path d="M' + x + ' ' + y + 'l8 -6l8 6l-8 6z" fill="none" stroke="#b8b4aa" stroke-width="1.2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#dlpd1)"/>' +
      '<g class="dlp-beam"><path d="M120 196l-30 -190h24z" fill="#fff8d8" opacity=".25"/></g><g class="dlp-beam dlp-b2"><path d="M290 196l20 -190h24z" fill="#fff8d8" opacity=".25"/></g>' +
      /* the dome */
      '<path d="M80 170q0 -110 120 -110t120 110z" fill="#f2f0ea" stroke="#9c988e" stroke-width="2"/>' + cells +
      '<rect x="70" y="168" width="260" height="30" fill="#d6d2c8"/><rect x="70" y="168" width="260" height="6" fill="#c0262d"/>' +
      '<rect x="120" y="178" width="160" height="16" fill="#1d1d22"/><text x="200" y="190" text-anchor="middle" ' + font + ' font-size="10" letter-spacing="3" fill="' + GOLD + '">CINERAMA DOME</text>' +
      palm(40, 200, 120) + palm(366, 200, 104) +
      /* Sunset Blvd */
      '<rect x="0" y="198" width="400" height="62" fill="#4d4d55"/><path d="M0 230h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* film reel */
      '<g transform="translate(330 232)"><g class="dlp-spin dlp-slow"><circle r="20" fill="#2a2a2a"/>' + [0, 72, 144, 216, 288].map(a => '<circle cx="' + (11 * Math.cos(a * Math.PI / 180)) + '" cy="' + (11 * Math.sin(a * Math.PI / 180)) + '" r="5" fill="#4d4d55"/>').join("") + '<circle r="3" fill="#ccc"/></g></g>' +
      '<rect x="14" y="214" width="150" height="22" rx="3" fill="#111" opacity=".85"/><text x="89" y="229" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">DIRECTORS OF PHOTOGRAPHY</text>',
      sky("dlpd1", "#1b1640", "#6a3a6e"));
  }

  /* 5. Wilshire Blvd and Crenshaw Blvd, the Wiltern's tower down Wilshire behind */
  function dlpcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dlpc1)"/>' +
      /* the Wiltern: blue-green terra cotta deco tower */
      '<rect x="200" y="96" width="150" height="70" fill="#3d8f8a"/><rect x="250" y="36" width="44" height="130" fill="#47a39d"/>' +
      '<path d="M250 36l22 -16l22 16z" fill="#2f7a75"/>' + [258, 268, 278, 288].map(x => '<rect x="' + x + '" y="46" width="4" height="110" fill="#2f7a75"/>').join("") +
      [212, 232, 310, 330].map(x => '<rect x="' + x + '" y="106" width="10" height="50" fill="#2f7a75"/>').join("") +
      '<rect x="0" y="120" width="190" height="46" fill="#b9a98c"/><rect x="0" y="112" width="120" height="10" fill="#8f7f66"/>' +
      palm(150, 166, 80) + palm(370, 166, 70) +
      '<rect x="0" y="164" width="400" height="6" fill="#cfcac0"/>' +
      /* wall */
      '<rect x="20" y="170" width="250" height="62" fill="#d9c7a3"/><rect x="20" y="170" width="250" height="5" fill="#b9a783"/>' +
      tag("DILATED", 34, 214, 40, GOLD, -5) + tag("BUILD TWICE", 150, 228, 14, TEAL, -3) +
      '<g class="dlp-spray"><rect x="244" y="196" width="12" height="28" rx="3" fill="' + DLINE + '"/><rect x="246" y="190" width="8" height="6" fill="#ccc"/></g>' +
      /* street + bus */
      '<rect x="0" y="232" width="400" height="28" fill="#5a5a5f"/><rect x="0" y="230" width="400" height="4" fill="#cfcac0"/>' +
      '<g class="dlp-car"><rect x="0" y="198" width="120" height="34" rx="5" fill="#e14b2b"/>' + [8, 32, 56, 80].map(x => '<rect x="' + x + '" y="204" width="18" height="12" fill="#bfe3f2"/>').join("") + '<circle cx="22" cy="234" r="6" fill="#111"/><circle cx="98" cy="234" r="6" fill="#111"/></g>' +
      '<rect x="376" y="60" width="6" height="172" fill="#7a7f86"/>' +
      sign(296, 62, 100, "WILSHIRE BLVD", 11) + sign(296, 88, 100, "CRENSHAW BLVD", 11),
      sky("dlpc1", "#2c3e7a", "#f2a65a"));
  }

  window.SCENES = { dlpstation, dlptemple, dlpdjs, dlpdome, dlpcorner };
})();
