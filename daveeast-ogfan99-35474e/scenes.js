/* Harlem opening scenes for the Dave East game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes chase{0%,49%{opacity:1}50%,100%{opacity:.25}}' +
    '.bulb{animation:chase .8s steps(1) infinite}.bulb2{animation-delay:.4s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.3}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-52px)}}' +
    '.bnc{animation:bounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes ring{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:ring 1.4s ease-in-out infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 24s linear infinite}.cld2{animation-delay:-12s}' +
    '@keyframes sway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}' +
    '.tree{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#ff3b3b", ORANGE = "#ffb020", BLUE = "#4aa3ff", GREEN6 = "#00933c";

  /* 1. The 6 pulling into 116 St on Lexington Av, underground: white tile, ochre tile band, black columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 176; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8d3c8" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v176" stroke="#d8d3c8" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [16, 200, 384].forEach(x => { cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="186" fill="#141414"/><rect x="' + (x - 9) + '" y="0" width="18" height="4" fill="#141414"/><rect x="' + (x - 9) + '" y="182" width="18" height="4" fill="#141414"/>'; });
    const sign = x => '<rect x="' + x + '" y="54" width="120" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="54" width="120" height="4" fill="#fff"/>' +
      '<text x="' + (x + 12) + '" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">116 St</text>' + bullet(x + 98, 72, "6", GREEN6);
    return svg(
      '<rect width="400" height="176" fill="#ebe6da"/>' + tiles +
      '<rect x="0" y="0" width="400" height="10" fill="#201c1c"/>' +
      '<rect class="flk" x="50" y="3" width="60" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="240" y="3" width="60" height="4" rx="2" fill="#fffbe6"/>' +
      /* tile band with 116 plaques */
      '<rect x="0" y="20" width="400" height="24" fill="#6b4a12"/><rect x="0" y="24" width="400" height="16" fill="#c9962f"/>' +
      [105, 295].map(cx => '<rect x="' + (cx - 26) + '" y="22" width="52" height="20" fill="#ebe6da" stroke="#6b4a12" stroke-width="2"/>' +
        '<text x="' + cx + '" y="37" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="1" fill="#6b4a12">116</text>').join("") +
      sign(40) + sign(240) +
      /* the 6 slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + GREEN6 + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(292, 132, "6", GREEN6) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#16121c"/>' + cols +
      tag("FROM THE DIRT", 28, 240, 26, ORANGE, -4) + tag("EAST", 290, 242, 34, BLUE, -8),
      "");
  }

  /* 2. The Apollo on 125th St: tan brick, the tall red vertical sign with white letters, the bulb marquee chasing */
  function apollo() {
    let brick = "";
    for (let y = 30; y < 210; y += 9) brick += '<path d="M120 ' + y + 'h170" stroke="#a88a5c" stroke-width="1" opacity=".6"/>';
    let wins = "";
    [[136, 44], [196, 44], [256, 44]].forEach(([x, y]) => { wins += '<rect x="' + x + '" y="' + y + '" width="22" height="34" fill="#2a2030"/><rect x="' + x + '" y="' + y + '" width="22" height="34" fill="none" stroke="#e7d6b0" stroke-width="2"/>'; });
    let bulbs = "";
    for (let x = 96; x <= 314; x += 9) {
      bulbs += '<circle class="bulb' + ((x / 9) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="114" r="2.2" fill="#fff6c2"/>';
      bulbs += '<circle class="bulb' + ((x / 9) % 2 ? "" : " bulb2") + '" cx="' + x + '" cy="160" r="2.2" fill="#fff6c2"/>';
    }
    const letters = "APOLLO".split("").map((c, i) => '<text x="83" y="' + (52 + i * 20) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#fff">' + c + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ag)"/>' + stars(22) +
      /* neighbors: brownstone and storefront blocks */
      '<rect x="0" y="70" width="70" height="150" fill="#3a2a22"/><rect x="300" y="60" width="100" height="160" fill="#2e2620"/>' +
      [[10, 86], [38, 86], [10, 122], [38, 122], [316, 76], [352, 76], [316, 112], [352, 112]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="18" height="24" fill="#ffd27a" opacity=".55"/>').join("") +
      /* the theater front */
      '<rect x="110" y="28" width="190" height="192" fill="#c8a875"/>' + brick + wins +
      '<rect x="110" y="24" width="190" height="8" fill="#e7d6b0"/>' +
      /* the vertical sign */
      '<g class="neon"><rect x="68" y="30" width="30" height="132" rx="3" fill="#d4202a" stroke="#fff" stroke-width="2"/>' + letters + '</g>' +
      '<rect x="80" y="162" width="6" height="12" fill="#5a1a1a"/>' +
      /* the marquee */
      '<rect x="90" y="108" width="230" height="58" fill="#d4202a"/>' + bulbs +
      '<rect x="102" y="120" width="206" height="34" fill="#fff8ec"/>' +
      '<text x="205" y="134" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="2" fill="#111">TONIGHT ON 125TH</text>' +
      '<text x="205" y="150" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" letter-spacing="3" fill="#d4202a">DAVE EAST</text>' +
      /* doors + sidewalk + crowd */
      '<rect x="140" y="178" width="130" height="42" fill="#1c1418"/>' +
      [150, 184, 218, 252].map(x => '<rect x="' + x + '" y="184" width="16" height="36" fill="#ffd27a" opacity=".35"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#1a1620"/><path d="M0 236h400" stroke="#2c2634" stroke-width="2"/>' +
      [60, 96, 316, 350].map((x, i) => '<path d="M' + x + ' 248q0-26 12-26t12 26z" fill="#0b0810"/><circle cx="' + (x + 12) + '" cy="214" r="7" fill="#0b0810"/>').join(""),
      sky("ag", "#120a22", "#3a2350"));
  }

  /* 3. The Rucker on 155th: blue court, orange key, chain fence, a ball bouncing on the hardwood-blue */
  function rucker() {
    let fence = "";
    for (let x = -40; x < 440; x += 14) fence += '<path d="M' + x + ' 60l60 90M' + (x + 60) + ' 60l-60 90" stroke="#6f7c88" stroke-width="1" opacity=".55"/>';
    let crowd = "";
    for (let i = 0; i < 22; i++) { const x = 6 + i * 18, y = 146 + (i % 2) * 4; crowd += '<circle cx="' + x + '" cy="' + y + '" r="6" fill="#0b0f1a"/><path d="M' + (x - 8) + ' ' + (y + 16) + 'q0-12 8-12t8 12z" fill="#0b0f1a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#rg)"/>' +
      '<g class="cld"><ellipse cx="60" cy="34" rx="40" ry="10" fill="#fff" opacity=".2"/></g><g class="cld cld2"><ellipse cx="60" cy="46" rx="30" ry="8" fill="#fff" opacity=".18"/></g>' +
      /* Polo Grounds towers behind */
      '<rect x="40" y="16" width="44" height="60" fill="#3a2c3a"/><rect x="300" y="8" width="50" height="68" fill="#3a2c3a"/>' +
      [[46, 24], [62, 24], [46, 40], [62, 40], [306, 18], [326, 18], [306, 34], [326, 34], [306, 50], [326, 50]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="10" height="8" fill="#ffd27a" opacity=".6"/>').join("") +
      /* fence + crowd */
      '<rect x="0" y="58" width="400" height="4" fill="#4a5560"/>' + fence + crowd +
      /* the court */
      '<path d="M0 170h400v90H0z" fill="#1f5fae"/>' +
      '<path d="M140 170h120l20 90H120z" fill="#f07a22"/>' +
      '<path d="M140 170h120l20 90H120z" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M150 170q50 40 100 0" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M40 260q160-90 320 0" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M0 170h400" stroke="#fff" stroke-width="3"/>' +
      /* hoop */
      '<rect x="196" y="78" width="8" height="92" fill="#22262c"/>' +
      '<rect x="166" y="66" width="68" height="44" rx="2" fill="#f4f7fb" stroke="#22262c" stroke-width="3"/><rect x="188" y="84" width="24" height="18" fill="none" stroke="#e8262b" stroke-width="2"/>' +
      '<ellipse cx="200" cy="106" rx="14" ry="3" fill="none" stroke="#f07a22" stroke-width="3"/>' +
      '<path d="M187 107l5 14h16l5-14M193 107l3 14M207 107l-3 14" stroke="#fff" stroke-width="1.2" fill="none"/>' +
      /* the ball bouncing */
      '<g class="bnc"><circle cx="300" cy="226" r="12" fill="#f07a22" stroke="#7a3008" stroke-width="1.5"/><path d="M288 226h24M300 214v24M292 217q8 9 0 18M308 217q-8 9 0 18" stroke="#7a3008" stroke-width="1.2" fill="none"/></g>' +
      '<ellipse cx="300" cy="240" rx="12" ry="3" fill="#0b2a55" opacity=".6"/>' +
      tag("HARLEM", 22, 50, 22, ORANGE, -5),
      sky("rg", "#ff9a5a", "#5a3a6e"));
  }

  /* 4. Marcus Garvey Park: the cast-iron fire watchtower on Mount Morris rock, three tiers, spiral stair, the bronze bell swinging */
  function tower() {
    const IRON = "#3d4148", IRON2 = "#2a2d33";
    let cols = "";
    [[150, 160, 100], [160, 110, 80], [170, 66, 60]].forEach(([x, y, w], t) => {
      const h = t === 0 ? 50 : t === 1 ? 44 : 38;
      for (let i = 0; i <= 4; i++) cols += '<rect x="' + (x + i * (w / 4) - 2) + '" y="' + (y - h) + '" width="4" height="' + h + '" fill="' + IRON + '"/>';
      cols += '<rect x="' + (x - 6) + '" y="' + (y - 4) + '" width="' + (w + 12) + '" height="6" fill="' + IRON2 + '"/>';
      cols += '<path d="M' + x + ' ' + (y - h) + 'l' + (w / 4) + ' ' + h + 'm0-' + h + 'l' + (w / 4) + ' ' + h + 'm0-' + h + 'l' + (w / 4) + ' ' + h + 'm0-' + h + 'l' + (w / 4) + ' ' + h + '" stroke="' + IRON + '" stroke-width="1.5" opacity=".8"/>';
    });
    /* spiral stair inside */
    let stair = "";
    for (let y = 154; y > 30; y -= 10) stair += '<path d="M188 ' + y + 'q12 -5 24 0" stroke="#6a6f78" stroke-width="2" fill="none"/>';
    let trees = "";
    [[40, 196, 34], [96, 206, 26], [312, 200, 32], [366, 208, 24]].forEach(([x, y, r]) => { trees += '<g class="tree"><rect x="' + (x - 3) + '" y="' + (y - 4) + '" width="6" height="30" fill="#2a1c12"/><circle cx="' + x + '" cy="' + (y - r / 2) + '" r="' + r + '" fill="#1f5a34"/><circle cx="' + (x + r / 2) + '" cy="' + (y - r) + '" r="' + (r * 0.7) + '" fill="#2a7444"/></g>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#tg)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffd27a" opacity=".85"/>' +
      '<g class="cld"><ellipse cx="60" cy="40" rx="44" ry="10" fill="#fff" opacity=".22"/></g>' +
      /* the rock outcrop */
      '<path d="M90 260l30-80q40-30 80-26t80 26l30 80z" fill="#5d5650"/><path d="M120 180q40-30 80-26t80 26" stroke="#7b746c" stroke-width="3" fill="none"/>' +
      '<path d="M140 200l20-10M240 196l18 12M180 220l26-6" stroke="#4a443e" stroke-width="2"/>' +
      stair + cols +
      /* the octagonal lantern on top */
      '<path d="M178 28h44l6 10h-56z" fill="' + IRON2 + '"/><path d="M182 28l18-14 18 14z" fill="' + IRON + '"/><rect x="198" y="6" width="4" height="10" fill="' + IRON + '"/>' +
      '<g class="bell"><path d="M191 44q0-9 9-9t9 9l3 9h-24z" fill="#b8862e" stroke="#6a4a12" stroke-width="1.5"/><circle cx="200" cy="55" r="2.5" fill="#6a4a12"/></g>' +
      trees +
      '<rect x="0" y="236" width="400" height="24" fill="#183020"/>' +
      '<rect x="14" y="20" width="132" height="32" rx="4" fill="#1f5a34" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="80" y="34" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" textLength="120" lengthAdjust="spacingAndGlyphs" fill="#fff">MARCUS GARVEY PARK</text>' +
      '<text x="80" y="46" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8" letter-spacing="2" textLength="104" lengthAdjust="spacingAndGlyphs" fill="' + ORANGE + '">WATCHTOWER · 1856</text>',
      sky("tg", "#1d2b52", "#d9784a"));
  }

  /* 5. E 116 St and Lexington Av: street signs, brownstone stoop, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cg)"/>' + stars(16) +
      /* brownstone behind */
      '<rect x="250" y="30" width="150" height="190" fill="#5a3a2a"/>' +
      [[266, 46], [312, 46], [358, 46], [266, 96], [312, 96], [358, 96]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="26" height="36" fill="#ffd27a" opacity=".5"/><rect x="' + (x - 3) + '" y="' + (y - 5) + '" width="32" height="5" fill="#7a5440"/>').join("") +
      '<path d="M300 220l20-40h40v40z" fill="#4a2e22"/><path d="M304 212h52M308 204h48M312 196h44M316 188h40" stroke="#3a2218" stroke-width="2"/>' +
      /* wall with the tags */
      '<rect x="14" y="70" width="230" height="150" fill="#3a3842"/>' +
      tag("DAVE EAST", 24, 150, 27, RED, -7) + tag("EAST HARLEM", 30, 200, 22, BLUE, -3) +
      /* streetlight */
      '<rect x="234" y="56" width="5" height="164" fill="#1d2329"/><path d="M236 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M252 62h22l-5 8h-12z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M252 70h22l30 150h-82z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="186" y="88" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="234" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 116 St</text>' +
      '<rect x="186" y="110" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="234" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Lexington Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("cg", "#0e0a1e", "#2e2048"));
  }

  window.SCENES = { train, apollo, rucker, tower, corner };
})();
