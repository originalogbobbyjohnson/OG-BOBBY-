/* termanology scenes (Regions tab: Boston + New England; Lawrence, MA). CSS classes and ids prefixed tm- (the page's own anim-train is kept).
   1 Lawrence on the MBTA Commuter Rail (Haverhill Line), McGovern Transportation Center: high-level platform, the parking deck behind, a silver coach with the purple band sliding in.
   2 The Great Stone Dam on the Merrimack: the long curved granite dam, white water pouring over, gulls, the mill row on the far bank.
   3 Everett Mill on the North Canal, where the 1912 Bread and Roses strike started: the long red-brick mill with its stair tower, canal water rippling, a footbridge.
   4 Campagnone Common across from City Hall: the Robert Frost Fountain spraying, the war memorial, City Hall's white cupola behind the elms.
   5 Essex St and Lawrence St, downtown Lawrence: green signs, TERM tagged on the brick, the tall stone spire of St. Mary of the Assumption up on Haverhill St behind. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes tmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.tm-flk{animation:tmflick 2.2s infinite}.tm-flk2{animation-delay:.7s}' +
    '@keyframes tmpour{from{transform:translateY(-14px)}to{transform:translateY(0)}}.tm-pour{animation:tmpour .6s linear infinite}' +
    '@keyframes tmfoam{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:.95;transform:scale(1.08)}}.tm-foam{transform-box:fill-box;transform-origin:50% 50%;animation:tmfoam 1.2s ease-in-out infinite}.tm-foam2{animation-delay:-.6s}' +
    '@keyframes tmrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.tm-rip{animation:tmrip 3s ease-in-out infinite}.tm-rip2{animation-delay:-1.5s}' +
    '@keyframes tmgull{from{transform:translate(-50px,0)}to{transform:translate(450px,-24px)}}.tm-gull{animation:tmgull 12s linear infinite}.tm-gull2{animation-delay:-6s}' +
    '@keyframes tmspray{0%{transform:translateY(0);opacity:.95}100%{transform:translateY(-34px);opacity:0}}.tm-sp{animation:tmspray 1.3s ease-out infinite}.tm-sp2{animation-delay:-.45s}.tm-sp3{animation-delay:-.9s}' +
    '@keyframes tmcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.tm-car{animation:tmcar 8s linear infinite}.tm-car2{animation-delay:-4s}' +
    '@keyframes tmwalk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.tm-walk{animation:tmwalk 14s linear infinite}' +
    '@keyframes tmsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tm-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tmsway 3.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 14) + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '" opacity=".85"/>';
  const pill = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 6.4 + 14) + '" height="15" rx="7.5" fill="' + color + '"/><text x="' + (x + (label.length * 6.4 + 14) / 2) + '" y="' + (y + 11) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">' + label + '</text>';
  const RED = "#ff4d4d", GOLD = "#f4c542", BLUE = "#4aa3ff", CR = "#80276c", BRICK = "#9c4a32";

  /* a long brick mill: rows of tall windows, optional stair tower with pyramid roof */
  const mill = (x, y, w, h, c, tower) => {
    let win = "";
    for (let r = y + 8; r < y + h - 10; r += 16) for (let i = x + 6; i < x + w - 10; i += 14) if (!tower || i + 7 < x + tower - 2 || i > x + tower + 28) win += '<rect x="' + i + '" y="' + r + '" width="7" height="10" fill="#2a2420" opacity=".85"/>';
    let t = "";
    if (tower) t = '<rect x="' + (x + tower) + '" y="' + (y - 34) + '" width="26" height="' + (h + 34) + '" fill="' + c + '"/><path d="M' + (x + tower - 3) + ' ' + (y - 34) + 'l16-22 16 22z" fill="#4c5a5c"/>' +
      '<rect x="' + (x + tower + 9) + '" y="' + (y - 24) + '" width="8" height="12" rx="4" fill="#2a2420"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#6e3424"/>' + win + t;
  };

  /* 1. Lawrence station, Haverhill Line */
  function tmstation() {
    let win = "";
    for (let i = 0; i < 9; i++) win += '<rect x="' + (30 + i * 36) + '" y="132" width="24" height="16" rx="2" fill="#203040"/>';
    const train = '<g class="anim-train"><rect x="16" y="120" width="368" height="64" rx="6" fill="#c9cdd2" stroke="#5f666d" stroke-width="2"/>' +
      '<rect x="16" y="122" width="368" height="5" fill="' + CR + '"/>' + win +
      '<rect x="16" y="156" width="368" height="8" fill="' + CR + '"/>' +
      '<rect x="120" y="128" width="22" height="50" rx="2" fill="#aeb3b8" stroke="#5f666d"/><rect x="262" y="128" width="22" height="50" rx="2" fill="#aeb3b8" stroke="#5f666d"/>' +
      '<rect x="300" y="168" width="60" height="9" rx="2" fill="#111"/><text x="330" y="175.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" fill="#ffb347">HAVERHILL</text>' +
      '<circle cx="50" cy="188" r="6" fill="#222"/><circle cx="350" cy="188" r="6" fill="#222"/></g>';
    /* parking deck behind: concrete bands */
    let deck = "";
    for (let i = 0; i < 4; i++) deck += '<rect x="230" y="' + (40 + i * 18) + '" width="170" height="6" fill="#b9b6ae"/><rect x="230" y="' + (46 + i * 18) + '" width="170" height="12" fill="#3a3f48"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms1)"/>' + stars(10) +
      mill(0, 62, 200, 48, "#6c3326", 120) + deck +
      '<circle class="tm-flk" cx="250" cy="70" r="2.5" fill="#ffe7a8"/><circle class="tm-flk tm-flk2" cx="330" cy="88" r="2.5" fill="#ffe7a8"/>' +
      /* canopy over the high-level platform */
      '<rect x="0" y="104" width="400" height="8" fill="#56606a"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 2) + '" y="112" width="4" height="86" fill="#56606a"/>').join("") +
      train +
      '<rect x="0" y="196" width="400" height="6" fill="#e8c547"/><rect x="0" y="202" width="400" height="58" fill="#8b8982"/>' +
      '<rect x="100" y="212" width="200" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="235" text-anchor="middle" ' + F + ' font-weight="700" font-size="17" fill="#fff">Lawrence</text>' +
      pill(14, 222, CR, "CR") + pill(48, 222, CR, "HAVERHILL LINE") +
      '<text x="352" y="228" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff">McGOVERN</text><text x="352" y="238" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff">TRANSPORTATION</text><text x="352" y="248" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff">CENTER</text>',
      sky("tms1", "#0d1222", "#3a4566"));
  }

  /* 2. Great Stone Dam on the Merrimack */
  function tmdam() {
    let blocks = "";
    for (let i = 0; i < 20; i++) blocks += '<rect x="' + (i * 20) + '" y="' + (128 - Math.round(6 * Math.sin(i / 19 * Math.PI))) + '" width="19" height="10" fill="' + (i % 2 ? "#a9a49a" : "#b8b3a8") + '"/>';
    let fall = "";
    for (let i = 0; i < 40; i++) fall += '<path class="tm-pour" d="M' + (i * 10 + 3) + ' 140v' + (30 + (i % 3) * 4) + '" stroke="#e8f4fb" stroke-width="3" stroke-dasharray="8 6" opacity=".8"/>';
    let foam = "";
    for (let i = 0; i < 14; i++) foam += '<ellipse class="tm-foam ' + (i % 2 ? "tm-foam2" : "") + '" cx="' + (14 + i * 29) + '" cy="182" rx="18" ry="6" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms2)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff3c4"/>' +
      /* far bank: the mill row */
      mill(0, 70, 150, 40, BRICK, 60) + mill(170, 76, 120, 34, "#8a4030", 0) + mill(300, 66, 100, 44, BRICK, 40) +
      '<rect x="0" y="108" width="400" height="14" fill="#4f6d84"/>' +
      blocks + '<rect x="0" y="136" width="400" height="6" fill="#8c877d"/>' +
      '<rect x="0" y="140" width="400" height="44" fill="#9fc7dc"/>' + fall + foam +
      '<rect x="0" y="186" width="400" height="74" fill="#3f6e8a"/>' +
      '<path class="tm-rip" d="M10 206q20-6 40 0t40 0M150 222q20-6 40 0t40 0M280 204q20-6 40 0t40 0" stroke="#a9d3ea" stroke-width="2" fill="none"/>' +
      '<path class="tm-rip tm-rip2" d="M60 236q20-6 40 0t40 0M230 244q20-6 40 0t40 0" stroke="#a9d3ea" stroke-width="2" fill="none"/>' +
      '<path class="tm-gull" d="M0 50q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/><path class="tm-gull tm-gull2" d="M0 76q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/>' +
      '<text x="200" y="254" text-anchor="middle" ' + A + ' font-size="15" fill="#fff">GREAT STONE DAM · MERRIMACK RIVER</text>',
      sky("tms2", "#7fb3d9", "#f1dcb2"));
  }

  /* 3. Everett Mill on the North Canal */
  function tmmill() {
    return svg(
      '<rect width="400" height="260" fill="url(#tms3)"/>' +
      '<circle cx="60" cy="40" r="16" fill="#ffe7a0"/>' +
      mill(10, 64, 380, 96, BRICK, 248) +
      '<rect x="110" y="34" width="110" height="22" rx="2" fill="#1d1d1d" opacity=".85"/><text x="165" y="50" text-anchor="middle" ' + A + ' font-size="14" fill="' + GOLD + '">EVERETT MILL</text>' +
      '<rect x="0" y="160" width="400" height="12" fill="#a3a094"/>' +
      /* canal with granite walls */
      '<rect x="0" y="172" width="400" height="46" fill="#3d6a80"/>' +
      '<path class="tm-rip" d="M20 186q18-5 36 0t36 0M170 198q18-5 36 0t36 0M300 184q18-5 36 0t36 0" stroke="#9fcbe0" stroke-width="2" fill="none"/>' +
      '<path class="tm-rip tm-rip2" d="M90 208q18-5 36 0t36 0M250 210q18-5 36 0t36 0" stroke="#9fcbe0" stroke-width="2" fill="none"/>' +
      /* iron footbridge */
      '<path d="M120 176q60-26 120 0" stroke="#2e3a40" stroke-width="5" fill="none"/>' +
      [140, 160, 180, 200, 220].map(x => '<path d="M' + x + ' ' + (176 - 26 * (1 - Math.pow((x - 180) / 60, 2)) * 0.95) + 'v-14" stroke="#2e3a40" stroke-width="2"/>').join("") +
      '<path d="M120 162q60-26 120 0" stroke="#2e3a40" stroke-width="2" fill="none"/>' +
      '<g class="tm-walk"><circle cx="0" cy="146" r="4" fill="#2a1d18"/><rect x="-3" y="150" width="7" height="12" rx="2" fill="' + RED + '"/></g>' +
      '<rect x="0" y="218" width="400" height="42" fill="#7f7d73"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + A + ' font-size="15" fill="#fff">NORTH CANAL · BREAD AND ROSES STRIKE</text>',
      sky("tms3", "#9cc6e4", "#f4e3c0"));
  }

  /* 4. Campagnone Common, the Robert Frost Fountain, City Hall */
  function tmcommon() {
    let drops = "";
    for (let i = 0; i < 9; i++) drops += '<circle class="tm-sp ' + ["", "tm-sp2", "tm-sp3"][i % 3] + '" cx="' + (186 + i * 3.5) + '" cy="150" r="2.2" fill="#dff3ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms4)"/>' +
      /* City Hall across the street: brick front, white trim, white cupola */
      '<rect x="120" y="70" width="160" height="66" fill="#a2503a"/><path d="M114 70l86-24 86 24z" fill="#efe9dc"/>' +
      [136, 166, 222, 252].map(x => '<rect x="' + x + '" y="84" width="12" height="20" fill="#2b2420"/><rect x="' + x + '" y="112" width="12" height="18" fill="#2b2420"/>').join("") +
      '<rect x="190" y="104" width="20" height="32" fill="#efe9dc"/>' +
      '<rect x="186" y="22" width="28" height="26" fill="#efe9dc"/><path d="M184 22l16-14 16 14z" fill="#d8d2c4"/><circle cx="200" cy="35" r="7" fill="#2b2420"/><path d="M200 8v-4" stroke="' + GOLD + '" stroke-width="3"/>' +
      tree(40, 104, 30, "#3f7a3a") + tree(96, 112, 22, "#4f8a3a") + tree(318, 108, 26, "#3f7a3a") + tree(372, 102, 30, "#4f8a3a") +
      '<rect x="0" y="138" width="400" height="122" fill="#5f9446"/>' +
      '<path d="M0 214q200-26 400 0v46H0z" fill="#b9b2a2"/>' +
      /* fountain basin, pedestal, spray */
      '<ellipse cx="200" cy="196" rx="70" ry="14" fill="#8e8a80"/><ellipse cx="200" cy="192" rx="62" ry="10" fill="#6fb2d6"/>' +
      '<rect x="194" y="160" width="12" height="32" fill="#a39f94"/><ellipse cx="200" cy="160" rx="22" ry="6" fill="#a39f94"/>' +
      drops + '<path class="tm-sp tm-sp2" d="M200 158q-14-16-26 6M200 158q14-16 26 6" stroke="#dff3ff" stroke-width="2" fill="none"/>' +
      /* war memorial obelisk */
      '<rect x="318" y="150" width="14" height="44" fill="#c9c4b8"/><path d="M318 150l7-14 7 14z" fill="#c9c4b8"/><rect x="312" y="192" width="26" height="6" fill="#a8a397"/>' +
      '<rect x="28" y="176" width="40" height="5" fill="#6b4a2c"/><rect x="30" y="181" width="3" height="9" fill="#333"/><rect x="63" y="181" width="3" height="9" fill="#333"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + A + ' font-size="15" fill="#2b2420">CAMPAGNONE COMMON · FROST FOUNTAIN</text>',
      sky("tms4", "#86bde3", "#f4e6c4"));
  }

  /* St. Mary of the Assumption: gray stone Gothic church, one tall spire */
  const stmary = (x, base, s) =>
    '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')">' +
    '<rect x="-70" y="-70" width="140" height="70" fill="#5b5c62"/><path d="M-70 -70l70-30 70 30z" fill="#4c4d53"/>' +
    '<rect x="-16" y="-150" width="32" height="150" fill="#62636a"/><path d="M-18 -150l18-110 18 110z" fill="#55565c"/>' +
    '<path d="M0 -260v-14M-6 -268h12" stroke="#c9a24a" stroke-width="3"/>' +
    '<circle cx="0" cy="-118" r="10" fill="#c9a24a" opacity=".65" class="tm-flk"/>' +
    '<rect x="-50" y="-52" width="12" height="26" rx="6" fill="#ffd98a" opacity=".5"/><rect x="38" y="-52" width="12" height="26" rx="6" fill="#ffd98a" opacity=".5"/></g>';

  /* 5. Essex St and Lawrence St */
  function tmcorner() {
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="92" fill="url(#tms5)"/>' + stars(9) + stmary(190, 94, .36) +
      '<rect x="10" y="60" width="70" height="32" fill="#151a24"/><rect x="250" y="50" width="56" height="42" fill="#151a24"/>' +
      bricks(92, 212, "#5e2c20") +
      tag("TERM", 26, 172, 58, RED, -5) + tag("ST. DA SQUAD", 34, 124, 20, GOLD, -6) + tag("RESPECT MY WALK", 30, 204, 16, BLUE, -3) +
      '<rect x="0" y="212" width="400" height="48" fill="#8d8b85"/><rect x="0" y="210" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="tm-car tm-car2"><rect x="0" y="236" width="52" height="16" rx="5" fill="#2f5d8a"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="40" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="332" y="66" width="5" height="148" fill="#4a5058"/>' +
      '<rect x="282" y="60" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="335" y="75" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Essex St</text>' +
      '<rect x="282" y="84" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="335" y="99" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Lawrence St</text>' +
      '<circle class="tm-flk" cx="382" cy="24" r="4" fill="#ffe7a8"/>',
      sky("tms5", "#0b1622", "#2c3a5a"));
  }

  window.SCENES = { tmstation, tmdam, tmmill, tmcommon, tmcorner };
})();
