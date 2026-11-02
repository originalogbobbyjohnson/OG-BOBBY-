/* Jamaica, Queens opening scenes for the Lloyd Banks game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}.neon2{animation-delay:1.2s}' +
    '@keyframes bus{from{transform:translateX(-150px)}to{transform:translateX(460px)}}' +
    '.bus{animation:bus 9s linear infinite}' +
    '@keyframes walk{0%{transform:translateX(0)}100%{transform:translateX(-420px)}}' +
    '.wlk{animation:walk 20s linear infinite}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(40px,150px) rotate(300deg)}}' +
    '.lf{transform-box:fill-box;transform-origin:50% 50%;animation:leaf 5s linear infinite}.lf2{animation-delay:-1.7s}.lf3{animation-delay:-3.4s}' +
    '@keyframes air{from{transform:translateX(-130px)}to{transform:translateX(470px)}}' +
    '.air{animation:air 7s linear infinite}' +
    '@keyframes rr{from{transform:translateX(420px)}to{transform:translateX(-360px)}}' +
    '.rr{animation:rr 11s linear infinite}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}' +
    '.blk{animation:blink 1.4s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#4aa8ff", GOLD = "#f2c14e", ACE = "#0039a6", JZ = "#996633";

  /* 1. E train pulling into Jamaica Center-Parsons/Archer, underground under Archer Av */
  function train() {
    let tiles = "";
    for (let y = 0; y < 176; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#c9cbc4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v176" stroke="#c9cbc4" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [22, 378].forEach(x => { cols += '<rect x="' + (x - 7) + '" y="0" width="14" height="186" fill="#26282e"/>'; });
    return svg(
      '<rect width="400" height="176" fill="#e2e4dd"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#1c1c20"/>' +
      '<rect class="flk" x="50" y="4" width="70" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="250" y="4" width="70" height="4" rx="2" fill="#fffbe6"/>' +
      '<rect x="0" y="22" width="400" height="10" fill="#2f5d9a"/><rect x="0" y="32" width="400" height="3" fill="#14284a"/>' +
      /* station sign */
      '<rect x="40" y="44" width="320" height="40" rx="4" fill="#111"/><rect x="40" y="44" width="320" height="4" fill="#fff"/>' +
      '<text x="52" y="63" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Jamaica Center</text>' +
      '<text x="52" y="78" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Parsons/Archer</text>' +
      bullet(284, 66, "E", ACE) + bullet(310, 66, "J", JZ) + bullet(336, 66, "Z", JZ) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + ACE + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(292, 132, "E", ACE) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#15171c"/>' + cols +
      tag("PLK", 40, 242, 34, GOLD, -5) + tag("BANKS", 262, 242, 34, BLUE, -8),
      "");
  }

  /* 2. The Jamaica Avenue shopping strip: storefronts and lit signs, shoppers walking, the bus rolling through */
  function avenue() {
    const shop = (x, w, wall, sign, word, awn) => {
      let o = '<rect x="' + x + '" y="40" width="' + w + '" height="150" fill="' + wall + '"/>';
      for (let r = 0; r < 2; r++) for (let c = 0; c < Math.floor(w / 24); c++) o += '<rect x="' + (x + 8 + c * 24) + '" y="' + (50 + r * 26) + '" width="14" height="18" fill="' + ((r + c) % 2 ? "#ffd98a" : "#2a2a36") + '"/>';
      o += '<rect x="' + (x + 4) + '" y="106" width="' + (w - 8) + '" height="20" rx="2" fill="#111"/>';
      o += '<text class="neon' + (x % 3 ? " neon2" : "") + '" x="' + (x + w / 2) + '" y="121" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="1.5" fill="' + sign + '">' + word + '</text>';
      let a = ''; for (let i = 0; i < w; i += 14) a += '<path d="M' + (x + i) + ' 128h14v14q-7 5-14 0z" fill="' + (i / 14 % 2 ? "#f4efe6" : awn) + '"/>';
      o += a + '<rect x="' + (x + 6) + '" y="146" width="' + (w - 12) + '" height="44" fill="#cfe6ff" opacity=".25"/>';
      return o;
    };
    const person = (x, c) => '<g><circle cx="' + x + '" cy="176" r="5" fill="#2a1a12"/><path d="M' + (x - 6) + ' 202v-16q0-6 6-6t6 6v16z" fill="' + c + '"/><rect x="' + (x - 5) + '" y="202" width="4" height="10" fill="#222"/><rect x="' + (x + 1) + '" y="202" width="4" height="10" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) +
      shop(0, 100, "#5a4a6a", GOLD, "GOLD", "#c91f2e") + shop(100, 100, "#7a5a3a", BLUE, "SNEAKERS", "#2f5d9a") +
      shop(200, 100, "#4a5a6a", "#ff7a6b", "FASHION", "#1f7a3a") + shop(300, 100, "#6a4a4a", "#7fe0c4", "MUSIC", "#e0a52c") +
      '<rect x="0" y="190" width="400" height="22" fill="#8a8a86"/><rect x="0" y="190" width="400" height="3" fill="#b0b0aa"/>' +
      '<g class="wlk">' + [0, 420].map(o => person(o + 40, "#c91f2e") + person(o + 130, BLUE) + person(o + 250, GOLD) + person(o + 340, "#1f7a3a")).join("") + '</g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#1d1f24"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* city bus */
      '<g class="bus"><rect x="0" y="206" width="130" height="40" rx="5" fill="#e8ecef" stroke="#555" stroke-width="1.5"/>' +
        '<rect x="0" y="232" width="130" height="5" fill="#2f5d9a"/>' +
        '<rect x="8" y="212" width="18" height="14" fill="#2a3a4a"/><rect x="30" y="212" width="18" height="14" fill="#2a3a4a"/><rect x="52" y="212" width="18" height="14" fill="#2a3a4a"/><rect x="74" y="212" width="18" height="14" fill="#2a3a4a"/><rect x="104" y="212" width="22" height="20" fill="#2a3a4a"/>' +
        '<rect x="98" y="208" width="30" height="4" fill="#ffb347"/>' +
        '<circle cx="26" cy="248" r="7" fill="#111"/><circle cx="106" cy="248" r="7" fill="#111"/></g>' +
      '<rect x="120" y="12" width="160" height="22" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="28" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Jamaica Av</text>',
      sky("g2", "#0b1430", "#3a3f6a"));
  }

  /* 3. King Manor in Rufus King Park: the white clapboard colonial house with its gambrel roof, leaves drifting down */
  function manor() {
    let clap = '';
    for (let y = 120; y < 196; y += 6) clap += '<path d="M90 ' + y + 'h220" stroke="#d8d6ce" stroke-width="1"/>';
    let wins = '';
    [112, 152, 236, 276].forEach(x => {
      [128, 162].forEach(y => { wins += '<rect x="' + (x - 6) + '" y="' + y + '" width="5" height="22" fill="#24412e"/><rect x="' + x + '" y="' + y + '" width="14" height="22" fill="#2e3a48" stroke="#fff" stroke-width="1.5"/><path d="M' + (x + 7) + ' ' + y + 'v22M' + x + ' ' + (y + 11) + 'h14" stroke="#fff" stroke-width="1"/><rect x="' + (x + 15) + '" y="' + y + '" width="5" height="22" fill="#24412e"/>'; });
    });
    let fence = '';
    for (let x = 4; x < 400; x += 12) fence += '<rect x="' + x + '" y="214" width="3" height="26" fill="#111"/><path d="M' + (x - 1.5) + ' 216l3-6 3 6z" fill="#111"/>';
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (212 - y) + '" fill="#3b2418"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r / 2) + '" cy="' + (y + 8) + '" r="' + (r * 0.7) + '" fill="' + c + '"/>';
    const leaf = (x, y, c, k) => '<path class="lf ' + k + '" d="M' + x + ' ' + y + 'q5-5 10 0q-5 5-10 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f6a32"/>' +
      tree(34, 120, 34, "#2f5a2a") + tree(370, 112, 36, "#356a2e") +
      /* gambrel roof */
      '<path d="M82 118l18-40h200l18 40z" fill="#4a4a50"/><path d="M100 78l30-18h140l30 18z" fill="#5a5a62"/>' +
      '<rect x="140" y="44" width="12" height="20" fill="#7a3a2a"/><rect x="250" y="44" width="12" height="20" fill="#7a3a2a"/>' +
      '<rect x="146" y="84" width="22" height="22" fill="#f6f4ee"/><rect x="232" y="84" width="22" height="22" fill="#f6f4ee"/><rect x="151" y="89" width="12" height="14" fill="#2e3a48"/><rect x="237" y="89" width="12" height="14" fill="#2e3a48"/>' +
      /* white clapboard body */
      '<rect x="90" y="118" width="220" height="78" fill="#f6f4ee"/>' + clap + wins +
      /* porch with columns and door */
      '<path d="M176 142h48l-24-14z" fill="#f6f4ee" stroke="#c9c6bc" stroke-width="1.5"/>' +
      '<rect x="176" y="142" width="48" height="4" fill="#e0ddd4"/>' +
      '<rect x="180" y="146" width="4" height="50" fill="#fff"/><rect x="216" y="146" width="4" height="50" fill="#fff"/>' +
      '<rect x="191" y="156" width="18" height="40" fill="#24412e"/><circle cx="205" cy="177" r="1.4" fill="' + GOLD + '"/>' +
      '<rect x="170" y="196" width="60" height="5" fill="#bdb9ae"/><rect x="164" y="201" width="72" height="5" fill="#a9a59a"/>' +
      leaf(60, 60, "#e0a52c", "") + leaf(320, 40, "#c94a2a", "lf2") + leaf(200, 20, "#e0a52c", "lf3") + leaf(110, 30, "#c94a2a", "lf2") +
      fence + '<rect x="0" y="212" width="400" height="3" fill="#111"/>' +
      '<rect x="134" y="226" width="132" height="22" rx="3" fill="#1f5a32" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="200" y="241" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Rufus King Park</text>',
      sky("g3", "#5a8ac0", "#f0c890"));
  }

  /* 4. Prospect Cemetery at 159th St and Beaver Rd (1668): Queens' oldest burying ground, the little Chapel of the Sisters, old slate stones, leaves coming down, the LIRR going by behind */
  function station() {
    const lbl = (x, y, s, size, c) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" fill="' + c + '">' + s + '</text>';
    let stones = ""; [[30, 206, -4], [64, 214, 3], [96, 202, -2], [292, 210, 4], [326, 200, -3], [360, 214, 2], [126, 222, 5], [270, 224, -5]].forEach(([x, y, r]) =>
      stones += '<g transform="rotate(' + r + ' ' + x + ' ' + y + ')"><path d="M' + (x - 8) + ' ' + y + 'v-18q8-10 16 0v18z" fill="#5a6068"/><path d="M' + (x - 5) + ' ' + (y - 12) + 'h10" stroke="#454a52" stroke-width="1"/></g>');
    let fence = ""; for (let x = 0; x <= 400; x += 8) fence += '<path d="M' + x + ' 248v-22" stroke="#1b1b22" stroke-width="2"/>';
    let leaves = ""; [50, 140, 250, 330].forEach((x, i) => leaves += '<path class="lf' + (i % 3 ? ' lf' + (i % 3 + 1) : '') + '" d="M' + x + ' 30q5-6 10 0-5 6-10 0z" fill="' + ["#d0702a", GOLD, "#a8402a", "#d08a2a"][i] + '"/>');
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (212 - y) + '" fill="#3b2418"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + 8) + '" r="' + r * .7 + '" fill="' + c + '"/>';
    let win = ""; for (let x = 10; x < 260; x += 36) win += '<rect x="' + x + '" y="98" width="22" height="9" rx="2" fill="#dfeaf5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* the LIRR embankment behind */
      '<rect x="0" y="112" width="400" height="10" fill="#6a6a62"/><g class="rr"><rect x="0" y="92" width="300" height="20" rx="4" fill="#cfd5dc" stroke="#6b7280"/><rect x="0" y="106" width="300" height="3" fill="' + ACE + '"/>' + win + '</g>' +
      '<rect x="0" y="122" width="400" height="138" fill="#5a8a3a"/>' +
      tree(40, 120, 30, "#b8682a") + tree(366, 116, 32, "#c8902a") +
      /* the Chapel of the Sisters: small brownstone chapel, steep roof, bell gable, pointed windows */
      '<rect x="150" y="128" width="100" height="72" fill="#8a5a46"/><path d="M142 130l58-46 58 46z" fill="#3e3a3a"/>' +
      '<rect x="192" y="66" width="16" height="22" fill="#8a5a46"/><path d="M188 68l12-12 12 12z" fill="#3e3a3a"/><path class="blk" d="M196 72h8v10h-8z" fill="#2a1a10"/>' +
      '<path d="M188 200v-30q12-16 24 0v30z" fill="#3a2418"/>' + [162, 230].map(x => '<path d="M' + x + ' 182v-26q6-10 12 0v26z" fill="#ffd98a" class="flk"/>').join("") +
      '<circle cx="200" cy="148" r="8" fill="#2a3a5a" stroke="#c9b28a" stroke-width="2"/>' +
      stones + leaves +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4a4a"/>' + fence + '<path d="M0 230h400" stroke="#1b1b22" stroke-width="2"/>' +
      lbl(200, 22, "PROSPECT CEMETERY · 1668", 14, "#1b2430") + lbl(200, 36, "CHAPEL OF THE SISTERS · 159TH ST &amp; BEAVER RD", 8, "#1b2430"),
      sky("g4", "#9ec8ea", "#f2dcb8"));
  }

  /* 5. Parsons Blvd and Archer Av: street signs, the subway entrance globe, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3f4a"/>' +
      '<path d="M20 110h230M20 150h230M20 190h230" stroke="#33373f" stroke-width="2"/>' +
      tag("LLOYD BANKS", 30, 140, 30, BLUE, -7) + tag("HUNGER FOR MORE", 36, 196, 20, GOLD, -3) +
      '<rect x="262" y="150" width="4" height="70" fill="#1d2329"/><circle class="flk" cx="264" cy="146" r="7" fill="#3fbf5a"/>' +
      '<rect x="320" y="56" width="5" height="164" fill="#1d2329"/><path d="M322 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M338 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M338 70l26 0 30 150h-90z" fill="#ffe7a8"/></g>' +
      '<rect x="278" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="322" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Parsons Blvd</text>' +
      '<rect x="282" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="322" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Archer Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0a1430", "#2a3a60"));
  }

  window.SCENES = { train, avenue, manor, station, corner };
})();
