/* janellemonae scenes (Regions tab: Kansas City; Quindaro, Kansas City, Kansas - she grew up around 21st St and Quindaro, her great-grandmother's house a short walk from the John Brown statue). CSS classes and ids prefixed jm- (the page's own anim-train is kept on the bus).
   1 RideKC route 106 (Quindaro/Leavenworth Rd) pulling up at Quindaro Blvd and N 27th St: little frame houses, a red-brick church steeple, the bus sliding in.
   2 The Quindaro Ruins overlook: limestone foundation walls of the 1856 free-state town on the bluff, the Missouri River below, a lantern boat drifting across toward the Parkville bluffs (Underground Railroad crossing).
   3 F.L. Schlagle High School in KCK, her school: long brick front, glass entry, the flag waving, music notes floating out.
   4 The Coterie Theatre at Crown Center, where she came up in the Young Playwrights' Round Table: red curtains, a sweeping spotlight, a black-and-white tuxedo jacket and bow tie waiting on the stage.
   5 N 27th St and Sewell Ave: green signs, JANELLE MONAE tagged on the brick wall, the pale stone John Brown statue on its tall pedestal (old Western University gate) on the hill behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jmglow{0%,100%{opacity:.45}50%{opacity:1}}.jm-glow{animation:jmglow 2.6s ease-in-out infinite}.jm-glow2{animation-delay:-1.3s}' +
    '@keyframes jmflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.92)}}.jm-flag{transform-box:fill-box;transform-origin:0% 50%;animation:jmflag 1.4s ease-in-out infinite}' +
    '@keyframes jmsway{0%,100%{transform:skewX(-2deg)}50%{transform:skewX(2deg)}}.jm-sway{transform-box:fill-box;transform-origin:50% 0%;animation:jmsway 3s ease-in-out infinite}.jm-sway2{animation-delay:-1.5s}' +
    '@keyframes jmnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.jm-note{animation:jmnote 3.4s linear infinite}.jm-n2{animation-delay:-1.1s}.jm-n3{animation-delay:-2.2s}' +
    '@keyframes jmboat{0%{transform:translateX(0)}100%{transform:translateX(250px)}}.jm-boat{animation:jmboat 16s linear infinite}' +
    '@keyframes jmripple{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.jm-rip{animation:jmripple 3s ease-in-out infinite}.jm-rip2{animation-delay:-1.5s}' +
    '@keyframes jmspot{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jm-spot{transform-box:view-box;transform-origin:200px 0px;animation:jmspot 5s ease-in-out infinite}' +
    '@keyframes jmbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.jm-bird{animation:jmbird 15s linear infinite}' +
    '@keyframes jmleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(30px,120px) rotate(220deg);opacity:0}}.jm-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:jmleaf 4.4s linear infinite}.jm-l2{animation-delay:-1.5s}.jm-l3{animation-delay:-2.9s}' +
    '@keyframes jmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jm-sp{animation:jmspray 1.4s ease-out infinite}.jm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "jm-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const IVORY = "#f4efe6", GOLD = "#d4af37", PINK = "#e0457b", INK = "#14121a", BLUE = "#0072bc";
  /* little KCK frame houses with porches */
  const houses = (x0, y, n) => {
    const sid = ["#d9cdb4", "#a9b8c2", "#c9a88a", "#e6dcc8", "#b9c4a8"]; let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + i * 62;
      s += '<path d="M' + x + ' ' + (y + 18) + 'l28 -22l28 22z" fill="#4a3a36"/>' +
        '<rect x="' + (x + 4) + '" y="' + (y + 18) + '" width="48" height="44" fill="' + sid[i % 5] + '" stroke="#5a4a40" stroke-width="1"/>' +
        '<rect x="' + (x + 10) + '" y="' + (y + 26) + '" width="11" height="12" fill="#ffe6a8" class="' + (i % 2 ? "jm-glow" : "jm-glow jm-glow2") + '"/><rect x="' + (x + 33) + '" y="' + (y + 26) + '" width="11" height="12" fill="#2c3440"/>' +
        '<rect x="' + (x + 2) + '" y="' + (y + 44) + '" width="52" height="4" fill="#f2efe8"/><rect x="' + (x + 6) + '" y="' + (y + 48) + '" width="3" height="14" fill="#f2efe8"/><rect x="' + (x + 47) + '" y="' + (y + 48) + '" width="3" height="14" fill="#f2efe8"/>' +
        '<rect x="' + (x + 24) + '" y="' + (y + 46) + '" width="9" height="16" fill="#5a3a2a"/>';
    }
    return s;
  };

  /* 1. Quindaro Blvd & N 27th St, RideKC 106 */
  function jmstop() {
    const bus = '<g class="anim-train"><rect x="40" y="126" width="300" height="76" rx="10" fill="#f4f6f8" stroke="#7a8088" stroke-width="2"/>' +
      '<rect x="300" y="132" width="36" height="42" rx="4" fill="#1f2830"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="136" width="32" height="26" rx="3" fill="#1f2830"/>').join("") +
      '<path d="M40 176h300v10h-300z" fill="' + BLUE + '"/><path d="M40 172h300v3h-300z" fill="#4fc3c8"/>' +
      '<rect x="302" y="118" width="34" height="11" rx="2" fill="#111"/><text x="319" y="127" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">106</text>' +
      '<rect x="56" y="129" width="92" height="6" rx="2" fill="#111"/><text x="102" y="134" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">106 QUINDARO</text>' +
      '<circle cx="332" cy="192" r="4" fill="#fff6c2"/>' +
      '<circle cx="96" cy="203" r="10" fill="#2a2a2a"/><circle cx="96" cy="203" r="4" fill="#9a9a9a"/><circle cx="286" cy="203" r="10" fill="#2a2a2a"/><circle cx="286" cy="203" r="4" fill="#9a9a9a"/></g>';
    const church = '<rect x="318" y="50" width="70" height="72" fill="#8a3e2e" stroke="#5a2a1e"/><path d="M340 50v-22l13 -12l13 12v22z" fill="#7a3426"/><path d="M349 9h8M353 4v10" stroke="#e8e0d0" stroke-width="2"/>' +
      '<path d="M345 76q8 -14 16 0v22h-16z" fill="#e0457b" opacity=".8" class="jm-glow"/><path d="M326 70q5 -9 10 0v16h-10zM370 70q5 -9 10 0v16h-10z" fill="#d4af37" opacity=".85" class="jm-glow jm-glow2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jm-s1)"/>' + stars(14) +
      '<g class="jm-bird"><path d="M0 34q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a2a3a" stroke-width="1.5"/></g>' +
      tree(20, 86, 1.6, "#2f5a3a") + houses(30, 60, 5) + church +
      '<rect x="0" y="122" width="400" height="10" fill="#b8b2a6"/>' +
      '<rect x="0" y="132" width="400" height="80" fill="#5a5856"/><path d="M0 172h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="0" y="212" width="400" height="48" fill="#b8b2a6"/>' +
      '<rect x="360" y="150" width="4" height="62" fill="#3a3a3a"/><rect x="348" y="136" width="28" height="20" rx="2" fill="#fff" stroke="' + BLUE + '" stroke-width="2"/><text x="362" y="144" text-anchor="middle" ' + font + ' font-size="6" fill="' + BLUE + '">BUS</text><text x="362" y="153" text-anchor="middle" ' + font + ' font-size="8" fill="#111">106</text>' +
      '<rect x="8" y="8" width="230" height="40" rx="4" fill="#111" stroke="#333"/>' +
      '<text x="18" y="25" ' + font + ' font-size="12" fill="#fff">Quindaro Blvd &amp; N 27th St</text>' +
      '<text x="18" y="40" ' + font + ' font-size="8" fill="#bbb">KANSAS CITY, KANSAS</text>' +
      '<circle cx="222" cy="28" r="11" fill="' + BLUE + '"/><text x="222" y="31.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">106</text>',
      sky("jm-s1", "#2a2448", "#e8a27a"));
  }

  /* 2. Quindaro Ruins overlook, Missouri River, Underground Railroad crossing */
  function jmruins() {
    const wall = (x, y, w, h) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#c9b58f" stroke="#8a7656" stroke-width="1.2"/>';
      for (let r = 0; r < h / 7; r++) for (let c = 0; c < w / 14; c++) if (c * 14 + (r % 2 ? 7 : 0) + 13 <= w) s += '<rect x="' + (x + c * 14 + (r % 2 ? 7 : 0)) + '" y="' + (y + r * 7) + '" width="13" height="6" fill="none" stroke="#a8946e" stroke-width=".7"/>';
      return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#jm-s2)"/>' + stars(26) +
      '<circle cx="320" cy="40" r="16" fill="#f6efd0"/><circle cx="326" cy="36" r="14" fill="#1c2244" opacity=".55"/>' +
      '<path d="M0 104q60 -22 120 -10t130 -8t150 6v20h-400z" fill="#2c4a3c"/>' +
      tree(70, 100, .8, "#264232") + tree(150, 96, .7, "#2a4836") + tree(240, 98, .8, "#264232") + tree(330, 100, .7, "#2a4836") +
      '<text x="236" y="86" ' + font + ' font-size="7" fill="#c9d6c0" opacity=".8">PARKVILLE, MO</text>' +
      '<rect x="0" y="110" width="400" height="60" fill="#3a5470"/>' +
      '<g class="jm-rip"><path d="M10 124h40M90 132h50M200 122h40M300 136h60M150 150h40M40 156h30" stroke="#8fb0c8" stroke-width="1.5" opacity=".6"/></g>' +
      '<g class="jm-rip jm-rip2"><path d="M60 142h30M250 148h50M340 120h30M120 120h20" stroke="#8fb0c8" stroke-width="1.2" opacity=".5"/></g>' +
      '<g class="jm-boat"><path d="M60 138h36l-6 8h-24z" fill="#5a3e28"/><path d="M78 138v-14" stroke="#3a2a1a" stroke-width="1.5"/><circle cx="78" cy="122" r="4" fill="#ffd27a" class="jm-glow"/><circle cx="78" cy="122" r="9" fill="#ffd27a" opacity=".25" class="jm-glow"/></g>' +
      '<path d="M0 170q80 -14 200 -6t200 2v94h-400z" fill="#5a6a3a"/><path d="M0 196q100 -10 200 0t200 -4v68h-400z" fill="#4a5a30"/>' +
      wall(40, 176, 84, 28) + wall(150, 184, 56, 21) + wall(250, 172, 98, 35) + '<rect x="290" y="180" width="18" height="27" fill="#2a2a20"/>' +
      tree(16, 212, 1.4, "#3a5a2a") + tree(384, 214, 1.5, "#3a5a2a") +
      '<rect x="96" y="228" width="208" height="22" rx="3" fill="#5a3e28" stroke="#d4af37" stroke-width="1.5"/>' +
      '<text x="200" y="243" text-anchor="middle" ' + font + ' font-size="9" fill="#f4efe6" letter-spacing="1">QUINDARO RUINS · FREE-STATE TOWN, 1856</text>',
      sky("jm-s2", "#0e1430", "#3a3f6a"));
  }

  /* 3. F.L. Schlagle High School */
  function jmschool() {
    let wins = ""; for (let i = 0; i < 10; i++) wins += '<rect x="' + (34 + i * 34) + '" y="104" width="24" height="16" fill="#2c3a4a" stroke="#d9cfc0" stroke-width="1.2"/><rect x="' + (34 + i * 34) + '" y="134" width="24" height="16" fill="#2c3a4a" stroke="#d9cfc0" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jm-s3)"/>' +
      '<g class="jm-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0M24 30q4 -4 8 0q4 -4 8 0" fill="none" stroke="#3a3a4a" stroke-width="1.5"/></g>' +
      tree(10, 150, 2, "#3f7a3a") + tree(392, 150, 2, "#3f7a3a") +
      '<rect x="20" y="92" width="360" height="98" fill="#9a5a3c" stroke="#6a3a26" stroke-width="2"/><rect x="20" y="86" width="360" height="8" fill="#e6dcc8"/>' + wins +
      '<rect x="160" y="76" width="80" height="114" fill="#a8663f" stroke="#6a3a26" stroke-width="2"/><rect x="156" y="70" width="88" height="8" fill="#e6dcc8"/>' +
      '<rect x="170" y="120" width="60" height="70" fill="#3a5a7a" stroke="#e6dcc8" stroke-width="2"/><path d="M200 120v70M170 150h60" stroke="#e6dcc8" stroke-width="1.5"/>' +
      '<rect x="40" y="160" width="100" height="16" fill="#e6dcc8"/><text x="90" y="172" text-anchor="middle" ' + font + ' font-size="9" fill="#6a3a26" letter-spacing="1">F.L. SCHLAGLE</text>' +
      '<rect x="260" y="160" width="100" height="16" fill="#e6dcc8"/><text x="310" y="172" text-anchor="middle" ' + font + ' font-size="9" fill="#6a3a26" letter-spacing="1">HIGH SCHOOL</text>' +
      '<rect x="252" y="20" width="3" height="56" fill="#cfcfcf"/><g class="jm-flag"><rect x="255" y="22" width="34" height="20" fill="#b22234"/><rect x="255" y="25" width="34" height="2.5" fill="#fff"/><rect x="255" y="31" width="34" height="2.5" fill="#fff"/><rect x="255" y="37" width="34" height="2.5" fill="#fff"/><rect x="255" y="22" width="14" height="11" fill="#3c3b6e"/></g>' +
      '<g class="jm-note"><text x="182" y="114" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="jm-note jm-n2"><text x="208" y="110" font-size="14" fill="' + PINK + '">&#9835;</text></g><g class="jm-note jm-n3"><text x="196" y="116" font-size="12" fill="' + IVORY + '">&#9834;</text></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#7a9a5a"/><path d="M170 190h60l30 70h-120z" fill="#c9c2b2"/>' +
      '<rect x="20" y="224" width="120" height="26" rx="3" fill="#111" stroke="' + GOLD + '"/><text x="80" y="234" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">TONIGHT</text><text x="80" y="245" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">SPRING CHOIR SHOW</text>',
      sky("jm-s3", "#7ab0e0", "#e8f0f4"));
  }

  /* 4. The Coterie Theatre stage, Young Playwrights' Round Table */
  function jmcoterie() {
    let seats = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 14; c++) seats += '<rect x="' + (8 + c * 28 + (r % 2) * 14) + '" y="' + (212 + r * 16) + '" width="22" height="12" rx="4" fill="#7a1a2a" stroke="#3a0a12"/>';
    return svg(
      '<rect width="400" height="260" fill="#0c0a10"/>' +
      '<rect x="40" y="30" width="320" height="150" fill="#1a1620"/>' +
      '<g class="jm-spot"><path d="M200 0l-44 180h88z" fill="#fff4d0" opacity=".16"/></g>' +
      '<ellipse cx="200" cy="176" rx="70" ry="10" fill="#fff4d0" opacity=".25"/>' +
      '<rect x="40" y="176" width="320" height="10" fill="#6a4a2a"/><rect x="30" y="186" width="340" height="20" fill="#4a3220"/>' +
      '<g class="jm-sway"><path d="M0 0h80q-8 60 0 120t-10 70h-70z" fill="#9a1a2a"/><path d="M14 0v190M34 0v190M54 0v185" stroke="#6a0e1a" stroke-width="3"/></g>' +
      '<g class="jm-sway jm-sway2"><path d="M400 0h-80q8 60 0 120t10 70h70z" fill="#9a1a2a"/><path d="M386 0v190M366 0v190M346 0v185" stroke="#6a0e1a" stroke-width="3"/></g>' +
      '<path d="M0 0h400v26q-100 14 -200 0t-200 0z" fill="#b8243a"/><path d="M0 22q100 14 200 0t200 0" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="198" y="84" width="4" height="92" fill="#3a3a3a"/><path d="M180 92h40" stroke="#3a3a3a" stroke-width="3"/>' +
      '<path d="M184 94l16 -4 16 4 6 50h-44z" fill="#111" stroke="#2a2a2a"/><path d="M194 92l6 24 6 -24z" fill="#f4f4f0"/><path d="M193 96l7 -3 7 3-7 3z" fill="#111"/><path d="M200 116v26" stroke="#2a2a2a"/><circle cx="200" cy="122" r="1.4" fill="#f4f4f0"/><circle cx="200" cy="130" r="1.4" fill="#f4f4f0"/>' +
      '<rect x="252" y="150" width="20" height="26" fill="#5a3e28"/><rect x="246" y="144" width="32" height="8" fill="#6a4a30"/><path d="M250 146l24 -6l2 6l-24 6z" fill="#f4efe6"/><path d="M254 146l16 -4M255 149l16 -4" stroke="#999" stroke-width=".7"/>' +
      '<g class="jm-note"><text x="120" y="150" font-size="14" fill="' + GOLD + '">&#9834;</text></g><g class="jm-note jm-n2"><text x="290" y="140" font-size="12" fill="' + PINK + '">&#9835;</text></g>' +
      seats +
      '<rect x="110" y="40" width="180" height="18" rx="3" fill="#111" stroke="' + GOLD + '"/><text x="200" y="53" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="1">YOUNG PLAYWRIGHTS ROUND TABLE</text>');
  }

  /* 5. N 27th St and Sewell Ave, the John Brown statue behind */
  function jmcorner() {
    let bricks = ""; for (let r = 0; r < 14; r++) for (let c = 0; c < 18; c++) bricks += '<rect x="' + (c * 22 + (r % 2 ? 11 : 0) - 11) + '" y="' + (128 + r * 9) + '" width="21" height="8" fill="' + ["#8a3e2e", "#7e3a2c", "#94462f"][(r + c) % 3] + '"/>';
    const statue = '<rect x="150" y="96" width="34" height="30" fill="#d9d4c8"/><rect x="146" y="90" width="42" height="8" fill="#e6e1d6"/><rect x="154" y="54" width="26" height="38" fill="#cfcabd"/><rect x="150" y="50" width="34" height="6" fill="#e6e1d6"/>' +
      '<path d="M161 50l1 -18h10l1 18z" fill="#bdb8ab"/><path d="M162 34q-6 -2 -8 6l2 10h4z" fill="#bdb8ab"/><path d="M172 34q8 0 9 -8" fill="none" stroke="#bdb8ab" stroke-width="3" stroke-linecap="round"/><circle cx="167" cy="27" r="5" fill="#bdb8ab"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jm-s5)"/>' +
      '<path d="M0 126q60 -40 140 -30t140 0t120 20v10z" fill="#4a6a3a"/>' + tree(60, 104, 1.1, "#3f6a32") + tree(250, 100, 1.2, "#3f6a32") + tree(330, 106, 1, "#4a7a3a") + statue +
      '<g class="jm-leaf"><ellipse cx="240" cy="70" rx="3" ry="2" fill="#d4af37"/></g><g class="jm-leaf jm-l2"><ellipse cx="80" cy="78" rx="3" ry="2" fill="#c96a2a"/></g><g class="jm-leaf jm-l3"><ellipse cx="300" cy="74" rx="3" ry="2" fill="#d4af37"/></g>' +
      bricks +
      tag("JANELLE MONÁE", 22, 196, 34, PINK, -5) + tag("WONDALAND", 60, 236, 18, GOLD, -3) +
      '<rect x="0" y="252" width="400" height="8" fill="#6a6a6a"/>' +
      '<rect x="356" y="98" width="6" height="154" fill="#2f2f2f"/>' + sign(300, 100, 100, "N 27th St") + sign(296, 126, 104, "Sewell Ave") +
      '<g class="jm-sp"><circle cx="248" cy="170" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="jm-sp jm-sp2"><circle cx="254" cy="164" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("jm-s5", "#f0a24e", "#fbe0a8"));
  }

  window.SCENES = { jmstop: jmstop, jmruins: jmruins, jmschool: jmschool, jmcoterie: jmcoterie, jmcorner: jmcorner };
})();
