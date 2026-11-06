/* Jay Critch opening scenes (Clinton Hill, Brooklyn). Each one is a small animated SVG, 400 x 260.
   1. Fulton St on the G (Crosstown line), underground under Lafayette Av at the Clinton Hill / Fort Greene edge
   2. The Clinton Avenue mansions: the old brick and brownstone mansions of Clinton Hill, where he grew up
   3. The Beacon School, Manhattan: the after-school studio where he got serious and stayed late making songs
   4. Rich Forever in Los Angeles: the studio up in the hills where Rich Forever 3 was recorded, palms and a pink sunset
   5. Myrtle Av and Waverly Av: green street signs, the wall tagged CRITCH, the Clinton Hill co-op towers behind
   All CSS classes are prefixed "jc" so they never clash with the game page. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jcFlk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.jcFlk{animation:jcFlk 2.2s infinite}' +
    '@keyframes jcTw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1)}}.jcTw{transform-box:fill-box;transform-origin:50% 50%;animation:jcTw 1.6s ease-in-out infinite}.jcTw2{animation-delay:-.8s}.jcTw3{animation-delay:-.4s}' +
    '@keyframes jcSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.jcSway{transform-box:fill-box;transform-origin:50% 100%;animation:jcSway 3s ease-in-out infinite}.jcSway2{animation-delay:-1.5s}' +
    '@keyframes jcMeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.jcMeter{transform-box:fill-box;transform-origin:50% 100%;animation:jcMeter .7s ease-in-out infinite}.jcM2{animation-delay:-.2s}.jcM3{animation-delay:-.45s}.jcM4{animation-delay:-.1s}' +
    '@keyframes jcCar{from{transform:translateX(420px)}to{transform:translateX(-100px)}}.jcCar{animation:jcCar 6s linear infinite}' +
    '@keyframes jcLeaf{0%{transform:translate(0,-10px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-60px,200px) rotate(280deg);opacity:.8}}.jcLeaf{animation:jcLeaf 7s linear infinite}.jcL2{animation-delay:-2.3s}.jcL3{animation-delay:-4.6s}' +
    '@keyframes jcBlink{0%,49%{opacity:1}50%,100%{opacity:.15}}.jcBlink{animation:jcBlink 1s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (cx, cy, letter, color, dark) =>
    '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const ICE = "#7fe3ff", CASH = "#3ddc84", GOLD = "#ffd166";
  const label = (txt, fill) => '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="' + (fill || "#f1f1f1") + '" letter-spacing="2">' + txt + '</text>';
  const sparkle = (x, y, c, k) => '<path class="jcTw ' + (k || "") + '" d="M' + x + ' ' + (y - 6) + 'l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6z" fill="' + (c || "#fff") + '"/>';

  /* 1. Fulton St (G): underground, white tile walls, the green tile band, black columns, the black station sign, the G pulling in */
  function train() {
    let tile = "";
    for (let y = 8; y < 120; y += 8) tile += '<path d="M0 ' + y + 'h400" stroke="#dcdcd4" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 14) tile += '<path d="M' + x + ' 0v120" stroke="#dcdcd4" stroke-width=".6"/>';
    let car = "";
    for (let k = 0; k < 2; k++) {
      const x0 = 18 + k * 196;
      car += '<rect x="' + x0 + '" y="120" width="190" height="64" rx="6" fill="#c9ced6" stroke="#8a919c" stroke-width="2"/><rect x="' + x0 + '" y="170" width="190" height="6" fill="#8a919c"/>';
      for (let w = 0; w < 4; w++) car += '<rect x="' + (x0 + 14 + w * 44) + '" y="130" width="28" height="22" rx="3" fill="#2b3442"/>';
      car += '<rect x="' + (x0 + 86) + '" y="128" width="18" height="42" fill="#9aa1ab"/>';
    }
    car += bullet(46, 162, "G", "#6cbe45");
    return svg(
      '<rect width="400" height="260" fill="#efeee6"/>' + tile +
      /* the green tile band with darker border */
      '<rect x="0" y="22" width="400" height="12" fill="#3f8f4a"/><rect x="0" y="20" width="400" height="2" fill="#1f5a2a"/><rect x="0" y="34" width="400" height="2" fill="#1f5a2a"/>' +
      /* black columns */
      (function () { let s = ""; for (let x = 40; x < 400; x += 120) s += '<rect x="' + x + '" y="0" width="10" height="196" fill="#1f2328"/>'; return s; })() +
      /* station sign */
      '<rect x="110" y="48" width="180" height="34" rx="3" fill="#111"/><path d="M110 54h180" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="124" y="75" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Fulton St</text>' +
      bullet(268, 68, "G", "#6cbe45") +
      /* lights */
      '<rect x="60" y="0" width="60" height="5" fill="#fffbe0" class="jcFlk"/><rect x="290" y="0" width="60" height="5" fill="#fffbe0"/>' +
      '<rect x="0" y="112" width="400" height="84" fill="#23262b"/>' +
      '<g class="anim-train">' + car + '</g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#8f8b84"/><rect x="0" y="196" width="400" height="5" fill="#f2c200"/>' +
      '<path d="M0 230h400" stroke="#7e7a73" stroke-width="1"/>' +
      label("FULTON ST · CLINTON HILL", "#ffffff"),
      "");
  }

  /* 2. The Clinton Avenue mansions: wide old mansions behind iron fences and big trees, a brownstone porch, a red-brick one
        with white trim and a mansard roof, leaves coming down */
  function mansions() {
    const fence = (x0, x1) => { let s = '<path d="M' + x0 + ' 196h' + (x1 - x0) + '" stroke="#1b1b1b" stroke-width="3"/>'; for (let x = x0; x <= x1; x += 8) s += '<path d="M' + x + ' 214v-24l2-4 2 4" stroke="#1b1b1b" stroke-width="2" fill="none"/>'; return s; };
    let w1 = "", w2 = "", w3 = "";
    for (let i = 0; i < 4; i++) { w1 += '<rect x="' + (30 + i * 28) + '" y="94" width="16" height="26" fill="#2c3a4a"/><rect x="' + (30 + i * 28) + '" y="138" width="16" height="26" fill="#2c3a4a"/><path d="M' + (28 + i * 28) + ' 92h20" stroke="#f2ead8" stroke-width="3"/>'; }
    for (let i = 0; i < 3; i++) { w2 += '<rect x="' + (166 + i * 28) + '" y="84" width="16" height="28" rx="8" fill="#2c3a4a"/><rect x="' + (166 + i * 28) + '" y="130" width="16" height="30" fill="#2c3a4a"/>'; }
    for (let i = 0; i < 3; i++) { w3 += '<rect x="' + (284 + i * 28) + '" y="96" width="16" height="24" fill="#2c3a4a"/><rect x="' + (284 + i * 28) + '" y="138" width="16" height="26" fill="#2c3a4a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#jcG2)"/>' +
      /* mansion 1: red brick, white trim, mansard roof */
      '<rect x="20" y="80" width="126" height="116" fill="#9c4a34"/><path d="M14 82h138l-12-26H26z" fill="#3a3f4a"/><rect x="60" y="62" width="14" height="14" fill="#2c3a4a"/><rect x="94" y="62" width="14" height="14" fill="#2c3a4a"/>' + w1 +
      '<rect x="70" y="170" width="26" height="26" fill="#3a2418"/><path d="M64 170h38v-6H64z" fill="#f2ead8"/>' +
      /* mansion 2: brownstone with arched windows and a portico */
      '<rect x="154" y="70" width="98" height="126" fill="#7a5a44"/><rect x="150" y="64" width="106" height="8" fill="#5e4434"/>' + w2 +
      '<rect x="186" y="164" width="34" height="32" fill="#3a2418"/><path d="M178 164h50l-6-10h-38z" fill="#c9b8a0"/><rect x="180" y="164" width="5" height="32" fill="#e8dcc6"/><rect x="221" y="164" width="5" height="32" fill="#e8dcc6"/>' +
      /* mansion 3: pale limestone with a corner tower */
      '<rect x="268" y="84" width="112" height="112" fill="#d9cdb4"/><rect x="352" y="56" width="32" height="140" fill="#cfc2a6"/><path d="M348 58l20-22 20 22z" fill="#4a5258"/>' + w3 +
      '<rect x="360" y="80" width="14" height="22" fill="#2c3a4a"/><rect x="360" y="120" width="14" height="22" fill="#2c3a4a"/>' +
      /* lawns, fences, sidewalk */
      '<rect x="0" y="196" width="400" height="18" fill="#5f8f4a"/>' + fence(14, 150) + fence(156, 250) + fence(266, 386) +
      '<rect x="0" y="214" width="400" height="14" fill="#c9c2b4"/><rect x="0" y="228" width="400" height="32" fill="#3a3d44"/>' +
      /* big street trees */
      '<rect x="150" y="120" width="6" height="94" fill="#4a3424"/><circle cx="153" cy="104" r="26" fill="#d9822b" opacity=".95"/><circle cx="140" cy="94" r="16" fill="#e0a030"/>' +
      '<rect x="258" y="124" width="6" height="90" fill="#4a3424"/><circle cx="261" cy="108" r="24" fill="#c0612b" opacity=".95"/><circle cx="274" cy="98" r="15" fill="#e0a030"/>' +
      '<path class="jcLeaf" d="M150 90q6-6 10 0q-4 6-10 0z" fill="#e0a030"/><path class="jcLeaf jcL2" d="M262 96q6-6 10 0q-4 6-10 0z" fill="#d9822b"/><path class="jcLeaf jcL3" d="M210 70q6-6 10 0q-4 6-10 0z" fill="#c0392b"/>' +
      '<text x="200" y="34" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#fff" letter-spacing="3" stroke="#22303a" stroke-width="3" paint-order="stroke">CLINTON AVENUE</text>' +
      label("CLINTON HILL, BROOKLYN"),
      sky("jcG2", "#9cc8ec", "#f3e3c6"));
  }

  /* 3. The Beacon School, Manhattan: the after-hours studio room, a laptop with the waveform, the mic behind the pop filter,
        the meters jumping, the clock on the wall past closing time, the city lit up through the window */
  function beacon() {
    let city = "";
    for (let i = 0; i < 9; i++) { const x = 228 + i * 18, h = 30 + (i * 37) % 50; city += '<rect x="' + x + '" y="' + (120 - h) + '" width="16" height="' + h + '" fill="#1d2a44"/>'; for (let y = 124 - h; y < 116; y += 8) city += '<rect x="' + (x + 4) + '" y="' + y + '" width="3" height="3" fill="#ffe08a" opacity=".85"/>'; }
    let wave = "";
    for (let i = 0; i < 26; i++) { const h = 4 + ((i * 7) % 13); wave += '<rect x="' + (64 + i * 3.6) + '" y="' + (150 - h / 2) + '" width="2" height="' + h + '" fill="' + CASH + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="#2c3346"/>' +
      /* acoustic foam wall */
      (function () { let s = ""; for (let x = 0; x < 210; x += 20) for (let y = 0; y < 120; y += 20) s += '<path d="M' + x + ' ' + y + 'h20v20H' + x + 'z" fill="' + (((x + y) / 20) % 2 ? "#363e55" : "#30374c") + '"/>'; return s; })() +
      /* window on the city */
      '<rect x="220" y="20" width="168" height="104" fill="#0d1530"/>' + city + '<rect x="220" y="20" width="168" height="104" fill="none" stroke="#7a8296" stroke-width="5"/><path d="M304 20v104" stroke="#7a8296" stroke-width="3"/>' +
      /* the clock: hands near eleven */
      '<circle cx="160" cy="34" r="16" fill="#f2efe6" stroke="#333" stroke-width="2"/><path d="M160 34v-10M160 34l-8-5" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      '<rect x="128" y="56" width="64" height="14" rx="3" fill="#c0392b"/><text x="160" y="66" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff" class="jcBlink">ON AIR</text>' +
      /* desk */
      '<rect x="20" y="176" width="360" height="12" fill="#6a4a2e"/><rect x="34" y="188" width="10" height="72" fill="#4a3220"/><rect x="356" y="188" width="10" height="72" fill="#4a3220"/>' +
      /* laptop */
      '<path d="M52 132h112v42H52z" fill="#bfc5ce"/><rect x="56" y="136" width="104" height="34" fill="#151c2a"/>' + wave + '<path d="M40 176h136l-8-4H48z" fill="#9aa1ab"/>' +
      /* meters */
      '<rect x="190" y="132" width="40" height="44" rx="3" fill="#1b1f27"/>' +
      '<rect class="jcMeter" x="196" y="140" width="5" height="32" fill="' + CASH + '"/><rect class="jcMeter jcM2" x="205" y="140" width="5" height="32" fill="' + CASH + '"/><rect class="jcMeter jcM3" x="214" y="140" width="5" height="32" fill="' + GOLD + '"/><rect class="jcMeter jcM4" x="223" y="140" width="5" height="32" fill="#e5533d"/>' +
      /* mic + pop filter */
      '<path d="M300 176v-56" stroke="#222" stroke-width="3"/><path d="M286 176h28" stroke="#222" stroke-width="4"/><rect x="292" y="96" width="16" height="30" rx="8" fill="#9aa1ab" stroke="#222" stroke-width="2"/>' +
      '<circle cx="270" cy="112" r="12" fill="#222" opacity=".35" stroke="#111" stroke-width="2"/><path d="M282 112h10" stroke="#111" stroke-width="2"/>' +
      /* headphones on the desk */
      '<path d="M330 172q0-20 18-20t18 20" stroke="#111" stroke-width="4" fill="none"/><rect x="326" y="166" width="10" height="10" rx="3" fill="' + ICE + '"/><rect x="360" y="166" width="10" height="10" rx="3" fill="' + ICE + '"/>' +
      '<text x="20" y="252" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e5e7eb" letter-spacing="2">THE BEACON SCHOOL · MANHATTAN</text>',
      "");
  }

  /* 4. Rich Forever in L.A.: palms swaying against a pink-orange sunset, the hills, a studio box lit up, a white coupe going by */
  function la() {
    const palm = (x, h, k) => '<g class="jcSway ' + (k || "") + '"><path d="M' + x + ' 214q-4-' + (h / 2) + ' 2-' + h + '" stroke="#3a2a22" stroke-width="5" fill="none"/>' +
      [[-26, 8], [-18, -6], [0, -12], [18, -6], [26, 8]].map(p => '<path d="M' + (x + 2) + ' ' + (214 - h) + 'q' + (p[0] / 2) + ' ' + (p[1] - 10) + ' ' + p[0] + ' ' + (p[1] + 6) + '" stroke="#1f3a2a" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcG4)"/>' +
      '<circle cx="200" cy="150" r="46" fill="#ffcf7a" opacity=".9"/>' +
      /* hills */
      '<path d="M0 150q60-40 120-14t120-20q60-30 160 10v80H0z" fill="#6a3a5a"/>' +
      '<path d="M0 176q80-30 160-6t140-14q50-10 100 6v60H0z" fill="#4a2a44"/>' +
      /* hillside lights */
      '<circle cx="60" cy="170" r="1.6" fill="#ffe08a"/><circle cx="90" cy="164" r="1.6" fill="#ffe08a"/><circle cx="300" cy="160" r="1.6" fill="#ffe08a"/><circle cx="340" cy="166" r="1.6" fill="#ffe08a"/>' +
      /* studio box */
      '<rect x="230" y="150" width="110" height="64" fill="#efe6da"/><rect x="226" y="146" width="118" height="6" fill="#c9b8a0"/>' +
      '<rect x="244" y="164" width="38" height="26" fill="#ffcf7a" class="jcFlk"/><rect x="292" y="164" width="36" height="50" fill="#2a2030"/>' +
      '<text x="263" y="206" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" fill="#2a2030" letter-spacing="1">STUDIO</text>' +
      palm(40, 120) + palm(110, 100, "jcSway2") + palm(370, 130) +
      /* road + car */
      '<rect x="0" y="214" width="400" height="46" fill="#2a2d33"/><path d="M0 236h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="jcCar"><rect x="0" y="220" width="80" height="18" rx="8" fill="#f4f4f4"/><path d="M16 220q8-12 24-12h12q8 0 14 12z" fill="#9fd0f5"/><circle cx="18" cy="240" r="6" fill="#111"/><circle cx="62" cy="240" r="6" fill="#111"/></g>' +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" letter-spacing="3" stroke="#5a2a4a" stroke-width="3" paint-order="stroke">RICH FOREVER</text>' +
      label("LOS ANGELES", "#fff"),
      sky("jcG4", "#ff7aa8", "#ffc27a"));
  }

  /* 5. Myrtle Av and Waverly Av: green street signs, the wall tagged CRITCH / TALK MONEY / HOOD FAVE,
        the tall brick Clinton Hill co-op towers behind */
  function corner() {
    let towers = "";
    [[150, 30], [236, 18], [322, 34]].forEach(t => {
      towers += '<rect x="' + t[0] + '" y="' + t[1] + '" width="62" height="' + (80 - t[1] + 10) + '" fill="#8a5a46"/>';
      for (let y = t[1] + 6; y < 86; y += 9) for (let x = t[0] + 6; x < t[0] + 58; x += 10) towers += '<rect x="' + x + '" y="' + y + '" width="5" height="5" fill="#2c3440"/>';
      towers += '<rect x="' + (t[0] + 22) + '" y="' + (t[1] - 6) + '" width="18" height="6" fill="#6a4434"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#jcG5)"/>' + towers +
      '<rect x="20" y="86" width="380" height="130" fill="#2f3a3e"/>' +
      (function () { let s = ""; for (let y = 94; y < 216; y += 10) s += '<path d="M20 ' + y + 'h380" stroke="#263034" stroke-width="1"/>'; return s; })() +
      tag("CRITCH", 150, 168, 46, ICE, -5) +
      tag("TALK MONEY", 210, 206, 22, CASH, -3) +
      tag("HOOD FAVE", 262, 108, 18, GOLD, 4) +
      sparkle(152, 122, "#fff") + sparkle(320, 160, ICE, "jcTw2") + sparkle(380, 108, "#fff", "jcTw3") +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="4" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="65" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Myrtle Av</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Waverly Av</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="jcCar"><rect x="0" y="222" width="72" height="20" rx="6" fill="#111"/><rect x="12" y="214" width="42" height="12" rx="4" fill="#4a5a6a"/><circle cx="16" cy="244" r="6" fill="#333"/><circle cx="56" cy="244" r="6" fill="#333"/></g>' +
      label("CLINTON HILL, BROOKLYN", "#e5e7eb"),
      sky("jcG5", "#3a5aa8", "#e8b48a"));
  }

  window.SCENES = { train, mansions, beacon, la, corner };
})();
