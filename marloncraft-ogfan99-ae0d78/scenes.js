/* Hell's Kitchen opening scenes for the Marlon Craft game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes win{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.win{animation:win 4s ease-in-out infinite}.w2{animation-delay:1.3s}.w3{animation-delay:2.6s}' +
    '@keyframes ferry{from{transform:translateX(440px)}to{transform:translateX(-120px)}}' +
    '.ferry{animation:ferry 16s linear infinite}' +
    '@keyframes heli{0%{transform:translate(-60px,10px)}100%{transform:translate(460px,-14px)}}' +
    '.heli{animation:heli 12s linear infinite}' +
    '@keyframes rotor{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.2)}}' +
    '.rotor{transform-box:fill-box;transform-origin:50% 50%;animation:rotor .25s linear infinite}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.2}}' +
    '.b1{animation:chase .8s infinite}.b2{animation:chase .8s infinite .4s}' +
    '@keyframes ball{0%,100%{transform:translate(0,0)}25%{transform:translate(40px,-14px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,-14px)}}' +
    '.ball{animation:ball 2.4s linear infinite}' +
    '@keyframes walk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.walk{animation:walk 14s linear infinite}.wk2{animation-delay:-7s}' +
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
  const ORANGE = "#ffb347", TEAL = "#4fd1c5", CREAM = "#f3ead8", BLUE = "#0039a6";

  /* 1. The A pulling into 42 St-Port Authority Bus Terminal, underground on Eighth Avenue: white tile, blue tile band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d4cfc2" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d4cfc2" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="30" width="8" height="8" fill="#1d3f8f"/><rect x="' + (x + 8) + '" y="30" width="8" height="8" fill="#e9dcc0"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efeadf"/>' + tiles + band +
      '<rect x="40" y="50" width="320" height="44" rx="4" fill="#111"/>' +
      '<rect x="40" y="50" width="320" height="4" fill="#fff"/>' +
      '<text x="52" y="70" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">42 St-Port Authority</text>' +
      '<text x="52" y="86" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Bus Terminal</text>' +
      bullet(276, 74, "A", BLUE) + bullet(302, 74, "C", BLUE) + bullet(328, 74, "E", BLUE) +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#3d5fb0"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
        bullet(296, 142, "A", BLUE) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("OUR.S", 24, 242, 30, TEAL, -4) + tag("CRAFT", 270, 242, 32, ORANGE, -8));
  }

  /* 2. Manhattan Plaza on W 42nd between 9th and 10th: the two brown-brick 45-story towers with their stacked balconies, windows lighting up,
        a tennis ball going back and forth on the courts out front */
  function plaza() {
    const tower = (x, w) => {
      let s = '<rect x="' + x + '" y="20" width="' + w + '" height="180" fill="#7a4632"/>' +
        '<rect x="' + x + '" y="16" width="' + w + '" height="6" fill="#5e3424"/>';
      for (let y = 30; y < 196; y += 9) {
        s += '<path d="M' + x + ' ' + (y + 6) + 'h' + w + '" stroke="#e7d7c2" stroke-width="1.6"/>';
        for (let i = 0; i < 5; i++) { const cls = (y + i * 7) % 5 === 0 ? ' class="win"' : (y + i) % 7 === 0 ? ' class="win w2"' : (y * i) % 11 === 3 ? ' class="win w3"' : ' opacity=".25"';
          s += '<rect x="' + (x + 5 + i * (w - 10) / 5) + '" y="' + y + '" width="' + ((w - 10) / 5 - 4) + '" height="5" fill="#ffd98a"' + cls + '/>'; }
      }
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(18) +
      /* midtown behind */
      '<rect x="0" y="120" width="40" height="90" fill="#2b2a44"/><rect x="250" y="96" width="34" height="114" fill="#2b2a44"/><rect x="350" y="110" width="50" height="100" fill="#2b2a44"/>' +
      '<rect x="262" y="84" width="10" height="12" fill="#2b2a44"/><path d="M267 84v-14" stroke="#2b2a44" stroke-width="2"/>' +
      tower(52, 78) + tower(150, 78) +
      '<rect x="292" y="150" width="50" height="60" fill="#5e3a2c"/><rect x="298" y="158" width="38" height="4" fill="#e7d7c2"/>' +
      /* courts */
      '<rect x="0" y="200" width="400" height="60" fill="#2f5d4a"/>' +
      '<rect x="40" y="208" width="220" height="40" fill="#3f7d63" stroke="#fff" stroke-width="2"/>' +
      '<path d="M150 208v40M40 228h220" stroke="#fff" stroke-width="1.5"/><path d="M150 206v44" stroke="#ddd" stroke-width="3" stroke-dasharray="2 2"/>' +
      '<g class="ball"><circle cx="110" cy="224" r="3.5" fill="#d8f04a"/></g>' +
      '<text x="200" y="12" text-anchor="middle" font-family="Barlow, Helvetica, sans-serif" font-weight="700" font-size="10" fill="' + CREAM + '" opacity=".8">MANHATTAN PLAZA</text>',
      sky("g2", "#141433", "#7a4a6a"));
  }

  /* 3. The Intrepid at Pier 86 on the Hudson: the long gray carrier, jets parked on the flight deck, the island tower, a ferry and a helicopter going by */
  function intrepid() {
    let jets = "";
    [[96, 0], [150, 1], [262, 0], [312, 1]].forEach(([x, f]) => jets += '<path d="M' + x + ' 116l26 0 6-4h4l-2 4 8 0-8 3h-34z" fill="' + (f ? "#8e98a2" : "#6f7a84") + '"/><path d="M' + (x + 10) + ' 116l8-8h4l-4 8z" fill="#5d6770"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="330" cy="58" r="20" fill="#ffd8a0" opacity=".9"/>' +
      /* Jersey shore across */
      '<path d="M0 134h400v8H0z" fill="#4a3b52"/>' +
      '<rect x="0" y="142" width="400" height="118" fill="#3e5f80"/>' +
      '<path d="M0 196h400M0 214h400M0 232h400" stroke="#8fb4d6" stroke-width="1" opacity=".45" stroke-dasharray="16 20"/>' +
      /* carrier */
      '<path d="M20 120h356l-16 52H44z" fill="#7d8790"/><path d="M44 172h316l-4 10H48z" fill="#5a636c"/>' +
      '<rect x="14" y="116" width="372" height="6" fill="#9aa4ad"/>' +
      '<path d="M40 150h330" stroke="#5a636c" stroke-width="1.5"/>' +
      (function () { let p = ""; for (let x = 60; x < 360; x += 18) p += '<circle cx="' + x + '" cy="138" r="2" fill="#4a535b"/>'; return p; })() +
      '<text x="210" y="164" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#f2f2f2">11</text>' +
      /* island */
      '<rect x="206" y="80" width="34" height="36" fill="#8e98a2"/><rect x="212" y="66" width="18" height="16" fill="#7d8790"/><path d="M221 66v-22M212 52h18" stroke="#5a636c" stroke-width="2"/>' +
      '<rect x="210" y="88" width="26" height="4" fill="#2c3238"/>' + jets +
      /* pier */
      '<rect x="0" y="182" width="400" height="10" fill="#4b3f36"/>' +
      '<g class="ferry"><rect x="0" y="214" width="70" height="12" rx="3" fill="#f2f2f2"/><rect x="10" y="204" width="46" height="10" fill="#2d6fb3"/><rect x="16" y="206" width="34" height="5" fill="#cfe7ff"/></g>' +
      '<g class="heli"><rect x="0" y="40" width="20" height="8" rx="4" fill="#2a2f35"/><path d="M20 44h14" stroke="#2a2f35" stroke-width="2"/><rect class="rotor" x="-6" y="35" width="32" height="2" fill="#2a2f35"/></g>',
      sky("g3", "#2a3e6e", "#e7a07a"));
  }

  /* 4. Theatre Row on W 42nd: the Off-Broadway houses side by side, bulb marquees chasing, folks walking in for the show */
  function theatre() {
    const house = (x, w, col, word) => {
      let bulbs = "";
      for (let i = 0; i < w - 8; i += 8) bulbs += '<circle class="' + ((i / 8) % 2 ? "b2" : "b1") + '" cx="' + (x + 8 + i) + '" cy="114" r="2" fill="#ffe08a"/><circle class="' + ((i / 8) % 2 ? "b1" : "b2") + '" cx="' + (x + 8 + i) + '" cy="142" r="2" fill="#ffe08a"/>';
      return '<rect x="' + x + '" y="40" width="' + w + '" height="160" fill="' + col + '"/>' +
        (function () { let s = ""; for (let y = 50; y < 104; y += 18) for (let i = x + 8; i < x + w - 14; i += 20) s += '<rect x="' + i + '" y="' + y + '" width="12" height="12" fill="#2b1f2a"/><rect x="' + i + '" y="' + y + '" width="12" height="12" fill="#ffd27a" class="win' + (i % 3 ? " w2" : "") + '" opacity=".6"/>'; return s; })() +
        '<rect x="' + (x + 2) + '" y="110" width="' + (w - 4) + '" height="36" fill="#1b1414" stroke="#c9a24a" stroke-width="2"/>' + bulbs +
        '<text x="' + (x + w / 2) + '" y="133" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#fff4d6">' + word + '</text>' +
        '<rect x="' + (x + w / 2 - 14) + '" y="160" width="28" height="40" fill="#3a1d16"/><rect x="' + (x + w / 2 - 12) + '" y="162" width="24" height="36" fill="#ffcf7a" opacity=".55"/>';
    };
    const person = (x, c) => '<g><circle cx="' + x + '" cy="200" r="4" fill="#2a2024"/><rect x="' + (x - 4) + '" y="204" width="8" height="14" rx="3" fill="' + c + '"/><rect x="' + (x - 3) + '" y="218" width="2.5" height="10" fill="#1b1b1b"/><rect x="' + (x + 0.5) + '" y="218" width="2.5" height="10" fill="#1b1b1b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(16) +
      house(8, 120, "#6b3a2e", "TONIGHT") + house(136, 128, "#8a6a4f", "OFF-BROADWAY") + house(272, 120, "#5a3440", "NEW PLAY") +
      '<rect x="0" y="200" width="400" height="34" fill="#4a4a50"/><path d="M0 200h400" stroke="#6c6c74" stroke-width="2"/>' +
      '<rect x="0" y="234" width="400" height="26" fill="#1d1f24"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="walk">' + person(0, ORANGE) + person(14, TEAL) + '</g><g class="walk wk2">' + person(0, "#c84b5a") + '</g>' +
      '<text x="200" y="28" text-anchor="middle" font-family="Barlow, Helvetica, sans-serif" font-weight="700" font-size="10" fill="' + CREAM + '" opacity=".8">THEATRE ROW &#183; W 42 ST</text>',
      sky("g4", "#120d24", "#4a2a4a"));
  }

  /* 5. W 43rd St and 9th Av, by Manhattan Plaza: green street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="14" y="64" width="236" height="156" fill="#6a3a2a"/>' +
      (function () { let b = ""; for (let y = 64; y < 220; y += 12) for (let x = ((y - 64) / 12) % 2 ? 0 : 14; x < 250; x += 28) b += '<path d="M' + (x + 14) + ' ' + y + 'v12" stroke="#4a2619" stroke-width="1.5"/>'; for (let y = 76; y < 220; y += 12) b += '<path d="M14 ' + y + 'h236" stroke="#4a2619" stroke-width="1.5"/>'; return b; })() +
      tag("MARLON", 28, 138, 40, ORANGE, -7) + tag("CRAFT", 92, 176, 34, TEAL, -4) + tag("DO THE WORK", 36, 208, 18, CREAM, -2) +
      '<rect class="drip" x="60" y="140" width="3" height="18" fill="' + ORANGE + '"/><rect class="drip" x="150" y="178" width="3" height="14" fill="' + TEAL + '" style="animation-delay:1s"/>' +
      /* streetlight */
      '<rect x="360" y="40" width="5" height="180" fill="#1d2329"/><path d="M362 42q0-12-26-12" stroke="#1d2329" stroke-width="4" fill="none"/>' +
      '<rect x="322" y="28" width="22" height="6" rx="3" fill="#2a3036"/><path class="flk" d="M324 34l-14 40h46l-14-40z" fill="#ffe7a8" opacity=".25"/>' +
      /* sign pole */
      '<rect x="300" y="60" width="5" height="160" fill="#1d2329"/>' +
      '<rect x="262" y="68" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="81" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 43 St</text>' +
      '<rect x="266" y="90" width="74" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">9 Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#140c22", "#3a2a40"));
  }

  window.SCENES = { train, plaza, intrepid, theatre, corner };
})();
