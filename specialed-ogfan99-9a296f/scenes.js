/* Flatbush, Brooklyn opening scenes for Special Ed's game. Each one is a small animated SVG, 400 x 260. */
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

  const ICE = "#9fe3ff", GOLD = "#f2c14e", GRN = "#2bb673";
  const BQ = [["B", "#ff6319"], ["Q", "#fccc0a", 1]];

  /* 1. Church Av on the Brighton line: the Q pulling in below Church Av, cream tile, the sign with the B and Q */
  function station1() {
    return station({ name: "Church Av", bs: BQ, front: BQ[1], band: "#2a5a3a", col: "#1f4f8f",
      tags: tag("I GOT IT MADE", 20, 214, 30, GOLD, -4) + tag("CROOKLYN", 246, 236, 26, ICE, -6) });
  }

  /* 2. Kings Theatre on Flatbush Av: the terracotta and gold palace front, the tall red KINGS blade, marquee bulbs chasing */
  function kings() {
    let orn = "", bulbs = "";
    for (let x = 96; x < 304; x += 16) orn += '<circle cx="' + x + '" cy="58" r="4" fill="' + GOLD + '"/>';
    for (let x = 84; x < 318; x += 10) bulbs += '<circle class="blk ' + ["", "b2", "b3", "b4"][(x / 10) % 4 | 0] + '" cx="' + x + '" cy="152" r="2.4" fill="#fff3a8"/>';
    return svg('<rect width="400" height="260" fill="url(#k1)"/>' + stars(18) +
      bldg(0, 90, 70, 150, "#6a4a3a", "#ffe6a8", "#2a2a3a") + bldg(330, 100, 70, 140, "#5a4a5a", "#ffe6a8", "#2a2a3a") +
      /* the facade */
      rect(80, 40, 240, 180, "#c96a3a") + rect(80, 40, 240, 12, "#e8c48a") + rect(76, 32, 248, 10, "#e8c48a") + orn +
      '<path d="M150 140V88q50-44 100 0v52z" fill="#e8c48a"/><path d="M160 140V92q40-34 80 0v48z" fill="#3a2a40"/>' +
      '<path d="M200 60v80M170 100h60M174 120h52" stroke="#e8c48a" stroke-width="2"/>' +
      rect(96, 70, 34, 64, "#a8522a") + rect(270, 70, 34, 64, "#a8522a") + '<path d="M96 70l17-14 17 14M270 70l17-14 17 14" fill="#e8c48a"/>' +
      rect(104, 80, 18, 46, "#ffe6a8", ' opacity=".5"') + rect(278, 80, 18, 46, "#ffe6a8", ' opacity=".5"') +
      /* the vertical blade sign */
      '<rect x="56" y="30" width="30" height="110" rx="3" fill="#b3202a" stroke="' + GOLD + '" stroke-width="2"/>' +
      ["K", "I", "N", "G", "S"].map((c, i) => '<text class="flk ' + (i % 2 ? "flk2" : "") + '" x="71" y="' + (52 + i * 20) + '" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#fff3a8">' + c + '</text>').join("") +
      /* marquee */
      rect(78, 144, 244, 26, "#1b1b22") + bulbs + rect(96, 156, 208, 12, "#f6efdc") + txt(200, 166, 11, "#b3202a", "SPECIAL ED · LIVE TONIGHT") +
      rect(80, 170, 240, 50, "#8a4424") + [110, 160, 210, 260].map(x => rect(x, 180, 30, 40, "#2a1a10")).join("") +
      road(220) + car(0, 222, "#0039a6", "slide") + car(0, 222, GOLD, "slideL"),
      sky("k1", "#0d1030", "#4a2a5a"));
  }

  /* 3. Erasmus Hall High School: the gray Collegiate Gothic quad with its tower, the white 1787 academy house in the courtyard */
  function erasmus() {
    let win = "";
    for (let x = 30; x < 380; x += 26) if (x < 170 || x > 230) win += '<path d="M' + x + ' 150v-26q7-10 14 0v26z" fill="#2a3a5a"/><path d="M' + x + ' 196v-26q7-10 14 0v26z" fill="#2a3a5a"/>';
    return svg('<rect width="400" height="260" fill="url(#e1)"/>' + '<circle cx="64" cy="44" r="18" fill="#fff3c4"/>' +
      rect(16, 106, 368, 110, "#b8b4aa") + '<path d="M16 106h368" stroke="#8a867c" stroke-width="4"/>' +
      [16, 60, 104, 296, 340, 378].map(x => '<path d="M' + x + ' 106v-10l3-8 3 8v10z" fill="#8a867c"/>').join("") + win +
      /* tower */
      rect(166, 30, 68, 186, "#c4c0b6") + [166, 186, 214, 228].map(x => '<path d="M' + x + ' 30v-14l3-10 3 10v14z" fill="#8a867c"/>').join("") +
      '<path d="M182 120v-46q18-24 36 0v46z" fill="#2a3a5a"/><path d="M200 50v70M184 90h32" stroke="#c4c0b6" stroke-width="2"/>' +
      '<path d="M184 216v-60q16-20 32 0v60z" fill="#4a2a1a"/>' +
      /* the old white academy house */
      '<path d="M96 222v-34l40-22 40 22v34z" fill="#f6f3ea" stroke="#8a867c" stroke-width="1.5"/><path d="M92 190l44-26 44 26" fill="none" stroke="#3a3a42" stroke-width="5"/>' +
      rect(108, 196, 12, 14, "#2a3a5a") + rect(152, 196, 12, 14, "#2a3a5a") + rect(130, 200, 12, 22, "#2a6a3a") +
      '<rect x="132" y="150" width="8" height="12" fill="#f6f3ea"/>' +
      rect(0, 222, 400, 38, "#4a8a3a") + '<path d="M0 230h400" stroke="#3a7a2a" stroke-width="3"/>' +
      tree(30, 190, 20, "#3a8a3a") + tree(370, 186, 22, "#2f7a34", "sway sw2") +
      '<g class="slide slw"><path d="M0 70q14-10 28 0 14-10 28 0" stroke="#3a3a42" stroke-width="2" fill="none"/></g>' +
      tag("YOUNGEST IN CHARGE", 150, 254, 20, GOLD, -3),
      sky("e1", "#6fb6e8", "#cfe8f6"));
  }

  /* 4. Flatbush Reformed Dutch Church at Church Av: the old stone church, white steeple and clock, the graveyard, leaves coming down */
  function church() {
    let stones = "";
    [[40, 200], [70, 206], [100, 198], [300, 202], [332, 196], [360, 206]].forEach(([x, y]) => stones += '<path d="M' + x + ' ' + (y + 20) + 'v-14q8-10 16 0v14z" fill="#9a968c" stroke="#6a665c"/>');
    return svg('<rect width="400" height="260" fill="url(#c1)"/>' +
      /* stone body */
      rect(130, 120, 140, 100, "#8a7a64") + '<path d="M124 124l76-40 76 40z" fill="#5a4a3a"/>' +
      [148, 236].map(x => '<path d="M' + x + ' 190v-40q8-12 16 0v40z" fill="#2a3a5a"/>').join("") +
      '<path d="M186 220v-50q14-16 28 0v50z" fill="#4a2a1a"/>' +
      /* white steeple with the clock */
      rect(176, 52, 48, 70, "#f6f3ea") + rect(184, 26, 32, 28, "#f6f3ea") + '<path d="M182 28l18-34 18 34z" fill="#f6f3ea" stroke="#8a867c"/>' +
      '<circle cx="200" cy="80" r="13" fill="#1b1b22"/><circle cx="200" cy="80" r="11" fill="#f6efdc"/><path d="M200 80v-8M200 80l6 3" stroke="#111" stroke-width="2"/>' +
      '<path d="M190 52v-20h20v20" fill="none" stroke="#8a867c" stroke-width="2"/><path class="sway" d="M196 40q4 8 8 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      rect(0, 218, 400, 42, "#3a6a2a") + stones +
      '<path d="M0 214h400" stroke="#1b1b22" stroke-width="3"/>' + [...Array(20).keys()].map(i => rect(i * 20 + 4, 200, 3, 16, "#1b1b22")).join("") +
      tree(40, 140, 26, "#d9822b") + tree(360, 136, 28, "#c8552a", "sway sw2") +
      [[60, 0, ""], [330, 0, "f2"], [200, 0, "f3"], [120, 0, "f2"]].map(([x, y, c]) => '<path class="fall ' + c + '" d="M' + x + ' 20l5-4 5 4-5 4z" fill="#e0952f"/>').join(""),
      sky("c1", "#f0a860", "#f8dcb0"));
  }

  /* 5. Church Av and Flatbush Av, Flatbush */
  function block() {
    return corner(["#0d1022", "#2a3a4a"], "Church Av", "Flatbush Av",
      tag("SPECIAL ED", 24, 126, 42, ICE, -7) + tag("THE MAGNIFICENT", 30, 156, 22, GOLD, -5) + tag("I GOT IT MADE", 34, 188, 26, GRN, -3) + tag("CROOKLYN", 90, 212, 20, "#f6efdc", -2), ICE);
  }

  window.SCENES = { station1, kings, erasmus, church, block };

})();
