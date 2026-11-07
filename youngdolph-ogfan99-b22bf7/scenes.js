/* youngdolph scenes (Regions tab: Memphis + Tennessee; Castalia Heights, South Memphis). CSS classes and ids prefixed yd- (the page's own anim-train is kept).
   1 MATA Route 32 bus pulling up at Airways Blvd & Dunn Ave, the west end of the stretch of Dunn now signed for him.
   2 Hamilton High School on E Person Ave: his school (he gave it $25,000), royal blue and white, the Wildcats banner waving.
   3 Graceland's music gates on Elvis Presley Blvd: the other King of Memphis (Dolph named his 2016 album King of Memphis), notes floating up.
   4 Memphis International Airport: the control tower and a jet climbing out over Castalia Heights ("fell asleep on a jet").
   5 Dunn Ave and Castalia St in Castalia Heights: green signs plus the brown-and-gold Adolph Thornton Jr. Ave honor sign, DOLPH tagged on the wall, a jet over the hill.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ydflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.yd-flag{transform-box:fill-box;transform-origin:left center;animation:ydflag 1.6s ease-in-out infinite}' +
    '@keyframes ydnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}.yd-note{animation:ydnote 3.2s ease-out infinite}.yd-n2{animation-delay:-1.1s}.yd-n3{animation-delay:-2.2s}' +
    '@keyframes ydjet{0%{transform:translate(-120px,60px)}100%{transform:translate(460px,-120px)}}.yd-jet{animation:ydjet 7s linear infinite;animation-delay:-3.2s}' +
    '@keyframes ydjet2{0%{transform:translate(-80px,0)}100%{transform:translate(480px,-30px)}}.yd-jet2{animation:ydjet2 11s linear infinite;animation-delay:-5s}' +
    '@keyframes ydblink{0%,100%{opacity:1}50%{opacity:.15}}.yd-bl{animation:ydblink 1s steps(2) infinite}.yd-bl2{animation-delay:-.5s}' +
    '@keyframes ydbeam{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.yd-beam{transform-box:fill-box;transform-origin:bottom center;animation:ydbeam 4s ease-in-out infinite}' +
    '@keyframes ydtw{0%,100%{opacity:.3}50%{opacity:1}}.yd-tw{animation:ydtw 1.8s ease-in-out infinite}.yd-tw2{animation-delay:-.9s}' +
    '@keyframes ydspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.yd-sp{animation:ydspray 1.4s ease-out infinite}.yd-sp2{animation-delay:.45s}' +
    '@keyframes ydcar{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.yd-car{animation:ydcar 7s linear infinite;animation-delay:-2.5s}' +
    '@keyframes ydsh{0%,100%{opacity:.35}50%{opacity:1}}.yd-sh{animation:ydsh 1.4s ease-in-out infinite}.yd-sh2{animation-delay:-.7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt, bg, fg) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + (bg || "#0f6b3a") + '" stroke="' + (fg || "#fff") + '" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="' + (fg || "#fff") + '">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="yd-tw' + (i % 2 ? ' yd-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 80) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const brick = (x, y, w, h, c, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
    Array.from({ length: Math.floor(h / 7) }, (_, i) => '<path d="M' + x + ' ' + (y + 7 + i * 7) + 'h' + w + '" stroke="' + line + '" stroke-width=".8"/>').join("");
  const jet = (cls, s) => '<g class="' + cls + '"><g transform="scale(' + s + ') rotate(-14)"><path d="M0 0h70q10 0 14 5q-4 5 -14 5h-70z" fill="#eef2f6"/><path d="M30 5l-14 22h8l22 -22z" fill="#c7d0da"/><path d="M30 5l-10 -16h7l18 16z" fill="#c7d0da"/><path d="M2 5l-6 -14h6l10 14z" fill="#3a6ea5"/><rect x="18" y="2.5" width="46" height="2" fill="#7fa3c8"/><circle class="yd-bl" cx="0" cy="3" r="1.8" fill="#ff4040"/></g></g>';
  const MATA = "#0057a8", RED = "#c8102e", GOLD = "#e9c46a", BLUE = "#4a90e2", ROYAL = "#1d4fb8", BROWN = "#6b3f1d";

  /* 1. MATA Route 32 at Airways Blvd & Dunn Ave */
  function ydstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">32 AIRWAYS</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const house = (x, w, c, roof) => '<rect x="' + x + '" y="' + 92 + '" width="' + w + '" height="24" fill="' + c + '"/><path d="M' + (x - 4) + ' 92l' + (w / 2 + 4) + ' -16l' + (w / 2 + 4) + ' 16z" fill="' + roof + '"/><rect x="' + (x + 6) + '" y="98" width="10" height="9" fill="#ffe7a3"/><rect x="' + (x + w - 16) + '" y="98" width="10" height="9" fill="#ffe7a3"/>';
    const tree = (x, r) => '<rect x="' + (x - 2) + '" y="' + (100 - r) + '" width="4" height="' + (r + 16) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (96 - r) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x + r * .6) + '" cy="' + (100 - r) + '" r="' + r * .7 + '" fill="#3b7d45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yds1)"/>' +
      '<g transform="translate(0 40)">' + jet("yd-jet2", .7) + '</g>' +
      /* the hill along Dunn with small brick and frame houses */
      '<path d="M0 104q90 -30 200 -14t200 -6v32H0z" fill="#4c6b3a"/>' +
      house(40, 50, "#a8644a", "#4a2a20") + tree(110, 16) + house(140, 46, "#e2d7c0", "#5a4a3a") + house(240, 52, "#b77b56", "#3d2a22") + tree(316, 18) + house(340, 44, "#d9c9a8", "#4a3a2c") +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="30" y="204" width="320" height="44" rx="3" fill="#111"/><text x="42" y="222" ' + font + ' font-size="13" fill="#fff">Airways Blvd &amp; Dunn Ave</text><text x="42" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Castalia Heights · South Memphis</text>' +
      badge(258, 234, "MATA", MATA) + badge(314, 234, "32", RED),
      sky("yds1", "#3a6fb0", "#ffc27a"));
  }

  /* 2. Hamilton High School: royal blue and white, the Wildcats */
  function ydhamilton() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="30" height="24" fill="#a9d4ee" stroke="#f2f2ee" stroke-width="3"/><path d="M' + (x + 15) + ' ' + y + 'v24" stroke="#f2f2ee" stroke-width="2"/>';
    const paw = (x, y, s) => '<g fill="#fff" transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="6" rx="7" ry="6"/><circle cx="-7" cy="-4" r="3"/><circle cx="-2.5" cy="-8" r="3"/><circle cx="2.5" cy="-8" r="3"/><circle cx="7" cy="-4" r="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yds2)"/>' +
      '<circle cx="62" cy="48" r="20" fill="#fff6d0" opacity=".9"/>' +
      '<path d="M0 120q60 -16 120 -6t140 -4t140 4v20H0z" fill="#5f8a4a"/>' +
      brick(30, 82, 340, 112, "#b4693f", "#93522f") +
      '<rect x="30" y="74" width="340" height="10" fill="#f2f2ee"/>' +
      win(46, 98) + win(86, 98) + win(126, 98) + win(244, 98) + win(284, 98) + win(324, 98) +
      win(46, 140) + win(86, 140) + win(284, 140) + win(324, 140) +
      /* entrance with royal blue canopy and lettering */
      '<rect x="162" y="96" width="76" height="98" fill="#e9e4d8"/><rect x="132" y="86" width="136" height="16" fill="' + ROYAL + '"/>' +
      '<text x="200" y="99" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HAMILTON HIGH SCHOOL</text>' +
      '<rect x="178" y="146" width="44" height="48" fill="#26364f"/><path d="M200 146v48" stroke="#9fb4d4" stroke-width="2"/>' +
      '<rect x="170" y="112" width="60" height="26" rx="3" fill="' + ROYAL + '"/>' + paw(186, 124, .8) + '<text x="210" y="129" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CATS</text>' +
      /* flagpole with a blue and white Wildcats banner */
      '<rect x="8" y="46" width="3" height="148" fill="#cfd4da"/><g class="yd-flag"><rect x="11" y="48" width="58" height="34" fill="' + ROYAL + '"/><rect x="11" y="74" width="58" height="8" fill="#fff"/><text x="40" y="66" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">WILDCATS</text></g>' +
      '<rect x="0" y="194" width="400" height="66" fill="#8c8f93"/><path d="M0 194h400" stroke="#6f7276" stroke-width="3"/>' +
      '<rect x="120" y="208" width="160" height="34" rx="3" fill="' + ROYAL + '" stroke="#fff" stroke-width="2"/><text x="200" y="222" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">E PERSON AVE</text><text x="200" y="236" text-anchor="middle" ' + font + ' font-size="9" fill="#dfe8ff">HOME OF THE WILDCATS</text>' +
      paw(60, 226, 1.1) + paw(340, 226, 1.1),
      sky("yds2", "#3d7fd6", "#cfe6ff"));
  }

  /* 3. Graceland's music gates on Elvis Presley Blvd (no figure drawn, just notes and bars) */
  function ydgraceland() {
    const notes = [[150, 150, ""], [200, 140, " yd-n2"], [250, 152, " yd-n3"]].map(n => '<g class="yd-note' + n[2] + '"><ellipse cx="' + n[0] + '" cy="' + n[1] + '" rx="5" ry="3.6" fill="' + GOLD + '" transform="rotate(-20 ' + n[0] + ' ' + n[1] + ')"/><path d="M' + (n[0] + 4.5) + ' ' + n[1] + 'v-18l8 4" stroke="' + GOLD + '" stroke-width="1.8" fill="none"/></g>').join("");
    const bars = (x) => Array.from({ length: 8 }, (_, i) => '<path d="M' + (x + 6 + i * 9) + ' 150v64" stroke="#1d1d1d" stroke-width="2"/>').join("");
    const staff = (x) => Array.from({ length: 5 }, (_, i) => '<path d="M' + x + ' ' + (168 + i * 6) + 'h78" stroke="#1d1d1d" stroke-width="1.6"/>').join("") +
      '<ellipse cx="' + (x + 20) + '" cy="' + 186 + '" rx="5" ry="3.6" fill="#1d1d1d"/><path d="M' + (x + 24.5) + ' 186v-18" stroke="#1d1d1d" stroke-width="1.8"/>' +
      '<ellipse cx="' + (x + 52) + '" cy="' + 180 + '" rx="5" ry="3.6" fill="#1d1d1d"/><path d="M' + (x + 56.5) + ' 180v-18" stroke="#1d1d1d" stroke-width="1.8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yds3)"/>' +
      '<path d="M0 118q100 -14 200 -8t200 2v30H0z" fill="#6f9a52"/>' +
      /* the mansion up the lawn: white columns, tan stone */
      '<rect x="150" y="70" width="100" height="44" fill="#d9c7a3"/><path d="M146 70l54 -22l54 22z" fill="#eae6dc"/>' +
      '<rect x="166" y="70" width="68" height="6" fill="#f4f1ea"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (170 + i * 18) + '" y="74" width="5" height="40" fill="#f7f5ef"/>').join("") +
      '<rect x="193" y="92" width="14" height="22" fill="#5a3b26"/><rect x="156" y="82" width="9" height="12" fill="#3a4a5a"/><rect x="235" y="82" width="9" height="12" fill="#3a4a5a"/>' +
      '<circle cx="128" cy="96" r="18" fill="#2f6b3a"/><circle cx="276" cy="94" r="20" fill="#2f6b3a"/>' +
      /* fieldstone wall with fan writing */
      '<rect x="0" y="146" width="400" height="74" fill="#a39684"/>' +
      Array.from({ length: 30 }, (_, i) => '<rect x="' + ((i * 47) % 390) + '" y="' + (150 + (i * 13) % 62) + '" width="' + (14 + i % 3 * 5) + '" height="9" rx="3" fill="' + (i % 2 ? "#b4a793" : "#8d8170") + '"/>').join("") +
      '<text x="30" y="200" font-family="Sedgwick Ave Display, cursive" font-size="10" fill="#2a3a8a" transform="rotate(-6 30 200)">TCB</text><text x="320" y="196" font-family="Sedgwick Ave Display, cursive" font-size="10" fill="#8a2a5a" transform="rotate(5 320 196)">THE KING</text>' +
      /* the gates: two leaves with bars, staff lines and notes */
      '<rect x="114" y="140" width="10" height="82" fill="#6a5f50"/><rect x="276" y="140" width="10" height="82" fill="#6a5f50"/>' +
      '<rect x="124" y="148" width="152" height="70" fill="#7fb0a4" opacity=".25"/>' + bars(124) + bars(200) +
      '<path d="M124 148h152M124 216h152" stroke="#1d1d1d" stroke-width="3"/><path d="M200 148v68" stroke="#1d1d1d" stroke-width="3"/>' + staff(124) + staff(200) +
      notes +
      '<rect x="0" y="220" width="400" height="40" fill="#5d5a55"/><path d="M0 240h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      '<g class="yd-car"><rect x="0" y="232" width="62" height="14" rx="5" fill="#f2f2f2"/><rect x="12" y="225" width="32" height="10" rx="4" fill="#cfcfcf"/><circle cx="14" cy="247" r="4.5" fill="#111"/><circle cx="48" cy="247" r="4.5" fill="#111"/></g>' +
      '<rect x="304" y="6" width="90" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="349" y="21" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">Elvis Presley Blvd</text>',
      sky("yds3", "#6aa8e8", "#f6e0b0"));
  }

  /* 4. Memphis International Airport: the tower and a jet climbing over the neighborhood */
  function ydairport() {
    const runwayLights = Array.from({ length: 14 }, (_, i) => '<circle class="yd-bl' + (i % 2 ? ' yd-bl2' : '') + '" cx="' + (12 + i * 28) + '" cy="222" r="2.2" fill="' + (i % 3 ? "#ffd27a" : "#7ab8ff") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yds4)"/>' + stars(22) +
      '<circle cx="330" cy="46" r="14" fill="#f3efd8" opacity=".9"/>' +
      /* terminal low and wide */
      '<rect x="20" y="150" width="220" height="40" fill="#3c4656"/><path d="M20 150q110 -18 220 0z" fill="#56637a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="yd-sh' + (i % 2 ? ' yd-sh2' : '') + '" x="' + (30 + i * 21) + '" y="160" width="14" height="10" fill="#ffe2a0"/>').join("") +
      /* the control tower: tall shaft, flared top, green glass cab */
      '<path d="M286 196v-110h22v110z" fill="#cfc8ba"/><path d="M290 196v-110M304 196v-110" stroke="#b0a998" stroke-width="2"/>' +
      '<path d="M276 86h42l-6 -10h-30z" fill="#e2dccf"/><path d="M280 76l4 -24h26l4 24z" fill="#2e6f6a"/><path d="M284 72h26M286 62h22" stroke="#9fe0d6" stroke-width="1.5" opacity=".7"/>' +
      '<path d="M278 52h38l-4 -6h-30z" fill="#e2dccf"/><rect x="295" y="30" width="3" height="16" fill="#cfc8ba"/><circle class="yd-bl" cx="296.5" cy="29" r="2.5" fill="#ff4040"/>' +
            '<rect x="0" y="196" width="400" height="64" fill="#2b2f36"/><path d="M0 226h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="22 14"/>' + runwayLights +
      '<g transform="translate(0 150)">' + jet("yd-jet", 1) + '</g>' +
      '<rect x="20" y="236" width="230" height="18" rx="2" fill="#111"/><text x="30" y="249" ' + font + ' font-size="10" fill="#fff">MEMPHIS INTERNATIONAL AIRPORT</text>',
      sky("yds4", "#141a3a", "#4a5f8f"));
  }

  /* 5. Dunn Ave and Castalia St, Castalia Heights */
  function ydcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#yds5)"/>' + stars(16) +
      '<g transform="translate(0 50)">' + jet("yd-jet2", .55) + '</g>' +
      /* the hill and rooftops behind the wall */
      '<path d="M0 116q100 -34 220 -20t180 -4v32H0z" fill="#26341f"/>' +
      '<g fill="#1c2430"><path d="M40 112l18 -14l18 14z"/><path d="M120 106l16 -12l16 12z"/><path d="M250 104l20 -14l20 14z"/></g>' +
      Array.from({ length: 4 }, (_, i) => '<rect class="yd-sh' + (i % 2 ? ' yd-sh2' : '') + '" x="' + [52, 130, 262, 300][i] + '" y="' + [104, 98, 96, 100][i] + '" width="6" height="5" fill="#ffd98a"/>').join("") +
      '<rect x="0" y="122" width="400" height="102" fill="#5a4f6a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#4a4058" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#4a4058" stroke-width="1"/>').join("")).join("") +
      tag("DOLPH", 18, 196, 54, GOLD, -6) + tag("PAPER ROUTE", 30, 150, 18, BLUE, -4) + tag("IT'S DOLPH", 176, 214, 17, "#f2f2f2", -3) + tag("PRE", 214, 160, 20, "#e05a5a", 5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="yd-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="' + BLUE + '"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#2a5a9a"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      /* sign post: green street signs plus the brown and gold honor sign */
      '<rect x="336" y="60" width="6" height="164" fill="#2f2f2f"/>' +
      '<rect x="258" y="58" width="138" height="30" rx="2" fill="' + BROWN + '" stroke="' + GOLD + '" stroke-width="2"/><text x="327" y="71" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">ADOLPH "YOUNG DOLPH"</text><text x="327" y="82" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">THORNTON JR. AVE</text>' +
      sign(282, 94, 100, "Dunn Ave") + sign(286, 124, 92, "Castalia St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="yd-sh" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="yd-sp"><circle cx="240" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="yd-sp yd-sp2"><circle cx="246" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("yds5", "#121a36", "#b0703a"));
  }

  window.SCENES = { ydstop: ydstop, ydhamilton: ydhamilton, ydgraceland: ydgraceland, ydairport: ydairport, ydcorner: ydcorner };
})();
