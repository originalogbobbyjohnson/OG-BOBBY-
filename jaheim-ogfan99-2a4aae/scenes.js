/* Jaheim game (OG FAN 99 New Jersey: New Brunswick, the Hub City; raised in the 176 Memorial Parkway Homes).
   Rooms: New Brunswick station on NJ Transit's Northeast Corridor (high platforms on the embankment, the old brick station house),
   Memorial Parkway on the Raritan with the brick Memorial Homes towers, the State Theatre on Livingston Av, the Newark clothing shop
   where his demo tape found KayGee, and George St & Albany St with the stone-arch railroad bridge over the Raritan behind. 400 x 260 SVGs. Classes prefixed jh-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jhcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.jh-car{animation:jhcar 5s linear infinite}.jh-car2{animation-delay:-2.5s}' +
    '@keyframes jhcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.jh-carL{animation:jhcarL 6s linear infinite}.jh-carL2{animation-delay:-3s}' +
    '@keyframes jhblink{0%,100%{opacity:.3}50%{opacity:1}}.jh-bl{animation:jhblink 1.6s ease-in-out infinite}.jh-bl2{animation-delay:.5s}.jh-bl3{animation-delay:1.1s}' +
    '@keyframes jhrow{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.jh-row{animation:jhrow 9s ease-in-out infinite}' +
    '@keyframes jhoar{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.jh-oar{animation:jhoar 1.2s ease-in-out infinite}' +
    '@keyframes jhwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.jh-wave{animation:jhwave 2.5s linear infinite}' +
    '@keyframes jhchase{0%,100%{opacity:1}50%{opacity:.25}}.jh-bulb{animation:jhchase .8s steps(2) infinite}.jh-bulb2{animation-delay:-.4s}' +
    '@keyframes jhring{0%,100%{transform:rotate(0)}20%{transform:rotate(-12deg)}40%{transform:rotate(12deg)}60%{transform:rotate(-8deg)}80%{transform:rotate(8deg)}}.jh-ring{animation:jhring 1.4s ease-in-out infinite}' +
    '@keyframes jhreel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.jh-reel{animation:jhreel 2s linear infinite}' +
    '@keyframes jhtrainx{from{transform:translateX(-420px)}to{transform:translateX(420px)}}.jh-train{animation:jhtrainx 9s linear infinite}' +
    '@keyframes jhnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.jh-note{animation:jhnote 3s linear infinite}.jh-note2{animation-delay:-1s}.jh-note3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, label, color, r) => { r = r || 12; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.36) + '" text-anchor="middle" ' + font + ' font-size="' + r * 0.8 + '" fill="#fff">' + label + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="jh-bl jh-bl' + (i % 3 + 1) + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 41) % 54) + '" r="' + (i % 3 ? 0.9 : 1.3) + '" fill="#fff"/>'; return s; };
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#f2c14e", SCAR = "#cc0033", SKY = "#5ec4ff", CREAM = "#f4ead8", NJT = "#0039a6", NJO = "#f58025", NJP = "#a2238e";
  const coach = (x, y, w) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="44" rx="4" fill="#d5d9de" stroke="#6b7280" stroke-width="2"/>';
    for (let k = x + 12; k < x + w - 20; k += 26) s += '<rect x="' + k + '" y="' + (y + 8) + '" width="18" height="13" rx="2" fill="#a9d3ee"/>';
    return s + '<rect x="' + x + '" y="' + (y + 26) + '" width="' + w + '" height="4" fill="' + NJT + '"/><rect x="' + x + '" y="' + (y + 30) + '" width="' + w + '" height="3" fill="' + NJO + '"/><rect x="' + x + '" y="' + (y + 33) + '" width="' + w + '" height="3" fill="' + NJP + '"/>'; };
  const bricks = (x, y, w, h, c1, c2) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c1 + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c2 + '" stroke-width="1"/>'; return s; };

  /* 1. New Brunswick station: high platforms up on the Northeast Corridor embankment, the brick station house below, a train rolling in */
  function jhstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#jss)"/>' + stars(12) +
      /* downtown behind */
      [[0, 64, 50], [56, 46, 40], [104, 70, 52], [214, 40, 34], [256, 66, 60], [330, 54, 70]].map(([x, y, w], i) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (116 - y) + '" fill="#2b2540"/>' +
        '<rect class="jh-bl jh-bl' + (i % 3 + 1) + '" x="' + (x + 8) + '" y="' + (y + 10) + '" width="6" height="7" fill="#ffd98a"/><rect class="jh-bl jh-bl' + ((i + 1) % 3 + 1) + '" x="' + (x + 22) + '" y="' + (y + 24) + '" width="6" height="7" fill="#ffd98a"/>').join("") +
      /* station sign */
      '<rect x="36" y="14" width="262" height="34" rx="3" fill="#111"/><rect x="36" y="14" width="262" height="3" fill="#fff"/>' +
      '<text x="50" y="37" ' + font + ' font-size="16" fill="#fff">New Brunswick</text>' + bullet(272, 31, "NJT", NJT, 13) +
      /* catenary */
      '<path d="M0 58h400" stroke="#6b7280" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="52" width="6" height="66" fill="#4b5563"/>').join("") +
      '<g class="anim-train">' + coach(4, 70, 150) + coach(158, 70, 150) +
        '<path d="M308 70h18q14 0 16 14v30h-34z" fill="#d5d9de" stroke="#6b7280" stroke-width="2"/><rect x="314" y="78" width="20" height="14" rx="2" fill="#a9d3ee"/><circle cx="334" cy="104" r="3" fill="#fff6c2"/><path d="M318 70l8-12" stroke="#374151" stroke-width="2"/></g>' +
      '<rect x="0" y="114" width="400" height="8" fill="#e8c547"/><rect x="0" y="122" width="400" height="12" fill="#6b6862"/>' +
      person(70, 92, "#1f2937") + person(352, 94, "#111827") +
      /* embankment wall */
      '<rect x="0" y="134" width="400" height="40" fill="#7a6e62"/>' + (() => { let s = ""; for (let x = 0; x < 400; x += 20) s += '<rect x="' + x + '" y="134" width="19" height="9" fill="#857868"/><rect x="' + (x + 10) + '" y="144" width="19" height="9" fill="#706457"/>'; return s; })() +
      /* the brick station house below the tracks */
      bricks(120, 168, 170, 62, "#8e3b2a", "#7a3122") + '<path d="M110 170l20-22h150l20 22z" fill="#3b3a3f"/>' +
      [140, 176, 212, 248].map(x => '<path d="M' + x + ' 222v-30q8-10 16 0v30z" fill="#ffd98a" class="jh-bl jh-bl2"/>').join("") +
      '<rect x="120" y="182" width="170" height="3" fill="#c9b79a"/>' +
      /* street */
      '<rect x="0" y="230" width="400" height="30" fill="#45474c"/>' +
      '<g class="jh-car"><rect x="0" y="236" width="46" height="13" rx="4" fill="' + SCAR + '"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="36" cy="249" r="4" fill="#111"/></g>' +
      '<g class="jh-carL"><rect x="0" y="242" width="42" height="12" rx="4" fill="' + GOLD + '"/><circle cx="9" cy="254" r="4" fill="#111"/><circle cx="33" cy="254" r="4" fill="#111"/></g>',
      sky("jss", "#141433", "#5c3a5a"));
  }

  /* 2. Memorial Parkway on the Raritan: the brick Memorial Homes towers, Route 18 traffic, a crew boat rowing by */
  function jhparkway() {
    let ripples = "";
    for (let x = 0; x < 480; x += 40) ripples += '<path d="M' + x + ' 214q10-4 20 0t20 0" stroke="#9ccfe3" stroke-width="2" fill="none"/><path d="M' + (x + 16) + ' 238q10-4 20 0t20 0" stroke="#9ccfe3" stroke-width="2" fill="none"/>';
    const tower = (x, w, top) => { let s = bricks(x, top, w, 150 - top, "#9a4a32", "#86402b"); for (let yy = top + 10; yy < 142; yy += 14) for (let xx = x + 6; xx < x + w - 8; xx += 14) s += '<rect class="jh-bl jh-bl' + (((xx + yy) / 2 | 0) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="7" height="8" fill="#ffd98a"/>'; return s + '<rect x="' + x + '" y="' + (top - 4) + '" width="' + w + '" height="5" fill="#5a2a1c"/>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#jps)"/>' + stars(10) +
      '<circle cx="330" cy="40" r="16" fill="#fff3c4"/>' +
      tower(40, 64, 40) + tower(120, 56, 56) + tower(196, 64, 34) + tower(280, 50, 62) +
      txt("176", 72, 34, 12, GOLD) +
      /* parkway */
      '<rect x="0" y="150" width="400" height="34" fill="#3f4045"/><rect x="0" y="150" width="400" height="3" fill="#8a8c90"/><rect x="0" y="166" width="400" height="2" fill="#e8c547"/>' +
      '<g class="jh-car"><rect x="0" y="154" width="44" height="11" rx="4" fill="' + SKY + '"/></g><g class="jh-car jh-car2"><rect x="0" y="154" width="40" height="11" rx="4" fill="' + CREAM + '"/></g>' +
      '<g class="jh-carL"><rect x="0" y="170" width="46" height="11" rx="4" fill="' + SCAR + '"/></g>' +
      '<rect x="0" y="184" width="400" height="8" fill="#5f8a46"/>' +
      /* river */
      '<rect x="0" y="192" width="400" height="68" fill="#3c6f8f"/><g class="jh-wave">' + ripples + '</g>' +
      /* crew shell */
      '<g class="jh-row"><path d="M60 224h120l-8 6h-104z" fill="' + SCAR + '"/>' + [80, 104, 128, 152].map(x => '<g><circle cx="' + x + '" cy="214" r="4" fill="#1f2937"/><rect x="' + (x - 3) + '" y="217" width="6" height="7" fill="#1f2937"/><g class="jh-oar" style="transform-origin:' + x + 'px 222px"><path d="M' + x + ' 222l-16 12" stroke="' + CREAM + '" stroke-width="2"/></g></g>').join("") + '</g>' +
      /* sign */
      '<rect x="292" y="112" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("MEMORIAL PKWY", 342, 127, 10, "#fff") + '<rect x="340" y="134" width="4" height="16" fill="#555"/>',
      sky("jps", "#10122c", "#4a3a66"));
  }

  /* 3. The State Theatre on Livingston Av: the tall blade sign, a chasing-bulb marquee, music notes floating up */
  function jhstate() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 12) bulbs += '<circle class="jh-bulb' + (x % 24 ? " jh-bulb2" : "") + '" cx="' + x + '" cy="128" r="3" fill="#fff6c2"/><circle class="jh-bulb' + (x % 24 ? "" : " jh-bulb2") + '" cx="' + x + '" cy="168" r="3" fill="#fff6c2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jts)"/>' + stars(12) +
      /* building */
      '<rect x="60" y="40" width="280" height="190" fill="#c9b08a"/><rect x="60" y="40" width="280" height="8" fill="#a8906c"/>' +
      [90, 150, 230, 290].map(x => '<rect x="' + x + '" y="60" width="26" height="40" rx="3" fill="#3b2f3f"/><rect class="jh-bl jh-bl3" x="' + (x + 4) + '" y="64" width="18" height="32" rx="2" fill="#ffcf7a" opacity=".6"/>').join("") +
      /* blade sign */
      '<rect x="182" y="6" width="36" height="118" rx="4" fill="' + SCAR + '" stroke="#fff6c2" stroke-width="2"/>' +
      ["S", "T", "A", "T", "E"].map((c, i) => '<text class="jh-bulb' + (i % 2 ? " jh-bulb2" : "") + '" x="200" y="' + (30 + i * 21) + '" text-anchor="middle" ' + font + ' font-size="18" fill="#fff6c2">' + c + '</text>').join("") +
      /* marquee */
      '<rect x="88" y="124" width="224" height="48" fill="#1b1420" stroke="' + GOLD + '" stroke-width="3"/>' + bulbs +
      txt("TONIGHT", 200, 145, 13, GOLD) + txt("GHETTO LOVE", 200, 162, 14, "#fff") +
      /* doors */
      [110, 160, 210, 260].map(x => '<rect x="' + x + '" y="186" width="30" height="44" fill="#4a2a1a" stroke="' + GOLD + '" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#4b4d52"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      person(70, 200, "#1f2937") + person(350, 202, "#111827") +
      '<text class="jh-note" x="120" y="110" font-size="18" fill="' + GOLD + '">&#9834;</text><text class="jh-note jh-note2" x="280" y="110" font-size="18" fill="' + SKY + '">&#9835;</text><text class="jh-note jh-note3" x="330" y="120" font-size="16" fill="#fff">&#9834;</text>',
      sky("jts", "#130f2a", "#43305a"));
  }

  /* 4. The Newark clothing shop where he left his demo tape: sweatsuits and boots in the window, the cassette on the counter, the phone ringing (KayGee calling) */
  function jhdemo() {
    return svg(
      '<rect width="400" height="260" fill="url(#jds)"/>' +
      /* storefront */
      bricks(0, 20, 400, 210, "#6e3a2e", "#5c3026") +
      '<rect x="30" y="34" width="340" height="26" fill="#121212"/>' + txt("SWEATSUITS · BOOTS · FITTEDS", 200, 52, 13, GOLD) +
      '<rect x="30" y="70" width="340" height="150" fill="#1b2a3a" stroke="#c9c9c9" stroke-width="4"/><rect x="34" y="74" width="332" height="142" fill="#22374c"/>' +
      /* racks */
      '<path d="M50 96h150" stroke="#bbb" stroke-width="3"/>' +
      [[60, SCAR], [94, GOLD], [128, SKY], [162, "#2f2f35"]].map(([x, c]) => '<path d="M' + x + ' 96l-10 12v40h28v-40l-10-12z" fill="' + c + '"/><rect x="' + (x - 10) + '" y="150" width="28" height="36" fill="' + c + '" opacity=".85"/>').join("") +
      /* boots */
      [64, 100, 136].map(x => '<path d="M' + x + ' 206v-14h14v8h10v6z" fill="#d79b3e" stroke="#7a521c" stroke-width="1.5"/>').join("") +
      /* counter + cassette + boombox */
      '<rect x="220" y="160" width="140" height="56" fill="#3a2a22"/><rect x="220" y="156" width="140" height="6" fill="#5a4636"/>' +
      '<rect x="236" y="132" width="54" height="26" rx="3" fill="#111" stroke="#ddd" stroke-width="1.5"/><rect x="242" y="136" width="42" height="9" fill="' + CREAM + '"/>' + txt("DEMO", 263, 144, 7, "#111") +
      '<g class="jh-reel" style="transform-origin:252px 151px"><circle cx="252" cy="151" r="4" fill="none" stroke="#ddd" stroke-width="1.5"/><path d="M252 147v8M248 151h8" stroke="#ddd"/></g>' +
      '<g class="jh-reel" style="transform-origin:274px 151px"><circle cx="274" cy="151" r="4" fill="none" stroke="#ddd" stroke-width="1.5"/><path d="M274 147v8M270 151h8" stroke="#ddd"/></g>' +
      /* ringing phone */
      '<g class="jh-ring" style="transform-origin:326px 150px"><rect x="306" y="138" width="40" height="18" rx="4" fill="' + SCAR + '"/><path d="M304 138q22-14 44 0" stroke="' + SCAR + '" stroke-width="7" fill="none" stroke-linecap="round"/></g>' +
      '<path class="jh-bl" d="M352 128l8-6M354 136l10-2M300 128l-8-6" stroke="#fff6c2" stroke-width="2"/>' +
      /* sidewalk */
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<rect class="jh-bl" x="324" y="80" width="34" height="16" rx="3" fill="#ff4f7b"/>' + txt("OPEN", 341, 92, 9, "#fff"),
      sky("jds", "#1a1426", "#3a2a40"));
  }

  /* 5. George St & Albany St: green signs, JAHEIM tagged on the wall, the stone-arch railroad bridge over the Raritan behind with a train crossing */
  function jhcorner() {
    let arches = "";
    for (let x = 10; x < 400; x += 56) arches += '<path d="M' + x + ' 128q24-34 48 0" fill="#1c2a44"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs)"/>' + stars(14) +
      '<rect x="0" y="100" width="400" height="34" fill="#a99f8e"/>' + arches + '<rect x="0" y="96" width="400" height="6" fill="#8a8072"/>' +
      '<g class="jh-train">' + coach(0, 52, 180) + coach(184, 52, 180) + '</g>' +
      [30, 120, 210, 300].map((x, i) => '<rect x="' + x + '" y="86" width="3" height="10" fill="#555"/><circle class="jh-bl jh-bl' + (i % 3 + 1) + '" cx="' + (x + 1.5) + '" cy="85" r="3" fill="#fff6c2"/>').join("") +
      /* wall */
      bricks(0, 134, 400, 92, "#3a3440", "#2f2a35") +
      tag("JAHEIM", 14, 186, 40, GOLD, -5) + tag("HUB CITY", 40, 218, 26, SCAR, -3) + tag("DIVINE MILL", 214, 214, 18, SKY, -6) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="jh-carL"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + SKY + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="352" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="294" y="66" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("George St", 345, 82, 12, "#fff") +
      '<rect x="294" y="92" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Albany St", 345, 108, 12, "#fff") +
      '<circle class="jh-bl" cx="354" cy="60" r="4" fill="#fff6c2"/>',
      sky("jcs", "#0c0d24", "#40294f"));
  }

  window.SCENES = { jhstation: jhstation, jhparkway: jhparkway, jhstate: jhstate, jhdemo: jhdemo, jhcorner: jhcorner };
})();
