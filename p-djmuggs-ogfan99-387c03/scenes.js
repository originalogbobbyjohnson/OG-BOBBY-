/* DJ Muggs producer scenes */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const ORG = "#ff8a3d", TEAL = "#2ec4b6", GLD = "#f2c14e";
  const X = '<style>@keyframes trainx{0%{transform:translateX(-420px)}100%{transform:translateX(440px)}}.tx{animation:trainx 9s linear infinite;animation-delay:-4s}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}20%{transform:translateY(-10px)}40%{transform:translateY(0)}55%{transform:translateY(-6px)}70%{transform:translateY(0)}}.hp{animation:hop 1.6s ease-in-out infinite}' +
    '@keyframes flash{0%,86%,100%{opacity:0}90%{opacity:1}}.fl{animation:flash 2.6s linear infinite}.fl2{animation-delay:1.1s}.fl3{animation-delay:1.9s}' +
    '@keyframes shim{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.sh{animation:shim 2.4s linear infinite}' +
    '@keyframes ride{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.rd{animation:ride 10s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sy{transform-box:fill-box;transform-origin:50% 100%;animation:sway 4s ease-in-out infinite}</style>';
  const palm = (x, y, h, c) => '<g class="sy"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#5a4632" stroke-width="5" fill="none"/>' +
    [-60, -25, 10, 45, 80, 120].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 18) + ' ' + (-Math.sin(a * Math.PI / 180) * 10 - 6) + ' ' + (Math.cos(a * Math.PI / 180) * 32) + ' ' + (Math.sin(a * Math.PI / 180) * 6 + 8) + '" stroke="' + c + '" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const shield = (x, y, n) => '<path d="M' + (x - 22) + ' ' + y + 'h44q2 26-22 44q-24-18-22-44z" fill="#003f87" stroke="#fff" stroke-width="2.5"/><path d="M' + (x - 22) + ' ' + y + 'h44v9h-44z" fill="#c8102e"/><text x="' + x + '" y="' + (y + 28) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + n + '</text>';

  /* 1. Into South Gate by road: the 710 Long Beach Freeway, the I-710 shield and the green exit sign for Firestone Blvd, cars rolling, palms in the haze */
  function station() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#m1)"/><circle cx="320" cy="96" r="26" fill="#ffd27a" opacity=".85"/>' +
      palm(30, 170, 80, "#3f6b3a") + palm(370, 168, 90, "#3f6b3a") + palm(330, 172, 60, "#4f7a3a") +
      '<rect x="0" y="170" width="400" height="90" fill="#5a5a5e"/><path d="M0 200h400M0 230h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 16"/><rect x="0" y="166" width="400" height="6" fill="#bdb6a8"/>' +
      '<rect x="60" y="38" width="6" height="134" fill="#6d7378"/><rect x="300" y="38" width="6" height="134" fill="#6d7378"/><rect x="56" y="36" width="254" height="8" fill="#6d7378"/>' +
      '<rect x="110" y="48" width="186" height="64" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="203" y="74" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Firestone Blvd</text><text x="203" y="98" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">South Gate</text>' +
      '<rect x="244" y="104" width="48" height="16" fill="#f2c14e"/><text x="268" y="116" text-anchor="middle" ' + font + ' font-size="10" fill="#111">EXIT</text>' +
      shield(84, 62, "710") +
      '<g class="car"><rect x="0" y="206" width="60" height="16" rx="4" fill="' + ORG + '"/><path d="M10 206l8-9h24l8 9z" fill="' + ORG + '"/><circle cx="14" cy="224" r="5" fill="#111"/><circle cx="46" cy="224" r="5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="236" width="60" height="16" rx="4" fill="' + TEAL + '"/><path d="M10 236l8-9h24l8 9z" fill="' + TEAL + '"/><circle cx="14" cy="254" r="5" fill="#111"/><circle cx="46" cy="254" r="5" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="178" width="70" height="18" rx="3" fill="#e8e3d6"/><rect x="50" y="172" width="20" height="10" fill="#e8e3d6"/><circle cx="14" cy="198" r="5" fill="#111"/><circle cx="58" cy="198" r="5" fill="#111"/></g>',
      sky("m1", "#e8a26a", "#f4e0b0"));
  }

  /* 2. Cypress Ave, South Gate: the street the group took its name from. Stucco bungalows, palms, a lowrider hopping at the curb */
  function cypressave() {
    const house = (x, c, roof) => '<rect x="' + x + '" y="120" width="96" height="62" fill="' + c + '"/><path d="M' + (x - 8) + ' 122l56-30 56 30z" fill="' + roof + '"/><rect x="' + (x + 14) + '" y="136" width="22" height="18" fill="#3a4a5a" stroke="#fff" stroke-width="2"/><rect x="' + (x + 58) + '" y="144" width="18" height="38" fill="#7a4a2a"/><rect x="' + (x - 6) + '" y="182" width="108" height="6" fill="#e8e0d0"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#m2)"/><circle cx="70" cy="52" r="22" fill="#fff2b0"/>' +
      palm(150, 130, 100, "#3f6b3a") + palm(360, 128, 110, "#3f6b3a") +
      house(14, "#f1d9b5", "#b0553a") + house(144, "#cfe4e0", "#7a4a3a") + house(274, "#f4c9c0", "#9b4a3a") +
      '<rect x="0" y="188" width="400" height="12" fill="#c8c2b4"/><rect x="0" y="200" width="400" height="60" fill="#4a4a4e"/>' +
      '<g class="hp"><rect x="150" y="204" width="110" height="20" rx="6" fill="#7b2d8b"/><path d="M172 204l14-16h46l16 16z" fill="#7b2d8b"/><path d="M180 202l9-11h18v11zM212 202v-11h18l12 11z" fill="#bfe0f5"/><path d="M152 214h106" stroke="' + GLD + '" stroke-width="2"/></g>' +
      [170, 242].map(x => '<circle cx="' + x + '" cy="228" r="8" fill="#111"/><circle cx="' + x + '" cy="228" r="4" fill="#d8d8d8"/>').join("") +
      '<rect x="382" y="140" width="4" height="60" fill="#555"/>' + sign(330, 132, 70, "Cypress Av"),
      sky("m2", "#6fb6e8", "#f6e4c0"));
  }

  /* 3. The Hollywood Walk of Fame: the group's star (2019), coral terrazzo with a brass rim and the record emblem, camera flashes going off */
  function walkoffame() {
    let tiles = ""; for (let x = 0; x < 400; x += 80) for (let y = 120; y < 260; y += 70) tiles += '<rect x="' + x + '" y="' + y + '" width="78" height="68" fill="#2f2b2e" stroke="#4a4448"/>';
    const st = (cx, cy, r) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (cx + Math.cos(a) * rr).toFixed(1) + " " + (cy + Math.sin(a) * rr).toFixed(1); } return p + "z"; };
    return svg(X +
      '<rect width="400" height="260" fill="url(#m3)"/>' + palm(40, 120, 90, "#3f6b3a") + palm(370, 120, 100, "#3f6b3a") +
      '<rect x="90" y="40" width="220" height="80" fill="#5a2a3a"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<circle class="bl bl' + (1 + i % 4) + '" cx="' + (100 + i * 22) + '" cy="48" r="3" fill="#ffe08a"/>').join("") +
      '<rect x="110" y="62" width="180" height="50" fill="#2a1420"/><text x="200" y="94" text-anchor="middle" ' + font + ' font-size="14" fill="' + GLD + '" letter-spacing="3">HOLLYWOOD BLVD</text>' +
      tiles + '<rect x="120" y="128" width="160" height="124" fill="#2f2b2e"/>' +
      '<path d="' + st(200, 184, 56) + '" fill="#e88a8a" stroke="#c9a14a" stroke-width="3"/>' +
      '<text x="200" y="176" text-anchor="middle" ' + font + ' font-size="11" fill="#c9a14a" letter-spacing="1">CYPRESS HILL</text>' +
      '<circle cx="200" cy="198" r="11" fill="#c9a14a"/><circle cx="200" cy="198" r="7" fill="#1a1a1a"/><circle cx="200" cy="198" r="2" fill="#c9a14a"/>' +
      '<g class="fl"><circle cx="70" cy="150" r="30" fill="#fff" opacity=".7"/></g><g class="fl fl2"><circle cx="330" cy="170" r="34" fill="#fff" opacity=".6"/></g><g class="fl fl3"><circle cx="250" cy="230" r="24" fill="#fff" opacity=".5"/></g>',
      sky("m3", "#2a3a6a", "#e88a5a"));
  }

  /* 4. The LA River through South Gate: the sloped concrete channel, a trickle of water shimmering, a freight crossing the bridge, a bike on the river trail */
  function river() {
    let sh = ""; for (let x = 0; x < 460; x += 40) sh += '<path d="M' + x + ' 212q10-4 20 0" stroke="#bfe6ff" stroke-width="2" fill="none"/>';
    let cars = ""; for (let i = 0; i < 6; i++) cars += '<rect x="' + (i * 66) + '" y="62" width="60" height="30" fill="' + ["#9b4a2a", "#3a5a7a", "#c8a03a", "#5a3a2a", "#2e6e5e", "#8a8a8a"][i] + '"/><circle cx="' + (i * 66 + 12) + '" cy="94" r="4" fill="#222"/><circle cx="' + (i * 66 + 48) + '" cy="94" r="4" fill="#222"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#m4)"/><circle cx="90" cy="40" r="24" fill="#ffd27a"/>' +
      '<g class="tx">' + cars + '<rect x="396" y="56" width="44" height="36" fill="' + ORG + '"/></g>' +
      '<rect x="0" y="96" width="400" height="10" fill="#7a7468"/>' + [20, 140, 260, 380].map(x => '<rect x="' + (x - 6) + '" y="106" width="12" height="80" fill="#8a8476"/>').join("") +
      '<path d="M0 150L120 196H280L400 150V260H0z" fill="#b8b2a4"/><path d="M0 150L120 196M400 150L280 196" stroke="#8a8476" stroke-width="2"/>' +
      '<rect x="120" y="196" width="160" height="30" fill="#a8a294"/><rect x="0" y="204" width="400" height="14" fill="#4a8ab0" opacity=".85"/>' +
      '<g class="sh">' + sh + '</g>' +
      '<rect x="0" y="140" width="400" height="10" fill="#6b6457"/>' +
      '<g class="rd"><circle cx="10" cy="134" r="6" fill="none" stroke="#222" stroke-width="2"/><circle cx="30" cy="134" r="6" fill="none" stroke="#222" stroke-width="2"/><path d="M10 134l8-10h10l2 10M18 124l-2-6h6" stroke="' + TEAL + '" stroke-width="2.5" fill="none"/><circle cx="22" cy="110" r="4" fill="#222"/><path d="M22 114v8" stroke="#222" stroke-width="3"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#4a4438" letter-spacing="3">LOS ANGELES RIVER - SOUTH GATE</text>',
      sky("m4", "#7fb4e6", "#f4c890"));
  }

  /* 5. The corner: Firestone Blvd & Atlantic Av, South Gate. MUGGS tagged on the wall, palms, the downtown LA towers far off in the haze */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#m5)"/>' +
      '<g fill="#9a8fa8" opacity=".8"><rect x="120" y="46" width="22" height="80"/><path d="M160 30h20v96h-20z"/><path d="M164 30q6-14 12 0z"/><rect x="190" y="56" width="18" height="70"/><path d="M216 20h14v106h-14z"/><path d="M223 6v14" stroke="#9a8fa8" stroke-width="2"/><rect x="240" y="60" width="24" height="66"/></g>' +
      palm(30, 128, 100, "#3f6b3a") + palm(96, 128, 80, "#4f7a3a") + palm(372, 128, 110, "#3f6b3a") +
      '<rect x="0" y="126" width="400" height="98" fill="#e8d6b8"/><rect x="0" y="126" width="400" height="8" fill="#c8b490"/>' +
      tag("MUGGS", 40, 196, 52, ORG, -6) + tag("SOUL ASSASSINS", 200, 214, 18, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#bdb6a8"/>' +
      '<rect x="316" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(268, 98, 104, "Firestone Blvd") + sign(290, 124, 82, "Atlantic Av") +
      '<rect x="384" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="386" cy="108" r="7" fill="#ffe9a8"/>',
      sky("m5", "#e8a26a", "#f6dcb0"));
  }

  window.SCENES = { station: station, cypressave: cypressave, walkoffame: walkoffame, river: river, corner: corner };
})();
