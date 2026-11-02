/* Flatbush, Brooklyn opening scenes for Kirk Knight's game. Each one is a small animated SVG, 400 x 260. */
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

  const PINK = "#ff6fb5", VIO = "#6a5cff", GOLD = "#f2c14e";
  const T25 = [["2", "#ee352e"], ["5", "#00933c"]];

  /* 1. Flatbush Av–Brooklyn College: end of the line, the 2 waiting at the platform */
  function station1() {
    return station({ name: "Flatbush Av–Brooklyn College", bs: T25, band: "#2a4a7a", col: "#6a2a2a", sx: 40, sw: 320,
      tags: tag("PRO ERA", 24, 214, 32, PINK, -4) + tag("KNIGHT TIME", 214, 238, 26, GOLD, -6) });
  }

  /* 2. Brooklyn College: the red brick library with its white clock tower over the quad lawn */
  function college() {
    let win = "";
    for (let x = 40; x < 370; x += 30) if (x < 160 || x > 240) win += rect(x, 130, 14, 22, "#e8f0f8") + rect(x, 170, 14, 22, "#e8f0f8");
    return svg('<rect width="400" height="260" fill="url(#c1)"/>' +
      rect(20, 116, 360, 96, "#a8442e") + rect(16, 110, 368, 8, "#f6f3ea") + win +
      /* tower */
      rect(164, 60, 72, 152, "#a8442e") + rect(160, 56, 80, 8, "#f6f3ea") + '<path d="M184 212v-34q16-18 32 0v34z" fill="#f6f3ea"/><rect x="192" y="186" width="16" height="26" fill="#3a2a20"/>' +
      rect(176, 26, 48, 32, "#f6f3ea") + '<circle cx="200" cy="42" r="11" fill="#1b1b22"/><circle cx="200" cy="42" r="9" fill="#f6efdc"/><path d="M200 42v-6M200 42l5 2" stroke="#111" stroke-width="1.6"/>' +
      '<path d="M184 26l16-14 16 14z" fill="#f6f3ea"/><path d="M200 12V0" stroke="' + GOLD + '" stroke-width="2"/>' +
      [176, 224].map(x => rect(x - 2, 64, 4, 40, "#f6f3ea")).join("") +
      rect(0, 212, 400, 48, "#5aa040") + '<path d="M180 260l10-48h20l10 48z" fill="#d8ccb0"/>' +
      tree(40, 176, 24, "#2f7a34") + tree(362, 174, 24, "#3a8a3a", "sway sw2") +
      person(110, 238, VIO, "slide") + person(300, 240, PINK, "slideL") +
      '<g class="slide slw"><path d="M0 60q10-8 20 0 10-8 20 0" stroke="#3a3a42" stroke-width="2" fill="none"/></g>',
      sky("c1", "#5ab0ea", "#d2ecfa"));
  }

  /* 3. The Junction: Flatbush Av and Nostrand Av meeting, the buses rolling through, the stores lit up */
  function junction() {
    const bus = (x, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="184" width="110" height="40" rx="5" fill="#e8eaee" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="214" width="110" height="5" fill="#0039a6"/>' +
      [8, 30, 52, 74].map(d => rect(x + d, 190, 18, 14, "#2a3a5a")).join("") + '<circle cx="' + (x + 20) + '" cy="226" r="7" fill="#111"/><circle cx="' + (x + 88) + '" cy="226" r="7" fill="#111"/></g>';
    return svg('<rect width="400" height="260" fill="url(#j1)"/>' + stars(10) +
      bldg(0, 70, 120, 110, "#7a5a4a", "#ffe6a8", "#3a3a4a") + bldg(130, 90, 130, 90, "#9a7a5a", "#ffe6a8", "#3a3a4a") + bldg(270, 60, 130, 120, "#5a5a6a", "#ffe6a8", "#3a3a4a") +
      [[10, PINK], [140, GOLD], [280, VIO]].map(([x, c]) => '<rect class="pls" x="' + x + '" y="150" width="100" height="16" rx="2" fill="' + c + '"/>').join("") +
      rect(0, 180, 400, 80, "#2a2d33") + '<path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus(0, "slide slw") + car(0, 232, PINK, "slideL") +
      '<rect x="370" y="110" width="5" height="80" fill="#1d2329"/><rect x="362" y="96" width="20" height="34" rx="3" fill="#1b1b22"/><circle cx="372" cy="104" r="4" fill="#3a1a1a"/><circle class="blk" cx="372" cy="122" r="4" fill="#2bd66b"/>',
      sky("j1", "#1a1440", "#5a3a7a"));
  }

  /* 4. Knight Time: the bedroom studio at night, the drum pads lighting up, the moon in the window, a knight's helmet on the shelf */
  function lab() {
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pls ' + ["", "p2", "p3"][(r + c) % 3] + '" x="' + (150 + c * 18) + '" y="' + (150 + r * 14) + '" width="14" height="10" rx="2" fill="' + [PINK, VIO, GOLD][(r * 4 + c) % 3] + '"/>';
    return svg(rect(0, 0, 400, 260, "#1a1430") +
      '<rect x="40" y="30" width="120" height="90" fill="#0b0a24" stroke="#3a2a5a" stroke-width="6"/><path d="M100 30v90M40 75h120" stroke="#3a2a5a" stroke-width="4"/>' +
      '<circle cx="128" cy="54" r="14" fill="#fff3c4"/><circle cx="134" cy="50" r="12" fill="#0b0a24"/>' + '<circle cx="60" cy="96" r="1.5" fill="#fff"/><circle cx="80" cy="44" r="1.2" fill="#fff"/>' +
      /* shelf + helmet */
      rect(240, 70, 120, 6, "#5a3a22") + '<path d="M276 70v-26q24-20 48 0v26z" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><path d="M286 52h28M286 58h28" stroke="#3a3e46" stroke-width="3"/><path d="M300 24q10-6 16 4" stroke="' + PINK + '" stroke-width="4" fill="none"/>' +
      /* speakers with eq */
      [40, 330].map(x => '<rect x="' + x + '" y="130" width="34" height="70" rx="3" fill="#111"/><circle class="pop" cx="' + (x + 17) + '" cy="178" r="12" fill="#2a2a30" stroke="' + VIO + '" stroke-width="2"/>').join("") +
      /* desk + pads + laptop */
      rect(20, 200, 360, 12, "#3a2a1a") + rect(140, 140, 84, 64, "#2b2b30", ' rx="4"') + pads +
      '<path d="M240 200l8-50h80l8 50z" fill="#2b2b30"/><rect x="252" y="156" width="72" height="38" fill="#0e1430"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="eq ' + ["", "e2", "e3", "e4"][i % 4] + '" x="' + (258 + i * 11) + '" y="168" width="7" height="22" fill="' + [PINK, VIO, GOLD][i % 3] + '"/>').join("") +
      rect(0, 212, 400, 48, "#120e22") + tag("LATE KNIGHT SPECIAL", 40, 248, 24, PINK, -3));
  }

  /* 5. Flatbush Av and Nostrand Av, at the Junction */
  /* backdrop for the corner: looking up Flatbush Av from the Junction at dusk, the Kings Theatre far off over the rooftops,
     its crest and big arched window in silhouette, the little red blade glowing */
  function kingsFar() {
    let s = '<style>@keyframes icSl{from{transform:translateX(-60px)}to{transform:translateX(460px)}}@keyframes icSlL{from{transform:translateX(460px)}to{transform:translateX(-60px)}}@keyframes icBl{0%,49%{opacity:1}50%,100%{opacity:.2}}@keyframes icSw{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}@keyframes icWv{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}@keyframes icGl{0%,100%{opacity:.12}50%{opacity:.3}}' +
      '.icS{animation:icSl 7s linear infinite}.icS2{animation-delay:-3.5s}.icSs{animation-duration:16s}.icL{animation:icSlL 8s linear infinite}.icLs{animation-duration:15s}.icB{animation:icBl 1s steps(1) infinite}.icB2{animation-delay:-.5s}' +
      '.icSw{animation:icSw 7s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.icSw2{animation-delay:-3.5s;animation-duration:9s}.icW{animation:icWv 1.3s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}.icG{animation:icGl 2.6s ease-in-out infinite}</style>' +
      '<defs><linearGradient id="icDk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e1446"/><stop offset=".12" stop-color="#6a3a78"/><stop offset=".22" stop-color="#e8806a"/><stop offset=".3" stop-color="#f4b27a"/><stop offset=".5" stop-color="#3a2a5a"/><stop offset="1" stop-color="#1e1636"/></linearGradient></defs>' +
      '<rect width="400" height="220" fill="url(#icDk)"/>';
    [[30, 6], [90, 14], [250, 8], [330, 16], [380, 5]].forEach(p => s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1" fill="#fff" opacity=".8"/>');
    s += '<g class="icL icLs"><circle class="icB" cx="0" cy="20" r="1.5" fill="#ff5a4a"/><circle cx="5" cy="20" r="1" fill="#fff"/></g>';
    /* the rooftops along the avenue */
    [[0, 42, 40], [40, 46, 30], [70, 40, 26], [214, 44, 34], [248, 38, 30], [278, 46, 40], [318, 40, 30], [348, 44, 52]].forEach(b => s += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (220 - b[1]) + '" fill="#2a1d42"/>');
    for (let x = 262; x < 400; x += 14) for (let y = 70; y < 210; y += 22) if ((x + y) % 3) s += '<rect x="' + x + '" y="' + y + '" width="5" height="8" fill="#ffcf7a" opacity=".55"/>';
    /* the theater */
    s += '<rect x="96" y="28" width="118" height="30" fill="#3a2a4c"/><path d="M128 28L155 14L182 28Z" fill="#3a2a4c"/><rect x="94" y="26" width="122" height="3" fill="#5a4462"/>' +
      '<path d="M140 58V40Q155 24 170 40V58Z" fill="#f2b24a" opacity=".9"/><path d="M155 30V58M146 46H164" stroke="#3a2a4c" stroke-width="1.2"/>' +
      '<circle class="icG" cx="220" cy="28" r="18" fill="#ff4a3d"/>' +
      '<rect x="213" y="3" width="14" height="52" rx="1.5" fill="#3a0d10" stroke="#e8b84a" stroke-width="1"/>';
    "KINGS".split("").forEach((c, i) => s += '<text x="220" y="' + (14 + i * 9.6) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" fill="#ff5a4a">' + c + '</text>');
    return s;
  }

  function block() {
    return corner(["#0d0a22", "#3a2a5a"], "Flatbush Av", "Nostrand Av",
      tag("KIRK KNIGHT", 22, 128, 36, PINK, -7) + tag("PRO ERA", 40, 160, 28, GOLD, -5) + tag("BEAST COAST", 30, 190, 24, VIO, -3) + tag("KNIGHT TIME", 80, 212, 18, "#f6efdc", -2), PINK, "", kingsFar());
  }

  window.SCENES = { station1, college, junction, lab, block };

})();
