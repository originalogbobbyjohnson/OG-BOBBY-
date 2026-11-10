/* sudanarchives scenes (Regions tab: St. Louis + Ohio; Cincinnati, Ohio - Brittney Parks grew up in Cincinnati, sang in a church choir in West Chester, found the violin in fourth grade in Wyoming, Ohio; "#513" is her hometown's area code).
   CSS classes prefixed sa- (the page's own anim-train is kept on the streetcar).
   1 The Connector streetcar pulling into the Findlay Market - Race stop (Race St & Elder St, Over-the-Rhine): red-brick Italianate rows behind.
   2 Sunday church in West Chester: white chapel, the bell swinging, choir notes floating out (where her music started).
   3 Fourth grade in Wyoming, Ohio: the school music room, violins on the wall, one bow sawing on the stand (where she found the violin).
   4 The Ohio riverfront at dusk: the purple pedestrian bridge (Purple People Bridge) over the river, a paddlewheeler drifting, stage lights on the lawn (her Homecoming show back home).
   5 Springfield Pike and Wyoming Ave, Wyoming: green signs, SUDAN tagged on the brick with #513, the Cincinnati skyline (Carew Tower, the tiara-topped tower) far behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes saglow{0%,100%{opacity:.45}50%{opacity:1}}.sa-glow{animation:saglow 2.4s ease-in-out infinite}.sa-g2{animation-delay:-1.2s}' +
    '@keyframes sabell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.sa-bell{transform-box:fill-box;transform-origin:50% 0;animation:sabell 1.6s ease-in-out infinite}' +
    '@keyframes sanote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(20px,-60px);opacity:0}}.sa-note{animation:sanote 3s ease-out infinite}.sa-n2{animation-delay:-1s}.sa-n3{animation-delay:-2s}' +
    '@keyframes sabow{0%,100%{transform:translateX(-14px)}50%{transform:translateX(14px)}}.sa-bow{animation:sabow 1.2s ease-in-out infinite}' +
    '@keyframes saboat{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.sa-boat{animation:saboat 22s linear infinite}' +
    '@keyframes sabeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sa-beam{transform-box:fill-box;transform-origin:50% 100%;animation:sabeam 3.4s ease-in-out infinite}.sa-b2{animation-delay:-1.7s}' +
    '@keyframes saspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.sa-sp{animation:saspray 1.4s ease-out infinite}.sa-sp2{animation-delay:-.5s}.sa-sp3{animation-delay:-.9s}' +
    '@keyframes satw{0%,100%{opacity:.2}50%{opacity:1}}.sa-tw{animation:satw 2s ease-in-out infinite}.sa-t2{animation-delay:-.7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const GOLD = "#e8b04a", RUST = "#c2552f", ALOE = "#7fbf6a", PURPLE = "#7b4fa8";
  const violin = (x, y, s, rot) => '<g transform="translate(' + x + ' ' + y + ') rotate(' + (rot || 0) + ') scale(' + s + ')">' +
    '<path d="M0 -40q-14 0 -14 12q0 8 6 12q-8 4 -8 16q0 16 16 16t16 -16q0 -12 -8 -16q6 -4 6 -12q0 -12 -14 -12z" fill="#a0522d" stroke="#5a2a10" stroke-width="2"/>' +
    '<rect x="-2" y="-62" width="4" height="26" fill="#2a1a10"/><circle cx="0" cy="-64" r="3" fill="#2a1a10"/>' +
    '<path d="M-1.5 -36v44M1.5 -36v44" stroke="#f0e6d0" stroke-width=".8"/><path d="M-8 -6v8M8 -6v8" stroke="#2a1a10" stroke-width="1.5"/><path d="M-6 10h12l-6 6z" fill="#2a1a10"/></g>';

  /* 1. Streetcar at Findlay Market - Race */
  function sastop() {
    const row = (x, w, h, c) => '<rect x="' + x + '" y="' + (170 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (164 - h) + '" width="' + (w + 4) + '" height="8" fill="#e8dcc4"/>' +
      Array.from({ length: Math.floor(h / 26) }, (_, r) => [0, 1, 2].map(c2 => '<rect x="' + (x + 8 + c2 * (w - 16) / 3) + '" y="' + (176 - h + r * 26) + '" width="10" height="16" fill="#f5d98a" class="sa-glow ' + ((r + c2) % 2 ? "sa-g2" : "") + '"/>').join("")).join("");
    const car = '<g class="anim-train"><rect x="30" y="122" width="310" height="58" rx="10" fill="#f3f1ec" stroke="#555" stroke-width="2"/>' +
      '<rect x="30" y="164" width="310" height="10" fill="#c8202e"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (52 + i * 46) + '" y="132" width="34" height="24" rx="3" fill="#2a3442"/>').join("") +
      '<rect x="160" y="110" width="40" height="12" fill="#666"/><path d="M180 110l-20 -30h40" stroke="#333" stroke-width="2" fill="none"/>' +
      '<rect x="334" y="140" width="6" height="8" fill="#fff6c2" class="sa-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sas1)"/>' +
      '<path d="M0 78h400" stroke="#222" stroke-width="1.5"/>' +
      row(0, 80, 110, "#9a4a32") + row(84, 70, 90, "#b5654a") + row(158, 90, 120, "#8a3e2a") + row(252, 70, 96, "#a85a3e") + row(326, 74, 112, "#93503a") +
      '<path d="M0 80h400" stroke="#222" stroke-width="1.5"/><rect x="0" y="180" width="400" height="20" fill="#b7b0a4"/><rect x="0" y="200" width="400" height="60" fill="#3f4247"/><path d="M0 222h400M0 232h400" stroke="#777" stroke-width="2"/>' +
      car +
      /* stop sign post */
      '<rect x="356" y="96" width="4" height="104" fill="#555"/><rect x="314" y="44" width="80" height="54" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="354" y="62" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">FINDLAY</text><text x="354" y="74" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">MARKET</text>' +
      '<text x="354" y="88" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">RACE ST</text>' +
      '<rect x="16" y="16" width="190" height="30" rx="3" fill="#111" stroke="#444" stroke-width="2"/><text x="28" y="36" ' + font + ' font-size="13" fill="#fff">Race St &amp; Elder St</text>',
      sky("sas1", "#3a2a4a", "#f0a870"));
  }

  /* 2. West Chester church, Sunday choir */
  function sachurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#sas2)"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#6a9a4a"/><path d="M200 260v-70" stroke="#d8cfb8" stroke-width="26"/>' +
      '<rect x="130" y="100" width="140" height="92" fill="#f4f1ea" stroke="#b8b0a0" stroke-width="2"/><path d="M118 104l82 -46l82 46z" fill="#7a3a2a"/>' +
      '<rect x="180" y="20" width="40" height="44" fill="#f4f1ea" stroke="#b8b0a0" stroke-width="2"/><path d="M172 22l28 -26l28 26z" fill="#7a3a2a"/>' +
      '<g class="sa-bell"><path d="M190 30q0 -8 10 -8t10 8l3 16h-26z" fill="' + GOLD + '"/></g>' +
      '<rect x="184" y="146" width="32" height="46" rx="14" fill="#5a3a24"/>' +
      [148, 236].map(x => '<rect x="' + x + '" y="120" width="18" height="34" rx="8" fill="#e8c46a" class="sa-glow"/>').join("") +
      '<g transform="translate(210 110)"><text class="sa-note" ' + font + ' font-size="18" fill="#fff">♪</text><text class="sa-note sa-n2" x="16" ' + font + ' font-size="16" fill="' + GOLD + '">♫</text><text class="sa-note sa-n3" x="-20" ' + font + ' font-size="16" fill="#fff">♪</text></g>' +
      '<circle cx="60" cy="150" r="30" fill="#4f7a3a"/><rect x="56" y="170" width="8" height="24" fill="#5a3a24"/><circle cx="345" cy="146" r="34" fill="#4f7a3a"/><rect x="341" y="168" width="8" height="26" fill="#5a3a24"/>' +
      '<rect x="134" y="226" width="132" height="22" rx="3" fill="#2a3a30" stroke="#d8cba8" stroke-width="1.5"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="11" fill="#f1e6c8">WEST CHESTER</text>',
      sky("sas2", "#8fc0e0", "#f6e0b0"));
  }

  /* 3. Wyoming school music room, violins */
  function saviolin() {
    return svg(
      '<rect width="400" height="260" fill="#e8dcc0"/><rect x="0" y="0" width="400" height="16" fill="#cbbd9c"/>' +
      /* chalkboard with staff */
      '<rect x="20" y="30" width="200" height="100" fill="#2f4a3a" stroke="#8a6a3a" stroke-width="6"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M34 ' + (58 + i * 10) + 'h172" stroke="#e8e8e0" stroke-width="1.2" opacity=".8"/>').join("") +
      '<text x="40" y="100" ' + font + ' font-size="34" fill="#f2f2ea" opacity=".9">\u{1D11E}</text>' +
      '<circle cx="100" cy="88" r="5" fill="#f2f2ea"/><path d="M105 88v-26" stroke="#f2f2ea" stroke-width="2"/><circle cx="130" cy="78" r="5" fill="#f2f2ea"/><path d="M135 78v-26" stroke="#f2f2ea" stroke-width="2"/><circle cx="160" cy="68" r="5" fill="#f2f2ea"/><path d="M165 68v-26" stroke="#f2f2ea" stroke-width="2"/>' +
      /* violins on the wall */
      violin(270, 80, .8, -10) + violin(316, 84, .8, 0) + violin(362, 80, .8, 10) +
      '<rect x="240" y="124" width="150" height="6" fill="#8a6a3a"/>' +
      /* floor + stand with violin and bow */
      '<rect x="0" y="190" width="400" height="70" fill="#a8784a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 190v70" stroke="#94683e" stroke-width="2"/>').join("") +
      '<path d="M120 236v-60M100 236h40" stroke="#333" stroke-width="4"/><rect x="92" y="160" width="56" height="20" fill="#333" transform="rotate(-8 120 170)"/>' +
      violin(190, 190, 1.1, -30) + '<g class="sa-bow"><path d="M150 150l90 44" stroke="#5a3a1a" stroke-width="3"/><path d="M152 154l88 42" stroke="#eee" stroke-width="1"/></g>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (250 + i * 36) + '" y="200" width="24" height="24" rx="3" fill="' + [RUST, ALOE, GOLD, PURPLE][i] + '"/><rect x="' + (252 + i * 36) + '" y="224" width="4" height="12" fill="#555"/><rect x="' + (268 + i * 36) + '" y="224" width="4" height="12" fill="#555"/>').join("") +
      '<rect x="252" y="146" width="128" height="20" rx="3" fill="#3a2a1a" stroke="#d8cba8" stroke-width="1.5"/><text x="316" y="160" text-anchor="middle" ' + font + ' font-size="10" fill="#f1e6c8">WYOMING, OHIO</text>',
      "");
  }

  /* 4. Ohio riverfront, purple bridge, homecoming stage */
  function sariver() {
    const truss = Array.from({ length: 8 }, (_, i) => { const x = 20 + i * 46; return '<path d="M' + x + ' 116l23 -26l23 26" stroke="' + PURPLE + '" stroke-width="4" fill="none"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sas4)"/>' +
      '<circle cx="80" cy="40" r="1.5" fill="#fff" class="sa-tw"/><circle cx="330" cy="30" r="1.5" fill="#fff" class="sa-tw sa-t2"/>' +
      /* Kentucky hills */
      '<path d="M0 110q80 -20 160 -6t140 -10t100 6v20h-400z" fill="#3a3050"/>' +
      /* purple truss bridge */
      '<rect x="0" y="116" width="400" height="8" fill="' + PURPLE + '"/><path d="M0 90h400" stroke="' + PURPLE + '" stroke-width="4"/>' + truss +
      [60, 200, 340].map(x => '<rect x="' + (x - 8) + '" y="124" width="16" height="40" fill="#8a8070"/>').join("") +
      '<rect x="0" y="140" width="400" height="44" fill="#3a4a6a"/><path d="M0 152h400M0 166h400" stroke="#8a7ab0" stroke-width="1" opacity=".4" stroke-dasharray="16 20"/>' +
      '<g class="sa-boat"><rect x="0" y="150" width="90" height="14" fill="#f2ead8"/><rect x="10" y="140" width="66" height="10" fill="#f2ead8"/><rect x="24" y="128" width="6" height="12" fill="#2a2a2a"/><rect x="40" y="128" width="6" height="12" fill="#2a2a2a"/><circle cx="92" cy="156" r="10" fill="none" stroke="' + RUST + '" stroke-width="3"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (14 + i * 12) + '" y="143" width="6" height="4" fill="#ffd27a" class="sa-glow"/>').join("") + '</g>' +
      /* lawn + stage */
      '<rect x="0" y="184" width="400" height="76" fill="#3a5a30"/>' +
      '<rect x="230" y="168" width="150" height="40" fill="#1a1a1a"/><path d="M224 168h162l-10 -24h-142z" fill="#2a2a2a"/>' +
      '<g class="sa-beam"><path d="M262 168l-24 -90h20z" fill="' + GOLD + '" opacity=".35"/></g><g class="sa-beam sa-b2"><path d="M348 168l-6 -90h20z" fill="' + ALOE + '" opacity=".35"/></g>' +
      violin(305, 196, .5, 0) +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (20 + i * 15) + '" cy="' + (226 + (i % 3) * 6) + '" r="7" fill="#1a1a24"/><rect x="' + (13 + i * 15) + '" y="' + (232 + (i % 3) * 6) + '" width="14" height="30" fill="#1a1a24"/>').join("") +
      '<rect x="20" y="194" width="160" height="20" rx="3" fill="#3a2a5a" stroke="#d8cba8" stroke-width="1.5"/><text x="100" y="208" text-anchor="middle" ' + font + ' font-size="10" fill="#f1e6c8">OHIO RIVERFRONT</text>',
      sky("sas4", "#2a2050", "#e88a6a"));
  }

  /* 5. Springfield Pike & Wyoming Ave, skyline behind */
  function sacorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sas5)"/>' +
      /* skyline: Carew Tower (stepped, art deco) and the tiara-topped tower */
      '<g fill="#4a3a5a"><rect x="40" y="96" width="30" height="50"/><rect x="74" y="80" width="26" height="66"/><rect x="104" y="40" width="34" height="106"/><rect x="110" y="30" width="22" height="12"/><rect x="116" y="22" width="10" height="10"/>' +
      '<rect x="146" y="70" width="28" height="76"/><rect x="180" y="34" width="30" height="112"/><path d="M178 36q17 -22 34 0z"/><rect x="216" y="86" width="40" height="60"/><rect x="262" y="64" width="26" height="82"/><rect x="294" y="100" width="40" height="46"/></g>' +
      '<path d="M180 30q15 -12 30 0" stroke="#f0d890" stroke-width="2" fill="none" class="sa-glow"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (110 + (i % 2) * 14) + '" y="' + (50 + i * 12) + '" width="6" height="4" fill="#f5d98a" class="sa-glow ' + (i % 2 ? "sa-g2" : "") + '"/>').join("") +
      /* brick wall */
      '<rect x="0" y="146" width="400" height="80" fill="#9c4a3a"/>' + Array.from({ length: 8 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2) * 15 - 15) + '" y="' + (146 + r * 10) + '" width="28" height="8" fill="#a85a46"/>').join("")).join("") +
      tag("SUDAN", 40, 204, 52, GOLD, -5) + tag("#513", 196, 220, 26, ALOE, -3) +
      '<g class="sa-sp"><circle cx="268" cy="184" r="2" fill="' + GOLD + '"/></g><g class="sa-sp sa-sp2"><circle cx="272" cy="188" r="2" fill="' + RUST + '"/></g><g class="sa-sp sa-sp3"><circle cx="266" cy="190" r="2" fill="' + ALOE + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3f4247"/>' +
      '<rect x="338" y="60" width="6" height="166" fill="#5b6066"/>' + sign(270, 52, 128, "SPRINGFIELD PIKE", 10) + sign(282, 76, 104, "WYOMING AVE", 11),
      sky("sas5", "#2a2246", "#f0a070"));
  }

  window.SCENES = { sastop, sachurch, saviolin, sariver, sacorner };
})();
