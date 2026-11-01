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
  const corner = (g, s1, s2, tags, accent, extra) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
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

  /* 2. The Williamsburgh Savings Bank tower: the tall tower over Atlantic and Flatbush, the four clock faces, the gold dome */
  function tower() {
    return svg('<rect width="400" height="260" fill="url(#t1)"/>' + stars(10) +
      bldg(0, 140, 90, 90, "#6a5a6a", "#ffe6a8", "#3a3a4a") + bldg(300, 120, 100, 110, "#5a5a6a", "#ffe6a8", "#3a3a4a") +
      /* tower body: buff limestone & brick */
      rect(150, 90, 100, 140, "#d8c8a0") + rect(160, 70, 80, 22, "#cbb98e") + rect(166, 40, 68, 32, "#d8c8a0") +
      [[166, 100], [190, 100], [214, 100]].map(([x, y]) => '<path d="M' + x + ' 230V' + y + '" stroke="#b8a678" stroke-width="2"/>').join("") +
      [170, 186, 202, 218].map(x => [110, 130, 150, 170, 190, 210].map(y => rect(x, y, 10, 12, (x + y) % 3 ? "#ffe6a8" : "#3a3a4a", ' opacity=".85"')).join("")).join("") +
      '<circle cx="200" cy="56" r="13" fill="#f6efdc" stroke="' + GOLD + '" stroke-width="3"/><path d="M200 56v-9M200 56l6 3" stroke="#111" stroke-width="2"/>' +
      '<path d="M170 40q30-40 60 0z" fill="' + GOLD + '"/><path d="M200 2v12" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path class="pls" d="M170 40q30-40 60 0" stroke="#fff3a8" stroke-width="2" fill="none"/>' +
      road(230) + car(0, 230, ORG, "slide") + car(0, 230, BLUE, "slideL"),
      sky("t1", "#1a2a5a", "#e8905a"));
  }

  /* 3. Fort Greene Park: the Prison Ship Martyrs Monument, the tall granite column with the bronze urn, the wide steps */
  function park() {
    return svg('<rect width="400" height="260" fill="url(#p1)"/>' + '<circle cx="330" cy="50" r="20" fill="#fff3a8"/>' +
      '<path d="M0 170q200-50 400 0v90H0z" fill="#4a9a3a"/>' +
      /* steps */
      '<path d="M60 260l40-60h200l40 60z" fill="#c8c4b8"/>' + [212, 224, 236, 248].map(y => '<path d="M' + (100 - (y - 200) * .66) + ' ' + y + 'h' + (200 + (y - 200) * 1.33) + '" stroke="#9a968a" stroke-width="2"/>').join("") +
      rect(150, 186, 100, 16, "#b8b4a8") +
      /* column */
      rect(188, 34, 24, 152, "#d8d4c8") + '<path d="M194 40v140M206 40v140" stroke="#bab6aa" stroke-width="2"/>' + rect(182, 26, 36, 10, "#c8c4b8") +
      '<path d="M190 26q0-14 10-14t10 14z" fill="#6a7a5a"/><rect x="196" y="6" width="8" height="8" fill="#6a7a5a"/>' +
      '<g class="flk"><circle cx="200" cy="10" r="10" fill="#fff3a8" opacity=".3"/></g>' +
      tree(40, 150, 26, "#2f7a34") + tree(360, 148, 26, "#3a8a3a", "sway sw2") + tree(100, 170, 18, "#2a6a2a") + tree(300, 170, 18, "#2a6a2a", "sway sw2") +
      person(130, 236, ORG, "slide slw") + person(270, 236, BLUE, "slideL"),
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
  function block() {
    return corner(["#0a0c22", "#2a3a5a"], "DeKalb Av", "Flatbush Av Ext",
      tag("J-LIVE", 30, 128, 52, GOLD, -7) + tag("THE AUTHENTIC", 40, 158, 24, ORG, -5) + tag("ALL OF THE ABOVE", 26, 190, 22, BLUE, -3) + tag("BROOKLYN", 90, 212, 20, "#f6efdc", -2), GOLD);
  }

  window.SCENES = { station1, tower, park, classroom, block };

})();
