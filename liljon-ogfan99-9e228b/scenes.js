/* liljon scenes (Regions tab: Atlanta; Southwest Atlanta - Cascade Rd / Beecher Hills, the King of Crunk). CSS classes and ids prefixed lj- (the page's own anim-train is kept on the bus).
   1 MARTA's 71 Cascade Rd bus pulling up to the Cascade Rd SW & Beecher St SW stop: white bus with MARTA blue / orange / gold stripes, the stop pole.
   2 The family basement in Southwest Atlanta where he taught himself to DJ at 15 and threw house parties: wood paneling, two turntables, crowd bouncing.
   3 The skate & bike shop across from Piedmont Park where he worked (named on the page only as a skate shop): skates and bikes out front, a skater rolling by.
   4 Phoenix, the Atlanta nightclub where he was the in-house DJ: booth up top, light beams, hands up in the crowd.
   5 Cascade Rd SW and Benjamin E Mays Dr SW: green signs, LIL JON tagged with YEAH!, One Atlantic Center's peaked crown far off in Midtown.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ljbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lj-bob{animation:ljbob .55s ease-in-out infinite}.lj-bob2{animation-delay:-.27s}' +
    '@keyframes ljspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.lj-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ljspin 1.8s linear infinite}' +
    '@keyframes ljsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.lj-beam{transform-box:fill-box;transform-origin:50% 0%;animation:ljsweep 2.6s ease-in-out infinite}.lj-beam2{animation-delay:-1.3s}' +
    '@keyframes ljflk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.25}55%{opacity:.95}}.lj-flk{animation:ljflk 2.4s infinite}.lj-flk2{animation-delay:-1.1s}' +
    '@keyframes ljroll{from{transform:translateX(-70px)}to{transform:translateX(470px)}}.lj-roll{animation:ljroll 6s linear infinite}' +
    '@keyframes ljwheel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.lj-wh{transform-box:fill-box;transform-origin:50% 50%;animation:ljwheel .5s linear infinite}' +
    '@keyframes ljsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lj-sp{animation:ljsp 1.4s ease-out infinite}.lj-sp2{animation-delay:.5s}' +
    '@keyframes ljtw{0%,100%{opacity:.25}50%{opacity:1}}.lj-tw{animation:ljtw 1.8s ease-in-out infinite}.lj-tw2{animation-delay:-.9s}' +
    '@keyframes ljpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}.lj-pulse{transform-box:fill-box;transform-origin:50% 50%;animation:ljpulse .55s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : (i % 8 ? "lj-tw" : "lj-tw lj-tw2")) + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const RED = "#ff3b2f", GOLD = "#f5c518", ICE = "#3fd0ff", MBLUE = "#0a6fc2", MORANGE = "#f47b20", MGOLD = "#fdb913";
  // a person silhouette, no face: head circle + body, arms up optional
  const fig = (x, y, c, up, dreads) => '<g fill="' + c + '">' + '<circle cx="' + x + '" cy="' + (y - 30) + '" r="7"/>' +
    (dreads ? '<path d="M' + (x - 7) + ' ' + (y - 32) + 'q-3 12 -2 20M' + (x - 3) + ' ' + (y - 34) + 'q-2 14 -1 22M' + (x + 3) + ' ' + (y - 34) + 'q2 14 1 22M' + (x + 7) + ' ' + (y - 32) + 'q3 12 2 20" stroke="' + c + '" stroke-width="2.4" fill="none" stroke-linecap="round"/>' : '') +
    '<rect x="' + (x - 8) + '" y="' + (y - 22) + '" width="16" height="24" rx="5"/>' +
    (up ? '<path d="M' + (x - 6) + ' ' + (y - 18) + 'l-9 -18M' + (x + 6) + ' ' + (y - 18) + 'l9 -18" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>';

  /* 1. MARTA 71 Cascade Rd bus at Cascade Rd SW & Beecher St SW */
  function ljbus() {
    const trees = Array.from({ length: 7 }, (_, i) => '<circle cx="' + (20 + i * 62) + '" cy="' + (96 + (i % 2) * 8) + '" r="' + (26 + (i % 3) * 5) + '" fill="' + (i % 2 ? "#2f5a2c" : "#386b33") + '"/>').join("");
    const houses = '<rect x="30" y="104" width="70" height="40" fill="#c9b79a"/><path d="M24 106l41 -24l41 24z" fill="#5b4a3a"/><rect x="56" y="120" width="16" height="24" fill="#4a3424"/>' +
      '<rect x="300" y="108" width="76" height="36" fill="#d8c6a8"/><path d="M294 110l44 -22l44 22z" fill="#4e3f33"/><rect x="314" y="118" width="14" height="12" fill="#ffe7a3"/><rect x="346" y="118" width="14" height="12" fill="#ffe7a3"/>';
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 34) + '" y="146" width="26" height="22" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><g transform="translate(0,0)">' +
      '<rect x="60" y="136" width="250" height="66" rx="10" fill="#f4f6f8" stroke="#9aa4ad" stroke-width="1.5"/>' +
      '<rect x="60" y="176" width="250" height="7" fill="' + MBLUE + '"/><rect x="60" y="183" width="250" height="4" fill="' + MORANGE + '"/><rect x="60" y="187" width="250" height="3" fill="' + MGOLD + '"/>' + win +
      '<rect x="282" y="144" width="26" height="40" rx="4" fill="#1d2a36"/><rect x="64" y="140" width="80" height="4" rx="2" fill="#ffd34d" class="lj-flk"/>' +
      '<rect x="64" y="128" width="84" height="12" rx="2" fill="#111"/><text x="106" y="137.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#ffb000">71 CASCADE RD</text>' +
      '<rect x="300" y="190" width="10" height="6" rx="2" fill="#ffe08a"/>' +
      '<circle cx="110" cy="204" r="13" fill="#222"/><circle cx="110" cy="204" r="5" fill="#888"/><circle cx="262" cy="204" r="13" fill="#222"/><circle cx="262" cy="204" r="5" fill="#888"/></g></g>';
    const pole = '<rect x="344" y="112" width="4" height="104" fill="#7a8088"/><rect x="330" y="112" width="32" height="40" rx="3" fill="#fff" stroke="' + MBLUE + '" stroke-width="2"/>' +
      '<rect x="330" y="112" width="32" height="10" rx="2" fill="' + MBLUE + '"/><text x="346" y="120" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">MARTA</text>' +
      '<text x="346" y="134" text-anchor="middle" ' + font + ' font-size="11" fill="#111">71</text><text x="346" y="146" text-anchor="middle" ' + font + ' font-size="5.5" fill="#111">BUS STOP</text>';
    return svg('<rect width="400" height="260" fill="url(#ljsk1)"/>' + stars(12) + trees + houses +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3d42"/><rect x="0" y="214" width="400" height="3" fill="#f2c94c" opacity=".8"/><rect x="0" y="196" width="400" height="6" fill="#9a9a94"/>' +
      bus + pole + sign(150, 8, 150, "CASCADE RD SW") + sign(174, 32, 102, "BEECHER ST SW") + '<rect x="224" y="54" width="3" height="10" fill="#7a8088"/>' +
      label(70, 260, "MARTA 71 · CASCADE RD SW @ BEECHER ST SW"), sky("ljsk1", "#1b2350", "#e08a4a"));
  }

  /* 2. The basement house party where he learned to DJ */
  function ljbasement() {
    const panel = Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="20" height="170" fill="' + (i % 2 ? "#6b4428" : "#5e3b22") + '"/><rect x="' + (i * 20) + '" y="0" width="1.5" height="170" fill="#3d2614"/>').join("");
    const deck = (x) => '<rect x="' + x + '" y="128" width="64" height="30" rx="3" fill="#2a2a2e" stroke="#555" /><g class="lj-spin"><circle cx="' + (x + 26) + '" cy="143" r="12" fill="#111" stroke="#444"/><circle cx="' + (x + 26) + '" cy="143" r="4" fill="' + RED + '"/><rect x="' + (x + 25) + '" y="132" width="2" height="6" fill="#777"/></g><rect x="' + (x + 48) + '" y="132" width="3" height="20" fill="#bbb"/>';
    const spk = (x) => '<g class="lj-pulse"><rect x="' + x + '" y="100" width="40" height="62" rx="3" fill="#1b1b1e"/><circle cx="' + (x + 20) + '" cy="118" r="9" fill="#333" stroke="#666"/><circle cx="' + (x + 20) + '" cy="146" r="13" fill="#333" stroke="#666"/></g>';
    const crowd = [40, 82, 124, 276, 318, 360].map((x, i) => '<g class="lj-bob' + (i % 2 ? " lj-bob2" : "") + '">' + fig(x, 232, i % 2 ? "#1a1420" : "#24182a", i % 3 === 0) + '</g>').join("");
    const lights = Array.from({ length: 9 }, (_, i) => '<circle class="lj-tw' + (i % 2 ? " lj-tw2" : "") + '" cx="' + (30 + i * 43) + '" cy="' + (16 + (i % 2) * 6) + '" r="4" fill="' + [RED, GOLD, ICE][i % 3] + '"/>').join("") + '<path d="M10 14q190 22 380 0" stroke="#222" stroke-width="1.2" fill="none"/>';
    return svg(panel + lights + '<rect x="0" y="170" width="400" height="90" fill="#4a4038"/><rect x="0" y="170" width="400" height="4" fill="#2a221c"/>' +
      '<rect x="230" y="40" width="70" height="44" fill="#222"/><rect x="234" y="44" width="62" height="36" fill="#3a2e22"/><text x="265" y="66" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">CRUNK!</text>' +
      spk(70) + spk(290) + '<rect x="120" y="156" width="160" height="40" fill="#3b2a1c"/><rect x="120" y="152" width="160" height="6" fill="#2a1d12"/>' + deck(128) + deck(208) +
      '<g class="lj-bob">' + fig(200, 156, "#0f0c12", true, true) + '</g>' + crowd +
      label(85, 230, "THE BASEMENT · SOUTHWEST ATLANTA · DJ AT 15"));
  }

  /* 3. The skate & bike shop across from Piedmont Park */
  function ljskate() {
    const towers = '<rect x="20" y="40" width="34" height="100" fill="#5a6f86"/><rect x="62" y="64" width="26" height="76" fill="#6c7f94"/><rect x="300" y="30" width="30" height="110" fill="#4f647c"/><path d="M300 30l15 -18l15 18z" fill="#4f647c"/><rect x="338" y="58" width="40" height="82" fill="#647891"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (24 + (i % 4) * 7) + '" y="' + (48 + Math.floor(i / 4) * 18) + '" width="4" height="7" fill="#ffe7a3" opacity=".8"/>').join("");
    const park = '<rect x="0" y="130" width="400" height="20" fill="#3f7d3a"/>' + Array.from({ length: 6 }, (_, i) => '<circle cx="' + (110 + i * 34) + '" cy="' + (118 + (i % 2) * 6) + '" r="18" fill="' + (i % 2 ? "#4b8f3f" : "#3c7a34") + '"/><rect x="' + (108 + i * 34) + '" y="128" width="4" height="12" fill="#5a3d24"/>').join("");
    const shop = '<rect x="96" y="132" width="208" height="70" fill="#e9dcc2"/><rect x="96" y="124" width="208" height="12" fill="' + RED + '"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (96 + i * 26) + ' 136h26l-3 12h-20z" fill="' + (i % 2 ? "#fff" : RED) + '"/>').join("") +
      '<rect x="104" y="152" width="80" height="44" fill="#2b3a48"/><rect x="214" y="150" width="30" height="52" fill="#5b3a22"/><rect x="254" y="152" width="44" height="44" fill="#2b3a48"/>' +
      '<rect x="124" y="104" width="152" height="20" rx="3" fill="#111"/><text x="200" y="118.5" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" class="lj-flk">SKATES · BIKES</text>' +
      '<path d="M116 186q8 -10 16 0M146 186q8 -10 16 0" stroke="' + ICE + '" stroke-width="4" fill="none"/><rect x="114" y="186" width="20" height="5" fill="#eee"/><rect x="144" y="186" width="20" height="5" fill="#eee"/>' +
      '<rect x="262" y="176" width="28" height="16" rx="3" fill="' + GOLD + '"/><circle cx="268" cy="194" r="3" fill="#222"/><circle cx="284" cy="194" r="3" fill="#222"/>';
    const bike = (x) => '<g><circle cx="' + x + '" cy="214" r="10" fill="none" stroke="#222" stroke-width="2.5"/><circle cx="' + (x + 30) + '" cy="214" r="10" fill="none" stroke="#222" stroke-width="2.5"/><path d="M' + x + ' 214l12 -16h14l4 16M' + (x + 12) + ' 198l6 16" stroke="' + RED + '" stroke-width="2.5" fill="none"/></g>';
    const skater = '<g class="lj-roll"><g transform="translate(0,0)">' + fig(20, 222, "#1b1b24", false) + '<rect x="6" y="224" width="28" height="4" rx="2" fill="' + RED + '"/>' +
      '<circle class="lj-wh" cx="11" cy="231" r="3" fill="' + ICE + '"/><circle class="lj-wh" cx="29" cy="231" r="3" fill="' + ICE + '"/></g></g>';
    return svg('<rect width="400" height="260" fill="url(#ljsk3)"/>' + towers + park + '<rect x="0" y="202" width="400" height="58" fill="#8d8a84"/><rect x="0" y="202" width="400" height="5" fill="#b9b5ad"/>' +
      shop + bike(316) + bike(354) + skater + label(80, 240, "THE SKATE & BIKE SHOP · PIEDMONT PARK"), sky("ljsk3", "#7ec3ef", "#f4e3c0"));
  }

  /* 4. Phoenix nightclub, in-house DJ */
  function ljclub() {
    const beams = [70, 150, 250, 330].map((x, i) => '<path class="lj-beam' + (i % 2 ? " lj-beam2" : "") + '" d="M' + x + ' 20l-26 190h52z" fill="' + [RED, GOLD, ICE, RED][i] + '" opacity=".22"/>').join("");
    const crowd = Array.from({ length: 11 }, (_, i) => '<g class="lj-bob' + (i % 2 ? " lj-bob2" : "") + '">' + fig(18 + i * 37, 252, i % 2 ? "#0c0a10" : "#151020", i % 2 === 0) + '</g>').join("");
    const booth = '<rect x="130" y="112" width="140" height="44" fill="#1a1a1f" stroke="' + RED + '" stroke-width="2"/><rect x="130" y="112" width="140" height="6" fill="' + RED + '" class="lj-flk"/>' +
      '<g class="lj-spin"><circle cx="166" cy="130" r="9" fill="#111" stroke="#555"/></g><g class="lj-spin"><circle cx="234" cy="130" r="9" fill="#111" stroke="#555"/></g>';
    const bird = '<g class="lj-flk lj-flk2"><path d="M200 38q-30 -14 -64 -6q26 4 40 18q-30 0 -46 14q34 -6 54 4q-6 10 -2 22q8 -12 18 -14q10 2 18 14q4 -12 -2 -22q20 -10 54 -4q-16 -14 -46 -14q14 -14 40 -18q-34 -8 -64 6z" fill="none" stroke="' + MORANGE + '" stroke-width="2.5" stroke-linejoin="round"/></g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="4">PHOENIX</text>';
    return svg('<rect width="400" height="260" fill="#0b0710"/>' + stars(10) + beams + bird + '<g class="lj-bob">' + fig(200, 126, "#000", true, true) + '</g>' + booth + crowd +
      label(90, 220, "PHOENIX · IN-HOUSE DJ · ATLANTA"));
  }

  /* 5. His corner: Cascade Rd SW and Benjamin E Mays Dr SW */
  function ljcorner() {
    const skyline = '<rect x="40" y="96" width="22" height="50" fill="#2b2f45"/><rect x="70" y="110" width="18" height="36" fill="#323652"/><rect x="300" y="104" width="24" height="42" fill="#2b2f45"/><rect x="330" y="114" width="20" height="32" fill="#323652"/>' +
      '<rect x="176" y="70" width="34" height="76" fill="#3a3550"/><path d="M174 70l19 -34l19 34z" fill="#b87333"/><rect x="192" y="22" width="2" height="16" fill="#d6d6d6"/><circle class="lj-tw" cx="193" cy="22" r="2" fill="' + RED + '"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (180 + (i % 3) * 9) + '" y="' + (80 + Math.floor(i / 3) * 14) + '" width="4" height="7" fill="#ffe7a3" opacity=".75"/>').join("");
    const wall = '<rect x="0" y="146" width="400" height="74" fill="#7b4a3a"/>' + Array.from({ length: 30 }, (_, i) => '<rect x="' + ((i % 10) * 40 + (Math.floor(i / 10) % 2 ? 20 : 0)) + '" y="' + (146 + Math.floor(i / 10) * 24) + '" width="40" height="24" fill="none" stroke="#5e372b" stroke-width="1.5"/>').join("");
    const art = tag("LIL JON", 70, 200, 44, RED, -6) + tag("YEAH!", 262, 186, 30, GOLD, 4) + tag("OKAY!", 272, 216, 20, ICE, -3) +
      '<circle class="lj-sp" cx="246" cy="176" r="3" fill="' + GOLD + '"/><circle class="lj-sp lj-sp2" cx="252" cy="170" r="2" fill="' + GOLD + '"/>';
    const post = '<rect x="356" y="40" width="5" height="180" fill="#7a8088"/>' + sign(262, 40, 126, "CASCADE RD SW") + sign(270, 66, 112, "B E MAYS DR SW").replace('font-size="12"', 'font-size="11"');
    return svg('<rect width="400" height="260" fill="url(#ljsk5)"/>' + stars(22) + skyline + wall + art +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3d42"/><rect x="0" y="218" width="400" height="4" fill="#9a9a94"/>' + post +
      label(40, 300, "CASCADE RD SW & BENJAMIN E MAYS DR SW · MIDTOWN BEHIND"), sky("ljsk5", "#0c1030", "#4a2a52"));
  }

  window.SCENES = { ljbus, ljbasement, ljskate, ljclub, ljcorner };
})();
