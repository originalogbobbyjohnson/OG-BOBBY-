/* Flatbush, Brooklyn opening scenes for Sha Stimuli's game. Each one is a small animated SVG, 400 x 260. */
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

  const ICE = "#9fe3ff", ORG = "#ff6a3d", GOLD = "#ffd34d";
  const T25 = [["2", "#ee352e"], ["5", "#00933c"]];

  /* 1. Church Av on the Nostrand Av line, the Brooklyn College-bound side: the hanging sign pointing to Beverley Rd, his My Soul to Keep poster on the tile, the 5 pulling in */
  function station1() {
    const hang = rect(150, 8, 236, 22, "#111") + txt(162, 23, 10, "#fff", "To Brooklyn College", "start") + txt(374, 23, 9, GOLD, "NEXT: BEVERLEY RD", "end");
    const poster = '<g transform="rotate(-2 66 80)">' + rect(16, 60, 112, 40, "#1b1b22") + rect(19, 63, 106, 34, "#2a3a6a") + '<circle cx="36" cy="80" r="11" fill="' + GOLD + '" opacity=".85"/>' +
      txt(86, 78, 8, "#fff", "MY SOUL TO KEEP") + txt(86, 90, 7, ICE, "SHA STIMULI") + '</g>';
    return station({ name: "Church Av", bs: T25, front: T25[1], band: "#2a6a3a", col: "#2a3a6a", sx: 150, sw: 200,
      tags: hang + poster + tag("SHA STIMULI", 22, 218, 30, ICE, -4) + tag("FLATBUSH", 240, 240, 24, GOLD, -6) + tag("EFFORTLESS", 120, 250, 16, ORG, -3) });
  }

  /* 2. Caton Market at Caton Av and Flatbush Av: the Caribbean vendors' stalls under colored awnings, flag bunting, the B41 going by */
  function church() {
    const stall = (x, c1, c2, goods) => { let s = ""; for (let i = 0; i < 4; i++) s += '<path d="M' + (x + i * 18) + ' 112h18l-3 18h-12z" fill="' + (i % 2 ? c1 : c2) + '"/>';
      return s + rect(x + 4, 130, 64, 46, "#6a4a32") + rect(x + 2, 150, 68, 6, "#8a6a4a") + goods.map((g, i) => '<circle cx="' + (x + 12 + i * 12) + '" cy="146" r="5" fill="' + g + '"/>').join(""); };
    const flags = ["#009b3a", "#fed100", "#00209f", "#d21034", "#ce1126", "#000", "#fed100", "#009b3a"];
    let bunt = ""; flags.forEach((c, i) => bunt += '<path class="sway' + (i % 2 ? ' sw2' : '') + '" d="M' + (30 + i * 44) + ' 82l12 0-6 12z" fill="' + c + '"/>');
    return svg('<rect width="400" height="260" fill="url(#c1)"/>' +
      bldg(0, 30, 120, 80, "#b0644a", "#ffe6a8", "#3a3a4a") + bldg(300, 24, 100, 86, "#8a6a9a", "#ffe6a8", "#3a3a4a") +
      rect(110, 54, 180, 26, "#1b1b22") + txt(200, 73, 16, GOLD, "CATON MARKET") + '<path d="M0 82q200 18 400 0" stroke="#3a3a3a" stroke-width="1.5" fill="none"/>' + bunt +
      rect(0, 110, 400, 70, "#d8cfb8") +
      stall(10, "#2bb673", GOLD, ["#ffb020", "#d7263d", "#2bb673", "#ffd34d"]) + stall(108, "#d7263d", "#f6f3ea", ["#8a4a2a", "#ffd34d", "#ff6a3d", "#2bb673"]) +
      stall(206, ORG, "#f6f3ea", ["#ffd34d", "#2a7a3a", "#d7263d", "#ffb020"]) + stall(304, "#2a6ad0", GOLD, ["#f6f3ea", "#d7263d", "#2bb673", "#ffd34d"]) +
      '<g class="bob">' + person(96, 178, GOLD) + '</g>' + person(200, 178, ICE) + '<g class="bob">' + person(296, 178, ORG) + '</g>' +
      rect(0, 180, 400, 10, "#9a968c") + road(190) +
      '<g class="slide slw"><rect x="0" y="198" width="120" height="38" rx="6" fill="#e9ecef" stroke="#6b7280" stroke-width="1.5"/>' + rect(0, 224, 120, 5, "#0039a6") + rect(6, 204, 104, 14, "#2a3440") + txt(100, 214, 8, "#ffb020", "B41") + '<circle cx="22" cy="238" r="6" fill="#111"/><circle cx="96" cy="238" r="6" fill="#111"/></g>' +
      txt(200, 22, 10, "#1b1b22", "CATON AV &amp; FLATBUSH AV") + tag("SHA STIMULI", 18, 254, 20, ICE, -3),
      sky("c1", "#4a9ae0", "#cce8f8"));
  }

  /* 3. The old Sears at Beverley Rd and Bedford Av (1932): the cream Art Deco store, the stepped tower, the vertical piers */
  function boathouse() {
    let piers = ""; for (let x = 66; x < 340; x += 22) piers += rect(x, 120, 6, 70, "#d8ccaa");
    let tp = ""; for (let x = 172; x < 228; x += 12) tp += rect(x, 40, 4, 70, "#d8ccaa");
    return svg('<rect width="400" height="260" fill="url(#b1)"/>' +
      tree(26, 168, 22, "#3a8a3a") + tree(380, 168, 22, "#2f7a34", "sway sw2") +
      rect(50, 112, 300, 84, "#ece0c0") + piers + rect(50, 108, 300, 8, "#cdbf98") +
      '<path d="M60 196v-30h280v30" fill="none"/>' + [76, 120, 164, 236, 280, 318].map(x => rect(x, 150, 22, 34, "#3a4a5a")).join("") +
      rect(160, 30, 80, 166, "#efe4c6") + tp + rect(152, 104, 96, 8, "#cdbf98") + rect(168, 18, 64, 14, "#e2d6b4") + rect(180, 8, 40, 12, "#d8ccaa") + '<path d="M196 8v-6h8v6z" fill="#cdbf98"/>' +
      '<path d="M176 196v-34a24 24 0 0 1 48 0v34z" fill="#2a3a4a"/><path class="pls" d="M180 196v-30a20 20 0 0 1 40 0v30z" fill="#ffe6a8" opacity=".35"/>' +
      rect(150, 64, 100, 12, "#2a3a4a") + txt(200, 74, 9, GOLD, "BEVERLEY RD · 1932") +
      rect(0, 196, 400, 10, "#9a968c") + road(206) + car(0, 214, ORG, "slide") + car(0, 228, ICE, "slideL") +
      txt(80, 30, 10, "#1b2a3a", "BEDFORD AV &amp;") + txt(80, 44, 10, "#1b2a3a", "BEVERLEY RD") + tag("SHA STIMULI", 258, 44, 20, ICE, -5),
      sky("b1", "#7ac0ea", "#f2e6c8"));
  }

  /* 4. Wake Up & Go: sunrise from a Flatbush rooftop, the water towers, pigeons lifting off */
  function rooftop() {
    const wt = (x, y) => '<path d="M' + (x - 4) + ' ' + (y + 40) + 'l4-12h20l4 12" stroke="#3a2a1a" stroke-width="3" fill="none"/><rect x="' + x + '" y="' + y + '" width="20" height="28" fill="#8a5a3a"/><path d="M' + (x - 2) + ' ' + y + 'l12-10 12 10z" fill="#5a3a22"/><path d="M' + x + ' ' + (y + 8) + 'h20M' + x + ' ' + (y + 18) + 'h20" stroke="#5a3a22" stroke-width="1.5"/>';
    return svg('<rect width="400" height="260" fill="url(#r1)"/>' +
      '<circle class="pls" cx="200" cy="130" r="56" fill="#ffd34d" opacity=".3"/><circle cx="200" cy="130" r="38" fill="#ffd34d"/>' +
      [[0, 120], [60, 104], [130, 126], [260, 110], [330, 96]].map(([x, y]) => rect(x, y, 66, 160 - y + 20, "#3a2a4a")).join("") +
      wt(80, 66) + wt(300, 58) +
      rect(0, 170, 400, 90, "#2a2030") + rect(0, 166, 400, 6, "#4a3a4a") +
      [[60, ""], [90, "j2"], [120, ""]].map(([x, c]) => '<g class="jump ' + c + '"><path d="M' + x + ' 160q6-6 12 0 6-6 12 0" stroke="#1b1b22" stroke-width="3" fill="none"/></g>').join("") +
      tag("WAKE UP &amp; GO", 150, 230, 30, ORG, -4),
      sky("r1", "#2a2a6a", "#ff9a5a"));
  }

  /* 5. Bedford Av and Beverley Rd, at the old Sears */
  function block() {
    return corner(["#0a0a22", "#2a3a5a"], "Bedford Av", "Beverley Rd",
      tag("SHA STIMULI", 22, 128, 36, ICE, -7) + tag("MY SOUL TO KEEP", 30, 158, 22, GOLD, -5) + tag("WHO I AM", 40, 190, 28, ORG, -3) + tag("FLATBUSH", 120, 212, 18, "#f6efdc", -2), ICE);
  }

  window.SCENES = { station1, church, boathouse, rooftop, block };

})();
