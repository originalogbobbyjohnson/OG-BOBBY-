/* chesterwatson scenes (Regions tab: South Florida; Clearwater, Tampa Bay). CSS classes prefixed cw- (the page's own anim-train is kept).
   1 A PSTA bus pulling into Park Street Terminal in downtown Clearwater: palms, low stucco blocks, the black stop sign with the PSTA badge.
   2 The ballet studio: he trained in ballet at a performing arts school before he switched schools in St. Pete. Mirror, barre, a dancer silhouette turning, slippers on the floor.
   3 "40 Acres": the place he wants for the kids, a skate bowl with a lake and a fence, a board rolling the bowl, cypress and Spanish moss.
   4 "fish don't climb trees": a fish up in a tree on a mountain, out of its element and at home, moon over the peaks.
   5 Cleveland St and N Fort Harrison Ave in downtown Clearwater: green signs, CHESTER tagged with NU AGE and MONTI, the white Memorial Causeway bridge arching to the beach behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cwsway{0%,100%{transform:rotate(-2.5deg)}50%{transform:rotate(2.5deg)}}.cw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:cwsway 3.8s ease-in-out infinite}.cw-sway2{animation-delay:-1.9s}' +
    '@keyframes cwspin{0%,100%{transform:rotate(-6deg) translateY(0)}50%{transform:rotate(6deg) translateY(-4px)}}.cw-spin{transform-box:fill-box;transform-origin:50% 100%;animation:cwspin 2.4s ease-in-out infinite}' +
    '@keyframes cwroll{0%,100%{transform:translateX(0) rotate(0)}50%{transform:translateX(150px) rotate(10deg)}}.cw-roll{transform-box:fill-box;transform-origin:50% 100%;animation:cwroll 3s ease-in-out infinite}' +
    '@keyframes cwrip{0%,100%{opacity:.3}50%{opacity:.8}}.cw-rip{animation:cwrip 2.6s ease-in-out infinite}.cw-rip2{animation-delay:-1.3s}' +
    '@keyframes cwflop{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(10deg)}}.cw-flop{transform-box:fill-box;transform-origin:20% 50%;animation:cwflop 1.4s ease-in-out infinite}' +
    '@keyframes cwtw{0%,100%{opacity:.25}50%{opacity:1}}.cw-tw{animation:cwtw 2.2s ease-in-out infinite}.cw-tw2{animation-delay:-1.1s}' +
    '@keyframes cwcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.cw-car{animation:cwcar 9s linear infinite}' +
    '@keyframes cwbub{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.cw-bub{animation:cwbub 2.4s ease-out infinite}.cw-b2{animation-delay:-.8s}.cw-b3{animation-delay:-1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, c, cls) => '<g class="cw-sway ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q5 -' + (h / 2) + ' 2 -' + h + '" stroke="#4a3a2a" stroke-width="4" fill="none"/>' +
    [-44, -22, 0, 22, 44, -64, 64].map(a => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (a / 2) + ' -12 ' + a + ' ' + (Math.abs(a) / 3 + 4) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const PSTA = "#005daa", LIME = "#9be37a", LAV = "#b48cff", GOLD = "#ffcf6b";

  /* 1. PSTA bus at Park Street Terminal, downtown Clearwater */
  function cwstation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (80 + i * 38) + '" y="128" width="32" height="30" rx="3" fill="#22303d"/>';
    const bus = '<g class="anim-train"><rect x="34" y="116" width="290" height="80" rx="10" fill="#f4f4f2" stroke="#8d949b" stroke-width="2"/>' + win +
      '<rect x="42" y="128" width="30" height="56" rx="3" fill="#22303d"/><path d="M57 128v56" stroke="#8d949b" stroke-width="1.5"/>' +
      '<path d="M34 170h290v10H34z" fill="' + PSTA + '"/><path d="M34 164h290v5H34z" fill="' + LIME + '"/>' +
      '<rect x="300" y="124" width="20" height="40" rx="4" fill="#22303d"/><rect x="290" y="118" width="32" height="8" rx="2" fill="#111"/><text x="306" y="124.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb347">PARK ST</text>' +
      '<circle cx="80" cy="198" r="13" fill="#1a1a1a"/><circle cx="80" cy="198" r="6" fill="#bbb"/><circle cx="276" cy="198" r="13" fill="#1a1a1a"/><circle cx="276" cy="198" r="6" fill="#bbb"/>' +
      '<rect x="316" y="182" width="10" height="6" rx="2" fill="#fff6c2"/><rect x="120" y="104" width="120" height="12" rx="3" fill="#d6d8d6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cws1)"/>' +
      '<circle cx="64" cy="42" r="18" fill="#fff1b8" opacity=".9"/>' +
      '<rect x="0" y="66" width="100" height="44" fill="#f0d9b5"/><rect x="100" y="56" width="80" height="54" fill="#cfe3d8"/><rect x="180" y="70" width="110" height="40" fill="#f2c9b8"/><rect x="290" y="60" width="110" height="50" fill="#e4dcc0"/>' +
      [12, 44, 110, 144, 196, 232, 300, 340, 374].map(x => '<rect x="' + x + '" y="80" width="18" height="14" fill="#6d8592" opacity=".75"/>').join("") +
      palm(30, 112, 74) + palm(210, 112, 84, "#3a6b40", "cw-sway2") +
      '<rect x="0" y="110" width="400" height="8" fill="#cfc6b4"/>' +
      /* terminal canopy */
      '<rect x="0" y="94" width="400" height="6" fill="#7d8288"/>' +
      bus +
      '<rect x="0" y="210" width="400" height="8" fill="#d8d0c0"/><rect x="0" y="218" width="400" height="42" fill="#4a4c52"/><path d="M0 240h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="356" y="100" width="4" height="112" fill="#7d8288"/>' +
      '<rect x="276" y="44" width="118" height="50" rx="3" fill="#111" stroke="#555"/><text x="335" y="62" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Park Street</text><text x="335" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Terminal</text>' +
      '<rect x="306" y="80" width="58" height="11" rx="5.5" fill="' + PSTA + '"/><text x="335" y="88.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">PSTA</text>',
      sky("cws1", "#7fc4e8", "#e8f6fb"));
  }

  /* 2. The ballet studio */
  function cwballet() {
    return svg(
      '<rect width="400" height="260" fill="#2a2433"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#e9dccf"/>' +
      /* big mirror */
      '<rect x="30" y="30" width="340" height="130" fill="#bfd3dc" stroke="#9a8a78" stroke-width="4"/><path d="M60 40l40 110M130 40l30 80M300 40l30 100" stroke="#fff" stroke-width="3" opacity=".5"/>' +
      /* barre */
      '<rect x="20" y="126" width="360" height="5" rx="2" fill="#a9763f"/>' + [40, 200, 360].map(x => '<rect x="' + x + '" y="131" width="4" height="34" fill="#7d8288"/>').join("") +
      /* dancer silhouette turning (no face) */
      '<g class="cw-spin"><g fill="#2a2433"><circle cx="200" cy="64" r="9"/><path d="M196 74h8l4 40h-16z"/><path d="M170 112q30 -12 60 0q-30 10 -60 0z" fill="' + LAV + '"/><path d="M196 114l-2 44M204 114l10 26l-12 4" stroke="#2a2433" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M196 80q-20 -10 -24 -30M204 80q20 -10 24 -30" stroke="#2a2433" stroke-width="4" fill="none" stroke-linecap="round"/></g></g>' +
      /* wood floor */
      '<rect x="0" y="190" width="400" height="70" fill="#b98a54"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 190l-30 70" stroke="#9a6e3c" stroke-width="2"/>').join("") +
      /* slippers with ribbons */
      '<path d="M90 222q12 -8 24 0q-12 6 -24 0z" fill="#f2b8c6"/><path d="M118 226q12 -8 24 0q-12 6 -24 0z" fill="#f2b8c6"/><path d="M110 220q10 -14 26 -6M138 224q14 -6 20 4" stroke="#f2b8c6" stroke-width="1.5" fill="none"/>' +
      '<g fill="' + GOLD + '"><text class="cw-tw" x="300" y="216" font-size="18">&#9834;</text><text class="cw-tw cw-tw2" x="330" y="236" font-size="14">&#9835;</text></g>',
      "");
  }

  /* 3. 40 Acres: a skate bowl with a lake and a fence */
  function cwacres() {
    const moss = (x, y) => '<path d="M' + x + ' ' + y + 'q2 14 -2 26M' + (x + 6) + ' ' + y + 'q3 10 0 18M' + (x - 6) + ' ' + y + 'q-2 12 1 20" stroke="#a7b59a" stroke-width="2" fill="none" class="cw-sway"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cws3)"/>' +
      /* lake */
      '<path d="M0 110h400v40H0z" fill="#3f7f8f"/><path d="M20 124h60M140 132h80M260 122h70" stroke="#bfe6ef" stroke-width="2" class="cw-rip"/><path d="M60 140h50M220 142h60" stroke="#bfe6ef" stroke-width="2" class="cw-rip cw-rip2"/>' +
      /* cypress + moss */
      '<path d="M330 112v-50" stroke="#4a3424" stroke-width="6"/><ellipse cx="330" cy="54" rx="40" ry="20" fill="#3f6b3a"/>' + moss(312, 66) + moss(346, 64) +
      '<path d="M50 112v-40" stroke="#4a3424" stroke-width="5"/><ellipse cx="50" cy="66" rx="30" ry="16" fill="#3f6b3a"/>' + moss(40, 76) +
      /* grass + chain-link fence */
      '<rect x="0" y="150" width="400" height="110" fill="#6e9b4f"/>' +
      '<g stroke="#9aa3ad" stroke-width="1">' + Array.from({ length: 41 }, (_, i) => '<path d="M' + (i * 10) + ' 150l10 20M' + (i * 10 + 10) + ' 150l-10 20"/>').join("") + '</g><path d="M0 150h400M0 170h400" stroke="#7d8288" stroke-width="2"/>' +
      /* the bowl */
      '<path d="M60 178h280q20 0 20 20v20q0 30 -40 30H80q-40 0 -40 -30v-20q0 -20 20 -20z" fill="#d9d6cf" stroke="#9a968c" stroke-width="3"/>' +
      '<path d="M80 194h240q12 0 12 14v8q0 20 -30 20H98q-30 0 -30 -20v-8q0 -14 12 -14z" fill="#c4c0b6"/><path d="M60 178h280" stroke="#e8c84a" stroke-width="4"/>' +
      /* the board rolling */
      '<g class="cw-roll"><g transform="translate(110 216)"><rect x="0" y="0" width="44" height="6" rx="3" fill="' + LAV + '" stroke="#3b2a5a"/><circle cx="8" cy="9" r="3.5" fill="' + LIME + '"/><circle cx="36" cy="9" r="3.5" fill="' + LIME + '"/></g></g>' +
      '<rect x="14" y="20" width="120" height="22" rx="2" fill="#2a2433"/><text x="74" y="35.5" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">40 ACRES</text>',
      sky("cws3", "#f9b97a", "#fde8c8"));
  }

  /* 4. fish don't climb trees */
  function cwfish() {
    let stars = ""; [[30, 30], [80, 60], [140, 24], [250, 40], [300, 20], [370, 56], [200, 70]].forEach((p, i) => stars += '<circle class="cw-tw' + (i % 2 ? " cw-tw2" : "") + '" cx="' + p[0] + '" cy="' + p[1] + '" r="1.8" fill="#fff"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#cws4)"/>' + stars +
      '<circle cx="330" cy="54" r="22" fill="#f4efd8"/><circle cx="322" cy="48" r="4" fill="#ddd6b8"/>' +
      /* peaks */
      '<path d="M0 200l70 -100l50 60l60 -110l70 100l50 -50l100 100v100H0z" fill="#3a3355"/><path d="M180 50l-16 28l10 -4l6 8l6 -8l10 4z" fill="#e8e4f0"/>' +
      '<path d="M0 230l90 -60l80 40l90 -70l140 90v30H0z" fill="#2a2440"/>' +
      /* the tree on the ridge */
      '<path d="M240 200q-6 -50 4 -90" stroke="#4a3424" stroke-width="8" fill="none"/><path d="M244 140q30 -10 50 -30M242 160q-30 -6 -46 -26" stroke="#4a3424" stroke-width="5" fill="none"/>' +
      '<ellipse cx="246" cy="96" rx="50" ry="26" fill="#2f5a35"/><ellipse cx="292" cy="108" rx="20" ry="13" fill="#2f5a35"/><ellipse cx="198" cy="128" rx="20" ry="12" fill="#2f5a35"/>' +
      /* the fish up in the branch */
      '<g class="cw-flop"><g transform="translate(266 116)"><path d="M0 8q16 -16 36 0q-20 16 -36 0z" fill="' + GOLD + '" stroke="#8a5a10" stroke-width="1.5"/><path d="M36 8l12 -9v18z" fill="' + GOLD + '" stroke="#8a5a10" stroke-width="1.5"/><circle cx="8" cy="6" r="2" fill="#111"/><path d="M16 2q4 6 0 12" stroke="#8a5a10" stroke-width="1.2" fill="none"/></g></g>' +
      '<g fill="#bfe6ef"><circle class="cw-bub" cx="268" cy="114" r="2.5"/><circle class="cw-bub cw-b2" cx="262" cy="112" r="1.8"/><circle class="cw-bub cw-b3" cx="272" cy="110" r="2"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#1c1830"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="' + LIME + '" letter-spacing="2">FISH DON\'T CLIMB TREES</text>',
      sky("cws4", "#1b1640", "#5b3f7a"));
  }

  /* 5. Cleveland St & N Fort Harrison Ave, the Memorial Causeway bridge behind */
  function cwcorner() {
    const car = (y, body) => '<g class="cw-car"><g transform="translate(0 ' + y + ')"><rect x="0" y="8" width="66" height="15" rx="5" fill="' + body + '"/><path d="M12 8l8 -9h24l10 9z" fill="' + body + '"/><path d="M18 7l5 -6h8v6zM34 7v-6h8l7 6z" fill="#bfe3f2"/><circle cx="15" cy="24" r="6" fill="#111"/><circle cx="51" cy="24" r="6" fill="#111"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cws5)"/>' +
      /* water + the white causeway bridge arching to the beach */
      '<rect x="0" y="108" width="400" height="30" fill="#4f8fb0"/>' +
      '<path d="M0 104q200 -70 400 0" stroke="#f4f4f2" stroke-width="7" fill="none"/><path d="M0 110q200 -70 400 0" stroke="#d9d9d4" stroke-width="3" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => { const x = 40 + i * 40; const y = 104 - 70 * (1 - Math.pow((x - 200) / 200, 2)) * .5 * 2 / 2; return '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (138 - y) + '" fill="#e8e8e2"/>'; }).join("") +
      Array.from({ length: 8 }, (_, i) => '<circle class="cw-tw' + (i % 2 ? " cw-tw2" : "") + '" cx="' + (30 + i * 48) + '" cy="' + (104 - 70 * (1 - Math.pow((30 + i * 48 - 200) / 200, 2)) / 2) + '" r="2.5" fill="#fff6c2"/>').join("") +
      palm(30, 150, 100) + palm(330, 150, 110, "#3a6b40", "cw-sway2") +
      '<rect x="0" y="138" width="400" height="12" fill="#c9bfa8"/>' +
      /* wall + tags */
      '<rect x="20" y="146" width="290" height="58" fill="#f2e6d0"/><rect x="20" y="146" width="290" height="5" fill="#d3c4a6"/>' +
      tag("CHESTER", 36, 188, 32, LIME, -4) + tag("NU AGE", 200, 170, 18, LAV, -7) + tag("MONTI", 214, 196, 16, GOLD, -3) +
      '<rect x="0" y="204" width="400" height="10" fill="#d0c8b4"/><rect x="0" y="214" width="400" height="46" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(212, "#2b2b33") +
      '<rect x="356" y="40" width="5" height="174" fill="#7d8288"/>' + sign(232, 42, 158, "Cleveland St", 13) + sign(232, 68, 158, "N Fort Harrison Av", 12),
      sky("cws5", "#ff9f6b", "#ffe2b3"));
  }

  window.SCENES = { cwstation, cwballet, cwacres, cwfish, cwcorner };
})();
