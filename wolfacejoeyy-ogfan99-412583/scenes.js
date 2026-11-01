/* Stapleton and around Staten Island: opening scenes for Wolfacejoeyy's game. Each one is a small animated SVG, 400 x 260. */
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

  const ORG = "#ff8a5b", ROSE = "#ff4f8b", ICE = "#9fe3ff";
  const SIRB = [["SIR", "#0039a6"]];

  /* 1. Stapleton: the SIR rolling in on the elevated platform over Bay St at sunset */
  function station1() {
    return station({ name: "Stapleton", bs: SIRB, el: true, sky: ["#2a1a4a", "#ff9a6a"], carC: ROSE, sx: 100, sw: 200,
      tags: tag("WOLFACE", 18, 252, 26, ORG, -4) + tag("STATEN ISLAND", 196, 254, 22, ICE, -5) });
  }

  /* 2. Wolfe's Pond Park at night: the pond under a full moon, the beach on Raritan Bay beyond the trees, a swan gliding */
  function pond() {
    return svg('<rect width="400" height="260" fill="url(#w1)"/>' + stars(26) +
      '<circle class="pls" cx="300" cy="60" r="34" fill="#fff3c4" opacity=".25"/><circle cx="300" cy="60" r="24" fill="#fff3c4"/>' +
      rect(0, 110, 400, 22, "#1a2a4a") + '<path class="slide slw" d="M0 120q20-4 40 0t40 0" stroke="#3a5a8a" stroke-width="2" fill="none"/>' +
      '<path d="M0 132h400v10H0z" fill="#d8c8a0"/>' +
      [20, 70, 330, 380].map((x, i) => '<path class="sway ' + (i % 2 ? "sw2" : "") + '" d="M' + x + ' 190l-24 0 24-70 24 70z" fill="#143a2a"/>').join("") +
      '<path d="M0 150q200-16 400 0v110H0z" fill="#0e2a48"/>' +
      '<path d="M290 160h20M284 176h32M292 192h16" stroke="#fff3c4" stroke-width="3" opacity=".6"/>' +
      '<g class="slide slw"><path d="M60 214q0-12 12-12 10 0 14 8 6-14 0-24" fill="none" stroke="#f6f3ea" stroke-width="4"/><ellipse cx="74" cy="214" rx="18" ry="7" fill="#f6f3ea"/><path d="M86 186l6-2" stroke="' + ORG + '" stroke-width="3"/></g>' +
      '<path d="M0 236q60-12 120 0v24H0zM280 240q60-14 120-4v24H280z" fill="#0a1a10"/>' +
      [10, 30, 300, 360, 380].map((x, i) => '<path class="sway ' + (i % 2 ? "sw2" : "") + '" d="M' + x + ' 240q-2-20 4-34" stroke="#2a5a3a" stroke-width="3" fill="none"/>').join("") +
      tag("PUP", 150, 250, 26, ORG, -4),
      sky("w1", "#0a0a2a", "#2a2a5a"));
  }

  /* 3. Midland Beach in summer: the boardwalk, the sand, the bay, the Verrazzano far off, a kite up */
  function beach() {
    let planks = ""; for (let x = 0; x < 400; x += 12) planks += '<path d="M' + x + ' 150v18" stroke="#8a6a44" stroke-width="1.5"/>';
    return svg('<rect width="400" height="260" fill="url(#m1)"/>' + '<circle cx="80" cy="50" r="22" fill="#fff3a8"/>' +
      rect(0, 100, 400, 50, "#2a8ac8") + '<path class="slide" d="M0 120q20-5 40 0t40 0" stroke="#9fe3ff" stroke-width="2" fill="none"/>' +
      /* Verrazzano far off */
      '<g opacity=".7"><rect x="290" y="58" width="5" height="42" fill="#8a96a8"/><rect x="370" y="58" width="5" height="42" fill="#8a96a8"/><path d="M250 86h170M260 92q32-36 32-34 0 0 40 30 40-30 40-30 0 0 10 22" stroke="#8a96a8" stroke-width="2" fill="none"/></g>' +
      rect(0, 150, 400, 18, "#b88a5a") + planks + rect(0, 168, 400, 8, "#6a4a2a") + [20, 120, 220, 320].map(x => rect(x, 176, 6, 20, "#6a4a2a")).join("") +
      rect(0, 196, 400, 64, "#ecd9a8") +
      '<g class="sway"><path d="M300 180l-2-110" stroke="#fff" stroke-width="1"/><path d="M286 50l14-20 14 20-14 24z" fill="' + ROSE + '"/><path d="M300 74q-6 8 2 14t-2 12" stroke="' + ORG + '" stroke-width="2" fill="none"/></g>' +
      '<path d="M100 220l40-20 40 20" fill="' + ORG + '"/><rect x="138" y="200" width="3" height="40" fill="#555"/>' +
      person(230, 140, ICE, "slide slw") + person(200, 140, ROSE, "slideL") + tag("SUMMERSONGS", 200, 248, 22, ROSE, -3),
      sky("m1", "#5ab6f0", "#d8f0fc"));
  }

  /* 4. Cupid on Bay St: a bakery window at night with a giant cake, hearts floating up */
  function cupid() {
    let hearts = "";
    [[60, ""], [140, "r2"], [260, "r3"], [340, "r2"], [200, ""]].forEach(([x, c]) => hearts += '<path class="rise ' + c + '" d="M' + x + ' 120q-8-10 0-14 8 4 0 14zM' + x + ' 120q8-10 0-14" fill="' + ROSE + '"/><path class="rise ' + c + '" d="M' + x + ' 124c-10-8-12-16-6-18 4-1 6 2 6 4 0-2 2-5 6-4 6 2 4 10-6 18z" fill="' + ROSE + '"/>');
    return svg(rect(0, 0, 400, 260, "#1a1430") + brick(0, 0, 400, 220, "#4a2a3a", "#54303f") +
      '<rect class="pls" x="80" y="20" width="240" height="26" rx="6" fill="none" stroke="' + ROSE + '" stroke-width="3"/>' + txt(200, 40, 18, ROSE, "BEFORE CUPID", "middle", ' class="flk"') +
      rect(60, 60, 280, 140, "#ffe6b8") + rect(60, 60, 280, 140, "none", ' stroke="#2a1a2a" stroke-width="8"') + rect(196, 60, 8, 140, "#2a1a2a") +
      /* cake */
      rect(110, 150, 70, 40, "#f6c1d8", ' rx="4"') + rect(120, 122, 50, 30, "#fff3f8", ' rx="4"') + '<path d="M110 158q8 8 17 0t18 0 17 0 18 0" stroke="#fff" stroke-width="4" fill="none"/>' +
      rect(143, 106, 4, 16, "#f6efdc") + '<path class="flk" d="M145 96q5 6 0 10-5-4 0-10z" fill="#ffb347"/>' +
      /* cupcakes */
      [230, 270, 310].map((x, i) => rect(x - 12, 172, 24, 18, ["#ff8a5b", "#9fe3ff", "#c9a4ff"][i]) + '<circle cx="' + x + '" cy="168" r="13" fill="#fff3f8"/><circle cx="' + x + '" cy="158" r="4" fill="#d7263d"/>').join("") +
      hearts + rect(0, 220, 400, 40, "#14181d") + tag("CAKE", 40, 250, 26, ORG, -4) + tag("VALENTINO", 220, 252, 24, ICE, -5));
  }

  /* 5. Bay St and Water St, Stapleton */
  function block() {
    return corner(["#0c0a1e", "#3a2a4a"], "Bay St", "Water St",
      tag("WOLFACEJOEYY", 20, 126, 25, ORG, -7) + tag("CAKE", 40, 160, 30, ROSE, -5) + tag("CUPID", 140, 166, 26, ICE, -4) + tag("STATEN ISLAND", 40, 202, 22, "#f6efdc", -2), ORG);
  }

  window.SCENES = { station1, pond, beach, cupid, block };

})();
