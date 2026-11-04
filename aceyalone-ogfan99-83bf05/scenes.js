/* Aceyalone game: Leimert Park, South Central LA. K Line, Good Life, Project Blowed plaza, Watts Towers, the corner. 400 x 260 SVGs. */
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
  const palm = (x, y, h) => '<g class="bob"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3b2c22" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 70, -70].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + PALM + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const rain = n => { let s = '<style>@keyframes rn{from{transform:translate(0,-40px)}to{transform:translate(-20px,280px)}}.rn{animation:rn 1.1s linear infinite}</style>'; for (let i = 0; i < n; i++) s += '<path class="rn" style="animation-delay:-' + ((i * 37) % 110) / 100 + 's" d="M' + ((i * 53) % 420) + ' ' + ((i * 29) % 60) + 'l-4 12" stroke="#bcd7ee" stroke-width="1.4" opacity=".7"/>'; return s; };

  const PALM = "#2f5a3a", GOLD = "#e8b04a", MINT = "#7ac6a0", RUST = "#d0573a", KLINE = "#e56db1";

  /* 1. Metro K Line pulling into Leimert Park station, underground, tiled wall */
  function station() {
    let win = ""; for (let x = 26; x < 280; x += 40) win += '<rect x="' + x + '" y="98" width="26" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let tiles = ""; for (let x = 0; x < 400; x += 20) for (let y = 0; y < 80; y += 10) tiles += '<rect x="' + (x + (y % 20 ? 10 : 0)) + '" y="' + y + '" width="19" height="9" fill="#d8cfbe"/>';
    return svg(
      '<rect width="400" height="260" fill="#b9ae98"/>' + tiles + '<rect x="0" y="78" width="400" height="6" fill="' + KLINE + '"/>' +
      '<rect x="40" y="14" width="250" height="40" rx="4" fill="#1d1f24"/><rect x="40" y="14" width="250" height="4" fill="' + KLINE + '"/>' +
      '<text x="54" y="42" ' + font + ' font-size="17" fill="#fff">Leimert Park</text>' + bullet(268, 34, "K", KLINE) +
      '<rect x="0" y="84" width="400" height="66" fill="#1a1a1e"/>' +
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="60" rx="14" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' +
        '<rect x="10" y="128" width="300" height="8" fill="' + KLINE + '"/>' + win +
        '<circle cx="300" cy="140" r="4" fill="#fff6c2"/>' + bullet(282, 110, "K", KLINE) +
      '</g>' +
      '<rect x="0" y="150" width="400" height="8" fill="#eab308"/><rect x="0" y="158" width="400" height="36" fill="#8a8c90"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2a2c32"/>' +
      '<circle class="bl" cx="330" cy="30" r="5" fill="#fff6c2"/><circle class="bl bl2" cx="360" cy="30" r="5" fill="#fff6c2"/>' +
      tag("ACEYALONE", 24, 244, 36, GOLD, -5) + tag("ACE ONE", 262, 238, 24, MINT, -6),
      '');
  }

  /* 2. The Good Life Cafe open mic on Crenshaw: chalkboard, the house rule, the mic waiting */
  function goodlife() {
    let line = ""; for (let i = 0; i < 5; i++) line += '<g class="bob" style="animation-delay:-' + i * 0.25 + 's"><rect x="' + (262 + i * 24) + '" y="188" width="12" height="34" rx="5" fill="' + ["#3b3f4a", "#5a3a4a", "#2f4a5a"][i % 3] + '"/><circle cx="' + (268 + i * 24) + '" cy="182" r="7" fill="#2a2a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<rect x="20" y="70" width="360" height="154" fill="#e9dcc0"/><rect x="20" y="70" width="360" height="8" fill="#c9b892"/>' +
      '<rect x="60" y="34" width="200" height="36" rx="4" fill="#2d6b3c" stroke="#e8b04a" stroke-width="2"/>' +
      '<text x="160" y="59" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="3" fill="#f7f3ea">GOOD LIFE</text>' +
      '<rect x="40" y="96" width="160" height="96" fill="#2a2a24" stroke="#7a5d3a" stroke-width="4"/>' +
      '<text x="120" y="122" text-anchor="middle" ' + font + ' font-size="13" fill="#f7f3ea">OPEN MIC</text>' +
      '<text x="120" y="142" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">THURSDAY NIGHT</text>' +
      '<text class="flk" x="120" y="172" text-anchor="middle" ' + font + ' font-size="12" fill="' + MINT + '">PLEASE PRONOUNCE</text>' +
      '<rect x="214" y="110" width="30" height="114" fill="#5a3a2a"/><rect x="218" y="114" width="22" height="106" fill="#8a5a3a"/>' +
      line +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="234" width="40" height="14" rx="4" fill="' + RUST + '"/><circle cx="8" cy="248" r="4" fill="#111"/><circle cx="32" cy="248" r="4" fill="#111"/></g>',
      sky("s2", "#3a7fc8", "#f3c79a"));
  }

  /* 3. Leimert Park plaza on a Thursday: the fountain, palms, a drum circle pounding */
  function blowed() {
    let drums = ""; for (let i = 0; i < 4; i++) drums += '<g class="th" style="animation-delay:-' + i * 0.12 + 's"><rect x="' + (120 + i * 46) + '" y="196" width="26" height="30" rx="3" fill="#8a5a3a"/><ellipse cx="' + (133 + i * 46) + '" cy="196" rx="13" ry="4" fill="#e9dcc0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<rect x="230" y="70" width="150" height="110" fill="#c9a77a"/><rect x="230" y="70" width="150" height="10" fill="#a8865a"/>' +
      '<rect x="250" y="96" width="110" height="26" rx="3" fill="#1d1f24"/><text x="305" y="114" text-anchor="middle" ' + font + ' font-size="11" textLength="96" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">PROJECT BLOWED</text>' +
      '<rect x="260" y="134" width="40" height="46" fill="#3a2a24"/><rect x="314" y="134" width="40" height="30" fill="#2a3a4a"/>' +
      '<rect x="40" y="150" width="140" height="12" rx="4" fill="#c7c0b0"/><rect x="100" y="120" width="20" height="30" fill="#c7c0b0"/>' +
      '<style>@keyframes spl{0%{transform:translateY(0);opacity:1}100%{transform:translateY(22px);opacity:0}}.spl{animation:spl 1s linear infinite}</style>' +
      '<path class="spl" d="M104 118q-10 0 -18 12M116 118q10 0 18 12" stroke="#9fd6f0" stroke-width="3" fill="none"/>' +
      palm(30, 180, 110) + palm(212, 180, 120) +
      '<rect x="0" y="180" width="400" height="80" fill="#9a8f7c"/><rect x="0" y="180" width="400" height="4" fill="#b7ab95"/>' +
      drums +
      tag("FREESTYLE FELLOWSHIP", 20, 252, 18, MINT, -3),
      sky("s3", "#f1b36a", "#f7e2b8"));
  }

  /* 4. Watts Towers: lacy spires with mosaic bands, sun flickering through */
  function watts() {
    const spire = (x, h, w) => {
      let s = '<path d="M' + (x - w) + ' 220L' + x + ' ' + (220 - h) + 'L' + (x + w) + ' 220" stroke="#8a8478" stroke-width="4" fill="none"/>';
      for (let i = 1; i < 9; i++) { const y = 220 - h * i / 9, ww = w * (1 - i / 9); s += '<ellipse cx="' + x + '" cy="' + y + '" rx="' + (ww + 3) + '" ry="3" fill="none" stroke="' + ["#d0573a", "#3a8ac8", "#e8b04a", "#7ac6a0"][i % 4] + '" stroke-width="2.5"/>'; }
      for (let i = 0; i < 6; i++) { const y = 220 - h * i / 6; s += '<path d="M' + x + ' ' + (220 - h) + 'L' + (x + (i % 2 ? w : -w) * (1 - i / 6)) + ' ' + y + '" stroke="#a49e92" stroke-width="1.5"/>'; }
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<g class="bob"><circle cx="330" cy="54" r="22" fill="#ffd36b" opacity=".9"/></g>' +
      spire(170, 190, 30) + spire(240, 160, 26) + spire(110, 120, 22) + spire(300, 80, 16) +
      '<rect x="40" y="214" width="320" height="10" fill="#8a8478"/>' +
      '<path d="M40 214l20 -12h280l20 12" fill="#b4ab98"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#6a7a58"/>' +
      palm(24, 224, 90) + palm(378, 224, 76),
      sky("s4", "#5fa8e0", "#e8d6b0"));
  }

  /* 5. The corner: Leimert Blvd and 43rd Pl, ACEYALONE tag, the observatory on the hill behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(8) +
      '<path d="M0 120q80 -40 160 -36t130 10t110 20v30h-400z" fill="#2a3a3a"/>' +
      '<rect x="120" y="70" width="110" height="26" fill="#f2efe6"/><rect x="160" y="58" width="30" height="12" fill="#f2efe6"/>' +
      '<path d="M156 58a19 19 0 0 1 38 0z" fill="#4f6f68"/><path d="M118 72a10 10 0 0 1 20 0z" fill="#4f6f68"/><path d="M212 72a10 10 0 0 1 20 0z" fill="#4f6f68"/>' +
      '<circle class="bl" cx="175" cy="40" r="3" fill="#fff6c2"/>' +
      palm(30, 140, 90) + palm(372, 140, 96) +
      brick(0, 140, 400, 84, "#8a6a8a", "#6c4f6c") +
      tag("ACEYALONE", 18, 200, 42, GOLD, -5) + tag("ACE ONE", 200, 214, 24, MINT, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RUST + '"/></g>' +
      '<rect x="336" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(272, 44, 124, "Leimert Blvd") + sign(294, 70, 90, "43rd Pl") +
      '<circle class="bl" cx="339" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#141838", "#a85a6a"));
  }

  window.SCENES = { station: station, goodlife: goodlife, blowed: blowed, watts: watts, corner: corner };
})();
