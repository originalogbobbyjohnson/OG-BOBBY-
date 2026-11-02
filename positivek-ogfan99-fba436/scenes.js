/* Tremont and the Grand Concourse, Bronx opening scenes for Positive K's game. Each one is a small animated SVG, 400 x 260. */
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

  const SUN = "#ffb347", BLUE = "#2a7ab0", PINK = "#ff4f8b";
  const BD = [["B", "#ff6319"], ["D", "#ff6319"]];

  /* 1. 182–183 Sts under the Grand Concourse: the D pulling in */
  function station1() {
    return station({ name: "182–183 Sts", bs: BD, front: BD[1], band: "#6a3a7a", col: "#2a4a6a", sx: 100, sw: 200,
      tags: tag("POSITIVE K", 22, 214, 30, SUN, -4) + tag("BRONX", 260, 238, 32, PINK, -6) });
  }

  /* 2. The Grand Concourse: Art Deco apartment houses, cream and gold brick, corner windows, sunburst trim, cars going by */
  function concourse() {
    const deco = (x, w, c) => { let s = rect(x, 50, w, 150, c) + rect(x, 44, w, 8, "#c8a860");
      for (let y = 64; y < 190; y += 22) for (let xx = x + 8; xx < x + w - 14; xx += 20) s += rect(xx, y, 14, 14, (xx + y) % 4 ? "#2a3a5a" : "#ffe6a8");
      s += '<path d="M' + (x + w / 2 - 20) + ' 200v-24q20-22 40 0v24z" fill="#3a2a1a"/>';
      [0, 30, 60, 90, 120, 150, 180].map(a => s += '<path d="M' + (x + w / 2) + ' 178l' + (Math.cos(a * Math.PI / 180) * -22) + ' ' + (Math.sin(a * Math.PI / 180) * -22) + '" stroke="#c8a860" stroke-width="2"/>'); return s; };
    return svg('<rect width="400" height="260" fill="url(#g1)"/>' + deco(0, 130, "#e8d4a8") + deco(136, 130, "#f0dcb0") + deco(272, 128, "#e0c898") +
      rect(0, 200, 400, 10, "#9a968c") + tree(130, 186, 14, "#3a8a3a") + tree(266, 186, 14, "#3a8a3a", "sway sw2") + road(210) +
      car(0, 214, SUN, "slide") + car(0, 228, BLUE, "slideL") + car(0, 214, PINK, "slide sl2"),
      sky("g1", "#5aaeea", "#d4ecf8"));
  }

  /* 3. Fordham Plaza at Webster Av and E Fordham Rd: the open plaza and its canopy, the Bx buses pulling through, the Fordham Metro-North stop down in the cut, Fordham Rd crowds */
  function poe() {
    let crowd = ""; [[60, PINK], [96, SUN], [140, BLUE], [262, "#2bb673"], [300, PINK], [338, SUN]].forEach(([x, c], i) => crowd += person(x, 174 + (i % 2) * 4, c, i % 2 ? "bob" : ""));
    let win = ""; for (let x = 14; x < 220; x += 36) win += rect(x, 222, 22, 9, "#dfeaf5");
    const bxbus = (cls, y) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="104" height="34" rx="6" fill="#e9ecef" stroke="#6b7280" stroke-width="1.5"/>' + rect(0, y + 22, 104, 4, BLUE) + rect(6, y + 5, 74, 12, "#2a3440") +
      txt(43, y + 14, 8, "#ffb020", "FORDHAM PLAZA") + '<circle cx="20" cy="' + (y + 34) + '" r="5" fill="#111"/><circle cx="84" cy="' + (y + 34) + '" r="5" fill="#111"/></g>';
    return svg('<rect width="400" height="260" fill="url(#p1)"/>' + '<circle cx="218" cy="46" r="16" fill="#fff3c4"/>' +
      /* the office tower over the plaza */
      rect(250, 20, 110, 150, "#c99a86") + rect(262, 8, 86, 14, "#b8887a") + '<path d="M262 8l43-6 43 6z" fill="#8a5a50"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(r => rect(258, 30 + r * 17, 94, 8, "#3a4a5e", ' opacity=".85"')).join("") + rect(300, 20, 10, 150, "#e8d8c8") +
      bldg(0, 60, 90, 110, "#7a5a4a", "#ffe6a8", "#3a3a4a") + bldg(94, 80, 70, 90, "#6a5a6a", "#ffe6a8", "#3a3a4a") +
      /* the plaza and the canopy */
      rect(0, 150, 400, 40, "#cfc6b4") + '<path d="M150 118q50-20 100 0v8q-50-18-100 0z" fill="#f4f4f4" stroke="#aab" stroke-width="1"/>' + rect(170, 126, 4, 30, "#59616e") + rect(226, 126, 4, 30, "#59616e") + rect(176, 132, 48, 22, "#2a7ab0", ' opacity=".7"') +
      tree(20, 140, 16, "#3f7a3a") + tree(380, 140, 16, "#3f7a3a", "sway sw2") + crowd +
      /* Fordham Rd and the buses */
      road(190) + bxbus("slide", 192) +
      /* Metro-North in the cut below */
      rect(0, 216, 400, 44, "#3a3a3a") + '<g class="slideL"><rect x="0" y="218" width="230" height="20" rx="4" fill="#d4d8de" stroke="#6b7280"/>' + rect(0, 232, 230, 3, "#0039a6") + win + '</g>' +
      rect(0, 238, 400, 22, "#2a2a2a") + '<rect x="290" y="240" width="36" height="16" rx="3" fill="#0039a6"/>' + txt(308, 252, 9, "#fff", "MN") + txt(360, 252, 8, "#fff", "Fordham") +
      txt(120, 22, 13, "#1b2430", "FORDHAM PLAZA") + txt(120, 36, 8, "#1b2430", "WEBSTER AV &amp; E FORDHAM RD") +
      tag("POSITIVE K", 14, 214, 18, SUN, -3),
      sky("p1", "#8fc3ea", "#f6e2c4"));
  }

  /* 4. Nightshift on Fordham Road: the shopping strip after dark, the signs glowing, the Bx12 bus rolling */
  function fordham() {
    return svg('<rect width="400" height="260" fill="url(#f1)"/>' + stars(20) +
      bldg(0, 70, 140, 110, "#5a4a5a", "#ffe6a8", "#2a2a3a") + bldg(146, 90, 110, 90, "#6a5a4a", "#ffe6a8", "#2a2a3a") + bldg(262, 60, 138, 120, "#4a4a6a", "#ffe6a8", "#2a2a3a") +
      [[10, SUN, "SNEAKERS"], [154, PINK, "GOLD"], [272, BLUE, "RECORDS"]].map(([x, c, t], i) => '<g class="flk ' + (i % 2 ? "flk2" : "") + '">' + rect(x, 152, 110, 22, "#111", ' rx="3"') + txt(x + 55, 168, 13, c, t) + '</g>').join("") +
      rect(0, 180, 400, 80, "#2a2d33") + '<path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="slide slw"><rect x="0" y="186" width="120" height="40" rx="5" fill="#e8eaee" stroke="#6b7280" stroke-width="2"/>' + [8, 32, 56, 80].map(d => rect(d, 192, 20, 14, "#ffe6a8")).join("") + rect(0, 216, 120, 5, "#0039a6") + '<circle cx="20" cy="228" r="7" fill="#111"/><circle cx="96" cy="228" r="7" fill="#111"/></g>' +
      car(0, 232, PINK, "slideL") + tag("NIGHTSHIFT", 110, 120, 28, SUN, -4),
      sky("f1", "#0a0a2a", "#3a2a5a"));
  }

  /* 5. Grand Concourse and E 183 St */
  function block() {
    return corner(["#0c0a22", "#2a2a4a"], "Grand Concourse", "E 183 St",
      tag("POSITIVE K", 22, 128, 36, SUN, -7) + tag("I GOT A MAN", 40, 160, 26, PINK, -5) + tag("CARHOPPERS", 30, 192, 24, BLUE, -3) + tag("THE BRONX", 120, 212, 18, "#f6efdc", -2), SUN);
  }

  window.SCENES = { station1, concourse, poe, fordham, block };

})();
