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

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: south down the Concourse at dusk, the silhouette centered over the wall, birds crossing */
(function () {
  /* Y: little kit for drawing the stadium into the corner's sky. Every piece is plain SVG in the 400 x 260 frame. */
  const Y = (function () {
    const css = '<style>' +
      '@keyframes ysP{0%,100%{opacity:1}50%{opacity:.5}}.ysP{animation:ysP 1.8s ease-in-out infinite}' +
      '@keyframes ysF{0%{transform:scale(.1);opacity:0}12%{opacity:1}100%{transform:scale(1);opacity:0}}.ysF{transform-box:fill-box;transform-origin:50% 50%;animation:ysF 2.6s ease-out infinite}' +
      '@keyframes ysB{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ysB{transform-box:fill-box;transform-origin:50% 100%;animation:ysB 5s ease-in-out infinite}' +
      '@keyframes ysX{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ysX{animation:ysX 16s linear infinite}' +
      '@keyframes ysW{0%,100%{transform:skewY(0)}50%{transform:skewY(-14deg)}}.ysW{transform-box:fill-box;transform-origin:0 50%;animation:ysW 1.1s ease-in-out infinite}' +
      '@keyframes ysD{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.ysD{animation:ysD 9s ease-in-out infinite}' +
      '@keyframes ysS{from{transform:translateY(0)}to{transform:translateY(60px)}}.ysS{animation:ysS 3s linear infinite}.ysR{animation-duration:.7s}' +
      '@keyframes ysK{0%,100%{opacity:1}50%{opacity:.2}}.ysK{animation:ysK 1s steps(1) infinite}' +
      '</style>';
    const g = (x, y, s, inner) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + inner + '</g>';
    /* the white frieze: top rail, posts, and the arched openings hanging under it */
    const frieze = (x0, x1, y, k, c) => {
      let p = 'M' + x0 + ' ' + y + 'H' + x1;
      for (let x = x0; x < x1 - 0.1; x += k) p += 'M' + x + ' ' + y + 'v6M' + x + ' ' + (y + 4.5) + 'q' + (k / 2) + ' -5 ' + k + ' 0';
      return '<path d="' + p + 'M' + x1 + ' ' + y + 'v6" fill="none" stroke="' + (c || "#f4f1e8") + '" stroke-width="1.4"/>';
    };
    /* light banks on poles, with a soft glow */
    const lights = (xs, y, off) => xs.map((p, i) => { const x = p.length ? p[0] : p, yy = p.length ? p[1] : y;
      return '<g' + (off ? ' class="ysK" style="animation-duration:' + (2 + i * .7) + 's"' : '') + '><ellipse class="ysP" cx="' + x + '" cy="' + (yy - 11) + '" rx="11" ry="6" fill="#fff4c8" opacity=".24"/>' +
      '<path d="M' + x + ' ' + yy + 'v-8" stroke="#3a3f48" stroke-width="1.2"/><rect x="' + (x - 6) + '" y="' + (yy - 13) + '" width="12" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>' +
      '<path d="M' + (x - 2) + ' ' + (yy - 13) + 'v5M' + (x + 2) + ' ' + (yy - 13) + 'v5" stroke="#c9c3a8" stroke-width=".5"/></g>'; }).join("");
    /* the limestone face: tall arches either side of the big gate, a gold band over the gate (no lettering) */
    const face = (w, lit) => {
      const n = Math.max(2, Math.round((w - 36) / 2 / 20)), step = (w / 2 - 22) / n, aw = step * 0.6, gx = w / 2;
      let a = '<rect x="0" y="-58" width="' + w + '" height="58" fill="' + (lit ? "#e9dcb8" : "#d8cfba") + '"/>' +
        '<rect x="-2" y="-62" width="' + (w + 4) + '" height="5" fill="#f1ead8"/><rect x="0" y="-8" width="' + w + '" height="8" fill="#a99f8a"/>';
      for (let i = 0; i < n; i++) [6 + i * step, w - 6 - i * step - aw].forEach(x =>
        a += '<path d="M' + x.toFixed(1) + ' -8V-42a' + (aw / 2).toFixed(1) + ' ' + (aw / 2).toFixed(1) + ' 0 0 1 ' + aw.toFixed(1) + ' 0V-8z" fill="' + (lit ? "#ffcf78" : "#4a4652") + '"' + (lit ? ' opacity=".9"' : '') + '/>');
      a += '<path d="M' + (gx - 15) + ' -8V-38a15 15 0 0 1 30 0V-8z" fill="' + (lit ? "#ffe2a0" : "#3a3640") + '" stroke="#b8ad94" stroke-width="2"/>' +
        '<rect x="' + (gx - 20) + '" y="-56" width="40" height="5" fill="#c9a24a"/>';
      return a;
    };
    /* the upper deck behind the face, with the frieze riding on top and light banks above it */
    const deck = (w, lit, banks) => '<path d="M-4 -60L6 -74H' + (w - 6) + 'L' + (w + 4) + ' -60z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, w - 6, -80, 7) +
      '<path d="M6 -80H' + (w - 6) + '" stroke="#f4f1e8" stroke-width="2"/>' + lights(banks || [w * 0.2, w * 0.5, w * 0.8], -80);
    const halo = (c) => '<radialGradient id="ysH"><stop offset="0" stop-color="' + (c || "#ffe9b0") + '" stop-opacity=".55"/><stop offset="1" stop-color="' + (c || "#ffe9b0") + '" stop-opacity="0"/></radialGradient>';
    return {
      css,
      /* straight-on front: face + deck */
      front: (x, y, s, o) => g(x, y, s, deck(o.w || 200, o.lit, o.banks) + face(o.w || 200, o.lit)),
      /* three-quarter view: front face plus the long side running away to the right */
      corner3q: (x, y, s, o) => {
        const lit = o.lit;
        let side = '<path d="M120 -62L200 -50V-4L120 0z" fill="' + (lit ? "#cbbd99" : "#bdb4a0") + '"/><path d="M120 -62L200 -50" stroke="#f1ead8" stroke-width="4"/>';
        for (let i = 0; i < 5; i++) { const x0 = 128 + i * 15, x1 = x0 + 8, t0 = -55 + (x0 - 120) * 0.15, t1 = -55 + (x1 - 120) * 0.15, b0 = -8 + (x0 - 120) * 0.05;
          side += '<path d="M' + x0 + ' ' + b0 + 'V' + (t0 + 10) + 'Q' + ((x0 + x1) / 2) + ' ' + (t0 + 2) + ' ' + x1 + ' ' + (t1 + 10) + 'V' + (b0 - 0.4) + 'z" fill="' + (lit ? "#ffc865" : "#4a4652") + '"' + (lit ? ' opacity=".85"' : '') + '/>'; }
        const top = '<path d="M-4 -60L6 -74H120L200 -62V-50z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, 118, -80, 7) +
          '<path d="M118 -80L198 -68" stroke="#f4f1e8" stroke-width="2"/><path d="M118 -80L198 -68M126 -79v5M138 -77v5M150 -75v5M162 -74v5M174 -72v5M186 -70v5M198 -68v5" fill="none" stroke="#f4f1e8" stroke-width="1.2"/>' +
          '<path d="M6 -80H118" stroke="#f4f1e8" stroke-width="2"/>' + lights([30, 90, 150, 190], -78);
        return g(x, y, s, top + side + face(120, lit));
      },
      /* far off: a low dark mass, the frieze a thin bright lace on top, the lights glowing */
      far: (x, y, s, o) => { let ar = ""; for (let i = 0; i < 15; i++) ar += '<path d="M' + (16 + i * 11.6) + ' -3V-14a3 3 0 0 1 6 0V-3z" fill="' + (o.win ? "#ffcf78" : "#4a4652") + '"/>';
        return halo(o.hc) + g(x, y, s,
        '<ellipse class="ysP" cx="100" cy="-34" rx="' + (o.halo || 120) + '" ry="' + ((o.halo || 120) / 3) + '" fill="url(#ysH)"/>' +
        '<path d="M2 -18V-22Q100 -44 198 -22V-18z" fill="' + (o.c || "#2c3040") + '"/>' +
        '<path d="M6 -27Q100 -48 194 -27" fill="none" stroke="#f4f1e8" stroke-width="1.6"/><path d="M6 -24.5Q100 -45.5 194 -24.5" fill="none" stroke="#f4f1e8" stroke-width="4" stroke-dasharray="1.4 2.2" opacity=".85"/>' +
        lights([[30, -33], [72, -40], [128, -40], [170, -33]], 0, o.off) +
        '<rect x="8" y="-20" width="184" height="20" fill="' + (o.lime || "#c9c0aa") + '"/><rect x="6" y="-22" width="188" height="3" fill="#ece5d2"/>' + ar +
        '<path d="M92 -3V-15a8 8 0 0 1 16 0V-3z" fill="' + (o.win ? "#ffe2a0" : "#3a3640") + '"/><rect x="88" y="-19" width="24" height="3" fill="#c9a24a"/>'); },
      /* the city spread out below a high corner, for the views looking down */
      valley: (y0, c, w) => { let d = '<rect x="0" y="' + y0 + '" width="400" height="' + (226 - y0) + '" fill="' + c + '"/>'; for (let i = 0; i < 70; i++) d += '<rect x="' + ((i * 53) % 400) + '" y="' + (y0 + 4 + (i * 29) % (222 - y0)) + '" width="2" height="2" fill="' + (w || "#ffd98a") + '" opacity=".6"/>'; return d; },
      /* from up on the Highbridge bluff: down into the bowl */
      bowl: (cx, cy, s, o) => {
        let b = '<ellipse rx="100" ry="36" fill="#d8cfba"/><ellipse rx="93" ry="32" fill="#2c4470"/><ellipse rx="80" ry="27" cy="2" fill="#3b5d96"/>' +
          '<ellipse rx="66" ry="21" cy="4" fill="' + (o.day ? "#3fa34a" : "#2f9a3e") + '"/><ellipse rx="54" ry="16" cy="5" fill="none" stroke="#4fb85a" stroke-width="5" opacity=".6"/>' +
          '<path d="M0 22L18 13L0 6L-18 13z" fill="#c08850"/><path d="M0 18L11 13L0 9L-11 13z" fill="#3fa34a"/>' +
          '<rect x="-1.5" y="20.5" width="3" height="3" fill="#fff"/><rect x="16.5" y="11.5" width="3" height="3" fill="#fff"/><rect x="-1.5" y="4.5" width="3" height="3" fill="#fff"/><rect x="-19.5" y="11.5" width="3" height="3" fill="#fff"/>' +
          '<ellipse rx="97" ry="34" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-dasharray="1.4 1.8"/><ellipse rx="98" ry="35" fill="none" stroke="#f4f1e8" stroke-width="1"/>' +
          '<rect x="-20" y="-38" width="40" height="12" fill="#14161c"/><g class="ysK"><path d="M-16 -34h14M2 -34h14M-16 -30h26" stroke="#7fd4ff" stroke-width="1.6"/></g>';
        [[-90, -12], [-50, -32], [50, -32], [90, -12], [-80, 20], [80, 20]].forEach(p => b += '<circle class="ysP" cx="' + p[0] + '" cy="' + (p[1] - 6) + '" r="9" fill="#fff4c8" opacity=".3"/><rect x="' + (p[0] - 5) + '" y="' + (p[1] - 9) + '" width="10" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>');
        return g(cx, cy, s, b);
      },
      /* light in the sky: the horizon tint for dusk, dawn, golden afternoon */
      tint: (top, bottom, y0) => '<linearGradient id="ysT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '" stop-opacity="0"/><stop offset="1" stop-color="' + bottom + '" stop-opacity=".85"/></linearGradient>' +
        '<rect x="0" y="' + (y0 || 0) + '" width="400" height="' + (226 - (y0 || 0)) + '" fill="url(#ysT)"/>',
      halo,
      clouds: (list, c) => list.map((p, i) => '<g class="ysD" style="animation-delay:-' + (i * 3) + 's"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/><ellipse cx="' + (p[0] + p[2] * .3) + '" cy="' + (p[1] - p[2] / 6) + '" rx="' + (p[2] * .5) + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/></g>').join(""),
      plane: (y, dur) => '<g class="ysX" style="animation-duration:' + (dur || 16) + 's"><path d="M0 ' + y + 'h16l4 -2h-6l-5 -5h-3l3 5h-9z" fill="#2a2d36"/><circle class="ysK" cx="2" cy="' + y + '" r="1.6" fill="#ff4a4a"/><circle cx="17" cy="' + y + '" r="1.2" fill="#fff"/></g>',
      blimp: (x, y) => '<g class="ysD"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#d9dde3" stroke="#6b7280" stroke-width="1"/><path d="M' + (x + 22) + ' ' + y + 'l10 -8v16z" fill="#9aa1aa"/><rect x="' + (x - 6) + '" y="' + (y + 8) + '" width="12" height="4" rx="1" fill="#3a3f48"/>' +
        '<rect class="ysK" x="' + (x - 16) + '" y="' + (y - 2) + '" width="28" height="4" rx="2" fill="#ffd66b"/></g>',
      fireworks: (list) => list.map((p, i) => { let r = ""; for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; r += 'M' + p[0] + ' ' + p[1] + 'l' + (Math.cos(a) * p[2]).toFixed(1) + ' ' + (Math.sin(a) * p[2]).toFixed(1); }
        return '<path class="ysF" style="animation-delay:-' + (i * 0.9) + 's" d="' + r + '" stroke="' + p[3] + '" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2"/>'; }).join(""),
      beams: (list) => list.map((p, i) => '<path class="ysB" style="animation-delay:-' + (i * 2.4) + 's" d="M' + p[0] + ' ' + p[1] + 'l-9 -' + p[2] + 'h18z" fill="#fff6d8" opacity=".16"/>').join(""),
      birds: (x, y) => '<g class="ysX" style="animation-duration:22s"><path d="M' + x + ' ' + y + 'q3 -3 6 0q3 -3 6 0M' + (x + 14) + ' ' + (y - 6) + 'q2 -2 4 0q2 -2 4 0M' + (x - 10) + ' ' + (y - 4) + 'q2 -2 4 0q2 -2 4 0" fill="none" stroke="#22252e" stroke-width="1.3"/></g>',
      flags: (list) => list.map((p, i) => '<path d="M' + p[0] + ' ' + p[1] + 'v-' + p[2] + '" stroke="#e6e6e6" stroke-width="1"/><g class="ysW" style="animation-delay:-' + (i * 0.3) + 's"><rect x="' + p[0] + '" y="' + (p[1] - p[2]) + '" width="' + (p[2] * .6) + '" height="' + (p[2] * .38) + '" fill="' + (i % 2 ? "#1f3a8a" : "#e8303a") + '"/><path d="M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .13) + 'h' + (p[2] * .6) + 'M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .26) + 'h' + (p[2] * .6) + '" stroke="#fff" stroke-width=".8"/></g>').join(""),
      /* an el: girder, posts, and a 4 (or 5) train rolling across it */
      el: (x0, x1, y, s, n) => {
        let p = '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + (4 * s) + '" fill="#2f3a33"/>';
        for (let x = x0 + 6; x < x1; x += 26 * s) p += '<rect x="' + x + '" y="' + y + '" width="' + (2 * s) + '" height="' + (40 * s) + '" fill="#2f3a33"/>';
        let cars = ""; for (let c = 0; c < 3; c++) cars += '<rect x="' + (c * 34 * s) + '" y="' + (y - 11 * s) + '" width="' + (32 * s) + '" height="' + (11 * s) + '" rx="' + (2 * s) + '" fill="#c3c8cf" stroke="#6b7280" stroke-width=".8"/><path d="M' + (c * 34 * s + 4 * s) + ' ' + (y - 7 * s) + 'h' + (24 * s) + '" stroke="#ffe9b0" stroke-width="' + (3 * s) + '" stroke-dasharray="' + (4 * s) + ' ' + (2 * s) + '"/>';
        return p + '<g class="ysX" style="animation-duration:11s">' + cars + '<circle cx="' + (96 * s) + '" cy="' + (y - 5.5 * s) + '" r="' + (4.5 * s) + '" fill="#00933c"/><text x="' + (96 * s) + '" y="' + (y - 3.3 * s) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (6 * s) + '" fill="#fff">' + (n || "4") + '</text></g>';
      },
      /* falling weather, looped in a box: rain streaks or snow */
      weather: (x, y, w, h, kind) => { let d = ""; for (let i = 0; i < Math.round(w * 60 / 300); i++) { const px = x + (i * 37) % w, py0 = (i * 23) % 60;
        for (let py = y - 60 + py0; py < y + h; py += 60) d += kind === "snow" ? '<circle cx="' + px + '" cy="' + py + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".85"/>' : '<path d="M' + px + ' ' + py + 'l-2 9" stroke="#b9c8dc" stroke-width="1" opacity=".6"/>'; }
        return '<clipPath id="ysC"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/></clipPath><g clip-path="url(#ysC)"><g class="ysS' + (kind === "snow" ? "" : " ysR") + '">' + d + '</g></g>'; },
      fog: (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" opacity=".38"/><g class="ysD"><ellipse cx="' + (x + w * .3) + '" cy="' + (y + h * .55) + '" rx="' + (w * .4) + '" ry="' + (h * .18) + '" fill="' + c + '" opacity=".45"/><ellipse cx="' + (x + w * .75) + '" cy="' + (y + h * .35) + '" rx="' + (w * .35) + '" ry="' + (h * .14) + '" fill="' + c + '" opacity=".4"/></g>',
      moon: (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 8) + '" fill="#fff1d6" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff1d6"/><circle cx="' + (x - r * .3) + '" cy="' + (y - r * .2) + '" r="' + (r * .2) + '" fill="#e8dcc0"/><circle cx="' + (x + r * .35) + '" cy="' + (y + r * .3) + '" r="' + (r * .14) + '" fill="#e8dcc0"/>',
      river: (x0, x1, y, h) => '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + h + '" fill="#1c2a44"/><g class="ysD"><path d="M' + (x0 + 10) + ' ' + (y + 3) + 'h30M' + (x0 + 70) + ' ' + (y + 6) + 'h22M' + (x0 + 130) + ' ' + (y + 4) + 'h26" stroke="#ffcf78" stroke-width="1.4" opacity=".7"/></g>'
    };
  })();
  const base = window.SCENES.block;
  window.SCENES.block = function () {
    const art = '<g>' + Y.css +
      Y.tint("#c070ff", "#ff9a6a", 0) + Y.far(70, 58, .8, { c: "#2a2036", halo: 60 }) + Y.birds(90, 20) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
