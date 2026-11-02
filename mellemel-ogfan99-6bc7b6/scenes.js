/* South Bronx opening scenes for the Melle Mel game: Grandmaster Flash and the Furious Five, park jams, the voice of The Message. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:center;animation:spin 1.8s linear infinite}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.15}}' +
    '.ch{animation:chase .8s steps(1) infinite}.ch2{animation-delay:-.4s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}' +
    '.hop{animation:hop .8s ease-in-out infinite}.hop2{animation-delay:-.4s}.hop3{animation-delay:-.2s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.thump{transform-box:fill-box;transform-origin:center;animation:thump .45s ease-in-out infinite}' +
    '@keyframes elt{from{transform:translateX(420px)}to{transform:translateX(-420px)}}' +
    '.elt{animation:elt 6s linear infinite}' +
    '@keyframes bike{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '.bike{animation:bike 9s linear infinite}' +
    '@keyframes wheel{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.whl{transform-box:fill-box;transform-origin:center;animation:wheel .6s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewX(0deg)}50%{transform:skewX(-8deg)}}' +
    '.wave{transform-box:fill-box;transform-origin:left;animation:wave 2s ease-in-out infinite}' +
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
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const fig = (x, y, c, cls) =>
    '<g' + (cls ? ' class="' + cls + '"' : "") + '><circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="#141414"/><path d="M' + (x - 8) + ' ' + y + 'l2 -22q6 -4 12 0l2 22z" fill="' + c + '"/>' +
    '<rect x="' + (x - 6) + '" y="' + y + '" width="4" height="14" fill="#141414"/><rect x="' + (x + 2) + '" y="' + y + '" width="4" height="14" fill="#141414"/></g>';
  const boombox = (x, y, k) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + k + ')"><path d="M14 0q24 -14 48 0" stroke="#c9ced6" stroke-width="3" fill="none"/>' +
    '<rect x="0" y="0" width="76" height="40" rx="5" fill="#2b2b33" stroke="#9aa3ad" stroke-width="1.5"/>' +
    '<g class="thump"><circle cx="16" cy="24" r="11" fill="#111" stroke="#9aa3ad"/><circle cx="16" cy="24" r="4" fill="#555"/></g>' +
    '<g class="thump"><circle cx="60" cy="24" r="11" fill="#111" stroke="#9aa3ad"/><circle cx="60" cy="24" r="4" fill="#555"/></g>' +
    '<rect x="30" y="14" width="16" height="14" rx="1" fill="#171a20" stroke="#9aa3ad"/><rect x="28" y="4" width="20" height="5" fill="#ffd23f"/></g>';
  const GREEN = "#7cf29a", GOLD = "#ffd23f", RED = "#ff4f5e", SIX = "#00933c";

  /* 1. The 6 pulling into Longwood Av, underground on the Pelham line under Southern Blvd: white tile, a mosaic band, the Longwood Av name tablet, I-beam columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 180; y += 10) tiles += '<path d="M0 ' + y + 'H400" stroke="#d8d2c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0V180" stroke="#d8d2c4" stroke-width="1"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="20" width="14" height="14" fill="' + ((x / 16) % 3 ? "#2f5a8a" : "#e0b84a") + '"/>';
    let windows = "";
    for (let x = 30; x < 280; x += 46) windows += '<rect x="' + x + '" y="112" width="30" height="22" rx="3" fill="#fff4d6" opacity=".9"/>';
    let cols = "";
    [16, 384].forEach(x => { cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="180" fill="#1d1d1d"/><rect x="' + (x - 10) + '" y="0" width="20" height="6" fill="#1d1d1d"/>'; });
    return svg(
      '<rect width="400" height="180" fill="#efe9db"/>' + tiles + band +
      '<rect x="334" y="48" width="44" height="38" fill="#2f5a8a" stroke="#e0b84a" stroke-width="2"/><text x="356" y="64" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="10" fill="#fff">LONG</text><text x="356" y="78" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="10" fill="#fff">WOOD</text>' +
      '<rect x="0" y="16" width="400" height="4" fill="#7a5a3a"/><rect x="0" y="34" width="400" height="4" fill="#7a5a3a"/>' +
      /* black station sign */
      '<rect x="70" y="48" width="260" height="36" rx="4" fill="#111"/><rect x="70" y="48" width="260" height="4" fill="#fff"/>' +
      '<text x="84" y="74" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Longwood Av</text>' + bullet(304, 67, "6", SIX) +
      '<g class="anim-train">' +
        '<rect x="14" y="98" width="320" height="70" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="14" y="146" width="320" height="4" fill="#2b2f36"/>' + windows +
        '<circle cx="326" cy="158" r="4" fill="#fff6c2"/>' + bullet(312, 124, "6", SIX) +
      '</g>' + cols +
      '<rect x="0" y="168" width="400" height="12" fill="#eab308"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5a5650"/><path d="M0 200H400" stroke="#4a4640" stroke-width="2"/>' +
      tag("FURIOUS 5", 34, 236, 30, GREEN, -4) + tag("MELLE MEL", 222, 240, 28, GOLD, -7));
  }

  /* 2. Sugar Hill Records in Englewood, NJ: the label that put out The Message and the Furious Five; low brick office, the name over the door, a gold record turning in the window */
  function park() {
    let bricks = "";
    for (let y = 92; y < 206; y += 10) for (let x = (y / 10) % 2 ? 40 : 52; x < 334; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#8a4a34"/>';
    const gold = (cx, cy, cls) => '<g class="' + cls + '"><circle cx="' + cx + '" cy="' + cy + '" r="17" fill="#d4a93a"/><circle cx="' + cx + '" cy="' + cy + '" r="12" fill="none" stroke="#b8902a" stroke-width="1"/><circle cx="' + cx + '" cy="' + cy + '" r="5" fill="#7a1a1a"/><rect x="' + (cx + 6) + '" y="' + (cy - 1) + '" width="8" height="2" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + '<g class="cld"><ellipse cx="60" cy="40" rx="30" ry="10" fill="#fff" opacity=".8"/></g><g class="cld cld2"><ellipse cx="60" cy="26" rx="24" ry="8" fill="#fff" opacity=".7"/></g>' +
      '<circle cx="20" cy="150" r="40" fill="#3e7a36"/><circle cx="384" cy="150" r="40" fill="#3e7a36"/>' +
      /* the low brick office */
      '<rect x="40" y="84" width="316" height="122" fill="#9a5a40"/>' + bricks + '<rect x="34" y="78" width="328" height="10" fill="#e8dcc0"/>' +
      '<rect x="88" y="96" width="220" height="26" rx="3" fill="#1d1d22"/>' +
      '<text x="198" y="115" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" letter-spacing="2" fill="' + GOLD + '">SUGAR HILL RECORDS</text>' +
      '<rect x="64" y="134" width="88" height="54" fill="#1a1a22" stroke="#e8dcc0" stroke-width="3"/><rect x="246" y="134" width="88" height="54" fill="#1a1a22" stroke="#e8dcc0" stroke-width="3"/>' +
      '<rect x="80" y="142" width="54" height="40" fill="#2b2b33" stroke="' + GOLD + '"/>' + gold(107, 161, "spin") +
      '<rect x="262" y="142" width="54" height="40" fill="#2b2b33" stroke="' + GOLD + '"/>' + gold(289, 161, "spin") +
      '<rect x="176" y="134" width="44" height="72" fill="#3a2a22"/><circle cx="212" cy="172" r="2" fill="' + GOLD + '"/>' +
      '<rect x="60" y="190" width="96" height="12" fill="#111"/><text x="108" y="199" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="' + GREEN + '">THE MESSAGE · 1982</text>' +
      '<rect x="0" y="206" width="400" height="12" fill="#a8a296"/><rect x="0" y="218" width="400" height="42" fill="#3a3a3e"/><path d="M0 240H400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="car"><rect x="0" y="226" width="64" height="18" rx="5" fill="#c23a2e"/><rect x="12" y="218" width="36" height="12" rx="4" fill="#c23a2e"/><circle cx="14" cy="246" r="6" fill="#111"/><circle cx="52" cy="246" r="6" fill="#111"/></g>' +
      '<g class="note"><text x="200" y="74" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="note note2"><text x="240" y="74" font-size="16" fill="' + GREEN + '">&#9835;</text></g>' +
      '<rect x="110" y="6" width="180" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="19" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">WEST ST · ENGLEWOOD, NJ</text>',
      sky("g2", "#7fb0e0", "#f4dcb0"));
  }
  /* 3. Club night on Jerome Av under the el: chasing marquee bulbs, LIVE TONIGHT, the 4 rumbling past overhead */
  function club() {
    let bulbs = "";
    for (let x = 64; x <= 336; x += 12) { bulbs += '<circle class="ch' + ((x / 12) % 2 ? " ch2" : "") + '" cx="' + x + '" cy="104" r="3" fill="' + GOLD + '"/><circle class="ch' + ((x / 12) % 2 ? "" : " ch2") + '" cx="' + x + '" cy="160" r="3" fill="' + GOLD + '"/>'; }
    for (let y = 116; y <= 148; y += 12) { bulbs += '<circle class="ch' + ((y / 12) % 2 ? " ch2" : "") + '" cx="64" cy="' + y + '" r="3" fill="' + GOLD + '"/><circle class="ch' + ((y / 12) % 2 ? "" : " ch2") + '" cx="336" cy="' + y + '" r="3" fill="' + GOLD + '"/>'; }
    let el = "";
    for (let x = 0; x < 400; x += 60) el += '<rect x="' + (x + 24) + '" y="44" width="10" height="216" fill="#2c3a30"/>';
    let windows = "";
    for (let x = 12; x < 380; x += 40) windows += '<rect x="' + x + '" y="12" width="26" height="12" rx="2" fill="#fff4d6"/>';
    return svg(
      '<rect width="400" height="260" fill="#0e0c18"/>' +
      /* the 4 on the el overhead */
      '<g class="elt"><rect x="0" y="6" width="400" height="28" rx="4" fill="#9aa3ad"/>' + windows + bullet(372, 20, "4", SIX) + '</g>' +
      '<rect x="0" y="34" width="400" height="12" fill="#2c3a30"/>' + el +
      /* club facade */
      '<rect x="40" y="80" width="320" height="180" fill="#3a1e2e"/>' +
      '<rect x="58" y="98" width="284" height="68" fill="#111"/>' + bulbs +
      '<text x="200" y="126" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + RED + '">LIVE TONIGHT</text>' +
      '<text x="200" y="152" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + GREEN + '">THE FURIOUS FIVE</text>' +
      /* doors, velvet rope, line of people */
      '<rect x="168" y="186" width="64" height="74" fill="#14101c" stroke="' + GOLD + '" stroke-width="2"/><path d="M200 186v74" stroke="' + GOLD + '"/>' +
      '<rect x="146" y="226" width="4" height="34" fill="' + GOLD + '"/><rect x="250" y="226" width="4" height="34" fill="' + GOLD + '"/><path d="M150 230q50 18 100 0" stroke="#b0123a" stroke-width="4" fill="none"/>' +
      fig(80, 246, "#6fa8ff", "hop") + fig(104, 246, RED, "hop hop2") + fig(128, 246, GOLD, "hop hop3") + fig(286, 246, GREEN, "hop hop2") + fig(312, 246, "#ff9a2e", "hop") +
      '<rect x="60" y="174" width="84" height="16" fill="#111"/><text x="102" y="186" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">JEROME AV</text>');
  }

  /* 4. The Message, 1982: a South Bronx tenement at sunset, fire escapes, the boombox on the stoop playing it, a kid bikes past */
  function stoop() {
    let bricks = "";
    for (let y = 40; y < 228; y += 8) for (let x = (y / 8) % 2 ? 0 : 10; x < 400; x += 20) bricks += '<rect x="' + x + '" y="' + y + '" width="18" height="6" fill="#8e4a32"/>';
    let wins = "", esc = "";
    [70, 150, 250, 330].forEach(x => { [56, 104, 152].forEach(y => { wins += '<rect x="' + (x - 14) + '" y="' + y + '" width="28" height="34" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffcf7a") + '" stroke="#e8dcc0" stroke-width="3"/><rect x="' + (x - 17) + '" y="' + (y - 5) + '" width="34" height="5" fill="#e8dcc0"/>'; }); });
    [70, 330].forEach(x => { [94, 142].forEach(y => { esc += '<rect x="' + (x - 30) + '" y="' + y + '" width="60" height="3" fill="#1d1d1d"/><path d="M' + (x - 30) + ' ' + y + 'v-14M' + (x + 30) + ' ' + y + 'v-14M' + (x - 30) + ' ' + (y - 14) + 'h60" stroke="#1d1d1d" stroke-width="2"/>'; for (let k = x - 26; k < x + 30; k += 6) esc += '<path d="M' + k + ' ' + y + 'v-14" stroke="#1d1d1d" stroke-width="1"/>'; });
      esc += '<path d="M' + (x - 26) + ' 145L' + (x + 24) + ' 97" stroke="#1d1d1d" stroke-width="2"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<rect x="0" y="34" width="400" height="194" fill="#a0573c"/>' + bricks +
      '<rect x="0" y="28" width="400" height="8" fill="#5a3a28"/>' + wins + esc +
      /* laundry line waving between the fire escapes */
      '<path d="M100 78Q200 90 300 78" stroke="#ddd" stroke-width="1" fill="none"/><g class="wave"><rect x="140" y="82" width="12" height="14" fill="' + GOLD + '"/><rect x="190" y="84" width="14" height="12" fill="' + GREEN + '"/><rect x="240" y="82" width="12" height="16" fill="' + RED + '"/></g>' +
      /* doorway + stoop */
      '<rect x="176" y="148" width="48" height="56" fill="#2a1a12" stroke="#e8dcc0" stroke-width="3"/><path d="M200 148v56" stroke="#e8dcc0" stroke-width="2"/>' +
      '<rect x="164" y="204" width="72" height="8" fill="#b8b0a0"/><rect x="156" y="212" width="88" height="8" fill="#a8a090"/><rect x="148" y="220" width="104" height="8" fill="#988f80"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6660"/><rect x="0" y="228" width="400" height="4" fill="#9a958c"/>' +
      boombox(166, 190, .4) +
      '<g class="note"><text x="190" y="186" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="note note2"><text x="206" y="186" font-size="14" fill="#fff">&#9835;</text></g><g class="note note3"><text x="176" y="186" font-size="14" fill="' + GREEN + '">&#9834;</text></g>' +
      /* banner over the door */
      '<rect x="146" y="124" width="108" height="18" rx="2" fill="#111"/><text x="200" y="138" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + GOLD + '">THE MESSAGE</text>' +
      /* kid on a bike rolling by */
      '<g class="bike"><circle class="whl" cx="0" cy="248" r="8" fill="none" stroke="#111" stroke-width="2.5" stroke-dasharray="4 2"/><circle class="whl" cx="28" cy="248" r="8" fill="none" stroke="#111" stroke-width="2.5" stroke-dasharray="4 2"/>' +
        '<path d="M0 248L12 236H26L28 248M12 236L14 228" stroke="' + RED + '" stroke-width="2.5" fill="none"/><circle cx="16" cy="212" r="5" fill="#141414"/><path d="M12 232l2 -16h6l2 16z" fill="' + GREEN + '"/></g>' +
      '<rect x="332" y="6" width="60" height="16" rx="2" fill="#111" opacity=".75"/><text x="362" y="18" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#fff">1982</text>',
      sky("g4", "#f2a65a", "#ffd9a0"));
  }

  /* 5. Southern Blvd and Longwood Av, up top from the 6: green street signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#7a4632"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(18) +
      '<rect x="0" y="90" width="400" height="126" fill="#5e3426"/>' + bricks +
      tag("FURIOUS 5", 70, 136, 30, GREEN, -6) + tag("STEP OFF", 238, 162, 24, RED, -4) + tag("MELLE MEL", 70, 200, 28, GOLD, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><rect x="0" y="214" width="400" height="5" fill="#8a8a8e"/>' +
      /* subway entrance globe */
      '<rect x="300" y="186" width="4" height="28" fill="#2f3a33"/><circle cx="302" cy="182" r="7" fill="' + SIX + '" class="flk2"/>' +
      '<rect x="356" y="74" width="5" height="142" fill="#2f3a33"/><path d="M358 74q-14 -12 -30 -6" stroke="#2f3a33" stroke-width="4" fill="none"/><ellipse cx="326" cy="70" rx="9" ry="4" fill="#ffe9a8" class="flk"/>' +
      '<rect x="28" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(2, 34, 104, "Southern Blvd") + sign(2, 56, 104, "Longwood Av") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="#2e6fc2"/><rect x="12" y="220" width="36" height="12" rx="4" fill="#2e6fc2"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>' +
      boombox(240, 222, .4),
      sky("g5", "#0c1622", "#2a3a4a"));
  }

  window.SCENES = { train, park, club, stoop, corner };
})();

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: the long low profile across the Longwood skyline at sunset, clouds drifting over it */
(function () {
  /* Y: little kit for drawing the stadium into the corner's sky. Every piece is plain SVG in the 400 x 260 frame. */
  const Y = (function () {
    const css = '<style>' +
      '@keyframes ysP{0%,100%{opacity:1}50%{opacity:.5}}.ysP{animation:ysP 1.8s ease-in-out infinite}' +
      '@keyframes ysF{0%{transform:scale(.1);opacity:0}12%{opacity:1}100%{transform:scale(1);opacity:0}}.ysF{transform-box:fill-box;transform-origin:50% 50%;animation:ysF 2.6s ease-out infinite}' +
      '@keyframes ysB{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ysB{transform-box:fill-box;transform-origin:50% 100%;animation:ysB 5s ease-in-out infinite}' +
      '@keyframes ysX{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ysX{animation:ysX 16s linear infinite}' +
      '@keyframes ysW{0%,100%{transform:skewY(0)}50%{transform:skewY(-14deg)}}.ysW{transform-box:fill-box;transform-origin:0 50%;animation:ysW 1.1s ease-in-out infinite}' +
      '@keyframes ysD{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.ysD{animation:ysD 9s ease-in-out infinite}' +
      '@keyframes ysS{from{transform:translateY(0)}to{transform:translateY(60px)}}.ysS{animation:ysS 3s linear infinite}.ysR{animation-duration:.7s}' +
      '@keyframes ysK{0%,100%{opacity:1}50%{opacity:.2}}.ysK{animation:ysK 1s steps(1) infinite}' +
      '</style>';
    const g = (x, y, s, inner) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + inner + '</g>';
    /* the white frieze: top rail, posts, and the arched openings hanging under it */
    const frieze = (x0, x1, y, k, c) => {
      let p = 'M' + x0 + ' ' + y + 'H' + x1;
      for (let x = x0; x < x1 - 0.1; x += k) p += 'M' + x + ' ' + y + 'v6M' + x + ' ' + (y + 4.5) + 'q' + (k / 2) + ' -5 ' + k + ' 0';
      return '<path d="' + p + 'M' + x1 + ' ' + y + 'v6" fill="none" stroke="' + (c || "#f4f1e8") + '" stroke-width="1.4"/>';
    };
    /* light banks on poles, with a soft glow */
    const lights = (xs, y, off) => xs.map((p, i) => { const x = p.length ? p[0] : p, yy = p.length ? p[1] : y;
      return '<g' + (off ? ' class="ysK" style="animation-duration:' + (2 + i * .7) + 's"' : '') + '><ellipse class="ysP" cx="' + x + '" cy="' + (yy - 11) + '" rx="11" ry="6" fill="#fff4c8" opacity=".24"/>' +
      '<path d="M' + x + ' ' + yy + 'v-8" stroke="#3a3f48" stroke-width="1.2"/><rect x="' + (x - 6) + '" y="' + (yy - 13) + '" width="12" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>' +
      '<path d="M' + (x - 2) + ' ' + (yy - 13) + 'v5M' + (x + 2) + ' ' + (yy - 13) + 'v5" stroke="#c9c3a8" stroke-width=".5"/></g>'; }).join("");
    /* the limestone face: tall arches either side of the big gate, a gold band over the gate (no lettering) */
    const face = (w, lit) => {
      const n = Math.max(2, Math.round((w - 36) / 2 / 20)), step = (w / 2 - 22) / n, aw = step * 0.6, gx = w / 2;
      let a = '<rect x="0" y="-58" width="' + w + '" height="58" fill="' + (lit ? "#e9dcb8" : "#d8cfba") + '"/>' +
        '<rect x="-2" y="-62" width="' + (w + 4) + '" height="5" fill="#f1ead8"/><rect x="0" y="-8" width="' + w + '" height="8" fill="#a99f8a"/>';
      for (let i = 0; i < n; i++) [6 + i * step, w - 6 - i * step - aw].forEach(x =>
        a += '<path d="M' + x.toFixed(1) + ' -8V-42a' + (aw / 2).toFixed(1) + ' ' + (aw / 2).toFixed(1) + ' 0 0 1 ' + aw.toFixed(1) + ' 0V-8z" fill="' + (lit ? "#ffcf78" : "#4a4652") + '"' + (lit ? ' opacity=".9"' : '') + '/>');
      a += '<path d="M' + (gx - 15) + ' -8V-38a15 15 0 0 1 30 0V-8z" fill="' + (lit ? "#ffe2a0" : "#3a3640") + '" stroke="#b8ad94" stroke-width="2"/>' +
        '<rect x="' + (gx - 20) + '" y="-56" width="40" height="5" fill="#c9a24a"/>';
      return a;
    };
    /* the upper deck behind the face, with the frieze riding on top and light banks above it */
    const deck = (w, lit, banks) => '<path d="M-4 -60L6 -74H' + (w - 6) + 'L' + (w + 4) + ' -60z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, w - 6, -80, 7) +
      '<path d="M6 -80H' + (w - 6) + '" stroke="#f4f1e8" stroke-width="2"/>' + lights(banks || [w * 0.2, w * 0.5, w * 0.8], -80);
    const halo = (c) => '<radialGradient id="ysH"><stop offset="0" stop-color="' + (c || "#ffe9b0") + '" stop-opacity=".55"/><stop offset="1" stop-color="' + (c || "#ffe9b0") + '" stop-opacity="0"/></radialGradient>';
    return {
      css,
      /* straight-on front: face + deck */
      front: (x, y, s, o) => g(x, y, s, deck(o.w || 200, o.lit, o.banks) + face(o.w || 200, o.lit)),
      /* three-quarter view: front face plus the long side running away to the right */
      corner3q: (x, y, s, o) => {
        const lit = o.lit;
        let side = '<path d="M120 -62L200 -50V-4L120 0z" fill="' + (lit ? "#cbbd99" : "#bdb4a0") + '"/><path d="M120 -62L200 -50" stroke="#f1ead8" stroke-width="4"/>';
        for (let i = 0; i < 5; i++) { const x0 = 128 + i * 15, x1 = x0 + 8, t0 = -55 + (x0 - 120) * 0.15, t1 = -55 + (x1 - 120) * 0.15, b0 = -8 + (x0 - 120) * 0.05;
          side += '<path d="M' + x0 + ' ' + b0 + 'V' + (t0 + 10) + 'Q' + ((x0 + x1) / 2) + ' ' + (t0 + 2) + ' ' + x1 + ' ' + (t1 + 10) + 'V' + (b0 - 0.4) + 'z" fill="' + (lit ? "#ffc865" : "#4a4652") + '"' + (lit ? ' opacity=".85"' : '') + '/>'; }
        const top = '<path d="M-4 -60L6 -74H120L200 -62V-50z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, 118, -80, 7) +
          '<path d="M118 -80L198 -68" stroke="#f4f1e8" stroke-width="2"/><path d="M118 -80L198 -68M126 -79v5M138 -77v5M150 -75v5M162 -74v5M174 -72v5M186 -70v5M198 -68v5" fill="none" stroke="#f4f1e8" stroke-width="1.2"/>' +
          '<path d="M6 -80H118" stroke="#f4f1e8" stroke-width="2"/>' + lights([30, 90, 150, 190], -78);
        return g(x, y, s, top + side + face(120, lit));
      },
      /* far off: a low dark mass, the frieze a thin bright lace on top, the lights glowing */
      far: (x, y, s, o) => { let ar = ""; for (let i = 0; i < 15; i++) ar += '<path d="M' + (16 + i * 11.6) + ' -3V-14a3 3 0 0 1 6 0V-3z" fill="' + (o.win ? "#ffcf78" : "#4a4652") + '"/>';
        return halo(o.hc) + g(x, y, s,
        '<ellipse class="ysP" cx="100" cy="-34" rx="' + (o.halo || 120) + '" ry="' + ((o.halo || 120) / 3) + '" fill="url(#ysH)"/>' +
        '<path d="M2 -18V-22Q100 -44 198 -22V-18z" fill="' + (o.c || "#2c3040") + '"/>' +
        '<path d="M6 -27Q100 -48 194 -27" fill="none" stroke="#f4f1e8" stroke-width="1.6"/><path d="M6 -24.5Q100 -45.5 194 -24.5" fill="none" stroke="#f4f1e8" stroke-width="4" stroke-dasharray="1.4 2.2" opacity=".85"/>' +
        lights([[30, -33], [72, -40], [128, -40], [170, -33]], 0, o.off) +
        '<rect x="8" y="-20" width="184" height="20" fill="' + (o.lime || "#c9c0aa") + '"/><rect x="6" y="-22" width="188" height="3" fill="#ece5d2"/>' + ar +
        '<path d="M92 -3V-15a8 8 0 0 1 16 0V-3z" fill="' + (o.win ? "#ffe2a0" : "#3a3640") + '"/><rect x="88" y="-19" width="24" height="3" fill="#c9a24a"/>'); },
      /* the city spread out below a high corner, for the views looking down */
      valley: (y0, c, w) => { let d = '<rect x="0" y="' + y0 + '" width="400" height="' + (226 - y0) + '" fill="' + c + '"/>'; for (let i = 0; i < 70; i++) d += '<rect x="' + ((i * 53) % 400) + '" y="' + (y0 + 4 + (i * 29) % (222 - y0)) + '" width="2" height="2" fill="' + (w || "#ffd98a") + '" opacity=".6"/>'; return d; },
      /* from up on the Highbridge bluff: down into the bowl */
      bowl: (cx, cy, s, o) => {
        let b = '<ellipse rx="100" ry="36" fill="#d8cfba"/><ellipse rx="93" ry="32" fill="#2c4470"/><ellipse rx="80" ry="27" cy="2" fill="#3b5d96"/>' +
          '<ellipse rx="66" ry="21" cy="4" fill="' + (o.day ? "#3fa34a" : "#2f9a3e") + '"/><ellipse rx="54" ry="16" cy="5" fill="none" stroke="#4fb85a" stroke-width="5" opacity=".6"/>' +
          '<path d="M0 22L18 13L0 6L-18 13z" fill="#c08850"/><path d="M0 18L11 13L0 9L-11 13z" fill="#3fa34a"/>' +
          '<rect x="-1.5" y="20.5" width="3" height="3" fill="#fff"/><rect x="16.5" y="11.5" width="3" height="3" fill="#fff"/><rect x="-1.5" y="4.5" width="3" height="3" fill="#fff"/><rect x="-19.5" y="11.5" width="3" height="3" fill="#fff"/>' +
          '<ellipse rx="97" ry="34" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-dasharray="1.4 1.8"/><ellipse rx="98" ry="35" fill="none" stroke="#f4f1e8" stroke-width="1"/>' +
          '<rect x="-20" y="-38" width="40" height="12" fill="#14161c"/><g class="ysK"><path d="M-16 -34h14M2 -34h14M-16 -30h26" stroke="#7fd4ff" stroke-width="1.6"/></g>';
        [[-90, -12], [-50, -32], [50, -32], [90, -12], [-80, 20], [80, 20]].forEach(p => b += '<circle class="ysP" cx="' + p[0] + '" cy="' + (p[1] - 6) + '" r="9" fill="#fff4c8" opacity=".3"/><rect x="' + (p[0] - 5) + '" y="' + (p[1] - 9) + '" width="10" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>');
        return g(cx, cy, s, b);
      },
      /* light in the sky: the horizon tint for dusk, dawn, golden afternoon */
      tint: (top, bottom, y0) => '<linearGradient id="ysT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '" stop-opacity="0"/><stop offset="1" stop-color="' + bottom + '" stop-opacity=".85"/></linearGradient>' +
        '<rect x="0" y="' + (y0 || 0) + '" width="400" height="' + (226 - (y0 || 0)) + '" fill="url(#ysT)"/>',
      halo,
      clouds: (list, c) => list.map((p, i) => '<g class="ysD" style="animation-delay:-' + (i * 3) + 's"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/><ellipse cx="' + (p[0] + p[2] * .3) + '" cy="' + (p[1] - p[2] / 6) + '" rx="' + (p[2] * .5) + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/></g>').join(""),
      plane: (y, dur) => '<g class="ysX" style="animation-duration:' + (dur || 16) + 's"><path d="M0 ' + y + 'h16l4 -2h-6l-5 -5h-3l3 5h-9z" fill="#2a2d36"/><circle class="ysK" cx="2" cy="' + y + '" r="1.6" fill="#ff4a4a"/><circle cx="17" cy="' + y + '" r="1.2" fill="#fff"/></g>',
      blimp: (x, y) => '<g class="ysD"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#d9dde3" stroke="#6b7280" stroke-width="1"/><path d="M' + (x + 22) + ' ' + y + 'l10 -8v16z" fill="#9aa1aa"/><rect x="' + (x - 6) + '" y="' + (y + 8) + '" width="12" height="4" rx="1" fill="#3a3f48"/>' +
        '<rect class="ysK" x="' + (x - 16) + '" y="' + (y - 2) + '" width="28" height="4" rx="2" fill="#ffd66b"/></g>',
      fireworks: (list) => list.map((p, i) => { let r = ""; for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; r += 'M' + p[0] + ' ' + p[1] + 'l' + (Math.cos(a) * p[2]).toFixed(1) + ' ' + (Math.sin(a) * p[2]).toFixed(1); }
        return '<path class="ysF" style="animation-delay:-' + (i * 0.9) + 's" d="' + r + '" stroke="' + p[3] + '" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2"/>'; }).join(""),
      beams: (list) => list.map((p, i) => '<path class="ysB" style="animation-delay:-' + (i * 2.4) + 's" d="M' + p[0] + ' ' + p[1] + 'l-9 -' + p[2] + 'h18z" fill="#fff6d8" opacity=".16"/>').join(""),
      birds: (x, y) => '<g class="ysX" style="animation-duration:22s"><path d="M' + x + ' ' + y + 'q3 -3 6 0q3 -3 6 0M' + (x + 14) + ' ' + (y - 6) + 'q2 -2 4 0q2 -2 4 0M' + (x - 10) + ' ' + (y - 4) + 'q2 -2 4 0q2 -2 4 0" fill="none" stroke="#22252e" stroke-width="1.3"/></g>',
      flags: (list) => list.map((p, i) => '<path d="M' + p[0] + ' ' + p[1] + 'v-' + p[2] + '" stroke="#e6e6e6" stroke-width="1"/><g class="ysW" style="animation-delay:-' + (i * 0.3) + 's"><rect x="' + p[0] + '" y="' + (p[1] - p[2]) + '" width="' + (p[2] * .6) + '" height="' + (p[2] * .38) + '" fill="' + (i % 2 ? "#1f3a8a" : "#e8303a") + '"/><path d="M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .13) + 'h' + (p[2] * .6) + 'M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .26) + 'h' + (p[2] * .6) + '" stroke="#fff" stroke-width=".8"/></g>').join(""),
      /* an el: girder, posts, and a 4 (or 5) train rolling across it */
      el: (x0, x1, y, s, n) => {
        let p = '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + (4 * s) + '" fill="#2f3a33"/>';
        for (let x = x0 + 6; x < x1; x += 26 * s) p += '<rect x="' + x + '" y="' + y + '" width="' + (2 * s) + '" height="' + (40 * s) + '" fill="#2f3a33"/>';
        let cars = ""; for (let c = 0; c < 3; c++) cars += '<rect x="' + (c * 34 * s) + '" y="' + (y - 11 * s) + '" width="' + (32 * s) + '" height="' + (11 * s) + '" rx="' + (2 * s) + '" fill="#c3c8cf" stroke="#6b7280" stroke-width=".8"/><path d="M' + (c * 34 * s + 4 * s) + ' ' + (y - 7 * s) + 'h' + (24 * s) + '" stroke="#ffe9b0" stroke-width="' + (3 * s) + '" stroke-dasharray="' + (4 * s) + ' ' + (2 * s) + '"/>';
        return p + '<g class="ysX" style="animation-duration:11s">' + cars + '<circle cx="' + (96 * s) + '" cy="' + (y - 5.5 * s) + '" r="' + (4.5 * s) + '" fill="#00933c"/><text x="' + (96 * s) + '" y="' + (y - 3.3 * s) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (6 * s) + '" fill="#fff">' + (n || "4") + '</text></g>';
      },
      /* falling weather, looped in a box: rain streaks or snow */
      weather: (x, y, w, h, kind) => { let d = ""; for (let i = 0; i < Math.round(w * 60 / 300); i++) { const px = x + (i * 37) % w, py0 = (i * 23) % 60;
        for (let py = y - 60 + py0; py < y + h; py += 60) d += kind === "snow" ? '<circle cx="' + px + '" cy="' + py + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".85"/>' : '<path d="M' + px + ' ' + py + 'l-2 9" stroke="#b9c8dc" stroke-width="1" opacity=".6"/>'; }
        return '<clipPath id="ysC"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/></clipPath><g clip-path="url(#ysC)"><g class="ysS' + (kind === "snow" ? "" : " ysR") + '">' + d + '</g></g>'; },
      fog: (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" opacity=".38"/><g class="ysD"><ellipse cx="' + (x + w * .3) + '" cy="' + (y + h * .55) + '" rx="' + (w * .4) + '" ry="' + (h * .18) + '" fill="' + c + '" opacity=".45"/><ellipse cx="' + (x + w * .75) + '" cy="' + (y + h * .35) + '" rx="' + (w * .35) + '" ry="' + (h * .14) + '" fill="' + c + '" opacity=".4"/></g>',
      moon: (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 8) + '" fill="#fff1d6" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff1d6"/><circle cx="' + (x - r * .3) + '" cy="' + (y - r * .2) + '" r="' + (r * .2) + '" fill="#e8dcc0"/><circle cx="' + (x + r * .35) + '" cy="' + (y + r * .3) + '" r="' + (r * .14) + '" fill="#e8dcc0"/>',
      river: (x0, x1, y, h) => '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + h + '" fill="#1c2a44"/><g class="ysD"><path d="M' + (x0 + 10) + ' ' + (y + 3) + 'h30M' + (x0 + 70) + ' ' + (y + 6) + 'h22M' + (x0 + 130) + ' ' + (y + 4) + 'h26" stroke="#ffcf78" stroke-width="1.4" opacity=".7"/></g>'
    };
  })();
  const base = window.SCENES.corner;
  window.SCENES.corner = function () {
    const art = '<g>' + Y.css +
      Y.tint("#ff7a3d", "#ffb070", 0) + Y.far(110, 94, 1.0, { c: "#2b2030", halo: 70, hc: "#ffd27a", win: true }) + Y.clouds([[200, 24, 50], [330, 38, 40]], "#ffcf9a") + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
