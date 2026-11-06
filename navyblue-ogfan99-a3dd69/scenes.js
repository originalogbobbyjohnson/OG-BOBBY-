/* Navy Blue game (NYC map, Brooklyn: Bed-Stuy, where Sage Elsesser says the Navy Blue project blossomed).
   The J/Z up on the Broadway el at Chauncey St, Little Ethiopia on Fairfax Av in Mid-City LA (where he came up skating),
   Tompkins Square Park (weekend skating in the East Village), Main Beach in East Hampton (boarding school days, deep water blue),
   and McDonough St & Throop Av with Our Lady of Victory's stone spire behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nbcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.nb-car{animation:nbcar 7s linear infinite}.nb-car2{animation-delay:-3.5s}' +
    '@keyframes nbbus{from{transform:translateX(440px)}to{transform:translateX(-200px)}}.nb-bus{animation:nbbus 9s linear infinite}' +
    '@keyframes nbroll{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.nb-roll{animation:nbroll 6s linear infinite}' +
    '@keyframes nbollie{0%,30%,100%{transform:translateY(0) rotate(0)}45%{transform:translateY(-26px) rotate(-8deg)}60%{transform:translateY(-30px) rotate(6deg)}75%{transform:translateY(0) rotate(0)}}.nb-ollie{transform-box:fill-box;transform-origin:50% 100%;animation:nbollie 2.2s ease-in-out infinite}' +
    '@keyframes nbwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-24px)}}.nb-wave{animation:nbwave 3.2s ease-in-out infinite}.nb-wave2{animation-duration:4.1s;animation-delay:-1s}.nb-wave3{animation-duration:2.6s;animation-delay:-.6s}' +
    '@keyframes nbblink{0%,100%{opacity:.3}50%{opacity:1}}.nb-bl{animation:nbblink 1.8s ease-in-out infinite}.nb-bl2{animation-delay:.6s}.nb-bl3{animation-delay:1.2s}' +
    '@keyframes nbsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.nb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:nbsway 3s ease-in-out infinite}.nb-sway2{animation-delay:-1.5s}' +
    '@keyframes nbleaf{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-60px,150px);opacity:0}}.nb-leaf{animation:nbleaf 5s linear infinite}.nb-leaf2{animation-delay:-1.7s}.nb-leaf3{animation-delay:-3.3s}' +
    '@keyframes nbgull{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-6px)}}.nb-gull{animation:nbgull 5s ease-in-out infinite}' +
    '@keyframes nbspray{0%,100%{opacity:0}40%,60%{opacity:.9}}.nb-mist{animation:nbspray 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* skater silhouette (no face) on a board, feet at y */
  const skater = (x, y, col) => '<g><circle cx="' + x + '" cy="' + (y - 40) + '" r="6" fill="' + col + '"/><path d="M' + (x - 5) + ' ' + (y - 33) + 'h10l3 16h-16z" fill="' + col + '"/>' +
    '<path d="M' + (x - 13) + ' ' + (y - 30) + 'l8 4M' + (x + 13) + ' ' + (y - 24) + 'l-8 -2" stroke="' + col + '" stroke-width="3.5" stroke-linecap="round"/>' +
    '<path d="M' + (x - 3) + ' ' + (y - 17) + 'l-6 15M' + (x + 3) + ' ' + (y - 17) + 'l7 15" stroke="' + col + '" stroke-width="4" stroke-linecap="round"/>' +
    '<rect x="' + (x - 15) + '" y="' + (y - 2) + '" width="30" height="3.5" rx="1.7" fill="#222"/><circle cx="' + (x - 9) + '" cy="' + (y + 3) + '" r="2.2" fill="#ddd"/><circle cx="' + (x + 9) + '" cy="' + (y + 3) + '" r="2.2" fill="#ddd"/></g>';
  const NAVY = "#1d3b6e", SKY = "#6fa8dc", GOLD = "#e9c46a", SEA = "#9fd3c7", CREAM = "#f4ead8", JZ = "#996633";

  /* 1. Chauncey St, up on the Broadway el: wood-plank platform, green canopy, black sign with the J and Z, the J pulling in, Broadway below */
  function chauncey() {
    let planks = "";
    for (let x = 0; x < 400; x += 14) planks += '<rect x="' + x + '" y="172" width="12" height="12" fill="#6b4f37"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#ffe7a8" opacity=".9"/>';
    let truss = "";
    for (let x = 0; x < 400; x += 24) truss += '<path d="M' + x + ' 212l12 18l12 -18" stroke="#2f3e36" stroke-width="2.5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nbc)"/>' + stars(14) +
      '<g opacity=".55">' + [10, 70, 300, 350].map((x, i) => '<rect x="' + x + '" y="' + (70 + (i % 2) * 20) + '" width="44" height="' + (110 - (i % 2) * 20) + '" fill="#26304a"/>').join("") + '</g>' +
      /* canopy */
      '<path d="M0 30h400v10H0z" fill="#3e5a4c"/><path d="M0 40h400l-10 8H10z" fill="#2c4338"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 4) + '" y="48" width="8" height="124" fill="#3e5a4c"/>').join("") +
      [120, 280].map((x, i) => '<rect class="nb-bl nb-bl' + (i + 1) + '" x="' + (x - 18) + '" y="48" width="36" height="5" rx="2" fill="#fff6d0"/>').join("") +
      /* sign */
      '<rect x="64" y="58" width="272" height="32" rx="3" fill="#111"/><rect x="64" y="58" width="272" height="3" fill="#fff"/>' +
      '<text x="78" y="80" ' + font + ' font-size="15" fill="#fff">Chauncey St</text>' + bullet(282, 74, "J", JZ) + bullet(308, 74, "Z", JZ) +
      /* the J train */
      '<g class="anim-train">' +
        '<rect x="10" y="100" width="300" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="108" width="16" height="26" rx="2" fill="#ffe7a8"/>' + bullet(298, 148, "J", JZ) +
        '<rect x="10" y="140" width="280" height="4" fill="' + JZ + '"/><circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="162" width="400" height="10" fill="#eab308"/>' + planks +
      '<rect x="0" y="184" width="400" height="28" fill="#3a4a42"/>' + truss +
      /* Broadway under the el */
      '<rect x="0" y="230" width="400" height="30" fill="#2b2b30"/>' +
      '<g class="nb-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + SKY + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<g class="nb-car nb-car2"><rect x="0" y="240" width="40" height="11" rx="4" fill="' + GOLD + '"/><circle cx="9" cy="251" r="4" fill="#111"/><circle cx="31" cy="251" r="4" fill="#111"/></g>' +
      person(336, 136, "#141a2a") + person(360, 140, "#1d2436") +
      txt("BED-STUY · BROADWAY EL", 200, 202, 9, CREAM, 'letter-spacing="3"'),
      sky("nbc", "#0a1430", "#3b4a7a"));
  }

  /* 2. Little Ethiopia on Fairfax Av, Mid-City LA: low storefronts with green/gold/red awnings, palms, a blue city bus rolling by, a kid skating past */
  function fairfax() {
    const shop = (x, w, wall, aw) => '<rect x="' + x + '" y="112" width="' + w + '" height="86" fill="' + wall + '"/>' +
      '<path d="M' + (x - 4) + ' 132h' + (w + 8) + 'l-6 14H' + (x + 2) + 'z" fill="' + aw + '"/>' +
      '<rect x="' + (x + 8) + '" y="152" width="' + (w - 36) + '" height="30" fill="#2c3e50" opacity=".85"/><rect x="' + (x + w - 22) + '" y="150" width="14" height="48" fill="#4a3426"/>';
    const palm = (x, h, cls) => '<g class="nb-sway ' + (cls || "") + '"><path d="M' + x + ' 200q-4 -' + (h / 2) + ' 2 -' + h + '" stroke="#8a6a4a" stroke-width="5" fill="none"/>' +
      [[-34, -10], [-28, 8], [30, -8], [26, 10], [0, -22]].map(d => '<path d="M' + (x + 2) + ' ' + (200 - h) + 'q' + d[0] / 2 + ' ' + (d[1] - 10) + ' ' + d[0] + ' ' + d[1] + '" stroke="#2f7d4a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nbf)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#ffe08a" opacity=".9"/>' +
      '<path d="M0 104q60 -14 120 -6t140 -4t140 6v14H0z" fill="#b9a7c9" opacity=".5"/>' +
      palm(30, 150) + palm(372, 136, "nb-sway2") +
      shop(52, 92, "#e8d7b8", "#2f8f4e") + shop(150, 100, "#d9b48a", "#e9c46a") + shop(256, 92, "#efe3cc", "#c0392b") +
      '<rect x="150" y="96" width="120" height="18" rx="2" fill="#2f8f4e"/>' + txt("LITTLE ETHIOPIA", 210, 109, 10.5, "#fff", 'letter-spacing="1.5"') +
      /* sidewalk + street */
      '<rect x="0" y="198" width="400" height="14" fill="#cfc6b8"/><rect x="0" y="212" width="400" height="48" fill="#4a4a50"/>' +
      '<path d="M0 236h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* blue bus */
      '<g class="nb-bus"><rect x="0" y="206" width="150" height="40" rx="6" fill="#1f5fbf"/><rect x="0" y="206" width="150" height="6" rx="3" fill="#163f80"/>' +
        [10, 36, 62, 88, 114].map(x => '<rect x="' + x + '" y="214" width="20" height="14" rx="2" fill="#cfe6ff"/>').join("") +
        '<circle cx="28" cy="247" r="7" fill="#111"/><circle cx="122" cy="247" r="7" fill="#111"/><rect x="138" y="216" width="10" height="10" fill="#ffe08a"/></g>' +
      '<g class="nb-roll">' + skater(0, 198, "#1b2238") + '</g>' +
      txt("FAIRFAX AV · MID-CITY LA", 214, 26, 10, NAVY, 'letter-spacing="2"'),
      sky("nbf", "#8fc3ea", "#f7e3c4"));
  }

  /* 3. Tompkins Square Park, East Village: big elms, black iron fence, the little Temperance Fountain canopy, tenements behind, a skater popping an ollie */
  function tompkins() {
    const elm = (x, r) => '<rect x="' + (x - 4) + '" y="96" width="8" height="90" fill="#4a3a2c"/>' +
      '<circle cx="' + x + '" cy="80" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x - r * 0.6) + '" cy="92" r="' + r * 0.7 + '" fill="#4b8a44"/><circle cx="' + (x + r * 0.6) + '" cy="90" r="' + r * 0.7 + '" fill="#35693a"/>';
    let fence = "";
    for (let x = 0; x < 400; x += 8) fence += '<rect x="' + x + '" y="176" width="2" height="22" fill="#151515"/>';
    let ten = "";
    [[0, 30, 70, "#8a4b3a"], [70, 44, 60, "#a35d44"], [130, 22, 64, "#7a5040"], [194, 38, 70, "#93533c"], [264, 26, 66, "#86503f"], [330, 40, 70, "#9b5a43"]].forEach(b => {
      ten += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (150 - b[1]) + '" fill="' + b[3] + '"/>';
      for (let y = b[1] + 8; y < 140; y += 14) for (let x = b[0] + 8; x < b[0] + b[2] - 8; x += 14) ten += '<rect x="' + x + '" y="' + y + '" width="7" height="9" fill="#ffe7b0" opacity=".55"/>';
      ten += '<path d="M' + (b[0] + 10) + ' ' + (b[1] + 20) + 'v100" stroke="#2a2a2a" stroke-width="1.5" stroke-dasharray="3 5"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#nbt)"/>' + ten +
      elm(40, 34) + elm(150, 30) + elm(300, 36) + elm(380, 28) +
      /* Temperance Fountain: four granite posts, a little canopy, a small figure on top */
      '<g transform="translate(206 104)"><rect x="-26" y="54" width="52" height="8" fill="#9a958c"/>' +
        '<rect x="-22" y="18" width="5" height="36" fill="#b8b2a6"/><rect x="17" y="18" width="5" height="36" fill="#b8b2a6"/><rect x="-6" y="22" width="12" height="32" fill="#a39d90"/>' +
        '<path d="M-28 18h56l-6 -10h-44z" fill="#8c867b"/><path d="M-20 8q20 -14 40 0z" fill="#9f998d"/><rect x="-2" y="-14" width="4" height="10" fill="#7b766c"/><circle cx="0" cy="-17" r="3.5" fill="#7b766c"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#9a958d"/><path d="M0 186h400" stroke="#6f6b64" stroke-width="2"/>' + fence +
      '<rect x="0" y="174" width="400" height="3" fill="#151515"/>' +
      [[40, 0], [120, 1], [330, 2]].map(l => '<circle class="nb-leaf nb-leaf' + (l[1] + 1) + '" cx="' + (l[0] + 60) + '" cy="70" r="2.6" fill="#d9a441"/>').join("") +
      '<g transform="translate(120 238)"><g class="nb-ollie">' + skater(0, 0, "#141824") + '</g></g>' +
      person(300, 206, "#2b2f3a") + person(322, 210, "#3a3f4c") +
      '<rect x="248" y="226" width="66" height="6" rx="2" fill="#5a4030"/><rect x="252" y="232" width="4" height="10" fill="#333"/><rect x="306" y="232" width="4" height="10" fill="#333"/>' +
      txt("TOMPKINS SQUARE PARK", 200, 22, 12, "#3a2418", 'letter-spacing="2.5"'),
      sky("nbt", "#f0b27a", "#f6dcb2"));
  }

  /* 4. Main Beach, East Hampton: dunes with beach grass, the gray-shingled pavilion, a lifeguard chair, deep water blue rolling in */
  function beach() {
    let grass = "";
    for (let x = 6; x < 400; x += 11) grass += '<path class="nb-sway' + (x % 2 ? " nb-sway2" : "") + '" d="M' + x + ' 150q2 -12 -3 -20M' + (x + 3) + ' 150q1 -10 4 -16" stroke="#7a8f4a" stroke-width="1.6" fill="none"/>';
    let shingles = "";
    for (let y = 70; y < 120; y += 6) for (let x = (y / 6) % 2 ? 150 : 146; x < 270; x += 8) shingles += '<rect x="' + x + '" y="' + y + '" width="7" height="5" fill="#8f949a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nbb)"/>' +
      '<g class="nb-gull"><path d="M60 40q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/><path d="M110 28q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* pavilion */
      '<path d="M138 70l72 -28l72 28z" fill="#5d636b"/><rect x="146" y="70" width="128" height="52" fill="#a5aab0"/>' + shingles +
      '<rect x="166" y="92" width="16" height="30" fill="#f4f1ea"/><rect x="200" y="86" width="22" height="20" fill="#f4f1ea"/><rect x="240" y="92" width="16" height="30" fill="#f4f1ea"/>' +
      '<rect x="146" y="120" width="128" height="4" fill="#f4f1ea"/>' +
      /* dunes */
      '<path d="M0 150q60 -34 130 -14t120 -6t150 4v26H0z" fill="#e3cf9d"/>' + grass +
      /* sand */
      '<rect x="0" y="160" width="400" height="30" fill="#ecd9a8"/>' +
      /* lifeguard chair */
      '<g transform="translate(322 112)"><path d="M0 70l10 -44M30 70l-10 -44M4 52h22M7 40h16" stroke="#f4f1ea" stroke-width="4"/><rect x="6" y="16" width="18" height="12" fill="#c0392b"/><rect x="2" y="12" width="26" height="4" fill="#f4f1ea"/></g>' +
      /* ocean */
      '<rect x="0" y="190" width="400" height="70" fill="#123a6b"/>' +
      '<path class="nb-wave" d="M-30 194q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v10h-540z" fill="#2a64a8"/>' +
      '<path class="nb-wave nb-wave2" d="M-30 214q25 -9 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0v8h-500z" fill="#1d4f8c"/>' +
      '<path class="nb-wave nb-wave3" d="M-30 236q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v24h-540z" fill="#0d2c55"/>' +
      '<path class="nb-mist" d="M40 190q10 -6 20 0M180 190q10 -6 20 0M300 190q10 -6 20 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      txt("MAIN BEACH · EAST HAMPTON", 200, 24, 11, NAVY, 'letter-spacing="2.5"'),
      sky("nbb", "#7fb6e8", "#d7ecf7"));
  }

  /* 5. McDonough St & Throop Av, Bed-Stuy: Our Lady of Victory's gray stone Gothic spire behind, brownstones, the wall tagged NAVY BLUE */
  function corner() {
    const brown = (x, w, col) => { let g = '<rect x="' + x + '" y="88" width="' + w + '" height="62" fill="' + col + '"/><rect x="' + x + '" y="84" width="' + w + '" height="6" fill="#3a2418"/>';
      for (let xx = x + 8; xx < x + w - 10; xx += 18) g += '<rect class="nb-bl nb-bl' + ((xx / 18 | 0) % 3 + 1) + '" x="' + xx + '" y="98" width="9" height="14" fill="#ffd98a" opacity=".8"/><rect x="' + xx + '" y="120" width="9" height="14" fill="#ffd98a" opacity=".6"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#nbk)"/>' + stars(18).replace(/cy="(4[0-9]|5[0-9])(\.[0-9]+)?"/g, 'cy="10"') +
      /* the church: nave, rose window, tall spire */
      '<rect x="150" y="70" width="110" height="80" fill="#8a8a86"/><path d="M150 70l55 -26l55 26z" fill="#6f6f6b"/>' +
      '<circle cx="205" cy="92" r="12" fill="#3c4f7a" stroke="#c9c6bc" stroke-width="2"/><path d="M205 80v24M193 92h24" stroke="#c9c6bc" stroke-width="1.2"/>' +
      '<path d="M190 150v-28q15 -16 30 0v28z" fill="#3a2a22"/>' +
      '<rect x="262" y="52" width="30" height="98" fill="#7d7d79"/><path d="M262 52l15 -48l15 48z" fill="#6a6a66"/><path d="M277 4v-6" stroke="#c9c6bc" stroke-width="2"/>' +
      '<path d="M270 70v14q7 -10 14 0v-14z" fill="#3c4f7a"/><path d="M270 100v14q7 -10 14 0v-14z" fill="#3c4f7a"/>' +
      brown(0, 140, "#6b4434") + brown(300, 100, "#5e3c2f") +
      txt("OUR LADY OF VICTORY", 205, 64, 7.5, CREAM, 'letter-spacing="1.5" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#2e3442"/>' +
      (() => { let b = ""; for (let y = 156; y < 226; y += 11) b += '<path d="M0 ' + y + 'h400" stroke="#262b37" stroke-width="1"/>'; return b; })() +
      tag("NAVY BLUE", 16, 200, 44, SKY, -5) + tag("THE TRUEST", 224, 216, 18, GOLD, -4) + tag("FREEDOM SOUNDS", 24, 220, 13, SEA, -3) + tag("NAVY", 282, 176, 18, CREAM, -8) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="nb-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + NAVY + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("McDonough St", 346, 82, 11.5, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Throop Av", 346, 108, 12, "#fff") +
      '<circle class="nb-bl" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("nbk", "#070d22", "#27355e"));
  }

  window.SCENES = { chauncey: chauncey, fairfax: fairfax, tompkins: tompkins, beach: beach, corner: corner };
})();
