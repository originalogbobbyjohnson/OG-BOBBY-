/* michaelbolton scenes (Regions tab: Boston + New England; New Haven, CT, where Michael Bolotin was born and grew up). CSS classes prefixed mbo- (the page's own anim-train is kept on the train).
   1 New Haven Union Station on Metro-North / Shore Line East: covered platform under the steel canopy, the station's pale stone head house behind, black sign with the blue MN badge, a silver M8 with its red stripe sliding in.
   2 300 York St, New Haven: the low club front where his hard-rock band Blackjack headlined, marquee bulbs chasing, a line out the door.
   3 The New Haven Green on Elm St (he lived on Elm St as a boy): the red-brick churches with white steeples and the brownstone Gothic church on Temple St, elms dropping leaves.
   4 The Wallingford, CT studio where Blackjack cut its records: tape machine reels turning, VU needles, a mic and headphones in the booth.
   5 Whalley Ave and Ella T. Grasso Blvd (two of the streets he grew up on): green signs, MICHAEL BOLTON tagged on the brick, East Rock's red cliff and white monument on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes mboflick{0%,100%{opacity:1}44%{opacity:.8}50%{opacity:.3}56%{opacity:.95}}.mbo-flk{animation:mboflick 2.4s infinite}.mbo-flk2{animation-delay:-1.1s}' +
    '@keyframes mbobob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.mbo-bob{animation:mbobob .9s ease-in-out infinite}.mbo-bob2{animation-delay:-.45s}' +
    '@keyframes mbospin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mbo-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mbospin 2.6s linear infinite}' +
    '@keyframes mbochase{0%,100%{opacity:.25}50%{opacity:1}}.mbo-bulb{animation:mbochase .8s steps(2) infinite}.mbo-bulb2{animation-delay:-.4s}' +
    '@keyframes mboleaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,150px) rotate(300deg);opacity:0}}.mbo-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:mboleaf 5s linear infinite}.mbo-leaf2{animation-delay:-1.7s}.mbo-leaf3{animation-delay:-3.4s}' +
    '@keyframes mboneedle{0%,100%{transform:rotate(-30deg)}40%{transform:rotate(18deg)}70%{transform:rotate(-6deg)}}.mbo-ndl{transform-box:fill-box;transform-origin:50% 100%;animation:mboneedle 1.3s ease-in-out infinite}.mbo-ndl2{animation-delay:-.6s}' +
    '@keyframes mbonote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-90px);opacity:0}}.mbo-note{animation:mbonote 3.2s ease-out infinite}.mbo-note2{animation-delay:-1.1s}.mbo-note3{animation-delay:-2.2s}' +
    '@keyframes mboflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mbo-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mboflag 1.6s ease-in-out infinite}' +
    '@keyframes mbocar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.mbo-car{animation:mbocar 8s linear infinite}.mbo-car2{animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const brick = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = y + 8; r < y + h; r += 8) { s += '<path d="M' + x + ' ' + r + 'h' + w + '" stroke="' + m + '" stroke-width=".8" opacity=".6"/>'; for (let q = x + ((r / 8) % 2 ? 9 : 0); q < x + w; q += 18) s += '<path d="M' + q + ' ' + (r - 8) + 'v8" stroke="' + m + '" stroke-width=".7" opacity=".5"/>'; } return s; };
  const pill = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (label.length * 8 + 14) / 2) + '" y="' + (y + 13) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">' + label + '</text>';
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><path d="M' + (x - 7) + ' ' + (y - 23) + 'h14l2 16h-18z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y - 7) + 'l-1 7h5l2-6 2 6h5l-1-7z" fill="' + c + '"/></g>';
  const MN = "#0039a6", RED = "#d7263d", GOLD = "#e8b04a";

  /* 1. New Haven Union Station, Metro-North / Shore Line East */
  function mbstation() {
    const car = (x) =>
      '<rect x="' + x + '" y="118" width="170" height="64" rx="5" fill="#cfd3d6" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="166" width="170" height="6" fill="' + RED + '"/>' +
      '<rect x="' + x + '" y="121" width="170" height="3" fill="#8b9196"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 8 + i * 27) + '" y="132" width="20" height="18" rx="2" fill="#1f2a33"/>').join("") +
      '<rect x="' + (x + 74) + '" y="130" width="22" height="42" fill="#b9bec2" stroke="#6b7177"/><path d="M' + (x + 85) + ' 130v42" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 24) + '" cy="184" r="6" fill="#222"/><circle cx="' + (x + 146) + '" cy="184" r="6" fill="#222"/>';
    const train = '<g class="anim-train">' + car(20) + car(194) +
      '<path d="M364 118h8q8 0 8 10v54h-16z" fill="#cfd3d6" stroke="#6b7177" stroke-width="1.5"/><rect x="366" y="130" width="10" height="14" rx="2" fill="#1f2a33"/>' +
      '<rect x="368" y="160" width="9" height="5" rx="2" fill="#fff6b0"/>' +
      '<rect x="286" y="104" width="74" height="11" rx="1" fill="#111"/><text x="323" y="112.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" fill="#ffb000">GRAND CENTRAL</text>' +
      '</g>';
    let cols = "";
    for (let x = 30; x < 400; x += 80) cols += '<rect x="' + x + '" y="40" width="5" height="156" fill="#3b4148"/><path d="M' + (x - 14) + ' 40l16 12 16-12" fill="none" stroke="#3b4148" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbo_sk1)"/>' +
      /* the head house behind */
      '<rect x="60" y="6" width="280" height="40" fill="#d8cdb4"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (72 + i * 30) + '" y="14" width="14" height="24" rx="7" fill="#5b6b78"/>').join("") +
      '<rect x="56" y="4" width="288" height="5" fill="#c4b898"/>' +
      /* canopy */
      '<path d="M0 34h400v10H0z" fill="#4a525a"/><path d="M0 44h400" stroke="#2a2f34" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 50) + '" y="46" width="24" height="4" rx="2" fill="#fff8d8" class="mbo-flk' + (i % 2 ? ' mbo-flk2' : '') + '"/>').join("") +
      cols +
      /* station sign */
      '<rect x="88" y="60" width="224" height="40" rx="3" fill="#111"/>' +
      pill(98, 71, MN, "MN") +
      '<text x="212" y="80" text-anchor="middle" ' + F + ' font-weight="700" font-size="15" fill="#fff" letter-spacing="1">NEW HAVEN</text>' +
      '<text x="212" y="93" text-anchor="middle" ' + F + ' font-size="8.5" fill="#cfd6de" letter-spacing="1">UNION STATION</text>' +
      '<path d="M200 60v-16M240 60v-16" stroke="#3b4148" stroke-width="2"/>' +
      '<rect x="0" y="182" width="400" height="12" fill="#1a1c1e"/><path d="M0 188h400M0 192h400" stroke="#7a7d80" stroke-width="2"/>' +
      train +
      '<rect x="0" y="196" width="400" height="64" fill="#8f8c86"/>' +
      '<rect x="0" y="196" width="400" height="7" fill="#e6c832"/>' +
      '<rect x="248" y="214" width="120" height="26" rx="2" fill="#111"/><text x="308" y="226" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">SHORE LINE EAST</text>' +
      '<text x="308" y="236" text-anchor="middle" ' + F + ' font-size="7" fill="#cfd6de">TO NEW LONDON</text>' +
      person(80, 252, "#22262b", "mbo-bob") + person(110, 252, "#3a2e2a", "mbo-bob mbo-bob2"),
      sky("mbo_sk1", "#8fb3d1", "#dfe9f0")
    );
  }

  /* 2. 300 York St, New Haven: the club where Blackjack headlined */
  function mbclub() {
    let bulbs = "";
    for (let i = 0; i < 22; i++) bulbs += '<circle cx="' + (92 + i * 10.3) + '" cy="72" r="2.6" fill="#ffe08a" class="mbo-bulb' + (i % 2 ? ' mbo-bulb2' : '') + '"/><circle cx="' + (92 + i * 10.3) + '" cy="118" r="2.6" fill="#ffe08a" class="mbo-bulb' + (i % 2 ? '' : ' mbo-bulb2') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbo_sk2)"/>' + stars(30) +
      '<rect x="0" y="40" width="70" height="160" fill="#2b2420"/><rect x="330" y="30" width="70" height="170" fill="#251f1c"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (14 + (i % 2) * 28) + '" y="' + (56 + Math.floor(i / 2) * 40) + '" width="16" height="22" fill="#e9c46a" opacity=".55"/>').join("") +
      brick(70, 50, 260, 150, "#3a2a24", "#1c1411") +
      '<rect x="84" y="66" width="232" height="58" rx="3" fill="#141012" stroke="#5a4a3e" stroke-width="2"/>' + bulbs +
      '<text x="200" y="92" text-anchor="middle" ' + A + ' font-size="20" fill="' + GOLD + '" letter-spacing="2">TONIGHT</text>' +
      '<text x="200" y="112" text-anchor="middle" ' + A + ' font-size="15" fill="#f2efe8" letter-spacing="3">BLACKJACK</text>' +
      '<rect x="170" y="140" width="60" height="60" fill="#120d0b" stroke="#5a4a3e" stroke-width="2"/><rect x="174" y="144" width="52" height="56" fill="#e0a33a" opacity=".35" class="mbo-flk"/>' +
      '<rect x="96" y="140" width="56" height="34" fill="#1b1416" stroke="#5a4a3e"/><rect x="248" y="140" width="56" height="34" fill="#1b1416" stroke="#5a4a3e"/>' +
      '<text x="124" y="161" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#d7263d" class="mbo-flk mbo-flk2">LIVE</text>' +
      '<text x="276" y="161" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#5ac8fa" class="mbo-flk">MUSIC</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3d3f44"/><rect x="0" y="200" width="400" height="6" fill="#6b6d72"/>' +
      '<rect x="236" y="184" width="70" height="14" rx="2" fill="#2a5a3a"/><text x="271" y="194" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">300 YORK ST</text>' +
      Array.from({ length: 8 }, (_, i) => person(30 + i * 22 + (i > 3 ? 190 : 0), 236, "#0d0d10", "mbo-bob" + (i % 2 ? " mbo-bob2" : ""))).join(""),
      sky("mbo_sk2", "#0d1030", "#3a2550")
    );
  }

  /* 3. The New Haven Green on Elm St */
  function mbgreen() {
    const steeple = (x, base) =>
      '<rect x="' + (x - 34) + '" y="' + base + '" width="68" height="' + (196 - base) + '" fill="#9b3b2c"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (x - 26 + i * 20) + '" y="' + (base + 18) + '" width="10" height="26" rx="5" fill="#2a2420"/>').join("") +
      '<path d="M' + (x - 38) + ' ' + base + 'l38-22 38 22z" fill="#f4f1e8"/>' +
      '<rect x="' + (x - 34) + '" y="' + (base + 50) + '" width="68" height="' + (146 - base) + '" fill="#9b3b2c"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (x - 30 + i * 18) + '" y="' + (base + 56) + '" width="4" height="' + (140 - base) + '" fill="#f4f1e8"/>').join("") +
      '<rect x="' + (x - 12) + '" y="' + (base - 46) + '" width="24" height="26" fill="#f4f1e8"/>' +
      '<rect x="' + (x - 9) + '" y="' + (base - 72) + '" width="18" height="26" fill="#f4f1e8"/><circle cx="' + x + '" cy="' + (base - 60) + '" r="5" fill="#2a2420"/>' +
      '<path d="M' + (x - 7) + ' ' + (base - 72) + 'l7-40 7 40z" fill="#f4f1e8"/>';
    const elm = (x, y, s) => '<path d="M' + x + ' ' + y + 'v-' + (40 * s) + '" stroke="#4a3a2a" stroke-width="' + (5 * s) + '"/><ellipse cx="' + x + '" cy="' + (y - 52 * s) + '" rx="' + (34 * s) + '" ry="' + (24 * s) + '" fill="#d98a2b"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (y - 44 * s) + '" rx="' + (20 * s) + '" ry="' + (14 * s) + '" fill="#c4691f"/>';
    let leaves = "";
    for (let i = 0; i < 9; i++) leaves += '<path d="M' + (40 + i * 42) + ' ' + (80 + (i * 37) % 60) + 'q4-4 8 0q-4 4-8 0z" fill="' + (i % 2 ? "#d98a2b" : "#b5471f") + '" class="mbo-leaf' + (i % 3 ? (i % 3 === 1 ? ' mbo-leaf2' : ' mbo-leaf3') : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbo_sk3)"/>' +
      /* brownstone Gothic church on Temple St, center */
      '<rect x="168" y="96" width="64" height="100" fill="#6e5848"/><path d="M164 96l36-28 36 28z" fill="#5a4636"/>' +
      '<rect x="186" y="40" width="28" height="60" fill="#6e5848"/><path d="M186 40l4-10 4 10M196 40l4-12 4 12M206 40l4-10 4 10" fill="#5a4636"/>' +
      '<path d="M190 130q10-26 20 0v40h-20z" fill="#2a2420"/><circle cx="200" cy="112" r="8" fill="#c9a24a" opacity=".7"/>' +
      steeple(84, 104) + steeple(316, 110) +
      '<rect x="0" y="196" width="400" height="64" fill="#5e8f3e"/><path d="M0 214q200-14 400 0" stroke="#d8cdb4" stroke-width="7" fill="none"/>' +
      elm(30, 214, 1.1) + elm(150, 232, 0.9) + elm(260, 236, 0.95) + elm(380, 218, 1.1) +
      leaves +
      '<rect x="160" y="238" width="80" height="16" rx="2" fill="#0f6b3b"/><text x="200" y="250" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">ELM ST</text>',
      sky("mbo_sk3", "#7fb0d8", "#f1e1c0")
    );
  }

  /* 4. The Wallingford studio where Blackjack recorded */
  function mbstudio() {
    const reel = (x, y) => '<g class="mbo-spin"><circle cx="' + x + '" cy="' + y + '" r="20" fill="#c8ccd0" stroke="#555" stroke-width="2"/><circle cx="' + x + '" cy="' + y + '" r="5" fill="#333"/>' +
      [0, 120, 240].map(a => '<circle cx="' + (x + 11 * Math.cos(a * Math.PI / 180)) + '" cy="' + (y + 11 * Math.sin(a * Math.PI / 180)) + '" r="5" fill="#555"/>').join("") + '</g>';
    const meter = (x, cls) => '<rect x="' + x + '" y="150" width="44" height="30" rx="3" fill="#f3e6b0" stroke="#333"/><path d="M' + (x + 6) + ' 170q16-14 32 0" fill="none" stroke="#999"/><path d="M' + (x + 30) + ' 170l4-10" stroke="#d7263d"/><g class="mbo-ndl ' + cls + '"><path d="M' + (x + 22) + ' 176v-20" stroke="#111" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2320"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="120" fill="' + (i % 2 ? "#3a2f2a" : "#33292a") + '"/>').join("") +
      /* booth window */
      '<rect x="216" y="20" width="164" height="96" rx="3" fill="#1a2a35" stroke="#111" stroke-width="5"/>' +
      '<rect x="220" y="24" width="156" height="88" fill="#203848"/>' +
      '<path d="M298 50v40" stroke="#888" stroke-width="2"/><rect x="292" y="40" width="12" height="16" rx="6" fill="#c0c4c8"/><path d="M290 90h16" stroke="#888" stroke-width="3"/>' +
      '<path d="M330 48q10-14 20 0" fill="none" stroke="#111" stroke-width="3"/><rect x="326" y="48" width="8" height="12" rx="3" fill="#111"/><rect x="346" y="48" width="8" height="12" rx="3" fill="#111"/>' +
      '<text x="298" y="106" text-anchor="middle" ' + F + ' font-size="7" fill="#e9c46a" letter-spacing="1">WALLINGFORD, CT</text>' +
      '<g fill="' + GOLD + '"><text x="250" y="90" ' + F + ' font-size="16" class="mbo-note">♪</text><text x="270" y="80" ' + F + ' font-size="14" class="mbo-note mbo-note2">♫</text><text x="236" y="70" ' + F + ' font-size="13" class="mbo-note mbo-note3">♪</text></g>' +
      /* tape machine */
      '<rect x="24" y="26" width="160" height="104" rx="4" fill="#5b5f63" stroke="#222" stroke-width="2"/>' +
      reel(64, 62) + reel(144, 62) +
      '<path d="M64 82l20 20h40l20-20" fill="none" stroke="#3a2a1a" stroke-width="2"/><rect x="88" y="98" width="32" height="10" fill="#333"/>' +
      '<rect x="40" y="114" width="12" height="8" rx="2" fill="#d7263d"/><rect x="58" y="114" width="12" height="8" rx="2" fill="#ccc"/><rect x="76" y="114" width="12" height="8" rx="2" fill="#ccc"/>' +
      /* console */
      '<path d="M0 140h400v120H0z" fill="#3e3a36"/><path d="M0 140h400" stroke="#6b6560" stroke-width="3"/>' +
      meter(24, "") + meter(76, "mbo-ndl2") + meter(128, "") +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (186 + i * 14) + '" y="150" width="3" height="60" fill="#222"/><rect x="' + (182 + i * 14) + '" y="' + (164 + (i * 13) % 36) + '" width="11" height="7" rx="1" fill="' + (i % 4 === 0 ? "#d7263d" : "#e8e4dc") + '"/>').join("") +
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + (24 + (i % 12) * 13) + '" cy="' + (200 + Math.floor(i / 12) * 14) + '" r="4" fill="#1d1b19" stroke="#777"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2724"/>'
    );
  }

  /* 5. Whalley Ave and Ella T. Grasso Blvd, East Rock behind */
  function mbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mbo_sk5)"/>' +
      /* East Rock: red trap-rock cliff, the white column monument on top */
      '<path d="M120 120q40-50 110-56q60 4 110 56z" fill="#7a4a3a"/><path d="M150 120q30-30 70-40v40z" fill="#8c5644" opacity=".8"/>' +
      '<path d="M140 120q60-20 220 0" fill="#3f5a33"/>' +
      '<rect x="226" y="18" width="8" height="46" fill="#f1ede4"/><rect x="221" y="62" width="18" height="6" fill="#e3ddcf"/><rect x="223" y="14" width="14" height="5" fill="#e3ddcf"/>' +
      '<path d="M226 14l4-8 4 8z" fill="#e3ddcf"/>' +
      /* street level */
      '<rect x="0" y="120" width="400" height="80" fill="#4a3c36"/>' +
      brick(0, 96, 250, 110, "#8a4b35", "#4f281b") +
      tag("MICHAEL", 30, 160, 34, GOLD, -6) + tag("BOLTON", 70, 196, 34, "#f4f1e8", -4) +
      tag("SOUL PROVIDER", 26, 122, 13, "#5ac8fa", -3) +
      '<rect x="250" y="130" width="150" height="76" fill="#3c4148"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (262 + i * 46) + '" y="142" width="32" height="26" fill="#e9c46a" opacity=".6"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#45474b"/><rect x="0" y="204" width="400" height="5" fill="#9a9a96"/>' +
      '<path d="M0 236h400" stroke="#e6c832" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="mbo-car"><rect x="0" y="222" width="70" height="20" rx="6" fill="#2b5c8a"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#1f3550"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="56" cy="244" r="6" fill="#111"/></g>' +
      '<g class="mbo-car mbo-car2"><rect x="0" y="222" width="64" height="18" rx="6" fill="#b33a2e"/><rect x="10" y="214" width="36" height="12" rx="4" fill="#5a1c16"/><circle cx="14" cy="242" r="6" fill="#111"/><circle cx="52" cy="242" r="6" fill="#111"/></g>' +
      /* signs */
      '<rect x="318" y="96" width="5" height="112" fill="#5a5f63"/>' +
      '<rect x="262" y="96" width="120" height="18" rx="2" fill="#0f6b3b" stroke="#fff" stroke-width="1.2"/><text x="322" y="109" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">WHALLEY AVE</text>' +
      '<rect x="270" y="118" width="104" height="26" rx="2" fill="#0f6b3b" stroke="#fff" stroke-width="1.2"/><text x="322" y="129" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">ELLA T GRASSO</text><text x="322" y="139" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">BLVD</text>' +
      '<g class="mbo-flag"><rect x="323" y="150" width="26" height="16" fill="' + MN + '"/><text x="336" y="161" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" fill="#fff">CT</text></g>',
      sky("mbo_sk5", "#f2a65a", "#f7d9a8")
    );
  }

  window.SCENES = { mbstation, mbclub, mbgreen, mbstudio, mbcorner };
})();
