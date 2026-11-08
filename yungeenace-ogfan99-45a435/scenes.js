/* yungeenace scenes (Regions tab: South Florida; Jacksonville, "the Jungle"). CSS classes prefixed ya- (the page's own anim-train slides the Skyway car in).
   1 JTA Skyway car pulling into the elevated JRTC at LaVilla platform, downtown Jacksonville.
   2 The Westside billboard over Cassat Ave by I-10 exit 358 ("I'M COMING BACK"), traffic rolling.
   3 Friendship Fountain on the Southbank at night, the jets changing color, downtown across the St. Johns.
   4 The stadium by the river on game night (no logos): teal + gold lights, the St. Johns behind.
   5 Cassat Ave and Lenox Ave on the Westside: green signs, YUNGEEN ACE tagged, the blue Main Street Bridge behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes yacar{from{transform:translateX(-140px)}to{transform:translateX(470px)}}.ya-car{animation:yacar 6s linear infinite}.ya-car2{animation-duration:8s;animation-delay:-3s}.ya-car3{animation-duration:7s;animation-delay:-5s}' +
    '@keyframes yacarl{from{transform:translateX(470px)}to{transform:translateX(-140px)}}.ya-carl{animation:yacarl 7s linear infinite}.ya-carl2{animation-delay:-3.5s}' +
    '@keyframes yajet{0%,100%{transform:scaleY(.82)}50%{transform:scaleY(1.06)}}.ya-jet{transform-box:fill-box;transform-origin:50% 100%;animation:yajet 1.8s ease-in-out infinite}.ya-jet2{animation-delay:-.9s}' +
    '@keyframes yahue{0%,100%{fill:#5fd3e0}33%{fill:#e66bb5}66%{fill:#f2c94c}}.ya-hue{animation:yahue 6s linear infinite}.ya-hue2{animation-delay:-2s}.ya-hue3{animation-delay:-4s}' +
    '@keyframes yaglow{0%,100%{opacity:.5}50%{opacity:1}}.ya-glow{animation:yaglow 1.6s ease-in-out infinite}.ya-glow2{animation-delay:-.8s}' +
    '@keyframes yashim{0%,100%{opacity:.25}50%{opacity:.75}}.ya-shim{animation:yashim 2.2s ease-in-out infinite}.ya-shim2{animation-delay:-1.1s}' +
    '@keyframes yaboat{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.ya-boat{animation:yaboat 14s linear infinite}' +
    '@keyframes yaspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ya-sp{animation:yaspray 1.4s ease-out infinite}.ya-sp2{animation-delay:.5s}' +
    '@keyframes yablink{0%,60%{opacity:1}61%,100%{opacity:.2}}.ya-blink{animation:yablink 1.2s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="230" width="' + w + '" height="22" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="245" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* a spade, centered at x,y, size s */
  const spade = (x, y, s, fill) => '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 -10C-4 -4 -10 -1 -10 4C-10 8 -6 10 -3 8C-2 7.5 -1.2 6.8 -.8 6L-3 12H3L.8 6C1.2 6.8 2 7.5 3 8C6 10 10 8 10 4C10 -1 4 -4 0 -10Z" fill="' + fill + '"/>';
  /* sabal palm (Florida's state tree): rough trunk, fan crown */
  const palm = (x, base, h, s) => {
    const top = base - h;
    return '<g><rect x="' + (x - 3 * s) + '" y="' + top + '" width="' + (6 * s) + '" height="' + h + '" fill="#6f6250"/>' +
      '<g fill="#2f6b38">' + [-170, -140, -110, -70, -40, -10, 20, 160].map(a => '<ellipse transform="rotate(' + a + ' ' + x + ' ' + top + ')" cx="' + (x + 14 * s) + '" cy="' + top + '" rx="' + (15 * s) + '" ry="' + (4 * s) + '"/>').join("") + '<circle cx="' + x + '" cy="' + top + '" r="' + (4 * s) + '" fill="#3d7a44"/></g></g>';
  };
  /* downtown Jacksonville skyline (generic towers, one with a crown) */
  const skyline = (y, fill, win) => '<g fill="' + fill + '"><rect x="40" y="' + (y - 50) + '" width="26" height="50"/><rect x="72" y="' + (y - 80) + '" width="30" height="80"/><path d="M110 ' + y + 'V' + (y - 104) + 'l14 -14l14 14V' + y + 'z"/><rect x="146" y="' + (y - 66) + '" width="24" height="66"/><rect x="176" y="' + (y - 88) + '" width="28" height="88"/><rect x="210" y="' + (y - 56) + '" width="22" height="56"/><rect x="238" y="' + (y - 72) + '" width="26" height="72"/><rect x="270" y="' + (y - 44) + '" width="30" height="44"/></g>' +
    (win ? '<g fill="' + win + '">' + [[78, 60], [90, 44], [118, 30], [130, 50], [152, 36], [182, 24], [194, 50], [244, 30], [216, 40]].map(([x, d], i) => '<rect class="ya-shim' + (i % 2 ? " ya-shim2" : "") + '" x="' + x + '" y="' + (y - d) + '" width="4" height="5"/>').join("") + '</g>' : "");
  const TEAL = "#36c1c9", GOLD = "#d4a73a", CREAM = "#e9e4da";

  /* 1. JTA Skyway at the JRTC at LaVilla (elevated platform) */
  function yastation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (66 + i * 44) + '" y="88" width="32" height="24" rx="3" fill="#1d2b36"/>').join("");
    const car = '<g class="anim-train"><path d="M40 80h260q36 0 44 34v14H40z" fill="#f4f6f7" stroke="#6d757c" stroke-width="2"/>' + win +
      '<path d="M40 116h304v6H40z" fill="#1f5fa8"/><path d="M40 124h304v4H40z" fill="' + TEAL + '"/>' +
      '<path d="M306 86h18q14 4 18 24h-36z" fill="#1d2b36"/><text x="190" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#1f5fa8">SKYWAY</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yas1)"/>' + skyline(150, "#9fb3c4") +
      /* concrete guideway + columns */
      '<rect x="0" y="128" width="400" height="16" fill="#c9c4b8"/><rect x="0" y="144" width="400" height="5" fill="#a7a296"/>' +
      [40, 200, 360].map(x => '<path d="M' + (x - 9) + ' 149h18l-4 111h-10z" fill="#b6b1a5"/>').join("") +
      [20, 380].map(x => '<rect x="' + (x - 3) + '" y="62" width="6" height="66" fill="#3e5468"/>').join("") +
      car +
      /* station canopy + platform */
      '<path d="M0 44h400v10H0z" fill="#2c3e50"/><path d="M0 54h400l-10 8H10z" fill="#3e5468"/>' +
      '<rect x="0" y="149" width="400" height="10" fill="#d8d3c6"/><rect x="0" y="149" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="159" width="400" height="101" fill="#4a4f56"/>' + palm(70, 230, 60, 1) + palm(330, 230, 70, 1.1) +
      /* black station sign with the lines that stop here */
      '<rect x="86" y="164" width="228" height="52" rx="3" fill="#111"/><text x="200" y="184" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">JRTC AT LAVILLA</text>' +
      '<g ' + font + ' font-size="8" text-anchor="middle">' +
      '<rect x="94" y="192" width="44" height="16" rx="8" fill="#1f5fa8"/><text x="116" y="203" fill="#fff">SKYWAY</text>' +
      '<rect x="142" y="192" width="36" height="16" rx="8" fill="#00a651"/><text x="160" y="203" fill="#fff">GREEN</text>' +
      '<rect x="182" y="192" width="32" height="16" rx="8" fill="#0072ce"/><text x="198" y="203" fill="#fff">BLUE</text>' +
      '<rect x="218" y="192" width="30" height="16" rx="8" fill="#e31b23"/><text x="233" y="203" fill="#fff">RED</text>' +
      '<rect x="252" y="192" width="54" height="16" rx="8" fill="#f7941d"/><text x="279" y="203" fill="#111">ORANGE</text></g>' +
      label(110, 180, "LAVILLA, DOWNTOWN DUVAL"),
      sky("yas1", "#5fa9dc", "#f4dfb0"));
  }

  /* 2. The Westside billboard over Cassat Ave by I-10 */
  function yaboard() {
    return svg(
      '<rect width="400" height="260" fill="url(#yab1)"/><circle cx="66" cy="50" r="20" fill="#fff1b8" opacity=".9"/>' +
      palm(30, 160, 60, .9) + palm(372, 160, 70, 1) +
      /* billboard */
      '<rect x="196" y="96" width="8" height="70" fill="#7b7f86"/><rect x="176" y="150" width="48" height="5" fill="#7b7f86"/>' +
      '<rect x="86" y="22" width="228" height="80" fill="#0d0f12" stroke="#c9c4b8" stroke-width="4"/>' +
      '<rect x="94" y="30" width="212" height="64" fill="#101418"/>' + spade(122, 62, 1.7, CREAM) +
      '<text x="214" y="58" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="' + CREAM + '">I\'M COMING</text>' +
      '<text x="214" y="86" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + TEAL + '">BACK</text>' +
      '<g class="ya-glow"><circle cx="110" cy="20" r="3" fill="#fffbe0"/><circle cx="200" cy="20" r="3" fill="#fffbe0"/><circle cx="290" cy="20" r="3" fill="#fffbe0"/></g>' +
      /* highway */
      '<rect x="0" y="160" width="400" height="100" fill="#55595f"/><rect x="0" y="160" width="400" height="6" fill="#c9c4b8"/><path d="M0 206h400" stroke="#f2c200" stroke-width="3"/><path d="M0 184h400M0 232h400" stroke="#fff" stroke-width="2" stroke-dasharray="20 16"/>' +
      '<g class="ya-car"><rect x="0" y="170" width="54" height="16" rx="5" fill="' + TEAL + '"/><rect x="10" y="164" width="30" height="10" rx="3" fill="#2a3a44"/><circle cx="12" cy="187" r="5" fill="#222"/><circle cx="44" cy="187" r="5" fill="#222"/></g>' +
      '<g class="ya-car ya-car2"><rect x="0" y="190" width="70" height="20" rx="4" fill="#e9e4da"/><rect x="50" y="184" width="20" height="12" rx="2" fill="#2a3a44"/><circle cx="14" cy="211" r="5" fill="#222"/><circle cx="58" cy="211" r="5" fill="#222"/></g>' +
      '<g class="ya-carl"><rect x="0" y="216" width="58" height="16" rx="5" fill="' + GOLD + '"/><rect x="14" y="210" width="30" height="10" rx="3" fill="#2a3a44"/><circle cx="12" cy="233" r="5" fill="#222"/><circle cx="46" cy="233" r="5" fill="#222"/></g>' +
      /* interstate shield */
      '<path d="M16 112h40v6q0 26 -20 34q-20 -8 -20 -34z" fill="#1f5fa8" stroke="#fff" stroke-width="2"/><path d="M16 112h40v10H16z" fill="#c8202f"/><text x="36" y="142" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">10</text>' +
      label(12, 234, "CASSAT AVE BY I-10, THE WESTSIDE"),
      sky("yab1", "#4f8fc9", "#f6cf9a"));
  }

  /* 3. Friendship Fountain on the Southbank at night */
  function yafount() {
    const jets = [[140, 46, ""], [170, 70, " ya-jet2"], [200, 96, ""], [230, 70, " ya-jet2"], [260, 46, ""]];
    return svg(
      '<rect width="400" height="260" fill="url(#yaf1)"/>' + skyline(132, "#26304a", "#ffd98a") +
      '<rect x="0" y="132" width="400" height="40" fill="#18324d"/>' +
      [140, 150, 160].map((y, i) => '<path class="ya-shim' + (i % 2 ? " ya-shim2" : "") + '" d="M' + (60 + i * 20) + ' ' + y + 'h' + (220 - i * 30) + '" stroke="#ffd98a" stroke-width="2"/>').join("") +
      '<g class="ya-boat"><path d="M0 150h46l-6 8H6z" fill="#e9e4da"/><rect x="14" y="142" width="18" height="8" fill="#cfc8b8"/></g>' +
      /* fountain basin */
      '<ellipse cx="200" cy="206" rx="170" ry="34" fill="#c9c4b8"/><ellipse cx="200" cy="202" rx="156" ry="26" fill="#1f4f78"/>' +
      jets.map(([x, h, c], i) => '<path class="ya-jet' + c + ' ya-hue' + (i % 3 ? " ya-hue" + (i % 3 + 1) : "") + '" d="M' + (x - 6) + ' 200q6 -' + (h * 2) + ' 12 0z" opacity=".85"/>').join("") +
      '<ellipse cx="200" cy="200" rx="110" ry="12" fill="#bfeff4" opacity=".35"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a40"/>' + palm(24, 236, 70, 1) + palm(376, 236, 80, 1.1) +
      label(90, 220, "FRIENDSHIP FOUNTAIN, SOUTHBANK"),
      sky("yaf1", "#0b1630", "#30406e"));
  }

  /* 4. The stadium by the St. Johns on game night (no logos) */
  function yastadium() {
    const lights = x => '<rect x="' + (x - 2) + '" y="30" width="4" height="70" fill="#777"/><rect x="' + (x - 18) + '" y="18" width="36" height="14" rx="2" fill="#444"/>' +
      [0, 1, 2, 3].map(i => '<circle class="ya-glow' + (i % 2 ? " ya-glow2" : "") + '" cx="' + (x - 12 + i * 8) + '" cy="25" r="3" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yat1)"/>' + lights(60) + lights(340) +
      /* bowl */
      '<path d="M30 160q170 -90 340 0v20H30z" fill="#2a3138"/><path d="M44 158q156 -76 312 0" fill="none" stroke="' + TEAL + '" stroke-width="6"/><path d="M58 164q142 -62 284 0" fill="none" stroke="' + GOLD + '" stroke-width="4"/>' +
      Array.from({ length: 3 }, (_, r) => Array.from({ length: 16 }, (_, i) => '<circle cx="' + (86 + i * 15 + (r % 2) * 7) + '" cy="' + (128 + r * 10) + '" r="3.5" fill="' + ((i + r) % 3 ? TEAL : CREAM) + '"/>').join("")).join("") +
      /* field */
      '<rect x="30" y="176" width="340" height="30" fill="#2f7d3a"/>' + [80, 140, 200, 260, 320].map(x => '<path d="M' + x + ' 176v30" stroke="#fff" stroke-width="1.5" opacity=".7"/>').join("") +
      /* river in front */
      '<rect x="0" y="206" width="400" height="54" fill="#1d4466"/>' + [214, 222].map((y, i) => '<path class="ya-shim' + (i ? " ya-shim2" : "") + '" d="M' + (90 + i * 20) + ' ' + y + 'h' + (200 - i * 40) + '" stroke="' + TEAL + '" stroke-width="2"/>').join("") +
      label(12, 222, "GAME NIGHT BY THE ST. JOHNS"),
      sky("yat1", "#08121e", "#1d3350"));
  }

  /* 5. Cassat Ave and Lenox Ave, the Westside, the blue Main Street Bridge behind */
  function yacorner() {
    const tower = x => '<rect x="' + x + '" y="30" width="18" height="112" fill="#2f6fb7"/><rect x="' + (x - 2) + '" y="26" width="22" height="6" fill="#24578f"/>' +
      [40, 66, 92].map(y => '<path d="M' + x + ' ' + y + 'l18 22M' + (x + 18) + ' ' + y + 'l-18 22" stroke="#1d4f8a" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yac1)"/><g transform="translate(-30 0)">' + skyline(140, "#4a4560") + '</g>' +
      /* Main Street Bridge: two blue lift towers, the lift span between, the deck */
      tower(206) + tower(336) + '<rect x="206" y="96" width="148" height="12" fill="#2f6fb7"/><path d="M224 96l16 -14h80l16 14" fill="none" stroke="#2f6fb7" stroke-width="4"/>' +
      '<rect x="120" y="120" width="280" height="6" fill="#2f6fb7"/><rect x="0" y="134" width="400" height="12" fill="#2a5a80"/>' +
      '<path class="ya-shim" d="M290 140h90" stroke="#ffd98a" stroke-width="2"/>' +
      /* wall */
      '<rect x="10" y="112" width="262" height="96" fill="#d9cfbd" stroke="#8f8370" stroke-width="2"/><rect x="10" y="112" width="262" height="8" fill="' + TEAL + '"/>' +
      tag("YUNGEEN", 22, 162, 38, TEAL, -5) + tag("ACE", 36, 200, 32, GOLD, -3) + spade(128, 186, 1.4, "#111") + tag("DUVAL", 176, 198, 18, CREAM, -4) +
      '<g><circle class="ya-sp" cx="246" cy="190" r="3" fill="' + TEAL + '"/><circle class="ya-sp ya-sp2" cx="252" cy="182" r="2" fill="' + TEAL + '"/></g>' +
      /* sign post */
      '<rect x="346" y="140" width="5" height="68" fill="#777"/>' + sign(292, 150, 104, "CASSAT AVE") + sign(300, 176, 96, "LENOX AVE") +
      '<rect x="0" y="208" width="400" height="52" fill="#3a3a40"/><rect x="0" y="208" width="400" height="6" fill="#bdb6a6"/><path d="M0 236h400" stroke="#fff" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="ya-carl ya-carl2"><rect x="0" y="238" width="60" height="14" rx="5" fill="' + GOLD + '"/><circle cx="12" cy="253" r="4" fill="#222"/><circle cx="48" cy="253" r="4" fill="#222"/></g>',
      sky("yac1", "#3d7fc4", "#f7c58a"));
  }

  window.SCENES = { yastation, yaboard, yafount, yastadium, yacorner };
})();
