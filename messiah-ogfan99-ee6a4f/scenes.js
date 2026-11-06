/* Messiah game (NYC map, Manhattan: Hamilton Heights, where he grew up after moving from Santiago de los Caballeros, Dominican Republic, at age two).
   1. 145 St on the 1, underground under Broadway (the reserved hub station).
   2. Santiago de los Caballeros (his birthplace): the white Monumento a los Héroes de la Restauración on its hill, Dominican flags flying.
   3. Estadio Cibao in Santiago at night (for "Robinson Cano"): light towers, the diamond, a ball sailing out of the park.
   4. Audubon Terrace up Broadway at 155 St: the limestone Hispanic Society buildings and the terrace with the rider statue.
   5. Hamilton Terrace & W 141 St, Hamilton Grange (pale yellow, white porches) behind, MESSIAH tagged on the wall. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes msflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ms-flag{transform-box:fill-box;transform-origin:0 50%;animation:msflag 1.6s ease-in-out infinite}.ms-flag2{animation-delay:-.8s}' +
    '@keyframes mscloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.ms-cloud{animation:mscloud 22s linear infinite}.ms-cloud2{animation-delay:-11s}' +
    '@keyframes msflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.ms-flk{animation:msflk 2.6s infinite}' +
    '@keyframes msbl{0%,100%{opacity:.3}50%{opacity:1}}.ms-bl{animation:msbl 1.3s ease-in-out infinite}.ms-bl2{animation-delay:.33s}.ms-bl3{animation-delay:.66s}.ms-bl4{animation-delay:1s}' +
    '@keyframes mshit{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(250px,-150px);opacity:0}}.ms-hit{animation:mshit 2.4s ease-out infinite}' +
    '@keyframes msbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ms-bob{animation:msbob .6s ease-in-out infinite}.ms-bob2{animation-delay:.3s}' +
    '@keyframes mspalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(4deg)}}.ms-palm{transform-box:fill-box;transform-origin:50% 100%;animation:mspalm 3s ease-in-out infinite}' +
    '@keyframes msbird{0%{transform:translate(0,0)}50%{transform:translate(70px,-12px)}100%{transform:translate(140px,0)}}.ms-bird{animation:msbird 6s ease-in-out infinite alternate}' +
    '@keyframes mscar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ms-car{animation:mscar 6.5s linear infinite}' +
    '@keyframes msmist{0%,100%{opacity:.15}50%{opacity:.5}}.ms-mist{animation:msmist 2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const CORAL = "#ff8a5b", DBLUE = "#002d62", DRED = "#ce1126", CREAM = "#f4ead8", GOLD = "#f2c14e", RED1 = "#ee352e";
  /* Dominican flag (no coat of arms detail, just the cross and quarters) */
  const flag = (x, y, w, cls) => { const h = w * 0.62, c = w * 0.14;
    return '<rect x="' + (x - 2) + '" y="' + y + '" width="2.5" height="' + (h + 40) + '" fill="#ddd"/><g class="ms-flag ' + (cls || "") + '">' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#fff"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="' + DBLUE + '"/>' +
      '<rect x="' + (x + (w + c) / 2) + '" y="' + y + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="' + DRED + '"/>' +
      '<rect x="' + x + '" y="' + (y + (h + c) / 2) + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="' + DRED + '"/>' +
      '<rect x="' + (x + (w + c) / 2) + '" y="' + (y + (h + c) / 2) + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="' + DBLUE + '"/></g>'; };
  const palm = (x, y, s) => '<g class="ms-palm"><path d="M' + x + ' ' + y + 'q' + (4 * s) + ' ' + (-30 * s) + ' ' + (-2 * s) + ' ' + (-60 * s) + '" stroke="#7a5a3a" stroke-width="' + 4 * s + '" fill="none"/>' +
    [[-26, -4], [24, -2], [-18, 10], [20, 12], [0, -14]].map(d => '<path d="M' + (x - 2 * s) + ' ' + (y - 60 * s) + 'q' + (d[0] * s / 2) + ' ' + (-12 * s) + ' ' + (d[0] * s) + ' ' + (d[1] * s) + '" stroke="#3f8a3a" stroke-width="' + 4 * s + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';

  /* 1. 145 St, underground on the Broadway line: white tile, red-brown mosaic band, black sign with the 1, the 1 train sliding in */
  function station() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1ede4"/>';
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="94" width="6" height="6" fill="' + (x % 24 ? "#8a4a2a" : "#e3c27a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#ddd6c6"/>' + tiles +
      '<rect x="0" y="90" width="400" height="14" fill="#4a2616"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#26262a"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="ms-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="80" y="44" width="240" height="34" rx="3" fill="#111"/><rect x="80" y="44" width="240" height="3" fill="#fff"/>' +
      '<text x="96" y="68" ' + font + ' font-size="17" fill="#fff">145 St</text>' + bullet(294, 61, "1", RED1) +
      [14, 386].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#2f4f7a"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "1", RED1) +
        '<rect x="10" y="140" width="280" height="4" fill="' + RED1 + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#57544f"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(330, 194, "#1b1b1b") + person(354, 198, "#3a2420") +
      txt("UPTOWN", 150, 232, 13, CREAM, 'letter-spacing="6"'));
  }

  /* 2. Santiago de los Caballeros: the white marble Monumento on its green hill, stepped base, columned tower, a figure on top, flags and palms */
  function monumento() {
    let cols = "";
    for (let x = 178; x <= 216; x += 8) cols += '<rect x="' + x + '" y="40" width="4" height="40" fill="#e6e2d8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#msm)"/>' +
      '<g class="ms-cloud"><ellipse cx="40" cy="40" rx="30" ry="10" fill="#fff" opacity=".85"/><ellipse cx="62" cy="34" rx="18" ry="9" fill="#fff" opacity=".85"/></g>' +
      '<g class="ms-cloud ms-cloud2"><ellipse cx="40" cy="70" rx="26" ry="8" fill="#fff" opacity=".7"/></g>' +
      '<path d="M0 200q200-60 400 0v60h-400z" fill="#5aa04a"/><path d="M0 214q200-46 400 0v46h-400z" fill="#4a8a3c"/>' +
      /* base terraces */
      '<rect x="120" y="170" width="160" height="18" fill="#f3f0e8"/><rect x="138" y="152" width="124" height="20" fill="#ece8de"/><rect x="156" y="134" width="88" height="20" fill="#f3f0e8"/>' +
      '<path d="M120 188h160M138 172h124M156 154h88" stroke="#c9c3b5" stroke-width="2"/>' +
      /* tower */
      '<rect x="172" y="80" width="56" height="56" fill="#f6f3ec"/><rect x="172" y="80" width="56" height="6" fill="#dcd6c8"/>' +
      [184, 200, 216].map(x => '<rect x="' + (x - 4) + '" y="96" width="8" height="30" fill="#bfb8a8"/>').join("") +
      '<rect x="174" y="36" width="52" height="46" fill="#f6f3ec"/>' + cols + '<rect x="170" y="32" width="60" height="6" fill="#e6e2d8"/>' +
      /* figure on top (no face, just the form) */
      '<rect x="196" y="16" width="8" height="18" rx="3" fill="#d9d2c0"/><circle cx="200" cy="12" r="4" fill="#d9d2c0"/><path d="M204 18l10-8" stroke="#d9d2c0" stroke-width="3" stroke-linecap="round"/>' +
      flag(70, 120, 46, "") + flag(290, 116, 46, "ms-flag2") +
      palm(30, 210, 1.1) + palm(372, 214, 1) +
      '<g class="ms-bird"><path d="M100 50q4-4 8 0q4-4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      txt("SANTIAGO DE LOS CABALLEROS", 200, 244, 11, "#fff", 'letter-spacing="3"'),
      sky("msm", "#4fa3e0", "#cfe8f7"));
  }

  /* 3. Estadio Cibao at night: light towers, the stands, the diamond, a ball leaving the yard */
  function estadio() {
    const tower = (x) => '<rect x="' + (x - 2) + '" y="36" width="4" height="80" fill="#888"/><rect x="' + (x - 22) + '" y="22" width="44" height="18" fill="#333"/>' +
      [0, 1, 2, 3].map(i => '<circle class="ms-bl ms-bl' + (i + 1) + '" cx="' + (x - 15 + i * 10) + '" cy="31" r="4" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 22) + ' 40l-40 130h124l-40-130z" fill="#fffbe0" opacity=".06"/>';
    let crowd = "";
    for (let i = 0; i < 46; i++) crowd += '<circle class="ms-bob' + (i % 2 ? " ms-bob2" : "") + '" cx="' + (6 + i * 8.6) + '" cy="' + (104 + (i % 3) * 7) + '" r="3" fill="' + ["#e9e9e9", CORAL, GOLD, "#7fb2ff"][i % 4] + '" opacity=".75"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mse)"/>' +
      tower(60) + tower(340) +
      '<path d="M0 96h400v34h-400z" fill="#2c2f3a"/>' + crowd +
      '<rect x="0" y="128" width="400" height="8" fill="#0d4a2a"/>' +
      txt("ESTADIO CIBAO", 200, 124, 12, CREAM, 'letter-spacing="4"') +
      '<rect x="0" y="136" width="400" height="124" fill="#2f7d3a"/>' +
      '<path d="M200 248l-80-60l80-50l80 50z" fill="#b5784a"/><path d="M200 236l-60-48l60-38l60 38z" fill="#2f8a3e"/>' +
      [[200, 236], [140, 188], [200, 150], [260, 188]].map(p => '<rect x="' + (p[0] - 4) + '" y="' + (p[1] - 4) + '" width="8" height="8" fill="#fff" transform="rotate(45 ' + p[0] + ' ' + p[1] + ')"/>').join("") +
      '<circle cx="200" cy="196" r="7" fill="#b5784a"/>' +
      '<path d="M120 188l-120 60M280 188l120 60" stroke="#fff" stroke-width="1.5" opacity=".7"/>' +
      '<circle class="ms-hit" cx="196" cy="230" r="3.5" fill="#fff"/>' +
      person(206, 220, "#1b1b1b"),
      sky("mse", "#070b1e", "#1b2347"));
  }

  /* 4. Audubon Terrace, Broadway & 155 St: limestone Beaux-Arts fronts with Ionic columns, the terrace, the rider statue in the middle, flags */
  function terrace() {
    const front = (x, w) => { let c = ""; for (let i = 0; i < 4; i++) c += '<rect x="' + (x + 12 + i * (w - 24) / 3.4) + '" y="72" width="8" height="70" fill="#e9e1cf"/>';
      return '<rect x="' + x + '" y="60" width="' + w + '" height="90" fill="#d8ccb2"/><rect x="' + (x - 4) + '" y="54" width="' + (w + 8) + '" height="10" fill="#e9e1cf"/>' + c +
        '<rect x="' + x + '" y="142" width="' + w + '" height="8" fill="#c7b99c"/>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#mst)"/>' +
      front(10, 120) + front(270, 120) +
      '<rect x="140" y="80" width="120" height="70" fill="#cdbfa3"/>' +
      '<rect x="140" y="74" width="120" height="8" fill="#e9e1cf"/>' +
      [158, 186, 214, 242].map(x => '<rect x="' + (x - 6) + '" y="92" width="12" height="20" fill="#3a3f4a"/>').join("") +
      txt("HISPANIC SOCIETY", 200, 70, 9, "#5a4a30", 'letter-spacing="2"') +
      /* terrace + statue base */
      '<rect x="0" y="150" width="400" height="110" fill="#c9bfae"/><path d="M0 150h400" stroke="#a89c86" stroke-width="3"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 40) g += '<path d="M' + x + ' 150l-30 110" stroke="#b5aa96" stroke-width="1"/>'; return g; })() +
      '<rect x="168" y="150" width="64" height="44" fill="#a7a092"/><rect x="162" y="146" width="76" height="8" fill="#bdb6a6"/>' +
      /* rider on horse, bronze-green silhouette, no face detail */
      '<g fill="#5f7d6a"><ellipse cx="200" cy="122" rx="26" ry="11"/><path d="M216 118l14-22l8 3l-8 24z"/><path d="M228 94l14 4l-2 8l-14-4z"/>' +
      '<rect x="178" y="126" width="5" height="20"/><rect x="188" y="128" width="5" height="18"/><rect x="208" y="128" width="5" height="18"/><rect x="217" y="126" width="5" height="20"/>' +
      '<path d="M176 118q-12 4-10 22" stroke="#5f7d6a" stroke-width="4" fill="none"/>' +
      '<rect x="194" y="96" width="11" height="20" rx="4"/><circle cx="199" cy="90" r="5"/></g><path d="M204 100l22-34" stroke="#5f7d6a" stroke-width="3" stroke-linecap="round"/>' +
      '<g class="ms-cloud"><ellipse cx="40" cy="30" rx="28" ry="9" fill="#fff" opacity=".8"/></g>' +
      '<g class="ms-bird"><path d="M120 36q4-4 8 0q4-4 8 0" stroke="#333" stroke-width="2" fill="none"/><path d="M140 46q3-3 6 0q3-3 6 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      txt("BROADWAY &amp; 155 ST", 200, 232, 12, "#3a3020", 'letter-spacing="4"'),
      sky("mst", "#9cc8ee", "#f6e2c4"));
  }

  /* 5. Hamilton Terrace & W 141 St: Hamilton Grange behind (pale yellow clapboard, white porches and rails), the wall with MESSIAH tagged */
  function corner() {
    let rail = "";
    for (let x = 110; x < 290; x += 8) rail += '<rect x="' + x + '" y="112" width="2" height="12" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#msc)"/>' +
      '<g class="ms-cloud"><ellipse cx="40" cy="30" rx="26" ry="8" fill="#fff" opacity=".35"/></g>' +
      /* the Grange */
      '<path d="M120 50l80-26l80 26z" fill="#6b6f78"/><rect x="128" y="18" width="10" height="24" fill="#8a5a3a"/><rect x="262" y="18" width="10" height="24" fill="#8a5a3a"/>' +
      '<rect x="120" y="50" width="160" height="96" fill="#e9cf7e"/><rect x="104" y="80" width="192" height="4" fill="#fff"/>' +
      [140, 172, 224, 256].map(x => '<rect x="' + (x - 7) + '" y="58" width="14" height="18" fill="#3b4a5c"/><rect x="' + (x - 7) + '" y="90" width="14" height="20" fill="#ffd98a" class="ms-bl ms-bl' + ((x / 32 | 0) % 4 + 1) + '"/>').join("") +
      '<rect x="104" y="84" width="192" height="4" fill="#fff"/>' + rail + '<rect x="104" y="124" width="192" height="3" fill="#fff"/>' +
      [108, 140, 172, 228, 260, 292].map(x => '<rect x="' + (x - 2) + '" y="84" width="4" height="62" fill="#fff"/>').join("") +
      '<rect x="190" y="104" width="20" height="42" fill="#2e4a3a"/>' +
      txt("HAMILTON GRANGE", 200, 16, 9, "#fff", 'letter-spacing="3" opacity=".9"') +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#3b3a40"/>' +
      (() => { let b = ""; for (let y = 156; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#323137" stroke-width="1"/>'; return b; })() +
      '<ellipse class="ms-mist" cx="140" cy="192" rx="130" ry="32" fill="' + CORAL + '"/>' +
      tag("MESSIAH", 22, 208, 46, CORAL, -5) + tag("YOUNG MESSI", 196, 220, 18, GOLD, -4) + tag("TRAPEANDO", 230, 176, 15, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ms-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="#7fb2ff"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="294" y="66" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Hamilton Ter", 346, 82, 12, "#fff") +
      '<rect x="294" y="92" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 141 St", 346, 108, 12, "#fff") +
      '<circle class="ms-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("msc", "#2a4a8a", "#f08a5b"));
  }

  window.SCENES = { station: station, monumento: monumento, estadio: estadio, terrace: terrace, corner: corner };
})();
