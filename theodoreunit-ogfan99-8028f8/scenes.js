(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}.blk{animation:blink 1.6s infinite}.blk2{animation:blink 1.6s infinite;animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1;transform:scaleY(1)}30%{opacity:.75;transform:scaleY(.85)}60%{opacity:.95;transform:scaleY(1.1)}}.flk{transform-box:fill-box;transform-origin:50% 100%;animation:flick .9s ease-in-out infinite}.flk2{animation-delay:.35s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:view-box;animation:spin 12s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-28deg)}50%{transform:rotate(28deg)}}.swp{animation:sweep 5s ease-in-out infinite}' +
    '@keyframes flutter{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flutter 1.4s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.lf{animation:fall 5s linear infinite}.lf2{animation-delay:1.7s}.lf3{animation-delay:3.3s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.dft{animation:drift 26s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.bt{animation:boat 18s linear infinite}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.swm{animation:swim 7s ease-in-out infinite}' +
    '@keyframes peek{0%,30%,100%{transform:translateY(14px)}45%,85%{transform:translateY(0)}}.pk{animation:peek 4s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cr1{animation:carR 6s linear infinite}.cr2{animation:carR 6s linear infinite;animation-delay:-3s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.6}100%{transform:translateY(-26px);opacity:0}}.stm{animation:steam 3s ease-out infinite}.stm2{animation-delay:1.5s}' +
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
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="10"/><ellipse cx="-12" cy="-4" rx="11" ry="8"/></g>';
  /* SIR car (stainless, blue band), w long, at x,y top-left */
  const sirCar = (x, y, w) => {
    let win = ""; for (let i = x + 14; i < x + w - 40; i += 42) win += '<rect x="' + i + '" y="' + (y + 12) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<rect x="' + (x + w - 18) + '" y="' + (y + 12) + '" width="12" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>' +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 54) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 40, y + 54);
  };
  /* green NYC street sign blade */
  const blade = (x, y, w, txt, rot) =>
    '<g transform="rotate(' + (rot || 0) + ' ' + (x + w / 2) + ' ' + (y + 11) + ')"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f7a3d" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text></g>';
  const station = (name, x, y, w) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 14) + '" y="' + (y + 25) + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + name + '</text>' + sir(x + w - 28, y + 18);
  const YEL = "#ffd34d", BLU = "#2fb7ff", ORG = "#ff6b3d";

  /* 1. Stapleton at night, Theodore Unit's end: the stair down to Beach St toward Van Duzer, 718 scratched on the platform windscreen, the train pulling in, harbor lights beyond */
  function station1() {
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(30) +
      '<circle cx="340" cy="34" r="14" fill="#f7f3ea" opacity=".9"/>' +
      '<rect y="96" width="400" height="28" fill="#13223a"/>' +
      (function () { let l = ""; for (let x = 10; x < 400; x += 22) l += '<rect x="' + x + '" y="' + (84 + (x % 3) * 4) + '" width="10" height="' + (12 - (x % 3) * 4) + '" fill="#2a3a5a"/><circle cx="' + (x + 5) + '" cy="110" r="1.4" fill="#ffd98a" class="' + (x % 44 ? "blk" : "blk2") + '"/>'; return l; })() +
      '<rect x="0" y="48" width="400" height="10" fill="#22262e"/><rect x="0" y="58" width="400" height="4" fill="' + YEL + '"/>' +
      (function () { let p = ""; for (let x = 40; x < 400; x += 130) p += '<rect x="' + x + '" y="62" width="6" height="112" fill="#22262e"/><circle cx="' + (x + 3) + '" cy="66" r="3" fill="#fff6c2"/>'; return p; })() +
      station("Stapleton", 70, 72, 208) +
      '<g class="anim-train">' + sirCar(-44, 116, 360) + '</g>' +
      '<rect y="178" width="400" height="10" fill="#eab308"/><rect y="188" width="400" height="12" fill="#3a4048"/>' +
      (function () { let c = ""; for (let x = 30; x < 400; x += 80) c += '<rect x="' + x + '" y="200" width="8" height="34" fill="#30363e"/>'; return c; })() +
      '<rect y="234" width="400" height="26" fill="#1a1a1e"/>' +
      '<g class="cr1"><rect x="0" y="240" width="44" height="14" rx="4" fill="' + YEL + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="34" cy="254" r="4" fill="#111"/><circle cx="44" cy="246" r="2" fill="#fff6c2"/></g>' +
      /* the windscreen at the Beach St end, 718 on the glass */
      '<rect x="326" y="118" width="68" height="60" fill="#9fd0f0" opacity=".25" stroke="#c9ced6" stroke-width="2"/><rect x="328" y="112" width="64" height="6" fill="#22262e"/>' +
      tag("718", 334, 160, 28, BLU, -8) +
      '<rect x="318" y="72" width="80" height="34" rx="3" fill="#111"/>' +
      '<text x="358" y="86" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">EXIT ↓ Beach St</text>' +
      '<text x="358" y="99" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="' + YEL + '">to Van Duzer St</text>' +
      /* the stair down to the street */
      (function () { let s = ""; for (let i = 0; i < 6; i++) s += '<rect x="' + (330 + i * 10) + '" y="' + (190 + i * 8) + '" width="' + (70 - i * 10) + '" height="3" fill="#6a707a"/>'; return s; })() +
      tag("THEODORE", 50, 228, 22, YEL, -4) + tag("OPEN DOOR", 216, 232, 18, ORG, -5),
      sky("s1", "#070b1c", "#2a2048"));
  }

  /* 2. The Arthur Kill ship graveyard off Rossville: rusted hulls sitting in the marsh, a gull circling, the tide moving */
  function graveyard() {
    const hull = (x, y, w, c, tilt) => '<g transform="rotate(' + tilt + ' ' + (x + w / 2) + ' ' + y + ')"><path d="M' + x + ' ' + y + 'h' + w + 'l-12 26H' + (x + 10) + 'z" fill="' + c + '" stroke="#4a2414" stroke-width="2"/>' +
      '<rect x="' + (x + w * .55) + '" y="' + (y - 22) + '" width="' + (w * .25) + '" height="22" fill="' + c + '" stroke="#4a2414" stroke-width="2"/><rect x="' + (x + w * .58) + '" y="' + (y - 16) + '" width="8" height="6" fill="#2a1a10"/>' +
      '<path d="M' + (x + 14) + ' ' + (y + 6) + 'h' + (w - 30) + '" stroke="#c9772a" stroke-width="3" stroke-dasharray="6 8" opacity=".7"/></g>';
    return svg(
      '<style>@keyframes circ{from{transform:rotate(0)}to{transform:rotate(360deg)}}.gl{transform-origin:200px 70px;animation:circ 9s linear infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<rect y="120" width="400" height="140" fill="#5a6a6a"/>' +
      '<path d="M0 120q80-10 160 0t240-4v8H0z" fill="#6a7a4a"/>' +
      '<g fill="#8a8a7a"><rect x="300" y="96" width="6" height="24"/><rect x="320" y="90" width="4" height="30"/><path d="M296 96h40v4h-40z"/></g>' +
      hull(30, 150, 120, "#8a4a2a", -4) + hull(180, 140, 150, "#a85a2a", 3) + hull(110, 186, 110, "#6a3a24", -2) +
      '<g class="wv"><path d="M0 214q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#b8c8c0" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      (function () { let g = ""; for (let x = 0; x < 400; x += 9) g += '<path d="M' + x + ' 260l3-' + (22 + (x % 5) * 4) + ' 3 ' + (22 + (x % 5) * 4) + 'z" fill="#8a9a4a"/>'; return g; })() +
      '<g class="gl"><path d="M200 34q6-6 12 0q6-6 12 0" stroke="#f7f3ea" stroke-width="2.5" fill="none"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">SHIP GRAVEYARD · ARTHUR KILL</text>',
      sky("g1", "#8aa6b8", "#e8dcc4"));
  }

  /* 3. The Arthur Kill Lift Bridge: two tall steel towers, the rail span rising and dropping, a tug passing underneath */
  function liftbridge() {
    const tower = x => {
      let t = '<rect x="' + x + '" y="30" width="34" height="170" fill="none" stroke="#6a7a8a" stroke-width="5"/>';
      for (let y = 30; y < 190; y += 20) t += '<path d="M' + x + ' ' + y + 'l34 24M' + (x + 34) + ' ' + y + 'l-34 24" stroke="#6a7a8a" stroke-width="2"/>';
      return t + '<rect x="' + (x - 4) + '" y="22" width="42" height="12" fill="#5a6a7a"/><circle cx="' + (x + 17) + '" cy="20" r="3" fill="#ff4a3a" class="blk"/>';
    };
    return svg(
      '<style>@keyframes lift{0%,20%,100%{transform:translateY(0)}45%,75%{transform:translateY(-90px)}}.lft{animation:lift 9s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#b1)"/>' + '<g class="dft">' + cloud(120, 30, .8) + '</g>' +
      '<rect y="190" width="400" height="70" fill="#3a5a6a"/>' +
      '<g class="wv"><path d="M0 220q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bfe0ee" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      '<path d="M0 176h96v20H0z" fill="#6a7a5a"/><path d="M304 176h96v20h-96z" fill="#6a7a5a"/>' +
      '<rect x="0" y="168" width="96" height="8" fill="#4a525c"/><rect x="304" y="168" width="96" height="8" fill="#4a525c"/>' +
      tower(80) + tower(286) +
      '<g class="lft"><rect x="114" y="160" width="172" height="16" fill="#5a6a7a"/>' +
      (function () { let s = ""; for (let x = 114; x < 286; x += 21.5) s += '<path d="M' + x + ' 176l10.75-16 10.75 16" stroke="#7a8a9a" stroke-width="2" fill="none"/>'; return s; })() + '</g>' +
      '<g class="bt"><path d="M0 206h50l-6 12H6z" fill="' + ORG + '"/><rect x="14" y="192" width="20" height="14" fill="#f7f3ea"/><rect x="20" y="184" width="6" height="8" fill="#333"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">ARTHUR KILL LIFT BRIDGE</text>',
      sky("b1", "#6fb3e6", "#e6f2ff"));
  }

  /* 4. Sandy Ground in Rossville: one of America's oldest free Black communities; the little white clapboard A.M.E. Zion church and the Sandy Ground museum house under old trees */
  function greatkills() {
    let clap = ""; for (let y = 120; y < 204; y += 6) clap += '<path d="M60 ' + y + 'h120" stroke="#d8d4c8" stroke-width="1"/>';
    let clap2 = ""; for (let y = 140; y < 204; y += 6) clap2 += '<path d="M240 ' + y + 'h110" stroke="#c8b898" stroke-width="1"/>';
    const oak = (x, y, r) => '<rect x="' + (x - 5) + '" y="' + y + '" width="10" height="' + (204 - y) + '" fill="#4a3220"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#3f6a2a"/><circle cx="' + (x - r * .6) + '" cy="' + (y + 8) + '" r="' + r * .7 + '" fill="#4a7a32"/><circle cx="' + (x + r * .6) + '" cy="' + (y + 6) + '" r="' + r * .7 + '" fill="#356024"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k1)"/>' + '<g class="dft">' + cloud(90, 30, .8) + '</g>' +
      oak(26, 90, 36) + oak(212, 70, 40) + oak(386, 96, 30) +
      /* the A.M.E. Zion church: white clapboard, a small belfry, arched windows */
      '<path d="M52 118L120 76 188 118z" fill="#5a5a60"/>' + '<rect x="60" y="116" width="120" height="88" fill="#f4f1e8"/>' + clap +
      '<rect x="106" y="42" width="28" height="40" fill="#f4f1e8" stroke="#d8d4c8"/><path d="M102 44L120 18 138 44z" fill="#5a5a60"/><rect x="113" y="52" width="14" height="16" fill="#3a3a40"/>' +
      '<path d="M120 18v-10M115 12h10" stroke="#5a5a60" stroke-width="2"/>' +
      [76, 146].map(x => '<path d="M' + x + ' 180v-34q9-12 18 0v34z" fill="#3a5a7a" stroke="#d8d4c8" stroke-width="2"/>').join("") +
      '<rect x="110" y="166" width="20" height="38" fill="#6a4a32"/>' +
      '<rect x="64" y="100" width="112" height="14" fill="#f4f1e8"/><text x="120" y="111" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8" fill="#3a3a40">A.M.E. ZION CHURCH</text>' +
      /* the museum house */
      '<path d="M232 140L295 104 358 140z" fill="#6a3a2a"/><rect x="240" y="138" width="110" height="66" fill="#e8d6b0"/>' + clap2 +
      '<rect x="252" y="152" width="18" height="22" fill="#3a5a7a" stroke="#fff" stroke-width="2"/><rect x="320" y="152" width="18" height="22" fill="#3a5a7a" stroke="#fff" stroke-width="2"/><rect x="286" y="166" width="18" height="38" fill="#5a3a2a"/>' +
      '<rect x="236" y="198" width="118" height="6" fill="#f4f1e8"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#5a8a3a"/>' + (function () { let f = ""; for (let x = 0; x < 400; x += 10) f += '<rect x="' + x + '" y="214" width="3" height="14" fill="#f4f1e8"/>'; return f; })() + '<rect x="0" y="216" width="400" height="3" fill="#f4f1e8"/>' +
      '<g class="lf"><path d="M200 90l5 3-5 3-5-3z" fill="#e6b13a"/></g><g class="lf lf2"><path d="M230 96l5 3-5 3-5-3z" fill="#b8461f"/></g><g class="lf lf3"><path d="M30 110l5 3-5 3-5-3z" fill="#d9822b"/></g>' +
      '<g class="bt"><path d="M0 50q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="80" y="234" width="240" height="20" rx="3" fill="#1a1a1e" opacity=".75"/>' +
      '<text x="200" y="248" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">SANDY GROUND · ROSSVILLE</text>',
      sky("k1", "#4f9ad8", "#d8ecff"));
  }
  /* 5. Beach St & Van Duzer St in Stapleton: green signs, the tag wall, the open door lit up */
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
    let bricks = ""; for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#6a4a30"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      vzb({"t":[{"x":50,"top":6,"deck":50,"foot":70,"w":12},{"x":200,"top":6,"deck":50,"foot":70,"w":12}],"al":[-20,60],"ar":[262,60],"sag":40,"n":22,"col":"#7d8792","hi":"#d6dce2","cw":1.3,"dt":3,"dk":"#6a737d","car":1.2}) +
      '<rect y="68" width="400" height="154" fill="#4a3422"/>' + bricks +
      /* the open door */
      '<rect x="240" y="126" width="50" height="96" fill="#2a1a10"/><rect x="244" y="130" width="42" height="92" fill="#fff2b0" class="blk"/><path d="M244 130l-24 8v84l24 0z" fill="#5a3a22" stroke="#2a1a10" stroke-width="2"/>' +
      tag("THEODORE UNIT", 14, 140, 34, YEL, -6) + tag("718", 30, 196, 40, BLU, -4) + tag("OPEN DOOR", 110, 206, 24, "#fff", -7) +
      '<g class="drp"><rect x="60" y="142" width="3" height="10" fill="' + YEL + '"/></g>' +
      '<rect x="352" y="22" width="6" height="208" fill="#4a4a4a"/>' +
      blade(292, 24, 106, "Beach St", 0) + blade(268, 50, 130, "Van Duzer St", 0) +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr2"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + ORG + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#ffd34d", "#2a2012"));
  }

  window.SCENES = { station: station1, graveyard, liftbridge, greatkills, corner };
})();
