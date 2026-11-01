/* East New York opening scenes for the Jeru the Damaja game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes rise{0%{transform:translateY(26px)}70%,100%{transform:translateY(0)}}' +
    '.rise{animation:rise 8s ease-out infinite alternate}' +
    '@keyframes spin{to{transform:rotate(360deg)}}' +
    '.rays{transform-box:fill-box;transform-origin:50% 50%;animation:spin 30s linear infinite}' +
    '@keyframes run{from{transform:translateX(-330px)}to{transform:translateX(420px)}}' +
    '.lirr{animation:run 7s linear infinite}' +
    '@keyframes car{from{transform:translateX(-60px)}to{transform:translateX(440px)}}' +
    '.car{animation:car 5s linear infinite}.car2{animation-duration:6.5s;animation-delay:-3s}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 2.6s ease-in-out infinite}.sway2{animation-delay:-1.3s}' +
    '@keyframes drop{0%{transform:translateY(0);opacity:1}85%{opacity:1}100%{transform:translateY(118px);opacity:0}}' +
    '.drop{animation:drop 1.4s ease-in infinite}.drop2{animation-delay:-.7s}' +
    '@keyframes ripple{0%{transform:scale(.2);opacity:1}100%{transform:scale(1.4);opacity:0}}' +
    '.rip{transform-box:fill-box;transform-origin:50% 50%;animation:ripple 1.4s ease-out infinite}.rip2{animation-delay:-.7s}' +
    '@keyframes led{0%,100%{opacity:.3}50%{opacity:1}}' +
    '.led{animation:led .5s steps(2) infinite}.led2{animation-delay:-.25s}' +
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
  const SUN = "#ffb347", ORG = "#ff6a3d", SKY = "#6fd3ff";
  const BLUE = "#0039a6", BROWN = "#996633", GRAY = "#a7a9ac";
  const sun = (cx, cy, r) => '<g class="rise"><g class="rays" stroke="' + SUN + '" stroke-width="3" opacity=".6">' +
    [0, 30, 60, 90, 120, 150].map(a => '<path d="M' + (cx - r - 16) + ' ' + cy + 'h' + (2 * r + 32) + '" transform="rotate(' + a + ' ' + cx + ' ' + cy + ')"/>').join("") + '</g>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + SUN + '"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 6) + '" fill="#ffd27a"/></g>';

  /* 1. Broadway Junction: the J pulling into the open-air el platform at sunrise, steel canopy, the sign with every line that meets here */
  function train() {
    let posts = "";
    for (let x = 20; x < 400; x += 76) posts += '<rect x="' + x + '" y="30" width="7" height="160" fill="#3d5a3a"/>';
    let windows = "";
    for (let x = 22; x < 270; x += 50) windows += '<rect x="' + x + '" y="134" width="32" height="20" rx="3" fill="#fff4cc" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#j1)"/>' +
      sun(330, 86, 22) +
      /* far rooftops */
      [[0, 110], [50, 100], [110, 116], [170, 104], [240, 112], [300, 120], [350, 106]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="54" height="' + (190 - y) + '" fill="#4a2e3a"/>').join("") +
      /* canopy */
      '<path d="M0 24h400v10H0z" fill="#2e4a2c"/><path d="M0 18l200-8 200 8v6H0z" fill="#3d5a3a"/>' + posts +
      '<rect x="40" y="46" width="320" height="32" rx="4" fill="#111"/><rect x="40" y="46" width="320" height="4" fill="#fff"/>' +
      '<text x="50" y="70" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Broadway Junction</text>' +
      bullet(222, 64, "A", BLUE) + bullet(246, 64, "C", BLUE) + bullet(270, 64, "J", BROWN) + bullet(294, 64, "Z", BROWN) + bullet(318, 64, "L", GRAY) +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="162" width="300" height="5" fill="' + BROWN + '"/>' + windows +
        '<rect x="285" y="134" width="16" height="20" rx="3" fill="#fff4cc" opacity=".9"/>' +
        '<circle cx="300" cy="174" r="4" fill="#fff6c2"/>' + bullet(296, 141, "J", BROWN) +
      '</g>' +
      '<rect x="0" y="184" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#4a4540"/><path d="M0 194h400" stroke="#9a9286" stroke-width="2"/>' +
      tag("GANG STARR FDN", 20, 240, 26, SUN, -5) + tag("D. ORIGINAL", 236, 242, 24, SKY, -7),
      sky("j1", "#2a1f4a", "#ff9a5a"));
  }

  /* 2. The East New York LIRR stop on Atlantic Av: the commuter train rolling along the concrete viaduct, traffic underneath */
  function lirr() {
    let arches = "";
    for (let x = 0; x < 400; x += 80) arches += '<path d="M' + (x + 10) + ' 200v-46q30-26 60 0v46z" fill="#2e2a2a"/>';
    let wins = "";
    for (let x = 12; x < 300; x += 26) wins += '<rect x="' + x + '" y="92" width="16" height="14" rx="2" fill="#1d2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#j2)"/>' +
      '<rect x="0" y="40" width="70" height="90" fill="#b8a48c"/><rect x="330" y="50" width="70" height="80" fill="#a8927a"/>' +
      /* viaduct */
      '<rect x="0" y="126" width="400" height="74" fill="#b9b4a8"/>' + arches +
      '<rect x="0" y="122" width="400" height="8" fill="#d8d3c6"/>' +
      /* the train */
      '<g class="lirr"><rect x="0" y="80" width="300" height="42" rx="6" fill="#d9dde3" stroke="#7d8590" stroke-width="2"/>' +
        '<rect x="0" y="108" width="300" height="5" fill="#1f3f8f"/><rect x="0" y="113" width="300" height="3" fill="#7a3fa0"/>' + wins +
        '<path d="M100 80v42M200 80v42" stroke="#9aa2ad" stroke-width="2"/></g>' +
      /* black station sign */
      '<rect x="128" y="138" width="144" height="22" rx="2" fill="#111"/><text x="200" y="154" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">East New York</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/><path d="M0 230h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="car"><rect x="0" y="206" width="44" height="16" rx="4" fill="' + ORG + '"/><rect x="8" y="200" width="26" height="9" rx="3" fill="' + ORG + '"/><circle cx="10" cy="222" r="4" fill="#111"/><circle cx="34" cy="222" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="236" width="50" height="16" rx="4" fill="#f2d04a"/><rect x="10" y="230" width="28" height="9" rx="3" fill="#f2d04a"/><circle cx="12" cy="252" r="4" fill="#111"/><circle cx="40" cy="252" r="4" fill="#111"/></g>' +
      '<rect x="300" y="168" width="84" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/><text x="342" y="180" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Atlantic Av</text>',
      sky("j2", "#7cc4f0", "#e8f4fb"));
  }

  /* 3. The Sun Rises in the East: sunrise over an East New York community garden, raised beds, sunflowers, row houses behind */
  function farm() {
    let houses = "";
    [[0, "#b0644a"], [70, "#c9b590"], [140, "#9a5a44"], [210, "#c4ae86"], [280, "#a86048"], [350, "#cdbb96"]].forEach(([x, c]) => {
      houses += '<rect x="' + x + '" y="96" width="66" height="84" fill="' + c + '"/><rect x="' + (x - 2) + '" y="92" width="70" height="6" fill="#5a3a2a"/>';
      for (const wx of [10, 30, 48]) houses += '<rect x="' + (x + wx) + '" y="110" width="9" height="16" fill="#3a2f3f"/><rect x="' + (x + wx) + '" y="138" width="9" height="16" fill="#3a2f3f"/>';
    });
    let beds = "";
    for (let x = 20; x < 400; x += 92) {
      beds += '<rect x="' + x + '" y="206" width="72" height="22" fill="#7a4e2c" stroke="#5a3820" stroke-width="2"/><rect x="' + (x + 2) + '" y="202" width="68" height="6" fill="#3c2a1c"/>';
      for (let k = 8; k < 70; k += 14) beds += '<path d="M' + (x + k) + ' 202q-4-8 0-12q4 4 0 12z" fill="#4caf50"/>';
    }
    const flower = (x, h, cls) => '<g class="sway ' + cls + '"><rect x="' + (x - 1.5) + '" y="' + (204 - h) + '" width="3" height="' + h + '" fill="#3d8b3d"/>' +
      '<path d="M' + x + ' ' + (220 - h) + 'q-10-4-12 4q8 2 12-4z" fill="#3d8b3d"/>' +
      '<circle cx="' + x + '" cy="' + (204 - h) + '" r="10" fill="#ffd23f"/><circle cx="' + x + '" cy="' + (204 - h) + '" r="5" fill="#6b3f1f"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#j3)"/>' +
      sun(200, 62, 28) + houses +
      '<rect x="0" y="180" width="400" height="80" fill="#5c8a3a"/><rect x="0" y="228" width="400" height="32" fill="#4a7030"/>' +
      '<path d="M0 182h400" stroke="#8a7a62" stroke-width="3" stroke-dasharray="2 6"/>' +
      beds + flower(12, 64, "") + flower(108, 54, "sway2") + flower(198, 70, "") + flower(290, 58, "sway2") + flower(388, 66, "") +
      '<rect x="128" y="236" width="144" height="18" rx="2" fill="#2e5a2a" stroke="#f4efe6" stroke-width="1.2"/><text x="200" y="249" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" fill="#f4efe6">EAST NEW YORK FARMS</text>',
      sky("j3", "#4a6fb0", "#ffc27a"));
  }

  /* 4. Come Clean: a basement studio, a pipe dripping into a pail like the beat, the sampler blinking, crates of records */
  function drip() {
    let crates = "";
    for (const x of [24, 84]) {
      crates += '<rect x="' + x + '" y="176" width="54" height="44" fill="#c48a3a" stroke="#7a5212" stroke-width="2"/>';
      for (let k = 4; k < 50; k += 6) crates += '<rect x="' + (x + k) + '" y="166" width="4" height="14" fill="' + ["#222", "#ff6a3d", "#6fd3ff", "#ffb347"][k % 4] + '"/>';
    }
    let bricks = "";
    for (let y = 40; y < 220; y += 12) for (let x = (y / 12) % 2 ? 0 : 14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#3a2a26"/>';
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect x="' + (262 + c * 18) + '" y="' + (176 + r * 14) + '" width="14" height="10" rx="2" fill="#d8d4c8"/>';
    return svg(
      '<rect width="400" height="260" fill="#241a18"/>' + bricks +
      '<rect x="0" y="0" width="400" height="40" fill="#1a1412"/>' +
      /* the pipe overhead */
      '<rect x="0" y="40" width="400" height="12" fill="#7c858f"/><rect x="190" y="38" width="20" height="16" rx="3" fill="#5c646d"/>' +
      '<path d="M200 54q-4 6 0 10q4-4 0-10z" fill="' + SKY + '" class="drop"/><path d="M200 54q-4 6 0 10q4-4 0-10z" fill="' + SKY + '" class="drop drop2"/>' +
      /* the pail */
      '<path d="M176 182h48l-6 38h-36z" fill="#9aa2ad" stroke="#5c646d" stroke-width="2"/><ellipse cx="200" cy="182" rx="24" ry="5" fill="#3a6a8a"/>' +
      '<ellipse cx="200" cy="182" rx="14" ry="3" fill="none" stroke="' + SKY + '" stroke-width="1.5" class="rip"/><ellipse cx="200" cy="182" rx="14" ry="3" fill="none" stroke="' + SKY + '" stroke-width="1.5" class="rip rip2"/>' +
      crates +
      /* the sampler on a table */
      '<rect x="244" y="200" width="140" height="8" fill="#5a3a24"/><rect x="252" y="208" width="6" height="16" fill="#5a3a24"/><rect x="370" y="208" width="6" height="16" fill="#5a3a24"/>' +
      '<rect x="252" y="160" width="124" height="40" rx="3" fill="#4a4d55" stroke="#2a2c30" stroke-width="2"/>' + pads +
      '<rect x="338" y="168" width="30" height="10" fill="#1a3a1a"/><circle cx="344" cy="190" r="3" fill="#ff3b30" class="led"/><circle cx="354" cy="190" r="3" fill="#7cf29a" class="led led2"/>' +
      '<rect x="80" y="70" width="240" height="34" rx="3" fill="#120d0c" stroke="' + SUN + '" stroke-width="2"/>' +
      '<text x="200" y="95" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="5" fill="' + SUN + '">COME CLEAN</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3330"/>',
      "");
  }

  /* 5. Atlantic Av and Pennsylvania Av: green street signs, a streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 72; y < 220; y += 12) for (let x = (y / 12) % 2 ? 22 : 36; x + 26 <= 250; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#5a3324"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#j5)"/>' +
      '<rect x="20" y="70" width="230" height="150" fill="#43241a"/>' + bricks +
      tag("JERU", 40, 134, 44, SUN, -6) + tag("COME CLEAN", 34, 178, 26, SKY, -4) + tag("THE PROPHET", 96, 210, 20, ORG, -7) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="264" y="88" width="78" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Atlantic Av</text>' +
      '<rect x="254" y="110" width="98" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Pennsylvania Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#7d7b75"/><path d="M0 222h400" stroke="#a5a39b" stroke-width="2"/>',
      sky("j5", "#2a1830", "#c8603a"));
  }

  window.SCENES = { train, lirr, farm, drip, corner };
})();
