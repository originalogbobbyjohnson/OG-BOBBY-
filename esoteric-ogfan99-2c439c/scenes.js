/* Esoteric (East Boston, Boston + New England) opening scenes. Each one is a small animated SVG, 400 x 260. */
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
  const CY = "#36c5f0", MAG = "#e8336d", YEL = "#ffd23f";

  /* 1. Maverick station on the Blue Line: underground, white tile walls, the train pulling in */
  function train() {
    let tiles = "";
    for (let y = 20; y < 112; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#e9ecef"/>';
    return svg(
      '<rect width="400" height="260" fill="#c9ced3"/>' + tiles +
      '<rect x="0" y="0" width="400" height="20" fill="#2a2f36"/><rect x="0" y="62" width="400" height="6" fill="' + MBTA.blue + '"/>' +
      '<circle class="flk" cx="90" cy="12" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="310" cy="12" r="3" fill="#ffe7a8"/>' +
      '<rect x="118" y="30" width="164" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="57" text-anchor="middle" ' + F + ' font-weight="700" font-size="22" fill="#fff">Maverick</text>' +
      line(166, 74, MBTA.blue, "BLUE LINE") + '<rect x="0" y="112" width="400" height="62" fill="#1d1f24"/>' +
      '<g class="anim-train">' + tcar(6, 116, 320, MBTA.blue, "WONDERLAND") + '</g>' +
      '<rect x="0" y="172" width="400" height="6" fill="#e8c547"/><rect x="0" y="178" width="400" height="24" fill="#8d8b85"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#26231f"/><path d="M0 220h400M0 240h400" stroke="#777" stroke-width="3"/>' +
      tag("CZARFACE", 16, 252, 24, YEL, -3) + tag("ESO", 320, 250, 30, CY, -8), "");
  }

  /* 2. Logan Airport next door: a jet coming in low over East Boston triple-deckers, runway lights blinking */
  function logan() {
    let lights = "";
    for (let x = 10; x < 400; x += 26) lights += '<circle class="blk" cx="' + x + '" cy="214" r="2.2" fill="' + (x % 52 ? "#ffd23f" : "#36c5f0") + '" style="animation-delay:' + (x % 7) / 5 + 's"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#e2)"/>' + stars(10) +
      '<rect x="300" y="96" width="12" height="70" fill="#5a6470"/><rect x="290" y="84" width="32" height="16" rx="3" fill="#3a4450"/><rect x="292" y="86" width="28" height="10" fill="#36c5f0" opacity=".6" class="beam"/>' +
      triple(20, 190, 62, "#8a6a5a", "#e9e5da") + triple(92, 190, 62, "#5a6b80", "#e9e5da") + triple(164, 190, 62, "#7a5a3a", "#e9e5da") +
      '<rect x="0" y="190" width="400" height="70" fill="#2b2b30"/><rect x="0" y="210" width="400" height="8" fill="#3a3a40"/>' + lights +
      plane(0, 50, 1.6) +
      '<text x="200" y="248" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + YEL + '">EAST BOSTON · RUNWAY NEXT DOOR</text>',
      sky("e2", "#0d1b2e", "#3a4f75"));
  }

  /* 3. Piers Park, East Boston: the harbor walk, a water taxi crossing, downtown skyline across the water */
  function piers() {
    let rail = "";
    for (let x = 0; x < 400; x += 14) rail += '<rect x="' + x + '" y="196" width="2" height="18" fill="#1d2a36"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#e3)"/>' +
      '<circle cx="320" cy="50" r="20" fill="#ffb26b" opacity=".9"/>' +
      skyline(30, 150, .75, "#24324a", "#3c6a8e", "#ffd98a") +
      water(150, "#1d4e6e") +
      '<g class="car car2"><g class="bob"><path d="M0 176h56l-8 10H6z" fill="' + YEL + '"/><rect x="12" y="166" width="28" height="10" rx="2" fill="#f4f1e8"/><rect x="16" y="168" width="20" height="5" fill="#36c5f0"/></g></g>' +
      '<rect x="0" y="194" width="400" height="4" fill="#1d2a36"/>' + rail + '<rect x="0" y="212" width="400" height="48" fill="#6a6a62"/>' +
      '<path d="M40 212v-60" stroke="#3a3f46" stroke-width="3"/><path d="M40 152h24" stroke="#3a3f46" stroke-width="3"/><circle cx="64" cy="156" r="4" fill="#ffe7a8" class="flk"/>' +
      '<path class="gull" d="M0 80q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/><path class="gull gull2" d="M0 100q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="#fff">PIERS PARK · EAST BOSTON</text>',
      sky("e3", "#f08a5d", "#5a4f8a"));
  }

  /* 4. The comic-book world of CZARFACE: crates of vinyl, 7L's turntables, comic panels on the wall going KA-BANG */
  function comics() {
    const panel = (x, y, w, h, bg, word, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + bg + '" stroke="#111" stroke-width="3"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 8) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + c + '" stroke="#111" stroke-width="2" paint-order="stroke">' + word + '</text>';
    let dots = "";
    for (let x = 230; x < 380; x += 8) for (let y = 24; y < 92; y += 8) dots += '<circle cx="' + x + '" cy="' + y + '" r="1.6" fill="#e8336d" opacity=".45"/>';
    let crate = "";
    for (let i = 0; i < 9; i++) crate += '<rect x="' + (28 + i * 7) + '" y="172" width="5" height="34" fill="' + ["#e8336d", "#36c5f0", "#ffd23f", "#f4f1e8"][i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#241a2e"/>' +
      panel(20, 16, 180, 80, "#ffd23f", "KA-BANG!", "#e8336d") + '<rect x="222" y="16" width="160" height="80" fill="#36c5f0" stroke="#111" stroke-width="3"/>' + dots +
      '<text x="302" y="64" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="#fff" stroke="#111" stroke-width="2" paint-order="stroke">TO BE CONTINUED</text>' +
      panel(20, 104, 110, 52, "#e8336d", "BOOM", "#ffd23f") + panel(140, 104, 110, 52, "#f4f1e8", "POW", "#36c5f0") + panel(260, 104, 122, 52, "#ffd23f", "ZAP!", "#e8336d") +
      '<rect x="0" y="160" width="400" height="100" fill="#3a2a1e"/><rect x="0" y="160" width="400" height="6" fill="#5a3f28"/>' +
      '<rect x="20" y="168" width="80" height="44" fill="#6b4a2a" stroke="#3a2618" stroke-width="2"/>' + crate +
      /* turntables */
      '<rect x="150" y="178" width="230" height="56" rx="6" fill="#1d1d24" stroke="#555" stroke-width="2"/>' +
      '<g transform="translate(206 206)"><g class="spin"><circle r="22" fill="#111"/><circle r="8" fill="#ffd23f"/><path d="M0 -20v6" stroke="#444" stroke-width="2"/></g></g>' +
      '<g transform="translate(324 206)"><g class="spin"><circle r="22" fill="#111"/><circle r="8" fill="#e8336d"/><path d="M0 -20v6" stroke="#444" stroke-width="2"/></g></g>' +
      '<rect x="258" y="190" width="16" height="32" rx="2" fill="#333"/><rect x="262" y="198" width="8" height="4" fill="#36c5f0" class="flk"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="#ffd23f">7L ON THE CUTS · ESO ON THE MIC</text>',
      "<style>@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite}</style>");
  }

  /* 5. Maverick Square: Meridian St and Sumner St, tags on the wall, downtown Boston across the harbor */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="56" fill="url(#e5)"/>' + IC_BOS + '<rect x="0" y="52" width="400" height="4" fill="#2a1a14"/>' +
      bricks(56, 210, "#4e2a2a") +
      tag("ESOTERIC", 18, 158, 42, CY, -5) + tag("CZARFACE", 50, 198, 24, YEL, -3) + tag("7L", 30, 98, 30, MAG, -10) +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      signs(290, "Meridian St", "Sumner St") +
      '<circle class="flk" cx="380" cy="30" r="5" fill="#ffe7a8"/>',
      sky("e5", "#0b1622", "#24364a"));
  }

  /* downtown Boston seen across the harbor from Eastie */
  const IC_BOS = skyline(40, 56, .36, "#0a0f17", "#1f3550", "#ffd98a");
  window.SCENES = { train, logan, piers, comics, corner };
})();
