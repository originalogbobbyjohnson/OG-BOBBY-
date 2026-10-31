/* Harlem opening scenes for the Doug E. Fresh game: the Human Beat Box, the Get Fresh Crew, "it started off on Eighth Avenue",
   the Apollo stage, Harlem block parties. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.15}}' +
    '.ch{animation:chase .8s steps(1) infinite}.ch2{animation-delay:-.4s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-56px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}' +
    '.hop{animation:hop .7s ease-in-out infinite}.hop2{animation-delay:-.35s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.thump{transform-box:fill-box;transform-origin:center;animation:thump .45s ease-in-out infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.6s ease-in-out infinite}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,120px) rotate(300deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:center;animation:leaf 5s linear infinite}.leaf2{animation-delay:-2.5s}' +
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
  const GOLD = "#ffcc33", RED = "#e4002b", TEAL = "#00b2a9", ACE = "#0039a6", BDF = "#ff6319";
  const boombox = (x, y, s) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="0" y="0" width="90" height="46" rx="6" fill="#1b1b1b" stroke="#888" stroke-width="2"/>' +
    '<circle class="thump" cx="22" cy="26" r="14" fill="#333" stroke="#aaa" stroke-width="2"/><circle class="thump" cx="68" cy="26" r="14" fill="#333" stroke="#aaa" stroke-width="2"/>' +
    '<rect x="38" y="8" width="14" height="8" fill="' + GOLD + '"/><path d="M20 0 q25 -16 50 0" stroke="#888" stroke-width="3" fill="none"/></g>';

  /* 1. The A pulling into 125 St on the Eighth Avenue line, underground, A C B D bullets */
  function train() {
    let tiles = "";
    for (let y = 0; y < 118; y += 12) for (let x = (y / 12) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="11" fill="#eeeae0"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let cols = "";
    for (let x = 20; x < 400; x += 120) cols += '<rect x="' + x + '" y="0" width="10" height="118" fill="#2c3e50"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc9bb"/>' + tiles +
      '<rect x="0" y="62" width="400" height="10" fill="#c99a2e"/><rect x="0" y="72" width="400" height="3" fill="#6a4a12"/>' + cols +
      '<rect x="60" y="16" width="290" height="36" rx="4" fill="#111"/><rect x="60" y="16" width="290" height="4" fill="#fff"/>' +
      '<text x="72" y="41" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">125 St</text>' +
      bullet(240, 35, "A", ACE) + bullet(266, 35, "C", ACE) + bullet(292, 35, "B", BDF) + bullet(318, 35, "D", BDF) +
      '<rect x="0" y="110" width="400" height="80" fill="#1a1a1a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + ACE + '"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' + bullet(296, 136, "A", ACE) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4740"/>' +
      tag("GET FRESH", 24, 238, 30, GOLD, -4) + tag("I-IGHT", 290, 240, 30, TEAL, -8));
  }

  /* 2. The Apollo on 125th: red vertical blade sign, marquee with chasing bulbs, light-brick facade */
  function apollo() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 8) bulbs += '<circle cx="' + x + '" cy="132" r="2.2" fill="#fff3b0" class="ch' + ((x / 8) % 2 ? " ch2" : "") + '"/><circle cx="' + x + '" cy="176" r="2.2" fill="#fff3b0" class="ch' + ((x / 8) % 2 ? "" : " ch2") + '"/>';
    let blade = "";
    "APOLLO".split("").forEach((c, i) => blade += '<text x="200" y="' + (42 + i * 14) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#fff" class="flk' + (i % 2 ? " flk2" : "") + '">' + c + '</text>');
    let wins = "";
    for (let x = 70; x < 340; x += 34) wins += '<rect x="' + x + '" y="30" width="18" height="24" fill="#2a2440"/><rect x="' + x + '" y="72" width="18" height="24" fill="#2a2440"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(16) +
      '<rect x="50" y="14" width="300" height="200" fill="#d8c7a0"/>' + wins +
      /* blade sign */
      '<rect x="188" y="26" width="24" height="96" rx="3" fill="' + RED + '" stroke="#fff" stroke-width="2"/>' + blade +
      /* marquee */
      '<rect x="90" y="126" width="220" height="56" fill="' + RED + '" stroke="#7a0016" stroke-width="2"/>' + bulbs +
      '<rect x="104" y="138" width="192" height="30" fill="#fff8e0"/>' +
      '<text x="200" y="151" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#111">TONIGHT</text>' +
      '<text x="200" y="165" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="' + RED + '">THE HUMAN BEAT BOX</text>' +
      /* doors */
      '<rect x="120" y="186" width="160" height="28" fill="#3a2a1a"/><path d="M150 186v28M180 186v28M210 186v28M240 186v28" stroke="#c9a24a" stroke-width="2"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#4a4a4e"/><rect x="0" y="214" width="400" height="4" fill="#8a8a8e"/>' +
      /* line of fans hopping */
      (function () { let f = ""; const c = [GOLD, TEAL, RED, "#fff", "#7b4bd6"]; for (let i = 0; i < 9; i++) f += '<g class="hop' + (i % 2 ? " hop2" : "") + '"><circle cx="' + (140 + i * 14) + '" cy="226" r="4.5" fill="#3a2a22"/><rect x="' + (135.5 + i * 14) + '" y="231" width="9" height="14" rx="3" fill="' + c[i % 5] + '"/></g>'; return f; })() +
      '<g class="car"><rect x="0" y="240" width="64" height="16" rx="5" fill="' + GOLD + '"/><circle cx="14" cy="256" r="5" fill="#111"/><circle cx="52" cy="256" r="5" fill="#111"/></g>',
      sky("g2", "#0e0a24", "#3a2a5a"));
  }

  /* 3. Strivers' Row block party: buff-brick and red-brick rowhouses, stoops, the boom box thumping, notes in the air */
  function block() {
    let houses = "";
    const cols = ["#d9b77a", "#a4472f", "#d9b77a", "#a4472f", "#d9b77a"];
    for (let i = 0; i < 5; i++) {
      const x = i * 80;
      houses += '<rect x="' + x + '" y="30" width="80" height="170" fill="' + cols[i] + '"/><rect x="' + x + '" y="30" width="80" height="6" fill="#efe6d0"/>' +
        '<rect x="' + (x + 12) + '" y="50" width="16" height="24" fill="#2a2440"/><rect x="' + (x + 52) + '" y="50" width="16" height="24" fill="#f2d98a" class="flk' + (i % 2 ? " flk2" : "") + '"/>' +
        '<rect x="' + (x + 12) + '" y="96" width="16" height="24" fill="#f2d98a" class="flk"/><rect x="' + (x + 52) + '" y="96" width="16" height="24" fill="#2a2440"/>' +
        '<path d="M' + (x + 10) + ' 48h20M' + (x + 50) + ' 48h20M' + (x + 10) + ' 94h20M' + (x + 50) + ' 94h20" stroke="#efe6d0" stroke-width="3"/>' +
        '<rect x="' + (x + 30) + '" y="142" width="20" height="40" fill="#3a2414"/>' +
        '<rect x="' + (x + 24) + '" y="182" width="32" height="6" fill="#b8b0a0"/><rect x="' + (x + 20) + '" y="188" width="40" height="6" fill="#a8a090"/><rect x="' + (x + 16) + '" y="194" width="48" height="6" fill="#988f80"/>';
    }
    let crowd = "";
    const c = [GOLD, TEAL, RED, "#fff", "#7b4bd6"];
    for (let i = 0; i < 14; i++) if (i < 6 || i > 8) crowd += '<g class="hop' + (i % 2 ? " hop2" : "") + '"><circle cx="' + (14 + i * 28) + '" cy="214" r="6" fill="#3a2a22"/><rect x="' + (8 + i * 28) + '" y="220" width="12" height="18" rx="4" fill="' + c[i % 5] + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + houses +
      '<rect x="0" y="200" width="400" height="60" fill="#6a6660"/><rect x="0" y="200" width="400" height="4" fill="#9a958c"/>' + crowd +
      boombox(168, 212, .7) +
      '<g class="note"><text x="186" y="208" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="note note2"><text x="208" y="208" font-size="16" fill="#fff">&#9835;</text></g><g class="note note3"><text x="226" y="208" font-size="16" fill="' + TEAL + '">&#9834;</text></g>' +
      '<rect x="128" y="8" width="144" height="18" rx="2" fill="#111" opacity=".85"/><text x="200" y="21" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="' + GOLD + '">STRIVERS’ ROW</text>',
      sky("g3", "#f2a65a", "#ffd9a0"));
  }

  /* 4. Marcus Garvey Park's cast-iron fire watchtower on the rock, the bell swinging, leaves falling */
  function tower() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* the rock and the trees */
      '<path d="M0 200q60-60 120-56q50-30 90-30q60 0 110 40q50 10 80 30v76H0z" fill="#5c5a52"/><path d="M0 220q100-30 200-20t200 0v60H0z" fill="#3f6b34"/>' +
      '<circle cx="50" cy="160" r="34" fill="#2f5a2a"/><circle cx="350" cy="166" r="34" fill="#2f5a2a"/><circle cx="84" cy="176" r="24" fill="#c9852a"/><circle cx="320" cy="186" r="22" fill="#b5532a"/>' +
      /* tower: three tiers of cast iron */
      '<path d="M156 140l-8 0 0 0M150 140h100l-12-50h-76z" fill="none" stroke="#1d1d1f" stroke-width="4"/>' +
      '<path d="M162 90l-12 50M238 90l12 50M200 90v50M162 90l38 50 38-50M150 140l50-50 50 50" stroke="#1d1d1f" stroke-width="3" fill="none"/>' +
      '<rect x="146" y="138" width="108" height="6" fill="#1d1d1f"/><rect x="158" y="86" width="84" height="6" fill="#1d1d1f"/>' +
      '<path d="M170 86l-4-34M230 86l4-34M200 86V52M170 86l30-34 30 34" stroke="#1d1d1f" stroke-width="3" fill="none"/>' +
      '<rect x="160" y="48" width="80" height="6" fill="#1d1d1f"/>' +
      '<path d="M166 48h68l-34-26z" fill="#2a2a2e" stroke="#1d1d1f" stroke-width="2"/><rect x="198" y="12" width="4" height="12" fill="#1d1d1f"/>' +
      /* spiral stairs */
      
      /* bell */
      '<g class="bell"><path d="M195 58q5-5 10 0l3 13h-16z" fill="' + GOLD + '" stroke="#7a5512" stroke-width="1.5"/><circle cx="200" cy="73" r="2" fill="#7a5512"/></g>' +
      '<g class="leaf"><ellipse cx="300" cy="60" rx="5" ry="2.5" fill="#d97a1a"/></g><g class="leaf leaf2"><ellipse cx="120" cy="40" rx="5" ry="2.5" fill="#c9a22a"/></g>' +
      '<rect x="8" y="236" width="140" height="18" rx="2" fill="#111" opacity=".85"/><text x="78" y="249" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#fff">MARCUS GARVEY PARK</text>',
      sky("g4", "#7fb2e0", "#f4e2c0"));
  }

  /* 5. W 125 St and Frederick Douglass Bl (Eighth Avenue, where it started): green signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#7a4632"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(18) +
      '<rect x="0" y="90" width="400" height="126" fill="#5e3426"/>' + bricks +
      tag("DOUG E. FRESH", 70, 144, 32, GOLD, -6) + tag("GET FRESH CREW", 56, 200, 20, RED, -3) + tag("I-IGHT", 268, 204, 26, TEAL, -8) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><rect x="0" y="214" width="400" height="5" fill="#8a8a8e"/>' +
      '<rect x="356" y="74" width="5" height="142" fill="#2f3a33"/><path d="M358 74q-14 -12 -30 -6" stroke="#2f3a33" stroke-width="4" fill="none"/><ellipse cx="326" cy="70" rx="9" ry="4" fill="#ffe9a8" class="flk"/>' +
      '<rect x="28" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(2, 12, 130, "W 125 St") + sign(2, 34, 130, "Frederick Douglass Bl") + sign(2, 56, 60, "8 Av") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="' + TEAL + '"/><rect x="12" y="220" width="36" height="12" rx="4" fill="' + TEAL + '"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>' +
      boombox(240, 222, .4),
      sky("g5", "#0c1622", "#2a3a4a"));
  }

  window.SCENES = { train, apollo, block, tower, corner };
})();
