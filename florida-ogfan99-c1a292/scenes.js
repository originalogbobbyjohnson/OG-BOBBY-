/* florida (Flo Rida) scenes (Regions tab: South Florida; Carol City, Miami Gardens). CSS classes and ids prefixed fl- (the page's own anim-train is kept).
   1 Metrobus Route 77 pulling into its last stop, NW 7 Av & NW 183 St in Miami Gardens (Miami Gardens Dr), palms, a blue party-day sky.
   2 Carver Ranches (West Park): the little cinderblock studio where the GroundHoggz cut their first records in the 90s, the REC light blinking.
   3 Barry University, Miami Shores: cream stucco arcade under red barrel-tile roofs, palms, a plane crossing (he studied there before Poe Boy called).
   4 Honolulu: Diamond Head over the turquoise water at Waikiki, a surfer on a wave (his first show on the road, as Fresh Kid Ice's hype man).
   5 NW 183 St and NW 2 Av: green signs, FLO RIDA tagged on the stucco wall, the Cloverleaf Plaza he bought glowing behind, a hot air balloon drifting up.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.fl-palm{transform-box:fill-box;transform-origin:50% 100%;animation:flsway 3.2s ease-in-out infinite}.fl-palm2{animation-delay:-1.6s}' +
    '@keyframes flcloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.fl-cloud{animation:flcloud 26s linear infinite}.fl-cloud2{animation-delay:-13s}' +
    '@keyframes flblink{0%,100%{opacity:.25}50%{opacity:1}}.fl-bl{animation:flblink 1.2s ease-in-out infinite}.fl-bl2{animation-delay:-.6s}' +
    '@keyframes flwave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.fl-eq{transform-box:fill-box;transform-origin:50% 100%;animation:flwave .7s ease-in-out infinite}' +
    '@keyframes flplane{from{transform:translateX(-60px)}to{transform:translateX(470px)}}.fl-plane{animation:flplane 12s linear infinite}' +
    '@keyframes flsurf{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(60px,-6px) rotate(6deg)}}.fl-surf{transform-box:fill-box;transform-origin:50% 50%;animation:flsurf 5s ease-in-out infinite}' +
    '@keyframes flswell{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.fl-sw{animation:flswell 3s ease-in-out infinite}.fl-sw2{animation-delay:-1.5s}' +
    '@keyframes flrise{0%{transform:translateY(30px)}100%{transform:translateY(-30px)}}.fl-ball{animation:flrise 7s ease-in-out infinite alternate}' +
    '@keyframes flneon{0%,100%{opacity:1}45%{opacity:1}50%{opacity:.35}55%{opacity:1}}.fl-neon{animation:flneon 2.6s linear infinite}' +
    '@keyframes flspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fl-sp{animation:flspray 1.4s ease-out infinite}.fl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const label = (txt, y) => '<rect x="' + (200 - txt.length * 3.6 - 12) + '" y="' + (y - 12) + '" width="' + (txt.length * 7.2 + 24) + '" height="18" rx="2" fill="#111" opacity=".78"/><text x="200" y="' + (y + 1) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => {
    const trunk = '<path d="M' + x + ' ' + base + 'q' + (h * 0.12) + ' ' + (-h * 0.5) + ' ' + (h * 0.04) + ' ' + (-h) + '" stroke="#8a6a48" stroke-width="' + (h * 0.07) + '" fill="none" stroke-linecap="round"/>';
    const tx = x + h * 0.04, ty = base - h;
    const fr = [[-1, -0.1], [-0.8, 0.35], [-0.3, -0.45], [0.3, -0.45], [0.8, 0.35], [1, -0.1]].map(f => '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * h * 0.3) + ' ' + (-h * 0.22 + f[1] * h * 0.1) + ' ' + (f[0] * h * 0.55) + ' ' + (f[1] * h * 0.35 + h * 0.05) + '" stroke="#2f7a3a" stroke-width="' + (h * 0.06) + '" fill="none" stroke-linecap="round"/>').join("");
    return '<g>' + trunk + '<g class="fl-palm ' + (cls || "") + '">' + fr + '</g></g>';
  };
  const cloud = (x, y, s, cls) => '<g class="fl-cloud ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (30 * s) + '" ry="' + (9 * s) + '" fill="#fff" opacity=".7"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (y - 6 * s) + '" rx="' + (16 * s) + '" ry="' + (8 * s) + '" fill="#fff" opacity=".7"/></g>';
  const BUS = "#1f4e79", TEAL = "#2ec4b6", BLUE = "#38d9ff", GOLD = "#ffc83d", PINK = "#ff5fa2", RED = "#c8102e";

  /* 1. Metrobus 77, last stop at NW 7 Av & NW 183 St, Miami Gardens */
  function flstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f4f0" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="36" y="158" width="316" height="8" fill="' + BUS + '"/><rect x="36" y="168" width="316" height="3" fill="' + GOLD + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="314" y="118" width="38" height="9" rx="2" fill="#111"/><text x="333" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">77</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fls1)"/>' +
      '<circle cx="70" cy="46" r="20" fill="#fff4b0" opacity=".95"/>' +
      cloud(80, 34, 1) + cloud(30, 66, .7, "fl-cloud2") +
      '<g fill="#7fa6bf" opacity=".6"><rect x="140" y="88" width="70" height="28"/><rect x="226" y="80" width="54" height="36"/><rect x="292" y="94" width="40" height="22"/></g>' +
      palm(20, 120, 80) + palm(374, 120, 74, "fl-palm2") + palm(200, 118, 56) +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#d3ccbd"/><path d="M0 196h400" stroke="#a49d8e" stroke-width="3"/>' +
      '<rect x="22" y="150" width="5" height="70" fill="#4a4f55"/><rect x="9" y="134" width="32" height="20" rx="2" fill="' + BUS + '"/><text x="25" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="70" y="206" width="262" height="44" rx="3" fill="#111"/><text x="82" y="224" ' + font + ' font-size="14" fill="#fff">NW 7 Av &amp; NW 183 St</text><text x="82" y="241" ' + font + ' font-size="10" fill="#cfd8e0">Metrobus · Miami Gardens</text>' + badge(282, 232, "77", BUS),
      sky("fls1", "#1f7fd1", "#9fe6ff"));
  }

  /* 2. Carver Ranches, West Park: the GroundHoggz studio */
  function flstudio() {
    const eq = [0, 1, 2, 3, 4].map(i => '<rect class="fl-eq" style="animation-delay:-' + (i * 0.13).toFixed(2) + 's" x="' + (262 + i * 12) + '" y="150" width="8" height="34" rx="2" fill="' + (i % 2 ? BLUE : GOLD) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fls2)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#fff1c9" opacity=".9"/>' + cloud(60, 40, .8) +
      palm(30, 150, 100) + palm(372, 150, 88, "fl-palm2") +
      '<rect x="0" y="150" width="400" height="110" fill="#8bb56a"/>' +
      '<rect x="70" y="84" width="260" height="110" fill="#e9dcc3"/>' +
      Array.from({ length: 9 }, (_, r) => '<path d="M70 ' + (94 + r * 11) + 'h260" stroke="#d2c3a6" stroke-width="1"/>').join("") +
      '<rect x="62" y="76" width="276" height="12" fill="#8c8478"/>' +
      '<rect x="96" y="120" width="44" height="74" fill="#5a3a2a"/><circle cx="132" cy="160" r="3" fill="' + GOLD + '"/>' +
      '<rect x="160" y="108" width="54" height="36" fill="#25303b" stroke="#fff" stroke-width="3"/><path d="M187 108v36M160 126h54" stroke="#fff" stroke-width="2"/>' +
      '<rect x="226" y="98" width="70" height="20" rx="3" fill="#111"/><text class="fl-bl" x="261" y="113" text-anchor="middle" ' + font + ' font-size="13" fill="#ff3b3b">REC</text>' +
      '<rect x="254" y="144" width="68" height="44" rx="4" fill="#1a1d24"/>' + eq +
      tag("GROUNDHOGGZ", 148, 184, 13, BLUE, -4) +
      '<rect x="0" y="210" width="400" height="50" fill="#6a6c70"/>' +
      label("CARVER RANCHES · WEST PARK", 236),
      sky("fls2", "#5ec3ff", "#ffe2b0"));
  }

  /* 3. Barry University, Miami Shores */
  function flbarry() {
    const arches = Array.from({ length: 6 }, (_, i) => '<path d="M' + (66 + i * 46) + ' 196v-44a18 18 0 0 1 36 0v44z" fill="#6b4a3a" opacity=".85"/>').join("");
    const tiles = Array.from({ length: 30 }, (_, i) => '<path d="M' + (52 + i * 10) + ' 112v14" stroke="#9a3b22" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fls3)"/>' +
      cloud(70, 40, 1) + cloud(20, 70, .6, "fl-cloud2") +
      '<g class="fl-plane"><path d="M0 52l26 -4 8 -8h5l-4 9 14 -2 4 -5h4l-2 7 2 7h-4l-4 -5 -14 -2 4 9h-5l-8 -8z" fill="#f4f4f4"/></g>' +
      '<rect x="164" y="54" width="40" height="64" fill="#f1e6cf"/><path d="M158 58l26 -24 26 24z" fill="#b5462a"/><rect x="176" y="70" width="16" height="24" rx="8" fill="#6b4a3a"/>' +
      '<rect x="56" y="122" width="292" height="80" fill="#f1e6cf"/>' +
      '<path d="M46 126l14 -18h284l14 18z" fill="#c4542f"/>' + tiles + arches +
      '<rect x="56" y="196" width="292" height="6" fill="#d9caa9"/>' +
      palm(30, 210, 110) + palm(376, 210, 100, "fl-palm2") + palm(120, 214, 70) + palm(300, 214, 66, "fl-palm2") +
      '<rect x="0" y="206" width="400" height="54" fill="#7fb35f"/><path d="M150 260l26 -54h48l26 54z" fill="#e6dcc8"/>' +
      '<rect x="230" y="140" width="4" height="56" fill="#555"/><path d="M234 142h30v18h-30z" fill="' + RED + '"/>' +
      label("BARRY UNIVERSITY · MIAMI SHORES", 240),
      sky("fls3", "#2f8fe0", "#cdeeff"));
  }

  /* 4. Honolulu: Diamond Head and Waikiki */
  function flhawaii() {
    return svg(
      '<rect width="400" height="260" fill="url(#fls4)"/>' +
      '<circle cx="320" cy="44" r="20" fill="#fff3b8"/>' + cloud(80, 36, 1) + cloud(30, 60, .7, "fl-cloud2") +
      '<path d="M120 140l40 -44q30 -22 60 -14l40 12q30 4 60 30l40 16z" fill="#7a6a4a"/>' +
      '<path d="M150 112q40 -20 90 -12l40 14q-50 -10 -130 -2z" fill="#5f7f45" opacity=".9"/>' +
      '<path d="M200 96q24 -6 44 4l-8 10q-18 -8 -36 -4z" fill="#4e6a38"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#16b3c9"/>' +
      '<g class="fl-sw"><path d="M0 162q20 -6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#bff3fa" stroke-width="3" fill="none"/></g>' +
      '<g class="fl-sw fl-sw2"><path d="M0 186q20 -6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#9fe9f3" stroke-width="3" fill="none"/></g>' +
      '<path d="M40 214q60 -50 130 -20q-40 -6 -60 20z" fill="#0e8ea3"/><path d="M40 214q60 -50 130 -20" stroke="#fff" stroke-width="4" fill="none"/>' +
      '<g class="fl-surf"><path d="M92 196l40 -6 2 4 -40 6z" fill="' + GOLD + '"/><path d="M110 192v-14l4 -4 4 4v14z" fill="#2b2b2b"/><circle cx="114" cy="170" r="4" fill="#2b2b2b"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#f2deae"/>' +
      palm(350, 236, 100) + palm(388, 236, 78, "fl-palm2") +
      label("HONOLULU · THE FIRST SHOW ON THE ROAD", 250),
      sky("fls4", "#3aa6ff", "#ffe0b8"));
  }

  /* 5. NW 183 St and NW 2 Av, Cloverleaf Plaza behind */
  function flcorner() {
    const plaza = '<rect x="40" y="70" width="240" height="66" fill="#2a2f3e"/><rect x="40" y="64" width="240" height="8" fill="#3a4152"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="96" width="36" height="34" fill="#ffd98a" opacity=".55"/>').join("") +
      '<rect x="96" y="74" width="128" height="18" rx="3" fill="#111"/><text class="fl-neon" x="160" y="88" text-anchor="middle" ' + font + ' font-size="13" fill="' + BLUE + '">STUDIO 183</text>' +
      '<rect x="296" y="30" width="6" height="106" fill="#5b6168"/><rect x="270" y="20" width="58" height="22" rx="3" fill="#0f2a44"/><text x="299" y="35" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">CLOVERLEAF</text>' +
      '<circle cx="299" cy="56" r="10" fill="' + GOLD + '" stroke="#7a5a1a" stroke-width="2"/><circle cx="299" cy="56" r="4" fill="#fff3c4"/>';
    const balloon = '<g class="fl-ball"><ellipse cx="350" cy="56" rx="16" ry="19" fill="' + PINK + '"/><path d="M336 60q14 8 28 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/><path d="M342 72l4 10M358 72l-4 10" stroke="#555" stroke-width="1"/><rect x="345" y="82" width="10" height="7" fill="#8a6a48"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fls5)"/>' +
      cloud(70, 30, .9) + plaza + balloon +
      '<rect x="0" y="136" width="400" height="8" fill="#a8a296"/>' +
      palm(26, 140, 86) + palm(368, 140, 80, "fl-palm2") +
      '<rect x="0" y="140" width="250" height="88" fill="#f4e3c4"/><rect x="0" y="140" width="250" height="6" fill="#dcc6a2"/>' +
      tag("FLO RIDA", 18, 200, 44, BLUE, -5) + tag("GROUNDHOGGZ", 110, 222, 15, GOLD, -3) +
      '<g class="fl-sp"><circle cx="234" cy="176" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="fl-sp fl-sp2"><circle cx="240" cy="170" r="2" fill="' + BLUE + '" opacity=".7"/></g>' +
      '<rect x="262" y="100" width="5" height="128" fill="#5b6168"/>' + sign(272, 106, 108, "NW 183 ST") + sign(272, 132, 108, "NW 2 AV") +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6c70"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="326" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">MIAMI GARDENS</text>',
      sky("fls5", "#1b6fd0", "#ffb78a"));
  }

  window.SCENES = { flstop: flstop, flstudio: flstudio, flbarry: flbarry, flhawaii: flhawaii, flcorner: flcorner };
})();
