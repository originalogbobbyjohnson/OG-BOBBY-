/* Fivio Foreign game (NYC map, Brooklyn: East Flatbush, "the 90s"). The 2 pulling into Newkirk Av–Little Haiti under Nostrand Av, the Brooklyn Bridge Park pier
   block party from the Big Drip video (2019), Rolling Loud New York at Citi Field (2022), the six-story brick building in the 90s where he and
   Rowdy Rebel grew up on the same floor (where 800 Foreign Side started), and Church Av & E 93rd St with Brookdale Hospital's tower on the skyline.
   400 x 260 SVGs. No logos, no faces. Every 9 is drawn by hand with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.hop{animation:hop .5s ease-in-out infinite}.hop2{animation-delay:-.25s}' +
    '@keyframes sweepL{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(18deg)}}.bmL{transform-box:view-box;animation:sweepL 3s ease-in-out infinite}' +
    '@keyframes sweepR{0%,100%{transform:rotate(22deg)}50%{transform:rotate(-20deg)}}.bmR{transform-box:view-box;animation:sweepR 3.4s ease-in-out infinite}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}.thump{transform-box:fill-box;transform-origin:50% 50%;animation:thump .45s ease-in-out infinite}' +
    '@keyframes drift{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:drift 3s linear infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/></g>';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.02) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.02) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  /* bold Helvetica text with any 9 swapped for the hand-drawn one; centred on cx */
  const WID = { " ": .28, "E": .67, "S": .67, "t": .33, "C": .72, "h": .61, "u": .61, "r": .39, "c": .56, "A": .72, "v": .56, "d": .61, "B": .72, "e": .56, "l": .28, "y": .56, "R": .72, "o": .61, "a": .56, "k": .56, "s": .56, "n": .61, "i": .28 };
  const tw = (s, sz) => { let w = 0; for (const ch of s) w += (/[0-9]/.test(ch) ? .56 : (WID[ch] || .6)); return w * sz; };
  const txt9 = (s, cx, y, sz, c) => { let x = cx - tw(s, sz) / 2, out = ""; for (const part of s.split(/(9)/)) { if (!part) continue; if (part === "9") { out += nine(x, y, sz, c); x += .56 * sz; } else { out += '<text x="' + x + '" y="' + y + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + sz + '" fill="' + c + '">' + part.replace(/ /g, " ") + '</text>'; x += tw(part, sz); } } return out; };
  const blade = (x, y, w, s, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt9(s, x + w / 2, y + 16, fs || 12, "#fff");
  const ICE = "#7fd3ff", RED = "#ff2e4d", GOLD = "#ffd166", R2 = "#ee352e", G5 = "#00933c";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. Newkirk Av–Little Haiti, underground on the Nostrand Av line: cream tile, the brown-red trim band, the mosaic name tablet, the black sign with the 2 and 5, the 2 pulling in */
  function station() {
    let tile = "";
    for (let y = 30; y < 150; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#ddd6c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tile += '<path d="M' + x + ' 26v124" stroke="#e4ddcc" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#f2ecdc"/>' + tile +
      '<rect x="0" y="0" width="400" height="26" fill="#34373a"/>' +
      [16, 96, 176, 256, 336].map(x => '<rect x="' + x + '" y="10" width="44" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      /* trim band */
      '<rect x="0" y="48" width="400" height="12" fill="#7a2e1f"/><rect x="0" y="51" width="400" height="6" fill="#c0703c"/>' +
      [20, 70, 120, 170, 220, 270, 320, 370].map(x => '<rect x="' + x + '" y="50" width="8" height="8" fill="#e6c27a"/>').join("") +
      /* mosaic tablet */
      '<rect x="40" y="70" width="170" height="32" fill="#c0703c"/><rect x="44" y="74" width="162" height="24" fill="#7a2e1f"/>' +
      '<text x="125" y="91" text-anchor="middle" ' + font + ' font-size="13" fill="#f2ecdc" letter-spacing="2">NEWKIRK AV</text>' +
      /* black hanging sign */
      '<rect x="222" y="62" width="172" height="34" rx="2" fill="#111"/><rect x="222" y="62" width="172" height="2.5" fill="#fff"/>' +
      '<text x="230" y="77" ' + font + ' font-size="12" fill="#fff">Newkirk Av</text><text x="230" y="90" ' + font + ' font-size="9" fill="#fff">Little Haiti</text>' + bullet(354, 79, "2", R2, false, 8) + bullet(376, 79, "5", G5, false, 8) +
      /* columns */
      [330, 380].map(x => '<rect x="' + x + '" y="100" width="10" height="76" fill="#5b6b5e"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="114" width="310" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="0" y="152" width="316" height="4" fill="' + R2 + '"/>' +
        '<rect x="296" y="124" width="16" height="24" rx="2" fill="#bcd3ea"/>' + bullet(304, 164, "2", R2, false, 8) +
        '<circle cx="16" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#8d8f8c"/>' +
      '<path d="M0 214h400M0 240h400" stroke="#7a7c79" stroke-width="2"/>' +
      person(80, 248, "#2a2a33") + person(312, 252, "#3b2a24") +
      tag("FIVIE", 160, 238, 22, ICE, -3)
    );
  }

  /* 2. Brooklyn Bridge Park, the pier lawn at sunset: the Big Drip block party, the Lower Manhattan skyline across the East River,
        string lights, a speaker stack thumping, the crowd bouncing */
  function bbpark() {
    const towers = [[20, 120, 26], [50, 96, 22], [76, 110, 30], [110, 70, 24], [138, 104, 20], [162, 54, 30], [196, 92, 22], [222, 80, 26], [252, 112, 22], [278, 98, 30], [312, 118, 24], [340, 104, 28], [372, 122, 24]];
    let city = "";
    towers.forEach(([x, y, w], i) => { city += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#3a2f4f"/>';
      for (let yy = y + 6; yy < 146; yy += 9) for (let xx = x + 4; xx < x + w - 3; xx += 7) if ((xx + yy + i) % 3) city += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="3" height="4" fill="#ffd98a" opacity=".75"/>'; });
    /* the tallest tower with its spire */
    city += '<path d="M171 54l4-20 4 20z" fill="#3a2f4f"/><rect x="174" y="18" width="2" height="18" fill="#3a2f4f"/>';
    let lights = "";
    for (let x = 6; x < 400; x += 18) lights += '<circle class="bl bl' + (x % 3 + 1) + '" cx="' + x + '" cy="' + (162 + Math.sin(x / 30) * 5) + '" r="2.5" fill="' + (x % 36 ? GOLD : ICE) + '"/>';
    let crowd = "";
    for (let i = 0; i < 9; i++) crowd += person(40 + i * 36, 238 + (i % 2) * 6, i % 2 ? "#1a1626" : "#24203a", "hop" + (i % 2 ? " hop2" : ""));
    return svg(
      '<rect width="400" height="260" fill="url(#p1)"/>' +
      '<circle cx="300" cy="104" r="22" fill="#ffb36b" opacity=".85"/>' + city +
      /* river */
      '<rect x="0" y="150" width="400" height="20" fill="#3c5a86"/>' +
      '<g class="wv"><path d="M0 158h60M90 164h70M200 157h60M300 163h80M420 158h40" stroke="#ffcf9e" stroke-width="2" opacity=".6"/></g>' +
      /* old pier pilings */
      [12, 26, 40, 360, 374, 388].map(x => '<rect x="' + x + '" y="160" width="5" height="14" fill="#4a3a2c"/>').join("") +
      '<path d="M0 162q200 14 400 0" stroke="#2a2a2a" stroke-width="1" fill="none"/>' + lights +
      /* lawn */
      '<rect x="0" y="172" width="400" height="88" fill="#3f8a4a"/><rect x="0" y="172" width="400" height="5" fill="#9a8a6a"/>' +
      /* speaker stack */
      '<rect x="340" y="186" width="44" height="58" fill="#141414"/>' +
      '<circle class="thump" cx="362" cy="202" r="10" fill="#333" stroke="#777" stroke-width="2"/><circle class="thump" cx="362" cy="228" r="10" fill="#333" stroke="#777" stroke-width="2"/>' +
      crowd +
      tag("BIG DRIP", 130, 206, 30, ICE, -4),
      sky("p1", "#2b1b4f", "#ff8a5c"));
  }

  /* 3. Rolling Loud New York at Citi Field, Queens: the red-brick rotunda front with its tall arched windows and limestone trim,
        the purple 7 rolling by on the el, stage lights sweeping the night */
  function citifield() {
    let brick = "";
    for (let y = 92; y < 196; y += 7) brick += '<path d="M60 ' + y + 'h280" stroke="#8a3424" stroke-width="1"/>';
    const arch = x => '<path d="M' + x + ' 190V122q20-26 40 0v68z" fill="#1d2440" stroke="#e8dcc0" stroke-width="3"/><path class="bl" d="M' + (x + 4) + ' 186V124q16-20 32 0v62z" fill="#3b4f8f" opacity=".7"/><path d="M' + (x + 20) + ' 104v86M' + (x + 4) + ' 150h32" stroke="#e8dcc0" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p2)"/>' + stars(16) +
      /* sweeping beams */
      '<g class="bmL" style="transform-origin:120px 90px"><path d="M120 90L70 -10L100 -10z" fill="' + ICE + '" opacity=".35"/></g>' +
      '<g class="bmR" style="transform-origin:280px 90px"><path d="M280 90L300 -10L330 -10z" fill="' + RED + '" opacity=".35"/></g>' +
      /* light towers */
      '<rect x="10" y="40" width="6" height="150" fill="#555"/><rect x="0" y="32" width="26" height="12" fill="#fffbe6" class="flk"/>' +
      '<rect x="384" y="40" width="6" height="150" fill="#555"/><rect x="374" y="32" width="26" height="12" fill="#fffbe6" class="flk"/>' +
      /* rotunda front */
      '<rect x="60" y="86" width="280" height="110" fill="#a8432c"/>' + brick +
      '<rect x="56" y="80" width="288" height="10" fill="#e8dcc0"/><rect x="56" y="76" width="288" height="5" fill="#c9bfa6"/>' +
      arch(78) + arch(130) + arch(230) + arch(282) +
      '<path d="M180 190V112q20-30 40 0v78z" fill="#1d2440" stroke="#e8dcc0" stroke-width="3"/><path class="bl bl2" d="M184 186V114q16-24 32 0v72z" fill="' + RED + '" opacity=".55"/>' +
      '<text x="200" y="100" text-anchor="middle" ' + font + ' font-size="8" fill="#5a2418" letter-spacing="3">FLUSHING, QUEENS</text>' +
      /* the el and the 7 */
      '<rect x="0" y="198" width="400" height="10" fill="#4a4f57"/>' + [30, 140, 250, 360].map(x => '<rect x="' + x + '" y="208" width="8" height="30" fill="#4a4f57"/>').join("") +
      '<g class="car"><rect x="0" y="182" width="120" height="16" rx="3" fill="#c9ced6"/><rect x="0" y="194" width="120" height="3" fill="#b933ad"/>' + bullet(108, 189, "7", "#b933ad", false, 6) + '</g>' +
      '<rect x="0" y="238" width="400" height="22" fill="#2d2f36"/>' +
      person(60, 256, "#151525", "hop") + person(110, 258, "#151525", "hop hop2") + person(290, 256, "#151525", "hop") + person(340, 258, "#151525", "hop hop2") +
      tag("ROLLING LOUD NY", 120, 250, 18, GOLD, -2),
      sky("p2", "#070b1f", "#33215a"));
  }

  /* 4. The building in the 90s: six stories of brown brick, fire escapes, the water tower on the roof, one floor lit up where
        Fivio and Rowdy Rebel grew up, the 800 tagged on the roof wall */
  function building() {
    let wins = "";
    for (let f = 0; f < 6; f++) for (let c = 0; c < 6; c++) {
      const x = 92 + c * 38, y = 70 + f * 26, lit = f === 3;
      wins += '<rect ' + (lit ? 'class="bl bl' + (c % 3 + 1) + '" ' : "") + 'x="' + x + '" y="' + y + '" width="18" height="16" fill="' + (lit ? "#ffd98a" : ((c + f) % 3 ? "#26324a" : "#6b5a3a")) + '"/>';
    }
    let esc = "";
    for (let f = 0; f < 5; f++) esc += '<rect x="168" y="' + (88 + f * 26) + '" width="60" height="3" fill="#222"/><path d="M172 ' + (88 + f * 26) + 'l14 26M214 ' + (88 + f * 26) + 'l-14 26" stroke="#222" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p3)"/>' + stars(22) +
      '<circle cx="340" cy="40" r="14" fill="#f5f0dc"/>' +
      /* neighbours */
      '<rect x="0" y="120" width="76" height="110" fill="#3a2a26"/><rect x="324" y="110" width="76" height="120" fill="#33262a"/>' +
      [14, 44].map(x => '<rect x="' + x + '" y="140" width="14" height="12" fill="#26324a"/><rect x="' + x + '" y="170" width="14" height="12" fill="#ffd98a" class="bl"/>').join("") +
      /* the building */
      '<rect x="80" y="58" width="240" height="172" fill="#7a4a34"/><rect x="76" y="52" width="248" height="8" fill="#b9a68a"/>' +
      '<rect x="80" y="160" width="240" height="2" fill="#5a3424"/>' + wins + esc +
      /* water tower */
      '<rect x="250" y="20" width="34" height="28" rx="3" fill="#6b4a2c"/><path d="M248 20l19-10 19 10z" fill="#4a3220"/><path d="M254 48v4M280 48v4" stroke="#333" stroke-width="3"/>' +
      tag("800", 100, 48, 22, ICE, -4) +
      /* entrance */
      '<rect x="182" y="206" width="36" height="24" fill="#1a1414"/><rect x="178" y="200" width="44" height="6" fill="#b9a68a"/><circle class="flk" cx="200" cy="196" r="3" fill="#fff6c2"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4c52"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="46" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="36" cy="254" r="4" fill="#111"/></g>' +
      tag("FOREIGN SIDE", 214, 252, 16, GOLD, -3),
      sky("p3", "#05070f", "#1f2a4a"));
  }

  /* 5. Church Av and E 93rd St, in the 90s: green signs, a streetlight, the wall tagged FIVIO FOREIGN, Brookdale Hospital's
        tower on Linden Blvd on the skyline behind, a bus rolling down Church Av */
  function corner() {
    let hosp = "";
    [[30, 96, 70], [100, 40, 46], [146, 90, 70]].forEach(([x, y, w]) => { hosp += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="#b59a78"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#8f7658"/>';
      for (let yy = y + 6; yy < 136; yy += 9) for (let xx = x + 5; xx < x + w - 4; xx += 8) hosp += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#ffe7a8" opacity=".7"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#p5)"/>' + stars(10) + hosp +
      '<text x="120" y="30" text-anchor="middle" ' + font + ' font-size="7" fill="#c9b8d8" letter-spacing="2">BROOKDALE HOSPITAL</text>' +
      /* wall */
      '<rect x="0" y="128" width="400" height="98" fill="#5a3a52"/>' +
      (() => { let b = ""; for (let y = 134; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#4a2c42" stroke-width="1"/>'; return b; })() +
      tag("FIVIO FOREIGN", 12, 190, 36, ICE, -5) + tag("800", 30, 222, 22, RED, -3) + tag("AYE AYE AYE", 130, 220, 18, GOLD, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="232" width="78" height="22" rx="4" fill="#f2f2f2"/><rect x="0" y="236" width="78" height="4" fill="#1f5fae"/>' +
        [6, 22, 38, 54].map(x => '<rect x="' + x + '" y="242" width="12" height="7" fill="#8fb4d9"/>').join("") + '<circle cx="14" cy="254" r="4" fill="#111"/><circle cx="64" cy="254" r="4" fill="#111"/></g>' +
      /* streetlight + signs */
      '<rect x="352" y="58" width="5" height="170" fill="#3d4b3f"/><path d="M354 58q0-16 -26-16" stroke="#3d4b3f" stroke-width="4" fill="none"/><circle class="flk" cx="326" cy="46" r="5" fill="#fff6c2"/>' +
      blade(290, 72, 106, "Church Av", 13) + blade(296, 98, 100, "E 93 St", 13),
      sky("p5", "#0c0a1c", "#3a2f5c"));
  }

  window.SCENES = { station: station, bbpark: bbpark, citifield: citifield, building: building, corner: corner };
})();
