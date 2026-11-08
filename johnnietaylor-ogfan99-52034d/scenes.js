/* johnnietaylor scenes (Regions tab: Memphis + Tennessee; born in Crawfordsville, Arkansas, raised by his grandmother in West Memphis, Arkansas, across the river from Memphis).
   CSS classes and ids prefixed jt- (the page's own anim-train is kept).
   1 I-40 westbound into West Memphis, Arkansas: the green overhead sign and interstate shield, traffic rolling across the Delta flats.
   2 The little white church in West Memphis where he first sang in church at six (his grandmother took him every Sunday).
   3 Kansas City, 18th & Vine: he moved there at ten and sang with the gospel quartet the Melody Kings. The theater marquee and the brick blocks.
   4 Malaco Records in Jackson, Mississippi: the low brick studio where he cut "Good Love!" and "Last Two Dollars".
   5 E Broadway Ave and N Missouri St in West Memphis: green signs, JOHNNIE TAYLOR tagged, the old Frisco rail bridge across the Mississippi behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jtblink{0%,100%{opacity:1}50%{opacity:.15}}.jt-blink{animation:jtblink 1.2s steps(1) infinite}' +
    '@keyframes jtchase{0%,100%{opacity:1}50%{opacity:.25}}.jt-ch{animation:jtchase .8s steps(1) infinite}.jt-ch2{animation-delay:-.4s}' +
    '@keyframes jtnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(20px,-60px);opacity:0}}.jt-note{animation:jtnote 3s ease-out infinite}.jt-note2{animation-delay:-1s}.jt-note3{animation-delay:-2s}' +
    '@keyframes jtcar{from{transform:translateX(420px)}to{transform:translateX(-120px)}}.jt-car{animation:jtcar 6s linear infinite}.jt-car2{animation-delay:-3s}' +
    '@keyframes jtsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jt-sp{animation:jtsp 1.4s ease-out infinite}.jt-sp2{animation-delay:.45s}' +
    '@keyframes jtwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-8px)}}.jt-wave{animation:jtwave 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const GOLD = "#e8b84a", RED = "#e0523a", BLUE = "#7fc4d8", HWY = "#006b3c";
  const shield = (x, y, n) => '<g><path d="M' + (x - 16) + ' ' + (y - 12) + 'q16 -6 32 0q2 22 -16 34q-18 -12 -16 -34z" fill="#1d4f91" stroke="#fff" stroke-width="2"/><path d="M' + (x - 16) + ' ' + (y - 12) + 'q16 -6 32 0l0.5 6h-33z" fill="#c8102e"/>' +
    '<text x="' + x + '" y="' + (y + 10) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + n + '</text></g>';

  /* 1. I-40 westbound into West Memphis, Arkansas */
  function jtsign() {
    const car = (cls, c, y) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="54" height="16" rx="5" fill="' + c + '"/><rect x="10" y="' + (y - 8) + '" width="30" height="10" rx="4" fill="' + c + '"/><circle cx="12" cy="' + (y + 17) + '" r="5" fill="#111"/><circle cx="42" cy="' + (y + 17) + '" r="5" fill="#111"/><circle cx="2" cy="' + (y + 7) + '" r="2.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jts1)"/>' +
      '<circle cx="320" cy="120" r="26" fill="#ffb35a" opacity=".85"/>' +
      '<rect x="0" y="140" width="400" height="40" fill="#5d6a3a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (146 + i * 4) + 'h400" stroke="#6f7c46" stroke-width="1"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#3e4046"/><path d="M0 214h400" stroke="#fff" stroke-width="2" stroke-dasharray="20 14" opacity=".7"/><path d="M0 180h400M0 254h400" stroke="#e8d36b" stroke-width="3"/>' +
      '<g class="anim-train">' + car("jt-car", "#c8392c", 192) + car("jt-car jt-car2", "#2f6db0", 228) + '</g>' +
      /* overhead sign gantry */
      '<path d="M40 176V30M360 176V30" stroke="#9aa0a8" stroke-width="6"/><path d="M40 34h320M40 46h320" stroke="#9aa0a8" stroke-width="4"/>' +
      '<rect x="64" y="40" width="272" height="96" rx="6" fill="' + HWY + '" stroke="#fff" stroke-width="2.5"/>' +
      shield(110, 70, "40") +
      '<text x="140" y="68" ' + font + ' font-size="16" fill="#fff">WEST</text>' +
      '<text x="200" y="104" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">West Memphis</text>' +
      '<text x="200" y="124" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">ARKANSAS · NEXT EXITS</text>' +
      '<rect x="270" y="52" width="54" height="22" rx="3" fill="none" stroke="#fff" stroke-width="2"/><text x="297" y="68" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">EXIT</text>',
      sky("jts1", "#2a2a5a", "#f0a060"));
  }

  /* 2. The little white church in West Memphis */
  function jtchurch() {
    const clap = Array.from({ length: 10 }, (_, i) => '<path d="M110 ' + (110 + i * 8) + 'h180" stroke="#d8d2c4" stroke-width="1.2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jtc1)"/>' + stars(20) +
      '<rect x="0" y="196" width="400" height="64" fill="#6a7a3a"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' 210q6 -10 12 0" stroke="#4e5c2a" stroke-width="2" fill="none"/>').join("") +
      /* steeple */
      '<rect x="180" y="40" width="40" height="60" fill="#f4f1ea" stroke="#bdb6a4" stroke-width="2"/><path d="M174 40l26 -32l26 32z" fill="#7a2a2a"/><path d="M200 4v-0" stroke="#e8b84a"/>' +
      '<path d="M200 -2v14M194 3h12" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M190 60q10 -10 20 0v16h-20z" fill="#1a1a2a"/>' +
      /* body */
      '<path d="M100 104l100 -30l100 30z" fill="#7a2a2a"/><rect x="110" y="104" width="180" height="94" fill="#f4f1ea"/>' + clap +
      '<path d="M128 124q12 -14 24 0v34h-24zM248 124q12 -14 24 0v34h-24z" fill="#3a5a9a" stroke="#bdb6a4" stroke-width="2"/>' +
      '<path d="M140 124v34M128 141h24M260 124v34M248 141h24" stroke="#e8b84a" stroke-width="1.5"/>' +
      '<path d="M182 198v-40q18 -16 36 0v40z" fill="#ffd98a"/><path d="M200 198v-52" stroke="#c8a050" stroke-width="2"/>' +
      '<path d="M170 198h60l6 8h-72z" fill="#cfc8b8"/>' +
      '<g class="jt-note"><text x="210" y="160" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="jt-note jt-note2"><text x="186" y="168" font-size="16" fill="#fff">&#9835;</text></g><g class="jt-note jt-note3"><text x="200" y="150" font-size="14" fill="' + BLUE + '">&#9834;</text></g>' +
      '<rect x="80" y="228" width="240" height="22" rx="3" fill="#000" opacity=".55"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">WEST MEMPHIS · SINGING IN CHURCH AT SIX</text>',
      sky("jtc1", "#1c2244", "#c8784a"));
  }

  /* 3. Kansas City, 18th & Vine: the Melody Kings years */
  function jtkc() {
    const bulbs = Array.from({ length: 16 }, (_, i) => '<circle class="jt-ch' + (i % 2 ? " jt-ch2" : "") + '" cx="' + (136 + i * 8.5) + '" cy="58" r="2.4" fill="#ffe08a"/><circle class="jt-ch' + (i % 2 ? "" : " jt-ch2") + '" cx="' + (136 + i * 8.5) + '" cy="102" r="2.4" fill="#ffe08a"/>').join("");
    const block = (x, w, h, c) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(w / 22) }, (_, i) => '<rect x="' + (x + 6 + i * 22) + '" y="' + (200 - h) + '" width="12" height="16" fill="#ffd98a" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jtk1)"/>' + stars(22) +
      block(0, 120, 120, "#7a3a2a") + block(280, 120, 110, "#6a3426") +
      /* theater front with marquee */
      '<rect x="120" y="40" width="160" height="150" fill="#8a4a32"/><rect x="120" y="36" width="160" height="6" fill="#d8ccb4"/>' +
      '<rect x="128" y="52" width="144" height="56" rx="3" fill="#1a1020" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '">THE GEM</text>' +
      '<text x="200" y="94" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">MELODY KINGS · GOSPEL TONIGHT</text>' +
      '<rect x="176" y="120" width="48" height="70" fill="#2a1a20"/><path d="M200 120v70" stroke="#5a3a2a" stroke-width="2"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4f5054"/><path d="M0 190h400" stroke="#8f897c" stroke-width="4"/>' +
      '<rect x="56" y="120" width="6" height="110" fill="#5b6066"/>' + sign(14, 120, 90, "18TH ST") + sign(20, 144, 78, "VINE ST") +
      '<g class="jt-note"><text x="300" y="150" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="jt-note jt-note2"><text x="330" y="160" font-size="16" fill="#fff">&#9835;</text></g>' +
      '<rect x="110" y="226" width="180" height="22" rx="3" fill="#000" opacity=".55"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">KANSAS CITY · 18TH &amp; VINE</text>',
      sky("jtk1", "#12123a", "#4a2a5a"));
  }

  /* 4. Malaco Records, Jackson, Mississippi */
  function jtmalaco() {
    const pine = x => '<g><rect x="' + (x - 3) + '" y="120" width="6" height="40" fill="#4a3020"/><path d="M' + x + ' 50l-18 34h10l-16 26h12l-14 22h52l-14 -22h12l-16 -26h10z" fill="#1f4a2c"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jtm1)"/>' +
      pine(30) + pine(78) + pine(330) + pine(374) +
      /* low brick studio */
      '<rect x="90" y="90" width="220" height="100" fill="#9a6a4a"/><rect x="84" y="82" width="232" height="10" fill="#5a4a3a"/>' +
      Array.from({ length: 9 }, (_, r) => '<path d="M90 ' + (98 + r * 10) + 'h220" stroke="#845a3c" stroke-width="1"/>').join("") +
      '<rect x="120" y="100" width="160" height="26" rx="3" fill="#f4efe0"/><text x="200" y="118" text-anchor="middle" ' + font + ' font-size="15" fill="#5a2a1a">MALACO RECORDS</text>' +
      '<rect x="182" y="140" width="36" height="50" fill="#2a2018"/><rect x="110" y="140" width="50" height="30" fill="#ffd98a" opacity=".75"/><rect x="240" y="140" width="50" height="30" fill="#ffd98a" opacity=".75"/>' +
      /* recording light */
      '<rect x="184" y="128" width="32" height="10" rx="2" fill="#2a0a0a"/><rect x="186" y="130" width="28" height="6" rx="1" fill="#ff2d2d" class="jt-blink"/>' +
      /* gold record */
      '<g><circle cx="135" cy="155" r="13" fill="' + GOLD + '" stroke="#8a6a1a" stroke-width="2"/><circle cx="135" cy="155" r="4" fill="#5a2a1a"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#7a7466"/><path d="M0 190h400" stroke="#5f5a50" stroke-width="3"/>' +
      '<g class="jt-note"><text x="230" y="150" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="jt-note jt-note2"><text x="262" y="156" font-size="16" fill="#fff">&#9835;</text></g>' +
      '<rect x="30" y="222" width="340" height="26" rx="3" fill="#000" opacity=".55"/><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">JACKSON, MISSISSIPPI · GOOD LOVE! · LAST TWO DOLLARS</text>',
      sky("jtm1", "#3a5a8a", "#f2c27a"));
  }

  /* 5. E Broadway Ave and N Missouri St, the Frisco Bridge behind */
  function jtcorner() {
    /* cantilever through truss: tall diamond panels over the piers */
    const span = (x0, w, h) => { let d = 'M' + x0 + ' 80h' + w; const n = 6; for (let i = 0; i <= n; i++) { const x = x0 + i * w / n, top = 80 - h * Math.sin(Math.PI * i / n); d += 'M' + x.toFixed(1) + ' 80V' + top.toFixed(1); if (i < n) { const x2 = x0 + (i + 1) * w / n, top2 = 80 - h * Math.sin(Math.PI * (i + 1) / n); d += 'L' + x2.toFixed(1) + ' ' + top2.toFixed(1) + 'M' + x.toFixed(1) + ' ' + top.toFixed(1) + 'L' + x2.toFixed(1) + ' 80'; } } return '<path d="' + d + '" stroke="#5c6670" stroke-width="2.5" fill="none"/>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#jtq5)"/>' + stars(20) +
      '<rect x="0" y="80" width="400" height="34" fill="#3a4a5a"/><g class="jt-wave"><path d="M0 92q10 -3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#5a7a8a" stroke-width="1.5" fill="none"/></g>' +
      span(0, 140, 40) + span(140, 130, 52) + span(270, 130, 40) +
      [0, 140, 270, 400].map(x => '<rect x="' + (x - 5) + '" y="80" width="10" height="30" fill="#7a7a6a"/>').join("") +
      /* wall */
      '<rect x="0" y="112" width="400" height="98" fill="#7a4a30"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (116 + r * 10) + 'h400" stroke="#5e3622" stroke-width="1"/>').join("") +
      tag("JOHNNIE TAYLOR", 14, 170, 30, GOLD, -5) +
      tag("DISCO LADY", 150, 202, 22, RED, -4) +
      '<g class="jt-sp"><circle cx="252" cy="150" r="3" fill="' + GOLD + '"/></g><g class="jt-sp jt-sp2"><circle cx="260" cy="146" r="2" fill="' + BLUE + '"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8c877c"/><path d="M0 210h400" stroke="#5f5a50" stroke-width="3"/>' +
      '<rect x="331" y="98" width="6" height="140" fill="#5b6066"/>' +
      sign(276, 98, 118, "E BROADWAY AVE") + sign(280, 122, 110, "N MISSOURI ST") +
      '<rect x="80" y="228" width="240" height="22" rx="3" fill="#000" opacity=".55"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">WEST MEMPHIS · ARKANSAS</text>',
      sky("jtq5", "#141a38", "#7a4a3a"));
  }

  window.SCENES = { jtsign: jtsign, jtchurch: jtchurch, jtkc: jtkc, jtmalaco: jtmalaco, jtcorner: jtcorner };
})();
