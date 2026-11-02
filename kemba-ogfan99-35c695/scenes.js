/* Hunts Point opening scenes for Kemba's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes paddle{0%{transform:translateX(-60px)}100%{transform:translateX(440px)}}' +
    '.kayak{animation:paddle 14s linear infinite}.kayak2{animation-delay:-7s}' +
    '@keyframes truck{0%{transform:translateX(420px)}100%{transform:translateX(-200px)}}' +
    '.truck{animation:truck 9s linear infinite}' +
    '@keyframes lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}' +
    '.lift{animation:lift 2.4s ease-in-out infinite}' +
    '@keyframes swim{0%{transform:translateX(0)}50%{transform:translateX(70px)}100%{transform:translateX(0)}}' +
    '.swim{animation:swim 6s ease-in-out infinite}.swim2{animation-delay:-3s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}100%{transform:translate(440px,-20px)}}' +
    '.gull{animation:gull 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + letter + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f2b134", GREEN = "#00933c", BONE = "#efe8d6", SKY = "#7fd3ff";

  /* 1. Hunts Point Av: the underground Pelham line platform, white tile walls, the 6 rolling in */
  function train() {
    let tiles = "";
    for (let y = 20; y < 116; y += 8) for (let x = (y / 8) % 2 ? -8 : 0; x < 400; x += 16) tiles += '<rect x="' + x + '" y="' + y + '" width="15" height="7" fill="#e9e6dc"/>';
    let cols = "";
    [24, 66, 330, 372].forEach(x => cols += '<rect x="' + x + '" y="0" width="12" height="190" fill="#1c3b2a"/><rect x="' + (x - 3) + '" y="0" width="18" height="6" fill="#163021"/>');
    let windows = "";
    for (let x = 22; x < 260; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#ffefb0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfcabd"/>' + tiles +
      /* mosaic band */
      '<rect x="0" y="40" width="400" height="12" fill="#1f6b45"/>' +
      (function () { let m = ""; for (let x = 4; x < 400; x += 22) m += '<rect x="' + x + '" y="43" width="6" height="6" fill="' + GOLD + '"/>'; return m; })() +
      /* ceiling lights */
      '<rect x="60" y="6" width="60" height="5" fill="#fff9e0" class="flk"/><rect x="260" y="6" width="60" height="5" fill="#fff9e0" class="flk flk2"/>' +
      /* black station sign */
      '<rect x="90" y="62" width="220" height="32" rx="4" fill="#111"/><rect x="90" y="62" width="220" height="4" fill="#fff"/>' +
      '<text x="102" y="86" ' + FONT + ' font-size="15" fill="#fff">Hunts Point Av</text>' + bullet(286, 79, "6", "#00933c") +
      '<rect x="0" y="116" width="400" height="74" fill="#141414"/>' +
      /* the 6 train: stainless car, green 6 bullet up front */
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="5" fill="#3a3f47"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' + bullet(282, 144, "6", "#00933c") +
      '</g>' + cols +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2a2a"/>' +
      tag("HUNTS POINT", 20, 240, 26, GOLD, -4) + tag("KEMBA", 270, 242, 32, "#7fe0a0", -7),
      '');
  }

  /* 2. Hunts Point Riverside Park on the Bronx River: the little beach and the pier, kayaks paddling past */
  function riverpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="320" cy="50" r="20" fill="#ffd27a"/>' +
      /* far bank: trees and low brick buildings of Soundview */
      '<path d="M0 110q40-20 80-6t90-8 100 6 130-4v20H0z" fill="#3f7a3a"/>' +
      '<rect x="200" y="96" width="40" height="22" fill="#8a4a32"/><rect x="250" y="102" width="30" height="16" fill="#9a5a3a"/>' +
      /* the river */
      '<rect x="0" y="118" width="400" height="70" fill="#3f7fa6"/>' +
      '<path class="shim" d="M30 134h60M220 150h70M300 128h50" stroke="#d6ecf7" stroke-width="2"/>' +
      '<path class="shim shim2" d="M120 166h50M330 172h40" stroke="#d6ecf7" stroke-width="2"/>' +
      '<g class="kayak"><g class="bob"><path d="M0 150q24 8 48 0q-24-4-48 0z" fill="#ff7a1a"/><circle cx="24" cy="142" r="4" fill="#2a2a2a"/><path d="M10 136l28 14" stroke="#e8e8e8" stroke-width="2"/></g></g>' +
      '<g class="kayak kayak2"><g class="bob"><path d="M0 172q24 8 48 0q-24-4-48 0z" fill="#f2d21a"/><circle cx="24" cy="164" r="4" fill="#2a2a2a"/><path d="M38 158l-28 14" stroke="#e8e8e8" stroke-width="2"/></g></g>' +
      /* the wooden pier on piles */
      '<rect x="230" y="176" width="170" height="8" fill="#8a6a42"/>' +
      (function () { let p = ""; for (let x = 236; x < 400; x += 26) p += '<rect x="' + x + '" y="184" width="5" height="16" fill="#5a4228"/>'; return p; })() +
      '<path d="M230 168h170" stroke="#5a4228" stroke-width="2"/>' +
      (function () { let p = ""; for (let x = 232; x < 400; x += 18) p += '<path d="M' + x + ' 168v8" stroke="#5a4228" stroke-width="2"/>'; return p; })() +
      /* the beach and the lawn */
      '<path d="M0 188q120-14 230-4v76H0z" fill="#e2cc96"/><path d="M0 214q200-20 400 0v46H0z" fill="#5c9a46"/>' +
      /* tall reeds swaying */
      '<path d="M12 214q-2-30 4-44M20 214q2-26-2-40M28 214q0-28 6-38" stroke="#4a6a2a" stroke-width="3" fill="none"/>' +
      tag("BRONX RIVER", 60, 246, 26, GOLD, -3),
      sky("g2", "#7fb9e6", "#f7dcae"));
  }

  /* 3. The Hunts Point produce market at dawn: long warehouse sheds, loading docks, crates, trucks rolling through */
  function market() {
    let doors = "";
    for (let x = 14; x < 390; x += 38) doors += '<rect x="' + x + '" y="112" width="28" height="44" fill="#3b3f46" stroke="#22262b" stroke-width="2"/><path d="M' + x + ' 122h28M' + x + ' 132h28M' + x + ' 142h28" stroke="#4d525a" stroke-width="2"/>';
    const crate = (x, y, fruit) => '<rect x="' + x + '" y="' + y + '" width="22" height="14" fill="#b8874a" stroke="#6a4a22" stroke-width="1.5"/><path d="M' + x + ' ' + (y + 7) + 'h22" stroke="#6a4a22" stroke-width="1"/>' +
      '<circle cx="' + (x + 6) + '" cy="' + (y - 2) + '" r="4" fill="' + fruit + '"/><circle cx="' + (x + 13) + '" cy="' + (y - 3) + '" r="4" fill="' + fruit + '"/><circle cx="' + (x + 19) + '" cy="' + (y - 2) + '" r="3.5" fill="' + fruit + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="70" cy="70" r="22" fill="#ffb35a" opacity=".9"/>' +
      /* the sheds: long low roofs */
      '<rect x="0" y="86" width="400" height="80" fill="#c9c1ae"/><rect x="0" y="80" width="400" height="10" fill="#7a3a2a"/>' +
      '<rect x="0" y="90" width="400" height="16" fill="#1f6b45"/>' +
      '<text x="200" y="102" text-anchor="middle" ' + FONT + ' font-size="10" fill="#f7f3ea" letter-spacing="3">PRODUCE MARKET · BUILDING D</text>' + doors +
      '<rect x="0" y="156" width="400" height="10" fill="#8f8a7c"/>' +
      /* crates on the dock */
      crate(20, 142, "#e0402a") + crate(46, 142, "#ff9f1c") + crate(330, 142, "#7cc242") + crate(356, 142, "#f2d21a") +
      /* a forklift lifting a pallet */
      '<g transform="translate(150 150)"><rect x="0" y="0" width="34" height="18" fill="' + GOLD + '"/><rect x="4" y="-16" width="16" height="16" fill="none" stroke="#2a2a2a" stroke-width="2.5"/>' +
      '<rect x="36" y="-30" width="3" height="48" fill="#2a2a2a"/><g class="lift"><rect x="39" y="6" width="18" height="3" fill="#2a2a2a"/>' + crate(37, -8, "#e0402a").replace(/x="37"/, 'x="37"') + '</g>' +
      '<circle cx="8" cy="20" r="5" fill="#222"/><circle cx="28" cy="20" r="5" fill="#222"/></g>' +
      /* the road and a box truck rolling through */
      '<rect x="0" y="176" width="400" height="84" fill="#2b2f36"/><path d="M0 218h400" stroke="#f2d21a" stroke-width="2" stroke-dasharray="22 14"/>' +
      '<g class="truck"><rect x="0" y="180" width="110" height="44" fill="#f2f2f2" stroke="#7b8794" stroke-width="2"/><rect x="110" y="192" width="34" height="32" fill="' + GREEN + '"/><rect x="118" y="196" width="18" height="12" fill="#bfe3ff"/>' +
      '<circle cx="24" cy="226" r="8" fill="#111"/><circle cx="90" cy="226" r="8" fill="#111"/><circle cx="128" cy="226" r="8" fill="#111"/>' +
      '<text x="55" y="207" text-anchor="middle" ' + FONT + ' font-size="11" fill="#1f6b45">FRESH</text></g>' +
      tag("HUNTS POINT", 216, 250, 24, GOLD, -3),
      sky("g3", "#3a2f5a", "#f4a86a"));
  }

  /* 4. Barretto Point Park: the floating pool barge in the East River, swimmers doing laps, gulls overhead */
  function pool() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="80" cy="44" r="18" fill="#fff1a8"/>' +
      '<g class="gull"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      /* far shore */
      '<path d="M0 104h400v14H0z" fill="#6a7a6a"/><rect x="260" y="88" width="16" height="16" fill="#7b8794"/><rect x="280" y="80" width="10" height="24" fill="#8b97a4"/><rect x="300" y="92" width="22" height="12" fill="#7b8794"/>' +
      /* the river */
      '<rect x="0" y="118" width="400" height="142" fill="#2f6f96"/>' +
      '<path class="shim" d="M20 128h50M300 132h60M30 236h70M300 240h60" stroke="#cfe8f6" stroke-width="2"/>' +
      /* the barge: dark hull, white deck, bright blue pool */
      '<g class="bob">' +
        '<rect x="50" y="150" width="300" height="56" fill="#3a3f46"/><rect x="50" y="146" width="300" height="8" fill="#f2f2f2"/>' +
        '<rect x="74" y="156" width="252" height="40" fill="#22a6e8" stroke="#f2f2f2" stroke-width="3"/>' +
        '<path d="M74 168h252M74 182h252" stroke="#f2f2f2" stroke-width="1.5" stroke-dasharray="6 4"/>' +
        '<circle class="swim" cx="96" cy="162" r="3.5" fill="#f2b134"/><circle class="swim swim2" cx="140" cy="175" r="3.5" fill="#ff5a4f"/><circle class="swim" cx="220" cy="189" r="3.5" fill="#fff"/>' +
        '<rect x="56" y="134" width="10" height="14" fill="#f2f2f2"/><rect x="334" y="134" width="10" height="14" fill="#f2f2f2"/>' +
        '<path d="M54 134h16M332 134h16" stroke="#ff5a4f" stroke-width="3"/>' +
      '</g>' +
      /* the park lawn in front */
      '<path d="M0 220q200-14 400 0v40H0z" fill="#5c9a46"/>' +
      '<rect x="20" y="206" width="3" height="20" fill="#3a3a3a"/><path d="M14 206h15" stroke="#3a3a3a" stroke-width="3"/>' +
      tag("BARRETTO POINT", 110, 250, 24, GOLD, -3),
      sky("g4", "#5fb0e6", "#e8f4fa"));
  }

  /* 5. Hunts Point Av and Southern Blvd: green signs, Kemba's wall, the 6 entrance globes */
  function corner() {
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2a26"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a332c"/>'; return b; })() +
      tag("KEMBA", 30, 128, 44, GOLD, -7) + tag("KEMBALAND", 34, 172, 28, "#7fe0a0", -3) + tag("BX", 196, 206, 26, SKY, -8) +
      /* subway entrance globes, green */
      '<rect x="210" y="150" width="4" height="70" fill="#1d2329"/><circle class="flk" cx="212" cy="146" r="8" fill="#3fcf6a"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="256" y="88" width="98" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="305" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Hunts Point Av</text>' +
      '<rect x="260" y="110" width="90" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="305" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Southern Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#3a2a4a"));
  }

  window.SCENES = { train, riverpark, market, pool, corner };
})();

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: across the Hunts Point warehouse roofs, a low silhouette running off the edge of the frame with a plane coming down for LaGuardia */
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
      Y.far(290, 220, .72, { halo: 80, win: true }) + Y.plane(140, 14) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
