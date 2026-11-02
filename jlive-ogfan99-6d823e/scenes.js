/* Downtown Brooklyn and Fort Greene opening scenes for J-Live's game. Each one is a small animated SVG, 400 x 260. */
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

  const GOLD = "#ffd34d", BLUE = "#2a7ab0", ORG = "#ff6a3d";
  const BQR = [["B", "#ff6319"], ["Q", "#fccc0a", 1], ["R", "#fccc0a", 1]];

  /* 1. DeKalb Av: the Q pulling in under Flatbush Av Extension */
  function station1() {
    return station({ name: "DeKalb Av", bs: BQR, front: BQR[1], band: "#2a5a8a", col: "#5a2a2a", sx: 80, sw: 240,
      tags: tag("THE BEST PART", 22, 214, 28, GOLD, -4) + tag("J-LIVE", 260, 238, 30, ORG, -6) });
  }

  /* 2. Junior's at Flatbush Av Extension and DeKalb Av: the orange-and-white striped signs, the cheesecake window, right at his corner */
  function tower() {
    let stripes = ""; for (let x = 40; x < 360; x += 16) stripes += rect(x, 92, 8, 26, "#f6efdc");
    let cakes = ""; for (let i = 0; i < 5; i++) cakes += '<g class="bob"><path d="M' + (70 + i * 54) + ' 196h34v-12l-34 -8z" fill="#f6e2b0" stroke="#c8a060" stroke-width="1.5"/>' + rect(70 + i * 54, 192, 34, 4, "#a86a3a") + '<path d="M' + (70 + i * 54) + ' 176l34 8" stroke="#d8263a" stroke-width="3"/></g>';
    return svg('<rect width="400" height="260" fill="url(#t1)"/>' + stars(10) +
      bldg(0, 30, 40, 200, "#6a5a6a", "#ffe6a8", "#3a3a4a") + bldg(360, 20, 40, 210, "#5a5a6a", "#ffe6a8", "#3a3a4a") +
      bldg(40, 20, 320, 74, "#8a5a44", "#ffe6a8", "#3a2a2a") +
      /* the striped sign band */
      rect(40, 92, 320, 26, ORG) + stripes + rect(120, 96, 160, 18, "#111") +
      txt(200, 110, 14, "#ffb347", "JUNIOR'S", "middle", ' class="pls" letter-spacing="3"') +
      rect(40, 118, 320, 112, "#2a1a14") +
      /* the cheesecake window */
      rect(56, 132, 288, 76, "#ffe6a8", ' opacity=".9"') + cakes + rect(56, 200, 288, 8, "#8a5a3a") +
      txt(200, 150, 12, "#8a1a1a", "CHEESECAKE", "middle", ' letter-spacing="4"') +
      rect(186, 208, 28, 22, "#5a2a1a") +
      road(230) + car(0, 230, BLUE, "slide") + car(0, 230, GOLD, "slideL") +
      txt(200, 16, 12, GOLD, "FLATBUSH AV EXT &amp; DEKALB AV", "middle", ' letter-spacing="2"'),
      sky("t1", "#1a2a5a", "#e8905a"));
  }

  /* 3. Brooklyn Technical High School on DeKalb Av at Fort Greene Pl: the huge brick school and the radio mast on the roof */
  function park() {
    let mast = ""; for (let y = 10; y < 52; y += 8) mast += '<path d="M' + (194 + (y - 10) * .08) + ' ' + y + 'L' + (206 - (y - 10) * .08) + ' ' + (y + 8) + 'M' + (206 - (y - 10) * .08) + ' ' + y + 'L' + (194 + (y - 10) * .08) + ' ' + (y + 8) + '" stroke="#5a5f66" stroke-width="1.2"/>';
    return svg('<rect width="400" height="260" fill="url(#p1)"/>' +
      /* the school: one long mass of brick, a taller center */
      bldg(10, 80, 380, 150, "#9a4a34", "#cfe6ff", "#ffe6a8") + bldg(140, 56, 120, 174, "#a8543a", "#cfe6ff", "#ffe6a8") +
      rect(6, 76, 388, 6, "#e8dcc0") + rect(136, 52, 128, 6, "#e8dcc0") +
      /* the radio mast */
      '<path d="M194 10L190 52h20L206 10z" fill="none" stroke="#5a5f66" stroke-width="2"/>' + mast + '<circle class="pls" cx="200" cy="8" r="3" fill="#ff4a3a"/>' +
      '<path class="pls" d="M188 8a12 12 0 0 1 0-0M184 8q16-14 32 0" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/>' +
      /* entrance */
      rect(176, 186, 48, 44, "#3a2a22") + rect(170, 180, 60, 8, "#e8dcc0") + rect(124, 160, 152, 18, "#1a1a22") + txt(200, 173, 10, "#f6efdc", "BROOKLYN TECHNICAL H.S.") +
      tree(40, 206, 18, "#2f7a34") + tree(360, 206, 18, "#3a8a3a", "sway sw2") +
      rect(0, 230, 400, 30, "#8a857a") + person(110, 248, ORG, "slide slw") + person(290, 248, BLUE, "slideL") +
      tag("J-LIVE", 16, 252, 20, GOLD, -4) + txt(178, 40, 11, "#1a1a22", "DEKALB AV &amp; FORT GREENE PL", "end"),
      sky("p1", "#5ab0ea", "#d6eefa"));
  }
  /* 4. The classroom: the chalkboard, the wall clock ticking, the bars written out like a lesson */
  function classroom() {
    return svg(rect(0, 0, 400, 260, "#d8c8a0") + rect(0, 0, 400, 30, "#c8b890") +
      rect(40, 40, 260, 130, "#5a3a22") + rect(48, 48, 244, 114, "#24443a") +
      txt(170, 80, 18, "#f6f3ea", "THE WAY THAT I RHYME", "middle", ' font-family="Permanent Marker, cursive"') +
      '<path d="M70 100h200M70 120h150" stroke="#f6f3ea" stroke-width="2" stroke-dasharray="8 6" opacity=".6"/>' +
      '<path class="pls" d="M70 140h120" stroke="' + GOLD + '" stroke-width="3"/>' + rect(60, 162, 220, 6, "#8a6a44") + rect(240, 158, 20, 5, "#f6f3ea") +
      '<circle cx="350" cy="70" r="26" fill="#f6efdc" stroke="#2a2a2a" stroke-width="4"/><path d="M350 70v-16" stroke="#111" stroke-width="3"/>' +
      '<g class="spin slow" style="transform-box:view-box;transform-origin:350px 70px"><path d="M350 70l14 6" stroke="' + ORG + '" stroke-width="2"/></g>' +
      /* desks */
      [[40, 200], [150, 200], [260, 200]].map(([x, y]) => rect(x, y, 90, 10, "#a87a44") + rect(x + 10, y + 10, 6, 40, "#555") + rect(x + 74, y + 10, 6, 40, "#555")).join("") +
      rect(0, 250, 400, 10, "#8a6a44") + '<g class="bob"><rect x="70" y="186" width="24" height="16" fill="' + BLUE + '"/><rect x="186" y="190" width="30" height="10" fill="' + ORG + '"/></g>' +
      '<g class="rise"><path d="M330 200l-12 8 12 8" fill="none" stroke="' + GOLD + '" stroke-width="3"/></g>' + tag("A+", 320, 160, 30, ORG, -8));
  }

  /* 5. DeKalb Av and Flatbush Av Extension, Downtown Brooklyn */
  /* backdrop for the corner: the Brooklyn tower of the Brooklyn Bridge looming over Flatbush Av Ext at night, floodlit granite,
     the two pointed arches, the cable web fanning down toward the river, the flag on top */
  function bbTower() {
    const qb = (p0, c, p1, t) => [(1 - t) * (1 - t) * p0[0] + 2 * t * (1 - t) * c[0] + t * t * p1[0], (1 - t) * (1 - t) * p0[1] + 2 * t * (1 - t) * c[1] + t * t * p1[1]];
    let s = '<style>@keyframes icSl{from{transform:translateX(-60px)}to{transform:translateX(460px)}}@keyframes icSlL{from{transform:translateX(460px)}to{transform:translateX(-60px)}}@keyframes icBl{0%,49%{opacity:1}50%,100%{opacity:.2}}@keyframes icSw{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}@keyframes icWv{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}@keyframes icGl{0%,100%{opacity:.12}50%{opacity:.3}}' +
      '.icS{animation:icSl 7s linear infinite}.icS2{animation-delay:-3.5s}.icSs{animation-duration:16s}.icL{animation:icSlL 8s linear infinite}.icLs{animation-duration:15s}.icB{animation:icBl 1s steps(1) infinite}.icB2{animation-delay:-.5s}' +
      '.icSw{animation:icSw 7s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.icSw2{animation-delay:-3.5s;animation-duration:9s}.icW{animation:icWv 1.3s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}.icG{animation:icGl 2.6s ease-in-out infinite}</style>' +
      stars(16) + '<defs><linearGradient id="icBBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eadbb6"/><stop offset="1" stop-color="#7d6e55"/></linearGradient></defs>' +
      '<g class="icL icLs"><circle class="icB" cx="0" cy="34" r="1.6" fill="#ff5a4a"/><circle cx="6" cy="34" r="1" fill="#fff"/></g>';
    /* cable web: the main cable sag, the vertical suspenders, the diagonal stays */
    const P0 = [338, 34], C = [170, 60], P1 = [0, 44];
    s += '<path d="M338 34Q170 60 0 44" fill="none" stroke="#dfe6ee" stroke-width="2.4"/>';
    for (let t = 0.06; t < 1; t += 0.05) { const p = qb(P0, C, P1, t); s += '<path d="M' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + 'V60" stroke="#c9d2dc" stroke-width=".7" opacity=".7"/>'; }
    [20, 70, 120, 170, 220, 262, 296].forEach(x => s += '<path d="M338 38L' + x + ' 60" stroke="#c9d2dc" stroke-width=".8" opacity=".75"/>');
    /* the roadway coming in to the tower */
    s += '<rect x="250" y="98" width="90" height="8" fill="#2c2620"/>';
    /* the tower */
    const arch = x => '<path d="M' + x + ' 104V58Q' + x + ' 40 ' + (x + 11) + ' 30Q' + (x + 22) + ' 40 ' + (x + 22) + ' 58V104Z" fill="#141a35"/>';
    s += '<rect x="334" y="30" width="72" height="190" fill="url(#icBBg)"/><rect x="330" y="24" width="80" height="8" fill="#d9c9a2"/>' +
      '<rect x="334" y="32" width="72" height="3" fill="#a8977a"/>' + arch(342) + arch(374) +
      '<rect x="342" y="96" width="54" height="8" fill="#2c2620"/>';
    for (let x = 344; x < 396; x += 8) s += '<circle class="icB' + (x % 16 ? " icB2" : "") + '" cx="' + x + '" cy="100" r="1.1" fill="#ffe7a8"/>';
    for (let y = 120; y < 220; y += 14) s += '<path d="M334 ' + y + 'h72" stroke="#7d6e55" stroke-width="1" opacity=".6"/>';
    /* the flag on top */
    s += '<rect x="369" y="2" width="2" height="22" fill="#cfd6dd"/><g class="icW"><rect x="371" y="3" width="20" height="12" fill="#c8281e"/>' +
      '<rect x="371" y="5.4" width="20" height="1.6" fill="#fff"/><rect x="371" y="8.6" width="20" height="1.6" fill="#fff"/><rect x="371" y="11.8" width="20" height="1.6" fill="#fff"/><rect x="371" y="3" width="8" height="6.5" fill="#1f3a8a"/></g>';
    return s;
  }

  function block() {
    return corner(["#0a0c22", "#2a3a5a"], "DeKalb Av", "Flatbush Av Ext",
      tag("J-LIVE", 30, 128, 52, GOLD, -7) + tag("THE AUTHENTIC", 40, 158, 24, ORG, -5) + tag("ALL OF THE ABOVE", 26, 190, 22, BLUE, -3) + tag("BROOKLYN", 90, 212, 20, "#f6efdc", -2), GOLD, "", bbTower());
  }

  window.SCENES = { station1, tower, park, classroom, block };

})();
