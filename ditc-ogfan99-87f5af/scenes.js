/* D.I.T.C. (Diggin' in the Crates Crew) group game (NYC map, the Bronx: Mott Haven / Port Morris, the South Bronx side of the crew).
   1. Cypress Av, underground on the Pelham line: the 6 pulling in.
   2. Fat Beats on 6th Av in the Village: the second-floor record shop that put out the "Day One" 12-inch, crates in the window.
   3. Tokyo Tower at night: "Internationally Known", the crew's big following and pressings in Japan.
   4. The Bahamas: "Lay up on the beaches when I'm down in the Bahamas ... relax and recline where it's sunny" (Day One).
   5. Lincoln Av & E 132 St, Port Morris: green signs, D.I.T.C. on the wall, the old Estey Piano factory clock tower behind.
   400 x 260 SVGs. Classes prefixed dt-. No logos, no faces. No 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dtflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.dt-flk{animation:dtflick 2.4s infinite}' +
    '@keyframes dtcab{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.dt-cab{animation:dtcab 6s linear infinite}.dt-cab2{animation-delay:-3s}' +
    '@keyframes dtspin{to{transform:rotate(360deg)}}.dt-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dtspin 1.8s linear infinite}' +
    '@keyframes dtblink{0%,100%{opacity:.2}50%{opacity:1}}.dt-bl{animation:dtblink 1.8s ease-in-out infinite}.dt-bl2{animation-delay:.6s}.dt-bl3{animation-delay:1.2s}' +
    '@keyframes dtsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.dt-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dtsway 3.2s ease-in-out infinite}' +
    '@keyframes dtsail{from{transform:translateX(-60px)}to{transform:translateX(440px)}}.dt-sail{animation:dtsail 16s linear infinite}' +
    '@keyframes dtwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.dt-wave{animation:dtwave 3s ease-in-out infinite}.dt-wave2{animation-delay:-1.5s}' +
    '@keyframes dtbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.dt-bob{animation:dtbob .9s ease-in-out infinite}.dt-bob2{animation-delay:.45s}' +
    '@keyframes dthand{0%,100%{transform:rotate(0)}100%{transform:rotate(360deg)}}.dt-hand{transform-origin:0 0;animation:dthand 12s linear infinite}' +
    '@keyframes dtbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.dt-bird{animation:dtbird 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 151 + 37) % 400) + '" cy="' + (6 + (i * i * 29 + i * 11) % 64) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2b632", RED = "#d94f2b", CREAM = "#f4ead8", TEAL = "#5fb3c9", G6 = "#00933c";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Cypress Av, underground: white tile, the maroon-and-cream band, the black sign with the 6, the 6 train sliding in */
  function cypress() {
    let tiles = "";
    for (let y = 52; y < 160; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1ede3"/>';
    let band = "";
    for (let x = 0; x < 400; x += 20) band += '<rect x="' + x + '" y="36" width="10" height="10" fill="' + (x % 40 ? "#7a1f2b" : "#e6d3a3") + '"/>';
    let win = "";
    for (let x = 28; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#d6e6f2" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#ddd6c6"/>' + tiles +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2a2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="dt-flk" style="animation-delay:-' + (i * 0.7) + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="0" y="32" width="400" height="18" fill="#3b1016"/>' + band +
      '<rect x="56" y="60" width="288" height="32" rx="3" fill="#111"/><rect x="56" y="60" width="288" height="3" fill="#fff"/>' +
      '<text x="72" y="82" ' + font + ' font-size="15" fill="#fff">Cypress Av</text>' + bullet(318, 76, "6", G6) +
      [18, 382].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#2f5d4a"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="8" y="102" width="304" height="58" rx="6" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="292" y="110" width="16" height="24" rx="2" fill="#d6e6f2"/>' + bullet(298, 147, "6", G6) +
        '<rect x="8" y="139" width="282" height="3" fill="#8b929b"/><circle cx="20" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5b5852"/>' +
      person(332, 196, "#1b1b1b") + person(356, 200, "#2a2a2a") +
      txt("MOTT HAVEN · THE BRONX", 150, 236, 11, CREAM, 'letter-spacing="3"'));
  }

  /* 2. Fat Beats, 6th Av, Greenwich Village: the second-floor record shop window full of crates, the 12-inch in the window spinning, the stairway door, cabs going by */
  function fatbeats() {
    let brick = "";
    for (let y = 40; y < 190; y += 8) for (let x = (y / 8) % 2 ? 30 : 22; x < 366; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7b3a2a"/>';
    let crates = "";
    for (let i = 0; i < 6; i++) { const x = 96 + i * 36; crates += '<rect x="' + x + '" y="108" width="30" height="20" fill="#8a5a2b" stroke="#4a2c12" stroke-width="1.5"/>';
      for (let j = 0; j < 5; j++) crates += '<rect x="' + (x + 3 + j * 5) + '" y="' + (96 + (j % 2) * 3) + '" width="4" height="14" fill="' + ["#111", "#c94b2b", "#111", GOLD, "#2b4a6b"][j] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#dtfb)"/>' + stars(8) +
      '<rect x="22" y="34" width="356" height="160" fill="#8e4433"/>' + brick +
      '<rect x="18" y="28" width="364" height="10" fill="#3d1f17"/>' +
      /* third floor windows */
      [60, 150, 240, 330].map(x => '<rect x="' + (x - 20) + '" y="44" width="40" height="28" fill="#2b2a33" stroke="#e8dcc4" stroke-width="3"/>').join("") +
      /* the second-floor shop window */
      '<rect x="84" y="80" width="232" height="56" fill="#ffe7a8" stroke="#e8dcc4" stroke-width="4"/>' + crates +
      '<rect x="84" y="80" width="232" height="10" fill="#1c1b22"/>' + txt("RECORDS · 2ND FL", 200, 88.5, 8, GOLD, 'letter-spacing="3"') +
      /* ground floor: stair door + another shop */
      '<rect x="22" y="146" width="356" height="48" fill="#3a3a40"/>' +
      '<rect x="40" y="152" width="44" height="42" fill="#121216" stroke="' + GOLD + '" stroke-width="2"/><path d="M46 192l8-8h8l8-8h8" stroke="#bbb" stroke-width="2" fill="none"/>' +
      txt("UPSTAIRS", 62, 162, 6, CREAM, 'letter-spacing="1"') +
      '<rect x="100" y="152" width="262" height="36" fill="#d8e6ee" opacity=".85"/><rect x="100" y="152" width="262" height="6" fill="' + RED + '"/>' +
      /* big poster: DAY ONE 12-inch */
      '<rect x="296" y="156" width="56" height="30" fill="#111"/>' + txt("DAY ONE", 324, 175, 9, GOLD) +
      '<g class="dt-spin"><circle cx="122" cy="171" r="13" fill="#111"/><circle cx="122" cy="171" r="9" fill="none" stroke="#333"/><circle cx="122" cy="171" r="4" fill="' + RED + '"/><rect x="121" y="158" width="2" height="5" fill="#666"/></g>' +
      person(170, 168, "#1d1d22", "dt-bob") + '<rect x="176" y="178" width="12" height="12" fill="#e9e2cf"/>' + person(214, 168, "#26262c", "dt-bob dt-bob2") + '<rect x="200" y="178" width="12" height="12" fill="#e9e2cf"/>' +
      /* sidewalk + 6th Av */
      '<rect x="0" y="194" width="400" height="66" fill="#4a4b50"/><rect x="0" y="194" width="400" height="6" fill="#8a8b8f"/>' +
      '<path d="M0 236h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="dt-cab"><rect x="0" y="214" width="58" height="18" rx="5" fill="#f7c600"/><rect x="12" y="206" width="30" height="10" rx="3" fill="#f7c600"/><rect x="16" y="208" width="10" height="7" fill="#cfe2f5"/><rect x="28" y="208" width="10" height="7" fill="#cfe2f5"/><circle cx="12" cy="232" r="5" fill="#111"/><circle cx="46" cy="232" r="5" fill="#111"/></g>' +
      txt("6TH AV · GREENWICH VILLAGE", 200, 254, 10, CREAM, 'letter-spacing="3"'),
      sky("dtfb", "#141a33", "#3a4570"));
  }

  /* 3. Tokyo Tower at night: the international-orange and white lattice, the observation decks lit, the city glowing, a record moon */
  function tokyo() {
    const OR = "#ff5a1f", WH = "#f4f1ea";
    let bands = "";
    const bandsY = [40, 58, 76, 94, 112, 130, 150, 172, 196];
    bandsY.forEach((y, i) => { const hw = 6 + (y - 30) * 0.42; bands += '<path d="M' + (200 - hw) + ' ' + y + 'h' + (hw * 2) + '" stroke="' + (i % 2 ? WH : OR) + '" stroke-width="3"/>'; });
    let lattice = "";
    for (let y = 40; y < 222; y += 14) { const a = 6 + (y - 30) * 0.42, b = 6 + (y + 14 - 30) * 0.42; lattice += '<path d="M' + (200 - a) + ' ' + y + 'L' + (200 + b) + ' ' + (y + 14) + 'M' + (200 + a) + ' ' + y + 'L' + (200 - b) + ' ' + (y + 14) + '" stroke="' + OR + '" stroke-width="1.2" opacity=".8"/>'; }
    let city = "";
    for (let i = 0; i < 18; i++) { const x = i * 23, h = 30 + (i * 37) % 50; city += '<rect x="' + x + '" y="' + (230 - h) + '" width="20" height="' + h + '" fill="#141826"/>';
      for (let yy = 236 - h; yy < 226; yy += 9) city += '<rect class="dt-bl dt-bl' + (i % 3 + 1) + '" x="' + (x + 4) + '" y="' + yy + '" width="4" height="4" fill="#ffd98a" opacity=".7"/><rect x="' + (x + 12) + '" y="' + yy + '" width="4" height="4" fill="#9fd3ff" opacity=".5"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#dttk)"/>' + stars(22) +
      /* the moon is a record */
      '<g class="dt-spin" style="animation-duration:6s"><circle cx="326" cy="54" r="24" fill="#111" stroke="#444"/><circle cx="326" cy="54" r="17" fill="none" stroke="#2c2c2c"/><circle cx="326" cy="54" r="8" fill="' + GOLD + '"/><circle cx="326" cy="54" r="1.6" fill="#111"/></g>' +
      '<circle cx="200" cy="140" r="90" fill="' + OR + '" opacity=".08"/>' +
      /* legs + lattice */
      '<path d="M192 36L120 228M208 36L280 228" stroke="' + OR + '" stroke-width="6"/>' + lattice + bands +
      '<path d="M150 228q50-70 100 0" stroke="' + OR + '" stroke-width="5" fill="none"/>' +
      /* main + top decks */
      '<rect x="168" y="118" width="64" height="16" rx="2" fill="' + WH + '"/>' + [174, 186, 198, 210, 222].map(x => '<rect class="dt-bl" x="' + x + '" y="122" width="6" height="8" fill="#ffe08a"/>').join("") +
      '<rect x="184" y="70" width="32" height="10" rx="2" fill="' + WH + '"/><rect x="190" y="72" width="20" height="5" fill="#ffe08a"/>' +
      '<path d="M200 36V8" stroke="' + WH + '" stroke-width="3"/><circle class="dt-bl" cx="200" cy="8" r="3" fill="#ff3030"/>' +
      city +
      '<rect x="0" y="228" width="400" height="32" fill="#0b0d16"/>' +
      txt("TOKYO", 200, 250, 12, CREAM, 'letter-spacing="8"') +
      tag("WORLDWIDE", 18, 214, 20, GOLD, -6),
      sky("dttk", "#0a0d24", "#2b2350"));
  }

  /* 4. The Bahamas: turquoise water, pink sand, a palm swaying, a beach chair to recline where it's sunny, a sailboat going by */
  function bahamas() {
    return svg(
      '<rect width="400" height="260" fill="url(#dtbh)"/>' +
      '<circle cx="312" cy="58" r="30" fill="#ffd84a"/><circle cx="312" cy="58" r="40" fill="#ffd84a" opacity=".2"/>' +
      '<g class="dt-bird"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#24364a" stroke-width="2" fill="none"/></g>' +
      /* sea */
      '<rect x="0" y="120" width="400" height="80" fill="url(#dtsea)"/>' +
      '<g class="dt-wave"><path d="M-20 140q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8fbff" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<g class="dt-wave dt-wave2"><path d="M-20 166q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8fbff" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* sailboat */
      '<g class="dt-sail"><path d="M20 132h40l-6 8h-28z" fill="#fff"/><path d="M40 130V96l18 32z" fill="#fff"/><path d="M38 130V102l-14 26z" fill="' + RED + '"/></g>' +
      /* pink sand */
      '<path d="M0 196q100-14 200 0t200 0v64H0z" fill="#f6d6c8"/><path d="M0 200q100-12 200 0t200 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>' +
      /* palm */
      '<path d="M84 230q-6-60 14-120" stroke="#7a5230" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      '<g class="dt-sway"><g transform="translate(98 110)">' +
        ['M0 0q-34-18-62 2', 'M0 0q-26-34-58-30', 'M0 0q10-36 44-38', 'M0 0q36-12 60 8', 'M0 0q30 6 46 34', 'M0 0q-30 4-48 32'].map(d => '<path d="' + d + '" stroke="#1f8a4c" stroke-width="7" fill="none" stroke-linecap="round"/>').join("") +
        '<circle cx="-4" cy="6" r="5" fill="#6b4a22"/><circle cx="6" cy="8" r="5" fill="#6b4a22"/></g></g>' +
      /* beach chair + umbrella + boombox */
      '<path d="M236 160v54" stroke="#eee" stroke-width="3"/><path d="M196 166q40-34 80 0z" fill="' + RED + '"/><path d="M216 166q20-30 40 0" fill="' + GOLD + '"/>' +
      '<path d="M214 226l30-18h34l-8 18" stroke="#6b4a22" stroke-width="4" fill="none"/><path d="M226 220l20-12h30" stroke="' + TEAL + '" stroke-width="7"/>' +
      '<rect x="294" y="208" width="40" height="22" rx="3" fill="#222"/><circle cx="304" cy="219" r="6" fill="#555"/><circle cx="324" cy="219" r="6" fill="#555"/><rect x="306" y="203" width="16" height="5" fill="#222"/>' +
      '<g class="dt-bob"><path d="M340 196q4-8 8 0" stroke="#24364a" stroke-width="2" fill="none"/></g><g class="dt-bob dt-bob2"><path d="M350 186q4-8 8 0" stroke="#24364a" stroke-width="2" fill="none"/></g>' +
      txt("THE BAHAMAS", 200, 252, 12, "#24364a", 'letter-spacing="6"'),
      sky("dtbh", "#4fb7e8", "#bfeaff") + '<linearGradient id="dtsea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1aa3b8"/><stop offset="1" stop-color="#5fe0d6"/></linearGradient>');
  }

  /* 5. Lincoln Av & E 132 St, Port Morris: the green signs, D.I.T.C. tagged on the wall, the old Estey Piano factory with its clock tower behind */
  function corner() {
    let brick = "";
    for (let y = 70; y < 150; y += 7) for (let x = (y / 7) % 2 ? 40 : 34; x < 300; x += 12) brick += '<rect x="' + x + '" y="' + y + '" width="10" height="5" fill="#7d3426" opacity=".55"/>';
    let wins = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) wins += '<path d="M' + (44 + c * 28) + ' ' + (96 + r * 20) + 'v-8q7-8 14 0v8z" fill="' + ((r + c) % 4 ? "#3a2a30" : "#ffd98a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dtcn)"/>' + stars(12) +
      /* the factory + tower */
      '<rect x="34" y="70" width="270" height="80" fill="#a1462f"/>' + brick + wins + '<rect x="30" y="64" width="278" height="8" fill="#6b2a1c"/>' +
      '<rect x="176" y="16" width="44" height="60" fill="#a8492f"/><path d="M172 16h52l-26-12z" fill="#5b2a1d"/>' +
      '<circle cx="198" cy="38" r="13" fill="#f4ead8" stroke="#3a2418" stroke-width="2"/>' +
      '<path d="M198 38v-9" stroke="#222" stroke-width="2" stroke-linecap="round"/><g transform="translate(198 38)"><path class="dt-hand" d="M0 0h7" stroke="#222" stroke-width="1.6" stroke-linecap="round"/></g>' +
      '<rect x="186" y="58" width="24" height="14" fill="#6b2a1c"/>' +
      txt("ESTEY PIANO CO.", 170, 82, 8, CREAM, 'letter-spacing="2" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#3c3e45"/>' +
      (() => { let b = ""; for (let y = 156; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#34363c" stroke-width="1"/>'; return b; })() +
      tag("D.I.T.C.", 16, 206, 46, GOLD, -5) + tag("DAY ONE", 196, 214, 22, RED, -4) + tag("THICK", 30, 222, 14, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="dt-cab dt-cab2"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      /* the pole + green signs */
      '<rect x="354" y="70" width="5" height="158" fill="#3d4b3f"/>' +
      '<rect x="300" y="74" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Lincoln Av", 348, 90, 12, "#fff") +
      '<rect x="300" y="100" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E 132 St", 348, 116, 12, "#fff") +
      '<circle class="dt-flk" cx="356" cy="68" r="4" fill="#fff6c2"/>',
      sky("dtcn", "#0c0d1c", "#3a2d40"));
  }

  window.SCENES = { cypress: cypress, fatbeats: fatbeats, tokyo: tokyo, bahamas: bahamas, corner: corner };
})();
