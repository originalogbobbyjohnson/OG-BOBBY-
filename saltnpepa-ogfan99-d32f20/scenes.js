/* Jamaica, Queens opening scenes for the Salt-N-Pepa game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '.globe{transform-box:fill-box;transform-origin:50% 50%;animation:spin 40s linear infinite}' +
    '@keyframes jet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.8)}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.2s ease-in-out infinite}.jet2{animation-delay:-.6s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3.4s ease-in-out infinite}.beam2{animation-delay:-1.7s}' +
    '@keyframes twk{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.twk{animation:twk 1.4s infinite}.twk2{animation-delay:-.7s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-80px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bnc{animation:bounce .9s ease-in-out infinite}.bnc2{animation-delay:-.45s}' +
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
  const PINK = "#ff4fa3", TEAL = "#2ad1c9", GOLD = "#ffd23f";

  /* 1. Jamaica Center-Parsons/Archer, underground: the E train rolling in, black sign with the E, J and Z bullets */
  function train() {
    let windows = "";
    for (let x = 22; x < 270; x += 46) windows += '<rect x="' + x + '" y="132" width="30" height="22" rx="3" fill="#dfeeff" opacity=".85"/>';
    let tiles = "";
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 20v94" stroke="#cfd6cf" stroke-width="1"/>';
    let lights = "";
    [60, 200, 340].forEach((x, i) => lights += '<rect class="flk' + (i === 1 ? " flk2" : "") + '" x="' + (x - 30) + '" y="6" width="60" height="6" rx="2" fill="#fffbe0"/>');
    let cols = "";
    [30, 130, 230, 330].forEach(x => cols += '<rect x="' + (x - 4) + '" y="114" width="8" height="70" fill="#2a3a5a" opacity=".55"/>');
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      '<rect x="0" y="0" width="400" height="18" fill="#2b2f38"/>' + lights +
      '<rect x="0" y="18" width="400" height="96" fill="#e7ece4"/>' + tiles +
      '<rect x="0" y="62" width="400" height="8" fill="#7a4fa0"/>' +
      /* station sign */
      '<rect x="24" y="28" width="280" height="30" rx="3" fill="#111"/><rect x="24" y="31" width="280" height="2" fill="#fff" opacity=".8"/>' +
      '<text x="36" y="51" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Jamaica Center – Parsons/Archer</text>' +
      bullet(322, 43, "E", "#0039a6") + bullet(346, 43, "J", "#996633") + bullet(370, 43, "Z", "#996633") +
      '<text x="36" y="90" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#333">END OF THE LINE · JAMAICA, QUEENS</text>' +
      cols +
      '<g class="anim-train">' +
        '<rect x="8" y="120" width="310" height="60" rx="8" fill="#b9c0c8" stroke="#5b6470" stroke-width="2"/>' +
        '<rect x="8" y="160" width="310" height="5" fill="#0039a6"/>' + windows +
        '<rect x="288" y="128" width="24" height="26" rx="3" fill="#111"/>' + bullet(300, 141, "E", "#0039a6") +
        '<circle cx="312" cy="172" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c1f26"/><path d="M0 214h400M0 238h400" stroke="#262a33" stroke-width="2"/>' +
      tag("SALT-N-PEPA", 26, 244, 30, PINK, -5) + tag("SPINDERELLA", 232, 240, 20, TEAL, -3));
  }

  /* 2. The Unisphere in Flushing Meadows: the stainless-steel globe over its fountain pool, jets dancing, three orbit rings */
  function unisphere() {
    let mer = "";
    for (let i = 1; i < 6; i++) { const rx = 70 * Math.cos(i * Math.PI / 12 * 2.0); mer += '<ellipse cx="200" cy="104" rx="' + Math.abs(rx).toFixed(1) + '" ry="70" fill="none" stroke="#c9d3db" stroke-width="1.5"/>'; }
    let par = "";
    [-50, -25, 0, 25, 50].forEach(dy => { const w = Math.sqrt(70 * 70 - dy * dy); par += '<path d="M' + (200 - w).toFixed(1) + ' ' + (104 + dy) + 'h' + (2 * w).toFixed(1) + '" stroke="#c9d3db" stroke-width="1.5"/>'; });
    let jets = "";
    for (let i = 0; i < 12; i++) { const x = 60 + i * 26; jets += '<path class="jet' + (i % 2 ? " jet2" : "") + '" d="M' + (x - 3) + ' 222q3-' + (26 + (i % 3) * 8) + ' 6 0z" fill="#dff4ff" opacity=".85"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#gu)"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5aa0c8"/><path d="M0 204h400" stroke="#9fd0ea" stroke-width="2"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#cfc8b6"/>' +
      /* tripod base */
      '<path d="M186 172l-16 50h10l14-46zM214 172l16 50h-10l-14-46z" fill="#8f9aa3"/><rect x="194" y="168" width="12" height="54" fill="#a8b2ba"/>' +
      '<g class="globe">' +
        '<circle cx="200" cy="104" r="70" fill="#9fb4c4" opacity=".25"/>' +
        '<circle cx="200" cy="104" r="70" fill="none" stroke="#d6dee4" stroke-width="3"/>' + mer + par +
        /* continents in steel plate */
        '<path d="M150 70q20-14 40-4q6 14-10 22q-8 18-22 10q-10-12-8-28z" fill="#b8c4cc"/><path d="M206 66q22-8 40 6q4 16-12 20q-20 4-28-8z" fill="#b8c4cc"/>' +
        '<path d="M214 104q16-4 22 10q-2 22-14 28q-12-12-8-38z" fill="#b8c4cc"/><path d="M168 108q14 0 14 14q-6 20-16 22q-4-18 2-36z" fill="#b8c4cc"/>' +
      '</g>' +
      '<ellipse cx="200" cy="104" rx="92" ry="20" fill="none" stroke="#e6edf2" stroke-width="2" transform="rotate(-20 200 104)"/>' +
      '<ellipse cx="200" cy="104" rx="88" ry="24" fill="none" stroke="#e6edf2" stroke-width="2" transform="rotate(25 200 104)"/>' +
      '<ellipse cx="200" cy="104" rx="84" ry="16" fill="none" stroke="#e6edf2" stroke-width="2" transform="rotate(5 200 104)"/>' +
      jets +
      '<text x="200" y="252" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#4a4436" letter-spacing="3">FLUSHING MEADOWS · QUEENS</text>',
      sky("gu", "#5fb3ec", "#e6f4ff"));
  }

  /* 3. The old Loew's Valencia on Jamaica Avenue: the ornate cream, red and blue terracotta Spanish Baroque front, marquee bulbs chasing */
  function valencia() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 12) bulbs += '<circle class="twk' + ((x / 12) % 2 ? " twk2" : "") + '" cx="' + x + '" cy="152" r="2.6" fill="' + GOLD + '"/>';
    let orn = "";
    for (let x = 108; x < 300; x += 24) orn += '<circle cx="' + x + '" cy="62" r="6" fill="#2a5aa8" stroke="#d9b25a" stroke-width="2"/>';
    let tiles = "";
    for (let x = 84; x < 316; x += 16) tiles += '<rect x="' + x + '" y="96" width="10" height="10" fill="#c0392b" transform="rotate(45 ' + (x + 5) + ' 101)"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gv)"/>' + stars(10) +
      '<rect x="0" y="80" width="70" height="140" fill="#3a2f3a"/><rect x="330" y="70" width="70" height="150" fill="#3a2f3a"/>' +
      /* facade */
      '<rect x="80" y="40" width="240" height="180" fill="#f1e2c4"/>' +
      '<path d="M80 40q120-44 240 0z" fill="#e9d3a8" stroke="#c9a05a" stroke-width="3"/>' +
      '<rect x="80" y="50" width="240" height="24" fill="#e3c88f"/>' + orn +
      '<rect x="80" y="88" width="240" height="26" fill="#efdcb6"/>' + tiles +
      '<path d="M120 140v-14a14 14 0 0 1 28 0v14zM186 140v-18a14 14 0 0 1 28 0v18zM252 140v-14a14 14 0 0 1 28 0v14z" fill="#2a5aa8" stroke="#c9a05a" stroke-width="2"/>' +
      '<path d="M80 40v180M320 40v180" stroke="#c0392b" stroke-width="6"/>' +
      /* marquee */
      '<rect x="88" y="146" width="224" height="30" fill="#1a1420" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="171" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" textLength="196" lengthAdjust="spacingAndGlyphs" fill="' + PINK + '">TONIGHT: HOT, COOL &amp; VICIOUS</text>' +
      '<path d="M150 220v-36h100v36z" fill="#5a2a1a"/><path d="M200 184v36" stroke="#3a1a10" stroke-width="2"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#24262c"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#ddd" letter-spacing="2">JAMAICA AVENUE · THE VALENCIA</text>',
      sky("gv", "#1c1438", "#6a3a6a"));
  }

  /* 4. The stage: Spinderella on the decks, two records spinning, spotlights sweeping, the gold gramophone for the first rap Grammy by women */
  function stage() {
    const deck = x => '<rect x="' + (x - 46) + '" y="146" width="92" height="44" rx="4" fill="#24242c" stroke="#555" stroke-width="2"/>' +
      '<g class="spin"><circle cx="' + x + '" cy="168" r="18" fill="#111"/><circle cx="' + x + '" cy="168" r="12" fill="none" stroke="#333" stroke-width="1.5"/>' +
      '<circle cx="' + x + '" cy="168" r="6" fill="' + PINK + '"/><rect x="' + (x - 1) + '" y="152" width="2" height="6" fill="#fff"/></g>' +
      '<path d="M' + (x + 34) + ' 152l-8 20" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="#120c1c"/>' +
      '<g class="beam"><path d="M80 0l-60 200h120z" fill="' + PINK + '" opacity=".18"/></g><g class="beam beam2"><path d="M320 0l-60 200h120z" fill="' + TEAL + '" opacity=".18"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2030"/><path d="M0 190h400" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* DJ table */
      '<rect x="60" y="140" width="280" height="54" rx="4" fill="#1a1a22" stroke="#444" stroke-width="2"/>' +
      deck(130) + deck(270) +
      '<rect x="182" y="150" width="36" height="36" rx="3" fill="#333"/><path d="M192 158v20M200 158v20M208 158v20" stroke="#888" stroke-width="2"/><rect x="188" y="164" width="8" height="4" fill="' + TEAL + '"/><rect x="204" y="170" width="8" height="4" fill="' + TEAL + '"/>' +
      /* gold gramophone */
      '<g class="bnc"><path d="M190 120l-26-44q14-14 36-8z" fill="' + GOLD + '" stroke="#8a6a12" stroke-width="2"/><rect x="192" y="112" width="16" height="10" fill="#c9a22a"/>' +
      '<rect x="186" y="122" width="28" height="12" rx="2" fill="' + GOLD + '" stroke="#8a6a12" stroke-width="2"/></g>' +
      '<text x="200" y="56" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" letter-spacing="3">SPIN, SPINDERELLA</text>' +
      '<text x="200" y="230" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + GOLD + '" letter-spacing="3">SALT · PEPA · SPINDERELLA</text>');
  }

  /* 5. Jamaica Ave and Parsons Blvd: a wall with their name tagged, the green street signs, cars going by */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#3e3a4e"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#4a4560"/>'; return b; })() +
      tag("SALT-N-PEPA", 30, 136, 30, PINK, -7) + tag("SHOWSTOPPER", 46, 194, 22, TEAL, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Jamaica Av</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Parsons Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="' + TEAL + '"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#178a84"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
      sky("gc", "#140d1e", "#3a2a4a"));
  }

  window.SCENES = { train, unisphere, valencia, stage, corner };
})();
