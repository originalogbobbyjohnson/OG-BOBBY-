/* deantehitchcock scenes (Regions tab: Atlanta; Riverdale, Clayton County). CSS classes and ids prefixed dh- (the page's own anim-train is kept).
   1 MARTA Route 191 (Riverdale / ATL Intl Terminal): the white-and-blue MARTA bus pulling up to the stop on Riverdale's main road, Georgia pines behind.
   2 The Riverdale Love Choir (his friends who sang on "Royal"): a choir loft, gold robes swaying, the stage lights.
   3 Georgia Southern University, Statesboro (where he was before he left school for music): Sweetheart Circle's live oaks and Spanish moss, the red-brick hall with white columns.
   4 The Revenge of the Dreamers III sessions (his breakout verse): a studio room at night, the mixing desk, the meters jumping, the session clock.
   5 Upper Riverdale Rd and Hwy 85 in Riverdale: green signs, DEANTE' tagged on the wall, a jet on final approach overhead with its landing lights on. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dhbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.dh-bus{animation:dhbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes dhglow{0%,100%{opacity:.45}50%{opacity:1}}.dh-glow{animation:dhglow 2.2s ease-in-out infinite}.dh-g2{animation-delay:-1.1s}' +
    '@keyframes dhsway{0%,100%{transform:translateX(-3px)}50%{transform:translateX(3px)}}.dh-sw{animation:dhsway 1.6s ease-in-out infinite}.dh-sw2{animation-delay:-.8s}' +
    '@keyframes dhnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.dh-note{animation:dhnote 3s linear infinite}.dh-n2{animation-delay:-1s}.dh-n3{animation-delay:-2s}' +
    '@keyframes dhmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.dh-moss{transform-box:fill-box;transform-origin:50% 0%;animation:dhmoss 3.4s ease-in-out infinite}.dh-moss2{animation-delay:-1.7s}' +
    '@keyframes dhwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.dh-wv{transform-box:fill-box;transform-origin:50% 100%;animation:dhwave .7s ease-in-out infinite}' +
    '@keyframes dhplane{from{transform:translate(-120px,40px)}to{transform:translate(520px,-30px)}}.dh-plane{animation:dhplane 9s linear infinite}' +
    '@keyframes dhsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dh-sp{animation:dhsp 1.4s ease-out infinite}.dh-sp2{animation-delay:.45s}' +
    '@keyframes dhbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.dh-beam{transform-box:fill-box;transform-origin:50% 0%;animation:dhbeam 3.6s ease-in-out infinite}.dh-beam2{animation-delay:-1.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="0" width="6" height="22" fill="#5a3e2a"/><path d="M0 -60l16 30h-8l14 22h-44l14 -22h-8z" fill="#1f5a34"/></g>';
  const GOLD = "#f4c95d", SKY = "#6ec6ff", CORAL = "#ff7a59", BUS = "#1f4e79";

  /* 1. MARTA Route 191 pulling up on Riverdale's main road: white bus, blue + orange bands, sign "191 RIVERDALE", the MARTA stop flag */
  function dhbus() {
    const bus = '<g class="dh-bus"><rect x="40" y="118" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="132" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="132" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="168" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="177" width="236" height="4" fill="#f7941d"/>' +
      '<rect x="44" y="120" width="98" height="11" rx="2" fill="#111"/><text x="93" y="128.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">191 RIVERDALE</text>' +
      '<circle cx="88" cy="200" r="12" fill="#222"/><circle cx="88" cy="200" r="5" fill="#9aa1a8"/><circle cx="234" cy="200" r="12" fill="#222"/><circle cx="234" cy="200" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dh1)"/>' +
      pine(20, 118, 1.1) + pine(64, 122, .9) + pine(110, 120, 1) + pine(170, 124, .8) + pine(230, 118, 1.1) + pine(286, 122, .9) + pine(380, 120, 1) +
      '<rect x="0" y="140" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="160" width="400" height="100" fill="#4e4e54"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="80" width="5" height="80" fill="#6b7178"/><rect x="318" y="62" width="42" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="91" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">191</text>' +
      '<rect x="300" y="104" width="78" height="14" rx="2" fill="#111"/><text x="339" y="114" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">RIVERDALE / ATL</text>',
      sky("dh1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. The Riverdale Love Choir: risers, gold robes swaying, music notes floating, stage lights */
  function dhchoir() {
    const singer = (x, y, i) => '<g class="dh-sw' + (i % 2 ? " dh-sw2" : "") + '"><circle cx="' + x + '" cy="' + (y - 18) + '" r="8" fill="#3a2418"/><path d="M' + (x - 13) + ' ' + (y + 22) + 'l4 -32q9 -6 18 0l4 32z" fill="' + GOLD + '" stroke="#9a7a2a" stroke-width="1.5"/><path d="M' + (x - 5) + ' ' + (y - 8) + 'l5 8l5 -8" fill="none" stroke="' + CORAL + '" stroke-width="2.5"/></g>';
    let people = "";
    [[60, 150], [110, 150], [160, 150], [240, 150], [290, 150], [340, 150]].forEach((p, i) => people += singer(p[0], p[1], i));
    [[85, 196], [135, 196], [200, 196], [265, 196], [315, 196]].forEach((p, i) => people += singer(p[0], p[1], i + 1));
    return svg(
      '<rect width="400" height="260" fill="#120c1c"/>' +
      '<path class="dh-beam" d="M90 0l-50 230h100z" fill="#fff2c0" opacity=".14"/><path class="dh-beam dh-beam2" d="M310 0l-50 230h100z" fill="' + SKY + '" opacity=".16"/>' +
      '<rect x="80" y="0" width="20" height="10" fill="#333"/><rect x="300" y="0" width="20" height="10" fill="#333"/>' +
      '<rect x="0" y="40" width="400" height="12" fill="#2a1e3a"/><text x="200" y="35" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '" letter-spacing="4">LOVE CHOIR</text>' +
      '<rect x="20" y="168" width="360" height="12" fill="#5a3a2a"/><rect x="20" y="214" width="360" height="12" fill="#5a3a2a"/>' + people +
      '<rect x="0" y="226" width="400" height="34" fill="#2a1c14"/>' +
      [[50, 110, ""], [200, 100, " dh-n2"], [350, 112, " dh-n3"]].map(n => '<g class="dh-note' + n[2] + '"><circle cx="' + n[0] + '" cy="' + n[1] + '" r="5" fill="' + SKY + '"/><path d="M' + (n[0] + 5) + ' ' + n[1] + 'v-20l8 4" stroke="' + SKY + '" stroke-width="2" fill="none"/></g>').join(""),
      "");
  }

  /* 3. Georgia Southern's Sweetheart Circle: live oaks with Spanish moss, red-brick hall with white columns, the lawn */
  function dhgsu() {
    const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-6 0q-4 -30 -30 -46M6 0q6 -30 34 -44M0 0v-40" stroke="#4a3626" stroke-width="7" fill="none"/>' +
      '<ellipse cx="0" cy="-58" rx="56" ry="26" fill="#3d6b34"/><ellipse cx="-30" cy="-46" rx="30" ry="16" fill="#47783c"/><ellipse cx="32" cy="-48" rx="30" ry="16" fill="#47783c"/>' +
      [-40, -18, 6, 28, 46].map((mx, i) => '<path class="dh-moss' + (i % 2 ? " dh-moss2" : "") + '" d="M' + mx + ' -40q-3 14 0 26q3 -10 0 -26" fill="#a9b39a"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dh3)"/>' +
      /* hall */
      '<rect x="110" y="60" width="180" height="100" fill="#a8452e"/><path d="M100 60l100 -36l100 36z" fill="#5a2a1e"/><path d="M150 60l50 -18l50 18z" fill="#f2efe6"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (152 + i * 19) + '" y="62" width="8" height="98" fill="#f6f4ee"/>').join("") +
      '<rect x="144" y="58" width="112" height="6" fill="#f6f4ee"/>' +
      [118, 268].map(x => Array.from({ length: 3 }, (_, r) => '<rect x="' + (x + 2) + '" y="' + (72 + r * 28) + '" width="12" height="18" fill="#2a3442"/>').join("")).join("") +
      '<path d="M200 22v-16" stroke="#555" stroke-width="2"/><path class="dh-moss" d="M200 6h14v8h-14z" fill="#1d3f8f"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#6aa84f"/><ellipse cx="200" cy="210" rx="150" ry="28" fill="none" stroke="#d9cfb2" stroke-width="8"/>' +
      oak(46, 200, 1.1) + oak(356, 204, 1.15),
      sky("dh3", "#8fc6ec", "#f2ead6"));
  }

  /* 4. Revenge of the Dreamers III sessions, Atlanta: studio at night, mixing desk, meters, a mic in the booth, the session clock */
  function dhstudio() {
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="0" width="40" height="120" fill="#1c2028"/>').join("") +
      /* booth window */
      '<rect x="110" y="20" width="180" height="96" rx="6" fill="#0d1b2a" stroke="#3a3e46" stroke-width="4"/>' +
      '<path d="M200 106v-40" stroke="#555" stroke-width="3"/><rect x="190" y="40" width="20" height="30" rx="10" fill="#c9ced6"/><path d="M182 38q18 -20 36 0" stroke="#222" stroke-width="3" fill="none"/>' +
      '<rect class="dh-glow" x="122" y="28" width="62" height="16" rx="3" fill="' + CORAL + '"/><text x="153" y="40" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="1">ON AIR</text>' +
      /* clock */
      '<circle cx="340" cy="56" r="26" fill="#f2efe6" stroke="#888" stroke-width="3"/><path d="M340 56v-17M340 56l12 6" stroke="#222" stroke-width="3" stroke-linecap="round"/>' +
      '<text x="340" y="96" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">3 A.M.</text>' +
      /* desk */
      '<path d="M20 160h360l20 100H0z" fill="#3a2e28"/><rect x="40" y="150" width="320" height="14" rx="3" fill="#24262c"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + (52 + i * 12.6) + '" y="172" width="6" height="34" rx="2" fill="#1a1a1e"/><rect x="' + (50 + i * 12.6) + '" y="' + (180 + (i * 7) % 18) + '" width="10" height="5" rx="1" fill="#d6d6d6"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<rect class="dh-wv" style="animation-delay:-' + ((i * 0.13) % 0.7).toFixed(2) + 's" x="' + (120 + i * 8) + '" y="128" width="5" height="18" fill="' + (i % 6 === 5 ? CORAL : i % 3 ? SKY : GOLD) + '"/>').join("") +
      [30, 352].map(x => '<rect x="' + x + '" y="100" width="22" height="50" rx="3" fill="#0e0f12" stroke="#3a3e46" stroke-width="2"/><circle cx="' + (x + 11) + '" cy="136" r="7" fill="#2a2f3a"/>').join(""),
      "");
  }

  /* 5. Upper Riverdale Rd and Hwy 85: green signs, DEANTE' tagged, a jet on approach overhead, pines */
  function dhcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dh5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 4 ? "" : "dh-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 41) % 40) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      '<g fill="#14261c">' + [0, 40, 84, 260, 300, 344].map((x, i) => '<path d="M' + (x + 20) + ' ' + (70 + (i % 2) * 10) + 'l22 66h-44z"/>').join("") + '</g>' +
      '<g class="dh-plane"><g transform="translate(40 50) rotate(-6)"><path d="M0 0h70q10 0 14 6q-4 6 -14 6H0q-6 -6 0 -12z" fill="#e8ecf0"/><path d="M30 6l-14 26h10l22 -26z" fill="#c9d0d8"/><path d="M4 0l-8 -14h8l10 14z" fill="#c9d0d8"/>' +
      '<circle class="dh-glow" cx="80" cy="12" r="3" fill="#fff6c2"/><circle cx="20" cy="30" r="2" fill="#e8202e"/></g></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#6e6a62"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 132v92" stroke="#625e56" stroke-width="2"/>').join("") +
      tag("RIVERDALE", 24, 154, 18, SKY, -3) + tag("DEANTE'", 18, 200, 50, GOLD, -6) + tag("DO BETTER", 30, 220, 16, "#fff", -3) + tag("LOVE", 176, 218, 18, CORAL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="94" width="6" height="130" fill="#2f2f2f"/>' + sign(268, 96, 128, "Upper Riverdale Rd") + sign(304, 122, 70, "Hwy 85") +
      '<g class="dh-sp"><circle cx="210" cy="164" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="dh-sp dh-sp2"><circle cx="216" cy="158" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("dh5", "#101a3a", "#e08a4a"));
  }

  window.SCENES = { dhbus: dhbus, dhchoir: dhchoir, dhgsu: dhgsu, dhstudio: dhstudio, dhcorner: dhcorner };
})();
