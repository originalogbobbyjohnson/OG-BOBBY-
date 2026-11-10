/* Daft Punk game (GENRES: EDM + DANCE; INTERNATIONAL region: UK + EUROPE; Paris, France).
   Rooms: Malesherbes on Metro line 3 (underground, white bevelled tiles, the olive line-3 roundel), the Lycée Carnot on
   Boulevard Malesherbes where Thomas Bangalter and Guy-Manuel de Homem-Christo met in 1987 (stone facade, tricolour), the Rex Club
   under the Grand Rex tower on Boulevard Poissonnière (their 1997 live set), the Alive 2007 light pyramid at Bercy (the grassy
   sloped arena walls; no helmets, no faces), and Boulevard Malesherbes at Avenue de Villiers with the dome of Saint-Augustin behind.
   CSS classes prefixed "dpx" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dpxTw{0%,100%{opacity:1}50%{opacity:.2}}.dpxTw{animation:dpxTw 1.4s ease-in-out infinite}.dpxT2{animation-delay:.45s}.dpxT3{animation-delay:.9s}' +
    '@keyframes dpxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.dpxBob{animation:dpxBob .6s ease-in-out infinite}.dpxBb2{animation-delay:.3s}' +
    '@keyframes dpxBeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.dpxBeam{transform-box:fill-box;transform-origin:50% 100%;animation:dpxBeam 3s ease-in-out infinite}.dpxBm2{animation-delay:-1.5s}' +
    '@keyframes dpxHue{0%{fill:#ff2a6d}33%{fill:#ffd23f}66%{fill:#3ec7ff}100%{fill:#ff2a6d}}.dpxHue{animation:dpxHue 3s linear infinite}.dpxH2{animation-delay:-1s}.dpxH3{animation-delay:-2s}' +
    '@keyframes dpxFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.dpxFlag{transform-box:fill-box;transform-origin:0 50%;animation:dpxFlag 1s ease-in-out infinite}' +
    '@keyframes dpxScoot{0%{transform:translateX(-90px)}100%{transform:translateX(490px)}}.dpxScoot{animation:dpxScoot 9s linear infinite}' +
    '@keyframes dpxBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-24px)}}.dpxBird{animation:dpxBird 12s linear infinite}' +
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
  const GLD = "#ffd23f", SLV = "#e8e8ff", PNK = "#ff2a6d", L3 = "#837902", RATP = "#1b2a5a";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff" class="dpxTw' + (i % 3 === 1 ? ' dpxT2' : i % 3 === 2 ? ' dpxT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 6 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="dpxBob' + (i % 2 ? ' dpxBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="22" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l7 -15M' + (x - 4) + ' ' + (y - 6) + 'l-7 -15" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };
  const bird = (x, y) => '<path class="dpxBird" d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>';
  const met = (x, y, n, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + F + ' font-size="13" fill="' + (tc || "#fff") + '">' + n + '</text>';
  const haus = (x, w, h, c) => {
    let s = '<rect x="' + x + '" y="' + (160 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      '<path d="M' + (x - 2) + ' ' + (160 - h) + 'h' + (w + 4) + 'l-6 -14h' + (-w + 8) + 'z" fill="#5c6a7a"/>';
    for (let r = 0; r < 4; r++) for (let cx = x + 6; cx < x + w - 8; cx += 14) s += '<rect x="' + cx + '" y="' + (168 - h + r * 22) + '" width="8" height="13" fill="#4f5a68"/>';
    s += '<path d="M' + x + ' ' + (190 - h) + 'h' + w + 'M' + x + ' ' + (212 - h) + 'h' + w + '" stroke="#2a2a2a" stroke-width="1.5"/>';
    return s;
  };

  /* 1. Malesherbes, Metro line 3: elliptical white-tiled vault, dark-blue station sign, the olive line-3 roundel,
        a blue-and-white train pulling in */
  function dpxstation() {
    let wins = "", tiles = "";
    for (let x = 34; x < 290; x += 30) wins += '<rect x="' + x + '" y="120" width="20" height="16" rx="2" fill="#cfe6f5"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v66" stroke="#d8d8d0" stroke-width="1"/>';
    for (let y = 36; y < 96; y += 7) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8d8d0" stroke-width="1"/>';
    const train = '<g class="anim-train">' +
      '<rect x="18" y="106" width="280" height="80" rx="8" fill="#e9edf2" stroke="#1d2433" stroke-width="2"/>' +
      '<path d="M298 106q24 4 28 34v46h-28z" fill="#e9edf2" stroke="#1d2433" stroke-width="2"/>' +
      '<path d="M302 114q14 4 18 26h-18z" fill="#18233a"/>' +
      '<rect x="18" y="148" width="308" height="14" fill="#2a5aa8"/>' + wins +
      '<g fill="#b8c0cc"><rect x="64" y="118" width="12" height="62"/><rect x="176" y="118" width="12" height="62"/><rect x="262" y="118" width="12" height="62"/></g>' +
      '<rect x="306" y="170" width="10" height="6" fill="#ffe7a0"/>' +
      '<g fill="#111"><circle cx="54" cy="190" r="7"/><circle cx="80" cy="190" r="7"/><circle cx="236" cy="190" r="7"/><circle cx="262" cy="190" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#26221f"/>' +
      '<path d="M0 100V40Q200 -14 400 40v60z" fill="#f2f0e6"/>' + '<g clip-path="url(#dpxclip)">' + tiles + '</g>' +
      '<g fill="#fff6d6" class="dpxTw"><rect x="60" y="26" width="40" height="4" rx="2"/><rect x="180" y="12" width="40" height="4" rx="2"/><rect x="300" y="26" width="40" height="4" rx="2"/></g>' +
      /* station sign */
      '<rect x="92" y="44" width="216" height="36" rx="4" fill="' + RATP + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="214" y="68" text-anchor="middle" ' + F + ' font-size="17" fill="#fff">Malesherbes</text>' +
      '<circle cx="114" cy="62" r="11" fill="#fff"/>' + met(114, 62, "3", L3) +
      /* poster frames on the wall */
      '<rect x="18" y="50" width="56" height="40" fill="#e0c060" stroke="#7a6a3a" stroke-width="3"/><rect x="326" y="50" width="56" height="40" fill="' + PNK + '" stroke="#7a6a3a" stroke-width="3"/>' +
      '<path d="M30 80l14 -20l14 20z" fill="#fff" opacity=".6"/><circle cx="354" cy="70" r="10" fill="#fff" opacity=".6"/>' +
      train +
      /* platform */
      '<rect x="0" y="196" width="400" height="64" fill="#a39b90"/><rect x="0" y="196" width="400" height="6" fill="#f2f2ea"/>' +
      '<path d="M0 224h400" stroke="#8a837a" stroke-width="1"/>' +
      '<g fill="#3a3f4a"><circle cx="352" cy="214" r="5"/><rect x="346" y="219" width="12" height="22" rx="4"/></g>' +
      '<rect x="360" y="226" width="20" height="16" rx="3" fill="' + GLD + '"/>',
      '<clipPath id="dpxclip"><path d="M0 100V40Q200 -14 400 40v60z"/></clipPath>');
  }

  /* 2. Lycée Carnot, 145 Boulevard Malesherbes: pale stone facade, tall arched windows, the tricolour over the door,
        the name carved over the entrance; two school bags with headphones and a mixtape on the steps */
  function dpxlycee() {
    let wins = "";
    for (let x = 30; x < 380; x += 50) if (x < 170 || x > 230) wins += '<path d="M' + x + ' 150v-40q14 -18 28 0v40z" fill="#4a5a6e" stroke="#c9bfa8" stroke-width="3"/>';
    for (let x = 30; x < 380; x += 50) wins += '<rect x="' + x + '" y="62" width="28" height="30" fill="#4a5a6e" stroke="#c9bfa8" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dpxs2)"/>' + bird(20, 30) +
      /* facade */
      '<rect x="10" y="40" width="380" height="150" fill="#e8dfca"/>' +
      '<rect x="6" y="34" width="388" height="10" fill="#d6cbb2"/><rect x="10" y="98" width="380" height="6" fill="#d6cbb2"/>' +
      wins +
      /* entrance with name and flag */
      '<rect x="160" y="96" width="80" height="94" fill="#ddd2b8"/>' +
      '<path d="M172 190v-56q28 -26 56 0v56z" fill="#2f3f2e" stroke="#c9bfa8" stroke-width="3"/>' +
      '<path d="M200 190v-62" stroke="#c9bfa8" stroke-width="2"/>' +
      '<rect x="150" y="104" width="100" height="14" fill="#d6cbb2"/>' +
      '<text x="200" y="115" text-anchor="middle" ' + F + ' font-size="9" fill="#5a4e3a">LYCÉE CARNOT</text>' +
      '<path d="M200 96v-40" stroke="#555" stroke-width="2"/>' +
      '<g class="dpxFlag"><rect x="200" y="56" width="11" height="22" fill="#0055a4"/><rect x="211" y="56" width="11" height="22" fill="#fff"/><rect x="222" y="56" width="11" height="22" fill="#ef4135"/></g>' +
      /* steps and pavement */
      '<rect x="150" y="190" width="100" height="8" fill="#cfc5ae"/><rect x="140" y="198" width="120" height="8" fill="#c4baa2"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#8e8a84"/><rect x="0" y="206" width="400" height="4" fill="#bab6ae"/>' +
      /* plane trees on the boulevard */
      '<rect x="40" y="150" width="8" height="58" fill="#6a5a44"/><circle cx="44" cy="146" r="24" fill="#6e8f4e"/>' +
      '<rect x="352" y="150" width="8" height="58" fill="#6a5a44"/><circle cx="356" cy="146" r="24" fill="#6e8f4e"/>' +
      /* two school bags, headphones and a cassette on the step */
      '<rect x="150" y="214" width="28" height="24" rx="4" fill="' + PNK + '"/><rect x="222" y="214" width="28" height="24" rx="4" fill="#2a5aa8"/>' +
      '<path d="M182 222q12 -16 24 0" stroke="#111" stroke-width="3" fill="none"/><rect x="178" y="220" width="8" height="10" rx="3" fill="' + GLD + '"/><rect x="202" y="220" width="8" height="10" rx="3" fill="' + GLD + '"/>' +
      '<g class="dpxBob"><rect x="184" y="236" width="30" height="18" rx="2" fill="#2a2a2a"/><circle cx="193" cy="245" r="3.5" fill="#ddd"/><circle cx="205" cy="245" r="3.5" fill="#ddd"/></g>',
      sky("dpxs2", "#a9cbe8", "#f0ece2"));
  }

  /* 3. Rex Club under the Grand Rex: the white art-deco tower with its stepped top and the tall vertical REX sign, the club door
        below with a line out front, light leaking out */
  function dpxrex() {
    return svg(
      '<rect width="400" height="260" fill="url(#dpxs3)"/>' + stars(14, 6, 60) +
      /* neighbouring Haussmann blocks */
      haus(0, 110, 120, "#b9ae98") + haus(300, 100, 116, "#c4b8a0") +
      /* Grand Rex tower: stepped art-deco top */
      '<rect x="120" y="70" width="170" height="134" fill="#f2efe6"/>' +
      '<rect x="146" y="44" width="118" height="28" fill="#f2efe6"/><rect x="170" y="24" width="70" height="22" fill="#f2efe6"/><rect x="190" y="8" width="30" height="18" fill="#f2efe6"/>' +
      '<path d="M120 70h170M146 44h118M170 24h70" stroke="#cfc8b6" stroke-width="2"/>' +
      '<g fill="#d6d0c0"><rect x="136" y="84" width="6" height="110"/><rect x="268" y="84" width="6" height="110"/></g>' +
      /* vertical sign */
      '<rect x="190" y="52" width="30" height="90" rx="3" fill="#1a1a2a" stroke="' + PNK + '" stroke-width="2"/>' +
      '<g ' + F + ' font-size="20" text-anchor="middle"><text x="205" y="78" class="dpxHue">R</text><text x="205" y="104" class="dpxHue dpxH2">E</text><text x="205" y="130" class="dpxHue dpxH3">X</text></g>' +
      /* marquee band */
      '<rect x="112" y="150" width="186" height="14" fill="#1a1a2a"/><g fill="' + GLD + '" class="dpxTw"><circle cx="122" cy="157" r="2"/><circle cx="142" cy="157" r="2"/><circle cx="162" cy="157" r="2"/><circle cx="182" cy="157" r="2"/><circle cx="228" cy="157" r="2"/><circle cx="248" cy="157" r="2"/><circle cx="268" cy="157" r="2"/><circle cx="288" cy="157" r="2"/></g>' +
      /* club door with light */
      '<rect x="180" y="168" width="50" height="36" fill="#120a1a"/><path class="dpxBeam" d="M205 204L190 168h30z" fill="' + PNK + '" opacity=".5"/>' +
      '<text x="205" y="164" text-anchor="middle" ' + F + ' font-size="7" fill="#fff">CLUB</text>' +
      /* pavement and queue */
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a44"/><rect x="0" y="204" width="400" height="4" fill="#6a6a74"/>' +
      crowd(246, 14, "#1d1d28"),
      sky("dpxs3", "#0c0e24", "#2a2448"));
  }

  /* 4. Alive 2007 at Bercy: the grass-sloped arena walls outside, inside the light pyramid glowing in changing colours,
        LED grid behind, the crowd */
  function dpxbercy() {
    let grid = "";
    for (let x = 30; x < 380; x += 16) for (let y = 30; y < 118; y += 14)
      grid += '<rect x="' + x + '" y="' + y + '" width="12" height="10" fill="#1d2440" class="' + (((x + y) / 2) % 3 === 0 ? 'dpxTw' : (x % 3 ? 'dpxTw dpxT2' : '')) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#07060e"/>' +
      grid +
      /* green sloped walls framing the stage (the arena's grass sides) */
      '<path d="M0 30l40 -30v260H0z" fill="#3c6a32"/><path d="M400 30l-40 -30v260h40z" fill="#3c6a32"/>' +
      '<path d="M0 30l40 -30M400 30l-40 -30" stroke="#5a8a44" stroke-width="3"/>' +
      /* the pyramid */
      '<path d="M200 50L300 170H100z" fill="#0d0d1a" stroke="' + SLV + '" stroke-width="2"/>' +
      '<path d="M200 50L250 110H150z" class="dpxHue" opacity=".85"/>' +
      '<path d="M150 110L250 110L300 170H100z" class="dpxHue dpxH2" opacity=".55"/>' +
      '<path d="M200 50L200 170M150 110l50 60l50 -60" stroke="#fff" stroke-width="1" opacity=".5" fill="none"/>' +
      /* booth in the pyramid window */
      '<rect x="176" y="138" width="48" height="18" rx="2" fill="#050508" stroke="' + GLD + '" stroke-width="1.5"/>' +
      '<g fill="#fff" class="dpxTw"><circle cx="186" cy="147" r="2"/><circle cx="200" cy="147" r="2"/><circle cx="214" cy="147" r="2"/></g>' +
      /* beams */
      '<path class="dpxBeam" d="M120 180L100 20h40z" fill="' + PNK + '" opacity=".18"/><path class="dpxBeam dpxBm2" d="M280 180L260 20h40z" fill="#3ec7ff" opacity=".18"/>' +
      /* stage deck and crowd */
      '<rect x="60" y="170" width="280" height="10" fill="' + SLV + '" opacity=".7"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#0c0b18"/>' + crowd(236, 22, "#22203a"),
      '');
  }

  /* 5. Boulevard Malesherbes at Avenue de Villiers: Haussmann blocks with grey zinc roofs, the dome of Saint-Augustin behind,
        the tagged wall, a scooter going by, Paris street-name plaques (dark blue enamel, green border) */
  function dpxcorner() {
    const plaque = (y, a, b) => '<rect x="250" y="' + y + '" width="146" height="34" rx="3" fill="#24357a" stroke="#2e7d4a" stroke-width="3"/>' +
      '<rect x="254" y="' + (y + 4) + '" width="138" height="26" rx="2" fill="none" stroke="#fff" stroke-width="1"/>' +
      '<text x="323" y="' + (y + 14) + '" text-anchor="middle" ' + F + ' font-size="7" fill="#fff">' + a + '</text>' +
      '<text x="323" y="' + (y + 26) + '" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">' + b + '</text>';
    const scoot = '<g class="dpxScoot"><circle cx="0" cy="234" r="7" fill="#111"/><circle cx="36" cy="234" r="7" fill="#111"/><path d="M-4 226h30q10 0 12 8M30 226l-4 -20h-6" stroke="' + PNK + '" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<g fill="#2b3644"><circle cx="12" cy="194" r="5"/><rect x="7" y="199" width="11" height="22" rx="4"/></g><rect x="4" y="194" width="14" height="5" rx="2" fill="' + GLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dpxs5)"/>' + bird(0, 26) +
      /* Saint-Augustin: grey-green dome with lantern, pale stone drum */
      '<rect x="168" y="96" width="64" height="64" fill="#d8d0bc"/>' +
      '<path d="M164 98q36 -60 72 0z" fill="#6f8a86"/><path d="M182 98q18 -50 36 0" stroke="#8aa6a0" stroke-width="2" fill="none"/>' +
      '<rect x="194" y="40" width="12" height="14" fill="#d8d0bc"/><path d="M192 40q8 -14 16 0z" fill="#6f8a86"/><path d="M200 26v-8M196 22h8" stroke="#c9a24a" stroke-width="2"/>' +
      '<g fill="#8a8270"><rect x="176" y="110" width="8" height="20" rx="4"/><rect x="196" y="110" width="8" height="20" rx="4"/><rect x="216" y="110" width="8" height="20" rx="4"/></g>' +
      haus(0, 140, 104, "#e2d8c2") + haus(260, 140, 110, "#dccfb6") +
      /* the tagged wall */
      '<rect x="0" y="160" width="400" height="50" fill="#2a2440"/>' +
      '<path d="M0 174h400M0 188h400" stroke="#221d36" stroke-width="1"/>' +
      tag("DARLIN'", 10, 182, 15, SLV, -4) +
      tag("DAFT PUNK", 96, 204, 34, GLD, -3) +
      tag("ROBOTS", 312, 190, 15, PNK, -6) +
      '<rect x="0" y="210" width="400" height="50" fill="#6e6a64"/><rect x="0" y="208" width="400" height="4" fill="#b0aca4"/>' +
      '<path d="M0 236h400" stroke="#8a857e" stroke-width="1" stroke-dasharray="6 6"/>' + scoot +
      /* plaques on the corner building */
      plaque(24, "17e ARR.", "BD MALESHERBES") + plaque(62, "17e ARR.", "AV. DE VILLIERS"),
      sky("dpxs5", "#9cc4e8", "#efe8dc"));
  }

  window.SCENES = { dpxstation, dpxlycee, dpxrex, dpxbercy, dpxcorner };
})();
