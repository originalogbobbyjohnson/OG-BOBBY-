/* Jersey City opening scenes for the Joe Budden game (Bergen-Lafayette, by Lincoln High). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}' +
    '@keyframes carR{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.carR{animation:carR 4.8s linear infinite}.carR2{animation-delay:-2.4s}' +
    '@keyframes carL{from{transform:translateX(480px)}to{transform:translateX(-120px)}}.carL{animation:carL 5.6s linear infinite}.carL2{animation-delay:-2.8s}' +
    '@keyframes intoTun{0%{transform:translate(0,0) scale(1);opacity:1}85%{opacity:1}100%{transform:translate(118px,-36px) scale(.35);opacity:0}}.tun{transform-box:fill-box;transform-origin:50% 50%;animation:intoTun 3.6s linear infinite}.tun2{animation-delay:-1.2s}.tun3{animation-delay:-2.4s}' +
    '@keyframes lights{from{transform:translateX(0)}to{transform:translateX(-260px)}}.hl{animation:lights 6s linear infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.4s ease-in-out infinite}' +
    '@keyframes reed{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.reed{transform-box:fill-box;transform-origin:50% 100%;animation:reed 2.6s ease-in-out infinite}.reed2{animation-delay:-1.3s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.15}}.blk{animation:blink 1.2s steps(1) infinite}.blk2{animation-delay:-.6s}' +
    '@keyframes bird{from{transform:translate(-30px,0)}to{transform:translate(440px,-20px)}}.bird{animation:bird 11s linear infinite}.bird2{animation-delay:-5.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89 + 7) % 400) + '" cy="' + (8 + (i * 47) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const lbl = (x, y, t, size, fill, ls) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="' + size + '" letter-spacing="' + (ls || 2) + '" fill="' + fill + '">' + t + '</text>';
  const car = (x, y, color, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="60" height="15" rx="5" fill="' + color + '"/><path d="M' + (x + 12) + ' ' + y + 'l7-9h22l7 9z" fill="' + color + '"/><path d="M' + (x + 21) + ' ' + (y - 7) + 'h18l4 6h-26z" fill="#bfe3ff" opacity=".8"/><circle cx="' + (x + 13) + '" cy="' + (y + 16) + '" r="4.5" fill="#111"/><circle cx="' + (x + 47) + '" cy="' + (y + 16) + '" r="4.5" fill="#111"/></g>';
  const BLUE = "#7fb7ff", GOLD = "#ffb703", RED = "#e63946", ROYAL = "#1f4fbf";

  /* 1. Garfield Avenue on the Hudson-Bergen Light Rail: the platform down in the cut under the Garfield Ave bridge, the silver light rail car sliding in */
  function station() {
    let win = "";
    for (let x = 40; x < 250; x += 30) win += '<rect x="' + x + '" y="128" width="20" height="20" rx="3" fill="#cfe3f2" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      /* row houses up top behind the cut */
      '<path d="M0 70V40h40v-8h34v8h44v-10h30v10h52v-6h40v6h60v-12h36v12h64V70z" fill="#6b4a3a"/>' +
      (function () { let w = ""; for (let x = 8; x < 400; x += 22) w += '<rect x="' + x + '" y="48" width="8" height="10" fill="#ffe7a8" opacity=".7"/>'; return w; })() +
      /* cut walls */
      '<rect x="0" y="70" width="400" height="60" fill="#8d8478"/>' +
      (function () { let s = ""; for (let y = 78; y < 130; y += 10) s += '<path d="M0 ' + y + 'h400" stroke="#7a7266" stroke-width="1"/>'; return s; })() +
      /* Garfield Ave bridge over the cut */
      '<rect x="0" y="62" width="400" height="14" fill="#4b5563"/><path d="M0 62h400" stroke="#9ca3af" stroke-width="3"/>' +
      lbl(200, 73, "GARFIELD AVE", 8, "#e5e7eb", 4) +
      car(0, 46, "#e5e7eb", "carR") + car(0, 46, RED, "carR carR2") +
      '<path d="M0 103h400" stroke="#374151" stroke-width="1.5"/>' +
      /* station sign */
      '<rect x="248" y="86" width="5" height="40" fill="#333"/><rect x="380" y="86" width="5" height="40" fill="#333"/>' +
      '<rect x="236" y="82" width="160" height="40" rx="3" fill="#111"/>' +
      '<text x="246" y="102" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Garfield Avenue</text>' +
      '<rect x="246" y="107" width="32" height="12" rx="6" fill="#0039a6"/><text x="262" y="116" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#fff">HBLR</text>' +
      '<text x="284" y="116" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#fff">West Side Ave – Tonnelle Ave</text>' +
      /* the light rail car */
      '<g class="anim-train">' +
        '<path d="M14 118h236q14 0 18 14v26H14z" fill="#e9edf2" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="14" y="152" width="254" height="6" fill="#0039a6"/><rect x="14" y="158" width="254" height="4" fill="#f58025"/>' + win +
        '<path d="M250 124h8q8 0 10 12v8h-18z" fill="#cfe3f2" opacity=".9"/><circle cx="262" cy="156" r="3" fill="#fff6c2"/>' +
        '<path d="M60 118l20-14M160 118l20-14" stroke="#4b5563" stroke-width="2"/><path d="M70 104h40M170 104h40" stroke="#4b5563" stroke-width="2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="166" width="400" height="8" fill="#eab308"/><rect x="0" y="174" width="400" height="30" fill="#b0aa9e"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3d44"/>' +
      tag("MOOD MUZIK", 24, 240, 26, BLUE, -4) + tag("JOEY", 270, 238, 30, GOLD, -5),
      sky("g1", "#5b7db8", "#f2c38a"));
  }

  /* 2. Lincoln High School, Crescent Ave: brick and stone, royal blue and white Lions banners, the flag going */
  function school() {
    let win = "";
    for (let y = 96; y < 186; y += 28) for (let x = 36; x < 372; x += 24) if (x < 140 || x > 250) win += '<rect x="' + x + '" y="' + y + '" width="13" height="18" fill="#d6e6f3" stroke="#efe6d2" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="22" y="84" width="356" height="112" fill="#8a3b2c"/><rect x="18" y="78" width="364" height="9" fill="#efe6d2"/>' +
      '<rect x="22" y="150" width="356" height="4" fill="#efe6d2" opacity=".7"/>' +
      /* central stone entrance */
      '<rect x="150" y="62" width="100" height="134" fill="#e4dac4"/><rect x="146" y="58" width="108" height="8" fill="#d2c6ac"/>' +
      '<path d="M172 196v-44a28 28 0 0 1 56 0v44z" fill="#3a2a22"/><path d="M176 152a24 24 0 0 1 48 0" stroke="#d2c6ac" stroke-width="3" fill="none"/>' +
      '<rect x="156" y="74" width="88" height="16" fill="#d2c6ac"/>' + lbl(200, 86, "LINCOLN HIGH", 9, "#4a3a2a", 1.5) +
      '<rect x="160" y="96" width="14" height="40" fill="#d6e6f3" stroke="#d2c6ac" stroke-width="2"/><rect x="226" y="96" width="14" height="40" fill="#d6e6f3" stroke="#d2c6ac" stroke-width="2"/>' +
      win +
      /* banners */
      '<rect x="64" y="154" width="26" height="38" fill="' + ROYAL + '"/><path d="M64 192l13-8 13 8z" fill="' + ROYAL + '"/><text x="77" y="178" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">L</text>' +
      '<rect x="310" y="154" width="26" height="38" fill="#fff"/><path d="M310 192l13-8 13 8z" fill="#fff"/><text x="323" y="178" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="16" fill="' + ROYAL + '">L</text>' +
      /* flag */
      '<rect x="199" y="20" width="2" height="38" fill="#ccc"/><g class="flag"><rect x="201" y="21" width="22" height="13" fill="' + ROYAL + '"/><rect x="201" y="26" width="22" height="3" fill="#fff"/></g>' +
      '<rect x="140" y="196" width="120" height="6" fill="#d2c6ac"/>' +
      '<rect x="0" y="196" width="140" height="12" fill="#5f9a4a"/><rect x="260" y="196" width="140" height="12" fill="#5f9a4a"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3d44"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="10" y="212" width="150" height="16" rx="3" fill="' + ROYAL + '"/>' + lbl(85, 224, "LINCOLN LIONS", 9, "#fff") +
      car(0, 238, GOLD, "carL") + lbl(320, 252, "CRESCENT AVE · JERSEY CITY", 7.5, "#f6efdc", 1.5),
      sky("g2", "#8cc8f0", "#eef7fc"));
  }

  /* 3. The Holland Tunnel's Jersey City mouth: the brick ventilation building over the plaza, cars streaming into the tube toward Manhattan */
  function tunnel() {
    let arches = "";
    for (let x = 248; x < 360; x += 22) arches += '<path d="M' + x + ' 120V86a7 7 0 0 1 14 0V120z" fill="#3a2a2a" stroke="#d9b38c" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* ventilation building */
      '<rect x="236" y="40" width="140" height="132" fill="#9b4a34"/><rect x="232" y="36" width="148" height="8" fill="#7a3826"/>' +
      '<rect x="262" y="14" width="88" height="26" fill="#8a4230"/>' +
      (function () { let s = ""; for (let x = 270; x < 346; x += 12) s += '<rect x="' + x + '" y="18" width="6" height="18" fill="#3a2a2a"/>'; return s; })() + arches +
      '<path d="M236 130h140" stroke="#d9b38c" stroke-width="2"/>' +
      /* the portal */
      '<rect x="40" y="96" width="180" height="76" fill="#cbbfa8"/><rect x="36" y="90" width="188" height="10" fill="#b5a88e"/>' +
      lbl(130, 116, "HOLLAND TUNNEL", 13, "#3a2f22", 3) +
      '<path d="M70 172v-30a20 20 0 0 1 40 0v30zM150 172v-30a20 20 0 0 1 40 0v30z" fill="#14161a"/>' +
      '<g fill="#ffd98a"><circle cx="90" cy="134" r="1.6" class="blk"/><circle cx="170" cy="134" r="1.6" class="blk blk2"/></g>' +
      /* plaza + lanes */
      '<rect x="0" y="172" width="400" height="88" fill="#4b5563"/>' +
      '<path d="M0 260L60 172h160L400 260z" fill="#3a3d44"/>' +
      '<path d="M90 172L40 260M170 172L200 260M130 172L120 260" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="12 10"/>' +
      '<rect x="0" y="172" width="60" height="88" fill="#4b5563"/><rect x="220" y="172" width="180" height="20" fill="#4b5563"/>' +
      /* cars heading in */
      '<g class="tun">' + car(20, 236, RED, "") + '</g><g class="tun tun2">' + car(20, 236, "#e5e7eb", "") + '</g><g class="tun tun3">' + car(20, 236, GOLD, "") + '</g>' +
      /* overhead sign */
      '<rect x="268" y="224" width="4" height="36" fill="#6b7280"/><rect x="372" y="224" width="4" height="36" fill="#6b7280"/>' +
      '<rect x="252" y="196" width="140" height="30" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="322" y="211" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Holland Tunnel</text>' +
      '<text x="322" y="222" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">To New York</text>' +
      '<g class="bird"><path d="M0 30q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>',
      sky("g3", "#a9cbe8", "#f3e6d0"));
  }

  /* 4. The Pulaski Skyway at dusk: the black steel cantilever humps over the Meadowlands marsh, headlights running across the deck */
  function skyway() {
    let truss = "";
    const top = x => 120 - 60 * Math.exp(-Math.pow((x - 130) / 70, 2)) - 46 * Math.exp(-Math.pow((x - 310) / 60, 2));
    for (let x = 0; x <= 400; x += 16) {
      const t1 = top(x).toFixed(1), t2 = top(x + 16).toFixed(1);
      truss += '<path d="M' + x + ' ' + t1 + 'L' + (x + 16) + ' 132M' + x + ' 132L' + (x + 16) + ' ' + t2 + 'M' + x + ' ' + t1 + 'V132" stroke="#14161a" stroke-width="2"/>';
    }
    let topLine = "M0 " + top(0).toFixed(1);
    for (let x = 4; x <= 400; x += 4) topLine += "L" + x + " " + top(x).toFixed(1);
    let lights = "";
    for (let i = 0; i < 24; i++) lights += '<circle cx="' + (i * 22) + '" cy="129" r="1.8" fill="' + (i % 2 ? "#ffe7a8" : "#ff6b6b") + '"/>';
    let reeds = "";
    for (let x = 4; x < 400; x += 10) reeds += '<path class="reed' + ((x / 10) % 2 ? " reed2" : "") + '" d="M' + x + ' 250q2-26 ' + ((x % 3) - 1) * 4 + ' -' + (34 + (x % 5) * 4) + '" stroke="#5a6b3a" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="330" cy="70" r="20" fill="#ffcf7a" opacity=".9"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#7a6a4a"/><rect x="0" y="190" width="400" height="14" fill="#c98a5a" opacity=".5"/>' +
      /* piers */
      (function () { let p = ""; [40, 100, 160, 220, 280, 340].forEach(x => p += '<rect x="' + (x - 4) + '" y="132" width="8" height="' + (x === 160 || x === 280 ? 64 : 50) + '" fill="#14161a"/>'); return p; })() +
      '<path d="' + topLine + '" stroke="#14161a" stroke-width="4" fill="none"/>' + truss +
      '<rect x="0" y="128" width="400" height="6" fill="#1f2328"/>' +
      '<g class="hl">' + lights + '</g>' +
      reeds +
      '<g class="bird"><path d="M0 40q5-5 10 0q5-5 10 0" stroke="#3a2a2a" stroke-width="1.6" fill="none"/></g><g class="bird bird2"><path d="M0 56q4-4 8 0q4-4 8 0" stroke="#3a2a2a" stroke-width="1.4" fill="none"/></g>' +
      '<rect x="128" y="226" width="144" height="22" rx="3" fill="#14161a" opacity=".85"/>' + lbl(200, 241, "PULASKI SKYWAY", 11, "#ffcf7a", 3),
      sky("g4", "#3b2f5c", "#f08a5d"));
  }

  /* IC: shared iconic landmark in the corner backdrop (its own little animations, prefixed ic-) */
  const IC_CSS = '<style>' +
    '@keyframes icBl{0%,49%{opacity:1}50%,100%{opacity:.2}}.ic-bl{animation:icBl 1s steps(1) infinite}.ic-b2{animation-delay:-.5s}' +
    '@keyframes icSw{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ic-sw{animation:icSw 6s ease-in-out infinite}.ic-s2{animation-delay:-3s}' +
    '</style>';
  /* from down on Communipaw Ave, up the hill to the north: the Loew's Jersey's terracotta crown over the rooftops, the clock in the gable, St. George on top, the marquee glow coming up and two searchlights crossing */
  const icBg = () => { let b = "";
    for (let x = 158; x <= 242; x += 7) b += '<circle class="ic-bl' + ((x / 7) % 2 ? " ic-b2" : "") + '" cx="' + x + '" cy="90" r="1.5" fill="#ffe7a8"/>';
    return IC_CSS +
      '<g opacity=".18"><path class="ic-sw" style="transform-origin:180px 96px" d="M180 96L166 -20h28z" fill="#fff3c4"/><path class="ic-sw ic-s2" style="transform-origin:222px 96px" d="M222 96L208 -20h28z" fill="#fff3c4"/></g>' +
      '<rect x="160" y="44" width="80" height="50" fill="#b8683c"/><path d="M154 46L200 20L246 46z" fill="#c97a4a"/>' +
      '<path d="M162 52q4-3 8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0" stroke="#f0c9a0" stroke-width="1.1" fill="none"/>' +
      '<circle cx="200" cy="36" r="6" fill="#f6efdc" stroke="#7a3a1a" stroke-width="1.2"/><path d="M200 36v-4M200 36l3 2" stroke="#3a2a1a" stroke-width="1"/>' +
      '<path d="M197 20l1.5-8h3l1.5 8z" fill="#5a3020"/><circle cx="200" cy="10" r="2.2" fill="#5a3020"/><path d="M201.5 13l6-6" stroke="#5a3020" stroke-width="1.4"/>' +
      '<path d="M172 82V64a5 5 0 0 1 10 0V82zM195 82V64a5 5 0 0 1 10 0V82zM218 82V64a5 5 0 0 1 10 0V82z" fill="#3a2a4a" stroke="#f0c9a0" stroke-width="1"/>' + b +
      '<text x="200" y="104" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="6.5" letter-spacing="3" fill="#f0c9a0" opacity=".85">LOEW\'S JERSEY</text>'; };

  /* 5. Communipaw Ave and Crescent Ave, by Lincoln High: green street signs, his name on the wall, the Loew's crown up the hill behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) + icBg() +
      '<path d="M0 108V88h34v-10h40v10h48v-6h30v26zM250 108V84h40v-8h36v8h40v-6h34v30z" fill="#141826"/>' +
      '<rect x="14" y="108" width="300" height="112" fill="#33384a"/>' +
      (function () { let s = ""; for (let y = 120; y < 220; y += 12) s += '<path d="M14 ' + y + 'h300" stroke="#2b3040" stroke-width="1"/>'; return s; })() +
      tag("JOE BUDDEN", 26, 168, 40, BLUE, -6) +
      tag("JERSEY'S BACK", 28, 210, 18, GOLD, -3) + tag("MOOD MUZIK", 206, 212, 15, RED, -4) +
      /* streetlight */
      '<rect x="332" y="70" width="5" height="150" fill="#1d2329"/><path d="M334 72h-22" stroke="#1d2329" stroke-width="5"/><path class="flk" d="M300 76h24l-6 8h-12z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="306" y="112" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="352" y="125" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Communipaw Ave</text>' +
      '<rect x="312" y="134" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="352" y="147" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Crescent Ave</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car(0, 226, RED, "carR") +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#cfe0ff" letter-spacing="2">JERSEY CITY, NEW JERSEY</text>',
      sky("g5", "#0b0f1e", "#2c2a4a"));
  }

  window.SCENES = { station, school, tunnel, skyway, corner };
})();
