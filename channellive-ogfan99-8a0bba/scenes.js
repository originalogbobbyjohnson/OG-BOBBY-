/* Channel Live game (OG FAN 99 New Jersey: East Orange, "Illtown", the Z-O). Hakim Green and Tuffy, discovered by KRS-One, Station Identification (1995).
   Rooms: East Orange station on NJ Transit's Morris & Essex line up on the embankment over I-280, Watsessing Park's stone bridge over the Second River,
   the old brick Ampere station on Ampere Pkwy, the round Capitol Records Tower in Hollywood (their label), and Central Av & N Arlington Av with the
   train crossing the bridge behind. 400 x 260 SVGs. All animation classes are prefixed cl-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes clcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.cl-car{animation:clcar 5s linear infinite}.cl-car2{animation-delay:-2.5s}' +
    '@keyframes clcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.cl-carL{animation:clcarL 6s linear infinite}.cl-carL2{animation-delay:-3s}' +
    '@keyframes clblink{0%,100%{opacity:.3}50%{opacity:1}}.cl-bl{animation:clblink 1.6s ease-in-out infinite}.cl-bl2{animation-delay:.5s}.cl-bl3{animation-delay:1.1s}' +
    '@keyframes clduck{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.cl-duck{animation:clduck 6s ease-in-out infinite}.cl-duck2{animation-delay:-3s}' +
    '@keyframes clwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.cl-wave{animation:clwave 2.5s linear infinite}' +
    '@keyframes clstatic{0%,100%{opacity:.15}50%{opacity:.4}}.cl-static{animation:clstatic .4s steps(2) infinite}' +
    '@keyframes clbeacon{0%,60%,100%{opacity:.15}70%,90%{opacity:1}}.cl-beacon{animation:clbeacon 2s linear infinite}' +
    '@keyframes cltrainx{from{transform:translateX(-420px)}to{transform:translateX(420px)}}.cl-train{animation:cltrainx 8s linear infinite}' +
    '@keyframes clleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-30px,140px) rotate(200deg);opacity:0}}.cl-leaf{animation:clleaf 5s linear infinite}.cl-leaf2{animation-delay:-1.8s}.cl-leaf3{animation-delay:-3.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, label, color, r) => { r = r || 12; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.36) + '" text-anchor="middle" ' + font + ' font-size="' + r * 0.8 + '" fill="#fff">' + label + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="cl-bl cl-bl' + (i % 3 + 1) + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 41) % 54) + '" r="' + (i % 3 ? 0.9 : 1.3) + '" fill="#fff"/>'; return s; };
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const PINK = "#ff4f7b", CYAN = "#5ee0ff", YEL = "#ffe14d", CREAM = "#f4ead8", NJT = "#0039a6", NJO = "#f58025", NJP = "#a2238e";
  /* an NJ Transit stainless coach with the blue/orange/purple stripes */
  const coach = (x, y, w) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="44" rx="4" fill="#d5d9de" stroke="#6b7280" stroke-width="2"/>';
    for (let k = x + 12; k < x + w - 20; k += 26) s += '<rect x="' + k + '" y="' + (y + 8) + '" width="18" height="13" rx="2" fill="#a9d3ee"/>';
    return s + '<rect x="' + x + '" y="' + (y + 26) + '" width="' + w + '" height="4" fill="' + NJT + '"/><rect x="' + x + '" y="' + (y + 30) + '" width="' + w + '" height="3" fill="' + NJO + '"/><rect x="' + x + '" y="' + (y + 33) + '" width="' + w + '" height="3" fill="' + NJP + '"/>'; };

  /* 1. East Orange station, Morris & Essex Lines: the high platform on the embankment, I-280 traffic in the trench below, the train rolling in */
  function clstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#css)"/>' + stars(14) +
      /* skyline of the Oranges */
      [[0, 60, 54], [60, 74, 44], [118, 52, 60], [190, 70, 40], [240, 58, 56], [310, 66, 48], [360, 56, 40]].map(([x, y, w], i) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (110 - y) + '" fill="#2a2d45"/>' +
        '<rect class="cl-bl cl-bl' + (i % 3 + 1) + '" x="' + (x + 8) + '" y="' + (y + 10) + '" width="6" height="7" fill="#ffd98a"/><rect class="cl-bl cl-bl' + ((i + 1) % 3 + 1) + '" x="' + (x + 24) + '" y="' + (y + 22) + '" width="6" height="7" fill="#ffd98a"/>').join("") +
      /* station sign */
      '<rect x="40" y="18" width="250" height="34" rx="3" fill="#111"/><rect x="40" y="18" width="250" height="3" fill="#fff"/>' +
      '<text x="54" y="41" ' + font + ' font-size="16" fill="#fff">East Orange</text>' + bullet(264, 35, "NJT", NJT, 13) +
      /* canopy posts */
      [30, 200, 370].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="58" fill="#4b5563"/>').join("") +
      '<rect x="14" y="56" width="372" height="6" fill="#374151"/>' +
      /* the train */
      '<g class="anim-train">' + coach(6, 70, 150) + coach(160, 70, 150) +
        '<path d="M310 70h18q14 0 16 14v30h-34z" fill="#d5d9de" stroke="#6b7280" stroke-width="2"/><rect x="316" y="78" width="20" height="14" rx="2" fill="#a9d3ee"/><circle cx="336" cy="104" r="3" fill="#fff6c2"/></g>' +
      /* platform edge + embankment */
      '<rect x="0" y="114" width="400" height="8" fill="#e8c547"/><rect x="0" y="122" width="400" height="20" fill="#6b6862"/>' +
      person(60, 92, "#1f2937") + person(82, 96, "#111827") +
      '<path d="M0 142h400v20H0z" fill="#4b4a46"/>' +
      /* I-280 trench */
      '<rect x="0" y="162" width="400" height="98" fill="#3a3b3f"/><rect x="0" y="162" width="400" height="6" fill="#8a8c90"/>' +
      [0, 50, 100, 150, 200, 250, 300, 350].map(x => '<rect x="' + (x + 10) + '" y="208" width="26" height="3" fill="#e5e7eb"/>').join("") +
      '<g class="cl-car"><rect x="0" y="184" width="48" height="16" rx="4" fill="' + PINK + '"/><circle cx="10" cy="200" r="4" fill="#111"/><circle cx="38" cy="200" r="4" fill="#111"/></g>' +
      '<g class="cl-carL"><rect x="0" y="222" width="48" height="16" rx="4" fill="' + CYAN + '"/><circle cx="10" cy="238" r="4" fill="#111"/><circle cx="38" cy="238" r="4" fill="#111"/></g>' +
      '<g class="cl-carL cl-carL2"><rect x="0" y="222" width="40" height="14" rx="4" fill="' + YEL + '"/><circle cx="9" cy="236" r="4" fill="#111"/><circle cx="31" cy="236" r="4" fill="#111"/></g>' +
      '<rect x="300" y="168" width="84" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("I-280 EAST", 342, 183, 11, "#fff"),
      sky("css", "#141433", "#5a3b6a"));
  }

  /* 2. Watsessing Park: the old stone arch footbridge over the Second River, green lawns, ducks drifting, leaves falling */
  function clwatsessing() {
    let stones = "";
    for (let x = 100; x < 300; x += 14) stones += '<rect x="' + x + '" y="112" width="12" height="7" rx="1" fill="#9c9488"/>';
    let ripples = "";
    for (let x = 0; x < 480; x += 40) ripples += '<path d="M' + x + ' 210q10-4 20 0t20 0" stroke="#a8d8ea" stroke-width="2" fill="none"/><path d="M' + (x + 14) + ' 228q10-4 20 0t20 0" stroke="#a8d8ea" stroke-width="2" fill="none"/>';
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (170 - y) + '" fill="#5a3d2b"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.55) + '" cy="' + (y + 8) + '" r="' + r * 0.7 + '" fill="' + c + '"/><circle cx="' + (x + r * 0.55) + '" cy="' + (y + 8) + '" r="' + r * 0.7 + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cws)"/>' +
      tree(40, 90, 36, "#3f7d3a") + tree(360, 84, 40, "#4b8a3f") + tree(300, 110, 24, "#5a9a46") +
      '<rect x="0" y="150" width="400" height="40" fill="#6aa04a"/>' +
      /* river */
      '<rect x="0" y="186" width="400" height="74" fill="#4f8fb0"/><g class="cl-wave">' + ripples + '</g>' +
      /* stone arch bridge */
      '<path d="M80 186V126h240v60h-40a80 60 0 0 0-160 0z" fill="#8a8276"/>' + stones +
      '<path d="M120 186a80 60 0 0 1 160 0" fill="none" stroke="#6f685d" stroke-width="4"/>' +
      '<rect x="76" y="110" width="248" height="6" fill="#6f685d"/>' + [84, 120, 156, 192, 228, 264, 300, 316].map(x => '<rect x="' + x + '" y="98" width="5" height="14" fill="#6f685d"/>').join("") +
      '<rect x="76" y="96" width="248" height="4" fill="#6f685d"/>' +
      person(200, 74, "#22313f") +
      '<g class="cl-duck"><ellipse cx="60" cy="236" rx="10" ry="5" fill="#f4ead8"/><circle cx="68" cy="230" r="4" fill="#2e7d32"/><path d="M71 230l5 1-5 1z" fill="#f59e0b"/></g>' +
      '<g class="cl-duck cl-duck2"><ellipse cx="300" cy="244" rx="10" ry="5" fill="#8d6e63"/><circle cx="308" cy="238" r="4" fill="#5d4037"/><path d="M311 238l5 1-5 1z" fill="#f59e0b"/></g>' +
      '<circle class="cl-leaf" cx="340" cy="80" r="3" fill="#d98b2b"/><circle class="cl-leaf cl-leaf2" cx="60" cy="70" r="3" fill="#c9622b"/><circle class="cl-leaf cl-leaf3" cx="280" cy="100" r="2.5" fill="#e0a23a"/>' +
      txt("WATSESSING PARK", 200, 30, 13, "#1d3b25", 'letter-spacing="3"'),
      sky("cws", "#9fd2f0", "#eef7e8"));
  }

  /* 3. The old Ampere station on Ampere Pkwy, East Orange: the brick depot with the red tile roof and deep eaves, closed, a train blowing past behind */
  function clampere() {
    let bricks = "";
    for (let y = 132; y < 200; y += 8) for (let x = 92 + ((y / 8) % 2) * 8; x <= 296; x += 16) bricks += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="' + ((x + y) % 3 ? "#8e3b2c" : "#a14a36") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cas)"/>' + stars(10) +
      /* train passing behind on the embankment */
      '<rect x="0" y="118" width="400" height="10" fill="#4b4a46"/>' +
      '<g class="cl-train">' + coach(0, 76, 190) + coach(194, 76, 190) + '</g>' +
      /* depot */
      '<rect x="90" y="128" width="220" height="72" fill="#8e3b2c"/>' + bricks +
      '<path d="M66 132L110 92h180l44 40z" fill="#b5462f"/>' +
      (() => { let t = ""; for (let y = 98; y < 132; y += 6) t += '<path d="M' + (66 + (132 - y) * 1.1) + ' ' + y + 'H' + (334 - (132 - y) * 1.1) + '" stroke="#8f3524" stroke-width="1.5"/>'; return t; })() +
      '<rect x="180" y="74" width="16" height="22" fill="#7a3426"/>' +
      [112, 150, 232, 270].map(x => '<rect x="' + x + '" y="142" width="18" height="30" fill="#3b3f46" stroke="#e8dcc8" stroke-width="3"/><path d="M' + x + ' 150h18M' + (x + 9) + ' 142v30" stroke="#e8dcc8" stroke-width="2"/>').join("") +
      '<rect x="186" y="150" width="28" height="50" fill="#4a2a1f" stroke="#e8dcc8" stroke-width="3"/>' +
      '<rect x="150" y="116" width="100" height="14" fill="#e8dcc8"/><text x="200" y="127" text-anchor="middle" ' + font + ' font-size="10" fill="#3b2418" letter-spacing="3">AMPERE</text>' +
      /* lamps */
      '<rect x="40" y="150" width="4" height="56" fill="#222"/><circle class="cl-bl" cx="42" cy="148" r="6" fill="#fff6c2"/>' +
      '<rect x="356" y="150" width="4" height="56" fill="#222"/><circle class="cl-bl cl-bl2" cx="358" cy="148" r="6" fill="#fff6c2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="200" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="cl-car cl-car2"><rect x="0" y="226" width="46" height="14" rx="4" fill="' + PINK + '"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="36" cy="240" r="4" fill="#111"/></g>' +
      txt("AMPERE PKWY, EAST ORANGE", 200, 252, 10, CREAM, 'letter-spacing="2"'),
      sky("cas", "#121633", "#d0704a"));
  }

  /* 4. Station Identification on Capitol: the round Capitol Records Tower in Hollywood, stacked disc floors, the rooftop spire's beacon blinking */
  function clcapitol() {
    let floors = "";
    for (let i = 0; i < 12; i++) { const y = 70 + i * 13, w = 120 - i * 0; floors += '<ellipse cx="200" cy="' + (y + 12) + '" rx="' + (w / 2 + 6) + '" ry="5" fill="#e9edf1"/><rect x="' + (200 - w / 2) + '" y="' + y + '" width="' + w + '" height="10" fill="#4a6b86"/>' +
      '<rect class="cl-bl cl-bl' + (i % 3 + 1) + '" x="' + (176 + (i * 17) % 40) + '" y="' + (y + 2) + '" width="8" height="6" fill="#ffd98a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#cps)"/>' + stars(24) +
      /* hills */
      '<path d="M0 150q80-40 160-10t140-20 100 10v130H0z" fill="#2a2440"/>' +
      /* palms */
      [[40, 120], [350, 110]].map(([x, y]) => '<path d="M' + x + ' 230q4-60 2-' + (230 - y) + '" stroke="#3b2f2a" stroke-width="5" fill="none"/>' +
        '<path d="M' + (x + 2) + ' ' + y + 'q-24-6-34 8M' + (x + 2) + ' ' + y + 'q24-6 34 8M' + (x + 2) + ' ' + y + 'q-14-16-28-14M' + (x + 2) + ' ' + y + 'q14-16 28-14" stroke="#2f6b3a" stroke-width="5" fill="none"/>').join("") +
      /* tower */
      '<rect x="140" y="230" width="120" height="10" fill="#d5d9de"/>' + floors +
      '<ellipse cx="200" cy="66" rx="66" ry="6" fill="#e9edf1"/><rect x="186" y="44" width="28" height="24" fill="#e9edf1"/><rect x="198" y="6" width="4" height="40" fill="#cbd2d9"/>' +
      '<circle class="cl-beacon" cx="200" cy="6" r="5" fill="#ff3b3b"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2b2b2e"/>' +
      '<g class="cl-car"><rect x="0" y="240" width="46" height="12" rx="4" fill="' + YEL + '"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="36" cy="252" r="4" fill="#111"/></g>' +
      txt("HOLLYWOOD", 72, 40, 12, CREAM, 'letter-spacing="4" opacity=".8"'),
      sky("cps", "#0b0b24", "#6a3a6a"));
  }

  /* 5. Central Av & N Arlington Av, East Orange: green signs, CHANNEL LIVE tagged with a TV set, the train crossing the rail bridge behind */
  function clcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cks)"/>' + stars(14) +
      /* rail bridge + train */
      '<rect x="0" y="92" width="400" height="12" fill="#4b5563"/><rect x="0" y="104" width="400" height="6" fill="#374151"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="110" width="10" height="30" fill="#4b5563"/>').join("") +
      '<g class="cl-train">' + coach(0, 48, 190) + coach(194, 48, 190) + '</g>' +
      /* wall */
      '<rect x="0" y="134" width="400" height="92" fill="#36343f"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#2e2c36" stroke-width="1"/>'; return b; })() +
      /* painted TV set with static */
      '<rect x="222" y="150" width="56" height="44" rx="6" fill="#1b1b22" stroke="' + CYAN + '" stroke-width="3"/><rect class="cl-static" x="230" y="157" width="40" height="30" fill="#e5e7eb"/>' +
      '<path d="M238 150l12-12M262 150l-12-12" stroke="' + CYAN + '" stroke-width="3"/>' +
      tag("CHANNEL", 12, 182, 38, PINK, -5) + tag("LIVE", 70, 220, 36, YEL, -4) + tag("Z-O", 300, 214, 22, CREAM, -6) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="cl-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="352" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="290" y="66" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Central Av", 343, 82, 12, "#fff") +
      '<rect x="290" y="92" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("N Arlington Av", 343, 108, 11, "#fff") +
      '<circle class="cl-bl" cx="354" cy="60" r="4" fill="#fff6c2"/>',
      sky("cks", "#0c0d24", "#3f2d55"));
  }

  window.SCENES = { clstation: clstation, clwatsessing: clwatsessing, clampere: clampere, clcapitol: clcapitol, clcorner: clcorner };
})();
