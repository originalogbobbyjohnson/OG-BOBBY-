/* Trenton, New Jersey opening scenes for Wise Intelligent's game. Each one is a small animated SVG, 400 x 260. */
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
  const GRN = "#7cf29a", GOLD = "#f2c14e", RED = "#d7263d";

  /* 1. Trenton Transit Center: the NJ Transit train pulling in, the glass station hall behind */
  function station() {
    let back = '<rect x="250" y="60" width="150" height="180" fill="#9fc8e0" opacity=".85"/>' + [270, 300, 330, 360, 390].map(x => '<path d="M' + x + ' 60v180" stroke="#59616e" stroke-width="2"/>').join("") + '<path d="M246 60h158" stroke="#3a4250" stroke-width="6"/>';
    return elev({ g: ["#7ec0ee", "#f8e7c0"], back: back + bldg(0, 110, 90, 130, "#8a5a44", "#ffe6a8"), band: "#f26522", bl: [["NJT", "#0039a6"]], name: "Trenton", sx: 110, sw: 180, tag: "TRENTON", tc: GRN, deck: "#6a6a5a" });
  }

  /* 2. The Lower Trenton Bridge: the steel truss over the Delaware and the big red sign, letters blinking on */
  function bridge() {
    const words = "TRENTON MAKES THE WORLD TAKES"; let letters = "";
    words.split("").forEach((c, i) => letters += '<text class="' + (i % 5 === 2 ? "flk" : "") + '" x="' + (32 + i * 12) + '" y="86" text-anchor="middle" ' + FONT + ' font-size="15" fill="#ff3b3b">' + c + '</text>');
    let truss = ""; for (let x = 20; x < 380; x += 30) truss += '<path d="M' + x + ' 130l15-36 15 36" stroke="#5a6a5a" stroke-width="3" fill="none"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' + stars(18) +
      '<path d="M20 94h360" stroke="#5a6a5a" stroke-width="5"/>' + truss + '<rect x="20" y="130" width="360" height="10" fill="#5a6a5a"/>' +
      '<g opacity=".25"><rect class="pls" x="20" y="66" width="360" height="28" fill="#ff3b3b"/></g>' + letters +
      [60, 200, 340].map(x => '<rect x="' + (x - 10) + '" y="140" width="20" height="60" fill="#8a8478"/>').join("") +
      auto(0, 112, GOLD, "slide") + auto(0, 112, "#cfd6de", "slideL") +
      '<rect x="0" y="200" width="400" height="60" fill="#1d3a5a"/><path class="wave" d="M20 220h60M150 236h70M270 216h50M320 248h60" stroke="#ff8a8a" stroke-width="2" opacity=".6"/>',
      sky("g2", "#0b0f24", "#3a2346"));
  }

  /* 3. The State House: the gold dome shining, the flag waving, the white columns */
  function statehouse() {
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' +
      tree(30, 190, 1.3) + tree(370, 190, 1.3) +
      '<rect x="60" y="130" width="280" height="90" fill="#f2efe6"/><path d="M60 130h280" stroke="#d8d2c4" stroke-width="6"/>' + [80, 110, 140, 250, 280, 310].map(x => '<rect x="' + x + '" y="144" width="14" height="60" fill="#e2dccf"/>').join("") +
      '<path d="M150 130l50-22 50 22z" fill="#e2dccf"/>' + [164, 184, 204, 224].map(x => '<rect x="' + x + '" y="134" width="10" height="70" fill="#fff"/>').join("") +
      /* drum and the gold dome */
      '<rect x="160" y="76" width="80" height="32" fill="#f2efe6"/>' + [168, 184, 200, 216, 232].map(x => '<rect x="' + (x - 2) + '" y="80" width="5" height="24" fill="#d8d2c4"/>').join("") +
      '<path d="M156 78q44-60 88 0z" fill="#e8b830" stroke="#a87a10" stroke-width="2"/><path d="M180 78q20-50 40 0" stroke="#fff3b0" stroke-width="3" fill="none" class="pls"/>' +
      '<rect x="196" y="18" width="8" height="16" fill="#e8b830"/><path d="M200 18V2" stroke="#59616e" stroke-width="2"/><g class="sway" style="transform-origin:left center"><path d="M200 2h18l-2 5 2 5h-18z" fill="' + RED + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#5a8a3a"/><path d="M180 220l-10 40h60l-10-40z" fill="#c9b28a"/>' +
      tag("STATE HOUSE", 240, 250, 22, GRN, -3),
      sky("g3", "#8fc3ea", "#f6e2b0"));
  }

  /* 4. The classroom: the lesson on the board, the clock ticking, the chalk writing */
  function classroom() {
    return svg('<rect width="400" height="260" fill="#e8dcc0"/><rect x="0" y="190" width="400" height="70" fill="#8a6a3a"/>' +
      '<rect x="40" y="30" width="280" height="130" fill="#1f4a32" stroke="#8a5a2c" stroke-width="8"/>' +
      '<text x="56" y="62" font-family="Permanent Marker, cursive" font-size="16" fill="#f4f0e6">TODAY\'S LESSON:</text>' +
      '<text x="56" y="92" font-family="Permanent Marker, cursive" font-size="22" fill="' + GOLD + '">HOLY INTELLECT</text>' +
      '<text x="56" y="122" font-family="Permanent Marker, cursive" font-size="14" fill="#f4f0e6">knowledge + wisdom</text><text x="56" y="144" font-family="Permanent Marker, cursive" font-size="14" fill="#f4f0e6">= understanding</text>' +
      '<g class="bob"><rect x="250" y="134" width="20" height="5" fill="#fff" transform="rotate(-30 260 136)"/></g>' +
      '<circle cx="356" cy="50" r="20" fill="#fff" stroke="#3a3a3a" stroke-width="3"/><g class="spin slow"><path d="M356 50v-14" stroke="#111" stroke-width="2"/></g><path d="M356 50h9" stroke="#111" stroke-width="3"/>' +
      [60, 170, 280].map(x => '<rect x="' + x + '" y="196" width="70" height="10" fill="#c49a5a"/><rect x="' + (x + 6) + '" y="206" width="5" height="30" fill="#59616e"/><rect x="' + (x + 59) + '" y="206" width="5" height="30" fill="#59616e"/>').join("") +
      '<rect x="40" y="160" width="280" height="8" fill="#8a5a2c"/>' + tag("POOR RIGHTEOUS TEACHERS", 30, 252, 20, RED, -2), "");
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
  const icBg = () => { let t = "";
    for (let x = 20; x < 320; x += 12) t += '<path d="M' + x + ' 46L' + (x + 6) + ' 38L' + (x + 12) + ' 46" stroke="#6f8a76" stroke-width="1.2" fill="none"/>';
    return IC_CSS +
      '<path d="M20 38H320" stroke="#7f9a86" stroke-width="2"/>' + t + '<rect x="18" y="46" width="304" height="4" fill="#5f7a66"/>' +
      '<rect x="100" y="50" width="8" height="8" fill="#6b6658"/><rect x="230" y="50" width="8" height="8" fill="#6b6658"/>' +
      '<path d="M90 36v2M250 36v2" stroke="#7f9a86" stroke-width="1.5"/>' +
      '<rect x="68" y="22" width="204" height="14" fill="#2a0c10"/>' +
      '<text x="170" y="32.5" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" fill="#ff3b3b">' +
      '<tspan class="ic-pl">TRENTON </tspan><tspan class="ic-pl ic-p2">MAKES </tspan><tspan class="ic-pl ic-p3">THE WORLD </tspan><tspan class="ic-pl ic-p4">TAKES</tspan></text>' +
      '<clipPath id="icWc"><rect x="20" y="40" width="300" height="8"/></clipPath><g clip-path="url(#icWc)">' +
      '<g class="ic-car"><rect x="0" y="43" width="5" height="2.5" fill="#fff6c2"/></g><g class="ic-car ic-c2"><rect x="0" y="43" width="5" height="2.5" fill="#fff6c2"/></g>' +
      '<g class="ic-carl"><rect x="330" y="43" width="5" height="2.5" fill="#ff5a4a"/></g></g>'; };

  /* 5. Clinton Av and Greenwood Av */
  function block() {
    return corner(["#07120a", "#1d3a2a"], "Clinton Av", "Greenwood Av",
      tag("WISE", 40, 120, 56, GRN, -7) + tag("P.R.T.", 50, 156, 28, GOLD, -5) + tag("HOLY INTELLECT", 26, 188, 24, RED, -3) + tag("TRENTON", 130, 212, 22, "#f6efdc", -2), GRN, undefined, icBg());
  }

  window.SCENES = { station, bridge, statehouse, classroom, block };

})();
