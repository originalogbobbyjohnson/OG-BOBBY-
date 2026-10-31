/* Yonkers opening scenes for the Sheek Louch game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.gull{animation:glide 11s linear infinite}' +
    '@keyframes fall{from{stroke-dashoffset:0}to{stroke-dashoffset:-24}}' +
    '.fall{animation:fall 1s linear infinite}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 6s linear infinite}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}' +
    '.glow{animation:glow 1.8s ease-in-out infinite}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff8a5b", SILVER = "#c9d1d9", GREEN = "#3fa34d", MNBLUE = "#0b3d78";
  /* the Palisades: dark basalt cliffs with a green crown, across the Hudson */
  const palisades = (y, op) =>
    '<g opacity="' + (op || 1) + '"><path d="M0 ' + y + 'l30-6 40 2 50-8 60 4 40-6 60 3 50-7 70 5v36H0z" fill="#2f5a34"/>' +
    '<path d="M0 ' + (y + 4) + 'l30-6 40 2 50-8 60 4 40-6 60 3 50-7 70 5v32H0z" fill="#5b5148"/>' +
    (function () { let c = ""; for (let x = 8; x < 400; x += 23) c += '<path d="M' + x + ' ' + (y + 6 + (x * 7) % 9) + 'l' + ((x % 3) - 1) + ' ' + (10 + (x * 13) % 14) + '" stroke="#7a6e62" stroke-width="' + (1 + (x % 2)) + '" opacity=".7"/>'; return c; })() + '</g>';

  /* 1. Metro-North Hudson Line pulling into Ludlow, right on the river, Palisades across */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) +
      '<circle cx="64" cy="34" r="14" fill="#fff1d6" opacity=".9"/>' +
      palisades(70) +
      '<rect x="0" y="104" width="400" height="20" fill="#1d3b57"/>' +
      '<path class="shim" d="M20 112h40M140 116h60M280 110h50" stroke="#9fc6e8" stroke-width="2" opacity=".6"/>' +
      /* platform canopy posts */
      '<rect x="0" y="56" width="400" height="6" fill="#2b3440"/>' +
      '<rect x="40" y="60" width="5" height="70" fill="#2b3440"/><rect x="200" y="60" width="5" height="70" fill="#2b3440"/><rect x="360" y="60" width="5" height="70" fill="#2b3440"/>' +
      /* Metro-North station sign: navy with white lettering */
      '<rect x="96" y="66" width="208" height="38" rx="3" fill="' + MNBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="91" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="18" fill="#fff">Ludlow</text>' +
      '<rect x="248" y="96" width="50" height="5" fill="#009b3a"/><text x="104" y="100" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#dbe6f3">HUDSON LINE</text>' +
      /* train slides in and stops: stainless car with a blue stripe */
      '<g class="anim-train">' +
        '<rect x="8" y="126" width="304" height="56" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="304" height="5" fill="' + MNBLUE + '"/><rect x="8" y="166" width="304" height="2" fill="#d1343a"/>' + windows +
        '<path d="M300 130h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="174" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="178" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#334">METRO-NORTH</text>' +
      '</g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1a1d22"/>' +
      tag("YONKERS", 24, 238, 30, ORANGE, -4) + tag("D-BLOCK", 270, 242, 28, SILVER, -7),
      sky("g1", "#120d22", "#7a4a5e"));
  }

  /* 2. The Yonkers Pier at sunset, reaching into the Hudson, Palisades glowing across the water */
  function pier() {
    let lamps = "";
    for (let i = 0; i < 6; i++) { const x = 70 + i * 52, h = 34 - i * 3;
      lamps += '<rect x="' + x + '" y="' + (170 - h) + '" width="3" height="' + h + '" fill="#1b2027"/><circle class="flk' + (i % 2 ? " flk2" : "") + '" cx="' + (x + 1.5) + '" cy="' + (170 - h) + '" r="3.5" fill="#ffe7a8"/>'; }
    let rail = "";
    for (let x = 40; x < 400; x += 12) rail += '<path d="M' + x + ' 170v-10" stroke="#e6e1d6" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="300" cy="78" r="26" fill="#ffcf6b"/><circle cx="300" cy="78" r="40" fill="#ffcf6b" opacity=".18"/>' +
      palisades(92) +
      '<rect x="0" y="128" width="400" height="132" fill="#24476b"/>' +
      '<path class="shim" d="M270 140h60M260 152h80M280 166h44" stroke="#ffcf6b" stroke-width="3" opacity=".7"/>' +
      '<path class="shim shim2" d="M20 150h50M120 190h70M30 220h90M240 230h80" stroke="#8fb6dc" stroke-width="2" opacity=".5"/>' +
      /* the pavilion at the end of the pier */
      '<rect x="300" y="136" width="86" height="34" fill="#e9e4da" stroke="#8b8478" stroke-width="1.5"/>' +
      '<path d="M294 138l49-22 49 22z" fill="#3f6f6a" stroke="#2a4a47" stroke-width="1.5"/>' +
      '<rect x="310" y="144" width="14" height="16" fill="#ffd98a"/><rect x="330" y="144" width="14" height="16" fill="#ffd98a"/><rect x="350" y="144" width="14" height="16" fill="#ffd98a"/><rect x="370" y="144" width="10" height="16" fill="#ffd98a"/>' +
      /* the deck */
      '<path d="M0 170h400v8H0z" fill="#8a6b4a"/>' + rail + '<path d="M40 160h360" stroke="#e6e1d6" stroke-width="2"/>' +
      (function () { let p = ""; for (let x = 20; x < 400; x += 40) p += '<rect x="' + x + '" y="178" width="5" height="40" fill="#4a3a2a"/>'; return p; })() +
      lamps +
      '<g class="gull"><path d="M0 50q6-6 12 0q6-6 12 0" stroke="#1b2027" stroke-width="2" fill="none"/></g>' +
      tag("YONKERS PIER", 24, 238, 26, ORANGE, -4),
      sky("g2", "#3b2a5c", "#f08a5b"));
  }

  /* 3. Untermyer Gardens: the Temple of Love on its rock, water spilling down the stone pools */
  function temple() {
    let cols = "";
    for (let i = 0; i < 6; i++) cols += '<rect x="' + (166 + i * 13) + '" y="70" width="5" height="40" fill="#f3eee2" stroke="#b9b09c" stroke-width=".8"/>';
    let lattice = "";
    for (let i = 0; i < 9; i++) lattice += '<path d="M' + (168 + i * 8) + ' 68q' + (32 - i * 8) + ' -26 ' + (32 - i * 8) + ' -26" stroke="#3c4a3c" stroke-width="1.2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      palisades(110, .7) +
      '<rect x="0" y="140" width="400" height="12" fill="#3d6b8c"/>' +
      /* trees */
      '<circle cx="40" cy="150" r="40" fill="#2f6b38"/><circle cx="90" cy="168" r="30" fill="#3d7d43"/><circle cx="350" cy="150" r="42" fill="#2f6b38"/><circle cx="306" cy="172" r="28" fill="#3d7d43"/>' +
      /* the rock outcrop */
      '<path d="M110 260l20-120 40-26h68l40 30 22 116z" fill="#7c7368"/>' +
      '<path d="M130 140l40-26h68l40 30" fill="none" stroke="#5e564d" stroke-width="3"/>' +
      '<path d="M150 170l30 10M230 160l26 16M140 210l40 6M240 214l30-6" stroke="#5e564d" stroke-width="2"/>' +
      /* the temple: white columns, an open iron lattice dome */
      '<rect x="160" y="108" width="84" height="8" fill="#e8e2d3" stroke="#b9b09c"/>' + cols +
      '<rect x="160" y="64" width="84" height="7" fill="#e8e2d3" stroke="#b9b09c"/>' +
      '<path d="M164 64q38-42 76 0" fill="none" stroke="#3c4a3c" stroke-width="2.5"/>' + lattice +
      '<circle cx="202" cy="40" r="3" fill="#3c4a3c"/>' +
      /* the cascade */
      '<path class="fall" d="M196 118v60M204 118v60M212 118v60" stroke="#cfe9ff" stroke-width="3" stroke-dasharray="8 4"/>' +
      '<ellipse cx="204" cy="182" rx="40" ry="7" fill="#7fb4d9"/>' +
      '<path class="fall" d="M190 188v50M218 188v50" stroke="#cfe9ff" stroke-width="3" stroke-dasharray="8 4"/>' +
      '<ellipse cx="204" cy="240" rx="56" ry="9" fill="#7fb4d9"/>' +
      tag("TEMPLE OF LOVE", 20, 40, 22, ORANGE, -4),
      sky("g3", "#7fb6e0", "#e8f2f7"));
  }

  /* 4. Getty Square: Philipse Manor Hall, brick and white trim, with downtown traffic rolling past */
  function getty() {
    let win = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) {
      const x = 106 + i * 32, y = 104 + r * 42; if (r === 1 && i === 3) continue;
      win += '<rect x="' + x + '" y="' + y + '" width="16" height="26" fill="#2b3644" stroke="#f4f1ea" stroke-width="2.5"/><path d="M' + (x + 8) + ' ' + y + 'v26M' + x + ' ' + (y + 13) + 'h16" stroke="#f4f1ea" stroke-width="1"/>';
    }
    let bal = "";
    for (let x = 108; x < 296; x += 8) bal += '<rect x="' + x + '" y="62" width="3" height="10" fill="#f4f1ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* neighbors */
      '<rect x="0" y="80" width="80" height="120" fill="#6b5a4c"/><rect x="320" y="70" width="80" height="130" fill="#5a6470"/>' +
      (function () { let w = ""; for (let y = 90; y < 190; y += 22) { w += '<rect x="12" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".7"/><rect x="46" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".5"/>'; w += '<rect x="334" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".6"/><rect x="368" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".7"/>'; } return w; })() +
      /* the manor hall */
      '<path d="M92 88l18-20h180l18 20z" fill="#5d6268"/>' + bal + '<rect x="104" y="70" width="192" height="2" fill="#f4f1ea"/>' +
      '<rect x="94" y="88" width="212" height="112" fill="#9b4a35"/>' +
      '<rect x="94" y="88" width="212" height="5" fill="#f4f1ea"/><rect x="94" y="140" width="212" height="3" fill="#f4f1ea"/>' + win +
      '<rect x="200" y="160" width="20" height="40" fill="#f4f1ea"/><rect x="204" y="164" width="12" height="36" fill="#3a2a22"/>' +
      '<path d="M196 160l14-10 14 10z" fill="#f4f1ea"/>' +
      '<rect x="198" y="36" width="2" height="34" fill="#333"/><rect x="200" y="36" width="18" height="11" fill="#2a4f8a"/>' +
      /* street */
      '<rect x="0" y="200" width="400" height="60" fill="#22262c"/><path d="M0 230h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="208" width="70" height="18" rx="5" fill="' + ORANGE + '"/><rect x="12" y="200" width="40" height="12" rx="4" fill="' + ORANGE + '"/><rect x="16" y="202" width="14" height="8" fill="#cfe6ff"/><rect x="34" y="202" width="14" height="8" fill="#cfe6ff"/><circle cx="16" cy="228" r="6" fill="#111"/><circle cx="54" cy="228" r="6" fill="#111"/></g>' +
      tag("GETTY SQUARE", 24, 52, 24, SILVER, -4),
      sky("g4", "#1c2a44", "#d97b52"));
  }

  /* 5. Main St and Warburton Av: the tag wall, a jack-o-lantern on the stoop for Gorillaween */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="360" cy="34" r="14" fill="#fff1d6"/>' +
      /* brick wall with the tags */
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#4a2c24"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#5a3529"/>'; return b; })() +
      tag("SHEEK LOUCH", 26, 132, 32, ORANGE, -7) + tag("D-BLOCK", 60, 180, 30, SILVER, -3) + tag("GORILLAWEEN", 34, 210, 18, GREEN, -2) +
      /* jack-o-lantern */
      '<ellipse cx="236" cy="204" rx="18" ry="14" fill="#f07b1f"/><rect x="233" y="186" width="5" height="8" fill="#3d6b2c"/>' +
      '<path class="glow" d="M226 198l5 4h-8zM246 198l-5 4h8zM226 210q10 6 20 0" stroke="#ffe27a" stroke-width="2" fill="#ffe27a"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="264" y="88" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="254" y="110" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Warburton Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#3a2a4a"));
  }

  window.SCENES = { train, pier, temple, getty, corner };
})();
