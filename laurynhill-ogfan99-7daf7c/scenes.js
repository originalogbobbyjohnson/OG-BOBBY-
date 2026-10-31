/* South Orange, New Jersey opening scenes for the Lauryn Hill game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.8s}.flk3{animation-delay:1.5s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 28s linear infinite}.cld2{animation-delay:-14s}' +
    '@keyframes tick{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.hand{transform-box:view-box;animation:tick 9s linear infinite}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:tick 1.8s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes write{0%{stroke-dashoffset:260}60%,100%{stroke-dashoffset:0}}' +
    '.chalk{stroke-dasharray:260;animation:write 4s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1.5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* rail badge: rounded box with the line name, like the NJ Transit signs */
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* South Orange is known for its gas street lamps: black post, glass lantern, flickering flame */
  const gaslamp = (x, y, cls) =>
    '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + (216 - y) + '" fill="#15171a"/><rect x="' + (x - 6) + '" y="212" width="12" height="5" fill="#15171a"/>' +
    '<path d="M' + (x - 8) + ' ' + (y - 2) + 'h16l-3 -20h-10z" fill="#1d2126"/>' +
    '<path class="flk ' + (cls || "") + '" d="M' + (x - 6) + ' ' + (y - 4) + 'h12l-2.5 -15h-7z" fill="#ffd27a"/>' +
    '<circle class="flk ' + (cls || "") + '" cx="' + x + '" cy="' + (y - 11) + '" r="16" fill="#ffd27a" opacity=".16"/>' +
    '<path d="M' + (x - 9) + ' ' + (y - 22) + 'h18l-9 -7z" fill="#1d2126"/>';
  const GOLD = "#f2c14e", GREEN = "#3f9a5c", RED = "#c8413a", CREAM = "#f3ead6";

  /* 1. South Orange station: the 1916 dark-brick station with its green roof, up on the raised viaduct over South Orange Ave; NJ Transit train pulling in */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 40) windows += '<rect x="' + x + '" y="102" width="26" height="16" rx="2" fill="#ffe9b0" opacity=".85"/>';
    let shops = "";
    for (let x = 30; x < 380; x += 58) shops += '<rect x="' + x + '" y="178" width="40" height="26" rx="2" fill="#ffd98a" opacity=".55"/><rect x="' + x + '" y="172" width="40" height="5" fill="' + (x % 116 ? GREEN : RED) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(16) +
      /* station house: dark brick, green hip roof, arched windows */
      '<rect x="230" y="34" width="150" height="54" fill="#5a2e24"/><path d="M222 36l16 -20h134l16 20z" fill="#3f7d5a"/>' +
      '<rect x="230" y="34" width="150" height="3" fill="#d8c7a6"/>' +
      '<path d="M246 80v-22a7 7 0 0 1 14 0v22zM276 80v-22a7 7 0 0 1 14 0v22zM306 80v-22a7 7 0 0 1 14 0v22zM336 80v-22a7 7 0 0 1 14 0v22z" fill="#ffd98a" opacity=".7"/>' +
      /* platform canopy + station sign */
      '<rect x="0" y="62" width="230" height="6" fill="#3f7d5a"/><path d="M20 68v20M110 68v20M200 68v20" stroke="#2a2f36" stroke-width="3"/>' +
      '<rect x="40" y="70" width="176" height="20" rx="3" fill="#111"/><rect x="40" y="70" width="176" height="3" fill="#fff"/>' +
      '<text x="50" y="85" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">South Orange</text>' +
      badge(140, 81, 34, "M&amp;E", "#2f9e4f") + badge(178, 81, 32, "NJT", "#1b3d8f") +
      '<rect x="0" y="92" width="400" height="6" fill="#2d3540"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="96" width="300" height="44" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="124" width="300" height="4" fill="#1b3d8f"/><rect x="8" y="128" width="300" height="3" fill="#f58220"/><rect x="8" y="131" width="300" height="3" fill="#a3238e"/>' + windows +
        '<rect x="290" y="102" width="14" height="18" rx="3" fill="#ffe9b0" opacity=".85"/><circle cx="300" cy="135" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* the raised stone viaduct with the underpass, shops at street level */
      '<rect x="0" y="140" width="400" height="12" fill="#8c8170"/><rect x="0" y="152" width="400" height="58" fill="#6f6556"/>' +
      '<path d="M150 210v-40q30 -22 60 0v40z" fill="#1c1a20"/>' + shops +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2a2e"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("L BOOGIE", 18, 252, 24, GOLD, -4) + tag("FUGEES", 268, 254, 24, GREEN, -6),
      sky("g1", "#0d1430", "#3a2c4a"));
  }

  /* 2. South Orange Village Hall (1894): brick ground floor with arched doors, half-timbered upper walls, the clock tower's green copper dome; gas lamps out front */
  function villagehall() {
    let beams = "";
    for (let x = 96; x <= 300; x += 17) beams += '<path d="M' + x + ' 92v42" stroke="#4a2f22" stroke-width="3"/>';
    for (let x = 96; x < 300; x += 34) beams += '<path d="M' + x + ' 134l17 -42M' + (x + 17) + ' 92l17 42" stroke="#4a2f22" stroke-width="2"/>';
    let bricks = "";
    for (let y = 142; y < 214; y += 7) bricks += '<path d="M90 ' + y + 'h220" stroke="#6e3326" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="0" cy="34" rx="44" ry="9" fill="#fff" opacity=".7"/></g><g class="cld cld2"><ellipse cx="0" cy="64" rx="30" ry="7" fill="#fff" opacity=".55"/></g>' +
      /* trees behind */
      '<circle cx="40" cy="150" r="40" fill="#3f7a3a"/><circle cx="370" cy="146" r="42" fill="#4a8a42"/>' +
      /* upper half-timbered floor: cream stucco + brown beams */
      '<rect x="90" y="90" width="220" height="46" fill="' + CREAM + '"/>' + beams +
      '<path d="M84 92l38 -34h156l38 34z" fill="#6b3d2e"/><path d="M150 60l26 -22 26 22z" fill="#6b3d2e"/>' +
      '<rect x="168" y="100" width="18" height="22" fill="#2c3a4c"/><rect x="214" y="100" width="18" height="22" fill="#2c3a4c"/>' +
      /* brick ground floor with terracotta-trimmed arches */
      '<rect x="90" y="136" width="220" height="80" fill="#8a3e2c"/>' + bricks +
      '<path d="M112 216v-38a16 16 0 0 1 32 0v38z" fill="#2a1a14" stroke="#d98f5c" stroke-width="3"/>' +
      '<path d="M184 216v-44a16 16 0 0 1 32 0v44z" fill="#2a1a14" stroke="#d98f5c" stroke-width="3"/>' +
      '<path d="M256 216v-38a16 16 0 0 1 32 0v38z" fill="#2a1a14" stroke="#d98f5c" stroke-width="3"/>' +
      /* corner clock tower with the green copper dome */
      '<rect x="290" y="56" width="40" height="160" fill="#8a3e2c"/><rect x="290" y="56" width="40" height="40" fill="' + CREAM + '"/>' +
      '<path d="M290 56l40 40M330 56l-40 40" stroke="#4a2f22" stroke-width="2"/>' +
      '<path d="M286 56q24 -44 48 0z" fill="#5fae8c"/><rect x="306" y="4" width="8" height="12" fill="#5fae8c"/><path d="M304 16l6 -10 6 10z" fill="#4a9a78"/>' +
      '<circle cx="310" cy="112" r="13" fill="#f6efd9" stroke="#d8c7a6" stroke-width="3"/>' +
      '<g class="hand" style="transform-origin:310px 112px"><path d="M310 112v-10" stroke="#222" stroke-width="2" stroke-linecap="round"/></g>' +
      '<path d="M310 112h6" stroke="#222" stroke-width="2.5" stroke-linecap="round"/><circle cx="310" cy="112" r="1.8" fill="#222"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4c52"/><rect x="0" y="216" width="400" height="6" fill="#9a9488"/>' +
      gaslamp(52, 168, "") + gaslamp(356, 168, "flk2") +
      tag("VILLAGE HALL", 18, 40, 22, GOLD, -5),
      sky("g2", "#6db4e2", "#d8eef8"));
  }

  /* 3. Seton Hall University, right in South Orange: Presidents Hall, brownstone Gothic with its square crenellated tower, blue-and-white banners */
  function setonhall() {
    let win = "";
    for (let x = 52; x < 150; x += 24) win += '<path d="M' + x + ' 196v-26a6 6 0 0 1 12 0v26z" fill="#ffe2a0" opacity=".65"/><path d="M' + x + ' 150v-20a6 6 0 0 1 12 0v20z" fill="#ffe2a0" opacity=".55"/>';
    for (let x = 252; x < 350; x += 24) win += '<path d="M' + x + ' 196v-26a6 6 0 0 1 12 0v26z" fill="#ffe2a0" opacity=".65"/><path d="M' + x + ' 150v-20a6 6 0 0 1 12 0v20z" fill="#ffe2a0" opacity=".55"/>';
    let cren = "";
    for (let x = 164; x < 236; x += 12) cren += '<rect x="' + x + '" y="30" width="7" height="10" fill="#7a5040"/>';
    let crowd = "";
    for (let i = 0; i < 20; i++) { const x = 12 + i * 20, c = ["#1f5fbf", "#f1ede3", GOLD, "#1f5fbf"][i % 4]; crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (230 + (i % 3) * 3) + '" r="6" fill="#2b1d16"/><rect x="' + (x - 7) + '" y="' + (236 + (i % 3) * 3) + '" width="14" height="20" rx="5" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cld"><ellipse cx="0" cy="44" rx="40" ry="8" fill="#fff" opacity=".7"/></g>' +
      /* wings */
      '<rect x="40" y="116" width="130" height="100" fill="#8a5a46"/><path d="M34 118l20 -22h102l20 22z" fill="#4d3b36"/>' +
      '<rect x="230" y="116" width="130" height="100" fill="#8a5a46"/><path d="M224 118l20 -22h102l20 22z" fill="#4d3b36"/>' + win +
      /* central tower */
      '<rect x="164" y="40" width="72" height="176" fill="#7a5040"/>' + cren +
      '<path d="M186 216v-46a14 14 0 0 1 28 0v46z" fill="#2a1a14"/>' +
      '<path d="M186 140v-50a14 14 0 0 1 28 0v50z" fill="#ffe2a0" opacity=".5"/><path d="M200 76v64M186 108h28" stroke="#7a5040" stroke-width="2"/>' +
      /* blue and white banners */
      '<path d="M244 70v60" stroke="#333" stroke-width="2"/><g class="flag"><rect x="245" y="72" width="34" height="22" fill="#1f5fbf"/><rect x="245" y="80" width="34" height="5" fill="#fff"/></g>' +
      '<path d="M156 70v60" stroke="#333" stroke-width="2"/><g class="flag"><rect x="122" y="72" width="34" height="22" fill="#1f5fbf" transform="scale(-1 1) translate(-278 0)"/><rect x="122" y="80" width="34" height="5" fill="#fff" transform="scale(-1 1) translate(-278 0)"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4f7d3e"/>' + crowd +
      tag("SETON HALL", 18, 36, 24, "#fff", -5),
      sky("g3", "#3d7fc4", "#bcdcf2"));
  }

  /* 4. The Miseducation classroom: the chalkboard, the wooden school desk with carved letters, a record spinning, music notes rising */
  function classroom() {
    let grain = "";
    for (let y = 170; y < 196; y += 5) grain += '<path d="M90 ' + y + 'q60 -3 120 0t120 0" stroke="#7a4a22" stroke-width="1" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* chalkboard */
      '<rect x="40" y="24" width="320" height="110" rx="4" fill="#25412f" stroke="#8a5a2e" stroke-width="8"/>' +
      '<path class="chalk" d="M64 80l10 -34 10 34M68 66h12M100 46v34M100 46h10q8 0 8 8t-8 8h-10M100 62h12q8 0 8 9t-8 9h-12M154 50q-6 -6 -14 -4q-10 4 -10 18t10 16q8 2 14 -4M64 94h96" stroke="#f3f0e6" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<text x="200" y="118" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="17" fill="#f3f0e6" opacity=".85">DEFINE YOUR OWN DESTINY</text>' +
      '<rect x="60" y="134" width="60" height="5" fill="#8a5a2e"/><rect x="70" y="130" width="14" height="4" fill="#fff"/>' +
      /* the desk */
      '<rect x="80" y="160" width="250" height="40" rx="4" fill="#a8693a" stroke="#6b3d1c" stroke-width="2"/>' + grain +
      '<text x="140" y="188" font-family="Permanent Marker, cursive" font-size="13" fill="#5a2f12" opacity=".8" transform="rotate(-3 140 188)">L. BOOGIE</text>' +
      '<text x="230" y="182" font-family="Permanent Marker, cursive" font-size="10" fill="#5a2f12" opacity=".7" transform="rotate(4 230 182)">ZION</text>' +
      '<path d="M96 200v40M314 200v40" stroke="#4a4f57" stroke-width="5"/><path d="M96 238h18M314 238h-18" stroke="#4a4f57" stroke-width="4"/>' +
      /* record player on the desk */
      '<rect x="264" y="138" width="56" height="22" rx="3" fill="#2a2a2e"/>' +
      '<g class="spin"><circle cx="292" cy="140" r="16" fill="#111"/><circle cx="292" cy="140" r="10" fill="none" stroke="#333" stroke-width="1"/><circle cx="292" cy="140" r="5" fill="' + RED + '"/><path d="M292 125v4" stroke="#555" stroke-width="1.5"/></g>' +
      '<text class="note" x="306" y="128" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="note note2" x="280" y="124" font-size="14" fill="' + GREEN + '">&#9835;</text>' +
      /* apple + books */
      '<circle cx="110" cy="152" r="8" fill="' + RED + '"/><path d="M110 144q2 -6 6 -6" stroke="#3a6a2a" stroke-width="2" fill="none"/>' +
      '<rect x="180" y="146" width="44" height="7" fill="' + GREEN + '"/><rect x="184" y="139" width="38" height="7" fill="' + GOLD + '"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#5a3a24"/>' +
      tag("MISEDUCATION", 12, 254, 20, GOLD, -3),
      sky("g4", "#e9d9b8", "#c9a87a"));
  }

  /* 5. South Orange Ave and Scotland Rd, the village center: green street signs, a gas lamp, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="282" y="60" width="90" height="160" fill="#4a2a22"/>' +
      (function () { let w = ""; for (let y = 70; y < 210; y += 16) for (let x = 290; x < 366; x += 16) w += '<rect x="' + x + '" y="' + y + '" width="8" height="10" fill="' + ((x + y) % 3 ? "#2a1612" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="14" y="70" width="228" height="150" fill="#33363f"/>' +
      '<rect x="14" y="70" width="228" height="150" fill="' + GREEN + '" opacity=".22"/>' +
      tag("LAURYN HILL", 24, 150, 30, GOLD, -7) + tag("THAT THING", 40, 200, 24, "#fff", -3) + tag("L BOOGIE", 120, 96, 20, RED, 5) +
      gaslamp(266, 92, "") +
      '<rect x="252" y="100" width="118" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="311" y="113" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">South Orange Ave</text>' +
      '<rect x="252" y="122" width="118" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="311" y="135" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">Scotland Rd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1a12", "#2a3a22"));
  }

  window.SCENES = { train, villagehall, setonhall, classroom, corner };
})();
