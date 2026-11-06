/* Saigon game (NYC map, Brooklyn: Brownsville, "the same slum as Mike Tyson and Riddick Bowe"; grew up partly in Spring Valley, Rockland County).
   1. The L pulling into Sutter Av, up on the el at the Brownsville / East New York edge.
   2. Spring Valley, Rockland County ("Spring Valley had the same bums"): the village main street, the end-of-the-line commuter train, the Ramapo hills.
   3. The knuckle game: a Brownsville boxing gym, the ring with red, white and blue ropes, the heavy bag swinging, the speed bag rattling.
   4. Playing himself on the TV show (2007): the Hollywood soundstage, the camera on its dolly, the clapper snapping, palms through the stage door.
   5. Sutter Av & Mother Gaston Blvd: green street signs, the wall tagged SAIGON, the Seth Low Houses towers behind.
   CSS classes prefixed "sg-". No logos, no faces. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sgcars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.sg-car{animation:sgcars 7s linear infinite}.sg-car2{animation-delay:-3.5s}' +
    '@keyframes sgblink{0%,100%{opacity:.25}50%{opacity:1}}.sg-bl{animation:sgblink 1.6s ease-in-out infinite}.sg-bl2{animation-delay:.5s}.sg-bl3{animation-delay:1s}' +
    '@keyframes sgflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.sg-flk{animation:sgflick 2.4s infinite}' +
    '@keyframes sgcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.sg-cloud{animation:sgcloud 22s linear infinite}.sg-cloud2{animation-delay:-11s}' +
    '@keyframes sgswing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.sg-bag{transform-box:fill-box;transform-origin:50% 0%;animation:sgswing 1.8s ease-in-out infinite}' +
    '@keyframes sgrattle{0%,100%{transform:translateY(0)}25%{transform:translateY(-3px)}75%{transform:translateY(3px)}}.sg-rat{animation:sgrattle .18s linear infinite}' +
    '@keyframes sgclap{0%,60%,100%{transform:rotate(0)}75%{transform:rotate(-24deg)}}.sg-clap{transform-box:fill-box;transform-origin:0% 100%;animation:sgclap 1.6s ease-in-out infinite}' +
    '@keyframes sgbeam{0%,100%{opacity:.12}50%{opacity:.26}}.sg-beam{animation:sgbeam 2.2s ease-in-out infinite}.sg-beam2{animation-delay:-1.1s}' +
    '@keyframes sgsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sg-palm{transform-box:fill-box;transform-origin:50% 100%;animation:sgsway 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PURP = "#b48cf0", RED = "#e63946", BLUE = "#4a90e2", CREAM = "#f4ead8", LGRAY = "#a7a9ac", GOLD = "#e9c46a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Sutter Av on the L, elevated: the steel el over the street, the platform canopy, the black sign with the gray L, the silver L train sliding in */
  function sutter() {
    let roofs = "";
    [[0, 150, 60], [64, 140, 50], [118, 156, 70], [192, 144, 56], [252, 152, 64], [320, 138, 80]].forEach(([x, y, w], i) => {
      roofs += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (210 - y) + '" fill="' + (i % 2 ? "#5b3a33" : "#6a463b") + '"/>';
      for (let xx = x + 6; xx < x + w - 8; xx += 14) roofs += '<rect class="sg-bl sg-bl' + (i % 3 + 1) + '" x="' + xx + '" y="' + (y + 10) + '" width="7" height="9" fill="#ffd98a" opacity=".7"/>';
    });
    let win = "";
    for (let x = 34; x < 286; x += 32) win += '<rect x="' + x + '" y="88" width="20" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let girder = "";
    for (let x = 0; x < 400; x += 24) girder += '<path d="M' + x + ' 140l12 14l12 -14" stroke="#3b4a52" stroke-width="2.5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs1)"/>' + stars(10) + roofs +
      /* canopy + columns */
      '<rect x="0" y="22" width="400" height="10" fill="#33424a"/><path d="M0 32h400" stroke="#56666e" stroke-width="2"/>' +
      [16, 140, 260, 384].map(x => '<rect x="' + (x - 4) + '" y="32" width="8" height="104" fill="#3b4a52"/>').join("") +
      [70, 200, 330].map((x, i) => '<rect class="sg-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 20) + '" y="33" width="40" height="4" rx="2" fill="#fff6c2"/>').join("") +
      /* station sign */
      '<rect x="110" y="44" width="180" height="28" rx="3" fill="#111"/><rect x="110" y="44" width="180" height="3" fill="#fff"/>' +
      '<text x="122" y="64" ' + font + ' font-size="15" fill="#fff">Sutter Av</text>' + bullet(266, 59, "L", LGRAY) +
      /* the L train */
      '<g class="anim-train">' +
        '<rect x="14" y="78" width="290" height="54" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="14" y="114" width="290" height="4" fill="#7b8088"/>' +
        '<rect x="284" y="84" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(292, 122, "L", LGRAY) +
        '<circle cx="26" cy="124" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + el girder */
      '<rect x="0" y="132" width="400" height="8" fill="#e5c33c"/><rect x="0" y="140" width="400" height="16" fill="#2c383e"/>' + girder +
      [40, 200, 360].map(x => '<rect x="' + (x - 6) + '" y="156" width="12" height="56" fill="#2c383e"/>').join("") +
      /* street */
      '<rect x="0" y="210" width="400" height="50" fill="#44464b"/><rect x="0" y="210" width="400" height="4" fill="#77797d"/>' +
      '<g class="sg-car"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + PURP + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>' +
      txt("BROWNSVILLE · BROOKLYN", 200, 204, 10, CREAM, 'letter-spacing="3"'),
      sky("sgs1", "#1b1530", "#7a4a5e"));
  }

  /* 2. Spring Valley, Rockland County: the low village main street, the commuter train waiting at the end of the line, the green Ramapo hills */
  function spring() {
    const shop = (x, w, col, aw) => '<rect x="' + x + '" y="128" width="' + w + '" height="62" fill="' + col + '"/>' +
      '<rect x="' + (x + 4) + '" y="134" width="' + (w - 8) + '" height="12" fill="#2b2b30"/>' +
      '<path d="M' + (x + 2) + ' 150h' + (w - 4) + 'l-4 10h-' + (w - 12) + 'z" fill="' + aw + '"/>' +
      '<rect x="' + (x + 6) + '" y="164" width="' + (w / 2 - 8) + '" height="22" fill="#cfe2f5" opacity=".8"/><rect x="' + (x + w / 2 + 4) + '" y="164" width="' + (w / 2 - 12) + '" height="26" fill="#3a2a22"/>';
    let ties = "";
    for (let x = 0; x < 400; x += 12) ties += '<rect x="' + x + '" y="118" width="6" height="4" fill="#5a4630"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs2)"/>' +
      '<g class="sg-cloud"><ellipse cx="60" cy="34" rx="34" ry="10" fill="#fff" opacity=".85"/><ellipse cx="82" cy="28" rx="20" ry="9" fill="#fff" opacity=".85"/></g>' +
      '<g class="sg-cloud sg-cloud2"><ellipse cx="40" cy="56" rx="26" ry="8" fill="#fff" opacity=".7"/></g>' +
      /* the hills */
      '<path d="M0 98q60-46 120-20t110-12t90 6t80-8v60h-400z" fill="#4f7a43"/><path d="M0 110q80-26 160-6t140-4t100 4v20h-400z" fill="#3f6636"/>' +
      [30, 70, 210, 330, 370].map(x => '<circle cx="' + x + '" cy="' + (100 + (x % 7)) + '" r="9" fill="#2f5a2c"/>').join("") +
      /* the end-of-the-line train: silver with the stripe */
      '<rect x="0" y="122" width="400" height="4" fill="#6b5a44"/>' + ties +
      '<rect x="190" y="86" width="210" height="32" rx="4" fill="#cfd3d8" stroke="#7d828a" stroke-width="2"/>' +
      '<rect x="190" y="104" width="210" height="4" fill="#f58025"/><rect x="190" y="108" width="210" height="3" fill="#a6228e"/><rect x="190" y="111" width="210" height="3" fill="#1a4fa0"/>' +
      [204, 236, 268, 300, 332, 364].map(x => '<rect x="' + x + '" y="90" width="20" height="12" rx="2" fill="#2d3a4a"/>').join("") +
      '<rect x="190" y="88" width="10" height="16" rx="2" fill="#2d3a4a"/><circle class="sg-bl" cx="194" cy="112" r="2.5" fill="#fff6c2"/>' +
      '<rect x="182" y="76" width="70" height="12" rx="2" fill="#111"/>' + txt("END OF THE LINE", 217, 85, 7, "#fff") +
      /* main street */
      shop(0, 64, "#a0522d", "#2e6b3a") + shop(66, 70, "#c9b48a", RED) + shop(138, 56, "#7b8b97", "#e9c46a") + shop(196, 74, "#b5523b", "#2b4f8a") + shop(272, 60, "#d9c7a3", "#6a3d8a") + shop(334, 66, "#8c6a4f", "#2e6b3a") +
      '<rect x="0" y="190" width="400" height="10" fill="#bdb6a8"/><rect x="0" y="200" width="400" height="60" fill="#4a4c50"/>' +
      '<path d="M0 230h400" stroke="#e9e3c8" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="sg-car"><rect x="0" y="236" width="46" height="14" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="36" cy="250" r="4" fill="#111"/></g>' +
      '<g class="sg-car sg-car2"><rect x="0" y="210" width="40" height="13" rx="4" fill="' + RED + '"/><circle cx="9" cy="223" r="4" fill="#111"/><circle cx="31" cy="223" r="4" fill="#111"/></g>' +
      /* village sign */
      '<rect x="20" y="58" width="150" height="34" rx="4" fill="#1f4a2c" stroke="#fff" stroke-width="2"/>' +
      txt("SPRING VALLEY", 95, 74, 13, "#fff") + txt("ROCKLAND COUNTY, N.Y.", 95, 86, 7, "#d7e8d0", 'letter-spacing="1"'),
      sky("sgs2", "#7fb6e0", "#d9ecf5"));
  }

  /* 3. The knuckle game: a Brownsville boxing gym, the ring with red, white and blue ropes, the heavy bag swinging, the speed bag rattling */
  function ring() {
    let brick = "";
    for (let y = 8; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) brick += '<rect x="' + x + '" y="' + y + '" width="18" height="8" fill="#6e3428"/>';
    return svg(
      '<rect width="400" height="260" fill="#57291f"/>' + brick +
      /* hanging lights */
      [100, 300].map((x, i) => '<path d="M' + x + ' 0v18" stroke="#222" stroke-width="2"/><path d="M' + (x - 16) + ' 30l16 -12l16 12z" fill="#2b2b2b"/>' +
        '<path class="sg-beam' + (i ? " sg-beam2" : "") + '" d="M' + (x - 16) + ' 30l-40 140h112l-40 -140z" fill="#fff6c2"/>').join("") +
      /* poster */
      '<rect x="160" y="22" width="80" height="56" fill="#efe4c8" stroke="#3a2a1a" stroke-width="2"/>' +
      txt("FIGHT NIGHT", 200, 40, 10, RED) + txt("BROWNSVILLE", 200, 56, 9, "#1b1b1b") + txt("BROOKLYN, N.Y.", 200, 70, 7, "#444") +
      /* the ring */
      '<path d="M40 176l40 -40h240l40 40z" fill="#c8c2b2"/><rect x="40" y="176" width="320" height="30" fill="#2a3f7a"/><rect x="40" y="176" width="320" height="5" fill="#1b2b5a"/>' +
      [[40, 176], [80, 136], [320, 136], [360, 176]].map(([x, y]) => '<rect x="' + (x - 4) + '" y="' + (y - 52) + '" width="8" height="54" fill="#d6d6d6"/>').join("") +
      [[14, RED], [28, "#f4f4f4"], [42, BLUE]].map(([h, c]) => '<path d="M40 ' + (176 - h) + 'L80 ' + (136 - h) + 'H320L360 ' + (176 - h) + '" stroke="' + c + '" stroke-width="3" fill="none"/>').join("") +
      /* heavy bag */
      '<g class="sg-bag"><path d="M380 0v40" stroke="#888" stroke-width="2"/><rect x="368" y="40" width="24" height="70" rx="10" fill="#8b1e1e"/><rect x="368" y="54" width="24" height="5" fill="#5a1010"/><rect x="368" y="94" width="24" height="5" fill="#5a1010"/></g>' +
      /* speed bag */
      '<rect x="6" y="64" width="44" height="6" fill="#3a2a1a"/><g class="sg-rat"><ellipse cx="28" cy="82" rx="8" ry="11" fill="#b9332a"/></g>' +
      /* gloves on the turnbuckle */
      '<path d="M76 100q-10 4-8 16q2 10 12 8q8-2 8-12z" fill="' + RED + '"/><path d="M90 102q-8 4-6 14q2 9 11 7q7-2 7-11z" fill="' + RED + '"/><path d="M84 98v-8" stroke="#eee" stroke-width="2"/>' +
      /* floor */
      '<rect x="0" y="206" width="400" height="54" fill="#3a2e26"/><path d="M0 222h400M0 240h400" stroke="#2c231d" stroke-width="2"/>' +
      tag("KNUCKLE GAME", 120, 248, 24, PURP, -3),
      "");
  }

  /* 4. The soundstage: the TV set where he played himself, the camera on its dolly, the director's chair, the clapper snapping, palms through the open stage door at sunset */
  function stage() {
    return svg(
      '<rect width="400" height="260" fill="#17151c"/>' +
      /* open stage door with LA sunset + palms */
      '<rect x="250" y="40" width="130" height="150" fill="url(#sgs4)"/>' +
      '<circle cx="315" cy="150" r="22" fill="#ffb347" opacity=".9"/>' +
      [[280, 190, 90], [350, 190, 110]].map(([x, y, h]) => '<g class="sg-palm"><path d="M' + x + ' ' + y + 'q-4 -' + (h / 2) + ' 2 -' + h + '" stroke="#2a1a24" stroke-width="5" fill="none"/>' +
        '<path d="M' + (x + 2) + ' ' + (y - h) + 'q-22 -4 -30 10M' + (x + 2) + ' ' + (y - h) + 'q22 -4 30 10M' + (x + 2) + ' ' + (y - h) + 'q-14 -14 -26 -10M' + (x + 2) + ' ' + (y - h) + 'q14 -14 26 -10" stroke="#2a1a24" stroke-width="4" fill="none" stroke-linecap="round"/></g>').join("") +
      '<rect x="246" y="36" width="138" height="6" fill="#333"/><rect x="246" y="36" width="6" height="156" fill="#333"/><rect x="378" y="36" width="6" height="156" fill="#333"/>' +
      txt("STAGE 4", 315, 30, 10, GOLD, 'letter-spacing="3"') +
      /* light rig */
      '<rect x="0" y="10" width="240" height="8" fill="#2b2b33"/>' +
      [40, 120, 200].map((x, i) => '<rect x="' + (x - 10) + '" y="18" width="20" height="16" rx="3" fill="#444"/><path class="sg-beam' + (i % 2 ? " sg-beam2" : "") + '" d="M' + (x - 10) + ' 34l-24 150h68l-24 -150z" fill="#fff6c2"/>').join("") +
      /* the set: a living room flat */
      '<rect x="20" y="70" width="210" height="110" fill="#3e3550"/><rect x="40" y="86" width="70" height="50" fill="#1d2a3a" stroke="#8a7a5a" stroke-width="3"/>' +
      '<rect x="130" y="130" width="84" height="30" rx="6" fill="#6a4a3a"/><rect x="130" y="122" width="84" height="12" rx="5" fill="#7a5a48"/>' +
      /* camera on dolly */
      '<rect x="120" y="186" width="70" height="10" rx="3" fill="#333"/><circle cx="130" cy="200" r="6" fill="#111"/><circle cx="180" cy="200" r="6" fill="#111"/>' +
      '<rect x="152" y="150" width="6" height="36" fill="#555"/><rect x="134" y="132" width="44" height="24" rx="3" fill="#222"/><rect x="176" y="136" width="14" height="16" rx="2" fill="#333"/>' +
      '<circle class="sg-bl" cx="140" cy="138" r="2.5" fill="' + RED + '"/>' +
      /* director chair */
      '<path d="M36 196l20 -34M66 196l-20 -34" stroke="#c9a46a" stroke-width="4"/><rect x="32" y="160" width="40" height="8" fill="#1b1b1b"/><rect x="34" y="138" width="36" height="14" fill="#1b1b1b"/>' +
      txt("SAIGON", 52, 149, 8, "#fff") +
      /* clapper */
      '<g transform="translate(206 150)"><rect x="0" y="12" width="44" height="30" fill="#111"/>' +
        '<g class="sg-clap"><rect x="0" y="2" width="44" height="10" fill="#111"/><path d="M4 2l6 10M16 2l6 10M28 2l6 10M40 2l4 7" stroke="#fff" stroke-width="3"/></g>' +
        '<text x="22" y="27" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">SCENE 4</text><text x="22" y="37" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">TAKE 2</text></g>' +
      /* floor */
      '<rect x="0" y="206" width="400" height="54" fill="#26232d"/><path d="M0 206h400" stroke="#3a3644" stroke-width="3"/>' +
      tag("PLAYING MYSELF", 200, 246, 22, GOLD, -3),
      sky("sgs4", "#3b2a5a", "#ff8a5c"));
  }

  /* 5. Sutter Av & Mother Gaston Blvd: green street signs, the wall tagged SAIGON, the Seth Low Houses towers behind */
  function corner() {
    const tower = (x, y, w) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#8a4a36"/>';
      for (let yy = y + 8; yy < 140; yy += 10) for (let xx = x + 6; xx < x + w - 8; xx += 12) g += '<rect class="sg-bl sg-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="6" fill="#ffd98a" opacity=".75"/>'; return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#sgs5)"/>' + stars(16) +
      tower(14, 24, 66) + tower(100, 34, 60) + tower(184, 18, 70) + tower(282, 30, 66) +
      txt("SETH LOW HOUSES", 219, 12, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3a3a44"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#30303a" stroke-width="1"/>'; return b; })() +
      tag("SAIGON", 22, 198, 56, PURP, -5) + tag("GSNT", 236, 214, 22, RED, -4) + tag("ABANDONED NATION", 26, 222, 13, BLUE, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="sg-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="292" y="66" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Sutter Av", 344, 82, 12, "#fff") +
      '<rect x="278" y="92" width="118" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Mother Gaston Blvd", 337, 107, 10.5, "#fff") +
      '<circle class="sg-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("sgs5", "#0c0a1a", "#3a2a4a"));
  }

  window.SCENES = { sutter: sutter, spring: spring, ring: ring, stage: stage, corner: corner };
})();
