/* Flatbush / Ditmas Park opening scenes for the CJ Fly game (Newkirk Plaza on the Brighton Line, Ditmas Park, Brooklyn Museum).
   Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes peck{0%,60%,100%{transform:rotate(0deg)}70%,90%{transform:rotate(28deg)}}' +
    '.peck{transform-box:fill-box;transform-origin:50% 100%;animation:peck 1.6s infinite}.peck2{animation-delay:-.8s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0deg);opacity:0}10%{opacity:1}100%{transform:translate(-60px,240px) rotate(300deg);opacity:.9}}' +
    '.leaf{animation:leaf 7s linear infinite}.l2{animation-delay:-2.3s}.l3{animation-delay:-4.6s}' +
    '@keyframes jet{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.4s ease-in-out infinite}.j2{animation-delay:-.7s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes buzz{0%{transform:translate(0,0)}25%{transform:translate(30px,-10px)}50%{transform:translate(60px,6px)}75%{transform:translate(28px,14px)}100%{transform:translate(0,0)}}' +
    '.fly{animation:buzz 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (cx, cy, letter, color, dark) =>
    '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", TEAL = "#2ec4b6", PURP = "#9b5de5";
  const fly = (x, y) => '<g class="fly"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="#222"/><ellipse cx="' + (x - 2) + '" cy="' + (y - 4) + '" rx="3" ry="2" fill="#cfe8ff" opacity=".8"/><ellipse cx="' + (x + 2) + '" cy="' + (y - 4) + '" rx="3" ry="2" fill="#cfe8ff" opacity=".8"/></g>';

  /* 1. Newkirk Plaza (B/Q): the Brighton Line runs in an open cut here, with the plaza and its storefronts up at street level */
  function train() {
    let windows = "";
    for (let x = 22; x < 280; x += 42) windows += '<rect x="' + x + '" y="124" width="26" height="20" rx="3" fill="#dbe7f3" opacity=".9"/>';
    let shops = "";
    for (let x = 0; x < 400; x += 66) shops += '<rect x="' + x + '" y="10" width="60" height="34" fill="' + ["#b5523b", "#d9c29a", "#8f6a4e"][(x / 66) % 3] + '"/><rect x="' + (x + 6) + '" y="24" width="48" height="16" fill="#2b3a46"/><path d="M' + x + ' 20h60l-4 6H' + (x + 4) + 'z" fill="' + [TEAL, GOLD, PURP][(x / 66) % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' + shops +
      /* the plaza railing at the top of the cut */
      '<rect x="0" y="44" width="400" height="6" fill="#7a7f86"/>' +
      (function () { let s = ""; for (let x = 4; x < 400; x += 10) s += '<path d="M' + x + ' 44v-10" stroke="#2f3b2f" stroke-width="2"/>'; return s; })() + '<path d="M0 34h400" stroke="#2f3b2f" stroke-width="2"/>' +
      /* the cut walls */
      '<rect x="0" y="50" width="400" height="66" fill="#a79f8e"/>' +
      (function () { let s = ""; for (let x = 0; x < 400; x += 50) s += '<path d="M' + x + ' 50v66" stroke="#918a7a" stroke-width="2"/>'; return s; })() +
      /* station sign on the platform */
      '<rect x="44" y="60" width="312" height="40" rx="4" fill="#111"/>' +
      '<text x="58" y="87" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="19" fill="#fff">Newkirk Plaza</text>' +
      bullet(290, 80, "B", "#ff6319") + bullet(318, 80, "Q", "#fccc0a", 1) +
      '<rect x="0" y="116" width="400" height="52" fill="#6d6a63"/><path d="M0 150h400M0 160h400" stroke="#9a948a" stroke-width="2"/>' +
      '<g class="anim-train">' +
        '<rect x="6" y="112" width="300" height="56" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + windows +
        '<rect x="6" y="152" width="300" height="5" fill="#ff6319"/>' +
        '<circle cx="290" cy="134" r="10" fill="#ff6319"/><text x="290" y="139" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">B</text>' +
        '<circle cx="300" cy="162" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="168" width="400" height="8" fill="#eab308"/><rect x="0" y="176" width="400" height="84" fill="#7d776c"/>' +
      tag("CJ FLY", 30, 236, 34, GOLD, -5) + tag("PRO ERA", 250, 232, 26, TEAL, -4),
      sky("gs", "#86bde6", "#d9eaf6"));
  }

  /* 2. Newkirk Plaza at street level: the old pedestrian mall, low storefronts with awnings, old lampposts, pigeons */
  function plaza() {
    const awn = [TEAL, "#c0392b", GOLD, PURP, "#2e7d32"];
    let left = "", right = "";
    for (let i = 0; i < 4; i++) {
      const y = 70 + i * 34, w = 70 - i * 12, h = 30;
      left += '<rect x="0" y="' + y + '" width="' + (110 - i * 22) + '" height="' + h + '" fill="#c8b48e"/><rect x="0" y="' + (y + 12) + '" width="' + (96 - i * 22) + '" height="' + (h - 12) + '" fill="#2b3a46"/><path d="M0 ' + (y + 6) + 'h' + (110 - i * 22) + 'l-6 8H0z" fill="' + awn[i] + '"/>';
      right += '<rect x="' + (290 + i * 22) + '" y="' + y + '" width="' + (110 - i * 22) + '" height="' + h + '" fill="#b5523b"/><rect x="' + (304 + i * 22) + '" y="' + (y + 12) + '" width="' + (96 - i * 22) + '" height="' + (h - 12) + '" fill="#2b3a46"/><path d="M' + (290 + i * 22) + ' ' + (y + 6) + 'h' + (110 - i * 22) + 'v8H' + (296 + i * 22) + 'z" fill="' + awn[(i + 2) % 5] + '"/>';
    }
    const lamp = (x, y, h) => '<rect x="' + (x - 1.5) + '" y="' + y + '" width="3" height="' + h + '" fill="#1f2a24"/><rect x="' + (x - 5) + '" y="' + (y - 10) + '" width="10" height="12" rx="2" fill="#fff2b0" class="flk"/><path d="M' + (x - 6) + ' ' + (y - 10) + 'h12l-6-6z" fill="#1f2a24"/>';
    const pigeon = (x, y, c) => '<g><ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="6" fill="#8a8f99"/><g class="peck ' + (c || "") + '"><circle cx="' + (x + 8) + '" cy="' + (y - 6) + '" r="4" fill="#6b7280"/><path d="M' + (x + 12) + ' ' + (y - 6) + 'l4 1-4 1z" fill="#e0a030"/></g><path d="M' + (x - 2) + ' ' + (y + 5) + 'v5M' + (x + 3) + ' ' + (y + 5) + 'v5" stroke="#e07a5f" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gp)"/>' +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" letter-spacing="3" stroke="#1d3557" stroke-width="3" paint-order="stroke">NEWKIRK PLAZA</text>' +
      left + right +
      /* the plaza paving narrowing into the distance */
      '<path d="M110 70h180l110 190H0z" fill="#cfc6b4"/>' +
      (function () { let s = ""; for (let i = 1; i < 8; i++) { const y = 70 + i * i * 3.2; s += '<path d="M' + (110 - i * i * 1.9) + ' ' + y + 'H' + (290 + i * i * 1.9) + '" stroke="#b8ae9a" stroke-width="1.2"/>'; } return s; })() +
      /* the green railing over the tracks down the middle */
      '<path d="M185 70l-30 190M215 70l30 190" stroke="#2f5b3a" stroke-width="4"/>' +
      lamp(130, 120, 90) + lamp(270, 120, 90) +
      pigeon(170, 232) + pigeon(236, 222, "peck2") +
      fly(80, 60),
      sky("gp", "#8fc6ef", "#e5f2fb"));
  }

  /* 3. Ditmas Park: the big wooden Victorian houses with wraparound porches and turrets, autumn trees, leaves coming down */
  function victorians() {
    const house = (x, body, trim, roof) =>
      '<rect x="' + x + '" y="108" width="110" height="96" fill="' + body + '"/>' +
      '<path d="M' + (x - 8) + ' 110l63-46 63 46z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 74) + '" y="78" width="30" height="80" fill="' + body + '"/><path d="M' + (x + 70) + ' 80l19-30 19 30z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 82) + '" y="92" width="14" height="20" fill="#2b3a46"/>' +
      '<rect x="' + (x + 14) + '" y="122" width="18" height="24" fill="#2b3a46"/><rect x="' + (x + 44) + '" y="122" width="18" height="24" fill="#2b3a46"/>' +
      '<circle cx="' + (x + 55) + '" cy="96" r="7" fill="#2b3a46" stroke="' + trim + '" stroke-width="2"/>' +
      /* wraparound porch */
      '<rect x="' + (x - 6) + '" y="164" width="122" height="6" fill="' + trim + '"/><rect x="' + (x - 6) + '" y="196" width="122" height="8" fill="' + trim + '"/>' +
      (function () { let s = ""; for (let i = 0; i < 6; i++) s += '<rect x="' + (x - 4 + i * 23) + '" y="170" width="4" height="26" fill="' + trim + '"/>'; return s; })() +
      '<rect x="' + (x + 44) + '" y="176" width="18" height="20" fill="#5a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gv)"/>' +
      house(14, "#e8c65a", "#fdf6e3", "#5b3a29") + house(150, "#8fae8b", "#fdf6e3", "#3d4a5c") + house(286, "#b5523b", "#f2e6c9", "#3a2a22") +
      '<rect x="0" y="204" width="400" height="20" fill="#5f8f4a"/><rect x="0" y="224" width="400" height="10" fill="#c9c2b4"/><rect x="0" y="234" width="400" height="26" fill="#3a3d44"/>' +
      /* street trees in fall */
      '<rect x="136" y="150" width="6" height="74" fill="#5a3a2a"/><circle cx="139" cy="140" r="22" fill="#d9822b"/><circle cx="128" cy="130" r="14" fill="#c0392b"/>' +
      '<rect x="272" y="150" width="6" height="74" fill="#5a3a2a"/><circle cx="275" cy="140" r="22" fill="#e0a030"/><circle cx="288" cy="128" r="14" fill="#d9822b"/>' +
      '<path class="leaf" d="M140 120q6-6 10 0q-4 6-10 0z" fill="#d9822b"/><path class="leaf l2" d="M280 116q6-6 10 0q-4 6-10 0z" fill="#c0392b"/><path class="leaf l3" d="M200 100q6-6 10 0q-4 6-10 0z" fill="#e0a030"/>' +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e5e7eb" letter-spacing="2">DITMAS PARK</text>',
      sky("gv", "#9fc9ea", "#f1e6cf"));
  }

  /* 4. Brooklyn Museum on Eastern Parkway: pale Beaux-Arts columns and pediment, the curved glass entry pavilion,
        the plaza fountain jets, and a gold pharaoh banner (the Egyptian collection; CJ's "The Pharaoh's Return") */
  function museum() {
    let cols = "";
    for (let x = 108; x < 300; x += 32) cols += '<rect x="' + x + '" y="72" width="12" height="70" fill="#ece6d8"/><rect x="' + (x - 2) + '" y="70" width="16" height="4" fill="#d6cfbd"/>';
    let jets = "";
    for (let i = 0; i < 9; i++) jets += '<rect class="jet' + (i % 2 ? " j2" : "") + '" x="' + (60 + i * 36) + '" y="' + (196 - (i % 3) * 6) + '" width="4" height="' + (24 + (i % 3) * 6) + '" rx="2" fill="#cfefff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gmu)"/>' +
      /* main body + wings */
      '<rect x="20" y="70" width="360" height="110" fill="#ddd5c3"/><rect x="20" y="66" width="360" height="6" fill="#c9c0ac"/>' +
      '<path d="M96 70l104-38 104 38z" fill="#e7e0cf" stroke="#c9c0ac" stroke-width="2"/>' +
      '<path d="M150 62h100" stroke="#b9ae96" stroke-width="2"/>' + cols +
      '<rect x="96" y="140" width="208" height="6" fill="#c9c0ac"/>' +
      (function () { let s = ""; for (let x = 32; x < 90; x += 18) s += '<rect x="' + x + '" y="90" width="10" height="22" fill="#5b6470"/>'; for (let x = 316; x < 376; x += 18) s += '<rect x="' + x + '" y="90" width="10" height="22" fill="#5b6470"/>'; return s; })() +
      /* banners */
      '<rect x="40" y="120" width="26" height="46" fill="' + GOLD + '"/><rect x="334" y="120" width="26" height="46" fill="' + GOLD + '"/>' +
      '<path d="M42 160l11-26 11 26z" fill="#1d3a8a"/><path d="M53 134l11 26h-6z" fill="#0f2560"/><path d="M336 160l11-26 11 26z" fill="#1d3a8a"/><path d="M347 134l11 26h-6z" fill="#0f2560"/>' +
      /* glass entrance pavilion */
      '<path d="M120 180v-32q80-24 160 0v32z" fill="#8fc3dd" opacity=".9" stroke="#5b8aa2" stroke-width="2"/>' +
      '<path d="M150 180v-38M180 180v-44M220 180v-44M250 180v-38" stroke="#5b8aa2" stroke-width="1.5"/>' +
      /* plaza + fountain */
      '<rect x="0" y="180" width="400" height="80" fill="#bdb6a8"/><rect x="40" y="212" width="320" height="14" rx="3" fill="#7fb7d6"/>' + jets +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#3a3d44" letter-spacing="2">BROOKLYN MUSEUM, EASTERN PARKWAY</text>',
      sky("gmu", "#f3b37a", "#fde7c7"));
  }

  /* backdrop for the corner: the Kings Theatre seen from the Newkirk side in daylight, over the wall: the long terracotta
     roofline, the crest, the arched window catching the sky, the KINGS blade unlit; pigeons going by */
  function kingsDay() {
    let s = '<style>@keyframes icSl{from{transform:translateX(-60px)}to{transform:translateX(460px)}}@keyframes icSlL{from{transform:translateX(460px)}to{transform:translateX(-60px)}}@keyframes icBl{0%,49%{opacity:1}50%,100%{opacity:.2}}@keyframes icSw{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}@keyframes icWv{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}@keyframes icGl{0%,100%{opacity:.12}50%{opacity:.3}}' +
      '.icS{animation:icSl 7s linear infinite}.icS2{animation-delay:-3.5s}.icSs{animation-duration:16s}.icL{animation:icSlL 8s linear infinite}.icLs{animation-duration:15s}.icB{animation:icBl 1s steps(1) infinite}.icB2{animation-delay:-.5s}' +
      '.icSw{animation:icSw 7s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.icSw2{animation-delay:-3.5s;animation-duration:9s}.icW{animation:icWv 1.3s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}.icG{animation:icGl 2.6s ease-in-out infinite}</style>' +
      '<circle cx="384" cy="14" r="16" fill="#fff6d0" opacity=".35"/><circle cx="384" cy="14" r="10" fill="#fff6d0"/>' +
      '<rect x="168" y="36" width="168" height="36" fill="#c9a072"/><rect x="164" y="32" width="176" height="5" fill="#e0bf8e"/><rect x="168" y="44" width="168" height="2" fill="#a87a50"/>' +
      '<path d="M222 32L252 16L282 32Z" fill="#c9a072"/><path d="M226 32L252 19L278 32" fill="none" stroke="#e0bf8e" stroke-width="1.5"/>';
    for (let x = 172; x < 336; x += 14) s += '<circle cx="' + x + '" cy="30" r="2" fill="#e0bf8e"/>';
    s += '<path d="M238 72V52Q252 36 266 52V72Z" fill="#7aa4cf"/><path d="M252 42V72M238 58H266" stroke="#a87a50" stroke-width="1.2"/>';
    [184, 204, 292, 312].forEach(x => s += '<path d="M' + x + ' 70V58q5-7 10 0V70z" fill="#8a6a4a"/>');
    s += '<rect x="340" y="2" width="16" height="66" rx="1.5" fill="#f3e6c8" stroke="#a83a2a" stroke-width="1.5"/>';
    "KINGS".split("").forEach((c, i) => s += '<text x="348" y="' + (15 + i * 12.4) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#c8281e">' + c + '</text>');
    [[0, 14], [16, 20], [-12, 22]].forEach((p, i) => s += '<g class="icS icSs' + (i ? " icS2" : "") + '"><path d="M' + (p[0] - 4) + ' ' + p[1] + 'q4-3 4 0q0-3 4 0" fill="none" stroke="#2a2d33" stroke-width="1.2"/></g>');
    return s;
  }

  /* 5. Newkirk Avenue and East 16th St: green street signs, a wall tagged up */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + kingsDay() +
      '<rect x="20" y="70" width="380" height="146" fill="#3d3a52"/>' +
      (function () { let s = ""; for (let y = 78; y < 216; y += 10) s += '<path d="M20 ' + y + 'h380" stroke="#2e2b40" stroke-width="1"/>'; return s; })() +
      tag("CJ FLY", 140, 156, 40, GOLD, -5) +
      tag("PRO ERA", 220, 198, 24, TEAL, -3) +
      tag("FLYTRAP", 170, 108, 18, PURP, -4) +
      fly(330, 100) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="4" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="65" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Newkirk Av</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">E 16th St</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + TEAL + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#9fd0f5"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#cbd5e0" letter-spacing="2">FLATBUSH, BROOKLYN</text>',
      sky("gk", "#4a8fd8", "#cfe6f7"));
  }

  window.SCENES = { train, plaza, victorians, museum, corner };
})();
