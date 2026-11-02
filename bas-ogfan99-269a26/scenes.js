/* Jamaica, Queens opening scenes for Bas's game. Each one is a small animated SVG, 400 x 260. */
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
  const CY = "#38e8ff", GOLD = "#f2c14e", PINK = "#ff6fb5";

  /* 1. Parsons Blvd: the F pulling into the station under Hillside Av */
  function station() {
    return under({ wall: "#e8e2d4", band: "#b5542a", band2: "#f2e6c8", name: "Parsons Blvd", bl: [["F", "#ff6319"]], sx: 90, sw: 220, tag: "DREAMVILLE", tc: CY, tx: 130 });
  }

  /* 2. Jamaica High School up on Gothic Dr (1927): the Collegiate Gothic brick and limestone school on the hill, the square tower, leaves coming down */
  function manor() {
    let win = ""; [96, 124, 152, 238, 266, 294].forEach(x => { win += '<path d="M' + x + ' 150v-22l7-8 7 8v22z" fill="#2a3440"/><path d="M' + x + ' 186v-20l7-8 7 8v20z" fill="#2a3440"/>'; });
    let leaves = ""; [60, 140, 230, 300, 360].forEach((x, i) => leaves += '<path class="fall' + ["", " f2", " f3"][i % 3] + '" d="M' + x + ' 20q5-6 10 0-5 6-10 0z" fill="' + ["#e8743a", "#f2c14e", "#c0392b"][i % 3] + '"/>');
    let cren = ""; for (let x = 172; x < 228; x += 10) cren += '<rect x="' + x + '" y="36" width="6" height="8" fill="#e6dcc4"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' +
      '<path d="M0 206q200-40 400 0v54H0z" fill="#4f7f3a"/>' +
      brick(80, 112, 240, 86, "#8a4a32", "#96553a") + '<rect x="80" y="108" width="240" height="6" fill="#e6dcc4"/><rect x="80" y="160" width="240" height="4" fill="#e6dcc4"/>' + win +
      brick(170, 44, 60, 154, "#8a4a32", "#96553a") + cren + '<rect x="170" y="44" width="60" height="4" fill="#e6dcc4"/>' +
      '<rect x="166" y="40" width="8" height="158" fill="#e6dcc4"/><rect x="226" y="40" width="8" height="158" fill="#e6dcc4"/>' +
      '<path d="M190 100v-24l10-12 10 12v24z" fill="#2a3440"/><circle cx="200" cy="120" r="9" fill="#f4f0e6" stroke="#5a4a44" stroke-width="2"/><path d="M200 120v-6M200 120h4" stroke="#222" stroke-width="1.5"/>' +
      '<path d="M186 198v-30l14-14 14 14v30z" fill="#3a2a22"/><path d="M182 168l18-18 18 18" stroke="#e6dcc4" stroke-width="3" fill="none"/>' +
      '<rect x="252" y="8" width="2" height="36" fill="#59616e"/><path class="sway" d="M254 9h18l-3 6 3 6h-18z" fill="#c0392b" style="transform-origin:left center"/>' +
      tree(40, 176, 1.5, "#c0682a") + tree(364, 172, 1.6, "#d08a2a") +
      '<path d="M196 260q4-40 4-62" stroke="#c9b28a" stroke-width="16" fill="none"/>' + leaves +
      txt("JAMAICA HIGH SCHOOL", 200, 226, 14, "#fff") + txt("GOTHIC DR · OFF HILLSIDE AV", 200, 240, 8, "#f6efdc") +
      tag("BAS", 24, 252, 26, CY, -4),
      sky("g2", "#8fc3ea", "#f4e2c4"));
  }

  /* 3. Too High to Riot (2016): a Queens rooftop at night, purple smoke curling up, the big Dreamville moon */
  function penthouse() {
    let city = ""; [[0, 132, "#1d1a3a"], [50, 112, "#241f46"], [110, 138, "#1d1a3a"], [170, 104, "#2a2450"], [240, 128, "#1d1a3a"], [300, 110, "#241f46"], [350, 136, "#1d1a3a"]].forEach(b => city += bldg(b[0], b[1], 52, 200 - b[1], b[2], "#c9a8ff"));
    const puff = (x, y, r, c) => '<circle class="rise ' + c + '" cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#a64dff" opacity=".45"/>';
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' + stars(26) +
      '<circle class="pls" cx="200" cy="70" r="54" fill="#d9c2ff" opacity=".25"/><circle cx="200" cy="70" r="42" fill="#efe6ff"/><circle cx="186" cy="60" r="7" fill="#d6c8f0"/><circle cx="214" cy="82" r="5" fill="#d6c8f0"/>' +
      txt("DREAMVILLE", 200, 75, 11, "#5a3a9a") + city +
      /* water tower and the roof edge */
      '<rect x="290" y="150" width="30" height="30" fill="#4a3a5a"/><path d="M286 150l19-14 19 14z" fill="#3a2a4a"/><path d="M292 180l-4 16M318 180l4 16" stroke="#3a2a4a" stroke-width="3"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a2236"/><rect x="0" y="192" width="400" height="6" fill="#3e3450"/>' +
      puff(110, 186, 14, "") + puff(126, 180, 18, "r2") + puff(96, 176, 12, "r3") + puff(260, 188, 16, "r2") + puff(240, 182, 12, "") +
      '<rect x="98" y="196" width="40" height="14" rx="3" fill="#14181d"/><circle class="pop" cx="118" cy="203" r="4" fill="' + GOLD + '"/>' +
      txt("TOO HIGH TO RIOT", 200, 228, 18, "#efe6ff") + txt("2016 · QUEENS ROOFTOP", 200, 244, 9, PINK) +
      tag("BAS", 24, 254, 26, CY, -4),
      sky("g3", "#0a0618", "#3a1a5a"));
  }

  /* 4. Dreamville Festival at Dorothea Dix Park, Raleigh: the stage on the big lawn, the downtown towers behind, the crowd jumping */
  function festival() {
    let crowd = ""; for (let i = 0; i < 22; i++) crowd += '<g class="hop' + (i % 2 ? " h2" : "") + '"><circle cx="' + (10 + i * 18) + '" cy="' + (214 + (i % 3) * 4) + '" r="8" fill="#14181d"/><path d="M' + (4 + i * 18) + ' ' + (206 + (i % 3) * 4) + 'l-4-12M' + (16 + i * 18) + ' ' + (206 + (i % 3) * 4) + 'l4-12" stroke="#14181d" stroke-width="3"/></g>';
    /* Raleigh skyline: the PNC tower with its stepped crown, the Wells Fargo tower, the rest */
    const sk = '<g fill="#3a3a5e">' + '<rect x="70" y="70" width="28" height="80"/><rect x="100" y="88" width="22" height="62"/><rect x="250" y="80" width="26" height="70"/><rect x="280" y="96" width="30" height="54"/>' +
      '<rect x="150" y="54" width="30" height="96"/><path d="M150 54l15-14 15 14z"/><rect x="161" y="22" width="8" height="20"/>' +
      '<rect x="204" y="64" width="34" height="86"/><rect x="210" y="56" width="22" height="10"/></g>' +
      '<circle class="blk" cx="165" cy="20" r="2.5" fill="#ff4d4d"/>';
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' + '<circle cx="330" cy="58" r="16" fill="#ffd9a0"/>' + sk +
      '<path d="M0 150q200-30 400 0v110H0z" fill="#4f8a3a"/>' + tree(30, 140, 1.4, "#2f6a2f") + tree(372, 138, 1.5, "#2f6a2f") +
      '<rect x="110" y="104" width="180" height="8" fill="#2b2b30"/><rect x="110" y="104" width="6" height="74" fill="#2b2b30"/><rect x="284" y="104" width="6" height="74" fill="#2b2b30"/>' +
      '<rect x="122" y="116" width="156" height="40" fill="#121a2c" stroke="' + CY + '" stroke-width="2"/>' + txt("DREAMVILLE FEST", 200, 134, 13, CY) + txt("BAS", 200, 150, 13, GOLD) +
      [130, 170, 230, 270].map((x, i) => '<circle class="blk' + ["", " b2", " b3"][i % 3] + '" cx="' + x + '" cy="110" r="3" fill="' + [GOLD, CY, PINK][i % 3] + '"/>').join("") +
      '<rect x="110" y="170" width="180" height="12" fill="#2b2b30"/>' + crowd +
      '<rect x="0" y="230" width="400" height="30" fill="#2f5a2a"/>' + txt("DOROTHEA DIX PARK · RALEIGH, NC", 200, 250, 11, "#fff") +
      tag("BAS", 18, 40, 26, CY, -5),
      sky("g4", "#f4a76a", "#f6d6a0"));
  }

  /* 5. Hillside Av and Parsons Blvd */
  function block() {
    return corner(["#071018", "#1d3a4a"], "Hillside Av", "Parsons Blvd",
      tag("BAS", 40, 130, 64, CY, -7) + tag("DREAMVILLE", 130, 120, 24, GOLD, -5) + tag("GLOBE TROTTER", 26, 180, 24, PINK, -3) + tag("JAMAICA", 110, 210, 22, "#f6efdc", -2), CY);
  }

  window.SCENES = { station, manor, penthouse, festival, block };

})();
