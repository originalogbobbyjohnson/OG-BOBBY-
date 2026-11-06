/* Boogie Boys game (NYC map, Manhattan: Harlem — "We're from Harlem" in This Is Us; first rap group signed to Capitol).
   The M10 pulling up on Frederick Douglass Blvd at W 149 St, the Harlem River Houses with their stone animals by the river,
   the Renaissance Ballroom ("the Renny") on Seventh Av, Smalls Paradise lit up at 135th, and Frederick Douglass Blvd & W 150 St
   with BOOGIE BOYS on the wall and the Dunbar Apartments behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bbcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.bb-car{animation:bbcar 7s linear infinite}.bb-car2{animation-delay:-3.5s}' +
    '@keyframes bbflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.bb-flk{animation:bbflk 2.4s infinite}' +
    '@keyframes bbblink{0%,100%{opacity:.25}50%{opacity:1}}.bb-bl{animation:bbblink 1.2s ease-in-out infinite}.bb-bl2{animation-delay:.4s}.bb-bl3{animation-delay:.8s}' +
    '@keyframes bbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bb-bob{animation:bbbob .5s ease-in-out infinite}.bb-bob2{animation-delay:.25s}' +
    '@keyframes bbspin{to{transform:rotate(360deg)}}.bb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bbspin 4s linear infinite}' +
    '@keyframes bbspark{0%,100%{opacity:0}50%{opacity:1}}.bb-spk{animation:bbspark 1.4s ease-in-out infinite}.bb-spk2{animation-delay:.45s}.bb-spk3{animation-delay:.9s}' +
    '@keyframes bbtug{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.bb-tug{animation:bbtug 18s linear infinite}' +
    '@keyframes bbwave{0%,100%{opacity:.2}50%{opacity:.7}}.bb-wv{animation:bbwave 2.6s ease-in-out infinite}.bb-wv2{animation-delay:-1.3s}' +
    '@keyframes bbsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.bb-tree{transform-box:fill-box;transform-origin:50% 100%;animation:bbsway 3s ease-in-out infinite}' +
    '@keyframes bbdrip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}.bb-drip{transform-box:fill-box;transform-origin:50% 0%;animation:bbdrip 3s ease-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* a 9 drawn by hand: round head + straight stem (never a hooked, G-looking 9). x = left edge, y = baseline, sz = cap height */
  const nine = (x, y, sz, c) => { const r = sz * 0.24, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const CYAN = "#7df9ff", MAG = "#ff3fa4", GOLD = "#ffd23f", CREAM = "#f4ead8", BUS = "#0039a6";
  const busBullet = (x, y) => '<rect x="' + (x - 20) + '" y="' + (y - 11) + '" width="40" height="22" rx="11" fill="' + BUS + '"/>' + txt("M10", x, y + 5, 13, "#fff");
  /* a walk-up with windows and a fire escape */
  const walkup = (x, y, w, col, lit) => {
    let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="' + col + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#2a1a14"/>';
    for (let yy = y + 12; yy < 150; yy += 20) for (let xx = x + 8; xx < x + w - 10; xx += 18) g += '<rect class="' + (lit ? 'bb-bl bb-bl' + ((xx + yy) % 3 + 1) : '') + '" x="' + xx + '" y="' + yy + '" width="9" height="12" fill="' + (lit ? "#ffd98a" : "#2a3446") + '"/>';
    for (let yy = y + 24; yy < 150; yy += 20) g += '<path d="M' + (x + w / 2 - 14) + ' ' + yy + 'h28" stroke="#1d1d1d" stroke-width="2"/>';
    return g;
  };

  /* 1. Frederick Douglass Blvd at W 149 St: the M10 bus pulling in at the stop, walk-ups with fire escapes */
  function bbstop() {
    let win = "";
    for (let x = 34; x < 250; x += 30) win += '<rect x="' + x + '" y="134" width="22" height="20" rx="2" fill="#1f2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbs)"/>' +
      walkup(0, 40, 96, "#8a4a36") + walkup(96, 56, 88, "#a0583e") + walkup(184, 36, 104, "#7a4032") + walkup(288, 50, 112, "#94503a") +
      /* stop sign board */
      '<rect x="54" y="72" width="292" height="34" rx="3" fill="#111"/><rect x="54" y="72" width="292" height="3" fill="#fff"/>' +
      '<text x="292" y="95" text-anchor="end" ' + font + ' font-size="14" fill="#fff">Frederick Douglass Blvd / W 14</text>' + nine(293, 95, 14, "#fff") + '<text x="304" y="95" ' + font + ' font-size="14" fill="#fff">St</text>' +
      '<rect x="0" y="168" width="400" height="10" fill="#9a9a96"/><rect x="0" y="178" width="400" height="82" fill="#4a4a4e"/>' +
      '<path d="M0 214h400" stroke="#e9d35a" stroke-width="2" stroke-dasharray="18 12"/>' +
      /* the bus: white with the blue stripe */
      '<g class="anim-train">' +
        '<rect x="10" y="118" width="270" height="62" rx="8" fill="#f3f4f6" stroke="#8b93a1" stroke-width="2"/>' + win +
        '<rect x="10" y="160" width="270" height="6" fill="' + BUS + '"/>' +
        '<rect x="252" y="124" width="24" height="34" rx="3" fill="#1f2a3a"/><rect x="236" y="122" width="40" height="8" rx="2" fill="#111"/>' + txt("M10", 256, 129, 7, "#ffcf3a") +
        '<circle cx="60" cy="182" r="10" fill="#1b1b1b"/><circle cx="230" cy="182" r="10" fill="#1b1b1b"/><circle cx="60" cy="182" r="4" fill="#888"/><circle cx="230" cy="182" r="4" fill="#888"/>' +
        '<circle cx="276" cy="170" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* stop pole */
      '<rect x="330" y="112" width="4" height="66" fill="#5b6270"/>' + busBullet(332, 112) +
      person(352, 146, "#1b1b1b") + person(372, 150, "#2a2a2a") +
      txt("HARLEM", 200, 244, 12, CREAM, 'letter-spacing="5"'),
      sky("bbs", "#5d8fd0", "#cfe0f2"));
  }

  /* 2. The Harlem River Houses: red-brick walk-ups around the planted mall, the stone animal sculpture, the river and a tug behind */
  function bbriver() {
    const block = (x, y, w) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (176 - y) + '" fill="#9c4a32"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#d9c7a8"/>';
      for (let yy = y + 10; yy < 166; yy += 16) for (let xx = x + 6; xx < x + w - 6; xx += 14) g += '<rect x="' + xx + '" y="' + yy + '" width="8" height="10" fill="#2d3b4c"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#bbr)"/>' +
      /* the river */
      '<rect x="0" y="70" width="400" height="36" fill="#4a7ea0"/>' +
      '<path class="bb-wv" d="M20 84h50M150 92h60M300 80h40" stroke="#cfe8f5" stroke-width="2"/><path class="bb-wv bb-wv2" d="M90 96h40M240 86h50" stroke="#cfe8f5" stroke-width="2"/>' +
      '<g class="bb-tug"><rect x="0" y="76" width="34" height="10" rx="2" fill="#c0392b"/><rect x="8" y="68" width="14" height="9" fill="#f3efe6"/><rect x="12" y="62" width="4" height="7" fill="#222"/></g>' +
      '<rect x="0" y="66" width="400" height="5" fill="#5f6f5a"/>' +
      /* the brick blocks */
      block(0, 96, 120) + block(280, 96, 120) + block(110, 112, 180) +
      /* the mall: lawn, paths, trees */
      '<rect x="0" y="176" width="400" height="84" fill="#6aa253"/><path d="M200 176v84M0 222h400" stroke="#d9cfb4" stroke-width="10"/>' +
      '<g class="bb-tree"><rect x="58" y="160" width="6" height="30" fill="#5b4330"/><circle cx="61" cy="152" r="20" fill="#3f8a3c"/></g>' +
      '<g class="bb-tree" style="animation-delay:-1.5s"><rect x="336" y="160" width="6" height="30" fill="#5b4330"/><circle cx="339" cy="152" r="20" fill="#3f8a3c"/></g>' +
      /* the stone bear on its plinth */
      '<rect x="170" y="206" width="60" height="22" fill="#cfc6b4" stroke="#a49a86" stroke-width="2"/>' +
      '<path d="M176 206q2-26 24-28q20 0 26 14q4 4 0 14z" fill="#e2dccd" stroke="#a49a86" stroke-width="2"/><circle cx="222" cy="186" r="9" fill="#e2dccd" stroke="#a49a86" stroke-width="2"/><circle cx="226" cy="178" r="3" fill="#e2dccd" stroke="#a49a86" stroke-width="1.5"/>' +
      person(110, 200, "#1d1d1d", "bb-bob") + person(290, 204, "#272727", "bb-bob bb-bob2") +
      '<rect x="100" y="236" width="200" height="20" rx="4" fill="#1b1410" opacity=".8"/>' + txt("HARLEM RIVER HOUSES", 200, 250, 11, CREAM, 'letter-spacing="2"'),
      sky("bbr", "#f0b27a", "#fde7c8"));
  }

  /* 3. The Renaissance Ballroom on Seventh Av: the cream stucco front with the colored tile, the arched door, dancers in the lit windows, the ball spinning */
  function bbrenny() {
    let tile = "";
    for (let x = 60; x < 340; x += 20) tile += '<path d="M' + x + ' 96l10-8l10 8l-10 8z" fill="' + ((x / 20) % 2 ? "#2f6fd6" : GOLD) + '"/>';
    const dancers = [92, 124, 276, 308].map((x, i) => person(x, 146, "#1a0f24", i % 2 ? "bb-bob" : "bb-bob bb-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbn)"/>' + stars(14) +
      '<rect x="40" y="70" width="320" height="140" fill="#e8d9bc" stroke="#b39a6e" stroke-width="2"/>' +
      '<rect x="40" y="84" width="320" height="24" fill="#d1bc93"/>' + tile +
      '<path d="M40 70h320l-18-18h-284z" fill="#c9a46a"/>' +
      txt("RENAISSANCE", 200, 66, 15, "#7a1f2b", 'letter-spacing="4"') +
      /* lit windows with dancers */
      '<rect x="72" y="124" width="72" height="44" fill="#ffcf6a"/><rect x="256" y="124" width="72" height="44" fill="#ffcf6a"/>' + dancers +
      '<path d="M72 124h72M256 124h72" stroke="#7a5a2a" stroke-width="3"/>' +
      /* arched door + mirror ball inside */
      '<path d="M170 210v-60q30-34 60 0v60z" fill="#3a1a2a" stroke="#b39a6e" stroke-width="3"/>' +
      '<g class="bb-spin"><circle cx="200" cy="160" r="12" fill="#c9ced6"/><path d="M188 160h24M200 148v24M192 152l16 16M208 152l-16 16" stroke="#7a7f88" stroke-width="1"/></g>' +
      '<circle class="bb-spk" cx="184" cy="190" r="2.5" fill="' + CYAN + '"/><circle class="bb-spk bb-spk2" cx="214" cy="196" r="2.5" fill="' + MAG + '"/><circle class="bb-spk bb-spk3" cx="200" cy="182" r="2" fill="#fff"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4a4e"/><rect x="0" y="210" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="bb-car"><rect x="0" y="230" width="46" height="13" rx="4" fill="' + MAG + '"/><circle cx="10" cy="243" r="4" fill="#111"/><circle cx="36" cy="243" r="4" fill="#111"/></g>' +
      txt("SEVENTH AV · HARLEM", 300, 252, 9, CREAM, 'letter-spacing="2"'),
      sky("bbn", "#120d2a", "#3b2a5a"));
  }

  /* 4. Smalls Paradise at Seventh Av and 135th: low brick front, the neon script sign, chaser bulbs, the line outside */
  function bbsmalls() {
    let bulbs = "";
    for (let x = 70; x <= 330; x += 13) bulbs += '<circle class="bb-bl bb-bl' + ((x / 13 | 0) % 3 + 1) + '" cx="' + x + '" cy="80" r="3" fill="#fff3b0"/>';
    let brick = "";
    for (let y = 96; y < 206; y += 8) for (let x = (y / 8) % 2 ? 40 : 32; x < 368; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#5a2a22"/>';
    const line = [60, 82, 104, 126, 148].map((x, i) => person(x, 186, i % 2 ? "#141414" : "#222", i % 2 ? "bb-bob" : "bb-bob bb-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbm)"/>' + stars(18) +
      '<rect x="32" y="88" width="336" height="118" fill="#6e3428"/>' + brick +
      '<rect x="60" y="72" width="280" height="16" fill="#1a1a1a"/>' + bulbs +
      '<rect x="96" y="100" width="208" height="40" rx="8" fill="#120a14" stroke="' + CYAN + '" stroke-width="2"/>' +
      '<text class="bb-flk" x="200" y="129" text-anchor="middle" font-family="Brush Script MT, Sedgwick Ave Display, cursive" font-style="italic" font-weight="700" font-size="25" fill="' + CYAN + '" stroke="#0aa" stroke-width=".6">Smalls Paradise</text>' +
      '<rect x="244" y="148" width="70" height="58" fill="#2a0f1e" stroke="#3a1812" stroke-width="3"/><circle class="bb-spk" cx="262" cy="170" r="2.5" fill="' + MAG + '"/><circle class="bb-spk bb-spk2" cx="296" cy="164" r="2.5" fill="' + GOLD + '"/><circle class="bb-spk bb-spk3" cx="280" cy="188" r="2.5" fill="' + CYAN + '"/>' +
      line +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4a4e"/><rect x="0" y="206" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="bb-car bb-car2"><rect x="0" y="228" width="50" height="14" rx="4" fill="' + GOLD + '"/><circle cx="12" cy="242" r="4" fill="#111"/><circle cx="38" cy="242" r="4" fill="#111"/></g>' +
      txt("SEVENTH AV & 135TH", 290, 252, 9, CREAM, 'letter-spacing="2"'),
      sky("bbm", "#0a0c1a", "#2a2244"));
  }

  /* 5. Frederick Douglass Blvd & W 150 St: green street signs, BOOGIE BOYS tagged on the wall, the Dunbar Apartments behind */
  function bbcorner() {
    let dunbar = '<rect x="0" y="54" width="400" height="80" fill="#a8603e"/><rect x="0" y="54" width="400" height="5" fill="#6e3a24"/>';
    for (let y = 64; y < 128; y += 14) for (let x = 8; x < 392; x += 16) if (!(x > 168 && x < 232 && y > 90)) dunbar += '<rect class="bb-bl bb-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="7" height="9" fill="#ffd98a" opacity=".8"/>';
    dunbar += '<path d="M170 134v-30q30-26 60 0v30z" fill="#2a1a14" stroke="#e2c9a0" stroke-width="3"/>' + txt("THE DUNBAR", 200, 50, 9, CREAM, 'letter-spacing="3" opacity=".85"');
    return svg(
      '<rect width="400" height="260" fill="url(#bbc)"/>' + stars(12).replace(/cy="(4[0-9]|5[0-9])(\.[0-9]+)?"/g, 'cy="10"') +
      dunbar +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("BOOGIE BOYS", 14, 198, 40, CYAN, -5) + '<rect class="bb-drip" x="50" y="196" width="3" height="16" fill="' + CYAN + '"/><rect class="bb-drip" style="animation-delay:-1.4s" x="170" y="186" width="3" height="18" fill="' + CYAN + '"/>' +
      tag("FLY GIRL", 206, 222, 20, MAG, -3) + tag("ROMEO KNIGHT", 18, 222, 15, GOLD, -2) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="bb-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + MAG + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="362" y="66" width="5" height="162" fill="#3d4b3f"/>' +
      '<rect x="250" y="70" width="148" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Frederick Douglass Blvd", 324, 85, 10.5, "#fff") +
      '<rect x="302" y="96" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 150 St", 350, 112, 12, "#fff") +
      '<circle class="bb-flk" cx="364" cy="64" r="4" fill="#fff6c2"/>',
      sky("bbc", "#0a0c1a", "#3a2c4e"));
  }

  window.SCENES = { bbstop: bbstop, bbriver: bbriver, bbrenny: bbrenny, bbsmalls: bbsmalls, bbcorner: bbcorner };
})();
