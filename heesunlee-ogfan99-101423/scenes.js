/* Staten Island opening scenes for HeeSun Lee's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes koi{0%{transform:translate(0,0)}50%{transform:translate(60px,6px)}100%{transform:translate(0,0)}}' +
    '.koi{animation:koi 7s ease-in-out infinite}.koi2{animation-delay:-3.5s}' +
    '@keyframes petal{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(40px,240px) rotate(300deg);opacity:.9}}' +
    '.petal{animation:petal 7s linear infinite}.p2{animation-delay:-1.7s}.p3{animation-delay:-3.4s}.p4{animation-delay:-5.1s}' +
    '@keyframes sail{from{transform:translateX(-80px)}to{transform:translateX(460px)}}' +
    '.sail{animation:sail 16s linear infinite;animation-delay:-6s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bulb{animation:chase .8s steps(1) infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#ffd166", PINK = "#ef476f", BLUE = "#4cc9f0";

  /* 1. St. George: the SIR waiting under the terminal canopy at dusk, the harbor and lower Manhattan beyond */
  function train() {
    let windows = "";
    for (let x = 22; x < 260; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#ffe9c2" opacity=".9"/>';
    let city = "";
    [[0, 12, 22], [14, 10, 34], [26, 14, 20], [42, 10, 46], [54, 16, 28], [72, 10, 40], [84, 14, 24]].forEach(b => city += '<rect x="' + (240 + b[0]) + '" y="' + (96 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="#4a3a6a"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(10) +
      '<rect x="0" y="94" width="400" height="24" fill="#2c4a78"/>' + city +
      '<path class="shim" d="M20 104h40M150 110h50" stroke="#ffd166" stroke-width="2"/>' +
      /* the canopy */
      '<path d="M0 30h400v10H0z" fill="#d8dde3"/><path d="M0 40h400v3H0z" fill="#0039a6"/>' +
      '<rect x="30" y="43" width="5" height="80" fill="#7b8794"/><rect x="200" y="43" width="5" height="80" fill="#7b8794"/><rect x="368" y="43" width="5" height="80" fill="#7b8794"/>' +
      '<rect x="60" y="46" width="40" height="4" fill="#fff6d6" class="flk"/><rect x="290" y="46" width="40" height="4" fill="#fff6d6" class="flk flk2"/>' +
      /* black station sign */
      '<rect x="92" y="56" width="216" height="32" rx="4" fill="#111"/><rect x="92" y="56" width="216" height="4" fill="#fff"/>' +
      '<text x="104" y="80" ' + FONT + ' font-size="15" fill="#fff">St. George</text>' + sir(280, 73) +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="6" fill="#0039a6"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' + sir(270, 144) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c232c"/>' +
      tag("STATEN ISLAND", 18, 240, 24, BLUE, -4) + tag("HEESUN", 270, 242, 30, PINK, -7),
      sky("g1", "#1c1a44", "#d97a8a"));
  }

  /* 2. The Chinese Scholar's Garden at Snug Harbor: white walls, the moon gate, gray tile roofs, red posts, koi in the pond */
  function garden() {
    let petals = "";
    ["", " p2", " p3", " p4"].forEach((c, i) => petals += '<ellipse class="petal' + c + '" cx="' + (40 + i * 90) + '" cy="0" rx="3" ry="2" fill="#ffc2d6"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* the whitewashed wall with its dark tile cap */
      '<rect x="0" y="70" width="400" height="100" fill="#f2efe6"/>' +
      '<path d="M-6 70h412l-8-12H2z" fill="#4a4e56"/>' +
      (function () { let t = ""; for (let x = 0; x < 400; x += 10) t += '<path d="M' + x + ' 60v10" stroke="#353840" stroke-width="2"/>'; return t; })() +
      /* moon gate */
      '<circle cx="110" cy="122" r="40" fill="#2f5a3a"/><circle cx="110" cy="122" r="40" fill="none" stroke="#9a9484" stroke-width="3"/>' +
      '<path d="M86 104q14-14 30-6q10 6 18 2v40H86z" fill="#4f8a46"/><rect x="104" y="128" width="6" height="34" fill="#5a3a22"/>' +
      /* the pavilion: upturned gray tile roof, red posts */
      '<path d="M220 74q60-30 140 0l12-6-6 14H214l-6-14z" fill="#3e424a"/><path d="M226 82h140" stroke="#2a2d33" stroke-width="3"/>' +
      '<rect x="234" y="84" width="7" height="70" fill="#a8322a"/><rect x="290" y="84" width="7" height="70" fill="#a8322a"/><rect x="346" y="84" width="7" height="70" fill="#a8322a"/>' +
      '<path d="M234 98h119" stroke="#a8322a" stroke-width="3"/><path d="M234 140h119" stroke="#5a3a22" stroke-width="3"/>' +
      (function () { let l = ""; for (let x = 238; x < 350; x += 8) l += '<path d="M' + x + ' 140v14" stroke="#5a3a22" stroke-width="1.5"/>'; return l; })() +
      /* a bamboo stand */
      '<path d="M170 170V80M180 170V70M188 170V90" stroke="#5e8f3a" stroke-width="4"/><path d="M170 100l-10-6M180 90l12-8M188 110l10-6" stroke="#6faa44" stroke-width="3"/>' +
      /* the pond with koi */
      '<rect x="0" y="170" width="400" height="90" fill="#2f6a6a"/>' +
      '<path class="shim" d="M40 186h50M240 196h70M120 236h60" stroke="#cfe8e6" stroke-width="2"/>' +
      '<g class="koi"><ellipse cx="80" cy="210" rx="12" ry="5" fill="#ff8a3a"/><path d="M68 210l-8-5v10z" fill="#ff8a3a"/><circle cx="86" cy="208" r="2" fill="#fff"/></g>' +
      '<g class="koi koi2"><ellipse cx="250" cy="224" rx="12" ry="5" fill="#f7f3ea"/><path d="M238 224l-8-5v10z" fill="#f7f3ea"/><circle cx="252" cy="222" r="2.5" fill="#e0402a"/></g>' +
      /* a lily pad and the rocks */
      '<ellipse cx="330" cy="240" rx="16" ry="5" fill="#4f8a46"/><path d="M0 172q30-10 60 0" fill="#7b7e86"/>' + petals +
      tag("SNUG HARBOR", 18, 252, 24, GOLD, -3),
      sky("g2", "#9cc6e8", "#f6e2d0"));
  }

  /* 3. The Verrazzano-Narrows Bridge from Fort Wadsworth: twin gray towers, the long sagging cables, a sailboat on the Narrows */
  function verrazzano() {
    let hangers = "";
    for (let x = 0; x <= 400; x += 10) {
      let y;
      if (x < 100) y = 40 + Math.pow((100 - x) / 100, 2) * 60;
      else if (x <= 300) y = 40 + 80 * (1 - Math.pow((x - 200) / 100, 2));
      else y = 40 + Math.pow((x - 300) / 100, 2) * 60;
      hangers += '<path d="M' + x + ' ' + y.toFixed(1) + 'V136" stroke="#9aa4ae" stroke-width="1"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#fff1a8"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#2f5f86"/>' +
      '<path class="shim" d="M20 160h60M240 170h70M140 200h50" stroke="#cfe8f6" stroke-width="2"/>' +
      hangers +
      /* main cables */
      '<path d="M0 100Q50 70 100 40Q200 200 300 40Q350 70 400 100" fill="none" stroke="#7b8794" stroke-width="3"/>' +
      /* the towers */
      '<rect x="92" y="30" width="6" height="120" fill="#8b96a0"/><rect x="102" y="30" width="6" height="120" fill="#8b96a0"/><path d="M92 36h16M92 80h16M92 124h16" stroke="#8b96a0" stroke-width="3"/>' +
      '<rect x="292" y="30" width="6" height="120" fill="#8b96a0"/><rect x="302" y="30" width="6" height="120" fill="#8b96a0"/><path d="M292 36h16M292 80h16M292 124h16" stroke="#8b96a0" stroke-width="3"/>' +
      /* the double deck */
      '<rect x="0" y="134" width="400" height="5" fill="#6f7a84"/><rect x="0" y="141" width="400" height="4" fill="#6f7a84"/>' +
      '<g class="sail"><g class="bob"><path d="M20 182h40l-6 8H26z" fill="#f2f2f2"/><path d="M40 180V146l18 32z" fill="#fff"/><path d="M38 180V152l-14 26z" fill="#ffd166"/></g></g>' +
      /* Fort Wadsworth's stone wall and lawn in front */
      '<path d="M0 214h400v46H0z" fill="#5c9a46"/><rect x="0" y="204" width="180" height="14" fill="#a89a80"/>' +
      (function () { let s = ""; for (let x = 0; x < 180; x += 20) s += '<rect x="' + x + '" y="198" width="12" height="8" fill="#a89a80"/>'; return s; })() +
      tag("THE NARROWS", 200, 248, 24, BLUE, -3),
      sky("g3", "#86b8de", "#f6e2b8"));
  }

  /* 4. The St. George Theatre on Hyatt St: the brick front, the vertical sign and the marquee with chasing bulbs */
  function theatre() {
    let bulbs = "";
    for (let x = 70; x <= 330; x += 10) bulbs += '<circle class="bulb' + ((x / 10) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="132" r="2.4" fill="#fff1a8"/><circle class="bulb' + ((x / 10) % 2 ? "" : " bulb2") + '" cx="' + x + '" cy="178" r="2.4" fill="#fff1a8"/>';
    let vb = "";
    for (let y = 22; y <= 116; y += 8) vb += '<circle class="bulb' + ((y / 8) % 2 ? " bulb2" : "") + '" cx="190" cy="' + y + '" r="2" fill="#fff1a8"/><circle class="bulb' + ((y / 8) % 2 ? "" : " bulb2") + '" cx="230" cy="' + y + '" r="2" fill="#fff1a8"/>';
    const letters = "STGEORGE".split("");
    let vt = "";
    letters.forEach((l, i) => vt += '<text x="210" y="' + (32 + i * 11) + '" text-anchor="middle" ' + FONT + ' font-size="10" fill="' + GOLD + '">' + l + '</text>');
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(14) +
      /* brick facade with arched windows */
      '<rect x="40" y="40" width="320" height="180" fill="#8a4a32"/>' +
      (function () { let b = ""; for (let y = 44; y < 220; y += 8) b += '<path d="M40 ' + y + 'h320" stroke="#6e3826" stroke-width="1"/>'; return b; })() +
      '<path d="M70 110v-36a14 14 0 0 1 28 0v36zM302 110v-36a14 14 0 0 1 28 0v36z" fill="#ffd9a0" opacity=".8"/>' +
      '<path d="M40 40h320" stroke="#e8d8b0" stroke-width="6"/>' +
      /* vertical blade sign */
      '<rect x="186" y="16" width="48" height="104" rx="4" fill="#1d1a2e" stroke="' + GOLD + '" stroke-width="2"/>' + vb + vt +
      /* marquee */
      '<path d="M60 128h280l-10 54H70z" fill="#1d1a2e" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="84" y="140" width="232" height="30" fill="#f7f3ea"/>' +
      '<text x="200" y="152" text-anchor="middle" ' + FONT + ' font-size="10" fill="#1d1a2e">TONIGHT ONLY</text>' +
      '<text x="200" y="166" text-anchor="middle" ' + FONT + ' font-size="13" fill="' + PINK + '">HEESUN LEE</text>' + bulbs +
      /* doors and sidewalk */
      '<rect x="120" y="186" width="160" height="34" fill="#3a2418"/>' +
      (function () { let d = ""; for (let x = 124; x < 280; x += 32) d += '<rect x="' + x + '" y="190" width="26" height="30" fill="#ffd9a0" opacity=".55"/>'; return d; })() +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2a34"/>' +
      tag("HYATT ST", 16, 250, 22, BLUE, -3),
      sky("g4", "#100c26", "#3a2a5a"));
  }

  /* 5. Bay St and Victory Blvd in Tompkinsville: green signs, HeeSun's wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#2e3448"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#383f56"/>'; return b; })() +
      tag("HEESUN", 30, 128, 44, PINK, -7) + tag("IN MY CITY", 36, 172, 28, GOLD, -3) + tag("STEREOTYPES", 40, 208, 22, BLUE, -2) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="270" y="88" width="64" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Bay St</text>' +
      '<rect x="258" y="110" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Victory Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a2a4a"));
  }

  window.SCENES = { train, garden, verrazzano, theatre, corner };
})();
