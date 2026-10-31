/* Harlem opening scenes for the Kurtis Blow game: he grew up at 140th and Amsterdam, went to City College, made "Basketball",
   preaches at the Hip Hop Church. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 7s linear infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}' +
    '.bnc{animation:bounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.6s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:left;animation:wave 1.8s ease-in-out infinite}' +
    '@keyframes bird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,4px)}}' +
    '.bird{animation:bird 9s linear infinite}.bird2{animation-delay:-4s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-50px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.hop{animation:hop .7s ease-in-out infinite}.hop2{animation-delay:-.35s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c14e", RED = "#e63946", BLUE = "#3a86ff", ONE = "#ee352e";
  const boombox = (x, y, s) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="0" y="0" width="90" height="46" rx="6" fill="#1b1b1b" stroke="#888" stroke-width="2"/>' +
    '<circle cx="22" cy="26" r="14" fill="#333" stroke="#aaa" stroke-width="2"/><circle cx="68" cy="26" r="14" fill="#333" stroke="#aaa" stroke-width="2"/>' +
    '<rect x="38" y="8" width="14" height="8" fill="' + GOLD + '"/><path d="M20 0 q25 -16 50 0" stroke="#888" stroke-width="3" fill="none"/></g>';

  /* 1. The 1 train pulling into 137 St–City College, underground, white tile and the red 1 */
  function train() {
    let tiles = "";
    for (let y = 0; y < 118; y += 12) for (let x = (y / 12) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="11" fill="#eeeae0"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let cols = "";
    for (let x = 30; x < 400; x += 110) cols += '<rect x="' + x + '" y="0" width="10" height="118" fill="#2c4a7a"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc9bb"/>' + tiles +
      /* mosaic band */
      '<rect x="0" y="58" width="400" height="8" fill="#7a3b2a"/><rect x="0" y="66" width="400" height="3" fill="' + GOLD + '"/>' + cols +
      '<rect x="80" y="18" width="250" height="34" rx="4" fill="#111"/><rect x="80" y="18" width="250" height="4" fill="#fff"/>' +
      '<text x="92" y="42" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">137 St–City College</text>' +
      bullet(310, 36, "1", ONE) +
      '<rect x="0" y="110" width="400" height="80" fill="#1a1a1a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + ONE + '"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' + bullet(296, 136, "1", ONE) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4740"/>' +
      tag("THE BREAKS", 24, 238, 30, GOLD, -4) + tag("KB", 320, 240, 34, RED, -8));
  }

  /* 2. City College's Shepard Hall: dark Manhattan schist, white terra-cotta gothic trim, flag on top */
  function ccny() {
    let wins = "";
    for (let x = 104; x < 290; x += 26) wins += '<path d="M' + x + ' 186v-34q8-12 16 0v34z" fill="#f2d98a" opacity=".85" class="' + (x % 60 ? "flk" : "flk flk2") + '"/>' +
      '<path d="M' + (x - 2) + ' 186v-34q10-16 20 0v34" fill="none" stroke="#f4f1ea" stroke-width="2"/>';
    let pin = "";
    for (let x = 84; x <= 316; x += 29) pin += '<path d="M' + x + ' 136l4-14 4 14z" fill="#f4f1ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="40" cy="40" rx="34" ry="9" fill="#fff" opacity=".7"/></g><g class="cld cld2"><ellipse cx="40" cy="62" rx="26" ry="7" fill="#fff" opacity=".6"/></g>' +
      /* main hall */
      '<rect x="80" y="136" width="240" height="70" fill="#3b3a3e"/><rect x="80" y="136" width="240" height="5" fill="#f4f1ea"/>' + pin + wins +
      /* central tower */
      '<rect x="172" y="56" width="56" height="84" fill="#36353a"/><rect x="172" y="56" width="56" height="4" fill="#f4f1ea"/>' +
      '<path d="M172 56l6-18 6 18M222 56l-6-18-6 18" fill="#f4f1ea"/><path d="M184 128v-46q16-22 32 0v46z" fill="#f2d98a" opacity=".9"/>' +
      '<path d="M200 82v46M184 104h32" stroke="#3b3a3e" stroke-width="2"/><path d="M182 128v-46q18-26 36 0v46" fill="none" stroke="#f4f1ea" stroke-width="2.5"/>' +
      /* side towers */
      '<rect x="64" y="110" width="28" height="96" fill="#2f2e33"/><path d="M64 110l14-16 14 16z" fill="#f4f1ea"/><rect x="308" y="110" width="28" height="96" fill="#2f2e33"/><path d="M308 110l14-16 14 16z" fill="#f4f1ea"/>' +
      /* flag */
      '<rect x="199" y="14" width="2" height="26" fill="#ddd"/><g class="flag"><rect x="201" y="14" width="22" height="12" fill="#6a2c91"/><rect x="201" y="24" width="22" height="2" fill="' + GOLD + '"/></g>' +
      /* lawn + steps + sidewalk */
      '<rect x="0" y="206" width="400" height="24" fill="#3f6b34"/><rect x="176" y="200" width="48" height="30" fill="#a9a59c"/><path d="M176 210h48M176 220h48" stroke="#8a867d"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#5a5a5e"/>' +
      '<g class="bird"><path d="M0 70q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g><g class="bird bird2"><path d="M0 50q4-4 8 0q4-4 8 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<rect x="8" y="238" width="104" height="16" rx="2" fill="#111" opacity=".8"/><text x="60" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#fff">CITY COLLEGE</text>',
      sky("g2", "#6fa8dc", "#d8ecf8"));
  }

  /* 3. Rucker Park, 155th St: blue court, orange hoop, the ball bouncing, chain-link and the bleachers */
  function rucker() {
    let fence = "";
    for (let x = 0; x < 400; x += 12) fence += '<path d="M' + x + ' 70l12 12M' + (x + 12) + ' 70l-12 12M' + x + ' 82l12 12M' + (x + 12) + ' 82l-12 12M' + x + ' 94l12 12M' + (x + 12) + ' 94l-12 12" stroke="#9aa3ad" stroke-width="1" opacity=".7"/>';
    let fans = "";
    const fc = [RED, GOLD, BLUE, "#fff", "#2ec27e"];
    for (let i = 0; i < 18; i++) fans += '<g class="hop' + (i % 2 ? " hop2" : "") + '"><circle cx="' + (12 + i * 22) + '" cy="' + (114 + (i % 2) * 8) + '" r="5" fill="#3a2a22"/><rect x="' + (7 + i * 22) + '" y="' + (119 + (i % 2) * 8) + '" width="10" height="12" rx="3" fill="' + fc[i % 5] + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* Polo Grounds towers behind */
      '<rect x="20" y="20" width="44" height="60" fill="#8a5a48"/><rect x="80" y="10" width="44" height="70" fill="#7a4e3e"/><rect x="290" y="16" width="44" height="64" fill="#8a5a48"/><rect x="346" y="26" width="44" height="54" fill="#7a4e3e"/>' +
      '<rect x="0" y="68" width="400" height="2" fill="#6b7480"/>' + fence +
      /* bleachers */
      '<rect x="0" y="108" width="400" height="34" fill="#5a6470"/><path d="M0 118h400M0 130h400" stroke="#3e4650"/>' + fans +
      /* court */
      '<rect x="0" y="142" width="400" height="118" fill="#2a5db0"/><rect x="0" y="142" width="400" height="118" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<path d="M130 260q0-70 70-70q70 0 70 70" fill="none" stroke="#fff" stroke-width="3"/><rect x="170" y="190" width="60" height="70" fill="#c0392b" opacity=".85" stroke="#fff" stroke-width="3"/>' +
      /* hoop */
      '<rect x="196" y="60" width="8" height="132" fill="#3a3f46"/><rect x="170" y="56" width="60" height="40" fill="#f4f4f4" stroke="#3a3f46" stroke-width="3"/><rect x="188" y="72" width="24" height="18" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="200" cy="98" rx="14" ry="3" fill="none" stroke="#ff7a1a" stroke-width="3"/><path d="M188 99l4 14h16l4-14M194 99l2 14M206 99l-2 14" stroke="#fff" stroke-width="1" fill="none"/>' +
      /* bouncing ball */
      '<g class="bnc"><circle cx="292" cy="236" r="12" fill="#e8742a" stroke="#6a2a0a" stroke-width="1.5"/><path d="M280 236h24M292 224v24M284 227q8 9 0 18M300 227q-8 9 0 18" stroke="#6a2a0a" stroke-width="1.3" fill="none"/></g>' +
      '<rect x="8" y="148" width="100" height="16" rx="2" fill="#111" opacity=".8"/><text x="58" y="160" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="' + GOLD + '">BASKETBALL</text>',
      sky("g3", "#f6a35c", "#ffe0b0"));
  }

  /* 4. Riverside Church: pale limestone gothic tower, bells swinging in the belfry, Sunday light */
  function church() {
    let rose = "";
    for (let a = 0; a < 360; a += 45) rose += '<path d="M200 168L' + (200 + 16 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (168 + 16 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" stroke="#5a4a2a" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(10) +
      /* tower */
      '<rect x="160" y="34" width="80" height="190" fill="#d9cfb8"/><rect x="152" y="70" width="8" height="154" fill="#c9bea4"/><rect x="240" y="70" width="8" height="154" fill="#c9bea4"/>' +
      '<path d="M160 34l6-16 6 16M228 34l6-16 6 16M190 34l10-22 10 22" fill="#d9cfb8"/>' +
      /* belfry openings + bells */
      '<path d="M172 96v-34q12-16 24 0v34z" fill="#3a2a1a"/><path d="M204 96v-34q12-16 24 0v34z" fill="#3a2a1a"/>' +
      '<g class="bell"><path d="M178 70q6-6 12 0l3 16h-18z" fill="' + GOLD + '"/><circle cx="184" cy="88" r="2" fill="#7a5512"/></g>' +
      '<g class="bell" style="animation-delay:-.8s"><path d="M210 70q6-6 12 0l3 16h-18z" fill="' + GOLD + '"/><circle cx="216" cy="88" r="2" fill="#7a5512"/></g>' +
      '<path d="M176 140v-24q24-28 48 0v24" fill="none" stroke="#b8ac90" stroke-width="2"/>' +
      '<circle cx="200" cy="168" r="18" fill="#3c5a9a" stroke="#b8ac90" stroke-width="3"/>' + rose + '<circle cx="200" cy="168" r="5" fill="' + RED + '"/>' +
      '<path d="M184 224v-28q16-20 32 0v28z" fill="#5a3a22"/>' +
      /* nave each side */
      '<rect x="40" y="150" width="112" height="74" fill="#cfc4aa"/><rect x="248" y="150" width="112" height="74" fill="#cfc4aa"/>' +
      (function () { let w = ""; for (let x = 56; x < 150; x += 30) w += '<path d="M' + x + ' 210v-36q7-10 14 0v36z" fill="#f2d98a" class="flk"/>'; for (let x = 262; x < 360; x += 30) w += '<path d="M' + x + ' 210v-36q7-10 14 0v36z" fill="#f2d98a" class="flk flk2"/>'; return w; })() +
      '<rect x="0" y="224" width="400" height="36" fill="#4a4a4e"/>' +
      '<g class="note"><text x="250" y="60" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="note note2"><text x="140" y="70" font-size="14" fill="#fff">&#9835;</text></g>' +
      '<rect x="292" y="232" width="100" height="18" rx="2" fill="#111" opacity=".85"/><text x="342" y="245" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="' + GOLD + '">HIP HOP CHURCH</text>',
      sky("g4", "#2a2350", "#c97a6a"));
  }

  /* 5. Amsterdam Av and W 140 St, where he grew up: green signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#7a4632"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(18) +
      '<rect x="0" y="90" width="400" height="126" fill="#5e3426"/>' + bricks +
      tag("KURTIS BLOW", 66, 146, 32, GOLD, -6) + tag("THE BREAKS", 84, 198, 24, RED, -3) + tag("KB", 280, 196, 30, BLUE, -8) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><rect x="0" y="214" width="400" height="5" fill="#8a8a8e"/>' +
      '<rect x="356" y="74" width="5" height="142" fill="#2f3a33"/><path d="M358 74q-14 -12 -30 -6" stroke="#2f3a33" stroke-width="4" fill="none"/><ellipse cx="326" cy="70" rx="9" ry="4" fill="#ffe9a8" class="flk"/>' +
      '<rect x="28" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(2, 34, 104, "Amsterdam Av") + sign(2, 56, 104, "W 140 St") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="#c0392b"/><rect x="12" y="220" width="36" height="12" rx="4" fill="#c0392b"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>' +
      boombox(240, 222, .4) +
      '<g class="note"><text x="252" y="214" font-size="14" fill="' + GOLD + '">&#9834;</text></g>',
      sky("g5", "#0c1622", "#2a3a4a"));
  }

  window.SCENES = { train, ccny, rucker, church, corner };
})();
