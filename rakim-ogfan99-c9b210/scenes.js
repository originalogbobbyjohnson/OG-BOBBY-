/* Wyandanch / Long Island opening scenes for the Rakim game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.gull{animation:glide 12s linear infinite}.gull2{animation-delay:-5s}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 5s linear infinite}.car2{animation-delay:-2.4s}' +
    '@keyframes back{from{transform:translateX(460px)}to{transform:translateX(-120px)}}' +
    '.carb{animation:back 6s linear infinite}.carb2{animation-delay:-3.1s}' +
    '@keyframes bob{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(3px) rotate(1.5deg)}}' +
    '.bob{transform-box:fill-box;transform-origin:50% 100%;animation:bob 3.2s ease-in-out infinite}.bob2{animation-delay:1.3s}' +
    '@keyframes sweep{0%,100%{opacity:0}40%,60%{opacity:.3}}' +
    '.beamL{animation:sweep 4s ease-in-out infinite}.beamR{animation:sweep 4s ease-in-out infinite;animation-delay:2s}' +
    '@keyframes surf{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.surf{animation:surf 4s ease-in-out infinite}.surf2{animation-delay:2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const gull = (x, y, cls) => '<path class="gull ' + (cls || "") + '" d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" stroke="#f4f4f4" stroke-width="2" fill="none"/>';
  const GOLD = "#e8b84a", WHITE = "#ffffff", BLUE = "#3fa7d6", LIRR = "#0039a6";

  /* 1. LIRR Ronkonkoma Branch pulling into Wyandanch: at grade, new canopies, the overpass with its elevator towers */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let truss = "";
    for (let x = 96; x < 304; x += 16) truss += '<path d="M' + x + ' 30l8 14l8-14" stroke="#5a6b7c" stroke-width="2" fill="none"/>';
    let trees = "";
    for (let x = -10; x < 410; x += 26) trees += '<circle cx="' + x + '" cy="' + (104 + (x * 7) % 8) + '" r="' + (16 + (x * 3) % 7) + '" fill="#1f3326"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) +
      '<circle cx="350" cy="30" r="13" fill="#fff1d6" opacity=".9"/>' + trees +
      /* the pedestrian overpass with elevator towers at each end */
      '<rect x="64" y="22" width="30" height="104" fill="#4a5a6b"/><rect x="306" y="22" width="30" height="104" fill="#4a5a6b"/>' +
      '<rect x="70" y="30" width="18" height="30" fill="#9fc6e8" opacity=".35"/><rect x="312" y="30" width="18" height="30" fill="#9fc6e8" opacity=".35"/>' +
      '<rect x="94" y="28" width="212" height="18" fill="#3b4856"/>' + truss +
      '<rect x="94" y="26" width="212" height="4" fill="#6b7d8f"/>' +
      /* platform canopy */
      '<path d="M0 58h400v6H0z" fill="#2b3440"/><path d="M0 52l400 0 0 6H0z" fill="#56606c"/>' +
      '<rect x="30" y="64" width="5" height="64" fill="#2b3440"/><rect x="198" y="64" width="5" height="64" fill="#2b3440"/><rect x="366" y="64" width="5" height="64" fill="#2b3440"/>' +
      '<circle class="flk" cx="110" cy="68" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="290" cy="68" r="3" fill="#ffe7a8"/>' +
      /* LIRR station sign */
      '<rect x="96" y="70" width="208" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="95" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="19" fill="#fff">Wyandanch</text>' +
      '<text x="104" y="106" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#dbe6f3">RONKONKOMA BRANCH</text>' +
      '<rect x="262" y="98" width="36" height="10" rx="2" fill="' + LIRR + '"/><text x="280" y="106" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">LIRR</text>' +
      /* train slides in and stops: stainless electric car with a blue band */
      '<g class="anim-train">' +
        '<rect x="8" y="126" width="304" height="56" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="304" height="6" fill="' + LIRR + '"/>' + windows +
        '<path d="M300 130h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="174" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="177" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#334">LIRR · RONKONKOMA</text>' +
      '</g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1a1d22"/>' +
      tag("WYANDANCH", 22, 238, 28, GOLD, -4) + tag("THE R", 296, 242, 30, WHITE, -7),
      sky("g1", "#0d1430", "#5a4a7a"));
  }

  /* 2. Jones Beach: the water tower ("the Pencil"), tan brick shaft, arched belfry, green copper point; the surf rolling in */
  function jones() {
    let bricks = "";
    for (let y = 104; y < 196; y += 8) bricks += '<path d="M181 ' + y + 'h38" stroke="#a9744a" stroke-width="1" opacity=".55"/>';
    let arches = "";
    for (let i = 0; i < 3; i++) arches += '<path d="M' + (185 + i * 11) + ' 96v-12q4-6 8 0v12z" fill="#2b1d12"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="80" cy="48" r="20" fill="#fff4c8"/><circle cx="80" cy="48" r="34" fill="#fff4c8" opacity=".2"/>' +
      gull(20, 60) + gull(60, 40, "gull2") +
      /* the tower */
      '<path d="M200 6l-14 58h28z" fill="#5fa58a" stroke="#3b7a62" stroke-width="1.5"/><path d="M200 6l-4 58" stroke="#8fd1b6" stroke-width="1.5" opacity=".7"/>' +
      '<rect x="182" y="64" width="36" height="6" fill="#d9b48a"/>' +
      '<rect x="182" y="70" width="36" height="30" fill="#c9905e"/>' + arches +
      '<rect x="180" y="100" width="40" height="5" fill="#e6cfa8"/>' +
      '<path d="M181 105h38l3 92h-44z" fill="#c08458"/>' + bricks +
      '<path d="M191 110v84M209 110v84" stroke="#a9744a" stroke-width="2"/>' +
      '<rect x="174" y="192" width="52" height="12" fill="#e6cfa8"/>' +
      /* low wing buildings */
      '<rect x="120" y="186" width="54" height="18" fill="#c99a6c"/><rect x="226" y="186" width="54" height="18" fill="#c99a6c"/>' +
      /* ocean + surf */
      '<rect x="0" y="206" width="400" height="22" fill="#2f78a8"/>' +
      '<path class="surf" d="M-20 214q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8f6ff" stroke-width="3" fill="none"/>' +
      '<path class="surf surf2" d="M-10 222q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe4f7" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#e9d3a6"/>' +
      /* beach umbrella + towel */
      '<path d="M300 236v-30" stroke="#5a3a1a" stroke-width="2"/><path d="M276 210q24-20 48 0z" fill="#e8b84a"/><path d="M288 210q12-18 24 0z" fill="#ffffff" opacity=".7"/>' +
      '<rect x="60" y="240" width="40" height="12" rx="2" fill="#3fa7d6"/><rect x="60" y="244" width="40" height="3" fill="#fff"/>',
      sky("g2", "#7cc3ea", "#d8eef8"));
  }

  /* 3. The Long Island Expressway at night: green overhead sign, the 495 shield, headlights one way, taillights the other */
  function lie() {
    let lamps = "";
    for (let x = 30; x < 400; x += 90) lamps += '<rect x="' + x + '" y="96" width="3" height="80" fill="#2a2f36"/><path d="M' + (x + 1) + ' 98q10-8 20-4" stroke="#2a2f36" stroke-width="3" fill="none"/><circle class="flk" cx="' + (x + 21) + '" cy="96" r="3.5" fill="#ffc46b"/>';
    let trees = "";
    for (let x = -10; x < 410; x += 22) trees += '<circle cx="' + x + '" cy="' + (162 + (x * 5) % 8) + '" r="' + (14 + (x * 3) % 6) + '" fill="#132219"/>';
    const car = (cls, y, body, lights, front) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="14" rx="4" fill="' + body + '"/><rect x="8" y="' + (y - 7) + '" width="28" height="9" rx="3" fill="' + body + '"/>' +
      '<rect x="12" y="' + (y - 5) + '" width="9" height="6" fill="#9fc6e8" opacity=".6"/><rect x="24" y="' + (y - 5) + '" width="9" height="6" fill="#9fc6e8" opacity=".6"/>' +
      '<circle cx="' + (front ? 44 : 2) + '" cy="' + (y + 6) + '" r="3" fill="' + lights + '"/><circle cx="8" cy="' + (y + 15) + '" r="4" fill="#111"/><circle cx="38" cy="' + (y + 15) + '" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(20) + trees +
      /* overhead gantry */
      '<rect x="60" y="22" width="6" height="160" fill="#4a525c"/><rect x="334" y="22" width="6" height="160" fill="#4a525c"/>' +
      '<rect x="60" y="24" width="280" height="6" fill="#4a525c"/>' +
      '<rect x="92" y="30" width="216" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      /* interstate shield */
      '<path d="M110 44h34v14q0 14-17 20q-17-6-17-20z" fill="#1d3f9e" stroke="#fff" stroke-width="1.5"/><path d="M110 44h34v7h-34z" fill="#c8102e"/>' +
      '<text x="127" y="70" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">495</text>' +
      '<text x="156" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">EAST</text>' +
      '<text x="156" y="68" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Long Island Expwy</text>' +
      '<text x="156" y="84" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#fff">Riverhead</text>' +
      lamps +
      /* the road */
      '<rect x="0" y="176" width="400" height="84" fill="#25282d"/>' +
      '<rect x="0" y="214" width="400" height="5" fill="#8a8f96"/>' +
      '<path d="M0 196h400M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("car", 184, "#e8b84a", "#fff6c2", true) + car("car car2", 184, "#c9ced6", "#fff6c2", true) +
      car("carb", 228, "#3fa7d6", "#ff3b30", false) + car("carb carb2", 228, "#e6e1d6", "#ff3b30", false),
      sky("g3", "#070b18", "#24304f"));
  }


  /* 5. The corner: Straight Path and Long Island Av, by the station, the crossing signal, a wall with the name on it */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="360" cy="34" r="14" fill="#fff1d6"/>' +
      /* brick wall with the tags */
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2a24"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a352c"/>'; return b; })() +
      tag("RAKIM", 30, 134, 46, WHITE, -7) + tag("ERIC B &amp; RA", 40, 180, 26, GOLD, -3) + tag("NO JOKE", 60, 210, 20, BLUE, -2) +
      /* railroad crossing signal */
      '<rect x="222" y="120" width="4" height="100" fill="#d9d9d9"/>' +
      '<path d="M206 112l36 20M242 112l-36 20" stroke="#fff" stroke-width="7"/><path d="M206 112l36 20M242 112l-36 20" stroke="#111" stroke-width="1" opacity=".4"/>' +
      '<rect x="210" y="140" width="28" height="12" rx="6" fill="#111"/><circle class="flk" cx="216" cy="146" r="4" fill="#ff3b30"/><circle class="flk flk2" cx="232" cy="146" r="4" fill="#ff3b30"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="258" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Straight Path</text>' +
      '<rect x="252" y="110" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Long Island Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a3a5a"));
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
  /* 3. Belmont Lake State Park, North Babylon (next to Wyandanch): the lake, paddle boats, willows */
  function LM_sound() {
    const willow = (x, y, d) => '<g class="lm-sway ' + d + '">' + LR(x - 4, y, 8, 60, "#5a4028") + '<path d="M' + (x - 34) + ' ' + (y + 50) + 'q-4-60 34-62q38 2 34 62" fill="#7aa83a"/>' +
      [-26, -16, -6, 4, 14, 24].map(k => '<path d="M' + (x + k) + ' ' + (y - 4) + 'q' + (k / 4) + ' 30 ' + (k / 2) + ' 58" stroke="#5a8a2a" stroke-width="3" fill="none"/>').join("") + '</g>';
    const paddle = (c, d) => '<g class="lm-bob ' + d + '"><path d="M0 0h44l-6 10H6z" fill="' + c + '"/>' + LR(10, -12, 22, 12, "#fff", ' rx="3"') + '<circle cx="22" cy="10" r="6" fill="none" stroke="#fff" stroke-width="2" class="lm-spin"/></g>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(90, 30) + Lcloud(300, 22, .8, "lmd3") +
      /* far shore woods */
      '<path d="M0 116q40-20 80-6t80-8 80 6 80-10 80 8v20H0z" fill="#2f5a2e"/>' +
      /* the lake */
      LR(0, 120, 400, 140, "#3f86b0") + '<g class="lm-wav"><path d="M30 150h340M0 180h400M40 214h320" stroke="#8ac0e0" stroke-width="2" stroke-dasharray="14 22"/></g>' +
      '<g class="lm-car" style="animation-duration:26s"><g transform="translate(0 150)">' + paddle("#e8b84a", "") + '</g></g>' + '<g class="lm-carb" style="animation-duration:32s"><g transform="translate(0 182)">' + paddle("#3fa7d6", "lmd1") + '</g></g>' +
      /* dock + boathouse */
      LR(260, 196, 120, 8, "#8a5a32") + [266, 300, 340, 374].map(x => LR(x, 204, 4, 14, "#5a3a1a")).join("") +
      '<path d="M300 196v-30l24-14 24 14v30z" fill="#e8e0cc"/><path d="M296 166l28-17 28 17" stroke="#5a2a1a" stroke-width="4" fill="none"/>' + LR(316, 176, 16, 20, "#3a2a1a") +
      /* shore and willows */
      '<path d="M0 260v-40q60-14 120 0v40z" fill="#5a9a44"/>' + willow(50, 140, "") + willow(390, 120, "lmd1") +
      '<g class="lm-car" style="animation-duration:20s"><path d="M0 70q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* swans */
      '<g class="lm-bob lmd2"><ellipse cx="200" cy="232" rx="12" ry="6" fill="#fff"/><path d="M208 230q6-12 0-18l5 1" stroke="#fff" stroke-width="3" fill="none"/></g>' +
      LR(110, 8, 200, 34, "#11281c", ' rx="3"') + LT("BELMONT LAKE STATE PARK", 210, 23, 11, "#fff") + LT("NORTH BABYLON · NEXT TO WYANDANCH", 210, 36, 8, "#e8b84a") +
      tag("RAKIM", 130, 254, 28, "#ffffff", -4) + tag("THE R", 300, 250, 18, "#e8b84a", -4),
      sky("sk", "#7ab8e6", "#eef0d8"));
  }

  window.SCENES = { train, jones, lie, sound: LM_sound, corner };
})();
