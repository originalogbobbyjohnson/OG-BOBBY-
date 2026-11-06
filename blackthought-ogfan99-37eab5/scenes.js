/* blackthought scenes (Regions tab: Philadelphia; South Philly). Black Thought SOLO game. CSS classes prefixed bt- (the page's own anim-train is kept).
   1 The Route 29 bus pulling up to Morris St & Broad St ("Down at Broad and Morris posted at the 29 stop", Miracle): South Broad rowhouses, the stop flag, the white SEPTA bus with blue and red stripes.
   2 5th St and Passyunk Ave, summer 1992, where he and his drummer played on the sidewalk for tips: a drum kit and a mic stand on the pavement, sticks bouncing, coins dropping into the open case.
   3 Millersville University, where he studied journalism: the 1894 Old Library (Biemesderfer Center), red brick Romanesque with the octagonal center and conical roofs, a swan gliding on the campus pond.
   4 Graffiti Pier on the Delaware in Port Richmond, for the kid who tagged "DT" (Double T) all over the city: the concrete coal pier covered in paint, the river rippling, a fresh DT tag.
   5 S 6th St and Emily St ("The barbershop that used to be at 6th and Emily", Thank You): green signs, the barber pole spinning, BLACK THOUGHT tagged, the Walt Whitman Bridge behind at dusk. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes btglow{0%,100%{opacity:.45}50%{opacity:1}}.bt-glow{animation:btglow 2.6s ease-in-out infinite}.bt-glow2{animation-delay:-1.3s}' +
    '@keyframes btrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.bt-rip{animation:btrip 3s ease-in-out infinite}.bt-rip2{animation-delay:-1.5s}' +
    '@keyframes btcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bt-car{animation:btcar 8s linear infinite}' +
    '@keyframes btswan{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.bt-swan{animation:btswan 9s ease-in-out infinite}' +
    '@keyframes btstick{0%,100%{transform:rotate(0)}50%{transform:rotate(-22deg)}}.bt-stk{transform-box:fill-box;transform-origin:100% 100%;animation:btstick .5s ease-in-out infinite}.bt-stk2{animation-delay:-.25s}' +
    '@keyframes btcoin{0%{transform:translateY(-40px);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:translateY(0);opacity:0}}.bt-coin{animation:btcoin 1.8s ease-in infinite}.bt-coin2{animation-delay:-.6s}.bt-coin3{animation-delay:-1.2s}' +
    '@keyframes btnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(20px,-50px);opacity:0}}.bt-note{animation:btnote 2.4s ease-out infinite}.bt-note2{animation-delay:-.8s}.bt-note3{animation-delay:-1.6s}' +
    '@keyframes btpole{from{transform:translateY(0)}to{transform:translateY(-12px)}}.bt-pole{animation:btpole .9s linear infinite}' +
    '@keyframes btspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(10px,-24px);opacity:0}}.bt-sp{animation:btspray 1.3s ease-out infinite}.bt-sp2{animation-delay:-.45s}.bt-sp3{animation-delay:-.9s}' +
    '@keyframes btbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.bt-bird{animation:btbird 14s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bt-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const AQUA = "#7fe0d0", GOLD = "#f0c27a", BRICK = "#e86a4a", BUS = "#1f4e79";
  /* a South Philly rowhouse: brick front, white marble steps, cornice, two floors of windows */
  const row = (x, y, w, h, brick, trim, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + brick + '"/><rect x="' + (x - 2) + '" y="' + (y - 5) + '" width="' + (w + 4) + '" height="6" fill="' + trim + '"/>' +
    '<rect x="' + (x + 6) + '" y="' + (y + 8) + '" width="' + (w / 2 - 10) + '" height="16" fill="' + (lit ? "#ffd98a" : "#2b3440") + '" stroke="#f2efe6" stroke-width="1.5"/><rect x="' + (x + w / 2 + 4) + '" y="' + (y + 8) + '" width="' + (w / 2 - 10) + '" height="16" fill="#2b3440" stroke="#f2efe6" stroke-width="1.5"/>' +
    '<rect x="' + (x + 6) + '" y="' + (y + h - 30) + '" width="' + (w / 2 - 10) + '" height="18" fill="#2b3440" stroke="#f2efe6" stroke-width="1.5"/><rect x="' + (x + w / 2 + 6) + '" y="' + (y + h - 32) + '" width="12" height="32" fill="#5a2e22" stroke="#f2efe6" stroke-width="1.2"/>' +
    '<rect x="' + (x + w / 2 + 2) + '" y="' + (y + h) + '" width="20" height="4" fill="#f4f2ec"/><rect x="' + (x + w / 2) + '" y="' + (y + h + 4) + '" width="24" height="4" fill="#e6e3da"/>';

  /* 1. Route 29 at Morris St & Broad St: South Broad rowhouses, lamp posts, the SEPTA stop flag, the white bus with blue and red stripes sliding in */
  function btstation() {
    const bus = '<g class="anim-train"><rect x="30" y="128" width="300" height="78" rx="8" fill="#f4f6f8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (44 + i * 42) + '" y="140" width="34" height="28" rx="3" fill="#1f2830"/>').join("") +
      '<rect x="298" y="138" width="28" height="40" rx="3" fill="#1f2830"/><rect x="30" y="174" width="300" height="6" fill="' + BUS + '"/><rect x="30" y="182" width="300" height="4" fill="#c8102e"/>' +
      '<rect x="292" y="130" width="34" height="8" rx="2" fill="#141414"/><text x="309" y="137" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb12a">29</text>' +
      '<circle cx="80" cy="206" r="11" fill="#1a1a1a"/><circle cx="80" cy="206" r="5" fill="#9a9a9a"/><circle cx="280" cy="206" r="11" fill="#1a1a1a"/><circle cx="280" cy="206" r="5" fill="#9a9a9a"/>' +
      '<circle cx="324" cy="192" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bt-s1)"/>' +
      '<g class="bt-bird"><path d="M0 34q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a3a" stroke-width="1.5"/></g>' +
      row(0, 70, 64, 76, "#a5523c", "#e8e2d4", 1) + row(66, 74, 64, 72, "#8e4a3a", "#d8d2c2") + row(132, 70, 64, 76, "#b0614a", "#efe9dc") + row(198, 76, 64, 70, "#9a503c", "#e2dccc", 1) + row(264, 70, 64, 76, "#a95a40", "#e8e2d4") + row(330, 74, 70, 72, "#8a4434", "#d8d2c2") +
      '<rect x="0" y="154" width="400" height="58" fill="#5a5a5e"/>' +
      '<rect x="22" y="58" width="5" height="100" fill="#2f3a34"/><circle cx="24" cy="56" r="6" fill="#fff3c0" class="bt-glow"/>' +
      bus +
      '<rect x="0" y="212" width="400" height="48" fill="#a8a39a"/><path d="M0 212h400" stroke="#e8e4da" stroke-width="3"/>' +
      '<rect x="360" y="120" width="4" height="92" fill="#4a4f55"/><rect x="346" y="104" width="32" height="20" rx="2" fill="#fff" stroke="' + BUS + '" stroke-width="2"/><text x="362" y="118" text-anchor="middle" ' + font + ' font-size="11" fill="' + BUS + '">29</text>' +
      '<rect x="14" y="14" width="222" height="32" rx="3" fill="#111"/><text x="26" y="36" ' + font + ' font-size="15" fill="#fff">Morris St &amp; Broad St</text>' + badge(196, 30, "29", BUS),
      sky("bt-s1", "#9fcdf0", "#f7ecd8"));
  }

  /* 2. 5th St and Passyunk Ave, summer 1992: sidewalk drum kit, a mic on a stand, an open case collecting coins, Passyunk storefront awnings */
  function btbusk() {
    return svg(
      '<rect width="400" height="260" fill="url(#bt-s2)"/>' +
      '<circle cx="340" cy="44" r="20" fill="#ffe08a" class="bt-glow"/>' +
      '<rect x="0" y="60" width="140" height="104" fill="#b8664a"/><rect x="140" y="52" width="130" height="112" fill="#c9a27a"/><rect x="270" y="64" width="130" height="100" fill="#9a4e3a"/>' +
      [[10, 72], [70, 72], [152, 64], [212, 64], [282, 76], [342, 76]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="44" height="22" fill="#2b3440" stroke="#f2efe6" stroke-width="1.5"/>').join("") +
      '<path d="M0 108h140l-8 18H8z" fill="' + BRICK + '"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (6 + i * 19) + '" y="108" width="9" height="18" fill="#f6efe2"/>').join("") +
      '<path d="M140 108h130l-8 18H148z" fill="#2f7a6a"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (146 + i * 18) + '" y="108" width="9" height="18" fill="#f6efe2"/>').join("") +
      '<path d="M270 112h130l-8 18H278z" fill="' + GOLD + '"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (276 + i * 18) + '" y="112" width="9" height="18" fill="#a8452e"/>').join("") +
      '<rect x="12" y="130" width="116" height="34" fill="#2b3440"/><rect x="152" y="130" width="108" height="34" fill="#2b3440"/><rect x="282" y="132" width="108" height="32" fill="#2b3440"/>' +
      '<rect x="0" y="164" width="400" height="96" fill="#b9b2a4"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 164l-30 96" stroke="#a29a8a" stroke-width="1.2"/>').join("") +
      /* drum kit: bass drum, snare, hi-hat, cymbal */
      '<circle cx="110" cy="206" r="26" fill="#d84a3a" stroke="#f0e6d2" stroke-width="4"/><circle cx="110" cy="206" r="15" fill="#f4ecd8"/>' +
      '<ellipse cx="160" cy="196" rx="20" ry="7" fill="#e8e2d4" stroke="#8a8a8a" stroke-width="2"/><rect x="140" y="196" width="40" height="14" fill="#c8c4bc"/><path d="M160 210v24M150 234l10 -10l10 10" stroke="#555" stroke-width="2" fill="none"/>' +
      '<path d="M66 232v-70" stroke="#555" stroke-width="2"/><ellipse cx="66" cy="160" rx="20" ry="4" fill="#d9b23a"/><ellipse cx="66" cy="166" rx="20" ry="4" fill="#c9a22a"/>' +
      '<path d="M200 232v-80" stroke="#555" stroke-width="2"/><ellipse cx="196" cy="150" rx="24" ry="5" fill="#e0bc44" transform="rotate(-10 196 150)"/>' +
      '<g class="bt-stk"><path d="M148 172l14 18" stroke="#e8d2a2" stroke-width="3" stroke-linecap="round"/></g><g class="bt-stk bt-stk2"><path d="M178 170l-8 20" stroke="#e8d2a2" stroke-width="3" stroke-linecap="round"/></g>' +
      /* mic stand + open case with coins */
      '<path d="M262 236v-74M250 236h24" stroke="#333" stroke-width="3"/><rect x="256" y="148" width="12" height="18" rx="6" fill="#222"/><path d="M262 166v4" stroke="#333" stroke-width="3"/>' +
      '<path d="M296 228h76l-8 -20h-60z" fill="#3a2a22"/><path d="M300 226h68l-6 -14h-56z" fill="#8a2e4a"/><path d="M304 208l-12 -26h76l-6 26z" fill="#4a362c"/>' +
      '<g class="bt-coin"><circle cx="318" cy="216" r="3.5" fill="' + GOLD + '"/></g><g class="bt-coin bt-coin2"><circle cx="336" cy="218" r="3.5" fill="#d8dde2"/></g><g class="bt-coin bt-coin3"><circle cx="352" cy="216" r="3.5" fill="' + GOLD + '"/></g>' +
      '<g class="bt-note"><text x="214" y="146" font-size="18" fill="' + AQUA + '">&#9834;</text></g><g class="bt-note bt-note2"><text x="232" y="140" font-size="15" fill="#fff">&#9835;</text></g><g class="bt-note bt-note3"><text x="120" y="156" font-size="16" fill="' + GOLD + '">&#9834;</text></g>' +
      '<rect x="14" y="14" width="6" height="40" fill="#2f2f2f"/>' + sign(22, 14, 92, "S 5th St") + sign(22, 38, 110, "Passyunk Ave"),
      sky("bt-s2", "#7ec4ee", "#fbe7c4"));
  }

  /* 3. Millersville University: the 1894 Old Library (Biemesderfer Center), red brick Romanesque, octagonal center with a conical roof, the tower with its sundial, a swan on the campus pond */
  function btmville() {
    return svg(
      '<rect width="400" height="260" fill="url(#bt-s3)"/>' +
      tree(26, 128, 1.8, "#3f7a3a") + tree(378, 124, 1.9, "#4a8a3e") +
      /* wings */
      '<rect x="70" y="92" width="90" height="60" fill="#9a3e2c"/><rect x="240" y="92" width="90" height="60" fill="#9a3e2c"/>' +
      '<path d="M64 92h102l-14 -22H78z" fill="#4a4a52"/><path d="M234 92h102l-14 -22H248z" fill="#4a4a52"/>' +
      [84, 112, 140, 254, 282, 310].map(x => '<path d="M' + (x - 8) + ' 140v-28a8 8 0 0 1 16 0v28z" fill="#2c3440" stroke="#d9c8a6" stroke-width="2"/>').join("") +
      /* octagonal center + conical roof */
      '<rect x="160" y="78" width="80" height="74" fill="#a5442f"/><path d="M160 96h80M160 118h80" stroke="#d9c8a6" stroke-width="2"/>' +
      '<path d="M154 78h92l-46 -48z" fill="#3e3e48"/><circle cx="200" cy="30" r="3" fill="#b8a26a"/>' +
      '<path d="M184 152v-24a16 16 0 0 1 32 0v24z" fill="#3a2418" stroke="#d9c8a6" stroke-width="2.5"/>' +
      '<path class="bt-glow" d="M172 112a8 8 0 0 1 16 0v-0z" fill="#ffd98a"/><path class="bt-glow bt-glow2" d="M212 112a8 8 0 0 1 16 0z" fill="#ffd98a"/>' +
      /* tower with sundial */
      '<rect x="134" y="44" width="26" height="108" fill="#8e3a2a"/><path d="M130 44h34l-17 -30z" fill="#3e3e48"/>' +
      '<circle cx="147" cy="66" r="8" fill="#efe6cc" stroke="#6a5a3a" stroke-width="1.5"/><path d="M147 66l5 -5" stroke="#3a3a3a" stroke-width="1.5"/>' +
      '<rect x="0" y="152" width="400" height="30" fill="#5f9a46"/>' +
      /* pond + swan */
      '<path d="M0 182h400v78H0z" fill="#3f7a8a"/><path d="M0 182q200 14 400 0" fill="#5f9a46"/>' +
      '<g class="bt-rip"><path d="M30 214h60M180 226h70M300 210h60M80 244h90" stroke="#a9d3e2" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="bt-rip bt-rip2"><path d="M130 236h40M250 248h60M20 252h40" stroke="#cfe8f0" stroke-width="1.5" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="bt-swan"><path d="M130 218q20 10 42 0q-4 -12 -22 -10q-14 0 -20 10z" fill="#fff"/><path d="M164 210q4 -20 -4 -22q-6 0 -4 6" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M155 194l-5 1" stroke="#e8752a" stroke-width="3" stroke-linecap="round"/></g>',
      sky("bt-s3", "#a9d6f2", "#f4eedc"));
  }

  /* 4. Graffiti Pier, Port Richmond: the concrete coal pier and its arches covered in paint, the Delaware rippling, a fresh DT tag going up */
  function btpier() {
    return svg(
      '<rect width="400" height="260" fill="url(#bt-s4)"/>' +
      '<circle cx="320" cy="96" r="26" fill="#ffb26a" opacity=".9"/>' +
      '<path d="M220 128q60 -26 180 -20" fill="none" stroke="#7a8aa0" stroke-width="3"/><path d="M250 128v-30M330 116v-24" stroke="#7a8aa0" stroke-width="3"/>' +
      '<rect x="0" y="128" width="400" height="132" fill="#2f5a78"/>' +
      '<g class="bt-rip"><path d="M220 150h60M300 172h70M200 196h60M320 222h60" stroke="#ffcf9a" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="bt-rip bt-rip2"><path d="M260 162h40M350 188h40M240 240h70" stroke="#cfe8f0" stroke-width="1.5" stroke-linecap="round" opacity=".6"/></g>' +
      /* the pier: deck, columns, arches */
      '<path d="M0 84h250l-40 40H0z" fill="#9a958c"/><rect x="0" y="80" width="252" height="8" fill="#b4afa4"/>' +
      [16, 70, 124, 178].map(x => '<rect x="' + x + '" y="124" width="22" height="136" fill="#8d887e"/>').join("") +
      '<rect x="0" y="124" width="210" height="16" fill="#7d786e"/>' +
      [38, 92, 146].map(x => '<path d="M' + x + ' 260v-90a20 26 0 0 1 40 0v90z" fill="#1d3448"/>').join("") +
      /* paint on the concrete */
      '<path d="M18 150h20v40H18z" fill="#e94b8a" opacity=".85"/><path d="M72 140h20v28H72z" fill="' + AQUA + '" opacity=".85"/><path d="M126 160h22v36h-22z" fill="#f5d23a" opacity=".85"/><path d="M180 146h20v50h-20z" fill="#6ad06a" opacity=".85"/>' +
      '<path d="M0 98h60l-6 12H0z" fill="#3a8ad8" opacity=".9"/><path d="M70 96h70l-4 14H74z" fill="#f08a2a" opacity=".9"/><path d="M150 98h70l-12 14h-58z" fill="#b54ad8" opacity=".9"/>' +
      tag("DT", 14, 118, 30, GOLD, -4) + tag("DOUBLE T", 80, 114, 17, "#fff", -3) + tag("215", 30, 186, 18, AQUA, -5) +
      '<g class="bt-sp"><circle cx="58" cy="104" r="2.5" fill="' + GOLD + '"/></g><g class="bt-sp bt-sp2"><circle cx="62" cy="100" r="2" fill="' + GOLD + '"/></g><g class="bt-sp bt-sp3"><circle cx="56" cy="98" r="1.6" fill="' + GOLD + '"/></g>' +
      '<circle cx="8" cy="80" r="9" fill="#4f7f3a"/><circle cx="24" cy="78" r="7" fill="#5f8f44"/><circle cx="236" cy="80" r="8" fill="#4f7f3a"/>',
      sky("bt-s4", "#3a3e78", "#f2a46a"));
  }

  /* 5. S 6th St and Emily St at dusk: green signs, the barber pole spinning, BLACK THOUGHT tagged on the brick, the Walt Whitman Bridge's towers and cables behind */
  function btcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bt-s5)"/>' + stars(12) +
      /* Walt Whitman Bridge */
      '<path d="M0 120h400" stroke="#8a96a8" stroke-width="4"/>' +
      '<rect x="110" y="40" width="6" height="84" fill="#8a96a8"/><rect x="124" y="40" width="6" height="84" fill="#8a96a8"/><path d="M110 56h20M110 80h20" stroke="#8a96a8" stroke-width="3"/>' +
      '<rect x="290" y="40" width="6" height="84" fill="#8a96a8"/><rect x="304" y="40" width="6" height="84" fill="#8a96a8"/><path d="M290 56h20M290 80h20" stroke="#8a96a8" stroke-width="3"/>' +
      '<path d="M0 92q60 30 120 -52q90 110 180 0q60 82 100 52" fill="none" stroke="#a8b4c4" stroke-width="2"/>' +
      Array.from({ length: 13 }, (_, i) => '<circle class="bt-glow' + (i % 2 ? " bt-glow2" : "") + '" cx="' + (10 + i * 32) + '" cy="117" r="1.6" fill="#ffe7a0"/>').join("") +
      /* brick wall */
      '<rect x="0" y="138" width="400" height="86" fill="#7e4433"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (146 + i * 8) + 'h400" stroke="#6e3a2a" stroke-width="1"/>').join("") +
      /* barbershop front + pole */
      '<rect x="276" y="156" width="58" height="50" fill="#2b3440" stroke="#e8e2d4" stroke-width="3"/><rect class="bt-glow" x="282" y="162" width="46" height="26" fill="#ffd98a" opacity=".55"/>' +
      '<rect x="252" y="150" width="14" height="48" rx="6" fill="#fff"/><clipPath id="bt-clip"><rect x="253" y="152" width="12" height="44" rx="5"/></clipPath>' +
      '<g clip-path="url(#bt-clip)"><g class="bt-pole">' + Array.from({ length: 8 }, (_, i) => '<path d="M251 ' + (150 + i * 12) + 'l16 -8v6l-16 8z" fill="' + (i % 2 ? "#c8102e" : "#1f4e9a") + '"/>').join("") + '</g></g>' +
      '<circle cx="259" cy="148" r="4" fill="#d9d9d9"/><circle cx="259" cy="200" r="4" fill="#d9d9d9"/>' +
      tag("BLACK THOUGHT", 8, 188, 28, AQUA, -6) + tag("DOUBLE T", 20, 216, 18, GOLD, -3) + tag("SOUTH PHILLY", 130, 214, 16, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="bt-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + GOLD + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + GOLD + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="352" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(308, 100, 90, "S 6th St") + sign(312, 126, 86, "Emily St") +
      '<g class="bt-sp"><circle cx="196" cy="166" r="3" fill="' + AQUA + '" opacity=".7"/></g><g class="bt-sp bt-sp2"><circle cx="202" cy="160" r="2" fill="' + AQUA + '" opacity=".6"/></g>',
      sky("bt-s5", "#141a3a", "#c26a5a"));
  }

  window.SCENES = { btstation: btstation, btbusk: btbusk, btmville: btmville, btpier: btpier, btcorner: btcorner };
})();
