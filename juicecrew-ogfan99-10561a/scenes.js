/* Juice Crew game (NYC map, Queens: Queensbridge / Long Island City; Marley Marl's Cold Chillin' posse).
   The N and W pulling into 36 Av, up on the el over 31st St (the nearest free stop to the Bridge), Albee Square Mall off Fulton St in
   Downtown Brooklyn (where Big Daddy Kane battled Biz Markie and they became partners), Rock and Soul, the record and DJ shop on 7th Av
   in Midtown (where Kane and Biz dug for breakbeats), Central Park SummerStage at Rumsey Playfield (The Symphony performed live, four mics, Marley on the
   decks), and 31 St & 36 Av under the el with JUICE CREW on the wall and the Queensbridge Houses off behind. 400 x 260 SVGs.
   No logos, no faces. All classes prefixed jc-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jccar{from{transform:translateX(-70px)}to{transform:translateX(470px)}}.jc-car{animation:jccar 7s linear infinite}.jc-car2{animation-delay:-3.6s}' +
    '@keyframes jcblink{0%,100%{opacity:.3}50%{opacity:1}}.jc-bl{animation:jcblink 1.6s ease-in-out infinite}.jc-bl2{animation-delay:.55s}.jc-bl3{animation-delay:1.1s}' +
    '@keyframes jcflick{0%,100%{opacity:1}46%{opacity:.85}50%{opacity:.3}54%{opacity:.95}}.jc-flk{animation:jcflick 2.6s infinite}' +
    '@keyframes jcbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.jc-bob{animation:jcbob .55s ease-in-out infinite}.jc-bob2{animation-delay:.27s}' +
    '@keyframes jcspin{to{transform:rotate(360deg)}}.jc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:jcspin 1.6s linear infinite}' +
    '@keyframes jcsweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.jc-beam{transform-box:fill-box;transform-origin:50% 0%;animation:jcsweep 3.2s ease-in-out infinite}.jc-beam2{animation-delay:-1.6s}' +
    '@keyframes jcnote{0%{transform:translateY(0);opacity:0}25%{opacity:1}100%{transform:translateY(-36px);opacity:0}}.jc-note{animation:jcnote 2.4s ease-out infinite}.jc-note2{animation-delay:.8s}.jc-note3{animation-delay:1.6s}' +
    '@keyframes jcwave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.jc-wv{transform-box:fill-box;transform-origin:50% 50%;animation:jcwave .5s ease-in-out infinite}.jc-wv2{animation-delay:.17s}.jc-wv3{animation-delay:.34s}' +
    '@keyframes jcleaf{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}.jc-leaf{animation:jcleaf 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (6 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ffa62b", RED = "#e63b2e", CREAM = "#f4ead8", YEL = "#fccc0a", MINT = "#7fd1ae";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* faceless figure: head + body, x = centre, y = top of head */
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const greenSign = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 12, "#fff");

  /* 1. 36 Av (N, W), elevated over 31st St: open-air platform, the canopy, black sign with the yellow N and W, the N rolling in, Dutch Kills rooftops */
  function station() {
    let roofs = "";
    [[0, 120, 60], [62, 108, 46], [110, 126, 70], [182, 112, 54], [238, 122, 66], [306, 104, 50], [358, 118, 42]].forEach(([x, y, w], i) => {
      roofs += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="' + (i % 2 ? "#5a3a33" : "#6b4a3a") + '"/>';
      for (let yy = y + 8; yy < 150; yy += 12) for (let xx = x + 6; xx < x + w - 6; xx += 12) roofs += '<rect class="jc-bl jc-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffd98a" opacity=".7"/>';
    });
    let win = "";
    for (let x = 34; x < 300; x += 34) win += '<rect x="' + x + '" y="150" width="22" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let ties = "";
    for (let x = 0; x < 400; x += 14) ties += '<rect x="' + x + '" y="196" width="8" height="4" fill="#3a2f28"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs1)"/>' + stars(10) + roofs +
      /* canopy */
      '<rect x="0" y="56" width="400" height="10" fill="#5b6b5f"/><path d="M0 66h400l-12 8H12z" fill="#43514a"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="128" fill="#4d5d52"/>').join("") +
      [90, 190, 290].map((x, i) => '<rect class="jc-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 18) + '" y="74" width="36" height="5" rx="2" fill="#fff8d6"/>').join("") +
      /* sign */
      '<rect x="96" y="88" width="208" height="30" rx="3" fill="#111"/><rect x="96" y="88" width="208" height="3" fill="#fff"/>' +
      '<text x="110" y="109" ' + font + ' font-size="16" fill="#fff">36 Av</text>' + bullet(252, 104, "N", YEL, 1) + bullet(278, 104, "W", YEL, 1) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="14" y="140" width="300" height="52" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="294" y="148" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(302, 180, "N", YEL, 1) +
        '<rect x="14" y="174" width="270" height="4" fill="' + YEL + '"/><circle cx="26" cy="184" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + el structure + street */
      '<rect x="0" y="192" width="400" height="6" fill="#eab308"/>' + ties +
      '<rect x="0" y="200" width="400" height="12" fill="#3f4a44"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="212" width="10" height="34" fill="#3f4a44"/><path d="M' + (x - 10) + ' 212l15 14l15-14" stroke="#3f4a44" stroke-width="4" fill="none"/>').join("") +
      '<rect x="0" y="244" width="400" height="16" fill="#2c2c30"/>' +
      '<g class="jc-car"><rect x="0" y="246" width="40" height="10" rx="3" fill="' + ORANGE + '"/></g><g class="jc-car jc-car2"><rect x="0" y="246" width="40" height="10" rx="3" fill="#7fb0d9"/></g>' +
      txt("31 ST BELOW", 352, 238, 8, CREAM, 'letter-spacing="2" opacity=".8"'),
      sky("jcs1", "#1b1638", "#e7865a"));
  }

  /* 2. Albee Square Mall off Fulton St, Downtown Brooklyn, mid-80s: the wide tan entrance, the lit name band, a circle of kids around a battle, a box blasting */
  function albee() {
    let chase = "";
    for (let x = 60; x < 344; x += 12) chase += '<circle class="jc-bl jc-bl' + (x / 12 % 3 + 1) + '" cx="' + x + '" cy="64" r="2.2" fill="' + ORANGE + '"/>';
    let doors = "";
    for (let x = 88; x < 312; x += 28) doors += '<rect x="' + x + '" y="112" width="24" height="70" fill="#2a3a46" stroke="#b9b2a4" stroke-width="2"/><rect x="' + (x + 3) + '" y="116" width="18" height="30" fill="#ffe1a8" opacity=".55"/>';
    const crowd = [30, 52, 74, 326, 348, 370].map((x, i) => person(x, 192 + (i % 2) * 4, i % 3 ? "#1d1d22" : "#2b2530", "jc-bob" + (i % 2 ? " jc-bob2" : ""))).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jcs2)"/>' +
      /* towers of downtown behind */
      '<rect x="0" y="20" width="44" height="90" fill="#3a3f52"/><rect x="356" y="10" width="44" height="100" fill="#3a3f52"/><rect x="300" y="34" width="40" height="76" fill="#454b60"/>' +
      /* the mall front */
      '<rect x="40" y="50" width="320" height="140" fill="#c9b79a"/><rect x="40" y="50" width="320" height="8" fill="#a8977c"/>' +
      '<rect x="40" y="70" width="320" height="34" fill="#7a2e22"/>' + chase +
      txt("ALBEE SQUARE MALL", 200, 94, 20, "#ffe9b8", 'letter-spacing="2"') +
      doors +
      /* sidewalk */
      '<rect x="0" y="190" width="400" height="70" fill="#8b8679"/><rect x="0" y="190" width="400" height="4" fill="#a7a296"/>' +
      txt("FULTON ST", 200, 252, 10, "#3b382f", 'letter-spacing="4"') +
      /* the battle: two MCs in the middle, a boombox, sound waves */
      person(176, 184, "#121214", "jc-bob") + person(224, 184, "#121214", "jc-bob jc-bob2") +
      '<rect x="186" y="214" width="28" height="16" rx="3" fill="#222"/><circle cx="193" cy="222" r="5" fill="#555"/><circle cx="207" cy="222" r="5" fill="#555"/><rect x="195" y="210" width="10" height="4" fill="#888"/>' +
      [230, 238, 246].map((x, i) => '<rect class="jc-wv jc-wv' + (i + 1) + '" x="' + x + '" y="214" width="3" height="16" rx="1.5" fill="' + ORANGE + '"/>').join("") +
      [170, 162, 154].map((x, i) => '<rect class="jc-wv jc-wv' + (i + 1) + '" x="' + x + '" y="214" width="3" height="16" rx="1.5" fill="' + ORANGE + '"/>').join("") +
      crowd + person(110, 196, "#26222b", "jc-bob") + person(290, 196, "#26222b", "jc-bob jc-bob2") +
      /* a gold rope chain glinting in a kiosk window */
      '<path d="M58 140q14 18 28 0" stroke="#f2c94c" stroke-width="3" fill="none"/><circle class="jc-bl" cx="72" cy="149" r="2" fill="#fff"/>' +
      '<path d="M316 140q14 18 28 0" stroke="#f2c94c" stroke-width="3" fill="none"/><circle class="jc-bl jc-bl2" cx="330" cy="149" r="2" fill="#fff"/>',
      sky("jcs2", "#20304a", "#b26d4a"));
  }

  /* 3. Rock and Soul on 7th Av by Penn Station: the record + DJ gear shop, striped awning, sleeves in the window, a record spinning, crates of breaks out front, a cab going by */
  function rocksoul() {
    let brick = "";
    for (let y = 30; y < 200; y += 8) for (let x = (y / 8) % 2 ? 0 : -10; x < 400; x += 20) brick += '<rect x="' + x + '" y="' + y + '" width="19" height="7" fill="#8a4a36"/>';
    const sleeve = (x, y, c1, c2) => '<rect x="' + x + '" y="' + y + '" width="30" height="30" fill="' + c1 + '"/><circle cx="' + (x + 15) + '" cy="' + (y + 15) + '" r="9" fill="' + c2 + '"/>';
    let awn = "";
    for (let x = 30; x < 370; x += 20) awn += '<path d="M' + x + ' 78h20l-3 16h-14z" fill="' + (x % 40 ? "#b31d1d" : "#f4ead8") + '"/>';
    let crates = "";
    [[40, ORANGE], [96, "#4a7bd0"], [262, MINT], [318, RED]].forEach(([x, c]) => {
      crates += '<rect x="' + x + '" y="196" width="44" height="30" fill="#6b4a2a" stroke="#3a2614" stroke-width="2"/>';
      for (let i = 0; i < 5; i++) crates += '<rect x="' + (x + 4 + i * 8) + '" y="184" width="6" height="16" fill="' + (i % 2 ? c : "#222") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="#7a3f2e"/>' + brick +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2430"/>' +
      '<rect x="30" y="40" width="340" height="36" fill="#141414"/>' +
      txt("RECORDS &amp; DJ GEAR", 180, 66, 18, "#ffe9b8", 'letter-spacing="2"') + txt("7TH AV", 344, 52, 7, ORANGE, 'letter-spacing="1"') +
      awn +
      /* window */
      '<rect x="40" y="96" width="200" height="84" fill="#20242c" stroke="#d8cfbf" stroke-width="3"/>' +
      sleeve(50, 104, ORANGE, "#222") + sleeve(86, 104, "#4a7bd0", "#ffe9b8") + sleeve(122, 104, RED, "#111") + sleeve(158, 104, MINT, "#222") + sleeve(194, 104, "#f2c94c", RED) +
      '<g class="jc-spin"><circle cx="110" cy="158" r="17" fill="#111"/><circle cx="110" cy="158" r="11" fill="none" stroke="#333"/><circle cx="110" cy="158" r="5" fill="' + ORANGE + '"/><path d="M110 141v6" stroke="#666" stroke-width="2"/></g>' +
      '<rect x="150" y="146" width="80" height="26" fill="#2f3440"/>' + txt("BREAKS", 190, 164, 11, ORANGE, 'letter-spacing="2"') +
      /* door */
      '<rect x="270" y="96" width="70" height="98" fill="#3a2a22" stroke="#d8cfbf" stroke-width="3"/><rect x="282" y="106" width="46" height="40" fill="#ffd98a" opacity=".55"/><circle cx="330" cy="150" r="3" fill="#d8cfbf"/>' +
      /* notes rising */
      ['jc-note', 'jc-note jc-note2', 'jc-note jc-note3'].map((c, i) => '<text class="' + c + '" x="' + (290 + i * 14) + '" y="132" font-size="16" fill="#fff">&#9835;</text>').join("") +
      /* sidewalk */
      '<rect x="0" y="226" width="400" height="34" fill="#8b8679"/><rect x="0" y="226" width="400" height="4" fill="#a7a296"/>' + crates +
      person(214, 196, "#1d1d22", "jc-bob") + person(240, 198, "#2b2530", "jc-bob jc-bob2") +
      '<g class="jc-car"><rect x="0" y="240" width="46" height="14" rx="4" fill="#f7c600"/><rect x="14" y="235" width="16" height="6" rx="2" fill="#f7c600"/><circle cx="10" cy="255" r="4" fill="#111"/><circle cx="36" cy="255" r="4" fill="#111"/></g>');
  }

  /* 4. Central Park SummerStage, Rumsey Playfield: the black truss stage under the trees, four mics up front, the decks in the middle, beams sweeping, Midtown peeking over the leaves */
  function summerstage() {
    let trees = "";
    for (let x = -10; x < 420; x += 34) trees += '<circle class="jc-leaf" style="animation-delay:-' + (x % 3) + 's" cx="' + x + '" cy="' + (96 + (x * 7) % 14) + '" r="26" fill="' + ((x / 34) % 2 ? "#1f4a2a" : "#2a5a33") + '"/>';
    const mic = x => '<rect x="' + (x - 1) + '" y="150" width="2" height="38" fill="#c9ced6"/><rect x="' + (x - 3) + '" y="144" width="6" height="9" rx="3" fill="#222" stroke="#999"/><path d="M' + (x - 8) + ' 190h16" stroke="#c9ced6" stroke-width="2"/>';
    let hands = "";
    for (let x = 8; x < 400; x += 22) hands += '<g class="jc-bob' + (x % 44 ? " jc-bob2" : "") + '"><circle cx="' + x + '" cy="' + (230 + (x % 3) * 3) + '" r="9" fill="#141218"/><path d="M' + (x + 4) + ' ' + (224 + (x % 3) * 3) + 'l6-16" stroke="#141218" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs4)"/>' + stars(12) +
      /* Midtown over the trees */
      '<rect x="40" y="30" width="22" height="70" fill="#2b2f45"/><rect x="70" y="14" width="16" height="86" fill="#323756"/><rect x="300" y="22" width="20" height="78" fill="#2b2f45"/><rect x="330" y="40" width="26" height="60" fill="#323756"/>' +
      trees +
      /* stage roof + truss */
      '<rect x="60" y="70" width="280" height="14" fill="#1a1a1e"/>' +
      (() => { let t = ""; for (let x = 60; x < 340; x += 14) t += '<path d="M' + x + ' 70l7 14l7-14" stroke="#55565c" stroke-width="1.5" fill="none"/>'; return t; })() +
      '<rect x="60" y="84" width="10" height="110" fill="#1a1a1e"/><rect x="330" y="84" width="10" height="110" fill="#1a1a1e"/>' +
      /* light beams */
      '<path class="jc-beam" d="M120 84l-30 110h60z" fill="' + ORANGE + '" opacity=".28"/><path class="jc-beam jc-beam2" d="M280 84l-30 110h60z" fill="' + MINT + '" opacity=".28"/>' +
      '<path class="jc-beam jc-beam2" d="M200 84l-26 110h52z" fill="#fff" opacity=".16"/>' +
      /* backdrop */
      '<rect x="70" y="84" width="260" height="104" fill="#120f18" opacity=".6"/>' +
      txt("THE SYMPHONY", 200, 116, 22, ORANGE, 'letter-spacing="3"') + txt("SUMMERSTAGE  CENTRAL PARK", 200, 132, 8, CREAM, 'letter-spacing="3"') +
      /* the decks */
      '<rect x="176" y="164" width="48" height="22" rx="2" fill="#2a2a30" stroke="#888"/><g class="jc-spin"><circle cx="190" cy="172" r="7" fill="#111" stroke="#666"/></g><g class="jc-spin"><circle cx="210" cy="172" r="7" fill="#111" stroke="#666"/></g>' +
      mic(100) + mic(140) + mic(260) + mic(300) +
      /* stage floor */
      '<rect x="56" y="188" width="288" height="10" fill="#2e2a26"/>' +
      hands,
      sky("jcs4", "#0d1026", "#3a2a52"));
  }

  /* 5. 31 St & 36 Av under the N/W el: green street signs, the steel overhead, JUICE CREW on the wall, the Queensbridge Houses' brick off behind */
  function corner() {
    let qb = "";
    [[20, 70, 60], [96, 82, 56], [168, 66, 64]].forEach(([x, y, w]) => {
      qb += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="#8a4a36"/>';
      for (let yy = y + 8; yy < 136; yy += 10) for (let xx = x + 5; xx < x + w - 5; xx += 10) qb += '<rect class="jc-bl jc-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="5" fill="#ffd98a" opacity=".7"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#jcs5)"/>' + stars(14) + qb +
      txt("QUEENSBRIDGE", 132, 58, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* the el overhead */
      '<rect x="0" y="22" width="400" height="16" fill="#3f4a44"/><rect x="0" y="38" width="400" height="4" fill="#2f3833"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 20) g += '<path d="M' + x + ' 22l10 16l10-16" stroke="#56635b" stroke-width="2" fill="none"/>'; return g; })() +
      '<rect x="250" y="42" width="10" height="100" fill="#3f4a44"/>' +
      /* the wall */
      '<rect x="0" y="130" width="300" height="96" fill="#43454c"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h300" stroke="#383a40" stroke-width="1"/>'; return b; })() +
      tag("JUICE CREW", 14, 196, 44, ORANGE, -5) + tag("SIR JUICE", 170, 220, 18, RED, -4) + tag("NEXT UP", 22, 222, 15, CREAM, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="jc-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + MINT + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="352" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      greenSign(304, 66, 92, "31 St") + greenSign(304, 92, 92, "36 Av") +
      '<circle class="jc-flk" cx="354" cy="60" r="4" fill="#fff6c2"/>',
      sky("jcs5", "#0a0c1a", "#3a2c4a"));
  }

  window.SCENES = { station: station, albee: albee, rocksoul: rocksoul, summerstage: summerstage, corner: corner };
})();
