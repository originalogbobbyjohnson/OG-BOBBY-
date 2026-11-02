/* Flushing opening scenes for the Action Bronson game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-30px);opacity:0}}' +
    '.stm{animation:steam 2.6s ease-out infinite}.stm2{animation-delay:.9s}.stm3{animation-delay:1.7s}' +
    '@keyframes jet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.72)}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.6s ease-in-out infinite}.jet2{animation-delay:.5s}.jet3{animation-delay:1s}' +
    '@keyframes orbit{0%,100%{opacity:1}50%{opacity:.55}}' +
    '.orb{animation:orbit 3s ease-in-out infinite}' +
    '@keyframes ride{from{transform:translateX(420px)}to{transform:translateX(-330px)}}' +
    '.ride{animation:ride 9s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}' +
    '.swy{transform-box:fill-box;transform-origin:50% 0;animation:sway 2.6s ease-in-out infinite}.swy2{animation-delay:.6s}.swy3{animation-delay:1.2s}' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.cld{animation:drift 24s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.blk{animation:blink 1.8s infinite}.blk2{animation-delay:.6s}.blk3{animation-delay:1.2s}' +
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
  const GOLD = "#ffd23f", PURPLE = "#b933ad", CHILI = "#e8452c", STEEL = "#cfd6de";

  /* 1. The 7 pulling into Flushing–Main St, underground at the end of the line */
  function train() {
    let tiles = "";
    for (let y = 22; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfc8b4" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 22v96" stroke="#cfc8b4" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="104" width="8" height="8" fill="' + (x % 32 ? PURPLE : "#3c2a5a") + '"/>';
    let cols = "";
    [38, 362].forEach(x => cols += '<rect x="' + (x - 5) + '" y="16" width="10" height="164" fill="#232030"/><rect x="' + (x - 8) + '" y="16" width="16" height="6" fill="#232030"/>');
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#14111a"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#0c0a10"/>' +
      '<rect class="flk" x="70" y="10" width="90" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="240" y="10" width="90" height="4" rx="2" fill="#fff6d8"/>' +
      /* cream tile wall with a purple band */
      '<rect x="0" y="16" width="400" height="104" fill="#ebe4d0"/>' + tiles + band +
      '<rect x="0" y="16" width="400" height="6" fill="' + PURPLE + '"/>' +
      /* station sign */
      '<rect x="84" y="40" width="232" height="38" rx="4" fill="#111"/>' +
      '<rect x="84" y="40" width="232" height="4" fill="#fff"/>' +
      '<text x="98" y="68" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Flushing–Main St</text>' +
      bullet(292, 62, "7", PURPLE) +
      cols +
      /* the 7 slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(292, 140, "7", PURPLE) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1620"/>' +
      tag("BAKLAVA", 22, 238, 30, GOLD, -4) + tag("BAM BAM", 262, 240, 28, CHILI, -8));
  }


  /* 3. The New York State Pavilion: the three towers and the Tent of Tomorrow, the 7 rolling by on the el */
  function pavilion() {
    let tent = "";
    for (let i = 0; i < 9; i++) { const x = 196 + i * 22; tent += '<rect x="' + (x - 3) + '" y="118" width="6" height="84" fill="#e2a52e"/>'; }
    const tower = (x, top, deckW) =>
      '<rect x="' + (x - 7) + '" y="' + top + '" width="5" height="' + (202 - top) + '" fill="#b9b3a6"/><rect x="' + (x + 2) + '" y="' + top + '" width="5" height="' + (202 - top) + '" fill="#a39d91"/>' +
      '<path d="M' + (x - deckW) + ' ' + top + 'h' + (deckW * 2) + 'l-6 10h-' + (deckW * 2 - 12) + 'z" fill="#d8d1c2" stroke="#7a7466" stroke-width="1.5"/>' +
      '<rect x="' + (x - deckW + 6) + '" y="' + (top - 7) + '" width="' + (deckW * 2 - 12) + '" height="7" fill="#7a7466"/>' +
      '<rect class="blk" x="' + (x - 2) + '" y="' + (top - 12) + '" width="4" height="4" fill="#ff5a4f"/>';
    let el = "";
    for (let x = 0; x <= 400; x += 40) el += '<rect x="' + (x - 2) + '" y="220" width="4" height="40" fill="#3b3550"/>';
    let carWin = "";
    for (let x = 6; x < 300; x += 24) carWin += '<rect x="' + x + '" y="207" width="14" height="7" rx="1" fill="#ffe9b0" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p1)"/>' + stars(22) +
      '<circle cx="64" cy="40" r="14" fill="#fff4d6" opacity=".9"/>' +
      /* towers: short, middle, tall */
      tower(70, 168, 20) + tower(116, 108, 18) + tower(160, 48, 22) +
      /* Tent of Tomorrow: the ring of columns and roof band in that "American Cheese" yellow */
      '<path d="M190 112q90-16 180 0v10q-90-16-180 0z" fill="#f2b632" stroke="#a87412" stroke-width="1.5"/>' + tent +
      '<path d="M190 118q90-14 180 0" fill="none" stroke="#a87412" stroke-width="2"/>' +
      /* the park ground */
      '<rect x="0" y="200" width="400" height="20" fill="#1f3a2a"/>' +
      /* the el and the 7 running across */
      '<g class="ride"><rect x="0" y="202" width="310" height="16" rx="3" fill="#c3c8cf" stroke="#6b7280" stroke-width="1"/>' + carWin +
      '<circle cx="302" cy="210" r="3" fill="#fff6c2"/><circle cx="298" cy="210" r="0" fill="none"/></g>' +
      '<rect x="0" y="218" width="400" height="5" fill="#3b3550"/>' + el +
      '<rect x="0" y="236" width="400" height="24" fill="#120f1c"/>' +
      bullet(370, 244, "7", PURPLE) +
      '<rect x="206" y="36" width="160" height="40" rx="4" fill="#1a1530" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="286" y="55" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="1" fill="#fff">STATE PAVILION</text>' +
      '<text x="286" y="70" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="' + GOLD + '">WORLD\'S FAIR 1964</text>',
      sky("p1", "#0b1030", "#3a2a66"));
  }


  /* 5. Main Street and Roosevelt Avenue: street signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? 6 : 16; x < 230; x += 22) bricks += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#3e2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(16) +
      /* storefronts up top with lit windows */
      '<rect x="0" y="28" width="260" height="42" fill="#221a2a"/><rect x="0" y="24" width="260" height="6" fill="#3a2c48"/>' +
      '<rect class="blk" x="20" y="38" width="20" height="24" fill="#ffcf6b" opacity=".6"/><rect class="blk blk2" x="90" y="38" width="20" height="24" fill="#ff8a6b" opacity=".5"/><rect class="blk blk3" x="170" y="38" width="20" height="24" fill="#ffcf6b" opacity=".6"/>' +
      /* tag wall */
      '<rect x="6" y="70" width="244" height="150" fill="#2c1c2a"/>' + bricks +
      tag("BRONSON", 22, 146, 40, GOLD, -7) + tag("FLUSHING", 52, 196, 26, PURPLE, -3) +
      /* subway entrance globe */
      '<rect x="262" y="160" width="4" height="60" fill="#1d2329"/><circle class="flk" cx="264" cy="156" r="7" fill="#3fd17a"/>' +
      '<rect x="262" y="196" width="40" height="24" fill="#1d2329"/><text x="282" y="212" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">SUBWAY</text>' +
      /* streetlight */
      '<rect x="330" y="50" width="5" height="170" fill="#1d2329"/><path d="M332 52h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk flk2" d="M348 56h24l-6 8h-12z" fill="#ffe7a8"/><g opacity=".14"><path class="flk flk2" d="M348 64h24l26 156h-80z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="296" y="86" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="334" y="99" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="284" y="108" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="334" y="121" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Roosevelt Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14121a"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("c5", "#0d0d22", "#3a2048"));
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
  /* 1. The ballpark at Mets–Willets Point: brick-and-arch rotunda front, the Home Run Apple, the 7 rolling past */
  function LM_unisphere() {
    let arches = ""; [60, 110, 290, 340].forEach(x => { arches += '<path d="M' + (x - 18) + ' 196v-50q18-22 36 0v50z" fill="#2a3440"/><path d="M' + (x - 14) + ' 192v-44q14-17 28 0v44z" fill="#9fc3e0" opacity=".5"/>'; });
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(40, 24) + Lcloud(260, 18, .8, "lmd3") +
      /* light towers */
      [30, 370].map(x => LR(x - 2, 10, 4, 96, "#5a6470") + LR(x - 14, 6, 28, 12, "#d8dde4") + '<g class="lm-pls">' + LR(x - 12, 8, 24, 8, "#fff8d0") + '</g>').join("") +
      /* brick facade */
      Lbrick(20, 106, 360, 108, "#a4462c", "#8a3a24") + '<path d="M20 106h360" stroke="#e8e0cc" stroke-width="4"/>' + arches +
      /* the rotunda: big central arch */
      '<path d="M140 214V110q60-66 120 0v104z" fill="#b24e32"/><path d="M156 214V120q44-50 88 0v94z" fill="#e8e0cc"/><path d="M166 214v-90q34-40 68 0v90z" fill="#2a3440"/>' +
      [176, 192, 208, 224].map(x => LR(x, 150, 8, 64, "#4a5a6a")).join("") + LT("JACKIE ROBINSON ROTUNDA", 120, 40, 11, "#1a2a4a") + LT("FLUSHING · ONE STOP FROM MAIN ST", 120, 54, 8, "#1a2a4a") +
      /* Home Run Apple rising from its hat */
      LR(320, 60, 46, 8, "#111") + LR(326, 40, 34, 22, "#111") + '<g class="lm-bob"><circle cx="343" cy="30" r="14" fill="#e8452c"/><path d="M343 16q2-6 6-8" stroke="#3a2010" stroke-width="2"/><path d="M345 14q8-4 10 2-6 2-10-2z" fill="#2f8a3a"/></g>' + LT("HOME RUN APPLE", 343, 82, 7, "#111") +
      /* the 7 on the el in front */
      LR(0, 214, 400, 10, "#4a5058") + '<g class="lm-carb" style="animation-duration:7s">' + Lcar(0, 162, 200, "7", "#b933ad") + '</g>' + LR(0, 224, 400, 36, "#5a8a3c") +
      LR(8, 232, 230, 22, "#111", ' rx="3"') + LT("Mets–Willets Point", 18, 248, 13, "#fff", "start") + Lbul(226, 243, "7", "#b933ad", 9) +
      tag("BAM BAM", 260, 250, 22, "#ffd23f", -4),
      sky("sk", "#6fb3ea", "#e8f0f6"));
  }
  /* 3. Golden Shopping Mall, 41-28 Main St: down the stairs to the cramped basement stalls, hand-written signs and steam */
  function LM_dumplings() {
    const stall = (x, w, c, sign, price) => LR(x, 92, w, 104, "#3a2a20") + LR(x, 92, w, 22, c) + LT(sign, x + w / 2, 108, 10, "#fff", "middle", ' font-style="italic"') +
      LR(x + 6, 120, w - 12, 30, "#fff8e6", ' rx="2"') + LT(price, x + w / 2, 140, 11, "#c0201a") + LR(x, 168, w, 28, "#c9c2b0") + '<path d="M' + x + ' 168h' + w + '" stroke="#8a847a" stroke-width="3"/>';
    const steam = (x, d) => '<g class="lm-rise ' + d + '"><path d="M' + x + ' 166q-6-10 0-18t0-18" stroke="#fff" stroke-width="3" fill="none" opacity=".75"/></g>';
    const basket = (x) => '<ellipse cx="' + x + '" cy="166" rx="16" ry="5" fill="#c9a26a"/>' + LR(x - 16, 158, 32, 8, "#b88a4a") + '<ellipse cx="' + x + '" cy="158" rx="16" ry="5" fill="#d8b47a"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="#2a1e18"/>' +
      /* low ceiling with bare tubes */
      LR(0, 0, 400, 60, "#3a3028") + '<g class="lm-flk">' + LR(40, 52, 120, 5, "#fffbe6") + '</g>' + '<g class="lm-flk lmd2">' + LR(240, 52, 120, 5, "#fffbe6") + '</g>' +
      /* street-level sign at the top of the stairs */
      LR(84, 8, 232, 36, "#b8201a", ' rx="3" stroke="#ffd23f" stroke-width="2"') + LT("GOLDEN SHOPPING MALL", 200, 26, 14, "#ffd23f") + LT("41-28 MAIN ST · FLUSHING · DOWNSTAIRS", 200, 39, 8, "#fff") +
      '<path d="M0 60h400v32H0z" fill="#4a3a2e"/>' + [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M' + (i * 60 + 10) + ' 66h40v20h-40z" fill="#fff4c8" opacity=".85" transform="rotate(' + (i % 2 ? 3 : -3) + ' ' + (i * 60 + 30) + ' 76)"/>').join("") +
      ["NOODLES", "SOUP", "SKEWERS", "BUNS", "TEA", "RICE"].map((w, i) => LT(w, i * 60 + 30, 80, 7.5, "#c0201a")).join("") +
      stall(8, 120, "#c0201a", "HAND-PULLED", "NOODLES  $8") + stall(140, 120, "#2a6a3a", "DUMPLINGS", "12 FOR $6") + stall(272, 120, "#b933ad", "SPICY LAMB", "SKEWERS  $3") +
      basket(48) + basket(88) + basket(180) + basket(220) + '<path d="M300 162l40-14M310 166l40-14" stroke="#7a3a1a" stroke-width="4"/>' +
      steam(48, "") + steam(88, "lmd1") + steam(180, "lmd2") + steam(220, "lmd3") + steam(330, "lmd1") +
      /* stools + crowd */
      LR(0, 196, 400, 64, "#5a4a3e") + [40, 120, 200, 280, 360].map(x => LR(x - 10, 212, 20, 5, "#c0201a") + LR(x - 2, 217, 4, 20, "#222")).join("") +
      Lman(80, 252, "#ffd23f", "lm-bob", "#b933ad") + Lman(240, 254, "#e8452c", "lm-bob lmd1") +
      tag("ACTION BRONSON", 110, 254, 22, "#ffd23f", -3) + tag("DELICIOUS", 300, 252, 16, "#e8452c", -4),
      "");
  }

  window.SCENES = { train, unisphere: LM_unisphere, pavilion, dumplings: LM_dumplings, corner };
})();
