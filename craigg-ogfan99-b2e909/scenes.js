/* Queensbridge, Queens opening scenes for Craig G's game. Each one is a small animated SVG, 400 x 260. */
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
  const GOLD = "#f2c14e", RED = "#d7263d", ICE = "#9fe3ff";

  /* 1. 21 St-Queensbridge, cut away: the 41 Av stair going down off the corner, a Juice Crew battle flyer on the stair wall, the F pulling in below */
  function station() {
    let tiles = ""; for (let y = 156; y < 236; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#00000014"/>';
    return svg('<rect width="400" height="260" fill="url(#g0)"/>' + stars(10) +
      /* the Bridge in the back, the Houses on the block */
      '<path d="M0 60q50-26 100 0t100 0 100 0 100 0" stroke="#8a826e" stroke-width="3" fill="none"/>' + [60, 160, 260, 360].map(x => '<rect x="' + (x - 5) + '" y="34" width="10" height="44" fill="#8a826e"/>').join("") + '<rect x="0" y="74" width="400" height="5" fill="#6e6858"/>' +
      bldg(0, 50, 70, 70, "#7a3a2a", "#ffe6a8") + bldg(250, 44, 80, 76, "#8a4434", "#ffe6a8") + bldg(336, 56, 64, 64, "#7a3a2a", "#ffe6a8") +
      /* sidewalk, the green globe lamps and the stair going down */
      '<rect x="0" y="118" width="400" height="16" fill="#5d6068"/>' +
      [84, 196].map(x => '<rect x="' + (x - 2) + '" y="84" width="4" height="34" fill="#1f4a2a"/><circle class="pls" cx="' + x + '" cy="82" r="6" fill="#4bd06a"/>').join("") +
      '<rect x="84" y="104" width="112" height="14" fill="#2f6b3a"/>' + txt("SUBWAY", 140, 115, 10, "#fff") +
      '<path d="M84 118h112v18H84z" fill="#3a3a40"/><path d="M90 120h100M92 125h96M94 130h92" stroke="#77777f" stroke-width="2"/>' +
      /* the battle flyer on the stair wall */
      '<g transform="rotate(-4 245 98)"><rect x="214" y="80" width="62" height="38" fill="#f6efdc"/>' + txt("JUICE CREW", 245, 92, 8, RED) + txt("BATTLE", 245, 104, 10, "#1a1612") + txt("CRAIG G", 245, 114, 8, "#1a1612") + '</g>' +
      blade(330, 96, "41 Av") +
      /* below ground: the platform and the train */
      '<rect x="0" y="134" width="400" height="102" fill="#d6cfc2"/>' + tiles + '<rect x="0" y="138" width="400" height="10" fill="#8a3a2a"/>' +
      stSign(96, 150, 208, "21 St–Queensbridge", [["F", "#ff6319"]], 13) +
      '<rect x="0" y="186" width="400" height="38" fill="#15181c"/>' +
      '<g class="anim-train">' + car(10, 182, 300, "#ff6319", ["F", "#ff6319"]).replace(/height="54"/g, 'height="42"') + '</g>' +
      '<rect x="0" y="224" width="400" height="6" fill="#eab308"/><rect x="0" y="230" width="400" height="30" fill="#8d8a84"/>' +
      tag("CRAIG G", 24, 254, 26, GOLD, -4) + tag("JUICE CREW", 230, 254, 20, ICE, -3),
      sky("g0", "#070b20", "#2a2a5a"));
  }

  /* 2. The Queensboro Bridge at night: the steel cantilevers, the tram riding over the river, cars crossing */
  function bridge() {
    let city = ""; [[0, 100], [40, 70], [80, 90], [120, 60], [160, 84], [200, 50], [240, 76], [290, 64], [340, 90]].forEach(b => city += bldg(b[0], b[1], 38, 150 - b[1], "#1d2440", "#ffe6a8"));
    let truss = ""; for (let x = 0; x < 400; x += 20) truss += '<path d="M' + x + ' 140l10-28 10 28" stroke="#b8b09a" stroke-width="2" fill="none"/>';
    const tower = x => '<rect x="' + (x - 8) + '" y="70" width="16" height="104" fill="#a8a08a"/><path d="M' + (x - 8) + ' 70l8-16 8 16z" fill="#a8a08a"/><circle cx="' + x + '" cy="52" r="3" fill="#a8a08a"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' + stars(20) + city +
      '<path d="M0 112q50-30 100 0t100 0 100 0 100 0" stroke="#b8b09a" stroke-width="4" fill="none"/>' + tower(100) + tower(200) + tower(300) + truss +
      '<rect x="0" y="140" width="400" height="8" fill="#8a826e"/>' + auto(0, 120, GOLD, "slide") + auto(0, 120, "#cfd6de", "slideL sd3") +
      /* the tram */
      '<path d="M0 30l400 60" stroke="#59616e" stroke-width="1.5"/><g class="slide" style="animation-duration:18s"><path d="M30 38v8" stroke="#59616e" stroke-width="2"/><rect x="16" y="46" width="30" height="18" rx="3" fill="' + RED + '"/><rect x="20" y="50" width="22" height="7" fill="#cfe6ff"/></g>' +
      '<rect x="0" y="174" width="400" height="86" fill="#14284a"/><path class="wave" d="M20 196h60M140 210h70M260 192h50M320 230h60M60 240h80" stroke="#ffe6a8" stroke-width="2" opacity=".5"/>' +
      tag("59TH ST BRIDGE", 60, 252, 22, GOLD, -3),
      sky("g2", "#070b20", "#2a2a5a"));
  }

  /* 3. One Court Square: the blue-green glass tower over Long Island City, seen from the Queensbridge rooftops */
  function studio() {
    let bands = ""; for (let y = 34; y < 206; y += 8) bands += '<path d="M152 ' + y + 'h96" stroke="#0e4a52" stroke-width="1.2" opacity=".55"/>';
    let mull = ""; for (let x = 160; x < 248; x += 11) mull += '<path d="M' + x + ' 30v176" stroke="#9ad8d0" stroke-width=".8" opacity=".5"/>';
    return svg('<rect width="400" height="260" fill="url(#g2b)"/>' +
      '<circle cx="330" cy="54" r="18" fill="#ffe1a8"/>' +
      /* LIC low-rises */
      bldg(20, 150, 60, 60, "#5a5a66", "#ffe6a8") + bldg(84, 166, 50, 44, "#6a5a4a", "#ffe6a8") + bldg(270, 154, 56, 56, "#4a5060", "#ffe6a8") + bldg(330, 170, 60, 40, "#6a4a3a", "#ffe6a8") +
      /* the tower */
      '<path d="M148 210V34l4-6h96l4 6v176z" fill="#2c8a86"/><path d="M200 28h48l4 6v176h-52z" fill="#1f6e6c"/>' + bands + mull +
      '<path class="pls" d="M152 34l40 176h-40z" fill="#c9fff4" opacity=".22"/>' +
      '<rect x="196" y="16" width="8" height="12" fill="#1f4e4c"/><circle class="blk" cx="200" cy="14" r="3" fill="#ff3b30"/>' +
      /* plane going toward LaGuardia */
      '<g class="fly"><path d="M0 0l22 0 6-4h4l-3 5 3 5h-4l-6-4H0z" fill="#e8ecf2" transform="translate(40 60)"/></g>' +
      /* Queensbridge roofs in front */
      '<rect x="0" y="206" width="400" height="54" fill="#5a2e24"/>' + bldg(0, 206, 130, 54, "#7a3a2a", "#ffe6a8") + bldg(270, 206, 130, 54, "#7a3a2a", "#ffe6a8") +
      '<rect x="146" y="214" width="110" height="10" fill="#3a1a14"/>' + txt("ONE COURT SQUARE", 200, 248, 13, "#fff") + txt("LONG ISLAND CITY, VIEW FROM QB", 200, 236, 8, ICE) +
      tag("CRAIG G", 18, 196, 26, GOLD, -5),
      sky("g2b", "#f4a76a", "#8fc3ea"));
  }

  /* 4. Four Freedoms Park at the tip of Roosevelt Island: the lawn narrowing between the linden rows to the granite room and the bronze head in its niche */
  function park() {
    let lindens = ""; for (let i = 0; i < 6; i++) { const t = i / 5, y = 210 - t * 70, r = 18 - t * 11, dx = 150 - t * 110;
      lindens += '<g class="sway' + (i % 2 ? ' sw2' : '') + '"><circle cx="' + (200 - dx - 20) + '" cy="' + y + '" r="' + r + '" fill="#2f7a3a"/><circle cx="' + (200 + dx + 20) + '" cy="' + y + '" r="' + r + '" fill="#2f7a3a"/></g>'; }
    return svg('<rect width="400" height="260" fill="url(#g4b)"/>' +
      /* Manhattan across the river, the UN slab */
      bldg(0, 70, 40, 70, "#8a96a8", "#dfe8f2") + bldg(44, 56, 30, 84, "#7a889a", "#dfe8f2") + '<rect x="300" y="44" width="34" height="96" fill="#5e8aa8"/><path d="M300 44h34v96h-34z" fill="none" stroke="#d9e4ea" stroke-width="1"/>' +
      bldg(340, 80, 60, 60, "#8a96a8", "#dfe8f2") + '<path d="M300 44h34" stroke="#fff" stroke-width="2"/>' +
      '<rect x="0" y="126" width="400" height="18" fill="#4a7aa0"/><g class="slideL" style="animation-duration:16s"><path d="M0 132h34l-5 6H5z" fill="#fff"/></g>' +
      /* the lawn and the granite steps */
      '<path d="M40 260L176 140h48L360 260z" fill="#5f9a46"/><path d="M60 260l124-110M340 260L216 150" stroke="#cfc9bd" stroke-width="5"/>' + lindens +
      '<rect x="164" y="118" width="72" height="28" fill="#cfc9bd"/><rect x="170" y="112" width="60" height="6" fill="#bdb6a8"/>' +
      '<rect x="186" y="116" width="28" height="26" rx="2" fill="#a8a094"/><ellipse cx="200" cy="129" rx="8" ry="10" fill="#6a4a2a"/><ellipse cx="197" cy="126" rx="3" ry="4" fill="#8a6a3a" opacity=".6"/>' +
      txt("FOUR FREEDOMS PARK", 200, 236, 14, "#fff") + txt("ROOSEVELT ISLAND · ACROSS FROM QB", 200, 250, 8, "#f6efdc") +
      tag("CRAIG G", 14, 112, 26, GOLD, -6),
      sky("g4b", "#8fc3ea", "#f6e2b0"));
  }

  /* 5. Vernon Blvd and 41 Av, the river side of the Queensbridge Houses */
  function block() {
    return corner(["#0d0c08", "#2a3a4a"], "Vernon Blvd", "41 Av",
      tag("CRAIG G", 30, 122, 50, GOLD, -7) + tag("JUICE CREW", 50, 154, 26, ICE, -5) + tag("BATTLE KING", 30, 186, 28, RED, -3) + tag("RIVERSIDE QB", 80, 210, 20, "#f6efdc", -2), GOLD, ["#5a2e24", "#64362a"]);
  }

  window.SCENES = { station, bridge, studio, park, block };

})();
