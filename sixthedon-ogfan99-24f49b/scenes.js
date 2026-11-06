/* Six The Don game (NYC map, Brooklyn: Bushwick. Rich Perez, founder of The Base Collection; "I'm in Menahan projects, in the back shooting hoops").
   1. Wilson Av (L): the two-level station, canopied upper deck over the green-band lower platform, the L pulling in.
   2. The Bowery Art Room on the Bowery: The Base Collection's gallery ("Galleries on Bowery Street"), canvases lit up, visitors walking through.
   3. The back courts off Menahan St: chain net, a ball going up, the brick projects behind.
   4. Aviation High School in Long Island City ("Aviation High, that could have been fly"): the brick school, a jet on autopilot overhead.
   5. Wilson Av & Menahan St: green street signs, the wall tagged SIX THE DON, the Menahan projects towers behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sxcars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.sx-car{animation:sxcars 7s linear infinite}.sx-car2{animation-delay:-3.5s}' +
    '@keyframes sxblink{0%,100%{opacity:.3}50%{opacity:1}}.sx-bl{animation:sxblink 1.8s ease-in-out infinite}.sx-bl2{animation-delay:.6s}.sx-bl3{animation-delay:1.2s}' +
    '@keyframes sxflick{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.9}}.sx-flk{animation:sxflick 2.6s infinite}' +
    '@keyframes sxwalk{from{transform:translateX(0)}to{transform:translateX(120px)}}.sx-walk{animation:sxwalk 9s linear infinite alternate}.sx-walk2{animation-duration:12s;animation-direction:alternate-reverse}' +
    '@keyframes sxshot{0%{transform:translate(0,0)}50%{transform:translate(70px,-92px)}100%{transform:translate(132px,-58px)}}.sx-ball{animation:sxshot 2.2s ease-in-out infinite}' +
    '@keyframes sxjet{from{transform:translate(-90px,40px)}to{transform:translate(480px,-30px)}}.sx-jet{animation:sxjet 8s linear infinite}' +
    '@keyframes sxglow{0%,100%{opacity:.15}50%{opacity:.35}}.sx-glow{animation:sxglow 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e0b84f", RED = "#d64545", CREAM = "#f4ead8", LGRAY = "#a7a9ac", SKY = "#6cc3d5";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* brick tower with lit windows */
  const tower = (x, y, w, base, col) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="' + col + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#3a1d16"/>';
    for (let yy = y + 10; yy < base - 8; yy += 12) for (let xx = x + 6; xx < x + w - 8; xx += 12) g += '<rect class="sx-bl sx-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".7"/>'; return g; };

  /* 1. Wilson Av (L): upper canopied deck with curved green supports and the beige retaining wall; lower platform with the green mosaic band; the L sliding in below */
  function wilson() {
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="112" width="6" height="6" fill="' + ["#2e7d4f", "#c9a24a", "#b5523b", "#2e7d4f"][(x / 12) % 4] + '"/>';
    let win = "";
    for (let x = 40; x < 300; x += 36) win += '<rect x="' + x + '" y="166" width="24" height="18" rx="2" fill="#dbe8f2" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sw)"/>' + stars(10) +
      /* upper deck: canopy on curved green supports */
      '<rect x="0" y="40" width="400" height="8" fill="#2f6b45"/>' +
      [30, 130, 230, 330].map(x => '<path d="M' + x + ' 92v-36q0-8 10-8h40q10 0 10 8v36" stroke="#2f6b45" stroke-width="5" fill="none"/>').join("") +
      '<rect x="0" y="92" width="400" height="10" fill="#d8cdb2"/>' + person(70, 66, "#1d1d22") + person(300, 68, "#26262c") +
      /* the beige retaining wall / lower platform wall */
      '<rect x="0" y="102" width="400" height="56" fill="#cfc3a6"/>' +
      '<rect x="0" y="108" width="400" height="14" fill="#1f5135"/>' + band +
      /* station sign */
      '<rect x="96" y="128" width="208" height="26" rx="3" fill="#111"/><rect x="96" y="128" width="208" height="3" fill="#fff"/>' +
      '<text x="108" y="147" ' + font + ' font-size="14" fill="#fff">Wilson Av</text>' + bullet(284, 142, "L", LGRAY) +
      /* the L train */
      '<g class="anim-train">' +
        '<rect x="20" y="158" width="300" height="46" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="300" y="166" width="16" height="22" rx="2" fill="#dbe8f2"/>' + bullet(308, 194, "L", LGRAY) +
        '<rect x="20" y="190" width="270" height="4" fill="#5b5d62"/><circle cx="32" cy="198" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="204" width="400" height="8" fill="#eab308"/><rect x="0" y="212" width="400" height="48" fill="#57544f"/>' +
      person(350, 222, "#1b1b1b") +
      txt("BUSHWICK · BROOKLYN", 170, 244, 11, CREAM, 'letter-spacing="3"'),
      sky("sw", "#0c0f1e", "#2d3350"));
  }

  /* 2. The Bowery Art Room: a lit gallery front on the Bowery, framed canvases inside, visitors drifting past, a car rolling by */
  function bowery() {
    const canvas = (x, y, w, h, a, b) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M' + (x + 4) + ' ' + (y + h - 4) + 'L' + (x + w / 2) + ' ' + (y + 6) + 'L' + (x + w - 4) + ' ' + (y + h - 4) + 'z" fill="' + a + '" opacity=".85"/><circle cx="' + (x + w - 12) + '" cy="' + (y + 12) + '" r="6" fill="' + b + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sb)"/>' +
      /* neighboring buildings */
      '<rect x="0" y="40" width="50" height="170" fill="#2a2420"/><rect x="350" y="30" width="50" height="180" fill="#2a2420"/>' +
      [60, 90, 120, 150].map(y => '<rect class="sx-bl" x="14" y="' + y + '" width="10" height="12" fill="#ffd98a" opacity=".6"/><rect class="sx-bl sx-bl2" x="368" y="' + (y - 10) + '" width="10" height="12" fill="#ffd98a" opacity=".6"/>').join("") +
      /* the gallery front */
      '<rect x="50" y="56" width="300" height="154" fill="#1b1b1f"/><rect x="50" y="56" width="300" height="8" fill="#0d0d10"/>' +
      '<rect x="96" y="70" width="208" height="26" rx="2" fill="#0d0d10" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      txt("BOWERY ART ROOM", 200, 88, 13, GOLD, 'letter-spacing="3"') +
      /* big lit window */
      '<rect x="66" y="104" width="268" height="96" fill="#f3efe6"/><rect class="sx-glow" x="66" y="104" width="268" height="96" fill="#fff6c2"/>' +
      canvas(80, 116, 50, 40, RED, GOLD) + canvas(146, 112, 64, 50, "#2c3e70", RED) + canvas(226, 116, 44, 40, GOLD, SKY) + canvas(284, 120, 38, 34, "#6a3c8c", CREAM) +
      '<rect x="66" y="196" width="268" height="4" fill="#c9bfa8"/>' +
      '<g class="sx-walk">' + person(96, 168, "#222") + '</g><g class="sx-walk sx-walk2">' + person(176, 170, "#333") + '</g>' +
      '<path d="M66 104h268M200 104v96" stroke="#1b1b1f" stroke-width="3"/>' +
      /* sidewalk + street */
      '<rect x="0" y="210" width="400" height="50" fill="#45474c"/><rect x="0" y="210" width="400" height="4" fill="#77797d"/>' +
      '<g class="sx-car"><rect x="0" y="232" width="48" height="14" rx="4" fill="#111"/><rect x="10" y="226" width="26" height="8" rx="3" fill="#111"/><circle cx="10" cy="246" r="4" fill="#333"/><circle cx="38" cy="246" r="4" fill="#333"/><circle cx="46" cy="238" r="2" fill="#fff6c2"/></g>' +
      txt("THE BOWERY · MANHATTAN", 200, 226, 10, CREAM, 'letter-spacing="3"') +
      txt("THE BASE COLLECTION", 200, 50, 9, CREAM, 'letter-spacing="4" opacity=".8"'),
      sky("sb", "#0a0a14", "#2a2236"));
  }

  /* 3. The back courts off Menahan St: chain-link, a hoop with a chain net, a ball going up, the brick projects behind */
  function hoops() {
    let fence = "";
    for (let x = 0; x < 400; x += 12) fence += '<path d="M' + x + ' 120l12 12M' + (x + 12) + ' 120l-12 12" stroke="#7c8288" stroke-width="1" opacity=".55"/>';
    let fence2 = ""; for (let y = 120; y < 200; y += 12) fence2 += fence.replace(/ 120l/g, " " + y + "l");
    return svg(
      '<rect width="400" height="260" fill="url(#sh)"/>' +
      tower(10, 30, 90, 200, "#7a3a2c") + tower(300, 44, 90, 200, "#7a3a2c") + tower(150, 70, 70, 200, "#6c3326") +
      fence2 + '<rect x="0" y="118" width="400" height="3" fill="#7c8288"/>' +
      /* court */
      '<rect x="0" y="196" width="400" height="64" fill="#3a5a46"/><path d="M0 200h400" stroke="#e8e3d8" stroke-width="2"/>' +
      '<path d="M300 260q10-40 100-46" stroke="#e8e3d8" stroke-width="2" fill="none"/>' +
      /* hoop */
      '<rect x="356" y="96" width="6" height="104" fill="#2b2b2b"/><path d="M362 104h-24" stroke="#2b2b2b" stroke-width="4"/>' +
      '<rect x="320" y="76" width="40" height="30" fill="#f4f1ea" stroke="#2b2b2b" stroke-width="2"/><rect x="332" y="88" width="16" height="12" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="330" cy="108" rx="12" ry="3" fill="none" stroke="' + RED + '" stroke-width="2.5"/>' +
      '<path d="M319 109l4 14M325 110l2 14M331 111v14M337 110l-2 14M342 109l-4 14M321 123h18" stroke="#c0c4c8" stroke-width="1.4"/>' +
      /* shooter + ball */
      '<g><circle cx="190" cy="168" r="7" fill="#151515"/><rect x="183" y="176" width="14" height="22" rx="5" fill="#151515"/><path d="M194 178l8-14" stroke="#151515" stroke-width="4" stroke-linecap="round"/></g>' +
      '<g class="sx-ball"><circle cx="202" cy="160" r="6" fill="#e07a2e" stroke="#7a3a10" stroke-width="1"/><path d="M196 160h12M202 154v12" stroke="#7a3a10" stroke-width="1"/></g>' +
      txt("MENAHAN ST · THE BACK COURTS", 150, 236, 11, CREAM, 'letter-spacing="2"'),
      sky("sh", "#f2a65a", "#6c4a7a"));
  }

  /* 4. Aviation High School, Long Island City: the long brick school, rows of windows, the flag, a jet crossing on autopilot */
  function aviation() {
    let win = "";
    for (let y = 120; y < 196; y += 20) for (let x = 40; x < 360; x += 22) win += '<rect x="' + x + '" y="' + y + '" width="12" height="12" fill="#cfe2f5" opacity=".85"/>';
    const jet = '<g><path d="M0 10h54q10 0 12 5q-2 5-12 5H8z" fill="#eef2f6"/><path d="M22 12l10-14h7l-5 14zM22 18l10 14h7l-5-14z" fill="#d5dbe2"/><path d="M2 10l-3-9h6l6 9z" fill="' + RED + '"/>' +
      [30, 38, 46].map(x => '<circle cx="' + x + '" cy="14" r="1.5" fill="#5b6b7c"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sa)"/>' +
      '<g class="sx-jet">' + jet + '<path d="M-60 16h58" stroke="#fff" stroke-width="2" opacity=".5" stroke-dasharray="6 6"/></g>' +
      /* clouds */
      '<g opacity=".8"><ellipse cx="80" cy="60" rx="34" ry="10" fill="#fff"/><ellipse cx="300" cy="44" rx="40" ry="11" fill="#fff"/></g>' +
      /* the school */
      '<rect x="24" y="104" width="352" height="100" fill="#9a4e36"/><rect x="24" y="100" width="352" height="8" fill="#d8cdb2"/>' + win +
      '<rect x="124" y="84" width="152" height="24" fill="#d8cdb2"/>' + txt("AVIATION HIGH SCHOOL", 200, 101, 9, "#3a2a1e", 'letter-spacing="1"') +
      '<rect x="180" y="168" width="40" height="36" fill="#2b2016"/><path d="M200 168v36" stroke="#d8cdb2" stroke-width="2"/>' +
      /* flag */
      '<rect x="356" y="40" width="3" height="64" fill="#cfd4da"/><g class="sx-flk"><rect x="359" y="42" width="30" height="18" fill="' + CREAM + '"/>' +
      [44, 48, 52, 56].map(y => '<rect x="359" y="' + y + '" width="30" height="2" fill="' + RED + '"/>').join("") + '<rect x="359" y="42" width="12" height="9" fill="#2c3e70"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="204" width="400" height="56" fill="#55575c"/><rect x="0" y="204" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="sx-car sx-car2"><rect x="0" y="230" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="243" r="4" fill="#111"/><circle cx="34" cy="243" r="4" fill="#111"/></g>' +
      txt("LONG ISLAND CITY · QUEENS", 200, 222, 10, CREAM, 'letter-spacing="3"'),
      sky("sa", "#4f9fd6", "#bfe3f2"));
  }

  /* 5. Wilson Av & Menahan St: the wall tagged SIX THE DON, green street signs, the Menahan projects towers behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sc)"/>' + stars(14).replace(/cy="(1[0-9]|2[0-9])(\.[0-9]+)?"/g, 'cy="40"') +
      tower(16, 36, 76, 140, "#7a3a2c") + tower(110, 62, 64, 140, "#6c3326") + tower(192, 26, 80, 140, "#7a3a2c") + tower(290, 54, 70, 140, "#6c3326") +
      txt("MENAHAN PROJECTS", 232, 20, 9, CREAM, 'letter-spacing="3" opacity=".8"') +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("SIX THE DON", 14, 194, 42, GOLD, -5) + tag("THE BASE", 206, 218, 19, RED, -4) + tag("HEIRBORN", 24, 220, 15, SKY, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="sx-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="#1a1a1a"/><circle cx="10" cy="251" r="4" fill="#444"/><circle cx="36" cy="251" r="4" fill="#444"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Wilson Av", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Menahan St", 346, 108, 12, "#fff") +
      '<circle class="sx-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("sc", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { wilson: wilson, bowery: bowery, hoops: hoops, aviation: aviation, corner: corner };
})();
