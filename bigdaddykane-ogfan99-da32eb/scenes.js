/* Bed-Stuy opening scenes for the Big Daddy Kane game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.2}}' +
    '.ch{animation:chase .9s steps(1) infinite}.ch2{animation-delay:.45s}' +
    '@keyframes pole{from{transform:translateY(0)}to{transform:translateY(-16px)}}' +
    '.pole{animation:pole 1s linear infinite}' +
    '@keyframes drift{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}' +
    '.cloud{animation:drift 26s linear infinite}.cloud2{animation-delay:-13s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}' +
    '.bob{animation:bob 1.6s ease-in-out infinite}.bob2{animation-delay:.5s}.bob3{animation-delay:1s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}' +
    '.note{animation:note 2.6s ease-out infinite}.note2{animation-delay:1.3s}' +
    '@keyframes walk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.walk{animation:walk 12s linear infinite}' +
    '@keyframes glint{0%,80%,100%{opacity:0}88%{opacity:1}}' +
    '.glint{animation:glint 2.8s infinite}' +
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
  const ACE = "#0039a6", GOLD = "#f2c94c", CYAN = "#38e8ff", RED = "#e0453a";

  /* 1. The A pulling into Nostrand Av, underground under Fulton St: cream tile, maize band with brown border, exit sign to Fulton St */
  function train() {
    let tiles = "";
    for (let y = 0; y < 180; y += 9) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8d0bb" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 18) tiles += '<path d="M' + x + ' 0v180" stroke="#d8d0bb" stroke-width="1"/>';
    let windows = "";
    for (let x = 60; x < 330; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#fff4c9" opacity=".9"/>';
    let lights = "";
    for (let x = 20; x < 400; x += 100) lights += '<rect class="flk' + (x % 200 ? " flk2" : "") + '" x="' + x + '" y="3" width="60" height="5" rx="2" fill="#fffbe6"/>';
    let cols = "";
    [40, 360].forEach(x => { cols += '<rect x="' + (x - 7) + '" y="12" width="14" height="164" fill="#1d1d1f"/><rect x="' + (x - 11) + '" y="12" width="22" height="5" fill="#1d1d1f"/>'; });
    return svg(
      '<rect width="400" height="180" fill="#eee7d4"/>' + tiles +
      '<rect x="0" y="0" width="400" height="11" fill="#26221d"/>' + lights +
      '<rect x="0" y="20" width="400" height="20" fill="#7a3f12"/><rect x="0" y="24" width="400" height="12" fill="#f0c447"/>' +
      '<rect x="230" y="44" width="80" height="20" rx="2" fill="#111"/><text x="270" y="58" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">EXIT ↑ Fulton St</text>' +
      '<rect x="66" y="70" width="230" height="34" rx="4" fill="#111"/><rect x="66" y="70" width="230" height="4" fill="#fff"/>' +
      '<text x="80" y="95" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Nostrand Av</text>' +
      bullet(246, 88, "A", ACE) + bullet(272, 88, "C", ACE) + cols +
      /* the A train slides in from the left */
      '<g class="anim-train">' +
        '<rect x="50" y="112" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="50" y="154" width="300" height="5" fill="' + ACE + '"/>' + windows +
        '<circle cx="344" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(336, 132, "A", ACE) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#231e19"/>' +
      tag("JUICE CREW", 24, 238, 28, GOLD, -4) + tag("KANE", 290, 242, 32, CYAN, -8),
      "");
  }

  /* 2. The Slave Theater on Fulton St: the old brick movie house with its black-and-white marquee, bulbs chasing, a red-black-green banner */
  function slave() {
    let bricks = "";
    for (let y = 40; y < 196; y += 8) for (let x = ((y / 8) % 2) * 9 + 60; x < 340; x += 18) bricks += '<rect x="' + x + '" y="' + y + '" width="16" height="6" fill="#8a3b26" opacity=".55"/>';
    let bulbs = "";
    for (let x = 72; x <= 328; x += 12) bulbs += '<circle class="ch' + ((x / 12) % 2 ? " ch2" : "") + '" cx="' + x + '" cy="112" r="2.4" fill="#fff3b0"/><circle class="ch' + ((x / 12) % 2 ? "" : " ch2") + '" cx="' + x + '" cy="146" r="2.4" fill="#fff3b0"/>';
    let blade = "";
    "SLAVE".split("").forEach((c, i) => { blade += '<text x="200" y="' + (50 + i * 11) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#111">' + c + '</text>'; });
    let doors = "";
    for (let x = 140; x < 260; x += 30) doors += '<rect x="' + x + '" y="160" width="24" height="36" fill="#1a1410" stroke="' + GOLD + '" stroke-width="1.5"/><rect x="' + (x + 4) + '" y="164" width="16" height="14" fill="#5a4a30" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) +
      '<rect x="0" y="120" width="60" height="80" fill="#3a2a3e"/><rect x="340" y="110" width="60" height="90" fill="#33283a"/>' +
      '<rect x="56" y="34" width="288" height="166" fill="#a5492f"/>' + bricks +
      '<rect x="52" y="30" width="296" height="8" fill="#d8c9a8"/>' +
      '<rect x="80" y="44" width="80" height="50" fill="#2a1d18" opacity=".6"/><rect x="240" y="44" width="80" height="50" fill="#2a1d18" opacity=".6"/>' +
      /* vertical blade sign */
      '<rect x="190" y="38" width="20" height="62" fill="#f7f3ea" stroke="#111" stroke-width="2"/>' + blade +
      /* black-and-white marquee */
      '<path d="M64 106h272l10 10v28l-10 10H64l-10-10v-28z" fill="#111"/>' +
      '<rect x="72" y="116" width="256" height="26" fill="#f7f3ea"/>' +
      '<text x="200" y="128" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" letter-spacing="2" fill="#111">THE SLAVE THEATER</text>' +
      '<text x="200" y="139" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8" letter-spacing="1.5" fill="#111">HIP HOP SHOWCASE TONIGHT</text>' + bulbs +
      doors +
      /* red-black-green banner over the ticket booth */
      '<rect x="88" y="164" width="40" height="8" fill="#c8102e"/><rect x="88" y="172" width="40" height="8" fill="#111"/><rect x="88" y="180" width="40" height="8" fill="#1f8a3a"/>' +
      '<rect x="272" y="160" width="40" height="34" fill="#3a2618" stroke="' + GOLD + '" stroke-width="1.5"/><text x="292" y="180" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7" fill="' + GOLD + '">TICKETS</text>' +
      '<rect x="0" y="200" width="400" height="12" fill="#8d8a84"/><rect x="0" y="212" width="400" height="48" fill="#2b2b30"/>' +
      '<path d="M0 236h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="walk"><rect x="0" y="178" width="8" height="22" rx="3" fill="#1a1a1a"/><circle cx="4" cy="174" r="5" fill="#1a1a1a"/><rect x="-1" y="170" width="10" height="5" fill="#1a1a1a"/></g>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="#8d939b">FULTON ST · BED-STUY</text>',
      sky("g2", "#140c1e", "#5a2a4a"));
  }

  /* 3. The Alhambra on Nostrand Av: the long red-brick apartment house with terracotta trim, slate-topped towers and arched loggias */
  function alhambra() {
    let body = "";
    const towers = [30, 110, 200, 290, 362];
    /* main block */
    body += '<rect x="18" y="80" width="364" height="120" fill="#b5522f"/>';
    for (let y = 92; y < 196; y += 22) for (let x = 30; x < 376; x += 22) body += '<rect x="' + x + '" y="' + y + '" width="9" height="13" fill="#2b2230"/><rect x="' + x + '" y="' + y + '" width="9" height="3" fill="#e6c9a0"/>';
    /* terracotta string courses */
    [86, 130, 174].forEach(y => { body += '<rect x="18" y="' + y + '" width="364" height="4" fill="#e3b98a"/>'; });
    /* towers with pyramidal slate roofs and finials */
    towers.forEach((x, i) => {
      body += '<rect x="' + (x - 16) + '" y="56" width="32" height="144" fill="#a8482a"/>' +
        '<path d="M' + (x - 19) + ' 58L' + x + ' 26L' + (x + 19) + ' 58z" fill="#4a5560"/><rect x="' + (x - 1) + '" y="16" width="2" height="12" fill="#2a2a2a"/>' +
        '<rect x="' + (x - 18) + '" y="56" width="36" height="4" fill="#e3b98a"/>' +
        '<path d="M' + (x - 8) + ' 82v-8a8 8 0 0 1 16 0v8z" fill="#2b2230"/>';
      for (let y = 100; y < 180; y += 22) body += '<rect x="' + (x - 5) + '" y="' + y + '" width="10" height="13" fill="#2b2230"/><rect x="' + (x - 5) + '" y="' + y + '" width="10" height="3" fill="#e6c9a0"/>';
    });
    /* arched loggia across the top floor */
    for (let x = 52; x < 360; x += 16) if (!towers.some(t => Math.abs(t - x) < 22)) body += '<path d="M' + x + ' 80v-8a5 5 0 0 1 10 0v8z" fill="#2b2230" stroke="#e3b98a" stroke-width="1"/>';
    /* ground-floor arcade */
    for (let x = 34; x < 376; x += 28) body += '<path d="M' + x + ' 200v-14a9 9 0 0 1 18 0v14z" fill="#2b2230" stroke="#e3b98a" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cloud"><ellipse cx="0" cy="30" rx="26" ry="8" fill="#fff" opacity=".7"/><ellipse cx="18" cy="26" rx="16" ry="7" fill="#fff" opacity=".7"/></g>' +
      '<g class="cloud cloud2"><ellipse cx="0" cy="48" rx="22" ry="6" fill="#fff" opacity=".6"/></g>' +
      body +
      '<rect x="0" y="200" width="400" height="14" fill="#9b968e"/><rect x="0" y="214" width="400" height="46" fill="#3a3a40"/>' +
      '<path d="M0 238h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* B44 bus rolling down Nostrand */
      '<g class="walk"><rect x="-10" y="214" width="70" height="26" rx="5" fill="#e9ecef" stroke="#555" stroke-width="1.5"/><rect x="-10" y="220" width="70" height="3" fill="' + ACE + '"/><rect x="-4" y="225" width="58" height="8" fill="#3b4a5a"/><circle cx="4" cy="242" r="4" fill="#222"/><circle cx="46" cy="242" r="4" fill="#222"/></g>' +
      '<text x="200" y="256" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="#cfd4da">NOSTRAND AV · THE ALHAMBRA</text>',
      sky("g3", "#5fa8d8", "#f3d6a8"));
  }

  /* 4. The barbershop: the high-top fade chart in the window, the barber pole spinning, a gold rope chain glinting, music playing */
  function barber() {
    let stripes = "";
    for (let y = -20; y < 120; y += 16) stripes += '<path d="M0 ' + y + 'l16 -10v8l-16 10z" fill="#d62828"/><path d="M0 ' + (y + 8) + 'l16 -10v8l-16 10z" fill="#1d4e9e"/>';
    const fade = (x, y, h) =>
      '<rect x="' + (x - 11) + '" y="' + (y - h) + '" width="22" height="' + h + '" rx="2" fill="#1a1410"/>' +
      '<path d="M' + (x - 12) + ' ' + y + 'q0 22 12 26q12-4 12-26z" fill="#8a5a3a"/>' +
      '<path d="M' + (x - 12) + ' ' + y + 'h24v5h-24z" fill="#3a2a20" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="#20151a"/>' +
      '<rect x="20" y="24" width="360" height="176" fill="#2d6f73"/>' +
      '<rect x="20" y="24" width="360" height="26" fill="#111"/>' +
      '<text x="200" y="43" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="3" fill="' + GOLD + '">BARBERSHOP · FADES · TAPERS</text>' +
      /* window */
      '<rect x="40" y="60" width="220" height="130" fill="#0f2228" stroke="#c9b37a" stroke-width="3"/>' +
      '<rect x="56" y="70" width="188" height="78" fill="#f7f3ea"/>' +
      '<text x="150" y="81" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" fill="#111">THE HIGH-TOP CHART</text>' +
      fade(84, 120, 14) + fade(126, 120, 20) + fade(168, 120, 28) + fade(212, 120, 18) +
      '<text x="84" y="146" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="6" fill="#111">LOW</text><text x="126" y="146" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="6" fill="#111">MID</text><text x="168" y="146" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="6" fill="#111">THE KANE</text><text x="212" y="146" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="6" fill="#111">BOX</text>' +
      /* gold rope chain on a velvet stand */
      '<rect x="70" y="156" width="70" height="28" fill="#3a1030"/><path d="M78 160q27 30 54 0" fill="none" stroke="' + GOLD + '" stroke-width="4" stroke-dasharray="3 2"/>' +
      '<path class="glint" d="M110 172l3-6 3 6-3 6z" fill="#fff"/>' +
      /* boombox with notes */
      '<rect x="160" y="160" width="76" height="26" rx="3" fill="#2a2a2e" stroke="#888" stroke-width="1.5"/><circle cx="176" cy="173" r="9" fill="#111" stroke="#aaa"/><circle cx="220" cy="173" r="9" fill="#111" stroke="#aaa"/><rect x="190" y="166" width="16" height="8" fill="' + CYAN + '"/>' +
      '<text class="note" x="196" y="158" font-size="14" fill="' + GOLD + '">♪</text><text class="note note2" x="206" y="156" font-size="12" fill="' + CYAN + '">♫</text>' +
      /* door */
      '<rect x="280" y="70" width="70" height="130" fill="#1a1a1a" stroke="#c9b37a" stroke-width="3"/><rect x="290" y="80" width="50" height="60" fill="#0f2228"/>' +
      '<text x="315" y="114" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + RED + '">OPEN</text><circle cx="340" cy="150" r="3" fill="' + GOLD + '"/>' +
      /* barber pole */
      '<rect x="356" y="56" width="20" height="8" rx="3" fill="#ddd"/><rect x="358" y="64" width="16" height="96" fill="#fff"/>' +
      '<svg x="358" y="64" width="16" height="96"><g class="pole">' + stripes + '</g></svg>' +
      '<rect x="358" y="64" width="5" height="96" fill="#fff" opacity=".25"/><rect x="356" y="160" width="20" height="8" rx="3" fill="#ddd"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8d8a84"/><path d="M0 214h400" stroke="#6f6b64" stroke-width="2"/>' +
      tag("SMOOTH", 40, 246, 28, GOLD, -5) + tag("OPERATOR", 210, 248, 26, CYAN, -4),
      "");
  }

  /* 5. Nostrand Av and Halsey St: green street signs, a streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 210; y += 10) for (let x = ((y / 10) % 2) * 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#6a3a2c" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="200" cy="30" r="12" fill="#fff1c7" opacity=".9"/>' +
      '<rect x="0" y="66" width="400" height="144" fill="#7d4433"/>' + bricks +
      tag("BIG DADDY KANE", 70, 146, 34, GOLD, -5) +
      tag("NO HALF STEPPIN", 120, 182, 26, CYAN, -3) +
      tag("JUICE CREW", 30, 196, 18, RED, -8) +
      
      /* street sign post */
      '<rect x="384" y="20" width="6" height="190" fill="#5b6067"/>' +
      '<rect x="250" y="14" width="142" height="22" rx="3" fill="#0d6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="321" y="30" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Nostrand Av</text>' +
      '<rect x="262" y="40" width="118" height="22" rx="3" fill="#0d6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="321" y="56" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Halsey St</text>' +
      /* streetlight */
      '<rect x="20" y="20" width="5" height="190" fill="#4b5058"/><path d="M22 22h34" stroke="#4b5058" stroke-width="4"/>' +
      '<rect class="flk" x="48" y="22" width="16" height="6" rx="2" fill="#ffe7a0"/>' +
      '<path class="flk" d="M48 28l-14 60h44l-14-60z" fill="#ffe7a0" opacity=".12"/>' +
      '<rect x="0" y="210" width="400" height="12" fill="#9b968e"/><rect x="0" y="222" width="400" height="38" fill="#2b2b30"/>' +
      '<text x="200" y="248" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="#8d939b">BEDFORD-STUYVESANT · BROOKLYN</text>',
      sky("g5", "#0c0a1c", "#3a2350"));
  }

  window.SCENES = { train, slave, alhambra, barber, corner };
})();
