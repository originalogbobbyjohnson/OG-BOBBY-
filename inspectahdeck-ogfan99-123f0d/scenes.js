/* Clifton and Park Hill, Staten Island opening scenes for Inspectah Deck's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1s steps(1) infinite}.b2{animation-delay:-.25s}.b3{animation-delay:-.5s}.b4{animation-delay:-.75s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sway{animation:sway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}.sw2{animation-delay:-1.5s}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:.0}20%{opacity:.6}100%{transform:translateY(-60px);opacity:0}}.rise{animation:rise 4s linear infinite}.r2{animation-delay:-1.3s}.r3{animation-delay:-2.6s}' +
    '@keyframes slide{from{transform:translateX(-140px)}to{transform:translateX(480px)}}.slide{animation:slide 20s linear infinite;animation-delay:-6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.lift{animation:lift 1.6s ease-in-out infinite}' +
    '@keyframes shoot{0%{transform:translate(0,0);opacity:0}10%{opacity:1}40%{transform:translate(-160px,70px);opacity:0}100%{opacity:0;transform:translate(-160px,70px)}}.shoot{animation:shoot 5s ease-out infinite}' +
    '@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}.pls{animation:pulse 2.4s ease-in-out infinite}.p2{animation-delay:-1.2s}' +
    '@keyframes run{from{transform:translateX(0)}to{transform:translateX(300px)}}.run{animation:run 5s linear infinite}.rn2{animation-delay:-2.5s}' +
    '@keyframes splash{0%,100%{transform:scale(.6);opacity:0}40%{transform:scale(1);opacity:.9}}.spl{animation:splash 1.6s ease-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes pop{0%,100%{transform:scale(.85)}50%{transform:scale(1.08)}}.pop{animation:pop 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes rain{from{transform:translate(0,-40px)}to{transform:translate(-20px,260px)}}.rain{animation:rain .9s linear infinite}.rn3{animation-delay:-.45s}' +
    '@keyframes hop{0%,40%,100%{transform:translate(0,0)}20%{transform:translate(0,-14px)}}.hop{animation:hop 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) => '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* the SIR car: stainless with the blue band, w long, top-left at x,y */
  const sirCar = (x, y, w) => { let win = ""; for (let i = x + 16; i < x + w - 76; i += 42) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="28" height="19" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 35) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 46) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 46, y + 20); };
  /* black station sign */
  const stSign = (x, y, w, name) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="32" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 12) + '" y="' + (y + 24) + '" ' + FONT + ' font-size="16" fill="#fff">' + name + '</text>' + sir(x + w - 24, y + 17);
  /* green NYC street sign blade */
  const blade = (cx, y, txt) => { const w = txt.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + cx + '" y="' + (y + 13) + '" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + txt + '</text>'; };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(28, x + w - Math.max(x, xx)) + '" height="10" fill="' + mortar + '"/>'; return b; };
  /* street corner: wall with tags, streetlight, two street blades */
  const corner = (g, s1, s2, tags, accent) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
    brick(16, 60, 240, 160, "#4a2a24", "#5a3229") + '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) +
    '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
    sky("g5", g[0], g[1]));
  const PINK = "#ff6fb5", GOLD = "#f2c14e", CYAN = "#5ec8ff";

  /* 1. Clifton: the SIR on its embankment in the rain at night, the canopy lights on, Bay St below */
  function station() {
    let rain = "";
    for (let i = 0; i < 26; i++) rain += '<path class="rain' + (i % 2 ? " rn3" : "") + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 23) % 60) + 'l-3 12" stroke="#9fc4e8" stroke-width="1.2" opacity=".6"/>';
    return svg('<rect width="400" height="260" fill="url(#g1)"/>' +
      '<path d="M0 110l40-20 30 14 40-30 30 22 50-26 40 30 40-18 50 22 40-16 40 20v20H0z" fill="#1a2238"/>' +
      /* the beige canopy */
      '<rect x="0" y="20" width="400" height="8" fill="#c8b48a"/><rect x="0" y="28" width="400" height="3" fill="#0039a6"/>' +
      '<rect x="50" y="31" width="5" height="64" fill="#8a7a5a"/><rect x="345" y="31" width="5" height="64" fill="#8a7a5a"/>' +
      '<circle class="flk" cx="120" cy="34" r="3" fill="#fff4c8"/><circle class="flk flk2" cx="280" cy="34" r="3" fill="#fff4c8"/>' +
      stSign(118, 42, 164, "Clifton") +
      '<g class="anim-train">' + sirCar(10, 92, 300) + '</g>' +
      '<rect x="0" y="146" width="400" height="7" fill="#eab308"/><rect x="0" y="153" width="400" height="10" fill="#5a5f68"/>' +
      /* the stone embankment wall down to Bay St */
      brick(0, 163, 400, 60, "#6a6458", "#7a7466") +
      '<rect x="0" y="223" width="400" height="37" fill="#1a1d22"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<path class="pls" d="M40 252h70M200 250h90" stroke="#ffd98a" stroke-width="3" opacity=".4"/>' +
      rain + tag("REBEL INS", 230, 210, 26, PINK, -5),
      sky("g1", "#0a0f22", "#2a3550"));
  }

  /* 2. Bayley Seton on Vanderbilt Ave: the 1930s Mayan Revival hospital tower, buff brick stepping back, the flag flying */
  function bayley() {
    let win = "";
    for (let y = 86; y < 200; y += 16) for (let x = 110; x < 292; x += 18) if (!(y < 110 && (x < 150 || x > 250))) win += '<rect x="' + x + '" y="' + y + '" width="8" height="10" fill="' + ((x + y) % 3 ? "#3a4a5a" : "#ffe6a8") + '"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="64" cy="48" r="16" fill="#fff3c4"/>' +
      /* side wings */
      '<rect x="20" y="130" width="90" height="80" fill="#d8c49a" stroke="#a8946a" stroke-width="2"/><rect x="290" y="130" width="90" height="80" fill="#d8c49a" stroke="#a8946a" stroke-width="2"/>' +
      '<path d="M30 146h70M30 166h70M30 186h70M300 146h70M300 166h70M300 186h70" stroke="#5a6a7a" stroke-width="6" stroke-dasharray="8 6"/>' +
      /* the stepped tower */
      '<rect x="100" y="100" width="200" height="110" fill="#e2cfa4" stroke="#a8946a" stroke-width="2"/>' +
      '<rect x="140" y="76" width="120" height="26" fill="#e2cfa4" stroke="#a8946a" stroke-width="2"/>' +
      '<rect x="166" y="54" width="68" height="24" fill="#e2cfa4" stroke="#a8946a" stroke-width="2"/>' +
      '<rect x="184" y="40" width="32" height="16" fill="#e2cfa4" stroke="#a8946a" stroke-width="2"/>' +
      /* the Mayan-style zigzag bands */
      '<path d="M140 80l6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4" stroke="#b5824a" stroke-width="2" fill="none"/>' +
      '<path d="M100 104l8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5" stroke="#b5824a" stroke-width="2" fill="none"/>' +
      win +
      /* the flag on top */
      '<path d="M200 40V10" stroke="#555" stroke-width="2"/><g class="sway" style="transform-box:view-box;transform-origin:200px 12px"><path d="M200 12h26v14h-26z" fill="#b22234"/><path d="M200 15h26M200 19h26M200 23h26" stroke="#fff" stroke-width="1.6"/><rect x="200" y="12" width="11" height="8" fill="#3c3b6e"/></g>' +
      /* the lawn and the drive */
      '<rect x="0" y="210" width="400" height="50" fill="#5a8a3a"/><path d="M170 260l14-50h32l14 50z" fill="#b8b2a4"/>' +
      '<rect x="180" y="190" width="40" height="20" fill="#3a2e24"/>' +
      tag("CLIFTON", 20, 250, 26, PINK, -3),
      sky("g2", "#6eaee0", "#e8e0c8"));
  }


  /* 4. Park Hill rooftop at night, drawn like a comic book page: water tower, the towers lit up, a big KRAK! burst */
  function comic() {
    let wins = "";
    [[30, 60, 70], [120, 40, 60], [260, 70, 64], [340, 50, 56]].forEach(b => { wins += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (160 - b[1]) + '" fill="#2a1f3a" stroke="#000" stroke-width="3"/>';
      for (let y = b[1] + 8; y < 150; y += 14) for (let x = b[0] + 6; x < b[0] + b[2] - 8; x += 14) wins += '<rect class="' + ((x + y) % 4 ? "" : "pls") + '" x="' + x + '" y="' + y + '" width="7" height="7" fill="' + ((x * y) % 5 ? "#ffd98a" : "#3a2e4a") + '"/>'; });
    let dots = "";
    for (let y = 8; y < 60; y += 8) for (let x = (y / 8) % 2 ? 4 : 8; x < 400; x += 8) dots += '<circle cx="' + x + '" cy="' + y + '" r="1.4" fill="#ff6fb5" opacity=".35"/>';
    return svg('<rect width="400" height="260" fill="#14102a"/>' + dots + wins +
      /* the rooftop */
      '<rect x="0" y="160" width="400" height="100" fill="#3a3448" stroke="#000" stroke-width="4"/><path d="M0 172h400" stroke="#000" stroke-width="3"/>' +
      /* water tower */
      '<path d="M40 160l6-40M90 160l-6-40M48 140h34" stroke="#000" stroke-width="3"/><rect x="40" y="88" width="50" height="34" fill="#8a5a3a" stroke="#000" stroke-width="3"/><path d="M36 90l29-20 29 20z" fill="#5a3a22" stroke="#000" stroke-width="3" stroke-linejoin="round"/>' +
      /* the KRAK! burst */
      '<g class="pop"><path d="M250 120l14-30 6 22 22-26-4 28 30-10-20 22 30 8-30 8 18 22-28-8 2 28-18-22-12 26-6-28-24 14 10-24-28-2 24-14-20-18 28 4z" fill="' + GOLD + '" stroke="#000" stroke-width="3" stroke-linejoin="round"/>' +
      '<text x="282" y="136" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="#d7263d" stroke="#000" stroke-width="2" paint-order="stroke" transform="rotate(-8 282 130)">KRAK!</text></g>' +
      /* panel borders */
      '<rect x="4" y="4" width="392" height="252" fill="none" stroke="#f6efdc" stroke-width="6"/><path d="M4 180h392" stroke="#f6efdc" stroke-width="6"/>' +
      '<rect x="20" y="192" width="200" height="30" fill="#f6efdc" stroke="#000" stroke-width="2"/><text x="28" y="212" font-family="Anton, Impact, sans-serif" font-size="12" fill="#14102a">MEANWHILE, IN PARK HILL...</text>' +
      tag("CZARFACE", 230, 244, 26, CYAN, -4),
      "");
  }

  /* 5. Vanderbilt Ave and Tompkins Ave in Clifton */
  function block() {
    return corner(["#0d1022", "#3a2a3a"], "Vanderbilt Av", "Tompkins Av",
      tag("DECK", 26, 116, 50, PINK, -7) + tag("INSPECTAH", 36, 154, 26, GOLD, -4) + tag("C.R.E.A.M.", 120, 190, 24, CYAN, -3) + tag("WU-TANG", 30, 214, 22, "#f6efdc", -2), PINK);
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
  /* 2. Fort Wadsworth's Battery Weed: the 1860s granite fort at the water's edge, three tiers of gun ports, the Verrazzano tower overhead */
  function LM_cottage() {
    let ports = ""; [0, 1, 2].forEach(r => { for (let x = 92 + r * 0; x < 320; x += 22) ports += '<path d="M' + x + ' ' + (178 - r * 34) + 'v-14q6-8 12 0v14z" fill="#2a2e34"/>'; });
    let blocks = ""; for (let y = 104; y < 200; y += 8) blocks += '<path d="M80 ' + y + 'h240" stroke="#8e9296" stroke-width=".8"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(120, 24) +
      /* Verrazzano: tower on the right, deck across the top, main cable */
      LR(300, 0, 14, 120, "#c9ced4") + LR(338, 0, 14, 120, "#c9ced4") + LR(300, 20, 52, 8, "#c9ced4") + LR(300, 70, 52, 6, "#c9ced4") +
      '<path d="M0 30Q160 70 306 4" stroke="#8a96a4" stroke-width="3" fill="none"/>' + LR(0, 52, 400, 8, "#9aa4ae") + LR(0, 60, 400, 3, "#6a7480") +
      '<g class="lm-car" style="animation-duration:6s">' + Lauto(0, 36, "#ff6fb5") + '</g>' +
      /* the Narrows */
      LR(0, 150, 400, 110, "#3f6f96") + '<g class="lm-wav"><path d="M0 214h400M20 240h360" stroke="#7aa8cc" stroke-width="2" stroke-dasharray="14 20"/></g>' +
      '<g class="lm-carb" style="animation-duration:22s"><path d="M0 200h80l-10 12H10z" fill="#3a3a44"/>' + LR(46, 186, 20, 14, "#e8e8e8") + '</g>' +
      /* the fort */
      '<path d="M60 206l20-110h240l20 110z" fill="#a8acb0"/>' + blocks + ports + LR(76, 90, 248, 8, "#8e9296") +
      [90, 150, 210, 270].map(x => LR(x, 82, 10, 8, "#8e9296")).join("") +
      '<path d="M200 82v-26" stroke="#333" stroke-width="2"/><path class="lm-flag" d="M201 56h22l-4 5 4 5h-22z" fill="#c8102e"/>' +
      /* green lawn bank on the left */
      '<path d="M0 150q30-10 70 4l-10 52H0z" fill="#4f8a3c"/>' +
      LR(8, 112, 150, 34, "#111", ' rx="3" opacity=".85"') + LT("BATTERY WEED", 83, 127, 12, "#f2c14e") + LT("FORT WADSWORTH · THE NARROWS", 83, 140, 7.5, "#fff") +
      tag("REBEL INS", 30, 250, 26, "#ff6fb5", -4) + tag("WU-TANG", 260, 252, 18, "#f2c14e", -3),
      sky("sk", "#7fb8e6", "#eaeef0"));
  }

  window.SCENES = { station, bayley, cottage: LM_cottage, comic, block };
})();
