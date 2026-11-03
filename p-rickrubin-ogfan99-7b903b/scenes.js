/* Rick Rubin producer scenes */
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
  const RED = "#d7262e", YEL = "#fccc0a", CRM = "#f2efe6";
  const X = '<style>@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.wv{animation:wave 3s ease-in-out infinite}.wv2{animation-delay:-1.5s}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.gl{animation:gull 12s linear infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}</style>';
  const boombox = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M18 0h44" stroke="#9aa0a6" stroke-width="4" fill="none"/><rect x="0" y="6" width="80" height="40" rx="4" fill="#2a2a2e" stroke="#8a8f96" stroke-width="2"/>' +
    '<g class="th"><circle cx="17" cy="28" r="12" fill="#111" stroke="#8a8f96" stroke-width="2"/><circle cx="17" cy="28" r="4" fill="#555"/></g><g class="th"><circle cx="63" cy="28" r="12" fill="#111" stroke="#8a8f96" stroke-width="2"/><circle cx="63" cy="28" r="4" fill="#555"/></g>' +
    '<rect x="32" y="14" width="16" height="10" fill="#cfd6dc"/><rect x="32" y="28" width="16" height="12" fill="#444"/><rect x="34" y="31" width="12" height="6" fill="#111"/></g>';

  /* 1. 8 St-NYU, underground under Broadway: cream tile, the N R W bullets in yellow, the R pulling in */
  function station() {
    let tiles = ""; for (let x = 0; x < 400; x += 16) for (let y = 34; y < 124; y += 10) tiles += '<rect x="' + (x + (y / 10 % 2) * 8) + '" y="' + y + '" width="15" height="9" fill="#efe9d8"/>';
    let mos = ""; for (let x = 0; x < 400; x += 12) mos += '<rect x="' + x + '" y="40" width="10" height="8" fill="' + (x / 12 % 3 ? "#6a2a7a" : "#c9a54a") + '"/>';
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (16 + i * 56) + '" y="140" width="38" height="20" rx="3" fill="#cfe0ee"/>';
    return svg(X +
      '<rect width="400" height="260" fill="#1a1816"/><rect x="0" y="30" width="400" height="98" fill="#ddd5bf"/>' + tiles + mos +
      '<rect x="96" y="66" width="214" height="30" rx="3" fill="#111"/><text x="112" y="87" ' + font + ' font-size="15" fill="#fff">8 St–NYU</text>' +
      bullet(232, 81, "N", YEL, 1) + bullet(258, 81, "R", YEL, 1) + bullet(284, 81, "W", YEL, 1) +
      '<rect x="0" y="128" width="400" height="56" fill="#0d0d0d"/>' +
      '<g class="anim-train"><rect x="0" y="132" width="350" height="50" rx="5" fill="#c3c8ce" stroke="#5c6168" stroke-width="2"/>' + win +
      '<rect x="0" y="166" width="350" height="5" fill="#5c6168"/><rect x="320" y="138" width="24" height="24" rx="2" fill="#2c3036"/>' + bullet(332, 150, "R", YEL, 1) + '<circle cx="342" cy="175" r="3" fill="#fff6c2"/></g>' +
      [24, 140, 270, 390].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="160" fill="#2e2e30"/><rect x="' + (x - 9) + '" y="30" width="18" height="6" fill="#2e2e30"/>').join("") +
      '<rect x="0" y="184" width="400" height="10" fill="#f2d21c"/><rect x="0" y="194" width="400" height="66" fill="#8e8a82"/>' +
      '<text x="200" y="234" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a" letter-spacing="3">BROADWAY  -  GREENWICH VILLAGE</text>',
      "");
  }

  /* 2. Weinstein Hall on University Pl: the NYU dorm where room 712 was the first office of the label he started; one window lit, decks spinning, notes floating out */
  function dorm() {
    let wins = ""; for (let r = 0; r < 8; r++) for (let c = 0; c < 9; c++) { const lit = r === 2 && c === 6; if (!lit) wins += '<rect class="' + ((r * 9 + c) % 7 ? "" : "bl bl" + (1 + c % 4)) + '" x="' + (88 + c * 26) + '" y="' + (40 + r * 18) + '" width="16" height="11" fill="' + ((r * 9 + c) % 7 ? "#2a2730" : "#ffd98a") + '"/>'; }
    return svg(X +
      '<rect width="400" height="260" fill="url(#r2)"/>' + stars(18) +
      '<rect x="78" y="28" width="244" height="180" fill="#8c5a3c"/><rect x="78" y="28" width="244" height="6" fill="#b5b0a4"/>' + wins +
      '<rect x="240" y="72" width="40" height="22" fill="#ffd27a" stroke="' + RED + '" stroke-width="2"/><rect x="244" y="84" width="14" height="8" fill="#222"/><circle class="vn" cx="251" cy="84" r="4" fill="#111" stroke="#666"/><rect x="262" y="84" width="14" height="8" fill="#222"/><circle class="vn" cx="269" cy="84" r="4" fill="#111" stroke="#666"/>' +
      '<text class="nt" x="262" y="66" ' + font + ' font-size="14" fill="' + YEL + '">♪</text><text class="nt nt2" x="284" y="66" ' + font + ' font-size="12" fill="#fff">♫</text><text class="nt nt3" x="244" y="66" ' + font + ' font-size="12" fill="' + RED + '">♪</text>' +
      '<rect x="262" y="96" width="44" height="14" fill="#111"/><text x="284" y="107" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">712</text>' +
      '<rect x="150" y="180" width="100" height="28" fill="#4a3a30"/><rect x="140" y="176" width="120" height="6" fill="#b5b0a4"/><text x="200" y="174" text-anchor="middle" ' + font + ' font-size="9" fill="#f2efe6" letter-spacing="2">WEINSTEIN HALL</text>' +
      '<rect x="160" y="184" width="80" height="24" fill="#ffe7b0" opacity=".8"/>' +
      '<rect x="0" y="208" width="400" height="12" fill="#b8b2a6"/><rect x="0" y="220" width="400" height="40" fill="#3d3d40"/><path d="M0 240h400" stroke="#d8d2c4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<g fill="#2f5a2e"><circle cx="40" cy="170" r="30"/><circle cx="360" cy="168" r="32"/></g><rect x="38" y="190" width="5" height="20" fill="#4a3424"/><rect x="358" y="190" width="5" height="20" fill="#4a3424"/>' +
      '<g class="car"><rect x="0" y="226" width="62" height="16" rx="4" fill="' + YEL + '"/><path d="M12 226l8-9h24l8 9z" fill="' + YEL + '"/><circle cx="14" cy="244" r="5" fill="#111"/><circle cx="48" cy="244" r="5" fill="#111"/></g>',
      sky("r2", "#0c1430", "#3a3460"));
  }

  /* 3. Chung King Studios in Chinatown, the "House of Metal" where the Def Jam-era records were cut: narrow red-trim walkup, the console glowing in the window */
  function chungking() {
    let meters = ""; for (let i = 0; i < 10; i++) meters += '<rect class="mt mt' + (1 + i % 5) + '" x="' + (132 + i * 14) + '" y="108" width="8" height="36" fill="' + (i % 3 ? "#5bd16a" : YEL) + '"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#r3)"/>' +
      brick(0, 20, 96, 200, "#6e3a2c", "#58291e") + brick(304, 30, 96, 190, "#5c4a3e", "#463830") +
      '<rect x="96" y="20" width="208" height="200" fill="#e9e1cf"/><rect x="96" y="20" width="208" height="10" fill="' + RED + '"/>' +
      '<rect x="110" y="44" width="180" height="42" fill="#1a1a1e" stroke="' + RED + '" stroke-width="3"/><text x="200" y="64" text-anchor="middle" ' + font + ' font-size="15" fill="' + YEL + '" class="flk">CHUNG KING</text><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="3">HOUSE OF METAL</text>' +
      '<rect x="118" y="96" width="164" height="76" fill="#0e1014" stroke="#333" stroke-width="3"/>' + meters +
      '<rect x="124" y="148" width="152" height="18" fill="#3a3c42"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (130 + i * 14) + '" y="' + (151 + (i * 5) % 9) + '" width="6" height="5" fill="#ddd"/>').join("") +
      '<rect x="170" y="180" width="60" height="40" fill="' + RED + '"/><rect x="174" y="184" width="52" height="36" fill="#7a1a1a"/><circle cx="218" cy="202" r="2.5" fill="' + YEL + '"/>' +
      '<rect x="0" y="220" width="400" height="12" fill="#a8a296"/><rect x="0" y="232" width="400" height="28" fill="#3a3a3c"/>' +
      '<g class="carL"><rect x="0" y="236" width="70" height="16" rx="3" fill="#222"/><rect x="10" y="230" width="40" height="8" rx="2" fill="#222"/><circle cx="14" cy="254" r="5" fill="#000"/><circle cx="56" cy="254" r="5" fill="#000"/></g>',
      sky("r3", "#1a1a24", "#4a3a3a"));
  }

  /* 4. Lido Beach, Long Island, where he grew up: the boardwalk, the lifeguard chair, a boombox on the sand, waves rolling in, a gull going by */
  function lido() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#r4)"/><circle cx="320" cy="58" r="24" fill="#fff3c0"/>' +
      '<path class="gl" d="M0 50q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="110" width="400" height="40" fill="#2f7fb0"/>' +
      '<g class="wv"><path d="M-20 130q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8f6ff" stroke-width="3" fill="none"/></g>' +
      '<g class="wv wv2"><path d="M-20 144q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f7" stroke-width="3" fill="none"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#e9d6a8"/>' +
      '<rect x="0" y="196" width="400" height="12" fill="#8a6a44"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (10 + i * 52) + '" y="208" width="6" height="52" fill="#6a5034"/>').join("") +
      '<rect x="0" y="190" width="400" height="6" fill="#a4855a"/>' +
      '<g stroke="#f2efe6" stroke-width="4"><path d="M70 186l14-60M110 186l-14-60M76 160h28M80 140h20"/></g><rect x="74" y="118" width="32" height="10" fill="#f2efe6"/><rect x="72" y="104" width="36" height="14" fill="' + RED + '"/>' +
      '<rect x="210" y="166" width="90" height="20" fill="' + RED + '"/><rect x="210" y="172" width="90" height="4" fill="#fff"/>' + boombox(220, 132, 0.8) +
      '<text class="nt" x="250" y="128" ' + font + ' font-size="14" fill="#222">♪</text><text class="nt nt2" x="276" y="126" ' + font + ' font-size="12" fill="#222">♫</text>' +
      '<rect x="320" y="120" width="4" height="70" fill="#555"/><path d="M290 122q32-26 64 0z" fill="' + YEL + '"/>',
      sky("r4", "#7cc4ef", "#d8f0fa"));
  }

  /* 5. University Pl and E 8th St: green street signs, RUBIN tagged on the wall, the Empire State Building lit up uptown */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#r5)"/>' + stars(14) +
      '<g fill="#3a3a4a"><rect x="40" y="70" width="40" height="70"/><rect x="300" y="60" width="50" height="80"/><rect x="250" y="84" width="40" height="56"/></g>' +
      '<g fill="#cfcabc"><rect x="168" y="52" width="44" height="90"/><rect x="176" y="38" width="28" height="16"/><rect x="182" y="26" width="16" height="14"/><rect x="186" y="14" width="8" height="14"/><rect x="189" y="0" width="2" height="16"/></g>' +
      '<g class="flk"><rect x="182" y="28" width="16" height="10" fill="' + RED + '" opacity=".7"/><rect x="176" y="40" width="28" height="12" fill="' + YEL + '" opacity=".55"/></g>' +
      brick(0, 120, 400, 104, "#7a3b2c", "#5e2c20") +
      tag("RUBIN", 30, 196, 54, CRM, -6) + tag("REDUCED", 196, 176, 22, RED, -4) + tag("ROOM 712", 210, 210, 20, YEL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#3a3a3c"/><rect x="0" y="222" width="400" height="4" fill="#bdb6a8"/>' +
      '<rect x="330" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(278, 98, 110, "University Pl") + sign(296, 124, 76, "E 8 St") +
      '<rect x="10" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="12" cy="108" r="7" fill="#ffe9a8"/>',
      sky("r5", "#0a0d1e", "#33304e"));
  }

  window.SCENES = { station: station, dorm: dorm, chungking: chungking, lido: lido, corner: corner };
})();
