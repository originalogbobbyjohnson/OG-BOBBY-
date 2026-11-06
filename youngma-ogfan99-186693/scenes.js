/* Young M.A game (NYC map, Brooklyn: East Flatbush). The 2 and the 5 at Beverly Rd, underground on the Nostrand Av line;
   Sheepshead Bay High School on Avenue X (she graduated there in 2010, caps in the air); the Greenpoint warehouse studio where she
   records with the RedLyfe crew; her grandmother's tree-lined Crown Heights block of limestone row houses lit up for the holidays;
   and Beverly Rd & Nostrand Av with the Downstate medical towers on Clarkson Av behind.
   400 x 260 SVGs. No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.8s}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 1.6s ease-in-out infinite}.tw2{animation-delay:-.5s}.tw3{animation-delay:-1s}' +
    '@keyframes toss{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-60px) rotate(180deg)}}.toss{transform-box:fill-box;transform-origin:50% 50%;animation:toss 2.2s ease-in-out infinite}.t2{animation-delay:-.7s}.t3{animation-delay:-1.4s}' +
    '@keyframes vu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.vu{transform-box:fill-box;transform-origin:50% 100%;animation:vu .7s ease-in-out infinite}.vu2{animation-delay:-.2s}.vu3{animation-delay:-.45s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.thump{transform-box:fill-box;transform-origin:50% 50%;animation:thump .45s ease-in-out infinite}' +
    '@keyframes snow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.snow{animation:snow 6s linear infinite}.sn2{animation-delay:-2s}.sn3{animation-delay:-4s}' +
    '@keyframes glowr{0%,100%{opacity:.55}50%{opacity:1}}.glowr{animation:glowr 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 31) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>';
  const RED2 = "#ee352e", GRN5 = "#00933c", RED = "#ff3b30", GOLD = "#f5c542", TEAL = "#7ad1c4", CREAM = "#f4ead8", SIGN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';

  /* 1. Beverly Rd on the Nostrand Av line, underground: cream tile, the tile band, the mosaic name tablet,
        steel columns, the black sign with the red 2 and the green 5, the 2 pulling in */
  function station() {
    let tile = "";
    for (let y = 30; y < 150; y += 9) tile += '<path d="M0 ' + y + 'h400" stroke="#ddd6c4" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe8d6"/>' + tile +
      '<rect x="0" y="0" width="400" height="24" fill="#3a3d40"/>' +
      [20, 140, 260].map(x => '<rect x="' + x + '" y="9" width="44" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      /* tile band: ochre with a maroon border */
      '<rect x="0" y="40" width="400" height="12" fill="#7a2e2a"/><rect x="0" y="42" width="400" height="8" fill="#c99a3e"/>' +
      /* mosaic name tablet */
      '<rect x="20" y="62" width="150" height="34" fill="#7a2e2a"/><rect x="24" y="66" width="142" height="26" fill="#c99a3e"/>' +
      '<text x="95" y="84" text-anchor="middle" ' + font + ' font-size="13" fill="#3a1a14" letter-spacing="3">BEVERLY</text>' +
      /* black hanging sign */
      '<rect x="226" y="62" width="150" height="22" rx="2" fill="#111"/><rect x="226" y="62" width="150" height="2.5" fill="#fff"/>' +
      '<text x="236" y="78" ' + font + ' font-size="12" fill="#fff">Beverly Rd</text>' + bullet(338, 73, "2", RED2, false, 8) + bullet(358, 73, "5", GRN5, false, 8) +
      /* columns */
      [330, 380].map(x => '<rect x="' + x + '" y="96" width="9" height="80" fill="#2f3d4a"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="114" width="310" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="0" y="152" width="316" height="4" fill="' + RED2 + '"/>' +
        '<rect x="296" y="124" width="16" height="24" rx="2" fill="#bcd3ea"/>' + bullet(304, 163, "2", RED2, false, 9) +
        '<circle cx="16" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#8d8f8c"/>' +
      '<path d="M0 214h400M0 240h400" stroke="#7a7c79" stroke-width="2"/>' +
      person(80, 246, "#2a2a33") + person(250, 250, "#3b2a24") +
      tag("REDLYFE", 270, 238, 18, RED, -4)
    );
  }

  /* 2. Sheepshead Bay High School on Avenue X: the long tan-brick school with its bands of windows, the name across the front,
        graduation day, caps flying */
  function sheepshead() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) wins += '<rect x="' + (34 + c * 38) + '" y="' + (58 + r * 30) + '" width="30" height="18" fill="#9fc3df" stroke="#e9e2cf" stroke-width="2"/>';
    const cap = (x, y, cls) => '<g class="toss ' + cls + '"><path d="M' + (x - 12) + ' ' + y + 'l12-6 12 6-12 6z" fill="#111"/><rect x="' + (x - 6) + '" y="' + (y + 2) + '" width="12" height="6" fill="#111"/><path d="M' + (x + 8) + ' ' + (y + 2) + 'v9" stroke="' + GOLD + '" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sh1)"/>' +
      '<rect x="20" y="44" width="360" height="132" fill="#c9a77a"/>' +
      (() => { let b = ""; for (let y = 48; y < 176; y += 6) b += '<path d="M20 ' + y + 'h360" stroke="#b8956a" stroke-width="1"/>'; return b; })() +
      '<rect x="16" y="38" width="368" height="8" fill="#e9e2cf"/>' + wins +
      /* entrance block */
      '<rect x="150" y="146" width="100" height="30" fill="#e9e2cf"/><rect x="164" y="150" width="32" height="26" fill="#2a3b4f"/><rect x="204" y="150" width="32" height="26" fill="#2a3b4f"/>' +
      '' +
      '<rect x="74" y="146" width="66" height="14" fill="#e9e2cf"/><rect x="260" y="146" width="66" height="14" fill="#e9e2cf"/>' +
      '<text x="200" y="142" text-anchor="middle" ' + font + ' font-size="10" fill="#4a3520" letter-spacing="2">SHEEPSHEAD BAY HIGH SCHOOL</text>' +
      /* lawn + walk */
      '<rect x="0" y="176" width="400" height="84" fill="#4f8a3a"/><path d="M176 176h48l30 84H146z" fill="#c9c3b5"/>' +
      /* graduates */
      [70, 100, 130, 270, 300, 330].map((x, i) => person(x, 238 + (i % 2) * 6, i % 2 ? "#5b1a1a" : "#1f2a44")).join("") +
      cap(80, 120, "") + cap(150, 110, "t2") + cap(250, 116, "t3") + cap(320, 106, "") +
      '<rect x="132" y="190" width="136" height="22" fill="#14141c" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="206" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="2">CLASS OF 2010</text>',
      sky("sh1", "#79b6e8", "#e8f3fb"));
  }

  /* 3. The Greenpoint warehouse studio: brick wall and big factory window with the city lights, wood-paneled booth,
        red RedLyfe light, the mic, monitors thumping, meters jumping */
  function studio() {
    let panel = "";
    for (let x = 0; x < 400; x += 22) panel += '<rect x="' + x + '" y="96" width="20" height="104" fill="' + (x % 44 ? "#7a4e2c" : "#6b4326") + '"/>';
    let meters = "";
    for (let i = 0; i < 8; i++) meters += '<rect class="vu vu' + (i % 3 + 1) + '" x="' + (150 + i * 13) + '" y="184" width="9" height="26" fill="' + (i % 2 ? RED : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a16"/>' +
      /* brick upper wall + factory window */
      '<rect x="0" y="0" width="400" height="96" fill="#7a3a2a"/>' +
      (() => { let b = ""; for (let y = 6; y < 96; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#5e2c20" stroke-width="1"/>'; return b; })() +
      '<rect x="130" y="10" width="140" height="78" fill="#0d1428" stroke="#222" stroke-width="5"/>' +
      '<path d="M130 50h140M177 10v78M223 10v78" stroke="#222" stroke-width="3"/>' +
      '<path d="M134 84v-20h10v-12h8v20h10v-30h8v30h12v-14h10v26h14v-36h8v36h12v-18h10v18h16v14z" fill="#1d2a4a"/>' +
      [148, 168, 196, 214, 240, 258].map((x, i) => '<rect class="tw tw' + (i % 3 + 1) + '" x="' + x + '" y="' + (62 + (i % 3) * 6) + '" width="3" height="3" fill="#ffd98a"/>').join("") +
      /* red LED strip */
      '<rect class="glowr" x="0" y="92" width="400" height="5" fill="' + RED + '"/>' +
      panel +
      tag("REDLYFE", 20, 140, 22, RED, -4) +
      /* mic stand + pop filter */
      '<rect x="292" y="120" width="4" height="80" fill="#888"/><rect x="284" y="104" width="20" height="26" rx="10" fill="#2b2b2b" stroke="#bbb" stroke-width="2"/><circle cx="270" cy="118" r="12" fill="none" stroke="#666" stroke-width="2"/><path d="M282 118h6" stroke="#888" stroke-width="2"/>' +
      /* monitors */
      '<rect x="40" y="150" width="44" height="58" rx="4" fill="#111"/><circle class="thump" cx="62" cy="186" r="14" fill="#2b2b2b" stroke="#555" stroke-width="3"/><circle cx="62" cy="160" r="5" fill="#2b2b2b"/>' +
      '<rect x="330" y="150" width="44" height="58" rx="4" fill="#111"/><circle class="thump" cx="352" cy="186" r="14" fill="#2b2b2b" stroke="#555" stroke-width="3"/><circle cx="352" cy="160" r="5" fill="#2b2b2b"/>' +
      /* desk with meters */
      '<path d="M110 228l14-50h150l14 50z" fill="#3a3a3f"/><rect x="142" y="180" width="112" height="34" fill="#141414"/>' + meters +
      '<rect x="0" y="228" width="400" height="32" fill="#1a1210"/>',
      "");
  }

  /* 4. Her grandmother's block in Crown Heights at the holidays: tree-lined, bow-front limestone row houses with stoops,
        string lights twinkling, wreaths on the doors, snow coming down */
  function grandma() {
    const house = (x, c) => '<rect x="' + x + '" y="70" width="76" height="140" fill="' + c + '"/><path d="M' + (x + 4) + ' 70h68v-8H' + (x + 4) + 'z" fill="#d8ccb0"/>' +
      '<path d="M' + (x + 6) + ' 80h32q8 0 8 10v40q0 10-8 10H' + (x + 6) + 'z" fill="#d6cdb6" stroke="#b9ae95" stroke-width="1.5"/>' +
      '<rect x="' + (x + 12) + '" y="88" width="12" height="18" fill="#ffd98a"/><rect x="' + (x + 28) + '" y="88" width="10" height="18" fill="#3a3550"/>' +
      '<rect x="' + (x + 12) + '" y="114" width="12" height="18" fill="#3a3550"/><rect x="' + (x + 28) + '" y="114" width="10" height="18" fill="#ffd98a"/>' +
      '<rect x="' + (x + 52) + '" y="150" width="18" height="30" fill="#4a2e1c"/><circle cx="' + (x + 61) + '" cy="160" r="6" fill="none" stroke="#2f6b3e" stroke-width="3"/><circle cx="' + (x + 61) + '" cy="165" r="1.6" fill="' + RED + '"/>' +
      '<path d="M' + (x + 46) + ' 180h28v6h6v6h6v6h6v12h-52z" fill="#b9ae95"/>' +
      (() => { let l = ""; for (let i = 0; i < 7; i++) l += '<circle class="tw tw' + (i % 3 + 1) + '" cx="' + (x + 6 + i * 11) + '" cy="' + (66 + (i % 2) * 3) + '" r="2" fill="' + [RED, GOLD, TEAL][i % 3] + '"/>'; return l; })();
    let flakes = "";
    for (let i = 0; i < 24; i++) flakes += '<circle class="snow sn' + (i % 3 + 1) + '" cx="' + ((i * 41 + 7) % 400) + '" cy="' + ((i * 37) % 120 - 20) + '" r="' + (i % 2 ? 1.6 : 2.4) + '" fill="#fff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gm1)"/>' + stars(12) +
      house(0, "#e2d7bd") + house(80, "#d9cdb0") + house(160, "#e6dcc4") + house(240, "#d4c7a8") + house(320, "#e0d4b9") +
      /* trees */
      [64, 214, 362].map(x => '<rect x="' + x + '" y="150" width="6" height="66" fill="#3a2a1e"/><path d="M' + (x + 3) + ' 150l-26-40M' + (x + 3) + ' 150l24-44M' + (x + 3) + ' 160l-18-20" stroke="#3a2a1e" stroke-width="3"/>').join("") +
      /* sidewalk + street */
      '<rect x="0" y="210" width="400" height="16" fill="#a3a5a9"/><rect x="0" y="226" width="400" height="34" fill="#55575c"/>' +
      '<g class="car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      flakes,
      sky("gm1", "#0e1326", "#33406a"));
  }

  /* 5. Beverly Rd and Nostrand Av: green signs, the subway globes at the stair down to the 2 and 5, the wall tagged YOUNG M.A,
        and up Nostrand behind it the Downstate medical towers on Clarkson Av, their red roof beacons blinking */
  function corner() {
    let grid = "";
    for (let r = 0; r < 9; r++) for (let c = 0; c < 6; c++) grid += '<rect x="' + (226 + c * 14) + '" y="' + (36 + r * 12) + '" width="8" height="6" fill="' + ((r * 3 + c) % 5 ? "#3a4560" : "#ffe7a8") + '"/>';
    let grid2 = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) grid2 += '<rect x="' + (322 + c * 14) + '" y="' + (72 + r * 12) + '" width="8" height="6" fill="' + ((r + c) % 4 ? "#3a4560" : "#ffe7a8") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(16) +
      /* Downstate towers */
      '<rect x="218" y="28" width="92" height="130" fill="#c7c9c4"/>' + grid + '<rect class="flk" x="262" y="20" width="4" height="8" fill="' + RED + '"/>' +
      '<rect x="314" y="64" width="64" height="94" fill="#b9bcb6"/>' + grid2 + '<rect class="flk flk2" x="344" y="56" width="4" height="8" fill="' + RED + '"/>' +
      /* low shops along Nostrand */
      '<rect x="200" y="140" width="200" height="88" fill="#4a3b3a"/>' +
      [214, 262, 310, 358].map(x => '<rect x="' + x + '" y="160" width="34" height="30" fill="#ffe7a8" opacity=".75"/>').join("") +
      /* tag wall */
      '<rect x="0" y="120" width="200" height="108" fill="#4d4b52"/>' +
      (() => { let b = ""; for (let y = 126; y < 228; y += 8) b += '<path d="M0 ' + y + 'h200" stroke="#3f3d44" stroke-width="1"/>'; return b; })() +
      tag("YOUNG M.A", 6, 186, 36, RED, -5) + tag("OOOUUU", 30, 218, 20, GOLD, -4) + tag("ME ALWAYS", 100, 138, 13, "#fff", -3) +
      '<path d="M150 196l7 12 8-10 8 10 7-12v18h-30z" fill="' + GOLD + '" stroke="#000" stroke-width="2"/>' +
      /* subway stair globes */
      '<rect x="222" y="196" width="4" height="32" fill="#2f5a3c"/><circle class="flk" cx="224" cy="192" r="6" fill="#4caf50"/>' +
      '<rect x="262" y="196" width="4" height="32" fill="#2f5a3c"/><circle class="flk flk2" cx="264" cy="192" r="6" fill="#4caf50"/>' +
      '<rect x="226" y="208" width="36" height="20" fill="#2f5a3c"/>' +
      /* street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="46" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="380" y="150" width="5" height="78" fill="#3d4b3f"/><circle class="flk" cx="382" cy="150" r="4" fill="#fff6c2"/>' +
      blade(292, 166, 106, "Beverly Rd") + blade(292, 190, 106, "Nostrand Av"),
      sky("c5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { station: station, sheepshead: sheepshead, studio: studio, grandma: grandma, corner: corner };
})();
