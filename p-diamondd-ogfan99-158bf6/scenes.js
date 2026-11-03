/* Diamond D producer scenes */
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
  const ICE = "#7fd8ff", GLD = "#f5c242", RED2 = "#ee352e", G5 = "#00933c";
  const X = '<style>@keyframes trainx{0%{transform:translateX(-420px)}100%{transform:translateX(440px)}}.tx{animation:trainx 7s linear infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:1}100%{transform:translate(26px,-46px);opacity:0}}.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:1.2s}' +
    '@keyframes wave{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.8);opacity:0}}.wv{transform-box:fill-box;transform-origin:50% 50%;animation:wave 1.6s ease-out infinite}.wv2{animation-delay:.8s}' +
    '@keyframes spark{0%,100%{opacity:.2}50%{opacity:1}}.sp{animation:spark 1.8s ease-in-out infinite}.sp2{animation-delay:.6s}.sp3{animation-delay:1.2s}</style>';
  const gem = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-10 -4l4-6h12l4 6-10 14z" fill="' + c + '" stroke="#fff" stroke-width="1"/><path d="M-10 -4h20M-6 -10l6 6 6-6M0 -4v14" stroke="#fff" stroke-width=".8" fill="none" opacity=".8"/></g>';

  /* 1. The 2 pulling into 3 Av-149 St, underground under the Hub: cream tile, red mosaic band, steel columns, the 2 and 5 bullets */
  function station() {
    let tiles = ""; for (let x = 0; x < 400; x += 16) for (let y = 34; y < 120; y += 10) tiles += '<rect x="' + (x + (y / 10 % 2) * 8) + '" y="' + y + '" width="15" height="9" fill="#efe6cf"/>';
    let mos = ""; for (let x = 0; x < 400; x += 12) mos += '<rect x="' + x + '" y="40" width="10" height="10" fill="' + (x / 12 % 2 ? "#a8322b" : "#d8b36a") + '"/>';
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (16 + i * 58) + '" y="138" width="40" height="22" rx="3" fill="#cfe0ee"/>';
    return svg(X +
      '<rect width="400" height="260" fill="#1d1a16"/><rect x="0" y="30" width="400" height="96" fill="#d9ceb2"/>' + tiles + mos +
      '<rect x="120" y="66" width="164" height="30" rx="3" fill="#111"/><text x="174" y="87" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">3 Av-149 St</text>' + bullet(250, 81, "2", RED2) + bullet(274, 81, "5", G5) +
      '<rect x="0" y="126" width="400" height="56" fill="#0d0d0d"/>' +
      '<g class="anim-train"><rect x="0" y="130" width="360" height="52" rx="5" fill="#bfc4ca" stroke="#5c6168" stroke-width="2"/>' + win +
      '<rect x="0" y="166" width="360" height="5" fill="#5c6168"/><rect x="330" y="136" width="24" height="26" rx="2" fill="#2c3036"/>' + bullet(342, 149, "2", RED2) + '<circle cx="352" cy="174" r="3" fill="#fff6c2"/></g>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="160" fill="#2f5f8f"/><rect x="' + (x - 9) + '" y="30" width="18" height="6" fill="#2f5f8f"/>').join("") +
      '<rect x="0" y="182" width="400" height="10" fill="#f2d21c"/><rect x="0" y="192" width="400" height="68" fill="#8e8a82"/>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a" letter-spacing="3">THE HUB  -  SOUTH BRONX</text>',
      "");
  }

  /* 2. The Bronx River Houses park jam: tall red-brick towers, the Zulu Nation DJ (Jazzy Jay, Diamond's mentor) on two decks, speaker stacks thumping */
  function bronxriver() {
    let towers = ""; [[20, 46, 60], [110, 30, 70], [230, 40, 64], [320, 52, 70]].forEach(([x, y, w]) => { towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="#8a3b2a"/>';
      for (let r = y + 10; r < 160; r += 14) for (let c = x + 6; c < x + w - 8; c += 12) towers += '<rect class="' + ((r + c) % 3 ? "" : "bl bl" + (1 + (c % 4))) + '" x="' + c + '" y="' + r + '" width="6" height="7" fill="' + ((r + c) % 3 ? "#3a2018" : "#ffd58a") + '"/>'; });
    return svg(X +
      '<rect width="400" height="260" fill="url(#d2)"/>' + stars(16) + towers +
      '<rect x="0" y="168" width="400" height="92" fill="#3e5a34"/><path d="M0 200h400" stroke="#6b6157" stroke-width="22"/>' +
      '<rect x="140" y="176" width="120" height="12" fill="#5a3a22"/><rect x="146" y="188" width="6" height="34" fill="#3a2614"/><rect x="248" y="188" width="6" height="34" fill="#3a2614"/>' +
      '<g transform="translate(150 150) scale(.45)">' + turntable(0, 0, GLD) + '</g><g transform="translate(206 150) scale(.45)">' + turntable(0, 0, ICE) + '</g>' +
      [40, 330].map(x => '<rect x="' + x + '" y="140" width="34" height="80" fill="#1b1b1b" stroke="#444"/><circle class="th" cx="' + (x + 17) + '" cy="162" r="11" fill="#333" stroke="#777"/><circle class="th" cx="' + (x + 17) + '" cy="196" r="13" fill="#333" stroke="#777"/>').join("") +
      '<rect x="120" y="96" width="160" height="22" rx="2" fill="#151515" stroke="' + GLD + '"/><text x="200" y="112" text-anchor="middle" ' + font + ' font-size="12" fill="' + GLD + '" letter-spacing="2">BRONX RIVER PARK JAM</text>' +
      '<text class="nt" x="120" y="150" font-size="16" fill="' + ICE + '">&#9835;</text><text class="nt nt2" x="270" y="146" font-size="16" fill="' + GLD + '">&#9834;</text>',
      sky("d2", "#1a1440", "#c4573a"));
  }

  /* 3. Booga Basement, East Orange NJ: the house with the basement studio where The Score was cut, basement windows glowing, the bass rattling the porch */
  function booga() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#d3)"/>' + stars(22) + '<circle cx="330" cy="40" r="16" fill="#f3eccd"/>' +
      '<path d="M90 96l110-50 110 50z" fill="#4a3a33"/><rect x="104" y="96" width="192" height="104" fill="#c9b79a"/>' +
      [118, 172, 226].map(x => '<rect x="' + x + '" y="110" width="30" height="34" fill="#2a2a38" stroke="#fff" stroke-width="2"/>').join("") +
      '<rect x="186" y="156" width="28" height="44" fill="#5a2f22"/><rect x="96" y="150" width="208" height="8" fill="#8a7a66"/>' + [100, 160, 240, 298].map(x => '<rect x="' + x + '" y="158" width="5" height="42" fill="#efe8da"/>').join("") +
      '<rect x="80" y="200" width="240" height="22" fill="#6e6a64"/>' +
      [112, 252].map(x => '<rect x="' + x + '" y="204" width="36" height="14" fill="#ffb347" stroke="#3a2a1a" stroke-width="2"/>').join("") +
      '<g transform="translate(116 206)"><rect class="mt" x="4" y="2" width="3" height="10" fill="#c0392b"/><rect class="mt mt2" x="10" y="2" width="3" height="10" fill="#c0392b"/><rect class="mt mt3" x="16" y="2" width="3" height="10" fill="#c0392b"/><rect class="mt mt4" x="22" y="2" width="3" height="10" fill="#c0392b"/></g>' +
      '<g transform="translate(256 206)"><circle class="vn" cx="14" cy="6" r="5" fill="none" stroke="#3a2a1a" stroke-width="2"/></g>' +
      '<circle class="wv" cx="200" cy="212" r="20" fill="none" stroke="#ffb347" stroke-width="2"/><circle class="wv wv2" cx="200" cy="212" r="20" fill="none" stroke="#ffb347" stroke-width="2"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#2c2c2c"/><path d="M0 240h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="40" y="120" width="5" height="102" fill="#222"/><circle class="flk" cx="42" cy="118" r="8" fill="#ffe9a8"/>' +
      '<text x="350" y="214" text-anchor="middle" ' + font + ' font-size="9" fill="#f3eccd" letter-spacing="2">EAST ORANGE NJ</text>',
      sky("d3", "#0e1430", "#3b2d5a"));
  }

  /* 4. Last Car on the 2 Train: the 2 rolling over White Plains Rd on the el at night, the last car's red tail lights, the avenue below */
  function lastcar() {
    let lat = ""; for (let x = 0; x < 400; x += 20) lat += '<path d="M' + x + ' 128l10 18 10-18" stroke="#3c4a3c" stroke-width="2" fill="none"/>';
    let win = ""; for (let i = 0; i < 12; i++) win += '<rect x="' + (8 + i * 32) + '" y="96" width="22" height="14" rx="2" fill="#ffe9a8"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#d4)"/>' + stars(26) + '<circle cx="60" cy="36" r="14" fill="#f3eccd"/>' +
      [[200, 30, 50], [270, 52, 40], [330, 20, 60]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#1b1f2e"/>').join("") +
      '<g class="tx"><rect x="0" y="88" width="390" height="38" rx="4" fill="#bfc4ca" stroke="#5c6168" stroke-width="2"/>' + win +
      '<rect x="0" y="116" width="390" height="4" fill="#5c6168"/><circle class="bl" cx="6" cy="112" r="4" fill="#ff2a2a"/><circle class="bl" cx="6" cy="100" r="3" fill="#ff2a2a"/>' + bullet(372, 106, "2", RED2) + '</g>' +
      '<rect x="0" y="126" width="400" height="6" fill="#4a5a4a"/>' + lat + '<rect x="0" y="146" width="400" height="5" fill="#4a5a4a"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="150" width="10" height="72" fill="#4a5a4a"/>').join("") +
      '<rect x="0" y="222" width="400" height="38" fill="#262626"/><path d="M0 240h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="carL"><rect x="0" y="226" width="56" height="14" rx="4" fill="#d24d3a"/><circle cx="12" cy="242" r="5" fill="#111"/><circle cx="44" cy="242" r="5" fill="#111"/><circle cx="2" cy="232" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="146" y="176" width="108" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="190" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">White Plains Rd</text>',
      sky("d4", "#060a1c", "#232a4a"));
  }

  /* 5. The corner: E 166 St & Tinton Av on the north side of the Forest Houses, DIAMOND D tag, the Bronx County Courthouse up on the Concourse behind */
  function corner() {
    let fr = ""; for (let x = 112; x < 288; x += 12) fr += '<rect x="' + x + '" y="44" width="8" height="10" fill="#cfc4a8"/>';
    let win = ""; for (let r = 62; r < 118; r += 14) for (let c = 104; c < 296; c += 14) win += '<rect x="' + c + '" y="' + r + '" width="6" height="9" fill="#5b5446"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#d5)"/>' +
      '<rect x="160" y="14" width="80" height="30" fill="#e6dcc2"/><rect x="96" y="40" width="208" height="90" fill="#e6dcc2"/>' + fr + win +
      brick(0, 120, 400, 104, "#7a3a2c", "#5a281e") +
      '<rect x="20" y="132" width="250" height="70" fill="#3a2a2a" opacity=".35"/>' +
      tag("DIAMOND D", 34, 186, 40, ICE, -5) + gem(232, 150, 1.4, ICE) + '<g class="sp">' + gem(256, 176, .8, GLD) + '</g><g class="sp sp2">' + gem(40, 146, .7, "#fff") + '</g>' +
      tag("D.I.T.C.", 160, 214, 18, GLD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#9a958c"/>' +
      '<rect x="318" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 70, "E 166 St") + sign(300, 124, 64, "Tinton Av") +
      '<rect x="370" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="372" cy="108" r="7" fill="#ffe9a8"/>',
      sky("d5", "#7fb0d8", "#f2d8b0"));
  }

  window.SCENES = { station: station, bronxriver: bronxriver, booga: booga, lastcar: lastcar, corner: corner };
})();
