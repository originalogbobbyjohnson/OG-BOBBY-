/* East New York opening scenes for the Uncle Murda game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes twinkle{0%,100%{opacity:.95}50%{opacity:.25}}' +
    '.tw{animation:twinkle 2.8s ease-in-out infinite}.tw2{animation-delay:.9s}.tw3{animation-delay:1.8s}' +
    '@keyframes fly{from{transform:translate(-80px,10px)}to{transform:translate(480px,-30px)}}' +
    '.birds{animation:fly 11s linear infinite}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}' +
    '.rip{animation:ripple 3.2s ease-in-out infinite}' +
    '@keyframes carR{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '@keyframes carL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}' +
    '.carR{animation:carR 5s linear infinite}.carL{animation:carL 6.5s linear infinite}' +
    '@keyframes snow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}' +
    '.sn{animation:snow 6s linear infinite}.sn2{animation-duration:8s;animation-delay:-3s}.sn3{animation-duration:7s;animation-delay:-5s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}' +
    '.bl{animation:blink 1.2s steps(1) infinite}.bl2{animation-delay:.6s}' +
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
  const RED = "#ff4d3d", GOLD = "#f2c14e", BONE = "#e8e2d4";
  const BLUE = "#0039a6", BROWN = "#996633", GRAY = "#a7a9ac";

  /* 1. Broadway Junction: the L pulling in up on the el, the J/Z structure crossing overhead behind it */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="108" width="6" height="110" fill="#4a3f38"/><path d="M' + (x + 3) + ' 204 L' + (x + 47) + ' 218 M' + (x + 47) + ' 204 L' + (x + 3) + ' 218" stroke="#4a3f38" stroke-width="3"/>';
    /* the upper el in the back, crossing on a slant */
    let upper = '<path d="M0 34 L400 18 L400 28 L0 44z" fill="#2c2420"/>';
    for (let x = 10; x < 400; x += 44) upper += '<rect x="' + x + '" y="' + (40 - x * 0.04) + '" width="4" height="70" fill="#2c2420"/>';
    /* a little J/Z train parked up top */
    let jz = '<rect x="230" y="12" width="150" height="16" rx="3" fill="#8b8f96" transform="rotate(-2.3 305 20)"/>';
    for (let x = 236; x < 370; x += 18) jz += '<rect x="' + x + '" y="' + (16 - (x - 230) * 0.04) + '" width="11" height="6" fill="#ffe7a8" opacity=".8"/>';
    jz += '<rect x="230" y="' + 24 + '" width="150" height="2" fill="' + BROWN + '" transform="rotate(-2.3 305 20)"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="20" rx="3" fill="#ffe9c2" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#u1)"/>' + stars(16) +
      '<circle cx="34" cy="18" r="11" fill="#ffd9a0" opacity=".85"/>' +
      upper + jz +
      /* the deck of the L platform */
      '<rect x="0" y="100" width="400" height="10" fill="#4a3f38"/>' + girders +
      /* station sign with every line that stops here */
      '<rect x="48" y="62" width="304" height="32" rx="4" fill="#111"/>' +
      '<rect x="48" y="62" width="304" height="4" fill="#fff"/>' +
      '<text x="60" y="86" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Broadway Junction</text>' +
      bullet(224, 80, "A", BLUE) + bullet(248, 80, "C", BLUE) + bullet(272, 80, "J", BROWN) + bullet(296, 80, "Z", BROWN) + bullet(320, 80, "L", GRAY) +
      /* the L slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="124" width="300" height="60" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="162" width="300" height="5" fill="#6d6f73"/>' + windows +
        '<rect x="285" y="134" width="16" height="20" rx="3" fill="#ffe9c2" opacity=".85"/>' +
        '<circle cx="300" cy="174" r="4" fill="#fff6c2"/>' +
        bullet(296, 141, "L", GRAY) +
      '</g>' +
      '<rect x="0" y="184" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#1c1512"/>' +
      tag("ENY", 26, 240, 34, GOLD, -5) + tag("RAP UP", 268, 242, 30, RED, -7),
      sky("u1", "#1a0d14", "#7a3b2a"));
  }

  /* 2. Highland Park on the Cypress Hills ridge: the old Ridgewood Reservoir and its stone gatehouse, geese going over */
  function reservoir() {
    let trees = "";
    for (let i = 0; i < 14; i++) { const x = i * 30 + (i % 2) * 8, r = 18 + (i % 3) * 5; trees += '<circle cx="' + x + '" cy="' + (124 - (i % 3) * 4) + '" r="' + r + '" fill="' + (i % 2 ? "#2f5a32" : "#3c6d3c") + '"/>'; }
    let ripples = "";
    for (let i = 0; i < 6; i++) ripples += '<path class="rip" style="animation-delay:' + (i * 0.4) + 's" d="M' + (40 + i * 55) + ' ' + (176 + (i % 3) * 10) + 'h' + (26 + (i % 2) * 14) + '" stroke="#ffd9a0" stroke-width="1.6" opacity=".55"/>';
    const goose = (x, y) => '<path d="M' + x + ' ' + y + 'q6-6 12 0q6-6 12 0" fill="none" stroke="#1b1410" stroke-width="2" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#u2)"/>' +
      '<circle cx="300" cy="96" r="26" fill="#ffcf73"/>' +
      '<g class="birds">' + goose(60, 54) + goose(84, 64) + goose(36, 66) + goose(108, 74) + '</g>' +
      /* the ridge and trees */
      '<path d="M0 132 Q120 100 220 118 T400 112 V160 H0z" fill="#264a2a"/>' + trees +
      /* the reservoir basin with the sunset in it */
      '<path d="M0 158 H400 V214 H0z" fill="#3d5e7a"/>' +
      '<rect x="0" y="158" width="400" height="56" fill="url(#u2w)" opacity=".7"/>' + ripples +
      '<path d="M0 156 H400" stroke="#8a8072" stroke-width="5"/>' +
      /* the gatehouse: rough grey stone, slate roof */
      '<rect x="160" y="110" width="62" height="50" fill="#8f8577" stroke="#4f473e" stroke-width="2"/>' +
      '<path d="M154 112 L191 88 L228 112z" fill="#3b3f46" stroke="#24272c" stroke-width="2"/>' +
      '<path d="M182 160 v-22 a9 9 0 0 1 18 0 v22z" fill="#2a241f"/>' +
      '<rect x="168" y="124" width="9" height="12" fill="#ffe7a8" class="flk"/><rect x="205" y="124" width="9" height="12" fill="#ffe7a8" class="flk flk2"/>' +
      '<path d="M160 122h62M160 136h62M160 148h62" stroke="#7a7064" stroke-width="1"/>' +
      /* iron fence on the path */
      '<rect x="0" y="214" width="400" height="46" fill="#2a3a22"/>' +
      (function () { let f = '<rect x="0" y="226" width="400" height="3" fill="#111"/>'; for (let x = 4; x < 400; x += 12) f += '<rect x="' + x + '" y="216" width="2.5" height="24" fill="#111"/>'; return f; })() +
      /* park sign */
      '<rect x="22" y="20" width="148" height="40" rx="4" fill="#5b3a22" stroke="' + BONE + '" stroke-width="2"/>' +
      '<text x="96" y="39" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="1" fill="#fff">HIGHLAND PARK</text>' +
      '<text x="96" y="54" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="' + GOLD + '">CYPRESS HILLS</text>',
      sky("u2", "#3a1c3d", "#f08a4b") + sky("u2w", "#f08a4b", "#2b3f55"));
  }

  /* 3. Starrett City / Spring Creek Towers off Pennsylvania Avenue: the brown-brick towers lit up, traffic rolling */
  function towers() {
    const tower = (x, w, top, seed) => {
      let s = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (208 - top) + '" fill="#7a4a34" stroke="#4b2c1f" stroke-width="2"/>' +
        '<rect x="' + (x + w / 2 - 3) + '" y="' + top + '" width="6" height="' + (208 - top) + '" fill="#5e3828"/>';
      let k = seed;
      for (let y = top + 8; y < 200; y += 11) for (let wx = x + 5; wx < x + w - 6; wx += 9) {
        if (Math.abs(wx + 3 - (x + w / 2)) < 5) continue;
        k = (k * 37 + 11) % 101;
        const lit = k % 3 === 0;
        s += '<rect x="' + wx + '" y="' + y + '" width="5" height="6" fill="' + (lit ? "#ffd27a" : "#2d1c15") + '"' + (lit && k % 4 === 0 ? ' class="tw' + (k % 2 ? " tw2" : "") + '"' : "") + '/>';
      }
      return s;
    };
    const car = (cls, y, color, dir) =>
      '<g class="' + cls + '"><rect x="0" y="' + y + '" width="44" height="12" rx="4" fill="' + color + '"/><rect x="8" y="' + (y - 7) + '" width="26" height="9" rx="3" fill="' + color + '"/>' +
      '<circle cx="10" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="34" cy="' + (y + 12) + '" r="4" fill="#111"/>' +
      '<rect x="' + (dir > 0 ? 40 : 0) + '" y="' + (y + 3) + '" width="4" height="4" fill="' + (dir > 0 ? "#fff6c2" : "#ff3b30") + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#u3)"/>' + stars(22) +
      tower(14, 64, 46, 3) + tower(96, 58, 72, 17) + tower(170, 70, 30, 29) + tower(258, 58, 64, 41) + tower(334, 60, 50, 53) +
      '<rect x="0" y="206" width="400" height="54" fill="#1a1a1e"/>' +
      '<path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("carR", 214, "#c0392b", 1) + car("carL", 240, "#d9d4c7", -1) +
      /* the green avenue sign on a mast arm */
      '<rect x="20" y="168" width="5" height="40" fill="#2a2a2e"/>' +
      '<rect x="6" y="154" width="128" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="70" y="167" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Pennsylvania Av</text>' +
      tag("SPRING CREEK", 168, 26, 22, GOLD, -3),
      sky("u3", "#0f0c1e", "#3b2a4d"));
  }

  /* 4. Rap Up night: Cypress Hills row houses strung with lights, snow coming down, the year-end board counting down */
  function rapup() {
    let houses = "";
    const cols = ["#b9a68a", "#8b5a3c", "#c7b79c", "#7d4b36", "#b9a68a"];
    for (let i = 0; i < 5; i++) {
      const x = i * 80, top = 116 + (i % 2) * 6;
      houses += '<rect x="' + x + '" y="' + top + '" width="80" height="' + (214 - top) + '" fill="' + cols[i] + '" stroke="#2a1d14" stroke-width="2"/>' +
        '<rect x="' + x + '" y="' + (top - 6) + '" width="80" height="8" fill="#3a2a1e"/>' +
        '<rect x="' + (x + 12) + '" y="' + (top + 14) + '" width="16" height="22" fill="#ffd27a" opacity=".85"/><rect x="' + (x + 52) + '" y="' + (top + 14) + '" width="16" height="22" fill="#ffd27a" opacity=".6"/>' +
        '<rect x="' + (x + 12) + '" y="' + (top + 52) + '" width="16" height="22" fill="#ffd27a" opacity=".6"/><rect x="' + (x + 50) + '" y="' + (top + 50) + '" width="20" height="44" fill="#3a2414"/>' +
        '<path d="M' + (x + 44) + ' 214 h32 v-6 h-26 v-6 h-6z" fill="#6b6259"/>';
    }
    /* string lights along the cornices */
    let lights = "";
    const lc = [RED, GOLD, "#3bd16f", "#4aa3ff"];
    for (let x = 6; x < 400; x += 14) lights += '<circle cx="' + x + '" cy="' + (114 + Math.sin(x / 13) * 3) + '" r="2.6" fill="' + lc[(x / 14 | 0) % 4] + '" class="bl' + ((x / 14 | 0) % 2 ? " bl2" : "") + '"/>';
    let snow = "";
    for (let i = 0; i < 34; i++) snow += '<circle class="sn' + (i % 3 ? " sn" + (i % 3 + 1) : "") + '" cx="' + ((i * 53) % 400) + '" cy="' + (-(i * 29) % 260) + '" r="' + (i % 4 ? 1.6 : 2.4) + '" fill="#fff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#u4)"/>' + stars(14) +
      /* the board */
      '<rect x="196" y="98" width="6" height="20" fill="#222"/><rect x="88" y="14" width="224" height="86" rx="6" fill="#120d0b" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="200" y="56" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="34" letter-spacing="3" fill="' + RED + '" class="flk">RAP UP</text>' +
      '<text x="200" y="84" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="14" letter-spacing="4" fill="' + GOLD + '">DEC 31 · 11:59</text>' +
      houses + lights +
      '<rect x="0" y="214" width="400" height="46" fill="#e9eef3"/><path d="M0 214h400" stroke="#cfd8e2" stroke-width="3"/>' +
      snow,
      sky("u4", "#06070f", "#22253f"));
  }

  /* 5. Pennsylvania Avenue and Linden Boulevard: street signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 72; y < 220; y += 12) for (let x = (y / 12) % 2 ? 22 : 36; x + 26 <= 250; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#6a3424"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#u5)"/>' + stars(18) +
      /* the wall with the tags */
      '<rect x="20" y="70" width="230" height="150" fill="#4e2619"/>' + bricks +
      tag("UNCLE MURDA", 30, 146, 30, RED, -6) + tag("ENY", 60, 198, 34, GOLD, -3) + tag("LENNY", 150, 200, 22, BONE, -8) +
      /* streetlight with flicker */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffd38a"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffd38a"/></g>' +
      /* street signs */
      '<rect x="252" y="88" width="104" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Pennsylvania Av</text>' +
      '<rect x="262" y="110" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Linden Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#15110f"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("u5", "#140a10", "#3e1e24"));
  }

  window.SCENES = { train, reservoir, towers, rapup, corner };
})();
