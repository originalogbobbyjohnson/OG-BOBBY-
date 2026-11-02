(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,240px) rotate(300deg);opacity:.9}}' +
    '.leaf{animation:leaf 6s linear infinite}.l2{animation-delay:-1.5s}.l3{animation-delay:-3s}.l4{animation-delay:-4.5s}' +
    '@keyframes snow{0%{transform:translateY(-20px)}100%{transform:translateY(270px)}}' +
    '.snw{animation:snow 7s linear infinite}.sn2{animation-delay:-2.3s}.sn3{animation-delay:-4.6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes drive{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.drv{animation:drive 7s linear infinite}' +
    '@keyframes sail{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.sail{animation:sail 18s linear infinite;animation-delay:-8s}' +
    '@keyframes fly{0%{transform:translate(-80px,20px)}100%{transform:translate(480px,-30px)}}.fly{animation:fly 9s linear infinite}' +
    '@keyframes win{0%,60%,100%{opacity:.95}65%,90%{opacity:.15}}' +
    '.win{animation:win 5s infinite}.w2{animation-delay:-1.7s}.w3{animation-delay:-3.3s}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}.wav{animation:wave 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{animation:spin 12s linear infinite;transform-box:view-box}.spf{animation:spin 2s linear infinite;transform-box:view-box}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.85}}.glw{animation:glow 3s ease-in-out infinite}.g2{animation-delay:-1.5s}' +
    '@keyframes beam{0%{transform:translate(0,0);opacity:0}20%{opacity:.8}100%{transform:translate(40px,140px);opacity:0}}.dst{animation:beam 6s linear infinite}.d2{animation-delay:-2s}.d3{animation-delay:-4s}' +
    '@keyframes swing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.swg{animation:swing 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center top}' +
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
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h; yy += 12) for (let xx = x + ((yy - y) / 12 % 2 ? -6 : 4); xx < x + w - 4; xx += 30) { const x0 = Math.max(x, xx), x1 = Math.min(x + w, xx + 28); if (x1 > x0) b += '<rect x="' + x0 + '" y="' + yy + '" width="' + (x1 - x0) + '" height="10" fill="' + mortar + '"/>'; } return b; };
  const signs = (a, b) =>
    '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    '<rect x="252" y="88" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="302" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + a + '</text>' +
    '<rect x="252" y="110" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="302" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + b + '</text>' +
    '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>';
  const wall = (base, alt) => { let b = '<rect x="16" y="60" width="232" height="160" fill="' + base + '"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 18 : 28; x < 219; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="' + alt + '"/>'; return b; };
  /* an SIR R211S-style car body, silver with the blue band */
  const sirTrain = (y) => {
    let w = ""; for (let x = 22; x < 290; x += 44) w += '<rect x="' + x + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#fff1b8" opacity=".9"/>';
    return '<g class="anim-train"><rect x="8" y="' + y + '" width="300" height="56" rx="8" fill="#b9bfc9" stroke="#5b6270" stroke-width="2"/>' +
      '<rect x="8" y="' + (y + 36) + '" width="300" height="6" fill="#0039a6"/>' + w + '<circle cx="300" cy="' + (y + 48) + '" r="4" fill="#fff6c2"/>' + sir(262, y + 48) + '</g>';
  };
  /* Park Hill and around Staten Island: opening scenes for Cappadonna's game */
  const W1 = "#ffffff", GLD = "#e8b84a", ICE = "#9fd8ff";




  /* 4. Victory Blvd at night: a yellow cab climbing past Grymes Hill, the rooftop light glowing, headlights on the wet street */
  function cab() {
    let bld = ""; [[10, 90, 70], [96, 110, 50], [176, 80, 80], [270, 120, 60], [340, 100, 60]].forEach((b, i) => {
      bld += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (190 - b[1]) + '" fill="' + ["#3a3346", "#2e2a3a", "#433a4e"][i % 3] + '"/>';
      for (let y = b[1] + 10; y < 180; y += 16) for (let x = b[0] + 8; x < b[0] + b[2] - 8; x += 16) bld += '<rect class="' + (((x + y) / 8) % 3 < 1 ? "win w2" : "") + '" x="' + x + '" y="' + y + '" width="7" height="8" fill="' + (((x * 3 + y) % 5) < 3 ? "#ffd98a" : "#1d1a24") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(18) +
      '<circle cx="60" cy="40" r="12" fill="#f4ecff"/>' + bld +
      '<rect x="0" y="190" width="400" height="70" fill="#1c1c24"/><path d="M0 228h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<path d="M0 248h400" stroke="#3a3a48" stroke-width="10" opacity=".6"/>' +
      '<g class="drv">' +
        '<path d="M0 214v-14q4-8 14-10l12-12h44l14 12q12 2 14 10v14z" fill="#f4c20d" stroke="#3a2a00" stroke-width="2"/>' +
        '<path d="M30 190l8-9h26l8 9z" fill="#9fc8e8"/><path d="M52 181v9" stroke="#3a2a00" stroke-width="2"/>' +
        '<rect x="38" y="170" width="24" height="8" rx="2" fill="#fff6c8" class="flk"/>' +
        '<path d="M2 202h104" stroke="#111" stroke-width="2" stroke-dasharray="4 4"/>' +
        '<circle cx="24" cy="216" r="9" fill="#111"/><circle cx="24" cy="216" r="4" fill="#bbb"/><circle cx="84" cy="216" r="9" fill="#111"/><circle cx="84" cy="216" r="4" fill="#bbb"/>' +
        '<circle cx="106" cy="204" r="3" fill="#fff6c2"/><path d="M108 204l60-8v20z" fill="#fff6c2" opacity=".25"/>' +
      '</g>' +
      tag("VICTORY BLVD", 14, 252, 22, W1, -3) + tag("CAPPADONNA", 250, 254, 22, GLD, -5),
      sky("g4", "#0e0c22", "#4a2a4a"));
  }

  /* 5. Park Hill Ave and Vanderbilt Ave: green signs, the tag wall, a white drip */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#f4ecff"/>' + wall("#33363e", "#3e424c") +
      tag("CAPPADONNA", 26, 120, 28, W1, -7) + tag("CAPPACHINO", 40, 170, 26, GLD, -3) + tag("THE PILLAGE", 46, 206, 22, ICE, -2) +
      '<rect class="drp" x="96" y="126" width="3" height="8" fill="#fff"/><rect class="drp" x="170" y="112" width="3" height="8" fill="#fff" style="animation-delay:-1.1s"/>' +
      signs("Park Hill Ave", "Vanderbilt Ave"),
      sky("g5", "#0d0a22", "#2a2e40"));
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
  /* 0. Grasmere (SIR): the open cut under Clove Rd, the stair up toward Park Hill, a yellow cab waiting at the curb */
  function LM_station() {
    let wall = ""; for (let x = 0; x < 400; x += 40) wall += '<path d="M' + x + ' 96v80" stroke="#8a8a84" stroke-width="1"/>';
    let steps = ""; for (let i = 0; i < 6; i++) steps += LR(300 + i * 10, 166 - i * 14, 90 - i * 10, 14, i % 2 ? "#a8a49a" : "#b8b4aa");
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(60, 26) + Lcloud(220, 40, .8, "lmd3") +
      /* street level up top: houses of Grasmere, the cab at the curb */
      LR(0, 78, 400, 18, "#6a6a6a") + LR(0, 74, 400, 5, "#b8b4aa") +
      ['#c9a27a', '#d8d0c0', '#9fb7c9'].map((c, i) => '<path d="M' + (10 + i * 70) + ' 74v-30l28-18 28 18v30z" fill="' + c + '"/>' + LR(26 + i * 70, 52, 10, 12, "#2a3440") + LR(44 + i * 70, 52, 10, 12, "#ffd77a")).join("") +
      Ltree(240, 50, 18, "#d98a2b") + Ltree(276, 46, 14, "#c0502a", "lmd1") +
      '<g class="lm-bob">' + Lcab(300, 46) + '</g>' + LT("PARK HILL ⟶", 340, 40, 10, "#111") +
      /* the cut: concrete walls */
      LR(0, 96, 400, 84, "#a8a49a") + wall + '<path d="M0 96h400" stroke="#6a6a64" stroke-width="3"/>' + steps + '<path d="M296 180l94-94" stroke="#2a3138" stroke-width="3"/>' +
      Lsign(40, 108, 190, "Grasmere", [["SIR", "#0039a6"]]) + LT("Clove Rd · stairs up to Park Hill", 135, 158, 10, "#111") +
      tag("CAPPADONNA", 30, 92, 18, "#ffffff", -4) +
      /* the R211S: blue and white, sliding in */
      '<g class="anim-train"><rect x="6" y="176" width="300" height="50" rx="7" fill="#e9edf2" stroke="#5a6470" stroke-width="2"/>' + LR(6, 206, 300, 7, "#0039a6") + [24, 70, 116, 162, 208].map(x => LR(x, 184, 30, 16, "#1f2a38", ' rx="3"')).join("") + LR(268, 182, 32, 22, "#2a3440", ' rx="4"') + Lpill(150, 218, "SIR", "#0039a6") + '</g>' +
      LR(0, 226, 400, 8, "#eab308") + LR(0, 234, 400, 26, "#8f8a80") + Lman(330, 232, "#e8b84a", "lm-bob", "#111") +
      tag("WU-TANG", 210, 254, 16, "#e8b84a", -3),
      sky("sk", "#8fc3ea", "#f3dcb0"));
  }
  /* 1. Brady's Pond, Grasmere: NYC's last private freshwater swimming pond; green water, swim dock, lifeguard chair */
  function LM_silverlake() {
    const house = (x, y, c, r) => '<path d="M' + x + ' ' + y + 'v-22l16-12 16 12v22z" fill="' + c + '"/><path d="M' + (x - 2) + ' ' + (y - 22) + 'l18-13 18 13" stroke="' + r + '" stroke-width="3" fill="none"/>' + LR(x + 6, y - 16, 7, 7, "#ffd77a");
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(90, 24) + Lcloud(300, 36, .9, "lmd2") +
      /* rim: trees and houses */
      '<path d="M0 104q60-24 120-6t140-6 140 6v20H0z" fill="#3f7a3a"/>' + Ltree(30, 84, 20, "#2f6b3a") + Ltree(380, 84, 20, "#2f6b3a", "lmd1") + Ltree(196, 80, 16, "#3f7f45", "lmd2") +
      house(60, 104, "#d8d0c0", "#7a3a2a") + house(110, 102, "#c9a27a", "#3a3a3a") + house(240, 102, "#9fb7c9", "#5a2a2a") + house(300, 104, "#e8e0c8", "#2a4a3a") +
      /* the pond */
      '<path d="M0 112h400v148H0z" fill="#2e5a42"/><g class="lm-wav"><path d="M20 140h360M0 172h400M30 206h340" stroke="#4f8a68" stroke-width="2" stroke-dasharray="16 24"/></g>' +
      '<path d="M0 112h400" stroke="#6aa080" stroke-width="2"/>' +
      /* sandy beach + wooden swim dock */
      '<path d="M0 260v-40q80-14 150 0v40z" fill="#d8c49a"/>' + LR(150, 190, 120, 10, "#a8743a") + [158, 200, 242, 262].map(x => LR(x, 200, 5, 16, "#6b4420")).join("") + '<path d="M150 190h120" stroke="#6b4420" stroke-width="2"/>' +
      /* white lifeguard chair */
      '<path d="M60 222l10-46M88 222l-10-46M64 204h20M66 188h16" stroke="#fff" stroke-width="4"/>' + LR(62, 166, 26, 10, "#fff") + LR(66, 150, 18, 16, "#fff") + '<path d="M60 150l14-14 14 14z" fill="#e8b84a"/>' +
      /* swimmers + float line */
      '<path d="M120 160h260" stroke="#fff" stroke-width="1.5" stroke-dasharray="4 6"/>' + [[180, ""], [250, "lmd1"], [320, "lmd2"]].map(s => '<g class="lm-bob ' + s[1] + '"><circle cx="' + s[0] + '" cy="168" r="6" fill="#5a3a26"/><path d="M' + (s[0] - 12) + ' 174q12-6 24 0" stroke="#9fd8ff" stroke-width="2" fill="none"/></g>').join("") +
      LR(250, 8, 142, 34, "#11281c", ' rx="3"') + LT("BRADY'S POND", 321, 23, 13, "#fff") + LT("GRASMERE · STATEN ISLAND", 321, 36, 8.5, "#e8b84a") +
      tag("CAPPADONNA", 168, 248, 24, "#ffffff", -4),
      sky("sk", "#7fb8e6", "#eef0d0"));
  }
  /* 2. The Pillage (1998): a war-torn Shaolin village gate, the banner hanging, smoke over the rooftops at dusk */
  function LM_lighthouse() {
    const roof = (x, y, w, c) => '<path d="M' + (x - 10) + ' ' + y + 'q' + (w / 2 + 10) + ' 10 ' + (w + 20) + ' 0l-12-14h-' + (w - 4) + 'z" fill="' + c + '"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + '<circle cx="300" cy="120" r="46" fill="#ff8a2a" opacity=".85"/>' +
      /* village silhouettes, some burned */
      [[0, 150, 70], [60, 160, 60], [300, 150, 60], [350, 160, 50]].map(h => roof(h[0] + 10, h[1], h[2] - 10, "#1a0e08") + LR(h[0] + 10, h[1], h[2] - 10, 80, "#24140c")).join("") +
      '<path d="M120 160l10-8 6 10 8-6v84h-24z" fill="#1a0e08"/>' +
      [[40, 140, ""], [90, 150, "lmd1"], [330, 140, "lmd2"], [370, 150, "lmd3"], [130, 140, "lmd4"]].map(p => '<g class="lm-rise ' + p[2] + '"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="26" ry="12" fill="#3a2a24" opacity=".7"/></g>').join("") +
      '<g class="lm-flk"><path d="M352 160q6-14 0-22q10 8 8 22z" fill="#ffb02a"/><path d="M78 160q6-12 0-20q10 8 8 20z" fill="#ffb02a"/></g>' +
      /* the gate (paifang) */
      LR(150, 92, 14, 144, "#5a1a10") + LR(236, 92, 14, 144, "#5a1a10") + LR(140, 86, 120, 12, "#3a1008") + roof(144, 82, 112, "#1a0e08") + LR(156, 110, 88, 8, "#3a1008") +
      /* banner */
      '<g class="lm-flag" style="transform-origin:top center">' + LR(172, 118, 56, 82, "#e8b84a") + LT("WU", 200, 146, 20, "#111") + LT("THE", 200, 168, 9, "#111") + LT("PILLAGE", 200, 182, 10, "#111") + '<path d="M172 200l14 10 14-10 14 10 14-10" fill="#e8b84a"/></g>' +
      LR(0, 236, 400, 24, "#120a06") + '<path d="M0 236h400" stroke="#3a2010" stroke-width="2"/>' +
      '<g class="lm-car" style="animation-duration:16s"><path d="M0 50q6-6 12 0q6-6 12 0" stroke="#111" stroke-width="2" fill="none"/></g>' +
      LR(110, 8, 180, 22, "#000", ' rx="3" opacity=".6"') + LT("THE PILLAGE · 1998", 200, 24, 12, "#e8b84a") +
      tag("CAPPADONNA", 8, 254, 22, "#ffffff", -4) + tag("SHAOLIN", 286, 254, 18, "#e8b84a", -4),
      sky("sk", "#2a0e14", "#f07a2a"));
  }

  window.SCENES = { station: LM_station, silverlake: LM_silverlake, lighthouse: LM_lighthouse, cab, corner };
})();
