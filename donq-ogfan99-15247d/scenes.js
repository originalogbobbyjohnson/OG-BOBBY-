/* Highbridge opening scenes for the Don Q game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes ripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.rip{animation:ripple 3s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}' +
    '.ball{animation:bounce 1s ease-in infinite}' +
    '@keyframes fly{0%{transform:translate(-40px,20px)}100%{transform:translate(440px,-30px)}}' +
    '.bird{animation:fly 9s linear infinite}.bird2{animation-delay:3s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e8c15a", RED = "#c8102e", ICE = "#4fb3ff";
  const river = (y, color) => {
    let r = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + color + '"/><g class="rip">';
    for (let row = 0; row < 4; row++) for (let x = -20; x < 460; x += 40) r += '<path d="M' + (x + (row % 2) * 20) + ' ' + (y + 10 + row * 12) + 'q10 -4 20 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".25"/>';
    return r + '</g>';
  };


  /* 1. 167 St from the street: under the el on River Av by day, the green globes at the stair, the 4 rolling across overhead, Don Q's tags on the stair wall */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 80) girders += '<rect x="' + (x - 5) + '" y="92" width="10" height="138" fill="#2f4a3a"/><path d="M' + (x - 20) + ' 96l20 22 20-22" stroke="#2f4a3a" stroke-width="5" fill="none"/>';
    let lattice = "";
    for (let x = 0; x < W; x += 20) lattice += '<path d="M' + x + ' 72l10 18 10-18" stroke="#3d5a48" stroke-width="2" fill="none"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="34" width="30" height="20" rx="3" fill="#d6f0ff" opacity=".85"/>';
    let bld = "";
    [[0, 96, "#a8643e"], [120, 110, "#c9a070"], [260, 100, "#8a4a34"]].forEach(b => { bld += '<rect x="' + b[0] + '" y="' + b[1] + '" width="140" height="' + (230 - b[1]) + '" fill="' + b[2] + '"/>';
      for (let y = b[1] + 34; y < 214; y += 20) for (let x = b[0] + 10; x < b[0] + 130; x += 22) bld += '<rect x="' + x + '" y="' + y + '" width="10" height="12" fill="#3a3f4a" opacity=".8"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + bld +
      /* the el deck and the 4 crossing above */
      '<g class="anim-train"><rect x="8" y="22" width="300" height="48" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="8" y="58" width="300" height="5" fill="#00933c"/>' + windows + bullet(282, 44, "4", "#00933c") + '</g>' +
      '<rect x="0" y="70" width="400" height="22" fill="#2f4a3a"/>' + lattice + girders +
      /* station stair with the green globes */
      '<path d="M210 230l60-120h26l-60 120z" fill="#5a5f66"/><path d="M224 230l60-120" stroke="#3a3f4a" stroke-width="3"/>' +
      '<rect x="198" y="186" width="6" height="44" fill="#1d2329"/><circle class="flk" cx="201" cy="182" r="8" fill="#3fbf6a"/><rect x="152" y="186" width="6" height="44" fill="#1d2329"/><circle class="flk flk2" cx="155" cy="182" r="8" fill="#3fbf6a"/>' +
      '<rect x="88" y="100" width="150" height="30" rx="3" fill="#111"/><rect x="88" y="100" width="150" height="4" fill="#fff"/>' +
      '<text x="100" y="123" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">167 St</text><text x="160" y="123" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#ccc">River Av</text>' + bullet(222, 116, "4", "#00933c") +
      /* stair wall with his tags */
      '<rect x="20" y="170" width="120" height="60" fill="#6a6a70"/>' + tag("DON Q", 26, 210, 30, GOLD, -6) + tag("DON SEASON", 40, 228, 15, RED, -3) +
      '<rect x="0" y="230" width="400" height="30" fill="#2a2d33"/><path d="M0 246h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="boat"><rect x="0" y="234" width="46" height="12" rx="4" fill="' + ICE + '"/><circle cx="10" cy="248" r="4" fill="#111"/><circle cx="36" cy="248" r="4" fill="#111"/></g>' +
      tag("HIGHBRIDGE", 270, 222, 20, "#f6efdc", -4),
      sky("g1", "#7ab8e8", "#f2dcae"));
  }

  /* 2. The old Concourse Plaza Hotel (1923) on the Grand Concourse at E 161st: the tan-brick tower where Yankee stars once lived, green awnings, flags, the rooftop sign */
  function bridge() {
    let wins = "";
    for (let y = 74; y < 190; y += 16) for (let x = 104; x < 296; x += 16) wins += '<rect class="' + ((x * 7 + y) % 9 ? "" : "flk") + '" x="' + x + '" y="' + y + '" width="8" height="10" fill="' + ((x + y) % 5 ? "#3a3f4a" : "#ffe0a0") + '"/>';
    let awn = "";
    for (let x = 108; x < 290; x += 30) awn += '<path d="M' + x + ' 196h22l4 10h-30z" fill="#2f7a4a"/>';
    const flag = (x, c1, c2) => '<rect x="' + x + '" y="20" width="2" height="34" fill="#555"/><g class="flag"><rect x="' + (x + 2) + '" y="20" width="22" height="14" fill="' + c1 + '"/><rect x="' + (x + 2) + '" y="26" width="22" height="3" fill="' + c2 + '"/></g>';
    let car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="44" height="14" rx="4" fill="' + c + '"/><rect x="8" y="' + (y - 8) + '" width="26" height="10" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="34" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="0" y="120" width="96" height="100" fill="#8a7a6a"/><rect x="304" y="110" width="96" height="110" fill="#b08a62"/>' +
      '<rect x="96" y="58" width="208" height="162" fill="#d2b48a"/><rect x="92" y="54" width="216" height="8" fill="#b89a70"/>' + wins +
      '<rect x="96" y="190" width="208" height="30" fill="#c4a578"/>' + awn + '<rect x="186" y="198" width="28" height="22" fill="#3b2a1e"/>' +
      /* rooftop sign */
      '<rect x="120" y="32" width="160" height="22" fill="#1d2329"/><path d="M130 54v-4M270 54v-4" stroke="#555" stroke-width="3"/>' +
      '<text class="flk" x="200" y="48" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="0" fill="' + RED + '">CONCOURSE PLAZA</text>' +
      flag(98, "#c8102e", "#fff") + flag(278, "#0c2340", "#fff") +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2d33"/><path d="M0 240h400" stroke="#f4f1e8" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("boat", 226, RED) + car("boat bird2", 242, ICE) +
      '<rect x="10" y="10" width="78" height="40" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="49" y="26" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">Grand</text><text x="49" y="39" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">Concourse</text>' +
      '<text x="352" y="100" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#1d2329">E 161 ST · 1923</text>' +
      tag("DON Q", 312, 206, 26, GOLD, -6),
      sky("g2", "#6aa8e0", "#f0d6a8"));
  }

  /* 3. The stadium on River Avenue: limestone facade, arched windows, the white frieze, lights flashing */
  function stadium() {
    let arch = "";
    for (let i = 0; i < 9; i++) arch += '<path d="M' + (28 + i * 40) + ' 210v-60a14 14 0 0 1 28 0v60z" fill="#3a3a44"/>';
    let fr = "";
    for (let i = 0; i < 24; i++) fr += '<path d="M' + (i * 17) + ' 40l8.5 14 8.5-14" fill="none" stroke="#fff" stroke-width="3"/>';
    const light = x => '<rect x="' + (x - 2) + '" y="14" width="4" height="40" fill="#555"/><rect x="' + (x - 14) + '" y="4" width="28" height="12" fill="#333"/><rect class="flk" x="' + (x - 12) + '" y="6" width="24" height="8" fill="#fffbe0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(12) +
      light(40) + light(360) +
      '<rect x="0" y="36" width="400" height="20" fill="#2a3a52" opacity=".5"/>' + fr +
      '<rect x="10" y="64" width="380" height="150" fill="#d8cfbd"/>' +
      '<rect x="10" y="64" width="380" height="12" fill="#c7bda8"/>' +
      '<rect x="10" y="100" width="380" height="5" fill="#c7bda8"/>' + arch +
      '<rect x="140" y="80" width="120" height="16" fill="#0c2340"/><text x="200" y="93" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" letter-spacing="3" fill="' + GOLD + '">RIVER AVENUE</text>' +
      '<rect x="0" y="214" width="400" height="46" fill="#22262c"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g3", "#06101e", "#1d3354"));
  }

  /* 4. Highbridge Play Center (1936): the giant WPA pool and brick bathhouse on Amsterdam Av, the granite Highbridge water tower standing over it, kids splashing */
  function concourse() {
    let splash = "";
    for (let i = 0; i < 8; i++) splash += '<g class="ball" style="animation-delay:-' + (i * .13).toFixed(2) + 's"><circle cx="' + (40 + i * 44) + '" cy="' + (214 + (i % 2) * 14) + '" r="5" fill="#5a3a28"/><path d="M' + (34 + i * 44) + ' ' + (220 + (i % 2) * 14) + 'q6-10 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="bird"><path d="M30 40q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* the water tower: octagonal granite shaft, belvedere, pointed roof */
      '<rect x="290" y="40" width="34" height="146" fill="#b9ad98" stroke="#8a7f6a"/><rect x="286" y="34" width="42" height="12" fill="#a89c86"/>' +
      '<rect x="290" y="20" width="34" height="14" fill="#c9bea8"/><path d="M296 20v14M304 20v14M312 20v14M320 20v14" stroke="#6a5e4a" stroke-width="2"/><path d="M286 20l21-18 21 18z" fill="#8a4a34"/>' +
      [60, 88, 116].map(y => '<rect x="302" y="' + y + '" width="10" height="14" rx="4" fill="#3a3328"/>').join("") +
      /* brick bathhouse with arched openings */
      '<rect x="20" y="120" width="250" height="60" fill="#a8543a"/><rect x="16" y="114" width="258" height="8" fill="#e6dccb"/>' +
      [40, 80, 120, 160, 200, 240].map(x => '<path d="M' + x + ' 180v-34a10 10 0 0 1 20 0v34z" fill="#2a2a30"/>').join("") +
      '<rect x="110" y="96" width="70" height="20" fill="#a8543a"/><text x="145" y="111" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" letter-spacing="0" fill="#f4f1e8">HIGHBRIDGE</text>' +
      /* the big pool */
      '<rect x="0" y="186" width="400" height="74" fill="#e6dccb"/><rect x="10" y="196" width="380" height="58" fill="#3aa6d8"/>' +
      '<g class="rip"><path d="M10 210h420M10 230h420M10 248h420" stroke="#bfe9ff" stroke-width="2" stroke-dasharray="10 12" opacity=".7"/></g>' + splash +
      '<text x="140" y="30" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="1" fill="' + GOLD + '">HIGHBRIDGE POOL · 1936</text>' +
      tag("DON Q", 316, 214, 22, GOLD, -6),
      sky("g4", "#5aa8e8", "#d8f0fa"));
  }

  /* 5. Ogden Av and W 167 St in Highbridge: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3a40"/>' +
      tag("DON Q", 40, 146, 44, GOLD, -7) + tag("HBTL", 70, 200, 30, RED, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Ogden Av</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 167 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1424", "#2a3a5a"));
  }

  window.SCENES = { train, bridge, stadium, concourse, corner };
})();

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: the whole bowl small and far below Ogden Av on a golden afternoon, a day game, flags waving on the rim */
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
      Y.tint("#ffc46b", "#ffe7a6", 0) + Y.valley(22, "#6e6456", "#fff0c0") + Y.bowl(180, 46, .6, { day: true }) + Y.flags([[124, 40, 12], [236, 40, 12]]) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
