/* Rob Base & DJ E-Z Rock game (NYC map, Manhattan: Harlem, where Rob and Skip met in grade school and came up on the block-party circuit).
   1. W 125 St & Morningside Av: the M100 / M101 bus pulling in on 125th (the Harlem subway stops are all taken on the map).
   2. The "It Takes Two" video shoot on 125th Street, 1988: camera rolling, lights up, Rob on the mic, E-Z on the decks, the crowd that walked up.
   3. Zodiac II in the Bronx, Nov 25 1987: the club front with the flyer (Rob Base & E-Z Rock with the Crash Crew), bulbs chasing, the line outside.
   4. Hillside Sound in Englewood, NJ, where the It Takes Two album was cut: the console, tape reels spinning, the plaque on the wall.
   5. Morningside Av & W 125 St: green street signs, the wall tagged ROB BASE & E-Z ROCK, Grant's Tomb up on the hill behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rbcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.rb-car{animation:rbcar 7s linear infinite}.rb-car2{animation-delay:-3.5s}' +
    '@keyframes rbblink{0%,100%{opacity:.25}50%{opacity:1}}.rb-bl{animation:rbblink 1.6s ease-in-out infinite}.rb-bl2{animation-delay:.5s}.rb-bl3{animation-delay:1s}' +
    '@keyframes rbflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.rb-flk{animation:rbflick 2.4s infinite}' +
    '@keyframes rbrec{0%,49%{opacity:1}50%,100%{opacity:.15}}.rb-rec{animation:rbrec 1s steps(1) infinite}' +
    '@keyframes rbspin{to{transform:rotate(360deg)}}.rb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rbspin 1.2s linear infinite}.rb-spin2{animation-duration:2.2s}' +
    '@keyframes rbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.rb-bob{animation:rbbob .5s ease-in-out infinite}.rb-bob2{animation-delay:.25s}' +
    '@keyframes rbmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.rb-mt{transform-box:fill-box;transform-origin:50% 100%;animation:rbmeter .6s ease-in-out infinite}.rb-mt2{animation-delay:.2s}.rb-mt3{animation-delay:.4s}' +
    '@keyframes rbsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.rb-beam{transform-box:fill-box;transform-origin:50% 0%;animation:rbsweep 3s ease-in-out infinite}.rb-beam2{animation-delay:-1.5s}' +
    '@keyframes rbchase{0%,100%{fill:#ffd23f}50%{fill:#5a3a10}}.rb-ch{animation:rbchase .8s steps(1) infinite}.rb-ch2{animation-delay:-.4s}' +
    '@keyframes rbcloud{from{transform:translateX(-60px)}to{transform:translateX(440px)}}.rb-cloud{animation:rbcloud 26s linear infinite}.rb-cloud2{animation-delay:-13s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const plate = (x, y, t) => '<rect x="' + (x - 22) + '" y="' + (y - 9) + '" width="44" height="16" rx="3" fill="#0039a6"/>' + txt(t, x, y + 3.5, 10, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#ffd23f", RED = "#ff5a5f", TEAL = "#3ec1d3", CREAM = "#f6eedc";

  /* 1. W 125 St & Morningside Av, summer afternoon: storefront row, the black stop sign with the M100 and M101 plates, the bus pulling in */
  function rbstop() {
    const shop = (x, w, h, col, aw) => { let g = '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>';
      for (let yy = 150 - h + 10; yy < 102; yy += 16) for (let xx = x + 8; xx < x + w - 12; xx += 18) g += '<rect x="' + xx + '" y="' + yy + '" width="9" height="11" fill="#cfe2f5" opacity=".85"/>';
      g += '<path d="M' + x + ' 108h' + w + 'l-6 12h-' + (w - 12) + 'z" fill="' + aw + '"/><rect x="' + (x + 6) + '" y="122" width="' + (w - 12) + '" height="26" fill="#2b2f38"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#rba)"/>' +
      '<g class="rb-cloud"><ellipse cx="40" cy="30" rx="26" ry="9" fill="#fff" opacity=".85"/><ellipse cx="58" cy="25" rx="16" ry="8" fill="#fff" opacity=".85"/></g>' +
      '<g class="rb-cloud rb-cloud2"><ellipse cx="40" cy="52" rx="20" ry="7" fill="#fff" opacity=".7"/></g>' +
      shop(0, 96, 100, "#b5653f", RED) + shop(98, 84, 116, "#8d8f96", TEAL) + shop(184, 100, 92, "#c58a4a", GOLD) + shop(286, 114, 108, "#7b4e6a", "#2e8b57") +
      '<rect x="0" y="150" width="400" height="20" fill="#b9b6ae"/><rect x="0" y="168" width="400" height="92" fill="#3b3e44"/>' +
      '<path d="M0 224h400" stroke="#f4d03f" stroke-width="3" stroke-dasharray="22 16"/>' +
      '<rect x="40" y="70" width="4" height="82" fill="#2a2c30"/><path d="M42 70q14-6 22 2" stroke="#2a2c30" stroke-width="3" fill="none"/><ellipse cx="66" cy="74" rx="7" ry="3" fill="#2a2c30"/>' +
      /* the stop sign */
      '<rect x="330" y="40" width="5" height="112" fill="#30343a"/>' +
      '<rect x="196" y="14" width="200" height="62" rx="4" fill="#111"/><rect x="196" y="14" width="200" height="3" fill="#fff"/>' +
      txt("W 125 St &amp; Morningside Av", 296, 36, 12, "#fff") + txt("BUS STOP", 236, 64, 10, GOLD, 'letter-spacing="2"') +
      plate(316, 60, "M100") + plate(366, 60, "M101") +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="14" y="148" width="240" height="66" rx="8" fill="#f1f3f5"/><rect x="14" y="188" width="240" height="9" fill="#0039a6"/>' +
        '<rect x="150" y="151" width="98" height="11" rx="1" fill="#111"/><text x="199" y="159.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb000" letter-spacing="1">M101 125 ST</text>' +
        [26, 70, 114, 158].map(x => '<rect x="' + x + '" y="165" width="38" height="18" rx="2" fill="#24324a"/>').join("") +
        '<rect x="208" y="165" width="40" height="38" rx="3" fill="#1d2a3c"/>' +
        '<circle cx="60" cy="216" r="11" fill="#151515"/><circle cx="60" cy="216" r="4" fill="#888"/><circle cx="204" cy="216" r="11" fill="#151515"/><circle cx="204" cy="216" r="4" fill="#888"/>' +
        '<circle class="rb-bl" cx="250" cy="206" r="3" fill="#fff6c2"/>' +
      '</g>' +
      person(300, 124, "#1e1e24") + person(318, 128, "#2a2630") +
      txt("125TH STREET · HARLEM", 130, 248, 10, CREAM, 'letter-spacing="2" opacity=".9"'),
      sky("rba", "#4aa3df", "#f6c27a"));
  }

  /* 2. The It Takes Two video shoot on 125th, 1988: camera on its tripod with the red light, two light stands, the folding table with the decks, the MC with the mic, the crowd that walked up */
  function rbshoot() {
    const crowd = [];
    for (let x = 12; x < 400; x += 24) if (x < 120 || x > 300) crowd.push('<g class="rb-bob' + (x % 48 ? " rb-bob2" : "") + '"><circle cx="' + x + '" cy="204" r="8" fill="#15151b"/><rect x="' + (x - 9) + '" y="212" width="18" height="24" rx="6" fill="#15151b"/></g>');
    return svg(
      '<rect width="400" height="260" fill="url(#rbb)"/>' +
      /* storefronts behind, gates and awnings, no names */
      '<rect x="0" y="40" width="400" height="140" fill="#6d4a3a"/>' +
      [0, 80, 160, 240, 320].map((x, i) => '<rect x="' + (x + 6) + '" y="54" width="68" height="40" fill="#cfe2f5" opacity=".55"/><path d="M' + x + ' 100h80l-6 12h-68z" fill="' + [RED, TEAL, GOLD, "#2e8b57", RED][i] + '"/><rect x="' + (x + 8) + '" y="114" width="64" height="58" fill="#3a3d44"/>' +
        [118, 126, 134, 142, 150, 158, 166].map(y => '<path d="M' + (x + 8) + ' ' + y + 'h64" stroke="#555a63" stroke-width="1"/>').join("")).join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#8e8a82"/><path d="M0 182h400" stroke="#6e6a62" stroke-width="3"/>' +
      /* light stands with beams */
      '<g class="rb-beam"><path d="M70 40l-36 150h72z" fill="#fff6c2" opacity=".18"/></g><g class="rb-beam rb-beam2"><path d="M330 40l-36 150h72z" fill="#fff6c2" opacity=".18"/></g>' +
      [70, 330].map(x => '<rect x="' + (x - 12) + '" y="30" width="24" height="16" rx="2" fill="#20232a"/><rect x="' + (x - 9) + '" y="33" width="18" height="10" fill="#fff8d6"/><path d="M' + x + ' 46v130M' + x + ' 176l-14 12M' + x + ' 176l14 12" stroke="#20232a" stroke-width="3"/>').join("") +
      /* folding table with the decks */
      '<rect x="150" y="140" width="110" height="10" fill="#d7d2c4"/><path d="M158 150l-6 34M252 150l6 34" stroke="#9a958a" stroke-width="3"/>' +
      '<rect x="156" y="126" width="98" height="16" rx="2" fill="#1a1a20"/>' +
      '<ellipse cx="180" cy="130" rx="15" ry="5.5" fill="#111" stroke="#666"/><ellipse class="rb-flk" cx="180" cy="130" rx="4" ry="1.6" fill="' + RED + '"/><path class="rb-bob" d="M192 124l-8 6" stroke="#ccc" stroke-width="2"/>' +
      '<ellipse cx="230" cy="130" rx="15" ry="5.5" fill="#111" stroke="#666"/><ellipse class="rb-flk" style="animation-delay:-1.2s" cx="230" cy="130" rx="4" ry="1.6" fill="' + GOLD + '"/><path d="M242 124l-8 6" stroke="#ccc" stroke-width="2"/>' +
      /* DJ behind the decks, MC out front with the mic (silhouettes) */
      '<g><circle cx="205" cy="96" r="10" fill="#0d0d12"/><rect x="193" y="107" width="24" height="22" rx="8" fill="#0d0d12"/><path d="M193 116l-12 8M217 116l12 8" stroke="#0d0d12" stroke-width="5" stroke-linecap="round"/></g>' +
      '<g class="rb-bob"><circle cx="134" cy="132" r="10" fill="#0d0d12"/><rect x="122" y="143" width="24" height="34" rx="8" fill="#0d0d12"/><path d="M146 150l12 -14" stroke="#0d0d12" stroke-width="5" stroke-linecap="round"/><rect x="155" y="128" width="5" height="10" rx="2" fill="#c9ced6"/></g>' +
      /* the camera on the tripod */
      '<g><rect x="300" y="132" width="52" height="30" rx="4" fill="#26262c"/><rect x="284" y="138" width="18" height="18" rx="3" fill="#3a3a44"/><circle cx="284" cy="147" r="7" fill="#111" stroke="#666"/>' +
      '<circle cx="318" cy="128" r="9" fill="none" stroke="#26262c" stroke-width="4"/><circle cx="338" cy="128" r="9" fill="none" stroke="#26262c" stroke-width="4"/>' +
      '<circle class="rb-rec" cx="344" cy="140" r="3.5" fill="#ff2b2b"/><path d="M326 162l-14 34M326 162v36M326 162l14 34" stroke="#26262c" stroke-width="3"/></g>' +
      /* the clapperboard */
      '<g transform="rotate(-8 60 120)"><rect x="34" y="112" width="56" height="34" fill="#111"/><path d="M34 104h56v8h-56z" fill="#f4f4f4"/><path d="M40 104l6 8M52 104l6 8M64 104l6 8M76 104l6 8" stroke="#111" stroke-width="4"/>' +
      '<text x="62" y="126" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">TAKE</text><text x="62" y="141" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">2</text></g>' +
      crowd.join("") +
      txt("125TH ST · 1988 · VIDEO SHOOT", 200, 252, 10, CREAM, 'letter-spacing="2"'),
      sky("rbb", "#7fb7e0", "#f4dcb0"));
  }

  /* 3. Zodiac II in the Bronx, Nov 25 1987: club front with the chasing bulb sign, the star-sign wheel, the flyer on the wall, the line outside */
  function rbzodiac() {
    let bulbs = "";
    for (let x = 108; x <= 292; x += 12) bulbs += '<circle class="rb-ch' + (x % 24 ? " rb-ch2" : "") + '" cx="' + x + '" cy="58" r="3" fill="' + GOLD + '"/><circle class="rb-ch' + (x % 24 ? "" : " rb-ch2") + '" cx="' + x + '" cy="102" r="3" fill="' + GOLD + '"/>';
    let brick = "";
    for (let y = 112; y < 206; y += 8) for (let x = (y / 8) % 2 ? 24 : 16; x < 384; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#4a2a4a"/>';
    const wheel = (() => { let g = '<g class="rb-spin" style="animation-duration:14s"><circle cx="66" cy="80" r="26" fill="#1b1030" stroke="' + TEAL + '" stroke-width="2"/>';
      for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; g += '<path d="M66 80L' + (66 + 26 * Math.cos(a)).toFixed(1) + ' ' + (80 + 26 * Math.sin(a)).toFixed(1) + '" stroke="' + TEAL + '" stroke-width="1" opacity=".6"/><circle cx="' + (66 + 19 * Math.cos(a + .26)).toFixed(1) + '" cy="' + (80 + 19 * Math.sin(a + .26)).toFixed(1) + '" r="2.2" fill="' + GOLD + '"/>'; }
      return g + '<circle cx="66" cy="80" r="6" fill="' + GOLD + '"/></g>'; })();
    const line = [72, 92, 112, 132].map((x, i) => person(x, 182, i % 2 ? "#181818" : "#26222c", i % 2 ? "rb-bob" : "rb-bob rb-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rbz)"/>' + stars(14) +
      '<rect x="16" y="104" width="368" height="102" fill="#5b3358"/>' + brick +
      /* sign box with bulbs */
      '<rect x="100" y="52" width="200" height="56" rx="6" fill="#140a1e" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text class="rb-flk" x="200" y="90" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" letter-spacing="3" fill="#ff7ad9" stroke="#ff3fbf" stroke-width=".8">ZODIAC II</text>' +
      wheel +
      /* door */
      '<rect x="176" y="140" width="48" height="66" fill="#120a0a" stroke="' + GOLD + '" stroke-width="2"/><rect x="176" y="132" width="48" height="8" fill="' + RED + '"/>' +
      /* the flyer on the wall */
      '<g transform="rotate(3 300 160)"><rect x="252" y="118" width="98" height="78" fill="#f4efe2"/>' +
      '<text x="301" y="134" text-anchor="middle" ' + font + ' font-size="9" fill="#111">LIVE ON STAGE</text>' +
      '<text x="301" y="150" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#c0122b">ROB BASE</text>' +
      '<text x="301" y="163" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#c0122b">&amp; E-Z ROCK</text>' +
      '<text x="301" y="176" text-anchor="middle" ' + font + ' font-size="8" fill="#111">+ CRASH CREW</text>' +
      '<text x="301" y="189" text-anchor="middle" ' + font + ' font-size="8" fill="#555">NOV 25 · 1987</text></g>' +
      /* rope */
      '<path d="M66 196q30 10 60 0" stroke="#b3122b" stroke-width="3" fill="none"/><rect x="64" y="188" width="4" height="18" fill="' + GOLD + '"/><rect x="124" y="188" width="4" height="18" fill="' + GOLD + '"/>' +
      line +
      '<rect x="0" y="206" width="400" height="54" fill="#3d3f45"/><rect x="0" y="206" width="400" height="4" fill="#77797d"/>' +
      '<g class="rb-car"><rect x="0" y="230" width="46" height="14" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="36" cy="244" r="4" fill="#111"/></g>' +
      txt("THE BRONX · '87", 200, 226, 10, "#e8e3d8", 'letter-spacing="3"'),
      sky("rbz", "#0a0718", "#3b1f4d"));
  }

  /* 4. Hillside Sound, Englewood NJ: the control room - console with bouncing meters, the reel-to-reel spinning, the drum machine, the glass to the booth, a plaque on the wall */
  function rbstudio() {
    let meters = "";
    for (let i = 0; i < 12; i++) meters += '<rect class="rb-mt rb-mt' + (i % 3 + 1) + '" x="' + (112 + i * 15) + '" y="150" width="9" height="26" fill="' + (i % 4 === 3 ? RED : i % 2 ? GOLD : "#6cbe45") + '"/>';
    let faders = "";
    for (let i = 0; i < 16; i++) faders += '<rect x="' + (96 + i * 13) + '" y="196" width="3" height="22" fill="#111"/><rect x="' + (93 + i * 13) + '" y="' + (200 + (i * 7) % 14) + '" width="9" height="5" rx="1" fill="#d9d9d9"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      '<rect x="0" y="0" width="400" height="140" fill="#3a302a"/>' + [20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map(x => '<rect x="' + (x - 14) + '" y="8" width="28" height="22" fill="#4a3d35"/>').join("") +
      /* booth glass */
      '<rect x="104" y="36" width="196" height="96" fill="#0f1a24" stroke="#1a1a1a" stroke-width="6"/>' +
      '<rect x="104" y="36" width="196" height="96" fill="url(#rbg)" opacity=".5"/>' +
      '<g class="rb-bob"><circle cx="200" cy="82" r="11" fill="#06090d"/><rect x="186" y="94" width="28" height="38" rx="9" fill="#06090d"/></g>' +
      '<path d="M226 56v26" stroke="#555" stroke-width="2"/><circle cx="226" cy="86" r="7" fill="#777"/><path d="M219 86h14" stroke="#555" stroke-width="2"/>' +
      txt("ON AIR", 146, 52, 9, RED, 'class="rb-flk" letter-spacing="2"') +
      /* the plaque */
      '<rect x="318" y="40" width="64" height="80" rx="2" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="3"/><circle cx="350" cy="74" r="22" fill="#d9dde3"/><circle cx="350" cy="74" r="7" fill="' + GOLD + '"/><circle cx="350" cy="74" r="14" fill="none" stroke="#b8bec7" stroke-width="1"/>' +
      '<rect x="326" y="102" width="48" height="10" fill="#2a2a2a"/>' + txt("PLATINUM", 350, 110, 6.5, GOLD) +
      /* reel-to-reel */
      '<rect x="14" y="40" width="80" height="96" rx="3" fill="#bfbfc4"/>' +
      '<g class="rb-spin rb-spin2"><circle cx="36" cy="66" r="16" fill="#3a3a40"/><circle cx="36" cy="66" r="4" fill="#ddd"/><path d="M36 52v28M22 66h28" stroke="#888" stroke-width="3"/></g>' +
      '<g class="rb-spin rb-spin2"><circle cx="72" cy="66" r="16" fill="#3a3a40"/><circle cx="72" cy="66" r="4" fill="#ddd"/><path d="M72 52v28M58 66h28" stroke="#888" stroke-width="3"/></g>' +
      '<path d="M22 72L54 108L86 72" stroke="#5a3a20" stroke-width="2" fill="none"/><rect x="24" y="110" width="60" height="14" rx="2" fill="#555"/>' +
      /* console */
      '<path d="M60 142h280l40 118H20z" fill="#4b4b52"/><rect x="104" y="146" width="194" height="34" rx="2" fill="#1a1a1f"/>' + meters +
      '<rect x="88" y="190" width="224" height="34" rx="2" fill="#2d2d33"/>' + faders +
      /* drum machine on the right */
      '<rect x="318" y="150" width="70" height="40" rx="3" fill="#cfc6b8"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="rb-bl rb-bl' + (i % 3 + 1) + '" x="' + (322 + i * 8) + '" y="176" width="6" height="8" rx="1" fill="' + (i % 4 ? "#ff8a3d" : RED) + '"/>').join("") +
      '<rect x="324" y="156" width="40" height="12" fill="#2a2a2a"/>' +
      txt("HILLSIDE SOUND · ENGLEWOOD, NJ", 200, 248, 10, CREAM, 'letter-spacing="2"'),
      '<linearGradient id="rbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7fb7e0" stop-opacity=".25"/><stop offset=".5" stop-color="#7fb7e0" stop-opacity="0"/><stop offset="1" stop-color="#7fb7e0" stop-opacity=".2"/></linearGradient>');
  }

  /* 5. Morningside Av & W 125 St: green street signs on the pole, the wall tagged ROB BASE & E-Z ROCK, Grant's Tomb up the hill behind */
  function rbcorner() {
    let cols = "";
    for (let x = 152; x <= 248; x += 12) cols += '<rect x="' + x + '" y="62" width="6" height="40" fill="#e9e4d8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rbc)"/>' + stars(12) +
      /* the hill and the tomb */
      '<path d="M0 132q100-40 200-44t200 40v40H0z" fill="#2c4a34"/>' +
      '<rect x="140" y="98" width="120" height="34" fill="#d8d2c4"/><rect x="134" y="94" width="132" height="6" fill="#c9c2b2"/>' + cols +
      '<rect x="146" y="56" width="108" height="8" fill="#cfc8b8"/>' +
      '<rect x="164" y="36" width="72" height="22" fill="#d8d2c4"/>' + [170, 182, 194, 206, 218, 228].map(x => '<rect x="' + x + '" y="40" width="5" height="16" fill="#b9b2a2"/>').join("") +
      '<path d="M168 36h64l-10 -14h-44z" fill="#cfc8b8"/><path d="M182 22h36l-6 -8h-24z" fill="#c6bfaf"/>' +
      '<rect x="190" y="104" width="20" height="28" fill="#5a5448"/>' +
      [150, 260].map(x => '<circle cx="' + x + '" cy="112" r="16" fill="#2f5a3a"/>').join("") +
      txt("GRANT'S TOMB", 200, 12, 8, CREAM, 'letter-spacing="3" opacity=".8"') +
      /* the wall */
      '<rect x="0" y="136" width="400" height="90" fill="#3e4048"/>' +
      (() => { let b = ""; for (let y = 146; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#34363d" stroke-width="1"/>'; return b; })() +
      tag("ROB BASE", 14, 190, 46, GOLD, -5) + tag("&amp; E-Z ROCK", 40, 218, 26, RED, -4) + tag("HIT IT!", 238, 214, 18, TEAL, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="rb-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* the pole and the green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="282" y="66" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Morningside Av", 339, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 125 St", 346, 108, 12, "#fff") +
      '<circle class="rb-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("rbc", "#0b0f24", "#3a3358"));
  }

  window.SCENES = { rbstop: rbstop, rbshoot: rbshoot, rbzodiac: rbzodiac, rbstudio: rbstudio, rbcorner: rbcorner };
})();
