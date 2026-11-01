/* Newark, New Jersey opening scenes for El Da Sensei's game. Each one is a small animated SVG, 400 x 260. */
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
  const corner = (g, s1, s2, tags, accent, wall) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
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
  const ORG = "#ff8a5b", CY = "#38e8ff", GOLD = "#f2c14e";

  /* 1. Newark Penn Station: the PATH train pulling in, the limestone deco station behind */
  function station() {
    let back = '<rect x="250" y="40" width="150" height="200" fill="#d8ccb0"/>' + [262, 290, 318, 346, 374].map(x => '<rect x="' + x + '" y="56" width="12" height="80" fill="#bfb194"/>').join("") + '<rect x="250" y="40" width="150" height="10" fill="#c4b494"/>';
    return elev({ g: ["#9fc8e8", "#f2dcc0"], back: back + bldg(0, 110, 80, 130, "#6a5a5a", "#ffe6a8"), band: "#d7263d", bl: [["PATH", "#0039a6"], ["NJT", "#0039a6"]], name: "Newark Penn Station", size: 14, sx: 50, sw: 300, tag: "WRONG SIDE", tc: ORG, deck: "#7a7060" });
  }

  /* 2. The train yard: a freight car with a full burner on it, the spray mist floating, a work light swinging */
  function yard() {
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' + stars(16) +
      '<g class="sway"><path d="M200 0v24" stroke="#222" stroke-width="2"/><path d="M188 24h24l-4 8h-16z" fill="#59616e"/><circle class="flk" cx="200" cy="34" r="5" fill="#ffe7a8"/></g><g opacity=".1"><path class="flk" d="M190 36h20l90 160H100z" fill="#ffe7a8"/></g>' +
      /* freight car */
      '<rect x="30" y="90" width="340" height="100" fill="#7a3a2a" stroke="#4a2018" stroke-width="3"/>' + [50, 90, 130, 170, 210, 250, 290, 330].map(x => '<path d="M' + x + ' 90v100" stroke="#6a3022" stroke-width="2"/>').join("") +
      '<rect x="20" y="190" width="360" height="8" fill="#2a2a2a"/>' + [70, 110, 290, 330].map(x => '<circle cx="' + x + '" cy="206" r="12" fill="#1d1d1d" stroke="#555" stroke-width="2"/>').join("") +
      tag("ARTIFACTS", 50, 176, 50, ORG, -4) + tag("EL", 300, 124, 28, CY, 8) +
      '<circle class="rise" cx="330" cy="150" r="8" fill="' + CY + '" opacity=".5"/><circle class="rise r2" cx="338" cy="156" r="6" fill="' + ORG + '" opacity=".5"/><circle class="rise r3" cx="324" cy="160" r="7" fill="' + GOLD + '" opacity=".5"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#3a3430"/><path d="M0 226h400M0 244h400" stroke="#8a8478" stroke-width="3"/>' + [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390].map(x => '<rect x="' + x + '" y="222" width="8" height="26" fill="#5a4030"/>').join(""),
      sky("g2", "#0b0f24", "#2a2346"));
  }

  /* 3. Riverfront Park: the orange boardwalk on the Passaic, the river moving, the old swing bridge */
  function river() {
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' +
      bldg(0, 70, 60, 70, "#6a6a7a", "#cfe6ff") + bldg(60, 50, 50, 90, "#8a7a6a", "#cfe6ff") + bldg(330, 60, 70, 80, "#5a6a7a", "#cfe6ff") +
      /* the swing bridge */
      '<rect x="130" y="100" width="180" height="10" fill="#4a5a4a"/>' + [140, 170, 200, 230, 260, 290].map(x => '<path d="M' + x + ' 100l15-30 15 30" stroke="#4a5a4a" stroke-width="3" fill="none"/>').join("") + '<path d="M140 70h165" stroke="#4a5a4a" stroke-width="4"/>' +
      '<rect x="0" y="110" width="400" height="70" fill="#3a6a7a"/><path class="wave" d="M20 130h60M140 146h70M260 128h50M320 160h60" stroke="#cfe6ff" stroke-width="2"/>' +
      /* the orange boardwalk */
      '<path d="M0 180h400v26H0z" fill="#e8742a"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(i => '<path d="M' + (i * 20) + ' 180v26" stroke="#c45a1a" stroke-width="2"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#5a8a3a"/><path d="M0 180h400" stroke="#2a2d33" stroke-width="3"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + x + '" y="162" width="4" height="18" fill="#2a2d33"/>').join("") + '<path d="M0 164h400" stroke="#2a2d33" stroke-width="3"/>' +
      tag("RIVERFRONT", 120, 246, 26, ORG, -3) + '<path class="slide" style="animation-duration:20s" d="M0 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/>',
      sky("g3", "#8fc3ea", "#f6e2b0"));
  }

  /* 4. Ferry St in the Ironbound: bakery windows, bunting over the street, espresso on the tables */
  function ironbound() {
    let bunt = ""; for (let i = 0; i < 20; i++) bunt += '<path class="sway' + (i % 2 ? " sw2" : "") + '" d="M' + (i * 20) + ' ' + (40 + Math.sin(i / 3) * 6) + 'l10 14 10-14z" fill="' + ["#c0392b", "#2f8f4a", GOLD][i % 3] + '"/>';
    const shop = (x, col, awn, t) => '<rect x="' + x + '" y="60" width="130" height="150" fill="' + col + '"/>' + [x + 14, x + 52, x + 90].map(w => '<rect x="' + w + '" y="76" width="26" height="30" fill="#cfe6ff"/>').join("") +
      '<path d="M' + x + ' 124h130l-8 16H' + (x + 8) + 'z" fill="' + awn + '"/>' + txt(t, x + 65, 136, 11, "#fff") + '<rect class="flk" x="' + (x + 10) + '" y="146" width="110" height="50" fill="#ffe6a8" opacity=".85"/>';
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' +
      shop(0, "#e8d8b8", "#c0392b", "PADARIA") + shop(135, "#b5654a", "#2f8f4a", "CAFE") + shop(270, "#d8c4a0", "#2a5a8a", "PASTELARIA") +
      '<path d="M0 40q100 16 200 0t200 0" stroke="#59616e" stroke-width="1.5" fill="none"/>' + bunt +
      '<rect x="0" y="210" width="400" height="50" fill="#9a948a"/>' +
      [80, 300].map(x => '<ellipse cx="' + x + '" cy="214" rx="26" ry="5" fill="#f4f0e6"/><rect x="' + (x - 2) + '" y="214" width="4" height="30" fill="#59616e"/><rect x="' + (x - 8) + '" y="204" width="12" height="9" rx="2" fill="#fff"/><path class="rise" d="M' + (x - 2) + ' 200q3-6 0-10" stroke="#e8e0d0" stroke-width="2" fill="none"/>').join("") +
      tag("IRONBOUND", 130, 252, 26, ORG, -3),
      sky("g4", "#7ec0ee", "#f8e7c0"));
  }

  /* 5. Raymond Blvd and McCarter Hwy, by Penn Station */
  function block() {
    return corner(["#120a06", "#3a2a1a"], "Raymond Blvd", "McCarter Hwy",
      tag("EL DA SENSEI", 22, 120, 38, ORG, -7) + tag("ARTIFACTS", 60, 154, 28, CY, -5) + tag("WRONG SIDE", 30, 186, 26, GOLD, -3) + tag("NEWARK", 140, 210, 22, "#f6efdc", -2), ORG);
  }

  window.SCENES = { station, yard, river, ironbound, block };

})();
