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

  /* 1. Clifton at sunrise: the SIR on its embankment over Bay St, the beige canopy, the train rolling in */
  function station1() {
    let rows = ""; for (let x = 0; x < 400; x += 46) rows += '<rect x="' + x + '" y="' + (78 + (x % 3) * 6) + '" width="40" height="' + (46 - (x % 3) * 6) + '" fill="' + ["#5a4a6a", "#6a5a7a", "#4a3e5e"][x % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' +
      '<circle cx="60" cy="96" r="26" fill="#ffd9a0" opacity=".9"/>' + '<g class="dft">' + cloud(250, 34, .8) + '</g>' + rows +
      '<rect x="0" y="50" width="400" height="12" fill="#d8c8a4"/><rect x="0" y="62" width="400" height="4" fill="#a8977a"/>' +
      (function () { let p = ""; for (let x = 20; x < 400; x += 120) p += '<rect x="' + x + '" y="66" width="6" height="108" fill="#7a6a54"/>'; return p; })() +
      station("Clifton", 112, 78, 186) +
      '<g class="anim-train">' + sirCar(-20, 116, 340) + '</g>' +
      '<rect y="178" width="400" height="10" fill="#eab308"/>' +
      '<path d="M0 188h400v42H0z" fill="#5d7a3a"/>' +
      (function () { let g = ""; for (let x = 6; x < 400; x += 18) g += '<path d="M' + x + ' 196l4-8 4 8z" fill="#7a9a4a"/>'; return g; })() +
      '<rect x="150" y="196" width="100" height="34" fill="#55606a"/><rect x="150" y="196" width="100" height="5" fill="#3a434c"/>' +
      '<rect y="230" width="400" height="30" fill="#2c2c30"/>' +
      '<g class="cr1"><rect x="0" y="238" width="44" height="14" rx="4" fill="' + LAV + '"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="34" cy="252" r="4" fill="#111"/></g>' +
      tag("STREETLIFE", 14, 222, 22, LAV, -3) + tag("BAY ST", 312, 222, 18, "#fff", -5),
      sky("s1", "#6a4a9a", "#ffb98a"));
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

  /* 3. Silver Lake Park: the lake under fall trees, geese gliding, the path around the water */
  function silverlake() {
    let trees = ""; for (let x = -8; x < 410; x += 30) trees += '<circle cx="' + x + '" cy="' + (112 - (x % 60 ? 6 : 0)) + '" r="22" fill="' + ["#d9822b", "#b8461f", "#e6b13a", "#3f7a2a"][(x / 30 | 0) % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l1)"/>' + '<g class="dft">' + cloud(120, 40, .8) + '</g>' +
      '<path d="M0 118q100-30 200-6t200-10v20H0z" fill="#4a6a3a"/>' + trees +
      '<rect y="128" width="400" height="80" fill="#6aa6c8"/>' +
      '<g class="wv"><path d="M0 150q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#d8f0ff" stroke-width="1.5" fill="none" opacity=".7"/>' +
      '<path d="M0 180q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#d8f0ff" stroke-width="1.5" fill="none" opacity=".5"/></g>' +
      /* reflection of trees */
      '<rect y="128" width="400" height="10" fill="#c9772a" opacity=".25"/>' +
      /* geese */
      '<g class="swm">' + [80, 116].map(x => '<g transform="translate(' + x + ' 166)"><ellipse cx="0" cy="0" rx="12" ry="5" fill="#6a5a4a"/><path d="M8 -2q4-12 8-12" stroke="#222" stroke-width="3" fill="none"/><circle cx="16" cy="-14" r="3" fill="#222"/><rect x="12" y="-12" width="4" height="2" fill="#fff"/></g>').join("") + '</g>' +
      /* path + rail */
      '<rect y="208" width="400" height="52" fill="#5f9a3a"/><path d="M0 222q200 14 400 0v12q-200 14-400 0z" fill="#c9b28a"/>' +
      (function () { let r = ""; for (let x = 0; x < 400; x += 40) r += '<rect x="' + x + '" y="204" width="3" height="14" fill="#6a4a2a"/>'; return r; })() + '<rect y="206" width="400" height="3" fill="#6a4a2a"/>' +
      '<g class="lf"><path d="M300 60l5 3-5 3-5-3z" fill="#e6b13a"/></g><g class="lf lf2"><path d="M200 50l5 3-5 3-5-3z" fill="#b8461f"/></g><g class="lf lf3"><path d="M100 70l5 3-5 3-5-3z" fill="#d9822b"/></g>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">SILVER LAKE PARK</text>',
      sky("l1", "#7ab8e8", "#f2e6d0"));
  }

  /* 4. Willowbrook Park: the Carousel for All Children, the striped canopy turning, painted horses going up and down */
  function carousel() {
    const horse = (x, c, cls) => '<g class="' + cls + '"><rect x="' + (x + 9) + '" y="96" width="2" height="74" fill="' + GOLD + '"/>' +
      '<path d="M' + x + ' 138h20l6-8 6 2-4 10v8h-4v10h-4v-10h-12v10h-4v-10h-4z" fill="' + c + '" stroke="#5a3a22" stroke-width="1"/><path d="M' + (x + 26) + ' 130l2-6 4 4" fill="' + c + '"/></g>';
    return svg(
      '<style>@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.hb1{animation:bob 1.6s ease-in-out infinite}.hb2{animation:bob 1.6s ease-in-out infinite;animation-delay:-.8s}</style>' +
      '<rect width="400" height="260" fill="url(#k1)"/>' +
      (function () { let t = ""; for (let x = 0; x < 400; x += 36) t += '<circle cx="' + x + '" cy="150" r="24" fill="#3f7a2a"/>'; return t; })() +
      '<rect y="160" width="400" height="100" fill="#5f9a3a"/>' +
      /* pavilion roof */
      '<path d="M70 92l130-50 130 50z" fill="#d22a2a"/>' +
      (function () { let s = ""; for (let i = 0; i < 10; i++) { const x1 = 70 + i * 26, x2 = 83 + i * 26; s += '<path d="M200 42L' + x1 + ' 92h13z" fill="#f7f3ea"/>'; } return s; })() +
      '<rect x="64" y="90" width="272" height="10" fill="' + GOLD + '"/>' +
      (function () { let b = ""; for (let x = 72; x < 334; x += 14) b += '<circle cx="' + x + '" cy="95" r="2.4" fill="#fff6c2" class="' + (x % 28 ? "blk" : "blk2") + '"/>'; return b; })() +
      '<path d="M196 42v-12h8v12z" fill="' + GOLD + '"/><circle cx="200" cy="26" r="5" fill="' + GOLD + '"/>' +
      /* platform */
      '<rect x="72" y="100" width="256" height="76" fill="#3a2a4a"/>' +
      '<rect x="190" y="100" width="20" height="76" fill="#6a4a8a"/>' +
      horse(86, "#f7f3ea", "hb1") + horse(130, LAV, "hb2") + horse(222, SKY, "hb1") + horse(266, "#ffb0c8", "hb2") +
      '<ellipse cx="200" cy="178" rx="136" ry="10" fill="#c9a24a"/><ellipse cx="200" cy="176" rx="136" ry="8" fill="' + GOLD + '"/>' +
      '<text x="200" y="232" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="2" fill="#fff">CAROUSEL FOR ALL CHILDREN</text>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">WILLOWBROOK PARK</text>',
      sky("k1", "#5aa6e0", "#e8f4ff"));
  }

  /* 5. Tompkins Av & Chestnut Av in Rosebank, down from Clifton: green signs, the tag wall, a lavender drip */
  function corner() {
    let bricks = ""; for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#6a4a5a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
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
