/* Central Queens opening scenes for the Meyhem Lauren game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-30px);opacity:0}}' +
    '.stm{animation:steam 2.6s ease-out infinite}.stm2{animation-delay:.9s}.stm3{animation-delay:1.7s}' +
    '@keyframes tick{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.hand{transform-box:view-box;transform-origin:200px 62px;animation:tick 12s linear infinite}.hand2{animation-duration:90s}' +
    '@keyframes pass{from{transform:translateX(-200px)}to{transform:translateX(560px)}}' +
    '.lirr{animation:pass 9s linear infinite}' +
    '@keyframes el7{from{transform:translateX(420px)}to{transform:translateX(-320px)}}' +
    '.seven{animation:el7 7s linear infinite}' +
    '@keyframes volley{0%{transform:translate(0,0)}25%{transform:translate(70px,-36px)}50%{transform:translate(140px,0)}75%{transform:translate(70px,-36px)}100%{transform:translate(0,0)}}' +
    '.ball{animation:volley 2.4s ease-in-out infinite}' +
    '@keyframes beam{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}' +
    '.bm{transform-box:fill-box;transform-origin:50% 0;animation:beam 4s ease-in-out infinite}.bm2{animation-delay:-2s}' +
    '@keyframes twinkle{0%,49%{opacity:1}50%,100%{opacity:.35}}' +
    '.bulb{animation:twinkle .9s steps(1) infinite}.bulb2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e3be6a", CREAM = "#f3e6c8", BLUE = "#5b8fd8", WINE = "#c0394b";

  /* 1. The E/F/M/R pulling into Forest Hills-71 Av, underground on Queens Blvd: white tile, colored tile band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 176; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8d3c8" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v176" stroke="#d8d3c8" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 240; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [14, 386].forEach(x => { cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="186" fill="#1f2a36"/>'; });
    return svg(
      '<rect width="400" height="186" fill="#efece4"/>' + tiles +
      '<rect x="0" y="22" width="400" height="12" fill="#5a3d7a"/><rect x="0" y="34" width="400" height="3" fill="#2e1f42"/>' +
      '<rect x="0" y="0" width="400" height="8" fill="#2a2a2a"/>' +
      /* station sign */
      '<rect x="34" y="48" width="332" height="34" rx="4" fill="#111"/>' +
      '<rect x="34" y="48" width="332" height="4" fill="#fff"/>' +
      '<text x="46" y="73" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Forest Hills–71 Av</text>' +
      bullet(266, 66, "E", "#0039a6") + bullet(290, 66, "F", "#ff6319") + bullet(314, 66, "M", "#ff6319") + bullet(338, 66, "R", "#fccc0a", true) +
      cols +
      /* the train slides in and stops */
      '<g class="anim-train">' +
        '<rect x="10" y="112" width="290" height="64" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="154" width="290" height="4" fill="#5c6470"/>' + windows +
        '<rect x="276" y="122" width="18" height="22" rx="3" fill="#dff1ff" opacity=".9"/>' +
        '<circle cx="292" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(258, 166, "F", "#ff6319") +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#2a2622"/>' +
      tag("SMART CREW", 22, 240, 28, GOLD, -4) + tag("MEYHEM", 250, 244, 30, BLUE, -8),
      sky("ml1", "#000", "#000"));
  }

  /* 2. Station Square, Forest Hills Gardens: Tudor brick, half-timber stucco, red tile roofs, the clock tower, a LIRR train on the arch */
  function square() {
    const timber = (x, y, w, h) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + CREAM + '"/>';
      for (let i = x; i <= x + w; i += 14) s += '<rect x="' + i + '" y="' + y + '" width="3" height="' + h + '" fill="#4a2e1c"/>';
      s += '<path d="M' + x + ' ' + (y + h) + 'L' + (x + w / 2) + ' ' + y + 'L' + (x + w) + ' ' + (y + h) + '" stroke="#4a2e1c" stroke-width="2.5" fill="none"/>';
      return s;
    };
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="12" height="14" fill="#ffd98a"/><path d="M' + (x + 6) + ' ' + y + 'v14M' + x + ' ' + (y + 7) + 'h12" stroke="#4a2e1c" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ml2)"/>' + stars(10) +
      '<g class="lirr"><rect x="0" y="108" width="150" height="20" rx="4" fill="#c7ccd2" stroke="#6b7280" stroke-width="1.5"/><rect x="0" y="120" width="150" height="3" fill="#1a3f8f"/>' +
        (function () { let w = ""; for (let x = 8; x < 144; x += 18) w += '<rect x="' + x + '" y="111" width="11" height="7" rx="1" fill="#dff1ff"/>'; return w; })() + '</g>' +
      /* left wing */
      '<path d="M0 96l40-34 40 34z" fill="#b24a2a"/><rect x="0" y="96" width="80" height="104" fill="#9a4a32"/>' + timber(8, 98, 64, 30) + win(14, 140) + win(50, 140) + win(14, 168) + win(50, 168) +
      /* right wing */
      '<path d="M320 96l40-34 40 34z" fill="#b24a2a"/><rect x="320" y="96" width="80" height="104" fill="#9a4a32"/>' + timber(328, 98, 64, 30) + win(334, 140) + win(370, 140) + win(334, 168) + win(370, 168) +
      /* clock tower */
      '<path d="M172 40l28-30 28 30z" fill="#b24a2a"/><rect x="176" y="40" width="48" height="150" fill="#9a4a32"/>' +
      '<rect x="176" y="40" width="48" height="4" fill="#4a2e1c"/>' +
      '<circle cx="200" cy="62" r="14" fill="' + CREAM + '" stroke="#4a2e1c" stroke-width="2.5"/>' +
      '<path class="hand" d="M200 62V52" stroke="#2a1a10" stroke-width="2" stroke-linecap="round"/>' +
      '<path class="hand hand2" d="M200 62h7" stroke="#2a1a10" stroke-width="2.4" stroke-linecap="round"/>' +
      win(194, 90) + win(194, 116) +
      /* the arch bridge over the tracks with the LIRR on it */
      '<rect x="80" y="130" width="240" height="18" fill="#9a4a32"/><rect x="80" y="128" width="240" height="4" fill="' + CREAM + '"/>' +
      '<rect x="80" y="130" width="240" height="70" fill="#9a4a32"/>' +
      '<path d="M120 200v-34a26 26 0 0 1 52 0v34zM228 200v-34a26 26 0 0 1 52 0v34z" fill="#2a1a12"/>' +
      /* cobbled square + lamp */
      '<rect x="0" y="200" width="400" height="60" fill="#6e6258"/>' +
      (function () { let c = ""; for (let y = 206; y < 260; y += 9) for (let x = (y % 2 ? 0 : 9); x < 400; x += 18) c += '<rect x="' + x + '" y="' + y + '" width="15" height="6" rx="2" fill="#7d7066"/>'; return c; })() +
      '<rect x="98" y="176" width="3" height="40" fill="#1d1d1d"/><circle class="flk" cx="99.5" cy="174" r="5" fill="#ffe7a8"/>' +
      '<rect x="128" y="226" width="144" height="26" rx="4" fill="#1d1418" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="245" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="2" textLength="124" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">STATION SQUARE</text>',
      sky("ml2", "#141a36", "#7a5a8a"));
  }

  /* 3. Forest Hills Stadium: the concrete horseshoe, the old grass court, a rally going */
  function stadium() {
    let rows = "";
    for (let i = 0; i < 6; i++) rows += '<path d="M' + (30 + i * 4) + ' ' + (150 - i * 14) + 'Q200 ' + (98 - i * 16) + ' ' + (370 - i * 4) + ' ' + (150 - i * 14) + '" stroke="#bdb6aa" stroke-width="2" fill="none"/>';
    let arches = "";
    for (let i = 0; i < 12; i++) { const x = 30 + i * 30; arches += '<path d="M' + x + ' 72v-10a8 8 0 0 1 16 0v10z" fill="#4a463f" opacity=".6"/>'; }
    let crowd = "";
    for (let i = 0; i < 70; i++) { const x = 34 + (i * 47) % 332, y = 90 + (i * 29) % 60; crowd += '<circle cx="' + x + '" cy="' + y + '" r="2.2" fill="' + ["#e85d4a", "#f3e6c8", "#5b8fd8", "#e3be6a"][i % 4] + '" opacity=".8"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#ml3)"/>' + stars(16) +
      /* light beams */
      '<g class="bm"><path d="M60 0l-30 120h60z" fill="#fff4c8" opacity=".12"/></g><g class="bm bm2"><path d="M340 0l-30 120h60z" fill="#fff4c8" opacity=".12"/></g>' +
      /* the bowl */
      '<path d="M14 160V58Q200 20 386 58v102z" fill="#d9d2c4"/>' +
      '<path d="M14 58Q200 20 386 58" stroke="#efe9dc" stroke-width="4" fill="none"/>' +
      '<path d="M14 76Q200 40 386 76" stroke="#a69f92" stroke-width="10" fill="none"/>' + arches +
      '<path d="M26 160V84Q200 52 374 84v76z" fill="#a69f92"/>' + rows + crowd +
      /* the court */
      '<path d="M0 260L60 160h280l60 100z" fill="#3f7a3a"/>' +
      '<path d="M50 252L96 170h208l46 82z" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 170v82M73 211h254" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="62" y="206" width="276" height="8" fill="#1d1d1d" opacity=".75"/><path d="M62 206h276" stroke="#fff" stroke-width="1.5"/>' +
      '<g class="ball"><circle cx="130" cy="196" r="4" fill="#d8ff3a" stroke="#6a7a10" stroke-width="1"/></g>' +
      '<rect x="114" y="18" width="172" height="28" rx="4" fill="#1d1418" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="38" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="2" textLength="152" lengthAdjust="spacingAndGlyphs" fill="#fff">FOREST HILLS STADIUM</text>',
      sky("ml3", "#0b0e22", "#3a2f5a"));
  }

  /* 4. Roosevelt Av under the 7: the purple bullet rolling overhead, food carts steaming, string lights */
  function roosevelt() {
    let el = "";
    for (let x = 10; x < 400; x += 70) el += '<rect x="' + x + '" y="62" width="8" height="130" fill="#3a4a52"/><path d="M' + (x + 4) + ' 70l18 18M' + (x + 4) + ' 70l-18 18" stroke="#3a4a52" stroke-width="4"/>';
    let wins = "";
    for (let x = 10; x < 300; x += 30) wins += '<rect x="' + x + '" y="34" width="18" height="12" rx="2" fill="#dff1ff"/>';
    let bulbs = "";
    for (let i = 0; i < 16; i++) { const x = 12 + i * 25, y = 100 + Math.sin(i * 0.9) * 4 + (i % 2) * 2; bulbs += '<circle class="bulb' + (i % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="' + y + '" r="3" fill="' + ["#ffd24a", "#ff6a5a", "#7fe0a0", "#ffffff"][i % 4] + '"/>'; }
    const cart = (x, top, label) => '<rect x="' + x + '" y="150" width="96" height="50" rx="4" fill="#d8dde3" stroke="#7a8590" stroke-width="2"/>' +
      '<path d="M' + (x - 6) + ' 132h108l-8 18h-92z" fill="' + top + '"/>' +
      '<rect x="' + (x + 8) + '" y="158" width="80" height="16" rx="2" fill="#1d1418"/>' +
      '<text x="' + (x + 48) + '" y="170" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="1" fill="' + GOLD + '">' + label + '</text>' +
      '<circle cx="' + (x + 16) + '" cy="204" r="6" fill="#222"/><circle cx="' + (x + 80) + '" cy="204" r="6" fill="#222"/>' +
      '<path class="stm" d="M' + (x + 30) + ' 130q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="stm stm2" d="M' + (x + 48) + ' 130q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="stm stm3" d="M' + (x + 66) + ' 130q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ml4)"/>' + stars(12) +
      /* storefront glow at the back */
      '<rect x="0" y="110" width="400" height="90" fill="#2a1a2e"/>' +
      (function () { let s = ""; for (let x = 6; x < 400; x += 66) s += '<rect x="' + x + '" y="120" width="54" height="40" fill="#ffcf7a" opacity=".25"/>'; return s; })() +
      /* the el structure */
      '<rect x="0" y="50" width="400" height="14" fill="#3a4a52"/>' + el +
      '<g class="seven"><rect x="0" y="28" width="300" height="22" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' + wins + bullet(282, 39, "7", "#b933ad") + '</g>' +
      '<path d="M0 98q100 14 200 0t200 0" stroke="#222" stroke-width="1" fill="none"/>' + bulbs +
      cart(30, WINE, "DUMPLINGS") + cart(150, "#2f8a5a", "TACOS") + cart(270, "#d98a1a", "AREPAS") +
      '<rect x="0" y="210" width="400" height="50" fill="#1a1a1e"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("ROOSEVELT AV", 120, 252, 20, GOLD, -3),
      sky("ml4", "#0d0b1e", "#3a2240"));
  }

  /* 5. Queens Blvd and 71 Av: the subway entrance globes, street signs, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ml5)"/>' + stars(14) +
      /* wall with the tags */
      '<rect x="16" y="60" width="236" height="160" fill="#4a4048"/>' +
      (function () { let b = ""; for (let y = 64; y < 220; y += 12) b += '<path d="M16 ' + y + 'h236" stroke="#3c343b" stroke-width="1"/>'; return b; })() +
      tag("MEYHEM LAUREN", 24, 136, 24, GOLD, -7) + tag("RESPECT THE FLY", 34, 190, 22, BLUE, -3) +
      /* subway entrance: railings and green globes */
      '<rect x="266" y="176" width="110" height="44" fill="#1a2a22"/><path d="M266 176h110" stroke="#3a6a52" stroke-width="3"/>' +
      '<rect x="268" y="140" width="4" height="40" fill="#1d3a2a"/><rect x="370" y="140" width="4" height="40" fill="#1d3a2a"/>' +
      '<circle class="flk" cx="270" cy="136" r="7" fill="#3fd17a"/><circle class="flk flk2" cx="372" cy="136" r="7" fill="#3fd17a"/>' +
      '<rect x="282" y="182" width="78" height="16" rx="2" fill="#111"/><text x="321" y="194" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">SUBWAY</text>' +
      /* street signs on a pole */
      '<rect x="318" y="40" width="4" height="96" fill="#1d2329"/>' +
      '<rect x="270" y="50" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="320" y="63" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Queens Blvd</text>' +
      '<rect x="280" y="72" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="320" y="85" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">71 Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("ml5", "#0e0b1e", "#2e2448"));
  }

  window.SCENES = { train, square, stadium, roosevelt, corner };
})();
