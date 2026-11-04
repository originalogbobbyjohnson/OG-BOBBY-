/* Slaine (South Boston, Boston + New England) opening scenes. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes fly{from{transform:translate(-90px,30px)}to{transform:translate(500px,-40px)}}.fly{animation:fly 9s linear infinite}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes roll{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:roll 7s linear infinite}.car2{animation-duration:10s;animation-delay:-4s}' +
    '@keyframes shim{0%,100%{opacity:.2}50%{opacity:.75}}.shim{animation:shim 2.4s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes drift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.gull{animation:drift 12s linear infinite}.gull2{animation-delay:-6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.bob{animation:bob 2.6s ease-in-out infinite}.bob2{animation-delay:1s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.hop{animation:hop .9s ease-in-out infinite}.hop2{animation-delay:.3s}.hop3{animation-delay:.6s}' +
    '@keyframes beam{0%,100%{opacity:.15}50%{opacity:.55}}.beam{animation:beam 3s ease-in-out infinite}.beam2{animation-delay:1.5s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.15}}.blk{animation:blink 1.4s steps(1) infinite}' +
    '@keyframes fall{from{transform:translateY(-20px)}to{transform:translateY(280px)}}.leaf{animation:fall 7s linear infinite}.leaf2{animation-delay:-3s}.leaf3{animation-delay:-5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const water = (y, c) => { let r = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c + '"/>'; for (let i = 0; i < 12; i++) r += '<path class="shim ' + (i % 2 ? "shim2" : "") + '" d="M' + ((i * 61) % 380) + ' ' + (y + 8 + (i * 17) % (250 - y)) + 'h' + (14 + i % 3 * 6) + '" stroke="#cfe6ff" stroke-width="1.4"/>'; return r; };
  const plane = (x, y, s) => '<g class="fly"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0l40-3q6 0 6 3t-6 3l-40-3z" fill="#e8ecf2"/><path d="M14 -1l-10-12h5l16 12zM14 1l-10 12h5l16-12zM2 -1l-4-6h3l5 6z" fill="#c9d1dc"/><circle cx="40" cy="0" r="1.2" fill="#ff3b30" class="blk"/></g></g>';
  const MBTA = { red: "#DA291C", green: "#00843D", blue: "#003DA5", orange: "#ED8B00" };
  /* MBTA-style line bullet: colored roundrect with the line name */
  const line = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 6.4 + 14) + '" height="14" rx="7" fill="' + color + '"/><text x="' + (x + (label.length * 6.4 + 14) / 2) + '" y="' + (y + 10.4) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">' + label + '</text>';
  /* a T-style subway car (light gray body, colored stripe) */
  const tcar = (x, y, w, stripe, dest) => {
    let win = ""; for (let i = x + 16; i < x + w - 30; i += 40) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="56" rx="7" fill="#d6dade" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="7" fill="' + stripe + '"/>' + win +
      '<rect x="' + (x + w - 24) + '" y="' + (y + 6) + '" width="18" height="24" rx="3" fill="#cfe6ff" opacity=".85"/>' +
      '<rect x="' + (x + w - 20 - dest.length * 4.2) + '" y="' + (y + 44) + '" width="' + (dest.length * 4.2 + 8) + '" height="8" rx="2" fill="#1d1d1d"/><text x="' + (x + w - 16 - dest.length * 2.1) + '" y="' + (y + 50.5) + '" text-anchor="middle" ' + F + ' font-size="6" font-weight="700" fill="#ffcf4a">' + dest + '</text>' +
      '<circle cx="' + (x + w - 6) + '" cy="' + (y + 44) + '" r="3" fill="#fff6c2"/>';
  };
  /* Boston skyline: Prudential (antenna), Hancock (slim glass slab), Custom House Tower (pyramid top), Zakim bridge towers; dx shifts it, s scales, base = ground y */
  const skyline = (dx, base, s, body, glass, lit) => {
    const g = '<g transform="translate(' + dx + ' ' + base + ') scale(' + s + ')">';
    let w = "";
    for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) w += '<rect x="' + (64 + j * 8) + '" y="' + (-118 + i * 16) + '" width="4" height="7" fill="' + lit + '" opacity=".6" class="' + (i % 2 ? "flk" : "") + '"/>';
    return g +
      '<rect x="0" y="-40" width="30" height="40" fill="' + body + '"/><rect x="34" y="-58" width="22" height="58" fill="' + body + '"/>' +
      /* Prudential */
      '<rect x="60" y="-126" width="32" height="126" fill="' + body + '"/><rect x="58" y="-130" width="36" height="6" fill="' + body + '"/><rect x="75" y="-150" width="2" height="22" fill="' + body + '"/><circle cx="76" cy="-151" r="2" fill="#ff3b30" class="blk"/>' + w +
      /* Hancock */
      '<path d="M104 0V-150l10-4v154z" fill="' + glass + '"/><path d="M114 -154l14 4V0h-14z" fill="' + glass + '" opacity=".75"/><path d="M106 -140h20M106 -110h20M106 -80h20M106 -50h20" stroke="#fff" stroke-width=".6" opacity=".35"/>' +
      '<rect x="134" y="-70" width="26" height="70" fill="' + body + '"/><rect x="164" y="-92" width="24" height="92" fill="' + body + '"/>' +
      /* Custom House Tower */
      '<rect x="196" y="-30" width="40" height="30" fill="' + body + '"/><rect x="204" y="-108" width="24" height="80" fill="' + body + '"/><rect x="202" y="-112" width="28" height="6" fill="' + body + '"/>' +
      '<circle cx="216" cy="-96" r="7" fill="' + lit + '" opacity=".85"/><path d="M216 -96v-5M216 -96l3 2" stroke="' + body + '" stroke-width="1.2"/>' +
      '<path d="M204 -112l12-22 12 22z" fill="' + body + '"/><rect x="215" y="-142" width="2" height="10" fill="' + body + '"/>' +
      '<rect x="242" y="-52" width="22" height="52" fill="' + body + '"/>' +
      /* Zakim towers + cables */
      '<path d="M288 0l8-86 8 86h-5l-3-40-3 40z" fill="' + body + '"/><path d="M340 0l8-74 8 74h-5l-3-34-3 34z" fill="' + body + '"/>' +
      '<path d="M296 -84L266 -6M296 -78L276 -6M296 -72L286 -6M296 -84L326 -6M296 -78L316 -6M348 -72L322 -6M348 -66L332 -6M348 -72L376 -6M348 -66L366 -6" stroke="' + body + '" stroke-width="1" opacity=".9"/>' +
      '<rect x="256" y="-8" width="130" height="4" fill="' + body + '"/>' +
      '</g>';
  };
  /* green street-sign pair on a pole */
  const signs = (x, a, b) =>
    '<rect x="' + (x + 50) + '" y="62" width="5" height="148" fill="#4a5058"/>' +
    '<rect x="' + x + '" y="58" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 52) + '" y="73" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + a + '</text>' +
    '<rect x="' + x + '" y="82" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 52) + '" y="97" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + b + '</text>';
  /* brick wall from y0 to y1 */
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  /* triple-decker house (Boston's classic 3-family) */
  const triple = (x, base, w, c, trim) => {
    let r = '<rect x="' + x + '" y="' + (base - 96) + '" width="' + w + '" height="96" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + (base - 96) + 'l' + (w / 2 + 4) + ' -18l' + (w / 2 + 4) + ' 18z" fill="#3b3f46"/>';
    for (let f = 0; f < 3; f++) { const y = base - 90 + f * 30;
      r += '<rect x="' + (x + 6) + '" y="' + y + '" width="12" height="16" fill="#ffd98a" opacity=".55" class="' + (f === 1 ? "flk" : "") + '"/><rect x="' + (x + w - 18) + '" y="' + y + '" width="12" height="16" fill="#ffd98a" opacity=".45"/>' +
        '<rect x="' + (x + w / 2 - 8) + '" y="' + y + '" width="16" height="16" fill="#2a3540"/><rect x="' + (x - 2) + '" y="' + (y + 22) + '" width="' + (w + 4) + '" height="3" fill="' + trim + '"/>'; }
    return r;
  };
  const GRN = "#2fbf71", GOLD = "#e8b84a", WHT = "#f4f1e8";

  /* 1. Broadway station on the Red Line, South Boston: underground platform, the train pulling in */
  function train() {
    let cols = "";
    for (let x = 30; x < 400; x += 86) cols += '<rect x="' + x + '" y="20" width="10" height="92" fill="#5a5f66"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2d33"/><rect x="0" y="20" width="400" height="92" fill="#8a3b2a"/>' + bricks(20, 112, "#a04a32") + cols +
      '<rect x="0" y="0" width="400" height="20" fill="#1d1f24"/><rect x="0" y="100" width="400" height="6" fill="' + MBTA.red + '"/>' +
      '<circle class="flk" cx="110" cy="11" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="290" cy="11" r="3" fill="#ffe7a8"/>' +
      '<rect x="118" y="32" width="164" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="59" text-anchor="middle" ' + F + ' font-weight="700" font-size="22" fill="#fff">Broadway</text>' +
      line(170, 78, MBTA.red, "RED LINE") +
      '<g class="anim-train">' + tcar(6, 116, 320, MBTA.red, "ALEWIFE") + '</g>' +
      '<rect x="0" y="172" width="400" height="6" fill="#e8c547"/><rect x="0" y="178" width="400" height="24" fill="#8d8b85"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#26231f"/><path d="M0 220h400M0 240h400" stroke="#777" stroke-width="3"/>' +
      tag("SOUTHIE", 16, 252, 24, GRN, -3) + tag("SLAINE", 290, 250, 28, WHT, -8),
      "");
  }

  /* 2. Castle Island: Fort Independence, the granite star fort on the harbor, a jet climbing out of Logan, gulls */
  function castle() {
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<circle cx="80" cy="56" r="20" fill="#fff1c9" opacity=".9"/>' +
      water(158, "#24506e") +
      '<path d="M60 160l30-46h220l30 46z" fill="#9c9488"/><path d="M90 114h220v-10H90z" fill="#b5ad9f"/>' +
      '<path d="M150 104v-18h100v18" fill="#a8a093"/><path d="M60 160l30-46M340 160l-30-46" stroke="#6e675d" stroke-width="2"/>' +
      '<rect x="190" y="126" width="20" height="34" fill="#3a332c"/><path d="M190 126q10-12 20 0" fill="#3a332c"/>' +
      '<rect x="206" y="56" width="2" height="32" fill="#444"/><rect class="flag" x="208" y="56" width="22" height="13" fill="#2f5a8a"/>' +
      '<path d="M60 160h280v6H60z" fill="#6e675d"/>' +
      plane(0, 40, 1.3) +
      '<path class="gull" d="M0 96q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/><path class="gull gull2" d="M0 120q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<text x="200" y="240" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '">CASTLE ISLAND · FORT INDEPENDENCE</text>',
      sky("s2", "#89b4d4", "#f1d7b0"));
  }

  /* 3. Dorchester Heights Monument: the white marble tower on Telegraph Hill over the Southie rowhouses */
  function heights() {
    let rows = "";
    for (let i = 0; i < 9; i++) { const x = i * 46 - 6, h = 46 + (i % 3) * 8;
      rows += '<rect x="' + x + '" y="' + (214 - h) + '" width="44" height="' + h + '" fill="' + ["#7a4a3a", "#5a6b80", "#8a6a4a"][i % 3] + '"/><rect x="' + (x + 8) + '" y="' + (222 - h) + '" width="10" height="12" fill="#ffd98a" opacity=".5" class="' + (i % 2 ? "flk" : "") + '"/><rect x="' + (x + 26) + '" y="' + (222 - h) + '" width="10" height="12" fill="#ffd98a" opacity=".45"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(12) +
      '<path d="M0 170q200-70 400 0v90H0z" fill="#2f4a32"/>' +
'<path class="beam" d="M200 172l-60-140h120z" fill="#fff6d0" opacity=".2"/>' +
      '<rect x="182" y="74" width="36" height="92" fill="#eeeae0" stroke="#c9c2b2" stroke-width="1.5"/>' +
      '<rect x="176" y="64" width="48" height="12" fill="#e2ddd0"/><rect x="186" y="44" width="28" height="22" fill="#eeeae0" stroke="#c9c2b2" stroke-width="1"/>' +
      '<path d="M190 44v-10h20v10" fill="#e2ddd0"/><path d="M196 34l4-12 4 12z" fill="#e2ddd0"/>' +
      '<rect x="196" y="48" width="8" height="14" rx="4" fill="#3a3f46"/>' +
      '<rect x="192" y="96" width="16" height="22" rx="8" fill="#3a3f46"/><rect x="190" y="140" width="20" height="26" fill="#3a3f46"/>' +
      '<rect x="168" y="164" width="64" height="8" fill="#c9c2b2"/>' +
      rows + '<rect x="0" y="214" width="400" height="46" fill="#3a3a40"/>' +
      '<g class="car"><rect x="0" y="228" width="50" height="16" rx="5" fill="#2fbf71"/><circle cx="12" cy="245" r="4" fill="#111"/><circle cx="38" cy="245" r="4" fill="#111"/></g>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '">DORCHESTER HEIGHTS · SOUTH BOSTON</text>',
      sky("s3", "#101a2c", "#3a4a6a"));
  }

  /* 4. St. Patrick's Day on West Broadway: the parade going by, flags waving, shamrock confetti */
  function parade() {
    let marchers = "";
    for (let i = 0; i < 9; i++) marchers += '<g class="hop ' + ["", "hop2", "hop3"][i % 3] + '"><rect x="' + (20 + i * 42) + '" y="176" width="16" height="36" rx="5" fill="' + (i % 2 ? "#1f6b3a" : "#2b2b33") + '"/><circle cx="' + (28 + i * 42) + '" cy="170" r="7" fill="#1d1d24"/><rect x="' + (36 + i * 42) + '" y="182" width="10" height="7" rx="3" fill="' + GOLD + '"/></g>';
    let conf = "";
    for (let i = 0; i < 16; i++) conf += '<path class="leaf ' + ["", "leaf2", "leaf3"][i % 3] + '" d="M' + ((i * 47) % 400) + ' 0m-3 0a3 3 0 1 1 3 -3a3 3 0 1 1 3 3a3 3 0 1 1 -3 3a3 3 0 1 1 -3 -3z" fill="' + (i % 2 ? GRN : "#7ee08a") + '"/>';
    let flags = "";
    for (let x = 40; x < 400; x += 80) flags += '<rect x="' + x + '" y="40" width="2" height="60" fill="#555"/><g class="flag"><rect x="' + (x + 2) + '" y="40" width="10" height="20" fill="#1f9a4a"/><rect x="' + (x + 12) + '" y="40" width="10" height="20" fill="#fff"/><rect x="' + (x + 22) + '" y="40" width="10" height="20" fill="#f08a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="0" y="100" width="400" height="66" fill="#6e4a3a"/>' + bricks(100, 166, "#7e5444") +
      '<rect x="20" y="112" width="40" height="30" fill="#ffd98a" opacity=".45"/><rect x="180" y="112" width="40" height="30" fill="#ffd98a" opacity=".45" class="flk"/><rect x="330" y="112" width="40" height="30" fill="#ffd98a" opacity=".45"/>' +
      flags + '<rect x="0" y="166" width="400" height="94" fill="#4a4a50"/><path d="M0 214h400" stroke="#e8c547" stroke-width="3" stroke-dasharray="20 14"/>' +
      marchers + conf +
      '<text x="200" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="#fff">ST. PATRICK\'S DAY · WEST BROADWAY</text>',
      sky("s4", "#7fb0d8", "#d8e8f0"));
  }

  /* 5. Broadway and Dot Ave: tags on the wall, downtown Boston right behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="56" fill="url(#s5)"/>' + IC_BOS + '<rect x="0" y="52" width="400" height="4" fill="#2a1a14"/>' +
      bricks(56, 210, "#4a2e26") +
      tag("SLAINE", 24, 158, 46, GRN, -5) + tag("LCN", 60, 200, 30, GOLD, -3) + tag("SOUTHIE", 30, 98, 24, WHT, -10) +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      signs(290, "W Broadway", "Dorchester Av") +
      '<circle class="flk" cx="380" cy="30" r="5" fill="#ffe7a8"/>',
      sky("s5", "#0b1622", "#24364a"));
  }

  /* downtown Boston over the Southie rooftops */
  const IC_BOS = skyline(70, 56, .36, "#0a0f17", "#1f3550", "#ffd98a");
  window.SCENES = { train, castle, heights, parade, corner };
})();
