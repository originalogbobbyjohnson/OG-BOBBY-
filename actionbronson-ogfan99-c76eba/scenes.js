/* Flushing opening scenes for the Action Bronson game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-30px);opacity:0}}' +
    '.stm{animation:steam 2.6s ease-out infinite}.stm2{animation-delay:.9s}.stm3{animation-delay:1.7s}' +
    '@keyframes jet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.72)}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.6s ease-in-out infinite}.jet2{animation-delay:.5s}.jet3{animation-delay:1s}' +
    '@keyframes orbit{0%,100%{opacity:1}50%{opacity:.55}}' +
    '.orb{animation:orbit 3s ease-in-out infinite}' +
    '@keyframes ride{from{transform:translateX(420px)}to{transform:translateX(-330px)}}' +
    '.ride{animation:ride 9s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}' +
    '.swy{transform-box:fill-box;transform-origin:50% 0;animation:sway 2.6s ease-in-out infinite}.swy2{animation-delay:.6s}.swy3{animation-delay:1.2s}' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.cld{animation:drift 24s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.blk{animation:blink 1.8s infinite}.blk2{animation-delay:.6s}.blk3{animation-delay:1.2s}' +
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
  const GOLD = "#ffd23f", PURPLE = "#b933ad", CHILI = "#e8452c", STEEL = "#cfd6de";

  /* 1. The 7 pulling into Flushing–Main St, underground at the end of the line */
  function train() {
    let tiles = "";
    for (let y = 22; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfc8b4" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 22v96" stroke="#cfc8b4" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="104" width="8" height="8" fill="' + (x % 32 ? PURPLE : "#3c2a5a") + '"/>';
    let cols = "";
    [38, 362].forEach(x => cols += '<rect x="' + (x - 5) + '" y="16" width="10" height="164" fill="#232030"/><rect x="' + (x - 8) + '" y="16" width="16" height="6" fill="#232030"/>');
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#14111a"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#0c0a10"/>' +
      '<rect class="flk" x="70" y="10" width="90" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="240" y="10" width="90" height="4" rx="2" fill="#fff6d8"/>' +
      /* cream tile wall with a purple band */
      '<rect x="0" y="16" width="400" height="104" fill="#ebe4d0"/>' + tiles + band +
      '<rect x="0" y="16" width="400" height="6" fill="' + PURPLE + '"/>' +
      /* station sign */
      '<rect x="84" y="40" width="232" height="38" rx="4" fill="#111"/>' +
      '<rect x="84" y="40" width="232" height="4" fill="#fff"/>' +
      '<text x="98" y="68" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Flushing–Main St</text>' +
      bullet(292, 62, "7", PURPLE) +
      cols +
      /* the 7 slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(292, 140, "7", PURPLE) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1620"/>' +
      tag("BAKLAVA", 22, 238, 30, GOLD, -4) + tag("BAM BAM", 262, 240, 28, CHILI, -8));
  }

  /* 2. The Unisphere: the stainless-steel globe in Flushing Meadows, fountains running */
  function unisphere() {
    const cx = 200, cy = 104, r = 66;
    let grid = "";
    [-44, -22, 0, 22, 44].forEach(d => grid += '<ellipse cx="' + cx + '" cy="' + (cy + d) + '" rx="' + Math.sqrt(r * r - d * d).toFixed(1) + '" ry="' + (Math.sqrt(r * r - d * d) * 0.16).toFixed(1) + '" fill="none" stroke="#7d8894" stroke-width="1.2"/>');
    [12, 30, 48, 62].forEach(w => grid += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + w + '" ry="' + r + '" fill="none" stroke="#7d8894" stroke-width="1.2"/>');
    const land = '<g fill="#eef2f6" stroke="#8a96a3" stroke-width="1">' +
      /* North + South America on the near side */
      '<path d="M150 58q14-12 34-8q10 6 6 16q-10 6-14 16q-2 10-10 12q-8-2-12-12q-6-12-4-24z"/>' +
      '<path d="M176 108q10-2 14 8q2 14-6 28q-6 10-10 4q-2-12-2-20q-4-12 4-20z"/>' +
      /* Europe + Africa curving round the right edge */
      '<path d="M224 56q12-4 20 4q-2 8-10 8q-8 0-10-12z"/>' +
      '<path d="M226 80q16-4 24 8q4 14-4 28q-6 12-12 6q-4-10-6-20q-6-12-2-22z"/></g>';
    const fountain = (x, cls) => '<path class="jet ' + cls + '" d="M' + (x - 3) + ' 214q3-34 3-46q0 12 3 46z" fill="#d6f1ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#u1)"/>' +
      '<g class="cld"><ellipse cx="60" cy="40" rx="36" ry="10" fill="#fff" opacity=".8"/><ellipse cx="84" cy="34" rx="22" ry="9" fill="#fff" opacity=".8"/></g>' +
      /* trees on the horizon */
      '<path d="M0 196q20-18 40-4q18-16 40 0q22-14 40 2q20-12 40 0v14H0z M240 196q20-16 40-2q22-14 40 0q20-16 40 0q22-12 40 2v14H240z" fill="#2f6b3a"/>' +
      /* back half of the orbit rings */
      '<g transform="rotate(-23.5 ' + cx + ' ' + cy + ')" class="orb">' +
        '<ellipse cx="' + cx + '" cy="' + cy + '" rx="92" ry="22" fill="none" stroke="#aeb7c1" stroke-width="2.5"/>' +
        '<ellipse cx="' + cx + '" cy="' + cy + '" rx="84" ry="40" fill="none" stroke="#aeb7c1" stroke-width="2" transform="rotate(48 ' + cx + ' ' + cy + ')"/>' +
        '<ellipse cx="' + cx + '" cy="' + cy + '" rx="80" ry="30" fill="none" stroke="#aeb7c1" stroke-width="2" transform="rotate(-52 ' + cx + ' ' + cy + ')"/>' +
      '</g>' +
      /* the globe, tilted, steel grid with continents */
      '<g transform="rotate(-23.5 ' + cx + ' ' + cy + ')">' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="url(#u2)" opacity=".55"/>' + grid + land +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#8a96a3" stroke-width="2"/>' +
      '</g>' +
      '<circle cx="255" cy="44" r="4" fill="#fff"/><circle cx="128" cy="150" r="3" fill="#fff"/>' +
      /* tripod base */
      '<path d="M200 170l-22 40h10l12-26 12 26h10z" fill="#9aa4ae" stroke="#5b6570" stroke-width="1.5"/>' +
      /* reflecting pool + fountains */
      '<ellipse cx="200" cy="222" rx="196" ry="20" fill="#4aa3c9"/><ellipse cx="200" cy="222" rx="196" ry="20" fill="none" stroke="#d9d2c0" stroke-width="5"/>' +
      fountain(60, "") + fountain(110, "jet2") + fountain(150, "jet3") + fountain(250, "jet2") + fountain(290, "") + fountain(340, "jet3") +
      '<rect x="0" y="240" width="400" height="20" fill="#d9d2c0"/>' +
      tag("FLUSHING", 18, 252, 22, GOLD, -3),
      sky("u1", "#3d7fd1", "#a8d4f2") + '<radialGradient id="u2" cx=".35" cy=".35" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#7d8894"/></radialGradient>');
  }

  /* 3. The New York State Pavilion: the three towers and the Tent of Tomorrow, the 7 rolling by on the el */
  function pavilion() {
    let tent = "";
    for (let i = 0; i < 9; i++) { const x = 196 + i * 22; tent += '<rect x="' + (x - 3) + '" y="118" width="6" height="84" fill="#e2a52e"/>'; }
    const tower = (x, top, deckW) =>
      '<rect x="' + (x - 7) + '" y="' + top + '" width="5" height="' + (202 - top) + '" fill="#b9b3a6"/><rect x="' + (x + 2) + '" y="' + top + '" width="5" height="' + (202 - top) + '" fill="#a39d91"/>' +
      '<path d="M' + (x - deckW) + ' ' + top + 'h' + (deckW * 2) + 'l-6 10h-' + (deckW * 2 - 12) + 'z" fill="#d8d1c2" stroke="#7a7466" stroke-width="1.5"/>' +
      '<rect x="' + (x - deckW + 6) + '" y="' + (top - 7) + '" width="' + (deckW * 2 - 12) + '" height="7" fill="#7a7466"/>' +
      '<rect class="blk" x="' + (x - 2) + '" y="' + (top - 12) + '" width="4" height="4" fill="#ff5a4f"/>';
    let el = "";
    for (let x = 0; x <= 400; x += 40) el += '<rect x="' + (x - 2) + '" y="220" width="4" height="40" fill="#3b3550"/>';
    let carWin = "";
    for (let x = 6; x < 300; x += 24) carWin += '<rect x="' + x + '" y="207" width="14" height="7" rx="1" fill="#ffe9b0" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p1)"/>' + stars(22) +
      '<circle cx="64" cy="40" r="14" fill="#fff4d6" opacity=".9"/>' +
      /* towers: short, middle, tall */
      tower(70, 168, 20) + tower(116, 108, 18) + tower(160, 48, 22) +
      /* Tent of Tomorrow: the ring of columns and roof band in that "American Cheese" yellow */
      '<path d="M190 112q90-16 180 0v10q-90-16-180 0z" fill="#f2b632" stroke="#a87412" stroke-width="1.5"/>' + tent +
      '<path d="M190 118q90-14 180 0" fill="none" stroke="#a87412" stroke-width="2"/>' +
      /* the park ground */
      '<rect x="0" y="200" width="400" height="20" fill="#1f3a2a"/>' +
      /* the el and the 7 running across */
      '<g class="ride"><rect x="0" y="202" width="310" height="16" rx="3" fill="#c3c8cf" stroke="#6b7280" stroke-width="1"/>' + carWin +
      '<circle cx="302" cy="210" r="3" fill="#fff6c2"/><circle cx="298" cy="210" r="0" fill="none"/></g>' +
      '<rect x="0" y="218" width="400" height="5" fill="#3b3550"/>' + el +
      '<rect x="0" y="236" width="400" height="24" fill="#120f1c"/>' +
      bullet(370, 244, "7", PURPLE) +
      '<rect x="206" y="36" width="160" height="40" rx="4" fill="#1a1530" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="286" y="55" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="1" fill="#fff">STATE PAVILION</text>' +
      '<text x="286" y="70" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="' + GOLD + '">WORLD\'S FAIR 1964</text>',
      sky("p1", "#0b1030", "#3a2a66"));
  }

  /* 4. Main Street food stall: red lanterns, bamboo steamers going, dumplings on the counter */
  function dumplings() {
    const lantern = (x, cls) => '<g class="swy ' + cls + '"><path d="M' + x + ' 26v10" stroke="#2a1410" stroke-width="2"/>' +
      '<ellipse cx="' + x + '" cy="50" rx="16" ry="14" fill="#d7262e"/><rect x="' + (x - 8) + '" y="34" width="16" height="4" fill="' + GOLD + '"/><rect x="' + (x - 8) + '" y="62" width="16" height="4" fill="' + GOLD + '"/>' +
      '<path d="M' + x + ' 66v10" stroke="' + GOLD + '" stroke-width="2"/></g>';
    const steamer = (x, y) => '<rect x="' + (x - 26) + '" y="' + y + '" width="52" height="16" rx="3" fill="#d9b26b" stroke="#8a6a32" stroke-width="2"/><path d="M' + (x - 24) + ' ' + (y + 6) + 'h48" stroke="#8a6a32" stroke-width="1"/>';
    const dump = (x, y) => '<path d="M' + (x - 8) + ' ' + y + 'q8-12 16 0z" fill="#fbf3e2" stroke="#d6c7a6" stroke-width="1"/><path d="M' + (x - 4) + ' ' + (y - 4) + 'l2-3M' + x + ' ' + (y - 5) + 'v-3M' + (x + 4) + ' ' + (y - 4) + 'l-2-3" stroke="#d6c7a6" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b0d0b"/>' +
      /* storefront sign */
      '<rect x="0" y="0" width="400" height="26" fill="#2a1410"/>' +
      '<rect x="128" y="84" width="144" height="32" rx="3" fill="#b5161f" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="flk" x="200" y="107" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="19" letter-spacing="3" textLength="122" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">DUMPLINGS</text>' +
      lantern(40, "") + lantern(120, "swy2") + lantern(280, "swy3") + lantern(360, "") +
      /* window glow */
      '<rect x="30" y="122" width="340" height="70" fill="#3a1a12"/><rect x="40" y="128" width="320" height="58" fill="#ffcf8a" opacity=".22"/>' +
      /* stacked steamers with steam */
      steamer(84, 150) + steamer(84, 134) + '<path d="M58 134q26-14 52 0z" fill="#c99f58" stroke="#8a6a32" stroke-width="2"/>' +
      steamer(316, 156) + steamer(316, 140) + '<path d="M290 140q26-14 52 0z" fill="#c99f58" stroke="#8a6a32" stroke-width="2"/>' +
      '<path class="stm" d="M76 126q-5-7 0-13t0-13" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>' +
      '<path class="stm stm2" d="M90 126q-5-7 0-13t0-13" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>' +
      '<path class="stm stm3" d="M310 132q-5-7 0-13t0-13" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>' +
      '<path class="stm" d="M324 132q-5-7 0-13t0-13" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>' +
      /* counter + a plate of dumplings */
      '<rect x="0" y="192" width="400" height="14" fill="#6b2a1a"/><rect x="0" y="206" width="400" height="54" fill="#2a1410"/>' +
      '<ellipse cx="200" cy="190" rx="54" ry="9" fill="#f4efe6" stroke="#2f6bb3" stroke-width="3"/>' +
      dump(176, 190) + dump(194, 189) + dump(212, 190) + dump(228, 190) + dump(186, 184) + dump(204, 183) + dump(220, 184) +
      '<path d="M248 176l30-22M254 180l30-22" stroke="#c99f58" stroke-width="3" stroke-linecap="round"/>' +
      tag("DELICIOUS", 120, 246, 30, GOLD, -4));
  }

  /* 5. Main Street and Roosevelt Avenue: street signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? 6 : 16; x < 230; x += 22) bricks += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#3e2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(16) +
      /* storefronts up top with lit windows */
      '<rect x="0" y="28" width="260" height="42" fill="#221a2a"/><rect x="0" y="24" width="260" height="6" fill="#3a2c48"/>' +
      '<rect class="blk" x="20" y="38" width="20" height="24" fill="#ffcf6b" opacity=".6"/><rect class="blk blk2" x="90" y="38" width="20" height="24" fill="#ff8a6b" opacity=".5"/><rect class="blk blk3" x="170" y="38" width="20" height="24" fill="#ffcf6b" opacity=".6"/>' +
      /* tag wall */
      '<rect x="6" y="70" width="244" height="150" fill="#2c1c2a"/>' + bricks +
      tag("BRONSON", 22, 146, 40, GOLD, -7) + tag("FLUSHING", 52, 196, 26, PURPLE, -3) +
      /* subway entrance globe */
      '<rect x="262" y="160" width="4" height="60" fill="#1d2329"/><circle class="flk" cx="264" cy="156" r="7" fill="#3fd17a"/>' +
      '<rect x="262" y="196" width="40" height="24" fill="#1d2329"/><text x="282" y="212" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">SUBWAY</text>' +
      /* streetlight */
      '<rect x="330" y="50" width="5" height="170" fill="#1d2329"/><path d="M332 52h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk flk2" d="M348 56h24l-6 8h-12z" fill="#ffe7a8"/><g opacity=".14"><path class="flk flk2" d="M348 64h24l26 156h-80z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="296" y="86" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="334" y="99" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="284" y="108" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="334" y="121" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Roosevelt Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14121a"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("c5", "#0d0d22", "#3a2048"));
  }

  window.SCENES = { train, unisphere, pavilion, dumplings, corner };
})();
