/* Staten Island opening scenes for Remedy's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes sail{from{transform:translateX(-90px)}to{transform:translateX(470px)}}' +
    '.sail{animation:sail 18s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob 1.4s ease-in-out infinite}.bob2{animation-delay:-.7s}' +
    '@keyframes spin{from{transform:translateX(0)}to{transform:translateX(-120px)}}' +
    '.ride{animation:spin 4s linear infinite}' +
    '@keyframes buzz{0%{transform:translate(0,0)}25%{transform:translate(14px,-10px)}50%{transform:translate(26px,4px)}75%{transform:translate(10px,12px)}100%{transform:translate(0,0)}}' +
    '.bee{animation:buzz 2.4s ease-in-out infinite}.b2{animation-delay:-.6s;animation-duration:2s}.b3{animation-delay:-1.2s;animation-duration:2.8s}.b4{animation-delay:-1.8s}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-12deg)}}' +
    '.flag{animation:wave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{animation:drip 3s ease-out infinite;transform-box:fill-box;transform-origin:top}' +
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
  const GOLD = "#f2c14e", RED = "#e0263a", HONEY = "#ffb42a";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. St. George, end of the Staten Island Railway, by day: the car in at the bumper, the harbor and Manhattan off the end of the platform, a Killa Bees honeycomb piece on the wall with bees buzzing round it */
  function station() {
    const { svg, sky, tag, T, cloud } = LM1;
    let win = ""; for (let x = 20; x < 260; x += 40) win += '<rect x="' + x + '" y="98" width="26" height="20" rx="3" fill="#cfe6ff" opacity=".9"/>';
    let sky2 = ""; [[0, 40], [14, 66], [30, 50], [46, 90], [62, 58], [78, 44], [94, 70], [110, 36]].forEach(([x, h]) => sky2 += '<rect x="' + (250 + x) + '" y="' + (94 - h) + '" width="13" height="' + h + '" fill="#7a8aa6"/>');
    let comb = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) { const x = 196 + c * 23 + (r % 2) * 12, y = 186 + r * 18; comb += '<path d="M' + x + ' ' + (y - 10) + 'l9 5v10l-9 5-9-5v-10z" fill="' + ((r + c) % 3 ? "#f2c14e" : "#ffd21a") + '" stroke="#1a1408" stroke-width="2"/>'; }
    const bee = (x, y, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="6" ry="4" fill="#ffd21a" stroke="#111"/><path d="M-2 -4v8M2 -4v8" stroke="#111" stroke-width="1.6"/><ellipse cx="-1" cy="-6" rx="3" ry="2" fill="#fff" opacity=".8"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rm1)"/>' + cloud("lm-drift", 0, 26, 1) +
      sky2 + '<rect x="0" y="94" width="400" height="20" fill="#3d7aa6"/>' +
      '<g class="lm-boat"><path d="M300 94h60l-6 6h-48z" fill="#f47b20"/><rect x="312" y="86" width="36" height="8" fill="#f47b20"/></g>' +
      /* canopy + sign */
      '<rect x="0" y="16" width="230" height="8" fill="#2a3a5a"/><rect x="40" y="24" width="5" height="64" fill="#444"/><rect x="190" y="24" width="5" height="64" fill="#444"/>' +
      '<rect x="20" y="34" width="190" height="28" rx="3" fill="#111"/><rect x="20" y="34" width="190" height="3" fill="#fff"/>' +
      T(30, 55, "St. George", 16, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) +
      '<rect x="164" y="41" width="36" height="15" rx="7" fill="#0039a6"/>' + T(182, 52, "SIR", 9, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* the car + bumper */
      '<g class="anim-train"><rect x="-10" y="88" width="280" height="62" rx="8" fill="#e8ecf2" stroke="#4a5a7a" stroke-width="2"/>' +
      '<rect x="-10" y="124" width="280" height="10" fill="#0039a6"/>' + win + '<circle cx="264" cy="142" r="4" fill="#fff6c2"/></g>' +
      '<rect x="300" y="126" width="28" height="24" fill="#ffd21a"/><path d="M300 126l28 24M328 126l-28 24" stroke="#111" stroke-width="3"/>' +
      '<rect x="0" y="150" width="400" height="8" fill="#eab308"/><rect x="0" y="158" width="400" height="102" fill="#5a5450"/>' +
      /* the honeycomb piece + bees */
      comb + bee(180, 170, "lm-swim") + bee(300, 176, "lm-swim lm-sw2") + bee(360, 214, "lm-bob") +
      tag("KILLA BEES", 190, 236, 30, "#fff", -4) +
      tag("REMEDY", 16, 214, 40, "#ffd21a", -6) + tag("CODE RED", 20, 250, 22, "#e0263a", -3),
      sky("rm1", "#8fc3ea", "#f2e2c0"));
  }

  /* 2. Moravian Cemetery in New Dorp: the rolling hillside of stones, the granite Vanderbilt mausoleum with its domed chapel front, leaves coming down */
  function snug() {
    const { svg, sky, tag, T, plaque, tree, cloud, bird } = LM1;
    let stones = ""; [[30, 200], [62, 192], [96, 206], [292, 196], [326, 204], [360, 192], [130, 216], [270, 214], [56, 226], [340, 228]].forEach(([x, y], k) =>
      stones += '<path d="M' + (x - 6) + ' ' + y + 'v-' + (12 + k % 3 * 3) + 'a6 6 0 0 1 12 0v' + (12 + k % 3 * 3) + 'z" fill="' + (k % 2 ? "#a8a49a" : "#8e8a80") + '"/>');
    let leaves = ""; [[60, ""], [180, " lm-l2"], [320, " lm-l3"], [250, ""]].forEach(([x, c]) => leaves += '<g class="lm-fall' + c + '"><path d="M' + x + ' 60q4-6 8 0q-4 6-8 0z" fill="#d9822b"/></g>');
    return svg(
      '<rect width="400" height="260" fill="url(#rm2)"/>' + cloud("lm-drift", 0, 30, 1, .7) + bird("lm-fly", 0, 50) +
      /* rolling hills */
      '<path d="M0 150q100-50 200-30t200 10V260H0z" fill="#5a7a3a"/><path d="M0 190q120-40 240-10t160 0V260H0z" fill="#6a8a42"/>' +
      tree(30, 150, 22, "#c8622a") + tree(370, 144, 22, "#d9a02b", "lm-swayb lm-s2") + tree(90, 136, 14, "#8a5a2a") +
      /* the Vanderbilt mausoleum: granite, arcaded front, the dome */
      '<rect x="130" y="94" width="140" height="74" fill="#b0aca2"/><rect x="124" y="88" width="152" height="8" fill="#c6c2b8"/>' +
      '<path d="M170 88a30 26 0 0 1 60 0z" fill="#9a968c"/><rect x="196" y="56" width="8" height="8" fill="#8a867c"/><path d="M200 50v6M196 53h8" stroke="#8a867c" stroke-width="2"/>' +
      [146, 172, 214, 240].map(x => '<path d="M' + x + ' 160v-30a7 7 0 0 1 14 0v30z" fill="#4a4a4a"/>').join("") +
      '<path d="M188 168v-44a12 12 0 0 1 24 0v44z" fill="#2a2a2a"/><path d="M186 124a14 14 0 0 1 28 0" stroke="#d8d4ca" stroke-width="3" fill="none"/>' +
      T(200, 104, "VANDERBILT", 8, "#4a4842", { ls: 2 }) +
      '<path d="M150 168h100v6H150zM140 174h120v6H140z" fill="#c6c2b8"/>' +
      stones + leaves +
      '<path d="M200 260q-10-40 0-80" stroke="#c8b890" stroke-width="12" fill="none"/>' +
      plaque(8, 8, 160, "MORAVIAN CEMETERY", "NEW DORP · STATEN ISLAND", "#1a1408", "#f2c14e") +
      tag("REMEDY", 270, 250, 28, "#ffd21a", -4),
      sky("rm2", "#9ab8d8", "#f2dcc0"));
  }

  /* 3. Willowbrook Park: the Carousel for All Children, striped canopy, horses going up and down */
  function carousel() {
    let stripes = "";
    for (let i = 0; i < 12; i++) stripes += '<path d="M200 58L' + (56 + i * 24) + ' 108h24z" fill="' + (i % 2 ? "#f4f0e6" : RED) + '"/>';
    let bulbs = "";
    for (let x = 64; x <= 340; x += 14) bulbs += '<circle class="flk' + (x % 28 ? " flk2" : "") + '" cx="' + x + '" cy="114" r="2.6" fill="#fff1a8"/>';
    const horse = (x, c, cls) => '<g class="bob ' + cls + '"><rect x="' + (x + 12) + '" y="118" width="2" height="62" fill="' + GOLD + '"/>' +
      '<path d="M' + x + ' 160q4-12 18-12h8l6-10 6 4-4 10q0 10-8 12h-20z" fill="' + c + '" stroke="#5a4636" stroke-width="1.5"/>' +
      '<path d="M' + (x + 2) + ' 166l-4 12M' + (x + 24) + ' 166l4 12" stroke="' + c + '" stroke-width="3"/><path d="M' + (x + 8) + ' 150h10" stroke="' + RED + '" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="40" cy="190" r="40" fill="#4f8a3a"/><circle cx="370" cy="186" r="44" fill="#4f8a3a"/>' +
      /* the round house */
      '<rect x="60" y="108" width="280" height="90" fill="#2a1d3a"/>' +
      '<g clip-path="url(#cl3)"><g class="ride">' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => horse(70 + i * 60, ["#f4f0e6", "#d7a76a", "#9ac7e8"][i % 3], i % 2 ? "bob2" : "")).join("") + '</g></g>' +
      '<rect x="56" y="104" width="288" height="10" fill="' + GOLD + '"/>' + stripes + bulbs +
      '<rect x="196" y="40" width="8" height="20" fill="' + GOLD + '"/><path class="flag" d="M204 40h18v10h-18z" fill="' + RED + '"/>' +
      '<rect x="52" y="196" width="296" height="10" fill="#8a6a4a"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#6aa04f"/>' +
      tag("WILLOWBROOK", 18, 244, 26, GOLD, -3),
      sky("g3", "#8cc3ea", "#fbe7c0") + '<clipPath id="cl3"><rect x="60" y="108" width="280" height="90"/></clipPath>');
  }

  /* 4. The Swarm: Killa Bee hives in a North Shore garden at golden hour, the bees pouring out */
  function swarm() {
    const hive = (x, y) => '<rect x="' + x + '" y="' + y + '" width="54" height="16" fill="#f2d15a" stroke="#7a5a12" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="' + (y + 16) + '" width="54" height="16" fill="#eab308" stroke="#7a5a12" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="' + (y + 32) + '" width="54" height="16" fill="#f2d15a" stroke="#7a5a12" stroke-width="1.5"/>' +
      '<rect x="' + (x - 4) + '" y="' + (y - 6) + '" width="62" height="7" fill="#e9e3d0" stroke="#7a5a12" stroke-width="1.5"/>' +
      '<rect x="' + (x + 20) + '" y="' + (y + 44) + '" width="14" height="3" fill="#2b1d08"/><rect x="' + (x - 2) + '" y="' + (y + 48) + '" width="58" height="6" fill="#6a4a2a"/>';
    const bee = (x, y, cls) => '<g class="bee ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.4" fill="#ffd21a"/><path d="M' + (x - 1.5) + ' ' + (y - 3) + 'v6M' + (x + 1.5) + ' ' + (y - 3) + 'v6" stroke="#111" stroke-width="1.4"/>' +
      '<ellipse cx="' + (x - 1) + '" cy="' + (y - 4.5) + '" rx="3" ry="2" fill="#e6f6ff" opacity=".85"/></g>';
    let bees = "";
    [[90, 140], [120, 110], [150, 130], [180, 96], [210, 120], [240, 90], [270, 112], [300, 80], [330, 104], [200, 70], [140, 86], [260, 60]].forEach((b, i) => bees += bee(b[0], b[1], ["", "b2", "b3", "b4"][i % 4]));
    let flowers = "";
    for (let x = 6; x < 400; x += 18) flowers += '<path d="M' + x + ' 230v-' + (14 + (x * 7) % 12) + '" stroke="#3d6b2c" stroke-width="2"/><circle cx="' + x + '" cy="' + (230 - 14 - (x * 7) % 12) + '" r="4" fill="' + ["#ffd34d", "#ff8a5b", "#f4f0e6", "#c9a4ff"][x % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="330" cy="70" r="26" fill="#ffd27a" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="16" fill="#3a6f94"/>' +
      /* the Bayonne side cranes far off across the Kill */
      '<path d="M40 150v-30h20v6h-14v24M300 150v-36h26v6h-20v30" stroke="#6a5a6a" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="166" width="400" height="94" fill="#5a8a3a"/>' +
      hive(60, 168) + hive(150, 172) + hive(240, 168) + flowers + bees +
      tag("KILLA BEES", 18, 252, 28, GOLD, -4),
      sky("g4", "#f2a65a", "#ffe2a8"));
  }

  /* 5. New Dorp Ln and Hylan Blvd, down from his old high school: green signs, the tag wall */
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
      '<rect x="256" y="196" width="144" height="24" fill="#15243a"/><g opacity=".55"><path d="M262 202h18M296 208h24M336 201h14M366 211h20" stroke="#9fc4e8" stroke-width="1"><animateTransform attributeName="transform" type="translate" values="0 0;8 0;0 0" dur="3s" repeatCount="indefinite"/></path></g>' + '<path d="M256 194h144" stroke="#2c3a50" stroke-width="3"/>' + vzb({"t":[{"x":346,"top":140,"deck":182,"foot":198,"w":11},{"x":382,"top":152,"deck":180,"foot":196,"w":7}],"al":[290,190],"ar":[400,182],"sag":168,"n":8,"col":"#8d96a0","cw":1,"dt":2.4,"car":0.9,"lit":true,"lr":0.7}) +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2a24"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + Math.max(16, x) + '" y="' + y + '" width="' + (x < 16 ? 22 : 28) + '" height="10" fill="#4a362e"/>'; return b; })() +
      tag("REMEDY", 30, 132, 50, GOLD, -7) + tag("CODE RED", 40, 176, 28, RED, -3) + tag("SHAOLIN", 54, 208, 22, "#f4f0e6", -2) +
      '<rect class="drip" x="70" y="134" width="3" height="16" fill="' + GOLD + '"/><rect class="drip" x="150" y="128" width="3" height="20" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      /* a little bee painted by the piece */
      '<ellipse cx="226" cy="196" rx="12" ry="8" fill="#ffd21a" stroke="#000" stroke-width="2"/><path d="M222 189v14M230 189v14" stroke="#111" stroke-width="3"/><ellipse cx="222" cy="185" rx="7" ry="4" fill="#e6f6ff" stroke="#000"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="262" y="88" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">New Dorp Ln</text>' +
      '<rect x="266" y="110" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Hylan Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a2a3a"));
  }

  /* LM1 helpers for the redrawn landmark rooms: same svg / sky / tag / bullet style as above, with their own little animations */
  const LM1 = (function () {
    const css = '<style>' +
      '@keyframes lmDrift{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lm-drift{animation:lmDrift 24s linear infinite}.lm-d2{animation-delay:-12s}' +
      '@keyframes lmCar{from{transform:translateX(-110px)}to{transform:translateX(510px)}}.lm-car{animation:lmCar 6s linear infinite}.lm-c2{animation-delay:-3s}' +
      '@keyframes lmCarL{from{transform:translateX(510px)}to{transform:translateX(-110px)}}.lm-carL{animation:lmCarL 7.5s linear infinite}' +
      '@keyframes lmFlick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmFlick 2.2s infinite}.lm-f2{animation-delay:-.8s}' +
      '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{transform-box:fill-box;transform-origin:50% 0;animation:lmSway 3s ease-in-out infinite}' +
      '.lm-swayb{transform-box:fill-box;transform-origin:50% 100%;animation:lmSway 3.6s ease-in-out infinite}.lm-s2{animation-delay:-1.5s}' +
      '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lm-bob{animation:lmBob 1.4s ease-in-out infinite}.lm-b2{animation-delay:-.7s}.lm-b3{animation-delay:-.35s}' +
      '@keyframes lmRise{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(14px,-150px);opacity:0}}.lm-rise{animation:lmRise 6s ease-in infinite}' +
      '@keyframes lmBlink{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blink{animation:lmBlink 1s steps(1) infinite}.lm-k2{animation-delay:-.5s}' +
      '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lmSpin 14s linear infinite}' +
      '@keyframes lmFly{from{transform:translate(-80px,30px)}to{transform:translate(480px,-30px)}}.lm-fly{animation:lmFly 9s linear infinite}' +
      '@keyframes lmLand{from{transform:translate(460px,-40px)}to{transform:translate(-120px,40px)}}.lm-land{animation:lmLand 10s linear infinite}' +
      '@keyframes lmRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lm-rip{animation:lmRip 3s ease-in-out infinite}.lm-r2{animation-delay:-1.5s}' +
      '@keyframes lmBoat{0%,100%{transform:translateX(0)}50%{transform:translateX(-60px)}}.lm-boat{animation:lmBoat 12s ease-in-out infinite}' +
      '@keyframes lmWalk{from{transform:translateX(0)}to{transform:translateX(70px)}}.lm-walk{animation:lmWalk 5s ease-in-out infinite alternate}.lm-w2{animation-delay:-2.5s}' +
      '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,250px) rotate(300deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}.lm-l2{animation-delay:-2s}.lm-l3{animation-delay:-4s}' +
      '@keyframes lmDrop{0%{transform:translateY(0)}100%{transform:translateY(118px)}}.lm-drop{animation:lmDrop 2.6s cubic-bezier(.5,0,.9,.6) infinite}' +
      '@keyframes lmBall{0%{transform:translate(0,0)}50%{transform:translate(-90px,-26px)}100%{transform:translate(-180px,0)}}.lm-ball{animation:lmBall 2.4s linear infinite}' +
      '@keyframes lmSwim{0%,100%{transform:translateX(0)}50%{transform:translateX(90px)}}.lm-swim{animation:lmSwim 7s ease-in-out infinite}.lm-sw2{animation-delay:-3.5s}' +
      '</style>';
    const svg = (inner, defs) =>
      '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
    const sky = (id, top, bottom) =>
      '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
    const tag = (txt, x, y, size, fill, rot) =>
      '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
      '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
    const bullet = (x, y, letter, color, dark, r) => { r = r || 11;
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36).toFixed(1) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    const T = (x, y, txt, size, fill, o) => { o = o || {};
      return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-family="' + (o.f || "Anton, Impact, sans-serif") + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') +
        (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + ' font-size="' + size + '" fill="' + fill + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + '>' + txt + '</text>'; };
    /* a name plaque: dark box, title + subtitle */
    const plaque = (x, y, w, title, sub, bg, accent) => {
      const ts = Math.min(12, (w - 14) / (title.length * .66)), ss = sub ? Math.min(8, (w - 12) / (sub.length * .62 + sub.length * 1.5 / 8)) : 0;
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (sub ? 34 : 22) + '" rx="4" fill="' + bg + '" stroke="' + accent + '" stroke-width="2"/>' +
        T(x + w / 2, y + 16, title, ts.toFixed(1), "#fff") + (sub ? T(x + w / 2, y + 28, sub, ss.toFixed(1), accent, { f: "Barlow, Arial, sans-serif", w: 700, ls: (ss * 1.5 / 8).toFixed(2) }) : ""); };
    /* green NYC street sign blade */
    const blade = (x, y, w, txt) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      T(x + w / 2, y + 13, txt, 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 });
    const car = (cls, y, c, w) => { w = w || 44;
      return '<g class="' + cls + '"><rect x="0" y="' + y + '" width="' + w + '" height="12" rx="4" fill="' + c + '"/><rect x="' + (w * .22) + '" y="' + (y - 7) + '" width="' + (w * .5) + '" height="8" rx="3" fill="' + c + '"/>' +
        '<rect x="' + (w * .27) + '" y="' + (y - 5) + '" width="' + (w * .4) + '" height="5" fill="#cfe6ff" opacity=".8"/><circle cx="' + (w * .22) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/><circle cx="' + (w * .78) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/>' +
        '<rect x="' + (w - 3) + '" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>'; };
    /* faceless figure (silhouette), optional sign held up */
    const fig = (x, y, c, sign, sc) => { sc = sc || 1;
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><circle cx="0" cy="-30" r="5" fill="' + c + '"/><path d="M-6 -24h12l2 16h-4l-1 14h-6l-1-14h-4z" fill="' + c + '"/>' +
        (sign ? '<path d="M5 -22l6-14" stroke="' + c + '" stroke-width="2.5"/><rect x="' + (13 - Math.max(30, sign[0].length * 4.6 + 6) / 2) + '" y="-58" width="' + Math.max(30, sign[0].length * 4.6 + 6) + '" height="20" fill="' + sign[1] + '" stroke="#222" stroke-width="1"/>' +
          T(13, -44, sign[0], 7, sign[2] || "#111", { f: "Barlow, Arial, sans-serif", w: 700 }) : "") + '</g>'; };
    const wins = (x0, y0, cols, rows, dx, dy, w, h, c, lit) => { let s = "";
      for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += '<rect x="' + (x0 + k * dx) + '" y="' + (y0 + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + ((lit && (k * 7 + r * 3) % 4 === 0) ? lit : c) + '"/>';
      return s; };
    const brickLines = (x, y, w, h, c, step) => { let s = ""; for (let yy = y + (step || 7); yy < y + h; yy += (step || 7)) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".6"/>'; return s; };
    const cloud = (cls, x, y, s, op) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || .8) + '"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff"/><ellipse cx="12" cy="-6" rx="14" ry="9" fill="#fff"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff"/></g></g>';
    const tree = (x, y, r, c, cls) => '<g class="' + (cls || "lm-swayb") + '"><rect x="' + (x - 2.5) + '" y="' + (y - 4) + '" width="5" height="' + (r + 6) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - r * .6) + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/></g>';
    const bird = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" fill="none" stroke="#222" stroke-width="1.6"/></g>';
    /* subway car side (R-type), for the station rooms */
    const subCar = (x, y, w, stripe, letters) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="4" fill="' + stripe + '"/>';
      for (let k = x + 14; k < x + w - 40; k += 44) s += '<rect x="' + k + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
      return s + '<rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="22" rx="3" fill="#1d2a3a"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 50) + '" r="3.5" fill="#fff6c2"/>' + (letters || ""); };
    return { svg, sky, tag, bullet, stars, T, plaque, blade, car, fig, wins, brickLines, cloud, tree, bird, subCar };
  })();

  window.SCENES = { station, snug, carousel, swarm, corner };
})();
