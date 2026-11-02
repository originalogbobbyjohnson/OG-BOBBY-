/* Newark, New Jersey opening scenes for the Queen Latifah game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(40px,240px) rotate(300deg);opacity:.6}}' +
    '.pet{transform-box:fill-box;animation:fall 6s linear infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.6s ease-in-out infinite}.bell2{animation-delay:-.8s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3.4s ease-in-out infinite}.beam2{animation-delay:-1.7s}' +
    '@keyframes twk{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.twk{animation:twk 1.4s infinite}.twk2{animation-delay:-.7s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-80px)}}' +
    '.car{animation:car 6s linear infinite}' +
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
  const GOLD = "#f4c430", GREEN = "#1f9e5a", RED = "#d7263d";


  /* 2. Branch Brook Park in April: the biggest cherry blossom collection in the country, pink trees over the lake, petals falling */
  function blossoms() {
    const tree = (x, y, r) => '<path d="M' + x + ' ' + (y + r) + 'v40" stroke="#4a2e24" stroke-width="6"/><path d="M' + x + ' ' + (y + r + 10) + 'l-16-18M' + x + ' ' + (y + r + 14) + 'l18-20" stroke="#4a2e24" stroke-width="3"/>' +
      '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#f6b6cc"/><circle cx="' + (x - r * .6) + '" cy="' + (y + 8) + '" r="' + r * .7 + '" fill="#f9c9da"/><circle cx="' + (x + r * .6) + '" cy="' + (y + 6) + '" r="' + r * .7 + '" fill="#f2a3be"/>';
    let petals = "";
    for (let i = 0; i < 18; i++) petals += '<ellipse class="pet" style="animation-delay:-' + (i * 0.37).toFixed(2) + 's" cx="' + ((i * 41) % 380) + '" cy="' + ((i * 17) % 30) + '" rx="3" ry="2" fill="#ffd6e4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5c9a4a"/>' +
      '<path d="M60 200q140-30 300 0q-20 30-150 30q-130 0-150-30z" fill="#6aa8d0"/><path d="M110 206q60-8 120 0" stroke="#bfe3f5" stroke-width="2" opacity=".7"/>' +
      tree(40, 104, 36) + tree(128, 92, 40) + tree(272, 94, 40) + tree(362, 106, 34) +
      '<path d="M0 248q200-26 400 0" stroke="#d8cfb8" stroke-width="10" fill="none"/>' +
      petals +
      '<text x="200" y="40" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#7a2a4a" letter-spacing="3">BRANCH BROOK PARK</text>',
      sky("gb", "#9fd3f0", "#fde3ec"));
  }


  /* 4. Her star on the Walk of Fame: a pink terrazzo star with a gold rim, the spotlights sweeping, a gold crown above it */
  function star() {
    const pts = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 26 : 62; pts.push((200 + r * Math.cos(a)).toFixed(1) + "," + (160 + r * Math.sin(a) * .62).toFixed(1)); }
    let tiles = "";
    for (let x = 0; x < 400; x += 40) tiles += '<path d="M' + x + ' 110v150" stroke="#3a3a40" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#14101e"/>' +
      '<g class="beam"><path d="M70 0l-50 200h100z" fill="' + GOLD + '" opacity=".16"/></g><g class="beam beam2"><path d="M330 0l-50 200h100z" fill="#f6b6cc" opacity=".16"/></g>' +
      '<rect x="0" y="110" width="400" height="150" fill="#2c2c34"/>' + tiles +
      '<rect x="110" y="110" width="180" height="150" fill="#4a4a54"/>' +
      '<polygon points="' + pts.join(" ") + '" fill="#e88aa8" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<circle cx="200" cy="164" r="11" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/><circle cx="200" cy="164" r="4" fill="' + GOLD + '"/>' +
      '<rect x="130" y="206" width="140" height="22" rx="3" fill="#1a1520" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="222" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="13" fill="' + GOLD + '" letter-spacing="1.5">QUEEN LATIFAH</text>' +
      /* the crown, floating */
      '<g class="twk" style="animation-duration:3s"><path d="M168 82l6-34 14 18 12-26 12 26 14-18 6 34z" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/>' +
      '<rect x="166" y="80" width="68" height="10" fill="' + GREEN + '"/><rect x="172" y="82" width="10" height="6" fill="' + RED + '"/><rect x="196" y="82" width="10" height="6" fill="' + RED + '"/><rect x="220" y="82" width="10" height="6" fill="' + RED + '"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#bbb" letter-spacing="2">ALL HAIL THE QUEEN</text>');
  }

  /* 5. Springfield Av and S 17th St, Newark's South Ward by the Irvington line: a wall with her name tagged, the street signs */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#4a3a3e"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#54424a"/>'; return b; })() +
      tag("QUEEN LATIFAH", 28, 140, 26, GOLD, -7) + tag("U.N.I.T.Y.", 40, 196, 24, GREEN, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">Springfield Av</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">S 17th St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="' + RED + '"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#8a1a2a"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
      sky("gc", "#140d1e", "#3a2a4a"));
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
  /* 0. Newark Penn Station: inside the 1935 Art Deco waiting room, the ring lanterns, the board calling the PATH, her crown on the column */
  function LM_train() {
    const lantern = (x, d) => '<g class="lm-sway ' + d + '" style="transform-origin:' + x + 'px 0px">' + '<path d="M' + x + ' 0v34" stroke="#3a2a14" stroke-width="2"/>' + '<ellipse cx="' + x + '" cy="52" rx="22" ry="18" fill="#c9a24a" opacity=".25"/><ellipse cx="' + x + '" cy="52" rx="22" ry="6" fill="none" stroke="#b08a3a" stroke-width="2.5"/><ellipse cx="' + x + '" cy="52" rx="8" ry="18" fill="none" stroke="#b08a3a" stroke-width="2.5"/>' + '<circle class="lm-pls" cx="' + x + '" cy="52" r="9" fill="#fff3c4"/></g>';
    return svg(Lcss + '<rect width="400" height="260" fill="#d8ccb0"/>' + '<path d="M0 0h400v20H0z" fill="#b8a888"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => LR(i * 52 + 6, 22, 40, 120, "#cfc2a4", ' stroke="#b8a888"')).join("") +
      lantern(110, "") + lantern(290, "lmd2") +
      /* departure board */
      LR(130, 60, 140, 62, "#111", ' rx="3" stroke="#c9a24a" stroke-width="2"') + LT("DEPARTURES", 200, 74, 9, "#c9a24a") +
      '<text class="lm-blk" x="140" y="90" ' + LF + ' font-size="9" fill="#ffd34d">PATH</text>' + LT("World Trade Center", 172, 90, 9, "#fff", "start") +
      LT("NJT", 140, 104, 9, "#9fd8ff", "start") + LT("East Orange · Morris", 172, 104, 8.5, "#fff", "start") + LT("NJT", 140, 117, 9, "#9fd8ff", "start") + LT("Trenton · NEC", 172, 117, 8.5, "#fff", "start") +
      /* name sign */
      LR(64, 132, 272, 30, "#111", ' rx="3"') + LR(64, 132, 272, 3, "#fff") + LT("Newark Penn Station", 76, 153, 15, "#fff", "start") + Lpill(266, 147, "PATH", "#0039a6") + Lpill(315, 147, "NJT", "#0039a6") +
      /* poster + columns */
      LR(14, 150, 40, 70, "#b8a888") + LR(346, 150, 40, 70, "#b8a888") +
      '<g class="lm-bob">' + LR(352, 156, 30, 44, "#1f9e5a", ' stroke="#f4c430" stroke-width="2"') + '<path d="M358 172l4-8 5 6 5-6 4 8z" fill="#f4c430"/>' + LT("ALL HAIL", 367, 184, 5.5, "#fff") + LT("THE QUEEN", 367, 192, 5.5, "#f4c430") + '</g>' +
      /* benches + floor */
      LR(0, 220, 400, 40, "#a88a5a") + '<path d="M0 220h400" stroke="#6a4a24" stroke-width="3"/>' + [70, 230].map(x => LR(x, 202, 100, 8, "#7a4a24") + LR(x, 188, 100, 6, "#7a4a24") + LR(x + 6, 210, 6, 12, "#3a2410") + LR(x + 88, 210, 6, 12, "#3a2410")).join("") +
      Lman(120, 222, "#d7263d", "lm-bob", "#f4c430") + Lman(286, 222, "#1f9e5a", "lm-bob lmd1") + '<g class="lm-car" style="animation-duration:12s">' + Lman(0, 250, "#3a3a44") + '</g>' +
      tag("THE QUEEN", 6, 140, 18, "#f4c430", -6) + tag("FLAVOR UNIT", 150, 254, 22, "#d7263d", -3),
      "");
  }
  /* 2. Irvington High School: where Dana Owens played ball; brick school, blue banner, the outdoor court */
  function LM_cathedral() {
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(60, 24) + Lcloud(260, 34, .8, "lmd3") +
      Lbrick(10, 60, 260, 136, "#9a4a32", "#843e2a") + LR(6, 54, 268, 8, "#e8e0cc") + Lwin(22, 72, 10, 3, 24, 30, 16, 20, "#cfe3f4", "#2a3440") +
      /* entrance with white columns */
      LR(104, 128, 72, 68, "#e8e0cc") + '<path d="M100 128l40-20 40 20z" fill="#e8e0cc"/>' + [112, 128, 152, 168].map(x => LR(x - 3, 134, 6, 62, "#fff")).join("") + LR(130, 160, 20, 36, "#2a3440") +
      LT("IRVINGTON HIGH SCHOOL", 140, 46, 12, "#1a2a5a") +
      /* blue banner */
      '<g class="lm-flag">' + LR(196, 70, 56, 70, "#1f4fb0") + LT("BLUE", 224, 96, 11, "#fff") + LT("KNIGHTS", 224, 110, 9, "#fff") + '<path d="M196 140l14 12 14-12 14 12 14-12" fill="#1f4fb0"/></g>' +
      /* the court */
      '<path d="M0 260l40-64h360v64z" fill="#c4643a"/><path d="M60 230h340M200 196v64" stroke="#fff" stroke-width="2"/><ellipse cx="300" cy="236" rx="40" ry="12" fill="none" stroke="#fff" stroke-width="2"/>' +
      LR(352, 110, 6, 120, "#555") + LR(330, 104, 50, 34, "#fff", ' stroke="#1f4fb0" stroke-width="3"') + '<path d="M340 140h30" stroke="#d7263d" stroke-width="3"/><path d="M342 140l4 16h18l4-16" stroke="#fff" fill="none"/>' +
      '<g class="lm-bob" style="animation-duration:.8s"><circle cx="300" cy="186" r="9" fill="#e8742a"/><path d="M291 186h18M300 177v18" stroke="#3a1a0a" stroke-width="1"/></g>' + Lman(276, 240, "#1f4fb0", "lm-bob", "#f4c430") +
      LR(280, 8, 112, 34, "#111", ' rx="3"') + LT("IRVINGTON, NJ", 336, 23, 11, "#f4c430") + LT("WHERE DANA HOOPED", 336, 36, 8, "#fff") +
      tag("QUEEN LATIFAH", 12, 252, 22, "#f4c430", -4),
      sky("sk", "#7fb8e6", "#eef0e0"));
  }

  window.SCENES = { train: LM_train, blossoms, cathedral: LM_cathedral, star, corner };
})();
