/* Mantronix game (NYC map, Manhattan: Upper West Side - Kurtis Mantronik grew up at his mom's place on 73rd Street, and later lived over the label on upper Broadway).
   1. 72 St on the Broadway-Seventh Av line: cream tile with the 72 mosaic plaques, the black sign with the 1, 2 and 3, the 1 train sliding in.
   2. Downtown Records, 1984: the shop where Kurtis was the in-store DJ and the messenger kid kept walking in - decks in the window, crates, a messenger bike outside.
   3. Unique Recording on Seventh Av: the control room - the drum machine running its 16 steps, the bass box, meters jumping, the Midtown glow in the window.
   4. W 73rd St: the brownstone stoop and the lit window where the beats got programmed, the boombox on the steps.
   5. Broadway & W 73 St: green street signs, the wall tagged MANTRONIX, the Ansonia's towers and copper domes behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mxcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.mx-car{animation:mxcar 7s linear infinite}.mx-car2{animation-delay:-3.5s}' +
    '@keyframes mxblink{0%,100%{opacity:.25}50%{opacity:1}}.mx-bl{animation:mxblink 1.6s ease-in-out infinite}.mx-bl2{animation-delay:.5s}.mx-bl3{animation-delay:1s}' +
    '@keyframes mxflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.mx-flk{animation:mxflick 2.4s infinite}' +
    '@keyframes mxspin{to{transform:rotate(360deg)}}.mx-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mxspin 1.2s linear infinite}.mx-spin2{animation-duration:1.8s}' +
    '@keyframes mxbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.mx-bob{animation:mxbob .5s ease-in-out infinite}.mx-bob2{animation-delay:.25s}' +
    '@keyframes mxmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.mx-mt{transform-box:fill-box;transform-origin:50% 100%;animation:mxmeter .5s ease-in-out infinite}.mx-mt2{animation-delay:.17s}.mx-mt3{animation-delay:.34s}' +
    '@keyframes mxstep{0%,12.4%{fill:#ff3df2}12.5%,100%{fill:#3a2a40}}.mx-st{animation:mxstep 1.6s steps(1) infinite}' +
    '@keyframes mxwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.mx-wave{animation:mxwave 1s linear infinite}' +
    '@keyframes mxnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.mx-note{animation:mxnote 2.4s ease-out infinite}.mx-note2{animation-delay:.8s}.mx-note3{animation-delay:1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GREEN = "#39ff88", PINK = "#ff3df2", CYAN = "#3dd6ff", CREAM = "#f4ead8", RED123 = "#ee352e";

  /* 1. 72 St, underground: cream tile, the brown-and-blue mosaic band with the 72 plaques, the sign with the 1 2 3, the 1 train pulling in */
  function mx72() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1ead7"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="38" width="8" height="8" fill="' + (x % 32 ? "#2d5f8a" : "#8a5a2b") + '"/>';
    const plaque = x => '<rect x="' + (x - 16) + '" y="34" width="32" height="16" fill="#7a4a24" stroke="#d9b779" stroke-width="1.5"/>' + txt("72", x, 47, 12, "#f6e7c4");
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#ddd3bd"/>' + tiles +
      '<rect x="0" y="34" width="400" height="16" fill="#3b2a1a"/>' + band + plaque(70) + plaque(200) + plaque(330) +
      '<rect x="0" y="0" width="400" height="30" fill="#2b2b2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="mx-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      /* sign */
      '<rect x="60" y="58" width="280" height="32" rx="3" fill="#111"/><rect x="60" y="58" width="280" height="3" fill="#fff"/>' +
      '<text x="76" y="80" ' + font + ' font-size="15" fill="#fff">72 St</text>' +
      bullet(254, 74, "1", RED123) + bullet(280, 74, "2", RED123) + bullet(306, 74, "3", RED123) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#3d4a5c"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "1", RED123) +
        '<rect x="10" y="140" width="280" height="4" fill="' + RED123 + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5d5a55"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(330, 196, "#1b1b1b") + person(352, 200, "#2a2a2a", "mx-bob") +
      txt("UPPER WEST SIDE", 140, 236, 11, "#f1ead8", 'letter-spacing="3"'));
  }

  /* 2. Downtown Records, 1984: shop front at night, the in-store DJ booth in the window with the decks spinning, crates of 12-inches, the messenger bike chained outside */
  function mxshop() {
    const crate = (x, y, col) => '<rect x="' + x + '" y="' + y + '" width="40" height="26" fill="#6b4a2a" stroke="#3b2814" stroke-width="2"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 3 + i * 7) + '" y="' + (y - 10) + '" width="6" height="14" fill="' + [col, "#111", CREAM, "#111", col][i] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mxs)"/>' + stars(10) +
      '<rect x="0" y="30" width="400" height="180" fill="#3a2f45"/>' +
      [40, 120, 280, 360].map(x => '<rect x="' + (x - 18) + '" y="38" width="36" height="30" fill="#ffd98a" opacity=".55" class="mx-bl mx-bl' + (x % 3 + 1) + '"/>').join("") +
      /* sign */
      '<rect x="60" y="76" width="280" height="34" rx="3" fill="#0d0b14" stroke="' + CYAN + '" stroke-width="2"/>' +
      '<text class="mx-flk" x="200" y="100" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="19" letter-spacing="2" fill="' + CYAN + '">DOWNTOWN RECORDS</text>' +
      /* the window */
      '<rect x="40" y="120" width="210" height="86" fill="#1a1228" stroke="#c9ced6" stroke-width="3"/>' +
      '<rect x="40" y="120" width="210" height="86" fill="' + PINK + '" opacity=".08"/>' +
      /* DJ booth + decks + the DJ silhouette */
      '<rect x="80" y="176" width="130" height="30" fill="#222" stroke="#555" stroke-width="2"/>' +
      '<g class="mx-spin"><circle cx="110" cy="176" r="13" fill="#111" stroke="#666"/><circle cx="110" cy="176" r="4" fill="' + GREEN + '"/><rect x="109" y="164" width="2" height="6" fill="#888"/></g>' +
      '<g class="mx-spin mx-spin2"><circle cx="180" cy="176" r="13" fill="#111" stroke="#666"/><circle cx="180" cy="176" r="4" fill="' + PINK + '"/><rect x="179" y="164" width="2" height="6" fill="#888"/></g>' +
      '<g class="mx-bob"><circle cx="145" cy="142" r="10" fill="#06050a"/><rect x="133" y="153" width="24" height="24" rx="8" fill="#06050a"/><path d="M134 146a11 11 0 0 1 22 0" stroke="#06050a" stroke-width="4" fill="none"/></g>' +
      '<g class="mx-note"><text x="230" y="150" font-size="16" fill="' + GREEN + '">&#9835;</text></g><g class="mx-note mx-note2"><text x="60" y="150" font-size="14" fill="' + CYAN + '">&#9834;</text></g>' +
      /* door + crates */
      '<rect x="270" y="130" width="50" height="76" fill="#140f1c" stroke="#c9ced6" stroke-width="3"/><circle cx="312" cy="170" r="2.5" fill="#c9ced6"/>' +
      crate(330, 180, GREEN) +
      /* sidewalk + messenger bike */
      '<rect x="0" y="206" width="400" height="54" fill="#47474d"/><rect x="0" y="206" width="400" height="4" fill="#7a7a80"/>' +
      '<g><circle cx="262" cy="236" r="13" fill="none" stroke="#c9ced6" stroke-width="3"/><circle cx="312" cy="236" r="13" fill="none" stroke="#c9ced6" stroke-width="3"/>' +
      '<path d="M262 236l16-22h22l12 22M278 214l8 22h-24M300 214l-4-8h8M278 214l-4-6h-8" stroke="' + PINK + '" stroke-width="3" fill="none" stroke-linejoin="round"/>' +
      '<rect x="276" y="198" width="26" height="12" rx="2" fill="#d9a441"/></g>' +
      txt("MANHATTAN · 1984", 120, 248, 10, CREAM, 'letter-spacing="3"'),
      sky("mxs", "#07060f", "#2a1d3d"));
  }

  /* 3. Unique Recording on Seventh Av: the control room - drum machine stepping through its pattern, the silver bass box with its knobs, meters jumping, a waveform on the screen, the Midtown glow through the window */
  function mxstudio() {
    let steps = "";
    for (let i = 0; i < 16; i++) steps += '<rect class="mx-st" style="animation-delay:' + (i * 0.1 - 1.6).toFixed(1) + 's" x="' + (112 + i * 11) + '" y="200" width="8" height="10" rx="1" fill="#3a2a40"/>';
    let meters = "";
    for (let i = 0; i < 10; i++) meters += '<rect class="mx-mt mx-mt' + (i % 3 + 1) + '" x="' + (52 + i * 10) + '" y="96" width="7" height="30" fill="' + (i > 7 ? PINK : i > 5 ? "#ffd23f" : GREEN) + '"/>';
    let wave = "M30 48";
    for (let x = 30; x <= 270; x += 10) wave += "L" + x + " " + (48 + (x % 20 ? -14 : 14) * (0.4 + ((x * 7) % 10) / 16));
    const city = [0, 30, 56, 90, 120].map((x, i) => '<rect x="' + (252 + x * 0.9) + '" y="' + (40 + (i * 13) % 30) + '" width="20" height="' + (90 - (i * 13) % 30) + '" fill="#1a1530"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#17141f"/>' +
      /* window */
      '<rect x="240" y="20" width="150" height="110" fill="url(#mxw)" stroke="#0b0a10" stroke-width="5"/>' + city +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="mx-bl mx-bl' + (i % 3 + 1) + '" x="' + (258 + i * 20) + '" y="' + (60 + (i * 9) % 30) + '" width="5" height="5" fill="#ffd98a"/>').join("") +
      '<rect x="240" y="104" width="150" height="26" fill="' + PINK + '" opacity=".18"/>' +
      txt("7TH AV", 315, 122, 9, CREAM, 'letter-spacing="3" opacity=".8"') +
      /* screen with waveform */
      '<rect x="30" y="20" width="190" height="56" rx="3" fill="#0a0f0c" stroke="#333" stroke-width="3"/>' +
      '<g clip-path="url(#mxclip)"><path class="mx-wave" d="' + wave + '" stroke="' + GREEN + '" stroke-width="2" fill="none"/></g>' +
      /* meter bridge */
      '<rect x="44" y="90" width="110" height="40" rx="2" fill="#0d0d12"/>' + meters +
      /* desk */
      '<path d="M0 150h400v110H0z" fill="#2b2833"/><path d="M0 150h400" stroke="#4a4656" stroke-width="3"/>' +
      /* drum machine */
      '<rect x="100" y="166" width="196" height="56" rx="4" fill="#d8d2c4" stroke="#8a8476" stroke-width="2"/>' +
      '<rect x="108" y="172" width="70" height="20" rx="2" fill="#2a2a2a"/><text x="143" y="186" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="11" fill="' + GREEN + '">BPM 112</text>' +
      [190, 206, 222, 238, 254, 270].map(x => '<circle cx="' + x + '" cy="182" r="5" fill="#333" stroke="#888"/>').join("") + steps +
      /* bass box */
      '<rect x="306" y="170" width="78" height="44" rx="3" fill="#b9bec7" stroke="#6b7280" stroke-width="2"/>' +
      [318, 334, 350, 366].map(x => '<circle cx="' + x + '" cy="184" r="5" fill="#2a2a2a"/>').join("") +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (312 + i * 9) + '" y="200" width="7" height="8" fill="#eee" stroke="#6b7280" stroke-width=".8"/>').join("") +
      /* speaker */
      '<rect x="14" y="164" width="70" height="60" rx="3" fill="#111"/><circle cx="49" cy="194" r="20" fill="#222" stroke="#555" stroke-width="2"/><circle class="mx-flk" cx="49" cy="194" r="8" fill="#333"/>' +
      txt("UNIQUE RECORDING · NEW YORK", 200, 248, 10, CREAM, 'letter-spacing="2"'),
      sky("mxw", "#100c24", "#3a1d4d") + '<clipPath id="mxclip"><rect x="34" y="24" width="182" height="48"/></clipPath>');
  }

  /* 4. W 73rd St: brownstone stoops at night, one lit window with the drum machine glow, the boombox on the steps pushing out notes */
  function mxstoop() {
    const house = (x, col) => { let g = '<rect x="' + x + '" y="40" width="96" height="150" fill="' + col + '"/><rect x="' + x + '" y="36" width="96" height="8" fill="#4a2e22"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) g += '<rect x="' + (x + 10 + c * 28) + '" y="' + (54 + r * 34) + '" width="18" height="24" fill="#20182a" stroke="#4a2e22" stroke-width="2"/>';
      g += '<path d="M' + (x + 30) + ' 190l-22 40h66l-8 -40z" fill="#6b4a3a"/>';
      for (let s = 0; s < 6; s++) g += '<path d="M' + (x + 26 - s * 3.2) + ' ' + (196 + s * 6) + 'h' + (36 + s * 6.4) + '" stroke="#4a3328" stroke-width="2"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#mxt)"/>' + stars(14) +
      house(4, "#7a4a36") + house(102, "#6a3e30") + house(200, "#80503a") + house(298, "#6e4434") +
      /* the lit window: drum machine glow + a silhouette at work */
      '<rect x="134" y="88" width="18" height="24" fill="#ffe08a"/><rect x="134" y="100" width="18" height="12" fill="' + PINK + '" opacity=".5" class="mx-flk"/>' +
      '<rect x="162" y="88" width="18" height="24" fill="#ffe08a"/><circle class="mx-bob" cx="171" cy="100" r="4" fill="#20182a"/>' +
      /* boombox on the stoop */
      '<g class="mx-bob mx-bob2"><rect x="206" y="214" width="56" height="26" rx="4" fill="#1d1d22" stroke="#999" stroke-width="2"/><circle cx="220" cy="228" r="8" fill="#333" stroke="#777"/><circle cx="248" cy="228" r="8" fill="#333" stroke="#777"/><rect x="228" y="218" width="12" height="6" fill="' + GREEN + '"/><path d="M216 214q18-12 36 0" stroke="#999" stroke-width="2" fill="none"/></g>' +
      '<g class="mx-note"><text x="268" y="214" font-size="16" fill="' + GREEN + '">&#9835;</text></g><g class="mx-note mx-note2"><text x="196" y="210" font-size="14" fill="' + CYAN + '">&#9834;</text></g><g class="mx-note mx-note3"><text x="282" y="204" font-size="12" fill="' + PINK + '">&#9834;</text></g>' +
      /* trees + lamps */
      '<rect x="98" y="150" width="4" height="80" fill="#2a2c30"/><circle class="mx-flk" cx="100" cy="148" r="6" fill="#fff4c2"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="mx-car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + CYAN + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      txt("W 73RD ST", 200, 24, 11, CREAM, 'letter-spacing="4"'),
      sky("mxt", "#070815", "#26213f"));
  }

  /* 5. Broadway & W 73 St: green signs on the pole, the wall tagged MANTRONIX, the Ansonia behind - cream limestone, round corner towers, copper-green domes */
  function mxcorner() {
    let wins = "";
    for (let y = 70; y < 132; y += 14) for (let x = 112; x < 292; x += 16) wins += '<rect class="mx-bl mx-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="7" height="9" fill="#ffd98a" opacity=".7"/>';
    const tower = (cx) => '<rect x="' + (cx - 20) + '" y="44" width="40" height="92" rx="6" fill="#e3d8c2"/><rect x="' + (cx - 22) + '" y="42" width="44" height="5" fill="#cfc3aa"/><path d="M' + (cx - 20) + ' 43q20-34 40 0z" fill="#5f9e8a"/><rect x="' + (cx - 2) + '" y="14" width="4" height="14" fill="#5f9e8a"/><circle cx="' + cx + '" cy="13" r="3" fill="#5f9e8a"/>' +
      [62, 76, 90, 104, 118].map(y => '<rect x="' + (cx - 14) + '" y="' + y + '" width="7" height="8" fill="#ffd98a" opacity=".7"/><rect x="' + (cx + 7) + '" y="' + y + '" width="7" height="8" fill="#ffd98a" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mxc)"/>' + stars(14) +
      /* the Ansonia */
      '<rect x="96" y="60" width="208" height="80" fill="#e8dec9"/><path d="M96 62h208l-14 -20h-180z" fill="#5f9e8a"/>' +
      [124, 164, 204, 244, 276].map(x => '<path d="M' + (x - 6) + ' 52h12l-6 -10z" fill="#e8dec9"/>').join("") + wins +
      tower(96) + tower(304) +
      [70, 84, 98, 112, 126].map(y => '<path d="M96 ' + y + 'h208" stroke="#cfc3aa" stroke-width="1" opacity=".6"/>').join("") +
      txt("THE ANSONIA", 200, 14, 8, CREAM, 'letter-spacing="3" opacity=".8"') +
      /* the wall */
      '<rect x="0" y="136" width="400" height="90" fill="#3b3d46"/>' +
      (() => { let b = ""; for (let y = 146; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353d" stroke-width="1"/>'; return b; })() +
      tag("MANTRONIX", 14, 196, 50, GREEN, -5) + tag("TAKIN' COMMAND", 30, 222, 18, PINK, -3) + tag("FRESH!", 236, 218, 20, CYAN, -4) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="mx-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="#f2c14e"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Broadway", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 73 St", 348, 108, 12, "#fff") +
      '<circle class="mx-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("mxc", "#080a1c", "#2e2a4c"));
  }

  window.SCENES = { mx72: mx72, mxshop: mxshop, mxstudio: mxstudio, mxstoop: mxstoop, mxcorner: mxcorner };
})();
