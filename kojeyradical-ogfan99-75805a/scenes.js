/* Kojey Radical scenes (Regions tab: UK + EUROPE; Hoxton, East London - Kwadwo Amponsah, born 1993 to Ghanaian parents, raised in Hoxton and Shoreditch;
   fashion illustration at the London College of Fashion; Push Crayons creative collective; sold out Brixton Academy, Nov 2022).
   1 Hoxton station: the brick viaduct platform, red Windrush-line bar, a white Overground train with orange doors pulling in.
   2 Museum of the Home, Kingsland Road (the old almshouses): brick terrace, white cupola, iron railings, plane trees, leaves falling.
   3 The illustration desk: sketchbook, crayons in a cup, a pencil drawing a cashmere scarf, kente strip pinned up.
   4 Brixton Academy, sold-out night: the cream art deco front, marquee bulbs chasing, the crowd's hands up.
   5 Hoxton Street / Falkirk Street, N1: UK street signs, KOJEY RADICAL tagged, market stall awning, the City towers behind.
   CSS classes prefixed "kjr" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kjrLeaf{0%{transform:translate(0,-10px) rotate(0)}100%{transform:translate(-40px,230px) rotate(300deg)}}.kjrLeaf{transform-box:fill-box;animation:kjrLeaf 7s linear infinite}.kjrL2{animation-delay:-2.3s}.kjrL3{animation-delay:-4.6s}' +
    '@keyframes kjrDraw{0%{stroke-dashoffset:300}70%,100%{stroke-dashoffset:0}}.kjrDraw{stroke-dasharray:300;animation:kjrDraw 4s ease-in-out infinite}' +
    '@keyframes kjrPen{0%{transform:translate(-80px,10px)}70%,100%{transform:translate(0,0)}}.kjrPen{animation:kjrPen 4s ease-in-out infinite}' +
    '@keyframes kjrBulb{0%,100%{opacity:1}50%{opacity:.2}}.kjrB{animation:kjrBulb .8s steps(1) infinite}.kjrB2{animation-delay:-.4s}' +
    '@keyframes kjrHands{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.kjrH{animation:kjrHands .7s ease-in-out infinite}.kjrH2{animation-delay:-.35s}' +
    '@keyframes kjrBeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.kjrBeam{transform-box:fill-box;transform-origin:50% 100%;animation:kjrBeam 4s ease-in-out infinite}.kjrBm2{animation-delay:-2s}' +
    '@keyframes kjrFlap{0%,100%{transform:skewX(0)}50%{transform:skewX(-6deg)}}.kjrFlap{transform-box:fill-box;transform-origin:50% 0;animation:kjrFlap 2s ease-in-out infinite}' +
    '@keyframes kjrSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.kjrSp{animation:kjrSp 1.4s ease-out infinite}.kjrSp2{animation-delay:.5s}' +
    '@keyframes kjrBird{0%{transform:translateX(-60px)}100%{transform:translateX(470px)}}.kjrBird{animation:kjrBird 11s linear infinite;animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RED = "#ee2e24", ORANGE = "#ee7c0e", GOLD = "#e8b84a", PURPLE = "#7b4fd6", BRICK = "#8e4a36", CREAM = "#efe6d2";
  const kente = (x, y, w, h) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + GOLD + '"/>';
    for (let i = 0; i < w; i += 12) s += '<rect x="' + (x + i) + '" y="' + y + '" width="6" height="' + h + '" fill="' + (i % 24 ? "#1f7a3a" : "#c8102e") + '"/><rect x="' + (x + i) + '" y="' + (y + h / 2 - 2) + '" width="12" height="4" fill="#111"/>';
    return s;
  };

  /* 1. Hoxton station - on the brick viaduct */
  function kjrstation() {
    let wins = "", arches = "";
    for (let x = 44; x < 300; x += 34) wins += '<rect x="' + x + '" y="146" width="22" height="18" rx="2" fill="#1d2a33"/>';
    for (let x = -10; x < 400; x += 60) arches += '<path d="M' + x + ' 260v-22q20 -20 40 0v22z" fill="#3a2018"/>';
    const train = '<g class="anim-train">' +
      '<path d="M14 138h282q30 2 36 30v30H14z" fill="#f2f2ee" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M300 144q22 4 28 26h-28z" fill="#1d2a33"/>' + wins +
      '<g fill="' + ORANGE + '" stroke="#7a3a08" stroke-width="1"><rect x="112" y="142" width="14" height="52"/><rect x="236" y="142" width="14" height="52"/></g>' +
      '<rect x="14" y="186" width="318" height="10" fill="#1f3f9a"/><rect x="318" y="176" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="56" cy="201" r="6"/><circle cx="80" cy="201" r="6"/><circle cx="240" cy="201" r="6"/><circle cx="264" cy="201" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kjrs1)"/>' +
      '<g fill="#5d6470" opacity=".7"><rect x="10" y="70" width="40" height="70"/><rect x="60" y="50" width="26" height="90"/><path d="M300 140v-70q14 -26 28 0v70z"/><rect x="340" y="60" width="40" height="80"/></g>' +
      '<g class="kjrBird"><path d="M0 30q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* canopy */
      '<rect x="0" y="34" width="400" height="10" fill="#2c2c30"/><rect x="0" y="44" width="400" height="5" fill="' + RED + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (20 + i * 60) + '" y="49" width="5" height="90" fill="#2c2c30"/>').join("") +
      /* name boards: plain bar sign, no roundel */
      '<rect x="40" y="70" width="130" height="24" rx="2" fill="#10245a" stroke="#fff" stroke-width="1.5"/><text x="105" y="86" text-anchor="middle" ' + F + ' font-size="12" fill="#fff" letter-spacing="1">HOXTON</text>' +
      '<rect x="230" y="70" width="130" height="24" rx="2" fill="#10245a" stroke="#fff" stroke-width="1.5"/><text x="295" y="86" text-anchor="middle" ' + F + ' font-size="12" fill="#fff" letter-spacing="1">HOXTON</text>' +
      '<rect x="110" y="102" width="180" height="16" rx="2" fill="' + RED + '"/><text x="200" y="114" text-anchor="middle" ' + F + ' font-size="8" fill="#fff" letter-spacing="1">WINDRUSH LINE · HIGHBURY</text>' +
      '<rect x="0" y="206" width="400" height="32" fill="#4c4f57"/><rect x="0" y="206" width="400" height="6" fill="#f2c14e"/>' +
      '<text x="200" y="229" text-anchor="middle" ' + F + ' font-size="10" fill="#e8e8e8" letter-spacing="3">MIND THE GAP</text>' +
      '<rect x="0" y="238" width="400" height="22" fill="' + BRICK + '"/>' + arches +
      train,
      sky("kjrs1", "#9fb4c8", "#e6ddd0"));
  }

  /* 2. Museum of the Home - the old almshouses on Kingsland Road */
  function kjrhome() {
    let wins = "", rail = "";
    for (let x = 40; x < 370; x += 28) if (x < 176 || x > 222) wins += '<rect x="' + x + '" y="112" width="12" height="20" fill="#26303a" stroke="' + CREAM + '" stroke-width="2"/><rect x="' + x + '" y="148" width="12" height="20" fill="#26303a" stroke="' + CREAM + '" stroke-width="2"/>';
    for (let x = 0; x < 400; x += 8) rail += '<path d="M' + x + ' 196v-20" stroke="#222" stroke-width="2"/><circle cx="' + x + '" cy="175" r="1.6" fill="#222"/>';
    const tree = (x) => '<rect x="' + (x - 4) + '" y="120" width="8" height="70" fill="#6b5a44"/><circle cx="' + x + '" cy="104" r="34" fill="#5f8f3a"/><circle cx="' + (x - 22) + '" cy="118" r="20" fill="#6aa043"/><circle cx="' + (x + 22) + '" cy="116" r="22" fill="#557f34"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kjrs2)"/>' +
      '<rect x="24" y="100" width="352" height="80" fill="' + BRICK + '"/><path d="M24 100h352" stroke="' + CREAM + '" stroke-width="4"/>' + wins +
      '<path d="M18 100l10 -14h344l10 14z" fill="#5a4a44"/>' +
      /* chapel centre: pediment + white cupola */
      '<rect x="176" y="76" width="48" height="104" fill="' + BRICK + '" stroke="' + CREAM + '" stroke-width="2"/><path d="M170 78l30 -22l30 22z" fill="' + CREAM + '"/>' +
      '<rect x="192" y="34" width="16" height="22" fill="#fff" stroke="#888"/><path d="M190 34q10 -14 20 0z" fill="#fff" stroke="#888"/><path d="M200 20v-6" stroke="#555" stroke-width="2"/>' +
      '<path d="M190 180v-40q10 -12 20 0v40z" fill="#3a2418"/><circle cx="200" cy="100" r="7" fill="#f3efe4" stroke="#333"/>' +
      tree(70) + tree(330) +
      '<rect x="0" y="196" width="400" height="64" fill="#5c8f3e"/>' + rail +
      '<g fill="#d08a2a"><path class="kjrLeaf" d="M60 40q6 -6 12 0q-6 6 -12 0z"/><path class="kjrLeaf kjrL2" d="M320 50q6 -6 12 0q-6 6 -12 0z"/><path class="kjrLeaf kjrL3" d="M110 30q6 -6 12 0q-6 6 -12 0z"/></g>' +
      '<text x="200" y="246" text-anchor="middle" ' + F + ' font-size="9" fill="#fff" letter-spacing="3">KINGSLAND ROAD · HOXTON</text>',
      sky("kjrs2", "#8fb6d4", "#efe4cc"));
  }

  /* 3. The illustration desk - fashion illustration, Push Crayons */
  function kjrdesk() {
    const crayon = (x, c, r) => '<g transform="rotate(' + r + ' ' + x + ' 140)"><rect x="' + (x - 4) + '" y="96" width="8" height="44" fill="' + c + '"/><path d="M' + (x - 4) + ' 96l4 -10l4 10z" fill="' + c + '"/><rect x="' + (x - 4) + '" y="106" width="8" height="6" fill="#111" opacity=".35"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2320"/>' +
      '<rect x="0" y="0" width="400" height="120" fill="#3a302a"/>' +
      kente(250, 20, 120, 26) + '<circle cx="256" cy="24" r="3" fill="#ccc"/><circle cx="364" cy="24" r="3" fill="#ccc"/>' +
      '<rect x="30" y="18" width="90" height="70" fill="#f3efe4" stroke="#8a7a60" stroke-width="2"/><path d="M50 74q20 -50 50 -30" stroke="' + PURPLE + '" stroke-width="3" fill="none"/><circle cx="62" cy="40" r="8" fill="none" stroke="#c8102e" stroke-width="2"/>' +
      '<rect x="0" y="120" width="400" height="140" fill="#7a5233"/><rect x="0" y="116" width="400" height="8" fill="#4b301e"/>' +
      /* sketchbook */
      '<path d="M80 150l120 -6l10 96l-120 6z" fill="#f6f2e8" stroke="#999" stroke-width="1.5"/><path d="M200 144l120 6l-10 96l-120 -6z" fill="#fbf8f0" stroke="#999" stroke-width="1.5"/>' +
      /* figure outline (no face) wearing a scarf, being drawn */
      '<g fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"><circle cx="140" cy="168" r="9"/><path d="M140 177v36M126 186h28M140 213l-10 20M140 213l10 20"/></g>' +
      '<path class="kjrDraw" d="M222 176q20 -10 40 0t40 0M226 192q24 18 30 40M260 192q-6 20 2 40" stroke="' + PURPLE + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M128 182q12 8 24 0l-4 24h-6z" fill="' + PURPLE + '"/>' +
      '<g class="kjrPen"><path d="M300 236l40 -40l6 6l-40 40z" fill="' + GOLD + '" stroke="#5a3a10"/><path d="M300 236l-4 10l10 -4z" fill="#333"/></g>' +
      /* crayon cup */
      '<path d="M340 140h44l-6 60h-32z" fill="#c8102e"/>' + crayon(350, "#1f7a3a", -8) + crayon(362, GOLD, 0) + crayon(374, PURPLE, 8) +
      '<rect x="20" y="214" width="56" height="28" rx="3" fill="#1a120c"/><text x="48" y="232" text-anchor="middle" ' + F + ' font-size="7" fill="' + GOLD + '">PUSH CRAYONS</text>');
  }

  /* 4. Brixton Academy - sold-out night */
  function kjrbrixton() {
    let bulbs = "", hands = "";
    for (let x = 96; x <= 304; x += 13) bulbs += '<circle class="kjrB ' + ((x / 13) % 2 ? "kjrB2" : "") + '" cx="' + x + '" cy="132" r="3" fill="#fff3b0"/>';
    for (let x = 6; x < 400; x += 22) hands += '<g class="kjrH ' + ((x / 22) % 2 ? "kjrH2" : "") + '"><path d="M' + x + ' 260v-36q0 -6 5 -6t5 6v36z" fill="#1a1414"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kjrs4)"/>' +
      '<g opacity=".35"><path class="kjrBeam" d="M120 200l-30 -200h24z" fill="#fff6c8"/><path class="kjrBeam kjrBm2" d="M280 200l30 -200h-24z" fill="#fff6c8"/></g>' +
      '<rect x="70" y="40" width="260" height="170" fill="' + CREAM + '"/>' +
      '<path d="M70 40h260v10H70z" fill="#d9ccb0"/><g fill="#d9ccb0">' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (96 + i * 48) + '" y="56" width="16" height="64"/>').join("") + '</g>' +
      '<path d="M170 40v-18h60v18z" fill="' + CREAM + '"/><path d="M180 22l20 -14l20 14z" fill="#d9ccb0"/>' +
      '<rect x="86" y="120" width="228" height="44" fill="#141414" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs + '<path d="M96 158h208" stroke="#fff3b0" stroke-width="0"/>' +
      '<text x="200" y="152" text-anchor="middle" ' + F + ' font-size="13" fill="#fff" letter-spacing="2">KOJEY RADICAL</text>' +
      '<text x="200" y="176" text-anchor="middle" ' + F + ' font-size="9" fill="' + RED + '" letter-spacing="2">SOLD OUT</text>' +
      '<rect x="110" y="180" width="180" height="30" fill="#3a2a22"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2222"/>' + hands +
      '<text x="200" y="200" text-anchor="middle" ' + F + ' font-size="7.5" fill="#fff" letter-spacing="2">STOCKWELL ROAD · BRIXTON</text>',
      sky("kjrs4", "#1b1430", "#4a2a4a"));
  }

  /* 5. Hoxton Street / Falkirk Street - the City towers behind */
  function kjrcorner() {
    let bricks = "";
    for (let y = 120; y < 216; y += 10) bricks += '<path d="M0 ' + y + 'h400" stroke="#5e3324" stroke-width="1"/>';
    for (let y = 120, r = 0; y < 216; y += 10, r++) for (let x = (r % 2) * 14; x < 400; x += 28) bricks += '<path d="M' + x + ' ' + y + 'v10" stroke="#5e3324" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kjrs5)"/>' +
      /* City towers behind */
      '<g fill="#6f7f92"><rect x="90" y="62" width="30" height="50"/><path d="M150 112q-16 -40 0 -78q16 38 0 78z" fill="#5b8a9a"/><path d="M190 112l20 -86l18 86z"/><rect x="250" y="50" width="34" height="62"/><rect x="292" y="70" width="24" height="42"/></g>' +
      '<path d="M140 50q10 -2 20 0M142 66q8 -2 16 0M142 82q8 -2 16 0" stroke="#3e6e7e" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="112" width="400" height="104" fill="' + BRICK + '"/>' + bricks +
      /* market stall awning */
      '<g class="kjrFlap"><path d="M300 112h100v16l-10 6l-10 -6l-10 6l-10 -6l-10 6l-10 -6l-10 6l-10 -6l-10 6l-10 -6z" fill="' + RED + '"/><path d="M310 112v18M330 112v18M350 112v18M370 112v18M390 112v18" stroke="#fff" stroke-width="6" opacity=".9"/></g>' +
      tag("KOJEY RADICAL", 22, 178, 31, GOLD, -5) +
      tag("PUSH CRAYONS", 26, 208, 16, ORANGE, -3) + tag("KWADWO", 206, 208, 18, "#c9a8ff", 3) + tag("I LIKE THAT", 290, 172, 13, "#fff", -4) +
      '<g class="kjrSp"><circle cx="332" cy="176" r="3" fill="' + GOLD + '"/></g><g class="kjrSp kjrSp2"><circle cx="340" cy="170" r="2" fill="' + ORANGE + '"/></g>' +
      '<rect x="346" y="174" width="12" height="28" rx="3" fill="' + GOLD + '" stroke="#222"/><rect x="348" y="168" width="8" height="7" fill="#ddd" stroke="#222"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#7a7a7a"/><rect x="0" y="216" width="400" height="4" fill="#a7a7a7"/>' +
      '<rect x="14" y="20" width="150" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="89" y="38" text-anchor="middle" ' + F + ' font-size="13" fill="#111">HOXTON STREET</text><text x="89" y="50" text-anchor="middle" ' + F + ' font-size="8" fill="#c8102e">N1</text>' +
      '<rect x="236" y="20" width="150" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="311" y="38" text-anchor="middle" ' + F + ' font-size="13" fill="#111">FALKIRK STREET</text><text x="311" y="50" text-anchor="middle" ' + F + ' font-size="8" fill="#c8102e">N1</text>' +
      '<text x="200" y="246" text-anchor="middle" ' + F + ' font-size="9" fill="#eee" letter-spacing="3">HOXTON · HACKNEY</text>',
      sky("kjrs5", "#9fb8d0", "#efdcc8"));
  }

  window.SCENES = { kjrstation, kjrhome, kjrdesk, kjrbrixton, kjrcorner };
})();
