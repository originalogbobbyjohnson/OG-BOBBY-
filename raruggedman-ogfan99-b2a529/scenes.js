/* raruggedman scenes (OG FAN 99 Regions) */
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

  const GLD = "#e8b422", RED = "#c0392b", SKY = "#5fa8d3";
  const X = '<style>@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes beam{0%,100%{opacity:.15}50%{opacity:.85}}.bm{animation:beam 2.4s ease-in-out infinite}.bm2{animation-delay:1.2s}' +
    '@keyframes chase{0%,100%{opacity:.25}50%{opacity:1}}.ch{animation:chase .8s steps(1) infinite}.ch2{animation-delay:.4s}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '@keyframes gull{0%,100%{transform:translate(0,0)}50%{transform:translate(36px,-10px)}}.gl{animation:gull 5s ease-in-out infinite}.gl2{animation-delay:-2.5s}' +
    '@keyframes bobb{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(2px) rotate(2deg)}}.bt{transform-box:fill-box;transform-origin:50% 100%;animation:bobb 2.2s ease-in-out infinite}</style>';
  const waves = (y, c) => { let s = '<g class="wv">'; for (let x = -40; x < 440; x += 20) s += '<path d="M' + x + ' ' + y + 'q5 -4 10 0t10 0" stroke="' + c + '" stroke-width="2" fill="none"/>'; return s + '</g>'; };
  const gull = (x, y) => '<path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/>';
  const boat = (x, y, c) => '<g class="bt"><path d="M' + x + ' ' + y + 'h40l-6 8h-28z" fill="' + c + '"/><path d="M' + (x + 20) + ' ' + y + 'v-30l14 26z" fill="#f4f1e8"/><path d="M' + (x + 18) + ' ' + y + 'v-26l-12 22z" fill="#e8e2d0"/></g>';

  /* 1. Huntington station on the LIRR Port Jefferson Branch: high-level platform, canopy, the silver train pulling in */
  function station() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<path d="M0 140q60 -30 120 -10t140 -6t140 4v40H0z" fill="#3f6a3a"/>' +
      '<rect x="0" y="60" width="400" height="10" fill="#5a3a2a"/><path d="M0 70h400l-6 8H6z" fill="#7a4e36"/>' +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 3) + '" y="70" width="6" height="104" fill="#6a6f78"/>').join("") +
      '<rect x="110" y="84" width="180" height="32" rx="3" fill="#111"/><text x="200" y="104" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Huntington</text>' +
      '<text x="200" y="113" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GLD + '" letter-spacing="2">PORT JEFFERSON BRANCH</text>' +
      '<g class="anim-train"><rect x="0" y="122" width="260" height="58" rx="6" fill="#c8ccd2" stroke="#666" stroke-width="2"/>' +
      [20, 76, 132, 188].map(x => '<rect x="' + x + '" y="132" width="40" height="18" rx="2" fill="#1d2a36"/>').join("") +
      '<rect x="0" y="156" width="260" height="5" fill="#1f3f8f"/><rect x="0" y="162" width="260" height="2" fill="#6a2a7a"/>' +
      '<rect x="234" y="130" width="20" height="20" rx="2" fill="#bfe3ff"/><circle cx="254" cy="170" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#e8c840"/><rect x="0" y="190" width="400" height="70" fill="#8a8a88"/>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">SUFFOLK COUNTY, LONG ISLAND</text>',
      sky("g1", "#9cc4e4", "#f2e6d0"));
  }

  /* 2. The Paramount on New York Ave in Huntington: the marquee and its chasing bulbs */
  function paramount() {
    let bulbs = ""; for (let i = 0; i < 24; i++) bulbs += '<circle class="ch' + (i % 2 ? " ch2" : "") + '" cx="' + (86 + i * 10) + '" cy="120" r="2.4" fill="#ffe08a"/><circle class="ch' + (i % 2 ? "" : " ch2") + '" cx="' + (86 + i * 10) + '" cy="166" r="2.4" fill="#ffe08a"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(26) +
      '<rect x="60" y="44" width="280" height="176" fill="#e9dcc4"/><rect x="60" y="44" width="280" height="10" fill="#c8b490"/>' +
      [80, 140, 230, 290].map(x => '<rect x="' + x + '" y="62" width="30" height="40" fill="#3a3040"/><rect x="' + (x + 4) + '" y="66" width="22" height="32" fill="#ffd27a" opacity=".5"/>').join("") +
      '<rect x="80" y="116" width="240" height="54" fill="#1a1a1a" stroke="' + GLD + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="140" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="2">THE PARAMOUNT</text><text x="200" y="158" text-anchor="middle" ' + font + ' font-size="10" fill="' + GLD + '">TONIGHT: THE PEOPLE\'S CHAMP</text>' +
      '<rect x="160" y="176" width="80" height="44" fill="#3a2420"/><path d="M200 176v44" stroke="#c8b490" stroke-width="2"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3a3e"/><rect x="0" y="216" width="400" height="6" fill="#9a9a9a"/>' +
      [96, 126, 270, 300].map((x, i) => '<g class="bob" style="animation-delay:' + (i * .25) + 's"><rect x="' + x + '" y="196" width="14" height="24" rx="4" fill="' + ["#222", "#3a2a4a", "#1e3a5a", "#4a2a20"][i] + '"/><circle cx="' + (x + 7) + '" cy="190" r="6" fill="#2b2b2b"/></g>').join(""),
      sky("g2", "#0b1430", "#3a2a5a"));
  }

  /* 3. The Big Duck in Flanders: the white duck building with the orange beak, cars rolling by on Route 24 */
  function duck() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#6a9a4a"/><rect x="0" y="206" width="400" height="30" fill="#4a4a4e"/><path d="M0 221h400" stroke="#e8c840" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<ellipse cx="190" cy="148" rx="96" ry="44" fill="#f6f4ee" stroke="#c9c4b4" stroke-width="2"/><path d="M110 132q-30 -10 -24 14q10 10 28 4z" fill="#f6f4ee" stroke="#c9c4b4" stroke-width="2"/>' +
      '<path d="M250 130q14 -50 -6 -66q-24 -14 -36 10q-8 18 6 40z" fill="#f6f4ee" stroke="#c9c4b4" stroke-width="2"/>' +
      '<path d="M250 72l30 4 -30 8z" fill="#f08a1a" stroke="#b05a0a" stroke-width="1.5"/><circle cx="236" cy="70" r="5" fill="#c83020"/><circle cx="236" cy="70" r="2" fill="#111"/>' +
      '<rect x="176" y="160" width="24" height="32" fill="#7a5a3a"/><path d="M188 160v32" stroke="#5a3a2a" stroke-width="2"/>' +
      '<g class="car"><rect x="0" y="196" width="46" height="16" rx="4" fill="' + RED + '"/><rect x="8" y="190" width="28" height="10" rx="3" fill="#bfe3ff"/><circle cx="10" cy="212" r="4" fill="#111"/><circle cx="36" cy="212" r="4" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="222" width="46" height="16" rx="4" fill="' + SKY + '"/><rect x="10" y="216" width="28" height="10" rx="3" fill="#dff"/><circle cx="10" cy="238" r="4" fill="#111"/><circle cx="36" cy="238" r="4" fill="#111"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">THE BIG DUCK - FLANDERS</text>',
      sky("g3", "#7ab8e8", "#eaf4f8"));
  }

  /* 4. Montauk Point Lighthouse: white tower with the brown band on the bluff, beam sweeping, waves */
  function lighthouse() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(30) +
      '<path class="bm" d="M200 54L0 20V70z" fill="#fff6c2" opacity=".5"/><path class="bm bm2" d="M200 54L400 24V76z" fill="#fff6c2" opacity=".5"/>' +
      '<path d="M0 190q80 -40 150 -36h110q60 0 140 30v76H0z" fill="#5a6a3a"/><path d="M150 156h110l10 14H140z" fill="#c8b48a"/>' +
      '<path d="M182 160l6 -100h24l6 100z" fill="#f6f4ee"/><path d="M186 120l2 -26h24l2 26z" fill="#7a4a2a"/>' +
      '<rect x="186" y="42" width="28" height="20" fill="#2a2a2a"/><rect x="190" y="46" width="20" height="12" fill="#fff6c2"/><path d="M184 42l16 -12 16 12z" fill="#2a2a2a"/><rect x="180" y="60" width="40" height="4" fill="#2a2a2a"/>' +
      '<rect x="238" y="140" width="40" height="20" fill="#f0ece0"/><path d="M234 140l24 -14 24 14z" fill="#8a3a2a"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#1a3a5a"/>' + waves(222, "#8ab8d8") + waves(238, "#6a98b8") +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">MONTAUK POINT</text>',
      sky("g4", "#0e1a34", "#3a4a7a"));
  }

  /* 5. New York Ave and Main St in Huntington village: green signs, RUGGED MAN tagged, the harbor and its lighthouse behind */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="0" y="92" width="400" height="34" fill="#2a5a7a"/>' + waves(104, "#8ab8d8") +
      '<rect x="300" y="70" width="34" height="30" fill="#c8bca4"/><rect x="306" y="56" width="22" height="16" fill="#c8bca4"/><rect x="310" y="44" width="14" height="12" fill="#2a2a2a"/><rect x="313" y="47" width="8" height="6" class="flk" fill="#fff6c2"/>' +
      boat(60, 110, "#f4f1e8") + boat(200, 114, RED) +
      '<g class="gl">' + gull(120, 50) + '</g><g class="gl gl2">' + gull(220, 40) + '</g>' +
      '<rect x="0" y="122" width="400" height="102" fill="#6a4030"/>' + brick(0, 122, 400, 102, "#6a4030", "#5a3426") +
      tag("RUGGED MAN", 20, 196, 36, GLD, -6) + tag("CRUSTIFIED", 34, 218, 16, SKY, -3) + tag("PEOPLE'S CHAMP", 150, 218, 15, "#fff", -3) +
      '<g class="sp"><circle cx="270" cy="164" r="3" fill="' + GLD + '"/></g><g class="sp sp2"><circle cx="276" cy="158" r="2" fill="' + GLD + '"/></g><g class="sp sp3"><circle cx="266" cy="154" r="2" fill="' + GLD + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="220" width="400" height="6" fill="#d8dce0"/>' +
      '<rect x="346" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(278, 94, 120, "New York Av") + sign(278, 120, 120, "Main St"),
      sky("g5", "#8ec0e0", "#f4e2c4"));
  }

  window.SCENES = { station: station, paramount: paramount, duck: duck, lighthouse: lighthouse, corner: corner };
})();
