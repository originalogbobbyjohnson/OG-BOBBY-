/* The Treacherous Three game (NYC map, Manhattan: Harlem, the B/C at Cathedral Pkwy (110 St) on the Harlem edge of Central Park).
   1. Cathedral Pkwy (110 St), underground on the B/C: cream tile, mosaic band, the black sign with the orange B and blue C, the C sliding in.
   2. Norman Thomas High School, Park Av & E 33 St: the tall concrete school where Moe Dee, Special K and Easy Lee met; '81 show flyer on the wall.
   3. A Harlem schoolyard court, where DJ Easy Lee met Spoonie Gee (the original fourth member) playing ball: chain nets, the ball, a boombox.
   4. The Victoria on 125th St, '84: the movie-house marquee chasing bulbs with Beat Street (T3 did Santa's Rap in it) and the line outside.
   5. Manhattan Av & W 110 St: green street signs, the wall tagged TREACHEROUS 3, Central Park's north end trees and the park wall behind.
   400 x 260 SVGs. No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes t3car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.t3-car{animation:t3car 7s linear infinite}.t3-car2{animation-delay:-3.5s}' +
    '@keyframes t3blink{0%,100%{opacity:.25}50%{opacity:1}}.t3-bl{animation:t3blink 1.4s ease-in-out infinite}.t3-bl2{animation-delay:.47s}.t3-bl3{animation-delay:.94s}' +
    '@keyframes t3flick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.t3-flk{animation:t3flick 2.4s infinite}' +
    '@keyframes t3bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.t3-bob{animation:t3bob .55s ease-in-out infinite}.t3-bob2{animation-delay:.27s}' +
    '@keyframes t3sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.t3-sway{transform-box:fill-box;transform-origin:50% 100%;animation:t3sway 3s ease-in-out infinite}.t3-sway2{animation-delay:-1.5s}' +
    '@keyframes t3wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.t3-wave{animation:t3wave 3s linear infinite}' +
    '@keyframes t3beam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.t3-beam{transform-box:fill-box;transform-origin:50% 0%;animation:t3beam 3.2s ease-in-out infinite}.t3-beam2{animation-delay:-1.6s}' +
    '@keyframes t3note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.t3-note{animation:t3note 2.4s ease-out infinite}.t3-note2{animation-delay:-.8s}.t3-note3{animation-delay:-1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff9f1c", TEAL = "#2ec4b6", SUN = "#ffe66d", CREAM = "#f4ead8", BLUE = "#0039a6", BDF = "#ff6319";

  /* 1. Cathedral Pkwy (110 St) on the B/C, underground */
  function cathedral() {
    let tiles = "";
    for (let y = 30; y < 160; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#ece4d0"/>';
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="40" width="6" height="6" fill="' + (x % 24 ? "#8a5a2b" : "#d9b45a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d8ceb8"/>' + tiles +
      '<rect x="0" y="36" width="400" height="14" fill="#5a3a1e"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2b2b2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="t3-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      /* black station sign */
      '<rect x="30" y="58" width="340" height="32" rx="3" fill="#111"/><rect x="30" y="58" width="340" height="3" fill="#fff"/>' +
      '<text x="44" y="80" ' + font + ' font-size="14" fill="#fff">Cathedral Pkwy (110 St)</text>' +
      bullet(318, 74, "B", BDF) + bullet(344, 74, "C", BLUE) +
      [16, 384].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#3a4a5a"/>').join("") +
      /* the C train sliding in */
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "C", BLUE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + BLUE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5d5a55"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(330, 196, "#1b1b1b") + person(352, 200, "#2a2a2a", "t3-bob") +
      /* boombox on the platform */
      '<g class="t3-bob t3-bob2"><rect x="60" y="206" width="56" height="26" rx="4" fill="#222" stroke="#888" stroke-width="1.5"/><circle cx="74" cy="220" r="8" fill="#444" stroke="#999"/><circle cx="102" cy="220" r="8" fill="#444" stroke="#999"/><rect x="82" y="212" width="12" height="6" fill="' + ORANGE + '"/><path d="M68 206q20-14 40 0" stroke="#888" stroke-width="2" fill="none"/></g>' +
      '<text class="t3-note" x="124" y="214" font-size="16" fill="' + SUN + '">&#9834;</text><text class="t3-note t3-note2" x="44" y="216" font-size="14" fill="' + TEAL + '">&#9835;</text>' +
      txt("HARLEM · CENTRAL PARK WEST", 230, 240, 11, "#f1ead8", 'letter-spacing="3"'));
  }

  /* 2. Norman Thomas High School at Park Av & E 33 St: the tall concrete school, ribbon windows, the '81 show flyer, a cab rolling by */
  function school() {
    let wins = "";
    for (let y = 40; y < 176; y += 14) wins += '<rect x="122" y="' + y + '" width="156" height="7" fill="#33414f"/>';
    let lit = "";
    for (let i = 0; i < 12; i++) lit += '<rect class="t3-bl t3-bl' + (i % 3 + 1) + '" x="' + (128 + (i * 37) % 140) + '" y="' + (41 + (i * 3) % 10 * 14) + '" width="14" height="5" fill="#ffe8a3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#t3s)"/>' +
      /* neighbors */
      '<rect x="0" y="80" width="100" height="120" fill="#6d5a4a"/><rect x="300" y="60" width="100" height="140" fill="#5c5f68"/>' +
      [10, 34, 58, 82].map(x => '<rect x="' + x + '" y="94" width="12" height="90" fill="#4a3c31" opacity=".6"/>').join("") +
      [312, 340, 368].map(x => '<rect x="' + x + '" y="72" width="16" height="118" fill="#474a52" opacity=".6"/>').join("") +
      /* the school tower: pale concrete with ribbon windows */
      '<rect x="112" y="22" width="176" height="178" fill="#d8d2c4"/><rect x="112" y="22" width="176" height="8" fill="#c2bba9"/>' + wins + lit +
      '<rect x="112" y="162" width="176" height="14" fill="#2a3440"/><rect x="112" y="176" width="176" height="24" fill="#bfb7a4"/><rect x="176" y="178" width="48" height="22" fill="#2a3440"/>' +
      txt("NORMAN THOMAS H.S.", 200, 172, 9, "#f4ead8", 'letter-spacing="1.5"') +
      /* the flyer on the wall */
      '<g transform="rotate(-4 66 150)"><rect x="34" y="126" width="64" height="58" fill="#fff3b0" stroke="#333" stroke-width="1"/>' +
        txt("T3 LIVE", 66, 142, 11, "#c0392b") + txt("+ COLD CRUSH", 66, 156, 7.5, "#222") + txt("NORMAN THOMAS", 66, 168, 6.5, "#222") + txt("'81", 66, 180, 9, "#222") + '</g>' +
      /* sidewalk + street */
      '<rect x="0" y="200" width="400" height="12" fill="#9a958c"/><rect x="0" y="212" width="400" height="48" fill="#3f4146"/>' +
      '<path d="M0 236h400" stroke="#e9e3d0" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<g class="t3-car"><rect x="0" y="218" width="54" height="16" rx="4" fill="#f6c90e"/><rect x="10" y="212" width="30" height="8" rx="2" fill="#f6c90e"/><circle cx="12" cy="234" r="4.5" fill="#111"/><circle cx="42" cy="234" r="4.5" fill="#111"/></g>' +
      person(300, 178, "#14202c", "t3-bob") + person(84, 180, "#1d2a36", "t3-bob t3-bob2") +
      '<rect x="326" y="150" width="62" height="34" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/>' + txt("Park Av", 357, 164, 10, "#fff") + txt("E 33 St", 357, 178, 10, "#fff") +
      '<rect x="355" y="184" width="4" height="16" fill="#3d4b3f"/>',
      sky("t3s", "#6ea8d6", "#d9ecf7"));
  }

  /* 3. A Harlem schoolyard court (DJ Easy Lee met Spoonie Gee playing ball): chain nets swinging, the ball bouncing, a boombox on the bench, brick walk-ups behind */
  function court() {
    let brick = "";
    for (let y = 40; y < 150; y += 8) for (let x = (y / 8) % 2 ? 8 : 0; x < 400; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3d2a"/>';
    let wins = "";
    for (let x = 24; x < 400; x += 48) for (let y = 52; y < 130; y += 30) wins += '<rect class="t3-bl t3-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="16" height="18" fill="#ffd98a" opacity=".8"/><path d="M' + x + ' ' + (y + 20) + 'h16" stroke="#3a2a22" stroke-width="2"/>';
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 150l10 -40M' + (x + 10) + ' 150l-10 -40" stroke="#9aa3ab" stroke-width=".8" opacity=".55"/>';
    const hoop = (x, flip) => '<rect x="' + (x - 3) + '" y="96" width="6" height="104" fill="#2f3a44"/><rect x="' + (x - 26) + '" y="78" width="52" height="34" fill="#f4f1e6" stroke="#c0392b" stroke-width="2"/><rect x="' + (x - 9) + '" y="94" width="18" height="12" fill="none" stroke="#c0392b" stroke-width="2"/>' +
      '<rect x="' + (x - 11) + '" y="110" width="22" height="3" fill="' + ORANGE + '"/><g class="t3-sway' + (flip ? " t3-sway2" : "") + '"><path d="M' + (x - 10) + ' 113l4 16M' + (x - 4) + ' 113l2 16M' + (x + 4) + ' 113l-2 16M' + (x + 10) + ' 113l-4 16M' + (x - 8) + ' 121h16" stroke="#c9ced6" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#t3k)"/>' +
      '<rect x="0" y="34" width="400" height="116" fill="#8e4632"/>' + brick + wins +
      '<rect x="0" y="30" width="400" height="6" fill="#4a2418"/>' +
      '<rect x="0" y="108" width="400" height="44" fill="#1d2430" opacity=".25"/>' + fence + '<rect x="0" y="108" width="400" height="3" fill="#7d858e"/>' +
      /* the court */
      '<rect x="0" y="150" width="400" height="110" fill="#3c6e8f"/><rect x="0" y="150" width="400" height="4" fill="#e9e3d0"/>' +
      '<path d="M200 150v110M140 260q60-60 120 0" stroke="#e9e3d0" stroke-width="2.5" fill="none"/><circle cx="200" cy="206" r="22" fill="none" stroke="#e9e3d0" stroke-width="2.5"/>' +
      hoop(48, false) + hoop(352, true) +
      '<g class="t3-bob"><circle cx="230" cy="184" r="9" fill="#e07a2e"/><path d="M221 184h18M230 175v18" stroke="#6b2e0e" stroke-width="1.2"/></g>' +
      person(260, 166, "#121218", "t3-bob t3-bob2") + person(176, 170, "#1b1b24", "t3-bob") +
      /* bench + boombox */
      '<rect x="292" y="214" width="80" height="6" fill="#6b4a2e"/><rect x="298" y="220" width="4" height="14" fill="#4a3220"/><rect x="362" y="220" width="4" height="14" fill="#4a3220"/>' +
      '<rect x="306" y="196" width="46" height="18" rx="3" fill="#222" stroke="#999"/><circle cx="318" cy="205" r="6" fill="#444"/><circle cx="340" cy="205" r="6" fill="#444"/>' +
      '<text class="t3-note" x="356" y="196" font-size="14" fill="' + SUN + '">&#9834;</text><text class="t3-note t3-note3" x="296" y="194" font-size="12" fill="' + TEAL + '">&#9835;</text>' +
      txt("HARLEM SCHOOLYARD", 200, 24, 12, CREAM, 'letter-spacing="4"') + txt("EASY LEE MET SPOONIE GEE ON THE COURT", 200, 250, 9, CREAM, 'letter-spacing="1" stroke="#1d2430" stroke-width="3" paint-order="stroke"'),
      sky("t3k", "#f08a4b", "#ffd08a"));
  }

  /* 4. The Victoria on 125th St, '84: the marquee bulbs chasing, BEAT STREET in the letters, the line outside */
  function marquee() {
    let bulbs = "";
    for (let x = 64; x <= 336; x += 12) { bulbs += '<circle class="t3-bl t3-bl' + ((x / 12) % 3 + 1) + '" cx="' + x + '" cy="86" r="3" fill="' + SUN + '"/>'; bulbs += '<circle class="t3-bl t3-bl' + ((x / 12 + 1) % 3 + 1) + '" cx="' + x + '" cy="142" r="3" fill="' + SUN + '"/>'; }
    let brick = "";
    for (let y = 16; y < 80; y += 8) for (let x = (y / 8) % 2 ? 50 : 42; x < 352; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#8a4a2e"/>';
    const line = [70, 92, 114, 136, 158, 180].map((x, i) => person(x, 186, i % 2 ? "#151518" : "#22222a", i % 2 ? "t3-bob" : "t3-bob t3-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#t3m)"/>' +
      /* facade */
      '<rect x="42" y="10" width="316" height="196" fill="#9c553a"/>' + brick +
      '<rect x="168" y="14" width="64" height="62" fill="#e8d7b0"/>' + txt("VICTORIA", 200, 50, 12, "#7a2e1c", 'letter-spacing="1"') +
      /* marquee */
      '<path d="M50 80h300l-12 68H62z" fill="#1a1020"/><rect x="56" y="80" width="288" height="68" fill="none" stroke="' + ORANGE + '" stroke-width="2"/>' + bulbs +
      '<rect x="74" y="94" width="252" height="40" fill="#fff6dc"/>' +
      txt("BEAT STREET", 200, 113, 18, "#111", 'letter-spacing="2"') + txt("NOW SHOWING · '84", 200, 129, 10, "#c0392b", 'letter-spacing="2"') +
      /* doors + poster cases */
      '<rect x="150" y="158" width="100" height="48" fill="#2a1a12" stroke="' + SUN + '" stroke-width="2"/><path d="M200 158v48" stroke="' + SUN + '" stroke-width="2"/>' +
      '<rect x="270" y="160" width="40" height="40" fill="#14202c" stroke="#d9c38a" stroke-width="2"/>' + txt("SANTA'S RAP", 290, 178, 5.5, SUN) + txt("T3", 290, 192, 11, ORANGE) +
      line +
      '<rect x="0" y="206" width="400" height="10" fill="#8f8a80"/><rect x="0" y="216" width="400" height="44" fill="#3d3f44"/>' +
      '<g class="t3-car t3-car2"><rect x="0" y="226" width="50" height="15" rx="4" fill="#3a6fd8"/><circle cx="12" cy="241" r="4.5" fill="#111"/><circle cx="38" cy="241" r="4.5" fill="#111"/></g>' +
      txt("W 125 ST · HARLEM", 200, 252, 10, "#e8e3d8", 'letter-spacing="3"'),
      sky("t3m", "#120c22", "#3b2a4d"));
  }

  /* 5. Manhattan Av & W 110 St: green signs, the wall tagged TREACHEROUS 3, Central Park's north end behind the stone wall */
  function corner() {
    let trees = "";
    for (let i = 0; i < 9; i++) { const x = 10 + i * 46; trees += '<g class="t3-sway' + (i % 2 ? " t3-sway2" : "") + '"><rect x="' + (x + 14) + '" y="64" width="6" height="40" fill="#3d2b1f"/><circle cx="' + (x + 17) + '" cy="56" r="' + (20 + (i % 3) * 4) + '" fill="' + ["#2f6b3a", "#3c7d45", "#285c33"][i % 3] + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#t3c)"/>' +
      trees +
      /* the park's stone wall */
      '<rect x="0" y="100" width="400" height="20" fill="#9c9585"/>' + [0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => '<path d="M' + x + ' 100v20" stroke="#7e7869" stroke-width="1"/>').join("") +
      txt("CENTRAL PARK NORTH", 160, 96, 8, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* the wall with the tags */
      '<rect x="0" y="120" width="400" height="104" fill="#40424a"/>' +
      (() => { let b = ""; for (let y = 130; y < 224; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#36383f" stroke-width="1"/>'; return b; })() +
      tag("TREACHEROUS 3", 12, 186, 38, ORANGE, -5) + tag("FAST RAP", 196, 216, 20, TEAL, -4) + tag("EASY LEE", 30, 218, 15, SUN, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="t3-car"><rect x="0" y="236" width="46" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="36" cy="249" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="60" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="292" y="64" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Manhattan Av", 344, 80, 12, "#fff") +
      '<rect x="292" y="90" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 110 St", 344, 106, 12, "#fff") +
      '<circle class="t3-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("t3c", "#ff9f6b", "#ffd9a8"));
  }

  window.SCENES = { cathedral: cathedral, school: school, court: court, marquee: marquee, corner: corner };
})();
