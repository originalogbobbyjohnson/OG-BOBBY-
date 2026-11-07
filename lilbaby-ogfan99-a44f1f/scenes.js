/* lilbaby scenes (Regions tab: Atlanta; Oakland City, Southwest Atlanta). CSS classes and ids prefixed lb- (the page's own anim-train is kept).
   1 MARTA Route 68 (Donnelly Ave / Beecher) rolling down Lee St SW through Oakland City: white MARTA bus with blue + orange bands, the stop flag, porch bungalows behind.
   2 Booker T. Washington High School, Atlanta (where he went until ninth grade): the red-brick front with white columns, the flag waving.
   3 The studio where he started at 17 (Quality Control's Atlanta studio, drawn generic, no logo): the booth, the mic, meters jumping, gold plaques on the wall.
   4 Oakland City homes (his plan to buy back and rebuild the neighborhood): craftsman bungalows with porches, one going up, a crane swinging a beam.
   5 Lee St SW and Avon Ave SW in Oakland City: green signs, LIL BABY tagged with 4PF and WHAM, downtown's skyline at dusk with the twin glowing crowns of 191 Peachtree behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lbbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.lb-bus{animation:lbbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes lbglow{0%,100%{opacity:.45}50%{opacity:1}}.lb-glow{animation:lbglow 2.2s ease-in-out infinite}.lb-g2{animation-delay:-1.1s}' +
    '@keyframes lbflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(6deg) scaleX(.92)}}.lb-flag{transform-box:fill-box;transform-origin:0% 50%;animation:lbflag 1.6s ease-in-out infinite}' +
    '@keyframes lbwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.lb-wv{transform-box:fill-box;transform-origin:50% 100%;animation:lbwave .7s ease-in-out infinite}' +
    '@keyframes lbswing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.lb-swing{transform-box:fill-box;transform-origin:50% 0%;animation:lbswing 3.2s ease-in-out infinite}' +
    '@keyframes lbsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lb-sp{animation:lbsp 1.4s ease-out infinite}.lb-sp2{animation-delay:.45s}' +
    '@keyframes lbtw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.lb-tw{transform-box:fill-box;transform-origin:50% 50%;animation:lbtw 1.8s ease-in-out infinite}.lb-tw2{animation-delay:-.6s}.lb-tw3{animation-delay:-1.2s}' +
    '@keyframes lbcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.lb-car{animation:lbcar 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#f5d061", VV = "#4fb3ff", SILVER = "#e9e9f2", BUS = "#1f4e79", ORANGE = "#f7941d";
  /* a craftsman bungalow: low gable, porch with square columns */
  const bungalow = (x, y, s, wall, roof, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"' + (cls ? ' class="' + cls + '"' : '') + '>' +
    '<path d="M-6 -40l46 -26l46 26z" fill="' + roof + '"/><rect x="0" y="-40" width="80" height="40" fill="' + wall + '"/>' +
    '<rect x="8" y="-32" width="16" height="14" fill="#2a3442"/><rect x="56" y="-32" width="16" height="14" fill="#2a3442"/><rect x="34" y="-26" width="12" height="26" fill="#5a3a2a"/>' +
    '<rect x="-4" y="-14" width="88" height="4" fill="#f2efe6"/><rect x="2" y="-12" width="5" height="12" fill="#f2efe6"/><rect x="73" y="-12" width="5" height="12" fill="#f2efe6"/></g>';

  /* 1. MARTA Route 68 down Lee St SW in Oakland City */
  function lbbus() {
    const bus = '<g class="lb-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">68 DONNELLY / BEECHER</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#ffe9a8" opacity=".8"/>' +
      '<g fill="#3c6b3a"><ellipse cx="30" cy="96" rx="34" ry="24"/><ellipse cx="200" cy="92" rx="40" ry="26"/><ellipse cx="380" cy="98" rx="34" ry="22"/></g>' +
      bungalow(36, 142, .9, "#d9c7a0", "#6b4a3a") + bungalow(150, 142, .9, "#a8c3cf", "#4a4a52") + bungalow(262, 142, .9, "#e6d3b8", "#7a3b2e") +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="318" y="66" width="42" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">68</text>' +
      '<rect x="284" y="106" width="110" height="14" rx="2" fill="#111"/><text x="339" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">LEE ST SW · OAKLAND CITY</text>',
      sky("lb1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. Booker T. Washington High School, Atlanta: red brick, white columns, the flag */
  function lbschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#lb2)"/>' +
      '<rect x="40" y="70" width="320" height="120" fill="#9c3f2c"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (78 + i * 10) + 'h320" stroke="#86351f" stroke-width="1"/>').join("") +
      [56, 92, 290, 326].map(x => Array.from({ length: 3 }, (_, r) => '<rect x="' + x + '" y="' + (82 + r * 34) + '" width="20" height="24" fill="#2a3442" stroke="#f2efe6" stroke-width="2"/>').join("")).join("") +
      /* portico */
      '<path d="M128 70l72 -34l72 34z" fill="#f2efe6"/><path d="M146 66l54 -24l54 24z" fill="#d9d4c6"/><rect x="124" y="68" width="152" height="10" fill="#f6f4ee"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (134 + i * 25) + '" y="78" width="9" height="104" fill="#f6f4ee"/>').join("") +
      '<rect x="182" y="132" width="36" height="50" fill="#4a2a1e"/><path d="M200 132v50" stroke="#2a170f" stroke-width="2"/>' +
      '<rect x="114" y="182" width="172" height="8" fill="#d9d4c6"/><rect x="104" y="190" width="192" height="8" fill="#c9c3b6"/>' +
      /* flagpole */
      '<rect x="368" y="40" width="3" height="150" fill="#9aa1a8"/><g class="lb-flag"><rect x="371" y="42" width="24" height="16" fill="' + BUS + '"/><rect x="371" y="50" width="24" height="3" fill="#fff"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#6aa84f"/><path d="M200 198l-30 62h60z" fill="#c9c3b6"/>' +
      '<rect x="60" y="214" width="96" height="30" rx="3" fill="#1d3f8f" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="108" y="227" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">BOOKER T. WASHINGTON</text><text x="108" y="238" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">HIGH SCHOOL</text>',
      sky("lb2", "#8fc6ec", "#f2ead6"));
  }

  /* 3. The studio at 17: booth, mic, meters, gold plaques */
  function lbstudio() {
    const plaque = (x, y) => '<rect x="' + x + '" y="' + y + '" width="34" height="44" rx="2" fill="#2a2a2e" stroke="#7a6a3a" stroke-width="2"/><circle cx="' + (x + 17) + '" cy="' + (y + 18) + '" r="12" fill="' + GOLD + '"/><circle cx="' + (x + 17) + '" cy="' + (y + 18) + '" r="3" fill="#2a2a2e"/><rect x="' + (x + 6) + '" y="' + (y + 34) + '" width="22" height="5" fill="#bfae6a"/>';
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="0" width="40" height="120" fill="#1c2028"/>').join("") +
      plaque(14, 22) + plaque(56, 22) + plaque(310, 22) + plaque(352, 22) +
      '<rect x="110" y="18" width="180" height="98" rx="6" fill="#0d1b2a" stroke="#3a3e46" stroke-width="4"/>' +
      '<path d="M200 108v-40" stroke="#555" stroke-width="3"/><rect x="190" y="40" width="20" height="30" rx="10" fill="#c9ced6"/><circle cx="200" cy="55" r="15" fill="none" stroke="#333" stroke-width="2"/>' +
      '<rect class="lb-glow" x="122" y="26" width="62" height="16" rx="3" fill="#e2384b"/><text x="153" y="38" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="1">ON AIR</text>' +
      '<text x="262" y="38" text-anchor="middle" ' + font + ' font-size="9" fill="' + VV + '">AGE 17</text>' +
      '<path d="M20 160h360l20 100H0z" fill="#2e2a2a"/><rect x="40" y="150" width="320" height="14" rx="3" fill="#24262c"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + (52 + i * 12.6) + '" y="174" width="6" height="34" rx="2" fill="#1a1a1e"/><rect x="' + (50 + i * 12.6) + '" y="' + (182 + (i * 7) % 18) + '" width="10" height="5" rx="1" fill="#d6d6d6"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<rect class="lb-wv" style="animation-delay:-' + ((i * 0.13) % 0.7).toFixed(2) + 's" x="' + (120 + i * 8) + '" y="128" width="5" height="18" fill="' + (i % 6 === 5 ? "#e2384b" : i % 3 ? VV : GOLD) + '"/>').join("") +
      [30, 352].map(x => '<rect x="' + x + '" y="100" width="22" height="50" rx="3" fill="#0e0f12" stroke="#3a3e46" stroke-width="2"/><circle cx="' + (x + 11) + '" cy="136" r="7" fill="#2a2f3a"/>').join(""),
      "");
  }

  /* 4. Oakland City homes going back up: bungalows, a frame house, a crane swinging a beam */
  function lbhomes() {
    return svg(
      '<rect width="400" height="260" fill="url(#lb4)"/>' +
      /* crane */
      '<rect x="300" y="30" width="8" height="160" fill="' + GOLD + '"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M300 ' + (34 + i * 16) + 'l8 16M308 ' + (34 + i * 16) + 'l-8 16" stroke="#b8952a" stroke-width="1.2"/>').join("") +
      '<rect x="170" y="26" width="190" height="7" fill="' + GOLD + '"/><rect x="340" y="33" width="20" height="14" fill="#555"/><path d="M304 26l-20 -14h40z" fill="' + GOLD + '"/>' +
      '<g transform="translate(196 33)"><g class="lb-swing"><path d="M0 0v54" stroke="#333" stroke-width="1.5"/><rect x="-26" y="54" width="52" height="7" fill="#c98f4a" stroke="#7a522a" stroke-width="1"/></g></g>' +
      /* framed new house */
      '<g transform="translate(150 196)"><path d="M-6 -50l52 -30l52 30" fill="none" stroke="#c98f4a" stroke-width="4"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (i * 18) + '" y="-50" width="4" height="50" fill="#c98f4a"/>').join("") + '<rect x="0" y="-52" width="94" height="4" fill="#c98f4a"/></g>' +
      bungalow(16, 196, 1.05, "#e6d3b8", "#7a3b2e") + bungalow(262, 196, 1.05, "#a8c3cf", "#4a4a52") +
      '<rect x="0" y="196" width="400" height="64" fill="#6aa84f"/><rect x="0" y="226" width="400" height="34" fill="#8a8a90"/>' +
      '<rect x="92" y="204" width="216" height="18" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="217" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="1">OAKLAND CITY · BUILD IT BACK</text>',
      sky("lb4", "#9fd0f0", "#fbe7c8"));
  }

  /* 5. Lee St SW and Avon Ave SW: green signs, LIL BABY tagged, the skyline with 191 Peachtree's twin crowns */
  function lbcorner() {
    const crowns = '<g fill="#2a2e3a"><rect x="214" y="30" width="44" height="104"/>' +
      '<path d="M214 30l6 -12h10l6 12z"/><path d="M236 30l6 -12h10l6 12z"/></g>' +
      '<path class="lb-glow" d="M216 30l5 -10h8l5 10zM238 30l5 -10h8l5 10z" fill="' + GOLD + '" opacity=".9"/>' +
      Array.from({ length: 8 }, (_, r) => '<rect x="220" y="' + (40 + r * 11) + '" width="32" height="3" fill="#ffd98a" opacity=".55"/>').join("");
    const city = '<g fill="#232634">' + [[0, 84, 40], [44, 70, 34], [84, 96, 30], [120, 60, 36], [160, 88, 46], [270, 76, 34], [308, 92, 40], [352, 66, 48]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (140 - b[1]) + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="' + (i % 3 ? "" : "lb-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 37) % 36) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      city + crowns +
      '<rect x="0" y="134" width="400" height="90" fill="#7a4a3a"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#6a3e30" stroke-width="1"/>').join("") +
      tag("4PF", 26, 160, 22, VV, -4) + tag("LIL BABY", 18, 206, 40, GOLD, -5) + tag("WHAM", 196, 160, 20, SILVER, -6) + tag("OAKLAND CITY", 150, 218, 15, "#fff", -3) +
      '<g class="lb-tw"><path d="M300 150l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + VV + '"/></g><g class="lb-tw lb-tw2"><path d="M262 190l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="lb-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="#1a1a1e"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#2a2a32"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 104, "Lee St SW") + sign(296, 124, 92, "Avon Ave SW") +
      '<g class="lb-sp"><circle cx="190" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lb-sp lb-sp2"><circle cx="196" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lb5", "#141a3a", "#e0864a"));
  }

  window.SCENES = { lbbus: lbbus, lbschool: lbschool, lbstudio: lbstudio, lbhomes: lbhomes, lbcorner: lbcorner };
})();
