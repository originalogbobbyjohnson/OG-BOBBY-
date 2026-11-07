/* zioni scenes (Regions tab: The Bay Area; Oakland). Zion I = Zumbi (Oakland native) + Amp Live. CSS classes prefixed zi- (the page's own anim-train is kept).
   1 MacArthur BART: the elevated platform in the middle of Highway 24, cars rushing on both sides, a white-and-blue BART train sliding in.
   2 The Paramount Theatre on Broadway (Uptown Oakland): the tall art deco tile facade, the vertical red-lit PARAMOUNT sign, a chasing marquee.
   3 Highway 1 at sunset ("Coastin'"): the car jets west, windows down, over the cliffs, the Pacific rolling in.
   4 Graves Hall at Morehouse College, Atlanta, where Zumbi met Amp Live ("From the A to the Bay"): red brick, white trim, the tower.
   5 Broadway and 40th St: green signs, ZION I tagged, the glass Cathedral of Christ the Light glowing behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes zicar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.zi-car{animation:zicar 5s linear infinite}.zi-car2{animation-delay:-2.5s}' +
    '@keyframes zicarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.zi-carL{animation:zicarL 6s linear infinite}.zi-carL2{animation-delay:-3s}' +
    '@keyframes ziflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.95}}.zi-flk{animation:ziflick 2.4s infinite}.zi-flk2{animation-delay:.8s}' +
    '@keyframes zichase{0%,100%{opacity:1}50%{opacity:.2}}.zi-ch{animation:zichase .8s steps(1) infinite}.zi-ch2{animation-delay:-.4s}' +
    '@keyframes ziwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.zi-wave{animation:ziwave 3s ease-in-out infinite}.zi-wave2{animation-delay:-1.5s}' +
    '@keyframes zidrive{0%{transform:translate(260px,0)}100%{transform:translate(-120px,0)}}.zi-drive{animation:zidrive 9s linear infinite}' +
    '@keyframes zisun{0%,100%{opacity:.85}50%{opacity:1}}.zi-sun{animation:zisun 3s ease-in-out infinite}' +
    '@keyframes zibird{0%{transform:translate(0,0)}100%{transform:translate(440px,-24px)}}.zi-bird{animation:zibird 11s linear infinite}.zi-bird2{animation-delay:-5.5s}' +
    '@keyframes zispray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.zi-sp{animation:zispray 1.4s ease-out infinite}.zi-sp2{animation-delay:.45s}' +
    '@keyframes ziglow{0%,100%{opacity:.55}50%{opacity:1}}.zi-glow{animation:ziglow 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c, flip) => '<g class="' + cls + '"><g' + (flip ? ' transform="translate(' + (2 * x + 58) + ',0) scale(-1,1)"' : '') + '><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 56) + '" cy="' + (y + 5) + '" r="2" fill="#fff6c2"/></g></g>';
  const BART = "#0099d8", GOLD = "#f2c14e", SKYB = "#5fc6e8", MAG = "#e2508a";

  /* 1. MacArthur BART: platform in the Highway 24 median, freeway lanes both sides */
  function zistation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="88" width="30" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><path d="M30 82h300q30 0 34 34v20H30z" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="30" y="116" width="334" height="8" fill="' + BART + '"/><rect x="30" y="124" width="334" height="2" fill="#1d3f6e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (100 + i * 88) + '" y="92" width="4" height="44" fill="#c9ced3"/>').join("") +
      '<path d="M330 86q26 2 30 28h-30z" fill="#1f2a33"/><circle cx="356" cy="130" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#zis1)"/>' +
      '<path d="M0 64l50 -18l60 12l70 -26l80 20l70 -16l70 22v16H0z" fill="#4b5a3e" opacity=".75"/>' +
      '<rect x="0" y="28" width="400" height="10" fill="#c9c4b8"/>' + [30, 200, 370].map(x => '<rect x="' + (x - 3) + '" y="38" width="6" height="104" fill="#b5b0a6"/>').join("") +
      '<g class="zi-flk"><rect x="90" y="38" width="44" height="4" fill="#fff3c4"/></g><g class="zi-flk zi-flk2"><rect x="266" y="38" width="44" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="138" width="400" height="6" fill="#f2c200"/><rect x="0" y="144" width="400" height="16" fill="#c9c3b6"/>' +
      /* freeway lanes on both sides of the station */
      '<rect x="0" y="160" width="400" height="100" fill="#3a3b40"/><rect x="0" y="206" width="400" height="6" fill="#bdb6a8"/>' +
      '<path d="M0 184h400M0 236h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("zi-car", 0, 188, "#c94a3a") + car("zi-car zi-car2", 0, 188, "#e8e2d4") +
      car("zi-carL", 0, 240, "#2f6fa8", true) + car("zi-carL zi-carL2", 0, 240, GOLD, true) +
      '<rect x="100" y="160" width="200" height="32" rx="3" fill="#111"/><text x="114" y="182" ' + font + ' font-size="17" fill="#fff">MacArthur</text>' + badge(220, 176, "BART", BART) +
      '<rect x="318" y="164" width="64" height="18" rx="2" fill="#2a6e3a" stroke="#fff" stroke-width="1"/><text x="350" y="177" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CA 24 EAST</text>' +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0" opacity=".9">MACARTHUR · OAKLAND</text>',
      sky("zis1", "#24305a", "#e8945a"));
  }

  /* 2. Paramount Theatre: art deco tile facade, vertical sign, chasing marquee */
  function ziparamount() {
    const letters = "PARAMOUNT".split("").map((c, i) => '<text x="200" y="' + (40 + i * 13) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#ff5a4a">' + c + '</text>').join("");
    const bulbs = [155, 179].map(y => Array.from({ length: 22 }, (_, i) => '<circle class="zi-ch' + (i % 2 ? " zi-ch2" : "") + '" cx="' + (96 + i * 10) + '" cy="' + y + '" r="2" fill="#fff3a8"/>').join("")).join("");
    const tiles = Array.from({ length: 7 }, (_, r) => Array.from({ length: 5 }, (_, c) => '<rect x="' + (64 + c * 12) + '" y="' + (56 + r * 14) + '" width="10" height="12" fill="' + ((r + c) % 2 ? "#2f8a8a" : "#c9a24a") + '"/>').join("") +
      Array.from({ length: 5 }, (_, c) => '<rect x="' + (276 + c * 12) + '" y="' + (56 + r * 14) + '" width="10" height="12" fill="' + ((r + c) % 2 ? "#c9a24a" : "#2f8a8a") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#zis2)"/>' +
      '<rect x="40" y="44" width="320" height="150" fill="#e8dcc0"/>' +
      '<path d="M40 44l20 -14h280l20 14z" fill="#d6c8a6"/>' +
      tiles +
      /* deco stepped piers */
      [130, 160, 240, 270].map(x => '<rect x="' + (x - 4) + '" y="40" width="8" height="154" fill="#cdbf9a"/><rect x="' + (x - 6) + '" y="36" width="12" height="8" fill="#b8a77e"/>').join("") +
      /* tall central window with deco glow */
      '<rect x="170" y="52" width="60" height="100" fill="#2b4a5a"/><path d="M170 52l30 -14l30 14z" fill="#c9a24a"/>' +
      '<g class="zi-glow">' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (174 + i * 9) + '" y="58" width="6" height="90" fill="#f2c14e" opacity=".55"/>').join("") + '</g>' +
      /* vertical sign */
      '<rect x="190" y="26" width="20" height="124" rx="3" fill="#1a1a1a" stroke="#c9a24a" stroke-width="2"/><g class="zi-flk">' + letters + '</g>' +
      /* marquee */
      '<rect x="86" y="150" width="228" height="34" fill="#1a1a1a" stroke="#c9a24a" stroke-width="3"/>' + bulbs +
      '<text x="200" y="166" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">TONIGHT</text><text x="200" y="176" text-anchor="middle" ' + font + ' font-size="10" fill="#f2c14e">ZION I · LIVE UP</text>' +
      '<rect x="40" y="194" width="320" height="6" fill="#b8a77e"/>' +
      '<rect x="0" y="200" width="400" height="16" fill="#cfc8b8"/><rect x="0" y="216" width="400" height="44" fill="#3a3b40"/><path d="M0 238h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("zi-car", 0, 226, "#3a8a6a") +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f7efe0">THE PARAMOUNT · BROADWAY, UPTOWN OAKLAND</text>',
      sky("zis2", "#141a3a", "#4a3a6a"));
  }

  /* 3. Highway 1 at sunset: cliffs, ocean, the car jets west */
  function zicoast() {
    return svg(
      '<rect width="400" height="260" fill="url(#zis3)"/>' +
      '<circle class="zi-sun" cx="90" cy="120" r="34" fill="#ffd27a"/>' +
      '<rect x="0" y="130" width="400" height="130" fill="#2a5a8a"/>' +
      '<g class="zi-wave"><path d="M0 146q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v6H0z" fill="#4a8ab8" opacity=".7"/></g>' +
      '<g class="zi-wave zi-wave2"><path d="M0 170q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v6H0z" fill="#ffd27a" opacity=".35"/></g>' +
      '<path d="M60 128h60l-30 60z" fill="#ffd27a" opacity=".25"/>' +
      /* cliffs on the right with the road cut into them */
      '<path d="M190 260l20 -80l40 -40l40 -24l60 -14l50 -4v162z" fill="#6a5a3a"/>' +
      '<path d="M226 168l40 -32l50 -20l84 -8v14l-80 8l-48 20l-36 30z" fill="#3a3b40"/>' +
      '<path d="M236 166l36 -28l46 -18l82 -8" stroke="#f2d04a" stroke-width="1.5" stroke-dasharray="8 6" fill="none"/>' +
      '<path d="M210 260l16 -60l24 -24l-6 84z" fill="#4e4228"/><g fill="#5f7a3a"><ellipse cx="350" cy="96" rx="40" ry="10"/><ellipse cx="300" cy="112" rx="26" ry="7"/></g>' +
      '<g class="zi-drive">' + car("", 150, 132, "#f2c14e") + '<path d="M152 128q-10 -4 -20 0M150 134q-12 -2 -22 2" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/></g>' +
      '<g class="zi-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#3a2a3a" stroke-width="2" fill="none"/></g><g class="zi-bird zi-bird2"><path d="M0 80q4 -4 8 0q4 -4 8 0" stroke="#3a2a3a" stroke-width="2" fill="none"/></g>' +
      '<rect x="306" y="190" width="70" height="20" rx="2" fill="#2a6e3a" stroke="#fff" stroke-width="1.2"/><text x="341" y="204" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CA 1 SOUTH</text>' +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#3a1a2a">HIGHWAY 1 · COASTIN\' ON A DREAM</text>',
      sky("zis3", "#f28a6a", "#ffd8a0"));
  }

  /* 4. Graves Hall, Morehouse College, Atlanta: red brick, white trim, center tower */
  function zimorehouse() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="12" height="20" fill="#2a3a4a" stroke="#f3eee2" stroke-width="2"/><path d="M' + x + ' ' + y + 'q6 -8 12 0" fill="#f3eee2"/>';
    let wins = "";
    for (const y of [120, 160]) for (const x of [56, 80, 104, 130, 254, 280, 304, 330]) wins += win(x, y);
    return svg(
      '<rect width="400" height="260" fill="url(#zis4)"/>' +
      '<g fill="#3e6a3a"><ellipse cx="20" cy="170" rx="40" ry="60"/><ellipse cx="384" cy="166" rx="40" ry="64"/></g>' +
      '<rect x="44" y="100" width="312" height="110" fill="#a8432f"/><path d="M38 102l162 -30l162 30z" fill="#5a3a3a"/>' +
      '<rect x="44" y="140" width="312" height="4" fill="#f3eee2"/><rect x="44" y="180" width="312" height="4" fill="#f3eee2"/>' +
      wins +
      /* center tower */
      '<rect x="168" y="50" width="64" height="160" fill="#b24a34"/><rect x="168" y="50" width="64" height="5" fill="#f3eee2"/>' +
      '<path d="M162 52l38 -36l38 36z" fill="#4a2e2e"/><path d="M200 16v-10" stroke="#3a3a3a" stroke-width="2"/>' +
      '<rect x="186" y="66" width="28" height="36" fill="#2a3a4a" stroke="#f3eee2" stroke-width="3"/><path d="M186 66q14 -14 28 0" fill="#f3eee2"/>' +
      '<rect x="186" y="118" width="28" height="30" fill="#2a3a4a" stroke="#f3eee2" stroke-width="2"/>' +
      '<rect x="180" y="166" width="40" height="44" fill="#5a2a1a" stroke="#f3eee2" stroke-width="3"/><path d="M180 166q20 -18 40 0" fill="#f3eee2"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5f8a3a"/><path d="M150 260l30 -50h40l30 50z" fill="#d8cfbc"/>' +
      '<g class="zi-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g><g class="zi-bird zi-bird2"><path d="M0 60q4 -4 8 0q4 -4 8 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      '<rect x="292" y="222" width="96" height="20" rx="2" fill="#7a1f2a" stroke="#fff" stroke-width="1"/><text x="340" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">FROM THE A</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GRAVES HALL · ATLANTA</text>',
      sky("zis4", "#6ab0e0", "#e6f2f8"));
  }

  /* 5. Broadway and 40th St: green signs, ZION I tagged, the glass cathedral behind */
  function zicorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#zis5)"/>' +
      /* Cathedral of Christ the Light: glass vesica with wooden ribs */
      '<g class="zi-glow"><path d="M200 26q-70 50 -70 110h140q0 -60 -70 -110z" fill="#d8e6ec" opacity=".85"/></g>' +
      '<path d="M200 26q-70 50 -70 110h140q0 -60 -70 -110z" fill="none" stroke="#c9a06a" stroke-width="3"/>' +
      [150, 170, 190, 210, 230, 250].map(x => '<path d="M' + x + ' 136q' + (200 - x) * 0.3 + ' -60 ' + (200 - x) + ' -108" stroke="#c9a06a" stroke-width="1.5" fill="none" opacity=".8"/>').join("") +
      '<rect x="120" y="134" width="160" height="10" fill="#9aa4a8"/>' +
      '<g fill="#2a2f3a"><rect x="20" y="70" width="50" height="76"/><rect x="74" y="90" width="40" height="56"/><rect x="290" y="80" width="44" height="66"/><rect x="340" y="60" width="50" height="86"/></g>' +
      /* the wall */
      '<rect x="0" y="140" width="290" height="88" fill="#5a4a5a"/>' +
      Array.from({ length: 5 }, (_, r) => '<path d="M0 ' + (158 + r * 16) + 'h290" stroke="#4a3a4a" stroke-width="1"/>').join("") +
      tag("ZION I", 18, 200, 44, SKYB, -6) + tag("LIVE UP", 176, 216, 18, GOLD, -4) + tag("ZUMBI", 200, 176, 20, MAG, -8) +
      '<g class="zi-sp"><circle cx="270" cy="186" r="3" fill="' + SKYB + '"/></g><g class="zi-sp zi-sp2"><circle cx="276" cy="192" r="2.4" fill="' + GOLD + '"/></g>' +
      '<rect x="268" y="190" width="10" height="20" rx="2" fill="#d8d8d8"/><rect x="270" y="184" width="6" height="7" fill="#3a3a3a"/>' +
      /* sign pole */
      '<rect x="330" y="96" width="5" height="132" fill="#4a4a4a"/>' + sign(296, 96, 84, "Broadway") + sign(300, 122, 76, "40th St") +
      '<rect x="0" y="228" width="400" height="32" fill="#3a3b40"/><rect x="0" y="226" width="400" height="4" fill="#cfc8b8"/>' +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f7efe0">BROADWAY &amp; 40TH ST · OAKLAND</text>',
      sky("zis5", "#1a1f3a", "#6a4a7a"));
  }

  window.SCENES = { zistation, ziparamount, zicoast, zimorehouse, zicorner };
})();
