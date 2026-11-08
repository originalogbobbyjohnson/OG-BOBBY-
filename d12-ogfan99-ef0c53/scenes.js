/* d12 scenes (Regions tab: Detroit; the east side, 7 Mile and Runyon Ave, "Runyon Ave soldiers"). CSS classes prefixed dz- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 5 Van Dyke-Lafayette pulling up to the Van Dyke & 7 Mile stop on the east side, a few blocks west of Runyon St, flats and a party store at dusk.
   2 Devil's Night on the east side (their 2001 debut album, named for the night before Halloween in Detroit): two-flats with porch lights on all night, jack-o'-lanterns flickering on the steps, bats, a big orange moon.
   3 The Masonic Temple on Temple St (the Gothic limestone tower), a show night: the tour bus out front and the van behind it ("we in the van and he in a tour bus" from My Band), marquee bulbs chasing.
   4 The Detroit Institute of Arts on Woodward in Midtown: the white marble Beaux-Arts front, three arches glowing, the bronze Thinker on the steps (a statue, no face detail), banners swaying, cars on Woodward.
   5 E 7 Mile Rd and Runyon St: green signs, D12 tagged with RUNYON AVE and DIRTY DOZEN on the brick, the downtown skyline far down Van Dyke behind.
   No logos, no faces, no numeral 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dzflick{0%,100%{opacity:1}40%{opacity:.75}46%{opacity:.35}52%{opacity:.95}}.dz-flk{animation:dzflick 1.6s infinite}.dz-flk2{animation-delay:.5s}.dz-flk3{animation-delay:1.05s}' +
    '@keyframes dzbat{0%{transform:translate(0,0)}25%{transform:translate(40px,-14px)}50%{transform:translate(90px,4px)}75%{transform:translate(140px,-10px)}100%{transform:translate(200px,0)}}.dz-bat{animation:dzbat 7s linear infinite}.dz-bat2{animation-delay:-3.5s}' +
    '@keyframes dzwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.dz-wing{transform-box:fill-box;transform-origin:50% 100%;animation:dzwing .35s ease-in-out infinite}' +
    '@keyframes dzleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(120px,60px) rotate(320deg)}}.dz-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:dzleaf 5s linear infinite}.dz-leaf2{animation-delay:-1.7s}.dz-leaf3{animation-delay:-3.4s}' +
    '@keyframes dzchase{0%,100%{opacity:.25}50%{opacity:1}}.dz-ch{animation:dzchase .9s steps(1) infinite}.dz-ch2{animation-delay:-.45s}' +
    '@keyframes dzglow{0%,100%{opacity:.55}50%{opacity:1}}.dz-gl{animation:dzglow 3s ease-in-out infinite}.dz-gl2{animation-delay:-1.5s}' +
    '@keyframes dzcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.dz-car{animation:dzcar 6.5s linear infinite}.dz-car2{animation-delay:-3.2s}' +
    '@keyframes dzban{0%,100%{transform:skewY(-4deg)}50%{transform:skewY(4deg)}}.dz-ban{transform-box:fill-box;transform-origin:50% 0;animation:dzban 2.6s ease-in-out infinite}.dz-ban2{animation-delay:-1.3s}' +
    '@keyframes dzbird{0%{transform:translate(0,0)}100%{transform:translate(260px,-30px)}}.dz-bird{animation:dzbird 9s linear infinite}.dz-bird2{animation-delay:-4.5s}' +
    '@keyframes dzsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.dz-sp{animation:dzsp 1.3s ease-out infinite}.dz-sp2{animation-delay:-.6s}' +
    '@keyframes dztw{0%,100%{opacity:.2}50%{opacity:1}}.dz-tw{animation:dztw 1.8s ease-in-out infinite}.dz-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", PURPLE = "#8e44d8", LIME = "#9be15d", ORANGE = "#ff7a1a", GOLD = "#f2c14e";
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a36") + '" stroke="#e8e0cc" stroke-width="1.5"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#e8e0cc" stroke-width="1"/>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="dz-tw' + (i % 2 ? " dz-tw2" : "") + '" cx="' + ((i * 53 + 17) % 400) + '" cy="' + ((i * 29) % 70 + 8) + '" r="1.2" fill="#fff"/>').join("");

  /* 1. DDOT 5 Van Dyke-Lafayette at Van Dyke & 7 Mile */
  function dzstation() {
    const flat = (x, c, roof) => '<rect x="' + x + '" y="70" width="78" height="76" fill="' + c + '"/><path d="M' + (x - 5) + ' 70h88l-44 -24z" fill="' + roof + '"/>' +
      win(x + 10, 80, 20, 18, true) + win(x + 48, 80, 20, 18, false) + win(x + 10, 112, 20, 18, false) + win(x + 48, 112, 20, 18, true) +
      '<rect x="' + (x - 4) + '" y="104" width="86" height="4" fill="#e8e0cc"/>';
    const store = '<rect x="262" y="78" width="138" height="68" fill="#b9a68e"/><rect x="262" y="72" width="138" height="8" fill="#5a2e6a"/>' +
      '<rect x="334" y="86" width="62" height="16" fill="#1a1a1a"/><text x="365" y="97.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + LIME + '" class="dz-flk">PARTY STORE</text>' +
      '<rect x="272" y="108" width="40" height="34" fill="#ffd98a" opacity=".8"/><rect x="320" y="108" width="20" height="38" fill="#3a2a20"/><rect x="348" y="108" width="42" height="34" fill="#ffd98a" opacity=".8"/>';
    const bus = '<g class="anim-train"><rect x="34" y="104" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="34" y="154" width="250" height="14" fill="' + DDOT + '"/><rect x="34" y="150" width="250" height="4" fill="#ffcc33"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="114" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="38" y="112" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M53 112v56" stroke="#8a9096"/>' +
      '<rect x="38" y="106" width="96" height="8" rx="2" fill="#111"/><text x="86" y="112.5" text-anchor="middle" ' + font + ' font-size="6.2" fill="#ffcc33">5 VAN DYKE · NORTH</text>' +
      '<text x="250" y="165" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">DDOT</text>' +
      '<circle cx="80" cy="180" r="13" fill="#1a1a1a"/><circle cx="80" cy="180" r="5" fill="#888"/><circle cx="240" cy="180" r="13" fill="#1a1a1a"/><circle cx="240" cy="180" r="5" fill="#888"/>' +
      '<circle cx="36" cy="162" r="3.5" fill="#fff6c2" class="dz-flk"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs1)"/>' + stars(8) +
      '<circle cx="330" cy="34" r="12" fill="#ffe7c2" opacity=".85"/>' +
      flat(8, "#8a6a52", "#33262a") + flat(98, "#a48a6c", "#3d2e2a") + flat(184, "#7e6250", "#33262a") + store +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("dz-car", 0, 238, PURPLE) + car("dz-car dz-car2", 0, 238, "#d6d6d6") +
      '<rect x="306" y="100" width="5" height="92" fill="#555"/><rect x="290" y="86" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="309" y="101" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="292" y="112" width="15" height="14" rx="3" fill="#ffcc33"/><text x="299.5" y="123" text-anchor="middle" ' + font + ' font-size="10" fill="#111">5</text>' +
      '<rect x="311" y="112" width="15" height="14" rx="3" fill="#ffcc33"/><text x="318.5" y="123" text-anchor="middle" ' + font + ' font-size="10" fill="#111">7</text>' +
      '<rect x="200" y="200" width="192" height="26" rx="3" fill="#111"/><text x="210" y="218" ' + font + ' font-size="14" fill="#fff">Van Dyke &amp; 7 Mile</text>' +
      '<rect x="346" y="205" width="18" height="16" rx="3" fill="' + DDOT + '"/><text x="355" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">5</text>' +
      '<rect x="368" y="205" width="18" height="16" rx="3" fill="' + DDOT + '"/><text x="377" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">7</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 5 VAN DYKE-LAFAYETTE · EAST SIDE</text>',
      sky("dzs1", "#1a1636", "#d9784a"));
  }

  /* 2. Devil's Night on the east side: porch lights on, jack-o'-lanterns on the steps */
  function dzdevil() {
    const pumpkin = (x, y, s, cls) => '<g><ellipse cx="' + x + '" cy="' + y + '" rx="' + (11 * s) + '" ry="' + (9 * s) + '" fill="' + ORANGE + '" stroke="#8a3a08" stroke-width="1.5"/>' +
      '<path d="M' + x + ' ' + (y - 9 * s) + 'v-' + (4 * s) + '" stroke="#3a5a1a" stroke-width="' + (3 * s) + '"/>' +
      '<g class="' + cls + '"><path d="M' + (x - 6 * s) + ' ' + (y - 2 * s) + 'l3 -4l3 4z M' + (x + 0 * s) + ' ' + (y - 2 * s) + 'l3 -4l3 4z" fill="#ffe36a"/>' +
      '<path d="M' + (x - 6 * s) + ' ' + (y + 3 * s) + 'q' + (6 * s) + ' ' + (5 * s) + ' ' + (12 * s) + ' 0z" fill="#ffe36a"/></g></g>';
    const bat = (x, y, cls) => '<g class="dz-bat ' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(1.6)"><ellipse cx="0" cy="0" rx="3" ry="2.4" fill="#1a1024" stroke="#b07cff" stroke-width=".6"/>' +
      '<path class="dz-wing" d="M-2 0q-6 -7 -12 -2q4 0 5 4q3 -3 7 -2z M2 0q6 -7 12 -2q-4 0 -5 4q-3 -3 -7 -2z" fill="#1a1024" stroke="#b07cff" stroke-width=".6"/></g></g>';
    const twoflat = (x, c, roof) => '<rect x="' + x + '" y="92" width="110" height="104" fill="' + c + '"/><path d="M' + (x - 6) + ' 92h122l-61 -34z" fill="' + roof + '"/>' +
      win(x + 14, 102, 24, 22, true) + win(x + 72, 102, 24, 22, false) + win(x + 14, 146, 24, 22, false) + win(x + 72, 146, 24, 22, true) +
      '<rect x="' + (x - 4) + '" y="132" width="118" height="5" fill="#e8e0cc"/><rect x="' + (x + 44) + '" y="152" width="22" height="44" fill="#3a2a20"/>' +
      '<circle class="dz-gl" cx="' + (x + 55) + '" cy="146" r="4" fill="#fff2b0"/><circle cx="' + (x + 55) + '" cy="146" r="12" fill="#fff2b0" opacity=".18" class="dz-gl"/>' +
      '<rect x="' + (x + 36) + '" y="196" width="38" height="5" fill="#9a948a"/><rect x="' + (x + 32) + '" y="201" width="46" height="5" fill="#8a847a"/>';
    const leaf = (x, y, c, cls) => '<path class="dz-leaf ' + cls + '" d="M' + x + ' ' + y + 'q5 -6 10 0q-5 6 -10 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs2)"/>' + stars(12) +
      '<circle cx="320" cy="52" r="30" fill="#ffb347"/><circle cx="310" cy="44" r="6" fill="#f09a32" opacity=".6"/><circle cx="330" cy="62" r="4" fill="#f09a32" opacity=".6"/>' +
      bat(20, 46, "") + bat(-30, 72, "dz-bat2") + bat(120, 30, "dz-bat2") +
      '<path d="M0 120q40 -20 80 -4v80h-80z" fill="#1c1a2a"/>' +
      twoflat(30, "#6e5a4a", "#2a2228") + twoflat(170, "#7d6450", "#2e2428") + twoflat(304, "#5e4e44", "#262026") +
      '<rect x="0" y="206" width="400" height="54" fill="#2a2a30"/><rect x="0" y="204" width="400" height="4" fill="#5a5a60"/>' +
      pumpkin(74, 192, 1, "dz-flk") + pumpkin(96, 196, .8, "dz-flk dz-flk2") + pumpkin(214, 192, 1, "dz-flk dz-flk3") + pumpkin(240, 196, .8, "dz-flk") + pumpkin(348, 192, 1, "dz-flk dz-flk2") +
      leaf(10, 120, "#c8641a", "") + leaf(60, 100, "#a8401a", "dz-leaf2") + leaf(140, 110, "#d8a02a", "dz-leaf3") + leaf(250, 96, "#c8641a", "dz-leaf2") +
      '<rect x="96" y="224" width="208" height="22" rx="3" fill="#111"/><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + ORANGE + '">DEVIL\'S NIGHT · PORCH LIGHTS ON</text>',
      sky("dzs2", "#0c0a1e", "#3a2448"));
  }

  /* 3. The Masonic Temple on Temple St, a show night: the tour bus out front, the van behind it */
  function dzmasonic() {
    const STONE = "#c8bea8", SHADE = "#a89e88";
    const lancet = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'q' + (w / 2) + ' -' + (w * .9) + ' ' + w + ' 0v' + (h - w / 2) + 'z" fill="#2b2a3a"/>';
    const tower = '<rect x="120" y="22" width="160" height="150" fill="' + STONE + '"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (124 + i * 20) + '" y="22" width="3" height="150" fill="' + SHADE + '"/>').join("") +
      Array.from({ length: 7 }, (_, i) => Array.from({ length: 4 }, (_, j) => '<rect x="' + (132 + i * 20) + '" y="' + (34 + j * 22) + '" width="8" height="14" fill="' + ((i + j) % 3 ? "#ffd98a" : "#3a3a4a") + '"' + ((i + j) % 3 ? ' class="dz-gl' + (j % 2 ? " dz-gl2" : "") + '"' : "") + '/>').join("")).join("") +
      '<path d="M116 22h168l-6 -10h-156z" fill="' + SHADE + '"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (120 + i * 19) + '" y="6" width="6" height="8" fill="' + STONE + '"/>').join("") +
      lancet(150, 128, 18, 40) + lancet(191, 122, 18, 46) + lancet(232, 128, 18, 40);
    const wings = '<rect x="20" y="96" width="100" height="78" fill="' + SHADE + '"/><rect x="280" y="96" width="100" height="78" fill="' + SHADE + '"/>' +
      Array.from({ length: 4 }, (_, i) => lancet(32 + i * 22, 112, 12, 30) + lancet(292 + i * 22, 112, 12, 30)).join("");
    const marquee = '<rect x="140" y="150" width="120" height="24" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="166" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">D12 · TONIGHT</text>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="dz-ch' + (i % 2 ? " dz-ch2" : "") + '" cx="' + (146 + i * 10) + '" cy="147" r="2" fill="#fff3b0"/>').join("");
    const tourbus = '<g><rect x="186" y="176" width="200" height="50" rx="7" fill="#1e1e24" stroke="#6a6a74" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (200 + i * 34) + '" y="184" width="28" height="16" rx="2" fill="#3c4a5a"/>').join("") +
      '<rect x="186" y="206" width="200" height="4" fill="' + PURPLE + '"/><rect x="368" y="184" width="14" height="26" rx="2" fill="#3c4a5a"/>' +
      '<circle cx="222" cy="228" r="9" fill="#111"/><circle cx="222" cy="228" r="3.5" fill="#888"/><circle cx="352" cy="228" r="9" fill="#111"/><circle cx="352" cy="228" r="3.5" fill="#888"/></g>';
    const van = '<g><rect x="36" y="190" width="110" height="36" rx="6" fill="#d8d4c8" stroke="#8a867c" stroke-width="2"/><rect x="118" y="196" width="24" height="14" rx="2" fill="#3c4a5a"/>' +
      '<rect x="48" y="196" width="22" height="12" rx="2" fill="#3c4a5a"/><rect x="76" y="196" width="22" height="12" rx="2" fill="#3c4a5a"/><rect x="36" y="212" width="110" height="3" fill="#b0a890"/>' +
      '<circle cx="64" cy="228" r="8" fill="#111"/><circle cx="64" cy="228" r="3" fill="#888"/><circle cx="124" cy="228" r="8" fill="#111"/><circle cx="124" cy="228" r="3" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs3)"/>' + stars(10) + wings + tower + marquee +
      '<rect x="0" y="174" width="400" height="86" fill="#3a3c44"/><rect x="0" y="172" width="400" height="4" fill="#8a8c92"/>' +
      van + tourbus +
      '<rect x="40" y="238" width="320" height="18" rx="3" fill="#111"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">MASONIC TEMPLE · WE IN THE VAN, HE IN THE TOUR BUS</text>',
      sky("dzs3", "#14122e", "#4a3a66"));
  }

  /* 4. The Detroit Institute of Arts on Woodward: white marble front, three arches, the bronze Thinker on the steps */
  function dzdia() {
    const MARBLE = "#ecebe4", SHADE = "#cfccc2";
    const arch = x => '<path d="M' + x + ' 170v-40q20 -26 40 0v40z" fill="#3a3a48"/><path d="M' + x + ' 170v-40q20 -26 40 0v40z" fill="none" stroke="' + SHADE + '" stroke-width="3"/>' +
      '<path d="M' + (x + 8) + ' 170v-30q12 -14 24 0v30z" fill="#ffd98a" class="dz-gl"/>';
    const col = x => '<rect x="' + x + '" y="96" width="8" height="74" fill="' + MARBLE + '"/><rect x="' + (x - 2) + '" y="94" width="12" height="4" fill="' + SHADE + '"/>';
    const banner = (x, c, cls) => '<rect x="' + x + '" y="56" width="22" height="40" fill="' + c + '" class="dz-ban ' + cls + '"/>';
    const front = '<rect x="60" y="80" width="280" height="96" fill="' + MARBLE + '"/><rect x="54" y="72" width="292" height="10" fill="' + SHADE + '"/><rect x="60" y="64" width="280" height="8" fill="' + MARBLE + '"/>' +
      '<rect x="14" y="98" width="46" height="78" fill="' + SHADE + '"/><rect x="340" y="98" width="46" height="78" fill="' + SHADE + '"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (22 + i * 12) + '" y="110" width="6" height="40" fill="#3a3a48"/><rect x="' + (348 + i * 12) + '" y="110" width="6" height="40" fill="#3a3a48"/>').join("") +
      arch(110) + arch(180) + arch(250) + col(98) + col(160) + col(230) + col(296) +
      '<text x="200" y="92" text-anchor="middle" ' + font + ' font-size="8" fill="#8a867c" letter-spacing="2">DETROIT INSTITUTE OF ARTS</text>' +
      banner(70, PURPLE, "") + banner(308, ORANGE, "dz-ban2");
    const steps = Array.from({ length: 5 }, (_, i) => '<rect x="' + (90 - i * 8) + '" y="' + (176 + i * 5) + '" width="' + (220 + i * 16) + '" height="5" fill="' + (i % 2 ? "#d8d4ca" : "#c8c4ba") + '"/>').join("");
    const thinker = '<g transform="translate(118 150)"><rect x="-14" y="22" width="28" height="18" fill="#8a8478"/>' +
      '<path d="M-8 22q-2 -14 4 -22q6 -4 10 2q4 8 2 20z" fill="#3e3424"/><circle cx="2" cy="-4" r="5" fill="#3e3424"/>' +
      '<path d="M6 4q8 2 6 10l-6 -2z" fill="#3e3424"/><path d="M-6 22h16v6h-16z" fill="#3e3424"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs4)"/>' + front + steps + thinker +
      '<rect x="0" y="202" width="400" height="58" fill="#45474e"/><rect x="0" y="200" width="400" height="4" fill="#c8c4ba"/><path d="M0 232h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("dz-car", 0, 238, PURPLE) + car("dz-car dz-car2", 0, 238, "#d6d6d6") +
      '<rect x="116" y="244" width="168" height="14" rx="3" fill="#111"/><text x="200" y="254.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">WOODWARD AVE · MIDTOWN</text>',
      sky("dzs4", "#5a7ab0", "#f2c48a"));
  }

  /* 5. E 7 Mile Rd and Runyon St */
  function dzcorner() {
    const skyline = '<g fill="#2c2a40">' +
      '<rect x="210" y="58" width="22" height="52"/><rect x="236" y="40" width="16" height="70"/><rect x="256" y="66" width="26" height="44"/><rect x="286" y="30" width="20" height="80"/><path d="M286 30l10 -12l10 12z"/>' +
      '<rect x="310" y="52" width="28" height="58"/><circle cx="352" cy="64" r="10"/><rect x="342" y="64" width="20" height="46"/><rect x="366" y="48" width="18" height="62"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="dz-tw' + (i % 2 ? " dz-tw2" : "") + '" x="' + (214 + i * 17) + '" y="' + (72 + (i % 3) * 9) + '" width="3" height="4" fill="' + GOLD + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dzs5)"/>' + stars(8) + skyline +
      '<rect x="0" y="106" width="400" height="6" fill="#6b6f73"/>' + car("dz-car", 0, 94, "#d6d6d6") +
      '<rect x="0" y="118" width="400" height="106" fill="#6a3e34"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#55302a" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (118 + i * 8) + 'v8" stroke="#55302a" stroke-width="1"/>').join("")).join("") +
      tag("D12", 20, 186, 54, PURPLE, -7) + tag("RUNYON AVE", 130, 168, 22, LIME, -4) + tag("DIRTY DOZEN", 26, 214, 18, ORANGE, -3) +
      '<g class="dz-sp"><circle cx="122" cy="148" r="3" fill="' + PURPLE + '" opacity=".7"/></g><g class="dz-sp dz-sp2"><circle cx="128" cy="140" r="2" fill="' + PURPLE + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(278, 112, 120, "E 7 Mile Rd") + sign(290, 138, 96, "Runyon St") +
      '<rect x="392" y="200" width="4" height="24" fill="#222"/>',
      sky("dzs5", "#1a1636", "#c86a4a"));
  }

  window.SCENES = { dzstation: dzstation, dzdevil: dzdevil, dzmasonic: dzmasonic, dzdia: dzdia, dzcorner: dzcorner };
})();
