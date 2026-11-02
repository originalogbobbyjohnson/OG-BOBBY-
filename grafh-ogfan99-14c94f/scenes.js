/* Jamaica, Queens opening scenes for Grafh's game. Each one is a small animated SVG, 400 x 260. */
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
  const GRN = "#7cf29a", GOLD = "#f2c14e", PINK = "#ff6fb5";

  /* 1. Jamaica Center-Parsons/Archer from the end of the track: the bumper block, the E coming head-on out of the tunnel, Grafh's mixtape posters on the wall */
  function station() {
    const st = '<style>@keyframes come{0%{transform:scale(.3);opacity:.2}70%,100%{transform:scale(1);opacity:1}}.come{animation:come 5s ease-out infinite;transform-box:fill-box;transform-origin:center bottom}</style>';
    let tiles = ""; for (let y = 64; y < 200; y += 10) tiles += '<path d="M0 ' + y + 'h120M280 ' + y + 'h120" stroke="#00000014"/>';
    return svg(st + '<rect width="400" height="260" fill="#ece4cf"/>' + tiles + '<rect x="0" y="0" width="400" height="56" fill="#1d2329"/>' +
      stSign(26, 12, 348, "Jamaica Center–Parsons/Archer", [["E", "#0039a6"], ["J", "#996633"], ["Z", "#996633"]], 13) +
      '<rect x="0" y="56" width="400" height="8" fill="#3a7a4a"/><rect x="0" y="64" width="400" height="3" fill="#c8a46a"/>' +
      /* the tunnel mouth and the rails running into it */
      '<path d="M120 70h160v130H120z" fill="#0b0d10"/><path d="M120 70h160l-14 10H134z" fill="#1d2329"/>' +
      '<path d="M40 260L178 200M360 260L222 200" stroke="#8a8f96" stroke-width="5"/><path d="M110 230h180M140 214h120" stroke="#3a2e24" stroke-width="5"/>' +
      '<g class="come"><rect x="150" y="96" width="100" height="100" rx="10" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="162" y="106" width="76" height="34" rx="4" fill="#1d2329"/>' +
      bullet("E", "#0039a6", 200, 123) + '<rect x="150" y="160" width="100" height="5" fill="#3a7a4a"/><circle class="pls" cx="168" cy="182" r="6" fill="#fff6c2"/><circle class="pls" cx="232" cy="182" r="6" fill="#fff6c2"/></g>' +
      /* the bumper block at the end of the line */
      '<rect x="160" y="220" width="80" height="26" fill="#d7263d"/><path d="M164 220l12 26M184 220l12 26M204 220l12 26M224 220l12 26" stroke="#f2c14e" stroke-width="5"/>' +
      '<circle class="blk" cx="172" cy="212" r="5" fill="#ff3b3b"/><circle class="blk b3" cx="228" cy="212" r="5" fill="#ff3b3b"/>' +
      /* platforms both sides, yellow edges */
      '<path d="M0 200h120l-80 60H0z" fill="#8d8a84"/><path d="M120 200l-80 60" stroke="#eab308" stroke-width="6"/><path d="M400 200H280l80 60h40z" fill="#8d8a84"/><path d="M280 200l80 60" stroke="#eab308" stroke-width="6"/>' +
      /* mixtape posters + the end-of-line sign */
      '<rect x="14" y="80" width="46" height="62" fill="#111" stroke="' + GRN + '" stroke-width="2"/>' + txt("AUTO", 37, 102, 11, GRN) + txt("GRAF", 37, 116, 11, GRN) + txt("MIXTAPE", 37, 134, 7, "#fff") +
      '<rect x="66" y="80" width="46" height="62" fill="#2a1420" stroke="' + PINK + '" stroke-width="2"/>' + txt("PAIN", 89, 102, 11, PINK) + txt("KILLERS", 89, 116, 10, PINK) + txt("MIXTAPE", 89, 134, 7, "#fff") +
      '<rect x="292" y="84" width="96" height="34" fill="#111"/>' + txt("LAST STOP", 340, 99, 11, "#fff") + txt("PARSONS · ARCHER", 340, 112, 8, "#c8a46a") +
      tag("GRAFH", 290, 170, 30, GRN, -6) + tag("QUEENS", 16, 182, 22, GOLD, -4), "");
  }

  /* 2. The old Jamaica Savings Bank at 161-02 Jamaica Av (1898, landmarked): pale limestone Beaux-Arts front, columns, carved pediment, the avenue rolling past */
  function valencia() {
    let cols = ""; [118, 146, 254, 282].forEach(x => cols += '<rect x="' + x + '" y="98" width="16" height="112" fill="#efe8d8"/><path d="M' + (x + 4) + ' 102v104M' + (x + 8) + ' 102v104M' + (x + 12) + ' 102v104" stroke="#cfc6b0" stroke-width="1"/><rect x="' + (x - 3) + '" y="92" width="22" height="8" fill="#ded5c0"/><rect x="' + (x - 3) + '" y="208" width="22" height="6" fill="#ded5c0"/>');
    let pig = ""; [0, 1, 2].forEach(i => pig += '<g class="fly" style="animation-delay:-' + (i * 2.4) + 's"><path d="M' + (40 + i * 18) + ' ' + (40 + i * 8) + 'q5-5 10 0q5-5 10 0" stroke="#4a4a55" stroke-width="2" fill="none"/></g>');
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' + pig +
      bldg(0, 90, 92, 130, "#8a4434", "#ffe6a8") + bldg(308, 80, 92, 140, "#6a6a7a", "#cfe6ff") +
      '<rect x="96" y="70" width="208" height="150" fill="#e6dcc6"/><path d="M90 70h220v-8H90z" fill="#d3c8ae"/>' +
      /* carved pediment with the name on the frieze */
      '<path d="M100 62L200 22l100 40z" fill="#e6dcc6" stroke="#bfb497" stroke-width="2"/><path d="M128 58L200 30l72 28z" fill="#d6cbb0"/><circle cx="200" cy="46" r="8" fill="#c9bea2" stroke="#a89c7e"/>' +
      '<rect x="96" y="70" width="208" height="20" fill="#d6cbb0"/>' + txt("JAMAICA SAVINGS BANK", 200, 85, 12, "#5a4e38") + cols +
      /* the arched entry, bronze doors */
      '<path d="M172 210v-74a28 28 0 0 1 56 0v74z" fill="#3a2e24" stroke="#bfb497" stroke-width="3"/><path d="M180 210v-60h40v60z" fill="#8a6a3a"/><path d="M200 150v60" stroke="#5a4428" stroke-width="2"/>' +
      '<path class="pls" d="M182 136a18 18 0 0 1 36 0z" fill="#ffe6a8" opacity=".6"/>' + txt("161-02", 200, 230, 9, "#5a4e38") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3d43"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus(-120, 214, "#0039a6", "slide") + txt("JAMAICA AV", 354, 46, 11, "#2a2d33") + txt("1898", 354, 62, 11, "#2a2d33") + tag("GRAFH", 10, 80, 22, GRN, -6),
      sky("g2", "#8fc3ea", "#f6e2b8"));
  }

  /* 3. The 165th Street Mall: the pedestrian street off Jamaica Av, sneaker spots, vendor umbrellas, old brick fronts, shoppers moving */
  function booth() {
    const shop = (x, w, col, sign, awn) => brick(x, 70, w, 140, col[0], col[1]) + '<rect x="' + (x + 6) + '" y="78" width="' + (w - 12) + '" height="22" fill="#111"/>' + txt(sign, x + w / 2, 94, 11, awn) +
      '<path d="M' + x + ' 140h' + w + 'l-6 14H' + (x + 6) + 'z" fill="' + awn + '"/><rect x="' + (x + 8) + '" y="156" width="' + (w - 16) + '" height="54" fill="#cfe6ff" opacity=".8"/>';
    const shoe = (x, y, c) => '<path d="M' + x + ' ' + y + 'h10l6 4h4v4h-20z" fill="' + c + '"/><path d="M' + x + ' ' + (y + 8) + 'h20" stroke="#fff" stroke-width="2"/>';
    const umb = (x, c1, c2, cls) => '<g class="sway ' + cls + '"><path d="M' + (x - 24) + ' 186q24-22 48 0z" fill="' + c1 + '"/><path d="M' + x + ' 164q-8 10-12 22M' + x + ' 164q8 10 12 22" stroke="' + c2 + '" stroke-width="3" fill="none"/><rect x="' + (x - 1) + '" y="186" width="2" height="30" fill="#333"/></g><rect x="' + (x - 22) + '" y="212" width="44" height="16" fill="#6a4a2a"/>';
    const walker = (x, c, cls) => '<g class="' + cls + '"><g class="bob"><circle cx="' + x + '" cy="200" r="6" fill="#3a2a22"/><rect x="' + (x - 6) + '" y="207" width="12" height="22" rx="4" fill="' + c + '"/><rect x="' + (x - 5) + '" y="229" width="4" height="12" fill="#222"/><rect x="' + (x + 1) + '" y="229" width="4" height="12" fill="#222"/></g></g>';
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' +
      shop(0, 130, ["#8a4434", "#7a3a2c"], "KICKS", GRN) + shop(130, 140, ["#9a6a4a", "#8a5c3e"], "SNEAKERS", GOLD) + shop(270, 130, ["#6a3a34", "#5c302a"], "GOLD &amp; GEAR", PINK) +
      shoe(26, 180, "#fff") + shoe(54, 176, GRN) + shoe(160, 180, "#d7263d") + shoe(194, 178, "#fff") + shoe(226, 182, GOLD) +
      '<rect x="0" y="210" width="400" height="50" fill="#b8ad9a"/><path d="M0 226h400M0 244h400" stroke="#a39884"/>' +
      umb(70, "#d7263d", "#fff", "") + umb(330, "#0039a6", "#fff", "sw2") +
      walker(160, "#3a7a4a", "slide") + walker(120, "#c8102e", "slideL") + walker(230, "#f2c14e", "slide sd2") +
      '<rect x="120" y="20" width="160" height="28" rx="4" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' + txt("165 ST MALL", 200, 40, 15, "#fff") +
      tag("GRAFH", 300, 64, 22, GRN, -4), sky("g3", "#7ec0ee", "#f8e7c0"));
  }

  /* 4. Grace Episcopal Church on Jamaica Av (1862): the dark brownstone Gothic church and its steeple, the old graveyard out front, leaves coming down */
  function avenue() {
    let stones = ""; [[40, 196], [70, 202], [104, 194], [290, 198], [326, 192], [356, 200]].forEach(s => stones += '<path d="M' + s[0] + ' ' + (s[1] + 22) + 'v-16a7 7 0 0 1 14 0v16z" fill="#9a9a92" stroke="#6a6a62"/>');
    let leaves = ""; [60, 140, 250, 330].forEach((x, i) => leaves += '<rect class="fall f' + (i % 3 + 1) + '" x="' + x + '" y="40" width="5" height="4" fill="' + (i % 2 ? "#d98a2a" : "#b8442e") + '"/>');
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' + tree(30, 120, 1.6, "#6a8a3a") + tree(372, 124, 1.5, "#8a7a2a") +
      /* the steeple + tower */
      '<path d="M228 40l18-34 18 34z" fill="#4a3428"/><rect x="226" y="40" width="40" height="80" fill="#6a4434"/><path d="M238 60v20a8 8 0 0 1 16 0V60z" fill="#2a1a14"/><circle cx="246" cy="98" r="6" fill="#2a1a14"/>' +
      /* the nave: brownstone, steep roof, pointed windows */
      '<path d="M120 120l70-50 70 50z" fill="#3a3238"/><rect x="128" y="120" width="134" height="100" fill="#7a4e3a"/>' +
      [146, 186, 226].map(x => '<path d="M' + x + ' 196v-44a9 12 0 0 1 18 0v44z" fill="#2a3a5a"/><path class="pls" d="M' + (x + 3) + ' 192v-38a6 9 0 0 1 12 0v38z" fill="#d98a2a" opacity=".45"/>').join("") +
      '<path d="M266 220v-100l20 0v100z" fill="#6a4434"/><path d="M188 220v-20a7 7 0 0 1 14 0v20z" fill="#2a1a14"/>' +
      /* the graveyard and the iron fence on the avenue */
      '<rect x="0" y="216" width="400" height="14" fill="#5a7a3a"/>' + stones + '<path d="M0 214h400" stroke="#1d2329" stroke-width="2"/>' +
      Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10 + 4) + ' 230v-18" stroke="#1d2329" stroke-width="2"/>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3d43"/>' + auto(0, 232, GOLD, "slideL") + leaves +
      '<rect x="14" y="14" width="150" height="36" rx="3" fill="#2a1a14" opacity=".85"/>' + txt("GRACE CHURCH", 89, 30, 13, "#f6efdc") + txt("JAMAICA AV · 1862", 89, 44, 9, GOLD) +
      tag("GRAFH", 300, 182, 22, GRN, -6), sky("g4", "#9ac8ea", "#f2d6a0"));
  }

  /* 5. Jamaica Av and 165th St, at the mouth of the 165th St Mall */
  function block() {
    return corner(["#08120c", "#1d3a2a"], "Jamaica Av", "165 St",
      tag("GRAFH", 40, 126, 58, GRN, -7) + tag("AUTOGRAF", 70, 156, 26, GOLD, -5) + tag("165 MALL", 30, 188, 26, PINK, -3) + tag("QUEENS", 130, 212, 22, "#f6efdc", -2), GRN);
  }

  window.SCENES = { station, valencia, booth, avenue, block };

})();
