/* Far Rockaway, Queens opening scenes for MC Serch's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1s steps(1) infinite}.b2{animation-delay:-.25s}.b3{animation-delay:-.5s}.b4{animation-delay:-.75s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}.slow{animation-duration:9s}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sway{animation:sway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}.sw2{animation-delay:-1.5s}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:.0}20%{opacity:.6}100%{transform:translateY(-60px);opacity:0}}.rise{animation:rise 4s linear infinite}.r2{animation-delay:-1.3s}.r3{animation-delay:-2.6s}' +
    '@keyframes slide{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.slide{animation:slide 14s linear infinite;animation-delay:-5s}.sd2{animation-delay:-11s}' +
    '@keyframes slideL{from{transform:translateX(480px)}to{transform:translateX(-160px)}}.slideL{animation:slideL 11s linear infinite;animation-delay:-3s}.sd3{animation-delay:-5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,240px) rotate(300deg);opacity:.8}}.fall{animation:fall 6s linear infinite}.f2{animation-delay:-2s}.f3{animation-delay:-4s}' +
    '@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}.pls{animation:pulse 2.4s ease-in-out infinite}.p2{animation-delay:-1.2s}' +
    '@keyframes pop{0%,100%{transform:scale(.85)}50%{transform:scale(1.08)}}.pop{animation:pop 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes hop{0%,40%,100%{transform:translate(0,0)}20%{transform:translate(0,-14px)}}.hop{animation:hop 1.2s ease-in-out infinite}.h2{animation-delay:-.6s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.wave{animation:wave 3s ease-in-out infinite}.w2{animation-delay:-1.5s}' +
    '@keyframes lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-60px)}}.lift{animation:lift 5s ease-in-out infinite}' +
    '@keyframes fly{from{transform:translate(-80px,60px)}to{transform:translate(480px,-40px)}}.fly{animation:fly 9s linear infinite;animation-delay:-3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (s, x, y, size, fill, anchor) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + FONT + ' font-size="' + size + '" fill="' + fill + '">' + s + '</text>';
  /* MTA bullet (one letter = circle) or a rail pill (LIRR / NJT / PATH) */
  const bullet = (label, color, x, y) => { const dark = color.toLowerCase() === "#fccc0a";
    if (label.length === 1) return '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="14" fill="' + (dark ? "#111" : "#fff") + '">' + label + '</text>';
    const w = label.length * 9 + 12; return '<rect x="' + (x - w / 2) + '" y="' + (y - 11) + '" width="' + w + '" height="22" rx="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="12" fill="#fff">' + label + '</text>'; };
  const bw = l => l.length === 1 ? 24 : l.length * 9 + 16;
  /* black station sign: name on the left, bullets on the right */
  const stSign = (x, y, w, name, bl, size) => { let b = "", bx = x + w - 8; for (let i = bl.length - 1; i >= 0; i--) { const ww = bw(bl[i][0]); b = bullet(bl[i][0], bl[i][1], bx - ww / 2 + 2, y + 18) + b; bx -= ww + 2; }
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
      '<text x="' + (x + 10) + '" y="' + (y + 24) + '" ' + FONT + ' font-size="' + (size || 15) + '" fill="#fff">' + name + '</text>' + b; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* a stainless subway / rail car, top-left at x,y; band = stripe color; b = [label,color] on the front */
  const car = (x, y, w, band, b, body) => { let win = ""; for (let i = x + 16; i < x + w - 76; i += 42) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="28" height="19" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="8" fill="' + (body || "#c9ced6") + '" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 35) + '" width="' + w + '" height="6" fill="' + band + '"/>' + win +
      '<rect x="' + (x + w - 64) + '" y="' + (y + 8) + '" width="36" height="22" rx="3" fill="#1d2329"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 46) + '" r="4" fill="#fff6c2"/>' + bullet(b[0], b[1], x + w - 46, y + 19); };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(28, x + w - Math.max(x, xx)) + '" height="10" fill="' + mortar + '"/>'; return b; };
  /* a building with a grid of windows, some flickering */
  const bldg = (x, y, w, h, col, win) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>'; let k = 0;
    for (let yy = y + 8; yy < y + h - 12; yy += 16) for (let xx = x + 6; xx < x + w - 10; xx += 14) { k++; s += '<rect' + (k % 7 === 0 ? ' class="flk"' : '') + ' x="' + xx + '" y="' + yy + '" width="7" height="9" fill="' + (k % 3 ? win : "#2a2a33") + '" opacity=".85"/>'; } return s; };
  const tree = (x, y, s, leaf) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (22 * s) + '" fill="#4a3220"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (16 * s) + '" fill="' + (leaf || "#2f7a3a") + '"/><circle cx="' + (x - 10 * s) + '" cy="' + (y + 4) + '" r="' + (11 * s) + '" fill="' + (leaf || "#2f7a3a") + '"/><circle cx="' + (x + 10 * s) + '" cy="' + (y + 3) + '" r="' + (12 * s) + '" fill="' + (leaf || "#2f7a3a") + '"/>';
  const auto = (x, y, col, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + (y + 8) + '" width="54" height="14" rx="4" fill="' + col + '"/><path d="M' + (x + 10) + ' ' + (y + 8) + 'l8-9h20l8 9z" fill="' + col + '"/><rect x="' + (x + 20) + '" y="' + y + '" width="14" height="7" fill="#cfe6ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 22) + '" r="5" fill="#111"/><circle cx="' + (x + 42) + '" cy="' + (y + 22) + '" r="5" fill="#111"/><circle cx="' + (x + 52) + '" cy="' + (y + 13) + '" r="2" fill="#fff6c2"/></g>';
  const bus = (x, y, band, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="110" height="38" rx="6" fill="#e9ecef" stroke="#6b7280" stroke-width="1.5"/><rect x="' + x + '" y="' + (y + 26) + '" width="110" height="5" fill="' + band + '"/><rect x="' + (x + 6) + '" y="' + (y + 6) + '" width="94" height="14" fill="#2a3440"/><circle cx="' + (x + 22) + '" cy="' + (y + 38) + '" r="6" fill="#111"/><circle cx="' + (x + 88) + '" cy="' + (y + 38) + '" r="6" fill="#111"/></g>';
  const blade = (cx, y, t) => { const w = t.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + cx + '" y="' + (y + 13) + '" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + t + '</text>'; };
  /* street corner: wall with tags, streetlight, two street blades */
  const corner = (g, s1, s2, tags, accent, wall, bg) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' + (bg || "") +
    brick(16, 60, 240, 160, (wall || ["#4a2a24", "#5a3229"])[0], (wall || ["#4a2a24", "#5a3229"])[1]) + '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) +
    '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' + auto(-60, 222, "#c0392b", "slide"),
    sky("g5", g[0], g[1]));
  /* underground platform: tiled wall with a mosaic band, columns, the train pulling in */
  const under = o => { let tiles = ""; for (let y = 20; y < 140; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#00000018" stroke-width="1"/>';
    let cols = ""; [30, 370].forEach(x => cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="236" fill="' + (o.col || "#3f4a55") + '"/>');
    return svg('<rect width="400" height="260" fill="' + o.wall + '"/>' + tiles + '<rect x="0" y="16" width="400" height="14" fill="' + o.band + '"/><rect x="0" y="30" width="400" height="3" fill="' + o.band2 + '"/>' +
      stSign(o.sx || 70, 42, o.sw || 260, o.name, o.bl, o.size) +
      '<rect x="0" y="84" width="400" height="66" fill="#15181c"/>' +
      '<g class="anim-train">' + car(10, 90, 300, o.band, o.bl[0]) + '</g>' +
      '<rect x="0" y="148" width="400" height="7" fill="#eab308"/><rect x="0" y="155" width="400" height="81" fill="' + (o.floor || "#8d8a84") + '"/><path d="M0 200h400" stroke="#00000022"/>' +
      cols + '<path class="flk" d="M120 6h160" stroke="#fffbe6" stroke-width="4"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2d33"/>' + (o.extra || "") + tag(o.tag, o.tx || 150, 226, 28, o.tc, -5), "");
  };
  /* elevated platform in the open air: canopy, the train, the steel structure, street below */
  const elev = o => svg('<rect width="400" height="260" fill="url(#g1)"/>' + (o.back || "") +
      '<rect x="0" y="28" width="400" height="8" fill="#3a4250"/><rect x="0" y="36" width="400" height="3" fill="' + o.band + '"/>' +
      '<rect x="40" y="39" width="5" height="56" fill="#59616e"/><rect x="355" y="39" width="5" height="56" fill="#59616e"/>' +
      stSign(o.sx || 80, 48, o.sw || 240, o.name, o.bl, o.size) +
      '<g class="anim-train">' + car(10, 88, 300, o.band, o.bl[0], o.body) + '</g>' +
      '<rect x="0" y="142" width="400" height="7" fill="#eab308"/><rect x="0" y="149" width="400" height="16" fill="' + (o.deck || "#4c5a3a") + '"/><path d="M0 165h400" stroke="#2a3020" stroke-width="3"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 6) + '" y="165" width="12" height="71" fill="' + (o.deck || "#4c5a3a") + '"/><path d="M' + (x - 30) + ' 168l30 30 30-30" stroke="' + (o.deck || "#4c5a3a") + '" stroke-width="5" fill="none"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2d33"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' + auto(-60, 214, "#d4a32e", "slide") +
      (o.extra || "") + tag(o.tag, o.tx || 230, 254, 24, o.tc, -5), sky("g1", o.g[0], o.g[1]));
  const PINK = "#ff6fb5", CY = "#38e8ff", GOLD = "#f2c14e";

  /* 1. Far Rockaway–Mott Av, the end of the A, looking south off the concrete platform: the Wavecrest towers by Beach 25 St with the ocean showing between them */
  function station() {
    const { svg, sky, tag, T, bullet, wins, cloud } = LM1;
    const tower = (x, h) => '<rect x="' + x + '" y="' + (150 - h) + '" width="40" height="' + h + '" fill="#c9b9a6"/>' + wins(x + 5, 156 - h, 4, Math.floor((h - 12) / 12), 9, 12, 5, 6, "#5a5048", "#ffe6a8");
    return svg(
      '<rect width="400" height="260" fill="url(#mc1)"/>' + cloud("lm-drift", 0, 26, 1) +
      /* the ocean glimpsed between the Wavecrest towers */
      '<rect x="0" y="110" width="400" height="40" fill="#2f86b5"/><g class="lm-rip"><path d="M10 120h40M130 126h50M250 118h40M330 128h50" stroke="#dff3ff" stroke-width="2" opacity=".7"/></g>' +
      tower(30, 92) + tower(90, 110) + tower(232, 100) + tower(300, 120) +
      LM1.plaque(130, 6, 140, "WAVECREST", "BEACH 25 ST \u2192", "#2a1430", "#ff6fb5") +
      /* the concrete viaduct + bumper at the end of the line */
      '<rect x="0" y="150" width="400" height="14" fill="#b8b2a6"/><rect x="0" y="164" width="400" height="6" fill="#8e887c"/>' +
      '<g class="anim-train">' + LM1.subCar(-30, 92, 290, "#0039a6", bullet(232, 132, "A", "#0039a6", false, 9)) + '</g>' +
      '<rect x="296" y="130" width="30" height="22" fill="#e8b84a"/><path d="M296 130l30 22M326 130l-30 22" stroke="#111" stroke-width="3"/>' +
      /* platform and the black sign */
      '<rect x="0" y="170" width="400" height="8" fill="#eab308"/><rect x="0" y="178" width="400" height="82" fill="#9a958b"/>' +
      '<rect x="60" y="214" width="5" height="30" fill="#3a3a3a"/><rect x="250" y="214" width="5" height="30" fill="#3a3a3a"/>' +
      '<rect x="16" y="186" width="282" height="30" rx="3" fill="#111"/><rect x="16" y="186" width="282" height="3" fill="#fff"/>' +
      T(26, 208, "Far Rockaway\u2013Mott Av", 16, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) + bullet(278, 201, "A", "#0039a6", false, 10) +
      '<g class="lm-bob"><rect x="318" y="190" width="56" height="28" rx="4" fill="#222"/><circle cx="332" cy="204" r="9" fill="#555"/><circle cx="360" cy="204" r="9" fill="#555"/><circle cx="332" cy="204" r="4" fill="#ff6fb5"/><circle cx="360" cy="204" r="4" fill="#ff6fb5"/><rect x="336" y="182" width="20" height="4" fill="#222"/></g>' +
      tag("3RD BASS", 80, 252, 26, "#ff6fb5", -4) + tag("SERCH", 260, 252, 28, "#38e8ff", -5),
      sky("mc1", "#8fc8ea", "#f8dcb0"));
  }

  /* 2. Bayswater Point State Park: the marsh point on Jamaica Bay behind Far Rockaway, tall grass, gold sunset water, a jet coming in low to JFK */
  function beach() {
    const { svg, sky, tag, T, plaque, bird } = LM1;
    let grass = ""; for (let x = 0; x < 400; x += 6) grass += '<path class="lm-swayb' + (x % 12 ? " lm-s2" : "") + '" d="M' + x + ' 230q' + (x % 4 - 2) + ' -' + (24 + (x * 7) % 22) + ' ' + (3 + x % 5) + ' -' + (34 + (x * 7) % 22) + '" stroke="' + (x % 18 ? "#b7a35a" : "#8a8a3a") + '" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mc2)"/>' +
      '<circle cx="290" cy="112" r="26" fill="#ffd27a"/>' +
      /* far shore, the JFK side */
      '<rect x="0" y="122" width="400" height="6" fill="#4a3a4a"/><rect x="120" y="114" width="6" height="8" fill="#4a3a4a"/><rect x="132" y="110" width="4" height="12" fill="#4a3a4a"/>' +
      /* the bay */
      '<rect x="0" y="128" width="400" height="80" fill="url(#mc2w)"/>' +
      '<g class="lm-rip"><path d="M250 140h80M262 152h56M240 166h90M270 182h40" stroke="#ffe0a0" stroke-width="2" opacity=".8"/></g>' +
      '<g class="lm-rip lm-r2"><path d="M30 150h60M90 172h70M20 192h50" stroke="#ffd27a" stroke-width="1.5" opacity=".5"/></g>' +
      /* the jet on approach */
      '<g class="lm-land"><g transform="translate(0 70)"><path d="M0 0h52l10-4h4l-6 8H2z" fill="#e8e8ee"/><path d="M22 0l-14 12h8l18-12z" fill="#c8c8d0"/><path d="M48 0l6-12h4l-2 12z" fill="#c8c8d0"/><circle class="lm-blink" cx="64" cy="0" r="1.5" fill="#ff3b30"/></g></g>' +
      bird("lm-fly", 0, 96) +
      /* the point: grass and a path */
      '<path d="M0 208q120-26 230-4t170 4V260H0z" fill="#6a6a2a"/>' + grass +
      '<path d="M120 260l30-46h14l-14 46z" fill="#d8c8a0"/>' +
      plaque(14, 12, 180, "BAYSWATER POINT", "STATE PARK · JAMAICA BAY", "#2a1430", "#ff6fb5") +
      tag("FAR ROCKAWAY", 210, 252, 22, "#ff6fb5", -3),
      sky("mc2", "#3a2a5a", "#ff9a5a") + '<linearGradient id="mc2w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e88a4a"/><stop offset="1" stop-color="#4a3a6a"/></linearGradient>');
  }

  /* 3. Fort Tilden's Battery Harris: the huge gray WWII gun casemate in the dunes with the observation deck on top, ocean and the Manhattan skyline far off */
  function riis() {
    const { svg, sky, tag, T, plaque, fig, cloud, bird } = LM1;
    let sky2 = ""; [[14, 10], [26, 18], [40, 12], [52, 26], [64, 14], [76, 20], [88, 9]].forEach(([x, h]) => sky2 += '<rect x="' + (250 + x) + '" y="' + (112 - h) + '" width="9" height="' + h + '" fill="#8a9ab0"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#mc3)"/>' + cloud("lm-drift", 0, 30, 1.1) + cloud("lm-drift lm-d2", 0, 56, .8, .6) + bird("lm-fly", 0, 70) +
      /* far skyline + ocean */
      sky2 + '<rect x="0" y="112" width="400" height="34" fill="#3d86b0"/><g class="lm-rip"><path d="M10 122h40M120 130h60M240 124h50M330 134h40" stroke="#e6f6ff" stroke-width="2" opacity=".6"/></g>' +
      /* the dunes and the casemate */
      '<path d="M0 146q60-14 120-4t140-6 140 6V260H0z" fill="#e2cc96"/>' +
      '<path d="M40 210q40-80 120-80h90q60 0 100 80z" fill="#7a8a5a"/>' +
      '<rect x="90" y="138" width="230" height="74" fill="#9a9c98"/><rect x="90" y="138" width="230" height="6" fill="#b4b6b2"/>' +
      '<path d="M120 212v-40a26 26 0 0 1 52 0v40z" fill="#2a2c2e"/><path d="M238 212v-40a26 26 0 0 1 52 0v40z" fill="#2a2c2e"/>' +
      '<path d="M100 150h210" stroke="#86887f" stroke-width="2"/>' +
      /* the observation deck on top */
      '<rect x="168" y="112" width="74" height="4" fill="#5a4a3a"/><path d="M170 116v22M240 116v22M168 104h74" stroke="#5a4a3a" stroke-width="2.5"/>' +
      '<path d="M150 138l18-22" stroke="#5a4a3a" stroke-width="3"/>' +
      '<g class="lm-bob">' + fig(190, 112, "#2a2a2a", null, .55) + '</g><g class="lm-bob lm-b2">' + fig(222, 112, "#2a2a2a", null, .55) + '</g>' +
      /* beach grass */
      '<path d="M20 226q4-16 2-22M26 226q2-14 8-20M330 230q4-16 2-22M338 230q2-14 8-20" stroke="#8a9a4a" stroke-width="2" fill="none" class="lm-swayb"/>' +
      plaque(14, 12, 170, "FORT TILDEN", "BATTERY HARRIS · ROCKAWAY", "#2a1430", "#38e8ff") +
      tag("GAS FACE", 30, 250, 26, "#ff6fb5", -4),
      sky("mc3", "#6fb0e0", "#e6f2f8"));
  }

  /* 4. The TV stage: applause sign blinking, the turntables, the lights, the Gas Face up on the screen */
  function stage() {
    return svg('<rect width="400" height="260" fill="#130a12"/>' +
      '<rect x="20" y="16" width="360" height="8" fill="#2b2b30"/>' + [50, 110, 170, 230, 290, 350].map((x, i) => '<circle class="blk' + ["", " b2", " b3"][i % 3] + '" cx="' + x + '" cy="32" r="6" fill="' + [PINK, CY, GOLD][i % 3] + '"/>').join("") +
      '<rect class="blk" x="150" y="44" width="100" height="22" rx="3" fill="#d7263d"/>' + txt("APPLAUSE", 200, 60, 13, "#fff") +
      '<rect x="100" y="76" width="200" height="80" fill="#1d1d2a" stroke="' + PINK + '" stroke-width="2"/>' + txt("THE GAS FACE", 200, 124, 22, PINK) +
      '<rect x="80" y="170" width="240" height="30" fill="#2b2b30"/>' + [130, 270].map(x => '<g class="spin"><ellipse cx="' + x + '" cy="172" rx="30" ry="6" fill="#111"/><ellipse cx="' + x + '" cy="172" rx="8" ry="2" fill="' + CY + '"/></g>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#2a1f2e"/><path d="M0 200h400" stroke="' + GOLD + '" stroke-width="3"/>' +
      tag("3RD BASS", 130, 246, 30, CY, -3), "");
  }

  /* 5. Beach 25 St and Seagirt Blvd, Wavecrest */
  function block() {
    return corner(["#130a12", "#3a2a4a"], "Beach 25 St", "Seagirt Blvd",
      tag("MC SERCH", 26, 122, 46, PINK, -7) + tag("3RD BASS", 60, 154, 26, CY, -5) + tag("GAS FACE", 30, 186, 28, GOLD, -3) + tag("ROCKAWAY", 120, 210, 20, "#f6efdc", -2), PINK, undefined,
      /* the boardwalk on its pilings and the moon on the ocean */
      '<g><style>@keyframes lmCr{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.lmCr{animation:lmCr 4s linear infinite}@keyframes lmSh{0%,100%{opacity:.3}50%{opacity:.85}}.lmSh{animation:lmSh 2.2s ease-in-out infinite}</style><rect x="256" y="140" width="144" height="80" fill="#1a2440"/><rect x="256" y="140" width="144" height="1.5" fill="#4a5a80"/><path class="lmSh" d="M358 146h12M354 156h20M350 168h28M346 182h36" stroke="#fff1d6" stroke-width="2.2"/><path class="lmCr" style="animation-delay:-0s" d="M256 196q10-5 20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#e8f0ff" stroke-width="1.3" fill="none" opacity=".55"/><path class="lmCr" style="animation-delay:-1.3s" d="M256 203q10-5 20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#e8f0ff" stroke-width="1.3" fill="none" opacity=".55"/><path class="lmCr" style="animation-delay:-2.6s" d="M256 210q10-5 20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#e8f0ff" stroke-width="1.3" fill="none" opacity=".55"/><rect x="256" y="176" width="144" height="8" fill="#3a2e30"/><path d="M256 168h144M256 172h144" stroke="#3a2e30" stroke-width="1.6"/><rect x="262" y="184" width="4" height="36" fill="#2a2226"/><rect x="278" y="184" width="4" height="36" fill="#2a2226"/><rect x="294" y="184" width="4" height="36" fill="#2a2226"/><rect x="310" y="184" width="4" height="36" fill="#2a2226"/><rect x="326" y="184" width="4" height="36" fill="#2a2226"/><rect x="342" y="184" width="4" height="36" fill="#2a2226"/><rect x="358" y="184" width="4" height="36" fill="#2a2226"/><rect x="374" y="184" width="4" height="36" fill="#2a2226"/><rect x="390" y="184" width="4" height="36" fill="#2a2226"/><rect x="276" y="150" width="2.4" height="26" fill="#2a2226"/><circle class="flk" cx="277.2" cy="149" r="3.4" fill="#ffe7a8"/><rect x="340" y="150" width="2.4" height="26" fill="#2a2226"/><circle class="flk" cx="341.2" cy="149" r="3.4" fill="#ffe7a8"/></g>');
  }

  /* LM1 helpers for the redrawn landmark rooms: same svg / sky / tag / bullet style as above, with their own little animations */
  const LM1 = (function () {
    const css = '<style>' +
      '@keyframes lmDrift{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lm-drift{animation:lmDrift 24s linear infinite}.lm-d2{animation-delay:-12s}' +
      '@keyframes lmCar{from{transform:translateX(-110px)}to{transform:translateX(510px)}}.lm-car{animation:lmCar 6s linear infinite}.lm-c2{animation-delay:-3s}' +
      '@keyframes lmCarL{from{transform:translateX(510px)}to{transform:translateX(-110px)}}.lm-carL{animation:lmCarL 7.5s linear infinite}' +
      '@keyframes lmFlick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmFlick 2.2s infinite}.lm-f2{animation-delay:-.8s}' +
      '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{transform-box:fill-box;transform-origin:50% 0;animation:lmSway 3s ease-in-out infinite}' +
      '.lm-swayb{transform-box:fill-box;transform-origin:50% 100%;animation:lmSway 3.6s ease-in-out infinite}.lm-s2{animation-delay:-1.5s}' +
      '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lm-bob{animation:lmBob 1.4s ease-in-out infinite}.lm-b2{animation-delay:-.7s}.lm-b3{animation-delay:-.35s}' +
      '@keyframes lmRise{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(14px,-150px);opacity:0}}.lm-rise{animation:lmRise 6s ease-in infinite}' +
      '@keyframes lmBlink{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blink{animation:lmBlink 1s steps(1) infinite}.lm-k2{animation-delay:-.5s}' +
      '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lmSpin 14s linear infinite}' +
      '@keyframes lmFly{from{transform:translate(-80px,30px)}to{transform:translate(480px,-30px)}}.lm-fly{animation:lmFly 9s linear infinite}' +
      '@keyframes lmLand{from{transform:translate(460px,-40px)}to{transform:translate(-120px,40px)}}.lm-land{animation:lmLand 10s linear infinite}' +
      '@keyframes lmRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lm-rip{animation:lmRip 3s ease-in-out infinite}.lm-r2{animation-delay:-1.5s}' +
      '@keyframes lmBoat{0%,100%{transform:translateX(0)}50%{transform:translateX(-60px)}}.lm-boat{animation:lmBoat 12s ease-in-out infinite}' +
      '@keyframes lmWalk{from{transform:translateX(0)}to{transform:translateX(70px)}}.lm-walk{animation:lmWalk 5s ease-in-out infinite alternate}.lm-w2{animation-delay:-2.5s}' +
      '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,250px) rotate(300deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}.lm-l2{animation-delay:-2s}.lm-l3{animation-delay:-4s}' +
      '@keyframes lmDrop{0%{transform:translateY(0)}100%{transform:translateY(118px)}}.lm-drop{animation:lmDrop 2.6s cubic-bezier(.5,0,.9,.6) infinite}' +
      '@keyframes lmBall{0%{transform:translate(0,0)}50%{transform:translate(-90px,-26px)}100%{transform:translate(-180px,0)}}.lm-ball{animation:lmBall 2.4s linear infinite}' +
      '@keyframes lmSwim{0%,100%{transform:translateX(0)}50%{transform:translateX(90px)}}.lm-swim{animation:lmSwim 7s ease-in-out infinite}.lm-sw2{animation-delay:-3.5s}' +
      '</style>';
    const svg = (inner, defs) =>
      '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
    const sky = (id, top, bottom) =>
      '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
    const tag = (txt, x, y, size, fill, rot) =>
      '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
      '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
    const bullet = (x, y, letter, color, dark, r) => { r = r || 11;
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36).toFixed(1) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    const T = (x, y, txt, size, fill, o) => { o = o || {};
      return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-family="' + (o.f || "Anton, Impact, sans-serif") + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') +
        (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + ' font-size="' + size + '" fill="' + fill + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + '>' + txt + '</text>'; };
    /* a name plaque: dark box, title + subtitle */
    const plaque = (x, y, w, title, sub, bg, accent) => {
      const ts = Math.min(12, (w - 14) / (title.length * .66)), ss = sub ? Math.min(8, (w - 12) / (sub.length * .62 + sub.length * 1.5 / 8)) : 0;
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (sub ? 34 : 22) + '" rx="4" fill="' + bg + '" stroke="' + accent + '" stroke-width="2"/>' +
        T(x + w / 2, y + 16, title, ts.toFixed(1), "#fff") + (sub ? T(x + w / 2, y + 28, sub, ss.toFixed(1), accent, { f: "Barlow, Arial, sans-serif", w: 700, ls: (ss * 1.5 / 8).toFixed(2) }) : ""); };
    /* green NYC street sign blade */
    const blade = (x, y, w, txt) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      T(x + w / 2, y + 13, txt, 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 });
    const car = (cls, y, c, w) => { w = w || 44;
      return '<g class="' + cls + '"><rect x="0" y="' + y + '" width="' + w + '" height="12" rx="4" fill="' + c + '"/><rect x="' + (w * .22) + '" y="' + (y - 7) + '" width="' + (w * .5) + '" height="8" rx="3" fill="' + c + '"/>' +
        '<rect x="' + (w * .27) + '" y="' + (y - 5) + '" width="' + (w * .4) + '" height="5" fill="#cfe6ff" opacity=".8"/><circle cx="' + (w * .22) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/><circle cx="' + (w * .78) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/>' +
        '<rect x="' + (w - 3) + '" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>'; };
    /* faceless figure (silhouette), optional sign held up */
    const fig = (x, y, c, sign, sc) => { sc = sc || 1;
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><circle cx="0" cy="-30" r="5" fill="' + c + '"/><path d="M-6 -24h12l2 16h-4l-1 14h-6l-1-14h-4z" fill="' + c + '"/>' +
        (sign ? '<path d="M5 -22l6-14" stroke="' + c + '" stroke-width="2.5"/><rect x="' + (13 - Math.max(30, sign[0].length * 4.6 + 6) / 2) + '" y="-58" width="' + Math.max(30, sign[0].length * 4.6 + 6) + '" height="20" fill="' + sign[1] + '" stroke="#222" stroke-width="1"/>' +
          T(13, -44, sign[0], 7, sign[2] || "#111", { f: "Barlow, Arial, sans-serif", w: 700 }) : "") + '</g>'; };
    const wins = (x0, y0, cols, rows, dx, dy, w, h, c, lit) => { let s = "";
      for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += '<rect x="' + (x0 + k * dx) + '" y="' + (y0 + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + ((lit && (k * 7 + r * 3) % 4 === 0) ? lit : c) + '"/>';
      return s; };
    const brickLines = (x, y, w, h, c, step) => { let s = ""; for (let yy = y + (step || 7); yy < y + h; yy += (step || 7)) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".6"/>'; return s; };
    const cloud = (cls, x, y, s, op) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || .8) + '"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff"/><ellipse cx="12" cy="-6" rx="14" ry="9" fill="#fff"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff"/></g></g>';
    const tree = (x, y, r, c, cls) => '<g class="' + (cls || "lm-swayb") + '"><rect x="' + (x - 2.5) + '" y="' + (y - 4) + '" width="5" height="' + (r + 6) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - r * .6) + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/></g>';
    const bird = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" fill="none" stroke="#222" stroke-width="1.6"/></g>';
    /* subway car side (R-type), for the station rooms */
    const subCar = (x, y, w, stripe, letters) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="4" fill="' + stripe + '"/>';
      for (let k = x + 14; k < x + w - 40; k += 44) s += '<rect x="' + k + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
      return s + '<rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="22" rx="3" fill="#1d2a3a"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 50) + '" r="3.5" fill="#fff6c2"/>' + (letters || ""); };
    return { svg, sky, tag, bullet, stars, T, plaque, blade, car, fig, wins, brickLines, cloud, tree, bird, subCar };
  })();

  window.SCENES = { station, beach, riis, stage, block };

})();
