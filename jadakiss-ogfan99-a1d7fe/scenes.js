/* Yonkers opening scenes for the Jadakiss game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes trot{from{transform:translateX(-140px)}to{transform:translateX(460px)}}' +
    '.trot{animation:trot 7s linear infinite}.trot2{animation-delay:-3.4s}' +
    '@keyframes legs{0%,100%{transform:skewX(14deg)}50%{transform:skewX(-14deg)}}' +
    '.legs{animation:legs .35s linear infinite;transform-box:fill-box;transform-origin:top}' +
    '@keyframes twinkle{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.tw{animation:twinkle 2.4s ease-in-out infinite}.tw2{animation-delay:.8s}.tw3{animation-delay:1.6s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '@keyframes flow{from{stroke-dashoffset:0}to{stroke-dashoffset:-40}}' +
    '.flow{animation:flow 1.6s linear infinite}' +
    '@keyframes jump{0%,60%,100%{transform:translate(0,0) rotate(0);opacity:0}70%{opacity:1}80%{transform:translate(14px,-22px) rotate(-30deg);opacity:1}92%{transform:translate(28px,0) rotate(-60deg);opacity:0}}' +
    '.fish{animation:jump 3.6s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}' +
    '.glow{animation:glow 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd34d", SILVER = "#e4e4e4", BLUE = "#6fb3ff", MNBLUE = "#0b3d78", HUDSON = "#009b3a";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* the Palisades across the Hudson */
  const palisades = (y, op) =>
    '<g opacity="' + (op || 1) + '"><path d="M0 ' + y + 'l40-5 50 3 60-7 50 5 60-6 60 4 80-5v30H0z" fill="#2f5a34"/>' +
    '<path d="M0 ' + (y + 4) + 'l40-5 50 3 60-7 50 5 60-6 60 4 80-5v26H0z" fill="#5b5148"/></g>';

  /* 1. Yonkers station on the Hudson Line: the 1911 brick station house, the train rolling in */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="140" width="28" height="16" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let arches = "";
    for (let i = 0; i < 5; i++) { const x = 118 + i * 34; arches += '<path d="M' + x + ' 92v-18q11-14 22 0v18z" fill="#ffd98a" class="flk' + (i % 2 ? " flk2" : "") + '" opacity=".85"/><path d="M' + x + ' 74q11-14 22 0" stroke="#e9dfc8" stroke-width="2" fill="none"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(16) +
      '<circle cx="340" cy="30" r="12" fill="#fff1d6" opacity=".9"/>' +
      palisades(56, .9) +
      /* the station house: red brick, limestone trim, a hipped roof */
      '<rect x="104" y="58" width="192" height="48" fill="#8a3b2b" stroke="#5e2519" stroke-width="1.5"/>' +
      '<path d="M96 60l20-20h168l20 20z" fill="#4a5a52" stroke="#2f3b35" stroke-width="1.5"/>' +
      '<rect x="104" y="58" width="192" height="5" fill="#e9dfc8"/><rect x="104" y="96" width="192" height="4" fill="#e9dfc8"/>' + arches +
      /* platform canopy */
      '<rect x="0" y="104" width="400" height="6" fill="#2b3440"/>' +
      '<rect x="30" y="108" width="5" height="34" fill="#2b3440"/><rect x="366" y="108" width="5" height="34" fill="#2b3440"/>' +
      /* black station sign */
      '<rect x="128" y="112" width="144" height="24" rx="3" fill="#111" stroke="#fff" stroke-width="1"/><rect x="128" y="112" width="144" height="3" fill="#fff"/>' +
      '<text x="140" y="130" ' + FONT + ' font-size="13" fill="#fff">Yonkers</text>' +
      '<circle cx="232" cy="125" r="8" fill="' + HUDSON + '"/><text x="232" y="129" text-anchor="middle" ' + FONT + ' font-size="9" fill="#fff">H</text>' +
      '<text x="244" y="128" ' + FONT + ' font-size="6" fill="#dbe6f3">HUDSON</text>' +
      /* the train slides in: stainless with the blue stripe */
      '<g class="anim-train">' +
        '<rect x="8" y="138" width="304" height="46" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="304" height="5" fill="' + MNBLUE + '"/><rect x="8" y="170" width="304" height="2" fill="#d1343a"/>' + windows +
        '<circle cx="304" cy="178" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="184" width="400" height="9" fill="#eab308"/>' +
      '<rect x="0" y="193" width="400" height="67" fill="#1a1d22"/>' +
      tag("YONKERS", 24, 240, 30, GOLD, -4) + tag("THE LOX", 264, 242, 28, SILVER, -7),
      sky("g1", "#0e0c1e", "#4b3a5e"));
  }

  /* 2. Yonkers Raceway under the lights: a harness horse and sulky trotting past the grandstand */
  function raceway() {
    const horse = (cls, col) =>
      '<g class="trot ' + cls + '">' +
        /* sulky wheel + shafts + driver */
        '<circle cx="18" cy="196" r="13" fill="none" stroke="#ddd" stroke-width="2"/><path d="M18 183v26M5 196h26" stroke="#bbb" stroke-width="1"/>' +
        '<path d="M18 190l52-10" stroke="#ddd" stroke-width="2"/>' +
        '<rect x="12" y="166" width="12" height="18" rx="4" fill="' + col + '"/><circle cx="18" cy="160" r="6" fill="' + col + '" stroke="#111"/>' +
        /* horse */
        '<path d="M50 168q22-8 40 0l10-16 8 4-6 18q-2 8-12 8H56q-8 0-6-14z" fill="#5a3a22" stroke="#2e1d10" stroke-width="1.2"/>' +
        '<path d="M98 152l4-6" stroke="#2e1d10" stroke-width="3"/>' +
        '<g class="legs"><path d="M58 182v26M66 182v26" stroke="#3e2816" stroke-width="3"/></g>' +
        '<g class="legs" style="animation-delay:-.17s"><path d="M86 182v26M94 182v26" stroke="#3e2816" stroke-width="3"/></g>' +
      '</g>';
    let lights = "";
    for (let i = 0; i < 4; i++) { const x = 30 + i * 110; lights += '<rect x="' + x + '" y="20" width="3" height="80" fill="#2b3440"/><rect x="' + (x - 12) + '" y="14" width="27" height="10" fill="#fff8d6" class="glow"/>'; }
    let seats = "";
    for (let y = 78; y < 128; y += 8) seats += '<path d="M150 ' + y + 'h240" stroke="#3a4a6a" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) + lights +
      /* the grandstand */
      '<path d="M140 70h260v66H140z" fill="#25324d"/>' + seats +
      '<path d="M130 70l20-14h250v14z" fill="#e9e4da"/>' +
      '<rect x="140" y="132" width="260" height="8" fill="#e9e4da"/>' +
      /* the tote board */
      '<rect x="20" y="104" width="90" height="34" fill="#111" stroke="#555"/>' +
      '<text x="65" y="118" text-anchor="middle" ' + FONT + ' font-size="9" fill="' + GOLD + '">RACE 9</text>' +
      '<text x="65" y="132" text-anchor="middle" ' + FONT + ' font-size="9" fill="#7fe07f" class="flk">1 : 59.4</text>' +
      /* the track */
      '<rect x="0" y="140" width="400" height="80" fill="#8a6440"/>' +
      '<path d="M0 144h400" stroke="#fff" stroke-width="3"/><path d="M0 216h400" stroke="#fff" stroke-width="2"/>' +
      horse("", "#ffd34d") + horse("trot2", "#6fb3ff") +
      '<rect x="0" y="220" width="400" height="40" fill="#2a4a2a"/>' +
      tag("YONKERS RACEWAY", 20, 248, 22, GOLD, -3),
      sky("g2", "#0a1024", "#2a2a52"));
  }

  /* 3. The Hudson River Museum: the stone Glenview mansion and the planetarium dome full of stars */
  function museum() {
    let dots = "";
    for (let i = 0; i < 14; i++) dots += '<circle class="tw tw' + (i % 3 + 1) + '" cx="' + (262 + (i * 37) % 96) + '" cy="' + (78 + (i * 23) % 40) + '" r="' + (i % 4 ? 1.2 : 2) + '" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      palisades(120, .7) +
      '<rect x="0" y="146" width="400" height="20" fill="#3d6b8c"/><path class="shim" d="M20 154h50M200 158h60" stroke="#bcd6ea" stroke-width="2"/>' +
      /* Glenview: grey stone, mansard roof, the tower */
      '<rect x="40" y="96" width="150" height="90" fill="#8d8a7e" stroke="#5a574e" stroke-width="1.5"/>' +
      '<path d="M34 98l14-24h134l14 24z" fill="#3e4b4a" stroke="#28302f" stroke-width="1.5"/>' +
      '<rect x="92" y="44" width="40" height="54" fill="#8d8a7e" stroke="#5a574e" stroke-width="1.5"/>' +
      '<path d="M86 46l26-22 26 22z" fill="#3e4b4a" stroke="#28302f" stroke-width="1.5"/><path d="M112 24v-8" stroke="#28302f" stroke-width="2"/>' +
      '<rect x="104" y="56" width="16" height="22" rx="7" fill="#ffd98a"/>' +
      (function () { let w = ""; for (let x = 52; x < 186; x += 26) { w += '<rect x="' + x + '" y="108" width="12" height="22" rx="5" fill="#ffd98a" opacity=".85"/><rect x="' + x + '" y="146" width="12" height="22" fill="#ffd98a" opacity=".7"/>'; } return w; })() +
      '<path d="M40 136h150" stroke="#b8b2a2" stroke-width="3"/>' +
      '<rect x="98" y="166" width="28" height="20" fill="#4a3424"/>' +
      /* the modern wing + the planetarium dome, cut away to show the sky show inside */
      '<rect x="218" y="126" width="168" height="60" fill="#c8c3b6" stroke="#8b8478" stroke-width="1.5"/>' +
      '<path d="M250 126a60 60 0 0 1 120 0z" fill="#0b1438" stroke="#c8c3b6" stroke-width="4"/>' + dots +
      '<g style="transform-origin:310px 126px;animation:spin 30s linear infinite"><path d="M310 126l40-30" stroke="#6fb3ff" stroke-width="1" opacity=".5"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3a5a34"/>' +
      '<path d="M0 200q200-10 400 0" stroke="#d7cdb5" stroke-width="10" fill="none"/>' +
      tag("HUDSON RIVER MUSEUM", 18, 244, 20, GOLD, -3),
      sky("g3", "#2b3a66", "#d9a46a"));
  }

  /* 4. The Saw Mill River, daylighted at Van der Donck Park: the stream running through downtown again */
  function sawmill() {
    let bldg = "";
    [[0, 40, 80], [44, 30, 100], [78, 46, 70], [300, 40, 90], [344, 56, 74]].forEach(b =>
      { bldg += '<rect x="' + b[0] + '" y="' + (140 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="#6b4a3e"/>';
        for (let y = 150 - b[2]; y < 132; y += 14) for (let x = b[0] + 5; x < b[0] + b[1] - 6; x += 11) bldg += '<rect x="' + x + '" y="' + y + '" width="6" height="7" fill="#ffd98a" opacity=".6"/>'; });
    let reeds = "";
    for (let x = 6; x < 400; x += 14) reeds += '<path d="M' + x + ' 186q2-12 ' + ((x % 3) + 2) + ' -18" stroke="#4f8a3a" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + bldg +
      '<rect x="0" y="138" width="400" height="34" fill="#4c7a3a"/>' +
      /* trees on the banks */
      '<circle cx="140" cy="132" r="22" fill="#3d7d43"/><circle cx="170" cy="126" r="18" fill="#2f6b38"/><circle cx="250" cy="130" r="22" fill="#3d7d43"/>' +
      /* the stone-lined channel */
      '<path d="M0 186q100-12 200-6t200-4v40q-100 8-200 4T0 224z" fill="#9a9384"/>' +
      '<path d="M0 192q100-12 200-6t200-4v28q-100 8-200 4T0 218z" fill="#2f6f92"/>' +
      '<path class="flow" d="M10 200q60-6 120-2M150 206q70-6 130-2M260 198q60-4 130 0" stroke="#bfe3f5" stroke-width="2" fill="none" stroke-dasharray="14 26"/>' +
      '<path class="flow" d="M40 212q80-6 150-2M220 212q80-4 160 0" stroke="#8cc4e0" stroke-width="2" fill="none" stroke-dasharray="10 30" style="animation-duration:2.2s"/>' +
      '<g class="fish"><path d="M180 206q8-6 16 0q-8 6-16 0zM180 206l-6-4v8z" fill="#cfd8dc"/></g>' + reeds +
      /* the footbridge */
      '<path d="M120 182q80-34 160 0" stroke="#c8c3b6" stroke-width="7" fill="none"/>' +
      (function () { let p = ""; for (let x = 132; x < 272; x += 14) p += '<path d="M' + x + ' ' + (182 - 30 * Math.sin(Math.PI * (x - 120) / 160)) + 'v-12" stroke="#2b3440" stroke-width="1.5"/>'; return p; })() +
      '<path d="M128 168q72-32 144 0" stroke="#2b3440" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#6b6658"/>' +
      tag("SAW MILL RIVER", 20, 250, 22, GOLD, -3),
      sky("g4", "#7fb6e0", "#f3d9a8"));
  }

  /* 5. Ashburton Av and Palisade Av, west Yonkers: green signs and the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' + IC_BD +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3e3a44"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a4652"/>'; return b; })() +
      tag("JADAKISS", 26, 128, 38, GOLD, -7) + tag("D-BLOCK", 54, 176, 30, SILVER, -3) + tag("AHHH HA!", 40, 210, 22, BLUE, -2) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="258" y="88" width="98" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="307" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Ashburton Av</text>' +
      '<rect x="262" y="110" width="90" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="307" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Palisade Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#3a2a3a"));
  }

  /* Iconic landmark behind the corner, shared with the other artists from this area but seen from this corner: the Yonkers Pier and the Palisades: straight across the river from Palisade Av at night, moonlit cliffs, the pier low on the water, a tug going by */
  const IC_BD = "<g><style>@keyframes icsw{0%{transform:scaleX(1)}50%{transform:scaleX(-1)}100%{transform:scaleX(1)}}.icsw{animation:icsw 6s ease-in-out infinite}@keyframes icfl{0%,14%,36%,100%{opacity:0}25%{opacity:.85}}.icfl{animation:icfl 6s ease-in-out infinite}@keyframes icpl{0%,100%{opacity:.35}50%{opacity:1}}.icpl{animation:icpl 2.6s ease-in-out infinite}.icp2{animation-delay:-1.3s}@keyframes icbl{0%,49%{opacity:1}50%,100%{opacity:.12}}.icbl{animation:icbl 1.4s steps(1) infinite}.icb2{animation-delay:-.7s}@keyframes icsh{0%,100%{transform:translateX(0);opacity:.35}50%{transform:translateX(6px);opacity:.9}}.icsh{animation:icsh 3s ease-in-out infinite}.ics2{animation-delay:-1.5s}@keyframes icsm{0%{transform:translate(0,0) scale(.6);opacity:.75}100%{transform:translate(22px,-30px) scale(1.6);opacity:0}}.icsm{animation:icsm 4s linear infinite;transform-box:fill-box;transform-origin:center}.icm2{animation-delay:-1.3s}.icm3{animation-delay:-2.6s}@keyframes icsl{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.icsl{animation:icsl 5s ease-in-out infinite}.icl2{animation-delay:-2.5s}@keyframes icsg{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.icsg{animation:icsg 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}@keyframes icdr{from{transform:translateX(0)}to{transform:translateX(var(--d))}}.icdr{animation:icdr var(--t) linear infinite}</style><path d=\"M196 184L196 148.3L202 145.8L208 144.1L214 147.2L220 147.2L226 142.6L232 142.1L238 145.7L244 144.8L250 142.2L256 145.1L262 148.7L268 146.2L274 143.9L280 146.5L286 146.9L292 142.5L298 141.7L304 145.6L310 145.5L316 142.8L322 145.2L328 148.9L334 146.6L340 143.5L346 145.7L352 146.6L358 142.5L364 141.5L370 145.5L376 146.3L382 143.4L388 145.1L394 148.9L400 146.7L400 184z\" fill=\"#4e4a52\"/><path d=\"M199 151V179\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M207 154V181\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M214 157V183\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M220 160V178\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M225 154V180\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M233 151V182\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M240 154V184\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M246 157V179\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M251 151V181\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M259 154V183\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M266 157V178\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M272 154V180\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M277 157V182\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M285 151V184\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M292 154V179\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M298 157V181\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M303 160V183\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M311 148V178\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M318 151V180\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M324 154V182\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M329 157V184\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M337 160V179\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M344 154V181\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M350 151V183\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M355 154V178\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M363 157V180\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M370 151V182\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M376 154V184\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M381 157V179\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M389 154V181\" stroke=\"#3a3640\" stroke-width=\"1\" opacity=\".55\"/><path d=\"M396 157V183\" stroke=\"#3a3640\" stroke-width=\"1.5\" opacity=\".55\"/><path d=\"M196 184q102 -11 204 0z\" fill=\"#3a3640\" opacity=\".6\"/><path d=\"M196 149.3Q193 139.3 196 144.3Q199 136.8 202 141.8Q205 135.1 208 140.1Q211 138.2 214 143.2Q217 138.2 220 143.2Q223 133.6 226 138.6Q229 133.1 232 138.1Q235 136.7 238 141.7Q241 135.8 244 140.8Q247 133.2 250 138.2Q253 136.1 256 141.1Q259 139.7 262 144.7Q265 137.2 268 142.2Q271 134.9 274 139.9Q277 137.5 280 142.5Q283 137.9 286 142.9Q289 133.5 292 138.5Q295 132.7 298 137.7Q301 136.6 304 141.6Q307 136.5 310 141.5Q313 133.8 316 138.8Q319 136.2 322 141.2Q325 139.9 328 144.9Q331 137.6 334 142.6Q337 134.5 340 139.5Q343 136.7 346 141.7Q349 137.6 352 142.6Q355 133.5 358 138.5Q361 132.5 364 137.5Q367 136.5 370 141.5Q373 137.3 376 142.3Q379 134.4 382 139.4Q385 136.1 388 141.1Q391 139.9 394 144.9Q397 137.7 400 142.7L400 149.7L196 151.3z\" fill=\"#1c2224\"/><rect x=\"196\" y=\"184\" width=\"204\" height=\"36\" fill=\"#162436\"/><path class=\"icsh\" d=\"M196 188h10\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh ics2\" d=\"M249 205h17\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh\" d=\"M302 192h10\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh ics2\" d=\"M355 209h17\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh\" d=\"M234 196h10\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh ics2\" d=\"M287 213h17\" stroke=\"#cfe6ff\" stroke-width=\"1.3\"/><path class=\"icsh\" d=\"M356 188h16M352 196h22M358 204h12M354 212h18\" stroke=\"#fff1d6\" stroke-width=\"1.5\" opacity=\".8\"/><rect x=\"330\" y=\"196\" width=\"70\" height=\"3\" fill=\"#6a5a48\"/><rect x=\"333\" y=\"199\" width=\"1.5\" height=\"5\" fill=\"#2a2420\"/><rect x=\"342\" y=\"199\" width=\"1.5\" height=\"5\" fill=\"#2a2420\"/><rect x=\"351\" y=\"199\" width=\"1.5\" height=\"5\" fill=\"#2a2420\"/><rect x=\"360\" y=\"199\" width=\"1.5\" height=\"5\" fill=\"#2a2420\"/><rect x=\"369\" y=\"199\" width=\"1.5\" height=\"5\" fill=\"#2a2420\"/><rect x=\"378\" y=\"199\" width=\"1.5\" height=\"5\" fill=\"#2a2420\"/><rect x=\"387\" y=\"199\" width=\"1.5\" height=\"5\" fill=\"#2a2420\"/><rect x=\"396\" y=\"199\" width=\"1.5\" height=\"5\" fill=\"#2a2420\"/><rect x=\"325.5\" y=\"186.1\" width=\"33\" height=\"9.9\" fill=\"#e8e0cc\"/><rect class=\"icpl\" x=\"328.1\" y=\"188.1\" width=\"3.3\" height=\"5\" fill=\"#ffd98a\"/><rect class=\"icpl icp2\" x=\"334.1\" y=\"188.1\" width=\"3.3\" height=\"5\" fill=\"#ffd98a\"/><rect class=\"icpl\" x=\"340\" y=\"188.1\" width=\"3.3\" height=\"5\" fill=\"#ffd98a\"/><rect class=\"icpl icp2\" x=\"346\" y=\"188.1\" width=\"3.3\" height=\"5\" fill=\"#ffd98a\"/><rect class=\"icpl\" x=\"351.9\" y=\"188.1\" width=\"3.3\" height=\"5\" fill=\"#ffd98a\"/><path d=\"M323.3 186.1L332.1 179.5L351.9 179.5L360.7 186.1z\" fill=\"#2f4a3c\"/><rect x=\"339.8\" y=\"175.7\" width=\"4.4\" height=\"3.9\" fill=\"#e8e0cc\"/><path d=\"M338.7 175.7l3.3 -3.3l3.3 3.3z\" fill=\"#2f4a3c\"/><g transform=\"translate(0 0)\"><g class=\"icdr\" style=\"--d:-230px;--t:16s;animation-delay:0s\"><g transform=\"translate(400 0)\"><path d=\"M0 206h22l-3 6h-17z\" fill=\"#b8402e\"/><rect x=\"5\" y=\"199\" width=\"9\" height=\"7\" fill=\"#e8e0cc\"/><rect x=\"8\" y=\"194\" width=\"3\" height=\"5\" fill=\"#222\"/><circle class=\"icbl\" cx=\"20\" cy=\"203\" r=\"1.4\" fill=\"#7cf29a\"/></g></g></g></g>";
  window.SCENES = { train, raceway, museum, sawmill, corner };
})();
