/* Queen Pen game (NYC map, Brooklyn: Williamsburg). Five small animated SVGs, 400 x 260. CSS classes are prefixed "qpn-".
   1. Montrose Av (L), underground: the gray L train pulling in, black station sign with the gray L bullet.
   2. Her bedroom window over the Williamsburg Houses court ("Always watch you play ball from my bedroom window").
   3. Metropolitan Pool & Bathhouse on Bedford Av: the 1922 classical bathhouse, summer in Williamsburg ("over the summer, I grew").
   4. Grand Ferry Park at night: the old brick smokestack on the Williamsburg waterfront, the party lights and the East River.
   5. Bushwick Av and Scholes St: green signs, her name on the wall, the low tan-brick Williamsburg Houses behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes qpn-flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.qpn-flk{animation:qpn-flick 2.4s infinite}.qpn-flk2{animation-delay:1.1s}' +
    '@keyframes qpn-ball{0%,100%{transform:translateY(0)}50%{transform:translateY(-30px)}}.qpn-ball{animation:qpn-ball .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes qpn-curt{0%,100%{transform:skewX(0)}50%{transform:skewX(4deg)}}.qpn-curt{transform-box:fill-box;transform-origin:50% 0;animation:qpn-curt 3s ease-in-out infinite}.qpn-curt2{animation-delay:-1.5s}' +
    '@keyframes qpn-spark{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.qpn-sp{transform-box:fill-box;transform-origin:50% 50%;animation:qpn-spark 1.8s ease-in-out infinite}.qpn-sp2{animation-delay:-.6s}.qpn-sp3{animation-delay:-1.2s}' +
    '@keyframes qpn-flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.qpn-flag{transform-box:fill-box;transform-origin:0 50%;animation:qpn-flag 1.4s ease-in-out infinite}' +
    '@keyframes qpn-beam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.qpn-beam{transform-box:fill-box;transform-origin:50% 100%;animation:qpn-beam 3s ease-in-out infinite}.qpn-beam2{animation-delay:-1.5s}' +
    '@keyframes qpn-wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.qpn-wv{animation:qpn-wave 3.4s ease-in-out infinite}.qpn-wv2{animation-delay:-1.7s}' +
    '@keyframes qpn-car{from{transform:translateX(-90px)}to{transform:translateX(460px)}}.qpn-car{animation:qpn-car 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PINK = "#ff7eb6", GOLD = "#ffd166", TEAL = "#59c3c3", CREAM = "#f7f0e4", SIGN = "#0f6b3a", TAN = "#c9a46e", TAND = "#a8844f";
  const courses = (x, y, w, h, c, step) => { let b = ""; for (let yy = y + (step || 6); yy < y + h; yy += (step || 6)) b += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".8"/>'; return b; };
  /* Williamsburg Houses block: low tan brick, flat roof, horizontal bands of windows */
  const wbHouse = (x, y, w, h) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + TAN + '"/>' + courses(x, y, w, h, TAND, 5) + '<rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#8a6d44"/>';
    for (let r = y + 10; r < y + h - 14; r += 20) { s += '<rect x="' + (x + 6) + '" y="' + r + '" width="' + (w - 12) + '" height="9" fill="#3a3a44"/>'; for (let c = x + 10; c < x + w - 14; c += 18) if ((c + r) % 3 === 0) s += '<rect x="' + c + '" y="' + r + '" width="12" height="9" fill="#ffd98a" class="qpn-flk' + (c % 2 ? " qpn-flk2" : "") + '"/>'; }
    return s; };

  /* 1. Montrose Av (L), underground */
  function montrose() {
    let tiles = "";
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 40v110" stroke="#c9c2b2" stroke-width=".6"/>';
    for (let y = 50; y < 150; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#c9c2b2" stroke-width=".6"/>';
    let win = "";
    for (let x = 34; x < 360; x += 46) win += '<rect x="' + x + '" y="122" width="32" height="26" rx="3" fill="#cfe3ef"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2a30"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#1b1b20"/>' + [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="30" width="40" height="5" fill="#fff6c2" class="qpn-flk' + (x % 80 ? " qpn-flk2" : "") + '"/>').join("") +
      /* tiled wall with the mosaic band */
      '<rect x="0" y="40" width="400" height="110" fill="#e7e1d3"/>' + tiles + '<rect x="0" y="58" width="400" height="10" fill="#7a2f4a"/><rect x="0" y="68" width="400" height="3" fill="' + GOLD + '"/>' +
      /* station sign */
      '<rect x="96" y="78" width="208" height="30" rx="2" fill="#111"/><text x="124" y="99" ' + font + ' font-size="16" fill="#fff">Montrose Av</text>' +
      '<circle cx="276" cy="93" r="10" fill="#a7a9ac"/><text x="276" y="98.5" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">L</text>' +
      /* the L train pulling in */
      '<g class="anim-train"><rect x="10" y="112" width="380" height="64" rx="6" fill="#c7ccd2" stroke="#7b8088" stroke-width="2"/>' + win +
        '<rect x="10" y="156" width="380" height="5" fill="#8f949b"/><path d="M128 114v60M270 114v60" stroke="#7b8088" stroke-width="1.5"/>' +
        '<circle cx="372" cy="128" r="9" fill="#a7a9ac" stroke="#fff" stroke-width="1"/><text x="372" y="132.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">L</text></g>' +
      /* platform edge */
      '<rect x="0" y="176" width="400" height="84" fill="#5b5d62"/><rect x="0" y="176" width="400" height="8" fill="#e2c34a"/>' +
      (() => { let d = ""; for (let x = 4; x < 400; x += 10) d += '<circle cx="' + x + '" cy="180" r="1.4" fill="#8a7a30"/>'; return d; })() +
      '<rect x="40" y="196" width="4" height="64" fill="#2f3138"/><rect x="356" y="196" width="4" height="64" fill="#2f3138"/>');
  }

  /* 2. Her bedroom window over the Williamsburg Houses court */
  function window_() {
    let fence = "";
    for (let x = 70; x < 330; x += 8) fence += '<path d="M' + x + ' 150v40" stroke="#7a8088" stroke-width=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="#4a2f3f"/>' +
      /* outside, through the window */
      '<rect x="60" y="30" width="280" height="180" fill="url(#qpn2)"/>' +
      wbHouse(60, 70, 120, 90) + wbHouse(240, 76, 100, 84) +
      '<rect x="60" y="150" width="280" height="60" fill="#5e6b74"/><path d="M60 180h280" stroke="#e9e2d0" stroke-width="1.5"/><path d="M200 150v60" stroke="#e9e2d0" stroke-width="1"/>' +
      '<path d="M70 150h260" stroke="#7a8088" stroke-width="1.5"/>' + fence +
      /* the hoop and the ball */
      '<rect x="262" y="128" width="4" height="56" fill="#3a3f46"/><rect x="246" y="124" width="28" height="18" fill="#f2f4f7" stroke="#3a3f46" stroke-width="1.5"/><path d="M250 144h14" stroke="#e8562c" stroke-width="2.5"/><path d="M251 145l4 10h6l4-10" stroke="#fff" stroke-width=".8" fill="none"/>' +
      '<g class="qpn-ball"><circle cx="226" cy="186" r="7" fill="#e8762c" stroke="#8a3a12" stroke-width="1"/><path d="M219 186h14M226 179v14" stroke="#8a3a12" stroke-width=".8"/></g>' +
      /* the window frame, sill and curtains */
      '<rect x="52" y="22" width="296" height="196" fill="none" stroke="#f1e7d8" stroke-width="12"/><path d="M200 24v192M58 120h284" stroke="#f1e7d8" stroke-width="5"/>' +
      '<rect x="40" y="214" width="320" height="12" fill="#e2d6c2"/>' +
      '<path class="qpn-curt" d="M44 16h56q-10 60-4 120t-12 86H44z" fill="' + PINK + '"/><path class="qpn-curt qpn-curt2" d="M356 16h-56q10 60 4 120t12 86h40z" fill="' + PINK + '"/>' +
      '<rect x="36" y="10" width="328" height="8" rx="3" fill="' + GOLD + '"/>' +
      /* a notebook and pen on the sill */
      '<rect x="150" y="204" width="44" height="12" rx="1" fill="#f7f0e4" stroke="#8a7a5a"/><path d="M156 208h30M156 212h24" stroke="#c44" stroke-width=".8"/><path d="M200 214l28-8" stroke="#2b2f36" stroke-width="3" stroke-linecap="round"/>',
      sky("qpn2", "#7fb6e6", "#f5d7a8"));
  }

  /* 3. Metropolitan Pool & Bathhouse, Bedford Av */
  function bathhouse() {
    let cols = "";
    for (let x = 136; x <= 256; x += 30) cols += '<rect x="' + x + '" y="92" width="10" height="70" fill="#e8dfcc"/><rect x="' + (x - 3) + '" y="88" width="16" height="5" fill="#d6ccb6"/><rect x="' + (x - 3) + '" y="160" width="16" height="5" fill="#d6ccb6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#qpn3)"/>' +
      '<circle cx="340" cy="44" r="20" fill="#fff3b0"/><circle cx="340" cy="44" r="30" fill="#fff3b0" opacity=".25"/>' +
      /* side wings in red brick */
      '<rect x="20" y="96" width="104" height="80" fill="#9b4a36"/>' + courses(20, 96, 104, 80, "#6e2f20", 6) + '<rect x="276" y="96" width="104" height="80" fill="#9b4a36"/>' + courses(276, 96, 104, 80, "#6e2f20", 6) +
      [40, 74, 296, 330].map(x => '<path d="M' + x + ' 160v-36a12 12 0 0 1 24 0v36z" fill="#3a4a5a"/><path d="M' + x + ' 160v-36a12 12 0 0 1 24 0v36z" fill="#9fd3e8" opacity=".35"/>').join("") +
      /* the classical center: stone, pediment, columns */
      '<rect x="124" y="84" width="152" height="92" fill="#efe6d2"/><path d="M116 86h168l-84-36z" fill="#e2d8c2" stroke="#b8ab8e" stroke-width="2"/><rect x="116" y="84" width="168" height="6" fill="#d6ccb6"/>' +
      '<circle cx="200" cy="72" r="8" fill="none" stroke="#b8ab8e" stroke-width="2"/>' + cols +
      '<path d="M184 176v-30a16 16 0 0 1 32 0v30z" fill="#3a4a5a"/><path d="M184 176v-30a16 16 0 0 1 32 0v30z" fill="#9fd3e8" opacity=".4"/>' +
      /* flag on the roof */
      '<rect x="199" y="16" width="2.5" height="36" fill="#555"/><g class="qpn-flag"><rect x="201" y="17" width="22" height="13" fill="#2f6db5"/><rect x="201" y="23" width="22" height="2" fill="#fff"/></g>' +
      /* steps, sidewalk, Bedford Av */
      '<rect x="160" y="176" width="80" height="6" fill="#d6ccb6"/><rect x="152" y="182" width="96" height="6" fill="#cfc4ac"/>' +
      '<rect x="0" y="176" width="400" height="20" fill="#9ea2a8"/><rect x="0" y="194" width="400" height="66" fill="#3a3c42"/><path d="M0 228h400" stroke="#eab308" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="qpn-car"><rect x="0" y="206" width="70" height="18" rx="5" fill="' + PINK + '"/><rect x="12" y="198" width="40" height="11" rx="4" fill="' + PINK + '"/><rect x="16" y="200" width="14" height="8" fill="#cfe3ef"/><rect x="34" y="200" width="14" height="8" fill="#cfe3ef"/><circle cx="14" cy="225" r="6" fill="#111"/><circle cx="56" cy="225" r="6" fill="#111"/></g>' +
      /* summer sparkles off the pool windows */
      '<path class="qpn-sp" d="M58 120l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff"/><path class="qpn-sp qpn-sp2" d="M344 118l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff"/><path class="qpn-sp qpn-sp3" d="M200 132l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff"/>',
      sky("qpn3", "#5aa8e6", "#cfe8f5"));
  }

  /* 4. Grand Ferry Park at night: the smokestack, the river, the party lights */
  function ferrypark() {
    let skyline = "";
    [[0, 30, 60], [34, 22, 84], [60, 26, 50], [92, 18, 96], [116, 30, 70], [152, 20, 58], [180, 26, 88], [212, 22, 64], [240, 30, 76], [276, 18, 92], [300, 28, 60], [334, 22, 80], [362, 38, 66]].forEach(([x, w, h]) => {
      skyline += '<rect x="' + x + '" y="' + (128 - h) + '" width="' + w + '" height="' + h + '" fill="#1f2340"/>';
      for (let yy = 132 - h; yy < 124; yy += 9) for (let xx = x + 3; xx < x + w - 3; xx += 6) if ((xx * 7 + yy) % 4 === 0) skyline += '<rect x="' + xx + '" y="' + yy + '" width="2.5" height="3" fill="#ffe7a3" opacity=".8"/>';
    });
    let lights = "";
    for (let i = 0; i < 15; i++) lights += '<circle cx="' + (20 + i * 26) + '" cy="' + (176 + Math.round(6 * Math.sin(i / 2))) + '" r="3" fill="' + [PINK, GOLD, TEAL][i % 3] + '" class="qpn-flk' + (i % 2 ? " qpn-flk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#qpn4)"/>' + stars(16) +
      /* searchlight beams */
      '<path class="qpn-beam" d="M110 200L96 20h28z" fill="' + PINK + '" opacity=".16"/><path class="qpn-beam qpn-beam2" d="M300 200L286 20h28z" fill="' + TEAL + '" opacity=".16"/>' +
      skyline +
      /* the East River */
      '<rect x="0" y="128" width="400" height="40" fill="#13294a"/>' +
      '<g class="qpn-wv"><path d="M0 140q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#4d7fb3" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      '<g class="qpn-wv qpn-wv2"><path d="M0 156q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#4d7fb3" stroke-width="1.5" fill="none" opacity=".5"/></g>' +
      /* the park edge and the old brick smokestack */
      '<rect x="0" y="166" width="400" height="94" fill="#26402c"/><rect x="0" y="166" width="400" height="5" fill="#7d7a70"/>' +
      '<path d="M58 168l6-128h16l6 128z" fill="#9b4a36"/>' + courses(60, 44, 24, 124, "#6e2f20", 7) + '<rect x="62" y="36" width="20" height="8" fill="#7a3a28"/>' +
      /* string lights and the party */
      '<path d="M0 172q100 14 200 2t200 4" stroke="#222" stroke-width="1" fill="none"/>' + lights +
      '<rect x="168" y="200" width="64" height="20" fill="#2b2b33"/><circle cx="186" cy="200" r="7" fill="#111"/><circle cx="214" cy="200" r="7" fill="#111"/><rect x="160" y="192" width="10" height="28" fill="#1b1b1f"/><rect x="230" y="192" width="10" height="28" fill="#1b1b1f"/>' +
      [30, 60, 100, 130, 270, 300, 340, 370].map((x, i) => '<g class="qpn-ball" style="animation-duration:' + (0.5 + (i % 3) * 0.1) + 's"><circle cx="' + x + '" cy="226" r="7" fill="#15121a"/><rect x="' + (x - 9) + '" y="232" width="18" height="30" rx="7" fill="#15121a"/></g>').join(""),
      sky("qpn4", "#090a1c", "#3a2350"));
  }

  /* 5. Bushwick Av and Scholes St: the Williamsburg Houses behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#qpn5)"/>' + stars(12) +
      wbHouse(10, 60, 150, 90) + wbHouse(176, 52, 130, 98) +
      /* blue tile entrance canopy */
      '<rect x="64" y="128" width="40" height="22" fill="#3a3a44"/><rect x="58" y="122" width="52" height="7" fill="#2f6db5"/>' +
      /* the wall */
      wbHouse(318, 66, 82, 84) + '<rect x="0" y="150" width="400" height="80" fill="#6a3c4e"/>' + courses(0, 150, 400, 80, "#53293a", 8) +
      tag("QUEEN PEN", 14, 202, 40, PINK, -6) + tag("LIL' MAN", 180, 224, 20, GOLD, -4) + tag("BK QUEEN", 24, 226, 18, CREAM, -3) +
      /* sidewalk and street */
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      
      /* the corner sign post */
      '<rect x="356" y="96" width="5" height="136" fill="#3d4b3f"/>' +
      '<rect x="306" y="98" width="92" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="352" y="114" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Bushwick Av</text>' +
      '<rect x="306" y="124" width="92" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="352" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Scholes St</text>' +
      '<circle class="qpn-flk" cx="358" cy="92" r="4" fill="#fff6c2"/>',
      sky("qpn5", "#0b0d1c", "#3a2a48"));
  }

  window.SCENES = { montrose: montrose, bedroom: window_, bathhouse: bathhouse, ferrypark: ferrypark, corner: corner };
})();
