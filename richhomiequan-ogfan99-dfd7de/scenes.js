/* richhomiequan scenes (Regions tab: Atlanta; Gresham Park / East Atlanta side of DeKalb - "I grew up in East Atlanta", grandma "out Gresham"). CSS classes and ids prefixed rq- (the page's own anim-train is kept).
   1 MARTA Route 34 (Gresham Road) pulling up at Gresham Rd SE @ Flat Shoals Rd SE ("Herschel Walker, used to ride that MARTA, yeah, that thirty-four" - 34).
   2 McNair High School baseball diamond (Ronald E. McNair HS, Bouldercrest Rd - he was the varsity center fielder and "Mr. Baseball"): red + silver MUSTANGS, a fly ball arcing out to center.
   3 Truist Park, the Braves' ballpark (lifelong Braves fan; threw a first pitch there in 2022): the brick-and-steel grandstand, light towers, a pennant flapping.
   4 The pantry studio at his first coach's house, where he wrote and taught himself to engineer: shelves of cans, a mic with a pop filter, a laptop, meters jumping.
   5 Gresham Rd and Clifton Church Rd in Gresham Park: green signs, RICH HOMIE QUAN tagged with T.I.G. and GOIN IN, the park's ballfield lights glowing behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rqbus{0%{transform:translateX(440px)}45%,100%{transform:translateX(0)}}.rq-bus{animation:rqbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes rqfly{0%{transform:translate(0,0)}50%{transform:translate(110px,-90px)}100%{transform:translate(220px,-40px)}}.rq-fly{animation:rqfly 3.2s ease-out infinite}' +
    '@keyframes rqflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.rq-flag{transform-box:fill-box;transform-origin:0% 50%;animation:rqflag 1.4s ease-in-out infinite}' +
    '@keyframes rqglow{0%,100%{opacity:.45}50%{opacity:1}}.rq-glow{animation:rqglow 1.8s ease-in-out infinite}.rq-g2{animation-delay:-.9s}' +
    '@keyframes rqmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.rq-m{transform-box:fill-box;transform-origin:50% 100%;animation:rqmeter .7s ease-in-out infinite}.rq-m2{animation-delay:-.2s}.rq-m3{animation-delay:-.45s}.rq-m4{animation-delay:-.3s}' +
    '@keyframes rqcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.rq-car{animation:rqcar 5.5s linear infinite}.rq-car2{animation-duration:7.5s;animation-delay:-3s}' +
    '@keyframes rqdrip{0%{transform:scaleY(.2)}60%,100%{transform:scaleY(1)}}.rq-drip{transform-box:fill-box;transform-origin:50% 0%;animation:rqdrip 2.4s ease-in infinite}.rq-d2{animation-delay:-.9s}.rq-d3{animation-delay:-1.6s}' +
    '@keyframes rqtw{0%,100%{opacity:.2}50%{opacity:1}}.rq-tw{animation:rqtw 1.8s ease-in-out infinite}.rq-tw2{animation-delay:-.6s}.rq-tw3{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const GOLD = "#e8b92e", RED = "#d6303a", SKY = "#7ec8ff", BUS = "#1f4e79", ORANGE = "#f7941d";
  const trees = (y, xs) => xs.map((x, i) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + (30 + (i % 3) * 8) + '" ry="' + (20 + (i % 2) * 6) + '" fill="' + (i % 2 ? "#3c6a3a" : "#2f5a30") + '"/>').join("");
  const ball = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#fff" stroke="#999" stroke-width="1"/><path d="M' + (x - 3) + ' ' + (y - 4) + 'q2 4 0 8M' + (x + 3) + ' ' + (y - 4) + 'q-2 4 0 8" stroke="' + RED + '" stroke-width="1" fill="none"/>';
  const lightTower = (x, y, h) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + h + '" fill="#9aa1a8"/><rect x="' + (x - 14) + '" y="' + (y - 14) + '" width="28" height="16" fill="#3a3f48"/>' +
    Array.from({ length: 6 }, (_, i) => '<rect x="' + (x - 12 + (i % 3) * 8) + '" y="' + (y - 12 + Math.floor(i / 3) * 7) + '" width="6" height="5" fill="#fff6c8" class="rq-glow' + (i % 2 ? " rq-g2" : "") + '"/>').join("");

  /* 1. MARTA Route 34 at Gresham Rd SE @ Flat Shoals Rd SE */
  function rqbus() {
    const bus = '<g class="rq-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">34 GRESHAM RD</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rq1)"/>' +
      '<circle cx="70" cy="40" r="18" fill="#ffe9a8" opacity=".85"/>' +
      trees(104, [30, 110, 190, 270, 350]) +
      '<rect x="0" y="110" width="400" height="32" fill="#c9b8a0"/><rect x="0" y="106" width="400" height="5" fill="#9a8a72"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (12 + i * 56) + '" y="117" width="32" height="18" fill="#2a3442"/>').join("") +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="318" y="62" width="42" height="40" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="96" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">34</text>' +
      '<rect x="262" y="106" width="134" height="14" rx="2" fill="#111"/><text x="329" y="116" text-anchor="middle" ' + font + ' font-size="6.8" fill="#fff">GRESHAM RD @ FLAT SHOALS RD</text>',
      sky("rq1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. McNair High baseball diamond: red + silver Mustangs, a fly ball to center */
  function rqmcnair() {
    return svg(
      '<rect width="400" height="260" fill="url(#rq2)"/>' +
      trees(96, [20, 100, 300, 380]) +
      /* outfield fence + scoreboard */
      '<rect x="0" y="96" width="400" height="22" fill="#2f5a34"/><rect x="0" y="94" width="400" height="4" fill="' + RED + '"/>' +
      '<rect x="150" y="54" width="100" height="44" fill="#1d1d22" stroke="#c9cdd2" stroke-width="2"/><text x="200" y="68" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">McNAIR</text>' +
      '<text x="200" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="' + RED + '">MUSTANGS</text><text x="200" y="93" text-anchor="middle" ' + font + ' font-size="8" fill="#ffd25a" class="rq-glow">HOME 3  AWAY 1</text>' +
      lightTower(40, 40, 60) + lightTower(360, 40, 60) +
      /* outfield grass and infield dirt */
      '<rect x="0" y="118" width="400" height="142" fill="#5f9a46"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="0" y="' + (122 + i * 24) + '" width="400" height="12" fill="#6aa64f"/>').join("") +
      '<path d="M200 252l-96 -66q96 -44 192 0z" fill="#b8784a"/><path d="M200 230l-46 -32l46 -26l46 26z" fill="#6aa64f"/>' +
      '<rect x="196" y="194" width="8" height="5" fill="#f4f1ea"/><path d="M196 248h8l-4 6z" fill="#fff"/>' +
      '<rect x="152" y="196" width="6" height="6" fill="#fff" transform="rotate(45 155 199)"/><rect x="242" y="196" width="6" height="6" fill="#fff" transform="rotate(45 245 199)"/>' +
      '<g class="rq-fly"><g transform="translate(96 220)">' + ball(0, 0) + '</g></g>' +
      '<rect x="12" y="214" width="110" height="34" rx="3" fill="#1d1d22" stroke="#c9cdd2" stroke-width="2"/><text x="67" y="229" text-anchor="middle" ' + font + ' font-size="8" fill="#c9cdd2">CENTER FIELD</text><text x="67" y="242" text-anchor="middle" ' + font + ' font-size="8" fill="' + RED + '">MR. BASEBALL</text>',
      sky("rq2", "#8cc8f0", "#fbe8c8"));
  }

  /* 3. Truist Park: brick + steel grandstand, light towers, pennant */
  function rqtruist() {
    return svg(
      '<rect width="400" height="260" fill="url(#rq3)"/>' +
      '<g class="rq-tw"><circle cx="60" cy="24" r="1.6" fill="#fff"/></g><g class="rq-tw rq-tw2"><circle cx="210" cy="16" r="1.4" fill="#fff"/></g><g class="rq-tw rq-tw3"><circle cx="340" cy="30" r="1.8" fill="#fff"/></g>' +
      lightTower(36, 46, 70) + lightTower(364, 46, 70) +
      /* grandstand: steel canopy over red brick arches */
      '<path d="M20 92h360l-14 -16h-332z" fill="#d8dce2"/><rect x="30" y="92" width="340" height="16" fill="#3a3f48"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (36 + i * 21) + ' 92v16" stroke="#9aa1a8" stroke-width="1.5"/>').join("") +
      '<rect x="30" y="108" width="340" height="80" fill="#9e4632"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M30 ' + (116 + i * 10) + 'h340" stroke="#8a3b2a" stroke-width="1"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (44 + i * 42) + ' 188v-40q0 -16 14 -16t14 16v40z" fill="#2a2a32"/>').join("") +
      '<rect x="150" y="112" width="100" height="22" rx="2" fill="#1d1d22" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="127" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TRUIST PARK</text>' +
      '<rect x="0" y="188" width="400" height="72" fill="#c9c3b6"/><path d="M0 206h400" stroke="#b3ac9e" stroke-width="2"/>' +
      '<rect x="196" y="40" width="3" height="54" fill="#c9cdd2"/><g class="rq-flag"><path d="M199 42l40 8l-40 8z" fill="' + RED + '"/></g>' +
      '<g class="rq-car"><rect x="0" y="222" width="56" height="14" rx="4" fill="' + GOLD + '"/><rect x="10" y="216" width="30" height="9" rx="3" fill="#2a3442"/><circle cx="12" cy="236" r="5" fill="#111"/><circle cx="44" cy="236" r="5" fill="#111"/></g>',
      sky("rq3", "#0f1a3a", "#5a3a6a"));
  }

  /* 4. The pantry studio: shelves of cans, the mic, a laptop, meters jumping */
  function rqpantry() {
    const can = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="12" height="16" rx="2" fill="' + c + '"/><rect x="' + x + '" y="' + (y + 5) + '" width="12" height="6" fill="#f4f1ea" opacity=".8"/>';
    const shelf = (y) => '<rect x="20" y="' + y + '" width="360" height="5" fill="#8a6a46"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe6d2"/>' +
      '<rect x="0" y="0" width="16" height="260" fill="#d8cbb0"/><rect x="384" y="0" width="16" height="260" fill="#d8cbb0"/>' +
      shelf(52) + shelf(102) +
      [30, 46, 62, 90, 106, 250, 266, 300, 316, 332, 350].map((x, i) => can(x, 36, ["#d6303a", "#e8b92e", "#3a8a4a", "#7ec8ff", "#c06a2a"][i % 5])).join("") +
      [30, 50, 70, 230, 250, 290, 310, 330, 352].map((x, i) => can(x, 86, ["#e8b92e", "#3a8a4a", "#d6303a", "#c06a2a"][i % 4])).join("") +
      '<rect x="120" y="70" width="40" height="32" fill="#c8a46a"/><rect x="164" y="76" width="30" height="26" fill="#d9b880"/>' +
      /* desk with laptop and meters */
      '<rect x="40" y="186" width="320" height="10" fill="#6a4a2e"/><rect x="50" y="196" width="10" height="64" fill="#5a3e26"/><rect x="340" y="196" width="10" height="64" fill="#5a3e26"/>' +
      '<rect x="210" y="146" width="90" height="40" rx="3" fill="#2a2e36"/><rect x="214" y="150" width="82" height="32" fill="#14181e"/>' +
      '<g fill="' + GOLD + '"><rect x="222" y="160" width="8" height="20" class="rq-m"/><rect x="236" y="160" width="8" height="20" class="rq-m rq-m2"/><rect x="250" y="160" width="8" height="20" class="rq-m rq-m3"/><rect x="264" y="160" width="8" height="20" class="rq-m rq-m4"/><rect x="278" y="160" width="8" height="20" class="rq-m rq-m2"/></g>' +
      '<path d="M200 186h110l6 6h-122z" fill="#3a3f48"/>' +
      /* mic on a stand with a pop filter */
      '<rect x="118" y="120" width="4" height="66" fill="#3a3f48"/><path d="M104 186h32" stroke="#3a3f48" stroke-width="4"/>' +
      '<rect x="110" y="96" width="20" height="30" rx="10" fill="#9aa1a8" stroke="#555" stroke-width="2"/><circle cx="150" cy="110" r="14" fill="#222" opacity=".35" stroke="#333"/><path d="M130 110h6" stroke="#333" stroke-width="2"/>' +
      '<rect x="140" y="208" width="120" height="24" rx="3" fill="#1d1d22"/><text x="200" y="224" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">STUDIO RAT</text>',
      '');
  }

  /* 5. Gresham Rd and Clifton Church Rd: tag wall, ballfield lights behind */
  function rqcorner() {
    const drip = (x, y, cls) => '<rect x="' + x + '" y="' + y + '" width="4" height="16" rx="2" fill="' + GOLD + '" class="rq-drip ' + (cls || "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rq5)"/>' +
      trees(140, [280, 340, 400]) +
      lightTower(300, 60, 90) + lightTower(370, 70, 80) +
      '<rect x="0" y="150" width="400" height="6" fill="#5c6a4a"/>' +
      '<rect x="0" y="118" width="262" height="112" fill="#8a8f96"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (126 + i * 10) + 'h262" stroke="#7a7f86" stroke-width="1"/>').join("") +
      tag("RICH HOMIE", 14, 166, 30, GOLD, -5) + tag("QUAN", 64, 198, 30, GOLD, -4) + drip(40, 172) + drip(110, 168, "rq-d2") + drip(170, 166, "rq-d3") +
      tag("T.I.G.", 16, 222, 18, RED, -3) + tag("GOIN IN", 150, 224, 18, "#fff", 3) +
      '<rect x="0" y="230" width="400" height="30" fill="#55555c"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="rq-car"><rect x="0" y="232" width="56" height="14" rx="4" fill="' + RED + '"/><rect x="10" y="226" width="30" height="9" rx="3" fill="#2a3442"/><circle cx="12" cy="246" r="5" fill="#111"/><circle cx="44" cy="246" r="5" fill="#111"/></g>' +
      '<rect x="322" y="150" width="5" height="80" fill="#6e737b"/>' + sign(272, 158, 110, "GRESHAM RD SE") + sign(262, 184, 130, "CLIFTON CHURCH RD"),
      sky("rq5", "#2a1f4a", "#f0a06a"));
  }

  window.SCENES = { rqbus, rqmcnair, rqtruist, rqpantry, rqcorner };
})();
