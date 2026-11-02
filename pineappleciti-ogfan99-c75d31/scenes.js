/* Newark, New Jersey opening scenes for pineappleCITI's game. Each one is a small animated SVG, 400 x 260. */
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
  const BLU = "#9fe3ff", NEON = "#3a7bff", GOLD = "#f2c14e", PINK = "#ff8fc7";

  /* 1. Newark Broad Street at night, her angle: the NJ Transit train up on the platform, the Newark Light Rail car gliding out underneath, a neon pineapple glowing in the window across the street */
  function station() {
    let back = ""; [[0, 30, "#1d2a5a"], [300, 20, "#2a3678"]].forEach(b => back += bldg(b[0], b[1], 100, 120, b[2], BLU));
    let lr = ""; for (let x = 16; x < 160; x += 30) lr += '<rect x="' + x + '" y="196" width="20" height="14" rx="2" fill="#cfe6ff" opacity=".85"/>';
    return svg('<rect width="400" height="260" fill="url(#g1)"/>' + stars(18) + back +
      /* neon pineapple in the window */
      '<rect x="318" y="58" width="64" height="64" fill="#0a0d1e" stroke="' + NEON + '" stroke-width="2"/>' +
      '<g class="pls"><path d="M350 78l-6-12 6 4 2-8 3 8 6-4-6 12z" fill="none" stroke="#7cf29a" stroke-width="2"/><ellipse cx="350" cy="96" rx="13" ry="17" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/></g>' +
      /* upper platform */
      '<rect x="0" y="22" width="300" height="8" fill="#3a4250"/><rect x="0" y="30" width="300" height="3" fill="' + NEON + '"/>' +
      stSign(20, 38, 270, "Newark Broad Street", [["NJT", "#0039a6"]], 14) +
      '<g class="anim-train">' + car(10, 76, 290, NEON, ["NJT", "#0039a6"]) + '</g>' +
      '<rect x="0" y="130" width="400" height="7" fill="#eab308"/><rect x="0" y="137" width="400" height="14" fill="#3a3a5a"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 6) + '" y="151" width="12" height="38" fill="#3a3a5a"/>').join("") +
      /* light rail below, overhead wire */
      '<path d="M0 172h400" stroke="#9aa3ad" stroke-width="1.5"/>' +
      '<g class="slideL"><path d="M60 172l10-8h14l10 8" stroke="#9aa3ad" stroke-width="2" fill="none"/><rect x="0" y="186" width="180" height="34" rx="6" fill="#e9ecef" stroke="#6b7280" stroke-width="1.5"/><rect x="0" y="212" width="180" height="4" fill="#f26522"/>' + lr +
      '<text x="150" y="207" text-anchor="middle" ' + FONT + ' font-size="8" fill="#0039a6">LIGHT RAIL</text></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#1a1d28"/><path d="M0 224h400M0 232h400" stroke="#6b7280" stroke-width="2"/>' +
      tag("PINEAPPLECITI", 14, 254, 24, BLU, -4) + tag("NEONBLUE", 250, 254, 22, PINK, -5),
      sky("g1", "#060a2a", "#3a2a7a"));
  }

  /* 2. The Newark Public Library on Washington St (1901): the pale-stone Renaissance palazzo, three tall arches, the deep cornice, readers going in, lamps glowing */
  function blossoms() {
    const arch = x => '<path d="M' + x + ' 206v-46a18 18 0 0 1 36 0v46z" fill="#2a2433" stroke="#d8cfbd" stroke-width="3"/><path class="pls" d="M' + (x + 6) + ' 160a12 12 0 0 1 24 0z" fill="#ffd27a" opacity=".6"/>';
    let wins = ""; for (let x = 92; x < 320; x += 34) wins += '<path d="M' + x + ' 116v-22a8 8 0 0 1 16 0v22z" fill="#3a3f55"/>';
    let rust = ""; for (let y = 140; y < 206; y += 10) rust += '<path d="M70 ' + y + 'h260" stroke="#c9bfa8" stroke-width="1.5"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' +
      bldg(0, 110, 66, 130, "#5a4a4a", "#ffe6a8") + bldg(334, 100, 66, 140, "#4a4a5a", "#ffe6a8") +
      '<rect x="70" y="64" width="260" height="142" fill="#e8e0cc"/>' + rust + wins +
      '<rect x="62" y="56" width="276" height="12" fill="#d0c6ae"/><path d="M62 56h276l-8-8H70z" fill="#bfb497"/>' +
      '<rect x="70" y="122" width="260" height="10" fill="#d8cfbd"/>' + txt("FREE PUBLIC LIBRARY", 200, 131, 8, "#6a5e48") +
      arch(126) + arch(182) + arch(238) +
      [100, 300].map(x => '<rect x="' + (x - 2) + '" y="180" width="4" height="30" fill="#2a2a30"/><circle class="pls p2" cx="' + x + '" cy="176" r="6" fill="#ffe6a8"/>').join("") +
      '<rect x="60" y="206" width="280" height="8" fill="#c9bfa8"/><rect x="0" y="214" width="400" height="46" fill="#3a3d43"/>' +
      [150, 250].map((x, i) => '<g class="bob" style="animation-delay:-' + i * .6 + 's"><circle cx="' + x + '" cy="220" r="5" fill="#2a1d17"/><rect x="' + (x - 5) + '" y="225" width="10" height="16" rx="3" fill="' + [PINK, BLU][i] + '"/></g>').join("") +
      '<rect x="10" y="10" width="160" height="34" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' + txt("NEWARK PUBLIC LIBRARY", 90, 25, 9, "#fff") + txt("WASHINGTON ST · 1901", 90, 38, 8, "#fff") +
      tag("PINEAPPLECITI", 196, 34, 22, NEON, -4),
      sky("g2", "#7ec0ee", "#f8e7c0"));
  }

  /* 3. NJPAC: the glass hall lit up at night, the crowd going in, the lights breathing */
  function njpac() {
    let mull = ""; for (let x = 120; x <= 300; x += 20) mull += '<path d="M' + x + ' 70v130" stroke="#3a3a4a" stroke-width="2"/>';
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' + stars(18) +
      brick(0, 60, 110, 180, "#8a4434", "#9a4e3c") + brick(290, 60, 110, 180, "#8a4434", "#9a4e3c") +
      '<rect x="110" y="70" width="180" height="130" fill="#ffd27a" opacity=".85"/>' + mull + '<path d="M110 110h180M110 150h180" stroke="#3a3a4a" stroke-width="2"/><path d="M104 70h192" stroke="#2a2a3a" stroke-width="8"/>' +
      '<g opacity=".35"><rect class="pls" x="110" y="70" width="180" height="130" fill="' + PINK + '"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2a2d33"/>' +
      [140, 170, 230, 260].map((x, i) => '<g class="bob" style="animation-delay:-' + i * .4 + 's"><circle cx="' + x + '" cy="206" r="6" fill="#0a0d14"/><rect x="' + (x - 6) + '" y="212" width="12" height="20" rx="4" fill="#0a0d14"/></g>').join("") +
      tag("PERFORMING ARTS", 70, 252, 24, BLU, -3),
      sky("g3", "#060a2a", "#2a2a5a"));
  }

  /* 4. The rooftop mural: a big neon pineapple glowing over Brick City */
  function mural() {
    let city = ""; [[0, 150], [50, 130], [100, 160], [290, 140], [340, 120]].forEach(b => city += bldg(b[0], b[1], 48, 260 - b[1], "#141a3a", BLU));
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' + stars(24) + city +
      '<rect x="140" y="40" width="140" height="180" fill="#1d2440" stroke="' + NEON + '" stroke-width="3"/>' +
      '<g class="pop"><path d="M210 92l-14-34 14 12 4-22 8 22 14-12-14 34z" fill="#2f8f4a"/><ellipse cx="210" cy="140" rx="40" ry="50" fill="' + GOLD + '" stroke="' + NEON + '" stroke-width="4"/>' +
      '<path d="M178 112l64 56M172 136l50 46M186 96l58 52M242 112l-64 56M248 136l-50 46M234 96l-58 52" stroke="#c48a1a" stroke-width="2"/></g>' +
      '<g opacity=".3"><circle class="pls" cx="210" cy="130" r="80" fill="' + NEON + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#0a0d1e"/>' + tag("THEY LOVE CITI", 90, 250, 26, PINK, -3),
      sky("g4", "#05081c", "#1d1a4a"));
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
  /* Newark Symphony Hall (1925), drawn 200 wide from 0,0: lettering over the cornice, pale limestone, six tall arched windows, optional bulb marquee */
  const icHall = (o) => { o = o || {};
    const st = o.stone || "#dccdb0", cn = o.cornice || "#c6b796", wn = o.win || "#f2c46a", fr = o.frame || "#2a2a3a", lt = o.letter || "#f6efdc";
    let s = '<text x="100" y="-5" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="14" letter-spacing="3" fill="' + lt + '"' + (o.lstroke ? ' stroke="' + o.lstroke + '" stroke-width="3" paint-order="stroke"' : '') + '>SYMPHONY HALL</text>' +
      '<rect x="-6" y="0" width="212" height="8" fill="' + cn + '"/><rect x="0" y="8" width="200" height="104" fill="' + st + '"/><path d="M0 15h200" stroke="' + cn + '" stroke-width="1.5"/>';
    for (let i = 0; i < 6; i++) { const x = 18 + i * 30; s += '<path d="M' + x + ' 66V31a8 8 0 0 1 16 0V66z" fill="' + wn + '" stroke="' + fr + '" stroke-width="2.5"/>'; }
    if (o.bulbs) for (let x = -2; x <= 202; x += 12) s += '<circle class="ic-bl' + ((x / 12) % 2 ? " ic-b2" : "") + '" cx="' + x + '" cy="4" r="2" fill="#ffe7a8"/>';
    if (o.marquee) { s += '<rect x="10" y="74" width="180" height="22" fill="#1a1414" stroke="#c9a24a" stroke-width="1.5"/>';
      for (let x = 16; x < 190; x += 10) { const c = (x / 10) % 2 ? "ic-bl" : "ic-bl ic-b2"; s += '<circle class="' + c + '" cx="' + x + '" cy="78.5" r="2" fill="#ffe7a8"/><circle class="' + c + '" cx="' + x + '" cy="91.5" r="2" fill="#ffe7a8"/>'; } }
    return s; };
  const icBg = () => IC_CSS +
    '<ellipse class="ic-pl" cx="86" cy="58" rx="54" ry="12" fill="#3aa0ff" opacity=".35"/>' +
    '<path d="M114 19.5L140 25V60H114z" fill="#7d88a8"/><path d="M114 16L143 21.5V25L114 19.5z" fill="#9aa6c6"/><path d="M122 56V36a3 3 0 0 1 6 0V56zM131 56V38a3 3 0 0 1 6 0V56z" fill="#7fd6ff" opacity=".8"/>' +
    '<g transform="translate(30 16) scale(.42)">' + icHall({ stone: "#c9d2e6", cornice: "#a9b6d4", win: "#7fd6ff", frame: "#1d2a5a", letter: "#cfe9ff" }) + '</g>' +
    '<path class="ic-pl ic-p3" d="M40 60L52 18h6L66 60zM88 60L98 18h6L114 60z" fill="#7fd6ff" opacity=".25"/>';

  /* 5. Broad St and University Av */
  function block() {
    return corner(["#060a1c", "#1d2a5a"], "Broad St", "University Av",
      tag("PINEAPPLECITI", 22, 118, 34, BLU, -7) + tag("NEONBLUE", 60, 152, 28, NEON, -5) + tag("THEY LOVE CITI", 30, 186, 24, PINK, -3) + tag("NEWARK", 140, 210, 22, GOLD, -2), BLU, ["#2a2a4a", "#33335a"], icBg());
  }

  window.SCENES = { station, blossoms, njpac, mural, block };

})();
