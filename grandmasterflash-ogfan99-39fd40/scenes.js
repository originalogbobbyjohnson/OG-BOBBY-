/* Grandmaster Flash and the Furious Five game (NYC map, the Bronx: Longwood / Fox Street). Freeman St on the 2/5 el over Southern Blvd,
   the Black Door club on Prospect Ave, a 63 Park block party (Boston Rd & E 168 St) powered off the lamppost, Samuel Gompers vocational
   high school on Southern Blvd (where Flash studied electronics), and Fox St & E 163 St by his home tenement. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes ttspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.tt{transform-box:fill-box;transform-origin:50% 50%;animation:ttspin 1.8s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bob{animation:bob .6s ease-in-out infinite}.bob2{animation-delay:.2s}.bob3{animation-delay:.4s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}.nt{animation:note 2.2s linear infinite}.nt2{animation-delay:.7s}.nt3{animation-delay:1.4s}' +
    '@keyframes pump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.pump{transform-box:fill-box;transform-origin:50% 50%;animation:pump .45s ease-in-out infinite}' +
    '@keyframes spark{0%,100%{opacity:0}40%,60%{opacity:1}}.spk{animation:spark .9s steps(2) infinite}.spk2{animation-delay:.3s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* Bronx walk-up tenements with lit windows and fire escapes */
  const tenements = (col, lit, base) => { let g = ""; base = base || 170; [[0, 70, 70], [74, 58, 64], [262, 64, 66], [332, 52, 68]].forEach(([x, y, w]) => {
    g += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="' + col + '"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#000" opacity=".35"/>';
    for (let yy = y + 10; yy < base - 12; yy += 18) for (let xx = x + 7; xx < x + w - 10; xx += 15) g += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="7" height="10" fill="' + (lit ? "#ffd98a" : "#2a2f45") + '" opacity="' + (lit ? ".85" : ".7") + '"/>';
  }); return g; };
  const RED = "#ee352e", GREEN = "#00933c", GOLD = "#ffd23f", PINK = "#ff4fb4", BLUE = "#4fd1ff", CREAM = "#f4ead8", BRICK = "#9a4430";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const dancer = (x, y, cls, col) => '<g class="bob ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 5) + '" y="' + (y + 6) + '" width="10" height="18" rx="4" fill="' + col + '"/><path d="M' + (x - 5) + ' ' + (y + 9) + 'l-8 -10M' + (x + 5) + ' ' + (y + 9) + 'l8 -10M' + (x - 3) + ' ' + (y + 23) + 'l-4 14M' + (x + 3) + ' ' + (y + 23) + 'l4 14" stroke="' + col + '" stroke-width="3.5" stroke-linecap="round"/></g>';

  /* 1. Freeman St, up on the 2/5 el over Southern Blvd: green canopy, black station sign with the 2 and 5 bullets, the train sliding in */
  function freeman() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#f1)"/>' + stars(14) + tenements("#3a2c3a", true, 166) +
      '<path d="M0 44h400v12H0z" fill="#2f5a3c"/><rect x="0" y="56" width="400" height="4" fill="#244a31"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="60" width="6" height="104" fill="#2f5a3c"/>').join("") +
      '<rect x="88" y="66" width="224" height="30" rx="3" fill="#111"/><rect x="88" y="66" width="224" height="3" fill="#fff"/>' +
      '<text x="102" y="88" ' + font + ' font-size="15" fill="#fff">Freeman St</text>' + bullet(266, 81, "2", RED) + bullet(292, 81, "5", GREEN) +
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "2", RED) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="12" height="78" fill="#2f5a3c"/><path d="M' + (x + 12) + ' 186l60 0" stroke="#2f5a3c" stroke-width="4"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#4a4a4f"/>' +
      '<g class="car"><rect x="0" y="242" width="40" height="13" rx="4" fill="' + PINK + '"/></g><g class="car car2"><rect x="0" y="244" width="36" height="12" rx="4" fill="' + BLUE + '"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">SOUTHERN BLVD</text>',
      sky("f1", "#141a33", "#6a4d7a"));
  }

  /* 2. The Black Door on Prospect Ave: a tiny brick club with one black door, a hand-painted sign, a line outside, music leaking out */
  function blackdoor() {
    let brick = "";
    for (let y = 40; y < 196; y += 8) for (let x = (y / 8) % 2 ? 108 : 100; x < 300; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7e3524"/>';
    const fan = (x, cls) => '<g class="bob ' + cls + '"><circle cx="' + x + '" cy="170" r="6" fill="#121212"/><rect x="' + (x - 6) + '" y="176" width="12" height="22" rx="4" fill="#121212"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#f2)"/>' + stars(10) +
      '<rect x="0" y="60" width="96" height="140" fill="#3a2c3a"/><rect x="304" y="50" width="96" height="150" fill="#33283a"/>' +
      [[12, 76], [52, 76], [12, 110], [52, 110], [318, 70], [358, 70], [318, 104], [358, 104]].map(([x, y]) => '<rect class="bl" x="' + x + '" y="' + y + '" width="22" height="20" fill="#ffd98a" opacity=".7"/>').join("") +
      '<rect x="96" y="34" width="208" height="166" fill="' + BRICK + '"/>' + brick +
      '<rect x="96" y="30" width="208" height="8" fill="#5a2a1e"/>' +
      '<rect x="116" y="50" width="168" height="34" rx="3" fill="' + CREAM + '" stroke="#2a1a12" stroke-width="2"/>' +
      '<text class="flk" x="200" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#141414" textLength="148" lengthAdjust="spacingAndGlyphs">THE BLACK DOOR</text>' +
      /* the door */
      '<rect x="170" y="104" width="60" height="96" rx="2" fill="#0b0b0b" stroke="#3a3a3a" stroke-width="3"/><circle cx="220" cy="154" r="3" fill="' + GOLD + '"/>' +
      '<rect x="176" y="112" width="48" height="8" fill="#1d1d1d"/>' +
      '<g transform="translate(212 100)"><text class="nt" x="0" y="0" font-size="16" fill="' + PINK + '">&#9835;</text><text class="nt nt2" x="-26" y="0" font-size="14" fill="' + BLUE + '">&#9834;</text><text class="nt nt3" x="-12" y="0" font-size="15" fill="' + GOLD + '">&#9835;</text></g>' +
      /* window with a cardboard price sign */
      '<rect x="248" y="108" width="40" height="40" fill="#2c2440" stroke="#2a1a12" stroke-width="2"/><rect x="254" y="118" width="28" height="20" fill="#d8b98a"/><text x="268" y="133" text-anchor="middle" ' + font + ' font-size="12" fill="#2a1a12">$1</text>' +
      '<rect x="112" y="108" width="40" height="40" fill="#2c2440" stroke="#2a1a12" stroke-width="2"/><rect class="flk" x="118" y="114" width="28" height="28" fill="' + PINK + '" opacity=".35"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="200" width="400" height="4" fill="#8a8c90"/>' +
      fan(250, "") + fan(272, "bob2") + fan(294, "bob3") + fan(316, "") + fan(338, "bob2") +
      '<g class="car"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>' +
      '<rect x="44" y="140" width="4" height="62" fill="#3d4b3f"/><rect x="8" y="140" width="76" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="46" y="152" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">Prospect Ave</text>',
      sky("f2", "#120f2a", "#3b2a5a"));
  }

  /* 3. A 63 Park block party (Boston Rd & E 168 St): turntables on a folding table, speaker stacks, power run off the park lamppost, breakers */
  function park63() {
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 130l10 10M' + (x + 10) + ' 130l-10 10" stroke="#9aa3ad" stroke-width="1" opacity=".7"/>';
    const spk = x => '<rect x="' + x + '" y="148" width="34" height="56" rx="2" fill="#151515" stroke="#444" stroke-width="2"/><circle class="pump" cx="' + (x + 17) + '" cy="166" r="11" fill="#2a2a2a" stroke="#666" stroke-width="2"/><circle class="pump" cx="' + (x + 17) + '" cy="192" r="7" fill="#2a2a2a" stroke="#666" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#f3)"/>' + stars(10) + tenements("#4a3036", true, 132) +
      '<rect x="0" y="130" width="400" height="10" fill="none"/>' + fence + '<rect x="0" y="129" width="400" height="2" fill="#9aa3ad"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#2e3a33"/>' +
      /* lamppost + extension cord */
      '<rect x="346" y="40" width="5" height="160" fill="#2f4f3a"/><path d="M348 40q0-12 -18-12" stroke="#2f4f3a" stroke-width="5" fill="none"/><ellipse class="flk" cx="326" cy="32" rx="9" ry="5" fill="#fff3b0"/>' +
      '<path d="M348 186q-30 28-90 10t-60 -6" stroke="' + GOLD + '" stroke-width="2.5" fill="none"/><rect x="342" y="180" width="12" height="8" rx="2" fill="#333"/>' +
      /* DJ table */
      spk(60) + spk(286) +
      '<rect x="110" y="170" width="166" height="10" fill="#c8b48a"/><path d="M118 180l-6 30M268 180l6 30" stroke="#8a7a5a" stroke-width="4"/>' +
      '<rect x="116" y="158" width="64" height="12" rx="2" fill="#333"/><rect x="206" y="158" width="64" height="12" rx="2" fill="#333"/>' +
      '<g class="tt"><ellipse cx="148" cy="158" rx="24" ry="6" fill="#0d0d0d"/><ellipse cx="148" cy="158" rx="6" ry="2" fill="' + PINK + '"/><path d="M136 156h8" stroke="#555" stroke-width="1"/></g>' +
      '<g class="tt"><ellipse cx="238" cy="158" rx="24" ry="6" fill="#0d0d0d"/><ellipse cx="238" cy="158" rx="6" ry="2" fill="' + BLUE + '"/><path d="M226 156h8" stroke="#555" stroke-width="1"/></g>' +
      '<rect x="184" y="160" width="18" height="10" rx="2" fill="#555"/><rect class="spk" x="190" y="161" width="6" height="3" fill="' + GOLD + '"/>' +
      dancer(40, 214, "", "#101010") + dancer(84, 220, "bob2", "#101010") + dancer(326, 216, "bob3", "#101010") + dancer(362, 222, "", "#101010") +
      dancer(196, 222, "bob2", "#101010") +
      '<rect x="128" y="34" width="144" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="48" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BOSTON RD · E 168 ST</text>' +
      tag("63 PARK", 136, 116, 26, GOLD, -4),
      sky("f3", "#0d1030", "#4a2f5f"));
  }

  /* 4. Samuel Gompers vocational high school on Southern Blvd: red brick, limestone trim, a lit shop window with a workbench and soldering sparks */
  function gompers() {
    let brick = "";
    for (let y = 70; y < 200; y += 8) for (let x = (y / 8) % 2 ? 36 : 28; x < 372; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#8a3a28"/>';
    let wins = "";
    [[48, 84], [104, 84], [244, 84], [300, 84], [48, 140], [300, 140]].forEach(([x, y]) => wins += '<rect x="' + x + '" y="' + y + '" width="44" height="40" fill="#2c3550" stroke="#e8dcc0" stroke-width="3"/><path d="M' + (x + 22) + ' ' + y + 'v40M' + x + ' ' + (y + 20) + 'h44" stroke="#e8dcc0" stroke-width="2"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#f4)"/>' +
      '<circle cx="62" cy="36" r="16" fill="#ffe8a8"/>' +
      '<rect x="24" y="62" width="352" height="140" fill="#a8452f"/>' + brick +
      '<rect x="20" y="54" width="360" height="12" fill="#e8dcc0"/><rect x="24" y="126" width="352" height="6" fill="#e8dcc0"/>' +
      '<rect x="126" y="66" width="148" height="20" fill="#e8dcc0"/><text x="200" y="81" text-anchor="middle" ' + font + ' font-size="10" fill="#5a3a28" textLength="132" lengthAdjust="spacingAndGlyphs">SAMUEL GOMPERS</text>' + wins +
      /* the electronics shop window */
      '<rect x="104" y="140" width="96" height="44" fill="#ffe7a8" stroke="#e8dcc0" stroke-width="3"/><rect x="110" y="164" width="84" height="6" fill="#6b4a2a"/>' +
      '<rect x="120" y="150" width="28" height="14" rx="1" fill="#1f7a45"/><path d="M124 154h20M124 158h12" stroke="' + GOLD + '" stroke-width="1.2"/>' +
      '<path d="M170 150l14 12" stroke="#555" stroke-width="3" stroke-linecap="round"/><circle class="spk" cx="168" cy="162" r="3" fill="#fff"/><circle class="spk spk2" cx="164" cy="158" r="2" fill="' + BLUE + '"/>' +
      '<rect x="210" y="132" width="80" height="70" fill="#5a2a1e"/><rect x="218" y="140" width="30" height="62" fill="#3a2016"/><rect x="252" y="140" width="30" height="62" fill="#3a2016"/>' +
      '<path d="M206 130h88" stroke="#e8dcc0" stroke-width="4"/>' +
      /* flag */
      '<rect x="356" y="18" width="3" height="44" fill="#ccc"/><g class="flg"><rect x="359" y="20" width="28" height="16" fill="#1d4ed8"/><rect x="359" y="28" width="28" height="4" fill="#fff"/></g>' +
      '<rect x="0" y="202" width="400" height="58" fill="#55575c"/><rect x="0" y="202" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="230" width="46" height="14" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="36" cy="244" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="236" width="40" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="30" cy="249" r="4" fill="#111"/></g>' +
      '<text x="200" y="224" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">SOUTHERN BLVD</text>',
      sky("f4", "#5aa0e0", "#cfe6ff"));
  }

  /* 5. Fox St & E 163 St: green street signs, the wall tagged GRANDMASTER FLASH, his walk-up tenement with fire escapes behind */
  function corner() {
    let fe = "";
    for (let y = 40; y < 120; y += 22) fe += '<rect x="150" y="' + y + '" width="100" height="3" fill="#1a1a1a"/><path d="M150 ' + (y + 3) + 'v-10M250 ' + (y + 3) + 'v-10M160 ' + (y + 3) + 'l20 -22" stroke="#1a1a1a" stroke-width="2"/>';
    let wins = "";
    for (let y = 22; y < 122; y += 22) for (let x = 132; x < 270; x += 24) wins += '<rect class="bl bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="12" height="14" fill="#ffd98a" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#f5)"/>' + stars(16) +
      '<rect x="0" y="50" width="110" height="90" fill="#2a2338"/><rect x="290" y="44" width="110" height="96" fill="#2a2338"/>' +
      /* the tenement */
      '<rect x="120" y="10" width="160" height="130" fill="#7a4a3a"/><rect x="116" y="6" width="168" height="8" fill="#c9b08a"/>' + wins + fe +
      '<rect x="244" y="-4" width="26" height="14" fill="#5a3a2a"/><path d="M244 -4l13 -8 13 8" fill="#5a3a2a"/>' +
      /* wall */
      '<rect x="0" y="130" width="400" height="96" fill="#5e3a4a"/>' +
      (() => { let b = ""; for (let y = 136; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#4a2c3a" stroke-width="1"/>'; return b; })() +
      tag("GRANDMASTER", 14, 172, 30, GOLD, -5) + tag("FLASH", 36, 216, 36, PINK, -4) + tag("DON'T PUSH ME", 196, 192, 14, CREAM, -3) + tag("QUICK MIX", 196, 218, 20, BLUE, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="306" y="66" width="90" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="351" y="82" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Fox St</text>' +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="108" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">E 163 St</text>' +
      '<circle class="flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("f5", "#0a0c1a", "#2c2a54"));
  }

  window.SCENES = { freeman: freeman, blackdoor: blackdoor, park63: park63, gompers: gompers, corner: corner };
})();
