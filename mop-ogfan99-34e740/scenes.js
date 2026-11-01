/* Brownsville, Brooklyn opening scenes for M.O.P.'s game. Each one is a small animated SVG, 400 x 260. */
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

  const LAV = "#c9a4ff", RED = "#ff3b30", GOLD = "#f2c14e";
  const T3 = [["3", "#ee352e"]];

  /* 1. Saratoga Av: the 3 rolling in on the el over Livonia Av at dusk */
  function station1() {
    return station({ name: "Saratoga Av", bs: T3, el: true, sky: ["#1a1030", "#c0506a"], moon: true, carC: GOLD, sx: 90, sw: 220,
      tags: tag("M.O.P.", 18, 252, 26, LAV, -4) + tag("BROWNSVILLE", 214, 254, 22, RED, -5) });
  }

  /* 2. Loew's Pitkin on Pitkin Av: the big 1929 movie palace, tan brick and terracotta, the arched windows, shoppers going by */
  function pitkin() {
    let arches = "";
    for (let x = 110; x < 300; x += 40) arches += '<path d="M' + x + ' 130v-40q14-18 28 0v40z" fill="#3a3050"/><path d="M' + (x + 14) + ' 92v38" stroke="#e8d8b0" stroke-width="2"/>';
    return svg('<rect width="400" height="260" fill="url(#p1)"/>' +
      bldg(0, 96, 80, 130, "#7a4a3a", "#ffe6a8", "#3a3a4a") + bldg(320, 104, 80, 122, "#6a5a4a", "#ffe6a8", "#3a3a4a") +
      rect(80, 46, 240, 180, "#d8b98a") + rect(76, 38, 248, 12, "#b88a5a") + '<path d="M140 38l60-22 60 22z" fill="#b88a5a"/>' +
      '<circle cx="200" cy="28" r="7" fill="#e8d8b0" stroke="#8a6a4a" stroke-width="2"/>' + arches +
      [96, 304].map(x => rect(x - 6, 50, 12, 176, "#c8a878")).join("") +
      rect(84, 140, 232, 18, "#2a1a10") + txt(200, 154, 12, GOLD, "PITKIN AVENUE") +
      rect(84, 158, 232, 68, "#b89a6a") + [100, 150, 200, 250].map(x => rect(x, 170, 40, 56, "#2a2a3a")).join("") +
      [110, 160, 210, 260].map(x => rect(x, 176, 20, 30, "#ffe6a8", ' opacity=".45"')).join("") +
      rect(0, 226, 400, 34, "#5a5650") +
      person(60, 236, RED, "slide") + person(30, 238, LAV, "slide sl2") + person(340, 236, GOLD, "slideL"),
      sky("p1", "#4a8ad0", "#bfe0f6"));
  }

  /* 3. Betsy Head Pool: the 1930s brick bathhouse, the huge pool, kids splashing on a hot day */
  function pool() {
    let sp = "";
    [[90, 196], [170, 210], [250, 200], [320, 214]].forEach(([x, y], i) => sp += '<path class="spl" style="animation-delay:-' + (i * .4) + 's" d="M' + (x - 10) + ' ' + y + 'q4-14 10-18 6 4 10 18z" fill="#e8f8ff"/>');
    return svg('<rect width="400" height="260" fill="url(#b1)"/>' + '<circle cx="340" cy="40" r="22" fill="#fff3a8"/>' +
      tree(30, 100, 26, "#2f7a34") + tree(380, 96, 24, "#3a8a3a", "sway sw2") +
      brick(60, 80, 280, 80, "#a8482a", "#b8583a") + rect(56, 72, 288, 10, "#e8dcc0") +
      rect(170, 50, 60, 110, "#b8583a") + rect(166, 44, 68, 8, "#e8dcc0") + '<path d="M186 160v-50q14-16 28 0v50z" fill="#2a1a10"/>' +
      [80, 120, 260, 300].map(x => rect(x, 100, 24, 30, "#2a3a5a")).join("") +
      txt(200, 74, 10, "#5a2a1a", "BETSY HEAD") +
      rect(0, 160, 400, 14, "#e8e4da") + rect(0, 174, 400, 86, "#2aa8d8") +
      '<path class="slide slw" d="M0 190q20-6 40 0t40 0 40 0 40 0" stroke="#8adcf6" stroke-width="3" fill="none"/>' +
      '<path class="slideL" d="M0 228q20-6 40 0t40 0 40 0" stroke="#8adcf6" stroke-width="3" fill="none"/>' + sp +
      '<circle class="bob" cx="200" cy="222" r="9" fill="' + RED + '"/><circle class="bob bb2" cx="120" cy="240" r="7" fill="' + GOLD + '"/>',
      sky("b1", "#3a9ae0", "#c6ecff"));
  }

  /* 4. A Brownsville boxing gym: the ring under the lights, the heavy bag swinging, the bell on the post */
  function gym() {
    return svg(rect(0, 0, 400, 260, "#2a2228") + brick(0, 0, 400, 150, "#5a2e2a", "#64342e") +
      '<g class="flk">' + rect(80, 0, 6, 24, "#555") + '<path d="M64 24h38l-6 8H70z" fill="#fff3c4"/>' + rect(300, 0, 6, 24, "#555") + '<path d="M284 24h38l-6 8h-26z" fill="#fff3c4"/></g>' +
      '<g opacity=".12"><path d="M70 32h26l60 200H10zM290 32h26l60 200H230z" fill="#fff3c4"/></g>' +
      rect(40, 40, 140, 30, "#111") + txt(110, 62, 18, GOLD, "WORK HARD") +
      /* heavy bag */
      '<g class="sway" style="transform-origin:top center"><path d="M330 0v40" stroke="#888" stroke-width="3"/><rect x="314" y="40" width="32" height="80" rx="12" fill="' + RED + '" stroke="#7a1a14" stroke-width="2"/><rect x="314" y="62" width="32" height="6" fill="#1b1b22"/></g>' +
      /* ring */
      rect(30, 150, 260, 70, "#2a5ab0") + '<path d="M30 150l20-30h220l20 30z" fill="#e8e4da"/>' +
      [[50, 120], [270, 120], [30, 150], [290, 150]].map(([x, y]) => rect(x - 4, y - 50, 8, 52, "#c9ced6")).join("") +
      '<path d="M50 84h220M50 96h220M50 108h220" stroke="' + RED + '" stroke-width="3"/><path d="M30 114h260M30 126h260M30 138h260" stroke="#f6efdc" stroke-width="3"/>' +
      '<circle class="pls" cx="350" cy="170" r="14" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/><rect x="346" y="184" width="8" height="40" fill="#555"/>' +
      '<g class="jump"><path d="M140 112h10l4 26h-18z" fill="' + LAV + '"/><circle cx="145" cy="104" r="7" fill="#2a1a10"/><circle cx="132" cy="118" r="6" fill="' + RED + '"/><circle cx="160" cy="116" r="6" fill="' + RED + '"/></g>' +
      rect(0, 220, 400, 40, "#3a3034") + tag("FIRST FAMILY", 110, 250, 26, GOLD, -3));
  }

  /* 5. Saratoga Av and Livonia Av, under the 3 */
  function block() {
    return corner(["#0d0a1c", "#3a2a40"], "Saratoga Av", "Livonia Av",
      tag("M.O.P.", 30, 128, 54, LAV, -7) + tag("FIRST FAMILY", 40, 158, 24, GOLD, -5) + tag("MASH OUT POSSE", 26, 190, 24, RED, -3) + tag("BROWNSVILLE", 70, 212, 20, "#f6efdc", -2), RED);
  }

  window.SCENES = { station1, pitkin, pool, gym, block };

})();
