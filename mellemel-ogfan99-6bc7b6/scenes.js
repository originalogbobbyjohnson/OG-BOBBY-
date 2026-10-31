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

  /* 1. The 6 pulling into Hunts Point Av, underground on the Pelham line under Southern Blvd: white tile, a terracotta band, I-beam columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 180; y += 10) tiles += '<path d="M0 ' + y + 'H400" stroke="#d8d2c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0V180" stroke="#d8d2c4" stroke-width="1"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="20" width="14" height="14" fill="' + ((x / 16) % 2 ? "#b8643a" : "#3f6b4a") + '"/>';
    let windows = "";
    for (let x = 30; x < 280; x += 46) windows += '<rect x="' + x + '" y="112" width="30" height="22" rx="3" fill="#fff4d6" opacity=".9"/>';
    let cols = "";
    [16, 384].forEach(x => { cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="180" fill="#1d1d1d"/><rect x="' + (x - 10) + '" y="0" width="20" height="6" fill="#1d1d1d"/>'; });
    return svg(
      '<rect width="400" height="180" fill="#efe9db"/>' + tiles + band +
      '<rect x="0" y="16" width="400" height="4" fill="#7a5a3a"/><rect x="0" y="34" width="400" height="4" fill="#7a5a3a"/>' +
      /* black station sign */
      '<rect x="70" y="48" width="260" height="36" rx="4" fill="#111"/><rect x="70" y="48" width="260" height="4" fill="#fff"/>' +
      '<text x="84" y="74" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Hunts Point Av</text>' + bullet(304, 67, "6", SIX) +
      '<g class="anim-train">' +
        '<rect x="14" y="98" width="320" height="70" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="14" y="146" width="320" height="4" fill="#2b2f36"/>' + windows +
        '<circle cx="326" cy="158" r="4" fill="#fff6c2"/>' + bullet(312, 124, "6", SIX) +
      '</g>' + cols +
      '<rect x="0" y="168" width="400" height="12" fill="#eab308"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5a5650"/><path d="M0 200H400" stroke="#4a4640" stroke-width="2"/>' +
      tag("FURIOUS 5", 34, 236, 30, GREEN, -4) + tag("MELLE MEL", 222, 240, 28, GOLD, -7));
  }

  /* 2. A park jam in St. Mary's Park: the DJ's turntables plugged into the lamppost, speaker columns, the crowd moving under the trees */
  function park() {
    let trees = "";
    [[20, 96, 40], [90, 84, 46], [330, 90, 44], [390, 100, 36]].forEach(t => { trees += '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="' + t[2] + '" fill="#2f6a34"/><rect x="' + (t[0] - 4) + '" y="' + t[1] + '" width="8" height="70" fill="#4a3220"/>'; });
    let crowd = "";
    [[150, "#ff4f5e", "hop"], [176, "#7cf29a", "hop hop2"], [204, "#ffd23f", "hop hop3"], [232, "#6fa8ff", "hop"], [258, "#ff9a2e", "hop hop2"]].forEach(c => { crowd += fig(c[0], 238, c[1], c[2]); });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) +
      /* tenements behind the park */
      '<rect x="120" y="70" width="80" height="80" fill="#6a3a2c"/><rect x="204" y="80" width="70" height="70" fill="#5b3226"/>' +
      (function () { let w = ""; for (let y = 78; y < 146; y += 14) for (let x = 126; x < 270; x += 14) w += '<rect x="' + x + '" y="' + y + '" width="7" height="8" fill="' + ((x + y) % 4 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      '<path d="M0 150Q120 136 240 148T400 146V260H0z" fill="#3e7a36"/>' + trees +
      '<path d="M0 196H400V260H0z" fill="#8a8478"/>' +
      /* lamppost with the cable running down to the DJ table */
      '<rect x="56" y="70" width="6" height="130" fill="#2f3a33"/><path d="M59 70q12 -12 26 -4" stroke="#2f3a33" stroke-width="4" fill="none"/><ellipse cx="88" cy="68" rx="9" ry="4" fill="#ffe9a8" class="flk"/>' +
      '<rect x="54" y="150" width="10" height="12" fill="#5a5f66"/><path d="M64 156q30 0 30 28q0 14 20 12" stroke="#111" stroke-width="2.5" fill="none"/>' +
      /* DJ table: two turntables and a mixer */
      '<rect x="80" y="190" width="120" height="8" fill="#5a3a20"/><rect x="86" y="198" width="6" height="40" fill="#5a3a20"/><rect x="188" y="198" width="6" height="40" fill="#5a3a20"/>' +
      '<rect x="84" y="174" width="48" height="16" rx="2" fill="#2b2b33"/><rect x="148" y="174" width="48" height="16" rx="2" fill="#2b2b33"/><rect x="134" y="176" width="12" height="14" fill="#444"/>' +
      '<g class="spin"><ellipse cx="108" cy="178" rx="18" ry="4" fill="#111"/><rect x="104" y="176" width="6" height="2" fill="' + GOLD + '"/></g>' +
      '<g class="spin"><ellipse cx="172" cy="178" rx="18" ry="4" fill="#111"/><rect x="168" y="176" width="6" height="2" fill="' + RED + '"/></g>' +
      /* speaker columns */
      '<g class="thump"><rect x="12" y="150" width="34" height="90" fill="#1d1d22" stroke="#555"/><circle cx="29" cy="172" r="11" fill="#333"/><circle cx="29" cy="210" r="14" fill="#333"/></g>' +
      '<g class="thump"><rect x="290" y="150" width="34" height="90" fill="#1d1d22" stroke="#555"/><circle cx="307" cy="172" r="11" fill="#333"/><circle cx="307" cy="210" r="14" fill="#333"/></g>' +
      crowd +
      '<g class="note"><text x="120" y="160" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="note note2"><text x="180" y="160" font-size="16" fill="' + GREEN + '">&#9835;</text></g><g class="note note3"><text x="150" y="160" font-size="16" fill="#fff">&#9834;</text></g>' +
      '<rect x="330" y="232" width="64" height="20" rx="3" fill="#111" opacity=".8"/><text x="362" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="' + GOLD + '">PARK JAM</text>' +
      '<rect x="118" y="6" width="164" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="19" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">ST. MARY\'S PARK, THE BRONX</text>',
      sky("g2", "#1b2a4a", "#e9875a"));
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

  /* 5. Hunts Point Av and Southern Blvd, up top from the 6: green street signs, streetlight, the tag wall */
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
      '<rect x="28" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(2, 34, 104, "Hunts Point Av") + sign(2, 56, 104, "Southern Blvd") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="#2e6fc2"/><rect x="12" y="220" width="36" height="12" rx="4" fill="#2e6fc2"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>' +
      boombox(240, 222, .4),
      sky("g5", "#0c1622", "#2a3a4a"));
  }

  window.SCENES = { train, park, club, stoop, corner };
})();
