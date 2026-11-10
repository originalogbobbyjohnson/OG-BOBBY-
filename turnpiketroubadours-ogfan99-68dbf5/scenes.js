/* turnpiketroubadours scenes (Regions: More of the South / Genres: country; Tahlequah, Oklahoma - formed in Stillwater, based in Tahlequah). CSS classes prefixed tpx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const AMBER = "#e8a13a", DIRT = "#b5462f", TEAL = "#5fa8a0", CREAM = "#f4ead6";
  const css = '<style>' +
    '@keyframes tpxcloud{0%{transform:translateX(0)}100%{transform:translateX(44px)}}.tpx-cl{animation:tpxcloud 15s ease-in-out infinite alternate}' +
    '@keyframes tpxfloat{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.tpx-fl{animation:tpxfloat 14s linear infinite}.tpx-fl2{animation-delay:-5s}.tpx-fl3{animation-delay:-9.5s}' +
    '@keyframes tpxbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.tpx-bob{animation:tpxbob 1.4s ease-in-out infinite}' +
    '@keyframes tpxripple{0%{transform:translateX(0);opacity:.6}100%{transform:translateX(30px);opacity:0}}.tpx-rp{animation:tpxripple 2.6s linear infinite}.tpx-rp2{animation-delay:-1.3s}' +
    '@keyframes tpxblink{0%,100%{opacity:.3}50%{opacity:1}}.tpx-bl{animation:tpxblink 1.4s ease-in-out infinite}.tpx-bl2{animation-delay:-.7s}' +
    '@keyframes tpxspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.tpx-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tpxspin 6s linear infinite}' +
    '@keyframes tpxbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.tpx-bm{transform-box:fill-box;transform-origin:50% 0%;animation:tpxbeam 3.2s ease-in-out infinite}.tpx-bm2{animation-delay:-1.6s}' +
    '@keyframes tpxsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.tpx-sw{transform-box:fill-box;transform-origin:50% 100%;animation:tpxsway 1s ease-in-out infinite}.tpx-sw2{animation-delay:-.5s}' +
    '@keyframes tpxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tpx-sp{animation:tpxspray 1.4s ease-out infinite}.tpx-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const clouds = () => '<g class="tpx-cl"><ellipse cx="70" cy="30" rx="38" ry="9" fill="#fff" opacity=".75"/><ellipse cx="102" cy="24" rx="20" ry="7" fill="#fff" opacity=".7"/><ellipse cx="270" cy="22" rx="32" ry="8" fill="#fff" opacity=".65"/></g>';
  const oak = (x, y, s, c) => '<rect x="' + (x - 3 * s) + '" y="' + (y - 14 * s) + '" width="' + (6 * s) + '" height="' + (14 * s) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - 24 * s) + '" r="' + (14 * s) + '" fill="' + c + '"/><circle cx="' + (x - 10 * s) + '" cy="' + (y - 18 * s) + '" r="' + (9 * s) + '" fill="' + c + '"/><circle cx="' + (x + 10 * s) + '" cy="' + (y - 18 * s) + '" r="' + (9 * s) + '" fill="' + c + '"/>';
  const canoe = (c) => '<g class="tpx-bob"><path d="M0 0q30 10 60 0l-4 6q-26 6 -52 0z" fill="' + c + '" stroke="#3a2a18" stroke-width="1"/><circle cx="18" cy="-8" r="4" fill="#e8c8a0"/><rect x="15" y="-5" width="7" height="6" fill="#2f6ab0"/><circle cx="42" cy="-8" r="4" fill="#d8a878"/><rect x="39" y="-5" width="7" height="6" fill="#e8a13a"/><path d="M30 -10l16 16" stroke="#6b4a2a" stroke-width="1.6"/></g>';
  /* the old red-brick Cherokee National Capitol on the Tahlequah square: two stories, white trim, white cupola */
  const capitol = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="0" y="-70" width="120" height="70" fill="#a8432e" stroke="#5a1e14" stroke-width="1.5"/><path d="M-6 -70l66 -22l66 22z" fill="#5a3a32"/>' +
    '<rect x="50" y="-110" width="20" height="22" fill="' + CREAM + '" stroke="#5a5a5a" stroke-width="1"/><path d="M47 -110l13 -12l13 12z" fill="#4a4a4a"/>' +
    [10, 32, 76, 98].map(wx => '<rect x="' + wx + '" y="-62" width="12" height="18" fill="#2f3a4a" stroke="#fff" stroke-width="1.5"/><rect x="' + wx + '" y="-34" width="12" height="18" fill="#2f3a4a" stroke="#fff" stroke-width="1.5"/>').join("") +
    '<rect x="52" y="-34" width="16" height="34" fill="#4a2a1a" stroke="#fff" stroke-width="1.5"/><path d="M48 -38h24l-12 -8z" fill="#fff"/></g>';

  /* 1. Cherokee Nation Transit commuter bus pulling in at the NSU stop in Tahlequah, the old Seminary Hall tower behind */
  function tpxbus() {
    return svg(
      '<rect width="400" height="260" fill="url(#tpx1)"/>' + clouds() +
      oak(30, 150, 1.3, "#3f7a3a") + oak(380, 150, 1.4, "#3f7a3a") +
      /* Seminary Hall: red brick with a pointed central tower */
      '<rect x="120" y="96" width="170" height="60" fill="#a8432e" stroke="#5a1e14" stroke-width="1.5"/><rect x="186" y="56" width="38" height="100" fill="#b24c34" stroke="#5a1e14" stroke-width="1.5"/><path d="M182 56l23 -34l23 34z" fill="#4a4a4a"/>' +
      [130, 150, 166, 238, 254, 272].map(x => '<rect x="' + x + '" y="108" width="10" height="16" fill="#2f3a4a"/><rect x="' + x + '" y="132" width="10" height="16" fill="#2f3a4a"/>').join("") +
      '<rect x="196" y="70" width="18" height="18" rx="9" fill="' + CREAM + '"/><path d="M205 79v-6M205 79h4" stroke="#333" stroke-width="1.4" class="tpx-spin"/>' +
      '<rect x="0" y="156" width="400" height="16" fill="#6f9a4a"/><rect x="0" y="172" width="400" height="10" fill="#c9c3b6"/><rect x="0" y="182" width="400" height="78" fill="#4a4744"/>' +
      '<path d="M0 224h400" stroke="#f2d04a" stroke-width="3" stroke-dasharray="20 14"/>' +
      /* the bus (anim-train slides it in) */
      '<g class="anim-train">' +
        '<rect x="40" y="146" width="200" height="60" rx="8" fill="#f4f1ea" stroke="#333" stroke-width="2"/>' +
        '<rect x="40" y="188" width="200" height="8" fill="' + TEAL + '"/><rect x="40" y="182" width="200" height="4" fill="' + DIRT + '"/>' +
        [54, 88, 122, 156].map(x => '<rect x="' + x + '" y="156" width="28" height="22" rx="2" fill="#9fc3d8"/>').join("") +
        '<rect x="192" y="156" width="40" height="32" rx="2" fill="#9fc3d8" stroke="#333" stroke-width="1"/>' +
        '<rect x="196" y="148" width="40" height="7" rx="1" fill="#111"/><text x="216" y="154" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb02e" class="tpx-bl">F LINE</text>' +
        '<circle cx="80" cy="208" r="10" fill="#111"/><circle cx="80" cy="208" r="4" fill="#888"/><circle cx="202" cy="208" r="10" fill="#111"/><circle cx="202" cy="208" r="4" fill="#888"/>' +
      '</g>' +
      /* black stop sign */
      '<rect x="326" y="76" width="4" height="106" fill="#333"/>' +
      '<rect x="262" y="30" width="134" height="50" rx="4" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="329" y="51" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">NSU</text>' +
      '<text x="329" y="62" text-anchor="middle" ' + font + ' font-size="7" fill="' + AMBER + '" letter-spacing="1">TAHLEQUAH, OK</text>' +
      '<circle cx="306" cy="71" r="6" fill="' + DIRT + '"/><text x="306" y="74" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">F</text>' +
      '<circle cx="322" cy="71" r="6" fill="' + TEAL + '"/><text x="322" y="74" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">I</text>' +
      '<text x="336" y="74" ' + font + ' font-size="6" fill="#fff">CN TRANSIT</text>',
      sky("tpx1", "#4f8fc4", "#d6ecf6"));
  }

  /* 2. Floating the Illinois River outside Tahlequah: green-clear water, gravel bars, wooded bluffs, canoes drifting by */
  function tpxriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#tpx2)"/>' + clouds() +
      '<path d="M0 120q40 -50 90 -40t70 -10t80 10t70 -20t90 30V150H0z" fill="#3a6a34"/>' +
      '<path d="M220 150V96q30 -20 70 -10q20 10 30 0v64z" fill="#9a8a72"/><path d="M230 110h60M234 124h70M228 138h80" stroke="#7a6a56" stroke-width="2"/>' +
      oak(40, 140, 1, "#2f5a2a") + oak(80, 136, 1.2, "#3a6a34") + oak(150, 140, 1.1, "#2f5a2a") + oak(360, 142, 1.2, "#3a6a34") +
      '<path d="M0 150h400v30H0z" fill="#c9bfa8"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#4f9a8a"/><rect x="0" y="176" width="400" height="6" fill="#7ab8a8"/>' +
      [[40, 200], [150, 230], [280, 210], [340, 244]].map(p => '<path class="tpx-rp" d="M' + p[0] + ' ' + p[1] + 'h22" stroke="#cfeee6" stroke-width="2"/><path class="tpx-rp tpx-rp2" d="M' + (p[0] + 30) + ' ' + (p[1] + 8) + 'h16" stroke="#cfeee6" stroke-width="2"/>').join("") +
      '<g transform="translate(0 206)"><g class="tpx-fl">' + canoe("#c8202a") + '</g></g>' +
      '<g transform="translate(0 236)"><g class="tpx-fl tpx-fl2">' + canoe("#2f8a4a") + '</g></g>' +
      '<g transform="translate(0 192)"><g class="tpx-fl tpx-fl3">' + canoe(AMBER) + '</g></g>' +
      '<rect x="110" y="8" width="180" height="22" rx="3" fill="#000" opacity=".45"/><text x="200" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">ILLINOIS RIVER</text>',
      sky("tpx2", "#3f86c4", "#e0f0f8"));
  }

  /* 3. Cain's Ballroom, Tulsa: the long brick hall with the big neon marquee sign and the round dance floor inside (their New Year's run) */
  function tpxcains() {
    return svg(
      '<rect width="400" height="260" fill="url(#tpx3)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (8 + (i * 29) % 70) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      /* brick building */
      '<rect x="20" y="96" width="360" height="110" fill="#8a3a28" stroke="#4a1a10" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M20 ' + (104 + r * 10) + 'h360" stroke="#6e2a1c" stroke-width="1"/>').join("") +
      [44, 92, 286, 334].map(x => '<rect x="' + x + '" y="150" width="24" height="56" fill="#2a1a12" stroke="#d8c8a0" stroke-width="1.5"/>').join("") +
      /* tall vertical neon sign */
      '<rect x="182" y="40" width="36" height="110" rx="4" fill="#1a1a1a" stroke="#d62828" stroke-width="2"/>' +
      ['C', 'A', 'I', 'N', "'", 'S'].map((c, i) => '<text x="200" y="' + (60 + i * 16) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#ff3b3b" class="tpx-bl' + (i % 2 ? ' tpx-bl2' : '') + '">' + c + '</text>').join("") +
      /* marquee */
      '<rect x="120" y="150" width="160" height="34" fill="#f4ead6" stroke="#333" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (126 + i * 10) + '" cy="153" r="2" fill="' + AMBER + '" class="tpx-bl' + (i % 2 ? ' tpx-bl2' : '') + '"/>').join("") +
      '<text x="200" y="168" text-anchor="middle" ' + font + ' font-size="9" fill="#111">BALLROOM</text><text x="200" y="179" text-anchor="middle" ' + font + ' font-size="8" fill="' + DIRT + '">TONIGHT: TURNPIKE</text>' +
      '<rect x="164" y="184" width="72" height="22" fill="#3a2418"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#5a5552"/><rect x="0" y="206" width="400" height="8" fill="#c9c3b6"/>' +
      /* fans in line */
      Array.from({ length: 9 }, (_, i) => '<g class="tpx-sw' + (i % 2 ? ' tpx-sw2' : '') + '"><rect x="' + (30 + i * 40) + '" y="226" width="12" height="22" rx="3" fill="' + ['#2f4a8a', '#d62828', '#e8a13a', '#3d7a3a'][i % 4] + '"/><circle cx="' + (36 + i * 40) + '" cy="220" r="6" fill="#3a2a1a"/></g>').join(""),
      sky("tpx3", "#101a3a", "#3a2a5a"));
  }

  /* 4. Medicine Stone: their own festival on the Illinois River bank near Tahlequah, a stage under the lights, fiddle on the screen */
  function tpxstone() {
    return svg(
      '<rect width="400" height="260" fill="url(#tpx4)"/>' +
      '<path d="M0 140q60 -40 140 -30t130 -10t130 20V160H0z" fill="#1f3a26"/>' +
      '<path class="tpx-bm" d="M150 70l-40 120h40z" fill="' + AMBER + '" opacity=".25"/><path class="tpx-bm tpx-bm2" d="M250 70l40 120h-40z" fill="' + TEAL + '" opacity=".25"/>' +
      /* stage */
      '<rect x="110" y="60" width="180" height="10" fill="#333"/><rect x="110" y="60" width="8" height="100" fill="#333"/><rect x="282" y="60" width="8" height="100" fill="#333"/>' +
      [130, 160, 200, 240, 270].map(x => '<circle cx="' + x + '" cy="74" r="4" fill="#fff6c8" class="tpx-bl"/>').join("") +
      '<rect x="118" y="80" width="164" height="70" fill="#2a1e1a"/><rect x="104" y="150" width="192" height="12" fill="#5a4030"/>' +
      /* fiddle on the backdrop */
      '<g transform="translate(200 116) rotate(-30)"><path d="M-8 -26q-8 6 -2 12q-8 6 0 14q-6 8 2 14h16q8 -6 2 -14q8 -8 0 -14q6 -6 -2 -12z" fill="' + DIRT + '" stroke="' + AMBER + '" stroke-width="1.5"/><rect x="-2" y="-46" width="4" height="22" fill="#2a1a10"/><path d="M-3 -10h6" stroke="#111" stroke-width="2"/></g>' +
      '<path d="M150 90l90 50" stroke="#d8c8a0" stroke-width="1.5"/>' +
      /* river and crowd */
      '<rect x="0" y="162" width="400" height="98" fill="#24302a"/><path d="M300 162q40 30 100 40V162z" fill="#2f5a5a"/>' +
      Array.from({ length: 22 }, (_, i) => '<g class="tpx-sw' + (i % 2 ? ' tpx-sw2' : '') + '"><circle cx="' + (12 + i * 18) + '" cy="' + (200 + (i % 3) * 14) + '" r="7" fill="#141414"/><rect x="' + (6 + i * 18) + '" y="' + (206 + (i % 3) * 14) + '" width="12" height="30" fill="#141414"/></g>').join("") +
      '<rect x="120" y="8" width="160" height="22" rx="3" fill="#000" opacity=".5"/><text x="200" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="' + AMBER + '" letter-spacing="2">MEDICINE STONE</text>',
      sky("tpx4", "#0e1a30", "#4a3a5a"));
  }

  /* 5. Their corner: Muskogee Ave and Downing St in downtown Tahlequah, the name tagged on a red-dirt wall, the old Cherokee National Capitol behind */
  function tpxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tpx5)"/>' + clouds() +
      oak(150, 140, 1.4, "#3f7a3a") + capitol(170, 150, 1.05) + oak(340, 140, 1.3, "#3f7a3a") +
      '<rect x="0" y="150" width="400" height="80" fill="' + DIRT + '"/>' +
      Array.from({ length: 8 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2 ? 15 : 0) - 15) + '" y="' + (150 + r * 10) + '" width="28" height="8" fill="#c45a3e" opacity=".5"/>').join("")).join("") +
      tag("TURNPIKE", 20, 196, 34, AMBER, -5) +
      tag("TROUBADOURS", 120, 222, 22, CREAM, -4) +
      '<g class="tpx-sp"><circle cx="190" cy="178" r="3" fill="' + AMBER + '" opacity=".8"/></g><g class="tpx-sp tpx-sp2"><circle cx="198" cy="172" r="2.4" fill="' + AMBER + '" opacity=".7"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#c9c3b6"/>' +
      '<rect x="348" y="78" width="5" height="162" fill="#6e737b"/>' +
      sign(286, 64, 112, "MUSKOGEE AVE") + sign(300, 90, 98, "DOWNING ST"),
      sky("tpx5", "#4f8fc4", "#e8f2f8"));
  }

  window.SCENES = { tpxbus, tpxriver, tpxcains, tpxstone, tpxcorner };
})();
