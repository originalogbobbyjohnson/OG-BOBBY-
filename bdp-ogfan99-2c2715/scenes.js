/* Boogie Down Productions game (NYC map, the Bronx: South Bronx / Mott Haven). KRS-One, Scott La Rock, D-Nice, Ms. Melodie.
   The 6 pulling into Brook Av (underground), the Franklin Avenue Armory in Morrisania (red-brick castle with the corner tower, where KRS-One
   met social worker Scott La Rock in 1986), the Scott La Rock Blvd co-name sign at W Kingsbridge Rd & Jerome Av under the 4 el (a celebration),
   a ghetto-music block party under the 2 train el ("sometimes I find myself upon the number two train"),
   and Brook Av & E 138 St with the wall tagged and Yankee Stadium far off behind. 400 x 260 SVGs. All CSS classes prefixed bdp-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bdpflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.bdp-flk{animation:bdpflick 2.4s infinite}' +
    '@keyframes bdpblink{0%,100%{opacity:.25}50%{opacity:1}}.bdp-bl{animation:bdpblink 1.6s ease-in-out infinite}.bdp-bl2{animation-delay:.5s}.bdp-bl3{animation-delay:1s}' +
    '@keyframes bdpel{from{transform:translateX(420px)}to{transform:translateX(-380px)}}.bdp-el{animation:bdpel 6.5s linear infinite}' +
    '@keyframes bdpel2{from{transform:translateX(-380px)}to{transform:translateX(420px)}}.bdp-elr{animation:bdpel2 7s linear infinite}' +
    '@keyframes bdpcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.bdp-cl{animation:bdpcloud 26s linear infinite}.bdp-cl2{animation-delay:-13s}' +
    '@keyframes bdpflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-8deg)}}.bdp-flag{transform-box:fill-box;transform-origin:0 50%;animation:bdpflag 1.2s ease-in-out infinite}' +
    '@keyframes bdpspin{to{transform:rotate(360deg)}}.bdp-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bdpspin 1.3s linear infinite}' +
    '@keyframes bdppump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.bdp-pump{transform-box:fill-box;transform-origin:50% 50%;animation:bdppump .45s ease-in-out infinite}' +
    '@keyframes bdpbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bdp-bob{animation:bdpbob .5s ease-in-out infinite}.bdp-bob2{animation-delay:.25s}' +
    '@keyframes bdpnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.bdp-note{animation:bdpnote 2.2s linear infinite}.bdp-note2{animation-delay:.7s}.bdp-note3{animation-delay:1.4s}' +
    '@keyframes bdpcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.bdp-car{animation:bdpcar 7s linear infinite}.bdp-car2{animation-delay:-3.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const ORANGE = "#ff5e3a", GREEN6 = "#00933c", CREAM = "#f2e8cf", GOLD = "#f2c14e", RED2 = "#ee352e", SIGN = "#0f6b3a";
  /* a green NYC street blade */
  const blade = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 12, "#fff");
  /* an el: steel girder with lattice and posts */
  const el = (y, col) => { let s = '<rect x="0" y="' + y + '" width="400" height="8" fill="' + col + '"/>'; for (let x = 0; x < 400; x += 20) s += '<path d="M' + x + ' ' + (y + 8) + 'l10 12l10 -12" stroke="' + col + '" stroke-width="2" fill="none"/>'; return s + '<rect x="0" y="' + (y + 20) + '" width="400" height="5" fill="' + col + '"/>'; };
  const car = (x, y, w, b, bc) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="26" rx="3" fill="#c3c8cf" stroke="#6b7280"/>'; for (let i = x + 12; i < x + w - 30; i += 28) s += '<rect x="' + i + '" y="' + (y + 6) + '" width="18" height="10" rx="1" fill="#fff1b8" opacity=".9"/>'; return s + bullet(x + w - 14, y + 13, b, bc); };

  /* 1. Brook Av, underground on the Pelham line: white tile, the green-and-buff band, the black sign with the 6, the 6 sliding in */
  function brookav() {
    let tiles = "";
    for (let y = 30; y < 160; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1ede2"/>';
    let band = "";
    for (let x = 0; x < 400; x += 14) band += '<rect x="' + x + '" y="40" width="7" height="7" fill="' + (x % 28 ? "#2d6a4f" : "#d9b26f") + '"/>';
    let win = "";
    for (let x = 32; x < 280; x += 36) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#ddd6c6"/>' + tiles +
      '<rect x="0" y="36" width="400" height="15" fill="#1d4d3a"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#26272b"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="bdp-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="70" y="60" width="260" height="32" rx="3" fill="#111"/><rect x="70" y="60" width="260" height="3" fill="#fff"/>' +
      '<text x="86" y="82" ' + font + ' font-size="16" fill="#fff">Brook Av</text>' + bullet(304, 76, "6", GREEN6) +
      [20, 200, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#3f6b55"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="292" y="110" width="14" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "6", GREEN6) +
        '<rect x="10" y="140" width="276" height="4" fill="' + GREEN6 + '"/><circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5b5853"/>' +
      person(332, 196, "#1b1b1b") + person(356, 200, "#2a2a2a") +
      txt("SOUTH BRONX", 150, 236, 12, CREAM, 'letter-spacing="4"'));
  }

  /* 2. The Franklin Avenue Armory, Morrisania: asymmetrical red-brick armory up on the slope, the six-story corner tower with
     crenellations and slit windows, the long drill shed, flag on the tower; where KRS-One met Scott La Rock in 1986 */
  function armory() {
    let brick = "";
    for (let y = 40; y < 200; y += 7) for (let x = (y / 7) % 2 ? 37 : 30; x < 380; x += 14) brick += '<rect x="' + x + '" y="' + y + '" width="12" height="5" fill="#8c3324" opacity=".55"/>';
    const cren = (x, y, w) => { let s = ""; for (let i = x; i < x + w; i += 10) s += '<rect x="' + i + '" y="' + (y - 7) + '" width="6" height="7" fill="#9c3b2a"/>'; return s; };
    const slits = (x, y0, y1) => { let s = ""; for (let y = y0; y < y1; y += 18) s += '<rect x="' + x + '" y="' + y + '" width="4" height="12" fill="#2a1410"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#bdpa)"/>' +
      '<g class="bdp-cl"><ellipse cx="60" cy="40" rx="34" ry="10" fill="#fff" opacity=".8"/><ellipse cx="82" cy="34" rx="20" ry="9" fill="#fff" opacity=".8"/></g>' +
      '<g class="bdp-cl bdp-cl2"><ellipse cx="60" cy="64" rx="28" ry="8" fill="#fff" opacity=".7"/></g>' +
      /* the slope */
      '<path d="M0 214L400 190V260H0z" fill="#6b8f4e"/><path d="M0 222L400 200" stroke="#55703c" stroke-width="3"/>' +
      /* drill shed (long hall with the arched roof) */
      '<path d="M120 196V110Q245 70 372 110V192z" fill="#a8432f"/>' +
      '<path d="M120 110Q245 70 372 110" stroke="#5b2219" stroke-width="4" fill="none"/>' +
      [150, 190, 230, 270, 310, 345].map(x => '<rect x="' + x + '" y="126" width="12" height="40" rx="6" fill="#2a1410"/>').join("") +
      /* admin wing + the corner tower */
      '<rect x="34" y="96" width="96" height="104" fill="#b2482f"/>' + cren(34, 96, 96) +
      '<rect x="30" y="38" width="44" height="162" fill="#a53f2a"/>' + cren(30, 38, 44) +
      '<rect x="30" y="38" width="44" height="6" fill="#d9b48f"/><rect x="34" y="96" width="96" height="5" fill="#d9b48f"/>' +
      slits(42, 56, 190) + slits(58, 56, 190) + slits(90, 112, 190) + slits(110, 112, 190) +
      '<g clip-path="url(#bdpclip)">' + brick + '</g>' + '<path d="M78 200v-26q8-10 16 0v26z" fill="#2a1410"/>' +
      /* flag */
      '<rect x="51" y="8" width="2" height="24" fill="#ddd"/><rect class="bdp-flag" x="53" y="9" width="22" height="13" fill="' + ORANGE + '"/>' +
      /* people heading in */
      person(160, 202, "#1d1d1d", "bdp-bob") + person(180, 204, "#2a2a2a", "bdp-bob bdp-bob2") +
      txt("FRANKLIN AVENUE ARMORY", 200, 246, 12, CREAM, 'letter-spacing="2"'),
      sky("bdpa", "#7fb2d9", "#d8e8f0") + '<clipPath id="bdpclip"><path d="M120 196V110Q245 70 372 110V192z"/><rect x="34" y="96" width="96" height="104"/><rect x="30" y="38" width="44" height="162"/></clipPath>');
  }

  /* 3. Scott La Rock Blvd: the co-name sign at W Kingsbridge Rd & Jerome Av, under the el with the 4 rolling over, a DJ table
     with two turntables spinning, records in a crate, the block celebrating */
  function larock() {
    return svg(
      '<rect width="400" height="260" fill="url(#bdpl)"/>' +
      '<g class="bdp-el">' + car(0, 14, 160, "4", GREEN6) + car(164, 14, 160, "4", GREEN6) + '</g>' +
      el(40, "#2f5a44") +
      [40, 210, 370].map(x => '<rect x="' + (x - 5) + '" y="65" width="10" height="150" fill="#2f5a44"/>').join("") +
      /* storefront row behind, plain */
      '<rect x="0" y="110" width="400" height="100" fill="#5a3b33"/>' +
      [20, 110, 230, 300].map((x, i) => '<rect x="' + x + '" y="134" width="60" height="44" fill="' + ["#f0c060", "#9fd3c7", "#f0c060", "#e6a57e"][i] + '" opacity=".8"/><rect x="' + x + '" y="124" width="60" height="10" fill="' + ["#c0392b", "#2c3e50", "#16a085", "#8e44ad"][i] + '"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#6a6a6e"/><rect x="0" y="206" width="400" height="4" fill="#9a9a9e"/>' +
      /* the sign post + the co-name sign */
      '<rect x="300" y="68" width="5" height="142" fill="#3d4b3f"/>' +
      '<rect x="222" y="70" width="166" height="24" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Scott La Rock Blvd", 305, 87, 13, "#fff") +
      blade(250, 98, 110, "W Kingsbridge Rd") +
      /* DJ table */
      '<rect x="40" y="176" width="150" height="10" fill="#222"/><rect x="48" y="186" width="6" height="22" fill="#222"/><rect x="176" y="186" width="6" height="22" fill="#222"/>' +
      '<rect x="50" y="160" width="58" height="18" rx="2" fill="#3a3a3e"/><rect x="122" y="160" width="58" height="18" rx="2" fill="#3a3a3e"/>' +
      '<g class="bdp-spin"><ellipse cx="78" cy="166" rx="22" ry="6" fill="#111"/><ellipse cx="78" cy="166" rx="6" ry="2" fill="' + ORANGE + '"/><path d="M60 166h8" stroke="#555"/></g>' +
      '<g class="bdp-spin"><ellipse cx="150" cy="166" rx="22" ry="6" fill="#111"/><ellipse cx="150" cy="166" rx="6" ry="2" fill="' + GOLD + '"/><path d="M162 166h8" stroke="#555"/></g>' +
      /* crate of records */
      '<rect x="196" y="182" width="34" height="26" fill="#7b5b35" stroke="#4a361e"/>' + [200, 206, 212, 218].map(x => '<rect x="' + x + '" y="172" width="4" height="14" fill="#111"/>').join("") +
      /* notes floating up */
      ['bdp-note', 'bdp-note bdp-note2', 'bdp-note bdp-note3'].map((c, i) => '<text class="' + c + '" x="' + (70 + i * 40) + '" y="150" font-size="16" fill="' + GOLD + '">&#9835;</text>').join("") +
      person(250, 216, "#151515", "bdp-bob") + person(272, 218, "#252525", "bdp-bob bdp-bob2") + person(350, 216, "#1c1c1c", "bdp-bob"),
      sky("bdpl", "#f3b562", "#f7e1b5"));
  }

  /* 4. Ghetto music under the 2 train: the el at night, the 2 rolling across, a block party below,
     speaker stack pumping, a boombox on the stoop, the crowd dancing */
  function twotrain() {
    let win = "";
    for (let x = 14; x < 400; x += 26) for (let y = 120; y < 176; y += 16) win += '<rect class="bdp-bl bdp-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="9" height="9" fill="#ffd98a" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bdpt)"/>' + stars(18) +
      '<rect x="0" y="108" width="400" height="80" fill="#3b2a26"/>' + win +
      '<g class="bdp-elr">' + car(0, 30, 160, "2", RED2) + car(164, 30, 160, "2", RED2) + '</g>' +
      el(56, "#4a5560") +
      [60, 200, 340].map(x => '<rect x="' + (x - 5) + '" y="81" width="10" height="110" fill="#4a5560"/>').join("") +
      '<rect x="0" y="186" width="400" height="74" fill="#4d4b4f"/>' +
      /* speaker stack */
      '<rect x="20" y="140" width="46" height="70" fill="#151515" stroke="#444"/>' +
      '<circle class="bdp-pump" cx="43" cy="160" r="13" fill="#2b2b2b" stroke="#666"/><circle class="bdp-pump" cx="43" cy="192" r="11" fill="#2b2b2b" stroke="#666"/>' +
      '<rect x="334" y="140" width="46" height="70" fill="#151515" stroke="#444"/>' +
      '<circle class="bdp-pump" cx="357" cy="160" r="13" fill="#2b2b2b" stroke="#666"/><circle class="bdp-pump" cx="357" cy="192" r="11" fill="#2b2b2b" stroke="#666"/>' +
      /* boombox */
      '<g class="bdp-pump"><rect x="176" y="196" width="48" height="24" rx="3" fill="#c9ced6" stroke="#555"/><circle cx="188" cy="208" r="7" fill="#222"/><circle cx="212" cy="208" r="7" fill="#222"/><rect x="194" y="199" width="12" height="5" fill="' + ORANGE + '"/><path d="M182 196q18-12 36 0" stroke="#555" stroke-width="2" fill="none"/></g>' +
      /* dancers */
      [90, 120, 150, 250, 280, 310].map((x, i) => person(x, 214 - (i % 2) * 4, i % 2 ? "#1a1a1a" : "#262626", i % 2 ? "bdp-bob bdp-bob2" : "bdp-bob")).join("") +
      ['bdp-note', 'bdp-note bdp-note2', 'bdp-note bdp-note3'].map((c, i) => '<text class="' + c + '" x="' + (40 + i * 150) + '" y="140" font-size="16" fill="' + GOLD + '">&#9835;</text>').join("") +
      txt("THE NUMBER TWO TRAIN", 200, 252, 10, CREAM, 'letter-spacing="4" opacity=".8"'),
      sky("bdpt", "#0b0b1e", "#3a2448"));
  }

  /* 5. Brook Av & E 138 St: green street signs, the wall tagged, Yankee Stadium far off behind: its limestone face, arches and the white frieze */
  function corner() {
    let frieze = "";
    for (let x = 96; x < 304; x += 8) frieze += '<path d="M' + x + ' 66q4 7 8 0" stroke="#f4f4f4" stroke-width="1.4" fill="none"/>';
    let arches = "";
    for (let x = 104; x < 300; x += 16) arches += '<rect x="' + x + '" y="84" width="9" height="20" rx="4.5" fill="#6d6a63"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bdpc)"/>' + stars(12) +
      /* the stadium far off */
      '<g opacity=".75"><rect x="90" y="76" width="220" height="52" fill="#d8d0bd"/>' + arches +
      '<rect x="90" y="62" width="220" height="4" fill="#f4f4f4"/>' + frieze +
      [96, 304].map(x => '<rect x="' + (x - 2) + '" y="30" width="4" height="34" fill="#9aa0a6"/><rect class="bdp-flk" x="' + (x - 9) + '" y="26" width="18" height="6" fill="#fff6c2"/>').join("") + '</g>' +
      /* low buildings */
      '<rect x="0" y="100" width="70" height="40" fill="#4b3a36"/><rect x="330" y="96" width="70" height="44" fill="#4b3a36"/>' +
      /* the wall */
      '<rect x="0" y="128" width="400" height="98" fill="#3c3e45"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("BDP", 14, 200, 64, ORANGE, -6) + tag("BOOGIE DOWN PRODUCTIONS", 130, 172, 15, CREAM, -4) +
      tag("GHETTO MUSIC", 126, 214, 18, GOLD, -3) + tag("LA ROCK", 20, 222, 15, "#7fd1b9", -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="bdp-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GREEN6 + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="bdp-car bdp-car2"><rect x="0" y="240" width="40" height="12" rx="4" fill="' + GOLD + '"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      blade(300, 66, 96, "Brook Av") + blade(300, 92, 96, "E 138 St") +
      '<circle class="bdp-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("bdpc", "#0c0b18", "#3a2a3e"));
  }

  window.SCENES = { brookav: brookav, armory: armory, larock: larock, twotrain: twotrain, corner: corner };
})();
