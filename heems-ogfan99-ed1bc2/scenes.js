/* Queens opening scenes for the Heems game (Flushing / Jackson Heights / Flushing Meadows). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes glow{0%,100%{opacity:1}50%{opacity:.5}}' +
    '.glw{animation:glow 2.2s ease-in-out infinite}.glw2{animation-delay:1.1s}' +
    '@keyframes spray{0%{transform:translate(0,0) scale(1);opacity:.9}100%{transform:translate(0,-34px) scale(1.6);opacity:0}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:spray 1.8s ease-out infinite}.jet2{animation-delay:-.6s}.jet3{animation-delay:-1.2s}' +
    '@keyframes turn{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.82)}}' +
    '.globe{transform-box:fill-box;transform-origin:50% 50%;animation:turn 6s ease-in-out infinite}' +
    '@keyframes run{0%{transform:translate(-420px,0)}100%{transform:translate(420px,0)}}' +
    '.el7{animation:run 7s linear infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.fl{transform-box:fill-box;transform-origin:0 0;animation:flag 1.4s ease-in-out infinite}.fl2{animation-delay:-.7s}' +
    '@keyframes flick{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}' +
    '.flm{transform-box:fill-box;transform-origin:50% 100%;animation:flick .8s ease-in-out infinite}' +
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
  const SAF = "#f4a52b", MAG = "#e0457b", TEAL = "#3fb7a5", SEVEN = "#b933ad";



  /* 3. The Ganesh Temple on Bowne Street: carved pale-granite gopuram tower, temple bells, flame lamps */
  function temple() {
    let tiers = "";
    for (let i = 0; i < 5; i++) {
      const w = 120 - i * 20, x = 200 - w / 2, y = 120 - i * 16;
      tiers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="16" fill="' + (i % 2 ? "#e2d6bd" : "#d6c8aa") + '" stroke="#a8977a" stroke-width="1"/>';
      for (let k = x + 6; k < x + w - 6; k += 12) tiers += '<rect x="' + k + '" y="' + (y + 4) + '" width="6" height="8" rx="3" fill="#a8977a"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="0" y="120" width="70" height="100" fill="#8a6a58"/><rect x="330" y="110" width="70" height="110" fill="#7a5e4e"/>' +
      /* the gopuram */
      tiers +
      '<path d="M176 56q24-26 48 0z" fill="#e2d6bd" stroke="#a8977a"/><circle cx="188" cy="48" r="3" fill="' + SAF + '"/><circle cx="200" cy="36" r="4" fill="' + SAF + '"/><circle cx="212" cy="48" r="3" fill="' + SAF + '"/>' +
      /* temple hall */
      '<rect x="100" y="136" width="200" height="84" fill="#e8dcc3" stroke="#a8977a"/>' +
      '<rect x="96" y="132" width="208" height="6" fill="#c9b994"/>' +
      '<path d="M176 220v-46q24-24 48 0v46z" fill="#5a3a24"/><path d="M182 220v-44q18-18 36 0v44z" fill="#7a4a2a"/>' +
      '<rect x="120" y="150" width="6" height="70" fill="#d6c8aa"/><rect x="274" y="150" width="6" height="70" fill="#d6c8aa"/>' +
      /* saffron flags and lamps */
      '<path d="M120 150v-22" stroke="#6a5a4a" stroke-width="2"/><path class="fl" d="M120 128l16 4-16 6z" fill="' + SAF + '"/>' +
      '<path d="M280 150v-22" stroke="#6a5a4a" stroke-width="2"/><path class="fl fl2" d="M280 128l16 4-16 6z" fill="' + SAF + '"/>' +
      '<path d="M146 212h14l-3 6h-8z" fill="#c9962e"/><path class="flm" d="M153 212q-4-6 0-12q4 6 0 12z" fill="#ffb53b"/>' +
      '<path d="M240 212h14l-3 6h-8z" fill="#c9962e"/><path class="flm" d="M247 212q-4-6 0-12q4 6 0 12z" fill="#ffb53b"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2c2f36"/><rect x="0" y="220" width="400" height="4" fill="#8a8d95"/>',
      sky("g3", "#f28a5b", "#f9d58a"));
  }

  /* 4. Jackson Heights: 74th Street under the elevated 7, sari shops and sweet shops, the train rolling by up top */
  function jackson() {
    const shop = (x, w, c, sign) => '<rect x="' + x + '" y="120" width="' + w + '" height="100" fill="' + c + '"/>' +
      '<rect x="' + (x + 6) + '" y="128" width="' + (w - 12) + '" height="20" fill="#111"/><text x="' + (x + w / 2) + '" y="143" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#ffe28a">' + sign + '</text>' +
      '<rect x="' + (x + 8) + '" y="158" width="' + (w - 16) + '" height="44" fill="#ffe9b0" opacity=".85"/>';
    let ties = "";
    [2, 95, 201, 295, 392].forEach(x => { ties += '<rect x="' + (x - 3) + '" y="60" width="7" height="160" fill="#4a7a5a"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      shop(0, 96, MAG, "SARIS") + shop(98, 104, TEAL, "SWEETS") + shop(204, 92, SAF, "CHAAT") + shop(298, 102, "#6a4fb0", "JEWELERS") +
      /* sari colors in the window */
      '<rect x="16" y="162" width="14" height="38" fill="' + SAF + '"/><rect x="34" y="162" width="14" height="38" fill="' + TEAL + '"/><rect x="52" y="162" width="14" height="38" fill="#ffe28a"/><rect x="70" y="162" width="12" height="38" fill="#7cc6e8"/>' +
      /* the el structure, green steel */
      ties + '<rect x="0" y="40" width="400" height="22" fill="#3f6e50"/><rect x="0" y="36" width="400" height="6" fill="#2c4f39"/>' +
      '<g class="el7"><rect x="20" y="8" width="360" height="28" rx="5" fill="#c9ced6"/><rect x="20" y="28" width="360" height="4" fill="' + SEVEN + '"/>' +
        '<rect x="40" y="14" width="22" height="10" fill="#cfe6ff"/><rect x="90" y="14" width="22" height="10" fill="#cfe6ff"/><rect x="140" y="14" width="22" height="10" fill="#cfe6ff"/><rect x="230" y="14" width="22" height="10" fill="#cfe6ff"/><rect x="280" y="14" width="22" height="10" fill="#cfe6ff"/>' +
        bullet(350, 20, "7", SEVEN) + '</g>' +
      /* string lights */
      '<path d="M0 108q100 14 200 0t200 0" stroke="#555" stroke-width="1" fill="none"/>' +
      '<circle class="glw" cx="40" cy="112" r="3" fill="#ffe28a"/><circle class="glw glw2" cx="100" cy="115" r="3" fill="' + MAG + '"/><circle class="glw" cx="160" cy="112" r="3" fill="' + TEAL + '"/><circle class="glw glw2" cx="240" cy="111" r="3" fill="#ffe28a"/><circle class="glw" cx="300" cy="114" r="3" fill="' + MAG + '"/><circle class="glw glw2" cx="360" cy="112" r="3" fill="' + SAF + '"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2c2f36"/><rect x="0" y="220" width="400" height="4" fill="#8a8d95"/>',
      sky("g4", "#2a1e4a", "#7a4a7a"));
  }

  /* 5. The corner: Bowne St and Holly Av, by the temple in Flushing */
  function corner() {
    let brick = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 0 : -18; x < 250; x += 36) brick += '<rect x="' + Math.max(0, x) + '" y="' + y + '" width="' + Math.min(34, 250 - Math.max(0, x), x + 34) + '" height="10" fill="#6a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="0" y="56" width="250" height="168" fill="#4e2a1e"/>' + brick +
      tag("DAS RACIST", 22, 92, 20, TEAL, -4) + tag("HEEMS", 26, 156, 50, SAF, -7) + tag("QUEENS", 70, 200, 24, MAG, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#2c2f36"/><rect x="0" y="224" width="400" height="4" fill="#8a8d95"/>' +
      '<rect x="292" y="40" width="5" height="184" fill="#1d2329"/>' +
      '<rect x="254" y="44" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="295" y="57" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Bowne St</text>' +
      '<rect x="258" y="66" width="74" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="295" y="79" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Holly Av</text>' +
      /* a little tree and a saffron flag */
      '<rect x="362" y="70" width="5" height="154" fill="#4a3424"/><circle cx="364" cy="66" r="22" fill="#5f9a46"/>' +
      '<path d="M330 224v-80" stroke="#6a5a4a" stroke-width="2"/><path class="fl" d="M330 144l18 5-18 7z" fill="' + SAF + '"/>',
      sky("g5", "#f6c87a", "#e88b6a"));
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
  /* 0. Flushing–Main St (7): the end of the line, a 7 nosed up to the bumper block, a Das Racist bill on the column */
  function LM_train() {
    let tiles = ""; for (let y = 20; y < 120; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6d0c0" stroke-width=".8"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="#ece6d6"/>' + tiles + LR(0, 16, 400, 8, "#b933ad") +
      Lsign(110, 30, 180, "Flushing–Main St", [["7", "#b933ad"]], 14) +
      /* tunnel mouth with the 7 coming head-on */
      LR(110, 70, 180, 140, "#15161a") + '<g class="lm-bob"><rect x="140" y="88" width="120" height="122" rx="12" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      LR(152, 96, 96, 16, "#111", ' rx="2"') + '<text class="lm-blk" x="200" y="108" text-anchor="middle" ' + LF + ' font-size="9" fill="#ff9a2a">7 FLUSHING-MAIN ST</text>' +
      LR(150, 118, 40, 34, "#1f2a38", ' rx="3"') + LR(210, 118, 40, 34, "#1f2a38", ' rx="3"') + Lbul(200, 168, "7", "#b933ad", 12) +
      '<circle class="lm-pls" cx="160" cy="194" r="6" fill="#fff6c2"/><circle class="lm-pls" cx="240" cy="194" r="6" fill="#fff6c2"/></g>' +
      /* bumper block */
      LR(150, 210, 100, 14, "#d7263d") + '<path d="M150 210l100 14M250 210l-100 14" stroke="#fff" stroke-width="3"/>' +
      /* columns with posters */
      LR(40, 60, 22, 170, "#3a4250") + LR(338, 60, 22, 170, "#3a4250") +
      LR(66, 100, 40, 58, "#f4a52b", ' stroke="#111"') + LA("DAS", 86, 120, 14, "#111") + LA("RACIST", 86, 136, 10, "#111") + LT("SHUT UP, DUDE", 86, 150, 5.5, "#111") +
      LR(294, 100, 40, 58, "#3fb7a5", ' stroke="#111"') + LA("HIMA", 314, 124, 13, "#111") + LT("NEHRU JACKETS", 314, 142, 5.5, "#111") +
      LR(0, 224, 400, 36, "#8f8a80") + LR(0, 222, 400, 4, "#eab308") + LT("END OF THE LINE", 200, 238, 9, "#111") +
      Lman(40, 256, "#e0457b", "lm-bob", "#f4a52b") + Lman(360, 256, "#3fb7a5", "lm-bob lmd1") +
      tag("HEEMS", 8, 92, 28, "#f4a52b", -8) + tag("DAS RACIST", 270, 256, 18, "#e0457b", -3),
      "");
  }
  /* 1. Stuyvesant High School, 345 Chambers St: the ten-story brick school and the Tribeca Bridge over West St */
  function LM_unisphere() {
    let truss = ""; for (let x = 182; x < 344; x += 18) truss += '<path d="M' + x + ' 150l9-16 9 16" stroke="#e8eef4" stroke-width="2" fill="none"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(70, 28) + Lcloud(300, 18, .8, "lmd3") +
      /* the Hudson and New Jersey far off on the right */
      LR(340, 160, 60, 76, "#4a7aa6") + '<g class="lm-wav"><path d="M344 190h56M350 214h50" stroke="#8ab8de" stroke-width="2" stroke-dasharray="10 10"/></g>' +
      /* school block */
      LR(20, 40, 160, 196, "#b8784a") + LR(20, 40, 160, 8, "#8a5432") + Lwin(30, 58, 7, 9, 21, 18, 14, 10, "#ffe7a8", "#3a4a5a") + LR(20, 214, 160, 22, "#3a4a5a") +
      '<path d="M120 40v196" stroke="#8a5432" stroke-width="3"/>' +
      /* the Tribeca Bridge: enclosed truss over West St */
      LR(176, 132, 172, 20, "#5a8ab0", ' opacity=".6"') + '<path d="M176 132q86-34 172 0" stroke="#e8eef4" stroke-width="4" fill="none"/>' + truss + LR(176, 150, 172, 4, "#e8eef4") + LR(336, 132, 14, 104, "#c9ced6") +
      Lman(232, 150, "#e0457b", "lm-bob") + Lman(276, 150, "#f4a52b", "lm-bob lmd1") +
      /* West St traffic underneath */
      LR(176, 200, 164, 36, "#3a3a40") + '<path d="M176 218h164" stroke="#fff" stroke-dasharray="10 8"/>' + '<g class="lm-car" style="animation-duration:6s">' + Lauto(0, 200, "#ffd23f") + '</g>' +
      LR(0, 236, 400, 24, "#8a847a") +
      LR(186, 8, 206, 34, "#111", ' rx="3"') + LT("STUYVESANT HIGH SCHOOL", 289, 23, 11, "#f4a52b") + LT("345 CHAMBERS ST · WEST ST BRIDGE", 289, 36, 8, "#fff") +
      tag("HEEMS", 26, 254, 22, "#f4a52b", -4) + tag("DAS RACIST", 230, 254, 16, "#e0457b", -3),
      sky("sk", "#7fb8e8", "#eef2f0"));
  }

  window.SCENES = { train: LM_train, unisphere: LM_unisphere, temple, jackson, corner };
})();
