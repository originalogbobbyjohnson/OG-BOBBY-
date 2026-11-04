/* tameone scenes (OG FAN 99 Regions) */
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

  const YEL = "#ffd23f", TEAL = "#3ec1d3", PNK = "#ff4f9a";
  const X = '<style>@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes petal{from{transform:translate(0,-20px) rotate(0)}to{transform:translate(-60px,280px) rotate(360deg)}}.pt{animation:petal 7s linear infinite}.pt2{animation-delay:-2.3s}.pt3{animation-delay:-4.6s}' +
    '@keyframes hand{0%,100%{transform:rotate(0)}100%{transform:rotate(360deg)}}.hd{transform-box:view-box;transform-origin:200px 74px;animation:hand 12s linear infinite}' +
    '@keyframes roll{from{transform:translateX(-300px)}to{transform:translateX(420px)}}.rl{animation:roll 9s linear infinite;animation-delay:-4.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bk{animation:blink 1.4s ease-in-out infinite}</style>';
  const blossoms = () => { let s = ""; for (let i = 0; i < 24; i++) s += '<circle class="pt ' + ["", "pt2", "pt3"][i % 3] + '" cx="' + ((i * 71) % 420) + '" cy="' + ((i * 29) % 90) + '" r="2.2" fill="#ffc0d8"/>'; return s; };
  const tree = (x, y, r) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 10) + '" fill="#4a3428"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#f6b8d0"/><circle cx="' + (x - r * .6) + '" cy="' + (y + 4) + '" r="' + (r * .7) + '" fill="#f3a6c4"/><circle cx="' + (x + r * .6) + '" cy="' + (y + 3) + '" r="' + (r * .7) + '" fill="#fbcde0"/>';

  /* 1. Washington Park on the Newark Light Rail (Broad St extension): street-level stop, the light rail car pulling in */
  function station() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<rect x="0" y="70" width="60" height="96" fill="#8a7a6a"/><rect x="64" y="50" width="70" height="116" fill="#b8a890"/><rect x="300" y="40" width="100" height="126" fill="#9a8a7a"/>' +
      (() => { let s = ""; [[70, 58], [306, 48]].forEach(([x, y]) => { for (let r = 0; r < 7; r++) for (let c = 0; c < 4; c++) s += '<rect x="' + (x + c * 15) + '" y="' + (y + r * 15) + '" width="9" height="9" fill="#3a3430"/>'; }); return s; })() +
      '<path d="M20 96h360" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 2) + '" y="92" width="4" height="80" fill="#555"/>').join("") +
      '<rect x="120" y="76" width="160" height="34" rx="3" fill="#111"/><text x="200" y="96" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Washington Park</text><text x="200" y="105" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + YEL + '" letter-spacing="2">NEWARK LIGHT RAIL</text>' +
      '<g class="anim-train"><rect x="0" y="116" width="270" height="56" rx="10" fill="#e8eaee" stroke="#666" stroke-width="2"/>' +
      [16, 70, 124, 178].map(x => '<rect x="' + x + '" y="124" width="42" height="20" rx="3" fill="#1d2a36"/>').join("") +
      '<rect x="232" y="122" width="30" height="24" rx="4" fill="#bfe3ff"/><rect x="0" y="152" width="270" height="5" fill="#1a4a9a"/><rect x="0" y="158" width="270" height="3" fill="#f07a1a"/><circle cx="262" cy="164" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="172" width="400" height="88" fill="#4a4a4e"/><rect x="0" y="172" width="400" height="6" fill="#bbb"/><path d="M0 200h400M0 210h400" stroke="#888" stroke-width="2"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">NEWARK, NEW JERSEY</text>',
      sky("g1", "#8ab4d8", "#f0e4cc"));
  }

  /* 2. Newark Penn Station: the limestone Art Deco front, the big clock, buses rolling past on Market St */
  function penn() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="40" y="40" width="320" height="160" fill="#e4dcc8"/><rect x="40" y="40" width="320" height="10" fill="#c8bea8"/>' +
      [70, 120, 250, 300].map(x => '<rect x="' + x + '" y="114" width="30" height="76" fill="#5a6a7a"/><path d="M' + x + ' 130h30M' + x + ' 150h30M' + x + ' 170h30M' + (x + 15) + ' 110v80" stroke="#e4dcc8" stroke-width="2"/>').join("") +
      '<circle cx="200" cy="74" r="22" fill="#f6f2e4" stroke="#7a6a4a" stroke-width="3"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => '<circle cx="' + (200 + 17 * Math.sin(i * Math.PI / 6)) + '" cy="' + (74 - 17 * Math.cos(i * Math.PI / 6)) + '" r="1.4" fill="#333"/>').join("") +
      '<path d="M200 74v-12" stroke="#222" stroke-width="2.5"/><path class="hd" d="M200 74h14" stroke="#222" stroke-width="2"/>' +
      '<text x="200" y="106" text-anchor="middle" ' + font + ' font-size="11" fill="#5a4a3a" letter-spacing="3">PENNSYLVANIA STATION</text>' +
      '<rect x="170" y="130" width="60" height="70" fill="#3a3a44"/><path d="M170 130q30 -20 60 0" fill="#3a3a44"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4a4e"/><path d="M0 230h400" stroke="#e8c840" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="car"><rect x="0" y="204" width="90" height="34" rx="5" fill="#e8eaee" stroke="#666"/><rect x="8" y="210" width="70" height="12" fill="#1d2a36"/><rect x="0" y="226" width="90" height="4" fill="#1a4a9a"/><circle cx="18" cy="240" r="5" fill="#111"/><circle cx="72" cy="240" r="5" fill="#111"/></g>',
      sky("g2", "#7aa8d0", "#f2e8d8"));
  }

  /* 3. Branch Brook Park in cherry blossom season, the Cathedral Basilica of the Sacred Heart spires behind */
  function branchbrook() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="160" y="40" width="80" height="110" fill="#c8b8a0"/><rect x="150" y="14" width="22" height="136" fill="#bcac94"/><rect x="228" y="14" width="22" height="136" fill="#bcac94"/>' +
      '<path d="M150 14l11 -12 11 12zM228 14l11 -12 11 12z" fill="#7a8a7a"/><circle cx="200" cy="80" r="16" fill="#5a4a6a" stroke="#8a7a5a" stroke-width="3"/><path d="M200 64v32M184 80h32" stroke="#8a7a5a" stroke-width="2"/>' +
      '<path d="M190 40l10 -14 10 14z" fill="#a89880"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#6aa04a"/><path d="M0 214q200 -30 400 0v46H0z" fill="#c8b890"/>' +
      tree(40, 140, 30) + tree(110, 150, 26) + tree(300, 146, 30) + tree(370, 140, 26) +
      '<rect x="180" y="190" width="40" height="6" fill="#6a4a2a"/><path d="M184 196v10M216 196v10" stroke="#6a4a2a" stroke-width="3"/>' + blossoms() +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="#5a2a3a" letter-spacing="3">BRANCH BROOK PARK</text>',
      sky("g3", "#9ac8ec", "#fbe8f0"));
  }

  /* 4. The train yard: wrong side of da tracks, third rail, a whole car bombed with a piece rolling past */
  function yard() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(26) +
      '<path d="M0 120h400" stroke="#555" stroke-width="2"/>' + [20, 100, 180, 260, 340].map(x => '<path d="M' + x + ' 120v-40l20 -10" stroke="#555" stroke-width="2" fill="none"/><circle class="bk" cx="' + (x + 20) + '" cy="70" r="3" fill="#ff3a3a"/>').join("") +
      '<g class="rl"><rect x="0" y="118" width="280" height="70" rx="5" fill="#9aa0a8" stroke="#555" stroke-width="2"/>' +
      '<rect x="10" y="124" width="260" height="56" fill="' + PNK + '" opacity=".25"/>' + tag("TAME", 30, 172, 40, YEL, -4) + tag("ONE", 150, 172, 40, TEAL, -4) +
      '<circle cx="40" cy="190" r="8" fill="#222"/><circle cx="240" cy="190" r="8" fill="#222"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3a3430"/>' + (() => { let s = ""; for (let x = 0; x < 400; x += 18) s += '<rect x="' + x + '" y="204" width="10" height="40" fill="#5a4a3a"/>'; return s; })() +
      '<path d="M0 210h400M0 236h400" stroke="#b8b8b8" stroke-width="4"/><path d="M0 250h400" stroke="' + YEL + '" stroke-width="3"/>' +
      '<text x="200" y="230" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">WRONG SIDE OF DA TRACKS</text>',
      sky("g4", "#141a2e", "#3a3a5a"));
  }

  /* 5. Broad St and Market St (Four Corners): green signs, TAME ONE tagged, the Newark skyline behind */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="190" y="20" width="36" height="104" fill="#8a94a4"/><path d="M190 20l18 -18 18 18z" fill="#c8a040"/><rect x="40" y="60" width="50" height="64" fill="#6a7484"/><rect x="100" y="44" width="40" height="80" fill="#7a8494"/><rect x="250" y="50" width="54" height="74" fill="#6a7484"/><rect x="316" y="70" width="50" height="54" fill="#7a8494"/>' +
      (() => { let s = ""; [[194, 30], [104, 52], [256, 58]].forEach(([x, y]) => { for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) s += '<rect x="' + (x + c * 10) + '" y="' + (y + r * 12) + '" width="5" height="6" fill="#ffd27a" opacity=".7"/>'; }); return s; })() +
      '<rect x="0" y="120" width="400" height="104" fill="#3a3a44"/>' + brick(0, 120, 400, 104, "#3a3a44", "#32323a") +
      tag("TAME ONE", 26, 194, 52, YEL, -6) + tag("ARTIFACTS", 34, 218, 16, TEAL, -3) + tag("BOOM SKWAD", 150, 218, 16, PNK, -3) +
      '<g class="sp"><circle cx="262" cy="160" r="3" fill="' + YEL + '"/></g><g class="sp sp2"><circle cx="268" cy="154" r="2" fill="' + YEL + '"/></g><g class="sp sp3"><circle cx="258" cy="150" r="2" fill="' + YEL + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="220" width="400" height="6" fill="#d8dce0"/>' +
      '<rect x="346" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(284, 92, 112, "Broad St") + sign(284, 118, 112, "Market St"),
      sky("g5", "#f0a060", "#5a4a7a"));
  }

  window.SCENES = { station: station, penn: penn, branchbrook: branchbrook, yard: yard, corner: corner };
})();
