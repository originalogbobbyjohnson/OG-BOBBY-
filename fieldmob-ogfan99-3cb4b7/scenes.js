/* Field Mob scenes (Regions tab: More of the South; Albany, Georgia - "The Field", the semi-rural edge of Albany where Shawn Jay and Smoke grew up).
   CSS classes and ids prefixed fm- (the page's own anim-train is kept on the bus).
   1 Albany Transit bus pulling into the downtown station on North Jackson Street (Albany has no rail): pines, light poles, a stop sign-post.
   2 Monroe Comprehensive High School (green + gold, the Golden Tornadoes), where the two met battling in the school courtyard:
     two silhouettes with mics trading bars, a crowd bobbing, the green-and-gold school front.
   3 The Field - "Light Poles and Pine Trees": a red-clay dirt road between pines and wooden light poles, a candy-painted Chevy
     on big chrome 24s rolling by with the spokes spinning.
   4 Dougherty County pecan country ("Pecan country like catfish with grits" - Georgia): rows of pecan trees, pecans dropping, the red clay.
   5 Front St and Oglethorpe Blvd downtown, by the Flint River: green signs, FIELD MOB tagged with F.B.I. and CHEVY P, and behind it
     Ray Charles Plaza - the bronze Ray Charles at his baby grand on a slow-turning pedestal with water spilling into the pool
     (Ray's "Georgia on My Mind" is sampled on Georgia). Drawn as a plain bronze silhouette, no face.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const GREEN = "#6cc24a", GOLD = "#f2b632", PEACH = "#f08a5d", DG = "#2e6b22", CLAY = "#b5532e";
  const css = '<style>' +
    '@keyframes fmblink{0%,100%{opacity:1}50%{opacity:.2}}.fm-blink{animation:fmblink 1.1s infinite}.fm-blink2{animation-delay:-.55s}' +
    '@keyframes fmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.fm-bob{animation:fmbob .55s ease-in-out infinite}.fm-bob2{animation-delay:-.27s}' +
    '@keyframes fmsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.fm-sway{transform-box:fill-box;transform-origin:50% 100%;animation:fmsway 3s ease-in-out infinite}.fm-sway2{animation-delay:-1.5s}' +
    '@keyframes fmroll{from{transform:translateX(-170px)}to{transform:translateX(460px)}}.fm-roll{animation:fmroll 7s linear infinite}' +
    '@keyframes fmspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.fm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:fmspin .6s linear infinite}' +
    '@keyframes fmdrop{0%{transform:translateY(0);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(70px);opacity:0}}.fm-drop{animation:fmdrop 2.4s ease-in infinite}.fm-drop2{animation-delay:-.8s}.fm-drop3{animation-delay:-1.6s}' +
    '@keyframes fmturn{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}.fm-turn{transform-box:fill-box;transform-origin:50% 50%;animation:fmturn 12s ease-in-out infinite}' +
    '@keyframes fmwave{0%,100%{transform:translateX(0);opacity:.35}50%{transform:translateX(10px);opacity:.8}}.fm-wave{animation:fmwave 3s ease-in-out infinite}.fm-wave2{animation-delay:-1.5s}' +
    '@keyframes fmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.fm-sp{animation:fmspray 1.4s ease-out infinite}.fm-sp2{animation-delay:.5s}' +
    '@keyframes fmtw{0%,100%{opacity:.25}50%{opacity:1}}.fm-tw{animation:fmtw 1.8s ease-in-out infinite}.fm-tw2{animation-delay:-.9s}' +
    '@keyframes fmnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-40px);opacity:0}}.fm-note{animation:fmnote 2.6s ease-out infinite}.fm-note2{animation-delay:-1.3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 11) + '" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="fm-tw' + (i % 2 ? " fm-tw2" : "") + '" cx="' + ((i * 83 + 17) % 400) + '" cy="' + ((i * 37 + 11) % 90) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff"/>').join("");
  const pine = (x, base, h, c, cls) => '<g' + (cls ? ' class="' + cls + '"' : '') + '><rect x="' + (x - 2) + '" y="' + (base - h * 0.18) + '" width="4" height="' + (h * 0.18) + '" fill="#5a3a22"/>' +
    '<path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.18) + ' ' + (h * 0.32) + 'h' + (-h * 0.08) + 'l' + (h * 0.22) + ' ' + (h * 0.26) + 'h' + (-h * 0.1) + 'l' + (h * 0.24) + ' ' + (h * 0.24) + 'h' + (-h * 0.92) +
    'l' + (h * 0.24) + ' ' + (-h * 0.24) + 'h' + (-h * 0.1) + 'l' + (h * 0.22) + ' ' + (-h * 0.26) + 'h' + (-h * 0.08) + 'z" fill="' + (c || DG) + '"/></g>';
  const pole = (x, base, h, lit) => '<rect x="' + (x - 2) + '" y="' + (base - h) + '" width="4" height="' + h + '" fill="#6b4a2e"/><rect x="' + (x - 12) + '" y="' + (base - h + 8) + '" width="24" height="3" fill="#6b4a2e"/>' +
    '<path d="M' + x + ' ' + (base - h + 2) + 'h14v5" stroke="#555" stroke-width="2" fill="none"/><rect x="' + (x + 9) + '" y="' + (base - h + 7) + '" width="10" height="4" rx="1" fill="#777"/>' +
    (lit ? '<circle class="fm-blink" cx="' + (x + 14) + '" cy="' + (base - h + 13) + '" r="3" fill="#fff6c2"/>' : '');

  /* 1. Albany Transit bus at the downtown station, North Jackson Street */
  function fmstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (110 + i * 42) + '" y="152" width="32" height="22" rx="2" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="90" y="140" width="250" height="70" rx="10" fill="#f4f4f2" stroke="#9aa0a6" stroke-width="2"/>' + win +
      '<rect x="90" y="182" width="250" height="6" fill="' + DG + '"/><rect x="90" y="190" width="250" height="4" fill="' + GOLD + '"/>' +
      '<rect x="318" y="150" width="20" height="44" rx="2" fill="#1e2a33"/><rect x="246" y="142" width="70" height="10" rx="2" fill="#111"/>' +
      '<text x="281" y="150" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">DOWNTOWN</text>' +
      '<text x="200" y="202" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ALBANY TRANSIT</text>' +
      '<circle cx="130" cy="212" r="12" fill="#222"/><circle cx="130" cy="212" r="5" fill="#888"/><circle cx="300" cy="212" r="12" fill="#222"/><circle cx="300" cy="212" r="5" fill="#888"/>' +
      '<circle class="fm-blink" cx="336" cy="200" r="3" fill="#ffd36b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fms1)"/>' +
      /* low brick downtown blocks */
      '<g><rect x="10" y="84" width="70" height="86" fill="#9a5a3e"/><rect x="84" y="98" width="56" height="72" fill="#b9845e"/><rect x="250" y="90" width="66" height="80" fill="#8a4e36"/><rect x="320" y="76" width="70" height="94" fill="#a8704e"/></g>' +
      '<g fill="#f2d7a8" opacity=".85">' + [20, 40, 60, 94, 114, 260, 282, 330, 352, 372].map((x, i) => '<rect x="' + x + '" y="' + (i % 2 ? 104 : 120) + '" width="10" height="12"/>').join("") + '</g>' +
      pine(160, 140, 70, DG, "fm-sway") + pine(200, 140, 86, "#245a1c", "fm-sway fm-sway2") + pine(236, 140, 64, DG, "fm-sway") +
      '<rect x="0" y="168" width="400" height="10" fill="#cfcac0"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#3a3a3e"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* station canopy + stop flag */
      '<rect x="20" y="118" width="4" height="60" fill="#6b6b6b"/><rect x="62" y="118" width="4" height="60" fill="#6b6b6b"/><rect x="12" y="112" width="62" height="8" fill="' + DG + '"/>' +
      '<rect x="370" y="96" width="4" height="82" fill="#6b6b6b"/><rect x="350" y="96" width="44" height="26" rx="3" fill="' + DG + '"/><text x="372" y="113" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BUS</text>' +
      bus + label(95, 210, "N JACKSON ST · DOWNTOWN ALBANY, GA"),
      sky("fms1", "#6aa5da", "#f6d9a2"));
  }

  /* 2. Monroe Comprehensive High School, green + gold, the courtyard battle */
  function fmmonroe() {
    const kid = (x, c, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="128" r="11" fill="#1a1a1a"/><path d="M' + (x - 14) + ' 196v-38q0 -18 14 -18t14 18v38z" fill="' + c + '"/>' +
      '<rect x="' + (x - 12) + '" y="196" width="10" height="26" fill="#1a1a1a"/><rect x="' + (x + 2) + '" y="196" width="10" height="26" fill="#1a1a1a"/></g>';
    const crowd = Array.from({ length: 12 }, (_, i) => '<g class="fm-bob' + (i % 2 ? " fm-bob2" : "") + '"><circle cx="' + (12 + i * 34) + '" cy="210" r="9" fill="#222"/><rect x="' + (2 + i * 34) + '" y="216" width="20" height="30" rx="8" fill="#222"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fms2)"/>' +
      /* school front: tan brick with green trim */
      '<rect x="20" y="40" width="360" height="130" fill="#d6c3a0"/><rect x="20" y="40" width="360" height="12" fill="' + DG + '"/><rect x="20" y="158" width="360" height="12" fill="' + DG + '"/>' +
      '<g fill="#3b4a5a">' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="62" width="28" height="30"/>').join("") + '</g>' +
      '<rect x="140" y="30" width="120" height="26" rx="3" fill="' + GOLD + '" stroke="' + DG + '" stroke-width="2"/><text x="200" y="48" text-anchor="middle" ' + font + ' font-size="12" fill="' + DG + '">MONROE HIGH</text>' +
      '<text x="70" y="168" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">GOLDEN</text><text x="340" y="168" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">TORNADOES</text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#8fbf5a"/><rect x="0" y="170" width="400" height="8" fill="#c9c2b0"/>' +
      kid(150, GREEN, "fm-bob") + kid(250, GOLD, "fm-bob fm-bob2") +
      '<rect x="160" y="150" width="4" height="12" fill="#444" transform="rotate(30 162 156)"/><circle cx="168" cy="146" r="4" fill="#666"/>' +
      '<rect x="236" y="150" width="4" height="12" fill="#444" transform="rotate(-30 238 156)"/><circle cx="232" cy="146" r="4" fill="#666"/>' +
      '<g fill="' + DG + '" ' + font + ' font-size="12"><text class="fm-blink" x="168" y="112">BARS</text><text class="fm-blink fm-blink2" x="200" y="124">BARS</text></g>' +
      crowd + label(60, 280, "MONROE COMPREHENSIVE HIGH · WHERE THEY MET BATTLING"),
      sky("fms2", "#7cc0ea", "#e8f2d0"));
  }

  /* 3. The Field: light poles and pine trees, red clay road, the Chevy on 24s */
  function fmfield() {
    const wheel = (cx) => '<circle cx="' + cx + '" cy="206" r="15" fill="#1a1a1a"/><circle cx="' + cx + '" cy="206" r="11" fill="#e2e6ea"/><g class="fm-spin">' +
      [0, 60, 120].map(a => '<rect x="' + (cx - 1.5) + '" y="196" width="3" height="20" fill="#8a9096" transform="rotate(' + a + ' ' + cx + ' 206)"/>').join("") + '</g><circle cx="' + cx + '" cy="206" r="3" fill="' + GOLD + '"/>';
    const car = '<g class="fm-roll"><path d="M8 196l8 -18l26 -4l14 -18h44l16 18l22 4v18z" fill="' + PEACH + '" stroke="#7a2a12" stroke-width="2"/>' +
      '<path d="M60 160h36l12 14h-60z" fill="#1e2a33"/><rect x="132" y="182" width="8" height="5" fill="#fff6c2"/><path d="M16 186h120" stroke="#ffd2b8" stroke-width="2" opacity=".7"/>' + wheel(36) + wheel(114) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fms3)"/>' +
      '<circle cx="320" cy="56" r="26" fill="#ffd27a" opacity=".9"/>' +
      pine(20, 176, 120) + pine(62, 176, 96, "#245a1c") + pine(104, 176, 132) + pine(300, 176, 110, "#245a1c") + pine(344, 176, 136) + pine(386, 176, 100, "#245a1c") +
      pole(150, 176, 110, true) + pole(250, 176, 104, true) +
      '<path d="M150 70q50 14 100 6" stroke="#333" stroke-width="1.5" fill="none"/>' +
      '<rect x="0" y="174" width="400" height="86" fill="#7a9a3a"/>' +
      '<path d="M0 190h400v40h-400z" fill="' + CLAY + '"/><path d="M0 210h400" stroke="#d27a52" stroke-width="2" stroke-dasharray="6 14" opacity=".7"/>' +
      car + label(100, 200, "THE FIELD · LIGHT POLES & PINE TREES"),
      sky("fms3", "#ff9a5a", "#ffe0a8"));
  }

  /* 4. Dougherty County pecan country */
  function fmgrove() {
    const tree = (x, y, s) => '<g><rect x="' + (x - 4 * s) + '" y="' + (y - 4) + '" width="' + (8 * s) + '" height="' + (34 * s) + '" fill="#5a3a22"/>' +
      '<ellipse cx="' + x + '" cy="' + (y - 18 * s) + '" rx="' + (34 * s) + '" ry="' + (24 * s) + '" fill="#3f7a2a"/><ellipse cx="' + (x - 16 * s) + '" cy="' + (y - 8 * s) + '" rx="' + (20 * s) + '" ry="' + (14 * s) + '" fill="#356a22"/>' +
      '<ellipse cx="' + (x + 16 * s) + '" cy="' + (y - 10 * s) + '" rx="' + (20 * s) + '" ry="' + (14 * s) + '" fill="#4a8a32"/></g>';
    const nut = (x, y, cls) => '<ellipse class="' + cls + '" cx="' + x + '" cy="' + y + '" rx="4" ry="2.6" fill="#8a5a2a" stroke="#4a2a12" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fms4)"/>' +
      '<circle cx="340" cy="44" r="20" fill="#fff2b0"/><g fill="#fff" opacity=".85"><ellipse cx="90" cy="46" rx="34" ry="10"/><ellipse cx="112" cy="38" rx="20" ry="10"/><ellipse cx="230" cy="70" rx="30" ry="8"/></g>' +
      '<rect x="0" y="130" width="400" height="130" fill="' + CLAY + '"/>' +
      tree(60, 120, 0.8) + tree(150, 120, 0.8) + tree(250, 120, 0.8) + tree(340, 120, 0.8) +
      tree(30, 196, 1.2) + tree(200, 200, 1.3) + tree(370, 196, 1.2) +
      nut(186, 150, "fm-drop") + nut(214, 146, "fm-drop fm-drop2") + nut(196, 140, "fm-drop fm-drop3") + nut(24, 150, "fm-drop fm-drop2") + nut(370, 150, "fm-drop") +
      '<g fill="#8a5a2a">' + [110, 124, 280, 300, 316].map((x, i) => '<ellipse cx="' + x + '" cy="' + (222 + (i % 2) * 6) + '" rx="4" ry="2.6"/>').join("") + '</g>' +
      label(80, 240, "DOUGHERTY COUNTY · PECAN COUNTRY"),
      sky("fms4", "#8fd0f0", "#fff0c8"));
  }

  /* 5. Front St and Oglethorpe Blvd, Ray Charles Plaza by the Flint River behind */
  function fmcorner() {
    const statue = '<g class="fm-turn"><rect x="268" y="96" width="70" height="8" fill="#5a3a1a"/>' +
      /* baby grand piano in bronze */
      '<path d="M270 96v-20q0 -14 18 -14h20q30 0 30 16v18z" fill="#6a4320" stroke="#3a2210" stroke-width="2"/><rect x="270" y="92" width="40" height="5" fill="#e8dcc0"/>' +
      '<rect x="274" y="104" width="4" height="16" fill="#3a2210"/><rect x="330" y="104" width="4" height="16" fill="#3a2210"/>' +
      /* seated figure: plain bronze silhouette, no face */
      '<path d="M250 120v-22q0 -12 10 -14l8 4v32z" fill="#7a4e26"/><circle cx="258" cy="76" r="8" fill="#7a4e26"/><path d="M262 92l12 4" stroke="#7a4e26" stroke-width="5" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fms5)"/>' + stars(14) +
      /* Flint River */
      '<rect x="210" y="128" width="190" height="24" fill="#3a6a8a"/><path class="fm-wave" d="M220 140h40M290 136h40M350 144h30" stroke="#a8d0e8" stroke-width="2"/><path class="fm-wave fm-wave2" d="M240 148h30M316 146h30" stroke="#a8d0e8" stroke-width="2"/>' +
      '<g fill="#2a4a22">' + [220, 260, 380].map(x => '<ellipse cx="' + x + '" cy="122" rx="18" ry="12"/>').join("") + '</g>' +
      /* plaza pool + pedestal with water spilling */
      '<ellipse cx="300" cy="126" rx="70" ry="10" fill="#5aa0c8" stroke="#c9c2b0" stroke-width="3"/><rect x="262" y="116" width="76" height="8" fill="#9a9a9a"/>' +
      '<path class="fm-wave" d="M264 124v6M300 124v6M336 124v6" stroke="#cfe8f8" stroke-width="2"/>' + statue +
      '<g fill="' + GOLD + '" ' + font + ' font-size="14"><text class="fm-note" x="340" y="70">&#9834;</text><text class="fm-note fm-note2" x="320" y="60">&#9835;</text></g>' +
      /* wall */
      '<rect x="0" y="104" width="230" height="100" fill="#6a5a48"/><g stroke="#574a3a" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h230"/>').join("") + '</g>' +
      tag("F.B.I.", 20, 134, 18, GOLD, -3) +
      tag("FIELD", 14, 172, 40, GREEN, -6) + tag("MOB", 120, 186, 36, "#fff", -5) + tag("CHEVY P", 132, 140, 14, PEACH, -2) +
      '<g fill="' + GREEN + '"><circle class="fm-sp" cx="206" cy="166" r="3"/><circle class="fm-sp fm-sp2" cx="198" cy="174" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="350" y="152" width="6" height="54" fill="#6b6b6b"/>' + sign(300, 156, 86, "Front St", 11) + sign(278, 182, 116, "Oglethorpe Blvd", 10.5) +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>',
      sky("fms5", "#1b2a4a", "#c0703a"));
  }

  window.SCENES = { fmstation, fmmonroe, fmfield, fmgrove, fmcorner };
})();
