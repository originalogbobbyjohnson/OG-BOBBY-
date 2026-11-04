/* Greenpoint, Brooklyn opening scenes. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1s steps(1) infinite}.b2{animation-delay:-.25s}.b3{animation-delay:-.5s}.b4{animation-delay:-.75s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}.slow{animation-duration:12s}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sway{animation:sway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}.sw2{animation-delay:-1.5s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.wave{animation:wave 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:0}20%{opacity:.7}100%{transform:translateY(-60px);opacity:0}}.rise{animation:rise 4s linear infinite}.r2{animation-delay:-1.3s}.r3{animation-delay:-2.6s}' +
    '@keyframes fall{0%{transform:translate(0,-30px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,250px) rotate(300deg);opacity:.2}}.fall{animation:fall 6s linear infinite;transform-box:fill-box;transform-origin:center}.f2{animation-delay:-2s}.f3{animation-delay:-4s}' +
    '@keyframes slide{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.slide{animation:slide 9s linear infinite}.sl2{animation-delay:-4.5s}.slw{animation-duration:16s}' +
    '@keyframes slideL{from{transform:translateX(480px)}to{transform:translateX(-160px)}}.slideL{animation:slideL 8s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bob{animation:bob 1.8s ease-in-out infinite}.bb2{animation-delay:-.9s}' +
    '@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}.jump{animation:jump .9s ease-in-out infinite}.j2{animation-delay:-.45s}' +
    '@keyframes pulse{0%,100%{opacity:.3}50%{opacity:1}}.pls{animation:pulse 2.4s ease-in-out infinite}.p2{animation-delay:-1.2s}.p3{animation-delay:-.6s}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes pop{0%,100%{transform:scale(.85)}50%{transform:scale(1.08)}}.pop{animation:pop 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.eq{animation:eq .8s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom}.e2{animation-delay:-.2s}.e3{animation-delay:-.4s}.e4{animation-delay:-.6s}' +
    '@keyframes splash{0%,100%{transform:scale(.5);opacity:0}40%{transform:scale(1);opacity:.9}}.spl{animation:splash 1.6s ease-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes beam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.beam{animation:beam 4s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}.bm2{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (x, y, s, fill, t, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + FONT + ' font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + t + '</text>';
  /* real MTA bullet: [letter, color, darkText]; "SIR" is the blue pill */
  const bullet = (x, y, b) => b[0] === "SIR" ?
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/>' + txt(x, y + 5, 13, "#fff", "SIR") :
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + b[1] + '"/>' + txt(x, y + 5.5, 15, b[2] ? "#000" : "#fff", b[0]);
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "pls") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 80) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const rect = (x, y, w, h, f, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f + '"' + (extra || "") + '/>';
  /* a building with a grid of windows */
  const bldg = (x, y, w, h, f, win, lit) => { let s = rect(x, y, w, h, f); for (let yy = y + 8; yy < y + h - 12; yy += 16) for (let xx = x + 6; xx < x + w - 10; xx += 14) s += '<rect x="' + xx + '" y="' + yy + '" width="8" height="10" fill="' + ((xx + yy) % 3 ? win : (lit || win)) + '" opacity=".85"/>'; return s; };
  const brick = (x, y, w, h, base, mortar) => { let b = rect(x, y, w, h, base); for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += rect(Math.max(x, xx), yy, Math.min(28, x + w - Math.max(x, xx)), 10, mortar); return b; };
  const tree = (x, y, r, c, cls) => '<g class="' + (cls || "sway") + '"><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r * 1.6) + '" fill="#4a3020"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .55) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + c + '"/><circle cx="' + (x + r * .55) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + c + '"/></g>';
  const car = (x, y, c, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + (y + 8) + '" width="46" height="14" rx="4" fill="' + c + '"/><path d="M' + (x + 8) + ' ' + (y + 8) + 'l6-8h18l6 8z" fill="' + c + '"/><path d="M' + (x + 15) + ' ' + (y + 7) + 'l4-5h7v5zM' + (x + 28) + ' ' + (y + 7) + 'v-5h3l4 5z" fill="#cfe6ff"/><circle cx="' + (x + 11) + '" cy="' + (y + 22) + '" r="5" fill="#111"/><circle cx="' + (x + 35) + '" cy="' + (y + 22) + '" r="5" fill="#111"/><circle cx="' + (x + 44) + '" cy="' + (y + 13) + '" r="2" fill="#fff6c2"/></g>';
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 22) + '" r="5" fill="#2a1a10"/><path d="M' + (x - 6) + ' ' + y + 'v-14q0-4 6-4t6 4v14z" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'v10M' + (x + 4) + ' ' + y + 'v10" stroke="#1b1b22" stroke-width="3"/></g>';
  const blade = (cx, y, t) => { const w = t.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' + txt(cx, y + 13, 11, "#fff", t); };
  const road = (y) => rect(0, y, 400, 260 - y, "#22262c") + '<path d="M0 ' + (y + (260 - y) / 2) + 'h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>';
  /* subway car: stainless, a colored stripe for the line, the bullet up front */
  const subCar = (x, y, w, b) => { let win = ""; for (let i = x + 16; i < x + w - 60; i += 44) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="30" height="20" rx="3" fill="#fff4cc" opacity=".88"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="56" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + rect(x, y + 38, w, 5, b[0] === "SIR" ? "#0039a6" : b[1]) + win +
      '<rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="20" rx="3" fill="#fff4cc" opacity=".88"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 48) + '" r="4" fill="#fff6c2"/>' + bullet(x + w - 44, y + 20, b); };
  const stSign = (x, y, w, name, bs) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="32" rx="4" fill="#111"/>' + rect(x, y, w, 4, "#fff") + txt(x + 12, y + 24, name.length > 20 ? 13 : 16, "#fff", name, "start");
    bs.forEach((b, i) => { s += bullet(x + w - 18 - (bs.length - 1 - i) * (b[0] === "SIR" ? 38 : 26), y + 17, b); }); return s; };
  /* 1. generic station: o = {name, bs:[bullets], el:true for elevated, sky:[top,bottom], tags: markup, front: bullet for the train} */
  const station = o => {
    const front = o.front || o.bs[0];
    if (o.el) {
      let hs = "";
      [[0, 120, "#6a4a44"], [64, 108, "#4a5466"], [132, 126, "#7a5a40"], [260, 116, "#54606a"], [330, 104, "#6a4a52"]].forEach(b => hs += bldg(b[0], b[1], 66, 140 - b[1] + 60, b[2], "#ffe6a8", "#2a2a3a"));
      let posts = ""; for (let x = 30; x < 400; x += 90) posts += rect(x, 36, 6, 96, "#3d5a3a");
      return svg('<rect width="400" height="260" fill="url(#st)"/>' + stars(14) + (o.moon ? '<circle cx="350" cy="30" r="13" fill="#fff3c4"/>' : "") + hs +
        rect(0, 26, 400, 10, "#2e4a2c") + posts + stSign(o.sx || 70, 44, o.sw || 260, o.name, o.bs) +
        '<g class="anim-train">' + subCar(8, 86, 310, front) + '</g>' +
        rect(0, 142, 400, 8, "#eab308") + rect(0, 150, 400, 14, "#8a857a") + rect(0, 164, 400, 10, "#3d5a3a") +
        '<path d="M0 174h400" stroke="#2a3f28" stroke-width="3"/>' + rect(60, 174, 10, 50, "#3d5a3a") + rect(250, 174, 10, 50, "#3d5a3a") +
        road(220) + car(0, 196, o.carC || "#d7263d", "slide") + (o.tags || ""), sky("st", o.sky[0], o.sky[1]));
    }
    let tiles = ""; for (let x = 0; x < 400; x += 16) for (let y = 0; y < 150; y += 10) tiles += '<rect x="' + x + '" y="' + y + '" width="15" height="9" fill="#efe9dc"/>';
    let cols = ""; for (let x = 24; x < 400; x += 96) cols += rect(x, 0, 12, 150, o.col || "#1f4f8f") + rect(x - 3, 0, 18, 6, o.col || "#1f4f8f");
    return svg(rect(0, 0, 400, 260, "#bdb6a8") + tiles + rect(0, 40, 400, 12, o.band || "#7a2a2a") + rect(0, 52, 400, 3, "#e8c766") + cols +
      stSign(o.sx || 60, 66, o.sw || 280, o.name, o.bs) +
      '<g class="anim-train">' + subCar(10, 100, 310, front) + '</g>' +
      '<g class="flk">' + rect(0, 0, 400, 6, "#fff8d8") + '</g>' +
      rect(0, 152, 400, 9, "#eab308") + rect(0, 161, 400, 99, "#5a5650") + '<path d="M0 161h400" stroke="#8a857a" stroke-width="2"/>' + (o.tags || ""), "");
  };
  /* 5. street corner: wall with tags, streetlight, two street blades */
  const corner = (g, s1, s2, tags, accent, extra, back) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + (back !== undefined ? back : stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>') +
    brick(16, 60, 240, 160, "#4a2a24", "#5a3229") + rect(16, 56, 240, 6, "#2a1a16") + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    rect(300, 56, 5, 164, "#1d2329") + '<path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) + (extra || "") +
    rect(0, 220, 400, 40, "#14181d") + '<path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
    sky("g5", g[0], g[1]));

  /* underground station with a two-row sign: name on top, every bullet in a row underneath */
  const bigSign = (x, y, w, name, bs) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="50" rx="4" fill="#111"/>' + rect(x, y, w, 4, "#fff") + txt(x + w / 2, y + 22, 15, "#fff", name);
    const x0 = x + w / 2 - (bs.length - 1) * 12; bs.forEach((b, i) => { s += bullet(x0 + i * 24, y + 37, b); }); return s; };
  const ugStation = o => {
    let tiles = ""; for (let x = 0; x < 400; x += 16) for (let y = 0; y < 150; y += 10) tiles += '<rect x="' + x + '" y="' + y + '" width="15" height="9" fill="' + (o.tile || "#efe9dc") + '"/>';
    let cols = ""; for (let x = 24; x < 400; x += 96) cols += rect(x, 0, 12, 150, o.col || "#1f4f8f") + rect(x - 3, 0, 18, 6, o.col || "#1f4f8f");
    return svg(rect(0, 0, 400, 260, "#bdb6a8") + tiles + rect(0, 30, 400, 10, o.band || "#7a2a2a") + rect(0, 40, 400, 3, "#e8c766") + cols +
      bigSign(o.sx || 50, 46, o.sw || 300, o.name, o.bs) +
      '<g class="anim-train">' + subCar(10, 100, 310, o.front || o.bs[0]) + '</g>' +
      '<g class="flk">' + rect(0, 0, 400, 6, "#fff8d8") + '</g>' +
      rect(0, 152, 400, 9, "#eab308") + rect(0, 161, 400, 99, "#5a5650") + '<path d="M0 161h400" stroke="#8a857a" stroke-width="2"/>' + (o.tags || ""), "");
  };

  const STEEL = "#d9dde2", RED = "#c8202a", GRN = "#6cbe45";
  const G = ["G", "#6cbe45"];

  /* 1. Greenpoint Av on the G: underground, green trim band, the G pulling in */
  function gpav() {
    return ugStation({ name: "Greenpoint Av", bs: [G], front: G, band: "#2f6b3a", col: "#2a3a30", sx: 110, sw: 180,
      tags: tag("ILL BILL", 30, 222, 32, STEEL, -4) + tag("NON PHIXION", 196, 246, 24, RED, -5) });
  }

  /* egg-shaped steel digesters of the Newtown Creek plant (silver, with blue-glass walkways and red beacons) */
  const eggs = (ox, oy, s) => {
    let g = "";
    [0, 1, 2, 3].forEach(i => { const x = ox + i * 44 * s, h = (i % 2 ? 92 : 100) * s;
      g += '<path d="M' + (x + 4 * s) + ' ' + oy + 'C' + (x - 6 * s) + ' ' + (oy - h * .55) + ' ' + (x + 6 * s) + ' ' + (oy - h) + ' ' + (x + 20 * s) + ' ' + (oy - h) + 'C' + (x + 34 * s) + ' ' + (oy - h) + ' ' + (x + 46 * s) + ' ' + (oy - h * .55) + ' ' + (x + 36 * s) + ' ' + oy + 'z" fill="url(#egg)" stroke="#6a7480" stroke-width="1"/>' +
        '<circle class="pls ' + (i % 2 ? "p2" : "") + '" cx="' + (x + 20 * s) + '" cy="' + (oy - h * .56) + '" r="' + 2.2 * s + '" fill="#ff3b30"/>'; });
    g += rect(ox - 4 * s, oy - 52 * s, 180 * s, 5 * s, "#3a6aa8", ' opacity=".85"') + rect(ox - 4 * s, oy - 26 * s, 180 * s, 5 * s, "#3a6aa8", ' opacity=".85"');
    return g;
  };
  const eggDefs = '<linearGradient id="egg" x1="0" x2="1"><stop offset="0" stop-color="#8a949e"/><stop offset=".45" stop-color="#eef2f6"/><stop offset="1" stop-color="#7a848e"/></linearGradient>';

  /* 2. The digester eggs over Newtown Creek at dusk, a tugboat pushing by */
  function eggsScene() {
    let w = ""; for (let i = 0; i < 8; i++) w += '<path class="wave ' + (i % 2 ? "" : "") + '" d="M' + (i * 52) + ' ' + (214 + (i % 3) * 8) + 'q12-4 24 0" stroke="#9ab8d0" stroke-width="2" fill="none" opacity=".5"/>';
    return svg('<rect width="400" height="260" fill="url(#ek)"/>' + stars(8) +
      bldg(0, 140, 60, 70, "#2a2e36", "#ffe6a8", "#1a1d22") + bldg(330, 130, 70, 80, "#30343c", "#ffe6a8", "#1a1d22") +
      eggs(80, 196, 1.3) + rect(70, 196, 260, 12, "#3a3f46") +
      rect(0, 206, 400, 54, "#1d3a4a") + w +
      '<g class="slide slw"><path d="M0 214h56l-6 12H6z" fill="' + RED + '"/>' + rect(16, 200, 22, 14, "#f2efe6") + rect(22, 192, 6, 8, "#222") + '</g>',
      sky("ek", "#1a1440", "#d9785a") + eggDefs);
  }

  /* 3. A Brooklyn metal club: the stage, stacked amps, light beams, a crowd moshing */
  function club() {
    let amps = ""; [[24, 120], [24, 150], [320, 120], [320, 150]].forEach(a => amps += rect(a[0], a[1], 56, 30, "#151515", ' stroke="#555" stroke-width="2"') + '<circle cx="' + (a[0] + 16) + '" cy="' + (a[1] + 15) + '" r="9" fill="#2a2a2a" stroke="#666"/><circle cx="' + (a[0] + 40) + '" cy="' + (a[1] + 15) + '" r="9" fill="#2a2a2a" stroke="#666"/>');
    let crowd = ""; for (let i = 0; i < 12; i++) crowd += '<g class="jump ' + (i % 2 ? "j2" : "") + '"><circle cx="' + (18 + i * 33) + '" cy="' + (222 + (i % 3) * 4) + '" r="9" fill="#15151a"/>' + rect(10 + i * 33, 228 + (i % 3) * 4, 16, 30, "#15151a") + (i % 3 === 0 ? '<path d="M' + (24 + i * 33) + ' ' + (226 + (i % 3) * 4) + 'l8-20" stroke="#15151a" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>';
    return svg('<rect width="400" height="260" fill="#0a0a0d"/>' +
      '<g opacity=".35"><path class="beam" d="M110 0l-40 200h80z" fill="' + RED + '"/><path class="beam bm2" d="M290 0l-40 200h80z" fill="#e8e2d0"/><path class="beam" d="M200 0l-30 200h60z" fill="' + GRN + '" style="animation-delay:-1s"/></g>' +
      rect(0, 180, 400, 12, "#2a2a30") + rect(0, 192, 400, 6, "#111") + amps +
      rect(170, 140, 6, 40, "#888") + '<circle cx="173" cy="138" r="5" fill="#aaa"/>' + rect(220, 150, 50, 30, "#1a1a1a", ' stroke="#555"') + '<ellipse cx="245" cy="150" rx="22" ry="5" fill="#c9a24a"/>' +
      '<g class="eq">' + rect(120, 168, 8, 12, RED) + '</g><g class="eq e2">' + rect(132, 164, 8, 16, RED) + '</g><g class="eq e3">' + rect(144, 166, 8, 14, RED) + '</g>' +
      txt(200, 40, 18, "#e8e2d0", "TONIGHT: HEAVY METAL KINGS", "middle", ' class="flk" letter-spacing="1"') + crowd);
  }

  /* 4. St. Anthony of Padua on Manhattan Av: red brick, the tall pointed spire with its clock, snow falling */
  function church() {
    let snow = ""; for (let i = 0; i < 14; i++) snow += '<circle class="fall ' + ["", "f2", "f3"][i % 3] + '" cx="' + (20 + i * 28) + '" cy="' + (10 + (i * 37) % 60) + '" r="2" fill="#fff" opacity=".8"/>';
    return svg('<rect width="400" height="260" fill="url(#ch)"/>' + stars(10) +
      bldg(0, 150, 110, 110, "#4a3a34", "#ffe6a8", "#2a2228") + bldg(290, 140, 110, 120, "#3e3a40", "#ffe6a8", "#2a2228") +
      rect(150, 120, 100, 120, "#8a3a2a") + '<path d="M146 122l54-30 54 30z" fill="#6a2a1e"/>' +
      '<path d="M168 236v-60q32-38 64 0v60z" fill="#2a1a18"/><circle cx="200" cy="160" r="16" fill="#3a5a8a" stroke="#d9c7a0" stroke-width="3"/><path d="M200 144v32M184 160h32" stroke="#d9c7a0" stroke-width="2"/>' +
      rect(184, 40, 32, 82, "#8a3a2a") + rect(182, 36, 36, 6, "#d9c7a0") +
      '<circle cx="200" cy="62" r="10" fill="#f4ecd6" stroke="#d9c7a0" stroke-width="2"/><path class="spin slow" d="M200 62v-7" stroke="#222" stroke-width="2" style="transform-origin:200px 62px;transform-box:view-box"/>' +
      '<path d="M184 36l16-34 16 34z" fill="#5a6a72"/><path d="M200 2v-8M196 -2h8" stroke="#d9c7a0" stroke-width="2"/>' +
      rect(190, 84, 8, 22, "#ffd98a", ' opacity=".6"') + rect(202, 84, 8, 22, "#ffd98a", ' opacity=".6"') +
      rect(0, 236, 400, 24, "#2a2a30") + car(0, 228, "#6a6a72", "slide") + snow,
      sky("ch", "#0c0f22", "#33304a"));
  }

  /* 5. Greenpoint Av and Manhattan Av, the eggs glowing behind */
  function corner5() {
    return corner(["#0a0a12", "#2a1f2a"], "Greenpoint Av", "Manhattan Av",
      tag("ILL BILL", 30, 118, 40, STEEL, -6) + tag("TRUST NOBODY", 34, 160, 24, RED, -4) + tag("CULT LEADER", 40, 196, 22, GRN, -3), RED, "",
      stars(14) + '<defs>' + eggDefs + '</defs><g opacity=".9">' + eggs(306, 210, .55) + '</g>');
  }

  window.SCENES = { gpav, eggsScene, club, church, corner5 };
})();
