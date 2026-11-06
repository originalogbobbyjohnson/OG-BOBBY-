/* amoslee scenes (Regions tab: Philadelphia; Society Hill, at 6th & Lombard, where the Starr Garden playground is: "let's go back to Starr Garden, where I played basketball as a kid"). CSS classes prefixed al- (the page's own anim-train is kept).
   1 The Route 40 bus pulling up to Lombard St & 6th St (a real SEPTA stop, right at Starr Garden): red-brick Society Hill rowhouses with white trim and marble steps, the bus stop flag, the white SEPTA bus with blue and red stripes.
   2 The Tin Angel listening room on S 2nd St in Old City, where he tended bar and played his first shows: exposed brick, a little stage with a stool, an acoustic guitar and a mic, tea lights flickering, a tin angel ornament swaying.
   3 The Mary McLeod Bethune School, where he taught second grade before music took over: a chalkboard, the alphabet strip, small desks, an apple on the teacher's desk, chalk writing itself.
   4 The Keswick Theatre in Glenside, one of his early hometown stages: cream stucco Spanish-revival front, red tile roof, the marquee with chasing lights.
   5 S 6th St and Lombard St: green signs, AMOS LEE tagged on the wall, the Starr Garden hoop with a ball bouncing, Mother Bethel AME's stone gable and rose window behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes alflick{0%,100%{opacity:.55;transform:scale(1)}40%{opacity:1;transform:scale(1.15)}70%{opacity:.75;transform:scale(.95)}}.al-flick{transform-box:fill-box;transform-origin:50% 100%;animation:alflick 1.3s ease-in-out infinite}.al-f2{animation-delay:-.45s}.al-f3{animation-delay:-.9s}' +
    '@keyframes alsway{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.al-sway{transform-box:fill-box;transform-origin:50% 0%;animation:alsway 3.2s ease-in-out infinite}' +
    '@keyframes alnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-46px);opacity:0}}.al-note{animation:alnote 3s linear infinite}.al-n2{animation-delay:-1.5s}' +
    '@keyframes alchalk{0%{stroke-dashoffset:260}60%,100%{stroke-dashoffset:0}}.al-chalk{stroke-dasharray:260;animation:alchalk 4.5s ease-in-out infinite}' +
    '@keyframes alblink{0%,100%{opacity:.3}50%{opacity:1}}.al-blink{animation:alblink 1.2s ease-in-out infinite}.al-b2{animation-delay:-.6s}' +
    '@keyframes alball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.al-ball{animation:alball 1.1s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes alcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.al-cloud{animation:alcloud 26s linear infinite}' +
    '@keyframes alspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.al-sp{animation:alspray 1.4s ease-out infinite}.al-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const bricks = (x0, y0, w, h, base, line) => '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' +
    Array.from({ length: Math.floor(h / 8) }, (_, r) => '<path d="M' + x0 + ' ' + (y0 + 8 + r * 8) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>' +
      Array.from({ length: Math.floor(w / 20) }, (_, i) => '<path d="M' + (x0 + i * 20 + (r % 2) * 10) + ' ' + (y0 + r * 8) + 'v8" stroke="' + line + '" stroke-width="1"/>').join("")).join("");
  const GOLD = "#f2b544", RUST = "#c8553d", TEAL = "#4fa3a5", BUS = "#1f4e79";

  /* a Society Hill rowhouse: red brick, white-trimmed six-over-six windows, black shutters, marble steps */
  const rowhouse = (x, w, top, door) => {
    let s = bricks(x, top, w, 200 - top, "#a3442f", "#8a3624") + '<rect x="' + (x - 2) + '" y="' + (top - 6) + '" width="' + (w + 4) + '" height="7" fill="#e8e2d4"/>' +
      '<path d="M' + x + ' ' + (top - 6) + 'l' + (w / 2) + ' -16l' + (w / 2) + ' 16z" fill="#4a3a36"/>' +
      '<rect x="' + (x + w / 2 - 7) + '" y="' + (top - 18) + '" width="14" height="10" fill="#f2efe6" stroke="#4a3a36"/>';
    for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) {
      const wx = x + 10 + c * (w - 38), wy = top + 10 + r * 34;
      s += '<rect x="' + (wx - 5) + '" y="' + wy + '" width="5" height="24" fill="#1d2420"/><rect x="' + (wx + 18) + '" y="' + wy + '" width="5" height="24" fill="#1d2420"/>' +
        '<rect x="' + wx + '" y="' + wy + '" width="18" height="24" fill="#2b3a48" stroke="#f2efe6" stroke-width="2"/><path d="M' + wx + ' ' + (wy + 12) + 'h18M' + (wx + 9) + ' ' + wy + 'v24" stroke="#f2efe6" stroke-width="1"/>';
    }
    if (door) s += '<rect x="' + (x + w / 2 - 9) + '" y="' + (top + 46) + '" width="18" height="30" fill="#1d2420" stroke="#f2efe6" stroke-width="2"/><path d="M' + (x + w / 2 - 9) + ' ' + (top + 46) + 'q9 -10 18 0" fill="#f2efe6"/>' +
      '<rect x="' + (x + w / 2 - 13) + '" y="' + (top + 76) + '" width="26" height="4" fill="#e6e6e0"/><rect x="' + (x + w / 2 - 16) + '" y="' + (top + 80) + '" width="32" height="4" fill="#d8d8d0"/>';
    return s;
  };

  /* 1. Lombard St & 6th St, Route 40 bus */
  function alstation() {
    const bus = '<g class="anim-train">' +
      '<rect x="40" y="128" width="250" height="72" rx="10" fill="#f4f4f0" stroke="#8a8f96" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (56 + i * 30) + '" y="138" width="24" height="26" rx="2" fill="#24303a"/>').join("") +
      '<rect x="268" y="136" width="20" height="44" rx="2" fill="#24303a"/>' +
      '<rect x="40" y="172" width="250" height="5" fill="' + BUS + '"/><rect x="40" y="178" width="250" height="4" fill="#c8102e"/>' +
      '<rect x="226" y="132" width="40" height="8" rx="1" fill="#111"/><text x="246" y="138.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">40 LOMBARD</text>' +
      '<rect x="196" y="140" width="22" height="56" fill="#cfd4d8" stroke="#8a8f96"/>' +
      '<circle cx="86" cy="200" r="11" fill="#222"/><circle cx="86" cy="200" r="4" fill="#888"/><circle cx="248" cy="200" r="11" fill="#222"/><circle cx="248" cy="200" r="4" fill="#888"/>' +
      '<rect x="286" y="182" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#al-s1)"/>' +
      '<g class="al-cloud"><ellipse cx="40" cy="30" rx="30" ry="9" fill="#fff" opacity=".8"/><ellipse cx="60" cy="24" rx="18" ry="8" fill="#fff" opacity=".8"/></g>' +
      rowhouse(0, 92, 60, true) + rowhouse(96, 92, 54, true) + rowhouse(192, 92, 62, true) + rowhouse(288, 112, 56, true) +
      tree(140, 120, 1.8, "#5b8a40") + tree(340, 122, 1.8, "#4f7d3a") +
      '<rect x="0" y="198" width="400" height="10" fill="#b8b2a6"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#4c4d52"/><path d="M0 226h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      /* bus stop flag on its pole */
      '<rect x="330" y="130" width="4" height="72" fill="#5a5f66"/><rect x="314" y="122" width="36" height="24" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/><text x="332" y="138" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">40</text>' +
      bus +
      '<rect x="56" y="222" width="288" height="32" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(68, 238, "40", BUS) +
      '<text x="214" y="244" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Lombard St &amp; 6th St</text>',
      sky("al-s1", "#8ec5e8", "#f6e3c0"));
  }

  /* 2. The Tin Angel listening room, S 2nd St, Old City */
  function altinangel() {
    const table = (x) => '<rect x="' + (x - 22) + '" y="196" width="44" height="6" rx="2" fill="#5a3a24"/><rect x="' + (x - 2) + '" y="202" width="4" height="30" fill="#3a2414"/><rect x="' + (x - 12) + '" y="230" width="24" height="4" fill="#3a2414"/>' +
      '<rect x="' + (x - 5) + '" y="186" width="10" height="10" rx="2" fill="#e8d8b0" opacity=".85"/><g class="al-flick' + (x % 3 === 0 ? '' : x % 3 === 1 ? ' al-f2' : ' al-f3') + '"><path d="M' + x + ' 178q-4 5 0 9q4 -4 0 -9z" fill="#ffcf5a"/></g>' +
      '<circle cx="' + x + '" cy="186" r="16" fill="#ffcf5a" opacity=".12"/>';
    return svg(
      bricks(0, 0, 400, 180, "#7a3a2a", "#5e2c20") +
      '<rect width="400" height="180" fill="url(#al-glow)"/>' +
      /* window to S 2nd St at night */
      '<rect x="20" y="30" width="60" height="80" fill="#1a2440" stroke="#e8dcc4" stroke-width="3"/><path d="M50 30v80M20 70h60" stroke="#e8dcc4" stroke-width="2"/><circle cx="34" cy="44" r="2" fill="#ffe08a"/><circle cx="66" cy="56" r="1.5" fill="#ffe08a"/>' +
      /* chalk sign */
      '<rect x="300" y="26" width="84" height="54" rx="3" fill="#1e2a22" stroke="#8a6a40" stroke-width="4"/><text x="342" y="48" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="11" fill="#f2efe6">LISTENING</text><text x="342" y="66" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="11" fill="' + GOLD + '">ROOM</text>' +
      /* tin angel ornament */
      '<path d="M200 0v22" stroke="#999" stroke-width="1"/><g class="al-sway"><path d="M200 22v2" stroke="#999"/><circle cx="200" cy="30" r="5" fill="#c9ccd0" stroke="#7a7e84"/><path d="M200 35l-9 26h18z" fill="#c9ccd0" stroke="#7a7e84"/><path d="M196 40q-16 -8 -18 6q8 2 18 -2zM204 40q16 -8 18 6q-8 2 -18 -2z" fill="#dfe2e6" stroke="#7a7e84"/><ellipse cx="200" cy="23" rx="6" ry="2" fill="none" stroke="' + GOLD + '" stroke-width="1.5"/></g>' +
      /* stage */
      '<rect x="110" y="150" width="180" height="22" fill="#3a2414"/><rect x="110" y="146" width="180" height="6" fill="#6a4628"/>' +
      '<circle cx="200" cy="0" r="1" fill="none"/><path d="M150 0l-30 146h160l-30 -146z" fill="#ffe7a8" opacity=".08"/>' +
      /* stool */
      '<ellipse cx="176" cy="114" rx="14" ry="4" fill="#5a3a24"/><path d="M166 116l-6 32M186 116l6 32M176 118v30M164 134h24" stroke="#3a2414" stroke-width="3"/>' +
      /* acoustic guitar on a stand */
      '<g transform="rotate(-12 230 120)"><rect x="227" y="62" width="6" height="44" fill="#3a2414"/><rect x="224" y="54" width="12" height="12" rx="2" fill="#2a1a10"/>' +
      '<path d="M230 100c-14 0 -18 10 -14 18c-6 6 -6 22 14 24c20 -2 20 -18 14 -24c4 -8 0 -18 -14 -18z" fill="#d9a050" stroke="#7a5020" stroke-width="2"/><circle cx="230" cy="118" r="5" fill="#2a1a10"/><rect x="224" y="131" width="12" height="3" fill="#2a1a10"/></g>' +
      '<path d="M222 146l8 -10l8 10" stroke="#222" stroke-width="2" fill="none"/>' +
      /* mic stand */
      '<path d="M146 146v-62" stroke="#2a2a2a" stroke-width="3"/><path d="M136 146h20" stroke="#2a2a2a" stroke-width="3"/><rect x="142" y="74" width="8" height="14" rx="4" fill="#5a5a5a"/>' +
      '<g class="al-note"><text x="160" y="96" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="al-note al-n2"><text x="252" y="92" font-size="16" fill="' + GOLD + '">&#9835;</text></g>' +
      '<rect x="0" y="172" width="400" height="88" fill="#2a1a12"/>' +
      [40, 120, 280, 360].map(table).join(""),
      '<radialGradient id="al-glow" cx=".5" cy=".75" r=".7"><stop offset="0" stop-color="#ffcf5a" stop-opacity=".25"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></radialGradient>');
  }

  /* 3. Second grade at the Mary McLeod Bethune School */
  function albethune() {
    const desk = (x, y) => '<rect x="' + x + '" y="' + y + '" width="54" height="8" rx="2" fill="#c89a5a"/><rect x="' + (x + 4) + '" y="' + (y + 8) + '" width="4" height="22" fill="#6a6f76"/><rect x="' + (x + 46) + '" y="' + (y + 8) + '" width="4" height="22" fill="#6a6f76"/>' +
      '<rect x="' + (x + 14) + '" y="' + (y - 4) + '" width="18" height="4" fill="#f2efe6"/><rect x="' + (x + 36) + '" y="' + (y - 3) + '" width="10" height="3" rx="1" fill="' + GOLD + '"/>';
    const letters = "ABCDEFGHIJKLM".split("");
    return svg(
      '<rect width="400" height="260" fill="#e8dcb8"/>' +
      '<rect x="0" y="0" width="400" height="10" fill="#cdbf98"/>' +
      /* alphabet strip */
      letters.map((c, i) => '<rect x="' + (14 + i * 29) + '" y="14" width="24" height="22" rx="2" fill="' + ["#e8603c", "#4fa3a5", GOLD, "#6cbe45"][i % 4] + '"/><text x="' + (26 + i * 29) + '" y="30.5" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + c + '</text>').join("") +
      /* chalkboard */
      '<rect x="40" y="46" width="250" height="110" rx="3" fill="#24412e" stroke="#8a6a40" stroke-width="6"/>' +
      '<rect x="40" y="152" width="250" height="6" fill="#8a6a40"/><rect x="70" y="148" width="14" height="4" fill="#f2efe6"/><rect x="100" y="149" width="18" height="5" rx="1" fill="#e6c08a"/>' +
      '<text x="62" y="80" font-family="Permanent Marker, cursive" font-size="20" fill="#f2efe6">Read. Write. Sing.</text>' +
      '<path class="al-chalk" d="M62 104q10 -14 20 0t20 0t20 0t20 0t20 0t20 0" stroke="#f2efe6" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<text x="62" y="138" font-family="Permanent Marker, cursive" font-size="15" fill="' + GOLD + '">Second Grade</text>' +
      '<text x="210" y="138" font-family="Permanent Marker, cursive" font-size="22" fill="#f2efe6">&#9834;</text>' +
      /* window with a tree outside */
      '<rect x="310" y="48" width="74" height="96" fill="#a8d4ee" stroke="#f2efe6" stroke-width="5"/><path d="M347 48v96M310 96h74" stroke="#f2efe6" stroke-width="3"/>' + tree(347, 120, 1.6, "#5b8a40") +
      /* wall clock with tick marks only */
      '<circle cx="345" cy="170" r="0" fill="none"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#b88a58"/><path d="M0 196h400M0 220h400M0 244h400" stroke="#a07648" stroke-width="1.5"/>' +
      desk(30, 200) + desk(120, 206) + desk(210, 200) +
      /* teacher's desk with the apple */
      '<rect x="296" y="168" width="96" height="12" fill="#7a4e2a"/><rect x="300" y="180" width="88" height="44" fill="#6a4224"/><rect x="316" y="190" width="56" height="10" rx="1" fill="#5a361c"/>' +
      '<circle cx="326" cy="160" r="8" fill="#d8262e"/><path d="M326 152q2 -6 6 -6" stroke="#4a2a10" stroke-width="2" fill="none"/><ellipse cx="331" cy="149" rx="4" ry="2" fill="#4c9a3a"/>' +
      '<rect x="346" y="156" width="30" height="12" fill="#f2efe6" stroke="#8a8a8a"/><path d="M361 156v12" stroke="#8a8a8a"/>',
      "");
  }

  /* 4. The Keswick Theatre, Glenside */
  function alkeswick() {
    const bulbs = (x0, y0, n, dx) => Array.from({ length: n }, (_, i) => '<g class="al-blink' + (i % 2 ? ' al-b2' : '') + '"><circle cx="' + (x0 + i * dx) + '" cy="' + y0 + '" r="2.2" fill="#ffe08a"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#al-s4)"/>' +
      '<circle cx="340" cy="40" r="14" fill="#f6f0d8" opacity=".9"/>' +
      tree(26, 150, 2.6, "#2f4a30") + tree(376, 150, 2.6, "#2f4a30") +
      /* cream stucco Spanish-revival front with red tile roof */
      '<rect x="60" y="60" width="280" height="150" fill="#eadcc0"/>' +
      '<path d="M52 64l20 -16h256l20 16z" fill="#b5503a"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (74 + i * 18) + ' 50v12" stroke="#8a3a28" stroke-width="2"/>').join("") +
      '<path d="M150 60v-24q50 -30 100 0v24z" fill="#eadcc0"/><path d="M146 38q54 -34 108 0" stroke="#b5503a" stroke-width="6" fill="none"/>' +
      '<circle cx="200" cy="44" r="9" fill="#c9a24a" stroke="#8a6a20" stroke-width="2"/>' +
      [84, 120, 266, 302].map(x => '<path d="M' + x + ' 104v-24q7 -10 14 0v24z" fill="#3a2a22"/><rect x="' + (x - 3) + '" y="104" width="20" height="4" fill="#c8b48e"/>').join("") +
      /* marquee */
      '<path d="M90 120h220l-14 30h-192z" fill="#1a1a1a"/>' +
      '<rect x="104" y="124" width="192" height="22" fill="#f2efe6"/>' +
      '<text x="200" y="140.5" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="#1a1a1a">AMOS LEE TONIGHT</text>' +
      bulbs(96, 118, 18, 12.5) + bulbs(108, 152, 16, 11.8) +
      /* doors */
      '<rect x="110" y="160" width="180" height="50" fill="#5a2a1e"/>' + [124, 168, 212, 256].map(x => '<rect x="' + x + '" y="166" width="22" height="44" fill="#7a3a28" stroke="#c9a24a" stroke-width="1.5"/><rect x="' + (x + 4) + '" y="170" width="14" height="16" fill="#ffd98a" opacity=".7"/>').join("") +
      '<rect x="0" y="210" width="400" height="8" fill="#9a968c"/><rect x="0" y="218" width="400" height="42" fill="#3e3f44"/><path d="M0 240h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="al-note"><text x="70" y="200" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="al-note al-n2"><text x="316" y="196" font-size="16" fill="' + GOLD + '">&#9835;</text></g>',
      sky("al-s4", "#1c2a52", "#c8784a"));
  }

  /* 5. S 6th St & Lombard St: Starr Garden, Mother Bethel behind */
  function alcorner() {
    const stone = (x0, y0, w, h) => {
      let s = '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="#8a5a44"/>', k = 3;
      for (let y = y0 + 2; y < y0 + h - 5; y += 8) for (let x = x0 + ((y / 8) % 2) * 7; x < x0 + w - 6; x += 16) {
        k = (k * 37 + 11) % 97; s += '<rect x="' + x + '" y="' + y + '" width="' + Math.min(13, x0 + w - x - 1) + '" height="6" rx="1.5" fill="' + ["#8f5e48", "#7a4c3a", "#9a6a52", "#845642"][k % 4] + '"/>';
      }
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#al-s5)"/>' +
      /* Mother Bethel AME: rough stone, square tower with a pyramid roof, central gable with the rose window */
      stone(206, 40, 40, 100) + '<path d="M202 42l24 -26l24 26z" fill="#4a3a36"/><path d="M220 60v-12q6 -8 12 0v12z" fill="#2a2024"/>' +
      stone(246, 54, 120, 86) + '<path d="M242 58l64 -40l64 40z" fill="#8a5a44"/><path d="M242 58l64 -40l64 40" stroke="#6a4232" stroke-width="3" fill="none"/>' +
      '<circle cx="306" cy="76" r="18" fill="#3a2a3a" stroke="#c8b48e" stroke-width="3"/>' +
      Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M306 76L' + (306 + 18 * Math.cos(a)).toFixed(1) + ' ' + (76 + 18 * Math.sin(a)).toFixed(1) + '" stroke="#c8b48e" stroke-width="1.5"/>'; }).join("") +
      '<circle cx="306" cy="76" r="5" fill="' + GOLD + '"/>' +
      '<path d="M296 140v-30q10 -14 20 0v30z" fill="#2a2024"/>' +
      /* Starr Garden court behind the fence */
      '<rect x="0" y="118" width="200" height="30" fill="#3f6e5a"/>' +
      '<rect x="40" y="62" width="5" height="60" fill="#d8d8d8"/><rect x="26" y="56" width="34" height="22" fill="#f2efe6" stroke="#555" stroke-width="1.5"/><rect x="36" y="64" width="14" height="10" fill="none" stroke="' + RUST + '" stroke-width="1.5"/>' +
      '<path d="M36 78h18l-3 12h-12z" fill="none" stroke="#f2efe6" stroke-width="1.2"/>' +
      '<g class="al-ball"><circle cx="90" cy="110" r="7" fill="#e8742a" stroke="#6a2a10" stroke-width="1.2"/><path d="M83 110h14M90 103v14" stroke="#6a2a10" stroke-width="1"/></g>' +
      '<path d="M0 104h200" stroke="#7a7e84" stroke-width="2"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 10) + ' 104l10 44M' + (i * 10 + 10) + ' 104l-10 44" stroke="#7a7e84" stroke-width=".8"/>').join("") +
      tree(180, 112, 2.2, "#4f7d3a") + tree(384, 118, 2.0, "#5b8a40") +
      /* the wall with his tag */
      bricks(0, 146, 400, 66, "#8a4a36", "#723c2c") +
      '<rect x="0" y="142" width="400" height="6" fill="#4a3a32"/>' +
      tag("AMOS LEE", 16, 194, 40, GOLD, -5) + tag("HOAGIEMOUTH", 224, 188, 15, TEAL, -3) + tag("KEEP IT LOOSE", 226, 206, 14, "#fff", -2) +
      '<rect x="0" y="212" width="400" height="48" fill="#55565a"/><path d="M0 236h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="0" y="210" width="400" height="4" fill="#9a968c"/>' +
      '<rect x="356" y="96" width="6" height="118" fill="#2f2f2f"/>' + sign(316, 98, 86, "S 6th St") + sign(304, 124, 96, "Lombard St") +
      '<g class="al-sp"><circle cx="196" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="al-sp al-sp2"><circle cx="202" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("al-s5", "#f0946a", "#fde2a8"));
  }

  window.SCENES = { alstation: alstation, altinangel: altinangel, albethune: albethune, alkeswick: alkeswick, alcorner: alcorner };
})();
