/* Morrisania opening scenes for the Fat Joe game: the Don, Terror Squad, Lean Back. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes carL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}' +
    '.carL{animation:carL 7s linear infinite}' +
    '@keyframes lean{0%,30%,100%{transform:rotate(0deg)}50%,80%{transform:rotate(-16deg)}}' +
    '.lean{transform-box:fill-box;transform-origin:50% 100%;animation:lean 1.6s ease-in-out infinite}.lean2{animation-delay:-.2s}.lean3{animation-delay:-.4s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes spin{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}' +
    '.turn{transform-box:fill-box;transform-origin:center;animation:spin 4s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0deg)}50%{transform:skewY(1.5deg)}}' +
    '.wave{transform-box:fill-box;transform-origin:0 50%;animation:wave 2.4s ease-in-out infinite}' +
    '@keyframes elpass{0%{transform:translateX(-420px)}55%,100%{transform:translateX(420px)}}' +
    '.elpass{animation:elpass 5s linear infinite}' +
    '@keyframes twinkle{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.tw{animation:twinkle 2s ease-in-out infinite}.tw2{animation-delay:-.7s}.tw3{animation-delay:-1.4s}' +
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
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  /* a lit-up window grid on a block */
  const windowsOn = (x0, y0, w, h, step, lit) => { let s = ""; for (let y = y0 + 8; y < y0 + h - 8; y += step) for (let x = x0 + 6; x < x0 + w - 8; x += 13) s += '<rect x="' + x + '" y="' + y + '" width="7" height="8" fill="' + ((x * 7 + y * 3) % lit ? "#2a1d17" : "#ffd98a") + '"/>'; return s; };
  /* a generic sneaker side view (no brand marks): body colour, sole colour */
  const kick = (x, y, c, sole, s) => {
    s = s || 1;
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path d="M0 14q0 -12 8 -14l8 6q8 2 16 4q8 2 8 6v4h-40z" fill="' + c + '" stroke="#111" stroke-width="1.2"/>' +
      '<rect x="0" y="16" width="40" height="5" rx="2" fill="' + sole + '" stroke="#111" stroke-width="1"/>' +
      '<path d="M10 5l4 3M13 3l4 3M16 2l3 3" stroke="#fff" stroke-width="1.2"/></g>';
  };
  const GOLD = "#ffd34d", RED = "#e63946", BLUE = "#2f6fdb", CREAM = "#f7f3ea";

  /* 1. The 2 / 5 pulling into Prospect Av, up on the el over Westchester Av: canopy, platform, the steel el and the avenue below */
  function train() {
    let girders = "";
    for (let x = 0; x < 400; x += 50) girders += '<rect x="' + (x + 20) + '" y="196" width="10" height="64" fill="#2f4256"/><path d="M' + (x + 20) + ' 200l-18 22M' + (x + 30) + ' 200l18 22" stroke="#2f4256" stroke-width="4"/>';
    let windows = "";
    for (let x = 18; x < 260; x += 46) windows += '<rect x="' + x + '" y="118" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    let bldg = "";
    [[0, 66, 64, "#6e3b2b"], [64, 86, 46, "#7a4a34"], [296, 58, 56, "#5b3226"], [352, 80, 48, "#6a3a2c"]].forEach(b => {
      bldg += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="' + b[3] + '"/>' + windowsOn(b[0], b[1], b[2], 40, 14, 3);
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) + bldg +
      '<g class="cld"><ellipse cx="0" cy="40" rx="44" ry="7" fill="#ffd9a8" opacity=".25"/></g>' +
      /* canopy */
      '<path d="M0 20h400v10H0z" fill="#2f4256"/><path d="M0 30h400" stroke="#1d2a38" stroke-width="3"/>' +
      '<rect x="40" y="30" width="6" height="70" fill="#2f4256"/><rect x="354" y="30" width="6" height="70" fill="#2f4256"/>' +
      '<g class="flk"><rect x="150" y="32" width="100" height="4" rx="2" fill="#fff7d6"/></g>' +
      /* station sign */
      '<rect x="88" y="44" width="224" height="34" rx="4" fill="#111"/><rect x="88" y="44" width="224" height="4" fill="#fff"/>' +
      '<text x="100" y="69" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Prospect Av</text>' +
      bullet(262, 62, "2", "#ee352e") + bullet(290, 62, "5", "#00933c") +
      /* train */
      '<rect x="0" y="100" width="400" height="6" fill="#4a3a2a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="106" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="148" width="300" height="5" fill="#00933c"/>' + windows +
        '<circle cx="300" cy="160" r="4" fill="#fff6c2"/>' + bullet(296, 126, "5", "#00933c") +
      '</g>' +
      /* platform edge + the el over Westchester Av */
      '<rect x="0" y="170" width="400" height="8" fill="#eab308"/><rect x="0" y="178" width="400" height="18" fill="#3b4652"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#15171a"/>' + girders +
      '<path d="M0 252h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car car2"><rect x="0" y="236" width="44" height="12" rx="3" fill="' + RED + '"/><circle cx="40" cy="240" r="2" fill="#fff6c2"/></g>' +
      tag("TERROR SQUAD", 22, 236, 26, GOLD, -5) + tag("THE DON", 250, 244, 26, RED, -7),
      sky("g1", "#140a1c", "#7a3a24"));
  }

  /* 2. Lean Back on a Bronx rooftop: tar roof, parapet, a water tower, the crew doing the rockaway by the boombox, the el lit up behind */
  function rooftop() {
    let sky2 = "";
    [[0, 120, 50], [50, 104, 40], [92, 130, 36], [250, 96, 46], [298, 118, 52], [352, 108, 48]].forEach(b => {
      sky2 += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (170 - b[1]) + '" fill="#1d1830"/>';
      for (let y = b[1] + 6; y < 166; y += 10) for (let x = b[0] + 5; x < b[0] + b[2] - 5; x += 9) if ((x + y) % 4 === 0) sky2 += '<rect x="' + x + '" y="' + y + '" width="4" height="5" fill="#ffd98a" opacity=".8"/>';
    });
    let el = '<rect x="0" y="150" width="400" height="5" fill="#0e0c18"/>';
    for (let x = 10; x < 400; x += 40) el += '<rect x="' + x + '" y="155" width="4" height="15" fill="#0e0c18"/>';
    let elTrain = '<g class="elpass">';
    for (let x = 0; x < 200; x += 14) elTrain += '<rect x="' + (x + 2) + '" y="140" width="9" height="5" fill="#ffe9b0"/>';
    elTrain += '<rect x="0" y="137" width="200" height="13" rx="2" fill="none" stroke="#5a5e6a" stroke-width="2"/></g>';
    /* a dancer silhouette: hoodie, baggy pants; arms out, leaning back */
    const dancer = (x, cls, c) =>
      '<g class="lean ' + cls + '"><g transform="translate(' + x + ' 0)">' +
      '<path d="M-10 236l3 -38h14l3 38h-8l-2 -26l-2 26z" fill="#0b0a12"/>' +
      '<path d="M-12 200l2 -32q8 -6 16 0l2 32z" fill="' + c + '"/>' +
      '<path d="M-10 172l-14 14M10 172l14 14" stroke="' + c + '" stroke-width="6" stroke-linecap="round"/>' +
      '<circle cx="0" cy="160" r="9" fill="#0b0a12"/><path d="M-9 158q9 -12 18 0" fill="' + c + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(20) +
      '<circle cx="64" cy="44" r="18" fill="#fff4d6" opacity=".9"/>' + sky2 + elTrain + el +
      /* roof + parapet */
      '<rect x="0" y="170" width="400" height="10" fill="#6e3b2b"/><rect x="0" y="168" width="400" height="4" fill="#9a8a7a"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#26232b"/>' +
      /* water tower on the right */
      '<path d="M330 84h44v52h-44z" fill="#7a5a3a"/><path d="M326 84l26 -18 26 18z" fill="#5a3f28"/>' +
      '<path d="M330 96h44M330 110h44M330 124h44" stroke="#4a3220" stroke-width="2"/>' +
      '<path d="M334 136l-4 44M370 136l4 44M334 150h36" stroke="#2a2a2e" stroke-width="3"/>' +
      /* bulkhead with the tag */
      '<rect x="10" y="118" width="92" height="62" fill="#4a3a32"/><rect x="40" y="142" width="22" height="38" fill="#2a2018"/>' +
      tag("LEAN BACK", 14, 140, 18, GOLD, -6) +
      /* the crew */
      dancer(150, "", RED) + dancer(200, "lean2", BLUE) + dancer(250, "lean3", GOLD) +
      /* boombox with notes */
      '<rect x="286" y="214" width="46" height="24" rx="3" fill="#b9c0c8" stroke="#4a4f57" stroke-width="2"/>' +
      '<circle cx="298" cy="226" r="7" fill="#2a2d33"/><circle cx="320" cy="226" r="7" fill="#2a2d33"/><path d="M294 214q0 -8 15 -8t15 8" stroke="#4a4f57" stroke-width="2" fill="none"/>' +
      '<text class="note" x="296" y="204" font-size="16" fill="' + GOLD + '">&#9834;</text>' +
      '<text class="note note2" x="314" y="204" font-size="14" fill="' + CREAM + '">&#9835;</text>' +
      '<text class="note note3" x="306" y="204" font-size="15" fill="' + RED + '">&#9834;</text>',
      sky("g2", "#0b0818", "#3a2050"));
  }

  /* 3. A Bronx sneaker shop wall: lit shelves of kicks floor to ceiling, a neon sign, one fresh pair turning on the pedestal */
  function kicks() {
    const cols = [["#e63946", "#fff"], ["#f7f3ea", "#e63946"], ["#2f6fdb", "#f7f3ea"], ["#111", "#f7f3ea"], ["#ffd34d", "#111"], ["#3ba55c", "#f7f3ea"], ["#8a5cd6", "#fff"], ["#f08a24", "#111"]];
    let shelves = "";
    for (let r = 0; r < 4; r++) {
      const y = 70 + r * 38;
      shelves += '<rect x="24" y="' + (y + 19) + '" width="352" height="4" fill="#d8cfc0"/><rect x="24" y="' + (y + 23) + '" width="352" height="2" fill="#fff7d6" opacity=".5"/>';
      for (let i = 0; i < 7; i++) { const c = cols[(r * 3 + i) % cols.length]; if (r > 1 && i > 1 && i < 5) continue; shelves += kick(34 + i * 50, y, c[0], c[1], 0.9); }
    }
    return svg(
      '<rect width="400" height="260" fill="#1a1410"/>' +
      '<rect x="16" y="56" width="368" height="166" fill="#2a221c" stroke="#0e0905" stroke-width="4"/>' + shelves +
      /* neon sign */
      '<rect x="110" y="10" width="180" height="40" rx="6" fill="#120c06" stroke="#3a2a1a" stroke-width="2"/>' +
      '<text class="neon" x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" letter-spacing="6" fill="' + RED + '" stroke="#ffd0c8" stroke-width=".8">KICKS</text>' +
      '<circle class="flk" cx="128" cy="30" r="4" fill="' + GOLD + '"/><circle class="flk flk2" cx="272" cy="30" r="4" fill="' + GOLD + '"/>' +
      /* pedestal with the turning pair */
      '<rect x="160" y="200" width="80" height="44" fill="#d8cfc0" stroke="#8a7a6a" stroke-width="2"/><rect x="152" y="196" width="96" height="8" fill="#f7f3ea"/>' +
      '<ellipse cx="200" cy="196" rx="44" ry="5" fill="' + GOLD + '" opacity=".35" class="flk"/>' +
      '<g class="bob">' + kick(166, 160, GOLD, RED, 1.7) + '</g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#3a2a1a"/><path d="M0 248h400" stroke="#5a4028" stroke-width="2"/>' +
      tag("FAT JOE", 22, 248, 22, GOLD, -4) + tag("TS", 340, 248, 24, RED, -8));
  }

  /* 4. Westchester Av under the el: the Puerto Rican and Cuban flags painted big on the bodega wall, el shadows, a train rumbling over, cars below */
  function flags() {
    /* Puerto Rico: 5 stripes red/white, blue triangle, white star. Cuba: 5 stripes blue/white, red triangle, white star. */
    const star = (cx, cy, r) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .42 : r; p += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="#fff"/>'; };
    const flag = (x, y, w, h, stripe, tri, fly) => {
      let s = '<g class="wave' + (fly ? "" : "") + '">';
      for (let i = 0; i < 5; i++) s += '<rect x="' + x + '" y="' + (y + i * h / 5) + '" width="' + w + '" height="' + (h / 5 + .5) + '" fill="' + (i % 2 ? "#fff" : stripe) + '"/>';
      s += '<path d="M' + x + ' ' + y + 'L' + (x + h * .87) + ' ' + (y + h / 2) + 'L' + x + ' ' + (y + h) + 'z" fill="' + tri + '"/>' + star(x + h * .3, y + h / 2, h * .13) + '</g>';
      return s;
    };
    let bricks = "";
    for (let y = 60; y < 210; y += 12) for (let x = (y / 12) % 2 ? -20 : 0; x < 400; x += 40) bricks += '<rect x="' + x + '" y="' + y + '" width="38" height="10" fill="#7a3e2c"/>';
    let el = "";
    [4, 194, 386].forEach(x => { el += '<rect x="' + x + '" y="40" width="10" height="190" fill="#24313f"/><path d="M' + x + ' 46l-16 16M' + (x + 10) + ' 46l16 16" stroke="#24313f" stroke-width="4"/>'; });
    let elTrain = '<g class="elpass">';
    for (let x = 0; x < 260; x += 20) elTrain += '<rect x="' + (x + 4) + '" y="10" width="12" height="9" rx="1" fill="#ffe9b0"/>';
    elTrain += '<rect x="0" y="6" width="260" height="20" rx="3" fill="none" stroke="#c9ced6" stroke-width="2"/><rect x="0" y="24" width="260" height="3" fill="#ee352e"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<rect x="0" y="56" width="400" height="160" fill="#5a2a1c"/>' + bricks +
      flag(24, 74, 160, 100, "#ed1c24", "#0050f0") + flag(214, 74, 160, 100, "#002a8f", "#cf142b") +
      '<text x="104" y="202" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="5" fill="' + GOLD + '" stroke="#000" stroke-width="1.5" paint-order="stroke">BORICUA</text>' + '<text x="294" y="202" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="5" fill="' + GOLD + '" stroke="#000" stroke-width="1.5" paint-order="stroke">CUBA</text>' +
      /* the el overhead and its shadows */
      '<rect x="0" y="30" width="400" height="12" fill="#24313f"/>' + elTrain +
      '<rect x="0" y="0" width="400" height="6" fill="#1a2430"/>' + el +
      '<path d="M0 56h400v14H0z" fill="#000" opacity=".22"/>' +
      /* the avenue */
      '<rect x="0" y="216" width="400" height="44" fill="#16191d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="54" height="14" rx="4" fill="' + GOLD + '"/><circle cx="12" cy="236" r="4" fill="#111"/><circle cx="42" cy="236" r="4" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="244" width="50" height="13" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="257" r="3.5" fill="#111"/><circle cx="40" cy="257" r="3.5" fill="#111"/></g>',
      sky("g4", "#3a1e3a", "#d8743a"));
  }

  /* 5. Trinity Av and E 163 St at the Forest Houses: green street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="276" y="18" width="116" height="202" fill="#8a4a32"/>' + windowsOn(280, 22, 110, 196, 16, 3) +
      '<rect x="14" y="70" width="236" height="150" fill="#2e2a2a"/>' +
      '<path d="M22 84l16 -6 16 6v12q0 10 -16 16q-16 -6 -16 -16z" fill="' + BLUE + '" stroke="' + GOLD + '" stroke-width="2" class="bob"/>' +
      tag("FAT JOE", 26, 152, 46, GOLD, -7) + tag("TERROR SQUAD", 30, 196, 24, RED, -3) +
      '<text class="tw" x="200" y="96" font-size="14" fill="' + GOLD + '">&#10022;</text><text class="tw tw2" x="226" y="118" font-size="10" fill="' + CREAM + '">&#10022;</text><text class="tw tw3" x="70" y="100" font-size="10" fill="' + CREAM + '">&#10022;</text>' +
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M280 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      sign(220, 88, 92, "Trinity Av") + sign(226, 110, 80, "E 163 St") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#120c06", "#3a2418"));
  }

  window.SCENES = { train, rooftop, kicks, flags, corner };
})();
