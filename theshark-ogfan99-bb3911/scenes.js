/* Belmont / Arthur Avenue opening scenes for The Shark game. Each one is a small animated SVG, 400 x 260.
   Fordham Rd under the Grand Concourse, the Arthur Avenue Retail Market, Our Lady of Mount Carmel's bell tower,
   the limestone face of Yankee Stadium with the 4 on the el, and the corner of E 187th St and Arthur Ave. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-34px);opacity:0}}' +
    '.stm{animation:steam 2.6s ease-out infinite}.stm2{animation-delay:.9s}.stm3{animation-delay:1.7s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:50% 0;animation:sway 2.6s ease-in-out infinite}.flag2{animation-delay:-1.3s}' +
    '@keyframes ring{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:ring 1.6s ease-in-out infinite}' +
    '@keyframes beam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 100%;animation:beam 5s ease-in-out infinite}.beam2{animation-delay:-2.5s}' +
    '@keyframes elrun{from{transform:translateX(-260px)}to{transform:translateX(420px)}}' +
    '.el4{animation:elrun 6s linear infinite}' +
    '@keyframes circle{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}' +
    '.fin{animation:circle 4s ease-in-out infinite}' +
    '@keyframes glint{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.gl{animation:glint 1.8s infinite}.gl2{animation-delay:.9s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* the shark fin, drawn with its base at (x, y) */
  const finPath = (x, y, s) => 'M' + x + ' ' + y + 'q' + (6 * s) + ' -' + (30 * s) + ' ' + (30 * s) + ' -' + (38 * s) + 'q-' + (8 * s) + ' ' + (16 * s) + ' -' + (2 * s) + ' ' + (38 * s) + 'z';
  const WHITE = "#f4f1ea", RED = "#d62828", GREEN = "#2e9e4f", STEEL = "#9fb3c8";

  /* 1. The D pulling into Fordham Rd, under the Grand Concourse: tiled walls, I-beam columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 116; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#ece6d6"/>';
    let cols = "";
    for (let x = 30; x < 400; x += 85) cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="190" fill="#3e5a4a"/><rect x="' + (x - 9) + '" y="0" width="18" height="4" fill="#2c4236"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="132" width="30" height="20" rx="3" fill="#ffe9b0" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc6b1"/>' + tiles +
      /* the trim band and FORDHAM mosaic name tablet */
      '<rect x="0" y="40" width="400" height="10" fill="#6b2a4a"/><rect x="0" y="50" width="400" height="3" fill="#d8b860"/>' +
      '<rect x="0" y="116" width="400" height="74" fill="#141414"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="60" rx="8" fill="#b9bfc8" stroke="#5b6270" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="5" fill="#ff6319"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' +
        bullet(294, 142, "D", "#ff6319") +
      '</g>' + cols +
      '<rect x="68" y="62" width="264" height="34" rx="4" fill="#111"/>' +
      '<rect x="68" y="62" width="264" height="4" fill="#fff"/>' +
      '<text x="82" y="87" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Fordham Rd</text>' +
      bullet(284, 80, "B", "#ff6319") + bullet(310, 80, "D", "#ff6319") +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#2a2a2a"/>' +
      '<path fill="' + STEEL + '" stroke="#000" stroke-width="2" d="' + finPath(220, 246, 0.9) + '"/>' +
      tag("SHARK BX", 26, 240, 32, WHITE, -4) + tag("BELMONT", 270, 242, 24, RED, -6),
      "");
  }

  /* 2. Arthur Avenue: the Retail Market's brick front, red-white-green banners over the street, espresso steaming */
  function market() {
    let brick = "";
    for (let y = 40; y < 196; y += 12) for (let x = (y / 12) % 2 ? -18 : 0; x < 400; x += 36) brick += '<rect x="' + x + '" y="' + y + '" width="34" height="10" fill="#8a3b26"/>';
    let flags = "", lights = "";
    const fc = [GREEN, WHITE, RED];
    for (let i = 0; i < 13; i++) {
      const x = 8 + i * 30;
      flags += '<path class="flag' + (i % 2 ? " flag2" : "") + '" d="M' + x + ' ' + (14 + Math.abs(6 - i) * 0) + 'h16l-8 16z" fill="' + fc[i % 3] + '" stroke="#000" stroke-width=".6"/>';
      lights += '<circle class="flk' + (i % 2 ? " flk2" : "") + '" cx="' + (x + 23) + '" cy="11" r="2.2" fill="#ffe7a8"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="0" y="40" width="400" height="160" fill="#6d2c1c"/>' + brick +
      '<path d="M0 12q200 14 400 0" stroke="#222" stroke-width="1.5" fill="none"/>' + flags + lights +
      /* the market sign */
      '<rect x="40" y="52" width="320" height="36" rx="3" fill="#123d2a" stroke="#d8b860" stroke-width="2"/>' +
      '<text x="200" y="70" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="2" textLength="290" lengthAdjust="spacingAndGlyphs" fill="' + WHITE + '">ARTHUR AVENUE RETAIL MARKET</text>' +
      '<text x="200" y="83" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="#d8b860">BELMONT · THE BRONX · SINCE 1940</text>' +
      /* doors + windows lit warm, green awnings */
      '<rect x="40" y="108" width="90" height="70" fill="#f2c879" opacity=".85"/><rect x="155" y="104" width="90" height="94" fill="#f7d896" opacity=".9"/><rect x="270" y="108" width="90" height="70" fill="#f2c879" opacity=".85"/>' +
      '<rect x="198" y="104" width="4" height="94" fill="#3b2418"/>' +
      [40, 155, 270].map(x => '<path d="M' + (x - 6) + ' 96h102l-8 14h-86z" fill="' + GREEN + '"/><path d="M' + (x - 6) + ' 96h102" stroke="' + WHITE + '" stroke-width="2"/>').join("") +
      /* hanging salami + cheese in the windows */
      '<path d="M60 112v10M74 112v14M88 112v10" stroke="#3b2418" stroke-width="1"/><rect x="56" y="122" width="8" height="22" rx="4" fill="#8a2a1f"/><rect x="70" y="126" width="8" height="24" rx="4" fill="#9c3a22"/><rect x="84" y="122" width="8" height="20" rx="4" fill="#8a2a1f"/>' +
      '<circle cx="300" cy="150" r="14" fill="#f2d16b" stroke="#b08a2a" stroke-width="2"/><circle cx="330" cy="156" r="10" fill="#f2d16b" stroke="#b08a2a" stroke-width="2"/>' +
      /* sidewalk, café table, espresso */
      '<rect x="0" y="198" width="400" height="62" fill="#3a3a3f"/><rect x="0" y="198" width="400" height="4" fill="#5a5a60"/>' +
      '<ellipse cx="200" cy="226" rx="46" ry="8" fill="#1a1a1e"/><rect x="196" y="226" width="8" height="30" fill="#1a1a1e"/>' +
      '<path d="M188 208h24v8q0 10-12 10t-12-10z" fill="' + WHITE + '"/><path d="M212 211q7 0 7 4t-7 4" fill="none" stroke="' + WHITE + '" stroke-width="3"/><ellipse cx="200" cy="225" rx="18" ry="3" fill="#cfd4dc"/>' +
      '<path class="stm" d="M194 204q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="stm stm2" d="M201 204q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="stm stm3" d="M208 204q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>',
      sky("g2", "#0b1a2e", "#24405e"));
  }

  /* 3. Our Lady of Mount Carmel on E 187th St: buff-brick church and campanile, the bell ringing under the moon */
  function church() {
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(26) +
      '<circle cx="62" cy="48" r="22" fill="#f4f1ea"/><circle cx="72" cy="42" r="22" fill="#0b1a2e" opacity=".22"/>' +
      /* the bell tower */
      '<path d="M266 222V58h56v164z" fill="#d6bf8f"/>' +
      '<path d="M260 58l34-30 34 30z" fill="#8e5a3a"/><rect x="292" y="12" width="4" height="18" fill="#e8d6a8"/><rect x="286" y="17" width="16" height="4" fill="#e8d6a8"/>' +
      '<path d="M276 110v-28a18 18 0 0 1 36 0v28z" fill="#1a1410"/>' +
      '<g class="bell"><rect x="292" y="74" width="4" height="6" fill="#7a5512"/><path d="M282 100q0-20 12-20t12 20l4 4h-32z" fill="#d8a43a" stroke="#7a5512" stroke-width="1.5"/><circle cx="294" cy="106" r="3" fill="#7a5512"/></g>' +
      '<path d="M270 130h48M270 170h48" stroke="#b89f73" stroke-width="3"/>' +
      '<rect x="282" y="140" width="10" height="22" rx="5" fill="#2a3a5a"/><rect x="296" y="140" width="10" height="22" rx="5" fill="#2a3a5a"/>' +
      /* the church front */
      '<path d="M40 222V110l110-50 110 50v112z" fill="#e2cc9c"/>' +
      '<path d="M40 110l110-50 110 50" fill="none" stroke="#b89f73" stroke-width="4"/>' +
      '<rect x="142" y="54" width="16" height="4" fill="#e8d6a8"/><rect x="148" y="40" width="4" height="22" fill="#e8d6a8"/>' +
      /* rose window */
      '<circle cx="150" cy="118" r="20" fill="#1f3c78" stroke="#b89f73" stroke-width="4"/>' +
      [0, 45, 90, 135].map(a => '<path d="M130 118h40" stroke="#d8a43a" stroke-width="2" transform="rotate(' + a + ' 150 118)"/>').join("") +
      '<circle class="gl" cx="150" cy="118" r="6" fill="' + RED + '"/>' +
      /* arched doors and side windows */
      '<path d="M128 222v-46a22 22 0 0 1 44 0v46z" fill="#5a3420" stroke="#b89f73" stroke-width="3"/><path d="M150 166v56" stroke="#3a2010" stroke-width="2"/>' +
      '<path d="M66 196v-36a10 10 0 0 1 20 0v36z" fill="#f2c879" class="gl gl2"/><path d="M214 196v-36a10 10 0 0 1 20 0v36z" fill="#f2c879" class="gl gl2"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#26262b"/><rect x="0" y="222" width="400" height="4" fill="#4a4a50"/>' +
      '<rect x="76" y="14" width="168" height="26" rx="4" fill="#0e1a2b" stroke="#d8a43a" stroke-width="1.5"/>' +
      '<text x="160" y="32" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="1" textLength="150" lengthAdjust="spacingAndGlyphs" fill="' + WHITE + '">OUR LADY OF MOUNT CARMEL</text>',
      sky("g3", "#050c18", "#1e3554"));
  }

  /* 4. Yankee Stadium: the limestone facade, gold letters, the white frieze, the 4 rolling by on the el */
  function stadium() {
    let arches = "";
    for (let i = 0; i < 9; i++) { const x = 24 + i * 40; arches += '<path d="M' + x + ' 196v-64a14 14 0 0 1 28 0v64z" fill="#1d2633"/><path d="M' + (x + 4) + ' 196v-60a10 10 0 0 1 20 0v60z" fill="#2c3a4f" opacity=".7"/>'; }
    let frieze = "";
    for (let x = 14; x < 386; x += 14) frieze += '<path d="M' + x + ' 76l7 12 7-12" fill="none" stroke="#fff" stroke-width="2"/>';
    let el = "", wins = "";
    for (let x = 0; x <= 400; x += 50) el += '<rect x="' + (x - 3) + '" y="214" width="6" height="46" fill="#2e3b2e"/>';
    for (let x = 10; x < 230; x += 40) wins += '<rect x="' + x + '" y="196" width="26" height="10" rx="2" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(16) +
      /* light towers' beams */
      '<g opacity=".18"><path class="beam" d="M80 110l-30-110h60z" fill="#fff6d0"/><path class="beam beam2" d="M320 110l-30-110h60z" fill="#fff6d0"/></g>' +
      /* limestone face */
      '<rect x="10" y="74" width="380" height="140" fill="#e6dcc6"/><rect x="10" y="74" width="380" height="140" fill="none" stroke="#c9bb9c" stroke-width="2"/>' +
      '<rect x="10" y="64" width="380" height="12" fill="#f2ead8"/>' + frieze +
      '<rect x="80" y="96" width="240" height="22" fill="#e6dcc6"/>' +
      '<text x="200" y="114" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="6" textLength="230" lengthAdjust="spacing" fill="#c9a24a" stroke="#7a5512" stroke-width=".6">YANKEE STADIUM</text>' +
      arches +
      /* the 4 train on the River Ave el */
      '<rect x="0" y="214" width="400" height="46" fill="#191c22"/>' +
      '<rect x="0" y="206" width="400" height="10" fill="#2e3b2e"/>' + el +
      '<g class="el4"><rect x="0" y="186" width="240" height="22" rx="4" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' + wins + bullet(226, 197, "4", "#00933c") + '</g>' +
      '<rect x="0" y="246" width="400" height="14" fill="#191c22"/>',
      sky("g4", "#0a1426", "#2a3f66"));
  }

  /* 5. E 187th St and Arthur Ave: street signs, streetlight, the tag wall, a fin circling in the puddle */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      /* tenements behind */
      '<rect x="0" y="40" width="120" height="180" fill="#2a1e1a"/><rect x="260" y="56" width="140" height="164" fill="#251b18"/>' +
      [[14, 56], [48, 56], [82, 56], [14, 92], [82, 92], [274, 72], [310, 72], [346, 72], [310, 108]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="18" height="22" fill="#f2c879" opacity=".75"/>').join("") +
      /* wall with the tags */
      '<rect x="20" y="96" width="236" height="124" fill="#3a3f47"/>' +
      '<path fill="' + STEEL + '" stroke="#000" stroke-width="2.5" d="' + finPath(196, 212, 1.0) + '"/>' +
      tag("THE SHARK", 30, 170, 34, WHITE, -7) + tag("BELMONT", 44, 210, 26, RED, -3) +
      '<rect x="20" y="96" width="236" height="6" fill="' + GREEN + '"/><rect x="20" y="102" width="236" height="6" fill="' + WHITE + '"/><rect x="20" y="108" width="236" height="6" fill="' + RED + '"/>' +
      /* streetlight + signs */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 187 St</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Arthur Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/>' +
      /* the puddle and the fin */
      '<ellipse cx="190" cy="242" rx="70" ry="9" fill="#24405e" opacity=".9"/>' +
      '<clipPath id="pd"><rect x="110" y="200" width="160" height="42"/></clipPath>' +
      '<g clip-path="url(#pd)"><g class="fin"><path fill="' + STEEL + '" stroke="#0e1a2b" stroke-width="1.5" d="' + finPath(130, 242, 0.55) + '"/>' +
        '<path d="M124 242q14-4 28 0" stroke="#dff6ff" stroke-width="1.5" fill="none"/></g></g>',
      sky("g5", "#0b1426", "#22344f"));
  }

  window.SCENES = { train, market, church, stadium, corner };
})();
