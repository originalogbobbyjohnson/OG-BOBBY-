/* Heltah Skeltah game (NYC map, Brooklyn: Brownsville, where Rock and Sean "Ruck" Price came up).
   1. The L pulling into Atlantic Av, up on the old steel el at the Brownsville / East New York edge, the scrapyard under the tracks.
   2. Nocturnal: a Brownsville rooftop at night, the wooden water tower, a full moon, the Manhattan skyline far off.
   3. Brownsville II Long Beach: the Queen Mary docked in Long Beach, CA at sunset, three red funnels, palms, gulls.
   4. Ruck N Roll live on Varick St: the downtown club front, red awning, the line outside, the stage glowing through the door.
   5. Powell St & Dumont Av: green street signs, the wall tagged HELTAH SKELTAH, the Van Dyke Houses towers behind.
   400 x 260 SVGs. All CSS classes prefixed hs-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hstw{0%,100%{opacity:.25}50%{opacity:1}}.hs-tw{animation:hstw 2.2s ease-in-out infinite}.hs-tw2{animation-delay:.7s}.hs-tw3{animation-delay:1.4s}' +
    '@keyframes hscloud{from{transform:translateX(-140px)}to{transform:translateX(440px)}}.hs-cloud{animation:hscloud 22s linear infinite}.hs-cloud2{animation-delay:-11s}' +
    '@keyframes hsgull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.hs-gull{animation:hsgull 9s linear infinite}.hs-gull2{animation-delay:-4.5s}' +
    '@keyframes hsflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.hs-flap{transform-box:fill-box;transform-origin:50% 100%;animation:hsflap .5s ease-in-out infinite}' +
    '@keyframes hswave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.hs-wave{animation:hswave 3s linear infinite}' +
    '@keyframes hssmoke{0%{transform:translateY(0);opacity:0}30%{opacity:.6}100%{transform:translateY(-26px);opacity:0}}.hs-smk{animation:hssmoke 3s ease-out infinite}.hs-smk2{animation-delay:1s}.hs-smk3{animation-delay:2s}' +
    '@keyframes hsglow{0%,100%{opacity:.55}50%{opacity:1}}.hs-glow{animation:hsglow 1.4s ease-in-out infinite}.hs-glow2{animation-delay:.7s}' +
    '@keyframes hsbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.hs-bob{animation:hsbob .6s ease-in-out infinite}.hs-bob2{animation-delay:.3s}' +
    '@keyframes hscar{from{transform:translateX(-70px)}to{transform:translateX(470px)}}.hs-car{animation:hscar 7s linear infinite}' +
    '@keyframes hsflk{0%,100%{opacity:1}46%{opacity:.85}50%{opacity:.3}54%{opacity:.9}}.hs-flk{animation:hsflk 2.6s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="hs-tw hs-tw' + (i % 3 + 1) + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const MOON = "#efe6c8", LAV = "#c9b6ff", ORANGE = "#ff5a36", CREAM = "#f4ead8", LGRAY = "#a7a9ac";

  /* 1. Atlantic Av (L), elevated: the riveted steel el, the platform canopy, the black sign with the gray L, the L train sliding in, the scrapyard under the tracks */
  function atlantic() {
    let girders = "";
    for (let x = 10; x <= 400; x += 56) girders += '<rect x="' + (x - 4) + '" y="150" width="8" height="78" fill="#4b5560"/><path d="M' + (x - 4) + ' 160l-14 14M' + (x + 4) + ' 160l14 14" stroke="#4b5560" stroke-width="4"/>';
    let rivets = "";
    for (let x = 6; x < 400; x += 12) rivets += '<circle cx="' + x + '" cy="146" r="1.2" fill="#8a949e"/>';
    let win = "";
    for (let x = 36; x < 300; x += 40) win += '<rect x="' + x + '" y="104" width="24" height="18" rx="2" fill="#d6e4f0" opacity=".9"/>';
    let junk = "";
    [[20, "#8b3a2a"], [70, "#3b5b7a"], [118, "#6b6b3a"], [250, "#7a2f4a"], [300, "#4a6b5a"], [348, "#8a6a3a"]].forEach((c, i) => {
      junk += '<rect x="' + c[0] + '" y="' + (214 - (i % 2) * 10) + '" width="44" height="14" rx="4" fill="' + c[1] + '"/><rect x="' + (c[0] + 8) + '" y="' + (207 - (i % 2) * 10) + '" width="24" height="9" rx="3" fill="' + c[1] + '" opacity=".85"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#hsa)"/>' +
      '<circle cx="62" cy="40" r="22" fill="#ffd27a" opacity=".85"/>' +
      /* canopy */
      '<path d="M0 22h400v10H0z" fill="#3d4650"/><path d="M0 32h400" stroke="#2a3038" stroke-width="3"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + (x - 3) + '" y="32" width="6" height="58" fill="#3d4650"/>').join("") +
      /* sign */
      '<rect x="110" y="40" width="190" height="30" rx="3" fill="#111"/><rect x="110" y="40" width="190" height="3" fill="#fff"/>' +
      '<text x="124" y="61" ' + font + ' font-size="15" fill="#fff">Atlantic Av</text>' + bullet(276, 56, "L", LGRAY) +
      /* the L train */
      '<g class="anim-train">' +
        '<rect x="14" y="92" width="300" height="50" rx="5" fill="#cdd3da" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="14" y="128" width="300" height="5" fill="#8a8f96"/>' +
        '<rect x="296" y="100" width="14" height="22" rx="2" fill="#d6e4f0"/>' + bullet(302, 132, "L", LGRAY) +
        '<circle cx="24" cy="134" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + deck */
      '<rect x="0" y="142" width="400" height="8" fill="#eab308"/><rect x="0" y="146" width="400" height="6" fill="#3a4148"/>' + rivets + girders +
      /* scrapyard below */
      '<rect x="0" y="200" width="400" height="60" fill="#5a524a"/>' + junk +
      '<path d="M0 200h400" stroke="#2c2c2c" stroke-width="2"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 52) + ' 188v14" stroke="#777" stroke-width="2"/>').join("") +
      '<path d="M0 190h400" stroke="#777" stroke-width="1.5" stroke-dasharray="3 3"/>' +
      txt("BROWNSVILLE / EAST NEW YORK", 200, 250, 10, CREAM, 'letter-spacing="3"'),
      sky("hsa", "#3b4a73", "#d98a5b"));
  }

  /* 2. Nocturnal: up on a Brownsville rooftop at night, tar roof and the wooden water tower, a full moon, the far Manhattan skyline, clouds drifting */
  function nocturnal() {
    let city = "";
    [[20, 40], [48, 26], [70, 54], [96, 34], [120, 62], [150, 30], [176, 44], [300, 52], [326, 36], [352, 48], [376, 30]].forEach((b, i) => {
      city += '<rect x="' + b[0] + '" y="' + (150 - b[1]) + '" width="22" height="' + b[1] + '" fill="#1c1a33"/>';
      for (let y = 150 - b[1] + 6; y < 146; y += 9) city += '<rect class="hs-tw hs-tw' + ((i + y) % 3 + 1) + '" x="' + (b[0] + 5) + '" y="' + y + '" width="3" height="4" fill="#ffd98a"/><rect x="' + (b[0] + 13) + '" y="' + y + '" width="3" height="4" fill="#ffd98a" opacity=".5"/>';
    });
    let staves = "";
    for (let x = 252; x <= 298; x += 6) staves += '<path d="M' + x + ' 92v52" stroke="#5a3a22" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hsn)"/>' + stars(26) +
      '<circle cx="96" cy="58" r="30" fill="' + MOON + '"/><circle cx="86" cy="50" r="5" fill="#d8ccaa"/><circle cx="106" cy="68" r="7" fill="#d8ccaa"/><circle cx="104" cy="46" r="3" fill="#d8ccaa"/>' +
      '<g class="hs-cloud"><ellipse cx="0" cy="40" rx="46" ry="9" fill="#3a3560" opacity=".8"/></g><g class="hs-cloud hs-cloud2"><ellipse cx="0" cy="72" rx="36" ry="7" fill="#3a3560" opacity=".7"/></g>' +
      city +
      /* the water tower */
      '<rect x="250" y="88" width="50" height="58" rx="3" fill="#7a5233"/>' + staves +
      '<path d="M250 104h50M250 128h50" stroke="#2e2a24" stroke-width="2.5"/><path d="M244 90l31-22l31 22z" fill="#5a3a22"/><circle cx="275" cy="66" r="3" fill="#5a3a22"/>' +
      '<path d="M256 146l-8 44M294 146l8 44M262 146l-4 44M288 146l4 44M250 166h50" stroke="#2b2b2b" stroke-width="3"/>' +
      /* roof + parapet */
      '<rect x="0" y="186" width="400" height="74" fill="#1b1b22"/><rect x="0" y="180" width="400" height="10" fill="#3a2f2a"/>' +
      (() => { let b = ""; for (let x = 0; x < 400; x += 20) b += '<rect x="' + x + '" y="180" width="19" height="4" fill="#4a3c34"/>'; return b; })() +
      /* a vent pipe with steam, a door bulkhead with a lit bulb */
      '<rect x="40" y="150" width="54" height="36" fill="#2f2b33"/><rect x="58" y="160" width="18" height="26" fill="#120f16"/><circle class="hs-flk" cx="67" cy="154" r="3" fill="#ffe9a8"/>' +
      '<rect x="150" y="164" width="8" height="18" fill="#555"/><circle class="hs-smk" cx="154" cy="160" r="5" fill="#9a97b0"/><circle class="hs-smk hs-smk2" cx="156" cy="160" r="4" fill="#9a97b0"/><circle class="hs-smk hs-smk3" cx="152" cy="160" r="4" fill="#9a97b0"/>' +
      tag("NOCTURNAL", 120, 236, 34, LAV, -4) + txt("BROWNSVILLE ROOFTOPS", 300, 252, 9, CREAM, 'letter-spacing="2" opacity=".85"'),
      sky("hsn", "#07061a", "#2a2050"));
  }

  /* 3. Brownsville II Long Beach: the Queen Mary docked at sunset, black hull, white decks, three red funnels with black tops, palms swaying, gulls */
  function longbeach() {
    const palm = (x, h) => '<g><path d="M' + x + ' 200q4-' + (h / 2) + ' 2-' + h + '" stroke="#5a3d22" stroke-width="5" fill="none"/>' +
      '<g transform="translate(' + (x + 2) + ',' + (200 - h) + ')"><path d="M0 0q-20-4-30 8M0 0q-16-14-30-10M0 0q18-6 30 6M0 0q14-14 28-12M0 0q0-14 6-18" stroke="#1f4a2a" stroke-width="4" fill="none" stroke-linecap="round"/></g></g>';
    let portholes = "";
    for (let x = 96; x < 330; x += 12) portholes += '<circle cx="' + x + '" cy="166" r="1.6" fill="#ffe2a0"/>';
    let decks = "";
    for (let x = 104; x < 316; x += 10) decks += '<rect x="' + x + '" y="134" width="5" height="4" fill="#3a3f48"/><rect x="' + x + '" y="144" width="5" height="4" fill="#3a3f48"/>';
    const funnel = x => '<path d="M' + x + ' 128l4-38h18l4 38z" fill="#c8102e"/><path d="M' + (x + 4) + ' 90h18l-1 8h-16z" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hsl)"/>' +
      '<circle cx="320" cy="150" r="34" fill="#ffd27a" opacity=".9"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#2d4f6e"/>' +
      '<g class="hs-wave"><path d="M0 196q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#ffb36b" stroke-width="2" fill="none" opacity=".6"/>' +
      '<path d="M0 220q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#7fb2d6" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* the ship */
      funnel(150) + funnel(196) + funnel(242) +
      '<rect x="100" y="128" width="216" height="24" fill="#f4f1ea"/>' + decks +
      '<path d="M68 152h282l-18 30H86z" fill="#151515"/><path d="M68 152h282v4H68z" fill="#c8102e"/>' + portholes +
      '<path d="M86 182h246l-4 6H90z" fill="#8a1c1c"/>' +
      '<path d="M128 128v-14M296 128v-20M296 108l-40 20M128 114l40 14" stroke="#333" stroke-width="1.2"/>' +
      palm(30, 90) + palm(370, 104) + palm(352, 70) +
      '<g class="hs-gull"><path class="hs-flap" d="M40 60q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<g class="hs-gull hs-gull2"><path class="hs-flap" d="M20 84q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      tag("BROWNSVILLE II LONG BEACH", 32, 246, 20, ORANGE, -3) + txt("LONG BEACH, CA", 200, 30, 12, "#fff", 'letter-spacing="4"'),
      sky("hsl", "#3b2b6b", "#ff8a4c"));
  }

  /* 4. Ruck N Roll live on Varick St: the downtown club front, brick, red awning, the stage glow through the door, the line outside */
  function varick() {
    let brick = "";
    for (let y = 40; y < 200; y += 8) for (let x = (y / 8) % 2 ? 20 : 12; x < 374; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#5e2620"/>';
    const line = [44, 64, 84, 104, 124].map((x, i) => person(x, 176, i % 2 ? "#141414" : "#222", i % 2 ? "hs-bob" : "hs-bob hs-bob2")).join("");
    let bulbs = "";
    for (let x = 160; x <= 360; x += 14) bulbs += '<circle class="hs-glow' + (x % 28 ? "" : " hs-glow2") + '" cx="' + x + '" cy="62" r="3" fill="#ffe9a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hsv)"/>' +
      '<rect x="12" y="36" width="376" height="168" fill="#6e2e26"/>' + brick +
      /* windows upstairs */
      [40, 96].map(x => '<rect x="' + x + '" y="52" width="36" height="44" fill="#1a1520" stroke="#2a1410" stroke-width="3"/>').join("") +
      /* marquee */
      '<rect x="152" y="54" width="216" height="46" rx="4" fill="#111" stroke="#ffe9a8" stroke-width="1.5"/>' + bulbs +
      txt("LIVE TONIGHT", 260, 82, 15, "#fff", 'letter-spacing="3"') + txt("RUCK N ROLL", 260, 96, 11, ORANGE, 'letter-spacing="3"') +
      /* awning */
      '<path d="M150 112h220l-10 22H160z" fill="#b3122b"/><path d="M150 112h220" stroke="#7a0b1c" stroke-width="3"/>' +
      [170, 200, 230, 260, 290, 320, 350].map(x => '<path d="M' + x + ' 113l-4 21" stroke="#e23b4e" stroke-width="2"/>').join("") +
      /* the door, stage glowing inside: two mics on stands, lights pulsing */
      '<rect x="218" y="134" width="84" height="70" fill="#14060c" stroke="#3a1410" stroke-width="3"/>' +
      '<rect class="hs-glow" x="222" y="138" width="76" height="62" fill="#ff5a36" opacity=".35"/>' +
      '<path d="M244 200v-34M276 200v-34" stroke="#ddd" stroke-width="2"/><circle cx="244" cy="164" r="4" fill="#444"/><circle cx="276" cy="164" r="4" fill="#444"/>' +
      '<circle class="hs-glow hs-glow2" cx="236" cy="146" r="4" fill="' + LAV + '"/><circle class="hs-glow" cx="284" cy="146" r="4" fill="#7fd1ff"/>' +
      /* rope + bouncer post */
      '<path d="M30 194q50 10 110 0" stroke="#b3122b" stroke-width="3" fill="none"/><rect x="28" y="186" width="4" height="18" fill="#e9c46a"/><rect x="138" y="186" width="4" height="18" fill="#e9c46a"/>' +
      line +
      '<rect x="0" y="204" width="400" height="56" fill="#3e3f44"/><rect x="0" y="204" width="400" height="4" fill="#77797d"/>' +
      '<g class="hs-car"><rect x="0" y="232" width="50" height="14" rx="4" fill="#f2c94c"/><rect x="10" y="226" width="30" height="8" rx="3" fill="#f2c94c"/><circle cx="12" cy="246" r="4" fill="#111"/><circle cx="38" cy="246" r="4" fill="#111"/></g>' +
      txt("VARICK ST · DOWNTOWN", 200, 226, 10, CREAM, 'letter-spacing="3"'),
      sky("hsv", "#0a0a1e", "#2a1a3a"));
  }

  /* 5. Powell St & Dumont Av: green street signs, the wall tagged HELTAH SKELTAH, the Van Dyke Houses towers behind */
  function corner() {
    const tower = (x, y, w) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#6b4a3a"/>';
      for (let yy = y + 8; yy < 142; yy += 11) for (let xx = x + 6; xx < x + w - 6; xx += 11) g += '<rect class="hs-tw hs-tw' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffd98a" opacity=".8"/>'; return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#hsc)"/>' + stars(14) +
      tower(16, 22, 74) + tower(104, 44, 60) + tower(180, 16, 80) + tower(274, 40, 66) +
      txt("VAN DYKE HOUSES", 220, 12, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      '<rect x="0" y="128" width="400" height="98" fill="#3b3d45"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#32343b" stroke-width="1"/>'; return b; })() +
      tag("HELTAH SKELTAH", 14, 190, 38, LAV, -5) + tag("FAB 5", 220, 220, 22, ORANGE, -4) + tag("ROCK &amp; RUCK", 20, 222, 16, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="hs-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="58" width="5" height="170" fill="#3d4b3f"/>' +
      '<rect x="296" y="62" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Powell St", 346, 78, 12, "#fff") +
      '<rect x="296" y="88" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Dumont Av", 346, 104, 12, "#fff") +
      '<circle class="hs-flk" cx="358" cy="56" r="4" fill="#fff6c2"/>',
      sky("hsc", "#0a0a1c", "#2e2648"));
  }

  window.SCENES = { atlantic: atlantic, nocturnal: nocturnal, longbeach: longbeach, varick: varick, corner: corner };
})();
