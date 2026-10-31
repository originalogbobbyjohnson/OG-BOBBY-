/* Upper West Side opening scenes for the Wiki game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes glow{0%,100%{opacity:.75}50%{opacity:1}}' +
    '.glw{animation:glow 3s ease-in-out infinite}' +
    '@keyframes boat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 18s linear infinite}' +
    '@keyframes strut{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}' +
    '.strut{animation:strut 9s ease-in-out infinite}' +
    '@keyframes fan{0%,30%,100%{transform:scale(.25,.25)}45%,85%{transform:scale(1,1)}}' +
    '.fan{transform-box:fill-box;transform-origin:50% 100%;animation:fan 9s ease-in-out infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.bannr{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}.bn2{animation-delay:1.1s}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-60px,200px) rotate(260deg);opacity:0}}' +
    '.leaf{animation:leaf 6s linear infinite}.lf2{animation-delay:2s}.lf3{animation-delay:4s}' +
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
  const PINK = "#ff6fb5", GOLD = "#ffd23f", SKY = "#5ad1ff", RED = "#ee352e";

  /* 1. The 1 pulling into 96 St, underground on Broadway: white tile, red-and-cream tile band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d4cfc2" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d4cfc2" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 20) band += '<rect x="' + x + '" y="30" width="10" height="9" fill="#a3322a"/><rect x="' + (x + 10) + '" y="30" width="10" height="9" fill="#e9dcc0"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efeadf"/>' + tiles + band +
      '<rect x="56" y="54" width="288" height="36" rx="4" fill="#111"/>' +
      '<rect x="56" y="54" width="288" height="4" fill="#fff"/>' +
      '<text x="70" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">96 St</text>' +
      bullet(262, 73, "1", RED) + bullet(288, 73, "2", RED) + bullet(314, 73, "3", RED) +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
        bullet(296, 142, "1", RED) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("RATKING", 24, 240, 30, PINK, -4) + tag("WIKI", 300, 242, 32, GOLD, -8));
  }

  /* 2. Riverside Park: the white marble Soldiers' and Sailors' Monument at 89th St, the Hudson at sunset, a barge sliding by */
  function riverside() {
    let cols = "";
    for (let i = 0; i < 9; i++) { const x = 136 + i * 16; cols += '<rect x="' + x + '" y="104" width="7" height="62" fill="#f3efe6"/><rect x="' + (x - 2) + '" y="100" width="11" height="5" fill="#fffaf0"/><path d="M' + (x + 7) + ' 104v62" stroke="#c9c2b2" stroke-width="1.5"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="70" cy="96" r="22" fill="#ffd27a" opacity=".9"/>' +
      /* Palisades across the river */
      '<path d="M0 132q60-12 120-6t130-4 150 2v20H0z" fill="#3b2c4a"/>' +
      '<rect x="0" y="146" width="400" height="40" fill="#4f6d8f"/>' +
      '<path d="M0 156h400M0 168h400M0 178h400" stroke="#8fb4d6" stroke-width="1" opacity=".5" stroke-dasharray="14 18"/>' +
      '<g class="boat"><rect x="0" y="158" width="44" height="8" fill="#2a2230"/><rect x="28" y="150" width="12" height="8" fill="#e04a3a"/></g>' +
      /* terrace + monument */
      '<rect x="0" y="186" width="400" height="74" fill="#2c3a2a"/>' +
      '<rect x="100" y="166" width="200" height="14" fill="#d8d1c2"/><rect x="88" y="180" width="224" height="14" fill="#c9c2b2"/>' +
      '<rect x="128" y="96" width="144" height="6" fill="#e9e3d6"/>' + cols +
      '<rect x="124" y="84" width="152" height="14" fill="#f3efe6"/><path d="M124 98h152" stroke="#c9c2b2" stroke-width="2"/>' +
      '<path d="M140 84q60-34 120 0z" fill="#ebe5d8"/><rect x="192" y="50" width="16" height="8" fill="#ebe5d8"/><path d="M194 50q6-22 12 0z" fill="#ebe5d8"/><circle cx="200" cy="30" r="3" fill="#ebe5d8"/>' +
      /* trees */
      '<circle cx="40" cy="176" r="26" fill="#3d5a2e"/><circle cx="360" cy="172" r="30" fill="#3d5a2e"/><circle cx="382" cy="186" r="22" fill="#4a6b36"/>' +
      '<path class="leaf" d="M330 120q4-6 8 0q-4 6-8 0z" fill="#e8a33a"/><path class="leaf lf2" d="M300 110q4-6 8 0q-4 6-8 0z" fill="#c9562c"/><path class="leaf lf3" d="M80 116q4-6 8 0q-4 6-8 0z" fill="#e8a33a"/>' +
      '<rect x="128" y="214" width="144" height="26" rx="3" fill="#123d2a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="232" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="2" fill="#fff">RIVERSIDE PARK</text>',
      sky("g2", "#2a1840", "#f08a5d"));
  }

  /* 3. The Cathedral of St. John the Divine on Amsterdam Av: gray granite front, the great rose window glowing, the unfinished towers, a peacock strutting */
  function cathedral() {
    let petals = "";
    for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, x = 200 + Math.cos(a) * 22, y = 92 + Math.sin(a) * 22; petals += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="7" fill="' + ["#3b5bdb", "#c92a2a", "#7048e8", "#f59f00"][i % 4] + '"/>'; }
    let spokes = "";
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; spokes += '<path d="M200 92L' + (200 + Math.cos(a) * 34).toFixed(1) + ' ' + (92 + Math.sin(a) * 34).toFixed(1) + '" stroke="#5e5a52" stroke-width="2"/>'; }
    const portal = (x, w, h) => '<path d="M' + x + ' 230v-' + (h - w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0v' + (h - w / 2) + 'z" fill="#a39a88"/><path d="M' + (x + 5) + ' 230v-' + (h - w / 2) + 'a' + (w / 2 - 5) + ' ' + (w / 2 - 5) + ' 0 0 1 ' + (w - 10) + ' 0v' + (h - w / 2) + 'z" fill="#6b4a2a"/><path d="M' + (x + w / 2) + ' 230v-' + (h - w / 2 - 4) + '" stroke="#3e2a16" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(20) +
      /* towers (flat-topped, never finished) */
      '<rect x="60" y="40" width="80" height="190" fill="#b5ad9c"/><rect x="260" y="40" width="80" height="190" fill="#b5ad9c"/>' +
      '<path d="M80 60v40M100 60v40M120 60v40M280 60v40M300 60v40M320 60v40" stroke="#7d7566" stroke-width="5"/>' +
      '<rect x="56" y="36" width="88" height="8" fill="#c7bfae"/><rect x="256" y="36" width="88" height="8" fill="#c7bfae"/>' +
      /* center gable */
      '<path d="M140 230V70l60-40 60 40v160z" fill="#c2baa8"/>' +
      '<path d="M140 70l60-40 60 40" fill="none" stroke="#8d8574" stroke-width="3"/>' +
      '<circle cx="200" cy="92" r="38" fill="#4a463e"/>' +
      '<g class="glw">' + petals + '<circle cx="200" cy="92" r="10" fill="#ffd43b"/></g>' + spokes +
      '<circle cx="200" cy="92" r="38" fill="none" stroke="#8d8574" stroke-width="4"/>' +
      portal(168, 64, 80) + portal(76, 46, 60) + portal(278, 46, 60) +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3a36"/><rect x="0" y="228" width="400" height="4" fill="#8d8574"/>' +
      /* the cathedral peacock */
      '<g class="strut"><g transform="translate(30 186) scale(1.5)">' +
        '<g class="fan"><path d="M10 18q-30-34 0-48q30 14 0 48z" fill="#1e7a5a"/><circle cx="10" cy="-18" r="3" fill="#ffd23f"/><circle cx="2" cy="-6" r="2.5" fill="#3b5bdb"/><circle cx="18" cy="-6" r="2.5" fill="#3b5bdb"/></g>' +
        '<ellipse cx="10" cy="16" rx="9" ry="6" fill="#1c5fb8"/><path d="M14 12q4-12 2-18" stroke="#1c5fb8" stroke-width="3" fill="none"/><circle cx="16" cy="-6" r="3" fill="#1c5fb8"/><path d="M18 -6l4 1-4 1z" fill="#e8b84a"/>' +
        '<path d="M7 21v5M12 21v5" stroke="#c9a24a" stroke-width="1.5"/>' +
      '</g></g>',
      sky("g3", "#0b1430", "#3b4a7a"));
  }

  /* 4. The American Museum of Natural History on Central Park West: pale pink granite, the big arch, four Ionic columns, banners swaying */
  function museum() {
    let cols = "";
    [92, 136, 250, 294].forEach(x => cols += '<rect x="' + x + '" y="86" width="14" height="104" fill="#e6cfc2"/><path d="M' + (x - 4) + ' 86h22" stroke="#cdb3a5" stroke-width="5"/><circle cx="' + (x - 2) + '" cy="88" r="3" fill="#cdb3a5"/><circle cx="' + (x + 16) + '" cy="88" r="3" fill="#cdb3a5"/>' +
      '<rect x="' + (x - 3) + '" y="62" width="20" height="16" fill="#d9bfb1"/>');
    let steps = "";
    for (let i = 0; i < 5; i++) steps += '<rect x="' + (60 - i * 8) + '' + '" y="' + (190 + i * 7) + '" width="' + (280 + i * 16) + '" height="7" fill="' + (i % 2 ? "#cdb3a5" : "#d9bfb1") + '"/>';
    const banner = (x, c, cls) => '<g class="bannr ' + cls + '"><rect x="' + x + '" y="98" width="16" height="54" fill="' + c + '"/><circle cx="' + (x + 8) + '" cy="120" r="5" fill="#fff" opacity=".8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<rect x="20" y="70" width="360" height="150" fill="#dcc3b5"/>' +
      '<rect x="14" y="44" width="372" height="22" fill="#e6cfc2"/><path d="M14 66h372" stroke="#b89c8d" stroke-width="3"/>' +
      '<text x="200" y="60" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="4" fill="#8a6e60">TRUTH · KNOWLEDGE · VISION</text>' +
      /* the great arch */
      '<path d="M162 190v-70a38 38 0 0 1 76 0v70z" fill="#3a2a24"/><path d="M162 190v-70a38 38 0 0 1 76 0v70" fill="none" stroke="#b89c8d" stroke-width="4"/>' +
      '<rect x="176" y="140" width="48" height="50" fill="#e9c46a" opacity=".55"/>' +
      cols + banner(118, "#2b6cb0", "") + banner(266, "#c2410c", "bn2") + steps +
      '<rect x="0" y="225" width="400" height="35" fill="#2b2f33"/>' +
      '<circle cx="12" cy="120" r="34" fill="#2f5d3a"/><circle cx="392" cy="116" r="36" fill="#2f5d3a"/>' +
      '<path class="leaf" d="M370 80q4-6 8 0q-4 6-8 0z" fill="#e8a33a"/><path class="leaf lf2" d="M30 90q4-6 8 0q-4 6-8 0z" fill="#c9562c"/>' +
      tag("WIKSET", 30, 252, 22, PINK, -4),
      sky("g4", "#5d7fa8", "#c7d7e6"));
  }

  /* 5. W 96 St and Broadway: the glass subway entrance on the Broadway mall, street signs, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      /* brick wall with the tags */
      '<rect x="14" y="64" width="236" height="156" fill="#5b2f26"/>' +
      (function () { let b = ""; for (let y = 64; y < 220; y += 12) for (let x = ((y - 64) / 12) % 2 ? 0 : 14; x < 250; x += 28) b += '<path d="M' + x + ' ' + y + 'v12" stroke="#43211b" stroke-width="1.5"/>'; for (let y = 76; y < 220; y += 12) b += '<path d="M14 ' + y + 'h236" stroke="#43211b" stroke-width="1.5"/>'; return b; })() +
      tag("WIKI", 34, 148, 46, PINK, -7) + tag("UPPER WEST", 46, 196, 24, SKY, -3) +
      /* glass subway headhouse */
      '<rect x="268" y="170" width="110" height="50" rx="4" fill="#9cc8dc" opacity=".55" stroke="#dfe9ee" stroke-width="2"/>' +
      '<path d="M268 170l55-14 55 14" fill="#cfe3ec" opacity=".6" stroke="#dfe9ee" stroke-width="2"/>' +
      '<rect x="300" y="182" width="46" height="8" fill="#111"/><text x="323" y="189" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#fff">96 St</text>' +
      '<circle class="flk" cx="276" cy="164" r="5" fill="#32c060"/><circle class="flk flk2" cx="370" cy="164" r="5" fill="#32c060"/>' +
      /* sign pole */
      '<rect x="300" y="60" width="5" height="110" fill="#1d2329"/>' +
      '<rect x="262" y="68" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="81" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 96 St</text>' +
      '<rect x="258" y="90" width="90" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Broadway</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#140c22", "#3a2650"));
  }

  window.SCENES = { train, riverside, cathedral, museum, corner };
})();
