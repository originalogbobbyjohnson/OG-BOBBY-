/* bobmarley scenes (Regions tab: CARIBBEAN; born Nine Mile, St. Ann; raised in Trench Town, Kingston). CSS classes prefixed bm- (the page's own anim-train is kept).
   1 North Parade, Downtown Kingston: the JUTC bus hub; a yellow JUTC bus pulling in, black stop sign with the 22 / 30 / 31 (Downtown to Spanish Town Road, past Trench Town), the sky-blue-and-white Ward Theatre behind.
   2 Trench Town Culture Yard (6-8 Lower First Street): the 1940s government-yard block, cream walls, rust-red doors, zinc roof, long verandah, a log-wood fire with smoke.
   3 56 Hope Road (his Tuff Gong house, now the museum): white two-storey house with red roof and verandah, red-gold-green painted wall and gate, palms swaying.
   4 Nine Mile, St. Ann: the green hills where he was born, the small white mausoleum church with red-gold-green trim, three little birds flying over.
   5 First Street and West Road, Trench Town: green street signs, MARLEY tagged on the yard wall, the Blue Mountains behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bmsmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(-8px,-46px);opacity:0}}.bm-smk{animation:bmsmoke 3s ease-out infinite}.bm-smk2{animation-delay:-1s}.bm-smk3{animation-delay:-2s}' +
    '@keyframes bmflame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.7)}}.bm-fl{transform-box:fill-box;transform-origin:50% 100%;animation:bmflame .5s ease-in-out infinite}' +
    '@keyframes bmsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bm-palm{transform-box:fill-box;transform-origin:50% 100%;animation:bmsway 3.4s ease-in-out infinite}.bm-palm2{animation-delay:-1.7s}' +
    '@keyframes bmbird{from{transform:translate(-60px,0)}to{transform:translate(470px,-24px)}}.bm-bird{animation:bmbird 11s linear infinite}.bm-bird2{animation-delay:-.7s}.bm-bird3{animation-delay:-1.4s}' +
    '@keyframes bmflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.bm-wing{transform-box:fill-box;transform-origin:50% 100%;animation:bmflap .4s ease-in-out infinite}' +
    '@keyframes bmcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.bm-cl{animation:bmcloud 40s linear infinite}.bm-cl2{animation-delay:-20s}' +
    '@keyframes bmmist{0%,100%{opacity:.35;transform:translateX(0)}50%{opacity:.6;transform:translateX(12px)}}.bm-mist{animation:bmmist 6s ease-in-out infinite}' +
    '@keyframes bmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bm-sp{animation:bmspray 1.4s ease-out infinite}.bm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">' + txt + '</text>';
  const GOLD = "#f5c518", GREEN = "#1f9d3a", RED = "#d7262e";
  const rasta = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h / 3 + '" fill="' + RED + '"/><rect x="' + x + '" y="' + (y + h / 3) + '" width="' + w + '" height="' + h / 3 + '" fill="' + GOLD + '"/><rect x="' + x + '" y="' + (y + 2 * h / 3) + '" width="' + w + '" height="' + h / 3 + '" fill="' + GREEN + '"/>';
  const palm = (x, y, s, cls) => '<g class="bm-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q' + (4 * s) + ' -' + (40 * s) + ' ' + (2 * s) + ' -' + (80 * s) + '" stroke="#7a5a3a" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [[-34, -6], [-26, 12], [30, -8], [24, 12], [0, -26]].map(d => '<path d="M' + (x + 2 * s) + ' ' + (y - 80 * s) + 'q' + (d[0] * s / 2) + ' ' + (d[1] * s - 10 * s) + ' ' + (d[0] * s) + ' ' + (d[1] * s + 8 * s) + '" stroke="#2f7d32" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const bird = (cls, y) => '<g class="bm-bird ' + cls + '"><g transform="translate(0 ' + y + ')"><ellipse cx="10" cy="6" rx="6" ry="4" fill="#f5c518" stroke="#3a2a0a" stroke-width="1"/><circle cx="15" cy="4" r="2.6" fill="#f5c518" stroke="#3a2a0a" stroke-width="1"/><path d="M17 4l3 1l-3 1z" fill="#e07a1a"/>' +
    '<path class="bm-wing" d="M6 5q4 -8 8 0z" fill="#e0a810"/></g></g>';

  /* 1. North Parade, Downtown Kingston: JUTC bus */
  function bmbus() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="112" width="34" height="26" rx="3" fill="#1d262e"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="300" height="80" rx="10" fill="#ffcc00" stroke="#8a6d00" stroke-width="2"/>' + wins +
      '<rect x="40" y="150" width="300" height="6" fill="#222"/><rect x="306" y="108" width="30" height="40" rx="3" fill="#1d262e"/>' +
      '<rect x="304" y="102" width="34" height="8" rx="2" fill="#111"/><text x="321" y="109" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">22</text>' +
      '<path d="M310 160h22v12h-22z" fill="#0b8a3e"/><path d="M310 160l22 12M332 160l-22 12" stroke="#ffcc00" stroke-width="2.4"/><path d="M310 160l11 6l-11 6zM332 160l-11 6l11 6z" fill="#111"/>' +
      '<circle cx="90" cy="182" r="13" fill="#222"/><circle cx="90" cy="182" r="5" fill="#888"/><circle cx="286" cy="182" r="13" fill="#222"/><circle cx="286" cy="182" r="5" fill="#888"/>' +
      '<circle cx="334" cy="168" r="3.5" fill="#fff6c2"/></g>';
    const ward = '<rect x="96" y="40" width="208" height="90" fill="#9fd0ec"/><path d="M90 42h220l-110 -24z" fill="#e9f4fb" stroke="#ffffff" stroke-width="2"/>' +
      '<rect x="90" y="40" width="220" height="6" fill="#ffffff"/><rect x="90" y="84" width="220" height="5" fill="#ffffff"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (108 + i * 28) + ' 80v-22q8 -10 16 0v22z" fill="#ffffff"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (110 + i * 28) + '" y="94" width="12" height="30" fill="#ffffff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bm1)"/>' +
      '<g class="bm-cl"><ellipse cx="60" cy="30" rx="30" ry="9" fill="#fff" opacity=".9"/></g>' +
      ward + palm(36, 196, 1.1) + palm(374, 196, 1, "bm-palm2") +
      '<rect x="0" y="194" width="400" height="66" fill="#6b6b68"/><path d="M0 224h400" stroke="#f5f5f0" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="354" y="40" width="5" height="156" fill="#333"/>' +
      '<rect x="252" y="16" width="144" height="64" rx="3" fill="#111"/><text x="324" y="34" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">North Parade</text>' +
      '<text x="324" y="48" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="8.5" fill="#cfcfcf">DOWNTOWN KINGSTON</text>' +
      [["22", 286], ["30", 324], ["31", 362]].map(b => '<circle cx="' + b[1] + '" cy="64" r="11" fill="#ffcc00"/><text x="' + b[1] + '" y="68.5" text-anchor="middle" ' + font + ' font-size="11" fill="#111">' + b[0] + '</text>').join("") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">JUTC · SPANISH TOWN ROAD · TRENCH TOWN</text>',
      sky("bm1", "#5fb2ea", "#d8eef8"));
  }

  /* 2. Trench Town Culture Yard */
  function bmyard() {
    const doors = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 50) + '" y="118" width="18" height="34" fill="#a5432f"/><rect x="' + (76 + i * 50) + '" y="120" width="14" height="14" fill="#3b2f25"/>').join("");
    const posts = Array.from({ length: 8 }, (_, i) => '<rect x="' + (38 + i * 46) + '" y="100" width="5" height="54" fill="#efe6cf"/>').join("");
    const zinc = Array.from({ length: 34 }, (_, i) => '<path d="M' + (30 + i * 10) + ' 84v18" stroke="#8d949a" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bm2)"/>' +
      '<g fill="#2f6b35"><circle cx="352" cy="60" r="30"/><circle cx="380" cy="74" r="24"/><circle cx="330" cy="80" r="22"/></g><rect x="352" y="80" width="8" height="40" fill="#6b4a2a"/>' +
      '<rect x="30" y="100" width="340" height="56" fill="#f2e4c4"/><path d="M24 104l12 -22h328l12 22z" fill="#a8afb5"/>' + zinc +
      '<rect x="30" y="98" width="340" height="4" fill="#6f777d"/>' + doors + posts +
      '<rect x="30" y="152" width="340" height="8" fill="#c9b994"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#8a7a56"/><rect x="0" y="160" width="400" height="6" fill="#6f6244"/>' +
      '<g fill="#6a8f3a"><ellipse cx="40" cy="200" rx="30" ry="6"/><ellipse cx="350" cy="230" rx="36" ry="7"/></g>' +
      '<path d="M178 214l44 -6M182 206l40 10" stroke="#5a3a1a" stroke-width="5" stroke-linecap="round"/>' +
      '<g class="bm-fl"><path d="M190 210q4 -22 10 -26q2 12 8 6q4 10 -2 20z" fill="#f08a1a"/><path d="M196 210q2 -12 6 -14q2 8 4 14z" fill="#ffd34a"/></g>' +
      '<path d="M186 186h32l-4 16h-24z" fill="#2b2b2b"/><rect x="184" y="182" width="36" height="5" rx="2" fill="#444"/>' +
      '<g class="bm-smk"><circle cx="200" cy="172" r="6" fill="#d9d9d9" opacity=".6"/></g><g class="bm-smk bm-smk2"><circle cx="206" cy="170" r="5" fill="#d9d9d9" opacity=".6"/></g><g class="bm-smk bm-smk3"><circle cx="196" cy="168" r="4" fill="#d9d9d9" opacity=".6"/></g>' +
      '<path d="M318 160l10 -40" stroke="#6b4223" stroke-width="3"/><rect x="324" y="114" width="8" height="10" rx="2" fill="#4a2c14"/><ellipse cx="314" cy="166" rx="10" ry="13" fill="#b5763a" stroke="#6b4223" stroke-width="2"/><circle cx="315" cy="164" r="3.5" fill="#3b2412"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#1a1a1a" opacity=".55"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">TRENCH TOWN CULTURE YARD · FIRST STREET</text>',
      sky("bm2", "#79c3ef", "#f7e7c6"));
  }

  /* 3. 56 Hope Road */
  function bmhope() {
    const wins = (y) => Array.from({ length: 5 }, (_, i) => '<rect x="' + (128 + i * 32) + '" y="' + y + '" width="14" height="18" fill="#3a6a8a"/><rect x="' + (126 + i * 32) + '" y="' + (y - 2) + '" width="18" height="3" fill="#ffffff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bm3)"/>' +
      '<g class="bm-cl bm-cl2"><ellipse cx="80" cy="34" rx="34" ry="9" fill="#fff" opacity=".85"/></g>' +
      '<path d="M108 74l92 -30l92 30z" fill="#b8402e"/><rect x="112" y="74" width="176" height="96" fill="#fbfaf5" stroke="#d8d4c8" stroke-width="1"/>' +
      wins(84) + wins(136) + '<rect x="112" y="116" width="176" height="6" fill="#e5e0d2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (116 + i * 24) + '" y="122" width="4" height="48" fill="#ffffff" stroke="#d8d4c8" stroke-width=".6"/>').join("") +
      '<rect x="190" y="140" width="20" height="30" fill="#7a4a24"/>' +
      palm(70, 190, 1.2) + palm(330, 190, 1.1, "bm-palm2") +
      '<rect x="0" y="170" width="400" height="90" fill="#4f8a3a"/>' +
      rasta(0, 176, 150, 30) + rasta(250, 176, 150, 30) +
      '<rect x="150" y="170" width="6" height="40" fill="#333"/><rect x="244" y="170" width="6" height="40" fill="#333"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (160 + i * 9) + ' 176v34" stroke="#222" stroke-width="2"/>').join("") + '<path d="M156 182h88M156 204h88" stroke="#222" stroke-width="2"/>' +
      '<rect x="44" y="184" width="70" height="16" rx="2" fill="#111"/><text x="79" y="196" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">56 HOPE RD</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#777570"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">56 HOPE ROAD · KINGSTON · 1975</text>',
      sky("bm3", "#4aa6e6", "#e4f3fb"));
  }

  /* 4. Nine Mile, St. Ann */
  function bmnine() {
    return svg(
      '<rect width="400" height="260" fill="url(#bm4)"/>' +
      '<g class="bm-cl"><ellipse cx="90" cy="40" rx="36" ry="10" fill="#fff" opacity=".9"/></g><g class="bm-cl bm-cl2"><ellipse cx="60" cy="60" rx="26" ry="8" fill="#fff" opacity=".8"/></g>' +
      '<path d="M0 150q60 -70 130 -50q60 -50 130 -20q70 -40 140 10v120H0z" fill="#3f8a3c"/>' +
      '<path d="M0 180q80 -40 170 -20q100 -30 230 0v100H0z" fill="#5aa547"/>' +
      '<g class="bm-mist"><path d="M10 140h120M220 120h140" stroke="#ffffff" stroke-width="6" stroke-linecap="round" opacity=".35"/></g>' +
      '<rect x="170" y="128" width="64" height="46" fill="#fbfaf4" stroke="#d6d2c4" stroke-width="1"/><path d="M164 130l38 -26l38 26z" fill="#ffffff" stroke="#d6d2c4" stroke-width="1"/>' +
      '<rect x="164" y="128" width="76" height="3" fill="' + RED + '"/><rect x="164" y="131" width="76" height="3" fill="' + GOLD + '"/><rect x="164" y="134" width="76" height="3" fill="' + GREEN + '"/>' +
      '<rect x="194" y="150" width="16" height="24" rx="8" fill="#3a5a2a"/><rect x="178" y="144" width="8" height="10" rx="4" fill="#7a9ec0"/><rect x="218" y="144" width="8" height="10" rx="4" fill="#7a9ec0"/>' +
      '<rect x="199" y="92" width="6" height="14" fill="#fbfaf4"/><rect x="196" y="96" width="12" height="4" fill="#fbfaf4"/>' +
      '<ellipse cx="296" cy="172" rx="30" ry="14" fill="#9a958a"/><ellipse cx="290" cy="166" rx="18" ry="8" fill="#b1ada2"/>' +
      bird("", 50) + bird("bm-bird2", 64) + bird("bm-bird3", 44) +
      '<rect x="0" y="228" width="400" height="32" fill="#1a1a1a" opacity=".5"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">NINE MILE · ST. ANN · 1945</text>',
      sky("bm4", "#6cc0f0", "#eaf7e6"));
  }

  /* 5. First Street and West Road, Trench Town */
  function bmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bm5)"/>' +
      '<path d="M0 120l50 -46l40 22l60 -58l50 40l46 -30l60 44l50 -26l44 30v30H0z" fill="#3c5a8a"/>' +
      '<path d="M0 128l70 -30l50 16l60 -34l60 26l60 -20l100 30v20H0z" fill="#5373a3"/>' +
      '<g class="bm-mist"><path d="M20 110h140M220 100h150" stroke="#ffffff" stroke-width="7" stroke-linecap="round" opacity=".35"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#d9cfb8"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (142 + i * 16) + 'h400" stroke="#c4b99f" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 44 + (i % 2) * 22) + ' ' + (126 + i * 16) + 'v16" stroke="#c4b99f" stroke-width="1"/>').join("")).join("") +
      rasta(0, 126, 400, 9) +
      tag("MARLEY", 22, 194, 54, GOLD, -6) + tag("TRENCH TOWN", 34, 218, 17, "#ffffff", -3) + tag("ONE LOVE", 214, 210, 22, GREEN, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(268, 96, 128, "First St") + sign(278, 122, 110, "West Rd") +
      '<g class="bm-sp"><circle cx="158" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bm-sp bm-sp2"><circle cx="164" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("bm5", "#78bdea", "#f2e6cf"));
  }

  window.SCENES = { bmbus: bmbus, bmyard: bmyard, bmhope: bmhope, bmnine: bmnine, bmcorner: bmcorner };
})();
