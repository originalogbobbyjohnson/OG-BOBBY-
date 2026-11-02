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

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: huge close-up of the limestone front from across 161st, arches and gate glowing gold, flags whipping on the roof */
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
      Y.front(268, 222, 1.05, { lit: true, w: 180, banks: [40, 140] }) + Y.flags([[300, 132, 18], [360, 132, 18]]) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
