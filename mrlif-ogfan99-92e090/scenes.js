/* Mr. Lif (Brighton, Boston + New England) opening scenes. Each one is a small animated SVG, 400 x 260. */
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
  const RED = "#ff5a3c", GOLD = "#f2c14e", SKY = "#4fc3f7";

  /* 1. Warren Street on the Green Line B branch: street-level stop in the middle of Commonwealth Ave, the trolley sliding in */
  function train() {
    let poles = "";
    for (let x = 20; x < 400; x += 90) poles += '<rect x="' + x + '" y="28" width="3" height="96" fill="#3a3f46"/><path d="M' + x + ' 34h40" stroke="#3a3f46" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l1)"/>' + stars(16) +
      '<circle cx="330" cy="40" r="14" fill="#fff4dc" opacity=".85"/>' +
      skyline(10, 128, .7, "#1c2533", "#2c4a66", "#ffd98a") +
      '<path d="M0 36h400" stroke="#555" stroke-width="1.2"/>' + poles +
      /* stop sign */
      '<rect x="112" y="54" width="176" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="79" text-anchor="middle" ' + F + ' font-weight="700" font-size="20" fill="#fff">Warren Street</text>' +
      line(160, 98, MBTA.green, "GREEN LINE B") +
      '<g class="anim-train">' + tcar(6, 128, 300, MBTA.green, "BOSTON COLLEGE") + '<path d="M150 128l20-14 20 14" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="184" width="400" height="6" fill="#e8c547"/><rect x="0" y="190" width="400" height="22" fill="#8d8b85"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#2b2b30"/><path d="M0 228h400M0 246h400" stroke="#777" stroke-width="3"/>' +
      '<g class="car"><rect x="0" y="232" width="46" height="16" rx="5" fill="#c64a3a"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="36" cy="249" r="4" fill="#111"/></g>' +
      tag("LIF", 330, 250, 30, RED, -8) + tag("PERCEPTIONISTS", 14, 254, 18, GOLD, -3),
      sky("l1", "#0b1420", "#2a3e58"));
  }

  /* 2. Chestnut Hill Reservoir, Brighton: the stone gatehouse on the water, the path around the shore, leaves falling */
  function reservoir() {
    let trees = "";
    for (let x = -10; x < 420; x += 34) trees += '<circle cx="' + x + '" cy="' + (118 + (x % 3) * 4) + '" r="' + (18 + (x % 4) * 2) + '" fill="' + (x % 68 ? "#c8662a" : "#d9a03a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l2)"/>' +
      '<circle cx="80" cy="54" r="22" fill="#ffd27a" opacity=".85"/>' + trees +
      '<rect x="0" y="128" width="400" height="10" fill="#4f6b3a"/>' + water(138, "#2c5d7c") +
      /* gatehouse: granite, arched windows, hip roof */
      '<rect x="230" y="78" width="96" height="64" fill="#b8ab96"/><rect x="226" y="74" width="104" height="8" fill="#8c7f6a"/>' +
      '<path d="M222 76l56-26 56 26z" fill="#6b4a3a"/>' +
      '<path d="M246 140v-30q12-14 24 0v30z" fill="#2a2a30"/><path d="M286 140v-30q12-14 24 0v30z" fill="#2a2a30"/>' +
      '<rect x="230" y="138" width="96" height="6" fill="#8c7f6a"/>' +
      '<path d="M230 146h96" stroke="#cfe6ff" stroke-width="1" opacity=".4" class="shim"/>' +
      '<path class="gull" d="M0 60q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<rect class="leaf" x="120" y="0" width="5" height="4" fill="#d9a03a"/><rect class="leaf leaf2" x="40" y="0" width="5" height="4" fill="#c8662a"/><rect class="leaf leaf3" x="360" y="0" width="5" height="4" fill="#e0b84a"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '">CHESTNUT HILL RESERVOIR · BRIGHTON</text>',
      sky("l2", "#7aa7c7", "#e9c99a"));
  }

  /* 3. Central Square, Cambridge: the brick club where he recorded Live at the Middle East, marquee lit, crowd outside */
  function club() {
    let crowd = "";
    for (let i = 0; i < 14; i++) crowd += '<g class="hop ' + ["", "hop2", "hop3"][i % 3] + '"><rect x="' + (12 + i * 28) + '" y="206" width="16" height="34" rx="7" fill="' + ["#2a2f3a", "#3b2a2a", "#22303a"][i % 3] + '"/><circle cx="' + (20 + i * 28) + '" cy="200" r="7" fill="' + ["#2a2f3a", "#3b2a2a", "#22303a"][i % 3] + '"/></g>';
    let bulbs = "";
    for (let x = 70; x <= 330; x += 13) bulbs += '<circle class="flk ' + (x % 26 ? "flk2" : "") + '" cx="' + x + '" cy="106" r="2.4" fill="#ffe7a8"/><circle class="flk ' + (x % 26 ? "" : "flk2") + '" cx="' + x + '" cy="148" r="2.4" fill="#ffe7a8"/>';
    return svg(
      '<rect width="400" height="260" fill="#120c12"/>' + bricks(0, 200, "#5a2a22") +
      '<rect x="40" y="20" width="60" height="44" fill="#2a3540"/><rect x="170" y="20" width="60" height="44" fill="#ffd98a" opacity=".5" class="flk"/><rect x="300" y="20" width="60" height="44" fill="#2a3540"/>' +
      '<rect x="62" y="100" width="276" height="54" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="124" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '">LIVE AT THE MIDDLE EAST</text>' +
      '<text x="200" y="143" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">TONIGHT · THE PERCEPTIONISTS</text>' +
      '<rect x="150" y="158" width="100" height="42" fill="#1d1d24"/><rect x="154" y="162" width="92" height="38" fill="#ff5a3c" opacity=".25" class="beam"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a40"/>' + crowd +
      '<rect x="300" y="166" width="88" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="344" y="179" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">Central Sq</text>',
      "");
  }

  /* 4. Colgate University, upstate NY (from New Man Theme): white chapel steeple on the hill, snow drifting down */
  function colgate() {
    let snow = "";
    for (let i = 0; i < 18; i++) snow += '<circle class="leaf ' + ["", "leaf2", "leaf3"][i % 3] + '" cx="' + ((i * 53) % 400) + '" cy="0" r="1.8" fill="#fff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l4)"/>' +
      '<path d="M0 170q100-40 200-30t200 10v110H0z" fill="#e9eef3"/>' +
      '<path d="M0 200q120-20 240-10t160 0v70H0z" fill="#f7f9fb"/>' +
      /* chapel */
      '<rect x="150" y="104" width="100" height="62" fill="#f4f1e8" stroke="#c9c2b2" stroke-width="1.5"/>' +
      '<path d="M144 106l56-24 56 24z" fill="#f4f1e8" stroke="#c9c2b2" stroke-width="1.5"/>' +
      '<rect x="186" y="50" width="28" height="40" fill="#f4f1e8" stroke="#c9c2b2" stroke-width="1.5"/><rect x="190" y="30" width="20" height="22" fill="#f4f1e8" stroke="#c9c2b2" stroke-width="1.5"/>' +
      '<path d="M190 30l10-24 10 24z" fill="#e6e1d4"/><circle cx="200" cy="66" r="6" fill="#2a2f3a"/>' +
      '<rect x="160" y="118" width="12" height="30" rx="6" fill="#5a6b80"/><rect x="228" y="118" width="12" height="30" rx="6" fill="#5a6b80"/><rect x="190" y="134" width="20" height="32" fill="#6b4a3a"/>' +
      '<rect x="166" y="166" width="68" height="6" fill="#c9c2b2"/>' +
      '<path d="M60 186l10-40 10 40zM320 180l12-46 12 46zM348 190l9-34 9 34z" fill="#2f5a4a"/>' + snow +
      '<text x="200" y="240" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="#7a2a22">"ON TO COLGATE" · NEW MAN THEME</text>',
      sky("l4", "#9fb4c8", "#dfe7ee"));
  }

  /* 5. Brighton Center: Washington St and Market St, his tags on the brick, the Boston skyline behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="56" fill="url(#l5)"/>' + IC_BOS + '<rect x="0" y="52" width="400" height="4" fill="#2a1a14"/>' +
      bricks(56, 210, "#5a2e22") +
      tag("MR. LIF", 20, 158, 42, RED, -5) + tag("I PHANTOM", 40, 196, 22, SKY, -3) + tag("PERCEPTIONISTS", 24, 96, 18, GOLD, -8) +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      signs(290, "Washington St", "Market St") +
      '<circle class="flk" cx="380" cy="30" r="5" fill="#ffe7a8"/>',
      sky("l5", "#0b1622", "#24364a"));
  }

  /* Boston skyline over the rooftops (Prudential, Hancock, Custom House, Zakim) */
  const IC_BOS = skyline(14, 56, .36, "#0a0f17", "#1f3550", "#ffd98a");
  window.SCENES = { train, reservoir, club, colgate, corner };
})();
