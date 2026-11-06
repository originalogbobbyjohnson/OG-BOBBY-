/* Sleepy Hallow game (NYC map, Brooklyn: East Flatbush). The 2 pulling into Sterling St, underground on the Nostrand Av line;
   the East Flatbush living-room studio where he and Sheff G cut their first track, "Nightmare"; Irving Plaza off Union Square, the
   hometown last stop of the Still Sleep? tour; the Palladium in Times Square, the Boy Meets World tour stop in New York (March 2024);
   and Rutland Rd & Albany Av with the towers of Kings County Hospital behind.
   400 x 260 SVGs. No logos, no faces. No 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-120px)}}.carL{animation:carsL 8s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.hop{animation:hop .5s ease-in-out infinite}.hop2{animation-delay:-.25s}' +
    '@keyframes wave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.wv{transform-box:fill-box;transform-origin:50% 50%;animation:wave .7s ease-in-out infinite}' +
    '@keyframes zz{0%{transform:translate(0,0);opacity:0}30%{opacity:1}100%{transform:translate(14px,-30px);opacity:0}}.zz{animation:zz 3s linear infinite}.zz2{animation-delay:-1s}.zz3{animation-delay:-2s}' +
    '@keyframes hue{0%,100%{fill:#b28dff}33%{fill:#3ee6c1}66%{fill:#ff8fb1}}.hue{animation:hue 3s linear infinite}.hue2{animation-delay:-1s}.hue3{animation-delay:-2s}' +
    '@keyframes sweepL{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(18deg)}}.bmL{transform-box:view-box;animation:sweepL 3s ease-in-out infinite}' +
    '@keyframes sweepR{0%,100%{transform:rotate(22deg)}50%{transform:rotate(-20deg)}}.bmR{transform-box:view-box;animation:sweepR 3.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/></g>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, s, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + s + '</text>';
  const LAV = "#b28dff", TEAL = "#3ee6c1", PINK = "#ff8fb1", R2 = "#ee352e", G5 = "#00933c";

  /* 1. Sterling St, underground on the Nostrand Av line: cream wall tile, a blue-green tile band, the mosaic name tablet,
        the black sign with the 2 and the 5, I-beam columns, the 2 pulling in */
  function station() {
    let tile = "";
    for (let y = 30; y < 150; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#ddd6c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tile += '<path d="M' + x + ' 26v124" stroke="#e4ddcc" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#f1ebdb"/>' + tile +
      '<rect x="0" y="0" width="400" height="26" fill="#30343a"/>' +
      [16, 96, 176, 256, 336].map(x => '<rect x="' + x + '" y="10" width="44" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      /* tile band */
      '<rect x="0" y="46" width="400" height="14" fill="#1f5c5a"/><rect x="0" y="50" width="400" height="6" fill="#4f9a8f"/>' +
      [10, 60, 110, 160, 210, 260, 310, 360].map(x => '<rect x="' + x + '" y="49" width="8" height="8" fill="#e8d9a8" transform="rotate(45 ' + (x + 4) + ' 53)"/>').join("") +
      /* mosaic tablet */
      '<rect x="36" y="68" width="172" height="34" fill="#4f9a8f"/><rect x="40" y="72" width="164" height="26" fill="#1f5c5a"/>' +
      '<text x="122" y="90" text-anchor="middle" ' + font + ' font-size="14" fill="#f1ebdb" letter-spacing="3">STERLING ST</text>' +
      /* black hanging sign */
      '<rect x="222" y="62" width="172" height="34" rx="2" fill="#111"/><rect x="222" y="62" width="172" height="2.5" fill="#fff"/>' +
      '<text x="230" y="77" ' + font + ' font-size="12" fill="#fff">Sterling St</text><text x="230" y="90" ' + font + ' font-size="8.5" fill="#fff">Nostrand Av line</text>' + bullet(354, 79, "2", R2, false, 8) + bullet(376, 79, "5", G5, false, 8) +
      /* columns */
      [334, 382].map(x => '<rect x="' + x + '" y="100" width="9" height="76" fill="#4c5a52"/><rect x="' + (x - 2) + '" y="100" width="13" height="4" fill="#3b463f"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="114" width="310" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="0" y="152" width="316" height="4" fill="' + R2 + '"/>' +
        '<rect x="296" y="124" width="16" height="24" rx="2" fill="#bcd3ea"/>' + bullet(304, 164, "2", R2, false, 8) +
        '<circle cx="16" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#8b8d8a"/>' +
      '<path d="M0 214h400M0 240h400" stroke="#787a77" stroke-width="2"/>' +
      person(70, 248, "#2a2a33") + person(318, 252, "#2e2440") +
      tag("SLEEPY", 150, 240, 24, LAV, -3)
    );
  }

  /* 2. The living-room studio in East Flatbush where he and Sheff G recorded "Nightmare": a blanket hung on the wall for sound,
        a mic with a pop filter, a laptop with the waveform bouncing, the couch, the window with the block at night */
  function studio() {
    let wave = "";
    for (let i = 0; i < 16; i++) wave += '<rect class="wv" style="animation-delay:-' + (i * 0.13).toFixed(2) + 's" x="' + (236 + i * 5) + '" y="' + (150 - (6 + (i * 7) % 14)) + '" width="3" height="' + (12 + (i * 7) % 28) + '" fill="' + TEAL + '"/>';
    let blanket = "";
    for (let x = 30; x < 180; x += 12) blanket += '<path d="M' + x + ' 34v120" stroke="#3b2a5c" stroke-width="5" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="#241c2f"/>' +
      /* wall + window */
      '<rect x="0" y="0" width="400" height="190" fill="#3a2f45"/>' +
      '<rect x="252" y="24" width="120" height="84" fill="url(#s2)" stroke="#e8dfd0" stroke-width="5"/>' + stars(0) +
      '<path d="M312 24v84M252 66h120" stroke="#e8dfd0" stroke-width="3"/>' +
      [[256, 74, 22], [280, 62, 18], [300, 78, 30], [334, 56, 34]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (106 - y) + '" fill="#1a1426"/>').join("") +
      '<rect class="bl" x="262" y="84" width="4" height="5" fill="#ffd98a"/><rect class="bl bl2" x="306" y="86" width="4" height="5" fill="#ffd98a"/><rect class="bl bl3" x="342" y="66" width="4" height="5" fill="#ffd98a"/>' +
      '<circle cx="350" cy="38" r="8" fill="#f5f0dc"/>' +
      /* blanket on the wall */
      '<path d="M22 30h170v128q-85 10-170 0z" fill="#5a3f8c"/>' + blanket + '<circle cx="30" cy="34" r="3" fill="#d6c9a8"/><circle cx="184" cy="34" r="3" fill="#d6c9a8"/>' +
      /* mic stand + pop filter */
      '<path d="M108 190V112" stroke="#222" stroke-width="4"/><path d="M90 190h36" stroke="#222" stroke-width="5"/>' +
      '<rect x="100" y="84" width="16" height="30" rx="8" fill="#9aa0a8" stroke="#555" stroke-width="2"/><path d="M102 92h12M102 98h12M102 104h12" stroke="#666" stroke-width="1"/>' +
      '<circle cx="138" cy="98" r="14" fill="#111" opacity=".45" stroke="#222" stroke-width="2"/><path d="M124 98h-8" stroke="#222" stroke-width="2"/>' +
      /* desk + laptop */
      '<rect x="210" y="166" width="170" height="8" fill="#6b4a2c"/><path d="M222 174v40M368 174v40" stroke="#4a3220" stroke-width="5"/>' +
      '<path d="M228 166l10-46h96l10 46z" fill="#2b2b31"/><path d="M234 162l8-38h86l8 38z" fill="#141018"/>' + wave +
      '<rect x="214" y="164" width="140" height="5" rx="2" fill="#4a4a52"/>' +
      '<rect x="346" y="134" width="22" height="32" rx="3" fill="#1d1d22"/><circle class="bl" cx="357" cy="146" r="6" fill="#333" stroke="' + LAV + '" stroke-width="2"/>' +
      /* couch */
      '<rect x="0" y="196" width="400" height="64" fill="#2a2030"/>' +
      '<rect x="14" y="170" width="170" height="44" rx="8" fill="#6a5a7a"/><rect x="8" y="196" width="182" height="30" rx="8" fill="#7a6a8c"/>' +
      '<rect x="40" y="184" width="36" height="20" rx="5" fill="' + TEAL + '" opacity=".8"/>' +
      '<g class="zz"><text x="176" y="80" ' + font + ' font-size="14" fill="' + LAV + '">z</text></g><g class="zz zz2"><text x="186" y="70" ' + font + ' font-size="11" fill="' + LAV + '">z</text></g><g class="zz zz3"><text x="194" y="62" ' + font + ' font-size="9" fill="' + LAV + '">z</text></g>' +
      tag("NIGHTMARE", 200, 246, 26, PINK, -4) + tag("WINNERS CIRCLE", 34, 140, 16, "#f5e6a8", -3),
      sky("s2", "#0d0b26", "#3b2f6e"));
  }

  /* 3. Irving Plaza, Irving Pl & E 15th St off Union Square: the old four-story hall, the tall red neon blade sign, the black marquee,
        the line down the block for the last night of the Still Sleep? tour */
  function irving() {
    let wins = "";
    for (let f = 0; f < 3; f++) for (let c = 0; c < 5; c++) wins += '<rect ' + ((c + f) % 2 ? 'class="bl bl' + (c % 3 + 1) + '" ' : "") + 'x="' + (124 + c * 40) + '" y="' + (40 + f * 30) + '" width="18" height="20" fill="' + ((c + f) % 2 ? "#ffd98a" : "#2a2f45") + '"/>';
    const line = [30, 52, 74, 300, 322, 344, 366].map((x, i) => person(x, 238 + (i % 2) * 4, i % 2 ? "#1c1830" : "#2a2440", "hop" + (i % 2 ? " hop2" : ""))).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(18) +
      /* neighbours */
      '<rect x="0" y="70" width="100" height="160" fill="#2a2338"/><rect x="300" y="50" width="100" height="180" fill="#2e2640"/>' +
      [16, 50].map(x => '<rect class="bl" x="' + x + '" y="96" width="14" height="12" fill="#ffd98a" opacity=".7"/>').join("") +
      /* the hall */
      '<rect x="104" y="28" width="210" height="202" fill="#e6dccb"/><rect x="100" y="22" width="218" height="8" fill="#c9bca2"/>' + wins +
      '<rect x="104" y="128" width="210" height="4" fill="#c9bca2"/>' +
      /* blade sign */
      '<rect x="88" y="24" width="24" height="124" rx="3" fill="#1a1416" stroke="#555" stroke-width="2"/>' +
      'IRVINGPLAZA'.split("").map((ch, i) => '<text class="flk" x="100" y="' + (37 + i * 10.8) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#ff3b4e">' + ch + '</text>').join("") +
      /* marquee */
      '<rect x="112" y="140" width="194" height="34" fill="#141414"/><rect x="112" y="140" width="194" height="3" fill="#ffd98a" class="flk"/><rect x="112" y="171" width="194" height="3" fill="#ffd98a" class="flk"/>' +
      '<text x="209" y="155" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">SLEEPY HALLOW</text>' +
      '<text x="209" y="168" text-anchor="middle" ' + font + ' font-size="8" fill="' + TEAL + '" letter-spacing="1.5">STILL SLEEP? TOUR · TONIGHT</text>' +
      /* doors */
      '<rect x="150" y="186" width="118" height="44" fill="#2a1d22"/><path d="M180 186v44M209 186v44M238 186v44" stroke="#5a4048" stroke-width="2"/>' +
      '<g opacity=".28"><rect class="bl" x="150" y="186" width="118" height="44" fill="' + LAV + '"/></g><path d="M180 186v44M209 186v44M238 186v44" stroke="#5a4048" stroke-width="2"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4c52"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' + line +
      tag("UNION SQUARE", 232, 18, 12, TEAL, -3),
      sky("s3", "#070616", "#2a1f4a"));
  }

  /* 4. The Palladium, Times Square: the theater door under the glowing screens of Broadway, a yellow cab gliding by,
        stage lights through the doors, the Boy Meets World tour on the marquee */
  function palladium() {
    const screen = (x, y, w, h, cls) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#111"/><rect class="hue ' + cls + '" x="' + (x + 3) + '" y="' + (y + 3) + '" width="' + (w - 6) + '" height="' + (h - 6) + '" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      /* towers */
      '<rect x="0" y="20" width="96" height="190" fill="#1d1b2c"/><rect x="304" y="10" width="96" height="200" fill="#1d1b2c"/><rect x="96" y="40" width="208" height="170" fill="#262338"/>' +
      screen(6, 34, 84, 60, "") + screen(310, 24, 84, 50, "hue2") + screen(314, 84, 78, 70, "hue3") + screen(8, 104, 80, 48, "hue3") +
      screen(110, 50, 180, 44, "hue2") +
      '<text x="200" y="78" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="3">TIMES SQUARE</text>' +
      /* sweeping beams from the doors */
      '<g class="bmL" style="transform-origin:170px 150px"><path d="M170 150L130 98L150 98z" fill="' + TEAL + '" opacity=".3"/></g>' +
      '<g class="bmR" style="transform-origin:230px 150px"><path d="M230 150L252 98L272 98z" fill="' + PINK + '" opacity=".3"/></g>' +
      /* marquee + entrance */
      '<rect x="106" y="104" width="188" height="40" fill="#0e0e14" stroke="' + LAV + '" stroke-width="2"/>' +
      '<text x="200" y="121" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">PALLADIUM</text>' +
      '<text x="200" y="136" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + LAV + '" letter-spacing="1.5">BOY MEETS WORLD TOUR</text>' +
      [110, 124, 138, 152, 166, 180, 194, 208, 222, 236, 250, 264, 278].map((x, i) => '<circle class="bl bl' + (i % 3 + 1) + '" cx="' + (x + 6) + '" cy="148" r="2" fill="#ffd98a"/>').join("") +
      '<rect x="130" y="154" width="140" height="56" fill="#140f1c"/><g opacity=".3"><rect class="bl" x="130" y="154" width="140" height="56" fill="' + LAV + '"/></g>' +
      '<path d="M165 154v56M200 154v56M235 154v56" stroke="#3a3048" stroke-width="2"/>' +
      /* street */
      '<rect x="0" y="210" width="400" height="50" fill="#3d3f46"/><rect x="0" y="210" width="400" height="4" fill="#8a8c90"/>' +
      '<path d="M0 238h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 14" opacity=".5"/>' +
      '<g class="car"><rect x="0" y="222" width="58" height="18" rx="4" fill="#f6c21c"/><rect x="10" y="214" width="34" height="10" rx="3" fill="#f6c21c"/><rect x="14" y="216" width="12" height="6" fill="#8fb4d9"/><rect x="28" y="216" width="12" height="6" fill="#8fb4d9"/><rect x="22" y="210" width="12" height="4" fill="#fff"/><circle cx="12" cy="240" r="5" fill="#111"/><circle cx="46" cy="240" r="5" fill="#111"/></g>' +
      person(40, 258, "#151525", "hop") + person(360, 258, "#151525", "hop hop2") +
      tag("BOY MEETS WORLD", 96, 32, 18, PINK, -3),
      sky("s4", "#0a0716", "#2b1f46"));
  }

  /* 5. Rutland Rd and Albany Av, East Flatbush: green street signs, a streetlight, the wall tagged SLEEPY HALLOW,
        the brick towers of Kings County Hospital on Clarkson Av behind, a car rolling down Rutland */
  function corner() {
    let hosp = "";
    [[20, 70, 64], [96, 30, 56], [160, 58, 74], [244, 86, 50]].forEach(([x, y, w]) => { hosp += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="#8a5a46"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#6b4434"/>';
      for (let yy = y + 6; yy < 136; yy += 9) for (let xx = x + 5; xx < x + w - 4; xx += 8) hosp += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#ffe7a8" opacity=".7"/>'; });
    let rows = "";
    [[300, 96], [340, 104]].forEach(([x, y]) => { rows += '<rect x="' + x + '" y="' + y + '" width="40" height="' + (140 - y) + '" fill="#5b4a5e"/><rect x="' + x + '" y="' + (y - 5) + '" width="40" height="6" fill="#433646"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(12) + '<circle cx="360" cy="40" r="13" fill="#f5f0dc"/>' + hosp + rows +
      '<text x="140" y="22" text-anchor="middle" ' + font + ' font-size="7" fill="#d2c3e6" letter-spacing="2">KINGS COUNTY HOSPITAL</text>' +
      /* wall */
      '<rect x="0" y="128" width="400" height="98" fill="#3e3358"/>' +
      (() => { let b = ""; for (let y = 134; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#322a49" stroke-width="1"/>'; return b; })() +
      tag("SLEEPY HALLOW", 12, 188, 34, LAV, -5) + tag("WINNERS CIRCLE", 16, 220, 14, TEAL, -3) + tag("I JUST WANNA SLIDE", 196, 222, 13, PINK, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="234" width="62" height="18" rx="5" fill="#2b2b33"/><rect x="12" y="228" width="34" height="9" rx="3" fill="#2b2b33"/><rect x="15" y="230" width="12" height="6" fill="#8fb4d9"/><rect x="30" y="230" width="12" height="6" fill="#8fb4d9"/><circle cx="12" cy="252" r="5" fill="#111"/><circle cx="50" cy="252" r="5" fill="#111"/><circle cx="61" cy="241" r="2" fill="#fff6c2"/></g>' +
      /* streetlight + signs */
      '<rect x="352" y="58" width="5" height="170" fill="#3d4b3f"/><path d="M354 58q0-16 -26-16" stroke="#3d4b3f" stroke-width="4" fill="none"/><circle class="flk" cx="326" cy="46" r="5" fill="#fff6c2"/>' +
      blade(290, 72, 106, "Rutland Rd", 13) + blade(294, 98, 102, "Albany Av", 13),
      sky("s5", "#0b0920", "#3a2f62"));
  }

  window.SCENES = { station: station, studio: studio, irving: irving, palladium: palladium, corner: corner };
})();
