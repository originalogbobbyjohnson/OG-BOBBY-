/* Morrisania opening scenes for the Cuban Link game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes spray{0%{transform:scaleY(.7);opacity:.6}50%{transform:scaleY(1.1);opacity:.95}100%{transform:scaleY(.7);opacity:.6}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:spray 1.4s ease-in-out infinite}' +
    '@keyframes ripple{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}' +
    '.rip{transform-box:fill-box;transform-origin:50% 50%;animation:ripple 2.6s ease-out infinite}.rip2{animation-delay:1.3s}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}' +
    '.swim{animation:swim 7s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-8deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.8s ease-in-out infinite}' +
    '@keyframes slap{0%,70%,100%{transform:translateY(0)}80%{transform:translateY(-10px)}}' +
    '.slap{animation:slap 2.4s ease-in infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(16px,-46px);opacity:0}}' +
    '.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
    '@keyframes bird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}' +
    '.bird{animation:bird 12s linear infinite}.bird2{animation-delay:4s}' +
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
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* the Cuban flag: five blue and white stripes, red triangle, white star */
  const cubaFlag = (x, y, w) => {
    const h = w / 2, sh = h / 5;
    let s = '<g class="flag">';
    for (let i = 0; i < 5; i++) s += '<rect x="' + x + '" y="' + (y + i * sh) + '" width="' + w + '" height="' + sh + '" fill="' + (i % 2 ? "#ffffff" : "#002a8f") + '"/>';
    s += '<path d="M' + x + ' ' + y + 'l' + (h * 0.87) + ' ' + (h / 2) + 'l-' + (h * 0.87) + ' ' + (h / 2) + 'z" fill="#cf142b"/>';
    const cx = x + h * 0.3, cy = y + h / 2, r = h * 0.16; let d = "";
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); }
    return s + '<path d="' + d + 'Z" fill="#fff"/></g>';
  };
  const RED = "#ee352e", GRN = "#00933c", GOLD = "#ffb347", BLUE = "#3b6cff", CRED = "#ff3b4a";

  /* 1. The 2 pulling into Simpson St, up on the el over Westchester Av, the ornate station house in the middle of the tracks */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#4a5a3a"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#4a5a3a" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#ffe6c9" opacity=".85"/>';
    let bldgs = "";
    [[0, 60, 70], [74, 40, 60], [140, 70, 80], [224, 50, 66], [294, 66, 106]].forEach(([x, y, w], i) => {
      bldgs += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="160" fill="' + (i % 2 ? "#5a2e26" : "#4a2620") + '"/>';
      for (let r = 0; r < 4; r++) for (let c = 0; c < Math.floor(w / 18); c++) bldgs += '<rect' + ((r + c + i) % 4 === 0 ? ' class="flk flk' + (2 + i % 2) + '"' : '') + ' x="' + (x + 6 + c * 18) + '" y="' + (y + 8 + r * 18) + '" width="8" height="10" fill="' + ((r + c + i) % 4 === 0 ? "#ffd27a" : "#24130f") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(16) +
      '<circle cx="60" cy="34" r="14" fill="#fff3d6" opacity=".9"/>' + bldgs +
      '<rect x="0" y="50" width="400" height="10" fill="#4a5a3a"/>' + girders +
      /* station sign */
      '<rect x="80" y="66" width="240" height="34" rx="4" fill="#111"/>' +
      '<rect x="80" y="66" width="240" height="4" fill="#fff"/>' +
      '<text x="94" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Simpson St</text>' +
      bullet(272, 84, "2", RED) + bullet(298, 84, "5", GRN) +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + RED + '"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "2", RED) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1d1712"/>' +
      tag("CLK", 30, 240, 34, GOLD, -4) + tag("LA CALLE", 220, 242, 30, BLUE, -8),
      sky("g1", "#140c1e", "#6a3b4a"));
  }

  /* 2. Crotona Park: Indian Lake at sunset, the fountain jet going, ducks crossing, big trees all around */
  function crotona() {
    let trees = "";
    [[20, 120, 46], [80, 110, 40], [330, 112, 44], [384, 124, 38], [150, 128, 30], [262, 126, 32]].forEach(([x, y, r], i) => {
      trees += '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="40" fill="#3a2a1a"/><circle cx="' + x + '" cy="' + (y - r / 3) + '" r="' + r + '" fill="' + ["#2f6b2a", "#d9822b", "#3c7a32", "#c25a1f", "#e0a52c", "#2f6b2a"][i] + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="300" cy="70" r="22" fill="#ffcf7a" opacity=".9"/>' +
      '<path class="bird" d="M0 40q6-6 12 0q6-6 12 0" stroke="#2a1a1a" stroke-width="2" fill="none"/><path class="bird bird2" d="M0 56q5-5 10 0q5-5 10 0" stroke="#2a1a1a" stroke-width="2" fill="none"/>' +
      trees +
      '<rect x="0" y="150" width="400" height="16" fill="#3b6b2a"/>' +
      /* the lake */
      '<ellipse cx="200" cy="200" rx="210" ry="48" fill="#2c5d78"/><ellipse cx="200" cy="196" rx="190" ry="36" fill="#3a7192"/>' +
      '<path d="M120 196h160" stroke="#ffcf7a" stroke-width="2" opacity=".5"/><path d="M150 206h100" stroke="#ffcf7a" stroke-width="2" opacity=".35"/>' +
      /* fountain */
      '<path class="jet" d="M196 196q-6-40 4-62q10 22 4 62z" fill="#d8f0ff" opacity=".85"/>' +
      '<ellipse class="rip" cx="200" cy="198" rx="20" ry="5" fill="none" stroke="#d8f0ff" stroke-width="1.5"/><ellipse class="rip rip2" cx="200" cy="198" rx="20" ry="5" fill="none" stroke="#d8f0ff" stroke-width="1.5"/>' +
      /* ducks */
      '<g class="swim"><path d="M70 214q4-8 14-4l4-6q4 0 4 4l-3 4q2 6-6 8h-12q-4 0-1-6z" fill="#f4ecd8"/><path d="M88 206l5 1" stroke="#e0a52c" stroke-width="2"/>' +
      '<path d="M100 222q4-8 14-4l4-6q4 0 4 4l-3 4q2 6-6 8h-12q-4 0-1-6z" fill="#5a4a3a"/><path d="M118 214l5 1" stroke="#e0a52c" stroke-width="2"/></g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#3b6b2a"/>' +
      '<rect x="120" y="14" width="160" height="34" rx="4" fill="#0f6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="30" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="2" fill="#fff">CROTONA PARK</text>' +
      '<text x="200" y="43" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="#ffe7a1">INDIAN LAKE</text>',
      sky("g2", "#3a2a5a", "#f08a4b"));
  }

  /* 3. Morris High School on Boston Road (1904): red brick with cream terra-cotta trim, the tall Gothic tower with turrets, Tudor-arch entrance and steps */
  function morris() {
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) {
      if (c === 4 || c === 5) continue;
      const x = 34 + c * 34, y = 118 + r * 24, lit = (r * 3 + c) % 5 === 0;
      wins += '<rect' + (lit ? ' class="flk flk' + (2 + c % 2) + '"' : '') + ' x="' + x + '" y="' + y + '" width="14" height="16" fill="' + (lit ? "#ffd889" : "#24130f") + '" stroke="#efe2c4" stroke-width="1.5"/><path d="M' + (x + 7) + ' ' + y + 'v16" stroke="#efe2c4" stroke-width="1"/>';
    }
    const turret = x => '<rect x="' + x + '" y="34" width="10" height="56" fill="#efe2c4"/><path d="M' + (x - 1) + ' 34l6-16 6 16z" fill="#efe2c4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(14) +
      /* main block */
      '<rect x="24" y="106" width="352" height="116" fill="#8e3a2a"/>' +
      '<rect x="24" y="100" width="352" height="8" fill="#efe2c4"/>' +
      (function () { let b = ""; for (let x = 24; x < 376; x += 12) b += '<rect x="' + x + '" y="94" width="7" height="7" fill="#efe2c4"/>'; return b; })() +
      wins +
      /* end gables */
      '<path d="M24 106v-24l22-18 22 18v24z" fill="#8e3a2a" stroke="#efe2c4" stroke-width="2"/><path d="M332 106v-24l22-18 22 18v24z" fill="#8e3a2a" stroke="#efe2c4" stroke-width="2"/>' +
      /* central tower */
      '<rect x="166" y="40" width="68" height="182" fill="#8a3626"/>' +
      '<rect x="166" y="86" width="68" height="4" fill="#efe2c4"/>' + turret(160) + turret(224) +
      '<rect x="176" y="30" width="48" height="12" fill="#efe2c4"/>' +
      (function () { let b = ""; for (let x = 176; x < 224; x += 8) b += '<rect x="' + x + '" y="24" width="5" height="7" fill="#efe2c4"/>'; return b; })() +
      '<path d="M188 80v-26a12 12 0 0 1 24 0v26z" fill="#24130f" stroke="#efe2c4" stroke-width="2"/><path class="flk" d="M192 80v-22a8 8 0 0 1 16 0v22z" fill="#ffd889" opacity=".55"/>' +
      /* the oriel and inscription band */
      '<rect x="176" y="96" width="48" height="10" fill="#efe2c4"/><text x="200" y="104" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="5.5" letter-spacing=".5" fill="#5a2018">MORRIS HIGH SCHOOL</text>' +
      '<rect x="182" y="114" width="36" height="50" fill="#24130f" stroke="#efe2c4" stroke-width="2"/><path d="M194 114v50M206 114v50M182 132h36M182 148h36" stroke="#efe2c4" stroke-width="1.2"/>' +
      /* Tudor arch entrance with steps */
      '<path d="M180 222v-30q0-12 20-16q20 4 20 16v30z" fill="#2a1410" stroke="#efe2c4" stroke-width="3"/>' +
      '<rect x="170" y="222" width="60" height="5" fill="#b5b0a6"/><rect x="160" y="227" width="80" height="5" fill="#a19c92"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#4a4a4e"/>' +
      '<rect x="292" y="238" width="96" height="18" rx="3" fill="#0f6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="340" y="251" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Boston Rd</text>',
      sky("g3", "#0e1426", "#4a4466"));
  }


  /* 5. E 167th St and Prospect Av ("167 Street between Union and Prospect"): green street signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 220; y += 12) for (let x = (y / 12) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="10" fill="#7a3a26"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(26) +
      '<rect x="0" y="94" width="400" height="128" fill="#4f2418"/>' + bricks +
      tag("TS", 40, 170, 48, GOLD, -6) + tag("LA CALLE", 140, 150, 32, BLUE, -4) + tag("CLK", 290, 204, 40, CRED, -8) +
      '<rect x="0" y="222" width="400" height="38" fill="#5d5f63"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="318" y="40" width="5" height="182" fill="#2f3a2f"/><path d="M320 42q0-12-20-12h-16" stroke="#2f3a2f" stroke-width="4" fill="none"/>' +
      '<rect x="268" y="28" width="20" height="7" rx="2" fill="#2f3a2f"/><path class="flk" d="M270 35h16l12 40h-40z" fill="#ffe7a1" opacity=".22"/>' +
      '<rect x="20" y="40" width="112" height="20" rx="3" fill="#0f6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="76" y="55" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">E 167 St</text>' +
      '<rect x="20" y="62" width="112" height="20" rx="3" fill="#0f6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="76" y="77" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Prospect Av</text>',
      sky("g5", "#0a0a1c", "#3a2238"));
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
  /* 3. The old 41st Precinct, "Fort Apache", 1086 Simpson St: the gray stone station house by his Simpson St stop, green lamps at the door */
  function LM_casita() {
    let rust = ""; for (let y = 96; y < 230; y += 10) rust += '<path d="M90 ' + y + 'h220" stroke="#8a8c88" stroke-width="1"/>';
    const lamp = (x, d) => LR(x - 2, 176, 4, 26, "#1a2a1a") + '<g class="lm-pls ' + d + '"><circle cx="' + x + '" cy="170" r="9" fill="#3fbf6a"/></g><circle cx="' + x + '" cy="170" r="9" fill="none" stroke="#1a3a1a" stroke-width="2"/>' + LT("41", x, 173, 7, "#fff");
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lstars(12) + '<circle cx="350" cy="34" r="12" fill="#fff1d6"/>' +
      Lbrick(0, 110, 84, 126, "#7a3a2c", "#6a2e22") + Lwin(10, 122, 3, 3, 24, 32, 14, 20, "#ffd77a", "#2a1a14") + Lbrick(316, 100, 84, 136, "#8a5a44", "#7a4a36") + Lwin(326, 112, 3, 4, 24, 30, 14, 18, "#ffd77a", "#2a1a14") +
      /* the station house */
      LR(90, 90, 220, 146, "#a8aaa4") + rust + LR(84, 80, 232, 12, "#8a8c88") + LT("41ST PRECINCT · NYPD", 200, 90, 9, "#f4f2ea") + LR(80, 74, 240, 8, "#6a6c68") +
      [110, 150, 230, 270].map(x => LR(x, 100, 20, 28, "#2a3440") + LR(x, 140, 20, 28, "#2a3440") + LR(x + 3, 103, 14, 12, "#ffd77a", ' opacity=".6"')).join("") +
      [106, 146, 186, 226, 266].map(x => '<path d="M' + x + ' 236v-36q14-18 28 0v36z" fill="#2a3440" stroke="#d8d8d0" stroke-width="2"/>').join("") +
      LR(186, 200, 28, 36, "#3a2a1a") + lamp(176, "") + lamp(224, "lmd1") +
      LR(0, 236, 400, 24, "#2a2a30") + '<path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' + '<g class="lm-car">' + Lauto(0, 226, "#3b6cff") + '</g>' +
      LR(80, 6, 240, 34, "#111", ' rx="3"') + LT("“FORT APACHE” · THE OLD 41ST", 200, 21, 11, "#ffb347") + LT("1086 SIMPSON ST · BY THE SIMPSON ST STOP", 200, 34, 8, "#fff") +
      tag("CUBAN LINK", 8, 104, 20, "#ffb347", -5) + tag("LA CALLE", 318, 92, 14, "#ff3b4a", -4),
      sky("sk", "#141a36", "#4a3a5a"));
  }

  window.SCENES = { train: train, crotona: crotona, morris: morris, casita: LM_casita, corner: corner };
})();
