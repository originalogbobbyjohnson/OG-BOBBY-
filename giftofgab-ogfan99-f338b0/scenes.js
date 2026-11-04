/* Sacramento opening scenes for the Gift of Gab game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2.6s ease-in-out infinite}.tw2{animation-delay:1.3s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:center;animation:spin 5s linear infinite}.spin2{animation-duration:2.4s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3.4s ease-in-out infinite}.sway2{animation-delay:-1.7s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.25}}.blk{animation:blink 1.4s steps(1) infinite}' +
    '@keyframes bar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.bar{transform-box:fill-box;transform-origin:50% 100%;animation:bar .8s ease-in-out infinite}' +
    '@keyframes drift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.bird{animation:drift 12s linear infinite}' +
    '@keyframes shim{0%,100%{opacity:.25}50%{opacity:.75}}.shim{animation:shim 2.4s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw ' + (i % 2 ? "tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 80) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const GOLD = "#ffb703", SKY = "#8ecae6", RUST = "#e76f51";
  const palm = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q4-40 2-80" stroke="#5a4030" stroke-width="5" fill="none"/><g class="sway ' + (cls || "") + '"><path d="M2-80q-26-4-40 14M2-80q26-4 40 14M2-80q-16-18-34-16M2-80q16-18 34-16M2-80q0-20 4-26" stroke="#2f6b3a" stroke-width="5" fill="none" stroke-linecap="round"/></g></g>';

  /* 1. 8th & K light rail station downtown: the white SacRT train gliding in, Blue and Gold line badges */
  function station() {
    let win = "";
    for (let x = 30; x < 290; x += 42) win += '<rect x="' + x + '" y="124" width="30" height="20" rx="3" fill="#1c2733"/><rect x="' + (x + 2) + '" y="126" width="26" height="7" fill="#ffd98a" opacity=".3"/>';
    let bld = "";
    [[0, 40, 70], [44, 30, 90], [80, 50, 60], [300, 40, 84], [344, 56, 66]].forEach(([x, w, h]) => {
      bld += '<rect x="' + x + '" y="' + (120 - h) + '" width="' + w + '" height="' + h + '" fill="#2e3550"/>';
      for (let yy = 124 - h; yy < 112; yy += 12) bld += '<rect class="tw" x="' + (x + 6) + '" y="' + yy + '" width="5" height="5" fill="#ffd98a" opacity=".5"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(10) + bld +
      /* platform shelter */
      '<rect x="104" y="30" width="192" height="8" fill="#3a6ea5"/><rect x="110" y="38" width="5" height="70" fill="#5a6470"/><rect x="285" y="38" width="5" height="70" fill="#5a6470"/>' +
      '<rect x="118" y="46" width="164" height="42" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="72" text-anchor="middle" ' + F + ' font-weight="700" font-size="22" fill="#fff">8th &amp; K</text>' +
      '<text x="126" y="83" ' + F + ' font-size="7" fill="#dbe6f3">SACRT LIGHT RAIL</text>' +
      '<rect x="230" y="76" width="22" height="9" rx="2" fill="#0072bc"/><text x="241" y="83" text-anchor="middle" ' + F + ' font-weight="700" font-size="6.5" fill="#fff">BLUE</text>' +
      '<rect x="255" y="76" width="22" height="9" rx="2" fill="#f2a900"/><text x="266" y="83" text-anchor="middle" ' + F + ' font-weight="700" font-size="6.5" fill="#111">GOLD</text>' +
      /* catenary */
      '<path d="M0 100h400" stroke="#888" stroke-width="1"/>' +
      /* train */
      '<g class="anim-train">' +
        '<path d="M10 108v-2h4l8-6" stroke="#888" stroke-width="1.5" fill="none"/>' +
        '<rect x="8" y="112" width="300" height="52" rx="8" fill="#f2f2ee" stroke="#8a8f96" stroke-width="2"/>' +
        '<rect x="8" y="148" width="300" height="5" fill="#0072bc"/><rect x="8" y="153" width="300" height="3" fill="#f2a900"/>' + win +
        '<path d="M296 112q16 2 20 22v30h-20z" fill="#f2f2ee" stroke="#8a8f96" stroke-width="2"/><path d="M300 118q10 2 12 16h-12z" fill="#1c2733"/><circle cx="310" cy="156" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* street-level platform and rails */
      '<rect x="0" y="164" width="400" height="4" fill="#e8c547"/><rect x="0" y="168" width="400" height="20" fill="#9a958a"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#2a2a30"/><path d="M0 206h400M0 226h400" stroke="#777" stroke-width="3"/>' +
      tag("BLACKALICIOUS", 30, 252, 24, GOLD, -3),
      sky("g1", "#10142a", "#3b4a7a"));
  }

  /* 2. Old Sacramento waterfront: the Delta King riverboat docked on the river, paddlewheel turning */
  function riverboat() {
    let rail = "";
    for (let x = 96; x < 300; x += 10) rail += '<rect x="' + x + '" y="112" width="2" height="10" fill="#fff"/>';
    let wall = "";
    for (let x = 0; x < 400; x += 50) wall += '<rect x="' + x + '" y="96" width="46" height="60" fill="' + ["#7a4a2a", "#8a5a3a", "#6a3a2a"][x / 50 % 3] + '"/><rect x="' + (x + 8) + '" y="106" width="10" height="16" fill="#ffd98a" opacity=".5"/><rect x="' + (x + 28) + '" y="106" width="10" height="16" fill="#ffd98a" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#ffd27a" opacity=".85"/>' +
      '<path class="bird" d="M0 40q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/>' + wall +
      '<rect x="0" y="152" width="400" height="108" fill="#355f7a"/>' +
      '<path class="shim" d="M20 214h40M240 232h50M330 210h40" stroke="#cfe6ff" stroke-width="1.5"/><path class="shim shim2" d="M80 236h30M180 244h40" stroke="#cfe6ff" stroke-width="1.5"/>' +
      /* Delta King: white decks, black stacks, red paddlewheel at the stern */
      '<path d="M70 196h250l-14 18H82z" fill="#2a2a30"/>' +
      '<rect x="80" y="160" width="230" height="36" fill="#f4f1e8"/><rect x="80" y="160" width="230" height="4" fill="#c64a3a"/>' +
      '<rect x="92" y="122" width="206" height="38" fill="#f4f1e8"/>' + rail +
      '<rect x="120" y="96" width="140" height="26" fill="#f4f1e8"/><rect x="160" y="80" width="60" height="16" fill="#f4f1e8"/>' +
      '<rect x="176" y="50" width="8" height="30" fill="#111"/><rect x="196" y="50" width="8" height="30" fill="#111"/>' +
      (function () { let w = ""; for (let x = 100; x < 300; x += 18) w += '<rect x="' + x + '" y="134" width="10" height="12" fill="#2a3540"/><rect x="' + x + '" y="172" width="10" height="12" fill="#2a3540"/>'; return w; })() +
      '<g class="spin" ><circle cx="336" cy="188" r="26" fill="none" stroke="#c64a3a" stroke-width="4"/><path d="M310 188h52M336 162v52M318 170l36 36M354 170l-36 36" stroke="#c64a3a" stroke-width="4"/></g>' +
      '<text x="20" y="250" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '">OLD SACRAMENTO</text>',
      sky("g2", "#f08a5d", "#6a4f8a"));
  }

  /* 3. The California State Capitol: white columns, the dome with its gold ball, palms swaying in Capitol Park */
  function capitol() {
    let cols = "";
    for (let x = 150; x <= 246; x += 16) cols += '<rect x="' + x + '" y="150" width="6" height="40" fill="#f4f1e8"/>';
    let dcols = "";
    for (let x = 166; x <= 230; x += 8) dcols += '<rect x="' + x + '" y="92" width="3" height="22" fill="#e6e0d2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<path class="bird" d="M0 30q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      /* wings */
      '<rect x="40" y="140" width="320" height="56" fill="#ece6d6"/><rect x="40" y="134" width="320" height="8" fill="#d8d0bc"/>' +
      (function () { let w = ""; for (let x = 54; x < 350; x += 22) if (x < 140 || x > 260) w += '<rect x="' + x + '" y="152" width="10" height="16" fill="#8aa0b6"/><rect x="' + x + '" y="174" width="10" height="14" fill="#8aa0b6"/>'; return w; })() +
      /* portico */
      '<path d="M140 138l60-22 60 22z" fill="#f4f1e8" stroke="#cfc6b0"/>' + cols +
      /* drum + dome */
      '<rect x="158" y="88" width="84" height="30" fill="#f4f1e8"/>' + dcols +
      '<path d="M162 90q38-58 76 0z" fill="#f4f1e8" stroke="#cfc6b0" stroke-width="1.5"/>' +
      '<rect x="194" y="40" width="12" height="16" fill="#f4f1e8"/><path d="M192 42q8-10 16 0z" fill="#f4f1e8"/>' +
      '<circle class="flk" cx="200" cy="30" r="7" fill="' + GOLD + '"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3e6f3a"/><rect x="170" y="196" width="60" height="64" fill="#cfc6b0"/>' +
      palm(30, 230, 1.1, "") + palm(110, 236, .9, "sway2") + palm(300, 236, .9, "") + palm(376, 230, 1.1, "sway2") +
      '<text x="200" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '">CAPITOL PARK</text>',
      sky("g3", "#5fa8d3", "#cfe8f3"));
  }

  /* 4. KDVS, the college radio station at UC Davis where Blackalicious and the Solesides crew got started: ON AIR light, turntables, meters */
  function radio() {
    let bars = "";
    for (let i = 0; i < 12; i++) bars += '<rect class="bar" style="animation-delay:' + (-i * .13).toFixed(2) + 's" x="' + (250 + i * 9) + '" y="70" width="6" height="40" fill="' + (i > 8 ? RUST : i > 5 ? GOLD : SKY) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b1622"/>' +
      /* foam wall */
      (function () { let f = ""; for (let y = 0; y < 150; y += 20) for (let x = 0; x < 400; x += 20) f += '<rect x="' + x + '" y="' + y + '" width="18" height="18" fill="' + ((x + y) / 20 % 2 ? "#251e2e" : "#2c2436") + '"/>'; return f; })() +
      '<rect class="blk" x="40" y="22" width="110" height="34" rx="4" fill="#c0392b" stroke="#fff" stroke-width="2"/>' +
      '<text x="95" y="46" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#fff">ON AIR</text>' +
      '<rect x="240" y="60" width="120" height="58" rx="4" fill="#0f0d14" stroke="#555"/>' + bars +
      '<text x="95" y="80" text-anchor="middle" ' + F + ' font-weight="700" font-size="14" fill="' + GOLD + '">KDVS · UC DAVIS</text>' +
      /* desk + decks */
      '<rect x="0" y="160" width="400" height="100" fill="#3a2a1e"/><rect x="0" y="154" width="400" height="8" fill="#5a3f28"/>' +
      '<rect x="40" y="168" width="110" height="70" rx="4" fill="#2a2a30"/><rect x="250" y="168" width="110" height="70" rx="4" fill="#2a2a30"/>' +
      '<g class="spin spin2"><circle cx="95" cy="203" r="28" fill="#0b0b0b"/><circle cx="95" cy="203" r="9" fill="' + GOLD + '"/><path d="M95 178v6" stroke="#666" stroke-width="2"/></g>' +
      '<g class="spin spin2"><circle cx="305" cy="203" r="28" fill="#0b0b0b"/><circle cx="305" cy="203" r="9" fill="' + SKY + '"/><path d="M305 178v6" stroke="#666" stroke-width="2"/></g>' +
      '<rect x="166" y="176" width="68" height="50" rx="3" fill="#1d1d24"/><rect x="176" y="186" width="6" height="30" fill="#555"/><rect x="194" y="186" width="6" height="30" fill="#555"/><rect x="212" y="186" width="6" height="30" fill="#555"/>' +
      /* mic on boom */
      '<path d="M200 154V110l-30-20" stroke="#777" stroke-width="3" fill="none"/><rect x="156" y="78" width="16" height="22" rx="7" fill="#999" transform="rotate(-34 164 89)"/>',
      "");
  }

  /* 5. The corner: Freeport Blvd and Florin Rd in South Sacramento, the gold Tower Bridge behind */
  function corner() {
    let bricks = "";
    for (let y = 80; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#5a3a22"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1410"/>' +
      '<rect x="0" y="0" width="400" height="80" fill="url(#g5)"/>' + stars(8) + IC_TOWER + bricks +
      '<rect x="0" y="78" width="400" height="4" fill="#2a1a14"/>' +
      tag("GIFT OF GAB", 20, 140, 40, GOLD, -5) + tag("QUANNUM", 50, 186, 26, SKY, -3) + tag("NIA", 230, 192, 24, RUST, -8) +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<rect x="356" y="86" width="5" height="124" fill="#4a5058"/>' +
      '<rect x="296" y="84" width="100" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="346" y="99" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Freeport Blvd</text>' +
      '<rect x="296" y="108" width="100" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="346" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Florin Rd</text>',
      sky("g5", "#1d1a3a", "#e08a4a"));
  }

  /* Iconic landmark behind the corner: Sacramento's Tower Bridge, the gold vertical-lift bridge with its two towers */
  const IC_TOWER = '<g>' +
    '<rect x="0" y="62" width="400" height="18" fill="#2a3a55"/>' +
    '<rect x="140" y="12" width="14" height="56" fill="#d9a520"/><rect x="246" y="12" width="14" height="56" fill="#d9a520"/>' +
    '<rect x="136" y="8" width="22" height="8" fill="#e8b830"/><rect x="242" y="8" width="22" height="8" fill="#e8b830"/>' +
    '<path d="M144 24l8 0M144 36h8M144 48h8M250 24h8M250 36h8M250 48h8" stroke="#9a7410" stroke-width="2"/>' +
    '<rect x="154" y="18" width="92" height="5" fill="#d9a520"/>' +
    '<rect x="154" y="48" width="92" height="8" fill="#d9a520"/><path d="M154 56l16-8h60l16 8" stroke="#9a7410" stroke-width="1.5" fill="none"/>' +
    '<rect x="60" y="54" width="80" height="6" fill="#d9a520"/><rect x="260" y="54" width="80" height="6" fill="#d9a520"/>' +
    '<circle class="blk" cx="147" cy="6" r="2" fill="#ff3b30"/><circle class="blk" cx="253" cy="6" r="2" fill="#ff3b30"/>' +
    '</g>';
  window.SCENES = { station, riverboat, capitol, radio, corner };
})();
