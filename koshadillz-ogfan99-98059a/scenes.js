/* Perth Amboy, NJ opening scenes for the Kosha Dillz game (NJ Transit station, Outerbridge Crossing, Proprietary House,
   Raritan Bay waterfront). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0% 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes sail{from{transform:translateX(-90px)}to{transform:translateX(470px)}}' +
    '.sail{animation:sail 16s linear infinite}.sail2{animation-delay:-8s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes carR{from{transform:translateX(-90px)}to{transform:translateX(420px)}}' +
    '.carR{animation:carR 7s linear infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.wave{animation:wave 3s ease-in-out infinite}.wave2{animation-delay:-1.5s}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}' +
    '.gull{animation:gull 11s linear infinite}.gull2{animation-delay:-5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob 1.4s ease-in-out infinite}' +
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
  const GREEN = "#8bc34a", BLUE = "#3d7bf2", GOLD = "#f5c542";
  const pickle = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><ellipse cx="0" cy="0" rx="8" ry="20" fill="#6a9a2c" stroke="#2f4a12" stroke-width="2"/><circle cx="-3" cy="-8" r="1.6" fill="#a6cf5a"/><circle cx="3" cy="2" r="1.6" fill="#a6cf5a"/><circle cx="-2" cy="10" r="1.6" fill="#a6cf5a"/></g>';

  /* 1. Perth Amboy (NJ Transit, North Jersey Coast Line): the raised platform by the 1927 Renaissance Revival brick station house,
        a silver train with its stripes pulling in */
  function train() {
    let windows = "";
    for (let x = 22; x < 280; x += 42) windows += '<rect x="' + x + '" y="112" width="26" height="20" rx="3" fill="#dbe7f3" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      /* station house behind the platform: buff brick, arched windows, red tile hip roof */
      '<path d="M60 52h280l-20-22H80z" fill="#a8432e"/><rect x="70" y="52" width="260" height="56" fill="#c99a6a"/>' +
      (function () { let s = ""; for (let x = 86; x < 320; x += 34) s += '<path d="M' + x + ' 100v-28a8 8 0 0 1 16 0v28z" fill="#2b3a46"/>'; return s; })() +
      '<rect x="70" y="52" width="260" height="4" fill="#e7d6b8"/>' +
      /* station sign */
      '<rect x="44" y="6" width="312" height="22" rx="3" fill="#111"/>' +
      '<text x="56" y="22" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Perth Amboy</text>' +
      badge(170, 17, 44, "NJT", "#0039a6") +
      '<text x="222" y="21" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">NORTH JERSEY COAST LINE</text>' +
      '<g class="anim-train">' +
        '<rect x="6" y="100" width="300" height="56" rx="6" fill="#cfd5dc" stroke="#6b7280" stroke-width="2"/>' + windows +
        '<rect x="6" y="138" width="300" height="4" fill="#f58025"/><rect x="6" y="142" width="300" height="4" fill="#a3238e"/><rect x="6" y="146" width="300" height="4" fill="#0039a6"/>' +
        '<rect x="284" y="112" width="16" height="20" rx="3" fill="#dbe7f3" opacity=".9"/><circle cx="300" cy="150" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge and the embankment wall below */
      '<rect x="0" y="156" width="400" height="8" fill="#eab308"/><rect x="0" y="164" width="400" height="16" fill="#9c968a"/>' +
      '<rect x="0" y="180" width="400" height="50" fill="#8a5a44"/>' +
      (function () { let s = ""; for (let y = 186; y < 230; y += 8) s += '<path d="M0 ' + y + 'h400" stroke="#74483a" stroke-width="1"/>'; return s; })() +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3d44"/><path d="M0 246h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      tag("KOSHA", 24, 222, 30, GREEN, -5) + tag("DILLZ", 270, 220, 30, GOLD, -4),
      sky("gs", "#7fb2e0", "#d6e7f5"));
  }

  /* 2. The Outerbridge Crossing: the steel cantilever truss over the Arthur Kill to Staten Island, cars crossing, a tug below */
  function bridge() {
    let truss = "";
    for (let x = 0; x < 400; x += 20) truss += '<path d="M' + x + ' 128l10-' + (x >= 160 && x < 240 ? 40 : 24) + 'M' + (x + 20) + ' 128l-10-' + (x >= 160 && x < 240 ? 40 : 24) + '" stroke="#5f6f7c" stroke-width="2.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' +
      '<circle cx="320" cy="60" r="24" fill="#ffd27a" opacity=".9"/>' +
      '<g class="gull"><path d="M30 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* top chord: higher over the main span */
      '<path d="M0 104h120l40-16h80l40 16h120" stroke="#5f6f7c" stroke-width="6" fill="none"/>' + truss +
      /* deck */
      '<rect x="0" y="126" width="400" height="10" fill="#4b5862"/>' +
      '<g class="car"><rect x="0" y="118" width="30" height="9" rx="3" fill="#c0392b"/></g>' +
      '<g class="carR"><rect x="0" y="118" width="26" height="9" rx="3" fill="' + BLUE + '"/></g>' +
      /* piers */
      '<rect x="112" y="136" width="16" height="70" fill="#8e8a80"/><rect x="272" y="136" width="16" height="70" fill="#8e8a80"/>' +
      /* shores */
      '<path d="M0 190q30-10 60-6v22H0z" fill="#4d6b3c"/><path d="M340 192q30-10 60-6v20h-60z" fill="#4d6b3c"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3d6f8f"/>' +
      (function () { let s = ""; for (let i = 0; i < 6; i++) s += '<path class="wave' + (i % 2 ? " wave2" : "") + '" d="M' + (i * 70) + ' ' + (214 + (i % 3) * 14) + 'q15-5 30 0" stroke="#a9d3ec" stroke-width="2" fill="none" opacity=".6"/>'; return s; })() +
      '<g class="sail"><path d="M0 214h44l-6 10H6z" fill="#c0392b"/><rect x="12" y="202" width="16" height="12" fill="#f2f2f2"/><rect x="18" y="194" width="4" height="8" fill="#333"/></g>' +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e5e7eb" letter-spacing="2">OUTERBRIDGE CROSSING, ARTHUR KILL</text>',
      sky("gb", "#f4a261", "#fde4c3"));
  }

  /* 3. The Proprietary House: the 1760s red-brick Georgian governor's mansion on Kearny Ave, white trim, hip roof and chimneys */
  function proprietary() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) { if (r === 2 && c === 3) continue; const x = 92 + c * 32, y = 88 + r * 40; win += '<rect x="' + x + '" y="' + y + '" width="16" height="24" fill="#2b3a46" stroke="#f4f1ea" stroke-width="3"/><path d="M' + x + ' ' + (y + 12) + 'h16M' + (x + 8) + ' ' + y + 'v24" stroke="#f4f1ea" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#gp)"/>' +
      '<circle cx="30" cy="190" r="34" fill="#4f7d3f"/><circle cx="374" cy="186" r="36" fill="#4f7d3f"/>' +
      /* hip roof and chimneys */
      '<path d="M70 76l30-32h200l30 32z" fill="#4a4a50"/><rect x="118" y="26" width="14" height="22" fill="#8a3a2a"/><rect x="268" y="26" width="14" height="22" fill="#8a3a2a"/>' +
      /* body */
      '<rect x="76" y="74" width="248" height="134" fill="#9c3d2c"/>' +
      (function () { let s = ""; for (let y = 80; y < 208; y += 6) s += '<path d="M76 ' + y + 'h248" stroke="#87331f" stroke-width=".8"/>'; return s; })() +
      '<rect x="72" y="72" width="256" height="6" fill="#f4f1ea"/>' + win +
      /* doorway */
      '<rect x="186" y="166" width="28" height="42" fill="#2b2b2b"/><path d="M180 166h40l-20-14z" fill="#f4f1ea"/><path d="M182 208v-42M218 208v-42" stroke="#f4f1ea" stroke-width="3"/>' +
      '<circle cx="174" cy="176" r="4" fill="#ffe08a" class="flk"/><circle cx="226" cy="176" r="4" fill="#ffe08a" class="flk"/>' +
      /* flag */
      '<rect x="340" y="40" width="3" height="168" fill="#d0d4da"/>' +
      '<g class="flag"><rect x="343" y="42" width="24" height="15" fill="#b22234"/><rect x="343" y="45" width="24" height="2" fill="#fff"/><rect x="343" y="50" width="24" height="2" fill="#fff"/><rect x="343" y="42" width="10" height="8" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="208" width="400" height="20" fill="#5f8f4a"/><rect x="0" y="228" width="400" height="32" fill="#c9c2b4"/><path d="M186 208h28l10 20h-48z" fill="#b8ae9a"/>' +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#3a3d44" letter-spacing="2">PROPRIETARY HOUSE, 1764</text>',
      sky("gp", "#8ec5ee", "#e3f0fa"));
  }

  /* 4. Raritan Bay waterfront: the promenade railing and gazebo over the bay at sunset, sailboats, and a pickle cart */
  function bay() {
    return svg(
      '<rect width="400" height="260" fill="url(#gw)"/>' +
      '<circle cx="290" cy="120" r="34" fill="#ffcf7a" opacity=".9"/>' +
      '<path d="M0 126q80-8 160-2t240-4v8H0z" fill="#4a5a6a"/>' +
      '<rect x="0" y="128" width="400" height="62" fill="#2f6687"/>' +
      (function () { let s = ""; for (let i = 0; i < 6; i++) s += '<path class="wave' + (i % 2 ? " wave2" : "") + '" d="M' + (i * 70 + 10) + ' ' + (140 + (i % 3) * 14) + 'q15-5 30 0" stroke="#bfe0f2" stroke-width="2" fill="none" opacity=".6"/>'; return s; })() +
      '<g class="sail"><path d="M40 160h36l-4 6H44z" fill="#fff"/><path d="M58 158v-34l16 32z" fill="#f2f2f2"/><path d="M56 158v-26l-12 24z" fill="' + BLUE + '"/></g>' +
      '<g class="sail sail2"><path d="M40 150h30l-4 5H44z" fill="#fff"/><path d="M55 148v-26l12 24z" fill="#f2f2f2"/></g>' +
      '<g class="gull gull2"><path d="M30 60q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* gazebo */
      '<path d="M60 106l34-24 34 24z" fill="#f4f1ea" stroke="#9a948a" stroke-width="1.5"/><rect x="64" y="106" width="60" height="4" fill="#f4f1ea"/>' +
      '<path d="M68 110v52M84 110v52M104 110v52M120 110v52" stroke="#f4f1ea" stroke-width="4"/><rect x="60" y="160" width="68" height="6" fill="#d9d2c2"/>' +
      /* promenade */
      '<rect x="0" y="190" width="400" height="70" fill="#b9a98c"/><path d="M0 190h400" stroke="#2f3b2f" stroke-width="4"/>' +
      (function () { let s = ""; for (let x = 4; x < 400; x += 14) s += '<path d="M' + x + ' 190v-16" stroke="#2f3b2f" stroke-width="2"/>'; return s; })() + '<path d="M0 174h400" stroke="#2f3b2f" stroke-width="3"/>' +
      /* the pickle cart */
      '<g class="bob"><rect x="250" y="196" width="90" height="40" rx="4" fill="' + GREEN + '" stroke="#2f4a12" stroke-width="2"/><path d="M244 196l10-22h78l10 22z" fill="#fff" stroke="#2f4a12" stroke-width="2"/>' +
      '<path d="M254 196l8-22M274 196l4-22M294 196v-22M314 196l-4-22M334 196l-8-22" stroke="' + GREEN + '" stroke-width="4"/>' +
      '<text x="295" y="222" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="#1f3a0c" letter-spacing="2">PICKLES</text></g>' +
      '<circle cx="262" cy="244" r="8" fill="#333"/><circle cx="328" cy="244" r="8" fill="#333"/>' +
      '<text x="10" y="252" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#3a3d44" letter-spacing="2">RARITAN BAY WATERFRONT</text>',
      sky("gw", "#e76f51", "#f9c88b"));
  }

  /* 5. Smith Street and State Street: green street signs, a wall tagged up */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#4a5568"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 14) s += '<path d="M20 ' + y + 'h380" stroke="#3b4556" stroke-width="1"/>'; return s; })() +
      tag("KOSHA DILLZ", 110, 156, 36, GREEN, -5) +
      tag("EVERYWHERE", 200, 198, 22, GOLD, -3) +
      tag("KD FLOW", 170, 108, 18, BLUE, -4) +
      pickle(372, 140, 1.1) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="4" y="22" width="114" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Smith St</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">State St</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + BLUE + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#9fd0f5"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#cbd5e0" letter-spacing="2">PERTH AMBOY, NEW JERSEY</text>',
      sky("gk", "#141a33", "#3a4a78"));
  }

  window.SCENES = { train, bridge, proprietary, bay, corner };
})();
