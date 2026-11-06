/* A$AP Twelvyy game (NYC map, Manhattan: Harlem, born at Harlem Hospital, first lived on W 129 St by St. Nicholas Park, then Lenox Av and W 127 St).
   Rooms: the M102 pulling up at Malcolm X Blvd & W 129 St, St. Nicholas Park's schist cliffs and stone stairs (his first block),
   Harlem Stage in the old stone gatehouse on W 135 St (the "castle" up the hill), Mount Olivet Baptist Church on Malcolm X Blvd
   (the old Temple Israel, a comic-book filming spot for the nerd of the Mob), and his corner, Malcolm X Blvd & W 127 St.
   400 x 260 SVGs. All animation classes are prefixed tw- so they never clash with the game's own classes. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes twdrive{from{transform:translateX(-330px)}to{transform:translateX(0)}}' +
    '@keyframes twcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.tw-car{animation:twcar 8s linear infinite}.tw-car2{animation-delay:-4s}' +
    '@keyframes twcarL{from{transform:translateX(480px)}to{transform:translateX(-120px)}}.tw-carL{animation:twcarL 9s linear infinite}' +
    '@keyframes twleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(40px,200px) rotate(320deg);opacity:0}}.tw-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:twleaf 5s linear infinite}.tw-l2{animation-delay:-1.6s}.tw-l3{animation-delay:-3.2s}.tw-l4{animation-delay:-2.4s}' +
    '@keyframes twblink{0%,100%{opacity:.25}50%{opacity:1}}.tw-bl{animation:twblink 1.6s ease-in-out infinite}.tw-bl2{animation-delay:.5s}.tw-bl3{animation-delay:1s}' +
    '@keyframes twsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.tw-beam{transform-box:fill-box;transform-origin:50% 100%;animation:twsweep 3.4s ease-in-out infinite}.tw-beam2{animation-delay:-1.7s}' +
    '@keyframes twwalk{0%{transform:translate(0,0)}100%{transform:translate(-120px,84px)}}.tw-walk{animation:twwalk 7s linear infinite}' +
    '@keyframes twbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,4px)}}.tw-bird{animation:twbird 10s linear infinite}.tw-bird2{animation-delay:-5s}' +
    '@keyframes twflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.tw-flap{transform-box:fill-box;transform-origin:50% 50%;animation:twflap .5s ease-in-out infinite}' +
    '@keyframes twsun{0%,100%{opacity:.55}50%{opacity:.95}}.tw-sun{animation:twsun 3s ease-in-out infinite}' +
    '@keyframes twdrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(14px);opacity:0}}.tw-drip{animation:twdrip 2.2s ease-in infinite}' +
    '@keyframes twbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.tw-bob{animation:twbob 1.6s ease-in-out infinite}.tw-bob2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const GOLD = "#ffb703", TEAL = "#2ec4b6", RED = "#e63946", CREAM = "#f4ead8", MTA = "#0039a6";
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + col + '"/><rect x="' + (x - 5) + '" y="' + (y + 6) + '" width="10" height="17" rx="4" fill="' + col + '"/></g>';
  const brownstones = (y, cols, h) => {
    let s = "";
    cols.forEach((c, i) => {
      const x = i * 58;
      s += '<rect x="' + x + '" y="' + y + '" width="58" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (y - 6) + '" width="58" height="8" fill="#3a2a22"/>';
      for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) s += '<rect x="' + (x + 8 + k * 16) + '" y="' + (y + 10 + r * 26) + '" width="10" height="16" rx="1" fill="' + ((r + k + i) % 4 ? "#2a2f3a" : "#ffd98a") + '"/>';
    });
    return s;
  };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* an MTA bus route plate (blue), used on the bus-stop flag */
  const plate = (x, y, t) => '<rect x="' + x + '" y="' + y + '" width="40" height="15" rx="2" fill="' + MTA + '"/>' + txt(t, x + 20, y + 11.5, 10, "#fff");

  /* 1. Malcolm X Blvd & W 129 St: the uptown M102 pulls up at the stop, Lenox Av brownstones and the tree median behind */
  function busstop() {
    let trees = "";
    [40, 130, 220, 310].forEach((x, i) => trees += '<rect x="' + (x - 2) + '" y="128" width="4" height="22" fill="#4a3220"/><circle class="tw-bob' + (i % 2 ? " tw-bob2" : "") + '" cx="' + x + '" cy="122" r="16" fill="#3f7d3a"/>');
    let win = "";
    for (let x = 18; x < 250; x += 30) win += '<rect x="' + x + '" y="166" width="22" height="18" rx="2" fill="#16202c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#twb)"/><circle class="tw-sun" cx="340" cy="34" r="18" fill="#fff2b0"/>' +
      brownstones(52, ["#7a4a34", "#8a5640", "#6e4230", "#93604a", "#7a4a34", "#8a5640", "#6e4230"], 100) +
      '<rect x="0" y="146" width="400" height="10" fill="#9a9488"/>' + trees +
      /* black name sign over the stop */
      '<rect x="92" y="10" width="216" height="26" rx="3" fill="#111"/><rect x="92" y="10" width="216" height="3" fill="#fff"/>' +
      txt("MALCOLM X BLVD / W 129 ST", 200, 29, 12, "#fff") +
      /* street */
      '<rect x="0" y="200" width="400" height="60" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="150" width="400" height="50" fill="#b7b1a4"/><rect x="0" y="196" width="400" height="5" fill="#d8d2c4"/>' +
      /* the bus (white, blue stripe) sliding in */
      '<g class="anim-train"><g>' +
      '<rect x="8" y="150" width="260" height="56" rx="8" fill="#f2f3f5" stroke="#8a8f99" stroke-width="2"/>' +
      '<rect x="8" y="188" width="260" height="7" fill="' + MTA + '"/>' + win +
      '<rect x="244" y="158" width="20" height="30" rx="3" fill="#16202c"/>' +
      '<rect x="22" y="154" width="64" height="10" rx="2" fill="#111"/><text x="54" y="162" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="8" fill="#ffb703">M102 HARLEM</text>' +
      '<circle cx="54" cy="208" r="10" fill="#111"/><circle cx="54" cy="208" r="4" fill="#777"/><circle cx="222" cy="208" r="10" fill="#111"/><circle cx="222" cy="208" r="4" fill="#777"/>' +
      '<circle cx="264" cy="194" r="3" fill="#fff6c2"/></g></g>' +
      /* bus stop flag with both routes */
      '<rect x="320" y="104" width="4" height="96" fill="#5b6470"/>' +
      '<rect x="300" y="100" width="64" height="58" rx="3" fill="#fff" stroke="' + MTA + '" stroke-width="2"/>' +
      '<rect x="300" y="100" width="64" height="14" fill="' + MTA + '"/>' + txt("BUS STOP", 332, 111, 8, "#fff") +
      plate(312, 118, "M102") + plate(312, 137, "M7") +
      '<rect x="330" y="160" width="46" height="36" rx="2" fill="#c9d6e3" opacity=".55" stroke="#8a97a6"/>' +
      person(352, 168, "#2d3a4a") + tag("TWELVYY", 132, 96, 20, GOLD, -4),
      sky("twb", "#5aa7e6", "#cfe6f5"));
  }

  /* 2. St. Nicholas Park: grey Manhattan schist cliff, the long stone stairs, park lamps, leaves falling */
  function park() {
    let leaves = "";
    [[60, 40, "tw-l2"], [150, 20, ""], [250, 30, "tw-l3"], [330, 10, "tw-l4"], [200, 50, "tw-l2"]].forEach(l => leaves += '<ellipse class="tw-leaf ' + l[2] + '" cx="' + l[0] + '" cy="' + l[1] + '" rx="4" ry="2.4" fill="' + (l[0] % 3 ? GOLD : "#d9792b") + '"/>');
    let rows = "";
    for (let x = 0; x < 400; x += 46) rows += '<rect x="' + x + '" y="18" width="44" height="30" fill="' + (x % 92 ? "#8a5640" : "#7a4a34") + '"/><rect x="' + (x + 6) + '" y="24" width="8" height="10" fill="#ffd98a"/><rect x="' + (x + 26) + '" y="24" width="8" height="10" fill="#2a2f3a"/>';
    let stairs = "";
    for (let i = 0; i < 9; i++) stairs += '<rect x="' + (150 + i * 10) + '" y="' + (70 + i * 14) + '" width="40" height="5" fill="#c9c3b6"/>';
    for (let i = 0; i < 6; i++) stairs += '<rect x="' + (250 - i * 10) + '" y="' + (196 + i * 7) + '" width="40" height="4" fill="#c9c3b6"/>';
    const lamp = x => '<rect x="' + x + '" y="120" width="3" height="80" fill="#1e2a22"/><circle class="tw-bl" cx="' + (x + 1.5) + '" cy="118" r="5" fill="#fff6c2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#twp)"/>' + rows +
      '<rect x="0" y="46" width="400" height="6" fill="#4a3a30"/>' +
      /* schist cliff */
      '<path d="M0 60l40 6 30-4 40 10 30-6 40 14 40-4 40 12 40-8 40 10 40-6v206H0z" fill="#6f7378"/>' +
      '<path d="M0 90l50 10 40-6 50 16M220 100l60 14 50-8 70 12M20 150l60 8 50-10M260 160l70 10 70-6" stroke="#53575c" stroke-width="3" fill="none"/>' +
      '<path d="M90 120l20 6M300 130l24 4M40 200l30 4M330 210l26-4" stroke="#8d9196" stroke-width="2"/>' +
      /* trees on the slope */
      '<circle cx="40" cy="96" r="26" fill="#3f7d3a"/><circle cx="96" cy="150" r="30" fill="#4b8a3f"/><circle cx="330" cy="104" r="28" fill="#3f7d3a"/><circle cx="370" cy="170" r="30" fill="#c27c2c"/><circle cx="20" cy="200" r="26" fill="#d9792b"/>' +
      /* stone stair with iron rail */
      '<path d="M150 70l90 126l-60 42" stroke="#9c958a" stroke-width="44" fill="none" stroke-linejoin="round" opacity=".55"/>' + stairs +
      '<path d="M146 64l94 128l-62 44" stroke="#22282a" stroke-width="2" fill="none"/>' +
      lamp(120) + lamp(286) +
      '<g class="tw-walk">' + person(230, 160, "#e63946") + '</g>' +
      '<rect x="0" y="238" width="400" height="22" fill="#4a5a3a"/>' + leaves +
      '<rect x="12" y="214" width="122" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("ST. NICHOLAS PARK", 73, 228, 10, "#fff"),
      sky("twp", "#87c2ea", "#e3f0f8"));
  }

  /* 3. Harlem Stage: the 1890 stone gatehouse on W 135 St, rough grey granite with brownstone arches, spotlights at night */
  function stage() {
    let blocks = "";
    for (let y = 96; y < 214; y += 10) for (let x = (y / 10) % 2 ? 70 : 82; x < 330; x += 24) blocks += '<rect x="' + x + '" y="' + y + '" width="22" height="9" fill="' + ((x + y) % 3 ? "#8b8a86" : "#9a9892") + '"/>';
    const arch = (x, w, y, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0v' + (h - w / 2) + 'z" fill="#1d1a24" stroke="#7a4a34" stroke-width="5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tws)"/>' + stars(22) +
      '<g opacity=".35"><path class="tw-beam" d="M110 220l-34-210h28z" fill="#fff4c4"/><path class="tw-beam tw-beam2" d="M290 220l6-210h28z" fill="#bff3ee"/></g>' +
      /* body */
      '<rect x="70" y="92" width="260" height="122" fill="#8b8a86"/>' + blocks +
      /* hipped roof + corner turret caps */
      '<path d="M60 94l40-34h200l40 34z" fill="#5a3a2c"/><rect x="60" y="88" width="280" height="8" fill="#7a4a34"/>' +
      '<rect x="50" y="80" width="30" height="134" fill="#7d7c78"/><path d="M46 82l19-24 19 24z" fill="#5a3a2c"/>' +
      '<rect x="320" y="80" width="30" height="134" fill="#7d7c78"/><path d="M316 82l19-24 19 24z" fill="#5a3a2c"/>' +
      arch(110, 34, 120, 70) + arch(183, 34, 108, 106) + arch(256, 34, 120, 70) +
      '<rect x="183" y="170" width="34" height="44" fill="#a82a2a"/><path d="M200 170v44" stroke="#5a1414" stroke-width="2"/>' +
      '<rect class="tw-bl" x="116" y="150" width="22" height="20" fill="#ffd98a" opacity=".8"/><rect class="tw-bl tw-bl2" x="262" y="150" width="22" height="20" fill="#ffd98a" opacity=".8"/>' +
      /* banner */
      '<rect x="124" y="72" width="152" height="18" rx="2" fill="#111"/>' + txt("HARLEM STAGE", 200, 85, 11, GOLD, 'letter-spacing="2"') +
      '<circle class="tw-bl" cx="132" cy="81" r="2.5" fill="' + TEAL + '"/><circle class="tw-bl tw-bl3" cx="268" cy="81" r="2.5" fill="' + TEAL + '"/>' +
      /* sidewalk + people heading in */
      '<rect x="0" y="214" width="400" height="46" fill="#4e4a46"/><rect x="0" y="214" width="400" height="5" fill="#6a6560"/>' +
      person(160, 222, "#2ec4b6") + person(240, 222, "#ffb703") + person(268, 224, "#e63946") +
      '<g class="tw-carL"><rect x="0" y="240" width="46" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>',
      sky("tws", "#0d0b1e", "#3a2c4e"));
  }

  /* 4. Mount Olivet Baptist Church, Malcolm X Blvd at W 120 St: the old Temple Israel, pale stone temple front with four columns */
  function olivet() {
    let cols = "";
    [118, 166, 214, 262].forEach(x => cols += '<rect x="' + x + '" y="98" width="20" height="104" fill="#e9e4d6"/><path d="M' + (x + 4) + ' 100v100M' + (x + 10) + ' 100v100M' + (x + 16) + ' 100v100" stroke="#cfc8b6" stroke-width="1"/>' +
      '<rect x="' + (x - 4) + '" y="90" width="28" height="10" fill="#d9d2c0"/><path d="M' + (x - 4) + ' 90q14-10 28 0" fill="#e9e4d6" stroke="#bdb5a2"/><rect x="' + (x - 3) + '" y="200" width="26" height="6" fill="#d9d2c0"/>');
    let steps = "";
    for (let i = 0; i < 5; i++) steps += '<rect x="' + (92 - i * 8) + '" y="' + (206 + i * 6) + '" width="' + (216 + i * 16) + '" height="6" fill="' + (i % 2 ? "#cfc8b6" : "#ddd6c4") + '"/>';
    let birds = "";
    [[0, 40, ""], [0, 58, "tw-bird2"]].forEach(b => birds += '<g class="tw-bird ' + b[2] + '"><path class="tw-flap" d="M' + b[0] + ' ' + b[1] + 'q6-6 12 0q6-6 12 0" stroke="#2a2f3a" stroke-width="2" fill="none"/></g>');
    return svg(
      '<rect width="400" height="260" fill="url(#two)"/><circle class="tw-sun" cx="60" cy="40" r="20" fill="#fff6c8"/>' + birds +
      brownstones(120, ["#8a5640", "#7a4a34"], 120) +
      '<g transform="translate(284 0)">' + brownstones(116, ["#6e4230", "#93604a"], 124) + '</g>' +
      /* temple body */
      '<rect x="96" y="70" width="208" height="140" fill="#d9d2c0"/>' +
      '<rect x="88" y="58" width="224" height="16" fill="#e9e4d6"/><rect x="88" y="74" width="224" height="6" fill="#bdb5a2"/><rect x="96" y="44" width="208" height="16" fill="#cfc8b6"/>' +
      '<rect x="138" y="128" width="28" height="74" fill="#3a2f2a"/><rect x="186" y="122" width="28" height="80" fill="#3a2f2a"/><rect x="234" y="128" width="28" height="74" fill="#3a2f2a"/>' +
      '<path d="M186 122a14 14 0 0 1 28 0" fill="#3a2f2a"/>' + cols + steps +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3d42"/>' +
      '<g class="tw-car"><rect x="0" y="240" width="48" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="38" cy="253" r="4" fill="#111"/></g>' +
      '<g class="tw-car tw-car2"><rect x="0" y="242" width="40" height="11" rx="4" fill="' + RED + '"/><circle cx="9" cy="253" r="3.5" fill="#111"/><circle cx="31" cy="253" r="3.5" fill="#111"/></g>' +
      person(200, 184, "#2d3a4a", "tw-bob"),
      sky("two", "#6fb3e8", "#d6ebf7"));
  }

  /* 5. His corner: Malcolm X Blvd & W 127 St, green street signs, TWELVYY tagged on the wall, the Lenox brownstone row and the noon sun behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#twc)"/><circle class="tw-sun" cx="200" cy="34" r="22" fill="#ffe08a"/>' +
      brownstones(40, ["#6e4230", "#93604a", "#7a4a34", "#8a5640", "#6e4230", "#93604a", "#7a4a34"], 96) +
      /* the wall */
      '<rect x="0" y="128" width="400" height="98" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; for (let y = 128; y < 226; y += 24) for (let x = (y % 48 ? 0 : 20); x < 400; x += 40) b += '<path d="M' + x + ' ' + y + 'v12" stroke="#33353b"/>'; return b; })() +
      tag("TWELVYY", 18, 196, 52, GOLD, -5) +
      '<rect class="tw-drip" x="74" y="198" width="3" height="8" fill="' + GOLD + '"/><rect class="tw-drip" x="168" y="194" width="3" height="8" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      tag("HI NOON", 222, 220, 20, TEAL, -4) + tag("TWO TWELVE", 30, 222, 15, CREAM, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="tw-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="60" width="5" height="168" fill="#3d4b3f"/>' +
      '<rect x="292" y="64" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Malcolm X Blvd", 344, 80, 11, "#fff") +
      '<rect x="292" y="90" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 127 St", 344, 106, 12, "#fff") +
      '<circle class="tw-bl" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("twc", "#4f9fe0", "#cde5f6"));
  }

  window.SCENES = { busstop: busstop, park: park, stage: stage, olivet: olivet, corner: corner };
})();
