/* juicewrld scenes (Regions tab: Chicago; Homewood / Calumet Park, south suburbs). CSS classes prefixed jw- (the page's own anim-train is kept).
   1 Homewood on the Metra Electric (18015 Park Ave): the 1923 Mission Revival depot (cream stucco, red clay-tile roof, curved parapet), a silver bi-level electric train under the catenary sliding in.
   2 Homewood-Flossmoor High School (999 S Kedzie Ave, Flossmoor), where he graduated in 2017: the long brick school in scarlet and white, music notes drifting out of the band room (he played piano, guitar, drums and trumpet).
   3 Calumet Park, the south-suburb village where he played as a kid: ranch houses, a playground swing going, a ball bouncing.
   4 The United Center, home of Juice WRLD Day: the red-brick arena with its big glass arch, purple stage lights sweeping, the crowd's phone lights.
   5 Ridge Rd and Dixie Hwy in downtown Homewood: green signs, JUICE WRLD tagged, a hand-drawn 999 (every 9 drawn with a straight stem), the Metra Electric rolling past the depot behind.
   No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jwflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.jw-flk{animation:jwflick 2.4s infinite}' +
    '@keyframes jwcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.jw-car{animation:jwcar 5.5s linear infinite}.jw-car2{animation-delay:-2.7s}' +
    '@keyframes jwcloud{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.jw-cloud{animation:jwcloud 24s linear infinite}.jw-cloud2{animation-delay:-12s}' +
    '@keyframes jwglow{0%,100%{opacity:.3}50%{opacity:1}}.jw-glow{animation:jwglow 2.8s ease-in-out infinite}.jw-glow2{animation-delay:-1.4s}' +
    '@keyframes jwbird{0%{transform:translate(-30px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,0)}}.jw-bird{animation:jwbird 10s linear infinite}' +
    '@keyframes jwnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(40px,-60px);opacity:0}}.jw-note{animation:jwnote 3s ease-out infinite}.jw-note2{animation-delay:-1s}.jw-note3{animation-delay:-2s}' +
    '@keyframes jwswing{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.jw-swing{transform-box:view-box;transform-origin:120px 150px;animation:jwswing 2.2s ease-in-out infinite}' +
    '@keyframes jwball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.jw-ball{animation:jwball 1.3s ease-in-out infinite}' +
    '@keyframes jwbeam{0%,100%{transform:rotate(-26deg)}50%{transform:rotate(26deg)}}.jw-beam{transform-box:fill-box;transform-origin:50% 100%;animation:jwbeam 3.6s ease-in-out infinite}.jw-beam2{animation-delay:-1.8s}' +
    '@keyframes jwtw{0%,100%{opacity:.2}50%{opacity:1}}.jw-tw{animation:jwtw 1.4s ease-in-out infinite}.jw-tw2{animation-delay:-.7s}' +
    '@keyframes jwsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(18px,-26px);opacity:0}}.jw-sp{animation:jwsp 1.3s ease-out infinite}.jw-sp2{animation-delay:-.6s}' +
    '@keyframes jwrail{from{transform:translateX(-300px)}to{transform:translateX(460px)}}.jw-rail{animation:jwrail 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = height */
  const nine = (x, y, sz, c, w) => { const r = sz * 0.26; w = w || sz * 0.14; return '<circle cx="' + (x + r) + '" cy="' + (y - sz + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r) + ' ' + (y - sz + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '" stroke-linecap="round"/>'; };
  const METRA = "#1f4e79", PURP = "#a66bff", MINT = "#4ff0c8", PINK = "#ff5c8a", SCAR = "#c8102e", BRICK = "#9a4430";
  const brick = (x, y, w, h, c, m) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (c || BRICK) + '"/>' +
    Array.from({ length: Math.floor(h / 5) }, (_, i) => '<path d="M' + x + ' ' + (y + 5 + i * 5) + 'h' + w + '" stroke="' + (m || "#7a3122") + '" stroke-width=".7"/>').join("");
  /* a silver Metra Electric bi-level car with the pantograph */
  const mecar = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" rx="6" fill="#d3d8dc" stroke="#7d858d" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 16) / 22) }, (_, i) => '<rect x="' + (x + 10 + i * 22) + '" y="' + (y + 8) + '" width="15" height="11" rx="2" fill="#26323c"/><rect x="' + (x + 10 + i * 22) + '" y="' + (y + 28) + '" width="15" height="11" rx="2" fill="#26323c"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 44) + '" width="' + w + '" height="4" fill="' + METRA + '"/><rect x="' + x + '" y="' + (y + 49) + '" width="' + w + '" height="2" fill="#c8102e"/>' +
    '<path d="M' + (x + w / 2 - 14) + ' ' + y + 'l10 -14h8l10 14M' + (x + w / 2 - 8) + ' ' + (y - 14) + 'h16" stroke="#3a3f45" stroke-width="2" fill="none"/>';
  /* the Mission Revival depot: cream stucco, red tile roof, curved parapet, arched windows */
  const depot = (x, y, s) => { s = s || 1; const X = v => x + v * s, Y = v => y + v * s;
    return '<path d="M' + X(0) + ' ' + Y(30) + 'h' + 120 * s + 'v' + 46 * s + 'h' + -120 * s + 'z" fill="#efe3c8" stroke="#b9a785" stroke-width="1.5"/>' +
      '<path d="M' + X(-8) + ' ' + Y(34) + 'l' + 14 * s + ' ' + -16 * s + 'h' + 108 * s + 'l' + 14 * s + ' ' + 16 * s + 'z" fill="#b34a2c"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + X(8 + i * 9.5) + ' ' + Y(19) + 'v' + 14 * s + '" stroke="#8a3520" stroke-width="1.2"/>').join("") +
      '<path d="M' + X(36) + ' ' + Y(20) + 'q' + 24 * s + ' ' + -26 * s + ' ' + 48 * s + ' 0z" fill="#efe3c8" stroke="#b9a785" stroke-width="1.5"/>' +
      [14, 44, 74, 100].map(v => '<path d="M' + X(v) + ' ' + Y(72) + 'v' + -20 * s + 'q' + 6 * s + ' ' + -9 * s + ' ' + 12 * s + ' 0v' + 20 * s + 'z" fill="#3b4a58"/>').join(""); };

  /* 1. Homewood on the Metra Electric */
  function jwstation() {
    const train = '<g class="anim-train">' + mecar(14, 110, 176) + mecar(194, 110, 176) +
      '<rect x="350" y="116" width="20" height="48" rx="3" fill="#bcc2c7"/><circle cx="360" cy="156" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="96" width="100" height="10" rx="2" fill="#111"/><text x="312" y="104" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">MILLENNIUM STA</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jws1)"/>' +
      '<g class="jw-cloud"><ellipse cx="40" cy="28" rx="30" ry="9" fill="#fff" opacity=".6"/></g><g class="jw-cloud jw-cloud2"><ellipse cx="40" cy="50" rx="22" ry="7" fill="#fff" opacity=".45"/></g>' +
      '<g fill="#5f8a4a"><circle cx="30" cy="96" r="26"/><circle cx="380" cy="92" r="28"/></g>' +
      depot(140, 30, 1) +
      /* catenary */
      '<path d="M0 84h400" stroke="#2e3338" stroke-width="1.5"/><path d="M0 90q50 6 100 0t100 0t100 0t100 0" stroke="#2e3338" stroke-width="1" fill="none"/>' +
      [10, 130, 250, 390].map(x => '<rect x="' + (x - 2) + '" y="70" width="4" height="100" fill="#4b5157"/><path d="M' + (x - 12) + ' 74h24" stroke="#4b5157" stroke-width="3"/>').join("") +
      train +
      '<rect x="0" y="170" width="400" height="14" fill="#c9c4b8"/><rect x="0" y="170" width="400" height="3" fill="#f2d03b"/>' +
      '<rect x="0" y="184" width="400" height="52" fill="#8d8478"/>' + Array.from({ length: 30 }, (_, i) => '<rect x="' + (i * 14) + '" y="196" width="8" height="4" fill="#6e665c"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4c55"/><path d="M0 248h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("jw-car", 0, 240, "#e6e6e6") + car("jw-car jw-car2", 0, 240, PURP) +
      '<rect x="110" y="200" width="180" height="28" rx="3" fill="#111"/><text x="124" y="220" ' + font + ' font-size="16" fill="#fff">Homewood</text>' + badge(220, 214, "ME", METRA) +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">METRA ELECTRIC · THE 1923 DEPOT · HOMEWOOD</text>',
      sky("jws1", "#a3cdea", "#f6e6cc"));
  }

  /* 2. Homewood-Flossmoor High School */
  function jwschool() {
    const win = (x, y, n, gap) => Array.from({ length: n }, (_, i) => '<rect x="' + (x + i * gap) + '" y="' + y + '" width="' + (gap - 8) + '" height="16" fill="#9fc7e0" stroke="#fff" stroke-width="1.5"/>').join("");
    const notes = [0, 1, 2].map(i => '<g class="jw-note jw-note' + (i + 1) + '"><circle cx="' + (300 + i * 14) + '" cy="' + (128 - i * 6) + '" r="4" fill="' + PURP + '"/><path d="M' + (304 + i * 14) + ' ' + (128 - i * 6) + 'v-16" stroke="' + PURP + '" stroke-width="2"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jws2)"/>' +
      '<g class="jw-cloud"><ellipse cx="60" cy="30" rx="34" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<g fill="#5f8a4a"><circle cx="16" cy="140" r="24"/><circle cx="388" cy="136" r="26"/></g>' +
      brick(20, 92, 360, 108, "#a5513a", "#86402d") +
      '<rect x="16" y="86" width="368" height="8" fill="#f4f1ea"/>' +
      win(34, 104, 6, 26) + win(246, 104, 5, 26) + win(34, 150, 6, 26) + win(246, 150, 5, 26) +
      /* central entrance block, scarlet and white */
      '<rect x="190" y="70" width="50" height="130" fill="#f4f1ea"/><rect x="198" y="78" width="34" height="8" fill="' + SCAR + '"/>' +
      '<rect x="200" y="150" width="30" height="50" fill="#2a3540"/><path d="M215 150v50" stroke="#9fc7e0" stroke-width="1.5"/>' +
      '<rect x="150" y="60" width="130" height="14" fill="' + SCAR + '"/><text x="215" y="71" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">HOMEWOOD-FLOSSMOOR</text>' +
      /* flagpole with a scarlet pennant */
      '<path d="M360 200V40" stroke="#c9ccd1" stroke-width="3"/><path d="M360 44l26 8l-26 8z" fill="' + SCAR + '"/>' +
      notes +
      '<rect x="0" y="200" width="400" height="12" fill="#7aa35a"/><rect x="0" y="212" width="400" height="10" fill="#c9c4b8"/><rect x="0" y="222" width="400" height="38" fill="#4a4c55"/><path d="M0 240h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("jw-car", 0, 232, "#e6e6e6") + car("jw-car jw-car2", 0, 232, SCAR) +
      '<g class="jw-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="76" y="8" width="248" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">H-F HIGH · VIKINGS · CLASS OF 2017</text>',
      sky("jws2", "#86b8e0", "#f2dcc0"));
  }

  /* 3. Calumet Park, where he played as a kid */
  function jwpark() {
    const house = (x, c) => '<rect x="' + x + '" y="120" width="70" height="44" fill="' + c + '"/><path d="M' + (x - 6) + ' 122l41 -24l41 24z" fill="#5a4a42"/>' +
      '<rect x="' + (x + 8) + '" y="132" width="16" height="12" fill="#3a4652"/><rect x="' + (x + 46) + '" y="132" width="16" height="12" fill="#3a4652"/><rect x="' + (x + 28) + '" y="138" width="14" height="26" fill="#f2f0ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jws3)"/>' +
      '<g class="jw-cloud"><ellipse cx="40" cy="30" rx="30" ry="8" fill="#fff" opacity=".7"/></g><g class="jw-cloud jw-cloud2"><ellipse cx="40" cy="54" rx="22" ry="6" fill="#fff" opacity=".5"/></g>' +
      house(10, "#d9cbb0") + house(96, "#b7c4cf") + house(296, "#e2d6bf") +
      '<g fill="#4f7f3e"><circle cx="196" cy="128" r="22"/><circle cx="230" cy="120" r="26"/><circle cx="262" cy="130" r="20"/></g>' +
      '<rect x="0" y="164" width="400" height="72" fill="#86b35c"/>' +
      /* swing set */
      '<path d="M80 216l40 -66l40 66M240 216l-40 -66" stroke="' + SCAR + '" stroke-width="4" fill="none"/><path d="M120 150h80" stroke="' + SCAR + '" stroke-width="5"/>' +
      '<g class="jw-swing"><path d="M114 150v40M126 150v40" stroke="#555" stroke-width="1.5"/><rect x="110" y="190" width="20" height="5" rx="2" fill="#222"/></g>' +
      '<path d="M174 150v40M186 150v40" stroke="#555" stroke-width="1.5"/><rect x="170" y="190" width="20" height="5" rx="2" fill="#222"/>' +
      /* hoop and a bouncing ball */
      '<path d="M336 228V150" stroke="#777" stroke-width="4"/><rect x="314" y="138" width="40" height="26" fill="#fff" stroke="#777" stroke-width="2"/><path d="M322 164h24l-4 12h-16z" stroke="#e2702a" stroke-width="2" fill="none"/>' +
      '<g class="jw-ball"><circle cx="300" cy="214" r="7" fill="#e2702a" stroke="#7a3a12" stroke-width="1.2"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4c55"/>' + car("jw-car", 0, 244, PURP) +
      '<g class="jw-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="70" y="6" width="260" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CALUMET PARK · WHERE HE PLAYED AS A KID</text>',
      sky("jws3", "#7ab8e2", "#e6f2f8"));
  }

  /* 4. United Center, Juice WRLD Day */
  function jwcenter() {
    const phones = Array.from({ length: 26 }, (_, i) => '<rect class="jw-tw' + (i % 2 ? " jw-tw2" : "") + '" x="' + (8 + i * 15) + '" y="' + (226 + (i % 3) * 6) + '" width="5" height="8" rx="1" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jws4)"/>' +
      '<g fill="#fff" opacity=".7"><circle cx="40" cy="20" r="1.2"/><circle cx="120" cy="34" r="1"/><circle cx="300" cy="18" r="1.3"/><circle cx="360" cy="40" r="1"/></g>' +
      /* light beams from behind the arena */
      '<g opacity=".5"><path class="jw-beam" d="M120 160l-14 -150h28z" fill="' + PURP + '"/><path class="jw-beam jw-beam2" d="M280 160l-14 -150h28z" fill="' + MINT + '"/><path class="jw-beam jw-beam2" d="M200 160l-12 -150h24z" fill="' + PINK + '"/></g>' +
      /* the arena: red brick wings, the big glass arch in the middle */
      brick(20, 92, 360, 124, "#8f3b2a", "#74301f") +
      '<rect x="16" y="86" width="368" height="8" fill="#b9b2a4"/>' +
      '<path d="M120 216V122q80 -64 160 0v94z" fill="#2c3e58" stroke="#b9b2a4" stroke-width="4"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (140 + i * 20) + ' 216V' + (110 - Math.round(18 * Math.sin((i + 1) / 8 * Math.PI))) + '" stroke="#b9b2a4" stroke-width="1.5"/>').join("") +
      '<path d="M120 160h160M120 190h160" stroke="#b9b2a4" stroke-width="1.5"/>' +
      '<rect class="jw-glow" x="136" y="164" width="128" height="24" fill="' + PURP + '" opacity=".6"/>' +
      [40, 70, 300, 330].map(x => '<rect x="' + x + '" y="110" width="18" height="30" fill="#3b4a58"/><rect x="' + x + '" y="160" width="18" height="30" fill="#3b4a58"/>').join("") +
      '<rect x="0" y="216" width="400" height="44" fill="#1a1726"/>' + phones +
      '<rect x="84" y="6" width="232" height="20" rx="3" fill="#111" opacity=".8"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">UNITED CENTER · JUICE WRLD DAY</text>',
      sky("jws4", "#140c2a", "#4b2a6e"));
  }

  /* 5. Ridge Rd and Dixie Hwy, downtown Homewood */
  function jwcorner() {
    const rail = '<g class="jw-rail"><rect x="0" y="62" width="130" height="30" rx="4" fill="#d3d8dc"/><rect x="134" y="62" width="130" height="30" rx="4" fill="#d3d8dc"/>' +
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (8 + i * 23) + '" y="67" width="13" height="8" fill="#26323c"/>').join("") + '<rect x="0" y="84" width="264" height="3" fill="' + METRA + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jws5)"/>' +
      '<g opacity=".85">' + depot(230, 8, 0.9) + '</g>' +
      '<path d="M0 58h400" stroke="#2e3338" stroke-width="1"/>' + rail + '<rect x="0" y="92" width="400" height="6" fill="#4b5157"/>' +
      '<rect x="0" y="118" width="400" height="106" fill="#5a4a6a"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#4a3c58" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (118 + i * 8) + 'v8" stroke="#4a3c58" stroke-width="1"/>').join("")).join("") +
      tag("JUICE WRLD", 12, 178, 42, PURP, -6) +
      /* a hand-drawn 999 with straight stems, outlined in black like the tags */
      '<g transform="rotate(-6 200 200)">' + [0, 1, 2].map(i => nine(196 + i * 24, 214, 34, "#000", 9) + nine(196 + i * 24, 214, 34, MINT, 5)).join("") + '</g>' +
      tag("WRLD", 24, 214, 22, "#fff", -3) + tag("GRADE A", 100, 218, 15, PINK, -5) + tag("LUCID", 282, 206, 16, "#fff3b0", -4) +
      '<g class="jw-sp"><circle cx="276" cy="176" r="3" fill="' + MINT + '" opacity=".7"/></g><g class="jw-sp jw-sp2"><circle cx="282" cy="168" r="2" fill="' + MINT + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car("jw-car", 0, 240, "#e6e6e6") +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 106, 100, "Ridge Rd") + sign(280, 132, 116, "Dixie Hwy") +
      '<rect x="8" y="104" width="4" height="120" fill="#222"/><circle class="jw-flk" cx="10" cy="102" r="7" fill="#ffe9a8"/>',
      sky("jws5", "#1a1238", "#c86a8a"));
  }

  window.SCENES = { jwstation: jwstation, jwschool: jwschool, jwpark: jwpark, jwcenter: jwcenter, jwcorner: jwcorner };
})();
