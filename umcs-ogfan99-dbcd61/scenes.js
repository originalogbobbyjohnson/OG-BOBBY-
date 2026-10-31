/* Staten Island opening scenes for The U.M.C.'s game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,240px) rotate(300deg);opacity:.9}}' +
    '.leaf{animation:leaf 6s linear infinite}.l2{animation-delay:-1.5s}.l3{animation-delay:-3s}.l4{animation-delay:-4.5s}' +
    '@keyframes sail{from{transform:translateX(-80px)}to{transform:translateX(460px)}}' +
    '.sail{animation:sail 16s linear infinite}' +
    '@keyframes flash{0%,88%,100%{opacity:0}92%{opacity:.9}}' +
    '.flash{animation:flash 4s linear infinite}' +
    '@keyframes ball{0%{transform:translate(0,0)}50%{transform:translate(120px,-90px)}100%{transform:translate(240px,-20px)}}' +
    '.ball{animation:ball 3s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-12deg)}}' +
    '.flag{animation:wave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const CYAN = "#38e8ff", GREEN = "#7cd36b", ORANGE = "#ff9f1c";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* lower Manhattan across the harbor */
  const skyline = (y, col) => {
    let s = "";
    [[0, 14, 30], [16, 10, 44], [28, 16, 26], [46, 12, 58], [60, 18, 36], [80, 10, 50], [92, 14, 30], [108, 20, 40]].forEach(b =>
      s += '<rect x="' + (140 + b[0]) + '" y="' + (y - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="' + col + '"/>');
    s += '<path d="M190 ' + (y - 58) + 'l6-30 6 30z" fill="' + col + '"/><rect x="190" y="' + (y - 58) + '" width="12" height="58" fill="' + col + '"/>';
    return s;
  };

  /* 1. Tompkinsville: the open-air SIR platform by the harbor, the train rolling in */
  function station() {
    let windows = "";
    for (let x = 22; x < 290; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#ffcf6b"/>' +
      '<rect x="0" y="90" width="400" height="20" fill="#2c5878"/>' + skyline(92, "#3b4a66") +
      '<path class="shim" d="M20 100h40M260 104h60" stroke="#ffcf6b" stroke-width="2"/>' +
      /* the platform canopy: steel posts, a long flat roof */
      '<rect x="0" y="48" width="400" height="8" fill="#d8dde3"/><rect x="0" y="56" width="400" height="3" fill="#0039a6"/>' +
      '<rect x="40" y="56" width="5" height="70" fill="#7b8794"/><rect x="200" y="56" width="5" height="70" fill="#7b8794"/><rect x="360" y="56" width="5" height="70" fill="#7b8794"/>' +
      /* black station sign */
      '<rect x="92" y="64" width="216" height="32" rx="4" fill="#111"/><rect x="92" y="64" width="216" height="4" fill="#fff"/>' +
      '<text x="104" y="88" ' + FONT + ' font-size="15" fill="#fff">Tompkinsville</text>' + sir(280, 81) +
      /* the SIR car: stainless with the blue band */
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="6" fill="#0039a6"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' + sir(262, 172) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c232c"/>' +
      tag("STATEN ISLAND", 18, 240, 24, CYAN, -4) + tag("UMC'S", 280, 242, 30, GREEN, -7),
      sky("g1", "#2a3a6a", "#e88a5b"));
  }

  /* 2. The Greenbelt: a trail through the autumn woods, a wooden footbridge, leaves coming down */
  function greenbelt() {
    let trunks = "";
    [[20, 9], [70, 7], [120, 11], [300, 10], [350, 8], [388, 7]].forEach(t => trunks += '<rect x="' + t[0] + '" y="40" width="' + t[1] + '" height="160" fill="#4a3a2c"/>');
    let crowns = "";
    [[24, 50, 40, "#c8551f"], [74, 70, 34, "#e09a2a"], [124, 40, 44, "#a83a22"], [304, 46, 42, "#d9862a"], [354, 66, 36, "#b8481e"], [200, 30, 46, "#4f7a33"], [250, 60, 36, "#e0b22a"]].forEach(c =>
      crowns += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="' + c[3] + '"/>');
    let leaves = "";
    ["", " l2", " l3", " l4"].forEach((l, i) => { leaves += '<path class="leaf' + l + '" d="M' + (60 + i * 90) + ' 0q6-6 10 0q-4 6-10 0z" fill="' + ["#e09a2a", "#c8551f", "#e0b22a", "#a83a22"][i] + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + trunks + crowns +
      /* the trail */
      '<path d="M120 260q40-60 70-90t40-40h20q-10 20-30 50t-40 80z" fill="#b89a6a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5a6a2a" opacity=".85"/>' +
      '<path d="M150 260q30-40 60-80h28q-20 40-40 80z" fill="#c8a978"/>' +
      /* the footbridge over the brook */
      '<path d="M140 206h120" stroke="#6a4a2a" stroke-width="6"/><path d="M140 194h120" stroke="#6a4a2a" stroke-width="3"/>' +
      (function () { let p = ""; for (let x = 144; x <= 256; x += 16) p += '<path d="M' + x + ' 194v12" stroke="#6a4a2a" stroke-width="3"/>'; return p; })() +
      '<path class="shim" d="M0 220q100-6 200 0t200 0" stroke="#7fb6d6" stroke-width="5" fill="none"/>' +
      /* the blue blaze on a tree */
      '<rect x="122" y="120" width="6" height="12" fill="#2a6fd6"/>' + leaves +
      tag("GREENBELT", 20, 248, 26, ORANGE, -3),
      sky("g2", "#9cc6e8", "#f4dcae"));
  }

  /* 3. The Alice Austen House, Clear Comfort: the gabled cottage on the Narrows, a sailboat, a camera flash */
  function austen() {
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="0" y="120" width="400" height="60" fill="#3a6f94"/>' +
      '<path class="shim" d="M30 136h60M200 150h70M300 132h50" stroke="#cde4f2" stroke-width="2"/>' +
      '<path d="M300 118l100-10v12z" fill="#5d7a5a" opacity=".7"/>' +
      '<g class="sail"><g class="bob"><path d="M20 140h40l-6 8H26z" fill="#f2f2f2"/><path d="M40 138V104l18 32z" fill="#fff"/><path d="M38 138V110l-14 26z" fill="#ffe7b0"/></g></g>' +
      /* the lawn sloping to the water */
      '<path d="M0 180q200-30 400 0v80H0z" fill="#5c9a46"/>' +
      /* the cottage: white clapboard, steep gables with gingerbread trim, dark green trim, ivy */
      '<rect x="120" y="120" width="170" height="70" fill="#f4f0e6" stroke="#9a9484" stroke-width="1.5"/>' +
      '<path d="M112 122l33-44 33 44zM178 122l33-44 33 44zM236 122l30-38 30 38z" fill="#4a3a32" stroke="#2e231d" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M120 122l25-33 25 33M186 122l25-33 25 33M244 122l22-29 22 29" fill="none" stroke="#f4f0e6" stroke-width="2" stroke-dasharray="3 2"/>' +
      '<rect x="210" y="66" width="8" height="18" fill="#7a3a2a"/>' +
      (function () { let w = ""; [136, 166, 200, 230, 262].forEach(x => w += '<rect x="' + x + '" y="134" width="14" height="22" fill="#9cc3d6" stroke="#2f5a3a" stroke-width="2"/>'); return w; })() +
      '<rect x="138" y="96" width="14" height="16" fill="#9cc3d6" stroke="#2f5a3a" stroke-width="2"/><rect x="204" y="96" width="14" height="16" fill="#9cc3d6" stroke="#2f5a3a" stroke-width="2"/>' +
      /* porch */
      '<rect x="120" y="164" width="170" height="4" fill="#2f5a3a"/>' +
      (function () { let p = ""; for (let x = 124; x < 290; x += 20) p += '<rect x="' + x + '" y="166" width="3" height="24" fill="#2f5a3a"/>'; return p; })() +
      '<path d="M120 190q-10-40 4-70M290 190q8-30-2-60" stroke="#3d6b2c" stroke-width="7" fill="none" opacity=".9"/>' +
      /* a tripod camera on the lawn, flashing */
      '<path d="M350 222l-10 24M350 222l10 24M350 222v24" stroke="#2b2b2b" stroke-width="2"/><rect x="338" y="206" width="24" height="16" fill="#2b2b2b"/><circle cx="350" cy="214" r="5" fill="#6a7a8a"/>' +
      '<circle class="flash" cx="350" cy="214" r="22" fill="#fff8d6"/>' +
      tag("CLEAR COMFORT", 18, 244, 24, CYAN, -3),
      sky("g3", "#86b8de", "#f6e2b8"));
  }

  /* 4. The ballpark on the St. George waterfront: Manhattan across the water, a fly ball, flags flying */
  function ballpark() {
    let seats = "";
    for (let y = 140; y < 176; y += 7) seats += '<path d="M0 ' + y + 'h400" stroke="#1f4a7a" stroke-width="4"/>';
    let fans = "";
    for (let x = 6; x < 400; x += 9) fans += '<circle cx="' + x + '" cy="' + (138 + (x * 7) % 34) + '" r="2.4" fill="' + ["#ffcf6b", "#38e8ff", "#f2f2f2", "#ff9f1c"][x % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<rect x="0" y="96" width="400" height="20" fill="#2c5878"/>' + skyline(98, "#4a5a7a") +
      /* light towers */
      '<rect x="20" y="30" width="4" height="100" fill="#2b3440"/><rect x="8" y="24" width="28" height="10" fill="#fff8d6" class="flk"/>' +
      '<rect x="376" y="30" width="4" height="100" fill="#2b3440"/><rect x="364" y="24" width="28" height="10" fill="#fff8d6" class="flk flk2"/>' +
      /* flags on the outfield wall */
      '<path d="M120 116v-30M280 116v-30" stroke="#ddd" stroke-width="2"/>' +
      '<path class="flag" d="M121 86h22v12h-22z" fill="' + CYAN + '"/><path class="flag" d="M281 86h22v12h-22z" fill="' + ORANGE + '"/>' +
      '<rect x="0" y="116" width="400" height="20" fill="#1f5a34"/>' +
      '<text x="200" y="130" text-anchor="middle" ' + FONT + ' font-size="9" fill="#e9f7e9">390 FT</text>' +
      '<rect x="0" y="136" width="400" height="44" fill="#1a2a44"/>' + seats + fans +
      /* the field */
      '<path d="M0 180h400v80H0z" fill="#3f8a3a"/><path d="M120 260l80-60 80 60z" fill="#b8865a"/>' +
      '<path d="M200 200l-30 22 30 22 30-22z" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<circle class="ball" cx="140" cy="230" r="3.5" fill="#fff"/>' +
      tag("ST. GEORGE", 18, 248, 24, CYAN, -3),
      sky("g4", "#14204a", "#5a3a6a"));
  }

  /* 5. Bay St and Hannah St in Tompkinsville: green signs, the tag wall, a basket of fruit on the stoop */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#2e3a44"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#36444f"/>'; return b; })() +
      tag("U.M.C.'S", 26, 126, 40, CYAN, -7) + tag("BLUE CHEESE", 36, 172, 26, "#7fb0ff", -3) + tag("GROW ON", 46, 206, 22, GREEN, -2) +
      /* the fruit basket */
      '<path d="M206 196h44l-6 18h-32z" fill="#9a6a3a" stroke="#5a3a1a" stroke-width="1.5"/>' +
      '<circle cx="216" cy="192" r="6" fill="#e0402a"/><circle cx="228" cy="190" r="6" fill="' + ORANGE + '"/><circle cx="240" cy="192" r="6" fill="' + GREEN + '"/>' +
      '<path d="M228 184q2-6 6-6" stroke="#3d6b2c" stroke-width="2" fill="none"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="270" y="88" width="64" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Bay St</text>' +
      '<rect x="264" y="110" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Hannah St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a3a4a"));
  }

  window.SCENES = { station, greenbelt, austen, ballpark, corner };
})();
