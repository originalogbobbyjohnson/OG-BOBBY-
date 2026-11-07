/* birdman scenes (Regions tab: New Orleans; Uptown, the 3rd Ward / Central City - Birdman (Bryan "Baby" Williams) grew up in the Magnolia Projects). CSS classes and ids prefixed bm- (the page's own anim-train is kept).
   1 St. Charles Av at Jackson Av: the olive-green St. Charles streetcar (route 12) rolls in on the grassy neutral ground under the live oaks, a columned Garden District house behind.
   2 O.C. Haley Blvd in Central City: two-story brick storefronts with iron galleries; a candy-red coupe on chrome rolls by, rims spinning.
   3 Louis Armstrong New Orleans International (MSY), the curved-roof terminal: a private jet lifts off in the rain - "fly in any weather".
   4 Jackson Av on Mardi Gras morning (Zulu's route starts at Jackson Av and S Claiborne, in the 3rd Ward): a black-and-gold float, a hand-painted gold coconut, beads flying.
   5 LaSalle St and Toledano St (the old Magnolia, now Harmony Oaks): green signs, BIRDMAN tagged on the brick, the white Four Seasons tower (the old World Trade Center, cross-shaped crown) on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bmflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.bm-flk{animation:bmflick 2.2s infinite}.bm-flk2{animation-delay:.8s}' +
    '@keyframes bmmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.bm-moss{transform-box:fill-box;transform-origin:50% 0%;animation:bmmoss 3.4s ease-in-out infinite}.bm-moss2{animation-delay:-1.7s}' +
    '@keyframes bmspark{0%,100%{opacity:0}10%,20%{opacity:1}30%{opacity:0}}.bm-spk{animation:bmspark 1.3s infinite}' +
    '@keyframes bmspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bmspin .8s linear infinite}' +
    '@keyframes bmroll{0%{transform:translateX(-170px)}100%{transform:translateX(430px)}}.bm-roll{animation:bmroll 7s linear infinite}' +
    '@keyframes bmrain{from{transform:translate(0,-30px)}to{transform:translate(-14px,40px)}}.bm-rain{animation:bmrain .55s linear infinite}.bm-rain2{animation-delay:-.27s}' +
    '@keyframes bmbolt{0%,86%,100%{opacity:0}88%,92%{opacity:1}90%{opacity:.2}}.bm-bolt{animation:bmbolt 4s infinite}' +
    '@keyframes bmjet{0%{transform:translate(-60px,60px) rotate(-8deg)}100%{transform:translate(440px,-90px) rotate(-14deg)}}.bm-jet{animation:bmjet 6s ease-in infinite}' +
    '@keyframes bmbead{0%{transform:translate(0,0)}100%{transform:translate(60px,-70px)}}.bm-bead{animation:bmbead 1.8s ease-out infinite}.bm-bead2{animation-delay:-.6s}.bm-bead3{animation-delay:-1.2s}' +
    '@keyframes bmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bm-bob{animation:bmbob .8s ease-in-out infinite}.bm-bob2{animation-delay:-.4s}' +
    '@keyframes bmfloat{0%{transform:translateX(-30px)}50%{transform:translateX(20px)}100%{transform:translateX(-30px)}}.bm-float{animation:bmfloat 9s ease-in-out infinite}' +
    '@keyframes bmsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bm-sp{animation:bmsp 1.4s ease-out infinite}.bm-sp2{animation-delay:.45s}' +
    '@keyframes bmbird{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.bm-bird{animation:bmbird 12s linear infinite;animation-delay:-3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#e8283c", GOLD = "#ffc93c", BLUE = "#3d7bff";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.55, -0.15, 0.25, 0.65].map((k, i) => '<path class="bm-moss' + (i % 2 ? " bm-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 12 1 22q-2 7 0 12" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const trunk = (x, y, h) => '<path d="M' + (x - 5) + ' ' + (y + h) + 'q4 -' + (h / 2) + ' 2 -' + h + 'h6q-2 ' + (h / 2) + ' 4 ' + h + 'z" fill="#3a2a1e"/>';
  const wheel = (cx, cy, r) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#141414"/><g class="bm-spin"><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.68) + '" fill="#d9dde2" stroke="#8a9098" stroke-width="1"/>' +
    [0, 1, 2, 3, 4].map(i => { const a = i * Math.PI * 2 / 5; return '<path d="M' + cx + ' ' + cy + 'L' + (cx + Math.cos(a) * r * 0.66).toFixed(1) + ' ' + (cy + Math.sin(a) * r * 0.66).toFixed(1) + '" stroke="#6a7078" stroke-width="2"/>'; }).join("") +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.18) + '" fill="#6a7078"/></g>';

  /* 1. St. Charles Av at Jackson Av - St. Charles streetcar, route 12 */
  function bmstation() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (74 + i * 30) + '" y="118" width="22" height="26" rx="2" fill="#f6e7b0" stroke="#8a1c1c" stroke-width="2.5"/>').join("");
    const car = '<g class="anim-train">' +
      '<path d="M76 100q4 -16 20 -24" stroke="#222" stroke-width="2" fill="none"/><path d="M96 76l2 -4" stroke="#222" stroke-width="2"/>' +
      '<circle class="bm-spk" cx="96" cy="74" r="3" fill="#bfe8ff"/>' +
      '<rect x="56" y="104" width="282" height="12" rx="5" fill="#2f4a2a"/><rect x="60" y="100" width="274" height="6" rx="3" fill="#3d5a34"/>' +
      '<rect x="56" y="114" width="282" height="64" rx="4" fill="#4a6b38" stroke="#22331c" stroke-width="2"/>' + win +
      '<rect x="56" y="150" width="282" height="5" fill="#8a1c1c"/><rect x="56" y="155" width="282" height="23" fill="#3f5c30"/>' +
      '<text x="196" y="171" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">ST. CHARLES</text>' +
      '<rect x="318" y="120" width="16" height="50" rx="2" fill="#f6e7b0" stroke="#8a1c1c" stroke-width="2"/>' +
      '<rect x="300" y="106" width="34" height="9" rx="2" fill="#111"/><text x="317" y="113.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffd36a">12 CANAL</text>' +
      '<circle cx="330" cy="166" r="3.5" fill="#fff3b0"/>' +
      '<rect x="80" y="178" width="60" height="10" fill="#222"/><rect x="256" y="178" width="60" height="10" fill="#222"/>' +
      '<circle cx="94" cy="190" r="6" fill="#111"/><circle cx="126" cy="190" r="6" fill="#111"/><circle cx="270" cy="190" r="6" fill="#111"/><circle cx="302" cy="190" r="6" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bms1)"/>' +
      '<g class="bm-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#2a1a2e" stroke-width="2" fill="none"/></g>' +
      /* Garden District house with white columns behind */
      '<rect x="150" y="62" width="150" height="44" fill="#efe6d4"/><path d="M144 62l81 -22l81 22z" fill="#d9cdb6"/>' +
      [160, 190, 220, 250, 280].map(x => '<rect x="' + x + '" y="62" width="7" height="44" fill="#ffffff"/>').join("") +
      '<rect x="150" y="80" width="150" height="3" fill="#cfc3aa"/>' +
      '<path d="M0 74h400" stroke="#1e1e1e" stroke-width="1.2"/>' +
      trunk(40, 60, 60) + oak(40, 52, 58, "#23402a") + trunk(372, 60, 60) + oak(372, 50, 56, "#1f3a26") +
      '<rect x="0" y="176" width="400" height="22" fill="#5f8a3a"/><path d="M0 186h400" stroke="#8d7b5e" stroke-width="5"/><path d="M0 192h400" stroke="#8d7b5e" stroke-width="5"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#38383c"/><path d="M0 230h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      car +
      /* RTA car stop sign on a pole */
      '<rect x="356" y="96" width="5" height="96" fill="#2f2f2f"/><rect x="338" y="100" width="42" height="46" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' +
      '<circle cx="359" cy="116" r="11" fill="#2e7d32"/><text x="359" y="120.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">12</text><text x="359" y="139" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">CAR STOP</text>' +
      '<rect x="8" y="10" width="236" height="42" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<circle cx="28" cy="31" r="12" fill="#2e7d32"/><text x="28" y="35.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">12</text>' +
      '<text x="48" y="29" ' + font + ' font-size="15" fill="#fff">ST. CHARLES</text><text x="48" y="44" ' + font + ' font-size="9" fill="#cfd8dc">at Jackson Av  •  Uptown</text>',
      sky("bms1", "#7ec3ea", "#f5d9a8"));
  }

  /* 2. O.C. Haley Blvd, Central City */
  function bmhaley() {
    const front = (x, w, c, trim) => '<g><rect x="' + x + '" y="92" width="' + w + '" height="104" fill="' + c + '"/>' +
      '<rect x="' + x + '" y="88" width="' + w + '" height="6" fill="' + trim + '"/>' +
      [0, 1, 2].map(i => '<rect x="' + (x + 8 + i * (w - 16) / 3) + '" y="100" width="' + ((w - 16) / 3 - 8) + '" height="24" fill="#2b2f3a" stroke="' + trim + '" stroke-width="2"/>').join("") +
      '<path d="M' + (x - 2) + ' 134h' + (w + 4) + '" stroke="#1a1a1a" stroke-width="3"/>' +
      Array.from({ length: Math.floor(w / 8) }, (_, i) => '<path d="M' + (x + 4 + i * 8) + ' 134v-10" stroke="#1a1a1a" stroke-width="1.2"/>').join("") +
      '<path d="M' + x + ' 124h' + w + '" stroke="#1a1a1a" stroke-width="1.5"/>' +
      '<rect x="' + (x + 6) + '" y="146" width="' + (w - 12) + '" height="40" fill="#ffe6a3" class="bm-flk"/>' +
      '<path d="M' + (x + w / 2) + ' 146v40" stroke="' + trim + '" stroke-width="3"/>' +
      '<rect x="' + (x + 2) + '" y="138" width="' + (w - 4) + '" height="6" fill="' + trim + '"/>' +
      '<path d="M' + (x + 2) + ' 134v62M' + (x + w - 2) + ' 134v62" stroke="#1a1a1a" stroke-width="2"/></g>';
    const coupe = '<g class="bm-roll"><path d="M10 216q6 -22 34 -24l22 -16q10 -6 32 -6h26q16 0 28 14l20 8q14 4 14 18v10h-176z" fill="' + RED + '" stroke="#5a0a12" stroke-width="2"/>' +
      '<path d="M70 192l14 -12q6 -4 18 -4h18q10 0 18 10l4 6z" fill="#2a3a4a"/><path d="M110 176v16" stroke="' + RED + '" stroke-width="3"/>' +
      '<path d="M16 206h170" stroke="#ff9aa6" stroke-width="2" opacity=".7"/><rect x="176" y="208" width="10" height="5" rx="1" fill="#fff3b0"/>' +
      wheel(50, 226, 15) + wheel(150, 226, 15) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bms2)"/>' +
      front(0, 92, "#9b3d2c", "#e9dcc2") + front(96, 104, "#c9b48a", "#3b4a3a") + front(204, 92, "#6f8fa6", "#f2ece0") + front(300, 100, "#a24a36", "#e9dcc2") +
      '<rect x="0" y="196" width="400" height="10" fill="#bdb6aa"/><rect x="0" y="206" width="400" height="54" fill="#3a3a3e"/><path d="M0 244h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      coupe +
      '<rect x="14" y="14" width="210" height="40" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="26" y="32" ' + font + ' font-size="14" fill="#fff">O.C. HALEY BLVD</text><text x="26" y="47" ' + font + ' font-size="9" fill="#cfd8dc">CENTRAL CITY  •  THE 3RD WARD</text>',
      sky("bms2", "#f2a65a", "#ffd9a0"));
  }

  /* 3. MSY - curved-roof terminal, private jet lifting off in the rain */
  function bmfly() {
    const rain = Array.from({ length: 34 }, (_, i) => '<path class="bm-rain' + (i % 2 ? " bm-rain2" : "") + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 53) % 200) + 'l-5 14" stroke="#9fb6d6" stroke-width="1.4" opacity=".7"/>').join("");
    const jet = '<g class="bm-jet"><path d="M0 0q20 -8 70 -6l14 -12h8l-6 14q18 2 22 6q-4 4 -22 6l-70 2q-14 0 -16 -4z" fill="#f4f6f8" stroke="#55606c" stroke-width="1.5"/>' +
      '<path d="M30 -2l18 -16h8l-10 16z" fill="#dfe4ea" stroke="#55606c" stroke-width="1"/><path d="M34 6l22 12h8l-12 -12z" fill="#dfe4ea" stroke="#55606c" stroke-width="1"/>' +
      [0, 1, 2, 3, 4].map(i => '<circle cx="' + (24 + i * 9) + '" cy="-1" r="2" fill="#26313c"/>').join("") +
      '<path d="M8 2h80" stroke="' + RED + '" stroke-width="1.5"/><circle cx="104" cy="2" r="2" fill="#ff5252" class="bm-flk"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bms3)"/>' +
      '<path class="bm-bolt" d="M300 0l-14 34h12l-16 36l30 -44h-12l14 -26z" fill="#fff6c8"/>' +
      '<ellipse cx="80" cy="30" rx="90" ry="26" fill="#3a4250"/><ellipse cx="240" cy="22" rx="110" ry="24" fill="#323a48"/><ellipse cx="380" cy="34" rx="80" ry="22" fill="#3a4250"/>' +
      /* terminal: long glass front under a wavy white roof */
      '<rect x="0" y="146" width="400" height="44" fill="#5b7a94"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20 + 10) + ' 146v44" stroke="#2c3e50" stroke-width="2"/>').join("") +
      '<rect x="0" y="160" width="400" height="10" fill="#ffe08a" opacity=".55" class="bm-flk"/>' +
      '<path d="M-10 146q50 -22 105 -4q52 -22 105 -4q52 -22 105 -4q52 -22 105 -4v8h-420z" fill="#f2f4f6" stroke="#b9c2cc" stroke-width="2"/>' +
      '<path d="M372 146v-58h10v58z" fill="#cfd6dd"/><rect x="364" y="78" width="26" height="14" rx="3" fill="#2c3e50"/><rect x="366" y="80" width="22" height="8" fill="#9fe0ff" opacity=".7"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2b2e33"/><path d="M0 222h400" stroke="#f0f0f0" stroke-width="3" stroke-dasharray="26 18"/>' +
      [30, 110, 190, 270, 350].map(x => '<circle cx="' + x + '" cy="206" r="2.5" fill="#6ec6ff" class="bm-flk"/>').join("") +
      jet + rain +
      '<rect x="12" y="198" width="230" height="40" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="24" y="216" ' + font + ' font-size="13" fill="#fff">MSY  •  LOUIS ARMSTRONG INT\'L</text><text x="24" y="231" ' + font + ' font-size="9" fill="' + GOLD + '">FLY IN ANY WEATHER</text>',
      sky("bms3", "#1d2433", "#4c5a6e"));
  }

  /* 4. Jackson Av, Mardi Gras morning - black-and-gold float, gold coconut, beads */
  function bmzulu() {
    const crowd = Array.from({ length: 16 }, (_, i) => '<g class="bm-bob' + (i % 2 ? " bm-bob2" : "") + '"><circle cx="' + (12 + i * 25) + '" cy="214" r="7" fill="#1a1420"/><rect x="' + (5 + i * 25) + '" y="220" width="14" height="40" rx="5" fill="#1a1420"/>' +
      (i % 3 === 0 ? '<path d="M' + (8 + i * 25) + ' 222l-8 -18" stroke="#1a1420" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>').join("");
    const beads = [["#9b30ff", 0], [GOLD, 1], ["#2ecc71", 2]].map(([c, k]) => '<g class="bm-bead bm-bead' + (k ? k + 1 : "") + '"><ellipse cx="' + (560 - 260 + k * 22) + '" cy="232" rx="10" ry="6" fill="none" stroke="' + c + '" stroke-width="3" stroke-dasharray="2 2"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bms4)"/>' +
      trunk(30, 50, 80) + oak(30, 44, 60, "#22402a") + trunk(370, 50, 80) + oak(370, 40, 60, "#1e3a26") +
      '<g class="bm-float">' +
      '<rect x="70" y="120" width="240" height="70" rx="6" fill="#141414" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M70 130h240M70 180h240" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (76 + i * 20) + ' 190q10 10 20 0" fill="' + GOLD + '"/>').join("") +
      '<path d="M90 120l20 -40h160l20 40z" fill="' + GOLD + '" stroke="#7a5a10" stroke-width="2"/>' +
      '<path d="M120 80l10 -26l10 26M180 80l10 -30l10 30M240 80l10 -26l10 26" fill="#141414" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="190" y="162" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">MARDI GRAS DAY</text>' +
      '<circle cx="104" cy="206" r="10" fill="#333"/><circle cx="276" cy="206" r="10" fill="#333"/></g>' +
      /* the hand-painted gold coconut */
      '<g transform="translate(330 150)"><ellipse cx="0" cy="0" rx="26" ry="22" fill="' + GOLD + '" stroke="#7a5a10" stroke-width="2"/><path d="M-24 -6q24 -8 48 0M-25 6q25 -8 50 0" stroke="#141414" stroke-width="4" fill="none"/><path d="M-14 -16l4 8l4 -8l4 8l4 -8l4 8l4 -8" stroke="#141414" stroke-width="1.5" fill="none"/><circle cx="0" cy="15" r="3" fill="#141414"/><circle cx="-10" cy="14" r="2" fill="#141414"/><circle cx="10" cy="14" r="2" fill="#141414"/></g>' +
      beads + crowd +
      '<rect x="12" y="12" width="224" height="40" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="24" y="30" ' + font + ' font-size="14" fill="#fff">JACKSON AV</text><text x="24" y="45" ' + font + ' font-size="9" fill="' + GOLD + '">MARDI GRAS MORNING  •  UPTOWN</text>',
      sky("bms4", "#4aa3df", "#bfe3f5"));
  }

  /* 5. LaSalle St and Toledano St, the Four Seasons tower behind */
  function bmcorner() {
    const bricks = Array.from({ length: 9 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2 ? 15 : 0) - 15) + '" y="' + (120 + r * 15) + '" width="28" height="13" fill="' + ((r * 3 + c) % 5 ? "#8a3b2a" : "#7a3324") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bms5)"/>' +
      /* skyline: other towers dim, the white cross-shaped Four Seasons tower bright */
      '<rect x="40" y="58" width="26" height="62" fill="#2a2f44"/><rect x="70" y="40" width="22" height="80" fill="#262b40"/><rect x="250" y="50" width="30" height="70" fill="#2a2f44"/><rect x="284" y="66" width="24" height="54" fill="#262b40"/>' +
      '<g><rect x="150" y="20" width="56" height="100" fill="#e9e6df"/><rect x="138" y="20" width="12" height="100" fill="#d4d0c6"/><rect x="206" y="20" width="12" height="100" fill="#d4d0c6"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M150 ' + (26 + i * 8) + 'h56" stroke="#b9b3a6" stroke-width="2"/>').join("") +
      '<path d="M138 20h80v-6h-80z" fill="#cfcabd"/><rect x="170" y="2" width="16" height="12" fill="#e9e6df"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (154 + i * 13) + '" y="' + (40 + i * 18) + '" width="6" height="4" fill="#ffe08a" class="bm-flk' + (i % 2 ? " bm-flk2" : "") + '"/>').join("") + '</g>' +
      '<rect x="0" y="118" width="400" height="142" fill="#7a3324"/>' + bricks +
      tag("BIRDMAN", 40, 196, 46, RED, -7) + tag("CASH MONEY", 236, 146, 18, GOLD, -4) + tag("BRRR", 262, 226, 26, BLUE, -3) +
      '<g transform="translate(338 196)"><circle class="bm-sp" cx="0" cy="0" r="4" fill="' + RED + '" opacity=".7"/><circle class="bm-sp bm-sp2" cx="6" cy="-4" r="3" fill="' + RED + '" opacity=".6"/></g>' +
      '<rect x="0" y="246" width="400" height="14" fill="#9a958c"/>' +
      '<rect x="362" y="40" width="6" height="210" fill="#2f2f2f"/>' + sign(296, 44, 102, "TOLEDANO ST") + sign(306, 70, 88, "LASALLE ST"),
      sky("bms5", "#141a3a", "#c8604a"));
  }

  window.SCENES = { bmstation, bmhaley, bmfly, bmzulu, bmcorner };
})();
