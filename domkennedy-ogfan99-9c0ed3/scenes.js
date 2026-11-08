/* Dom Kennedy scenes (Regions tab: Los Angeles + SoCal; Leimert Park, LA). CSS classes prefixed dmk- (the page's own anim-train is kept).
   1 17th St/SMC on the Metro E Line (at-grade, island platform in the Colorado Ave median, by Santa Monica College, where he studied)
   2 Barnum Hall at Santa Monica High (his high school): 1938 Streamline Moderne, cream stucco, curved ends, grooved canopy on poles, porthole doors
   3 Fairfax Ave (where his OPM office is): the white clock tower at 3rd & Fairfax over the storefront row
   4 Taste of Soul on Crenshaw Blvd ("This year I might stay home, catch Taste of Soul")
   5 Crenshaw Blvd & Vernon Ave, Leimert Park, the green Kenneth Hahn hills behind ("I rather be back on Vernon") */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dmkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.dmk-flk{animation:dmkflick 2.6s infinite}' +
    '@keyframes dmkglow{0%,100%{opacity:.45}50%{opacity:1}}.dmk-glow{animation:dmkglow 2.2s ease-in-out infinite}.dmk-g2{animation-delay:-1.1s}' +
    '@keyframes dmkcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.dmk-car{animation:dmkcar 7s linear infinite}.dmk-car2{animation-delay:-3.5s}' +
    '@keyframes dmkcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.dmk-carL{animation:dmkcarL 8s linear infinite}' +
    '@keyframes dmksway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.dmk-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dmksway 3.2s ease-in-out infinite}' +
    '@keyframes dmkfly{0%{transform:translate(-40px,10px)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,8px)}}.dmk-fly{animation:dmkfly 10s linear infinite}.dmk-fly2{animation-delay:-5s}' +
    '@keyframes dmkspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.dmk-hand{transform-box:view-box;animation:dmkspin 12s linear infinite}' +
    '@keyframes dmkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.dmk-bob{animation:dmkbob .9s ease-in-out infinite}.dmk-b2{animation-delay:-.3s}.dmk-b3{animation-delay:-.6s}' +
    '@keyframes dmkflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}.dmk-flag{transform-box:fill-box;transform-origin:0 50%;animation:dmkflag 1.6s ease-in-out infinite}' +
    '@keyframes dmksmoke{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-30px);opacity:0}}.dmk-smk{animation:dmksmoke 2.4s ease-out infinite}.dmk-smk2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="dmk-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 26) + '" r="5" fill="#3b2a20"/><rect x="' + (x - 6) + '" y="' + (y - 20) + '" width="12" height="14" rx="4" fill="' + c + '"/><rect x="' + (x - 5) + '" y="' + (y - 7) + '" width="4" height="9" fill="#24324a"/><rect x="' + (x + 1) + '" y="' + (y - 7) + '" width="4" height="9" fill="#24324a"/></g>';
  const YEL = "#f7c948", ELINE = "#fdb913", BLUE = "#2f6fd6", MELON = "#e8604c", INK = "#0d0b08";

  /* 1. 17th St/SMC station, Metro E Line: at-grade island platform in the Colorado Ave median, sunny Santa Monica sky, palms, the silver light rail car sliding in */
  function dmkstation() {
    let win = ""; for (let x = 34; x < 300; x += 38) win += '<rect x="' + x + '" y="124" width="26" height="22" rx="3" fill="#1f2a36"/>';
    const train = '<g class="anim-train"><rect x="14" y="112" width="306" height="64" rx="12" fill="#e4e7ea" stroke="#8a9098" stroke-width="2"/>' + win +
      '<rect x="14" y="152" width="306" height="7" fill="' + ELINE + '"/><rect x="14" y="162" width="306" height="3" fill="#3a3e46"/>' +
      '<rect x="298" y="118" width="18" height="52" rx="5" fill="#c7ccd2"/><circle cx="308" cy="166" r="4" fill="#fff6c2"/>' + bullet(272, 136, "E", ELINE) +
      '<path d="M150 112l12 -16h12l12 16" stroke="#555" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dmks1)"/>' +
      '<path d="M0 110q80 -18 170 -8q120 12 230 -6v20H0z" fill="#9cc3a0" opacity=".55"/>' +
      palm(40, 110, 70) + palm(360, 110, 82) + palm(330, 110, 58, "#3d6b40") +
      '<rect x="0" y="94" width="400" height="2" fill="#4a4a4a"/>' +
      '<rect x="0" y="176" width="400" height="10" fill="#6d6d6d"/><rect x="0" y="183" width="400" height="3" fill="#9a9a9a"/>' + train +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/><rect x="0" y="196" width="400" height="64" fill="#b9b3a8"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 196l-26 64" stroke="#a69f93" stroke-width="1"/>').join("") +
      /* canopy over the island platform */
      '<rect x="40" y="58" width="320" height="8" rx="2" fill="#dfe3e6"/><rect x="40" y="66" width="320" height="3" fill="#8b949c"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="69" width="6" height="117" fill="#7b858e"/>').join("") +
      '<rect x="80" y="20" width="240" height="32" rx="3" fill="#111"/><rect x="80" y="20" width="240" height="4" fill="' + ELINE + '"/>' +
      '<text x="94" y="44" ' + font + ' font-size="15" fill="#fff">17th St/SMC</text>' + bullet(298, 38, "E", ELINE) +
      '<rect x="20" y="212" width="80" height="30" rx="3" fill="#1d1d1d"/><text x="60" y="226" text-anchor="middle" ' + font + ' font-size="8" fill="' + ELINE + '">TO DOWNTOWN LA</text><text x="60" y="237" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">2 MIN</text>' +
      tag("OPM", 300, 240, 24, YEL, -6),
      sky("dmks1", "#7fc4ec", "#d8eef5"));
  }

  /* 2. Barnum Hall at Santa Monica High: cream stucco Streamline Moderne, curved end walls, grooved canopy on poles, window grid, porthole doors, palms, a flag waving */
  function dmksamohi() {
    let grid = ""; for (let x = 120; x < 280; x += 20) for (let y = 74; y < 118; y += 14) grid += '<rect x="' + x + '" y="' + y + '" width="16" height="10" fill="#9fc6d8" stroke="#6d8a96" stroke-width=".8"/>';
    let grooves = ""; for (let i = 0; i < 4; i++) grooves += '<rect x="104" y="' + (124 + i * 4) + '" width="192" height="2" fill="#bfb49c"/>';
    const door = x => '<rect x="' + x + '" y="148" width="20" height="40" fill="#5b6f7a" stroke="#3c4a52" stroke-width="1"/><circle cx="' + (x + 10) + '" cy="160" r="5" fill="#bfe3f2" stroke="#3c4a52" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dmks2)"/>' +
      '<g class="dmk-fly"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#33424d" stroke-width="2" fill="none"/></g><g class="dmk-fly dmk-fly2"><path d="M0 60q4 -4 8 0q4 -4 8 0" stroke="#33424d" stroke-width="2" fill="none"/></g>' +
      palm(30, 190, 110) + palm(372, 190, 96) +
      /* main block with curved end walls */
      '<path d="M90 190V82q0 -22 22 -22h176q22 0 22 22V190z" fill="#efe6cf" stroke="#cdbf9e" stroke-width="2"/>' +
      '<path d="M60 190v-70q0 -22 30 -22v92z" fill="#e6dcc1" stroke="#cdbf9e" stroke-width="2"/><path d="M340 190v-70q0 -22 -30 -22v92z" fill="#e6dcc1" stroke="#cdbf9e" stroke-width="2"/>' +
      [68, 76, 84].map(x => '<rect x="' + x + '" y="124" width="3" height="60" fill="#d6caad"/>').join("") + [316, 324, 332].map(x => '<rect x="' + x + '" y="124" width="3" height="60" fill="#d6caad"/>').join("") +
      grid +
      /* grooved horizontal canopy on thin metal poles */
      '<rect x="100" y="122" width="200" height="18" rx="9" fill="#e9dfc4" stroke="#b9ab8c" stroke-width="1.5"/>' + grooves +
      [112, 160, 240, 288].map(x => '<rect x="' + (x - 1.5) + '" y="140" width="3" height="50" fill="#7a7f84"/>').join("") +
      door(146) + door(170) + door(210) + door(234) +
      /* flag on the roof */
      '<rect x="199" y="20" width="2" height="40" fill="#777"/><g class="dmk-flag"><rect x="201" y="22" width="26" height="15" fill="' + BLUE + '"/><rect x="201" y="28" width="26" height="3" fill="#fff"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#8fb37a"/><rect x="150" y="190" width="100" height="70" fill="#d8d0bf"/>' +
      person(120, 230, YEL, "dmk-bob") + person(290, 236, BLUE, "dmk-bob dmk-b2") +
      tag("SAMOHI", 26, 246, 20, YEL, -4),
      sky("dmks2", "#8ccbee", "#e7f3f6"));
  }

  /* 3. Fairfax Ave, where OPM keeps its office: storefront row with a line out the door, the white clock tower at 3rd & Fairfax at the end of the block, cars rolling by */
  function dmkfairfax() {
    const shop = (x, w, c, aw) => '<rect x="' + x + '" y="108" width="' + w + '" height="82" fill="' + c + '"/><rect x="' + (x + 6) + '" y="140" width="' + (w - 12) + '" height="44" fill="#26313a"/>' +
      '<path d="M' + x + ' 128h' + w + 'l-6 12h-' + (w - 12) + 'z" fill="' + aw + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dmks3)"/>' +
      /* clock tower: white shaft, clock faces, hip roof, vane */
      '<rect x="290" y="44" width="40" height="146" fill="#f4f1ea" stroke="#cfc8b8" stroke-width="2"/>' +
      '<path d="M284 44h52l-26 -22z" fill="#2f6a3d"/><rect x="309" y="8" width="2" height="16" fill="#555"/><path d="M311 10l12 3l-12 3z" fill="#555"/>' +
      '<circle cx="310" cy="66" r="13" fill="#fff" stroke="#2f6a3d" stroke-width="3"/>' +
      '<line x1="310" y1="66" x2="310" y2="57" stroke="#222" stroke-width="2"/><g class="dmk-hand" style="transform-origin:310px 66px"><line x1="310" y1="66" x2="318" y2="66" stroke="#222" stroke-width="1.6"/></g>' +
      [96, 120, 144].map(y => '<rect x="302" y="' + y + '" width="16" height="12" fill="#2f6a3d" opacity=".7"/>').join("") +
      shop(0, 92, "#c9573f", "#1f1f1f") + shop(92, 96, "#ece4d2", YEL) + shop(188, 96, "#3e5c7a", "#efe6cf") +
      '<rect x="0" y="100" width="284" height="8" fill="#2a2a2a"/>' +
      /* the line out the door */
      [110, 126, 142, 158, 174].map((x, i) => person(x, 198, [YEL, BLUE, MELON, "#2b2b2b", "#7a5ea8"][i], "dmk-bob" + (i % 3 ? " dmk-b" + (i % 3 + 1) : ""))).join("") +
      '<rect x="0" y="198" width="400" height="8" fill="#cfc8bb"/><rect x="0" y="206" width="400" height="54" fill="#3c3d40"/>' +
      '<path d="M0 232h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="20 14"/>' +
      car(0, 210, BLUE, "dmk-car") + car(0, 232, MELON, "dmk-carL") +
      sign(18, 72, 70, "FAIRFAX AV", 10) + '<rect x="51" y="94" width="4" height="14" fill="#555"/>' +
      tag("OPM", 210, 96, 20, YEL, -5),
      sky("dmks3", "#86c2e8", "#f1e6c8"));
  }

  /* 4. Taste of Soul on Crenshaw Blvd: rows of white festival tents down the boulevard, string flags, the crowd bopping, grill smoke rising, palms */
  function dmktaste() {
    const tent = (x, c) => '<path d="M' + x + ' 150l30 -26l30 26z" fill="#fbfaf6" stroke="#c9c2b2" stroke-width="1.5"/><rect x="' + x + '" y="150" width="60" height="8" fill="' + c + '"/>' +
      '<rect x="' + (x + 2) + '" y="158" width="3" height="34" fill="#888"/><rect x="' + (x + 55) + '" y="158" width="3" height="34" fill="#888"/><rect x="' + (x + 6) + '" y="176" width="48" height="16" fill="#e9e1cf"/>';
    let flags = ""; for (let i = 0; i < 20; i++) flags += '<path d="M' + (i * 20 + 4) + ' ' + (70 + Math.sin(i / 3) * 6) + 'l6 12l6 -12z" fill="' + [YEL, MELON, BLUE, "#3fa36b"][i % 4] + '"/>';
    let crowd = ""; for (let i = 0; i < 14; i++) crowd += person(14 + i * 28, 236 + (i % 2) * 6, [YEL, BLUE, MELON, "#2b2b2b", "#7a5ea8", "#3fa36b"][i % 6], "dmk-bob" + (i % 3 ? " dmk-b" + (i % 3 + 1) : ""));
    return svg(
      '<rect width="400" height="260" fill="url(#dmks4)"/>' +
      palm(24, 160, 100) + palm(380, 160, 112) + palm(200, 124, 60, "#3d6b40") +
      '<path d="M0 64q200 30 400 0" stroke="#555" stroke-width="1.5" fill="none"/>' + flags +
      tent(30, MELON) + tent(100, YEL) + tent(240, BLUE) + tent(310, "#3fa36b") +
      '<circle class="dmk-smk" cx="130" cy="170" r="6" fill="#d9d9d9"/><circle class="dmk-smk dmk-smk2" cx="138" cy="168" r="5" fill="#e4e4e4"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#4a4b4e"/><path d="M200 192v68" stroke="#e8d27a" stroke-width="3" stroke-dasharray="14 10"/>' + crowd +
      sign(150, 92, 100, "CRENSHAW BL", 10) + '<rect x="198" y="114" width="4" height="30" fill="#555"/>' +
      tag("TASTE OF SOUL", 120, 40, 22, YEL, -3),
      sky("dmks4", "#f2a65a", "#fbe7b0"));
  }

  /* 5. Crenshaw Blvd & Vernon Ave, Leimert Park: green street signs, a stucco wall with DOM KENNEDY tagged, the green Kenneth Hahn hills behind at sunset, a yellow Cadillac-style coupe rolling */
  function dmkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dmks5)"/>' +
      '<path d="M0 120q60 -50 130 -40q50 6 90 -10q70 -26 180 20v40H0z" fill="#4f7d4a"/><path d="M0 130q90 -30 180 -16q110 18 220 -8v24H0z" fill="#3c6439"/>' +
      palm(30, 140, 70) + palm(352, 140, 86) +
      '<rect x="0" y="138" width="400" height="72" fill="#e7d5b4"/><rect x="0" y="138" width="400" height="6" fill="#c9b48e"/>' +
      tag("DOM KENNEDY", 60, 186, 34, YEL, -5) + tag("LEIMERT", 30, 206, 16, MELON, -3) +
      '<rect x="0" y="210" width="400" height="50" fill="#3c3d40"/><path d="M0 236h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="20 14"/>' +
      car(0, 214, YEL, "dmk-car") +
      '<rect x="318" y="60" width="5" height="150" fill="#5d6166"/>' + sign(270, 62, 104, "CRENSHAW BL", 11) + sign(276, 88, 92, "VERNON AV", 11) +
      '<circle class="dmk-glow" cx="320" cy="56" r="4" fill="#fff1b8"/>',
      sky("dmks5", "#f08a5d", "#fcd9a0"));
  }

  window.SCENES = { dmkstation: dmkstation, dmksamohi: dmksamohi, dmkfairfax: dmkfairfax, dmktaste: dmktaste, dmkcorner: dmkcorner };
})();
