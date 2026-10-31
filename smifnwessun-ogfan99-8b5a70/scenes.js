/* Bed-Stuy (Bucktown) opening scenes for the Smif-N-Wessun game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes swing{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}' +
    '.swg{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.8s ease-in-out infinite}.swg2{animation-delay:.6s}' +
    '@keyframes rays{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.rays{transform-origin:200px 170px;animation:rays 30s linear infinite}' +
    '@keyframes rise{0%{transform:translateY(16px)}100%{transform:translateY(0)}}' +
    '.sun{animation:rise 4s ease-out forwards}' +
    '@keyframes fly{0%{transform:translate(-60px,20px)}100%{transform:translate(460px,-30px)}}' +
    '.fly{animation:fly 8s linear infinite}.fly2{animation-delay:-3s}.fly3{animation-delay:-5.5s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.wing{transform-box:fill-box;transform-origin:50% 100%;animation:flap .4s linear infinite}' +
    '@keyframes peck{0%,60%,100%{transform:rotate(0)}70%,90%{transform:rotate(28deg)}}' +
    '.peck{transform-box:fill-box;transform-origin:80% 90%;animation:peck 1.6s infinite}.peck2{animation-delay:.7s}' +
    '@keyframes sway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}' +
    '.tree{transform-box:fill-box;transform-origin:50% 100%;animation:sway 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* woodland camo blotches inside a rect */
  const camo = (x, y, w, h, seed) => {
    const c = ["#4b5320", "#7a6a42", "#2e3320", "#9aa36a"]; let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#6b7a3a"/>';
    for (let i = 0; i < 14; i++) {
      const cx = x + ((i * 37 + seed * 13) % w), cy = y + ((i * 23 + seed * 7) % h);
      s += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (5 + (i % 4) * 2) + '" ry="' + (3 + (i % 3) * 2) + '" fill="' + c[i % 4] + '" transform="rotate(' + ((i * 40) % 180) + ' ' + cx + ' ' + cy + ')"/>';
    }
    return s;
  };
  const SAND = "#f2efe4", OLIVE = "#9aa34a", SUN = "#e0a33a";
  const pigeon = cls => '<g class="' + cls + '"><ellipse cx="0" cy="0" rx="7" ry="3.5" fill="#5a6070"/><circle cx="7" cy="-2" r="2.6" fill="#5a6070"/><path class="wing" d="M-3 -1l4-8 4 8z" fill="#7a8090"/></g>';

  /* 1. The C pulling into Kingston-Throop Avs, underground on Fulton St: white tile, butterscotch trim with mustard-brown border, no columns */
  function train() {
    let tiles = "";
    for (let y = 22; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6d1c2" stroke-width=".7"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 22v96" stroke="#d6d1c2" stroke-width=".5"/>';
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#111316"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#0b0c0f"/>' +
      '<rect class="flk" x="40" y="9" width="110" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="250" y="9" width="110" height="4" rx="2" fill="#fff6d8"/>' +
      '<rect x="0" y="16" width="400" height="104" fill="#ece6d4"/>' + tiles +
      /* butterscotch trim line with mustard-brown border */
      '<rect x="0" y="24" width="400" height="12" fill="#8a6a1e"/><rect x="0" y="26" width="400" height="8" fill="#f0b64a"/>' +
      /* the mosaic name tablet */
      '<rect x="278" y="44" width="96" height="34" fill="#f0b64a"/><rect x="282" y="48" width="88" height="26" fill="#8a6a1e"/>' +
      '<text x="326" y="59" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#f6ecd2">KINGSTON</text><text x="326" y="70" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#f6ecd2">THROOP</text>' +
      /* station sign */
      '<rect x="26" y="46" width="230" height="38" rx="4" fill="#111"/>' +
      '<rect x="26" y="46" width="230" height="4" fill="#fff"/>' +
      '<text x="38" y="74" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Kingston–Throop Avs</text>' +
      bullet(236, 68, "C", "#0039a6") +
      /* the C slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '<rect x="282" y="128" width="18" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(266, 140, "C", "#0039a6") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1c20"/>' +
      '<path d="M0 214h400M0 238h400" stroke="#25282e" stroke-width="2"/>' +
      tag("BUCKTOWN", 30, 240, 30, SUN, -5) + tag("BOOT CAMP", 220, 238, 26, OLIVE, -3));
  }

  /* 2. Fulton Park: the bronze Robert Fulton on his black granite pedestal holding the little steam ferry, trees swaying, pigeons pecking */
  function fultonpark() {
    let fence = "";
    for (let x = 0; x < 400; x += 9) fence += '<rect x="' + x + '" y="196" width="2.5" height="20" fill="#1c2a1e"/><path d="M' + (x + 1.2) + ' 192l-2.5 4h5z" fill="#1c2a1e"/>';
    const lamp = x => '<rect x="' + x + '" y="120" width="4" height="80" fill="#1c2a1e"/><circle class="flk" cx="' + (x + 2) + '" cy="116" r="7" fill="#fff1c0"/><path d="M' + (x - 5) + ' 110h14" stroke="#1c2a1e" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gp)"/>' +
      /* brownstone row far behind */
      '<rect x="0" y="70" width="400" height="90" fill="#5a3a2a"/>' +
      (function () { let s = ""; for (let x = 6; x < 400; x += 26) s += '<rect x="' + x + '" y="84" width="12" height="18" fill="#ffd88a" opacity=".55"/><rect x="' + x + '" y="112" width="12" height="18" fill="#3a2418"/>'; return s; })() +
      '<rect x="0" y="66" width="400" height="6" fill="#3a2418"/>' +
      /* trees */
      '<g class="tree"><rect x="52" y="120" width="8" height="80" fill="#3a2a1a"/><circle cx="56" cy="104" r="40" fill="#2f5a2e"/><circle cx="36" cy="120" r="22" fill="#3a6a34"/></g>' +
      '<g class="tree" style="animation-delay:-2s"><rect x="340" y="120" width="8" height="80" fill="#3a2a1a"/><circle cx="344" cy="102" r="42" fill="#2f5a2e"/><circle cx="368" cy="122" r="22" fill="#3a6a34"/></g>' +
      /* lawn + path */
      '<rect x="0" y="160" width="400" height="56" fill="#3f6b3a"/><path d="M160 216l20-56h40l20 56z" fill="#b9ac90"/>' +
      lamp(120) + lamp(276) +
      /* black granite pedestal */
      '<rect x="174" y="132" width="52" height="44" fill="#1b1d22"/><rect x="168" y="172" width="64" height="10" fill="#26292f"/><rect x="170" y="128" width="60" height="6" fill="#26292f"/>' +
      '<rect class="flk" x="178" y="136" width="4" height="36" fill="#4a4f58" opacity=".7"/>' +
      '<text x="200" y="158" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7" fill="#c9a24a" letter-spacing="1">FULTON</text>' +
      /* the bronze figure (silhouette), long coat, holding the ferry model */
      '<g fill="#5e5434">' +
        '<path d="M188 128l3-36q2-10 9-12q7 2 9 12l3 36z"/>' +
        '<circle cx="200" cy="72" r="7"/>' +
        '<path d="M206 92l14 6v6l-14-2z"/>' +
      '</g>' +
      '<path d="M190 96l4 30M209 96l-3 30" stroke="#7a6e46" stroke-width="1.5"/>' +
      /* the little steam ferry in his hand */
      '<path d="M214 100h22l-4 6h-14z" fill="#7a6e46"/><rect x="224" y="90" width="3" height="10" fill="#7a6e46"/><circle cx="222" cy="98" r="3" fill="none" stroke="#7a6e46" stroke-width="1.5"/>' +
      fence + '<path d="M0 196h400" stroke="#1c2a1e" stroke-width="2"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2c30"/>' +
      /* pigeons on the sidewalk */
      '<g transform="translate(110 232)"><g class="peck">' + '<ellipse cx="0" cy="0" rx="8" ry="4.5" fill="#6a7080"/><circle cx="8" cy="-3" r="3" fill="#6a7080"/><path d="M10 -3l3 1-3 1z" fill="#e0a33a"/>' + '</g></g>' +
      '<g transform="translate(300 236)"><g class="peck peck2">' + '<ellipse cx="0" cy="0" rx="8" ry="4.5" fill="#7a8090"/><circle cx="8" cy="-3" r="3" fill="#7a8090"/><path d="M10 -3l3 1-3 1z" fill="#e0a33a"/>' + '</g></g>',
      sky("gp", "#2a3a5a", "#e8b07a"));
  }

  /* 3. The army-navy surplus window on Fulton St: camo jackets on hangers, boots lined up, dog tags swinging, the Boot Camp banner */
  function surplus() {
    const jacket = (x, seed) =>
      '<path d="M' + (x + 20) + ' 64h4" stroke="#bbb" stroke-width="2"/><path d="M' + (x + 22) + ' 60v4" stroke="#bbb" stroke-width="2"/>' +
      '<g>' + '<clipPath id="jc' + seed + '"><path d="M' + x + ' 76l14-10h16l14 10v58h-44z"/></clipPath>' +
      '<g clip-path="url(#jc' + seed + ')">' + camo(x - 2, 64, 48, 72, seed) + '</g></g>' +
      '<path d="M' + (x + 22) + ' 68v66" stroke="#2e3320" stroke-width="1.5"/><rect x="' + (x + 6) + '" y="90" width="10" height="8" fill="none" stroke="#2e3320"/><rect x="' + (x + 28) + '" y="90" width="10" height="8" fill="none" stroke="#2e3320"/>';
    const boot = (x, c) =>
      '<path d="M' + x + ' 196v-34h16v22l18 4q6 2 6 8z" fill="' + c + '" stroke="#2a1a0e" stroke-width="2"/><path d="M' + x + ' 194h40" stroke="#2a1a0e" stroke-width="4"/>' +
      '<path d="M' + (x + 3) + ' 168h10M' + (x + 3) + ' 174h10M' + (x + 3) + ' 180h10" stroke="#e8d8a8" stroke-width="1.2"/>';
    const tagd = (x, cls) =>
      '<g class="' + cls + '"><path d="M' + x + ' 52l-6 22M' + x + ' 52l6 22" stroke="#c9ced6" stroke-width="1" stroke-dasharray="1.5 1.5"/>' +
      '<rect x="' + (x - 8) + '" y="72" width="16" height="22" rx="5" fill="#d7dbe0" stroke="#7a8088" stroke-width="1.2"/><path d="M' + (x - 4) + ' 80h8M' + (x - 4) + ' 85h8" stroke="#7a8088"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1c18"/>' +
      /* storefront brick + sign */
      '<rect x="0" y="0" width="400" height="44" fill="#4a2a1e"/>' +
      '<rect x="20" y="8" width="360" height="28" fill="#1d2414" stroke="' + OLIVE + '" stroke-width="2"/>' +
      '<text x="200" y="28" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + SAND + '" letter-spacing="3">ARMY • NAVY • SURPLUS</text>' +
      /* window glass */
      '<rect x="14" y="48" width="372" height="160" fill="#2a2e26" stroke="#0e100c" stroke-width="6"/>' +
      '<rect x="20" y="52" width="360" height="4" fill="#5a5e52"/>' +
      jacket(36, 1) + jacket(100, 2) + jacket(256, 3) + jacket(320, 4) +
      /* banner in the middle */
      '<rect x="168" y="66" width="64" height="70" fill="#1d2414" stroke="' + SUN + '" stroke-width="2"/>' +
      '<text x="200" y="94" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + SUN + '">BOOT</text><text x="200" y="114" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + SUN + '">CAMP</text>' +
      '<path d="M178 122h44" stroke="' + OLIVE + '" stroke-width="2"/>' +
      tagd(150, "swg") + tagd(248, "swg swg2") +
      /* boots lined up on the shelf */
      '<rect x="20" y="196" width="360" height="8" fill="#5a3a22"/>' +
      boot(40, "#c99a52") + boot(108, "#3a2a1a") + boot(176, "#c99a52") + boot(244, "#4b5320") + boot(312, "#c99a52") +
      /* glare */
      '<g opacity=".07"><path class="flk flk2" d="M60 52l40 0-60 152h-20z" fill="#fff"/></g>' +
      '<rect x="0" y="208" width="400" height="52" fill="#2a2c30"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>');
  }

  /* 4. Dah Shinin': sunrise over the Bucktown rooftops, the wooden water tower, cornices, pigeons flying across */
  function shinin() {
    let rays = "";
    for (let a = 0; a < 360; a += 20) rays += '<path d="M200 170l-8 -150h16z" fill="#ffd27a" opacity=".18" transform="rotate(' + a + ' 200 170)"/>';
    const row = (x, w, h, c) => '<rect x="' + x + '" y="' + (260 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x - 3) + '" y="' + (256 - h) + '" width="' + (w + 6) + '" height="6" fill="#2a1a12"/>' +
      (function () { let s = ""; for (let wx = x + 6; wx < x + w - 8; wx += 16) for (let y = 270 - h; y < 250; y += 22) s += '<rect x="' + wx + '" y="' + y + '" width="8" height="12" fill="#3a2418"/>'; return s; })();
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      '<g class="rays">' + rays + '</g>' +
      '<g class="sun"><circle cx="200" cy="170" r="46" fill="#ffcf5a"/><circle cx="200" cy="170" r="36" fill="#ffe08a"/></g>' +
      row(0, 92, 96, "#6a3a2a") + row(96, 84, 82, "#7a4632") + row(184, 100, 90, "#5e3424") + row(288, 112, 100, "#6a3a2a") +
      /* water tower on the right roof */
      '<g transform="translate(316 92)">' +
        '<path d="M6 60l4-40M42 60l-4-40M14 60l20-20M34 60l-20-20" stroke="#2a1a12" stroke-width="3"/>' +
        '<rect x="4" y="-6" width="40" height="30" fill="#8a5a36"/>' +
        '<path d="M4 2h40M4 10h40M4 18h40" stroke="#5a3a22" stroke-width="2"/>' +
        '<path d="M0 -6l24-16 24 16z" fill="#4a2e1c"/>' +
      '</g>' +
      /* pigeon coop + flag on the left roof */
      '<rect x="18" y="140" width="50" height="26" fill="#3a2a1a"/><path d="M18 146h50M18 154h50M30 140v26M44 140v26M58 140v26" stroke="#9a8a6a" stroke-width="1"/>' +
      '<rect x="74" y="110" width="2" height="56" fill="#2a1a12"/><path class="swg" d="M76 112h20l-4 6 4 6h-20z" fill="' + OLIVE + '"/>' +
      '<g transform="translate(0 70)"><g class="fly">' + pigeon("") + '</g></g><g transform="translate(0 96)"><g class="fly fly2">' + pigeon("") + '</g></g><g transform="translate(0 52)"><g class="fly fly3">' + pigeon("") + '</g></g>' +
      tag("DAH SHININ'", 110, 240, 30, SUN, -4),
      sky("gs", "#2a2a5a", "#ff9a52"));
  }

  /* 5. Fulton St and Throop Av: green street signs, the subway stair rail, a streetlight, the tag wall in camo */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1a1d18"/><rect x="330" y="60" width="70" height="160" fill="#1a1d18"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#3e423a"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#474c42"/>'; return b; })() +
      '<g opacity=".55">' + camo(22, 168, 246, 50, 5) + '</g>' +
      tag("SMIF-N-WESSUN", 28, 140, 26, SAND, -6) + tag("BUCKTOWN", 40, 198, 28, SUN, -3) +
      /* subway entrance rail with the green globe */
      '<rect x="236" y="186" width="44" height="4" fill="#2a3a2a"/><rect x="236" y="186" width="4" height="34" fill="#2a3a2a"/><rect x="276" y="186" width="4" height="34" fill="#2a3a2a"/>' +
      '<rect x="237" y="160" width="3" height="26" fill="#2a3a2a"/><circle class="flk" cx="238.5" cy="156" r="7" fill="#3fbf5a"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Fulton St</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Throop Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("gc", "#0f1410", "#2e3a28"));
  }

  window.SCENES = { train, fultonpark, surplus, shinin, corner };
})();
