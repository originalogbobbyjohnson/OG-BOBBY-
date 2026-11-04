/* Busdriver scenes (Leimert Park, LA) */
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
  const mbul = (x, y, L, c, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + r * 0.45) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.3) + '" fill="#fff">' + L + '</text>'; };
  const mtrain = (y, c) => { let w = ""; for (let x = 34; x < 300; x += 38) w += '<rect x="' + x + '" y="' + (y + 12) + '" width="26" height="20" rx="3" fill="#dff1ff" opacity=".92"/>';
    return '<g class="anim-train"><rect x="10" y="' + y + '" width="310" height="58" rx="12" fill="#e4e7ea" stroke="#7a8088" stroke-width="2"/>' +
      '<rect x="10" y="' + (y + 38) + '" width="310" height="7" fill="' + c + '"/>' + w +
      '<rect x="300" y="' + (y + 8) + '" width="18" height="26" rx="5" fill="#2a2f36"/><circle cx="310" cy="' + (y + 48) + '" r="4" fill="#fff6c2"/>' +
      '<rect x="40" y="' + (y + 58) + '" width="40" height="8" rx="3" fill="#333"/><rect x="250" y="' + (y + 58) + '" width="40" height="8" rx="3" fill="#333"/></g>'; };
  const msign = (x, y, w, name, L, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="40" rx="4" fill="#15171b"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="' + c + '"/>' +
    '<text x="' + (x + 12) + '" y="' + (y + 27) + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + name + '</text>' + mbul(x + w - 20, y + 21, L, c, 11);
  const cloud = (x, y, s, c) => '<g fill="' + (c || "#f2f4f8") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (26 * s) + '" ry="' + (11 * s) + '"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (y - 6 * s) + '" rx="' + (14 * s) + '" ry="' + (10 * s) + '"/><ellipse cx="' + (x + 10 * s) + '" cy="' + (y - 9 * s) + '" rx="' + (16 * s) + '" ry="' + (12 * s) + '"/></g>';
  const crowd = (x0, n, y, cols) => { let s = ""; for (let i = 0; i < n; i++) s += '<g class="bob" style="animation-delay:-' + (i * 0.17).toFixed(2) + 's"><rect x="' + (x0 + i * 22) + '" y="' + y + '" width="14" height="30" rx="6" fill="' + cols[i % cols.length] + '"/><circle cx="' + (x0 + 7 + i * 22) + '" cy="' + (y - 6) + '" r="7" fill="#1e1a18"/></g>'; return s; };
  const PALM = "#2f5a3a";
  const PINK = "#e96bb0", YEL = "#ffd23f", RED = "#e2443b", TEAL = "#43c59e";
  const mic = (x, y) => '<g class="bob"><rect x="' + (x - 2) + '" y="' + y + '" width="4" height="60" fill="#888"/><rect x="' + (x - 6) + '" y="' + (y - 16) + '" width="12" height="18" rx="6" fill="#333" stroke="#aaa" stroke-width="1.5"/></g>';
  const water = '<style>@keyframes sp{0%{transform:scaleY(.7);opacity:.6}50%{transform:scaleY(1);opacity:1}100%{transform:scaleY(.7);opacity:.6}}.sp{transform-box:fill-box;transform-origin:50% 100%;animation:sp 1.3s ease-in-out infinite}</style>';
  const hsign = (x, y) => { let s = ""; "HOLLYWOOD".split("").forEach((c, i) => s += '<text x="' + (x + i * 15) + '" y="' + y + '" font-family="Anton, Impact, sans-serif" font-size="16" fill="#f4f4f0">' + c + '</text>'); return s; };

  /* 1. Metro K Line into Leimert Park (underground station under Crenshaw Blvd) */
  function station() {
    let tiles = ""; for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v150" stroke="#3a4048" stroke-width="1"/>';
    return svg('<rect width="400" height="260" fill="#2b3038"/>' + tiles + '<rect x="0" y="0" width="400" height="10" fill="#1a1d22"/>' +
      '<rect x="0" y="62" width="400" height="6" fill="' + PINK + '" opacity=".8"/>' +
      msign(90, 14, 220, "Leimert Park", "K", PINK) +
      mtrain(88, PINK) +
      '<rect x="0" y="154" width="400" height="8" fill="#eab308"/><rect x="0" y="162" width="400" height="36" fill="#8a8c90"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#22252b"/>' +
      tag("BUSDRIVER", 30, 244, 38, YEL, -5) + tag("AVANTCORE", 250, 236, 20, TEAL, -6));
  }

  /* 2. Project Blowed open mic night on Leimert Blvd: the mic up front, the crowd moving */
  function blowed() {
    return svg('<rect width="400" height="260" fill="url(#s2)"/>' + stars(10) +
      '<rect x="20" y="50" width="360" height="170" fill="#4b3a5c"/><rect x="20" y="50" width="360" height="12" fill="#35283f"/>' +
      '<rect x="60" y="22" width="280" height="34" rx="5" fill="#120e16" stroke="#333" stroke-width="2"/>' +
      '<text class="flk" x="200" y="46" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="4" fill="' + YEL + '">PROJECT BLOWED</text>' +
      '<rect x="44" y="80" width="312" height="110" fill="#1a1222"/><rect x="44" y="160" width="312" height="30" fill="#2a1f33"/>' +
      '<g class="th"><circle cx="200" cy="112" r="34" fill="' + RED + '" opacity=".25"/></g>' + mic(200, 112) +
      '<text x="200" y="98" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff" letter-spacing="2">OPEN MIC</text>' +
      crowd(56, 14, 196, ["#3b3f4a", "#5a3a4a", "#2f4a5a", "#4a4a2f"]) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="4" fill="#8a8c90"/>',
      sky("s2", "#0b0f2a", "#3a2a5a"));
  }

  /* 3. Leimert Park: the Vision Theatre's deco tower over the plaza fountain */
  function vision() {
    return svg(water + '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<rect x="210" y="70" width="170" height="110" fill="#efe6cf"/><rect x="210" y="70" width="170" height="10" fill="#d9caa6"/>' +
      '<rect x="270" y="14" width="40" height="166" fill="#e8dcbc"/><rect x="280" y="22" width="20" height="150" fill="#3f8f8a"/>' +
      '<path d="M270 14l20 -12 20 12z" fill="#d9caa6"/>' +
      '<g class="flk"><rect x="284" y="30" width="12" height="120" fill="none" stroke="#ffe7a6" stroke-width="2"/></g>' +
      '<rect x="226" y="100" width="40" height="80" fill="#2f5f63"/><rect x="316" y="100" width="48" height="80" fill="#2f5f63"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#c9b99a"/>' +
      palm(40, 190, 110) + palm(150, 190, 90) +
      '<ellipse cx="100" cy="222" rx="70" ry="16" fill="#8a7e6a"/><ellipse cx="100" cy="218" rx="60" ry="11" fill="#5fa8d0"/>' +
      '<g class="sp"><path d="M100 216q-4 -30 0 -50q4 20 0 50" fill="#bfe6ff"/></g><g class="sp" style="animation-delay:-.4s"><path d="M80 216q-2 -16 4 -26M120 216q2 -16 -4 -26" stroke="#bfe6ff" stroke-width="3" fill="none"/></g>',
      sky("s3", "#6fb3e6", "#f3d7a2"));
  }

  /* 4. Crenshaw Blvd: the old Good Life Cafe storefront, an orange Metro bus rolling by */
  function goodlife() {
    let w = ""; for (let x = 18; x < 150; x += 26) w += '<rect x="' + x + '" y="196" width="18" height="14" rx="2" fill="#dff1ff"/>';
    return svg('<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="40" y="60" width="320" height="130" fill="#e7d3b0"/><rect x="40" y="60" width="320" height="16" fill="#c2a477"/>' +
      '<rect x="70" y="84" width="260" height="30" rx="4" fill="#5a2f1e"/>' +
      '<text x="200" y="105" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="3" fill="' + YEL + '">PLEASE PASS THE MIC</text>' +
      '<rect x="80" y="124" width="100" height="66" fill="#2c3a44"/><rect x="220" y="124" width="100" height="66" fill="#2c3a44"/>' +
      '<rect x="190" y="130" width="22" height="60" fill="#5a2f1e"/>' + mic(130, 150) +
      '<rect x="0" y="190" width="400" height="70" fill="#55575c"/><path d="M0 240h400" stroke="#e8e2c4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="car" style="animation-duration:10s"><rect x="0" y="184" width="170" height="46" rx="6" fill="#f37321"/><rect x="0" y="216" width="170" height="8" fill="#fff"/>' + w +
      '<circle cx="30" cy="232" r="9" fill="#111"/><circle cx="140" cy="232" r="9" fill="#111"/><rect x="150" y="190" width="16" height="10" fill="#111"/></g>',
      sky("s4", "#4b8fd0", "#f4c98a"));
  }

  /* 5. The corner: Leimert Blvd and 43rd Pl, BUSDRIVER tag, the Hollywood sign on the hills behind */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' + stars(8) +
      '<path d="M0 120q60 -60 130 -40t140 -20t130 30v50H0z" fill="#3e4a3a"/>' + hsign(84, 92) +
      palm(30, 140, 80) + palm(310, 140, 70) +
      brick(0, 140, 400, 84, "#8a5a3c", "#6e452c") +
      tag("BUSDRIVER", 20, 202, 44, YEL, -5) + tag("PROJECT BLOWED", 120, 216, 20, TEAL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="346" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(270, 44, 126, "Leimert Blvd") + sign(300, 70, 92, "43rd Pl") +
      '<circle class="bl" cx="349" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#141838", "#c76a5a"));
  }

  window.SCENES = { station: station, blowed: blowed, vision: vision, goodlife: goodlife, corner: corner };
})();
