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

  /* 1. The Q pulling into Newkirk Plaza, down in the open cut under the plaza shops */
  function train() {
    let shops = "";
    for (let x = 0; x < 400; x += 50) shops += '<rect x="' + (x + 4) + '" y="20" width="42" height="30" fill="#2a1f3a"/><rect x="' + (x + 10) + '" y="28" width="30" height="16" fill="' + (x % 100 ? "#ffd58a" : "#c9a6ff") + '" opacity=".55"/>';
    let rail = "";
    for (let x = 0; x <= 400; x += 10) rail += '<rect x="' + x + '" y="54" width="2" height="12" fill="#c6c9cf"/>';
    let canopy = "";
    for (let x = 20; x < 400; x += 80) canopy += '<rect x="' + (x - 2) + '" y="104" width="4" height="76" fill="#3b3550"/>';
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#e7ffd0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zt)"/>' + stars(10) +
      /* the plaza above: storefronts and the railing over the cut */
      shops + '<rect x="0" y="50" width="400" height="5" fill="#57506a"/>' + rail + '<rect x="0" y="64" width="400" height="3" fill="#c6c9cf"/>' +
      /* concrete retaining wall of the cut */
      '<rect x="0" y="67" width="400" height="113" fill="#6c6a72"/>' +
      '<path d="M0 82h400M0 98h400" stroke="#5a5860" stroke-width="2"/>' +
      /* platform canopy */
      '<rect x="0" y="100" width="400" height="6" fill="#3b3550"/>' + canopy +
      /* station sign */
      '<rect x="74" y="68" width="252" height="30" rx="4" fill="#111"/>' +
      '<rect x="74" y="68" width="252" height="3" fill="#fff"/>' +
      '<text x="86" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Newkirk Plaza</text>' +
      bullet(278, 84, "B", "#ff6319") + bullet(304, 84, "Q", "#fccc0a", true) +
      /* the Q slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(286, 140, "Q", "#fccc0a", true) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1524"/>' +
      tag("ZOMBiES", 22, 240, 32, SLIME, -5) + tag("3001", 290, 240, 32, PURP, -8),
      sky("zt", "#120a24", "#3a2a5c"));
  }

  /* 2. Flatbush Reformed Dutch Church (1798): brown stone, white tiered steeple, the old graveyard in the fog */
  function church() {
    let stones = "";
    [[18, 206, 18, 30], [52, 212, 16, 24], [84, 204, 20, 32], [300, 208, 18, 28], [334, 202, 20, 34], [368, 210, 16, 24]].forEach(s => {
      stones += '<path d="M' + s[0] + ' ' + (s[1] + s[3]) + 'v-' + (s[3] - s[2] / 2) + 'a' + (s[2] / 2) + ' ' + (s[2] / 2) + ' 0 0 1 ' + s[2] + ' 0v' + (s[3] - s[2] / 2) + 'z" fill="#5d6470" stroke="#3a3f48" stroke-width="1.5"/>';
    });
    let fence = "";
    for (let x = 4; x < 400; x += 14) fence += '<rect x="' + x + '" y="226" width="3" height="30" fill="#0c0a12"/><path d="M' + (x - 2) + ' 228l3.5-8 3.5 8z" fill="#0c0a12"/>';
    let quoins = "";
    for (let y = 120; y < 236; y += 14) quoins += '<rect x="130" y="' + y + '" width="10" height="7" fill="#b9ab92"/><rect x="260" y="' + y + '" width="10" height="7" fill="#b9ab92"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zc)"/>' + stars(22) + moon(330, 50, 24) +
      batShape("bat") + batShape("bat bat2") +
      /* stone body */
      '<path d="M128 118l72-26 72 26z" fill="#2b2433"/>' +
      '<rect x="130" y="118" width="140" height="118" fill="#7a6a58"/>' + quoins +
      '<path d="M150 226v-56a12 12 0 0 1 24 0v56zM226 226v-56a12 12 0 0 1 24 0v56z" fill="#1e1a26"/>' +
      '<path class="glw" d="M154 226v-54a8 8 0 0 1 16 0v54zM230 226v-54a8 8 0 0 1 16 0v54z" fill="#c8ff8a" opacity=".5"/>' +
      '<path d="M188 236v-34a12 12 0 0 1 24 0v34z" fill="#3a2a1e"/>' +
      /* white steeple: square base, clock, belfry, octagon, spire */
      '<rect x="178" y="70" width="44" height="48" fill="#f2efe6" stroke="#c9c3b6"/>' +
      '<circle cx="200" cy="92" r="11" fill="#1e1a26" stroke="#c9c3b6" stroke-width="2"/><path d="M200 92v-7M200 92h5" stroke="#f2efe6" stroke-width="1.6"/>' +
      '<rect x="182" y="40" width="36" height="30" fill="#f2efe6" stroke="#c9c3b6"/><path d="M190 68V50a10 10 0 0 1 20 0v18z" fill="#1e1a26"/>' +
      '<g class="bel"><path d="M200 50l-6 12h12z" fill="#e0a52c"/><circle cx="200" cy="63" r="1.8" fill="#e0a52c"/></g>' +
      '<rect x="176" y="68" width="48" height="4" fill="#e3ddcf"/><rect x="180" y="38" width="40" height="4" fill="#e3ddcf"/>' +
      '<path d="M186 38l4-14h20l4 14z" fill="#f2efe6" stroke="#c9c3b6"/>' +
      '<path d="M193 24l7-14 7 14z" fill="#f2efe6" stroke="#c9c3b6"/><path d="M200 10v-6" stroke="#e0a52c" stroke-width="2"/>' +
      /* graveyard */
      '<rect x="0" y="232" width="400" height="28" fill="#141a12"/>' + stones +
      '<g class="fog"><ellipse cx="60" cy="226" rx="110" ry="12" fill="#c8ff8a" opacity=".16"/></g>' +
      '<g class="fog fog2"><ellipse cx="40" cy="236" rx="90" ry="9" fill="#e6d7ff" opacity=".18"/></g>' +
      fence +
      tag("GLORIOUS DEAD", 10, 44, 18, SLIME, -5),
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

  /* 4. Brooklyn College: red-brick Georgian library, white clock tower, the quad under a laced purple sky */
  function college() {
    let wins = "";
    for (let x = 20; x < 400; x += 30) { if (x > 150 && x < 250) continue; wins += '<rect x="' + x + '" y="150" width="14" height="22" fill="#fbf7ec"/><rect x="' + (x + 2) + '" y="152" width="10" height="18" fill="' + (x % 60 ? "#ffd58a" : "#2b2140") + '" opacity=".85"/>'; }
    let cols = "";
    for (let i = 0; i < 4; i++) cols += '<rect x="' + (166 + i * 20) + '" y="132" width="6" height="56" fill="#fbf7ec"/>';
    let tower = "";
    [[176, 104, 48, 28], [182, 80, 36, 24]].forEach(t => tower += '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + t[3] + '" fill="#fbf7ec" stroke="#c9c3b6"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#zk)"/>' + stars(24) +
      batShape("bat bat2") +
      /* brick wings */
      '<rect x="0" y="136" width="400" height="64" fill="#9a3b2a"/><rect x="0" y="132" width="400" height="6" fill="#fbf7ec"/>' + wins +
      '<path d="M0 132l20-14h360l20 14z" fill="#3c4a3e"/>' +
      /* center portico with columns + pediment */
      '<path d="M152 132l48-20 48 20z" fill="#fbf7ec" stroke="#c9c3b6"/><rect x="152" y="132" width="96" height="68" fill="#a8473a"/>' + cols +
      '<rect x="190" y="164" width="20" height="36" fill="#2b1a14"/>' +
      /* clock tower */
      tower +
      '<circle cx="200" cy="118" r="10" fill="#fff" stroke="#1e1a26" stroke-width="2"/>' +
      '<g style="transform-box:view-box;transform-origin:200px 118px;animation:spin 8s linear infinite"><path d="M200 118v-8" stroke="#1e1a26" stroke-width="1.8" stroke-linecap="round"/></g>' +
      '<path d="M200 118h5" stroke="#1e1a26" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M188 92V86a12 12 0 0 1 24 0v6z" fill="#2b2140"/>' +
      '<path d="M182 80q18-30 36 0z" fill="#fbf7ec" stroke="#c9c3b6"/>' +
      '<path d="M200 52v-14" stroke="#e0a52c" stroke-width="2"/><path d="M200 40l10 3-10 3z" fill="#e0a52c"/>' +
      /* lawn + paths + trees */
      '<rect x="0" y="200" width="400" height="60" fill="#1f3a26"/><path d="M182 260l10-60h16l10 60z" fill="#cfc6b0"/>' +
      '<ellipse cx="40" cy="198" rx="34" ry="26" fill="#16261d"/><ellipse cx="362" cy="198" rx="34" ry="26" fill="#16261d"/>' +
      tag("THE ARCHITECT", 228, 250, 20, SLIME, -4),
      sky("zk", "#140a2e", "#7a3a8a"));
  }

  /* 5. Newkirk Avenue and East 16th Street: the green signs, a dripping tag wall */
  function corner() {
    let blocks = "";
    for (let y = 70; y < 220; y += 16) for (let x = (y / 16) % 2 ? 6 : 20; x < 232; x += 28) blocks += '<rect x="' + x + '" y="' + y + '" width="26" height="14" fill="#2c2a36"/>';
    const drip = (x, y, cls) => '<rect x="' + (x - 1.5) + '" y="' + y + '" width="3" height="10" fill="' + SLIME + '"/><circle class="drp ' + cls + '" cx="' + x + '" cy="' + (y + 12) + '" r="2.4" fill="' + SLIME + '"/>';
    return svg(
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
      '<rect x="258" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Newkirk Av</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 16 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14111c"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("zn", "#0a0618", "#2e1f4a"));
  }

  window.SCENES = { train, church, boathouse, college, corner };
})();
