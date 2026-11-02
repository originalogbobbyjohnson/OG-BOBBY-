/* Newark, New Jersey opening scenes for the Rah Digga game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes wave{0%,100%{transform:skewY(0) scaleY(1)}50%{transform:skewY(4deg) scaleY(.9)}}' +
    '.flag{transform-box:fill-box;transform-origin:50% 0;animation:wave 1.4s ease-in-out infinite}.flag2{animation-delay:-.7s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-22px);opacity:0}}' +
    '.stm{animation:steam 2s ease-out infinite}.stm2{animation-delay:-1s}' +
    '@keyframes rip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}' +
    '.rip{animation:rip 3s ease-in-out infinite}' +
    '@keyframes boat{from{transform:translateX(-90px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 18s linear infinite}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-60px)}}' +
    '.car{animation:car 5s linear infinite}.car2{animation-delay:-2.5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:1}}' +
    '.bulb{animation:glow 1.2s infinite}.bulb2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff8a5b", GOLD = "#ffd34d", PURPLE = "#b07cff";

  /* 1. Newark Penn Station, down on the PATH platform at the Ironbound end: the Art Deco lanterns, the silver PATH train rolling in, and the Ferry St exit with the Ironbound's flags showing at the top of the stairs */
  function train() {
    let windows = "";
    for (let x = 0; x < 220; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/><rect x="' + (x + 34) + '" y="134" width="8" height="40" fill="#8a9099"/>';
    let lamps = "";
    for (let x = 40; x < 260; x += 90) lamps += '<path d="M' + x + ' 0v18" stroke="#8a6a2a" stroke-width="2"/><path class="flk' + (x % 180 ? " flk2" : "") + '" d="M' + (x - 10) + ' 18h20l-4 18h-12z" fill="#ffd98a" stroke="#8a6a2a" stroke-width="1.5"/><path d="M' + (x - 10) + ' 24h20M' + (x - 10) + ' 30h20" stroke="#8a6a2a" stroke-width="1"/>';
    let steps = "";
    for (let i = 0; i < 9; i++) steps += '<rect x="' + (272 + i * 14) + '" y="' + (186 - i * 12) + '" width="14" height="' + (12 + i * 12) + '" fill="' + (i % 2 ? "#6a6560" : "#7a7570") + '"/>';
    let flags = "";
    for (let i = 0; i < 6; i++) flags += '<g class="flag' + (i % 2 ? " flag2" : "") + '"><path d="M' + (284 + i * 18) + ' ' + (22 + (i % 3) * 2) + 'h14l-7 12z" fill="' + (i % 2 ? "#046a38" : "#da291c") + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#14110f"/>' +
      /* Deco ceiling */
      '<rect x="0" y="0" width="270" height="48" fill="#3a3229"/>' +
      (function () { let z = ""; for (let x = 0; x < 270; x += 20) z += '<path d="M' + x + ' 44l10 -8 10 8" stroke="#a8884a" stroke-width="1.5" fill="none"/>'; return z; })() +
      lamps +
      /* the exit up to Ferry St: daylight, brick rowhouses, the Portuguese and Brazilian bunting */
      '<rect x="270" y="0" width="130" height="196" fill="#9cc3e0"/>' +
      '<rect x="276" y="40" width="50" height="60" fill="#9a4a32"/><rect x="330" y="30" width="64" height="70" fill="#c9b48a"/>' +
      '<path d="M276 20Q336 36 396 22" stroke="#444" stroke-width="1" fill="none"/>' + flags +
      steps + '<path d="M272 176L398 68" stroke="#b9b2a4" stroke-width="4"/>' +
      '<rect x="276" y="104" width="114" height="34" rx="3" fill="#111"/>' +
      '<text x="284" y="118" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">EXIT ↑ Ferry St</text>' +
      '<text x="284" y="131" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="' + ORANGE + '">Ironbound</text>' +
      /* station sign */
      '<rect x="16" y="58" width="244" height="40" rx="4" fill="#111"/><rect x="16" y="58" width="244" height="4" fill="#fff"/>' +
      '<text x="26" y="84" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Newark Penn Station</text>' +
      badge(178, 92, 38, "PATH", "#d93a30") + badge(220, 92, 34, "NJT", "#1b3d8f") +
      '<rect x="0" y="110" width="270" height="76" fill="#07080b"/>' +
      '<g class="anim-train">' +
        '<rect x="-40" y="124" width="300" height="60" rx="8" fill="#d4d8de" stroke="#7a828c" stroke-width="2"/>' +
        '<rect x="-40" y="160" width="300" height="5" fill="#d93a30"/><rect x="-40" y="165" width="300" height="3" fill="#1b3d8f"/>' + windows +
        '<rect x="240" y="132" width="16" height="24" rx="4" fill="#ffe9b0" opacity=".85"/><circle cx="252" cy="176" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a2a2e"/>' +
      tag("RAH DIGGA", 18, 242, 30, ORANGE, -5) + tag("DIRTY HARRIET", 220, 246, 22, PURPLE, -6));
  }

  /* 2. Ferry Street in the Ironbound: Portuguese and Brazilian flags strung over the street, a bakery with a striped awning, coffee steaming */
  function ferry() {
    let bunting = "";
    for (let i = 0; i < 16; i++) {
      const x = 8 + i * 25, y = 30 + Math.sin(i / 15 * Math.PI) * 14, pt = i % 2;
      bunting += '<g class="flag' + (i % 2 ? " flag2" : "") + '"><path d="M' + x + ' ' + y + 'h18l-9 16z" fill="' + (pt ? "#046a38" : "#da291c") + '"/>' +
        (pt ? '<circle cx="' + (x + 9) + '" cy="' + (y + 6) + '" r="3" fill="#ffd100"/>' : '<path d="M' + (x + 9) + ' ' + y + 'v16" stroke="#ffd100" stroke-width="1"/>') + '</g>';
    }
    let awning = "";
    for (let x = 30; x < 190; x += 20) awning += '<path d="M' + x + ' 104h10l-2 20h-10z" fill="#c8102e"/><path d="M' + (x + 10) + ' 104h10l-2 20h-10z" fill="#f4efe3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<path d="M0 30q200 32 400 0" stroke="#333" stroke-width="1.5" fill="none"/>' + bunting +
      /* bakery: tan brick, striped awning, a window of pastries */
      '<rect x="20" y="70" width="180" height="146" fill="#c9a77a"/><rect x="20" y="70" width="180" height="10" fill="#a8865a"/>' +
      '<text x="110" y="98" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="14" fill="#5a2a12">PADARIA</text>' + awning +
      '<rect x="36" y="134" width="96" height="60" fill="#3a2a20" stroke="#f4efe3" stroke-width="3"/>' +
      (function () { let p = ""; for (let i = 0; i < 6; i++) p += '<circle cx="' + (50 + i * 14) + '" cy="180" r="6" fill="#e8b45a" stroke="#a8742a" stroke-width="1.5"/><circle cx="' + (50 + i * 14) + '" cy="180" r="2.5" fill="#6a3a12"/>'; return p; })() +
      '<rect x="146" y="140" width="38" height="76" fill="#5a2a12"/>' +
      /* cafe table out front with coffee steaming */
      '<rect x="226" y="196" width="40" height="4" fill="#333"/><rect x="244" y="200" width="4" height="16" fill="#333"/>' +
      '<rect x="238" y="186" width="14" height="10" rx="2" fill="#fff"/><path d="M252 189q5 0 0 5" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<path class="stm" d="M242 184q-4 -6 0 -12" stroke="#fff" stroke-width="1.5" fill="none" opacity=".8"/><path class="stm stm2" d="M248 184q4 -6 0 -12" stroke="#fff" stroke-width="1.5" fill="none" opacity=".8"/>' +
      /* row houses on the right */
      '<rect x="290" y="82" width="110" height="134" fill="#8a9fb8"/>' +
      (function () { let w = ""; for (let y = 96; y < 200; y += 30) for (let x = 302; x < 400; x += 30) w += '<rect x="' + x + '" y="' + y + '" width="14" height="18" fill="#2e3a4a"/>'; return w; })() +
      '<rect x="0" y="216" width="400" height="44" fill="#6a6560"/>' +
      (function () { let c = ""; for (let x = 0; x < 400; x += 16) c += '<rect x="' + x + '" y="216" width="14" height="6" fill="#857f78"/>'; return c; })() +
      '<rect x="10" y="230" width="132" height="22" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="76" y="245" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Ferry St</text>',
      sky("g2", "#6db5e6", "#d8eef8"));
  }

  /* 3. The Essex County Historic Courthouse on Market St (Cass Gilbert, 1907): white granite, the columned front and the dome, the seated Lincoln statue out front, pigeons lifting off the steps */
  function river() {
    let cols = "";
    for (let x = 132; x <= 268; x += 17) cols += '<rect x="' + x + '" y="112" width="8" height="64" fill="#f4f1ea"/><rect x="' + (x - 2) + '" y="108" width="12" height="5" fill="#e0dbd0"/>';
    let wins = "";
    [[40, 120], [72, 120], [304, 120], [336, 120], [40, 150], [72, 150], [304, 150], [336, 150]].forEach(([x, y]) => wins += '<rect x="' + x + '" y="' + y + '" width="18" height="22" fill="#2a3440" stroke="#f4f1ea" stroke-width="2"/>');
    return svg(
      '<style>@keyframes pg{0%{transform:translate(0,0)}100%{transform:translate(80px,-120px);opacity:0}}.pg{animation:pg 4s ease-out infinite}.pg2{animation-delay:-2s}</style>' +
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="340" cy="36" r="16" fill="#fff2c0"/><g class="cld"><ellipse cx="0" cy="28" rx="44" ry="7" fill="#fff" opacity=".5"/></g>' +
      /* dome + drum */
      '<rect x="168" y="62" width="64" height="26" fill="#ece8de"/>' + (function () { let p = ""; for (let x = 172; x < 230; x += 9) p += '<rect x="' + x + '" y="66" width="4" height="18" fill="#d6d0c2"/>'; return p; })() +
      '<path d="M162 64q38 -52 76 0z" fill="#e6e2d8" stroke="#c9c3b6"/><path d="M200 14v-8" stroke="#c9c3b6" stroke-width="3"/><circle cx="200" cy="16" r="3" fill="#c9c3b6"/>' +
      /* body: wings + central portico */
      '<rect x="24" y="96" width="352" height="96" fill="#ebe7dc"/><rect x="20" y="92" width="360" height="6" fill="#f7f4ec"/>' + wins +
      '<path d="M120 108l80 -22 80 22z" fill="#f4f1ea" stroke="#c9c3b6"/>' + cols +
      '<rect x="120" y="176" width="160" height="6" fill="#d6d0c2"/>' +
      '<text x="200" y="104" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="7" fill="#7a7466" letter-spacing="1">COURT HOUSE</text>' +
      /* steps */
      '<path d="M110 192h180l10 8H100zM100 200h200l10 8H90z" fill="#d9d4c8"/>' +
      /* the seated Lincoln statue on its bench, as a dark bronze silhouette */
      '<rect x="40" y="200" width="70" height="10" fill="#8a8478"/><path d="M58 200v-14h34v14z" fill="#3a3a30"/><circle cx="66" cy="180" r="6" fill="#3a3a30"/><path d="M60 186h14l4 14h-18z" fill="#3a3a30"/>' +
      /* plaza + Market St */
      '<rect x="0" y="208" width="400" height="52" fill="#8a8a86"/><rect x="0" y="236" width="400" height="24" fill="#2e3136"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="pg"><path d="M220 200q4 -4 8 0q4 -4 8 0" stroke="#555" stroke-width="2" fill="none"/></g><g class="pg pg2"><path d="M250 204q4 -4 8 0q4 -4 8 0" stroke="#555" stroke-width="2" fill="none"/></g>' +
      '<g class="car"><rect x="0" y="238" width="44" height="14" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="8" y="8" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="50" y="21" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Market St</text>' +
      tag("FLIPMODE", 280, 228, 22, GOLD, -4),
      sky("g3", "#5a96d0", "#e6f0f4"));
  }

  /* 4. Newark Symphony Hall on Broad St: the pale limestone 1925 front, tall arched windows, the lit marquee */
  function hall() {
    let arches = "";
    for (let x = 70; x < 340; x += 46) arches += '<path d="M' + x + ' 140v-62a14 14 0 0 1 28 0v62z" fill="#2a2a3a"/><path class="flk' + (x % 92 ? "" : " flk2") + '" d="M' + (x + 3) + ' 136v-56a11 11 0 0 1 22 0v56z" fill="#ffd98a" opacity=".55"/>';
    let bulbs = "";
    for (let x = 64; x < 340; x += 12) bulbs += '<circle class="bulb' + (x % 24 ? " bulb2" : "") + '" cx="' + x + '" cy="152" r="2.2" fill="#fff3b0"/><circle class="bulb' + (x % 24 ? "" : " bulb2") + '" cx="' + x + '" cy="184" r="2.2" fill="#fff3b0"/>';
    let crowd = "";
    for (let i = 0; i < 22; i++) { const x = 8 + i * 18, c = [ORANGE, GOLD, PURPLE, "#f1ede3"][i % 4]; crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (228 + (i % 3) * 3) + '" r="6" fill="#2b1d16"/><rect x="' + (x - 7) + '" y="' + (234 + (i % 3) * 3) + '" width="14" height="22" rx="5" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(18) +
      /* limestone front */
      '<rect x="40" y="40" width="320" height="180" fill="#d9ccb0"/><rect x="34" y="34" width="332" height="10" fill="#c4b594"/>' +
      '<path d="M40 56h320" stroke="#c4b594" stroke-width="2"/>' + arches +
      /* marquee */
      '<rect x="54" y="146" width="292" height="44" fill="#1a1414" stroke="#c4a24a" stroke-width="2"/>' + bulbs +
      '<text x="200" y="174" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" textLength="230" lengthAdjust="spacingAndGlyphs" fill="' + ORANGE + '">TONIGHT: RAH DIGGA</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3c42"/>' + crowd +
      '<text x="200" y="28" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="13" letter-spacing="3" fill="#f4efe3">SYMPHONY HALL</text>',
      sky("g4", "#0b0d24", "#2c2a4a"));
  }

  /* 5. Halsey St and New St, downtown Newark's art street: green street signs, streetlight, her tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="282" y="50" width="90" height="170" fill="#3c3a48"/>' +
      (function () { let w = ""; for (let y = 60; y < 210; y += 16) for (let x = 290; x < 366; x += 16) w += '<rect x="' + x + '" y="' + y + '" width="8" height="10" fill="' + ((x + y) % 3 ? "#22202a" : "#ffd98a") + '"/>'; return w; })() +
      /* tag wall */
      '<rect x="14" y="70" width="228" height="150" fill="#33363f"/>' +
      '<rect x="14" y="70" width="228" height="150" fill="' + PURPLE + '" opacity=".22"/>' +
      tag("RAH DIGGA", 26, 140, 34, ORANGE, -7) + tag("FLIPMODE", 40, 196, 26, GOLD, -3) +
      /* streetlight */
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h24" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M278 62h24l-6 8h-12z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="257" y="90" width="86" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Halsey St</text>' +
      '<rect x="261" y="112" width="78" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="125" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">New St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#140a12", "#3a2040"));
  }

  window.SCENES = { train, ferry, river, hall, corner };
})();
