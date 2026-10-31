/* Bronx opening scenes for the Swizz Beatz game: Show Time, the Monster, the One Man Band Man.
   The 4 pulling into 161 St-Yankee Stadium up on the el, the Bronx County Courthouse on the Grand Concourse with Walk of Fame banners,
   the Co-op City towers in the northeast Bronx where he went to school, the Bronx Zoo's bronze Rainey Gates, and the Walk of Fame corner
   at the Grand Concourse and E 161 St. 400 x 260 each. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.bannr{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}.b2{animation-delay:-1.5s}' +
    '@keyframes fly{0%{transform:translate(-40px,30px)}100%{transform:translate(460px,-30px)}}' +
    '.bird{animation:fly 10s linear infinite}.bird2{animation-delay:-5s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.wing{transform-box:fill-box;transform-origin:50% 100%;animation:flap .5s ease-in-out infinite}' +
    '@keyframes blink{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.blk{animation:blink 1.8s ease-in-out infinite}.blk2{animation-delay:-.6s}.blk3{animation-delay:-1.2s}' +
    '@keyframes cloud{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:cloud 24s linear infinite}.cld2{animation-delay:-12s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const banner = (x, y, cls, c, txt) => '<g class="bannr ' + cls + '"><rect x="' + x + '" y="' + y + '" width="22" height="44" fill="' + c + '" stroke="#111" stroke-width="1"/>' +
    '<text x="' + (x + 11) + '" y="' + (y + 18) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="7" fill="#111">BX</text>' +
    '<text x="' + (x + 11) + '" y="' + (y + 32) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="5.5" fill="#111">' + txt + '</text></g>';
  const GOLD = "#ffcc00", RED = "#ff3b30", CYAN = "#3dd6ff", GREEN = "#00933c", ORANGE = "#ff6319";

  /* 1. The 4 pulling into 161 St-Yankee Stadium, up on the el over River Ave (the B and D run underneath) */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="196" width="6" height="64" fill="#24384a"/><path d="M' + (x + 3) + ' 200 L' + (x + 47) + ' 216 M' + (x + 47) + ' 200 L' + (x + 3) + ' 216" stroke="#24384a" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 260; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".9"/>';
    let lights = "";
    [40, 130, 270, 360].forEach((x, i) => lights += '<rect x="' + (x - 2) + '" y="76" width="4" height="50" fill="#555"/><rect class="flk' + (i % 2 ? " flk2" : "") + '" x="' + (x - 14) + '" y="70" width="28" height="10" rx="2" fill="#fffbe0"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(20) +
      /* the ballpark wall glowing behind */
      '<rect x="0" y="96" width="400" height="34" fill="#d9d0bb"/><path d="M0 96h400" stroke="#fff" stroke-width="3"/>' + lights +
      '<rect x="0" y="12" width="400" height="8" fill="#24384a"/>' +
      '<rect x="40" y="20" width="320" height="50" rx="4" fill="#111"/><rect x="40" y="20" width="320" height="4" fill="#fff"/>' +
      '<text x="54" y="45" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">161 St-Yankee Stadium</text>' +
      bullet(66, 58, "4", GREEN) + bullet(92, 58, "B", ORANGE) + bullet(118, 58, "D", ORANGE) +
      '<g class="anim-train">' +
        '<rect x="8" y="124" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="5" fill="' + GREEN + '"/>' + windows +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(294, 145, "4", GREEN) +
      '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/><rect x="0" y="190" width="400" height="10" fill="#3a3d41"/>' + girders +
      tag("SHOW TIME", 20, 248, 26, GOLD, -5) + tag("SWIZZ", 260, 250, 26, RED, -4),
      sky("g1", "#0b1230", "#3b2a6b"));
  }

  /* 2. The Bronx County Courthouse on the Grand Concourse: pale limestone, art deco piers, Walk of Fame banners on the light poles */
  function courthouse() {
    let piers = "";
    for (let x = 72; x < 330; x += 22) piers += '<rect x="' + x + '" y="70" width="8" height="128" fill="#d8d0bd"/><rect x="' + (x + 8) + '" y="76" width="14" height="118" fill="#8b98a4"/>';
    let win = "";
    for (let x = 82; x < 330; x += 22) for (let y = 84; y < 190; y += 22) win += '<rect class="' + ((x + y) % 5 ? "" : "flk") + '" x="' + (x - 2) + '" y="' + y + '" width="10" height="12" fill="' + ((x + y) % 4 ? "#3a4652" : "#ffd98a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="40" cy="40" rx="30" ry="9" fill="#fff" opacity=".8"/></g><g class="cld cld2"><ellipse cx="40" cy="60" rx="24" ry="7" fill="#fff" opacity=".7"/></g>' +
      '<rect x="150" y="30" width="100" height="40" fill="#e6dfcc"/><rect x="164" y="40" width="72" height="24" fill="#cbc2ab"/>' +
      '<rect x="60" y="64" width="280" height="140" fill="#e6dfcc" stroke="#c4baa1" stroke-width="2"/>' + piers + win +
      /* sculpture groups at the corners */
      '<rect x="22" y="160" width="40" height="44" fill="#cfc6ae"/><path d="M30 160q10-30 24 0z" fill="#b9b09a"/><rect x="338" y="160" width="40" height="44" fill="#cfc6ae"/><path d="M346 160q10-30 24 0z" fill="#b9b09a"/>' +
      '<rect x="170" y="176" width="60" height="28" fill="#4a3a2a"/><rect x="150" y="200" width="100" height="6" fill="#c4baa1"/>' +
      /* the Concourse + light poles with banners */
      '<rect x="0" y="206" width="400" height="54" fill="#3d4148"/><path d="M0 232h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="10" y="120" width="4" height="86" fill="#1d2329"/>' + banner(14, 128, "", GOLD, "SWIZZ") +
      '<rect x="380" y="120" width="4" height="86" fill="#1d2329"/>' + banner(358, 128, "b2", RED, "SHOW") +
      '<g class="car"><rect x="0" y="212" width="54" height="16" rx="5" fill="' + CYAN + '"/><rect x="10" y="206" width="30" height="9" rx="3" fill="#1e3a4a"/><circle cx="12" cy="230" r="5" fill="#111"/><circle cx="42" cy="230" r="5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="236" width="54" height="16" rx="5" fill="' + GOLD + '"/><rect x="10" y="230" width="30" height="9" rx="3" fill="#3a2f0a"/><circle cx="12" cy="254" r="5" fill="#111"/><circle cx="42" cy="254" r="5" fill="#111"/></g>',
      sky("g2", "#5aa0e0", "#d9ecf8"));
  }

  /* 3. Co-op City, northeast Bronx: the tall brown-brick towers and the Hutch at night */
  function coopcity() {
    let towers = "";
    [[10, 40, 70], [96, 22, 80], [196, 50, 66], [282, 30, 78]].forEach(([x, y, w], i) => {
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (210 - y) + '" fill="' + (i % 2 ? "#7a4a32" : "#8a5638") + '"/>' +
        '<rect x="' + (x + w / 2 - 4) + '" y="' + y + '" width="8" height="' + (210 - y) + '" fill="#5e3826"/>';
      for (let wy = y + 8; wy < 200; wy += 10) for (let wx = x + 4; wx < x + w - 6; wx += 9) if (Math.abs(wx - (x + w / 2)) > 6)
        towers += '<rect x="' + wx + '" y="' + wy + '" width="5" height="5" fill="' + ((wx * 7 + wy * 3) % 11 < 3 ? "#ffd27a" : "#2b1d18") + '"' + ((wx + wy) % 23 === 0 ? ' class="blk"' : "") + '/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(30) +
      '<circle cx="360" cy="34" r="14" fill="#f4f1de"/>' + towers +
      '<path d="M0 214h400" stroke="#333" stroke-width="6"/><rect x="0" y="216" width="400" height="44" fill="#1e2228"/>' +
      '<path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="50" height="12" rx="4" fill="' + RED + '"/><circle cx="48" cy="228" r="2.5" fill="#fff6c2"/></g>' +
      '<g class="car car2"><rect x="0" y="242" width="50" height="12" rx="4" fill="#e8e8e8"/><circle cx="48" cy="248" r="2.5" fill="#fff6c2"/></g>' +
      tag("THE MONSTER", 110, 44, 22, GOLD, -4),
      sky("g3", "#0a0f24", "#2a3460"));
  }

  /* 4. The Bronx Zoo's Rainey Gates: green-bronze gates with animals, granite posts, the park trees and birds */
  function zoo() {
    let bars = "";
    for (let x = 108; x <= 292; x += 12) bars += '<path d="M' + x + ' 104V210" stroke="#3f6f5a" stroke-width="3"/>';
    let trees = "";
    [[30, 120], [70, 100], [330, 104], [372, 122]].forEach(([x, y]) => trees += '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="100" fill="#3b2a1e"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="30" fill="#2f7d45"/><circle cx="' + (x + 14) + '" cy="' + (y + 10) + '" r="20" fill="#3c9455"/>');
    const bird = cls => '<g class="bird ' + cls + '"><path class="wing" d="M0 0q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + trees +
      /* granite posts with lamps */
      '<rect x="82" y="80" width="24" height="134" fill="#b9b4a8" stroke="#8d887c" stroke-width="2"/><rect x="294" y="80" width="24" height="134" fill="#b9b4a8" stroke="#8d887c" stroke-width="2"/>' +
      '<circle class="flk" cx="94" cy="70" r="8" fill="#fff3c2"/><circle class="flk flk2" cx="306" cy="70" r="8" fill="#fff3c2"/>' +
      /* the arched bronze top */
      '<path d="M106 110Q200 30 294 110" stroke="#3f6f5a" stroke-width="6" fill="none"/><path d="M106 104h188" stroke="#3f6f5a" stroke-width="4"/>' + bars +
      /* animal silhouettes in the bronze: lion, deer, bird, bear */
      '<g fill="#5f9a7e" stroke="#2c4f40" stroke-width="1.2">' +
        '<path d="M150 92q8-14 22-8q10 6 6 16h-24z"/><circle cx="148" cy="88" r="9"/>' +
        '<path d="M224 98l4-16 6 4 4-10 4 10 6-4 2 16z"/>' +
        '<path d="M190 70q10-12 20 0q-10 6-20 0z"/>' +
        '<rect x="128" y="150" width="34" height="18" rx="8"/><circle cx="130" cy="150" r="7"/>' +
        '<rect x="240" y="150" width="34" height="18" rx="8"/><circle cx="272" cy="148" r="7"/>' +
      '</g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#9b8f78"/><path d="M0 214h400" stroke="#7d725e" stroke-width="3"/>' +
      bird("") + bird("bird2"),
      sky("g4", "#7cc0ea", "#e0f1fa"));
  }

  /* 5. The Grand Concourse and E 161 St, the Bronx Walk of Fame: street signs, a banner, the tag wall */
  function corner() {
    let brick = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 4 : 20; x < 250; x += 32) brick += '<rect x="' + x + '" y="' + y + '" width="30" height="10" fill="#6b3b2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<rect x="4" y="60" width="250" height="160" fill="#55301f"/>' + brick +
      tag("SWIZZ BEATZ", 14, 126, 34, GOLD, -7) + tag("SHOW TIME", 30, 180, 28, RED, -4) + tag("MONSTER", 150, 204, 22, CYAN, -6) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      sign(262, 88, 82, "E 161 St") + sign(250, 110, 106, "Grand Concourse") +
      banner(306, 140, "", GOLD, "SWIZZ") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0b1020", "#26365a"));
  }

  window.SCENES = { train, courthouse, coopcity, zoo, corner };
})();
