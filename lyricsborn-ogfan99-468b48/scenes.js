/* Lyrics Born game (REGIONS: The Bay Area): Downtown Berkeley BART, Sather Tower, the Peace Pagoda in SF Japantown,
   kites at the Berkeley Marina, the corner of Shattuck and Center. 400 x 260 SVGs. All CSS classes prefixed "lb-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lb-blink{0%,100%{opacity:.25}50%{opacity:1}}.lb-bl{animation:lb-blink 1.4s ease-in-out infinite}.lb-bl2{animation-delay:.5s}.lb-bl3{animation-delay:.9s}' +
    '@keyframes lb-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lb-bob{animation:lb-bob 1.6s ease-in-out infinite}' +
    '@keyframes lb-swing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.lb-sw{transform-box:fill-box;transform-origin:50% 0;animation:lb-swing 1.2s ease-in-out infinite}' +
    '@keyframes lb-kite{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(8px,-10px) rotate(5deg)}}.lb-kt{transform-box:fill-box;transform-origin:50% 100%;animation:lb-kite 2.6s ease-in-out infinite}.lb-kt2{animation-delay:-.9s}.lb-kt3{animation-delay:-1.7s}' +
    '@keyframes lb-petal{from{transform:translate(0,-30px) rotate(0)}to{transform:translate(-50px,280px) rotate(320deg)}}.lb-pt{animation:lb-petal 5s linear infinite}' +
    '@keyframes lb-boat{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.lb-boat{animation:lb-boat 16s linear infinite}' +
    '@keyframes lb-carL{from{transform:translateX(470px)}to{transform:translateX(-80px)}}.lb-carL{animation:lb-carL 8s linear infinite}' +
    '@keyframes lb-car{from{transform:translateX(-80px)}to{transform:translateX(470px)}}.lb-car{animation:lb-car 7s linear infinite}.lb-car2{animation-delay:-3.5s}' +
    '@keyframes lb-ring{0%,100%{opacity:0;transform:scale(.6)}40%{opacity:.9}80%{opacity:0;transform:scale(1.4)}}.lb-rg{transform-box:fill-box;transform-origin:50% 50%;animation:lb-ring 1.6s ease-out infinite}.lb-rg2{animation-delay:.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bart = (x, y) => '<rect x="' + (x - 22) + '" y="' + (y - 11) + '" width="44" height="22" rx="4" fill="' + BART + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">BART</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 47) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };

  const BART = "#0099d8", ORANGE = "#ff5a36", TEAL = "#3ec1d3", GOLD = "#ffd23f", GRANITE = "#e6e1d3", COPPER = "#5f9e8a", GGB = "#c0362c";

  /* Sather Tower: pale granite shaft, clock faces, open belfry, green copper pyramid roof */
  const campanile = (x, base, h, s) => {
    const w = 26 * s, top = base - h;
    return '<rect x="' + (x - w / 2) + '" y="' + top + '" width="' + w + '" height="' + h + '" fill="' + GRANITE + '"/>' +
      '<rect x="' + (x - w / 2) + '" y="' + top + '" width="' + (w * 0.18) + '" height="' + h + '" fill="#cfc8b6"/>' +
      '<rect x="' + (x - w / 2 - 2 * s) + '" y="' + (top - 4 * s) + '" width="' + (w + 4 * s) + '" height="' + (5 * s) + '" fill="#d8d1bf"/>' +
      '<rect x="' + (x - w / 2 + 4 * s) + '" y="' + (top - 26 * s) + '" width="' + (w - 8 * s) + '" height="' + (22 * s) + '" fill="#3a3f48"/>' +
      '<rect x="' + (x - w / 2) + '" y="' + (top - 26 * s) + '" width="' + (4 * s) + '" height="' + (22 * s) + '" fill="' + GRANITE + '"/><rect x="' + (x + w / 2 - 4 * s) + '" y="' + (top - 26 * s) + '" width="' + (4 * s) + '" height="' + (22 * s) + '" fill="' + GRANITE + '"/>' +
      '<rect x="' + (x - 1.5 * s) + '" y="' + (top - 26 * s) + '" width="' + (3 * s) + '" height="' + (22 * s) + '" fill="' + GRANITE + '"/>' +
      '<rect x="' + (x - w / 2 - 2 * s) + '" y="' + (top - 30 * s) + '" width="' + (w + 4 * s) + '" height="' + (5 * s) + '" fill="#d8d1bf"/>' +
      '<path d="M' + (x - w / 2 - 1 * s) + ' ' + (top - 30 * s) + 'L' + x + ' ' + (top - 62 * s) + 'L' + (x + w / 2 + 1 * s) + ' ' + (top - 30 * s) + 'z" fill="' + COPPER + '"/>' +
      '<path d="M' + x + ' ' + (top - 62 * s) + 'L' + (x + w / 2 + 1 * s) + ' ' + (top - 30 * s) + 'H' + x + 'z" fill="#4c8673"/>' +
      '<rect x="' + (x - 0.8 * s) + '" y="' + (top - 70 * s) + '" width="' + (1.6 * s) + '" height="' + (8 * s) + '" fill="#c9a24a"/>' +
      '<circle cx="' + x + '" cy="' + (top + 12 * s) + '" r="' + (7 * s) + '" fill="#f7f3ea" stroke="#3a3f48" stroke-width="' + (1.2 * s) + '"/>' +
      '<path d="M' + x + ' ' + (top + 12 * s) + 'v' + (-5 * s) + 'M' + x + ' ' + (top + 12 * s) + 'h' + (3.5 * s) + '" stroke="#1d1f24" stroke-width="' + (1.1 * s) + '"/>';
  };

  /* 1. BART pulling into Downtown Berkeley (underground, under Shattuck) */
  function station() {
    let win = ""; for (let x = 30; x < 290; x += 38) win += '<rect x="' + x + '" y="100" width="26" height="20" rx="3" fill="#cfe9f7" opacity=".9"/>';
    let tiles = ""; for (let x = 0; x < 400; x += 24) for (let y = 0; y < 80; y += 12) tiles += '<rect x="' + (x + (y % 24 ? 12 : 0)) + '" y="' + y + '" width="23" height="11" fill="#c9b79a"/>';
    return svg(
      '<rect width="400" height="260" fill="#a8977c"/>' + tiles + '<rect x="0" y="78" width="400" height="6" fill="' + BART + '"/>' +
      '<rect x="34" y="14" width="270" height="42" rx="4" fill="#1d1f24"/><rect x="34" y="14" width="270" height="4" fill="' + BART + '"/>' +
      '<text x="48" y="43" ' + font + ' font-size="17" fill="#fff">Downtown Berkeley</text>' + bart(268, 35) +
      '<circle class="lb-bl" cx="336" cy="30" r="5" fill="#fff6c2"/><circle class="lb-bl lb-bl2" cx="366" cy="30" r="5" fill="#fff6c2"/>' +
      '<rect x="0" y="84" width="400" height="66" fill="#16171b"/>' +
      '<g class="anim-train">' +
        '<path d="M8 92h270q30 0 40 18v34h-310z" fill="#d6dbe0" stroke="#7a8088" stroke-width="2"/>' +
        '<rect x="8" y="124" width="310" height="6" fill="' + BART + '"/><rect x="8" y="132" width="310" height="3" fill="#7a8088"/>' + win +
        '<path d="M290 100h14q8 0 12 10h-26z" fill="#2b3440"/><circle cx="310" cy="138" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="150" width="400" height="8" fill="#e8c43a"/><rect x="0" y="158" width="400" height="36" fill="#8a8c90"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2a2c32"/>' +
      '<text x="200" y="181" text-anchor="middle" ' + font + ' font-size="11" letter-spacing="2" fill="#2a2c32">SHATTUCK AVE  /  CENTER ST EXIT</text>' +
      tag("LYRICS BORN", 30, 248, 32, ORANGE, -4) + tag("LB", 300, 246, 28, TEAL, -6),
      '');
  }

  /* 2. UC Berkeley: Sather Tower over the glade, bells swinging, eucalyptus and the hills */
  function tower() {
    let trees = ""; for (let i = 0; i < 6; i++) trees += '<ellipse cx="' + (20 + i * 72) + '" cy="200" rx="40" ry="22" fill="' + (i % 2 ? "#2f5d3a" : "#3a6b44") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb-s2)"/>' +
      '<path d="M0 150q70 -50 150 -40t140 -20t110 10v110h-400z" fill="#7d9a6a"/>' +
      '<path d="M0 170q90 -30 180 -20t220 -10v80h-400z" fill="#5f7f52"/>' +
      campanile(200, 210, 120, 1.25) +
      '<g class="lb-sw"><rect x="199" y="58" width="2" height="5" fill="#c9a24a"/><path d="M195 63h10l3 12h-16z" fill="#c9a24a"/></g>' +
      '<circle class="lb-rg" cx="160" cy="70" r="10" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="lb-rg lb-rg2" cx="240" cy="70" r="10" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      trees +
      '<rect x="0" y="210" width="400" height="50" fill="#6f9a4e"/>' +
      '<path d="M110 260q60 -40 90 -50t90 50z" fill="#c9bfa6"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="12" letter-spacing="3" fill="#2a2c32">SATHER TOWER</text>',
      sky("lb-s2", "#4f9bd8", "#f5dcb0"));
  }

  /* 3. SF Japantown: the five-tier Peace Pagoda, cherry petals falling */
  function pagoda() {
    let tiers = ""; const cx = 200;
    for (let i = 0; i < 5; i++) {
      const y = 196 - i * 28, w = 92 - i * 14;
      tiers += '<rect x="' + (cx - w / 2 + 8) + '" y="' + (y - 16) + '" width="' + (w - 16) + '" height="16" fill="#e9e4d8"/>' +
        '<rect x="' + (cx - w / 2 + 14) + '" y="' + (y - 13) + '" width="' + (w - 28) + '" height="9" fill="#bdb6a6"/>' +
        '<path d="M' + (cx - w / 2 - 10) + ' ' + (y - 14) + 'q' + (w / 2 + 10) + ' -14 ' + (w + 20) + ' 0l-8 -10h' + (-(w + 4)) + 'z" fill="#f2efe8" stroke="#a9a293" stroke-width="1.5"/>';
    }
    let petals = ""; for (let i = 0; i < 18; i++) petals += '<ellipse class="lb-pt" style="animation-delay:-' + ((i * 0.37) % 5).toFixed(2) + 's" cx="' + ((i * 61) % 430) + '" cy="' + ((i * 23) % 50) + '" rx="3" ry="2" fill="#f7b6c8"/>';
    const blossom = (x, y) => '<path d="M' + x + ' 230q2 -40 -6 -70" stroke="#4a3328" stroke-width="5" fill="none"/>' +
      '<circle cx="' + (x - 6) + '" cy="' + y + '" r="26" fill="#f4a7bd"/><circle cx="' + (x + 16) + '" cy="' + (y + 10) + '" r="20" fill="#f8c4d3"/><circle cx="' + (x - 26) + '" cy="' + (y + 12) + '" r="18" fill="#ee93ad"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb-s3)"/>' +
      '<rect x="0" y="120" width="70" height="110" fill="#8b7f73"/><rect x="330" y="110" width="70" height="120" fill="#7c7268"/>' +
      '<rect x="10" y="134" width="14" height="14" fill="#f5d98c" class="lb-bl"/><rect x="40" y="160" width="14" height="14" fill="#f5d98c" class="lb-bl lb-bl3"/><rect x="346" y="130" width="14" height="14" fill="#f5d98c" class="lb-bl lb-bl2"/>' +
      tiers +
      '<rect x="198" y="38" width="4" height="34" fill="#9c7a3c"/>' + [0, 1, 2, 3, 4].map(i => '<circle cx="200" cy="' + (44 + i * 6) + '" r="3.4" fill="#b88d42"/>').join("") +
      '<rect x="150" y="196" width="100" height="10" fill="#cfc8b8"/><rect x="130" y="206" width="140" height="10" fill="#bdb6a6"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#9a958c"/>' +
      blossom(70, 160) + blossom(340, 168) + petals,
      sky("lb-s3", "#86b8e2", "#fbe3d0"));
  }

  /* 4. Berkeley Marina: kites over the bay, the Golden Gate far off, a sailboat drifting */
  function marina() {
    const kite = (x, y, c1, c2, cls) => '<g class="lb-kt ' + cls + '"><path d="M' + x + ' ' + y + 'l16 18l-16 26l-16 -26z" fill="' + c1 + '"/><path d="M' + x + ' ' + y + 'l16 18h-32z" fill="' + c2 + '"/>' +
      '<path d="M' + x + ' ' + (y + 44) + 'q6 10 -2 18q-6 8 2 16" stroke="' + c2 + '" stroke-width="2" fill="none"/></g>' +
      '<path d="M' + x + ' ' + (y + 44) + 'Q' + (x + 30) + ' 170 ' + (x + 50) + ' 214" stroke="#fff" stroke-width="1" opacity=".7" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb-s4)"/>' +
      '<path d="M0 132q60 -14 120 -6t90 -2v20h-210z" fill="#6c7c8c"/>' +
      '<g transform="translate(232 98)"><rect x="12" y="0" width="5" height="40" fill="' + GGB + '"/><rect x="82" y="0" width="5" height="40" fill="' + GGB + '"/>' +
      '<path d="M-30 40Q14 2 14 2Q50 40 84 2Q110 32 150 36" stroke="' + GGB + '" stroke-width="2" fill="none"/><rect x="-30" y="28" width="180" height="3" fill="' + GGB + '"/></g>' +
      '<rect x="0" y="134" width="400" height="76" fill="#2f6f9a"/>' +
      '<path d="M0 150h400M0 170h400M0 192h400" stroke="#5a97c0" stroke-width="1.5" stroke-dasharray="14 18" opacity=".7"/>' +
      '<g class="lb-boat"><path d="M0 166h34l-6 8h-22z" fill="#f7f3ea"/><path d="M16 164v-30l14 30z" fill="#f7f3ea"/><path d="M14 164v-24l-10 24z" fill="' + ORANGE + '"/></g>' +
      '<path d="M0 210q100 -18 200 -8t200 -6v64h-400z" fill="#8fbf5a"/><path d="M0 230q120 -12 220 -4t180 0v34h-400z" fill="#77a948"/>' +
      kite(70, 30, ORANGE, GOLD, "") + kite(170, 54, TEAL, "#f7f3ea", "lb-kt2") + kite(320, 22, "#e04f8a", TEAL, "lb-kt3") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" letter-spacing="2" fill="#2a3a20">BERKELEY MARINA</text>',
      sky("lb-s4", "#3d8fd6", "#cfe6f2"));
  }

  /* 5. The corner: Shattuck Ave and Center St, LB tag on the wall, Sather Tower up the hill behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lb-s5)"/>' + stars(9) +
      '<path d="M0 132q80 -50 170 -44t140 4t90 20v40h-400z" fill="#2c3a3c"/>' +
      campanile(150, 140, 46, 0.7) +
      '<circle class="lb-bl" cx="150" cy="104" r="2.5" fill="#fff6c2"/>' +
      brick(0, 140, 400, 84, "#5c4a6e", "#46375a") +
      tag("LYRICS BORN", 14, 196, 40, ORANGE, -5) + tag("LATYRX", 40, 222, 20, GOLD, -3) + tag("SOLESIDES", 176, 220, 20, TEAL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#4f5156"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="lb-carL"><rect x="0" y="236" width="40" height="13" rx="4" fill="' + TEAL + '"/><circle cx="8" cy="249" r="3.5" fill="#111"/><circle cx="32" cy="249" r="3.5" fill="#111"/></g>' +
      '<rect x="336" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(270, 44, 128, "Shattuck Ave") + sign(292, 70, 92, "Center St") +
      '<circle class="lb-bl" cx="339" cy="36" r="5" fill="#fff6c2"/>',
      sky("lb-s5", "#151a3a", "#b0626a"));
  }

  window.SCENES = { station: station, tower: tower, pagoda: pagoda, marina: marina, corner: corner };
})();
