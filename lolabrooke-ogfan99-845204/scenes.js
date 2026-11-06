/* Lola Brooke game (NYC map, Brooklyn: Bed-Stuy). The J pulling into Flushing Av up on the Broadway el; a Bed-Stuy block on a summer day
   the way she tells it (folks out on the stoops, a cookout going, the pizza shop on the corner); Austin at dusk during SXSW 2022, where she
   played four stages (the bats pouring out from under the Congress Avenue Bridge, the pink-granite Texas Capitol up the avenue);
   Wireless Festival in Finsbury Park, London (2023); and Flushing Av & Marcus Garvey Blvd with Woodhull hospital's weathered-steel frame behind.
   400 x 260 SVGs. No logos, no faces. No 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.hop{animation:hop .5s ease-in-out infinite}.hop2{animation-delay:-.25s}' +
    '@keyframes smoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(10px,-46px) scale(1.6);opacity:0}}.smk{transform-box:fill-box;transform-origin:50% 50%;animation:smoke 2.6s linear infinite}.smk2{animation-delay:-.9s}.smk3{animation-delay:-1.8s}' +
    '@keyframes bats{from{transform:translate(0,0)}to{transform:translate(170px,-150px)}}.bat{animation:bats 4s linear infinite}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.flp{transform-box:fill-box;transform-origin:50% 50%;animation:flap .3s linear infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.sw{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.2s ease-in-out infinite}' +
    '@keyframes sweepL{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(18deg)}}.bmL{transform-box:view-box;animation:sweepL 3s ease-in-out infinite}' +
    '@keyframes sweepR{0%,100%{transform:rotate(22deg)}50%{transform:rotate(-20deg)}}.bmR{transform-box:view-box;animation:sweepR 3.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/></g>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, s, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + s + '</text>';
  const GRN = "#7bd389", PINK = "#ff4fa3", GOLD = "#ffc93c", JZ = "#996633", BDFM = "#ff6319";

  /* 1. Flushing Av on the Broadway el (J and M): the green-painted steel, the platform canopy, the black sign with the J and M,
        Broadway's buildings below through the tracks, the J rolling in */
  function station() {
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="98" width="24" height="20" rx="2" fill="#bcd3ea" opacity=".9"/>';
    let bldg = "";
    [[0, 150, 70, "#7a4a3a"], [70, 160, 60, "#8a6a52"], [130, 146, 80, "#6a4a44"], [210, 156, 70, "#7d5a40"], [280, 150, 120, "#6e4b3c"]].forEach(([x, y, w, c]) => {
      bldg += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (260 - y) + '" fill="' + c + '"/>';
      for (let xx = x + 8; xx < x + w - 10; xx += 18) bldg += '<rect x="' + xx + '" y="' + (y + 12) + '" width="9" height="12" fill="#2a2f3f"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#l1)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#fff3c4" opacity=".9"/>' + bldg +
      /* canopy + columns */
      '<path d="M0 26h400v10H0z" fill="#3f5a3a"/><path d="M0 36l14 12h372l14-12z" fill="#2f4a2c"/>' +
      [24, 120, 216, 312].map(x => '<rect x="' + x + '" y="44" width="7" height="104" fill="#4b6b45"/>').join("") +
      /* black sign */
      '<rect x="210" y="52" width="176" height="32" rx="2" fill="#111"/><rect x="210" y="52" width="176" height="2.5" fill="#fff"/>' +
      '<text x="218" y="67" ' + font + ' font-size="12" fill="#fff">Flushing Av</text><text x="218" y="79" ' + font + ' font-size="8" fill="#fff">Broadway el</text>' + bullet(344, 68, "J", JZ, false, 8) + bullet(366, 68, "M", BDFM, false, 8) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="88" width="310" height="58" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="0" y="124" width="316" height="4" fill="' + JZ + '"/>' +
        '<rect x="296" y="96" width="16" height="22" rx="2" fill="#bcd3ea"/>' + bullet(304, 136, "J", JZ, false, 8) +
        '<circle cx="16" cy="138" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + el girders */
      '<rect x="0" y="146" width="400" height="8" fill="#eab308"/><rect x="0" y="154" width="400" height="14" fill="#8d8f8c"/>' +
      '<rect x="0" y="168" width="400" height="14" fill="#4b6b45"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 20) g += '<path d="M' + x + ' 168l10 14l10-14" stroke="#3a5536" stroke-width="2" fill="none"/>'; return g; })() +
      [40, 200, 360].map(x => '<rect x="' + x + '" y="182" width="12" height="78" fill="#4b6b45"/>').join("") +
      '<rect x="0" y="240" width="400" height="20" fill="#4a4c52"/>' +
      '<g class="car"><rect x="0" y="242" width="46" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="256" r="4" fill="#111"/><circle cx="36" cy="256" r="4" fill="#111"/></g>' +
      person(330, 146, "#2a2a33") +
      tag("BIG LO", 96, 230, 22, GRN, -4),
      sky("l1", "#7fb6e8", "#f6d6a8"));
  }

  /* 2. A Bed-Stuy block in summer, like she tells it: brownstone stoops with folks out front, a grill smoking at the cookout,
        a speaker playing, the pizza shop on the corner with its striped awning */
  function block() {
    const stoop = x => '<rect x="' + x + '" y="60" width="78" height="140" fill="#7a4a34"/><rect x="' + (x - 2) + '" y="54" width="82" height="8" fill="#5a3424"/>' +
      [0, 1].map(r => [0, 1].map(c => '<rect x="' + (x + 10 + c * 34) + '" y="' + (74 + r * 40) + '" width="22" height="28" fill="#2a2f3f" stroke="#c9b48a" stroke-width="2"/>').join("")).join("") +
      '<path d="M' + (x + 22) + ' 200l16-44h18v44z" fill="#9a6a50"/>' + (() => { let s = ""; for (let i = 0; i < 6; i++) s += '<path d="M' + (x + 24 + i * 2.6) + ' ' + (196 - i * 7) + 'h' + (32 - i * 2.6) + '" stroke="#6a4434" stroke-width="2"/>'; return s; })() +
      '<rect x="' + (x + 56) + '" y="150" width="16" height="22" fill="#3a2418"/>';
    let smoke = "";
    for (let i = 0; i < 3; i++) smoke += '<circle class="smk smk' + (i + 1) + '" cx="' + (282 + i * 6) + '" cy="196" r="8" fill="#e6e6e6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l2)"/>' +
      '<circle cx="60" cy="34" r="18" fill="#fff3c4"/>' +
      stoop(0) + stoop(84) + stoop(168) +
      /* pizza shop */
      '<rect x="256" y="60" width="144" height="140" fill="#c9b48a"/><rect x="252" y="54" width="148" height="8" fill="#9a845a"/>' +
      [272, 312, 352].map(x => '<rect x="' + x + '" y="74" width="24" height="30" fill="#2a2f3f"/>').join("") +
      '<rect x="262" y="114" width="138" height="14" fill="#1a1a1a"/><text x="331" y="125" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">PIZZA</text>' +
      (() => { let a = ""; for (let i = 0; i < 10; i++) a += '<path d="M' + (262 + i * 14) + ' 128h14l-2 14h-14z" fill="' + (i % 2 ? "#fff" : "#2f8f4a") + '"/>'; return a; })() +
      '<rect x="272" y="146" width="60" height="44" fill="#ffe7a8" opacity=".8"/><rect x="346" y="146" width="40" height="54" fill="#3a2418"/>' +
      /* sidewalk + street */
      '<rect x="0" y="200" width="400" height="16" fill="#b8b4aa"/><rect x="0" y="216" width="400" height="44" fill="#4a4c52"/>' +
      /* cookout grill + speaker */
      '<rect x="270" y="196" width="34" height="10" rx="3" fill="#222"/><path d="M276 206l-4 12M298 206l4 12" stroke="#222" stroke-width="2"/><rect x="274" y="192" width="26" height="4" fill="#ff7a2a" class="flk"/>' + smoke +
      '<rect x="214" y="180" width="22" height="30" rx="3" fill="#141414"/><circle class="bl" cx="225" cy="190" r="5" fill="#333" stroke="' + GRN + '" stroke-width="2"/><circle cx="225" cy="203" r="3" fill="#333"/>' +
      /* folks on the stoops */
      person(46, 196, "#2b2034", "hop") + person(130, 190, "#3a2a24") + person(200, 200, "#2a2a33", "hop hop2") + person(330, 214, "#22303a") +
      '<g class="car car2"><rect x="0" y="232" width="56" height="16" rx="4" fill="#2f6fb1"/><circle cx="12" cy="250" r="5" fill="#111"/><circle cx="44" cy="250" r="5" fill="#111"/></g>' +
      tag("718", 186, 46, 22, PINK, -6),
      sky("l2", "#6fb8ef", "#cfe8fa"));
  }

  /* 3. Austin at dusk, SXSW 2022: the Congress Avenue Bridge arches over Lady Bird Lake, the bats pouring out from under it,
        the pink-granite Texas Capitol dome up the avenue, a little stage glowing on the bank */
  function sxsw() {
    let bats = "";
    for (let i = 0; i < 18; i++) bats += '<g class="bat" style="animation-delay:-' + (i * 0.22).toFixed(2) + 's"><path class="flp" d="M' + (40 + (i * 37) % 160) + ' ' + (150 - (i * 13) % 40) + 'l-5-3l3 4l2-1l2 1l3-4z" fill="#1a1020"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#l3)"/>' +
      '<circle cx="320" cy="120" r="26" fill="#ffb36b" opacity=".85"/>' +
      /* skyline */
      [[10, 80, 30], [44, 60, 24], [70, 92, 28], [270, 70, 26], [300, 88, 30], [334, 56, 22], [360, 84, 34]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="#3a2a4a"/>').join("") +
      /* the Capitol */
      '<rect x="150" y="104" width="100" height="36" fill="#d9a08a"/><rect x="146" y="100" width="108" height="6" fill="#c08a76"/>' +
      [158, 172, 186, 214, 228, 242].map(x => '<rect x="' + x + '" y="110" width="4" height="26" fill="#b07a66"/>').join("") +
      '<rect x="180" y="74" width="40" height="28" fill="#d9a08a"/>' + [184, 194, 204, 214].map(x => '<rect x="' + x + '" y="80" width="3" height="18" fill="#b07a66"/>').join("") +
      '<path d="M176 76q24-40 48 0z" fill="#e3ad96" stroke="#b07a66" stroke-width="2"/><rect x="196" y="28" width="8" height="12" fill="#e3ad96"/><path d="M200 18l3 8h-6z" fill="' + GOLD + '"/>' +
      /* lake */
      '<rect x="0" y="140" width="400" height="52" fill="#3a5a86"/>' +
      '<path d="M0 156h40M80 170h60M200 160h50M300 176h70" stroke="#ffcf9e" stroke-width="2" opacity=".5"/>' +
      /* bridge */
      '<rect x="0" y="132" width="400" height="10" fill="#cfc6b4"/><rect x="0" y="128" width="400" height="5" fill="#a89e8a"/>' +
      [0, 80, 160, 240, 320].map(x => '<path d="M' + x + ' 142h80v12q-40-26-80 0z" fill="#b8ae98"/><rect x="' + (x + 74) + '" y="142" width="12" height="50" fill="#b8ae98"/>').join("") +
      bats +
      /* bank + stage */
      '<rect x="0" y="192" width="400" height="68" fill="#2f5a34"/>' +
      '<rect x="250" y="168" width="130" height="40" fill="#141018"/><rect x="246" y="164" width="138" height="6" fill="#444"/>' +
      '<g class="bmL" style="transform-origin:280px 168px"><path d="M280 168L262 110L276 110z" fill="' + GRN + '" opacity=".35"/></g>' +
      '<g class="bmR" style="transform-origin:350px 168px"><path d="M350 168L356 110L370 110z" fill="' + PINK + '" opacity=".35"/></g>' +
      '<text x="315" y="194" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">AUSTIN, TX</text>' +
      person(270, 240, "#151525", "hop") + person(300, 244, "#151525", "hop hop2") + person(330, 240, "#151525", "hop") + person(360, 244, "#151525", "hop hop2") +
      tag("FOUR STAGES", 20, 236, 22, GOLD, -4),
      sky("l3", "#2b1b4f", "#ff8a5c"));
  }

  /* 4. Wireless Festival, Finsbury Park, London (2023): the big main stage between the plane trees, screens on both sides,
        lights sweeping, the crowd jumping, a red double-decker going by on the road outside the park */
  function wireless() {
    let crowd = "";
    for (let i = 0; i < 11; i++) crowd += person(18 + i * 36, 232 + (i % 2) * 6, i % 2 ? "#141024" : "#1c1830", "hop" + (i % 2 ? " hop2" : ""));
    const tree = x => '<rect x="' + (x - 3) + '" y="120" width="6" height="40" fill="#4a3a2c"/><circle cx="' + x + '" cy="108" r="22" fill="#2f5a34"/><circle cx="' + (x - 14) + '" cy="120" r="14" fill="#2a5030"/><circle cx="' + (x + 14) + '" cy="120" r="14" fill="#2a5030"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l4)"/>' + stars(14) +
      tree(24) + tree(376) +
      '<g class="bmL" style="transform-origin:140px 70px"><path d="M140 70L90 -10L120 -10z" fill="' + GRN + '" opacity=".35"/></g>' +
      '<g class="bmR" style="transform-origin:260px 70px"><path d="M260 70L280 -10L310 -10z" fill="' + PINK + '" opacity=".35"/></g>' +
      /* stage */
      '<rect x="88" y="44" width="224" height="16" fill="#1a1a1a"/><rect x="92" y="60" width="8" height="112" fill="#2a2a2a"/><rect x="300" y="60" width="8" height="112" fill="#2a2a2a"/>' +
      '<rect x="100" y="60" width="200" height="112" fill="#0d0b14"/>' +
      [114, 140, 166, 192, 218, 244, 270].map((x, i) => '<circle class="bl bl' + (i % 3 + 1) + '" cx="' + x + '" cy="52" r="4" fill="' + (i % 2 ? GOLD : "#fff") + '"/>').join("") +
      '<rect x="48" y="70" width="40" height="56" fill="#111"/><rect class="flk" x="51" y="73" width="34" height="50" fill="#3a2a6a"/>' +
      '<rect x="312" y="70" width="40" height="56" fill="#111"/><rect class="flk" x="315" y="73" width="34" height="50" fill="#3a2a6a"/>' +
      '<text x="200" y="104" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="3">WIRELESS</text>' +
      '<text x="200" y="122" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '" letter-spacing="2">FINSBURY PARK · LONDON</text>' +
      '<rect x="100" y="158" width="200" height="14" fill="#2a2a2a"/>' +
      /* road + bus */
      '<rect x="0" y="172" width="400" height="22" fill="#3d3f46"/>' +
      '<g class="car"><rect x="0" y="150" width="70" height="40" rx="4" fill="#d42a2a"/><rect x="0" y="168" width="70" height="2" fill="#a51e1e"/>' +
        [4, 20, 36, 52].map(x => '<rect x="' + x + '" y="154" width="12" height="10" fill="#cfe2f2"/><rect x="' + x + '" y="173" width="12" height="9" fill="#cfe2f2"/>').join("") +
        '<circle cx="14" cy="190" r="5" fill="#111"/><circle cx="56" cy="190" r="5" fill="#111"/></g>' +
      '<rect x="0" y="194" width="400" height="66" fill="#26402a"/>' + crowd +
      tag("LONDON", 300, 36, 18, GOLD, -4),
      sky("l4", "#06081a", "#2a2850"));
  }

  /* 5. Flushing Av & Marcus Garvey Blvd: green street signs, a streetlight, the wall tagged LOLA BROOKE,
        Woodhull hospital's rust-brown steel frame and dark glass behind, a dirt bike zipping by */
  function corner() {
    let wood = '<rect x="20" y="40" width="260" height="96" fill="#5a3a2a"/>';
    for (let x = 20; x <= 280; x += 26) wood += '<rect x="' + x + '" y="40" width="6" height="96" fill="#7a4a2e"/>';
    for (let y = 40; y <= 136; y += 24) wood += '<rect x="20" y="' + y + '" width="266" height="5" fill="#7a4a2e"/>';
    for (let x = 28; x < 280; x += 26) for (let y = 47; y < 132; y += 24) wood += '<rect class="bl bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="16" height="14" fill="#1a2a3a" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l5)"/>' + stars(10) + wood +
      '<rect x="40" y="28" width="60" height="14" fill="#7a4a2e"/><rect x="200" y="22" width="40" height="20" fill="#7a4a2e"/>' +
      '<text x="150" y="16" text-anchor="middle" ' + font + ' font-size="7" fill="#e8d6c8" letter-spacing="2">WOODHULL HOSPITAL</text>' +
      /* wall */
      '<rect x="0" y="128" width="400" height="98" fill="#2e4a34"/>' +
      (() => { let b = ""; for (let y = 134; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#253d2a" stroke-width="1"/>'; return b; })() +
      tag("LOLA BROOKE", 14, 188, 38, GRN, -5) + tag("TEAM 80", 24, 220, 16, PINK, -3) + tag("DON'T PLAY WITH IT", 150, 222, 13, GOLD, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><circle cx="10" cy="250" r="7" fill="none" stroke="#111" stroke-width="3"/><circle cx="44" cy="250" r="7" fill="none" stroke="#111" stroke-width="3"/><path d="M10 250l12-12h14l8 12M22 238l-4-6h8" stroke="' + PINK + '" stroke-width="3" fill="none"/><circle cx="28" cy="226" r="5" fill="#222"/><path d="M28 231l2 9" stroke="#222" stroke-width="4"/></g>' +
      /* streetlight + signs */
      '<rect x="352" y="58" width="5" height="170" fill="#3d4b3f"/><path d="M354 58q0-16 -26-16" stroke="#3d4b3f" stroke-width="4" fill="none"/><circle class="flk" cx="326" cy="46" r="5" fill="#fff6c2"/>' +
      blade(290, 72, 106, "Flushing Av", 13) + blade(262, 98, 134, "Marcus Garvey Blvd", 11),
      sky("l5", "#0a0f12", "#26402e"));
  }

  window.SCENES = { station: station, block: block, sxsw: sxsw, wireless: wireless, corner: corner };
})();
