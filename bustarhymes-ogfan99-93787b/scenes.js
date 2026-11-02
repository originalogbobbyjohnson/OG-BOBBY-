/* Uniondale / Hempstead, Long Island opening scenes for the Busta Rhymes game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 1.6s infinite}.flk2{animation-delay:-.7s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob .8s ease-in-out infinite}.bob2{animation-delay:-.4s}' +
    '@keyframes beam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 100%;animation:beam 3.2s ease-in-out infinite}.beam2{animation-delay:-1.6s}' +
    '@keyframes fire{0%,100%{transform:scaleX(1);opacity:1}50%{transform:scaleX(1.18);opacity:.8}}' +
    '.fire{transform-box:fill-box;transform-origin:0% 50%;animation:fire .5s ease-in-out infinite}' +
    '@keyframes wing{0%,100%{transform:rotate(0)}50%{transform:rotate(-14deg)}}' +
    '.wing{transform-box:fill-box;transform-origin:20% 100%;animation:wing 1.1s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.wave{animation:wave 3s ease-in-out infinite}.wave2{animation-delay:-1.5s}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}' +
    '.gull{animation:gull 11s linear infinite}.gull2{animation-delay:-5s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcc00", RED = "#e8322b", GREEN = "#2fbf71";

  /* 1. Hempstead, the bus side: the LIRR train pulling in beside the Rosa Parks Hempstead Transit Center, its glass canopy and the blue-and-white buses leaving for Uniondale */
  function train() {
    let windows = "";
    for (let x = 24; x < 220; x += 40) windows += '<rect x="' + x + '" y="124" width="26" height="18" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let glass = "";
    for (let x = 214; x < 400; x += 18) glass += '<path d="M' + x + ' 44v38" stroke="#9fc4dc" stroke-width="1"/>';
    let bricks = "";
    for (let y = 186; y < 214; y += 8) bricks += '<path d="M0 ' + y + 'h400" stroke="#6a2a1c" stroke-width="1" opacity=".6"/>';
    const nice = (x, y, sign) => '<rect x="' + x + '" y="' + y + '" width="120" height="40" rx="7" fill="#f4f6f8" stroke="#6b7280" stroke-width="1.5"/>' +
      '<path d="M' + x + ' ' + (y + 26) + 'h120v6H' + x + 'z" fill="#1f5fbf"/><path d="M' + (x + 70) + ' ' + (y + 26) + 'q30-14 50-14v8q-20 0-44 12z" fill="#2fa7e0"/>' +
      '<rect x="' + (x + 6) + '" y="' + (y + 6) + '" width="86" height="14" fill="#2a3440"/><rect x="' + (x + 96) + '" y="' + (y + 4) + '" width="20" height="20" rx="2" fill="#2a3440"/>' +
      '<text x="' + (x + 48) + '" y="' + (y + 16) + '" text-anchor="middle" font-family="monospace" font-weight="700" font-size="8" fill="#ffb020">' + sign + '</text>' +
      '<circle cx="' + (x + 22) + '" cy="' + (y + 40) + '" r="6" fill="#111"/><circle cx="' + (x + 98) + '" cy="' + (y + 40) + '" r="6" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      /* the transit center: curved glass canopy over the bus bays */
      '<path d="M206 46q97-26 194-6v8q-97-20-194 6z" fill="#5f7f96"/><rect x="206" y="48" width="194" height="36" fill="#cfe6f4" opacity=".55"/>' + glass +
      '<rect x="210" y="84" width="4" height="26" fill="#59616e"/><rect x="392" y="84" width="4" height="26" fill="#59616e"/>' +
      '<text x="303" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#1d232b">ROSA PARKS HEMPSTEAD TRANSIT CENTER</text>' +
      '<rect x="206" y="108" width="194" height="6" fill="#8a8f96"/>' + nice(260, 68, "UNIONDALE") +
      /* the LIRR sign */
      '<rect x="10" y="36" width="186" height="40" rx="4" fill="#111"/><rect x="10" y="36" width="186" height="4" fill="#fff"/>' +
      '<text x="22" y="63" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Hempstead</text>' + badge(130, 56, 50, "LIRR", "#0039a6") +
      '<path d="M0 26h200v10H0z" fill="#3d4652"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="250" height="50" rx="8" fill="#cfd5dc" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="146" width="250" height="5" fill="#0039a6"/><rect x="8" y="151" width="250" height="3" fill="#6a5acd"/>' + windows +
        '<circle cx="250" cy="156" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="162" width="400" height="7" fill="#eab308"/><rect x="0" y="169" width="400" height="11" fill="#9c968a"/>' +
      '<rect x="0" y="180" width="400" height="36" fill="#8a3a28"/>' + bricks +
      tag("BUSTA", 20, 212, 30, GOLD, -5) + tag("FLIPMODE", 150, 210, 26, RED, -4) + tag("WOO-HAH", 296, 210, 20, GREEN, -3) +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car" style="animation-duration:9s">' + nice(0, 212, "UNIONDALE") + '</g>',
      sky("gs", "#f0a35a", "#ffe0a8"));
  }

  /* 2. Nassau Coliseum in Uniondale: the round arena wrapped in silver aluminum fins, glass lobby glowing, spotlights sweeping */
  function coliseum() {
    let fins = "";
    for (let x = 40; x <= 360; x += 10) { const h = 70 - Math.pow((x - 200) / 26, 2); fins += '<rect x="' + x + '" y="' + (110 - Math.max(h, 20)) + '" width="5" height="' + (Math.max(h, 20) + 40) + '" fill="' + ((x / 10) % 2 ? "#d9dde2" : "#b7bdc5") + '"/>'; }
    let fans = "";
    for (let i = 0; i < 13; i++) { const x = 14 + i * 31, c = [GOLD, RED, GREEN, "#e8e8e8"][i % 4];
      fans += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="214" r="9" fill="#1b1b22"/><path d="M' + (x - 13) + ' 260v-32q13-14 26 0v32z" fill="' + c + '"/><path d="M' + (x + 6) + ' 222l8-18" stroke="#1b1b22" stroke-width="4" stroke-linecap="round"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(14) +
      '<path class="beam" d="M110 150L90 0h40z" fill="#fff6c2" opacity=".18"/><path class="beam beam2" d="M290 150L270 0h40z" fill="#fff6c2" opacity=".18"/>' +
      '<ellipse cx="200" cy="150" rx="176" ry="22" fill="#5b6370"/>' + fins +
      '<rect x="30" y="150" width="340" height="30" fill="#1d2a3a"/>' +
      '<rect x="40" y="154" width="320" height="22" fill="#ffd27a" opacity=".55"/>' +
      (function () { let s = ""; for (let x = 40; x < 360; x += 20) s += '<path d="M' + x + ' 154v22" stroke="#1d2a3a" stroke-width="2"/>'; return s; })() +
      '<rect x="150" y="122" width="100" height="22" rx="3" fill="#111"/><text x="200" y="138" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '" letter-spacing="2">BUSTA LIVE</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#22252c"/>' + fans +
      '<text x="200" y="198" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#e9dcc4" letter-spacing="3">NASSAU COLISEUM · UNIONDALE</text>',
      sky("gc", "#0d1430", "#3a3f78"));
  }

  /* 3. The Dungeon Dragon: a stone dungeon, torches flickering, the green dragon breathing fire */
  function dragon() {
    let stones = "";
    for (let y = 0; y < 200; y += 20) for (let x = (y / 20) % 2 ? -20 : 0; x < 400; x += 40) stones += '<rect x="' + x + '" y="' + y + '" width="38" height="18" rx="2" fill="#3a3540"/>';
    const torch = x => '<rect x="' + (x - 3) + '" y="70" width="6" height="26" fill="#6b4a2a"/><path class="flk" d="M' + (x - 8) + ' 70q8-26 16 0z" fill="#ffb238"/><path class="flk flk2" d="M' + (x - 4) + ' 70q4-14 8 0z" fill="#fff2a8"/>' +
      '<circle cx="' + x + '" cy="62" r="26" fill="#ffb238" opacity=".12"/>';
    return svg(
      '<rect width="400" height="260" fill="#25212b"/>' + stones +
      torch(40) + torch(360) +
      '<path d="M120 200q0-90 80-90t80 90z" fill="#120f16"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2d2832"/>' +
      /* dragon */
      '<path class="wing" d="M190 150l40-58 6 40 24-26-4 50z" fill="#1f8a50" stroke="#0e4a2a" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M140 200q10-50 60-56t70 20q10 30-10 36z" fill="' + GREEN + '" stroke="#0e4a2a" stroke-width="2"/>' +
      '<path d="M120 204q-30-6-40-30 20 14 46 14z" fill="' + GREEN + '" stroke="#0e4a2a" stroke-width="2"/>' +
      '<path d="M240 160q10-34 40-40t28 24q-6 14-30 14z" fill="' + GREEN + '" stroke="#0e4a2a" stroke-width="2"/>' +
      '<path d="M278 122l6-16 6 14M292 124l10-12 2 16" fill="' + GOLD + '" stroke="#7a5a10" stroke-width="1"/>' +
      '<circle cx="292" cy="136" r="4" fill="' + GOLD + '"/><circle cx="293" cy="136" r="1.8" fill="#111"/>' +
      '<path d="M200 168q10 6 20 0M178 176q10 6 20 0" stroke="#bfe8cc" stroke-width="2" fill="none"/>' +
      '<g class="fire"><path d="M306 146q40-18 80-4 -24 6-40 4 20 10 40 22-40-4-80-10z" fill="' + RED + '"/><path d="M308 148q26-8 52 0-26 6-52 6z" fill="' + GOLD + '"/></g>' +
      '<text x="200" y="240" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#e9dcc4" letter-spacing="3">THE DUNGEON DRAGON</text>');
  }

  /* 4. George Westinghouse High School on Johnson St, Downtown Brooklyn: the red-brick school with the big multi-pane shop windows, before the move out to Long Island */
  function beach() {
    let wins = "";
    for (let x = 70; x < 330; x += 44) for (let y = 104; y < 180; y += 38) { if (y > 120 && x > 150 && x < 230) continue;
      wins += '<rect x="' + x + '" y="' + y + '" width="32" height="28" fill="#c9d6e0" stroke="#e8dcc0" stroke-width="2"/>';
      for (let i = 1; i < 4; i++) wins += '<path d="M' + (x + i * 8) + ' ' + y + 'v28" stroke="#5a6470" stroke-width=".8"/>';
      wins += '<path d="M' + x + ' ' + (y + 14) + 'h32" stroke="#5a6470" stroke-width=".8"/>';
    }
    let bricks = "";
    for (let y = 92; y < 200; y += 6) bricks += '<path d="M56 ' + y + 'h288" stroke="#7a3222" stroke-width=".7" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gj)"/>' +
      /* Downtown Brooklyn towers behind */
      '<rect x="0" y="40" width="44" height="160" fill="#7a8aa0"/><rect x="350" y="30" width="50" height="170" fill="#8a9ab0"/><rect x="300" y="56" width="40" height="40" fill="#6a7a90"/>' +
      '<rect x="56" y="88" width="288" height="112" fill="#a0442e"/>' + bricks + '<rect x="52" y="82" width="296" height="8" fill="#e8dcc0"/>' + wins +
      '<rect x="176" y="168" width="48" height="32" fill="#3a2418"/><rect x="170" y="160" width="60" height="6" fill="#e8dcc0"/>' +
      '<rect x="126" y="62" width="148" height="18" fill="#14181d"/><text x="200" y="75" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="' + GOLD + '">GEORGE WESTINGHOUSE H.S.</text>' +
      '<rect x="0" y="200" width="400" height="12" fill="#9c968a"/><rect x="0" y="212" width="400" height="48" fill="#2a2d33"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="218" width="54" height="16" rx="5" fill="' + GOLD + '"/><rect x="12" y="211" width="28" height="9" rx="3" fill="#dfeaf5"/><circle cx="12" cy="236" r="5" fill="#111"/><circle cx="42" cy="236" r="5" fill="#111"/></g>' +
      '<g class="gull"><path d="M0 40q6-6 10 0q4-6 10 0" stroke="#1d2a33" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#18405e" letter-spacing="2">JOHNSON ST · DOWNTOWN BROOKLYN</text>' +
      tag("BUSSA BUS", 18, 256, 22, GOLD, -3) + tag("FLIPMODE", 280, 256, 18, RED, -3),
      sky("gj", "#7cc6f0", "#e6f5fb"));
  }

  /* 5. The corner: Front St and Uniondale Ave, green signs, his name sprayed on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + IC_BD +
      '<rect x="20" y="70" width="380" height="146" fill="#5a4a3e"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#3a2e26"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 14) s += '<path d="M20 ' + y + 'h380" stroke="#4a3c32" stroke-width="1"/>'; return s; })() +
      tag("BUSTA RHYMES", 120, 158, 34, GOLD, -5) +
      tag("WOO-HAH!", 210, 198, 26, RED, -3) +
      tag("FLIPMODE", 170, 110, 18, GREEN, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Front St</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Uniondale Ave</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + RED + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#f7c9c4"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e9dcc4" letter-spacing="2">UNIONDALE, LONG ISLAND</text>',
      sky("gk", "#5b93d6", "#d4e6f6"));
  }

  /* Iconic landmark behind the corner, shared with the other artists from this area but seen from this corner: Nassau Coliseum: right there in daylight, the silver fin wall towering over the roofline, the sign board blinking, a blimp floating over */
  const IC_BD = "<g><style>@keyframes icsw{0%{transform:scaleX(1)}50%{transform:scaleX(-1)}100%{transform:scaleX(1)}}.icsw{animation:icsw 6s ease-in-out infinite}@keyframes icfl{0%,14%,36%,100%{opacity:0}25%{opacity:.85}}.icfl{animation:icfl 6s ease-in-out infinite}@keyframes icpl{0%,100%{opacity:.35}50%{opacity:1}}.icpl{animation:icpl 2.6s ease-in-out infinite}.icp2{animation-delay:-1.3s}@keyframes icbl{0%,49%{opacity:1}50%,100%{opacity:.12}}.icbl{animation:icbl 1.4s steps(1) infinite}.icb2{animation-delay:-.7s}@keyframes icsh{0%,100%{transform:translateX(0);opacity:.35}50%{transform:translateX(6px);opacity:.9}}.icsh{animation:icsh 3s ease-in-out infinite}.ics2{animation-delay:-1.5s}@keyframes icsm{0%{transform:translate(0,0) scale(.6);opacity:.75}100%{transform:translate(22px,-30px) scale(1.6);opacity:0}}.icsm{animation:icsm 4s linear infinite;transform-box:fill-box;transform-origin:center}.icm2{animation-delay:-1.3s}.icm3{animation-delay:-2.6s}@keyframes icsl{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.icsl{animation:icsl 5s ease-in-out infinite}.icl2{animation-delay:-2.5s}@keyframes icsg{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.icsg{animation:icsg 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}@keyframes icdr{from{transform:translateX(0)}to{transform:translateX(var(--d))}}.icdr{animation:icdr var(--t) linear infinite}</style><ellipse cx=\"282\" cy=\"22\" rx=\"150\" ry=\"19.2\" fill=\"#6a7380\"/><rect x=\"132\" y=\"36.9\" width=\"4.8\" height=\"56.2\" fill=\"#dfe4ea\"/><rect x=\"140\" y=\"40.1\" width=\"4.8\" height=\"52.9\" fill=\"#b3bcc7\"/><rect x=\"148\" y=\"33.8\" width=\"4.8\" height=\"59.2\" fill=\"#dfe4ea\"/><rect x=\"156\" y=\"32.4\" width=\"4.8\" height=\"60.6\" fill=\"#b3bcc7\"/><rect x=\"164\" y=\"35.9\" width=\"4.8\" height=\"57.1\" fill=\"#dfe4ea\"/><rect x=\"172\" y=\"29.9\" width=\"4.8\" height=\"63.1\" fill=\"#b3bcc7\"/><rect x=\"180\" y=\"28.8\" width=\"4.8\" height=\"64.3\" fill=\"#dfe4ea\"/><rect x=\"188\" y=\"32.5\" width=\"4.8\" height=\"60.5\" fill=\"#b3bcc7\"/><rect x=\"196\" y=\"26.8\" width=\"4.8\" height=\"66.3\" fill=\"#dfe4ea\"/><rect x=\"204\" y=\"25.9\" width=\"4.8\" height=\"67.1\" fill=\"#b3bcc7\"/><rect x=\"212\" y=\"29.9\" width=\"4.8\" height=\"63.1\" fill=\"#dfe4ea\"/><rect x=\"220\" y=\"24.4\" width=\"4.8\" height=\"68.6\" fill=\"#b3bcc7\"/><rect x=\"228\" y=\"23.8\" width=\"4.8\" height=\"69.2\" fill=\"#dfe4ea\"/><rect x=\"236\" y=\"28.1\" width=\"4.8\" height=\"64.9\" fill=\"#b3bcc7\"/><rect x=\"244\" y=\"22.9\" width=\"4.8\" height=\"70.2\" fill=\"#dfe4ea\"/><rect x=\"252\" y=\"22.5\" width=\"4.8\" height=\"70.5\" fill=\"#b3bcc7\"/><rect x=\"260\" y=\"27.1\" width=\"4.8\" height=\"66\" fill=\"#dfe4ea\"/><rect x=\"268\" y=\"22.1\" width=\"4.8\" height=\"70.9\" fill=\"#b3bcc7\"/><rect x=\"276\" y=\"22\" width=\"4.8\" height=\"71\" fill=\"#dfe4ea\"/><rect x=\"284\" y=\"26.8\" width=\"4.8\" height=\"66.2\" fill=\"#b3bcc7\"/><rect x=\"292\" y=\"22.1\" width=\"4.8\" height=\"70.9\" fill=\"#dfe4ea\"/><rect x=\"300\" y=\"22.3\" width=\"4.8\" height=\"70.8\" fill=\"#b3bcc7\"/><rect x=\"308\" y=\"27.4\" width=\"4.8\" height=\"65.7\" fill=\"#dfe4ea\"/><rect x=\"316\" y=\"22.9\" width=\"4.8\" height=\"70.1\" fill=\"#b3bcc7\"/><rect x=\"324\" y=\"23.3\" width=\"4.8\" height=\"69.7\" fill=\"#dfe4ea\"/><rect x=\"332\" y=\"28.7\" width=\"4.8\" height=\"64.4\" fill=\"#b3bcc7\"/><rect x=\"340\" y=\"24.5\" width=\"4.8\" height=\"68.5\" fill=\"#dfe4ea\"/><rect x=\"348\" y=\"25.2\" width=\"4.8\" height=\"67.8\" fill=\"#b3bcc7\"/><rect x=\"356\" y=\"30.8\" width=\"4.8\" height=\"62.3\" fill=\"#dfe4ea\"/><rect x=\"364\" y=\"26.9\" width=\"4.8\" height=\"66.2\" fill=\"#b3bcc7\"/><rect x=\"372\" y=\"27.8\" width=\"4.8\" height=\"65.2\" fill=\"#dfe4ea\"/><rect x=\"380\" y=\"33.7\" width=\"4.8\" height=\"59.4\" fill=\"#b3bcc7\"/><rect x=\"388\" y=\"30\" width=\"4.8\" height=\"63\" fill=\"#dfe4ea\"/><rect x=\"396\" y=\"31.2\" width=\"4.8\" height=\"61.8\" fill=\"#b3bcc7\"/><rect x=\"404\" y=\"37.4\" width=\"4.8\" height=\"55.7\" fill=\"#dfe4ea\"/><rect x=\"412\" y=\"34\" width=\"4.8\" height=\"59.1\" fill=\"#b3bcc7\"/><rect x=\"420\" y=\"35.5\" width=\"4.8\" height=\"57.6\" fill=\"#dfe4ea\"/><rect x=\"428\" y=\"41.8\" width=\"4.8\" height=\"51.2\" fill=\"#b3bcc7\"/><rect x=\"138\" y=\"93\" width=\"288\" height=\"25\" fill=\"#1d2a3a\"/><rect class=\"icpl\" x=\"144\" y=\"95\" width=\"276\" height=\"22\" fill=\"#ffd27a\" opacity=\".75\"/><path d=\"M144 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M156 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M168 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M180 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M192 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M204 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M216 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M228 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M240 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M252 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M264 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M276 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M288 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M300 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M312 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M324 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M336 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M348 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M360 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M372 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M384 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M396 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><path d=\"M408 95v22\" stroke=\"#1d2a3a\" stroke-width=\"1\"/><rect x=\"346\" y=\"30\" width=\"4\" height=\"40\" fill=\"#555\"/><rect x=\"318\" y=\"20\" width=\"60\" height=\"18\" rx=\"2\" fill=\"#111\"/><text class=\"icbl\" x=\"348\" y=\"33\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"9\" fill=\"#ffcc33\">TONIGHT</text><g transform=\"translate(420 0)\"><g class=\"icdr\" style=\"--d:-260px;--t:26s;animation-delay:0s\"><g><ellipse cx=\"0\" cy=\"12\" rx=\"22\" ry=\"7\" fill=\"#c8ccd2\"/><path d=\"M-20 12l-6-5v10z\" fill=\"#a8adb4\"/><rect x=\"-4\" y=\"18\" width=\"10\" height=\"3\" rx=\"1\" fill=\"#555\"/></g></g></g></g>";
  window.SCENES = { train, coliseum, dragon, beach, corner };
})();
