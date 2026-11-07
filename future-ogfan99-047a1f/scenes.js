/* future scenes (Regions tab: Atlanta; Kirkwood, East Atlanta - Zone 6). CSS classes prefixed ft- (the page's own anim-train is kept).
   1 East Lake station on MARTA's Blue line, the stop on the Kirkwood / East Lake line: open-air platform, flat canopy, a silver train sliding in.
   2 Bessie Branham Park in Kirkwood: the neighborhood courts under the pines, a ball bouncing toward the rim.
   3 Columbia High School (DeKalb), whose weight room he paid to rebuild: big windows, a loaded barbell going up and down.
   4 East Lake Golf Club: the brick clubhouse across the lake, the flag on the green fluttering.
   5 Hosea L Williams Dr and Rogers St in Kirkwood: green signs, FUTURE tagged on the wall, a flashlight beam sweeping ("Turn On the Lights"), the old Pullman Yard sheds behind, Pluto in the sky.
   400 x 260 SVGs. No logos, no faces, no digits drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ftflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ft-flk{animation:ftflick 2.2s infinite}.ft-flk2{animation-delay:.7s}' +
    '@keyframes ftball{0%{transform:translate(0,0)}25%{transform:translate(40px,-60px)}50%{transform:translate(80px,-70px)}75%{transform:translate(120px,-40px)}100%{transform:translate(150px,-58px)}}.ft-ball{animation:ftball 2.4s ease-in-out infinite alternate}' +
    '@keyframes ftlift{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.ft-lift{animation:ftlift 1.6s ease-in-out infinite}' +
    '@keyframes ftflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-10deg)}}.ft-flag{transform-box:fill-box;transform-origin:0 50%;animation:ftflag 1s ease-in-out infinite}' +
    '@keyframes ftripple{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.ft-rip{animation:ftripple 3s ease-in-out infinite}.ft-rip2{animation-delay:-1.5s}' +
    '@keyframes ftbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(14deg)}}.ft-beam{transform-box:view-box;transform-origin:360px 120px;animation:ftbeam 4s ease-in-out infinite}' +
    '@keyframes ftspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ft-sp{animation:ftspray 1.4s ease-out infinite}.ft-sp2{animation-delay:.45s}' +
    '@keyframes ftbird{0%{transform:translate(0,0)}100%{transform:translate(430px,-24px)}}.ft-bird{animation:ftbird 13s linear infinite}.ft-bird2{animation-delay:-6.5s}' +
    '@keyframes fttw{0%,100%{opacity:.2}50%{opacity:1}}.ft-tw{animation:fttw 2s ease-in-out infinite}.ft-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + (y - 4) + '" width="6" height="' + (r + 4) + '" fill="#4a3220"/><circle cx="' + x + '" cy="' + (y - r * .6) + '" r="' + r + '" fill="' + (c || "#2f5a34") + '"/>';
  const PURP = "#b06cff", GOLD = "#f2c94c", ICE = "#39c0ff";

  /* 1. East Lake station: open-air platform, flat canopy, silver MARTA train with the blue band */
  function ftstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="112" width="34" height="20" rx="3" fill="#1d2731"/>').join("");
    const train = '<g class="anim-train"><path d="M20 104h312q24 0 30 28v26H20z" fill="#dfe3e8" stroke="#7d868f" stroke-width="2"/>' + wins +
      '<rect x="20" y="138" width="342" height="6" fill="#0075b2"/><rect x="20" y="144" width="342" height="3" fill="#f39a1e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (96 + i * 92) + '" y="110" width="4" height="46" fill="#aeb6be"/>').join("") +
      '<path d="M332 108q22 4 28 24h-28z" fill="#1d2731"/><circle cx="354" cy="150" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fts1)"/>' +
      Array.from({ length: 10 }, (_, i) => tree(20 + i * 42, 104, 16 + (i * 5) % 8, i % 2 ? "#2f5a34" : "#3a6a3c")).join("") +
      '<rect x="0" y="34" width="400" height="10" fill="#d9d4c6"/><rect x="0" y="44" width="400" height="4" fill="#9a958a"/>' +
      [30, 140, 250, 360].map(x => '<rect x="' + (x - 3) + '" y="48" width="6" height="56" fill="#8e8a80"/>').join("") +
      '<g class="ft-flk"><rect x="70" y="48" width="40" height="3" fill="#fff3c4"/></g><g class="ft-flk ft-flk2"><rect x="290" y="48" width="40" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="158" width="400" height="6" fill="#f2c200"/><rect x="0" y="164" width="400" height="26" fill="#b9b4a8"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3e4046"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="242" width="30" height="3" fill="#f2f2f2" opacity=".6"/>').join("") +
      '<rect x="88" y="198" width="224" height="34" rx="3" fill="#111"/><text x="104" y="221" ' + font + ' font-size="18" fill="#fff">East Lake</text>' +
      '<rect x="238" y="205" width="58" height="20" rx="10" fill="#0075b2"/><text x="267" y="219.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">BLUE</text>' +
      '<g class="ft-bird"><path d="M0 20q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a3a" opacity=".85">EAST LAKE · MARTA BLUE LINE · KIRKWOOD</text>',
      sky("fts1", "#9fc8f0", "#f4dcc0"));
  }

  /* 2. Bessie Branham Park: the courts under the pines, a ball arcing toward the rim */
  function ftpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#fts2)"/>' +
      Array.from({ length: 11 }, (_, i) => tree(10 + i * 40, 120, 18 + (i * 7) % 10, i % 2 ? "#2a5230" : "#356638")).join("") +
      '<rect x="20" y="96" width="110" height="34" fill="#b5835a"/><rect x="20" y="90" width="110" height="8" fill="#6a4a34"/>' + [34, 62, 90].map(x => '<rect x="' + x + '" y="104" width="16" height="14" fill="#2a3a4a"/>').join("") +
      '<text x="75" y="128" text-anchor="middle" ' + font + ' font-size="7" fill="#f3ead8">REC CENTER</text>' +
      '<rect x="0" y="130" width="400" height="20" fill="#4a7a3a"/>' +
      '<path d="M20 150h360l20 80H0z" fill="#3a6aa8"/><path d="M40 156h320l16 66H24z" fill="none" stroke="#f2f2f2" stroke-width="2"/>' +
      '<path d="M200 156v66" stroke="#f2f2f2" stroke-width="2"/><ellipse cx="200" cy="189" rx="22" ry="12" fill="none" stroke="#f2f2f2" stroke-width="2"/>' +
      '<path d="M320 156v40q-34 -2 -40 -20" stroke="#f2f2f2" stroke-width="2" fill="none"/>' +
      '<rect x="356" y="96" width="5" height="96" fill="#9a9a9a"/><rect x="336" y="86" width="34" height="24" fill="#f4f4f4" stroke="#555" stroke-width="1.5"/><rect x="346" y="96" width="14" height="10" fill="none" stroke="#c8463a" stroke-width="1.5"/>' +
      '<ellipse cx="338" cy="112" rx="10" ry="2.5" fill="none" stroke="#e8642a" stroke-width="2.5"/><path d="M329 113l3 10M338 114v10M347 113l-3 10" stroke="#eee" stroke-width="1"/>' +
      '<g class="ft-ball"><circle cx="186" cy="172" r="7" fill="#e8742a"/><path d="M179 172h14M186 165v14" stroke="#7a3a12" stroke-width="1"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4a7a3a"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3f0e0" opacity=".95">BESSIE BRANHAM PARK · KIRKWOOD</text>',
      sky("fts2", "#5fa8e8", "#d8ecf8"));
  }

  /* 3. Columbia High School weight room: big windows, a loaded barbell going up and down */
  function ftcolumbia() {
    const bricks = Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (16 + i * 8) + 'h400" stroke="#7a3a26" stroke-width="1"/>').join("");
    const rack = x => '<rect x="' + (x - 3) + '" y="120" width="6" height="96" fill="#2a2a30"/>';
    const bar = '<g class="ft-lift"><rect x="120" y="140" width="160" height="5" rx="2" fill="#c9ccd2"/>' +
      [[126, 30], [138, 38], [262, 38], [274, 30]].map(p => '<rect x="' + (p[0] - 5) + '" y="' + (142 - p[1] / 2) + '" width="10" height="' + p[1] + '" rx="2" fill="' + (p[1] > 32 ? PURP : "#2a2a30") + '" stroke="#111" stroke-width="1"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#9a4a30"/>' + bricks +
      '<rect x="0" y="88" width="400" height="172" fill="#d9d4cc"/>' +
      [20, 150, 280].map(x => '<rect x="' + x + '" y="98" width="100" height="56" fill="#9fd0f0" stroke="#5a5a5a" stroke-width="3"/><path d="M' + (x + 50) + ' 98v56M' + x + ' 126h100" stroke="#5a5a5a" stroke-width="2"/>').join("") +
      '<rect x="0" y="0" width="400" height="12" fill="#5a5a5a"/>' +
      '<text x="200" y="64" text-anchor="middle" ' + font + ' font-size="20" fill="#f3ead8" stroke="#3a1a10" stroke-width="3" paint-order="stroke">COLUMBIA HIGH</text>' +
      '<path d="M0 216h400v44H0z" fill="#3a3a44"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="216" width="38" height="44" fill="' + (i % 2 ? "#33333c" : "#3d3d48") + '"/>').join("") +
      rack(110) + rack(290) + '<path d="M104 160h12M284 160h12" stroke="#c9ccd2" stroke-width="3"/>' + bar +
      '<rect x="168" y="196" width="64" height="12" rx="3" fill="' + PURP + '"/><rect x="176" y="208" width="6" height="10" fill="#2a2a30"/><rect x="218" y="208" width="6" height="10" fill="#2a2a30"/>' +
      [30, 50, 350, 370].map((x, i) => '<rect x="' + (x - 5) + '" y="' + (196 - (i % 2) * 6) + '" width="10" height="' + (20 + (i % 2) * 6) + '" rx="2" fill="#2a2a30"/>').join("") +
      '<rect x="0" y="244" width="400" height="16" fill="#1e1e24"/><text x="200" y="256" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">COLUMBIA HIGH · THE WEIGHT ROOM HE REBUILT</text>',
      "");
  }

  /* 4. East Lake Golf Club: brick clubhouse across the lake, flag on the green */
  function ftgolf() {
    const house = '<rect x="120" y="96" width="160" height="48" fill="#a8552e"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M120 ' + (104 + i * 8) + 'h160" stroke="#7a3a22" stroke-width="1"/>').join("") +
      '<path d="M112 98l32 -26h112l32 26z" fill="#3a3a44"/><path d="M172 72l28 -22l28 22z" fill="#3a3a44"/>' +
      '<rect x="158" y="56" width="10" height="20" fill="#7a3a22"/><rect x="232" y="56" width="10" height="20" fill="#7a3a22"/>' +
      [132, 156, 180, 210, 234, 258].map(x => '<rect x="' + x + '" y="108" width="12" height="18" fill="#f2e2b8"/>').join("") +
      '<rect x="192" y="118" width="16" height="26" fill="#4a2a1a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fts4)"/>' +
      '<g class="ft-bird"><path d="M0 30q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g><g class="ft-bird ft-bird2"><path d="M-40 40q4 -4 8 0q4 -4 8 0" stroke="#2a2a2a" stroke-width="1.6" fill="none"/></g>' +
      Array.from({ length: 11 }, (_, i) => tree(8 + i * 40, 140, 16 + (i * 7) % 9, i % 2 ? "#2a5230" : "#356638")).join("") +
      house +
      '<rect x="0" y="140" width="400" height="26" fill="#5a9a46"/>' +
      '<rect x="0" y="166" width="400" height="40" fill="#3a78a8"/>' +
      '<g class="ft-rip"><path d="M30 176h40M150 186h50M290 178h40" stroke="#bfe0f4" stroke-width="2" opacity=".7"/></g><g class="ft-rip ft-rip2"><path d="M90 196h40M230 196h40M340 192h40" stroke="#bfe0f4" stroke-width="2" opacity=".6"/></g>' +
      '<path d="M120 166h160" stroke="#a8552e" stroke-width="0"/><rect x="140" y="170" width="120" height="14" fill="#a8552e" opacity=".25"/>' +
      '<path d="M0 206q200 -12 400 0v54H0z" fill="#6aaa52"/><ellipse cx="300" cy="226" rx="70" ry="14" fill="#7cc062"/>' +
      '<rect x="318" y="180" width="2.5" height="46" fill="#eee"/><path class="ft-flag" d="M320.5 180h20l-5 6l5 6h-20z" fill="' + PURP + '"/><ellipse cx="319" cy="226" rx="5" ry="2" fill="#2a2a2a"/>' +
      '<circle cx="250" cy="230" r="3" fill="#fff"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f3f0e0" opacity=".95">EAST LAKE GOLF CLUB · ACROSS THE LAKE</text>',
      sky("fts4", "#f0b07a", "#fbe6c8"));
  }

  /* 5. Hosea L Williams Dr and Rogers St: green signs, FUTURE tagged, a flashlight beam sweeping, Pullman Yard sheds behind, Pluto up top */
  function ftcorner() {
    const sheds = Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 46 + 30) + ' 132v-34l23 -16l23 16v34z" fill="#6a3a2a"/>' +
      Array.from({ length: 3 }, (_, k) => '<rect x="' + (i * 46 + 36 + k * 12) + '" y="104" width="8" height="14" fill="#2a2030"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fts5)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle class="ft-tw' + (i % 2 ? " ft-tw2" : "") + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 23) % 60 + 6) + '" r="1" fill="#fff"/>').join("") +
      '<circle cx="60" cy="36" r="18" fill="url(#ftpl)"/><path d="M52 40q8 6 16 -2" stroke="#e6d2b8" stroke-width="3" fill="none" opacity=".7"/>' +
      sheds + '<rect x="300" y="60" width="10" height="72" fill="#4a2a20"/><rect x="292" y="56" width="26" height="8" fill="#3a2018"/>' +
      '<g class="ft-beam"><path d="M360 120L120 40L150 20z" fill="#fff6c2" opacity=".22"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#2e2a3a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#221e2c" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (132 + i * 8) + 'v8" stroke="#221e2c" stroke-width="1"/>').join("")).join("") +
      tag("FUTURE", 22, 194, 46, PURP, -6) + tag("FREEBANDZ", 30, 152, 16, GOLD, -4) + tag("ZONE 6", 196, 164, 20, ICE, -4) + tag("PLUTO", 70, 218, 20, "#f4f1ea", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55534f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/><rect x="352" y="114" width="16" height="10" rx="2" fill="#3a3a3a"/><circle cx="360" cy="120" r="4" fill="#fff6c2"/>' +
      sign(258, 96, 140, "Hosea L Williams Dr") + sign(300, 140, 96, "Rogers St") +
      '<g class="ft-sp"><circle cx="186" cy="172" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="ft-sp ft-sp2"><circle cx="192" cy="166" r="2" fill="' + PURP + '" opacity=".6"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e6f0" opacity=".9">HOSEA L WILLIAMS DR · ROGERS ST · KIRKWOOD</text>',
      sky("fts5", "#0c0a1e", "#3a2a5a") + '<radialGradient id="ftpl" cx=".4" cy=".4" r=".7"><stop offset="0" stop-color="#f2e2c8"/><stop offset="1" stop-color="#a8865e"/></radialGradient>');
  }

  window.SCENES = { ftstation: ftstation, ftpark: ftpark, ftcolumbia: ftcolumbia, ftgolf: ftgolf, ftcorner: ftcorner };
})();
