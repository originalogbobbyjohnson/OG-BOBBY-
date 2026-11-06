/* Red Cafe game (NYC map, Brooklyn: Flatbush; born in Georgetown, Guyana, moved to Flatbush at six).
   1. The B41 pulling up to the bus stop at Flatbush Av & Linden Blvd (every subway stop around here is already somebody's), shops lit up behind.
   2. Stabroek Market, Georgetown, Guyana: the iron market hall and its clock tower by the Demerara River, a boat on the water.
   3. Paris ("Paris, Tokyo"): the Arc de Triomphe at night, car lights streaming around it.
   4. Tokyo ("Paris, Tokyo"): the scramble crossing at night, glowing screens, the crowd crossing every way at once.
   5. Flatbush Av & Church Av: green street signs, the wall tagged RED CAFE, the old Flatbush Reformed Church and its steeple behind.
   CSS classes prefixed "rc-". No logos, no faces. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rccars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.rc-car{animation:rccars 7s linear infinite}.rc-car2{animation-delay:-3.5s}' +
    '@keyframes rccarsl{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.rc-carl{animation:rccarsl 6s linear infinite}' +
    '@keyframes rcblink{0%,100%{opacity:.25}50%{opacity:1}}.rc-bl{animation:rcblink 1.6s ease-in-out infinite}.rc-bl2{animation-delay:.5s}.rc-bl3{animation-delay:1s}' +
    '@keyframes rcflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.rc-flk{animation:rcflick 2.4s infinite}' +
    '@keyframes rcbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.rc-boat{animation:rcbob 1.8s ease-in-out infinite}' +
    '@keyframes rcdrift{from{transform:translateX(0)}to{transform:translateX(-60px)}}.rc-wave{animation:rcdrift 4s linear infinite}' +
    '@keyframes rcstreak{from{stroke-dashoffset:0}to{stroke-dashoffset:-120}}.rc-streak{animation:rcstreak 1.4s linear infinite}' +
    '@keyframes rcwalk{from{transform:translate(0,0)}to{transform:translate(140px,40px)}}.rc-walk{animation:rcwalk 5s linear infinite}' +
    '@keyframes rcwalk2{from{transform:translate(0,0)}to{transform:translate(-140px,40px)}}.rc-walk2{animation:rcwalk2 5.5s linear infinite}' +
    '@keyframes rcwalk3{from{transform:translateX(0)}to{transform:translateX(160px)}}.rc-walk3{animation:rcwalk3 6s linear infinite}' +
    '@keyframes rcglow{0%,100%{opacity:.75}50%{opacity:1}}.rc-glow{animation:rcglow 1.2s ease-in-out infinite}.rc-glow2{animation-delay:.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#e63946", GOLD = "#f4c430", GRN = "#009e49", CREAM = "#f4ead8", MTA = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + col + '"/><rect x="' + (x - 5) + '" y="' + (y + 6) + '" width="10" height="16" rx="4" fill="' + col + '"/></g>';

  /* 1. The B41 bus stop at Flatbush Av & Linden Blvd: the blue-and-white bus pulls in, the stop pole with the B41 sign, the shop row lit up behind */
  function busstop() {
    const shop = (x, w, col, aw, sign) => '<rect x="' + x + '" y="70" width="' + w + '" height="110" fill="' + col + '"/>' +
      [0, 1].map(r => '<rect x="' + (x + 8) + '" y="' + (78 + r * 22) + '" width="' + (w - 16) + '" height="14" fill="#ffe2a0" opacity=".55" class="rc-bl rc-bl' + (r + 1) + '"/>').join("") +
      '<rect x="' + (x + 2) + '" y="124" width="' + (w - 4) + '" height="14" fill="#1b1b1b"/>' + txt(sign, x + w / 2, 135, 9, GOLD) +
      '<path d="M' + x + ' 140h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + aw + '"/><rect x="' + (x + 6) + '" y="152" width="' + (w - 12) + '" height="28" fill="#cfe2f5" opacity=".7"/>';
    let win = "";
    for (let x = 48; x < 250; x += 30) win += '<rect x="' + x + '" y="156" width="22" height="18" rx="2" fill="#bcd8f0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rcs1)"/>' + stars(12) +
      shop(0, 92, "#7a3b2e", RED, "ROTI SHOP") + shop(94, 96, "#c9b48a", GRN, "BAKERY") + shop(192, 100, "#5a4a6a", GOLD, "RECORDS") + shop(294, 106, "#8a5a3a", "#1a4fa0", "BARBER") +
      '<rect x="0" y="180" width="400" height="16" fill="#9a958c"/><rect x="0" y="196" width="400" height="64" fill="#3f4146"/>' +
      '<path d="M0 238h400" stroke="#e9e3c8" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="30" y="146" width="250" height="64" rx="8" fill="#f2f2f2" stroke="#7d828a" stroke-width="2"/>' +
        '<rect x="30" y="186" width="250" height="10" fill="' + MTA + '"/>' + win +
        '<rect x="258" y="152" width="18" height="36" rx="3" fill="#2d3a4a"/>' +
        '<rect x="200" y="148" width="74" height="7" fill="#111"/><text x="237" y="154" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">B41 FLATBUSH AV</text>' +
        '<circle cx="70" cy="212" r="10" fill="#111"/><circle cx="70" cy="212" r="4" fill="#888"/><circle cx="240" cy="212" r="10" fill="#111"/><circle cx="240" cy="212" r="4" fill="#888"/>' +
        '<circle cx="276" cy="200" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* the stop pole with the sign */
      '<rect x="368" y="60" width="5" height="136" fill="#8a8c90"/>' +
      '<rect x="344" y="20" width="54" height="40" rx="3" fill="#fff" stroke="' + MTA + '" stroke-width="2"/><rect x="344" y="20" width="54" height="10" fill="' + MTA + '"/>' +
      txt("BUS STOP", 371, 28, 7, "#fff") + '<rect x="352" y="36" width="38" height="16" rx="3" fill="' + MTA + '"/>' + txt("B41", 371, 48, 12, "#fff") +
      /* the stop sign board */
      '<rect x="20" y="30" width="210" height="28" rx="3" fill="#111"/><rect x="20" y="30" width="210" height="3" fill="#fff"/>' +
      '<text x="30" y="50" ' + font + ' font-size="13" fill="#fff">Flatbush Av / Linden Blvd</text>' +
      txt("FLATBUSH · BROOKLYN", 200, 252, 10, CREAM, 'letter-spacing="3"'),
      sky("rcs1", "#140c22", "#5a2a3a"));
  }

  /* 2. Stabroek Market, Georgetown: the silver-gray iron market hall with its red roofs and the clock tower, the Demerara River in front, a boat bobbing */
  function stabroek() {
    let arches = "";
    for (let x = 34; x < 370; x += 28) arches += '<path d="M' + x + ' 166v-22a10 10 0 0 1 20 0v22z" fill="#4a5058"/>';
    let ribs = "";
    for (let x = 30; x < 376; x += 14) ribs += '<path d="M' + x + ' 118v48" stroke="#8d949c" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rcs2)"/>' +
      '<circle cx="340" cy="40" r="18" fill="#ffe08a" opacity=".9"/>' +
      /* palms */
      [[14, 170], [384, 170]].map(([x, y]) => '<path d="M' + x + ' ' + y + 'q4 -40 0 -78" stroke="#4a3a2a" stroke-width="5" fill="none"/>' +
        '<path d="M' + x + ' ' + (y - 78) + 'q-20 -6 -26 8M' + x + ' ' + (y - 78) + 'q20 -6 26 8M' + x + ' ' + (y - 78) + 'q-10 -16 -20 -14M' + x + ' ' + (y - 78) + 'q10 -16 20 -14" stroke="#2f6b3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") +
      /* the market hall */
      '<path d="M26 118l30 -20h288l30 20z" fill="#b5352b"/><path d="M26 118h348" stroke="#7a1f18" stroke-width="3"/>' +
      '<rect x="26" y="118" width="348" height="48" fill="#b9bfc6"/>' + ribs + arches +
      '<rect x="26" y="116" width="348" height="4" fill="#d6dbe0"/><rect x="120" y="124" width="160" height="16" fill="#e4e7ea" stroke="#6f767e" stroke-width="1"/>' +
      /* the clock tower */
      '<rect x="176" y="40" width="48" height="80" fill="#c4cad0" stroke="#6f767e" stroke-width="2"/>' +
      '<path d="M170 42l30 -26l30 26z" fill="#b5352b"/><path d="M200 16v-10" stroke="#555" stroke-width="2"/>' +
      '<circle cx="200" cy="66" r="15" fill="#f8f4e8" stroke="#3a3a3a" stroke-width="2"/>' +
      '<path d="M200 66v-10M200 66l7 4" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      [184, 196, 208].map(x => '<rect x="' + x + '" y="88" width="8" height="24" fill="#6f767e"/>').join("") +
      txt("STABROEK MARKET", 200, 136, 11, "#2a2f36", 'letter-spacing="2"') +
      /* wharf + river */
      '<rect x="0" y="166" width="400" height="10" fill="#7a6a52"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#7a5a3a"/>' +
      '<g class="rc-wave">' + [0, 1, 2].map(r => '<path d="M0 ' + (194 + r * 20) + 'q15 -5 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" stroke="#a88a62" stroke-width="2" fill="none" opacity=".7"/>').join("") + '</g>' +
      /* the boat, Guyana colors on the bow */
      '<g class="rc-boat"><path d="M110 210h90l-12 16h-70z" fill="#f4f4f4" stroke="#333" stroke-width="1.5"/>' +
        '<path d="M184 212l12 -2l-8 10z" fill="' + GRN + '"/><path d="M186 213l8 -1.5l-5 6z" fill="' + GOLD + '"/><path d="M188 214l4 -1l-2.5 3z" fill="' + RED + '"/>' +
        '<rect x="132" y="196" width="34" height="14" fill="#2a6fa0"/><path d="M128 196h42" stroke="#333" stroke-width="2"/></g>' +
      txt("GEORGETOWN, GUYANA", 300, 248, 11, CREAM, 'letter-spacing="2"'),
      sky("rcs2", "#5fa8d8", "#f2d7a8"));
  }

  /* 3. Paris at night: the Arc de Triomphe glowing pale gold, car lights streaming around the circle, the avenue stretching out */
  function paris() {
    let blocks = "";
    for (let y = 92; y < 168; y += 14) blocks += '<path d="M118 ' + y + 'h164" stroke="#c9b48a" stroke-width="1" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rcs3)"/>' + stars(18) +
      /* buildings either side */
      '<rect x="0" y="120" width="96" height="70" fill="#2a2440"/><rect x="304" y="120" width="96" height="70" fill="#2a2440"/>' +
      [10, 30, 50, 70, 314, 334, 354, 374].map((x, i) => '<rect class="rc-bl rc-bl' + (i % 3 + 1) + '" x="' + x + '" y="134" width="10" height="14" fill="#ffd98a" opacity=".7"/><rect x="' + x + '" y="158" width="10" height="14" fill="#ffd98a" opacity=".5"/>').join("") +
      /* the arch */
      '<rect x="112" y="58" width="176" height="20" fill="#e6d3a8"/><rect x="108" y="78" width="184" height="10" fill="#d9c493"/>' +
      '<path d="M118 88h164v102h-46v-56a36 36 0 0 0 -72 0v56h-46z" fill="#ead8ae"/>' + blocks +
      '<path d="M164 190v-56a36 36 0 0 1 72 0v56z" fill="#1a1630"/>' +
      '<rect x="126" y="112" width="26" height="40" fill="#d9c493" opacity=".7"/><rect x="248" y="112" width="26" height="40" fill="#d9c493" opacity=".7"/>' +
      '<rect x="112" y="64" width="176" height="4" fill="#c9b48a"/>' +
      /* the flag inside the arch */
      '<rect x="190" y="132" width="7" height="12" fill="#1a4fa0"/><rect x="197" y="132" width="7" height="12" fill="#fff"/><rect x="204" y="132" width="7" height="12" fill="#e63946"/>' +
      /* the circle with light trails */
      '<rect x="0" y="190" width="400" height="70" fill="#25232c"/>' +
      '<ellipse cx="200" cy="214" rx="190" ry="20" fill="none" stroke="#fff3c0" stroke-width="3" stroke-dasharray="40 80" class="rc-streak"/>' +
      '<ellipse cx="200" cy="222" rx="170" ry="16" fill="none" stroke="#ff5a4a" stroke-width="3" stroke-dasharray="30 90" class="rc-streak" style="animation-duration:1.9s"/>' +
      '<ellipse cx="200" cy="232" rx="196" ry="18" fill="none" stroke="#fff3c0" stroke-width="2" stroke-dasharray="20 100" class="rc-streak" style="animation-duration:1.1s"/>' +
      txt("PARIS", 200, 30, 20, GOLD, 'letter-spacing="8"'),
      sky("rcs3", "#0c0a22", "#3a2a5a"));
  }

  /* 4. Tokyo at night: the scramble crossing, glowing screens on the towers, the crowd crossing every way at once */
  function tokyo() {
    let zebra = "";
    for (let i = 0; i < 10; i++) zebra += '<rect x="' + (20 + i * 38) + '" y="196" width="22" height="50" fill="#e8e8e8" opacity=".85" transform="skewX(-14)"/>';
    let diag = "";
    for (let i = 0; i < 8; i++) diag += '<rect x="' + (120 + i * 20) + '" y="168" width="10" height="26" fill="#e8e8e8" opacity=".6" transform="rotate(-30 ' + (125 + i * 20) + ' 181)"/>';
    const crowd = (cls, x0, y0, n, cols) => { let g = '<g class="' + cls + '">'; for (let i = 0; i < n; i++) g += person(x0 + (i % 4) * 14, y0 + Math.floor(i / 4) * 12, cols[i % cols.length]); return g + '</g>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#rcs4)"/>' +
      /* towers with screens */
      '<rect x="0" y="30" width="110" height="140" fill="#1b1a2a"/><rect x="290" y="20" width="110" height="150" fill="#1d1b2e"/><rect x="130" y="60" width="140" height="110" fill="#171626"/>' +
      '<rect class="rc-glow" x="12" y="44" width="86" height="54" rx="3" fill="#ff3d7f"/><rect x="18" y="50" width="74" height="42" rx="2" fill="#ff7aa8" opacity=".6"/>' +
      '<rect class="rc-glow rc-glow2" x="302" y="34" width="86" height="62" rx="3" fill="#36c5f0"/><rect x="308" y="40" width="74" height="50" rx="2" fill="#a6e8ff" opacity=".5"/>' +
      '<rect class="rc-glow" x="146" y="72" width="108" height="36" rx="3" fill="' + GOLD + '"/>' + txt("TOKYO", 200, 97, 20, "#1a1626", 'letter-spacing="6"') +
      [[12, 110], [40, 110], [68, 110], [302, 108], [330, 108], [358, 108]].map(([x, y], i) => '<rect class="rc-glow' + (i % 2 ? " rc-glow2" : "") + '" x="' + x + '" y="' + y + '" width="22" height="50" rx="2" fill="' + ["#7af0a0", RED, "#b48cf0"][i % 3] + '" opacity=".85"/>').join("") +
      [150, 172, 194, 216, 238].map((x, i) => '<rect class="rc-bl rc-bl' + (i % 3 + 1) + '" x="' + x + '" y="120" width="12" height="40" fill="#ffd98a" opacity=".6"/>').join("") +
      /* the crossing */
      '<rect x="0" y="170" width="400" height="90" fill="#2b2a33"/>' + zebra + diag +
      crowd("rc-walk", 40, 176, 8, ["#0e0e14", "#2a2a3a", "#e63946"]) +
      crowd("rc-walk2", 300, 176, 8, ["#0e0e14", "#2a2a3a", "#36c5f0"]) +
      crowd("rc-walk3", 10, 214, 8, ["#0e0e14", "#f4c430", "#2a2a3a"]),
      sky("rcs4", "#08071a", "#2a1a3a"));
  }

  /* 5. Flatbush Av & Church Av: green street signs, the wall tagged RED CAFE, the Flatbush Reformed Church's stone tower and white steeple behind */
  function corner() {
    let stone = "";
    for (let y = 70; y < 130; y += 8) for (let x = (y / 8) % 2 ? 120 : 126; x < 210; x += 12) stone += '<rect x="' + x + '" y="' + y + '" width="10" height="6" fill="#6f6a60"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rcs5)"/>' + stars(14) +
      /* trees */
      '<circle cx="40" cy="104" r="34" fill="#1f3a26"/><circle cx="270" cy="108" r="32" fill="#1f3a26"/>' +
      /* the church: stone body + tower, white wooden belfry and spire, the clock */
      '<rect x="210" y="84" width="60" height="46" fill="#7e786c"/><path d="M206 86l34 -20l34 20z" fill="#5a554c"/>' +
      '<rect x="118" y="66" width="94" height="64" fill="#7e786c"/>' + stone +
      '<path d="M140 130v-30a10 10 0 0 1 20 0v30z" fill="#2a2620"/><path d="M178 112v-14a7 7 0 0 1 14 0v14z" fill="#ffe2a0" opacity=".7" class="rc-flk"/>' +
      '<rect x="146" y="20" width="38" height="48" fill="#f2efe6"/><circle cx="165" cy="36" r="9" fill="#fff" stroke="#333" stroke-width="1.5"/><path d="M165 36v-6M165 36l4 2" stroke="#222" stroke-width="1.5"/>' +
      '<path d="M150 52v12M158 52v12M166 52v12M174 52v12M180 52v12" stroke="#c9c4b4" stroke-width="2"/>' +
      '<path d="M144 20l21 -18l21 18z" fill="#f2efe6"/><path d="M165 2v-2" stroke="#d4af37" stroke-width="2"/>' +
      txt("FLATBUSH REFORMED CHURCH", 165, 142, 7, CREAM, 'letter-spacing="1" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#3d3a3a"/>' +
      (() => { let b = ""; for (let y = 156; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#333030" stroke-width="1"/>'; return b; })() +
      tag("RED CAFE", 16, 204, 46, RED, -5) + tag("SHAKEDOWN", 224, 220, 18, GOLD, -4) + tag("WHAT ELSE", 30, 224, 13, GRN, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="rc-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="292" y="66" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Flatbush Av", 344, 82, 12, "#fff") +
      '<rect x="292" y="92" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Church Av", 344, 108, 12, "#fff") +
      '<circle class="rc-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("rcs5", "#0a0c1a", "#2c2a3a"));
  }

  window.SCENES = { busstop: busstop, stabroek: stabroek, paris: paris, tokyo: tokyo, corner: corner };
})();
