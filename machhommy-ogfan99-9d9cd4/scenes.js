/* Newark, New Jersey opening scenes for the Mach-Hommy game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-60px,280px) rotate(540deg)}}' +
    '.pt{transform-box:fill-box;transform-origin:50% 50%;animation:fall 7s linear infinite}' +
    '@keyframes ring{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:ring 1.6s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.92)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.4s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes rip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}' +
    '.rip{animation:rip 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* rail badge: rounded box with the line name, like the NJ Transit / PATH signs */
  const badge = (x, y, w, label, color, dark) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* Haitian flag: blue over red with the white panel */
  const haiti = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (w * .3) + '" fill="#00209f"/><rect x="' + x + '" y="' + (y + w * .3) + '" width="' + w + '" height="' + (w * .3) + '" fill="#d21034"/>' +
    '<rect x="' + (x + w * .4) + '" y="' + (y + w * .2) + '" width="' + (w * .2) + '" height="' + (w * .2) + '" fill="#fff"/><path d="M' + (x + w * .5) + ' ' + (y + w * .23) + 'v' + (w * .14) + '" stroke="#2f7d32" stroke-width="' + (w * .03) + '"/>';
  const BLUE = "#00209f", RED = "#d21034", GOLD = "#f2c14e", CYAN = "#38e8ff";

  /* 1. Newark Penn Station: the NJ Transit train pulling in under the platform canopy, the Art Deco station behind */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 40) windows += '<rect x="' + x + '" y="140" width="26" height="18" rx="2" fill="#ffe9b0" opacity=".85"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 90) posts += '<rect x="' + (x - 3) + '" y="118" width="6" height="68" fill="#2c3440"/>';
    /* Deco limestone facade with the tall station windows */
    let deco = "";
    for (let x = 40; x < 380; x += 34) deco += '<rect x="' + x + '" y="8" width="16" height="22" fill="#3a3f4a"/><rect x="' + (x + 2) + '" y="10" width="12" height="18" fill="#ffd98a" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="#0f1218"/>' +
      '<rect x="0" y="0" width="400" height="34" fill="#cbbf9f"/>' + deco +
      /* canopy roof */
      '<rect x="0" y="34" width="400" height="10" fill="#3b4452"/><rect x="0" y="44" width="400" height="3" fill="#59657a"/>' +
      '<g class="flk"><rect x="60" y="48" width="70" height="4" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="250" y="48" width="70" height="4" rx="2" fill="#fff7d6"/></g>' +
      /* station sign */
      '<rect x="64" y="62" width="272" height="44" rx="4" fill="#111"/>' +
      '<rect x="64" y="62" width="272" height="4" fill="#fff"/>' +
      '<text x="78" y="90" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Newark Penn Station</text>' +
      badge(254, 84, 34, "NJT", "#1b3d8f") + badge(292, 84, 38, "PATH", "#d93a30") +
      '<rect x="0" y="118" width="400" height="68" fill="#07080b"/>' + posts +
      '<g class="anim-train">' +
        '<rect x="8" y="124" width="300" height="60" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="162" width="300" height="4" fill="#1b3d8f"/><rect x="8" y="166" width="300" height="3" fill="#f58220"/><rect x="8" y="169" width="300" height="3" fill="#a3238e"/>' + windows +
        '<rect x="290" y="134" width="14" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a2a2e"/>' +
      tag("BRICK CITY", 22, 240, 28, CYAN, -4) + tag("DUMP GAWD", 236, 244, 26, RED, -7));
  }

  /* 2. Branch Brook Park in April: rows of pink and white cherry trees on the lake, the stone bridge, petals falling */
  function blossoms() {
    const tree = (x, y, s, c1, c2) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v-40M0 -26l-14 -14M0 -30l12 -16" stroke="#4a3426" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="-14" cy="-46" r="16" fill="' + c1 + '"/><circle cx="12" cy="-52" r="18" fill="' + c2 + '"/><circle cx="0" cy="-62" r="16" fill="' + c1 + '"/><circle cx="-2" cy="-42" r="12" fill="' + c2 + '"/></g>';
    let trees = "";
    [[30, 168, 1, "#f7b7cf", "#f9d2e0"], [100, 172, .9, "#fbe6ee", "#f6c3d6"], [300, 170, 1, "#f7b7cf", "#fbe6ee"], [370, 166, .95, "#f9d2e0", "#f39abd"]].forEach(t => trees += tree(t[0], t[1], t[2], t[3], t[4]));
    let petals = "";
    for (let i = 0; i < 18; i++) petals += '<ellipse class="pt" style="animation-delay:-' + (i * .41).toFixed(2) + 's" cx="' + (20 + (i * 53) % 400) + '" cy="' + ((i * 37) % 60) + '" rx="2.6" ry="1.6" fill="' + (i % 2 ? "#f7b7cf" : "#fff") + '"/>';
    let ripples = "";
    for (let i = 0; i < 6; i++) ripples += '<path class="rip" style="animation-delay:-' + i * .5 + 's" d="M' + (30 + i * 60) + ' ' + (206 + (i % 3) * 12) + 'h30" stroke="#bfe3f2" stroke-width="1.5" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="0" cy="34" rx="44" ry="9" fill="#fff" opacity=".7"/></g><g class="cld cld2"><ellipse cx="0" cy="60" rx="34" ry="7" fill="#fff" opacity=".55"/></g>' +
      /* far shore + city */
      '<path d="M0 150h40v-20h20v20h30v-34h18v34h200v-26h24v26h68v40H0z" fill="#8fa3b8" opacity=".6"/>' +
      '<rect x="0" y="150" width="400" height="44" fill="#6aa04a"/>' +
      trees +
      /* the lake */
      '<rect x="0" y="194" width="400" height="66" fill="#4f8fb3"/>' + ripples +
      /* stone arch bridge */
      '<path d="M150 194q50 -46 100 0v-8q-50 -44 -100 0z" fill="#a89f8c"/><path d="M140 186h120v-8H140z" fill="#c8bfa9"/>' +
      '<path d="M150 194q50 -38 100 0" fill="none" stroke="#7d7464" stroke-width="2"/>' +
      '<path d="M160 226q40 -14 80 0" fill="none" stroke="#a89f8c" stroke-width="3" opacity=".45"/>' +
      petals +
      tag("BRANCH BROOK", 18, 30, 24, "#d21034", -4),
      sky("g2", "#7ec3ea", "#d8eef8"));
  }

  /* 3. Cathedral Basilica of the Sacred Heart: pale granite French Gothic twin towers, green copper roof, the rose window, bells swinging */
  function cathedral() {
    const tower = x => {
      let s = '<rect x="' + x + '" y="40" width="70" height="180" fill="#c9c1b2"/>' +
        '<rect x="' + (x - 4) + '" y="34" width="78" height="10" fill="#b5ad9d"/>';
      for (let i = 0; i < 6; i++) s += '<path d="M' + (x - 4 + i * 13.5) + ' 34v-8h8v8z" fill="#b5ad9d"/>';
      s += '<path d="M' + (x + 14) + ' 110v-32a10 10 0 0 1 20 0v32zM' + (x + 38) + ' 110v-32a10 10 0 0 1 20 0v32z" fill="#2a2f3a"/>' +
        '<g class="bell"><path d="M' + (x + 18) + ' 86h12l3 16h-18z" fill="' + GOLD + '"/></g><g class="bell" style="animation-delay:-.8s"><path d="M' + (x + 42) + ' 86h12l3 16h-18z" fill="' + GOLD + '"/></g>' +
        '<path d="M' + (x + 22) + ' 170v-30a13 13 0 0 1 26 0v30z" fill="#2a2f3a"/>' +
        '<path d="M' + x + ' 120h70M' + x + ' 124h70" stroke="#a69e8e" stroke-width="1.5"/>';
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(22) +
      '<circle cx="350" cy="44" r="14" fill="#fff4d6" opacity=".9"/>' +
      /* nave between towers */
      '<rect x="140" y="96" width="120" height="124" fill="#bdb5a5"/>' +
      '<path d="M134 100l66 -36 66 36z" fill="#5e9c8a" stroke="#3f7566" stroke-width="2"/>' +
      tower(70) + tower(260) +
      /* rose window, glowing */
      '<circle cx="200" cy="132" r="26" fill="#2a2f3a"/>' +
      '<g class="flk"><circle cx="200" cy="132" r="22" fill="#3c4fb0"/>' +
      (function () { let r = ""; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; r += '<circle cx="' + (200 + Math.cos(a) * 14).toFixed(1) + '" cy="' + (132 + Math.sin(a) * 14).toFixed(1) + '" r="5" fill="' + (i % 3 === 0 ? "#d21034" : i % 3 === 1 ? GOLD : "#38a9e8") + '"/>'; } return r; })() +
      '<circle cx="200" cy="132" r="6" fill="' + GOLD + '"/></g>' +
      /* portal */
      '<path d="M176 220v-40a24 24 0 0 1 48 0v40z" fill="#3b2418" stroke="#a69e8e" stroke-width="3"/>' +
      '<path d="M200 156v64" stroke="#a69e8e" stroke-width="2"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#24262c"/><rect x="0" y="216" width="400" height="6" fill="#4a4c52"/>' +
      tag("SACRED HEART", 18, 250, 22, CYAN, -3),
      sky("g3", "#0b0d24", "#2c3a6a"));
  }

  /* 4. Newark City Hall on Broad St: white Beaux-Arts front, the gold-leaf dome, the Haitian flag going up for Flag Day */
  function cityhall() {
    let cols = "";
    for (let x = 136; x <= 256; x += 20) cols += '<rect x="' + x + '" y="126" width="8" height="64" fill="#f1ede3"/><rect x="' + (x - 2) + '" y="122" width="12" height="5" fill="#ddd6c6"/>';
    let wins = "";
    for (let x = 30; x < 120; x += 24) wins += '<rect x="' + x + '" y="140" width="12" height="20" fill="#3a4358"/><rect x="' + x + '" y="170" width="12" height="16" fill="#3a4358"/>';
    for (let x = 290; x < 380; x += 24) wins += '<rect x="' + x + '" y="140" width="12" height="20" fill="#3a4358"/><rect x="' + x + '" y="170" width="12" height="16" fill="#3a4358"/>';
    let crowd = "";
    for (let i = 0; i < 22; i++) { const x = 8 + i * 18, c = ["#00209f", "#d21034", "#f2c14e", "#f1ede3"][i % 4]; crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (226 + (i % 3) * 3) + '" r="6" fill="#2b1d16"/><rect x="' + (x - 7) + '" y="' + (232 + (i % 3) * 3) + '" width="14" height="22" rx="5" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="cld"><ellipse cx="0" cy="30" rx="40" ry="8" fill="#fff" opacity=".7"/></g>' +
      /* wings */
      '<rect x="16" y="128" width="368" height="72" fill="#e8e2d4"/><rect x="12" y="122" width="376" height="8" fill="#d2cab8"/>' + wins +
      /* center pavilion + pediment */
      '<rect x="124" y="112" width="152" height="88" fill="#f4f0e6"/>' +
      '<path d="M118 114l82 -22 82 22z" fill="#e8e2d4" stroke="#cfc6b2" stroke-width="2"/>' + cols +
      /* drum and gold dome */
      '<rect x="160" y="70" width="80" height="24" fill="#ece6d8"/>' +
      (function () { let d = ""; for (let x = 166; x < 236; x += 12) d += '<rect x="' + x + '" y="74" width="5" height="16" fill="#3a4358"/>'; return d; })() +
      '<path d="M156 72q44 -64 88 0z" fill="#e2b13c" stroke="#a87a18" stroke-width="2"/>' +
      '<path d="M178 70q22 -50 22 -54M222 70q-22 -50 -22 -54" stroke="#f8d77a" stroke-width="2" fill="none"/>' +
      '<rect x="194" y="12" width="12" height="12" fill="#e2b13c"/><path d="M192 12l8 -8 8 8z" fill="#e2b13c"/>' +
      /* steps */
      '<rect x="120" y="200" width="160" height="8" fill="#d2cab8"/><rect x="110" y="208" width="180" height="8" fill="#c5bca8"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4c52"/>' +
      /* the flag pole */
      '<rect x="328" y="40" width="3" height="88" fill="#555"/>' +
      '<g class="flag">' + haiti(331, 42, 46) + '</g>' +
      crowd +
      '<rect x="10" y="10" width="120" height="22" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="70" y="25" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Broad St</text>',
      sky("g4", "#5aa8e0", "#cfe6f5"));
  }

  /* 5. Broad St and Market St, the Four Corners: street signs, streetlight, the tag wall in Haitian blue and red */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      /* Deco tower behind (the old National Newark Building with its stepped top) */
      '<rect x="282" y="40" width="80" height="180" fill="#3c3a48"/><rect x="292" y="26" width="60" height="16" fill="#3c3a48"/><path d="M300 26l22 -20 22 20z" fill="#4c4a5a"/>' +
      (function () { let w = ""; for (let y = 50; y < 210; y += 14) for (let x = 290; x < 356; x += 14) w += '<rect x="' + x + '" y="' + y + '" width="7" height="8" fill="' + ((x + y) % 3 ? "#22202a" : "#ffd98a") + '"/>'; return w; })() +
      /* tag wall */
      '<rect x="14" y="70" width="228" height="150" fill="#33363f"/>' +
      '<rect x="14" y="70" width="228" height="40" fill="' + BLUE + '" opacity=".55"/><rect x="14" y="110" width="228" height="40" fill="' + RED + '" opacity=".5"/>' +
      tag("MACH-HOMMY", 24, 146, 28, "#fff", -7) + tag("PRAY FOR HAITI", 30, 198, 22, GOLD, -3) +
      /* streetlight */
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h24" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M278 62h24l-6 8h-12z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="257" y="90" width="86" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Broad St</text>' +
      '<rect x="261" y="112" width="78" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="125" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Market St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0a0f24", "#26305a"));
  }

  window.SCENES = { train, blossoms, cathedral, cityhall, corner };
})();
