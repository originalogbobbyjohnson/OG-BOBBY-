/* jillscott scenes (Regions tab: Philadelphia; North Philly, her childhood block is the 2300 block of W Oakdale St near 23rd & Lehigh). CSS classes prefixed js- (the page's own anim-train is kept).
   1 Lehigh Av & 23rd St on SEPTA's Route 54 bus: North Philly rowhomes with porch awnings, a white SEPTA bus with red and blue stripes sliding in.
   2 The Philadelphia High School for Girls at Broad & Olney ("Girls' High", her school): the long modern tan-brick school, ribbon windows, a golden mural on the side wall (sunflowers and a mic, no faces), the flag waving.
   3 Mitten Hall at Temple University on North Broad, where she studied: gray Collegiate Gothic stone, the big pointed-arch window, crenellated parapet, cherry banners swaying.
   4 The Philadelphia Music Alliance Walk of Fame on the Avenue of the Arts: bronze sidewalk plaques (one with her name), the Academy of Music's brownstone front and its tall glowing lamps behind.
   5 W Oakdale St and N 23rd St, her childhood block: green signs, JILL SCOTT tagged on the brick wall, the Comcast towers of Center City glowing gold behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jsglow{0%,100%{opacity:.45}50%{opacity:1}}.js-glow{animation:jsglow 2.6s ease-in-out infinite}.js-glow2{animation-delay:-1.3s}' +
    '@keyframes jsflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.92)}}.js-flag{transform-box:fill-box;transform-origin:0% 50%;animation:jsflag 1.4s ease-in-out infinite}' +
    '@keyframes jssway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.js-sway{transform-box:fill-box;transform-origin:50% 0%;animation:jssway 2.2s ease-in-out infinite}.js-sway2{animation-delay:-1.1s}' +
    '@keyframes jsnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.js-note{animation:jsnote 3.4s linear infinite}.js-n2{animation-delay:-1.1s}.js-n3{animation-delay:-2.2s}' +
    '@keyframes jscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.js-car{animation:jscar 7s linear infinite}' +
    '@keyframes jsbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.js-bird{animation:jsbird 15s linear infinite}' +
    '@keyframes jsleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(30px,120px) rotate(220deg);opacity:0}}.js-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:jsleaf 4.4s linear infinite}.js-l2{animation-delay:-1.5s}.js-l3{animation-delay:-2.9s}' +
    '@keyframes jsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.js-sp{animation:jsspray 1.4s ease-out infinite}.js-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "js-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const GOLD = "#f2c14e", TERRA = "#e07a5f", SAGE = "#81b29a", BUS = "#1f4e79", CHERRY = "#9d2235";
  /* North Philly two-story brick rowhomes with porch awnings */
  const rowhomes = (x0, y, n, w, h) => {
    const bricks = ["#9a4a36", "#8a3e2e", "#a8563c", "#7e3a2c"], awn = [SAGE, TERRA, "#3f6a8a", GOLD];
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + i * w;
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + bricks[i % 4] + '" stroke="#5a2a1e" stroke-width="1"/>' +
        '<rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#4a3a32"/>' +
        '<rect x="' + (x + 8) + '" y="' + (y + 8) + '" width="12" height="14" fill="#2c3440" stroke="#e8e0d0" stroke-width="1.5"/><rect x="' + (x + w - 20) + '" y="' + (y + 8) + '" width="12" height="14" fill="#2c3440" stroke="#e8e0d0" stroke-width="1.5"/>' +
        '<path d="M' + (x + 2) + ' ' + (y + h - 22) + 'h' + (w - 4) + 'l-4 -8h-' + (w - 12) + 'z" fill="' + awn[i % 4] + '"/>' +
        '<rect x="' + (x + w / 2 - 6) + '" y="' + (y + h - 20) + '" width="12" height="20" fill="#3a2a20"/>';
    }
    return s;
  };

  /* 1. Lehigh Av & 23rd St, Route 54 bus */
  function jsstation() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="300" height="74" rx="10" fill="#eef0f2" stroke="#7a8088" stroke-width="2"/>' +
      '<rect x="300" y="134" width="36" height="40" rx="4" fill="#1f2830"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="138" width="32" height="26" rx="3" fill="#1f2830"/>').join("") +
      '<rect x="40" y="172" width="300" height="5" fill="#c8102e"/><rect x="40" y="178" width="300" height="5" fill="#1f4e9a"/>' +
      '<rect x="56" y="131" width="78" height="5" rx="2" fill="#111"/><text x="95" y="135.5" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">54 LEHIGH</text>' +
      '<rect x="302" y="122" width="34" height="10" rx="2" fill="#111"/><text x="319" y="130" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">54</text>' +
      '<circle cx="332" cy="190" r="4" fill="#fff6c2"/><rect x="60" y="184" width="22" height="16" fill="#cfd3d8" stroke="#7a8088"/>' +
      '<circle cx="96" cy="203" r="10" fill="#2a2a2a"/><circle cx="96" cy="203" r="4" fill="#9a9a9a"/><circle cx="286" cy="203" r="10" fill="#2a2a2a"/><circle cx="286" cy="203" r="4" fill="#9a9a9a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#js-s1)"/>' +
      '<g class="js-bird"><path d="M0 34q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a2a3a" stroke-width="1.5"/></g>' +
      rowhomes(0, 56, 8, 50, 66) +
      '<rect x="0" y="122" width="400" height="10" fill="#b8b2a6"/>' +
      '<rect x="0" y="132" width="400" height="80" fill="#5a5856"/><path d="M0 172h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="0" y="212" width="400" height="48" fill="#a8a29a"/><rect x="0" y="212" width="400" height="3" fill="#d8d2c6"/>' +
      '<rect x="370" y="140" width="5" height="90" fill="#2f2f2f"/><rect x="358" y="140" width="30" height="34" rx="2" fill="#fff" stroke="' + BUS + '" stroke-width="2"/><rect x="358" y="140" width="30" height="10" fill="' + BUS + '"/>' +
      '<text x="373" y="148" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS</text><text x="373" y="166" text-anchor="middle" ' + font + ' font-size="13" fill="' + BUS + '">54</text>' +
      '<rect x="40" y="222" width="300" height="30" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(52, 237, "54", BUS) +
      '<text x="208" y="243" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Lehigh Av &amp; 23rd St</text>',
      sky("js-s1", "#f4a76a", "#fbe6c4"));
  }

  /* 2. Philadelphia High School for Girls, Broad & Olney */
  function jsgirlshigh() {
    return svg(
      '<rect width="400" height="260" fill="url(#js-s2)"/>' +
      tree(20, 140, 1.6, "#4a8a3e") + tree(386, 142, 1.6, "#3f7a3a") +
      '<rect x="40" y="70" width="250" height="100" fill="#d9c7a3"/>' +
      [84, 112, 140].map(y => '<rect x="48" y="' + y + '" width="234" height="16" fill="#3e5a70"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (48 + i * 18) + ' ' + y + 'v16" stroke="#e8e0cc" stroke-width="2"/>').join("")).join("") +
      '<rect x="36" y="64" width="258" height="8" fill="#efe6d2"/>' +
      '<rect x="120" y="150" width="90" height="20" fill="#2c3e50"/><rect x="110" y="146" width="110" height="6" fill="#efe6d2"/>' +
      '<rect x="62" y="56" width="206" height="10" fill="#efe6d2"/><text x="165" y="64" text-anchor="middle" ' + font + ' font-size="7" fill="#5a4a32">PHILADELPHIA HIGH SCHOOL FOR GIRLS</text>' +
      /* mural wall */
      '<rect x="290" y="80" width="80" height="90" fill="#c8b48e"/><rect x="294" y="84" width="72" height="82" fill="#2b2a4a"/>' +
      '<circle class="js-glow" cx="330" cy="112" r="22" fill="' + GOLD + '" opacity=".8"/>' +
      Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (330 + Math.cos(a) * 24).toFixed(1) + ' ' + (112 + Math.sin(a) * 24).toFixed(1) + 'L' + (330 + Math.cos(a) * 32).toFixed(1) + ' ' + (112 + Math.sin(a) * 32).toFixed(1) + '" stroke="' + GOLD + '" stroke-width="3"/>'; }).join("") +
      '<rect x="326" y="100" width="8" height="18" rx="4" fill="#2b2a4a"/><path d="M322 112q8 12 16 0M330 124v10" fill="none" stroke="#2b2a4a" stroke-width="2"/>' +
      [306, 354].map(x => '<path d="M' + x + ' 166v-20" stroke="#4a8a3e" stroke-width="2"/><circle cx="' + x + '" cy="144" r="7" fill="' + GOLD + '"/><circle cx="' + x + '" cy="144" r="3" fill="#6a3a1a"/>').join("") +
      '<text x="330" y="160" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">WORDS AND SOUNDS</text>' +
      /* flag */
      '<rect x="20" y="40" width="3" height="130" fill="#c9ced4"/><g class="js-flag"><rect x="23" y="42" width="34" height="22" fill="#fff"/>' + [0, 2, 4, 6].map(i => '<rect x="23" y="' + (42 + i * 3.2) + '" width="34" height="1.6" fill="#b22234"/>').join("") + '<rect x="23" y="42" width="14" height="11" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="170" width="400" height="20" fill="#bfb8aa"/><rect x="0" y="190" width="400" height="70" fill="#4e4c4a"/><path d="M0 225h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="js-car"><rect x="0" y="200" width="58" height="14" rx="5" fill="' + TERRA + '"/><rect x="12" y="192" width="32" height="10" rx="3" fill="' + TERRA + '"/><circle cx="12" cy="215" r="4" fill="#111"/><circle cx="46" cy="215" r="4" fill="#111"/></g>' +
      '<rect x="300" y="236" width="94" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="347" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">N Broad St</text>',
      sky("js-s2", "#8fc8ee", "#f2ead6"));
  }

  /* 3. Mitten Hall, Temple University */
  function jsmitten() {
    const stones = (x, y, w, h) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#7d7a74"/>'; for (let r = 0; r * 8 < h; r++) for (let c = 0; c * 16 < w; c++) { const sx = x + c * 16 + (r % 2) * 8, sy = y + r * 8; if (sx + 13 <= x + w && sy + 6 <= y + h) s += '<rect x="' + sx + '" y="' + sy + '" width="13" height="6" rx="2" fill="none" stroke="#625f5a" stroke-width=".7"/>'; } return s; };
    const banner = (x, cls) => '<rect x="' + (x - 1.5) + '" y="96" width="3" height="96" fill="#2f2f2f"/><circle cx="' + x + '" cy="96" r="5" fill="#fff6c2" class="js-glow"/><g class="js-sway ' + cls + '"><rect x="' + (x + 2) + '" y="108" width="16" height="34" fill="' + CHERRY + '"/><path d="M' + (x + 2) + ' 142l8 -6l8 6z" fill="#7a1a28"/><circle cx="' + (x + 10) + '" cy="122" r="4" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#js-s3)"/>' +
      tree(26, 150, 1.8, "#c8642a") + tree(378, 150, 1.8, "#d98a2a") +
      stones(80, 60, 240, 130) +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (80 + i * 20) + '" y="50" width="12" height="12" fill="#8a8780"/>').join("") +
      '<rect x="72" y="40" width="20" height="150" fill="#8a8780"/><rect x="308" y="40" width="20" height="150" fill="#8a8780"/>' +
      [72, 308].map(x => '<rect x="' + x + '" y="32" width="6" height="10" fill="#8a8780"/><rect x="' + (x + 14) + '" y="32" width="6" height="10" fill="#8a8780"/>').join("") +
      '<path d="M160 160v-60q40 -46 80 0v60z" fill="#d8d0bc"/><path d="M166 160v-58q34 -38 68 0v58z" fill="#2c3e50"/>' +
      '<path d="M200 66v94M166 110h68M166 132h68M183 74v86M217 74v86" stroke="#d8d0bc" stroke-width="2"/>' +
      '<rect class="js-glow" x="168" y="112" width="64" height="46" fill="#ffd98a" opacity=".35"/>' +
      [100, 270].map(x => '<path d="M' + x + ' 140v-30q15 -18 30 0v30z" fill="#2c3e50" stroke="#d8d0bc" stroke-width="3"/>').join("") +
      '<rect x="176" y="160" width="48" height="30" fill="#4a2a20"/><path d="M176 160q24 -20 48 0" fill="#d8d0bc"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#a8a29a"/><rect x="0" y="190" width="400" height="4" fill="#d8d2c6"/>' +
      banner(46, "") + banner(354, "js-sway2") +
      '<text x="200" y="214" text-anchor="middle" ' + font + ' font-size="13" fill="#3a2a20">MITTEN HALL</text>' +
      '<g fill="#2a2a2a"><rect x="120" y="222" width="8" height="18" rx="3"/><circle cx="124" cy="217" r="5"/><rect x="262" y="224" width="8" height="18" rx="3"/><circle cx="266" cy="219" r="5"/><rect x="270" y="230" width="10" height="7" fill="' + CHERRY + '"/></g>' +
      ['#e8a33a', '#d2692a', '#e8c43a'].map((c, i) => '<g class="js-leaf' + (i ? " js-l" + (i + 1) : "") + '"><ellipse cx="' + (60 + i * 130) + '" cy="' + (30 + i * 20) + '" rx="4" ry="2" fill="' + c + '"/></g>').join(""),
      sky("js-s3", "#9ccbea", "#f2e2c8"));
  }

  /* 4. Walk of Fame plaques on the Avenue of the Arts, the Academy of Music behind */
  function jswalk() {
    const lamp = (x, cls) => '<rect x="' + (x - 2) + '" y="70" width="4" height="120" fill="#1f1f1f"/><rect x="' + (x - 6) + '" y="186" width="12" height="6" fill="#1f1f1f"/>' +
      [-12, 0, 12].map(d => '<circle class="js-glow ' + cls + '" cx="' + (x + d) + '" cy="' + (d ? 66 : 58) + '" r="7" fill="#fff2c2"/><circle cx="' + (x + d) + '" cy="' + (d ? 66 : 58) + '" r="10" fill="#ffe08a" opacity=".25"/>').join("") +
      '<path d="M' + (x - 12) + ' 74h24" stroke="#1f1f1f" stroke-width="2"/>';
    const plaque = (x, y, name) => '<g transform="skewX(-20)"><rect x="' + x + '" y="' + y + '" width="62" height="22" rx="2" fill="#a8783a" stroke="#6a4a1a" stroke-width="1.5"/><circle cx="' + (x + 11) + '" cy="' + (y + 11) + '" r="7" fill="#d4a24a" stroke="#6a4a1a"/><circle cx="' + (x + 11) + '" cy="' + (y + 11) + '" r="2" fill="#6a4a1a"/>' +
      (name ? '<text x="' + (x + 40) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="7" fill="#2a1a0a">' + name + '</text>' : '<path d="M' + (x + 24) + ' ' + (y + 9) + 'h30M' + (x + 24) + ' ' + (y + 14) + 'h22" stroke="#6a4a1a" stroke-width="1.5"/>') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#js-s4)"/>' + stars(14) +
      '<rect x="60" y="40" width="280" height="140" fill="#8a4a36"/><rect x="56" y="34" width="288" height="8" fill="#c8a07a"/><rect x="56" y="98" width="288" height="5" fill="#c8a07a"/>' +
      [84, 132, 180, 228, 276].map(x => '<path d="M' + x + ' 92v-34q12 -14 24 0v34z" fill="#ffd98a" class="js-glow" opacity=".7"/><path d="M' + x + ' 92v-34q12 -14 24 0v34z" fill="none" stroke="#e8d0a8" stroke-width="2"/>').join("") +
      [84, 132, 180, 228, 276].map(x => '<rect x="' + x + '" y="112" width="24" height="56" fill="#2a1a14" stroke="#e8d0a8" stroke-width="2"/>').join("") +
      '<rect x="60" y="168" width="280" height="12" fill="#c8a07a"/>' +
      lamp(40, "") + lamp(360, "js-glow2") +
      '<rect x="0" y="180" width="400" height="80" fill="#8c867c"/><rect x="0" y="180" width="400" height="3" fill="#b8b2a6"/>' +
      plaque(120, 196, "") + plaque(200, 196, "JILL SCOTT") + plaque(150, 228, "") + plaque(230, 228, "") +
      '<g class="js-note"><text x="300" y="200" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="js-note js-n2"><text x="94" y="206" font-size="16" fill="' + SAGE + '">&#9835;</text></g><g class="js-note js-n3"><text x="330" y="236" font-size="14" fill="' + TERRA + '">&#9834;</text></g>' +
      '<rect x="296" y="244" width="98" height="14" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="345" y="254.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">S Broad St</text>',
      sky("js-s4", "#121a3a", "#4a3a6a"));
  }

  /* 5. W Oakdale St & N 23rd St */
  function jscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#js-s5)"/>' +
      /* Comcast Technology Center: tall glass tower with an open lantern top */
      '<rect x="170" y="14" width="44" height="130" fill="#6f8aa0"/><rect x="170" y="14" width="44" height="22" fill="url(#js-s5)" opacity=".85"/>' +
      '<path d="M170 14h44M170 36h44" stroke="#9fb4c6" stroke-width="2"/><path d="M176 14v22M192 14v22M208 14v22" stroke="#9fb4c6" stroke-width="1.5"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M170 ' + (44 + i * 10) + 'h44" stroke="#8aa2b6" stroke-width=".8"/>').join("") +
      '<rect class="js-glow" x="174" y="40" width="10" height="100" fill="' + GOLD + '" opacity=".35"/>' +
      /* Comcast Center: glass obelisk with a sloped top */
      '<path d="M236 144v-100l16 -10l16 10v100z" fill="#7d96a8"/><path d="M252 34v110" stroke="#9fb4c6" stroke-width="1.2"/>' +
      '<rect x="120" y="80" width="30" height="64" fill="#5a6e80"/><rect x="290" y="92" width="26" height="52" fill="#5a6e80"/><rect x="96" y="104" width="22" height="40" fill="#4e6070"/>' +
      '<rect x="0" y="120" width="400" height="104" fill="#8a3e2e"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#743226" stroke-width="1"/>').join("") +
      '<rect x="0" y="116" width="400" height="6" fill="#4a3a32"/>' +
      tag("JILL SCOTT", 18, 184, 42, GOLD, -6) + tag("NORF SIDE", 250, 172, 22, SAGE, -4) + tag("JILLY", 34, 214, 20, "#fff", -3) + tag("GOLDEN", 196, 212, 20, TERRA, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="js-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + SAGE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + SAGE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(296, 100, 104, "W Oakdale St") + sign(312, 126, 88, "N 23rd St") +
      '<g class="js-sp"><circle cx="196" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="js-sp js-sp2"><circle cx="202" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("js-s5", "#f0a24e", "#fbe0a8"));
  }

  window.SCENES = { jsstation: jsstation, jsgirlshigh: jsgirlshigh, jsmitten: jsmitten, jswalk: jswalk, jscorner: jscorner };
})();
