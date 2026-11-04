/* tonedeff scenes (OG FAN 99 Regions) */
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

  const RED = "#e8443a", YEL = "#ffd23f", BLU = "#3fa7d6", NAVY = "#14304f";
  const X = '<style>@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '@keyframes trol{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.tr{animation:trol 6s ease-in-out infinite}' +
    '@keyframes sail{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}.sl{animation:sail 7s ease-in-out infinite}' +
    '@keyframes flame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.fl{transform-box:fill-box;transform-origin:50% 100%;animation:flame .6s ease-in-out infinite}' +
    '@keyframes spin{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.hs{animation:spin .9s ease-in-out infinite}.hs2{animation-delay:.3s}.hs3{animation-delay:.6s}</style>';
  const water = (y, c, l) => '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c + '"/><g class="wv">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => '<path d="M' + (i * 40) + ' ' + (y + 10) + 'q10 -4 20 0" stroke="' + l + '" stroke-width="2" fill="none"/><path d="M' + (i * 40 + 18) + ' ' + (y + 26) + 'q10 -4 20 0" stroke="' + l + '" stroke-width="2" fill="none"/>').join("") + '</g>';
  /* the big gantry crane over the shipyard: two legs, the long girder on top, the trolley */
  const crane = (x, y, s, c, anim) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v-120M14 0v-120M150 0v-120M164 0v-120" stroke="' + c + '" stroke-width="6"/><path d="M0 -60h14M150 -60h14M0 -30l14 -30M150 -30l14 -30" stroke="' + c + '" stroke-width="3"/>' +
    '<rect x="-14" y="-136" width="192" height="18" fill="' + c + '"/><g class="' + (anim ? "tr" : "") + '"><rect x="30" y="-140" width="26" height="26" fill="' + RED + '"/><path d="M43 -114v40" stroke="#333" stroke-width="2"/><path d="M37 -74h12l-6 8z" fill="#333"/></g></g>';

  /* 1. Into Newport News on I-64: the green overhead signs, the Hampton Roads Transit bus rolling in under them, the harbor beyond */
  function station() {
    const shield = (x, y, n) => '<path d="M' + (x - 12) + ' ' + (y - 12) + 'h24v12q0 10 -12 14q-12 -4 -12 -14z" fill="#1a3a8a" stroke="#fff" stroke-width="1.5"/><path d="M' + (x - 12) + ' ' + (y - 12) + 'h24v5h-24z" fill="#c8202a"/><text x="' + x + '" y="' + (y + 6) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + n + '</text>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#t1)"/>' + water(150, "#2a5a7a", "#7fb6d8") +
      '<rect x="0" y="146" width="400" height="10" fill="#7a8a8a"/>' + crane(250, 146, 0.45, "#c9ccd2", false) +
      '<rect x="20" y="36" width="8" height="140" fill="#6a6e74"/><rect x="372" y="36" width="8" height="140" fill="#6a6e74"/><rect x="20" y="36" width="360" height="8" fill="#6a6e74"/>' +
      '<rect x="36" y="48" width="160" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(58, 66, "64") + '<text x="76" y="64" ' + font + ' font-size="9" fill="#fff">WEST</text><text x="116" y="86" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Newport News</text><text x="116" y="102" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Next 2 Exits</text>' +
      '<rect x="204" y="48" width="160" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(226, 66, "664") + '<text x="244" y="64" ' + font + ' font-size="9" fill="#fff">SOUTH</text><text x="284" y="86" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Downtown</text><text x="284" y="102" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Hampton Roads</text>' +
      '<rect x="0" y="176" width="400" height="84" fill="#4a4a50"/><path d="M0 214h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 16"/><rect x="0" y="174" width="400" height="4" fill="#c8c8c8"/>' +
      '<g class="anim-train"><rect x="0" y="180" width="210" height="58" rx="8" fill="#f4f6f8" stroke="#6a7280" stroke-width="2"/>' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (12 + i * 38) + '" y="188" width="30" height="22" rx="3" fill="#2a3a4a"/>').join("") +
      '<rect x="0" y="214" width="210" height="7" fill="' + NAVY + '"/><rect x="0" y="221" width="210" height="4" fill="' + BLU + '"/><rect x="186" y="186" width="20" height="10" rx="2" fill="#111"/><text x="196" y="194" text-anchor="middle" ' + font + ' font-size="7" fill="' + YEL + '">HRT</text>' +
      '<circle cx="40" cy="240" r="10" fill="#111"/><circle cx="170" cy="240" r="10" fill="#111"/><circle cx="204" cy="226" r="3" fill="#fff6c2"/></g>',
      sky("t1", "#f2a65a", "#f7dcb0"));
  }

  /* 2. The Victory Arch at West Ave and 25th St: the white granite arch from 1919, the flag moving, the eternal flame flickering */
  function arch() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#t2)"/>' +
      '<rect x="0" y="120" width="400" height="80" fill="#c8b89a"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 52 + 6) + '" y="130" width="34" height="40" fill="#8a7a62"/>').join("") +
      '<path d="M110 196V66h180v130h-50v-70q-40 -46 -80 0v70z" fill="#efeae0" stroke="#bdb6a8" stroke-width="2"/>' +
      '<rect x="100" y="54" width="200" height="16" fill="#e2dccf" stroke="#bdb6a8"/><rect x="96" y="48" width="208" height="8" fill="#d6cfc0"/>' +
      '<text x="200" y="66" text-anchor="middle" ' + font + ' font-size="10" fill="#6a6252" letter-spacing="3">VICTORY ARCH</text>' +
      '<path d="M114 196v-120M128 196v-120M272 196v-120M286 196v-120" stroke="#d8d1c2" stroke-width="2"/>' +
      '<rect x="198" y="8" width="3" height="40" fill="#888"/><g class="fg"><rect x="201" y="10" width="36" height="20" fill="#c8202a"/><rect x="201" y="13" width="36" height="3" fill="#fff"/><rect x="201" y="19" width="36" height="3" fill="#fff"/><rect x="201" y="25" width="36" height="3" fill="#fff"/><rect x="201" y="10" width="15" height="11" fill="#1a3a8a"/></g>' +
      '<rect x="190" y="182" width="20" height="14" fill="#6a6e74"/><path class="fl" d="M200 182q-8 -8 0 -22q8 14 0 22z" fill="#ff9a2a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5d5a55"/><rect x="0" y="194" width="400" height="4" fill="#bdb6a8"/>',
      sky("t2", "#6fb6e8", "#eaf4fa"));
  }

  /* 3. The James River Bridge: the long low span over the water and the lift span with its two towers, a sailboat gliding under */
  function bridge() {
    let piers = ""; for (let i = 0; i < 20; i++) piers += '<rect x="' + (i * 20 + 4) + '" y="150" width="4" height="22" fill="#9aa0a6"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#t3)"/><circle cx="320" cy="60" r="22" fill="#ffe3a0"/>' +
      water(160, "#3a6e8e", "#9fd0ea") + piers +
      '<rect x="0" y="140" width="400" height="10" fill="#c9ccd2"/><path d="M0 140h400" stroke="#8a9098" stroke-width="2"/>' +
      '<rect x="150" y="40" width="14" height="132" fill="#b8bec6"/><rect x="236" y="40" width="14" height="132" fill="#b8bec6"/><rect x="146" y="34" width="22" height="10" fill="#8a9098"/><rect x="232" y="34" width="22" height="10" fill="#8a9098"/>' +
      '<path d="M157 44v18M243 44v18" stroke="#666" stroke-width="1.5"/><rect x="164" y="92" width="72" height="12" fill="#c9ccd2" stroke="#8a9098"/><path d="M164 92l20 12M184 92l20 12M204 92l20 12" stroke="#8a9098"/>' +
      '<g class="sl"><path d="M60 200h44l-6 10h-32z" fill="#fff"/><path d="M80 198v-44l22 40z" fill="#f4f6f8"/><path d="M78 198v-34l-16 30z" fill="' + YEL + '"/></g>' +
      '<g class="car"><rect x="0" y="128" width="40" height="12" rx="4" fill="' + RED + '"/></g><g class="carL"><rect x="0" y="128" width="40" height="12" rx="4" fill="' + BLU + '"/></g>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">JAMES RIVER BRIDGE</text>',
      sky("t3", "#5aa0d8", "#f4e2c0"));
  }

  /* 4. The Hampton Carousel on the Hampton waterfront: the 1920 carousel under its pavilion, painted horses bobbing up and down */
  function carousel() {
    const horse = (x, c, k) => '<g class="hs ' + k + '"><path d="M' + x + ' 88v62" stroke="' + YEL + '" stroke-width="2.5"/>' +
      '<ellipse cx="' + x + '" cy="122" rx="16" ry="8" fill="' + c + '" stroke="#333" stroke-width="1"/>' +
      '<path d="M' + (x + 10) + ' 118l8 -14l8 2l-2 6l-6 0l-4 10z" fill="' + c + '" stroke="#333" stroke-width="1"/>' +
      '<path d="M' + (x + 12) + ' 106q-4 4 -4 10" stroke="#7a4a2a" stroke-width="2.5" fill="none"/>' +
      '<path d="M' + (x - 10) + ' 128l-4 12M' + (x - 4) + ' 129l2 12M' + (x + 6) + ' 129l-3 12M' + (x + 12) + ' 127l5 11" stroke="#333" stroke-width="2"/>' +
      '<path d="M' + (x - 16) + ' 120q-8 2 -8 10" stroke="#7a4a2a" stroke-width="2.5" fill="none"/><rect x="' + (x - 6) + '" y="113" width="10" height="5" rx="1" fill="' + RED + '"/></g>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#t4)"/>' + water(200, "#2a5a7a", "#7fb6d8") +
      '<path d="M60 74l140 -50 140 50z" fill="' + RED + '"/><path d="M60 74l140 -50 140 50" fill="none" stroke="#fff" stroke-width="3"/><circle cx="200" cy="20" r="6" fill="' + YEL + '"/>' +
      '<rect x="60" y="74" width="280" height="14" fill="#f4ead8"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => '<circle class="bl ' + (i % 2 ? "bl2" : "") + '" cx="' + (70 + i * 20) + '" cy="81" r="3" fill="' + YEL + '"/>').join("") +
      '<rect x="70" y="88" width="6" height="104" fill="#f4ead8"/><rect x="324" y="88" width="6" height="104" fill="#f4ead8"/><rect x="194" y="88" width="12" height="104" fill="#d9b25a"/>' +
      horse(110, "#fff", "") + horse(160, "#f2a0c0", "hs2") + horse(250, "#9fd0ea", "hs3") + horse(300, "#fff", "hs2") +
      '<rect x="60" y="180" width="280" height="16" fill="#7a4a8a"/><rect x="0" y="196" width="400" height="6" fill="#c8b89a"/>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">HAMPTON CAROUSEL</text>',
      sky("t4", "#7cc0ec", "#f2e4c4"));
  }

  /* 5. Jefferson Ave and 35th St in Newport News: green street signs, TONEDEFF tagged on the wall, the shipyard crane over the skyline */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#t5)"/>' + crane(60, 128, 0.62, "#d6d9de", true) +
      '<rect x="0" y="124" width="400" height="100" fill="#3c4a5a"/>' + brick(0, 124, 400, 100, "#3c4a5a", "#33404e") +
      tag("TONEDEFF", 22, 190, 46, RED, -6) + tag("QN5", 40, 216, 18, YEL, -3) + tag("EXTENDED FAMM", 110, 216, 16, BLU, -3) +
      '<g class="sp"><circle cx="268" cy="168" r="3" fill="' + RED + '"/></g><g class="sp sp2"><circle cx="274" cy="162" r="2" fill="' + RED + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#bdb6a8"/>' +
      '<rect x="336" y="94" width="6" height="130" fill="#2f2f2f"/>' + sign(278, 96, 118, "Jefferson Ave") + sign(278, 122, 118, "35th St") +
      '<rect x="8" y="104" width="4" height="120" fill="#222"/><circle class="flk" cx="10" cy="102" r="7" fill="#ffe9a8"/>',
      sky("t5", "#e8a26a", "#f6dcb0"));
  }

  window.SCENES = { station: station, arch: arch, bridge: bridge, carousel: carousel, corner: corner };
})();
