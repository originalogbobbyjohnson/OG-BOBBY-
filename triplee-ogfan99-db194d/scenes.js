/* triplee scenes (Regions tab: Houston + Texas; Dallas-born, came up in Dallas with Reach Records / 116 Clique; later young adult pastor at Concord Church in southern Oak Cliff). CSS classes prefixed tl- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tlglow{0%,100%{opacity:.45}50%{opacity:1}}.tl-glow{animation:tlglow 2.4s ease-in-out infinite}.tl-g2{animation-delay:-1.2s}' +
    '@keyframes tlcloud{0%{transform:translateX(-160px)}100%{transform:translateX(460px)}}.tl-cl{animation:tlcloud 24s linear infinite}.tl-cl2{animation-duration:34s;animation-delay:-14s}' +
    '@keyframes tljet{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1.1)}}.tl-jet{transform-box:fill-box;transform-origin:50% 100%;animation:tljet 1.6s ease-in-out infinite}.tl-j2{animation-delay:-.8s}' +
    '@keyframes tlflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.tl-fl{transform-box:fill-box;transform-origin:0% 50%;animation:tlflag 1.8s ease-in-out infinite}' +
    '@keyframes tlcar{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.tl-car{animation:tlcar 7s linear infinite}.tl-car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes tlcarb{0%{transform:translateX(460px)}100%{transform:translateX(-120px)}}.tl-carb{animation:tlcarb 8s linear infinite}' +
    '@keyframes tlbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.tl-bob{animation:tlbob 1.4s ease-in-out infinite}.tl-b2{animation-delay:-.7s}' +
    '@keyframes tlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tl-sp{animation:tlspray 1.4s ease-out infinite}.tl-sp2{animation-delay:.45s}' +
    '@keyframes tldrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(30px);opacity:0}}.tl-dr{animation:tldrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="30" ry="12" fill="#fff" opacity=".9"/><ellipse cx="18" cy="-8" rx="18" ry="12" fill="#fff" opacity=".9"/><ellipse cx="-14" cy="-6" rx="14" ry="10" fill="#fff" opacity=".9"/></g>';
  const GOLD = "#f2c94c", SKY = "#5ab0ff", CORAL = "#ff6b4a", DBLUE = "#1f5fae", DGREEN = "#2e8b57";

  /* 0. DART's 108 Camp Wisdom bus pulling up at Camp Wisdom Rd @ Westmoreland Rd in southern Oak Cliff, the black stop sign, flat Texas sky, live oaks and a strip of shops */
  function tlbus() {
    const bus = '<g class="anim-train"><rect x="40" y="112" width="250" height="84" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 40) + '" y="124" width="34" height="32" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="124" width="28" height="60" rx="2" fill="#24323e"/>' +
      '<rect x="40" y="162" width="250" height="8" fill="' + DBLUE + '"/><rect x="40" y="170" width="250" height="4" fill="' + DGREEN + '"/>' +
      '<rect x="44" y="113" width="96" height="11" rx="2" fill="#111"/><text x="92" y="121.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">108 CAMP WISDOM</text>' +
      '<circle cx="88" cy="196" r="12" fill="#222"/><circle cx="88" cy="196" r="5" fill="#9aa1a8"/><circle cx="246" cy="196" r="12" fill="#222"/><circle cx="246" cy="196" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="182" r="3.5" fill="#fff6c2"/></g>';
    const oak = (x, s) => '<g transform="translate(' + x + ' 98) scale(' + s + ')"><rect x="-4" y="0" width="8" height="38" fill="#5a4636"/><ellipse cx="0" cy="-6" rx="34" ry="20" fill="#4f6b3a"/><ellipse cx="-16" cy="2" rx="18" ry="12" fill="#5e7c44"/><ellipse cx="16" cy="0" rx="20" ry="13" fill="#46602f"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tl0)"/>' +
      '<g class="tl-cl">' + cloud(40, 40, 1) + '</g><g class="tl-cl tl-cl2">' + cloud(120, 64, .7) + '</g>' +
      '<rect x="210" y="96" width="180" height="40" fill="#cdb894"/><rect x="210" y="92" width="180" height="6" fill="#8a6a4a"/>' +
      [222, 262, 302, 342].map((x, i) => '<rect x="' + x + '" y="106" width="30" height="22" fill="' + (i % 2 ? "#ffe6a8" : "#2a3442") + '"/>').join("") +
      oak(30, 1) + oak(150, .8) +
      '<rect x="0" y="134" width="400" height="16" fill="#bdb8ae"/><rect x="0" y="150" width="400" height="110" fill="#4e4e54"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="70" width="5" height="80" fill="#6b7178"/><rect x="318" y="50" width="42" height="36" rx="3" fill="' + DBLUE + '" stroke="#fff" stroke-width="1.5"/><text x="339" y="64" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS STOP</text><text x="339" y="80" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">108</text>' +
      '<rect x="20" y="18" width="290" height="30" rx="3" fill="#111"/><text x="32" y="38" ' + font + ' font-size="12" fill="#fff">Camp Wisdom Rd @ Westmoreland Rd</text>',
      sky("tl0", "#7fb6e8", "#f6e2bc"));
  }

  /* 1. Concord Church on Pastor Bailey Dr in southern Oak Cliff, where he served as young adult pastor: the wide tan-brick sanctuary with its tall glass entry, a plain cross up top, the full Sunday parking lot, sunlight pulsing */
  function tlchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#tl1)"/>' +
      '<circle cx="330" cy="54" r="26" fill="#ffe08a" class="tl-glow"/>' +
      '<g class="tl-cl">' + cloud(60, 36, .9) + '</g>' +
      '<rect x="40" y="96" width="320" height="80" fill="#c9a77a" stroke="#8a6a46" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M40 ' + (104 + i * 8) + 'h320" stroke="#b8946a" stroke-width="1"/>').join("") +
      '<path d="M150 96l50 -34l50 34z" fill="#a8845a" stroke="#8a6a46" stroke-width="2"/>' +
      '<rect x="160" y="96" width="80" height="80" fill="#6fa8d6" stroke="#e8e4dc" stroke-width="3"/>' + [180, 200, 220].map(x => '<path d="M' + x + ' 96v80" stroke="#e8e4dc" stroke-width="2"/>').join("") + '<path d="M160 126h80M160 152h80" stroke="#e8e4dc" stroke-width="2"/>' +
      '<rect x="160" y="96" width="80" height="80" fill="#fff" opacity=".18" class="tl-glow tl-g2"/>' +
      '<rect x="196" y="24" width="8" height="40" fill="#f4f0e4"/><rect x="184" y="34" width="32" height="8" fill="#f4f0e4"/>' +
      [56, 96, 266, 306].map(x => '<rect x="' + x + '" y="114" width="28" height="36" fill="#2e3c4c"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#5a5a60"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (20 + i * 50) + ' 190v40" stroke="#e8e4dc" stroke-width="2"/>').join("") +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (28 + i * 50) + '" y="' + (196 + (i % 2) * 6) + '" width="34" height="18" rx="5" fill="' + ["#a83232", "#e8e8e8", "#2a4a7a", "#3a3a3a", "#c8b070", "#6a7a8a", "#f4f4f4"][i] + '"/>').join("") +
      '<g class="tl-car"><rect x="0" y="236" width="44" height="16" rx="5" fill="#2a6a9a"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="34" cy="252" r="4" fill="#111"/></g>' +
      '',
      sky("tl1", "#78b4ea", "#f6e6c8"));
  }

  /* 2. Dallas City Hall downtown, his hometown's landmark: the huge leaning-out concrete wedge, the long band windows, the plaza pool with fountain jets, the flags flying out front */
  function tlcityhall() {
    return svg(
      '<rect width="400" height="260" fill="url(#tl2)"/>' +
      '<g class="tl-cl tl-cl2">' + cloud(80, 34, 1) + '</g>' +
      '<path d="M40 166L20 60h360l-20 106z" fill="#d8ccb4" stroke="#9a8e78" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => { const y = 72 + i * 15, inset = 20 + (i * 3.4); return '<path d="M' + inset + ' ' + y + 'h' + (400 - inset * 2) + '" stroke="#5a6672" stroke-width="5"/>'; }).join("") +
      '<rect x="20" y="60" width="360" height="6" fill="#c4b89e"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 14) + '" y="150" width="28" height="30" fill="#c8bca4" stroke="#9a8e78" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#cfc8ba"/>' +
      '<rect x="60" y="196" width="280" height="40" rx="4" fill="#5aa0c8" stroke="#a8a090" stroke-width="2"/>' +
      [100, 150, 200, 250, 300].map((x, i) => '<path class="tl-jet' + (i % 2 ? " tl-j2" : "") + '" d="M' + (x - 3) + ' 216q3 -30 6 0z" fill="#e8f6ff" opacity=".9"/>').join("") +
      '<rect x="24" y="110" width="3" height="80" fill="#8a8a8a"/><g class="tl-fl"><rect x="27" y="112" width="28" height="9" fill="#fff"/><rect x="27" y="121" width="28" height="9" fill="#bf2a2a"/><rect x="27" y="112" width="10" height="18" fill="#1f3f8a"/><circle cx="32" cy="121" r="2.4" fill="#fff"/></g>' +
      '<rect x="368" y="110" width="3" height="80" fill="#8a8a8a"/><g class="tl-fl">' + [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="371" y="' + (112 + i * 2.6) + '" width="28" height="2.6" fill="' + (i % 2 ? "#fff" : "#bf2a2a") + '"/>').join("") + '<rect x="371" y="112" width="12" height="9" fill="#1f3f8a"/></g>',
      sky("tl2", "#6aaee6", "#f2e4c8"));
  }

  /* 3. Klyde Warren Park in downtown Dallas: the green deck built over the freeway, cars racing underneath, food trucks lined up, the towers behind, a kid's kite up in the clouds */
  function tlpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#tl3)"/>' +
      '<g class="tl-cl">' + cloud(30, 30, .8) + '</g><g class="tl-cl tl-cl2">' + cloud(200, 50, 1.1) + '</g>' +
      '<g fill="#5a6a82"><rect x="20" y="46" width="40" height="96"/><rect x="70" y="30" width="34" height="112"/><rect x="250" y="40" width="44" height="102"/><rect x="300" y="60" width="30" height="82"/><rect x="340" y="22" width="40" height="120"/></g>' +
      '<g fill="#7a8aa2"><rect x="120" y="70" width="30" height="72"/><rect x="200" y="56" width="36" height="86"/></g>' +
      Array.from({ length: 22 }, (_, i) => '<rect x="' + [26, 40, 76, 90, 256, 274, 306, 346, 362, 126, 206, 220][i % 12] + '" y="' + (52 + (i % 5) * 16) + '" width="6" height="7" fill="#dfe8f2" opacity=".7"/>').join("") +
      '<rect x="0" y="142" width="400" height="48" fill="#5e9a48"/><rect x="0" y="142" width="400" height="5" fill="#7ab85a"/>' +
      [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 2) + '" y="126" width="4" height="18" fill="#5a4636"/><circle cx="' + x + '" cy="124" r="10" fill="#3e7a32"/>').join("") +
      [60, 130, 200].map((x, i) => '<g><rect x="' + x + '" y="156" width="56" height="26" rx="4" fill="' + [CORAL, GOLD, SKY][i] + '"/><rect x="' + (x + 8) + '" y="160" width="26" height="10" fill="#2a3442"/><circle cx="' + (x + 12) + '" cy="183" r="4" fill="#222"/><circle cx="' + (x + 44) + '" cy="183" r="4" fill="#222"/></g>').join("") +
      '<rect x="0" y="190" width="400" height="12" fill="#a8a296"/><rect x="0" y="202" width="400" height="58" fill="#2a2a30"/>' +
      [30, 110, 190, 270, 350].map(x => '<rect x="' + (x - 6) + '" y="202" width="12" height="58" fill="#8a8478"/>').join("") +
      '<g class="tl-car"><rect x="0" y="232" width="46" height="16" rx="5" fill="#c83a3a"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="36" cy="249" r="4" fill="#111"/><circle cx="46" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<g class="tl-carb"><rect x="0" y="212" width="46" height="14" rx="5" fill="#e8e8e8"/><circle cx="10" cy="227" r="4" fill="#111"/><circle cx="36" cy="227" r="4" fill="#111"/></g>' +
      '<g class="tl-bob"><path d="M330 70l12 -14l12 14l-12 14z" fill="' + CORAL + '" stroke="#fff" stroke-width="1.5"/><path d="M342 84q-10 30 -30 70" stroke="#fff" stroke-width="1" fill="none"/></g>',
      sky("tl3", "#5aa6ec", "#f0f2e2"));
  }

  /* 4. The corner: W Camp Wisdom Rd and S Westmoreland Rd in southern Oak Cliff, TRIP LEE tagged on the wall, the downtown Dallas skyline far off to the north */
  function tlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tl4)"/>' +
      '<g fill="#232a40"><rect x="60" y="80" width="30" height="60"/><rect x="96" y="62" width="24" height="78"/><rect x="126" y="74" width="34" height="66"/><rect x="200" y="56" width="28" height="84"/><rect x="234" y="70" width="40" height="70"/><rect x="290" y="84" width="30" height="56"/>' +
      '<path d="M166 140V48l12 -14l12 14v92z"/></g>' +
      '<rect x="176" y="22" width="4" height="14" fill="' + GOLD + '"/>' +
      Array.from({ length: 22 }, (_, i) => '<rect class="' + (i % 3 ? "" : "tl-glow") + '" x="' + [64, 76, 100, 108, 132, 146, 170, 180, 206, 216, 240, 258][i % 12] + '" y="' + (86 + (i % 4) * 12) + '" width="5" height="6" fill="#ffd98a" opacity=".8"/>').join("") +
      '<rect x="0" y="136" width="400" height="90" fill="#7a5a4e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#6a4a3e" stroke-width="1"/>').join("") +
      tag("TRIP LEE", 20, 198, 46, GOLD, -5) + tag("UNASHAMED", 28, 222, 20, SKY, -3) + tag("BRAG", 236, 196, 26, CORAL, -6) + tag("TRIP", 200, 220, 20, "#fff", -4) +
      '<g class="tl-dr"><path d="M64 204q-4 6 0 10q4 -4 0 -10z" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(262, 98, 136, "W Camp Wisdom Rd") + sign(262, 124, 136, "S Westmoreland Rd") +
      '<g class="tl-sp"><circle cx="160" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tl-sp tl-sp2"><circle cx="166" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("tl4", "#141a3a", "#e8905a"));
  }

  window.SCENES = { tlbus: tlbus, tlchurch: tlchurch, tlcityhall: tlcityhall, tlpark: tlpark, tlcorner: tlcorner };
})();
