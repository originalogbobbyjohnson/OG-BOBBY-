/* Open Mike Eagle scenes (Los Angeles) */
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
  const BRED = "#e3131b", RED = "#e8483a", YEL = "#f5d547", SKYB = "#6fc3df";
  const spin = '<style>@keyframes wh{from{transform:rotate(0)}to{transform:rotate(360deg)}}.wh{transform-box:fill-box;transform-origin:50% 50%;animation:wh 14s linear infinite}@keyframes sway{0%,100%{transform:translateX(-4px)}50%{transform:translateX(4px)}}.sw{animation:sway 1.6s ease-in-out infinite}</style>';
  const bulbs = (x, y, w, n) => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="bl' + (i % 4 ? " bl" + (i % 4 + 1) : "") + '" cx="' + (x + i * w / (n - 1)) + '" cy="' + y + '" r="2.6" fill="#fff3b0"/>'; return s; };

  /* 1. Metro B Line pulling into Vermont/Sunset (underground, under Sunset Blvd) */
  function station() {
    let tiles = ""; for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v150" stroke="#3e3a44" stroke-width="1"/>';
    return svg('<rect width="400" height="260" fill="#2e2a34"/>' + tiles + '<rect x="0" y="62" width="400" height="6" fill="' + BRED + '" opacity=".8"/>' +
      msign(84, 14, 232, "Vermont / Sunset", "B", BRED) +
      mtrain(88, BRED) +
      '<rect x="0" y="154" width="400" height="8" fill="#eab308"/><rect x="0" y="162" width="400" height="36" fill="#8a8c90"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#22202a"/>' +
      tag("OME", 40, 244, 48, RED, -5) + tag("ART RAP", 200, 238, 26, YEL, -6));
  }

  /* 2. A late-show night on Sunset Blvd: comedy club marquee, bulbs chasing */
  function lateshow() {
    return svg('<rect width="400" height="260" fill="url(#s2)"/>' + stars(12) +
      '<rect x="30" y="70" width="340" height="150" fill="#3a2a2e"/>' +
      '<rect x="60" y="30" width="280" height="60" rx="4" fill="#15121a" stroke="#555" stroke-width="2"/>' + bulbs(70, 36, 260, 22) + bulbs(70, 84, 260, 22) +
      '<text class="flk" x="200" y="70" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" letter-spacing="4" fill="' + RED + '">DARK COMEDY</text>' +
      '<rect x="70" y="104" width="260" height="80" fill="#1c1418"/><rect x="70" y="160" width="260" height="24" fill="#5a2a1e"/>' +
      '<g class="sw"><rect x="196" y="120" width="4" height="40" fill="#888"/><rect x="192" y="110" width="12" height="14" rx="6" fill="#333"/></g>' +
      '<path d="M70 104l40 40v40H70zM330 104l-40 40v40h40z" fill="#7a1c22"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#55575c"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="232" width="40" height="14" rx="4" fill="' + SKYB + '"/><circle cx="8" cy="246" r="4" fill="#111"/><circle cx="32" cy="246" r="4" fill="#111"/></g>',
      sky("s2", "#0d0c1e", "#4a2a4a"));
  }

  /* 3. The Grand Olympic Auditorium on Olympic Blvd, LA's old wrestling palace: ring under the lights */
  function olympic() {
    return svg('<rect width="400" height="260" fill="#120f16"/>' +
      '<path d="M60 0l40 120M200 0v120M340 0l-40 120" stroke="#fff6c2" stroke-width="16" opacity=".08"/>' +
      '<rect x="20" y="20" width="360" height="26" fill="#2a2228"/><text x="200" y="39" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="6" fill="#d8c8a0">OLYMPIC AUDITORIUM</text>' +
      '<path d="M70 150l40 -40h180l40 40z" fill="#e9e4d8"/><rect x="70" y="150" width="260" height="30" fill="#2c3a6a"/>' +
      '<path d="M110 110v-30M290 110v-30M70 150v-30M330 150v-30" stroke="#ccc" stroke-width="4"/>' +
      '<path d="M70 124l40 -32h180l40 32M70 136l40 -32h180l40 32" stroke="' + RED + '" stroke-width="2" fill="none"/>' +
      '<g class="bob"><rect x="168" y="96" width="14" height="30" rx="6" fill="' + YEL + '"/><circle cx="175" cy="90" r="7" fill="#2a1c12"/></g>' +
      '<g class="bob" style="animation-delay:-.6s"><rect x="218" y="96" width="14" height="30" rx="6" fill="' + SKYB + '"/><circle cx="225" cy="90" r="7" fill="#2a1c12"/></g>' +
      crowd(10, 18, 214, ["#3b3f4a", "#5a3a4a", "#2f4a5a", "#4a4a2f"]) +
      '<rect x="0" y="244" width="400" height="16" fill="#0a080c"/>');
  }

  /* 4. Santa Monica Pier at dusk: the Ferris wheel turning over the water */
  function pier() {
    let spokes = ""; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; spokes += '<path d="M260 90L' + (260 + 64 * Math.cos(a)).toFixed(1) + ' ' + (90 + 64 * Math.sin(a)).toFixed(1) + '" stroke="#f3e6c8" stroke-width="1.5"/><rect x="' + (254 + 64 * Math.cos(a)).toFixed(1) + '" y="' + (84 + 64 * Math.sin(a)).toFixed(1) + '" width="12" height="10" rx="2" fill="' + [RED, YEL, SKYB][i % 3] + '"/>'; }
    return svg(spin + '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<circle cx="80" cy="150" r="26" fill="#ffcf7a" opacity=".9"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2f5f8a"/><path d="M0 180h400M0 200h400M0 222h400" stroke="#6fa8d0" stroke-width="2" opacity=".5" stroke-dasharray="30 20"/>' +
      '<path d="M220 160l40 -70 40 70" stroke="#d8d0bc" stroke-width="5" fill="none"/>' +
      '<g class="wh"><circle cx="260" cy="90" r="64" fill="none" stroke="#f3e6c8" stroke-width="3"/>' + spokes + '</g><circle cx="260" cy="90" r="5" fill="#d8d0bc"/>' +
      '<rect x="120" y="160" width="280" height="10" fill="#6b4a32"/>' + (function () { let s = ""; for (let x = 130; x < 400; x += 30) s += '<rect x="' + x + '" y="170" width="6" height="50" fill="#4a3424"/>'; return s; })() +
      '<path d="M330 160v-50l20 -20 20 20v50z" fill="#3a6a5a"/>',
      sky("s4", "#3a3a7a", "#f39a6b"));
  }

  /* 5. The corner: Sunset Blvd and Vermont Ave, OME tag, Griffith Observatory up on the hill */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<path d="M0 130q80 -70 170 -66t230 40v40H0z" fill="#3a3f36"/>' +
      '<rect x="130" y="54" width="110" height="18" fill="#efece4"/><path d="M164 54a21 21 0 0 1 42 0z" fill="#7e9a8c"/><path d="M130 54a11 11 0 0 1 22 0z" fill="#7e9a8c"/><path d="M218 54a11 11 0 0 1 22 0z" fill="#7e9a8c"/>' +
      '<circle class="bl" cx="185" cy="40" r="3" fill="#fff6c2"/><rect x="140" y="60" width="8" height="8" fill="#ffd27a" class="flk"/><rect x="222" y="60" width="8" height="8" fill="#ffd27a" class="flk flk2"/>' +
      palm(40, 140, 84) + palm(296, 140, 70) +
      brick(0, 140, 400, 84, "#6a3a3a", "#542c2c") +
      tag("OME", 30, 206, 56, RED, -5) + tag("HELLFYRE CLUB", 150, 212, 22, YEL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + SKYB + '"/></g>' +
      '<rect x="346" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(278, 44, 118, "Sunset Blvd") + sign(290, 70, 106, "Vermont Ave") +
      '<circle class="bl" cx="349" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#141838", "#b85a6a"));
  }

  window.SCENES = { station: station, lateshow: lateshow, olympic: olympic, pier: pier, corner: corner };
})();
