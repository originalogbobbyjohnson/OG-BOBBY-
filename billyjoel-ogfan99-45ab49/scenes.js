/* billyjoel scenes (NYC map, Long Island: raised on Meeting Lane in the Levittown section of Hicksville, Hicksville High School). 400 x 260 SVGs.
   CSS classes prefixed bj- (the page's own anim-train is kept on the bus).
   0 NICE n49 bus stop, Newbridge Rd & Barter Ln: the white-and-blue NICE bus pulling in, the stop pole with the n49 badge, Levitt Cape Cods behind.
   1 Hicksville High School: brick school, Comets blue and gold, a comet streaking over, a diploma scroll (he got it in 1992, 25 years late).
   2 The Village Green on Newbridge Road: the green where he and his greaser friends hung out in the 1960s, Levitt Cape Cod houses, a 60s car cruising.
   3 Cold Spring Harbor (his first album's name): the harbor, white clapboard houses on the hill, sailboats, gulls.
   4 Newbridge Rd and Old Country Rd, Hicksville: green signs, BILLY JOEL tagged with piano keys, the old Heitz Place courthouse (Gregory Museum) behind. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#ffcf5a", RED = "#e23b3b", BLUE = "#3a7bd5", IVORY = "#f6efdc", BRICK = "#9a4a34";
  const css = '<style>' +
    '@keyframes bjflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.95}}.bj-flk{animation:bjflick 2.8s infinite}' +
    '@keyframes bjcomet{from{transform:translate(-80px,40px)}to{transform:translate(480px,-60px)}}.bj-comet{animation:bjcomet 5s linear infinite}' +
    '@keyframes bjcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.bj-car{animation:bjcar 9s linear infinite}' +
    '@keyframes bjsail{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.bj-sail{animation:bjsail 14s ease-in-out infinite}.bj-sail2{animation-duration:18s;animation-delay:-6s}' +
    '@keyframes bjgull{0%{transform:translate(0,0)}50%{transform:translate(40px,-8px)}100%{transform:translate(80px,0)}}.bj-gull{animation:bjgull 8s ease-in-out infinite alternate}.bj-g2{animation-delay:-3s}' +
    '@keyframes bjfloat{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-8px) rotate(4deg)}}.bj-float{transform-box:fill-box;transform-origin:50% 50%;animation:bjfloat 3s ease-in-out infinite}' +
    '@keyframes bjnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.bj-note{animation:bjnote 3s ease-out infinite}.bj-n2{animation-delay:-1s}.bj-n3{animation-delay:-2s}' +
    '@keyframes bjspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.bj-sp{animation:bjspray 1.4s ease-out infinite}.bj-spb{animation-delay:.5s}' +
    '@keyframes bjwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.bj-walk{animation:bjwalk 15s linear infinite}.bj-wk2{animation-delay:-7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 6 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  /* a Levitt Cape Cod: small house, steep roof, center chimney, one dormer-less front */
  const cape = (x, y, wall, roof) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="20" width="64" height="34" fill="' + wall + '" stroke="#8a7a6a" stroke-width="1"/><path d="M-4 22l36 -24 36 24z" fill="' + roof + '"/>' +
    '<rect x="40" y="0" width="7" height="14" fill="#7a4a3a"/><rect x="8" y="30" width="12" height="12" fill="#cfe2ee" stroke="#fff" stroke-width="1.5"/><rect x="44" y="30" width="12" height="12" fill="#cfe2ee" stroke="#fff" stroke-width="1.5"/><rect x="26" y="32" width="11" height="22" fill="#4a5a7a"/></g>';
  const keys = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" fill="#fff" stroke="#000" stroke-width="2"/>' +
    Array.from({ length: Math.floor(w / 10) }, (_, i) => '<path d="M' + (x + i * 10) + ' ' + y + 'v22" stroke="#000" stroke-width="1"/>' + ([0, 1, 3, 4, 5].includes(i % 7) ? '<rect x="' + (x + i * 10 + 7) + '" y="' + y + '" width="6" height="13" fill="#000"/>' : "")).join("");

  /* 0. NICE n49 bus stop, Newbridge Rd & Barter Ln */
  function bjbus() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (96 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#2a3a4a"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="116" width="300" height="78" rx="10" fill="#f4f6f8" stroke="#8a929c" stroke-width="2"/>' +
      '<rect x="60" y="160" width="300" height="10" fill="#0039a6"/><rect x="60" y="170" width="300" height="4" fill="#3fb8e8"/>' + wins +
      '<rect x="64" y="124" width="26" height="40" rx="3" fill="#2a3a4a"/><rect x="66" y="118" width="60" height="8" rx="2" fill="#111"/><text x="96" y="125" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">n49 HICKSVILLE</text>' +
      '<circle cx="110" cy="196" r="13" fill="#222"/><circle cx="110" cy="196" r="5" fill="#aaa"/><circle cx="310" cy="196" r="13" fill="#222"/><circle cx="310" cy="196" r="5" fill="#aaa"/><circle cx="64" cy="180" r="4" fill="#fff6c2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#bjs0)"/>' +
      cape(10, 52, "#e8dcc4", "#5a4a42") + cape(110, 56, "#cfe0e8", "#4a4a52") + cape(210, 52, "#f0e2c8", "#6a4a3a") + cape(310, 56, "#dfe8d4", "#4a4a52") +
      tree(96, 110, 1.1, "#3a7a44") + tree(300, 112, 1.2, "#2f6b3a") +
      '<rect x="0" y="108" width="400" height="8" fill="#9aa08a"/><rect x="0" y="116" width="400" height="94" fill="#5a5a60"/>' + bus +
      '<rect x="0" y="210" width="400" height="50" fill="#b8b2a6"/><rect x="0" y="208" width="400" height="4" fill="#ddd"/>' +
      /* stop pole */
      '<rect x="356" y="44" width="5" height="170" fill="#7a7f86"/><rect x="330" y="30" width="58" height="40" rx="3" fill="#0039a6" stroke="#fff" stroke-width="2"/>' +
      '<text x="359" y="46" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">NICE BUS</text><rect x="340" y="51" width="38" height="15" rx="4" fill="#fff"/><text x="359" y="62" text-anchor="middle" ' + font + ' font-size="11" fill="#0039a6">n49</text>' +
      '<rect x="20" y="222" width="190" height="20" rx="2" fill="#111"/><text x="115" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Newbridge Rd &amp; Barter Ln</text>' +
      '<circle class="bj-flk" cx="358" cy="74" r="3" fill="#fff3c2"/>',
      sky("bjs0", "#8ec6e8", "#eef0e6"));
  }

  /* 1. Hicksville High School */
  function bjschool() {
    const wins = Array.from({ length: 10 }, (_, i) => '<rect x="' + (64 + i * 28) + '" y="76" width="16" height="18" fill="#cfe2ee" stroke="#f3eee4" stroke-width="2"/><rect x="' + (64 + i * 28) + '" y="106" width="16" height="18" fill="#cfe2ee" stroke="#f3eee4" stroke-width="2"/>').join("");
    const comet = '<g class="bj-comet"><path d="M0 60L-60 74L-50 64L-70 62z" fill="' + GOLD + '" opacity=".55"/><circle cx="0" cy="60" r="7" fill="#fff6c2" stroke="' + GOLD + '" stroke-width="3"/></g>';
    const scroll = '<g class="bj-float"><rect x="290" y="186" width="70" height="18" rx="9" fill="' + IVORY + '" stroke="#8a7a5a" stroke-width="2"/><circle cx="292" cy="195" r="9" fill="' + IVORY + '" stroke="#8a7a5a" stroke-width="2"/><rect x="318" y="184" width="10" height="22" fill="' + BLUE + '"/><path d="M323 206l-6 12M323 206l6 12" stroke="' + BLUE + '" stroke-width="3"/></g>';
    return svg('<rect width="400" height="260" fill="url(#bjs1)"/>' + comet +
      '<rect x="50" y="60" width="300" height="88" fill="' + BRICK + '"/><rect x="50" y="56" width="300" height="6" fill="#f3eee4"/>' + wins +
      '<rect x="184" y="120" width="32" height="28" fill="#3a2418"/><rect x="176" y="116" width="48" height="5" fill="#f3eee4"/>' +
      '<rect x="114" y="61" width="172" height="14" rx="2" fill="#f3eee4"/><text x="200" y="72" text-anchor="middle" ' + font + ' font-size="9" fill="#1f3f8a">HICKSVILLE HIGH SCHOOL</text>' +
      '<rect x="356" y="46" width="2" height="102" fill="#ddd"/><rect x="358" y="48" width="22" height="7" fill="#1f3f8a"/><rect x="358" y="55" width="22" height="7" fill="' + GOLD + '"/>' +
      '<rect x="0" y="148" width="400" height="112" fill="#5a9a46"/>' + tree(26, 176, 1.5, "#2f6b3a") + tree(220, 196, 1.2, "#3a7a44") + scroll +
      '<rect x="40" y="226" width="150" height="18" rx="2" fill="#111"/><text x="115" y="239" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">GO COMETS</text>',
      sky("bjs1", "#7fb4e6", "#eaf0f6"));
  }

  /* 2. The Village Green on Newbridge Road */
  function bjgreen() {
    const car = '<g class="bj-car"><path d="M0 200h84v-12l-12 -4l-10 -12h-36l-12 12l-14 4z" fill="' + RED + '" stroke="#5a1010" stroke-width="2"/><path d="M28 184l8 -10h22l8 10z" fill="#cfe6f5"/><path d="M0 194h84" stroke="#eee" stroke-width="2"/>' +
      '<circle cx="18" cy="202" r="8" fill="#222"/><circle cx="18" cy="202" r="3" fill="#ddd"/><circle cx="66" cy="202" r="8" fill="#222"/><circle cx="66" cy="202" r="3" fill="#ddd"/></g>';
    const notes = [[150, 150, ""], [170, 140, "bj-n2"], [190, 152, "bj-n3"]].map(n => '<g class="bj-note ' + n[2] + '"><circle cx="' + n[0] + '" cy="' + n[1] + '" r="4" fill="' + GOLD + '"/><path d="M' + (n[0] + 4) + ' ' + n[1] + 'v-14h6" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>').join("");
    const juke = '<g transform="translate(120 152)"><path d="M0 40v-26a30 30 0 0 1 60 0v26z" fill="#c9302c" stroke="#5a1010" stroke-width="2"/><path d="M8 40v-24a22 22 0 0 1 44 0v24z" fill="' + GOLD + '"/><rect x="14" y="20" width="32" height="16" rx="3" fill="#3a2418"/><circle cx="30" cy="12" r="5" fill="#fff6c2" class="bj-flk"/></g>';
    return svg('<rect width="400" height="260" fill="url(#bjs2)"/>' +
      cape(0, 60, "#e8dcc4", "#5a4a42") + cape(80, 64, "#d6e4ea", "#4a4a52") + cape(250, 60, "#f0e2c8", "#6a4a3a") + cape(330, 64, "#dfe8d4", "#4a4a52") +
      '<rect x="0" y="118" width="400" height="74" fill="#6aaa54"/>' + tree(200, 150, 1.6, "#2f6b3a") + tree(60, 160, 1.2, "#3a7a44") + tree(350, 158, 1.3, "#3f8a4a") +
      '<path d="M230 170h40M234 170v14M266 170v14" stroke="#6a4a2a" stroke-width="4"/>' + juke + notes +
      '<rect x="0" y="192" width="400" height="22" fill="#55555b"/><path d="M0 203h400" stroke="#e8e0c0" stroke-width="2" stroke-dasharray="20 18"/>' + car +
      '<rect x="0" y="214" width="400" height="46" fill="#6aaa54"/>' +
      '<rect x="110" y="232" width="180" height="18" rx="2" fill="#111"/><text x="200" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">The Village Green, Newbridge Rd</text>',
      sky("bjs2", "#f3a35a", "#fde6b8"));
  }

  /* 3. Cold Spring Harbor */
  function bjharbor() {
    const waves = Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' ' + (170 + (i % 3) * 16) + 'q13 -6 26 0t26 0" stroke="#bfe0f0" stroke-width="2" fill="none" opacity=".7"/>').join("");
    const house = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="12" width="34" height="24" fill="' + c + '" stroke="#8a8a8a" stroke-width="1"/><path d="M-3 13l20 -14 20 14z" fill="#4a4a52"/><rect x="6" y="18" width="7" height="8" fill="#3a4a5a"/><rect x="21" y="18" width="7" height="8" fill="#3a4a5a"/></g>';
    const boat = (cls, x, c) => '<g class="bj-sail ' + cls + '"><path d="M' + x + ' 196h56l-8 10h-40z" fill="#fff"/><path d="M' + (x + 26) + ' 194v-44l24 40z" fill="#fff" stroke="#ccc" stroke-width="1"/><path d="M' + (x + 24) + ' 194v-36l-18 32z" fill="' + c + '"/></g>';
    const gull = (x, y, cls) => '<g class="bj-gull ' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>';
    return svg('<rect width="400" height="260" fill="url(#bjs3)"/>' +
      '<path d="M0 120q60 -40 140 -30q60 8 110 -14q80 -20 150 10v74h-400z" fill="#3f7a4a"/>' +
      house(30, 88, "#fff") + house(90, 80, "#f0e6d2") + house(250, 72, "#fff") + house(320, 84, "#e8eef2") +
      '<rect x="180" y="58" width="10" height="28" fill="#fff"/><path d="M176 60l9 -18 9 18z" fill="#fff"/><rect x="170" y="86" width="30" height="24" fill="#fff" stroke="#8a8a8a" stroke-width="1"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3f78a8"/>' + waves +
      boat("", 40, RED) + boat("bj-sail2", 240, GOLD) + gull(60, 40, "") + gull(260, 30, "bj-g2") +
      '<rect x="0" y="146" width="400" height="6" fill="#8a7a5a"/>' +
      '<rect x="120" y="234" width="160" height="18" rx="2" fill="#111"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Cold Spring Harbor</text>',
      sky("bjs3", "#5a8ac8", "#f2d6b0"));
  }

  /* 4. Newbridge Rd and Old Country Rd, Hicksville */
  function bjcorner() {
    const court = '<g><rect x="214" y="64" width="160" height="116" fill="#c8b48a" stroke="#7a6a4a" stroke-width="2"/><path d="M208 66l86 -34 86 34z" fill="#5a4a42"/>' +
      '<rect x="282" y="12" width="24" height="26" fill="' + IVORY + '" stroke="#7a6a4a" stroke-width="1"/><path d="M279 14l15 -12 15 12z" fill="#5a4a42"/>' +
      '<rect x="226" y="78" width="14" height="28" fill="#cfe2ee" stroke="' + IVORY + '" stroke-width="2"/><rect x="348" y="78" width="14" height="28" fill="#cfe2ee" stroke="' + IVORY + '" stroke-width="2"/>' +
      '<rect x="226" y="124" width="14" height="28" fill="#cfe2ee" stroke="' + IVORY + '" stroke-width="2"/><rect x="348" y="124" width="14" height="28" fill="#cfe2ee" stroke="' + IVORY + '" stroke-width="2"/>' +
      '<path d="M254 128h80v52h-80z" fill="' + IVORY + '"/><rect x="282" y="140" width="24" height="40" fill="#5a3a2a"/><path d="M250 130l44 -16 44 16z" fill="' + IVORY + '"/></g>';
    const walker = (cls, y, c) => '<g class="bj-walk ' + cls + '"><circle cx="0" cy="' + (y - 22) + '" r="4" fill="#3a2a24"/><rect x="-4" y="' + (y - 18) + '" width="8" height="12" rx="2" fill="' + c + '"/><rect x="-3" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/><rect x="0.5" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/></g>';
    return svg('<rect width="400" height="260" fill="url(#bjs4)"/>' + court +
      '<rect x="0" y="96" width="196" height="128" fill="#d8cdb8"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (112 + i * 14) + 'h196" stroke="#c4b8a0" stroke-width="1"/>').join("") +
      tag("BILLY JOEL", 8, 160, 28, GOLD, -6) + keys(20, 176, 120) + tag("PIANO MAN", 30, 216, 15, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55555b"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<path d="M0 244h40M70 244h40M140 244h40M210 244h40M280 244h40M350 244h40" stroke="#e8e0c0" stroke-width="2"/>' +
      walker("", 222, "#1f3f8a") + walker("bj-wk2", 222, RED) +
      '<rect x="196" y="84" width="6" height="140" fill="#2f2f2f"/>' + sign(140, 86, 120, "Newbridge Rd") + sign(136, 112, 128, "Old Country Rd") +
      '<g class="bj-sp"><circle cx="150" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bj-sp bj-spb"><circle cx="156" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("bjs4", "#14183a", "#d88a5a"));
  }

  window.SCENES = { bjbus: bjbus, bjschool: bjschool, bjgreen: bjgreen, bjharbor: bjharbor, bjcorner: bjcorner };
})();
