/* kurtvile scenes (Regions tab: Philadelphia; Lansdowne, Delaware County, the borough just west of the city line where Kurt Vile grew up). CSS classes prefixed kv- (the page's own anim-train is kept).
   1 Lansdowne station on SEPTA Regional Rail's Media/Wawa Line: the old stone station house with its broad hipped roof and deep canopy, a silver Silverliner rolling in.
   2 The Wakin on a Pretty Daze wall: the long sign-painted mural (by Steve "ESPO" Powers) that became his 2013 album cover, under the El near Front & Master in Fishtown; a Market-Frankford train crossing above.
   3 A Philly loading zone: his forklift-driving years and his song "Loading Zones": a dock, pallets, a forklift rolling, the curb sign.
   4 Johnny Brenda's corner, Frankford & Girard in Fishtown, the hometown bar-venue he keeps coming back to: brick corner building, a Girard Ave trolley gliding by.
   5 N Lansdowne Ave and W Baltimore Ave: green signs, KURT VILE tagged on a wall, the 1927 Lansdowne Theater's tower and marquee behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kvsun{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:1}}.kv-sun{transform-box:fill-box;transform-origin:50% 50%;animation:kvsun 3.4s ease-in-out infinite}' +
    '@keyframes kvel{from{transform:translateX(-260px)}to{transform:translateX(420px)}}.kv-el{animation:kvel 7s linear infinite}' +
    '@keyframes kvlift{0%,100%{transform:translateX(0)}50%{transform:translateX(90px)}}.kv-lift{animation:kvlift 6s ease-in-out infinite}' +
    '@keyframes kvfork{0%,100%{transform:translateY(0)}25%,75%{transform:translateY(-16px)}}.kv-fork{animation:kvfork 6s ease-in-out infinite}' +
    '@keyframes kvtrol{from{transform:translateX(-200px)}to{transform:translateX(440px)}}.kv-trol{animation:kvtrol 10s linear infinite}' +
    '@keyframes kvblink{0%,100%{opacity:.35}50%{opacity:1}}.kv-blink{animation:kvblink 1.6s ease-in-out infinite}.kv-k2{animation-delay:-.8s}' +
    '@keyframes kvnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-50px);opacity:0}}.kv-note{animation:kvnote 3.2s linear infinite}.kv-n2{animation-delay:-1.6s}' +
    '@keyframes kvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kv-sp{animation:kvspray 1.4s ease-out infinite}.kv-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const bricks = (x0, y0, w, h, base, line) => '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' +
    Array.from({ length: Math.floor(h / 8) }, (_, r) => '<path d="M' + x0 + ' ' + (y0 + 8 + r * 8) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>' +
      Array.from({ length: Math.floor(w / 20) }, (_, i) => '<path d="M' + (x0 + i * 20 + (r % 2) * 10) + ' ' + (y0 + r * 8) + 'v8" stroke="' + line + '" stroke-width="1"/>').join("")).join("");
  const stones = (x0, y0, w, h, seed) => {
    let s = '', k = seed || 1;
    const cols = ["#8a7f70", "#9d917f", "#7a6f62", "#a89b88", "#90857a"];
    for (let y = y0; y < y0 + h - 4; y += 9) {
      for (let x = x0 + ((y / 9) % 2) * 6; x < x0 + w - 6; x += 15) {
        k = (k * 37 + 11) % 97;
        const ww = Math.min(11 + (k % 5), x0 + w - x - 1);
        s += '<rect x="' + x + '" y="' + (y + 1) + '" width="' + ww + '" height="7" rx="2.5" fill="' + cols[k % 5] + '"/>';
      }
    }
    return s;
  };
  const SUN = "#f4c542", ORANGE = "#e8603c", BLUE = "#5fb3d9", RR = "#91456c", MFL = "#0f75bc";

  /* 1. Lansdowne station, Media/Wawa Line */
  function kvstation() {
    const car = (x) => '<rect x="' + x + '" y="132" width="196" height="62" rx="6" fill="#c9ced4" stroke="#7a828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 12 + i * 30) + '" y="140" width="22" height="20" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="' + x + '" y="166" width="196" height="4" fill="#c8102e"/><rect x="' + x + '" y="171" width="196" height="4" fill="#1f4e9a"/>' +
      '<rect x="' + (x + 88) + '" y="140" width="20" height="50" fill="#a9b0b8" stroke="#7a828a"/>';
    const train = '<g class="anim-train">' + car(4) + car(204) +
      '<rect x="206" y="124" width="62" height="9" rx="2" fill="#111"/><text x="237" y="131.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">MEDIA/WAWA</text>' +
      '<circle cx="40" cy="198" r="7" fill="#2a2a2a"/><circle cx="160" cy="198" r="7" fill="#2a2a2a"/><circle cx="240" cy="198" r="7" fill="#2a2a2a"/><circle cx="360" cy="198" r="7" fill="#2a2a2a"/></g>';
    /* stone station house with a broad hipped roof, deep bracketed canopy and tall chimney */
    const house = '<rect x="110" y="64" width="180" height="62" fill="#8a7f70"/>' + stones(110, 64, 180, 62, 4) +
      [132, 172, 212, 252].map(x => '<rect x="' + x + '" y="74" width="18" height="30" fill="#2c3440" stroke="#e8dcc4" stroke-width="2"/><path d="M' + x + ' 86h18" stroke="#e8dcc4" stroke-width="1.5"/>').join("") +
      '<path d="M84 72l40 -34h152l40 34z" fill="#5a3a30" stroke="#3a241e" stroke-width="2"/>' +
      '<path d="M78 72h244l-10 10h-224z" fill="#6a4a3a"/>' +
      [96, 150, 200, 250, 304].map(x => '<path d="M' + x + ' 82l6 10" stroke="#3a241e" stroke-width="3"/>').join("") +
      '<rect x="248" y="16" width="14" height="26" fill="#7a6f62"/><rect x="245" y="14" width="20" height="5" fill="#5a524a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kv-s1)"/>' +
      '<circle class="kv-sun" cx="350" cy="36" r="18" fill="' + SUN + '"/>' +
      tree(30, 100, 2.2, "#4f7d3a") + tree(372, 104, 2.0, "#5b8a40") +
      house +
      '<rect x="0" y="126" width="400" height="8" fill="#b8b2a6"/>' +
      '<rect x="0" y="194" width="400" height="8" fill="#6a5a4a"/><path d="M0 200h400M0 206h400" stroke="#8a8f96" stroke-width="2"/>' +
      train +
      '<rect x="0" y="208" width="400" height="52" fill="#a8a29a"/><rect x="0" y="208" width="400" height="4" fill="#f0d24a"/>' +
      '<rect x="60" y="220" width="280" height="32" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(72, 236, "RR", RR) +
      '<text x="214" y="243" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Lansdowne</text>',
      sky("kv-s1", "#8ec5e8", "#f6e7c0"));
  }

  /* 2. The Wakin on a Pretty Daze wall under the El, Front & Master */
  function kvmural() {
    const panel = (x, y, w, h, bg, txt, fg, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + bg + '"/><text x="' + (x + w / 2) + '" y="' + (y + h / 2 + fs * 0.36) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="' + fs + '" fill="' + fg + '" textLength="' + Math.min(w - 16, txt.length * fs * 0.62) + '" lengthAdjust="spacingAndGlyphs">' + txt + '</text>';
    const elcar = (x) => '<rect x="' + x + '" y="20" width="120" height="30" rx="3" fill="#d8dde2" stroke="#7a828a" stroke-width="1.5"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 8 + i * 22) + '" y="25" width="16" height="12" rx="1" fill="#1f2830"/>').join("") +
      '<rect x="' + x + '" y="40" width="120" height="4" fill="' + MFL + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kv-s2)"/>' +
      /* El structure */
      '<g class="kv-el">' + elcar(0) + elcar(124) + '</g>' +
      '<rect x="0" y="50" width="400" height="12" fill="#3a5a7a"/><path d="M0 56h400" stroke="#2a4460" stroke-width="2"/>' +
      [20, 140, 260, 380].map(x => '<rect x="' + (x - 4) + '" y="62" width="8" height="34" fill="#3a5a7a"/>').join("") +
      /* the painted wall */
      bricks(0, 96, 400, 118, "#a8553e", "#8f4532") +
      panel(14, 104, 170, 40, "#f6e8c8", "WAKIN ON A", "#1f3a6a", 30) +
      panel(190, 104, 196, 40, SUN, "PRETTY DAZE", "#c8202e", 30) +
      panel(14, 150, 110, 26, BLUE, "KV", "#fff", 20) +
      panel(130, 150, 120, 26, "#2f6a4a", "PHILADELPHIA", SUN, 16) +
      panel(256, 150, 130, 26, ORANGE, "GOOD MORNING", "#fff", 16) +
      panel(14, 182, 372, 24, "#1f2830", "IT'S HARD TO EXPLAIN MY LOVE IN THIS DAZE", "#f6e8c8", 14) +
      '<rect x="0" y="214" width="400" height="46" fill="#7a7a72"/><rect x="0" y="214" width="400" height="5" fill="#b0aca0"/>' +
      '<g class="kv-blink"><circle cx="300" cy="80" r="3" fill="#fff6c0"/></g><g class="kv-blink kv-k2"><circle cx="90" cy="84" r="2.5" fill="#fff6c0"/></g>',
      sky("kv-s2", "#9fd0ee", "#fbe6b8"));
  }

  /* 3. A Philly loading zone: dock, pallets, forklift */
  function kvdock() {
    const pallet = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="44" height="26" fill="' + c + '" stroke="#5a3a1e" stroke-width="1.5"/><path d="M' + x + ' ' + (y + 13) + 'h44M' + (x + 22) + ' ' + y + 'v26" stroke="#5a3a1e" stroke-width="1"/><rect x="' + x + '" y="' + (y + 26) + '" width="44" height="6" fill="#b08850"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kv-s3)"/>' +
      /* warehouse */
      bricks(0, 40, 400, 140, "#8a4a38", "#74402e") +
      '<rect x="0" y="34" width="400" height="8" fill="#5a3226"/>' +
      [30, 170].map(x => '<rect x="' + x + '" y="70" width="120" height="96" fill="#5a5f66"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + x + ' ' + (78 + i * 8) + 'h120" stroke="#474c52" stroke-width="2"/>').join("")).join("") +
      '<rect x="310" y="64" width="70" height="40" fill="#2c3440" stroke="#d8d0c0" stroke-width="3"/><path d="M345 64v40M310 84h70" stroke="#d8d0c0" stroke-width="2"/>' +
      '<rect x="0" y="166" width="300" height="14" fill="#9a968c"/><rect x="0" y="176" width="300" height="4" fill="#f0d24a"/>' +
      pallet(40, 140, "#c8a060") + pallet(86, 140, "#b89050") + pallet(60, 114, "#d0aa6a") +
      /* street */
      '<rect x="0" y="180" width="400" height="80" fill="#55565a"/><path d="M0 222h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      /* loading zone sign */
      '<rect x="356" y="110" width="4" height="80" fill="#2f2f2f"/><rect x="330" y="112" width="56" height="34" rx="2" fill="#fff" stroke="#c8102e" stroke-width="2"/>' +
      '<text x="358" y="126" text-anchor="middle" ' + font + ' font-size="8" fill="#c8102e">LOADING</text><text x="358" y="139" text-anchor="middle" ' + font + ' font-size="8" fill="#c8102e">ZONE</text>' +
      /* forklift */
      '<g class="kv-lift">' +
      '<rect x="150" y="196" width="60" height="26" rx="3" fill="' + SUN + '" stroke="#8a6a10" stroke-width="2"/>' +
      '<path d="M162 196v-30h34v30" fill="none" stroke="#2a2a2a" stroke-width="3"/><rect x="164" y="166" width="30" height="4" fill="#2a2a2a"/>' +
      '<rect x="212" y="150" width="5" height="74" fill="#3a3a3a"/>' +
      '<g class="kv-fork"><path d="M217 214h26" stroke="#3a3a3a" stroke-width="4"/>' + pallet(218, 184, "#c8a060").replace('height="26"', 'height="24"') + '</g>' +
      '<circle cx="164" cy="226" r="9" fill="#222"/><circle cx="200" cy="226" r="9" fill="#222"/><circle cx="164" cy="226" r="3" fill="#888"/><circle cx="200" cy="226" r="3" fill="#888"/>' +
      '</g>',
      sky("kv-s3", "#b6d8ee", "#f2e8d2"));
  }

  /* 4. Johnny Brenda's corner, Frankford & Girard, Fishtown */
  function kvjb() {
    return svg(
      '<rect width="400" height="260" fill="url(#kv-s4)"/>' +
      bricks(220, 70, 180, 120, "#7a5a8a".replace("#7a5a8a", "#7a4a3a"), "#663c2e") +
      /* corner building */
      bricks(40, 40, 200, 150, "#9a4e38", "#843e2c") +
      '<rect x="36" y="34" width="208" height="10" fill="#4a3a30"/>' +
      [56, 104, 152, 200].map(x => '<rect x="' + x + '" y="54" width="28" height="36" fill="#f3d27a" opacity=".85" stroke="#e8dcc4" stroke-width="2"/>').join("") +
      '<rect x="40" y="102" width="200" height="16" fill="#1a1a1a"/><text x="140" y="114" text-anchor="middle" ' + font + ' font-size="10" fill="' + SUN + '">LIVE MUSIC TONIGHT</text>' +
      '<rect x="48" y="122" width="70" height="56" fill="#f3d27a" opacity=".9" stroke="#2a2a2a" stroke-width="3"/><rect x="128" y="126" width="26" height="54" fill="#3a2418" stroke="#2a2a2a" stroke-width="2"/><rect x="164" y="122" width="70" height="56" fill="#f3d27a" opacity=".9" stroke="#2a2a2a" stroke-width="3"/>' +
      '<g class="kv-note"><text x="80" y="150" font-size="16" fill="#2a2a2a">&#9834;</text></g><g class="kv-note kv-n2"><text x="196" y="152" font-size="16" fill="#2a2a2a">&#9835;</text></g>' +
      [250, 300, 350].map(x => '<rect x="' + x + '" y="84" width="26" height="34" fill="#2c3440" stroke="#e8dcc4" stroke-width="2"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#55565a"/><rect x="0" y="186" width="400" height="6" fill="#9a968c"/>' +
      '<path d="M0 222h400M0 232h400" stroke="#b8b8b8" stroke-width="2.5"/>' +
      '<path d="M0 30h400" stroke="#2a2a2a" stroke-width="1.5"/>' +
      /* Girard Ave trolley: green and cream */
      '<g class="kv-trol" style="animation-delay:-5s"><rect x="0" y="182" width="150" height="44" rx="8" fill="#f2e8c8" stroke="#3a4a2a" stroke-width="2"/><rect x="0" y="206" width="150" height="20" rx="4" fill="#2f6a3a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (8 + i * 23) + '" y="188" width="17" height="14" rx="2" fill="#24302c"/>').join("") +
      '<path d="M75 182l-10 -152" stroke="#2a2a2a" stroke-width="2"/><circle cx="30" cy="228" r="6" fill="#222"/><circle cx="120" cy="228" r="6" fill="#222"/></g>',
      sky("kv-s4", "#203a6a", "#e88a5a"));
  }

  /* 5. N Lansdowne Ave & W Baltimore Ave, the Lansdowne Theater behind */
  function kvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kv-s5)"/>' +
      /* Lansdowne Theater: cream stucco, tiled tower, vertical blade sign and marquee */
      '<rect x="120" y="40" width="160" height="90" fill="#e8d6b0"/>' +
      '<rect x="176" y="10" width="48" height="44" fill="#e8d6b0"/><path d="M170 12l30 -12l30 12z" fill="#b5653a"/><path d="M118 42l20 -10h124l20 10z" fill="#b5653a"/>' +
      '<path d="M188 46v-22q12 -12 24 0v22z" fill="#5a3a2a"/>' +
      [136, 160, 228, 252].map(x => '<path d="M' + x + ' 76v-16q6 -8 12 0v16z" fill="#5a3a2a"/>').join("") +
      '<rect x="190" y="46" width="20" height="56" fill="#c8202e" stroke="' + SUN + '" stroke-width="2"/>' +
      'LANSDOWNE'.split("").map((c, i) => '<text x="200" y="' + (54 + i * 5.6) + '" text-anchor="middle" ' + font + ' font-size="6" fill="' + SUN + '">' + c + '</text>').join("") +
      '<rect x="140" y="100" width="120" height="14" fill="#1a1a1a"/>' + Array.from({ length: 12 }, (_, i) => '<g class="kv-blink' + (i % 2 ? ' kv-k2' : '') + '"><circle cx="' + (146 + i * 10) + '" cy="107" r="2" fill="' + SUN + '"/></g>').join("") +
      tree(70, 118, 2.6, "#4f7d3a") + tree(330, 116, 2.6, "#3f6e34") +
      /* wall with his tag */
      bricks(0, 122, 400, 90, "#7a6a5a", "#685a4c") +
      '<rect x="0" y="118" width="400" height="6" fill="#4a4036"/>' +
      tag("KURT VILE", 18, 182, 44, SUN, -6) + tag("VIOLATORS", 24, 206, 18, ORANGE, -3) + tag("PARK FOR FREE", 136, 207, 18, BLUE, -3) + tag("KV", 290, 200, 24, "#fff", -4) +
      '<rect x="0" y="212" width="400" height="48" fill="#5a5a5e"/><path d="M0 236h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="0" y="210" width="400" height="4" fill="#9a968c"/>' +
      '<g class="kv-trol" style="animation-duration:7s"><rect x="0" y="232" width="58" height="14" rx="5" fill="' + ORANGE + '"/><rect x="12" y="224" width="32" height="10" rx="3" fill="' + ORANGE + '"/><circle cx="12" cy="246" r="4" fill="#111"/><circle cx="46" cy="246" r="4" fill="#111"/></g>' +
      '<rect x="340" y="98" width="6" height="118" fill="#2f2f2f"/>' + sign(270, 100, 124, "N Lansdowne Ave") + sign(276, 126, 118, "W Baltimore Ave") +
      '<g class="kv-sp"><circle cx="252" cy="164" r="3" fill="' + SUN + '" opacity=".7"/></g><g class="kv-sp kv-sp2"><circle cx="258" cy="158" r="2" fill="' + SUN + '" opacity=".6"/></g>',
      sky("kv-s5", "#f2a06a", "#fde2a8"));
  }

  window.SCENES = { kvstation: kvstation, kvmural: kvmural, kvdock: kvdock, kvjb: kvjb, kvcorner: kvcorner };
})();
