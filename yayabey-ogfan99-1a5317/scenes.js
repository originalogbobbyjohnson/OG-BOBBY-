/* yayabey scenes (NYC map: Queens; Jamaica, Merrick Blvd & Liberty Av). CSS classes prefixed yb- (the page's own anim-train is kept, used on the bus).
   1 The Q5 pulling up on Merrick Blvd at Liberty Av, Jamaica: two-family houses, early evening.
   2 Jamaica Avenue, the shopping strip she grew up on: storefront awnings, a bus rolling by, string lights.
   3 King Manor in Rufus King Park, Jamaica's landmark: the pale cream clapboard house with its gambrel roof, leaves falling.
   4 The art show: Yaya is a painter too (her work hung at MoCADA in Brooklyn); a gallery wall of her color-block canvases, a record spinning.
   5 Merrick Blvd and Liberty Av: green signs, YAYA BEY tagged, the AirTrain gliding toward JFK behind with a jet climbing.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ybglow{0%,100%{opacity:.45}50%{opacity:1}}.yb-glow{animation:ybglow 2.2s ease-in-out infinite}.yb-g2{animation-delay:-1.1s}' +
    '@keyframes ybbus{from{transform:translateX(-260px)}to{transform:translateX(460px)}}.yb-bus{animation:ybbus 11s linear infinite}' +
    '@keyframes ybleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,240px) rotate(300deg);opacity:0}}.yb-leaf{animation:ybleaf 6s linear infinite}.yb-l2{animation-delay:-2s}.yb-l3{animation-delay:-4s}.yb-l4{animation-delay:-1s}' +
    '@keyframes ybspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.yb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ybspin 2s linear infinite}' +
    '@keyframes ybsweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.yb-sweep{transform-box:fill-box;transform-origin:50% 0;animation:ybsweep 5s ease-in-out infinite}' +
    '@keyframes ybair{from{transform:translateX(-200px)}to{transform:translateX(460px)}}.yb-air{animation:ybair 9s linear infinite;animation-delay:-4s}' +
    '@keyframes ybplane{from{transform:translate(-80px,40px)}to{transform:translate(480px,-30px)}}.yb-plane{animation:ybplane 12s linear infinite;animation-delay:-6s}' +
    '@keyframes ybspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.yb-sp{animation:ybspray 1.4s ease-out infinite}.yb-sp2{animation-delay:-.5s}.yb-sp3{animation-delay:-.9s}' +
    '@keyframes ybbird{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-8px)}}.yb-bird{animation:ybbird 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const APR = "#f4a259", GOLD = "#ffd166", TEAL = "#7fc8c3", ROSE = "#e76f7e";
  const house = (x, y, body, trim) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="16" width="70" height="70" fill="' + body + '"/><path d="M-6 18l41 -24l41 24z" fill="' + trim + '"/>' +
    '<rect x="10" y="28" width="16" height="16" fill="#fbe2a0" class="yb-glow"/><rect x="44" y="28" width="16" height="16" fill="#fbe2a0" class="yb-glow yb-g2"/><rect x="10" y="56" width="16" height="16" fill="#fbe2a0"/><rect x="44" y="56" width="16" height="30" fill="#5a3a2a"/>' +
    '<rect x="-4" y="44" width="78" height="4" fill="' + trim + '"/></g>';

  /* 1. Q5 at Merrick Blvd & Liberty Av */
  function ybstop() {
    const bus = '<g class="anim-train"><rect x="40" y="126" width="300" height="66" rx="8" fill="#f4f4f2" stroke="#556" stroke-width="2"/>' +
      '<rect x="40" y="168" width="300" height="8" fill="#0039a6"/><rect x="40" y="176" width="300" height="3" fill="#ffcc33"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (78 + i * 42) + '" y="136" width="34" height="26" rx="2" fill="#22303a"/>').join("") +
      '<rect x="44" y="134" width="28" height="46" rx="2" fill="#2c3e48"/>' +
      '<rect x="80" y="128" width="200" height="6" fill="#111"/><text x="180" y="133.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb21e">Q5 MERRICK BLVD</text>' +
      '<circle cx="90" cy="194" r="11" fill="#1a1a1a"/><circle cx="90" cy="194" r="5" fill="#888"/><circle cx="296" cy="194" r="11" fill="#1a1a1a"/><circle cx="296" cy="194" r="5" fill="#888"/>' +
      '<rect x="336" y="148" width="6" height="8" fill="#fff6c2" class="yb-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ybs1)"/>' +
      house(10, 70, "#c9a98e", "#6b3f3a") + house(110, 66, "#b6c4c0", "#3d5a56") + house(214, 72, "#e0c48f", "#7a5a3a") + house(316, 68, "#c8a6b0", "#5a3a48") +
      '<rect x="0" y="156" width="400" height="40" fill="#5f8a4a"/>' +
      '<rect x="0" y="196" width="400" height="12" fill="#b7b0a4"/><rect x="0" y="208" width="400" height="52" fill="#3f4247"/><path d="M0 236h400" stroke="#f2c230" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="362" y="104" width="4" height="94" fill="#6b6f76"/><rect x="346" y="88" width="36" height="34" rx="3" fill="#0039a6" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="364" y="100" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS STOP</text><text x="364" y="116" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Q5</text>' +
      '<rect x="18" y="18" width="250" height="40" rx="3" fill="#111" stroke="#444" stroke-width="2"/><text x="30" y="44" ' + font + ' font-size="16" fill="#fff">Merrick Blvd / Liberty Av</text>',
      sky("ybs1", "#2a2346", "#f0a77a"));
  }

  /* 2. Jamaica Avenue, the shopping strip */
  function ybave() {
    const bus = '<g class="yb-bus"><rect x="0" y="176" width="150" height="44" rx="6" fill="#f4f4f2" stroke="#556" stroke-width="2"/><rect x="0" y="206" width="150" height="5" fill="#0039a6"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (10 + i * 34) + '" y="184" width="26" height="16" rx="2" fill="#22303a"/>').join("") +
      '<circle cx="28" cy="222" r="8" fill="#1a1a1a"/><circle cx="122" cy="222" r="8" fill="#1a1a1a"/></g>';
    const shop = (x, w, h, wall, awn) => '<rect x="' + x + '" y="' + (176 - h) + '" width="' + w + '" height="' + h + '" fill="' + wall + '"/>' +
      '<rect x="' + (x + 6) + '" y="' + (182 - h) + '" width="' + (w / 2 - 10) + '" height="14" fill="#ffe7b0" class="yb-glow"/><rect x="' + (x + w / 2 + 4) + '" y="' + (182 - h) + '" width="' + (w / 2 - 10) + '" height="14" fill="#ffe7b0" class="yb-glow yb-g2"/>' +
      '<path d="M' + x + ' 130h' + w + 'l-6 12h-' + (w - 12) + 'z" fill="' + awn + '"/><rect x="' + (x + 6) + '" y="142" width="' + (w - 12) + '" height="34" fill="#2b2f3a"/>' +
      '<rect x="' + (x + 10) + '" y="148" width="' + (w - 20) + '" height="22" fill="#5b6472" opacity=".6"/>';
    const lights = Array.from({ length: 20 }, (_, i) => '<circle cx="' + (10 + i * 20) + '" cy="' + (40 + Math.sin(i / 3.1) * 6) + '" r="3" fill="' + [GOLD, APR, ROSE, TEAL][i % 4] + '" class="yb-glow' + (i % 2 ? ' yb-g2' : '') + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ybs2)"/>' +
      shop(0, 96, 120, "#8f5a48", ROSE) + shop(100, 90, 136, "#a8745a", GOLD) + shop(194, 100, 112, "#7d5e72", TEAL) + shop(298, 102, 128, "#996a4a", APR) +
      '<path d="M0 36q100 16 200 0t200 0" stroke="#333" stroke-width="1.5" fill="none"/>' + lights +
      '<rect x="0" y="176" width="400" height="10" fill="#c9c2b6"/><rect x="0" y="186" width="400" height="74" fill="#4a4d55"/><path d="M0 240h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 16"/>' +
      bus + sign(286, 64, 106, "JAMAICA AV", 12) + '<rect x="337" y="86" width="4" height="44" fill="#6b6f76"/>' +
      tag("THE AVE", 20, 92, 28, GOLD, -5),
      sky("ybs2", "#3a2a52", "#e08a6a"));
  }

  /* 3. King Manor, Rufus King Park */
  function ybmanor() {
    const leaves = [[60, 0, ""], [150, 0, " yb-l2"], [250, 0, " yb-l3"], [330, 0, " yb-l4"], [110, 0, " yb-l3"]].map(a => '<g class="yb-leaf' + a[2] + '"><path d="M' + a[0] + ' 10q6-8 12 0q-6 8-12 0z" fill="' + APR + '"/></g>').join("");
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="16" height="22" fill="#3b4a56" stroke="#fff" stroke-width="2"/><path d="M' + (x + 8) + ' ' + y + 'v22M' + x + ' ' + (y + 11) + 'h16" stroke="#fff" stroke-width="1"/>' +
      '<rect x="' + (x - 7) + '" y="' + y + '" width="6" height="22" fill="#2f4a3a"/><rect x="' + (x + 17) + '" y="' + y + '" width="6" height="22" fill="#2f4a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ybs3)"/>' +
      '<circle cx="40" cy="120" r="46" fill="#c46a2a"/><circle cx="70" cy="96" r="38" fill="#d98a3a"/><circle cx="360" cy="112" r="48" fill="#b8562a"/><circle cx="330" cy="92" r="34" fill="#e0a040"/>' +
      '<rect x="36" y="140" width="10" height="50" fill="#5a3a2a"/><rect x="356" y="140" width="10" height="50" fill="#5a3a2a"/>' +
      /* the house: pale cream clapboard, gambrel roof */
      '<path d="M96 104l20-34h168l20 34z" fill="#5d5a58"/><path d="M116 70l14-16h140l14 16z" fill="#6c6966"/>' +
      '<rect x="166" y="40" width="12" height="20" fill="#8a4a3a"/><rect x="232" y="40" width="12" height="20" fill="#8a4a3a"/>' +
      '<rect x="100" y="104" width="200" height="82" fill="#f1e6c8"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M100 ' + (110 + i * 8) + 'h200" stroke="#d8cba8" stroke-width="1"/>').join("") +
      win(120, 116) + win(156, 116) + win(228, 116) + win(264, 116) + win(120, 152) + win(264, 152) +
      '<rect x="186" y="140" width="28" height="46" fill="#2f4a3a"/><path d="M180 140h40l-20-12z" fill="#f1e6c8" stroke="#d8cba8"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#5f8a4a"/><path d="M170 260l20-74h20l20 74z" fill="#c9b99a"/>' +
      '<g class="yb-bird"><path d="M60 40q6-6 12 0q6-6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/><path d="M96 54q5-5 10 0q5-5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      leaves + '<rect x="132" y="210" width="136" height="24" rx="3" fill="#2a3a30" stroke="#d8cba8" stroke-width="1.5"/><text x="200" y="226" text-anchor="middle" ' + font + ' font-size="11" fill="#f1e6c8">RUFUS KING PARK</text>',
      sky("ybs3", "#8fc0d8", "#f3d9b0"));
  }

  /* 4. The art show: her canvases on a gallery wall */
  function ybgallery() {
    const canvas = (x, y, w, h, cols) => '<rect x="' + (x - 4) + '" y="' + (y - 4) + '" width="' + (w + 8) + '" height="' + (h + 8) + '" fill="#2a1d18"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + cols[0] + '"/><circle cx="' + (x + w * .6) + '" cy="' + (y + h * .4) + '" r="' + (Math.min(w, h) * .26) + '" fill="' + cols[1] + '"/>' +
      '<path d="M' + x + ' ' + (y + h) + 'q' + (w / 2) + ' -' + (h * .5) + ' ' + w + ' 0z" fill="' + cols[2] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe4d2"/><rect x="0" y="0" width="400" height="18" fill="#d9c9b0"/>' +
      '<g class="yb-sweep"><path d="M120 18l-40 120h80z" fill="#fff6d8" opacity=".35"/></g><g class="yb-sweep" style="animation-delay:-2.5s"><path d="M280 18l-40 120h80z" fill="#fff6d8" opacity=".35"/></g>' +
      '<rect x="110" y="14" width="20" height="8" fill="#333"/><rect x="270" y="14" width="20" height="8" fill="#333"/>' +
      canvas(40, 50, 90, 110, [TEAL, GOLD, ROSE]) + canvas(160, 40, 80, 70, [ROSE, "#2a1d18", APR]) + canvas(160, 122, 80, 46, [GOLD, APR, "#5a3a48"]) + canvas(270, 50, 90, 110, ["#3d2a4a", APR, TEAL]) +
      '<rect x="0" y="186" width="400" height="74" fill="#8a5a3a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 186v74" stroke="#7a4a2e" stroke-width="2"/>').join("") +
      '<rect x="168" y="190" width="64" height="34" rx="3" fill="#2a1d18"/><g class="yb-spin"><circle cx="200" cy="200" r="20" fill="#111"/><circle cx="200" cy="200" r="12" fill="none" stroke="#333"/><circle cx="200" cy="200" r="6" fill="' + APR + '"/></g>' +
      '<rect x="166" y="176" width="68" height="8" rx="2" fill="#c9a24a"/>' + tag("DO IT AFRAID", 22, 182, 20, APR, -4),
      "");
  }

  /* 5. Merrick Blvd & Liberty Av corner, the AirTrain behind */
  function ybcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ybs5)"/>' +
      '<g class="yb-plane"><g transform="translate(80 0) scale(-1 1)"><path d="M0 40l40-6 10-12h6l-4 12 22-2 6-6h4l-2 8 2 8h-4l-6-6-22-2 4 12h-6l-10-12z" fill="#e8e8f0"/></g></g>' +
      /* AirTrain guideway */
      '<rect x="0" y="96" width="400" height="10" fill="#b8bcc4"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="106" width="12" height="40" fill="#a0a4ac"/>').join("") +
      '<g class="yb-air"><rect x="0" y="78" width="70" height="18" rx="5" fill="#e9eef3" stroke="#556" stroke-width="1.5"/><rect x="72" y="78" width="70" height="18" rx="5" fill="#e9eef3" stroke="#556" stroke-width="1.5"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (8 + i * 22) + '" y="82" width="14" height="7" rx="1" fill="#3a5a7a"/>').join("") + '</g>' +
      /* brick wall */
      '<rect x="0" y="146" width="400" height="80" fill="#9c4a3a"/>' + Array.from({ length: 8 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2) * 15 - 15) + '" y="' + (146 + r * 10) + '" width="28" height="8" fill="#a85a46"/>').join("")).join("") +
      tag("YAYA BEY", 70, 200, 46, APR, -5) + tag("REAL YEARNERS", 230, 220, 18, TEAL, -3) +
      '<g class="yb-sp"><circle cx="300" cy="182" r="2" fill="' + GOLD + '"/></g><g class="yb-sp yb-sp2"><circle cx="304" cy="186" r="2" fill="' + APR + '"/></g><g class="yb-sp yb-sp3"><circle cx="298" cy="188" r="2" fill="' + TEAL + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3f4247"/>' +
      '<rect x="338" y="60" width="6" height="166" fill="#5b6066"/>' + sign(286, 52, 110, "MERRICK BLVD", 11) + sign(292, 76, 98, "LIBERTY AV", 11),
      sky("ybs5", "#2b2650", "#f0a070"));
  }

  window.SCENES = { ybstop, ybave, ybmanor, ybgallery, ybcorner };
})();
