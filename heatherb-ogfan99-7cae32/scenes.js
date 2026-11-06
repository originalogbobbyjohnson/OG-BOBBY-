/* Heather B. game (NJ region: Jersey City, where Heather B. Gardner was born and raised).
   The PATH under Grove Street, the cast-iron loft at 565 Broadway in SoHo where she lived on MTV's first Real World,
   the morning radio studio where she co-hosted for years, the old Hudson & Manhattan Railroad Powerhouse on the Jersey City waterfront,
   and Grove St & Montgomery St with Jersey City's white City Hall behind. 400 x 260 SVGs. All CSS classes prefixed hbx-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hbxcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.hbx-car{animation:hbxcar 7s linear infinite;animation-delay:-2.5s}.hbx-car2{animation-delay:-3.5s}' +
    '@keyframes hbxcarL{from{transform:translateX(480px)}to{transform:translateX(-120px)}}.hbx-carL{animation:hbxcarL 8s linear infinite;animation-delay:-4s}' +
    '@keyframes hbxblink{0%,100%{opacity:.25}50%{opacity:1}}.hbx-bl{animation:hbxblink 1.6s ease-in-out infinite}.hbx-bl2{animation-delay:.5s}.hbx-bl3{animation-delay:1s}' +
    '@keyframes hbxrec{0%,49%{opacity:1}50%,100%{opacity:0}}.hbx-rec{animation:hbxrec 1s steps(1) infinite}' +
    '@keyframes hbxflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.hbx-flk{animation:hbxflick 2.4s infinite}' +
    '@keyframes hbxmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.hbx-mt{transform-box:fill-box;transform-origin:50% 100%;animation:hbxmeter .6s ease-in-out infinite}.hbx-mt2{animation-delay:.2s}.hbx-mt3{animation-delay:.4s}' +
    '@keyframes hbxwave{0%,100%{transform:scaleX(.6);opacity:.4}50%{transform:scaleX(1);opacity:1}}.hbx-wave{transform-box:fill-box;transform-origin:0% 50%;animation:hbxwave 1.2s ease-in-out infinite}.hbx-wave2{animation-delay:.3s}.hbx-wave3{animation-delay:.6s}' +
    '@keyframes hbxpuff{0%{opacity:.9;transform:scale(.3)}100%{opacity:0;transform:scale(1.6)}}.hbx-puff{transform-box:fill-box;transform-origin:50% 50%;animation:hbxpuff 1.6s ease-out infinite}.hbx-puff2{animation-delay:.8s}' +
    '@keyframes hbxbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.hbx-bird{animation:hbxbird 11s linear infinite;animation-delay:-5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const pill = (x, y, w, label, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + w + '" height="18" rx="9" fill="' + color + '"/>' + txt(label, x + w / 2, y + 4, 10, dark ? "#000" : "#fff");
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 37) % 44) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const AMBER = "#ffb703", PRED = "#d93a30", PYEL = "#ff9900", CREAM = "#f4ecd8", GSIGN = "#0f6b3a";

  /* 1. Grove Street PATH, underground: pale tile wall, the dark PATH sign with the red NWK-WTC and yellow JSQ-33 route pills, the silver PATH car pulling in */
  function grove() {
    let tiles = "";
    for (let y = 30; y < 150; y += 12) for (let x = (y / 12) % 2 ? 0 : 12; x < 400; x += 24) tiles += '<rect x="' + x + '" y="' + y + '" width="23" height="11" fill="#e6e9ec"/>';
    let win = "";
    for (let x = 34; x < 290; x += 40) win += '<rect x="' + x + '" y="112" width="26" height="22" rx="3" fill="#bfe0f7" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfd4d9"/>' + tiles +
      '<rect x="0" y="0" width="400" height="28" fill="#2a2d33"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="hbx-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 28) + '" y="20" width="56" height="6" rx="2" fill="#fffbe0"/>').join("") +
      '<rect x="0" y="40" width="400" height="6" fill="' + PRED + '"/>' +
      /* sign */
      '<rect x="30" y="54" width="340" height="34" rx="3" fill="#15171c"/><rect x="30" y="54" width="340" height="3" fill="#fff"/>' +
      '<text x="44" y="78" ' + font + ' font-size="16" fill="#fff">Grove Street</text>' +
      pill(212, 72, 70, "NWK–WTC", PRED) + pill(288, 72, 66, "JSQ–33", PYEL, true) +
      [16, 384].map(x => '<rect x="' + (x - 5) + '" y="28" width="10" height="132" fill="#59606b"/>').join("") +
      /* the PATH car */
      '<g class="anim-train">' +
        '<rect x="6" y="98" width="310" height="62" rx="8" fill="#c8ccd2" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="6" y="140" width="310" height="5" fill="' + PRED + '"/>' +
        '<rect x="292" y="106" width="20" height="28" rx="3" fill="#bfe0f7"/>' +
        '<rect x="252" y="100" width="56" height="10" rx="2" fill="#111"/><text x="280" y="108" text-anchor="middle" ' + font + ' font-size="7" fill="' + PYEL + '">33 ST</text>' +
        '<circle cx="306" cy="152" r="3" fill="#fff6c2"/><circle cx="16" cy="152" r="3" fill="#ff5a4a"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5f6166"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3c40"/>' +
      person(334, 196, "#1d1d22") + person(356, 200, "#2b2b31") +
      txt("JERSEY CITY", 150, 234, 12, CREAM, 'letter-spacing="4"'));
  }

  /* 2. 565 Broadway at Prince St, SoHo: the cream cast-iron facade, rows of arched windows and slim columns, the camcorder rolling with the red REC light, a cab going by */
  function loft() {
    let f = "";
    const cols = 7, x0 = 40, cw = 46;
    for (let r = 0; r < 4; r++) {
      const y = 46 + r * 38;
      f += '<rect x="' + x0 + '" y="' + (y - 4) + '" width="' + cols * cw + '" height="4" fill="#d8cdb4"/>';
      for (let c = 0; c < cols; c++) {
        const x = x0 + c * cw + 8;
        f += '<path d="M' + x + ' ' + (y + 30) + 'v-20a15 12 0 0 1 30 0v20z" fill="' + ((r + c) % 3 === 0 ? "#ffd98a" : "#2c3440") + '" stroke="#bdb196" stroke-width="2"/>' +
          '<path d="M' + (x + 15) + ' ' + (y + 6) + 'v24M' + x + ' ' + (y + 18) + 'h30" stroke="#bdb196" stroke-width="1.2"/>';
        f += '<rect x="' + (x0 + c * cw) + '" y="' + y + '" width="6" height="34" fill="#e3d9c1"/>';
      }
      f += '<rect x="' + (x0 + cols * cw - 6) + '" y="' + y + '" width="6" height="34" fill="#e3d9c1"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#hbl)"/>' +
      '<rect x="34" y="20" width="334" height="178" fill="#efe6cf"/>' +
      '<rect x="28" y="14" width="346" height="12" fill="#d8cdb4"/><rect x="34" y="26" width="334" height="6" fill="#c9bd9f"/>' + f +
      /* street level */
      '<rect x="34" y="198" width="334" height="30" fill="#3a3f48"/>' +
      '<rect x="176" y="202" width="48" height="26" fill="#1c2027"/>' + txt("565", 200, 197, 9, "#3a3f48") +
      '<rect x="44" y="204" width="120" height="18" fill="#9fc7e6" opacity=".7"/><rect x="236" y="204" width="122" height="18" fill="#9fc7e6" opacity=".7"/>' +
      /* sidewalk + street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="hbx-car"><rect x="0" y="238" width="50" height="14" rx="4" fill="#f4c20d"/><rect x="12" y="232" width="24" height="8" rx="2" fill="#f4c20d"/><circle cx="12" cy="252" r="4" fill="#111"/><circle cx="38" cy="252" r="4" fill="#111"/></g>' +
      /* the camcorder */
      '<g transform="translate(300 150)"><rect x="0" y="0" width="56" height="30" rx="5" fill="#1b1c20" stroke="#777" stroke-width="1.5"/><rect x="56" y="6" width="16" height="18" rx="3" fill="#2a2b31"/><circle cx="72" cy="15" r="7" fill="#0e1830" stroke="#666"/>' +
        '<circle cx="10" cy="9" r="4" fill="#ff2a2a"/><text x="18" y="12" ' + font + ' font-size="8" fill="#ff2a2a" class="hbx-rec">REC</text></g>' +
      /* street signs */
      '<rect x="14" y="120" width="4" height="108" fill="#3d4b3f"/>' +
      '<rect x="-2" y="120" width="70" height="16" rx="2" fill="' + GSIGN + '" stroke="#fff" stroke-width="1"/>' + txt("Broadway", 33, 132, 10, "#fff") +
      '<rect x="-2" y="138" width="70" height="16" rx="2" fill="' + GSIGN + '" stroke="#fff" stroke-width="1"/>' + txt("Prince St", 33, 150, 10, "#fff") +
      txt("SOHO LOFT", 200, 11, 9, CREAM, 'letter-spacing="4" opacity=".85"'),
      sky("hbl", "#7fb2e0", "#d9ecf7"));
  }

  /* 3. The morning show: a radio studio high over Midtown at sunrise, two mics on boom arms, headphones, the board's meters jumping, the ON AIR light glowing */
  function studio() {
    let towers = "";
    [[20, 70, 40], [66, 50, 34], [104, 84, 30], [140, 40, 38], [184, 64, 30], [222, 30, 40], [268, 70, 36], [310, 52, 34], [350, 80, 44]].forEach(([x, y, w], i) => {
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#3b3550"/>';
      for (let yy = y + 8; yy < 144; yy += 12) for (let xx = x + 5; xx < x + w - 6; xx += 10) if ((xx + yy + i) % 4) towers += '<rect class="hbx-bl hbx-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="4" height="6" fill="#ffd98a" opacity=".6"/>';
    });
    let meters = "";
    for (let i = 0; i < 10; i++) meters += '<rect class="hbx-mt hbx-mt' + (i % 3 + 1) + '" x="' + (146 + i * 11) + '" y="200" width="7" height="22" fill="' + (i > 7 ? "#ff4b3a" : i > 5 ? AMBER : "#4cd964") + '"/>';
    const mic = (bx, flip) => '<path d="M' + bx + ' 168l' + (flip ? -30 : 30) + '-40l' + (flip ? -16 : 16) + ' 18" stroke="#9aa0a8" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<rect x="' + (bx + (flip ? -54 : 38)) + '" y="140" width="16" height="30" rx="8" fill="#2a2b31" stroke="#777" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1b26"/>' +
      '<rect x="14" y="16" width="372" height="136" fill="url(#hbs)"/>' + '<g clip-path="url(#hbsclip)"><circle cx="300" cy="118" r="26" fill="#ffcf6b" opacity=".9"/>' + towers + '</g>' +
      '<path d="M14 16h372v136H14z" fill="none" stroke="#0e0d14" stroke-width="8"/><rect x="196" y="16" width="8" height="136" fill="#0e0d14"/>' +
      /* ON AIR */
      '<rect x="160" y="22" width="80" height="22" rx="4" fill="#3a0c0c" stroke="#111" stroke-width="2"/>' +
      '<g class="hbx-bl"><rect x="162" y="24" width="76" height="18" rx="3" fill="#ff2a2a"/></g>' + txt("ON AIR", 200, 38, 13, "#fff") +
      /* desk + board */
      '<rect x="0" y="168" width="400" height="92" fill="#2b2733"/><rect x="0" y="168" width="400" height="6" fill="#4a4456"/>' +
      '<rect x="130" y="190" width="140" height="40" rx="4" fill="#15141b" stroke="#555" stroke-width="1.5"/>' + meters +
      mic(60, false) + mic(340, true) +
      /* headphones */
      '<path d="M36 214a18 18 0 0 1 36 0" stroke="#c9ced6" stroke-width="4" fill="none"/><rect x="30" y="210" width="10" height="16" rx="4" fill="' + AMBER + '"/><rect x="68" y="210" width="10" height="16" rx="4" fill="' + AMBER + '"/>' +
      /* sound waves */
      '<g fill="none" stroke="' + AMBER + '" stroke-width="2.5" stroke-linecap="round"><path class="hbx-wave" d="M300 220q8 -8 16 0t16 0t16 0"/><path class="hbx-wave hbx-wave2" d="M300 232q8 -8 16 0t16 0t16 0"/><path class="hbx-wave hbx-wave3" d="M300 244q8 -8 16 0t16 0t16 0"/></g>' +
      txt("THE MORNING SHOW", 200, 252, 10, CREAM, 'letter-spacing="3"'),
      sky("hbs", "#ff9e6b", "#ffd9a8") + '<clipPath id="hbsclip"><rect x="14" y="16" width="372" height="136"/></clipPath>');
  }

  /* 4. The Hudson & Manhattan Railroad Powerhouse on the Jersey City waterfront: red brick, tall round-arched windows between brick piers, the light rail car gliding past */
  function powerhouse() {
    let arches = "";
    for (let i = 0; i < 6; i++) {
      const x = 60 + i * 48;
      arches += '<rect x="' + (x - 6) + '" y="58" width="8" height="132" fill="#7c2f22"/>';
      arches += '<path d="M' + (x + 6) + ' 180v-92a14 14 0 0 1 28 0v92z" fill="#2a2c33" stroke="#c8a27a" stroke-width="2"/>';
      arches += '<path d="M' + (x + 20) + ' 76v104M' + (x + 6) + ' 110h28M' + (x + 6) + ' 145h28" stroke="#5e6470" stroke-width="1.2"/>';
    }
    let brick = "";
    for (let y = 64; y < 190; y += 8) brick += '<path d="M44 ' + y + 'h312" stroke="#8a3a2b" stroke-width="1" opacity=".5"/>';
    let skyline = "";
    [[0, 110, 30], [32, 96, 22], [360, 100, 40]].forEach(([x, y, w]) => skyline += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (190 - y) + '" fill="#4d5675"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#hbp)"/>' + skyline +
      '<path class="hbx-bird" d="M0 40q5-5 10 0q5-5 10 0" stroke="#2b2b33" stroke-width="2" fill="none"/>' +
      '<rect x="44" y="40" width="312" height="150" fill="#9c4532"/>' + brick +
      '<rect x="38" y="34" width="324" height="12" fill="#7c2f22"/><rect x="44" y="46" width="312" height="6" fill="#b7654c"/>' + arches +
      '<rect x="44" y="184" width="312" height="8" fill="#6d6559"/>' +
      txt("THE POWERHOUSE", 200, 26, 10, "#2b2b33", 'letter-spacing="4"') +
      /* tracks + light rail */
      '<rect x="0" y="192" width="400" height="68" fill="#545a60"/><rect x="0" y="222" width="400" height="3" fill="#2d3035"/><rect x="0" y="238" width="400" height="3" fill="#2d3035"/>' +
      '<path d="M0 182h400" stroke="#2d3035" stroke-width="1.5"/>' +
      '<g class="hbx-carL"><rect x="0" y="194" width="120" height="40" rx="6" fill="#d9dde2" stroke="#6b7280" stroke-width="2"/>' +
        [10, 36, 62, 88].map(x => '<rect x="' + x + '" y="200" width="20" height="16" rx="2" fill="#a8d0ef"/>').join("") +
        '<rect x="0" y="220" width="120" height="4" fill="#0f5fa8"/><path d="M60 194v-12" stroke="#333" stroke-width="2"/></g>' +
      txt("JERSEY CITY", 200, 254, 11, CREAM, 'letter-spacing="4"'),
      sky("hbp", "#f7b267", "#f4d6a0"));
  }

  /* 5. Grove St & Montgomery St: green street signs, the wall tagged HEATHER B, Jersey City's white City Hall with its cupola behind */
  function corner() {
    let cols = "";
    for (let i = 0; i < 6; i++) cols += '<rect x="' + (128 + i * 26) + '" y="62" width="8" height="58" fill="#e9e6de"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hbc)"/>' + stars(14) +
      /* City Hall */
      '<rect x="96" y="56" width="208" height="76" fill="#f1eee6"/><rect x="90" y="50" width="220" height="8" fill="#dcd7cb"/>' +
      '<path d="M150 50l50-20l50 20z" fill="#e9e6de" stroke="#cfc9bb"/>' + cols +
      '<rect x="190" y="12" width="20" height="18" fill="#e9e6de"/><path d="M186 14q14-16 28 0z" fill="#b8c4c9"/><rect x="198" y="2" width="4" height="8" fill="#b8c4c9"/>' +
      [104, 278].map(x => '<rect x="' + x + '" y="70" width="14" height="22" fill="#ffd98a" class="hbx-bl"/>').join("") +
      txt("CITY HALL", 200, 46, 6, "#6b6455", 'letter-spacing="2"') +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#43464e"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#383a41" stroke-width="1"/>'; return b; })() +
      tag("HEATHER B", 14, 196, 46, AMBER, -5) + tag("54TH REGIMENT", 22, 222, 15, CREAM, -3) + tag("LYRICALLY", 196, 220, 18, PRED, -4) +
      '<g transform="translate(276 176)"><circle class="hbx-puff" cx="0" cy="0" r="10" fill="' + AMBER + '" opacity=".6"/><circle class="hbx-puff hbx-puff2" cx="8" cy="-4" r="8" fill="' + AMBER + '" opacity=".5"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="hbx-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="#3a7bd5"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="' + GSIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Grove St", 348, 82, 12, "#fff") +
      '<rect x="292" y="92" width="104" height="22" rx="2" fill="' + GSIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Montgomery St", 344, 108, 11, "#fff") +
      '<circle class="hbx-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("hbc", "#0b1024", "#2d3a5c"));
  }

  window.SCENES = { grove: grove, loft: loft, studio: studio, powerhouse: powerhouse, corner: corner };
})();
