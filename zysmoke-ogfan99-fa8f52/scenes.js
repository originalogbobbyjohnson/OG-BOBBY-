/* North Shore, Staten Island opening scenes for Zy Smoke's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes sail{from{transform:translateX(-160px)}to{transform:translateX(440px)}}' +
    '.sail{animation:sail 18s linear infinite;animation-delay:-8s}' +
    '@keyframes ship{from{transform:translateX(420px)}to{transform:translateX(-260px)}}' +
    '.ship{animation:ship 22s linear infinite;animation-delay:-11s}' +
    '@keyframes carsR{from{transform:translateX(-40px)}to{transform:translateX(420px)}}' +
    '@keyframes carsL{from{transform:translateX(420px)}to{transform:translateX(-40px)}}' +
    '.carR{animation:carsR 4s linear infinite}.carL{animation:carsL 5s linear infinite}.d1{animation-delay:-1.3s}.d2{animation-delay:-2.6s}' +
    '@keyframes rain{from{transform:translate(0,-30px)}to{transform:translate(-10px,30px)}}' +
    '.rain{animation:rain .6s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes halo{0%,100%{opacity:.5}50%{opacity:1}}' +
    '.halo{animation:halo 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const ORANGE = "#ff7a1a", VIOLET = "#9b7bff", CYAN = "#38e8ff";
  /* the orange ferry, drawn facing right at 0,0 */
  const ferry = s => '<g transform="scale(' + s + ')">' +
    '<path d="M0 30h150l-10 16H10z" fill="' + ORANGE + '" stroke="#7a3a0a" stroke-width="1.5"/>' +
    '<rect x="16" y="14" width="118" height="16" fill="' + ORANGE + '" stroke="#7a3a0a" stroke-width="1.5"/>' +
    '<rect x="40" y="2" width="70" height="12" fill="' + ORANGE + '" stroke="#7a3a0a" stroke-width="1.5"/>' +
    (function () { let w = ""; for (let x = 22; x < 130; x += 10) w += '<rect x="' + x + '" y="18" width="6" height="7" fill="#1d2a38"/>'; for (let x = 46; x < 106; x += 10) w += '<rect x="' + x + '" y="5" width="6" height="5" fill="#1d2a38"/>'; return w; })() +
    '<rect x="72" y="-8" width="6" height="10" fill="#f2f2f2"/></g>';



  /* 3. The Bayonne Bridge: the long steel arch over the Kill Van Kull, a container ship sliding under */
  function bayonne() {
    let hangers = "";
    for (let x = 60; x <= 340; x += 14) { const y = 150 - Math.round(100 * (1 - Math.pow((x - 200) / 160, 2))); hangers += '<path d="M' + x + ' ' + (y + 8) + 'V150" stroke="#9aa4ae" stroke-width="1.2"/>'; }
    let boxes = "";
    const cols = ["#c0392b", "#2e86c1", "#27ae60", "#f39c12", "#8e44ad", "#d35400"];
    for (let i = 0; i < 12; i++) boxes += '<rect x="' + (30 + i * 13) + '" y="' + (i % 2 ? 176 : 170) + '" width="12" height="' + (i % 2 ? 10 : 16) + '" fill="' + cols[i % 6] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* the arch: steel gray truss */
      '<path d="M40 150Q200 -50 360 150" fill="none" stroke="#8b96a0" stroke-width="10"/>' +
      '<path d="M40 150Q200 -30 360 150" fill="none" stroke="#6f7a84" stroke-width="4"/>' + hangers +
      '<rect x="0" y="146" width="400" height="8" fill="#6f7a84"/><rect x="0" y="144" width="400" height="2" fill="#c9d1d8"/>' +
      '<rect x="30" y="150" width="14" height="40" fill="#6f7a84"/><rect x="356" y="150" width="14" height="40" fill="#6f7a84"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#2f5f7a"/>' +
      '<path class="shim" d="M20 206h60M260 220h70M120 240h60" stroke="#cfe8f6" stroke-width="2"/>' +
      /* the container ship */
      '<g class="ship"><path d="M20 186h200l-14 18H34z" fill="#1d2a38"/><rect x="20" y="186" width="200" height="4" fill="#c0392b"/>' + boxes +
      '<rect x="190" y="156" width="22" height="30" fill="#f2f2f2"/><rect x="194" y="160" width="14" height="5" fill="#1d2a38"/></g>' +
      /* the North Shore bank */
      '<path d="M0 230q200-12 400 0v30H0z" fill="#4a5a3a"/>' +
      tag("KILL VAN KULL", 18, 252, 24, CYAN, -3),
      sky("g3", "#7fb6de", "#f4e2c0"));
  }

  /* 4. The Goethals Bridge at night in the rain: the twin cable-stayed spans, headlights streaming, a halo glow */
  function goethals() {
    let cables = "";
    [120, 280].forEach(t => { for (let i = 1; i <= 6; i++) cables += '<path d="M' + t + ' ' + (40 + i * 6) + 'L' + (t - i * 16) + ' 140M' + t + ' ' + (40 + i * 6) + 'L' + (t + i * 16) + ' 140" stroke="#cfd6de" stroke-width="1"/>'; });
    let drops = "";
    for (let i = 0; i < 40; i++) drops += '<path d="M' + ((i * 53) % 400) + ' ' + ((i * 37) % 260) + 'l-3 10" stroke="#9fc4ff" stroke-width="1" opacity=".55"/>';
    const car = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="16" height="5" rx="2" fill="#2a2a34"/><circle cx="' + (cls.indexOf("carR") > -1 ? 16 : 0) + '" cy="' + (y + 2.5) + '" r="2.4" fill="' + col + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(10) +
      '<circle class="halo" cx="330" cy="44" r="22" fill="none" stroke="#fff1c2" stroke-width="3"/><circle cx="330" cy="44" r="12" fill="#fff1c2" opacity=".85"/>' +
      /* towers: pale concrete, tapered */
      '<path d="M114 140l4-104h4l4 104zM274 140l4-104h4l4 104z" fill="#d8dde3"/>' + cables +
      '<rect x="0" y="138" width="400" height="8" fill="#b9c0c8"/><rect x="0" y="146" width="400" height="3" fill="#7b8794"/>' +
      car("carR", 132, "#fff6c2") + car("carR d1", 132, "#fff6c2") + car("carL d2", 140, "#ff4040") + car("carL", 140, "#ff4040") +
      '<rect x="0" y="150" width="400" height="110" fill="#14223a"/>' +
      /* light reflections in the Arthur Kill */
      '<path class="shim" d="M110 170v30M280 172v24M60 190h40M300 210h50" stroke="#ffe7a8" stroke-width="2" opacity=".6"/>' +
      '<g class="rain">' + drops + '</g>' +
      tag("NIGHT SHIFT", 20, 240, 28, VIOLET, -4) + tag("HALO", 270, 244, 30, "#fff1c2", -6),
      sky("g4", "#0b0b22", "#2a2a5a"));
  }

  /* 5. Richmond Terrace and Union Av in Mariners Harbor: green signs, Zy Smoke's wall, the cranes across the water */
  /* the Verrazzano-Narrows Bridge as a backdrop, seen from Staten Island: gray-steel towers (two legs + cross struts),
     long suspension cables with hangers, the deck, blinking red tower-top beacons and car lights crossing.
     o.t = towers [{x, top, deck, foot, w}], o.al / o.ar = deck ends [x, y], o.sag = lowest y of the main cable */
  const vzb = function (o) {
    const C = o.col || "#8d96a0", K = o.cab || C, D = o.dk || C, T = o.t, r1 = v => Math.round(v * 10) / 10;
    let s = "";
    const pts = [o.al].concat(T.map(t => [t.x, t.deck])).concat([o.ar]).filter(Boolean);
    const dy = x => { for (let i = 0; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1]; if ((x - a[0]) * (x - b[0]) <= 0) return a[1] + (b[1] - a[1]) * ((x - a[0]) / ((b[0] - a[0]) || 1)); } return pts[0][1]; };
    const bz = (p0, c, p2, u) => [(1 - u) * (1 - u) * p0[0] + 2 * (1 - u) * u * c[0] + u * u * p2[0], (1 - u) * (1 - u) * p0[1] + 2 * (1 - u) * u * c[1] + u * u * p2[1]];
    const cab = (p0, c, p2, n, lit) => {
      let h = "", l = "";
      for (let i = 1; i < n; i++) { const p = bz(p0, c, p2, i / n); h += 'M' + r1(p[0]) + ' ' + r1(p[1]) + 'V' + r1(dy(p[0])); }
      if (lit) for (let i = 0; i <= n; i++) { const p = bz(p0, c, p2, i / n); l += '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="' + (o.lr || 1.1) + '" fill="#fff4c8"' + (i % 4 ? '' : '><animate attributeName="opacity" values="1;.35;1" dur="2.4s" begin="' + (i % 3) * .7 + 's" repeatCount="indefinite"/></circle') + (i % 4 ? '/>' : '>') ; }
      return '<path d="' + h + '" stroke="' + K + '" stroke-width="' + (o.hw || .5) + '" opacity=".75"/>' +
        '<path d="M' + r1(p0[0]) + ' ' + r1(p0[1]) + 'Q' + r1(c[0]) + ' ' + r1(c[1]) + ' ' + r1(p2[0]) + ' ' + r1(p2[1]) + '" stroke="' + K + '" stroke-width="' + (o.cw || 1.4) + '" fill="none"/>' + l;
    };
    const n = o.n || 18;
    if (T.length > 1) {
      const a = [T[0].x, T[0].top + 1], b = [T[1].x, T[1].top + 1], sg = o.sag != null ? o.sag : Math.max(a[1], b[1]) + (T[0].deck - T[0].top) * .8;
      s += cab(a, [(a[0] + b[0]) / 2, (4 * sg - a[1] - b[1]) / 2], b, n, o.lit);
    }
    if (o.al) { const t = T[0], a = [t.x, t.top + 1]; s += cab(o.al, [o.al[0] + (a[0] - o.al[0]) * .55, o.al[1] - (o.al[1] - a[1]) * .25], a, Math.max(3, n / 3 | 0), o.lit); }
    if (o.ar && T.length > 1) { const t = T[T.length - 1], a = [t.x, t.top + 1]; s += cab(a, [a[0] + (o.ar[0] - a[0]) * .45, o.ar[1] - (o.ar[1] - a[1]) * .25], o.ar, Math.max(3, n / 3 | 0), o.lit); }
    const dp = 'M' + pts.map(p => r1(p[0]) + ' ' + r1(p[1])).join('L');
    s += '<path d="' + dp + '" stroke="' + D + '" stroke-width="' + (o.dt || 3) + '" fill="none" stroke-linejoin="round"/>' +
      '<path d="' + dp + '" stroke="' + (o.dl || "#c7cdd4") + '" stroke-width=".6" fill="none" opacity=".7" transform="translate(0 ' + (-(o.dt || 3) / 2) + ')"/>';
    T.forEach(t => { s += vzb.tw(t.x, t.top, t.foot, t.w, C, t.deck, o.hi); });
    if (o.cars !== false) s += '<circle r="' + (o.car || 1.3) + '" fill="#fff6c8"><animateMotion dur="' + (o.cd || 6) + 's" repeatCount="indefinite" path="' + dp + '"/></circle>' +
      '<circle r="' + (o.car || 1.3) + '" fill="#ff5a4a"><animateMotion dur="' + (o.cd || 6) * 1.3 + 's" begin="-2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear" path="' + dp + '"/></circle>';
    return '<g opacity="' + (o.op || 1) + '">' + s + '</g>';
  };
  /* one tower: two tapered legs with cross struts, a beacon on each leg top */
  vzb.tw = function (x, top, foot, w, C, deck, hi) {
    const ht = w * .36, hf = w * .5, lt = Math.max(1.2, w * .2), sh = Math.max(1, w * .12), r1 = v => Math.round(v * 10) / 10;
    const at = (y, sd) => x + sd * (ht + (hf - ht) * ((y - top) / (foot - top)));
    let s = "";
    [-1, 1].forEach(sd => {
      s += '<path d="M' + r1(x + sd * ht) + ' ' + top + 'L' + r1(x + sd * (ht - lt)) + ' ' + top + 'L' + r1(x + sd * (hf - lt)) + ' ' + foot + 'L' + r1(x + sd * hf) + ' ' + foot + 'z" fill="' + C + '"/>';
      if (hi) s += '<path d="M' + r1(x + sd * (ht - lt * .5)) + ' ' + top + 'L' + r1(x + sd * (hf - lt * .5)) + ' ' + foot + '" stroke="' + hi + '" stroke-width="' + r1(Math.max(.4, lt * .3)) + '" opacity=".6"/>';
    });
    const d = deck != null ? deck : top + (foot - top) * .7;
    [top, top + (d - top) * .3, top + (d - top) * .62, d + sh * 1.5].forEach(y => {
      const l = at(y, -1) + lt * .8, rr = at(y, 1) - lt * .8;
      s += '<rect x="' + r1(l) + '" y="' + r1(y) + '" width="' + r1(rr - l) + '" height="' + r1(sh) + '" fill="' + C + '"/>';
    });
    [-1, 1].forEach((sd, i) => { s += '<circle cx="' + r1(x + sd * (ht - lt / 2)) + '" cy="' + r1(top - 1) + '" r="' + r1(Math.max(1.1, w * .06)) + '" fill="#ff3b30"><animate attributeName="opacity" values="1;1;.1;.1;1" dur="1.6s" begin="' + i * .2 + 's" repeatCount="indefinite"/></circle>'; });
    return s;
  };
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      vzb({"t":[{"x":70,"top":26,"deck":70,"foot":70,"w":10},{"x":186,"top":26,"deck":70,"foot":70,"w":10}],"sag":56,"n":16,"col":"#7d8794","cw":1.1,"cars":false}) +
      /* container cranes across the Kill */
      '<path d="M330 90v-40h40v40M320 50h60M372 50l14 14" stroke="#4a5a7a" stroke-width="3" fill="none"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#2e3a44"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#36444f"/>'; return b; })() +
      tag("ZY SMOKE", 26, 126, 40, VIOLET, -7) + tag("UNDERDOG", 36, 172, 28, ORANGE, -3) + tag("10303", 60, 208, 24, CYAN, -2) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="254" y="88" width="98" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Richmond Ter</text>' +
      '<rect x="266" y="110" width="74" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Union Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a2a4a"));
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
  /* 0. St. George (SIR): the terminal end of the line, and up on the ramp the S40 waiting to run out Richmond Terrace to 10303 */
  function LM_train() {
    const bus = '<rect x="0" y="0" width="120" height="44" rx="6" fill="#f2f4f6" stroke="#5a6470" stroke-width="1.5"/>' + LR(0, 28, 120, 6, "#0039a6") + [8, 32, 56, 80].map(x => LR(x, 8, 20, 16, "#2a3440", ' rx="2"')).join("") +
      LR(98, 6, 18, 22, "#2a3440", ' rx="2"') + LR(8, 0, 104, 8, "#111") + '<text class="lm-blk" x="60" y="7" text-anchor="middle" ' + LF + ' font-size="7.5" fill="#ff9a2a">S40 RICHMOND TER</text>' +
      '<circle cx="22" cy="46" r="7" fill="#111"/><circle cx="96" cy="46" r="7" fill="#111"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lcloud(60, 20) + Lcloud(300, 30, .8, "lmd3") +
      /* terminal glass + harbor glimpse */
      LR(220, 20, 180, 70, "#8ab8d8", ' opacity=".7"') + [240, 270, 300, 330, 360, 390].map(x => '<path d="M' + x + ' 20v70" stroke="#e8eef4" stroke-width="2"/>').join("") + LR(214, 14, 186, 8, "#e8eef4") + LT("ST. GEORGE TERMINAL", 308, 40, 10, "#1a2a3a") +
      /* bus ramp */
      '<path d="M0 104h400v10H0z" fill="#a8a49a"/>' + LR(0, 114, 400, 6, "#7a766c") + [40, 200, 360].map(x => LR(x, 120, 10, 30, "#8a867c")).join("") +
      '<g class="lm-bob"><g transform="translate(150 58)">' + bus + '</g></g>' + LR(40, 70, 70, 26, "#111", ' rx="2"') + LT("BUS RAMP B", 75, 81, 8, "#fff") + LT("S40 → 10303", 75, 92, 8, "#38e8ff") +
      /* SIR platform below */
      Lsign(16, 128, 170, "St. George", [["SIR", "#0039a6"]]) +
      '<g class="anim-train"><rect x="8" y="166" width="300" height="48" rx="7" fill="#e9edf2" stroke="#5a6470" stroke-width="2"/>' + LR(8, 196, 300, 6, "#0039a6") + [26, 72, 118, 164, 210].map(x => LR(x, 174, 30, 16, "#1f2a38", ' rx="3"')).join("") + LR(272, 172, 30, 22, "#2a3440", ' rx="4"') + Lpill(150, 207, "SIR", "#0039a6") + '</g>' +
      LR(0, 214, 400, 8, "#eab308") + LR(0, 222, 400, 38, "#8f8a80") + Lman(340, 254, "#9b7bff", "lm-bob", "#ff7a1a") +
      tag("ZY SMOKE", 196, 156, 24, "#9b7bff", -5) + tag("NORTH SHORE", 40, 252, 18, "#ff7a1a", -3),
      sky("sk", "#7fb8e6", "#f0e4cc"));
  }
  /* 1. Faber Park & Pool, Richmond Terrace (Port Richmond): the 1930s brick bathhouse, the big pool, the Kill Van Kull, the Bayonne Bridge arch */
  function LM_boat() {
    let hang = ""; for (let x = 90; x <= 330; x += 20) { const y = 70 - Math.sin((x - 60) / 300 * Math.PI) * 44; hang += '<path d="M' + x + ' ' + y + 'V82" stroke="#5a7a7a" stroke-width="1.5"/>'; }
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + '<circle cx="70" cy="40" r="16" fill="#fff3c4"/>' +
      /* Bayonne Bridge */
      '<path d="M40 104Q200-20 360 104" stroke="#5a7a7a" stroke-width="7" fill="none"/>' + LR(30, 78, 340, 6, "#5a7a7a") + hang + LT("BAYONNE BRIDGE", 200, 22, 9, "#2a3a4a") +
      '<g class="lm-car" style="animation-duration:6s">' + Lauto(0, 64, "#ff7a1a") + '</g>' +
      /* Kill Van Kull */
      LR(0, 104, 400, 34, "#3f6f96") + '<g class="lm-carb" style="animation-duration:24s"><path d="M0 120h70v-12h20v12h10l-8 10H8z" fill="#c43a2a"/><rect x="20" y="102" width="12" height="10" fill="#e8e8e8"/></g>' + LT("KILL VAN KULL", 340, 132, 8, "#d8e8f4") +
      /* bathhouse */
      Lbrick(20, 126, 190, 60, "#a8482e", "#8a3a24") + LR(16, 122, 198, 6, "#e8e0cc") + LR(90, 110, 50, 18, "#a8482e") + LR(86, 106, 58, 6, "#e8e0cc") +
      [36, 60, 156, 180].map(x => '<path d="M' + x + ' 170v-26q8-10 16 0v26z" fill="#2a3440"/>').join("") + LR(100, 150, 30, 36, "#3a2418") + LT("FABER POOL", 115, 122, 8, "#3a2418") +
      /* the pool */
      LR(0, 186, 400, 74, "#e8e0cc") + LR(20, 196, 360, 54, "#38b8e8") + '<g class="lm-wav"><path d="M30 210h340M30 232h340" stroke="#a8e8ff" stroke-width="2" stroke-dasharray="12 14"/></g>' +
      '<path d="M20 222h360" stroke="#ff7a1a" stroke-width="1.5" stroke-dasharray="4 4"/>' +
      [[90, ""], [190, "lmd1"], [300, "lmd2"]].map(s => '<g class="lm-bob ' + s[1] + '"><circle cx="' + s[0] + '" cy="214" r="6" fill="#5a3a26"/><path d="M' + (s[0] - 12) + ' 220q12-6 24 0" stroke="#fff" stroke-width="2" fill="none"/></g>').join("") +
      LR(230, 140, 162, 34, "#111", ' rx="3" opacity=".85"') + LT("FABER PARK &amp; POOL", 311, 155, 11, "#38e8ff") + LT("RICHMOND TERRACE · PORT RICHMOND", 311, 168, 7.5, "#fff") +
      tag("ZY SMOKE", 26, 256, 22, "#9b7bff", -3) + tag("UNDERDOG", 270, 256, 18, "#ff7a1a", -3),
      sky("sk", "#86c0ea", "#f6e6c4"));
  }

  window.SCENES = { train: LM_train, boat: LM_boat, bayonne, goethals, corner };
})();
