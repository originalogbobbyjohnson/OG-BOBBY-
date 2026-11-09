/* Dua Lipa game (GENRES: POP; INTERNATIONAL region: UK + EUROPE; West Hampstead, North West London).
   Rooms: West Hampstead (Jubilee line, open-air platforms under the West End Lane bridge), Parliament Hill on Hampstead Heath
   (her school was Parliament Hill School; the famous view over the London skyline), the NEWBORN monument in Pristina, Kosovo
   (where her family moved in 2008; she founded the Sunny Hill Festival there), the Glastonbury Pyramid Stage (headliner 2024),
   and West End Lane at Broadhurst Gardens with the old Decca Studios red-brick building behind.
   CSS classes prefixed "dua" (the page's anim-train is kept). No logos (no roundel), no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes duaTw{0%,100%{opacity:1}50%{opacity:.25}}.duaTw{animation:duaTw 1.8s ease-in-out infinite}.duaT2{animation-delay:.6s}.duaT3{animation-delay:1.2s}' +
    '@keyframes duaBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.duaBob{animation:duaBob .7s ease-in-out infinite}.duaBb2{animation-delay:.35s}' +
    '@keyframes duaKite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(6px,-8px) rotate(6deg)}}.duaKite{transform-box:fill-box;transform-origin:50% 100%;animation:duaKite 3.2s ease-in-out infinite}.duaK2{animation-delay:-1.4s}' +
    '@keyframes duaBird{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.duaBird{animation:duaBird 12s linear infinite}.duaBd2{animation-delay:-5s}' +
    '@keyframes duaBeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.duaBeam{transform-box:fill-box;transform-origin:50% 100%;animation:duaBeam 4s ease-in-out infinite}.duaBm2{animation-delay:-2s}' +
    '@keyframes duaFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-10deg)}}.duaFlag{transform-box:fill-box;transform-origin:0 50%;animation:duaFlag 1.2s ease-in-out infinite}' +
    '@keyframes duaBus{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.duaBus{animation:duaBus 10s linear infinite}' +
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
  const JUB = "#a0a5a9", NAVY = "#10245a", PINK = "#ff4fa0", GOLD = "#ffd23f", CYAN = "#3fd6ea", BRICK = "#a5523a";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="duaTw' + (i % 3 === 1 ? ' duaT2' : i % 3 === 2 ? ' duaT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill, flags) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 6 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="duaBob' + (i % 2 ? ' duaBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="20" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l6 -14" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
      if (flags && i % 7 === 3) s += '<path d="M' + x + ' ' + (y - 16) + 'v-34" stroke="#ddd" stroke-width="1.5"/><path class="duaFlag" d="M' + x + ' ' + (y - 50) + 'h20v12h-20z" fill="' + flags[(i / 7 | 0) % flags.length] + '"/>';
    }
    return s;
  };

  /* 1. West Hampstead (Jubilee line): open-air platform in the cutting, canopy, brick bridge of West End Lane behind, a silver train pulling in */
  function duastation() {
    let wins = "", bricks = "";
    for (let x = 46; x < 290; x += 34) wins += '<rect x="' + x + '" y="134" width="22" height="22" rx="3" fill="#1f2a36"/>';
    for (let y = 70; y < 130; y += 8) bricks += '<path d="M0 ' + y + 'h400" stroke="#7c3e2c" stroke-width="1"/>';
    const train = '<g class="anim-train">' +
      '<rect x="20" y="124" width="276" height="66" rx="10" fill="#d9dde1" stroke="#2b2b2b" stroke-width="2"/>' +
      '<path d="M296 124q22 2 26 28v38h-26z" fill="#d9dde1" stroke="#2b2b2b" stroke-width="2"/>' +
      '<path d="M300 132q14 2 17 20h-17z" fill="#1d2a36"/>' + wins +
      '<g fill="#d81e2a"><rect x="34" y="130" width="10" height="54"/><rect x="150" y="130" width="10" height="54"/><rect x="266" y="130" width="10" height="54"/></g>' +
      '<rect x="20" y="176" width="302" height="14" fill="#1f4aa0"/>' +
      '<rect x="308" y="180" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#1b1b1b"><circle cx="64" cy="194" r="7"/><circle cx="88" cy="194" r="7"/><circle cx="230" cy="194" r="7"/><circle cx="254" cy="194" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#duas1)"/>' +
      /* West End Lane bridge: brick parapet across the cutting */
      '<rect x="0" y="64" width="400" height="66" fill="' + BRICK + '"/>' + bricks +
      '<path d="M0 64h400" stroke="#5e2a1c" stroke-width="4"/>' +
      '<g fill="#3a2a22"><rect x="60" y="40" width="3" height="24"/><rect x="200" y="40" width="3" height="24"/><rect x="340" y="40" width="3" height="24"/></g>' +
      '<g class="duaBus"><rect x="0" y="34" width="70" height="30" rx="4" fill="#d6241f"/><rect x="6" y="40" width="58" height="9" fill="#25323e"/><circle cx="14" cy="64" r="4" fill="#111"/><circle cx="56" cy="64" r="4" fill="#111"/></g>' +
      /* platform canopy */
      '<path d="M0 98h400v8H0z" fill="#3b4148"/><path d="M0 106h400" stroke="' + JUB + '" stroke-width="6"/>' +
      /* name board */
      '<rect x="112" y="76" width="176" height="20" rx="2" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="90" text-anchor="middle" ' + F + ' font-size="11" fill="#fff" letter-spacing="1">WEST HAMPSTEAD</text>' +
      '<circle cx="98" cy="86" r="9" fill="' + JUB + '" stroke="#fff" stroke-width="1.5"/><text x="98" y="90" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">J</text>' +
      '<text x="200" y="120" text-anchor="middle" ' + F + ' font-size="8" fill="#f2f2f2" letter-spacing="2">JUBILEE LINE · TO STANMORE / TO STRATFORD</text>' +
      /* platform */
      '<rect x="0" y="196" width="400" height="64" fill="#5b5f68"/><rect x="0" y="196" width="400" height="6" fill="#f2c14e"/>' +
      '<text x="200" y="232" text-anchor="middle" ' + F + ' font-size="11" fill="#e9e9e9" letter-spacing="4">MIND THE GAP</text>' +
      train,
      sky("duas1", "#8fb8de", "#e6e0d2"));
  }

  /* 2. Parliament Hill, Hampstead Heath: green hill, kites, a bench, the London skyline far off at sunset */
  function duaheath() {
    const city = '<g fill="#4a3f5c">' +
      '<rect x="20" y="132" width="16" height="22"/><rect x="40" y="126" width="12" height="28"/>' +
      /* BT Tower */
      '<rect x="78" y="96" width="6" height="58"/><rect x="74" y="104" width="14" height="8" rx="2"/><rect x="75" y="116" width="12" height="6" rx="2"/>' +
      '<rect x="100" y="134" width="20" height="20"/>' +
      /* St Paul's dome */
      '<rect x="150" y="128" width="40" height="26"/><path d="M154 128q16 -26 32 0z"/><rect x="168" y="96" width="4" height="10"/><circle cx="170" cy="106" r="3"/>' +
      /* the Gherkin */
      '<path d="M222 154q-10 -30 4 -48q14 18 4 48z"/>' +
      '<rect x="244" y="122" width="14" height="32"/><rect x="262" y="130" width="18" height="24"/>' +
      /* the Shard */
      '<path d="M296 154l12 -78l12 78z"/>' +
      '<rect x="330" y="128" width="16" height="26"/><rect x="352" y="136" width="22" height="18"/></g>';
    const kite = (x, y, c1, c2, cls) => '<g class="duaKite ' + cls + '"><path d="M' + x + ' ' + y + 'l10 14l-10 16l-10 -16z" fill="' + c1 + '"/><path d="M' + x + ' ' + y + 'v30M' + (x - 10) + ' ' + (y + 14) + 'h20" stroke="' + c2 + '" stroke-width="1.2"/>' +
      '<path d="M' + x + ' ' + (y + 30) + 'q6 10 -2 18q-8 8 2 16" stroke="' + c2 + '" stroke-width="1.2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#duas2)"/>' +
      '<circle cx="330" cy="70" r="24" fill="#ffd9a0" opacity=".9"/>' +
      city +
      '<path d="M0 158q120 -20 240 -6t160 2v106H0z" fill="#5c8f45"/>' +
      '<path d="M0 182q140 -40 400 -10v88H0z" fill="#6ea851"/>' +
      '<path d="M120 260q30 -60 90 -86" stroke="#c9b58a" stroke-width="6" fill="none"/>' +
      /* bench */
      '<g fill="#5a3a22"><rect x="250" y="196" width="60" height="5"/><rect x="250" y="186" width="60" height="4"/><rect x="254" y="201" width="4" height="12"/><rect x="302" y="201" width="4" height="12"/></g>' +
      /* people flying kites (silhouettes) */
      '<g fill="#2c3a2a"><circle cx="70" cy="196" r="5"/><rect x="65" y="201" width="10" height="20" rx="4"/><circle cx="350" cy="206" r="5"/><rect x="345" y="211" width="10" height="20" rx="4"/></g>' +
      '<path d="M74 204L118 70" stroke="#eee" stroke-width=".8"/><path d="M354 214L300 52" stroke="#eee" stroke-width=".8"/>' +
      kite(118, 40, PINK, "#fff", "") + kite(300, 22, GOLD, "#fff", "duaK2") +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="10" fill="#f4f1e6" letter-spacing="3">PARLIAMENT HILL</text>',
      sky("duas2", "#6a7fc4", "#f6b48a"));
  }

  /* 3. NEWBORN, Pristina: the big block letters on the plaza, the National Library's lattice domes behind, birds overhead */
  function duanewborn() {
    const letters = "NEWBORN".split("");
    let L = "";
    letters.forEach((ch, i) => {
      const x = 34 + i * 48;
      L += '<text x="' + (x + 7) + '" y="202" font-family="Anton, Impact, sans-serif" font-size="70" textLength="40" lengthAdjust="spacingAndGlyphs" fill="#9a7414">' + ch + '</text>' +
        '<text x="' + (x + 3) + '" y="198" font-family="Anton, Impact, sans-serif" font-size="70" textLength="40" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '" stroke="#7a5c10" stroke-width="1.5">' + ch + '</text>';
    });
    let lat = "";
    for (let x = 52; x < 150; x += 10) lat += '<path d="M' + x + ' 70v40" stroke="#c9c2b2" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#duas3)"/>' +
      '<path d="M0 120l60 -26l50 16l70 -30l80 24l60 -18l80 20v40H0z" fill="#8aa3b8" opacity=".7"/>' +
      /* National Library of Kosovo: white cube blocks with domes and a metal lattice skin */
      '<g fill="#f1ede4" stroke="#9a9384" stroke-width="1.2"><rect x="40" y="88" width="130" height="46"/>' +
      '<path d="M54 88q12 -20 24 0z"/><path d="M90 88q16 -26 32 0z"/><path d="M134 88q12 -20 24 0z"/><path d="M62 70q6 -10 12 0z"/></g>' +
      '<g clip-path="url(#duaclip3)">' + lat + '<path d="M40 100h130M40 112h130M40 124h130" stroke="#c9c2b2" stroke-width="1"/></g>' +
      '<rect x="250" y="96" width="110" height="38" fill="#d9d3c6"/><g fill="#9ab2c6"><rect x="260" y="104" width="12" height="10"/><rect x="282" y="104" width="12" height="10"/><rect x="304" y="104" width="12" height="10"/><rect x="326" y="104" width="12" height="10"/></g>' +
      /* plaza */
      '<rect x="0" y="134" width="400" height="126" fill="#c8c1b4"/><path d="M0 204h400" stroke="#a69e8f" stroke-width="2"/>' +
      '<path d="M0 230h400M0 250h400" stroke="#b6ae9f" stroke-width="1"/>' +
      L +
      /* little painted signatures on the letters */
      '<g fill="' + PINK + '"><circle cx="70" cy="180" r="3"/><circle cx="168" cy="160" r="2.5"/><circle cx="262" cy="176" r="3"/></g><g fill="' + CYAN + '"><circle cx="118" cy="170" r="2.5"/><circle cx="214" cy="186" r="3"/><circle cx="356" cy="166" r="2.5"/></g>' +
      '<g class="duaBird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="duaBird duaBd2"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + F + ' font-size="10" fill="#5b5446" letter-spacing="3">PRISTINA · KOSOVO</text>',
      sky("duas3", "#7cc0ec", "#e8eef2") + '<clipPath id="duaclip3"><rect x="40" y="88" width="130" height="46"/></clipPath>');
  }

  /* 4. Glastonbury Pyramid Stage at night: the steel pyramid frame, light beams, a crowd with flags */
  function duapyramid() {
    let frame = "";
    for (let i = 1; i < 6; i++) { const y = 40 + i * 22, half = (y - 30) * 1.2; frame += '<path d="M' + (200 - half) + ' ' + y + 'h' + (2 * half) + '" stroke="#9aa2b0" stroke-width="1.5"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#duas4)"/>' + stars(28, 6, 90) +
      '<path d="M0 176q100 -24 200 -16t200 10v106H0z" fill="#1d2433"/>' +
      /* beams */
      '<path class="duaBeam" d="M150 160l-26 -150h14z" fill="' + PINK + '" opacity=".35"/>' +
      '<path class="duaBeam duaBm2" d="M250 160l26 -150h-14z" fill="' + CYAN + '" opacity=".35"/>' +
      /* the pyramid */
      '<path d="M200 22L60 182h280z" fill="#2a3040" stroke="#c7ccd6" stroke-width="3"/>' + frame +
      '<path d="M200 22v160M200 22L130 182M200 22L270 182" stroke="#9aa2b0" stroke-width="1.5"/>' +
      '<rect x="120" y="140" width="160" height="42" fill="#3a1030"/><rect x="120" y="140" width="160" height="42" fill="' + PINK + '" opacity=".35" class="duaTw"/>' +
      '<path d="M120 182h160" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<g fill="' + GOLD + '"><circle cx="150" cy="140" r="3" class="duaTw"/><circle cx="200" cy="140" r="3" class="duaTw duaT2"/><circle cx="250" cy="140" r="3" class="duaTw duaT3"/></g>' +
      crowd(236, 26, "#0b0d14", [PINK, GOLD, CYAN, "#e8463a"]) +
      '<rect x="0" y="246" width="400" height="14" fill="#0b0d14"/>' +
      '<text x="200" y="256" text-anchor="middle" ' + F + ' font-size="8" fill="#c7ccd6" letter-spacing="3">PYRAMID STAGE · WORTHY FARM</text>',
      sky("duas4", "#0a0820", "#3a1a46"));
  }

  /* 5. West End Lane at Broadhurst Gardens, NW6: London street plates, the old Decca Studios red-brick building, her name tagged */
  function duacorner() {
    let arches = "";
    for (let x = 60; x < 250; x += 36) arches += '<path d="M' + x + ' 120v-22q10 -14 20 0v22z" fill="#2f3a46" stroke="#f1e6d2" stroke-width="2"/>';
    let wins2 = "";
    for (let x = 60; x < 250; x += 36) wins2 += '<rect x="' + x + '" y="70" width="20" height="18" fill="#2f3a46" stroke="#f1e6d2" stroke-width="2"/>';
    const bus = '<g class="duaBus"><rect x="0" y="182" width="96" height="40" rx="5" fill="#d6241f"/><rect x="8" y="190" width="80" height="12" fill="#25323e"/><circle cx="20" cy="222" r="6" fill="#111"/><circle cx="76" cy="222" r="6" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#duas5)"/>' +
      /* Decca Studios: red brick, cream stone bands, arched windows */
      '<rect x="40" y="52" width="230" height="96" fill="' + BRICK + '"/>' +
      '<path d="M40 52h230" stroke="#f1e6d2" stroke-width="5"/><path d="M40 94h230" stroke="#f1e6d2" stroke-width="3"/>' +
      '<path d="M140 52l15 -20l15 20z" fill="' + BRICK + '" stroke="#f1e6d2" stroke-width="2"/>' + wins2 + arches +
      '<rect x="290" y="80" width="80" height="68" fill="#8a4a36"/><g fill="#2f3a46"><rect x="300" y="92" width="14" height="16"/><rect x="324" y="92" width="14" height="16"/><rect x="348" y="92" width="14" height="16"/></g>' +
      /* wall with the tags */
      '<rect x="0" y="146" width="400" height="76" fill="#6b5a6e"/>' +
      '<path d="M0 160h400M0 174h400M0 188h400M0 202h400" stroke="#594a5c" stroke-width="1"/>' +
      tag("NW6", 24, 172, 20, CYAN, -3) +
      tag("DUA LIPA", 92, 210, 42, PINK, -4) +
      tag("SUNNY HILL", 246, 172, 15, GOLD, -6) +
      bus +
      '<rect x="0" y="222" width="400" height="38" fill="#2f3238"/><rect x="0" y="220" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* London street name plates: white, black letters, red district */
      '<rect x="370" y="40" width="5" height="182" fill="#2a2a2a"/>' +
      '<rect x="254" y="30" width="142" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="325" y="45" text-anchor="middle" ' + F + ' font-size="11" fill="#111">WEST END LANE</text>' +
      '<text x="325" y="56" text-anchor="middle" ' + F + ' font-size="8" fill="#d41a1f">NW6</text>' +
      '<rect x="250" y="64" width="146" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="323" y="79" text-anchor="middle" ' + F + ' font-size="10" fill="#111">BROADHURST GARDENS</text>' +
      '<text x="323" y="90" text-anchor="middle" ' + F + ' font-size="8" fill="#d41a1f">NW6</text>',
      sky("duas5", "#9cc4e4", "#efe4d0"));
  }

  window.SCENES = { duastation, duaheath, duanewborn, duapyramid, duacorner };
})();
