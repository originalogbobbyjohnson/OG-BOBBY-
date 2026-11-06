/* Reflection Eternal game (OG FAN 99 GROUP, Brooklyn: Prospect Heights). Talib Kweli (Brooklyn) and DJ Hi-Tek (Cincinnati).
   1. The 2 pulling into Eastern Pkwy-Brooklyn Museum, underground on the IRT: cream tile, the black sign with the 2 and 3.
   2. Fountain Square, Cincinnati (Hi-Tek's city, where the two of them linked up through Mood): the bronze Tyler Davidson Fountain, water arcing.
   3. The Highline Ballroom on W 16th St (Jan 22, 2010: the Revolutions Per Minute run): the stage, the decks spinning, the crowd.
   4. Brooklyn Bowl Las Vegas (Jan 2016, Talib and Hi-Tek live): bowling lanes running up to the stage, a ball rolling, pins flying.
   5. 6 Av & Dean St, Prospect Heights: green signs, the wall tagged REFLECTION ETERNAL, the old Daily News plant (the Newswalk) behind.
   400 x 260 SVGs, classes prefixed re-. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes recar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.re-car{animation:recar 7s linear infinite}.re-car2{animation-delay:-3.5s}' +
    '@keyframes reblink{0%,100%{opacity:.25}50%{opacity:1}}.re-bl{animation:reblink 1.7s ease-in-out infinite}.re-bl2{animation-delay:.55s}.re-bl3{animation-delay:1.1s}' +
    '@keyframes reflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.re-flk{animation:reflick 2.6s infinite}' +
    '@keyframes respray{0%{opacity:0;transform:translateY(6px)}30%{opacity:.9}100%{opacity:0;transform:translateY(-4px)}}.re-spr{animation:respray 1.4s ease-out infinite}.re-spr2{animation-delay:.45s}.re-spr3{animation-delay:.9s}' +
    '@keyframes redrop{from{transform:translateY(0);opacity:.9}to{transform:translateY(34px);opacity:0}}.re-drop{animation:redrop 1.1s linear infinite}.re-drop2{animation-delay:.35s}.re-drop3{animation-delay:.7s}' +
    '@keyframes respin{to{transform:rotate(360deg)}}.re-spin{transform-box:fill-box;transform-origin:50% 50%;animation:respin 1.3s linear infinite}.re-spin2{animation-duration:.9s}' +
    '@keyframes resweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.re-beam{transform-box:fill-box;transform-origin:50% 0%;animation:resweep 3.2s ease-in-out infinite}.re-beam2{animation-delay:-1.6s}' +
    '@keyframes rebob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.re-bob{animation:rebob .55s ease-in-out infinite}.re-bob2{animation-delay:.27s}' +
    '@keyframes reroll{0%{transform:translate(0,0) scale(1)}100%{transform:translate(0,-118px) scale(.45)}}.re-ball{transform-box:fill-box;transform-origin:50% 50%;animation:reroll 2.4s ease-in infinite}' +
    '@keyframes repin{0%,80%{transform:rotate(0)}100%{transform:rotate(40deg) translateY(-6px)}}.re-pin{transform-box:fill-box;transform-origin:50% 100%;animation:repin 2.4s ease-in infinite}.re-pin2{animation-name:repin2}' +
    '@keyframes repin2{0%,80%{transform:rotate(0)}100%{transform:rotate(-40deg) translateY(-6px)}}' +
    '@keyframes remeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.re-mt{transform-box:fill-box;transform-origin:50% 100%;animation:remeter .6s ease-in-out infinite}.re-mt2{animation-delay:.2s}.re-mt3{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, l, c, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + l + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (6 + (i * 53) % 54) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const crowd = (y, n, cols) => { let g = ""; for (let i = 0; i < n; i++) { const x = 8 + i * (384 / (n - 1)); g += '<g class="re-bob' + (i % 2 ? " re-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y + (i % 3) * 3) + '" r="7" fill="' + cols[i % cols.length] + '"/><rect x="' + (x - 8) + '" y="' + (y + 8 + (i % 3) * 3) + '" width="16" height="30" rx="6" fill="' + cols[i % cols.length] + '"/></g>'; } return g; };
  const TEAL = "#7fd1b9", GOLD = "#e9b44c", RED = "#ee352e", CREAM = "#f4ead8", SIGN = "#0f6b3a";

  /* 1. Eastern Pkwy-Brooklyn Museum (2/3), underground: cream tile, a blue-and-gold mosaic band, the black sign, the 2 sliding in */
  function restation() {
    let tiles = "";
    for (let y = 30; y < 158; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe9da"/>';
    let band = "";
    for (let x = 0; x < 400; x += 20) band += '<path d="M' + x + ' 46l10 -8l10 8l-10 8z" fill="' + (x % 40 ? GOLD : "#2b5a9a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d6ccb6"/>' + tiles +
      '<rect x="0" y="36" width="400" height="20" fill="#7a4a2a"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2b2b2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="re-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="22" y="64" width="356" height="34" rx="3" fill="#111"/><rect x="22" y="64" width="356" height="3" fill="#fff"/>' +
      '<text x="34" y="87" ' + font + ' font-size="13.5" fill="#fff">Eastern Pkwy-Brooklyn Museum</text>' +
      bullet(328, 81, "2", RED) + bullet(354, 81, "3", RED) +
      [14, 386].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="132" fill="#2d5a3d"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="104" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="112" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 149, "2", RED) +
        '<rect x="10" y="142" width="280" height="4" fill="' + RED + '"/>' +
        '<circle cx="22" cy="154" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="162" width="400" height="10" fill="#eab308"/><rect x="0" y="172" width="400" height="88" fill="#5d5a55"/>' +
      '<rect x="0" y="172" width="400" height="3" fill="#3b3935"/>' +
      person(330, 196, "#1b1b1b") + person(352, 200, "#2a2a2a") + person(60, 200, "#242424") +
      txt("PROSPECT HEIGHTS · BROOKLYN", 190, 238, 11, CREAM, 'letter-spacing="3"'));
  }

  /* 2. Fountain Square, Cincinnati: the Tyler Davidson Fountain, a dark-green bronze figure with arms out raining water, granite basin, downtown towers at dusk */
  function refountain() {
    const tower = (x, w, h, c) => { let g = '<rect x="' + x + '" y="' + (196 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
      for (let yy = 204 - h; yy < 186; yy += 12) for (let xx = x + 5; xx < x + w - 6; xx += 10) g += '<rect class="re-bl re-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="7" fill="#ffd98a" opacity=".7"/>'; return g; };
    const drops = [[-28, 0], [-20, 1], [20, 2], [28, 0], [-6, 1], [6, 2]].map(([dx, k]) => '<path class="re-drop re-drop' + (k + 1) + '" d="M' + (200 + dx) + ' 120v10" stroke="#bfe6ff" stroke-width="2" stroke-linecap="round"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rf)"/>' + stars(8) +
      tower(0, 60, 120, "#3a3f52") + tower(64, 46, 150, "#2f3446") + tower(300, 56, 136, "#363b4e") + tower(352, 48, 104, "#2c3142") +
      '<path d="M120 196V96l18 -10v110zM262 196V100l16 -8v104z" fill="#454a5e"/>' +
      /* plaza */
      '<rect x="0" y="196" width="400" height="64" fill="#8d8a84"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 26) g += '<path d="M' + x + ' 196l-14 64" stroke="#7a7771" stroke-width="1"/>'; return g; })() +
      /* basin */
      '<ellipse cx="200" cy="214" rx="120" ry="18" fill="#6e6b66"/><ellipse cx="200" cy="210" rx="112" ry="13" fill="#5ea3c8"/>' +
      '<ellipse cx="200" cy="210" rx="112" ry="13" fill="none" stroke="#cfe9f7" stroke-width="1" opacity=".6"/>' +
      /* pedestal (granite, stepped) */
      '<path d="M176 210l6 -40h36l6 40z" fill="#9a958c"/><rect x="170" y="166" width="60" height="8" fill="#8a857c"/>' +
      '<rect x="184" y="140" width="32" height="28" fill="#2f5b47"/>' +
      [188, 200, 212].map(x => '<circle cx="' + x + '" cy="154" r="4" fill="#3f7a5f"/>').join("") +
      /* the figure: green bronze, arms stretched out, water falling from the hands */
      '<g fill="#3f7a5f"><circle cx="200" cy="100" r="7"/><path d="M193 108h14l4 34h-22z"/><path d="M194 112l-30 8l1 4l30 -6z"/><path d="M206 112l30 8l-1 4l-30 -6z"/></g>' +
      '<path d="M163 122q-8 20 -8 46M237 122q8 20 8 46" stroke="#bfe6ff" stroke-width="2" fill="none" opacity=".8"/>' +
      drops +
      /* side spouts */
      [130, 270].map(x => '<path class="re-spr" d="M' + x + ' 206q' + (x < 200 ? 18 : -18) + ' -26 ' + (x < 200 ? 36 : -36) + ' -4" stroke="#bfe6ff" stroke-width="2" fill="none"/>').join("") +
      person(52, 220, "#1b1b22") + person(74, 224, "#22222a", "re-bob") + person(340, 222, "#1b1b22") +
      txt("FOUNTAIN SQUARE · CINCINNATI", 200, 250, 11, CREAM, 'letter-spacing="2"') +
      txt("HI-TEK'S CITY", 200, 30, 13, GOLD, 'letter-spacing="3"'),
      sky("rf", "#1a1f3a", "#c86f4a"));
  }

  /* 3. The Highline Ballroom, W 16th St: the long dark room, the stage lit up, the decks spinning, the mic up front, the crowd's hands */
  function reballroom() {
    return svg(
      '<rect width="400" height="260" fill="url(#rb)"/>' +
      '<g class="re-beam"><path d="M110 22l-46 170h92z" fill="' + TEAL + '" opacity=".14"/></g><g class="re-beam re-beam2"><path d="M290 22l-46 170h92z" fill="' + GOLD + '" opacity=".14"/></g>' +
      '<rect x="20" y="16" width="360" height="8" fill="#2e2e36"/>' + [40, 100, 160, 240, 300, 360].map((x, i) => '<circle class="re-bl re-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="28" r="5" fill="' + [TEAL, GOLD, "#e4572e"][i % 3] + '"/>').join("") +
      /* the screen behind: a spinning record, RPM */
      '<rect x="120" y="40" width="160" height="74" rx="3" fill="#101418" stroke="#333" stroke-width="2"/>' +
      '<g class="re-spin"><circle cx="160" cy="77" r="28" fill="#111" stroke="#444"/><circle cx="160" cy="77" r="18" fill="none" stroke="#2a2a2a"/><circle cx="160" cy="77" r="9" fill="' + GOLD + '"/><rect x="159" y="49" width="2" height="8" fill="#777"/></g>' +
      txt("RPM", 230, 72, 22, TEAL) + txt("2010", 230, 94, 12, CREAM, 'letter-spacing="3"') +
      /* stage */
      '<rect x="20" y="150" width="360" height="20" fill="#26262e"/><rect x="20" y="146" width="360" height="5" fill="' + GOLD + '"/>' +
      '<rect x="230" y="118" width="96" height="30" fill="#1a1a20" stroke="#555" stroke-width="2"/>' +
      '<g class="re-spin"><circle cx="252" cy="126" r="9" fill="#111" stroke="#666"/><circle cx="252" cy="126" r="3" fill="' + TEAL + '"/></g>' +
      '<g class="re-spin re-spin2"><circle cx="304" cy="126" r="9" fill="#111" stroke="#666"/><circle cx="304" cy="126" r="3" fill="' + GOLD + '"/></g>' +
      /* the DJ behind the decks, the MC at the front mic (silhouettes) */
      '<g fill="#0b0b0f"><circle cx="278" cy="98" r="8"/><rect x="268" y="106" width="20" height="14" rx="6"/></g>' +
      '<g fill="#0b0b0f"><circle cx="112" cy="104" r="9"/><rect x="102" y="114" width="20" height="34" rx="7"/><path d="M122 120l12 -10" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g>' +
      '<path d="M146 146v-30" stroke="#888" stroke-width="2"/><circle cx="146" cy="114" r="3" fill="#aaa"/>' +
      crowd(196, 17, ["#0d0d12", "#15151c"]) +
      txt("HIGHLINE BALLROOM · W 16 ST", 200, 186, 10, CREAM, 'letter-spacing="2" opacity=".85"'),
      sky("rb", "#07070c", "#1e1530"));
  }

  /* 4. Brooklyn Bowl Las Vegas: the lanes running up to the stage, a ball rolling, pins falling, lights over the stage */
  function rebowl() {
    let lanes = "";
    for (let i = 0; i < 5; i++) { const x0 = 40 + i * 70, x1 = 150 + i * 25; lanes += '<path d="M' + x0 + ' 260L' + x1 + ' 132h22L' + (x0 + 62) + ' 260z" fill="' + (i % 2 ? "#c9955a" : "#d6a466") + '"/>'; }
    let gutters = ""; for (let i = 0; i <= 5; i++) gutters += '<path d="M' + (36 + i * 70) + ' 260L' + (148 + i * 25) + ' 132" stroke="#2a1a10" stroke-width="3"/>';
    const pins = (cx, cls) => [0, 6, -6, 12, 0, -12].map((dx, k) => '<g class="re-pin' + (cls && k % 2 ? " re-pin2" : "") + '"><rect x="' + (cx + dx - 2) + '" y="' + (120 - (k > 2 ? 4 : 0) - (k > 0 ? 2 : 0)) + '" width="4" height="10" rx="2" fill="#fff"/><rect x="' + (cx + dx - 2) + '" y="' + (123 - (k > 2 ? 4 : 0) - (k > 0 ? 2 : 0)) + '" width="4" height="1.5" fill="#e4572e"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rw)"/>' +
      /* stage at the far end */
      '<rect x="110" y="40" width="180" height="70" fill="#14121c" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<g class="re-beam"><path d="M150 40l-24 70h48z" fill="' + TEAL + '" opacity=".18"/></g><g class="re-beam re-beam2"><path d="M250 40l-24 70h48z" fill="' + GOLD + '" opacity=".18"/></g>' +
      '<g fill="#050507"><circle cx="170" cy="78" r="6"/><rect x="163" y="85" width="14" height="22" rx="5"/><circle cx="232" cy="80" r="6"/><rect x="220" y="90" width="26" height="12" fill="#1a1a20"/></g>' +
      txt("LIVE TONIGHT · KWELI + HI-TEK", 200, 54, 8, CREAM, 'letter-spacing="1"') +
      [118, 146, 174, 202, 230, 258, 282].map((x, i) => '<circle class="re-bl re-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="34" r="3.5" fill="' + [GOLD, TEAL, "#e4572e"][i % 3] + '"/>').join("") +
      '<rect x="0" y="110" width="400" height="24" fill="#2b1d16"/>' +
      lanes + gutters +
      pins(161) + pins(211, true) + pins(261) +
      '<circle class="re-ball" cx="228" cy="246" r="12" fill="#2b5a9a"/>' +
      '<circle cx="40" cy="40" r="0"/>' +
      txt("BROOKLYN BOWL · LAS VEGAS · 2016", 200, 24, 10, GOLD, 'letter-spacing="2"'),
      sky("rw", "#09070f", "#2a1830"));
  }

  /* 5. 6 Av & Dean St: green signs, the wall tagged REFLECTION ETERNAL, the red-brick Newswalk (the old Daily News plant) behind */
  function recorner() {
    let plant = '<rect x="10" y="40" width="300" height="100" fill="#8a3f2c"/><rect x="10" y="34" width="300" height="8" fill="#5f2a1d"/>';
    for (let y = 50; y < 134; y += 20) for (let x = 20; x < 300; x += 22) plant += '<rect class="re-bl re-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rc)"/>' + stars(14) +
      plant + txt("THE NEWSWALK", 160, 30, 9, CREAM, 'letter-spacing="3" opacity=".8"') +
      '<path d="M310 140V70h40v70z" fill="#5c4a3e"/>' +
      '<rect x="0" y="128" width="400" height="98" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("REFLECTION", 12, 182, 38, TEAL, -5) + tag("ETERNAL", 40, 216, 34, GOLD, -4) + tag("RPM", 236, 214, 22, "#e4572e", -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="re-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("6 Av", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Dean St", 348, 108, 12, "#fff") +
      '<circle class="re-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("rc", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { restation: restation, refountain: refountain, reballroom: reballroom, rebowl: rebowl, recorner: recorner };
})();
