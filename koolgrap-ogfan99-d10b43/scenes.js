/* Corona, Queens opening scenes for Kool G Rap's game. Each one is a small animated SVG, 400 x 260. */
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
  const PUR = "#c9a4ff", GOLD = "#f2c14e", RED = "#d7263d";

  /* 1. 103 St-Corona Plaza: the 7 rolling in on the elevated line over Roosevelt Av */
  function station() {
    let shops = "";
    [[0, "#b5654a"], [80, "#d9b36a"], [160, "#7a8fa3"], [240, "#a6543a"], [320, "#c98f5a"]].forEach(b => shops += bldg(b[0], 112, 80, 124, b[1], "#ffe6a8"));
    return elev({ g: ["#8fc3ea", "#f6d9a6"], back: shops, band: "#b933ad", bl: [["7", "#b933ad"]], name: "103 St–Corona Plaza", size: 14, sx: 70, sw: 260, tag: "CORONA", tc: PUR, deck: "#5b4a6a" });
  }

  /* 2. The Unisphere in Flushing Meadows: the steel globe, its orbit rings turning, the fountains going */
  function unisphere() {
    let mer = "";
    for (let i = 1; i < 6; i++) mer += '<ellipse cx="200" cy="100" rx="' + (i * 13) + '" ry="70" fill="none" stroke="#b8c2cc" stroke-width="1.6"/>';
    for (let y = 44; y < 160; y += 14) { const dx = Math.sqrt(Math.max(0, 70 * 70 - (y - 100) * (y - 100))); mer += '<path d="M' + (200 - dx) + ' ' + y + 'h' + (2 * dx) + '" stroke="#b8c2cc" stroke-width="1.6"/>'; }
    let jets = "";
    for (let x = 30; x <= 370; x += 34) jets += '<path class="pls' + (x % 68 ? " p2" : "") + '" d="M' + x + ' 228q-3-26 0-40q3 14 0 40z" fill="#dff3ff"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="200" cy="100" r="70" fill="#1e3a5a" opacity=".35"/>' + mer +
      /* continents in brushed steel */
      '<path d="M160 64q14-8 26 2t8 22q-12 6-20-2t-14-22zM208 58q20 0 26 14t-4 24q-12-4-16-16t-6-22zM186 116q14 0 18 14t-8 24q-10-12-10-38zM236 112q14 4 12 18t-12 8z" fill="#cfd6de" stroke="#8a949e" stroke-width="1"/>' +
      /* orbit rings */
      '<g class="spin slow"><ellipse cx="200" cy="100" rx="96" ry="22" fill="none" stroke="#e8edf2" stroke-width="2.5" transform="rotate(-20 200 100)"/><circle cx="290" cy="68" r="5" fill="#e8edf2"/></g>' +
      '<ellipse cx="200" cy="100" rx="88" ry="18" fill="none" stroke="#e8edf2" stroke-width="2" transform="rotate(24 200 100)"/><circle cx="118" cy="66" r="4" fill="#e8edf2"/>' +
      /* the tripod base */
      '<path d="M200 170l-26 46h10l16-30 16 30h10z" fill="#9aa3ad"/><rect x="194" y="166" width="12" height="12" fill="#9aa3ad"/>' +
      /* reflecting pool */
      '<rect x="0" y="216" width="400" height="44" fill="#2f7fb0"/><path class="wave" d="M10 236h60M120 244h80M250 234h70M330 248h60" stroke="#dff3ff" stroke-width="2"/>' + jets +
      tag("FLUSHING MEADOWS", 12, 254, 20, PUR, -2),
      sky("g2", "#5fa8e0", "#cfe9f7"));
  }

  /* 3. The Queens Museum in the 1939 New York City Building: the long pale front with its tall square columns, and inside, the Panorama of the City of New York, the room-size model under its day-to-night lights */
  function pavilion() {
    let cols = "";
    for (let i = 0; i < 10; i++) cols += '<rect x="' + (56 + i * 30) + '" y="58" width="14" height="76" fill="#efe9da"/><path d="M' + (60 + i * 30) + ' 60v72M' + (66 + i * 30) + ' 60v72" stroke="#d8d0bc"/>';
    /* the Panorama: a little city of blocks with the light sweeping across */
    let model = "";
    for (let i = 0; i < 46; i++) { const x = 30 + (i * 37) % 336, h = 8 + (i * 13) % 34; model += '<rect x="' + x + '" y="' + (228 - h) + '" width="' + (6 + i % 3 * 2) + '" height="' + h + '" fill="' + ["#d8d2c4", "#bfb8a8", "#e9e4d6"][i % 3] + '"/>'; }
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' +
      /* the building */
      '<rect x="40" y="48" width="320" height="96" fill="#e2dccb"/><rect x="34" y="40" width="332" height="12" fill="#cfc8b4"/>' + cols +
      txt("QUEENS MUSEUM", 200, 50, 10, "#5a5444") + '<rect x="40" y="134" width="320" height="10" fill="#cfc8b4"/>' +
      /* cut-away into the Panorama room */
      '<rect x="20" y="152" width="360" height="80" fill="#34466a" stroke="#5a5444" stroke-width="4"/>' +
      '<path d="M24 214q90-8 176 4t176-6v16H24z" fill="#4a8ab0"/>' + model +
      '<g class="sway" style="animation-duration:6s;transform-origin:center top"><path d="M200 152l-70 80h140z" fill="#fff6c2" opacity=".3"/></g>' +
            txt("THE PANORAMA OF NYC", 200, 166, 10, GOLD) +
      '<rect x="0" y="232" width="400" height="28" fill="#4c6b3a"/>' + tree(16, 226, .7) + tree(384, 226, .7) +
      '<rect x="8" y="8" width="150" height="22" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' + txt("FLUSHING MEADOWS", 83, 23, 10, "#fff") +
      tag("KOOL G RAP", 246, 28, 22, PUR, -5) + tag("ROAD TO THE RICHES", 60, 254, 18, GOLD, -2),
      sky("g3", "#8fc3ea", "#f6e2b8"));
  }

  /* 4. Corona Heights: the bocce courts of Spaghetti Park, a ball rolling, the lemon ice window */
  function bocce() {
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' +
      bldg(0, 50, 110, 140, "#9a5a3a", "#ffe6a8") + bldg(290, 40, 110, 150, "#c08a5a", "#ffe6a8") +
      /* the ice window */
      '<rect x="120" y="70" width="160" height="110" fill="#f3ead8"/><rect x="120" y="70" width="160" height="22" fill="#2f8f4a"/><path d="M120 92h160" stroke="' + RED + '" stroke-width="4"/>' +
      txt("ITALIAN ICES", 200, 86, 14, "#fff") +
      '<rect x="140" y="104" width="120" height="56" fill="#cfe6ff" stroke="#8a7a5a" stroke-width="3"/>' +
      [160, 190, 220, 248].map((x, i) => '<path d="M' + (x - 9) + ' 140l3 16h12l3-16z" fill="#fff"/><circle cx="' + x + '" cy="136" r="9" fill="' + ["#fff36b", "#ff6b6b", "#fff36b", "#9be36b"][i] + '"/>').join("") +
      /* bocce court */
      '<rect x="0" y="190" width="400" height="70" fill="#b98a52"/><rect x="20" y="198" width="360" height="40" fill="#d9b07a" stroke="#6a4a24" stroke-width="4"/>' +
      '<circle cx="320" cy="218" r="4" fill="#fff"/><circle cx="300" cy="222" r="7" fill="#c0392b"/><circle cx="334" cy="212" r="7" fill="#2a6ab0"/>' +
      '<g class="slide" style="animation-duration:5s"><circle cx="40" cy="220" r="7" fill="#c0392b"/></g>' +
      tree(70, 176, .6) + tag("SPAGHETTI PARK", 18, 254, 18, GOLD, -2),
      sky("g4", "#7ec0ee", "#f8e7c0"));
  }

  /* 5. Roosevelt Av and 103 St, under the 7 at Corona Plaza */
  function block() {
    return corner(["#120d22", "#3a2a4a"], "Roosevelt Av", "103 St",
      tag("KOOL G RAP", 24, 120, 40, PUR, -7) + tag("JUICE CREW", 70, 150, 24, GOLD, -5) + tag("KOOL GENIUS", 30, 184, 26, RED, -3) + tag("CORONA", 120, 210, 22, "#f6efdc", -2), PUR);
  }

  window.SCENES = { station, unisphere, pavilion, bocce, block };

})();
