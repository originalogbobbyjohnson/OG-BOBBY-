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
  const corner = (g, s1, s2, tags, accent, extra) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
    brick(16, 60, 240, 160, "#4a2a24", "#5a3229") + rect(16, 56, 240, 6, "#2a1a16") + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    rect(300, 56, 5, 164, "#1d2329") + '<path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) + (extra || "") +
    rect(0, 220, 400, 40, "#14181d") + '<path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
    sky("g5", g[0], g[1]));

  const GOLD = "#f2c14e", RED = "#e2342b", CYAN = "#6fd3ff";
  const FG = [["F", "#ff6319"], ["G", "#6cbe45"]];

  /* 1. Bergen St on Smith St: the F pulling in, tile with the orange band */
  function station1() {
    return station({ name: "Bergen St", bs: FG, band: "#c8552a", col: "#2a2a3a", sx: 100, sw: 200,
      tags: tag("EL-P", 30, 216, 36, GOLD, -4) + tag("CO FLOW", 230, 238, 30, CYAN, -6) });
  }

  /* 2. The Brooklyn Bridge at night: the granite towers with their pointed arches, the cables, headlights crossing */
  function bridge() {
    const towerS = x => rect(x, 60, 46, 160, "#b8a88a") + '<path d="M' + (x + 6) + ' 140v-50q8-16 16 0v50zM' + (x + 24) + ' 140v-50q8-16 16 0v50z" fill="#0e1430"/>' + rect(x - 4, 56, 54, 8, "#a8987a");
    let cables = "";
    for (let i = 0; i < 9; i++) cables += '<path d="M' + (100 + i * 22) + ' 150V' + (80 + Math.abs(i - 4) * 14) + '" stroke="#cfd6de" stroke-width="1" opacity=".7"/>';
    return svg('<rect width="400" height="260" fill="url(#b1)"/>' + stars(26) +
      [[0, 90], [30, 70], [60, 110], [320, 80], [350, 60], [380, 100]].map(([x, y]) => bldg(x, y, 26, 150 - y + 20, "#1a1f3a", "#ffe6a8", "#1a1f3a")).join("") +
      rect(0, 170, 400, 90, "#0e1a30") + '<path class="slide slw" d="M0 200q20-4 40 0t40 0 40 0" stroke="#3a5a8a" stroke-width="2" fill="none"/>' +
      '<path d="M0 150h400" stroke="#8a7a5a" stroke-width="8"/>' +
      '<path d="M0 66Q50 150 100 150M146 66Q200 140 254 66M300 66Q350 150 400 150" stroke="#cfd6de" stroke-width="2" fill="none"/>' + cables +
      towerS(100) + towerS(254) +
      '<g class="slide"><circle cx="0" cy="146" r="2.5" fill="#fff3a8"/><circle cx="10" cy="146" r="2.5" fill="#fff3a8"/></g><g class="slideL"><circle cx="0" cy="146" r="2.5" fill="' + RED + '"/></g>' +
      '<g opacity=".4">' + rect(100, 176, 46, 40, "#b8a88a") + rect(254, 176, 46, 40, "#b8a88a") + '</g>',
      sky("b1", "#05081a", "#1a2a5a"));
  }

  /* 3. The Gowanus Canal at Carroll St: the old wooden bridge, brick warehouses, green water, a heron on the bulkhead */
  function gowanus() {
    return svg('<rect width="400" height="260" fill="url(#g1)"/>' +
      brick(0, 70, 130, 110, "#8a4a32", "#9a5a3a") + brick(270, 60, 130, 120, "#7a4030", "#8a5038") + rect(150, 100, 100, 80, "#5a5a62") +
      [[20, 90], [60, 90], [290, 80], [330, 80]].map(([x, y]) => rect(x, y, 22, 26, "#2a3a4a")).join("") +
      rect(0, 180, 400, 80, "#3a6a4a") + '<path class="slide slw" d="M0 210q20-4 40 0t40 0 40 0" stroke="#6a9a6a" stroke-width="2" fill="none"/><path class="slideL" d="M0 236q20-4 40 0t40 0" stroke="#6a9a6a" stroke-width="2" fill="none"/>' +
      /* the bridge */
      rect(120, 162, 160, 14, "#6a4a2a") + '<path d="M120 162h160" stroke="#3a2a1a" stroke-width="3"/>' + [130, 170, 210, 250].map(x => '<path d="M' + x + ' 162l10-22h20l10 22" fill="none" stroke="#2a3a2a" stroke-width="3"/>').join("") +
      rect(112, 140, 12, 50, "#2a3a2a") + rect(276, 140, 12, 50, "#2a3a2a") +
      /* heron */
      '<g class="bob"><path d="M340 182v-20M346 182v-20" stroke="#555" stroke-width="2"/><ellipse cx="344" cy="156" rx="14" ry="8" fill="#9aa3ad"/><path d="M354 152q10-18 2-24" stroke="#9aa3ad" stroke-width="4" fill="none"/><path d="M356 128l12 2" stroke="' + GOLD + '" stroke-width="2"/></g>' +
      car(0, 138, RED, "slide"),
      sky("g1", "#8aa8c8", "#e0e8f0"));
  }

  /* 4. Fantastic Damage: the Smith St brownstones at night, a ship hovering over the rooftops, its beam sweeping the stoops */
  function ship() {
    let row = "";
    for (let i = 0; i < 5; i++) { const x = i * 80; row += rect(x, 100, 78, 160, ["#6a3a2a", "#7a4a34", "#5a3428"][i % 3]) + rect(x, 96, 78, 6, "#3a2018");
      [x + 12, x + 46].forEach(wx => [116, 152].forEach(wy => row += rect(wx, wy, 18, 24, (wx + wy) % 3 ? "#ffe6a8" : "#2a2a3a", ' opacity=".85"')));
      row += '<path d="M' + (x + 10) + ' 260l12-56h24l12 56z" fill="#4a2a20"/>' + rect(x + 26, 190, 18, 24, "#2a1a10"); }
    return svg('<rect width="400" height="260" fill="url(#s1)"/>' + stars(24) +
      '<g class="beam" style="transform-box:view-box;transform-origin:200px 60px"><path d="M186 66L120 260h160L214 66z" fill="' + CYAN + '" opacity=".18"/></g>' + row +
      '<g class="bob"><ellipse cx="200" cy="56" rx="64" ry="14" fill="#9aa3ad" stroke="#5a6270" stroke-width="2"/><path d="M168 50q32-36 64 0z" fill="' + CYAN + '" opacity=".75"/>' +
      [150, 175, 200, 225, 250].map((x, i) => '<circle class="blk ' + ["", "b2", "b3", "b4"][i % 4] + '" cx="' + x + '" cy="60" r="3" fill="' + [GOLD, RED][i % 2] + '"/>').join("") + '</g>' +
      tag("FANTASTIC DAMAGE", 70, 252, 26, GOLD, -3),
      sky("s1", "#060818", "#2a1a3a"));
  }

  /* 5. Bergen St and Smith St, Boerum Hill */
  function block() {
    return corner(["#08081a", "#2a2a3a"], "Bergen St", "Smith St",
      tag("EL-P", 40, 130, 60, GOLD, -7) + tag("EL PRODUCTO", 30, 160, 24, CYAN, -5) + tag("DEF JUX", 40, 192, 28, RED, -3) + tag("BOERUM HILL", 100, 212, 18, "#f6efdc", -2), GOLD);
  }

  window.SCENES = { station1, bridge, gowanus, ship, block };

})();
