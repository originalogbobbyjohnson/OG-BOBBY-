/* Erick Sermon producer game: Brentwood, Long Island. Brentwood LIRR, Mirror Image Recording in Dix Hills, the LIE, Nassau Coliseum, and Brentwood Rd & Suffolk Av with the Big Duck. */
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
  const GREEN = "#3ddc84", GOLD = "#f5c242", PURP = "#9b6bff", LIRRB = "#00985f";
  const X = '<style>@keyframes reel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:reel 2.4s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sw{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3s ease-in-out infinite}.sw2{animation-delay:-1.5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bb{animation:bob 1.6s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:1}100%{transform:translate(26px,-46px);opacity:0}}.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:1.2s}</style>';

  /* 1. Brentwood LIRR station, Ronkonkoma Branch: high-level platform, canopy, the train sliding in, pine trees behind */
  function station() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (14 + i * 56) + '" y="118" width="38" height="20" rx="3" fill="#dfe8f2"/>';
    let pines = ""; for (let i = 0; i < 14; i++) pines += '<path d="M' + (i * 30) + ' 108l14-' + (40 + i % 3 * 10) + ' 14 ' + (40 + i % 3 * 10) + 'z" fill="' + (i % 2 ? "#2f5a3a" : "#3a6b44") + '"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#e1)"/>' + pines +
      '<g class="anim-train"><rect x="0" y="104" width="350" height="68" rx="6" fill="#c9ccd1" stroke="#6a6e74" stroke-width="2"/>' + win +
      '<rect x="0" y="148" width="350" height="6" fill="#0039a6"/><rect x="0" y="154" width="350" height="3" fill="#7b3fa0"/><rect x="326" y="112" width="18" height="30" rx="2" fill="#2c3036"/><circle cx="340" cy="164" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="172" width="400" height="10" fill="#f2d21c"/><rect x="0" y="182" width="400" height="78" fill="#a9a59c"/>' +
      '<path d="M0 20h400v10H0z" fill="#5a6a5e"/>' + [30, 150, 270, 390].map(x => '<rect x="' + (x - 3) + '" y="30" width="6" height="152" fill="#5a6a5e"/>').join("") +
      '<rect x="110" y="40" width="180" height="30" rx="3" fill="#111"/><text x="166" y="61" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Brentwood</text>' +
      '<rect x="234" y="46" width="48" height="18" rx="9" fill="#0039a6"/><text x="258" y="59" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LIRR</text>' +
      '<rect x="40" y="198" width="70" height="10" rx="2" fill="#6b4a2a"/><rect x="46" y="208" width="4" height="10" fill="#444"/><rect x="100" y="208" width="4" height="10" fill="#444"/>' +
      '<text x="300" y="214" text-anchor="middle" ' + font + ' font-size="9" fill="#333" letter-spacing="2">RONKONKOMA BRANCH</text>',
      sky("e1", "#7fb4e6", "#f4dcae"));
  }

  /* 2. Mirror Image Recording, Dix Hills: the low suburban studio where Whateva Man was cut, lawn, the board lit through the window */
  function mirror() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#e2)"/>' +
      [[30, 120, 34], [80, 112, 28], [340, 118, 36], [384, 124, 26]].map(([x, y, r]) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#2f5a3a"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#4f8a3e"/>' +
      '<rect x="80" y="86" width="240" height="90" fill="#d9d2c2" stroke="#9e9686" stroke-width="2"/><path d="M70 88h260l-20-22H90z" fill="#5a4a3e"/>' +
      '<rect x="110" y="106" width="110" height="50" fill="#141820" stroke="#9e9686" stroke-width="2"/>' +
      (() => { let f = ""; for (let i = 0; i < 9; i++) f += '<rect class="mt mt' + (i % 5 + 1) + '" x="' + (116 + i * 11) + '" y="136" width="6" height="14" fill="' + (i % 3 ? GREEN : GOLD) + '"/>'; return f; })() +
      '<g class="rl"><circle cx="134" cy="120" r="8" fill="#555" stroke="#999"/><path d="M134 112v16M126 120h16" stroke="#222" stroke-width="2"/></g>' +
      '<g class="rl"><circle cx="196" cy="120" r="8" fill="#555" stroke="#999"/><path d="M196 112v16M188 120h16" stroke="#222" stroke-width="2"/></g>' +
      '<rect x="244" y="116" width="40" height="60" fill="#5a3e2a"/><circle cx="276" cy="148" r="2" fill="' + GOLD + '"/>' +
      '<rect x="100" y="190" width="200" height="22" rx="2" fill="#1a1a1a"/><text x="200" y="205" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="1.5">MIRROR IMAGE · DIX HILLS</text>' +
      '<rect x="196" y="176" width="8" height="14" fill="#555"/><path d="M200 176v60" stroke="#c9c2b0" stroke-width="10" opacity=".5"/>' +
      '<g class="nt"><text x="300" y="80" font-size="18" fill="' + GREEN + '">&#9835;</text></g><g class="nt nt2"><text x="70" y="80" font-size="16" fill="' + GOLD + '">&#9834;</text></g>',
      sky("e2", "#22305a", "#d0806a"));
  }

  /* 3. The Long Island Expressway: green overhead signs pointing to Brentwood at the Sagtikos, traffic heading east */
  function lie() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#e3)"/>' +
      (() => { let t = ""; for (let i = 0; i < 16; i++) t += '<circle cx="' + (i * 27) + '" cy="' + (140 - i % 3 * 6) + '" r="' + (20 + i % 4 * 4) + '" fill="' + (i % 2 ? "#2f5a3a" : "#3a6b44") + '"/>'; return t; })() +
      '<path d="M0 260L170 150h60L400 260z" fill="#505259"/><path d="M200 150v110" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="10 12"/>' +
      '<path d="M120 260L186 150M280 260L214 150" stroke="#f2d21c" stroke-width="2"/>' +
      '<g class="bb"><rect x="150" y="190" width="40" height="22" rx="4" fill="' + PURP + '"/><rect x="154" y="194" width="32" height="8" fill="#cfd8ff"/><circle cx="156" cy="210" r="2" fill="#ff4040"/><circle cx="184" cy="210" r="2" fill="#ff4040"/></g>' +
      '<g class="bb" style="animation-delay:-.8s"><rect x="222" y="170" width="28" height="16" rx="3" fill="' + GREEN + '"/><rect x="225" y="173" width="22" height="6" fill="#cfd8ff"/></g>' +
      '<rect x="30" y="38" width="6" height="120" fill="#7a7c80"/><rect x="364" y="38" width="6" height="120" fill="#7a7c80"/><rect x="30" y="38" width="340" height="6" fill="#7a7c80"/>' +
      '<rect x="46" y="46" width="146" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<rect x="56" y="54" width="38" height="16" rx="2" fill="#fff"/><text x="75" y="66" text-anchor="middle" ' + font + ' font-size="10" fill="#0f6b3a">EXITS</text>' +
      '<text x="119" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Brentwood</text><text x="119" y="102" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Bay Shore</text>' +
      '<rect x="206" y="46" width="150" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M222 54h26v12c0 8-7 12-13 14-6-2-13-6-13-14z" fill="#1d4f9a" stroke="#fff" stroke-width="1.5"/><text x="235" y="71" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">495</text>' +
      '<text x="300" y="70" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">EAST</text><text x="281" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Riverhead</text>',
      sky("e3", "#3a76c0", "#f0d0a0"));
  }

  /* 4. Nassau Coliseum, Uniondale: the round arena with its ribbed white crown, searchlights sweeping, the crowd lined up */
  function coliseum() {
    let ribs = ""; for (let i = 0; i < 24; i++) ribs += '<rect x="' + (52 + i * 12.5) + '" y="104" width="5" height="72" fill="#cfcac0"/>';
    let crowd = ""; for (let i = 0; i < 30; i++) crowd += '<circle cx="' + (12 + i * 13) + '" cy="' + (214 + (i % 3) * 3) + '" r="5" fill="' + ["#1a1a22", "#2a2a36", "#3a2a3a"][i % 3] + '"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#e4)"/>' + stars(14) +
      '<g class="sw"><path d="M80 176L40 0h30z" fill="#fff" opacity=".12"/></g><g class="sw sw2"><path d="M320 176L330 0h30z" fill="#fff" opacity=".12"/></g>' +
      '<ellipse cx="200" cy="176" rx="170" ry="26" fill="#3a3c44"/><rect x="40" y="100" width="320" height="76" fill="#2a2c34"/>' + ribs +
      '<ellipse cx="200" cy="100" rx="160" ry="20" fill="#e8e4da" stroke="#bcb6a8" stroke-width="2"/>' +
      '<rect x="120" y="134" width="160" height="22" rx="2" fill="#111"/><text x="200" y="149" text-anchor="middle" ' + font + ' font-size="10" fill="' + GREEN + '" letter-spacing="2">TONIGHT · DEF SQUAD</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4c52"/>' + crowd +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="3">NASSAU COLISEUM · UNIONDALE</text>',
      sky("e4", "#0b0c22", "#3a2b52"));
  }

  /* 5. Brentwood Rd and Suffolk Av, Brentwood: green signs, the tagged wall, the Big Duck of Flanders far off on the East End */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#e5)"/>' + stars(12) +
      '<g transform="translate(70 66)"><ellipse cx="30" cy="34" rx="34" ry="20" fill="#f4f2ea"/><circle cx="58" cy="10" r="13" fill="#f4f2ea"/><path d="M68 8l18 4-18 6z" fill="#f2a01a"/><circle cx="62" cy="6" r="3" fill="#c83a2a"/><rect x="-6" y="50" width="76" height="6" fill="#6a6658"/><path d="M-6 30q-8-12 6-16" fill="#f4f2ea"/></g>' +
      '<rect x="0" y="122" width="400" height="104" fill="#55524a"/>' + (() => { let b = ""; for (let y = 126; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#47443c" stroke-width="1.5"/>'; return b; })() +
      tag("E DOUBLE", 22, 192, 44, GREEN, -5) + tag("GREEN EYED BANDIT", 140, 216, 18, GOLD, -4) + tag("SQUAD", 40, 152, 22, PURP, -8) +
      '<rect x="0" y="226" width="400" height="34" fill="#3c3e44"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="340" y="40" width="5" height="190" fill="#3d4b3f"/>' +
      '<rect x="262" y="44" width="134" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="329" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Brentwood Rd</text>' +
      '<rect x="272" y="70" width="120" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="332" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Suffolk Av</text>' +
      '<circle class="bl" cx="343" cy="36" r="5" fill="#fff6c2"/>' +
      '<g class="car"><rect x="0" y="232" width="58" height="16" rx="4" fill="' + PURP + '"/><path d="M10 232l8-9h22l8 9z" fill="' + PURP + '"/><circle cx="14" cy="250" r="5" fill="#111"/><circle cx="46" cy="250" r="5" fill="#111"/></g>',
      sky("e5", "#101634", "#4a3a5a"));
  }

  window.SCENES = { station: station, mirror: mirror, lie: lie, coliseum: coliseum, corner: corner };
})();
