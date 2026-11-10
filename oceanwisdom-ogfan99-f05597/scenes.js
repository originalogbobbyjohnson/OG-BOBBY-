/* Ocean Wisdom scenes (Regions tab: UK + EUROPE; Brighton - Ocean Alexander Alouwishas Wisdom, born Camden 1993, came up in Brighton
   (Brighton College), signed to High Focus; "I'm comin' straight outta Brighton").
   1 Brighton station: the curved iron-and-glass train shed, a white Southern train with green doors pulling in.
   2 Brighton College: the knapped-flint Gothic front with pale stone trim, gulls wheeling over.
   3 The West Pier ruin and the i360: the rusted skeleton in the sea, the glass pod gliding up the white tower.
   4 Brighton Palace Pier at night: the long deck, chasing bulbs, the helter skelter, waves rolling in.
   5 North Street and Queen's Road, BN1: London-style street signs, OCEAN WISDOM tagged, the Jubilee Clock Tower behind.
   CSS classes prefixed "ocw" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ocwGull{0%{transform:translateX(-60px)}100%{transform:translateX(470px)}}.ocwGull{animation:ocwGull 10s linear infinite}.ocwG2{animation-delay:-5s}' +
    '@keyframes ocwWave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.ocwWave{animation:ocwWave 3s ease-in-out infinite}.ocwWv2{animation-delay:-1.5s}' +
    '@keyframes ocwPod{0%,100%{transform:translateY(0)}50%{transform:translateY(-120px)}}.ocwPod{animation:ocwPod 8s ease-in-out infinite}' +
    '@keyframes ocwBulb{0%,100%{opacity:1}50%{opacity:.2}}.ocwB{animation:ocwBulb .8s steps(1) infinite}.ocwB2{animation-delay:-.4s}' +
    '@keyframes ocwSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ocwSp{animation:ocwSp 1.4s ease-out infinite}.ocwSp2{animation-delay:.5s}' +
    '@keyframes ocwHand{0%,100%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ocwHand{transform-box:view-box;transform-origin:200px 64px;animation:ocwHand 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const SN = "#8cc63e", TL = "#e9438d", BLUE = "#4fc3e8", GOLD = "#f2d14e";
  const gulls = '<g stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"><path class="ocwGull" d="M20 40q6 -6 12 0q6 -6 12 0"/><path class="ocwGull ocwG2" d="M10 64q5 -5 10 0q5 -5 10 0"/></g>';
  const sea = (y, c1, c2) => '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c1 + '"/>' +
    '<g stroke="' + c2 + '" stroke-width="2" fill="none" opacity=".8"><path class="ocwWave" d="M-20 ' + (y + 12) + 'q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0"/>' +
    '<path class="ocwWave ocwWv2" d="M-10 ' + (y + 28) + 'q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0"/></g>';

  /* 1. Brighton station - the curved train shed */
  function ocwstation() {
    let ribs = "";
    for (let x = 0; x <= 400; x += 40) ribs += '<path d="M' + x + ' 130V60" stroke="#5b6a74" stroke-width="3"/>';
    let wins = "";
    for (const x of [30, 66, 150, 186, 270]) wins += '<rect x="' + x + '" y="150" width="26" height="18" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 140h300q26 0 30 24v34H10z" fill="#f2f2ee" stroke="#2a2a2a" stroke-width="2"/>' + wins +
      '<g fill="' + SN + '" stroke="#3d6a14" stroke-width="1"><rect x="112" y="146" width="20" height="50"/><rect x="232" y="146" width="20" height="50"/></g>' +
      '<rect x="10" y="186" width="330" height="8" fill="' + SN + '"/><path d="M314 150q20 2 22 22h-22z" fill="#1d2a33"/><rect x="326" y="180" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="50" cy="201" r="6"/><circle cx="74" cy="201" r="6"/><circle cx="270" cy="201" r="6"/><circle cx="294" cy="201" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#cfe3ee"/>' +
      '<path d="M0 60Q200 -10 400 60v10Q200 0 0 70z" fill="#5b6a74"/>' +
      '<path d="M0 70Q200 0 400 70v60H0z" fill="#dfeef6" opacity=".7"/>' + ribs +
      '<g stroke="#9fb0bb" stroke-width="1" opacity=".7"><path d="M0 90Q200 30 400 90"/><path d="M0 110Q200 60 400 110"/></g>' +
      '<rect x="0" y="130" width="400" height="80" fill="#3a3530"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#7a746c"/><rect x="0" y="206" width="400" height="6" fill="#f2f2ee"/>' +
      '<g transform="translate(96 82)"><rect width="208" height="40" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="64" y="27" ' + F + ' font-size="17" fill="#fff" text-anchor="middle">Brighton</text>' +
      '<rect x="122" y="9" width="36" height="22" rx="11" fill="' + SN + '"/><text x="140" y="25" ' + F + ' font-size="12" fill="#111" text-anchor="middle">SN</text>' +
      '<rect x="164" y="9" width="36" height="22" rx="11" fill="' + TL + '"/><text x="182" y="25" ' + F + ' font-size="12" fill="#fff" text-anchor="middle">TL</text></g>' +
      '<g ' + F + ' font-size="9" fill="#111"><text x="14" y="236">PLATFORMS 1 - 8</text><text x="300" y="236">TO THE SEA</text></g>' +
      '<path d="M362 230l10 0l-4 -4m4 4l-4 4" stroke="#111" stroke-width="2" fill="none"/>');
  }

  /* 2. Brighton College - flint Gothic */
  function ocwcollege() {
    let flint = "";
    for (let y = 104; y < 214; y += 7) for (let x = (y % 14 ? 60 : 64); x < 340; x += 9) flint += '<circle cx="' + x + '" cy="' + y + '" r="3" fill="#3f4448"/>';
    const lancet = (x, y) => '<path d="M' + x + ' ' + (y + 40) + 'v-28q8 -14 16 0v28z" fill="#22303a" stroke="#d8cfb8" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ocwS2)"/>' + gulls +
      '<rect x="56" y="98" width="288" height="118" fill="#5a5f63"/>' + flint +
      '<path d="M56 98l40 -40l40 40z" fill="#5a5f63" stroke="#d8cfb8" stroke-width="3"/><path d="M264 98l40 -40l40 40z" fill="#5a5f63" stroke="#d8cfb8" stroke-width="3"/>' +
      '<rect x="176" y="40" width="48" height="176" fill="#5a5f63" stroke="#d8cfb8" stroke-width="3"/>' +
      '<g fill="#d8cfb8"><path d="M172 40h56v-8h-6v-8h-8v8h-8v-8h-8v8h-8v-8h-8v8h-10z"/></g>' +
      lancet(80, 128) + lancet(110, 128) + lancet(274, 128) + lancet(304, 128) +
      '<path d="M186 216v-40q14 -24 28 0v40z" fill="#4a2c1a" stroke="#d8cfb8" stroke-width="3"/>' +
      '<path d="M192 112v-22q8 -12 16 0v22z" fill="#22303a" stroke="#d8cfb8" stroke-width="2"/>' +
      '<rect x="56" y="98" width="288" height="4" fill="#d8cfb8"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4b7a3a"/><path d="M0 230h400" stroke="#6aa04f" stroke-width="3"/>' +
      '<g transform="translate(130 234)"><rect width="140" height="18" rx="3" fill="#fff" stroke="#111"/><text x="70" y="13" ' + F + ' font-size="10" fill="#111" text-anchor="middle">BRIGHTON COLLEGE</text></g>',
      sky('ocwS2', '#6fa8d6', '#d9ecf6'));
  }

  /* 3. The West Pier ruin and the i360 */
  function ocwwestpier() {
    let legs = "";
    for (let x = 216; x < 360; x += 12) legs += '<path d="M' + x + ' 150v40" stroke="#3a2a24" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ocwS3)"/>' + gulls +
      '<circle cx="320" cy="60" r="18" fill="#ffd27a" opacity=".8"/>' +
      sea(170, "#3b6f8f", "#cfe8f4") +
      '<g fill="#2a1e1a"><path d="M226 150h120l-6 -10h-108z"/><path d="M246 140q40 -50 80 0" fill="none" stroke="#2a1e1a" stroke-width="4"/>' +
      '<path d="M256 140v-18M286 140v-36M316 140v-18" stroke="#2a1e1a" stroke-width="3"/></g>' + legs +
      '<rect x="94" y="22" width="12" height="208" fill="#f4f4f2" stroke="#9aa" stroke-width="1"/>' +
      '<g class="ocwPod"><ellipse cx="100" cy="200" rx="34" ry="10" fill="#bfe6f5" stroke="#4a7a90" stroke-width="2" opacity=".95"/><rect x="66" y="196" width="68" height="4" fill="#4a7a90"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#c9b48a"/><g fill="#a8916a"><circle cx="40" cy="240" r="3"/><circle cx="160" cy="246" r="3"/><circle cx="300" cy="238" r="3"/></g>',
      sky('ocwS3', '#f0a35e', '#9cc4e0'));
  }

  /* 4. Brighton Palace Pier at night */
  function ocwpier() {
    let bulbs = "";
    for (let x = 30; x < 380; x += 14) bulbs += '<circle cx="' + x + '" cy="132" r="2.5" fill="#ffe08a" class="ocwB' + (x % 28 ? " ocwB2" : "") + '"/>';
    let legs = "";
    for (let x = 30; x < 380; x += 20) legs += '<path d="M' + x + ' 150v50" stroke="#2a2830" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ocwS4)"/>' +
      '<g fill="#fff"><circle cx="40" cy="30" r="1.2"/><circle cx="120" cy="20" r="1"/><circle cx="210" cy="40" r="1.2"/><circle cx="330" cy="24" r="1"/></g>' +
      sea(170, "#15304a", "#5a86a8") + legs +
      '<rect x="20" y="136" width="360" height="14" fill="#e9e4da"/>' +
      '<rect x="60" y="96" width="120" height="40" fill="#f4efe4" stroke="#b9ae96" stroke-width="2"/><path d="M60 96q60 -26 120 0" fill="#f4efe4" stroke="#b9ae96" stroke-width="2"/>' +
      '<g fill="' + BLUE + '"><path d="M112 74q8 -14 16 0z"/></g>' +
      '<path d="M290 136l14 -70l14 70z" fill="#d93b3b"/><g stroke="#fff" stroke-width="4" fill="none"><path d="M294 116l20 -8M297 100l14 -6M300 84l9 -4"/></g><path d="M300 66l4 -14l4 14z" fill="' + GOLD + '"/>' +
      '<rect x="72" y="108" width="96" height="18" fill="#1d2a33"/><text x="120" y="121" ' + F + ' font-size="10" fill="#ffe08a" text-anchor="middle" letter-spacing="2">PALACE PIER</text>' +
      bulbs + '<path d="M20 132h360" stroke="#ffe08a" stroke-width="1" opacity=".4"/>',
      sky('ocwS4', '#0c1630', '#33456e'));
  }

  /* 5. North Street and Queen's Road - the corner */
  function ocwcorner() {
    const sign = (x, y, a, b) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="134" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="67" y="16" ' + F + ' font-size="12" fill="#111" text-anchor="middle">' + a + '</text><text x="67" y="28" ' + F + ' font-size="8" fill="#d0202a" text-anchor="middle">' + b + '</text></g>';
    let bricks = "";
    for (let y = 150; y < 226; y += 10) for (let x = (y / 10) % 2 ? 0 : -14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#3b5560"/>';
    const tower =
      '<rect x="186" y="80" width="28" height="70" fill="#d9cda8" stroke="#7a6e50" stroke-width="1.5"/>' +
      '<rect x="182" y="46" width="36" height="36" fill="#cbbd92" stroke="#7a6e50" stroke-width="1.5"/>' +
      '<circle cx="200" cy="64" r="12" fill="#fff" stroke="#222" stroke-width="2"/><path d="M200 64v-8" stroke="#222" stroke-width="2"/>' +
      '<path class="ocwHand" d="M200 64h7" stroke="#222" stroke-width="1.5"/>' +
      '<path d="M182 46l18 -18l18 18z" fill="#3e6b5a"/><circle cx="200" cy="24" r="4" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ocwS5)"/>' + gulls + tower +
      '<rect x="0" y="146" width="400" height="80" fill="#2b4450"/>' + bricks +
      tag("OCEAN", 30, 200, 42, BLUE, -5) + tag("WISDOM", 168, 212, 42, GOLD, -3) +
      '<g class="ocwSp"><circle cx="150" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="ocwSp ocwSp2"><circle cx="158" cy="174" r="2" fill="' + BLUE + '" opacity=".7"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a3c"/><rect x="0" y="226" width="400" height="4" fill="#9a958b"/>' +
      '<rect x="146" y="44" width="4" height="102" fill="#333"/>' +
      sign(8, 50, "NORTH STREET", "BRIGHTON BN1") + sign(254, 96, "QUEEN'S ROAD", "BRIGHTON BN1"),
      sky('ocwS5', '#7fb6e0', '#f2d6a8'));
  }

  window.SCENES = { ocwstation, ocwcollege, ocwwestpier, ocwpier, ocwcorner };
})();
