/* Hit-Boy producer game: Fontana. I-10 East exit sign for Sierra Av, the Fontana speedway, the Surf Club studio, Paris and the Eiffel Tower, Sierra Av & Foothill Blvd on Route 66 with the giant orange stand. Each scene 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}.neon{animation:neon 3.4s infinite}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes carL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carL 7s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 2s ease-in-out infinite}' +
    '@keyframes wave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.wv{animation:wave 2.6s linear infinite}.wv2{animation-duration:3.4s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3s ease-in-out infinite}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2s ease-in-out infinite}.tw2{animation-delay:-.7s}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.pulse{transform-box:fill-box;transform-origin:50% 50%;animation:pulse .5s ease-in-out infinite}' +
    '@keyframes pad{0%,100%{opacity:.35}50%{opacity:1}}.pad{animation:pad .8s steps(1) infinite}.pd2{animation-delay:-.2s}.pd3{animation-delay:-.4s}.pd4{animation-delay:-.6s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes fall{from{transform:translateY(-20px)}to{transform:translateY(20px)}}.fall{animation:fall .7s linear infinite}.fl2{animation-delay:-.35s}' +
    '@keyframes beam{0%,100%{opacity:.15}50%{opacity:.85}}.beam{animation:beam 3s ease-in-out infinite}' +
    '@keyframes walk{from{transform:translateX(420px)}to{transform:translateX(-40px)}}.walk{animation:walk 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw' + (i % 2 ? " tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const winGrid = (x0, y0, w, h, c1, c2) => { let s = ""; for (let y = y0 + 6; y < y0 + h - 6; y += 11) for (let x = x0 + 4; x < x0 + w - 5; x += 9) s += '<rect x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((x * 5 + y * 3) % 7 ? c1 : c2) + '"/>'; return s; };
  const bricks = (id, c) => '<pattern id="' + id + '" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 10h20M10 0v5M0 5h20M0 5v5M20 5v5" stroke="' + c + '" stroke-width="1"/></pattern>';
  const cloud = (x, y, s, cls) => '<g class="cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const carS = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="5" fill="' + col + '"/><rect x="10" y="' + (y - 8) + '" width="28" height="10" rx="4" fill="' + col + '"/><rect x="14" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><rect x="26" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><circle cx="11" cy="' + (y + 15) + '" r="4.5" fill="#111"/><circle cx="39" cy="' + (y + 15) + '" r="4.5" fill="#111"/></g>';
  const ocean = (y, c1, c2) => {
    let w = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c1 + '"/>';
    w += '<g class="wv"><path d="M0 ' + (y + 6) + Array.from({ length: 12 }, (_, i) => 'q10 -6 20 0t20 0').join("") + '" stroke="' + c2 + '" stroke-width="2" fill="none"/></g>';
    w += '<g class="wv wv2"><path d="M0 ' + (y + 18) + Array.from({ length: 12 }, (_, i) => 'q10 -5 20 0t20 0').join("") + '" stroke="' + c2 + '" stroke-width="1.5" fill="none" opacity=".7"/></g>';
    return w;
  };
  const SURF = "#38c6f4", GOLD = "#ffc83d", CORAL = "#ff5f6d", CREAM = "#f7f3ea";
  const palm = (x, y, h, cls) => '<g class="' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q3 -' + (h / 2) + ' 0 -' + h + '" stroke="#5a4632" stroke-width="4" fill="none"/>' +
    '<g fill="#2f5a3a" transform="translate(' + x + ' ' + (y - h) + ')"><path d="M0 0q-18 -4 -26 8q12 -10 26 -8z"/><path d="M0 0q18 -4 26 8q-12 -10 -26 -8z"/><path d="M0 0q-12 -14 -24 -10q14 0 24 10z"/><path d="M0 0q12 -14 24 -10q-14 0 -24 10z"/><path d="M0 0q0 -16 -6 -20q4 8 6 20z"/></g></g>';
  const rig = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + (y - 20) + '" width="70" height="30" fill="#e9eef2" stroke="#9aa3ab"/><rect x="72" y="' + (y - 8) + '" width="22" height="18" rx="3" fill="' + col + '"/><rect x="82" y="' + (y - 5) + '" width="9" height="7" fill="#bfe3ff"/><circle cx="12" cy="' + (y + 12) + '" r="4.5" fill="#111"/><circle cx="26" cy="' + (y + 12) + '" r="4.5" fill="#111"/><circle cx="84" cy="' + (y + 12) + '" r="4.5" fill="#111"/></g>';
  const racer = (cls, y, col) => '<g class="' + cls + '"><path d="M0 ' + y + 'h44l10 6v6H0z" fill="' + col + '"/><rect x="16" y="' + (y - 5) + '" width="14" height="6" rx="2" fill="#222"/><rect x="38" y="' + (y - 3) + '" width="3" height="4" fill="#222"/><circle cx="10" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="42" cy="' + (y + 12) + '" r="4" fill="#111"/>' + T(22, y + 9, 7, "#fff", "87") + '</g>';

  /* 1. Into Fontana on the I-10: the big green exit sign for Sierra Av, Inland Empire big rigs rolling, dry hills behind */
  function freeway() {
    return svg(
      '<rect width="400" height="260" fill="url(#w1)"/>' + cloud(70, 34, 1.1) + cloud(300, 26, .8, "cld2") +
      '<path d="M0 150l60-40 50 22 70-46 80 50 60-30 80 44v20H0z" fill="#a98a62"/><path d="M0 160l90-26 80 18 90-24 140 30v12H0z" fill="#8f7550"/>' +
      '<rect x="64" y="38" width="8" height="132" fill="#8a8f96"/><rect x="328" y="38" width="8" height="132" fill="#8a8f96"/><rect x="64" y="42" width="272" height="6" fill="#8a8f96"/>' +
      '<rect x="86" y="52" width="228" height="84" rx="6" fill="#1f7a3a" stroke="#fff" stroke-width="3"/>' +
      '<rect x="230" y="40" width="74" height="16" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' + T(267, 52, 11, "#fff", "EXIT", ' text-anchor="middle"') +
      '<path d="M98 64h40v6q0 22-20 30q-20-8-20-30z" fill="#1d4ea0" stroke="#fff" stroke-width="2"/><rect x="98" y="60" width="40" height="9" fill="#c8102e" stroke="#fff" stroke-width="1.5"/>' +
      T(118, 90, 13, "#fff", "10", ' text-anchor="middle"') + T(146, 76, 12, "#fff", "EAST") +
      T(222, 104, 18, "#fff", "Sierra Av", ' text-anchor="middle"') + T(222, 124, 13, "#fff", "Fontana", ' text-anchor="middle"') +
      '<path d="M296 70l-10 14M296 70l-12 2M296 70l2 12" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="164" width="400" height="96" fill="#3a3b40"/><rect x="0" y="164" width="400" height="4" fill="#d9d9d9"/>' +
      '<g fill="#f2d24b">' + [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (i * 64) + '" y="212" width="34" height="4"/>').join("") + '</g>' +
      rig("car", 194, CORAL) + carS("car car2", 190, SURF) + carS("carL", 234, GOLD) +
      tag("HIT-BOY", 150, 256, 24, SURF, -3),
      sky("w1", "#5aa8e8", "#f2dfb8"));
  }

  /* 2. The big speedway in Fontana: grandstands, the banked asphalt oval, race cars flying past, checkered flag waving */
  function speedway() {
    let seats = "";
    for (let r = 0; r < 5; r++) for (let c = 0; c < 40; c++) seats += '<rect x="' + (c * 10) + '" y="' + (62 + r * 9) + '" width="8" height="6" fill="' + ((r * 7 + c * 3) % 5 ? "#c8cdd4" : [CORAL, SURF, GOLD][(r + c) % 3]) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + cloud(110, 26, .9) +
      '<rect x="0" y="50" width="400" height="58" fill="#5a6270"/>' + seats + '<rect x="0" y="44" width="400" height="8" fill="#2a2f3a"/>' +
      '<rect x="0" y="108" width="400" height="10" fill="#e9eef2"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="108" width="10" height="10" fill="' + CORAL + '"/>').join("") +
      '<path d="M0 118h400v80H0z" fill="#3b3c42"/><path d="M0 150h400" stroke="#fff" stroke-width="2" stroke-dasharray="20 14"/>' +
      racer("car", 132, CORAL) + racer("car car2", 132, GOLD) + racer("car", 166, SURF) +
      '<rect x="0" y="198" width="400" height="62" fill="#6b8f4a"/><path d="M0 198h400" stroke="#e9eef2" stroke-width="4"/>' +
      '<rect x="360" y="176" width="4" height="60" fill="#ccc"/><g class="flag"><g transform="translate(364 176)">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + ((i % 4) * 8) + '" y="' + (Math.floor(i / 4) * 7) + '" width="8" height="7" fill="' + ((i + Math.floor(i / 4)) % 2 ? "#111" : "#fff") + '"/>').join("") + '</g></g>' +
      tag("SURF CLUB", 150, 248, 24, GOLD, -3),
      sky("s2", "#4a9ae0", "#d6ecfa"));
  }

  /* 3. The Surf Club studio: surfboards on the wall, drum pads flashing, the monitor riding a wave, speakers thumping */
  function surfclub() {
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pad pd' + (((r * 4 + c) * 3) % 4 + 1) + '" x="' + (280 + c * 22) + '" y="' + (150 + r * 16) + '" width="18" height="12" rx="3" fill="' + [SURF, GOLD, CORAL, "#7cd36b"][(r + c) % 4] + '"/>';
    const board = (x, col, stripe) => '<g class="sway"><path d="M' + x + ' 20q16 30 12 110h-24q-4 -80 12 -110z" fill="' + col + '" stroke="#0b1622" stroke-width="2"/><path d="M' + x + ' 26v100" stroke="' + stripe + '" stroke-width="3"/></g>';
    const spk = x => '<rect x="' + x + '" y="70" width="48" height="76" rx="4" fill="#18181c" stroke="#333" stroke-width="2"/><circle class="pulse" cx="' + (x + 24) + '" cy="122" r="16" fill="#2a2a30" stroke="#555" stroke-width="3"/><circle cx="' + (x + 24) + '" cy="86" r="7" fill="#2a2a30" stroke="#555" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#0f1e2c"/><rect x="0" y="0" width="400" height="170" fill="url(#u3)"/>' +
      board(70, SURF, GOLD) + board(110, CORAL, CREAM) + board(150, GOLD, SURF) +
      spk(196) + spk(340) +
      '<rect x="0" y="170" width="400" height="90" fill="#6b4a32"/><rect x="0" y="170" width="400" height="8" fill="#8a6040"/>' +
      '<rect x="40" y="186" width="190" height="56" rx="4" fill="#26262c" stroke="#555" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect class="mt" x="' + (52 + i * 11) + '" y="198" width="6" height="34" rx="2" fill="#3a3a44"/><rect x="' + (50 + i * 11) + '" y="' + (204 + (i * 7) % 20) + '" width="10" height="5" rx="1" fill="' + (i % 4 ? CREAM : CORAL) + '"/>').join("") +
      '<rect x="268" y="140" width="110" height="84" rx="6" fill="#26262c" stroke="#555" stroke-width="2"/>' + pads +
      '<rect x="244" y="20" width="140" height="40" rx="4" fill="#0b2a3e" stroke="#555" stroke-width="2"/><path class="tw" d="M250 44' + Array.from({ length: 6 }, () => 'q10 -14 20 0').join("") + '" stroke="' + SURF + '" stroke-width="2" fill="none"/>' +
      '<rect x="244" y="20" width="140" height="40" fill="none" stroke="#555" stroke-width="2"/>',
      sky("u3", "#1b3b52", "#0f1e2c"));
  }

  /* 4. Paris at night: the Eiffel Tower sparkling over the Seine, the beat that took his name around the world */
  function paris() {
    let sparks = "";
    for (let i = 0; i < 22; i++) { const t = i / 21, y = 30 + t * 150, w = 6 + t * t * 60; sparks += '<circle class="tw' + (i % 2 ? " tw2" : "") + '" cx="' + (200 + (i % 2 ? w : -w) * 0.8) + '" cy="' + y + '" r="1.8" fill="#fff8d0"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#p4)"/>' + stars(20) +
      '<g class="beam"><path d="M200 26L20 6v8z" fill="#fff3b0" opacity=".6"/><path d="M200 26L380 10v8z" fill="#fff3b0" opacity=".6"/></g>' +
      '<g fill="#c98a3a"><path d="M196 22h8l2 20h-12z"/><path d="M194 42h12l10 60h-32z"/><rect x="180" y="100" width="40" height="6"/>' +
      '<path d="M182 106h36l34 74h-22q-20-40-30-40t-30 40h-22z"/><rect x="160" y="178" width="80" height="4"/></g>' +
      '<rect x="198" y="12" width="4" height="12" fill="#c98a3a"/>' + sparks +
      '<g fill="#2a2440">' + [[0, 40], [40, 30], [80, 46], [250, 36], [300, 50], [350, 32]].map(([x, h]) => '<rect x="' + x + '" y="' + (184 - h) + '" width="44" height="' + h + '"/><path d="M' + x + ' ' + (184 - h) + 'l22-10 22 10z"/>').join("") + '</g>' +
      ocean(184, "#1a2a50", "#ffd27a") +
      tag("HITS SINCE 87", 110, 248, 24, GOLD, -3),
      sky("p4", "#0b0f2a", "#3a2a5a"));
  }

  /* 5. His corner in Fontana: green signs at Sierra Av & Foothill Blvd, a Route 66 shield, HIT-BOY on the wall, the giant orange juice stand up the road */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + cloud(80, 30, .9) +
      '<path d="M0 116l70-30 60 18 80-40 90 40 100-26v40H0z" fill="#9c8a72"/>' +
      /* the giant orange stand: big orange ball with a green leaf top and a little roof window */
      '<g transform="translate(362 140) scale(.85)"><circle cx="0" cy="0" r="34" fill="#f28a1e"/><circle cx="-10" cy="-10" r="8" fill="#ffb15a" opacity=".6"/><path d="M0 -34q10 -12 20 -8q-8 8 -20 8z" fill="#3f8a3a"/><rect x="-12" y="4" width="24" height="16" fill="#3a2a22"/><rect x="-16" y="2" width="32" height="4" fill="#fff"/><rect x="-24" y="32" width="48" height="8" fill="#d9d4c8"/></g>' +
      '<rect x="0" y="116" width="250" height="104" fill="#e9dcc2"/><rect x="0" y="116" width="250" height="104" fill="url(#c5b)" opacity=".2"/>' +
      tag("HIT-BOY", 14, 180, 44, SURF, -6) + tag("SURF CLUB", 70, 208, 18, CORAL, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, GOLD) +
      '<rect x="276" y="96" width="5" height="124" fill="#5b6b5f"/>' +
      sign(236, 82, 86, "SIERRA AV") + sign(226, 102, 106, "FOOTHILL BLVD") +
      /* Route 66 shield: white shield, black numbers */
      '<path d="M258 132h40v8q0 20-20 26q-20-6-20-26z" fill="#fff" stroke="#111" stroke-width="2"/>' + T(278, 154, 13, "#111", "66", ' text-anchor="middle"') + T(278, 140, 5, "#111", "US", ' text-anchor="middle"'),
      sky("c5", "#5aa8e8", "#f6e2c0") + bricks("c5b", "#b9a684"));
  }

  window.SCENES = { freeway, speedway, surfclub, paris, corner };
})();
