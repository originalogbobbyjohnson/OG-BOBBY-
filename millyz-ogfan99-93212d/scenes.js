/* millyz scenes (Regions tab: Boston + New England; Cambridgeport / Central Square, Cambridge). CSS classes prefixed mz- (the page's own anim-train is kept).
   1 Central on the Red Line: the underground platform under Massachusetts Ave, cream tile wall, black station sign, a silver Red Line train with its red band sliding in.
   2 Cambridge City Hall on Massachusetts Ave in Central Square: rough pale granite with brownstone trim, the tall square clock tower, the flag waving, cars rolling by.
   3 Magazine Beach on the Charles in Cambridgeport ("the Coast" side, Riverside): the grass bank, the river, a rowing shell gliding, the Boston skyline across the water.
   4 Graffiti Alley (Modica Way) off Mass Ave in Central Square: the narrow alley painted top to bottom, string lights, spray mist drifting.
   5 Magazine St and Putnam Ave in Cambridgeport: green signs, MILLYZ tagged on the brick, triple-deckers, the Prudential and Hancock towers rising behind across the river. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mz-flk{animation:mzflick 2.2s infinite}.mz-flk2{animation-delay:.7s}' +
    '@keyframes mzcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.mz-car{animation:mzcar 7s linear infinite}.mz-car2{animation-delay:-3.5s}' +
    '@keyframes mzcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.mz-carL{animation:mzcarL 8s linear infinite}' +
    '@keyframes mzflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mz-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mzflag 1.6s ease-in-out infinite}' +
    '@keyframes mzrow{from{transform:translateX(-120px)}to{transform:translateX(500px)}}.mz-row{animation:mzrow 14s linear infinite}' +
    '@keyframes mzoar{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mz-oar{transform-box:fill-box;transform-origin:50% 0%;animation:mzoar .9s ease-in-out infinite}' +
    '@keyframes mzrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.mz-rip{animation:mzrip 3s ease-in-out infinite}.mz-rip2{animation-delay:-1.5s}' +
    '@keyframes mzgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.mz-gull{animation:mzgull 11s linear infinite}' +
    '@keyframes mzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mz-sp{animation:mzspray 1.4s ease-out infinite}.mz-sp2{animation-delay:.45s}' +
    '@keyframes mzmist{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(18px,-10px) scale(1.6);opacity:0}}.mz-mist{transform-box:fill-box;transform-origin:50% 50%;animation:mzmist 1.8s ease-out infinite}.mz-mist2{animation-delay:-.9s}' +
    '@keyframes mzblink{0%,100%{opacity:.25}50%{opacity:1}}.mz-bl{animation:mzblink 1.6s ease-in-out infinite}.mz-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const RED = "#da291c", ICE = "#8fd3ff", WHITE = "#f4f6fa";

  /* Boston skyline across the river: the Prudential (with its top mast) and the Hancock's blue glass slab */
  const skyline = (base, s, c1, c2) => '<g>' +
    '<rect x="' + (60 * s) + '" y="' + (base - 40 * s) + '" width="' + (30 * s) + '" height="' + (40 * s) + '" fill="' + c1 + '"/>' +
    '<rect x="' + (100 * s) + '" y="' + (base - 92 * s) + '" width="' + (26 * s) + '" height="' + (92 * s) + '" fill="' + c1 + '"/><rect x="' + (110 * s) + '" y="' + (base - 108 * s) + '" width="' + (6 * s) + '" height="' + (16 * s) + '" fill="' + c1 + '"/><rect x="' + (112 * s) + '" y="' + (base - 120 * s) + '" width="' + (2 * s) + '" height="' + (12 * s) + '" fill="' + c1 + '"/>' +
    '<path d="M' + (140 * s) + ' ' + base + 'V' + (base - 104 * s) + 'l' + (12 * s) + ' ' + (-4 * s) + 'V' + base + 'z" fill="' + c2 + '"/><path d="M' + (152 * s) + ' ' + base + 'V' + (base - 108 * s) + 'h' + (14 * s) + 'V' + base + 'z" fill="' + c2 + '" opacity=".8"/>' +
    '<rect x="' + (176 * s) + '" y="' + (base - 52 * s) + '" width="' + (22 * s) + '" height="' + (52 * s) + '" fill="' + c1 + '"/><rect x="' + (204 * s) + '" y="' + (base - 34 * s) + '" width="' + (30 * s) + '" height="' + (34 * s) + '" fill="' + c1 + '"/></g>';

  /* 1. Central, Red Line (underground) */
  function mzstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="120" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="110" width="330" height="70" rx="8" fill="#cfd4d8" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="148" width="330" height="9" fill="' + RED + '"/><rect x="24" y="160" width="330" height="3" fill="' + RED + '"/>' +
      '<rect x="334" y="114" width="18" height="60" rx="4" fill="#aeb4ba"/><circle cx="344" cy="168" r="3.5" fill="#fff6c2"/>' +
      '<rect x="282" y="116" width="48" height="12" rx="2" fill="#111"/><text x="306" y="125" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">ALEWIFE</text></g>';
    const tiles = Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 0v104" stroke="#d6cfbd" stroke-width="1"/>').join("") + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (i * 18) + 'h400" stroke="#d6cfbd" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1d22"/><rect x="0" y="0" width="400" height="104" fill="#ece5d2"/>' + tiles +
      '<rect x="0" y="40" width="400" height="10" fill="' + RED + '"/>' +
      '<rect x="120" y="54" width="160" height="30" rx="3" fill="#111"/><text x="134" y="75" ' + font + ' font-size="17" fill="#fff">Central</text>' + badge(220, 69, "RL", RED) +
      '<g class="mz-flk"><rect x="40" y="6" width="50" height="5" fill="#fff8d8"/></g><g class="mz-flk mz-flk2"><rect x="310" y="6" width="50" height="5" fill="#fff8d8"/></g>' +
      '<rect x="0" y="100" width="400" height="84" fill="#2a2d33"/>' + train +
      '<rect x="0" y="184" width="400" height="8" fill="#f2c200"/><rect x="0" y="192" width="400" height="68" fill="#8f8a82"/><path d="M0 222h400" stroke="#7f7a72" stroke-width="2"/>' +
      '<rect x="24" y="202" width="4" height="50" fill="#333"/><rect x="10" y="200" width="32" height="12" rx="2" fill="#111"/><text x="26" y="209" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">EXIT</text>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">CENTRAL SQUARE · CAMBRIDGE</text>');
  }

  /* 2. Cambridge City Hall, Massachusetts Ave */
  function mzcityhall() {
    const G = "#c9c1ad", GD = "#a99f88", BR = "#8a4a32";
    const arches = [116, 228, 264].map(x => '<path d="M' + x + ' 200v-30a14 14 0 0 1 28 0v30z" fill="#3a2a22"/><path d="M' + x + ' 170a14 14 0 0 1 28 0" fill="none" stroke="' + BR + '" stroke-width="4"/>').join("");
    const wins = [116, 228, 264].map(x => '<rect x="' + (x + 6) + '" y="124" width="16" height="24" fill="#2e3a48"/><rect x="' + (x + 6) + '" y="122" width="16" height="4" fill="' + BR + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mzs2)"/>' +
      '<rect x="100" y="110" width="200" height="94" fill="' + G + '"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M100 ' + (116 + i * 9) + 'h200" stroke="' + GD + '" stroke-width="1.2"/>').join("") +
      '<path d="M94 110l106 -26 106 26z" fill="#6b5a4c"/><rect x="100" y="152" width="200" height="6" fill="' + BR + '"/>' + wins + arches +
      '<rect x="168" y="20" width="44" height="184" fill="' + G + '"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M168 ' + (26 + i * 10) + 'h44" stroke="' + GD + '" stroke-width="1.2"/>').join("") +
      '<path d="M162 22l28 -20 28 20z" fill="#5d4d40"/><rect x="164" y="20" width="52" height="6" fill="' + BR + '"/>' +
      '<rect x="176" y="34" width="10" height="26" fill="#2e3a48"/><rect x="194" y="34" width="10" height="26" fill="#2e3a48"/>' +
      '<circle cx="190" cy="80" r="12" fill="#f3efe2" stroke="' + BR + '" stroke-width="3"/><path d="M190 80v-8M190 80l6 3" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
            '<rect x="306" y="40" width="3" height="164" fill="#ddd"/><g class="mz-flag"><rect x="309" y="42" width="34" height="20" fill="#b22234"/><path d="M309 45h34M309 51h34M309 57h34" stroke="#fff" stroke-width="2"/><rect x="309" y="42" width="14" height="11" fill="#3c3b6e"/></g>' +
      '<path d="M60 204c0-30 20-44 30-44s28 14 28 44z" fill="#3f7a3a"/><path d="M290 204c0-28 20-40 30-40s30 12 30 40z" fill="#467f3c"/>' +
      '<rect x="0" y="204" width="400" height="12" fill="#c7c1b5"/><rect x="0" y="216" width="400" height="44" fill="#4a4a4f"/><path d="M0 240h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("mz-car", 0, 222, "#e8e8e8") + car("mz-carL", 0, 240, RED) +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="9" fill="#f4f1e8">MASS AVE · CENTRAL SQUARE</text>',
      sky("mzs2", "#7fb4e0", "#eef4f8"));
  }

  /* 3. Magazine Beach on the Charles */
  function mzriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#mzs3)"/>' +
      '<g class="mz-gull"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g transform="translate(70 0)">' + skyline(140, 1, "#6f7f95", "#4f7fae") + '</g>' +
      '<rect x="0" y="138" width="400" height="6" fill="#7f8f74"/><rect x="0" y="144" width="400" height="66" fill="#4f7ea8"/>' +
      '<g class="mz-rip"><path d="M10 160h60M120 172h80M260 158h70M40 192h90M240 198h120" stroke="#a8cdea" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="mz-rip mz-rip2"><path d="M80 182h50M300 178h60M150 202h70" stroke="#d2e6f6" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="mz-row"><path d="M20 170h96l-6 4H26z" fill="#f2f2f2" stroke="#333" stroke-width="1"/>' +
      [34, 52, 70, 88].map(x => '<circle cx="' + x + '" cy="164" r="3" fill="#222"/><rect x="' + (x - 2) + '" y="166" width="4" height="4" fill="' + RED + '"/><g class="mz-oar"><path d="M' + x + ' 170l0 12" stroke="#c9a46a" stroke-width="2"/></g>').join("") + '</g>' +
      '<path d="M0 210q100 -14 200 -6t200 -4v60H0z" fill="#5f9a4a"/><path d="M0 224q120 -10 220 -2t180 -2v40H0z" fill="#6fae55"/>' +
      '<rect x="300" y="196" width="3" height="40" fill="#555"/><circle class="mz-flk" cx="301.5" cy="194" r="5" fill="#ffe9a8"/>' +
      '<path d="M40 236c0-22 12-32 22-32s22 10 22 32z" fill="#3c7a34"/><rect x="60" y="234" width="4" height="14" fill="#5a3d26"/>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f8f0">MAGAZINE BEACH · CAMBRIDGEPORT</text>',
      sky("mzs3", "#f0a878", "#fde6c8"));
  }

  /* 4. Graffiti Alley, Central Square */
  function mzalley() {
    const blobs = [["#ff5a5f", 20, 40, 60], ["#ffd23f", 70, 120, 50], ["#3ec1d3", 30, 170, 44], ["#9b5de5", 330, 60, 56], ["#00f5a0", 350, 150, 50], ["#ff8c42", 300, 200, 40]];
    return svg(
      '<rect width="400" height="260" fill="#1b1d26"/>' +
      '<path d="M0 0h130l40 200H0z" fill="#3a3550"/><path d="M400 0H270l-40 200h170z" fill="#353a52"/>' +
      blobs.map(b => '<circle cx="' + b[1] + '" cy="' + b[2] + '" r="' + b[3] + '" fill="' + b[0] + '" opacity=".75"/>').join("") +
      '<path d="M0 0h130l40 200H0z" fill="none" stroke="#000" stroke-width="0"/>' +
      '<path d="M130 0h140l-40 200h-60z" fill="#2c3f5c"/><path d="M150 0h100l-30 150h-40z" fill="#5c7ea8" opacity=".5"/>' +
      tag("BLANCO", 8, 110, 30, WHITE, -8) + tag("SORASPY", 270, 120, 22, ICE, 8) + tag("617", 30, 186, 26, "#ffd23f", -4) + tag("CAMBRIDGE", 258, 184, 18, "#ff8c42", 6) +
      '<path d="M0 30q100 30 200 18t200 -10" stroke="#222" stroke-width="1.5" fill="none"/>' +
      [20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => '<circle class="mz-bl' + (i % 2 ? " mz-bl2" : "") + '" cx="' + x + '" cy="' + (36 + Math.round(10 * Math.sin(i))) + '" r="3.5" fill="#fff2b0"/>').join("") +
      '<path d="M0 200h400v60H0z" fill="#4a4a4f"/><path d="M170 200h60l40 60H130z" fill="#5a5a60"/>' +
      '<g transform="translate(206 150)"><rect x="0" y="0" width="12" height="30" rx="3" fill="' + RED + '"/><rect x="2" y="-6" width="8" height="7" fill="#ccc"/><circle class="mz-mist" cx="16" cy="-6" r="6" fill="' + ICE + '" opacity=".6"/><circle class="mz-mist mz-mist2" cx="20" cy="-10" r="5" fill="#fff" opacity=".5"/></g>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">GRAFFITI ALLEY · CENTRAL SQUARE</text>');
  }

  /* 5. Magazine St and Putnam Ave, Cambridgeport */
  function mzcorner() {
    const deck = (x, c) => '<rect x="' + x + '" y="70" width="60" height="70" fill="' + c + '"/>' + [0, 1, 2].map(r => '<rect x="' + (x + 8) + '" y="' + (76 + r * 21) + '" width="12" height="14" fill="#ffe7a3" opacity=".85"/><rect x="' + (x + 40) + '" y="' + (76 + r * 21) + '" width="12" height="14" fill="#ffe7a3" opacity=".85"/>').join("") + '<path d="M' + (x - 4) + ' 70h68" stroke="#333" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mzs5)"/>' +
      skyline(110, 1.25, "#3b4266", "#4e6fa6") +
      deck(0, "#6e7f8f") + deck(64, "#9c8a6a") + deck(300, "#7d6b8a") +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("MILLYZ", 20, 192, 52, WHITE, -6) + tag("BLANCO", 40, 216, 18, ICE, -3) + tag("SORASPY", 150, 214, 16, "#ff7a6b", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 150, "Magazine St") + sign(262, 124, 114, "Putnam Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mz-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mz-sp"><circle cx="210" cy="166" r="3" fill="' + WHITE + '" opacity=".7"/></g><g class="mz-sp mz-sp2"><circle cx="216" cy="160" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("mzs5", "#232a4f", "#e7956b"));
  }

  window.SCENES = { mzstation: mzstation, mzcityhall: mzcityhall, mzriver: mzriver, mzalley: mzalley, mzcorner: mzcorner };
})();
