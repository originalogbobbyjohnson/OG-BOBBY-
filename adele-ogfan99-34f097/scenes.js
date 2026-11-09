/* Adele game (GENRES: POP; Regions: UK + Europe; Tottenham, North London - born and raised in Tottenham N17).
   Rooms: Tottenham Hale (Victoria line, underground platforms), the Royal Albert Hall (Live at the Royal Albert Hall, 2011),
   Wembley Stadium (four sold-out nights, 2017), Hyde Park (her two summer 2022 shows), and Tottenham High Road at
   Bruce Grove with the Tottenham High Cross monument behind. CSS classes prefixed "adl" (the page's anim-train is kept).
   No logos (no roundel, no club crest), no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes adlTw{0%,100%{opacity:1}50%{opacity:.25}}.adlTw{animation:adlTw 1.8s ease-in-out infinite}.adlT2{animation-delay:.6s}.adlT3{animation-delay:1.2s}' +
    '@keyframes adlBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.adlBob{animation:adlBob .7s ease-in-out infinite}.adlBb2{animation-delay:.35s}' +
    '@keyframes adlBeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.adlBeam{transform-box:fill-box;transform-origin:50% 100%;animation:adlBeam 4s ease-in-out infinite}.adlBm2{animation-delay:-2s}' +
    '@keyframes adlSwan{0%{transform:translateX(60px)}100%{transform:translateX(460px)}}.adlSwan{animation:adlSwan 16s linear infinite}' +
    '@keyframes adlBus{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.adlBus{animation:adlBus 9s linear infinite}' +
    '@keyframes adlFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.adlFlag{transform-box:fill-box;transform-origin:0 50%;animation:adlFlag 1.3s ease-in-out infinite}' +
    '@keyframes adlLeaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.adlLeaf{transform-box:fill-box;transform-origin:50% 100%;animation:adlLeaf 3s ease-in-out infinite}' +
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
  const VIC = "#0098d4", NAVY = "#10245a", GOLD = "#e8c46a", ROSE = "#e0607e", BRICK = "#9a4a34", TERRA = "#c98a5a";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="adlTw' + (i % 3 === 1 ? ' adlT2' : i % 3 === 2 ? ' adlT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill, x0, x1, lights) => {
    let s = ""; const a = x0 || 0, b = x1 || 400;
    for (let i = 0; i < n; i++) {
      const x = a + 6 + i * ((b - a) / n), up = i % 3 === 0;
      s += '<g class="adlBob' + (i % 2 ? ' adlBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="18" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l6 -14" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' +
          (lights ? '<circle cx="' + (x + 10) + '" cy="' + (y - 22) + '" r="2.2" fill="#fff6c8" class="adlTw' + (i % 2 ? ' adlT2' : '') + '"/>' : '') : '') + '</g>';
    }
    return s;
  };

  /* 1. Tottenham Hale: the Victoria line platform underground, white tiles with the light-blue line stripe, a tube train pulling in */
  function adlstation() {
    let tiles = "", wins = "";
    for (let y = 20; y < 150; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6dbe0" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 20v130" stroke="#d6dbe0" stroke-width="1"/>';
    for (let x = 50; x < 280; x += 36) wins += '<rect x="' + x + '" y="132" width="24" height="20" rx="3" fill="#bfe2f5"/>';
    const train = '<g class="anim-train">' +
      '<rect x="20" y="122" width="270" height="70" rx="12" fill="#f4f4f2" stroke="#2b2b2b" stroke-width="2"/>' +
      '<path d="M290 122q24 2 28 30v40h-28z" fill="#f4f4f2" stroke="#2b2b2b" stroke-width="2"/>' +
      '<path d="M294 130q16 2 19 22h-19z" fill="#1d2a36"/>' +
      '<rect x="20" y="178" width="298" height="14" fill="' + NAVY + '"/>' + wins +
      '<g fill="#d81e2a"><rect x="40" y="128" width="8" height="50"/><rect x="146" y="128" width="8" height="50"/><rect x="254" y="128" width="8" height="50"/><rect x="304" y="160" width="10" height="16"/></g>' +
      '<rect x="306" y="182" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#1b1b1b"><circle cx="64" cy="196" r="7"/><circle cx="88" cy="196" r="7"/><circle cx="226" cy="196" r="7"/><circle cx="250" cy="196" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#1d2330"/>' +
      /* curved tunnel wall, white tiles */
      '<path d="M0 150V40Q200 -10 400 40v110z" fill="#eef1f3"/>' + '<g clip-path="url(#adlclip1)">' + tiles + '</g>' +
      '<rect x="0" y="70" width="400" height="10" fill="' + VIC + '"/>' +
      /* station name board */
      '<rect x="110" y="36" width="180" height="30" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="57" text-anchor="middle" ' + F + ' font-size="15" fill="#fff" letter-spacing="1">TOTTENHAM HALE</text>' +
      '<circle cx="94" cy="51" r="11" fill="' + VIC + '" stroke="#fff" stroke-width="2"/><text x="94" y="56" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">V</text>' +
      '<text x="200" y="96" text-anchor="middle" ' + F + ' font-size="9" fill="' + NAVY + '" letter-spacing="2">VICTORIA LINE · NORTHBOUND / SOUTHBOUND</text>' +
      /* platform */
      '<rect x="0" y="196" width="400" height="64" fill="#5b5f68"/><rect x="0" y="196" width="400" height="6" fill="#f2c14e"/>' +
      '<text x="200" y="232" text-anchor="middle" ' + F + ' font-size="11" fill="#e9e9e9" letter-spacing="4">MIND THE GAP</text>' +
      train,
      '<clipPath id="adlclip1"><path d="M0 150V40Q200 -10 400 40v110z"/></clipPath>');
  }

  /* 2. The Royal Albert Hall at night: red brick drum, the terracotta mosaic frieze band, the iron-and-glass dome, spotlights */
  function adlalbert() {
    let pil = "", wins = "";
    for (let x = 64; x <= 336; x += 24) pil += '<rect x="' + (x - 2) + '" y="112" width="4" height="92" fill="' + TERRA + '"/>';
    for (let x = 74; x < 336; x += 24) wins += '<rect x="' + (x - 4) + '" y="150" width="8" height="18" rx="4" fill="#ffd98a" class="adlTw' + (x % 48 ? ' adlT2' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#adls2)"/>' + stars(26, 8, 80) +
      /* spotlights */
      '<path d="M120 210L90 20h24z" fill="#fff6d0" opacity=".14" class="adlBeam"/><path d="M280 210L286 20h24z" fill="#fff6d0" opacity=".14" class="adlBeam adlBm2"/>' +
      /* dome */
      '<path d="M70 100Q200 30 330 100z" fill="#9fb3aa" stroke="#56665f" stroke-width="2"/>' +
      '<path d="M100 92Q200 46 300 92M130 84Q200 56 270 84" stroke="#56665f" stroke-width="1.4" fill="none"/>' +
      '<path d="M200 46v54M160 54l-12 44M240 54l12 44M126 66l-24 32M274 66l24 32" stroke="#56665f" stroke-width="1.2"/>' +
      '<rect x="188" y="36" width="24" height="12" rx="3" fill="#56665f"/>' +
      /* brick drum */
      '<path d="M54 100h292v108H54z" fill="' + BRICK + '"/>' +
      '<path d="M54 100h292v12H54z" fill="#7d3a28"/>' +
      /* terracotta frieze */
      '<rect x="54" y="122" width="292" height="16" fill="#d9b48a"/>' +
      '<path d="M54 130h292" stroke="#8a5a3a" stroke-width="1" stroke-dasharray="6 4"/>' +
      '<g fill="#8a5a3a">' + [70, 110, 150, 190, 230, 270, 310].map(x => '<rect x="' + x + '" y="125" width="14" height="10" rx="2"/>').join("") + '</g>' +
      pil + wins +
      /* the porch, steps */
      '<rect x="166" y="168" width="68" height="40" fill="#b85a3e"/><path d="M160 168h80l-40 -18z" fill="' + TERRA + '"/>' +
      '<g fill="#ffd98a"><rect x="176" y="178" width="12" height="30" rx="6"/><rect x="194" y="178" width="12" height="30" rx="6"/><rect x="212" y="178" width="12" height="30" rx="6"/></g>' +
      '<rect x="0" y="208" width="400" height="52" fill="#2a2d34"/><path d="M150 208h100l10 8H140z" fill="#c9c1b0"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + F + ' font-size="10" fill="' + GOLD + '" letter-spacing="3">LIVE AT THE ROYAL ALBERT HALL · 2011</text>',
      sky("adls2", "#0c1430", "#3a2d4e"));
  }

  /* 3. Wembley Stadium: the white arch over the bowl, a crowd with phone lights, the stage glow */
  function adlwembley() {
    let ribs = "";
    for (let i = 0; i <= 18; i++) { const t = i / 18, x = 40 + t * 320, y = 214 - Math.sin(Math.PI * t) * 190; ribs += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="2" fill="#c9ccd2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#adls3)"/>' + stars(18, 6, 60) +
      /* the arch */
      '<path d="M40 214Q200 -166 360 214" stroke="#f4f4f4" stroke-width="7" fill="none"/>' +
      '<path d="M40 214Q200 -166 360 214" stroke="#c9ccd2" stroke-width="2" fill="none" stroke-dasharray="3 9"/>' + ribs +
      /* roof cables to the arch */
      '<path d="M200 24L60 120M200 24L120 116M200 24L200 112M200 24L280 116M200 24L340 120" stroke="#e6e8ec" stroke-width="1" opacity=".7"/>' +
      /* the bowl */
      '<path d="M20 120Q200 96 380 120v40H20z" fill="#d5d9df"/><path d="M20 120Q200 96 380 120" stroke="#9aa1ab" stroke-width="2" fill="none"/>' +
      '<path d="M20 136Q200 116 380 136v90H20z" fill="#b8202c"/>' +
      '<path d="M20 152Q200 132 380 152M20 168Q200 150 380 168" stroke="#8a1520" stroke-width="2" fill="none"/>' +
      /* stage */
      '<rect x="150" y="150" width="100" height="40" fill="#1a1a22"/><rect x="156" y="156" width="88" height="26" fill="' + ROSE + '" opacity=".75" class="adlTw"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#14161c"/>' +
      crowd(232, 30, "#08090c", 0, 400, true) +
      '<text x="200" y="254" text-anchor="middle" ' + F + ' font-size="9" fill="' + GOLD + '" letter-spacing="3">WEMBLEY · FOUR NIGHTS · 2017</text>',
      sky("adls3", "#1a1438", "#d77a62"));
  }

  /* 4. Hyde Park on a summer evening: the old oaks, the Serpentine with a swan gliding, her stage lit gold */
  function adlhydepark() {
    const tree = (x, y, s) => '<g class="adlLeaf"><rect x="' + (x - 4 * s) + '" y="' + (y - 30 * s) + '" width="' + (8 * s) + '" height="' + (30 * s) + '" fill="#4a3324"/>' +
      '<circle cx="' + x + '" cy="' + (y - 46 * s) + '" r="' + (24 * s) + '" fill="#2f6b34"/><circle cx="' + (x - 18 * s) + '" cy="' + (y - 34 * s) + '" r="' + (16 * s) + '" fill="#3a7d3e"/><circle cx="' + (x + 18 * s) + '" cy="' + (y - 36 * s) + '" r="' + (17 * s) + '" fill="#2a5f2f"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#adls4)"/>' +
      /* far skyline silhouette */
      '<g fill="#7d6f8e" opacity=".7"><rect x="20" y="70" width="24" height="40"/><rect x="50" y="56" width="16" height="54"/><rect x="320" y="62" width="20" height="48"/><rect x="346" y="78" width="30" height="32"/><path d="M300 110V40l6 -10l6 10v70z"/></g>' +
      '<rect x="0" y="108" width="400" height="152" fill="#5a9a48"/>' +
      tree(40, 150, 1.1) + tree(360, 146, 1.2) + tree(100, 128, .7) + tree(300, 126, .7) +
      /* the stage */
      '<rect x="140" y="64" width="120" height="70" fill="#1c1c24"/><path d="M134 64h132l-10 -20H144z" fill="#2a2a34"/>' +
      '<rect x="150" y="74" width="100" height="50" fill="' + GOLD + '" opacity=".85" class="adlTw"/>' +
      '<text x="200" y="104" text-anchor="middle" ' + F + ' font-size="13" fill="#3a2a10" letter-spacing="2">HYDE PARK</text>' +
      '<path d="M150 134L120 40h12zM250 134L268 40h12z" fill="#fff6d0" opacity=".12"/>' +
      /* the Serpentine, a swan gliding across */
      '<path d="M0 150q100 -10 200 -4t200 -2v28q-100 6 -200 2t-200 4z" fill="#5d8fb8"/>' +
      '<path d="M30 160q20 -4 40 0M150 166q20 -4 40 0M260 158q20 -4 40 0M330 166q20 -4 40 0" stroke="#b9d8ef" stroke-width="2" fill="none"/>' +
      '<g class="adlSwan"><path d="M0 168q10 6 24 0q-4 -6 -10 -4q-2 -10 2 -14q-6 0 -6 8q0 6 2 10q-8 -2 -12 0z" fill="#fff" stroke="#9aa" stroke-width="1"/><path d="M10 150l-4 2" stroke="#e87a2a" stroke-width="2"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3f7a34"/>' +
      crowd(226, 22, "#1c2e1a", 0, 400, false) +
      '<text x="200" y="252" text-anchor="middle" ' + F + ' font-size="9" fill="#fff" letter-spacing="3">TWO SUMMER NIGHTS · 2022</text>',
      sky("adls4", "#f6b87a", "#f9e3b4"));
  }

  /* 5. Tottenham High Road at Bruce Grove: London street plates, ADELE tagged on the wall, the Tottenham High Cross monument behind, a red bus going by */
  function adlcorner() {
    const cross = (x, base) =>
      '<g><rect x="' + (x - 16) + '" y="' + (base - 70) + '" width="32" height="70" fill="#ece4d2" stroke="#a89f8a" stroke-width="1.5"/>' +
      '<path d="M' + (x - 8) + ' ' + (base - 56) + 'v-0q0 -8 8 -12q8 4 8 12v26h-16z" fill="#bdb39c"/>' +
      '<rect x="' + (x - 20) + '" y="' + (base - 76) + '" width="40" height="6" fill="#d8cfb9"/>' +
      '<rect x="' + (x - 11) + '" y="' + (base - 112) + '" width="22" height="36" fill="#ece4d2" stroke="#a89f8a" stroke-width="1.5"/>' +
      '<path d="M' + (x - 5) + ' ' + (base - 100) + 'q5 -8 10 0v16h-10z" fill="#bdb39c"/>' +
      '<path d="M' + (x - 11) + ' ' + (base - 112) + 'l11 -24l11 24z" fill="#d8cfb9" stroke="#a89f8a" stroke-width="1.5"/>' +
      '<path d="M' + (x - 22) + ' ' + (base - 70) + 'v-14l3 -6l3 6v14zM' + (x + 16) + ' ' + (base - 70) + 'v-14l3 -6l3 6v14z" fill="#d8cfb9"/></g>';
    const bus = '<g class="adlBus"><rect x="0" y="150" width="120" height="66" rx="8" fill="#d41a1f" stroke="#7a0e12" stroke-width="2"/>' +
      '<g fill="#cfe6ff"><rect x="10" y="158" width="20" height="16" rx="2"/><rect x="36" y="158" width="20" height="16" rx="2"/><rect x="62" y="158" width="20" height="16" rx="2"/><rect x="88" y="158" width="24" height="16" rx="2"/>' +
      '<rect x="10" y="184" width="20" height="16" rx="2"/><rect x="36" y="184" width="20" height="16" rx="2"/><rect x="62" y="184" width="20" height="16" rx="2"/><rect x="96" y="184" width="16" height="24" rx="2"/></g>' +
      '<rect x="88" y="152" width="26" height="5" fill="#111"/><text x="101" y="156.5" text-anchor="middle" ' + F + ' font-size="4.5" fill="#ffb400">76</text>' +
      '<g fill="#1b1b1b"><circle cx="24" cy="216" r="7"/><circle cx="96" cy="216" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#adls5)"/>' +
      /* terraces behind */
      '<g fill="#a5674c"><rect x="0" y="70" width="80" height="80"/><rect x="250" y="76" width="150" height="74"/></g>' +
      '<g fill="#e9dccb"><rect x="10" y="84" width="14" height="18"/><rect x="40" y="84" width="14" height="18"/><rect x="270" y="90" width="14" height="18"/><rect x="300" y="90" width="14" height="18"/><rect x="330" y="90" width="14" height="18"/><rect x="360" y="90" width="14" height="18"/></g>' +
      cross(168, 150) +
      /* wall with the tags */
      '<rect x="0" y="146" width="400" height="76" fill="#6d4c44"/>' +
      '<path d="M0 160h400M0 174h400M0 188h400M0 202h400" stroke="#5a3d36" stroke-width="1"/>' +
      tag("N17", 30, 172, 20, "#7fd3f0", -3) +
      tag("ADELE", 120, 210, 44, GOLD, -4) +
      tag("HELLO", 300, 176, 16, ROSE, -6) +
      bus +
      '<rect x="0" y="222" width="400" height="38" fill="#2f3238"/><rect x="0" y="220" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* London street name plates: white, black letters, red district */
      '<rect x="356" y="40" width="5" height="182" fill="#2a2a2a"/>' +
      '<rect x="262" y="44" width="134" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="329" y="59" text-anchor="middle" ' + F + ' font-size="11" fill="#111">HIGH ROAD</text>' +
      '<text x="329" y="70" text-anchor="middle" ' + F + ' font-size="8" fill="#d41a1f">N17</text>' +
      '<rect x="276" y="78" width="120" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="336" y="94" text-anchor="middle" ' + F + ' font-size="11" fill="#111">BRUCE GROVE</text>',
      sky("adls5", "#9cc4e4", "#eee3cf"));
  }

  window.SCENES = { adlstation, adlalbert, adlwembley, adlhydepark, adlcorner };
})();
