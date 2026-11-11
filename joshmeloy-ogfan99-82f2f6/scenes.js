/* joshmeloy scenes (Regions: MORE OF THE SOUTH; Genres: country / red dirt; from Hennessey, Kingfisher County, Oklahoma, a wheat town on US 81 and the old Chisholm Trail;
   moved to Stillwater, started writing around 19 while living in a camper there; his grandfather gave him his first guitar and sang country and gospel; independent).
   CSS classes prefixed jmy- (the page's own anim-train is kept).
   Places: US 81 north into Hennessey; grain elevators and the rail line beside the wheat; grandpa's porch at night; the camper in the red dirt with a storm rolling in;
   Main St and Oklahoma St in Hennessey with the elevator behind. Stillwater's bus terminal, Washington St strip and OSU library are already used (Wyatt Flores) - not drawn.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const RED = "#b5462a", WHEAT = "#e0b85a", CREAM = "#f4ecdc", SKY = "#2a5a8a", GOLD = "#f2c14e";
  const css = '<style>' +
    '@keyframes jmyglow{0%,100%{opacity:.45}50%{opacity:1}}.jmy-glow{animation:jmyglow 2.2s ease-in-out infinite}.jmy-g2{animation-delay:-1.1s}' +
    '@keyframes jmycloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.jmy-cl{animation:jmycloud 14s ease-in-out infinite alternate}' +
    '@keyframes jmycar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.jmy-car{animation:jmycar 7s linear infinite}' +
    '@keyframes jmyfreight{0%{transform:translateX(420px)}100%{transform:translateX(-620px)}}.jmy-fr{animation:jmyfreight 12s linear infinite}' +
    '@keyframes jmysway{0%,100%{transform:skewX(0)}50%{transform:skewX(-8deg)}}.jmy-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jmysway 2.4s ease-in-out infinite}' +
    '@keyframes jmybolt{0%,86%,100%{opacity:0}88%,92%{opacity:1}90%{opacity:.3}}.jmy-bolt{animation:jmybolt 4s linear infinite}' +
    '@keyframes jmyflash{0%,86%,100%{opacity:0}88%{opacity:.35}}.jmy-flash{animation:jmyflash 4s linear infinite}' +
    '@keyframes jmymoth{0%,100%{transform:translate(0,0)}25%{transform:translate(8px,-6px)}50%{transform:translate(-4px,-10px)}75%{transform:translate(-8px,2px)}}.jmy-moth{animation:jmymoth 1.6s ease-in-out infinite}.jmy-m2{animation-delay:-.8s}' +
    '@keyframes jmynote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-50px);opacity:0}}.jmy-note{animation:jmynote 2.4s ease-out infinite}.jmy-n2{animation-delay:-.8s}.jmy-n3{animation-delay:-1.6s}' +
    '@keyframes jmyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jmy-sp{animation:jmyspray 1.4s ease-out infinite}.jmy-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* US route shield: white shield, black border, black number */
  const usShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M-17 -16h34q2 14 -4 24q-6 10 -13 12q-7 -2 -13 -12q-6 -10 -4 -24z" fill="#fff" stroke="#111" stroke-width="2"/><text x="0" y="6" text-anchor="middle" ' + font + ' font-size="15" fill="#111">' + n + '</text></g>';
  const pickup = (c) => '<rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="jmy-glow"/>';
  /* concrete grain elevator: a row of tall silos with a head house on top */
  const elevator = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + [0, 1, 2, 3].map(i => '<rect x="' + (i * 22) + '" y="20" width="22" height="100" rx="10" fill="' + c + '"/><path d="M' + (i * 22 + 11) + ' 22v96" stroke="#000" stroke-opacity=".08" stroke-width="8"/>').join("") +
    '<rect x="30" y="-10" width="28" height="32" fill="' + c + '"/><rect x="36" y="-2" width="6" height="6" fill="#555"/><path d="M0 20h88" stroke="#000" stroke-opacity=".15" stroke-width="2"/></g>';
  const wheat = (y, c) => '<g class="jmy-sway">' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10 + 4) + ' ' + (y + 30) + 'v-24" stroke="' + c + '" stroke-width="2"/><ellipse cx="' + (i * 10 + 4) + '" cy="' + (y + 4) + '" rx="2.4" ry="6" fill="' + c + '"/>').join("") + '</g>';

  /* ROOM 0: US 81 north up the old Chisholm Trail, the green guide sign for Hennessey, wheat on both sides, a pickup heading home */
  function jmyhwy() {
    return svg(
      '<rect width="400" height="260" fill="url(#jmy1)"/>' +
      '<g class="jmy-cl"><ellipse cx="70" cy="30" rx="44" ry="9" fill="#fff" opacity=".55"/><ellipse cx="310" cy="40" rx="50" ry="9" fill="#fff" opacity=".45"/></g>' +
      '<rect x="0" y="146" width="400" height="34" fill="' + WHEAT + '"/>' + elevator(330, 82, .55, "#d8d4c8") +
      '<rect x="0" y="178" width="400" height="82" fill="#3a3a40"/><path d="M0 220h400" stroke="#f0d040" stroke-width="3" stroke-dasharray="20 14"/><path d="M0 180h400" stroke="#fff" stroke-width="2"/>' +
      '<rect x="146" y="120" width="5" height="60" fill="#8a8e94"/><rect x="282" y="120" width="5" height="60" fill="#8a8e94"/>' +
      '<rect x="120" y="40" width="190" height="88" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' + usShield(156, 76, "81") +
      '<text x="184" y="66" ' + font + ' font-size="11" fill="#fff">NORTH</text><text x="184" y="94" ' + font + ' font-size="22" fill="#fff">Hennessey</text><text x="184" y="116" ' + font + ' font-size="10" fill="#fff">Enid  ·  Chisholm Trail</text>' +
      '<g class="anim-train"><g transform="translate(150 192)">' + pickup(RED) + '</g></g>' +
      '<g class="jmy-car"><rect x="0" y="230" width="40" height="14" rx="3" fill="#2a4a7a"/><circle cx="9" cy="244" r="4" fill="#222"/><circle cx="31" cy="244" r="4" fill="#222"/></g>' +
      cap("US 81 NORTH  ·  THE OLD CHISHOLM TRAIL  ·  HENNESSEY, OKLAHOMA", 256),
      sky("jmy1", "#7ab0dc", "#f0e6d0"));
  }

  /* ROOM 1: wheat country: the town's concrete grain elevator, a freight rolling past on the line beside it, wheat moving in the wind */
  function jmyelev() {
    const car = (x, c) => '<rect x="' + x + '" y="0" width="60" height="26" rx="2" fill="' + c + '"/><path d="M' + (x + 6) + ' 4v18M' + (x + 18) + ' 4v18M' + (x + 30) + ' 4v18M' + (x + 42) + ' 4v18M' + (x + 54) + ' 4v18" stroke="#000" stroke-opacity=".2" stroke-width="2"/><circle cx="' + (x + 10) + '" cy="28" r="4" fill="#222"/><circle cx="' + (x + 50) + '" cy="28" r="4" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jmy2)"/>' +
      '<circle cx="80" cy="60" r="22" fill="#fff4c8" class="jmy-glow"/>' +
      elevator(160, 30, 1.2, "#dcd8cc") +
      '<rect x="0" y="174" width="400" height="6" fill="#6a5a4a"/><path d="M0 182h400" stroke="#4a4a4a" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="180" width="4" height="6" fill="#5a4a3a"/>').join("") +
      '<g class="jmy-fr"><g transform="translate(0 148)"><rect x="0" y="-6" width="70" height="32" rx="3" fill="#e0b030"/><rect x="40" y="-14" width="26" height="14" fill="#e0b030"/><rect x="44" y="-10" width="18" height="7" fill="#bfe0ee"/><circle cx="12" cy="28" r="4" fill="#222"/><circle cx="58" cy="28" r="4" fill="#222"/>' +
      car(74, "#7a4a2a") + car(138, "#6a6e74") + car(202, "#7a4a2a") + car(266, "#6a6e74") + car(330, "#7a4a2a") + car(394, "#6a6e74") + car(458, "#7a4a2a") + '</g></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#c89a40"/>' + wheat(196, WHEAT) + wheat(222, "#d8a848") +
      cap("WHEAT COUNTRY  ·  KINGFISHER COUNTY"),
      sky("jmy2", "#8ab8dc", "#f8e8c8"));
  }

  /* ROOM 2: grandpa's porch after dark: the porch light on, moths circling, the first guitar on the swing, a song drifting out (he sang country and gospel) */
  function jmyporch() {
    return svg(
      '<rect width="400" height="260" fill="url(#jmy3)"/>' +
      [[30, 20], [90, 44], [180, 14], [250, 36], [330, 18], [380, 50]].map(s => '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="1.3" fill="#fff"/>').join("") +
      '<circle cx="340" cy="44" r="14" fill="#f4ecdc"/><circle cx="346" cy="40" r="12" fill="#1a2238"/>' +
      /* house front */
      '<rect x="40" y="70" width="320" height="130" fill="#e8e0d0"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M40 ' + (80 + i * 12) + 'h320" stroke="#c8c0b0" stroke-width="1.5"/>').join("") +
      '<path d="M20 74l180 -40l180 40z" fill="#5a4a3a"/>' +
      '<rect x="70" y="96" width="50" height="50" fill="#ffd98a" class="jmy-glow jmy-g2"/><path d="M95 96v50M70 121h50" stroke="#e8e0d0" stroke-width="4"/>' +
      '<rect x="180" y="100" width="40" height="80" fill="#6a4a2a"/><circle cx="212" cy="142" r="2.5" fill="' + GOLD + '"/>' +
      /* porch roof, posts, floor */
      '<rect x="30" y="150" width="340" height="8" fill="#7a6a5a"/><rect x="40" y="200" width="320" height="10" fill="#8a6a4a"/>' + [44, 150, 250, 352].map(x => '<rect x="' + x + '" y="156" width="6" height="46" fill="#f4ecdc"/>').join("") +
      /* porch light */
      '<circle cx="236" cy="112" r="26" fill="#ffe08a" opacity=".25" class="jmy-glow"/><rect x="230" y="104" width="12" height="16" rx="2" fill="#ffe9a0"/><rect x="228" y="100" width="16" height="4" fill="#333"/>' +
      '<g class="jmy-moth"><path d="M250 96l4 -3l4 3l-4 2z" fill="#ddd"/></g><g class="jmy-moth jmy-m2"><path d="M222 100l4 -3l4 3l-4 2z" fill="#ccc"/></g>' +
      /* porch swing with guitar */
      '<path d="M270 158v26M330 158v26" stroke="#555" stroke-width="1.5"/><rect x="262" y="184" width="76" height="8" fill="#a8703a"/><rect x="262" y="172" width="76" height="4" fill="#a8703a"/>' +
      '<g transform="translate(300 160) rotate(-60)"><ellipse cx="0" cy="22" rx="10" ry="12" fill="#c08a4a"/><ellipse cx="0" cy="8" rx="7" ry="8" fill="#c08a4a"/><circle cx="0" cy="16" r="3" fill="#2a1a10"/><rect x="-1.5" y="-30" width="3" height="40" fill="#5a3a20"/></g>' +
      '<g fill="' + CREAM + '"><text class="jmy-note" x="140" y="150" font-size="16">&#9834;</text><text class="jmy-note jmy-n2" x="158" y="140" font-size="13">&#9835;</text><text class="jmy-note jmy-n3" x="128" y="132" font-size="12">&#9834;</text></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a4a2a"/>' +
      cap("GRANDPA'S PORCH  ·  THE FIRST GUITAR"),
      sky("jmy3", "#0e1424", "#2a3450"));
  }

  /* ROOM 3: the camper out in the red dirt where he started writing at 19, a storm building on the plains, lightning over the wheat */
  function jmycamper() {
    return svg(
      '<rect width="400" height="260" fill="url(#jmy4)"/>' +
      '<rect width="400" height="260" fill="#fff" class="jmy-flash"/>' +
      '<g class="jmy-cl"><ellipse cx="90" cy="40" rx="90" ry="26" fill="#3a3a4a"/><ellipse cx="260" cy="30" rx="110" ry="28" fill="#2e2e3c"/><ellipse cx="380" cy="50" rx="70" ry="22" fill="#3a3a4a"/></g>' +
      '<path class="jmy-bolt" d="M300 56l-14 40h12l-18 46l34 -58h-14l12 -28z" fill="#fff8c0"/>' +
      '<path d="M0 150q100 -10 200 0t200 -4V260H0z" fill="' + RED + '"/><path d="M0 176q120 -8 240 4t160 -2V260H0z" fill="#9a3a22"/>' +
      /* red dirt road */
      '<path d="M200 150L160 260h120z" fill="#c86a40"/>' +
      /* camper */
      '<g transform="translate(40 134)"><rect x="0" y="0" width="120" height="56" rx="16" fill="#f4ecdc"/><rect x="0" y="34" width="120" height="8" fill="' + SKY + '"/><rect x="14" y="10" width="34" height="18" rx="4" fill="#ffd98a" class="jmy-glow"/>' +
      '<rect x="74" y="10" width="22" height="40" rx="3" fill="#cfc6b4"/><circle cx="92" cy="32" r="1.6" fill="#555"/><circle cx="40" cy="60" r="10" fill="#222"/><circle cx="40" cy="60" r="4" fill="#888"/><path d="M120 46h26" stroke="#555" stroke-width="3"/></g>' +
      /* notebook and pen on a lawn chair */
      '<g transform="translate(196 186)"><path d="M0 0h30l4 22M2 0l-4 22" stroke="#7a7e84" stroke-width="2.5" fill="none"/><rect x="0" y="-4" width="30" height="6" fill="#2a5a8a"/><rect x="6" y="-12" width="16" height="10" fill="#fff" transform="rotate(-8 14 -7)"/></g>' +
      /* windmill */
      '<g transform="translate(330 96)"><path d="M0 70L10 0L20 70" stroke="#8a8e94" stroke-width="2.5" fill="none"/><circle cx="10" cy="0" r="3" fill="#8a8e94"/>' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<path d="M10 0l0 -16" stroke="#aab0b6" stroke-width="3" transform="rotate(' + a + ' 10 0)"/>').join("") + '</g>' +
      cap("THE CAMPER IN THE RED DIRT  ·  LIGHTNING ON THE PLAINS"),
      sky("jmy4", "#2a2a3a", "#7a6a7a"));
  }

  /* ROOM 4: his corner: Main St and Oklahoma St in Hennessey, a brick wall with his name, the grain elevator behind */
  function jmycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jmy5)"/>' +
      elevator(256, 44, 1, "#e4ded0") +
      '<path d="M0 168h400v92H0z" fill="#3a3a40"/><path d="M0 204h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="0" y="92" width="182" height="110" fill="#8a3a28"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (100 + r * 12) + 'h182" stroke="#5a2018" stroke-width="1.5"/>').join("") +
      tag("JOSH", 20, 140, 36, GOLD, -6) + tag("MELOY", 26, 182, 30, CREAM, -6) +
      '<circle cx="168" cy="150" r="3" fill="' + GOLD + '" class="jmy-sp"/><circle cx="174" cy="146" r="2" fill="' + GOLD + '" class="jmy-sp jmy-sp2"/>' +
      '<rect x="230" y="122" width="5" height="86" fill="#8a8e94"/>' + sign(184, 128, 98, "MAIN ST") + sign(176, 152, 114, "OKLAHOMA ST") +
      '<g transform="translate(296 200)">' + pickup(RED) + '</g>' +
      cap("MAIN ST & OKLAHOMA ST  ·  HENNESSEY, OKLAHOMA"),
      sky("jmy5", "#1a2a4a", "#e08a5a"));
  }

  window.SCENES = { jmyhwy, jmyelev, jmyporch, jmycamper, jmycorner };
})();
