/* Yonkers, Westchester opening scenes for the Outasight game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes sail{from{transform:translateX(-80px)}to{transform:translateX(440px)}}' +
    '.sail{animation:sail 16s linear infinite}' +
    '@keyframes trot{from{transform:translateX(-100px)}to{transform:translateX(440px)}}' +
    '.trot{animation:trot 7s linear infinite}.trot2{animation-delay:-2.2s}' +
    '@keyframes leg{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.leg{transform-box:fill-box;transform-origin:50% 0;animation:leg .35s ease-in-out infinite}.leg2{animation-delay:-.17s}' +
    '@keyframes boom{0%{transform:scale(.1);opacity:0}15%{opacity:1}70%{opacity:.9}100%{transform:scale(1);opacity:0}}' +
    '.fw{transform-box:fill-box;transform-origin:50% 50%;animation:boom 2.6s ease-out infinite}.fw2{animation-delay:-.9s}.fw3{animation-delay:-1.7s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcf3f", PINK = "#ff4f8b", TEAL = "#3ec6e0";

  /* 1. Crestwood on the Metro-North Harlem Line: open-air platform by the Bronx River, the silver M7 train with its blue stripe pulling in */
  function train() {
    let windows = "";
    for (let x = 24; x < 270; x += 40) windows += '<rect x="' + x + '" y="128" width="26" height="22" rx="3" fill="#dfeefa" opacity=".9"/>';
    let trees = "";
    [[20, 92, 30], [80, 86, 34], [150, 94, 28], [330, 88, 34], [384, 96, 26]].forEach(t => trees += '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="' + t[2] + '" fill="#3f7a3c"/><circle cx="' + (t[0] + 12) + '" cy="' + (t[1] + 8) + '" r="' + t[2] * .7 + '" fill="#4f8f46"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' + trees +
      '<rect x="0" y="106" width="400" height="8" fill="#5a6b4a"/>' +
      /* platform canopy + sign */
      '<rect x="210" y="22" width="190" height="10" fill="#2f3a46"/><rect x="230" y="32" width="5" height="80" fill="#2f3a46"/><rect x="370" y="32" width="5" height="80" fill="#2f3a46"/>' +
      '<rect x="244" y="44" width="120" height="30" rx="4" fill="#111"/>' +
      '<text x="304" y="65" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Crestwood</text>' +
      '<rect x="262" y="80" width="84" height="18" rx="9" fill="#0039a6"/><text x="304" y="93" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">HARLEM LINE</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="116" width="300" height="60" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="300" height="7" fill="#0039a6"/>' + windows +
        '<rect x="286" y="128" width="16" height="22" rx="3" fill="#dfeefa"/><circle cx="300" cy="168" r="4" fill="#fff6c2"/>' +
        '<rect x="120" y="108" width="40" height="8" fill="#6b7280"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#5b5f66"/><path d="M0 210h400M0 236h400" stroke="#6b7078" stroke-width="2"/>' +
      tag("OUTASIGHT", 30, 242, 32, GOLD, -5) + tag("83 SOUND", 250, 238, 22, PINK, -3),
      sky("gs", "#7ec3ea", "#f7d9a8"));
  }

  /* 2. The Yonkers Pier at sunset: the pier pavilion on the Hudson, the Palisades cliffs across the river, a sailboat drifting by */
  function pier() {
    let rails = "";
    for (let x = 30; x < 380; x += 14) rails += '<rect x="' + x + '" y="176" width="2" height="14" fill="#2b2033"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gp)"/>' +
      '<circle cx="300" cy="96" r="30" fill="#ffd27a" opacity=".95"/>' +
      /* the Palisades: dark cliffs with a flat top */
      '<path d="M0 108l40-8h120l40 6h80l60-6h60v34H0z" fill="#5b4a6a"/><path d="M0 120h400v20H0z" fill="#4a3c58"/>' +
      '<rect x="0" y="138" width="400" height="122" fill="#3f6f9e"/><path d="M0 150h400M40 162h300M0 200h400" stroke="#ffd27a" stroke-width="1.5" opacity=".35"/>' +
      '<path d="M270 140h60l-6 40h-48z" fill="#ffd27a" opacity=".25"/>' +
      '<g class="sail"><path d="M0 146h36l-6 8H6z" fill="#fff"/><path d="M18 146V112l16 30z" fill="#fff"/><path d="M16 146V120l-12 24z" fill="' + PINK + '"/></g>' +
      /* the pier and its pavilion */
      '<rect x="20" y="188" width="360" height="10" fill="#3b2c3e"/>' + rails + '<rect x="20" y="174" width="360" height="3" fill="#2b2033"/>' +
      '<rect x="40" y="198" width="6" height="40" fill="#2b2033"/><rect x="200" y="198" width="6" height="40" fill="#2b2033"/><rect x="354" y="198" width="6" height="40" fill="#2b2033"/>' +
      '<rect x="80" y="140" width="110" height="36" fill="#e9e4d8"/><path d="M70 142l65-26 65 26z" fill="#4f7d8c"/>' +
      (function () { let s = ""; for (let x = 88; x < 186; x += 18) s += '<rect x="' + x + '" y="148" width="12" height="20" fill="#ffd27a" class="flk" style="animation-delay:-' + (x / 100).toFixed(1) + 's"/>'; return s; })() +
      '<text x="200" y="32" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#5a2a4a" letter-spacing="3">YONKERS PIER · HUDSON RIVER</text>',
      sky("gp", "#f58f6a", "#ffe0a3"));
  }

  /* 3. Yonkers Raceway: harness racing under the lights, trotters pulling sulkies round the oval */
  function raceway() {
    const horse = (cls, c, silk) => '<g class="trot ' + cls + '">' +
      '<ellipse cx="40" cy="176" rx="22" ry="9" fill="' + c + '"/><path d="M58 172l14-16 6 4-12 16z" fill="' + c + '"/><path d="M70 154l10-2 0 6-8 2z" fill="' + c + '"/>' +
      '<rect class="leg" x="24" y="182" width="4" height="20" fill="' + c + '"/><rect class="leg leg2" x="30" y="182" width="4" height="20" fill="' + c + '"/>' +
      '<rect class="leg leg2" x="50" y="182" width="4" height="20" fill="' + c + '"/><rect class="leg" x="56" y="182" width="4" height="20" fill="' + c + '"/>' +
      '<path d="M18 176l-30 6" stroke="#ddd" stroke-width="2"/><circle cx="-14" cy="196" r="10" fill="none" stroke="#ddd" stroke-width="2"/>' +
      '<rect x="-22" y="164" width="12" height="16" rx="3" fill="' + silk + '"/><circle cx="-16" cy="160" r="5" fill="' + silk + '"/></g>';
    let lights = "";
    [50, 170, 290].forEach(x => lights += '<rect x="' + (x + 8) + '" y="30" width="4" height="70" fill="#3a3a48"/><rect class="flk" x="' + x + '" y="22" width="20" height="10" fill="#fff6c2"/><path d="M' + x + ' 32l-20 60h60l-20-60z" fill="#fff6c2" opacity=".08"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#gr)"/>' + stars(12) + lights +
      /* grandstand */
      '<rect x="230" y="70" width="170" height="60" fill="#e8e1d2"/><rect x="230" y="70" width="170" height="10" fill="' + TEAL + '"/>' +
      (function () { let s = ""; for (let x = 240; x < 396; x += 16) s += '<rect x="' + x + '" y="88" width="10" height="30" fill="#2a3550"/>'; return s; })() +
      '<rect x="0" y="130" width="400" height="8" fill="#fff"/>' +
      '<rect x="0" y="138" width="400" height="80" fill="#b5835a"/><rect x="0" y="218" width="400" height="42" fill="#3f7a3c"/><rect x="0" y="214" width="400" height="5" fill="#fff"/>' +
      horse("", "#5a3520", PINK) + horse("trot2", "#2a1a12", GOLD) +
      '<text x="20" y="62" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="' + GOLD + '" letter-spacing="2">YONKERS RACEWAY</text>' +
      '<text x="20" y="244" font-family="Anton, Impact, sans-serif" font-size="16" fill="#fff" letter-spacing="1">NOW OR NEVER</text>',
      sky("gr", "#0f1530", "#3a3060"));
  }

  /* 4. Yonkers City Hall on its hill: pale granite, the clock tower lit up, fireworks overhead (tonight is the night) */
  function cityhall() {
    const fw = (x, y, c, cls) => { let s = '<g class="fw ' + cls + '">'; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; s += '<path d="M' + x + ' ' + y + 'L' + (x + 26 * Math.cos(a)).toFixed(1) + ' ' + (y + 26 * Math.sin(a)).toFixed(1) + '" stroke="' + c + '" stroke-width="2.5" stroke-linecap="round"/>'; } return s + '</g>'; };
    let cols = "";
    for (let x = 150; x <= 242; x += 16) cols += '<rect x="' + x + '" y="134" width="8" height="54" fill="#e7e1d1"/>';
    let wins = "";
    for (let x = 70; x < 340; x += 22) if (x < 140 || x > 254) { wins += '<rect x="' + x + '" y="140" width="10" height="16" fill="#ffd98a" class="flk" style="animation-delay:-' + (x / 90).toFixed(1) + 's"/><rect x="' + x + '" y="166" width="10" height="16" fill="#ffd98a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#gh)"/>' + stars(18) +
      fw(70, 56, PINK, "") + fw(330, 48, GOLD, "fw2") + fw(250, 30, TEAL, "fw3") +
      /* clock tower */
      '<rect x="176" y="50" width="48" height="76" fill="#d9d2c0"/><path d="M172 50l28-22 28 22z" fill="#6a8f86"/>' +
      '<circle cx="200" cy="80" r="14" fill="#fff6dc" stroke="#8a7a5a" stroke-width="2"/><path d="M200 80v-9M200 80l6 3" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      '<rect x="190" y="100" width="20" height="18" fill="#ffd98a" class="flk"/>' +
      /* main block */
      '<rect x="56" y="124" width="288" height="68" fill="#d9d2c0"/><rect x="56" y="124" width="288" height="8" fill="#bfb7a2"/>' +
      '<path d="M140 132l60-16 60 16z" fill="#cfc8b4"/>' + cols + wins +
      '<rect x="40" y="192" width="320" height="10" fill="#bfb7a2"/><rect x="150" y="202" width="100" height="14" fill="#cfc8b4"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2a34"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="256" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff" letter-spacing="2">TONIGHT IS THE NIGHT</text>',
      sky("gh", "#0b0f2a", "#3a2a5a"));
  }

  /* 5. Getty Square, downtown Yonkers: Main St and N Broadway, a brick wall with his name tagged, the street signs */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a2a"/><rect x="330" y="60" width="70" height="160" fill="#1d1a2a"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#5a3a34"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#6a463e"/>'; return b; })() +
      tag("OUTASIGHT", 34, 140, 34, GOLD, -7) + tag("STAY GOLD", 50, 196, 26, TEAL, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">N Broadway</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="' + PINK + '"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#a02a5a"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
      sky("gc", "#140d22", "#3a2a50"));
  }

  window.SCENES = { train, pier, raceway, cityhall, corner };
})();
