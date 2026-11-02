/* Stapleton, Staten Island opening scenes for RZA's game. Each one is a small animated SVG, 400 x 260. */
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
  const corner = (g, s1, s2, tags, accent, bg) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' + (bg || "") +
    brick(16, 60, 240, 160, "#4a2a24", "#5a3229") + '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) +
    '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
    sky("g5", g[0], g[1]));
  const ICE = "#9fe3ff", GOLD = "#f2c14e", RED = "#d7263d";

  /* 1. Stapleton: the SIR rolling in on the platform, the stair down to Canal St and Tappen Park with the old brick Village Hall under the trees, a hand-painted kung fu double feature handbill pasted on the column */
  function station() {
    const tr = (x, y, r) => '<g class="sway sw2" style="transform-origin:center bottom"><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="30" fill="#4a3220"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x - r * .6) + '" cy="' + y + '" r="' + (r * .7) + '" fill="#2f6a34"/></g>';
    return svg('<rect width="400" height="260" fill="url(#g1)"/><circle cx="60" cy="40" r="18" fill="#fff3c4"/>' +
      /* Tappen Park below and behind: the Village Hall's brick and mansard tower */
      '<rect x="0" y="176" width="400" height="60" fill="#5f9a3a"/>' +
      '<rect x="250" y="176" width="110" height="60" fill="#9a4a34"/><path d="M244 178l61-24 61 24z" fill="#3a3a44"/><rect x="290" y="128" width="30" height="34" fill="#9a4a34"/><path d="M286 130l19-22 19 22z" fill="#3a3a44"/>' +
      '<circle cx="305" cy="140" r="6" fill="#f6efdc" stroke="#3a3a44"/>' + [262, 286, 326, 348].map(x => '<rect x="' + x + '" y="190" width="10" height="16" fill="#ffe6a8" opacity=".75"/>').join("") +
      tr(220, 200, 18) + tr(384, 196, 18) +
      /* the canopy and the posts with the handbill */
      '<rect x="0" y="22" width="400" height="8" fill="#3a4250"/><rect x="0" y="30" width="400" height="3" fill="#0039a6"/>' +
      '<rect x="40" y="33" width="6" height="110" fill="#59616e"/><rect x="354" y="33" width="6" height="110" fill="#59616e"/>' +
      '<g transform="rotate(-3 380 70)"><rect x="362" y="52" width="36" height="52" fill="#f2e6c0"/><text x="380" y="64" text-anchor="middle" ' + FONT + ' font-size="6" fill="' + RED + '">KUNG FU</text><text x="380" y="73" text-anchor="middle" ' + FONT + ' font-size="5" fill="#222">DOUBLE</text><text x="380" y="81" text-anchor="middle" ' + FONT + ' font-size="5" fill="#222">FEATURE</text><path d="M368 88l12 8 12-8" stroke="' + RED + '" stroke-width="2" fill="none"/><text x="380" y="101" text-anchor="middle" ' + FONT + ' font-size="5" fill="#222">BAY ST</text></g>' +
      stSign(100, 40, 180, "Stapleton") +
      '<g class="anim-train">' + sirCar(10, 78, 300) + '</g>' +
      '<rect x="0" y="132" width="400" height="7" fill="#eab308"/><rect x="0" y="139" width="400" height="16" fill="#b7b0a2"/><path d="M0 155h400" stroke="#7a7468" stroke-width="3"/>' +
      /* the stair down to Canal St */
      '<path d="M120 236l50-81h22l-50 81z" fill="#6b6f78"/>' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (126 + i * 8) + ' ' + (226 - i * 13) + 'h18" stroke="#3a3e46" stroke-width="2"/>').join("") +
      '<rect x="20" y="166" width="124" height="22" rx="2" fill="#111"/><text x="82" y="181" text-anchor="middle" ' + FONT + ' font-size="8" fill="#fff">CANAL ST · TAPPEN PARK</text>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2d33"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("RZA", 20, 230, 30, GOLD, -6) + tag("SHAOLIN", 200, 256, 22, ICE, -4),
      sky("g1", "#8fc3ea", "#f6d9a6"));
  }

  /* 2. The old Paramount on Bay St (1930): orange brick front, tall vertical sign, marquee bulbs chasing, kung fu double feature */
  function theatre() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 12) bulbs += '<circle class="blk' + ["", " b2", " b3", " b4"][(x / 12) % 4] + '" cx="' + x + '" cy="146" r="2.6" fill="#ffe9a0"/><circle class="blk' + ["", " b2", " b3", " b4"][(x / 12 + 2) % 4] + '" cx="' + x + '" cy="186" r="2.6" fill="#ffe9a0"/>';
    let sign = "";
    "SHAOLIN".split("").forEach((c, i) => sign += '<text class="flk' + (i % 2 ? " flk2" : "") + '" x="200" y="' + (44 + i * 13) + '" text-anchor="middle" ' + FONT + ' font-size="12" fill="' + ICE + '">' + c + '</text>');
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' + stars(18) +
      brick(0, 70, 70, 170, "#4a3a3a", "#55433f") + brick(330, 80, 70, 160, "#3a3a4a", "#44445a") +
      /* the front: orange brick with buff terracotta trim */
      brick(70, 40, 260, 200, "#c8642e", "#d4733a") +
      '<rect x="70" y="40" width="260" height="8" fill="#e8d2a0"/><rect x="70" y="120" width="260" height="6" fill="#e8d2a0"/>' +
      '<path d="M110 118V70a10 10 0 0 1 20 0v48zM150 118V64a10 10 0 0 1 20 0v54zM230 118V64a10 10 0 0 1 20 0v54zM270 118V70a10 10 0 0 1 20 0v48z" fill="#2a1f2e" stroke="#e8d2a0" stroke-width="2"/>' +
      /* vertical sign */
      '<rect x="186" y="28" width="28" height="98" rx="4" fill="#1a1420" stroke="' + GOLD + '" stroke-width="2"/>' + sign +
      /* marquee */
      '<path d="M88 140h224l10 10v32l-10 10H88l-10-10v-32z" fill="#1a1420" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<rect x="100" y="152" width="200" height="28" fill="#f6efdc"/>' +
      '<text x="200" y="164" text-anchor="middle" ' + FONT + ' font-size="10" fill="#1a1420">KUNG FU DOUBLE FEATURE</text>' +
      '<text x="200" y="177" text-anchor="middle" ' + FONT + ' font-size="10" fill="' + RED + '">36 CHAMBERS  ·  TONIGHT</text>' +
      /* doors + sidewalk */
      '<rect x="140" y="196" width="120" height="44" fill="#2a1f2e"/><path d="M170 196v44M200 196v44M230 196v44" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#2a2d33"/>' + tag("BAY ST", 14, 254, 20, GOLD, -3),
      sky("g2", "#0c0f24", "#3a2346"));
  }

  /* 3. The basement lab: the sampler pads lighting up, the record spinning, crates of vinyl, a lamp swinging */
  function lab() {
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="blk' + ["", " b2", " b3", " b4"][(r * 3 + c) % 4] + '" x="' + (232 + c * 22) + '" y="' + (150 + r * 15) + '" width="18" height="12" rx="2" fill="' + [ICE, GOLD, RED, "#7cf29a"][(r + c) % 4] + '"/>';
    let crates = "";
    [20, 82].forEach(x => { crates += '<rect x="' + x + '" y="196" width="56" height="40" fill="#8a5a2c" stroke="#4a2e14" stroke-width="2"/>'; for (let i = 0; i < 6; i++) crates += '<rect x="' + (x + 4 + i * 8) + '" y="' + (182 + (i % 3) * 3) + '" width="6" height="16" fill="' + ["#111", "#d7263d", "#222", ICE, "#111", GOLD][i] + '"/>'; });
    return svg('<rect width="400" height="260" fill="#1a1612"/>' +
      brick(0, 0, 400, 150, "#3a2c24", "#44342a") +
      /* the swinging bulb */
      '<g class="sway"><path d="M200 0v40" stroke="#222" stroke-width="2"/><circle class="flk" cx="200" cy="46" r="8" fill="#ffe7a8"/></g>' +
      '<circle cx="200" cy="46" r="70" fill="#ffe7a8" opacity=".08"/>' +
      /* vinyl on the wall */
      '<circle cx="80" cy="70" r="26" fill="#111"/><circle cx="80" cy="70" r="8" fill="' + RED + '"/><circle cx="320" cy="64" r="22" fill="#111"/><circle cx="320" cy="64" r="7" fill="' + GOLD + '"/>' +
      /* the desk */
      '<rect x="0" y="236" width="400" height="24" fill="#2a2018"/><rect x="40" y="138" width="340" height="10" fill="#5a3a22"/><rect x="50" y="148" width="8" height="88" fill="#3a2614"/><rect x="362" y="148" width="8" height="88" fill="#3a2614"/>' +
      /* turntable */
      '<rect x="60" y="112" width="110" height="26" rx="3" fill="#2b2b30"/><g class="spin"><ellipse cx="110" cy="114" rx="40" ry="8" fill="#111"/><ellipse cx="110" cy="114" rx="10" ry="2.5" fill="' + RED + '"/><rect x="104" y="112" width="20" height="2" fill="#555"/></g>' +
      '<path d="M156 104l-26 8" stroke="#bbb" stroke-width="3"/>' +
      /* sampler */
      '<rect x="222" y="140" width="104" height="72" rx="4" fill="#cfcac0" stroke="#7a756a" stroke-width="2" transform="translate(0,-36)"/>' +
      '<g transform="translate(0,-36)">' + pads + '</g><rect x="232" y="110" width="84" height="10" fill="#1d3a2a"/><text x="236" y="118" font-family="monospace" font-size="8" fill="#7cf29a">CH.36  SP-RZA</text>' +
      /* speakers */
      '<rect x="340" y="88" width="34" height="50" fill="#1d1d22"/><circle class="pop" cx="357" cy="122" r="10" fill="#333"/><circle cx="357" cy="100" r="5" fill="#333"/>' +
      crates + tag("THE LAB", 230, 226, 26, ICE, -5),
      "");
  }

  /* 4. The chamber: a wooden training dummy, a chessboard (chess and boxing), lanterns swaying, incense smoke */
  function dojo() {
    let board = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) board += '<rect x="' + (250 + c * 16) + '" y="' + (196 + r * 8) + '" width="16" height="8" fill="' + ((r + c) % 2 ? "#2a1a10" : "#e8d2a0") + '"/>';
    const lantern = (x, cls) => '<g class="sway ' + cls + '"><path d="M' + x + ' 0v28" stroke="#222" stroke-width="2"/><ellipse cx="' + x + '" cy="44" rx="14" ry="17" fill="' + RED + '"/><path d="M' + (x - 14) + ' 44h28" stroke="' + GOLD + '" stroke-width="2"/><rect x="' + (x - 6) + '" y="26" width="12" height="4" fill="' + GOLD + '"/><rect x="' + (x - 6) + '" y="59" width="12" height="4" fill="' + GOLD + '"/></g>';
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' +
      /* wooden walls and beams */
      '<rect x="0" y="0" width="400" height="180" fill="#5a3a22"/><path d="M0 60h400M0 120h400" stroke="#3a2412" stroke-width="6"/>' +
      '<rect x="20" y="0" width="14" height="180" fill="#3a2412"/><rect x="366" y="0" width="14" height="180" fill="#3a2412"/>' +
      /* the round window with the moon */
      '<circle cx="200" cy="70" r="44" fill="#0e1a34" stroke="#2a1608" stroke-width="8"/><circle cx="216" cy="58" r="12" fill="#fff3c4"/><path d="M160 98q20-26 40-6 20-26 40 6" fill="#1a2a48"/>' +
      /* swords crossed on the wall */
      '<path d="M70 40l70 70M140 40L70 110" stroke="#cfd6de" stroke-width="4" stroke-linecap="round"/><path d="M76 46l8-8M134 46l-8-8" stroke="' + GOLD + '" stroke-width="6"/>' +
      lantern(110, "") + lantern(290, "sw2") +
      /* floor */
      '<rect x="0" y="180" width="400" height="80" fill="#8a6a3a"/><path d="M0 200h400M0 226h400" stroke="#6a4e28" stroke-width="2"/>' +
      /* the wooden dummy: post, three arms, a leg */
      '<g class="bob"><rect x="68" y="110" width="22" height="104" rx="8" fill="#a8742e" stroke="#5a3a14" stroke-width="2"/><path d="M90 132h22M90 140h22M68 156H48M90 178l18 14" stroke="#a8742e" stroke-width="6" stroke-linecap="round"/></g>' +
      '<rect x="60" y="214" width="38" height="8" fill="#3a2412"/>' +
      /* the chess table */
      '<rect x="240" y="190" width="116" height="40" fill="#3a2412"/>' + board +
      '<path d="M268 196v-10h6v10zM300 196v-14h6v14z" fill="#f6efdc"/><circle cx="271" cy="184" r="3" fill="#f6efdc"/><path d="M332 196v-12h6v12z" fill="#111"/><circle cx="335" cy="182" r="3" fill="#111"/>' +
      /* incense smoke */
      '<rect x="196" y="206" width="8" height="14" fill="' + GOLD + '"/><path d="M200 206v-16" stroke="#7a5512" stroke-width="1.5"/>' +
      '<circle class="rise" cx="200" cy="186" r="4" fill="#e8e0d0"/><circle class="rise r2" cx="203" cy="186" r="3" fill="#e8e0d0"/><circle class="rise r3" cx="197" cy="186" r="3.5" fill="#e8e0d0"/>' +
      tag("36 CHAMBERS", 120, 250, 24, GOLD, -3),
      sky("g4", "#2a1608", "#5a3a22"));
  }

  /* 5. Canal St and Wright St, the corner of Tappen Park in Stapleton */
  function block() {
    return corner(["#0d1022", "#2a3a4a"], "Canal St", "Wright St",
      tag("RZA", 26, 128, 56, ICE, -7) + tag("THE ABBOT", 112, 148, 22, GOLD, -5) + tag("BOBBY DIGITAL", 30, 182, 26, RED, -3) + tag("WU-TANG", 60, 210, 24, "#f6efdc", -2), ICE, '<rect x="256" y="184" width="144" height="36" fill="#15243a"/><g opacity=".55"><path d="M262 190h18M296 196h24M336 189h14M366 199h20" stroke="#9fc4e8" stroke-width="1"><animateTransform attributeName="transform" type="translate" values="0 0;8 0;0 0" dur="3s" repeatCount="indefinite"/></path></g>' + vzb({"t":[{"x":284,"top":132,"deck":166,"foot":186,"w":9},{"x":374,"top":132,"deck":166,"foot":186,"w":9}],"al":[240,172],"ar":[420,172],"sag":158,"lit":true,"lr":0.8,"n":18,"cw":1,"dt":2.4,"col":"#8d96a0","car":1}) + '<g><rect x="0" y="-5" width="16" height="5" fill="#2a2a2a"/><circle cx="3" cy="-6" r="1.3" fill="#7cff8a"/><circle cx="13" cy="-6" r="1.3" fill="#ff4a3a"/><animateTransform attributeName="transform" type="translate" values="250 206;410 206" dur="14s" repeatCount="indefinite"/></g>');
  }

  window.SCENES = { station, theatre, lab, dojo, block };
})();
