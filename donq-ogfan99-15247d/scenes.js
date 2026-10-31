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


  /* 1. The 4 train pulling into 167 St, up on the el over River Avenue */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#3a3f4a"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#3a3f4a" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(18) +
      '<circle cx="340" cy="34" r="14" fill="#fff4e0" opacity=".9"/>' +
      '<rect x="0" y="50" width="400" height="10" fill="#3a3f4a"/>' + girders +
      '<rect x="90" y="66" width="220" height="34" rx="4" fill="#111"/>' +
      '<rect x="90" y="66" width="220" height="4" fill="#fff"/>' +
      '<text x="104" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">167 St</text>' +
      bullet(286, 84, "4", "#00933c") +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#00933c"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(272, 139, "4", "#00933c") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#15130f"/>' +
      tag("HIGHBRIDGE", 20, 238, 28, GOLD, -4) + tag("DON Q", 300, 240, 30, RED, -8),
      sky("g1", "#0d1424", "#3a4a6a"));
  }

  /* 2. The High Bridge over the Harlem River: stone arches, the steel arch span, the granite water tower, a boat going by */
  function bridge() {
    let stone = "";
    for (let i = 0; i < 3; i++) stone += '<path d="M' + (i * 46) + ' 150v-56h46v56h-6a17 22 0 0 0-34 0z" fill="#9a8c78" stroke="#6e624f" stroke-width="1.5"/>';
    for (let i = 0; i < 2; i++) stone += '<path d="M' + (308 + i * 46) + ' 150v-56h46v56h-6a17 22 0 0 0-34 0z" fill="#9a8c78" stroke="#6e624f" stroke-width="1.5"/>';
    let ribs = "";
    for (let x = 146; x < 306; x += 16) ribs += '<path d="M' + x + ' 94v' + (8 + Math.round(40 * (1 - Math.pow((x - 226) / 85, 2)) * 0 + Math.abs(x - 226) / 3)) + '" stroke="#5a6a74" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* water tower on the hill */
      '<path d="M0 100q60-30 120-20v20H0z" fill="#3e5a3a"/>' +
      '<rect x="56" y="28" width="20" height="62" fill="#b9ad98" stroke="#8a7f6a"/><path d="M52 30l14-18 14 18z" fill="#6a5a4a"/><rect x="60" y="40" width="4" height="8" fill="#3a3328"/><rect x="68" y="56" width="4" height="8" fill="#3a3328"/>' +
      '<rect x="0" y="88" width="400" height="7" fill="#7f7362"/><path d="M0 88h400" stroke="#2a2a2a" stroke-width="2"/>' +
      stone +
      '<path d="M138 150q88-110 176 0" fill="none" stroke="#5a6a74" stroke-width="7"/>' + ribs +
      '<rect x="128" y="94" width="14" height="56" fill="#9a8c78"/><rect x="304" y="94" width="14" height="56" fill="#9a8c78"/>' +
      river(150, "#1e3a52") +
      '<g class="boat"><path d="M0 196h50l-8 10h-36z" fill="#f2f2f2"/><rect x="12" y="186" width="20" height="10" fill="' + RED + '"/></g>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="4" fill="' + GOLD + '">THE HIGH BRIDGE</text>',
      sky("g2", "#203a5c", "#d89a6a"));
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

  /* 4. The Grand Concourse: the limestone courthouse, art deco apartment houses, traffic rolling by */
  function concourse() {
    let deco = "";
    const bld = (x, w, top, c) => {
      let b = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (200 - top) + '" fill="' + c + '"/>' +
        '<path d="M' + x + ' ' + top + 'h' + w + 'v6h-' + w + 'z" fill="#7a5a3a"/>';
      for (let y = top + 14; y < 190; y += 16) for (let i = 6; i < w - 8; i += 14) b += '<rect class="flk' + ((i + y) % 3 ? "" : " flk2") + '" x="' + (x + i) + '" y="' + y + '" width="7" height="9" fill="#ffe0a0" opacity=".85"/>';
      return b;
    };
    deco = bld(0, 90, 90, "#c98a5a") + bld(310, 90, 80, "#d9a36a");
    let cols = "";
    for (let i = 0; i < 9; i++) cols += '<rect x="' + (122 + i * 18) + '" y="96" width="8" height="74" fill="#ece4d2"/>';
    let car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="44" height="14" rx="4" fill="' + c + '"/><rect x="8" y="' + (y - 8) + '" width="26" height="10" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="34" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + deco +
      '<rect x="104" y="60" width="192" height="140" fill="#e2d8c2"/><rect x="104" y="60" width="192" height="16" fill="#cfc3a8"/>' +
      '<rect x="112" y="86" width="176" height="8" fill="#cfc3a8"/>' + cols +
      '<rect x="104" y="170" width="192" height="30" fill="#d4c9b0"/><rect x="186" y="176" width="28" height="24" fill="#5a4a36"/>' +
      '<text x="200" y="72" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="#6a5a40">BRONX COUNTY</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2a2d33"/><path d="M0 230h400" stroke="#f4f1e8" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("boat", 210, RED) + car("boat bird2", 236, ICE) +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="4" fill="' + GOLD + '">GRAND CONCOURSE</text>',
      sky("g4", "#4a6a9a", "#f0c890"));
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
