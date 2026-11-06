/* Freddie Foxxx (Bumpy Knuckles) game (NYC map, Long Island: Westbury, Nassau County).
   The LIRR at Westbury station, the round Westbury Music Fair theater, Westbury House at Old Westbury Gardens,
   the old Roosevelt Raceway harness track under the lights, and Post Ave & Union Ave with the LIRR bridge behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ffcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ff-car{animation:ffcar 7s linear infinite}.ff-car2{animation-delay:-3.5s}' +
    '@keyframes ffblink{0%,100%{opacity:.3}50%{opacity:1}}.ff-bl{animation:ffblink 1.6s ease-in-out infinite}.ff-bl2{animation-delay:.5s}.ff-bl3{animation-delay:1s}' +
    '@keyframes ffsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ff-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ffsweep 4s ease-in-out infinite}.ff-beam2{animation-delay:-2s}' +
    '@keyframes ffswan{0%,100%{transform:translateX(0)}50%{transform:translateX(46px)}}.ff-swan{animation:ffswan 9s ease-in-out infinite}.ff-swan2{animation-delay:-4.5s}' +
    '@keyframes ffleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.ff-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ffleaf 3s ease-in-out infinite}' +
    '@keyframes ffrace{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.ff-horse{animation:ffrace 5s linear infinite}.ff-horse2{animation-delay:-1.7s}.ff-horse3{animation-delay:-3.4s}' +
    '@keyframes fftrot{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.ff-trot{animation:fftrot .3s ease-in-out infinite}' +
    '@keyframes ffbridge{from{transform:translateX(420px)}to{transform:translateX(-420px)}}.ff-lirr{animation:ffbridge 6s linear infinite}' +
    '@keyframes ffcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.ff-cloud{animation:ffcloud 30s linear infinite}.ff-cloud2{animation-delay:-15s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* LIRR "bullet": a rounded pill in the hub's LIRR blue */
  const lirr = (x, y) => '<rect x="' + (x - 20) + '" y="' + (y - 11) + '" width="40" height="22" rx="11" fill="#0039a6"/>' + txt("LIRR", x, y + 5, 12, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const tree = (x, y, r, col) => '<g class="ff-sway"><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 6) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (y + r * 0.3) + '" r="' + r * 0.7 + '" fill="' + col + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (y + r * 0.3) + '" r="' + r * 0.7 + '" fill="' + col + '"/></g>';
  const cloud = (x, y, cls) => '<g class="ff-cloud ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="8" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 12) + '" cy="' + (y - 6) + '" rx="14" ry="8" fill="#fff" opacity=".85"/></g>';
  const ORANGE = "#ff7a1a", RED = "#d62828", GOLD = "#ffd166", CREAM = "#f6ecd8";

  /* 1. Westbury LIRR station, Main Line: high-level platform under a canopy, the black sign, the electric train sliding in, Nassau houses beyond */
  function westbury() {
    let houses = "";
    [[6, "#c9b79c"], [70, "#e4d6bf"], [300, "#b9c4cf"], [350, "#d8c3a5"]].forEach(([x, c], i) => {
      houses += '<rect x="' + x + '" y="' + (78 + (i % 2) * 6) + '" width="44" height="34" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + (80 + (i % 2) * 6) + 'l26-20l26 20z" fill="#5a4636"/>' +
        '<rect x="' + (x + 8) + '" y="' + (88 + (i % 2) * 6) + '" width="9" height="9" fill="#fff6d0"/><rect x="' + (x + 27) + '" y="' + (88 + (i % 2) * 6) + '" width="9" height="9" fill="#fff6d0"/>';
    });
    let win = "";
    for (let x = 34; x < 300; x += 30) win += '<rect x="' + x + '" y="124" width="20" height="16" rx="2" fill="#1d2a3a"/>';
    let ties = "";
    for (let x = 0; x < 400; x += 14) ties += '<rect x="' + x + '" y="176" width="8" height="4" fill="#4a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fws)"/>' + cloud(60, 26) + cloud(250, 18, "ff-cloud2") +
      tree(140, 74, 18, "#4f7a3a") + tree(196, 70, 22, "#5d8a43") + tree(250, 76, 16, "#4f7a3a") + houses +
      /* canopy on posts */
      '<rect x="0" y="40" width="400" height="10" fill="#3a3f47"/><rect x="0" y="50" width="400" height="4" fill="#20242a"/>' +
      [40, 140, 260, 360].map(x => '<rect x="' + (x - 3) + '" y="54" width="6" height="110" fill="#5b6470"/>').join("") +
      /* black station sign */
      '<rect x="110" y="62" width="180" height="30" rx="3" fill="#111"/><rect x="110" y="62" width="180" height="3" fill="#fff"/>' +
      '<text x="122" y="84" ' + font + ' font-size="16" fill="#fff">Westbury</text>' + lirr(256, 77) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="12" y="112" width="310" height="54" rx="7" fill="#c9ced6" stroke="#7b828c" stroke-width="2"/>' + win +
        '<rect x="12" y="146" width="310" height="5" fill="#0039a6"/><rect x="12" y="151" width="310" height="2" fill="#4b2e83"/>' +
        '<rect x="300" y="120" width="18" height="24" rx="2" fill="#1d2a3a"/><rect x="302" y="114" width="14" height="5" rx="1" fill="#111"/>' +
        '<circle cx="316" cy="158" r="3" fill="#fff6c2"/><circle cx="24" cy="158" r="3" fill="#ff4d4d"/>' +
        '<path d="M150 112l10-10h20l10 10" stroke="#333" stroke-width="2" fill="none"/>' +
      '</g>' +
      /* platform edge + tracks */
      '<rect x="0" y="166" width="400" height="8" fill="#eab308"/><rect x="0" y="174" width="400" height="12" fill="#6b6257"/>' + ties +
      '<rect x="0" y="186" width="400" height="74" fill="#8d8a84"/><rect x="0" y="186" width="400" height="3" fill="#6f6c66"/>' +
      person(344, 200, "#1b1b1b") + person(366, 204, "#2b2b2b") +
      txt("NASSAU COUNTY", 150, 236, 11, CREAM, 'letter-spacing="3"'),
      sky("fws", "#7fb6e6", "#d9ecf7"));
  }

  /* 2. Westbury Music Fair: the round theater-in-the-round (it started as a tent), the marquee tower, searchlights in the night sky */
  function musicfair() {
    let ribs = "";
    for (let i = 0; i <= 12; i++) { const x = 90 + i * 18; ribs += '<path d="M200 70L' + x + ' 128" stroke="#c9c2b4" stroke-width="1.5" opacity=".7"/>'; }
    let bulbs = "";
    for (let x = 300; x <= 372; x += 8) bulbs += '<circle class="ff-bl ff-bl' + (x % 3 + 1) + '" cx="' + x + '" cy="88" r="2" fill="' + GOLD + '"/><circle class="ff-bl ff-bl' + ((x + 1) % 3 + 1) + '" cx="' + x + '" cy="132" r="2" fill="' + GOLD + '"/>';
    let crowd = "";
    for (let x = 30; x < 290; x += 22) crowd += person(x, 196 + (x % 3) * 3, x % 44 ? "#1a1310" : "#2a1d16");
    return svg(
      '<rect width="400" height="260" fill="url(#fmf)"/>' + stars(24) +
      '<rect class="ff-beam" x="60" y="10" width="14" height="190" fill="#fff6d0" opacity=".16"/><rect class="ff-beam ff-beam2" x="330" y="10" width="14" height="190" fill="#fff6d0" opacity=".16"/>' +
      /* the round house: cone roof + drum */
      '<path d="M200 66L80 130h240z" fill="#e8e1d2"/>' + ribs + '<path d="M200 66L80 130h240z" fill="none" stroke="#a69c8a" stroke-width="2"/>' +
      '<rect x="196" y="56" width="8" height="12" fill="#b8ae9c"/><circle cx="200" cy="54" r="4" fill="' + RED + '" class="ff-bl"/>' +
      '<path d="M84 130h232v46q-116 14-232 0z" fill="#7a2e22"/>' +
      [100, 132, 164, 196, 228, 260, 292].map(x => '<rect x="' + x + '" y="142" width="12" height="22" fill="#ffd98a" opacity=".85"/>').join("") +
      '<rect x="176" y="150" width="48" height="30" fill="#2a1a12"/><rect x="180" y="154" width="18" height="26" fill="#ffcf73"/><rect x="202" y="154" width="18" height="26" fill="#ffcf73"/>' +
      /* marquee tower */
      '<rect x="332" y="134" width="8" height="66" fill="#3a3a40"/>' +
      '<rect x="292" y="84" width="88" height="52" rx="3" fill="#1a1a22" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      txt("WESTBURY", 336, 104, 12, GOLD) + txt("MUSIC FAIR", 336, 120, 12, "#fff") +
      txt("THEATER IN THE ROUND", 336, 152, 6, CREAM, 'letter-spacing="1"') +
      /* lot + crowd */
      '<rect x="0" y="186" width="400" height="74" fill="#2a2a30"/><rect x="0" y="186" width="400" height="3" fill="#44444c"/>' + crowd +
      '<g class="ff-car"><rect x="0" y="236" width="46" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="36" cy="249" r="4" fill="#111"/></g>',
      sky("fmf", "#07071a", "#2b1d3a"));
  }

  /* 3. Old Westbury Gardens: Westbury House (red brick, white stone trim, slate roof and tall chimneys) over the lawn and the lake, swans gliding */
  function gardens() {
    let wins = "";
    [100, 128, 156, 230, 258, 286].forEach(x => { wins += '<rect x="' + x + '" y="98" width="14" height="22" fill="#e8eef2" stroke="#f4efe6" stroke-width="3"/><rect x="' + x + '" y="134" width="14" height="22" fill="#e8eef2" stroke="#f4efe6" stroke-width="3"/>'; });
    let quoins = "";
    for (let y = 86; y < 166; y += 10) quoins += '<rect x="80" y="' + y + '" width="8" height="6" fill="#f4efe6"/><rect x="312" y="' + y + '" width="8" height="6" fill="#f4efe6"/><rect x="178" y="' + y + '" width="6" height="6" fill="#f4efe6"/><rect x="216" y="' + y + '" width="6" height="6" fill="#f4efe6"/>';
    const swan = (x, y, cls) => '<g class="ff-swan ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="11" ry="5" fill="#fff"/><path d="M' + (x + 7) + ' ' + (y - 2) + 'q4-12 0-14q-3-1-2 2" stroke="#fff" stroke-width="3" fill="none"/><path d="M' + (x + 5) + ' ' + (y - 16) + 'l4 0" stroke="#f08a24" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fog)"/>' + cloud(40, 30) + cloud(260, 22, "ff-cloud2") +
      tree(30, 120, 26, "#3f6b33") + tree(370, 118, 28, "#3f6b33") + tree(56, 140, 18, "#4d7d3b") + tree(344, 140, 18, "#4d7d3b") +
      /* roof + chimneys */
      '<path d="M76 86l24-26h200l24 26z" fill="#4a5058"/>' +
      [118, 170, 230, 282].map(x => '<rect x="' + x + '" y="38" width="12" height="26" fill="#9a3b2a"/><rect x="' + (x - 2) + '" y="36" width="16" height="4" fill="#f4efe6"/>').join("") +
      /* brick body + center pediment */
      '<rect x="80" y="86" width="240" height="80" fill="#a8432e"/>' + quoins +
      '<path d="M176 86l24-18l24 18z" fill="#f4efe6"/><rect x="184" y="132" width="32" height="34" fill="#f4efe6"/><rect x="190" y="138" width="20" height="28" fill="#3a2a22"/>' +
      '<rect x="80" y="122" width="240" height="4" fill="#f4efe6"/><rect x="76" y="164" width="248" height="4" fill="#f4efe6"/>' + wins +
      /* terrace + lawn + lake */
      '<rect x="0" y="168" width="400" height="92" fill="#6aa04a"/><path d="M170 168h60l40 40h-140z" fill="#d9cfb8"/>' +
      '<ellipse cx="200" cy="230" rx="190" ry="22" fill="#5b8fb0"/><ellipse cx="200" cy="226" rx="160" ry="12" fill="#77a8c6" opacity=".7"/>' +
      swan(110, 232) + swan(250, 236, "ff-swan2") +
      txt("OLD WESTBURY GARDENS", 200, 22, 10, "#24402a", 'letter-spacing="3"'),
      sky("fog", "#8cc4ea", "#e6f3fb"));
  }

  /* 4. Roosevelt Raceway, Westbury: the long grandstand and light towers, trotters with sulkies racing past under the lights */
  function raceway() {
    let seats = "";
    for (let x = 30; x < 370; x += 12) for (let y = 92; y < 128; y += 8) seats += '<rect x="' + x + '" y="' + y + '" width="8" height="4" fill="' + ((x + y) % 3 ? "#e9d8b0" : "#c96a3a") + '" opacity=".8"/>';
    const tower = x => '<rect x="' + (x - 2) + '" y="20" width="4" height="64" fill="#5a5f68"/><rect x="' + (x - 14) + '" y="14" width="28" height="10" fill="#2b2f36"/>' +
      [-9, -3, 3, 9].map(d => '<circle class="ff-bl" cx="' + (x + d) + '" cy="19" r="2.4" fill="#fffbe0"/>').join("");
    const horse = (cls, col, silks) => '<g class="ff-horse ' + cls + '"><g class="ff-trot">' +
      '<ellipse cx="60" cy="200" rx="22" ry="9" fill="' + col + '"/><path d="M78 196l12-14l6 3l-8 15z" fill="' + col + '"/>' +
      '<path d="M46 206l-4 16M54 207l2 16M70 206l-3 16M76 205l4 16" stroke="' + col + '" stroke-width="3"/>' +
      '<path d="M40 200h-26" stroke="#ddd" stroke-width="2"/><circle cx="14" cy="214" r="10" fill="none" stroke="#ddd" stroke-width="2"/>' +
      '<rect x="6" y="186" width="14" height="16" rx="5" fill="' + silks + '"/><circle cx="13" cy="181" r="5" fill="' + silks + '"/>' +
      '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#frr)"/>' + stars(18) +
      tower(40) + tower(200) + tower(360) +
      /* grandstand */
      '<path d="M16 84h368l-10 46h-348z" fill="#3a3e46"/><rect x="16" y="78" width="368" height="8" fill="#e9e3d6"/>' + seats +
      '<rect x="140" y="56" width="120" height="24" rx="2" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + txt("ROOSEVELT RACEWAY", 200, 72, 10, GOLD) +
      /* infield + track rail */
      '<rect x="0" y="130" width="400" height="40" fill="#3f7a3a"/><rect x="0" y="168" width="400" height="4" fill="#fff"/>' +
      '<rect x="0" y="172" width="400" height="66" fill="#b07a4a"/><rect x="0" y="236" width="400" height="4" fill="#fff"/><rect x="0" y="240" width="400" height="20" fill="#2a2a2e"/>' +
      [20, 70, 120, 170, 220, 270, 320, 370].map(x => '<rect x="' + x + '" y="232" width="3" height="8" fill="#fff"/>').join("") +
      horse("", "#5a3a22", ORANGE) + horse("ff-horse2", "#2a1c14", "#2b6cb0") + horse("ff-horse3", "#7a4a2a", RED),
      sky("frr", "#060a18", "#1d2440"));
  }

  /* 5. Post Ave & Union Ave, Westbury: green signs, the wall with FREDDIE FOXXX up, the LIRR bridge over Post Ave behind with a train crossing */
  function corner() {
    let bricks = "";
    for (let y = 136; y < 226; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 300; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a3c2a" opacity=".5"/>';
    let lcar = "";
    for (let i = 0; i < 3; i++) lcar += '<rect x="' + (i * 88) + '" y="58" width="84" height="24" rx="4" fill="#c9ced6" stroke="#7b828c"/><rect x="' + (i * 88) + '" y="74" width="84" height="3" fill="#0039a6"/>' +
      [8, 28, 48, 66].map(d => '<rect x="' + (i * 88 + d) + '" y="62" width="12" height="9" fill="#1d2a3a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fcn)"/>' + stars(14) +
      /* the LIRR bridge */
      '<g class="ff-lirr">' + lcar + '</g>' +
      '<rect x="0" y="82" width="400" height="16" fill="#4a4f57"/><rect x="0" y="82" width="400" height="3" fill="#6b717a"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="98" width="10" height="40" fill="#3a3e46"/>').join("") +
      txt("WESTBURY", 200, 94, 8, CREAM, 'letter-spacing="4" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="130" width="300" height="96" fill="#a0503a"/>' + bricks +
      tag("FREDDIE FOXXX", 14, 184, 32, ORANGE, -5) + tag("BUMPY KNUCKLES", 18, 216, 17, GOLD, -3) + tag("SUPREME FORCE", 196, 214, 13, CREAM, -4) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ff-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="352" y="104" width="5" height="124" fill="#3d4b3f"/>' +
      '<rect x="302" y="108" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Post Ave", 350, 124, 12, "#fff") +
      '<rect x="302" y="134" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Union Ave", 350, 150, 12, "#fff") +
      '<circle class="ff-bl" cx="354" cy="102" r="4" fill="#fff6c2"/>',
      sky("fcn", "#0a0c1a", "#3a2a3a"));
  }

  window.SCENES = { westbury: westbury, musicfair: musicfair, gardens: gardens, raceway: raceway, corner: corner };
})();
