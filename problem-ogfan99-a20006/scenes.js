/* problem scenes (Regions tab: Los Angeles + SoCal; Compton). CSS classes prefixed pm- (the page's own anim-train is kept).
   1 Rosecrans station, Metro J Line: the busway platform down in the median of the 110 Harbor Freeway, the Rosecrans Ave overpass above, a silver J Line bus sliding in.
   2 The diamond lane (his crew and label, Diamond Lane): the 110 at night, the white diamonds painted in the carpool lane, the overhead sign, cars streaking by.
   3 The Wurzburg Residence, Germany: he was born in Wurzburg. The pale sandstone baroque palace, grey slate roofs, the fountain in the court.
   4 Green chili from Ramona's ("Just made a left on Western / Got a green chili from Ramona's", Betta Watch Yo Self): the little burrito stand on Western Ave, steam rising.
   5 E Rosecrans Ave and S Central Ave, Compton (two of his song titles, "Rosecrans" and "Central Ave"): green signs, PROBLEM tagged, the San Gabriel Mountains behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.pm-flk{animation:pmflick 2.6s infinite}' +
    '@keyframes pmglow{0%,100%{opacity:.4}50%{opacity:1}}.pm-glow{animation:pmglow 1.8s ease-in-out infinite}.pm-g2{animation-delay:-.9s}' +
    '@keyframes pmcar{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.pm-car{animation:pmcar 5s linear infinite}.pm-car2{animation-delay:-2.5s}' +
    '@keyframes pmcarL{from{transform:translateX(500px)}to{transform:translateX(-100px)}}.pm-carL{animation:pmcarL 6s linear infinite}.pm-carL2{animation-delay:-3s}' +
    '@keyframes pmstreak{from{transform:translateX(-160px)}to{transform:translateX(460px)}}.pm-streak{animation:pmstreak 1.6s linear infinite}.pm-s2{animation-delay:-.5s}.pm-s3{animation-delay:-1.1s}' +
    '@keyframes pmsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.pm-sway{transform-box:fill-box;transform-origin:50% 100%;animation:pmsway 3.4s ease-in-out infinite}' +
    '@keyframes pmflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-8deg)}}.pm-flag{transform-box:fill-box;transform-origin:0 50%;animation:pmflag 1.5s ease-in-out infinite}' +
    '@keyframes pmspray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.pm-spray{transform-box:fill-box;transform-origin:50% 100%;animation:pmspray 1s ease-in-out infinite}' +
    '@keyframes pmsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-28px);opacity:0}}.pm-stm{animation:pmsteam 2.2s ease-out infinite}.pm-stm2{animation-delay:-1.1s}' +
    '@keyframes pmtw{0%,100%{opacity:.2}50%{opacity:1}}.pm-tw{animation:pmtw 1.6s ease-in-out infinite}.pm-tw2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="pm-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const diamond = (x, y, s, f) => '<path d="M' + x + ' ' + (y - s) + 'l' + (s * 0.7) + ' ' + s + 'l-' + (s * 0.7) + ' ' + s + 'l-' + (s * 0.7) + ' -' + s + 'z" fill="' + f + '"/>';
  const ICE = "#5fd3f3", PURP = "#7b3fe4", GOLD = "#f2c14e", JLINE = "#a3a9b0";

  /* 1. Rosecrans station, Metro J Line, in the 110 median */
  function pmstation() {
    let win = ""; for (let x = 40; x < 290; x += 34) win += '<rect x="' + x + '" y="128" width="26" height="22" rx="3" fill="#1f2a36"/>';
    const bus = '<g class="anim-train"><rect x="20" y="118" width="290" height="58" rx="10" fill="#d9dde1" stroke="#7d848c" stroke-width="2"/>' + win +
      '<rect x="20" y="156" width="290" height="6" fill="' + JLINE + '"/><rect x="150" y="118" width="6" height="58" fill="#3a3e46"/>' +
      '<rect x="292" y="124" width="14" height="30" rx="3" fill="#1f2a36"/><circle cx="300" cy="168" r="4" fill="#fff6c2"/>' + bullet(250, 141, "J", JLINE) +
      '<circle cx="60" cy="178" r="10" fill="#111"/><circle cx="60" cy="178" r="4" fill="#888"/><circle cx="200" cy="178" r="10" fill="#111"/><circle cx="200" cy="178" r="4" fill="#888"/><circle cx="270" cy="178" r="10" fill="#111"/><circle cx="270" cy="178" r="4" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pms1)"/>' +
      palm(26, 74, 44) + palm(374, 74, 52) +
      /* Rosecrans Ave overpass */
      '<rect x="0" y="62" width="400" height="22" fill="#c4bdae"/><rect x="0" y="58" width="400" height="5" fill="#8b857a"/>' +
      car(20, 34, "#c44", "pm-car") + car(20, 34, "#ececec", "pm-car pm-car2") +
      '<rect x="0" y="84" width="400" height="4" fill="#9a9384"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 8) + '" y="88" width="16" height="96" fill="#b5ad9c"/>').join("") +
      /* far freeway lanes */
      '<rect x="0" y="96" width="400" height="18" fill="#56585e"/>' + car(0, 88, "#2f6fd6", "pm-carL") +
      /* platform canopy */
      '<rect x="0" y="108" width="400" height="6" fill="#4a4e55"/>' +
      '<rect x="0" y="176" width="400" height="8" fill="#6d6d6d"/>' + bus +
      '<rect x="0" y="184" width="400" height="8" fill="#eab308"/><rect x="0" y="192" width="400" height="24" fill="#b9b3a8"/>' +
      '<rect x="104" y="196" width="192" height="18" rx="2" fill="#111"/><text x="182" y="209" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Rosecrans</text>' +
      '<circle cx="270" cy="205" r="7.5" fill="' + JLINE + '"/><text x="270" y="209" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">J</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4c52"/><path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 220, "#e6e0d0", "pm-car") + car(0, 220, PURP, "pm-car pm-car2") +
      '<path d="M352 196h30v10q0 14 -15 20q-15 -6 -15 -20z" fill="#1f4fa3" stroke="#fff" stroke-width="2"/><rect x="352" y="196" width="30" height="7" fill="#c8102e"/><text x="367" y="218" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">110</text>',
      sky("pms1", "#9ccbec", "#f1e3c6"));
  }

  /* 2. The diamond lane at night */
  function pmlane() {
    const lanes = '<path d="M200 96L0 260M200 96L400 260" stroke="#d8d8d8" stroke-width="3"/><path d="M200 96L130 260M200 96L270 260" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="14 12"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pms2)"/>' +
      [[40, 30], [110, 18], [300, 26], [360, 50], [250, 12], [160, 40]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.5" fill="#fff" class="pm-tw' + (i % 2 ? " pm-tw2" : "") + '"/>').join("") +
      /* city glow at the horizon */
      '<path d="M0 96h400v-8l-30 -4v-14h-16v10l-20 -2v-22h-14v24h-26v-12h-18v14l-40 2v-10h-14v10l-40 -2v-16h-18v18l-30 2v-8h-20v10l-40 2z" fill="#1b1430"/>' +
      '<path d="M0 96h400v164H0z" fill="#2b2c33"/>' + lanes +
      /* the white diamonds in the carpool lane */
      diamond(200, 112, 4, "#fff") + diamond(197, 140, 7, "#fff") + diamond(190, 184, 11, "#fff") + diamond(180, 240, 16, "#fff") +
      /* overhead sign gantry */
      '<rect x="20" y="40" width="6" height="70" fill="#6b6f76"/><rect x="374" y="40" width="6" height="70" fill="#6b6f76"/><rect x="20" y="40" width="360" height="6" fill="#6b6f76"/>' +
      '<rect x="120" y="46" width="160" height="40" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' + diamond(146, 66, 10, "#111") +
      '<text x="214" y="62" text-anchor="middle" ' + font + ' font-size="12" fill="#111">CARPOOL</text><text x="214" y="78" text-anchor="middle" ' + font + ' font-size="10" fill="#111">2+ PER VEHICLE</text>' +
      '<rect x="300" y="50" width="62" height="32" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="331" y="64" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">110 South</text><text x="331" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">Compton</text>' +
      /* light streaks */
      '<g class="pm-streak"><rect x="0" y="206" width="120" height="3" fill="#ff4b4b" opacity=".8"/></g><g class="pm-streak pm-s2"><rect x="0" y="222" width="150" height="3" fill="#fff3b0" opacity=".85"/></g><g class="pm-streak pm-s3"><rect x="0" y="246" width="140" height="3" fill="#ff4b4b" opacity=".75"/></g>' +
      /* sparkle on the big diamond */
      '<g class="pm-glow">' + diamond(180, 240, 6, ICE) + '</g>' +
      '<text x="200" y="128" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="20" fill="' + ICE + '" stroke="#000" stroke-width="2.5" paint-order="stroke" class="pm-glow pm-g2">DIAMOND LANE</text>',
      sky("pms2", "#0d0a1c", "#3b2a5a"));
  }

  /* 3. The Wurzburg Residence */
  function pmwurz() {
    const wins = (x0, x1, y) => { let s = ""; for (let x = x0; x <= x1; x += 18) s += '<rect x="' + x + '" y="' + y + '" width="8" height="14" rx="3" fill="#5a6a7a"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#pms3)"/>' +
      /* wings */
      '<rect x="10" y="96" width="110" height="96" fill="#ecd9a8" stroke="#bfa66a" stroke-width="1.5"/><path d="M6 96l14 -20h90l14 20z" fill="#7c858c"/>' + wins(22, 110, 112) + wins(22, 110, 144) + wins(22, 110, 172) +
      '<rect x="280" y="96" width="110" height="96" fill="#ecd9a8" stroke="#bfa66a" stroke-width="1.5"/><path d="M276 96l14 -20h90l14 20z" fill="#7c858c"/>' + wins(292, 380, 112) + wins(292, 380, 144) + wins(292, 380, 172) +
      /* center block */
      '<rect x="120" y="80" width="160" height="112" fill="#f1e2b6" stroke="#bfa66a" stroke-width="1.5"/><path d="M116 80l16 -24h136l16 24z" fill="#7c858c"/>' +
      '<path d="M176 56q24 -24 48 0z" fill="#7c858c"/><path d="M168 80l32 -22l32 22z" fill="#e6d29f" stroke="#bfa66a"/>' +
      [140, 160, 180, 220, 240, 260].map(x => '<rect x="' + (x - 4) + '" y="96" width="8" height="16" rx="3" fill="#5a6a7a"/><rect x="' + (x - 4) + '" y="128" width="8" height="18" rx="3" fill="#5a6a7a"/>').join("") +
      [176, 192, 208, 224].map(x => '<rect x="' + (x - 2) + '" y="90" width="4" height="102" fill="#e2cf98"/>').join("") +
      '<path d="M184 192v-34q16 -16 32 0v34z" fill="#4a3a2a"/>' +
      /* flag on the roof */
      '<rect x="199" y="14" width="2" height="30" fill="#555"/><g class="pm-flag"><rect x="201" y="14" width="22" height="5" fill="#111"/><rect x="201" y="19" width="22" height="5" fill="#dd0000"/><rect x="201" y="24" width="22" height="5" fill="#ffce00"/></g>' +
      /* court + fountain */
      '<rect x="0" y="192" width="400" height="68" fill="#d9cdb0"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 192l-30 68" stroke="#c7b998" stroke-width="1"/>').join("") +
      '<ellipse cx="200" cy="232" rx="56" ry="12" fill="#9aa7ad" stroke="#7a868c" stroke-width="2"/><ellipse cx="200" cy="230" rx="48" ry="8" fill="#6fa6c4"/>' +
      '<rect x="194" y="200" width="12" height="30" fill="#c9bfa6"/><circle cx="200" cy="198" r="6" fill="#c9bfa6"/>' +
      '<g class="pm-spray"><path d="M200 196q-18 4 -26 30M200 196q18 4 26 30M200 196v-14" stroke="#d6eef8" stroke-width="2.5" fill="none"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#6b5a3a" letter-spacing="2">WÜRZBURG · WHERE HE WAS BORN</text>',
      sky("pms3", "#7fb2e0", "#e3eef4"));
  }

  /* 4. Green chili on Western Ave */
  function pmchili() {
    return svg(
      '<rect width="400" height="260" fill="url(#pms4)"/>' +
      palm(30, 190, 120) + palm(372, 190, 104, "#3d6b40") +
      /* stand */
      '<rect x="70" y="74" width="260" height="116" fill="#f4ead2" stroke="#b9a984" stroke-width="2"/>' +
      '<path d="M60 74h280l-14 26h-252z" fill="#2f7a3a"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (88 + i * 38) + ' 74l-6 26" stroke="#e8f2e0" stroke-width="5"/>').join("") +
      '<g class="pm-flk"><rect x="104" y="40" width="192" height="30" rx="4" fill="#7a1f1f" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '" letter-spacing="1">GREEN CHILI BURRITOS</text></g>' +
      '<rect x="92" y="108" width="216" height="52" fill="#25323e"/><rect x="92" y="160" width="216" height="12" fill="#c9b994"/>' +
      /* menu board */
      '<rect x="104" y="114" width="88" height="40" fill="#222"/><text x="148" y="126" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">GREEN CHILI</text><text x="148" y="137" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RED CHILI</text><text x="148" y="148" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BEAN & CHEESE</text>' +
      /* burrito + steam */
      '<path d="M220 168q0 -14 22 -14h40q12 0 12 14z" fill="#f2deb0" stroke="#c9a86a" stroke-width="2"/><path d="M232 160q20 6 40 -2" stroke="#7aa35a" stroke-width="3" fill="none"/>' +
      '<g class="pm-stm"><path d="M240 150q-6 -8 0 -16q6 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/></g><g class="pm-stm pm-stm2"><path d="M264 150q-6 -8 0 -16q6 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/></g>' +
      /* street with Western Ave sign */
      '<rect x="0" y="190" width="400" height="12" fill="#c9c1ae"/><rect x="0" y="202" width="400" height="58" fill="#4a4c52"/><path d="M0 232h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="40" y="132" width="4" height="58" fill="#7d8288"/>' + sign(8, 126, 72, "Western Av", 10) +
      car(0, 210, PURP, "pm-car") + car(0, 210, "#e6e0d0", "pm-car pm-car2"),
      sky("pms4", "#f6b26b", "#fde7c2"));
  }

  /* 5. E Rosecrans Ave & S Central Ave, the San Gabriels behind */
  function pmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pms5)"/>' +
      '<path d="M0 120l40 -34l30 18l44 -46l40 30l36 -24l50 40l40 -30l50 36l40 -26l30 20v16H0z" fill="#7d7f9a"/>' +
      '<path d="M114 58l-14 14l10 -2l6 8l8 -8l8 4zM254 64l-12 10l8 0l6 6l6 -6l8 2z" fill="#f4f4f8"/>' +
      '<path d="M0 120h400v14H0z" fill="#a69a86"/>' + [20, 64, 102, 300, 344].map(x => '<path d="M' + x + ' 124l16 -10l16 10v10h-32z" fill="#c9b79a"/>').join("") +
      palm(34, 150, 110) + palm(368, 150, 96, "#3d6b40") + palm(330, 150, 70) +
      '<rect x="56" y="134" width="288" height="84" fill="#efe4cf"/><rect x="56" y="134" width="288" height="6" fill="#cdbd9e"/>' +
      tag("PROBLEM", 80, 190, 36, ICE, -5) + diamond(300, 168, 16, ICE) + '<g class="pm-glow">' + diamond(300, 168, 7, "#fff") + '</g>' +
      tag("DIAMOND LANE", 96, 210, 13, GOLD, -3) + tag("CHACHI", 250, 208, 15, PURP, -8) +
      '<rect x="0" y="218" width="400" height="12" fill="#c9c1ae"/><rect x="0" y="230" width="400" height="30" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="356" y="36" width="5" height="182" fill="#7d8288"/>' + sign(226, 38, 156, "E Rosecrans Av", 13) + sign(226, 64, 156, "S Central Av", 13),
      sky("pms5", "#86b9e6", "#f2e4c8"));
  }

  window.SCENES = { pmstation, pmlane, pmwurz, pmchili, pmcorner };
})();
