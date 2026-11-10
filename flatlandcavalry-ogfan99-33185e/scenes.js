/* flatlandcavalry scenes (Regions: Houston + Texas / Genres: country; Lubbock + Midland, West Texas). CSS classes prefixed flc- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8a33c", RUST = "#c8553d", SKY = "#6fa3b8", CREAM = "#f4ead6";
  const css = '<style>' +
    '@keyframes flcglow{0%,100%{opacity:.45}50%{opacity:1}}.flc-glow{animation:flcglow 2.4s ease-in-out infinite}.flc-g2{animation-delay:-1.2s}' +
    '@keyframes flcspin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.flc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:flcspin 3s linear infinite}.flc-s2{animation-duration:4.4s}' +
    '@keyframes flcnod{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.flc-nod{transform-box:fill-box;transform-origin:50% 50%;animation:flcnod 2.6s ease-in-out infinite}.flc-n2{animation-delay:-1.3s}' +
    '@keyframes flcbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.flc-bell{transform-box:fill-box;transform-origin:50% 0;animation:flcbell 1.4s ease-in-out infinite}.flc-b2{animation-delay:-.7s}' +
    '@keyframes flcweed{0%{transform:translateX(-40px) rotate(0deg)}100%{transform:translateX(440px) rotate(720deg)}}.flc-weed{transform-box:fill-box;transform-origin:50% 50%;animation:flcweed 9s linear infinite}' +
    '@keyframes flccloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.flc-cl{animation:flccloud 14s ease-in-out infinite alternate}' +
    '@keyframes flcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.flc-sp{animation:flcspray 1.4s ease-out infinite}.flc-sp2{animation-delay:.45s}' +
    '@keyframes flctwk{0%,100%{opacity:.2}50%{opacity:1}}.flc-tw{animation:flctwk 1.8s ease-in-out infinite}.flc-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const star5 = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; return s; };
  /* flat West Texas horizon */
  const plains = (y, c1, c2) => '<rect x="0" y="' + y + '" width="400" height="' + (H - y) + '" fill="' + c1 + '"/><path d="M0 ' + (y + 6) + 'q100 -3 200 0t200 0v' + (H - y) + 'h-400z" fill="' + c2 + '"/>';
  /* old-style farm windmill (the Lubbock windmills) */
  const windmill = (x, base, s, cls) => {
    const top = base - 90 * s;
    let blades = ""; for (let i = 0; i < 12; i++) blades += '<path d="M0 0L' + (-3 * s).toFixed(1) + ' ' + (-22 * s).toFixed(1) + 'L' + (3 * s).toFixed(1) + ' ' + (-22 * s).toFixed(1) + 'z" fill="#d8d4cc" transform="rotate(' + (i * 30) + ')"/>';
    return '<g><path d="M' + (x - 10 * s) + ' ' + base + 'L' + x + ' ' + top + 'L' + (x + 10 * s) + ' ' + base + '" stroke="#5a5a5a" stroke-width="' + (1.6 * s) + '" fill="none"/>' +
      '<path d="M' + (x - 7 * s) + ' ' + (base - 30 * s) + 'h' + (14 * s) + 'M' + (x - 4 * s) + ' ' + (base - 60 * s) + 'h' + (8 * s) + '" stroke="#5a5a5a" stroke-width="' + s + '"/>' +
      '<path d="M' + x + ' ' + top + 'h' + (22 * s) + 'l' + (6 * s) + ' ' + (-6 * s) + 'v' + (12 * s) + 'z" fill="#8a8a86"/>' +
      '<g transform="translate(' + x + ' ' + top + ')"><g class="flc-spin ' + (cls || "") + '">' + blades + '<circle r="' + (3 * s) + '" fill="#6a6a6a"/></g></g></g>';
  };
  const pumpjack = (x, base, s, cls) => '<g><rect x="' + (x - 18 * s) + '" y="' + (base - 4 * s) + '" width="' + (40 * s) + '" height="' + (4 * s) + '" fill="#2a2a2a"/>' +
    '<path d="M' + (x - 2 * s) + ' ' + (base - 4 * s) + 'L' + (x + 3 * s) + ' ' + (base - 26 * s) + 'L' + (x + 8 * s) + ' ' + (base - 4 * s) + '" stroke="#2a2a2a" stroke-width="' + (2 * s) + '" fill="none"/>' +
    '<g class="flc-nod ' + (cls || "") + '"><rect x="' + (x - 20 * s) + '" y="' + (base - 29 * s) + '" width="' + (46 * s) + '" height="' + (5 * s) + '" fill="#1a1a1a"/><path d="M' + (x + 26 * s) + ' ' + (base - 33 * s) + 'q' + (7 * s) + ' ' + (6 * s) + ' 0 ' + (13 * s) + 'z" fill="#1a1a1a"/></g>' +
    '<circle cx="' + (x - 14 * s) + '" cy="' + (base - 12 * s) + '" r="' + (6 * s) + '" fill="#1a1a1a"/></g>';
  const weed = '<g class="flc-weed"><circle cx="0" cy="226" r="9" fill="none" stroke="#a8844a" stroke-width="1.5"/><path d="M-7 222l14 8M-6 231l12 -10M0 217v18" stroke="#a8844a" stroke-width="1.2"/></g>';

  function flcstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#flc1)"/>' +
      '<g class="flc-cl"><ellipse cx="70" cy="86" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="300" cy="80" rx="46" ry="9" fill="#fff" opacity=".5"/></g>' +
      plains(134, "#c8a874", "#b89460") + windmill(360, 136, .6, "") +
      '<g fill="#9a8e7e"><rect x="12" y="104" width="30" height="32"/><rect x="46" y="94" width="20" height="42"/></g>' +
      /* the transfer plaza: tan brick, long red canopy */
      bricks(60, 112, 280, 52, "#c49a6a", "#7a5a3a") +
      '<path d="M40 112h320l-10 -12h-300z" fill="' + RUST + '" stroke="#6a2a1a" stroke-width="1.5"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 50) + '" y="120" width="26" height="30" fill="#bfd8e4" opacity=".75"/>').join("") +
      /* black station sign */
      '<rect x="44" y="18" width="300" height="54" rx="4" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="210" y="43" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Downtown Transfer Plaza</text>' +
      '<text x="210" y="63" text-anchor="middle" ' + font + ' font-size="10" fill="#cfd6dc" letter-spacing="1">801 BROADWAY · LUBBOCK</text>' +
      '<rect x="52" y="30" width="30" height="16" rx="8" fill="#c8102e" stroke="#fff" stroke-width="1.2"/><text x="67" y="42" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">CB</text>' +
      '<rect x="0" y="164" width="400" height="14" fill="#b8b2a6"/><rect x="0" y="176" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3e4146"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      /* the Citibus pulls in */
      '<g class="anim-train"><rect x="40" y="168" width="250" height="56" rx="10" fill="#f4f4f2" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="40" y="200" width="250" height="8" fill="#c8102e"/><rect x="40" y="208" width="250" height="4" fill="#1f3f8a"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 30) + '" y="176" width="24" height="20" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="262" y="176" width="24" height="34" rx="3" fill="#2a3a4a"/><rect x="252" y="170" width="36" height="5" fill="#111"/><text x="270" y="174.5" text-anchor="middle" ' + font + ' font-size="4.5" fill="' + GOLD + '">DOWNTOWN</text>' +
      '<circle cx="80" cy="226" r="11" fill="#111"/><circle cx="80" cy="226" r="4" fill="#888"/><circle cx="246" cy="226" r="11" fill="#111"/><circle cx="246" cy="226" r="4" fill="#888"/>' +
      '<rect x="284" y="212" width="6" height="5" fill="#ffe8a0" class="flc-glow"/></g>',
      sky("flc1", "#5a9ad8", "#f4dcb0"));
  }

  function flcglasses() {
    /* the giant black-rimmed glasses outside the Buddy Holly Center + West Texas Walk of Fame stars (the band went in, 2025) */
    let stars = "";
    for (let i = 0; i < 5; i++) stars += '<g><rect x="' + (22 + i * 76) + '" y="214" width="56" height="30" rx="3" fill="#8a7a64" stroke="#5a4a34"/>' + star5(50 + i * 76, 229, 10, i === 2 ? GOLD : "#d8c8a0", i === 2 ? "flc-glow" : "") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#flc2)"/>' +
      '<g class="flc-cl"><ellipse cx="90" cy="34" rx="44" ry="9" fill="#fff" opacity=".6"/></g>' +
      plains(150, "#b8a07a", "#a88e64") +
      /* the old depot-brick building behind */
      bricks(330, 110, 70, 46, "#b8784a", "#6a3a1a") + '<rect x="330" y="104" width="70" height="8" fill="#e6d8b8"/>' +
      Array.from({ length: 2 }, (_, i) => '<rect x="' + (346 + i * 28) + '" y="120" width="14" height="24" fill="#2a3a4a"/>').join("") +
      bricks(0, 116, 40, 40, "#b8784a", "#6a3a1a") +
      /* the glasses on their stand */
      '<rect x="150" y="150" width="8" height="58" fill="#3a3a3a"/><rect x="226" y="150" width="8" height="58" fill="#3a3a3a"/><rect x="120" y="204" width="146" height="10" fill="#8a8a86"/>' +
      '<g><rect x="74" y="78" width="104" height="72" rx="20" fill="#bfe2f0" fill-opacity=".35" stroke="#111" stroke-width="12"/>' +
      '<rect x="206" y="78" width="104" height="72" rx="20" fill="#bfe2f0" fill-opacity=".35" stroke="#111" stroke-width="12"/>' +
      '<path d="M178 98q14 -12 28 0" stroke="#111" stroke-width="10" fill="none"/><path d="M74 92l-30 -6M310 92l30 -6" stroke="#111" stroke-width="8" stroke-linecap="round"/>' +
      '<path d="M92 92l24 -8M224 92l24 -8" stroke="#fff" stroke-width="4" opacity=".7" stroke-linecap="round" class="flc-glow"/></g>' +
      stars + weed,
      sky("flc2", "#4a8ad0", "#f0d8a8"));
  }

  function flctech() {
    /* Texas Tech's Administration Building: Spanish Renaissance twin towers, tan brick, red tile roofs, the carillon bells */
    const tower = (x, cls) => '<g><rect x="' + (x - 22) + '" y="60" width="44" height="110" fill="#e2c89a" stroke="#a88a5a" stroke-width="1.5"/>' +
      '<rect x="' + (x - 26) + '" y="56" width="52" height="8" fill="#c8a878"/>' +
      '<path d="M' + (x - 24) + ' 56L' + x + ' 26L' + (x + 24) + ' 56z" fill="#b8442a" stroke="#7a2a18" stroke-width="1.5"/>' +
      '<rect x="' + (x - 14) + '" y="70" width="28" height="30" rx="14" fill="#3a2a1e"/>' +
      '<g class="flc-bell ' + cls + '"><path d="M' + (x - 7) + ' 78q0 -10 7 -10t7 10l3 10h-20z" fill="' + GOLD + '"/></g>' +
      '<rect x="' + (x - 8) + '" y="112" width="16" height="22" rx="8" fill="#3a2a1e"/><rect x="' + (x - 8) + '" y="142" width="16" height="20" rx="8" fill="#3a2a1e"/></g>';
    let arches = ""; for (let i = 0; i < 6; i++) arches += '<rect x="' + (38 + i * 18) + '" y="140" width="11" height="22" rx="5.5" fill="#3a2a1e"/><rect x="' + (256 + i * 18) + '" y="140" width="11" height="22" rx="5.5" fill="#3a2a1e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#flc3)"/>' +
      '<g class="flc-cl"><ellipse cx="200" cy="28" rx="50" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<rect x="24" y="120" width="352" height="56" fill="#e2c89a" stroke="#a88a5a" stroke-width="1.5"/>' +
      '<path d="M18 120h364l-8 -12h-348z" fill="#b8442a"/>' + arches +
      tower(130, "") + tower(270, "flc-b2") +
      '<rect x="168" y="112" width="64" height="64" fill="#e8d0a4" stroke="#a88a5a" stroke-width="1.5"/><path d="M162 112h76l-8 -12h-60z" fill="#b8442a"/><rect x="186" y="130" width="28" height="46" rx="14" fill="#3a2a1e"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#7a9a4a"/><path d="M0 200h400" stroke="#6a8a3a" stroke-width="2"/>' +
      '<path d="M170 260L188 176h24L230 260z" fill="#d8ccb4"/>' +
      '<g fill="#4a6a2a"><circle cx="40" cy="180" r="18"/><circle cx="360" cy="180" r="18"/></g>',
      sky("flc3", "#3a7ac8", "#cfe6f4"));
  }

  function flcmidland() {
    /* Midland, the Tall City: towers rising straight off the flat Permian Basin, pumpjacks nodding at sunset */
    let towers = "";
    [[150, 70, 26], [180, 50, 30], [214, 84, 22], [240, 60, 26], [270, 96, 20]].forEach(([x, y, w], i) => {
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="' + (i % 2 ? "#3a3048" : "#2e2a3c") + '"/>';
      for (let yy = y + 8; yy < 160; yy += 12) towers += '<rect x="' + (x + 4) + '" y="' + yy + '" width="' + (w - 8) + '" height="3" fill="#ffd98a" opacity=".55" class="flc-tw' + ((yy + i) % 2 ? " flc-tw2" : "") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#flc4)"/>' +
      '<circle cx="80" cy="150" r="30" fill="#ffb060" opacity=".85"/>' +
      towers + plains(170, "#5a3a2a", "#4a2e20") +
      pumpjack(70, 214, 1.3, "") + pumpjack(310, 206, 1, "flc-n2") + pumpjack(200, 236, .8, "") + weed,
      sky("flc4", "#2a2050", "#f08a4a"));
  }

  function flccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#flc5)"/>' +
      '<circle cx="70" cy="44" r="16" fill="#ffe0a0" opacity=".9"/>' +
      plains(126, "#c8a874", "#b89460") +
      windmill(60, 132, .75, "") + windmill(130, 130, .55, "flc-s2") + windmill(200, 130, .65, "") + windmill(260, 128, .5, "flc-s2") +
      bricks(0, 140, 400, 80, "#a8603a", "#5a2a14") +
      '<rect x="0" y="136" width="400" height="5" fill="#e6d8b8"/>' +
      tag("FLATLAND CAVALRY", 10, 186, 24, GOLD, -5) + tag("WEST TEXAS", 26, 210, 13, CREAM, -3) + tag("CAPROCK", 162, 210, 13, RUST, -4) + tag("SPINNIN'", 238, 206, 12, SKY, -6) +
      '<g class="flc-sp"><circle cx="252" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="flc-sp flc-sp2"><circle cx="258" cy="184" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4a46"/><rect x="0" y="218" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="62" width="6" height="158" fill="#2f2f2f"/>' + sign(270, 62, 128, "BUDDY HOLLY AVE") + sign(298, 88, 100, "18TH ST"),
      sky("flc5", "#4a8ad0", "#f4d4a0"));
  }

  window.SCENES = { flcstation: flcstation, flcglasses: flcglasses, flctech: flctech, flcmidland: flcmidland, flccorner: flccorner };
})();
