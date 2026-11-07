/* kendricklamar scenes (Regions tab: Los Angeles + SoCal; Compton). CSS classes prefixed kl- (the page's own anim-train is kept).
   1 Willowbrook/Rosa Parks station: the A Line at street level under the 105 freeway, a silver light-rail train sliding in, the C Line platform up in the freeway median.
   2 Centennial High School in Compton (his school, class of 2005): cream campus building, flags waving, the school bell.
   3 Greenleaf Blvd at night: a black 1987 GNX coupe rolling past palms and stucco houses under the streetlights.
   4 The home studio in Carson where he cut his early records: the vocal booth, mic, spinning reels, meters jumping.
   5 W 137th St and S Central Ave (his block): green signs, KENDRICK tagged, the Compton Courthouse tower behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes klflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kl-flk{animation:klflick 2.2s infinite}.kl-flk2{animation-delay:.7s}' +
    '@keyframes klcar{from{transform:translateX(-160px)}to{transform:translateX(540px)}}.kl-car{animation:klcar 7s linear infinite}.kl-car2{animation-delay:-3.5s}' +
    '@keyframes klcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.kl-carL{animation:klcarL 6s linear infinite}' +
    '@keyframes klsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.kl-palm{transform-box:fill-box;transform-origin:50% 100%;animation:klsway 3.5s ease-in-out infinite}.kl-palm2{animation-delay:-1.6s}' +
    '@keyframes klflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.94)}}.kl-flag{transform-box:fill-box;transform-origin:0 50%;animation:klflag 1.4s ease-in-out infinite}.kl-flag2{animation-delay:-.7s}' +
    '@keyframes klspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kl-sp{animation:klspray 1.4s ease-out infinite}.kl-sp2{animation-delay:.45s}' +
    '@keyframes klmeter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.kl-mt{transform-box:fill-box;transform-origin:50% 100%;animation:klmeter .9s ease-in-out infinite}.kl-mt2{animation-delay:.2s}.kl-mt3{animation-delay:.45s}.kl-mt4{animation-delay:.1s}' +
    '@keyframes klspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.kl-spin{transform-box:fill-box;transform-origin:50% 50%;animation:klspin 2.4s linear infinite}' +
    '@keyframes klbell{0%,100%{transform:rotate(0)}25%{transform:rotate(14deg)}75%{transform:rotate(-14deg)}}.kl-bell{transform-box:fill-box;transform-origin:50% 0;animation:klbell .7s ease-in-out infinite}' +
    '@keyframes klwave{0%,100%{opacity:.2}50%{opacity:.9}}.kl-wave{animation:klwave 1.2s ease-in-out infinite}.kl-wave2{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="kl-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    '<g fill="#2f6a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const house = (x, y, w, c, roof) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -16l' + (w / 2 + 4) + ' 16z" fill="' + roof + '"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y + 10) + '" width="14" height="12" fill="#ffd77a"/><rect x="' + (x + w - 22) + '" y="' + (y + 12) + '" width="10" height="22" fill="#4a3424"/>';
  const reel = (cx, cy) => '<g><circle cx="' + cx + '" cy="' + cy + '" r="16" fill="#2a2a30" stroke="#999" stroke-width="2"/><path d="M' + cx + ' ' + (cy - 16) + 'v32M' + (cx - 16) + ' ' + cy + 'h32" stroke="#999" stroke-width="2"/>' +
    '<animateTransform attributeName="transform" type="rotate" from="0 ' + cx + ' ' + cy + '" to="360 ' + cx + ' ' + cy + '" dur="2.4s" repeatCount="indefinite"/></g>';
  const ALINE = "#0072bc", CLINE = "#58a738", GOLD = "#e8c547", RED = "#c0392b", BLUE = "#2e86de";

  /* 1. Willowbrook/Rosa Parks station: A Line at street level, the 105 freeway overhead with the C Line platform in its median */
  function klstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 44) + '" y="128" width="32" height="18" rx="3" fill="#22303a"/>').join("");
    const train = '<g class="anim-train"><path d="M22 120h308q26 0 32 30v22H22z" fill="#dfe3e8" stroke="#6f7881" stroke-width="2"/>' + wins +
      '<rect x="22" y="150" width="340" height="5" fill="#3d4650"/><rect x="22" y="155" width="340" height="3" fill="' + ALINE + '"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (102 + i * 88) + '" y="128" width="4" height="42" fill="#aab2ba"/>').join("") +
      '<path d="M330 124q24 4 30 26h-30z" fill="#22303a"/><circle cx="356" cy="164" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 120l20 -14M230 120l20 -14" stroke="#555" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kls1)"/>' +
      '<circle cx="352" cy="26" r="14" fill="#fff2b0" opacity=".9"/>' +
      /* 105 freeway deck with the C Line platform canopy */
      '<rect x="0" y="40" width="400" height="22" fill="#b9b4aa"/><rect x="0" y="60" width="400" height="5" fill="#8d887e"/>' +
      '<path d="M140 40v-14h120v14" fill="none" stroke="#7d868f" stroke-width="3"/><path d="M134 26h132l-8 -8H142z" fill="' + CLINE + '"/>' +
      '<rect x="160" y="30" width="80" height="8" fill="#e8eaec"/><rect x="160" y="36" width="80" height="2" fill="' + CLINE + '"/>' +
      [40, 120, 280, 360].map(x => '<rect x="' + (x - 6) + '" y="65" width="12" height="55" fill="#a8a296"/>').join("") +
      car("kl-carL", 0, 50, "#f2f2f2") + car("kl-car", 0, 52, RED) +
      '<g class="kl-flk"><rect x="150" y="70" width="40" height="3" fill="#fff3c4"/></g><g class="kl-flk kl-flk2"><rect x="214" y="70" width="40" height="3" fill="#fff3c4"/></g>' +
      palm(20, 172, 96) + palm(384, 172, 92, "kl-palm2") +
      train +
      '<rect x="0" y="172" width="400" height="6" fill="#f2c200"/><rect x="0" y="178" width="400" height="16" fill="#c7c1b4"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#4a4a50"/>' +
      '<rect x="40" y="202" width="320" height="34" rx="3" fill="#111"/><text x="54" y="225" ' + font + ' font-size="15" fill="#fff">Willowbrook/Rosa Parks</text>' +
      '<circle cx="312" cy="219" r="11" fill="' + ALINE + '"/><text x="312" y="224.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">A</text>' +
      '<circle cx="338" cy="219" r="11" fill="' + CLINE + '"/><text x="338" y="224.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">C</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">IMPERIAL HWY · WILMINGTON AVE · METRO A LINE</text>',
      sky("kls1", "#5bb6ef", "#d8f0ff"));
  }

  /* 2. Centennial High School, Compton */
  function klcentennial() {
    const wins = (y) => Array.from({ length: 8 }, (_, i) => '<rect x="' + (50 + i * 38 + (i > 3 ? 26 : 0)) + '" y="' + y + '" width="20" height="20" rx="2" fill="#4f6f80"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kls2)"/>' +
      palm(18, 200, 124) + palm(384, 200, 118, "kl-palm2") +
      '<rect x="36" y="96" width="328" height="104" fill="#ecdcb8" stroke="#b9a274" stroke-width="2"/><rect x="36" y="90" width="328" height="8" fill="#c9b282"/>' +
      '<rect x="158" y="70" width="84" height="130" fill="#f2e6c8" stroke="#b9a274" stroke-width="2"/><rect x="154" y="64" width="92" height="8" fill="#c9b282"/>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11.5" fill="#7a1f1f" textLength="76" lengthAdjust="spacingAndGlyphs">CENTENNIAL</text>' +
      '<rect x="176" y="146" width="48" height="54" fill="#5a3a22"/><path d="M200 146v54" stroke="#3a2412" stroke-width="2"/>' +
      '<g class="kl-bell"><path d="M192 100q8 -6 16 0v12h-16z" fill="#c9a24a"/><circle cx="200" cy="114" r="2.5" fill="#7a5d14"/></g>' +
      wins(110) + wins(150) +
      '<rect x="56" y="176" width="92" height="16" rx="2" fill="#7a1f1f"/><text x="102" y="188" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CLASS OF 2005</text>' +
      '<rect x="262" y="176" width="92" height="16" rx="2" fill="#7a1f1f"/><text x="308" y="188" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">COMPTON, CA</text>' +
      '<rect x="100" y="30" width="3" height="66" fill="#888"/><g class="kl-flag"><rect x="103" y="32" width="34" height="20" fill="#b22234"/><rect x="103" y="32" width="14" height="10" fill="#3c3b6e"/><path d="M117 36h20M117 40h20M103 46h34M103 50h34" stroke="#fff" stroke-width="1.6"/></g>' +
      '<rect x="296" y="30" width="3" height="66" fill="#888"/><g class="kl-flag kl-flag2"><rect x="299" y="32" width="34" height="20" fill="#f5f2e8"/><rect x="299" y="46" width="34" height="3" fill="#b22234"/><circle cx="316" cy="40" r="4" fill="#7a4a2a"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8a8476"/><rect x="0" y="200" width="400" height="6" fill="#4f8a3e"/><path d="M0 232h400" stroke="#d8d2c0" stroke-width="2" stroke-dasharray="14 10"/>' +
      car("kl-car", 0, 240, "#d9d4c8") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#26323a" opacity=".85">CENTENNIAL HIGH SCHOOL · COMPTON</text>',
      sky("kls2", "#7cc4f2", "#e6f5ff"));
  }

  /* 3. Greenleaf Blvd at night: a black 1987 GNX coupe cruising */
  function klgnx() {
    const gnx = '<g class="kl-car"><path d="M0 214h126l-6 -16q-10 -4 -26 -6l-20 -16h-46l-18 16q-8 2 -10 6z" fill="#0b0b0d" stroke="#3a3a42" stroke-width="1.5"/>' +
      '<path d="M32 191l15 -13h40l16 13z" fill="#26323e"/><path d="M66 178v13" stroke="#0b0b0d" stroke-width="2.5"/>' +
      '<rect x="112" y="200" width="12" height="4" fill="#fff4c2"/><rect x="0" y="200" width="6" height="5" fill="#d32f2f"/>' +
      '<circle cx="28" cy="214" r="10" fill="#1a1a1a"/><circle cx="28" cy="214" r="5" fill="#8a8a92"/><circle cx="100" cy="214" r="10" fill="#1a1a1a"/><circle cx="100" cy="214" r="5" fill="#8a8a92"/>' +
      '<rect x="50" y="203" width="22" height="7" rx="1" fill="#e8e8e8"/><text x="61" y="209" text-anchor="middle" ' + font + ' font-size="6" fill="#111">GNX</text>' +
      '<path d="M124 202l60 -8v20z" fill="#fff6c2" opacity=".18"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kls3)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + ((i * 17) % 50 + 8) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<circle cx="330" cy="40" r="15" fill="#f4eccb"/><circle cx="324" cy="36" r="15" fill="#1b1f3a" opacity=".55"/>' +
      palm(70, 168, 104) + palm(250, 168, 116, "kl-palm2") + palm(372, 168, 96) +
      house(14, 134, 70, "#e8d2b0", "#7a4a34") + house(110, 134, 66, "#c9d8e0", "#4a5a6a") + house(200, 134, 72, "#efe0c8", "#8a3a2a") + house(300, 134, 68, "#d8e4c8", "#5a6a3a") +
      '<rect x="0" y="168" width="400" height="10" fill="#9a958a"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#2e2e34"/><path d="M0 222h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 2) + '" y="96" width="4" height="82" fill="#555"/><path d="M' + x + ' 96q14 -4 22 2" stroke="#555" stroke-width="3" fill="none"/><circle class="kl-flk" cx="' + (x + 22) + '" cy="100" r="5" fill="#ffe6a0"/><path d="M' + (x + 22) + ' 104l-18 74h36z" fill="#ffe6a0" opacity=".08"/>').join("") +
      gnx +
      '<rect x="274" y="70" width="120" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Greenleaf Blvd</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#e9e1cf" opacity=".85">GREENLEAF BLVD · COMPTON · AFTER DARK</text>',
      sky("kls3", "#0d1030", "#43305a"));
  }

  /* 4. The home studio in Carson: vocal booth, mic, reels and meters */
  function klbooth() {
    return svg(
      '<rect width="400" height="260" fill="#1a1416"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a2024"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="150" fill="#33282d"/>').join("") +
      /* booth window */
      '<rect x="200" y="22" width="180" height="104" rx="4" fill="#0e0c10" stroke="#7a6a5a" stroke-width="4"/>' +
      '<rect x="206" y="28" width="168" height="92" fill="#3a2a3e" opacity=".8"/>' +
      '<path d="M290 40v40" stroke="#bbb" stroke-width="3"/><rect x="281" y="36" width="18" height="26" rx="9" fill="#c9c9cf" stroke="#888" stroke-width="1.5"/><circle cx="290" cy="60" r="16" fill="none" stroke="#666" stroke-width="2"/>' +
      '<path d="M270 120v-36M310 120v-36" stroke="#888" stroke-width="2"/>' +
      '<g class="kl-wave"><path d="M316 44q8 6 0 12" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g><g class="kl-wave kl-wave2"><path d="M324 40q12 10 0 20" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>' +
      /* plaques on the wall */
      [24, 82, 140].map((x, i) => '<rect x="' + x + '" y="26" width="46" height="58" rx="2" fill="#5a3a22" stroke="#c9a24a" stroke-width="2"/><circle cx="' + (x + 23) + '" cy="50" r="15" fill="' + (i === 1 ? "#d9d9e0" : GOLD) + '"/><circle cx="' + (x + 23) + '" cy="50" r="4" fill="#5a3a22"/><rect x="' + (x + 8) + '" y="70" width="30" height="5" fill="#e8dcc0"/>').join("") +
      /* desk + reels + meters */
      '<path d="M0 150h400v22H0z" fill="#4a3a30"/><rect x="0" y="172" width="400" height="88" fill="#2a1f1a"/>' +
      '<rect x="20" y="116" width="150" height="40" rx="3" fill="#1b1b20" stroke="#555" stroke-width="1.5"/>' +
      reel(54, 136) + reel(136, 136) +
      '<path d="M54 152h82" stroke="#6a4a2a" stroke-width="2"/>' +
      '<rect x="40" y="182" width="320" height="56" rx="4" fill="#3a3a42" stroke="#666" stroke-width="1.5"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (52 + i * 19) + '" y="190" width="6" height="40" fill="#222"/><rect x="' + (49 + i * 19) + '" y="' + (196 + (i * 7) % 24) + '" width="12" height="6" rx="1" fill="#ddd"/>').join("") +
      '<g transform="translate(212 118)">' + [0, 1, 2, 3].map(i => '<rect class="kl-mt kl-mt' + (i + 1) + '" x="' + (i * 14) + '" y="0" width="10" height="30" fill="' + (i % 2 ? GOLD : "#4caf50") + '"/>').join("") + '</g>' +
      '<rect x="276" y="128" width="96" height="20" rx="2" fill="#0b0b0d"/><text x="324" y="142" text-anchor="middle" ' + font + ' font-size="9" fill="#ff4d4d" class="kl-flk">ON AIR</text>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#e9e1cf" opacity=".85">THE HOME STUDIO · CARSON</text>');
  }

  /* 5. W 137th St and S Central Ave: KENDRICK tagged, the Compton Courthouse tower behind */
  function klcorner() {
    const tower = '<rect x="150" y="34" width="100" height="100" fill="#cdc6b6"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (154 + i * 11) + '" y="38" width="5" height="96" fill="#9e9787"/>').join("") +
      '<rect x="146" y="28" width="108" height="8" fill="#b8b1a0"/><rect x="120" y="100" width="160" height="34" fill="#c2bba9"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (126 + i * 19) + '" y="108" width="12" height="18" fill="#5d6a72"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kls5)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 59) % 400) + '" cy="' + ((i * 11) % 22 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      tower +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="8" fill="#f3e6d0" opacity=".8">COMPTON COURTHOUSE</text>' +
      palm(60, 134, 70) + palm(330, 134, 76, "kl-palm2") +
      '<rect x="0" y="130" width="400" height="94" fill="#d9c9a8"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#c4b391" stroke-width="1"/>').join("") +
      tag("KENDRICK", 20, 196, 42, GOLD, -6) + tag("K.DOT", 36, 152, 18, BLUE, -4) + tag("TDE", 150, 146, 18, RED, -3) + tag("COMPTON", 150, 216, 15, "#f2f2f2", -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 104, "W 137th St") + sign(286, 124, 104, "S Central Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="kl-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("kl-car", 0, 240, "#0b0b0d") +
      '<g class="kl-sp"><circle cx="252" cy="172" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kl-sp kl-sp2"><circle cx="258" cy="166" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("kls5", "#1a1838", "#c86a4a"));
  }

  window.SCENES = { klstation, klcentennial, klgnx, klbooth, klcorner };
})();
