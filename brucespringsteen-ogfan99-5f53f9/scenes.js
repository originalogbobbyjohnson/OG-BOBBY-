/* brucespringsteen scenes (NYC map, New Jersey: raised in Freehold Borough, Monmouth County; 87 Randolph St next to St. Rose of Lima, then Institute St and South St). 400 x 260 SVGs.
   CSS classes prefixed bs- (the page's own anim-train is kept on the bus).
   0 NJ Transit bus at the Freehold Center stop on Main St: blue-striped NJT bus pulling in, the stop sign with the 67 and 139 badges, the Hall of Records dome behind.
   1 Freehold Raceway: the harness track, a trotter pulling a sulky around the rail, the grandstand, the infield tote board.
   2 Asbury Park boardwalk: Convention Hall's copper-green roofs, the boardwalk planks, waves rolling in, the fortune teller's little booth.
   3 Highway 9 at night ("sprung from cages on highway nine"): US 9 shield, a chrome-wheeled car racing by, stars over the pines.
   4 Randolph St and McLean St, Freehold: green signs, BRUCE tagged with a guitar, St. Rose of Lima church's steeple behind. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8c547", DENIM = "#3b6fb6", RED = "#d23a2f", CREAM = "#f3ead6", BRICK = "#9a4a34";
  const css = '<style>' +
    '@keyframes bsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.95}}.bs-flk{animation:bsflick 2.8s infinite}' +
    '@keyframes bstrot{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.bs-trot{animation:bstrot 7s linear infinite}' +
    '@keyframes bsleg{0%,100%{transform:rotate(18deg)}50%{transform:rotate(-18deg)}}.bs-leg{transform-box:fill-box;transform-origin:50% 0;animation:bsleg .5s ease-in-out infinite}.bs-leg2{animation-delay:-.25s}' +
    '@keyframes bswave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.bs-wave{animation:bswave 4s ease-in-out infinite}.bs-wave2{animation-delay:-2s}' +
    '@keyframes bsgull{0%{transform:translate(0,0)}50%{transform:translate(40px,-8px)}100%{transform:translate(80px,0)}}.bs-gull{animation:bsgull 8s ease-in-out infinite alternate}.bs-g2{animation-delay:-3s}' +
    '@keyframes bscar{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.bs-car{animation:bscar 4.5s linear infinite}' +
    '@keyframes bsline{from{transform:translateX(0)}to{transform:translateX(-60px)}}.bs-line{animation:bsline .6s linear infinite}' +
    '@keyframes bstw{0%,100%{opacity:.3}50%{opacity:1}}.bs-tw{animation:bstw 2.4s ease-in-out infinite}.bs-tw2{animation-delay:-1.2s}' +
    '@keyframes bsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.bs-sp{animation:bsspray 1.4s ease-out infinite}.bs-spb{animation-delay:.5s}' +
    '@keyframes bsnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.bs-note{animation:bsnote 3s ease-out infinite}.bs-n2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 6 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const pine = (x, y, s, c) => '<rect x="' + (x - 1.5 * s) + '" y="' + (y - 4 * s) + '" width="' + (3 * s) + '" height="' + (8 * s) + '" fill="#3a2a1a"/><path d="M' + x + ' ' + (y - 40 * s) + 'l' + (12 * s) + ' ' + (22 * s) + 'h' + (-6 * s) + 'l' + (10 * s) + ' ' + (18 * s) + 'h' + (-32 * s) + 'l' + (10 * s) + ' ' + (-18 * s) + 'h' + (-6 * s) + 'z" fill="' + c + '"/>';
  const badge = (x, y, n) => '<rect x="' + x + '" y="' + y + '" width="26" height="16" rx="4" fill="#fff"/><text x="' + (x + 13) + '" y="' + (y + 12) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#0039a6">' + n + '</text>';

  /* 0: NJ Transit bus at Freehold Center */
  function bsbus() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (96 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#2a3a4a"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="116" width="300" height="78" rx="10" fill="#f4f6f8" stroke="#8a929c" stroke-width="2"/>' +
      '<rect x="60" y="158" width="300" height="6" fill="#0039a6"/><rect x="60" y="164" width="300" height="4" fill="#ff6319"/><rect x="60" y="168" width="300" height="4" fill="#a1338f"/>' + wins +
      '<rect x="64" y="124" width="26" height="40" rx="3" fill="#2a3a4a"/><rect x="66" y="118" width="70" height="8" rx="2" fill="#111"/><text x="101" y="125" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">139 FREEHOLD</text>' +
      '<circle cx="110" cy="196" r="13" fill="#222"/><circle cx="110" cy="196" r="5" fill="#aaa"/><circle cx="310" cy="196" r="13" fill="#222"/><circle cx="310" cy="196" r="5" fill="#aaa"/><circle cx="64" cy="180" r="4" fill="#fff6c2"/></g>';
    /* Monmouth County Hall of Records: pale stone, columns, a dome */
    const hall = '<g transform="translate(120 20)"><rect x="0" y="40" width="160" height="58" fill="#e9e3d6" stroke="#b8ad98" stroke-width="1.5"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (22 + i * 22) + '" y="52" width="8" height="46" fill="#f7f2e7" stroke="#c9bfa8" stroke-width="1"/>').join("") +
      '<path d="M-6 42h172l-86 -16z" fill="#ddd4c2" stroke="#b8ad98" stroke-width="1.5"/><rect x="60" y="8" width="40" height="18" fill="#e9e3d6" stroke="#b8ad98" stroke-width="1.5"/>' +
      '<path d="M58 10q22 -26 44 0z" fill="#7fa894" stroke="#4f7a66" stroke-width="1.5"/><rect x="78" y="-12" width="4" height="10" fill="#4f7a66"/></g>';
    return svg('<rect width="400" height="260" fill="url(#bss0)"/>' + hall +
      tree(60, 112, 1.2, "#3a7a44") + tree(350, 112, 1.1, "#2f6b3a") +
      '<rect x="0" y="108" width="400" height="8" fill="#9aa08a"/><rect x="0" y="116" width="400" height="94" fill="#55565c"/>' + bus +
      '<rect x="0" y="210" width="400" height="50" fill="#b8b2a6"/><rect x="0" y="208" width="400" height="4" fill="#ddd"/>' +
      '<rect x="360" y="44" width="5" height="170" fill="#7a7f86"/><rect x="326" y="26" width="70" height="48" rx="3" fill="#0039a6" stroke="#fff" stroke-width="2"/>' +
      '<text x="361" y="42" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">NJ TRANSIT</text>' + badge(331, 50, "67") + badge(364, 50, "139") +
      '<rect x="20" y="222" width="210" height="20" rx="2" fill="#111"/><text x="125" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Freehold Center · Main St</text>' +
      '<circle class="bs-flk" cx="362" cy="78" r="3" fill="#fff3c2"/>',
      sky("bss0", "#8ec6e8", "#eef0e6"));
  }

  /* 1: Freehold Raceway */
  function bsraceway() {
    const horse = '<g class="bs-trot"><g transform="translate(0 150)">' +
      '<rect x="10" y="22" width="34" height="3" fill="#555"/><circle cx="14" cy="34" r="12" fill="none" stroke="#333" stroke-width="2.5"/><path d="M14 22v24M2 34h24" stroke="#777" stroke-width="1"/>' +
      '<rect x="20" y="8" width="10" height="14" rx="3" fill="' + RED + '"/><circle cx="25" cy="4" r="5" fill="' + GOLD + '"/>' +
      '<rect x="44" y="12" width="40" height="16" rx="8" fill="#6b3f22"/><path d="M82 16l12 -14 6 4 -10 16z" fill="#6b3f22"/><path d="M96 2l4 -4 2 6z" fill="#3a2010"/>' +
      '<rect class="bs-leg" x="50" y="26" width="4" height="20" fill="#5a331a"/><rect class="bs-leg bs-leg2" x="58" y="26" width="4" height="20" fill="#5a331a"/>' +
      '<rect class="bs-leg bs-leg2" x="72" y="26" width="4" height="20" fill="#5a331a"/><rect class="bs-leg" x="78" y="26" width="4" height="20" fill="#5a331a"/>' +
      '<path d="M44 16q-8 4 -6 14" stroke="#3a2010" stroke-width="3" fill="none"/></g></g>';
    const stand = '<g><rect x="20" y="40" width="250" height="70" fill="#d9d2c2" stroke="#9a907c" stroke-width="1.5"/><path d="M10 40h270l-20 -18h-230z" fill="' + DENIM + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="20" y="' + (56 + i * 10) + '" width="250" height="3" fill="#b8ae98"/>').join("") +
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + (30 + i * 10) + '" cy="' + (62 + (i % 4) * 10) + '" r="3" fill="' + ["#d23a2f", "#3b6fb6", "#e8c547", "#f3ead6"][i % 4] + '"/>').join("") +
      '<rect x="20" y="22" width="250" height="0" fill="none"/></g>';
    const tote = '<g transform="translate(296 46)"><rect x="0" y="0" width="84" height="44" fill="#111" stroke="#444" stroke-width="2"/><text x="42" y="14" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">FREEHOLD RACEWAY</text>' +
      '<text class="bs-flk" x="42" y="34" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="14" fill="#ff8c2a">1 4 7 2</text><rect x="38" y="44" width="8" height="40" fill="#555"/></g>';
    return svg('<rect width="400" height="260" fill="url(#bss1)"/>' + stand + tote +
      '<rect x="0" y="110" width="400" height="20" fill="#3f8a46"/><rect x="0" y="128" width="400" height="4" fill="#f4f4f4"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 21) + '" y="122" width="3" height="8" fill="#f4f4f4"/>').join("") +
      '<rect x="0" y="132" width="400" height="80" fill="#b98a5a"/><path d="M0 170h400" stroke="#a87a4c" stroke-width="2" stroke-dasharray="6 10"/>' + horse +
      '<rect x="0" y="212" width="400" height="48" fill="#3f8a46"/><rect x="0" y="210" width="400" height="4" fill="#f4f4f4"/>',
      sky("bss1", "#7fb8e6", "#f2ecd8"));
  }

  /* 2: Asbury Park boardwalk + Convention Hall */
  function bsboardwalk() {
    const hall = '<g transform="translate(150 42)"><rect x="0" y="46" width="230" height="64" fill="#e2cfa8" stroke="#a88f62" stroke-width="1.5"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (10 + i * 24) + ' 110v-34q8 -12 16 0v34z" fill="#3a4a5a" stroke="#a88f62" stroke-width="1"/>').join("") +
      '<path d="M-6 48l40 -26h162l40 26z" fill="#6fa58e" stroke="#3f6f5a" stroke-width="1.5"/><path d="M80 22l35 -24 35 24z" fill="#6fa58e" stroke="#3f6f5a" stroke-width="1.5"/>' +
      '<rect x="18" y="4" width="22" height="24" fill="#e2cfa8" stroke="#a88f62" stroke-width="1"/><path d="M14 6l15 -12 15 12z" fill="#6fa58e"/>' +
      '<rect x="190" y="4" width="22" height="24" fill="#e2cfa8" stroke="#a88f62" stroke-width="1"/><path d="M186 6l15 -12 15 12z" fill="#6fa58e"/></g>';
    const booth = '<g transform="translate(40 92)"><rect x="0" y="20" width="56" height="58" fill="#5b8fd0" stroke="#2a4a7a" stroke-width="2"/><path d="M-4 22l32 -20 32 20z" fill="#2a4a7a"/>' +
      '<rect x="8" y="30" width="40" height="22" fill="#f3ead6"/><text x="28" y="40" text-anchor="middle" ' + font + ' font-size="6" fill="#2a4a7a">FORTUNES</text><text x="28" y="49" text-anchor="middle" ' + font + ' font-size="6" fill="#d23a2f">TOLD</text>' +
      '<circle class="bs-flk" cx="28" cy="64" r="6" fill="#bfe3ff" stroke="#fff" stroke-width="1.5"/></g>';
    const gull = (x, y, c) => '<path class="bs-gull ' + c + '" d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2.5" fill="none"/>';
    return svg('<rect width="400" height="260" fill="url(#bss2)"/>' + gull(60, 40, "") + gull(120, 26, "bs-g2") +
      '<rect x="0" y="120" width="400" height="40" fill="#2f7fb3"/>' +
      '<path class="bs-wave" d="M-20 132q15 -8 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" stroke="#e8f6ff" stroke-width="3" fill="none"/>' +
      '<path class="bs-wave bs-wave2" d="M-20 146q15 -8 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" stroke="#bfe3f4" stroke-width="2.5" fill="none"/>' +
      hall + '<rect x="0" y="152" width="400" height="18" fill="#e9d9b0"/>' + booth +
      '<rect x="0" y="170" width="400" height="90" fill="#a8774a"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="0" y="' + (172 + i * 10) + '" width="400" height="2" fill="#7f5733"/>').join("") +
      '<rect x="0" y="166" width="400" height="5" fill="#6b4a2a"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (8 + i * 38) + '" y="150" width="3" height="18" fill="#6b4a2a"/>').join("") +
      '<rect x="230" y="216" width="150" height="24" rx="2" fill="#111"/><text x="305" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ASBURY PARK</text>',
      sky("bss2", "#ffb36b", "#fde9c7"));
  }

  /* 3: Highway 9 at night */
  function bshwy9() {
    const stars = Array.from({ length: 22 }, (_, i) => '<circle class="bs-tw' + (i % 2 ? " bs-tw2" : "") + '" cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 80) + '" r="' + (i % 3 ? 1.2 : 2) + '" fill="#fff"/>').join("");
    const shield = '<g transform="translate(300 40)"><rect x="18" y="56" width="6" height="70" fill="#8a8f96"/><path d="M0 4q21 -10 42 0q2 30 -21 50q-23 -20 -21 -50z" fill="#fff" stroke="#111" stroke-width="3"/>' +
      '<text x="21" y="22" text-anchor="middle" ' + font + ' font-size="8" fill="#111">U.S.</text>' +
      /* a 9 drawn with a straight stem */
      '<circle cx="21" cy="32" r="6" fill="none" stroke="#111" stroke-width="4"/><rect x="25" y="30" width="4" height="16" fill="#111"/></g>';
    const car = '<g class="bs-car"><g transform="translate(0 176)"><path d="M0 26v-10q4 -8 20 -10l18 -14h52l20 14q22 2 24 12v8z" fill="#c8323a" stroke="#6a1418" stroke-width="2"/>' +
      '<path d="M42 4l12 -9h32l14 9z" fill="#9fc8e6"/><rect x="0" y="22" width="134" height="4" fill="#d8dce2"/>' +
      '<circle cx="28" cy="30" r="10" fill="#111"/><circle cx="28" cy="30" r="6" fill="#e6eaf0"/><circle cx="106" cy="30" r="10" fill="#111"/><circle cx="106" cy="30" r="6" fill="#e6eaf0"/>' +
      '<path d="M134 14l90 -8v28z" fill="#fff6b8" opacity=".35"/><circle cx="132" cy="16" r="3" fill="#fff6c2"/></g></g>';
    const pines = [10, 50, 95, 140, 190, 235, 280, 360].map((x, i) => pine(x, 150, 1 + (i % 3) * .15, i % 2 ? "#123a24" : "#0f2f1e")).join("");
    return svg('<rect width="400" height="260" fill="url(#bss3)"/>' + stars + '<circle cx="70" cy="40" r="14" fill="#f6efd0"/><circle cx="76" cy="36" r="13" fill="#0d1a33"/>' + pines + shield +
      '<rect x="0" y="150" width="400" height="110" fill="#2a2c32"/><rect x="0" y="150" width="400" height="4" fill="#d8d0a0"/><rect x="0" y="232" width="400" height="4" fill="#d8d0a0"/>' +
      '<g class="bs-line">' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 60) + '" y="212" width="32" height="4" fill="#f2c94c"/>').join("") + '</g>' + car +
      '<rect x="16" y="236" width="150" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="91" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ROUTE 9 · FREEHOLD</text>',
      sky("bss3", "#0d1a33", "#2b3a66"));
  }

  /* 4: Randolph St & McLean St, Freehold, St. Rose of Lima behind */
  function bscorner() {
    const church = '<g transform="translate(250 6)"><rect x="40" y="56" width="110" height="110" fill="#c9b79a" stroke="#8a7656" stroke-width="1.5"/><path d="M34 58l61 -34 61 34z" fill="#7a6a5a"/>' +
      '<rect x="0" y="40" width="44" height="126" fill="#c9b79a" stroke="#8a7656" stroke-width="1.5"/><path d="M-2 42l24 -56 24 56z" fill="#5f6f6a" stroke="#3f4f4a" stroke-width="1.5"/>' +
      '<rect x="20" y="-30" width="4" height="18" fill="' + GOLD + '"/><rect x="15" y="-25" width="14" height="4" fill="' + GOLD + '"/>' +
      '<path d="M12 60q10 -14 20 0v22h-20z" fill="#3a4a6a"/><circle cx="95" cy="80" r="14" fill="#8c3b52" stroke="#e8c547" stroke-width="2"/>' +
      '<path d="M70 166v-40q25 -24 50 0v40z" fill="#4a2e1e"/></g>';
    const wall = '<rect x="0" y="96" width="250" height="120" fill="' + BRICK + '"/>' +
      Array.from({ length: 12 }, (_, r) => '<path d="M0 ' + (104 + r * 10) + 'h250" stroke="#7a3826" stroke-width="1"/>').join("");
    const guitar = '<g transform="translate(196 118) rotate(20)"><ellipse cx="0" cy="40" rx="16" ry="20" fill="' + CREAM + '" stroke="#111" stroke-width="2"/><ellipse cx="0" cy="22" rx="12" ry="12" fill="' + CREAM + '" stroke="#111" stroke-width="2"/>' +
      '<rect x="-3" y="-28" width="6" height="44" fill="#3a2a1a"/><rect x="-5" y="-36" width="10" height="10" fill="#111"/><circle cx="0" cy="38" r="5" fill="#111"/></g>';
    return svg('<rect width="400" height="260" fill="url(#bss4)"/>' + tree(380, 150, 1.3, "#3a7a44") + church + wall +
      tag("BRUCE", 22, 166, 52, GOLD, -7) + tag("E STREET", 40, 196, 20, "#7fb2ff", -4) + guitar +
      '<circle class="bs-sp" cx="150" cy="140" r="3" fill="' + GOLD + '"/><circle class="bs-sp bs-spb" cx="158" cy="134" r="2.5" fill="' + GOLD + '"/>' +
      '<text class="bs-note" x="230" y="120" font-size="16" fill="#fff">&#9835;</text><text class="bs-note bs-n2" x="214" y="110" font-size="14" fill="#fff">&#9834;</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#8f8a80"/><rect x="0" y="214" width="400" height="4" fill="#c9c3b6"/>' +
      '<rect x="296" y="96" width="5" height="122" fill="#6f747a"/>' + sign(254, 96, 90, "Randolph St") + sign(258, 120, 82, "McLean St"),
      sky("bss4", "#9ccbee", "#f4ecd8"));
  }

  window.SCENES = { bsbus: bsbus, bsraceway: bsraceway, bsboardwalk: bsboardwalk, bshwy9: bshwy9, bscorner: bscorner };
})();
