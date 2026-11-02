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
  const LAV = "#c9a4ff", GOLD = "#ffd34d", SKY = "#7cd4ff";

  /* 1. Clifton from the Tompkins Av side: the stair down off the embankment, the SIR rolling across up top, the arrow down toward Chestnut Av and the Meucci house, Streetlife on the retaining wall */
  function station1() {
    let wall = ""; for (let y = 112; y < 214; y += 12) for (let x = (y / 12) % 2 ? -14 : 0; x < 400; x += 28) wall += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#8a7a64"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + '<g class="dft">' + cloud(240, 26, .7) + '</g>' +
      /* embankment deck with the train */
      '<g class="anim-train">' + sirCar(-20, 40, 320) + '</g>' +
      '<rect x="0" y="102" width="400" height="8" fill="#eab308"/><rect x="0" y="110" width="400" height="104" fill="#6e6250"/>' + wall +
      /* the stair coming down to the sidewalk */
      '<path d="M250 214l60-104h40l-60 104z" fill="#55606a"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (256 + i * 7) + ' ' + (204 - i * 12) + 'h38" stroke="#3a434c" stroke-width="2"/>').join("") +
      '<path d="M250 214l60-104" stroke="#d8c8a4" stroke-width="3"/><path d="M290 214l60-104" stroke="#d8c8a4" stroke-width="3"/>' +
      station("Clifton", 40, 120, 150) + '<rect x="40" y="158" width="150" height="16" fill="#111"/><text x="115" y="170" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">TOMPKINS AV EXIT</text>' +
      tag("STREETLIFE", 20, 204, 26, LAV, -4) +
      /* sidewalk, the street sign and the arrow toward the museum */
      '<rect y="214" width="400" height="16" fill="#9a968c"/><rect y="230" width="400" height="30" fill="#2c2c30"/>' +
      '<rect x="370" y="120" width="5" height="94" fill="#4a4a4a"/>' + blade(282, 124, 112, "Tompkins Av", 0) +
      '<rect x="276" y="152" width="120" height="30" rx="3" fill="#6a3a24"/><text x="336" y="165" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">CHESTNUT AV ↓</text><text x="336" y="176" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#f2d68a">GARIBALDI-MEUCCI</text>' +
      '<g class="cr1"><rect x="0" y="238" width="44" height="14" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="34" cy="252" r="4" fill="#111"/></g>',
      sky("s1", "#7ab8e8", "#ffd9a0"));
  }

  /* 2. Rosebank: the Garibaldi-Meucci Museum, the cream Gothic Revival cottage with its steep gables, green shutters, the Italian flag flying */
  function meucci() {
    return svg(
      '<rect width="400" height="260" fill="url(#m1)"/>' + '<g class="dft">' + cloud(90, 40, .9) + cloud(300, 28, .7) + '</g>' +
      (function () { let t = ""; for (let x = -10; x < 400; x += 46) t += '<circle cx="' + x + '" cy="118" r="26" fill="' + (x % 92 ? "#c9772a" : "#3f7a2a") + '"/>'; return t; })() +
      '<rect y="168" width="400" height="92" fill="#5f9a3a"/>' +
      /* the cottage */
      '<rect x="110" y="104" width="190" height="82" fill="#efe4c4" stroke="#8a7a5a" stroke-width="2"/>' +
      '<path d="M100 108l105-32 105 32z" fill="#5a5450"/>' +
      '<path d="M174 108l31-46 31 46z" fill="#efe4c4" stroke="#8a7a5a" stroke-width="2"/><path d="M168 110l37-54 37 54" fill="none" stroke="#5a5450" stroke-width="7" stroke-linejoin="round"/>' +
      '<path d="M196 98v-14a9 9 0 0 1 18 0v14z" fill="#3a4a5a"/>' +
      (function () { let w = ""; [126, 156, 236, 266].forEach(x => { w += '<rect x="' + (x - 6) + '" y="118" width="6" height="26" fill="#2f5a3a"/><rect x="' + x + '" y="118" width="16" height="26" fill="#cfe2ee" stroke="#6a6a6a"/><rect x="' + (x + 16) + '" y="118" width="6" height="26" fill="#2f5a3a"/>'; }); return w; })() +
      /* porch */
      '<rect x="104" y="152" width="202" height="6" fill="#d8cca8"/>' +
      (function () { let p = ""; for (let x = 112; x <= 300; x += 26) p += '<rect x="' + x + '" y="158" width="4" height="28" fill="#f7f3ea"/>'; return p; })() +
      '<rect x="196" y="160" width="18" height="26" fill="#6a4a2a"/>' +
      '<rect x="100" y="186" width="210" height="6" fill="#bfb49a"/><path d="M190 192h30l14 68h-58z" fill="#c9b896"/>' +
      /* flagpole + Italian flag */
      '<rect x="336" y="70" width="3" height="120" fill="#ddd"/>' +
      '<g class="flg"><rect x="339" y="72" width="12" height="24" fill="#159a4a"/><rect x="351" y="72" width="12" height="24" fill="#fff"/><rect x="363" y="72" width="12" height="24" fill="#d22a2a"/></g>' +
      /* fence */
      (function () { let f = ""; for (let x = 0; x < 400; x += 12) if (x < 176 || x > 236) f += '<rect x="' + x + '" y="204" width="4" height="20" fill="#f7f3ea"/>'; return f; })() +
      '<rect x="0" y="208" width="176" height="3" fill="#f7f3ea"/><rect x="236" y="208" width="164" height="3" fill="#f7f3ea"/>' +
      '<text x="200" y="248" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">GARIBALDI-MEUCCI MUSEUM · ROSEBANK</text>',
      sky("m1", "#4f9ad8", "#d8ecff"));
  }

  /* 3. The Our Lady of Mount Carmel Grotto on Amity St, Rosebank: the hand-built 1930s stone-and-shell shrine, arches and niches, candles flickering */
  function silverlake() {
    let stones = ""; for (let i = 0; i < 60; i++) stones += '<circle cx="' + (76 + (i * 137) % 250) + '" cy="' + (56 + (i * 71) % 156) + '" r="' + (2 + i % 3) + '" fill="' + ["#d8c8a8", "#a89a80", "#f2ece0", "#8a7a64"][i % 4] + '"/>';
    const niche = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0v' + (h - w / 2) + 'z" fill="#2a2440" stroke="#f2ece0" stroke-width="3"/>';
    let shells = ""; for (let i = 0; i < 14; i++) { const a = Math.PI + i * Math.PI / 13; shells += '<path d="M' + (200 + Math.cos(a) * 92).toFixed(1) + ' ' + (130 + Math.sin(a) * 92).toFixed(1) + 'l5 -6 5 6z" fill="#f6efe6" stroke="#c9a88a"/>'; }
    const candle = (x, cls) => '<rect x="' + (x - 3) + '" y="206" width="6" height="14" fill="#f6efdc"/><path class="flk ' + cls + '" d="M' + x + ' 196q4 6 0 10q-4-4 0-10z" fill="#ffcf4d"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l1)"/>' + stars(14) +
      /* the grotto mass */
      '<path d="M60 220V120q0-90 140-90t140 90v100z" fill="#7a6a54"/>' + stones + shells +
      niche(156, 70, 88, 140) + '<path d="M200 96l10 18h-20z" fill="#9fd0f0" opacity=".7"/><rect x="194" y="114" width="12" height="40" rx="6" fill="#9fd0f0" opacity=".55"/>' +
      niche(84, 120, 44, 80) + niche(272, 120, 44, 80) +
      '<rect x="182" y="40" width="36" height="6" fill="#f2ece0"/><rect x="197" y="24" width="6" height="22" fill="#f2ece0"/><rect x="190" y="30" width="20" height="5" fill="#f2ece0"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#5a5450"/>' +
      candle(96, "") + candle(110, "flk2") + candle(184, "flk2") + candle(200, "") + candle(216, "flk2") + candle(290, "") + candle(304, "flk2") +
      '<text x="200" y="244" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">MOUNT CARMEL GROTTO · AMITY ST</text>' +
      tag("STREETLIFE", 8, 30, 20, LAV, -4),
      sky("l1", "#1a1438", "#4a3a6a"));
  }

  /* 4. Album world, Street Education (2005): the Shaolin schoolroom, the chalkboard full of lessons, the brick wall, the desk with the Wu name scratched in, chalk dust drifting */
  function carousel() {
    let bricks = ""; for (let y = 0; y < 200; y += 12) for (let x = (y / 12) % 2 ? -14 : 0; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#8a4a3a"/>';
    const chalk = (t, x, y, s, c) => '<text x="' + x + '" y="' + y + '" font-family="Comic Sans MS, Chalkboard, cursive" font-size="' + s + '" fill="' + (c || "#f2f2e8") + '">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="#6a3a2a"/>' + bricks +
      /* the chalkboard */
      '<rect x="40" y="20" width="320" height="140" fill="#6a4a2a"/><rect x="48" y="28" width="304" height="124" fill="#26382c"/>' +
      chalk("STREET EDUCATION", 62, 54, 18, GOLD) + chalk("Lesson 1: Shaolin, Staten Island", 62, 78, 12) + chalk("Lesson 2: Tompkins &amp; Chestnut", 62, 98, 12) + chalk("Lesson 3: Wu forever", 62, 118, 12) +
      chalk("2005", 300, 140, 14, LAV) + '<path d="M62 126h120" stroke="#f2f2e8" stroke-width="1.5" opacity=".7"/>' +
      '<rect x="40" y="160" width="320" height="8" fill="#5a3a20"/><rect x="90" y="156" width="20" height="5" fill="#f2f2e8"/><rect x="130" y="156" width="14" height="5" fill="#ffd34d"/>' +
      /* chalk dust floating */
      '<g class="lf"><circle cx="240" cy="120" r="2" fill="#fff" opacity=".7"/></g><g class="lf lf2"><circle cx="170" cy="110" r="1.6" fill="#fff" opacity=".7"/></g><g class="lf lf3"><circle cx="300" cy="100" r="2" fill="#fff" opacity=".7"/></g>' +
      /* the desk */
      '<rect x="0" y="200" width="400" height="60" fill="#3a2a22"/><path d="M60 196h280l20 24H40z" fill="#a8784a"/><rect x="60" y="220" width="8" height="40" fill="#6a4a2a"/><rect x="332" y="220" width="8" height="40" fill="#6a4a2a"/>' +
      '<text x="200" y="214" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#6a4a2a" letter-spacing="1">WU · SHAOLIN · STREETLIFE</text>' +
      '<g class="pk"><rect x="314" y="186" width="30" height="12" fill="' + GOLD + '"/><rect x="316" y="188" width="26" height="2" fill="#6a4a2a"/></g>' +
      tag("STREETLIFE", 14, 252, 24, LAV, -3),
      "");
  }

  /* 5. Tompkins Av & Chestnut Av in Rosebank, down from Clifton: green signs, the tag wall, a lavender drip */
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
    let bricks = ""; for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#6a4a5a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      vzb({"t":[{"x":196,"top":2,"deck":120,"foot":260,"w":36},{"x":900,"top":2,"deck":120,"foot":260,"w":36}],"al":[-30,74],"sag":90,"n":24,"col":"#6e6878","hi":"#b0a8c0","cab":"#6e6878","cw":2,"cars":false}) +
      '<rect y="68" width="400" height="154" fill="#4a3040"/>' + bricks +
      tag("STREETLIFE", 20, 150, 44, LAV, -6) + tag("TICAL", 40, 196, 30, GOLD, -4) + tag("SHAOLIN", 170, 204, 28, "#fff", -7) +
      '<g class="drp"><rect x="84" y="152" width="3" height="10" fill="' + LAV + '"/></g>' +
      '<rect x="352" y="22" width="6" height="208" fill="#4a4a4a"/>' +
      blade(268, 24, 130, "Tompkins Av", 0) + blade(262, 50, 136, "Chestnut Av", 0) +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr2"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + SKY + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#c98aff", "#2a1838"));
  }

  window.SCENES = { station: station1, meucci, silverlake, carousel, corner };
})();
