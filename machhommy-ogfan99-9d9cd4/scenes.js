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

  /* 1. Newark Penn Station at night: the NJ Transit train pulling in under the canopy, the Art Deco station lanterns, a Haitian flag hung off the platform rail, Pray for Haiti on the board */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 40) windows += '<rect x="' + x + '" y="140" width="26" height="18" rx="2" fill="#ffe9b0" opacity=".85"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 90) posts += '<rect x="' + (x - 3) + '" y="118" width="6" height="68" fill="#2c3440"/>';
    let deco = "";
    for (let x = 40; x < 380; x += 34) deco += '<rect x="' + x + '" y="8" width="16" height="22" fill="#3a3f4a"/><rect x="' + (x + 2) + '" y="10" width="12" height="18" fill="#ffd98a" opacity=".55"/>';
    /* Deco lantern hanging off the canopy */
    const lantern = x => '<path d="M' + x + ' 47v6" stroke="#8a7a4a" stroke-width="2"/><path class="flk" d="M' + (x - 7) + ' 53h14l-3 14h-8z" fill="#ffd98a" stroke="#8a7a4a" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="#0f1218"/>' +
      '<rect x="0" y="0" width="400" height="34" fill="#cbbf9f"/>' + deco +
      '<rect x="0" y="34" width="400" height="10" fill="#3b4452"/><rect x="0" y="44" width="400" height="3" fill="#59657a"/>' + lantern(30) + lantern(370) +
      '<rect x="64" y="58" width="272" height="44" rx="4" fill="#111"/><rect x="64" y="58" width="272" height="4" fill="#fff"/>' +
      '<text x="78" y="86" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Newark Penn Station</text>' +
      badge(254, 80, 34, "NJT", "#1b3d8f") + badge(292, 80, 38, "PATH", "#d93a30") +
      '<rect x="0" y="118" width="400" height="68" fill="#07080b"/>' + posts +
      '<g class="anim-train">' +
        '<rect x="8" y="124" width="300" height="60" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="162" width="300" height="4" fill="#1b3d8f"/><rect x="8" y="166" width="300" height="3" fill="#f58220"/><rect x="8" y="169" width="300" height="3" fill="#a3238e"/>' + windows +
        '<rect x="290" y="134" width="14" height="22" rx="3" fill="#ffe9b0" opacity=".85"/><circle cx="300" cy="176" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/><rect x="0" y="196" width="400" height="64" fill="#2a2a2e"/>' +
      /* the flag on its pole at the platform end + the poster board */
      '<rect x="354" y="104" width="3" height="110" fill="#9aa3ad"/><g class="flag">' + haiti(357, 106, 40) + '</g>' +
      '<rect x="318" y="200" width="74" height="52" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + haiti(331, 206, 48) +
      '<text x="355" y="236" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">PRAY FOR</text><text x="355" y="247" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">HAITI</text>' +
      tag("MACH-HOMMY", 18, 238, 30, CYAN, -4) + tag("HBO", 230, 246, 26, RED, -7));
  }

  /* 2. Lincoln Park, down the south end of Broad St: the long lawn set up for the summer music festival, old brownstone mansions around it, the stage lights sweeping */
  function blossoms() {
    let row = "";
    [[0, 70, "#7a4a3a"], [62, 80, "#8a5a44"], [120, 66, "#6a3e30"], [272, 74, "#8a5a44"], [334, 64, "#7a4a3a"]].forEach(b => { row += '<rect x="' + b[0] + '" y="' + b[1] + '" width="60" height="' + (150 - b[1]) + '" fill="' + b[2] + '"/><rect x="' + b[0] + '" y="' + (b[1] - 6) + '" width="60" height="6" fill="#3a2418"/>';
      for (let y = b[1] + 10; y < 140; y += 22) row += '<rect x="' + (b[0] + 10) + '" y="' + y + '" width="12" height="16" fill="#ffe6a8" opacity=".8"/><rect x="' + (b[0] + 36) + '" y="' + y + '" width="12" height="16" fill="#ffe6a8" opacity=".8"/>'; });
    const tr = (x, s) => '<g transform="translate(' + x + ' 150) scale(' + s + ')"><rect x="-3" y="-30" width="6" height="34" fill="#4a3426"/><circle cx="0" cy="-42" r="22" fill="#2f6e34"/><circle cx="-14" cy="-32" r="14" fill="#3a7e3a"/><circle cx="14" cy="-30" r="14" fill="#2f6e34"/></g>';
    let crowd = "";
    for (let i = 0; i < 20; i++) { const x = 10 + i * 20, c = [BLUE, RED, GOLD, "#f1ede3"][i % 4]; crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (228 + (i % 3) * 4) + '" r="6" fill="#2b1d16"/><rect x="' + (x - 7) + '" y="' + (234 + (i % 3) * 4) + '" width="14" height="22" rx="5" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) + row + tr(196, 1) + tr(250, .9) +
      '<rect x="0" y="150" width="400" height="110" fill="#4f8a3a"/><path d="M0 150h400" stroke="#3a6a2a" stroke-width="3"/>' +
      /* the festival stage */
      '<rect x="120" y="120" width="160" height="70" fill="#1b1b22"/><path d="M114 120h172l-10-16H124z" fill="#2c3440"/><rect x="120" y="186" width="160" height="10" fill="#3a3a44"/>' +
      '<g class="bell"><path d="M150 108l-24 80h48z" fill="' + GOLD + '" opacity=".25"/></g><g class="bell" style="animation-delay:-.8s"><path d="M250 108l-24 80h48z" fill="' + CYAN + '" opacity=".25"/></g>' +
      haiti(170, 132, 60) +
      '<rect x="130" y="150" width="14" height="36" fill="#2a2a30"/><rect x="256" y="150" width="14" height="36" fill="#2a2a30"/><circle class="flk" cx="137" cy="164" r="5" fill="#555"/><circle class="flk flk2" cx="263" cy="164" r="5" fill="#555"/>' +
      crowd +
      '<rect x="10" y="10" width="164" height="36" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="92" y="27" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">LINCOLN PARK</text>' +
      '<text x="92" y="40" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">BROAD ST · CLINTON AV</text>' +
      tag("MACH-HOMMY", 236, 40, 22, CYAN, -5),
      sky("g2", "#141a3a", "#6a4a7a"));
  }

  /* 3. The Newark Museum of Art on Washington St: the 1920s pale limestone front across from Washington Park, banners on the poles, a painter's easel set up in the park */
  function cathedral() {
    let wins = "";
    for (let x = 50; x < 360; x += 34) if (x < 168 || x > 232) wins += '<path d="M' + x + ' 150v-34a8 8 0 0 1 16 0v34z" fill="#3a4358"/><rect x="' + x + '" y="170" width="16" height="22" fill="#3a4358"/>';
    const banner = (x, c1, c2, t) => '<rect x="' + x + '" y="196" width="3" height="40" fill="#555"/><g class="flag"><rect x="' + (x + 3) + '" y="198" width="16" height="30" fill="' + c1 + '"/><rect x="' + (x + 3) + '" y="222" width="16" height="6" fill="' + c2 + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cld"><ellipse cx="0" cy="34" rx="44" ry="9" fill="#fff" opacity=".7"/></g>' +
      /* limestone block with cornice and the arched center entry */
      '<rect x="30" y="80" width="340" height="120" fill="#e6dfcf"/><rect x="24" y="72" width="352" height="10" fill="#d2c9b4"/><rect x="30" y="100" width="340" height="3" fill="#d2c9b4"/>' +
      '<rect x="160" y="60" width="80" height="140" fill="#ede7d9"/><rect x="154" y="54" width="92" height="8" fill="#d2c9b4"/>' + wins +
      '<path d="M178 200v-60a22 22 0 0 1 44 0v60z" fill="#3b2a1e" stroke="#c9bfa8" stroke-width="3"/><path class="flk" d="M184 140a16 16 0 0 1 32 0z" fill="#ffd98a" opacity=".6"/>' +
      '<text x="200" y="94" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11" fill="#6a5e48">NEWARK MUSEUM OF ART</text>' +
      '<rect x="0" y="200" width="400" height="12" fill="#c5bca8"/><rect x="0" y="212" width="400" height="48" fill="#4a7a3a"/>' +
      banner(60, RED, BLUE) + banner(320, BLUE, RED) +
      /* the park: trees and an easel with a canvas */
      '<g transform="translate(110 236)"><rect x="-3" y="-26" width="6" height="26" fill="#4a3426"/><circle class="bob" cx="0" cy="-36" r="16" fill="#2f6e34"/></g>' +
      '<path d="M262 252l14-44 14 44M276 208v44" stroke="#8a5a2e" stroke-width="3" fill="none"/><rect x="258" y="206" width="36" height="28" fill="#fff" stroke="#8a5a2e" stroke-width="2"/>' +
      '<rect x="262" y="210" width="28" height="8" fill="' + BLUE + '"/><rect x="262" y="218" width="28" height="8" fill="' + RED + '"/><circle class="flk" cx="276" cy="226" r="3" fill="' + GOLD + '"/>' +
      '<rect x="10" y="10" width="150" height="22" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="85" y="25" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Washington St</text>' +
      tag("MACH-HOMMY", 18, 252, 22, CYAN, -3),
      sky("g3", "#6ab0e0", "#e2f0f8"));
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

  /* IC: shared iconic landmark in the corner backdrop (its own little animations, prefixed ic-) */
  const IC_CSS = '<style>' +
    '@keyframes icBl{0%,49%{opacity:1}50%,100%{opacity:.2}}.ic-bl{animation:icBl 1s steps(1) infinite}.ic-b2{animation-delay:-.5s}' +
    '@keyframes icSw{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ic-sw{animation:icSw 6s ease-in-out infinite}.ic-s2{animation-delay:-3s}' +
    '@keyframes icPl{0%,100%{opacity:.3}50%{opacity:1}}.ic-pl{animation:icPl 2.6s ease-in-out infinite}.ic-p2{animation-delay:-.65s}.ic-p3{animation-delay:-1.3s}.ic-p4{animation-delay:-1.95s}' +
    '@keyframes icDr{from{transform:translateX(-90px)}to{transform:translateX(320px)}}.ic-dr{animation:icDr 22s linear infinite}' +
    '@keyframes icFl{to{stroke-dashoffset:-24}}.ic-fl{animation:icFl .7s linear infinite}' +
    '@keyframes icMi{0%{transform:translateY(0);opacity:0}30%{opacity:.7}100%{transform:translateY(-24px);opacity:0}}.ic-mi{animation:icMi 3.2s ease-out infinite}.ic-m2{animation-delay:-1.1s}.ic-m3{animation-delay:-2.2s}' +
    '@keyframes icCar{from{transform:translateX(0)}to{transform:translateX(300px)}}.ic-car{animation:icCar 7s linear infinite}.ic-c2{animation-delay:-3.5s}' +
    '@keyframes icCarL{from{transform:translateX(0)}to{transform:translateX(-300px)}}.ic-carl{animation:icCarL 8.5s linear infinite}.ic-c3{animation-delay:-4s}' +
    '@keyframes icBird{from{transform:translate(0,0)}to{transform:translate(330px,-26px)}}.ic-bird{animation:icBird 9s linear infinite}.ic-bd2{animation-delay:-4.5s}' +
    '</style>';
  /* Newark Symphony Hall (1925), drawn 200 wide from 0,0: lettering over the cornice, pale limestone, six tall arched windows, optional bulb marquee */
  const icHall = (o) => { o = o || {};
    const st = o.stone || "#dccdb0", cn = o.cornice || "#c6b796", wn = o.win || "#f2c46a", fr = o.frame || "#2a2a3a", lt = o.letter || "#f6efdc";
    let s = '<text x="100" y="-5" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="14" letter-spacing="3" fill="' + lt + '"' + (o.lstroke ? ' stroke="' + o.lstroke + '" stroke-width="3" paint-order="stroke"' : '') + '>SYMPHONY HALL</text>' +
      '<rect x="-6" y="0" width="212" height="8" fill="' + cn + '"/><rect x="0" y="8" width="200" height="104" fill="' + st + '"/><path d="M0 15h200" stroke="' + cn + '" stroke-width="1.5"/>';
    for (let i = 0; i < 6; i++) { const x = 18 + i * 30; s += '<path d="M' + x + ' 66V31a8 8 0 0 1 16 0V66z" fill="' + wn + '" stroke="' + fr + '" stroke-width="2.5"/>'; }
    if (o.bulbs) for (let x = -2; x <= 202; x += 12) s += '<circle class="ic-bl' + ((x / 12) % 2 ? " ic-b2" : "") + '" cx="' + x + '" cy="4" r="2" fill="#ffe7a8"/>';
    if (o.marquee) { s += '<rect x="10" y="74" width="180" height="22" fill="#1a1414" stroke="#c9a24a" stroke-width="1.5"/>';
      for (let x = 16; x < 190; x += 10) { const c = (x / 10) % 2 ? "ic-bl" : "ic-bl ic-b2"; s += '<circle class="' + c + '" cx="' + x + '" cy="78.5" r="2" fill="#ffe7a8"/><circle class="' + c + '" cx="' + x + '" cy="91.5" r="2" fill="#ffe7a8"/>'; } }
    return s; };
  const icBg = () => IC_CSS +
    '<path d="M22 40L34 33V80H22z" fill="#a8997c"/>' +
    '<g transform="translate(34 34) skewY(9) scale(.6 .55)">' + icHall({ bulbs: true }) + '</g>' +
    '<path d="M14 70v-6h40v-4h26v4h34v-3h30v3h78v6z" fill="#141a33"/>';

  /* 5. Broad St and Green St, right at City Hall: street signs, streetlight, the gold dome behind, the tag wall in Haitian blue and red */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) + icBg() +
      /* City Hall's gold dome and white front behind the corner */
      '<rect x="270" y="150" width="130" height="70" fill="#d8d2c4"/><rect x="300" y="122" width="76" height="28" fill="#e2dccd"/>' +
      '<path d="M306 124q32 -60 64 0z" fill="#e2b13c" stroke="#a87a18" stroke-width="2"/><rect x="334" y="84" width="8" height="12" fill="#e2b13c"/>' +
      (function () { let w = ""; for (let x = 278; x < 396; x += 16) w += '<rect x="' + x + '" y="166" width="8" height="16" fill="' + (x % 3 ? "#3a4358" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="14" y="70" width="208" height="150" fill="#33363f"/>' +
      '<rect x="14" y="70" width="208" height="40" fill="' + BLUE + '" opacity=".55"/><rect x="14" y="110" width="208" height="40" fill="' + RED + '" opacity=".5"/>' +
      tag("MACH-HOMMY", 22, 146, 25, "#fff", -7) + tag("PRAY FOR HAITI", 30, 198, 22, GOLD, -3) +
      '<rect x="248" y="56" width="5" height="164" fill="#1d2329"/><path d="M250 58h24" stroke="#1d2329" stroke-width="5"/><path class="flk" d="M264 62h24l-6 8h-12z" fill="#ffe7a8"/>' +
      '<rect x="219" y="88" width="86" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="262" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Broad St</text>' +
      '<rect x="223" y="110" width="78" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="262" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Green St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="cld"><rect x="0" y="222" width="50" height="14" rx="4" fill="#c0392b"/><circle cx="12" cy="238" r="5" fill="#111"/><circle cx="40" cy="238" r="5" fill="#111"/></g>',
      sky("g5", "#0a0f24", "#26305a"));
  }

  window.SCENES = { train, blossoms, cathedral, cityhall, corner };
})();
