/* ladygaga scenes (NYC map, Manhattan: raised on the Upper West Side, W 70th St; Convent of the Sacred Heart; early gigs downtown). CSS classes and ids prefixed lg- (the page's own anim-train is kept).
   1 66 St–Lincoln Center on the 1: underground, white tile wall with the red mosaic band, a silver 1 train sliding in.
   2 Convent of the Sacred Heart, 1 E 91st St: the pale limestone Italian palazzo (the old Kahn mansion) across from the park, leaves drifting.
   3 Bleecker Street, Greenwich Village: the little brick folk club where she played piano early on, spotlight sweeping, LIVE sign flickering.
   4 Stanton Street, Lower East Side: red-brick tenements with black fire escapes where she lived, a disco ball turning in a window, glitter falling.
   5 W 70th St and Amsterdam Av: green signs, GAGA tagged on the wall, the colored Egyptian-style terracotta of the Pythian building behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.25}55%{opacity:.95}}.lg-flk{animation:lgflick 2.4s infinite}.lg-flk2{animation-delay:.9s}' +
    '@keyframes lgleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(40px,250px) rotate(320deg)}}.lg-leaf{animation:lgleaf 7s linear infinite}.lg-leaf2{animation-delay:-2.3s}.lg-leaf3{animation-delay:-4.6s}' +
    '@keyframes lgbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.lg-beam{transform-box:view-box;transform-origin:200px 40px;animation:lgbeam 4s ease-in-out infinite}' +
    '@keyframes lgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.lg-ball{transform-box:fill-box;transform-origin:50% 50%;animation:lgspin 3s linear infinite}' +
    '@keyframes lgglit{0%{transform:translateY(0);opacity:1}100%{transform:translateY(120px);opacity:0}}.lg-gl{animation:lgglit 2.6s linear infinite}.lg-gl2{animation-delay:-.9s}.lg-gl3{animation-delay:-1.7s}' +
    '@keyframes lgcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.lg-car{animation:lgcar 7s linear infinite}' +
    '@keyframes lgcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.lg-carL{animation:lgcarL 8.5s linear infinite}' +
    '@keyframes lgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lg-sp{animation:lgspray 1.4s ease-out infinite}.lg-sp2{animation-delay:.45s}' +
    '@keyframes lgnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.lg-note{animation:lgnote 3s ease-out infinite}.lg-note2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, r, txt, color, dark) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + r * 0.38) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.15) + '" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const PINK = "#ff3ea5", GOLD = "#ffd23f", BLUE = "#3ad1ff", RED1 = "#ee352e";

  /* 1. 66 St–Lincoln Center (1), underground */
  function lgstation() {
    const tiles = Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (12 + i * 12) + 'h400" stroke="#d9d6cc" stroke-width="1"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v118" stroke="#d9d6cc" stroke-width="1"/>').join("");
    const mosaic = Array.from({ length: 10 }, (_, i) => '<path d="M' + (20 + i * 38) + ' 92q8 -14 16 0q-8 10 -16 0z" fill="' + (i % 2 ? "#c8452f" : "#e0a03a") + '"/><circle cx="' + (28 + i * 38) + '" cy="84" r="2.5" fill="#c8452f"/>').join("");
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 50) + '" y="146" width="36" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="136" width="336" height="66" rx="6" fill="#c9ced3" stroke="#6d757c" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (30 + i * 20) + ' 174v24" stroke="#aeb4ba" stroke-width="1.5"/>').join("") +
      '<rect x="336" y="140" width="20" height="58" rx="4" fill="#aeb4ba"/><circle cx="346" cy="192" r="3.5" fill="#fff6c2"/>' +
      bullet(310, 156, 9, "1", RED1) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#efece4"/>' + tiles +
      '<rect x="0" y="74" width="400" height="26" fill="#f6e8d0"/>' + mosaic + '<rect x="0" y="72" width="400" height="3" fill="#7a2a1e"/><rect x="0" y="99" width="400" height="3" fill="#7a2a1e"/>' +
      '<rect x="0" y="118" width="400" height="18" fill="#2a2a2a"/>' +
      '<rect x="56" y="16" width="250" height="40" rx="3" fill="#111"/><rect x="56" y="18" width="250" height="2" fill="#fff"/>' +
      '<text x="66" y="44" ' + font + ' font-size="19" fill="#fff">66 St–Lincoln Center</text>' + bullet(290, 37, 11, "1", RED1) +
      '<g class="lg-flk"><rect x="330" y="22" width="44" height="6" rx="2" fill="#fffbe6"/></g>' +
      train +
      '<rect x="0" y="202" width="400" height="58" fill="#8d8a84"/><rect x="0" y="202" width="400" height="7" fill="' + GOLD + '"/>' +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="205.5" r="1.3" fill="#a88d1a"/>').join("") +
      '<rect x="40" y="222" width="320" height="22" rx="4" fill="#111"/><text x="200" y="238" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">UPTOWN &amp; THE BRONX · DOWNTOWN &amp; BROOKLYN</text>');
  }

  /* 2. Convent of the Sacred Heart, 1 E 91st St (the pale limestone palazzo) */
  function lgschool() {
    const lime = "#e9e1cf", limeD = "#cfc4ab";
    const archRow = Array.from({ length: 7 }, (_, i) => '<path d="M' + (66 + i * 40) + ' 214v-26q12 -16 24 0v26z" fill="#3b3a36" stroke="' + limeD + '" stroke-width="2"/>').join("");
    const winRow = (y, h) => Array.from({ length: 7 }, (_, i) => '<rect x="' + (68 + i * 40) + '" y="' + y + '" width="20" height="' + h + '" fill="#4b5560" stroke="' + limeD + '" stroke-width="2"/><path d="M' + (64 + i * 40) + ' ' + (y - 3) + 'h28" stroke="' + limeD + '" stroke-width="3"/>').join("");
    const rust = Array.from({ length: 6 }, (_, i) => '<path d="M54 ' + (180 + i * 6) + 'h292" stroke="' + limeD + '" stroke-width="1"/>').join("");
    const leaf = (cls, x, c) => '<g class="lg-leaf ' + cls + '"><ellipse cx="' + x + '" cy="0" rx="4" ry="2.4" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lgs2)"/>' +
      '<rect x="54" y="58" width="292" height="160" fill="' + lime + '"/>' + rust +
      '<rect x="48" y="52" width="304" height="10" fill="' + limeD + '"/><rect x="44" y="46" width="312" height="7" fill="' + lime + '"/>' +
      Array.from({ length: 26 }, (_, i) => '<rect x="' + (50 + i * 12) + '" y="62" width="6" height="5" fill="' + limeD + '"/>').join("") +
      winRow(76, 30) + winRow(124, 36) + '<path d="M54 116h292M54 170h292" stroke="' + limeD + '" stroke-width="3"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (70 + i * 40) + ' 160h16" stroke="#2b2b2b" stroke-width="2"/>').join("") +
      archRow +
      '<rect x="0" y="214" width="400" height="46" fill="#8e8a82"/><rect x="0" y="214" width="400" height="5" fill="#bdb8ad"/>' +
      '<g fill="#2f5d34"><circle cx="18" cy="120" r="30"/><circle cx="380" cy="116" r="32"/><circle cx="8" cy="160" r="24"/><circle cx="394" cy="158" r="22"/></g>' +
      '<rect x="16" y="150" width="5" height="66" fill="#4a3424"/><rect x="378" y="148" width="5" height="68" fill="#4a3424"/>' +
      leaf("", 40, "#d9a43a") + leaf("lg-leaf2", 300, "#c8642c") + leaf("lg-leaf3", 180, "#e0b84a") +
      '<rect x="150" y="226" width="100" height="18" rx="3" fill="#111"/><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">1 E 91 ST · 5 AV</text>',
      sky("lgs2", "#9cc8ec", "#eef4f8"));
  }

  /* 3. Bleecker Street, Greenwich Village: the little brick folk club */
  function lgbleecker() {
    const bricks = Array.from({ length: 22 }, (_, i) => '<path d="M0 ' + (8 + i * 8) + 'h400" stroke="#5a2a20" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#7a3426"/>' + bricks +
      '<rect x="40" y="40" width="320" height="150" fill="#160c14"/>' +
      '<g class="lg-beam"><path d="M200 40l-60 150h120z" fill="#fff4c8" opacity=".18"/></g>' +
      '<rect x="40" y="168" width="320" height="22" fill="#3a2418"/>' +
      '<path d="M150 168v-34h70q22 0 22 16v18z" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><rect x="150" y="150" width="62" height="6" fill="#fff"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (153 + i * 7.5) + ' 150v6" stroke="#111" stroke-width="1"/>').join("") +
      '<rect x="252" y="120" width="3" height="48" fill="#888"/><ellipse cx="253.5" cy="118" rx="5" ry="7" fill="#444"/>' +
      '<g class="lg-note" fill="' + PINK + '"><circle cx="190" cy="130" r="4"/><path d="M194 130v-14h6" stroke="' + PINK + '" stroke-width="2" fill="none"/></g>' +
      '<g class="lg-note lg-note2" fill="' + BLUE + '"><circle cx="230" cy="124" r="4"/><path d="M234 124v-14h6" stroke="' + BLUE + '" stroke-width="2" fill="none"/></g>' +
      '<rect x="120" y="12" width="160" height="24" rx="4" fill="#111"/><text class="lg-flk" x="200" y="30" text-anchor="middle" ' + font + ' font-size="16" fill="' + PINK + '">LIVE MUSIC</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3d3d40"/><rect x="0" y="190" width="400" height="6" fill="#8d8a84"/>' +
      '<rect x="20" y="194" width="360" height="6" fill="#2a2a2a"/>' +
      '<rect x="110" y="226" width="180" height="18" rx="3" fill="#111"/><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BLEECKER ST · THE VILLAGE</text>');
  }

  /* 4. Stanton Street, Lower East Side: tenements, fire escapes, a disco ball in the window */
  function lgstanton() {
    const bld = (x, w, c) => '<rect x="' + x + '" y="40" width="' + w + '" height="170" fill="' + c + '"/><rect x="' + (x - 3) + '" y="34" width="' + (w + 6) + '" height="8" fill="#3a2a22"/>' +
      [56, 96, 136, 176].map(y => [0, 1, 2].map(j => '<rect x="' + (x + 10 + j * (w - 20) / 3) + '" y="' + y + '" width="' + ((w - 20) / 3 - 10) + '" height="24" fill="#222a33" stroke="#e8dccb" stroke-width="2"/>').join("")).join("");
    const fire = (x, w) => [84, 124, 164].map(y => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="3" fill="#111"/>' +
      Array.from({ length: Math.floor(w / 6) }, (_, i) => '<path d="M' + (x + i * 6) + ' ' + y + 'v-12" stroke="#111" stroke-width="1"/>').join("") + '<path d="M' + x + ' ' + (y - 12) + 'h' + w + '" stroke="#111" stroke-width="2"/>' +
      '<path d="M' + (x + 6) + ' ' + (y + 3) + 'l' + (w - 14) + ' 37" stroke="#111" stroke-width="2"/>').join("");
    const glit = (cls, x, c) => '<g class="lg-gl ' + cls + '"><rect x="' + x + '" y="92" width="3" height="3" fill="' + c + '" transform="rotate(45 ' + (x + 1.5) + ' 93.5)"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lgs4)"/>' +
      bld(10, 130, "#8a3a2c") + bld(146, 120, "#5d4a3e") + bld(272, 124, "#9a5236") +
      fire(26, 100) + fire(286, 96) +
      '<rect x="160" y="96" width="30" height="24" fill="#3a1440"/><g class="lg-ball"><circle cx="175" cy="104" r="8" fill="#d8dce4"/><path d="M167 104h16M175 96v16M169 99h12M169 109h12" stroke="#8a90a0" stroke-width="1"/></g>' +
      glit("", 168, PINK) + glit("lg-gl2", 178, GOLD) + glit("lg-gl3", 186, BLUE) +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4a4f"/><rect x="0" y="206" width="400" height="6" fill="#b9b3a8"/><path d="M0 238h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("lg-car", 0, 226, "#f2c94c") + car("lg-carL", 0, 244, "#d24a8a") +
      '<rect x="100" y="8" width="200" height="20" rx="3" fill="#111"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">STANTON ST · LOWER EAST SIDE</text>',
      sky("lgs4", "#3a2a5a", "#d77fa0"));
  }

  /* 5. W 70th St and Amsterdam Av, the Pythian building behind */
  function lgcorner() {
    const cream = "#efe3c4";
    const col = x => '<rect x="' + x + '" y="40" width="12" height="62" fill="' + cream + '" stroke="#b49a62" stroke-width="1"/><path d="M' + (x - 5) + ' 40q11 -14 22 0z" fill="#3a8a7a"/><path d="M' + (x - 3) + ' 38q9 -8 18 0" stroke="' + GOLD + '" stroke-width="2" fill="none"/>';
    const frieze = Array.from({ length: 18 }, (_, i) => '<rect x="' + (60 + i * 16) + '" y="22" width="16" height="10" fill="' + ["#2a5fb0", "#c8452f", GOLD][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lgs5)"/>' +
      '<rect x="50" y="18" width="300" height="110" fill="' + cream + '"/>' + frieze + '<rect x="50" y="32" width="300" height="4" fill="#b49a62"/>' +
      [70, 110, 150, 230, 270, 310].map(col).join("") +
      '<path d="M180 102v-56h40v56z" fill="#2a5fb0"/><path d="M200 50l12 18h-24z" fill="' + GOLD + '"/><circle cx="200" cy="80" r="8" fill="#c8452f"/>' +
      '<rect x="0" y="120" width="400" height="104" fill="#6b6f78"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#5a5e66" stroke-width="1"/>').join("") +
      tag("GAGA", 26, 196, 64, PINK, -6) + tag("PAWS UP", 196, 212, 22, GOLD, -4) + tag("HAUS OF GAGA", 30, 216, 16, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "W 70 St") + sign(250, 124, 140, "Amsterdam Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="lg-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="lg-sp"><circle cx="186" cy="170" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="lg-sp lg-sp2"><circle cx="192" cy="164" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("lgs5", "#26285a", "#f29ab8"));
  }

  window.SCENES = { lgstation: lgstation, lgschool: lgschool, lgbleecker: lgbleecker, lgstanton: lgstanton, lgcorner: lgcorner };
})();
