/* aaliyah scenes (Regions tab: Detroit; born in Brooklyn, raised in Detroit from age five, family home on Warrington Dr in the University District).
   CSS classes and ids prefixed aa- (the page's own anim-train is kept).
   1 DDOT 32 McNichols bus pulling up at the W McNichols Rd & Livernois Ave stop, a block from Warrington Dr.
   2 Gesu School: the grade-school stage where she got cast in the first-grade play "Annie" (red curtains, the sunrise backdrop, spotlight).
   3 The TV talent-show stage she sang "My Funny Valentine" on at age ten: star lights, the studio camera with its red light, the mic.
   4 Detroit High School for the Fine and Performing Arts in the old Wilbur Wright building on Rosa Parks Blvd: brick school, drama masks, caps in the air (drama major, 4.0).
   5 Warrington Dr and W McNichols Rd: green signs, AALIYAH tagged on the wall, the 1885 log cabin in Palmer Park through the trees behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes aablink{0%,100%{opacity:1}50%{opacity:.15}}.aa-blink{animation:aablink 1.2s steps(1) infinite}' +
    '@keyframes aatw{0%,100%{opacity:.35}50%{opacity:1}}.aa-tw{animation:aatw 1.6s ease-in-out infinite}.aa-tw2{animation-delay:-.8s}' +
    '@keyframes aaspot{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.aa-spot{animation:aaspot 5s ease-in-out infinite;transform-origin:200px 0px}' +
    '@keyframes aacap{0%{transform:translateY(0) rotate(0)}50%{transform:translateY(-34px) rotate(160deg)}100%{transform:translateY(0) rotate(360deg)}}.aa-cap{animation:aacap 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.aa-cap2{animation-delay:-1.3s}' +
    '@keyframes aaleaf{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}.aa-leaf{animation:aaleaf 3s ease-in-out infinite}' +
    '@keyframes aasp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.aa-sp{animation:aasp 1.4s ease-out infinite}.aa-sp2{animation-delay:.45s}' +
    '@keyframes aanote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.aa-note{animation:aanote 3s ease-out infinite}.aa-note2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const star5 = (cx, cy, r, fill, cls) => { let d = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path class="' + (cls || "") + '" d="' + d + 'z" fill="' + fill + '"/>'; };
  const DDOT = "#00704a", SILVER = "#c9d4ff", PINK = "#ff5a8a", CYAN = "#7fe3ff", RED = "#b3162b";

  /* 1. DDOT 32 McNichols at W McNichols Rd & Livernois Ave */
  function aastop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 158h316v12H36z" fill="' + DDOT + '"/><path d="M36 170h316v3H36z" fill="#9bd3b5"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="284" y="118" width="68" height="9" rx="2" fill="#111"/><text x="318" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">32 MCNICHOLS</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const shops = [0, 1, 2, 3].map(i => { const x = 6 + i * 100, c = ["#7a4a3a", "#5d5a6e", "#8a6a48", "#4e5d6a"][i];
      return '<rect x="' + x + '" y="54" width="92" height="62" fill="' + c + '"/><rect x="' + x + '" y="50" width="92" height="6" fill="#d9cdb6"/>' +
        '<rect x="' + (x + 8) + '" y="64" width="34" height="18" fill="#ffd98a" opacity=".8"/><rect x="' + (x + 50) + '" y="64" width="34" height="18" fill="#ffd98a" opacity=".5"/>' +
        '<rect x="' + (x + 6) + '" y="92" width="80" height="20" fill="#20242c"/><rect x="' + (x + 6) + '" y="88" width="80" height="5" fill="' + [PINK, CYAN, SILVER, PINK][i] + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#aas1)"/>' + stars(16) + shops +
      '<rect x="0" y="116" width="400" height="80" fill="#4f5054"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + DDOT + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="22" y="204" width="326" height="44" rx="3" fill="#111"/><text x="34" y="222" ' + font + ' font-size="12.5" fill="#fff">W McNichols Rd &amp; Livernois Ave</text><text x="34" y="239" ' + font + ' font-size="10" fill="#cfd8e0">University District · a block from Warrington Dr</text>' +
      badge(300, 226, "32", DDOT),
      sky("aas1", "#1c1a3c", "#d88a7a"));
  }

  /* 2. Gesu School stage: the first-grade play */
  function aagesu() {
    const folds = (x0, dir) => Array.from({ length: 6 }, (_, i) => '<path d="M' + (x0 + dir * i * 12) + ' 30v190" stroke="#7a0f1e" stroke-width="3" opacity=".6"/>').join("");
    const rays = Array.from({ length: 9 }, (_, i) => { const a = Math.PI + i * Math.PI / 8; return '<path d="M200 150L' + (200 + 120 * Math.cos(a)).toFixed(0) + ' ' + (150 + 120 * Math.sin(a)).toFixed(0) + '" stroke="#ffd36b" stroke-width="6" opacity=".55"/>'; }).join("");
    const seats = Array.from({ length: 12 }, (_, i) => '<path d="M' + (8 + i * 33) + ' 260v-22q14 -10 28 0v22z" fill="#2a1f2e"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1220"/>' +
      /* backdrop: painted city sunrise */
      '<rect x="70" y="40" width="260" height="130" fill="#8fc3e8"/>' + rays + '<circle cx="200" cy="150" r="34" fill="#ffc83d"/>' +
      '<g fill="#4a5a7a"><rect x="80" y="120" width="30" height="50"/><rect x="116" y="104" width="24" height="66"/><rect x="262" y="110" width="26" height="60"/><rect x="292" y="124" width="30" height="46"/></g>' +
      /* stage floor */
      '<path d="M30 170h340l26 50H4z" fill="#a06a3a"/><path d="M30 170h340" stroke="#6a4424" stroke-width="3"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (40 + i * 46) + ' 170l' + (-14 + i * 4) + ' 50" stroke="#7d5030" stroke-width="1.2"/>').join("") +
      /* little player: red dress, curly red hair, seen from behind, a mop and a bucket */
      '<g><circle cx="200" cy="132" r="9" fill="#d2452a"/><circle cx="193" cy="128" r="5" fill="#d2452a"/><circle cx="207" cy="128" r="5" fill="#d2452a"/><path d="M190 142h20l6 26h-32z" fill="#c81d3a"/><rect x="194" y="168" width="4" height="8" fill="#3a2a22"/><rect x="202" y="168" width="4" height="8" fill="#3a2a22"/></g>' +
      '<path d="M232 120v52" stroke="#c9a06a" stroke-width="3"/><path d="M226 172h12l-2 6h-8z" fill="#ddd"/><path d="M160 160h16l-2 14h-12z" fill="#8a95a5"/>' +
      /* spotlight */
      '<g class="aa-spot"><path d="M200 0L150 176h100z" fill="#fff6c2" opacity=".16"/></g>' +
      /* curtains */
      '<path d="M0 0h70v220q-30 -6 -70 0z" fill="#a3142a"/>' + folds(10, 1) + '<path d="M400 0h-70v220q30 -6 70 0z" fill="#a3142a"/>' + folds(390, -1) +
      '<path d="M0 0h400v30q-200 18 -400 0z" fill="#8a0f22"/>' +
      '<rect x="90" y="6" width="220" height="20" rx="3" fill="#f5e6c8"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10.5" fill="#5a1220">GESU SCHOOL · FIRST GRADE PLAY</text>' +
      seats +
      '<g class="aa-note"><text x="120" y="120" font-size="18" fill="#ffd36b">&#9834;</text></g><g class="aa-note aa-note2"><text x="272" y="110" font-size="16" fill="' + PINK + '">&#9835;</text></g>');
  }

  /* 3. The TV talent show at age ten */
  function aatv() {
    const lights = Array.from({ length: 9 }, (_, i) => star5(30 + i * 42, 34 + (i % 2) * 12, 10, i % 2 ? "#ffd36b" : SILVER, "aa-tw" + (i % 2 ? " aa-tw2" : ""))).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#aat1)"/>' + lights +
      '<rect x="40" y="70" width="320" height="100" rx="6" fill="#1d2a5a" stroke="' + SILVER + '" stroke-width="3"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (60 + i * 46) + ' 70v100" stroke="#2c3d7a" stroke-width="10"/>').join("") +
      star5(250, 134, 22, "#ffd36b") +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">TV TALENT SHOW · AGE TEN</text>' +
      /* stage */
      '<path d="M0 186h400v74H0z" fill="#2a2640"/><ellipse cx="200" cy="200" rx="110" ry="16" fill="#3b3660"/><ellipse cx="200" cy="200" rx="70" ry="9" fill="#fff6c2" opacity=".25"/>' +
      /* mic stand */
      '<path d="M170 200v-58" stroke="#c9ccd4" stroke-width="3"/><path d="M158 200h24" stroke="#c9ccd4" stroke-width="4"/><rect x="164" y="128" width="12" height="18" rx="6" fill="#30343c" stroke="#c9ccd4" stroke-width="2"/>' +
      /* sheet music stand */
      '<path d="M96 206v-40" stroke="#888" stroke-width="3"/><rect x="72" y="140" width="48" height="30" fill="#fbf8ef" stroke="#888" stroke-width="1.5"/><path d="M76 148h40M76 154h40M76 160h40" stroke="#555" stroke-width="1"/>' +
      '<text x="96" y="137" text-anchor="middle" ' + font + ' font-size="7" fill="#ffd36b">MY FUNNY VALENTINE</text>' +
      /* studio camera with red tally light */
      '<g transform="translate(14 14)"><rect x="286" y="146" width="64" height="34" rx="4" fill="#2f333b" stroke="#8a93a5" stroke-width="2"/><rect x="270" y="154" width="18" height="18" rx="3" fill="#1a1d22"/><circle cx="270" cy="163" r="7" fill="#3c4a66"/>' +
      '<circle cx="340" cy="152" r="4" fill="#ff2d2d" class="aa-blink"/><path d="M318 180l-16 50M318 180l0 50M318 180l16 50" stroke="#8a93a5" stroke-width="3"/></g>' +
      '<rect x="20" y="226" width="150" height="22" rx="3" fill="#000" opacity=".55"/><text x="95" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SHE SANG IT AT TEN</text>',
      sky("aat1", "#0c0a22", "#3a2a6a"));
  }

  /* 4. The arts high school in the old Wilbur Wright building, Rosa Parks Blvd */
  function aaschool() {
    const wins = []; for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) wins.push('<rect x="' + (62 + c * 31) + '" y="' + (62 + r * 30) + '" width="18" height="20" fill="' + ((r + c) % 3 ? "#ffd98a" : "#2b3a4a") + '" opacity="' + ((r + c) % 3 ? .8 : 1) + '"/>');
    const mask = (x, y, happy, col) => '<g><path d="M' + (x - 16) + ' ' + (y - 14) + 'q16 -6 32 0v14q0 18 -16 22q-16 -4 -16 -22z" fill="' + col + '" stroke="#222" stroke-width="2"/>' +
      '<path d="M' + (x - 10) + ' ' + (y - 4) + 'h7M' + (x + 3) + ' ' + (y - 4) + 'h7" stroke="#222" stroke-width="3" stroke-linecap="round"/>' +
      (happy ? '<path d="M' + (x - 8) + ' ' + (y + 6) + 'q8 8 16 0" stroke="#222" stroke-width="2.5" fill="none"/>' : '<path d="M' + (x - 8) + ' ' + (y + 10) + 'q8 -8 16 0" stroke="#222" stroke-width="2.5" fill="none"/>') + '</g>';
    const cap = (x, y, cls) => '<g class="aa-cap ' + (cls || "") + '"><path d="M' + (x - 12) + ' ' + y + 'l12 -5l12 5l-12 5z" fill="#111"/><rect x="' + (x - 6) + '" y="' + (y + 2) + '" width="12" height="5" fill="#111"/><path d="M' + (x + 10) + ' ' + y + 'v8" stroke="' + PINK + '" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#aah1)"/>' +
      /* building: 1920s red-brown brick school, limestone trim, center entrance bay */
      '<rect x="48" y="44" width="304" height="140" fill="#8e4b34"/><rect x="48" y="40" width="304" height="8" fill="#d8ccb4"/><rect x="48" y="150" width="304" height="5" fill="#d8ccb4"/>' + wins.join("") +
      '<rect x="168" y="30" width="64" height="154" fill="#9a5640"/><rect x="164" y="26" width="72" height="8" fill="#d8ccb4"/><path d="M182 184v-30q18 -16 36 0v30z" fill="#2b2238"/>' +
      '<rect x="60" y="158" width="280" height="20" rx="2" fill="#1a1530"/><text x="200" y="172" text-anchor="middle" ' + font + ' font-size="11" fill="' + SILVER + '">FINE &amp; PERFORMING ARTS · ROSA PARKS BLVD</text>' +
      mask(118, 112, true, "#f5d36b") + mask(282, 112, false, SILVER) +
      '<rect x="0" y="184" width="400" height="76" fill="#6a6f62"/><path d="M0 184h400" stroke="#4a4f44" stroke-width="3"/><rect x="0" y="214" width="400" height="46" fill="#4f5054"/>' +
      cap(100, 120, "") + cap(200, 104, "aa-cap2") + cap(300, 122, "") +
      '<rect x="120" y="226" width="160" height="22" rx="3" fill="#000" opacity=".55"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">DRAMA MAJOR · 4.0 GPA</text>',
      sky("aah1", "#24305a", "#e8a07a"));
  }

  /* 5. Warrington Dr and W McNichols Rd, the Palmer Park log cabin behind */
  function aacorner() {
    const tree = (x, s) => '<g class="aa-leaf"><rect x="' + (x - 3) + '" y="' + (96 - s) + '" width="6" height="' + (30 + s) + '" fill="#3a2a1e"/><circle cx="' + x + '" cy="' + (80 - s) + '" r="' + (20 + s / 2) + '" fill="#1f4a2c"/><circle cx="' + (x - 12) + '" cy="' + (90 - s) + '" r="' + (14 + s / 3) + '" fill="#245634"/></g>';
    const logs = Array.from({ length: 6 }, (_, i) => '<rect x="156" y="' + (70 + i * 6) + '" width="96" height="6" rx="3" fill="' + (i % 2 ? "#5a3a24" : "#6b4630") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#aac5)"/>' + stars(24) +
      tree(40, 10) + tree(100, 4) + tree(330, 8) + tree(380, 2) +
      /* the log cabin: dark logs, steep roof, fieldstone chimney */
      '<path d="M148 72l56 -34l56 34z" fill="#3a2a22"/><rect x="236" y="34" width="14" height="44" fill="#8a8478"/><rect x="234" y="30" width="18" height="6" fill="#6a6458"/>' + logs +
      '<rect x="196" y="84" width="16" height="22" fill="#2a1d14"/><rect x="170" y="80" width="14" height="10" fill="#ffd98a" opacity=".8"/><rect x="224" y="80" width="14" height="10" fill="#ffd98a" opacity=".8"/>' +
      tree(150, 0) + tree(268, 2) +
      /* wall */
      '<rect x="0" y="112" width="400" height="98" fill="#6e5a7a"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (116 + r * 10) + 'h400" stroke="#56466a" stroke-width="1"/>').join("") +
      tag("AALIYAH", 22, 176, 40, SILVER, -5) +
      tag("BABY GIRL", 170, 202, 22, PINK, -4) +
      '<g class="aa-sp"><circle cx="196" cy="150" r="3" fill="' + SILVER + '"/></g><g class="aa-sp aa-sp2"><circle cx="204" cy="146" r="2" fill="' + CYAN + '"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8c877c"/><path d="M0 210h400" stroke="#5f5a50" stroke-width="3"/>' +
      '<rect x="331" y="98" width="6" height="140" fill="#5b6066"/>' +
      sign(268, 98, 132, "WARRINGTON DR") + sign(272, 122, 124, "W MCNICHOLS RD") +
      '<rect x="80" y="228" width="240" height="22" rx="3" fill="#000" opacity=".55"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">UNIVERSITY DISTRICT · DETROIT</text>',
      sky("aac5", "#141238", "#5a3a6a"));
  }

  window.SCENES = { aastop: aastop, aagesu: aagesu, aatv: aatv, aaschool: aaschool, aacorner: aacorner };
})();
