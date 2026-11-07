/* Mac Dre scenes (Regions tab: The Bay Area; North Vallejo, "the Crest", "the V"). CSS classes prefixed mdr- (the page's own anim-train slides the bus in).
   1 Sereno Transit Center, 760 Sereno Dr, North Vallejo: the four big SolTrans shelters, a white SolTrans bus with blue and green stripes pulling in.
   2 Hogan High School, Vallejo: the auditorium stage where young Andre first rapped at a talent show; red curtains, spotlights sweeping, the mic stand.
   3 Country Club Crest ("the Crest"), North Vallejo: small houses stacked up the hillside at dusk, porch lights, an old Cougar bouncing up the street.
   4 Blue Rock Springs Park beside the Crest on Columbus Pkwy: golden summer hills, valley oaks, the pond with ducks, the blue-gray rock outcrop.
   5 Taper Ave (honorary "Mac Dre Way" since 2026) and Amelia St, by his childhood home: green signs plus the brown honorary sign, MAC DRE tagged, the fairgrounds grandstand lights behind.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mdrcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.mdr-car{animation:mdrcar 7s linear infinite}.mdr-car2{animation-delay:-3.5s}' +
    '@keyframes mdrcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.mdr-carL{animation:mdrcarL 8s linear infinite}' +
    '@keyframes mdrflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.95}}.mdr-flk{animation:mdrflick 2.4s infinite}.mdr-flk2{animation-delay:.8s}' +
    '@keyframes mdrsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.mdr-sw{transform-box:fill-box;transform-origin:50% 0%;animation:mdrsweep 4s ease-in-out infinite}.mdr-sw2{animation-delay:-2s}' +
    '@keyframes mdrglow{0%,100%{opacity:.5}50%{opacity:1}}.mdr-glow{animation:mdrglow 2.6s ease-in-out infinite}.mdr-glow2{animation-delay:-1.3s}' +
    '@keyframes mdrbounce{0%,100%{transform:translateY(0)}25%{transform:translateY(-5px)}50%{transform:translateY(0)}75%{transform:translateY(-3px)}}.mdr-bnc{animation:mdrbounce .8s ease-in-out infinite}' +
    '@keyframes mdrdrive{from{transform:translate(-90px,30px)}to{transform:translate(460px,-30px)}}.mdr-drive{animation:mdrdrive 9s linear infinite}' +
    '@keyframes mdrduck{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.mdr-duck{animation:mdrduck 10s ease-in-out infinite}.mdr-duck2{animation-delay:-5s}' +
    '@keyframes mdrrip{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.mdr-rip{transform-box:fill-box;transform-origin:50% 50%;animation:mdrrip 2.4s ease-out infinite}' +
    '@keyframes mdrleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.mdr-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:mdrleaf 3.5s ease-in-out infinite}' +
    '@keyframes mdrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mdr-sp{animation:mdrspray 1.4s ease-out infinite}.mdr-sp2{animation-delay:.45s}' +
    '@keyframes mdrbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-20px)}}.mdr-bird{animation:mdrbird 13s linear infinite}.mdr-bird2{animation-delay:-6.5s}' +
    '@keyframes mdrnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.mdr-note{animation:mdrnote 2.2s ease-out infinite}.mdr-note2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 12) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 12) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + (c || "#0f6b3a") + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c, flip) => '<g class="' + cls + '"><g' + (flip ? ' transform="translate(' + (2 * x + 58) + ',0) scale(-1,1)"' : '') + '><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 56) + '" cy="' + (y + 5) + '" r="2" fill="#fff6c2"/></g></g>';
  const palm = (x, y, h) => '<path d="M' + x + ' ' + y + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    [-50, -20, 10, 40, 160, 200].map(a => '<path d="M' + (x + 2) + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 14).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 10 - 6).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 24).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 16 + 4).toFixed(1) + '" stroke="#2f7a3a" stroke-width="3" fill="none" stroke-linecap="round"/>').join("");
  const oak = (x, y, s) => '<rect x="' + (x - 3 * s) + '" y="' + (y - 18 * s) + '" width="' + (6 * s) + '" height="' + (18 * s) + '" fill="#4a3424"/><g class="mdr-leaf"><ellipse cx="' + x + '" cy="' + (y - 26 * s) + '" rx="' + (26 * s) + '" ry="' + (15 * s) + '" fill="#3f5a2a"/><ellipse cx="' + (x - 12 * s) + '" cy="' + (y - 30 * s) + '" rx="' + (13 * s) + '" ry="' + (10 * s) + '" fill="#4f6e33"/><ellipse cx="' + (x + 12 * s) + '" cy="' + (y - 32 * s) + '" rx="' + (14 * s) + '" ry="' + (10 * s) + '" fill="#4a6830"/></g>';
  const ST_BLUE = "#0067b1", ST_GREEN = "#6cb33f", GOLD = "#ffd23f", PURP = "#8a5cff", PINK = "#ff4f8b";

  /* 1. Sereno Transit Center: four big shelters, landscaping, a SolTrans bus pulling in */
  function mdrstation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="104" width="28" height="22" rx="2" fill="#1f2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="96" width="310" height="52" rx="8" fill="#f6f7f8" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<path d="M34 134h310v6H34z" fill="' + ST_BLUE + '"/><path d="M34 140h310v4H34z" fill="' + ST_GREEN + '"/>' +
      '<path d="M120 96q60 22 140 0" stroke="' + ST_GREEN + '" stroke-width="4" fill="none"/>' +
      '<path d="M330 98q14 2 14 18v18h-16z" fill="#1f2a33"/><rect x="331" y="101" width="12" height="8" rx="1" fill="#111"/><text x="337" y="108" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a">5</text>' +
      '<circle cx="84" cy="150" r="9" fill="#111"/><circle cx="290" cy="150" r="9" fill="#111"/><circle cx="342" cy="138" r="3" fill="#fff6c2"/></g>';
    const shelter = x => '<rect x="' + x + '" y="60" width="74" height="6" fill="#4a5a66"/><path d="M' + x + ' 60l8 -8h58l8 8z" fill="#5f7280"/><rect x="' + (x + 4) + '" y="66" width="4" height="86" fill="#4a5a66"/><rect x="' + (x + 66) + '" y="66" width="4" height="86" fill="#4a5a66"/><rect x="' + (x + 10) + '" y="70" width="54" height="40" fill="#bfe3ff" opacity=".25"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mdrs1)"/>' +
      '<path d="M0 74q60 -26 130 -14t140 -8t130 10v20H0z" fill="#b89a5a" opacity=".85"/>' +
      palm(18, 160, 92) + palm(384, 160, 100) +
      shelter(12) + shelter(112) + shelter(214) + shelter(314) +
      '<g class="mdr-flk"><rect x="40" y="62" width="30" height="2" fill="#fff3c4"/><rect x="242" y="62" width="30" height="2" fill="#fff3c4"/></g><g class="mdr-flk mdr-flk2"><rect x="140" y="62" width="30" height="2" fill="#fff3c4"/><rect x="342" y="62" width="30" height="2" fill="#fff3c4"/></g>' +
      bus +
      '<rect x="0" y="158" width="400" height="8" fill="#cfc8b8"/><rect x="0" y="156" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="166" width="400" height="94" fill="#3a3b40"/><path d="M0 212h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("mdr-car", 0, 196, "#c94a3a") + car("mdr-car mdr-car2", 0, 196, GOLD) + car("mdr-carL", 0, 238, "#2f6fa8", true) +
      '<rect x="22" y="12" width="356" height="32" rx="3" fill="#111"/><text x="34" y="34" ' + font + ' font-size="15" fill="#fff">Sereno Transit Ctr</text>' + badge(196, 28, "1", ST_BLUE) + badge(220, 28, "2", ST_BLUE) + badge(244, 28, "4", ST_BLUE) + badge(268, 28, "5", ST_BLUE) + badge(292, 28, "7A", ST_GREEN) + badge(324, 28, "7B", ST_GREEN) +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#f7efe0">SOLTRANS · SERENO DR · NORTH VALLEJO</text>',
      sky("mdrs1", "#3a4a8a", "#f2b06a"));
  }

  /* 2. Hogan High School auditorium: talent show stage, red curtains, sweeping spotlights, the mic */
  function mdrhogan() {
    const seats = Array.from({ length: 3 }, (_, r) => Array.from({ length: 14 }, (_, i) => '<path d="M' + (14 + i * 27 + r * 6) + ' ' + (222 + r * 14) + 'q10 -10 20 0v8h-20z" fill="' + (r % 2 ? "#5a1e2a" : "#6e2433") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="#120c18"/>' +
      '<rect x="30" y="30" width="340" height="150" fill="#2a1a24"/>' +
      '<g class="mdr-glow"><ellipse cx="200" cy="168" rx="70" ry="10" fill="#fff3c4" opacity=".35"/></g>' +
      '<g class="mdr-sw"><path d="M110 0l-44 172h60z" fill="#fff3c4" opacity=".14"/></g><g class="mdr-sw mdr-sw2"><path d="M290 0l-16 172h60z" fill="#fff3c4" opacity=".14"/></g>' +
      /* curtains */
      '<path d="M30 30h80v150q-20 -10 -40 0t-40 0z" fill="#a8202e"/><path d="M290 30h80v150q-20 -10 -40 0t-40 0z" fill="#a8202e"/>' +
      '<path d="M44 30v146M62 30v144M80 30v146M96 30v144M304 30v144M320 30v146M338 30v144M356 30v146" stroke="#7a1420" stroke-width="3"/>' +
      '<path d="M30 30h340v22q-170 22 -340 0z" fill="#c42a3a"/><path d="M30 52q170 22 340 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      /* mic stand and speaker */
      '<rect x="198" y="118" width="4" height="56" fill="#9aa0a8"/><path d="M186 174h28" stroke="#9aa0a8" stroke-width="4"/><rect x="194" y="108" width="12" height="16" rx="6" fill="#3a3a3a" stroke="#9aa0a8" stroke-width="1.5"/>' +
      '<rect x="128" y="138" width="30" height="36" rx="3" fill="#1a1a1a"/><circle cx="143" cy="150" r="7" fill="#333"/><circle cx="143" cy="166" r="4" fill="#333"/>' +
      '<rect x="244" y="150" width="44" height="24" rx="3" fill="#2a2a2a"/><circle cx="256" cy="162" r="7" fill="#444"/><circle cx="276" cy="162" r="7" fill="#444"/>' +
      '<g class="mdr-note" fill="' + GOLD + '"><path d="M150 120v-14l8 -2v14" stroke="' + GOLD + '" stroke-width="2" fill="none"/><circle cx="148" cy="120" r="3"/></g>' +
      '<g class="mdr-note mdr-note2" fill="' + PINK + '"><path d="M262 140v-14l8 -2v14" stroke="' + PINK + '" stroke-width="2" fill="none"/><circle cx="260" cy="140" r="3"/></g>' +
      '<rect x="20" y="176" width="360" height="14" fill="#6a4a2a"/><rect x="20" y="188" width="360" height="6" fill="#4a3018"/>' +
      '<rect x="120" y="62" width="160" height="22" rx="2" fill="#1a1420" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="78" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="2">TALENT SHOW</text>' +
      seats +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#f7efe0" letter-spacing="2">HOGAN HIGH SCHOOL · VALLEJO</text>');
  }

  /* 3. Country Club Crest: small houses stacked up the hill at dusk, porch lights, an old Cougar bouncing up the street */
  function mdrcrest() {
    const house = (x, y, c, r) => '<rect x="' + x + '" y="' + y + '" width="40" height="24" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l24 -14l24 14z" fill="' + r + '"/>' +
      '<rect x="' + (x + 6) + '" y="' + (y + 7) + '" width="9" height="8" fill="#f2d27a" class="mdr-glow"/><rect x="' + (x + 25) + '" y="' + (y + 10) + '" width="8" height="14" fill="#3a2a22"/>';
    const rows = [[20, 66, "#d8c4a0", "#7a4a3a"], [74, 60, "#c8d4dc", "#4a5a6a"], [128, 54, "#e2c89a", "#6a3a2a"], [182, 50, "#d4b8c8", "#5a3a4a"], [236, 46, "#cfd8b0", "#4a5a3a"], [290, 42, "#e0d0b0", "#7a4a3a"], [344, 40, "#c8c0d8", "#4a4a6a"],
      [6, 112, "#e2d2b0", "#5a3a2a"], [62, 106, "#d0dcd0", "#3a5a4a"], [118, 100, "#e8c8a8", "#7a4a3a"], [174, 96, "#c8c8dc", "#4a4a6a"], [230, 92, "#dcc8a0", "#6a3a2a"], [286, 88, "#d4dcc0", "#4a5a3a"], [342, 86, "#e0c0c0", "#6a3a3a"]];
    return svg(
      '<rect width="400" height="260" fill="url(#mdrs3)"/>' +
      '<circle cx="330" cy="30" r="14" fill="#fff0c8" opacity=".85"/>' +
      '<path d="M0 90l400 -60v230H0z" fill="#6e6a3a"/>' +
      rows.map(r => house(r[0], r[1], r[2], r[3])).join("") +
      '<path d="M0 148l400 -48v20L0 168z" fill="#4a4a50"/><path d="M0 158l400 -48" stroke="#e8e0a0" stroke-width="1.5" stroke-dasharray="10 10"/>' +
      '<path d="M0 168l400 -48v140H0z" fill="#7a7444"/>' +
      [40, 150, 260, 370].map((x, i) => '<rect x="' + x + '" y="' + (128 - i * 13) + '" width="3" height="40" fill="#5a5a5a"/><g class="mdr-glow' + (i % 2 ? " mdr-glow2" : "") + '"><circle cx="' + (x + 1.5) + '" cy="' + (128 - i * 13) + '" r="4" fill="#ffe7a0"/></g>').join("") +
      /* old Cougar coming up the hill with a bounce */
      '<g class="mdr-drive"><g class="mdr-bnc" transform="rotate(-7 60 150)"><rect x="20" y="142" width="80" height="16" rx="5" fill="#6a2a8a"/><rect x="38" y="132" width="40" height="12" rx="3" fill="#6a2a8a"/><rect x="42" y="134" width="14" height="8" fill="#bfe3ff"/><rect x="60" y="134" width="14" height="8" fill="#bfe3ff"/><circle cx="36" cy="160" r="7" fill="#111"/><circle cx="36" cy="160" r="3" fill="#cfd4da"/><circle cx="84" cy="160" r="7" fill="#111"/><circle cx="84" cy="160" r="3" fill="#cfd4da"/><circle cx="99" cy="148" r="2.5" fill="#fff6c2"/></g></g>' +
      '<rect x="120" y="198" width="160" height="26" rx="3" fill="#111" opacity=".75"/><text x="200" y="216" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">COUNTRY CLUB CREST</text>' +
      '<g class="mdr-bird"><path d="M10 54q5 -5 10 0q5 -5 10 0" stroke="#2a2030" stroke-width="1.5" fill="none"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f7efe0">THE CREST · NORTH VALLEJO</text>',
      sky("mdrs3", "#2a2a6a", "#f08a5a"));
  }

  /* 4. Blue Rock Springs Park: golden hills, valley oaks, the pond with ducks, the blue-gray rock */
  function mdrbluerock() {
    const duck = (cls, x, y) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="7" ry="4" fill="#5a4a3a"/><circle cx="' + (x + 6) + '" cy="' + (y - 4) + '" r="3" fill="#2f6a3a"/><path d="M' + (x + 8) + ' ' + (y - 4) + 'l4 1l-4 1z" fill="#e2a23a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mdrs4)"/>' +
      '<path d="M0 100q80 -50 170 -20t130 -30t100 20v60H0z" fill="#d9b25a"/>' +
      '<path d="M0 126q120 -36 240 -10t160 -10v60H0z" fill="#c99c44"/>' +
      oak(60, 132, 1.1) + oak(330, 128, 1.2) + oak(220, 118, .8) +
      /* blue-gray rock outcrop */
      '<path d="M100 150l18 -30l26 -10l30 8l20 22l6 14z" fill="#6a7a8e"/><path d="M118 120l26 -10l10 22l-22 10z" fill="#8a9ab0"/><path d="M144 110l30 8l-8 20l-12 -6z" fill="#7a8aa0"/>' +
      '<rect x="0" y="152" width="400" height="108" fill="#a88a3a"/>' +
      /* the pond */
      '<ellipse cx="250" cy="196" rx="140" ry="34" fill="#4a7a9a"/><ellipse cx="250" cy="196" rx="140" ry="34" fill="none" stroke="#6a5a2a" stroke-width="3"/>' +
      '<ellipse class="mdr-rip" cx="210" cy="198" rx="14" ry="4" fill="none" stroke="#bfe3ff" stroke-width="1.5"/><ellipse class="mdr-rip" style="animation-delay:-1.2s" cx="300" cy="190" rx="12" ry="3" fill="none" stroke="#bfe3ff" stroke-width="1.5"/>' +
      duck("mdr-duck", 180, 196) + duck("mdr-duck mdr-duck2", 240, 206) +
      /* picnic table */
      '<rect x="40" y="200" width="60" height="6" fill="#7a5030"/><rect x="34" y="214" width="72" height="4" fill="#7a5030"/><path d="M48 206l-6 22M92 206l6 22" stroke="#5a3a20" stroke-width="4"/>' +
      '<g class="mdr-bird"><path d="M10 50q5 -5 10 0q5 -5 10 0" stroke="#2a2030" stroke-width="1.5" fill="none"/></g><g class="mdr-bird mdr-bird2"><path d="M0 36q4 -4 8 0q4 -4 8 0" stroke="#2a2030" stroke-width="1.5" fill="none"/></g>' +
      '<rect x="110" y="232" width="180" height="22" rx="2" fill="#5a3a20"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="12" fill="#f2e6c8" letter-spacing="1">BLUE ROCK SPRINGS PARK</text>' +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2030">COLUMBUS PKWY · BY THE CREST</text>',
      sky("mdrs4", "#8ec8ea", "#f4e2b0"));
  }

  /* 5. Taper Ave (Mac Dre Way) and Amelia St: green signs + honorary brown sign, MAC DRE tagged, the fairgrounds grandstand lights behind */
  function mdrcorner() {
    const tower = x => '<rect x="' + x + '" y="40" width="4" height="80" fill="#6a6a72"/><rect x="' + (x - 10) + '" y="34" width="24" height="10" fill="#4a4a52"/><g class="mdr-glow"><rect x="' + (x - 8) + '" y="36" width="20" height="6" fill="#fff3c4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mdrs5)"/>' +
      tower(70) + tower(320) +
      /* the long grandstand roof behind */
      '<path d="M40 104l20 -16h280l20 16z" fill="#e8ecf0"/><rect x="50" y="104" width="300" height="34" fill="#c8ccd2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (58 + i * 29) + '" y="106" width="3" height="32" fill="#9aa0a8"/>').join("") +
      '<path d="M50 118h300M50 128h300" stroke="#a8aeb6" stroke-width="1"/>' +
      '<g class="mdr-bird"><path d="M10 60q5 -5 10 0q5 -5 10 0" stroke="#f2e6d8" stroke-width="1.5" fill="none"/></g>' +
      /* the wall */
      '<rect x="0" y="138" width="290" height="90" fill="#4a3a5a"/>' +
      Array.from({ length: 5 }, (_, r) => '<path d="M0 ' + (154 + r * 15) + 'h290" stroke="#3a2c4a" stroke-width="1"/>').join("") +
      tag("YADADAMEAN", 24, 164, 16, PURP, -4) + tag("MAC DRE", 12, 208, 44, GOLD, -6) + tag("CRESTSIDE", 196, 224, 17, PINK, -4) +
      '<g class="mdr-sp"><circle cx="270" cy="186" r="3" fill="' + GOLD + '"/></g><g class="mdr-sp mdr-sp2"><circle cx="276" cy="192" r="2.4" fill="' + PINK + '"/></g>' +
      '<rect x="268" y="190" width="10" height="20" rx="2" fill="#d8d8d8"/><rect x="270" y="184" width="6" height="7" fill="#3a3a3a"/>' +
      /* sign post: Taper Av, honorary Mac Dre Way, Amelia St */
      '<rect x="330" y="72" width="5" height="156" fill="#4a4a4a"/>' + sign(296, 72, 74, "Taper Av") + sign(290, 96, 86, "Mac Dre Way", "#6a3a1e") + sign(296, 120, 74, "Amelia St") +
      '<rect x="0" y="228" width="400" height="32" fill="#3a3b40"/><rect x="0" y="226" width="400" height="4" fill="#cfc8b8"/>' +
      car("mdr-car", 0, 246, "#6a2a8a") +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f7efe0">TAPER AV &amp; AMELIA ST · NORTH VALLEJO</text>',
      sky("mdrs5", "#1a1438", "#a84a6a"));
  }

  window.SCENES = { mdrstation, mdrhogan, mdrcrest, mdrbluerock, mdrcorner };
})();
