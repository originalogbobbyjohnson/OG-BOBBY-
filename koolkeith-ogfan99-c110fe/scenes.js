/* Bedford Park opening scenes for the Kool Keith game: Ultramagnetic, Dr. Octagon, Black Elvis. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes hover{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-8px)}}' +
    '.ufo{animation:hover 4s ease-in-out infinite}' +
    '@keyframes beam{0%,100%{opacity:.25}50%{opacity:.6}}' +
    '.beam{animation:beam 1.6s ease-in-out infinite}' +
    '@keyframes fly{0%{transform:translate(-60px,20px)}50%{transform:translate(200px,-10px)}100%{transform:translate(460px,20px)}}' +
    '.bird{animation:fly 9s linear infinite}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.wing{transform-box:fill-box;transform-origin:bottom center;animation:flap .5s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.45}50%{opacity:1}}' +
    '.glow{animation:glow 2.6s ease-in-out infinite}.glow2{animation-delay:-1.3s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.wv{animation:wave 3s ease-in-out infinite}' +
    '@keyframes spark{0%,100%{opacity:0}50%{opacity:1}}' +
    '.spk{animation:spark .9s steps(2) infinite}.spk2{animation-delay:-.45s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 90) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  /* Dr. Octagon's flying saucer */
  const saucer = (x, y) =>
    '<g class="ufo"><path class="beam" d="M' + (x - 14) + ' ' + (y + 8) + 'L' + (x - 50) + ' ' + (y + 120) + 'h100L' + (x + 14) + ' ' + (y + 8) + 'z" fill="#3fe0c5"/>' +
    '<ellipse cx="' + x + '" cy="' + (y - 6) + '" rx="16" ry="12" fill="#9fe8ff" opacity=".85"/>' +
    '<ellipse cx="' + x + '" cy="' + y + '" rx="44" ry="10" fill="#b8c2cc" stroke="#4a5560" stroke-width="2"/>' +
    '<circle class="glow" cx="' + (x - 26) + '" cy="' + (y + 2) + '" r="3" fill="#ff6fb5"/><circle class="glow glow2" cx="' + x + '" cy="' + (y + 5) + '" r="3" fill="#ff6fb5"/><circle class="glow" cx="' + (x + 26) + '" cy="' + (y + 2) + '" r="3" fill="#ff6fb5"/></g>';
  const PINK = "#ff6fb5", PURPLE = "#9b5cff", MINT = "#3fe0c5", GOLD = "#f2c14e";

  /* 1. The B / D pulling into Bedford Park Blvd, underground beneath the Grand Concourse: white tile, maroon tile band, I-beam columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfcabc" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#cfcabc" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="30" width="16" height="8" fill="#7a2a3a"/><rect x="' + (x + 6) + '" y="32" width="4" height="4" fill="#e8dcc0"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1a1d22"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#2b3038"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#111317"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#24272c"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#ece6d6"/>' + tiles + band +
      '<rect x="46" y="54" width="290" height="36" rx="4" fill="#111"/><rect x="46" y="54" width="290" height="4" fill="#fff"/>' +
      '<text x="58" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Bedford Park Blvd</text>' +
      bullet(284, 73, "B", "#ff6319") + bullet(312, 73, "D", "#ff6319") +
      '<g class="flk"><rect x="100" y="10" width="80" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#08090b"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="5" fill="#ff6319"/>' + windows +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 142, "D", "#ff6319") +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#24272c"/>' +
      tag("ULTRA", 24, 242, 34, PINK, -5) + tag("EGO TRIP", 222, 244, 28, MINT, -7));
  }

  /* 2. Poe Cottage on the Grand Concourse at Kingsbridge Rd: the little white clapboard farmhouse (1812), dark shutters, porch, a raven flying over */
  function poe() {
    let clap = "";
    for (let y = 120; y < 210; y += 6) clap += '<path d="M120 ' + y + 'h170" stroke="#cfc8b8" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(26) +
      '<circle cx="336" cy="46" r="20" fill="#f4f0dc"/><circle cx="344" cy="40" r="18" fill="#1a1238"/>' +
      /* Concourse apartment blocks behind */
      '<rect x="0" y="90" width="100" height="120" fill="#3a2f4a"/><rect x="310" y="80" width="90" height="130" fill="#3a2f4a"/>' +
      '<rect x="16" y="104" width="10" height="12" fill="#ffd98a"/><rect x="60" y="130" width="10" height="12" fill="#ffd98a"/><rect x="330" y="100" width="10" height="12" fill="#ffd98a"/><rect x="370" y="146" width="10" height="12" fill="#ffd98a"/>' +
      /* the cottage */
      '<rect x="120" y="118" width="170" height="92" fill="#f2efe6"/>' + clap +
      '<path d="M110 120l95 -50 95 50z" fill="#4a4a52" stroke="#2a2a30" stroke-width="2"/>' +
      '<rect x="230" y="70" width="12" height="30" fill="#7a3a2a"/>' +
      '<rect x="140" y="138" width="22" height="28" fill="#ffd98a" class="glow"/><rect x="134" y="138" width="6" height="28" fill="#2a3a2a"/><rect x="162" y="138" width="6" height="28" fill="#2a3a2a"/><path d="M151 138v28M140 152h22" stroke="#6a5a3a" stroke-width="1.5"/>' +
      '<rect x="248" y="138" width="22" height="28" fill="#2a2830"/><rect x="242" y="138" width="6" height="28" fill="#2a3a2a"/><rect x="270" y="138" width="6" height="28" fill="#2a3a2a"/>' +
      '<rect x="194" y="156" width="22" height="54" fill="#3a2a20"/>' +
      /* porch */
      '<rect x="176" y="148" width="58" height="5" fill="#e8e2d2"/><rect x="178" y="152" width="4" height="58" fill="#e8e2d2"/><rect x="228" y="152" width="4" height="58" fill="#e8e2d2"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2a3a2a"/><rect x="0" y="210" width="400" height="5" fill="#4a5a3a"/>' +
      /* the raven */
      '<g class="bird"><g transform="translate(0,60)"><path d="M0 0q8 -4 16 0q-8 2 -16 0z" fill="#111"/><path class="wing" d="M4 0l6 -10 4 10z" fill="#111"/></g></g>' +
      sign(8, 8, 120, "Kingsbridge Rd") + tag("EARTH PEOPLE", 128, 246, 22, PINK, -4),
      sky("g2", "#0b0a24", "#3a2a5c"));
  }

  /* 3. Lehman College on Bedford Park Blvd: grey stone Collegiate Gothic halls with the square crenellated tower, and Dr. Octagon's saucer beaming down over the quad */
  function lehman() {
    let wins = "";
    for (let x = 30; x < 380; x += 24) if (x < 160 || x > 240) { wins += '<path d="M' + x + ' 196v-26a6 6 0 0 1 12 0v26z" fill="' + ((x / 24) % 3 < 1 ? "#ffd98a" : "#2a2830") + '"/>'; }
    let crn = "";
    for (let x = 160; x < 240; x += 12) crn += '<rect x="' + x + '" y="44" width="7" height="8" fill="#9aa0a6"/>';
    for (let x = 14; x < 390; x += 12) if (x < 160 || x > 236) crn += '<rect x="' + x + '" y="140" width="7" height="6" fill="#9aa0a6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(30) +
      saucer(300, 40) +
      '<rect x="10" y="146" width="380" height="64" fill="#8c9298"/>' + crn + wins +
      '<rect x="160" y="52" width="80" height="158" fill="#9aa0a6"/>' +
      '<path d="M178 120v-34q22 -26 44 0v34z" fill="#2a2830"/><path class="glow" d="M182 118v-30q18 -20 36 0v30z" fill="#c9b6ff"/><path d="M200 70v48M182 98h36" stroke="#4a4050" stroke-width="2"/>' +
      '<path d="M184 210v-40a16 16 0 0 1 32 0v40z" fill="#4a3020" stroke="#c8ccd0" stroke-width="3"/>' +
      '<rect x="160" y="132" width="80" height="4" fill="#c8ccd0"/>' +
      /* lawn */
      '<rect x="0" y="210" width="400" height="50" fill="#2f5a34"/><path d="M0 214h400" stroke="#3e7044" stroke-width="3"/>' +
      tag("DR. OCTAGON", 16, 40, 26, MINT, -5),
      sky("g3", "#070420", "#2a1a50"));
  }

  /* 4. Jerome Park Reservoir: the stone gatehouse, the water under the iron fence, and an Ultramagnetic field lighting up the sky, a giant horseshoe magnet sparking */
  function reservoir() {
    let fence = "";
    for (let x = 0; x < 400; x += 8) fence += '<path d="M' + x + ' 196v-18" stroke="#1a1c20" stroke-width="1.6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(20) +
      /* magnetic field lines */
      '<g class="glow"><path d="M60 120q140 -160 280 0" stroke="' + PURPLE + '" stroke-width="3" fill="none"/><path d="M90 120q110 -120 220 0" stroke="' + PINK + '" stroke-width="3" fill="none"/></g>' +
      '<g class="glow glow2"><path d="M30 120q170 -200 340 0" stroke="' + MINT + '" stroke-width="2.5" fill="none"/></g>' +
      /* horseshoe magnet */
      '<path d="M170 120v-40a30 30 0 0 1 60 0v40h-16v-40a14 14 0 0 0 -28 0v40z" fill="#e0263a" stroke="#5a0a14" stroke-width="2"/>' +
      '<rect x="170" y="112" width="16" height="12" fill="#d8dde2"/><rect x="214" y="112" width="16" height="12" fill="#d8dde2"/>' +
      '<path class="spk" d="M178 130l-4 8 6 -2 -4 9" stroke="#fff6a8" stroke-width="2" fill="none"/><path class="spk spk2" d="M222 130l4 8 -6 -2 4 9" stroke="#fff6a8" stroke-width="2" fill="none"/>' +
      /* far shore + gatehouse */
      '<rect x="0" y="140" width="400" height="16" fill="#2a3a3a"/>' +
      '<rect x="40" y="114" width="56" height="42" fill="#a39a88"/><path d="M34 116l34 -20 34 20z" fill="#5a4a44"/><path d="M60 156v-18a8 8 0 0 1 16 0v18z" fill="#2a2420"/>' +
      '<rect x="46" y="124" width="8" height="10" fill="#ffd98a"/><rect x="82" y="124" width="8" height="10" fill="#ffd98a"/>' +
      '<path d="M0 142h30v-14h14v14h330v-20h12v20h14" stroke="#1d2a2a" stroke-width="2" fill="none"/>' +
      /* water */
      '<rect x="0" y="156" width="400" height="40" fill="#1d3f5a"/>' +
      '<g class="wv"><path d="M10 168h40M120 176h50M260 166h40M330 182h40" stroke="#9fe8ff" stroke-width="2" opacity=".5"/></g>' +
      '<path d="M0 178h400" stroke="#1a1c20" stroke-width="2"/>' + fence +
      '<rect x="0" y="196" width="400" height="64" fill="#24272c"/><path d="M0 230h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("ULTRAMAGNETIC", 40, 252, 30, PINK, -3),
      sky("g4", "#0d0618", "#2a1550"));
  }

  /* 5. Bedford Park Blvd and the Grand Concourse: street signs, streetlight, the tag wall, a little saucer drifting */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<g class="cld"><ellipse cx="0" cy="30" rx="18" ry="5" fill="#b8c2cc"/><ellipse cx="0" cy="26" rx="7" ry="5" fill="#9fe8ff"/></g>' +
      '<rect x="276" y="30" width="116" height="190" fill="#9a8a6a"/><rect x="272" y="26" width="124" height="8" fill="#7a6a4a"/>' +
      (function () { let w = ""; for (let y = 42; y < 210; y += 16) for (let x = 286; x < 380; x += 20) w += '<rect x="' + x + '" y="' + y + '" width="10" height="9" fill="' + ((x + y) % 3 ? "#2a2018" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="14" y="70" width="236" height="150" fill="#2a2440"/>' +
      tag("KOOL KEITH", 22, 146, 34, PINK, -7) + tag("BLACK ELVIS", 30, 196, 26, GOLD, -3) +
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M280 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      sign(268, 88, 124, "Bedford Park Blvd") + sign(276, 110, 110, "Grand Concourse") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d0618", "#2a1a40"));
  }

  window.SCENES = { train, poe, lehman, reservoir, corner };
})();
