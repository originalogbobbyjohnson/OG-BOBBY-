/* Flatbush opening scenes for the Medhane game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes beam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:beam 3.2s ease-in-out infinite}.beam2{animation-delay:1.6s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s ease-out infinite}.note2{animation-delay:1s}.note3{animation-delay:2s}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,150px) rotate(220deg);opacity:0}}' +
    '.leaf{animation:fall 6s linear infinite}.leaf2{animation-delay:2s}.leaf3{animation-delay:4s}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.8}}' +
    '.glow{animation:glow 2.6s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(40px);opacity:0}}' +
    '.drip{animation:drip 2.4s ease-in infinite}.drip2{animation-delay:1.2s}' +
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
  const ICE = "#9fd8ff", AME = "#b48cff", MINT = "#7cf29a";

  /* 1. Winthrop St, underground on the Nostrand Av line: the 2 and the 5 */
  function train() {
    let tiles = "";
    for (let y = 0; y < 116; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#e9e4d8"/>';
    let cols = "";
    [34, 356].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#2f4a6b"/><rect x="' + (x - 8) + '" y="0" width="16" height="6" fill="#2f4a6b"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#0d1218"/>' + '<rect x="0" y="0" width="400" height="116" fill="#cfc8b8"/>' + tiles +
      /* mosaic band */
      '<rect x="0" y="22" width="400" height="12" fill="#7a2a2a"/><path d="M0 28h400" stroke="#d9b45a" stroke-width="2" stroke-dasharray="8 6"/>' +
      /* station sign */
      '<rect x="80" y="54" width="240" height="34" rx="4" fill="#111"/>' +
      '<rect x="80" y="54" width="240" height="4" fill="#fff"/>' +
      '<text x="94" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Winthrop St</text>' +
      bullet(270, 72, "2", "#ee352e") + bullet(298, 72, "5", "#00933c") +
      '<rect x="0" y="116" width="400" height="70" fill="#151c24"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#ee352e"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#dff1ff" opacity=".9"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "2", "#ee352e") +
      '</g>' + cols +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#20262e"/>' +
      '<g class="flk"><rect x="0" y="0" width="400" height="3" fill="#fff8d0" opacity=".6"/></g>' +
      tag("OWN PACE", 22, 242, 28, ICE, -4) + tag("MED", 300, 244, 32, AME, -8));
  }

  /* 2. Wingate Park on a summer night: the free concert stage, lights sweeping */
  function wingate() {
    let crowd = "";
    for (let i = 0; i < 22; i++) { const x = 6 + i * 18 + (i % 3) * 3, h = 16 + (i * 7) % 12; crowd += '<circle cx="' + x + '" cy="' + (238 - h) + '" r="7" fill="#07090d"/><rect x="' + (x - 9) + '" y="' + (240 - h) + '" width="18" height="30" rx="7" fill="#07090d"/>'; }
    let bldg = "";
    [[0, 90, 60], [62, 110, 40], [300, 96, 50], [352, 80, 48]].forEach(([x, y, w]) => {
      bldg += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="#1c2233"/>';
      for (let yy = y + 8; yy < 190; yy += 12) for (let xx = x + 6; xx < x + w - 6; xx += 11) bldg += '<rect x="' + xx + '" y="' + yy + '" width="5" height="6" fill="' + (((xx + yy) % 4) ? "#2a3248" : "#ffd98a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(22) + bldg +
      /* the band shell */
      '<path d="M110 186V96q90-56 180 0v90z" fill="#e8e4dc" stroke="#9aa1ab" stroke-width="2"/>' +
      '<path d="M126 186v-78q74-44 148 0v78z" fill="#1a1230"/>' +
      '<path d="M140 120q60-34 120 0M152 136q48-26 96 0" stroke="#3a2a5a" stroke-width="3" fill="none"/>' +
      '<rect x="100" y="182" width="200" height="12" fill="#5a5f68"/>' +
      /* light beams */
      '<g opacity=".35"><path class="beam" d="M150 104l-30 90h60z" fill="' + AME + '"/><path class="beam beam2" d="M250 104l-30 90h60z" fill="' + ICE + '"/></g>' +
      '<circle cx="150" cy="104" r="5" fill="#fff"/><circle cx="250" cy="104" r="5" fill="#fff"/>' +
      /* mic stand on stage */
      '<path d="M200 182v-34" stroke="#111" stroke-width="2"/><circle cx="200" cy="146" r="4" fill="#111"/>' +
      /* notes floating up */
      '<text class="note" x="168" y="150" font-size="18" fill="' + MINT + '">&#9834;</text><text class="note note2" x="226" y="140" font-size="18" fill="' + AME + '">&#9835;</text><text class="note note3" x="196" y="128" font-size="16" fill="' + ICE + '">&#9834;</text>' +
      /* banner */
      '<rect x="120" y="14" width="160" height="30" rx="3" fill="#123a2a" stroke="' + MINT + '" stroke-width="2"/>' +
      '<text x="200" y="35" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="2" fill="#fff">WINGATE PARK</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#14321f"/>' + crowd,
      sky("g2", "#0a0f22", "#3a2a5a"));
  }

  /* 3. Ebbets Field: the old ballpark's brick rotunda on Bedford Avenue, lights still glowing */
  function ebbets() {
    let arches = "";
    for (let i = 0; i < 7; i++) { const x = 66 + i * 40; arches += '<path d="M' + x + ' 190v-30a14 14 0 0 1 28 0v30z" fill="#2a1a14" stroke="#e9dcc0" stroke-width="3"/>'; }
    let upper = "";
    for (let i = 0; i < 9; i++) { const x = 62 + i * 31; upper += '<path d="M' + x + ' 130v-26a9 9 0 0 1 18 0v26z" fill="#ffe1a0" opacity=".85" stroke="#e9dcc0" stroke-width="2"/>'; }
    const tower = (x) => {
      let bulbs = "";
      for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) bulbs += '<circle cx="' + (x - 16 + c * 8) + '" cy="' + (18 + r * 7) + '" r="2.6" fill="#fff8d0"/>';
      return '<rect x="' + (x - 2) + '" y="40" width="4" height="40" fill="#3a3f47"/><rect x="' + (x - 22) + '" y="12" width="44" height="24" fill="#3a3f47"/>' + bulbs +
        '<ellipse class="glow" cx="' + x + '" cy="24" rx="40" ry="20" fill="#fff8d0" opacity=".35"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(18) + tower(56) + tower(344) +
      /* brick rotunda */
      '<rect x="48" y="82" width="304" height="112" fill="#8c3a2a"/>' +
      (function () { let b = ""; for (let y = 86; y < 192; y += 8) b += '<path d="M48 ' + y + 'h304" stroke="#7a3022" stroke-width="1"/>'; return b; })() +
      '<rect x="44" y="76" width="312" height="8" fill="#e9dcc0"/>' + upper +
      '<rect x="48" y="136" width="304" height="6" fill="#e9dcc0"/>' +
      '<rect x="120" y="140" width="160" height="0" fill="none"/>' + arches +
      /* name over the entrance */
      '<rect x="128" y="54" width="144" height="24" fill="#e9dcc0" stroke="#b9a37a" stroke-width="2"/>' +
      '<text x="200" y="72" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="1.5" fill="#123a5c">EBBETS FIELD</text>' +
      '<text class="note" x="300" y="70" font-size="16" fill="' + ICE + '">&#9835;</text><text class="note note2" x="92" y="64" font-size="16" fill="' + AME + '">&#9834;</text>' +
      '<rect x="0" y="194" width="400" height="66" fill="#22201e"/><rect x="0" y="194" width="400" height="8" fill="#8d8a84"/>' +
      '<text x="200" y="232" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="4" fill="#8d939b">BEDFORD AV · FLATBUSH · 1913</text>',
      sky("g3", "#0b1626", "#2c3f66"));
  }

  /* 4. Lefferts Historic House: the old Flatbush farmhouse, white shingles and sweeping roof, at amethyst morning */
  function lefferts() {
    let shingles = "";
    for (let y = 132; y < 200; y += 6) shingles += '<path d="M96 ' + y + 'h208" stroke="#d6d2c8" stroke-width="1"/>';
    const win = (x, y) => '<rect x="' + (x - 14) + '" y="' + y + '" width="8" height="26" fill="#1f4a32"/><rect x="' + (x + 6) + '" y="' + y + '" width="8" height="26" fill="#1f4a32"/>' +
      '<rect x="' + (x - 6) + '" y="' + y + '" width="12" height="26" fill="#bcd6e8" stroke="#fff" stroke-width="1.5"/><path d="M' + x + ' ' + y + 'v26M' + (x - 6) + ' ' + (y + 13) + 'h12" stroke="#fff" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="320" cy="70" r="22" fill="#ffe1c8" opacity=".9"/>' +
      /* park trees */
      '<circle cx="30" cy="120" r="40" fill="#2f5a3e"/><circle cx="78" cy="138" r="28" fill="#3a6b48"/><circle cx="372" cy="126" r="38" fill="#2f5a3e"/>' +
      /* the house: gambrel roof with flared eaves, white shingle walls */
      '<path d="M80 128q20-4 34-34l26-26h120l26 26q14 30 34 34z" fill="#4a4f57" stroke="#2a2d33" stroke-width="2"/>' +
      '<rect x="176" y="50" width="12" height="24" fill="#8c3a2a"/><rect x="214" y="50" width="12" height="24" fill="#8c3a2a"/>' +
      '<rect x="160" y="80" width="20" height="18" fill="#f4f1ea" stroke="#2a2d33" stroke-width="1.5"/><rect x="220" y="80" width="20" height="18" fill="#f4f1ea" stroke="#2a2d33" stroke-width="1.5"/>' +
      '<rect x="96" y="128" width="208" height="72" fill="#f4f1ea"/>' + shingles +
      win(124, 146) + win(166, 146) + win(276, 146) +
      '<rect x="204" y="150" width="22" height="50" fill="#1f4a32"/><circle cx="221" cy="176" r="1.6" fill="#d9b45a"/>' +
      /* porch columns under the eave */
      '<path d="M100 128v72M150 128v72M250 128v72M300 128v72" stroke="#fff" stroke-width="4"/>' +
      '<rect x="88" y="200" width="224" height="6" fill="#c9c4b8"/>' +
      /* garden + path */
      '<rect x="0" y="206" width="400" height="54" fill="#3f7a46"/><path d="M200 206l-24 54h48z" fill="#c9b48a"/>' +
      '<circle cx="110" cy="214" r="5" fill="' + AME + '"/><circle cx="124" cy="218" r="5" fill="#ffd23f"/><circle cx="286" cy="214" r="5" fill="' + AME + '"/><circle cx="300" cy="218" r="5" fill="#ff8aa8"/>' +
      '<rect x="14" y="226" width="104" height="20" rx="3" fill="#123a2a"/><text x="66" y="240" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing=".5" fill="#fff">LEFFERTS HOUSE</text>' +
      /* leaves drifting down */
      '<path class="leaf" d="M60 90q6-6 10 0q-4 6-10 0z" fill="#e8a23a"/><path class="leaf leaf2" d="M360 84q6-6 10 0q-4 6-10 0z" fill="#d0602a"/><path class="leaf leaf3" d="M340 110q6-6 10 0q-4 6-10 0z" fill="#e8c23a"/>',
      sky("g4", "#3a2a6b", "#e8b8c8"));
  }

  /* 5. Winthrop Street and Nostrand Avenue: subway globes, street signs, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 10 : 20; x < 222; x += 30) bricks += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#3a3a52"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(20) +
      '<rect x="20" y="60" width="230" height="160" fill="#2a2a3e"/>' + bricks +
      tag("MEDHANE", 30, 128, 36, ICE, -7) + tag("COLD WATER", 40, 176, 26, AME, -3) + tag("FLATBUSH", 120, 208, 20, MINT, -8) +
      /* water drips off the tag */
      '<path class="drip" d="M90 132v6" stroke="' + ICE + '" stroke-width="3" stroke-linecap="round"/><path class="drip drip2" d="M160 128v6" stroke="' + ICE + '" stroke-width="3" stroke-linecap="round"/>' +
      /* subway entrance globes */
      '<rect x="356" y="150" width="4" height="70" fill="#1d2329"/><circle class="flk flk2" cx="358" cy="146" r="8" fill="#3fd17a"/><circle cx="358" cy="146" r="8" fill="none" stroke="#1d2329" stroke-width="2"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Winthrop St</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Nostrand Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0b1626", "#2a2a52"));
  }

  window.SCENES = { train, wingate, ebbets, lefferts, corner };
})();
