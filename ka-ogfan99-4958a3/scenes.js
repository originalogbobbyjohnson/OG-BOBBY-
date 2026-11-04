/* Ka game (NYC map, Brooklyn: Brownsville). The 3 on the elevated New Lots line at Rockaway Av, a Brownsville firehouse (Ka served as an FDNY captain),
   chess at night in the Brownsville Houses courtyard (The Night's Gambit), the Brooklyn Public Library's Brownsville branch on Glenmore Ave ("inquisitively hit the books"),
   and Rockaway Ave & Blake Ave with the projects behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes beacon{0%,100%{fill:#ff3b30}50%{fill:#ffd23f}}.bc{animation:beacon .7s linear infinite}' +
    '@keyframes hop{0%,100%{transform:translate(0,0)}40%{transform:translate(9px,-12px)}80%{transform:translate(18px,0)}}.hop{animation:hop 2.6s ease-in-out infinite}' +
    '@keyframes page{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}.pg{transform-box:fill-box;transform-origin:0% 50%;animation:page 2.4s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.7}}.gl{animation:glow 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const proj = (x, y, w, col) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="' + col + '"/>';
    for (let yy = y + 8; yy < 190; yy += 13) for (let xx = x + 5; xx < x + w - 6; xx += 11) g += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffd98a" opacity=".75"/>'; return g; };
  const RED = "#ee352e", FIRE = "#c0392b", BONE = "#e8e2d4", GOLD = "#c9a24a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. Rockaway Av on the elevated 3: black sign with the red 3 bullet, the train sliding in, Livonia Ave below */
  function rockaway() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(10) +
      '<circle cx="60" cy="40" r="16" fill="#f4efe0" opacity=".9"/>' +
      proj(240, 40, 70, "#26283a") + proj(320, 56, 70, "#202233") +
      '<path d="M0 50h400v8H0z" fill="#3a3a3a"/><rect x="0" y="58" width="400" height="3" fill="#777"/>' +
      [40, 160, 280].map(x => '<rect x="' + (x - 3) + '" y="61" width="6" height="100" fill="#2f5a3c"/>').join("") +
      '<rect x="80" y="66" width="200" height="30" rx="3" fill="#111"/><rect x="80" y="66" width="200" height="3" fill="#fff"/>' +
      '<text x="96" y="88" ' + font + ' font-size="15" fill="#fff">Rockaway Av</text>' + bullet(258, 81, "3", RED) +
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "3", RED) +
      '</g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="182" width="12" height="78" fill="#2f5a3c"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#4a4a4f"/>' +
      '<g class="car"><rect x="0" y="242" width="40" height="13" rx="4" fill="' + BONE + '"/></g>' +
      '<text x="200" y="230" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">LIVONIA AVE</text>',
      sky("s1", "#0d1022", "#3b3552"));
  }

  /* 2. A Brownsville firehouse: red-brick house, the big red bay door half up, the rig's beacon flashing (Ka served as an FDNY captain) */
  function firehouse() {
    let brick = "";
    for (let y = 30; y < 200; y += 8) for (let x = (y / 8) % 2 ? 58 : 50; x < 350; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7e3424"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(8) +
      '<rect x="50" y="26" width="300" height="174" fill="#94402c"/>' + brick +
      '<rect x="44" y="20" width="312" height="10" fill="' + BONE + '"/>' +
      '<rect x="110" y="38" width="180" height="22" fill="' + BONE + '"/><text x="200" y="54" text-anchor="middle" ' + font + ' font-size="13" fill="#3a1a12" letter-spacing="3">ENGINE COMPANY</text>' +
      '<rect x="70" y="70" width="30" height="34" fill="#2a3242" stroke="' + BONE + '" stroke-width="2"/><rect x="300" y="70" width="30" height="34" fill="#2a3242" stroke="' + BONE + '" stroke-width="2"/>' +
      /* bay with the rig */
      '<rect x="120" y="96" width="160" height="104" fill="#1a1a1a" stroke="' + BONE + '" stroke-width="3"/>' +
      '<rect x="128" y="140" width="144" height="52" rx="4" fill="' + FIRE + '"/><rect x="134" y="146" width="40" height="22" rx="2" fill="#cfe2f5" opacity=".8"/>' +
      '<rect x="180" y="152" width="86" height="6" fill="#e8e3d8"/><rect x="128" y="176" width="144" height="4" fill="#e8e3d8"/>' +
      '<rect class="bc" x="160" y="134" width="20" height="6" rx="2"/><rect class="bc" x="226" y="134" width="20" height="6" rx="2" style="animation-delay:.35s"/>' +
      /* the door, half up */
      '<rect x="120" y="96" width="160" height="36" fill="' + FIRE + '"/>' + [104, 112, 120].map(y => '<path d="M120 ' + y + 'h160" stroke="#8e2a1f" stroke-width="2"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="200" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="20" y="186" width="14" height="20" rx="3" fill="' + FIRE + '"/><rect x="17" y="182" width="20" height="6" rx="2" fill="' + FIRE + '"/>' +
      '<g class="car"><rect x="0" y="228" width="44" height="14" rx="4" fill="' + BONE + '"/><circle cx="10" cy="242" r="4" fill="#111"/><circle cx="34" cy="242" r="4" fill="#111"/></g>',
      sky("s2", "#0d1022", "#33304a"));
  }

  /* 3. Chess at night in the Brownsville Houses courtyard: a stone table under a lamp, a knight hopping across the board */
  function chess() {
    let board = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 8; c++) board += '<rect x="' + (136 + c * 16) + '" y="' + (150 + r * 8) + '" width="16" height="8" fill="' + ((r + c) % 2 ? "#2a2a2a" : BONE) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(16) +
      proj(0, 50, 90, "#2a2232") + proj(100, 70, 80, "#241d2b") + proj(220, 60, 90, "#2a2232") + proj(318, 44, 82, "#241d2b") +
      '<rect x="0" y="196" width="400" height="64" fill="#3b3a40"/>' +
      /* lamp */
      '<rect x="60" y="80" width="5" height="120" fill="#222"/><path d="M50 80h26l-4 8H54z" fill="#333"/>' +
      '<circle class="gl" cx="63" cy="96" r="60" fill="#ffe08a"/><circle cx="63" cy="90" r="4" fill="#fff6c2"/>' +
      /* stone table */
      '<rect x="126" y="144" width="148" height="56" rx="4" fill="#8f8a80"/>' + board +
      '<rect x="186" y="200" width="28" height="30" fill="#7a756c"/><rect x="90" y="206" width="26" height="14" rx="3" fill="#7a756c"/><rect x="284" y="206" width="26" height="14" rx="3" fill="#7a756c"/>' +
      /* pieces */
      '<path d="M152 150v-14l4-4h4l-2 6h4v12z" fill="' + BONE + '" stroke="#444"/>' +
      '<g class="hop"><path d="M218 150v-12q0-10 10-12l2 4-4 4h6v16z" fill="#1a1a1a" stroke="' + GOLD + '"/></g>' +
      '<path d="M252 150v-10h10v10z" fill="#1a1a1a" stroke="' + GOLD + '"/><path d="M250 140h14l-3-6h-8z" fill="#1a1a1a" stroke="' + GOLD + '"/>' +
      tag("NIGHT'S GAMBIT", 210, 246, 22, GOLD, -3),
      sky("s3", "#05060f", "#1c1a30"));
  }

  /* 4. The Brownsville branch library on Glenmore Ave: pale stone columns, lit reading room, a book with a page turning */
  function library() {
    let cols = "";
    [118, 158, 198, 238, 278].forEach(x => cols += '<rect x="' + (x - 7) + '" y="78" width="14" height="96" fill="#ece5d2"/><rect x="' + (x - 10) + '" y="74" width="20" height="6" fill="#d9d0b8"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(6) +
      '<rect x="80" y="70" width="240" height="110" fill="#d8ccb0"/>' +
      '<path d="M70 70h260l-130-40z" fill="#e3d9c0" stroke="#bfb291" stroke-width="2"/>' +
      '<rect x="96" y="60" width="208" height="12" fill="#cbbf9f"/>' +
      '<text x="200" y="69" text-anchor="middle" ' + font + ' font-size="8" fill="#5a4a2a" letter-spacing="3">PUBLIC LIBRARY</text>' +
      [128, 168, 208, 248].map(x => '<rect x="' + (x + 2) + '" y="92" width="16" height="60" fill="#ffd98a" class="gl"/>').join("") +
      cols +
      '<rect x="70" y="174" width="260" height="8" fill="#cbbf9f"/><rect x="60" y="182" width="280" height="8" fill="#bfb291"/><rect x="50" y="190" width="300" height="10" fill="#b2a582"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="200" width="400" height="4" fill="#8a8c90"/>' +
      /* open book */
      '<path d="M150 224l50 6 50-6v24l-50 6-50-6z" fill="' + BONE + '" stroke="#555"/><path d="M200 230v24" stroke="#555"/>' +
      '<path class="pg" d="M200 230l46-5v22l-46 5z" fill="#f7f3ea" stroke="#777"/>' +
      '<path d="M160 232h30M160 238h30M160 244h26" stroke="#999" stroke-width="1.5"/>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">GLENMORE AVE</text>',
      sky("s4", "#14183a", "#5b5a86"));
  }

  /* 5. Rockaway Ave & Blake Ave: green street signs, the wall tagged KA, the Brownsville Houses and the el behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) +
      proj(10, 40, 80, "#2a2232") + proj(110, 60, 70, "#241d2b") + proj(200, 50, 80, "#2a2232") +
      '<rect x="0" y="110" width="400" height="10" fill="#2f5a3c"/>' + [60, 180, 300].map(x => '<rect x="' + (x - 4) + '" y="120" width="8" height="20" fill="#2f5a3c"/>').join("") +
      '<g class="anim-train"><rect x="20" y="94" width="200" height="16" rx="3" fill="#c9ced6"/>' + bullet(212, 102, "3", RED) + '</g>' +
      '<rect x="0" y="132" width="400" height="94" fill="#3a3a40"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 9) b += '<path d="M0 ' + y + 'h400" stroke="#313136" stroke-width="1"/>'; return b; })() +
      tag("KA", 30, 206, 64, BONE, -5) + tag("BROWNSVILLE", 120, 186, 26, FIRE, -4) + tag("EVERY NOW AND THEN", 120, 216, 15, GOLD, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + FIRE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="40" width="5" height="188" fill="#3d4b3f"/>' +
      '<rect x="290" y="44" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Rockaway Ave</text>' +
      '<rect x="300" y="70" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="86" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Blake Ave</text>' +
      '<circle class="flk" cx="358" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#06070f", "#262a40"));
  }

  window.SCENES = { rockaway: rockaway, firehouse: firehouse, chess: chess, library: library, corner: corner };
})();
