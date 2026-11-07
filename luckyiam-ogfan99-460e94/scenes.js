/* luckyiam scenes (Regions tab: Los Angeles + SoCal; Mid-City LA). CSS classes and ids prefixed lk- (the page's own anim-train is kept).
   1 Expo/La Brea station on the E Line: street-level platform on Exposition Blvd, palms, the gold E bullet, a Metro train sliding in.
   2 Urban Light at LACMA on Wilshire (Mid-City / Miracle Mile): rows of grey cast-iron street lamps glowing at dusk.
   3 The La Brea Tar Pits Lake Pit: the mammoth family by the black lake, tar bubbles rising.
   4 The El Rey Theatre on Wilshire, the Art Deco hall he played ("I Love Haters" live): red neon blade sign, gold marquee, crowd.
   5 Pico Blvd and La Brea Ave, the block he grew up on (LA Weekly): green signs, LUCKYIAM tagged on stucco, Baldwin Hills pumpjacks nodding behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.lk-flk{animation:lkflick 2.4s infinite}.lk-flk2{animation-delay:.8s}' +
    '@keyframes lkglow{0%,100%{opacity:.45}50%{opacity:1}}.lk-glow{animation:lkglow 2.4s ease-in-out infinite}.lk-g2{animation-delay:-.6s}.lk-g3{animation-delay:-1.2s}.lk-g4{animation-delay:-1.8s}' +
    '@keyframes lkbub{0%{transform:translateY(0) scale(.4);opacity:0}30%{opacity:.9}100%{transform:translateY(-16px) scale(1.1);opacity:0}}.lk-bub{transform-box:fill-box;transform-origin:50% 50%;animation:lkbub 2.6s ease-out infinite}.lk-b2{animation-delay:-.9s}.lk-b3{animation-delay:-1.7s}' +
    '@keyframes lktrunk{0%,100%{transform:rotate(0)}50%{transform:rotate(8deg)}}.lk-trunk{transform-box:fill-box;transform-origin:0% 0%;animation:lktrunk 3s ease-in-out infinite}' +
    '@keyframes lkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lk-bob{animation:lkbob .8s ease-in-out infinite}.lk-bob2{animation-delay:-.27s}.lk-bob3{animation-delay:-.54s}' +
    '@keyframes lknod{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.lk-nod{transform-box:fill-box;transform-origin:50% 50%;animation:lknod 2.8s ease-in-out infinite}.lk-nod2{animation-delay:-1.4s}' +
    '@keyframes lksway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lk-sway{transform-box:fill-box;transform-origin:50% 100%;animation:lksway 4s ease-in-out infinite}' +
    '@keyframes lkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lk-sp{animation:lkspray 1.4s ease-out infinite}.lk-sp2{animation-delay:.45s}' +
    '@keyframes lkchase{0%,100%{opacity:.25}50%{opacity:1}}.lk-ch{animation:lkchase 1.2s linear infinite}' +
    '@keyframes lkcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.lk-car{animation:lkcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.2"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff" stroke="#6b4a00" stroke-width=".6">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="lk-sway"><path d="M' + x + ' ' + y + 'q-3 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="' + (c || "#3a2f2a") + '" stroke-width="4" fill="none"/>' +
    [-60, -25, 10, 45, 80, 120].map(a => { const r = a * Math.PI / 180, tx = x + 2 + Math.cos(r) * 20, ty = y - h + Math.sin(r) * 8 + 6; return '<path d="M' + (x + 2) + ' ' + (y - h) + 'Q' + ((x + 2 + tx) / 2) + ' ' + (y - h - 10) + ' ' + tx + ' ' + ty + '" stroke="' + (c || "#2c3a26") + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>'; }).join("") + '</g>';
  const clover = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><circle cx="-6" cy="-6" r="6.5" fill="' + c + '"/><circle cx="6" cy="-6" r="6.5" fill="' + c + '"/><circle cx="-6" cy="6" r="6.5" fill="' + c + '"/><circle cx="6" cy="6" r="6.5" fill="' + c + '"/><path d="M0 6q4 12 10 16" stroke="' + c + '" stroke-width="2.5" fill="none"/></g>';
  const GOLD = "#fdb913", GREEN = "#4cc36b", RED = "#e2574c", CREAM = "#f3ead6";

  /* 1. Expo/La Brea: street-level E Line platform on Exposition Blvd under the LA sun */
  function lkstation() {
    let wins = "";
    for (let x = 40; x < 320; x += 34) wins += '<rect x="' + x + '" y="134" width="24" height="24" rx="3" fill="#2b3640"/>';
    const tr = '<g class="anim-train"><rect x="24" y="122" width="320" height="62" rx="10" fill="#e9ecef" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="24" y="164" width="320" height="6" fill="' + GOLD + '"/><rect x="24" y="172" width="320" height="3" fill="#59626b"/>' +
      '<rect x="326" y="128" width="18" height="52" rx="5" fill="#cfd4d9"/><rect x="330" y="134" width="12" height="16" rx="2" fill="#2b3640"/><circle cx="336" cy="172" r="3" fill="#fff6c2"/>' +
      '<circle cx="80" cy="186" r="7" fill="#333"/><circle cx="130" cy="186" r="7" fill="#333"/><circle cx="240" cy="186" r="7" fill="#333"/><circle cx="290" cy="186" r="7" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lk-s1)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#fff3b0" opacity=".9"/>' +
      '<path d="M0 118l40-10l50 6l60-12l70 8l60-10l60 8l60-6v28H0z" fill="#9fb3a8" opacity=".55"/>' +
      palm(30, 120, 80) + palm(372, 120, 92) + palm(250, 118, 60, "#4a3c34") +
      '<rect x="0" y="118" width="400" height="80" fill="#c9c2b4" opacity=".25"/>' +
      '<path d="M0 188h400" stroke="#6d6d6d" stroke-width="3"/><rect x="0" y="190" width="400" height="14" fill="#8a8a86"/><path d="M0 196h400" stroke="#5a5a56" stroke-width="2" stroke-dasharray="6 6"/>' +
      tr +
      '<rect x="0" y="204" width="400" height="10" fill="#f2c200"/><rect x="0" y="214" width="400" height="46" fill="#bdb6a8"/>' +
      '<path d="M40 214v-130M360 214v-130" stroke="#4f5a63" stroke-width="5"/><path d="M20 84q180-34 360 0" stroke="#4f5a63" stroke-width="8" fill="none"/><path d="M20 84q180-34 360 0v6q-180-34-360 0z" fill="#d7dde2" opacity=".85"/>' +
      '<rect x="92" y="78" width="216" height="34" rx="3" fill="#111"/><text x="108" y="101" ' + font + ' font-size="17" fill="#fff">Expo/La Brea</text>' + bullet(282, 95, "E", GOLD) +
      '<rect x="150" y="226" width="100" height="5" rx="2" fill="#fff6c2" opacity=".5" class="lk-flk"/>',
      sky("lk-s1", "#79b7e8", "#f7dcb0"));
  }

  /* 2. Urban Light at LACMA: the grid of grey cast-iron lamps glowing at dusk on Wilshire */
  function lkurbanlight() {
    const lamp = (x, base, h, k) => '<g><rect x="' + (x - 1.6) + '" y="' + (base - h) + '" width="3.2" height="' + h + '" fill="#9aa0a6"/><rect x="' + (x - 4) + '" y="' + (base - 8) + '" width="8" height="8" fill="#8a9096"/>' +
      '<rect x="' + (x - 3) + '" y="' + (base - h - 2) + '" width="6" height="3" fill="#8a9096"/><ellipse class="lk-glow' + ["", " lk-g2", " lk-g3", " lk-g4"][k % 4] + '" cx="' + x + '" cy="' + (base - h - 8) + '" rx="3.6" ry="4.8" fill="#fff4cf"/>' +
      '<circle class="lk-glow' + ["", " lk-g2", " lk-g3", " lk-g4"][k % 4] + '" cx="' + x + '" cy="' + (base - h - 8) + '" r="8" fill="#ffd98a" opacity=".2"/></g>';
    let rows = "";
    [[160, 58, 30, .7], [180, 70, 38, .85], [204, 86, 48, 1]].forEach((r, ri) => {
      for (let i = 0; i < 400 / r[2] + 1; i++) rows += lamp(8 + i * r[2] + ri * 13, r[0], r[1], i + ri);
    });
    return svg(
      '<rect width="400" height="260" fill="url(#lk-s2)"/>' +
      '<rect x="0" y="40" width="70" height="80" fill="#3a3550" opacity=".7"/><rect x="300" y="30" width="100" height="90" fill="#3a3550" opacity=".7"/>' +
      palm(80, 120, 74, "#1d1a2a") + palm(330, 116, 86, "#1d1a2a") +
      '<rect x="0" y="120" width="400" height="140" fill="#3c3a44"/>' + rows +
      '<rect x="0" y="198" width="400" height="62" fill="#55525c"/><path d="M0 230h400" stroke="#6f6b76" stroke-width="2"/>' +
      '<g class="lk-car"><rect x="0" y="238" width="70" height="14" rx="5" fill="#2e4a6e"/><rect x="12" y="232" width="40" height="9" rx="3" fill="#1b2a3e"/><circle cx="14" cy="252" r="4" fill="#111"/><circle cx="56" cy="252" r="4" fill="#111"/><circle cx="70" cy="244" r="2.5" fill="#fff6c2"/></g>',
      sky("lk-s2", "#2a2350", "#f08a5d"));
  }

  /* 3. The La Brea Tar Pits Lake Pit: the mammoth family, black tar lake, bubbles rising */
  function lktarpits() {
    const mam = (x, y, s, fl) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (fl ? -s : s) + ' ' + s + ')">' +
      '<path d="M-30 0q-4-34 26-38q30-4 40 14q6 12 2 24z" fill="#6e5a4c"/><path d="M28-22q14-2 16 10q2 14-6 30" stroke="#6e5a4c" stroke-width="7" fill="none" stroke-linecap="round" class="lk-trunk"/>' +
      '<path d="M30-8q12 14 26 6" stroke="#f1e7d2" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="30" cy="-24" r="2" fill="#2a1d14"/>' +
      '<rect x="-24" y="-4" width="9" height="18" fill="#5e4c40"/><rect x="-8" y="-4" width="9" height="18" fill="#5e4c40"/><rect x="10" y="-4" width="9" height="18" fill="#5e4c40"/><path d="M-18-30q10-10 24-6" stroke="#584638" stroke-width="2" fill="none"/></g>';
    let bubs = "";
    for (let i = 0; i < 9; i++) bubs += '<circle class="lk-bub' + ["", " lk-b2", " lk-b3"][i % 3] + '" cx="' + (60 + i * 32) + '" cy="' + (200 + (i * 7) % 18) + '" r="' + (2.5 + i % 3) + '" fill="#4a4a54" stroke="#b9b9c4" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lk-s3)"/>' +
      '<rect x="20" y="70" width="60" height="70" fill="#c9c3b6"/><rect x="90" y="88" width="46" height="52" fill="#b9b3a6"/><rect x="290" y="60" width="80" height="80" fill="#d1cbbd"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (298 + i * 18) + '" y="70" width="10" height="60" fill="#8fa3b3" opacity=".6"/>').join("") +
      palm(160, 140, 70) + palm(250, 140, 82) +
      '<rect x="0" y="138" width="400" height="122" fill="#6fa64a"/>' +
      '<ellipse cx="200" cy="205" rx="190" ry="42" fill="#1c1c22"/><ellipse cx="200" cy="198" rx="170" ry="28" fill="#26262e"/>' +
      '<path d="M30 188q60-10 120 0" stroke="#4a4a54" stroke-width="2" fill="none" opacity=".7"/>' +
      mam(270, 196, 1.15) + mam(90, 168, 1, true) + mam(175, 186, .6, true) + bubs +
      '<path d="M0 238q100-6 200 0t200 0v22H0z" fill="#5c9440"/>',
      sky("lk-s3", "#8ec5ef", "#f2e6c8"));
  }

  /* 4. The El Rey Theatre on Wilshire: Art Deco front, red neon blade sign, gold marquee, crowd bobbing */
  function lkelrey() {
    let crowd = "";
    for (let i = 0; i < 14; i++) crowd += '<g class="lk-bob' + ["", " lk-bob2", " lk-bob3"][i % 3] + '"><circle cx="' + (14 + i * 28) + '" cy="' + (222 + (i % 2) * 6) + '" r="9" fill="#1a1420"/><rect x="' + (4 + i * 28) + '" y="' + (230 + (i % 2) * 6) + '" width="20" height="30" rx="6" fill="#1a1420"/></g>';
    let chase = "";
    for (let i = 0; i < 22; i++) chase += '<circle class="lk-ch" style="animation-delay:' + (-i * 0.11).toFixed(2) + 's" cx="' + (96 + i * 10) + '" cy="150" r="2" fill="#fff2b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lk-s4)"/>' +
      '<rect x="80" y="30" width="240" height="190" fill="#e9dcc0"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (96 + i * 38) + '" y="44" width="18" height="96" fill="#cdb98e"/><path d="M' + (96 + i * 38) + ' 44l9-12l9 12" fill="#c9a24a"/>').join("") +
      '<path d="M80 30l120-20l120 20z" fill="#c9a24a"/>' +
      '<rect x="182" y="0" width="36" height="140" rx="4" fill="#1b1414" stroke="#c9a24a" stroke-width="2"/>' +
      ["E", "L", "R", "E", "Y"].map((c, i) => '<text class="lk-flk' + (i % 2 ? " lk-flk2" : "") + '" x="200" y="' + (26 + i * 24 + (i > 1 ? 8 : 0)) + '" text-anchor="middle" ' + font + ' font-size="20" fill="#ff4a4a" stroke="#ffd0d0" stroke-width=".6">' + c + '</text>').join("") +
      '<rect x="86" y="140" width="228" height="44" fill="#1b1414" stroke="#c9a24a" stroke-width="3"/>' + chase +
      '<text x="200" y="174" text-anchor="middle" ' + font + ' font-size="15" fill="#fdb913">I LOVE HATERS · LIVE</text>' +
      '<rect x="120" y="184" width="160" height="36" fill="#3a2a22"/><path d="M160 184v36M200 184v36M240 184v36" stroke="#c9a24a" stroke-width="2"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#2a2430"/>' + crowd,
      sky("lk-s4", "#141a3a", "#4a2e5e"));
  }

  /* 5. Pico Blvd and La Brea Ave: green signs, LUCKYIAM on the stucco, Baldwin Hills pumpjacks nodding behind */
  function lkcorner() {
    const jack = (x, y, cls) => '<g><path d="M' + (x - 10) + ' ' + y + 'l10-22l10 22" stroke="#2b2b30" stroke-width="3" fill="none"/>' +
      '<g class="lk-nod ' + cls + '"><rect x="' + (x - 22) + '" y="' + (y - 25) + '" width="44" height="5" rx="2" fill="#2b2b30"/><path d="M' + (x + 22) + ' ' + (y - 27) + 'q8 4 4 14" stroke="#2b2b30" stroke-width="5" fill="none"/></g>' +
      '<path d="M' + (x + 26) + ' ' + (y - 12) + 'v12" stroke="#2b2b30" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lk-s5)"/>' +
      '<path d="M0 120q60-40 130-30q70 10 120-12q80-20 150 10v40H0z" fill="#b29a6c"/><path d="M0 128q90-24 200-14t200-6v20H0z" fill="#9c8558"/>' +
      jack(70, 112, "") + jack(170, 104, "lk-nod2") + jack(300, 100, "") +
      palm(352, 140, 100) + palm(390, 140, 80) +
      '<rect x="0" y="134" width="300" height="96" fill="#e8d7b5"/><rect x="0" y="134" width="300" height="8" fill="#c9b48c"/>' +
      '<rect x="236" y="146" width="48" height="30" fill="#5b7f95" opacity=".7"/>' +
      tag("LUCKYIAM", 40, 200, 34, GREEN, -5) + clover(250, 206, .9, GOLD) + tag("PSC", 190, 222, 18, GOLD, -8) +
      '<g class="lk-sp"><circle cx="268" cy="196" r="3" fill="' + GREEN + '" opacity=".6"/><circle cx="238" cy="154" r="2" fill="' + GREEN + '" opacity=".5"/></g><g class="lk-sp lk-sp2"><circle cx="228" cy="150" r="2.5" fill="' + GOLD + '" opacity=".5"/></g>' +
      '<rect x="300" y="208" width="100" height="22" fill="#8a8680"/><rect x="0" y="230" width="400" height="30" fill="#4a4a50"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="318" y="96" width="5" height="134" fill="#5c6a70"/>' + sign(268, 92, 104, "Pico Blvd") + sign(276, 118, 90, "La Brea Av"),
      sky("lk-s5", "#7cc0ee", "#f7e6c2"));
  }

  window.SCENES = { lkstation, lkurbanlight, lktarpits, lkelrey, lkcorner };
})();
