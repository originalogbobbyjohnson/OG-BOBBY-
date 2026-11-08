/* youngmc scenes (Regions tab: Los Angeles + SoCal; University Park, by USC). CSS classes and ids prefixed ym- (the page's own anim-train is kept).
   1 Jefferson/USC on the Metro E Line: at-grade side platforms beside Flower St, the gold E bullet, a train sliding in.
   2 Tommy Trojan on the USC campus (he came out from Hollis, Queens to study economics at USC): the bronze warrior on his granite base, red-brick halls, students passing.
   3 His USC dorm room, the night Delicious Vinyl cold-called and he rapped for them over the phone: corded phone ringing, notebook of rhymes, boombox.
   4 The Shrine Auditorium on Jefferson Blvd, where the 1990 Grammys were held (Bust a Move won Best Rap Performance): cream Moorish towers and domes, spotlights sweeping.
   5 W Jefferson Blvd and S Figueroa St: green signs, YOUNG MC tagged on the wall, the downtown LA towers up Figueroa behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ymflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ym-flk{animation:ymflick 2.4s infinite}' +
    '@keyframes ymsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ym-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ymsway 4s ease-in-out infinite}' +
    '@keyframes ymwalk{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ym-walk{animation:ymwalk 11s linear infinite}.ym-walk2{animation-duration:15s;animation-delay:-6s}' +
    '@keyframes ymring{0%,100%{transform:rotate(0)}10%{transform:rotate(-8deg)}20%{transform:rotate(8deg)}30%{transform:rotate(-8deg)}40%{transform:rotate(8deg)}50%{transform:rotate(0)}}.ym-ring{transform-box:fill-box;transform-origin:50% 100%;animation:ymring 1.6s ease-in-out infinite}' +
    '@keyframes ymwave{0%,100%{opacity:0;transform:scale(.6)}40%{opacity:1}100%{transform:scale(1.3)}}.ym-wave{transform-box:fill-box;transform-origin:0% 50%;animation:ymwave 1.6s ease-out infinite}.ym-wave2{animation-delay:.5s}' +
    '@keyframes ymnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-34px);opacity:0}}.ym-note{animation:ymnote 2.6s ease-out infinite}.ym-n2{animation-delay:-.9s}.ym-n3{animation-delay:-1.7s}' +
    '@keyframes ymbeam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ym-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ymbeam 5s ease-in-out infinite}.ym-beam2{animation-delay:-2.5s}' +
    '@keyframes ymtw{0%,100%{opacity:.2}50%{opacity:1}}.ym-tw{animation:ymtw 2s ease-in-out infinite}.ym-tw2{animation-delay:-.7s}.ym-tw3{animation-delay:-1.4s}' +
    '@keyframes ymspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ym-sp{animation:ymspray 1.4s ease-out infinite}.ym-sp2{animation-delay:.45s}' +
    '@keyframes ymcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ym-car{animation:ymcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.2"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff" stroke="#6b4a00" stroke-width=".6">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="ym-sway"><path d="M' + x + ' ' + y + 'q-3 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="' + (c || "#3a2f2a") + '" stroke-width="4" fill="none"/>' +
    [-60, -25, 10, 45, 80, 120].map(a => { const r = a * Math.PI / 180, tx = x + 2 + Math.cos(r) * 20, ty = y - h + Math.sin(r) * 8 + 6; return '<path d="M' + (x + 2) + ' ' + (y - h) + 'Q' + ((x + 2 + tx) / 2) + ' ' + (y - h - 10) + ' ' + tx + ' ' + ty + '" stroke="' + (c || "#2c3a26") + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>'; }).join("") + '</g>';
  const person = (x, y, c) => '<g><circle cx="' + x + '" cy="' + (y - 26) + '" r="5" fill="#3a2a22"/><rect x="' + (x - 5) + '" y="' + (y - 21) + '" width="10" height="13" rx="3" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 8) + 'l-2 8M' + (x + 3) + ' ' + (y - 8) + 'l2 8" stroke="#2a2a33" stroke-width="3"/></g>';
  const GOLD = "#fdb913", CARD = "#9d2235", YGOLD = "#ffc72c", CREAM = "#f3e6c8";

  /* 1. Jefferson/USC: at-grade E Line side platforms beside Flower St */
  function ymstation() {
    let wins = "";
    for (let x = 40; x < 320; x += 34) wins += '<rect x="' + x + '" y="134" width="24" height="24" rx="3" fill="#2b3640"/>';
    const tr = '<g class="anim-train"><rect x="24" y="122" width="320" height="62" rx="10" fill="#e9ecef" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="24" y="164" width="320" height="6" fill="' + GOLD + '"/><rect x="24" y="172" width="320" height="3" fill="#59626b"/>' +
      '<rect x="326" y="128" width="18" height="52" rx="5" fill="#cfd4d9"/><rect x="330" y="134" width="12" height="16" rx="2" fill="#2b3640"/><circle cx="336" cy="172" r="3" fill="#fff6c2"/>' +
      '<circle cx="80" cy="186" r="7" fill="#333"/><circle cx="130" cy="186" r="7" fill="#333"/><circle cx="240" cy="186" r="7" fill="#333"/><circle cx="290" cy="186" r="7" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ym-s1)"/>' +
      '<circle cx="64" cy="38" r="18" fill="#fff3b0" opacity=".9"/>' +
      /* downtown towers far up Flower St */
      '<g fill="#8fa6b8" opacity=".75"><rect x="150" y="56" width="18" height="64"/><path d="M196 120V50l10-14v84z"/><rect x="214" y="70" width="16" height="50"/><rect x="236" y="62" width="14" height="58"/><path d="M262 120V58q8-8 16 0v62z"/></g>' +
      palm(26, 122, 84) + palm(372, 122, 96) + palm(330, 120, 64, "#4a3c34") +
      '<rect x="0" y="118" width="400" height="80" fill="#c9c2b4" opacity=".25"/>' +
      '<path d="M0 188h400" stroke="#6d6d6d" stroke-width="3"/><rect x="0" y="190" width="400" height="14" fill="#8a8a86"/><path d="M0 196h400" stroke="#5a5a56" stroke-width="2" stroke-dasharray="6 6"/>' +
      tr +
      '<rect x="0" y="204" width="400" height="10" fill="#f2c200"/><rect x="0" y="214" width="400" height="46" fill="#bdb6a8"/>' +
      /* side-platform canopy */
      '<path d="M40 214v-122M360 214v-122" stroke="#4f5a63" stroke-width="5"/><path d="M18 92h364l-14-12H32z" fill="#d7dde2" stroke="#4f5a63" stroke-width="3"/>' +
      '<rect x="86" y="98" width="228" height="30" rx="3" fill="#111"/><text x="100" y="119" ' + font + ' font-size="16" fill="#fff">Jefferson/USC</text>' + bullet(292, 113, "E", GOLD) +
      '<rect x="150" y="226" width="100" height="5" rx="2" fill="#fff6c2" opacity=".5" class="ym-flk"/>',
      sky("ym-s1", "#79b7e8", "#f7dcb0"));
  }

  /* 2. Tommy Trojan: bronze warrior on a granite base in front of red-brick halls */
  function ymtrojan() {
    let bricks = "";
    for (let y = 92; y < 186; y += 8) bricks += '<path d="M0 ' + y + 'h400" stroke="#7a2f22" stroke-width=".7" opacity=".45"/>';
    const arch = x => '<path d="M' + x + ' 186v-46q14-20 28 0v46z" fill="#3a2420"/><path d="M' + x + ' 140q14-20 28 0" stroke="#e7d6b0" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ym-s2)"/>' +
      /* brick halls */
      '<rect x="0" y="86" width="400" height="100" fill="#b5523b"/>' + bricks +
      '<path d="M0 86h400" stroke="#e7d6b0" stroke-width="4"/>' +
      [20, 70, 300, 350].map(arch).join("") +
      '<rect x="120" y="98" width="20" height="26" fill="#2c3e50"/><rect x="260" y="98" width="20" height="26" fill="#2c3e50"/>' +
      palm(108, 188, 120) + palm(298, 188, 112) +
      '<rect x="0" y="186" width="400" height="74" fill="#d8cdb6"/><path d="M0 200h400M0 222h400" stroke="#bfb29a" stroke-width="2"/>' +
      /* granite pedestal */
      '<path d="M162 210h76l-6-12h-64z" fill="#8c8c8c"/><rect x="172" y="146" width="56" height="52" fill="#a3a3a3"/><rect x="168" y="140" width="64" height="8" fill="#8c8c8c"/>' +
      '<rect x="180" y="160" width="40" height="22" fill="#959595" stroke="#7a7a7a"/>' +
      /* bronze warrior silhouette (helmet crest, cape, round shield, sword) */
      '<g fill="#5a4a2a" stroke="#3a2e18" stroke-width="1.2">' +
      '<path d="M192 140l2-34h12l2 34z"/>' +
      '<path d="M190 108q10-10 20 0l2 10h-24z"/>' +
      '<path d="M196 72q4-6 8 0v8h-8z"/><path d="M192 74q8-16 20-6q-6 0-10 4z"/>' +
      '<rect x="195" y="78" width="10" height="10" rx="4"/><rect x="197" y="88" width="6" height="6"/>' +
      '<path d="M188 94h24l-2 16h-20z"/>' +
      '<path d="M212 96q14 6 20 24l-6 2q-6-14-16-18z"/>' +
      '<circle cx="182" cy="112" r="12" fill="#6b5832"/><circle cx="182" cy="112" r="4" fill="#4a3b20"/>' +
      '</g>' +
      '<path d="M228 120l14-28" stroke="#c8c2b0" stroke-width="3" stroke-linecap="round"/><path d="M226 124l6-6" stroke="#5a4a2a" stroke-width="4"/>' +
      /* students walking by */
      '<g class="ym-walk">' + person(0, 236, CARD) + '</g><g class="ym-walk ym-walk2">' + person(0, 248, YGOLD) + '</g>',
      sky("ym-s2", "#7fc1ee", "#fbe7c4"));
  }

  /* 3. His USC dorm room: the night the label called and he rapped over the phone */
  function ymdorm() {
    return svg(
      '<rect width="400" height="260" fill="#2a2230"/>' +
      '<rect x="0" y="0" width="400" height="180" fill="#3b3045"/><rect x="0" y="180" width="400" height="80" fill="#4a3a2c"/>' +
      /* window: LA night, palm, city lights */
      '<rect x="230" y="22" width="150" height="110" fill="url(#ym-s3)" stroke="#d8cfc0" stroke-width="5"/><path d="M305 22v110M230 77h150" stroke="#d8cfc0" stroke-width="4"/>' +
      '<g fill="#ffd27a"><circle class="ym-tw" cx="250" cy="118" r="1.6"/><circle class="ym-tw ym-tw2" cx="270" cy="112" r="1.6"/><circle class="ym-tw ym-tw3" cx="320" cy="116" r="1.6"/><circle class="ym-tw" cx="350" cy="110" r="1.6"/><circle class="ym-tw ym-tw2" cx="364" cy="120" r="1.6"/></g>' +
      '<path d="M236 132v-16h14v-10h12v26zM330 132v-24h12v-8h10v32z" fill="#1d1a2a"/>' +
      '<circle cx="356" cy="44" r="10" fill="#f5efd6" opacity=".9"/>' +
      /* poster with a record */
      '<rect x="36" y="26" width="70" height="90" rx="2" fill="' + CARD + '"/><circle cx="71" cy="64" r="24" fill="#111"/><circle cx="71" cy="64" r="8" fill="' + YGOLD + '"/><text x="71" y="106" text-anchor="middle" ' + font + ' font-size="11" fill="' + YGOLD + '">HOLLIS</text>' +
      /* desk */
      '<rect x="20" y="168" width="360" height="12" fill="#8a5a36"/><rect x="30" y="180" width="10" height="70" fill="#6e4528"/><rect x="360" y="180" width="10" height="70" fill="#6e4528"/>' +
      /* notebook of rhymes */
      '<g transform="rotate(-6 120 156)"><rect x="80" y="140" width="80" height="30" fill="#fbf7ea" stroke="#999"/>' +
      [146, 152, 158, 164].map(y => '<path d="M86 ' + y + 'h' + (40 + (y % 3) * 10) + '" stroke="#3a5ea8" stroke-width="1.5"/>').join("") + '</g>' +
      '<path d="M88 176l60-4" stroke="' + YGOLD + '" stroke-width="3" stroke-linecap="round"/>' +
      /* boombox */
      '<rect x="250" y="134" width="110" height="36" rx="4" fill="#26262c" stroke="#55555f" stroke-width="2"/><circle cx="272" cy="152" r="12" fill="#444" stroke="#888"/><circle cx="338" cy="152" r="12" fill="#444" stroke="#888"/><rect x="292" y="144" width="26" height="14" fill="#8fa3b0"/><path d="M262 134q43-20 86 0" stroke="#55555f" stroke-width="3" fill="none"/>' +
      '<g fill="' + YGOLD + '"><text class="ym-note" x="290" y="128" font-size="16">&#9834;</text><text class="ym-note ym-n2" x="312" y="124" font-size="14">&#9835;</text><text class="ym-note ym-n3" x="330" y="128" font-size="16">&#9834;</text></g>' +
      /* corded phone ringing */
      '<g class="ym-ring"><rect x="186" y="148" width="46" height="22" rx="5" fill="#d8cfc0" stroke="#7a7266" stroke-width="2"/><rect x="182" y="138" width="54" height="12" rx="6" fill="#d8cfc0" stroke="#7a7266" stroke-width="2"/>' +
      '<g fill="#7a7266"><circle cx="198" cy="157" r="2"/><circle cx="209" cy="157" r="2"/><circle cx="220" cy="157" r="2"/><circle cx="198" cy="164" r="2"/><circle cx="209" cy="164" r="2"/><circle cx="220" cy="164" r="2"/></g></g>' +
      '<path d="M186 166q-20 10 -30 30q-6 10 -14 4" stroke="#7a7266" stroke-width="2" fill="none"/>' +
      '<g stroke="' + YGOLD + '" stroke-width="2.5" fill="none" stroke-linecap="round"><path class="ym-wave" d="M240 132q8 6 0 14"/><path class="ym-wave ym-wave2" d="M246 126q14 12 0 26"/></g>' +
      '<text x="196" y="122" ' + font + ' font-size="14" fill="' + YGOLD + '" class="ym-flk">RING!</text>' +
      /* desk lamp glow */
      '<path d="M40 166v-40l18-10" stroke="#888" stroke-width="3" fill="none"/><path d="M50 112l20-6l6 14z" fill="#d6d6d6"/><path d="M62 118l-30 50h70z" fill="#fff6c2" opacity=".18"/>',
      sky("ym-s3", "#0e1636", "#3a2b55"));
  }

  /* 4. The Shrine Auditorium, Jefferson Blvd: cream Moorish towers and domes, Grammy-night spotlights */
  function ymshrine() {
    const tower = x => '<rect x="' + x + '" y="70" width="44" height="120" fill="' + CREAM + '" stroke="#c9b48a" stroke-width="2"/>' +
      '<path d="M' + (x - 2) + ' 70h48l-4-8h-40z" fill="#c9a86a"/>' +
      '<path d="M' + (x + 4) + ' 62q18-46 36 0z" fill="#d9b25c" stroke="#a8843c" stroke-width="2"/><path d="M' + (x + 22) + ' 22v-10" stroke="#a8843c" stroke-width="2"/><circle cx="' + (x + 22) + '" cy="11" r="2.5" fill="#d9b25c"/>' +
      '<path d="M' + (x + 12) + ' 120v-22q10-14 20 0v22z" fill="#5a3e2a"/><path d="M' + (x + 12) + ' 160v-20q10-14 20 0v20z" fill="#5a3e2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ym-s4)"/>' +
      '<g opacity=".55"><path class="ym-beam" d="M86 200l-22-200h44z" fill="#fff6c2" opacity=".35"/><path class="ym-beam ym-beam2" d="M314 200l-22-200h44z" fill="#fff6c2" opacity=".35"/></g>' +
      '<g fill="#fff"><circle class="ym-tw" cx="40" cy="30" r="1.3"/><circle class="ym-tw ym-tw2" cx="180" cy="20" r="1.3"/><circle class="ym-tw ym-tw3" cx="372" cy="40" r="1.3"/></g>' +
      /* main hall */
      '<rect x="96" y="100" width="208" height="90" fill="' + CREAM + '" stroke="#c9b48a" stroke-width="2"/>' +
      '<path d="M90 100h220l-10-10H100z" fill="#c9a86a"/>' +
      /* central horseshoe arch with ochre trim */
      '<path d="M162 190v-52q38-56 76 0v52z" fill="#e2c88f" stroke="#a8843c" stroke-width="3"/><path d="M172 190v-48q28-40 56 0v48z" fill="#3a2a1e"/>' +
      '<g fill="#ffd98a" class="ym-flk"><rect x="182" y="150" width="10" height="16"/><rect x="208" y="150" width="10" height="16"/></g>' +
      /* small domes on the roofline */
      '<path d="M130 90q12-22 24 0zM246 90q12-22 24 0z" fill="#d9b25c" stroke="#a8843c" stroke-width="1.5"/>' +
      tower(46) + tower(310) +
      /* marquee */
      '<rect x="150" y="104" width="100" height="20" rx="2" fill="#2a1a12" stroke="' + YGOLD + '" stroke-width="2"/><text x="200" y="119" text-anchor="middle" ' + font + ' font-size="12" fill="' + YGOLD + '">SHRINE</text>' +
      palm(30, 196, 120) + palm(380, 196, 110) +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4a50"/><path d="M160 190h80l30 70H130z" fill="#b3222f"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a40"/>' +
      '<g class="ym-car"><rect x="0" y="232" width="60" height="16" rx="4" fill="#1d1d22"/><rect x="10" y="226" width="36" height="10" rx="3" fill="#1d1d22"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="48" cy="250" r="4" fill="#111"/><circle cx="58" cy="240" r="2" fill="#fff6c2"/></g>',
      sky("ym-s4", "#141b3a", "#5a3a5e"));
  }

  /* 5. W Jefferson Blvd and S Figueroa St, downtown towers up Figueroa behind */
  function ymcorner() {
    let lit = "";
    [[150, 50, 30], [196, 30, 22], [250, 64, 24]].forEach(([x, y, w]) => { for (let yy = y + 8; yy < 128; yy += 10) lit += '<rect x="' + (x + 4) + '" y="' + yy + '" width="' + (w - 8) + '" height="3" fill="#ffe7a0" opacity=".35"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#ym-s5)"/>' +
      /* downtown skyline: tall tower with spire, round crowned tower, blocks */
      '<g fill="#5d6f86"><rect x="110" y="80" width="30" height="50"/><path d="M150 130V50l30-6v86z"/><path d="M196 130V30q11-14 22 0v100z"/><path d="M194 32h26l-4-8h-18z"/><rect x="250" y="64" width="24" height="66"/><rect x="282" y="86" width="30" height="44"/>' +
      '<path d="M165 46v-36l2-2v38z"/></g>' + lit +
      '<circle cx="166" cy="9" r="2" fill="#ff5a4a" class="ym-flk"/>' +
      palm(330, 136, 104) + palm(372, 136, 84) +
      '<rect x="0" y="130" width="300" height="100" fill="#e9dcc2"/><rect x="0" y="130" width="300" height="8" fill="#c9b48c"/>' +
      '<rect x="230" y="146" width="52" height="30" fill="#5b7f95" opacity=".7"/>' +
      tag("YOUNG MC", 26, 200, 36, YGOLD, -5) + tag("KNOW HOW", 120, 224, 18, CARD, -4) +
      '<g class="ym-sp"><circle cx="230" cy="190" r="3" fill="' + YGOLD + '" opacity=".6"/><circle cx="214" cy="160" r="2" fill="' + YGOLD + '" opacity=".5"/></g><g class="ym-sp ym-sp2"><circle cx="206" cy="152" r="2.5" fill="' + CARD + '" opacity=".5"/></g>' +
      '<rect x="300" y="208" width="100" height="22" fill="#8a8680"/><rect x="0" y="230" width="400" height="30" fill="#4a4a50"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="318" y="96" width="5" height="134" fill="#5c6a70"/>' + sign(254, 92, 132, "W Jefferson Blvd") + sign(266, 118, 108, "S Figueroa St"),
      sky("ym-s5", "#ff9a6a", "#f7d9a8"));
  }

  window.SCENES = { ymstation, ymtrojan, ymdorm, ymshrine, ymcorner };
})();
