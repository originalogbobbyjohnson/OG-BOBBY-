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

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: a tiny silhouette far to the south under a huge full moon */
(function () {
  /* Y: little kit for drawing the stadium into the corner's sky. Every piece is plain SVG in the 400 x 260 frame. */
  const Y = (function () {
    const css = '<style>' +
      '@keyframes ysP{0%,100%{opacity:1}50%{opacity:.5}}.ysP{animation:ysP 1.8s ease-in-out infinite}' +
      '@keyframes ysF{0%{transform:scale(.1);opacity:0}12%{opacity:1}100%{transform:scale(1);opacity:0}}.ysF{transform-box:fill-box;transform-origin:50% 50%;animation:ysF 2.6s ease-out infinite}' +
      '@keyframes ysB{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ysB{transform-box:fill-box;transform-origin:50% 100%;animation:ysB 5s ease-in-out infinite}' +
      '@keyframes ysX{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ysX{animation:ysX 16s linear infinite}' +
      '@keyframes ysW{0%,100%{transform:skewY(0)}50%{transform:skewY(-14deg)}}.ysW{transform-box:fill-box;transform-origin:0 50%;animation:ysW 1.1s ease-in-out infinite}' +
      '@keyframes ysD{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.ysD{animation:ysD 9s ease-in-out infinite}' +
      '@keyframes ysS{from{transform:translateY(0)}to{transform:translateY(60px)}}.ysS{animation:ysS 3s linear infinite}.ysR{animation-duration:.7s}' +
      '@keyframes ysK{0%,100%{opacity:1}50%{opacity:.2}}.ysK{animation:ysK 1s steps(1) infinite}' +
      '</style>';
    const g = (x, y, s, inner) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + inner + '</g>';
    /* the white frieze: top rail, posts, and the arched openings hanging under it */
    const frieze = (x0, x1, y, k, c) => {
      let p = 'M' + x0 + ' ' + y + 'H' + x1;
      for (let x = x0; x < x1 - 0.1; x += k) p += 'M' + x + ' ' + y + 'v6M' + x + ' ' + (y + 4.5) + 'q' + (k / 2) + ' -5 ' + k + ' 0';
      return '<path d="' + p + 'M' + x1 + ' ' + y + 'v6" fill="none" stroke="' + (c || "#f4f1e8") + '" stroke-width="1.4"/>';
    };
    /* light banks on poles, with a soft glow */
    const lights = (xs, y, off) => xs.map((p, i) => { const x = p.length ? p[0] : p, yy = p.length ? p[1] : y;
      return '<g' + (off ? ' class="ysK" style="animation-duration:' + (2 + i * .7) + 's"' : '') + '><ellipse class="ysP" cx="' + x + '" cy="' + (yy - 11) + '" rx="11" ry="6" fill="#fff4c8" opacity=".24"/>' +
      '<path d="M' + x + ' ' + yy + 'v-8" stroke="#3a3f48" stroke-width="1.2"/><rect x="' + (x - 6) + '" y="' + (yy - 13) + '" width="12" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>' +
      '<path d="M' + (x - 2) + ' ' + (yy - 13) + 'v5M' + (x + 2) + ' ' + (yy - 13) + 'v5" stroke="#c9c3a8" stroke-width=".5"/></g>'; }).join("");
    /* the limestone face: tall arches either side of the big gate, a gold band over the gate (no lettering) */
    const face = (w, lit) => {
      const n = Math.max(2, Math.round((w - 36) / 2 / 20)), step = (w / 2 - 22) / n, aw = step * 0.6, gx = w / 2;
      let a = '<rect x="0" y="-58" width="' + w + '" height="58" fill="' + (lit ? "#e9dcb8" : "#d8cfba") + '"/>' +
        '<rect x="-2" y="-62" width="' + (w + 4) + '" height="5" fill="#f1ead8"/><rect x="0" y="-8" width="' + w + '" height="8" fill="#a99f8a"/>';
      for (let i = 0; i < n; i++) [6 + i * step, w - 6 - i * step - aw].forEach(x =>
        a += '<path d="M' + x.toFixed(1) + ' -8V-42a' + (aw / 2).toFixed(1) + ' ' + (aw / 2).toFixed(1) + ' 0 0 1 ' + aw.toFixed(1) + ' 0V-8z" fill="' + (lit ? "#ffcf78" : "#4a4652") + '"' + (lit ? ' opacity=".9"' : '') + '/>');
      a += '<path d="M' + (gx - 15) + ' -8V-38a15 15 0 0 1 30 0V-8z" fill="' + (lit ? "#ffe2a0" : "#3a3640") + '" stroke="#b8ad94" stroke-width="2"/>' +
        '<rect x="' + (gx - 20) + '" y="-56" width="40" height="5" fill="#c9a24a"/>';
      return a;
    };
    /* the upper deck behind the face, with the frieze riding on top and light banks above it */
    const deck = (w, lit, banks) => '<path d="M-4 -60L6 -74H' + (w - 6) + 'L' + (w + 4) + ' -60z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, w - 6, -80, 7) +
      '<path d="M6 -80H' + (w - 6) + '" stroke="#f4f1e8" stroke-width="2"/>' + lights(banks || [w * 0.2, w * 0.5, w * 0.8], -80);
    const halo = (c) => '<radialGradient id="ysH"><stop offset="0" stop-color="' + (c || "#ffe9b0") + '" stop-opacity=".55"/><stop offset="1" stop-color="' + (c || "#ffe9b0") + '" stop-opacity="0"/></radialGradient>';
    return {
      css,
      /* straight-on front: face + deck */
      front: (x, y, s, o) => g(x, y, s, deck(o.w || 200, o.lit, o.banks) + face(o.w || 200, o.lit)),
      /* three-quarter view: front face plus the long side running away to the right */
      corner3q: (x, y, s, o) => {
        const lit = o.lit;
        let side = '<path d="M120 -62L200 -50V-4L120 0z" fill="' + (lit ? "#cbbd99" : "#bdb4a0") + '"/><path d="M120 -62L200 -50" stroke="#f1ead8" stroke-width="4"/>';
        for (let i = 0; i < 5; i++) { const x0 = 128 + i * 15, x1 = x0 + 8, t0 = -55 + (x0 - 120) * 0.15, t1 = -55 + (x1 - 120) * 0.15, b0 = -8 + (x0 - 120) * 0.05;
          side += '<path d="M' + x0 + ' ' + b0 + 'V' + (t0 + 10) + 'Q' + ((x0 + x1) / 2) + ' ' + (t0 + 2) + ' ' + x1 + ' ' + (t1 + 10) + 'V' + (b0 - 0.4) + 'z" fill="' + (lit ? "#ffc865" : "#4a4652") + '"' + (lit ? ' opacity=".85"' : '') + '/>'; }
        const top = '<path d="M-4 -60L6 -74H120L200 -62V-50z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, 118, -80, 7) +
          '<path d="M118 -80L198 -68" stroke="#f4f1e8" stroke-width="2"/><path d="M118 -80L198 -68M126 -79v5M138 -77v5M150 -75v5M162 -74v5M174 -72v5M186 -70v5M198 -68v5" fill="none" stroke="#f4f1e8" stroke-width="1.2"/>' +
          '<path d="M6 -80H118" stroke="#f4f1e8" stroke-width="2"/>' + lights([30, 90, 150, 190], -78);
        return g(x, y, s, top + side + face(120, lit));
      },
      /* far off: a low dark mass, the frieze a thin bright lace on top, the lights glowing */
      far: (x, y, s, o) => { let ar = ""; for (let i = 0; i < 15; i++) ar += '<path d="M' + (16 + i * 11.6) + ' -3V-14a3 3 0 0 1 6 0V-3z" fill="' + (o.win ? "#ffcf78" : "#4a4652") + '"/>';
        return halo(o.hc) + g(x, y, s,
        '<ellipse class="ysP" cx="100" cy="-34" rx="' + (o.halo || 120) + '" ry="' + ((o.halo || 120) / 3) + '" fill="url(#ysH)"/>' +
        '<path d="M2 -18V-22Q100 -44 198 -22V-18z" fill="' + (o.c || "#2c3040") + '"/>' +
        '<path d="M6 -27Q100 -48 194 -27" fill="none" stroke="#f4f1e8" stroke-width="1.6"/><path d="M6 -24.5Q100 -45.5 194 -24.5" fill="none" stroke="#f4f1e8" stroke-width="4" stroke-dasharray="1.4 2.2" opacity=".85"/>' +
        lights([[30, -33], [72, -40], [128, -40], [170, -33]], 0, o.off) +
        '<rect x="8" y="-20" width="184" height="20" fill="' + (o.lime || "#c9c0aa") + '"/><rect x="6" y="-22" width="188" height="3" fill="#ece5d2"/>' + ar +
        '<path d="M92 -3V-15a8 8 0 0 1 16 0V-3z" fill="' + (o.win ? "#ffe2a0" : "#3a3640") + '"/><rect x="88" y="-19" width="24" height="3" fill="#c9a24a"/>'); },
      /* the city spread out below a high corner, for the views looking down */
      valley: (y0, c, w) => { let d = '<rect x="0" y="' + y0 + '" width="400" height="' + (226 - y0) + '" fill="' + c + '"/>'; for (let i = 0; i < 70; i++) d += '<rect x="' + ((i * 53) % 400) + '" y="' + (y0 + 4 + (i * 29) % (222 - y0)) + '" width="2" height="2" fill="' + (w || "#ffd98a") + '" opacity=".6"/>'; return d; },
      /* from up on the Highbridge bluff: down into the bowl */
      bowl: (cx, cy, s, o) => {
        let b = '<ellipse rx="100" ry="36" fill="#d8cfba"/><ellipse rx="93" ry="32" fill="#2c4470"/><ellipse rx="80" ry="27" cy="2" fill="#3b5d96"/>' +
          '<ellipse rx="66" ry="21" cy="4" fill="' + (o.day ? "#3fa34a" : "#2f9a3e") + '"/><ellipse rx="54" ry="16" cy="5" fill="none" stroke="#4fb85a" stroke-width="5" opacity=".6"/>' +
          '<path d="M0 22L18 13L0 6L-18 13z" fill="#c08850"/><path d="M0 18L11 13L0 9L-11 13z" fill="#3fa34a"/>' +
          '<rect x="-1.5" y="20.5" width="3" height="3" fill="#fff"/><rect x="16.5" y="11.5" width="3" height="3" fill="#fff"/><rect x="-1.5" y="4.5" width="3" height="3" fill="#fff"/><rect x="-19.5" y="11.5" width="3" height="3" fill="#fff"/>' +
          '<ellipse rx="97" ry="34" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-dasharray="1.4 1.8"/><ellipse rx="98" ry="35" fill="none" stroke="#f4f1e8" stroke-width="1"/>' +
          '<rect x="-20" y="-38" width="40" height="12" fill="#14161c"/><g class="ysK"><path d="M-16 -34h14M2 -34h14M-16 -30h26" stroke="#7fd4ff" stroke-width="1.6"/></g>';
        [[-90, -12], [-50, -32], [50, -32], [90, -12], [-80, 20], [80, 20]].forEach(p => b += '<circle class="ysP" cx="' + p[0] + '" cy="' + (p[1] - 6) + '" r="9" fill="#fff4c8" opacity=".3"/><rect x="' + (p[0] - 5) + '" y="' + (p[1] - 9) + '" width="10" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>');
        return g(cx, cy, s, b);
      },
      /* light in the sky: the horizon tint for dusk, dawn, golden afternoon */
      tint: (top, bottom, y0) => '<linearGradient id="ysT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '" stop-opacity="0"/><stop offset="1" stop-color="' + bottom + '" stop-opacity=".85"/></linearGradient>' +
        '<rect x="0" y="' + (y0 || 0) + '" width="400" height="' + (226 - (y0 || 0)) + '" fill="url(#ysT)"/>',
      halo,
      clouds: (list, c) => list.map((p, i) => '<g class="ysD" style="animation-delay:-' + (i * 3) + 's"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/><ellipse cx="' + (p[0] + p[2] * .3) + '" cy="' + (p[1] - p[2] / 6) + '" rx="' + (p[2] * .5) + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/></g>').join(""),
      plane: (y, dur) => '<g class="ysX" style="animation-duration:' + (dur || 16) + 's"><path d="M0 ' + y + 'h16l4 -2h-6l-5 -5h-3l3 5h-9z" fill="#2a2d36"/><circle class="ysK" cx="2" cy="' + y + '" r="1.6" fill="#ff4a4a"/><circle cx="17" cy="' + y + '" r="1.2" fill="#fff"/></g>',
      blimp: (x, y) => '<g class="ysD"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#d9dde3" stroke="#6b7280" stroke-width="1"/><path d="M' + (x + 22) + ' ' + y + 'l10 -8v16z" fill="#9aa1aa"/><rect x="' + (x - 6) + '" y="' + (y + 8) + '" width="12" height="4" rx="1" fill="#3a3f48"/>' +
        '<rect class="ysK" x="' + (x - 16) + '" y="' + (y - 2) + '" width="28" height="4" rx="2" fill="#ffd66b"/></g>',
      fireworks: (list) => list.map((p, i) => { let r = ""; for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; r += 'M' + p[0] + ' ' + p[1] + 'l' + (Math.cos(a) * p[2]).toFixed(1) + ' ' + (Math.sin(a) * p[2]).toFixed(1); }
        return '<path class="ysF" style="animation-delay:-' + (i * 0.9) + 's" d="' + r + '" stroke="' + p[3] + '" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2"/>'; }).join(""),
      beams: (list) => list.map((p, i) => '<path class="ysB" style="animation-delay:-' + (i * 2.4) + 's" d="M' + p[0] + ' ' + p[1] + 'l-9 -' + p[2] + 'h18z" fill="#fff6d8" opacity=".16"/>').join(""),
      birds: (x, y) => '<g class="ysX" style="animation-duration:22s"><path d="M' + x + ' ' + y + 'q3 -3 6 0q3 -3 6 0M' + (x + 14) + ' ' + (y - 6) + 'q2 -2 4 0q2 -2 4 0M' + (x - 10) + ' ' + (y - 4) + 'q2 -2 4 0q2 -2 4 0" fill="none" stroke="#22252e" stroke-width="1.3"/></g>',
      flags: (list) => list.map((p, i) => '<path d="M' + p[0] + ' ' + p[1] + 'v-' + p[2] + '" stroke="#e6e6e6" stroke-width="1"/><g class="ysW" style="animation-delay:-' + (i * 0.3) + 's"><rect x="' + p[0] + '" y="' + (p[1] - p[2]) + '" width="' + (p[2] * .6) + '" height="' + (p[2] * .38) + '" fill="' + (i % 2 ? "#1f3a8a" : "#e8303a") + '"/><path d="M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .13) + 'h' + (p[2] * .6) + 'M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .26) + 'h' + (p[2] * .6) + '" stroke="#fff" stroke-width=".8"/></g>').join(""),
      /* an el: girder, posts, and a 4 (or 5) train rolling across it */
      el: (x0, x1, y, s, n) => {
        let p = '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + (4 * s) + '" fill="#2f3a33"/>';
        for (let x = x0 + 6; x < x1; x += 26 * s) p += '<rect x="' + x + '" y="' + y + '" width="' + (2 * s) + '" height="' + (40 * s) + '" fill="#2f3a33"/>';
        let cars = ""; for (let c = 0; c < 3; c++) cars += '<rect x="' + (c * 34 * s) + '" y="' + (y - 11 * s) + '" width="' + (32 * s) + '" height="' + (11 * s) + '" rx="' + (2 * s) + '" fill="#c3c8cf" stroke="#6b7280" stroke-width=".8"/><path d="M' + (c * 34 * s + 4 * s) + ' ' + (y - 7 * s) + 'h' + (24 * s) + '" stroke="#ffe9b0" stroke-width="' + (3 * s) + '" stroke-dasharray="' + (4 * s) + ' ' + (2 * s) + '"/>';
        return p + '<g class="ysX" style="animation-duration:11s">' + cars + '<circle cx="' + (96 * s) + '" cy="' + (y - 5.5 * s) + '" r="' + (4.5 * s) + '" fill="#00933c"/><text x="' + (96 * s) + '" y="' + (y - 3.3 * s) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (6 * s) + '" fill="#fff">' + (n || "4") + '</text></g>';
      },
      /* falling weather, looped in a box: rain streaks or snow */
      weather: (x, y, w, h, kind) => { let d = ""; for (let i = 0; i < Math.round(w * 60 / 300); i++) { const px = x + (i * 37) % w, py0 = (i * 23) % 60;
        for (let py = y - 60 + py0; py < y + h; py += 60) d += kind === "snow" ? '<circle cx="' + px + '" cy="' + py + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".85"/>' : '<path d="M' + px + ' ' + py + 'l-2 9" stroke="#b9c8dc" stroke-width="1" opacity=".6"/>'; }
        return '<clipPath id="ysC"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/></clipPath><g clip-path="url(#ysC)"><g class="ysS' + (kind === "snow" ? "" : " ysR") + '">' + d + '</g></g>'; },
      fog: (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" opacity=".38"/><g class="ysD"><ellipse cx="' + (x + w * .3) + '" cy="' + (y + h * .55) + '" rx="' + (w * .4) + '" ry="' + (h * .18) + '" fill="' + c + '" opacity=".45"/><ellipse cx="' + (x + w * .75) + '" cy="' + (y + h * .35) + '" rx="' + (w * .35) + '" ry="' + (h * .14) + '" fill="' + c + '" opacity=".4"/></g>',
      moon: (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 8) + '" fill="#fff1d6" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff1d6"/><circle cx="' + (x - r * .3) + '" cy="' + (y - r * .2) + '" r="' + (r * .2) + '" fill="#e8dcc0"/><circle cx="' + (x + r * .35) + '" cy="' + (y + r * .3) + '" r="' + (r * .14) + '" fill="#e8dcc0"/>',
      river: (x0, x1, y, h) => '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + h + '" fill="#1c2a44"/><g class="ysD"><path d="M' + (x0 + 10) + ' ' + (y + 3) + 'h30M' + (x0 + 70) + ' ' + (y + 6) + 'h22M' + (x0 + 130) + ' ' + (y + 4) + 'h26" stroke="#ffcf78" stroke-width="1.4" opacity=".7"/></g>'
    };
  })();
  const base = window.SCENES.corner;
  window.SCENES.corner = function () {
    const art = '<g>' + Y.css +
      Y.moon(150, 32, 24) + Y.far(66, 74, .55, { c: "#1a1726", halo: 60 }) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
