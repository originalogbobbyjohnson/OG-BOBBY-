/* Harlem opening scenes for the Jungle Brothers game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bulb{animation:chase .8s infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.4}55%{opacity:.95}}' +
    '.flk{animation:flick 2.4s infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob .7s ease-in-out infinite}.bob2{animation-delay:-.35s}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 0%;animation:sway 3s ease-in-out infinite}.sway2{animation-delay:-1.5s}' +
    '@keyframes ring{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.ring{transform-box:fill-box;transform-origin:50% 0%;animation:ring 1.6s ease-in-out infinite}' +
    '@keyframes buzz{0%{transform:translate(-30px,10px)}25%{transform:translate(120px,-14px)}50%{transform:translate(260px,12px)}75%{transform:translate(380px,-10px)}100%{transform:translate(440px,6px)}}' +
    '.buzz{animation:buzz 9s linear infinite}.buzz2{animation-delay:-4s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes walk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}' +
    '.walk{animation:walk 12s linear infinite}.walk2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (cx, cy, letter, color, dark) =>
    '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bee = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="8" ry="6" fill="' + GOLD + '" stroke="#222" stroke-width="1.2"/><path d="M-2 -5v10M3 -5v10" stroke="#222" stroke-width="2"/>' +
    '<ellipse cx="-2" cy="-7" rx="4" ry="5" fill="#e6f4ff" opacity=".85"/><ellipse cx="4" cy="-7" rx="4" ry="5" fill="#e6f4ff" opacity=".85"/></g>';
  const GOLD = "#f2c230", GREEN = "#2fa84f", RED = "#e2382f";



  /* 3. Straight out the jungle: hanging vines, red-black-green drums bouncing, bees buzzing across */
  function jungle() {
    let vines = "";
    [20, 70, 330, 380].forEach(function (x, i) {
      vines += '<g class="sway' + (i % 2 ? " sway2" : "") + '"><path d="M' + x + ' 0q-10 40 0 80t0 70" stroke="#1f6a2a" stroke-width="4" fill="none"/>';
      for (let y = 20; y < 150; y += 24) vines += '<ellipse cx="' + (x + (y % 48 ? 8 : -8)) + '" cy="' + y + '" rx="9" ry="4" fill="' + GREEN + '" transform="rotate(' + (y % 48 ? 30 : -30) + ' ' + x + ' ' + y + ')"/>';
      vines += '</g>';
    });
    const drum = (x, c, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="150" rx="26" ry="8" fill="#f2e2c0" stroke="#6b4a2a" stroke-width="2"/>' +
      '<path d="M' + (x - 26) + ' 150q2 30 14 40v26h24v-26q12-10 14-40" fill="' + c + '" stroke="#222" stroke-width="2"/>' +
      '<path d="M' + (x - 22) + ' 160l22 22 22-22" stroke="' + GOLD + '" stroke-width="3" fill="none"/></g>';
    let leaves = "";
    for (let x = -10; x < 420; x += 34) leaves += '<path d="M' + x + ' 260q14-50 34-60q-6 30-10 60z" fill="#1f6a2a"/><path d="M' + (x + 16) + ' 260q-4-40 14-54q2 30-2 54z" fill="' + GREEN + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gj)"/>' +
      '<circle cx="200" cy="70" r="40" fill="' + GOLD + '" opacity=".9"/>' +
      '<rect x="0" y="0" width="400" height="10" fill="' + RED + '"/><rect x="0" y="10" width="400" height="10" fill="#111"/><rect x="0" y="20" width="400" height="10" fill="' + GREEN + '"/>' +
      vines +
      '<text x="200" y="128" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" stroke="#121a10" stroke-width="3" paint-order="stroke">STRAIGHT OUT THE JUNGLE</text>' +
      drum(130, RED, "bob") + drum(200, "#222", "bob bob2") + drum(270, GREEN, "bob") +
      '<g class="buzz">' + bee(0, 70) + '</g><g class="buzz buzz2">' + bee(0, 100) + '</g>' + leaves,
      sky("gj", "#2a7a4a", "#9ad49a"));
  }

  /* 4. Marcus Garvey Park: the cast-iron Mount Morris fire watchtower on its rock, the bell swinging */
  function tower() {
    let trees = "";
    for (let x = -10; x < 420; x += 44) trees += '<circle cx="' + x + '" cy="' + (196 - (x % 3) * 6) + '" r="26" fill="' + (x % 88 ? "#2f8a3e" : "#3fa04e") + '"/>';
    const level = y => '<rect x="160" y="' + y + '" width="80" height="4" fill="#3a2a24"/>';
    let frame = "";
    [166, 186, 214, 234].forEach(function (x) { frame += '<rect x="' + x + '" y="40" width="4" height="120" fill="#3a2a24"/>'; });
    let braces = "";
    [[60, 100], [100, 140]].forEach(function (r) { braces += '<path d="M166 ' + r[0] + 'L234 ' + r[1] + 'M234 ' + r[0] + 'L166 ' + r[1] + '" stroke="#3a2a24" stroke-width="1.5"/>'; });
    let stair = "";
    for (let y = 150; y > 50; y -= 10) stair += '<path d="M190 ' + y + 'q10 -5 20 0" stroke="#5a463c" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gt)"/>' +
      '<path d="M100 200q40-50 100-48t100 48z" fill="#7a7468"/><path d="M130 190q30-30 70-30" stroke="#9a9488" stroke-width="3" fill="none"/>' +
      frame + braces + stair + level(60) + level(100) + level(140) + level(156) +
      '<path d="M156 40h88l-44-22z" fill="#3a2a24"/><rect x="198" y="8" width="4" height="12" fill="#3a2a24"/>' +
      '<g class="ring"><path d="M188 42q12-12 24 0v10h-24z" fill="#b8863a" stroke="#6b4a1a" stroke-width="1.5"/><circle cx="200" cy="55" r="3" fill="#6b4a1a"/></g>' +
      trees + '<rect x="0" y="214" width="400" height="46" fill="#5a8a3e"/><path d="M0 232h400" stroke="#c9b48a" stroke-width="6"/>' +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#f2f2f2" letter-spacing="2">MARCUS GARVEY PARK · HARLEM</text>',
      sky("gt", "#f2a65a", "#ffe0a8"));
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
  /* red-black-green album poster */
  const LMjungle = (x, y, w) => { const h = w * 1.35; return LR(x, y, w, h, "#111", ' stroke="#f2c230" stroke-width="2"') + LR(x + 4, y + 4, w - 8, h * .22, "#e2382f") + LR(x + 4, y + 4 + h * .22, w - 8, h * .22, "#111") + LR(x + 4, y + 4 + h * .44, w - 8, h * .22, "#2fa84f") +
    '<path d="M' + (x + w * .3) + ' ' + (y + h * .62) + 'q' + w * .2 + '-' + h * .3 + ' ' + w * .4 + ' 0" stroke="#f2c230" stroke-width="3" fill="none"/>' +
    LT("STRAIGHT OUT", x + w / 2, y + h * .79, w * .12, "#f2c230") + LT("THE JUNGLE", x + w / 2, y + h * .89, w * .13, "#f2c230") + LT("JUNGLE BROTHERS · 1988", x + w / 2, y + h * .97, w * .065, "#fff"); };

  /* 0. 125 St (A/B/C/D) on St. Nicholas Av: the St. Nicholas exit and the Straight Out the Jungle poster on the tile */
  function LM_train() {
    let tiles = ""; for (let y = 24; y < 132; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d3c3" stroke-width=".8"/>';
    let mos = ""; for (let x = 0; x < 400; x += 14) mos += LR(x, 24, 12, 10, (x / 14) % 2 ? "#7a2e6a" : "#c9a24a");
    return svg(Lcss + '<rect width="400" height="260" fill="#ece6d6"/>' + tiles + mos +
      Lsign(16, 44, 200, "125 St", [["A", "#0039a6"], ["B", "#ff6319"], ["C", "#0039a6"], ["D", "#ff6319"]]) +
      LR(16, 84, 150, 40, "#111", ' rx="3"') + LT("EXIT ⬈", 26, 101, 12, "#fff", "start") + LT("St Nicholas Av &amp; W 125 St", 26, 117, 10, "#f2c230", "start") +
      '<g class="lm-bob">' + LMjungle(300, 36, 72) + '</g>' +
      tag("J.BEEZ", 196, 112, 24, "#2fa84f", -6) +
      /* track + D train */
      LR(0, 134, 400, 66, "#1a1c22") + '<g class="anim-train">' + Lcar(10, 140, 320, "D", "#ff6319") + '</g>' + [60, 200, 340].map(x => LR(x - 5, 128, 10, 72, "#2a3a2a")).join("") +
      LR(0, 200, 400, 8, "#eab308") + LR(0, 208, 400, 52, "#8f8a80") + '<g class="lm-flk"><rect x="120" y="0" width="90" height="6" fill="#fffbe6"/></g>' +
      Lman(40, 252, "#e2382f", "lm-bob", "#2fa84f") + Lman(80, 254, "#2fa84f", "lm-bob lmd1") +
      tag("JUNGLE BROTHERS", 150, 248, 24, "#f2c230", -3),
      "");
  }
  /* 1. Langston Hughes House, 20 E 127th St: the Italianate brownstone with ivy and the plaque */
  function LM_apollo() {
    let ivy = ""; for (let i = 0; i < 70; i++) { const x = 116 + (i * 73 + (i * i) % 17) % 176, y = 48 + (i * 131 + (i * i * 7) % 23) % 156; if (!(x > 160 && x < 250 && y > 150)) ivy += '<circle cx="' + x + '" cy="' + y + '" r="' + (5 + i % 4) + '" fill="' + (i % 3 ? "#3f7f3a" : "#2f6b2e") + '" opacity=".9"/>'; }
    const wnd = (x, y) => LR(x, y, 22, 34, "#1f2430") + '<path d="M' + (x - 4) + ' ' + (y - 2) + 'h30l-4-8h-22z" fill="#5a3a2a"/>' + LR(x + 2, y + 2, 18, 14, "#ffd77a", ' class="lm-flk" opacity=".7"');
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(60, 24) + Lcloud(300, 34, .8, "lmd3") +
      Lbrick(0, 60, 110, 176, "#7a4a34", "#6a3c2a") + Lwin(14, 76, 3, 4, 30, 38, 16, 24, "#ffd77a", "#2a1a14") + Lbrick(296, 60, 104, 176, "#8a5a3c", "#7a4a30") + Lwin(310, 76, 3, 4, 30, 38, 16, 24, "#ffd77a", "#2a1a14") +
      /* the brownstone */
      LR(110, 40, 186, 196, "#7a4a34") + '<path d="M104 40h198v-12H104z" fill="#5a3424"/>' + [120, 160, 200, 240, 280].map(x => LR(x, 40, 6, 8, "#4a2a1a")).join("") +
      [128, 192, 256].map(x => wnd(x, 64) + wnd(x, 116)).join("") + wnd(128, 168) +
      '<g class="lm-sway" style="animation-duration:5s">' + ivy + '</g>' +
      /* stoop + door */
      LR(196, 160, 44, 56, "#3a2014") + '<path d="M190 160h56l-4-10h-48z" fill="#5a3424"/>' + [216, 224, 232].map((y, i) => LR(186 - i * 6, y, 64 + i * 12, 8, "#8a5a3c")).join("") +
      LR(250, 176, 34, 22, "#2a5a3a", ' rx="2" stroke="#c9a24a"') + LT("LANGSTON", 267, 186, 6.5, "#fff") + LT("HUGHES", 267, 194, 6.5, "#fff") +
      LR(0, 236, 400, 24, "#9a948a") + '<g class="lm-fall"><path d="M140 40q6-4 10 2-6 4-10-2z" fill="#3f7f3a"/></g><g class="lm-fall lmd2"><path d="M260 40q6-4 10 2-6 4-10-2z" fill="#3f7f3a"/></g>' +
      LR(8, 6, 172, 30, "#1a1a1a", ' rx="3"') + LT("LANGSTON HUGHES HOUSE", 94, 19, 10.5, "#f2c230") + LT("20 E 127 ST · HARLEM", 94, 31, 8.5, "#fff") +
      tag("NATIVE TONGUES", 6, 250, 18, "#2fa84f", -3) + tag("J.BEEZ", 300, 252, 20, "#f2c230", -3),
      sky("sk", "#7fb4e4", "#f2e2b8"));
  }
  /* 4. Mount Morris Park West & W 122nd St, under the old fire watchtower */
  function LM_corner() {
    const tower = (cx, top) => { let s = ""; [[0, 34, 24], [30, 28, 20], [56, 22, 16]].forEach((t, i) => { const y = top + 70 - t[0] - 26; s += LR(cx - t[1], y + 24, t[1] * 2, 3, "#1a1a1a") + [-1, -.33, .33, 1].map(k => LR(cx + k * t[1] - 1, y, 2.5, 26, "#1a1a1a")).join(""); });
      return s + '<path d="M' + (cx - 16) + ' ' + (top + 18) + 'l16-14 16 14z" fill="#1a1a1a"/><g class="lm-sway" style="transform-origin:top center"><path d="M' + (cx - 5) + ' ' + (top + 22) + 'q5-8 10 0v6h-10z" fill="#c9a24a"/></g><path d="M' + (cx - 36) + ' ' + (top + 70) + 'h72" stroke="#1a1a1a" stroke-width="3"/>'; };
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lstars(16) +
      /* the rock hill with the tower */
      '<path d="M200 236V120q40-30 90-30t110 26v120z" fill="#3f5a3a"/><path d="M230 120l20-14 26 8 30-10 24 12" stroke="#6a6a60" stroke-width="6" fill="none"/>' + tower(300, 18) +
      Ltree(220, 110, 16, "#2f4f2e") + Ltree(380, 112, 18, "#2f4f2e", "lmd1") +
      Lbrick(8, 96, 214, 140, "#5a2e26", "#6a3a30") +
      tag("JUNGLE BROTHERS", 14, 150, 30, "#f2c230", -6) + tag("NATIVE TONGUES", 22, 186, 22, "#2fa84f", -4) + tag("J.BEEZ", 30, 220, 24, "#e2382f", -3) +
      '<rect class="lm-pls" x="120" y="152" width="3" height="10" fill="#f2c230"/>' +
      Lpole(300, 150, "Mount Morris Park W", "W 122 St") +
      LR(0, 236, 400, 24, "#14181d") + '<path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="lm-car">' + Lauto(0, 226, "#2fa84f") + '</g>' + LT("MARCUS GARVEY PARK", 300, 230, 9, "#f2c230"),
      sky("sk", "#1d2a4a", "#d08a5a"));
  }

  window.SCENES = { train: LM_train, apollo: LM_apollo, jungle, tower, corner: LM_corner };
})();
