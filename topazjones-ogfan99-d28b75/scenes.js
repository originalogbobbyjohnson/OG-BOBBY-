/* Montclair, New Jersey opening scenes for the Topaz Jones game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes wave{0%,100%{transform:skewY(0) scaleY(1)}50%{transform:skewY(4deg) scaleY(.9)}}' +
    '.flag{transform-box:fill-box;transform-origin:50% 0;animation:wave 1.6s ease-in-out infinite}.flag2{animation-delay:-.8s}' +
    '@keyframes glide{0%{transform:translate(0,0)}50%{transform:translate(160px,-14px)}100%{transform:translate(320px,0)}}' +
    '.bird{animation:glide 12s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:1}}' +
    '.bulb{animation:glow 1.2s infinite}.bulb2{animation-delay:-.6s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-60px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const AMBER = "#ffb238", TEAL = "#3fd0c9", MAG = "#ff5fa2";

  /* 1. Bay Street station, NJ Transit Montclair-Boonton Line: ground-level platform, the little brick station house, the train pulling in */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="132" width="28" height="20" rx="3" fill="#cfe6f5" opacity=".9"/>';
    let ties = "";
    for (let x = 0; x < 400; x += 12) ties += '<rect x="' + x + '" y="186" width="7" height="8" fill="#5a4030"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<g class="cld"><ellipse cx="0" cy="26" rx="40" ry="8" fill="#fff" opacity=".6"/></g>' +
      /* trees behind */
      (function () { let t = ""; for (let x = 0; x < 400; x += 26) t += '<circle cx="' + x + '" cy="' + (98 + (x % 3) * 4) + '" r="20" fill="' + (x % 52 ? "#3f7a3a" : "#4f8a44") + '"/>'; return t; })() +
      /* brick station house with a hip roof */
      '<rect x="300" y="74" width="92" height="50" fill="#9a4a32"/><path d="M294 76l52 -24 52 24z" fill="#4a3a32"/>' +
      '<rect x="312" y="88" width="14" height="20" fill="#ffd98a" class="flk"/><rect x="366" y="88" width="14" height="20" fill="#ffd98a" class="flk flk2"/><rect x="338" y="92" width="16" height="32" fill="#3a2418"/>' +
      /* station sign */
      '<rect x="40" y="58" width="200" height="26" rx="3" fill="#111"/><rect x="40" y="58" width="200" height="3" fill="#fff"/>' +
      '<text x="52" y="77" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Bay Street</text>' +
      badge(152, 72, 80, "NJ TRANSIT", "#0039a6") +
      '<rect x="60" y="84" width="4" height="40" fill="#333"/><rect x="216" y="84" width="4" height="40" fill="#333"/>' +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="8" y="124" width="300" height="52" rx="6" fill="#d4d8de" stroke="#7a828c" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="4" fill="#f58025"/><rect x="8" y="162" width="300" height="3" fill="#a6228e"/><rect x="8" y="165" width="300" height="3" fill="#0039a6"/>' + windows +
        '<rect x="290" y="132" width="14" height="22" rx="3" fill="#cfe6f5"/><circle cx="300" cy="170" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#8a8a8a"/>' + ties + '<path d="M0 188h400M0 192h400" stroke="#9aa0a8" stroke-width="2"/>' +
      '<rect x="0" y="194" width="400" height="8" fill="#eab308"/><rect x="0" y="202" width="400" height="58" fill="#6a6a70"/>' +
      tag("NEW FUNK", 20, 246, 26, AMBER, -4) + tag("A TO Z", 270, 248, 26, TEAL, -7),
      sky("g1", "#7ab8e6", "#e8f3fa"));
  }

  /* 2. Eagle Rock Reservation: the stone wall on top of the ridge, the whole Manhattan skyline across the meadowlands at sunset, a hawk gliding */
  function eagle() {
    let city = "";
    const bld = [[40, 30], [58, 44], [74, 26], [92, 52], [112, 38], [130, 60], [150, 34], [170, 88], [184, 48], [204, 64], [224, 40], [242, 56], [262, 30], [280, 46], [300, 36], [320, 28], [340, 40], [360, 24]];
    bld.forEach(([x, h]) => { city += '<rect x="' + x + '" y="' + (150 - h) + '" width="16" height="' + h + '" fill="#3a2a4a"/>'; });
    city += '<path d="M176 62l2 -16 2 16z" fill="#3a2a4a"/>';
    let lights = "";
    for (let i = 0; i < 24; i++) lights += '<rect class="bulb' + (i % 2 ? " bulb2" : "") + '" x="' + (44 + i * 13) + '" y="' + (120 + (i % 4) * 7) + '" width="2" height="2" fill="#ffe7a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="300" cy="120" r="26" fill="#ffcf6a" opacity=".9"/>' +
      city + lights +
      '<rect x="0" y="150" width="400" height="20" fill="#5a4a6a" opacity=".85"/>' +
      '<g class="bird"><path d="M20 50q8 -8 14 0q6 -8 14 0" stroke="#2a1a2a" stroke-width="2.5" fill="none"/></g>' +
      /* ridge, trees, the stone wall */
      '<path d="M0 170q100 -10 200 0t200 0v90H0z" fill="#2f4a2a"/>' +
      '<rect x="0" y="196" width="400" height="26" fill="#8a7e70"/>' +
      (function () { let b = ""; for (let y = 198; y < 222; y += 8) for (let x = (y % 16 ? 0 : 12); x < 400; x += 24) b += '<rect x="' + x + '" y="' + y + '" width="22" height="6" rx="2" fill="#a0948a"/>'; return b; })() +
      '<g class="bob"><circle cx="120" cy="182" r="6" fill="#2b1d16"/><rect x="113" y="188" width="14" height="10" rx="4" fill="' + AMBER + '"/></g>' +
      '<g class="bob bob2"><circle cx="142" cy="184" r="5" fill="#3b2a1e"/><rect x="136" y="189" width="12" height="9" rx="4" fill="' + TEAL + '"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#24361f"/>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="13" letter-spacing="3" fill="#f4efe3">EAGLE ROCK</text>',
      sky("g2", "#3a2a6a", "#ff9a6a"));
  }

  /* 3. Montclair Art Museum: the pale neoclassical front with its columns and steps, banners waving */
  function museum() {
    let cols = "";
    for (let x = 140; x < 270; x += 26) cols += '<rect x="' + x + '" y="98" width="12" height="82" fill="#f2ecdf"/><rect x="' + (x - 3) + '" y="94" width="18" height="6" fill="#e2dccd"/><path d="M' + (x + 3) + ' 104v72M' + (x + 9) + ' 104v72" stroke="#d8d0be" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cld"><ellipse cx="0" cy="30" rx="42" ry="8" fill="#fff" opacity=".7"/></g><g class="cld cld2"><ellipse cx="0" cy="50" rx="28" ry="6" fill="#fff" opacity=".55"/></g>' +
      /* wings */
      '<rect x="40" y="96" width="320" height="90" fill="#e6dfcf"/><rect x="40" y="96" width="320" height="6" fill="#d4ccb8"/>' +
      '<rect x="66" y="118" width="30" height="44" fill="#4a5a6a"/><rect x="304" y="118" width="30" height="44" fill="#4a5a6a"/>' +
      /* portico */
      '<path d="M124 92l76 -34 76 34z" fill="#efe9dc" stroke="#d4ccb8" stroke-width="2"/><rect x="124" y="88" width="152" height="10" fill="#e2dccd"/>' +
      '<rect x="160" y="100" width="80" height="80" fill="#5a5048"/>' + cols +
      '<text x="200" y="84" text-anchor="middle" font-family="Georgia, serif" font-size="8" letter-spacing="2" fill="#8a7e6a">ART MUSEUM</text>' +
      /* banners */
      '<rect x="102" y="104" width="2" height="60" fill="#555"/><path class="flag" d="M104 106h16v40l-8 -6 -8 6z" fill="' + AMBER + '"/>' +
      '<rect x="296" y="104" width="2" height="60" fill="#555"/><path class="flag flag2" d="M280 106h16v40l-8 -6 -8 6z" fill="' + TEAL + '"/>' +
      /* steps + lawn */
      '<rect x="120" y="180" width="160" height="6" fill="#d8d0be"/><rect x="112" y="186" width="176" height="6" fill="#cfc6b2"/><rect x="104" y="192" width="192" height="6" fill="#c6bca6"/>' +
      '<rect x="0" y="186" width="104" height="74" fill="#4f8a44"/><rect x="296" y="186" width="104" height="74" fill="#4f8a44"/><rect x="104" y="198" width="192" height="62" fill="#9a958a"/>' +
      '<g class="bob"><circle cx="180" cy="214" r="6" fill="#2b1d16"/><rect x="173" y="220" width="14" height="22" rx="5" fill="' + MAG + '"/></g>' +
      '<g class="bob bob2"><circle cx="226" cy="216" r="5" fill="#3b2a1e"/><rect x="220" y="221" width="12" height="20" rx="5" fill="' + AMBER + '"/></g>',
      sky("g3", "#6fb2e0", "#e2f0f8"));
  }

  /* 4. The old theater on Bloomfield Ave: the tall vertical sign, the bulb-lit marquee, the crowd lined up */
  function theater() {
    let bulbs = "";
    for (let x = 84; x < 320; x += 12) bulbs += '<circle class="bulb' + (x % 24 ? " bulb2" : "") + '" cx="' + x + '" cy="122" r="2.2" fill="#fff3b0"/><circle class="bulb' + (x % 24 ? "" : " bulb2") + '" cx="' + x + '" cy="156" r="2.2" fill="#fff3b0"/>';
    let vb = "";
    for (let y = 30; y < 106; y += 10) vb += '<circle class="bulb' + (y % 20 ? " bulb2" : "") + '" cx="186" cy="' + y + '" r="1.8" fill="#fff3b0"/><circle class="bulb' + (y % 20 ? "" : " bulb2") + '" cx="214" cy="' + y + '" r="1.8" fill="#fff3b0"/>';
    let crowd = "";
    for (let i = 0; i < 22; i++) { const x = 8 + i * 18, c = [AMBER, TEAL, MAG, "#f1ede3"][i % 4]; crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (210 + (i % 3) * 3) + '" r="6" fill="#2b1d16"/><rect x="' + (x - 7) + '" y="' + (216 + (i % 3) * 3) + '" width="14" height="22" rx="5" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(18) +
      '<rect x="60" y="60" width="280" height="140" fill="#b88a5a"/><rect x="60" y="60" width="280" height="8" fill="#9a6e44"/>' +
      (function () { let w = ""; for (let x = 76; x < 330; x += 40) w += '<rect x="' + x + '" y="76" width="22" height="28" fill="#2a1e18"/>'; return w; })() +
      /* vertical sign */
      '<rect x="180" y="20" width="40" height="92" rx="4" fill="#1a1414" stroke="' + AMBER + '" stroke-width="2"/>' + vb +
      '<text x="200" y="66" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" letter-spacing="1" fill="' + AMBER + '" transform="rotate(90 200 66)">THEATER</text>' +
      /* marquee */
      '<rect x="74" y="114" width="252" height="50" fill="#1a1414" stroke="#c4a24a" stroke-width="2"/>' + bulbs +
      '<text x="200" y="145" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" textLength="210" lengthAdjust="spacingAndGlyphs" fill="' + AMBER + '">TONIGHT: TOPAZ JONES</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3c42"/>' + crowd,
      sky("g4", "#0e0b22", "#2c2448"));
  }

  /* IC: shared iconic landmark in the corner backdrop (its own little animations, prefixed ic-) */
  const IC_CSS = '<style>' +
    '@keyframes icBl{0%,49%{opacity:1}50%,100%{opacity:.2}}.ic-bl{animation:icBl 1s steps(1) infinite}.ic-b2{animation-delay:-.5s}' +
    '@keyframes icSw{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ic-sw{animation:icSw 6s ease-in-out infinite}.ic-s2{animation-delay:-3s}' +
    '@keyframes icPl{0%,100%{opacity:.3}50%{opacity:1}}.ic-pl{animation:icPl 2.6s ease-in-out infinite}.ic-p2{animation-delay:-.65s}.ic-p3{animation-delay:-1.3s}.ic-p4{animation-delay:-1.95s}' +
    '@keyframes icDr{from{transform:translateX(-90px)}to{transform:translateX(320px)}}.ic-dr{animation:icDr 22s linear infinite}' +
    '@keyframes icFl{to{stroke-dashoffset:-24}}.ic-fl{animation:icFl .7s linear infinite}' +
    '@keyframes icMi{0%{transform:translateY(0);opacity:0}30%{opacity:.7}100%{transform:translateY(-24px);opacity:0}}.ic-mi{animation:icMi 3.2s ease-out infinite}.ic-m2{animation-delay:-1.1s}.ic-m3{animation-delay:-2.2s}' +
    '@keyframes icCar{from{transform:translateX(0)}to{transform:translateX(300px)}}.ic-car{animation:icCar 7s linear infinite}.ic-c2{animation-delay:-3.5s}' +
    '@keyframes icCarL{from{transform:translateX(0)}to{transform:translateX(-300px)}}.ic-carl{animation:icCarL 8.5s linear infinite}.ic-c3{animation-delay:-4s}' +
    '@keyframes icBird{from{transform:translate(0,0)}to{transform:translate(330px,-26px)}}.ic-bird{animation:icBird 9s linear infinite}.ic-bd2{animation-delay:-4.5s}' +
    '</style>';
  const icBg = () => { let b = "";
    for (let y = 18; y < 66; y += 6) b += '<circle class="ic-bl' + ((y / 6) % 2 ? " ic-b2" : "") + '" cx="201" cy="' + y + '" r="1.5" fill="#ffe7a8"/><circle class="ic-bl' + ((y / 6) % 2 ? "" : " ic-b2") + '" cx="213" cy="' + y + '" r="1.5" fill="#ffe7a8"/>';
    return IC_CSS +
      '<ellipse class="ic-pl" cx="198" cy="72" rx="40" ry="12" fill="#f2a33a" opacity=".35"/>' +
      '<rect x="150" y="58" width="92" height="14" fill="#9a7450"/><rect x="148" y="56" width="96" height="3" fill="#7a5a3e"/>' +
      '<path d="M214 14L220 18V64L214 68z" fill="#3a2a1a"/>' +
      '<rect x="197" y="12" width="20" height="58" rx="3" fill="#1a1414" stroke="#f2a33a" stroke-width="1.5"/>' + b +
      '<text x="207" y="41" transform="rotate(90 207 41)" text-anchor="middle" dominant-baseline="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" letter-spacing="1" fill="#f2a33a">THEATER</text>'; };

  /* 5. Bloomfield Ave and Park St, the middle of Montclair: green street signs, cars going by, his name on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) + icBg() +
      '<rect x="282" y="50" width="90" height="170" fill="#6a4a3a"/>' +
      (function () { let w = ""; for (let y = 60; y < 200; y += 18) for (let x = 292; x < 366; x += 18) w += '<rect x="' + x + '" y="' + y + '" width="9" height="12" fill="' + ((x + y) % 3 ? "#2a1a16" : "#ffd98a") + '"/>'; return w; })() +
      /* tag wall */
      '<rect x="14" y="70" width="228" height="150" fill="#30333c"/>' +
      '<rect x="14" y="70" width="228" height="150" fill="' + TEAL + '" opacity=".14"/>' +
      tag("TOPAZ", 30, 146, 50, AMBER, -7) + tag("JONES", 70, 198, 36, TEAL, -3) +
      '<path d="M206 96l10 -12 10 12 -10 16z" fill="' + AMBER + '" stroke="#000" stroke-width="2"/><path d="M206 96h20M216 84v28" stroke="#fff" stroke-width="1" opacity=".7"/>' +
      /* streetlight */
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h24" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M278 62h24l-6 8h-12z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="250" y="90" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Bloomfield Ave</text>' +
      '<rect x="264" y="112" width="72" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="125" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Park St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="34" height="10" rx="3" fill="' + MAG + '"/><circle cx="8" cy="237" r="3" fill="#111"/><circle cx="26" cy="237" r="3" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="244" width="34" height="10" rx="3" fill="#f1ede3"/><circle cx="8" cy="255" r="3" fill="#111"/><circle cx="26" cy="255" r="3" fill="#111"/></g>',
      sky("g5", "#120c18", "#2e2040"));
  }

  window.SCENES = { train, eagle, museum, theater, corner };
})();
