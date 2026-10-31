/* South Bronx opening scenes for the French Montana game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drive{from{transform:translateX(-140px)}to{transform:translateX(540px)}}' +
    '.car{animation:drive 6s linear infinite}.car2{animation-delay:-3s;animation-duration:7.5s}' +
    '@keyframes driveL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}' +
    '.bus{animation:driveL 9s linear infinite}' +
    '@keyframes lr{0%,40%{opacity:1}41%,100%{opacity:.15}}@keyframes ly{0%,40%{opacity:.15}41%,55%{opacity:1}56%,100%{opacity:.15}}@keyframes lg{0%,55%{opacity:.15}56%,100%{opacity:1}}' +
    '.lr{animation:lr 6s infinite}.ly{animation:ly 6s infinite}.lg{animation:lg 6s infinite}' +
    '@keyframes boat{from{transform:translateX(-90px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}' +
    '@keyframes shim{0%,100%{opacity:.15}50%{opacity:.5}}' +
    '.shm{animation:shim 2.4s ease-in-out infinite}.shm2{animation-delay:1.2s}' +
    '@keyframes fly{0%{transform:translate(0,0)}50%{transform:translate(120px,-14px)}100%{transform:translate(240px,0)}}' +
    '.fly{animation:fly 8s linear infinite}.fly2{animation-delay:-4s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.flp{transform-box:fill-box;transform-origin:50% 100%;animation:flap .4s infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.bannr{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffc83d", RED = "#e8343b", GREEN = "#21b35b", R123 = "#ee352e", G456 = "#00933c";
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 22) + '" r="6" fill="' + c + '"/><path d="M' + (x - 8) + ' ' + y + 'q0-14 8-14t8 14z" fill="' + c + '"/>';

  /* 1. The 2 pulling into 3 Av–149 St, underground: white tile, blue tile band, black columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 176; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8d3c8" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v176" stroke="#d8d3c8" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [16, 200, 384].forEach(x => { cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="186" fill="#141414"/><rect x="' + (x - 9) + '" y="0" width="18" height="4" fill="#141414"/><rect x="' + (x - 9) + '" y="182" width="18" height="4" fill="#141414"/>'; });
    const sign = x => '<rect x="' + x + '" y="54" width="164" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="54" width="164" height="4" fill="#fff"/>' +
      '<text x="' + (x + 10) + '" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">3 Av–149 St</text>' +
      bullet(x + 120, 72, "2", R123) + bullet(x + 146, 72, "5", G456);
    return svg(
      '<rect width="400" height="176" fill="#ebe6da"/>' + tiles +
      '<rect x="0" y="0" width="400" height="10" fill="#201c1c"/>' +
      '<rect class="flk" x="50" y="3" width="60" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="240" y="3" width="60" height="4" rx="2" fill="#fffbe6"/>' +
      '<rect x="0" y="20" width="400" height="24" fill="#1d3e6e"/><rect x="0" y="24" width="400" height="16" fill="#3d73b3"/>' +
      [105, 295].map(cx => '<rect x="' + (cx - 26) + '" y="22" width="52" height="20" fill="#ebe6da" stroke="#1d3e6e" stroke-width="2"/>' +
        '<text x="' + cx + '" y="37" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="1" fill="#1d3e6e">149</text>').join("") +
      sign(22) + sign(214) +
      /* the 2 slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + R123 + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(292, 132, "2", R123) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#1a1010"/>' + cols +
      tag("HAAN!", 34, 242, 34, GOLD, -5) + tag("BX", 300, 242, 36, RED, -8),
      "");
  }

  /* 2. The Hub at 3rd Av and 149th: storefront row, packed sidewalks, the light cycling, cars and a bus rolling through */
  function hub() {
    const shops = [["SNEAKERS", "#c8312e"], ["JEWELRY", "#e0a52c"], ["99 CENTS", "#2a7fc1"], ["PHONES", "#21b35b"], ["SHOES", "#8e3fa8"]];
    let row = "";
    shops.forEach(([n, c], i) => {
      const x = i * 80;
      row += '<rect x="' + x + '" y="40" width="78" height="140" fill="' + (i % 2 ? "#6e5444" : "#7d6250") + '"/>' +
        '<rect x="' + (x + 8) + '" y="52" width="26" height="24" fill="#ffd27a" opacity=".55"/><rect x="' + (x + 44) + '" y="52" width="26" height="24" fill="#ffd27a" opacity=".4"/>' +
        '<rect x="' + (x + 4) + '" y="98" width="70" height="20" fill="' + c + '"/>' +
        '<text x="' + (x + 39) + '" y="112" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="1" fill="#fff">' + n + '</text>' +
        '<rect x="' + (x + 6) + '" y="124" width="66" height="50" fill="#2a2028"/><rect x="' + (x + 10) + '" y="128" width="58" height="42" fill="#ffe7a8" opacity=".35"/>';
    });
    let crowd = "";
    for (let i = 0; i < 16; i++) crowd += person(14 + i * 25 + (i % 3) * 3, 194 + (i % 2) * 3, "#120c10");
    let cross = "";
    for (let x = 10; x < 400; x += 26) cross += '<rect x="' + x + '" y="232" width="14" height="24" fill="#e9e4d8" opacity=".75"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hg)"/>' +
      row +
      '<rect x="0" y="180" width="400" height="22" fill="#4a4448"/>' + crowd +
      '<rect x="0" y="200" width="400" height="60" fill="#232025"/>' + cross +
      /* bus heading west, cars heading east */
      '<g class="bus"><rect x="0" y="194" width="110" height="34" rx="5" fill="#f2f4f7"/><rect x="0" y="216" width="110" height="5" fill="#2a63c7"/>' +
        [6, 30, 54, 78].map(x => '<rect x="' + x + '" y="199" width="20" height="13" rx="2" fill="#2a3a52"/>').join("") +
        '<circle cx="22" cy="229" r="6" fill="#111"/><circle cx="88" cy="229" r="6" fill="#111"/></g>' +
      '<g class="car"><rect x="0" y="232" width="56" height="18" rx="6" fill="' + RED + '"/><rect x="10" y="224" width="32" height="12" rx="4" fill="#a8242a"/><circle cx="12" cy="251" r="5" fill="#111"/><circle cx="44" cy="251" r="5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="234" width="52" height="16" rx="6" fill="#e9e4d8"/><rect x="10" y="226" width="30" height="11" rx="4" fill="#b8b2a6"/><circle cx="12" cy="251" r="5" fill="#111"/><circle cx="42" cy="251" r="5" fill="#111"/></g>' +
      /* traffic light */
      '<rect x="386" y="40" width="5" height="160" fill="#1d2329"/><rect x="378" y="2" width="20" height="44" rx="3" fill="#111"/>' +
      '<circle class="lr" cx="388" cy="11" r="5" fill="#ff3b30"/><circle class="ly" cx="388" cy="24" r="5" fill="#ffcc00"/><circle class="lg" cx="388" cy="37" r="5" fill="#36d97f"/>' +
      /* THE HUB pole banner */
      '<rect x="22" y="8" width="4" height="40" fill="#1d2329"/>' +
      '<g class="bannr"><rect x="26" y="10" width="80" height="28" fill="' + RED + '" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="66" y="29" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="1" textLength="62" lengthAdjust="spacingAndGlyphs" fill="#fff">THE HUB</text></g>',
      sky("hg", "#22122a", "#7a3c3a"));
  }

  /* 3. Macombs Dam Bridge over the Harlem River: the off-cream iron swing span, stone gatehouse, a boat sliding under */
  function bridge() {
    const CREAM = "#e9dfc4", CREAM2 = "#b7ab8a";
    let truss = "";
    for (let x = 60; x < 340; x += 20) truss += '<path d="M' + x + ' 120L' + (x + 20) + ' 150M' + (x + 20) + ' 120L' + x + ' 150" stroke="' + CREAM2 + '" stroke-width="2"/><path d="M' + x + ' 120v30" stroke="' + CREAM + '" stroke-width="2"/>';
    let lamps = "";
    [70, 150, 250, 330].forEach(x => { lamps += '<rect x="' + (x - 1.5) + '" y="96" width="3" height="24" fill="#2f4a3a"/><path d="M' + (x - 6) + ' 96q6-8 12 0z" fill="#2f4a3a"/><circle class="flk" cx="' + x + '" cy="97" r="3" fill="#ffe7a8"/>'; });
    let city = "";
    [[0, 40, 50], [44, 60, 34], [300, 50, 44], [346, 30, 54]].forEach(([x, y, w]) => { city += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (110 - y) + '" fill="#2c2a3c"/>'; for (let r = y + 8; r < 104; r += 12) for (let c = x + 6; c < x + w - 6; c += 12) city += '<rect x="' + c + '" y="' + r + '" width="5" height="5" fill="#ffd27a" opacity=".5"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#bg3)"/>' + stars(14) +
      city +
      /* river */
      '<rect x="0" y="160" width="400" height="100" fill="#1d3a4a"/>' +
      '<path class="shm" d="M20 190h60M140 206h80M280 186h70M60 230h90" stroke="#9fd3e8" stroke-width="2"/>' +
      '<path class="shm shm2" d="M100 180h50M240 220h60M320 240h60M10 246h40" stroke="#9fd3e8" stroke-width="2"/>' +
      /* boat */
      '<g class="boat"><path d="M0 196h60l-8 12H8z" fill="#c8312e"/><rect x="14" y="184" width="26" height="12" fill="#f2f4f7"/><rect x="18" y="187" width="6" height="5" fill="#2a3a52"/><rect x="28" y="187" width="6" height="5" fill="#2a3a52"/></g>' +
      /* the swing span on its center pier */
      '<rect x="182" y="150" width="36" height="40" fill="#8a8170"/><rect x="176" y="186" width="48" height="8" fill="#6e6658"/>' +
      '<rect x="40" y="114" width="320" height="8" fill="' + CREAM + '"/>' + truss +
      '<rect x="40" y="148" width="320" height="6" fill="' + CREAM + '"/>' +
      '<path d="M40 122q160-34 320 0" fill="none" stroke="' + CREAM + '" stroke-width="3"/>' + lamps +
      /* stone gatehouse on the Bronx end */
      '<rect x="352" y="88" width="48" height="72" fill="#8f8676"/><path d="M348 88l28-20 28 20z" fill="#6e6658"/>' +
      '<rect x="366" y="112" width="14" height="22" fill="#2a2620"/><rect x="0" y="120" width="44" height="40" fill="#8f8676"/>' +
      tag("SOUTH BRONX", 26, 40, 26, GOLD, -4),
      sky("bg3", "#121a36", "#c86a4a"));
  }

  /* 4. Bronx Zoo, the Rainey Gate: green-bronze art deco gate with the tree of life and animals, granite lodges, birds flying over */
  function zoo() {
    const BRZ = "#4f8a6e", BRZ2 = "#2e5e48", GRANITE = "#b3aca2";
    let bars = "";
    for (let x = 140; x <= 260; x += 10) bars += '<rect x="' + x + '" y="96" width="3" height="134" fill="' + BRZ2 + '"/>';
    const animal = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + BRZ + '" stroke="' + BRZ2 + '" stroke-width="1">' +
      '<path d="M0 0q4-10 14-8 10-2 14 8v8h-4v-4h-20v4H0z"/><circle cx="26" cy="-6" r="5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#zg)"/>' +
      /* trees behind */
      [[30, 120, 46], [100, 104, 38], [310, 110, 44], [376, 124, 40]].map(([x, y, r]) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#2a6a3a"/><circle cx="' + (x + r * .5) + '" cy="' + (y - r * .5) + '" r="' + (r * .6) + '" fill="#3a8a4c"/>').join("") +
      /* granite lodges */
      '<rect x="20" y="140" width="100" height="90" fill="' + GRANITE + '"/><path d="M14 140h112l-8-14H22z" fill="#968e84"/><rect x="54" y="168" width="30" height="62" fill="#5a544c"/>' +
      '<rect x="280" y="140" width="100" height="90" fill="' + GRANITE + '"/><path d="M274 140h112l-8-14H282z" fill="#968e84"/><rect x="316" y="168" width="30" height="62" fill="#5a544c"/>' +
      /* the gate: stepped arch frame, tree of life up the middle, animals on it */
      '<path d="M128 230V96l18-20h108l18 20v134h-12V100l-12-12h-96l-12 12v130z" fill="' + BRZ + '" stroke="' + BRZ2 + '" stroke-width="2"/>' +
      bars +
      '<path d="M200 230V70" stroke="' + BRZ + '" stroke-width="6"/>' +
      '<path d="M200 150q-30-10-44-34M200 150q30-10 44-34M200 120q-22-8-32-30M200 120q22-8 32-30M200 92q-12-4-18-20M200 92q12-4 18-20" stroke="' + BRZ + '" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      [[164, 96], [224, 92], [172, 70], [214, 68], [192, 54]].map(([x, y]) => '<ellipse cx="' + x + '" cy="' + y + '" rx="7" ry="4" fill="#6fae8c" transform="rotate(-30 ' + x + ' ' + y + ')"/>').join("") +
      animal(146, 196, 1) + animal(222, 196, 1) + animal(160, 158, .8) + animal(214, 158, .8) +
      '<circle cx="200" cy="58" r="6" fill="#6fae8c" stroke="' + BRZ2 + '" stroke-width="1.5"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#6b625a"/><path d="M0 238h400" stroke="#57504a" stroke-width="2"/>' +
      /* birds */
      '<g class="fly"><g class="flp"><path d="M20 40q6-6 12 0q6-6 12 0" stroke="#1a1a1a" stroke-width="2" fill="none"/></g></g>' +
      '<g class="fly fly2"><g class="flp"><path d="M60 24q5-5 10 0q5-5 10 0" stroke="#1a1a1a" stroke-width="2" fill="none"/></g></g>' +
      tag("JUNGLE RULES", 236, 40, 22, GOLD, -5),
      sky("zg", "#5aa7d8", "#f2c98a"));
  }

  /* 5. E 149 St and Willis Av: street signs, the light, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cg)"/>' + stars(16) +
      /* tenement behind */
      '<rect x="262" y="24" width="138" height="196" fill="#6e3a2e"/>' +
      [[276, 40], [318, 40], [360, 40], [276, 86], [318, 86], [360, 86], [276, 132], [318, 132], [360, 132]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="24" height="30" fill="#ffd27a" opacity=".5"/>').join("") +
      '<path d="M262 30h138M262 76h138M262 122h138" stroke="#4a241c" stroke-width="3"/>' +
      /* wall with the tags */
      '<rect x="14" y="70" width="236" height="150" fill="#3a3436"/>' +
      tag("FRENCH", 26, 136, 34, GOLD, -7) + tag("MONTANA", 38, 182, 32, RED, -5) + tag("SOUTH BRONX", 60, 212, 18, GREEN, -3) +
      /* streetlight */
      '<rect x="240" y="56" width="5" height="164" fill="#1d2329"/><path d="M242 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M258 62h22l-5 8h-12z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M258 70h22l30 150h-82z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="196" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="242" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 149 St</text>' +
      '<rect x="196" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="242" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Willis Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("cg", "#150a0a", "#3e1a1a"));
  }

  window.SCENES = { train, hub, bridge, zoo, corner };
})();
