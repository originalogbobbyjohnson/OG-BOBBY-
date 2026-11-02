/* Morris Heights / River Park Towers opening scenes for the Kenzo B game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes ripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.rip{animation:ripple 3s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}' +
    '.ball{animation:bounce 1s ease-in infinite}' +
    '@keyframes fly{0%{transform:translate(-40px,20px)}100%{transform:translate(440px,-30px)}}' +
    '.bird{animation:fly 9s linear infinite}.bird2{animation-delay:3s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff4fa3", GOLD = "#ffd23f", ICE = "#7bdcff";
  const river = (y, color) => {
    let r = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + color + '"/><g class="rip">';
    for (let row = 0; row < 4; row++) for (let x = -20; x < 460; x += 40) r += '<path d="M' + (x + (row % 2) * 20) + ' ' + (y + 10 + row * 12) + 'q10 -4 20 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".25"/>';
    return r + '</g>';
  };


  /* 2. River Park Towers: four rusty-brown brick towers over the Harlem River, windows flicking on */
  function towers() {
    const tower = (x, top, w) => {
      let t = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (200 - top) + '" fill="#8a4a2e"/>';
      for (let i = 6; i < w; i += 8) t += '<rect x="' + (x + i) + '" y="' + top + '" width="3" height="' + (200 - top) + '" fill="#6e3820"/>';
      for (let y = top + 8; y < 192; y += 12) for (let i = 2; i < w - 4; i += 8) {
        const k = (x * 7 + y * 3 + i) % 11;
        if (k < 4) t += '<rect class="flk' + (k === 1 ? " flk2" : k === 2 ? " flk3" : "") + '" x="' + (x + i) + '" y="' + y + '" width="4" height="5" fill="#ffd98a"/>';
      }
      t += '<rect x="' + (x - 2) + '" y="' + (top - 4) + '" width="' + (w + 4) + '" height="5" fill="#5a2c18"/>';
      return t;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(22) +
      tower(40, 50, 58) + tower(118, 30, 62) + tower(206, 36, 62) + tower(292, 56, 58) +
      '<rect x="0" y="196" width="400" height="10" fill="#2a2a30"/>' +
      '<path d="M0 206h400" stroke="#4a4a52" stroke-width="2"/>' +
      river(208, "#1d3550") +
      '<g class="boat"><path d="M0 222h40l-6 8h-30z" fill="#e8e8e8"/><rect x="10" y="214" width="16" height="8" fill="#e8e8e8"/></g>' +
      '<text x="200" y="22" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="4" fill="' + GOLD + '">RIVER PARK TOWERS</text>',
      sky("g2", "#140a24", "#4b2f5e"));
  }

  /* 3. Roberto Clemente State Park: the riverfront promenade, the Washington Bridge arches, a ball bouncing on the court */
  function park() {
    let arches = "";
    for (let i = 0; i < 4; i++) arches += '<path d="M' + (20 + i * 95) + ' 140q47-60 95 0" fill="none" stroke="#c9b48a" stroke-width="6"/>';
    let rail = "";
    for (let x = 0; x < 400; x += 14) rail += '<rect x="' + x + '" y="166" width="2" height="16" fill="#2b3a2b"/>';
    const lamp = x => '<rect x="' + (x - 2) + '" y="120" width="4" height="60" fill="#1d2a1d"/><circle class="flk" cx="' + x + '" cy="118" r="6" fill="#fff0b8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="320" cy="50" r="22" fill="#ffb36b" opacity=".9"/>' +
      '<path d="M0 80h400" stroke="#8a7a5a" stroke-width="5"/>' + arches +
      '<path d="M0 100l60-30 80 20 90-26 90 18 80-20v40H0z" fill="#3a5a3a" opacity=".6"/>' +
      river(140, "#2c4a6a") +
      '<rect x="0" y="164" width="400" height="4" fill="#2b3a2b"/>' + rail + '<rect x="0" y="180" width="400" height="4" fill="#2b3a2b"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#5a6470"/>' +
      '<path d="M120 184v76M280 184v76M120 224h160" stroke="#f4f1e8" stroke-width="2" opacity=".7"/>' +
      lamp(40) + lamp(360) +
      '<rect x="300" y="190" width="4" height="50" fill="#d9d9d9"/><rect x="286" y="190" width="28" height="18" fill="#fff" stroke="#999"/><path d="M294 210h12l-2 10h-8z" fill="none" stroke="' + PINK + '" stroke-width="2"/>' +
      '<g class="ball"><circle cx="230" cy="232" r="8" fill="#e8742a"/><path d="M222 232h16M230 224v16" stroke="#3a1a0a" stroke-width="1"/></g>' +
      '<text x="20" y="36" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="3" fill="#f4f1e8">CLEMENTE STATE PARK</text>',
      sky("g3", "#2a1a3e", "#e08a6a"));
  }

  /* 4. University Heights: the domed Gould Memorial Library and the Hall of Fame colonnade, pigeons flying over */
  function library() {
    let cols = "";
    for (let i = 0; i < 8; i++) cols += '<rect x="' + (128 + i * 19) + '" y="132" width="8" height="66" fill="#efe6d0"/>';
    let colon = "";
    for (let i = 0; i < 9; i++) { const x = 6 + i * 13; colon += '<rect x="' + x + '" y="168" width="5" height="36" fill="#d9ccae"/>'; colon += '<rect x="' + (400 - x - 5) + '" y="168" width="5" height="36" fill="#d9ccae"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="bird"><path d="M0 40q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<g class="bird bird2"><path d="M0 60q4-4 8 0q4-4 8 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<path d="M140 92a60 52 0 0 1 120 0z" fill="#7d9a8a"/><path d="M152 92a48 40 0 0 1 96 0" fill="none" stroke="#5f7d6c" stroke-width="2"/>' +
      '<rect x="190" y="30" width="20" height="12" fill="#efe6d0"/><circle cx="200" cy="28" r="5" fill="#7d9a8a"/>' +
      '<rect x="136" y="92" width="128" height="20" fill="#e3d6b6"/>' +
      '<rect x="110" y="112" width="180" height="20" fill="#efe6d0"/><path d="M110 112l90-22 90 22z" fill="#e3d6b6" opacity=".0"/>' +
      '<path d="M120 132l80-24 80 24z" fill="#e3d6b6" stroke="#c9b993"/>' +
      '<rect x="110" y="132" width="180" height="6" fill="#d9ccae"/>' + cols +
      '<rect x="100" y="198" width="200" height="10" fill="#d9ccae"/>' +
      '<rect x="0" y="160" width="128" height="8" fill="#c9b993"/><rect x="272" y="160" width="128" height="8" fill="#c9b993"/>' + colon +
      '<rect x="0" y="204" width="400" height="56" fill="#3f5a36"/><rect x="170" y="208" width="60" height="52" fill="#b8ad98"/>' +
      '<rect x="296" y="60" width="2" height="40" fill="#555"/><path class="flag" d="M298 60h22v14h-22z" fill="' + PINK + '"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="3" fill="#f4f1e8">UNIVERSITY HEIGHTS</text>',
      sky("g4", "#8fc3e8", "#f3dcc0"));
  }

  /* 5. Cedar Av and W 179 St, by the towers: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="270" y="10" width="40" height="120" fill="#6e3820" opacity=".7"/><rect x="320" y="30" width="40" height="100" fill="#6e3820" opacity=".7"/>' +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3540"/>' +
      tag("KENZO B", 34, 146, 38, PINK, -7) + tag("TOP 2 NOT 2", 44, 198, 24, GOLD, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Cedar Av</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 179 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#1a0f2a", "#3d2a52"));
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
  /* 0. Burnside Av (4): from the street under the el on Jerome, looking up at the station, River Park Towers rising off to the west, KENZO on the column */
  function LM_train() {
    const tower = (x, h, c) => LR(x, 150 - h, 30, h, c) + Lwin(x + 4, 156 - h, 3, Math.floor(h / 12), 9, 12, 5, 6, "#ffd77a", "#5a3a3a");
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lstars(10) +
      /* River Park Towers: the stepped brick towers by the river */
      '<g opacity=".9">' + tower(250, 110, "#a85a44") + tower(282, 130, "#b8664c") + tower(314, 120, "#a85a44") + tower(346, 100, "#984e3a") + '</g>' + LT("RIVER PARK TOWERS", 320, 30, 8, "#ffd23f") +
      /* the el and the station body */
      LR(0, 56, 400, 30, "#4a5a4a") + LR(0, 86, 400, 6, "#2f3a2f") + LR(60, 86, 200, 40, "#5a6a5a") + '<path d="M60 126h200" stroke="#2f3a2f" stroke-width="3"/>' + Lwin(70, 96, 8, 1, 24, 0, 16, 18, "#ffe7a8", "#2f3a2f") +
      '<g class="lm-carb" style="animation-duration:7s">' + LR(0, 30, 200, 26, "#c9ced6", ' rx="4"') + [10, 46, 82, 118, 154].map(x => LR(x, 35, 24, 11, "#cfe6ff")).join("") + Lbul(186, 43, "4", "#00933c", 9) + '</g>' +
      Lsign(84, 134, 172, "Burnside Av", [["4", "#00933c"]]) +
      [8, 56, 380].map(x => LR(x, 92, 12, 144, "#4a5a4a") + '<path d="M' + x + ' 92l-14 14M' + (x + 12) + ' 92l14 14" stroke="#4a5a4a" stroke-width="4"/>').join("") +
      /* KENZO on the column, the stair down */
      tag("KENZO", 66, 226, 20, "#ff4fa3", -86) +
      '<path d="M270 236l40-90h12l-40 90z" fill="#7a7a72"/>' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (276 + i * 7) + ' ' + (222 - i * 15) + 'h12" stroke="#5a5a52" stroke-width="2"/>').join("") +
      /* Jerome Av below */
      LR(0, 236, 400, 24, "#2a2a30") + '<path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' + '<g class="lm-car">' + Lauto(0, 226, "#ff4fa3") + '</g>' +
      Lman(220, 236, "#ffd23f", "lm-bob", "#ff4fa3") + LR(178, 196, 80, 18, "#0f6b3a", ' rx="2" stroke="#fff"') + LT("Jerome Av", 218, 209, 10, "#fff") +
      tag("TOP 2", 90, 230, 22, "#ffd23f", -6) + tag("KENZO B", 300, 140, 16, "#7bdcff", -4),
      sky("sk", "#2a2a5a", "#e07a6a"));
  }

  window.SCENES = { train: LM_train, towers, park, library, corner };
})();
