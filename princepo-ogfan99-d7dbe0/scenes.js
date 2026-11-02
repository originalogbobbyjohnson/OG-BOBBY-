/* South Jamaica, Queens opening scenes for Prince Po's game. Each one is a small animated SVG, 400 x 260. */
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
  const ICE = "#9fe3ff", GOLD = "#f2c14e", VIO = "#7a5cff";

  /* 1. Sutphin Blvd-Archer Av-JFK Airport: the E pulling in, J and Z on the sign */
  function station() {
    return under({ wall: "#e6dcc4", band: "#2a5a8a", band2: "#c8a46a", name: "Sutphin Blvd–Archer Av–JFK", bl: [["E", "#0039a6"], ["J", "#996633"], ["Z", "#996633"]], sx: 30, sw: 340, size: 13, tag: "SOUTHSIDE", tc: ICE, tx: 130 });
  }

  /* 2. The AirTrain at Jamaica: the glass terminal, the train gliding out on its guideway, a plane overhead */
  function airtrain() {
    let mull = ""; for (let x = 130; x <= 330; x += 20) mull += '<path d="M' + x + ' 70v110" stroke="#cfd6de" stroke-width="2"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="fly"><path d="M40 60l40-8q6 0 4 4l-40 8z" fill="#e9ecef"/><path d="M58 56l-8-12h6l14 11z" fill="#9aa3ad"/></g>' +
      bldg(0, 90, 110, 150, "#7a6a5a", "#ffe6a8") +
      /* glass terminal with curved roof */
      '<path d="M120 70q110-40 220 0v110H120z" fill="#7fb4d8" opacity=".75"/><path d="M120 70q110-40 220 0" stroke="#e9ecef" stroke-width="6" fill="none"/>' + mull + '<path d="M120 110h220M120 150h220" stroke="#cfd6de" stroke-width="2"/>' +
      /* guideway */
      '<rect x="0" y="180" width="400" height="12" fill="#cfcac0"/><rect x="60" y="192" width="14" height="48" fill="#bdb6a8"/><rect x="250" y="192" width="14" height="48" fill="#bdb6a8"/>' +
      '<g class="slide"><rect x="0" y="152" width="120" height="28" rx="8" fill="#e9ecef" stroke="#6b7280" stroke-width="1.5"/><rect x="0" y="170" width="120" height="4" fill="#0039a6"/>' +
      [10, 34, 58, 82].map(x => '<rect x="' + x + '" y="157" width="18" height="10" rx="2" fill="#2a3440"/>').join("") + '</g>' +
      '<rect x="0" y="240" width="400" height="20" fill="#2a2d33"/>' + tag("AIRTRAIN", 290, 236, 22, VIO, -4),
      sky("g2", "#6fb0e8", "#e6f2fa"));
  }

  /* 3. Queens General Courthouse (88-11 Sutphin Blvd, 1939): the long limestone courthouse with its row of columns, right at his Sutphin & Archer corner; flags moving, traffic on Sutphin */
  function baisley() {
    let cols = ""; for (let x = 92; x <= 300; x += 26) cols += '<rect x="' + x + '" y="96" width="10" height="100" fill="#ece6d4"/><rect x="' + (x - 2) + '" y="94" width="14" height="4" fill="#d8d0b8"/><rect x="' + (x - 2) + '" y="194" width="14" height="4" fill="#d8d0b8"/>';
    let wins = ""; for (let x = 104; x < 300; x += 26) wins += '<rect x="' + x + '" y="110" width="12" height="70" fill="#3a4a5a" opacity=".7"/>';
    const flag = (x, c) => '<rect x="' + x + '" y="30" width="3" height="40" fill="#ccc"/><g class="sway"><rect x="' + (x + 3) + '" y="32" width="24" height="15" fill="' + c + '"/></g>';
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' +
      bldg(0, 70, 50, 140, "#6a5a5a", "#ffe6a8") + bldg(350, 60, 50, 150, "#5a5a6a", "#ffe6a8") +
      /* the long limestone block */
      '<rect x="40" y="80" width="320" height="130" fill="#e2dbc6"/><rect x="36" y="70" width="328" height="14" fill="#d2c9b0"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<path d="M40 ' + (90 + i * 20) + 'h320" stroke="#d6cfb8" stroke-width="1"/>').join("") +
      wins + cols +
      '<rect x="44" y="96" width="36" height="100" fill="#d6cfb8"/><rect x="320" y="96" width="36" height="100" fill="#d6cfb8"/>' +
      [52, 328].map(x => '<rect x="' + x + '" y="110" width="20" height="26" fill="#3a4a5a" opacity=".7"/><rect x="' + x + '" y="150" width="20" height="26" fill="#3a4a5a" opacity=".7"/>').join("") +
      txt("QUEENS GENERAL COURTHOUSE", 200, 82, 10, "#5a4a32") +
      /* the steps */
      '<rect x="80" y="198" width="240" height="6" fill="#cfc7ae"/><rect x="70" y="204" width="260" height="6" fill="#c2b9a0"/>' +
      flag(56, "#2a4a8a") + flag(316, "#f2efe6") +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2d33"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus(-120, 200, "#0039a6", "slide") + auto(0, 232, ICE, "slideL") +
      txt("88-11 SUTPHIN BLVD · JAMAICA", 200, 22, 12, "#1a1a22"),
      sky("g3", "#8fc3ea", "#f6e7c6"));
  }
  /* 4. The equinox stage: half sun, half moon, two mics up front, spotlights breathing */
  function equinox() {
    return svg('<rect width="400" height="260" fill="#0a0d18"/>' + stars(20) +
      '<circle cx="200" cy="96" r="64" fill="' + GOLD + '"/><path d="M200 32a64 64 0 0 1 0 128z" fill="#2a3a6a"/><circle cx="226" cy="80" r="6" fill="#1d2a4e"/><circle cx="240" cy="120" r="9" fill="#1d2a4e"/>' +
      '<g class="spin slow">' + [0, 45, 90, 135, 180].map(a => '<path d="M200 20v-12" stroke="' + GOLD + '" stroke-width="4" transform="rotate(' + (a + 180) + ' 200 96)"/>').join("") + '</g>' +
      '<g opacity=".22"><path class="pls" d="M60 0l-40 200h80z" fill="' + ICE + '"/><path class="pls p2" d="M340 0l40 200h-80z" fill="' + VIO + '"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a1f2e"/><path d="M0 190h400" stroke="' + GOLD + '" stroke-width="3"/>' +
      [150, 250].map(x => '<path d="M' + x + ' 190v-56M' + (x - 14) + ' 190l14-12 14 12" stroke="#9aa3ad" stroke-width="3" fill="none"/><rect x="' + (x - 4) + '" y="120" width="8" height="16" rx="4" fill="#cfd6de"/>').join("") +
      tag("ORGANIZED KONFUSION", 40, 244, 24, ICE, -3), "");
  }

  /* 5. Sutphin Blvd and Archer Av */
  function block() {
    return corner(["#0a0d18", "#2a2a4a"], "Sutphin Blvd", "Archer Av",
      tag("PRINCE PO", 26, 122, 44, ICE, -7) + tag("KONFUSION", 70, 152, 26, GOLD, -5) + tag("SLICKNESS", 30, 186, 28, VIO, -3) + tag("SOUTHSIDE", 120, 210, 20, "#f6efdc", -2), ICE);
  }

  window.SCENES = { station, airtrain, baisley, equinox, block };

})();
