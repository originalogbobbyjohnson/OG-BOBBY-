/* xzibit scenes (Regions tab: Los Angeles + SoCal; Pasadena - where he landed with the 360 Clique and met King T and Tha Alkaholiks of the Likwit Crew). CSS classes prefixed xz- (the page's own anim-train is kept).
   1 Metro A Line pulling into Del Mar station in Pasadena, the 1935 Santa Fe depot (white stucco, red tile roof) beside the platform, palms, a smoggy orange dusk.
   2 The custom shop from Pimp My Ride (he hosted it 2004-2007): a candy-paint ride up on the lift, a wall of speakers and TV screens in the trunk, sparks flying from the grinder.
   3 Albuquerque, where he was raised: hot air balloons drifting up in front of the Sandia Mountains glowing pink at sunset.
   4 The Rose Bowl in the Arroyo Seco, Pasadena: the oval bowl under the lights, the San Gabriels behind, a blimp floating over.
   5 E Colorado Blvd and N Fair Oaks Ave, Old Pasadena: green signs, XZIBIT tagged with LIKWIT and X TO THE Z on the brick, Mount Wilson's antenna towers on the ridge behind.
   400 x 260 SVGs. No logos, no faces, no numeral 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes xzsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.xz-palm{transform-box:fill-box;transform-origin:50% 100%;animation:xzsway 3.4s ease-in-out infinite}.xz-palm2{animation-delay:-1.7s}' +
    '@keyframes xzflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.xz-flk{animation:xzflick 2.2s infinite}.xz-flk2{animation-delay:.8s}' +
    '@keyframes xzspark{0%{transform:translate(0,0);opacity:1}100%{transform:translate(-26px,18px);opacity:0}}.xz-spk{animation:xzspark .7s linear infinite}.xz-spk2{animation-delay:-.35s}.xz-spk3{animation-delay:-.2s}' +
    '@keyframes xzpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.xz-cone{transform-box:fill-box;transform-origin:center;animation:xzpulse .45s ease-in-out infinite}' +
    '@keyframes xzrise{0%{transform:translateY(30px)}50%{transform:translateY(-10px)}100%{transform:translateY(30px)}}.xz-bal{animation:xzrise 9s ease-in-out infinite}.xz-bal2{animation-delay:-3s}.xz-bal3{animation-delay:-6s}' +
    '@keyframes xzblimp{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.xz-blimp{animation:xzblimp 22s linear infinite}' +
    '@keyframes xzbl{0%,100%{opacity:.2}50%{opacity:1}}.xz-bl{animation:xzbl 1.2s ease-in-out infinite}.xz-bl2{animation-delay:-.6s}' +
    '@keyframes xzsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(14px,-22px);opacity:0}}.xz-sp{animation:xzsp 1.3s ease-out infinite}.xz-sp2{animation-delay:-.6s}' +
    '@keyframes xzcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.xz-car{animation:xzcar 6.5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="xz-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q3 -' + (h / 2) + ' 1 -' + h + '" stroke="#5a4a3a" stroke-width="4" fill="none"/>' +
    [[-22, 6], [-12, -8], [0, -12], [12, -8], [22, 6]].map(p => '<path d="M' + (x + 1) + ' ' + (base - h) + 'q' + (p[0] / 2) + ' ' + (p[1] - 8) + ' ' + p[0] + ' ' + (p[1] + 5) + '" stroke="#2a5a3a" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const RED = "#ff5a36", BLUE = "#38c6f4", LAV = "#c7a6ff", ALINE = "#0072bc";

  /* 1. Metro A Line at Del Mar station, Pasadena, the old Santa Fe depot beside it */
  function xzstation() {
    const depot = '<rect x="250" y="66" width="140" height="70" fill="#f1ead8"/><path d="M244 68l76 -26l76 26z" fill="#b8492e"/><rect x="300" y="40" width="24" height="30" fill="#f1ead8"/><path d="M296 42l16 -12l16 12z" fill="#b8492e"/>' +
      [262, 292, 336, 366].map(x => '<path d="M' + x + ' 136v-30a10 10 0 0 1 20 0v30z" fill="#4a3a2a"/>').join("") + '<rect x="270" y="74" width="100" height="10" fill="#e2d6b8"/><text x="320" y="82.5" text-anchor="middle" ' + font + ' font-size="7" fill="#7a4a2a">SANTA FE DEPOT · 1935</text>';
    const train = '<g class="anim-train"><rect x="20" y="118" width="220" height="62" rx="8" fill="#e9edf1" stroke="#7a8088" stroke-width="2"/>' +
      '<rect x="20" y="160" width="220" height="10" fill="' + ALINE + '"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (40 + i * 40) + '" y="126" width="30" height="24" rx="3" fill="#22313c"/>').join("") +
      '<rect x="24" y="122" width="14" height="10" rx="2" fill="#111"/><text x="31" y="130" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">A</text>' +
      '<circle cx="22" cy="166" r="3" fill="#fff6c2" class="xz-flk"/><rect x="30" y="180" width="200" height="6" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#xzs1)"/>' + '<path d="M0 70l40 -20l50 14l60 -26l60 20l60 -18l60 22l70 -16v60h-400z" fill="#6a5a7a" opacity=".55"/>' +
      depot + palm(236, 136, 74) + palm(392, 136, 64, "xz-palm2") +
      '<rect x="0" y="136" width="400" height="8" fill="#cfc8bb"/><rect x="0" y="144" width="400" height="44" fill="#9d978c"/>' + train +
      '<rect x="0" y="186" width="400" height="10" fill="#6b5a4a"/><path d="M0 192h400" stroke="#c0c0c0" stroke-width="2"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3d3f46"/>' +
      '<rect x="120" y="206" width="270" height="26" rx="3" fill="#111"/><text x="132" y="224" ' + font + ' font-size="14" fill="#fff">Del Mar</text>' +
      '<rect x="356" y="210" width="22" height="18" rx="9" fill="' + ALINE + '"/><text x="367" y="223.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">A</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">METRO A LINE · DEL MAR · PASADENA</text>',
      sky("xzs1", "#2a2244", "#f39a5a"));
  }

  /* 2. The Pimp My Ride custom shop */
  function xzshop() {
    const screen = (x, y) => '<rect x="' + x + '" y="' + y + '" width="22" height="14" fill="#111" stroke="#888"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="18" height="10" fill="' + BLUE + '" class="xz-bl"/>';
    const spk = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 3) + '" fill="#222"/><g class="xz-cone"><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#555"/><circle cx="' + x + '" cy="' + y + '" r="' + (r / 3) + '" fill="#999"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2b2d33"/><rect x="0" y="0" width="400" height="30" fill="#1d1e22"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (20 + i * 80) + '" y="8" width="50" height="6" rx="3" fill="#fffbe0" class="xz-flk' + (i % 2 ? " xz-flk2" : "") + '"/>').join("") +
      '<rect x="0" y="30" width="400" height="150" fill="#3a3d45"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 70) + ' 30v150" stroke="#2e3036" stroke-width="2"/>').join("") +
      '<g fill="#8a8f98">' + [40, 60, 80, 100].map(y => '<rect x="12" y="' + y + '" width="40" height="4"/>').join("") + '</g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#55585f"/>' +
      '<rect x="70" y="150" width="8" height="70" fill="#d8b02a"/><rect x="322" y="150" width="8" height="70" fill="#d8b02a"/><rect x="60" y="146" width="280" height="8" fill="#c9a227"/>' +
      '<path d="M86 146q10 -36 60 -40h110q40 2 58 40z" fill="' + RED + '"/><path d="M80 146h244v-10q-10 -6 -20 -6h-210q-12 0 -14 16z" fill="#c8301a"/>' +
      '<path d="M150 110h46v24h-58zM204 110h46l14 24h-60z" fill="#9fd6f4"/>' +
      '<circle cx="124" cy="150" r="17" fill="#111"/><circle cx="124" cy="150" r="9" fill="#e8e8e8"/><circle cx="286" cy="150" r="17" fill="#111"/><circle cx="286" cy="150" r="9" fill="#e8e8e8"/>' +
      '<path d="M96 132q60 -6 120 0" stroke="#ffd23f" stroke-width="2" fill="none"/>' +
      '<rect x="292" y="60" width="96" height="70" fill="#1a1a1a" stroke="#666"/>' + spk(316, 84, 12) + spk(364, 84, 12) + screen(296, 106) + screen(330, 106) + screen(362, 106) +
      '<g transform="translate(40 228)"><rect x="0" y="-8" width="30" height="12" rx="2" fill="#2a6ac0"/><circle cx="30" cy="-2" r="6" fill="#999"/>' +
      '<g class="xz-spk"><circle cx="30" cy="-2" r="2" fill="#ffd23f"/></g><g class="xz-spk xz-spk2"><circle cx="32" cy="-4" r="1.6" fill="#ff8a2a"/></g><g class="xz-spk xz-spk3"><circle cx="28" cy="0" r="1.6" fill="#fff2a0"/></g></g>' +
      tag("X TO THE Z", 120, 60, 26, RED, -4) +
      '<rect x="110" y="236" width="180" height="18" rx="3" fill="#111"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">THE CUSTOM SHOP · CANDY PAINT</text>');
  }

  /* 3. Albuquerque: balloons in front of the Sandias */
  function xzballoons() {
    const bal = (x, y, s, a, b, cls) => '<g class="xz-bal ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path d="M0 -30c22 0 30 16 26 30c-4 12 -14 20 -18 28h-16c-4 -8 -14 -16 -18 -28c-4 -14 4 -30 26 -30z" fill="' + a + '"/>' +
      '<path d="M0 -30c8 0 10 16 9 30c-1 12 -5 20 -5 28h-8c0 -8 -4 -16 -5 -28c-1 -14 1 -30 9 -30z" fill="' + b + '"/>' +
      '<path d="M-8 28l2 10M8 28l-2 10" stroke="#5a3a2a" stroke-width="1"/><rect x="-7" y="38" width="14" height="9" fill="#8a5a2a"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#xzs3)"/>' +
      '<path d="M0 170l40 -40l30 10l40 -50l30 20l40 -40l40 30l30 -16l40 36l40 -24l50 40v40h-400z" fill="#d86a7a"/>' +
      '<path d="M0 170l40 -40l30 10l40 -50l30 20l40 -40l40 30l30 -16l40 36l40 -24l50 40" fill="none" stroke="#ffb0a0" stroke-width="2"/>' +
      '<path d="M0 176l60 -14l80 10l80 -12l80 8l100 -6v40h-400z" fill="#6a8a4a"/>' +
      bal(70, 90, 1, RED, "#ffd23f") + bal(200, 60, 1.3, BLUE, "#fff", "xz-bal2") + bal(320, 100, .9, LAV, "#ffd23f", "xz-bal3") + bal(140, 140, .6, "#2fa84a", "#fff", "xz-bal3") +
      '<rect x="0" y="200" width="400" height="60" fill="#c9a77a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (20 + i * 70) + ' 222q6 -10 12 0" stroke="#5a7a3a" stroke-width="3" fill="none"/>').join("") +
      '<rect x="100" y="234" width="200" height="18" rx="3" fill="#111"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">ALBUQUERQUE · THE SANDIAS AT SUNSET</text>',
      sky("xzs3", "#5a8ad0", "#ffc48a"));
  }

  /* 4. The Rose Bowl in the Arroyo Seco */
  function xzrosebowl() {
    const blimp = '<g class="xz-blimp"><ellipse cx="0" cy="40" rx="34" ry="11" fill="#d8dde3"/><path d="M-34 40l-10 -8v16z" fill="#b8bec6"/><rect x="-6" y="50" width="12" height="5" rx="2" fill="#555"/><circle cx="20" cy="40" r="2" fill="' + RED + '" class="xz-bl"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#xzs4)"/>' +
      '<path d="M0 100l50 -40l40 16l50 -36l50 24l60 -30l50 26l40 -14l60 30v40h-400z" fill="#3a3a5a"/>' + blimp +
      '<ellipse cx="200" cy="168" rx="180" ry="56" fill="#b8a07a"/><ellipse cx="200" cy="164" rx="170" ry="48" fill="#8a2a2a"/>' +
      Array.from({ length: 6 }, (_, i) => '<ellipse cx="200" cy="166" rx="' + (164 - i * 12) + '" ry="' + (45 - i * 4) + '" fill="none" stroke="#a83a3a" stroke-width="2"/>').join("") +
      '<ellipse cx="200" cy="170" rx="88" ry="18" fill="#2f8f3e"/><path d="M200 152v36" stroke="#fff" stroke-width="1.5" opacity=".7"/>' +
      '<rect x="150" y="108" width="100" height="16" fill="#f1ead8"/><text x="200" y="120" text-anchor="middle" ' + font + ' font-size="10" fill="#6a1a1a">ROSE BOWL</text>' +
      [30, 370].map(x => '<rect x="' + (x - 2) + '" y="60" width="4" height="70" fill="#555"/><rect x="' + (x - 14) + '" y="54" width="28" height="10" fill="#333"/><circle cx="' + (x - 7) + '" cy="59" r="3" fill="#fffbe0" class="xz-flk"/><circle cx="' + (x + 7) + '" cy="59" r="3" fill="#fffbe0" class="xz-flk xz-flk2"/>').join("") +
      palm(20, 240, 60) + palm(384, 240, 54, "xz-palm2") +
      '<rect x="0" y="224" width="400" height="36" fill="#2c3a2a"/>' +
      '<rect x="110" y="234" width="180" height="18" rx="3" fill="#111"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">ARROYO SECO · PASADENA</text>',
      sky("xzs4", "#141634", "#5a4a7a"));
  }

  /* 5. E Colorado Blvd and N Fair Oaks Ave, Old Pasadena, Mount Wilson towers behind */
  function xzcorner() {
    const towers = [120, 150, 176, 300].map((x, i) => '<path d="M' + x + ' ' + (66 - i % 2 * 4) + 'l4 -' + (34 + i * 3) + 'l4 ' + (34 + i * 3) + '" stroke="#555a66" stroke-width="1.5" fill="none"/><circle cx="' + (x + 4) + '" cy="' + (32 - i * 3 - i % 2 * 4) + '" r="2.4" fill="' + RED + '" class="xz-bl' + (i % 2 ? " xz-bl2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#xzs5)"/>' +
      '<path d="M0 96l60 -26l70 8l60 -14l80 10l60 -12l70 20v40h-400z" fill="#5a6a8a"/>' + towers +
      '<rect x="0" y="96" width="400" height="128" fill="#9a4a32"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M0 ' + (104 + i * 8) + 'h400" stroke="#7e3a26" stroke-width="1"/>').join("") +
      Array.from({ length: 16 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (96 + i * 8) + 'v8" stroke="#7e3a26" stroke-width="1"/>').join("")).join("") +
      tag("XZIBIT", 18, 172, 48, RED, -6) + tag("LIKWIT", 26, 206, 20, BLUE, -3) + tag("X TO THE Z", 150, 210, 20, LAV, -5) +
      '<g class="xz-sp"><circle cx="214" cy="146" r="3" fill="' + RED + '" opacity=".7"/></g><g class="xz-sp xz-sp2"><circle cx="220" cy="138" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="344" y="112" width="6" height="112" fill="#2f2f2f"/>' + sign(272, 118, 126, "E Colorado Blvd") + sign(282, 144, 112, "N Fair Oaks Av"),
      sky("xzs5", "#2a2a4a", "#f0a070"));
  }

  window.SCENES = { xzstation: xzstation, xzshop: xzshop, xzballoons: xzballoons, xzrosebowl: xzrosebowl, xzcorner: xzcorner };
})();
