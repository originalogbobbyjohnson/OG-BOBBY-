/* Gang Starr game (NYC map, Brooklyn: Bed-Stuy). Guru was living with his aunt in Bed-Stuy when he first came to Brooklyn;
   DJ Premier stayed with the Franklins in East New York and cut the first Gang Starr demo beats on a borrowed 4-track in a basement there.
   Rooms: the B46 pulling up at Malcolm X Blvd & Fulton St, the East New York basement (the first demo), Such-A-Sound Studios in Brooklyn
   (where the early records got cut), the Gang Starr apartment at W 183rd St & Andrews Av in the Bronx with the 4 train on the Jerome Av el,
   and Decatur St & Malcolm X Blvd with the yellow-brick Immanuel Congregational Church behind. 400 x 260 SVGs. CSS classes prefixed "gs-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gscar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.gs-car{animation:gscar 7s linear infinite}.gs-car2{animation-delay:-3.5s}' +
    '@keyframes gsblink{0%,100%{opacity:.25}50%{opacity:1}}.gs-bl{animation:gsblink 1.6s ease-in-out infinite}.gs-bl2{animation-delay:.5s}.gs-bl3{animation-delay:1s}' +
    '@keyframes gsflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.gs-flk{animation:gsflick 2.6s infinite}' +
    '@keyframes gsel{from{transform:translateX(430px)}to{transform:translateX(-330px)}}.gs-el{animation:gsel 6.5s linear infinite}' +
    '@keyframes gsspin{to{transform:rotate(360deg)}}.gs-spin{transform-box:fill-box;transform-origin:50% 50%;animation:gsspin 1.4s linear infinite}.gs-spin2{animation-duration:1s}' +
    '@keyframes gsswing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.gs-swing{transform-box:fill-box;transform-origin:50% 0%;animation:gsswing 2.4s ease-in-out infinite}' +
    '@keyframes gsfade{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.gs-fd{transform-box:fill-box;transform-origin:50% 100%;animation:gsfade .8s ease-in-out infinite}.gs-fd2{animation-delay:.25s}.gs-fd3{animation-delay:.5s}' +
    '@keyframes gsneedle{0%,100%{transform:rotate(-35deg)}40%{transform:rotate(25deg)}70%{transform:rotate(5deg)}}.gs-ndl{transform-box:fill-box;transform-origin:50% 100%;animation:gsneedle .9s ease-in-out infinite}.gs-ndl2{animation-delay:.3s}' +
    '@keyframes gswalk{from{transform:translateX(-60px)}to{transform:translateX(200px)}}.gs-walk{animation:gswalk 5s linear infinite}' +
    '@keyframes gsbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.gs-bob{animation:gsbob .55s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e8d44d", RED = "#d7263d", CREAM = "#f4ead8", BLUE = "#0039a6", GRN = "#00933c";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* a Bed-Stuy brownstone: stoop, tall windows, cornice */
  const brownstone = (x, w, top, col) => {
    let g = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (170 - top) + '" fill="' + col + '"/>' +
      '<rect x="' + (x - 2) + '" y="' + (top - 6) + '" width="' + (w + 4) + '" height="8" fill="#3a2a20"/>';
    for (let yy = top + 12; yy < 130; yy += 30) for (let xx = x + 8; xx < x + w - 12; xx += 20) g += '<rect x="' + xx + '" y="' + yy + '" width="11" height="20" rx="1" fill="#ffd98a" opacity=".7"/><rect x="' + (xx - 1) + '" y="' + (yy - 3) + '" width="13" height="3" fill="#3a2a20"/>';
    g += '<path d="M' + (x + w - 30) + ' 170l14 -26h14v26z" fill="#4a3428"/><rect x="' + (x + w - 18) + '" y="126" width="12" height="18" fill="#2a1a12"/>';
    return g;
  };

  /* 1. Malcolm X Blvd & Fulton St, Bed-Stuy: the blue bus stop sign, the B46 pulling in, brownstones behind */
  function b46() {
    let win = "";
    for (let x = 40; x < 250; x += 30) win += '<rect x="' + x + '" y="126" width="22" height="22" rx="2" fill="#bcd8f0" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs1)"/>' + stars(12) +
      brownstone(0, 92, 50, "#6b4a3a") + brownstone(96, 88, 44, "#7a5440") + brownstone(188, 96, 54, "#694636") + brownstone(288, 112, 46, "#76503e") +
      '<rect x="0" y="170" width="400" height="20" fill="#7d7f84"/><rect x="0" y="170" width="400" height="3" fill="#a5a7ab"/><rect x="0" y="190" width="400" height="70" fill="#3e4045"/>' +
      '<path d="M0 226h400" stroke="#e9c46a" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* street lamp */
      '<rect x="22" y="80" width="4" height="110" fill="#2d3b33"/><path d="M24 82q14-8 26 0" stroke="#2d3b33" stroke-width="4" fill="none"/><circle class="gs-flk" cx="50" cy="86" r="5" fill="#fff3c4"/>' +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="20" y="112" width="270" height="92" rx="8" fill="#f2f2ee" stroke="#9aa0a6" stroke-width="2"/>' +
        '<rect x="20" y="160" width="270" height="10" fill="' + BLUE + '"/><rect x="20" y="172" width="270" height="4" fill="#ffc72c"/>' + win +
        '<rect x="262" y="124" width="24" height="44" rx="3" fill="#bcd8f0"/>' +
        '<rect x="70" y="114" width="170" height="10" rx="2" fill="#111"/>' + '<text x="155" y="122" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="8" fill="#ffb000">B46 MALCOLM X BLVD</text>' +
        '<circle cx="60" cy="204" r="13" fill="#1a1a1a"/><circle cx="60" cy="204" r="5" fill="#777"/><circle cx="246" cy="204" r="13" fill="#1a1a1a"/><circle cx="246" cy="204" r="5" fill="#777"/>' +
        '<circle cx="284" cy="190" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* bus stop sign */
      '<rect x="336" y="96" width="4" height="96" fill="#5a6068"/>' +
      '<rect x="314" y="70" width="50" height="58" rx="4" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/>' +
      txt("BUS", 339, 86, 11, "#fff") + txt("STOP", 339, 98, 11, "#fff") +
      '<rect x="318" y="104" width="20" height="13" rx="2" fill="#fff"/><text x="328" y="114" text-anchor="middle" ' + font + ' font-size="9" fill="' + BLUE + '">B46</text>' +
      '<rect x="341" y="104" width="20" height="13" rx="2" fill="#fff"/><text x="351" y="114" text-anchor="middle" ' + font + ' font-size="9" fill="' + BLUE + '">B25</text>' +
      person(372, 160, "#151515") + person(352, 164, "#222") +
      txt("MALCOLM X BLVD · FULTON ST · BED-STUY", 200, 246, 10, CREAM, 'letter-spacing="2"'),
      sky("gs1", "#0d1030", "#4a2c4e"));
  }

  /* 2. The East New York basement: cinder block, a bulb swinging, the borrowed 4-track with its cassette turning, crates, feet passing the window well */
  function basement() {
    let blocks = "";
    for (let y = 0; y < 190; y += 18) for (let x = (y / 18) % 2 ? -20 : 0; x < 400; x += 40) blocks += '<rect x="' + x + '" y="' + y + '" width="38" height="16" fill="#4a4a4f"/>';
    let crates = "";
    [[30, 150], [74, 150], [30, 116]].forEach(([x, y], i) => {
      crates += '<rect x="' + x + '" y="' + y + '" width="40" height="34" fill="' + ["#1f6f8b", RED, "#e0a02a"][i] + '"/>';
      for (let k = 0; k < 6; k++) crates += '<rect x="' + (x + 4 + k * 6) + '" y="' + (y - 8) + '" width="4" height="30" fill="#141414"/>';
      crates += '<path d="M' + (x + 4) + ' ' + (y + 10) + 'h32M' + (x + 4) + ' ' + (y + 22) + 'h32" stroke="#00000055" stroke-width="3"/>';
    });
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="gs-bl gs-bl' + ((r + c) % 3 + 1) + '" x="' + (292 + c * 13) + '" y="' + (130 + r * 9) + '" width="10" height="6" rx="1" fill="' + ((r + c) % 2 ? "#ff8a5b" : "#f7f3ea") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#38383d"/>' + blocks +
      /* window well with feet walking by */
      '<rect x="230" y="14" width="120" height="40" fill="#8fa7b8"/><rect x="230" y="14" width="120" height="40" fill="none" stroke="#2a2a2e" stroke-width="5"/>' +
      '<clipPath id="gsww"><rect x="232" y="16" width="116" height="36"/></clipPath><g clip-path="url(#gsww)"><g class="gs-walk"><rect x="250" y="30" width="8" height="18" fill="#222"/><rect x="262" y="34" width="8" height="14" fill="#222"/><rect x="246" y="46" width="14" height="5" rx="2" fill="#d7263d"/><rect x="260" y="46" width="14" height="5" rx="2" fill="#f7f3ea"/></g></g>' +
      '<path d="M290 14v40M230 34h120" stroke="#2a2a2e" stroke-width="3"/>' +
      /* swinging bulb + light cone */
      '<g class="gs-swing"><path d="M150 0v46" stroke="#111" stroke-width="2"/><circle cx="150" cy="52" r="8" fill="#fff3b0"/><path d="M150 60l-90 140h180z" fill="#fff3b0" opacity=".12"/></g>' +
      /* table */
      '<rect x="120" y="164" width="250" height="10" fill="#6b4a2a"/><rect x="130" y="174" width="8" height="50" fill="#4a321c"/><rect x="352" y="174" width="8" height="50" fill="#4a321c"/>' +
      /* the 4-track portastudio */
      '<rect x="140" y="124" width="130" height="40" rx="3" fill="#2b2b30" stroke="#888" stroke-width="1.5"/>' +
      '<rect x="150" y="130" width="50" height="22" rx="2" fill="#0f0f12" stroke="#666"/>' +
      '<g class="gs-spin"><circle cx="164" cy="141" r="6" fill="#f7f3ea"/><path d="M164 135v12M158 141h12" stroke="#2b2b30" stroke-width="2"/></g>' +
      '<g class="gs-spin gs-spin2"><circle cx="186" cy="141" r="6" fill="#f7f3ea"/><path d="M186 135v12M180 141h12" stroke="#2b2b30" stroke-width="2"/></g>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (212 + i * 13) + '" y="130" width="3" height="28" fill="#555"/><rect class="gs-fd gs-fd' + (i % 3 + 1) + '" x="' + (208 + i * 13) + '" y="140" width="11" height="8" fill="' + GOLD + '"/>').join("") +
      txt("4-TRACK", 175, 162, 7, "#cfcfcf") +
      /* drum machine */
      '<rect x="286" y="124" width="64" height="40" rx="3" fill="#cfc8b6" stroke="#7a7466"/>' + pads +
      /* headphones */
      '<path d="M120 162q0-26 22-26" stroke="#111" stroke-width="3" fill="none"/>' +
      crates +
      '<rect x="0" y="224" width="400" height="36" fill="#26262a"/>' +
      tag("FIRST DEMO", 210, 214, 22, GOLD, -4) +
      txt("EAST NEW YORK · THE BASEMENT", 200, 248, 10, CREAM, 'letter-spacing="3"'));
  }

  /* 3. Such-A-Sound Studios, Brooklyn: the control room, faders riding, VU needles jumping, the 2-inch reels turning, the vocal booth through the glass */
  function studio() {
    let faders = "";
    for (let i = 0; i < 16; i++) faders += '<rect x="' + (48 + i * 14) + '" y="196" width="3" height="34" fill="#444"/><rect class="gs-fd gs-fd' + (i % 3 + 1) + '" x="' + (44 + i * 14) + '" y="206" width="11" height="10" rx="1" fill="' + (i % 4 ? "#e6e6e6" : RED) + '"/>';
    let knobs = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 16; i++) knobs += '<circle cx="' + (49.5 + i * 14) + '" cy="' + (166 + r * 9) + '" r="3" fill="' + ["#d7263d", "#3fa7d6", "#e8d44d"][r] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1a24"/>' +
      /* acoustic panels */
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 50 + 2) + '" y="4" width="46" height="26" fill="#2c2838"/>').join("") +
      /* booth window */
      '<rect x="40" y="38" width="200" height="96" rx="4" fill="#0d1520" stroke="#555" stroke-width="5"/>' +
      '<rect x="44" y="42" width="192" height="88" fill="#203a52" opacity=".55"/>' +
      '<path d="M120 130v-40" stroke="#888" stroke-width="3"/><rect x="112" y="68" width="16" height="26" rx="8" fill="#c9ced6"/><circle cx="148" cy="80" r="12" fill="none" stroke="#666" stroke-width="2"/><path d="M128 80h8" stroke="#666" stroke-width="2"/>' +
      '<path d="M60 50l40 0M60 58l26 0" stroke="#ffffff22" stroke-width="3"/>' +
      /* recording light */
      '<rect x="260" y="40" width="110" height="24" rx="4" fill="#2a0c0c" stroke="#55181a"/>' + '<text class="gs-bl" x="315" y="57" text-anchor="middle" ' + font + ' font-size="13" fill="#ff3b3b">RECORDING</text>' +
      /* tape machine */
      '<rect x="262" y="72" width="108" height="76" rx="4" fill="#34343a" stroke="#777"/>' +
      '<g class="gs-spin"><circle cx="290" cy="100" r="20" fill="#9aa0a6"/><circle cx="290" cy="100" r="16" fill="#3a2a1a"/><circle cx="290" cy="100" r="4" fill="#ccc"/><path d="M290 84v32M274 100h32" stroke="#9aa0a6" stroke-width="2"/></g>' +
      '<g class="gs-spin gs-spin2"><circle cx="344" cy="100" r="20" fill="#9aa0a6"/><circle cx="344" cy="100" r="12" fill="#3a2a1a"/><circle cx="344" cy="100" r="4" fill="#ccc"/><path d="M344 84v32M328 100h32" stroke="#9aa0a6" stroke-width="2"/></g>' +
      '<path d="M290 120h54" stroke="#3a2a1a" stroke-width="2"/>' +
      txt("2 INCH", 316, 142, 8, "#cfcfcf") +
      /* VU meters */
      '<rect x="40" y="140" width="64" height="18" fill="#0b0b0b"/>' +
      [0, 1].map(i => '<rect x="' + (114 + i * 46) + '" y="140" width="40" height="18" rx="2" fill="#f1e2b0"/><path class="gs-ndl' + (i ? " gs-ndl2" : "") + '" d="M' + (134 + i * 46) + ' 157v-14" stroke="#b3122b" stroke-width="1.5"/>').join("") +
      '<rect x="206" y="140" width="34" height="18" fill="#0b0b0b"/>' +
      /* console */
      '<path d="M20 160h360l20 100h-400z" fill="#2b2b31"/><rect x="36" y="160" width="232" height="80" fill="#3b3b42"/>' + knobs + faders +
      '<rect x="280" y="168" width="90" height="58" rx="3" fill="#232328"/>' +
      txt("SUCH-A-SOUND", 325, 192, 11, GOLD) + txt("BROOKLYN", 325, 208, 9, CREAM, 'letter-spacing="2"'));
  }

  /* 4. W 183rd St & Andrews Av, the Bronx: the Gang Starr apartment, buff brick and fire escapes, a lit window with the decks going, the 4 train on the Jerome Av el behind */
  function andrews() {
    let win = "";
    for (let y = 92; y < 196; y += 26) for (let x = 64; x < 340; x += 30) {
      const lit = (x * 7 + y * 3) % 5 === 0;
      win += '<rect x="' + x + '" y="' + y + '" width="16" height="18" fill="' + (lit ? "#ffd98a" : "#26303d") + '"' + (lit ? ' class="gs-bl gs-bl' + ((x + y) % 3 + 1) + '"' : "") + '/>';
    }
    let fe = "";
    [100, 222].forEach(x => { for (let y = 112; y < 200; y += 26) fe += '<rect x="' + (x - 8) + '" y="' + y + '" width="56" height="3" fill="#15161a"/><path d="M' + (x - 8) + ' ' + y + 'v-10M' + (x + 48) + ' ' + y + 'v-10M' + (x - 8) + ' ' + (y - 10) + 'h56" stroke="#15161a" stroke-width="1.5"/><path d="M' + (x + 4) + ' ' + (y + 3) + 'l26 23" stroke="#15161a" stroke-width="2"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#gs4)"/>' + stars(18) +
      /* the el + the 4 train */
      '<g class="gs-el"><rect x="0" y="40" width="250" height="20" rx="3" fill="#b9bec6"/>' +
        [12, 52, 92, 132, 172, 212].map(x => '<rect x="' + x + '" y="44" width="24" height="8" fill="#fff3b0" opacity=".85"/>').join("") +
        '<circle cx="238" cy="50" r="7" fill="' + GRN + '"/><text x="238" y="53.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">4</text></g>' +
      '<rect x="0" y="60" width="400" height="5" fill="#334a3c"/>' + [20, 140, 260, 380].map(x => '<rect x="' + (x - 3) + '" y="65" width="6" height="20" fill="#334a3c"/>').join("") +
      /* building */
      '<rect x="50" y="76" width="300" height="140" fill="#c8a36a"/><rect x="46" y="70" width="308" height="10" fill="#8a6a3e"/>' +
      '<rect x="50" y="80" width="300" height="4" fill="#a07f4c"/>' + win + fe +
      /* the lit apartment with the decks */
      '<rect x="244" y="118" width="46" height="18" fill="#ffcf6b"/><g class="gs-spin"><circle cx="256" cy="130" r="5" fill="#111"/></g><g class="gs-spin gs-spin2"><circle cx="278" cy="130" r="5" fill="#111"/></g>' +
      /* entrance */
      '<rect x="180" y="176" width="40" height="40" fill="#2a1d12"/><path d="M176 176h48l-4 -8h-40z" fill="#8a6a3e"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4c51"/><rect x="0" y="216" width="400" height="4" fill="#808287"/>' +
      '<g class="gs-car gs-car2"><rect x="0" y="222" width="46" height="12" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="234" r="4" fill="#111"/><circle cx="36" cy="234" r="4" fill="#111"/></g>' +
      txt("W 183 ST &amp; ANDREWS AV · THE BRONX", 200, 254, 10, CREAM, 'letter-spacing="2"') +
      tag("STEP IN THE ARENA", 60, 34, 18, GOLD, -3),
      sky("gs4", "#070a1a", "#2a2a4a"));
  }

  /* 5. Decatur St & Malcolm X Blvd: green street signs, the wall tagged GANG STARR, the yellow-brick Immanuel Congregational Church behind */
  function corner() {
    let arches = "";
    [118, 158, 198, 238].forEach(x => arches += '<path d="M' + x + ' 116v-22a10 10 0 0 1 20 0v22z" fill="#3a4a6a"/><path d="M' + x + ' 104h20M' + (x + 10) + ' 84v32" stroke="#e7d39a" stroke-width="1.5"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#gs5)"/>' + stars(14) +
      /* the church: yellow Roman brick, Renaissance front, pediment, arched windows */
      '<rect x="100" y="60" width="176" height="80" fill="#d9b860"/><path d="M92 62l96 -40l96 40z" fill="#c9a650"/><path d="M110 58l78 -30l78 30" stroke="#f0dc9c" stroke-width="3" fill="none"/>' +
      '<circle cx="188" cy="46" r="7" fill="#3a4a6a" stroke="#f0dc9c" stroke-width="2"/>' +
      '<rect x="96" y="60" width="184" height="6" fill="#efd78e"/>' + arches +
      [100, 270].map(x => '<rect x="' + x + '" y="66" width="6" height="74" fill="#efd78e"/>').join("") +
      '<rect x="40" y="70" width="56" height="70" fill="#6b4a3a"/><rect x="280" y="64" width="70" height="76" fill="#76503e"/>' +
      [48, 70].map(x => '<rect class="gs-bl" x="' + x + '" y="82" width="10" height="16" fill="#ffd98a" opacity=".7"/>').join("") +
      [290, 316].map(x => '<rect class="gs-bl gs-bl2" x="' + x + '" y="78" width="10" height="16" fill="#ffd98a" opacity=".7"/>').join("") +
      /* the wall */
      '<rect x="0" y="136" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 146; y < 228; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("GANG STARR", 14, 200, 46, GOLD, -5) + tag("DAILY OPERATION", 200, 222, 17, RED, -3) + tag("FOUNDATION", 22, 224, 14, CREAM, -2) +
      /* sidewalk + street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="gs-car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="358" y="66" width="5" height="164" fill="#3d4b3f"/>' +
      '<rect x="292" y="70" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Decatur St", 344, 86, 12, "#fff") +
      '<rect x="284" y="96" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Malcolm X Blvd", 340, 112, 12, "#fff") +
      '<circle class="gs-flk" cx="360" cy="62" r="4" fill="#fff6c2"/>',
      sky("gs5", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { b46: b46, basement: basement, studio: studio, andrews: andrews, corner: corner };
})();
