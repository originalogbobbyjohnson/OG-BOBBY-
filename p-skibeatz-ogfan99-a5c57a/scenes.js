/* Ski Beatz producer game: Greensboro depot, Marcy Houses, Uptown Saturday Night on the Concourse, the 24 Hour Karate School, S Elm St & February One Pl. 400 x 260 SVGs. */
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
  const GOLD = "#f4c430", RED = "#d7263d", SKY = "#7fd1ff", BROWN = "#996633";

  /* 1. The Carolinian pulling into Greensboro's depot (J. Douglas Galyon Depot), brick station behind */
  function depot() {
    let arches = "";
    for (let x = 40; x < 380; x += 50) arches += '<path d="M' + x + ' 104v-30a14 14 0 0 1 28 0v30z" fill="#ffe2a8" opacity=".85"/>';
    let windows = "";
    for (let x = 22; x < 280; x += 40) windows += '<rect x="' + x + '" y="148" width="26" height="14" rx="2" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(12) +
      brick(20, 40, 360, 80, "#9a5238", "#7c3f2a") + '<rect x="16" y="34" width="368" height="8" fill="#e9dcc2"/><rect x="150" y="18" width="100" height="22" fill="#9a5238"/><rect x="146" y="14" width="108" height="6" fill="#e9dcc2"/>' + arches +
      '<rect x="0" y="120" width="400" height="12" fill="#6b6b70"/>' +
      '<rect x="120" y="96" width="160" height="22" rx="3" fill="#0b2a4a" stroke="#fff" stroke-width="1.5"/><text x="200" y="112" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">GREENSBORO</text>' +
      '<g class="anim-train">' +
        '<rect x="6" y="138" width="320" height="56" rx="8" fill="#c7ccd3" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="6" y="172" width="320" height="5" fill="' + RED + '"/><rect x="6" y="178" width="320" height="4" fill="#1d4ea8"/>' + windows +
        '<path d="M326 146q14 6 14 30v10h-14z" fill="#b8bec7"/><circle cx="332" cy="186" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#eab308"/><rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/>' +
      tag("SKI", 40, 246, 32, GOLD, -5) + tag("NORTH CAROLINA", 170, 244, 22, SKY, -6),
      sky("s1", "#141a3a", "#d0703a"));
  }

  /* 2. Marcy Houses: six-story brick buildings, J train on the el over Broadway */
  function marcy() {
    const block = (x, y, w, h) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#9a4a34"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#7c3a29"/>';
      for (let r = y + 10; r < y + h - 8; r += 13) for (let c = x + 6; c < x + w - 8; c += 13) s += '<rect x="' + c + '" y="' + r + '" width="7" height="8" fill="' + (((r + c) / 3) % 3 < 1 ? "#ffd98a" : "#2c2430") + '"/>'; return s; };
    let el = '<rect x="0" y="58" width="400" height="12" fill="#3f6b4a"/>';
    for (let x = 10; x < 400; x += 56) el += '<rect x="' + x + '" y="70" width="8" height="190" fill="#3f6b4a"/>';
    let win = ""; for (let x = 10; x < 240; x += 34) win += '<rect x="' + x + '" y="38" width="22" height="12" rx="2" fill="#dff1ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(14) +
      block(10, 110, 110, 124) + block(140, 96, 120, 138) + block(282, 116, 108, 118) +
      '<g class="car"><rect x="0" y="30" width="250" height="28" rx="5" fill="#c7ccd3" stroke="#6b7280"/>' + win + bullet(232, 44, "J", BROWN) + '</g>' + el +
      '<rect x="0" y="234" width="400" height="26" fill="#2b2b2e"/>' +
      '<g class="carL"><rect x="0" y="240" width="34" height="12" rx="3" fill="' + GOLD + '"/></g>' +
      '<text x="200" y="92" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".85" letter-spacing="3">MARCY, BED-STUY</text>',
      sky("s2", "#101536", "#7a3a5a"));
  }

  /* 3. Uptown Saturday night: Art Deco building on the Grand Concourse, marquee bulbs chasing, a cream 70s Cadillac cruising */
  function uptown() {
    let bulbs = "";
    for (let i = 0; i < 26; i++) bulbs += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + (92 + i * 8.6) + '" cy="124" r="2.4" fill="#ffe7a0"/>';
    let deco = "";
    for (let x = 60; x < 340; x += 28) deco += '<rect x="' + x + '" y="30" width="16" height="84" fill="#e8d9b5"/><rect x="' + (x + 4) + '" y="40" width="8" height="70" fill="' + ((x / 28) % 2 ? "#ffd98a" : "#3b3346") + '"/>';
    const caddy = '<g class="car"><path d="M0 22h96l-8-10H70l-10-10H30L20 12H4z" fill="#f1e3c0" stroke="#8a7a50" stroke-width="1.5"/><rect x="0" y="20" width="96" height="6" fill="#c9a84c"/>' +
      '<rect x="34" y="4" width="22" height="8" fill="#9fc6e0"/><circle cx="20" cy="28" r="7" fill="#111"/><circle cx="76" cy="28" r="7" fill="#111"/><circle cx="20" cy="28" r="3" fill="#ccc"/><circle cx="76" cy="28" r="3" fill="#ccc"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(16) +
      '<rect x="50" y="20" width="300" height="160" fill="#d9c79c"/><path d="M50 20l30-14h240l30 14z" fill="#c4b184"/>' + deco +
      '<rect x="84" y="114" width="232" height="34" rx="3" fill="#5a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="143" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="3" fill="' + GOLD + '">SATURDAY NIGHT</text>' +
      '<rect x="170" y="150" width="60" height="30" fill="#2a1a20"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#2b2b2e"/><path d="M0 222h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g transform="translate(0 196)">' + caddy + '</g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".8" letter-spacing="3">THE GRAND CONCOURSE, UPTOWN</text>',
      sky("s3", "#1a0f30", "#a4426a"));
  }

  /* 4. The 24 Hour Karate School: Tribeca loft studio, belts on the wall, sampler pads, a jet crossing the window */
  function dojo() {
    let eq = "";
    for (let i = 0; i < 5; i++) eq += '<rect class="mt mt' + (i + 1) + '" x="' + (300 + i * 9) + '" y="172" width="6" height="40" fill="' + (i > 2 ? RED : "#5ee06a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2224"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#5a4436"/>' +
      (() => { let b = ""; for (let y = 8; y < 150; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#4a372b" stroke-width="1"/>'; return b; })() +
      '<rect x="20" y="16" width="160" height="104" fill="url(#w4)" stroke="#2a2a2a" stroke-width="5"/><path d="M100 16v104M20 68h160" stroke="#2a2a2a" stroke-width="4"/>' +
      '<g class="carL"><path d="M0 40l34-4 8-10h6l-4 10 14-1 4-5h4l-2 7-2 1 2 1 2 7h-4l-4-5-14-1 4 10h-6l-8-10z" fill="#f2f2f2" transform="scale(.8)"/></g>' +
      '<rect x="206" y="20" width="176" height="36" rx="3" fill="#120c08" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="294" y="44" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" textLength="160" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">24 HOUR KARATE SCHOOL</text>' +
      '<path d="M214 80h56" stroke="#ffffff" stroke-width="7"/><rect x="236" y="74" width="12" height="12" fill="#ffffff" stroke="#000" stroke-width="1"/><path d="M240 86l-8 22M244 86l8 22" stroke="#ffffff" stroke-width="6"/>' +
      '<path d="M274 80h56" stroke="' + RED + '" stroke-width="7"/><rect x="296" y="74" width="12" height="12" fill="' + RED + '" stroke="#000" stroke-width="1"/><path d="M300 86l-8 22M304 86l8 22" stroke="' + RED + '" stroke-width="6"/>' +
      '<path d="M334 80h56" stroke="#e8b400" stroke-width="7"/><rect x="356" y="74" width="12" height="12" fill="#e8b400" stroke="#000" stroke-width="1"/><path d="M360 86l-8 22M364 86l8 22" stroke="#e8b400" stroke-width="6"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#6b4c34"/><rect x="0" y="150" width="400" height="6" fill="#7e5a3e"/>' +
      '<rect x="24" y="166" width="104" height="78" rx="4" fill="#8e9297" stroke="#4a4d52" stroke-width="2"/><rect x="32" y="172" width="54" height="12" fill="#1f3a26"/>' +
      '<text x="36" y="182" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#7cf08a">LOOP 01</text>' + pads(34, 196, RED, GOLD) +
      turntable(150, 170, SKY) +
      '<rect x="288" y="164" width="62" height="54" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq,
      '<linearGradient id="w4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa8e0"/><stop offset="1" stop-color="#cfe9f7"/></linearGradient>');
  }

  /* 5. The corner: S Elm St & February One Pl in downtown Greensboro, SKI BEATZ tag, the Jefferson Standard tower behind */
  function corner() {
    let tw = '<rect x="140" y="30" width="70" height="110" fill="#e6e1d4"/><rect x="150" y="16" width="50" height="16" fill="#ddd7c8"/><rect x="162" y="6" width="26" height="12" fill="#d3ccbb"/><path d="M175 6v-6" stroke="#d3ccbb" stroke-width="2"/>';
    for (let y = 38; y < 136; y += 9) for (let x = 146; x < 206; x += 8) tw += '<rect x="' + x + '" y="' + y + '" width="4" height="5" fill="' + ((x + y) % 4 ? "#4a5466" : "#ffd98a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="30" y="92" width="80" height="48" fill="#2a2440"/><rect x="240" y="80" width="70" height="60" fill="#2a2440"/><rect x="320" y="100" width="70" height="40" fill="#2a2440"/>' + tw +
      '<circle class="bl" cx="175" cy="2" r="2.5" fill="#ff3b3b"/>' +
      brick(0, 140, 400, 84, "#8e4a33", "#6f3826") +
      tag("SKI BEATZ", 22, 202, 40, GOLD, -5) + tag("LUCHINI", 176, 220, 20, SKY, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(278, 44, 104, "S Elm St") + sign(248, 70, 142, "February One Pl") +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#6a3a5a"));
  }

  window.SCENES = { depot: depot, marcy: marcy, uptown: uptown, dojo: dojo, corner: corner };
})();
