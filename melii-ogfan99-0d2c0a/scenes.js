/* Harlem / uptown opening scenes for the Melii game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.15}}' +
    '.blink{animation:blink 2s steps(1) infinite}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 5s linear infinite}.car2{animation-delay:-2.4s}' +
    '@keyframes back{from{transform:translateX(460px)}to{transform:translateX(-120px)}}' +
    '.carb{animation:back 6s linear infinite}.carb2{animation-delay:-3.1s}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(30px,150px) rotate(300deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:50% 50%;animation:fall 6s linear infinite}.lf2{animation-delay:-2s}.lf3{animation-delay:-4s}.lf4{animation-delay:-1s}' +
    '@keyframes wave{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(4deg) scaleX(.94)}}' +
    '.wave{transform-box:fill-box;transform-origin:0 0;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.n2{animation-delay:-1s}.n3{animation-delay:-2s}' +
    '@keyframes shake{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}' +
    '.shake{transform-box:fill-box;transform-origin:50% 100%;animation:shake .35s ease-in-out infinite}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes beam{0%,100%{opacity:0}40%,60%{opacity:.35}}' +
    '.beam{animation:beam 3s ease-in-out infinite}' +
    '@keyframes hop{0%,70%,100%{transform:translateY(0)}80%{transform:translateY(-6px)}}' +
    '.hop{animation:hop 2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const bullet = (x, y, l, c, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + l + '</text>';
  /* Dominican flag: blue and red quarters split by a white cross, small emblem at the center */
  const flag = (x, y, w, cls) => { const h = w * 0.66, c = w * 0.12;
    return '<g class="' + (cls || "") + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#fff"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#002d62"/>' +
      '<rect x="' + (x + (w + c) / 2) + '" y="' + y + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#ce1126"/>' +
      '<rect x="' + x + '" y="' + (y + (h + c) / 2) + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#ce1126"/>' +
      '<rect x="' + (x + (w + c) / 2) + '" y="' + (y + (h + c) / 2) + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#002d62"/>' +
      '<circle cx="' + (x + w / 2) + '" cy="' + (y + h / 2) + '" r="' + c * 0.45 + '" fill="#2e7d32" opacity=".8"/></g>'; };
  const CYAN = "#38e8ff", RED = "#ff3b4e", WHITE = "#ffffff", BLUE = "#002d62";

  /* 1. 145 St on St. Nicholas Av: underground, the A, B, C and D */
  function train() {
    let tiles = "";
    for (let y = 0; y < 128; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d4c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 0v40M' + x + ' 64v64" stroke="#d9d4c4" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="148" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let beams = "";
    [20, 76, 312, 368].forEach(x => beams += '<rect x="' + x + '" y="0" width="10" height="200" fill="#2b3a4a"/><rect x="' + (x - 3) + '" y="0" width="16" height="4" fill="#3c4d5f"/>');
    return svg(
      '<rect width="400" height="260" fill="#efeadb"/>' + tiles +
      /* mosaic band */
      '<rect x="0" y="40" width="400" height="24" fill="#7a2e2e"/><path d="M0 46h400M0 58h400" stroke="#d9a441" stroke-width="2"/>' +
      '<rect x="0" y="128" width="400" height="10" fill="#7a2e2e"/>' +
      /* station sign */
      '<rect x="110" y="72" width="180" height="46" rx="3" fill="#111"/><path d="M110 76h180" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="122" y="104" ' + F + ' font-weight="700" font-size="22" fill="#fff">145 St</text>' +
      bullet(208, 98, "A", "#0039a6") + bullet(230, 98, "B", "#ff6319") + bullet(252, 98, "C", "#0039a6") + bullet(274, 98, "D", "#ff6319") +
      '<circle class="flk" cx="60" cy="20" r="4" fill="#fff6c2"/><circle class="flk flk2" cx="340" cy="20" r="4" fill="#fff6c2"/>' +
      /* the A train slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="140" width="304" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + windows +
        '<path d="M300 144h8q4 0 4 6v22h-12z" fill="#cfe6ff" opacity=".85"/>' +
        bullet(286, 186, "A", "#0039a6") +
        '<circle cx="305" cy="190" r="3.5" fill="#fff6c2"/><rect x="40" y="180" width="200" height="4" fill="#9aa2ac"/>' +
      '</g>' + beams +
      '<rect x="0" y="198" width="400" height="6" fill="#e8c547"/><rect x="0" y="204" width="400" height="56" fill="#55534d"/>' +
      '<path d="M0 230h400" stroke="#6a675f" stroke-width="2"/>',
      "");
  }



  /* 4. The Little Red Lighthouse under the George Washington Bridge, on the Hudson at Fort Washington Park */
  function lighthouse() {
    let cables = "";
    for (let i = 0; i < 14; i++) { const x = 160 + i * 18; cables += '<path d="M' + x + ' ' + (40 + Math.pow((x - 290) / 26, 2) * 1.2) + 'V120" stroke="#9aa4ad" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* Palisades across the river */
      '<path d="M0 150l40-14h120l40 10h200v20H0z" fill="#3e4a3a"/>' +
      /* bridge tower (latticed steel, grey) and main cable */
      '<rect x="270" y="20" width="12" height="140" fill="#8a949e"/><rect x="304" y="20" width="12" height="140" fill="#8a949e"/>' +
      '<path d="M270 40h46M270 70h46M270 100h46" stroke="#8a949e" stroke-width="5"/><path d="M276 40l34 30M310 40l-34 30M276 70l34 30M310 70l-34 30" stroke="#727c86" stroke-width="2"/>' +
      '<path d="M0 104Q150 150 293 22Q350 70 400 92" stroke="#9aa4ad" stroke-width="3" fill="none"/>' + cables +
      /* roadway deck with traffic */
      '<rect x="0" y="118" width="400" height="10" fill="#6f7880"/><rect x="0" y="128" width="400" height="4" fill="#4a535b"/>' +
      '<g class="car"><rect x="0" y="113" width="18" height="6" rx="2" fill="#ffd98a"/></g><g class="carb carb2"><rect x="0" y="113" width="18" height="6" rx="2" fill="#ff6b6b"/></g>' +
      /* river */
      '<rect x="0" y="166" width="400" height="94" fill="#2a4a63"/>' +
      '<path class="shim" d="M20 200h50M200 214h60M300 236h60" stroke="#9fd0ea" stroke-width="2" opacity=".6"/><path class="shim shim2" d="M90 240h60M260 196h40" stroke="#9fd0ea" stroke-width="2" opacity=".6"/>' +
      /* the rocks and the red lighthouse */
      '<path d="M40 210q20-22 70-20t70 20z" fill="#5a5650"/>' +
      '<path d="M98 196l6-96h22l6 96z" fill="#c8102e"/>' +
      '<rect x="96" y="94" width="38" height="5" fill="#fff"/><path d="M96 94h38" stroke="#333"/><rect x="104" y="80" width="22" height="14" fill="#1f1f1f"/><rect x="107" y="83" width="16" height="9" fill="#ffe7a8"/>' +
      '<path d="M102 80l13-10 13 10z" fill="#1f1f1f"/><rect x="112" y="128" width="6" height="10" fill="#fff" opacity=".85"/><rect x="110" y="166" width="10" height="20" fill="#5a1010"/>' +
      '<path class="beam" d="M126 87l100-26v40z" fill="#ffe7a8"/><path class="beam" d="M104 87l-100-26v40z" fill="#ffe7a8"/>',
      sky("g4", "#3a4a86", "#f29a6a"));
  }

  /* 5. Adam Clayton Powell Jr Blvd and W 135 St, by Thurgood Marshall Academy where she started rapping in sixth grade */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="32" r="13" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="56" width="240" height="164" fill="#3a2a24"/>'; for (let y = 58; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a352c"/>'; return b; })() +
      /* painted flag stripe behind the tags */
      '<rect x="16" y="150" width="240" height="8" fill="#002d62" opacity=".9"/><rect x="16" y="158" width="240" height="4" fill="#fff" opacity=".9"/><rect x="16" y="162" width="240" height="8" fill="#ce1126" opacity=".9"/>' +
      tag("MELII", 34, 130, 54, CYAN, -7) + tag("CHUCHI", 30, 198, 26, WHITE, -4) + tag("NO HARD FEELINGS", 104, 214, 15, RED, -2) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="244" y="84" width="118" height="20" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="98" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#fff">Adam C Powell Jr Blvd</text>' +
      '<rect x="262" y="108" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="121" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">W 135 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="48" height="13" rx="4" fill="#f2c14e"/><circle cx="42" cy="232" r="2" fill="#fff6c2"/></g>' +
      '<g class="carb"><rect x="0" y="246" width="48" height="11" rx="4" fill="#c9ced6"/></g>',
      sky("g5", "#0d1022", "#2a1e3a"));
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
  /* 1. George Washington Bridge Bus Station, Fort Washington Av at W 178th: Nervi's concrete butterfly roof over the ramps */
  function LM_grange() {
    let roof = "", vents = ""; for (let i = 0; i < 6; i++) { const x = 30 + i * 57; roof += '<path d="M' + x + ' 72l28.5 40 28.5-40v18l-28.5 40-28.5-40z" fill="#d2cdc0" stroke="#9a9486"/>'; vents += '<path d="M' + (x + 10) + ' 84l18.5 24 18.5-24z" fill="#38e8ff" opacity=".6"/><path d="M' + (x + 28.5) + ' 112v18" stroke="#9a9486" stroke-width="3"/>'; }
    const bus = (c) => LR(0, 0, 96, 34, "#e8eef2", ' rx="5"') + LR(0, 22, 96, 5, c) + [8, 30, 52].map(x => LR(x, 6, 18, 12, "#2a3440", ' rx="2"')).join("") + LR(76, 4, 16, 18, "#2a3440", ' rx="2"') + '<circle cx="20" cy="36" r="6" fill="#111"/><circle cx="76" cy="36" r="6" fill="#111"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(80, 26) + Lcloud(300, 40, .8, "lmd3") +
      /* the bridge's steel tower far off */
      '<g opacity=".45">' + LR(330, 20, 8, 76, "#5a6a7a") + LR(356, 20, 8, 76, "#5a6a7a") + '<path d="M330 30h34M330 54h34M330 78h34M334 30l26 24M360 30l-26 24" stroke="#5a6a7a" stroke-width="2"/><path d="M300 22q30 40 34 60M364 22q30 30 36 40" stroke="#5a6a7a" fill="none"/></g>' +
      /* the folded concrete roof */
      LR(30, 66, 342, 8, "#b8b2a4") + roof + vents + LR(30, 128, 342, 12, "#a8a294") +
      [50, 140, 230, 320].map(x => '<path d="M' + x + ' 140l8 60h8l8-60z" fill="#b8b2a4"/>').join("") +
      /* ramp + buses */
      '<path d="M0 214L400 180v16L0 232z" fill="#8a8478"/><path d="M0 214L400 180" stroke="#eab308" stroke-width="2"/>' +
      '<g class="lm-car" style="animation-duration:10s"><g transform="translate(0 168) rotate(-4.8)">' + bus("#ff3b4e") + '</g></g>' +
      LR(0, 232, 400, 28, "#3a3a40") + '<g transform="translate(150 150)">' + bus("#38e8ff") + '</g>' + '<g class="lm-carb">' + Lauto(0, 232, "#38e8ff") + '</g>' +
      LR(8, 8, 220, 34, "#0e2a3a", ' rx="3"') + LT("GEORGE WASHINGTON BRIDGE", 118, 22, 10.5, "#38e8ff") + LT("BUS STATION · FT WASHINGTON AV &amp; W 178", 118, 35, 8, "#fff") +
      tag("MELII", 290, 160, 30, "#38e8ff", -5) + tag("CHUCHI", 18, 196, 16, "#ff3b4e", -6),
      sky("sk", "#7fb8e6", "#f2e8d0"));
  }
  /* 2. Inwood Hill Park: the salt marsh and the last forest under the Henry Hudson Bridge's steel arch */
  function LM_colmado() {
    let reeds = ""; for (let x = 0; x < 400; x += 8) reeds += '<path class="lm-sway' + (x % 3 ? " lmd1" : "") + '" d="M' + x + ' 236q' + (x % 2 ? 3 : -3) + '-14 ' + (x % 2 ? 5 : -2) + '-28" stroke="' + (x % 16 ? "#9aa848" : "#c8b45a") + '" stroke-width="3" fill="none"/>';
    let hang = ""; for (let x = 136; x <= 264; x += 16) { const y = 104 + Math.pow((x - 200) / 64, 2) * 34; hang += '<path d="M' + x + ' 70V' + y + '" stroke="#3a5a7a" stroke-width="2"/>'; }
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(60, 20) + Lcloud(320, 30, .8, "lmd2") +
      /* forested hill on both sides */
      '<path d="M0 160V90q40-30 90-20t60 30v60z" fill="#2f5a2e"/><path d="M400 160V80q-40-24-90-14t-60 34v60z" fill="#2a522a"/>' +
      [20, 60, 100, 300, 340, 380].map((x, i) => Ltree(x, 92 + (i % 3) * 8, 18, i % 2 ? "#3f7a3a" : "#2f6b30", i % 2 ? "lmd1" : "")).join("") +
      /* the Henry Hudson Bridge: steel arch with the deck on top */
      LR(110, 62, 180, 8, "#3a5a7a") + '<path d="M120 138q80-110 160 0" stroke="#3a5a7a" stroke-width="7" fill="none"/>' + hang +
      '<g class="lm-car" style="animation-duration:5s">' + Lauto(0, 46, "#ff3b4e") + '</g>' +
      /* Spuyten Duyvil water + marsh */
      LR(0, 136, 400, 72, "#3f7aa6") + '<g class="lm-wav"><path d="M20 160h360M0 186h400" stroke="#7ab0d8" stroke-width="2" stroke-dasharray="14 20"/></g>' +
      '<g class="lm-car" style="animation-duration:26s"><path d="M0 150h30l-5 6H5z" fill="#f4f0e6"/><path d="M14 150v-20l10 18z" fill="#38e8ff"/></g>' +
      '<path d="M0 208h400v52H0z" fill="#6a7a3a"/>' + reeds +
      /* great egret */
      '<g class="lm-bob"><ellipse cx="330" cy="218" rx="12" ry="6" fill="#fff"/><path d="M340 216q8-14 2-22" stroke="#fff" stroke-width="3" fill="none"/><path d="M342 194l9 2" stroke="#e8b84a" stroke-width="2"/><path d="M326 224l-2 14M332 224l0 14" stroke="#222" stroke-width="1.5"/></g>' +
      LR(8, 214, 176, 34, "#0e2a1e", ' rx="3"') + LT("INWOOD HILL PARK", 96, 229, 12, "#fff") + LT("HENRY HUDSON BRIDGE · SALT MARSH", 96, 242, 8, "#38e8ff") +
      tag("MELII", 220, 254, 28, "#38e8ff", -4) + tag("DOMINICANA", 296, 132, 15, "#ff3b4e", -4),
      sky("sk", "#86c0ea", "#f0ecd6"));
  }

  window.SCENES = { train, grange: LM_grange, colmado: LM_colmado, lighthouse, corner };
})();
