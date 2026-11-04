/* Murs game: Mid-City LA. Expo/Crenshaw E Line, Melrose Ave, Paid Dues, Chavez Ravine, the corner. 400 x 260 SVGs. */
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

  const PALM = "#2f5a3a", RED = "#e8433a", BLUE = "#2a6fdb", GOLD = "#f2c14e", ELINE = "#fdb913", KLINE = "#e56db1";

  /* 1. Metro E Line pulling into Expo/Crenshaw, K Line transfer, palms and a sunset */
  function station() {
    let win = ""; for (let x = 26; x < 280; x += 40) win += '<rect x="' + x + '" y="98" width="26" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(8) +
      palm(352, 150, 92) + palm(384, 150, 70) +
      '<rect x="14" y="12" width="276" height="42" rx="4" fill="#1d1f24"/><rect x="14" y="12" width="276" height="4" fill="' + ELINE + '"/>' +
      '<text x="26" y="41" ' + font + ' font-size="17" fill="#fff">Expo / Crenshaw</text>' + bullet(238, 33, "E", ELINE) + bullet(266, 33, "K", KLINE) +
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="60" rx="14" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' +
        '<rect x="10" y="128" width="300" height="8" fill="' + ELINE + '"/>' + win +
        '<path d="M150 88l18 -20M190 88l-18 -20" stroke="#333" stroke-width="2"/><rect x="0" y="66" width="400" height="2" fill="#333"/>' +
        '<circle cx="300" cy="140" r="4" fill="#fff6c2"/>' + bullet(282, 110, "E", ELINE) +
      '</g>' +
      '<rect x="0" y="150" width="400" height="8" fill="#eab308"/><rect x="0" y="158" width="400" height="36" fill="#9a9a96"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2a2c32"/>' +
      tag("MURS", 34, 242, 44, RED, -5) + tag("3:16", 200, 236, 30, GOLD, -6) + tag("LIVING LEGENDS", 268, 250, 15, BLUE, -4),
      sky("s1", "#16204a", "#e0784a"));
  }

  /* 2. Melrose Ave: shop fronts, murals, a sneaker window and a skater rolling by */
  function melrose() {
    const shop = (x, w, c, aw) => '<rect x="' + x + '" y="92" width="' + w + '" height="132" fill="' + c + '"/><rect x="' + (x + 8) + '" y="140" width="' + (w - 16) + '" height="60" fill="#1b2230"/>' +
      '<path d="M' + x + ' 128h' + w + 'l-8 12h-' + (w - 16) + 'z" fill="' + aw + '"/>';
    let kicks = ""; [RED, BLUE, "#f7f3ea", GOLD].forEach((c, i) => kicks += '<path d="M' + (40 + i * 22) + ' 186h16l2 -6h-8l-4 -5h-6z" fill="' + c + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      shop(20, 120, "#e9e4d8", RED) + shop(146, 110, "#f2a3c0", BLUE) + shop(262, 120, "#7ac6c8", GOLD) +
      kicks +
      '<g class="flk"><rect x="166" y="150" width="70" height="40" fill="#2a1a3a"/><text x="201" y="176" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="#ff8ad1">VINYL</text></g>' +
      '<path d="M282 100q20 -14 40 0t40 0" stroke="' + RED + '" stroke-width="5" fill="none"/><circle cx="300" cy="112" r="7" fill="' + GOLD + '"/><circle cx="340" cy="112" r="7" fill="' + BLUE + '"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="120" y="54" width="160" height="26" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="73" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Melrose Ave</text>' +
      '<g class="car"><rect x="0" y="236" width="18" height="4" rx="2" fill="#c8a165"/><circle cx="4" cy="242" r="2.5" fill="#111"/><circle cx="14" cy="242" r="2.5" fill="#111"/><rect x="6" y="214" width="6" height="20" rx="3" fill="' + BLUE + '"/><circle cx="9" cy="209" r="5" fill="#2a2a2a"/></g>' +
      palm(10, 224, 120),
      sky("s2", "#3a7fc8", "#f3c79a"));
  }

  /* 3. Paid Dues festival: big stage, lights blinking, the crowd bouncing */
  function paiddues() {
    let crowd = ""; for (let i = 0; i < 16; i++) crowd += '<g class="bob" style="animation-delay:-' + (i % 4) * 0.3 + 's"><circle cx="' + (12 + i * 25) + '" cy="' + (214 + (i % 3) * 5) + '" r="10" fill="#1c1c22"/><rect x="' + (2 + i * 25) + '" y="' + (222 + (i % 3) * 5) + '" width="20" height="40" rx="8" fill="#1c1c22"/></g>';
    let lights = ""; for (let i = 0; i < 6; i++) lights += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + (80 + i * 48) + '" cy="44" r="6" fill="' + [RED, GOLD, BLUE][i % 3] + '"/><path class="bl bl' + (i % 4 + 1) + '" d="M' + (80 + i * 48) + ' 50l-26 110h52z" fill="' + [RED, GOLD, BLUE][i % 3] + '" opacity=".18"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(14) +
      '<rect x="40" y="34" width="320" height="10" fill="#3a3a40"/><rect x="40" y="34" width="8" height="150" fill="#3a3a40"/><rect x="352" y="34" width="8" height="150" fill="#3a3a40"/>' +
      '<rect x="48" y="44" width="304" height="140" fill="#14141a"/>' + lights +
      '<rect x="110" y="64" width="180" height="34" rx="4" fill="' + RED + '"/><text x="200" y="89" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" letter-spacing="4" fill="#fff">PAID DUES</text>' +
      '<rect x="40" y="184" width="320" height="16" fill="#2a2a30"/>' +
      '<rect x="190" y="130" width="4" height="54" fill="#888"/><circle cx="192" cy="128" r="5" fill="#bbb"/>' +
      '<g class="th"><rect x="64" y="140" width="34" height="44" fill="#222"/><circle cx="81" cy="162" r="11" fill="#444"/><rect x="302" y="140" width="34" height="44" fill="#222"/><circle cx="319" cy="162" r="11" fill="#444"/></g>' +
      crowd,
      sky("s3", "#0c0a22", "#4a2050"));
  }

  /* 4. Chavez Ravine ballpark on game night: wavy pavilion roofs, light towers, a ball flying out */
  function ravine() {
    let towers = ""; [60, 340].forEach(x => towers += '<rect x="' + (x - 2) + '" y="40" width="4" height="100" fill="#cfd6de"/><rect x="' + (x - 18) + '" y="28" width="36" height="14" fill="#e8eef4"/><rect class="bl" x="' + (x - 16) + '" y="30" width="32" height="10" fill="#fff8d0"/>');
    let roof = ""; for (let i = 0; i < 8; i++) roof += '<path d="M' + (90 + i * 28) + ' 118l14 -12l14 12" stroke="#f7f3ea" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(10) +
      '<path d="M0 132q60 -40 120 -10t140 -8t140 6v40h-400z" fill="#2f4a3a"/>' + towers +
      '<path d="M40 150q160 -60 320 0v40h-320z" fill="#e9e4d8"/><path d="M40 150q160 -60 320 0" stroke="' + BLUE + '" stroke-width="6" fill="none"/>' + roof +
      '<path d="M60 160q140 -40 280 0" stroke="#c7c0b0" stroke-width="2" fill="none"/><path d="M70 172q130 -34 260 0" stroke="#c7c0b0" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2f7a3a"/><path d="M200 196l60 30-60 30-60-30z" fill="#b5835a"/><path d="M200 204l44 22-44 22-44-22z" fill="#2f7a3a"/>' +
      '<style>@keyframes hr{0%{transform:translate(0,0)}100%{transform:translate(150px,-150px)}}.hr{animation:hr 2.4s ease-out infinite}</style>' +
      '<circle class="hr" cx="200" cy="230" r="4" fill="#fff"/>' +
      palm(18, 190, 70) + palm(384, 190, 84),
      sky("s4", "#0e1838", "#3a4a8a"));
  }

  /* 5. The corner: Crenshaw Blvd and Washington Blvd, MURS tag, downtown skyline and its crowned tower behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(8) +
      '<rect x="60" y="80" width="34" height="70" fill="#3a4a63"/><rect x="100" y="60" width="30" height="90" fill="#46587a"/>' +
      '<rect x="146" y="22" width="40" height="128" rx="14" fill="#5a6c8e"/><path d="M146 30h40M146 44h40M146 58h40" stroke="#7d8fb2" stroke-width="2"/><rect x="154" y="14" width="24" height="10" rx="3" fill="#8fa3c4"/><circle class="bl" cx="166" cy="12" r="3" fill="' + RED + '"/>' +
      '<rect x="196" y="50" width="34" height="100" fill="#3a4a63"/><rect x="236" y="72" width="40" height="78" fill="#46587a"/><rect x="282" y="90" width="30" height="60" fill="#3a4a63"/>' +
      palm(30, 140, 90) + palm(372, 140, 100) +
      brick(0, 140, 400, 84, "#a5714c", "#875a3a") +
      tag("MURS", 26, 204, 56, RED, -5) + tag("3:16", 200, 210, 32, GOLD, -4) + tag("SCIENTIST", 196, 178, 18, BLUE, -6) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + BLUE + '"/></g>' +
      '<rect x="336" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(262, 44, 136, "Crenshaw Blvd") + sign(266, 70, 128, "Washington Blvd") +
      '<circle class="bl" cx="339" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#141838", "#c8603e"));
  }

  window.SCENES = { station: station, melrose: melrose, paiddues: paiddues, ravine: ravine, corner: corner };
})();
