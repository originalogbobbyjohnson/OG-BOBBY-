/* Hackensack, New Jersey opening scenes for the Coi Leray game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.2}}' +
    '.bulb{animation:chase .8s infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob .8s ease-in-out infinite}.bob2{animation-delay:-.4s}' +
    '@keyframes beam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0%;animation:beam 3s ease-in-out infinite}.beam2{animation-delay:-1.5s}' +
    '@keyframes carR{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.carR{animation:carR 5s linear infinite}.carR2{animation-delay:-2.5s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff4fa3", YEL = "#ffd23f", SKY = "#3ec7ff";

  /* 1. Anderson Street station, Pascack Valley Line: low platform, NJ Transit train with its orange, purple and blue stripes */
  function train() {
    let windows = "";
    for (let x = 24; x < 260; x += 44) windows += '<rect x="' + x + '" y="112" width="28" height="22" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let trees = "";
    for (let x = 0; x < 400; x += 46) trees += '<circle cx="' + x + '" cy="92" r="26" fill="#3f7a3a"/><circle cx="' + (x + 22) + '" cy="84" r="20" fill="#4f8f45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' + trees +
      /* sign on posts */
      '<rect x="60" y="20" width="5" height="40" fill="#555"/><rect x="335" y="20" width="5" height="40" fill="#555"/>' +
      '<rect x="40" y="14" width="320" height="40" rx="4" fill="#111"/>' +
      '<text x="54" y="41" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Anderson Street</text>' +
      badge(196, 34, 42, "NJT", "#0039a6") +
      '<text x="248" y="31" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">PASCACK VALLEY</text>' +
      '<text x="248" y="45" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">HACKENSACK</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="100" width="300" height="60" rx="8" fill="#d4d8de" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="140" width="300" height="5" fill="#f58025"/><rect x="8" y="145" width="300" height="5" fill="#8e258d"/><rect x="8" y="150" width="300" height="5" fill="#0039a6"/>' + windows +
        '<rect x="284" y="112" width="16" height="22" rx="3" fill="#dfeaf5" opacity=".9"/><circle cx="300" cy="154" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="8" fill="#eab308"/><rect x="0" y="168" width="400" height="26" fill="#a29c90"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#3a3d44"/>' +
      tag("COI", 30, 240, 36, PINK, -5) + tag("TRENDSETTER", 150, 236, 26, YEL, -4),
      sky("gs", "#ff9fc8", "#ffe2b8"));
  }

  /* 2. Bergen County Court House: white marble, columns, the green copper dome with its gold figure on top */
  function courthouse() {
    let cols = "";
    for (let x = 118; x <= 274; x += 26) cols += '<rect x="' + x + '" y="130" width="10" height="64" fill="#f2efe8"/><rect x="' + (x - 2) + '" y="126" width="14" height="5" fill="#d8d3c8"/>';
    let steps = "";
    for (let i = 0; i < 4; i++) steps += '<rect x="' + (100 - i * 10) + '" y="' + (194 + i * 6) + '" width="' + (200 + i * 20) + '" height="6" fill="' + (i % 2 ? "#d8d3c8" : "#e8e4da") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gh)"/>' +
      '<rect x="30" y="120" width="340" height="80" fill="#ece8de"/><rect x="30" y="116" width="340" height="8" fill="#d8d3c8"/>' +
      '<path d="M100 120L200 92 300 120z" fill="#e8e4da" stroke="#c8c2b4" stroke-width="2"/>' +
      /* drum + dome */
      '<rect x="150" y="62" width="100" height="34" fill="#ece8de"/><rect x="146" y="58" width="108" height="6" fill="#d8d3c8"/>' +
      (function () { let s = ""; for (let x = 156; x < 248; x += 12) s += '<rect x="' + x + '" y="68" width="6" height="22" fill="#c8c2b4"/>'; return s; })() +
      '<path d="M146 58q54-62 108 0z" fill="#5fae96" stroke="#3d8270" stroke-width="2"/>' +
      '<path d="M170 58q30-40 60 0" stroke="#3d8270" stroke-width="2" fill="none"/>' +
      '<rect x="194" y="18" width="12" height="10" fill="#5fae96"/>' +
      '<path class="flk" d="M200 2l4 8 6 2-6 4 2 8-6-5-6 5 2-8-6-4 6-2z" fill="#f2c94c"/>' +
      cols + steps +
      '<rect x="60" y="140" width="20" height="30" fill="#5a6070"/><rect x="320" y="140" width="20" height="30" fill="#5a6070"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#7fae5a"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#1d3a14" letter-spacing="3">BERGEN COUNTY COURT HOUSE</text>',
      sky("gh", "#6fb6ef", "#e2f1fb"));
  }



  /* 5. The corner: Main St and Anderson St in Hackensack, green signs, her name sprayed on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#4a3a52"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#2d2234"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 14) s += '<path d="M20 ' + y + 'h380" stroke="#3b2e44" stroke-width="1"/>'; return s; })() +
      tag("COI LERAY", 140, 156, 38, PINK, -5) +
      tag("PLAYERS", 220, 198, 26, YEL, -3) +
      tag("TRENDSETTER", 160, 108, 18, SKY, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Anderson St</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + PINK + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#ffd6ea"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#ffd6ea" letter-spacing="2">HACKENSACK, NEW JERSEY</text>',
      sky("gk", "#1a0b2a", "#4a2a6a"));
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
  /* 2. The Church on the Green, Hackensack: the old brownstone Dutch church on the town green */
  function LM_bridge() {
    let stones = ""; for (let y = 110; y < 230; y += 10) for (let x = 120 + ((y / 10) % 2) * 8; x < 266; x += 16) stones += LR(x, y, 14, 8, ["#8a5a3c", "#7a4e34", "#946446"][(x + y) % 3], ' rx="1"');
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(60, 30) + Lcloud(300, 24, .8, "lmd3") +
      /* tower + white steeple */
      LR(176, 50, 48, 70, "#7a4e34") + LR(172, 46, 56, 6, "#e8e4da") + LR(184, 22, 32, 24, "#f4f2ec") + '<path d="M184 22l16-20 16 20z" fill="#f4f2ec"/>' +
      '<path d="M192 40v-10q8-8 16 0v10z" fill="#2a3440"/>' + '<g class="lm-sway" style="transform-origin:top center"><path d="M195 34q5-6 10 0v4h-10z" fill="#c9a24a"/></g>' +
      /* nave */
      '<path d="M116 110l84-40 84 40z" fill="#5a3a2a"/>' + LR(120, 110, 160, 126, "#8a5a3c") + stones +
      [146, 254].map(x => '<path d="M' + (x - 10) + ' 196v-40q10-14 20 0v40z" fill="#2a3440" stroke="#e8e4da" stroke-width="2"/>').join("") +
      '<path d="M186 236v-44q14-18 28 0v44z" fill="#e8e4da"/><path d="M190 236v-40q10-14 20 0v40z" fill="#5a2a1a"/>' +
      LR(176, 64, 48, 4, "#e8e4da") + '<circle cx="200" cy="88" r="9" fill="#f4f2ec" stroke="#3a2a20"/><path d="M200 88v-6M200 88l4 3" stroke="#3a2a20" stroke-width="1.5"/>' +
      /* the green */
      '<path d="M0 236h400v24H0z" fill="#4f8a3c"/>' + Ltree(50, 160, 34, "#3f7f3a") + Ltree(350, 160, 34, "#3f7f3a", "lmd1") + Ltree(96, 190, 20, "#4f8f45", "lmd2") +
      [30, 330].map(x => LR(x, 196, 3, 40, "#1a1a1a") + '<circle class="lm-pls" cx="' + (x + 1.5) + '" cy="194" r="5" fill="#fff3c4"/>').join("") +
      '<g class="lm-car" style="animation-duration:14s"><path d="M0 70q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      LR(240, 6, 154, 34, "#1a1a2a", ' rx="3" opacity=".9"') + LT("CHURCH ON THE GREEN", 317, 21, 10.5, "#ffd23f") + LT("HACKENSACK · EST. 1696", 317, 34, 8.5, "#fff") +
      tag("COI LERAY", 228, 254, 24, "#ff4fa3", -4),
      sky("sk", "#86bde6", "#f6e2c4"));
  }
  /* 3. Trendsetter (2022), her debut: a pink-lit runway with TRENDSETTER in lights */
  function LM_stage() {
    let bulbs = ""; for (let x = 40; x <= 360; x += 16) bulbs += '<circle class="lm-blk' + ((x / 16) % 2 ? " lmd1" : "") + '" cx="' + x + '" cy="18" r="3" fill="#ffd23f"/><circle class="lm-blk' + ((x / 16) % 2 ? "" : " lmd1") + '" cx="' + x + '" cy="84" r="3" fill="#ffd23f"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' +
      LR(30, 10, 340, 82, "#1a0a16", ' rx="6" stroke="#ff4fa3" stroke-width="3"') + bulbs + LA("TRENDSETTER", 200, 68, 40, "#ff4fa3", "middle", ' class="lm-pls" stroke="#ffd0e8" stroke-width="1"') +
      /* spotlights */
      '<g class="lm-sway" style="transform-origin:60px 100px;animation-duration:4s"><path d="M60 100l-40 160h80z" fill="#ffd0e8" opacity=".14"/></g><g class="lm-sway lmd2" style="transform-origin:340px 100px;animation-duration:4s"><path d="M340 100l-40 160h80z" fill="#ffd0e8" opacity=".14"/></g>' +
      /* the runway in perspective */
      '<path d="M170 110h60l90 150H80z" fill="#ff4fa3" opacity=".9"/><path d="M170 110h60l90 150H80z" fill="url(#rw)"/>' +
      [0, 1, 2, 3, 4, 5].map(i => { const y = 120 + i * 24, k = (y - 110) / 150, l = 170 - 90 * k, r = 230 + 90 * k; return '<circle class="lm-blk' + (i % 2 ? " lmd1" : "") + '" cx="' + (l + 3) + '" cy="' + y + '" r="2.5" fill="#fff"/><circle class="lm-blk' + (i % 2 ? "" : " lmd1") + '" cx="' + (r - 3) + '" cy="' + y + '" r="2.5" fill="#fff"/>'; }).join("") +
      /* the walker, faceless, coming down the runway */
      '<g class="lm-bob"><path d="M190 196l-6 40h10l6-26 6 26h10l-6-40z" fill="#1a1a1a"/><path d="M186 160h28l4 38h-36z" fill="#ffd23f"/><circle cx="200" cy="148" r="10" fill="#5a3a26"/><path d="M188 146q12-22 26-2l2 18q-6-14-14-16-8 2-14 16z" fill="#ff4fa3"/></g>' +
      /* crowd + flashes */
      '<path d="M0 260v-40q20-10 40 0t40 0v40zM320 260v-40q20-10 40 0t40 0v40z" fill="#2a1a2a"/>' + [20, 50, 350, 380].map((x, i) => '<circle cx="' + x + '" cy="214" r="9" fill="#3a2a3a"/><circle class="lm-blk lmd' + (i + 1) + '" cx="' + (x + 6) + '" cy="206" r="3" fill="#fff"/>').join("") +
      LR(8, 104, 104, 22, "#000", ' rx="3" opacity=".6"') + LT("HER DEBUT · 2022", 60, 119, 10, "#ffd23f") +
      tag("COI", 300, 140, 34, "#3ec7ff", -6) + tag("COI LERAY", 12, 180, 20, "#ffd23f", -4),
      sky("sk", "#12040e", "#3a0e2a") + '<linearGradient id="rw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>');
  }

  window.SCENES = { train, courthouse, bridge: LM_bridge, stage: LM_stage, corner };
})();
