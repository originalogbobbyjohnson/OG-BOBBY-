/* Loyle Carner scenes (Regions tab: UK + EUROPE; South Croydon, South London - born in Lambeth, raised in South Croydon by his mum Jean
   and stepdad Nik; Whitgift School, then the BRIT School in Selhurst; runs the Chilli Con Carner cooking school for kids with ADHD).
   1 South Croydon station: open-air platform, canopy, green operator name boards, a white-and-green commuter train pulling in.
   2 Whitgift School, Haling Park: red-brick and stone front, clock gable, lawns, a peacock strutting across (the school keeps peacocks).
   3 The Chilli Con Carner kitchen: hob, pan flipping a pancake, steam, wooden spoon, recipe book.
   4 George Street, Croydon: a lime-and-white tram gliding past, the stacked-disc No. 1 Croydon tower behind.
   5 Selsdon Road / Brighton Road, South Croydon CR2: UK street signs, LOYLE CARNER tagged, the Town Hall clock tower behind.
   CSS classes prefixed "lcr" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lcrPea{0%{transform:translateX(-90px)}100%{transform:translateX(470px)}}.lcrPea{animation:lcrPea 14s linear infinite;animation-delay:-6s}' +
    '@keyframes lcrBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.lcrBob{animation:lcrBob .5s ease-in-out infinite}' +
    '@keyframes lcrFlip{0%,100%{transform:translateY(0) rotate(0)}45%{transform:translateY(-70px) rotate(180deg)}55%{transform:translateY(-70px) rotate(200deg)}}.lcrFlip{transform-box:fill-box;transform-origin:50% 50%;animation:lcrFlip 2.4s ease-in-out infinite}' +
    '@keyframes lcrSteam{0%{transform:translateY(0);opacity:0}20%{opacity:.7}100%{transform:translateY(-60px);opacity:0}}.lcrSteam{animation:lcrSteam 3s ease-out infinite}.lcrSt2{animation-delay:-1s}.lcrSt3{animation-delay:-2s}' +
    '@keyframes lcrTram{0%{transform:translateX(420px)}100%{transform:translateX(-360px)}}.lcrTram{animation:lcrTram 10s linear infinite;animation-delay:-4s}' +
    '@keyframes lcrCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.lcrCloud{animation:lcrCloud 30s linear infinite}.lcrCl2{animation-delay:-14s}' +
    '@keyframes lcrHand{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.lcrHand{transform-box:view-box;animation:lcrHand 8s linear infinite}' +
    '@keyframes lcrSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.lcrSp{animation:lcrSp 1.4s ease-out infinite}.lcrSp2{animation-delay:.5s}' +
    '@keyframes lcrBlink{0%,100%{opacity:1}50%{opacity:.3}}.lcrBl{animation:lcrBlink 1.2s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f4c95d", ORANGE = "#e8633a", GREEN = "#8cc63e", DKGREEN = "#2f6b2a", BRICK = "#a24a33", STONE = "#e9dfc8";
  const cloud = (x, y, s, cls) => '<g class="lcrCloud ' + (cls || "") + '"><g fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="' + 26 * s + '" ry="' + 9 * s + '"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (y - 7 * s) + '" rx="' + 15 * s + '" ry="' + 9 * s + '"/></g></g>';

  /* 1. South Croydon station (open-air platform, canopy) */
  function lcrstation() {
    let wins = "", posts = "";
    for (let x = 44; x < 300; x += 34) wins += '<rect x="' + x + '" y="146" width="22" height="18" rx="2" fill="#1d2a33"/>';
    for (let x = 20; x < 400; x += 60) posts += '<rect x="' + x + '" y="44" width="5" height="96" fill="#3c4a3a"/>';
    const train = '<g class="anim-train">' +
      '<path d="M14 138h282q30 2 36 30v30H14z" fill="#f4f4f0" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M300 144q22 4 28 26h-28z" fill="#1d2a33"/>' + wins +
      '<rect x="14" y="170" width="318" height="8" fill="' + DKGREEN + '"/><rect x="14" y="178" width="318" height="4" fill="' + GREEN + '"/>' +
      '<g fill="#d9d9d4" stroke="#555" stroke-width="1"><rect x="112" y="142" width="14" height="52"/><rect x="236" y="142" width="14" height="52"/></g>' +
      '<rect x="318" y="184" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="56" cy="201" r="6"/><circle cx="80" cy="201" r="6"/><circle cx="240" cy="201" r="6"/><circle cx="264" cy="201" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcrs1)"/>' + cloud(80, 26, 1) + cloud(280, 18, .8, "lcrCl2") +
      '<path d="M0 104l40 -18h40l20 14h60l30 -20h50l30 16h70l60 -12v60H0z" fill="#9aa79a" opacity=".6"/>' +
      /* canopy */
      '<path d="M0 34h400v12H0z" fill="#3c4a3a"/><path d="M0 46h400" stroke="#6e7d6b" stroke-width="3"/>' +
      '<g fill="#3c4a3a">' + Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 46h12l-6 7z"/>').join("") + '</g>' + posts +
      /* green name boards (operator style, no logo) */
      '<rect x="40" y="70" width="140" height="24" rx="2" fill="' + DKGREEN + '" stroke="#fff" stroke-width="1.5"/><text x="110" y="86" text-anchor="middle" ' + F + ' font-size="11" fill="#fff" letter-spacing=".5">SOUTH CROYDON</text>' +
      '<rect x="222" y="70" width="140" height="24" rx="2" fill="' + DKGREEN + '" stroke="#fff" stroke-width="1.5"/><text x="292" y="86" text-anchor="middle" ' + F + ' font-size="11" fill="#fff" letter-spacing=".5">SOUTH CROYDON</text>' +
      '<rect x="130" y="102" width="140" height="16" rx="2" fill="#111"/><text x="200" y="113" text-anchor="middle" ' + F + ' font-size="7.5" fill="' + GOLD + '" letter-spacing="1"><tspan class="lcrBl">●</tspan> LONDON BRIDGE  ·  ON TIME</text>' +
      '<rect x="0" y="206" width="400" height="54" fill="#5a5d60"/><rect x="0" y="206" width="400" height="6" fill="#f2c14e"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + F + ' font-size="10" fill="#e8e8e8" letter-spacing="3">MIND THE GAP</text>' +
      train,
      sky("lcrs1", "#a9c6dd", "#e9e4d6"));
  }

  /* 2. Whitgift School, Haling Park - red brick, stone dressings, peacock on the lawn */
  function lcrschool() {
    let wins = "";
    for (let x = 52; x < 360; x += 30) if (x < 176 || x > 224) { wins += '<rect x="' + x + '" y="92" width="14" height="24" fill="#2b3440" stroke="' + STONE + '" stroke-width="2"/><rect x="' + x + '" y="132" width="14" height="24" fill="#2b3440" stroke="' + STONE + '" stroke-width="2"/>'; }
    const peacock = '<g class="lcrPea"><g class="lcrBob">' +
      '<path d="M0 214q-34 -40 -10 -64q12 22 30 40z" fill="#1f7a6a" opacity=".9"/>' +
      '<g fill="#2f9e86">' + [0, 1, 2, 3, 4].map(i => '<ellipse cx="' + (-12 + i * 3) + '" cy="' + (166 + i * 8) + '" rx="5" ry="3.5"/>').join("") + '</g>' +
      '<g fill="#f2c14e">' + [0, 1, 2, 3, 4].map(i => '<circle cx="' + (-12 + i * 3) + '" cy="' + (166 + i * 8) + '" r="1.6"/>').join("") + '</g>' +
      '<ellipse cx="26" cy="204" rx="16" ry="10" fill="#1b4fa0"/><path d="M36 198q6 -16 4 -26" stroke="#1b4fa0" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<circle cx="40" cy="170" r="4.5" fill="#1b4fa0"/><path d="M44 170l5 1.5-5 1.5z" fill="#cfa36a"/><circle cx="41.5" cy="169" r="1" fill="#fff"/>' +
      '<path d="M38 165l-1 -6M40 165l0 -7M42 165l1 -6" stroke="#1b4fa0" stroke-width="1"/>' +
      '<path d="M22 212v10M30 212v10" stroke="#8a6a3a" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcrs2)"/>' + cloud(60, 30, 1) + cloud(300, 22, .9, "lcrCl2") +
      /* main range */
      '<rect x="36" y="78" width="328" height="96" fill="' + BRICK + '"/>' +
      '<path d="M36 78h328" stroke="' + STONE + '" stroke-width="4"/><path d="M36 124h328" stroke="' + STONE + '" stroke-width="3"/>' + wins +
      /* centre gable + clock */
      '<path d="M170 78v-30l30 -26l30 26v30z" fill="' + BRICK + '" stroke="' + STONE + '" stroke-width="3"/>' +
      '<circle cx="200" cy="54" r="11" fill="#f3efe4" stroke="#333" stroke-width="2"/><path d="M200 54v-7M200 54l5 3" stroke="#222" stroke-width="1.6"/>' +
      '<path d="M182 174v-54q18 -18 36 0v54z" fill="#4a2b1c" stroke="' + STONE + '" stroke-width="3"/>' +
      '<path d="M36 78l-8 -12h12zM364 78l8 -12h-12z" fill="' + STONE + '"/>' +
      '<rect x="0" y="174" width="400" height="86" fill="#5f9a3e"/><path d="M0 174h400" stroke="#4b7f30" stroke-width="3"/>' +
      '<path d="M150 260l30 -86h40l30 86z" fill="#d8cdb0"/>' +
      peacock +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="9" fill="#fff" letter-spacing="3">HALING PARK · SOUTH CROYDON</text>',
      sky("lcrs2", "#8fb8d8", "#efe6d0"));
  }

  /* 3. The Chilli Con Carner kitchen - pancakes like his nan makes */
  function lcrkitchen() {
    let tiles = "";
    for (let x = 0; x < 400; x += 20) for (let y = 0; y < 150; y += 20) tiles += '<rect x="' + (x + 1) + '" y="' + (y + 1) + '" width="18" height="18" fill="' + (((x + y) / 20) % 2 ? "#f3ede0" : "#e7dfcc") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#d9cfb8"/>' + tiles +
      /* shelf with jars + recipe book */
      '<rect x="22" y="40" width="150" height="6" fill="#6b4a2e"/>' +
      '<rect x="30" y="18" width="18" height="22" rx="3" fill="#c0392b" opacity=".85"/><rect x="54" y="22" width="16" height="18" rx="3" fill="' + GOLD + '"/><rect x="76" y="14" width="20" height="26" rx="3" fill="#6aa84f"/>' +
      '<rect x="104" y="12" width="44" height="28" fill="' + ORANGE + '" stroke="#5a2a14" stroke-width="2"/><text x="126" y="30" text-anchor="middle" ' + F + ' font-size="7" fill="#fff">RECIPES</text>' +
      /* window */
      '<rect x="240" y="20" width="120" height="80" fill="#9cc4e4" stroke="#fff" stroke-width="6"/><path d="M300 20v80M240 60h120" stroke="#fff" stroke-width="4"/>' +
      '<g class="lcrCloud"><ellipse cx="0" cy="50" rx="20" ry="7" fill="#fff" opacity=".8"/></g>' +
      /* counter + hob */
      '<rect x="0" y="150" width="400" height="110" fill="#7a5233"/><rect x="0" y="146" width="400" height="10" fill="#3b2a1e"/>' +
      '<rect x="120" y="156" width="170" height="14" fill="#222"/>' +
      '<g fill="#e8633a" opacity=".8"><path d="M170 170q6 -8 12 0q6 -8 12 0q6 -8 12 0" /></g>' +
      /* pan + flipping pancake */
      '<ellipse cx="200" cy="150" rx="46" ry="9" fill="#2a2a2a"/><path d="M246 148h70" stroke="#2a2a2a" stroke-width="8" stroke-linecap="round"/>' +
      '<g class="lcrFlip"><ellipse cx="200" cy="140" rx="30" ry="6" fill="#e9b85c" stroke="#b7843a" stroke-width="2"/><ellipse cx="194" cy="139" rx="8" ry="2" fill="#f6d896"/></g>' +
      '<g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"><path class="lcrSteam" d="M176 128q-6 -10 0 -20q6 -10 0 -20"/><path class="lcrSteam lcrSt2" d="M206 124q-6 -10 0 -20q6 -10 0 -20"/><path class="lcrSteam lcrSt3" d="M226 128q-6 -10 0 -20q6 -10 0 -20"/></g>' +
      /* plate stack + wooden spoon */
      '<ellipse cx="70" cy="196" rx="40" ry="10" fill="#f6f2ea" stroke="#bbb"/>' +
      '<g fill="#e9b85c" stroke="#b7843a" stroke-width="1.5"><ellipse cx="70" cy="190" rx="28" ry="6"/><ellipse cx="70" cy="184" rx="28" ry="6"/><ellipse cx="70" cy="178" rx="28" ry="6"/></g>' +
      '<path d="M62 172q8 -6 16 0" stroke="#7a3a10" stroke-width="3" fill="none"/>' +
      '<path d="M320 196l50 -40" stroke="#c49a62" stroke-width="6" stroke-linecap="round"/><ellipse cx="376" cy="152" rx="10" ry="6" fill="#c49a62" transform="rotate(-38 376 152)"/>' +
      '<rect x="110" y="214" width="180" height="24" rx="4" fill="#1a120c"/><text x="200" y="230" text-anchor="middle" ' + F + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">CHILLI CON CARNER</text>');
  }

  /* 4. George Street, Croydon: tram gliding past, No. 1 Croydon's stacked discs behind */
  function lcrtram() {
    let tower = "";
    for (let i = 0; i < 12; i++) {
      const y = 196 - i * 13, w = 70 - Math.abs(i - 5) * 2;
      tower += '<rect x="' + (160 - w / 2) + '" y="' + (y - 13) + '" width="' + w + '" height="13" rx="6" fill="' + (i % 2 ? "#b9c4cc" : "#a7b3bc") + '" stroke="#7d8a93" stroke-width="1"/>' +
        '<path d="M' + (160 - w / 2 + 6) + ' ' + (y - 6.5) + 'h' + (w - 12) + '" stroke="#5d7484" stroke-width="5" stroke-dasharray="6 3"/>';
    }
    const tram = '<g class="lcrTram">' +
      '<path d="M0 172q0 -18 18 -18h300q22 0 26 18v34H0z" fill="#f4f4f0" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="0" y="192" width="344" height="10" fill="' + GREEN + '"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 40) + '" y="162" width="28" height="22" rx="3" fill="#1d2a33"/>').join("") +
      '<path d="M120 154l30 -20M190 154l-30 -20" stroke="#333" stroke-width="2"/>' +
      '<g fill="#161616"><circle cx="40" cy="208" r="5"/><circle cx="60" cy="208" r="5"/><circle cx="280" cy="208" r="5"/><circle cx="300" cy="208" r="5"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcrs4)"/>' + cloud(60, 30, 1) + cloud(260, 40, .8, "lcrCl2") +
      '<path d="M0 134h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="120" width="70" height="90" fill="#8a7a6a"/><rect x="250" y="100" width="70" height="110" fill="#9a8e80"/><rect x="330" y="128" width="70" height="82" fill="#7a6e62"/>' +
      tower +
      '<rect x="0" y="206" width="400" height="54" fill="#55585c"/><path d="M0 214h400M0 222h400" stroke="#b0b0b0" stroke-width="2"/>' +
      tram +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="9" fill="#fff" letter-spacing="3">GEORGE STREET · CROYDON</text>',
      sky("lcrs4", "#7fa9cc", "#f1dcc0"));
  }

  /* 5. Selsdon Road / Brighton Road, South Croydon CR2 - the Town Hall clock tower behind */
  function lcrcorner() {
    let bricks = "";
    for (let y = 120; y < 216; y += 10) bricks += '<path d="M0 ' + y + 'h400" stroke="#6e3626" stroke-width="1"/>';
    for (let y = 120, r = 0; y < 216; y += 10, r++) for (let x = (r % 2) * 14; x < 400; x += 28) bricks += '<path d="M' + x + ' ' + y + 'v10" stroke="#6e3626" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcrs5)"/>' +
      /* clock tower: red brick + Portland stone, spire */
      '<rect x="180" y="40" width="40" height="80" fill="#b5543b" stroke="#6e3626" stroke-width="2"/><path d="M180 60h40M180 84h40" stroke="' + STONE + '" stroke-width="3"/>' +
      '<path d="M176 40h48l-6 -10h-36z" fill="' + STONE + '"/><path d="M186 30l14 -26l14 26z" fill="#4f6a5a" stroke="#2f4a3a" stroke-width="1.5"/>' +
      '<circle cx="200" cy="72" r="10" fill="#f3efe4" stroke="#333" stroke-width="1.6"/><path class="lcrHand" style="transform-origin:200px 72px" d="M200 72v-7" stroke="#222" stroke-width="1.6"/><path d="M200 72l4 2" stroke="#222" stroke-width="1.6"/>' +
      '<rect x="0" y="112" width="400" height="104" fill="' + BRICK + '"/>' + bricks +
      tag("LOYLE CARNER", 30, 176, 38, GOLD, -5) +
      tag("CON CARNER", 28, 206, 17, ORANGE, -3) + tag("BEN", 214, 208, 22, GREEN, 4) + tag("NO CD", 270, 206, 17, "#fff", -4) +
      '<g class="lcrSp"><circle cx="330" cy="166" r="3" fill="' + GOLD + '"/></g><g class="lcrSp lcrSp2"><circle cx="338" cy="160" r="2" fill="' + ORANGE + '"/></g>' +
      '<rect x="344" y="164" width="12" height="28" rx="3" fill="' + GOLD + '" stroke="#222"/><rect x="346" y="158" width="8" height="7" fill="#ddd" stroke="#222"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#7a7a7a"/><rect x="0" y="216" width="400" height="4" fill="#a7a7a7"/>' +
      /* UK street signs */
      '<rect x="14" y="20" width="150" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="89" y="38" text-anchor="middle" ' + F + ' font-size="13" fill="#111">SELSDON ROAD</text><text x="89" y="50" text-anchor="middle" ' + F + ' font-size="8" fill="#c8102e">CR2</text>' +
      '<rect x="236" y="20" width="150" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="311" y="38" text-anchor="middle" ' + F + ' font-size="13" fill="#111">BRIGHTON ROAD</text><text x="311" y="50" text-anchor="middle" ' + F + ' font-size="8" fill="#c8102e">CR2</text>' +
      '<text x="200" y="246" text-anchor="middle" ' + F + ' font-size="9" fill="#eee" letter-spacing="3">SOUTH CROYDON · CROYDON</text>',
      sky("lcrs5", "#8fbde2", "#f0e2cc"));
  }

  window.SCENES = { lcrstation, lcrschool, lcrkitchen, lcrtram, lcrcorner };
})();
