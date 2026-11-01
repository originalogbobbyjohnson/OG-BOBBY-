/* Jamaica, Queens opening scenes for Elucid's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1s steps(1) infinite}.b2{animation-delay:-.25s}.b3{animation-delay:-.5s}.b4{animation-delay:-.75s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}.slow{animation-duration:9s}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sway{animation:sway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}.sw2{animation-delay:-1.5s}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:.0}20%{opacity:.6}100%{transform:translateY(-60px);opacity:0}}.rise{animation:rise 4s linear infinite}.r2{animation-delay:-1.3s}.r3{animation-delay:-2.6s}' +
    '@keyframes slide{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.slide{animation:slide 14s linear infinite}.sd2{animation-delay:-7s}' +
    '@keyframes slideL{from{transform:translateX(480px)}to{transform:translateX(-160px)}}.slideL{animation:slideL 11s linear infinite}.sd3{animation-delay:-5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,240px) rotate(300deg);opacity:.8}}.fall{animation:fall 6s linear infinite}.f2{animation-delay:-2s}.f3{animation-delay:-4s}' +
    '@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}.pls{animation:pulse 2.4s ease-in-out infinite}.p2{animation-delay:-1.2s}' +
    '@keyframes pop{0%,100%{transform:scale(.85)}50%{transform:scale(1.08)}}.pop{animation:pop 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes hop{0%,40%,100%{transform:translate(0,0)}20%{transform:translate(0,-14px)}}.hop{animation:hop 1.2s ease-in-out infinite}.h2{animation-delay:-.6s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.wave{animation:wave 3s ease-in-out infinite}.w2{animation-delay:-1.5s}' +
    '@keyframes lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-60px)}}.lift{animation:lift 5s ease-in-out infinite}' +
    '@keyframes fly{from{transform:translate(-80px,60px)}to{transform:translate(480px,-40px)}}.fly{animation:fly 9s linear infinite}' +
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
  const ORG = "#ff8a5b", SAND = "#e8d2a0", BLUE = "#6fa8c8";

  /* 1. Jamaica-Van Wyck: the E pulling in under the expressway */
  function station() {
    return under({ wall: "#d9d2c0", band: "#4a6a8a", band2: "#c8a46a", name: "Jamaica–Van Wyck", bl: [["E", "#0039a6"]], sx: 80, sw: 240, tag: "ARMAND HAMMER", tc: ORG, tx: 90 });
  }

  /* 2. The Jamaica Performing Arts Center: the old red brick church with its bell tower, windows glowing */
  function jpac() {
    let arches = ""; [150, 190, 230].forEach(x => arches += '<path class="pls' + (x === 190 ? " p2" : "") + '" d="M' + x + ' 196v-40a10 10 0 0 1 20 0v40z" fill="#ffd27a"/>');
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' + stars(14) +
      bldg(0, 120, 90, 120, "#3a3a4a", "#ffe6a8") + bldg(330, 110, 70, 130, "#4a3a3a", "#ffe6a8") +
      /* the tower */
      brick(96, 50, 46, 190, "#8a3a2a", "#9a4a34") + '<path d="M90 50l29-36 29 36z" fill="#3a3a44"/><path class="pls" d="M110 70v-12a9 9 0 0 1 18 0v12z" fill="#ffd27a"/><circle cx="119" cy="100" r="9" fill="#f4f0e6" stroke="#5a2a1a" stroke-width="2"/>' +
      /* the nave */
      brick(142, 100, 170, 140, "#9a4430", "#a8503a") + '<path d="M136 100l91-46 91 46z" fill="#3a3a44"/><circle cx="227" cy="80" r="12" fill="#ffd27a" class="pls"/><circle cx="227" cy="80" r="12" fill="none" stroke="#5a2a1a" stroke-width="3"/>' + arches +
      '<path d="M266 240v-34a14 14 0 0 1 28 0v34z" fill="#2a1a10"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#2a2d33"/>' + tag("JPAC", 320, 236, 26, ORG, -5),
      sky("g2", "#1a1430", "#6a3a4a"));
  }

  /* 3. The quiet room: the old TV glowing, the Betamax reels turning, an ikebana branch */
  function betamax() {
    return svg('<rect width="400" height="260" fill="#14100e"/><rect x="0" y="0" width="400" height="190" fill="#221a16"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a2a1e"/><rect x="40" y="168" width="230" height="22" fill="#5a3a22"/>' +
      /* TV */
      '<rect x="60" y="62" width="130" height="104" rx="10" fill="#4a3a2a" stroke="#2a1a10" stroke-width="3"/><rect x="72" y="72" width="94" height="80" rx="8" fill="#2a4a5a"/><rect class="pls" x="72" y="72" width="94" height="80" rx="8" fill="' + BLUE + '" opacity=".6"/>' +
      '<path d="M78 90h82M78 104h82M78 118h82M78 132h82" stroke="#cfe6ff" stroke-width="1" opacity=".35"/><circle cx="178" cy="90" r="5" fill="' + SAND + '"/><circle cx="178" cy="108" r="5" fill="' + SAND + '"/>' +
      /* VCR with reels */
      '<rect x="200" y="140" width="64" height="28" rx="2" fill="#1d1d22"/><rect x="206" y="146" width="40" height="10" fill="#2a2a30"/><circle class="spin" cx="216" cy="151" r="4" fill="' + SAND + '"/><circle class="spin" cx="236" cy="151" r="4" fill="' + SAND + '"/><circle class="blk" cx="256" cy="150" r="2" fill="' + ORG + '"/>' +
      /* ikebana */
      '<path d="M320 190l-6-30h28l-6 30z" fill="#2a2a30"/><path d="M328 160q-10-40 20-70M330 160q10-20 34-26M326 160q-20-24-34-24" stroke="#4a3a2a" stroke-width="3" fill="none"/>' +
      '<g class="pop"><circle cx="348" cy="90" r="7" fill="' + ORG + '"/><circle cx="364" cy="134" r="6" fill="#f4f0e6"/><circle cx="292" cy="136" r="5" fill="' + ORG + '"/></g>' +
      /* books */
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (300 + i * 12) + '" y="' + (40 + (i % 2) * 6) + '" width="10" height="' + (40 - (i % 2) * 6) + '" fill="' + [ORG, SAND, BLUE, "#7a5a4a", SAND][i] + '"/>').join("") + '<rect x="294" y="80" width="80" height="5" fill="#5a3a22"/>' +
      tag("IKEBANA", 40, 240, 30, ORG, -4), "");
  }

  /* 4. The Van Wyck at dusk: traffic both ways, the green sign, a plane low over Jamaica */
  function vanwyck() {
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="fly"><path d="M40 60l40-8q6 0 4 4l-40 8z" fill="#e9ecef"/><path d="M58 56l-8-12h6l14 11z" fill="#9aa3ad"/></g>' +
      bldg(0, 96, 70, 70, "#3a3a4a", "#ffe6a8") + bldg(320, 90, 80, 76, "#4a3a3a", "#ffe6a8") +
      /* the sign gantry */
      '<rect x="80" y="40" width="6" height="126" fill="#59616e"/><rect x="314" y="40" width="6" height="126" fill="#59616e"/><rect x="80" y="40" width="240" height="6" fill="#59616e"/>' +
      '<rect x="100" y="50" width="200" height="50" rx="4" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' + txt("Van Wyck Expwy", 200, 72, 16, "#fff") + txt("JFK Airport  ↓", 200, 92, 12, "#fff") +
      /* road */
      '<rect x="0" y="166" width="400" height="94" fill="#2a2d33"/><path d="M0 196h400M0 228h400" stroke="#fff" stroke-width="2" stroke-dasharray="20 14"/><path d="M0 212h400" stroke="#eab308" stroke-width="3"/>' +
      auto(0, 172, ORG, "slide") + auto(0, 172, "#cfd6de", "slide sd2") + auto(0, 232, "#3a6a9a", "slideL") + auto(0, 232, "#f4f0e6", "slideL sd3") +
      tag("VAN WYCK", 20, 156, 24, SAND, -4),
      sky("g4", "#3a2a5a", "#f2a65a"));
  }

  /* 5. Jamaica Av at the Van Wyck */
  function block() {
    return corner(["#0e0b0a", "#3a2a2a"], "Jamaica Av", "Van Wyck Expy",
      tag("ELUCID", 30, 124, 50, ORG, -7) + tag("ARMAND HAMMER", 40, 154, 22, SAND, -5) + tag("BACKWOODZ", 30, 186, 26, BLUE, -3) + tag("JAMAICA", 130, 210, 22, "#f6efdc", -2), ORG);
  }

  window.SCENES = { station, jpac, betamax, vanwyck, block };

})();
