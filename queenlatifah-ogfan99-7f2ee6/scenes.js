/* Newark, New Jersey opening scenes for the Queen Latifah game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(40px,240px) rotate(300deg);opacity:.6}}' +
    '.pet{transform-box:fill-box;animation:fall 6s linear infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.6s ease-in-out infinite}.bell2{animation-delay:-.8s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3.4s ease-in-out infinite}.beam2{animation-delay:-1.7s}' +
    '@keyframes twk{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.twk{animation:twk 1.4s infinite}.twk2{animation-delay:-.7s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-80px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f4c430", GREEN = "#1f9e5a", RED = "#d7263d";

  /* 1. Newark Penn Station: the Art Deco limestone hall with its bronze lanterns, the silver PATH train to the World Trade Center rolling in */
  function train() {
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="20" rx="3" fill="#fff1c9" opacity=".85"/>';
    let lamps = "";
    [90, 200, 310].forEach(x => lamps += '<path d="M' + x + ' 0v18" stroke="#6b4a1a" stroke-width="2"/><path class="flk" d="M' + (x - 9) + ' 18h18l-3 20h-12z" fill="#ffd98a" stroke="#6b4a1a" stroke-width="2"/>');
    let fluting = "";
    for (let x = 10; x < 400; x += 30) fluting += '<rect x="' + x + '" y="40" width="4" height="74" fill="#cdbf9e"/>';
    return svg(
      '<rect width="400" height="260" fill="#16120e"/>' +
      '<rect x="0" y="0" width="400" height="118" fill="#e6dac0"/>' + fluting +
      '<rect x="0" y="0" width="400" height="10" fill="#a8925f"/><rect x="0" y="34" width="400" height="6" fill="#b89a5a"/>' + lamps +
      /* station sign */
      '<rect x="38" y="56" width="214" height="40" rx="4" fill="#111"/>' +
      '<text x="52" y="82" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Newark Penn Station</text>' +
      badge(270, 76, 46, "PATH", "#d93a30") +
      '<text x="340" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#3a2a10">NWK–WTC</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="6" fill="#d93a30"/>' + windows +
        '<rect x="282" y="134" width="18" height="20" rx="3" fill="#fff1c9" opacity=".85"/><circle cx="300" cy="172" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1d22"/><path d="M0 214h400M0 238h400" stroke="#262a31" stroke-width="2"/>' +
      tag("LATIFAH", 34, 244, 32, GOLD, -5) + tag("FLAVOR UNIT", 214, 238, 22, GREEN, -3));
  }

  /* 2. Branch Brook Park in April: the biggest cherry blossom collection in the country, pink trees over the lake, petals falling */
  function blossoms() {
    const tree = (x, y, r) => '<path d="M' + x + ' ' + (y + r) + 'v40" stroke="#4a2e24" stroke-width="6"/><path d="M' + x + ' ' + (y + r + 10) + 'l-16-18M' + x + ' ' + (y + r + 14) + 'l18-20" stroke="#4a2e24" stroke-width="3"/>' +
      '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#f6b6cc"/><circle cx="' + (x - r * .6) + '" cy="' + (y + 8) + '" r="' + r * .7 + '" fill="#f9c9da"/><circle cx="' + (x + r * .6) + '" cy="' + (y + 6) + '" r="' + r * .7 + '" fill="#f2a3be"/>';
    let petals = "";
    for (let i = 0; i < 18; i++) petals += '<ellipse class="pet" style="animation-delay:-' + (i * 0.37).toFixed(2) + 's" cx="' + ((i * 41) % 380) + '" cy="' + ((i * 17) % 30) + '" rx="3" ry="2" fill="#ffd6e4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5c9a4a"/>' +
      '<path d="M60 200q140-30 300 0q-20 30-150 30q-130 0-150-30z" fill="#6aa8d0"/><path d="M110 206q60-8 120 0" stroke="#bfe3f5" stroke-width="2" opacity=".7"/>' +
      tree(40, 104, 36) + tree(128, 92, 40) + tree(272, 94, 40) + tree(362, 106, 34) +
      '<path d="M0 248q200-26 400 0" stroke="#d8cfb8" stroke-width="10" fill="none"/>' +
      petals +
      '<text x="200" y="40" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#7a2a4a" letter-spacing="3">BRANCH BROOK PARK</text>',
      sky("gb", "#9fd3f0", "#fde3ec"));
  }

  /* 3. The Cathedral Basilica of the Sacred Heart: pale granite French Gothic front, rose window, twin towers, bells swinging */
  function cathedral() {
    const towerFn = x => '<rect x="' + x + '" y="40" width="70" height="170" fill="#d9d4c7"/><rect x="' + x + '" y="40" width="70" height="6" fill="#b9b2a2"/>' +
      '<path d="M' + (x + 14) + ' 120v-40a21 21 0 0 1 42 0v40z" fill="#3a3550"/>' +
      '<g class="bell' + (x > 200 ? " bell2" : "") + '"><path d="M' + (x + 27) + ' 90q8-10 16 0l3 18h-22z" fill="#c9a24a"/></g>' +
      '<path d="M' + (x + 20) + ' 190v-40a15 15 0 0 1 30 0v40z" fill="#3a3550"/>' +
      '<path d="M' + x + ' 40l4-10h8l-4 10M' + (x + 58) + ' 40l4-10h8l-4 10" fill="#b9b2a2"/>';
    let rose = "";
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; rose += '<path d="M200 118L' + (200 + 26 * Math.cos(a)).toFixed(1) + ' ' + (118 + 26 * Math.sin(a)).toFixed(1) + '" stroke="#d9d4c7" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#gt)"/>' + stars(14) +
      towerFn(60) + towerFn(270) +
      '<rect x="130" y="70" width="140" height="140" fill="#cfc9ba"/><path d="M130 70l70-40 70 40z" fill="#cfc9ba" stroke="#b9b2a2" stroke-width="2"/>' +
      '<circle cx="200" cy="118" r="30" fill="#2a2a6a" stroke="#b9b2a2" stroke-width="4"/>' +
      '<circle class="twk" cx="200" cy="118" r="26" fill="' + RED + '" opacity=".5"/><circle class="twk twk2" cx="200" cy="118" r="16" fill="#3a7ad8" opacity=".6"/>' + rose +
      '<circle cx="200" cy="118" r="6" fill="' + GOLD + '"/>' +
      '<path d="M166 210v-36a34 34 0 0 1 68 0v36z" fill="#3a2a20" stroke="#b9b2a2" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2a30"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#cfc9ba" letter-spacing="2">RIDGE ST · BRANCH BROOK</text>',
      sky("gt", "#1a1840", "#6a5a8a"));
  }

  /* 4. Her star on the Walk of Fame: a pink terrazzo star with a gold rim, the spotlights sweeping, a gold crown above it */
  function star() {
    const pts = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 26 : 62; pts.push((200 + r * Math.cos(a)).toFixed(1) + "," + (160 + r * Math.sin(a) * .62).toFixed(1)); }
    let tiles = "";
    for (let x = 0; x < 400; x += 40) tiles += '<path d="M' + x + ' 110v150" stroke="#3a3a40" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#14101e"/>' +
      '<g class="beam"><path d="M70 0l-50 200h100z" fill="' + GOLD + '" opacity=".16"/></g><g class="beam beam2"><path d="M330 0l-50 200h100z" fill="#f6b6cc" opacity=".16"/></g>' +
      '<rect x="0" y="110" width="400" height="150" fill="#2c2c34"/>' + tiles +
      '<rect x="110" y="110" width="180" height="150" fill="#4a4a54"/>' +
      '<polygon points="' + pts.join(" ") + '" fill="#e88aa8" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<circle cx="200" cy="164" r="11" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/><circle cx="200" cy="164" r="4" fill="' + GOLD + '"/>' +
      '<rect x="130" y="206" width="140" height="22" rx="3" fill="#1a1520" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="222" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="13" fill="' + GOLD + '" letter-spacing="1.5">QUEEN LATIFAH</text>' +
      /* the crown, floating */
      '<g class="twk" style="animation-duration:3s"><path d="M168 82l6-34 14 18 12-26 12 26 14-18 6 34z" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/>' +
      '<rect x="166" y="80" width="68" height="10" fill="' + GREEN + '"/><rect x="172" y="82" width="10" height="6" fill="' + RED + '"/><rect x="196" y="82" width="10" height="6" fill="' + RED + '"/><rect x="220" y="82" width="10" height="6" fill="' + RED + '"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#bbb" letter-spacing="2">ALL HAIL THE QUEEN</text>');
  }

  /* 5. Springfield Av and S 17th St, Newark's South Ward by the Irvington line: a wall with her name tagged, the street signs */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#4a3a3e"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#54424a"/>'; return b; })() +
      tag("QUEEN LATIFAH", 28, 140, 26, GOLD, -7) + tag("U.N.I.T.Y.", 40, 196, 24, GREEN, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">Springfield Av</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">S 17th St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="' + RED + '"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#8a1a2a"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
      sky("gc", "#140d1e", "#3a2a4a"));
  }

  window.SCENES = { train, blossoms, cathedral, star, corner };
})();
