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

  /* 2. King Manor in Rufus King Park: the old white manor house, the big trees, leaves coming down */
  function manor() {
    let win = ""; [130, 166, 222, 258].forEach(x => { win += '<rect x="' + x + '" y="112" width="16" height="22" fill="#2a3440"/><rect x="' + (x - 5) + '" y="112" width="4" height="22" fill="#2f5a3a"/><rect x="' + (x + 17) + '" y="112" width="4" height="22" fill="#2f5a3a"/>';
      win += '<rect x="' + x + '" y="158" width="16" height="24" fill="#2a3440"/><rect x="' + (x - 5) + '" y="158" width="4" height="24" fill="#2f5a3a"/><rect x="' + (x + 17) + '" y="158" width="4" height="24" fill="#2f5a3a"/>'; });
    let leaves = ""; [60, 140, 230, 300, 360].forEach((x, i) => leaves += '<path class="fall' + ["", " f2", " f3"][i % 3] + '" d="M' + x + ' 20q5-6 10 0-5 6-10 0z" fill="' + ["#e8743a", "#f2c14e", "#c0392b"][i % 3] + '"/>');
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' +
      tree(40, 120, 1.6, "#3a7a3a") + tree(366, 110, 1.7, "#4a8a3a") +
      /* gambrel roof, white clapboard, the columned porch */
      '<path d="M104 100l14-34h164l14 34z" fill="#5a4a44"/><rect x="190" y="50" width="14" height="22" fill="#7a5a4a"/><rect x="110" y="100" width="180" height="96" fill="#f4f0e6"/>' +
      [112, 124, 136, 148, 160, 172, 184].map(y => '<path d="M110 ' + y + 'h180" stroke="#d8d2c4" stroke-width="1"/>').join("") + win +
      '<rect x="190" y="150" width="20" height="46" fill="#2f5a3a"/><path d="M176 146h48l-24-14z" fill="#f4f0e6" stroke="#bdb6a8"/><rect x="178" y="146" width="4" height="50" fill="#fff"/><rect x="218" y="146" width="4" height="50" fill="#fff"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5a8a3a"/><path d="M196 196l-20 64h48l-20-64z" fill="#c9b28a"/>' + leaves +
      tag("KING PARK", 260, 240, 22, CY, -4),
      sky("g2", "#8fc3ea", "#e6f2fa"));
  }

  /* 3. The penthouse at night: the rooftop over Queens, string lights, a plane crossing toward JFK */
  function penthouse() {
    let lights = ""; for (let i = 0; i < 16; i++) lights += '<circle class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" cx="' + (20 + i * 24) + '" cy="' + (60 + Math.sin(i / 2.5) * 10) + '" r="3.5" fill="' + [GOLD, CY, PINK][i % 3] + '"/>';
    let city = ""; [[0, 120, "#1d2a44"], [50, 100, "#24304e"], [110, 130, "#1d2a44"], [170, 90, "#2a3658"], [240, 116, "#1d2a44"], [300, 96, "#24304e"], [350, 126, "#1d2a44"]].forEach(b => city += bldg(b[0], b[1], 52, 200 - b[1], b[2], "#ffe6a8"));
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' + stars(30) + '<circle cx="330" cy="40" r="14" fill="#fff3c4"/>' +
      '<g class="fly"><path d="M40 60l30-6q6 0 4 4l-30 6z" fill="#e9ecef"/><circle class="blk" cx="42" cy="62" r="2" fill="#ff4d4d"/></g>' + city +
      '<path d="M0 60q100 26 200 0t200 0" stroke="#59616e" stroke-width="1" fill="none"/>' + lights +
      /* rooftop deck, glass rail, two chairs */
      '<rect x="0" y="196" width="400" height="64" fill="#3a2e2a"/><path d="M0 204h400M0 220h400M0 236h400" stroke="#2a201c" stroke-width="2"/><rect x="0" y="178" width="400" height="18" fill="' + CY + '" opacity=".14"/><path d="M0 178h400" stroke="#cfd6de" stroke-width="2"/>' +
      '<path d="M60 230v-26h30v26M60 214h30" stroke="#d8d2c4" stroke-width="4" fill="none"/><path d="M300 230v-26h30v26M300 214h30" stroke="#d8d2c4" stroke-width="4" fill="none"/>' +
      tag("PENTHOUSE", 130, 248, 28, GOLD, -4),
      sky("g3", "#070b20", "#2a2a5a"));
  }

  /* 4. The festival stage: lights sweeping, the crowd jumping */
  function festival() {
    let crowd = ""; for (let i = 0; i < 22; i++) crowd += '<g class="hop' + (i % 2 ? " h2" : "") + '"><circle cx="' + (10 + i * 18) + '" cy="' + (214 + (i % 3) * 4) + '" r="8" fill="#14181d"/><path d="M' + (4 + i * 18) + ' ' + (206 + (i % 3) * 4) + 'l-4-16M' + (16 + i * 18) + ' ' + (206 + (i % 3) * 4) + 'l4-16" stroke="#14181d" stroke-width="3"/></g>';
    return svg('<rect width="400" height="260" fill="#0a0814"/>' + stars(14) +
      '<g opacity=".25"><path class="pls" d="M80 30l-60 200h60z" fill="' + CY + '"/><path class="pls p2" d="M320 30l60 200h-60z" fill="' + PINK + '"/></g>' +
      '<rect x="40" y="30" width="320" height="10" fill="#2b2b30"/><rect x="40" y="30" width="8" height="150" fill="#2b2b30"/><rect x="352" y="30" width="8" height="150" fill="#2b2b30"/>' +
      [70, 120, 170, 230, 280, 330].map((x, i) => '<circle class="blk' + ["", " b2", " b3"][i % 3] + '" cx="' + x + '" cy="46" r="6" fill="' + [GOLD, CY, PINK][i % 3] + '"/>').join("") +
      '<rect x="110" y="60" width="180" height="80" fill="#121a2c" stroke="' + CY + '" stroke-width="2"/>' + txt("BAS", 200, 112, 40, CY) + '<circle class="pls" cx="200" cy="100" r="60" fill="' + CY + '" opacity=".08"/>' +
      '<rect x="40" y="170" width="320" height="16" fill="#2b2b30"/>' + crowd +
      '<rect x="0" y="230" width="400" height="30" fill="#14181d"/>' + tag("MILKY WAY", 140, 254, 22, GOLD, -3), "");
  }

  /* 5. Hillside Av and Parsons Blvd */
  function block() {
    return corner(["#071018", "#1d3a4a"], "Hillside Av", "Parsons Blvd",
      tag("BAS", 40, 130, 64, CY, -7) + tag("DREAMVILLE", 130, 120, 24, GOLD, -5) + tag("GLOBE TROTTER", 26, 180, 24, PINK, -3) + tag("JAMAICA", 110, 210, 22, "#f6efdc", -2), CY);
  }

  window.SCENES = { station, manor, penthouse, festival, block };

})();
