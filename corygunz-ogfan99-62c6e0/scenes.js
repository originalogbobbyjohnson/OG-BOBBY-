/* Soundview opening scenes for the Cory Gunz game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes spray{0%{transform:translateY(0) scaleY(1);opacity:.9}50%{transform:translateY(-6px) scaleY(1.15);opacity:1}100%{transform:translateY(0) scaleY(1);opacity:.9}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:spray 1.4s ease-in-out infinite}.jet2{animation-delay:.5s}' +
    '@keyframes drop{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drop 1.1s ease-in infinite}.drp2{animation-delay:.4s}.drp3{animation-delay:.8s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}' +
    '.wav{animation:wave 3s ease-in-out infinite}.wav2{animation-delay:-1.5s}' +
    '@keyframes sail{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '.boat{animation:sail 18s linear infinite}' +
    '@keyframes drive{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.car{animation:drive 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.gull{animation:bob 1.6s ease-in-out infinite}' +
    '@keyframes glide{from{transform:translateX(-30px)}to{transform:translateX(430px)}}' +
    '.fly{animation:glide 12s linear infinite}' +
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
  const GOLD = "#f5c542", GREEN6 = "#00933c", BLUE = "#4fc3ff", RED = "#ff4d3d";

  /* 1. The 6 pulling into Morrison Av-Soundview, up on the el over Westchester Av */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#3f5246"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#3f5246" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let canopy = "";
    for (let x = 0; x < 400; x += 20) canopy += '<path d="M' + x + ' 50l10-10 10 10z" fill="#2c3a31"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg1)"/>' + stars(18) +
      '<circle cx="340" cy="24" r="12" fill="#fff3d6" opacity=".9"/>' +
      canopy + '<rect x="0" y="50" width="400" height="10" fill="#3f5246"/>' + girders +
      /* station sign */
      '<rect x="62" y="66" width="276" height="34" rx="4" fill="#111"/>' +
      '<rect x="62" y="66" width="276" height="4" fill="#fff"/>' +
      '<text x="74" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Morrison Av–Soundview</text>' +
      bullet(318, 84, "6", GREEN6) +
      /* the 6 train slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + GREEN6 + '"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(272, 168, "6", GREEN6) +
      '</g>' +
      /* platform edge + Westchester Av under the el */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#141c18"/>' +
      tag("UPTOWN BABY", 22, 240, 28, GOLD, -4) + tag("GUNZ", 300, 242, 32, BLUE, -8),
      sky("cg1", "#0c1424", "#3a5a7a"));
  }

  /* 2. Parkchester: red-brick towers with the glazed terracotta figures, the Metropolitan Oval fountain going */
  function oval() {
    const bldg = (x, w, h) => {
      let s = '<rect x="' + x + '" y="' + (200 - h) + '" width="' + w + '" height="' + h + '" fill="#8e3b2a"/>' +
        '<rect x="' + x + '" y="' + (200 - h) + '" width="' + w + '" height="5" fill="#d9c8a8"/>';
      for (let y = 200 - h + 14; y < 190; y += 14) for (let wx = x + 7; wx < x + w - 8; wx += 14) s += '<rect x="' + wx + '" y="' + y + '" width="7" height="8" fill="' + ((wx + y) % 3 ? "#ffd98a" : "#3a1a12") + '" opacity=".9"/>';
      return s;
    };
    /* glazed terracotta figures on plaques: a horse, a fish, a bird, in Parkchester's colors */
    const plaque = (x, y, inner) => '<rect x="' + (x - 14) + '" y="' + (y - 14) + '" width="28" height="28" rx="3" fill="#e9dcc0" stroke="#7a5a2a" stroke-width="1.5"/>' + inner;
    return svg(
      '<rect width="400" height="260" fill="url(#cg2)"/>' + stars(14) +
      bldg(0, 96, 150) + bldg(304, 96, 150) + bldg(110, 70, 120) + bldg(220, 70, 120) +
      plaque(48, 74, '<path d="M38 80q2-10 10-10l4-4 2 4q4 2 4 8h-4v4h-3v-4h-6v4h-3z" fill="#2f7fb8"/>') +
      plaque(352, 74, '<path d="M342 74q8-8 16 0q-8 8-16 0zM358 74l6-5v10z" fill="#e2871f"/><circle cx="346" cy="72" r="1.3" fill="#3a1a12"/>') +
      plaque(145, 104, '<path d="M137 108q4-10 12-8l4-4v6q-4 6-12 8zM149 100l3-6" stroke="#2e8a4e" stroke-width="2" fill="#2e8a4e"/>') +
      plaque(255, 104, '<circle cx="255" cy="104" r="7" fill="#c9372b"/><path d="M255 97v14M248 104h14" stroke="#f5c542" stroke-width="2"/>') +
      /* lawn + oval path */
      '<rect x="0" y="200" width="400" height="60" fill="#2d5a2e"/>' +
      '<ellipse cx="200" cy="226" rx="170" ry="22" fill="none" stroke="#c9bfa8" stroke-width="5"/>' +
      /* the fountain basin with jets */
      '<ellipse cx="200" cy="224" rx="70" ry="12" fill="#5b6a74"/><ellipse cx="200" cy="222" rx="62" ry="9" fill="#5fb3dd"/>' +
      '<rect x="194" y="188" width="12" height="34" fill="#b9b2a2"/><ellipse cx="200" cy="188" rx="22" ry="5" fill="#b9b2a2"/>' +
      '<path class="jet" d="M200 186q-4-26 0-40q4 14 0 40z" fill="#bfe8ff"/>' +
      '<path class="jet jet2" d="M186 214q-14-18-4-30q-2 14 6 30z" fill="#bfe8ff" opacity=".8"/>' +
      '<path class="jet jet2" d="M214 214q14-18 4-30q2 14-6 30z" fill="#bfe8ff" opacity=".8"/>' +
      '<circle class="drp" cx="190" cy="186" r="2" fill="#dff4ff"/><circle class="drp drp2" cx="210" cy="184" r="2" fill="#dff4ff"/><circle class="drp drp3" cx="200" cy="180" r="2" fill="#dff4ff"/>' +
      '<rect x="128" y="24" width="144" height="30" rx="4" fill="#1b3a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="45" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="2" textLength="124" lengthAdjust="spacingAndGlyphs" fill="#fff">PARKCHESTER</text>',
      sky("cg2", "#0d1830", "#3e5f8a"));
  }

  /* 3. Soundview Park at the mouth of the Bronx River, the Whitestone Bridge across the water */
  function river() {
    let deck = '<path d="M0 132q100-6 200 0t200 0" stroke="#9aa6ad" stroke-width="5" fill="none"/>';
    let cables = '<path d="M20 132Q90 78 130 64Q200 120 270 64Q310 78 380 132" stroke="#c3ccd1" stroke-width="2" fill="none"/>';
    for (let x = 30; x < 380; x += 12) {
      const y = x < 130 ? 132 - (x - 20) * 0.62 : x < 270 ? 64 + 28 * (1 - Math.pow((x - 200) / 70, 2)) : 64 + (x - 270) * 0.62;
      deck += '<path d="M' + x + ' ' + Math.min(130, y + 2) + 'V132" stroke="#c3ccd1" stroke-width=".8"/>';
    }
    const tower = x => '<rect x="' + (x - 6) + '" y="60" width="4" height="76" fill="#b8c2c8"/><rect x="' + (x + 2) + '" y="60" width="4" height="76" fill="#b8c2c8"/>' +
      '<rect x="' + (x - 6) + '" y="74" width="12" height="3" fill="#b8c2c8"/><rect x="' + (x - 6) + '" y="102" width="12" height="3" fill="#b8c2c8"/>';
    let grass = "";
    for (let x = 0; x < 400; x += 7) grass += '<path d="M' + x + ' 230q' + (x % 3 - 1) * 3 + '-' + (14 + x % 11) + ' ' + ((x % 5) - 2) + '-' + (20 + x % 9) + '" stroke="#8a9a3c" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg3)"/>' +
      '<circle cx="320" cy="44" r="20" fill="#ffd27a" opacity=".85"/>' +
      '<rect x="0" y="136" width="400" height="124" fill="#24506e"/>' +
      '<path d="M0 136h400" stroke="#47789a" stroke-width="2"/>' +
      tower(130) + tower(270) + cables + deck +
      '<g class="car"><rect x="0" y="126" width="10" height="4" rx="1" fill="#ffe08a"/></g><g class="car car2"><rect x="0" y="126" width="10" height="4" rx="1" fill="#ff6a5a"/></g>' +
      /* sailboat */
      '<g class="boat"><path d="M0 170h30l-5 7h-20z" fill="#f4efe6"/><path d="M15 168v-28l14 26z" fill="#fff"/><path d="M14 168v-22l-10 20z" fill="' + RED + '"/></g>' +
      '<g class="wav"><path d="M0 190q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6ea3c5" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<g class="wav wav2"><path d="M0 206q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6ea3c5" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* the park shore and marsh grass */
      '<path d="M0 218q120-14 240-4t160-4v50H0z" fill="#3e5a2a"/>' + grass +
      '<g class="fly"><path d="M0 70q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="1.8" fill="none"/></g>' +
      '<rect x="18" y="20" width="168" height="44" rx="4" fill="#1b3a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="102" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="1" textLength="148" lengthAdjust="spacingAndGlyphs" fill="#fff">SOUNDVIEW PARK</text>' +
      '<text x="102" y="57" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="1" textLength="148" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">BRONX RIVER · EAST RIVER</text>',
      sky("cg3", "#2a2a5a", "#e8946a"));
  }

  /* 4. Orchard Beach: the crescent pavilion's colonnade in tan brick with blue-green trim, waves rolling in */
  function beach() {
    let cols = "";
    for (let i = 0; i < 17; i++) {
      const x = 22 + i * 22, y = 96 + Math.pow((i - 8) / 8, 2) * 22;
      cols += '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (64 - Math.pow((i - 8) / 8, 2) * 10) + '" fill="#e6d3ae"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#cg4)"/>' +
      '<circle cx="64" cy="40" r="18" fill="#fff1b8"/>' +
      /* curved pavilion: roof band, colonnade, base */
      '<path d="M10 92Q200 60 390 92v14Q200 76 10 106z" fill="#2f9c95"/>' +
      '<path d="M10 92Q200 60 390 92" stroke="#e6d3ae" stroke-width="3" fill="none"/>' +
      '<path d="M14 106Q200 78 386 106V170Q200 150 14 170z" fill="#c7a77a"/>' + cols +
      '<path d="M14 168Q200 148 386 168v10Q200 158 14 178z" fill="#2f9c95"/>' +
      /* central block with clock-like medallion */
      '<rect x="176" y="66" width="48" height="96" fill="#d6bc8e"/><rect x="176" y="66" width="48" height="6" fill="#2f9c95"/>' +
      '<circle cx="200" cy="96" r="12" fill="#2f9c95" stroke="#e6d3ae" stroke-width="2"/><path d="M194 96q6-8 12 0q-6 8-12 0z" fill="#e6d3ae"/>' +
      '<path d="M186 162v-34a14 14 0 0 1 28 0v34z" fill="#3a2a1a"/>' +
      /* sand + water */
      '<rect x="0" y="176" width="400" height="34" fill="#e8d3a2"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2b74a8"/>' +
      '<g class="wav"><path d="M-20 208q20-7 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#f4fbff" stroke-width="3" fill="none"/></g>' +
      '<g class="wav wav2"><path d="M-20 228q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe3f5" stroke-width="2" fill="none" opacity=".7"/></g>' +
      /* umbrella + gulls */
      '<path d="M320 196v-26" stroke="#5a4630" stroke-width="2"/><path d="M300 172q20-18 40 0z" fill="' + RED + '"/><path d="M310 172q10-18 10 0" fill="#fff" opacity=".8"/>' +
      '<g class="gull"><path d="M250 46q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<g class="gull" style="animation-delay:.6s"><path d="M290 30q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      tag("ORCHARD BEACH", 24, 34, 22, GOLD, -3),
      sky("cg4", "#5fb4e8", "#cfeeff"));
  }

  /* 5. Westchester Av and Morrison Av, under the 6: street signs, streetlight, the tag wall */
  function corner() {
    let el = "";
    for (let x = 0; x <= 400; x += 64) el += '<rect x="' + (x - 3) + '" y="20" width="7" height="200" fill="#34443a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg5)"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#34443a"/>' + el +
      '<path d="M0 22h400" stroke="#4d6356" stroke-width="3"/>' +
      /* wall with the tags */
      '<rect x="16" y="66" width="240" height="154" fill="#5a4a44"/>' +
      (function () { let b = ""; for (let y = 70; y < 220; y += 12) b += '<path d="M16 ' + y + 'h240" stroke="#4a3c37" stroke-width="1"/>'; return b; })() +
      tag("CORY GUNZ", 26, 140, 34, GOLD, -7) + tag("96 ERA", 60, 196, 28, BLUE, -3) +
      /* streetlight with flicker */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="256" y="88" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="306" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Westchester Av</text>' +
      '<rect x="262" y="110" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="306" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Morrison Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("cg5", "#0c1424", "#26405a"));
  }

  window.SCENES = { train, oval, river, beach, corner };
})();
