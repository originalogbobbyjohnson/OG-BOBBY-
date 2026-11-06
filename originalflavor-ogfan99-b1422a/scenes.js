/* Original Flavor game (NYC map, Brooklyn: Bed-Stuy, Ski and the Suave Lover's camp under DJ Clark Kent).
   The B25/B26 pulling up to the Fulton St & New York Av stop, the Fulton Mall (sneakers and tapes, "go out and get the cassette"),
   the domed Dime Savings Bank by the mall ("bring all the papes"), the old Paramount theater block at LIU Brooklyn with its marquee lit,
   and Monroe St & Nostrand Av with Bed-Stuy brownstones behind. 400 x 260 SVGs. All CSS classes prefixed "of-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ofwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.of-walk{animation:ofwalk 9s linear infinite}.of-walk2{animation-delay:-3s}.of-walk3{animation-delay:-6s}' +
    '@keyframes ofwalkb{from{transform:translateX(440px)}to{transform:translateX(-40px)}}.of-walkb{animation:ofwalkb 11s linear infinite}.of-walkb2{animation-delay:-5.5s}' +
    '@keyframes ofblink{0%,100%{opacity:.25}50%{opacity:1}}.of-bl{animation:ofblink 1.4s ease-in-out infinite}.of-bl2{animation-delay:.47s}.of-bl3{animation-delay:.93s}' +
    '@keyframes ofbird{0%{transform:translate(0,0)}50%{transform:translate(160px,-18px)}100%{transform:translate(320px,4px)}}.of-bird{animation:ofbird 8s linear infinite}.of-bird2{animation-delay:-2.7s}.of-bird3{animation-delay:-5.3s}' +
    '@keyframes offlap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.of-wing{transform-box:fill-box;transform-origin:50% 100%;animation:offlap .35s linear infinite}' +
    '@keyframes ofbill{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(30px,230px) rotate(340deg)}}.of-bill{transform-box:fill-box;transform-origin:50% 50%;animation:ofbill 5s linear infinite}.of-bill2{animation-delay:-1.7s}.of-bill3{animation-delay:-3.4s}' +
    '@keyframes ofbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.of-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ofbeam 3.2s ease-in-out infinite}.of-beam2{animation-delay:-1.6s}' +
    '@keyframes ofpump{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}.of-pump{transform-box:fill-box;transform-origin:50% 50%;animation:ofpump .45s ease-in-out infinite}.of-pump2{animation-delay:.22s}' +
    '@keyframes ofnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.of-note{animation:ofnote 2.4s linear infinite}.of-note2{animation-delay:-.8s}.of-note3{animation-delay:-1.6s}' +
    '@keyframes ofglint{0%,100%{opacity:0}50%{opacity:.9}}.of-glint{animation:ofglint 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* MTA bus route plate: blue rounded badge with white route letters */
  const plate = (x, y, code) => '<rect x="' + (x - 17) + '" y="' + (y - 10) + '" width="34" height="20" rx="5" fill="#0039a6"/>' + txt(code, x, y + 5, 13, "#fff");
  /* a little silhouette person (no face) */
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/><rect x="' + (x - 5) + '" y="' + (y + 26) + '" width="4" height="10" fill="' + col + '"/><rect x="' + (x + 1) + '" y="' + (y + 26) + '" width="4" height="10" fill="' + col + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff8c1a", CHERRY = "#e8306b", TEAL = "#58c4dd", CREAM = "#f4ead8";

  /* 1. Fulton St & New York Av, Bed-Stuy: brick storefront row, the bus stop pole and shelter with the black stop sign, the B25 rolling in */
  function busstop() {
    let brick = "";
    for (let y = 40; y < 150; y += 8) for (let x = (y / 8) % 2 ? 0 : -8; x < 400; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3a2a"/>';
    let win = "";
    for (let x = 18; x < 390; x += 46) win += '<rect x="' + x + '" y="52" width="26" height="30" fill="#2b3442"/><rect x="' + x + '" y="52" width="26" height="4" fill="#cfc6b4"/>';
    const fronts = [["#2d6a4f", "BEAUTY"], ["#1d3557", "BAKERY"], ["#6d2e46", "SHOES"], ["#3a3a3a", "TAPES"]].map((f, i) =>
      '<rect x="' + (8 + i * 98) + '" y="96" width="90" height="16" fill="' + f[0] + '"/>' + txt(f[1], 53 + i * 98, 108, 10, "#f4ead8", 'letter-spacing="2"') +
      '<rect x="' + (14 + i * 98) + '" y="114" width="78" height="34" fill="#3b4656" opacity=".85"/>').join("");
    let wins = "";
    for (let x = 52; x < 330; x += 40) wins += '<rect x="' + x + '" y="166" width="30" height="22" rx="2" fill="#cfe2f5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ofs1)"/>' +
      '<rect x="0" y="34" width="400" height="116" fill="#8a4532"/>' + brick + win +
      '<rect x="0" y="30" width="400" height="8" fill="#5a2a1e"/>' + fronts +
      /* sidewalk + street */
      '<rect x="0" y="148" width="400" height="14" fill="#b8b2a6"/><rect x="0" y="162" width="400" height="98" fill="#3d3d40"/>' +
      '<rect x="0" y="236" width="400" height="3" fill="#e9c46a"/>' +
      [30, 110, 190, 270, 350].map(x => '<rect x="' + x + '" y="246" width="40" height="3" fill="#f4ead8" opacity=".7"/>').join("") +
      /* the bus (slides in) */
      '<g class="anim-train">' +
        '<rect x="20" y="150" width="320" height="76" rx="8" fill="#f2f2ef" stroke="#8b8f96" stroke-width="2"/>' +
        '<rect x="20" y="198" width="320" height="10" fill="#0039a6"/><rect x="20" y="210" width="320" height="4" fill="#ff6319"/>' +
        wins +
        '<rect x="300" y="160" width="36" height="48" rx="3" fill="#cfe2f5"/>' +
        '<rect x="44" y="154" width="250" height="10" rx="2" fill="#111"/>' +
        '<text x="52" y="162.5" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#ffb000">B25  FULTON ST  LOCAL</text>' +
        '<circle cx="80" cy="228" r="13" fill="#1b1b1b"/><circle cx="80" cy="228" r="5" fill="#9aa0a6"/>' +
        '<circle cx="280" cy="228" r="13" fill="#1b1b1b"/><circle cx="280" cy="228" r="5" fill="#9aa0a6"/>' +
        '<circle cx="334" cy="214" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* shelter + black stop sign */
      '<rect x="296" y="96" width="100" height="6" fill="#4a4f57"/><rect x="298" y="102" width="3" height="46" fill="#4a4f57"/><rect x="390" y="102" width="3" height="46" fill="#4a4f57"/>' +
      '<rect x="302" y="104" width="86" height="40" fill="#bcd3e6" opacity=".35"/>' +
      '<rect x="252" y="40" width="144" height="50" rx="3" fill="#111"/><rect x="252" y="40" width="144" height="3" fill="#fff"/>' +
      '<text x="262" y="60" ' + font + ' font-size="12" fill="#fff">Fulton St &amp;</text>' +
      '<text x="262" y="78" ' + font + ' font-size="12" fill="#fff">New York Av</text>' +
      plate(354, 58, "B25") + plate(354, 78, "B26") +
      /* stop pole */
      '<rect x="238" y="88" width="4" height="62" fill="#9aa0a6"/><rect x="226" y="72" width="28" height="20" rx="3" fill="#0039a6"/>' + txt("BUS", 240, 86, 9, "#fff") +
      person(370, 112, "#1b1b1b") + person(318, 114, "#2a2a2a"),
      sky("ofs1", "#7fb3d5", "#f2d8b0"));
  }

  /* 2. Fulton Mall, Downtown Brooklyn: pedestrian mall, sneaker spot and record shop with a wall of cassettes, shoppers walking */
  function fultonmall() {
    let tapes = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) tapes += '<rect x="' + (216 + c * 22) + '" y="' + (94 + r * 14) + '" width="18" height="11" rx="1" fill="' + ["#ff8c1a", "#58c4dd", "#e8306b", "#f4ead8", "#9b5de5", "#8ac926"][(r + c) % 6] + '"/><rect x="' + (219 + c * 22) + '" y="' + (97 + r * 14) + '" width="12" height="4" fill="#222" opacity=".6"/>';
    let boxes = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) boxes += '<rect x="' + (36 + c * 30) + '" y="' + (96 + r * 13) + '" width="26" height="10" fill="' + (r % 2 ? "#d65a31" : "#2e86ab") + '"/><rect x="' + (36 + c * 30) + '" y="' + (96 + r * 13) + '" width="26" height="3" fill="#fff" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ofs2)"/>' +
      /* upper floors */
      '<rect x="0" y="20" width="196" height="150" fill="#c8b79a"/><rect x="204" y="10" width="196" height="160" fill="#9c7f6a"/>' +
      [30, 80, 130].map(x => '<rect x="' + x + '" y="34" width="34" height="30" fill="#40566b"/>').join("") +
      [230, 280, 330].map(x => '<rect x="' + x + '" y="26" width="34" height="34" fill="#40566b"/>').join("") +
      /* awnings + signs */
      '<path d="M0 72h196l-8 14H8z" fill="' + CHERRY + '"/>' + txt("SNEAKERS", 98, 83, 11, "#fff", 'letter-spacing="3"') +
      '<path d="M204 72h196l-8 14H212z" fill="' + ORANGE + '"/>' + txt("RECORDS &amp; TAPES", 302, 83, 11, "#1b1b1b", 'letter-spacing="2"') +
      '<rect x="20" y="88" width="160" height="62" fill="#1e2a36"/>' + boxes +
      '<rect x="210" y="88" width="140" height="62" fill="#1e1a2a"/>' + tapes +
      '<rect class="of-bl" x="356" y="96" width="36" height="16" rx="3" fill="#ffe14d"/>' + txt("NEW", 374, 108, 10, "#1b1b1b") +
      /* street lamp */
      '<rect x="198" y="40" width="4" height="130" fill="#2f3b45"/><circle cx="200" cy="40" r="7" fill="#fff4c2"/>' +
      /* mall paving */
      '<rect x="0" y="170" width="400" height="90" fill="#b5a99a"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 52) + '" y="170" width="2" height="90" fill="#9a8e80"/>').join("") +
      '<rect x="0" y="206" width="400" height="2" fill="#9a8e80"/>' +
      /* vendor table */
      '<rect x="150" y="188" width="100" height="10" fill="#6b4f3a"/><rect x="156" y="198" width="4" height="22" fill="#6b4f3a"/><rect x="240" y="198" width="4" height="22" fill="#6b4f3a"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (156 + i * 18) + '" y="182" width="14" height="7" fill="' + ["#ff8c1a", "#58c4dd", "#e8306b", "#f4ead8", "#8ac926"][i] + '"/>').join("") +
      /* shoppers */
      person(0, 176, "#22223b", "of-walk") + person(0, 180, "#4a4e69", "of-walk of-walk2") + person(0, 174, "#2b2d42", "of-walk of-walk3") +
      person(0, 192, "#3d405b", "of-walkb") + person(0, 190, "#1b263b", "of-walkb of-walkb2") +
      txt("FULTON MALL", 200, 248, 12, "#2b2118", 'letter-spacing="4"'),
      sky("ofs2", "#8ecae6", "#ffe8c2"));
  }

  /* 3. The Dime Savings Bank of Brooklyn: pale marble temple front, Ionic columns, the big ribbed dome, money in the air */
  function dimebank() {
    let cols = "";
    for (let i = 0; i < 6; i++) { const x = 108 + i * 37; cols += '<rect x="' + x + '" y="132" width="16" height="74" fill="#efebe2"/><rect x="' + (x + 3) + '" y="132" width="2" height="74" fill="#cfc8ba"/><rect x="' + (x + 10) + '" y="132" width="2" height="74" fill="#cfc8ba"/>' +
      '<circle cx="' + (x + 2) + '" cy="130" r="4" fill="#e2dccf"/><circle cx="' + (x + 14) + '" cy="130" r="4" fill="#e2dccf"/><rect x="' + (x - 3) + '" y="204" width="22" height="5" fill="#d8d1c3"/>'; }
    let ribs = "";
    for (let i = -4; i <= 4; i++) ribs += '<path d="M200 37 Q' + (200 + i * 15) + ' 44 ' + (200 + i * 15.5) + ' 86" stroke="#6f7c83" stroke-width="1.5" fill="none"/>';
    const bill = (x, cls) => '<g class="of-bill ' + cls + '"><rect x="' + x + '" y="0" width="20" height="10" rx="1" fill="#7fb069" stroke="#3f6b36"/><circle cx="' + (x + 10) + '" cy="5" r="3" fill="#3f6b36"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ofs3)"/>' +
      /* neighbors */
      '<rect x="0" y="70" width="70" height="150" fill="#8d6e63"/><rect x="330" y="56" width="70" height="164" fill="#6d7f8a"/>' +
      [84, 112, 140, 168].map(y => '<rect x="12" y="' + y + '" width="18" height="14" fill="#3e4c59"/><rect x="40" y="' + y + '" width="18" height="14" fill="#3e4c59"/>').join("") +
      [70, 100, 130, 160].map(y => '<rect x="344" y="' + y + '" width="16" height="16" fill="#3e4c59"/><rect x="370" y="' + y + '" width="16" height="16" fill="#3e4c59"/>').join("") +
      /* drum + dome */
      '<rect x="140" y="84" width="120" height="22" fill="#e6e1d6"/>' +
      [148, 168, 188, 208, 228, 248].map(x => '<rect x="' + x + '" y="88" width="8" height="14" fill="#b7c3c8"/>').join("") +
      '<path d="M134 86 A66 50 0 0 1 266 86z" fill="#9fadb3"/>' + ribs +
      '<path class="of-glint" d="M152 74 Q164 48 190 40" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="192" y="22" width="16" height="16" fill="#c9d2d4"/><path d="M190 22h20l-10-8z" fill="#9fadb3"/><circle cx="200" cy="12" r="3" fill="#d8c27a"/>' +
      /* body, pediment, frieze */
      '<rect x="90" y="104" width="220" height="10" fill="#f2eee6"/>' +
      '<rect x="100" y="130" width="200" height="76" fill="#d6cfc0"/>' + '<rect x="182" y="150" width="36" height="56" fill="#3a3226"/><rect x="186" y="154" width="28" height="48" fill="#5a4a36"/>' +
      '<rect x="90" y="114" width="220" height="16" fill="#e9e4d9"/>' + txt("DIME SAVINGS BANK", 200, 126, 10, "#7a6f5d", 'letter-spacing="3"') +
      cols +
      '<rect x="80" y="206" width="240" height="8" fill="#e2dccf"/><rect x="70" y="214" width="260" height="8" fill="#d6cfc0"/>' +
      
      /* the dime above the door */
      '<circle cx="200" cy="144" r="6" fill="#c0c6c9" stroke="#8e9aa0"/>' +
      /* plaza */
      '<rect x="0" y="222" width="400" height="38" fill="#9e968a"/>' +
      bill(60, "") + bill(140, "of-bill2") + bill(300, "of-bill3") +
      /* pigeons */
      [[40, 50, ""], [10, 70, "of-bird2"], [-20, 40, "of-bird3"]].map(b => '<g class="of-bird ' + b[2] + '"><path class="of-wing" d="M' + b[0] + ' ' + b[1] + 'q6-6 12 0q6-6 12 0" stroke="#3b3b3b" stroke-width="2" fill="none"/></g>').join(""),
      sky("ofs3", "#a8d0e6", "#f7e9d0"));
  }

  /* 4. LIU Brooklyn, the old Paramount theater block on Flatbush Av Ext: buff terracotta front, the marquee lit up, searchlights */
  function liu() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 8) { const k = (x / 8) % 3; bulbs += '<circle class="of-bl' + (k ? " of-bl" + (k + 1) : "") + '" cx="' + x + '" cy="146" r="2.2" fill="#ffe14d"/><circle class="of-bl' + (k ? " of-bl" + (k + 1) : "") + '" cx="' + x + '" cy="184" r="2.2" fill="#ffe14d"/>'; }
    let wins = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) wins += '<rect x="' + (112 + c * 31) + '" y="' + (50 + r * 26) + '" width="18" height="18" fill="' + ((r + c) % 3 ? "#2d3a4a" : "#ffd27a") + '"/><path d="M' + (112 + c * 31) + ' ' + (50 + r * 26) + 'q9-7 18 0" fill="#d9b98c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ofs4)"/>' + stars(18) +
      /* searchlights */
      '<path class="of-beam" d="M70 230 L52 40 L88 40z" fill="#fff6c2" opacity=".18"/>' +
      '<path class="of-beam of-beam2" d="M330 230 L312 40 L348 40z" fill="#fff6c2" opacity=".18"/>' +
      /* building */
      '<rect x="90" y="30" width="220" height="200" fill="#d9b98c"/>' +
      '<rect x="90" y="26" width="220" height="8" fill="#b8915f"/>' +
      [100, 296].map(x => '<rect x="' + x + '" y="34" width="6" height="104" fill="#c49c6a"/>').join("") +
      wins +
      '<rect x="120" y="8" width="160" height="22" fill="#2a1d14"/>' + txt("LIU BROOKLYN", 200, 24, 14, "#ffcf6e", 'letter-spacing="3"') +
      /* marquee */
      '<path d="M84 140h232l-10 50H94z" fill="#7a1e2c"/>' + bulbs +
      '<rect x="104" y="152" width="192" height="26" fill="#fff8e6"/>' +
      txt("TONIGHT  ORIGINAL FLAVOR", 200, 170, 12, "#1b1b1b", 'letter-spacing="1"') +
      /* doors + sidewalk */
      '<rect x="120" y="196" width="160" height="34" fill="#2b1f18"/>' + [140, 180, 220, 260].map(x => '<rect x="' + (x - 14) + '" y="200" width="28" height="30" fill="#c9a24a" opacity=".55"/>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4a4e"/>' +
      person(40, 200, "#1b1b1b", "") + person(360, 202, "#2a2a2a", "") + person(70, 206, "#222", ""),
      sky("ofs4", "#0b1030", "#3a2a55"));
  }

  /* 5. Monroe St & Nostrand Av, Bed-Stuy: green street signs, a brick wall tagged ORIGINAL FLAVOR, brownstones with stoops behind, a box with 12 inch speakers pumping */
  function corner() {
    let houses = "";
    for (let i = 0; i < 5; i++) { const x = 6 + i * 78, c = ["#7b4b3a", "#8a5a44", "#6e4232", "#83533f", "#754636"][i];
      houses += '<rect x="' + x + '" y="34" width="74" height="110" fill="' + c + '"/><rect x="' + x + '" y="30" width="74" height="6" fill="#4a2a1e"/>' +
        '<rect x="' + (x + 8) + '" y="46" width="14" height="22" fill="#2b3442"/><rect x="' + (x + 30) + '" y="46" width="14" height="22" fill="#2b3442"/><rect x="' + (x + 52) + '" y="46" width="14" height="22" fill="#2b3442"/>' +
        '<rect x="' + (x + 8) + '" y="80" width="14" height="22" fill="#2b3442"/><rect x="' + (x + 30) + '" y="80" width="14" height="22" fill="' + (i % 2 ? "#ffd27a" : "#2b3442") + '"/>' +
        '<rect x="' + (x + 52) + '" y="76" width="16" height="30" fill="#3a2418"/><path d="M' + (x + 50) + ' 108h20l14 36h-48z" fill="#6a3d2c"/>'; }
    let brick = "";
    for (let y = 150; y < 236; y += 8) for (let x = (y / 8) % 2 ? 100 : 92; x + 14 <= 330; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#8f3f2c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ofs5)"/>' + houses +
      '<rect x="0" y="144" width="400" height="10" fill="#b8b2a6"/>' +
      /* wall */
      '<rect x="92" y="146" width="238" height="90" fill="#a14a33"/>' + brick +
      tag("SUAVE &amp; SKI", 104, 166, 13, TEAL, -3) + tag("ORIGINAL", 112, 198, 28, ORANGE, -5) + tag("FLAVOR", 156, 230, 30, CHERRY, -4) +
      /* street sign pole */
      '<rect x="44" y="70" width="5" height="170" fill="#4b5158"/>' +
      '<rect x="0" y="70" width="92" height="20" rx="2" fill="#00703c" stroke="#fff" stroke-width="1.5"/>' + txt("Monroe St", 46, 85, 13, "#fff") +
      '<rect x="18" y="94" width="104" height="20" rx="2" fill="#00703c" stroke="#fff" stroke-width="1.5"/>' + txt("Nostrand Av", 70, 109, 13, "#fff") +
      /* boombox on the sidewalk */
      '<rect x="336" y="206" width="56" height="30" rx="4" fill="#2b2b2e" stroke="#9aa0a6" stroke-width="1.5"/><path d="M346 206v-8h36v8" stroke="#9aa0a6" stroke-width="2" fill="none"/>' +
      '<circle class="of-pump" cx="350" cy="222" r="9" fill="#111" stroke="#666"/><circle class="of-pump of-pump2" cx="378" cy="222" r="9" fill="#111" stroke="#666"/>' +
      '<rect x="358" y="212" width="12" height="6" fill="#58c4dd"/>' +
      '<text class="of-note" x="360" y="198" font-size="14" fill="#ffe14d">&#9834;</text><text class="of-note of-note2" x="372" y="196" font-size="12" fill="#ffe14d">&#9835;</text><text class="of-note of-note3" x="350" y="200" font-size="12" fill="#ffe14d">&#9834;</text>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3d3d40"/>',
      sky("ofs5", "#ffb46b", "#ffe0b5"));
  }

  window.SCENES = { busstop, fultonmall, dimebank, liu, corner };
})();
