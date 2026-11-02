/* Flatbush opening scenes for the Flatbush Zombies game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-160px)}to{transform:translateX(460px)}}' +
    '.fog{animation:drift 16s linear infinite}.fog2{animation-duration:23s;animation-delay:-9s}' +
    '@keyframes sway{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}' +
    '.bel{transform-box:fill-box;transform-origin:50% 0;animation:sway 1.8s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.9}}' +
    '.glw{animation:glow 2.8s ease-in-out infinite}.glw2{animation-delay:1.4s}' +
    '@keyframes row{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}' +
    '.boat{animation:row 12s ease-in-out infinite}' +
    '@keyframes rip{0%,100%{transform:scaleX(1);opacity:.5}50%{transform:scaleX(1.3);opacity:.15}}' +
    '.rip{transform-box:fill-box;transform-origin:50% 50%;animation:rip 3s ease-in-out infinite}' +
    '@keyframes spin{to{transform:rotate(360deg)}}' +
    '@keyframes bat{0%{transform:translate(-40px,30px)}100%{transform:translate(440px,-20px)}}' +
    '.bat{animation:bat 9s linear infinite}.bat2{animation-delay:-4s;animation-duration:12s}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drip 2.4s ease-in infinite}.drp2{animation-delay:.9s}.drp3{animation-delay:1.7s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const moon = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 10) + '" fill="#c8ff8a" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#f1ffd8"/>' +
    '<circle cx="' + (x - r / 3) + '" cy="' + (y - r / 4) + '" r="' + (r / 5) + '" fill="#d5e8b8"/><circle cx="' + (x + r / 3) + '" cy="' + (y + r / 3) + '" r="' + (r / 6) + '" fill="#d5e8b8"/>';
  const batShape = (cls) => '<g class="' + cls + '"><path d="M0 0q6-6 10 0q4-4 6 0q2-4 6 0q4-6 10 0q-6 0-10 4q-3-2-6 0q-3-2-6 0q-4-4-10-4z" fill="#0b0614"/></g>';
  const SLIME = "#9dff3c", PURP = "#b46bff", PINK = "#ff4f8b";

  /* 1. Newkirk Plaza (B/Q) from the far end of the open cut: the Newkirk Av span overhead with the plaza shops on it, the B rolling in through green fog, a 3001 poster on the cut wall */
  function train() {
    let shops = "";
    for (let x = 30; x < 370; x += 56) shops += '<rect x="' + x + '" y="22" width="48" height="26" fill="#2a1f3a"/><rect class="flk' + (x % 112 ? " flk2" : "") + '" x="' + (x + 6) + '" y="28" width="36" height="14" fill="' + (x % 112 ? "#ffd58a" : "#c9a6ff") + '" opacity=".6"/>';
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="150" width="30" height="20" rx="3" fill="#e7ffd0" opacity=".85"/>';
    let bricks = "";
    for (let y = 104; y < 196; y += 10) bricks += '<path d="M0 ' + y + 'h400" stroke="#4e4a58" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zt)"/>' + stars(12) + moon(360, 14, 8) +
      /* the plaza span across the cut */
      '<rect x="0" y="48" width="400" height="44" fill="#4a4458"/><rect x="0" y="48" width="400" height="5" fill="#6c6680"/>' + shops +
      '<rect x="0" y="86" width="400" height="6" fill="#2a2536"/>' +
      '<rect x="128" y="56" width="144" height="22" rx="3" fill="#111"/><rect x="128" y="56" width="144" height="3" fill="#fff"/>' +
      '<text x="136" y="73" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12.5" fill="#fff">Newkirk Plaza</text>' +
      '<circle cx="238" cy="68" r="8" fill="#ff6319"/><text x="238" y="72" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">B</text>' +
      '<circle cx="258" cy="68" r="8" fill="#fccc0a"/><text x="258" y="72" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#000">Q</text>' +
      /* cut wall */
      '<rect x="0" y="92" width="400" height="104" fill="#3a3746"/>' + bricks +
      '<g transform="rotate(-3 354 118)"><rect x="318" y="98" width="76" height="40" fill="#140c22" stroke="' + SLIME + '" stroke-width="2"/>' +
      '<text x="356" y="116" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + SLIME + '">3001</text>' +
      '<text x="356" y="126" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="6.5" fill="' + PURP + '">A LACED ODYSSEY</text>' +
      '<text x="356" y="134" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="6" fill="#d8d0ea">FLATBUSH ZOMBiES</text></g>' +
      tag("ZOMBiES", 14, 128, 26, SLIME, -5) +
      /* the B slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="140" width="300" height="56" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="176" width="300" height="5" fill="#ff6319"/>' + windows +
        '<circle cx="300" cy="186" r="4" fill="#fff6c2"/>' + bullet(286, 160, "B", "#ff6319") +
      '</g>' +
      '<g class="fog"><ellipse cx="60" cy="196" rx="150" ry="12" fill="#c8ff8a" opacity=".2"/></g>' +
      '<rect x="0" y="196" width="400" height="10" fill="#eab308"/><rect x="0" y="206" width="400" height="54" fill="#1a1524"/>' +
      tag("GLORIOUS DEAD", 30, 244, 24, PURP, -4) + tag("3001", 300, 246, 26, PINK, -7),
      sky("zt", "#120a24", "#3a2a5c"));
  }

  /* 2. Holy Cross Cemetery, East Flatbush (1849): the stone gate, mausoleums and crosses in green fog, bats over the moon */
  function church() {
    let stones = "";
    [[14, 208, 16, 26], [44, 214, 14, 20], [276, 210, 16, 24], [366, 212, 16, 22]].forEach(s => {
      stones += '<path d="M' + s[0] + ' ' + (s[1] + s[3]) + 'v-' + (s[3] - s[2] / 2) + 'a' + (s[2] / 2) + ' ' + (s[2] / 2) + ' 0 0 1 ' + s[2] + ' 0v' + (s[3] - s[2] / 2) + 'z" fill="#5d6470" stroke="#3a3f48" stroke-width="1.5"/>';
    });
    const cross = (x, y, s) => '<path d="M' + x + ' ' + y + 'v' + (s * 3) + 'M' + (x - s) + ' ' + (y + s) + 'h' + (s * 2) + '" stroke="#8a909a" stroke-width="' + (s / 2.2) + '"/>';
    const mauso = (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -' + (h / 3) + ' ' + (w / 2 + 4) + ' ' + (h / 3) + 'z" fill="' + c + '" stroke="#3a3f48"/>' +
      '<rect x="' + (x + 3) + '" y="' + y + '" width="4" height="' + h + '" fill="#9aa0a8"/><rect x="' + (x + w - 7) + '" y="' + y + '" width="4" height="' + h + '" fill="#9aa0a8"/><rect x="' + (x + w / 2 - 7) + '" y="' + (y + h / 3) + '" width="14" height="' + (h * 2 / 3) + '" fill="#1e1a26"/>';
    let fence = "";
    for (let x = 4; x < 400; x += 12) if (x < 150 || x > 250) fence += '<rect x="' + x + '" y="214" width="3" height="40" fill="#0c0a12"/><path d="M' + (x - 2) + ' 216l3.5-8 3.5 8z" fill="#0c0a12"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zc)"/>' + stars(22) + moon(330, 50, 24) +
      batShape("bat") + batShape("bat bat2") +
      '<path d="M0 170q100 -14 200 0t200 0v90H0z" fill="#141a12"/>' +
      mauso(30, 150, 50, 42, "#7a7f88") + mauso(310, 146, 56, 46, "#6c7078") +
      cross(108, 150, 8) + cross(286, 154, 7) + cross(96, 176, 6) + stones +
      /* the gate: two stone piers with crosses, iron gates swinging open, the arch sign */
      '<rect x="146" y="120" width="22" height="134" fill="#a8a196"/><rect x="232" y="120" width="22" height="134" fill="#a8a196"/>' +
      '<rect x="142" y="114" width="30" height="8" fill="#c2bbae"/><rect x="228" y="114" width="30" height="8" fill="#c2bbae"/>' +
      cross(157, 92, 7) + cross(243, 92, 7) +
      '<path d="M168 130q32 -30 64 0" stroke="#0c0a12" stroke-width="4" fill="none"/>' +
      '<rect x="154" y="96" width="92" height="16" rx="2" fill="#0c0a12"/>' +
      '<text x="200" y="107" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#e6e2d6">HOLY CROSS · 1849</text>' +
      '<g class="bel" style="animation-duration:5s;transform-origin:0 50%"><path d="M168 140h28v114h-28z" fill="none" stroke="#0c0a12" stroke-width="3"/><path d="M175 140v114M182 140v114M189 140v114" stroke="#0c0a12" stroke-width="2"/></g>' +
      '<g class="bel" style="animation-duration:5s;animation-delay:-2.5s;transform-origin:100% 50%"><path d="M204 140h28v114h-28z" fill="none" stroke="#0c0a12" stroke-width="3"/><path d="M211 140v114M218 140v114M225 140v114" stroke="#0c0a12" stroke-width="2"/></g>' +
      fence +
      '<g class="fog"><ellipse cx="60" cy="222" rx="140" ry="14" fill="#c8ff8a" opacity=".2"/></g>' +
      '<g class="fog fog2"><ellipse cx="40" cy="240" rx="110" ry="10" fill="#e6d7ff" opacity=".2"/></g>' +
      '<rect x="8" y="8" width="110" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="63" y="21" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Tilden Av</text>' +
      tag("GLORIOUS DEAD", 120, 46, 18, SLIME, -5),
      sky("zc", "#0a0618", "#3b2a5e"));
  }

  /* 3. Prospect Park Boathouse: white terracotta arcade on the Lullwater, mist on the water, a rowboat drifting */
  function boathouse() {
    let arches = "";
    for (let i = 0; i < 5; i++) { const x = 124 + i * 32; arches += '<path d="M' + x + ' 170v-24a12 12 0 0 1 24 0v24z" fill="#2b2140"/><path class="glw' + (i % 2 ? " glw2" : "") + '" d="M' + (x + 3) + ' 170v-22a9 9 0 0 1 18 0v22z" fill="#ffd58a" opacity=".5"/>'; }
    let cols = "";
    for (let i = 0; i < 11; i++) cols += '<rect x="' + (122 + i * 15.6) + '" y="102" width="5" height="30" fill="#fbf7ec"/>';
    let balus = "";
    for (let x = 112; x < 290; x += 7) balus += '<rect x="' + x + '" y="88" width="3" height="10" fill="#fbf7ec"/>';
    let trees = "";
    [[20, 130, 48], [70, 140, 36], [330, 132, 46], [382, 142, 34]].forEach(t => trees += '<ellipse cx="' + t[0] + '" cy="' + t[1] + '" rx="' + t[2] + '" ry="' + (t[2] * 0.9) + '" fill="#16261d"/>');
    let refl = "";
    for (let y = 186; y < 250; y += 8) refl += '<rect x="' + (112 + (y % 16)) + '" y="' + y + '" width="' + (176 - (y - 186) * 1.2) + '" height="3" fill="#fbf7ec" opacity="' + (0.32 - (y - 186) / 260) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zb)"/>' + stars(18) + moon(64, 46, 18) +
      trees +
      /* boathouse: two storeys, end pavilions, arcade below, columned loggia above, balustrade on top */
      '<rect x="104" y="96" width="192" height="80" fill="#efe8d6"/>' +
      '<rect x="104" y="96" width="14" height="80" fill="#e3dac4"/><rect x="282" y="96" width="14" height="80" fill="#e3dac4"/>' +
      '<rect x="118" y="100" width="164" height="34" fill="#2b2140"/>' + cols +
      '<rect x="102" y="132" width="196" height="6" fill="#fbf7ec"/>' + arches +
      '<rect x="100" y="84" width="200" height="4" fill="#fbf7ec"/>' + balus + '<rect x="100" y="96" width="200" height="4" fill="#fbf7ec"/>' +
      /* lamp posts */
      '<rect x="90" y="140" width="3" height="36" fill="#0f0c18"/><circle class="flk" cx="91.5" cy="138" r="4" fill="#fff1b8"/>' +
      '<rect x="307" y="140" width="3" height="36" fill="#0f0c18"/><circle class="flk flk2" cx="308.5" cy="138" r="4" fill="#fff1b8"/>' +
      /* the water */
      '<rect x="0" y="176" width="400" height="84" fill="#1a1238"/>' + refl +
      '<ellipse class="rip" cx="200" cy="214" rx="60" ry="2" fill="#c8ff8a"/>' +
      '<g class="boat"><path d="M60 226h56l-8 10H68z" fill="#5a3a24"/><path d="M68 228l-16 8M108 228l16 8" stroke="#c9a46a" stroke-width="2.5" stroke-linecap="round"/></g>' +
      '<g class="fog"><ellipse cx="60" cy="182" rx="130" ry="10" fill="#e6d7ff" opacity=".2"/></g>' +
      '<g class="fog fog2"><ellipse cx="40" cy="198" rx="100" ry="8" fill="#c8ff8a" opacity=".14"/></g>' +
      tag("BETTER OFF DEAD", 150, 250, 20, PURP, -3),
      sky("zb", "#0b0720", "#40306a"));
  }

  /* 4. Flatbush Town Hall on Snyder Av (1875): red-brick Victorian Gothic, stone bands, the tall pointed tower, a full moon behind it */
  function college() {
    let bands = "";
    for (let y = 126; y < 206; y += 20) bands += '<rect x="96" y="' + y + '" width="208" height="3" fill="#e6d6b4"/>';
    let wins = "";
    [112, 140, 256, 284].forEach(x => [134, 172].forEach(y => wins += '<path d="M' + x + ' ' + (y + 26) + 'v-18l7 -9 7 9v18z" fill="' + ((x + y) % 3 ? "#2b2140" : "#ffd58a") + '" stroke="#e6d6b4" stroke-width="2"/>'));
    return svg(
      '<rect width="400" height="260" fill="url(#zk)"/>' + stars(24) + moon(300, 60, 26) +
      batShape("bat bat2") +
      /* main block with steep slate roof and gables */
      '<path d="M90 120l20 -26h180l20 26z" fill="#3a3448"/>' +
      '<path d="M100 120l26 -40 26 40zM248 120l26 -40 26 40z" fill="#9a3b2a" stroke="#e6d6b4" stroke-width="2"/>' +
      '<rect x="96" y="120" width="208" height="88" fill="#9a3b2a"/>' + bands + wins +
      /* center tower */
      '<rect x="176" y="70" width="48" height="138" fill="#a8473a"/><rect x="176" y="100" width="48" height="3" fill="#e6d6b4"/><rect x="176" y="150" width="48" height="3" fill="#e6d6b4"/>' +
      '<path d="M172 70l28 -52 28 52z" fill="#3a3448"/><path d="M200 18v-10" stroke="#e0a52c" stroke-width="2"/>' +
      '<g class="bel" style="transform-origin:0 50%"><path d="M200 8l12 3-12 3z" fill="#e0a52c"/></g>' +
      '<circle cx="200" cy="86" r="9" fill="#fbf7ec" stroke="#e6d6b4" stroke-width="2"/><path d="M200 86v-6M200 86h4" stroke="#1e1a26" stroke-width="1.5"/>' +
      '<path d="M190 130v-14a10 10 0 0 1 20 0v14z" fill="#ffd58a" class="glw"/>' +
      '<path d="M188 208v-36a12 12 0 0 1 24 0v36z" fill="#3a2a1e" stroke="#e6d6b4" stroke-width="2"/>' +
      '<rect x="166" y="208" width="68" height="6" fill="#bfb4a0"/>' +
      '<text x="200" y="146" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#fbf7ec">TOWN HALL</text>' +
      /* sidewalk, iron fence, fog */
      '<rect x="0" y="214" width="400" height="46" fill="#1a1524"/>' +
      (function () { let f = ""; for (let x = 4; x < 400; x += 10) if (x < 160 || x > 240) f += '<rect x="' + x + '" y="206" width="2.5" height="18" fill="#0c0a12"/>'; return f; })() +
      '<g class="fog"><ellipse cx="60" cy="214" rx="140" ry="10" fill="#c8ff8a" opacity=".16"/></g>' +
      '<rect x="8" y="8" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="56" y="21" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Snyder Av</text>' +
      tag("FLATBUSH TOWN HALL", 18, 246, 20, SLIME, -3) + tag("1875", 320, 246, 20, PURP, -5),
      sky("zk", "#140a2e", "#7a3a8a"));
  }

  /* 5. Cortelyou Rd and Flatbush Av: the green signs, a dripping tag wall, the B41 rolling by */
  function corner() {
    let blocks = "";
    for (let y = 70; y < 220; y += 16) for (let x = (y / 16) % 2 ? 6 : 20; x < 232; x += 28) blocks += '<rect x="' + x + '" y="' + y + '" width="26" height="14" fill="#2c2a36"/>';
    const drip = (x, y, cls) => '<rect x="' + (x - 1.5) + '" y="' + y + '" width="3" height="10" fill="' + SLIME + '"/><circle class="drp ' + cls + '" cx="' + x + '" cy="' + (y + 12) + '" r="2.4" fill="' + SLIME + '"/>';
    return svg(
      '<style>@keyframes bus{from{transform:translateX(420px)}to{transform:translateX(-140px)}}.bus{animation:bus 8s linear infinite}</style>' +
      '<rect width="400" height="260" fill="url(#zn)"/>' + stars(16) + moon(360, 34, 14) +
      /* wall with the tag */
      '<rect x="6" y="70" width="244" height="150" fill="#3a3746"/>' + blocks +
      tag("FLATBUSH", 18, 128, 30, SLIME, -6) + tag("ZOMBiES", 40, 172, 36, SLIME, -6) +
      drip(70, 176, "") + drip(122, 170, "drp2") + drip(176, 164, "drp3") +
      tag("GLORIOUS DEAD", 30, 210, 18, PURP, -2) +
      /* streetlight with flicker */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#e2ffc0"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#e2ffc0"/></g>' +
      /* street signs */
      '<rect x="254" y="88" width="98" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Cortelyou Rd</text>' +
      '<rect x="258" y="110" width="90" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Flatbush Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14111c"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="bus"><rect x="0" y="206" width="110" height="30" rx="4" fill="#e6e8ec"/><rect x="0" y="224" width="110" height="4" fill="#0039a6"/>' +
      '<rect x="6" y="210" width="98" height="10" fill="#2a3a52"/><rect x="4" y="210" width="24" height="7" fill="#111"/><text x="16" y="216.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="6" fill="#ffb21f">B41</text>' +
      '<circle cx="20" cy="238" r="5" fill="#111"/><circle cx="90" cy="238" r="5" fill="#111"/></g>',
      sky("zn", "#0a0618", "#2e1f4a"));
  }

  window.SCENES = { train, church, boathouse, college, corner };
})();
