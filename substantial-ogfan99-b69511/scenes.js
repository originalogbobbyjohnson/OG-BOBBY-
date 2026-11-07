/* Substantial (Prince George's County, Maryland — THE DMV region; Hydeout records with Nujabes, anime-con regular, teacher "Mr. Stan") opening scenes. 400 x 260 animated SVGs. CSS classes prefixed sb- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes sbblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.sb-blk{animation:sbblink 1s steps(1) infinite}.sb-blk2{animation-delay:.5s}' +
    '@keyframes sbflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.sb-flk{animation:sbflick 2.4s infinite}.sb-flk2{animation-delay:.9s}' +
    '@keyframes sbwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.sb-walk{animation:sbwalk 9s linear infinite}.sb-walk2{animation-delay:-3s}.sb-walk3{animation-delay:-6s}' +
    '@keyframes sbwalkb{from{transform:translateX(440px)}to{transform:translateX(-40px)}}.sb-walkb{animation:sbwalkb 10s linear infinite}.sb-walkb2{animation-delay:-5s}' +
    '@keyframes sbpetal{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-50px,280px) rotate(360deg)}}.sb-pet{animation:sbpetal 6s linear infinite}.sb-pet2{animation-delay:-2s}.sb-pet3{animation-delay:-4s}' +
    '@keyframes sbroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.sb-car{animation:sbroll 6s linear infinite}.sb-car2{animation-duration:8s;animation-delay:-4s}' +
    '@keyframes sbshim{0%,100%{opacity:.25}50%{opacity:.85}}.sb-shim{animation:sbshim 2s ease-in-out infinite}.sb-shim2{animation-delay:-1s}' +
    '@keyframes sbspot{0%,100%{opacity:.18}50%{opacity:.4}}.sb-spot{animation:sbspot 3s ease-in-out infinite}' +
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
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 14) + '" fill="#3a2a1e"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (c || "#2f5a32") + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + (c || "#2f5a32") + '" opacity=".85"/>';
  /* WMATA line bullet */
  const bullet = (x, y, color, label) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#fff">' + label + '</text>';
  const GOLD = "#f2c14e", PINK = "#f49ac1", TEAL = "#4fc3c8", ORANGE = "#ed8b00";
  const person = (x, c, h) => '<g transform="translate(' + x + ',0)"><circle cx="0" cy="' + (196 - h) + '" r="4" fill="#1a1a22"/><rect x="-4" y="' + (200 - h) + '" width="8" height="' + (h - 10) + '" rx="3" fill="' + c + '"/><path d="M-2 ' + (190) + 'v10M2 190v10" stroke="#1a1a22" stroke-width="2.5"/></g>';

  /* 1. Landover station (Orange Line), out in Prince George's County: open-air platform under the gull-wing concrete canopy, an Orange Line train pulling in */
  function sbstation() {
    const car = (x) => '<rect x="' + x + '" y="128" width="168" height="62" rx="5" fill="#c4c9ce" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="170" width="168" height="4" fill="' + ORANGE + '"/><rect x="' + x + '" y="175" width="168" height="2" fill="#1f4e9a"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="138" width="26" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + (x + 66) + '" y="136" width="16" height="44" fill="#9ea4aa"/><path d="M' + (x + 74) + ' 136v44" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 26) + '" cy="192" r="5" fill="#222"/><circle cx="' + (x + 142) + '" cy="192" r="5" fill="#222"/>';
    const cab = '<path d="M348 190v-58q0-4 4-4h30q12 4 16 22v40z" fill="#c4c9ce" stroke="#6b7177" stroke-width="1.5"/><path d="M372 134h12q8 4 11 18h-23z" fill="#11161c"/>' +
      '<rect x="348" y="170" width="50" height="4" fill="' + ORANGE + '"/><rect x="374" y="140" width="20" height="7" rx="1" fill="#000"/><text x="384" y="145.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="5" fill="#ffb03c">ORANGE</text>' +
      '<circle cx="392" cy="180" r="3" fill="#fff6c2" class="sb-flk"/><circle cx="370" cy="192" r="5" fill="#222"/>';
    let edge = "";
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#ffd27a" class="sb-blk' + (x % 52 ? " sb-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ss1)"/>' + stars(12) +
      tree(30, 100, 22, "#22402a") + tree(372, 96, 24, "#22402a") + tree(200, 106, 16, "#2a4a30") +
      /* gull-wing canopy: two shallow concrete wings meeting at a center spine */
      '<path d="M0 50L200 72L400 50v10L200 84L0 60z" fill="#c2bcae"/><path d="M0 60L200 84L400 60v4L200 88L0 64z" fill="#8a857a"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 5) + '" y="' + (x === 200 ? 86 : 68) + '" width="10" height="' + (x === 200 ? 42 : 60) + '" fill="#9e988b"/>').join("") +
      '<rect x="0" y="122" width="400" height="6" fill="#54504a"/>' +
      '<g class="anim-train">' + car(4) + car(176) + cab + '</g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#8c4a3a"/>' +
      /* brown pylon with the orange band */
      '<rect x="18" y="140" width="14" height="64" fill="#4a3628"/><rect x="18" y="140" width="14" height="10" fill="' + ORANGE + '"/>' +
      /* station sign */
      '<rect x="80" y="212" width="240" height="40" rx="3" fill="#2b2119" stroke="#fff" stroke-width="1.5"/>' +
      bullet(102, 232, ORANGE, "OR") +
      '<text x="212" y="237" text-anchor="middle" ' + F + ' font-weight="700" font-size="18" fill="#fff">Landover</text>' +
      '<text x="212" y="248" text-anchor="middle" ' + F + ' font-size="7" fill="#e8dccb">PRINCE GEORGE\'S COUNTY, MARYLAND</text>',
      sky("ss1", "#1a2448", "#d98a5a"));
  }

  /* 2. Shibuya, Tokyo at night: the scramble crossing where the Hydeout records with Nujabes were born, neon blocks, cherry petals drifting */
  function sbshibuya() {
    let zebra = "";
    for (let i = 0; i < 16; i++) zebra += '<rect x="' + (10 + i * 24) + '" y="206" width="14" height="40" fill="#e9e9ee" opacity=".85"/>';
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    let wins = "";
    for (let i = 0; i < 30; i++) wins += '<rect x="' + (14 + (i % 10) * 38) + '" y="' + (70 + Math.floor(i / 10) * 26) + '" width="8" height="5" fill="#ffe7a8" opacity=".6" class="sb-shim' + (i % 2 ? " sb-shim2" : "") + '"/>';
    const petal = (x, y, k) => '<g class="sb-pet' + k + '"><ellipse cx="' + x + '" cy="' + y + '" rx="3" ry="1.8" fill="' + PINK + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ss2)"/>' + stars(8) +
      tower(0, 70, 150, "#1c1a2e") + tower(66, 60, 120, "#24203a") + tower(124, 90, 168, "#1a1830") + tower(212, 70, 132, "#26223e") + tower(280, 120, 156, "#1c1a2e") + wins +
      /* glowing billboards (no brands) */
      '<rect x="122" y="36" width="94" height="40" rx="2" fill="' + PINK + '" class="sb-flk"/><rect x="128" y="42" width="82" height="28" fill="#2a1430" opacity=".35"/>' +
      '<text x="169" y="62" text-anchor="middle" ' + A + ' font-size="14" fill="#fff" textLength="70" lengthAdjust="spacingAndGlyphs">HYDEOUT</text>' +
      '<rect x="292" y="50" width="96" height="30" rx="2" fill="' + TEAL + '" class="sb-flk sb-flk2"/><text x="340" y="70" text-anchor="middle" ' + A + ' font-size="13" fill="#0e0f1a" letter-spacing="1">SHIBUYA</text>' +
      '<rect x="8" y="60" width="58" height="22" rx="2" fill="' + GOLD + '" opacity=".9"/><text x="37" y="75" text-anchor="middle" ' + A + ' font-size="10" fill="#1a1830" textLength="46" lengthAdjust="spacingAndGlyphs">RECORDS</text>' +
      /* vertical neon strips */
      '<rect x="222" y="66" width="10" height="70" fill="#ff6a5a" class="sb-shim"/><rect x="78" y="80" width="8" height="56" fill="' + GOLD + '" class="sb-shim sb-shim2"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2a34"/>' + zebra +
      /* crowd crossing */
      '<g class="sb-walk">' + person(0, TEAL, 30) + '</g><g class="sb-walk sb-walk2">' + person(0, GOLD, 28) + '</g><g class="sb-walk sb-walk3">' + person(0, "#e9e9ee", 31) + '</g>' +
      '<g class="sb-walkb">' + person(0, PINK, 29) + '</g><g class="sb-walkb sb-walkb2">' + person(0, "#9b7be0", 30) + '</g>' +
      petal(60, 0, 1) + petal(180, 10, 2) + petal(300, 0, 3) + petal(360, 30, 1) + petal(120, 40, 3),
      sky("ss2", "#0a0a1e", "#3a2050"));
  }

  /* 3. The Walter E. Washington Convention Center in D.C.: the long glass-and-limestone front on Mount Vernon Place, where he rocks the anime-con stage every summer; fans in costume walking in */
  function sbcon() {
    let glass = "";
    for (let i = 0; i < 18; i++) glass += '<rect x="' + (14 + i * 21) + '" y="78" width="18" height="74" fill="#7fb6d0" opacity="' + (i % 3 ? .55 : .75) + '"/>';
    let mull = "";
    for (let y = 92; y < 152; y += 14) mull += '<path d="M12 ' + y + 'H392" stroke="#d9e4ea" stroke-width=".8" opacity=".6"/>';
    const cos = (k, c, cape) => '<g class="' + k + '"><circle cx="0" cy="166" r="5" fill="' + c + '"/><path d="M-5 170h10l3 24h-16z" fill="' + c + '"/>' + (cape ? '<path d="M-5 172l-8 22h6z" fill="' + PINK + '"/>' : "") + '<path d="M-3 194v8M3 194v8" stroke="#1a1a22" stroke-width="2.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ss3)"/>' +
      /* limestone body + overhanging roof */
      '<rect x="6" y="64" width="388" height="100" fill="#d8cfbd"/><rect x="0" y="56" width="400" height="10" fill="#bfb5a2"/><rect x="0" y="66" width="400" height="3" fill="#8f8775"/>' +
      glass + mull +
      [12, 138, 264, 390].map(x => '<rect x="' + (x - 3) + '" y="70" width="6" height="94" fill="#b0a690"/>').join("") +
      /* banners */
      '<rect x="60" y="84" width="34" height="58" fill="' + PINK + '"/><text x="77" y="118" text-anchor="middle" ' + A + ' font-size="9" fill="#fff" transform="rotate(-90 77 113)">ANIME CON</text>' +
      '<rect x="306" y="84" width="34" height="58" fill="' + TEAL + '"/><text x="323" y="118" text-anchor="middle" ' + A + ' font-size="9" fill="#0e0f1a" transform="rotate(-90 323 113)">LIVE MUSIC</text>' +
      '<rect x="118" y="30" width="164" height="22" rx="3" fill="#1b2442" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="45" text-anchor="middle" ' + A + ' font-size="11" fill="' + GOLD + '" textLength="140" lengthAdjust="spacingAndGlyphs">CONVENTION CENTER</text>' +
      /* plaza + sidewalk */
      '<rect x="0" y="164" width="400" height="40" fill="#b9b2a4"/><rect x="0" y="204" width="400" height="56" fill="#3a3a44"/>' +
      tree(26, 150, 14, "#3a6a3a") + tree(374, 150, 14, "#3a6a3a") +
      '<g transform="translate(0,0)">' + '<g class="sb-walk">' + cos("", GOLD, true) + '</g><g class="sb-walk sb-walk2">' + cos("", "#9b7be0", false) + '</g><g class="sb-walk sb-walk3">' + cos("", TEAL, true) + '</g></g>' +
      '<rect x="86" y="214" width="228" height="34" rx="3" fill="#1b2442" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="229" text-anchor="middle" ' + A + ' font-size="12" fill="' + GOLD + '" textLength="200" lengthAdjust="spacingAndGlyphs">MOUNT VERNON PLACE NW</text>' +
      '<text x="200" y="242" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#cfe0ff">WASHINGTON, D.C. · CON SEASON</text>',
      sky("ss3", "#4a7ab8", "#f2c9a0"));
  }

  /* 4. Prince George's African American Museum and Cultural Center: the gallery wall that hung his album-cover art in 2016, spotlights glowing */
  function sbmuseum() {
    const frame = (x, y, w, h, inner) => '<rect x="' + (x - 4) + '" y="' + (y - 4) + '" width="' + (w + 8) + '" height="' + (h + 8) + '" fill="#2a1a10"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#f4efe2"/>' + inner;
    const art1 = '<rect x="44" y="74" width="72" height="72" fill="' + TEAL + '"/><circle cx="80" cy="110" r="22" fill="' + GOLD + '"/><circle cx="80" cy="110" r="8" fill="#0e0f1a"/>';
    const art2 = '<rect x="164" y="64" width="72" height="92" fill="#1a1830"/><path d="M164 156l36-50 36 50z" fill="' + PINK + '"/><circle cx="214" cy="84" r="9" fill="' + GOLD + '"/>';
    const art3 = '<rect x="284" y="74" width="72" height="72" fill="' + GOLD + '"/><path d="M290 140q30-60 60 0" stroke="#0e0f1a" stroke-width="5" fill="none"/><path d="M300 100h40M300 112h40" stroke="#b03a2e" stroke-width="4"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe7d6"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#3a3a44"/>' +
      [80, 200, 320].map(x => '<rect x="' + (x - 6) + '" y="14" width="12" height="8" fill="#111"/><path d="M' + (x - 6) + ' 22L' + (x - 40) + ' 170H' + (x + 40) + 'L' + (x + 6) + ' 22z" fill="#fff6c8" class="sb-spot"/>').join("") +
      frame(44, 74, 72, 72, art1) + frame(164, 64, 72, 92, art2) + frame(284, 74, 72, 72, art3) +
      '<rect x="68" y="160" width="24" height="8" fill="#fff" stroke="#999" stroke-width=".6"/><rect x="188" y="168" width="24" height="8" fill="#fff" stroke="#999" stroke-width=".6"/><rect x="308" y="160" width="24" height="8" fill="#fff" stroke="#999" stroke-width=".6"/>' +
      /* wood floor */
      '<rect x="0" y="190" width="400" height="70" fill="#a8743a"/>' + [0, 1, 2, 3, 4].map(i => '<path d="M0 ' + (198 + i * 13) + 'H400" stroke="#8a5a2a" stroke-width="1"/>').join("") +
      '<rect x="0" y="186" width="400" height="5" fill="#5a3a1a"/>' +
      '<g class="sb-walk"><g transform="translate(0,0)">' + person(0, "#3a3a46", 34) + '</g></g>' +
      '<rect x="34" y="212" width="332" height="38" rx="3" fill="#1b2442" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="228" text-anchor="middle" ' + A + ' font-size="11.5" fill="' + GOLD + '" textLength="306" lengthAdjust="spacingAndGlyphs">AFRICAN AMERICAN MUSEUM &amp; CULTURAL CENTER</text>' +
      '<text x="200" y="242" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#cfe0ff">PRINCE GEORGE\'S COUNTY · THROUGH THEIR EYES</text>');
  }

  /* 5. The corner: Landover Rd & Brightseat Rd, the big stadium bowl lit up behind */
  function sbcorner() {
    let lights = "";
    for (let i = 0; i < 9; i++) lights += '<circle cx="' + (70 + i * 33) + '" cy="44" r="2.2" fill="#fffbe0" class="sb-shim' + (i % 2 ? " sb-shim2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#14100e"/>' +
      '<rect x="0" y="0" width="400" height="104" fill="url(#ss5)"/>' + stars(10) +
      /* stadium bowl: tiers + light towers */
      '<path d="M40 100q160-70 320 0z" fill="#3a3f4a"/><path d="M58 100q142-56 284 0z" fill="#4a505c"/><path d="M80 100q120-40 240 0z" fill="#2a2e38"/>' +
      '<path d="M40 100q160-70 320 0" fill="none" stroke="#8a919c" stroke-width="2"/>' + lights +
      [60, 340].map(x => '<rect x="' + (x - 2) + '" y="34" width="4" height="66" fill="#6a707a"/><rect x="' + (x - 12) + '" y="26" width="24" height="10" fill="#fffbe0" class="sb-flk"/>').join("") +
      bricks(104, 212, "#6b3428") +
      tag("SUBSTANTIAL", 12, 166, 38, GOLD, -5) + tag("HYDEOUT", 30, 202, 20, TEAL, -3) + tag("MR. STAN", 196, 198, 20, PINK, -4) +
      '<rect x="0" y="212" width="400" height="48" fill="#8d8b85"/><rect x="0" y="210" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="sb-car sb-car2"><rect x="0" y="236" width="56" height="16" rx="5" fill="' + TEAL + '"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="44" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="336" y="58" width="5" height="156" fill="#4a5058"/>' +
      '<rect x="262" y="56" width="132" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="328" y="71" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">Landover Rd</text>' +
      '<rect x="262" y="80" width="132" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="328" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">Brightseat Rd</text>' +
      '<rect x="300" y="122" width="84" height="30" rx="3" fill="#f4f1e6" stroke="#222" stroke-width="1.5"/>' +
      '<text x="342" y="134" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#222">PRINCE</text>' +
      '<text x="342" y="146" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#222">GEORGE\'S CO.</text>',
      sky("ss5", "#0b1430", "#4a3a5a"));
  }

  window.SCENES = { sbstation, sbshibuya, sbcon, sbmuseum, sbcorner };
})();
