/* Black Star game (NYC map, Brooklyn: Fort Greene). Mos Def (Yasiin Bey) and Talib Kweli as a group.
   1. The B25 pulling up to Fulton St / Carlton Av in Fort Greene, brownstones behind.
   2. The Brooklyn Moon Cafe at 745 Fulton St, the Friday open mic of the late-90s Brooklyn scene: the crescent moon in the window, a poet at the mic.
   3. The Lyricist Lounge at 45 Orchard St on the Lower East Side, the open-mic showcase Black Star headlined on tour: tenement, fire escapes, the line outside.
   4. The SS Yarmouth of Marcus Garvey's Black Star Line (the ship line the duo named themselves after) steaming across the Atlantic.
   5. Fulton St & Cumberland St, BLACK STAR tagged on the wall, the Brooklyn Masonic Temple's buff brick and terracotta behind, a night full of stars.
   400 x 260 SVGs. No logos, no faces. All animation classes are prefixed bk- so they never clash with the game's CSS. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bkflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.bk-flk{animation:bkflk 2.4s infinite}' +
    '@keyframes bktw{0%,100%{opacity:.2}50%{opacity:1}}.bk-tw{animation:bktw 2s ease-in-out infinite}.bk-tw2{animation-delay:.7s}.bk-tw3{animation-delay:1.3s}' +
    '@keyframes bkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bk-bob{animation:bkbob .6s ease-in-out infinite}.bk-bob2{animation-delay:.3s}' +
    '@keyframes bkwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.bk-wv{animation:bkwave 2.6s linear infinite}.bk-wv2{animation-duration:3.6s}' +
    '@keyframes bkrock{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}.bk-rock{transform-box:fill-box;transform-origin:50% 100%;animation:bkrock 3s ease-in-out infinite}' +
    '@keyframes bksmoke{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(-50px,-40px) scale(1.6);opacity:0}}.bk-sm{transform-box:fill-box;transform-origin:50% 50%;animation:bksmoke 3s linear infinite}.bk-sm2{animation-delay:1s}.bk-sm3{animation-delay:2s}' +
    '@keyframes bknote{0%{transform:translateY(0);opacity:0}30%{opacity:1}100%{transform:translateY(-34px);opacity:0}}.bk-note{animation:bknote 2.4s ease-out infinite}.bk-note2{animation-delay:1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const busBullet = (x, y, r) => '<rect x="' + (x - 20) + '" y="' + (y - 11) + '" width="40" height="22" rx="11" fill="#0039a6"/>' + txt(r, x, y + 5, 13, "#fff");
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const star5 = (cx, cy, r, fill, extra) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; p += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + fill + '" ' + (extra || "") + '/>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="bk-tw bk-tw' + (i % 3 + 1) + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const GOLD = "#e8c547", CREAM = "#f4ecd8", RUST = "#b5532e";
  /* a brownstone: stoop, cornice, windows */
  const brownstone = (x, w, h, col) => { let g = '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/><rect x="' + (x - 2) + '" y="' + (186 - h) + '" width="' + (w + 4) + '" height="6" fill="#3a2a22"/>';
    for (let yy = 200 - h; yy < 160; yy += 24) for (let xx = x + 8; xx < x + w - 10; xx += 18) g += '<rect x="' + xx + '" y="' + yy + '" width="10" height="16" fill="' + ((xx + yy) % 3 ? "#ffd98a" : "#2b2320") + '" opacity=".85"/>';
    return g; };

  /* 1. Fulton St / Carlton Av: the B25 pulling in, the black stop sign with the route pill, Fort Greene brownstones */
  function busstop() {
    let win = "";
    for (let x = 34; x < 236; x += 30) win += '<rect x="' + x + '" y="150" width="22" height="20" rx="2" fill="#bcd6ee"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bks0)"/>' + stars(20) +
      brownstone(0, 76, 130, "#7a4a36") + brownstone(80, 70, 120, "#6b3f2e") + brownstone(154, 74, 136, "#80503a") + brownstone(232, 70, 124, "#6b3f2e") + brownstone(306, 94, 132, "#7a4a36") +
      '<rect x="0" y="190" width="400" height="12" fill="#9a9a96"/><rect x="0" y="202" width="400" height="58" fill="#3e4044"/>' +
      '<path d="M0 236h40M70 236h40M140 236h40M210 236h40M280 236h40M350 236h40" stroke="#e8d36a" stroke-width="3"/>' +
      '<g class="anim-train">' +
        '<rect x="16" y="140" width="250" height="62" rx="8" fill="#f2f2ee" stroke="#8b9096" stroke-width="2"/>' + win +
        '<rect x="16" y="178" width="250" height="7" fill="#0039a6"/>' +
        '<rect x="244" y="146" width="18" height="34" rx="3" fill="#bcd6ee"/>' +
        '<rect x="30" y="142" width="150" height="6" rx="2" fill="#141414"/>' +
        '<text x="36" y="147.5" font-family="Courier New, monospace" font-weight="700" font-size="6" fill="#ffb21f">B25 BROADWAY JUNCTION</text>' +
        '<circle cx="62" cy="203" r="11" fill="#151515"/><circle cx="62" cy="203" r="4" fill="#888"/><circle cx="214" cy="203" r="11" fill="#151515"/><circle cx="214" cy="203" r="4" fill="#888"/>' +
        '<circle cx="262" cy="190" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="332" y="70" width="5" height="124" fill="#5b6066"/>' +
      '<rect x="292" y="40" width="92" height="40" rx="3" fill="#111"/><rect x="292" y="40" width="92" height="3" fill="#fff"/>' +
      txt("Fulton St /", 338, 56, 11, "#fff") + txt("Carlton Av", 338, 71, 11, "#fff") +
      busBullet(338, 96, "B25") +
      person(356, 164, "#1f1f22") + person(378, 168, "#3a2a20") +
      txt("FORT GREENE · BROOKLYN", 150, 24, 11, CREAM, 'letter-spacing="3"'),
      sky("bks0", "#0d1030", "#3a2e5a"));
  }

  /* 2. The Brooklyn Moon Cafe: the storefront glowing on Fulton St, a crescent moon in the window, the open-mic chalkboard, a poet at the mic */
  function moon() {
    let brick = "";
    for (let y = 20; y < 210; y += 8) for (let x = (y / 8) % 2 ? 0 : -10; x < 400; x += 20) brick += '<rect x="' + x + '" y="' + y + '" width="19" height="7" fill="#7a3e2c"/>';
    return svg(
      '<rect width="400" height="260" fill="#5e2e20"/>' + brick +
      '<rect x="0" y="0" width="400" height="20" fill="#120f1e"/>' + stars(8).replace(/cy="(\d+)/g, (m, v) => 'cy="' + (v % 18 + 2)) +
      /* upper windows */
      [60, 150, 250, 340].map(x => '<rect x="' + (x - 16) + '" y="30" width="32" height="40" fill="#2a2420"/><rect x="' + (x - 14) + '" y="32" width="28" height="36" fill="#ffd98a" opacity=".35"/>').join("") +
      /* awning */
      '<path d="M40 84 L360 84 L376 110 L24 110z" fill="#1e2a5a"/>' +
      [40, 80, 120, 160, 200, 240, 280, 320].map(x => '<path d="M' + x + ' 110 q20 10 40 0" fill="#1e2a5a"/>').join("") +
      txt("CAFE · FULTON ST", 200, 102, 13, CREAM, 'letter-spacing="4"') +
      /* the shop window */
      '<rect x="40" y="122" width="320" height="94" fill="#2a1c14"/>' +
      '<rect x="48" y="128" width="190" height="82" fill="#f6c46a" opacity=".9"/>' +
      '<circle cx="104" cy="160" r="24" fill="#fff4cf"/><circle cx="116" cy="154" r="22" fill="#f6c46a"/>' +
      '<g class="bk-tw"><path d="M150 140l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff"/></g>' +
      /* a poet at the mic inside */
      '<g class="bk-bob"><circle cx="196" cy="164" r="7" fill="#2a1a12"/><rect x="189" y="172" width="14" height="30" rx="6" fill="#2a1a12"/></g>' +
      '<path d="M178 210 L178 172" stroke="#333" stroke-width="2"/><rect x="175" y="166" width="6" height="9" rx="3" fill="#333"/>' +
      '<g class="bk-note"><path d="M218 150v-12l8-2v12" stroke="#5a2e20" stroke-width="2" fill="none"/><circle cx="216" cy="150" r="2.5" fill="#5a2e20"/></g>' +
      /* door */
      '<rect x="250" y="128" width="40" height="88" fill="#3a2418"/><rect x="256" y="134" width="28" height="44" fill="#f6c46a" opacity=".6"/>' +
      /* chalkboard */
      '<g class="bk-rock"><rect x="306" y="150" width="46" height="46" rx="2" fill="#1d2a22" stroke="#7a5a3a" stroke-width="3"/>' +
      txt("OPEN", 329, 166, 9, "#fff") + txt("MIC", 329, 178, 9, GOLD) + txt("FRIDAY", 329, 190, 7, "#fff") + '</g>' +
      '<path d="M310 196 L304 216 M348 196 L354 216" stroke="#7a5a3a" stroke-width="3"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#56575b"/><rect x="0" y="216" width="400" height="4" fill="#8a8b8e"/>' +
      person(30, 196, "#1a1418", "bk-bob bk-bob2") +
      txt("THE BROOKLYN MOON · OPEN MIC", 200, 246, 10, GOLD, 'letter-spacing="2"'),
      "");
  }

  /* 3. The Lyricist Lounge at 45 Orchard St: the Lower East Side tenement, fire escapes, the hand-painted banner, the line out the door */
  function lounge() {
    const fireEscape = (x, y) => '<rect x="' + x + '" y="' + y + '" width="70" height="3" fill="#1a1a1a"/><path d="M' + x + ' ' + y + 'v-14M' + (x + 70) + ' ' + y + 'v-14M' + x + ' ' + (y - 14) + 'h70" stroke="#1a1a1a" stroke-width="1.5"/>' +
      (() => { let r = ""; for (let i = 6; i < 70; i += 8) r += '<path d="M' + (x + i) + ' ' + y + 'v-14" stroke="#1a1a1a" stroke-width="1"/>'; return r; })() + '<path d="M' + (x + 10) + ' ' + y + 'l40 34" stroke="#1a1a1a" stroke-width="2"/>';
    let wins = "";
    for (let y = 30; y < 150; y += 34) for (let x = 60; x < 360; x += 50) wins += '<rect x="' + x + '" y="' + y + '" width="20" height="24" fill="' + ((x + y) % 3 ? "#ffd98a" : "#1c1a20") + '" opacity=".85"/><rect x="' + (x - 2) + '" y="' + (y - 4) + '" width="24" height="4" fill="#cdbb9a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bks2)"/>' + stars(14) +
      '<rect x="40" y="18" width="330" height="198" fill="#8a5a42"/><rect x="36" y="12" width="338" height="10" fill="#4a3428"/>' + wins +
      fireEscape(54, 82) + fireEscape(54, 116) + fireEscape(254, 82) + fireEscape(254, 116) +
      /* storefront + banner */
      '<rect x="40" y="160" width="330" height="56" fill="#2a2228"/>' +
      '<g class="bk-rock"><rect x="104" y="146" width="200" height="26" fill="' + CREAM + '" stroke="#1a1a1a" stroke-width="2"/>' +
      '<text x="204" y="165" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="17" fill="#c8302a">LYRICIST LOUNGE</text></g>' +
      '<rect x="180" y="176" width="44" height="40" fill="#ffcf6a" opacity=".85"/><path d="M202 176v40" stroke="#2a2228" stroke-width="2"/>' +
      txt("45 ORCHARD ST", 300, 196, 9, GOLD, 'letter-spacing="1"') +
      '<rect x="0" y="216" width="400" height="44" fill="#56575b"/><rect x="0" y="216" width="400" height="4" fill="#8a8b8e"/>' +
      [40, 62, 84, 106, 128, 150].map((x, i) => person(x, 192, ["#1a1418", "#2a2030", "#1f1a14"][i % 3], "bk-bob" + (i % 2 ? " bk-bob2" : ""))).join("") +
      txt("LOWER EAST SIDE · OPEN MIC", 200, 248, 10, CREAM, 'letter-spacing="3"'),
      sky("bks2", "#151530", "#40305a"));
  }

  /* 4. The SS Yarmouth of the Black Star Line, steaming across the Atlantic: black hull, the band with the black star on the funnel, smoke, rolling waves */
  function ship() {
    const waves = (y, col, cls) => { let d = "M-40 " + y; for (let x = -40; x < 480; x += 40) d += " q10 -8 20 0 q10 8 20 0"; return '<g class="' + cls + '"><path d="' + d + ' L480 260 L-40 260z" fill="' + col + '"/></g>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#bks3)"/>' +
      '<circle cx="330" cy="70" r="26" fill="#ffd27a" opacity=".9"/>' +
      waves(176, "#2a5a7a", "bk-wv") +
      '<g class="bk-rock">' +
        /* smoke */
        '<circle class="bk-sm" cx="214" cy="70" r="10" fill="#bbb"/><circle class="bk-sm bk-sm2" cx="214" cy="70" r="10" fill="#aaa"/><circle class="bk-sm bk-sm3" cx="214" cy="70" r="10" fill="#c4c4c4"/>' +
        /* masts + rigging */
        '<path d="M120 160V58M300 160V64" stroke="#3a2a1a" stroke-width="3"/><path d="M120 62L214 82L300 66" stroke="#3a2a1a" stroke-width="1" fill="none"/>' +
        '<path d="M300 64l22 6l-22 6z" fill="' + RUST + '"/>' +
        /* funnel */
        '<rect x="202" y="80" width="26" height="54" fill="#e8dcc0"/><rect x="202" y="96" width="26" height="16" fill="' + GOLD + '"/>' + star5(215, 104, 7, "#111") +
        '<rect x="200" y="76" width="30" height="6" fill="#1a1a1a"/>' +
        /* superstructure */
        '<rect x="150" y="132" width="130" height="18" fill="#f2eee2"/>' + [158, 172, 186, 238, 252, 266].map(x => '<circle cx="' + x + '" cy="141" r="3" fill="#2a4a6a"/>').join("") +
        '<rect x="170" y="120" width="40" height="14" fill="#f2eee2"/>' +
        /* hull */
        '<path d="M60 150 L350 150 L330 186 L84 186z" fill="#141414"/><path d="M60 150 L350 150 L348 156 L62 156z" fill="#7a1a14"/>' +
        txt("YARMOUTH", 120, 174, 10, CREAM, 'letter-spacing="2"') +
      '</g>' +
      waves(188, "#1e4864", "bk-wv bk-wv2") +
      txt("THE BLACK STAR LINE", 200, 30, 16, CREAM, 'letter-spacing="4"') +
      txt("MARCUS GARVEY'S STEAMSHIP, WHERE THE NAME COMES FROM", 200, 244, 8.5, GOLD, 'letter-spacing="1"'),
      sky("bks3", "#f0b27a", "#7ab6d6"));
  }

  /* 5. Fulton St & Cumberland St: BLACK STAR tagged on the wall, the Brooklyn Masonic Temple's buff brick and terracotta behind, stars out */
  function corner() {
    let cols = "";
    for (let x = 116; x < 300; x += 34) cols += '<rect x="' + x + '" y="62" width="8" height="70" fill="#d9c49a"/>';
    let arch = "";
    for (let x = 128; x < 292; x += 34) arch += '<path d="M' + (x - 2) + ' 132 V84 a12 12 0 0 1 24 0 V132z" fill="#2a2a3a"/><path class="bk-tw" d="M' + (x + 2) + ' 130 V86 a8 8 0 0 1 16 0 V130z" fill="#ffd27a" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bks4)"/>' + stars(30) +
      star5(60, 36, 9, GOLD, 'class="bk-tw"') + star5(352, 24, 6, CREAM, 'class="bk-tw bk-tw2"') +
      /* the Masonic Temple: buff brick block, polychrome terracotta frieze, tall arched windows */
      '<rect x="100" y="50" width="210" height="96" fill="#c9a874"/>' + cols + arch +
      '<rect x="96" y="40" width="218" height="12" fill="#b04a30"/>' +
      (() => { let f = ""; for (let x = 100; x < 310; x += 14) f += '<rect x="' + x + '" y="42" width="7" height="8" fill="' + ((x / 14) % 2 ? "#2f6e8a" : GOLD) + '"/>'; return f; })() +
      '<rect x="92" y="34" width="226" height="7" fill="#8a3a24"/>' +
      txt("BROOKLYN MASONIC TEMPLE", 205, 26, 9, CREAM, 'letter-spacing="2" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("BLACK STAR", 14, 198, 46, GOLD, -5) + tag("KEEP SHINING", 196, 220, 19, CREAM, -4) + tag("MOS + KWELI", 20, 222, 14, "#e86a4a", -3) +
      star5(286, 176, 14, "#111", 'stroke="' + GOLD + '" stroke-width="2"') +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="356" y="60" width="5" height="168" fill="#3d4b3f"/>' +
      '<rect x="294" y="64" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Fulton St", 346, 80, 12, "#fff") +
      '<rect x="294" y="90" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Cumberland St", 346, 106, 11, "#fff") +
      '<circle class="bk-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("bks4", "#06061a", "#24204a"));
  }

  window.SCENES = { busstop: busstop, moon: moon, lounge: lounge, ship: ship, corner: corner };
})();
