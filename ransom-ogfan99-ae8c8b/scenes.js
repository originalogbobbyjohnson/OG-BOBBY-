/* Jersey City opening scenes for the Ransom game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.mh{transform-origin:200px 120px;animation:spin 14s linear infinite}.hh{transform-origin:200px 120px;animation:spin 120s linear infinite}' +
    '@keyframes glow{0%,100%{opacity:1}50%{opacity:.5}}' +
    '.glw{animation:glow 2.2s ease-in-out infinite}.glw2{animation-delay:1.1s}' +
    '@keyframes boat{0%{transform:translate(-80px,0)}100%{transform:translate(480px,0)}}' +
    '.boat{animation:boat 16s linear infinite}' +
    '@keyframes wave{0%,100%{transform:translate(0,0)}50%{transform:translate(-8px,1px)}}' +
    '.wv{animation:wave 3s ease-in-out infinite}' +
    '@keyframes bulb{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bl{animation:bulb 1s steps(2) infinite}.bl2{animation-delay:.5s}' +
    '@keyframes gull{0%{transform:translate(-30px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,6px)}}' +
    '.gl{animation:gull 10s linear infinite}.gl2{animation-delay:-5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* PATH route badge: a rounded bar in the route color (PATH uses colored bars, not MTA circles) */
  const pathBadge = (x, y, label, color, dark) =>
    '<rect x="' + x + '" y="' + (y - 9) + '" width="64" height="18" rx="9" fill="' + color + '"/><text x="' + (x + 32) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="' + (dark ? "#111" : "#fff") + '">' + label + '</text>';
  const gull = (cls, y) => '<g class="' + cls + '"><path d="M0 ' + y + 'q6-6 12 0q6-6 12 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';
  const GOLD = "#e9c46a", RED = "#d93a30", YEL = "#ff9900", ICE = "#9fd3e6";
  /* Lower Manhattan seen across the Hudson */
  const skyline = (base, c) => {
    let s = "";
    const b = [[10, 40], [34, 62], [56, 48], [80, 90], [104, 70], [128, 56], [150, 100], [176, 64], [200, 80], [226, 52], [250, 74], [276, 44], [300, 66], [326, 50], [352, 72], [376, 46]];
    b.forEach(([x, h]) => { s += '<rect x="' + x + '" y="' + (base - h) + '" width="22" height="' + h + '" fill="' + c + '"/>'; });
    /* One World Trade: tapering tower with a spire */
    s += '<path d="M150 ' + base + 'L156 ' + (base - 150) + 'h12L174 ' + base + 'z" fill="' + c + '"/><rect x="161" y="' + (base - 180) + '" width="2" height="32" fill="' + c + '"/>';
    return s;
  };

  /* 1. The PATH pulling into Journal Square, the hub under the Transportation Center */
  function train() {
    let tiles = "";
    for (let x = 0; x < 400; x += 25) tiles += '<rect x="' + x + '" y="22" width="24" height="96" fill="#d8d3c4"/>';
    let windows = "";
    for (let x = 22; x < 280; x += 46) windows += '<rect x="' + x + '" y="130" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b1d22"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#2b2e35"/>' + tiles +
      '<rect x="0" y="100" width="400" height="6" fill="' + RED + '"/>' +
      '<rect class="glw" x="50" y="8" width="90" height="6" rx="3" fill="#fff8d8"/><rect class="glw glw2" x="260" y="8" width="90" height="6" rx="3" fill="#fff8d8"/>' +
      /* black station sign with the routes that stop here */
      '<rect x="40" y="34" width="320" height="56" rx="4" fill="#111"/><rect x="40" y="34" width="320" height="4" fill="#fff"/>' +
      '<text x="56" y="62" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Journal Square</text>' +
      '<text x="56" y="80" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#bbb">PATH</text>' +
      pathBadge(220, 56, "NWK–WTC", RED) + pathBadge(220, 76, "JSQ–33", YEL, true) +
      /* the PATH car slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + RED + '"/><rect x="8" y="164" width="300" height="3" fill="#1d4e9e"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        '<rect x="252" y="122" width="48" height="12" rx="2" fill="#111"/><text x="276" y="131" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="' + YEL + '">33 ST</text>' +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3d42"/>' +
      tag("A-TEAM", 20, 238, 28, GOLD, -4) + tag("RAN", 304, 240, 32, RED, -8));
  }

  /* 2. The Colgate Clock on the Paulus Hook waterfront, Lower Manhattan across the Hudson */
  function clock() {
    let ticks = "";
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6, x1 = 200 + Math.sin(a) * 50, y1 = 120 - Math.cos(a) * 50, x2 = 200 + Math.sin(a) * 42, y2 = 120 - Math.cos(a) * 42;
      ticks += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="#111" stroke-width="' + (i % 3 ? 2 : 4) + '"/>';
    }
    /* octagon frame */
    let oct = "";
    for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; oct += (i ? "L" : "M") + (200 + Math.cos(a) * 66).toFixed(1) + " " + (120 + Math.sin(a) * 66).toFixed(1); }
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      skyline(196, "#7b8ba3") +
      '<rect x="0" y="196" width="400" height="64" fill="#2f5d7c"/>' +
      '<g class="wv"><path d="M0 210q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb3d1" stroke-width="2" fill="none"/></g>' +
      '<g class="boat"><path d="M0 222h54l-8 10H8z" fill="#f2efe6"/><rect x="12" y="212" width="26" height="10" fill="#e9e4d6"/><rect x="16" y="214" width="18" height="4" fill="#3a6a8a"/></g>' +
      /* steel truss legs holding the clock */
      '<path d="M150 200L176 172M250 200L224 172M162 200L188 176M238 200L212 176" stroke="#5c5f66" stroke-width="3"/>' +
      '<rect x="120" y="196" width="160" height="8" fill="#5c5f66"/>' +
      '<path d="' + oct + 'z" fill="#2b2b2b" stroke="#5c5f66" stroke-width="4"/>' +
      '<circle cx="200" cy="120" r="56" fill="#f7f5ee"/>' + ticks +
      '<line class="hh" x1="200" y1="120" x2="200" y2="88" stroke="' + RED + '" stroke-width="5" stroke-linecap="round"/>' +
      '<line class="mh" x1="200" y1="120" x2="200" y2="74" stroke="' + RED + '" stroke-width="3.5" stroke-linecap="round"/>' +
      '<circle cx="200" cy="120" r="5" fill="#111"/>' +
      gull("gl", 40) + gull("gl gl2", 60),
      sky("g2", "#f2b880", "#f6dcb0"));
  }

  /* 3. The Loew's Jersey on Journal Square: ornate terracotta facade, clock, St. George on top, chasing marquee bulbs */
  function loews() {
    let bulbs = "";
    for (let x = 102; x <= 298; x += 12) bulbs += '<circle class="bl' + ((x / 12) % 2 ? "" : " bl2") + '" cx="' + x + '" cy="166" r="2.6" fill="#ffe28a"/><circle class="bl' + ((x / 12) % 2 ? " bl2" : "") + '" cx="' + x + '" cy="196" r="2.6" fill="#ffe28a"/>';
    let orn = "";
    for (let x = 96; x < 304; x += 16) orn += '<path d="M' + x + ' 64q8-10 16 0" stroke="#e7b77a" stroke-width="2" fill="none"/>';
    let wins = "";
    for (let x = 118; x < 290; x += 44) wins += '<path d="M' + x + ' 150v-40q14-18 28 0v40z" fill="#3a2a4a" stroke="#e7b77a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="0" y="80" width="80" height="150" fill="#5a4a46"/><rect x="320" y="70" width="80" height="160" fill="#4d4442"/>' +
      /* terracotta facade */
      '<rect x="88" y="60" width="224" height="170" fill="#c97b4a"/>' +
      '<path d="M88 60L200 30L312 60z" fill="#b5683c"/>' + orn +
      /* St. George and the dragon silhouette on the crown */
      '<path d="M192 30l2-14 6-4 4 6-2 12z" fill="#7a3f22"/><circle cx="198" cy="10" r="3" fill="#7a3f22"/><path d="M204 22l12-10" stroke="#7a3f22" stroke-width="2"/>' +
      /* clock in the gable */
      '<circle cx="200" cy="48" r="10" fill="#f7efd8" stroke="#7a3f22" stroke-width="2"/><path class="mh" d="M200 48v-7" stroke="#222" stroke-width="1.5" style="transform-origin:200px 48px"/><path d="M200 48h5" stroke="#222" stroke-width="1.5"/>' +
      wins +
      /* marquee */
      '<rect x="96" y="160" width="208" height="42" fill="#1b1424" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="187" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + GOLD + '" letter-spacing="2">LOEW’S JERSEY</text>' +
      '<rect x="160" y="202" width="80" height="28" fill="#2a1f18"/><rect x="198" y="202" width="2" height="28" fill="#6a5040"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#2c2f36"/><rect x="0" y="230" width="400" height="3" fill="#8a8d95"/>',
      sky("g3", "#1d2140", "#5a3e5e"));
  }

  /* 4. Liberty State Park: the old Central Railroad terminal, red brick with a green-roofed clock tower; Lady Liberty out in the harbor */
  function terminal() {
    let arches = "";
    for (let x = 56; x < 320; x += 34) arches += '<path d="M' + x + ' 198v-22q12-12 24 0v22z" fill="#3a2a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* Statue of Liberty out on the water, verdigris green */
      '<rect x="330" y="120" width="26" height="16" fill="#8f8a7e"/><rect x="336" y="104" width="14" height="16" fill="#9a9488"/>' +
      '<path d="M338 104l2-26h6l2 26z" fill="#6fae9a"/><circle cx="343" cy="74" r="4" fill="#6fae9a"/><path d="M339 70l4-6 4 6" stroke="#6fae9a" stroke-width="1.5" fill="none"/>' +
      '<path d="M346 80l6-18" stroke="#6fae9a" stroke-width="2.5"/><circle class="glw" cx="352" cy="60" r="3" fill="#ffd36b"/>' +
      '<rect x="0" y="136" width="400" height="20" fill="#3d6f8e"/>' +
      '<g class="wv"><path d="M0 146q20-3 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#8fc3de" stroke-width="1.5" fill="none"/></g>' +
      /* terminal building */
      '<rect x="40" y="130" width="300" height="70" fill="#a8452f"/><rect x="40" y="126" width="300" height="6" fill="#7e3322"/>' + arches +
      /* clock tower with copper-green cap */
      '<rect x="176" y="70" width="40" height="62" fill="#b24e36"/><path d="M170 72l26-30 26 30z" fill="#5d9c84"/><rect x="194" y="30" width="4" height="12" fill="#5d9c84"/>' +
      '<circle cx="196" cy="94" r="10" fill="#f7efd8" stroke="#6a2a1a" stroke-width="2"/><path class="mh" d="M196 94v-7" stroke="#222" stroke-width="1.5" style="transform-origin:196px 94px"/><path d="M196 94h5" stroke="#222" stroke-width="1.5"/>' +
      '<text x="190" y="162" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#f2e2c8" letter-spacing="1">CENTRAL RAILROAD OF NEW JERSEY</text>' +
      /* lawn and promenade */
      '<rect x="0" y="200" width="400" height="60" fill="#5f9a46"/><rect x="0" y="228" width="400" height="10" fill="#cfc9bb"/>' +
      gull("gl", 40) + gull("gl gl2", 22),
      sky("g4", "#8fc3e8", "#e6f2f7"));
  }

  /* IC: shared iconic landmark in the corner backdrop (its own little animations, prefixed ic-) */
  const IC_CSS = '<style>' +
    '@keyframes icBl{0%,49%{opacity:1}50%,100%{opacity:.2}}.ic-bl{animation:icBl 1s steps(1) infinite}.ic-b2{animation-delay:-.5s}' +
    '@keyframes icSw{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ic-sw{animation:icSw 6s ease-in-out infinite}.ic-s2{animation-delay:-3s}' +
    '@keyframes icPl{0%,100%{opacity:.3}50%{opacity:1}}.ic-pl{animation:icPl 2.6s ease-in-out infinite}.ic-p2{animation-delay:-.65s}.ic-p3{animation-delay:-1.3s}.ic-p4{animation-delay:-1.95s}' +
    '@keyframes icDr{from{transform:translateX(-90px)}to{transform:translateX(320px)}}.ic-dr{animation:icDr 22s linear infinite}' +
    '@keyframes icFl{to{stroke-dashoffset:-24}}.ic-fl{animation:icFl .7s linear infinite}' +
    '@keyframes icMi{0%{transform:translateY(0);opacity:0}30%{opacity:.7}100%{transform:translateY(-24px);opacity:0}}.ic-mi{animation:icMi 3.2s ease-out infinite}.ic-m2{animation-delay:-1.1s}.ic-m3{animation-delay:-2.2s}' +
    '@keyframes icCar{from{transform:translateX(0)}to{transform:translateX(300px)}}.ic-car{animation:icCar 7s linear infinite}.ic-c2{animation-delay:-3.5s}' +
    '@keyframes icCarL{from{transform:translateX(0)}to{transform:translateX(-300px)}}.ic-carl{animation:icCarL 8.5s linear infinite}.ic-c3{animation-delay:-4s}' +
    '@keyframes icBird{from{transform:translate(0,0)}to{transform:translate(330px,-26px)}}.ic-bird{animation:icBird 9s linear infinite}.ic-bd2{animation-delay:-4.5s}' +
    '</style>';
  const icBg = () => { let b = "";
    for (let x = 310; x < 376; x += 7) b += '<circle class="ic-bl' + ((x / 7) % 2 ? " ic-b2" : "") + '" cx="' + x + '" cy="185" r="1.6" fill="#ffe7a8"/><circle class="ic-bl' + ((x / 7) % 2 ? "" : " ic-b2") + '" cx="' + x + '" cy="195" r="1.6" fill="#ffe7a8"/>';
    return IC_CSS +
      '<path d="M372 132L400 139V224H372z" fill="#9a5534"/>' +
      '<rect x="312" y="132" width="60" height="92" fill="#c97a4a"/><path d="M308 133L342 115L376 133z" fill="#b8683c"/>' +
      '<path d="M314 137q4-3 8 0t8 0t8 0t8 0t8 0t8 0t8 0" stroke="#f0c9a0" stroke-width="1.2" fill="none"/>' +
      '<circle cx="342" cy="126" r="5.5" fill="#f6efdc" stroke="#7a3a1a" stroke-width="1.2"/><path d="M342 126v-3.5M342 126l2.5 1.5" stroke="#3a2a1a" stroke-width="1"/>' +
      '<path d="M339.5 115l1-8h3l1 8z" fill="#5a3020"/><circle cx="342" cy="104.5" r="2.2" fill="#5a3020"/><path d="M343.5 108l6-6" stroke="#5a3020" stroke-width="1.4"/>' +
      '<path d="M318 172V152a6 6 0 0 1 12 0V172zM336 172V152a6 6 0 0 1 12 0V172zM354 172V152a6 6 0 0 1 12 0V172z" fill="#3a2a4a" stroke="#f0c9a0" stroke-width="1.2"/>' +
      '<path d="M380 150v20M390 152v20" stroke="#5e2f1c" stroke-width="5"/>' +
      '<rect x="306" y="180" width="70" height="20" fill="#1a1414" stroke="#c9a24a" stroke-width="1.2"/><path d="M376 180L394 185V204L376 200z" fill="#140f0f" stroke="#c9a24a" stroke-width="1.2"/>' + b +
      '<rect x="326" y="204" width="26" height="20" fill="#2a1a14"/>'; };

  /* 5. The corner: JFK Boulevard and Sip Avenue, right on Journal Square */
  function corner() {
    let brick = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 0 : -18; x < 250; x += 36) brick += '<rect x="' + Math.max(0, x) + '" y="' + y + '" width="' + Math.min(34, 250 - Math.max(0, x), x + 34) + '" height="10" fill="#5a3326"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      skyline(130, "#3a3f55") + icBg() +
      '<rect x="0" y="56" width="250" height="168" fill="#40241b"/>' + brick +
      tag("RANSOM", 22, 140, 44, GOLD, -7) + tag("TAKE OVER", 40, 190, 26, RED, -3) + tag("A-TEAM", 24, 86, 20, ICE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#2c2f36"/><rect x="0" y="224" width="400" height="4" fill="#8a8d95"/>' +
      '<rect x="292" y="40" width="5" height="184" fill="#1d2329"/>' +
      '<rect x="244" y="44" width="102" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="295" y="57" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">JFK Blvd</text>' +
      '<rect x="258" y="66" width="74" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="295" y="79" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Sip Av</text>' +
      /* street lamp */
      '<rect x="360" y="90" width="4" height="134" fill="#1d2329"/><path d="M362 92q14-6 20 4" stroke="#1d2329" stroke-width="4" fill="none"/><circle class="glw" cx="382" cy="100" r="5" fill="#fff4c2"/>' +
      gull("gl", 26),
      sky("g5", "#3b3a64", "#e88b6a"));
  }

  window.SCENES = { train, clock, loews, terminal, corner };
})();
