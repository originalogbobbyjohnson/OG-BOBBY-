/* East Flatbush opening scenes for the MC Lyte game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes shine{0%,100%{opacity:.15}50%{opacity:.85}}' +
    '.shn{animation:shine 2.4s ease-in-out infinite}.shn2{animation-delay:1.2s}' +
    '@keyframes roll{0%{transform:translateX(-170px)}100%{transform:translateX(430px)}}' +
    '.van{animation:roll 7s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.5px)}}' +
    '.bob{animation:bob .35s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-40px);opacity:0}}' +
    '.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-8deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const CORAL = "#ff8a5b", GOLD = "#f5c84a", SKY = "#7fd1ff";

  /* 1. The 5 pulling into Church Av, underground on the Nostrand Av line: white tile, the platform pillars, the exit to Church Av */
  function train() {
    let tiles = "";
    for (let y = 24; y < 116; y += 7) tiles += '<path d="M0 ' + y + 'h400" stroke="#d7d2c4" stroke-width=".7"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 24v92" stroke="#d7d2c4" stroke-width=".5"/>';
    let trim = "";
    for (let x = 0; x < 400; x += 20) trim += '<rect x="' + x + '" y="24" width="10" height="5" fill="#6f3b2c"/>';
    let cols = "";
    [20, 250, 380].forEach(x => cols += '<rect x="' + (x - 6) + '" y="16" width="12" height="166" fill="#26303a"/><rect x="' + (x - 9) + '" y="16" width="18" height="5" fill="#26303a"/>');
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#101318"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#0a0c10"/>' +
      '<rect class="flk" x="50" y="9" width="100" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="250" y="9" width="100" height="4" rx="2" fill="#fff6d8"/>' +
      '<rect x="0" y="16" width="400" height="102" fill="#efeadc"/>' + tiles + trim +
      '<rect x="0" y="16" width="400" height="8" fill="#3b4652"/>' +
      /* station sign */
      '<rect x="40" y="44" width="200" height="38" rx="4" fill="#111"/>' +
      '<rect x="40" y="44" width="200" height="4" fill="#fff"/>' +
      '<text x="54" y="72" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Church Av</text>' +
      bullet(190, 66, "2", "#ee352e") + bullet(216, 66, "5", "#00933c") +
      /* exit sign */
      '<rect x="262" y="50" width="104" height="24" rx="3" fill="#111"/>' +
      '<text x="314" y="66" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Exit  Church Av →</text>' +
      cols +
      /* the 5 slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '<rect x="282" y="128" width="18" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(266, 140, "5", "#00933c") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1d22"/>' +
      '<path d="M0 214h400M0 238h400" stroke="#262a31" stroke-width="2"/>' +
      tag("LYTE", 40, 240, 34, CORAL, -5) + tag("1ST PRIORITY", 196, 236, 22, GOLD, -3));
  }

  /* 2. Flatbush Gardens (the old Vanderveer): six-story red-brick garden blocks around a green courtyard, an ice cream truck ringing its tune */
  function gardens() {
    const block = (x, w, top) => {
      let s = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (178 - top) + '" fill="#9a4a32"/>';
      s += '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="5" fill="#d9cdb3"/>';
      for (let y = top + 14; y < 168; y += 20) for (let wx = x + 8; wx < x + w - 10; wx += 18) {
        const lit = ((wx * 7 + y * 3) % 5) < 2;
        s += '<rect x="' + wx + '" y="' + y + '" width="10" height="12" fill="' + (lit ? "#ffd88a" : "#3a2a2a") + '"/><rect x="' + wx + '" y="' + (y + 12) + '" width="10" height="2" fill="#d9cdb3"/>';
      }
      return s;
    };
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<rect x="' + x + '" y="188" width="2" height="16" fill="#1d2a20"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gg)"/>' + stars(10) +
      block(0, 120, 60) + block(280, 120, 60) +
      /* the center block with the archway entrance */
      block(130, 140, 46) +
      '<path d="M182 178v-20a18 18 0 0 1 36 0v20z" fill="#241815"/><path d="M178 158a22 22 0 0 1 44 0" fill="none" stroke="#d9cdb3" stroke-width="4"/>' +
      '<rect x="160" y="40" width="80" height="8" fill="#d9cdb3"/>' +
      '<rect x="150" y="118" width="100" height="14" fill="#d9cdb3"/><text x="200" y="128" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#3a2020" letter-spacing=".8">FLATBUSH GARDENS</text>' +
      /* courtyard lawn + trees */
      '<rect x="0" y="178" width="400" height="30" fill="#2f5a34"/>' + fence + '<path d="M0 188h400" stroke="#1d2a20" stroke-width="2"/>' +
      '<circle cx="60" cy="168" r="22" fill="#2b5a2e"/><circle cx="340" cy="166" r="24" fill="#2b5a2e"/><rect x="58" y="176" width="4" height="14" fill="#3a2a1a"/><rect x="338" y="176" width="4" height="14" fill="#3a2a1a"/>' +
      /* street + the ice cream truck, music notes floating */
      '<rect x="0" y="204" width="400" height="56" fill="#1c1f24"/><path d="M0 234h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="bob">' +
        '<rect x="226" y="178" width="110" height="44" rx="6" fill="#f4f1ea" stroke="#9aa1aa" stroke-width="2"/>' +
        '<rect x="300" y="186" width="30" height="16" rx="2" fill="#9fd8ff"/>' +
        '<rect x="236" y="186" width="54" height="22" rx="2" fill="#ffd1dc"/>' +
        '<path d="M250 206l6-16 6 16z" fill="#e0a86a"/><circle cx="256" cy="189" r="6" fill="#ffffff"/><circle cx="256" cy="185" r="3" fill="#ffffff"/>' +
        '<path d="M268 206l6-16 6 16z" fill="#e0a86a"/><circle cx="274" cy="189" r="6" fill="#8a4a2a"/>' +
        '<rect x="226" y="210" width="110" height="5" fill="' + SKY + '"/>' +
        '<circle cx="248" cy="224" r="8" fill="#111"/><circle cx="314" cy="224" r="8" fill="#111"/><circle cx="248" cy="224" r="3" fill="#888"/><circle cx="314" cy="224" r="3" fill="#888"/>' +
      '</g>' +
      '<text class="nt" x="230" y="172" font-size="14" fill="' + GOLD + '">♪</text><text class="nt nt2" x="246" y="170" font-size="12" fill="' + CORAL + '">♫</text><text class="nt nt3" x="216" y="174" font-size="12" fill="#fff">♪</text>' +
      tag("BOUNCE", 24, 252, 20, CORAL, -4),
      sky("gg", "#13183a", "#ff9a6b"));
  }

  /* 3. The gold record room: the first gold plaque for a solo woman MC on the wall, a record spinning on the deck, and the rock */
  function gold() {
    const plaque = (x, y, label) =>
      '<rect x="' + x + '" y="' + y + '" width="66" height="84" rx="3" fill="#2a1a10" stroke="#c9a24a" stroke-width="3"/>' +
      '<circle cx="' + (x + 33) + '" cy="' + (y + 34) + '" r="22" fill="' + GOLD + '"/><circle cx="' + (x + 33) + '" cy="' + (y + 34) + '" r="15" fill="none" stroke="#b8902a" stroke-width="1"/><circle cx="' + (x + 33) + '" cy="' + (y + 34) + '" r="6" fill="#fff4c2"/>' +
      '<rect class="shn" x="' + (x + 14) + '" y="' + (y + 18) + '" width="6" height="28" fill="#fff" opacity=".4" transform="rotate(30 ' + (x + 17) + ' ' + (y + 32) + ')"/>' +
      '<rect x="' + (x + 8) + '" y="' + (y + 62) + '" width="50" height="14" fill="#f1e6cc"/>' +
      '<text x="' + (x + 33) + '" y="' + (y + 72) + '" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="6.5" fill="#2a1a10">' + label + '</text>';
    return svg(
      '<rect width="400" height="260" fill="#24141a"/>' +
      /* padded studio wall */
      (function () { let s = ""; for (let y = 0; y < 170; y += 34) for (let x = 0; x < 400; x += 40) s += '<rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="36" height="30" rx="4" fill="#3a1f2a"/>'; return s; })() +
      plaque(40, 24, "RUFFNECK") + plaque(130, 24, "PAPER THIN") + plaque(220, 24, "CHA CHA CHA") +
      /* spotlight */
      '<path class="shn shn2" d="M320 0h40l30 170h-120z" fill="#fff4c2" opacity=".2"/>' +
      /* the rock on its own stand */
      '<rect x="306" y="150" width="68" height="24" fill="#5a3a2a"/><rect x="300" y="146" width="80" height="6" fill="#7a4a32"/>' +
      '<path d="M310 146q-6-30 18-40q20-10 36 4q16 14 8 36z" fill="#8c8f94" stroke="#4a4d52" stroke-width="2"/><path d="M324 118q8-6 18-2M352 124q6 6 4 14" stroke="#b9bcc0" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      /* deck with the record spinning */
      '<rect x="0" y="172" width="400" height="88" fill="#1a0f12"/>' +
      '<rect x="60" y="184" width="200" height="56" rx="6" fill="#2b2b30" stroke="#55555c" stroke-width="2"/>' +
      '<g class="spin"><circle cx="120" cy="212" r="24" fill="#111"/><circle cx="120" cy="212" r="18" fill="none" stroke="#2a2a2a"/><circle cx="120" cy="212" r="12" fill="none" stroke="#2a2a2a"/><circle cx="120" cy="212" r="8" fill="' + CORAL + '"/><rect x="118" y="204" width="4" height="4" fill="#fff"/></g>' +
      '<path d="M178 192l-30 26" stroke="#c9ced6" stroke-width="3" stroke-linecap="round"/><circle cx="178" cy="192" r="5" fill="#c9ced6"/>' +
      '<rect x="196" y="196" width="10" height="34" rx="2" fill="#111"/><rect x="196" y="210" width="10" height="5" fill="' + GOLD + '"/><rect x="220" y="196" width="10" height="34" rx="2" fill="#111"/><rect x="220" y="202" width="10" height="5" fill="' + SKY + '"/>' +
      '<text x="200" y="256" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + GOLD + '" letter-spacing="2">FIRST PRIORITY MUSIC</text>');
  }

  /* 4. A dollar van rolling down Utica Avenue, the shops and the bakery awnings behind, island flag on the dash */
  function dollarvan() {
    let shops = "";
    const awn = ["#1f7a3a", "#f5c84a", "#c91f2e", "#2a4ea8", "#1f7a3a", "#ff8a5b"];
    for (let i = 0; i < 6; i++) {
      const x = i * 68;
      shops += '<rect x="' + x + '" y="' + (46 + (i % 2) * 12) + '" width="66" height="' + (124 - (i % 2) * 12) + '" fill="' + (i % 2 ? "#6a3a2e" : "#8a6a52") + '"/>';
      for (let wx = x + 8; wx < x + 60; wx += 18) shops += '<rect x="' + wx + '" y="' + (58 + (i % 2) * 12) + '" width="10" height="14" fill="#ffd88a" opacity=".8"/>';
      shops += '<path d="M' + x + ' 118h66l-6 14h-54z" fill="' + awn[i] + '"/><rect x="' + (x + 6) + '" y="132" width="54" height="38" fill="#2a2020"/><rect x="' + (x + 10) + '" y="136" width="46" height="26" fill="#ffe6a8" opacity=".55"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#gv)"/>' + shops +
      '<rect x="0" y="170" width="400" height="10" fill="#9a9488"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#202328"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* street sign on a pole */
      '<rect x="356" y="98" width="4" height="74" fill="#2a2f35"/><rect x="326" y="98" width="64" height="15" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="358" y="109" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">Utica Av</text>' +
      /* the van */
      '<g class="van"><g class="bob">' +
        '<path d="M10 222v-44q0-10 10-10h104q14 0 22 14l12 18q4 6 4 12v10z" fill="#f2f2ee" stroke="#8a8f96" stroke-width="2"/>' +
        '<path d="M126 174h16l14 22h-30z" fill="#9fd8ff"/>' +
        '<rect x="22" y="176" width="26" height="18" rx="2" fill="#9fd8ff"/><rect x="54" y="176" width="26" height="18" rx="2" fill="#9fd8ff"/><rect x="86" y="176" width="30" height="18" rx="2" fill="#9fd8ff"/>' +
        '<rect x="10" y="202" width="152" height="5" fill="' + CORAL + '"/>' +
        '<rect x="30" y="160" width="74" height="12" rx="2" fill="#111"/><text x="67" y="169" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="' + GOLD + '">UTICA ↔ FLATBUSH</text>' +
        '<g class="flag"><rect x="132" y="178" width="14" height="9" fill="#009b3a"/><path d="M132 178l14 9M146 178l-14 9" stroke="#fed100" stroke-width="2"/></g>' +
        '<circle cx="160" cy="210" r="3" fill="#fff6c2"/>' +
        '<circle cx="40" cy="224" r="11" fill="#111"/><circle cx="130" cy="224" r="11" fill="#111"/><circle cx="40" cy="224" r="4" fill="#888"/><circle cx="130" cy="224" r="4" fill="#888"/>' +
      '</g></g>' +
      '<text class="nt" x="120" y="150" font-size="14" fill="' + GOLD + '">♫</text><text class="nt nt2" x="200" y="152" font-size="12" fill="#fff">♪</text>',
      sky("gv", "#2a3a6a", "#ffb37a"));
  }

  /* 5. Church Av and Utica Av: green signs, a streetlight, the tag wall, the rock painted on it */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      /* wall with the tags */
      '<rect x="20" y="70" width="250" height="150" fill="#4a3a3e"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#54424a"/>'; return b; })() +
      '<path d="M214 212q-6-26 12-34q16-8 30 4q10 12 4 30z" fill="#8c8f94" stroke="#000" stroke-width="3"/>' +
      tag("MC LYTE", 30, 140, 40, CORAL, -7) + tag("LYTE AS A ROCK", 34, 196, 19, GOLD, -3) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Church Av</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Utica Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("gc", "#140d1e", "#4a2a3a"));
  }

  window.SCENES = { train, gardens, gold, dollarvan, corner };
})();
