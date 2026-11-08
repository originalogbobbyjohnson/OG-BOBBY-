/* isaachayes scenes (Regions tab: Memphis + Tennessee; North Memphis, by Manassas High). CSS classes and ids prefixed ih- (the page's own anim-train is kept).
   1 MATA Route 8 Chelsea & Highland bus pulling up at Chelsea Ave / Manassas St, North Memphis.
   2 Manassas High School (1111 N Manassas St): red brick, blue and gold, the Tigers' banner, his school.
   3 Covington, Tennessee, where he was born: the two-story red brick Tipton County Courthouse (1890, Italianate, white-columned porch), cotton rows beyond.
   4 Interstate 40 in Shelby County, the green "Isaac Hayes Memorial Highway" sign (2010), a peacock-blue car with gold trim cruising under it.
   5 Chelsea Ave and N Manassas St in North Memphis: green signs, ISAAC HAYES tagged on the wall, the gold dome of the St. Jude pavilion behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ihflk{0%,100%{opacity:1}50%{opacity:.35}}.ih-flk{animation:ihflk 1.8s infinite}.ih-flk2{animation-delay:.9s}' +
    '@keyframes ihflag{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}.ih-flag{animation:ihflag 2.4s ease-in-out infinite;transform-origin:left center}' +
    '@keyframes ihcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.ih-cloud{animation:ihcloud 40s linear infinite}.ih-cloud2{animation-duration:55s;animation-delay:-20s}' +
    '@keyframes ihcar{from{transform:translateX(-160px)}to{transform:translateX(460px)}}.ih-car{animation:ihcar 7s linear infinite;animation-delay:-3s}' +
    '@keyframes ihcar2{from{transform:translateX(460px)}to{transform:translateX(-160px)}}.ih-car2{animation:ihcar2 5.5s linear infinite}' +
    '@keyframes ihsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ih-sway{animation:ihsway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes ihglint{0%,100%{opacity:.2}50%{opacity:1}}.ih-glint{animation:ihglint 2.2s ease-in-out infinite}.ih-glint2{animation-delay:-1.1s}' +
    '@keyframes ihsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ih-sp{animation:ihsp 1.4s ease-out infinite}.ih-sp2{animation-delay:.45s}' +
    '@keyframes ihball{0%,100%{transform:translate(0,0)}50%{transform:translate(60px,-40px)}}.ih-ball{animation:ihball 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const MATA = "#1f4e79", RED = "#c8102e", GOLD = "#f2b632", BLUE = "#1f8fbf", NAVY = "#1d2f6f";

  /* 1. MATA Route 8 at Chelsea Ave / Manassas St */
  function ihstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">8 CHELSEA</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const houses = [[10, 70], [80, 60], [150, 74], [250, 66], [320, 72]].map(([x, h]) =>
      '<rect x="' + x + '" y="' + (116 - h) + '" width="62" height="' + h + '" fill="#6d5a4a"/><path d="M' + (x - 4) + ' ' + (116 - h) + 'l35 -18l35 18z" fill="#3d3330"/>' +
      '<rect x="' + (x + 10) + '" y="' + (126 - h) + '" width="14" height="14" fill="#ffd98a" class="ih-flk" opacity=".8"/><rect x="' + (x + 38) + '" y="' + (126 - h) + '" width="14" height="14" fill="#ffd98a" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ihs1)"/>' + stars(18) +
      '<g class="ih-cloud"><ellipse cx="60" cy="34" rx="34" ry="9" fill="#fff" opacity=".25"/></g>' +
      houses +
      '<rect x="0" y="116" width="400" height="80" fill="#4f5054"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="30" y="204" width="312" height="44" rx="3" fill="#111"/><text x="42" y="222" ' + font + ' font-size="13" fill="#fff">Chelsea Ave / Manassas St</text><text x="42" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">North Memphis · Route 8 Chelsea &amp; Highland</text>' +
      badge(306, 226, "8", MATA),
      sky("ihs1", "#1e2a55", "#e8a46a"));
  }

  /* 2. Manassas High School, blue and gold */
  function ihmanassas() {
    const winRow = (y) => Array.from({ length: 10 }, (_, i) => '<rect x="' + (66 + i * 28) + '" y="' + y + '" width="16" height="20" fill="#bfe3ff" stroke="#e9e2d0" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ihs2)"/>' +
      '<g class="ih-cloud"><ellipse cx="80" cy="40" rx="40" ry="10" fill="#fff" opacity=".8"/><ellipse cx="110" cy="34" rx="26" ry="9" fill="#fff" opacity=".8"/></g>' +
      '<g class="ih-cloud ih-cloud2"><ellipse cx="260" cy="28" rx="34" ry="8" fill="#fff" opacity=".7"/></g>' +
      /* building */
      '<rect x="50" y="70" width="300" height="110" fill="#a2482f"/><rect x="50" y="64" width="300" height="10" fill="#e9e2d0"/>' +
      winRow(84) + winRow(124) +
      '<rect x="160" y="40" width="80" height="140" fill="#93412b"/><rect x="156" y="36" width="88" height="8" fill="#e9e2d0"/>' +
      '<rect x="168" y="52" width="64" height="18" fill="' + NAVY + '"/><text x="200" y="65" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">MANASSAS</text>' +
      '<rect x="178" y="138" width="44" height="42" fill="#2a3a5a"/><path d="M200 138v42" stroke="#e9e2d0" stroke-width="2"/>' +
      '<path d="M170 138h60" stroke="#e9e2d0" stroke-width="4"/>' +
      /* banner */
      '<g class="ih-flag"><rect x="262" y="96" width="72" height="34" fill="' + NAVY + '" stroke="' + GOLD + '" stroke-width="2"/><text x="298" y="110" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">GO</text><text x="298" y="123" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">TIGERS</text></g>' +
      '<g class="ih-flag"><rect x="66" y="96" width="72" height="34" fill="' + GOLD + '" stroke="' + NAVY + '" stroke-width="2"/><text x="102" y="117" text-anchor="middle" ' + font + ' font-size="10" fill="' + NAVY + '">BLUE &amp; GOLD</text></g>' +
      /* lawn + field */
      '<rect x="0" y="180" width="400" height="80" fill="#4f9a3c"/><path d="M0 214h400M0 240h400" stroke="#fff" stroke-width="2" opacity=".6"/>' +
      '<path d="M40 180v-30M40 150h24" stroke="#ccc" stroke-width="3"/><g class="ih-flag"><rect x="42" y="150" width="22" height="13" fill="' + GOLD + '"/></g>' +
      '<g class="ih-ball"><ellipse cx="140" cy="226" rx="8" ry="5" fill="#7a3e1c" transform="rotate(-25 140 226)"/></g>' +
      '<rect x="88" y="232" width="224" height="20" rx="3" fill="#000" opacity=".55"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">MANASSAS HIGH · N MANASSAS ST</text>',
      sky("ihs2", "#4d8fd6", "#cfe8ff"));
  }

  /* 3. Covington: Tipton County Courthouse, cotton rows */
  function ihcovington() {
    const cotton = Array.from({ length: 30 }, (_, i) => { const x = (i * 29) % 400 + 6, y = 206 + (i % 3) * 16; return '<g class="ih-sway"><path d="M' + x + ' ' + (y + 10) + 'v-10" stroke="#5a7a3a" stroke-width="2"/><circle cx="' + x + '" cy="' + y + '" r="4" fill="#fbfaf4"/><circle cx="' + (x + 4) + '" cy="' + (y + 2) + '" r="3" fill="#fbfaf4"/></g>'; }).join("");
    const win = Array.from({ length: 6 }, (_, i) => { const x = 104 + i * 34 + (i > 2 ? 24 : 0); return '<rect x="' + x + '" y="98" width="12" height="22" rx="5" fill="#2c3a4a" stroke="#f3eee2" stroke-width="2"/><rect x="' + x + '" y="136" width="12" height="22" rx="5" fill="#2c3a4a" stroke="#f3eee2" stroke-width="2"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ihs3)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffe08a" opacity=".9"/>' +
      '<g class="ih-cloud"><ellipse cx="60" cy="40" rx="36" ry="9" fill="#fff" opacity=".7"/></g>' +
      '<rect x="0" y="150" width="400" height="30" fill="#7aa356"/>' +
      '<path d="M20 180q20 -50 40 0zM350 180q22 -56 44 0z" fill="#3f6b2e"/>' +
      /* courthouse */
      '<rect x="90" y="84" width="220" height="90" fill="#a44a34"/><path d="M84 86l116 -34l116 34z" fill="#5a3a30"/>' +
      '<rect x="90" y="84" width="40" height="90" fill="#b0533b"/><rect x="270" y="84" width="40" height="90" fill="#b0533b"/>' +
      '<path d="M86 86l24 -14l24 14zM266 86l24 -14l24 14z" fill="#6a4436"/>' + win +
      '<rect x="168" y="120" width="64" height="8" fill="#f3eee2"/>' +
      [176, 192, 208, 224].map(x => '<rect x="' + (x - 3) + '" y="128" width="6" height="46" fill="#f3eee2"/>').join("") +
      '<path d="M164 122l36 -14l36 14z" fill="#f3eee2"/><rect x="190" y="140" width="20" height="34" fill="#3a2a22"/>' +
      '<rect x="80" y="174" width="240" height="6" fill="#d8cfbd"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#6b4a2e"/>' + cotton +
      '<rect x="78" y="228" width="244" height="22" rx="3" fill="#000" opacity=".55"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">COVINGTON · TIPTON COUNTY · BORN HERE</text>',
      sky("ihs3", "#f6c37a", "#fde7c2"));
  }

  /* 4. I-40, the Isaac Hayes Memorial Highway sign, a peacock blue car with gold trim */
  function ihhighway() {
    const car = (cls, body, trim, dir) => '<g class="' + cls + '"><g transform="translate(0,' + (dir ? 0 : 0) + ')">' +
      '<path d="M0 0h130l-10 -14h-30l-14 -16h-46l-16 16h-14z" transform="translate(0,190)" fill="' + body + '"/>' +
      '<rect x="0" y="186" width="134" height="10" rx="3" fill="' + body + '"/>' +
      '<path d="M36 175l12 -13h36l12 13z" fill="#1b2633"/>' +
      '<path d="M2 186h130" stroke="' + trim + '" stroke-width="2.5"/><rect x="124" y="183" width="10" height="6" fill="' + trim + '"/><rect x="0" y="183" width="6" height="6" fill="' + trim + '"/>' +
      '<circle cx="30" cy="198" r="10" fill="#111"/><circle cx="30" cy="198" r="5" fill="' + trim + '"/><circle cx="104" cy="198" r="10" fill="#111"/><circle cx="104" cy="198" r="5" fill="' + trim + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ihs4)"/>' +
      '<g class="ih-cloud"><ellipse cx="80" cy="30" rx="38" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<path d="M0 150q100 -24 200 -8t200 -6v64H0z" fill="#3f6b2e"/>' +
      /* gantry */
      '<rect x="30" y="40" width="8" height="160" fill="#8d959e"/><rect x="362" y="40" width="8" height="160" fill="#8d959e"/><rect x="30" y="44" width="340" height="6" fill="#8d959e"/>' +
      '<rect x="64" y="50" width="272" height="70" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">ISAAC HAYES</text>' +
      '<text x="200" y="98" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">MEMORIAL HIGHWAY</text>' +
      '<g transform="translate(176,104)"><path d="M0 0h48v6q0 10 -24 14q-24 -4 -24 -14z" fill="#1d4fa0" stroke="#fff" stroke-width="1.5"/><text x="24" y="12" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">I-40</text></g>' +
      /* road */
      '<rect x="0" y="170" width="400" height="90" fill="#3b3c40"/><path d="M0 212h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/><path d="M0 172h400" stroke="#e8d36b" stroke-width="3"/>' +
      car("ih-car", BLUE, GOLD) +
      '<g class="ih-car2"><g transform="translate(0,38)"><rect x="0" y="182" width="96" height="16" rx="5" fill="#c9ccd1"/><path d="M18 182l10 -12h34l10 12z" fill="#1b2633"/><circle cx="20" cy="200" r="8" fill="#111"/><circle cx="76" cy="200" r="8" fill="#111"/></g></g>' +
      '<circle class="ih-glint" cx="70" cy="186" r="2" fill="#fff"/><circle class="ih-glint ih-glint2" cx="300" cy="186" r="2" fill="#fff"/>',
      sky("ihs4", "#6ab0e8", "#e2f2ff"));
  }

  /* 5. Chelsea Ave and N Manassas St, the St. Jude pavilion's gold dome behind */
  function ihcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ihs5)"/>' + stars(30) +
      /* gold dome far behind */
      '<g opacity=".95"><rect x="250" y="70" width="90" height="40" fill="#2b2f45"/>' +
      [262, 280, 298, 316].map(x => '<rect x="' + x + '" y="74" width="6" height="36" fill="#3c4160"/>').join("") +
      '<path d="M256 70q39 -56 78 0z" fill="' + GOLD + '"/><path d="M270 70q25 -40 50 0" stroke="#fff2b0" stroke-width="2" fill="none" class="ih-glint"/><rect x="292" y="20" width="6" height="10" fill="' + GOLD + '"/></g>' +
      '<g fill="#1c2036"><rect x="0" y="96" width="60" height="30"/><rect x="60" y="86" width="40" height="40"/><rect x="350" y="92" width="50" height="34"/></g>' +
      /* wall */
      '<rect x="0" y="110" width="400" height="100" fill="#7a3f2c"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (114 + r * 10) + 'h400" stroke="#5c2e20" stroke-width="1"/>').join("") +
      tag("ISAAC HAYES", 30, 172, 40, GOLD, -5) +
      tag("BLACK MOSES", 150, 202, 22, BLUE, -4) +
      '<g class="ih-sp"><circle cx="288" cy="150" r="3" fill="' + GOLD + '"/></g><g class="ih-sp ih-sp2"><circle cx="296" cy="146" r="2" fill="' + BLUE + '"/></g>' +
      /* sidewalk + signs */
      '<rect x="0" y="210" width="400" height="50" fill="#8c877c"/><path d="M0 210h400" stroke="#5f5a50" stroke-width="3"/>' +
      '<rect x="321" y="96" width="6" height="140" fill="#5b6066"/>' +
      sign(262, 98, 124, "CHELSEA AV") + sign(266, 122, 116, "N MANASSAS") +
      '<rect x="90" y="228" width="220" height="22" rx="3" fill="#000" opacity=".55"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NORTH MEMPHIS · CAN YOU DIG IT</text>',
      sky("ihs5", "#141a3a", "#7a4a6a"));
  }

  window.SCENES = { ihstop: ihstop, ihmanassas: ihmanassas, ihcovington: ihcovington, ihhighway: ihhighway, ihcorner: ihcorner };
})();
