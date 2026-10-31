/* Harlem (Lenox Av / 145th St) opening scenes for the Vado game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes mnr{from{transform:translateX(-260px)}to{transform:translateX(460px)}}' +
    '.mnr{animation:mnr 7s linear infinite}' +
    '@keyframes mnl{from{transform:translateX(460px)}to{transform:translateX(-260px)}}' +
    '.mnl{animation:mnl 5.5s linear infinite}' +
    '@keyframes boat{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}' +
    '.boat{animation:boat 14s linear infinite}' +
    '@keyframes rip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}' +
    '.rip{animation:rip 2.4s ease-in-out infinite}.rp2{animation-delay:1.2s}' +
    '@keyframes fly{0%{transform:translate(0,0)}25%{transform:translate(60px,-20px)}50%{transform:translate(120px,4px)}75%{transform:translate(60px,22px)}100%{transform:translate(0,0)}}' +
    '.fly{animation:fly 9s ease-in-out infinite}.fy2{animation-delay:-3s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.2)}}' +
    '.flap{transform-box:fill-box;transform-origin:50% 50%;animation:flap .35s linear infinite}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{transform-box:fill-box;transform-origin:50% 0;animation:drip 3s ease-out infinite}' +
    '@keyframes spray{0%,100%{opacity:.1}50%{opacity:.9}}' +
    '.spr{animation:spray 1.2s ease-in-out infinite}' +
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
  const bird = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><path class="flap" d="M-7 0q3.5-4 7 0q3.5-4 7 0" fill="none" stroke="#2a2a30" stroke-width="2"/></g>';
  const RED = "#ee352e", SLIME = "#9cff57", ORANGE = "#ff8a5b", GOLD = "#f2c14e";

  /* 1. The 3 pulling into 145 St on the Lenox Av line, underground: cream tile, a terracotta mosaic band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6d0c0" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d6d0c0" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="30" width="8" height="8" fill="#a8452c"/><rect x="' + (x + 8) + '" y="30" width="8" height="8" fill="#3d6b8a"/>';
    let cols = "";
    [24, 200, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efe8d6"/>' + tiles + band +
      '<rect x="48" y="54" width="134" height="36" rx="4" fill="#111"/><rect x="48" y="54" width="134" height="4" fill="#fff"/>' +
      '<text x="60" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">145 St</text>' + bullet(160, 73, "3", RED) +
      '<rect x="218" y="54" width="134" height="36" rx="4" fill="#111"/><rect x="218" y="54" width="134" height="4" fill="#fff"/>' +
      '<text x="228" y="71" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Lenox Av</text>' +
      '<text x="228" y="84" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#ddd">Malcolm X Blvd</text>' + bullet(330, 73, "3", RED) +
      '<g class="flk"><rect x="80" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="240" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 142, "3", RED) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("VADO", 24, 242, 34, SLIME, -5) + tag("UPTOWN", 250, 240, 26, ORANGE, -7));
  }

  /* 2. The Schomburg Center at Lenox Av and 135th: the 1905 limestone Carnegie library with arched windows beside the red-brick
        modern building, a bus rolling down Malcolm X Blvd */
  function schomburg() {
    let brick = "";
    for (let y = 70; y < 200; y += 6) brick += '<path d="M150 ' + y + 'h250" stroke="#7a3322" stroke-width=".6" opacity=".6"/>';
    let modWin = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) modWin += '<rect class="' + ((r + c) % 3 ? "" : "flk") + '" x="' + (176 + c * 54) + '" y="' + (84 + r * 34) + '" width="38" height="24" fill="#ffe7a8" opacity=".9" stroke="#3a1a12" stroke-width="2"/>';
    let arch = "";
    [30, 76].forEach(x => arch += '<path d="M' + x + ' 150v-34a14 14 0 0 1 28 0v34z" fill="#ffe7a8" stroke="#8a7a5a" stroke-width="2"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#skyS)"/>' +
      /* Carnegie building */
      '<rect x="14" y="74" width="122" height="126" fill="#e3d8bf"/><rect x="10" y="66" width="130" height="10" fill="#cfc2a4"/>' +
      '<rect x="14" y="160" width="122" height="4" fill="#cfc2a4"/>' + arch +
      '<rect x="30" y="86" width="22" height="18" fill="#ffe7a8" stroke="#8a7a5a" stroke-width="2"/><rect x="82" y="86" width="22" height="18" fill="#ffe7a8" stroke="#8a7a5a" stroke-width="2"/>' +
      '<rect x="60" y="168" width="30" height="32" fill="#3a2a1a"/>' +
      /* modern red brick building */
      '<rect x="150" y="58" width="250" height="142" fill="#a2492f"/>' + brick + '<rect x="150" y="52" width="250" height="8" fill="#6a2a1a"/>' + modWin +
      '<rect x="160" y="186" width="230" height="14" fill="#2a1a14"/>' +
      '<text x="275" y="196" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="#f2e6c8">SCHOMBURG CENTER</text>' +
      '<rect x="0" y="200" width="400" height="10" fill="#9a9a9a"/><rect x="0" y="210" width="400" height="50" fill="#2b2d31"/>' +
      '<path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="mnr"><rect x="0" y="214" width="120" height="34" rx="5" fill="#2c5fa8"/><rect x="0" y="214" width="120" height="6" fill="#f7f3ea"/>' +
        '<rect x="8" y="222" width="18" height="12" fill="#cfe3ff"/><rect x="32" y="222" width="18" height="12" fill="#cfe3ff"/><rect x="56" y="222" width="18" height="12" fill="#cfe3ff"/><rect x="80" y="222" width="18" height="12" fill="#cfe3ff"/>' +
        '<rect x="104" y="220" width="14" height="10" fill="#111"/><text x="111" y="228" text-anchor="middle" font-family="Helvetica" font-weight="700" font-size="7" fill="' + GOLD + '">M102</text>' +
        '<circle cx="22" cy="249" r="6" fill="#111"/><circle cx="98" cy="249" r="6" fill="#111"/></g>',
      sky("skyS", "#3d6fb0", "#c7dcf0"));
  }

  /* 3. Graham Court on Adam Clayton Powell Jr Blvd at 116th: limestone base with the big arched carriage gate, buff brick floors above,
        a heavy copper cornice, pigeons circling */
  function graham() {
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) {
      if (r === 3 && c > 2 && c < 6) continue;
      wins += '<rect x="' + (24 + c * 40) + '" y="' + (42 + r * 26) + '" width="18" height="16" fill="' + ((r * 3 + c) % 5 ? "#3a4048" : "#ffe7a8") + '" stroke="#efe4c8" stroke-width="2"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#skyG)"/>' +
      '<rect x="10" y="30" width="380" height="180" fill="#d9c08f"/>' +
      '<rect x="4" y="22" width="392" height="12" fill="#5f8f7a"/><rect x="4" y="34" width="392" height="4" fill="#3e6a58"/>' +
      wins +
      '<rect x="10" y="150" width="380" height="60" fill="#e8dcc0"/><rect x="10" y="150" width="380" height="4" fill="#c8b890"/>' +
      '<path d="M10 166h380M10 182h380M10 198h380" stroke="#c8b890" stroke-width="1"/>' +
      /* carriage arch with iron gate and a courtyard glimpse */
      '<path d="M156 210v-58a44 44 0 0 1 88 0v58z" fill="#f2ead6" stroke="#b8a678" stroke-width="3"/>' +
      '<path d="M164 210v-56a36 36 0 0 1 72 0v56z" fill="#5b8a4a"/><circle cx="200" cy="186" r="10" fill="#cfe3ff" opacity=".8"/>' +
      '<g stroke="#1c1c1c" stroke-width="2.5">' + [172, 184, 196, 208, 220, 232].map(x => '<path d="M' + x + ' 210V142"/>').join("") + '<path d="M164 170h72"/></g>' +
      '<path d="M190 116l10-8 10 8z" fill="#c8b890"/>' +
      '<rect x="32" y="170" width="100" height="18" fill="#d8caa6" stroke="#a8966a"/><text x="82" y="183" text-anchor="middle" font-family="Georgia, serif" font-size="9" letter-spacing="1.5" fill="#5a4a2a">GRAHAM COURT</text>' +
      '<rect x="0" y="210" width="400" height="12" fill="#a8a8a8"/><rect x="0" y="222" width="400" height="38" fill="#2b2d31"/>' +
      '<g class="fly">' + bird(60, 18) + bird(80, 10) + '</g><g class="fly fy2">' + bird(250, 14) + '</g>' +
      tag("SLIME", 300, 250, 22, SLIME, -4),
      sky("skyG", "#f4a96a", "#fbe3c4"));
  }

  /* 4. The 145th Street Bridge, the old steel swing bridge over the Harlem River to the Bronx, a boat sliding under, cars on the Drive */
  function bridge() {
    let truss = "";
    for (let x = 40; x < 360; x += 20) truss += '<path d="M' + x + ' 128L' + (x + 10) + ' 96L' + (x + 20) + ' 128" stroke="#7d8c8f" stroke-width="2.5" fill="none"/>';
    let bx = "";
    [[0, 54, 40], [42, 64, 30], [76, 48, 36], [118, 60, 26], [240, 56, 34], [278, 44, 40], [322, 62, 30], [356, 50, 44]].forEach(([x, y, w]) => {
      bx += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (110 - y) + '" fill="#4a3f52"/>';
      for (let yy = y + 6; yy < 104; yy += 10) bx += '<rect class="' + (yy % 3 ? "" : "flk") + '" x="' + (x + 6) + '" y="' + yy + '" width="4" height="4" fill="#ffd27a" opacity=".8"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#skyB)"/>' + bx +
      '<rect x="0" y="108" width="400" height="92" fill="#2e5266"/>' +
      '<g class="rip"><path d="M20 160h40M120 176h50M240 150h40M320 184h50" stroke="#8fb8cc" stroke-width="2" opacity=".6"/></g>' +
      '<g class="rip rp2"><path d="M70 190h30M200 168h40M300 162h30" stroke="#8fb8cc" stroke-width="2" opacity=".5"/></g>' +
      /* bridge deck, truss and the swing pier */
      '<rect x="0" y="128" width="400" height="8" fill="#5c6a6d"/>' +
      '<path d="M40 96h320" stroke="#7d8c8f" stroke-width="4"/>' + truss +
      '<path d="M40 128V96M360 128V96" stroke="#7d8c8f" stroke-width="4"/>' +
      '<rect x="178" y="136" width="44" height="40" fill="#8a8478"/><rect x="172" y="132" width="56" height="6" fill="#6e6a60"/>' +
      '<rect x="190" y="74" width="20" height="22" fill="#9aa8aa"/><path d="M186 74h28l-4-8h-20z" fill="#6e7c7e"/>' +
      '<text x="200" y="124" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" letter-spacing="2" fill="#e6eef0">145 ST BRIDGE</text>' +
      '<g class="boat"><path d="M0 196h60l-8 10H8z" fill="#f7f3ea"/><rect x="16" y="186" width="26" height="10" fill="' + ORANGE + '"/><rect x="22" y="180" width="6" height="6" fill="#333"/></g>' +
      /* Harlem River Drive */
      '<rect x="0" y="200" width="400" height="8" fill="#a8a8a8"/><rect x="0" y="208" width="400" height="52" fill="#2b2d31"/>' +
      '<path d="M0 234h400" stroke="#f7f3ea" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="mnl"><rect x="0" y="238" width="48" height="16" rx="5" fill="' + SLIME + '"/><rect x="10" y="232" width="26" height="10" rx="3" fill="#2a4a1a"/><circle cx="10" cy="255" r="4" fill="#111"/><circle cx="38" cy="255" r="4" fill="#111"/></g>' +
      '<g class="mnr"><rect x="0" y="214" width="48" height="16" rx="5" fill="#d8d8de"/><rect x="12" y="208" width="26" height="10" rx="3" fill="#3a3f48"/><circle cx="10" cy="231" r="4" fill="#111"/><circle cx="38" cy="231" r="4" fill="#111"/></g>',
      sky("skyB", "#1a2340", "#e2855a"));
  }

  /* 5. The corner: Malcolm X Blvd (Lenox Av) and W 144 St, where he grew up — green street signs, a brick wall with his name sprayed on it */
  function corner() {
    let brick = "";
    for (let y = 40; y < 200; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a3a28"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b0f0c"/>' +
      '<rect x="0" y="40" width="400" height="160" fill="#6a2a1c"/>' + brick +
      '<rect x="0" y="0" width="400" height="40" fill="url(#skyC)"/>' +
      tag("VADO", 120, 130, 62, SLIME, -8) +
      '<g class="drip"><rect x="150" y="128" width="4" height="22" fill="' + SLIME + '"/><rect x="214" y="122" width="4" height="30" fill="' + SLIME + '"/></g>' +
      tag("U.N.", 300, 160, 30, ORANGE, -4) + tag("SLIME FLU", 130, 190, 22, GOLD, 4) +
      '<circle class="spr" cx="350" cy="96" r="14" fill="' + SLIME + '" opacity=".4"/>' +
      /* sign pole */
      '<rect x="42" y="30" width="6" height="190" fill="#4a5a4a"/>' +
      '<rect x="-4" y="30" width="104" height="24" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="48" y="47" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Lenox Av</text>' +
      '<rect x="-4" y="56" width="104" height="18" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="48" y="69" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">Malcolm X Blvd</text>' +
      '<rect x="4" y="78" width="84" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="46" y="94" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">W 144 St</text>' +
      '<rect x="0" y="200" width="400" height="14" fill="#9a9a9a"/><rect x="0" y="214" width="400" height="46" fill="#2b2d31"/>',
      sky("skyC", "#0f1a33", "#3a2a5a"));
  }

  window.SCENES = { train, schomburg, graham, bridge, corner };
})();
