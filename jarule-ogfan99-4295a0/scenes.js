/* Hollis, Queens opening scenes for Ja Rule's game. Each one is a small animated SVG, 400 x 260. */
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
  const ORG = "#ffb347", PLAT = "#dfe6ee", RED = "#d7263d";
  const house = (x, y, col, roof) => '<rect x="' + x + '" y="' + y + '" width="60" height="' + (236 - y) + '" fill="' + col + '"/><path d="M' + (x - 6) + ' ' + y + 'l36-26 36 26z" fill="' + roof + '"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y + 12) + '" width="14" height="14" fill="#ffe6a8"/><rect x="' + (x + 38) + '" y="' + (y + 12) + '" width="14" height="14" fill="#ffe6a8"/><rect x="' + (x + 22) + '" y="' + (236 - 30) + '" width="16" height="30" fill="#4a3220"/><rect x="' + (x - 2) + '" y="' + (236 - 36) + '" width="64" height="5" fill="#f2efe6"/>';

  /* 1. Hollis: the LIRR train pulling into the station up on the embankment */
  function station() {
    let hs = house(0, 140, "#c9b28a", "#6a3a2a") + house(80, 150, "#9ab0c4", "#3a3a4a") + house(260, 146, "#d8c4a0", "#7a3a2a") + house(340, 140, "#b5654a", "#3a2a2a");
    return elev({ g: ["#f2a65a", "#fbe3b0"], back: hs, band: "#0039a6", bl: [["LIRR", "#0039a6"]], name: "Hollis", sx: 110, sw: 180, tag: "HOLLIS", tc: ORG, deck: "#7a7468", tx: 250 });
  }

  /* 2. Hollis Playground: the court at sundown, the ball bouncing, chain-link fence */
  function court() {
    let fence = ""; for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 120l10 10M' + (x + 10) + ' 120l-10 10" stroke="#8a949e" stroke-width=".8"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/><circle cx="320" cy="70" r="26" fill="#ffd27a"/>' +
      house(20, 92, "#c9b28a", "#6a3a2a") + house(110, 100, "#9ab0c4", "#3a3a4a") + house(300, 96, "#d8c4a0", "#7a3a2a") +
      '<g opacity=".7">' + fence.replace(/120l/g, "112l").replace(/130/g, "122") + '</g><rect x="0" y="112" width="400" height="58" fill="#8a949e" opacity=".18"/><path d="M0 112h400" stroke="#6b7280" stroke-width="3"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#3a6a8a"/><rect x="40" y="180" width="320" height="70" fill="none" stroke="#fff" stroke-width="2"/><path d="M200 180v70" stroke="#fff" stroke-width="2"/><circle cx="200" cy="215" r="18" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="56" y="96" width="5" height="90" fill="#59616e"/><rect x="40" y="80" width="40" height="28" fill="#f2efe6" stroke="#59616e" stroke-width="2"/><rect x="52" y="92" width="16" height="10" fill="none" stroke="' + RED + '" stroke-width="2"/><path d="M50 108h20l-3 14h-14z" fill="none" stroke="#f2efe6" stroke-width="1.5"/>' +
      '<g class="hop"><circle cx="110" cy="190" r="9" fill="' + ORG + '" stroke="#7a3a0a" stroke-width="1.5"/><path d="M101 190h18M110 181v18" stroke="#7a3a0a" stroke-width="1"/></g>' +
      tag("HOLLA HOLLA", 200, 160, 26, ORG, -5),
      sky("g2", "#e8743a", "#fbd38a"));
  }

  /* 3. The studio: platinum plaques on the wall, the board lit up, the red light on */
  function studio() {
    let board = ""; for (let i = 0; i < 18; i++) board += '<rect class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" x="' + (60 + i * 16) + '" y="' + (196 + (i % 3) * 6) + '" width="8" height="' + (14 - (i % 3) * 4) + '" fill="' + [ORG, "#7cf29a", RED][i % 3] + '"/>';
    const plq = (x, c) => '<rect x="' + x + '" y="24" width="50" height="62" fill="#2a1a10" stroke="#c9a24a" stroke-width="2"/><circle cx="' + (x + 25) + '" cy="50" r="16" fill="' + c + '"/><circle cx="' + (x + 25) + '" cy="50" r="4" fill="#111"/><rect x="' + (x + 8) + '" y="72" width="34" height="6" fill="#c9a24a"/>';
    return svg('<rect width="400" height="260" fill="#1a1414"/><rect x="0" y="0" width="400" height="160" fill="#2a2020"/>' +
      plq(24, PLAT) + plq(86, PLAT) + plq(264, "#f2c14e") + plq(326, PLAT) +
      /* the booth window and the mic behind it */
      '<rect x="150" y="30" width="100" height="100" rx="4" fill="#0e1a24" stroke="#59616e" stroke-width="4"/><path d="M200 70v44" stroke="#9aa3ad" stroke-width="3"/><rect x="192" y="52" width="16" height="26" rx="8" fill="#cfd6de"/><circle cx="200" cy="66" r="14" fill="none" stroke="#2b2b30" stroke-width="2"/>' +
      '<rect class="pls" x="170" y="8" width="60" height="16" rx="3" fill="' + RED + '"/>' + txt("RECORDING", 200, 20, 9, "#fff") +
      /* the board */
      '<path d="M30 170h340l20 60H10z" fill="#3a3a44"/><rect x="10" y="230" width="380" height="30" fill="#24242c"/>' + board +
      '<rect x="40" y="140" width="34" height="34" fill="#1d1d22"/><circle class="pop" cx="57" cy="157" r="11" fill="#333"/><rect x="326" y="140" width="34" height="34" fill="#1d1d22"/><circle class="pop" cx="343" cy="157" r="11" fill="#333"/>' +
      tag("PAIN IS LOVE", 120, 252, 24, ORG, -3), "");
  }

  /* 4. Jamaica Av through Hollis at night: storefront lights, the bus rolling by */
  function avenue() {
    const shop = (x, w, awn, glow) => '<rect x="' + x + '" y="110" width="' + w + '" height="96" fill="#3a2e2a"/><path d="M' + x + ' 150h' + w + 'l-6 14H' + (x + 6) + 'z" fill="' + awn + '"/><rect class="flk" x="' + (x + 8) + '" y="168" width="' + (w - 16) + '" height="34" fill="' + glow + '" opacity=".8"/>' +
      '<rect x="' + (x + 10) + '" y="120" width="' + (w - 20) + '" height="20" fill="#ffe6a8" opacity=".6"/>';
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' + stars(20) +
      shop(0, 96, RED, "#ffe6a8") + shop(100, 96, "#2f8f4a", "#cfe6ff") + shop(200, 96, ORG, "#ffe6a8") + shop(300, 100, "#3a5ab0", "#ffd0f0") +
      [50, 150, 250, 350].map(x => '<rect x="' + (x - 2) + '" y="150" width="4" height="56" fill="#1d2329"/><circle class="pls" cx="' + x + '" cy="148" r="6" fill="#ffe7a8"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#1d2025"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus(-120, 196, "#0039a6", "slide") + auto(0, 232, "#f2efe6", "slideL sd3") +
      tag("JAMAICA AV", 16, 100, 26, ORG, -4),
      sky("g4", "#0b0f24", "#3a2346"));
  }

  /* 5. Hollis Av and Farmers Blvd */
  function block() {
    return corner(["#140c06", "#3a2a1a"], "Hollis Av", "Farmers Blvd",
      tag("JA RULE", 30, 122, 48, ORG, -7) + tag("HOLLA HOLLA", 60, 152, 24, PLAT, -5) + tag("THE RULER", 30, 186, 28, RED, -3) + tag("HOLLIS", 140, 210, 22, "#f6efdc", -2), ORG);
  }

  window.SCENES = { station, court, studio, avenue, block };

})();
