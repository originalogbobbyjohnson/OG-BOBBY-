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
