/* chrispatrick scenes (NYC map, New Jersey: East Orange). CSS classes prefixed cp- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cpglow{0%,100%{opacity:.45}50%{opacity:1}}.cp-glow{animation:cpglow 2.4s ease-in-out infinite}.cp-g2{animation-delay:-1.2s}' +
    '@keyframes cpflick{0%,100%{opacity:1}46%{opacity:.8}50%{opacity:.3}54%{opacity:.95}}.cp-flk{animation:cpflick 3s infinite}' +
    '@keyframes cpchat{0%{transform:translateY(0)}100%{transform:translateY(-60px)}}.cp-chat{animation:cpchat 4s linear infinite}' +
    '@keyframes cpbeam{0%,100%{opacity:.15}50%{opacity:.45}}.cp-beam{animation:cpbeam 3s ease-in-out infinite}' +
    '@keyframes cpbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.cp-bob{animation:cpbob 2.6s ease-in-out infinite}' +
    '@keyframes cpspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-16px,-22px);opacity:0}}.cp-sp{animation:cpspray 1.3s ease-out infinite}.cp-sp2{animation-delay:.45s}' +
    '@keyframes cpcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.cp-car{animation:cpcar 7s linear infinite}.cp-car2{animation-delay:-3.5s}' +
    '@keyframes cptv{0%,100%{fill:#3a6ad8}33%{fill:#d84a8a}66%{fill:#4ad8a0}}.cp-tv{animation:cptv 3s linear infinite}.cp-tv2{animation-delay:-1s}.cp-tv3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 14) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 14) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GREEN = "#7ee081", GOLD = "#f2c14e", BLUE = "#9fb4ff", NJT = "#0039a6", NJO = "#f58025";

  /* 1. Main St & S Clinton St, East Orange: the NJ Transit 21 bus pulling up to the stop, the shelter, the bus stop flag, the Main St storefronts behind */
  function cpstop() {
    const bus = '<g class="anim-train"><rect x="40" y="114" width="250" height="86" rx="10" fill="#eef0f2" stroke="#8a929a" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="126" width="34" height="32" rx="3" fill="#24323e"/>').join("") +
      '<rect x="44" y="126" width="24" height="64" rx="2" fill="#2e3e4c"/>' +
      '<rect x="40" y="164" width="250" height="6" fill="' + NJT + '"/><rect x="40" y="172" width="250" height="3" fill="' + NJO + '"/><rect x="40" y="177" width="250" height="2" fill="#c8102e"/>' +
      '<rect x="270" y="118" width="18" height="16" rx="2" fill="#111"/><text x="279" y="130" text-anchor="middle" ' + font + ' font-size="10" fill="#ffb300">21</text>' +
      '<circle cx="90" cy="202" r="12" fill="#222"/><circle cx="90" cy="202" r="5" fill="#888"/><circle cx="240" cy="202" r="12" fill="#222"/><circle cx="240" cy="202" r="5" fill="#888"/>' +
      '<circle class="cp-glow" cx="286" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cp1)"/>' +
      /* Main St storefronts */
      '<g>' + [[0, 40, 70, "#8a4a3a"], [70, 56, 60, "#b5a48a"], [130, 34, 80, "#6e3a30"], [210, 50, 70, "#9a8a7a"], [280, 30, 60, "#7a4436"], [340, 48, 60, "#a89884"]].map(a => '<rect x="' + a[0] + '" y="' + a[1] + '" width="' + a[2] + '" height="' + (200 - a[1]) + '" fill="' + a[3] + '"/>' +
        Array.from({ length: 3 }, (_, i) => '<rect x="' + (a[0] + 8 + i * (a[2] - 16) / 3) + '" y="' + (a[1] + 12) + '" width="' + ((a[2] - 16) / 3 - 6) + '" height="16" fill="#2a3442" opacity=".8"/>').join("")).join("") + '</g>' +
      '<rect x="0" y="200" width="400" height="20" fill="#4a4a50"/><rect x="0" y="220" width="400" height="40" fill="#a8a49c"/><rect x="0" y="218" width="400" height="4" fill="#e8e4dc"/>' +
      bus +
      /* shelter + stop flag */
      '<rect x="306" y="150" width="70" height="70" fill="#9fc6e0" opacity=".35" stroke="#555" stroke-width="2"/><rect x="302" y="144" width="78" height="8" fill="#333"/>' +
      '<rect x="384" y="120" width="4" height="100" fill="#555"/><rect x="368" y="96" width="30" height="30" rx="2" fill="' + NJT + '"/><text x="383" y="116" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">21</text>' +
      /* black stop sign with the route bullet */
      '<rect x="40" y="18" width="320" height="38" rx="3" fill="#111"/><text x="54" y="43" ' + font + ' font-size="15" fill="#fff">Main St &amp; S Clinton St</text>' + badge(300, 37, "21", NJT),
      sky("cp1", "#7fb2e0", "#f0dcc0"));
  }

  /* 2. "Living the life of a regular dude": the electronics store where he worked before the music, a wall of TVs flipping channels (anime on one), the blue shirt and name tag on the counter */
  function cpstore() {
    return svg(
      '<rect width="400" height="260" fill="#e8ecf0"/><rect x="0" y="0" width="400" height="14" fill="#cfd5dc"/>' +
      [40, 160, 280].map(x => '<rect class="cp-flk" x="' + x + '" y="4" width="80" height="5" rx="2" fill="#fff"/>').join("") +
      /* TV wall */
      '<rect x="20" y="24" width="360" height="130" fill="#2a2f36"/>' +
      Array.from({ length: 8 }, (_, i) => { const x = 28 + (i % 4) * 88, y = 30 + Math.floor(i / 4) * 62; return '<rect x="' + x + '" y="' + y + '" width="80" height="54" rx="2" fill="#111"/><rect class="cp-tv cp-tv' + (1 + i % 3) + '" x="' + (x + 3) + '" y="' + (y + 3) + '" width="74" height="48"/>'; }).join("") +
      /* anime moment on one screen: speed lines + a glowing energy ball */
      '<g>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (119 + 37) + ' ' + (33 + 24) + 'L' + (119 + 37 + 34 * Math.cos(i * 0.63)).toFixed(1) + ' ' + (33 + 24 + 22 * Math.sin(i * 0.63)).toFixed(1) + '" stroke="#fff" stroke-width="1" opacity=".7"/>').join("") +
      '<circle class="cp-glow" cx="156" cy="57" r="10" fill="#8fe8ff"/><circle cx="156" cy="57" r="5" fill="#fff"/></g>' +
      /* floor + counter */
      '<rect x="0" y="154" width="400" height="106" fill="#c9cdd2"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 154l-20 106" stroke="#b9bdc2" stroke-width="1.5"/>').join("") +
      '<rect x="40" y="176" width="320" height="56" rx="3" fill="#3a4250"/><rect x="40" y="172" width="320" height="8" rx="2" fill="#5a6474"/>' +
      /* blue work shirt folded + name tag */
      '<path d="M90 160h70l6 14h-82z" fill="#2457b8"/><path d="M110 160l15 8l15 -8" stroke="#1a3f86" stroke-width="2" fill="none"/>' +
      '<rect x="180" y="158" width="46" height="16" rx="3" fill="#fff" stroke="#333" stroke-width="1"/><text x="203" y="170" text-anchor="middle" ' + font + ' font-size="9" fill="#333">CHRIS</text>' +
      /* register + headphones box */
      '<rect x="270" y="148" width="50" height="26" rx="3" fill="#20262e"/><rect x="276" y="152" width="38" height="10" fill="' + GREEN + '" opacity=".7"/>' +
      '<rect x="60" y="196" width="40" height="30" rx="3" fill="' + GOLD + '"/><path d="M68 214q12 -16 24 0" stroke="#333" stroke-width="3" fill="none"/>',
      "");
  }

  /* 3. X-Files: the case room, green lamp light, metal file cabinets, a corkboard of photos and red string, a beam of light through the blinds */
  function cpfiles() {
    return svg(
      '<rect width="400" height="260" fill="#0d1612"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#16241d"/>' +
      /* window with blinds + light beam */
      '<rect x="270" y="20" width="110" height="90" fill="#0a0f1e" stroke="#3a4a42" stroke-width="3"/><circle cx="330" cy="48" r="10" fill="#e8f0ff" opacity=".85"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="270" y="' + (24 + i * 10) + '" width="110" height="4" fill="#3a4a42" opacity=".9"/>').join("") +
      '<path class="cp-beam" d="M270 30L120 190h120L380 110z" fill="' + GREEN + '"/>' +
      /* corkboard */
      '<rect x="24" y="20" width="200" height="110" fill="#8a6440" stroke="#4a3420" stroke-width="3"/>' +
      [[40, 32], [92, 40], [148, 30], [60, 82], [120, 86], [176, 78]].map((p, i) => '<rect x="' + p[0] + '" y="' + p[1] + '" width="34" height="26" fill="' + (i % 2 ? "#e8e2d0" : "#d0dccc") + '" transform="rotate(' + ((i % 3) - 1) * 4 + ' ' + (p[0] + 17) + ' ' + (p[1] + 13) + ')"/><circle cx="' + (p[0] + 17) + '" cy="' + (p[1] + 2) + '" r="2.5" fill="#d33"/>').join("") +
      '<path d="M57 34L109 42L165 32M57 34L77 84L137 88L193 80M109 42L137 88" stroke="#d33" stroke-width="1.5" fill="none"/>' +
      /* file cabinets */
      [20, 92].map(x => '<rect x="' + x + '" y="140" width="66" height="100" rx="2" fill="#5a6660" stroke="#2a3430" stroke-width="2"/>' +
        [150, 182, 214].map(y => '<rect x="' + (x + 6) + '" y="' + y + '" width="54" height="26" rx="2" fill="#6e7a74"/><rect x="' + (x + 24) + '" y="' + (y + 10) + '" width="18" height="5" rx="2" fill="#2a3430"/>').join("")).join("") +
      '<rect x="98" y="152" width="54" height="10" fill="#f0ead6"/><text x="125" y="160" text-anchor="middle" ' + font + ' font-size="8" fill="#222">X-FILES</text>' +
      /* desk with lamp + folders */
      '<rect x="190" y="190" width="200" height="12" fill="#3a2a1e"/><rect x="200" y="202" width="10" height="58" fill="#2a1e14"/><rect x="370" y="202" width="10" height="58" fill="#2a1e14"/>' +
      '<path d="M226 190v-30" stroke="#2a3a2a" stroke-width="3"/><path d="M210 160h32l-6 -14h-20z" fill="#2f7a3a"/><path class="cp-glow" d="M212 162l-14 28h56l-14 -28z" fill="#d8ffb0" opacity=".25"/>' +
      '<g transform="rotate(-6 300 182)"><rect x="262" y="174" width="70" height="16" fill="#d8b46a"/><rect x="262" y="170" width="24" height="6" fill="#d8b46a"/><text x="297" y="186" text-anchor="middle" ' + font + ' font-size="8" fill="#5a3a10">CASE 07017</text></g>' +
      '<g class="cp-bob"><path d="M330 74l18 -6l18 6l-18 6z" fill="#c8d0d8" opacity=".9"/><ellipse cx="348" cy="72" rx="8" ry="4" fill="' + GREEN + '" opacity=".8"/></g>',
      "");
  }

  /* 4. The freestyle that changed it: a live stream set - ring light, mic on a boom arm, the big monitor with LIVE in red and the chat flying up */
  function cpstream() {
    let chat = "";
    for (let i = 0; i < 14; i++) chat += '<rect x="292" y="' + (60 + i * 12) + '" width="' + (30 + (i * 17) % 50) + '" height="6" rx="3" fill="' + [GREEN, GOLD, BLUE, "#ff7aa8"][i % 4] + '" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#120c22"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="0" width="50" height="180" fill="' + (i % 2 ? "#1a1230" : "#160f2a") + '"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#0c0818"/>' +
      /* monitor with chat */
      '<rect x="210" y="30" width="176" height="130" rx="4" fill="#05050a" stroke="#3a3450" stroke-width="3"/>' +
      '<rect x="218" y="40" width="64" height="20" rx="3" fill="#e0263a" class="cp-glow"/><text x="250" y="55" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">LIVE</text>' +
      '<rect x="218" y="66" width="64" height="86" fill="#1d1640"/><path d="M240 120l10 -20l10 20z" fill="#6a5acd" opacity=".6"/>' +
      '<clipPath id="cp4c"><rect x="288" y="40" width="94" height="114"/></clipPath><g clip-path="url(#cp4c)"><g class="cp-chat">' + chat + '</g></g>' +
      '<rect x="290" y="160" width="10" height="20" fill="#3a3450"/><rect x="270" y="178" width="50" height="6" fill="#3a3450"/>' +
      /* ring light */
      '<circle class="cp-glow" cx="100" cy="90" r="50" fill="none" stroke="#fff6e0" stroke-width="10"/><circle cx="100" cy="90" r="64" fill="#fff6e0" opacity=".05"/>' +
      '<path d="M100 140v110M80 250h40" stroke="#444" stroke-width="4"/>' +
      /* mic on a boom arm */
      '<path d="M190 180l-30 -60l-40 30" stroke="#555" stroke-width="5" fill="none"/><rect x="106" y="140" width="22" height="40" rx="11" fill="#2a2a2e" stroke="#777" stroke-width="2" transform="rotate(-30 117 160)"/>' +
      '<rect x="160" y="184" width="200" height="10" rx="2" fill="#2a2440"/>' +
      tag("BARS", 30, 230, 32, GOLD, -5) + tag("PRAY 4 ME", 150, 236, 22, GREEN, -3),
      "");
  }

  /* 5. Main St and S Arlington Av, East Orange: green signs, CHRIS PATRICK tagged, the red-brick East Orange Main Library with its white trim behind, cars going by */
  function cpcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cp5)"/>' +
      /* library: red brick body, white cornice and columns, tall windows */
      '<rect x="90" y="40" width="230" height="104" fill="#9a4a36"/><rect x="84" y="34" width="242" height="10" fill="#f0ece2"/>' +
      '<path d="M150 34l55 -20l55 20z" fill="#f0ece2"/>' +
      [160, 182, 228, 250].map(x => '<rect x="' + x + '" y="44" width="8" height="96" fill="#f0ece2"/>').join("") +
      [100, 124, 280, 300].map((x, i) => '<rect class="' + (i % 2 ? "cp-glow" : "") + '" x="' + x + '" y="62" width="14" height="44" fill="#ffd98a" opacity=".85"/><rect x="' + (x - 2) + '" y="58" width="18" height="4" fill="#f0ece2"/>').join("") +
      '<rect x="196" y="96" width="20" height="44" fill="#3a2a22"/><rect x="150" y="138" width="110" height="6" fill="#e0dcd2"/>' +
      [30, 360].map(x => '<circle cx="' + x + '" cy="98" r="30" fill="#3f7a3a"/><rect x="' + (x - 4) + '" y="110" width="8" height="34" fill="#4a3424"/>').join("") +
      /* street + cars */
      '<rect x="0" y="144" width="400" height="22" fill="#4a4a50"/><path d="M0 155h400" stroke="#f2c200" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      '<g class="cp-car"><rect x="0" y="146" width="44" height="12" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="159" r="3.5" fill="#111"/><circle cx="34" cy="159" r="3.5" fill="#111"/></g>' +
      '<g class="cp-car cp-car2"><rect x="0" y="146" width="40" height="12" rx="4" fill="' + GOLD + '"/><circle cx="9" cy="159" r="3.5" fill="#111"/><circle cx="31" cy="159" r="3.5" fill="#111"/></g>' +
      /* the wall */
      '<rect x="0" y="166" width="296" height="70" fill="#7a4232"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (174 + i * 8) + 'h296" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("CHRIS PATRICK", 12, 206, 30, GREEN, -5) + tag("07017", 30, 230, 20, GOLD, -3) + tag("X-FILES", 150, 230, 18, BLUE, -3) +
      '<g class="cp-sp"><circle cx="262" cy="190" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="cp-sp cp-sp2"><circle cx="268" cy="184" r="2" fill="' + GREEN + '" opacity=".6"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#8e8a82"/><rect x="0" y="234" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="150" width="6" height="86" fill="#2f2f2f"/>' + sign(300, 150, 84, "Main St") + sign(286, 176, 112, "S Arlington Av"),
      sky("cp5", "#2a3a6a", "#e8906a"));
  }

  window.SCENES = { cpstop: cpstop, cpstore: cpstore, cpfiles: cpfiles, cpstream: cpstream, cpcorner: cpcorner };
})();
