/* Black Rob game (NYC map, Manhattan: East Harlem). The 6 pulling into 116 St under Lexington Av, the Thomas Jefferson Houses (he came up around the Jefferson
   and Wagner Houses), the handball walls in Thomas Jefferson Park on 1st Av, the FDR Drive along the East River ("come through in the Porsche slow like whoa"),
   and E 115 St & 1 Av, co-named Robert "Black Rob" Ross Way in 2022, with the bell tower of Our Lady of Mount Carmel on E 115 St behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes slow{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.slow{animation:slow 12s linear infinite}' +
    '@keyframes back{from{transform:translateX(460px)}to{transform:translateX(-120px)}}.back{animation:back 5s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes hb{0%{transform:translate(0,0)}50%{transform:translate(-60px,-30px)}100%{transform:translate(0,0)}}.hball{animation:hb 1.1s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.wv{animation:wave 3s ease-in-out infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.bell{transform-box:fill-box;transform-origin:50% 0%;animation:swing 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.3) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const LEX = "#00933c", SKY = "#4fc3f7", GOLD = "#ffd166", RED = "#e53935", CREAM = "#f4ead8", SIGN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const tower = (x, y, w, h, c, lit) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    for (let yy = y + 8; yy < y + h - 8; yy += 12) for (let xx = x + 6; xx < x + w - 8; xx += 11) g += '<rect' + (lit && (xx + yy) % 5 === 0 ? ' class="bl bl' + ((xx + yy) % 3 + 1) + '"' : '') + ' x="' + xx + '" y="' + yy + '" width="6" height="7" fill="' + (lit && (xx * 3 + yy) % 4 === 0 ? "#ffd98a" : "#2a2733") + '"/>';
    return g; };

  /* 1. 116 St on the Lexington Av line, underground: white tile, the IRT mosaic band and name tablet, the black hanging sign with the green 6, the 6 sliding in */
  function station() {
    let tile = "";
    for (let y = 30; y < 150; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#d9dcd6" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tile += '<path d="M' + x + ' 26v124" stroke="#e3e5df" stroke-width="1"/>';
    let mosaic = "";
    for (let x = 0; x < 400; x += 12) mosaic += '<rect x="' + x + '" y="52" width="6" height="6" fill="#2f6f8f"/><rect x="' + (x + 6) + '" y="52" width="6" height="6" fill="#d9b25a"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#f1f0e9"/>' + tile +
      '<rect x="0" y="0" width="400" height="26" fill="#3a3d40"/>' +
      [8, 92, 176, 260, 344].map(x => '<rect x="' + x + '" y="10" width="44" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      '<rect x="0" y="48" width="400" height="14" fill="#7a5a2a"/>' + mosaic +
      /* name tablet */
      '<rect x="40" y="72" width="130" height="30" fill="#d9b25a"/><rect x="44" y="76" width="122" height="22" fill="#2f6f8f"/>' +
      '<text x="105" y="92" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="2">116TH ST</text>' +
      /* black hanging sign */
      '<rect x="160" y="28" width="170" height="22" rx="2" fill="#111"/><rect x="160" y="28" width="170" height="2.5" fill="#fff"/>' +
      '<text x="170" y="44" ' + font + ' font-size="12" fill="#fff">116 St</text>' + bullet(312, 39, "6", LEX, false, 8) +
      '<rect x="200" y="76" width="120" height="22" rx="2" fill="#111"/><text x="208" y="91" ' + font + ' font-size="8" fill="#fff">Downtown &amp; Brooklyn</text>' +
      [352, 388].map(x => '<rect x="' + (x - 6) + '" y="26" width="12" height="150" fill="#2b2f33"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="6" y="114" width="310" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="296" y="124" width="16" height="24" rx="2" fill="#bcd3ea"/>' + bullet(304, 163, "6", LEX, false, 9) +
        '<circle cx="16" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#6d6f73"/>' +
      (() => { let d = ""; for (let x = 0; x < 400; x += 16) d += '<rect x="' + x + '" y="178" width="8" height="6" fill="#c99a06"/>'; return d; })() +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#e8e3d8" letter-spacing="3">LEXINGTON AV · EAST HARLEM</text>',
      '');
  }

  /* 2. The Thomas Jefferson Houses: tall red-brick towers in a row, the green courtyard with benches and lamp posts, kids running laps */
  function houses() {
    const kid = (cls, c) => '<g class="car ' + cls + '"><circle cx="0" cy="196" r="5" fill="' + c + '"/><rect x="-5" y="201" width="10" height="14" rx="4" fill="' + c + '"/><path d="M-3 214l-3 8M3 214l3 8" stroke="' + c + '" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#h2)"/>' +
      tower(10, 40, 80, 150, "#9b4a35", false) + tower(110, 24, 90, 166, "#a5523b", false) + tower(220, 34, 84, 156, "#93452f", false) + tower(320, 48, 76, 142, "#a04c36", false) +
      '<rect x="0" y="186" width="400" height="74" fill="#5c9a4a"/><rect x="0" y="222" width="400" height="38" fill="#b9b2a2"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 2) + '" y="160" width="4" height="62" fill="#2f3a2f"/><circle class="flk" cx="' + x + '" cy="158" r="5" fill="#fff3c4"/>').join("") +
      [110, 260].map(x => '<rect x="' + x + '" y="206" width="44" height="5" fill="#6b4a2e"/><rect x="' + (x + 4) + '" y="211" width="3" height="10" fill="#333"/><rect x="' + (x + 37) + '" y="211" width="3" height="10" fill="#333"/>').join("") +
      kid("", RED) + kid("car2", SKY) +
      '<rect x="124" y="232" width="152" height="20" rx="2" fill="#1d2a3a"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">JEFFERSON HOUSES</text>',
      sky("h2", "#6fb7ff", "#d5ecff"));
  }

  /* 3. Thomas Jefferson Park on 1st Av: the row of handball walls, a game going (the ball flying), the big ballfield lights, East Harlem towers behind */
  function park() {
    const wall = x => '<rect x="' + x + '" y="96" width="90" height="80" fill="#c9c3b5"/><rect x="' + x + '" y="96" width="90" height="4" fill="#e3ddcf"/><path d="M' + x + ' 140h90" stroke="' + RED + '" stroke-width="2"/>';
    const player = (x, c) => '<circle cx="' + x + '" cy="176" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="182" width="12" height="18" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' 199l-3 12M' + (x + 3) + ' 199l3 12" stroke="' + c + '" stroke-width="3.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p3)"/>' + tower(0, 40, 60, 80, "#7d3b2b", false) + tower(330, 30, 70, 90, "#7d3b2b", false) +
      [20, 380].map(x => '<rect x="' + (x - 2) + '" y="14" width="4" height="100" fill="#4b4f57"/><rect x="' + (x - 14) + '" y="8" width="28" height="12" fill="#4b4f57"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#2e7d4f"/><rect x="0" y="176" width="400" height="44" fill="#3b8f5d"/>' +
      wall(60) + wall(160) + wall(260) +
      '<path d="M0 220h400" stroke="#f4f4f4" stroke-width="2"/>' +
      player(140, "#1d1d1d") + player(220, "#3b3b3b") +
      '<g class="hball"><circle cx="210" cy="150" r="4" fill="' + SKY + '"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#55575c"/>' +
      '<g class="car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      tag("ALUMNI", 170, 132, 24, GOLD, -4),
      sky("p3", "#ff9e5e", "#ffd9a8"));
  }

  /* 4. The FDR Drive along the East River at night: the river, the island lights across the water, a silver sports car rolling slow, traffic rushing the other way */
  function fdr() {
    let waves = "";
    for (let x = 0; x < 440; x += 40) waves += '<path d="M' + x + ' 0q10-5 20 0t20 0" stroke="#7fb6d6" stroke-width="1.5" fill="none" opacity=".6"/>';
    let lights = "";
    for (let x = 6; x < 400; x += 22) lights += '<circle class="bl bl' + (x % 3 + 1) + '" cx="' + x + '" cy="' + (96 + (x * 7) % 10) + '" r="1.8" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#f4)"/>' + stars(16) +
      '<circle cx="330" cy="40" r="14" fill="#f4ead8"/>' +
      '<path d="M0 104q60-14 120-6t140-4 140 6v8H0z" fill="#1d2a24"/>' + lights +
      '<rect x="0" y="110" width="400" height="60" fill="#14324a"/>' +
      '<g transform="translate(0,128)"><g class="wv">' + waves + '</g></g><g transform="translate(0,150)"><g class="wv">' + waves + '</g></g>' +
      '<rect x="0" y="170" width="400" height="6" fill="#8a8c90"/>' + [20, 80, 140, 200, 260, 320, 380].map(x => '<rect x="' + (x - 1) + '" y="158" width="2" height="12" fill="#8a8c90"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#3c3e44"/>' +
      (() => { let d = ""; for (let x = 0; x < 400; x += 30) d += '<rect x="' + x + '" y="216" width="16" height="3" fill="#f4f4f4"/>'; return d; })() +
      [40, 200, 360].map(x => '<rect x="' + (x - 2) + '" y="120" width="4" height="56" fill="#55575c"/><circle class="flk" cx="' + x + '" cy="118" r="5" fill="#fff3c4"/>').join("") +
      '<g class="back"><rect x="0" y="186" width="40" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="199" r="4" fill="#111"/><circle cx="30" cy="199" r="4" fill="#111"/><circle cx="1" cy="192" r="2" fill="#fff6c2"/></g>' +
      '<g class="slow"><path d="M0 236q4-16 30-18l18-10h30l20 10q16 2 18 18z" fill="#c9d1d9" stroke="#8a929a" stroke-width="1.5"/><path d="M52 210h22l14 8H44z" fill="#2a3442"/>' +
        '<circle cx="24" cy="238" r="8" fill="#111"/><circle cx="96" cy="238" r="8" fill="#111"/><circle cx="24" cy="238" r="3" fill="#aaa"/><circle cx="96" cy="238" r="3" fill="#aaa"/><circle cx="114" cy="226" r="3" fill="#fff6c2"/></g>' +
      '<rect x="286" y="236" width="104" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="338" y="250.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">FDR Drive</text>' +
      tag("SLOW LIKE WHOA", 100, 254, 18, SKY, -2),
      sky("f4", "#05070f", "#1b2440"));
  }

  /* 5. E 115 St & 1 Av, Robert "Black Rob" Ross Way: green street signs, a wall tagged BLACK ROB, and the tan bell tower of Our Lady of Mount Carmel behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) +
      /* the church: tan brick front with the round rose window, the tall bell tower beside it */
      '<rect x="60" y="74" width="120" height="110" fill="#c8a982"/><path d="M60 74l60-34 60 34z" fill="#b8956b"/><circle cx="120" cy="104" r="16" fill="#3a3550" stroke="#e9dcc2" stroke-width="3"/>' +
      '<path d="M120 88v32M104 104h32" stroke="#e9dcc2" stroke-width="2"/>' +
      '<rect x="182" y="20" width="44" height="164" fill="#c2a27a"/><path d="M182 20l22-18 22 18z" fill="#9c7c55"/>' +
      '<path d="M192 40v-6q12-12 24 0v30h-24z" fill="#2a2638"/><path class="bell" d="M198 42q6-4 12 0v10h-12z" fill="' + GOLD + '"/>' +
      '<rect x="194" y="80" width="20" height="26" fill="#3a3550"/><rect x="194" y="116" width="20" height="26" fill="#3a3550"/>' +
      /* towers of the houses to the right */
      tower(240, 50, 60, 134, "#7d3b2b", true) +
      /* tag wall */
      '<rect x="0" y="150" width="300" height="78" fill="#4d4b52"/>' +
      (() => { let b = ""; for (let y = 156; y < 228; y += 8) b += '<path d="M0 ' + y + 'h300" stroke="#3f3d44" stroke-width="1"/>'; return b; })() +
      tag("BLACK ROB", 10, 206, 42, SKY, -5) + tag("WHOA!", 196, 224, 26, GOLD, -6) + tag("ALUMNI", 14, 168, 14, CREAM, -3) +
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="376" y="58" width="5" height="170" fill="#3d4b3f"/><circle class="flk" cx="378" cy="58" r="4" fill="#fff6c2"/>' +
      blade(250, 68, 148, 'Robert "Black Rob" Ross Way', 9) + blade(304, 92, 94, "E 115 St") + blade(304, 116, 94, "1 Av"),
      sky("c5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { station: station, houses: houses, park: park, fdr: fdr, corner: corner };
})();
