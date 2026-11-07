/* dizzywright scenes (Regions tab: Detroit region / Michigan; born in Flint, raised in Las Vegas). CSS classes and ids prefixed dw- (the page's own anim-train is kept on the train).
   1 Flint Amtrak station, 1407 S Dort Hwy (single-story brick, glass and metal depot shared with MTA Flint): the Blue Water pulling in, AMTK bullet.
   2 The Welcome to Fabulous Las Vegas sign (he moved to Vegas at four): white diamond, red letters on silver dollars, chasing bulbs, red star.
   3 East Las Vegas under Frenchman Mountain at sunrise ("East Side", "Vegas is my stomping ground"): stucco houses, palms, a car still movin'.
   4 The Fremont Street canopy downtown at night ("more to the city than the Vegas strip"): LED vault rippling, the crowd below.
   5 E Charleston Blvd and S Nellis Blvd on the East Side: green signs, DIZZY WRIGHT tagged on stucco, the Strat tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dwflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.dw-flk{animation:dwflick 2.2s infinite}' +
    '@keyframes dwchase{0%,100%{opacity:.25}50%{opacity:1}}.dw-ch{animation:dwchase .8s steps(1) infinite}.dw-ch2{animation-delay:.4s}' +
    '@keyframes dwglow{0%,100%{opacity:.35}50%{opacity:1}}.dw-gl{animation:dwglow 2s ease-in-out infinite}.dw-gl2{animation-delay:.7s}.dw-gl3{animation-delay:1.3s}' +
    '@keyframes dwcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.dw-car{animation:dwcar 6s linear infinite}' +
    '@keyframes dwsun{0%,100%{transform:translateY(4px)}50%{transform:translateY(-4px)}}.dw-sun{animation:dwsun 5s ease-in-out infinite}' +
    '@keyframes dwhue{0%{fill:#ff4fa3}33%{fill:#3fd6c8}66%{fill:#f5c242}100%{fill:#ff4fa3}}.dw-hue{animation:dwhue 3s linear infinite}.dw-hue2{animation-delay:-1s}.dw-hue3{animation-delay:-2s}' +
    '@keyframes dwsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}' +
    '@keyframes dwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dw-sp{animation:dwspray 1.4s ease-out infinite}.dw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#f5c242", ORNG = "#ff7a3d", TEAL = "#3fd6c8", PINK = "#ff4fa3", AMTK = "#1f4e79", RED = "#d8262e";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 47 + 9) % 400) + '" cy="' + ((i * 31) % 70 + 6) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");
  const palm = (x, y, s, col) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q4 -40 -2 -80" stroke="#4a3526" stroke-width="5" fill="none"/>' +
    '<g transform="translate(-2 -80)"><g fill="' + col + '" style="transform-origin:0 0;animation:dwsway 4s ease-in-out infinite">' +
    '<path d="M0 0q-22 -8 -38 6q18 -16 38 -6z"/><path d="M0 0q22 -8 38 6q-18 -16 -38 -6z"/><path d="M0 0q-14 -20 -32 -18q18 -6 32 18z"/><path d="M0 0q14 -20 32 -18q-18 -6 -32 18z"/><path d="M0 0q-2 -22 4 -30q-1 14 -4 30z"/></g></g></g>';

  /* 1. Flint Amtrak station on S Dort Hwy, the Blue Water pulling in */
  function dwstation() {
    const depot = '<rect x="20" y="78" width="250" height="62" fill="#a8744c"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M20 ' + (86 + i * 8) + 'H270" stroke="#93613c" stroke-width="1"/>').join("") +
      '<rect x="70" y="88" width="150" height="34" fill="#2a4a62"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (95 + i * 25) + ' 88v34" stroke="#c9d3da" stroke-width="2"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect class="dw-gl' + (i % 2 ? " dw-gl2" : "") + '" x="' + (78 + i * 38) + '" y="94" width="14" height="22" fill="#ffe7a6" opacity=".6"/>').join("") +
      '<path d="M10 70H280L272 80H18Z" fill="#46535e"/><rect x="10" y="66" width="270" height="5" fill="#6d7b86"/>' +
      '<rect x="230" y="96" width="22" height="44" fill="#3a2a20"/>';
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (138 + i * 34) + '" y="160" width="24" height="16" rx="3" fill="#1b2630"/>').join("");
    const train = '<g class="anim-train">' +
      '<path d="M40 150H120V212H24Q24 172 40 150Z" fill="#3b4652"/><path d="M28 170Q32 156 44 154H62V176H28Z" fill="#16202a"/>' +
      '<rect x="24" y="190" width="96" height="6" fill="' + RED + '"/><rect x="24" y="196" width="96" height="4" fill="#2b5fae"/>' +
      '<circle class="dw-flk" cx="34" cy="202" r="4" fill="#fff6c2"/>' +
      '<rect x="124" y="150" width="276" height="62" rx="4" fill="#cfd5da" stroke="#8b949b" stroke-width="2"/>' + win +
      '<rect x="124" y="186" width="276" height="5" fill="' + RED + '"/><rect x="124" y="192" width="276" height="4" fill="#2b5fae"/>' +
      '<rect x="66" y="141" width="48" height="8" rx="2" fill="#111"/><text x="90" y="147.4" text-anchor="middle" ' + font + ' font-size="5.6" fill="#ffb347">BLUE WATER</text>' +
      Array.from({ length: 5 }, (_, i) => '<circle cx="' + (48 + i * 80) + '" cy="214" r="9" fill="#1b1b1b"/>').join("") + '</g>';
    const pole = '<rect x="330" y="40" width="5" height="100" fill="#555"/><rect x="292" y="22" width="104" height="36" rx="3" fill="#111" stroke="#fff" stroke-width="1.2"/>' +
      '<circle cx="312" cy="40" r="13" fill="' + AMTK + '"/><text x="312" y="43.4" text-anchor="middle" ' + font + ' font-size="8.6" fill="#fff">AMTK</text>' +
      '<text x="360" y="38" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Flint</text><text x="360" y="51" text-anchor="middle" ' + font + ' font-size="7" fill="#cfd5da">S DORT HWY</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#dws1)"/>' + stars(10) +
      '<g fill="#2b2f3d"><rect x="290" y="96" width="40" height="44"/><rect x="336" y="108" width="60" height="32"/></g>' + depot + pole +
      '<rect x="0" y="140" width="400" height="10" fill="#8f9297"/><rect x="0" y="148" width="400" height="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#3c3a38"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="222" width="18" height="6" fill="#5a4636"/>').join("") +
      '<path d="M0 220H400M0 232H400" stroke="#9aa0a6" stroke-width="3"/>' + train,
      sky("dws1", "#18213a", "#d98a5a"));
  }

  /* 2. The Welcome to Fabulous Las Vegas sign */
  function dwvegas() {
    const cx = 200;
    const shape = 'M110 92L200 62L290 92L282 172L200 196L118 172Z';
    const bulbs = Array.from({ length: 28 }, (_, i) => { const t = i / 28; let x, y;
      const pts = [[110, 92], [200, 62], [290, 92], [282, 172], [200, 196], [118, 172], [110, 92]]; const seg = t * 6, k = Math.floor(seg), f = seg - k;
      x = pts[k][0] + (pts[k + 1][0] - pts[k][0]) * f; y = pts[k][1] + (pts[k + 1][1] - pts[k][1]) * f;
      return '<circle class="dw-ch' + (i % 2 ? " dw-ch2" : "") + '" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3" fill="#fff3b0"/>'; }).join("");
    const coins = "WELCOME".split("").map((c, i) => '<circle cx="' + (131 + i * 23) + '" cy="96" r="10" fill="#e9edf0" stroke="#9aa3aa" stroke-width="1.5"/><text x="' + (131 + i * 23) + '" y="100.5" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '">' + c + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dws2)"/>' + stars(18) +
      '<g fill="#1d1830"><rect x="300" y="120" width="30" height="80"/><rect x="336" y="96" width="22" height="104"/><rect x="362" y="130" width="36" height="70"/><rect x="0" y="126" width="40" height="74"/><rect x="44" y="140" width="30" height="60"/></g>' +
      '<g class="dw-gl" fill="' + PINK + '" opacity=".6"><rect x="340" y="104" width="4" height="4"/><rect x="306" y="130" width="4" height="4"/><rect x="8" y="136" width="4" height="4"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3b3330"/><rect x="0" y="200" width="400" height="4" fill="#6b5a4a"/>' +
      '<rect x="188" y="196" width="10" height="26" fill="#cfd5da"/><rect x="204" y="196" width="10" height="26" fill="#cfd5da"/>' +
      '<path d="' + shape + '" fill="#f7f3ea" stroke="#d6d0c4" stroke-width="2"/>' + bulbs + coins +
      '<text x="' + cx + '" y="124" text-anchor="middle" font-family="Brush Script MT, cursive" font-style="italic" font-size="16" fill="#1f5fae">to Fabulous</text>' +
      '<text x="' + cx + '" y="156" text-anchor="middle" ' + font + ' font-size="30" fill="' + RED + '" letter-spacing="1">LAS VEGAS</text>' +
      '<text x="' + cx + '" y="178" text-anchor="middle" font-family="Brush Script MT, cursive" font-style="italic" font-size="15" fill="#1f5fae">Nevada</text>' +
      '<path class="dw-flk" d="M200 22L206 38L222 36L210 46L216 60L200 52L184 60L190 46L178 36L194 38Z" fill="' + RED + '" stroke="' + GOLD + '" stroke-width="2"/><rect x="198" y="52" width="4" height="12" fill="#cfd5da"/>' +
      palm(60, 204, 1, "#2f5a3a") + palm(352, 206, .9, "#2f5a3a"),
      sky("dws2", "#0d0a24", "#5a2a5a"));
  }

  /* 3. East Las Vegas under Frenchman Mountain at sunrise */
  function dweast() {
    const house = (x, w, roof, wall) => '<rect x="' + x + '" y="168" width="' + w + '" height="36" fill="' + wall + '"/><path d="M' + (x - 6) + ' 170L' + (x + w / 2) + ' 150L' + (x + w + 6) + ' 170Z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 8) + '" y="178" width="12" height="10" fill="#4a3a30"/><rect x="' + (x + w - 22) + '" y="182" width="12" height="22" fill="#6b4a34"/>';
    const car = '<g class="dw-car"><path d="M0 222h58l-6 -12h-12l-8 -8h-16l-8 8h-8z" fill="' + TEAL + '"/><path d="M18 210l6 -6h12l6 6z" fill="#1c2a34"/>' +
      '<circle cx="12" cy="224" r="5" fill="#111"/><circle cx="46" cy="224" r="5" fill="#111"/><circle class="dw-flk" cx="57" cy="216" r="2" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dws3)"/>' +
      '<g class="dw-sun"><circle cx="300" cy="86" r="26" fill="#ffd27a"/><circle cx="300" cy="86" r="38" fill="#ffd27a" opacity=".25"/></g>' +
      '<path d="M0 150L60 120L120 96L170 70L200 60L232 74L290 104L350 124L400 136V200H0Z" fill="#8a4f3a"/>' +
      '<path d="M40 130L120 104L170 82L200 74L232 86L300 112L360 128" fill="none" stroke="#b06a48" stroke-width="5"/>' +
      '<path d="M20 142L120 116L196 92L250 104L330 126L400 140" fill="none" stroke="#6e3a2c" stroke-width="4"/>' +
      '<path d="M0 160L80 146L160 152L240 140L320 150L400 146V200H0Z" fill="#a8805c"/>' +
      house(30, 60, "#b4553a", "#e4cfa8") + house(116, 52, "#a6492f", "#dcc39a") + house(196, 64, "#b4553a", "#e8d6b2") + house(290, 56, "#9c4430", "#dcc39a") +
      palm(100, 206, .8, "#3b6a44") + palm(276, 206, .9, "#3b6a44") + palm(372, 206, .75, "#3b6a44") +
      '<rect x="0" y="204" width="400" height="56" fill="#4a4646"/><path d="M0 232H400" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="18 14"/>' + car +
      '<rect x="146" y="238" width="108" height="18" rx="3" fill="#1b1b1b" stroke="' + ORNG + '" stroke-width="1.5"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="11" fill="' + ORNG + '" letter-spacing="2">EAST SIDE 702</text>',
      sky("dws3", "#3a4a8a", "#ffb37a"));
  }

  /* 4. The Fremont Street canopy downtown */
  function dwfremont() {
    const cells = Array.from({ length: 30 }, (_, i) => { const x = 20 + i * 12; return '<rect class="dw-hue' + (i % 3 === 1 ? " dw-hue2" : i % 3 === 2 ? " dw-hue3" : "") + '" x="' + x + '" y="' + (52 + Math.abs(15 - i) * 0.9) + '" width="11" height="' + (26 - Math.abs(15 - i) * 0.5) + '" fill="' + PINK + '" opacity=".85"/>'; }).join("");
    const crowd = Array.from({ length: 34 }, (_, i) => '<ellipse cx="' + (8 + i * 12) + '" cy="' + (214 + (i % 3) * 3) + '" rx="6" ry="' + (10 + (i % 4)) + '" fill="#141018"/>').join("") +
      Array.from({ length: 34 }, (_, i) => '<circle cx="' + (8 + i * 12) + '" cy="' + (201 + (i % 3) * 3) + '" r="5" fill="#141018"/>').join("");
    const front = (x, w, col) => '<rect x="' + x + '" y="110" width="' + w + '" height="92" fill="#2a2030"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect class="dw-ch' + (i % 2 ? " dw-ch2" : "") + '" x="' + (x + 6) + '" y="' + (118 + i * 18) + '" width="' + (w - 12) + '" height="4" fill="' + col + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dws4)"/>' +
      front(0, 70, GOLD) + front(76, 56, TEAL) + front(268, 60, PINK) + front(334, 66, GOLD) +
      '<rect x="140" y="120" width="120" height="82" fill="#1e1826"/>' +
      '<path d="M10 92Q200 22 390 92" fill="none" stroke="#5a5a66" stroke-width="10"/>' +
      '<path d="M14 90Q200 26 386 90L386 82Q200 18 14 82Z" fill="#3a3a46"/>' + cells +
      '<text x="200" y="74" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="3" opacity=".95">STILL MOVIN’</text>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (28 + i * 70) + '" y="88" width="5" height="114" fill="#4a4a56"/>').join("") +
      '<rect x="0" y="202" width="400" height="58" fill="#2e2a2e"/>' + crowd,
      sky("dws4", "#0a0814", "#2a1838"));
  }

  /* 5. E Charleston Blvd and S Nellis Blvd, the Strat tower behind */
  function dwcorner() {
    const tower = '<rect x="180" y="44" width="12" height="96" fill="#c9cdd4"/><rect x="194" y="44" width="4" height="96" fill="#a7adb6"/>' +
      '<path d="M170 44h44l-4 -14h-36z" fill="#dfe3e8"/><rect x="168" y="28" width="48" height="6" fill="#9aa3ad"/><rect x="190" y="6" width="4" height="22" fill="#dfe3e8"/>' +
      '<circle class="dw-flk" cx="192" cy="6" r="3" fill="#ff3b3b"/>' + Array.from({ length: 5 }, (_, i) => '<rect class="dw-gl' + (i % 2 ? " dw-gl2" : "") + '" x="' + (174 + i * 8) + '" y="36" width="4" height="4" fill="' + GOLD + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dws5)"/>' + stars(10) +
      '<path d="M0 132L70 112L140 120L220 104L300 118L400 108V140H0Z" fill="#5a3a4a"/>' + tower +
      '<g fill="#2a2234"><rect x="40" y="110" width="34" height="30"/><rect x="250" y="100" width="40" height="40"/><rect x="296" y="114" width="30" height="26"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#d9bf98"/>' + Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 37) % 400) + '" cy="' + (142 + (i * 13) % 76) + '" r="1.4" fill="#c4a780"/>').join("") +
      '<rect x="0" y="134" width="400" height="5" fill="#b89a74"/>' +
      tag("DIZZY", 16, 184, 44, GOLD, -6) + tag("WRIGHT", 40, 216, 34, TEAL, -4) + tag("702", 196, 206, 22, ORNG, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524e"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 148, "E Charleston Blvd") + sign(266, 124, 132, "S Nellis Blvd") +
      palm(232, 224, .8, "#2f5a3a") +
      '<g class="dw-sp"><circle cx="186" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="dw-sp dw-sp2"><circle cx="192" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("dws5", "#1a1030", "#e07a4a"));
  }

  window.SCENES = { dwstation: dwstation, dwvegas: dwvegas, dweast: dweast, dwfremont: dwfremont, dwcorner: dwcorner };
})();
