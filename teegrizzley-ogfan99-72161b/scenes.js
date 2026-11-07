/* teegrizzley scenes (Regions tab: Detroit; Joy Road / Warrendale, west side). CSS classes prefixed tg- (the page's own anim-train is kept).
   1 DDOT Route 27 Joy pulling up to the Joy & Evergreen stop on the west side, bungalows and a corner store at dusk.
   2 A Joy Rd coney island diner at night (his album Tee's Coney Island; he gave away free meals at the Joy Rd coney he grew up at): counter, stools, coney dogs, steam, neon sign.
   3 Rouge Park on the west side: the River Rouge, big trees, the footpath, ducks drifting.
   4 The studio plaque wall (First Day Out 6x platinum, From the D to the A 5x, Satish and IDGAF gold; "Came with a record deal" from Activated): plaques, monitors, mic.
   5 Joy Rd and Evergreen Rd: green signs, TEE GRIZZLEY tagged, the Southfield Freeway sign behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tgflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.tg-flk{animation:tgflick 2.4s infinite}.tg-flk2{animation-delay:.8s}' +
    '@keyframes tgsteam{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(4px,-26px);opacity:0}}.tg-steam{animation:tgsteam 1.8s ease-out infinite}.tg-steam2{animation-delay:-.6s}.tg-steam3{animation-delay:-1.2s}' +
    '@keyframes tgduck{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.tg-duck{animation:tgduck 5s ease-in-out infinite}.tg-duck2{animation-delay:-2.5s}' +
    '@keyframes tgripple{0%{transform:scaleX(.6);opacity:.8}100%{transform:scaleX(1.6);opacity:0}}.tg-rip{transform-box:fill-box;transform-origin:50% 50%;animation:tgripple 2s ease-out infinite}.tg-rip2{animation-delay:-1s}' +
    '@keyframes tgsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tg-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tgsway 2.2s ease-in-out infinite}.tg-sway2{animation-delay:-1.1s}' +
    '@keyframes tgbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.tg-bob{animation:tgbob .9s ease-in-out infinite}.tg-bob2{animation-delay:-.45s}' +
    '@keyframes tgcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.tg-car{animation:tgcar 6s linear infinite}.tg-car2{animation-delay:-3s}' +
    '@keyframes tgsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.tg-sp{animation:tgsp 1.3s ease-out infinite}.tg-sp2{animation-delay:-.6s}' +
    '@keyframes tgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.tg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tgspin 3s linear infinite}@keyframes tgtw{0%,100%{opacity:.25}50%{opacity:1}}.tg-tw{animation:tgtw 1.6s ease-in-out infinite}.tg-tw2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", AMBER = "#f5a623", RED = "#e8402a", BLUE = "#3fa9f5";
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a36") + '" stroke="#e8e0cc" stroke-width="1.5"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#e8e0cc" stroke-width="1"/>';

  /* 1. DDOT 27 Joy at Joy & Evergreen */
  function tgstation() {
    const bung = (x, c, roof) => '<rect x="' + x + '" y="88" width="80" height="58" fill="' + c + '"/><path d="M' + (x - 6) + ' 88h92l-46 -30z" fill="' + roof + '"/>' +
      win(x + 10, 102, 20, 18, true) + win(x + 50, 102, 20, 18, false) + '<rect x="' + (x + 33) + '" y="112" width="14" height="34" fill="#4a3a2a"/>';
    const store = '<rect x="272" y="76" width="128" height="70" fill="#c9b8a0"/><rect x="272" y="70" width="128" height="8" fill="#8a3e2c"/>' +
      '<rect x="334" y="84" width="60" height="18" fill="#1a1a1a"/><text x="364" y="97" text-anchor="middle" ' + font + ' font-size="10" fill="' + AMBER + '" class="tg-flk">MARKET</text>' +
      '<rect x="284" y="108" width="40" height="34" fill="#ffd98a" opacity=".8"/><rect x="334" y="108" width="20" height="38" fill="#3a2a20"/><rect x="362" y="108" width="28" height="34" fill="#ffd98a" opacity=".8"/>';
    const bus = '<g class="anim-train"><rect x="34" y="104" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="34" y="154" width="250" height="14" fill="' + DDOT + '"/><rect x="34" y="150" width="250" height="4" fill="#ffcc33"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="114" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="38" y="112" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M53 112v56" stroke="#8a9096"/>' +
      '<rect x="38" y="106" width="56" height="8" rx="2" fill="#111"/><text x="66" y="112.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffcc33">27 JOY</text>' +
      '<circle cx="80" cy="180" r="13" fill="#1a1a1a"/><circle cx="80" cy="180" r="5" fill="#888"/><circle cx="240" cy="180" r="13" fill="#1a1a1a"/><circle cx="240" cy="180" r="5" fill="#888"/>' +
      '<circle cx="36" cy="162" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tgs1)"/>' +
      '<circle cx="60" cy="30" r="1.4" fill="#fff" class="tg-tw"/><circle cx="150" cy="18" r="1.2" fill="#fff" class="tg-tw tg-tw2"/><circle cx="250" cy="26" r="1.3" fill="#fff" class="tg-tw"/>' +
      '<path d="M0 90q30 -30 60 0q20 -26 50 -4v60h-110z" fill="#2f4a2a"/>' +
      bung(10, "#9a7a5a", "#3a2e2a") + bung(104, "#b8a080", "#4a3a2e") + bung(190, "#8c6e5a", "#3a2e2a") + store +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("tg-car", 0, 238, AMBER) + car("tg-car tg-car2", 0, 238, "#d6d6d6") +
      '<rect x="306" y="100" width="5" height="92" fill="#555"/><rect x="290" y="88" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="309" y="103" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="296" y="114" width="26" height="14" rx="3" fill="#ffcc33"/><text x="309" y="125" text-anchor="middle" ' + font + ' font-size="11" fill="#111">27</text>' +
      '<rect x="222" y="200" width="168" height="26" rx="3" fill="#111"/><text x="232" y="218" ' + font + ' font-size="14" fill="#fff">Joy &amp; Evergreen</text>' +
      '<rect x="358" y="205" width="26" height="16" rx="3" fill="' + DDOT + '"/><text x="371" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">27</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 27 · JOY RD · WEST SIDE</text>',
      sky("tgs1", "#1c1838", "#e0884a"));
  }

  /* 2. A Detroit coney island diner at night */
  function tgconey() {
    const stool = x => '<rect x="' + (x - 2) + '" y="196" width="4" height="34" fill="#9aa0a6"/><ellipse cx="' + x + '" cy="194" rx="13" ry="5" fill="' + RED + '"/><ellipse cx="' + x + '" cy="230" rx="10" ry="3" fill="#6b6f73"/>';
    const coney = (x, y) => '<ellipse cx="' + x + '" cy="' + (y + 8) + '" rx="26" ry="5" fill="#fff"/><rect x="' + (x - 20) + '" y="' + (y - 2) + '" width="40" height="10" rx="5" fill="#e8c27a"/><rect x="' + (x - 22) + '" y="' + (y - 4) + '" width="44" height="6" rx="3" fill="#b0482a"/>' +
      '<path d="M' + (x - 18) + ' ' + (y - 4) + 'q6 -5 12 0q6 -5 12 0q6 -5 12 0" stroke="#7a3a1a" stroke-width="3" fill="none"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x - 16 + i * 6) + '" y="' + (y - 8) + '" width="3" height="3" fill="#f4f4f4"/>').join("") +
      '<path d="M' + (x - 14) + ' ' + (y - 6) + 'q14 4 28 0" stroke="#f5d33a" stroke-width="2" fill="none"/>';
    const steam = (x, cls) => '<path class="tg-steam ' + cls + '" d="M' + x + ' 150q-5 -8 0 -16q5 -8 0 -16" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tgs2)"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#e8e2d4"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="20" height="150" fill="#ded6c4"/>').join("") +
      '<rect x="40" y="16" width="320" height="40" rx="6" fill="#1a1a1a" stroke="' + RED + '" stroke-width="3"/>' +
      '<text x="200" y="45" text-anchor="middle" ' + font + ' font-size="24" fill="' + RED + '" class="tg-flk">CONEY ISLAND</text>' +
      '<rect x="60" y="66" width="120" height="56" fill="#fff" stroke="#888"/><text x="120" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#111">MENU</text>' +
      '<text x="68" y="94" ' + font + ' font-size="8" fill="#333">CONEY DOG</text><text x="68" y="106" ' + font + ' font-size="8" fill="#333">LOOSE BURGER</text><text x="68" y="118" ' + font + ' font-size="8" fill="#333">CHILI FRIES</text>' +
      '<text x="172" y="94" text-anchor="end" ' + font + ' font-size="8" fill="' + RED + '">$</text><text x="172" y="106" text-anchor="end" ' + font + ' font-size="8" fill="' + RED + '">$</text><text x="172" y="118" text-anchor="end" ' + font + ' font-size="8" fill="' + RED + '">$</text>' +
      '<rect x="220" y="66" width="140" height="70" fill="#1d2a44"/><path d="M290 66v70M220 101h140" stroke="#c9c2b0" stroke-width="3"/>' +
      '<circle cx="250" cy="84" r="1.3" fill="#fff" class="tg-tw"/><circle cx="330" cy="90" r="1.2" fill="#fff" class="tg-tw tg-tw2"/><rect x="236" y="112" width="40" height="18" fill="' + AMBER + '" opacity=".6"/>' +
      '<rect x="0" y="148" width="400" height="10" fill="#b8bcc2"/><rect x="0" y="158" width="400" height="30" fill="' + RED + '"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="158" width="10" height="30" fill="#c8301e"/>').join("") +
      coney(110, 142) + coney(220, 142) + '<rect x="290" y="128" width="20" height="20" rx="3" fill="#f5d33a"/><rect x="316" y="124" width="14" height="24" rx="3" fill="#d23a2a"/>' +
      steam(100, "") + steam(118, "tg-steam2") + steam(212, "tg-steam3") + steam(230, "") +
      '<rect x="0" y="188" width="400" height="72" fill="#2a2a2a"/>' + Array.from({ length: 10 }, (_, i) => Array.from({ length: 2 }, (_, j) => '<rect x="' + (i * 40 + (j % 2) * 20) + '" y="' + (226 + j * 17) + '" width="20" height="17" fill="#e8e2d4" opacity=".85"/>').join("")).join("") +
      stool(50) + stool(130) + stool(210) + stool(290) + stool(370) +
      '<rect x="92" y="234" width="216" height="20" rx="3" fill="#111"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">TEE\'S CONEY ISLAND · OPEN 24 HRS</text>',
      sky("tgs2", "#0e1030", "#2a2050"));
  }

  /* 3. Rouge Park on the west side */
  function tgrouge() {
    const tree = (x, y, s, c, cls) => '<g class="tg-sway ' + (cls || "") + '"><rect x="' + (x - 3 * s) + '" y="' + y + '" width="' + (6 * s) + '" height="' + (40 * s) + '" fill="#5a3e2a"/>' +
      '<circle cx="' + x + '" cy="' + y + '" r="' + (24 * s) + '" fill="' + c + '"/><circle cx="' + (x - 16 * s) + '" cy="' + (y + 8 * s) + '" r="' + (16 * s) + '" fill="' + c + '"/><circle cx="' + (x + 16 * s) + '" cy="' + (y + 8 * s) + '" r="' + (16 * s) + '" fill="' + c + '"/></g>';
    const duck = (x, y, cls) => '<g class="tg-duck ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="5" fill="#6b4a2a"/><circle cx="' + (x + 7) + '" cy="' + (y - 5) + '" r="3.5" fill="#2e6b3a"/><path d="M' + (x + 10) + ' ' + (y - 5) + 'h4" stroke="' + AMBER + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tgs3)"/>' +
      '<circle cx="320" cy="44" r="20" fill="#ffe7a8"/>' +
      '<path d="M0 120q60 -24 120 -6q60 -26 140 -4q70 -20 140 4v30h-400z" fill="#3e6a3a"/>' +
      tree(40, 92, 1, "#2f6b34") + tree(110, 100, .8, "#3d7f3f", "tg-sway2") + tree(300, 96, .9, "#2f6b34", "tg-sway2") + tree(370, 90, 1.1, "#4a8a44") +
      '<rect x="0" y="138" width="400" height="122" fill="#5f9a4a"/>' +
      '<path d="M0 176q100 -22 200 0t200 0v30q-100 22 -200 0t-200 0z" fill="#3a6f8a"/>' +
      '<ellipse cx="120" cy="190" rx="30" ry="2" fill="#bfe3ff" class="tg-rip"/><ellipse cx="270" cy="186" rx="24" ry="2" fill="#bfe3ff" class="tg-rip tg-rip2"/>' +
      duck(150, 186, "") + duck(230, 192, "tg-duck2") +
      /* footbridge */
      '<path d="M40 172q50 -26 100 0" stroke="#7a5a3a" stroke-width="6" fill="none"/><path d="M40 166q50 -26 100 0" stroke="#9a7a5a" stroke-width="3" fill="none"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (50 + i * 16) + ' ' + (162 - (i > 2 ? 5 - i : i) * 3) + 'v10" stroke="#7a5a3a" stroke-width="2"/>').join("") +
      '<path d="M200 260q30 -30 80 -46t120 -10" stroke="#d8c8a0" stroke-width="14" fill="none"/>' +
      '<rect x="296" y="214" width="4" height="22" fill="#5a3e2a"/><rect x="278" y="206" width="40" height="12" rx="2" fill="#5a3e2a"/>' +
      '<rect x="120" y="226" width="160" height="22" rx="3" fill="#111"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">ROUGE PARK · WEST SIDE</text>',
      sky("tgs3", "#7ec6ef", "#e8f4fb"));
  }

  /* 4. The studio plaque wall: First Day Out went 6x platinum */
  function tgplaque() {
    const plaque = (x, y, label, sub, cls) => '<g><rect x="' + x + '" y="' + y + '" width="64" height="82" rx="3" fill="#1a1a1a" stroke="#c9c2b0" stroke-width="3"/>' +
      '<circle cx="' + (x + 32) + '" cy="' + (y + 32) + '" r="22" fill="#d8dde3" class="' + (cls || "") + '"/><circle cx="' + (x + 32) + '" cy="' + (y + 32) + '" r="14" fill="none" stroke="#9aa3ad" stroke-width="1"/><circle cx="' + (x + 32) + '" cy="' + (y + 32) + '" r="5" fill="#1a1a1a"/>' +
      '<path d="M' + (x + 14) + ' ' + (y + 20) + 'l10 -6" stroke="#fff" stroke-width="2" opacity=".8" class="tg-flk"/>' +
      '<text x="' + (x + 32) + '" y="' + (y + 66) + '" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">' + label + '</text><text x="' + (x + 32) + '" y="' + (y + 75) + '" text-anchor="middle" ' + font + ' font-size="5.5" fill="' + AMBER + '">' + sub + '</text></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2230"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="0" width="14" height="180" fill="#30283a"/>').join("") +
      plaque(30, 24, "FIRST DAY OUT", "6X PLATINUM", "tg-spin") + plaque(114, 24, "D TO THE A", "5X PLATINUM") + plaque(198, 24, "SATISH", "GOLD") + plaque(282, 24, "IDGAF", "GOLD") +
      '<rect x="0" y="180" width="400" height="80" fill="#3a2e24"/><rect x="0" y="176" width="400" height="6" fill="#5a4636"/>' +
      /* desk + monitors + mic */
      '<rect x="40" y="150" width="220" height="30" fill="#1a1a1a"/><rect x="60" y="120" width="50" height="34" rx="2" fill="#111" stroke="#555"/><rect x="190" y="120" width="50" height="34" rx="2" fill="#111" stroke="#555"/>' +
      '<g transform="translate(150 137)">' + [8, 14, 20, 12, 16, 9, 6].map((h, i) => '<rect x="' + (i * 5 - 17) + '" y="' + (-h / 2) + '" width="3" height="' + h + '" fill="' + AMBER + '" class="tg-bob' + (i % 2 ? " tg-bob2" : "") + '"/>').join("") + '</g>' +
      '<g transform="translate(42 30)"><rect x="318" y="120" width="4" height="66" fill="#888"/><rect x="306" y="184" width="28" height="4" fill="#888"/><rect x="310" y="96" width="20" height="30" rx="10" fill="#c9c2b0"/><path d="M312 104h16M312 110h16M312 116h16" stroke="#777"/>' +
      '<circle cx="320" cy="110" r="18" fill="none" stroke="' + AMBER + '" stroke-width="1.5" opacity=".6" class="tg-rip"/></g>' +
      '<rect x="100" y="228" width="200" height="22" rx="3" fill="#111"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">CAME WITH A RECORD DEAL</text>',
      '');
  }

  /* 5. Joy Rd and Evergreen Rd, the Southfield Freeway sign behind */
  function tgcorner() {
    const fwy = '<rect x="150" y="10" width="230" height="10" fill="#8a8e94"/><rect x="160" y="20" width="10" height="84" fill="#8a8e94"/><rect x="360" y="20" width="10" height="84" fill="#8a8e94"/>' +
      '<rect x="190" y="20" width="150" height="54" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M206 34h22v14q0 8 -11 12q-11 -4 -11 -12z" fill="#fff"/><text x="217" y="48" text-anchor="middle" ' + font + ' font-size="9" fill="#111">39</text>' +
      '<text x="290" y="40" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Southfield</text><text x="290" y="55" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Freeway</text>' +
      '<text x="290" y="68" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">NORTH</text>' +
      '<rect x="0" y="100" width="400" height="6" fill="#6b6f73"/>' + car("tg-car", 0, 86, "#d6d6d6") + car("tg-car tg-car2", 0, 86, BLUE);
    return svg(
      '<rect width="400" height="260" fill="url(#tgs5)"/>' + fwy +
      '<rect x="0" y="130" width="400" height="94" fill="#6a4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#553a2c" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#553a2c" stroke-width="1"/>').join("")).join("") +
      tag("TEE GRIZZLEY", 18, 184, 30, AMBER, -6) + tag("GRIZZLEY GANG", 22, 214, 16, RED, -3) + tag("ASBH", 176, 214, 18, BLUE, -4) +
      '<g class="tg-sp"><circle cx="236" cy="164" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="tg-sp tg-sp2"><circle cx="242" cy="156" r="2" fill="' + AMBER + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(296, 112, 102, "Joy Rd") + sign(268, 138, 130, "Evergreen Rd") +
      '<rect x="392" y="200" width="4" height="24" fill="#222"/>',
      sky("tgs5", "#1e1838", "#e0884a"));
  }

  window.SCENES = { tgstation: tgstation, tgconey: tgconey, tgrouge: tgrouge, tgplaque: tgplaque, tgcorner: tgcorner };
})();
