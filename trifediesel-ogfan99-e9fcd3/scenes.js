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
  const ORG = "#ffb347", RED = "#ff5a36", PALE = "#ffe08a";

  /* 1. Stapleton in the morning: the elevated SIR platform over Bay St, the canopy, the train pulling in, the harbor beyond */
  function station1() {
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + '<g class="dft">' + cloud(80, 30, .9) + cloud(300, 44, .7) + '</g>' +
      '<rect y="96" width="400" height="30" fill="#4a7aa0"/>' +
      '<g fill="#7f8ea0"><rect x="20" y="78" width="10" height="18"/><rect x="34" y="70" width="8" height="26"/><rect x="46" y="82" width="14" height="14"/><rect x="330" y="74" width="12" height="22"/><rect x="346" y="84" width="20" height="12"/></g>' +
      '<rect x="0" y="48" width="400" height="10" fill="#3a4250"/><rect x="0" y="58" width="400" height="4" fill="' + ORG + '"/>' +
      (function () { let p = ""; for (let x = 60; x < 400; x += 140) p += '<rect x="' + x + '" y="62" width="6" height="112" fill="#3a4250"/>'; return p; })() +
      station("Stapleton", 100, 74, 200) +
      '<g class="anim-train">' + sirCar(-30, 116, 350) + '</g>' +
      '<rect y="178" width="400" height="10" fill="#eab308"/><rect y="188" width="400" height="12" fill="#55606a"/>' +
      (function () { let c = ""; for (let x = 20; x < 400; x += 70) c += '<rect x="' + x + '" y="200" width="8" height="34" fill="#4a525c"/>'; return c; })() +
      '<rect y="234" width="400" height="26" fill="#2c2c30"/>' +
      '<g class="cr1"><rect x="0" y="240" width="44" height="14" rx="4" fill="' + ORG + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="34" cy="254" r="4" fill="#111"/></g>' +
      tag("TRIFE", 110, 226, 22, ORG, -4) + tag("BAY ST", 250, 226, 18, "#fff", -5),
      sky("s1", "#8fc4f0", "#fde7c4"));
  }

  /* 2. The Paramount on Bay St: the shuttered 1930 movie palace, orange brick front, tall blade sign, pigeons lifting off the marquee */
  function paramount() {
    let bricks = ""; for (let y = 60; y < 200; y += 8) for (let x = (y / 8) % 2 ? 106 : 100; x < 286; x += 16) bricks += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#d27a3a" opacity=".55"/>';
    const pig = (x, y) => '<path d="M' + x + ' ' + y + 'q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/>';
    return svg(
      '<style>@keyframes fly{0%{transform:translate(0,0);opacity:0}10%{opacity:1}100%{transform:translate(160px,-120px);opacity:0}}.pg{animation:fly 5s linear infinite}.pg2{animation-delay:1.6s}.pg3{animation-delay:3.2s}</style>' +
      '<rect width="400" height="260" fill="url(#p1)"/>' +
      '<rect x="0" y="90" width="100" height="120" fill="#7a6a5a"/><rect x="300" y="100" width="100" height="110" fill="#6a5a6a"/>' +
      (function () { let w = ""; for (let y = 104; y < 190; y += 26) { w += '<rect x="16" y="' + y + '" width="20" height="16" fill="#cfd9e0"/><rect x="60" y="' + y + '" width="20" height="16" fill="#cfd9e0"/><rect x="318" y="' + (y + 8) + '" width="20" height="16" fill="#cfd9e0"/><rect x="362" y="' + (y + 8) + '" width="20" height="16" fill="#cfd9e0"/>'; } return w; })() +
      '<rect x="100" y="56" width="200" height="154" fill="#e0883e"/>' + bricks +
      '<rect x="96" y="52" width="208" height="8" fill="#b85a2a"/>' +
      '<rect x="130" y="70" width="36" height="58" fill="#b85a2a"/><rect x="234" y="70" width="36" height="58" fill="#b85a2a"/>' +
      '<path d="M134 74h28v50h-28z" fill="#3a3040"/><path d="M238 74h28v50h-28z" fill="#3a3040"/>' +
      /* blade sign */
      '<rect x="186" y="20" width="28" height="124" rx="3" fill="#f7f3ea" stroke="#b85a2a" stroke-width="3"/>' +
      (function () { let t = ""; "PARAMOUNT".split("").forEach((c, i) => { t += '<text x="200" y="' + (36 + i * 13) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#b8321f">' + c + '</text>'; }); return t; })() +
      /* marquee */
      '<path d="M112 144h176l-10 22H122z" fill="#3a3040"/><rect x="124" y="148" width="152" height="12" fill="#f7f3ea"/>' +
      '<text x="200" y="158" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="#3a3040">STAPLETON · BAY ST</text>' +
      '<rect x="126" y="170" width="148" height="40" fill="#5a4a3a"/><path d="M150 170v40M200 170v40M250 170v40" stroke="#3a2a1a" stroke-width="3"/>' +
      '<rect y="210" width="400" height="10" fill="#9a9a9a"/><rect y="220" width="400" height="40" fill="#2c2c30"/>' +
      '<g class="pg">' + pig(150, 140) + '</g><g class="pg pg2">' + pig(220, 138) + '</g><g class="pg pg3">' + pig(250, 142) + '</g>' +
      '<g class="cr2"><rect x="0" y="232" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="34" cy="246" r="4" fill="#111"/></g>',
      sky("p1", "#9fcff2", "#f2e2c8"));
  }

  /* 3. Stapleton Heights: the painted Victorian houses up St. Paul's Ave, gables and porches, the harbor below, leaves coming down */
  function stpauls() {
    const house = (x, y, body, trim, roof) =>
      '<rect x="' + x + '" y="' + y + '" width="80" height="84" fill="' + body + '" stroke="' + trim + '" stroke-width="2"/>' +
      '<path d="M' + (x - 6) + ' ' + y + 'l46-34 46 34z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 50) + '" y="' + (y - 40) + '" width="18" height="40" fill="' + body + '" stroke="' + trim + '" stroke-width="2"/><path d="M' + (x + 46) + ' ' + (y - 40) + 'l13-16 13 16z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 14) + '" y="' + (y + 10) + '" width="14" height="20" fill="#cfe2ee" stroke="' + trim + '"/><rect x="' + (x + 52) + '" y="' + (y + 10) + '" width="14" height="20" fill="#cfe2ee" stroke="' + trim + '"/>' +
      '<rect x="' + (x - 4) + '" y="' + (y + 46) + '" width="88" height="5" fill="' + trim + '"/>' +
      '<rect x="' + x + '" y="' + (y + 51) + '" width="3" height="33" fill="' + trim + '"/><rect x="' + (x + 38) + '" y="' + (y + 51) + '" width="3" height="33" fill="' + trim + '"/><rect x="' + (x + 77) + '" y="' + (y + 51) + '" width="3" height="33" fill="' + trim + '"/>' +
      '<rect x="' + (x + 48) + '" y="' + (y + 56) + '" width="14" height="28" fill="#5a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#h1)"/>' +
      '<rect y="70" width="400" height="26" fill="#5a8ab0"/><g fill="#8a98a8"><rect x="20" y="56" width="8" height="14"/><rect x="32" y="50" width="6" height="20"/><rect x="40" y="60" width="12" height="10"/></g>' +
      '<path d="M0 96h400v164H0z" fill="#4f8a3a"/>' +
      house(20, 126, "#7fa8c9", "#f7f3ea", "#4a3a4a") + house(150, 116, "#e6b85a", "#7a2a2a", "#5a3a3a") + house(282, 128, "#b85a6a", "#f7f3ea", "#3a3a4a") +
      '<path d="M0 214q200-16 400 0v46H0z" fill="#8a8a8a"/><path d="M0 222q200-16 400 0" stroke="#f7f3ea" stroke-width="2" stroke-dasharray="10 10" fill="none"/>' +
      '<circle cx="130" cy="120" r="22" fill="#d9822b"/><circle cx="268" cy="108" r="18" fill="#b8461f"/>' +
      '<g class="lf"><path d="M140 100l5 3-5 3-5-3z" fill="#e6b13a"/></g><g class="lf lf2"><path d="M270 96l5 3-5 3-5-3z" fill="#b8461f"/></g><g class="lf lf3"><path d="M200 90l5 3-5 3-5-3z" fill="#d9822b"/></g>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">ST. PAUL\'S AVE · STAPLETON HEIGHTS</text>',
      sky("h1", "#8fc4f0", "#f8ecd8"));
  }

  /* 4. The Outerbridge Crossing at sunset: the long steel cantilever truss over the Arthur Kill, headlights rolling across */
  function outerbridge() {
    let truss = "";
    for (let x = 20; x < 380; x += 20) {
      const h = (X) => 100 - 50 * Math.exp(-Math.pow((X - 200) / 90, 2)) - 18 * Math.exp(-Math.pow((X - 200) / 30, 2)) * 0;
      truss += '<path d="M' + x + ' ' + h(x).toFixed(1) + 'L' + (x + 20) + ' 128M' + (x + 20) + ' ' + h(x + 20).toFixed(1) + 'L' + x + ' 128M' + x + ' ' + h(x).toFixed(1) + 'V128" stroke="#5a6470" stroke-width="2"/>';
    }
    let top = "M20 100"; for (let x = 20; x <= 380; x += 10) top += "L" + x + " " + (100 - 50 * Math.exp(-Math.pow((x - 200) / 90, 2))).toFixed(1);
    return svg(
      '<rect width="400" height="260" fill="url(#o1)"/>' +
      '<circle cx="320" cy="150" r="24" fill="#ffd27a" opacity=".9"/>' +
      '<rect y="160" width="400" height="100" fill="#3a3a5a"/><rect y="160" width="400" height="100" fill="url(#ow)"/>' +
      '<g class="wv"><path d="M0 190q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#ffb98a" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      '<rect x="0" y="122" width="400" height="8" fill="#4a525c"/>' +
      '<path d="' + top + '" stroke="#5a6470" stroke-width="4" fill="none"/>' + truss +
      '<rect x="60" y="130" width="12" height="40" fill="#5a5a60"/><rect x="140" y="130" width="14" height="40" fill="#5a5a60"/><rect x="246" y="130" width="14" height="40" fill="#5a5a60"/><rect x="328" y="130" width="12" height="40" fill="#5a5a60"/>' +
      '<g class="cr1"><circle cx="0" cy="118" r="2.5" fill="#fff6c2"/><circle cx="-10" cy="118" r="2.5" fill="#fff6c2"/></g><g class="cr2"><circle cx="0" cy="118" r="2.5" fill="#ff4a3a"/></g>' +
      '<path d="M0 170q60-14 120 0v90H0z" fill="#2a2a3a"/><path d="M300 176q50-12 100 0v84H300z" fill="#2a2a3a"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">OUTERBRIDGE CROSSING · ARTHUR KILL</text>',
      sky("o1", "#4a3a6a", "#ff9a5a") + '<linearGradient id="ow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a5a" stop-opacity=".4"/><stop offset="1" stop-color="#1a1a2a" stop-opacity="0"/></linearGradient>');
  }

  /* 5. Canal St & Wright St by Tappen Park: green signs, the tag wall, an orange drip */
  function corner() {
    let bricks = ""; for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#7a4a30"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      '<rect y="68" width="400" height="154" fill="#5a3422"/>' + bricks +
      tag("TRIFE DA GOD", 18, 148, 40, ORG, -6) + tag("DIESEL", 40, 198, 32, RED, -4) + tag("THEODORE", 186, 204, 26, PALE, -7) +
      '<g class="drp"><rect x="70" y="150" width="3" height="10" fill="' + ORG + '"/></g>' +
      '<rect x="352" y="22" width="6" height="208" fill="#4a4a4a"/>' +
      blade(286, 24, 112, "Canal St", 0) + blade(280, 50, 118, "Wright St", 0) +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr2"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + PALE + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#ffb347", "#2d1a12"));
  }

  window.SCENES = { station: station1, paramount, stpauls, outerbridge, corner };
})();
