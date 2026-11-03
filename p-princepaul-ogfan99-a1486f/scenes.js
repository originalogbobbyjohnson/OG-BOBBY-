/* Prince Paul producer game: Amityville, Long Island. Route 110 into Amityville under the LIRR, Calliope Studios, the Latin Quarter in Times Square, the BQE, and Park Av & Merrick Rd with the Jones Beach water tower. */
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
  const PINK = "#ff6fa8", LIME = "#b8e04a", SUN = "#ffd23f", SKYB = "#5ab4e8";
  const X = '<style>@keyframes reel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:reel 2.4s linear infinite}' +
    '@keyframes trainx{0%{transform:translateX(-380px)}100%{transform:translateX(420px)}}.tx{animation:trainx 6s linear infinite}' +
    '@keyframes bulbs{0%,100%{opacity:1}50%{opacity:.35}}.bb{animation:bulbs .9s steps(1) infinite}.bb2{animation-delay:.45s}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}100%{transform:translate(440px,-20px)}}.gl{animation:gull 9s linear infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:1}100%{transform:translate(26px,-46px);opacity:0}}.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:1.2s}</style>';

  /* 1. Into Amityville by road: the Route 110 shield and the green village sign on Broadway, the LIRR Babylon train crossing the bridge overhead */
  function station() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (12 + i * 58) + '" y="70" width="40" height="16" rx="2" fill="#dfe8f2"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#p1)"/>' +
      [[20, 150, 30], [70, 140, 22], [330, 146, 28], [370, 152, 24]].map(([x, y, r]) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#4f7a3a"/>').join("") +
      '<rect x="0" y="96" width="400" height="18" fill="#9b9a93"/><rect x="0" y="112" width="400" height="4" fill="#6e6d68"/>' +
      '<rect x="60" y="114" width="12" height="70" fill="#9b9a93"/><rect x="328" y="114" width="12" height="70" fill="#9b9a93"/>' +
      '<g class="tx"><rect x="0" y="60" width="350" height="36" rx="5" fill="#c9ccd1" stroke="#6a6e74" stroke-width="2"/>' + win +
      '<rect x="0" y="88" width="350" height="4" fill="#0039a6"/><rect x="0" y="92" width="350" height="2" fill="#7b3fa0"/></g>' +
      '<rect x="0" y="184" width="400" height="76" fill="#4a4c52"/><rect x="0" y="184" width="400" height="5" fill="#8a8c90"/>' +
      '<path d="M0 222h400" stroke="#f2d21c" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="98" y="130" width="4" height="56" fill="#777"/><path d="M80 120h40v14c0 10-10 16-20 18-10-2-20-8-20-18z" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="100" y="140" text-anchor="middle" ' + font + ' font-size="14" fill="#111">110</text><text x="100" y="128" text-anchor="middle" ' + font + ' font-size="5" fill="#111">NEW YORK</text>' +
      '<rect x="248" y="136" width="4" height="50" fill="#777"/><rect x="292" y="136" width="4" height="50" fill="#777"/>' +
      '<rect x="210" y="122" width="128" height="40" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="274" y="138" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ENTERING VILLAGE OF</text><text x="274" y="155" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">AMITYVILLE</text>' +
      '<g class="car"><rect x="0" y="228" width="58" height="16" rx="4" fill="' + PINK + '"/><path d="M10 228l8-9h22l8 9z" fill="' + PINK + '"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="46" cy="246" r="5" fill="#111"/></g>',
      sky("p1", "#79b8e8", "#f6e3a8"));
  }

  /* 2. Calliope Studios, Manhattan, 1988: the walk-up studio where the 3 Feet High and Rising beats were cut, desk lit, reels turning */
  function calliope() {
    let w = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) w += '<rect x="' + (96 + c * 44) + '" y="' + (30 + r * 34) + '" width="20" height="22" fill="' + (r === 1 && c > 0 && c < 4 ? "#ffe39a" : "#2a2c38") + '"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#p2)"/>' +
      '<rect x="0" y="60" width="80" height="160" fill="#4b3e4e"/><rect x="320" y="50" width="80" height="170" fill="#3e4656"/>' +
      brick(80, 20, 240, 200, "#9c6a4a", "#7e5238") + w +
      '<rect x="80" y="14" width="240" height="8" fill="#6a4632"/>' +
      '<rect x="130" y="166" width="140" height="18" fill="#1a1a1a"/><text x="200" y="179" text-anchor="middle" ' + font + ' font-size="10" fill="' + SUN + '" letter-spacing="2">CALLIOPE STUDIOS</text>' +
      '<rect x="176" y="184" width="48" height="36" fill="#2a1a14"/>' +
      '<g class="rl"><circle cx="150" cy="100" r="8" fill="#555" stroke="#999"/><path d="M150 92v16M142 100h16" stroke="#222" stroke-width="2"/></g>' +
      '<g class="rl"><circle cx="250" cy="100" r="8" fill="#555" stroke="#999"/><path d="M250 92v16M242 100h16" stroke="#222" stroke-width="2"/></g>' +
      '<g class="nt"><text x="290" y="120" font-size="18" fill="' + PINK + '">&#9835;</text></g><g class="nt nt2"><text x="100" y="150" font-size="16" fill="' + LIME + '">&#9834;</text></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45474c"/><rect x="0" y="218" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="228" width="60" height="16" rx="4" fill="#f2c200"/><path d="M12 228l8-9h22l8 9z" fill="#f2c200"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="48" cy="246" r="5" fill="#111"/></g>',
      sky("p2", "#ffb26b", "#ffe2a8"));
  }

  /* 3. The Latin Quarter, Times Square, 1987: the club where Stetsasonic played as hip-hop's live band, marquee bulbs chasing */
  function latin() {
    let bulbs = ""; for (let i = 0; i < 22; i++) bulbs += '<circle class="bb' + (i % 2 ? " bb2" : "") + '" cx="' + (66 + i * 12.6) + '" cy="96" r="2.6" fill="' + SUN + '"/><circle class="bb' + (i % 2 ? "" : " bb2") + '" cx="' + (66 + i * 12.6) + '" cy="150" r="2.6" fill="' + SUN + '"/>';
    let bldg = ""; [[0, 30, 56], [340, 20, 60]].forEach(([x, y, w]) => { bldg += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="200" fill="#1e2133"/>'; for (let yy = y + 8; yy < 210; yy += 14) for (let xx = x + 6; xx < x + w - 6; xx += 12) bldg += '<rect x="' + xx + '" y="' + yy + '" width="5" height="7" fill="' + ((xx + yy) % 3 ? "#3a3f5a" : "#ffe39a") + '"/>'; });
    return svg(X +
      '<rect width="400" height="260" fill="url(#p3)"/>' + stars(10) + bldg +
      '<rect x="56" y="40" width="284" height="180" fill="#2c2238"/>' +
      '<rect x="60" y="90" width="276" height="66" fill="#151018" stroke="' + SUN + '" stroke-width="2"/>' + bulbs +
      '<text x="198" y="120" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="24" fill="' + PINK + '">Latin Quarter</text>' +
      '<text x="198" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="3">TONIGHT · LIVE HIP-HOP BAND</text>' +
      '<rect x="150" y="168" width="96" height="52" fill="#0d0a10"/><rect x="150" y="164" width="96" height="6" fill="' + PINK + '"/>' +
      '<g class="th"><circle cx="176" cy="200" r="10" fill="#333" stroke="#888" stroke-width="2"/></g><rect x="196" y="186" width="30" height="20" rx="3" fill="#c0c0c0"/><circle cx="211" cy="196" r="6" fill="#8a1a1a"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3f4045"/><rect x="0" y="218" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="228" width="60" height="16" rx="4" fill="#f2c200"/><path d="M12 228l8-9h22l8 9z" fill="#f2c200"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="48" cy="246" r="5" fill="#111"/></g>' +
      '<text x="200" y="26" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="3">BROADWAY &amp; W 48TH · TIMES SQ</text>',
      sky("p3", "#0c0a1e", "#40204a"));
  }

  /* 4. The Brooklyn-Queens Expressway: the green overhead sign, the elevated road with traffic, Manhattan across the river */
  function bqe() {
    let sky2 = ""; [[0, 90, 30], [34, 70, 24], [62, 100, 20], [86, 60, 26], [116, 84, 22], [140, 40, 18], [160, 76, 30], [194, 96, 20], [218, 66, 26], [248, 88, 22], [274, 58, 20], [298, 94, 28], [330, 74, 24], [358, 90, 42]].forEach(([x, y, w]) => sky2 += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#4a5470"/>');
    return svg(X +
      '<rect width="400" height="260" fill="url(#p4)"/>' + sky2 +
      '<path d="M140 40l9-18 9 18z" fill="#4a5470"/><rect x="0" y="146" width="400" height="18" fill="#3a6e9a"/>' +
      '<g class="gl"><path d="M0 70q5-5 10 0q5-5 10 0" fill="none" stroke="#fff" stroke-width="1.5"/></g>' +
      '<rect x="0" y="176" width="400" height="12" fill="#8d8a84"/><rect x="0" y="188" width="400" height="6" fill="#6c6964"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="194" width="14" height="66" fill="#8d8a84"/>').join("") +
      '<g class="car"><rect x="0" y="160" width="54" height="16" rx="4" fill="' + PINK + '"/><circle cx="12" cy="176" r="4" fill="#111"/><circle cx="42" cy="176" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="158" width="70" height="18" rx="2" fill="#e8e2d0"/><circle cx="14" cy="176" r="4" fill="#111"/><circle cx="56" cy="176" r="4" fill="#111"/></g>' +
      '<g class="car car3"><rect x="0" y="160" width="54" height="16" rx="4" fill="' + LIME + '"/><circle cx="12" cy="176" r="4" fill="#111"/><circle cx="42" cy="176" r="4" fill="#111"/></g>' +
      '<rect x="96" y="104" width="4" height="56" fill="#777"/><rect x="300" y="104" width="4" height="56" fill="#777"/><rect x="96" y="104" width="208" height="4" fill="#777"/>' +
      '<rect x="110" y="60" width="180" height="50" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M128 70h22v10c0 8-6 12-11 14-5-2-11-6-11-14z" fill="#1d4f9a" stroke="#fff" stroke-width="1.5"/><text x="139" y="86" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">278</text>' +
      '<text x="220" y="80" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">BROOKLYN–QUEENS</text><text x="220" y="98" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">EXPWY</text>' +
      '<rect x="0" y="232" width="400" height="28" fill="#4a4c52"/>',
      sky("p4", "#f39a6b", "#ffd9a0"));
  }

  /* 5. Park Av and Merrick Rd, Amityville: green signs, tagged wall, the Jones Beach water tower over the bay */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#p5)"/>' + stars(12) +
      '<rect x="98" y="34" width="22" height="92" fill="#a65a3a"/><path d="M94 34h30l-3-12h-24z" fill="#7e3e26"/><path d="M109 22v-14" stroke="#7e3e26" stroke-width="3"/><circle class="bl" cx="109" cy="8" r="3" fill="#ff5a4a"/>' +
      [46, 62, 78, 94, 110].map(y => '<rect x="104" y="' + y + '" width="10" height="5" fill="#5a2e1c"/>').join("") +
      '<rect x="0" y="122" width="400" height="104" fill="#4f6a8a"/>' + (() => { let b = ""; for (let y = 128; y < 226; y += 9) b += '<path d="M0 ' + y + 'h400" stroke="#425a76" stroke-width="1.5"/>'; return b; })() +
      tag("PRINCE PAUL", 18, 190, 38, SUN, -5) + tag("PSYCHOANALYSIS", 170, 216, 18, PINK, -4) + tag("STET", 40, 150, 22, LIME, -8) +
      '<rect x="0" y="226" width="400" height="34" fill="#3c3e44"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="340" y="40" width="5" height="190" fill="#3d4b3f"/>' +
      '<rect x="272" y="44" width="124" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Park Av</text>' +
      '<rect x="276" y="70" width="116" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Merrick Rd</text>' +
      '<circle class="bl" cx="343" cy="36" r="5" fill="#fff6c2"/>' +
      '<g class="car"><rect x="0" y="232" width="58" height="16" rx="4" fill="' + SKYB + '"/><path d="M10 232l8-9h22l8 9z" fill="' + SKYB + '"/><circle cx="14" cy="250" r="5" fill="#111"/><circle cx="46" cy="250" r="5" fill="#111"/></g>',
      sky("p5", "#141838", "#5a3a5a"));
  }

  window.SCENES = { station: station, calliope: calliope, latin: latin, bqe: bqe, corner: corner };
})();
