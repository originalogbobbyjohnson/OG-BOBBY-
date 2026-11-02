/* Bronx opening scenes for the Diamond D game: D.I.T.C., the Psychotic Neurotics, the Forest Houses. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(500px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carL{from{transform:translateX(500px)}to{transform:translateX(-140px)}}' +
    '.carL{animation:carL 9s linear infinite}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:center;animation:spin 1.8s linear infinite}' +
    '@keyframes pad{0%,100%{opacity:.35}50%{opacity:1}}' +
    '.pad{animation:pad .9s steps(1) infinite}.pad2{animation-delay:-.3s}.pad3{animation-delay:-.6s}' +
    '@keyframes glint{0%,70%,100%{opacity:0}80%{opacity:1}}' +
    '.glint{animation:glint 2.6s infinite}.glint2{animation-delay:-1.3s}' +
    '@keyframes wave{0%,100%{transform:skewX(0deg)}50%{transform:skewX(-10deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:left center;animation:wave 1.4s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const vinyl = (cx, cy, r, c, cls) =>
    '<g' + (cls ? ' class="' + cls + '"' : "") + '><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .78) + '" fill="none" stroke="#2c2c2c" stroke-width="1"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .58) + '" fill="none" stroke="#2c2c2c" stroke-width="1"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .34) + '" fill="' + c + '"/><rect x="' + (cx - r * .2) + '" y="' + (cy - r * .2) + '" width="' + (r * .14) + '" height="' + (r * .08) + '" fill="#fff" opacity=".7"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .06) + '" fill="#e8e0cc"/></g>';
  /* a cut diamond: crown + pavilion facets */
  const gem = (cx, cy, s, c) =>
    '<g><path d="M' + (cx - s) + ' ' + cy + 'l' + (s * .4) + ' ' + (-s * .55) + 'h' + (s * 1.2) + 'l' + (s * .4) + ' ' + (s * .55) + 'l' + (-s) + ' ' + (s * 1.2) + 'z" fill="' + c + '" stroke="#fff" stroke-width="1.2"/>' +
    '<path d="M' + (cx - s) + ' ' + cy + 'h' + (s * 2) + 'M' + (cx - s * .2) + ' ' + (cy - s * .55) + 'l' + (-s * .3) + ' ' + (s * .55) + 'l' + (s * .5) + ' ' + (s * 1.2) + 'l' + (s * .5) + ' ' + (-s * 1.2) + 'l' + (-s * .3) + ' ' + (-s * .55) + '" stroke="#fff" stroke-width=".9" fill="none" opacity=".8"/></g>';
  const ICE = "#7fd6f0", GOLD = "#f2c14e", RED = "#e04f6a", CREAM = "#f3e6c8";

  /* 1. The 2 / 5 pulling into Jackson Av, up on the el over Westchester Av: canopy, the steel el, the Bronx below */
  function train() {
    let girders = "";
    for (let x = 0; x < 400; x += 50) girders += '<rect x="' + (x + 20) + '" y="196" width="10" height="64" fill="#3a4450"/><path d="M' + (x + 20) + ' 200l-18 22M' + (x + 30) + ' 200l18 22" stroke="#3a4450" stroke-width="4"/>';
    let windows = "";
    for (let x = 18; x < 250; x += 46) windows += '<rect x="' + x + '" y="118" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    let bldg = "";
    [[0, 64, 64, "#6a3a2c"], [64, 88, 50, "#5b3226"], [296, 70, 56, "#7a4a34"], [352, 90, 48, "#5b3226"]].forEach(b => {
      bldg += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="' + b[3] + '"/>';
      for (let y = b[1] + 8; y < 100; y += 14) for (let x = b[0] + 6; x < b[0] + b[2] - 8; x += 14) bldg += '<rect x="' + x + '" y="' + y + '" width="7" height="8" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(16) + bldg +
      '<path d="M0 22h400v10H0z" fill="#3a4450"/><path d="M0 32h400" stroke="#222a33" stroke-width="3"/>' +
      '<rect x="40" y="32" width="6" height="68" fill="#3a4450"/><rect x="354" y="32" width="6" height="68" fill="#3a4450"/>' +
      '<g class="flk"><rect x="150" y="34" width="100" height="4" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="98" y="44" width="204" height="34" rx="4" fill="#111"/><rect x="98" y="44" width="204" height="4" fill="#fff"/>' +
      '<text x="110" y="69" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Jackson Av</text>' +
      bullet(252, 62, "2", "#ee352e") + bullet(280, 62, "5", "#00933c") +
      '<rect x="0" y="100" width="400" height="6" fill="#4a3a2a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="106" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="148" width="300" height="5" fill="#00933c"/>' + windows +
        '<circle cx="300" cy="160" r="4" fill="#fff6c2"/>' + bullet(290, 126, "5", "#00933c") +
      '</g>' +
      '<rect x="0" y="170" width="400" height="8" fill="#eab308"/><rect x="0" y="178" width="400" height="18" fill="#5a4a3a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#15171a"/>' + girders +
      '<path d="M0 252h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("D.I.T.C.", 30, 238, 30, ICE, -5) + tag("DIAMOND D", 210, 242, 26, GOLD, -7),
      sky("g1", "#0a1426", "#3a2a4a"));
  }





  /* ---- redrawn landmark scenes (OG FAN 99 landmark pass): small shared helpers, prefixed L ---- */
  const Lcss = '<style>' +
    '@keyframes lmCar{from{transform:translateX(-170px)}to{transform:translateX(480px)}}.lm-car{animation:lmCar 8s linear infinite}' +
    '@keyframes lmCarB{from{transform:translateX(480px)}to{transform:translateX(-170px)}}.lm-carb{animation:lmCarB 10s linear infinite}' +
    '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lm-bob{animation:lmBob 1.6s ease-in-out infinite}' +
    '@keyframes lmFlk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.95}}.lm-flk{animation:lmFlk 2.3s infinite}' +
    '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{animation:lmSpin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmRise{0%{transform:translateY(0) scale(.8);opacity:0}20%{opacity:.85}100%{transform:translateY(-70px) scale(1.4);opacity:0}}.lm-rise{animation:lmRise 4s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{animation:lmSway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes lmBlk{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blk{animation:lmBlk 1s steps(1) infinite}' +
    '@keyframes lmFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.lm-flag{animation:lmFlag 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,230px) rotate(280deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}' +
    '@keyframes lmCld{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.lm-cld{animation:lmCld 30s linear infinite}' +
    '@keyframes lmPls{0%,100%{opacity:.35}50%{opacity:1}}.lm-pls{animation:lmPls 2.2s ease-in-out infinite}' +
    '@keyframes lmWav{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.lm-wav{animation:lmWav 3s ease-in-out infinite}' +
    '@keyframes lmBeat{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}.lm-beat{animation:lmBeat .7s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.lm-note{animation:lmNote 3s linear infinite}' +
    '.lmd1{animation-delay:-1s}.lmd2{animation-delay:-2s}.lmd3{animation-delay:-3s}.lmd4{animation-delay:-4.5s}.lmd5{animation-delay:-6s}' +
    '</style>';
  const LF = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LT = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + LF + ' font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const LA = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" font-family="Anton, Impact, sans-serif" font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const LR = (x, y, w, h, fill, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"' + (extra || "") + '/>';
  const Lbul = (x, y, l, col, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/>' + LT(l, x, y + r * 0.42, r * 1.22, col === "#fccc0a" ? "#000" : "#fff"); };
  const Lpill = (x, y, l, col) => { const w = l.length * 8 + 14; return '<rect x="' + (x - w / 2) + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="10" fill="' + col + '"/>' + LT(l, x, y + 4.5, 11, "#fff"); };
  /* black MTA-style station sign: lines = [["B","#ff6319"],...]; a long name like "MN" draws a pill */
  const Lsign = (x, y, w, name, lines, size) => { let b = "", bx = x + w - 18; for (let i = lines.length - 1; i >= 0; i--) { const l = lines[i]; if (l[0].length > 1) { b += Lpill(bx - 10, y + 17, l[0], l[1]); bx -= l[0].length * 8 + 22; } else { b += Lbul(bx, y + 17, l[0], l[1], 10); bx -= 24; } }
    return LR(x, y, w, 32, "#111", ' rx="3"') + LR(x, y, w, 4, "#fff") + LT(name, x + 10, y + 23, size || 15, "#fff", "start") + b; };
  /* green NYC street sign blade */
  const Lblade = (x, y, t, w) => { w = w || t.length * 7.2 + 20; return LR(x, y, w, 19, "#0f6b3a", ' rx="2" stroke="#fff" stroke-width="1.5"') + LT(t, x + w / 2, y + 14, 12, "#fff"); };
  /* two green signs on a pole at x, crossing */
  const Lpole = (x, y, a, b) => { const wa = a.length * 7.2 + 20, wb = b.length * 7.2 + 20; return LR(x, y, 6, 236 - y, "#2a3138") + Lblade(x + 3 - wa / 2, y + 6, a) + Lblade(x + 3 - wb / 2, y + 30, b) + LR(x - 2, y - 4, 10, 6, "#2a3138"); };
  const Lbrick = (x, y, w, h, base, mortar) => { let s = LR(x, y, w, h, base); for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + mortar + '" stroke-width=".8"/>'; return s; };
  const Lwin = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const on = ((r * 7 + c * 3) % 5) < 2; s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (on ? lit : dark) + '"' + (on && (r + c) % 4 === 0 ? ' class="lm-flk"' : '') + '/>'; } return s; };
  const Lstars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const Lcloud = (x, y, s, cls) => '<g class="lm-cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const Ltree = (x, y, r, col, cls) => '<g class="lm-sway ' + (cls || "") + '">' + LR(x - 3, y, 6, r * 1.3, "#5a3d24") + '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '" opacity=".85"/><circle cx="' + (x + r * .55) + '" cy="' + (y + r * .25) + '" r="' + r * .65 + '" fill="' + col + '" opacity=".9"/></g>';
  /* faceless figure: head + body, x = centre, y = feet */
  const Lman = (x, y, body, cls, cap) => '<g' + (cls ? ' class="' + cls + '"' : "") + '>' + '<rect x="' + (x - 7) + '" y="' + (y - 30) + '" width="14" height="22" rx="5" fill="' + body + '"/><rect x="' + (x - 6) + '" y="' + (y - 10) + '" width="5" height="10" fill="#1d1d24"/><rect x="' + (x + 1) + '" y="' + (y - 10) + '" width="5" height="10" fill="#1d1d24"/>' +
    '<circle cx="' + x + '" cy="' + (y - 37) + '" r="7" fill="#5a3a26"/>' + (cap ? '<path d="M' + (x - 8) + ' ' + (y - 39) + 'q8-10 16 0z" fill="' + cap + '"/><rect x="' + (x - 1) + '" y="' + (y - 41) + '" width="12" height="3" fill="' + cap + '"/>' : '') + '</g>';
  /* subway car (stainless) seen from the side, x,y top-left */
  const Lcar = (x, y, w, l, col, band) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="52" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>'; for (let i = x + 16; i < x + w - 60; i += 40) s += '<rect x="' + i + '" y="' + (y + 9) + '" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".9"/>';
    return s + LR(x, y + 33, w, 5, band || col) + Lbul(x + w - 22, y + 18, l, col, 10) + '<circle cx="' + (x + w - 8) + '" cy="' + (y + 44) + '" r="3.5" fill="#fff6c2"/>'; };
  const Lcab = (x, y) => '<rect x="' + x + '" y="' + (y + 8) + '" width="70" height="20" rx="5" fill="#f7c600"/><path d="M' + (x + 12) + ' ' + (y + 8) + 'l8-10h28l10 10z" fill="#f7c600"/><path d="M' + (x + 22) + ' ' + y + 'h10v8h-14zM' + (x + 35) + ' ' + y + 'h10l7 8h-17z" fill="#bfe0ff"/>' +
    LR(x + 26, y - 6, 18, 6, "#fff", ' rx="1"') + LT("TAXI", x + 35, y - 1.5, 5, "#111") + '<path d="M' + x + ' ' + (y + 17) + 'h70" stroke="#111" stroke-width="1" stroke-dasharray="3 3"/><circle cx="' + (x + 15) + '" cy="' + (y + 28) + '" r="6" fill="#111"/><circle cx="' + (x + 55) + '" cy="' + (y + 28) + '" r="6" fill="#111"/>';
  const Lauto = (x, y, col) => '<rect x="' + x + '" y="' + (y + 6) + '" width="56" height="16" rx="5" fill="' + col + '"/><rect x="' + (x + 11) + '" y="' + (y - 2) + '" width="32" height="11" rx="3" fill="#cfe6ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 22) + '" r="5" fill="#111"/><circle cx="' + (x + 43) + '" cy="' + (y + 22) + '" r="5" fill="#111"/>';
  /* turntable from above at an angle */
  const Ldeck = (cx, cy, r, lab) => '<rect x="' + (cx - r - 12) + '" y="' + (cy - r * .45 - 10) + '" width="' + (r * 2 + 30) + '" height="' + (r * .9 + 20) + '" rx="4" fill="#2a2a30"/><g transform="translate(' + cx + ' ' + cy + ') scale(1 .42)"><g class="lm-spin"><circle r="' + r + '" fill="#0c0c0e"/><circle r="' + r * .72 + '" fill="none" stroke="#2c2c30" stroke-width="2"/><circle r="' + r * .5 + '" fill="none" stroke="#2c2c30" stroke-width="2"/><circle r="' + r * .3 + '" fill="' + lab + '"/><rect x="-2" y="' + (-r * .3) + '" width="4" height="' + r * .2 + '" fill="#fff"/></g></g><path d="M' + (cx + r + 6) + ' ' + (cy - r * .4) + 'l-8 ' + r * .5 + '" stroke="#c9ced6" stroke-width="3"/>';
  /* 1. St. Anselm's Church, Tinton Av at E 152nd: Byzantine-Romanesque brick, big rose window, campanile */
  function LM_hub() {
    let spokes = ""; for (let a = 0; a < 360; a += 30) spokes += '<path d="M200 118l' + (Math.cos(a * Math.PI / 180) * 26).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 26).toFixed(1) + '" stroke="#e8dcc0" stroke-width="2"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(70, 34) + Lcloud(330, 24, .8, "lmd3") +
      /* campanile */
      LR(296, 40, 44, 196, "#b5623a") + '<path d="M292 40l26-20 26 20z" fill="#8a3f22"/>' + [70, 110].map(y => '<path d="M306 ' + (y + 22) + 'v-14q12-14 24 0v14z" fill="#2a1a14"/>').join("") +
      '<g class="lm-sway swt" style="transform-origin:top center"><path d="M312 74q6-10 12 0v8h-12z" fill="#c9a24a"/></g>' + Lbrick(296, 130, 44, 106, "#b5623a", "#9a4e2c") +
      /* small dome behind */
      '<path d="M140 92q60-56 120 0z" fill="#7a8a8a"/><path d="M196 40v-12M190 34h12" stroke="#c9a24a" stroke-width="3"/>' +
      /* gabled front */
      '<path d="M96 236V96l104-54 104 54v140z" fill="#c4703f"/>' + Lbrick(96, 100, 208, 136, "#c4703f", "#a85a32") + '<path d="M96 96l104-54 104 54" stroke="#e8dcc0" stroke-width="4" fill="none"/>' +
      /* arcaded corbel band */
      '<path d="M96 154h208" stroke="#e8dcc0" stroke-width="3"/>' + [110, 134, 158, 182, 206, 230, 254, 278].map(x => '<path d="M' + x + ' 154q8-10 16 0" stroke="#e8dcc0" stroke-width="1.5" fill="none"/>').join("") +
      /* rose window */
      '<circle cx="200" cy="118" r="30" fill="#2a3a7a" stroke="#e8dcc0" stroke-width="4"/>' + '<g class="lm-pls"><circle cx="200" cy="118" r="26" fill="#d8a23a" opacity=".55"/></g>' + spokes + '<circle cx="200" cy="118" r="7" fill="#e04f6a"/>' +
      /* triple arched doors with gold mosaic lunettes */
      [[150, 34], [200, 44], [250, 34]].map(d => '<path d="M' + (d[0] - d[1] / 2) + ' 236v-40q' + d[1] / 2 + '-' + d[1] * .6 + ' ' + d[1] + ' 0v40z" fill="#3a2418" stroke="#e8dcc0" stroke-width="3"/><path d="M' + (d[0] - d[1] / 2 + 3) + ' 196q' + (d[1] / 2 - 3) + '-' + (d[1] * .55) + ' ' + (d[1] - 6) + ' 0z" fill="#e2b53e"/>').join("") +
      LR(0, 236, 400, 24, "#9a948a") + '<path d="M0 236h400" stroke="#6a645a" stroke-width="2"/>' +
      '<g class="lm-car" style="animation-duration:12s"><path d="M0 60q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="lm-car lmd4" style="animation-duration:14s"><path d="M0 76q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      LR(8, 8, 160, 34, "#1b2a3a", ' rx="3"') + LT("ST. ANSELM'S CHURCH", 88, 23, 11, "#f2c14e") + LT("TINTON AV · E 152 ST", 88, 36, 9, "#fff") +
      tag("DIAMOND D", 6, 228, 22, "#7fd6f0", -5),
      sky("sk", "#79b4e4", "#f1dcb0"));
  }
  /* 2. Longwood Historic District, Dawson & Kelly Sts: brownstone and limestone rows with round bays and stoops */
  function LM_stadium() {
    const house = (x, stone, trim) => '<rect x="' + x + '" y="70" width="64" height="150" fill="' + stone + '"/>' + '<path d="M' + (x - 2) + ' 70h68v-10h-68z" fill="' + trim + '"/>' + '<path d="M' + x + ' 62h64" stroke="#3a2a20" stroke-width="2"/>' +
      /* round bay */
      '<path d="M' + (x + 4) + ' 210V86q16-10 32 0v124z" fill="' + trim + '" opacity=".9"/>' + [92, 128, 164].map(y => LR(x + 9, y, 9, 22, "#2a2a34") + LR(x + 22, y, 9, 22, "#ffd77a", ' class="lm-flk" opacity=".85"')).join("") +
      LR(x + 42, 90, 16, 24, "#2a2a34") + LR(x + 42, 130, 16, 24, "#ffd77a", ' opacity=".7"') + LR(x + 42, 168, 16, 42, "#4a2a1a") +
      /* stoop */
      '<path d="M' + (x + 38) + ' 236l0-26h24v26z" fill="' + trim + '"/>' + [214, 222, 230].map(y => '<path d="M' + (x + 36) + ' ' + y + 'h28" stroke="#5a4a3a"/>').join("") + '<path d="M' + (x + 36) + ' 210l-6 26" stroke="#1d1d1d" stroke-width="2"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(40, 30) + Lcloud(280, 22, .9, "lmd2") +
      house(4, "#8a5a3c", "#c9b89a") + house(70, "#d8ccb0", "#8a5a3c") + house(136, "#7a4a30", "#c9b89a") + house(202, "#d8ccb0", "#8a5a3c") + house(268, "#8a5a3c", "#c9b89a") + house(334, "#d8ccb0", "#8a5a3c") +
      LR(0, 236, 400, 24, "#3a3a40") + LR(0, 232, 400, 6, "#a8a296") +
      Ltree(66, 170, 16, "#4f8a3c") + Ltree(266, 176, 14, "#5a9a44", "lmd1") +
      '<g class="lm-car">' + Lauto(0, 236, "#e04f6a") + '</g>' + Lman(146, 234, "#7fd6f0", "lm-bob", "#f2c14e") + Lman(320, 234, "#f2c14e", "lm-bob lmd1") +
      LR(96, 6, 208, 34, "#1b2a3a", ' rx="3"') + LT("LONGWOOD HISTORIC DISTRICT", 200, 21, 11, "#f2c14e") + LT("DAWSON ST · KELLY ST · SOUTH BRONX", 200, 34, 8.5, "#fff") +
      tag("D.I.T.C.", 216, 226, 18, "#7fd6f0", -4),
      sky("sk", "#86bde6", "#f4d9ae"));
  }
  /* 3. Stunts, Blunts & Hip Hop (1992): the crew on the stoop like the cover, a sampler on a milk crate, crates of breaks */
  function LM_studio() {
    const crate = (x, y, c) => LR(x, y, 46, 34, c, ' rx="2"') + '<path d="M' + (x + 6) + ' ' + (y + 6) + 'h34M' + (x + 6) + ' ' + (y + 14) + 'h34M' + (x + 6) + ' ' + (y + 22) + 'h34" stroke="#00000055" stroke-width="3"/>' + [4, 10, 16, 22, 28, 34].map(d => LR(x + 4 + d, y - 14, 3, 16, ["#111", "#e04f6a", "#111", "#f2c14e", "#111", "#7fd6f0"][d / 6 | 0])).join("");
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lstars(10) +
      Lbrick(0, 30, 400, 206, "#6a3a2a", "#5a2e20") + LR(130, 40, 140, 118, "#2a1a14") + LR(136, 46, 60, 106, "#3a2a20") + LR(204, 46, 60, 106, "#3a2a20") + '<rect class="lm-flk" x="190" y="34" width="20" height="8" fill="#ffe7a8"/>' +
      /* stoop */
      [[110, 158], [100, 178], [90, 198], [80, 218]].map(s => LR(s[0], s[1], 400 - 2 * s[0], 20, ["#8a847a", "#9a948a", "#8a847a", "#9a948a"][(s[1] - 158) / 20])).join("") +
      '<path d="M110 158l-30 78M290 158l30 78" stroke="#1d1d1d" stroke-width="4"/>' +
      /* the crew, faceless */
      Lman(160, 178, "#2a2a30", "lm-bob", "#f2c14e") + Lman(200, 178, "#e04f6a", "lm-bob lmd1") + Lman(240, 178, "#7fd6f0", "lm-bob lmd2", "#111") + Lman(140, 198, "#4a4a52", "lm-bob lmd3") + Lman(262, 198, "#f2c14e", "lm-bob", "#e04f6a") +
      /* sampler on the milk crate */
      LR(22, 188, 56, 48, "#2f6fd1", ' rx="2"') + '<path d="M26 196h48M26 206h48M26 216h48M26 226h48" stroke="#1d4a9a" stroke-width="3"/>' + LR(14, 168, 72, 22, "#9ea3aa", ' rx="3"') +
      [0, 1, 2, 3].map(i => LR(20 + i * 12, 176, 9, 8, "#e9e2cf", ' class="lm-blk' + (i % 2 ? ' lmd1' : '') + '"')).join("") + '<rect x="70" y="174" width="10" height="5" fill="#e04f6a" class="lm-pls"/>' +
      crate(316, 202, "#e04f6a") + crate(340, 168, "#f2c14e") +
      '<g class="lm-note"><path d="M60 150v-14l10-3v14" stroke="#7fd6f0" stroke-width="2.5" fill="none"/><circle cx="57" cy="150" r="3.5" fill="#7fd6f0"/></g>' +
      LR(0, 236, 400, 24, "#2a2a30") +
      LR(70, 4, 260, 26, "#111", ' rx="3"') + LA("STUNTS, BLUNTS &amp; HIP HOP · 1992", 200, 24, 15, "#f2c14e") +
      tag("DIAMOND D", 4, 160, 20, "#7fd6f0", -6) + tag("PSYCHOTIC NEUROTICS", 282, 140, 9, "#f2c14e", -4),
      sky("sk", "#1a1a2e", "#3a2a3a"));
  }
  /* 4. Jackson Av & Westchester Av, right under the Jackson Av el stop */
  function LM_corner() {
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lstars(16) +
      LR(250, 70, 150, 166, "#8a4a34") + Lwin(262, 84, 4, 4, 34, 32, 18, 18, "#ffd77a", "#2a1c18") +
      Lbrick(6, 108, 224, 128, "#4a3a3a", "#5a4848") +
      tag("DIAMOND D", 14, 166, 42, "#7fd6f0", -6) + tag("D.I.T.C.", 22, 198, 24, "#f2c14e", -4) + tag("BEST KEPT SECRET", 24, 226, 16, "#e04f6a", -3) +
      '<rect class="lm-pls" x="120" y="168" width="3" height="10" fill="#7fd6f0"/>' +
      /* the el over Westchester Av */
      LR(0, 24, 400, 16, "#3a4a3a") + LR(0, 40, 400, 6, "#2a3a2a") + [0, 384].map(x => LR(x, 46, 10, 190, "#3a4a3a")).join("") +
      '<g class="lm-carb" style="animation-duration:7s"><rect x="0" y="2" width="170" height="22" rx="4" fill="#c9ced6"/>' + [10, 44, 78, 112].map(x => LR(x, 6, 22, 9, "#cfe6ff")).join("") + Lbul(156, 13, "2", "#ee352e", 8) + '</g>' +
      LR(260, 30, 120, 18, "#111", ' rx="2"') + LT("Jackson Av", 270, 43, 11, "#fff", "start") + Lbul(352, 39, "2", "#ee352e", 7) + Lbul(368, 39, "5", "#00933c", 7) +
      Lpole(238, 56, "Jackson Av", "Westchester Av") +
      LR(0, 236, 400, 24, "#14181d") + '<path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="lm-car">' + Lauto(0, 226, "#f2c14e") + '</g>',
      sky("sk", "#0d1022", "#2a2a40"));
  }

  window.SCENES = { train, hub: LM_hub, stadium: LM_stadium, studio: LM_studio, corner: LM_corner };
})();

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: framed under the Jackson Av el, the face and deck low in the gap, rain coming down */
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
  const base = window.SCENES.corner;
  window.SCENES.corner = function () {
    const art = '<g>' + Y.css +
      Y.front(40, 112, .66, { lit: true, w: 280 }) + Y.weather(10, 44, 246, 70, "rain") + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
