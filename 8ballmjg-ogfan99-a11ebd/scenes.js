/* 8ballmjg scenes (Regions tab: Memphis + Tennessee; Orange Mound, Memphis). CSS classes and ids prefixed mg- (the page's own anim-train is kept).
   1 MATA Route 57 Park bus pulling up at Park Av & Airways Blvd in Orange Mound.
   2 Melrose Stadium, Orange Mound: Friday night lights, black and gold, the band in the stands.
   3 The Zippin Pippin: the old white wooden coaster at Libertyland on the Mid-South Fairgrounds, next door to the Mound.
   4 Space Age: a candy-painted Cadillac cruising Lamar Av under a sky full of planets.
   5 MJG Ave and 8Ball Blvd (Park Av and Airways Blvd, renamed for them): green signs, 8BALL & MJG tagged, the Liberty Bowl's light towers behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mg-flk{animation:mgflick 2.2s infinite}.mg-flk2{animation-delay:.7s}' +
    '@keyframes mgbeam{0%,100%{opacity:.25}50%{opacity:.6}}.mg-beam{animation:mgbeam 2.6s ease-in-out infinite}.mg-beam2{animation-delay:-1.3s}' +
    '@keyframes mgball{0%{transform:translate(0,0)}50%{transform:translate(90px,-60px)}100%{transform:translate(180px,0)}}.mg-ball{animation:mgball 2.8s ease-in-out infinite}' +
    '@keyframes mgbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.mg-bob{animation:mgbob .7s ease-in-out infinite}.mg-bob2{animation-delay:-.35s}' +
    '@keyframes mgcoast{0%{offset-distance:0%}100%{offset-distance:100%}}' +
    '@keyframes mgcar{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.mg-car{animation:mgcar 7s linear infinite;animation-delay:-3.2s}' +
    '@keyframes mgspin{to{transform:rotate(360deg)}}.mg-spin{transform-box:fill-box;transform-origin:center;animation:mgspin 14s linear infinite}' +
    '@keyframes mgtw{0%,100%{opacity:.3}50%{opacity:1}}.mg-tw{animation:mgtw 1.8s ease-in-out infinite}.mg-tw2{animation-delay:-.9s}' +
    '@keyframes mgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mg-sp{animation:mgspray 1.4s ease-out infinite}.mg-sp2{animation-delay:.45s}' +
    '@keyframes mgtrain{0%{transform:translate(0,0)}25%{transform:translate(70px,-62px)}50%{transform:translate(150px,10px)}75%{transform:translate(225px,-40px)}100%{transform:translate(300px,20px)}}.mg-cars{animation:mgtrain 5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="mg-tw' + (i % 2 ? ' mg-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 80) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const MATA = "#1f4e79", RED = "#c8102e", ORANGE = "#ff8c1a", GOLD = "#ffd23f", PURPLE = "#9b5de5";

  /* 1. MATA 57 Park at Park Av & Airways Blvd */
  function mgstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="296" y="118" width="56" height="9" rx="2" fill="#111"/><text x="324" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">57 PARK</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    /* Orange Mound storefronts and small houses behind */
    const shop = (x, w, h, c) => '<rect x="' + x + '" y="' + (116 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x + 6) + '" y="' + (122 - h) + '" width="' + (w - 12) + '" height="10" fill="#2a1d14" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs1)"/>' +
      '<path d="M0 60Q100 50 200 58T400 52" stroke="#2b2b36" stroke-width="1" fill="none"/><path d="M0 68Q100 58 200 66T400 60" stroke="#2b2b36" stroke-width="1" fill="none"/>' +
      [30, 230].map(x => '<rect x="' + x + '" y="40" width="4" height="80" fill="#4a3a30"/><rect x="' + (x - 12) + '" y="46" width="28" height="3" fill="#4a3a30"/>').join("") +
      shop(0, 70, 40, "#a8573a") + shop(74, 60, 52, "#d9a066") + shop(138, 84, 36, "#8f6a4f") + shop(226, 64, 48, "#c97b4a") + shop(294, 106, 42, "#9c4a33") +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="40" y="204" width="300" height="44" rx="3" fill="#111"/><text x="52" y="222" ' + font + ' font-size="13" fill="#fff">Park Av &amp; Airways Blvd</text><text x="52" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Orange Mound · Memphis</text>' +
      badge(240, 234, "MATA", MATA) + badge(296, 234, "57", RED),
      sky("mgs1", "#3a2a5c", "#ff9a52"));
  }

  /* 2. Melrose Stadium, Friday night lights */
  function mgmelrose() {
    const light = x => '<rect x="' + (x - 2) + '" y="20" width="4" height="96" fill="#3a3a3a"/><rect x="' + (x - 16) + '" y="12" width="32" height="14" rx="2" fill="#222"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (x - 12 + (i % 3) * 12) + '" cy="' + (16 + Math.floor(i / 3) * 6) + '" r="2.6" fill="#fff8d0"/>').join("") +
      '<path class="mg-beam' + (x > 200 ? ' mg-beam2' : '') + '" d="M' + (x - 16) + ' 26L' + (x - 70) + ' 200H' + (x + 70) + 'L' + (x + 16) + ' 26z" fill="#fff6c8"/>';
    const crowd = Array.from({ length: 60 }, (_, i) => '<circle class="mg-bob' + (i % 2 ? ' mg-bob2' : '') + '" cx="' + (12 + (i % 30) * 13) + '" cy="' + (96 + Math.floor(i / 30) * 14) + '" r="4" fill="' + (i % 3 ? GOLD : "#1a1a1a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mgs2)"/>' + stars(26) +
      '<rect x="0" y="84" width="400" height="44" fill="#2a2a2e"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M0 ' + (90 + i * 10) + 'h400" stroke="#3c3c42" stroke-width="2"/>').join("") + crowd +
      '<rect x="0" y="126" width="400" height="10" fill="#111"/><text x="200" y="134.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '" letter-spacing="3">MELROSE GOLDEN WILDCATS</text>' +
      '<rect x="0" y="136" width="400" height="124" fill="#2f7d32"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56 - 10) + ' 260L' + (i * 50 + 20) + ' 136" stroke="#fff" stroke-width="1.5" opacity=".55"/>').join("") +
      '<path d="M0 176h400" stroke="#fff" stroke-width="1" opacity=".3"/>' +
      '<rect x="120" y="200" width="160" height="36" fill="#111" opacity=".85"/><text x="200" y="225" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + GOLD + '" letter-spacing="3">MELROSE</text>' +
      light(40) + light(360) +
      '<g class="mg-ball"><ellipse cx="90" cy="180" rx="9" ry="5.5" fill="#7a3f17" stroke="#fff" stroke-width="1"/></g>' +
      '<rect x="146" y="40" width="108" height="34" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="54" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HOME   GUEST</text><text x="200" y="69" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="13" fill="#ff5a3a">21  14</text>',
      sky("mgs2", "#0b1028", "#2a2350"));
  }

  /* 3. The Zippin Pippin at Libertyland, Mid-South Fairgrounds */
  function mgpippin() {
    const track = 'M10 200 L40 200 Q80 200 100 80 Q120 200 160 190 Q200 180 220 110 Q240 190 280 190 Q320 190 340 140 Q360 190 400 196';
    let lattice = "";
    for (let x = 14; x < 400; x += 12) { const top = x < 100 ? 200 - (x - 40) * 2 : x < 160 ? 80 + (x - 100) * 1.8 : x < 220 ? 190 - (x - 160) * 1.3 : x < 280 ? 110 + (x - 220) * 1.3 : x < 340 ? 190 - (x - 280) * .8 : 140 + (x - 340) * .9;
      lattice += '<path d="M' + x + ' ' + Math.max(80, Math.min(200, top)) + 'V230" stroke="#f3efe6" stroke-width="2"/>'; }
    for (let y = 100; y < 230; y += 18) lattice += '<path d="M0 ' + y + 'L400 ' + (y + 10) + '" stroke="#f3efe6" stroke-width="1" opacity=".5"/>';
    const car = (dx, c) => '<rect x="' + (dx) + '" y="-8" width="20" height="10" rx="3" fill="' + c + '"/><circle cx="' + (dx + 5) + '" cy="3" r="2" fill="#222"/><circle cx="' + (dx + 15) + '" cy="3" r="2" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs3)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#ffd27a" opacity=".85"/>' +
      lattice +
      '<path d="' + track + '" stroke="#f8f4ea" stroke-width="6" fill="none"/><path d="' + track + '" stroke="#b33a2a" stroke-width="2" fill="none"/>' +
      [[RED, -1.5], ["#2a5fb0", -1.25]].map(c => '<g style="offset-path:path(\'' + track + '\');offset-rotate:auto;animation:mgcoast 6s linear infinite;animation-delay:' + c[1] + 's">' + car(-10, c[0]) + '</g>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#6b8f3a"/>' +
      '<rect x="12" y="188" width="70" height="42" fill="#c8102e"/><path d="M8 188L47 166L86 188z" fill="#fff"/><text x="47" y="214" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">STATION</text>' +
      '<rect x="110" y="232" width="180" height="22" rx="3" fill="#111" opacity=".85"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">ZIPPIN PIPPIN · LIBERTYLAND</text>',
      sky("mgs3", "#5aa8e0", "#ffe2b0"));
  }

  /* 4. Space Age: candy Cadillac on Lamar Av under the planets */
  function mgspace() {
    const caddy = '<g class="mg-car"><path d="M0 206h150v-14q-8 -6 -24 -8l-20 -18h-60l-22 18q-20 2 -24 8z" fill="#c2185b"/><path d="M10 192h130" stroke="#ff7ab0" stroke-width="2"/>' +
      '<path d="M50 168h52l16 16H36z" fill="#2b2140"/><rect x="0" y="198" width="150" height="5" fill="#e6e6e6"/>' +
      '<circle cx="34" cy="208" r="11" fill="#111"/><circle cx="34" cy="208" r="6" fill="' + GOLD + '"/><circle cx="118" cy="208" r="11" fill="#111"/><circle cx="118" cy="208" r="6" fill="' + GOLD + '"/>' +
      '<circle cx="148" cy="196" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs4)"/>' + stars(60) +
      '<g class="mg-spin"><circle cx="300" cy="70" r="30" fill="' + PURPLE + '"/><ellipse cx="300" cy="70" rx="52" ry="11" fill="none" stroke="' + GOLD + '" stroke-width="4"/></g>' +
      '<circle cx="80" cy="56" r="14" fill="' + ORANGE + '"/><circle cx="76" cy="52" r="4" fill="#ffb15a"/><circle cx="190" cy="34" r="6" fill="#5ad1ff"/>' +
      '<path d="M0 150l40 -14l30 10l50 -20l40 12l60 -16l40 14l50 -10l40 12l50 -8v40H0z" fill="#1c1430"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#2b2b33"/><path d="M0 224h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="18 14" opacity=".5"/>' +
      caddy +
      '<rect x="250" y="120" width="5" height="62" fill="#555"/>' + sign(212, 112, 82, "Lamar Av") +
      '<text x="200" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '" letter-spacing="4">SPACE AGE 4 EVA</text>',
      sky("mgs4", "#07031a", "#3a1a5e"));
  }

  /* 5. MJG Ave and 8Ball Blvd, the Liberty Bowl's lights behind */
  function mgcorner() {
    const tower = x => '<rect x="' + (x - 2) + '" y="30" width="4" height="70" fill="#4a4660"/><rect x="' + (x - 14) + '" y="22" width="28" height="12" rx="2" fill="#2a2840"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle class="mg-flk' + (i % 2 ? ' mg-flk2' : '') + '" cx="' + (x - 9 + i * 6) + '" cy="28" r="2.2" fill="#fff8d0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mgs5)"/>' + stars(18) +
      /* the Liberty Bowl bowl rim and light towers far behind */
      '<path d="M90 112Q200 76 310 112z" fill="#3b3656"/><path d="M96 110Q200 80 304 110" stroke="#6a6290" stroke-width="2" fill="none"/>' + tower(100) + tower(160) + tower(240) + tower(300) +
      '<g fill="#2c2440"><rect x="0" y="100" width="70" height="26"/><rect x="330" y="98" width="70" height="28"/></g>' +
      '<rect x="0" y="124" width="400" height="100" fill="#8a4a34"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (132 + i * 8) + 'h400" stroke="#703a28" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (124 + i * 8) + 'v8" stroke="#703a28" stroke-width="1"/>').join("")).join("") +
      tag("8BALL &amp; MJG", 14, 196, 40, ORANGE, -6) + tag("ORANGE MOUND", 40, 150, 17, GOLD, -4) + tag("SPACE AGE", 176, 218, 18, PURPLE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="mg-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="#c2185b"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#7a0f3a"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(268, 94, 128, "MJG Ave") + '<text x="332" y="128" text-anchor="middle" ' + font + ' font-size="8" fill="#e8ecf2">(Park Av)</text>' +
      sign(276, 132, 112, "8Ball Blvd") + '<text x="332" y="166" text-anchor="middle" ' + font + ' font-size="8" fill="#e8ecf2">(Airways Blvd)</text>' +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mg-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mg-sp"><circle cx="246" cy="172" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="mg-sp mg-sp2"><circle cx="252" cy="166" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("mgs5", "#1e1840", "#e07a4a"));
  }

  window.SCENES = { mgstop: mgstop, mgmelrose: mgmelrose, mgpippin: mgpippin, mgspace: mgspace, mgcorner: mgcorner };
})();
