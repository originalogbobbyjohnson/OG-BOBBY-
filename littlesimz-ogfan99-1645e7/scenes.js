/* Little Simz scenes (Regions tab: UK + EUROPE; Islington, North London - born in Islington to Nigerian (Yoruba) parents, raised on a council estate,
   Highbury Fields School, St Mary's Youth Club on Upper Street ("where it all began"); own label AGE 101; Mercury Prize 2022 for Sometimes I Might Be Introvert).
   1 Highbury & Islington, Victoria line deep-level platform: cream tiles, light-blue band, a silver train with red doors pulling in.
   2 St Mary's Church, Upper Street: brick church, white Portland stone steeple, the youth club door, notes floating out.
   3 Highbury Fields: big plane trees, iron railings, the Georgian terrace behind, leaves falling, a ball rolling.
   4 Hammersmith Apollo, Mercury Prize night 2022: the cream art deco front, marquee bulbs chasing, searchlights.
   5 Highbury Corner: UK street signs UPPER STREET N1 / HOLLOWAY ROAD N7, LITTLE SIMZ tagged with AGE 101 / SIMBI / NO THANK YOU, the stadium roof behind.
   CSS classes prefixed "lsz" (the page's own anim-train is kept). No logos (no roundel), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lszNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-70px);opacity:0}}.lszNote{animation:lszNote 3s ease-out infinite}.lszN2{animation-delay:-1s}.lszN3{animation-delay:-2s}' +
    '@keyframes lszBlink{0%,100%{opacity:1}50%{opacity:.25}}.lszBl{animation:lszBlink 1s steps(1) infinite}.lszBl2{animation-delay:-.5s}' +
    '@keyframes lszBeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.lszBeam{transform-box:fill-box;transform-origin:50% 100%;animation:lszBeam 4s ease-in-out infinite}.lszBm2{animation-delay:-2s}' +
    '@keyframes lszLeaf{0%{transform:translate(0,-10px) rotate(0)}100%{transform:translate(-40px,230px) rotate(300deg)}}.lszLeaf{transform-box:fill-box;animation:lszLeaf 7s linear infinite}.lszL2{animation-delay:-2.3s}.lszL3{animation-delay:-4.6s}' +
    '@keyframes lszBall{0%{transform:translateX(0) rotate(0)}50%{transform:translateX(120px) rotate(360deg)}100%{transform:translateX(0) rotate(0)}}.lszBall{transform-box:fill-box;transform-origin:50% 50%;animation:lszBall 6s ease-in-out infinite}' +
    '@keyframes lszBird{0%{transform:translateX(-60px)}100%{transform:translateX(470px)}}.lszBird{animation:lszBird 11s linear infinite}.lszBd2{animation-delay:-5s}' +
    '@keyframes lszBus{0%{transform:translateX(-160px)}100%{transform:translateX(480px)}}.lszBus{animation:lszBus 9s linear infinite}' +
    '@keyframes lszSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.lszSp{animation:lszSp 1.4s ease-out infinite}.lszSp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const VIC = "#0098d4", GOLD = "#f2b134", ORANGE = "#e2572b", BRICK = "#9a4a34", STONE = "#efe9dc";
  const note = (x, y, c, cls) => '<g class="lszNote ' + cls + '" fill="' + c + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="2" height="18"/><path d="M' + (x + 5.6) + ' ' + (y - 18) + 'q8 3 6 10q-1 -5 -6 -5z"/></g>';

  /* 1. Highbury & Islington, Victoria line (deep-level tube) */
  function lszstation() {
    let tiles = "", wins = "";
    for (let x = 0; x < 400; x += 16) tiles += '<path d="M' + x + ' 40v92" stroke="#d9d1bf" stroke-width="1"/>';
    for (let y = 48; y < 132; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d1bf" stroke-width="1"/>';
    for (let x = 50; x < 280; x += 38) wins += '<rect x="' + x + '" y="142" width="24" height="20" rx="3" fill="#1c2733"/>';
    const train = '<g class="anim-train">' +
      '<path d="M18 136h270q30 0 36 26v36H18z" fill="#dfe3e7" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M294 142q20 2 24 22h-24z" fill="#1c2733"/>' + wins +
      '<g fill="#d8232a"><rect x="30" y="140" width="12" height="54"/><rect x="146" y="140" width="12" height="54"/><rect x="262" y="140" width="12" height="54"/></g>' +
      '<rect x="18" y="186" width="306" height="12" fill="#1f3f9a"/><rect x="306" y="176" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="62" cy="201" r="6"/><circle cx="86" cy="201" r="6"/><circle cx="226" cy="201" r="6"/><circle cx="250" cy="201" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1612"/>' +
      '<path d="M0 40q200 -60 400 0v100H0z" fill="#ece4d2"/>' + '<g clip-path="url(#lszclip)">' + tiles + '</g>' +
      '<rect x="0" y="60" width="400" height="8" fill="' + VIC + '"/>' +
      /* name boards (plain blue bar, no roundel) */
      '<rect x="34" y="78" width="150" height="22" rx="2" fill="#10245a" stroke="#fff" stroke-width="1.5"/><text x="109" y="93" text-anchor="middle" ' + F + ' font-size="9.5" fill="#fff" letter-spacing=".5">HIGHBURY &amp; ISLINGTON</text>' +
      '<rect x="216" y="78" width="150" height="22" rx="2" fill="#10245a" stroke="#fff" stroke-width="1.5"/><text x="291" y="93" text-anchor="middle" ' + F + ' font-size="9.5" fill="#fff" letter-spacing=".5">HIGHBURY &amp; ISLINGTON</text>' +
      '<rect x="86" y="108" width="228" height="16" rx="2" fill="' + VIC + '"/><text x="200" y="120" text-anchor="middle" ' + F + ' font-size="8" fill="#fff" letter-spacing="1">VICTORIA LINE · BRIXTON / WALTHAMSTOW</text>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4c4f57"/><rect x="0" y="206" width="400" height="6" fill="#f2c14e"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + F + ' font-size="11" fill="#e8e8e8" letter-spacing="4">MIND THE GAP</text>' +
      train,
      '<clipPath id="lszclip"><path d="M0 40q200 -60 400 0v100H0z"/></clipPath>');
  }

  /* 2. St Mary's Church, Upper Street - the youth club where it began */
  function lszchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#lszs2)"/>' +
      '<g class="lszBird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="lszBird lszBd2"><path d="M0 62q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* white stone steeple */
      '<g fill="' + STONE + '" stroke="#b8ae98" stroke-width="1.2">' +
      '<rect x="176" y="96" width="48" height="110"/><rect x="182" y="70" width="36" height="28"/><rect x="188" y="50" width="24" height="22"/>' +
      '<path d="M190 50l10 -44l10 44z"/></g>' +
      '<path d="M200 6v-4" stroke="' + GOLD + '" stroke-width="2"/><circle cx="200" cy="4" r="2" fill="' + GOLD + '"/>' +
      '<g fill="#5b5445"><path d="M193 120q7 -12 14 0v20h-14z"/><path d="M190 80q10 -10 20 0v12h-20z"/><circle cx="200" cy="160" r="9" fill="#e8dfc8" stroke="#8a7f66"/></g>' +
      '<path d="M200 153v7l5 3" stroke="#333" stroke-width="1.5" fill="none"/>' +
      /* brick church body both sides */
      '<rect x="60" y="130" width="116" height="76" fill="' + BRICK + '"/><rect x="224" y="130" width="116" height="76" fill="' + BRICK + '"/>' +
      '<path d="M56 130h124M220 130h124" stroke="' + STONE + '" stroke-width="5"/>' +
      '<g fill="#2b2a36"><path d="M78 150q10 -14 20 0v34h-20z"/><path d="M120 150q10 -14 20 0v34h-20z"/><path d="M260 150q10 -14 20 0v34h-20z"/><path d="M302 150q10 -14 20 0v34h-20z"/></g>' +
      /* youth club door with warm light */
      '<rect x="190" y="176" width="20" height="30" fill="#ffd27a"/><rect x="150" y="104" width="22" height="0"/>' +
      '<rect x="130" y="186" width="44" height="14" rx="2" fill="#1d1d1d"/><text x="152" y="196" text-anchor="middle" ' + F + ' font-size="6.5" fill="' + GOLD + '">YOUTH CLUB</text>' +
      note(214, 170, GOLD, "") + note(226, 176, "#fff", "lszN2") + note(204, 176, ORANGE, "lszN3") +
      /* Upper Street pavement and railings */
      '<rect x="0" y="206" width="400" height="54" fill="#6b6b6b"/><rect x="0" y="206" width="400" height="5" fill="#9a9a9a"/>' +
      '<g stroke="#1b1b1b" stroke-width="2">' + Array.from({ length: 26 }, (_, i) => '<path d="M' + (8 + i * 16) + ' 212v-16"/>').join("") + '<path d="M0 198h400"/></g>' +
      '<text x="200" y="244" text-anchor="middle" ' + F + ' font-size="10" fill="#eee" letter-spacing="3">UPPER STREET · ISLINGTON</text>',
      sky("lszs2", "#9cc4e4", "#f1e6d0"));
  }

  /* 3. Highbury Fields */
  function lszfields() {
    let houses = "";
    for (let i = 0; i < 8; i++) {
      const x = 8 + i * 49;
      houses += '<rect x="' + x + '" y="70" width="46" height="70" fill="#c88a5a" stroke="#8a5a36"/>' +
        '<g fill="#f4efe4"><rect x="' + (x + 6) + '" y="80" width="10" height="16"/><rect x="' + (x + 28) + '" y="80" width="10" height="16"/><rect x="' + (x + 6) + '" y="106" width="10" height="16"/><rect x="' + (x + 28) + '" y="106" width="10" height="16"/></g>' +
        '<rect x="' + x + '" y="66" width="46" height="5" fill="#eee"/>';
    }
    const tree = (x, s) => '<g><rect x="' + (x - 4 * s) + '" y="' + (150 - 10 * s) + '" width="' + 8 * s + '" height="' + 70 * s + '" fill="#8b7a62"/><path d="M' + (x - 2) + ' ' + (150 - 10 * s) + 'h4" stroke="#d8ccb0" stroke-width="3"/>' +
      '<g fill="#4e8a3a"><circle cx="' + x + '" cy="' + (110 - 6 * s) + '" r="' + 30 * s + '"/><circle cx="' + (x - 22 * s) + '" cy="' + (128 - 4 * s) + '" r="' + 22 * s + '"/><circle cx="' + (x + 24 * s) + '" cy="' + (126 - 4 * s) + '" r="' + 22 * s + '"/></g>' +
      '<g fill="#6aa84f"><circle cx="' + (x - 8 * s) + '" cy="' + (100 - 6 * s) + '" r="' + 12 * s + '"/><circle cx="' + (x + 14 * s) + '" cy="' + (114 - 6 * s) + '" r="' + 10 * s + '"/></g></g>';
    const leaf = (x, y, cls) => '<path class="lszLeaf ' + cls + '" d="M' + x + ' ' + y + 'q6 -6 12 0q-6 6 -12 0z" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lszs3)"/>' + houses +
      '<path d="M0 150q200 -14 400 0v110H0z" fill="#6fae4f"/><path d="M0 190q200 -18 400 6v64H0z" fill="#5f9c43"/>' +
      tree(70, 1.1) + tree(210, 1.25) + tree(340, 1.05) +
      '<path d="M150 260q20 -50 80 -96" stroke="#d8c79c" stroke-width="12" fill="none"/>' +
      '<g class="lszBall"><circle cx="110" cy="212" r="6" fill="#fff" stroke="#222"/><path d="M106 210l4 -3l4 3l-1 4h-6z" fill="#222"/></g>' +
      leaf(120, 40, "") + leaf(250, 30, "lszL2") + leaf(330, 50, "lszL3") +
      '<g stroke="#1b1b1b" stroke-width="2">' + Array.from({ length: 34 }, (_, i) => '<path d="M' + (4 + i * 12) + ' 248v-18"/>').join("") + '<path d="M0 232h400"/></g>' +
      '<rect x="128" y="10" width="144" height="22" rx="3" fill="#0f5a3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="25" text-anchor="middle" ' + F + ' font-size="11" fill="#fff" letter-spacing="2">HIGHBURY FIELDS</text>',
      sky("lszs3", "#a8cfee", "#eef0e0"));
  }

  /* 4. Hammersmith Apollo, Mercury Prize night 2022 */
  function lszapollo() {
    let bulbs = "";
    for (let i = 0; i < 30; i++) bulbs += '<circle cx="' + (84 + i * 8) + '" cy="150" r="2" fill="#ffe08a" class="lszBl' + (i % 2 ? ' lszBl2' : '') + '"/>' + '<circle cx="' + (84 + i * 8) + '" cy="178" r="2" fill="#ffe08a" class="lszBl' + (i % 2 ? '' : ' lszBl2') + '"/>';
    let fins = "";
    for (let i = 0; i < 7; i++) fins += '<rect x="' + (150 + i * 16) + '" y="44" width="6" height="96" fill="#e6dcc4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lszs4)"/>' +
      '<g opacity=".5"><path class="lszBeam" d="M110 200l-26 -200h16z" fill="#fff6c8"/><path class="lszBeam lszBm2" d="M290 200l26 -200h-16z" fill="#fff6c8"/></g>' +
      /* stepped art deco front */
      '<path d="M60 206v-120h40v-20h40v-30h120v30h40v20h40v120z" fill="#f2ead6" stroke="#b8ab8a" stroke-width="2"/>' + fins +
      '<g fill="#c7b892"><rect x="66" y="96" width="28" height="6"/><rect x="306" y="96" width="28" height="6"/><rect x="104" y="74" width="32" height="6"/><rect x="264" y="74" width="32" height="6"/></g>' +
      /* marquee */
      '<rect x="78" y="144" width="244" height="40" fill="#1b1b1f" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="165" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + GOLD + '" letter-spacing="2">LITTLE SIMZ</text>' +
      '<text x="200" y="175" text-anchor="middle" ' + F + ' font-size="6.5" fill="#fff" letter-spacing="2">MERCURY NIGHT · INTROVERT</text>' +
      '<g fill="#2a2320"><rect x="100" y="188" width="30" height="18"/><rect x="146" y="188" width="30" height="18"/><rect x="224" y="188" width="30" height="18"/><rect x="270" y="188" width="30" height="18"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#3c3c42"/>' +
      '<g class="lszBus"><rect x="0" y="212" width="120" height="40" rx="5" fill="#d6241f"/><rect x="8" y="218" width="104" height="12" fill="#25323e"/><rect x="8" y="234" width="104" height="6" fill="#25323e" opacity=".7"/><circle cx="22" cy="252" r="5" fill="#111"/><circle cx="98" cy="252" r="5" fill="#111"/></g>' +
      '<text x="200" y="30" text-anchor="middle" ' + F + ' font-size="10" fill="#f2ead6" letter-spacing="3">HAMMERSMITH APOLLO</text>',
      sky("lszs4", "#0d1530", "#3a2a40"));
  }

  /* 5. Highbury Corner */
  function lszcorner() {
    let bricks = "";
    for (let y = 120; y < 216; y += 10) bricks += '<path d="M0 ' + y + 'h400" stroke="#6e3626" stroke-width="1"/>';
    for (let y = 120, r = 0; y < 216; y += 10, r++) for (let x = (r % 2) * 14; x < 400; x += 28) bricks += '<path d="M' + x + ' ' + y + 'v10" stroke="#6e3626" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lszs5)"/>' +
      /* stadium roof far behind: white bowl with red band */
      '<path d="M40 112q160 -60 320 0z" fill="#e9edf2"/><path d="M60 112q140 -44 280 0" stroke="#c8102e" stroke-width="7" fill="none"/>' +
      '<g stroke="#b7bec8" stroke-width="1.5">' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (70 + i * 22) + ' 112l' + (i < 6 ? 6 : -6) + ' -30"/>').join("") + '</g>' +
      '<rect x="0" y="112" width="400" height="104" fill="' + BRICK + '"/>' + bricks +
      tag("LITTLE SIMZ", 46, 176, 40, GOLD, -5) +
      tag("AGE 101", 30, 206, 18, ORANGE, -3) + tag("SIMBI", 236, 140, 20, "#7fd0f5", 4) + tag("NO THANK YOU", 250, 206, 15, "#fff", -4) +
      '<g class="lszSp"><circle cx="300" cy="166" r="3" fill="' + GOLD + '"/></g><g class="lszSp lszSp2"><circle cx="308" cy="160" r="2" fill="' + ORANGE + '"/></g>' +
      /* spray can */
      '<rect x="314" y="164" width="12" height="28" rx="3" fill="' + GOLD + '" stroke="#222"/><rect x="316" y="158" width="8" height="7" fill="#ddd" stroke="#222"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#7a7a7a"/><rect x="0" y="216" width="400" height="4" fill="#a7a7a7"/>' +
      /* UK street signs */
      '<rect x="16" y="20" width="150" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="91" y="38" text-anchor="middle" ' + F + ' font-size="13" fill="#111">UPPER STREET</text><text x="91" y="50" text-anchor="middle" ' + F + ' font-size="8" fill="#c8102e">N1</text>' +
      '<rect x="234" y="20" width="150" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="309" y="38" text-anchor="middle" ' + F + ' font-size="13" fill="#111">HOLLOWAY ROAD</text><text x="309" y="50" text-anchor="middle" ' + F + ' font-size="8" fill="#c8102e">N7</text>' +
      '<text x="200" y="246" text-anchor="middle" ' + F + ' font-size="9" fill="#eee" letter-spacing="3">HIGHBURY CORNER · ISLINGTON</text>',
      sky("lszs5", "#8fbde2", "#f0e2cc"));
  }

  window.SCENES = { lszstation, lszchurch, lszfields, lszapollo, lszcorner };
})();
