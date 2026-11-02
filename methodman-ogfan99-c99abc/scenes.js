/* Park Hill / Clifton, Staten Island opening scenes for Method Man's game. Each one is a small animated SVG, 400 x 260. */
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
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cr1{animation:carR 5s linear infinite}' +
    '@keyframes flut{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flut 1.3s ease-in-out infinite}' +
    '@keyframes kite{0%,100%{transform:translate(0,0) rotate(0)}50%{transform:translate(8px,-6px) rotate(6deg)}}.kite{animation:kite 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes sway{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}.sway{animation:sway 2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
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
  const YEL = "#ffd23f", BLZ = "#ff6b35", ICE = "#9ad1ff";
  const flag = (x, y, c) => '<path d="M' + x + ' ' + y + 'v-26" stroke="#ddd" stroke-width="2"/><path class="flg" d="M' + (x + 1) + ' ' + (y - 26) + 'h20v12h-20z" fill="' + c + '"/>';

  /* 1. Clifton from the street: the Staten Island Railway car rolling over the bridge, the stair up the hill to the Park Hill towers, and the Wu-Tang Clan District sign at Targee & Vanderbilt on the corner */
  function station() {
    const { svg, sky, tag, T, stars, wins, brickLines } = LM1;
    let win = ""; for (let x = 16; x < 260; x += 38) win += '<rect x="' + x + '" y="94" width="24" height="16" rx="2" fill="#cfe6ff" opacity=".9"/>';
    let towers = ""; [[150, 30, 56], [214, 14, 60], [282, 36, 54], [342, 22, 52]].forEach(([x, y, w]) => towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (80 - y + 10) + '" fill="#8a3e2a"/>' + brickLines(x, y, w, 80 - y + 10, "#6e2e1e", 6) + wins(x + 6, y + 6, 4, Math.floor((80 - y) / 12), 12, 12, 7, 7, "#2a1410", "#ffd98a"));
    let steps = ""; for (let i = 0; i < 10; i++) steps += '<rect x="' + (300 + i * 10) + '" y="' + (196 - i * 9) + '" width="' + (100 - i * 10) + '" height="9" fill="' + (i % 2 ? "#8a8478" : "#9a9488") + '"/>';
    const blade = (x, y, w, t, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' + T(x + w / 2, y + 13, t, fs || 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 });
    return svg(
      '<rect width="400" height="260" fill="url(#mm1)"/>' + stars(22) +
      /* Park Hill up on the hill */
      '<path d="M120 90q120-30 280-20V130H120z" fill="#2a3a2a"/>' + towers +
      /* the railroad bridge over the street and the car on it */
      '<rect x="0" y="116" width="290" height="12" fill="#4a4e56"/><rect x="0" y="128" width="290" height="4" fill="#ffd23f"/>' +
      '<g class="anim-train"><rect x="-20" y="84" width="280" height="34" rx="6" fill="#e8ecf2" stroke="#4a5a7a" stroke-width="2"/><rect x="-20" y="108" width="280" height="6" fill="#0039a6"/>' + win + '<circle cx="252" cy="112" r="3" fill="#fff6c2"/></g>' +
      '<rect x="20" y="132" width="8" height="78" fill="#3a3e46"/><rect x="262" y="132" width="8" height="78" fill="#3a3e46"/>' +
      '<rect x="34" y="138" width="150" height="26" rx="3" fill="#111"/><rect x="34" y="138" width="150" height="3" fill="#fff"/>' +
      T(44, 158, "Clifton", 15, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) +
      '<rect x="138" y="144" width="36" height="15" rx="7" fill="#0039a6"/>' + T(156, 155, "SIR", 9, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* the stair up the hill */
      '<rect x="290" y="96" width="110" height="114" fill="#3a3a34"/>' + steps + '<path d="M300 206L400 112" stroke="#c9c2b0" stroke-width="2.5"/>' +
      /* the corner, the co-named sign */
      '<rect x="0" y="210" width="400" height="50" fill="#1e1e22"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="254" y="150" width="5" height="70" fill="#4a4a4a"/>' +
      blade(196, 150, 122, "Wu-Tang Clan District", 9.5) + blade(216, 172, 82, "Targee St") + blade(210, 194, 94, "Vanderbilt Av", 10) +
      tag("TICAL", 14, 204, 28, "#ffd23f", -6) + tag("JOHNNY BLAZE", 20, 252, 22, "#ff6b35", -3),
      sky("mm1", "#0b1020", "#3a2a4a"));
  }

  /* 2. Grymes Hill: Wagner College's Main Hall, Collegiate Gothic brick with limestone trim and twin towers, flag flying */
  function wagner() {
    let wins = "";
    for (let x = 96; x < 310; x += 22) if (x < 158 || x > 236) { wins += '<path d="M' + x + ' 170v-18a6 6 0 0 1 12 0v18z" fill="#2c3a4a" stroke="#e6dcc4" stroke-width="2"/><path d="M' + x + ' 140v-12a6 6 0 0 1 12 0v12z" fill="#2c3a4a" stroke="#e6dcc4" stroke-width="2"/>'; }
    const tower = x => '<rect x="' + x + '" y="62" width="30" height="132" fill="#9a4632" stroke="#5a2418" stroke-width="2"/>' +
      '<path d="M' + x + ' 62v-8h6v4h6v-4h6v4h6v-4h6v8z" fill="#e6dcc4"/>' +
      '<path d="M' + (x + 9) + ' 110v-18a6 6 0 0 1 12 0v18z" fill="#2c3a4a" stroke="#e6dcc4" stroke-width="2"/>' +
      '<rect x="' + x + '" y="124" width="30" height="4" fill="#e6dcc4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="340" cy="44" r="16" fill="#fff4c8"/>' +
      /* the harbor and lower Manhattan far below the hill */
      '<rect x="0" y="150" width="400" height="20" fill="#5a86a8"/>' +
      '<g fill="#7a8aa6"><rect x="330" y="132" width="10" height="18"/><rect x="342" y="120" width="8" height="30"/><path d="M352 150v-36l5-10 5 10v36z"/><rect x="364" y="128" width="12" height="22"/></g>' +
      /* the building */
      '<rect x="80" y="122" width="240" height="72" fill="#9a4632" stroke="#5a2418" stroke-width="2"/>' +
      '<path d="M74 124l14-18h224l14 18z" fill="#4c5560" stroke="#2e343c" stroke-width="2" stroke-linejoin="round"/>' +
      '<rect x="80" y="146" width="240" height="4" fill="#e6dcc4"/>' + wins +
      tower(168) + tower(208) + flag(223, 54, YEL) +
      /* the arched entrance between the towers */
      '<path d="M190 194v-26a10 10 0 0 1 20 0v26z" fill="#3a2a1e" stroke="#e6dcc4" stroke-width="2"/>' +
      /* lawn on the hilltop, autumn trees */
      '<path d="M0 194q200-14 400 0v66H0z" fill="#5c9a46"/><path d="M184 260l8-66h16l8 66z" fill="#c9b48a"/>' +
      '<rect x="30" y="140" width="7" height="60" fill="#4a3a2c"/><circle cx="34" cy="132" r="26" fill="#d9862a"/>' +
      '<rect x="366" y="146" width="7" height="54" fill="#4a3a2c"/><circle cx="370" cy="138" r="22" fill="#c8551f"/>' +
      '<path class="leaf" d="M60 0q6-6 10 0q-4 6-10 0z" fill="#e09a2a"/><path class="leaf l3" d="M330 0q6-6 10 0q-4 6-10 0z" fill="#c8551f"/>' +
      tag("GRYMES HILL", 18, 248, 22, YEL, -3),
      sky("g2", "#6fa6d6", "#f4dcae"));
  }

  /* 3. Freshkills Park: rolling grass hills over the old landfill, a kite in the wind, a hawk circling, Manhattan far off */
  function freshkills() {
    let grass = "";
    for (let x = 6; x < 400; x += 14) grass += '<path class="sway" d="M' + x + ' 236q3-12 0-22" stroke="#c9b05a" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="80" cy="50" r="18" fill="#fff4c8"/>' +
      '<g fill="#9aa8c0" opacity=".8"><rect x="300" y="108" width="6" height="12"/><rect x="308" y="98" width="5" height="22"/><path d="M315 120v-28l3-8 3 8v28z"/><rect x="323" y="104" width="7" height="16"/></g>' +
      /* the mounds */
      '<path d="M0 140q80-50 170-10t130-14 100 20v124H0z" fill="#7aa64a"/>' +
      '<path d="M0 180q100-40 200-6t200-10v96H0z" fill="#a8b85a"/>' +
      '<path d="M0 214q120-20 240 0t160-6v52H0z" fill="#c9b878"/>' + grass +
      '<path d="M150 156q40-8 90 6" stroke="#e8dcb8" stroke-width="3" fill="none" stroke-dasharray="6 6"/>' +
      /* the kite and its string */
      '<g class="kite"><path d="M268 40l14 16-14 22-14-22z" fill="' + BLZ + '" stroke="#5a2410" stroke-width="1.5"/><path d="M254 56h28M268 40v38" stroke="#5a2410" stroke-width="1"/><path d="M268 78q-6 10 2 18t-2 16" stroke="' + YEL + '" stroke-width="2" fill="none"/></g>' +
      '<path d="M268 78Q240 160 214 214" stroke="#444" stroke-width="1" fill="none"/>' +
      /* the hawk */
      '<g class="gul"><path d="M40 70q10-8 18 0q8-8 18 0" stroke="#3a2a1e" stroke-width="3" fill="none"/></g>' +
      tag("FRESHKILLS", 18, 250, 24, YEL, -3) + tag("TICAL", 300, 250, 24, BLZ, -6),
      sky("g3", "#5fa0e0", "#d6ecf6"));
  }

  /* 4. South Beach: the FDR Boardwalk at sunset, lamps lighting up, waves rolling in, the bridge far off up the Narrows */
  function boardwalk() {
    let boards = "";
    for (let x = 0; x < 400; x += 12) boards += '<path d="M' + x + ' 196l' + (x < 200 ? -10 : 10) + ' 64" stroke="#7a5a3a" stroke-width="1.5"/>';
    let lamps = "";
    [60, 200, 340].forEach((x, i) => lamps += '<rect x="' + x + '" y="134" width="4" height="62" fill="#1d2329"/><path d="M' + (x - 6) + ' 134h16" stroke="#1d2329" stroke-width="3"/><circle class="flk' + (i === 1 ? " flk2" : "") + '" cx="' + (x + 2) + '" cy="128" r="7" fill="#ffe7a8"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="320" cy="96" r="22" fill="#ffb05a"/>' +
      /* the bridge far away */
      '<g stroke="#6a5a7a" fill="none" stroke-width="2" opacity=".85"><path d="M40 104v-34M120 104v-34"/><path d="M0 96Q40 70 40 70Q80 100 120 70Q140 84 170 98"/><path d="M0 104h170"/></g>' +
      /* the water and waves */
      '<rect x="0" y="104" width="400" height="44" fill="#3a6a94"/>' +
      '<path class="shim" d="M20 116h50M180 124h60M300 112h50" stroke="#ffcf8a" stroke-width="2"/>' +
      '<g class="wv"><path d="M0 146q10-6 20 0t20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/></g>' +
      '<rect x="0" y="148" width="400" height="30" fill="#e8d2a0"/>' +
      /* the boardwalk deck and rail */
      '<rect x="0" y="178" width="400" height="18" fill="#3d3328"/>' +
      (function () { let r = ""; for (let x = 4; x < 400; x += 20) r += '<rect x="' + x + '" y="178" width="3" height="18" fill="#c9b48a"/>'; return r; })() +
      '<path d="M0 178h400" stroke="#c9b48a" stroke-width="3"/>' + lamps +
      '<rect x="0" y="196" width="400" height="64" fill="#a8845a"/>' + boards +
      '<path class="gul" d="M20 60q6-6 12 0q6-6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>' +
      tag("SOUTH BEACH", 18, 250, 24, YEL, -3),
      sky("g4", "#3a3a7a", "#ff9a6a"));
  }

  /* 5. Targee St and Vanderbilt Ave in Park Hill, the Wu-Tang Clan District corner: green signs, the tag wall */
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
      '<circle cx="372" cy="26" r="11" fill="#fff1d6"/>' +
      vzb({"t":[{"x":96,"top":24,"deck":47,"foot":62,"w":7},{"x":196,"top":24,"deck":47,"foot":62,"w":7}],"al":[24,57],"ar":[262,57],"sag":44,"lit":true,"lr":0.8,"n":24,"cw":1,"dt":2,"col":"#7d8794","car":0.9}) +
      (function () { let b = '<rect x="16" y="60" width="232" height="160" fill="#2e3440"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 240; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#3a4250"/>'; return b; })() +
      tag("METHOD MAN", 22, 122, 34, YEL, -7) + tag("JOHNNY BLAZE", 32, 168, 24, BLZ, -3) + tag("TICAL", 60, 206, 28, ICE, -2) +
      '<rect class="drp" x="110" y="124" width="3" height="8" fill="' + YEL + '"/>' +
      /* streetlight */
      '<rect x="306" y="40" width="5" height="180" fill="#1d2329"/><path d="M308 42h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M324 46h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M324 54l26 0 34 166h-94z" fill="#ffe7a8"/></g>' +
      /* street signs and the honorary sign under them */
      '<rect x="270" y="70" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="83" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Targee St</text>' +
      '<rect x="262" y="92" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="105" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Vanderbilt Av</text>' +
      '<rect x="256" y="116" width="108" height="30" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="129" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">Wu-Tang Clan</text>' +
      '<text x="310" y="141" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">District</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a3a4a"));
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

  window.SCENES = { station, wagner, freshkills, boardwalk, corner };
})();
