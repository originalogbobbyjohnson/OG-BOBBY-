/* maze scenes (Regions tab: Philadelphia; East Germantown, where Frankie Beverly (Howard Beverly) grew up - the 6000 block of N Norwood St is Frankie Beverly Way since May 2024). CSS classes and ids prefixed mz- (the page's own anim-train is kept on the bus).
   1 SEPTA bus 51 pulling up at Wister St and Spencer St in East Germantown, a block from Frankie Beverly Way: stone-front porch twins behind.
   2 Germantown High School (1914, he graduated in 1964): the long tan-brick front with its tall white columns and iron gates, the flag waving.
   3 The Golden Gate at the golden time of day: Maze left Philly for San Francisco in 1971 and got its name there - the orange bridge, fog rolling, the sun setting.
   4 A summer cookout in Fairmount Park, where Before I Let Go starts the line dance: grill smoke, a speaker thumping, string lights, folks sliding (silhouettes).
   5 N Norwood St and Spencer St: green signs plus the brown FRANKIE BEVERLY WAY sign, MAZE tagged on the wall, Cliveden's grey stone mansion on the hill behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mz-flk{animation:mzflick 2.2s infinite}.mz-flk2{animation-delay:.8s}' +
    '@keyframes mzflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mz-flag{transform-box:fill-box;transform-origin:0 50%;animation:mzflag 1.6s ease-in-out infinite}' +
    '@keyframes mzfog{0%{transform:translateX(-120px)}100%{transform:translateX(420px)}}.mz-fog{animation:mzfog 14s linear infinite}.mz-fog2{animation-delay:-7s}' +
    '@keyframes mzsun{0%{transform:translateY(-6px)}100%{transform:translateY(10px)}}.mz-sun{animation:mzsun 5s ease-in-out infinite alternate}' +
    '@keyframes mzsmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(10px,-50px);opacity:0}}.mz-smk{animation:mzsmoke 2.6s ease-out infinite}.mz-smk2{animation-delay:-1.3s}' +
    '@keyframes mzthump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.mz-thump{transform-box:fill-box;transform-origin:50% 50%;animation:mzthump .5s ease-in-out infinite}' +
    '@keyframes mzslide{0%,100%{transform:translateX(-6px)}50%{transform:translateX(6px)}}.mz-slide{animation:mzslide 1s ease-in-out infinite}.mz-sl2{animation-delay:-.5s}' +
    '@keyframes mzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mz-sp{animation:mzspray 1.4s ease-out infinite}.mz-sp2{animation-delay:.45s}' +
    '@keyframes mzcl{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.mz-cl{animation:mzcl 8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#ffc94d", ORNG = "#ff8a3d", TEAL = "#7fd1c7", SEPTA = "#1a4c9c", SRED = "#e21f26", SIGN = "#0f6b3a";
  const twin = (x, stone, trim) => '<rect x="' + x + '" y="96" width="92" height="80" fill="' + stone + '"/><path d="M' + (x - 4) + ' 98l50 -26l50 26z" fill="#5b4a44"/>' +
    '<rect x="' + (x + 10) + '" y="104" width="16" height="22" fill="#ffd98a" class="mz-flk"/><rect x="' + (x + 66) + '" y="104" width="16" height="22" fill="#ffd98a"/>' +
    '<rect x="' + (x - 2) + '" y="136" width="96" height="6" fill="' + trim + '"/><rect x="' + x + '" y="142" width="4" height="34" fill="' + trim + '"/><rect x="' + (x + 44) + '" y="142" width="4" height="34" fill="' + trim + '"/><rect x="' + (x + 88) + '" y="142" width="4" height="34" fill="' + trim + '"/>';

  /* 1. SEPTA bus 51 at Wister St and Spencer St */
  function mzstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 44) + '" y="98" width="36" height="30" rx="3" fill="#1d2733"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="84" width="320" height="86" rx="10" fill="#eef0f2" stroke="#9aa3ab" stroke-width="2"/>' + win +
      '<rect x="60" y="136" width="320" height="8" fill="' + SEPTA + '"/><rect x="60" y="146" width="320" height="5" fill="' + SRED + '"/>' +
      '<rect x="64" y="96" width="10" height="56" rx="2" fill="#1d2733"/><rect x="66" y="87" width="96" height="10" rx="2" fill="#111"/><text x="114" y="95" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">51 OLNEY TC</text>' +
      '<circle class="mz-flk" cx="66" cy="160" r="3.5" fill="#fff6c2"/><circle cx="120" cy="172" r="12" fill="#222"/><circle cx="120" cy="172" r="5" fill="#777"/><circle cx="320" cy="172" r="12" fill="#222"/><circle cx="320" cy="172" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mzs1)"/>' +
      '<g class="mz-cl"><ellipse cx="80" cy="34" rx="34" ry="9" fill="#fff" opacity=".35"/><ellipse cx="300" cy="24" rx="40" ry="8" fill="#fff" opacity=".3"/></g>' +
      twin(4, "#9a8f84", "#f2efe8") + twin(104, "#a89a8a", "#2f5d50") + twin(204, "#938a80", "#f2efe8") + twin(304, "#a3978a", "#7a2e2e") +
      '<rect x="0" y="176" width="400" height="84" fill="#3b3e44"/><path d="M0 218h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="172" width="400" height="8" fill="#a9a59c"/>' +
      bus +
      '<rect x="388" y="100" width="4" height="78" fill="#555"/><rect x="370" y="78" width="28" height="22" rx="3" fill="' + SEPTA + '" stroke="#fff" stroke-width="1.5"/><text x="384" y="93" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">SEPTA</text>' +
      '<rect x="70" y="194" width="260" height="50" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="86" y="216" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">WISTER ST &amp;</text>' +
      '<text x="86" y="236" ' + font + ' font-size="15" fill="#f3e3c3" letter-spacing="1">SPENCER ST</text>' +
      '<circle cx="304" cy="219" r="16" fill="' + SRED + '"/><text x="304" y="225" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">51</text>',
      sky("mzs1", "#f6b26b", "#7fb3d5"));
  }

  /* 2. Germantown High School: tan brick, tall white columns, iron gates */
  function mzschool() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (142 + i * 22) + '" y="86" width="9" height="94" fill="#f4f1ea" stroke="#bdb6a6" stroke-width="1"/><rect x="' + (139 + i * 22) + '" y="82" width="15" height="5" fill="#f4f1ea"/>').join("");
    const winRow = (y) => [20, 46, 72, 98, 278, 304, 330, 356].map(x => '<rect x="' + x + '" y="' + y + '" width="16" height="22" fill="#ffd98a" class="mz-flk' + (x % 3 ? " mz-flk2" : "") + '"/>').join("");
    const gate = Array.from({ length: 26 }, (_, i) => '<path d="M' + (8 + i * 15) + ' 236v-36" stroke="#222" stroke-width="2"/><path d="M' + (5 + i * 15) + ' 202l3 -6l3 6" fill="#222"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mzs2)"/>' +
      '<rect x="8" y="72" width="384" height="118" fill="#c9a77a" stroke="#7a5a36" stroke-width="2"/>' +
      Array.from({ length: 13 }, (_, r) => '<path d="M8 ' + (80 + r * 9) + 'h384" stroke="#a8875c" stroke-width="1" opacity=".6"/>').join("") +
      '<rect x="4" y="66" width="392" height="8" fill="#e8dcc6"/>' + winRow(90) + winRow(140) +
      /* portico */
      '<path d="M128 82l72 -34l72 34z" fill="#f4f1ea" stroke="#bdb6a6" stroke-width="2"/><rect x="130" y="180" width="140" height="10" fill="#e8dcc6"/>' +
      '<rect x="184" y="136" width="32" height="44" fill="#4a2e1a"/>' + cols +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="7" fill="#7a5a36">GERMANTOWN HIGH</text>' +
      /* flagpole */
      '<rect x="356" y="10" width="3" height="58" fill="#888"/><g class="mz-flag"><rect x="359" y="12" width="28" height="16" fill="#e21f26"/><rect x="359" y="15" width="28" height="2" fill="#fff"/><rect x="359" y="20" width="28" height="2" fill="#fff"/><rect x="359" y="25" width="28" height="2" fill="#fff"/><rect x="359" y="12" width="12" height="9" fill="#1a3c8c"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5d8a3a"/><path d="M176 260l12 -70h24l12 70z" fill="#c8bfae"/>' +
      gate + '<path d="M0 206h400M0 228h400" stroke="#222" stroke-width="2"/>' +
      '<circle cx="30" cy="196" r="20" fill="#3f6b2a"/><circle cx="372" cy="198" r="20" fill="#3f6b2a"/>',
      sky("mzs2", "#8ec5ff", "#ffe3b0"));
  }

  /* 3. The Golden Gate at the golden time of day */
  function mzgolden() {
    const IO = "#c0362c";
    const cables = (x1, x2) => '<path d="M' + x1 + ' 60q' + ((x2 - x1) / 2) + ' 100 ' + (x2 - x1) + ' 0" fill="none" stroke="' + IO + '" stroke-width="3"/>' +
      Array.from({ length: 12 }, (_, i) => { const t = (i + 1) / 13, x = x1 + (x2 - x1) * t, y = 60 + 100 * (2 * t * (1 - t)); return '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'V150" stroke="' + IO + '" stroke-width="1"/>'; }).join("");
    const tower = x => '<rect x="' + (x - 8) + '" y="40" width="5" height="128" fill="' + IO + '"/><rect x="' + (x + 3) + '" y="40" width="5" height="128" fill="' + IO + '"/>' +
      [52, 80, 108, 136].map(y => '<rect x="' + (x - 8) + '" y="' + y + '" width="16" height="4" fill="' + IO + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mzs3)"/>' +
      '<g class="mz-sun"><circle cx="300" cy="128" r="30" fill="' + GOLD + '"/><circle cx="300" cy="128" r="44" fill="' + GOLD + '" opacity=".25"/></g>' +
      '<path d="M0 150q40 -30 90 -20t70 20z" fill="#5b3f52"/><path d="M300 150q40 -36 100 -26v26z" fill="#5b3f52"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2b4a6a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (276 - i * 4) + '" y="' + (160 + i * 14) + '" width="' + (48 + i * 8) + '" height="3" rx="1.5" fill="' + GOLD + '" opacity="' + (0.7 - i * 0.1) + '"/>').join("") +
      cables(0, 120) + cables(120, 300) + cables(300, 400) + tower(120) + tower(300) +
      '<rect x="0" y="148" width="400" height="6" fill="' + IO + '"/>' +
      '<g class="mz-fog"><ellipse cx="60" cy="168" rx="70" ry="10" fill="#fff" opacity=".35"/></g><g class="mz-fog mz-fog2"><ellipse cx="60" cy="182" rx="90" ry="12" fill="#fff" opacity=".3"/></g>',
      sky("mzs3", "#3a2a5e", "#ff9a52"));
  }

  /* 4. A summer cookout in Fairmount Park */
  function mzcookout() {
    const bulbs = Array.from({ length: 13 }, (_, i) => '<circle cx="' + (20 + i * 30) + '" cy="' + (52 + Math.round(10 * Math.sin(i * 0.9))) + '" r="3.5" fill="' + (i % 2 ? GOLD : "#fff3c4") + '" class="mz-flk' + (i % 2 ? " mz-flk2" : "") + '"/>').join("");
    const person = (x, c, cls) => '<g class="mz-slide ' + cls + '"><circle cx="' + x + '" cy="150" r="8" fill="#1a1410"/><path d="M' + (x - 9) + ' 196l3 -36h12l3 36z" fill="' + c + '"/><path d="M' + (x - 8) + ' 166l-10 14M' + (x + 8) + ' 166l10 14" stroke="#1a1410" stroke-width="4" stroke-linecap="round"/><path d="M' + (x - 4) + ' 196v16M' + (x + 4) + ' 196v16" stroke="#1a1410" stroke-width="4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mzs4)"/>' +
      '<circle cx="60" cy="96" r="40" fill="#2f5a2a"/><circle cx="350" cy="90" r="46" fill="#2f5a2a"/><rect x="56" y="110" width="8" height="80" fill="#4a3424"/><rect x="346" y="110" width="8" height="80" fill="#4a3424"/>' +
      '<path d="M0 50q200 30 400 0" stroke="#222" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="0" y="196" width="400" height="64" fill="#4f7a3a"/>' +
      /* grill + smoke */
      '<ellipse cx="62" cy="186" rx="26" ry="10" fill="#222"/><rect x="36" y="176" width="52" height="10" fill="#222"/><path d="M44 196l-6 22M80 196l6 22" stroke="#222" stroke-width="3"/>' +
      '<rect x="44" y="172" width="12" height="5" rx="2" fill="#a0522d"/><rect x="62" y="172" width="12" height="5" rx="2" fill="#a0522d"/>' +
      '<g class="mz-smk"><circle cx="58" cy="164" r="7" fill="#ddd" opacity=".6"/></g><g class="mz-smk mz-smk2"><circle cx="68" cy="160" r="6" fill="#ddd" opacity=".6"/></g>' +
      /* table */
      '<rect x="110" y="182" width="90" height="6" fill="#f4f1ea"/><path d="M116 188v24M194 188v24" stroke="#999" stroke-width="3"/>' +
      '<rect x="120" y="172" width="16" height="10" fill="' + ORNG + '"/><rect x="142" y="174" width="18" height="8" fill="#fff"/><rect x="166" y="170" width="10" height="12" fill="' + TEAL + '"/>' +
      /* speaker */
      '<rect x="338" y="150" width="40" height="62" rx="4" fill="#1b1b1b"/><g class="mz-thump"><circle cx="358" cy="168" r="10" fill="#444"/></g><g class="mz-thump"><circle cx="358" cy="196" r="12" fill="#444"/></g>' +
      person(230, "#ffffff", "") + person(262, "#ffffff", "mz-sl2") + person(294, "#ffffff", "") +
      '<text x="250" y="124" font-size="20" fill="' + GOLD + '" class="mz-flk">&#9834;</text><text x="300" y="116" font-size="18" fill="#fff" class="mz-flk mz-flk2">&#9835;</text>',
      sky("mzs4", "#ff8a3d", "#ffd98a"));
  }

  /* 5. N Norwood St and Spencer St: Frankie Beverly Way, MAZE tag, Cliveden behind */
  function mzcorner() {
    const bricks = Array.from({ length: 14 }, (_, r) => '<path d="M0 ' + (128 + r * 9) + 'h220" stroke="#5e2f22" stroke-width="1" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mzs5)"/>' +
      /* Cliveden on the hill: grey stone Georgian house with urns */
      '<path d="M150 150q120 -40 250 -20v30h-250z" fill="#4f6a3a"/>' +
      '<rect x="250" y="88" width="104" height="52" fill="#8e8e86" stroke="#5a5a52" stroke-width="2"/><path d="M244 90l62 -22l62 22z" fill="#4a4a48"/>' +
      '<path d="M286 90l20 -12l20 12z" fill="#a8a8a0" stroke="#5a5a52" stroke-width="1"/>' +
      [262, 280, 334, 352].map(x => '<rect x="' + (x - 4) + '" y="98" width="10" height="14" fill="#ffd98a" class="mz-flk' + (x > 300 ? " mz-flk2" : "") + '"/><rect x="' + (x - 4) + '" y="118" width="10" height="14" fill="#2a2a2a"/>').join("") +
      '<rect x="300" y="112" width="12" height="28" fill="#3a2a1a"/>' +
      [252, 272, 340, 360].map(x => '<path d="M' + x + ' 72q-4 -6 0 -10h4q4 4 0 10z" fill="#cfcfc6"/>').join("") +
      '<circle cx="232" cy="120" r="18" fill="#2f5a2a"/><circle cx="380" cy="118" r="18" fill="#2f5a2a"/>' +
      /* brick wall + tag */
      '<rect x="0" y="122" width="220" height="138" fill="#8f3f2c"/>' + bricks +
      tag("MAZE", 18, 198, 58, GOLD, -7) + tag("BACK IN STRIDE", 20, 236, 18, "#ffffff", -4) +
      '<g class="mz-sp"><circle cx="190" cy="184" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mz-sp mz-sp2"><circle cx="198" cy="188" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      /* street */
      '<rect x="0" y="236" width="400" height="24" fill="#9c978d"/><rect x="220" y="160" width="180" height="76" fill="#3b3e44"/><path d="M220 198h180" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      /* pole + signs */
      '<rect x="306" y="150" width="5" height="86" fill="#5a5a5a"/>' +
      '<rect x="262" y="140" width="92" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="308" y="153" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">N NORWOOD ST</text>' +
      '<rect x="268" y="162" width="80" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="308" y="175" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SPENCER ST</text>' +
      '<rect x="240" y="184" width="136" height="18" rx="2" fill="#6b3f1f" stroke="#fff" stroke-width="1.5"/><text x="308" y="197" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">FRANKIE BEVERLY WAY</text>',
      sky("mzs5", "#1a2340", "#e08a4a"));
  }

  window.SCENES = { mzstation: mzstation, mzschool: mzschool, mzgolden: mzgolden, mzcookout: mzcookout, mzcorner: mzcorner };
})();
