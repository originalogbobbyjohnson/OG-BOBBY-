/* Boerum Hill and Cobble Hill, Brooklyn opening scenes for El-P's game. Each one is a small animated SVG, 400 x 260. */
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

  const PARCH = "#e8d9b5", RUST = "#c0562b", VERD = "#7fb8a4";
  const ALL = [["2", "#ee352e"], ["3", "#ee352e"], ["4", "#00933c"], ["5", "#00933c"], ["B", "#ff6319"], ["D", "#ff6319"], ["N", "#fccc0a", 1], ["Q", "#fccc0a", 1], ["R", "#fccc0a", 1]];

  /* 1. Atlantic Av-Barclays Ctr: the 2 pulling into the big hub, every bullet on the sign */
  function hub() {
    return ugStation({ name: "Atlantic Av-Barclays Ctr", bs: ALL, band: "#2a5a4a", col: "#3a3a44", sx: 70, sw: 260,
      tags: tag("BILLY WOODS", 24, 222, 30, PARCH, -4) + tag("BACKWOODZ", 220, 244, 26, RUST, -6) });
  }

  /* 2. The arena on Atlantic Av: the weathered rust-brown steel lattice band, the oculus canopy over the plaza with its
     LED ring, the planted green roof of the subway entrance, people crossing the plaza */
  function arena() {
    let lat = "";
    for (let i = 0; i < 22; i++) { const x = -10 + i * 20; lat += '<path d="M' + x + ' 70q10 30 0 90M' + (x + 10) + ' 66q-8 34 0 96" stroke="#7a3a1e" stroke-width="5" fill="none"/>'; }
    for (let y = 78; y < 160; y += 16) lat += '<path d="M0 ' + y + 'q200 -10 400 0" stroke="#5a2a14" stroke-width="3" fill="none" opacity=".8"/>';
    let ppl = ""; [[60, "#2a4a6a", "slide"], [150, RUST, "slideL"], [250, "#d9c27a", "slide sl2"], [320, "#3a6a4a", "slideL"]].forEach(p => ppl += person(p[0], 228, p[1], p[2]));
    return svg('<rect width="400" height="260" fill="url(#ar)"/>' + stars(10) +
      bldg(0, 20, 60, 60, "#2a2f3a", "#ffe6a8", "#1a1f2a") + bldg(340, 10, 60, 70, "#2f2a36", "#ffe6a8", "#1a1f2a") +
      '<path d="M-10 70Q200 40 410 70V170H-10z" fill="#9a4a24"/>' + lat +
      '<path d="M-10 70Q200 40 410 70" stroke="#c0682e" stroke-width="4" fill="none"/>' +
      /* glass base */
      rect(0, 160, 400, 30, "#2a3a44") + [20, 70, 120, 170, 220, 270, 320, 370].map(x => rect(x, 162, 30, 26, "#ffd98a", ' opacity=".55"')).join("") +
      /* the oculus canopy */
      '<path d="M90 150Q200 112 310 150L300 166Q200 136 100 166z" fill="#6a3018" stroke="#3a1a0c" stroke-width="2"/>' +
      '<ellipse cx="200" cy="146" rx="46" ry="9" fill="#14181d"/>' +
      '<g class="pls">' + rect(120, 150, 160, 10, "#0d0f12") + '</g>' + '<g clip-path="url(#led)"><g class="slideL">' + txt(0, 158, 9, "#ffd27a", "BROOKLYN  BROOKLYN  BROOKLYN", "start") + '</g></g>' +
      /* plaza + subway entrance with green roof */
      rect(0, 190, 400, 70, "#6a645a") + '<path d="M0 190h400" stroke="#8a847a" stroke-width="2"/>' +
      '<path d="M300 214l50-20 50 20z" fill="#4a8a3a"/><path d="M300 214h100v4H300z" fill="#2a3a2a"/>' + rect(310, 218, 80, 18, "#1a1f24") + txt(350, 231, 9, "#fff", "SUBWAY") +
      ppl,
      sky("ar", "#0a0c1e", "#3a2a3a") + '<clipPath id="led"><rect x="122" y="150" width="156" height="10"/></clipPath>');
  }

  /* 3. The old Williamsburgh Savings Bank clock tower on Hanson Pl: tan brick shaft, four-faced clock, the gold dome, pigeons */
  function tower() {
    let win = ""; for (let y = 120; y < 250; y += 18) for (let x = 168; x < 230; x += 14) win += rect(x, y, 6, 10, (x + y) % 4 ? "#3a3a44" : "#ffe6a8");
    const birds = [0, 1, 2].map(i => '<g class="slide ' + ["", "sl2", "slw"][i] + '"><path d="M' + (20 + i * 30) + ' ' + (50 + i * 14) + 'q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>').join("");
    return svg('<rect width="400" height="260" fill="url(#tw)"/>' +
      bldg(0, 150, 90, 110, "#6a5a4a", "#ffe6a8", "#3a3a44") + bldg(300, 140, 100, 120, "#5a4a42", "#ffe6a8", "#3a3a44") + bldg(90, 180, 60, 80, "#7a6a56", "#ffe6a8") + bldg(250, 175, 50, 85, "#6a5e50", "#ffe6a8") +
      rect(160, 104, 80, 156, "#c8a878") + rect(156, 100, 88, 8, "#a88a5e") + win +
      rect(166, 62, 68, 40, "#c8a878") + rect(162, 58, 76, 6, "#a88a5e") +
      '<circle cx="200" cy="82" r="15" fill="#f4ecd6" stroke="#6a4a2a" stroke-width="3"/>' +
      '<path class="spin" d="M200 82v-11" stroke="#222" stroke-width="2" style="transform-origin:200px 82px;transform-box:view-box"/><path class="spin slow" d="M200 82h8" stroke="#222" stroke-width="2.5" style="transform-origin:200px 82px;transform-box:view-box"/>' +
      '<path d="M170 58q30-40 60 0z" fill="#d9a63a" stroke="#8a6a1a" stroke-width="2"/><path d="M200 18v-12" stroke="#d9a63a" stroke-width="3"/><circle cx="200" cy="18" r="3" fill="#f2c14e"/>' +
      birds,
      sky("tw", "#f0a860", "#fbe3b0"));
  }

  /* 4. The old opera house on Lafayette Av in Fort Greene: cream terracotta front with colored inlays, tall arched windows,
     a marquee with blinking bulbs */
  function opera() {
    let arches = ""; [70, 130, 190, 250, 310].forEach(x => arches += '<path d="M' + x + ' 150v-50q10-18 20 0v50z" fill="#2a3a4a"/><path d="M' + x + ' 100q10-18 20 0" stroke="#b5553a" stroke-width="3" fill="none"/>' + rect(x + 4, 104, 12, 40, "#ffd98a", ' opacity=".5"'));
    let tiles = ""; for (let x = 52; x < 350; x += 16) tiles += rect(x, 78, 10, 6, x % 32 ? "#3a7a8a" : "#b5553a");
    let bulbs = ""; for (let x = 96; x < 306; x += 10) bulbs += '<circle class="blk ' + ["", "b2", "b3", "b4"][(x / 10) % 4] + '" cx="' + x + '" cy="162" r="2.2" fill="#ffe08a"/>';
    return svg('<rect width="400" height="260" fill="url(#op)"/>' + stars(18) +
      rect(40, 60, 320, 160, "#e6d6b2") + rect(36, 54, 328, 10, "#c9b48a") + tiles + rect(40, 88, 320, 4, "#c9b48a") + arches +
      '<path d="M150 54l50-26 50 26z" fill="#c9b48a"/>' + '<circle cx="200" cy="44" r="7" fill="#3a7a8a"/>' +
      rect(90, 156, 220, 30, "#2a1a14") + bulbs + rect(100, 168, 200, 14, "#14100c") + txt(200, 179, 10, "#ffd98a", "TONIGHT: BROOKLYN") +
      rect(40, 186, 320, 34, "#cbbb98") + [110, 170, 230].map(x => rect(x, 190, 40, 30, "#3a2a20")).join("") +
      rect(0, 220, 400, 40, "#3a3a3e") + car(0, 222, RUST, "slide") + tree(20, 180, 16, "#3a6a3a") + tree(380, 176, 18, "#2f5a34", "sway sw2"),
      sky("op", "#0c1020", "#2a2440"));
  }

  /* 5. Atlantic Av and Flatbush Av */
  function block() {
    return corner(["#0a0a14", "#2a2030"], "Atlantic Av", "Flatbush Av",
      tag("BILLY WOODS", 26, 118, 33, PARCH, -7) + tag("BACKWOODZ", 40, 158, 30, RUST, -5) + tag("ARMAND HAMMER", 30, 192, 24, VERD, -3) + tag("BROOKLYN", 120, 212, 16, "#f6efdc", -2), RUST, "",
      stars(16) + '<circle cx="276" cy="26" r="10" fill="#fff1d6"/>' +
      /* the clock tower at Atlantic and Flatbush, standing behind the corner */
      rect(334, 66, 44, 160, "#6a5a48") + rect(330, 62, 52, 6, "#584a3c") + rect(338, 34, 36, 30, "#7a6a54") + rect(335, 30, 42, 5, "#584a3c") +
      '<circle cx="356" cy="48" r="9" fill="#f4ecd6" stroke="#3a2a1a" stroke-width="2"/><path class="spin slow" d="M356 48h6" stroke="#222" stroke-width="2" style="transform-origin:356px 48px;transform-box:view-box"/>' +
      '<path d="M340 30q16-26 32 0z" fill="#b8892e"/><path d="M356 10v-8" stroke="#b8892e" stroke-width="2"/>' +
      [80, 100, 120, 140, 160, 180, 200].map((y, i) => rect(342, y, 5, 8, i % 3 ? "#2a2a30" : "#ffe6a8") + rect(354, y, 5, 8, i % 2 ? "#ffe6a8" : "#2a2a30") + rect(366, y, 5, 8, "#2a2a30")).join(""));
  }

  window.SCENES = { hub, arena, tower, opera, block };

})();
