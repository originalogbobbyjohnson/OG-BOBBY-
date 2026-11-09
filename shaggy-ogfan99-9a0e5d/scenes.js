/* Shaggy game (NYC map, Brooklyn: Flatbush; born in Kingston, Jamaica, came to Flatbush with his mother at 18).
   1. The B35 pulling up at Church Av & Rogers Av, the Caribbean heart of Flatbush (the nearby subway stops are all somebody's already).
   2. A Gibraltar Musik sound-system dance in Flatbush: the stacked speaker boxes, the selector's turntables, the crowd moving.
   3. Philip Smart's HC&F studio in Freeport, Long Island, where he cut his early tunes: the desk, the meters, a dubplate spinning on the lathe.
   4. Camp Lejeune, North Carolina: the Marine years, pines at night, the long drive north to New York for sessions.
   5. Church Av & Rogers Av: green street signs, the wall tagged SHAGGY, Holy Cross Church's Gothic steeple up Church Av behind.
   CSS classes prefixed "sg-". No logos, no faces. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sgthump{0%,100%{transform:scale(1)}50%{transform:scale(.82)}}.sg-cone{transform-box:fill-box;transform-origin:center;animation:sgthump .45s ease-in-out infinite}.sg-cone2{animation-delay:.22s}' +
    '@keyframes sgbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.sg-bob{animation:sgbob .9s ease-in-out infinite}.sg-bob2{animation-delay:.3s}.sg-bob3{animation-delay:.6s}' +
    '@keyframes sgblink{0%,100%{opacity:.3}50%{opacity:1}}.sg-bl{animation:sgblink 1.4s ease-in-out infinite}.sg-bl2{animation-delay:.45s}.sg-bl3{animation-delay:.9s}' +
    '@keyframes sgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sg-spin{transform-box:fill-box;transform-origin:center;animation:sgspin 1.8s linear infinite}' +
    '@keyframes sgvu{0%,100%{transform:scaleY(.35)}30%{transform:scaleY(1)}60%{transform:scaleY(.6)}}.sg-vu{transform-box:fill-box;transform-origin:bottom;animation:sgvu .7s ease-in-out infinite}.sg-vu2{animation-delay:.2s}.sg-vu3{animation-delay:.4s}.sg-vu4{animation-delay:.1s}' +
    '@keyframes sgdrive{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.sg-car{animation:sgdrive 6s linear infinite}' +
    '@keyframes sgcars{from{transform:translateX(480px)}to{transform:translateX(-90px)}}.sg-carl{animation:sgcars 7s linear infinite}' +
    '@keyframes sgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}.sg-flag{transform-box:fill-box;transform-origin:left;animation:sgflag 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd23f", GRN = "#1fa64a", BLK = "#111", MTA = "#0039a6", CREAM = "#f4ead8";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const dancer = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><path d="M' + (x - 7) + ' ' + (y + 9) + 'h14l3 24h-20z" fill="' + col + '"/>' +
    '<path d="M' + (x - 6) + ' ' + (y + 12) + 'l-9 -12M' + (x + 6) + ' ' + (y + 12) + 'l9 -12" stroke="' + col + '" stroke-width="4" stroke-linecap="round"/></g>';

  /* 1. The B35 bus at Church Av & Rogers Av */
  function sgbus() {
    const shop = (x, w, col, aw, sign) => '<rect x="' + x + '" y="72" width="' + w + '" height="108" fill="' + col + '"/>' +
      [0, 1].map(r => '<rect x="' + (x + 8) + '" y="' + (80 + r * 22) + '" width="' + (w - 16) + '" height="14" fill="#ffe2a0" opacity=".55" class="sg-bl sg-bl' + (r + 2) + '"/>').join("") +
      '<rect x="' + (x + 2) + '" y="124" width="' + (w - 4) + '" height="14" fill="#1b1b1b"/>' + txt(sign, x + w / 2, 135, 8.5, GOLD) +
      '<path d="M' + x + ' 140h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + aw + '"/><rect x="' + (x + 6) + '" y="152" width="' + (w - 12) + '" height="28" fill="#cfe2f5" opacity=".65"/>';
    let win = "";
    for (let x = 48; x < 250; x += 30) win += '<rect x="' + x + '" y="156" width="22" height="18" rx="2" fill="#bcd8f0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs1)"/>' + stars(12) +
      shop(0, 92, "#6b3a2a", GRN, "ROTI &amp; DOUBLES") + shop(94, 96, "#c9b48a", "#c8102e", "PATTY SHOP") + shop(192, 100, "#3a4a5a", GOLD, "RECORDS") + shop(294, 106, "#8a5a3a", GRN, "BAKERY") +
      '<rect x="0" y="180" width="400" height="16" fill="#9a958c"/><rect x="0" y="196" width="400" height="64" fill="#3f4146"/>' +
      '<path d="M0 238h400" stroke="#e9e3c8" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="anim-train">' +
        '<rect x="30" y="146" width="250" height="64" rx="8" fill="#f2f2f2" stroke="#7d828a" stroke-width="2"/>' +
        '<rect x="30" y="186" width="250" height="10" fill="' + MTA + '"/>' + win +
        '<rect x="258" y="152" width="18" height="36" rx="3" fill="#2d3a4a"/>' +
        '<rect x="196" y="148" width="78" height="7" fill="#111"/><text x="235" y="154" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">B35 CHURCH AV</text>' +
        '<circle cx="70" cy="212" r="10" fill="#111"/><circle cx="70" cy="212" r="4" fill="#888"/><circle cx="240" cy="212" r="10" fill="#111"/><circle cx="240" cy="212" r="4" fill="#888"/>' +
        '<circle cx="276" cy="200" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="368" y="60" width="5" height="136" fill="#8a8c90"/>' +
      '<rect x="344" y="20" width="54" height="40" rx="3" fill="#fff" stroke="' + MTA + '" stroke-width="2"/><rect x="344" y="20" width="54" height="10" fill="' + MTA + '"/>' +
      txt("BUS STOP", 371, 28, 7, "#fff") + '<rect x="352" y="36" width="38" height="16" rx="3" fill="' + MTA + '"/>' + txt("B35", 371, 48, 12, "#fff") +
      '<rect x="16" y="22" width="222" height="40" rx="3" fill="#111"/><rect x="16" y="22" width="222" height="3" fill="#fff"/>' +
      '<rect x="24" y="31" width="34" height="22" rx="4" fill="' + MTA + '"/>' + txt("B35", 41, 47, 13, "#fff") +
      '<text x="66" y="41" ' + font + ' font-size="12" fill="#fff">Church Av</text><text x="66" y="55" ' + font + ' font-size="9.5" fill="#ddd">at Rogers Av · Flatbush</text>',
      sky("sgs1", "#0b1530", "#3a2a4a"));
  }

  /* 2. A Gibraltar Musik sound-system dance */
  function sgsound() {
    const box = (x, y, w, h, two) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="2" fill="#1a1a1a" stroke="#3a3a3a" stroke-width="2"/>' +
      (two ? '<circle cx="' + (x + w / 2) + '" cy="' + (y + h * .3) + '" r="' + (w * .26) + '" fill="#2b2b2b"/><circle class="sg-cone" cx="' + (x + w / 2) + '" cy="' + (y + h * .3) + '" r="' + (w * .16) + '" fill="#555"/>' +
        '<circle cx="' + (x + w / 2) + '" cy="' + (y + h * .72) + '" r="' + (w * .26) + '" fill="#2b2b2b"/><circle class="sg-cone sg-cone2" cx="' + (x + w / 2) + '" cy="' + (y + h * .72) + '" r="' + (w * .16) + '" fill="#555"/>'
        : '<circle cx="' + (x + w / 2) + '" cy="' + (y + h / 2) + '" r="' + (w * .34) + '" fill="#2b2b2b"/><circle class="sg-cone" cx="' + (x + w / 2) + '" cy="' + (y + h / 2) + '" r="' + (w * .2) + '" fill="#555"/>');
    const stack = x => box(x, 70, 54, 46, false) + box(x, 116, 54, 70, true) + box(x, 186, 54, 40, false);
    let bulbs = "", flags = "";
    for (let i = 0; i < 14; i++) { const x = 10 + i * 29, y = 30 + Math.sin(i * .9) * 6; bulbs += '<circle cx="' + x + '" cy="' + y + '" r="3" fill="' + [GOLD, GRN, "#ff6b4a"][i % 3] + '" class="sg-bl sg-bl' + (i % 3 + 1) + '"/>'; }
    for (let i = 0; i < 9; i++) flags += '<path class="sg-flag" d="M' + (40 + i * 40) + ' 44l14 0l-7 12z" fill="' + [GRN, GOLD, BLK][i % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs2)"/>' + stars(10) +
      '<path d="M0 28q100 14 200 0t200 0" stroke="#555" fill="none"/>' + bulbs + '<path d="M30 44h350" stroke="#666"/>' + flags +
      stack(14) + stack(332) +
      '<rect x="120" y="66" width="160" height="22" rx="3" fill="' + GOLD + '"/>' + txt("GIBRALTAR MUSIK", 200, 82, 14, BLK) +
      '<rect x="138" y="150" width="124" height="40" rx="3" fill="#3a2a1a" stroke="#6a4a2a" stroke-width="2"/>' +
      '<circle cx="168" cy="160" r="12" fill="#111"/><circle class="sg-spin" cx="168" cy="160" r="12" fill="none" stroke="#444" stroke-width="2" stroke-dasharray="6 4"/><circle cx="168" cy="160" r="3" fill="' + GOLD + '"/>' +
      '<circle cx="232" cy="160" r="12" fill="#111"/><circle class="sg-spin" cx="232" cy="160" r="12" fill="none" stroke="#444" stroke-width="2" stroke-dasharray="6 4"/><circle cx="232" cy="160" r="3" fill="' + GRN + '"/>' +
      '<rect x="190" y="170" width="20" height="14" fill="#222"/><rect x="193" y="173" width="3" height="9" fill="' + GOLD + '"/><rect x="199" y="175" width="3" height="7" fill="' + GOLD + '"/><rect x="205" y="172" width="3" height="10" fill="' + GOLD + '"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#20242a"/>' +
      dancer(96, 196, "#2a2f3a", "sg-bob") + dancer(130, 204, "#353a46", "sg-bob sg-bob2") + dancer(276, 200, "#2a2f3a", "sg-bob sg-bob3") + dancer(306, 206, "#353a46", "sg-bob") +
      dancer(200, 212, "#3c4150", "sg-bob sg-bob2"),
      sky("sgs2", "#0a0f22", "#2b1840"));
  }

  /* 3. Philip Smart's HC&F studio, Freeport: the desk, the meters, a dubplate on the lathe */
  function sgdub() {
    let faders = "", vu = "";
    for (let i = 0; i < 16; i++) { const x = 30 + i * 13; faders += '<rect x="' + x + '" y="182" width="4" height="34" fill="#222"/><rect x="' + (x - 3) + '" y="' + (190 + (i * 7) % 18) + '" width="10" height="6" rx="1" fill="' + (i % 5 ? "#ddd" : GOLD) + '"/>'; }
    for (let i = 0; i < 4; i++) vu += '<rect x="' + (70 + i * 34) + '" y="150" width="24" height="22" fill="#0d0d0d"/><rect class="sg-vu sg-vu' + (i + 1) + '" x="' + (76 + i * 34) + '" y="152" width="12" height="18" fill="' + (i % 2 ? GRN : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      '<rect x="0" y="0" width="400" height="130" fill="#3a302a"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 50) + '" y="0" width="46" height="130" fill="#43382f"/>').join("") +
      '<rect x="40" y="18" width="200" height="104" rx="4" fill="#0f1a22" stroke="#6a5a4a" stroke-width="6"/>' +
      '<rect x="46" y="24" width="188" height="92" fill="#1b3242" opacity=".9"/>' +
      '<path d="M140 50v34" stroke="#999" stroke-width="3"/><rect x="132" y="36" width="16" height="22" rx="8" fill="#b8b8b8"/><path d="M126 46q14 24 28 0" stroke="#888" fill="none" stroke-width="2"/>' +
      '<rect x="128" y="84" width="24" height="4" fill="#777"/><path d="M118 28h44" stroke="#c33" stroke-width="3"/>' + txt("ON AIR", 140, 106, 9, "#ff6b6b", 'class="sg-bl"') +
      '<rect x="258" y="22" width="122" height="44" rx="3" fill="' + CREAM + '"/>' + txt("HC&amp;F STUDIO", 319, 40, 12, "#3a2a1a") + txt("FREEPORT, L.I.", 319, 56, 9, "#6a4a2a") +
      '<rect x="260" y="78" width="118" height="44" rx="3" fill="#1a1a1a"/><circle cx="290" cy="100" r="16" fill="#3a3a3a"/><circle class="sg-spin" cx="290" cy="100" r="16" fill="none" stroke="#777" stroke-width="3" stroke-dasharray="10 6"/>' +
      '<circle cx="346" cy="100" r="16" fill="#3a3a3a"/><circle class="sg-spin" cx="346" cy="100" r="16" fill="none" stroke="#777" stroke-width="3" stroke-dasharray="10 6"/><path d="M290 116h56" stroke="#6a4a2a" stroke-width="2"/>' +
      '<rect x="20" y="140" width="230" height="84" rx="4" fill="#4a4038" stroke="#2a221c" stroke-width="3"/>' + vu + faders +
      '<rect x="262" y="146" width="126" height="78" rx="4" fill="#8a8a8a" stroke="#555" stroke-width="2"/>' +
      '<circle cx="322" cy="184" r="32" fill="#151515"/><circle class="sg-spin" cx="322" cy="184" r="30" fill="none" stroke="#3a3a3a" stroke-width="2" stroke-dasharray="3 3"/>' +
      '<circle cx="322" cy="184" r="10" fill="' + GOLD + '"/><circle cx="322" cy="184" r="2" fill="#111"/>' +
      '<path d="M372 150l-34 26" stroke="#ccc" stroke-width="4" stroke-linecap="round"/><rect x="366" y="146" width="14" height="10" rx="2" fill="#666"/>' +
      txt("DUBPLATE", 322, 238, 10, GOLD) +
      '<rect x="0" y="228" width="400" height="32" fill="#1a1512"/>',
      "");
  }

  /* 4. Camp Lejeune, NC: pines, the base sign, the drive north to New York */
  function sglejeune() {
    let pines = "";
    for (let i = 0; i < 18; i++) { const x = i * 24 - 6, h = 60 + (i * 37) % 40; pines += '<rect x="' + (x + 9) + '" y="' + (176 - 14) + '" width="4" height="16" fill="#2a1c12"/><path d="M' + (x + 11) + ' ' + (176 - h) + 'l14 ' + (h - 14) + 'h-28z" fill="' + (i % 2 ? "#0f2a1c" : "#13331f") + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#sgs4)"/>' + stars(22) +
      '<circle cx="330" cy="42" r="16" fill="#f5efd0"/><circle cx="336" cy="38" r="15" fill="#18234a"/>' +
      pines +
      '<rect x="0" y="176" width="400" height="84" fill="#2b2e33"/><path d="M0 218h400" stroke="#f2d24b" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="0" y="174" width="400" height="4" fill="#6a6a62"/>' +
      '<rect x="22" y="108" width="6" height="68" fill="#5a4a3a"/><rect x="122" y="108" width="6" height="68" fill="#5a4a3a"/>' +
      '<rect x="12" y="96" width="126" height="54" rx="3" fill="#7a1f1f" stroke="' + GOLD + '" stroke-width="3"/>' +
      txt("MARINE CORPS BASE", 75, 116, 10, GOLD) + txt("CAMP LEJEUNE", 75, 134, 15, GOLD) + txt("NORTH CAROLINA", 75, 146, 7, "#f3e3b0") +
      '<rect x="268" y="98" width="6" height="78" fill="#8a8c90"/><rect x="344" y="98" width="6" height="78" fill="#8a8c90"/>' +
      '<rect x="252" y="70" width="112" height="46" rx="5" fill="#00653a" stroke="#fff" stroke-width="2"/>' +
      txt("NORTH", 308, 86, 10, "#fff") + txt("NEW YORK", 308, 104, 14, "#fff") + '<path d="M354 96v-14M349 87l5 -6l5 6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      '<g class="sg-car"><rect x="0" y="196" width="66" height="18" rx="5" fill="#c8102e"/><path d="M12 196l8 -12h26l10 12z" fill="#a50d26"/><rect x="22" y="186" width="10" height="9" fill="#9fc3e0"/><rect x="35" y="186" width="10" height="9" fill="#9fc3e0"/>' +
      '<circle cx="14" cy="216" r="7" fill="#111"/><circle cx="52" cy="216" r="7" fill="#111"/><path d="M66 202l40 -6v14z" fill="#fff6c2" opacity=".35"/></g>',
      sky("sgs4", "#060a1c", "#1d2a50"));
  }

  /* 5. Church Av & Rogers Av: street signs, the SHAGGY wall, Holy Cross Church's steeple behind */
  function sgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sgs5)"/>' + stars(8) +
      /* Holy Cross Church, Gothic Revival brick with a tall steeple, up the block */
      '<rect x="250" y="70" width="110" height="110" fill="#7a3e2c"/><path d="M250 70l55 -34l55 34z" fill="#5e2e20"/>' +
      '<rect x="284" y="40" width="42" height="140" fill="#84442f"/><path d="M284 40l21 -36l21 36z" fill="#4a5a5a"/><path d="M305 4v-8M301 -1h8" stroke="#ddd" stroke-width="2"/>' +
      '<path d="M296 128v-26q9 -14 18 0v26z" fill="#2b3a5a" class="sg-bl"/><path d="M262 140v-22q7 -10 14 0v22zM334 140v-22q7 -10 14 0v22z" fill="#2b3a5a" class="sg-bl sg-bl2"/>' +
      '<circle cx="305" cy="74" r="9" fill="#e8d8b0" class="sg-bl sg-bl3"/><path d="M305 66v16M297 74h16" stroke="#7a3e2c" stroke-width="1.5"/>' +
      '<rect x="296" y="150" width="18" height="30" fill="#3a2418"/>' +
      /* the wall */
      '<rect x="0" y="70" width="240" height="120" fill="#b06a4a"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(r => '<path d="M0 ' + (78 + r * 15) + 'h240" stroke="#8a4e36" stroke-width="1"/>').join("") +
      '<rect x="0" y="70" width="240" height="8" fill="#6a3a2a"/>' +
      tag("SHAGGY", 18, 140, 48, GOLD, -7) + tag("BIG YARD", 140, 176, 18, GRN, -4) + tag("BOOMBASTIC", 26, 182, 14, "#ff6b4a", -3) +
      /* sidewalk + street */
      '<rect x="0" y="190" width="400" height="14" fill="#9a958c"/><rect x="0" y="204" width="400" height="56" fill="#3f4146"/>' +
      '<g class="sg-carl"><rect x="0" y="222" width="70" height="20" rx="5" fill="#f2f2f2"/><rect x="0" y="234" width="70" height="4" fill="' + MTA + '"/><circle cx="14" cy="244" r="6" fill="#111"/><circle cx="56" cy="244" r="6" fill="#111"/></g>' +
      /* the pole + green signs */
      '<rect x="374" y="40" width="6" height="152" fill="#4a4d52"/>' +
      '<rect x="318" y="44" width="80" height="20" rx="2" fill="#00703c" stroke="#fff" stroke-width="1.5"/>' + txt("CHURCH AV", 358, 58, 11, "#fff") +
      '<rect x="330" y="68" width="62" height="20" rx="2" fill="#00703c" stroke="#fff" stroke-width="1.5"/>' + txt("ROGERS AV", 361, 82, 10, "#fff"),
      sky("sgs5", "#101a3a", "#e07a4a"));
  }

  window.SCENES = { sgbus, sgsound, sgdub, sglejeune, sgcorner };
})();
