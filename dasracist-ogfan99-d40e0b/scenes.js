/* Das Racist game (NYC map, Brooklyn: Bushwick, where the trio was based).
   1. Jefferson St on the L, underground.  2. Market Hotel, the DIY venue up over Myrtle Av and Broadway, the J/M el right outside the windows.
   3. East Village Radio's little glass booth on First Av (home of their Chillin' Island show).  4. The combination pizza-and-taco spot on Jamaica Av, Queens,
   under the J el (from "Combination Pizza Hut and Taco Bell"; no logos, plain signs).  5. Jefferson St and Wyckoff Av, the wall tagged DAS RACIST,
   Bushwick warehouses with their water towers behind. 400 x 260 SVGs. All CSS classes prefixed "dr-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.dr-car{animation:drcar 7s linear infinite}.dr-car2{animation-delay:-3.5s}' +
    '@keyframes drblink{0%,100%{opacity:.25}50%{opacity:1}}.dr-bl{animation:drblink 1.6s ease-in-out infinite}.dr-bl2{animation-delay:.5s}.dr-bl3{animation-delay:1s}' +
    '@keyframes drflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.dr-flk{animation:drflick 2.4s infinite}' +
    '@keyframes drel{from{transform:translateX(420px)}to{transform:translateX(-380px)}}.dr-el{animation:drel 6s linear infinite}' +
    '@keyframes drspin{to{transform:rotate(360deg)}}.dr-spin{transform-box:fill-box;transform-origin:50% 50%;animation:drspin 1.4s linear infinite}' +
    '@keyframes drbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.dr-bob{animation:drbob .55s ease-in-out infinite}.dr-bob2{animation-delay:.27s}' +
    '@keyframes drsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-26px);opacity:0}}.dr-stm{animation:drsteam 2.2s ease-out infinite}.dr-stm2{animation-delay:-1.1s}' +
    '@keyframes drpulse{0%,100%{opacity:.35}50%{opacity:.85}}.dr-pls{animation:drpulse 1.1s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#ffb703", RED = "#e5383b", PURP = "#8338ec", CREAM = "#f4ead8", LGREY = "#a7a9ac", BROWN = "#996633";
  /* a J/M el car (silver, brown bullet) for the elevated scenes */
  const elCar = (x, y, w) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="26" rx="3" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>';
    for (let xx = x + 8; xx < x + w - 14; xx += 18) g += '<rect x="' + xx + '" y="' + (y + 5) + '" width="12" height="10" rx="1.5" fill="#ffe9a8" opacity=".9"/>';
    return g + '<rect x="' + x + '" y="' + (y + 18) + '" width="' + w + '" height="3" fill="' + BROWN + '"/>'; };
  /* el structure: deck + girders + columns (old dark green steel) */
  const elDeck = (y) => { let g = '<rect x="0" y="' + y + '" width="400" height="12" fill="#2f4a3a"/><rect x="0" y="' + (y + 12) + '" width="400" height="4" fill="#1d2f25"/>';
    for (let x = 0; x < 400; x += 16) g += '<path d="M' + x + ' ' + (y + 16) + 'l8 10l8 -10" stroke="#2f4a3a" stroke-width="2" fill="none"/>';
    return g; };

  /* 1. Jefferson St (L), underground: white tile walls with the thin dark trim band, the black sign with the grey L bullet, the L train sliding in */
  function drJefferson() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#eef0ee"/>';
    let win = "";
    for (let x = 34; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d7dad6"/>' + tiles +
      '<rect x="0" y="40" width="400" height="8" fill="#5a3d6b"/><rect x="0" y="48" width="400" height="2" fill="#2a1d33"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#2b2b2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="dr-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="70" y="58" width="260" height="32" rx="3" fill="#111"/><rect x="70" y="58" width="260" height="3" fill="#fff"/>' +
      '<text x="86" y="80" ' + font + ' font-size="15" fill="#fff">Jefferson St</text>' + bullet(304, 74, "L", LGREY) +
      [16, 384].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#3b3f46"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "L", LGREY) +
        '<rect x="10" y="140" width="272" height="4" fill="#5a5d63"/><circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5d5a55"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(330, 196, "#1b1b1b") + person(354, 200, "#2a2a2a") + person(60, 200, "#222", "dr-bob") +
      txt("BUSHWICK", 200, 236, 12, CREAM, 'letter-spacing="5"'));
  }

  /* 2. Market Hotel: the tan corner building at Myrtle Av and Broadway, big arched windows up top glowing with the show,
     the J/M el running right past the windows, a J car rolling through */
  function drMarket() {
    let brick = "";
    for (let y = 40; y < 226; y += 8) brick += '<path d="M60 ' + y + 'h300" stroke="#a88a62" stroke-width="1" opacity=".5"/>';
    const arch = (x, i) => '<path d="M' + x + ' 104v-30a18 18 0 0 1 36 0v30z" fill="#2a1638"/>' +
      '<path class="dr-pls" style="animation-delay:-' + (i * 0.3) + 's" d="M' + (x + 3) + ' 104v-29a15 15 0 0 1 30 0v29z" fill="' + [PURP, RED, GOLD, "#3a86ff", PURP][i] + '" opacity=".6"/>' +
      '<g class="dr-bob' + (i % 2 ? " dr-bob2" : "") + '"><circle cx="' + (x + 12) + '" cy="92" r="4" fill="#120a18"/><circle cx="' + (x + 25) + '" cy="94" r="4" fill="#120a18"/><rect x="' + (x + 8) + '" y="97" width="22" height="7" fill="#120a18"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dm)"/>' + stars(14) +
      '<rect x="60" y="36" width="300" height="190" fill="#c8a97e"/>' + brick +
      '<rect x="56" y="30" width="308" height="10" fill="#8f7352"/><rect x="60" y="40" width="300" height="4" fill="#e2cfa8"/>' +
      [76, 132, 188, 244, 300].map(arch).join("") +
      txt("MARKET HOTEL", 210, 124, 12, "#3a2a1a", 'letter-spacing="4"') +
      /* ground floor storefronts */
      '<rect x="60" y="186" width="300" height="40" fill="#5a4a3a"/>' + [72, 162, 252].map(x => '<rect x="' + x + '" y="194" width="76" height="30" fill="#ffd98a" opacity=".55"/>').join("") +
      /* the el in front, between the windows and the street */
      elDeck(140) +
      [24, 136, 248, 360].map(x => '<rect x="' + x + '" y="156" width="10" height="70" fill="#2f4a3a"/>').join("") +
      '<g class="dr-el">' + elCar(0, 114, 150) + elCar(156, 114, 150) + bullet(286, 127, "J", BROWN) + '</g>' +
      /* street + line outside */
      '<rect x="0" y="226" width="400" height="34" fill="#3d3f45"/><rect x="0" y="226" width="400" height="4" fill="#77797e"/>' +
      person(84, 228, "#141414") + person(100, 230, "#1d1d1d") + person(116, 228, "#141414") +
      '<g class="dr-car"><rect x="0" y="242" width="44" height="12" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="254" r="3.5" fill="#111"/><circle cx="34" cy="254" r="3.5" fill="#111"/></g>',
      sky("dm", "#0b0716", "#2b1840"));
  }

  /* 3. East Village Radio: the tiny glass booth on First Av, ON AIR light blinking, two turntables spinning, the mic,
     a hand-lettered card in the window for Chillin' Island */
  function drRadio() {
    let brick = "";
    for (let y = 0; y < 230; y += 9) for (let x = (y / 9) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="7" fill="#6e3b2c"/>';
    return svg(
      '<rect width="400" height="260" fill="#4e2a20"/>' + brick +
      /* sign band */
      '<rect x="70" y="24" width="260" height="30" fill="#151515"/>' + txt("EAST VILLAGE RADIO", 200, 45, 15, "#f7f3ea", 'letter-spacing="2"') +
      /* glass booth */
      '<rect x="70" y="58" width="260" height="150" fill="#1a1a22" stroke="#9aa0ad" stroke-width="4"/>' +
      '<rect x="74" y="62" width="252" height="142" fill="#2a3b55" opacity=".9"/>' +
      '<path d="M200 62v142" stroke="#9aa0ad" stroke-width="3"/>' +
      /* ON AIR */
      '<rect class="dr-bl" x="236" y="70" width="70" height="20" rx="3" fill="' + RED + '"/>' + txt("ON AIR", 271, 85, 12, "#fff") +
      /* desk, decks, mic */
      '<rect x="80" y="150" width="240" height="14" fill="#3b2a1a"/><rect x="86" y="164" width="228" height="38" fill="#2a1d12"/>' +
      '<rect x="96" y="132" width="60" height="18" rx="2" fill="#333"/><g class="dr-spin"><circle cx="118" cy="141" r="8" fill="#111" stroke="#555"/><circle cx="118" cy="141" r="2.5" fill="' + GOLD + '"/><rect x="117" y="133" width="2" height="4" fill="#777"/></g>' +
      '<rect x="230" y="132" width="60" height="18" rx="2" fill="#333"/><g class="dr-spin" style="animation-duration:1.1s"><circle cx="252" cy="141" r="8" fill="#111" stroke="#555"/><circle cx="252" cy="141" r="2.5" fill="' + RED + '"/><rect x="251" y="133" width="2" height="4" fill="#777"/></g>' +
      '<path d="M200 150v-22l18 -12" stroke="#9aa0ad" stroke-width="3" fill="none"/><rect x="212" y="106" width="12" height="18" rx="6" fill="#444" transform="rotate(-34 218 115)"/>' +
      /* two hosts (silhouettes, no faces) */
      '<g class="dr-bob"><circle cx="176" cy="112" r="10" fill="#0d0d12"/><rect x="164" y="124" width="24" height="26" rx="8" fill="#0d0d12"/></g>' +
      '<g class="dr-bob dr-bob2"><circle cx="292" cy="112" r="10" fill="#0d0d12"/><rect x="280" y="124" width="24" height="26" rx="8" fill="#0d0d12"/></g>' +
      /* window card */
      '<rect x="84" y="68" width="80" height="36" fill="' + CREAM + '" transform="rotate(-3 124 86)"/>' +
      '<text x="124" y="83" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="10" fill="' + PURP + '" transform="rotate(-3 124 86)">CHILLIN\'</text>' +
      '<text x="124" y="98" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="10" fill="' + RED + '" transform="rotate(-3 124 86)">ISLAND</text>' +
      /* sidewalk + walkers + traffic */
      '<rect x="0" y="208" width="400" height="22" fill="#77797e"/><rect x="0" y="230" width="400" height="30" fill="#3d3f45"/>' +
      person(30, 186, "#111", "dr-bob") + person(372, 186, "#1a1a1a") +
      '<g class="dr-car"><rect x="0" y="238" width="48" height="13" rx="4" fill="#f4c430"/><rect x="14" y="232" width="20" height="7" rx="2" fill="#f4c430"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="38" cy="251" r="4" fill="#111"/></g>' +
      txt("1ST AV", 360, 224, 9, "#222", 'letter-spacing="2"'));
  }

  /* 4. The combination pizza-and-taco spot on Jamaica Av in Queens, under the J el: one low building, two halves,
     red awning PIZZA and purple awning TACOS (plain signs, no logos), the J rolling over the top */
  function drCombo() {
    return svg(
      '<rect width="400" height="260" fill="url(#dc)"/>' + stars(12) +
      /* far buildings */
      '<rect x="0" y="70" width="60" height="120" fill="#2a2433"/><rect x="340" y="80" width="60" height="110" fill="#2a2433"/>' +
      /* the combo spot */
      '<rect x="50" y="110" width="300" height="100" fill="#efe6d4"/>' +
      '<path d="M50 110h150v-14h-150z" fill="#c1121f"/><path d="M200 110h150v-14h-150z" fill="#5a189a"/>' +
      '<path d="M50 132h150" stroke="#c1121f" stroke-width="22"/><path d="M200 132h150" stroke="#5a189a" stroke-width="22"/>' +
      (() => { let s = ""; for (let x = 50; x < 350; x += 12) s += '<path d="M' + x + ' 143q6 8 12 0" fill="' + (x < 200 ? "#c1121f" : "#5a189a") + '"/>'; return s; })() +
      txt("PIZZA", 125, 138, 16, "#fff", 'letter-spacing="3"') + txt("TACOS", 275, 138, 16, "#fff", 'letter-spacing="3"') +
      txt("COMBINATION", 200, 106, 9, "#fff", 'letter-spacing="2"') +
      '<rect x="66" y="156" width="110" height="46" fill="#ffd98a" opacity=".8"/><rect x="224" y="156" width="110" height="46" fill="#ffd98a" opacity=".8"/>' +
      '<rect x="182" y="156" width="36" height="54" fill="#5a4a3a"/><rect x="186" y="160" width="28" height="46" fill="#ffe9b8" opacity=".7"/>' +
            person(100, 176, "#2a1d12") + person(258, 176, "#2a1d12", "dr-bob") +
      /* the J el on top */
      elDeck(46) +
      [24, 376].map(x => '<rect x="' + (x - 5) + '" y="62" width="10" height="150" fill="#2f4a3a"/>').join("") +
      '<g class="dr-el" style="animation-duration:5s">' + elCar(0, 20, 150) + elCar(156, 20, 150) + bullet(286, 33, "J", BROWN) + '</g>' +
      /* street, green sign */
      '<rect x="0" y="210" width="400" height="50" fill="#3d3f45"/><rect x="0" y="210" width="400" height="4" fill="#77797e"/>' +
      '<rect x="0" y="236" width="400" height="2" fill="#f4c430" opacity=".6"/>' +
      '<g class="dr-car dr-car2"><rect x="0" y="240" width="46" height="12" rx="4" fill="#3a86ff"/><circle cx="10" cy="252" r="3.5" fill="#111"/><circle cx="36" cy="252" r="3.5" fill="#111"/></g>' +
      '<rect x="292" y="168" width="4" height="44" fill="#3d4b3f"/><rect x="262" y="158" width="64" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/>' + txt("Jamaica Av", 294, 170, 9, "#fff"),
      sky("dc", "#0a0a1a", "#352a50"));
  }

  /* 5. Jefferson St and Wyckoff Av: green street signs, the wall tagged DAS RACIST, Bushwick warehouses with water towers behind */
  function drCorner() {
    const tower = (x, y) => '<g><rect x="' + (x + 2) + '" y="' + (y + 22) + '" width="2" height="12" fill="#3a2a1a"/><rect x="' + (x + 20) + '" y="' + (y + 22) + '" width="2" height="12" fill="#3a2a1a"/>' +
      '<rect x="' + x + '" y="' + (y + 4) + '" width="24" height="20" fill="#8a5a36"/><path d="M' + (x + 1) + ' ' + (y + 10) + 'h22M' + (x + 1) + ' ' + (y + 16) + 'h22" stroke="#5a3a1e"/><path d="M' + (x - 2) + ' ' + (y + 5) + 'l14 -9l14 9z" fill="#5a3a1e"/></g>';
    const ware = (x, y, w, c) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="' + c + '"/>';
      for (let yy = y + 10; yy < 128; yy += 16) for (let xx = x + 8; xx < x + w - 10; xx += 16) g += '<rect class="dr-bl dr-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="8" height="9" fill="#ffd98a" opacity=".7"/>'; return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#dk)"/>' + stars(16) +
      ware(0, 70, 110, "#5a3b30") + ware(118, 84, 90, "#4a3a44") + ware(214, 64, 96, "#5a3b30") + ware(316, 88, 84, "#4a3a44") +
      tower(40, 36) + tower(250, 30) + tower(150, 50) +
      /* the wall */
      '<rect x="0" y="132" width="400" height="94" fill="#3a3c44"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#30323a" stroke-width="1"/>'; return b; })() +
      tag("DAS RACIST", 14, 192, 40, GOLD, -5) + tag("WE'RE JOKING", 196, 216, 17, RED, -4) + tag("KOOL A.D.", 26, 220, 15, CREAM, -3) + tag("CHILLIN' ISLAND", 246, 190, 12, "#c77dff", -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="dr-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Jefferson St", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Wyckoff Av", 346, 108, 12, "#fff") +
      '<circle class="dr-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("dk", "#0a0a18", "#2e2440"));
  }

  window.SCENES = { drJefferson: drJefferson, drMarket: drMarket, drRadio: drRadio, drCombo: drCombo, drCorner: drCorner };
})();
