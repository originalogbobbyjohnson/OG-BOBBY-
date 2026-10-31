/* Harlem, Manhattan opening scenes for the Skizzy Mars game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bulb{animation:chase .8s infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes rise{0%{transform:translate(0,0)}50%{transform:translate(14px,-40px)}100%{transform:translate(0,-80px);opacity:0}}' +
    '.bal{animation:rise 7s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.7}}' +
    '.glow{animation:glow 3s ease-in-out infinite}' +
    '@keyframes twk{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.twk{animation:twk 1.4s infinite}.twk2{animation-delay:-.7s}' +
    '@keyframes walk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.walk{animation:walk 12s linear infinite}.walk2{animation-delay:-6s}' +
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
  const bullet = (x, y, letter, color) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const MARS = "#ff5a36", SUN = "#ffd166", SKY = "#7ec8e3";

  /* 1. 135 St on the B and C, underground under St Nicholas Av: white tile walls, the black sign, the silver train pulling in */
  function train() {
    let tiles = "";
    for (let y = 0; y < 118; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d6cc" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v118" stroke="#d9d6cc" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="20" rx="3" fill="#fff1c9" opacity=".85"/>';
    let cols = "";
    [60, 340].forEach(x => cols += '<rect x="' + x + '" y="0" width="12" height="122" fill="#2f5d8a"/>');
    return svg(
      '<rect width="400" height="260" fill="#16120e"/>' +
      '<rect x="0" y="0" width="400" height="118" fill="#f1eee4"/>' + tiles +
      '<rect x="0" y="30" width="400" height="10" fill="#8a3a2a"/>' + cols +
      '<rect class="flk" x="150" y="2" width="100" height="4" fill="#fffbe6"/>' +
      '<rect x="92" y="54" width="200" height="40" rx="4" fill="#111"/>' +
      '<text x="108" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="18" fill="#fff">135 St</text>' +
      bullet(240, 74, "B", "#ff6319") + bullet(268, 74, "C", "#0039a6") +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + windows +
        '<rect x="282" y="134" width="18" height="20" rx="3" fill="#fff1c9" opacity=".85"/><circle cx="300" cy="172" r="4" fill="#fff6c2"/>' +
        bullet(36, 166, "C", "#0039a6") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1d22"/><path d="M0 214h400M0 238h400" stroke="#262a31" stroke-width="2"/>' +
      tag("SKIZZY MARS", 26, 244, 30, MARS, -5) + tag("HARLEM", 268, 238, 24, SUN, -3));
  }

  /* 2. The Apollo on 125th St: the tall red vertical sign, the marquee with chasing bulbs, people walking by */
  function apollo() {
    let bulbs = "";
    for (let x = 108; x <= 292; x += 12) bulbs += '<circle class="bulb' + (x % 24 ? " bulb2" : "") + '" cx="' + x + '" cy="126" r="2.5" fill="#fff3b0"/><circle class="bulb' + (x % 24 ? "" : " bulb2") + '" cx="' + x + '" cy="168" r="2.5" fill="#fff3b0"/>';
    let vb = "";
    for (let y = 18; y <= 112; y += 10) vb += '<circle class="bulb' + (y % 20 ? " bulb2" : "") + '" cx="182" cy="' + y + '" r="2" fill="#fff3b0"/><circle class="bulb' + (y % 20 ? "" : " bulb2") + '" cx="218" cy="' + y + '" r="2" fill="#fff3b0"/>';
    const person = (cls, c) => '<g class="walk ' + cls + '"><circle cx="0" cy="206" r="5" fill="#2a1f1a"/><rect x="-5" y="211" width="10" height="20" rx="3" fill="' + c + '"/><rect x="-4" y="231" width="3" height="12" fill="#222"/><rect x="1" y="231" width="3" height="12" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ga)"/>' + stars(14) +
      '<rect x="40" y="40" width="320" height="160" fill="#b9a68a"/>' +
      (function () { let s = ""; for (let x = 60; x < 350; x += 36) s += '<rect x="' + x + '" y="56" width="18" height="24" fill="#3a2f4a"/>'; return s; })() +
      /* vertical sign */
      '<rect x="178" y="10" width="44" height="110" fill="#c8102e" stroke="#7a0a1c" stroke-width="2"/>' + vb +
      (function () { let s = ""; "APOLLO".split("").forEach((c, i) => s += '<text x="200" y="' + (30 + i * 15) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="#fff">' + c + '</text>'); return s; })() +
      /* marquee */
      '<rect x="100" y="120" width="200" height="54" fill="#c8102e"/>' + bulbs +
      '<rect x="114" y="132" width="172" height="30" fill="#fff8e8"/>' +
      '<text x="200" y="152" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="#111" letter-spacing="1">AMATEUR NIGHT</text>' +
      '<rect x="120" y="174" width="160" height="26" fill="#2a1a1a"/><rect x="130" y="178" width="36" height="22" fill="#ffd98a" opacity=".6"/><rect x="182" y="178" width="36" height="22" fill="#ffd98a" opacity=".6"/><rect x="234" y="178" width="36" height="22" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="0" y="200" width="400" height="44" fill="#5b5f66"/><rect x="0" y="244" width="400" height="16" fill="#1a1d22"/>' +
      person("", MARS) + person("walk2", SKY) +
      '<text x="200" y="256" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff" letter-spacing="2">W 125TH ST</text>',
      sky("ga", "#141030", "#3a2a5a"));
  }

  /* 3. City College's Shepard Hall up on Convent Av by 135th: dark gray schist Gothic walls trimmed in white terracotta, windows glowing */
  function ccny() {
    let wins = "";
    for (let x = 64; x < 340; x += 26) if (x < 170 || x > 228) wins += '<path d="M' + x + ' 170v-30a7 7 0 0 1 14 0v30z" fill="#ffd98a" class="flk" style="animation-delay:-' + (x / 80).toFixed(1) + 's"/>';
    const pin = x => '<rect x="' + x + '" y="62" width="10" height="60" fill="#4a4d55"/><path d="M' + (x - 2) + ' 62l7-18 7 18z" fill="#f1ece0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gq)"/>' + stars(16) +
      '<circle cx="292" cy="36" r="14" fill="' + MARS + '" class="glow"/><circle cx="292" cy="36" r="10" fill="' + MARS + '"/>' +
      /* main hall */
      '<rect x="50" y="120" width="300" height="72" fill="#4a4d55"/><rect x="50" y="118" width="300" height="6" fill="#f1ece0"/>' +
      pin(56) + pin(334) + pin(120) + pin(270) +
      /* center tower */
      '<rect x="166" y="54" width="68" height="138" fill="#4a4d55"/><rect x="166" y="54" width="68" height="6" fill="#f1ece0"/>' +
      '<path d="M166 54l6-14h8l2 14M218 54l2-14h8l6 14" fill="#f1ece0"/>' +
      '<path d="M182 120v-40a18 18 0 0 1 36 0v40z" fill="#2a2440" stroke="#f1ece0" stroke-width="3"/><path d="M200 66v54M182 96h36" stroke="#f1ece0" stroke-width="2"/>' +
      '<path d="M186 192v-36a14 14 0 0 1 28 0v36z" fill="#2a1a10" stroke="#f1ece0" stroke-width="3"/>' +
      wins +
      '<rect x="0" y="192" width="400" height="22" fill="#3f6a3a"/><rect x="0" y="214" width="400" height="46" fill="#2a2a34"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff" letter-spacing="2">CONVENT AV · W 138TH ST</text>',
      sky("gq", "#0e1230", "#3a3a6a"));
  }

  /* 4. The Red Balloon Project: a Harlem brownstone rooftop at dusk, wooden water towers, Mars glowing red, a red balloon floating up */
  function balloon() {
    const tower = (x, y) => '<rect x="' + (x + 4) + '" y="' + (y + 36) + '" width="3" height="16" fill="#3a2a20"/><rect x="' + (x + 27) + '" y="' + (y + 36) + '" width="3" height="16" fill="#3a2a20"/>' +
      '<rect x="' + x + '" y="' + y + '" width="34" height="38" rx="3" fill="#7a5236"/><path d="M' + x + ' ' + (y + 12) + 'h34M' + x + ' ' + (y + 26) + 'h34" stroke="#4a2e1c" stroke-width="2"/><path d="M' + (x - 2) + ' ' + y + 'l19-14 19 14z" fill="#4a2e1c"/>';
    let row = "";
    [[0, 130, 80, "#8a4a36"], [80, 118, 70, "#7a3e2e"], [150, 136, 90, "#94523a"], [240, 122, 76, "#7a3e2e"], [316, 132, 84, "#8a4a36"]].forEach(b => {
      row += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (260 - b[1]) + '" fill="' + b[3] + '"/><rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="6" fill="#3a1f18"/>';
      for (let x = b[0] + 10; x < b[0] + b[2] - 14; x += 22) for (let y = b[1] + 18; y < 240; y += 34) row += '<rect x="' + x + '" y="' + y + '" width="12" height="20" fill="' + ((x + y) % 3 ? "#ffd98a" : "#2a1f2a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' + stars(10) +
      '<circle cx="80" cy="56" r="30" fill="' + MARS + '" class="glow"/><circle cx="80" cy="56" r="22" fill="#e04a28"/><circle cx="72" cy="50" r="5" fill="#b8381c"/><circle cx="88" cy="64" r="4" fill="#b8381c"/>' +
      tower(110, 66) + tower(276, 72) + row +
      '<g class="bal"><path d="M300 150q-6 30 4 60" stroke="#ddd" stroke-width="1.5" fill="none"/><ellipse cx="300" cy="132" rx="16" ry="20" fill="#e3242b"/><path d="M296 152l4 4 4-4z" fill="#e3242b"/><ellipse cx="294" cy="124" rx="4" ry="6" fill="#ff8a8a"/></g>' +
      '<text x="200" y="28" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff" letter-spacing="3">THE RED BALLOON PROJECT</text>',
      sky("gb", "#2a2a6a", "#f08a5a"));
  }

  /* 5. W 132nd St and Frederick Douglass Blvd, the block he grew up on: a wall with his name tagged, the street signs */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#4a3a3e"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#56444a"/>'; return b; })() +
      tag("SKIZZY MARS", 30, 140, 30, MARS, -7) + tag("FREE SKIZZY", 44, 196, 24, SKY, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="248" y="88" width="108" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 132 St</text>' +
      '<rect x="248" y="110" width="108" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">Frederick Douglass Bl</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="#f2c200"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#c49a00"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
      sky("gc", "#140d1e", "#3a2a4a"));
  }

  window.SCENES = { train, apollo, ccny, balloon, corner };
})();
