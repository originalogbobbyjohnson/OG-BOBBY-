/* Harlem opening scenes for the Kool Moe Dee game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes glow{0%,100%{opacity:.3}50%{opacity:1}}' +
    '.bulb{animation:glow 1s infinite}.bulb2{animation-delay:-.5s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3s ease-in-out infinite}.beam2{animation-delay:-1.5s}' +
    '@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.jmp{animation:jump .6s ease-in-out infinite}.jmp2{animation-delay:-.3s}' +
    '@keyframes ball{0%{transform:translate(0,0)}25%{transform:translate(20px,-40px)}50%{transform:translate(40px,0)}75%{transform:translate(20px,-40px)}100%{transform:translate(0,0)}}' +
    '.ball{animation:ball 2s ease-in-out infinite}' +
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
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", RED = "#e4572e", CYAN = "#3ec1d3";

  /* 1. The 2 pulling into 116 St on the Lenox Av line, underground: white tile, mosaic band, the exit to 116 St (Harlem World was right upstairs) */
  function train() {
    let tiles = "";
    for (let y = 24; y < 116; y += 7) tiles += '<path d="M0 ' + y + 'h400" stroke="#d7d2c4" stroke-width=".7"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 24v92" stroke="#d7d2c4" stroke-width=".5"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="28" width="8" height="6" fill="#2e6a4a"/><rect x="' + (x + 8) + '" y="28" width="8" height="6" fill="#b8892e"/>';
    let cols = "";
    [22, 250, 382].forEach(x => cols += '<rect x="' + (x - 6) + '" y="16" width="12" height="166" fill="#26303a"/><rect x="' + (x - 9) + '" y="16" width="18" height="5" fill="#26303a"/>');
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#101318"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#0a0c10"/>' +
      '<rect class="flk" x="50" y="9" width="100" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="250" y="9" width="100" height="4" rx="2" fill="#fff6d8"/>' +
      '<rect x="0" y="16" width="400" height="102" fill="#efeadc"/>' + tiles + band +
      '<rect x="0" y="16" width="400" height="8" fill="#3b4652"/>' +
      /* station sign */
      '<rect x="40" y="46" width="190" height="38" rx="4" fill="#111"/><rect x="40" y="46" width="190" height="4" fill="#fff"/>' +
      '<text x="54" y="74" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="18" fill="#fff">116 St</text>' +
      bullet(176, 68, "2", "#ee352e") + bullet(202, 68, "3", "#ee352e") +
      '<rect x="262" y="52" width="104" height="24" rx="3" fill="#111"/>' +
      '<text x="314" y="68" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9.5" fill="#fff">Exit  Lenox Av →</text>' +
      cols +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '<rect x="282" y="128" width="18" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(266, 140, "2", "#ee352e") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1d22"/>' +
      '<path d="M0 214h400M0 238h400" stroke="#262a31" stroke-width="2"/>' +
      tag("MOE DEE", 36, 242, 32, GOLD, -5) + tag("TREACHEROUS 3", 200, 238, 22, RED, -3));
  }

  /* 2. The Apollo Theater on 125th St: the tall red vertical sign with chasing bulbs, the marquee, the cream facade */
  function apollo() {
    let bulbs = "";
    for (let y = 30; y < 160; y += 10) bulbs += '<circle class="bulb' + ((y / 10) % 2 ? " bulb2" : "") + '" cx="180" cy="' + y + '" r="2" fill="#ffe27a"/><circle class="bulb' + ((y / 10) % 2 ? "" : " bulb2") + '" cx="220" cy="' + y + '" r="2" fill="#ffe27a"/>';
    let mbulbs = "";
    for (let x = 96; x < 306; x += 10) mbulbs += '<circle class="bulb' + ((x / 10) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="164" r="2" fill="#ffe27a"/>';
    const letters = "APOLLO".split("").map((c, i) => '<text x="200" y="' + (52 + i * 20) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="19" fill="#fff">' + c + '</text>').join("");
    let wins = "";
    for (let x = 40; x < 380; x += 34) if (x < 150 || x > 250) for (let y = 60; y < 150; y += 30) wins += '<rect x="' + x + '" y="' + y + '" width="18" height="20" fill="' + ((x + y) % 3 ? "#3a3040" : "#ffd88a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ga)"/>' + stars(12) +
      '<rect x="24" y="44" width="352" height="166" fill="#e8dcc4"/><rect x="24" y="44" width="352" height="6" fill="#c9b893"/>' + wins +
      /* vertical sign */
      '<rect x="172" y="18" width="56" height="148" rx="4" fill="#c8102e" stroke="#7a0a1a" stroke-width="2"/>' + letters + bulbs +
      /* marquee */
      '<path d="M86 166h228l-14 30H100z" fill="#c8102e" stroke="#7a0a1a" stroke-width="2"/>' +
      '<rect x="104" y="172" width="192" height="18" fill="#fff8e0"/>' +
      '<text x="200" y="185.5" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#1a1a1a" letter-spacing="2">AMATEUR NIGHT</text>' + mbulbs +
      '<rect x="150" y="196" width="100" height="14" fill="#2a1a1a"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#1c1f24"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="218" width="54" height="16" rx="4" fill="' + CYAN + '"/><rect x="10" y="210" width="30" height="10" rx="3" fill="#2a7d88"/><circle cx="12" cy="236" r="5" fill="#111"/><circle cx="42" cy="236" r="5" fill="#111"/></g>' +
      '<text x="200" y="256" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#cfc6b0" letter-spacing="2">W 125 ST</text>',
      sky("ga", "#0e1230", "#5a2a4a"));
  }

  /* 3. Harlem World, 116th & Lenox, Christmas 1981: the battle stage, two mics, spotlights sweeping, the crowd jumping */
  function battle() {
    let crowd = "";
    for (let i = 0; i < 22; i++) {
      const x = 8 + i * 18, h = 30 + (i * 13) % 14;
      crowd += '<g class="jmp' + (i % 2 ? " jmp2" : "") + '"><circle cx="' + x + '" cy="' + (238 - h) + '" r="7" fill="#2a2440"/><rect x="' + (x - 8) + '" y="' + (244 - h) + '" width="16" height="' + (h + 20) + '" rx="6" fill="#2a2440"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="#120a1c"/>' +
      '<g class="beam"><path d="M110 0l-40 170h80z" fill="' + GOLD + '" opacity=".18"/></g><g class="beam beam2"><path d="M290 0l-40 170h80z" fill="' + CYAN + '" opacity=".18"/></g>' +
      /* banner */
      '<rect x="90" y="22" width="220" height="40" rx="4" fill="' + RED + '" stroke="#000" stroke-width="2"/>' +
      '<text x="200" y="50" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#fff" letter-spacing="2">HARLEM WORLD</text>' +
      '<text x="200" y="78" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + GOLD + '" letter-spacing="3">THE BATTLE · CHRISTMAS 1981</text>' +
      /* turntables */
      '<rect x="150" y="128" width="100" height="22" rx="3" fill="#2b2b33"/><circle cx="174" cy="139" r="8" fill="#111" stroke="#555"/><circle cx="226" cy="139" r="8" fill="#111" stroke="#555"/>' +
      /* stage + two mic stands */
      '<rect x="20" y="150" width="360" height="22" fill="#3a2418"/><rect x="20" y="150" width="360" height="4" fill="' + GOLD + '"/>' +
      '<path d="M100 150v-46M300 150v-46" stroke="#c8ccd4" stroke-width="3"/><path d="M92 150h16M292 150h16" stroke="#c8ccd4" stroke-width="3"/>' +
      '<rect x="96" y="94" width="8" height="12" rx="4" fill="#555"/><rect x="296" y="94" width="8" height="12" rx="4" fill="#555"/>' +
      crowd,
      "");
  }

  /* 4. Rucker Park on 155th St and 8th Av: the blacktop, the chain-link fence, the Polo Grounds towers behind, a ball bouncing */
  function rucker() {
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 100l10 60M' + (x + 10) + ' 100l-10 60" stroke="#6c7480" stroke-width=".8"/>';
    const tower = (x, h) => { let s = '<rect x="' + x + '" y="' + (120 - h) + '" width="44" height="' + h + '" fill="#8a4a3a"/>'; for (let y = 126 - h; y < 116; y += 10) for (let wx = x + 5; wx < x + 40; wx += 9) s += '<rect x="' + wx + '" y="' + y + '" width="5" height="5" fill="' + ((wx + y) % 4 ? "#3a2420" : "#ffd88a") + '"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#gr)"/>' +
      tower(30, 92) + tower(110, 100) + tower(250, 96) + tower(330, 88) +
      '<rect x="0" y="100" width="400" height="60" fill="none"/>' + fence + '<path d="M0 100h400" stroke="#6c7480" stroke-width="3"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3f6b8a"/>' +
      '<path d="M200 160v100M120 260a80 50 0 0 1 160 0" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      /* hoop */
      '<rect x="40" y="110" width="5" height="90" fill="#222"/><rect x="26" y="96" width="44" height="30" fill="#fff" stroke="#222" stroke-width="2"/><rect x="40" y="106" width="16" height="12" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="60" cy="128" rx="10" ry="3" fill="none" stroke="' + RED + '" stroke-width="2.5"/>' +
      '<g class="ball"><circle cx="190" cy="196" r="9" fill="#e07a2a" stroke="#6b3410" stroke-width="1.5"/><path d="M181 196h18M190 187v18" stroke="#6b3410" stroke-width="1"/></g>' +
      '<rect x="260" y="168" width="120" height="22" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="320" y="183" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Holcombe Rucker Park</text>' +
      tag("HARLEM", 240, 236, 26, GOLD, -4),
      sky("gr", "#2c5d8a", "#f2a65a"));
  }

  /* 5. W 116 St and Lenox Av (Malcolm X Blvd): a brick wall with his name tagged, the street signs, the streetlight */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#5a3a30"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#6a463a"/>'; return b; })() +
      tag("KOOL MOE DEE", 30, 140, 27, GOLD, -7) + tag("KNOWLEDGE IS KING", 30, 196, 19, CYAN, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="86" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="99" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 116 St</text>' +
      '<rect x="256" y="108" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="121" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">Lenox Av</text>' +
      '<rect x="256" y="130" width="92" height="14" rx="2" fill="#7a4a1a" stroke="#fff" stroke-width="1"/>' +
      '<text x="302" y="140.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">Malcolm X Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("gc", "#140d1e", "#4a2a3a"));
  }

  window.SCENES = { train, apollo, battle, rucker, corner };
})();
