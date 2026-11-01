/* Crown Heights, Brooklyn opening scenes for Ruste Juxx's game. Each one is a small animated SVG, 400 x 260. */
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
  const corner = (g, s1, s2, tags, accent, extra) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
    brick(16, 60, 240, 160, "#4a2a24", "#5a3229") + rect(16, 56, 240, 6, "#2a1a16") + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    rect(300, 56, 5, 164, "#1d2329") + '<path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) + (extra || "") +
    rect(0, 220, 400, 40, "#14181d") + '<path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
    sky("g5", g[0], g[1]));

  const ICE = "#9fe3ff", RUST = "#c8552a", GOLD = "#f2c14e";
  const T3 = [["3", "#ee352e"]];

  /* 1. Nostrand Av under Eastern Parkway: the 3 pulling in, cream tile and the brown band */
  function station1() {
    return station({ name: "Nostrand Av", bs: T3, band: "#6a3a2a", col: "#2a5a3a", sx: 90, sw: 220,
      tags: tag("HARDEST", 24, 214, 30, RUST, -4) + tag("DUCK DOWN", 226, 238, 26, ICE, -6) });
  }

  /* 2. The Brooklyn Museum on Eastern Parkway: the Beaux-Arts front with its columns, the glass entrance, the fountain jets dancing */
  function museum() {
    let cols = "", jets = "";
    for (let x = 110; x <= 290; x += 30) cols += rect(x - 5, 70, 10, 76, "#efe8d8") + rect(x - 8, 66, 16, 6, "#d8d0bc");
    [140, 175, 210, 245, 280].forEach((x, i) => jets += '<path class="spl" style="animation-delay:-' + (i * .3) + 's" d="M' + (x - 4) + ' 228q4-30 4-34 0 4 4 34z" fill="#bfe9ff"/>');
    return svg('<rect width="400" height="260" fill="url(#m1)"/>' +
      rect(20, 60, 360, 130, "#e3dac6") + rect(16, 52, 368, 10, "#cfc6b0") + '<path d="M96 52l104-34 104 34z" fill="#e3dac6" stroke="#cfc6b0" stroke-width="3"/>' +
      [[40, 80], [60, 80], [320, 80], [340, 80]].map(([x, y]) => rect(x, y, 14, 30, "#7a8aa0")).join("") + cols +
      [[24, 52, "#d8d0bc"], [370, 52, "#d8d0bc"]].map(([x, y, c]) => '<circle cx="' + (x + 6) + '" cy="' + (y - 6) + '" r="5" fill="' + c + '"/>').join("") +
      /* glass pavilion */
      '<path d="M110 190v-36h180v36z" fill="#9fd0e8" opacity=".85"/><path d="M100 156q100-20 200 0" fill="none" stroke="#9aa3ad" stroke-width="4"/>' +
      [130, 160, 190, 220, 250, 280].map(x => '<path d="M' + x + ' 154v36" stroke="#9aa3ad" stroke-width="2"/>').join("") +
      rect(0, 190, 400, 70, "#b8b2a6") + rect(120, 212, 180, 20, "#2a7ab0", ' rx="4"') + jets +
      person(60, 238, RUST, "slide") + person(340, 236, GOLD, "slideL"),
      sky("m1", "#5aa0e0", "#cbe6f8"));
  }

  /* 3. Brooklyn Botanic Garden in spring: the cherry esplanade in full pink bloom, petals drifting down */
  function garden() {
    let trees = "", petals = "";
    [[50, 120], [140, 110], [250, 116], [350, 112]].forEach(([x, y], i) => trees += '<g class="sway ' + (i % 2 ? "sw2" : "") + '"><path d="M' + x + ' 200v-60M' + x + ' 160l-18-20M' + x + ' 150l16-18" stroke="#4a2a20" stroke-width="7" fill="none"/>' +
      [[-30, 0, 30], [0, -18, 34], [30, 0, 30], [-14, 14, 26], [16, 14, 26]].map(([dx, dy, r]) => '<circle cx="' + (x + dx) + '" cy="' + (y + dy) + '" r="' + r + '" fill="' + ["#f7b6cf", "#f9c9da", "#f2a0bd"][(dx + 30) % 3] + '"/>').join("") + '</g>');
    for (let i = 0; i < 10; i++) petals += '<ellipse class="fall ' + ["", "f2", "f3"][i % 3] + '" cx="' + (20 + i * 38) + '" cy="10" rx="3" ry="2" fill="#f9c9da"/>';
    return svg('<rect width="400" height="260" fill="url(#g1)"/>' + rect(0, 170, 400, 90, "#6cb24a") + '<path d="M150 260l30-90h40l30 90z" fill="#d8c8a8"/>' + trees + petals +
      person(194, 236, ICE, "bob") + tag("SEE YOU WIN", 250, 250, 22, RUST, -4),
      sky("g1", "#8ac8f0", "#e6f4fc"));
  }

  /* 4. Labor Day on Eastern Parkway: the West Indian parade, big feathered costumes, flags, the steel pan */
  function parade() {
    const cos = (x, c1, c2, cls) => '<g class="' + cls + '">' + [-80, -60, -40, -20, 0, 20, 40, 60, 80].map((a, i) => '<path d="M' + x + ' 170q' + (a * .3) + ' -50 ' + a + ' -' + (100 - Math.abs(a) * .5) + '" stroke="' + (i % 2 ? c1 : "#fff6d0") + '" stroke-width="6" stroke-linecap="round" fill="none"/><circle cx="' + (x + a) + '" cy="' + (70 + Math.abs(a) * .5) + '" r="5" fill="' + c1 + '"/>').join("") +
      '<circle cx="' + x + '" cy="160" r="20" fill="' + c2 + '"/><path d="M' + (x - 10) + ' 176h20v40h-20z" fill="' + c2 + '"/></g>';
    return svg('<rect width="400" height="260" fill="url(#l1)"/>' +
      tree(20, 100, 24, "#2f7a34") + tree(380, 96, 24, "#2f7a34", "sway sw2") + tree(200, 90, 22, "#3a8a3a") +
      rect(0, 190, 400, 70, "#4a4a50") +
      cos(90, "#ffd34d", "#d7263d", "jump") + cos(210, "#2bb673", "#ffb347", "jump j2") + cos(320, "#9fe3ff", "#c9a4ff", "jump") +
      /* steel pan */
      '<ellipse cx="160" cy="232" rx="22" ry="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="140" y="232" width="40" height="18" fill="#9aa3ad"/>' +
      '<g class="wave"><rect x="30" y="180" width="4" height="60" fill="#c9ced6"/><rect x="34" y="180" width="34" height="22" fill="#2bb673"/><path d="M34 180l34 22M68 180l-34 22" stroke="#ffd34d" stroke-width="5"/></g>' +
      '<g class="wave"><rect x="360" y="182" width="4" height="58" fill="#c9ced6"/><rect x="364" y="182" width="32" height="22" fill="#d7263d"/><path d="M364 182l32 22" stroke="#111" stroke-width="7"/><path d="M364 182l32 22" stroke="#fff" stroke-width="3"/></g>',
      sky("l1", "#4aa0e8", "#d0ecfa"));
  }

  /* 5. Nostrand Av and Eastern Parkway, Crown Heights */
  function block() {
    return corner(["#0d0a12", "#3a2a2a"], "Nostrand Av", "Eastern Pkwy",
      tag("RUSTE JUXX", 22, 128, 36, ICE, -7) + tag("CROWN HEIGHTS", 34, 158, 22, GOLD, -5) + tag("DUCK DOWN", 40, 190, 28, RUST, -3) + tag("HOW ITZ DONE", 70, 212, 18, "#f6efdc", -2), RUST);
  }

  window.SCENES = { station1, museum, garden, parade, block };

})();
