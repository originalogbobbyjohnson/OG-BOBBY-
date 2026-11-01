/* East Harlem (El Barrio) opening scenes for the Princess Nokia game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes mnr{from{transform:translateX(-260px)}to{transform:translateX(460px)}}' +
    '.mnr{animation:mnr 7s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}.fl2{animation-delay:.5s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.sun{transform-box:fill-box;transform-origin:50% 50%;animation:spin 24s linear infinite}' +
    '@keyframes fly{0%{transform:translate(0,0)}25%{transform:translate(60px,-20px)}50%{transform:translate(120px,4px)}75%{transform:translate(60px,22px)}100%{transform:translate(0,0)}}' +
    '.fly{animation:fly 9s ease-in-out infinite}' +
    '@keyframes flap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.3)}}' +
    '.flap{transform-box:fill-box;transform-origin:50% 50%;animation:flap .4s linear infinite}' +
    '@keyframes mist{0%{opacity:0;transform:translate(0,0)}20%{opacity:.8}100%{opacity:0;transform:translate(26px,-18px) scale(2)}}' +
    '.mist{transform-box:fill-box;animation:mist 1.8s ease-out infinite}.ms2{animation-delay:.6s}.ms3{animation-delay:1.2s}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{transform-box:fill-box;transform-origin:50% 0;animation:drip 3s ease-out infinite}' +
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
  /* Puerto Rican flag: five red/white stripes, blue triangle, white star */
  const prFlag = (x, y, w, cls) => {
    const h = w * 2 / 3, sh = h / 5; let s = '<g class="flag' + (cls || "") + '">';
    for (let i = 0; i < 5; i++) s += '<rect x="' + x + '" y="' + (y + i * sh) + '" width="' + w + '" height="' + sh + '" fill="' + (i % 2 ? "#fff" : "#ed0000") + '"/>';
    s += '<path d="M' + x + ' ' + y + 'l' + (w * 0.45) + ' ' + (h / 2) + 'l-' + (w * 0.45) + ' ' + (h / 2) + 'z" fill="#0050f0"/>';
    s += '<circle cx="' + (x + w * 0.15) + '" cy="' + (y + h / 2) + '" r="' + (h * 0.09) + '" fill="#fff"/></g>';
    return s;
  };
  const GOLD = "#f2c14e", PINK = "#ff5fa2", SKY = "#8be0ff", GREEN = "#00933c";

  /* 1. The 6 pulling into 116 St on Lexington Av, underground: white tile, mosaic band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d4cfc2" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d4cfc2" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 18) band += '<rect x="' + x + '" y="30" width="9" height="9" fill="#2f6b3a"/><rect x="' + (x + 9) + '" y="30" width="9" height="9" fill="#d9b45a"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efeadf"/>' + tiles + band +
      '<rect x="80" y="54" width="240" height="36" rx="4" fill="#111"/>' +
      '<rect x="80" y="54" width="240" height="4" fill="#fff"/>' +
      '<text x="94" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">116 St</text>' +
      bullet(296, 73, "6", GREEN) +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
        bullet(296, 142, "6", GREEN) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("NOKIA", 24, 242, 32, GOLD, -5) + tag("EL BARRIO", 240, 240, 26, PINK, -7));
  }

  /* 2. La Marqueta under the Park Avenue viaduct at 116th: the stone-and-steel railroad bridge overhead, a commuter train rolling across,
        the market stalls and Puerto Rican flags underneath */
  function marqueta() {
    let arches = "";
    for (let x = 0; x < 400; x += 80) arches += '<rect x="' + x + '" y="96" width="16" height="104" fill="#7a6a5a"/><path d="M' + x + ' 96h80" stroke="#4a4a52" stroke-width="2"/>';
    let rivets = "";
    for (let x = 4; x < 400; x += 10) rivets += '<circle cx="' + x + '" cy="86" r="1.2" fill="#2f2f36"/>';
    let stalls = "";
    [[24, "#e94b3c"], [104, "#f2c14e"], [184, "#3aa36b"], [264, "#ff5fa2"], [344, "#4a8ad8"]].forEach(([x, c], i) => {
      stalls += '<path d="M' + (x - 4) + ' 150h60l-6 14h-48z" fill="' + c + '"/>' +
        '<path d="M' + x + ' 164h52" stroke="#fff" stroke-width="2" stroke-dasharray="6 6" opacity=".6"/>' +
        '<rect x="' + x + '" y="164" width="52" height="36" fill="#3a2a22"/>' +
        '<circle cx="' + (x + 10) + '" cy="178" r="5" fill="#f2a33a"/><circle cx="' + (x + 22) + '" cy="178" r="5" fill="#e94b3c"/><circle cx="' + (x + 34) + '" cy="178" r="5" fill="#9bd06a"/><circle cx="' + (x + 44) + '" cy="180" r="4" fill="#f2d14e"/>' +
        '<rect x="' + x + '" y="186" width="52" height="14" fill="#5a3a2a"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* tenements behind */
      '<rect x="0" y="20" width="400" height="60" fill="#5a3b33"/>' +
      (function () { let s = ""; for (let x = 8; x < 400; x += 22) for (let y = 28; y < 70; y += 16) s += '<rect x="' + x + '" y="' + y + '" width="10" height="10" fill="' + ((x + y) % 3 ? "#2a1e1e" : "#ffd98a") + '"/>'; return s; })() +
      /* train on the viaduct */
      '<g class="mnr"><rect x="0" y="58" width="240" height="22" rx="4" fill="#d9dde2" stroke="#6b7280" stroke-width="1.5"/>' +
      '<rect x="0" y="72" width="240" height="3" fill="#1f4fa8"/>' +
      (function () { let s = ""; for (let x = 8; x < 236; x += 18) s += '<rect x="' + x + '" y="62" width="11" height="7" rx="1" fill="#2a3442"/>'; return s; })() + '</g>' +
      /* steel deck */
      '<rect x="0" y="80" width="400" height="16" fill="#3c3c44"/>' + rivets + arches +
      '<rect x="0" y="96" width="400" height="104" fill="#1a1416" opacity=".35"/>' +
      prFlag(60, 104, 30, "") + prFlag(220, 104, 30, " fl2") + prFlag(330, 108, 24, "") +
      '<path d="M40 112h300" stroke="#2a2a2a" stroke-width="1"/>' + stalls +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a40"/><path d="M0 222h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Barlow, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#f7f3ea" opacity=".85">LA MARQUETA &#183; PARK AV &amp; E 116 ST</text>',
      sky("g2", "#2c3f7a", "#e6a080"));
  }

  /* 3. El Museo del Barrio on Fifth Avenue at 104th: the long pale building, glass front, the big Taino sun turning on the banner, flags on Museum Mile */
  function museo() {
    let rays = "";
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; rays += '<path d="M' + (200 + Math.cos(a) * 22).toFixed(1) + ' ' + (70 + Math.sin(a) * 22).toFixed(1) + 'L' + (200 + Math.cos(a) * 36).toFixed(1) + ' ' + (70 + Math.sin(a) * 36).toFixed(1) + '" stroke="#b5462a" stroke-width="4" stroke-linecap="round"/>'; }
    let glass = "";
    for (let x = 40; x < 360; x += 20) glass += '<rect x="' + x + '" y="150" width="18" height="44" fill="#9cc8dc" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* Central Park trees across the avenue */
      '<circle cx="20" cy="210" r="30" fill="#2f5a2e"/><circle cx="380" cy="214" r="28" fill="#2f5a2e"/>' +
      '<rect x="20" y="110" width="360" height="90" fill="#e9e1cf"/><rect x="20" y="104" width="360" height="8" fill="#d2c8b2"/>' +
      (function () { let s = ""; for (let x = 36; x < 370; x += 24) s += '<rect x="' + x + '" y="120" width="14" height="20" fill="#b9b0a0"/>'; return s; })() +
      glass + '<rect x="40" y="148" width="320" height="3" fill="#7a7468"/>' +
      '<rect x="40" y="196" width="320" height="4" fill="#b9b0a0"/>' +
      /* banner with the Taino sun */
      '<rect x="150" y="22" width="100" height="96" fill="#f2c14e" stroke="#8a5a12" stroke-width="2"/>' +
      '<g class="sun">' + rays + '<circle cx="200" cy="70" r="20" fill="#e2683a" stroke="#b5462a" stroke-width="3"/></g>' +
      '<circle cx="193" cy="66" r="3" fill="#5a1e0a"/><circle cx="207" cy="66" r="3" fill="#5a1e0a"/><path d="M193 77q7 5 14 0" stroke="#5a1e0a" stroke-width="2.5" fill="none"/>' +
      '<text x="200" y="112" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#5a1e0a">EL MUSEO</text>' +
      /* flag poles */
      '<rect x="60" y="40" width="3" height="70" fill="#5a5a5a"/>' + prFlag(63, 42, 36, "") +
      '<rect x="330" y="40" width="3" height="70" fill="#5a5a5a"/>' + prFlag(333, 42, 36, " fl2") +
      '<rect x="0" y="200" width="400" height="60" fill="#44464c"/><path d="M0 230h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Barlow, Helvetica, sans-serif" font-weight="700" font-size="10" fill="#f7f3ea" opacity=".85">FIFTH AV &#183; E 104 ST</text>',
      sky("g3", "#5aa0d8", "#f3d9b0"));
  }

  /* 4. The Graffiti Hall of Fame at E 106th and Park: the schoolyard wall covered in pieces, a writer's can misting, a butterfly passing */
  function halloffame() {
    let fence = "";
    for (let x = 0; x < 400; x += 8) fence += '<path d="M' + x + ' 40l8 8M' + (x + 8) + ' 40l-8 8" stroke="#8a8f96" stroke-width=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<rect x="0" y="40" width="400" height="10" fill="none"/>' + fence +
      '<rect x="0" y="50" width="400" height="150" fill="#cfc6b6"/>' +
      '<rect x="0" y="50" width="400" height="6" fill="#a59c8c"/>' +
      /* pieces */
      '<path d="M10 70h120v110H10z" fill="#2f2a5a"/><path d="M140 66h130v116H140z" fill="#1a6b5a"/><path d="M280 70h112v110H280z" fill="#6a2a4a"/>' +
      '<circle cx="70" cy="120" r="38" fill="#f2c14e" opacity=".85"/>' +
      tag("WILD", 26, 136, 34, PINK, -8) + tag("STYLE", 150, 130, 36, SKY, -4) + tag("1980", 292, 140, 34, GOLD, -6) +
      '<path d="M150 160q60 20 110 -6" stroke="#ff5fa2" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<path d="M300 158l30 -14 30 14" stroke="#8be0ff" stroke-width="5" fill="none"/>' +
      /* can + mist */
      '<g transform="translate(230 200)"><rect x="0" y="-26" width="12" height="24" rx="3" fill="#ff5fa2"/><rect x="3" y="-30" width="6" height="5" fill="#ddd"/>' +
      '<circle class="mist" cx="10" cy="-36" r="4" fill="#ff5fa2"/><circle class="mist ms2" cx="12" cy="-36" r="3" fill="#ff5fa2"/><circle class="mist ms3" cx="9" cy="-37" r="3" fill="#ff5fa2"/></g>' +
      /* butterfly */
      '<g class="fly"><g transform="translate(60 40)"><path class="flap" d="M0 0q-12-12-14 2q2 8 14 0q12 8 14 0q-2-14-14-2z" fill="#c9ced6" stroke="#5a5f66" stroke-width="1"/></g></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5a5a62"/>' +
      '<path d="M0 214h400" stroke="#f2f2f2" stroke-width="1.5" opacity=".4"/>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Helvetica, sans-serif" font-weight="700" font-size="10" fill="#f7f3ea" opacity=".85">GRAFFITI HALL OF FAME &#183; E 106 ST &amp; PARK AV</text>',
      sky("g4", "#3a6fb0", "#a8d4f0"));
  }

  /* 5. E 118th St and 1st Av ("I'm on First Ave"): green street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="14" y="64" width="236" height="156" fill="#5b2f3a"/>' +
      (function () { let b = ""; for (let y = 64; y < 220; y += 12) for (let x = ((y - 64) / 12) % 2 ? 0 : 14; x < 250; x += 28) b += '<path d="M' + (x + 14) + ' ' + y + 'v12" stroke="#43212b" stroke-width="1.5"/>'; for (let y = 76; y < 220; y += 12) b += '<path d="M14 ' + y + 'h236" stroke="#43212b" stroke-width="1.5"/>'; return b; })() +
      tag("PRINCESS", 26, 132, 34, PINK, -7) + tag("NOKIA", 70, 178, 40, GOLD, -4) + tag("WHO THAT IS", 40, 208, 18, SKY, -2) +
      '<rect class="drip" x="52" y="134" width="3" height="16" fill="' + PINK + '"/><rect class="drip" x="130" y="180" width="3" height="14" fill="' + GOLD + '" style="animation-delay:1s"/>' +
      '<rect x="360" y="40" width="5" height="180" fill="#1d2329"/><path d="M362 42q0-12-26-12" stroke="#1d2329" stroke-width="4" fill="none"/>' +
      '<rect x="322" y="28" width="22" height="6" rx="3" fill="#2a3036"/><path class="flk" d="M324 34l-14 40h46l-14-40z" fill="#ffe7a8" opacity=".25"/>' +
      '<rect x="300" y="60" width="5" height="160" fill="#1d2329"/>' +
      '<rect x="262" y="68" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="81" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 118 St</text>' +
      '<rect x="266" y="90" width="74" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">1 Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#1e0f2a", "#4a2650"));
  }

  window.SCENES = { train, marqueta, museo, halloffame, corner };
})();
