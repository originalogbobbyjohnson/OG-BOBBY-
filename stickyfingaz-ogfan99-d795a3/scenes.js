/* Sticky Fingaz game (NYC map, Brooklyn: Flatbush, where Kirk Jones grew up after being born in East Flatbush).
   The B12 pulling up at New York Av & Clarkson Av (the block where he was born), the old Empire Rollerdrome on Empire Blvd
   (Brooklyn skate nights in the 80s), Holy Innocents Church on Beverley Rd ("Oh My God": if you could talk to God),
   the Lions Gate Bridge in Vancouver (where he starred as the lead of the Blade TV series), and Argyle Rd & Beverley Rd
   with the big Victorian houses of Beverley Square behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sfcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.sf-car{animation:sfcar 7s linear infinite}.sf-car2{animation-delay:-3.5s}' +
    '@keyframes sfcar3{from{transform:translateX(420px)}to{transform:translateX(-80px)}}.sf-carl{animation:sfcar3 6s linear infinite}' +
    '@keyframes sfblink{0%,100%{opacity:.25}50%{opacity:1}}.sf-bl{animation:sfblink 1.6s ease-in-out infinite}.sf-bl2{animation-delay:.5s}.sf-bl3{animation-delay:1s}' +
    '@keyframes sfflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.sf-flk{animation:sfflick 2.4s infinite}' +
    '@keyframes sfskate{from{transform:translateX(-60px)}to{transform:translateX(440px)}}.sf-sk{animation:sfskate 5s linear infinite}.sf-sk2{animation-delay:-1.7s}.sf-sk3{animation-delay:-3.4s}' +
    '@keyframes sfspin{to{transform:rotate(360deg)}}.sf-ball{transform-box:fill-box;transform-origin:50% 50%;animation:sfspin 4s linear infinite}' +
    '@keyframes sfspark{0%,100%{opacity:0}50%{opacity:1}}.sf-spk{animation:sfspark 1.2s ease-in-out infinite}.sf-spk2{animation-delay:.4s}.sf-spk3{animation-delay:.8s}' +
    '@keyframes sfray{0%,100%{opacity:.18}50%{opacity:.4}}.sf-ray{animation:sfray 4s ease-in-out infinite}' +
    '@keyframes sfcandle{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.sf-cn{transform-box:fill-box;transform-origin:50% 100%;animation:sfcandle .5s ease-in-out infinite}.sf-cn2{animation-delay:.25s}' +
    '@keyframes sfwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.sf-wave{animation:sfwave 3s ease-in-out infinite}' +
    '@keyframes sfleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,120px) rotate(200deg)}}.sf-leaf{animation:sfleaf 5s linear infinite}.sf-leaf2{animation-delay:-2.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 56) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const LIME = "#b8f03c", PINK = "#ff4d6d", LAV = "#c9c4ff", CREAM = "#f4ead8", GOLD = "#ffd166", BUS = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const tree = (x, y, s) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (40 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (18 * s) + '" fill="#2f5a34"/><circle cx="' + (x - 12 * s) + '" cy="' + (y + 4) + '" r="' + (12 * s) + '" fill="#386b3d"/><circle cx="' + (x + 12 * s) + '" cy="' + (y + 2) + '" r="' + (12 * s) + '" fill="#2a5230"/>';

  /* 1. New York Av & Clarkson Av, East Flatbush: the B12 pulling up, the blue bus-stop sign with B12 and B44, brick walk-ups and street trees */
  function busstop() {
    let win = "", bricks = "";
    for (let x = 52; x < 250; x += 30) win += '<rect x="' + x + '" y="148" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    const bldg = (x, w, h, col) => { let g = '<rect x="' + x + '" y="' + (170 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/><rect x="' + x + '" y="' + (166 - h) + '" width="' + w + '" height="6" fill="#3b2a24"/>';
      for (let yy = 180 - h; yy < 150; yy += 18) for (let xx = x + 8; xx < x + w - 10; xx += 18) g += '<rect class="sf-bl sf-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="9" height="11" fill="#ffd98a" opacity=".75"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#sfb)"/>' + stars(10) +
      bldg(0, 96, 120, "#8a4a34") + bldg(100, 80, 96, "#a0624a") + bldg(184, 110, 128, "#7b3f2f") + bldg(298, 102, 104, "#94553f") +
      tree(96, 122, 1) + tree(300, 118, 0.9) +
      '<rect x="34" y="18" width="270" height="30" rx="3" fill="#111"/><rect x="34" y="18" width="270" height="3" fill="#fff"/>' +
      '<text x="46" y="39" ' + font + ' font-size="14" fill="#fff">New York Av &amp; Clarkson Av</text>' +
      '<rect x="0" y="170" width="400" height="16" fill="#8a8c90"/><rect x="0" y="186" width="400" height="74" fill="#3f4146"/>' +
      '<path d="M0 226h40M70 226h40M140 226h40M210 226h40M280 226h40M350 226h40" stroke="#e8d36a" stroke-width="3"/>' +
      /* the B12 */
      '<g class="anim-train">' +
        '<rect x="40" y="136" width="250" height="62" rx="8" fill="#f2f4f7" stroke="#8b939e" stroke-width="2"/>' + win +
        '<rect x="40" y="174" width="250" height="7" fill="' + BUS + '"/>' +
        '<rect x="262" y="142" width="24" height="30" rx="3" fill="#cfe2f5"/>' +
        '<rect x="222" y="136" width="66" height="10" rx="2" fill="#111"/><text x="255" y="144.3" text-anchor="middle" ' + font + ' font-size="6.8" fill="#ffb000">B12 E NEW YORK</text>' +
        '<circle cx="80" cy="198" r="10" fill="#1b1b1f"/><circle cx="80" cy="198" r="4" fill="#777"/><circle cx="246" cy="198" r="10" fill="#1b1b1f"/><circle cx="246" cy="198" r="4" fill="#777"/>' +
        '<circle class="sf-flk" cx="286" cy="186" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="340" y="104" width="4" height="82" fill="#7d858f"/>' +
      '<rect x="314" y="84" width="56" height="52" rx="4" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="342" y="99" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS STOP</text>' +
      '<rect x="322" y="104" width="40" height="13" rx="3" fill="#fff"/><text x="342" y="114.5" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + BUS + '">B12</text>' +
      '<rect x="322" y="119" width="40" height="13" rx="3" fill="#fff"/><text x="342" y="129.5" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + BUS + '">B44</text>' +
      person(374, 152, "#1d1d22") +
      txt("EAST FLATBUSH · BROOKLYN", 150, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("sfb", "#14122a", "#7a4a6a"));
  }

  /* 2. The Empire Rollerdrome on Empire Blvd: the maple floor, skaters looping, the mirror ball turning, the DJ booth lit up */
  function rollerdrome() {
    const skater = (y, col, cls) => '<g class="sf-sk ' + cls + '"><circle cx="0" cy="' + y + '" r="6" fill="' + col + '"/><path d="M0 ' + (y + 6) + 'l-3 14M0 ' + (y + 8) + 'l-10 6M0 ' + (y + 8) + 'l10 -4M-3 ' + (y + 20) + 'l-6 10M-3 ' + (y + 20) + 'l6 10" stroke="' + col + '" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="-14" y="' + (y + 30) + '" width="10" height="4" rx="2" fill="' + PINK + '"/><rect x="0" y="' + (y + 30) + '" width="10" height="4" rx="2" fill="' + PINK + '"/></g>';
    let boards = "";
    for (let y = 172; y < 260; y += 8) boards += '<path d="M0 ' + y + 'h400" stroke="#9a6a3a" stroke-width="1" opacity=".6"/>';
    let dots = "";
    for (let i = 0; i < 18; i++) dots += '<circle class="sf-spk sf-spk' + (i % 3 + 1) + '" cx="' + ((i * 61) % 400) + '" cy="' + (40 + (i * 37) % 120) + '" r="2.2" fill="' + [LIME, PINK, LAV][i % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfr)"/>' +
      /* back wall, the arched roof trusses */
      '<path d="M0 40q200 -50 400 0" stroke="#3a2f4d" stroke-width="6" fill="none"/>' + [60, 140, 220, 300, 360].map(x => '<path d="M' + x + ' 30v100" stroke="#2a2238" stroke-width="3"/>').join("") +
      '<rect x="0" y="130" width="400" height="34" fill="#251c33"/>' +
      /* the sign over the booth */
      '<rect x="110" y="56" width="180" height="34" rx="17" fill="#120d1a" stroke="' + PINK + '" stroke-width="2"/>' +
      '<text class="sf-flk" x="200" y="80" text-anchor="middle" font-family="Brush Script MT, Sedgwick Ave Display, cursive" font-style="italic" font-weight="700" font-size="22" fill="' + PINK + '">Roller Night</text>' +
      /* DJ booth */
      '<rect x="160" y="112" width="80" height="30" fill="#1a1a22" stroke="' + LIME + '" stroke-width="2"/><circle cx="182" cy="122" r="7" fill="#111" stroke="#555"/><circle cx="218" cy="122" r="7" fill="#111" stroke="#555"/>' +
      /* mirror ball */
      '<path d="M200 0v26" stroke="#888" stroke-width="1.5"/><g class="sf-ball"><circle cx="200" cy="36" r="12" fill="#c9ced6"/><path d="M188 36h24M200 24v24M192 28l16 16M208 28l-16 16" stroke="#7a7f88" stroke-width="1"/></g>' +
      dots +
      /* the rail + floor */
      '<rect x="0" y="160" width="400" height="6" fill="' + LIME + '" opacity=".8"/><rect x="0" y="166" width="400" height="94" fill="#c08a52"/>' + boards +
      '<ellipse cx="200" cy="214" rx="150" ry="30" fill="none" stroke="#fff" stroke-width="2" opacity=".35"/>' +
      skater(178, "#0d0d14", "") + skater(188, "#1c1430", "sf-sk2") + skater(182, "#14141c", "sf-sk3") +
      txt("EMPIRE ROLLERDROME · EMPIRE BLVD", 200, 22, 11, CREAM, 'letter-spacing="2"'),
      sky("sfr", "#0d0a16", "#3a1f4d"));
  }

  /* 3. Holy Innocents Church on Beverley Rd: the stained-glass rose window, light pouring down the aisle, candles flickering ("if you could talk to God") */
  function church() {
    let rose = "";
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6, x = 200 + 30 * Math.cos(a), y = 70 + 30 * Math.sin(a);
      rose += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="8" fill="' + ["#c0392b", "#2e86de", "#f1c40f", "#27ae60"][i % 4] + '" opacity=".9"/>'; }
    const lancet = (x, c1, c2) => '<path d="M' + x + ' 170v-70q14 -26 28 0v70z" fill="' + c1 + '" stroke="#2a2016" stroke-width="3"/><path d="M' + (x + 14) + ' 84v86M' + x + ' 130h28" stroke="#2a2016" stroke-width="2"/><rect x="' + (x + 4) + '" y="104" width="8" height="20" fill="' + c2 + '" opacity=".8"/><rect x="' + (x + 16) + '" y="140" width="8" height="24" fill="' + c2 + '" opacity=".8"/>';
    let pews = "";
    for (let i = 0; i < 4; i++) { const y = 200 + i * 14; pews += '<rect x="' + (30 - i * 8) + '" y="' + y + '" width="' + (130 + i * 6) + '" height="8" rx="2" fill="#4a2f1c"/><rect x="' + (240 + 2 * i) + '" y="' + y + '" width="' + (130 + i * 6) + '" height="8" rx="2" fill="#4a2f1c"/>'; }
    const candle = (x, cls) => '<rect x="' + (x - 3) + '" y="176" width="6" height="18" fill="#f4ead8"/><path class="sf-cn ' + cls + '" d="M' + x + ' 166q4 6 0 10q-4 -4 0 -10z" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1712"/>' +
      /* the vault */
      '<path d="M40 260V60q160 -90 320 0v200z" fill="#3a2c20"/><path d="M60 260V70q140 -78 280 0v190z" fill="#4a3828"/>' +
      '<circle cx="200" cy="70" r="44" fill="#2a2016" stroke="#6b5640" stroke-width="3"/>' + rose + '<circle cx="200" cy="70" r="12" fill="#f1c40f"/>' +
      lancet(90, "#2e5f8a", "#c0392b") + lancet(282, "#6a2d5a", "#f1c40f") +
      /* light rays down the aisle */
      '<path class="sf-ray" d="M180 80l-60 180h160l-60 -180z" fill="#fff4c2"/>' +
      /* altar */
      '<rect x="150" y="176" width="100" height="22" fill="#e8dcc4"/><rect x="150" y="172" width="100" height="6" fill="#c9a24a"/>' +
      '<path d="M200 128v40M188 140h24" stroke="#c9a24a" stroke-width="5"/>' +
      candle(160, "") + candle(240, "sf-cn2") +
      pews +
      txt("HOLY INNOCENTS · BEVERLEY RD", 200, 22, 11, CREAM, 'letter-spacing="2"') + tag("OH MY GOD", 120, 254, 22, LAV, -3),
      '');
  }

  /* 4. Vancouver: the Lions Gate Bridge lit up at night, the North Shore mountains, cars crossing, a ferry wake on the water */
  function lionsgate() {
    let cables = "";
    for (let x = 60; x <= 340; x += 14) { const y = x < 140 ? 60 + (140 - x) * 0.55 + 12 : (x > 260 ? 60 + (x - 260) * 0.55 + 12 : 72 + Math.abs(200 - x) * 0.25 - 8); cables += '<path d="M' + x + ' ' + y.toFixed(1) + 'V150" stroke="#9fb4c8" stroke-width="1"/>'; }
    let lights = "";
    for (let x = 20; x < 400; x += 20) lights += '<circle class="sf-bl sf-bl' + (x / 20 % 3 + 1) + '" cx="' + x + '" cy="148" r="2" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfv)"/>' + stars(20) +
      /* mountains with snow */
      '<path d="M0 150l60 -70l50 40l60 -80l70 70l50 -40l70 60l40 -20v40z" fill="#1d2a3a"/>' +
      '<path d="M110 120l60 -80l26 26l-14 -2l-12 8l-10 -6l-14 10l-10 -4z" fill="#e8eef5" opacity=".18"/>' +
      /* towers + main cables */
      '<rect x="134" y="52" width="10" height="120" fill="#3a6b4a"/><rect x="256" y="52" width="10" height="120" fill="#3a6b4a"/>' +
      '<path d="M0 132q70 -20 139 -80q61 60 122 0q70 60 139 80" stroke="#c8d6e4" stroke-width="2.5" fill="none"/>' + cables +
      /* deck */
      '<rect x="0" y="150" width="400" height="8" fill="#55606c"/>' + lights +
      '<g class="sf-car"><rect x="0" y="143" width="16" height="7" rx="2" fill="' + PINK + '"/></g><g class="sf-carl"><rect x="0" y="143" width="16" height="7" rx="2" fill="' + LIME + '"/></g>' +
      '<g class="sf-car sf-car2"><rect x="0" y="143" width="16" height="7" rx="2" fill="' + GOLD + '"/></g>' +
      /* water + reflections */
      '<rect x="0" y="172" width="400" height="88" fill="#0b1a2c"/>' +
      [30, 90, 150, 210, 270, 330].map((x, i) => '<path class="sf-wave" style="animation-delay:-' + i * 0.5 + 's" d="M' + x + ' ' + (186 + (i % 3) * 14) + 'h26" stroke="' + (i % 2 ? GOLD : "#9fb4c8") + '" stroke-width="2" opacity=".55"/>').join("") +
      '<rect x="134" y="172" width="10" height="40" fill="#3a6b4a" opacity=".25"/><rect x="256" y="172" width="10" height="40" fill="#3a6b4a" opacity=".25"/>' +
      txt("LIONS GATE BRIDGE · VANCOUVER", 200, 26, 11, CREAM, 'letter-spacing="2"') + txt("WHERE HE PLAYED THE LEAD ON TV", 200, 42, 9, LAV, 'letter-spacing="2"') +
      tag("BLACK TRASH", 30, 246, 22, LIME, -3),
      sky("sfv", "#050812", "#1d2f4d"));
  }

  /* 5. Argyle Rd & Beverley Rd: green street signs, the wall tagged STICKY FINGAZ, the big Victorian houses of Beverley Square behind */
  function corner() {
    const vic = (x, w, col, trim) => '<rect x="' + x + '" y="60" width="' + w + '" height="80" fill="' + col + '"/><path d="M' + (x - 6) + ' 60l' + (w / 2 + 6) + ' -34l' + (w / 2 + 6) + ' 34z" fill="#3b2f3a"/>' +
      '<rect x="' + (x + w - 26) + '" y="30" width="20" height="40" fill="' + col + '"/><path d="M' + (x + w - 30) + ' 30l14 -20l14 20z" fill="#3b2f3a"/>' +
      '<rect x="' + (x - 4) + '" y="100" width="' + (w + 8) + '" height="6" fill="' + trim + '"/>' + [0, 1, 2].map(i => '<rect x="' + (x + 2 + i * (w / 3)) + '" y="106" width="3" height="34" fill="' + trim + '"/>').join("") +
      '<rect class="sf-bl" x="' + (x + 10) + '" y="70" width="12" height="18" fill="#ffd98a" opacity=".85"/><rect x="' + (x + w / 2 - 6) + '" y="70" width="12" height="18" fill="#2b2a3a"/><rect class="sf-bl sf-bl2" x="' + (x + w - 24) + '" y="40" width="10" height="14" fill="#ffd98a" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfc)"/>' + stars(14) +
      vic(16, 86, "#7d8f6a", "#f4ead8") + vic(124, 96, "#a8655a", "#f4ead8") + vic(246, 84, "#6a7aa0", "#f4ead8") +
      tree(112, 98, 0.9) + tree(236, 96, 0.8) +
      '<g class="sf-leaf"><path d="M300 40q6 -4 8 2q-6 4 -8 -2z" fill="#d98a2b"/></g><g class="sf-leaf sf-leaf2"><path d="M180 30q6 -4 8 2q-6 4 -8 -2z" fill="#c0392b"/></g>' +
      txt("BEVERLEY SQUARE", 170, 18, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("STICKY FINGAZ", 12, 194, 40, LIME, -5) + tag("TROP", 26, 222, 22, PINK, -4) + tag("KIRK JONES", 150, 220, 18, LAV, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="sf-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Argyle Rd", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Beverley Rd", 346, 108, 12, "#fff") +
      '<circle class="sf-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("sfc", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { busstop: busstop, rollerdrome: rollerdrome, church: church, lionsgate: lionsgate, corner: corner };
})();
