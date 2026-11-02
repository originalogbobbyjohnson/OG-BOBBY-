/* Harlem opening scenes for the Ron Browz game (135 St / St. Nicholas Av side of Harlem). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.cloud{animation:drift 26s linear infinite}.cloud2{animation-duration:34s;animation-delay:-12s}' +
    '@keyframes shine{0%{transform:translateX(-80px)}60%,100%{transform:translateX(420px)}}' +
    '.shine{animation:shine 4.5s ease-in-out infinite}' +
    '@keyframes pulse{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}' +
    '.eq{transform-box:fill-box;transform-origin:50% 100%;animation:pulse .9s ease-in-out infinite}' +
    '.eq2{animation-delay:-.3s}.eq3{animation-delay:-.6s}.eq4{animation-delay:-.15s}' +
    '@keyframes ring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}' +
    '.ring{transform-box:fill-box;transform-origin:50% 50%;animation:ring 1.8s ease-out infinite}.ring2{animation-delay:.9s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes fall{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(240px);opacity:.2}}' +
    '.conf{animation:fall 4s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:sway 2.6s ease-in-out infinite}' +
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
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".35"><ellipse cx="0" cy="0" rx="30" ry="9"/><ellipse cx="14" cy="-7" rx="16" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const GOLD = "#ffd34d", PURP = "#b47cff", PINK = "#ff6b9a", B = "#ff6319", C = "#0039a6";



  /* 3. Harlem Hospital's mural pavilion on Lenox Av: a glass wall printed with the bright 1930s Harlem murals */
  function mural() {
    let panels = "";
    const cols = ["#e8573a", "#f2c14e", "#2f8f83", "#3a5fb0", "#c84f8f", "#f08a3c", "#5aa04a"];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) {
      const x = 44 + c * 39, y = 54 + r * 34, k = (r * 3 + c * 2) % cols.length;
      panels += '<rect x="' + x + '" y="' + y + '" width="37" height="32" fill="' + cols[k] + '" opacity=".9"/>';
    }
    /* big abstract mural shapes: sun, waves, leaves, a book (no faces) */
    const art = '<circle cx="110" cy="92" r="26" fill="#ffd34d" opacity=".9"/>' +
      '<path d="M44 150q40-24 78 0t78 0 78 0 78 0v24H44z" fill="#1f4f8f" opacity=".75"/>' +
      '<path d="M250 70q30 20 10 60q-30-20-10-60z" fill="#3f8f44" opacity=".85"/><path d="M300 64q30 26 6 66q-28-26-6-66z" fill="#2f7a3a" opacity=".85"/>' +
      '<path d="M170 110h30l4 4h30v28h-34l-4-4h-26z" fill="#f4f1e8" opacity=".9"/><path d="M204 114v28" stroke="#8a5a12" stroke-width="2"/>';
    let mull = "";
    for (let c = 0; c <= 8; c++) mull += '<rect x="' + (43 + c * 39) + '" y="52" width="2" height="140" fill="#cfd8de"/>';
    for (let r = 0; r <= 4; r++) mull += '<rect x="42" y="' + (52 + r * 34) + '" width="316" height="2" fill="#cfd8de"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + cloud(80, 30, .9, "cloud") +
      '<rect x="0" y="40" width="40" height="160" fill="#7a3b2a"/><rect x="360" y="40" width="40" height="160" fill="#7a3b2a"/>' +
      '<rect x="36" y="44" width="328" height="156" fill="#1c2630"/>' + panels + art +
      '<defs><clipPath id="glass"><rect x="44" y="54" width="312" height="136"/></clipPath></defs>' +
      '<g clip-path="url(#glass)"><rect class="shine" x="0" y="40" width="40" height="170" fill="#fff" opacity=".22" transform="skewX(-20)"/></g>' + mull +
      '<rect x="36" y="196" width="328" height="8" fill="#9aa4ab"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#2a2d33"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="0" y="204" width="400" height="6" fill="#8e949b"/>' +
      '<text x="200" y="224" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="#f4f1e8">LENOX AV · W 135 ST</text>',
      sky("g3", "#3a6fb0", "#bfe0f2"));
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
  /* 0. 135 St (B/C) on St. Nicholas Av: looking up the W 135th St exit stair toward Amsterdam, ETHER on the tile */
  function LM_train() {
    let tiles = ""; for (let y = 24; y < 170; y += 8) tiles += '<path d="M0 ' + y + 'h170" stroke="#d6d0c0" stroke-width=".8"/>';
    let steps = ""; for (let i = 0; i < 9; i++) steps += LR(196 + i * 12, 200 - i * 16, 140, 16, i % 2 ? "#8a8478" : "#9a9488");
    return svg(Lcss + '<rect width="400" height="260" fill="#151515"/>' +
      /* tiled wall with the station name mosaic */
      LR(0, 20, 180, 150, "#efe8d6") + tiles + LR(0, 20, 180, 6, "#3f8f7a") + LR(0, 164, 180, 6, "#3f8f7a") +
      LR(20, 40, 140, 30, "#3f8f7a", ' rx="2"') + LT("135TH ST", 90, 62, 18, "#fff") +
      tag("ETHER", 18, 136, 38, "#b47cff", -8) + tag("RON BROWZ", 30, 158, 15, "#ffd34d", -4) +
      /* the stair up to daylight */
      '<path d="M190 0h210v40H300z" fill="#f6e7b8"/><g class="lm-pls"><path d="M300 0h100v40h-60z" fill="#fff6d8"/></g>' + steps +
      '<path d="M186 214L330 70" stroke="#c9ced6" stroke-width="4"/><path d="M186 186L330 42" stroke="#5a6068" stroke-width="2"/>' +
      Lman(300, 72, "#b47cff", "lm-bob", "#ffd34d") + Lman(250, 124, "#ff6b9a", "lm-bob lmd1") +
      /* exit sign */
      LR(196, 8, 196, 50, "#111", ' rx="3"') + LR(196, 8, 196, 3, "#fff") + LT("EXIT ⬈", 206, 28, 13, "#fff", "start") + Lbul(330, 24, "B", "#ff6319", 9) + Lbul(354, 24, "C", "#0039a6", 9) +
      LT("W 135 St · up the hill to Amsterdam Av", 294, 48, 9.5, "#ffd34d") +
      /* platform edge, a C train sliding in at the bottom */
      LR(0, 214, 400, 8, "#eab308") + LR(0, 222, 400, 38, "#1a1c22") + '<g class="lm-car" style="animation-duration:6s">' + LR(0, 226, 160, 30, "#c9ced6", ' rx="5"') + [12, 48, 84].map(x => LR(x, 231, 24, 12, "#cfe6ff")).join("") + Lbul(140, 240, "C", "#0039a6", 8) + '</g>' +
      LR(0, 170, 186, 44, "#8f8a80") + Lman(60, 210, "#3a3a44", "lm-bob lmd2"),
      "");
  }
  /* 1. Ether (2001): the beat he made for Nas, ghost-purple smoke over a turntable and a pad sampler in the dark */
  function LM_college() {
    let pads = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) pads += LR(240 + c * 22, 152 + r * 16, 18, 12, (r + c) % 3 ? "#3a3448" : "#b47cff", ' rx="2" class="lm-blk' + ((r * 4 + c) % 3 ? " lmd" + ((r + c) % 3 + 1) : "") + '"');
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' +
      /* ghost smoke */
      [[80, 150, ""], [150, 140, "lmd1"], [220, 150, "lmd2"], [300, 140, "lmd3"], [120, 160, "lmd4"]].map(p => '<g class="lm-rise ' + p[2] + '"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="40" ry="18" fill="#b47cff" opacity=".35"/></g>').join("") +
      LA("ETHER", 200, 92, 78, "none", "middle", ' stroke="#b47cff" stroke-width="2.5" class="lm-pls"') + LA("ETHER", 200, 92, 78, "#2a1a40", "middle", ' opacity=".55"') +
      /* table */
      LR(20, 200, 360, 12, "#2a2430") + LR(30, 212, 12, 48, "#1a1620") + LR(358, 212, 12, 48, "#1a1620") +
      Ldeck(110, 180, 52, "#ff6b9a") +
      LR(228, 136, 112, 66, "#1d1a24", ' rx="5" stroke="#4a4458"') + pads + LR(238, 140, 58, 8, "#5aff9a", ' opacity=".7"') +
      '<g class="lm-note"><path d="M190 170v-16l10-3v16" stroke="#ffd34d" stroke-width="2.5" fill="none"/><circle cx="187" cy="170" r="3.5" fill="#ffd34d"/></g>' +
      LR(110, 8, 180, 22, "#000", ' rx="3" opacity=".6"') + LT("THE BEAT · 2001", 200, 24, 12, "#ffd34d") +
      tag("RON BROWZ", 214, 250, 24, "#ffd34d", -4) + tag("ETHER BOY", 16, 250, 18, "#ff6b9a", -4),
      sky("sk", "#07040e", "#2a1640"));
  }
  /* 3. Harlem YMCA, 180 W 135th St (1932): tall brick Y with setbacks and the vertical sign */
  function LM_bandshell() {
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lstars(14) +
      Lbrick(0, 130, 90, 106, "#7a4a3a", "#6a3a2c") + Lwin(10, 140, 3, 3, 26, 30, 14, 18, "#ffd77a", "#2a1a14") +
      /* main tower with setbacks */
      Lbrick(110, 70, 180, 166, "#8a4630", "#74382a") + Lbrick(130, 46, 140, 24, "#8a4630", "#74382a") + Lbrick(160, 28, 80, 18, "#8a4630", "#74382a") +
      '<path d="M108 70h184M128 46h144M158 28h84" stroke="#d8c8a8" stroke-width="3"/>' +
      Lwin(122, 80, 8, 6, 21, 22, 11, 14, "#ffd77a", "#2a1a14") + Lwin(140, 52, 6, 1, 21, 22, 11, 12, "#ffd77a", "#2a1a14") +
      LR(110, 214, 180, 22, "#d8c8a8") + LR(180, 210, 40, 26, "#3a2418") + LR(176, 204, 48, 8, "#2a1a14") +
      /* vertical sign */
      LR(292, 60, 26, 120, "#1a1a1a", ' rx="3"') + ["Y", "M", "C", "A"].map((l, i) => LT(l, 305, 88 + i * 26, 22, "#ff4040", "middle", ' class="lm-flk' + (i % 2 ? " lmd1" : "") + '"')).join("") +
      Lbrick(320, 110, 80, 126, "#6a4a3e", "#5a3a2e") + Lwin(330, 120, 3, 4, 22, 26, 12, 16, "#ffd77a", "#2a1a14") +
      LR(0, 236, 400, 24, "#2a2a30") + '<g class="lm-car">' + Lauto(0, 226, "#b47cff") + '</g>' + Lman(260, 236, "#ffd34d", "lm-bob") +
      LR(8, 8, 140, 34, "#111", ' rx="3"') + LT("HARLEM YMCA", 78, 23, 13, "#ffd34d") + LT("180 W 135 ST · 1932", 78, 36, 9, "#fff") +
      tag("RON BROWZ", 8, 124, 18, "#ffd34d", -5),
      sky("sk", "#151a3a", "#d07a5a"));
  }
  /* 4. Amsterdam Av & W 135th St */
  function LM_corner() {
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lstars(16) + '<circle cx="358" cy="32" r="12" fill="#fff1d6"/>' +
      "<g id=\"landmark-bd\"><style>@keyframes apronb_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apronb_a{animation:apronb_ch .8s steps(1) infinite}.apronb_b{animation:apronb_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apronb_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apronb_g{animation:apronb_gl 2.6s ease-in-out infinite}@keyframes apronb_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apronb_s{transform-box:fill-box;transform-origin:50% 100%;animation:apronb_sw 6s ease-in-out infinite}.apronb_s2{animation-delay:-3s}@keyframes apronb_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apronb_d{animation:apronb_dr 22s linear infinite}.apronb_d2{animation-delay:-11s}@keyframes apronb_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apronb_r{animation:apronb_rn .7s linear infinite}@keyframes apronb_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apronb_m{animation:apronb_mv 9s linear infinite}@keyframes apronb_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apronb_ml{animation:apronb_mvl 7s linear infinite}@keyframes apronb_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apronb_f{animation:apronb_fl 3.1s infinite}</style><rect x=\"0\" y=\"85.3\" width=\"23\" height=\"10.7\" fill=\"#1d1a2e\"/><rect x=\"6\" y=\"72.3\" width=\"10\" height=\"9.5\" fill=\"#1d1a2e\"/><path d=\"M5 72.3l6 -5l6 5z\" fill=\"#1d1a2e\"/><path d=\"M7 81.8v3.5M15 81.8v3.5\" stroke=\"#1d1a2e\" stroke-width=\"1.2\"/><rect x=\"22\" y=\"87.2\" width=\"28\" height=\"8.8\" fill=\"#1d1a2e\"/><rect x=\"25\" y=\"91.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"49\" y=\"85.4\" width=\"16\" height=\"10.6\" fill=\"#1d1a2e\"/><rect x=\"64\" y=\"78.1\" width=\"35\" height=\"17.9\" fill=\"#1d1a2e\"/><rect x=\"67\" y=\"82.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"72\" y=\"82.1\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"98\" y=\"82.7\" width=\"34\" height=\"13.3\" fill=\"#1d1a2e\"/><rect x=\"126\" y=\"86.7\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"131\" y=\"78.2\" width=\"15\" height=\"17.8\" fill=\"#1d1a2e\"/><rect x=\"145\" y=\"79.9\" width=\"34\" height=\"16.1\" fill=\"#1d1a2e\"/><rect x=\"153\" y=\"89.9\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"178\" y=\"84.9\" width=\"15\" height=\"11.1\" fill=\"#1d1a2e\"/><rect x=\"186\" y=\"88.9\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"192\" y=\"84.9\" width=\"28\" height=\"11.1\" fill=\"#1d1a2e\"/><rect x=\"200\" y=\"88.9\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"200.5\" y=\"71.9\" width=\"10\" height=\"9.5\" fill=\"#1d1a2e\"/><path d=\"M199.5 71.9l6 -5l6 5z\" fill=\"#1d1a2e\"/><path d=\"M201.5 81.4v3.5M209.5 81.4v3.5\" stroke=\"#1d1a2e\" stroke-width=\"1.2\"/><rect x=\"219\" y=\"85.5\" width=\"30\" height=\"10.5\" fill=\"#1d1a2e\"/><path d=\"M0 92L240 70\" stroke=\"#ffd98a\" stroke-width=\"1.5\" stroke-dasharray=\"2 4\" opacity=\".7\"/><path d=\"M118 70l64-6 6 10-66 6z\" fill=\"#c9c1ae\"/><g transform=\"translate(122 74) skewY(-5)\"><rect class=\"apronb_g\" x=\"-3.6\" y=\"-3\" width=\"73.2\" height=\"19.2\" rx=\"4.8\" fill=\"#ffd27a\" opacity=\".35\"/><rect x=\"0\" y=\"0\" width=\"66\" height=\"12\" fill=\"#b81a24\"/><rect x=\"1.2\" y=\"1.9\" width=\"63.6\" height=\"8.2\" fill=\"#f7f1e3\"/><text x=\"33\" y=\"6\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"4.3\" fill=\"#d3202b\" letter-spacing=\"0.7\">APOLLO</text><circle class=\"apronb_b\" cx=\"1.3\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"1.3\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"3.9\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"3.9\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"6.5\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"6.5\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"9.1\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"9.1\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"11.7\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"11.7\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"14.3\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"14.3\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"16.9\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"16.9\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"19.5\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"19.5\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"22.1\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"22.1\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"24.7\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"24.7\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"27.3\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"27.3\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"29.9\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"29.9\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"32.5\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"32.5\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"35.1\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"35.1\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"37.7\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"37.7\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"40.3\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"40.3\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"42.9\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"42.9\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"45.5\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"45.5\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"48.1\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"48.1\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"50.7\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"50.7\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"53.3\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"53.3\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"55.9\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"55.9\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"58.5\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"58.5\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"61.1\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"61.1\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"63.7\" cy=\"1\" r=\"0.5\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"63.7\" cy=\"11\" r=\"0.5\" fill=\"#ffe9a0\"/></g><g transform=\"translate(146 26) skewY(-5)\"><rect class=\"apronb_g\" x=\"-4.2\" y=\"-3.6\" width=\"20.4\" height=\"53.2\" rx=\"6\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M2.4 0l3.6 -5.4l3.6 5.4z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"12\" height=\"46\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"0.8\"/><text x=\"6\" y=\"7.2\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">A</text><text x=\"6\" y=\"14.5\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">P</text><text x=\"6\" y=\"21.8\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">O</text><text x=\"6\" y=\"29.1\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">L</text><text x=\"6\" y=\"36.4\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">L</text><text x=\"6\" y=\"43.7\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"6.7\" fill=\"#fff\">O</text><circle class=\"apronb_b\" cx=\"1.2\" cy=\"1.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"10.8\" cy=\"1.9\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"1.2\" cy=\"5.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"10.8\" cy=\"5.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"1.2\" cy=\"9.6\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"10.8\" cy=\"9.6\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"1.2\" cy=\"13.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"10.8\" cy=\"13.4\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"1.2\" cy=\"17.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"10.8\" cy=\"17.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"1.2\" cy=\"21.1\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"10.8\" cy=\"21.1\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"1.2\" cy=\"25\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"10.8\" cy=\"25\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"1.2\" cy=\"28.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"10.8\" cy=\"28.8\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"1.2\" cy=\"32.6\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"10.8\" cy=\"32.6\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"1.2\" cy=\"36.5\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"10.8\" cy=\"36.5\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"1.2\" cy=\"40.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_b\" cx=\"10.8\" cy=\"40.3\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"1.2\" cy=\"44.2\" r=\"0.8\" fill=\"#ffe9a0\"/><circle class=\"apronb_a\" cx=\"10.8\" cy=\"44.2\" r=\"0.8\" fill=\"#ffe9a0\"/></g></g>" +
      LR(262, 76, 138, 160, "#b8a890") + Lwin(274, 88, 4, 5, 30, 28, 16, 18, "#ffd77a", "#2a2420") + LR(258, 72, 146, 6, "#8a7a62") +
      Lbrick(8, 96, 228, 140, "#4a2a3a", "#5a3448") +
      tag("RON BROWZ", 18, 156, 44, "#ffd34d", -7) + tag("ETHER BOY", 26, 190, 26, "#b47cff", -4) + tag("HARLEM WORLD", 28, 220, 18, "#ff6b9a", -3) +
      '<rect class="lm-pls" x="110" y="158" width="3" height="10" fill="#ffd34d"/>' +
      Lpole(244, 48, "Amsterdam Av", "W 135 St") + '<path class="lm-flk" d="M248 44h24l-5 6h-14z" fill="#ffe7a8"/>' +
      LR(0, 236, 400, 24, "#14181d") + '<path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="lm-car">' + Lauto(0, 226, "#ff6b9a") + '</g>',
      sky("sk", "#0d1022", "#3a2a4a"));
  }

  window.SCENES = { train: LM_train, college: LM_college, mural, bandshell: LM_bandshell, corner: LM_corner };
})();
