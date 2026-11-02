/* Park Hill and around Staten Island: opening scenes for Raekwon's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,240px) rotate(300deg);opacity:.9}}' +
    '.leaf{animation:leaf 6s linear infinite}.l2{animation-delay:-1.5s}.l3{animation-delay:-3s}.l4{animation-delay:-4.5s}' +
    '@keyframes tug{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.tug{animation:tug 18s linear infinite;animation-delay:-7s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,4px)}}' +
    '.gul{animation:gull 12s linear infinite}' +
    '@keyframes win{0%,60%,100%{opacity:.95}65%,90%{opacity:.15}}' +
    '.win{animation:win 5s infinite}.w2{animation-delay:-1.7s}.w3{animation-delay:-3.3s}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}' +
    '.bnc{animation:bounce 1s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes sail{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.sail{animation:sail 16s linear infinite;animation-delay:-11s}' +
    '@keyframes smk{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-18px);opacity:0}}.smk{animation:smk 2.6s ease-out infinite}.s2{animation-delay:-1.3s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", RED = "#e63946", BLUE = "#5ec8ff";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PUR = "#b388ff", GLD = "#ffd166", ICY = "#7fdbff";

  /* 1. Clifton, and the climb: the SIR pulling in down by the tracks, Targee St going up the hill to Delford St, the Park Hill towers on top, steam off the Chef's pot on a window ledge */
  function station() {
    let windows = "";
    for (let x = 18; x < 200; x += 40) windows += '<rect x="' + x + '" y="186" width="26" height="16" rx="3" fill="#fff1b8" opacity=".9"/>';
    const tower = (x, y, w) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#7a4a32"/>';
      for (let yy = y + 8; yy < 144; yy += 12) for (let xx = x + 5; xx < x + w - 6; xx += 11) s += '<rect' + ((xx + yy) % 7 === 0 ? ' class="win w' + ((xx % 3) + 1) + '"' : '') + ' x="' + xx + '" y="' + yy + '" width="6" height="7" fill="' + ((xx * 3 + yy) % 5 < 2 ? "#ffd98a" : "#2a1d17") + '"/>';
      return s; };
    const blade = (cx, y, t, rot) => '<g transform="rotate(' + (rot || 0) + ' ' + cx + ' ' + y + ')"><rect x="' + (cx - t.length * 3.6 - 8) + '" y="' + y + '" width="' + (t.length * 7.2 + 16) + '" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/><text x="' + cx + '" y="' + (y + 12) + '" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">' + t + '</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(20) + '<circle cx="40" cy="30" r="11" fill="#f4ecff"/>' +
      /* the hill and Park Hill on top */
      '<path d="M120 170L400 70v100z" fill="#2e2a3e"/>' + tower(250, 34, 54) + tower(312, 22, 60) + tower(190, 60, 46) +
      /* the Chef's window: a pot on the ledge, steam going up */
      '<rect x="322" y="46" width="22" height="18" fill="#ffd98a"/><rect x="318" y="64" width="30" height="4" fill="#5a3a26"/><path d="M324 64v-8h18v8z" fill="#9aa3ad"/><rect x="322" y="54" width="22" height="3" fill="#6b7480"/>' +
      '<path class="smk" d="M328 50q-4-6 0-12" stroke="#f4f4f4" stroke-width="2.5" fill="none" opacity=".8"/><path class="smk s2" d="M336 50q4-6 0-12" stroke="#f4f4f4" stroke-width="2.5" fill="none" opacity=".8"/>' +
      /* Targee St climbing, street lamps, the signs */
      '<path d="M120 170L400 84" stroke="#4a4a56" stroke-width="16"/><path d="M120 170L400 84" stroke="#eab308" stroke-width="1.5" stroke-dasharray="10 8"/>' +
      [170, 250].map((x, i) => '<rect x="' + (x - 1.5) + '" y="' + (128 - i * 24) + '" width="3" height="30" fill="#1d1d24"/><circle class="flk' + (i ? ' flk2' : '') + '" cx="' + x + '" cy="' + (126 - i * 24) + '" r="4" fill="#fff4c8"/>').join("") +
      blade(150, 132, "Targee St", -16) + blade(352, 112, "Delford St", 0) +
      '<g class="bob"><circle cx="212" cy="130" r="4" fill="#2a1a10"/><rect x="208" y="134" width="8" height="12" rx="2" fill="' + PUR + '"/></g>' +
      /* the station below */
      '<rect x="0" y="146" width="230" height="8" fill="#d9c9a3"/><rect x="0" y="154" width="230" height="3" fill="#9a8a66"/>' +
      '<rect x="10" y="150" width="140" height="26" rx="3" fill="#111"/><rect x="10" y="150" width="140" height="3" fill="#fff"/><text x="20" y="170" ' + FONT + ' font-size="14" fill="#fff">Clifton</text>' + sir(124, 164) +
      '<rect x="0" y="176" width="400" height="38" fill="#1d1c28"/>' +
      '<g class="anim-train">' +
        '<rect x="0" y="178" width="236" height="34" rx="6" fill="#b9bfc9" stroke="#5b6270" stroke-width="2"/>' +
        '<rect x="0" y="204" width="236" height="4" fill="#0039a6"/>' + windows + '<circle cx="230" cy="206" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="214" width="400" height="7" fill="#eab308"/><rect x="0" y="221" width="400" height="39" fill="#16151e"/>' +
      tag("RAEKWON", 14, 252, 26, PUR, -4) + tag("THE CHEF", 252, 254, 24, GLD, -5),
      sky("g1", "#0d0a24", "#3a2a5a"));
  }

  /* 2. Historic Richmond Town: the Third County Courthouse, Greek Revival with its white portico and cupola, a lantern flickering */
  function courthouse() {
    let cols = "";
    [146, 176, 206, 236].forEach(x => cols += '<rect x="' + x + '" y="120" width="14" height="74" fill="#f6f2e8" stroke="#a8a294" stroke-width="1.2"/><rect x="' + (x - 2) + '" y="116" width="18" height="5" fill="#f6f2e8" stroke="#a8a294"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="60" cy="46" r="16" fill="#fff4c8"/>' +
      /* the red clapboard schoolhouse off to the left */
      '<rect x="14" y="146" width="70" height="52" fill="#a8402c"/><path d="M10 148l39-28 39 28z" fill="#5a3a2a"/>' +
      '<path d="M14 156h70M14 166h70M14 176h70M14 186h70" stroke="#7a2a1a" stroke-width="1"/><rect x="40" y="170" width="14" height="28" fill="#3a2418"/><rect x="22" y="158" width="10" height="10" fill="#f4ecd8"/><rect x="64" y="158" width="10" height="10" fill="#f4ecd8"/>' +
      /* the courthouse body: buff walls */
      '<rect x="120" y="104" width="160" height="94" fill="#d8c49a" stroke="#8a7a5a" stroke-width="2"/>' +
      '<path d="M128 116l72-40 72 40z" fill="#f6f2e8" stroke="#a8a294" stroke-width="2" stroke-linejoin="round"/>' +
      '<circle cx="200" cy="102" r="7" fill="none" stroke="#a8a294" stroke-width="1.5"/>' +
      /* cupola */
      '<rect x="186" y="58" width="28" height="24" fill="#f6f2e8" stroke="#a8a294" stroke-width="1.5"/><path d="M190 64h20v12h-20z" fill="#2c3a4a"/>' +
      '<path d="M182 60q18-24 36 0z" fill="#6a7480" stroke="#3a4048" stroke-width="1.5"/><path d="M200 38v-8" stroke="#3a4048" stroke-width="2"/>' +
      cols +
      '<rect x="190" y="150" width="20" height="44" fill="#4a3424"/>' +
      '<rect x="120" y="194" width="160" height="8" fill="#cfc6b2"/>' +
      /* the lawn and the dirt lane */
      '<rect x="0" y="198" width="400" height="62" fill="#5c8a3a"/><path d="M0 232q200-12 400 0v14q-200-12-400 0z" fill="#b89a6a"/>' +
      /* a lantern post */
      '<rect x="326" y="150" width="4" height="54" fill="#1d1d24"/><rect x="320" y="134" width="16" height="18" rx="2" fill="#1d1d24"/><rect class="flk" x="323" y="137" width="10" height="12" fill="#ffd27a"/>' +
      tag("RICHMOND TOWN", 18, 252, 22, PUR, -3),
      sky("g2", "#7ab0dc", "#f2e2bc"));
  }

  /* 3. Tottenville: the Conference House, the old fieldstone manor on the lawn over Raritan Bay, a sailboat going by */
  function conference() {
    let stones = "";
    for (let y = 112; y < 196; y += 10) for (let x = 132 + (Math.round(y / 10) % 2) * 8; x < 268; x += 16) stones += '<rect x="' + x + '" y="' + y + '" width="13" height="8" rx="3" fill="' + ["#9a8c74", "#8a7c66", "#a89a82", "#7e715c"][Math.round(x / 8 + y / 10) % 4] + '"/>';
    let wins = "";
    [[146, 124], [184, 124], [222, 124], [146, 160], [222, 160]].forEach(w => wins += '<rect x="' + w[0] + '" y="' + w[1] + '" width="20" height="24" fill="#2c3a4a" stroke="#f4efe2" stroke-width="2.5"/><path d="M' + (w[0] + 10) + ' ' + w[1] + 'v24M' + w[0] + ' ' + (w[1] + 12) + 'h20" stroke="#f4efe2" stroke-width="1.2"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="330" cy="50" r="18" fill="#fff1c8"/>' +
      /* the bay */
      '<rect x="0" y="150" width="400" height="44" fill="#3f78a0"/>' +
      '<path class="shim" d="M20 162h50M290 172h70" stroke="#e6f2fa" stroke-width="2"/>' +
      '<g class="sail"><g class="bob"><path d="M20 172h40l-6 8H26z" fill="#f2f2f2"/><path d="M40 170V136l18 32z" fill="#fff"/><path d="M38 170V142l-14 26z" fill="' + PUR + '"/></g></g>' +
      /* the house: fieldstone, steep gable roof, chimneys at both ends */
      '<rect x="128" y="108" width="144" height="90" fill="#8a7c66" stroke="#5a5040" stroke-width="2"/>' + stones +
      '<path d="M120 110l80-44 80 44z" fill="#4a3a32" stroke="#2e231d" stroke-width="2" stroke-linejoin="round"/>' +
      '<rect x="134" y="66" width="16" height="36" fill="#8a7c66" stroke="#5a5040" stroke-width="1.5"/><rect x="250" y="66" width="16" height="36" fill="#8a7c66" stroke="#5a5040" stroke-width="1.5"/>' +
      '<path class="smk" d="M142 62q-6-8 2-14t-2-14" stroke="#e8e4dc" stroke-width="4" fill="none" opacity=".7"/>' +
      '<rect x="186" y="84" width="28" height="14" fill="#2c3a4a" stroke="#f4efe2" stroke-width="2"/>' +
      wins + '<rect x="188" y="162" width="24" height="36" fill="#5a3a24" stroke="#f4efe2" stroke-width="2"/>' +
      /* the lawn */
      '<path d="M0 194q200-16 400 0v66H0z" fill="#5c9a46"/><path d="M190 260l6-62h8l6 62z" fill="#c9b48a"/>' +
      '<rect x="40" y="130" width="8" height="72" fill="#4a3a2c"/><circle cx="44" cy="122" r="30" fill="#3f7a33"/><circle cx="66" cy="140" r="18" fill="#5a9a40"/>' +
      tag("TOTTENVILLE", 18, 250, 24, PUR, -3) + tag("ICE WATER", 262, 250, 20, ICY, -5),
      sky("g3", "#86b8de", "#f6e2b8"));
  }

  /* 4. Park Hill at dusk: the tall apartment towers up on the hill, windows lighting up, steam rising off the Chef's pot */
  function parkhill() {
    const tower = (x, w, top) => {
      let s = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (214 - top) + '" fill="#8a5a44" stroke="#4a2a1e" stroke-width="2"/>';
      let k = 0;
      for (let y = top + 10; y < 204; y += 13) for (let xx = x + 7; xx < x + w - 7; xx += 13) {
        k++;
        const lit = (k * 5) % 6;
        s += '<rect class="' + (lit === 0 ? "win" : lit === 1 ? "win w2" : lit === 2 ? "win w3" : "") + '" x="' + xx + '" y="' + y + '" width="7" height="8" fill="' + (lit < 4 ? "#ffd98a" : "#2a1e1a") + '"/>';
      }
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(14) +
      '<circle cx="340" cy="40" r="12" fill="#ffe2c8"/>' +
      '<path d="M0 214q200-60 400 0v46H0z" fill="#3a4a2e"/>' +
      tower(30, 96, 54) + tower(150, 96, 30) + tower(272, 96, 64) +
      '<rect x="0" y="214" width="400" height="46" fill="#2a2a32"/>' +
      /* the pot on the stoop, steam rising */
      '<rect x="168" y="214" width="64" height="10" fill="#5a5a66"/>' +
      '<path d="M178 196h44v18q0 6-6 6h-32q-6 0-6-6z" fill="#3a3f48" stroke="#1d1d24" stroke-width="1.5"/><rect x="174" y="192" width="52" height="6" rx="2" fill="#5a6068"/>' +
      '<path d="M172 202h-6M228 202h6" stroke="#1d1d24" stroke-width="3"/>' +
      '<path class="smk" d="M190 188q-6-8 2-14t-2-14" stroke="#f4f0ff" stroke-width="3" fill="none" opacity=".8"/>' +
      '<path class="smk s2" d="M210 188q6-8-2-14t2-14" stroke="#f4f0ff" stroke-width="3" fill="none" opacity=".8"/>' +
      tag("PARK HILL", 14, 252, 24, PUR, -3) + tag("CUBAN LINX", 256, 252, 20, GLD, -6),
      sky("g4", "#1a1240", "#b0607a"));
  }

  /* 5. Targee St and Delford St in Park Hill: green signs, the tag wall, a purple drip */
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
      '<circle cx="364" cy="30" r="12" fill="#f4ecff"/>' +
      vzb({"t":[{"x":-300,"top":-150,"deck":160,"foot":300,"w":44},{"x":374,"top":10,"deck":160,"foot":230,"w":42}],"al":[-500,170],"ar":[470,176],"sag":120,"n":22,"cw":2.4,"hw":0.8,"dt":7,"col":"#8d96a0","hi":"#c3cad2","car":1.8}) +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2e44"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#463852"/>'; return b; })() +
      tag("RAEKWON", 30, 124, 40, PUR, -7) + tag("THE CHEF", 40, 170, 28, GLD, -3) + tag("ICE WATER", 50, 206, 22, ICY, -2) +
      '<rect class="drp" x="96" y="126" width="3" height="8" fill="' + PUR + '"/><rect class="drp" x="170" y="114" width="3" height="8" fill="' + PUR + '" style="animation-delay:-1.1s"/>' +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="266" y="88" width="72" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Targee St</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Delford St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d0a22", "#2e2244"));
  }

  window.SCENES = { station, courthouse, conference, parkhill, corner };
})();
