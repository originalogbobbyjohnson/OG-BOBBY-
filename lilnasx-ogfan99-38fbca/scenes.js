/* lilnasx scenes (Regions tab: Atlanta; Lithia Springs / Austell, west of the A). CSS classes and ids prefixed ln-.
   1 CobbLinc Route 25 (Cumberland - Austell Rd - H.E. Holmes) pulling up at Austell Rd @ Hospital South Dr in Austell, the town he moved to with his dad: Georgia pines, red clay.
   2 Lithia Springs High School (class of 2017; the Lions, green and gold): brick campus, a LIONS banner, a trumpet (he was first chair) blowing notes.
   3 University of West Georgia, Carrollton (a year of computer science before he left for music): red-brick hall with white columns, red + blue WOLVES banner, code brackets floating up.
   4 Six Flags Over Georgia in Austell, where he worked in college: a big orange coaster hill, the train racing down, flags flying.
   5 Thornton Rd and Bankhead Hwy in Lithia Springs: green signs, LIL NAS X tagged with YEEHAW and MONTERO, a horse in a pink cowboy hat at the fence, the Atlanta skyline far off.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lnbus{0%{transform:translateX(440px)}45%,100%{transform:translateX(0)}}.ln-bus{animation:lnbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes lnnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-50px);opacity:0}}.ln-note{animation:lnnote 3s linear infinite}.ln-n2{animation-delay:-1s}.ln-n3{animation-delay:-2s}' +
    '@keyframes lnwave{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}.ln-wave{transform-box:fill-box;transform-origin:0% 50%;animation:lnwave 1.6s ease-in-out infinite}' +
    '@keyframes lnride{0%{offset-distance:0%}100%{offset-distance:100%}}' +
    '@keyframes lncoast{0%{transform:translate(0,0)}30%{transform:translate(60px,-70px)}45%{transform:translate(110px,-84px)}75%{transform:translate(190px,40px)}100%{transform:translate(330px,30px)}}.ln-coast{animation:lncoast 5s ease-in-out infinite;animation-delay:-2s}' +
    '@keyframes lntail{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(8deg)}}.ln-tail{transform-box:fill-box;transform-origin:50% 0%;animation:lntail 1.4s ease-in-out infinite}' +
    '@keyframes lncar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.ln-car{animation:lncar 6s linear infinite}' +
    '@keyframes lndrip{0%{transform:scaleY(.2)}60%,100%{transform:scaleY(1)}}.ln-drip{transform-box:fill-box;transform-origin:50% 0%;animation:lndrip 2.4s ease-in infinite}.ln-d2{animation-delay:-.9s}.ln-d3{animation-delay:-1.6s}' +
    '@keyframes lntwinkle{0%,100%{opacity:.3}50%{opacity:1}}.ln-tw{animation:lntwinkle 1.8s ease-in-out infinite}.ln-t2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const PINK = "#ff5fa2", GOLD = "#f5d27a", SKY = "#5ec8ff", NAVY = "#1b3f7a", TEAL = "#2bb0a6", LGREEN = "#1f6b34", LGOLD = "#f2c230";
  const pines = (y, xs) => xs.map((x, i) => '<path d="M' + x + ' ' + y + 'l' + (14 + (i % 3) * 3) + ' -' + (44 + (i % 4) * 8) + 'l' + (14 + (i % 3) * 3) + ' ' + (44 + (i % 4) * 8) + 'z" fill="' + (i % 2 ? "#2d5a34" : "#24492b") + '"/>').join("");
  const banner = (x, y, w, bg, fg, t1, t2) => '<g class="ln-wave"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="40" fill="' + bg + '" stroke="' + fg + '" stroke-width="2"/><text x="' + (x + w / 2) + '" y="' + (y + 18) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + fg + '">' + t1 + '</text><text x="' + (x + w / 2) + '" y="' + (y + 32) + '" text-anchor="middle" ' + font + ' font-size="9" fill="' + fg + '">' + t2 + '</text></g>';

  /* 1. CobbLinc Route 25 at Austell Rd @ Hospital South Dr */
  function lnstop() {
    const bus = '<g class="ln-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + NAVY + '"/><rect x="40" y="181" width="236" height="4" fill="' + TEAL + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">25 H.E. HOLMES</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ln1)"/>' +
      '<circle cx="80" cy="44" r="18" fill="#fff1b8" opacity=".9"/>' +
      pines(124, [0, 26, 52, 80, 106, 134, 160, 188, 216, 242, 270, 298, 326, 352, 378]) +
      '<rect x="0" y="120" width="400" height="22" fill="#b5563a"/>' +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="314" y="62" width="50" height="40" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">CobbLinc</text><text x="339" y="95" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">25</text>' +
      '<rect x="270" y="106" width="126" height="14" rx="2" fill="#111"/><text x="333" y="116" text-anchor="middle" ' + font + ' font-size="6.6" fill="#fff">AUSTELL RD @ HOSPITAL S DR</text>',
      sky("ln1", "#86c6f0", "#fbe8c8"));
  }

  /* 2. Lithia Springs High School: green + gold Lions, a trumpet blowing notes */
  function lnschool() {
    const note = (x, y, cls) => '<g class="ln-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + LGOLD + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14l7 3" stroke="' + LGOLD + '" stroke-width="2" fill="none"/></g>';
    const trumpet = '<g transform="translate(250 196) rotate(-12)"><rect x="0" y="-4" width="70" height="8" rx="3" fill="#e8c048"/><path d="M70 -4l26 -14v36l-26 -14z" fill="#f2d060" stroke="#b8902a" stroke-width="1.5"/>' +
      '<rect x="20" y="-14" width="5" height="10" fill="#c8a038"/><rect x="30" y="-14" width="5" height="10" fill="#c8a038"/><rect x="40" y="-14" width="5" height="10" fill="#c8a038"/><path d="M10 4q20 14 50 0" stroke="#e8c048" stroke-width="5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ln2)"/>' +
      pines(120, [0, 30, 60, 330, 360]) +
      '<rect x="20" y="96" width="360" height="96" fill="#a2533a"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M20 ' + (104 + i * 10) + 'h360" stroke="#8e4630" stroke-width="1"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 50) + '" y="112" width="30" height="22" fill="#24323e"/>').join("") +
      '<rect x="160" y="70" width="80" height="122" fill="#b25c42"/><rect x="176" y="148" width="48" height="44" fill="#24323e"/><path d="M200 148v44" stroke="#8a8f96" stroke-width="2"/>' +
      '<rect x="164" y="80" width="72" height="16" fill="' + LGREEN + '"/><text x="200" y="91.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + LGOLD + '">LITHIA SPRINGS</text>' +
      banner(40, 140, 96, LGREEN, LGOLD, "LIONS", "GREEN + GOLD") +
      '<rect x="0" y="192" width="400" height="68" fill="#4e8a3a"/><path d="M0 214h400" stroke="#fff" stroke-width="2" opacity=".6"/>' +
      trumpet + note(352, 168, "") + note(366, 176, "ln-n2") + note(340, 160, "ln-n3"),
      sky("ln2", "#8cc8ee", "#f8e6c2"));
  }

  /* 3. University of West Georgia, Carrollton: red-brick hall, white columns, red + blue Wolves */
  function lnwolves() {
    const code = (x, y, t, cls) => '<text x="' + x + '" y="' + y + '" class="ln-note ' + cls + '" font-family="Courier New, monospace" font-weight="700" font-size="16" fill="' + SKY + '">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#ln3)"/>' +
      pines(130, [0, 28, 56, 316, 344, 372]) +
      '<rect x="80" y="70" width="240" height="120" fill="#a8432f"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M80 ' + (78 + i * 10) + 'h240" stroke="#933a28" stroke-width="1"/>').join("") +
      '<path d="M70 70l130 -40l130 40z" fill="#f4f1ea" stroke="#d8d2c6" stroke-width="2"/><circle cx="200" cy="56" r="8" fill="#e8e4da" stroke="#c8c2b6" stroke-width="1.5"/>' +
      '<rect x="74" y="70" width="252" height="8" fill="#f4f1ea"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (104 + i * 38) + '" y="78" width="10" height="104" fill="#f4f1ea"/>').join("") +
      '<rect x="84" y="182" width="232" height="8" fill="#e8e4da"/><rect x="74" y="190" width="252" height="6" fill="#d8d2c6"/>' +
      '<rect x="182" y="130" width="36" height="52" fill="#3a2a22"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5a9a3e"/><path d="M180 196l-40 64h120l-40 -64z" fill="#c9c3b6"/>' +
      banner(14, 120, 60, "#c8102e", "#fff", "WOLVES", "RED + BLUE") + banner(326, 120, 62, "#0a2e6e", "#fff", "WEST", "GEORGIA") +
      code(110, 120, "&lt;/&gt;", "") + code(270, 110, "{ }", "ln-n2") + code(240, 140, "01", "ln-n3"),
      sky("ln3", "#9fd6f6", "#f4ead4"));
  }

  /* 4. Six Flags Over Georgia, Austell: orange coaster hill, train racing down, flags flying */
  function lncoaster() {
    const track = 'M0 210L60 200Q120 60 150 50Q170 46 190 70L250 200Q270 230 300 190L340 150Q370 130 400 160';
    const supports = Array.from({ length: 18 }, (_, i) => { const x = 20 + i * 21; return '<path d="M' + x + ' 250V' + (x > 110 && x < 200 ? 70 : 170) + '" stroke="#e8e8e8" stroke-width="2.5"/>'; }).join("");
    const flag = (x, col, cls) => '<rect x="' + x + '" y="60" width="3" height="50" fill="#ddd"/><path class="ln-wave ' + cls + '" d="M' + (x + 3) + ' 62h24l-6 8l6 8h-24z" fill="' + col + '"/>';
    const train = '<g class="ln-coast"><g transform="translate(60 196) rotate(-55)"><rect x="0" y="-8" width="34" height="10" rx="3" fill="' + SKY + '"/><rect x="2" y="-12" width="8" height="5" fill="#111"/><rect x="14" y="-12" width="8" height="5" fill="#111"/><rect x="26" y="-12" width="6" height="5" fill="#111"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ln4)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#fff1b8" opacity=".9"/>' +
      pines(250, [0, 300, 330, 360]) +
      supports +
      '<path d="' + track + '" stroke="#f07a1a" stroke-width="7" fill="none"/><path d="' + track + '" stroke="#b8520a" stroke-width="2" fill="none" transform="translate(0 6)"/>' +
      train +
      flag(220, "#c8102e", "") + flag(260, SKY, "ln-t2") + flag(300, GOLD, "") + flag(340, "#2a8a3a", "ln-t2") +
      '<rect x="0" y="236" width="400" height="24" fill="#5a9a3e"/>' +
      '<rect x="206" y="214" width="180" height="20" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="296" y="227.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">SIX FLAGS OVER GEORGIA</text>',
      sky("ln4", "#6ab8ee", "#ffe8c0"));
  }

  /* 5. Thornton Rd and Bankhead Hwy, Lithia Springs: tag wall, a horse in a pink hat, the A's skyline far off */
  function lncorner() {
    const drip = (x, y, cls) => '<rect x="' + x + '" y="' + y + '" width="4" height="16" rx="2" fill="' + PINK + '" class="ln-drip ' + (cls || "") + '"/>';
    const skyline = '<g fill="#6a6a8a" opacity=".75"><rect x="262" y="104" width="14" height="46"/><rect x="280" y="92" width="12" height="58"/><rect x="296" y="70" width="16" height="80"/><path d="M296 70l8 -14l8 14z" fill="' + GOLD + '"/><rect x="302" y="40" width="3" height="16" fill="' + GOLD + '"/>' +
      '<rect x="316" y="96" width="14" height="54"/><rect x="334" y="84" width="12" height="66"/><rect x="350" y="106" width="16" height="44"/><rect x="370" y="98" width="12" height="52"/></g>';
    const horse = '<g transform="translate(244 182)"><path d="M0 0q10 -14 40 -12q14 0 22 -10l6 -18q4 -6 10 -2l6 8q2 6 -4 8l-8 4q-4 10 -6 24q-2 6 -8 6h-46q-10 0 -12 -8z" fill="#8a5a32" stroke="#5a3a1a" stroke-width="1.5"/>' +
      '<path d="M2 2l-4 30M14 6l-2 28M50 6l2 28M60 2l4 30" stroke="#6a4222" stroke-width="5" stroke-linecap="round"/><path class="ln-tail" d="M-2 0q-10 6 -8 22" stroke="#3a2412" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M66 -26q-4 -8 -10 -6" stroke="#3a2412" stroke-width="4" fill="none"/><path d="M62 -40h24l-4 -4h-16z" fill="' + PINK + '"/><path d="M66 -44q8 -12 16 0z" fill="' + PINK + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ln5)"/>' +
      '<circle cx="380" cy="30" r="2" fill="#fff" class="ln-tw"/><circle cx="240" cy="22" r="2" fill="#fff" class="ln-tw ln-t2"/>' +
      skyline + pines(152, [236, 380]) +
      '<rect x="0" y="150" width="400" height="6" fill="#b5563a"/>' +
      /* fence */
      '<path d="M236 176h164M236 192h164" stroke="#d8c8a8" stroke-width="4"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (240 + i * 38) + '" y="166" width="5" height="64" fill="#c8b898"/>').join("") +
      horse +
      /* the wall */
      '<rect x="0" y="112" width="230" height="118" fill="#8a8f96"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (120 + i * 11) + 'h230" stroke="#7a7f86" stroke-width="1"/>').join("") +
      tag("LIL NAS X", 14, 176, 36, PINK, -5) + drip(34, 182) + drip(100, 178, "ln-d2") + drip(160, 174, "ln-d3") +
      tag("YEEHAW", 18, 218, 20, GOLD, -3) + tag("MONTERO", 124, 216, 18, SKY, 4) + tag("NASARATI", 22, 142, 14, "#fff", -4) +
      '<rect x="0" y="230" width="400" height="30" fill="#55555c"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="ln-car"><rect x="0" y="232" width="60" height="14" rx="4" fill="' + SKY + '"/><rect x="12" y="225" width="32" height="9" rx="3" fill="#2a3442"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="46" cy="246" r="5" fill="#111"/></g>' +
      '<rect x="356" y="66" width="5" height="164" fill="#6e737b"/>' + sign(300, 64, 100, "THORNTON RD") + sign(290, 90, 110, "BANKHEAD HWY"),
      sky("ln5", "#2a1a4a", "#ff8a9a"));
  }

  window.SCENES = { lnstop, lnschool, lnwolves, lncoaster, lncorner };
})();
