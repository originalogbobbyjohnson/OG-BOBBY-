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

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: the long limestone side peeking over the E 149 St rooftops, lights blazing, flags waving on the roof */
(function () {
  /* Y: little kit for drawing the stadium into the corner's sky. Every piece is plain SVG in the 400 x 260 frame. */
  const Y = (function () {
    const css = '<style>' +
      '@keyframes ysP{0%,100%{opacity:1}50%{opacity:.5}}.ysP{animation:ysP 1.8s ease-in-out infinite}' +
      '@keyframes ysF{0%{transform:scale(.1);opacity:0}12%{opacity:1}100%{transform:scale(1);opacity:0}}.ysF{transform-box:fill-box;transform-origin:50% 50%;animation:ysF 2.6s ease-out infinite}' +
      '@keyframes ysB{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ysB{transform-box:fill-box;transform-origin:50% 100%;animation:ysB 5s ease-in-out infinite}' +
      '@keyframes ysX{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ysX{animation:ysX 16s linear infinite}' +
      '@keyframes ysW{0%,100%{transform:skewY(0)}50%{transform:skewY(-14deg)}}.ysW{transform-box:fill-box;transform-origin:0 50%;animation:ysW 1.1s ease-in-out infinite}' +
      '@keyframes ysD{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.ysD{animation:ysD 9s ease-in-out infinite}' +
      '@keyframes ysS{from{transform:translateY(0)}to{transform:translateY(60px)}}.ysS{animation:ysS 3s linear infinite}.ysR{animation-duration:.7s}' +
      '@keyframes ysK{0%,100%{opacity:1}50%{opacity:.2}}.ysK{animation:ysK 1s steps(1) infinite}' +
      '</style>';
    const g = (x, y, s, inner) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + inner + '</g>';
    /* the white frieze: top rail, posts, and the arched openings hanging under it */
    const frieze = (x0, x1, y, k, c) => {
      let p = 'M' + x0 + ' ' + y + 'H' + x1;
      for (let x = x0; x < x1 - 0.1; x += k) p += 'M' + x + ' ' + y + 'v6M' + x + ' ' + (y + 4.5) + 'q' + (k / 2) + ' -5 ' + k + ' 0';
      return '<path d="' + p + 'M' + x1 + ' ' + y + 'v6" fill="none" stroke="' + (c || "#f4f1e8") + '" stroke-width="1.4"/>';
    };
    /* light banks on poles, with a soft glow */
    const lights = (xs, y, off) => xs.map((p, i) => { const x = p.length ? p[0] : p, yy = p.length ? p[1] : y;
      return '<g' + (off ? ' class="ysK" style="animation-duration:' + (2 + i * .7) + 's"' : '') + '><ellipse class="ysP" cx="' + x + '" cy="' + (yy - 11) + '" rx="11" ry="6" fill="#fff4c8" opacity=".24"/>' +
      '<path d="M' + x + ' ' + yy + 'v-8" stroke="#3a3f48" stroke-width="1.2"/><rect x="' + (x - 6) + '" y="' + (yy - 13) + '" width="12" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>' +
      '<path d="M' + (x - 2) + ' ' + (yy - 13) + 'v5M' + (x + 2) + ' ' + (yy - 13) + 'v5" stroke="#c9c3a8" stroke-width=".5"/></g>'; }).join("");
    /* the limestone face: tall arches either side of the big gate, a gold band over the gate (no lettering) */
    const face = (w, lit) => {
      const n = Math.max(2, Math.round((w - 36) / 2 / 20)), step = (w / 2 - 22) / n, aw = step * 0.6, gx = w / 2;
      let a = '<rect x="0" y="-58" width="' + w + '" height="58" fill="' + (lit ? "#e9dcb8" : "#d8cfba") + '"/>' +
        '<rect x="-2" y="-62" width="' + (w + 4) + '" height="5" fill="#f1ead8"/><rect x="0" y="-8" width="' + w + '" height="8" fill="#a99f8a"/>';
      for (let i = 0; i < n; i++) [6 + i * step, w - 6 - i * step - aw].forEach(x =>
        a += '<path d="M' + x.toFixed(1) + ' -8V-42a' + (aw / 2).toFixed(1) + ' ' + (aw / 2).toFixed(1) + ' 0 0 1 ' + aw.toFixed(1) + ' 0V-8z" fill="' + (lit ? "#ffcf78" : "#4a4652") + '"' + (lit ? ' opacity=".9"' : '') + '/>');
      a += '<path d="M' + (gx - 15) + ' -8V-38a15 15 0 0 1 30 0V-8z" fill="' + (lit ? "#ffe2a0" : "#3a3640") + '" stroke="#b8ad94" stroke-width="2"/>' +
        '<rect x="' + (gx - 20) + '" y="-56" width="40" height="5" fill="#c9a24a"/>';
      return a;
    };
    /* the upper deck behind the face, with the frieze riding on top and light banks above it */
    const deck = (w, lit, banks) => '<path d="M-4 -60L6 -74H' + (w - 6) + 'L' + (w + 4) + ' -60z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, w - 6, -80, 7) +
      '<path d="M6 -80H' + (w - 6) + '" stroke="#f4f1e8" stroke-width="2"/>' + lights(banks || [w * 0.2, w * 0.5, w * 0.8], -80);
    const halo = (c) => '<radialGradient id="ysH"><stop offset="0" stop-color="' + (c || "#ffe9b0") + '" stop-opacity=".55"/><stop offset="1" stop-color="' + (c || "#ffe9b0") + '" stop-opacity="0"/></radialGradient>';
    return {
      css,
      /* straight-on front: face + deck */
      front: (x, y, s, o) => g(x, y, s, deck(o.w || 200, o.lit, o.banks) + face(o.w || 200, o.lit)),
      /* three-quarter view: front face plus the long side running away to the right */
      corner3q: (x, y, s, o) => {
        const lit = o.lit;
        let side = '<path d="M120 -62L200 -50V-4L120 0z" fill="' + (lit ? "#cbbd99" : "#bdb4a0") + '"/><path d="M120 -62L200 -50" stroke="#f1ead8" stroke-width="4"/>';
        for (let i = 0; i < 5; i++) { const x0 = 128 + i * 15, x1 = x0 + 8, t0 = -55 + (x0 - 120) * 0.15, t1 = -55 + (x1 - 120) * 0.15, b0 = -8 + (x0 - 120) * 0.05;
          side += '<path d="M' + x0 + ' ' + b0 + 'V' + (t0 + 10) + 'Q' + ((x0 + x1) / 2) + ' ' + (t0 + 2) + ' ' + x1 + ' ' + (t1 + 10) + 'V' + (b0 - 0.4) + 'z" fill="' + (lit ? "#ffc865" : "#4a4652") + '"' + (lit ? ' opacity=".85"' : '') + '/>'; }
        const top = '<path d="M-4 -60L6 -74H120L200 -62V-50z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, 118, -80, 7) +
          '<path d="M118 -80L198 -68" stroke="#f4f1e8" stroke-width="2"/><path d="M118 -80L198 -68M126 -79v5M138 -77v5M150 -75v5M162 -74v5M174 -72v5M186 -70v5M198 -68v5" fill="none" stroke="#f4f1e8" stroke-width="1.2"/>' +
          '<path d="M6 -80H118" stroke="#f4f1e8" stroke-width="2"/>' + lights([30, 90, 150, 190], -78);
        return g(x, y, s, top + side + face(120, lit));
      },
      /* far off: a low dark mass, the frieze a thin bright lace on top, the lights glowing */
      far: (x, y, s, o) => { let ar = ""; for (let i = 0; i < 15; i++) ar += '<path d="M' + (16 + i * 11.6) + ' -3V-14a3 3 0 0 1 6 0V-3z" fill="' + (o.win ? "#ffcf78" : "#4a4652") + '"/>';
        return halo(o.hc) + g(x, y, s,
        '<ellipse class="ysP" cx="100" cy="-34" rx="' + (o.halo || 120) + '" ry="' + ((o.halo || 120) / 3) + '" fill="url(#ysH)"/>' +
        '<path d="M2 -18V-22Q100 -44 198 -22V-18z" fill="' + (o.c || "#2c3040") + '"/>' +
        '<path d="M6 -27Q100 -48 194 -27" fill="none" stroke="#f4f1e8" stroke-width="1.6"/><path d="M6 -24.5Q100 -45.5 194 -24.5" fill="none" stroke="#f4f1e8" stroke-width="4" stroke-dasharray="1.4 2.2" opacity=".85"/>' +
        lights([[30, -33], [72, -40], [128, -40], [170, -33]], 0, o.off) +
        '<rect x="8" y="-20" width="184" height="20" fill="' + (o.lime || "#c9c0aa") + '"/><rect x="6" y="-22" width="188" height="3" fill="#ece5d2"/>' + ar +
        '<path d="M92 -3V-15a8 8 0 0 1 16 0V-3z" fill="' + (o.win ? "#ffe2a0" : "#3a3640") + '"/><rect x="88" y="-19" width="24" height="3" fill="#c9a24a"/>'); },
      /* the city spread out below a high corner, for the views looking down */
      valley: (y0, c, w) => { let d = '<rect x="0" y="' + y0 + '" width="400" height="' + (226 - y0) + '" fill="' + c + '"/>'; for (let i = 0; i < 70; i++) d += '<rect x="' + ((i * 53) % 400) + '" y="' + (y0 + 4 + (i * 29) % (222 - y0)) + '" width="2" height="2" fill="' + (w || "#ffd98a") + '" opacity=".6"/>'; return d; },
      /* from up on the Highbridge bluff: down into the bowl */
      bowl: (cx, cy, s, o) => {
        let b = '<ellipse rx="100" ry="36" fill="#d8cfba"/><ellipse rx="93" ry="32" fill="#2c4470"/><ellipse rx="80" ry="27" cy="2" fill="#3b5d96"/>' +
          '<ellipse rx="66" ry="21" cy="4" fill="' + (o.day ? "#3fa34a" : "#2f9a3e") + '"/><ellipse rx="54" ry="16" cy="5" fill="none" stroke="#4fb85a" stroke-width="5" opacity=".6"/>' +
          '<path d="M0 22L18 13L0 6L-18 13z" fill="#c08850"/><path d="M0 18L11 13L0 9L-11 13z" fill="#3fa34a"/>' +
          '<rect x="-1.5" y="20.5" width="3" height="3" fill="#fff"/><rect x="16.5" y="11.5" width="3" height="3" fill="#fff"/><rect x="-1.5" y="4.5" width="3" height="3" fill="#fff"/><rect x="-19.5" y="11.5" width="3" height="3" fill="#fff"/>' +
          '<ellipse rx="97" ry="34" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-dasharray="1.4 1.8"/><ellipse rx="98" ry="35" fill="none" stroke="#f4f1e8" stroke-width="1"/>' +
          '<rect x="-20" y="-38" width="40" height="12" fill="#14161c"/><g class="ysK"><path d="M-16 -34h14M2 -34h14M-16 -30h26" stroke="#7fd4ff" stroke-width="1.6"/></g>';
        [[-90, -12], [-50, -32], [50, -32], [90, -12], [-80, 20], [80, 20]].forEach(p => b += '<circle class="ysP" cx="' + p[0] + '" cy="' + (p[1] - 6) + '" r="9" fill="#fff4c8" opacity=".3"/><rect x="' + (p[0] - 5) + '" y="' + (p[1] - 9) + '" width="10" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>');
        return g(cx, cy, s, b);
      },
      /* light in the sky: the horizon tint for dusk, dawn, golden afternoon */
      tint: (top, bottom, y0) => '<linearGradient id="ysT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '" stop-opacity="0"/><stop offset="1" stop-color="' + bottom + '" stop-opacity=".85"/></linearGradient>' +
        '<rect x="0" y="' + (y0 || 0) + '" width="400" height="' + (226 - (y0 || 0)) + '" fill="url(#ysT)"/>',
      halo,
      clouds: (list, c) => list.map((p, i) => '<g class="ysD" style="animation-delay:-' + (i * 3) + 's"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/><ellipse cx="' + (p[0] + p[2] * .3) + '" cy="' + (p[1] - p[2] / 6) + '" rx="' + (p[2] * .5) + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/></g>').join(""),
      plane: (y, dur) => '<g class="ysX" style="animation-duration:' + (dur || 16) + 's"><path d="M0 ' + y + 'h16l4 -2h-6l-5 -5h-3l3 5h-9z" fill="#2a2d36"/><circle class="ysK" cx="2" cy="' + y + '" r="1.6" fill="#ff4a4a"/><circle cx="17" cy="' + y + '" r="1.2" fill="#fff"/></g>',
      blimp: (x, y) => '<g class="ysD"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#d9dde3" stroke="#6b7280" stroke-width="1"/><path d="M' + (x + 22) + ' ' + y + 'l10 -8v16z" fill="#9aa1aa"/><rect x="' + (x - 6) + '" y="' + (y + 8) + '" width="12" height="4" rx="1" fill="#3a3f48"/>' +
        '<rect class="ysK" x="' + (x - 16) + '" y="' + (y - 2) + '" width="28" height="4" rx="2" fill="#ffd66b"/></g>',
      fireworks: (list) => list.map((p, i) => { let r = ""; for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; r += 'M' + p[0] + ' ' + p[1] + 'l' + (Math.cos(a) * p[2]).toFixed(1) + ' ' + (Math.sin(a) * p[2]).toFixed(1); }
        return '<path class="ysF" style="animation-delay:-' + (i * 0.9) + 's" d="' + r + '" stroke="' + p[3] + '" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2"/>'; }).join(""),
      beams: (list) => list.map((p, i) => '<path class="ysB" style="animation-delay:-' + (i * 2.4) + 's" d="M' + p[0] + ' ' + p[1] + 'l-9 -' + p[2] + 'h18z" fill="#fff6d8" opacity=".16"/>').join(""),
      birds: (x, y) => '<g class="ysX" style="animation-duration:22s"><path d="M' + x + ' ' + y + 'q3 -3 6 0q3 -3 6 0M' + (x + 14) + ' ' + (y - 6) + 'q2 -2 4 0q2 -2 4 0M' + (x - 10) + ' ' + (y - 4) + 'q2 -2 4 0q2 -2 4 0" fill="none" stroke="#22252e" stroke-width="1.3"/></g>',
      flags: (list) => list.map((p, i) => '<path d="M' + p[0] + ' ' + p[1] + 'v-' + p[2] + '" stroke="#e6e6e6" stroke-width="1"/><g class="ysW" style="animation-delay:-' + (i * 0.3) + 's"><rect x="' + p[0] + '" y="' + (p[1] - p[2]) + '" width="' + (p[2] * .6) + '" height="' + (p[2] * .38) + '" fill="' + (i % 2 ? "#1f3a8a" : "#e8303a") + '"/><path d="M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .13) + 'h' + (p[2] * .6) + 'M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .26) + 'h' + (p[2] * .6) + '" stroke="#fff" stroke-width=".8"/></g>').join(""),
      /* an el: girder, posts, and a 4 (or 5) train rolling across it */
      el: (x0, x1, y, s, n) => {
        let p = '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + (4 * s) + '" fill="#2f3a33"/>';
        for (let x = x0 + 6; x < x1; x += 26 * s) p += '<rect x="' + x + '" y="' + y + '" width="' + (2 * s) + '" height="' + (40 * s) + '" fill="#2f3a33"/>';
        let cars = ""; for (let c = 0; c < 3; c++) cars += '<rect x="' + (c * 34 * s) + '" y="' + (y - 11 * s) + '" width="' + (32 * s) + '" height="' + (11 * s) + '" rx="' + (2 * s) + '" fill="#c3c8cf" stroke="#6b7280" stroke-width=".8"/><path d="M' + (c * 34 * s + 4 * s) + ' ' + (y - 7 * s) + 'h' + (24 * s) + '" stroke="#ffe9b0" stroke-width="' + (3 * s) + '" stroke-dasharray="' + (4 * s) + ' ' + (2 * s) + '"/>';
        return p + '<g class="ysX" style="animation-duration:11s">' + cars + '<circle cx="' + (96 * s) + '" cy="' + (y - 5.5 * s) + '" r="' + (4.5 * s) + '" fill="#00933c"/><text x="' + (96 * s) + '" y="' + (y - 3.3 * s) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (6 * s) + '" fill="#fff">' + (n || "4") + '</text></g>';
      },
      /* falling weather, looped in a box: rain streaks or snow */
      weather: (x, y, w, h, kind) => { let d = ""; for (let i = 0; i < Math.round(w * 60 / 300); i++) { const px = x + (i * 37) % w, py0 = (i * 23) % 60;
        for (let py = y - 60 + py0; py < y + h; py += 60) d += kind === "snow" ? '<circle cx="' + px + '" cy="' + py + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".85"/>' : '<path d="M' + px + ' ' + py + 'l-2 9" stroke="#b9c8dc" stroke-width="1" opacity=".6"/>'; }
        return '<clipPath id="ysC"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/></clipPath><g clip-path="url(#ysC)"><g class="ysS' + (kind === "snow" ? "" : " ysR") + '">' + d + '</g></g>'; },
      fog: (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" opacity=".38"/><g class="ysD"><ellipse cx="' + (x + w * .3) + '" cy="' + (y + h * .55) + '" rx="' + (w * .4) + '" ry="' + (h * .18) + '" fill="' + c + '" opacity=".45"/><ellipse cx="' + (x + w * .75) + '" cy="' + (y + h * .35) + '" rx="' + (w * .35) + '" ry="' + (h * .14) + '" fill="' + c + '" opacity=".4"/></g>',
      moon: (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 8) + '" fill="#fff1d6" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff1d6"/><circle cx="' + (x - r * .3) + '" cy="' + (y - r * .2) + '" r="' + (r * .2) + '" fill="#e8dcc0"/><circle cx="' + (x + r * .35) + '" cy="' + (y + r * .3) + '" r="' + (r * .14) + '" fill="#e8dcc0"/>',
      river: (x0, x1, y, h) => '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + h + '" fill="#1c2a44"/><g class="ysD"><path d="M' + (x0 + 10) + ' ' + (y + 3) + 'h30M' + (x0 + 70) + ' ' + (y + 6) + 'h22M' + (x0 + 130) + ' ' + (y + 4) + 'h26" stroke="#ffcf78" stroke-width="1.4" opacity=".7"/></g>'
    };
  })();
  const base = window.SCENES.corner;
  window.SCENES.corner = function () {
    const art = '<g>' + Y.css +
      Y.front(24, 74, .78, { lit: true, w: 280, banks: [40, 110, 170, 240] }) + Y.flags([[40, 6, 14], [110, 6, 14], [170, 6, 14], [240, 6, 14]]) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
