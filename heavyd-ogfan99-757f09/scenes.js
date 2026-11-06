/* Heavy D game (NYC map, Westchester: Mount Vernon). Room 0 = the Bee-Line 40 bus pulling into Petrillo Plaza, downtown Mount Vernon,
   the Mandeville Courthouse on the green in Mandeville, Jamaica (where he was born), the colorful TV stage where Heavy D & the Boyz did the In Living Color theme,
   the apple orchard and cider house from The Cider House Rules, and Broad St & Fleetwood Av with the Peaceful Journey arch behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sw{transform-box:fill-box;transform-origin:50% 100%;animation:sway 2.6s ease-in-out infinite}.sw2{animation-delay:-1.3s}' +
    '@keyframes fly{0%{transform:translate(0,0)}50%{transform:translate(50px,-12px)}100%{transform:translate(100px,0)}}.bd{animation:fly 6s ease-in-out infinite alternate}.bd2{animation-delay:-3s}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.dn{animation:bounce .7s ease-in-out infinite}.dn2{animation-delay:-.23s}.dn3{animation-delay:-.46s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:fill-box;transform-origin:50% 50%;animation:spin 6s linear infinite}' +
    '@keyframes drop{0%,40%{transform:translateY(0);opacity:1}85%{transform:translateY(64px);opacity:1}100%{transform:translateY(64px);opacity:0}}.ap{animation:drop 3s ease-in infinite}.ap2{animation-delay:-1.5s}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}.gl{animation:glow 2.2s ease-in-out infinite}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.25}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PURPLE = "#c792ff", GOLD = "#ffcf3f", TEAL = "#3fd0c9", CREAM = "#f2ead8", BRICK = "#9a4632", BRICK2 = "#7d3727";
  const pill = (x, y, txt) => '<rect x="' + (x - 16) + '" y="' + (y - 11) + '" width="32" height="22" rx="11" fill="#ffd200"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#10224a">' + txt + '</text>';
  const brickRows = (x, y, w, h, col) => { let b = ""; for (let yy = y + 7; yy < y + h; yy += 7) b += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + col + '" stroke-width="1"/>'; return b; };
  const windows = (x, y, w, h, gx, gy, col) => { let s = ""; for (let yy = y + 8; yy < y + h - 10; yy += gy) for (let xx = x + 6; xx < x + w - 10; xx += gx) s += '<rect x="' + xx + '" y="' + yy + '" width="8" height="10" fill="' + col + '"/>'; return s; };
  const palm = (x, y, cls) => '<g class="sw ' + cls + '"><path d="M' + x + ' ' + y + 'q-4-40 4-70" stroke="#7a5a3a" stroke-width="6" fill="none"/>' +
    [-60, -25, 10, 45, 80].map(a => '<path transform="rotate(' + a + ' ' + (x + 4) + ' ' + (y - 70) + ')" d="M' + (x + 4) + ' ' + (y - 70) + 'q16-12 34 2q-18-2-34-2z" fill="#2e8b4a"/>').join("") + '</g>';

  /* 0. Petrillo Plaza, downtown Mount Vernon: the Bee-Line 40 pulls in (white bus, yellow + navy stripes, amber sign), low brick storefronts behind */
  function bus() {
    let win = "";
    for (let x = 40; x < 200; x += 34) win += '<rect x="' + x + '" y="112" width="26" height="26" rx="2" fill="#1f2b40"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#h0)"/>' +
      '<circle cx="60" cy="40" r="20" fill="#fff3c4"/>' +
      '<rect x="0" y="80" width="120" height="100" fill="' + BRICK + '"/>' + brickRows(0, 80, 120, 100, BRICK2) + windows(0, 80, 120, 60, 24, 22, "#cfe2f5") +
      '<rect x="120" y="96" width="100" height="84" fill="#d8cdb4"/>' + windows(120, 96, 100, 50, 22, 22, "#cfe2f5") + '<rect x="120" y="92" width="100" height="5" fill="#b9ab8c"/>' +
      '<rect x="220" y="70" width="100" height="110" fill="#6f4a3a"/>' + windows(220, 70, 100, 70, 22, 22, "#cfe2f5") +
      '<rect x="320" y="88" width="80" height="92" fill="' + BRICK + '"/>' + brickRows(320, 88, 80, 92, BRICK2) +
      [[0, PURPLE], [120, TEAL], [220, GOLD], [320, "#ff6b6b"]].map(([x, c]) => '<rect x="' + (x + 4) + '" y="150" width="' + (x === 120 ? 92 : x === 320 ? 72 : 112) + '" height="8" fill="' + c + '"/>').join("") +
      '<rect x="0" y="176" width="400" height="12" fill="#bdb8ad"/><rect x="0" y="188" width="400" height="72" fill="#3c3d42"/>' +
      '<path d="M0 226h400" stroke="#e9d27a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="356" y="96" width="4" height="82" fill="#5b616b"/>' +
      '<rect x="282" y="62" width="114" height="44" rx="3" fill="#111"/><rect x="282" y="62" width="114" height="3" fill="#fff"/>' +
      '<text x="290" y="80" ' + font + ' font-size="12" fill="#fff">Petrillo Plaza</text><text x="290" y="97" ' + font + ' font-size="8.5" fill="#cfd3da">Mount Vernon</text>' + pill(374, 92, "40") +
      '<g class="anim-train">' +
        '<rect x="20" y="98" width="290" height="86" rx="10" fill="#f6f6f2" stroke="#9aa0a8" stroke-width="2"/>' +
        '<rect x="20" y="150" width="290" height="10" fill="#ffd200"/><rect x="20" y="160" width="290" height="8" fill="#10224a"/>' + win +
        '<rect x="276" y="106" width="30" height="50" rx="4" fill="#1f2b40"/>' +
        '<rect x="206" y="101" width="66" height="9" rx="2" fill="#111"/><text x="239" y="108.5" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="8" fill="#ffb21f">40 MT VERNON</text>' +
        '<rect x="214" y="114" width="34" height="60" rx="2" fill="#2a3a52" stroke="#9aa0a8"/><path d="M231 114v60" stroke="#9aa0a8"/>' +
        '<circle cx="70" cy="184" r="15" fill="#1a1a1a"/><circle cx="70" cy="184" r="6" fill="#9aa0a8"/><circle cx="250" cy="184" r="15" fill="#1a1a1a"/><circle cx="250" cy="184" r="6" fill="#9aa0a8"/>' +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/><rect x="22" y="160" width="6" height="8" fill="#e0262f"/>' +
      '</g>' +
      '<g class="car car2"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + PURPLE + '"/><circle cx="10" cy="247" r="4" fill="#111"/><circle cx="36" cy="247" r="4" fill="#111"/></g>' +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="8" fill="#f2ead8" letter-spacing="3">MOUNT VERNON, WESTCHESTER</text>',
      sky("h0", "#6fb4e8", "#f6d9a6"));
  }

  /* 1. Mandeville, Jamaica, where he was born: the cut-stone Georgian courthouse with its double stairs and portico on the green, palms, the hills */
  function mandeville() {
    let stone = "";
    for (let y = 92; y < 196; y += 8) for (let x = (y % 16 ? 96 : 88); x < 304; x += 16) stone += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#d9c9a6" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#h1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff6c8"/>' +
      '<path d="M0 120q60-40 120-20t140-10 140 20v80H0z" fill="#3f8a4f"/><path d="M0 132q80-26 170-6t230-8v80H0z" fill="#2f7341"/>' +
      '<g class="bd"><path d="M40 60q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g><g class="bd bd2"><path d="M220 46q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      /* courthouse */
      '<rect x="88" y="88" width="216" height="110" fill="#c9b48c"/>' + stone +
      '<path d="M84 90l112-30 112 30z" fill="#7a5a44"/><rect x="84" y="86" width="224" height="6" fill="#e6d8b8"/>' +
      [104, 134, 248, 278].map(x => '<rect x="' + x + '" y="102" width="14" height="22" fill="#3b4a5a"/><rect x="' + x + '" y="146" width="14" height="22" fill="#3b4a5a"/>').join("") +
      /* portico */
      '<rect x="164" y="92" width="64" height="8" fill="#efe6d0"/><path d="M160 100l36-14 36 14z" fill="#efe6d0"/>' +
      [168, 184, 200, 216].map(x => '<rect x="' + x + '" y="100" width="7" height="44" fill="#f4ecd8"/>').join("") +
      '<rect x="164" y="144" width="64" height="6" fill="#e6d8b8"/>' +
      /* double stairs */
      '<path d="M164 150l-40 46h12l40-46zM228 150l40 46h-12l-40-46z" fill="#b8a27a"/><path d="M180 150h32v48h-32z" fill="#3b4a5a"/>' +
      '<path d="M120 196l44-50M272 196l-44-50" stroke="#efe6d0" stroke-width="2"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5aa65a"/><path d="M0 196h400" stroke="#3d7d3d" stroke-width="3"/>' +
      '<path d="M120 260l40-64h72l40 64z" fill="#cdbb92"/>' +
      palm(40, 210, "") + palm(354, 214, "sw2") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="8" fill="#1f3a22" letter-spacing="3">MANDEVILLE, JAMAICA</text>',
      sky("h1", "#5fb0f0", "#d8f0ff"));
  }

  /* 2. The TV stage: bright paint-splash set, the Boyz' dance crew bouncing, the ON AIR light, a studio camera */
  function stage() {
    const splat = (x, y, r, c) => '<g transform="translate(' + x + ',' + y + ')"><circle r="' + r + '" fill="' + c + '"/>' + [0, 60, 120, 180, 240, 300].map(a => '<circle cx="' + (Math.cos(a * Math.PI / 180) * r * 1.2).toFixed(1) + '" cy="' + (Math.sin(a * Math.PI / 180) * r * 1.2).toFixed(1) + '" r="' + (r / 3.5).toFixed(1) + '" fill="' + c + '"/>').join("") + '</g>';
    const dancer = (x, c, cls) => '<g class="dn ' + cls + '"><circle cx="' + x + '" cy="132" r="9" fill="#2a1f3a"/><path d="M' + (x - 10) + ' 146h20l4 30h-28z" fill="' + c + '"/>' +
      '<path d="M' + (x - 10) + ' 148l-14-16M' + (x + 10) + ' 148l14-16" stroke="#2a1f3a" stroke-width="5" stroke-linecap="round"/><path d="M' + (x - 8) + ' 176l-4 22M' + (x + 8) + ' 176l4 22" stroke="#2a1f3a" stroke-width="6" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1230"/>' +
      '<rect x="20" y="20" width="360" height="170" fill="#2b1f4a"/>' +
      splat(70, 60, 22, "#ff4fa0") + splat(170, 46, 18, GOLD) + splat(260, 70, 24, TEAL) + splat(340, 44, 16, "#ff7a2f") + splat(120, 110, 14, "#7cf08a") + splat(320, 120, 18, PURPLE) +
      '<path d="M30 160l40-30 30 20 40-34 50 30 40-24 50 28 40-20 40 22v18H30z" fill="#3a2a66" opacity=".8"/>' +
      [60, 140, 220, 300].map(x => '<g class="spn"><circle cx="' + x + '" cy="22" r="6" fill="#fff6c2"/></g>').join("") +
      /* stage floor */
      '<path d="M0 190h400v70H0z" fill="#121018"/><path d="M0 196h400" stroke="' + GOLD + '" stroke-width="3"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 40) g += '<path d="M' + x + ' 196l' + ((x - 200) / 3).toFixed(0) + ' 64" stroke="#2a2a38" stroke-width="2"/>'; return g; })() +
      dancer(110, "#ff4fa0", "") + dancer(170, GOLD, "dn2") + dancer(230, TEAL, "dn3") + dancer(290, PURPLE, "") +
      /* on-air + camera */
      '<rect class="gl" x="300" y="200" width="70" height="20" rx="4" fill="#e0262f"/><text x="335" y="214" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">ON AIR</text>' +
      '<rect x="20" y="206" width="56" height="30" rx="4" fill="#3a3a44"/><rect x="76" y="212" width="16" height="16" fill="#22222a"/><path d="M40 236l-10 22M56 236l10 22M48 236v22" stroke="#555" stroke-width="3"/>' +
      '<circle class="flk" cx="28" cy="212" r="3" fill="#e0262f"/>',
      "");
  }

  /* 3. The Cider House Rules: an apple orchard on the hill, the red cider house, apples dropping */
  function orchard() {
    const tree = (x, y, s) => '<g><rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (30 * s) + '" fill="#6b4a2e"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (24 * s) + '" fill="#2f7a3a"/><circle cx="' + (x - 14 * s) + '" cy="' + (y + 4) + '" r="' + (14 * s) + '" fill="#3a8a44"/><circle cx="' + (x + 14 * s) + '" cy="' + (y + 2) + '" r="' + (15 * s) + '" fill="#3a8a44"/>' +
      [[-10, -10], [8, -16], [14, 4], [-4, 6], [-16, 0]].map(([dx, dy]) => '<circle cx="' + (x + dx * s) + '" cy="' + (y + dy * s) + '" r="' + (3 * s) + '" fill="#d6262c"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#h3)"/>' +
      '<circle cx="70" cy="48" r="20" fill="#fff1b8"/>' +
      '<path d="M0 120q100-50 200-24t200-14v60H0z" fill="#7aa35a"/><path d="M0 140q120-30 220-8t180-6v60H0z" fill="#5f8f45"/>' +
      /* cider house */
      '<rect x="250" y="96" width="110" height="80" fill="#a8322c"/><path d="M244 98l61-40 61 40z" fill="#5a3a2a"/>' +
      '<rect x="288" y="128" width="34" height="48" fill="#5a1d18"/><path d="M288 128l34 48M322 128l-34 48" stroke="#e8dcc0" stroke-width="2"/><rect x="288" y="128" width="34" height="48" fill="none" stroke="#e8dcc0" stroke-width="2"/>' +
      '<rect x="262" y="108" width="16" height="14" fill="#f4e6a8"/><rect x="332" y="108" width="16" height="14" fill="#f4e6a8"/>' +
      '<rect x="270" y="80" width="70" height="12" rx="2" fill="#efe2c2"/><text x="305" y="89.5" text-anchor="middle" ' + font + ' font-size="8" fill="#5a1d18">CIDER HOUSE</text>' +
      '<rect x="0" y="176" width="400" height="84" fill="#4f8a3a"/>' +
      tree(50, 150, 1) + tree(140, 160, 1.1) + tree(220, 196, 1.2) + tree(370, 200, 1) +
      '<circle class="ap" cx="134" cy="170" r="4" fill="#d6262c"/><circle class="ap ap2" cx="214" cy="196" r="4" fill="#d6262c"/>' +
      '<path d="M20 236h70l-6 18H26z" fill="#9a6a3a"/><g fill="#d6262c"><circle cx="38" cy="234" r="5"/><circle cx="50" cy="232" r="5"/><circle cx="62" cy="234" r="5"/><circle cx="74" cy="233" r="5"/></g>',
      sky("h3", "#8cc8f0", "#f8e8c0"));
  }

  /* 4. Broad St & Fleetwood Av, Mount Vernon: green signs, the wall tagged HEAVY D, and the Peaceful Journey arch on the 42 Broad plaza behind
     (pale veined marble and rusty weathering steel, a steel hex-grid crown, pointed arches) */
  function corner() {
    let hex = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
      const cx = 162 + c * 15 + (r % 2 ? 7.5 : 0), cy = 34 + r * 12;
      hex += '<path d="M' + cx + ' ' + (cy - 7) + 'l6 3.5v7l-6 3.5-6-3.5v-7z" fill="none" stroke="#d8dde2" stroke-width="1.4"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#h4)"/>' +
      /* 42 Broad tower behind */
      '<rect x="300" y="10" width="90" height="112" fill="#5a5f74"/>' + (() => { let w = ""; for (let y = 18; y < 116; y += 12) for (let x = 306; x < 386; x += 14) w += '<rect class="bl bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="8" height="7" fill="#ffd98a"/>'; return w; })() +
      /* the arch: marble leg, steel leg, hex crown, pointed opening */
      '<path d="M150 122V60q0-34 50-40q50 6 50 40v62h-20V66q-2-26-30-30q-28 4-30 30v56z" fill="#a2552c"/>' +
      '<path d="M150 122V60q0-34 50-40v16q-28 4-30 30v56z" fill="#e9e6df"/><path d="M156 70q8 10 4 30M162 50q10 6 6 20M158 108q6-8 10-2" stroke="#9aa3a0" stroke-width="1.4" fill="none"/>' +
      '<path d="M200 20q50 6 50 40" stroke="#c9d0d6" stroke-width="3" fill="none"/>' + hex +
      '<rect x="140" y="118" width="120" height="6" fill="#b5b0a6"/>' +
      /* wall */
      '<rect x="0" y="124" width="400" height="102" fill="#3e3550"/>' + (() => { let b = ""; for (let y = 132; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#332b44" stroke-width="1"/>'; return b; })() +
      tag("HEAVY D", 16, 196, 46, PURPLE, -6) + tag("THE BOYZ", 96, 222, 22, GOLD, -4) + tag("IN THE HOUSE", 20, 150, 18, CREAM, -3) + tag("BIG HEV", 236, 200, 22, TEAL, -7) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="352" y="96" width="5" height="132" fill="#3d4b3f"/>' +
      '<rect x="296" y="100" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="116" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Broad St</text>' +
      '<rect x="284" y="126" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="340" y="142" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Fleetwood Av</text>' +
      '<circle class="flk" cx="354" cy="96" r="4" fill="#fff6c2"/>',
      sky("h4", "#241a3d", "#e8846a"));
  }

  window.SCENES = { bus: bus, mandeville: mandeville, stage: stage, orchard: orchard, corner: corner };
})();
