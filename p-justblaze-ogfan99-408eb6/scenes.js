/* Just Blaze producer game: Paterson, NJ. NJ Transit at Paterson station, the Great Falls, Baseline Studios, Hinchliffe Stadium, Market & Main with City Hall. Each scene 400 x 260. */
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
  const ORANGE = "#ff6a1a", GOLD = "#ffd23f", BLUE = "#3aa0ff", CREAM = "#f7f3ea", NJMAG = "#a6206a", NJBLUE = "#1a4fa0", NJORG = "#f26722";
  const note = (x, y, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + GOLD + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="2" height="14" fill="' + GOLD + '"/></g>';

  /* 1. NJ Transit Main Line pulling into Paterson station (elevated platform) */
  function train() {
    let wins = "";
    for (let x = 24; x < 300; x += 36) wins += '<rect x="' + x + '" y="112" width="22" height="18" rx="2" fill="#2a3a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#t1)"/>' + cloud(70, 34, 1) + cloud(280, 50, .8, "cld2") +
      /* brick buildings behind */
      '<rect x="0" y="50" width="120" height="70" fill="#8a3b2a"/><rect x="130" y="40" width="80" height="80" fill="#9c4a33"/><rect x="300" y="56" width="100" height="64" fill="#7a3324"/>' +
      winGrid(0, 50, 120, 60, "#3a1c16", "#ffd98a") + winGrid(130, 40, 80, 70, "#3a1c16", "#ffd98a") + winGrid(300, 56, 100, 54, "#3a1c16", "#ffd98a") +
      /* station sign */
      '<rect x="230" y="62" width="150" height="34" rx="4" fill="' + NJBLUE + '"/><rect x="230" y="88" width="150" height="4" fill="' + NJORG + '"/><rect x="230" y="92" width="150" height="4" fill="' + NJMAG + '"/>' +
      T(305, 84, 16, "#fff", "Paterson", ' text-anchor="middle"') +
      '<rect x="252" y="96" width="4" height="30" fill="#777"/><rect x="354" y="96" width="4" height="30" fill="#777"/>' +
      /* train: silver cars with orange/magenta/blue stripes */
      '<g class="anim-train"><rect x="6" y="100" width="320" height="56" rx="6" fill="#c9ced6" stroke="#7a828c" stroke-width="2"/>' + wins +
      '<rect x="6" y="136" width="320" height="4" fill="' + NJORG + '"/><rect x="6" y="140" width="320" height="4" fill="' + NJMAG + '"/><rect x="6" y="144" width="320" height="4" fill="' + NJBLUE + '"/>' +
      '<rect x="300" y="108" width="22" height="30" rx="3" fill="#2a3a4a"/><circle cx="318" cy="150" r="3" fill="#fff6c2"/></g>' +
      /* platform */
      '<rect x="0" y="160" width="400" height="20" fill="#9a958a"/><rect x="0" y="160" width="400" height="5" fill="#f2d24b"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#4a463f"/><g fill="#3a3630">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="180" width="10" height="80"/>').join("") + '</g>' +
      tag("JUST BLAZE", 110, 232, 26, ORANGE, -4),
      sky("t1", "#5aa0e0", "#d8ecf8"));
  }

  /* 2. The Great Falls of the Passaic: brown basalt gorge, white water falling, mist */
  function falls() {
    let water = "";
    for (let i = 0; i < 14; i++) water += '<rect class="fall' + (i % 2 ? " fl2" : "") + '" x="' + (150 + i * 8) + '" y="' + (80 + (i * 7) % 20) + '" width="3" height="' + (30 + (i * 11) % 20) + '" fill="#ffffff" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#f2)"/>' + cloud(60, 30, 1) +
      '<path d="M0 60q60-10 120 0t140 6t140-6v40H0z" fill="#4f7d3a"/>' +
      /* cliffs */
      '<path d="M0 90h146v170H0z" fill="#5a4a3e"/><path d="M262 90h138v170H262z" fill="#5a4a3e"/>' +
      '<g fill="#4a3c32">' + [20, 60, 100, 290, 330, 370].map(x => '<rect x="' + x + '" y="96" width="14" height="164"/>').join("") + '</g>' +
      '<path d="M0 86h146v8H0zM262 86h138v8H262z" fill="#6b8f4a"/>' +
      /* the falls */
      '<rect x="146" y="76" width="116" height="140" fill="#cfe8f2"/><rect x="146" y="76" width="116" height="10" fill="#8fc0d8"/>' + water +
      '<ellipse cx="204" cy="214" rx="90" ry="20" fill="#ffffff" opacity=".75" class="tw"/>' +
      ocean(222, "#3f7fa0", "#cfe8f2") +
      /* footbridge */
      '<rect x="120" y="44" width="170" height="5" fill="#2f3a44"/><g stroke="#2f3a44" stroke-width="2">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (124 + i * 20) + ' 49v-12"/>').join("") + '</g><rect x="120" y="36" width="170" height="2" fill="#2f3a44"/>' +
      tag("GREAT FALLS", 10, 250, 22, GOLD, -4),
      sky("f2", "#6fb0e8", "#e4f2fb"));
  }

  /* 3. Baseline Studios session: MPC pads flashing, horn section blasting, monitors thumping */
  function baseline() {
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pad pd' + (((r * 4 + c) * 3) % 4 + 1) + '" x="' + (156 + c * 24) + '" y="' + (150 + r * 20) + '" width="20" height="16" rx="2" fill="' + [ORANGE, GOLD, BLUE, "#e8e8e8"][(r * 2 + c) % 4] + '"/>';
    const horn = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0h40l26-14v40L40 12H0z" fill="' + GOLD + '" stroke="#8a5d14" stroke-width="2"/><circle cx="8" cy="6" r="3" fill="#8a5d14"/><circle cx="20" cy="6" r="3" fill="#8a5d14"/></g>';
    const spk = x => '<rect x="' + x + '" y="40" width="50" height="86" rx="4" fill="#18181c" stroke="#333" stroke-width="2"/><circle class="pulse" cx="' + (x + 25) + '" cy="98" r="18" fill="#2a2a30" stroke="#555" stroke-width="3"/><circle cx="' + (x + 25) + '" cy="60" r="8" fill="#2a2a30" stroke="#555" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b3)"/>' +
      '<g class="neon"><rect x="110" y="14" width="180" height="32" rx="6" fill="none" stroke="' + ORANGE + '" stroke-width="3"/>' + T(200, 37, 18, ORANGE, "BASELINE", ' text-anchor="middle" letter-spacing="5"') + '</g>' +
      spk(14) + spk(336) +
      horn(84, 70, 1) + '<g transform="translate(400 0) scale(-1 1)">' + horn(84, 70, 1) + '</g>' +
      note(150, 70, "tw") + note(178, 56, "tw tw2") + note(226, 64, "tw") +
      '<rect x="0" y="134" width="400" height="126" fill="#2a1d14"/><rect x="0" y="134" width="400" height="8" fill="#4a3424"/>' +
      '<rect x="140" y="138" width="120" height="102" rx="6" fill="#d9d4c8" stroke="#666" stroke-width="2"/>' + pads +
      '<rect x="28" y="160" width="96" height="60" rx="4" fill="#111"/><g stroke="' + BLUE + '" stroke-width="2" fill="none"><path class="tw" d="M34 194h10l4-16 6 30 6-24 4 10h12l4-18 6 28 6-14h10"/></g>' +
      '<rect x="280" y="160" width="96" height="60" rx="4" fill="#111"/>' + T(328, 186, 9, GOLD, "HORNS UP", ' text-anchor="middle"') + T(328, 204, 9, ORANGE, "DRUMS LOUD", ' text-anchor="middle"'),
      sky("b3", "#2a1608", "#120c08"));
  }

  /* 4. Hinchliffe Stadium, Paterson: art deco concrete grandstand, cream with terracotta trim, lights on */
  function stadium() {
    return svg(
      '<rect width="400" height="260" fill="url(#h4)"/>' + stars(14) +
      /* light towers */
      [40, 360].map(x => '<rect x="' + (x - 2) + '" y="30" width="4" height="110" fill="#777"/><rect x="' + (x - 16) + '" y="20" width="32" height="14" fill="#333"/><g class="flk">' + [0, 1, 2, 3].map(i => '<circle cx="' + (x - 11 + i * 7) + '" cy="27" r="3" fill="#fff6c2"/>').join("") + '</g><path d="M' + (x - 16) + ' 34L' + (x - 40) + ' 190h80L' + (x + 16) + ' 34z" fill="#fff6c2" fill-opacity=".08"/>').join("") +
      /* grandstand wall */
      '<rect x="40" y="100" width="320" height="90" fill="#efe3c8"/><rect x="40" y="100" width="320" height="10" fill="#c96a3c"/><rect x="40" y="180" width="320" height="10" fill="#c96a3c"/>' +
      '<g fill="#3f6d8a">' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (56 + i * 34) + '" y="122" width="18" height="44" rx="9"/>').join("") + '</g>' +
      '<g fill="#c96a3c">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (46 + i * 34) + '" y="114" width="6" height="66"/>').join("") + '</g>' +
      '<rect x="150" y="80" width="100" height="24" fill="#efe3c8" stroke="#c96a3c" stroke-width="3"/>' + T(200, 97, 12, "#8a3b22", "HINCHLIFFE", ' text-anchor="middle" letter-spacing="2"') +
      /* field + crowd */
      '<rect x="0" y="190" width="400" height="70" fill="#3d8a3a"/><path d="M0 225h400" stroke="#fff" stroke-width="2"/><circle cx="200" cy="225" r="18" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<g class="bob">' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + (20 + i * 24) + '" cy="200" r="5" fill="' + [ORANGE, GOLD, BLUE, CREAM][i % 4] + '"/>').join("") + '</g>' +
      tag("ROC", 300, 250, 22, GOLD, -4),
      sky("h4", "#0c1430", "#3a2a5a"));
  }

  /* 5. Market St and Main St, Paterson: green signs, tagged wall, City Hall clock tower behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(12) +
      /* Paterson City Hall: pale marble, tall clock tower with cupola */
      '<g transform="translate(270 0)">' +
        '<rect x="0" y="120" width="130" height="100" fill="#e6e0d2"/><rect x="0" y="116" width="130" height="6" fill="#cfc7b4"/>' +
        '<rect x="44" y="40" width="42" height="80" fill="#e6e0d2"/><rect x="40" y="36" width="50" height="6" fill="#cfc7b4"/>' +
        '<circle cx="65" cy="60" r="11" fill="#f7f3ea" stroke="#6b5a3a" stroke-width="2"/><path d="M65 60v-7M65 60h5" stroke="#333" stroke-width="1.5"/>' +
        '<rect x="50" y="14" width="30" height="22" fill="#d9d2c0"/><path d="M48 14q17-20 34 0z" fill="#b8ad94"/><rect x="63" y="0" width="4" height="8" fill="#6b5a3a"/>' +
        '<g fill="#8a826e">' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (8 + i * 25) + '" y="140" width="12" height="22" rx="6"/>').join("") + '</g>' +
        '<g fill="#ffe680" class="tw">' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (10 + i * 25) + '" y="176" width="8" height="12"/>').join("") + '</g>' +
      '</g>' +
      '<rect x="0" y="116" width="250" height="104" fill="#6e2e22"/><rect x="0" y="116" width="250" height="104" fill="url(#c5b)" opacity=".35"/>' +
      tag("JUST BLAZE", 12, 176, 38, ORANGE, -6) + tag("PATERSON", 70, 208, 18, GOLD, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, BLUE) +
      '<rect x="258" y="96" width="5" height="124" fill="#5b6b5f"/>' +
      sign(214, 96, 92, "MARKET ST") + sign(220, 116, 80, "MAIN ST"),
      sky("c5", "#141a3a", "#e0703a") + bricks("c5b", "#3a1a12"));
  }

  window.SCENES = { train, falls, baseline, stadium, corner };
})();
