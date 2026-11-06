/* Lost Boyz game (NYC map, Queens: South Jamaica). Five small animated SVGs, 400 x 260. CSS classes are prefixed "lb-".
   1. The Q7 stop at Rockaway Blvd & 133 St: the bus pulling in at the blue stop sign, auto shops and two-family houses behind.
   2. Lincoln Park, South Jamaica: where the "Jeeps, Lex Coups, Bimaz & Benz" video was shot. The cars lined up by the park,
      the DJ table with two records spinning, the camera with its red light on.
   3. Quad Studios, 723 Seventh Ave: the console where they cut the first album, tape reels turning, meters jumping, Midtown glow in the window.
   4. Uptown Records, Manhattan: the label office, the gold record on the wall, the city lit up through the glass.
   5. Rockaway Blvd and 132 St ("132 Rockaway Boulevard" where they hung out and rhymed): green signs, LOST BOYZ on the wall,
      a jet coming down over the rooftops toward Kennedy with the approach lights blinking. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lb-flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.lb-flk{animation:lb-flick 2.4s infinite}.lb-flk2{animation-delay:1.1s}' +
    '@keyframes lb-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.lb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lb-spin 1.8s linear infinite}.lb-spin2{animation-duration:2.6s}' +
    '@keyframes lb-blink{0%,49%{opacity:1}50%,100%{opacity:.15}}.lb-blink{animation:lb-blink 1s steps(1) infinite}.lb-blink2{animation-delay:.25s}.lb-blink3{animation-delay:.5s}.lb-blink4{animation-delay:.75s}' +
    '@keyframes lb-meter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.lb-mt{transform-box:fill-box;transform-origin:50% 100%;animation:lb-meter .9s ease-in-out infinite}.lb-mt2{animation-delay:-.3s}.lb-mt3{animation-delay:-.6s}' +
    '@keyframes lb-leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,150px) rotate(300deg)}}.lb-leaf{animation:lb-leaf 6s linear infinite}.lb-leaf2{animation-delay:-2s}.lb-leaf3{animation-delay:-4s}' +
    '@keyframes lb-jet{from{transform:translate(-120px,-40px)}to{transform:translate(470px,46px)}}.lb-jet{animation:lb-jet 10s linear infinite}' +
    '@keyframes lb-car{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.lb-car{animation:lb-car 7s linear infinite}' +
    '@keyframes lb-glow{0%,100%{opacity:.55}50%{opacity:.95}}.lb-glow{animation:lb-glow 2.2s ease-in-out infinite}.lb-glow2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LIME = "#c6f04a", RED = "#ff5a36", GOLD = "#f5c518", CREAM = "#f7f3ea", SIGN = "#0f6b3a", BUS = "#0039a6";
  /* a boxy jeep, a low coupe and a long sedan, all plain shapes, no badges */
  const jeep = (x, y, col) => '<g><rect x="' + x + '" y="' + (y - 30) + '" width="62" height="24" rx="3" fill="' + col + '"/><rect x="' + (x + 6) + '" y="' + (y - 42) + '" width="40" height="14" rx="2" fill="' + col + '"/>' +
    '<rect x="' + (x + 9) + '" y="' + (y - 39) + '" width="15" height="9" fill="#bfe1f5"/><rect x="' + (x + 27) + '" y="' + (y - 39) + '" width="15" height="9" fill="#bfe1f5"/>' +
    '<rect x="' + (x + 60) + '" y="' + (y - 34) + '" width="6" height="16" rx="2" fill="#333"/><circle cx="' + (x + 66) + '" cy="' + (y - 26) + '" r="7" fill="#222" stroke="#555" stroke-width="2"/>' +
    '<circle cx="' + (x + 13) + '" cy="' + (y - 4) + '" r="8" fill="#151515"/><circle cx="' + (x + 13) + '" cy="' + (y - 4) + '" r="3" fill="#bbb"/><circle cx="' + (x + 49) + '" cy="' + (y - 4) + '" r="8" fill="#151515"/><circle cx="' + (x + 49) + '" cy="' + (y - 4) + '" r="3" fill="#bbb"/></g>';
  const coupe = (x, y, col) => '<g><path d="M' + x + ' ' + (y - 8) + 'v-12q0-4 6-5l14-2l12-10h26l14 10l12 2q6 1 6 6v11z" fill="' + col + '"/>' +
    '<path d="M' + (x + 23) + ' ' + (y - 27) + 'l9-8h22l10 8z" fill="#bfe1f5"/><path d="M' + (x + 43) + ' ' + (y - 35) + 'v8" stroke="' + col + '" stroke-width="2"/>' +
    '<circle cx="' + (x + 18) + '" cy="' + (y - 7) + '" r="7" fill="#151515"/><circle cx="' + (x + 18) + '" cy="' + (y - 7) + '" r="3" fill="#d9d9d9"/><circle cx="' + (x + 72) + '" cy="' + (y - 7) + '" r="7" fill="#151515"/><circle cx="' + (x + 72) + '" cy="' + (y - 7) + '" r="3" fill="#d9d9d9"/>' +
    '<rect x="' + (x + 86) + '" y="' + (y - 22) + '" width="4" height="4" fill="#fff6c2"/></g>';

  /* 1. The Q7 at Rockaway Blvd & 133 St */
  function q7() {
    let blds = "";
    [[0, 84, 90, "#8a5a44", "AUTO BODY"], [88, 70, 100, "#c9b89a", ""], [162, 64, 96, "#7d8f9c", ""], [230, 90, 86, "#9a6b4e", "TIRES"], [324, 76, 98, "#b7a48a", ""]].forEach(([x, w, y, col, sign], i) => {
      blds += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (168 - y) + '" fill="' + col + '"/>';
      if (sign) {
        blds += '<rect x="' + (x + 6) + '" y="' + (y + 8) + '" width="' + (w - 12) + '" height="14" fill="#1f2a44"/><text x="' + (x + w / 2) + '" y="' + (y + 18.5) + '" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">' + sign + '</text>' +
          '<rect x="' + (x + 8) + '" y="' + (y + 30) + '" width="' + (w - 16) + '" height="' + (130 - y) + '" fill="#3a3f4a"/><path d="M' + (x + 8) + ' ' + (y + 38) + 'h' + (w - 16) + 'M' + (x + 8) + ' ' + (y + 46) + 'h' + (w - 16) + 'M' + (x + 8) + ' ' + (y + 54) + 'h' + (w - 16) + '" stroke="#555b66" stroke-width="2"/>';
      } else {
        blds += '<path d="M' + (x - 3) + ' ' + y + 'h' + (w + 6) + 'v6H' + (x - 3) + 'z" fill="#5a4a3a"/>' +
          '<rect x="' + (x + 10) + '" y="' + (y + 14) + '" width="16" height="18" fill="#ffd98a" opacity=".75" class="lb-flk' + (i % 2 ? " lb-flk2" : "") + '"/><rect x="' + (x + w - 26) + '" y="' + (y + 14) + '" width="16" height="18" fill="#ffd98a" opacity=".6"/>' +
          '<rect x="' + (x + 10) + '" y="' + (y + 44) + '" width="16" height="18" fill="#9fc6e0"/><rect x="' + (x + w - 26) + '" y="' + (y + 44) + '" width="16" height="18" fill="#9fc6e0"/>' +
          '<path d="M' + (x + 4) + ' ' + (y + 40) + 'h' + (w - 8) + 'l-4 6H' + (x + 8) + 'z" fill="' + (i % 2 ? "#2f6b4a" : "#8a2b2b") + '"/>';
      }
    });
    let win = "";
    for (let x = 30; x < 230; x += 36) win += '<rect x="' + x + '" y="148" width="26" height="22" rx="2" fill="#9fc6e0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb1)"/>' + blds +
      '<rect x="0" y="166" width="400" height="18" fill="#8a8c90"/><rect x="0" y="182" width="400" height="4" fill="#5f6166"/><rect x="0" y="186" width="400" height="74" fill="#2f3138"/>' +
      '<g class="anim-train">' +
        '<rect x="10" y="138" width="270" height="62" rx="6" fill="#e9edf2" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="176" width="270" height="6" fill="' + BUS + '"/>' +
        '<rect x="258" y="144" width="18" height="40" rx="2" fill="#9fc6e0"/>' +
        '<rect x="160" y="140" width="92" height="12" rx="2" fill="#111"/><text x="206" y="149.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">Q7 ROCKAWAY BL</text>' +
        '<circle cx="60" cy="202" r="11" fill="#111"/><circle cx="60" cy="202" r="4" fill="#888"/><circle cx="230" cy="202" r="11" fill="#111"/><circle cx="230" cy="202" r="4" fill="#888"/>' +
        '<circle cx="276" cy="190" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#2f3138"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<text x="130" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + CREAM + '" letter-spacing="3">ROCKAWAY BLVD</text>' +
      '<rect x="331" y="96" width="4" height="114" fill="#9aa3ab"/>' +
      '<rect x="306" y="46" width="54" height="56" rx="4" fill="' + BUS + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="333" y="62" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text>' +
      '<rect x="314" y="68" width="38" height="22" rx="3" fill="#fff"/><text x="333" y="85" text-anchor="middle" ' + font + ' font-size="16" fill="' + BUS + '">Q7</text>' +
      '<rect x="292" y="112" width="106" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="345" y="124" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Rockaway Blvd</text>' +
      '<rect x="308" y="130" width="74" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="345" y="142" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">133 St</text>',
      sky("lb1", "#1c2a5a", "#f0a060"));
  }

  /* 2. Lincoln Park, South Jamaica: the Jeeps video shoot */
  function lincoln() {
    let trees = "";
    [[18, 92, 40], [86, 80, 44], [170, 90, 38], [250, 78, 46], [330, 88, 40], [392, 96, 32]].forEach(([x, y, r]) => trees += '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="60" fill="#5a3b22"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#2d5a2f"/><circle cx="' + (x + r * .35) + '" cy="' + (y - r * .35) + '" r="' + (r * .6) + '" fill="#3f7a40"/>');
    let fence = "";
    for (let x = 0; x <= 400; x += 12) fence += '<rect x="' + x + '" y="126" width="2.5" height="30" fill="#1d2a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb2)"/>' + '<circle cx="340" cy="44" r="22" fill="#fff1b0" opacity=".9"/>' + trees +
      fence + '<rect x="0" y="126" width="400" height="3" fill="#1d2a22"/><rect x="0" y="148" width="400" height="3" fill="#1d2a22"/>' +
      '<g class="lb-leaf"><path d="M120 60q6-6 10 0q-6 6-10 0z" fill="#e0a73a"/></g><g class="lb-leaf lb-leaf2"><path d="M260 50q6-6 10 0q-6 6-10 0z" fill="#c8662a"/></g><g class="lb-leaf lb-leaf3"><path d="M360 70q6-6 10 0q-6 6-10 0z" fill="#e0a73a"/></g>' +
      /* the park sign */
      '<rect x="22" y="150" width="4" height="26" fill="#5a3b22"/><rect x="70" y="150" width="4" height="26" fill="#5a3b22"/>' +
      '<rect x="12" y="132" width="72" height="24" rx="3" fill="#2f6b3a" stroke="' + CREAM + '" stroke-width="1.5"/><text x="48" y="142" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + CREAM + '">LINCOLN</text><text x="48" y="151" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + CREAM + '">PARK</text>' +
      /* the street with the cars lined up */
      '<rect x="0" y="156" width="400" height="104" fill="#3a3c42"/><rect x="0" y="156" width="400" height="6" fill="#8a8c90"/>' +
      jeep(92, 204, "#1d1d22") + coupe(166, 204, "#b8bec8") + coupe(254, 204, GOLD) +
      '<path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* the DJ table: two turntables spinning */
      '<rect x="6" y="196" width="84" height="36" fill="#222"/><rect x="2" y="190" width="92" height="8" fill="#444"/>' +
      '<g class="lb-spin"><circle cx="26" cy="194" r="11" fill="#0d0d0d"/><circle cx="26" cy="194" r="4" fill="' + RED + '"/><path d="M26 184v4" stroke="#555"/></g>' +
      '<g class="lb-spin lb-spin2"><circle cx="70" cy="194" r="11" fill="#0d0d0d"/><circle cx="70" cy="194" r="4" fill="' + LIME + '"/><path d="M70 184v4" stroke="#555"/></g>' +
      '<rect x="40" y="200" width="16" height="10" rx="1" fill="#666"/>' +
      '<text x="48" y="226" text-anchor="middle" ' + font + ' font-size="8" fill="' + LIME + '">LB FAM</text>' +
      /* the camera on its tripod, red light on */
      '<path d="M378 252l-10-44M378 252l0-44M378 252l10-44" stroke="#888" stroke-width="2.5"/><rect x="362" y="190" width="34" height="18" rx="3" fill="#222"/><rect x="350" y="193" width="14" height="11" rx="2" fill="#333"/><circle cx="350" cy="198.5" r="5" fill="#111" stroke="#666"/>' +
      '<circle cx="390" cy="195" r="3" fill="#ff2a2a" class="lb-blink"/><text x="366" y="186" ' + font + ' font-size="7" fill="#ff8a8a">REC</text>',
      sky("lb2", "#7ec3ef", "#e8f4fb"));
  }

  /* 3. Quad Studios, 723 Seventh Ave: the console session */
  function quad() {
    let faders = "";
    for (let i = 0; i < 16; i++) { const x = 70 + i * 16; faders += '<rect x="' + x + '" y="196" width="3" height="34" fill="#111"/><rect x="' + (x - 4) + '" y="' + (204 + (i * 7) % 18) + '" width="11" height="6" rx="1" fill="' + (i % 4 ? "#ddd" : RED) + '"/>' + '<circle cx="' + (x + 1.5) + '" cy="186" r="3" fill="#888"/><circle cx="' + (x + 1.5) + '" cy="176" r="3" fill="' + (i % 3 ? "#7a7a7a" : GOLD) + '"/>'; }
    let neon = "";
    [[30, 40, 52], [86, 22, 60], [150, 50, 44], [198, 30, 56], [258, 18, 50], [312, 44, 60]].forEach(([x, y, w]) => {
      neon += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (124 - y) + '" fill="#1c1a33"/>';
      for (let yy = y + 6; yy < 120; yy += 9) for (let xx = x + 4; xx < x + w - 4; xx += 8) neon += '<rect x="' + xx + '" y="' + yy + '" width="3" height="4" fill="#ffd98a" opacity=".35"/>';
    });
    [[36, 66, 40, 20, "#ff3d7f"], [96, 44, 40, 26, "#3ddcff"], [154, 78, 36, 18, GOLD], [204, 52, 44, 22, LIME], [264, 70, 38, 24, "#ff8a3d"], [318, 60, 48, 20, "#c77dff"]].forEach(([x, y, w, h, c], i) => neon += '<rect class="lb-glow' + (i % 2 ? " lb-glow2" : "") + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="2" fill="' + c + '"/>');
    return svg(
      '<rect width="400" height="260" fill="#1a1520"/>' +
      /* the big window on Seventh Ave */
      '<rect x="24" y="14" width="352" height="110" fill="#0b0b1e"/>' + neon +
      '<rect x="24" y="14" width="352" height="110" fill="none" stroke="#3a3346" stroke-width="6"/><path d="M200 14v110M24 70h352" stroke="#3a3346" stroke-width="4"/>' +
      '<text x="200" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="2">QUAD STUDIOS · 723 SEVENTH AVE</text>' +
      /* tape machine with two reels */
      '<rect x="14" y="146" width="56" height="84" rx="3" fill="#2a2a30"/>' +
      '<g class="lb-spin"><circle cx="30" cy="164" r="12" fill="#c0c4cc"/><circle cx="30" cy="164" r="4" fill="#333"/><path d="M30 152v24M18 164h24" stroke="#888" stroke-width="2"/></g>' +
      '<g class="lb-spin"><circle cx="56" cy="164" r="12" fill="#c0c4cc"/><circle cx="56" cy="164" r="4" fill="#333"/><path d="M56 152v24M44 164h24" stroke="#888" stroke-width="2"/></g>' +
      '<path d="M30 176q13 10 26 0" stroke="#5a3a1a" stroke-width="2" fill="none"/>' +
      /* the console */
      '<path d="M60 236l10-70h262l10 70z" fill="#3b3a44"/><rect x="66" y="166" width="268" height="6" fill="#55545f"/>' + faders +
      /* VU meters */
      '<rect x="340" y="146" width="46" height="84" rx="3" fill="#2a2a30"/>' +
      [0, 1, 2, 3].map(i => '<rect class="lb-mt' + (i % 3 ? " lb-mt" + (i % 3 + 1) : "") + '" x="' + (346 + i * 10) + '" y="160" width="6" height="56" fill="' + (i % 2 ? LIME : GOLD) + '"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#120e16"/>',
      "");
  }

  /* 4. Uptown Records, the label office: the gold record on the wall */
  function uptown() {
    let city = "";
    [[220, 70, 30], [252, 50, 26], [280, 84, 34], [316, 40, 22], [340, 64, 36]].forEach(([x, y, w]) => {
      city += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#1e2442"/>';
      for (let yy = y + 6; yy < 146; yy += 10) for (let xx = x + 4; xx < x + w - 4; xx += 7) city += '<rect class="lb-flk' + ((xx + yy) % 3 ? "" : " lb-flk2") + '" x="' + xx + '" y="' + yy + '" width="3" height="5" fill="#ffd98a" opacity=".7"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="#3a2a22"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#4a362b"/>' +
      /* window on the city */
      '<rect x="210" y="24" width="176" height="130" fill="url(#lb4)"/>' + stars(8).replace(/cx="(\d+)"/g, (m, v) => 'cx="' + (212 + (+v % 170)) + '"').replace(/cy="(\d+)"/g, (m, v) => 'cy="' + (28 + (+v % 40)) + '"') + city +
      '<rect x="210" y="24" width="176" height="130" fill="none" stroke="#2a1d16" stroke-width="6"/><path d="M298 24v130" stroke="#2a1d16" stroke-width="4"/>' +
      /* the gold record in its frame */
      '<rect x="30" y="28" width="150" height="120" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="5"/>' +
      '<g class="lb-glow"><circle cx="82" cy="86" r="40" fill="' + GOLD + '"/></g><circle cx="82" cy="86" r="30" fill="none" stroke="#c9a114" stroke-width="1.5"/><circle cx="82" cy="86" r="20" fill="none" stroke="#c9a114" stroke-width="1.5"/>' +
      '<circle cx="82" cy="86" r="12" fill="' + RED + '"/><circle cx="82" cy="86" r="2.5" fill="#1a1a1a"/>' +
      '<rect x="128" y="56" width="44" height="60" fill="#f2ead2"/><text x="150" y="74" text-anchor="middle" ' + font + ' font-size="7" fill="#3a2a22">LOST</text><text x="150" y="84" text-anchor="middle" ' + font + ' font-size="7" fill="#3a2a22">BOYZ</text>' +
      '<text x="150" y="100" text-anchor="middle" ' + font + ' font-size="8" fill="#a07c10">GOLD</text>' +
      '<text x="105" y="166" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="2">UPTOWN RECORDS</text>' +
      /* the desk, the phone with its line blinking, a stack of tapes */
      '<rect x="0" y="190" width="400" height="70" fill="#2a1d16"/><path d="M20 196h360l-10 40H30z" fill="#6b4630"/><rect x="20" y="192" width="360" height="6" fill="#8a5e40"/>' +
      '<rect x="318" y="174" width="40" height="20" rx="3" fill="#1b1b1b"/><path d="M320 174q18-14 36 0" stroke="#1b1b1b" stroke-width="6" fill="none"/><circle cx="350" cy="186" r="2.5" fill="' + LIME + '" class="lb-blink"/>' +
      '<rect x="230" y="178" width="40" height="7" fill="' + RED + '"/><rect x="232" y="171" width="40" height="7" fill="#1f2a44"/><rect x="229" y="164" width="40" height="7" fill="' + LIME + '"/>',
      sky("lb4", "#0b0d24", "#3a2f5e"));
  }

  /* 5. Rockaway Blvd and 132 St */
  function corner() {
    let lights = "";
    for (let i = 0; i < 6; i++) lights += '<rect x="' + (226 + i * 26) + '" y="' + (96 - i * 2) + '" width="3" height="' + (60 + i * 2) + '" fill="#444"/><circle class="lb-blink lb-blink' + ((i % 4) + 1) + '" cx="' + (227.5 + i * 26) + '" cy="' + (94 - i * 2) + '" r="3.5" fill="#fff4b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb5)"/>' + stars(14) +
      /* the jet coming down toward Kennedy */
      '<g class="lb-jet"><path d="M0 40h40l10-10h6l-5 10h14l5-5h5l-3 8 3 8h-5l-5-5h-14l5 10h-6l-10-10H0z" fill="#d8dee6"/><circle cx="2" cy="42" r="1.8" fill="#ff4d4d" class="lb-flk"/><circle cx="50" cy="44" r="1.6" fill="#4dff7a"/></g>' +
      /* rooftops of the two-family houses and the approach lights */
      '<path d="M0 150V112l24-18 24 18v38zM52 150V118l20-16 20 16v32zM96 150V108l26-20 26 20v42zM150 150V120l18-14 18 14v30z" fill="#1c1a2a"/>' + lights +
      /* the wall */
      '<rect x="0" y="150" width="300" height="80" fill="#5e4636"/>' +
      (() => { let b = ""; for (let y = 156; y < 230; y += 8) b += '<path d="M0 ' + y + 'h300" stroke="#4a372a" stroke-width="1"/>'; return b; })() +
      tag("LOST BOYZ", 12, 204, 34, LIME, -4) + tag("LB FAM", 206, 186, 20, GOLD, -6) + tag("GET UP", 16, 168, 15, CREAM, -3) + tag("FREAKY TAH", 120, 226, 16, RED, -2) +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="lb-car"><rect x="0" y="240" width="62" height="14" rx="5" fill="' + GOLD + '"/><rect x="12" y="234" width="32" height="9" rx="3" fill="#bfe1f5"/><circle cx="14" cy="255" r="4.5" fill="#111"/><circle cx="50" cy="255" r="4.5" fill="#111"/></g>' +
      /* the corner sign post */
      '<rect x="356" y="96" width="5" height="136" fill="#3d4b3f"/>' +
      '<rect x="304" y="98" width="96" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="352" y="114" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Rockaway Blvd</text>' +
      '<rect x="312" y="124" width="84" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="354" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">132 St</text>' +
      '<circle class="lb-flk" cx="358" cy="92" r="4" fill="#fff6c2"/>',
      sky("lb5", "#0b0d1c", "#4a3550"));
  }

  window.SCENES = { q7: q7, lincoln: lincoln, quad: quad, uptown: uptown, corner: corner };
})();
