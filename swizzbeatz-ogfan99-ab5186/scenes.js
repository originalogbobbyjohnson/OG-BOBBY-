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

  /* 3. The Bronx Museum of the Arts on the Grand Concourse at E 165th: the folded, sawtooth glass-and-steel front, art up in the windows (the Dean Collection's home turf) */
  function coopcity() {
    const lbl = (x, y, s, size, c) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" fill="' + c + '">' + s + '</text>';
    let folds = "";
    for (let i = 0; i < 8; i++) { const x = 90 + i * 30;
      folds += '<path d="M' + x + ' 210V' + (70 + (i % 2) * 10) + 'l15-14V210z" fill="#c9d3dc"/><path d="M' + (x + 15) + ' 210V' + (56 + (i % 2) * 10) + 'l15 14V210z" fill="#8a9aa8"/>';
      for (let y = 90 + (i % 2) * 10; y < 200; y += 22) folds += '<path d="M' + x + ' ' + y + 'l15-6M' + (x + 15) + ' ' + (y - 6) + 'l15 6" stroke="#5a6a78" stroke-width="1"/>'; }
    const art = [[100, 120, GOLD], [160, 150, RED], [220, 110, CYAN], [280, 140, ORANGE]].map(([x, y, c], i) => '<rect class="blk' + (i % 3 ? ' blk' + (i % 3 + 1) : '') + '" x="' + x + '" y="' + y + '" width="14" height="18" fill="' + c + '" opacity=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + '<g class="cld"><ellipse cx="0" cy="40" rx="44" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="80" width="86" height="130" fill="#c8b48a"/><rect x="330" y="70" width="70" height="140" fill="#b8a07a"/>' +
      [[10, 96], [40, 96], [10, 140], [40, 140], [340, 90], [366, 90], [340, 136], [366, 136]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="16" height="22" fill="#2b3440"/>').join("") +
      folds + art + '<rect x="86" y="200" width="244" height="10" fill="#4a5662"/>' +
      '<rect x="0" y="210" width="400" height="10" fill="#b0aa9c"/><rect x="0" y="220" width="400" height="40" fill="#1e2228"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="224" width="50" height="12" rx="4" fill="' + GOLD + '"/><circle cx="48" cy="230" r="2.5" fill="#fff6c2"/></g>' +
      '<g class="car car2"><rect x="0" y="244" width="50" height="12" rx="4" fill="' + RED + '"/><circle cx="48" cy="250" r="2.5" fill="#fff6c2"/></g>' +
      sign(286, 8, 108, "Grand Concourse") + sign(318, 30, 76, "E 165 St") +
      lbl(150, 24, "THE BRONX MUSEUM", 15, "#14202c") + lbl(150, 38, "OF THE ARTS", 10, "#14202c") +
      tag("SWIZZ", 14, 196, 26, GOLD, -6) + tag("SHOW TIME", 300, 256, 18, RED, -3),
      sky("g3", "#8fc3ea", "#f2e2c4"));
  }

  /* 4. The Andrew Freedman Home on the Grand Concourse at E 166th (1924): the pale limestone palazzo behind the iron fence, the lawn, birds over the roofline */
  function zoo() {
    const lbl = (x, y, s, size, c) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" fill="' + c + '">' + s + '</text>';
    let win = "";
    for (let x = 62; x < 340; x += 30) { if (x > 176 && x < 216) continue; win += '<rect x="' + x + '" y="92" width="14" height="22" fill="#2b3440"/><path d="M' + (x - 3) + ' 92l10-8 10 8z" fill="#d8ccb0"/><rect x="' + x + '" y="134" width="14" height="24" fill="#2b3440"/>'; }
    let fence = ""; for (let x = 0; x <= 400; x += 8) fence += '<path d="M' + x + ' 222V196" stroke="#111" stroke-width="2"/><path d="M' + (x - 2) + ' 196l2-5 2 5z" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="bird"><path class="wing" d="M0 40q6-6 12 0q6-6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g><g class="bird bird2"><path class="wing" d="M0 56q5-5 10 0q5-5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      /* the palazzo: limestone, rusticated ground floor, cornice, center entry */
      '<rect x="50" y="78" width="300" height="104" fill="#e8dcc0"/><rect x="44" y="70" width="312" height="10" fill="#d0c2a2"/><rect x="40" y="66" width="320" height="5" fill="#bfb090"/>' +
      [128, 140, 152, 164, 176].map(y => '<path d="M50 ' + y + 'h300" stroke="#cdbf9e" stroke-width="1"/>').join("") + win +
      '<rect x="176" y="120" width="48" height="62" fill="#d8ccb0"/><path d="M186 182v-38a14 14 0 0 1 28 0v38z" fill="#3a2a22"/><path d="M172 120l28-16 28 16z" fill="#d0c2a2"/>' +
      '<path d="M120 46h160v20H120z" fill="#e8dcc0"/><path d="M116 46h168" stroke="#bfb090" stroke-width="4"/>' +
      lbl(200, 61, "ANDREW FREEDMAN HOME", 9, "#5a4a32") +
      '<rect x="0" y="182" width="400" height="40" fill="#5aa04e"/>' + fence + '<path d="M0 196h400M0 210h400" stroke="#111" stroke-width="1.5"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#1e2228"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car car2"><rect x="0" y="228" width="50" height="12" rx="4" fill="' + CYAN + '"/><circle cx="48" cy="234" r="2.5" fill="#fff6c2"/></g>' +
      lbl(200, 24, "GRAND CONCOURSE AT E 166TH · 1924", 11, "#14202c") +
      tag("RUFF RYDERS", 14, 256, 16, GOLD, -3) + tag("SWIZZ", 300, 256, 18, CYAN, -4),
      sky("g4", "#9ed1ef", "#f6e6c8"));
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
