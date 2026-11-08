/* 21savage scenes (Regions tab: Atlanta; Zone 6 / Glenwood, East Atlanta + DeKalb). CSS classes and ids prefixed sv- (the page's own anim-train is kept).
   1 MARTA Route 22 (Glenwood) rolling down Glenwood Ave SE through East Atlanta Village, Zone 6: white MARTA bus with blue + orange bands, the stop flag, low brick storefronts.
   2 Plaistow, Newham, East London (born at Newham University Hospital, moved to Atlanta at seven): yellow-brick terraces, a red double-decker, a London street sign, the rain.
   3 The 285 Flea Mart, 4525 Glenwood Rd by I-285 Exit 44 (where he bought clothes as a kid; his Issa Back 2 School Drive was held here): long low market, racks out front, pennants.
   4 Issa Back 2 School Drive (every August since 2016, Glenwood Rd): the tent, backpacks stacked, notebooks, a barber chair for free cuts, balloons.
   5 Glenwood Rd at I-285 Exit 44: green signs, 21 SAVAGE tagged with SLAUGHTER GANG and STRAIGHT UP, the Perimeter overpass and downtown's skyline at dusk behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes svbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.sv-bus{animation:svbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes svdd{from{transform:translateX(-200px)}to{transform:translateX(460px)}}.sv-dd{animation:svdd 9s linear infinite;animation-delay:-3.6s}' +
    '@keyframes svrain{from{transform:translateY(-30px)}to{transform:translateY(30px)}}.sv-rain{animation:svrain .6s linear infinite}' +
    '@keyframes svglow{0%,100%{opacity:.45}50%{opacity:1}}.sv-glow{animation:svglow 2.2s ease-in-out infinite}.sv-g2{animation-delay:-1.1s}' +
    '@keyframes svflag{0%,100%{transform:skewX(0)}50%{transform:skewX(-14deg)}}.sv-flag{transform-box:fill-box;transform-origin:50% 0%;animation:svflag 1.3s ease-in-out infinite}.sv-f2{animation-delay:-.65s}' +
    '@keyframes svbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.sv-bob{animation:svbob 2.4s ease-in-out infinite}.sv-bob2{animation-delay:-1.2s}' +
    '@keyframes svcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.sv-car{animation:svcar 6s linear infinite}.sv-car2{animation-delay:-3s}' +
    '@keyframes svsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sv-sp{animation:svsp 1.4s ease-out infinite}.sv-sp2{animation-delay:.45s}' +
    '@keyframes svspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sv-spin{transform-box:fill-box;transform-origin:50% 50%;animation:svspin 2.6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const RED = "#e2382f", GOLD = "#f5c542", SAND = "#e8d3a8", BUS = "#1f4e79", ORANGE = "#f7941d";
  /* interstate shield (plain red/blue shape, number only) */
  const shield = (cx, cy, s, num) => '<g transform="translate(' + cx + ' ' + cy + ') scale(' + s + ')"><path d="M-20 -18q20 -8 40 0q4 22 -20 40q-24 -18 -20 -40z" fill="#fff"/>' +
    '<path d="M-17 -15q17 -6 34 0q4 18 -17 33q-21 -15 -17 -33z" fill="#1f4aa8"/><path d="M-17 -15q17 -6 34 0l-1 6h-32z" fill="#c8102e"/>' +
    '<text x="0" y="12" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + num + '</text></g>';

  /* 1. MARTA Route 22 Glenwood down Glenwood Ave SE in East Atlanta Village */
  function s2bus() {
    const bus = '<g class="sv-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="92" height="11" rx="2" fill="#111"/><text x="90" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">22 GLENWOOD</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    const shop = (x, w, h, wall, awn) => '<rect x="' + x + '" y="' + (142 - h) + '" width="' + w + '" height="' + h + '" fill="' + wall + '"/>' +
      '<rect x="' + x + '" y="' + (142 - h) + '" width="' + w + '" height="5" fill="#3a2a22"/>' +
      '<rect x="' + (x + 6) + '" y="' + (142 - h + 12) + '" width="' + (w - 12) + '" height="12" fill="#2a3442"/>' +
      '<path d="M' + (x + 4) + ' 112h' + (w - 8) + 'l-4 8h-' + (w - 16) + 'z" fill="' + awn + '"/>' +
      '<rect x="' + (x + 8) + '" y="120" width="' + (w - 16) + '" height="22" fill="#33404c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv1)"/>' +
      '<circle cx="70" cy="38" r="17" fill="#ffe9a8" opacity=".85"/>' +
      '<g fill="#3c6b3a"><ellipse cx="380" cy="96" rx="30" ry="22"/><ellipse cx="14" cy="100" rx="26" ry="18"/></g>' +
      shop(8, 70, 62, "#9c4a34", RED) + shop(82, 64, 52, "#c7a77a", "#2f6b4a") + shop(150, 80, 70, "#7a3a2c", "#1f4e79") + shop(234, 60, 56, "#b8834e", GOLD) +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="316" y="62" width="46" height="40" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="96" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">22</text>' +
      '<rect x="282" y="106" width="114" height="14" rx="2" fill="#111"/><text x="339" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">GLENWOOD AVE · ZONE 6</text>',
      sky("sv1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. Plaistow, Newham, East London: yellow-brick terraces, a red double-decker, rain */
  function s2london() {
    const terrace = (x) => '<g transform="translate(' + x + ' 0)"><rect x="0" y="70" width="58" height="80" fill="#c9a86a"/>' +
      Array.from({ length: 7 }, (_, r) => '<path d="M0 ' + (78 + r * 10) + 'h58" stroke="#b08f55" stroke-width="1"/>').join("") +
      '<path d="M-2 70l31 -18l31 18z" fill="#5a4a48"/><rect x="40" y="44" width="7" height="14" fill="#7a4a3a"/>' +
      '<rect x="8" y="80" width="16" height="22" fill="#2a3442" stroke="#f2efe6" stroke-width="2.5"/><rect x="34" y="80" width="16" height="22" fill="#2a3442" stroke="#f2efe6" stroke-width="2.5"/>' +
      '<rect x="6" y="112" width="20" height="26" fill="#2a3442" stroke="#f2efe6" stroke-width="2.5"/><rect x="34" y="112" width="14" height="38" fill="' + (x % 2 ? "#1f3f6b" : "#6b1f2a") + '"/>' +
      '<rect x="0" y="146" width="58" height="4" fill="#8a8a86"/></g>';
    const dd = '<g class="sv-dd"><rect x="0" y="118" width="150" height="88" rx="8" fill="#d2231e"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (10 + i * 28) + '" y="126" width="22" height="22" rx="3" fill="#24323e"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (40 + i * 27) + '" y="160" width="21" height="22" rx="3" fill="#24323e"/>').join("") +
      '<rect x="8" y="158" width="24" height="40" rx="2" fill="#24323e"/><rect x="0" y="152" width="150" height="4" fill="#f2c200"/>' +
      '<rect x="98" y="120" width="48" height="9" rx="1" fill="#111"/><text x="122" y="127.4" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb84a">PLAISTOW</text>' +
      '<circle cx="32" cy="206" r="11" fill="#222"/><circle cx="32" cy="206" r="4.5" fill="#9aa1a8"/><circle cx="120" cy="206" r="11" fill="#222"/><circle cx="120" cy="206" r="4.5" fill="#9aa1a8"/>' +
      '<circle cx="147" cy="194" r="3.5" fill="#fff6c2"/></g>';
    const rain = '<g class="sv-rain" stroke="#c9d6e6" stroke-width="1.2" opacity=".55">' +
      Array.from({ length: 40 }, (_, i) => '<path d="M' + ((i * 53) % 400) + ' ' + ((i * 71) % 230 - 20) + 'l-4 12"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv2)"/>' +
      '<g fill="#8a94a0" opacity=".7"><ellipse cx="90" cy="34" rx="60" ry="16"/><ellipse cx="290" cy="26" rx="80" ry="18"/></g>' +
      [0, 58, 116, 174, 232, 290, 348].map(terrace).join("") +
      '<rect x="0" y="150" width="400" height="14" fill="#a9a59c"/><rect x="0" y="164" width="400" height="96" fill="#3e4148"/><path d="M0 236h400" stroke="#f2efe6" stroke-width="2" stroke-dasharray="16 12"/>' +
      dd + rain +
      /* London street sign: white board, black letters, red district */
      '<rect x="248" y="170" width="4" height="40" fill="#222"/><rect x="306" y="170" width="4" height="40" fill="#222"/>' +
      '<rect x="234" y="146" width="92" height="28" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="280" y="160" text-anchor="middle" ' + font + ' font-size="10" fill="#111">PLAISTOW</text><text x="280" y="170.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#c8102e">NEWHAM · E13</text>',
      sky("sv2", "#6f7a88", "#c9ccd0"));
  }

  /* 3. The 285 Flea Mart on Glenwood Rd by I-285 Exit 44 */
  function s2flea() {
    const pen = (x, c, d) => '<path class="sv-flag' + (d ? " sv-f2" : "") + '" d="M' + x + ' 62l8 0l-4 12z" fill="' + c + '"/>';
    const rack = (x) => '<g transform="translate(' + x + ' 0)"><path d="M0 150h56M4 150v46M52 150v46" stroke="#9aa1a8" stroke-width="3"/>' +
      [RED, "#1f1f24", GOLD, "#f2efe6", "#2f6fd1"].map((c, i) => '<path d="M' + (6 + i * 10) + ' 152h9l2 6l-3 2v20h-8v-20l-3 -2z" fill="' + c + '" stroke="#111" stroke-width=".6"/>').join("") + '</g>';
    const sneaker = (x, y, c) => '<path d="M' + x + ' ' + y + 'q2 -10 12 -10l6 6q10 2 14 8v4h-32z" fill="' + c + '"/><rect x="' + x + '" y="' + (y + 6) + '" width="32" height="3" fill="#f2efe6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv3)"/>' +
      /* the Perimeter ramp behind */
      '<path d="M0 54l400 -16v14l-400 16z" fill="#a8a59e"/><path d="M0 68l400 -16" stroke="#7e7b74" stroke-width="2"/>' +
      '<g class="sv-car"><rect x="0" y="44" width="34" height="10" rx="3" fill="#2a2a32"/></g><g class="sv-car sv-car2"><rect x="0" y="40" width="40" height="12" rx="3" fill="#e2e2e6"/></g>' +
      /* the long low market building */
      '<rect x="20" y="74" width="360" height="124" fill="#ddd3c0"/><rect x="20" y="74" width="360" height="10" fill="#8a2f2a"/>' +
      '<rect x="98" y="88" width="204" height="30" rx="3" fill="#8a2f2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="110" text-anchor="middle" ' + font + ' font-size="19" fill="#fff">285 FLEA MART</text>' +
      '<path d="M20 62h360" stroke="#555" stroke-width="1"/>' +
      [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((x, i) => pen(x, [RED, GOLD, "#2f6fd1", "#2f9a5a"][i % 4], i % 2)).join("") +
      '<rect x="36" y="128" width="70" height="70" fill="#2a3442"/><rect x="164" y="128" width="72" height="70" fill="#2a3442"/><rect x="294" y="128" width="70" height="70" fill="#2a3442"/>' +
      '<g fill="' + GOLD + '"><circle cx="58" cy="150" r="8" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle cx="82" cy="150" r="8" fill="none" stroke="#e9e9f2" stroke-width="2"/></g>' +
      rack(170) + rack(300) +
      '<rect x="0" y="198" width="400" height="62" fill="#5a5a60"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (20 + i * 62) + ' 206v46" stroke="#f2efe6" stroke-width="2"/>').join("") +
      '<rect x="40" y="206" width="110" height="24" fill="#6e4a2a"/>' + sneaker(46, 204, "#f2efe6") + sneaker(84, 204, RED) + sneaker(118, 204, "#1f1f24") +
      shield(360, 34, 1, "285"),
      sky("sv3", "#8fc6ec", "#f2ead6"));
  }

  /* 4. Issa Back 2 School Drive: the tent, backpacks, notebooks, a barber chair, balloons */
  function s2drive() {
    const pack = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="0" width="26" height="30" rx="7" fill="' + c + '"/><rect x="5" y="14" width="16" height="12" rx="3" fill="#000" opacity=".22"/><path d="M8 0q5 -8 10 0" stroke="#222" stroke-width="2.5" fill="none"/></g>';
    const balloon = (x, y, c, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="11" ry="14" fill="' + c + '"/><path d="M' + x + ' ' + (y + 14) + 'q-4 20 2 40" stroke="#ddd" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv4)"/>' +
      '<circle cx="340" cy="40" r="18" fill="#fff3b0"/>' +
      /* shopping center behind */
      '<rect x="0" y="86" width="400" height="50" fill="#cfc4ae"/><rect x="0" y="82" width="400" height="6" fill="#8a7a62"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (10 + i * 50) + '" y="98" width="34" height="38" fill="#2a3442"/>').join("") +
      '<rect x="0" y="136" width="400" height="124" fill="#5e5e64"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (30 + i * 70) + ' 222v38" stroke="#f2efe6" stroke-width="2"/>').join("") +
      /* tent */
      '<path d="M60 108l140 -28l140 28z" fill="#f2efe6"/><path d="M60 108h280v12h-280z" fill="' + RED + '"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (60 + i * 28) + ' 120l14 10l14 -10z" fill="' + (i % 2 ? RED : "#f2efe6") + '"/>').join("") +
      '<rect x="62" y="120" width="4" height="96" fill="#9aa1a8"/><rect x="334" y="120" width="4" height="96" fill="#9aa1a8"/>' +
      '<rect x="112" y="131" width="176" height="19" rx="3" fill="#111"/><text x="200" y="144.5" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + GOLD + '">ISSA BACK 2 SCHOOL DRIVE</text>' +
      /* table with backpacks + notebooks */
      '<rect x="74" y="186" width="170" height="8" fill="#e9e4da"/><rect x="80" y="194" width="4" height="28" fill="#888"/><rect x="234" y="194" width="4" height="28" fill="#888"/>' +
      pack(80, 156, "#2f6fd1") + pack(110, 156, RED) + pack(140, 156, "#2f9a5a") + pack(170, 156, GOLD) + pack(200, 156, "#7b3fb0") +
      '<g transform="translate(96 176)"><rect x="0" y="0" width="22" height="8" fill="#f2efe6" stroke="#555"/><rect x="26" y="0" width="22" height="8" fill="#ffd2a0" stroke="#555"/><rect x="52" y="0" width="22" height="8" fill="#bfe3ff" stroke="#555"/><rect x="78" y="0" width="22" height="8" fill="#f2efe6" stroke="#555"/></g>' +
      /* barber chair */
      '<g transform="translate(270 150)"><rect x="6" y="0" width="34" height="34" rx="6" fill="#8a2f2a"/><rect x="0" y="30" width="46" height="12" rx="4" fill="#8a2f2a"/><rect x="20" y="42" width="6" height="20" fill="#bbb"/><ellipse cx="23" cy="64" rx="18" ry="4" fill="#999"/>' +
      '<rect x="54" y="-30" width="10" height="44" rx="3" fill="#f2efe6" stroke="#888" stroke-width="1"/><g class="sv-glow"><path d="M54 -24l10 -6M54 -14l10 -6M54 -4l10 -6M54 6l10 -6" stroke="' + RED + '" stroke-width="3"/><path d="M54 -19l10 -6M54 -9l10 -6M54 1l10 -6" stroke="#2f6fd1" stroke-width="2"/></g><circle cx="59" cy="-32" r="5" fill="#d9d9e0"/></g>' +
      balloon(40, 70, RED, "sv-bob") + balloon(358, 66, GOLD, "sv-bob sv-bob2") + balloon(26, 92, "#2f6fd1", "sv-bob sv-bob2") + balloon(374, 92, "#f2efe6", "sv-bob"),
      sky("sv4", "#79bdf0", "#e8f0f6"));
  }

  /* 5. Glenwood Rd at I-285 Exit 44: signs, the tags, the Perimeter overpass, downtown at dusk */
  function s2corner() {
    const city = '<g fill="#232634">' + [[110, 84, 22], [134, 66, 18], [154, 92, 26], [182, 54, 16], [200, 76, 24], [226, 88, 20], [248, 70, 18]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (120 - b[1]) + '"/>').join("") + '</g>' +
      '<path d="M182 54l8 -14l8 14z" fill="#232634"/><rect class="sv-glow" x="188" y="36" width="4" height="6" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="' + (i % 3 ? "" : "sv-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 37) % 30) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      city +
      /* the Perimeter overpass */
      '<rect x="0" y="104" width="400" height="16" fill="#8d8a84"/><rect x="0" y="100" width="400" height="5" fill="#b9b6ae"/><rect x="60" y="120" width="10" height="14" fill="#6e6b66"/><rect x="330" y="120" width="10" height="14" fill="#6e6b66"/>' +
      '<g class="sv-car"><rect x="0" y="92" width="36" height="9" rx="3" fill="#1a1a1e"/><circle cx="34" cy="96" r="1.6" fill="#fff6c2"/></g>' +
      /* the wall */
      '<rect x="0" y="134" width="400" height="90" fill="#4a4a52"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#3e3e46" stroke-width="1"/>').join("") +
      tag("SLAUGHTER GANG", 14, 158, 17, RED, -4) + tag("21 SAVAGE", 16, 204, 42, SAND, -5) + tag("STRAIGHT UP", 210, 160, 16, GOLD, -6) + tag("ZONE 6", 214, 216, 18, "#fff", -3) +
      '<g class="sv-sp"><circle cx="206" cy="178" r="3" fill="' + SAND + '" opacity=".7"/></g><g class="sv-sp sv-sp2"><circle cx="212" cy="172" r="2" fill="' + SAND + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="sv-car sv-car2"><rect x="0" y="232" width="70" height="16" rx="6" fill="#1a1a1e"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#2a2a32"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="78" width="6" height="146" fill="#2f2f2f"/>' + sign(300, 80, 100, "Glenwood Rd") +
      '<rect x="296" y="106" width="104" height="30" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="119" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">I-285 · EXIT 44</text><text x="348" y="130" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">THE PERIMETER</text>',
      sky("sv5", "#141a3a", "#e0864a"));
  }

  window.SCENES = { s2bus: s2bus, s2london: s2london, s2flea: s2flea, s2drive: s2drive, s2corner: s2corner };
})();
