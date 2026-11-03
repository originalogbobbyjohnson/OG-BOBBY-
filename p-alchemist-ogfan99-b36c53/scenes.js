/* The Alchemist producer game: Beverly Hills, Los Angeles. Wilshire city sign, the pink hotel, the record crates, the lab, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes carsL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.carL{animation:carsL 7s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sw{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3s ease-in-out infinite}.sw2{animation-delay:-1.5s}' +
    '@keyframes blink{0%,100%{opacity:.3}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes flip{0%,60%,100%{transform:translateY(0)}20%,40%{transform:translateY(-26px)}}.fp{animation:flip 2.4s ease-in-out infinite}.fp2{animation-delay:.8s}.fp3{animation-delay:1.6s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes bub{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.bb{animation:bub 2.2s linear infinite}.bb2{animation-delay:-.7s}.bb3{animation-delay:-1.4s}' +
    '@keyframes pad{0%,70%,100%{opacity:.3}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes glow{0%,100%{opacity:.5}50%{opacity:1}}.gl{animation:glow 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const GOLD = "#f5c542", PINK = "#e86a9a", GREEN = "#3fbf8a", HPINK = "#f2a7b8", HGREEN = "#2f6b48";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* tall palm tree */
  const palm = (x, base, h, cls) => {
    let s = '<path d="M' + x + ' ' + base + 'q-4-' + (h / 2) + ' 2-' + h + '" stroke="#5a4632" stroke-width="5" fill="none"/>';
    const tx = x + 2, ty = base - h;
    s += '<g class="sw ' + (cls || "") + '">';
    [[-30, 10], [-20, -6], [0, -14], [20, -6], [30, 10], [12, 16], [-12, 16]].forEach(([dx, dy]) => {
      s += '<path d="M' + tx + ' ' + ty + 'q' + (dx / 2) + ' ' + (dy - 8) + ' ' + dx + ' ' + dy + '" stroke="#2f7a3e" stroke-width="5" fill="none" stroke-linecap="round"/>';
    });
    return s + '</g>';
  };

  /* 1. Wilshire Blvd into Beverly Hills: green city sign, palms, cars rolling at sunset */
  function citysign() {
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' +
      '<circle cx="300" cy="150" r="40" fill="#ffd27a" opacity=".85"/>' +
      '<path d="M0 170 Q80 140 160 160 T320 150 T400 158 V190 H0z" fill="#6a4b6e" opacity=".7"/>' +
      palm(40, 196, 130) + palm(110, 196, 104, "sw2") + palm(350, 196, 140, "sw2") +
      '<rect x="0" y="196" width="400" height="64" fill="#3a3a42"/><path d="M0 228h400" stroke="#f2d16b" stroke-width="3" stroke-dasharray="18 12"/>' +
      '<g class="car"><rect x="0" y="206" width="46" height="14" rx="5" fill="' + PINK + '"/><rect x="10" y="200" width="24" height="8" rx="3" fill="#2a2a32"/><circle cx="10" cy="220" r="4" fill="#111"/><circle cx="36" cy="220" r="4" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="236" width="46" height="14" rx="5" fill="#e6e6ea"/><rect x="12" y="230" width="22" height="8" rx="3" fill="#2a2a32"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="36" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="196" y="110" width="5" height="88" fill="#8a8c90"/><rect x="246" y="110" width="5" height="88" fill="#8a8c90"/>' +
      '<rect x="150" y="56" width="148" height="62" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="224" y="78" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">ENTERING</text>' +
      '<text x="224" y="98" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Beverly Hills</text>' +
      '<text x="224" y="112" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">WILSHIRE BLVD</text>',
      sky("s1", "#2a1d4a", "#f08a6a"));
  }

  /* 2. The pink hotel on Sunset: pink stucco, green trim, the tower, palms swaying */
  function pinkhotel() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) win += '<rect x="' + (34 + c * 28) + '" y="' + (120 + r * 26) + '" width="12" height="14" fill="' + HGREEN + '"/><rect x="' + (32 + c * 28) + '" y="' + (118 + r * 26) + '" width="16" height="3" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<rect x="20" y="104" width="360" height="104" fill="' + HPINK + '"/><rect x="20" y="100" width="360" height="6" fill="#fff"/>' +
      '<rect x="160" y="40" width="80" height="70" fill="' + HPINK + '"/><path d="M156 42h88l-10-16h-68z" fill="' + HGREEN + '"/><rect x="190" y="12" width="20" height="16" fill="' + HPINK + '"/><path d="M186 14h28l-14-10z" fill="' + HGREEN + '"/>' +
      '<rect x="176" y="56" width="14" height="18" fill="' + HGREEN + '"/><rect x="210" y="56" width="14" height="18" fill="' + HGREEN + '"/>' +
      win +
      '<path d="M150 208v-30h100v30" fill="' + HGREEN + '"/><path d="M140 180h120" stroke="#fff" stroke-width="4"/>' +
      '<g>' + (() => { let st = ""; for (let x = 144; x < 260; x += 12) st += '<rect x="' + x + '" y="168" width="6" height="12" fill="#fff"/>'; return st; })() + '</g>' +
      palm(14, 216, 150) + palm(70, 216, 120, "sw2") + palm(330, 216, 130) + palm(386, 216, 156, "sw2") +
      '<rect x="0" y="208" width="400" height="10" fill="#7cc36b"/><rect x="0" y="218" width="400" height="42" fill="#3a3a42"/>' +
      '<g class="car car2"><rect x="0" y="230" width="46" height="14" rx="5" fill="' + GOLD + '"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="36" cy="244" r="4" fill="#111"/></g>',
      sky("s2", "#6ec3ef", "#f9e4c8"));
  }

  /* 3. Digging in the crates: record bins, sleeves flipping up, a turntable spinning */
  function crates() {
    const bin = (x, colors) => {
      let s = '<rect x="' + x + '" y="150" width="104" height="62" fill="#6e4a2a" stroke="#3b2414" stroke-width="2"/>';
      colors.forEach((c, i) => { s += '<rect class="' + (i === 1 ? "fp" : i === 3 ? "fp fp2" : "") + '" x="' + (x + 6 + i * 4) + '" y="' + (124 + i * 3) + '" width="62" height="58" fill="' + c + '" stroke="#222" stroke-width="1"/>'; });
      return s + '<rect x="' + x + '" y="176" width="104" height="36" fill="#7d5531" stroke="#3b2414" stroke-width="2"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="#2b1f2e"/>' +
      '<rect x="0" y="0" width="400" height="140" fill="#3a2a3d"/>' +
      (() => { let w = ""; for (let i = 0; i < 9; i++) w += '<rect x="' + (12 + i * 44) + '" y="20" width="36" height="36" fill="' + ["#c0392b", GOLD, GREEN, PINK, "#4f7bd9", "#e0e0e0", "#d98a3a", "#8e44ad", GOLD][i] + '" stroke="#111"/><circle cx="' + (30 + i * 44) + '" cy="38" r="10" fill="#111" opacity=".55"/>'; return w; })() +
      '<rect class="gl" x="120" y="68" width="160" height="34" rx="6" fill="none" stroke="' + PINK + '" stroke-width="3"/>' +
      '<text class="gl" x="200" y="93" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + PINK + '" letter-spacing="4">RECORDS</text>' +
      '<rect x="0" y="140" width="400" height="120" fill="#4a3320"/>' +
      bin(14, ["#c0392b", "#f5c542", "#4f7bd9", "#3fbf8a", "#e86a9a"]) + bin(140, ["#e0e0e0", "#8e44ad", "#d98a3a", "#c0392b", "#f5c542"]) +
      '<rect x="270" y="170" width="116" height="60" rx="4" fill="#2c2c30" stroke="#555" stroke-width="2"/>' +
      '<g class="vn"><circle cx="318" cy="200" r="24" fill="#0b0b0b"/><circle cx="318" cy="200" r="17" fill="none" stroke="#2a2a2a"/><circle cx="318" cy="200" r="8" fill="' + GOLD + '"/><rect x="316" y="193" width="4" height="4" fill="#fff"/></g>' +
      '<path d="M370 178l-12 26" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>');
  }

  /* 4. The lab: a flask turning lead to gold, bubbles rising, a pad sampler flashing */
  function lab() {
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (238 + c * 30) + '" y="' + (176 + r * 26) + '" width="24" height="20" rx="3" fill="' + (r ? GOLD : PINK) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#120f1c"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2a2234"/><rect x="0" y="150" width="400" height="6" fill="#3a3046"/>' +
      '<rect x="20" y="20" width="360" height="6" fill="#3a3046"/>' +
      '<path d="M90 50h40v40l40 70q4 10-8 10H58q-12 0-8-10l40-70z" fill="#d8e6f0" opacity=".25" stroke="#cfe0ee" stroke-width="3"/>' +
      '<path d="M76 116h68l26 44q4 10-8 10H58q-12 0-8-10z" fill="' + GOLD + '"/>' +
      '<circle class="bb" cx="100" cy="150" r="5" fill="#fff3b0"/><circle class="bb bb2" cx="116" cy="156" r="4" fill="#fff3b0"/><circle class="bb bb3" cx="92" cy="160" r="3" fill="#fff3b0"/>' +
      '<rect x="86" y="42" width="48" height="10" rx="2" fill="#cfe0ee"/>' +
      '<rect x="20" y="170" width="190" height="10" rx="2" fill="#5a4a6a"/>' +
      '<rect x="40" y="186" width="16" height="30" rx="3" fill="#7a7a8a"/><rect x="40" y="186" width="16" height="12" fill="#9aa"/>' +
      '<rect x="64" y="190" width="16" height="26" rx="3" fill="' + GREEN + '" opacity=".8"/><rect x="88" y="186" width="16" height="30" rx="3" fill="' + PINK + '" opacity=".8"/>' +
      '<text x="140" y="214" ' + font + ' font-size="14" fill="' + GOLD + '">Pb  &#8594;  Au</text>' +
      '<rect x="226" y="166" width="140" height="74" rx="5" fill="#3a3d44" stroke="#22252b" stroke-width="2"/>' + pads +
      '<rect x="236" y="96" width="132" height="56" rx="4" fill="#0a0d12" stroke="#3a3f47" stroke-width="3"/>' +
      '<path d="M244 128 q10-20 20 0 t20 0 t20 0 t20 0 t20 0 t12 0" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/>');
  }

  /* 5. The corner: Rodeo Dr and Wilshire Blvd, green signs, ALCHEMIST tag, the observatory up on the hills */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' +
      '<path d="M0 110 Q60 60 130 80 T260 66 T400 84 V130 H0z" fill="#4a3a5a"/>' +
      '<g fill="#f2f2f2"><rect x="170" y="62" width="60" height="12"/><path d="M186 62a14 14 0 0 1 28 0z"/><path d="M168 66a7 7 0 0 1 12 0z"/><path d="M220 66a7 7 0 0 1 12 0z"/></g>' +
      '<circle class="bl" cx="200" cy="50" r="2" fill="#fff"/>' +
      palm(30, 126, 90) + palm(370, 126, 100, "sw2") +
      '<rect x="0" y="120" width="400" height="104" fill="#d9c7a8"/>' +
      (() => { let b = ""; for (let y = 128; y < 224; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#c4b08e" stroke-width="1"/>'; return b; })() +
      tag("ALCHEMIST", 20, 196, 46, GOLD, -5) + tag("UNCLE AL", 160, 218, 20, PINK, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="278" y="44" width="110" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Rodeo Dr</text>' +
      '<rect x="270" y="70" width="126" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Wilshire Blvd</text>',
      sky("s5", "#1d1640", "#e07a6a"));
  }

  window.SCENES = { citysign: citysign, pinkhotel: pinkhotel, crates: crates, lab: lab, corner: corner };
})();
