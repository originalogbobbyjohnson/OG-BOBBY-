/* alkapone scenes (Regions tab: Memphis + Tennessee; Lamar Terrace / Lamar Ave, Memphis). CSS classes and ids prefixed ak- (the page's own anim-train is kept).
   1 MATA Route 36 Lamar bus pulling up at Lamar Ave & Bellevue Blvd (by the old Lamar Terrace projects, where he lived when he started as Scarface Al).
   2 The Levitt Shell in Overton Park: the white band shell, Al Kapone & the Blues Rap Band on stage, notes floating out.
   3 The Hustle & Flow home studio: egg-crate foam on the walls, keyboard, mic, the lyric sheet he wrote for Djay (Whoop That Trick / It Ain't Over).
   4 Tom Lee Park on the riverfront, Beale Street Music Festival night (he played it in 2013): stage lights, the river and a paddlewheeler.
   5 Lamar Ave & Camilla St (the Lamar Terrace corner): green signs, AL KAPONE tagged on the wall, the Sterick Building's pointed top on the downtown skyline.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes akflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ak-flk{animation:akflick 2.2s infinite}.ak-flk2{animation-delay:.7s}' +
    '@keyframes aknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.ak-note{animation:aknote 3s ease-out infinite}.ak-n2{animation-delay:-1s}.ak-n3{animation-delay:-2s}' +
    '@keyframes akbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ak-beam{transform-box:fill-box;transform-origin:bottom center;animation:akbeam 3.2s ease-in-out infinite}.ak-b2{animation-delay:-1.6s}' +
    '@keyframes akbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ak-bob{animation:akbob .6s ease-in-out infinite}.ak-bob2{animation-delay:-.3s}' +
    '@keyframes aktw{0%,100%{opacity:.3}50%{opacity:1}}.ak-tw{animation:aktw 1.8s ease-in-out infinite}.ak-tw2{animation-delay:-.9s}' +
    '@keyframes akspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ak-sp{animation:akspray 1.4s ease-out infinite}.ak-sp2{animation-delay:.45s}' +
    '@keyframes akcar{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.ak-car{animation:akcar 7s linear infinite;animation-delay:-2.5s}' +
    '@keyframes akboat{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.ak-boat{animation:akboat 9s ease-in-out infinite}' +
    '@keyframes akwheel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ak-wheel{transform-box:fill-box;transform-origin:center;animation:akwheel 3s linear infinite}' +
    '@keyframes akrec{0%,100%{opacity:1}50%{opacity:.15}}.ak-rec{animation:akrec 1s steps(1) infinite}' +
    '@keyframes akmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ak-meter{transform-box:fill-box;transform-origin:bottom;animation:akmeter .5s ease-in-out infinite}.ak-m2{animation-delay:-.2s}.ak-m3{animation-delay:-.35s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="ak-tw' + (i % 2 ? ' ak-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 80) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const notes = (pts, c) => pts.map((n, i) => '<g class="ak-note' + (i % 3 === 1 ? ' ak-n2' : i % 3 === 2 ? ' ak-n3' : '') + '"><ellipse cx="' + n[0] + '" cy="' + n[1] + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + n[0] + ' ' + n[1] + ')"/><path d="M' + (n[0] + 4.5) + ' ' + n[1] + 'v-18l8 4" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>').join("");
  const MATA = "#1f4e79", RED = "#c8102e", TEAL = "#2ec4b6", CORAL = "#e63946", SAND = "#f4a261", CREAM = "#f2ead8";

  /* 1. MATA Route 36 Lamar at Lamar Ave & Bellevue Blvd */
  function akstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">36 LAMAR</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    /* low Lamar Ave storefronts, a used-tire shop, and two-story brick apartments behind */
    const shop = (x, w, h, c) => '<rect x="' + x + '" y="' + (116 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x + 6) + '" y="' + (122 - h) + '" width="' + (w - 12) + '" height="8" fill="#2a1d14" opacity=".55"/>';
    const apt = (x) => '<rect x="' + x + '" y="58" width="70" height="40" fill="#9a5a40"/><path d="M' + (x - 4) + ' 60l39 -16l39 16z" fill="#5a3a2a"/>' +
      [0, 1, 2].map(i => '<rect x="' + (x + 8 + i * 21) + '" y="66" width="12" height="10" fill="#ffd98a" class="ak-flk' + (i % 2 ? ' ak-flk2' : '') + '"/>').join("");
    const tree = (x, r) => '<rect x="' + (x - 2) + '" y="' + (100 - r) + '" width="4" height="' + (r + 16) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (96 - r) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x + r * .6) + '" cy="' + (100 - r) + '" r="' + r * .7 + '" fill="#3b7d45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#aks1)"/>' +
      apt(150) + apt(232) + tree(24, 18) + tree(384, 18) +
      shop(40, 64, 34, "#b5694a") + shop(108, 60, 26, "#d8b48a") + shop(312, 60, 40, "#c98e5a") +
      '<rect x="108" y="74" width="60" height="14" rx="2" fill="#141414"/><text x="138" y="85" text-anchor="middle" ' + font + ' font-size="9" fill="' + SAND + '">USED TIRES</text>' +
      '<circle cx="186" cy="108" r="8" fill="#1a1a1a"/><circle cx="186" cy="108" r="3" fill="#555"/><circle cx="202" cy="108" r="8" fill="#1a1a1a"/><circle cx="202" cy="108" r="3" fill="#555"/>' +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="22" y="204" width="330" height="44" rx="3" fill="#111"/><text x="34" y="222" ' + font + ' font-size="13" fill="#fff">Lamar Ave &amp; Bellevue Blvd</text><text x="34" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Lamar Terrace · Memphis</text>' +
      badge(240, 234, "MATA", MATA) + badge(296, 234, "36", RED),
      sky("aks1", "#2c4f86", "#ffb36b"));
  }

  /* 2. The Levitt Shell, Overton Park: the Blues Rap Band on stage */
  function akshell() {
    const crowd = Array.from({ length: 26 }, (_, i) => '<g class="ak-bob' + (i % 2 ? ' ak-bob2' : '') + '"><circle cx="' + (8 + i * 15.5) + '" cy="' + (224 + (i % 3) * 3) + '" r="6" fill="#0d1a14"/><rect x="' + (2 + i * 15.5) + '" y="' + (230 + (i % 3) * 3) + '" width="12" height="30" rx="4" fill="#0d1a14"/></g>').join("");
    const player = (x, c, inst) => '<g class="ak-bob' + (x % 2 ? ' ak-bob2' : '') + '"><rect x="' + (x - 6) + '" y="150" width="12" height="26" rx="4" fill="' + c + '"/><circle cx="' + x + '" cy="143" r="6" fill="#3a2a22"/>' + inst + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#aks2)"/>' + stars(14) +
      /* big old oaks of Overton Park */
      '<circle cx="30" cy="110" r="44" fill="#173a26"/><circle cx="70" cy="90" r="34" fill="#1d4a30"/><circle cx="370" cy="108" r="46" fill="#173a26"/><circle cx="330" cy="88" r="32" fill="#1d4a30"/>' +
      /* the white band shell: a quarter dome with concentric arches */
      '<path d="M86 186V150q0 -96 114 -96t114 96v36z" fill="#f4f1e8"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (104 + i * 16) + ' 186V' + (152 + i * 4) + 'q0 ' + (-80 + i * 18) + ' ' + (96 - i * 16) + ' ' + (-80 + i * 18) + 't' + (96 - i * 16) + ' ' + (80 - i * 18) + 'V186" fill="none" stroke="#d6cfbd" stroke-width="3"/>').join("") +
      '<path d="M150 186V156q0 -46 50 -46t50 46v30z" fill="#2a2440"/>' +
      '<rect x="86" y="186" width="228" height="12" fill="#cfc7b4"/>' +
      '<g opacity=".6"><path class="ak-beam" d="M170 186l-16 -110h32z" fill="' + TEAL + '" opacity=".35"/><path class="ak-beam ak-b2" d="M230 186l-16 -110h32z" fill="' + CORAL + '" opacity=".35"/></g>' +
      player(170, CORAL, '<path d="M160 160l22 -6v6l-22 6z" fill="' + SAND + '"/>') +
      player(200, TEAL, '<rect x="203" y="132" width="2" height="26" fill="#ccc"/><circle cx="204" cy="131" r="3" fill="#333"/>') +
      player(230, "#5a4a8a", '<rect x="218" y="168" width="26" height="8" fill="#111"/><rect x="220" y="166" width="22" height="3" fill="#eee"/>') +
      notes([[150, 150], [236, 140], [262, 156]], SAND) +
      '<rect x="0" y="198" width="400" height="62" fill="#2e5a34"/>' + crowd +
      '<rect x="128" y="22" width="144" height="22" rx="3" fill="#111" opacity=".85"/><text x="200" y="38" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '">OVERTON PARK SHELL</text>',
      sky("aks2", "#10233a", "#3e6a7a"));
  }

  /* 3. The Hustle & Flow home studio: foam walls, keys, mic, the lyric sheet */
  function akstudio() {
    const foam = Array.from({ length: 10 }, (_, i) => Array.from({ length: 5 }, (_, j) => '<rect x="' + (14 + i * 37) + '" y="' + (14 + j * 26) + '" width="33" height="22" rx="3" fill="' + ((i + j) % 2 ? "#6d5a7a" : "#5c4a69") + '"/><path d="M' + (18 + i * 37) + ' ' + (25 + j * 26) + 'h25" stroke="#4a3a56" stroke-width="2"/>').join("")).join("");
    const keys = Array.from({ length: 16 }, (_, i) => '<rect x="' + (60 + i * 8) + '" y="172" width="7" height="22" fill="#f4f4f4"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14].map(i => '<rect x="' + (65 + i * 8) + '" y="172" width="4.5" height="13" fill="#111"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2b2233"/>' + foam +
      /* a bare bulb and the hot little room */
      '<path d="M200 0v20" stroke="#222" stroke-width="2"/><circle class="ak-flk" cx="200" cy="26" r="8" fill="#ffe9a8"/><circle cx="200" cy="26" r="26" fill="#ffe9a8" opacity=".12"/>' +
      /* desk, keyboard, tape deck with meters */
      '<rect x="40" y="194" width="320" height="12" fill="#6b4a32"/><rect x="50" y="206" width="10" height="54" fill="#4a3324"/><rect x="340" y="206" width="10" height="54" fill="#4a3324"/>' +
      '<rect x="54" y="166" width="140" height="30" rx="3" fill="#222"/>' + keys +
      '<rect x="214" y="160" width="100" height="34" rx="3" fill="#1a1a1a"/><circle cx="236" cy="177" r="9" fill="#333" stroke="#777"/><circle cx="292" cy="177" r="9" fill="#333" stroke="#777"/>' +
      '<rect x="252" y="168" width="4" height="18" fill="' + TEAL + '" class="ak-meter"/><rect x="258" y="168" width="4" height="18" fill="' + TEAL + '" class="ak-meter ak-m2"/><rect x="264" y="168" width="4" height="18" fill="' + SAND + '" class="ak-meter ak-m3"/><rect x="270" y="168" width="4" height="18" fill="' + CORAL + '" class="ak-meter"/>' +
      '<circle class="ak-rec" cx="306" cy="166" r="3" fill="' + CORAL + '"/>' +
      /* the mic on a stand with a sock pop filter */
      '<rect x="331" y="96" width="4" height="98" fill="#888"/><rect x="321" y="74" width="24" height="30" rx="12" fill="#333" stroke="#999" stroke-width="2"/><circle cx="314" cy="90" r="11" fill="#c8b8a0" opacity=".85"/>' +
      /* the lyric sheet taped up */
      '<rect x="120" y="58" width="96" height="84" fill="#f8f4e6" transform="rotate(-4 168 100)"/><g transform="rotate(-4 168 100)">' +
      '<text x="168" y="76" text-anchor="middle" ' + font + ' font-size="9" fill="' + CORAL + '">IT AIN\'T OVER</text>' +
      [88, 98, 108, 118, 128].map(y => '<path d="M130 ' + y + 'h' + (60 + (y % 20)) + '" stroke="#5a6aa0" stroke-width="1.6"/>').join("") + '</g>' +
      '<rect x="160" y="54" width="16" height="8" fill="#e8d36b" opacity=".8"/>' +
      notes([[90, 150], [120, 140], [150, 150]], SAND) +
      '<rect x="26" y="226" width="150" height="24" rx="4" fill="#111" opacity=".85"/><text x="101" y="242" text-anchor="middle" ' + font + ' font-size="10" fill="' + SAND + '">HOME STUDIO · RECORD</text>');
  }

  /* 4. Tom Lee Park, Beale Street Music Festival night on the river */
  function akfest() {
    const crowd = Array.from({ length: 26 }, (_, i) => '<g class="ak-bob' + (i % 2 ? ' ak-bob2' : '') + '"><circle cx="' + (8 + i * 15.5) + '" cy="' + (226 + (i % 3) * 3) + '" r="6" fill="#0c0c18"/><rect x="' + (2 + i * 15.5) + '" y="' + (232 + (i % 3) * 3) + '" width="12" height="30" rx="4" fill="#0c0c18"/>' + (i % 4 === 0 ? '<path d="M' + (8 + i * 15.5) + ' 224l6 -16" stroke="#0c0c18" stroke-width="3"/>' : '') + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#aks4)"/>' + stars(18) +
      /* the Mississippi and a paddlewheeler going by */
      '<rect x="0" y="128" width="400" height="44" fill="#1d3a4f"/>' + [136, 146, 158].map(y => '<path d="M0 ' + y + 'h400" stroke="#2f5a72" stroke-width="1.2" stroke-dasharray="20 14"/>').join("") +
      '<g class="ak-boat"><rect x="270" y="116" width="76" height="16" fill="' + CREAM + '"/><rect x="278" y="104" width="56" height="12" fill="' + CREAM + '"/><rect x="286" y="94" width="5" height="10" fill="#333"/><rect x="298" y="94" width="5" height="10" fill="#333"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (282 + i * 11) + '" y="107" width="6" height="5" fill="#ffd98a"/>').join("") +
      '<g class="ak-wheel"><circle cx="352" cy="126" r="9" fill="none" stroke="' + CORAL + '" stroke-width="3"/><path d="M343 126h18M352 117v18" stroke="' + CORAL + '" stroke-width="2"/></g></g>' +
      /* far Arkansas shore */
      '<rect x="0" y="122" width="400" height="6" fill="#0e1c26"/>' +
      /* the festival stage */
      '<rect x="40" y="70" width="190" height="10" fill="#333"/><rect x="40" y="70" width="8" height="120" fill="#333"/><rect x="222" y="70" width="8" height="120" fill="#333"/>' +
      '<rect x="48" y="80" width="174" height="100" fill="#141020"/><rect x="40" y="180" width="190" height="16" fill="#2a2a2a"/>' +
      '<g opacity=".7"><path class="ak-beam" d="M90 180l-18 -110h36z" fill="' + TEAL + '" opacity=".35"/><path class="ak-beam ak-b2" d="M180 180l-18 -110h36z" fill="' + CORAL + '" opacity=".35"/></g>' +
      [62, 84, 186, 208].map(x => '<rect x="' + x + '" y="84" width="10" height="10" rx="2" fill="' + SAND + '" class="ak-flk' + (x > 100 ? ' ak-flk2' : '') + '"/>').join("") +
      '<g class="ak-bob"><rect x="129" y="146" width="12" height="34" rx="4" fill="' + TEAL + '"/><circle cx="135" cy="139" r="7" fill="#3a2a22"/><path d="M141 152l12 -10" stroke="#ccc" stroke-width="3"/></g>' +
      '<rect x="250" y="174" width="120" height="22" rx="3" fill="#111" opacity=".85"/><text x="310" y="189" text-anchor="middle" ' + font + ' font-size="10" fill="' + SAND + '">TOM LEE PARK</text>' +
      '<rect x="0" y="196" width="400" height="64" fill="#24321e"/>' + crowd,
      sky("aks4", "#0a0a24", "#4a2a5a"));
  }

  /* 5. Lamar Ave & Camilla St: the Lamar Terrace corner */
  function akcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#aks5)"/>' + stars(18) +
      /* downtown skyline far behind, the Sterick Building's pointed gothic top */
      '<g fill="#25304a"><rect x="30" y="96" width="34" height="30"/><rect x="68" y="86" width="24" height="40"/><rect x="236" y="92" width="30" height="34"/><rect x="270" y="100" width="44" height="26"/><rect x="318" y="90" width="24" height="36"/></g>' +
      '<rect x="146" y="46" width="44" height="80" fill="#35425e"/><path d="M146 46l22 -30l22 30z" fill="#42506e"/><rect x="166" y="4" width="4" height="14" fill="#42506e"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="ak-flk' + (i % 2 ? ' ak-flk2' : '') + '" x="' + (152 + (i % 4) * 9) + '" y="' + (58 + Math.floor(i / 4) * 24) + '" width="5" height="7" fill="#ffe9a8"/>').join("") +
      '<rect x="0" y="124" width="400" height="100" fill="#6f4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (132 + i * 8) + 'h400" stroke="#5a3a2c" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (124 + i * 8) + 'v8" stroke="#5a3a2c" stroke-width="1"/>').join("")).join("") +
      tag("AL KAPONE", 14, 196, 42, TEAL, -6) + tag("OH BOY", 30, 150, 18, SAND, -4) + tag("M-TOWN", 176, 216, 18, CORAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="ak-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="' + TEAL + '"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#1a8a80"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(278, 94, 110, "Lamar Ave") + sign(284, 124, 98, "Camilla St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ak-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ak-sp"><circle cx="246" cy="172" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="ak-sp ak-sp2"><circle cx="252" cy="166" r="2" fill="' + TEAL + '" opacity=".6"/></g>',
      sky("aks5", "#141a38", "#e07a4a"));
  }

  window.SCENES = { akstop: akstop, akshell: akshell, akstudio: akstudio, akfest: akfest, akcorner: akcorner };
})();
