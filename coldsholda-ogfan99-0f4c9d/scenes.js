/* Gravesend opening scenes for the Cold Sholda game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-34px);opacity:0}}' +
    '.stm{animation:steam 2.6s ease-out infinite}.stm2{animation-delay:.9s}.stm3{animation-delay:1.7s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes drift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '.fog{animation:drift 14s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.bannr{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}' +
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
  const ICE = "#9fe3ff", GOLD = "#e8b84a", RED = "#ff5a4f";

  /* 1. F train pulling into Avenue U, up on the el over McDonald Avenue */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#3a4f63"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#3a4f63" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(18) +
      '<circle cx="330" cy="38" r="16" fill="#eaf6ff" opacity=".9"/>' +
      '<rect x="0" y="50" width="400" height="10" fill="#3a4f63"/>' + girders +
      /* station sign */
      '<rect x="80" y="66" width="240" height="34" rx="4" fill="#111"/>' +
      '<rect x="80" y="66" width="240" height="4" fill="#fff"/>' +
      '<text x="94" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Avenue U</text>' +
      bullet(296, 84, "F", "#ff6319") +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#ff6319"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "F", "#ff6319") +
      '</g>' +
      /* platform edge + the street under the el */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#16202b"/>' +
      tag("NEW ROME", 24, 238, 30, GOLD, -4) + tag("COLD", 300, 240, 32, ICE, -8),
      sky("g1", "#0d1b2e", "#3d6a8f"));
  }

  /* 2. Coffee shop social club: striped awning, card table, espresso steaming */
  function club() {
    return svg(
      '<rect width="400" height="260" fill="#1a120c"/>' +
      /* brick wall */
      (function () { let b = ""; for (let y = 0; y < 120; y += 14) for (let x = (y / 14) % 2 ? -20 : 0; x < 400; x += 40) b += '<rect x="' + x + '" y="' + y + '" width="38" height="12" fill="#5a2a1c"/>'; return b; })() +
      /* awning */
      (function () { let a = ""; const c = ["#1f7a3a", "#f4efe6", "#c91f2e"]; for (let i = 0; i < 14; i++) a += '<path d="M' + (i * 30) + ' 18 h30 v34 q-15 10 -30 0z" fill="' + c[i % 3] + '"/>'; return a; })() +
      '<rect x="0" y="12" width="400" height="8" fill="#0e0905"/>' +
      /* window with neon */
      '<rect x="40" y="62" width="320" height="120" rx="4" fill="#20160f" stroke="#0e0905" stroke-width="6"/>' +
      '<text class="neon" x="200" y="104" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" letter-spacing="3" fill="' + RED + '" stroke="#ffd0c8" stroke-width=".8">CAFFÈ</text>' +
      '<text class="neon" x="200" y="132" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="6" fill="' + ICE + '">SOCIAL CLUB</text>' +
      /* card table + two silhouettes */
      '<ellipse cx="200" cy="214" rx="120" ry="16" fill="#0b6b3a"/><rect x="190" y="214" width="20" height="40" fill="#0e0905"/>' +
      '<path d="M70 210q0-40 26-40t26 40z" fill="#0e0905"/><circle cx="96" cy="160" r="14" fill="#0e0905"/>' +
      '<path d="M278 210q0-40 26-40t26 40z" fill="#0e0905"/><circle cx="304" cy="160" r="14" fill="#0e0905"/>' +
      '<rect x="150" y="204" width="16" height="10" rx="1" fill="#fff" transform="rotate(-12 158 209)"/><rect x="226" y="204" width="16" height="10" rx="1" fill="#fff" transform="rotate(10 234 209)"/>' +
      /* espresso cup with steam */
      '<path d="M186 196h28v8q0 10-14 10t-14-10z" fill="#f4efe6"/><path d="M214 199q8 0 8 5t-8 5" fill="none" stroke="#f4efe6" stroke-width="3"/><ellipse cx="200" cy="214" rx="20" ry="3" fill="#cfd4dc"/>' +
      '<path class="stm" d="M194 192q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="stm stm2" d="M201 192q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="stm stm3" d="M208 192q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      tag("FROSTY", 300, 250, 22, ICE, -6));
  }

  /* 3. Old Gravesend: the town from 1645, the old cemetery under the moon */
  function old() {
    let stones = "";
    [[40, 196, 22, 34], [86, 202, 18, 28], [140, 194, 26, 38], [262, 198, 22, 32], [312, 192, 26, 40], [360, 204, 18, 26]].forEach(([x, y, w, h]) => {
      stones += '<path d="M' + x + ' ' + y + 'v-' + (h - w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0v' + (h - w / 2) + 'z" fill="#8a929c" stroke="#3a3f47" stroke-width="2"/>' +
        '<path d="M' + (x + 5) + ' ' + (y - h + w / 2 + 6) + 'h' + (w - 10) + 'M' + (x + 5) + ' ' + (y - h + w / 2 + 12) + 'h' + (w - 12) + '" stroke="#5b6168" stroke-width="1.5"/>';
    });
    let fence = "";
    for (let x = 4; x < 400; x += 14) fence += '<rect x="' + x + '" y="214" width="3" height="34" fill="#111"/><path d="M' + (x - 2) + ' 216l3.5-8 3.5 8z" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(26) +
      '<circle cx="300" cy="62" r="30" fill="#eaf6ff"/><circle cx="312" cy="56" r="30" fill="#163049" opacity=".18"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#1b2a1f"/>' +
      /* bare tree */
      '<path d="M206 200v-70m0 26l-24-26m24 14l22-30m-22 50l-16-8" stroke="#0e1410" stroke-width="5" stroke-linecap="round" fill="none"/>' +
      stones +
      '<g class="fog"><ellipse cx="60" cy="206" rx="80" ry="10" fill="#cfe6ff" opacity=".18"/></g>' +
      '<rect x="0" y="246" width="400" height="4" fill="#111"/>' + fence +
      /* sign */
      '<rect x="86" y="24" width="190" height="44" rx="4" fill="#123a5c" stroke="#e8b84a" stroke-width="2"/>' +
      '<text x="181" y="44" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="1" fill="#fff">OLD GRAVESEND</text>' +
      '<text x="181" y="61" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="' + GOLD + '">SINCE 1645</text>',
      sky("g3", "#06101c", "#163049"));
  }

  /* 4. New Rome: the Colosseum lit up gold, torches burning, CAESAR banner */
  function rome() {
    let arches = "";
    for (let row = 0; row < 3; row++) for (let i = 0; i < 9; i++) {
      const x = 40 + i * 36, y = 118 + row * 34;
      arches += '<path d="M' + x + ' ' + (y + 28) + 'v-16a12 12 0 0 1 24 0v16z" fill="#2a1a08" opacity=".9"/>';
    }
    const torch = x => '<rect x="' + (x - 2) + '" y="198" width="4" height="34" fill="#3b2418"/>' +
      '<path class="flk" d="M' + x + ' 178q10 12 0 22q-10-10 0-22z" fill="#ffb347"/><path class="flk flk2" d="M' + x + ' 186q5 6 0 12q-5-6 0-12z" fill="#fff2b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(30) +
      '<path d="M22 238V112q178-40 356 0v126z" fill="#c99a45"/>' +
      '<path d="M22 112q178-40 356 0" fill="none" stroke="#f3d48a" stroke-width="3"/>' +
      '<path d="M22 146h356M22 180h356M22 214h356" stroke="#a87b2c" stroke-width="3"/>' + arches +
      '<rect x="0" y="236" width="400" height="24" fill="#14100a"/>' +
      torch(20) + torch(380) +
      '<g class="bannr"><path d="M150 54h100v52l-50-14-50 14z" fill="#8f1d1d" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="80" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="2" fill="' + GOLD + '">CAESAR</text></g>' +
      tag("NEW ROME", 36, 50, 28, GOLD, -5),
      sky("g4", "#07101f", "#2b3f66"));
  }

  /* 5. Avenue U and McDonald Avenue, under the F: street signs, streetlight, the tag wall */
  function corner() {
    let el = "";
    for (let x = 0; x <= 400; x += 64) el += '<rect x="' + (x - 3) + '" y="20" width="7" height="200" fill="#2c3a48"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      /* the el overhead */
      '<rect x="0" y="0" width="400" height="22" fill="#2c3a48"/>' + el +
      '<path d="M0 22h400" stroke="#46596c" stroke-width="3"/>' +
      /* wall with the tag */
      '<rect x="20" y="70" width="230" height="150" fill="#3a3f47"/>' +
      tag("COLD SHOLDA", 28, 150, 30, ICE, -7) + tag("GRAVESEND", 56, 196, 24, RED, -3) +
      /* streetlight with flicker */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Avenue U</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">McDonald Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1b2e", "#24435f"));
  }

  window.GRAVESEND_SCENES = { train, club, old, rome, corner };
})();
