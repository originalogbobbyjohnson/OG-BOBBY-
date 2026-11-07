/* schoolboyq scenes (Regions tab: Los Angeles + SoCal; Hoover Street, South Central). CSS classes prefixed sq- (the page's own anim-train is kept).
   1 Metro Local 81 bus stop on S Figueroa St at W 51st St, a block over from Hoover: the orange-red 81 pulling in, palms, the 110 behind.
   2 Crenshaw High School (his school, he played football there): Friday night lights over the field, the blue-and-gold Cougars stands, a ball spiraling.
   3 The golf course, his escape: the green at sunset, flag waving, a ball rolling toward the cup, the hills behind.
   4 Laker game night downtown ("bettin' on the Laker game"): the arena glowing purple and gold, the scoreboard, a jumper falling through.
   5 Hoover St and W 51st St (where he grew up): green signs, SCHOOLBOY Q tagged on the wall, the 110 Harbor Freeway and its traffic behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sqflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sq-flk{animation:sqflick 2.2s infinite}.sq-flk2{animation-delay:.7s}' +
    '@keyframes sqcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.sq-car{animation:sqcar 7s linear infinite}.sq-car2{animation-delay:-3.5s}' +
    '@keyframes sqcarb{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.sq-carb{animation:sqcarb 6s linear infinite}.sq-carb2{animation-delay:-3s}' +
    '@keyframes sqsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sq-palm{transform-box:fill-box;transform-origin:50% 100%;animation:sqsway 3.5s ease-in-out infinite}.sq-palm2{animation-delay:-1.6s}' +
    '@keyframes sqspiral{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(150px,-60px) rotate(540deg)}100%{transform:translate(300px,0) rotate(1080deg)}}.sq-ball{transform-box:fill-box;transform-origin:50% 50%;animation:sqspiral 3s ease-in-out infinite}' +
    '@keyframes sqroll{0%{transform:translateX(0)}80%,100%{transform:translateX(118px)}}.sq-roll{animation:sqroll 3.2s ease-out infinite}' +
    '@keyframes sqflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.sq-flag{transform-box:fill-box;transform-origin:0 50%;animation:sqflag 1.4s ease-in-out infinite}' +
    '@keyframes sqshot{0%{transform:translate(0,0)}55%{transform:translate(40px,-52px)}100%{transform:translate(70px,6px)}}.sq-shot{animation:sqshot 2.4s ease-in infinite}' +
    '@keyframes sqbeam{0%,100%{opacity:.25}50%{opacity:.6}}.sq-beam{animation:sqbeam 3s ease-in-out infinite}.sq-beam2{animation-delay:-1.5s}' +
    '@keyframes sqspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sq-sp{animation:sqspray 1.4s ease-out infinite}.sq-sp2{animation-delay:.45s}' +
    '@keyframes sqhaze{0%,100%{opacity:.35}50%{opacity:.6}}.sq-haze{animation:sqhaze 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="sq-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5a3e24" stroke-width="4" fill="none"/>' +
    '<g fill="#2a5a32"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const BLUE = "#6ec1ff", GOLD = "#f2c94c", RED = "#e8505b", METRO = "#e56b1f", CBLUE = "#1d4fa8";
  // freeway with traffic, used behind the station and the corner
  const freeway = (y, op) => '<g opacity="' + op + '"><rect x="0" y="' + y + '" width="400" height="12" fill="#8d8a84"/><rect x="0" y="' + (y + 12) + '" width="400" height="5" fill="#6d6a64"/>' +
    Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 52) + '" y="' + (y + 17) + '" width="8" height="' + (60 - y > 0 ? 14 : 14) + '" fill="#6d6a64"/>').join("") + '</g>';

  /* 1. Metro Local 81 on S Figueroa St at W 51st St */
  function sqstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="112" width="30" height="22" rx="2" fill="#20303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="300" height="58" rx="8" fill="' + METRO + '" stroke="#8a3a0a" stroke-width="2"/>' + wins +
      '<rect x="40" y="140" width="300" height="6" fill="#f6efe4"/>' +
      '<rect x="306" y="110" width="30" height="26" rx="3" fill="#20303c"/><rect x="292" y="102" width="46" height="6" rx="1" fill="#111"/><text x="315" y="107" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">81 FIGUEROA</text>' +
      '<circle cx="90" cy="160" r="11" fill="#1a1a1a"/><circle cx="90" cy="160" r="5" fill="#aaa"/><circle cx="290" cy="160" r="11" fill="#1a1a1a"/><circle cx="290" cy="160" r="5" fill="#aaa"/>' +
      '<circle class="sq-flk" cx="336" cy="148" r="3" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sqs1)"/>' +
      '<circle cx="80" cy="54" r="24" fill="#ffd88a" opacity=".75"/><rect class="sq-haze" x="0" y="62" width="400" height="30" fill="#f4c08a"/>' +
      freeway(70, .8) + car("sq-car", 0, 62, "#d8d8d8") + car("sq-carb", 0, 62, BLUE) +
      '<g><rect x="250" y="38" width="64" height="24" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="282" y="49" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">110 HARBOR FWY</text><text x="282" y="58" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">SLAUSON AV</text><rect x="280" y="62" width="4" height="8" fill="#555"/></g>' +
      palm(26, 172, 106) + palm(376, 172, 118, "sq-palm2") +
      '<rect x="0" y="168" width="400" height="10" fill="#c9c2b2"/><rect x="0" y="178" width="400" height="82" fill="#4a4846"/>' +
      '<path d="M0 220h40M70 220h40M140 220h40M210 220h40M280 220h40M350 220h40" stroke="#e8d36a" stroke-width="3"/>' +
      bus +
      '<g><rect x="12" y="120" width="5" height="50" fill="#333"/><rect x="2" y="104" width="44" height="18" rx="2" fill="#111"/><rect x="4" y="106" width="16" height="14" rx="2" fill="' + METRO + '"/><text x="12" y="116.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">81</text><text x="33" y="116" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">METRO</text></g>' +
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="#111" opacity=".85"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">S FIGUEROA ST / W 51ST ST</text>',
      sky("sqs1", "#2a3f6e", "#f0a868"));
  }

  /* 2. Crenshaw High School: Friday night lights, the Cougars' blue and gold */
  function sqcrenshaw() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="30" width="4" height="80" fill="#555"/><rect x="' + (x - 16) + '" y="20" width="32" height="14" rx="2" fill="#2a2a2a"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle cx="' + (x - 11 + i * 7) + '" cy="27" r="2.6" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sqs2)"/>' +
      '<path class="sq-beam" d="M60 30L0 170H140z" fill="#fffbe0"/><path class="sq-beam sq-beam2" d="M340 30L260 170H400z" fill="#fffbe0"/>' +
      light(60) + light(340) +
      '<rect x="0" y="96" width="400" height="44" fill="' + CBLUE + '"/>' +
      Array.from({ length: 4 }, (_, r) => '<rect x="0" y="' + (100 + r * 10) + '" width="400" height="3" fill="#0f2f6a"/>').join("") +
      Array.from({ length: 34 }, (_, i) => '<circle cx="' + (8 + i * 12) + '" cy="' + (104 + (i % 3) * 11) + '" r="3" fill="' + (i % 2 ? GOLD : "#f2efe6") + '"/>').join("") +
      '<rect x="140" y="58" width="120" height="34" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="74" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">CRENSHAW</text><text x="200" y="87" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">COUGARS  HOME</text>' +
      '<rect x="0" y="140" width="400" height="120" fill="#3f8a3c"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 140v120" stroke="#e8f2e0" stroke-width="2" opacity=".75"/>').join("") +
      '<path d="M0 140h400" stroke="#fff" stroke-width="3"/>' +
      '<g class="sq-ball"><ellipse cx="50" cy="200" rx="10" ry="6" fill="#7a3d1a" transform="rotate(-25 50 200)"/><path d="M45 198l10 4" stroke="#fff" stroke-width="1.2"/></g>' +
      '<g transform="translate(360 150)"><rect x="-3" y="0" width="6" height="40" fill="' + GOLD + '"/><rect x="-26" y="40" width="52" height="5" fill="' + GOLD + '"/><rect x="-26" y="-6" width="5" height="50" fill="' + GOLD + '"/><rect x="21" y="-6" width="5" height="50" fill="' + GOLD + '"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6ecd2">CRENSHAW HIGH  ·  FRIDAY NIGHT LIGHTS</text>',
      sky("sqs2", "#060a1a", "#1b2650"));
  }

  /* 3. The golf course at sunset */
  function sqgolf() {
    return svg(
      '<rect width="400" height="260" fill="url(#sqs3)"/>' +
      '<circle cx="300" cy="96" r="30" fill="#ffcf7a"/>' +
      '<path d="M0 120Q60 80 130 104Q200 70 270 100Q330 78 400 104V150H0z" fill="#8a6a7a" opacity=".7"/>' +
      '<path d="M0 136Q80 112 160 128Q240 110 320 126Q370 118 400 126V170H0z" fill="#3e6b3a"/>' +
      palm(40, 150, 64) + palm(352, 148, 74, "sq-palm2") +
      '<rect x="0" y="150" width="400" height="110" fill="#4f9a44"/>' +
      '<ellipse cx="250" cy="200" rx="140" ry="40" fill="#6cc25a"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (130 + i * 45) + ' 168q20 30 0 64" stroke="#5bb04a" stroke-width="10" fill="none" opacity=".5"/>').join("") +
      '<ellipse cx="300" cy="204" rx="8" ry="3.5" fill="#1a1a1a"/>' +
      '<rect x="299" y="128" width="2.5" height="76" fill="#f2efe6"/><path class="sq-flag" d="M301.5 130h30l-6 9 6 9h-30z" fill="' + BLUE + '"/>' +
      '<g class="sq-roll"><circle cx="180" cy="203" r="4" fill="#fff" stroke="#bbb" stroke-width=".8"/></g>' +
      '<g transform="translate(70 168)"><path d="M10 0l6 70" stroke="#c8c8c8" stroke-width="2"/><path d="M14 68h12l-2 4H14z" fill="#888"/>' +
      '<path d="M-6 6h30v58h-30z" fill="#203a6a" rx="4"/><rect x="-8" y="2" width="34" height="8" rx="3" fill="#13254a"/><path d="M0 2l2-14M8 2l0-16M16 2l-2-14" stroke="#aaa" stroke-width="2"/><circle cx="2" cy="-12" r="3" fill="#ddd"/><circle cx="8" cy="-16" r="3" fill="#ddd"/><circle cx="14" cy="-12" r="3" fill="#ddd"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6ecd2">ON THE GREEN, AWAY FROM IT ALL</text>',
      sky("sqs3", "#3a2f6e", "#f3a26a"));
  }

  /* 4. Laker game night downtown: the arena glowing purple and gold */
  function sqarena() {
    return svg(
      '<rect width="400" height="260" fill="url(#sqs4)"/>' +
      '<g fill="#1a1530">' + [[10, 30, 30, 120], [44, 50, 26, 100], [300, 20, 34, 130], [338, 46, 28, 104], [370, 60, 30, 90]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '"/>').join("") + '</g>' +
      '<g fill="#ffe7a0" opacity=".6">' + Array.from({ length: 16 }, (_, i) => '<rect x="' + (16 + (i % 4) * 6 + (i > 7 ? 290 : 0)) + '" y="' + (44 + Math.floor((i % 8) / 4) * 16) + '" width="3" height="5"/>').join("") + '</g>' +
      '<path d="M80 150Q200 52 320 150z" fill="#4b2a86"/><path d="M92 150Q200 66 308 150" stroke="' + GOLD + '" stroke-width="4" fill="none"/>' +
      '<rect x="80" y="150" width="240" height="40" fill="#2a1a4a"/>' +
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (88 + i * 21) + '" y="156" width="14" height="28" fill="' + (i % 2 ? "#6a3fb0" : GOLD) + '" opacity=".85" class="sq-flk' + (i % 3 ? "" : " sq-flk2") + '"/>').join("") +
      '<rect x="150" y="96" width="100" height="36" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="175" y="110" text-anchor="middle" ' + font + ' font-size="7" fill="#ccc">HOME</text><text x="225" y="110" text-anchor="middle" ' + font + ' font-size="7" fill="#ccc">AWAY</text>' +
      '<text x="175" y="126" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">104</text><text x="225" y="126" text-anchor="middle" ' + font + ' font-size="13" fill="#e55">101</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2b2b33"/>' +
      '<g transform="translate(300 120)"><rect x="-2" y="20" width="4" height="70" fill="#aaa"/><rect x="-22" y="-6" width="40" height="28" fill="#f2efe6" stroke="#333" stroke-width="1.5"/><rect x="-10" y="4" width="16" height="12" fill="none" stroke="#e55" stroke-width="1.5"/><ellipse cx="-2" cy="24" rx="11" ry="3" fill="none" stroke="#e8743b" stroke-width="2.5"/><path d="M-12 25l3 12h14l3-12" stroke="#ddd" stroke-width="1" fill="none"/></g>' +
      '<g class="sq-shot"><circle cx="228" cy="170" r="7" fill="#e8743b"/><path d="M221 170h14M228 163v14" stroke="#7a3a10" stroke-width="1"/></g>' +
      car("sq-car", 0, 232, "#1a1a1a") + car("sq-car sq-car2", 0, 232, "#6a3fb0") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">LAKER GAME NIGHT · DOWNTOWN L.A.</text>',
      sky("sqs4", "#0d0820", "#3a2160"));
  }

  /* 5. Hoover St and W 51st St: SCHOOLBOY Q tagged, the 110 Harbor Freeway behind */
  function sqcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sqs5)"/>' +
      '<circle cx="70" cy="50" r="20" fill="#ffd27a" opacity=".8"/>' +
      '<rect x="0" y="94" width="400" height="12" fill="#8a8680"/><rect x="0" y="106" width="400" height="6" fill="#6a6660"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (20 + i * 50) + '" y="112" width="8" height="22" fill="#6a6660"/>').join("") +
      car("sq-car", 0, 86, "#d8d8d8") + car("sq-carb", 0, 86, BLUE) + car("sq-car sq-car2", 0, 86, RED) +
      '<g><rect x="168" y="56" width="70" height="26" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="203" y="68" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">110 NORTH</text><text x="203" y="78" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">LOS ANGELES</text><rect x="200" y="82" width="5" height="12" fill="#555"/></g>' +
      palm(150, 134, 90) + palm(258, 134, 84, "sq-palm2") +
      '<rect x="0" y="134" width="400" height="90" fill="#d9cdb4"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#c2b496" stroke-width="1"/>').join("") +
      tag("SCHOOLBOY Q", 18, 200, 38, BLUE, -6) + tag("YAWK YAWK", 36, 156, 18, GOLD, -4) + tag("TDE", 250, 218, 18, "#f2efe6", -3) + tag("GROOVY", 110, 220, 14, RED, -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524d"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 110, "Hoover St") + sign(286, 124, 110, "W 51st St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sq-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("sq-car", 0, 240, "#1a1a1a") +
      '<g class="sq-sp"><circle cx="262" cy="176" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="sq-sp sq-sp2"><circle cx="268" cy="170" r="2" fill="' + BLUE + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">HOOVER ST · W 51ST ST · SOUTH CENTRAL</text>',
      sky("sqs5", "#1f2a4a", "#e0874e"));
  }

  window.SCENES = { sqstation: sqstation, sqcrenshaw: sqcrenshaw, sqgolf: sqgolf, sqarena: sqarena, sqcorner: sqcorner };
})();
